export type Currency = 'USD' | 'EUR' | 'GBP' | 'INR';

export interface Product {
  id: string;
  name: string;
  category: 'Sozni Needlework' | 'Kani Weave' | 'Pure Natural Pashm' | 'Jamawar Heritage' | 'Tilla & Kalamkari';
  priceUSD: number;
  material: string;
  micronCount: string;
  dimensions: string;
  weaveType: string;
  artisanName: string;
  originDistrict: string;
  handcraftDuration: string;
  description: string;
  features: string[];
  image: string;
  gallery: string[];
  inStock: boolean;
  giCertified: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CraftStep {
  id: number;
  title: string;
  stageName: string;
  subtitle: string;
  description: string;
  detail: string;
  metricLabel: string;
  metricValue: string;
  image: string;
}

export interface Artisan {
  id: string;
  name: string;
  craftRole: string;
  experience: string;
  village: string;
  quote: string;
  specialty: string;
  bio: string;
  image: string;
}
