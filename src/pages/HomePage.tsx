import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AuthorityLeadershipSection } from '../components/home/AuthorityLeadershipSection';
import { PDFShowcaseSection } from '../components/home/PDFShowcaseSection';
import { StatsSection } from '../components/home/StatsSection';
import { CompanyIntroSection } from '../components/home/CompanyIntroSection';
import { CategorySection } from '../components/home/CategorySection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { InitiativesSection } from '../components/home/InitiativesSection';
import { AchievementsPreviewSection } from '../components/home/AchievementsPreviewSection';
import { SocialImpactSection } from '../components/home/SocialImpactSection';
import { GalleryPreviewSection } from '../components/home/GalleryPreviewSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { AchievementModal } from '../components/common/AchievementModal';
import { WholesaleModal } from '../components/common/WholesaleModal';
import { PDFViewerModal } from '../components/common/PDFViewerModal';
import { Achievement, Product } from '../data/companyData';

interface HomePageProps {
  onOpenPDF: () => void;
  isPDFOpen: boolean;
  onClosePDF: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenPDF, isPDFOpen, onClosePDF }) => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);

  const handleOpenCustomInquiry = (name: string) => {
    setSelectedProductForInquiry({
      id: 'custom',
      name: name,
      category: 'Soy-Based',
      categorySlug: 'soy',
      size: 'Custom Wholesale / Party Pack',
      image: '/images/hd/pic_07.jpg',
      description: `Corporate inquiry regarding ${name}`,
      features: ['ISO 22000 Standard', 'Verified Quality']
    });
    setIsWholesaleModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FCFAF7]">
      
      {/* 1. Clean Soft-White & Light Orange Company Profile Hero Section */}
      <HeroSection 
        onOpenPDF={onOpenPDF} 
        onOpenInquiry={handleOpenCustomInquiry} 
      />

      {/* 2. Executive Leadership & Authority Section (Afroza Sultana - Proprietor & Forman Ali Bhuiyan - CEO) */}
      <AuthorityLeadershipSection />

      {/* 3. Official Corporate Profile (23-Page PDF) Showcase & Interactive Flipbook Modal Trigger */}
      <PDFShowcaseSection onOpenPDF={onOpenPDF} />

      {/* 4. Verified Company Statistics */}
      <StatsSection />

      {/* 5. Company Background & Origins (Supervised by DAM & BAU Gazipur) */}
      <CompanyIntroSection />

      {/* 6. Product Spectrum & Official Listed Product Names (Clean Category Tags - No Blurry Cards) */}
      <CategorySection />

      {/* 7. Why Choose Fowzia Food? (6 Core Pillars) */}
      <WhyChooseSection />

      {/* 8. Our Three Strategic Business Initiatives (Fowzia Food, Fowzia Nom's, FSDI) */}
      <InitiativesSection />

      {/* 9. Achievements & Recognition Preview (World Bank Award, LDDP Grant, ISO 22000) */}
      <AchievementsPreviewSection onSelectAchievement={(ach) => setSelectedAchievement(ach)} />

      {/* 10. Social Impact & Community Development (~35,000 Trained) */}
      <SocialImpactSection />

      {/* 11. Authentic High-Resolution Factory & Activities Photo Gallery */}
      <GalleryPreviewSection />

      {/* 12. Final Corporate Call-to-Action */}
      <FinalCTASection />

      {/* Modals */}
      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />

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
        onClose={onClosePDF}
      />
    </div>
  );
};
