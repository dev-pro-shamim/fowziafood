import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../../data/companyData';
import { ProductCard } from '../common/ProductCard';

interface FeaturedProductsSectionProps {
  onOpenInquiry?: (product: Product) => void;
}

export const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ onOpenInquiry }) => {
  // Select the 8 specific products requested:
  // Fowzia Tofu, Fowzia Soy Protein Ball, Fowzia Soy Paratha, Fowzia Soy Ruti,
  // Fowzia Special Borhani, Fowzia Special Sweet Curd, Fowzia Mozzarella Cheese, Fowzia French Fries
  const featuredIds = [
    'fowzia-tofu-200g',
    'fowzia-soy-protein-ball-300g',
    'fowzia-soy-porata-700g',
    'fowzia-soy-ruti-450g',
    'fowzia-special-borhani-1500ml',
    'fowzia-special-sweet-curd-1kg',
    'fowzia-special-mozzarella-cheese-250g',
    'fowzia-french-fries-1kg'
  ];

  const featuredList = PRODUCTS.filter(p => featuredIds.includes(p.id));

  return (
    <section className="py-20 bg-surface-light relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-burgundy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-burgundy-dark text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              Signature Wholesome Range
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
              Featured Healthy <span className="text-burgundy">Products</span>
            </h2>
            <p className="text-sm text-mutedText">
              Carefully processed using premium soybeans and fresh full-cream milk to provide essential protein, calcium, and vitality.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-dark group shrink-0"
          >
            <span>Explore All 19 Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenInquiry={onOpenInquiry}
            />
          ))}
        </div>

        {/* Quick Wholesale Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-burgundy via-burgundy-dark to-[#4A0C1B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-gold/30">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-gold text-xs font-bold uppercase tracking-wider">Retailers & Supermarkets</span>
            <h3 className="text-xl sm:text-2xl font-bold">Interested in Stocking Fowzia Food Products?</h3>
            <p className="text-xs sm:text-sm text-cream/80 max-w-xl">
              We supply grocery stores, supermarkets, restaurants, hostels, and institutions across Bangladesh with regular delivery.
            </p>
          </div>

          <Link
            to="/contact?inquiry=wholesale"
            className="px-6 py-3 rounded-full bg-gold hover:bg-gold-light text-burgundy-dark font-extrabold text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all whitespace-nowrap"
          >
            Request Wholesale Pricing
          </Link>
        </div>

      </div>
    </section>
  );
};
