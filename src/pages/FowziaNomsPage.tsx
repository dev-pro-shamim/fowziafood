import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Store, 
  Truck, 
  Handshake, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Users, 
  Send, 
  Phone,
  Sparkles,
  Layers
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FowziaNomsPage: React.FC = () => {
  const [partnerSubmitted, setPartnerSubmitted] = useState(false);
  const [partnerData, setPartnerData] = useState({
    businessName: '',
    ownerName: '',
    phone: '',
    email: '',
    location: '',
    partnerType: 'Supermarket / Grocery Retailer',
    message: ''
  });

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerSubmitted(true);
  };

  const distributionChannels = [
    {
      title: "Grocery Stores & Modern Trade",
      desc: "Supplying daily fresh tofu, soy parathas, and curd to neighborhood convenience stores and grocery outlets."
    },
    {
      title: "Supermarkets & Hypermarkets",
      desc: "Delivering packaged mozzarella, frozen quick foods, and spices formatted for premium retail shelves."
    },
    {
      title: "Pharmacies & Health Shops",
      desc: "Positioning diabetic-friendly soy ruti and low-cholesterol soy proteins in nutrition-centric outlets."
    },
    {
      title: "Institutional Buyers",
      desc: "Supplying schools, colleges, hospital canteens, corporate dining facilities, and restaurant chains."
    }
  ];

  return (
    <div className="bg-surface-light min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-amber-900 via-burgundy to-[#4A0C1B] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold mb-4">
            <Store className="w-3.5 h-3.5 text-gold" />
            <span>Market Linkage & Food Distribution Platform</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Fowzia <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Nom's</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 max-w-3xl leading-relaxed">
            "To become Bangladesh's leading healthy food distribution and marketing platform, delivering nutritious soy-based and dairy products to families, schools, hospitals, health-conscious consumers and every household."
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-cream/80 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">Fowzia Nom's</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Section 1: About Fowzia Nom's & Opening Ceremony Images */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-burgundy flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              Strategic Distribution Arm
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-darkText leading-tight">
              Connecting Producers, Retailers, and <span className="text-burgundy">Health-Conscious Consumers</span>
            </h2>
            <div className="space-y-4 text-sm text-darkText/80 leading-relaxed">
              <p>
                <strong>Fowzia Nom's</strong> is a dedicated market linkage and modern trade distribution initiative created by Fowzia Healthy Food Products. It was designed to bridge the critical gap between agricultural producers and modern consumer retail.
              </p>
              <p>
                Through a structured marketing network spanning grocery stores, supermarkets, pharmacies, and specialty healthy food shops, Fowzia Nom's dramatically increases the availability and accessibility of nutritious soy and dairy goods across urban and peri-urban centers.
              </p>
              <p className="p-4 rounded-xl bg-cream border border-gold/30 text-xs italic text-darkText">
                "To become Bangladesh's leading healthy food distribution and marketing platform, delivering nutritious soy-based and dairy products to families, schools, hospitals, health-conscious consumers and every household while empowering women entrepreneurs and local retailers."
              </p>
            </div>
          </div>

          {/* Genuine Opening Ceremony Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream">
              <img
                src="/images/fowzia-noms-opening-ribbon-cutting.jpg"
                alt="Fowzia Nom's Opening Ceremony Ribbon Cutting"
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-white text-center border-t border-gold/20">
                <span className="text-xs font-bold text-burgundy">Opening Ceremony Ribbon Cutting</span>
                <p className="text-[11px] text-mutedText">Inauguration with partner entrepreneurs & community elders</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-cream">
              <img
                src="/images/fowzia-noms-opening-celebration.jpg"
                alt="Fowzia Nom's Retail Launch Gathering"
                className="w-full h-56 object-cover"
              />
              <div className="p-3 bg-white text-center border-t border-gold/20">
                <span className="text-xs font-bold text-darkText">Inauguration Celebration & Showcase</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Business Model & Distribution Network */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-burgundy/10 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Value Ecosystem</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">The Fowzia Nom's Business Model</h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Creating a seamless link from marginal farm fields to family dining tables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-cream/70 border border-gold/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-burgundy text-white flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-bold text-sm text-darkText">1. Marginal Farmers</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Direct raw material sourcing under supervision of DAM and Solidaridad Bangladesh.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-cream/70 border border-gold/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-burgundy text-white flex items-center justify-center mx-auto">
                <Layers className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-bold text-sm text-darkText">2. Processing Hub</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                ISO 22000:2018 hygienic manufacturing, rigorous quality testing, and protective packaging.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-cream/70 border border-gold/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-burgundy text-white flex items-center justify-center mx-auto">
                <Truck className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-bold text-sm text-darkText">3. Distribution Logistics</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Temperature-managed routing to retail shelves, supermarkets, and institutional hubs.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-cream/70 border border-gold/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-burgundy text-white flex items-center justify-center mx-auto">
                <Store className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-bold text-sm text-darkText">4. Retail & Consumers</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                Affordable, nutritious food reaching households, schools, and hospitals daily.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Retail Channels */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Retail Channels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">Where Fowzia Nom's Distributes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {distributionChannels.map((c, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-premium transition-all space-y-3">
                <CheckCircle2 className="w-6 h-6 text-burgundy" />
                <h3 className="font-bold text-base text-darkText">{c.title}</h3>
                <p className="text-xs text-mutedText leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Partnership Inquiry Form */}
        <section className="bg-gradient-to-br from-cream via-white to-cream rounded-3xl p-8 sm:p-12 border-2 border-gold/40 shadow-xl max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-burgundy flex items-center justify-center gap-1.5">
              <Handshake className="w-4 h-4 text-gold-dark" />
              Business Collaboration
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">
              Become a Fowzia Nom's Business Partner
            </h2>
            <p className="text-xs sm:text-sm text-mutedText max-w-lg mx-auto">
              Expand your store's healthy product portfolio with verified soy and dairy staples.
            </p>
          </div>

          {partnerSubmitted ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-green-200 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold text-darkText">Partnership Request Received!</h3>
              <p className="text-xs text-mutedText">
                Thank you for your interest in joining the Fowzia Nom's distribution network. Our team will contact you within 24 hours.
              </p>
              <button
                onClick={() => setPartnerSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-burgundy text-white text-xs font-semibold"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handlePartnerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Business / Shop Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fresh Mart Grocery"
                    value={partnerData.businessName}
                    onChange={(e) => setPartnerData({ ...partnerData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Proprietor / Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mohammad Tariq"
                    value={partnerData.ownerName}
                    onChange={(e) => setPartnerData({ ...partnerData, ownerName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01712-XXXXXX"
                    value={partnerData.phone}
                    onChange={(e) => setPartnerData({ ...partnerData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Partner Category</label>
                  <select
                    value={partnerData.partnerType}
                    onChange={(e) => setPartnerData({ ...partnerData, partnerType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  >
                    <option value="Supermarket / Grocery Retailer">Supermarket / Grocery Retailer</option>
                    <option value="Pharmacy & Health Store">Pharmacy & Health Store</option>
                    <option value="Institutional Buyer (School/Hospital/Hostel)">Institutional Buyer (School/Hospital/Hostel)</option>
                    <option value="Regional Wholesaler / Distributor">Regional Wholesaler / Distributor</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <label className="font-semibold text-darkText">Outlet Location / Delivery Area *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dhanmondi / Mohammadpur / Mirpur, Dhaka"
                  value={partnerData.location}
                  onChange={(e) => setPartnerData({ ...partnerData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                />
              </div>

              <div className="space-y-1 text-xs">
                <label className="font-semibold text-darkText">Message / Specific Product Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Mention target volume, refrigeration facilities, or specific products (Tofu, Borhani, etc.)..."
                  value={partnerData.message}
                  onChange={(e) => setPartnerData({ ...partnerData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-burgundy to-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-gold-light" />
                <span>Submit Business Partnership Inquiry</span>
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};
