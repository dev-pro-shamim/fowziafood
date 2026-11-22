import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  description,
  image,
  itemCount,
}) => {
  return (
    <Link
      to={`/products?category=${id}`}
      className="group relative rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-burgundy/10 transition-all duration-300 flex flex-col h-80 bg-white"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
        />
        {/* Gradient dark overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#25060E] via-[#25060E]/70 to-black/30 group-hover:via-[#25060E]/60 transition-colors duration-300" />
      </div>

      {/* Top Badge */}
      <div className="relative z-10 p-5 flex justify-between items-start">
        <span className="bg-gold text-burgundy-dark font-extrabold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
          {itemCount}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 mt-auto p-5 space-y-2">
        <h3 className="text-xl font-bold text-white group-hover:text-gold-light transition-colors">
          {name}
        </h3>
        <p className="text-xs text-cream/80 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-gold-light group-hover:text-white transition-colors">
          <span>Explore Products</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
