import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';
import Button from '../components/ui/Button';

const Contact = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full relative pt-32 pb-40 px-6 max-w-6xl mx-auto min-h-screen z-10 flex flex-col lg:flex-row gap-16">
      
      {/* Contact Info */}
      <div 
        ref={headerRef}
        className={clsx(
          "w-full lg:w-1/2 transition-all duration-1000 lg:pr-12",
          headerVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        )}
      >
        <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6 tracking-tight">Inquiries</h1>
        <p className="text-white/60 text-sm font-serif leading-relaxed mb-12 max-w-md">
          For gallery representation, acquisitions, or press inquiries, please reach out via the form or contact one of the representative galleries directly.
        </p>

        <div className="space-y-10">
          <div>
            <h3 className="text-[#12c2e9] text-[10px] font-semibold tracking-widest uppercase mb-3">Studio</h3>
            <p className="text-white font-serif">studio@martinelias.com<br/>+1 (212) 555-0199</p>
          </div>
          <div>
            <h3 className="text-[#e0281c] text-[10px] font-semibold tracking-widest uppercase mb-3">Representation</h3>
            <p className="text-white font-serif">Gagosian Gallery<br/>info@gagosian.com</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div 
        ref={formRef}
        className={clsx(
          "w-full lg:w-1/2 bg-noise p-8 lg:p-12 border border-gray-100 shadow-2xl transition-all duration-1000 delay-200",
          formVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        )}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-900 text-[10px] font-semibold tracking-widest uppercase mb-2">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 font-serif focus:outline-none focus:border-[#e0281c] transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-900 text-[10px] font-semibold tracking-widest uppercase mb-2">Email</label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 font-serif focus:outline-none focus:border-[#e0281c] transition-colors"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-900 text-[10px] font-semibold tracking-widest uppercase mb-2">Message</label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 font-serif focus:outline-none focus:border-[#e0281c] transition-colors resize-none"
              placeholder="How can we help?"
            ></textarea>
          </div>
          <div className="pt-4">
            <Button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full"
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
            </Button>
          </div>
        </form>
      </div>

    </div>
  );
};

export default Contact;