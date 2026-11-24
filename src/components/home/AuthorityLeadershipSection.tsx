import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

export const AuthorityLeadershipSection: React.FC = () => {
  const leaders = [
    {
      name: "Mrs. Afroza Sultana",
      title: "Proprietor & Founder",
      badge: "World Bank Recognized Leader",
      image: "/images/leadership/afroza-sultana-proprietor.jpg",
      honor: "Conferred Best Women Entrepreneur of Bangladesh (February 2020)",
      bio: "Established Fowzia Healthy Food Products in 2014 out of courage, resilience, and vision to provide financial stability for her family while creating dignified employment opportunities for rural women. After studying international food processing methodologies and agricultural value addition, she pioneered high-protein soy and dairy processing in Bangladesh.",
      responsibilities: [
        "Product Formulation & Soy Agro-Processing Innovation",
        "Lead Mentor & Founder of FSDI Institute (~35,000 Trained)",
        "Food Hygiene & Cleanroom Standards (ISO 22000:2018)",
        "Grassroots Women Agribusiness Capacity Development"
      ],
      quote: "Our journey started from a personal family challenge, but quickly became a lifelong national mission: to bring pure, affordable nutrition to every family while empowering women to stand on their own feet."
    },
    {
      name: "Md Forman Ali Bhuiyan",
      title: "Chief Executive Officer (CEO)",
      badge: "Operations & Supply Chain Architect",
      image: "/images/leadership/forman-ali-bhuiyan-ceo.jpg",
      honor: "Agro-Processing Industrial Operations & Linkage Leader",
      bio: "Spearheads executive management, corporate strategy, farmer supply chain linkages, and national distribution for Fowzia Healthy Food Products and Fowzia Nom's. Dedicated to ethical sourcing directly from marginal farmers, transparent management, and hygienic industrial processing.",
      responsibilities: [
        "Executive Operations & Commercial Factory Management",
        "Direct Farmer Procurement Value Chain (DAM & BAU Supervised)",
        "National Distribution & Retail Supermarket Linkages",
        "Corporate Compliance, Food Safety & Quality Assurance"
      ],
      quote: "By collecting raw soybeans and pure cow milk directly from marginal farmers under technical supervision, we eliminate adulteration, guarantee fair prices to growers, and deliver uncompromised quality to consumers."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F1] to-[#FFF3E6] relative overflow-hidden border-b border-orange-200">
      
      {/* Decorative Soft Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Realistic, No AI Emojis, Readable Font) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <span>Corporate Governance & Authority</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance-header">
            Executive Leadership &{' '}
            <span className="text-[#9E1B32]">
              Management
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
            Fowzia Healthy Food Products is led by experienced agro-processing pioneers recognized nationally and internationally by the World Bank, the Ministry of Agriculture, and agricultural universities.
          </p>
        </div>

        {/* 2 Leadership Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Top Row: Full Uncropped Official Picture + Key Details */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  
                  {/* Photo Frame (Full Height & Complete Uncropped View including bottom name text!) */}
                  <div className="shrink-0 w-full sm:w-auto flex justify-center">
                    <div className="rounded-2xl p-2 bg-[#FFFDF9] border-2 border-orange-200 shadow-sm">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-56 sm:w-60 h-auto object-contain rounded-xl border border-slate-300 shadow-xs"
                      />
                    </div>
                  </div>

                  {/* Identification Details */}
                  <div className="text-center sm:text-left space-y-2.5 flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-orange-100 text-amber-950 border border-orange-200">
                      {leader.badge}
                    </span>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                        {leader.name}
                      </h3>
                      <div className="text-base font-bold text-[#9E1B32] mt-0.5">
                        {leader.title}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-500">
                        Fowzia Healthy Food Products
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-amber-900 bg-orange-50 p-3 rounded-xl border border-orange-200 leading-snug">
                      {leader.honor}
                    </div>
                  </div>

                </div>

                {/* Biography (Larger Readable Font: text-sm sm:text-base) */}
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal text-left">
                  {leader.bio}
                </p>

                {/* Key Strategic Directives */}
                <div className="space-y-2 pt-2 border-t border-orange-100 text-left">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Core Strategic Responsibilities:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {leader.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 bg-[#FFFDF9] p-2.5 rounded-xl border border-orange-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leadership Quote */}
                <div className="p-4 sm:p-5 rounded-2xl bg-orange-50/70 border border-orange-200 text-xs sm:text-sm text-slate-700 italic leading-relaxed text-left">
                  “{leader.quote}”
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-orange-100 mt-6 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Official Executive Authority
                </span>
                <Link
                  to="/about#founder"
                  className="text-[#9E1B32] hover:text-[#7A0C22] font-bold flex items-center gap-1 transition-transform"
                >
                  <span>Read Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white border border-orange-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-orange-100 text-amber-900 shrink-0">
              <HeartHandshake className="w-7 h-7 text-amber-700" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900">
                Supervised by National Agricultural & International Development Bodies
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-normal">
                Operating under the overall guidance of the Department of Agricultural Marketing (DAM), Bangladesh Agricultural University, Gazipur, Solidaridad, and the World Bank.
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-[#9E1B32] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs whitespace-nowrap"
          >
            <span>Company Governance & Story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </section>
  );
};
