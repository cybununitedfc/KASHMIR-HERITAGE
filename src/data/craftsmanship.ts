import { CraftStep } from '../types';
import { IMAGE_INVENTORY } from './images';

export const CRAFT_STEPS: CraftStep[] = [
  {
    id: 1,
    stageName: 'Stage 01',
    title: 'Raw Changthangi Fiber',
    subtitle: 'Combed at 14,000 Feet Elevation',
    description: 'Authentic Pashmina originates only from the Changthangi (Capra Hircus) goat, native to the high-altitude plateau of Ladakh. To survive winter temperatures dipping to -40°C, the goat grows a microscopic underdown beneath its coarse outer hair.',
    detail: 'In spring, when the goats naturally shed their fleece, nomadic Changpa herders gently comb out the down by hand. Each goat yields merely 150 grams of usable fiber per year.',
    metricLabel: 'Fiber Diameter',
    metricValue: '12 – 14 Microns (6x finer than human hair)',
    image: IMAGE_INVENTORY.craftsmanship[0].primary
  },
  {
    id: 2,
    stageName: 'Stage 02',
    title: 'Hand Spinning on the Yender',
    subtitle: 'The Rhythm of Ancestral Fingers',
    description: 'Because Changthangi fibers are too delicate and short for industrial machines, they can only be spun by hand. Kashmiri women spin the fleece using a traditional wooden wheel known as the "Yender".',
    detail: 'It demands unbroken concentration and tactile sensitivity to draw out a thread of uniform micron fineness without snapping. A master spinner takes two weeks just to spin the yarn for a single stole.',
    metricLabel: 'Yarn Count',
    metricValue: '100+ Metric Count (Incapable of mechanical spinning)',
    image: IMAGE_INVENTORY.craftsmanship[1].primary
  },
  {
    id: 3,
    stageName: 'Stage 03',
    title: 'Loom Weaving & Diamond Twill',
    subtitle: 'Century-Old Himalayan Cedar Looms',
    description: 'The spun yarn is stretched and starched with organic rice water paste before being mounted onto traditional handlooms in Srinagar ateliers. Weavers operate wooden pedals and shuttles in harmonious rhythm.',
    detail: 'Master weavers implement the traditional "Chashm-e-Bulbul" (Eye of the Nightingale) diamond weave, giving the fabric its signature drape, flexibility, and radiant micro-sheen.',
    metricLabel: 'Weaving Rhythm',
    metricValue: '6 to 10 Days of rhythmic manual pedal work',
    image: IMAGE_INVENTORY.craftsmanship[2].primary
  },
  {
    id: 4,
    stageName: 'Stage 04',
    title: 'Sozni Needlework & Kani Taleem',
    subtitle: 'Microscopic Embroidery with Silk Threads',
    description: 'The woven shawl passes into the care of master embroiderers. For Sozni embroidery, artisans use single-strand silk and needles no thicker than an eyelash, piercing the cloth without perforating its delicate core.',
    detail: 'For Kani shawls, weavers use wooden bobbins (Tujih) reading coded metric manuscripts called "Taleem", embedding complex imperial Mughal paisley motifs directly into the structure.',
    metricLabel: 'Artisan Needle Time',
    metricValue: '3 to 18 Months per individual shawl',
    image: IMAGE_INVENTORY.craftsmanship[3].primary
  },
  {
    id: 5,
    stageName: 'Stage 05',
    title: 'Glacier Water Wash & Ring Finishing',
    subtitle: 'Pure Himalayan Spring Water Finish',
    description: 'The finished shawl is gently bathed by hand in the pristine, mineral-rich mountain spring waters of Kashmir using natural wild reetha (soapnuts), removing all sizing without synthetic detergents.',
    detail: 'Once air-dried on cedar racks and steam-pressed with vintage cast irons, each piece is tested for the legendary "Ring Test": gliding smoothly through a golden wedding ring as proof of pure hand-spun lightness.',
    metricLabel: 'Finished Weight',
    metricValue: '140 – 210 Grams (Featherweight warmth)',
    image: IMAGE_INVENTORY.craftsmanship[4].primary
  }
];
