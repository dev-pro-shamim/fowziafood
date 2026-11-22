import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, PackageCheck } from 'lucide-react';
import { Product, COMPANY_INFO } from '../../data/companyData';

interface WholesaleModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const WholesaleModal: React.FC<WholesaleModalProps> = ({ product, isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    quantity: '50-100 units',
    notes: product ? `Inquiry regarding wholesale order of ${product.name} (${product.size})` : ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl border border-gold/30 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-burgundy hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-darkText">Inquiry Submitted!</h3>
            <p className="text-sm text-mutedText leading-relaxed">
              Thank you for your business inquiry with <strong>{COMPANY_INFO.name}</strong>. Our corporate sales team will contact you shortly at <span className="font-semibold text-burgundy">{formData.phone}</span>.
            </p>
            <div className="p-4 bg-cream rounded-xl text-xs text-mutedText space-y-1">
              <p>For urgent corporate orders, you can call us directly:</p>
              <p className="text-sm font-bold text-burgundy flex items-center justify-center gap-1.5 pt-1">
                <Phone className="w-4 h-4 text-gold" />
                {COMPANY_INFO.phone}
              </p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-dark transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark flex items-center gap-1">
                <PackageCheck className="w-3.5 h-3.5 text-gold" />
                Wholesale & Distribution Order
              </span>
              <h3 className="text-xl font-bold text-darkText">
                {product ? `Inquire About ${product.name}` : 'Request Wholesale Catalog'}
              </h3>
              <p className="text-xs text-mutedText">
                Direct procurement from Fowzia Food & Fowzia Nom's network.
              </p>
            </div>

            {product && (
              <div className="flex items-center gap-3 p-3 bg-cream rounded-xl border border-gold/20">
                <img src={product.image} alt={product.name} className="w-12 h-12 object-contain rounded-md bg-white p-1" />
                <div className="text-xs">
                  <div className="font-bold text-darkText">{product.name}</div>
                  <div className="text-mutedText">Category: {product.category} • Size: {product.size}</div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-darkText">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mohammad Rahim"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-darkText">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 01712-XXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="font-semibold text-darkText">Email Address</label>
                <input
                  type="email"
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-darkText">Business / Shop Name</label>
                <input
                  type="text"
                  placeholder="e.g. Green Grocery / Supermarket"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                />
              </div>
            </div>

            <div className="space-y-1 text-xs">
              <label className="font-semibold text-darkText">Estimated Order Volume</label>
              <select
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-white"
              >
                <option value="Sample Order (Trial)">Sample Order (Trial)</option>
                <option value="50-100 units">50 - 100 units</option>
                <option value="100-500 units">100 - 500 units</option>
                <option value="500+ units (Wholesale / Institutional)">500+ units (Wholesale / Institutional)</option>
                <option value="Supermarket / Distribution Partner">Supermarket / Distribution Partner</option>
              </select>
            </div>

            <div className="space-y-1 text-xs">
              <label className="font-semibold text-darkText">Delivery Requirements / Notes</label>
              <textarea
                rows={3}
                placeholder="Mention delivery location, desired schedule, or specific requirements..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-burgundy to-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg hover:from-burgundy-dark hover:to-burgundy transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Wholesale Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
