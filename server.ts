import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

// Increase JSON payload limit to handle base64 images
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Initialize GoogleGenAI client with User-Agent header as required
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build'
    }
  }
});

/**
 * 1. Start Video Generation
 * POST /api/generate-video
 * Uses model: veo-3.1-fast-generate-preview
 * Aspect ratio: '16:9' or '9:16'
 */
app.post('/api/generate-video', async (req: Request, res: Response) => {
  try {
    const { imageBase64, mimeType = 'image/jpeg', prompt, aspectRatio = '16:9' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Please provide an image to animate into video.' });
    }

    // Clean base64 data url if present
    const cleanBase64 = imageBase64.replace(/^data:[^;]+;base64,/, '');

    const validAspectRatio = aspectRatio === '9:16' ? '9:16' : '16:9';

    const operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || 'Gentle cinematic mountain wind softly fluttering intricate handcrafted Kashmiri pashmina textile with natural light rays',
      image: {
        imageBytes: cleanBase64,
        mimeType: mimeType || 'image/jpeg'
      },
      config: {
        numberOfVideos: 1,
        aspectRatio: validAspectRatio
      }
    });

    return res.json({ operationName: operation.name });
  } catch (error: any) {
    console.error('Error starting video generation:', error);
    const message = error?.message || 'Failed to initiate video generation.';
    return res.status(500).json({ error: message });
  }
});

/**
 * 2. Check Video Generation Status
 * POST /api/video-status
 */
app.post('/api/video-status', async (req: Request, res: Response) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'Missing operationName parameter.' });
    }

    const updated = await ai.operations.getVideosOperation({
      operation: { name: operationName } as any
    });

    return res.json({
      done: Boolean(updated.done),
      error: updated.error || null
    });
  } catch (error: any) {
    console.error('Error checking video status:', error);
    const message = error?.message || 'Failed to poll video generation status.';
    return res.status(500).json({ error: message });
  }
});

/**
 * 3. Download/Stream Video
 * POST /api/video-download
 */
app.post('/api/video-download', async (req: Request, res: Response) => {
  try {
    const { operationName } = req.body;
    if (!operationName) {
      return res.status(400).json({ error: 'Missing operationName parameter.' });
    }

    const updated = await ai.operations.getVideosOperation({
      operation: { name: operationName } as any
    });

    const videoUri = updated.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) {
      return res.status(404).json({ error: 'Video URI not found or video is still processing.' });
    }

    const videoRes = await fetch(videoUri, {
      headers: {
        'x-goog-api-key': process.env.GEMINI_API_KEY || ''
      }
    });

    if (!videoRes.ok) {
      return res.status(videoRes.status).json({ error: 'Failed to retrieve video stream from storage.' });
    }

    const arrayBuffer = await videoRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader('Content-Type', 'video/mp4');
    res.setHeader('Content-Length', buffer.length);
    res.setHeader('Content-Disposition', 'inline; filename="kashmir-heritage-veo.mp4"');
    return res.send(buffer);
  } catch (error: any) {
    console.error('Error downloading video:', error);
    const message = error?.message || 'Failed to download generated video.';
    return res.status(500).json({ error: message });
  }
});

// Mount Vite or serve static production build
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Server startup error:', err);
  process.exit(1);
});
