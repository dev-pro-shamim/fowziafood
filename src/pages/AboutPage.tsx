import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  Building2,
  FileText,
  Download,
  BookOpen,
  Award,
  Users,
  Briefcase
} from 'lucide-react';
import { COMPANY_INFO, TIMELINE, SWOT } from '../data/companyData';
import { PDFViewerModal } from '../components/common/PDFViewerModal';

export const AboutPage: React.FC = () => {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

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
    <div className="bg-[#FCFAF7] min-h-screen text-slate-800">
      
      {/* Page Header (Soft White & Warm Orange Theme) */}
      <div className="bg-gradient-to-r from-[#9E1B32] via-[#7A0C22] to-[#540817] text-white py-14 sm:py-20 relative overflow-hidden border-b border-orange-200">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-semibold whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Corporate Company Profile & Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-balance-header">
            About <span className="text-amber-300">Fowzia Healthy Food Products</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-200 max-w-3xl leading-relaxed font-normal">
            Established in 2014, Fowzia Healthy Food Products is a women-led agro-processing enterprise dedicated to hygienic, high-protein soy and dairy food processing under ISO 22000:2018 standards in Bangladesh.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-orange-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#9E1B32]">Home</Link>
          <span>/</span>
          <span className="text-[#9E1B32] font-semibold">About Us</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Section 1: Founder Story & Personal Genesis */}
        <section id="founder" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <img
                src="/images/leadership/afroza-sultana-proprietor.jpg"
                alt="Mrs. Afroza Sultana - Proprietor"
                className="w-full h-[420px] object-cover object-top"
              />
              <div className="p-4 bg-[#FFFDF9] border-t border-orange-200">
                <span className="text-xs font-bold text-[#9E1B32] uppercase tracking-wider block">Founder & Proprietor</span>
                <h3 className="text-lg font-black text-slate-900">Mrs. Afroza Sultana</h3>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  World Bank Awardee "Best Women Entrepreneur of Bangladesh" (Feb 2020)
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs px-4 py-2 rounded-xl shadow-lg border-2 border-white">
              Established 2014
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#9E1B32] flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-amber-500" />
              The Founder's Journey
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight text-balance-header">
              From a Personal Family Challenge to a <span className="text-[#9E1B32]">National Success</span>
            </h2>
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                The inspiration behind Fowzia Healthy Food Products originated from a personal family challenge. Due to physical fitness challenges that prevented her husband from continuing regular employment, Mrs. Afroza Sultana made the courageous decision to establish a sustainable business.
              </p>
              <p>
                Her goal was twofold: to provide lasting financial security for her household while generating dignified employment opportunities for other women and youth in the community. Determined to master commercial food processing, Mrs. Afroza learned new processing techniques by studying international food documentaries, technical magazines, and agricultural journals, applying scientific value addition to local dairy and soybean cultivation.
              </p>
              <p>
                Through perseverance, uncompromising quality standards, and deep care for public health, Fowzia Healthy Food Products has grown from a home kitchen enterprise into an ISO 22000:2018 certified manufacturer and recognized national champion of female entrepreneurship.
              </p>
            </div>

            {/* Official Support Box */}
            <div className="p-4 rounded-2xl bg-white border border-orange-200/90 shadow-xs text-xs space-y-1">
              <div className="font-bold text-[#9E1B32] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Agricultural Partnership & Technical Supervision
              </div>
              <p className="text-slate-600">
                Fowzia Food collects raw materials directly from marginal farmers, processing, producing, and marketing under the overall technical supervision of the <strong>Department of Agricultural Marketing (DAM)</strong>, <strong>Bangladesh Agricultural University, Gazipur</strong>, and <strong>Solidaridad Bangladesh</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Executive Leadership & Corporate Authority */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-orange-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
              Corporate Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-balance-header">
              Executive Leadership & Management
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Guided by experienced agro-processing authorities recognized by the World Bank, Ministry of Agriculture, and agricultural universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-[#FFFDF9] rounded-2xl p-6 border border-orange-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="w-32 aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border border-orange-300 shadow-sm shrink-0">
                      <img src={leader.image} alt={leader.name} className="w-full h-full object-cover object-top" />
                    </div>
                    <div className="text-center sm:text-left space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-orange-100 px-2.5 py-0.5 rounded-full border border-orange-200">
                        {leader.badge}
                      </span>
                      <h3 className="text-lg font-black text-slate-900 leading-tight">{leader.name}</h3>
                      <div className="text-xs font-bold text-[#9E1B32]">{leader.title}</div>
                      <div className="text-[11px] font-bold text-amber-800 pt-1 leading-snug">★ {leader.honor}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>

                  <div className="space-y-1.5 pt-2 border-t border-orange-100">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Key Directives:</div>
                    {leader.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-slate-700 italic">
                  “{leader.quote}”
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Mission, Vision, and Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Mission */}
          <div className="p-7 rounded-3xl bg-white border border-orange-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-amber-900 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#9E1B32]" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Our Mission</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                "Fowzia Food is dedicated to producing high-quality soy and dairy-based foods that are nutritious, affordable, and accessible to all. Our mission is to improve public health through healthy food choices, create livelihood opportunities for women and local communities, and build a sustainable food business founded on quality, integrity, and customer satisfaction."
              </p>
            </div>
            <div className="pt-4 border-t border-orange-100 text-xs font-bold text-[#9E1B32]">
              Official Company Mandate
            </div>
          </div>

          {/* Vision */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-[#9E1B32] to-[#7A0C22] text-white shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-amber-300 flex items-center justify-center border border-white/20">
                <Eye className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-lg font-black text-white">Our Vision</h3>
              <p className="text-xs text-slate-200 leading-relaxed font-normal">
                "To establish Fowzia Food as a nationally recognized brand in soy and dairy-based foods, providing nutritious and affordable products to every household while creating employment opportunities, supporting local agriculture, and contributing to a healthier and more prosperous society."
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 text-xs font-bold text-amber-300">
              Vision 2030 Benchmark
            </div>
          </div>

          {/* Core Values */}
          <div className="p-7 rounded-3xl bg-white border border-orange-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-amber-900 flex items-center justify-center">
                <Heart className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-lg font-black text-slate-900">Core Values</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                At Fowzia Healthy Food Products, we strictly uphold:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-semibold">
                <li className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Quality & Food Safety</li>
                <li className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Uncompromising Integrity</li>
                <li className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Customer Satisfaction</li>
                <li className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Continuous Innovation</li>
                <li className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Environmental Sustainability</li>
                <li className="flex items-center gap-1.5 text-emerald-700"><CheckCircle2 className="w-3.5 h-3.5" /> Community Empowerment</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-orange-100 text-xs font-bold text-[#9E1B32]">
              Values-Driven Culture
            </div>
          </div>
        </section>

        {/* Section 4: SWOT Analysis (Strictly from PDF Page 8) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
              Strategic Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">SWOT Analysis</h2>
            <p className="text-xs text-slate-600">
              Official analysis as presented in the corporate profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Strengths (S)
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {SWOT.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                Weaknesses (W)
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {SWOT.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Opportunities (O)
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {SWOT.opportunities.map((o, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
              <h3 className="font-bold text-rose-900 flex items-center gap-2 text-sm uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                Threats (T)
              </h3>
              <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
                {SWOT.threats.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-700 font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Organizational Structure (from Page 7 of PDF) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
              Governance & Structure
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Organizational Structure</h2>
            <p className="text-xs text-slate-600">
              "Fowzia Food follows a participatory and transparent management approach that promotes teamwork, accountability, innovation, quality, and customer satisfaction."
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-[#9E1B32] to-[#7A0C22] text-white px-8 py-4 rounded-2xl shadow-md border-2 border-amber-400 text-center">
                <div className="text-[10px] uppercase font-bold text-amber-300">Executive Leadership</div>
                <div className="text-base sm:text-lg font-black">Proprietor / Managing Director</div>
                <div className="text-xs text-slate-200 font-medium">Mrs. Afroza Sultana (Founder) & Md Forman Ali Bhuiyan (CEO)</div>
              </div>
            </div>

            <div className="w-0.5 h-6 bg-amber-400 mx-auto" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FFFDF9] p-5 rounded-2xl border border-orange-200 text-center space-y-2">
                <div className="font-bold text-sm text-[#9E1B32]">Operations & Production</div>
                <div className="text-xs text-slate-700 font-semibold">Manager</div>
                <div className="pt-2 border-t border-orange-100 text-[11px] text-slate-600 space-y-1">
                  <div>• Production Supervisors</div>
                  <div>• Quality Control Officer</div>
                  <div>• Store & Inventory Officer</div>
                  <div>• Packaging Staff & Machine Operators</div>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-5 rounded-2xl border border-orange-200 text-center space-y-2">
                <div className="font-bold text-sm text-[#9E1B32]">Finance & Accounts</div>
                <div className="text-xs text-slate-700 font-semibold">Officer</div>
                <div className="pt-2 border-t border-orange-100 text-[11px] text-slate-600 space-y-1">
                  <div>• Accounts Assistant</div>
                  <div>• Cashier / Record Keeper</div>
                  <div>• Procurement Accounting</div>
                  <div>• Regulatory Compliance Support</div>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-5 rounded-2xl border border-orange-200 text-center space-y-2">
                <div className="font-bold text-sm text-[#9E1B32]">Marketing & Sales</div>
                <div className="text-xs text-slate-700 font-semibold">Manager</div>
                <div className="pt-2 border-t border-orange-100 text-[11px] text-slate-600 space-y-1">
                  <div>• Sales Executives</div>
                  <div>• Marketing Officers</div>
                  <div>• Distribution Staff</div>
                  <div>• Fowzia Nom's Linkage Coordinator</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Official PDF Profile Banner */}
        <section className="bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100 p-8 rounded-3xl border-2 border-orange-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">Official 23-Page Document</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Need Complete Corporate Documentation?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Download or view the official company profile with audited details, certificates, Belgian delegation inspection, and complete product list.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPDFOpen(true)}
              className="px-6 py-3 rounded-full bg-[#9E1B32] hover:bg-[#7A0C22] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Read Online</span>
            </button>
            <a
              href="/fowzia-food-company-profile.pdf"
              download="Fowzia_Food_Company_Profile.pdf"
              className="px-5 py-3 rounded-full bg-white hover:bg-orange-50 text-slate-900 font-bold text-xs border border-orange-300 shadow-xs transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-amber-600" />
              <span>Download PDF</span>
            </a>
          </div>
        </section>

      </div>

      <PDFViewerModal
        isOpen={isPDFOpen}
        onClose={() => setIsPDFOpen(false)}
      />
    </div>
  );
};
