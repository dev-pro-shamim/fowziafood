import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Scale, ShieldCheck } from 'lucide-react';
import { Product } from '../../data/companyData';

interface ProductCardProps {
  product: Product;
  onOpenInquiry?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenInquiry }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 hover:border-burgundy/30 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Product Image Container */}
      <div className="relative h-60 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden p-4 flex items-center justify-center border-b border-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm border border-slate-200">
          {product.category}
        </div>

        {/* Size Badge */}
        <div className="absolute top-3 right-3 bg-burgundy text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
          <Scale className="w-3 h-3 text-gold" />
          <span>{product.size}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-burgundy transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200"
              >
                <Sparkles className="w-2.5 h-2.5 text-gold-dark shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-burgundy text-slate-800 hover:text-white text-xs font-bold transition-all duration-200"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          
          <button
            onClick={() => onOpenInquiry ? onOpenInquiry(product) : window.location.href = `/contact?inquiry=wholesale&product=${encodeURIComponent(product.name)}`}
            className="py-2.5 px-3.5 rounded-xl bg-gold/20 hover:bg-gold text-amber-950 hover:text-white text-xs font-bold transition-all duration-200 whitespace-nowrap"
            title="Inquire Wholesale"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};
