import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-32 border-b border-black/10 flex flex-col">
      <div className="px-6 md:px-12 mb-16">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-6 text-zinc-900">
          Contact
        </h1>
        <p className="max-w-xl text-zinc-500 leading-relaxed md:text-lg">
          For print inquiries, gallery representation, editorial commissions, or booking Studio A.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 flex-1 border-t border-black/10">
        
        {/* Left Side: Contact Information */}
        <div className="p-6 md:p-12 lg:border-r border-black/10 bg-black/5 flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600 mb-4">Studio Location</p>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-black/50" />
                <div>
                  <h4 className="text-xl font-semibold text-zinc-900 mb-1">Lumen Headquarters</h4>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    144 Concrete Way, Studio 04<br />
                    East London, E1 6XX<br />
                    United Kingdom
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-sky-600 mb-4">Direct Lines</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-black/50" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">General Inquiries</p>
                    <a href="mailto:hello@lumen.studio" className="text-sm text-zinc-500 hover:text-sky-600 transition-colors">hello@lumen.studio</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-black/50" />
                  <div>
                    <p className="text-sm font-medium text-zinc-900">Studio Phone</p>
                    <a href="tel:+442071234567" className="text-sm text-zinc-500 hover:text-sky-600 transition-colors">+44 (0) 20 7123 4567</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-black/10">
            <h4 className="text-sm font-semibold mb-4 text-zinc-900">Representation</h4>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              Currently represented by Magnum Photos for editorial and Atlas Gallery for fine art prints.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-6 md:p-12 lg:p-16 lg:pt-20 bg-white relative">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-8 text-zinc-900">Send a Message</h3>
          
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center h-full py-20 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 stroke-[2]" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Message Received</h4>
              <p className="text-zinc-500 max-w-xs">Thank you for reaching out. The studio team will get back to you within 48 hours.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-sm font-bold uppercase tracking-widest text-sky-600 hover:text-black transition-colors"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 py-3 text-base text-zinc-900 placeholder-transparent focus:border-sky-500 focus:outline-none transition-colors peer"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-black/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/30 peer-placeholder-shown:top-3.5 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-sky-600">
                    Your Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-black/20 py-3 text-base text-zinc-900 placeholder-transparent focus:border-sky-500 focus:outline-none transition-colors peer"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-black/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/30 peer-placeholder-shown:top-3.5 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-sky-600">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <select 
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-transparent border-b border-black/20 py-3 text-base text-zinc-900 focus:border-sky-500 focus:outline-none transition-colors appearance-none peer"
                >
                  <option value="" disabled className="text-black/30">Select an inquiry type</option>
                  <option value="print">Fine Art Print Purchase</option>
                  <option value="editorial">Editorial Commission</option>
                  <option value="booking">Studio A Booking</option>
                  <option value="other">General Inquiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black/40 peer-focus:text-sky-600">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              <div className="relative group pt-4">
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-black/20 py-3 text-base text-zinc-900 placeholder-transparent focus:border-sky-500 focus:outline-none transition-colors peer resize-none"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs font-bold uppercase tracking-widest text-black/40 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black/30 peer-placeholder-shown:top-6 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-sky-600">
                  Message Details
                </label>
              </div>

              <div className="flex justify-end pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white font-semibold tracking-wide overflow-hidden transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  </span>
                  <div className="absolute inset-0 bg-sky-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}