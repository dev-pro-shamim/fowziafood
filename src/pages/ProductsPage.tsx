import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, Sparkles, Scale, PackageCheck, Layers, ArrowRight, Download, BookOpen } from 'lucide-react';
import { PRODUCTS, FUTURE_PRODUCTS, CATEGORIES, Product } from '../data/companyData';
import { ProductCard } from '../components/common/ProductCard';
import { WholesaleModal } from '../components/common/WholesaleModal';
import { PDFViewerModal } from '../components/common/PDFViewerModal';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [searchQuery, setSearchQuery] = useState('');
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  
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
    <div className="bg-[#FCFAF7] min-h-screen text-slate-800">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#9E1B32] via-[#7A0C22] to-[#540817] text-white py-14 sm:py-20 relative overflow-hidden border-b border-orange-200">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official 19-Product Corporate Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-balance-header">
            Certified Nutritious <span className="text-amber-300">Food Products</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed font-normal">
            Hygienically manufactured, protein-rich soy essentials, cultured traditional dairy beverages, clay pot curds, and unadulterated spices.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-orange-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#9E1B32]">Home</Link>
          <span>/</span>
          <span className="text-[#9E1B32] font-semibold">Our Products</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Search & Filter Controls */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products (e.g. Tofu, Borhani)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-orange-200 bg-white text-xs text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-2xs"
              />
            </div>

            {/* Results counter & Wholesale trigger */}
            <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 text-xs">
              <span className="text-slate-600">
                Showing <strong>{filteredProducts.length}</strong> of 19 listed products
              </span>
              <button
                onClick={() => handleOpenInquiry(PRODUCTS[0])}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-100 hover:bg-[#9E1B32] text-amber-950 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors border border-orange-300"
              >
                <span>Wholesale Inquiry</span>
              </button>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleSelectTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all shadow-2xs ${
                  activeCategory === tab.id
                    ? 'bg-[#9E1B32] text-white shadow-sm'
                    : 'bg-white hover:bg-orange-50 text-slate-700 border border-orange-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid (Using Genuine High-Res Photos) */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenInquiry={handleOpenInquiry}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-orange-200 p-8 space-y-4">
            <PackageCheck className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No products found</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search query or select another category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
              className="px-5 py-2 rounded-full bg-[#9E1B32] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Institutional Wholesale Inquiry Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100 border-2 border-orange-300 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">Supermarkets & Institutional Orders</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Supply Inquiries & Retail Distribution</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              We supply grocery stores, restaurants, catering services, hostels, and supermarkets across Bangladesh with scheduled delivery.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPDFOpen(true)}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-orange-50 text-slate-900 font-bold text-xs border border-orange-300 shadow-xs transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>Catalog in Profile (PDF)</span>
            </button>
            <Link
              to="/contact?inquiry=wholesale"
              className="px-6 py-3.5 rounded-full bg-[#9E1B32] hover:bg-[#7A0C22] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all whitespace-nowrap"
            >
              Request Institutional Quote
            </Link>
          </div>
        </div>

      </div>

      <WholesaleModal
        product={selectedProductForInquiry}
        isOpen={isWholesaleModalOpen}
        onClose={() => {
          setIsWholesaleModalOpen(false);
          setSelectedProductForInquiry(null);
        }}
      />

      <PDFViewerModal
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
      />
    </div>
  );
};
