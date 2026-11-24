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
    <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border-2 border-orange-200/90 hover:border-amber-400 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Product Image Container (Using High-Res Genuine Photo) */}
      <div className="relative h-56 bg-slate-900 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center filter group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs border border-orange-200">
          {product.category}
        </div>

        {/* Size Badge */}
        <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-black px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
          <Scale className="w-3 h-3 text-slate-950" />
          <span>{product.size}</span>
        </div>

        <div className="absolute bottom-2 left-3 right-3 text-white">
          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>ISO 22000:2018 Certified</span>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-black text-base sm:text-lg text-slate-900 group-hover:text-[#9E1B32] transition-colors line-clamp-1 leading-tight">
            {product.name}
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
            {product.description}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-orange-50 text-amber-950 border border-orange-200"
              >
                <Sparkles className="w-2.5 h-2.5 text-amber-600 shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-orange-100 flex items-center gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-orange-100 hover:bg-[#9E1B32] text-amber-950 hover:text-white text-xs font-bold transition-all duration-200"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          
          <button
            onClick={() => onOpenInquiry ? onOpenInquiry(product) : window.location.href = `/contact?inquiry=wholesale&product=${encodeURIComponent(product.name)}`}
            className="py-2.5 px-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-all duration-200 whitespace-nowrap shadow-2xs"
            title="Inquire Wholesale"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};
