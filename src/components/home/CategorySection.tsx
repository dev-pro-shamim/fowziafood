import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../../data/companyData';
import { CategoryCard } from '../common/CategoryCard';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-burgundy/10 text-burgundy text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            Wholesome Food Spectrum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
            Explore Our Product <span className="text-burgundy">Categories</span>
          </h2>
          <p className="text-sm sm:text-base text-mutedText">
            Discover our diverse portfolio of soy-derived protein essentials, cultured dairy beverages, sweet curd desserts, artisanal cheese, and unadulterated spices.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              name={cat.name}
              description={cat.description}
              image={cat.image}
              itemCount={cat.itemCount}
            />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all group"
          >
            <span>View Full 19 Products Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
