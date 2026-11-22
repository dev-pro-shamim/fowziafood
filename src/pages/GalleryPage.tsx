import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, X, ZoomIn, Calendar, Sparkles, Filter } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/companyData';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Products',
    'Production',
    'Events',
    'Awards',
    'Training',
    'International',
    'Exhibitions'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-surface-light min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-burgundy-dark via-burgundy to-[#4A0C1B] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-gold" />
            <span>Official Photo Archive</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Corporate <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Gallery</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 max-w-3xl leading-relaxed">
            Explore authentic visual documentation of our production facilities, products, award ceremonies, FSDI training classrooms, and international delegations.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-cream/80 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">Gallery</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-burgundy text-white shadow-md'
                  : 'bg-white text-darkText hover:bg-cream border border-gray-200'
              }`}
            >
              {cat === 'All' ? `All Photos (${GALLERY_ITEMS.length})` : cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-premium hover:shadow-premium-hover border border-burgundy/10 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-burgundy font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Title & Description Overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <h3 className="font-bold text-sm text-white group-hover:text-gold-light transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-cream/80 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-burgundy transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="bg-black/95 flex items-center justify-center max-h-[70vh] p-4">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="p-6 bg-white space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-burgundy/10 text-burgundy">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-mutedText">Verified Authentic Record</span>
              </div>
              <h3 className="text-xl font-bold text-darkText">
                {selectedImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
