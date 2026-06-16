import React from 'react';

const Footer = () => {
  return (
    <section className="relative w-full bg-[#050505] pt-32 pb-12 overflow-hidden text-[#F2F0EB]">
      {/* Ambient Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-stone-800/20 blur-[100px] rounded-full pointer-events-none select-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-gradient-to-tr from-stone-800/30 via-stone-900/10 to-transparent blur-[120px] rounded-full pointer-events-none select-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* CTA Section */}
        <div className="mb-32 flex flex-col items-center text-center reveal-item">
          {/* Floating Icon */}
          <div className="mb-10 relative group">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-stone-700 to-stone-900 opacity-40 blur transition duration-500 group-hover:opacity-100"></div>
            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-stone-800 bg-[#0A0A0A] shadow-2xl">
              <iconify-icon icon="lucide:monitor" width="28" height="28" className="text-white"></iconify-icon>
            </div>
          </div>

          {/* Headline */}
          <h2 className="mb-6 max-w-3xl font-dm-sans text-5xl font-light tracking-tighter text-white md:text-6xl">
            Start Integrating Today.
          </h2>
          <p className="mb-10 max-w-lg font-sans text-lg text-stone-400 font-light leading-relaxed">
            Take your web projects to the next level with our AI-powered digital intelligence solution.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a href="#" className="group relative flex items-center gap-2 rounded-full bg-[#F2F0EB] px-8 py-3 text-sm font-medium text-stone-950 transition-all hover:bg-white hover:scale-105">
              <span>Get Started</span>
              <iconify-icon icon="lucide:arrow-right" width="16" height="16" className="transition-transform group-hover:translate-x-0.5"></iconify-icon>
            </a>
            <a href="#" className="group flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900/30 px-8 py-3 text-sm font-medium text-stone-300 backdrop-blur-sm transition-colors hover:border-stone-700 hover:bg-stone-800 hover:text-white">
              <span>Read Docs</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-stone-800/60 pt-16 reveal-item delay-200">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            
            {/* Brand Column */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                   <iconify-icon icon="solar:tornado-small-outline" width="30" height="30" style={{ color: 'rgb(242, 240, 235)' }}></iconify-icon>
                  <span className="font-dm-sans text-2xl font-light tracking-tighter text-white">Etheria</span>
                </div>
                <p className="max-w-xs font-sans text-sm font-normal leading-relaxed text-stone-500">
                  Take your web projects to the next level with our AI-powered digital card solution.
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="mt-8 flex gap-5 md:mt-12">
                <a href="#" className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white flex items-center justify-center">
                  <iconify-icon icon="lucide:instagram" width="18" height="18"></iconify-icon>
                </a>
                <a href="#" className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white flex items-center justify-center">
                  <iconify-icon icon="lucide:twitter" width="18" height="18"></iconify-icon>
                </a>
                <a href="#" className="group rounded-full bg-stone-900/50 p-2 text-stone-400 transition-all hover:bg-stone-800 hover:text-white flex items-center justify-center">
                  <iconify-icon icon="lucide:dribbble" width="18" height="18"></iconify-icon>
                </a>
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:col-span-2 lg:block"></div>

            {/* Links Columns */}
            <div className="col-span-1 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:col-span-5 lg:gap-12">
              <div>
                <h3 className="mb-6 font-sans text-sm font-medium tracking-tight text-white">Resources</h3>
                <ul className="space-y-4 font-sans text-sm text-stone-500">
                  <li><a href="#" className="transition-colors hover:text-stone-300">About</a></li>
                  <li><a href="#" className="transition-colors hover:text-stone-300">Career</a></li>
                  <li><a href="#" className="transition-colors hover:text-stone-300">Blog</a></li>
                  <li><a href="#" className="transition-colors hover:text-stone-300">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 font-sans text-sm font-medium tracking-tight text-white">Developers</h3>
                <ul className="space-y-4 font-sans text-sm text-stone-500">
                  <li><a href="#" className="transition-colors hover:text-stone-300">Documentation</a></li>
                  <li><a href="#" className="transition-colors hover:text-stone-300">API Reference</a></li>
                  <li><a href="#" className="transition-colors hover:text-stone-300">API Changelog</a></li>
                  <li><a href="#" className="transition-colors hover:text-stone-300">Status</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;