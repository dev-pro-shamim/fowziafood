import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { CompanyIntroSection } from '../components/home/CompanyIntroSection';
import { CategorySection } from '../components/home/CategorySection';
import { FeaturedProductsSection } from '../components/home/FeaturedProductsSection';
import { WhyChooseSection } from '../components/home/WhyChooseSection';
import { InitiativesSection } from '../components/home/InitiativesSection';
import { AchievementsPreviewSection } from '../components/home/AchievementsPreviewSection';
import { SocialImpactSection } from '../components/home/SocialImpactSection';
import { GalleryPreviewSection } from '../components/home/GalleryPreviewSection';
import { FinalCTASection } from '../components/home/FinalCTASection';
import { AchievementModal } from '../components/common/AchievementModal';
import { WholesaleModal } from '../components/common/WholesaleModal';
import { Achievement, Product, GalleryItem } from '../data/companyData';

export const HomePage: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [selectedProductForInquiry, setSelectedProductForInquiry] = useState<Product | null>(null);
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);

  const handleOpenProductInquiry = (product: Product) => {
    setSelectedProductForInquiry(product);
    setIsWholesaleModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* A & C. Hero Section */}
      <HeroSection />

      {/* E. Statistics Section */}
      <StatsSection />

      {/* D. Company Introduction */}
      <CompanyIntroSection />

      {/* F. Product Categories */}
      <CategorySection />

      {/* G. Featured Products */}
      <FeaturedProductsSection onOpenInquiry={handleOpenProductInquiry} />

      {/* H. Why Choose Fowzia Food? */}
      <WhyChooseSection />

      {/* I. Our Three Business Initiatives */}
      <InitiativesSection />

      {/* J. Achievements & Recognition */}
      <AchievementsPreviewSection onSelectAchievement={(ach) => setSelectedAchievement(ach)} />

      {/* K. Social Impact */}
      <SocialImpactSection />

      {/* L. Gallery Preview */}
      <GalleryPreviewSection />

      {/* M. Final CTA */}
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
    </div>
  );
};
