import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
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
      honor: "Conferred Best Women Entrepreneur of Bangladesh (February 2020)",
      bio: "Founded Fowzia Healthy Food Products in 2014 out of courage, dedication, and vision during a family health challenge. Having mastered commercial agro-processing through rigorous study of international food journals, she pioneered high-protein soy and dairy processing in Bangladesh.",
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
    <div className="bg-[#FCFAF7] min-h-screen text-slate-800">
      
      {/* Page Header (Soft White & Warm Orange Theme) */}
      <div className="bg-gradient-to-r from-[#9E1B32] via-[#7A0C22] to-[#540817] text-white py-14 sm:py-20 relative overflow-hidden border-b border-orange-200">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-semibold whitespace-nowrap">
            <span>Corporate Company Profile & Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-balance-header">
            About <span className="text-amber-300">Fowzia Healthy Food Products</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed font-normal">
            Established in 2014, Fowzia Healthy Food Products is a women-led agro-processing enterprise dedicated to hygienic, high-protein soy and dairy food processing under ISO 22000:2018 standards in Bangladesh.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-orange-100 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-500 flex items-center gap-2">
          <Link to="/" className="hover:text-[#9E1B32]">Home</Link>
          <span>/</span>
          <span className="text-[#9E1B32] font-semibold">About Us</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-18">
        
        {/* Section 1: Founder Story & Personal Genesis */}
        <section id="founder" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Full Uncropped Photo of Mrs. Afroza Sultana with bottom caption visible */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="rounded-3xl p-3 bg-white border-2 border-orange-200 shadow-lg">
              <img
                src="/images/leadership/afroza-sultana-proprietor.jpg"
                alt="Mrs. Afroza Sultana - Proprietor"
                className="w-full max-w-[320px] h-auto object-contain rounded-2xl border border-slate-300 shadow-xs"
              />
              <div className="p-3 text-center">
                <span className="text-xs font-bold text-[#9E1B32] uppercase tracking-wider block">Founder & Proprietor</span>
                <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-0.5">
                  World Bank Awardee "Best Women Entrepreneur of Bangladesh" (Feb 2020)
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs sm:text-sm px-4 py-2 rounded-xl shadow-md border-2 border-white">
              Established 2014
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-left">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#9E1B32] flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-amber-500" />
              The Founder's Journey
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight text-balance-header">
              From a Personal Family Challenge to a <span className="text-[#9E1B32]">National Success</span>
            </h2>
            <div className="space-y-4 text-base text-slate-700 leading-relaxed font-normal">
              <p>
                The inspiration behind Fowzia Healthy Food Products originated from a personal family challenge. Due to physical fitness constraints that prevented her husband from continuing regular employment, Mrs. Afroza Sultana made the courageous decision to establish a sustainable food business.
              </p>
              <p>
                Her goal was twofold: to provide lasting financial security for her household while generating dignified employment opportunities for other women and youth in the community. Determined to master commercial food processing, Mrs. Afroza learned new processing techniques by studying international food documentaries, technical magazines, and agricultural journals, applying scientific value addition to local dairy and soybean cultivation.
              </p>
              <p>
                Through perseverance, uncompromising quality standards, and deep care for public health, Fowzia Healthy Food Products has grown from a home kitchen enterprise into an ISO 22000:2018 certified manufacturer and recognized national champion of female entrepreneurship.
              </p>
            </div>

            {/* Official Support Box */}
            <div className="p-5 rounded-2xl bg-white border border-orange-200 shadow-2xs text-xs sm:text-sm space-y-1.5">
              <div className="font-bold text-[#9E1B32] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Agricultural Partnership & Technical Supervision
              </div>
              <p className="text-slate-600 leading-relaxed font-normal">
                Fowzia Food collects raw materials directly from marginal farmers, processing, producing, and marketing under the overall technical supervision of the <strong>Department of Agricultural Marketing (DAM)</strong>, <strong>Bangladesh Agricultural University, Gazipur</strong>, and <strong>Solidaridad Bangladesh</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Executive Leadership & Corporate Authority (Both Leaders, Full Uncropped Photos) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-orange-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
              Corporate Governance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 text-balance-header">
              Executive Leadership & Management
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Guided by experienced agro-processing authorities recognized by the World Bank, the Ministry of Agriculture, and agricultural universities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border border-orange-200 shadow-xs space-y-5 flex flex-col justify-between text-left">
                <div className="space-y-4">
                  
                  {/* Photo Frame with Full Uncropped Image */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    <div className="w-48 sm:w-52 h-auto rounded-xl p-1.5 bg-white border border-orange-200 shadow-xs shrink-0 flex justify-center">
                      <img 
                        src={leader.image} 
                        alt={leader.name} 
                        className="w-full h-auto object-contain rounded-lg border border-slate-300" 
                      />
                    </div>
                    <div className="text-center sm:text-left space-y-1.5">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-orange-100 px-3 py-0.5 rounded-full border border-orange-200">
                        {leader.badge}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">{leader.name}</h3>
                      <div className="text-sm font-bold text-[#9E1B32]">{leader.title}</div>
                      <div className="text-xs sm:text-sm font-bold text-amber-900 pt-1 leading-snug">{leader.honor}</div>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">{leader.bio}</p>

                  <div className="space-y-2 pt-2 border-t border-orange-100">
                    <div className="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider">Key Directives:</div>
                    {leader.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs sm:text-sm text-slate-700 italic">
                  “{leader.quote}”
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Mission, Vision, and Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          {/* Mission */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-orange-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-amber-900 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#9E1B32]" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Our Mission</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                "Fowzia Food is dedicated to producing high-quality soy and dairy-based foods that are nutritious, affordable, and accessible to all. Our mission is to improve public health through healthy food choices, create livelihood opportunities for women and local communities, and build a sustainable food business founded on quality, integrity, and customer satisfaction."
              </p>
            </div>
            <div className="pt-4 border-t border-orange-100 text-xs sm:text-sm font-bold text-[#9E1B32]">
              Official Company Mandate
            </div>
          </div>

          {/* Vision */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#9E1B32] to-[#7A0C22] text-white shadow-md flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-white/15 text-amber-300 flex items-center justify-center border border-white/20">
                <Eye className="w-6 h-6 text-amber-300" />
              </div>
              <h3 className="text-xl font-black text-white">Our Vision</h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                "To establish Fowzia Food as a nationally recognized brand in soy and dairy-based foods, providing nutritious and affordable products to every household while creating employment opportunities, supporting local agriculture, and contributing to a healthier and more prosperous society."
              </p>
            </div>
            <div className="pt-4 border-t border-white/20 text-xs sm:text-sm font-bold text-amber-300">
              Vision 2030 Benchmark
            </div>
          </div>

          {/* Core Values */}
          <div className="p-7 sm:p-8 rounded-3xl bg-white border border-orange-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-amber-900 flex items-center justify-center">
                <Heart className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-black text-slate-900">Core Values</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At Fowzia Healthy Food Products, we strictly uphold:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800 font-semibold">
                <li className="flex items-center gap-2 text-emerald-800"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Quality & Food Safety</li>
                <li className="flex items-center gap-2 text-emerald-800"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Uncompromising Integrity</li>
                <li className="flex items-center gap-2 text-emerald-800"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Customer Satisfaction</li>
                <li className="flex items-center gap-2 text-emerald-800"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Continuous Innovation</li>
                <li className="flex items-center gap-2 text-emerald-800"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Environmental Sustainability</li>
                <li className="flex items-center gap-2 text-emerald-800"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Community Empowerment</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-orange-100 text-xs sm:text-sm font-bold text-[#9E1B32]">
              Values-Driven Culture
            </div>
          </div>
        </section>

        {/* Section 4: SWOT Analysis (Strictly from PDF Page 8) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-sm text-left">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
              Strategic Evaluation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">SWOT Analysis</h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Official analysis as presented in the corporate profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                Strengths (S)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {SWOT.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />
                Weaknesses (W)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {SWOT.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Opportunities (O)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {SWOT.opportunities.map((o, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
              <h3 className="font-bold text-rose-900 flex items-center gap-2 text-sm sm:text-base uppercase tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                Threats (T)
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
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
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-orange-200 shadow-sm space-y-6 text-left">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-900 bg-orange-100 px-3.5 py-1 rounded-full border border-orange-200">
              Governance & Structure
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Organizational Structure</h2>
            <p className="text-sm text-slate-600 font-normal">
              "Fowzia Food follows a participatory and transparent management approach that promotes teamwork, accountability, innovation, quality, and customer satisfaction."
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-[#9E1B32] to-[#7A0C22] text-white px-8 py-5 rounded-2xl shadow-md border-2 border-amber-400 text-center">
                <div className="text-xs uppercase font-bold text-amber-300">Executive Leadership</div>
                <div className="text-lg sm:text-xl font-black">Proprietor & Chief Executive Officer</div>
                <div className="text-sm text-slate-200 font-medium">Mrs. Afroza Sultana (Proprietor) & Md Forman Ali Bhuiyan (CEO)</div>
              </div>
            </div>

            <div className="w-0.5 h-6 bg-amber-400 mx-auto" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#FFFDF9] p-5 rounded-2xl border border-orange-200 text-center space-y-2">
                <div className="font-bold text-base text-[#9E1B32]">Operations & Production</div>
                <div className="text-xs sm:text-sm text-slate-700 font-semibold">Manager</div>
                <div className="pt-2 border-t border-orange-100 text-xs text-slate-600 space-y-1 font-normal">
                  <div>• Production Supervisors</div>
                  <div>• Quality Control Officer</div>
                  <div>• Store & Inventory Officer</div>
                  <div>• Packaging Staff & Machine Operators</div>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-5 rounded-2xl border border-orange-200 text-center space-y-2">
                <div className="font-bold text-base text-[#9E1B32]">Finance & Accounts</div>
                <div className="text-xs sm:text-sm text-slate-700 font-semibold">Officer</div>
                <div className="pt-2 border-t border-orange-100 text-xs text-slate-600 space-y-1 font-normal">
                  <div>• Accounts Assistant</div>
                  <div>• Cashier / Record Keeper</div>
                  <div>• Procurement Accounting</div>
                  <div>• Regulatory Compliance Support</div>
                </div>
              </div>

              <div className="bg-[#FFFDF9] p-5 rounded-2xl border border-orange-200 text-center space-y-2">
                <div className="font-bold text-base text-[#9E1B32]">Marketing & Sales</div>
                <div className="text-xs sm:text-sm text-slate-700 font-semibold">Manager</div>
                <div className="pt-2 border-t border-orange-100 text-xs text-slate-600 space-y-1 font-normal">
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
        <section className="bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100 p-8 sm:p-10 rounded-3xl border-2 border-orange-300 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs sm:text-sm font-bold text-amber-950 uppercase tracking-wider">Official 23-Page Document</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Need Complete Corporate Documentation?</h3>
            <p className="text-sm text-slate-600 max-w-xl font-normal">
              Download or view the official company profile with audited details, certificates, Belgian delegation inspection, and complete product list.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPDFOpen(true)}
              className="px-6 py-3.5 rounded-full bg-[#9E1B32] hover:bg-[#7A0C22] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-sm transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Read Online (Reader)</span>
            </button>
            <a
              href="/fowzia-food-company-profile.pdf"
              download="Fowzia_Food_Company_Profile.pdf"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-orange-50 text-slate-900 font-bold text-xs sm:text-sm border border-orange-300 shadow-2xs transition-all flex items-center gap-2 whitespace-nowrap"
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
