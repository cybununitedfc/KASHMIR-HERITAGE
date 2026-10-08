import { Currency } from '../types';

export const CURRENCY_RATES: Record<Currency, { rate: number; symbol: string; prefix: boolean }> = {
  USD: { rate: 1, symbol: '$', prefix: true },
  EUR: { rate: 0.92, symbol: '€', prefix: true },
  GBP: { rate: 0.79, symbol: '£', prefix: true },
  INR: { rate: 83.5, symbol: '₹', prefix: true }
};

export function formatPrice(amountUSD: number, currency: Currency): string {
  const conf = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
  const converted = Math.round(amountUSD * conf.rate);
  const formatted = converted.toLocaleString();
  return `${conf.symbol}${formatted}`;
}
