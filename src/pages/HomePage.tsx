import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { CompanyIntroSection } from '../components/home/CompanyIntroSection';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { PDFShowcaseSection } from '../components/home/PDFShowcaseSection';
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

  const handleOpenProductInquiry = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsWholesaleModalOpen(true);
  };

  const handleOpenCustomInquiry = (name: string) => {
    setSelectedProductForInquiry({
      id: 'custom',
      name: name,
      category: 'Soy-Based',
      categorySlug: 'soy',
      size: 'Custom Wholesale / Party Pack',
      image: '/images/fowzia-borhani-yogurt-drinks.jpg',
      description: `Wholesale inquiry regarding ${name}`,
      features: ['Hygienic standard', 'Verified quality']
    });
    setIsWholesaleModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Dynamic Sliding Hero with Side Cards (Reference Layout) */}
      <HeroSection 
        onOpenPDF={onOpenPDF} 
        onOpenInquiry={handleOpenCustomInquiry} 
      />

      {/* 2. Official Corporate Profile (PDF) Showcase */}
      <PDFShowcaseSection onOpenPDF={onOpenPDF} />

      {/* 3. Verified Statistics Section */}
      <StatsSection />

      {/* 4. Company Introduction (Supervised by DAM & BAU) */}
      <CompanyIntroSection />

      {/* 5. Product Categories */}
      <CategorySection />

      {/* 6. Featured Products (8 Flagship items) */}
      <FeaturedProductsSection onOpenInquiry={handleOpenProductInquiry} />

      {/* 7. Why Choose Fowzia Food? */}
      <WhyChooseSection />

      {/* 8. Our Three Strategic Business Initiatives */}
      <InitiativesSection />

      {/* 9. Achievements & Recognition Preview */}
      <AchievementsPreviewSection onSelectAchievement={(ach) => setSelectedAchievement(ach)} />

      {/* 10. Social Impact */}
      <SocialImpactSection />

      {/* 11. Gallery Preview */}
      <GalleryPreviewSection />

      {/* 12. Final CTA */}
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
