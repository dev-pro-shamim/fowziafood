import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, ArrowRight, Sparkles, Eye } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../../data/companyData';

interface GalleryPreviewSectionProps {
  onSelectImage?: (item: GalleryItem) => void;
}

export const GalleryPreviewSection: React.FC<GalleryPreviewSectionProps> = ({ onSelectImage }) => {
  // Select 6 genuine, sharp high-resolution images from the user's photos
  const authenticHighlights = [
    {
      title: "Pure Soy Agro-Processing & Packaging",
      category: "Product Range",
      image: "/images/hd/pic_02.jpg",
      description: "Hygienic processing of fresh tofu and high-protein soy food line."
    },
    {
      title: "Fowzia Special Borhani & Cultured Dairy",
      category: "Dairy Spectrum",
      image: "/images/hd/pic_07.jpg",
      description: "Pure cow milk digestive probiotic beverages prepared under ISO 22000 standards."
    },
    {
      title: "Executive Leadership - Proprietor Mrs. Afroza Sultana",
      category: "Leadership",
      image: "/images/leadership/afroza-sultana-proprietor.jpg",
      description: "Proprietor and World Bank Recognized Best Women Entrepreneur (Feb 2020)."
    },
    {
      title: "Executive Leadership - CEO Md Forman Ali Bhuiyan",
      category: "Leadership",
      image: "/images/leadership/forman-ali-bhuiyan-ceo.jpg",
      description: "Chief Executive Officer steering operations, farmer value chains, and market linkage."
    },
    {
      title: "FSDI Agro-Entrepreneurship Training Session",
      category: "Capacity Building",
      image: "/images/hd/pic_01.jpg",
      description: "Training rural women and youth in agro-processing and micro-enterprise management."
    },
    {
      title: "Artisanal Mozzarella Cheese & Quality Inspection",
      category: "Quality Assurance",
      image: "/images/hd/pic_11.jpg",
      description: "Chef-grade pure dairy mozzarella cheese with verified stretch and purity."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF9] relative border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs font-bold uppercase tracking-wider">
              <ImageIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              Authentic Visual Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance-header">
              Moments of Operational{' '}
              <span className="text-[#9E1B32]">
                Excellence
              </span>
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              High-resolution photographic records of our manufacturing facilities, executive leadership, farmer linkages, and nationwide training programs.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E1B32] hover:text-[#7A0C22] group shrink-0"
          >
            <span>View Full Photo Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Grid Items with High-Res Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authenticHighlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-orange-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 h-72 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-[0.92]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white space-y-1 text-left">
                <h3 className="font-black text-base sm:text-lg leading-tight text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 font-normal">
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
