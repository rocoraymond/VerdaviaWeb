import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, ChevronDown, Radio } from 'lucide-react';
import emailjs from '@emailjs/browser';
import TiltCard from './ui/TiltCard';
import MarqueeRibbon from './ui/MarqueeRibbon';
import CircularBadge from './ui/CircularBadge';
import { useSound } from './ui/SoundManager';

const faqs = [
  {
    q: 'How long do the embedded seeds remain viable?',
    a: 'Our wildflower and herb seeds are tested and sealed in natural paper matrix to remain viable for up to 24 months in normal dry storage.'
  },
  {
    q: 'Will the tag survive rain and rough airport baggage handling?',
    a: 'Yes. Verdavia tags are reinforced with vegetable-based starches and plant cellulose, making them durable and water-resistant for heavy global flights while remaining completely biodegradable when planted in soil.'
  },
  {
    q: 'Can we order custom branded tags with our company logo?',
    a: 'Absolutely. We offer bespoke corporate packages with non-toxic soy-based custom printing for events, luxury travel companies, and eco-campaigns.'
  },
  {
    q: 'Are the seeds safe to plant worldwide?',
    a: 'Our standard blends use non-invasive, globally beneficial pollinator species (poppies, chamomile, lavender, basil). We also offer regional-specific seed blends for strict biosecurity destinations.'
  }
];

const Contact = () => {
  const { playInteractionSound } = useSound();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: 'Personal Order',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });
    playInteractionSound('click');

    try {
      const templateParams = {
        to_email: 'ilikeraymond011@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        inquiry_type: formData.inquiryType,
        message: formData.message,
        reply_to: formData.email
      };

      await emailjs.send(
        'service_tdk8e5o',
        'template_3rs6ry6',
        templateParams,
        '2q8xDZEIcMVTLDnYU'
      );

      playInteractionSound('bloom');
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your dispatch has been transmitted. Our botanical lab will respond within 24 hours.'
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryType: 'Personal Order',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus({
        success: false,
        message: 'Transmission error. Please try again or reach out directly via email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink pt-20 sm:pt-28 pb-16 sm:pb-20 px-4 md:px-8 font-sans bg-tech-grid">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto mb-12 sm:mb-16 border-b-2 border-ink pb-8 sm:pb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-bottega text-white font-mono text-[10px] sm:text-xs font-bold tracking-widest">
              <Radio className="w-3.5 h-3.5" />
              <span>[DISPATCH.01] // COMMUNICATIONS TERMINAL</span>
            </div>

            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl font-syne font-black text-ink uppercase tracking-tight leading-[0.9] break-words">
              Get In <span className="text-bottega">Touch</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg font-mono text-ink-muted max-w-2xl font-medium leading-relaxed">
              Order seeded luggage tags, request bespoke corporate samples, or coordinate eco-tourism partnerships.
            </p>
          </div>

          <div className="hidden lg:block shrink-0">
            <CircularBadge size={130} text="DIRECT DISPATCH • 2025 • " className="text-ink" />
          </div>
        </div>
      </section>

      {/* Ribbon */}
      <div className="my-6 sm:my-8">
        <MarqueeRibbon items={["GLOBAL DISPATCH", "ENTERPRISE SPECIFICATIONS", "SOY INK PRINTING", "CIRCULAR PARTNERSHIPS"]} rotate={-1} />
      </div>

      <div className="max-w-7xl mx-auto my-12 sm:my-16 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
        {/* Left: Contact Info & FAQ */}
        <div className="lg:col-span-5 space-y-6">
          <TiltCard className="p-6 sm:p-8 space-y-4 sm:space-y-6" cursorBadge="CONNECT">
            <div className="text-[10px] sm:text-xs font-mono font-bold text-bottega uppercase tracking-widest">
              [01 // DIRECTORY]
            </div>
            <h3 className="text-xl sm:text-2xl font-syne font-black text-ink uppercase">
              Global Communications
            </h3>

            <div className="space-y-3.5 sm:space-y-4 pt-3 sm:pt-4 border-t-2 border-ink">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bottega text-white flex items-center justify-center border border-ink shadow-[2px_2px_0px_#0a0a0a] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-ink-muted uppercase">Official Email</div>
                  <a href="mailto:verdaviasustainability@gmail.com" className="text-xs font-mono font-bold text-ink hover:text-bottega transition break-all">
                    verdaviasustainability@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bottega text-white flex items-center justify-center border border-ink shadow-[2px_2px_0px_#0a0a0a] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-ink-muted uppercase">Telephone Line</div>
                  <a href="tel:+639123456789" className="text-xs font-mono font-bold text-ink hover:text-bottega transition">
                    +63 912 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-bottega text-white flex items-center justify-center border border-ink shadow-[2px_2px_0px_#0a0a0a] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-bold text-ink-muted uppercase">Dispatch Center</div>
                  <span className="text-xs font-mono font-bold text-ink">
                    Manila, Philippines [LAT 14.5995° N]
                  </span>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Quick FAQ */}
          <div className="bg-white border-2 border-ink shadow-[3px_3px_0px_#0a0a0a] sm:shadow-[4px_4px_0px_#0a0a0a] rounded-2xl p-5 sm:p-8 space-y-3 sm:space-y-4">
            <div className="text-[10px] sm:text-xs font-mono font-bold text-bottega uppercase tracking-widest">
              [FAQ // COMMONLY ASKED]
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-ink/20 pb-3">
                  <button
                    onClick={() => {
                      setOpenFaq(openFaq === idx ? null : idx);
                      playInteractionSound('click');
                    }}
                    className="w-full flex items-center justify-between text-left text-xs font-syne font-bold text-ink hover:text-bottega py-1 uppercase gap-2"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 shrink-0 transform transition-transform ${openFaq === idx ? 'rotate-180 text-bottega' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <p className="text-xs font-mono text-ink-muted leading-relaxed mt-2 animate-fadeIn">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="bg-white border-2 border-ink shadow-[4px_4px_0px_#0a0a0a] sm:shadow-[6px_6px_0px_#0a0a0a] rounded-3xl p-6 sm:p-10">
            <div className="space-y-1 mb-6 sm:mb-8 border-b-2 border-ink pb-3 sm:pb-4">
              <div className="text-[10px] sm:text-xs font-mono font-bold text-bottega uppercase tracking-widest">
                [TRANSMISSION FORM]
              </div>
              <h2 className="text-2xl sm:text-3xl font-syne font-black text-ink uppercase">
                Send a Dispatch
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-ink">FIRST NAME *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Alex"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-paper border-2 border-ink text-ink font-bold focus:outline-none focus:bg-white focus:border-bottega transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-ink">LAST NAME *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Rivera"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-paper border-2 border-ink text-ink font-bold focus:outline-none focus:bg-white focus:border-bottega transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-ink">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@nomad.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-paper border-2 border-ink text-ink font-bold focus:outline-none focus:bg-white focus:border-bottega transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-ink">TELEPHONE</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 019-2834"
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-paper border-2 border-ink text-ink font-bold focus:outline-none focus:bg-white focus:border-bottega transition"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-ink">INQUIRY TYPE</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-paper border-2 border-ink text-ink font-bold focus:outline-none focus:bg-white focus:border-bottega transition"
                >
                  <option value="Personal Order">Personal Nomad Seed Tag Order</option>
                  <option value="Corporate Branding">Custom Corporate Branding & Giveaways</option>
                  <option value="Wedding / Event">Conferences, Weddings & Events</option>
                  <option value="Hospitality Partnership">Eco-Resort / Airline Collaboration</option>
                  <option value="Other">General Technical Question</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-ink">MESSAGE SPECIFICATION *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Provide expedition dates, quantity requirements, or custom branding requests..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-paper border-2 border-ink text-ink font-bold focus:outline-none focus:bg-white focus:border-bottega transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 sm:py-4 bg-bottega hover:bg-bottega-dark text-white border-2 border-ink font-syne font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#0a0a0a] sm:shadow-[4px_4px_0px_#0a0a0a] transition hover:translate-x-[-1px] hover:translate-y-[-1px] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING DISPATCH...</span>
                ) : (
                  <>
                    <span>TRANSMIT DISPATCH</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {submitStatus.message && (
                <div
                  className={`p-3.5 sm:p-4 border-2 border-ink flex items-center gap-3 animate-fadeIn ${
                    submitStatus.success
                      ? 'bg-bottega text-white shadow-[3px_3px_0px_#0a0a0a]'
                      : 'bg-red-700 text-white shadow-[3px_3px_0px_#0a0a0a]'
                  }`}
                >
                  {submitStatus.success ? (
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-white shrink-0" />
                  )}
                  <p className="text-xs font-mono font-bold">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
