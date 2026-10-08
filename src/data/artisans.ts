import { Artisan } from '../types';
import { IMAGE_INVENTORY } from './images';

export const ARTISANS: Artisan[] = [
  {
    id: 'artisan-1',
    name: 'Ustad Ghulam Nabi Dar',
    craftRole: 'Master Sozni Embroiderer',
    experience: '52 Years on the Craft',
    village: 'Zadibal, Downtown Srinagar',
    quote: 'When the needle pierces the pashm, your breathing must match the thread. You cannot rush what is meant to endure for centuries.',
    specialty: 'Single-thread floral miniature needlework',
    bio: 'Born into a family of royal court embroiderers, Ghulam Nabi began learning Sozni needlework under his grandfather at age 11. He has dedicated over half a century to preserving complex floral motifs.',
    image: IMAGE_INVENTORY.artisans.ghulam.primary
  },
  {
    id: 'artisan-2',
    name: 'Fatima Begum',
    craftRole: 'Master Yender Spinner',
    experience: '38 Years of Hand Spinning',
    village: 'Nawa Kadal, Srinagar',
    quote: 'The machine breaks the soul of the fleece. Only human fingers can sense the microscopic warmth of Changthangi down.',
    specialty: 'Ultra-fine 100+ metric count yarn spinning',
    bio: 'Fatima leads a collective of 28 women spinners in Old Srinagar. Under Kashmir Heritage’s direct model, every spinner earns direct dignified living wages, bypassing urban scrap dealers.',
    image: IMAGE_INVENTORY.artisans.fatima.primary
  },
  {
    id: 'artisan-3',
    name: 'Bashir Ahmad Mir',
    craftRole: 'Master Kani Weaver',
    experience: '44 Years on Cedar Looms',
    village: 'Kanihama Craft Village, Budgam',
    quote: 'Our language is the Taleem—a poem of colours written centuries ago. We do not just weave wool; we weave memory.',
    specialty: 'Tujih bobbin tapestry weave & Mughal booteh',
    bio: 'Bashir is one of only a few dozen master weavers alive who can decipher and weave complex multi-color Kani Taleem codes without a template, producing museum-grade shawls with over 2,000 bobbins.',
    image: IMAGE_INVENTORY.artisans.bashir.primary
  }
];
