import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = {
  Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Documentation'],
  Company: ['About Us', 'Careers', 'Blog', 'Contact', 'Partners'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
};

export default function Footer() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%'
        }
      });

      gsap.from('.footer-bottom', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer ref={sectionRef} className="bg-[#050505] pt-24 pb-10 px-6 md:px-12 relative z-10 overflow-hidden">
      {/* Top Border Glow Effect */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#FF4500]/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-xl h-24 bg-[#FF4500] blur-[100px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand & Newsletter Column */}
          <div className="footer-col md:col-span-12 lg:col-span-5 pr-0 lg:pr-12">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tight text-white mb-6">
              <iconify-icon icon="solar:bolt-bold" class="text-[#FF4500] text-3xl drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]"></iconify-icon>
              Dasher
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
              The high-performance edge computing platform for modern development teams. Ship faster, scale infinitely, and focus entirely on your product.
            </p>
            
            <div className="mb-8 max-w-md">
              <h4 className="text-white font-medium mb-3 text-sm">Subscribe to our newsletter</h4>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-4 pr-32 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF4500]/50 focus:bg-white/[0.05] transition-all duration-300"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black hover:bg-zinc-200 px-4 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center gap-2"
                >
                  {subscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
              {subscribed && (
                <p className="text-[#FF4500] text-xs mt-2 animate-pulse">Thanks for subscribing!</p>
              )}
            </div>

            <div className="flex gap-3">
              {['simple-icons:github', 'simple-icons:x', 'simple-icons:discord', 'simple-icons:linkedin'].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#FF4500]/20 hover:border-[#FF4500]/30 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,69,0,0.15)]">
                  <iconify-icon icon={icon} class="text-lg"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer-col flex flex-col">
                <h4 className="text-white font-semibold tracking-tight mb-6">{title}</h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-zinc-400 hover:text-white hover:translate-x-1 inline-flex items-center group transition-all duration-200">
                        {link}
                        <iconify-icon icon="solar:alt-arrow-right-linear" class="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-1 text-[#FF4500] transition-all duration-200"></iconify-icon>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Dasher Inc. All rights reserved.</p>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-sm text-zinc-300 hover:bg-white/[0.05] transition-colors cursor-pointer">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}