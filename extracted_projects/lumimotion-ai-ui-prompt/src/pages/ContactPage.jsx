import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionFrame from '../components/ui/SectionFrame';
import { WordReveal, CharSlideDown } from '../components/ui/TextAnimations';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-anim', 
        { opacity: 0, y: 30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
      
      const words = document.querySelectorAll('.gsap-word-reveal');
      if (words.length) {
        gsap.fromTo(words,
          { y: "100%", opacity: 0, filter: "blur(8px)" },
          { y: "0%", opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.04, ease: "power3.out" }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      gsap.fromTo('.success-anim',
        { scale: 0.9, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.6, ease: 'back.out(1.5)' }
      );
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-64px)] justify-center">
      <SectionFrame className="py-12 md:py-24 px-6 bg-transparent relative z-10 border-none" noBorderBottom>
        <div className="max-w-6xl mx-auto w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-5 flex flex-col contact-anim">
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 text-xs text-white/70 mb-8 uppercase tracking-widest font-geist font-semibold w-fit">
                Get in touch
              </div>
              
              <h1 className="text-4xl md:text-5xl font-geist font-light tracking-tighter mb-6 text-white text-balance reveal-section">
                <WordReveal>Let's build</WordReveal><br />
                <WordReveal>something.</WordReveal>
              </h1>
              
              <p className="text-white/50 text-base md:text-lg text-pretty font-geist tracking-tight mb-12">
                Have questions about enterprise licensing, custom system architectures, or technical support? Drop us a line.
              </p>

              <div className="space-y-8 mt-auto border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-sm font-geist tracking-widest uppercase text-white/40 mb-2">Support Email</h4>
                  <a href="mailto:support@lumimotion.com" className="text-lg text-white hover:text-[#c6f91f] transition-colors font-geist font-light tracking-tighter">
                    support@lumimotion.com
                  </a>
                </div>
                <div>
                  <h4 className="text-sm font-geist tracking-widest uppercase text-white/40 mb-2">Response Time</h4>
                  <p className="text-base text-white/70 font-geist tracking-tight">
                    Typically within 24 hours. Enterprise customers receive priority routing.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 relative contact-anim">
              <div className="border border-white/10 bg-[#0B0F12]/80 backdrop-blur-xl p-6 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] relative overflow-hidden min-h-[500px] flex flex-col justify-center">
                
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 z-20 pointer-events-none"></div>

                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center success-anim py-10">
                    <div className="w-16 h-16 bg-[#c6f91f]/10 border border-[#c6f91f]/30 rounded-full flex items-center justify-center mb-6 relative">
                      <div className="absolute inset-0 bg-[#c6f91f]/20 blur-xl rounded-full"></div>
                      <iconify-icon icon="solar:letter-opened-linear" class="text-3xl text-[#c6f91f] relative z-10"></iconify-icon>
                    </div>
                    <h3 className="text-2xl font-geist font-light tracking-tighter text-white mb-3">Message Sent</h3>
                    <p className="text-white/50 text-sm max-w-sm mx-auto mb-8 font-geist tracking-tight">
                      Thanks for reaching out. We've received your message and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({ ...formData, message: '' });
                      }}
                      className="bg-white/10 border border-white/20 text-white px-6 py-2.5 text-xs hover:bg-white/20 transition-colors font-geist tracking-tight"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-xs text-white/60 mb-2 font-geist">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Jane Doe" 
                          className="w-full bg-[#05080A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c6f91f]/50 transition-colors font-geist tracking-tight placeholder:text-white/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs text-white/60 mb-2 font-geist">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="jane@company.com" 
                          className="w-full bg-[#05080A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c6f91f]/50 transition-colors font-geist tracking-tight placeholder:text-white/20"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs text-white/60 mb-2 font-geist">How can we help?</label>
                      <div className="relative">
                        <select 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full bg-[#05080A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c6f91f]/50 transition-colors font-geist tracking-tight appearance-none cursor-pointer"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="enterprise">Enterprise Licensing</option>
                          <option value="billing">Billing Question</option>
                        </select>
                        <iconify-icon icon="solar:alt-arrow-down-linear" class="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"></iconify-icon>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs text-white/60 mb-2 font-geist">Message</label>
                      <textarea 
                        id="message" 
                        name="message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or issue..." 
                        className="w-full bg-[#05080A] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-[#c6f91f]/50 transition-colors font-geist tracking-tight resize-none placeholder:text-white/20"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-white text-black py-4 mt-2 text-sm hover:bg-white/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed font-geist tracking-tight font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon> Sending...
                        </>
                      ) : (
                        <>
                          <iconify-icon icon="solar:plain-2-linear" class="text-lg"></iconify-icon> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </SectionFrame>
    </div>
  );
}