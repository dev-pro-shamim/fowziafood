import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../../data/companyData';

export const CategorySection: React.FC = () => {
  // Mapping each category to high-resolution genuine camera photos from public/images/hd/
  const categoryImages: Record<string, string> = {
    'soy': '/images/hd/pic_02.jpg', // Genuine High-Res Camera Photo of Soy Products
    'dairy-drinks': '/images/hd/pic_07.jpg', // Genuine High-Res Camera Photo of Borhani & Dairy
    'dairy-desserts': '/images/hd/pic_05.jpg', // Genuine High-Res Camera Photo of Curds
    'cheese': '/images/hd/pic_11.jpg', // Genuine High-Res Camera Photo of Mozzarella Cheese
    'frozen': '/images/hd/pic_14.jpg', // Genuine High-Res Camera Photo of Frozen Foods
    'spices': '/images/hd/pic_08.jpg'  // Genuine High-Res Camera Photo of Pure Spices
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-b border-orange-100">
      
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            Product Portfolio Spectrum (19 Items)
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance-header">
            Certified Healthy Food{' '}
            <span className="text-[#9E1B32]">
              Categories
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            All 19 products are hygienically manufactured under ISO 22000:2018 food safety standards, direct farmer supervision, and quality assurance.
          </p>
        </div>

        {/* 6 Category Portfolio Cards with Product Names as Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => {
            // Find products belonging to this category
            const categoryProducts = PRODUCTS.filter(p => p.categorySlug === cat.id);
            const highResImage = categoryImages[cat.id] || cat.image;

            return (
              <div
                key={cat.id}
                className="bg-[#FFFDF9] rounded-3xl overflow-hidden border-2 border-orange-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Genuine High-Res Camera Photo Banner */}
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={highResImage}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {cat.itemCount}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                      {cat.name}
                    </h3>
                  </div>
                </div>

                {/* Content & Listed Product Names */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {/* Clean List of Official Product Names as Requested */}
                  <div className="space-y-2 pt-2 border-t border-orange-100">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between">
                      <span>Official Listed Products:</span>
                      <span className="text-[10px] text-amber-700 font-bold">{categoryProducts.length} Items</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {categoryProducts.map((prod) => (
                        <span
                          key={prod.id}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white border border-orange-200 text-slate-800 shadow-2xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{prod.name} ({prod.size})</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link CTA */}
                  <div className="pt-3 border-t border-orange-100">
                    <Link
                      to={`/products?category=${cat.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-orange-100 hover:bg-[#9E1B32] text-amber-950 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-2xs"
                    >
                      <span>Explore {cat.name} Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9E1B32] to-[#7A0C22] hover:from-[#7A0C22] hover:to-[#9E1B32] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all group"
          >
            <span>View Complete 19 Products Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};
