import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, HeartHandshake, Briefcase, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const AuthorityLeadershipSection: React.FC = () => {
  const leaders = [
    {
      name: "Mrs. Afroza Sultana",
      title: "Proprietor & Founder",
      badge: "World Bank Recognized Leader",
      image: "/images/leadership/afroza-sultana-proprietor.jpg",
      honor: "Conferred Best Women Entrepreneur of Bangladesh (Feb 2020)",
      bio: "Founded Fowzia Healthy Food Products in 2014 out of courage and dedication during a family health challenge. Having mastered commercial agro-processing through rigorous study of international food journals, she pioneered high-protein soy and dairy processing in Bangladesh.",
      responsibilities: [
        "Strategic Vision & Food Formulation",
        "Pioneering Soy Agro-Processing in Bangladesh",
        "Lead Mentor & Founder of FSDI Institute (~35k Trained)",
        "Women Agribusiness Capacity Building"
      ],
      quote: "Our journey started from a personal family challenge, but quickly became a lifelong national mission: to bring pure, affordable nutrition to every family while empowering women to stand on their own feet."
    },
    {
      name: "Md Forman Ali Bhuiyan",
      title: "Chief Executive Officer (CEO)",
      badge: "Operations & Supply Chain Architect",
      image: "/images/leadership/forman-ali-bhuiyan-ceo.jpg",
      honor: "Industrial Agro-Processing & Institutional Linkage Leader",
      bio: "Spearheads executive management, corporate strategy, farmer supply chain linkages, and national distribution for Fowzia Healthy Food Products and Fowzia Nom's. Dedicated to ethical sourcing, transparent management, and hygienic manufacturing.",
      responsibilities: [
        "Executive Operations & Factory Management",
        "Direct Farmer Procurement Value Chain (DAM & BAU Supervised)",
        "ISO 22000:2018 Cleanroom & Quality Standards",
        "Fowzia Nom's Nationwide Retail & Supermarket Linkages"
      ],
      quote: "By collecting raw soybeans and pure cow milk directly from marginal farmers under technical supervision, we eliminate adulteration, guarantee fair prices to growers, and deliver uncompromised quality to consumers."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF8F1] to-[#FFF3E6] relative overflow-hidden border-b border-orange-200/80">
      
      {/* Decorative Soft Orange Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-300 text-amber-950 text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Corporate Governance & Authority</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight text-balance-header">
            Executive Leadership &{' '}
            <span className="text-[#9E1B32]">
              Management
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Fowzia Healthy Food Products is led by experienced, passionate agro-processing pioneers recognized by the World Bank, government institutions, and international agricultural bodies.
          </p>
        </div>

        {/* 2 Leadership Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-orange-200/90 shadow-lg hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Top: Photo & Identification */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  
                  {/* Photo with Frame */}
                  <div className="relative shrink-0">
                    <div className="w-40 sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border-2 border-orange-300 shadow-md group-hover:scale-102 transition-transform duration-300">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-xl shadow-md border-2 border-white">
                      <Award className="w-4 h-4 text-slate-950" />
                    </div>
                  </div>

                  {/* Identification Details */}
                  <div className="text-center sm:text-left space-y-2 flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wide bg-orange-100 text-amber-900 border border-orange-200">
                      {leader.badge}
                    </span>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {leader.name}
                      </h3>
                      <div className="text-sm font-bold text-[#9E1B32] mt-0.5">
                        {leader.title}
                      </div>
                      <div className="text-xs font-semibold text-slate-500">
                        Fowzia Healthy Food Products
                      </div>
                    </div>

                    <div className="text-xs font-bold text-amber-800 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80 leading-snug">
                      ★ {leader.honor}
                    </div>
                  </div>

                </div>

                {/* Biography */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-2">
                  {leader.bio}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2 border-t border-orange-100">
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                    Core Strategic Roles:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {leader.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5 text-xs text-slate-700 bg-[#FFFDF9] p-2 rounded-lg border border-orange-100">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-2 leading-tight">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leadership Quote */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 via-amber-50/50 to-orange-50 border border-orange-200/80 text-xs text-slate-700 italic leading-relaxed relative">
                  <span className="text-2xl font-serif text-amber-500 leading-none absolute -top-1 left-2">“</span>
                  <p className="pl-4">{leader.quote}”</p>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-orange-100 mt-6 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Executive Governance
                </span>
                <Link
                  to="/about#founder"
                  className="text-[#9E1B32] hover:text-[#7A0C22] font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-orange-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-100 text-amber-900 shrink-0">
              <HeartHandshake className="w-6 h-6 text-amber-700" />
            </div>
            <div>
              <div className="text-sm font-extrabold text-slate-900">
                Supervised by National Agricultural & International Development Bodies
              </div>
              <div className="text-xs text-slate-600">
                Operating under the overall guidance of DAM (Ministry of Agriculture), BAU Gazipur, Solidaridad, and the World Bank.
              </div>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-[#9E1B32] text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-xs whitespace-nowrap"
          >
            <span>Company Governance & Story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </section>
  );
};
