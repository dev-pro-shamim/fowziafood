import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Sparkles, Scale, PackageCheck, Layers, ArrowRight } from 'lucide-react';
import { PRODUCTS, FUTURE_PRODUCTS, CATEGORIES, Product } from '../data/companyData';
import { ProductCard } from '../components/common/ProductCard';
import { WholesaleModal } from '../components/common/WholesaleModal';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Products (19)' },
    { id: 'soy', label: 'Soy-Based' },
    { id: 'dairy-drinks', label: 'Dairy & Yogurt Drinks' },
    { id: 'dairy-desserts', label: 'Dairy Desserts' },
    { id: 'cheese', label: 'Cheese' },
    { id: 'frozen', label: 'Frozen Quick Food' },
    { id: 'spices', label: 'Pure Spices' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.categorySlug === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSelectTab = (slug: string) => {
    if (slug === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: slug });
    }
  };

  const handleOpenInquiry = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsWholesaleModalOpen(true);
  };

  return (
    <div className="bg-surface-light min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-burgundy-dark via-burgundy to-[#4A0C1B] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Complete 19-Product Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Our Nutritious <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Food Products</span>
          </h1>
          <p className="mt-3 text-base text-cream/90 max-w-2xl leading-relaxed">
            Hygienically manufactured, protein-rich soy essentials, cultured traditional dairy beverages, earthen pot curds, and unadulterated spices.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-cream/80 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">Our Products</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Search & Filter Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-mutedText absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products (e.g. Tofu, Borhani)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 bg-white text-xs text-darkText focus:outline-none focus:border-burgundy focus:ring-1 focus:ring-burgundy shadow-sm"
              />
            </div>

            {/* Results counter & Wholesale trigger */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 text-xs">
              <span className="text-mutedText">
                Showing <strong>{filteredProducts.length}</strong> of 19 products
              </span>
              <button
                onClick={() => {
                  setSelectedProductForInquiry(null);
                  setIsWholesaleModalOpen(true);
                }}
                className="px-4 py-2 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <PackageCheck className="w-3.5 h-3.5 text-gold-light" />
                <span>Wholesale Inquiry</span>
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-burgundy text-white shadow-md'
                      : 'bg-white text-darkText hover:bg-cream border border-gray-200 hover:border-gold/50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Catalog Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenInquiry={handleOpenInquiry}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl p-8 border border-gray-200">
            <Layers className="w-12 h-12 text-mutedText mx-auto mb-3 opacity-40" />
            <h3 className="text-lg font-bold text-darkText">No products found</h3>
            <p className="text-xs text-mutedText mt-1">
              Try adjusting your search or category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleSelectTab('all');
              }}
              className="mt-4 px-5 py-2 rounded-full bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-dark transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Future Products Pipeline (Strictly from PDF Page 4) */}
        <section className="bg-cream/70 rounded-3xl p-8 sm:p-10 border border-gold/40 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-burgundy flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
                Innovation & R&D Pipeline
              </span>
              <h2 className="text-2xl font-bold text-darkText">Upcoming Future Products</h2>
              <p className="text-xs text-mutedText">
                As documented in the company expansion blueprint under technological upgradation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {FUTURE_PRODUCTS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-3.5 rounded-xl border border-gold/20 shadow-sm text-center flex flex-col justify-center items-center hover:border-burgundy/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-cream text-burgundy flex items-center justify-center font-bold text-xs mb-2 border border-gold/30">
                  {idx + 1}
                </div>
                <span className="text-xs font-semibold text-darkText">{item}</span>
                <span className="text-[10px] text-mutedText mt-1">In Development</span>
              </div>
            ))}
          </div>
        </section>

      </div>

      <WholesaleModal
        product={selectedProductForInquiry}
        isOpen={isWholesaleModalOpen}
        onClose={() => {
          setIsWholesaleModalOpen(false);
          setSelectedProductForInquiry(null);
        }}
      />
    </div>
  );
};
