import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Target, 
  Eye, 
  Heart, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  ArrowRight, 
  TrendingUp, 
  Sparkles,
  Building2,
  Calendar,
  Layers
} from 'lucide-react';
import { COMPANY_INFO, TIMELINE, SWOT } from '../data/companyData';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-surface-light min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-burgundy-dark via-burgundy to-[#4A0C1B] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Company Profile & Heritage</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Fowzia Healthy Food</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 max-w-3xl leading-relaxed">
            Established in 2014, Fowzia Healthy Food Products is a women-led agro-processing pioneer dedicated to hygienic, high-protein soy and dairy food production in Bangladesh.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-cream/80 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">About Us</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Section 1: Founder Story & Personal Genesis */}
        <section id="founder" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream">
              <img
                src="/images/world-bank-best-entrepreneur-trophy.jpg"
                alt="Mrs. Afroza Sultana with World Bank Award Trophy"
                className="w-full h-96 object-cover"
              />
              <div className="p-4 bg-white border-t border-gold/20">
                <span className="text-xs font-bold text-burgundy uppercase tracking-wider block">Founder & Proprietor</span>
                <h3 className="text-lg font-bold text-darkText">Mrs. Afroza Sultana</h3>
                <p className="text-xs text-mutedText mt-0.5">
                  World Bank Awardee "Best Women Entrepreneur of Bangladesh" (Feb 2020)
                </p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-4 bg-gradient-to-r from-gold to-gold-dark text-burgundy-dark font-extrabold text-xs px-4 py-2 rounded-xl shadow-lg border border-white">
              Established 2014
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-burgundy flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-gold" />
              The Founder's Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-darkText leading-tight">
              From a Personal Family Challenge to a <span className="text-burgundy">National Success</span>
            </h2>
            <div className="space-y-4 text-sm text-darkText/80 leading-relaxed">
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
            <div className="p-4 rounded-2xl bg-white border border-gold/30 shadow-sm text-xs space-y-1">
              <div className="font-bold text-burgundy flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-dark" />
                Agricultural Partnership & Technical Supervision
              </div>
              <p className="text-mutedText">
                Fowzia Food collects raw materials directly from marginal farmers, processing, producing, and marketing under the overall technical supervision of the <strong>Department of Agricultural Marketing (DAM)</strong>, <strong>Bangladesh Agricultural University, Gazipur</strong>, and <strong>Solidaridad Bangladesh</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Mission, Vision, and Core Values */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-white border border-burgundy/10 shadow-premium hover:shadow-premium-hover transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-burgundy/10 text-burgundy flex items-center justify-center">
                <Target className="w-6 h-6 text-burgundy" />
              </div>
              <h3 className="text-xl font-bold text-darkText">Our Mission</h3>
              <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                "Fowzia Food is dedicated to producing high-quality soy and dairy-based foods that are nutritious, affordable, and accessible to all. Our mission is to improve public health through healthy food choices, create livelihood opportunities for women and local communities, and build a sustainable food business founded on quality, integrity, and customer satisfaction."
              </p>
            </div>
            <div className="pt-4 border-t border-gray-100 text-xs font-semibold text-burgundy">
              Official Company Mandate
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-burgundy via-burgundy-dark to-[#4A0C1B] text-white shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-gold-light flex items-center justify-center border border-white/10">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
              <p className="text-xs sm:text-sm text-cream/90 leading-relaxed">
                "To establish Fowzia Food as a nationally recognized brand in soy and dairy-based foods, providing nutritious and affordable products to every household while creating employment opportunities, supporting local agriculture, and contributing to a healthier and more prosperous society. To become a leading healthy food processing company recognized for quality, innovation, and customer satisfaction."
              </p>
            </div>
            <div className="pt-4 border-t border-white/15 text-xs font-semibold text-gold-light">
              Vision 2030 Benchmark
            </div>
          </div>

          {/* Core Values */}
          <div className="p-8 rounded-3xl bg-white border border-gold/30 shadow-premium hover:shadow-premium-hover transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold-dark flex items-center justify-center">
                <Heart className="w-6 h-6 text-gold-dark" />
              </div>
              <h3 className="text-xl font-bold text-darkText">Core Values</h3>
              <p className="text-xs text-mutedText leading-relaxed">
                "At Fowzia Healthy Food Products, we uphold the values of:
              </p>
              <ul className="space-y-1 text-xs text-darkText font-medium">
                <li className="flex items-center gap-1.5">• Quality & Food Safety</li>
                <li className="flex items-center gap-1.5">• Uncompromising Integrity</li>
                <li className="flex items-center gap-1.5">• Customer Satisfaction</li>
                <li className="flex items-center gap-1.5">• Continuous Innovation</li>
                <li className="flex items-center gap-1.5">• Environmental Sustainability</li>
                <li className="flex items-center gap-1.5">• Community Empowerment</li>
              </ul>
            </div>
            <div className="pt-4 border-t border-gray-100 text-xs font-semibold text-burgundy">
              Values-Driven Culture
            </div>
          </div>
        </section>

        {/* Section 3: Business Objectives (Short & Long Term from PDF) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-burgundy/10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Strategic Roadmap</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">Business Objectives</h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Structured operational objectives as documented in the Fowzia Food Company Profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Short-Term */}
            <div className="p-6 rounded-2xl bg-cream/60 border border-gold/30 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-burgundy text-white">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </span>
                <h3 className="text-lg font-bold text-darkText">Short-Term Objectives</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-darkText">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Increase production capacity by <strong>30%</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Expand product distribution to major districts of Bangladesh.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Develop strong brand recognition in healthy agro-processing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Increase annual sales by <strong>20%</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Strengthen quality assurance and laboratory testing systems.</span>
                </li>
              </ul>
            </div>

            {/* Long-Term */}
            <div className="p-6 rounded-2xl bg-burgundy/5 border border-burgundy/20 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-lg bg-burgundy-dark text-white">
                  <Building2 className="w-5 h-5 text-gold" />
                </span>
                <h3 className="text-lg font-bold text-darkText">Long-Term Objectives</h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-darkText">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Establish a modern, automated food processing facility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Obtain BSTI and international food safety certifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Launch new soy-based product lines (soy biscuits, soy noodles, soy milk).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Develop export opportunities for regional and international markets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-burgundy shrink-0 mt-0.5" />
                  <span>Create sustainable employment opportunities for women and youth.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: SWOT Analysis (Strictly from PDF Page 8) */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-gold/30">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">Strategic Evaluation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">SWOT Analysis</h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Official analysis as presented in the corporate profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-base">
                <span className="w-3 h-3 rounded-full bg-emerald-600"></span>
                Strengths (S)
              </h3>
              <ul className="space-y-2 text-xs text-darkText leading-relaxed">
                {SWOT.strengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Weaknesses */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 text-base">
                <span className="w-3 h-3 rounded-full bg-amber-600"></span>
                Weaknesses (W)
              </h3>
              <ul className="space-y-2 text-xs text-darkText leading-relaxed">
                {SWOT.weaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opportunities */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
              <h3 className="font-bold text-blue-900 flex items-center gap-2 text-base">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                Opportunities (O)
              </h3>
              <ul className="space-y-2 text-xs text-darkText leading-relaxed">
                {SWOT.opportunities.map((o, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Threats */}
            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3">
              <h3 className="font-bold text-rose-900 flex items-center gap-2 text-base">
                <span className="w-3 h-3 rounded-full bg-rose-600"></span>
                Threats (T)
              </h3>
              <ul className="space-y-2 text-xs text-darkText leading-relaxed">
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
        <section className="bg-cream/50 rounded-3xl p-8 sm:p-12 border border-gold/30">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Governance & Team</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">Organizational Structure</h2>
            <p className="text-xs sm:text-sm text-mutedText">
              "Fowzia Food follows a participatory and transparent management approach that promotes teamwork, accountability, innovation, quality, and customer satisfaction."
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Top Node */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-burgundy to-burgundy-dark text-white px-8 py-4 rounded-2xl shadow-lg border-2 border-gold text-center">
                <div className="text-[10px] uppercase font-bold text-gold-light">Leadership</div>
                <div className="text-base sm:text-lg font-black">Proprietor / Managing Director</div>
                <div className="text-xs text-cream/90 font-medium">Mrs. Afroza Sultana (Founder)</div>
              </div>
            </div>

            {/* Connecting line */}
            <div className="w-0.5 h-6 bg-gold mx-auto" />

            {/* 3 Department Heads */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-burgundy/20 shadow-sm text-center space-y-2">
                <div className="font-bold text-sm text-burgundy">Operations & Production</div>
                <div className="text-xs text-darkText font-semibold">Manager</div>
                <div className="pt-2 border-t border-gray-100 text-[11px] text-mutedText space-y-1">
                  <div>• Production Supervisors</div>
                  <div>• Quality Control Officer</div>
                  <div>• Store & Inventory Officer</div>
                  <div>• Packaging Staff & Machine Operators</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-burgundy/20 shadow-sm text-center space-y-2">
                <div className="font-bold text-sm text-burgundy">Finance & Accounts</div>
                <div className="text-xs text-darkText font-semibold">Officer</div>
                <div className="pt-2 border-t border-gray-100 text-[11px] text-mutedText space-y-1">
                  <div>• Accounts Assistant</div>
                  <div>• Cashier / Record Keeper</div>
                  <div>• Procurement Accounting</div>
                  <div>• Regulatory Compliance Support</div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-burgundy/20 shadow-sm text-center space-y-2">
                <div className="font-bold text-sm text-burgundy">Marketing & Sales</div>
                <div className="text-xs text-darkText font-semibold">Manager</div>
                <div className="pt-2 border-t border-gray-100 text-[11px] text-mutedText space-y-1">
                  <div>• Sales Executives</div>
                  <div>• Marketing Officers</div>
                  <div>• Distribution Staff</div>
                  <div>• Fowzia Nom's Linkage Coordinator</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Historical Timeline */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Milestones & Progress</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">Company Timeline</h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Chronology of pivotal achievements strictly documented in company profile records.
            </p>
          </div>

          <div className="relative border-l-2 border-burgundy/20 max-w-3xl mx-auto ml-4 sm:ml-auto pl-6 sm:pl-8 space-y-8">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-gold border-4 border-white shadow-md group-hover:scale-125 transition-transform" />
                <div className="p-6 rounded-2xl bg-white border border-burgundy/10 shadow-sm hover:shadow-premium transition-all space-y-2">
                  <div className="inline-block px-3 py-0.5 rounded-full bg-burgundy/10 text-burgundy font-black text-xs">
                    {item.year}
                  </div>
                  <h3 className="font-bold text-base text-darkText">{item.title}</h3>
                  <p className="text-xs text-mutedText leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
