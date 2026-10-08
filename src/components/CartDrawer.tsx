import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/currency';
import { SafeImage } from './SafeImage';
import { X, Trash2, ArrowRight, ShieldCheck, CheckCircle2, Box } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  currency: Currency;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
  onClearCart
}) => {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'confirmed'>('cart');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'United States'
  });
  const [confirmedOrderId, setConfirmedOrderId] = useState('');

  if (!isOpen) return null;

  const subtotalUSD = items.reduce(
    (acc, item) => acc + item.product.priceUSD * item.quantity,
    0
  );

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = `KH-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedOrderId(orderNumber);
    setCheckoutStep('confirmed');
    onClearCart();
  };

  const resetAll = () => {
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={resetAll}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#101014] border-l border-white/10 shadow-2xl text-[#f5f2eb] flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-serif text-[#f5f2eb]">Your Atelier Bag</h2>
              <p className="text-xs text-[#8f8a80]">Direct from Srinagar master looms</p>
            </div>
            <button
              onClick={resetAll}
              aria-label="Close cart drawer"
              className="p-2 text-[#9e998e] hover:text-[#f5f2eb] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {checkoutStep === 'confirmed' ? (
              /* Order Confirmation State */
              <div className="text-center py-12 space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#d8be8a]/20 border border-[#d8be8a]/50 flex items-center justify-center text-[#d8be8a]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif text-[#f5f2eb]">
                  Order Confirmed
                </h3>
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm font-mono text-xs">
                  <span className="text-[#8f8a80] block mb-1">PROVENANCE REGISTRATION NO:</span>
                  <span className="text-base text-[#d8be8a] font-semibold">{confirmedOrderId}</span>
                </div>
                <p className="text-xs text-[#a39e94] leading-relaxed">
                  Thank you, {formData.name || 'esteemed patron'}. Your heirloom Kashmiri Pashmina is being inspected and prepared in our Srinagar atelier. A personal dispatch notice with DHL tracking and artisan certificate will be emailed to {formData.email || 'your email'}.
                </p>
                <button
                  onClick={resetAll}
                  className="w-full py-3.5 bg-[#f5f2eb] text-[#0b0b0d] text-xs uppercase tracking-widest font-medium hover:bg-[#d8be8a] transition-colors cursor-pointer"
                >
                  Return to Atelier
                </button>
              </div>
            ) : checkoutStep === 'checkout' ? (
              /* Checkout Form State */
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <div className="text-xs uppercase tracking-wider text-[#d8be8a] mb-2 font-mono">
                  Atelier Client Details
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8f8a80] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lady / Lord / Patrons Name"
                    className="w-full px-3 py-2 bg-white/5 border border-white/15 text-xs text-[#f5f2eb] rounded-sm focus:outline-none focus:border-[#d8be8a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8f8a80] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="patron@domain.com"
                    className="w-full px-3 py-2 bg-white/5 border border-white/15 text-xs text-[#f5f2eb] rounded-sm focus:outline-none focus:border-[#d8be8a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8f8a80] mb-1">
                    Direct Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3 py-2 bg-white/5 border border-white/15 text-xs text-[#f5f2eb] rounded-sm focus:outline-none focus:border-[#d8be8a]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#8f8a80] mb-1">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Private Estate / Residence Address"
                    className="w-full px-3 py-2 bg-white/5 border border-white/15 text-xs text-[#f5f2eb] rounded-sm focus:outline-none focus:border-[#d8be8a]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8f8a80] mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City / Region"
                      className="w-full px-3 py-2 bg-white/5 border border-white/15 text-xs text-[#f5f2eb] rounded-sm focus:outline-none focus:border-[#d8be8a]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#8f8a80] mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="Country"
                      className="w-full px-3 py-2 bg-white/5 border border-white/15 text-xs text-[#f5f2eb] rounded-sm focus:outline-none focus:border-[#d8be8a]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-xs space-y-1">
                    <div className="flex justify-between text-[#8f8a80]">
                      <span>Order Value:</span>
                      <span className="font-mono text-[#f5f2eb]">{formatPrice(subtotalUSD, currency)}</span>
                    </div>
                    <div className="flex justify-between text-[#8f8a80]">
                      <span>Packaging:</span>
                      <span className="text-[#d8be8a]">Walnut Chest (Complimentary)</span>
                    </div>
                    <div className="flex justify-between text-[#8f8a80]">
                      <span>Courier:</span>
                      <span className="text-[#d8be8a]">DHL Express (Insured Free)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setCheckoutStep('cart')}
                    className="px-4 py-3 border border-white/15 text-xs uppercase tracking-wider text-[#8f8a80] hover:text-[#f5f2eb]"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#d8be8a] text-[#0b0b0d] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#ebd5a7] transition-colors cursor-pointer"
                  >
                    Confirm Atelier Order
                  </button>
                </div>
              </form>
            ) : items.length === 0 ? (
              /* Empty Cart State */
              <div className="text-center py-16 space-y-4">
                <Box className="w-12 h-12 mx-auto text-[#66625a]" />
                <p className="text-lg font-serif text-[#cfcac0]">Your bag is currently empty.</p>
                <p className="text-xs text-[#8f8a80] max-w-xs mx-auto">
                  Explore our handcrafted shawls woven from pure Changthangi cashmere in Srinagar.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 border border-white/20 text-xs uppercase tracking-wider hover:border-[#d8be8a] hover:text-[#d8be8a] transition-colors"
                >
                  Browse Collection
                </button>
              </div>
            ) : (
              /* Itemized Cart List */
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 pb-6 border-b border-white/10"
                  >
                    <SafeImage
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-sm bg-[#16161a] border border-white/10"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="text-sm font-serif text-[#f5f2eb] leading-tight">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            aria-label={`Remove ${item.product.name} from bag`}
                            className="text-[#78746c] hover:text-red-400 p-1 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-[11px] text-[#8f8a80] mt-0.5">
                          {item.product.micronCount} · {item.product.weaveType.split(' ')[0]}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-white/15 rounded-sm">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-0.5 text-xs text-[#8f8a80] hover:text-[#f5f2eb]"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 text-xs font-mono tabular-nums text-[#f5f2eb]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-0.5 text-xs text-[#8f8a80] hover:text-[#f5f2eb]"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-sm font-serif text-[#f5f2eb] tabular-nums">
                          {formatPrice(item.product.priceUSD * item.quantity, currency)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {items.length > 0 && checkoutStep === 'cart' && (
            <div className="p-6 border-t border-white/10 bg-[#0d0d10] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#8f8a80]">
                  <span>Subtotal</span>
                  <span className="font-serif text-base text-[#f5f2eb] tabular-nums">
                    {formatPrice(subtotalUSD, currency)}
                  </span>
                </div>
                <div className="flex justify-between text-[#8f8a80]">
                  <span>Insured Global Courier</span>
                  <span className="text-emerald-400 font-mono">Complimentary</span>
                </div>
              </div>

              <div className="p-2.5 bg-white/5 border border-white/10 rounded-sm flex items-center gap-2 text-[11px] text-[#b8b3a7]">
                <ShieldCheck className="w-4 h-4 text-[#d8be8a] shrink-0" />
                <span>Includes Government GI Certification & Walnut Chest</span>
              </div>

              <button
                onClick={() => setCheckoutStep('checkout')}
                className="w-full py-4 bg-[#f5f2eb] text-[#0b0b0d] hover:bg-[#d8be8a] text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
