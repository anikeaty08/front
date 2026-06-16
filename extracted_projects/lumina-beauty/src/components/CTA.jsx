import React, { useState } from 'react';

export default function CTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-[#EFECE6] relative w-full z-10 border-t border-zinc-200/50">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Left Card: Newsletter Signup */}
          <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-zinc-200 flex flex-col h-[520px] relative transition-transform duration-500 hover:-translate-y-1">
            <div className="flex flex-col flex-1 relative z-10">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">Stay Updated</span>
              
              <h2 className="text-4xl md:text-[3.25rem] font-medium tracking-tight text-zinc-900 leading-[1.1] mb-10 max-w-md">
                Subscribe to <br className="hidden md:block"/>our waitlist
              </h2>
              
              <div className="relative w-full max-w-sm">
                <form className={`relative flex items-center w-full bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-full p-1.5 ${isSubmitted ? 'is-submitted' : ''}`} onSubmit={handleSubmit}>
                  <input 
                    type="email" 
                    required
                    placeholder="Enter your email" 
                    className="w-full pl-5 pr-3 py-2 bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                  />
                  <button type="submit" className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 text-black/50 flex items-center justify-center flex-shrink-0 transition-all shadow-sm active:scale-95">
                    <iconify-icon icon="solar:arrow-right-linear" width="18" height="18"></iconify-icon>
                  </button>
                </form>
                <div className="form-success text-sm font-medium text-zinc-600 mt-4 py-3 px-6 rounded-full border border-zinc-200 bg-zinc-50 shadow-sm absolute w-full top-0">
                  Subscribed successfully.
                </div>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-auto relative z-10 pt-8">
              <a href="https://x.com/" className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all active:scale-95">
                <iconify-icon icon="simple-icons:x" width="14" height="14"></iconify-icon>
              </a>
              <a href="https://instagram.com/" className="w-10 h-10 rounded-full border border-zinc-200 bg-zinc-50 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 hover:shadow-sm transition-all active:scale-95">
                <iconify-icon icon="simple-icons:instagram" width="16" height="16"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Right Card: Partnerships */}
          <div className="bg-white/80 rounded-[2.5rem] p-10 md:p-14 shadow-sm border border-zinc-200 flex flex-col h-[520px] relative transition-transform duration-500 hover:-translate-y-1">
            <div className="relative z-10 flex flex-col flex-1">
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-zinc-400 uppercase mb-4">Partnerships</span>
              
              <div className="mt-auto pb-4">
                <h2 className="text-4xl md:text-[3.25rem] font-medium tracking-tight text-zinc-900 leading-[1.1] mb-8 max-w-sm">
                  Interested in <br className="hidden md:block"/>working with us?
                </h2>
                
                <a href="mailto:hello@luminabeauty.com" className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-medium tracking-tight text-zinc-600 hover:text-zinc-900 transition-colors">
                  hello@luminabeauty.com
                  <iconify-icon icon="solar:arrow-right-up-linear" width="28" height="28" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform opacity-50 group-hover:opacity-100"></iconify-icon>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}