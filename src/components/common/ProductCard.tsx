import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Scale } from 'lucide-react';
import { Product } from '../../data/companyData';

interface ProductCardProps {
  product: Product;
  onOpenInquiry?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenInquiry }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-burgundy/10 transition-all duration-300 flex flex-col group hover:-translate-y-1">
      {/* Product Image Container */}
      <div className="relative h-56 bg-gradient-to-b from-[#FFFDF9] to-[#F7F2E9] overflow-hidden p-4 flex items-center justify-center">
        {/* Subtle decorative ring */}
        <div className="absolute inset-0 bg-radial from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-burgundy font-semibold text-[11px] px-2.5 py-1 rounded-full shadow-sm border border-burgundy/15">
          {product.category}
        </div>

        {/* Size Badge */}
        <div className="absolute top-3 right-3 bg-burgundy text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Scale className="w-3 h-3 text-gold" />
          <span>{product.size}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="font-bold text-lg text-darkText group-hover:text-burgundy transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-xs text-mutedText leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.features.slice(0, 2).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-cream text-burgundy-dark border border-gold/30"
              >
                <Sparkles className="w-2.5 h-2.5 text-gold shrink-0" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-burgundy/5 hover:bg-burgundy text-burgundy hover:text-white text-xs font-semibold transition-all duration-200"
          >
            <span>View Details</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
          
          <button
            onClick={() => onOpenInquiry ? onOpenInquiry(product) : window.location.href = `/contact?inquiry=wholesale&product=${encodeURIComponent(product.name)}`}
            className="py-2 px-3 rounded-xl bg-gold/15 hover:bg-gold text-darkText hover:text-white text-xs font-semibold transition-all duration-200 whitespace-nowrap"
            title="Inquire Wholesale"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};
