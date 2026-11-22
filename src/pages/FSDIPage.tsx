import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Users, 
  HeartHandshake, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Send,
  Building2,
  Phone,
  Mail
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FSDIPage: React.FC = () => {
  const [enrollSubmitted, setEnrollSubmitted] = useState(false);
  const [enrollData, setEnrollData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Soy & Dairy Food Processing Techniques',
    background: 'Aspiring Woman Entrepreneur',
    notes: ''
  });

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrollSubmitted(true);
  };

  const programs = [
    {
      title: "Hygienic Soy & Tofu Processing",
      target: "Women & Youth Entrepreneurs",
      duration: "Practical Modular Workshop",
      desc: "Comprehensive training in soybean soaking, grinding, soy milk boiling, curd coagulating, pressing, and hygienic packaging of high-protein tofu."
    },
    {
      title: "Dairy Value Addition & Fermentation",
      target: "Dairy Producers & Small Business Owners",
      duration: "Hands-on Technical Class",
      desc: "Techniques for artisanal curd setting, sour curd culturing, traditional Borhani herb blending, and natural mozzarella cheese stretching."
    },
    {
      title: "Food Safety & ISO 22000:2018 Standards",
      target: "SME Owners & Quality Supervisors",
      duration: "Compliance Masterclass",
      desc: "Hygiene protocols, cross-contamination prevention, food-grade storage, packaging labeling, and BSTI regulatory documentation."
    },
    {
      title: "Agro-Enterprise Business Management",
      target: "Micro-Entrepreneurs & Farm Families",
      duration: "Business Mentoring",
      desc: "Cost accounting, pricing strategies for middle-income consumers, working capital planning, and retail market linkage through modern trade networks."
    }
  ];

  return (
    <div className="bg-surface-light min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-burgundy-dark via-rose-900 to-[#4A0C1B] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-gold" />
            <span>Capacity Building & Entrepreneurship Initiative</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Fowzia Skill Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Institute (FSDI)</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 max-w-3xl leading-relaxed">
            Established in 2023 with financial and technical assistance from the Department of Agricultural Marketing (DAM), Ministry of Agriculture, under the SACP-RAINS and PARTNER-APCU-DAM projects, and the World Bank.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-cream/80 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">FSDI Training Institute</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Section 1: Hero Stat & About FSDI */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-burgundy flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              Empowerment Through Skills
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-darkText leading-tight">
              Transforming Ideas into <span className="text-burgundy">Sustainable Businesses</span>
            </h2>
            <div className="space-y-4 text-sm text-darkText/80 leading-relaxed">
              <p>
                <strong>Fowzia Skill Development Institute (FSDI)</strong> is the specialized training and capacity-building initiative of Fowzia Healthy Food Products. Established in <strong>2023</strong>, FSDI provides practical education, hands-on food processing techniques, business mentoring, and enterprise incubation to empower women, youth, and small business owners.
              </p>
              <p>
                The institute aims to create self-reliant individuals who can generate local employment, contribute to economic growth, and improve their livelihoods through sustainable business practices.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-gold/30 shadow-sm text-xs space-y-1">
                <div className="font-bold text-burgundy flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-gold" />
                  Government & Multilateral Project Support
                </div>
                <p className="text-mutedText">
                  Supported by the <strong>Department of Agricultural Marketing (DAM) (Ministry of Agriculture)</strong> under the <strong>SACP-RAINS</strong> and <strong>PARTNER-APCU-DAM</strong> projects, alongside the <strong>World Bank</strong>.
                </p>
              </div>
            </div>

            {/* Giant Metric Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-burgundy to-burgundy-dark text-white flex items-center justify-between shadow-xl border border-gold/40">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-gold-light">~35,000</div>
                <div className="text-xs font-semibold text-cream/90 uppercase tracking-wider">
                  Youth & Women Trained to Date
                </div>
              </div>
              <div className="p-3 bg-white/10 rounded-xl text-gold border border-white/10">
                <Users className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Classroom Photos */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream">
              <img
                src="/images/fsdi-training-center.jpg"
                alt="FSDI Modern Training Classroom Setup"
                className="w-full h-64 object-cover"
              />
              <div className="p-3 bg-white text-center border-t border-gold/20">
                <span className="text-xs font-bold text-burgundy">FSDI Dedicated Training Classroom</span>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-cream">
              <img
                src="/images/fsdi-women-entrepreneurs-training-2.jpg"
                alt="Women Entrepreneurs Attending FSDI Session"
                className="w-full h-56 object-cover"
              />
              <div className="p-3 bg-white text-center border-t border-gold/20">
                <span className="text-xs font-bold text-darkText">Hands-on Capacity Building in Session</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Focus Areas */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-premium border border-burgundy/10 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Curriculum & Scope</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">Key Pillars of FSDI Training</h2>
            <p className="text-xs sm:text-sm text-mutedText">
              Equipping aspiring entrepreneurs with end-to-end technical, operational, and commercial knowledge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((p, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-cream/60 border border-gold/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-burgundy text-white">
                      {p.target}
                    </span>
                    <span className="text-[11px] font-semibold text-gold-dark">{p.duration}</span>
                  </div>
                  <h3 className="font-bold text-base text-darkText">{p.title}</h3>
                  <p className="text-xs text-mutedText leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-3 border-t border-gold/20 flex items-center gap-1.5 text-xs text-burgundy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-gold-dark" />
                  <span>Practical Certification</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Training Enrollment & Workshop Inquiry Form */}
        <section className="bg-gradient-to-br from-cream via-white to-cream rounded-3xl p-8 sm:p-12 border-2 border-gold/40 shadow-xl max-w-3xl mx-auto">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-burgundy flex items-center justify-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gold-dark" />
              Enrollment & Workshop Inquiry
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">
              Join an Upcoming FSDI Training Program
            </h2>
            <p className="text-xs sm:text-sm text-mutedText max-w-lg mx-auto">
              Open to youth, women, farmer groups, and small business owners seeking practical agro-processing skills.
            </p>
          </div>

          {enrollSubmitted ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-green-200 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold text-darkText">Registration Submitted!</h3>
              <p className="text-xs text-mutedText">
                Thank you for your application to FSDI. Our academic coordinator will contact you at <span className="font-semibold text-burgundy">{enrollData.phone}</span> with batch dates and syllabus details.
              </p>
              <button
                onClick={() => setEnrollSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-burgundy text-white text-xs font-semibold"
              >
                Register Another Participant
              </button>
            </div>
          ) : (
            <form onSubmit={handleEnrollSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Participant Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Afroza Begum"
                    value={enrollData.name}
                    onChange={(e) => setEnrollData({ ...enrollData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 01712-XXXXXX"
                    value={enrollData.phone}
                    onChange={(e) => setEnrollData({ ...enrollData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Desired Training Track</label>
                  <select
                    value={enrollData.interest}
                    onChange={(e) => setEnrollData({ ...enrollData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  >
                    <option value="Soy & Tofu Food Processing Techniques">Soy & Tofu Food Processing Techniques</option>
                    <option value="Dairy Processing, Curd & Cheese Making">Dairy Processing, Curd & Cheese Making</option>
                    <option value="Food Safety (FSMS) & Hygiene Standards">Food Safety (FSMS) & Hygiene Standards</option>
                    <option value="Agro-Business Management & Retail Linkage">Agro-Business Management & Retail Linkage</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-darkText">Participant Category</label>
                  <select
                    value={enrollData.background}
                    onChange={(e) => setEnrollData({ ...enrollData, background: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                  >
                    <option value="Aspiring Woman Entrepreneur">Aspiring Woman Entrepreneur</option>
                    <option value="Youth / Student">Youth / Student</option>
                    <option value="Farmer / Dairy Producer">Farmer / Dairy Producer</option>
                    <option value="Existing Food SME Owner">Existing Food SME Owner</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1 text-xs">
                <label className="font-semibold text-darkText">Address / District</label>
                <input
                  type="text"
                  placeholder="e.g. Dhaka / Gazipur / Narayanganj / Outlying District"
                  value={enrollData.notes}
                  onChange={(e) => setEnrollData({ ...enrollData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 bg-white focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-burgundy to-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-gold-light" />
                <span>Submit FSDI Enrollment Application</span>
              </button>
            </form>
          )}
        </section>

      </div>
    </div>
  );
};
