import React from 'react';
import { X, Award, ShieldCheck, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { Achievement } from '../../data/companyData';

interface AchievementModalProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  if (!achievement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gold/40 relative flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-darkText hover:text-burgundy shadow-md transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Certificate / Image View */}
        <div className="md:w-1/2 bg-gradient-to-b from-gray-100 to-gray-200 p-6 flex items-center justify-center">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="max-h-80 md:max-h-[460px] w-auto object-contain rounded-lg shadow-lg border border-gray-300"
          />
        </div>

        {/* Details View */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-burgundy/10 text-burgundy border border-burgundy/20 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-gold-dark" />
                {achievement.category}
              </span>
              <span className="text-xs text-mutedText font-medium flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-gold-dark" />
                {achievement.date}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-darkText leading-tight">
              {achievement.title}
            </h3>

            <div className="flex items-start gap-2 text-xs text-mutedText">
              <Building2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
              <span className="font-medium text-darkText">{achievement.organization}</span>
            </div>

            <p className="text-sm text-mutedText leading-relaxed">
              {achievement.description}
            </p>

            {achievement.certificateDetails && (
              <div className="p-4 rounded-xl bg-cream border border-gold/30 space-y-2 text-xs">
                <h4 className="font-bold text-burgundy flex items-center gap-1.5 text-xs">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                  Official Documentation Details
                </h4>
                {achievement.certificateDetails.certNo && (
                  <p><strong className="text-darkText">Registration No:</strong> {achievement.certificateDetails.certNo}</p>
                )}
                {achievement.certificateDetails.scope && (
                  <p><strong className="text-darkText">Certified Scope:</strong> {achievement.certificateDetails.scope}</p>
                )}
                {achievement.certificateDetails.accreditation && (
                  <p><strong className="text-darkText">Accreditation:</strong> {achievement.certificateDetails.accreditation}</p>
                )}
                {achievement.certificateDetails.issuer && (
                  <p><strong className="text-darkText">Issuing Body:</strong> {achievement.certificateDetails.issuer}</p>
                )}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-green-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" />
              Verified Authenticity
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-burgundy text-white text-xs font-semibold hover:bg-burgundy-dark transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
