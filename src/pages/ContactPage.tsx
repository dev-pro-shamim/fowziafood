import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  PackageCheck,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialInquiry = searchParams.get('inquiry') || 'General Inquiry';
  const initialProduct = searchParams.get('product') || '';

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    companyName: '',
    inquiryType: initialInquiry === 'wholesale' ? 'Wholesale & Retail Supply' : 'General Inquiry',
    message: initialProduct ? `Inquiry regarding: ${initialProduct}` : ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-surface-light min-h-screen">
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-burgundy-dark via-burgundy to-[#4A0C1B] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5 text-gold" />
            <span>Direct Commercial & Public Engagement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-200">Fowzia Food</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 max-w-3xl leading-relaxed">
            Reach out to our executive office for wholesale distribution orders, institutional supplies, retail partnerships, or FSDI training inquiries.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-cream/80 border-b border-gold/20 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-mutedText flex items-center gap-2">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span>/</span>
          <span className="text-burgundy font-semibold">Contact Us</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Contact Information & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Info Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-burgundy">Get in Touch</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-darkText">Corporate Office & Plant</h2>
              <p className="text-xs sm:text-sm text-mutedText">
                Headquartered in Mohammadpur, Dhaka, servicing supermarkets, grocery networks, and institutions nationwide.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Address */}
              <div className="p-5 rounded-2xl bg-white border border-burgundy/10 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cream text-burgundy shrink-0 border border-gold/30">
                  <MapPin className="w-5 h-5 text-gold-dark" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="font-bold text-sm text-darkText">Factory & Office Address</h3>
                  <p className="text-mutedText leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-white border border-burgundy/10 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cream text-burgundy shrink-0 border border-gold/30">
                  <Phone className="w-5 h-5 text-gold-dark" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="font-bold text-sm text-darkText">Phone Hotline</h3>
                  <p className="text-mutedText">Direct sales and inquiry:</p>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-burgundy hover:underline block pt-0.5">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white border border-burgundy/10 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cream text-burgundy shrink-0 border border-gold/30">
                  <Mail className="w-5 h-5 text-gold-dark" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="font-bold text-sm text-darkText">Email Support</h3>
                  <p className="text-mutedText">Corporate and customer correspondence:</p>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-burgundy hover:underline block pt-0.5">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Website & Social */}
              <div className="p-5 rounded-2xl bg-white border border-burgundy/10 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cream text-burgundy shrink-0 border border-gold/30">
                  <Globe className="w-5 h-5 text-gold-dark" />
                </div>
                <div className="space-y-1 text-xs">
                  <h3 className="font-bold text-sm text-darkText">Online Channels</h3>
                  <p className="text-mutedText">Official web portal & social media:</p>
                  <div className="pt-1 flex flex-col gap-1">
                    <a href={`https://${COMPANY_INFO.website}`} target="_blank" rel="noreferrer" className="text-xs font-semibold text-burgundy hover:underline">
                      {COMPANY_INFO.website}
                    </a>
                    <a href={COMPANY_INFO.facebookUrl} target="_blank" rel="noreferrer" className="text-xs font-semibold text-burgundy hover:underline flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 fill-current text-blue-600" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>Official Facebook Page</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Registration Details */}
            <div className="p-6 rounded-2xl bg-cream/70 border border-gold/30 text-xs space-y-2">
              <h4 className="font-bold text-burgundy uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-dark" />
                Official Statutory Registrations
              </h4>
              <div className="space-y-1 text-mutedText">
                <p><strong>Trade License:</strong> {COMPANY_INFO.tradeLicenseNo}</p>
                <p><strong>TIN:</strong> {COMPANY_INFO.tin}</p>
                <p><strong>VAT Registration:</strong> {COMPANY_INFO.vatReg}</p>
                <p><strong>Certifications:</strong> BSTI, B-mark, Premises License, BSCIC License</p>
              </div>
            </div>
          </div>

          {/* Right Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-burgundy/10">
              
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-burgundy flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold-dark" />
                  Inquiry Portal
                </span>
                <h3 className="text-2xl font-bold text-darkText">Send a Message or Order Inquiry</h3>
                <p className="text-xs text-mutedText">
                  Please fill out the form below. Our corporate relations team will respond promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-cream/60 rounded-2xl border border-green-200 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-darkText">Thank You, {formData.fullName}!</h4>
                  <p className="text-xs sm:text-sm text-mutedText leading-relaxed">
                    Your message regarding <strong>{formData.inquiryType}</strong> has been received by Fowzia Healthy Food Products. Our team will contact you shortly at <span className="font-semibold text-burgundy">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-burgundy text-white font-semibold text-xs hover:bg-burgundy-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold text-darkText">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Afroza Rahman"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-darkText">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 01712-XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="font-semibold text-darkText">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. partner@business.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-semibold text-darkText">Company / Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Metro Mart Ltd."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <label className="font-semibold text-darkText">Inquiry Type *</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Wholesale & Retail Supply">Wholesale & Retail Supply (Supermarkets/Grocers)</option>
                      <option value="Fowzia Nom's Distribution Partnership">Fowzia Nom's Distribution Partnership</option>
                      <option value="FSDI Skill Training Enrollment">FSDI Skill Training Enrollment</option>
                      <option value="Institutional Food Procurement">Institutional Food Procurement (Schools/Hospitals/Hostels)</option>
                    </select>
                  </div>

                  <div className="space-y-1 text-xs">
                    <label className="font-semibold text-darkText">Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please specify your query, required products, estimated quantities, or delivery location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:border-burgundy focus:ring-1 focus:ring-burgundy outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-burgundy to-burgundy-dark text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-gold-light" />
                    <span>Send Message to Fowzia Food</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* Embedded Google Maps Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-premium border border-burgundy/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-bold text-lg text-darkText">Find Our Headquarters</h3>
              <p className="text-xs text-mutedText">128/2, Mohammadia Housing Limited, Mohammadpur, Dhaka-1207, Bangladesh</p>
            </div>
            <a
              href="https://maps.google.com/?q=Mohammadia+Housing+Limited+Mohammadpur+Dhaka"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-cream text-burgundy text-xs font-semibold border border-burgundy/20 hover:border-burgundy transition-colors shrink-0"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-72 sm:h-96 w-full border border-gray-200">
            <iframe
              title="Fowzia Food Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8483848123985!2d90.35489817598858!3d23.752794088686127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5186b5b5b7%3A0x6b6cfa45d6c5d1e!2sMohammadia%20Housing%20Ltd%2C%20Dhaka%201207!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>
    </div>
  );
};
