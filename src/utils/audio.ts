// Web Audio API ambient sound generator for serene mountain atmosphere and subtle resonant harmonic notes
class AmbientAudioController {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private harmonicInterval: number | null = null;

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public start(): void {
    if (this.isPlaying) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 3);
      this.masterGain.connect(this.ctx.destination);

      // 1. Subtle pink-noise filtered mountain breeze
      const bufferSize = this.ctx.sampleRate * 2;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.997 * b0 + white * 0.05;
        b1 = 0.985 * b1 + white * 0.07;
        b2 = 0.950 * b2 + white * 0.09;
        data[i] = (b0 + b1 + b2) * 0.06;
      }

      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      const lowpass = this.ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(260, this.ctx.currentTime);

      noiseSource.connect(lowpass);
      lowpass.connect(this.masterGain);
      noiseSource.start();
      this.noiseNode = noiseSource;

      // 2. Periodic gentle resonant bell/santoor drone notes (C# minor pentatonic)
      const freqs = [138.59, 164.81, 207.65, 277.18, 329.63]; // C#3, E3, G#3, C#4, E4
      this.playGentleChime(freqs[0]);

      this.harmonicInterval = window.setInterval(() => {
        if (!this.isPlaying || !this.ctx) return;
        const note = freqs[Math.floor(Math.random() * freqs.length)];
        this.playGentleChime(note);
      }, 7000);

      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  private playGentleChime(freq: number): void {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    noteGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.04, this.ctx.currentTime + 1.2);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 6.5);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start();
    osc.stop(this.ctx.currentTime + 6.6);
  }

  public stop(): void {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;
    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
      setTimeout(() => {
        if (this.harmonicInterval) {
          clearInterval(this.harmonicInterval);
          this.harmonicInterval = null;
        }
        if (this.ctx && this.ctx.state !== 'closed') {
          this.ctx.close();
        }
        this.isPlaying = false;
      }, 1300);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const ambientAudio = new AmbientAudioController();
