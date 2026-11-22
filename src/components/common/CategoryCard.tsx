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
      className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-200 transition-all duration-300 flex flex-col h-80 bg-slate-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.88]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent group-hover:via-slate-950/40 transition-colors duration-300" />
      </div>

      {/* Top Badge */}
      <div className="relative z-10 p-5 flex justify-between items-start">
        <span className="bg-gradient-to-r from-gold to-amber-400 text-burgundy-dark font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          {itemCount}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 mt-auto p-6 space-y-2">
        <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
          {name}
        </h3>
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
          {description}
        </p>

        <div className="pt-2 flex items-center gap-2 text-xs font-bold text-amber-300 group-hover:text-white transition-colors">
          <span>Explore Catalog</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
