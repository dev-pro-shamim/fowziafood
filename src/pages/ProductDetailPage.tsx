import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Scale, 
  Sparkles, 
  ShieldCheck, 
  PackageCheck, 
  Phone, 
  Mail, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS, Product, COMPANY_INFO } from '../data/companyData';
import { ProductCard } from '../components/common/ProductCard';
import { WholesaleModal } from '../components/common/WholesaleModal';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold text-darkText">Product Not Found</h2>
        <p className="text-sm text-mutedText mt-2">The product you are looking for does not exist in our catalog.</p>
        <Link to="/products" className="mt-4 px-6 py-2.5 rounded-full bg-burgundy text-white text-xs font-semibold">
          Return to Products Catalog
        </Link>
      </div>
    );
  }

  // Related products from same category
  const relatedProducts = PRODUCTS.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-surface-light min-h-screen pb-20">
      
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-burgundy">Our Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.categorySlug}`} className="hover:text-burgundy">{product.category}</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-12">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-mutedText hover:text-burgundy transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
        </button>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-premium border border-burgundy/10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Product Image (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FFFDF9] to-[#F7F2E9] rounded-2xl p-6 flex items-center justify-center border border-gold/20 min-h-[380px] relative">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-80 max-w-full object-contain filter drop-shadow-md hover:scale-105 transition-transform duration-500"
            />
            
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-burgundy font-semibold text-xs px-3 py-1 rounded-full shadow-sm border border-burgundy/15">
              {product.category}
            </div>

            <div className="absolute top-4 right-4 bg-burgundy text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <Scale className="w-3.5 h-3.5 text-gold" />
              <span>{product.size}</span>
            </div>
          </div>

          {/* Right: Product Specification Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Fowzia Food Certified Product
              </span>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-darkText">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-xs text-mutedText pt-1">
                <span className="flex items-center gap-1">
                  <strong>Pack Weight/Volume:</strong> {product.size}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-burgundy font-semibold">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  ISO 22000:2018 Compliant
                </span>
              </div>
            </div>

            <p className="text-sm text-darkText/80 leading-relaxed">
              {product.description}
            </p>

            {/* Features Pills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-burgundy">Product Highlights:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-cream/70 border border-gold/20 text-xs text-darkText">
                    <CheckCircle2 className="w-3.5 h-3.5 text-burgundy shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Standard Notice */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-mutedText space-y-1">
              <p>
                <strong className="text-darkText">Hygienic Sourcing & Processing:</strong> Raw materials collected from marginal farmers under the guidance of the Department of Agricultural Marketing (DAM), Bangladesh Agricultural University, Gazipur, and Solidaridad Bangladesh.
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => setIsWholesaleModalOpen(true)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-burgundy hover:bg-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PackageCheck className="w-4 h-4 text-gold" />
                <span>Inquire for Wholesale / Retail Supply</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-cream hover:bg-cream-dark text-burgundy font-semibold text-xs uppercase tracking-wider border border-burgundy/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-gold-dark" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </div>

        </div>

        {/* Related Products in this Category */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-darkText">
                More in <span className="text-burgundy">{product.category}</span>
              </h3>
              <Link
                to={`/products?category=${product.categorySlug}`}
                className="text-xs font-semibold text-burgundy hover:underline flex items-center gap-1"
              >
                <span>View All</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>

      <WholesaleModal
        product={product}
        isOpen={isWholesaleModalOpen}
        onClose={() => setIsWholesaleModalOpen(false)}
      />
    </div>
  );
};
