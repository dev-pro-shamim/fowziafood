import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, ArrowRight, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../../data/companyData';

interface GalleryPreviewSectionProps {
  onSelectImage?: (item: GalleryItem) => void;
}

export const GalleryPreviewSection: React.FC<GalleryPreviewSectionProps> = ({ onSelectImage }) => {
  // Select 6 diverse authentic images for homepage preview
  const previewList = [
    GALLERY_ITEMS[0],  // Tofu served dish
    GALLERY_ITEMS[4],  // Belgian delegation facility inspection
    GALLERY_ITEMS[7],  // World Bank trophy
    GALLERY_ITEMS[10], // Women entrepreneurs training
    GALLERY_ITEMS[12], // Asia Soy Summit Thailand
    GALLERY_ITEMS[15], // Fowzia Nom's opening ribbon cutting
  ];

  return (
    <section className="py-20 bg-surface-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/20 text-burgundy-dark text-xs font-bold uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5 text-gold-dark" />
              Visual Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-darkText tracking-tight">
              Moments of Excellence & <span className="text-burgundy">Operations</span>
            </h2>
            <p className="text-sm text-mutedText">
              Authentic highlights of our processing facilities, product launches, global delegations, and community training.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-burgundy hover:text-burgundy-dark group shrink-0"
          >
            <span>View Full Gallery ({GALLERY_ITEMS.length} Photos)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewList.map((item, idx) => (
            <div
              key={idx}
              onClick={() => onSelectImage && onSelectImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-premium hover:shadow-premium-hover border border-burgundy/10 cursor-pointer h-64"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-3 left-3">
                <span className="bg-white/90 text-burgundy font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <h3 className="font-bold text-sm leading-tight text-white group-hover:text-gold-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-cream/80 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
