import { Product } from '../types';
import { IMAGE_INVENTORY } from './images';

export const PRODUCTS: Product[] = [
  {
    id: 'kh-sozni-noir',
    name: 'The Royal Sozni Noir Shawl',
    category: 'Sozni Needlework',
    priceUSD: 1480,
    material: '100% Grade A Changthangi Cashmere',
    micronCount: '12.8 Microns',
    dimensions: '200 cm × 100 cm (Full Wrap)',
    weaveType: 'Chashm-e-Bulbul (Bulbul Eye Diamond Weave)',
    artisanName: 'Ustad Ghulam Nabi Dar',
    originDistrict: 'Zadibal, Srinagar, Kashmir',
    handcraftDuration: '180 Days of Continuous Hand Needlework',
    description: 'An exceptional heirloom piece crafted with ultra-fine silk thread needlework (Sozni) across a noir charcoal hand-spun Pashmina foundation. Each floral trellis is placed using single-needle micro-stitching.',
    features: [
      'Microscopic fiber fineness: 12.8 microns',
      'Authentic Geographical Indication (GI) Registered',
      'Twill diamond weave (Chashm-e-Bulbul)',
      'Hand-twisted fringed selvedge borders'
    ],
    image: IMAGE_INVENTORY.products.sozniNoir.primary,
    gallery: [
      IMAGE_INVENTORY.products.sozniNoir.primary,
      IMAGE_INVENTORY.craftsmanship[3].primary,
      IMAGE_INVENTORY.authenticity.primary,
      IMAGE_INVENTORY.artisans.ghulam.primary
    ],
    inStock: true,
    giCertified: true
  },
  {
    id: 'kh-kani-bagh',
    name: 'Mughal Bagh Kani Masterpiece',
    category: 'Kani Weave',
    priceUSD: 2450,
    material: '100% Pure Hand-spun Pashm Wool',
    micronCount: '13.2 Microns',
    dimensions: '205 cm × 102 cm (Full Wrap)',
    weaveType: 'Kani (Tujih Eyeless Bobbin Tapestry Weave)',
    artisanName: 'Bashir Ahmad Mir & Sons',
    originDistrict: 'Kanihama, District Budgam, Kashmir',
    handcraftDuration: '14 Months on Antique Wooden Loom',
    description: 'Woven using the historic Kani technique where each color is intertwined with eyeless wooden bobbins following an ancient coded script called "Taleem". A museum-grade textile reviving imperial Mughal floral court motifs.',
    features: [
      'Over 2,400 miniature wooden bobbins used',
      'Follows ancestral Talim coded script',
      'Pure vegetable & natural mineral dyes',
      'Passes through a wedding ring effortlessly'
    ],
    image: IMAGE_INVENTORY.products.kaniBagh.primary,
    gallery: [
      IMAGE_INVENTORY.products.kaniBagh.primary,
      IMAGE_INVENTORY.craftsmanship[2].primary,
      IMAGE_INVENTORY.authenticity.primary,
      IMAGE_INVENTORY.artisans.bashir.primary
    ],
    inStock: true,
    giCertified: true
  },
  {
    id: 'kh-pashm-raw-stole',
    name: 'Changthangi Raw Pashm Stole',
    category: 'Pure Natural Pashm',
    priceUSD: 890,
    material: '100% Un-dyed Changthangi Mountain Underfleece',
    micronCount: '12.4 Microns',
    dimensions: '200 cm × 75 cm (Stole)',
    weaveType: 'Handloom Plain Diamond Weave',
    artisanName: 'Fatima Begum (Spinner) & Mushtaq Wani (Weaver)',
    originDistrict: 'Shehr-e-Khaas, Downtown Srinagar',
    handcraftDuration: '45 Days of Handcrafting',
    description: 'Completely un-dyed in its natural raw cloud-ivory shade. Harvested during spring moulting from high-altitude nomadic herds on the Changthang plateau at 14,000 feet, where sub-zero temperatures yield the world’s softest fleece.',
    features: [
      'Completely natural undyed ivory fleece',
      'Zero bleach or industrial chemicals used',
      'Spun on traditional wooden Yender charkha',
      'Featherlight warmth weighing under 160 grams'
    ],
    image: IMAGE_INVENTORY.products.pashmRaw.primary,
    gallery: [
      IMAGE_INVENTORY.products.pashmRaw.primary,
      IMAGE_INVENTORY.craftsmanship[0].primary,
      IMAGE_INVENTORY.craftsmanship[1].primary,
      IMAGE_INVENTORY.artisans.fatima.primary
    ],
    inStock: true,
    giCertified: true
  },
  {
    id: 'kh-jamawar-shah',
    name: 'Shah-e-Hamadan Heritage Jamawar',
    category: 'Jamawar Heritage',
    priceUSD: 3200,
    material: '100% Fine Changthangi Cashmere & Pure Mulberry Silk Threads',
    micronCount: '13.0 Microns',
    dimensions: '210 cm × 105 cm (Grand Shawl)',
    weaveType: 'Intricate All-Over Jamawar Needlework',
    artisanName: 'Master Artisan Altaf Hussain',
    originDistrict: 'Rainawari, Srinagar, Kashmir',
    handcraftDuration: '22 Months of Dedicated Handcrafting',
    description: 'An all-over tapestry-like heirloom shawl named in honour of Mir Sayyid Ali Hamadani, who brought Persian master textile craftsmen to Kashmir in the 14th century. Not a single millimeter of the base fabric remains uncovered by delicate threadwork.',
    features: [
      'Full dense Jamawar surface needlework',
      'Historical 14th-century Persian-Kashmiri design',
      'Individually numbered provenance parchment',
      'Certified under Jammu & Kashmir Handloom Directorate'
    ],
    image: IMAGE_INVENTORY.products.jamawarShah.primary,
    gallery: [
      IMAGE_INVENTORY.products.jamawarShah.primary,
      IMAGE_INVENTORY.craftsmanship[3].primary,
      IMAGE_INVENTORY.authenticity.primary,
      IMAGE_INVENTORY.directAtelier.primary
    ],
    inStock: true,
    giCertified: true
  },
  {
    id: 'kh-kalamkari-tree',
    name: 'Kalamkari Botanical Tree of Life Shawl',
    category: 'Tilla & Kalamkari',
    priceUSD: 1850,
    material: '100% Hand-spun Changthangi Cashmere & Natural Organic Pigments',
    micronCount: '13.0 Microns',
    dimensions: '200 cm × 100 cm',
    weaveType: 'Handloom Plain Weave with Bamboo Pen Work',
    artisanName: 'Manzoor Ahmad & Tariq Mir',
    originDistrict: 'Soura, Srinagar, Kashmir',
    handcraftDuration: '110 Days of Hand Painting and Outline Needlework',
    description: 'An extraordinary union of ancient Persian miniature art and Kashmiri needlecraft. Organic vegetal and mineral extracts are painted by hand with fine bamboo pens (Kalam), then each motif boundary is hand-stitched with fine silk threads.',
    features: [
      'Hand-drawn with bamboo pens using natural saffron & walnut dye',
      'Single-needle fine Amli outline embroidery',
      'Organic cold river water washed',
      'Accompanied by Master Calligrapher authentication certificate'
    ],
    image: '/src/assets/images/kalamkari_pashmina_shawl_1791222189020.jpg',
    gallery: [
      '/src/assets/images/kalamkari_pashmina_shawl_1791222189020.jpg',
      IMAGE_INVENTORY.craftsmanship[3].primary,
      IMAGE_INVENTORY.authenticity.primary,
      IMAGE_INVENTORY.craftsmanship[1].primary
    ],
    inStock: true,
    giCertified: true
  },
  {
    id: 'kh-tilla-bridal',
    name: 'Royal Tilla Zari Embroidered Bridal Wrap',
    category: 'Tilla & Kalamkari',
    priceUSD: 2150,
    material: '100% Pure Fine Pashmina with Genuine Silver/Gold Gilded Tilla Thread',
    micronCount: '12.9 Microns',
    dimensions: '200 cm × 100 cm',
    weaveType: 'Chashm-e-Bulbul Diamond Twill',
    artisanName: 'Farooq Ahmad Sofi (Royal Tilla Guild)',
    originDistrict: 'Shehr-e-Khaas, Downtown Srinagar',
    handcraftDuration: '140 Days of Specialized Tilla Needlework',
    description: 'Historic royal bridal wrap adorned with gleaming metallic Tilla thread hand-pierced across four outer borders with paisley cartouches. Once reserved exclusively for Kashmiri and Mughal court ceremonies.',
    features: [
      'Genuine gold/silver gilded metallic Tilla wire',
      'Ancestral court paisley medallion corners',
      'Featherweight pure Changthangi cashmere base',
      'Ships in velvet-lined carved deodar walnut chest'
    ],
    image: '/src/assets/images/tilla_embroidered_pashmina_1791222203700.jpg',
    gallery: [
      '/src/assets/images/tilla_embroidered_pashmina_1791222203700.jpg',
      IMAGE_INVENTORY.craftsmanship[2].primary,
      IMAGE_INVENTORY.craftsmanship[3].primary,
      IMAGE_INVENTORY.authenticity.primary
    ],
    inStock: true,
    giCertified: true
  },
  {
    id: 'kh-sozni-hashidar',
    name: 'Hashidar Minimalist Border Wrap',
    category: 'Sozni Needlework',
    priceUSD: 1150,
    material: '100% Changthangi Fine Cashmere',
    micronCount: '13.1 Microns',
    dimensions: '200 cm × 100 cm',
    weaveType: 'Fine Handloom Twill',
    artisanName: 'Zahoor Ahmad Bhat',
    originDistrict: 'Safakadal, Srinagar',
    handcraftDuration: '75 Days of Handwork',
    description: 'A restrained modern luxury piece featuring a four-sided architectural border (Hashi) in pale gold and slate silk thread, framing a pristine field of deep charcoal pashmina.',
    features: [
      'Refined 4-edge Hashidar perimeter embroidery',
      'Versatile modern styling for day and evening',
      'Silky hand-feel with organic drape',
      'Hand-finished eyelash fringe'
    ],
    image: IMAGE_INVENTORY.products.sozniNoir.primary,
    gallery: [
      IMAGE_INVENTORY.products.sozniNoir.primary,
      IMAGE_INVENTORY.craftsmanship[2].primary,
      IMAGE_INVENTORY.authenticity.primary,
      IMAGE_INVENTORY.craftsmanship[4].primary
    ],
    inStock: true,
    giCertified: true
  },
  {
    id: 'kh-natural-sand-wrap',
    name: 'Karakoram Sand Cashmere Wrap',
    category: 'Pure Natural Pashm',
    priceUSD: 940,
    material: '100% Natural Camel-Tone Changthangi Down',
    micronCount: '12.6 Microns',
    dimensions: '200 cm × 90 cm',
    weaveType: 'Subtle Diamond Lozenge Weave',
    artisanName: 'Mohammad Shafi Rather',
    originDistrict: 'Ganderbal, Kashmir',
    handcraftDuration: '50 Days of Handcrafting',
    description: 'Derived from rare nomadic mountain goats with naturally warm sand-beige underdown. Spun without synthetic oils or sizing agents and finished with spring water from Dachigam national park.',
    features: [
      'Rare natural camel-taupe un-dyed shade',
      'Softest tactile grade tested at 12.6 microns',
      'Pure organic finishing with glacier-fed water',
      'Accompanied by serial verification card'
    ],
    image: IMAGE_INVENTORY.products.pashmRaw.primary,
    gallery: [
      IMAGE_INVENTORY.products.pashmRaw.primary,
      IMAGE_INVENTORY.craftsmanship[0].primary,
      IMAGE_INVENTORY.craftsmanship[1].primary,
      IMAGE_INVENTORY.authenticity.primary
    ],
    inStock: true,
    giCertified: true
  }
];
