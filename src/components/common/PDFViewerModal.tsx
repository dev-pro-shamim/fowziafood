import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink, ShieldCheck, Printer, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PDFViewerModal: React.FC<PDFViewerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="bg-white rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl border border-gold/40 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-burgundy-dark via-burgundy to-burgundy-dark px-4 sm:px-6 py-3.5 flex items-center justify-between text-white border-b border-gold/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gold/20 text-gold-light border border-gold/30">
              <FileText className="w-5 h-5 text-gold" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-white">
                  Official Fowzia Food Company Profile
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-gold text-burgundy-dark uppercase tracking-wider">
                  23 Pages • PDF
                </span>
              </div>
              <p className="text-[11px] text-cream/80">
                Agro-Processing & Healthy Food Manufacturing • Established 2014
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/fowzia-food-company-profile.pdf"
              download="Fowzia-Food-Company-Profile.pdf"
              className="px-3.5 py-1.5 rounded-lg bg-gold hover:bg-gold-light text-burgundy-dark font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF (952 KB)</span>
              <span className="sm:hidden">Download</span>
            </a>

            <a
              href="/fowzia-food-company-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Open in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/10 hover:bg-rose-600 text-white transition-colors"
              aria-label="Close PDF Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Iframe */}
        <div className="flex-1 bg-slate-900 relative">
          <iframe
            src="/fowzia-food-company-profile.pdf#toolbar=1&navpanes=0"
            title="Fowzia Food Company Profile PDF"
            className="w-full h-full border-0"
          />
        </div>

        {/* Footer Info */}
        <div className="bg-cream px-4 sm:px-6 py-2.5 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mutedText shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Document verified with Trade License, ISO 22000:2018 Certificate & World Bank Honors</span>
          </div>
          <div className="text-burgundy font-medium text-[11px]">
            Founder: Mrs. Afroza Sultana • Hotline: {COMPANY_INFO.phone}
          </div>
        </div>
      </div>
    </div>
  );
};
