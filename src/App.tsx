import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnnouncementBar } from './components/common/AnnouncementBar';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { PDFViewerModal } from './components/common/PDFViewerModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { FowziaNomsPage } from './pages/FowziaNomsPage';
import { FSDIPage } from './pages/FSDIPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gold selection:text-slate-950">
        <ScrollToTop />
        <AnnouncementBar onOpenPDF={() => setIsPDFOpen(true)} />
        <Navbar onOpenPDF={() => setIsPDFOpen(true)} />
        
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenPDF={() => setIsPDFOpen(true)} 
                  isPDFOpen={isPDFOpen} 
                  onClosePDF={() => setIsPDFOpen(false)} 
                />
              } 
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/fowzia-noms" element={<FowziaNomsPage />} />
            <Route path="/fsdi" element={<FSDIPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />

        {/* Global PDF Viewer Modal */}
        <PDFViewerModal 
          isOpen={isPDFOpen} 
          onClose={() => setIsPDFOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
