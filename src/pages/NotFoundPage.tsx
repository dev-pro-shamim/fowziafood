import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-surface-light px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl shadow-premium border border-burgundy/10">
        <div className="w-20 h-20 rounded-full bg-cream text-burgundy font-black text-3xl flex items-center justify-center mx-auto border-2 border-gold/40">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-darkText">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-mutedText">
            The page you requested does not exist or has been relocated within the Fowzia Food portal.
          </p>
        </div>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-burgundy hover:bg-burgundy-dark text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4 text-gold-light" />
            <span>Go to Homepage</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-cream hover:bg-cream-dark text-burgundy text-xs font-semibold border border-burgundy/20 transition-colors"
          >
            <span>Browse Products</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
