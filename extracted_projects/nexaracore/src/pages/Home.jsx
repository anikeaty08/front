import React from 'react';
import Testimonials from '../components/Testimonials';
import Industries from '../components/Industries';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full">
      <section className="min-h-screen flex overflow-hidden pt-32 pb-20 relative items-center justify-center z-20">
        <div className="skeuo-shell md:p-12 w-[90%] max-w-6xl z-20 rounded-[2rem] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative">
          <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
              <div className="h-full w-px bg-gradient-to-b from-transparent via-red-500 to-transparent absolute"></div>
          </div>
          
          <div className="absolute bottom-0 -left-12 w-[350px] h-[500px] pointer-events-none z-10 hidden xl:block opacity-60">
            <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full svg-glow">
              <path d="M50 600 Q 60 400 120 200 T 150 100" stroke="url(#grad-stem)" strokeWidth="1.5" fill="none"/>
              <path d="M150 600 Q 140 450 200 350 T 280 250" stroke="url(#grad-stem)" strokeWidth="1.5" fill="none"/>
              <path d="M20 500 C 60 520, 80 480, 100 450 C 60 430, 40 470, 20 500" fill="url(#grad-leaf-blue)"/>
              <path d="M100 550 C 140 540, 160 490, 150 450 C 110 460, 90 510, 100 550" fill="url(#grad-leaf-purple)"/>
              <g transform="translate(140, 180) scale(1.2)">
                  <circle cx="0" cy="-30" r="25" fill="url(#grad-petal-light)"/>
                  <circle cx="-25" cy="15" r="25" fill="url(#grad-petal-dark)"/>
                  <circle cx="25" cy="15" r="25" fill="url(#grad-petal-dark)"/>
                  <circle cx="0" cy="0" r="15" fill="url(#grad-bulb-yellow)"/>
              </g>
            </svg>
          </div>

          <div className="absolute bottom-0 -right-12 w-[350px] h-[500px] pointer-events-none z-10 hidden xl:block opacity-60">
              <svg viewBox="0 0 450 650" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full svg-glow">
                  <path d="M350 650 Q 360 400 250 250" stroke="url(#grad-stem)" strokeWidth="1.5" fill="none"/>
                  <path d="M250 650 Q 200 450 150 350 T 80 250" stroke="url(#grad-stem)" strokeWidth="1.5" fill="none"/>
                  <path d="M380 500 C 340 520, 320 480, 300 450 C 340 430, 360 470, 380 500" fill="url(#grad-leaf-blue)"/>
                  <g transform="translate(260, 300) scale(1.3)">
                      <circle cx="-15" cy="-25" r="20" fill="url(#grad-petal-light)"/>
                      <circle cx="15" cy="-25" r="20" fill="url(#grad-petal-light)"/>
                      <circle cx="-25" cy="10" r="22" fill="url(#grad-petal-dark)"/>
                      <circle cx="25" cy="10" r="22" fill="url(#grad-petal-dark)"/>
                      <circle cx="0" cy="15" r="20" fill="url(#grad-leaf-blue)"/>
                      <circle cx="0" cy="0" r="12" fill="url(#grad-bulb-yellow)"/>
                  </g>
              </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 z-10 relative gap-x-12 gap-y-12 items-center">
            <div className="z-10 animate-entry relative space-y-8">
              <div className="flex items-center gap-2 mb-4 skeuo-card-inner px-4 py-1.5 rounded-full w-max border border-red-500/20">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]"></span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-red-300">System Core Online</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none text-glow-red">
                Nexara
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.3)] border-red-500/50 text-red-400 skeuo-card-inner">
                  <iconify-icon icon="solar:clapperboard-play-bold-duotone" class="text-xl"></iconify-icon>
                </div>
                <p className="text-xl md:text-2xl font-light tracking-tight text-zinc-300 leading-tight">
                  <span className="text-red-500 font-medium">Motion Design</span><br />
                  & Video Advertising
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <button className="btn-gradient px-8 py-3 rounded-xl text-xs font-medium tracking-wide text-white w-48 flex items-center justify-center gap-2">
                    Initialize Array
                    <iconify-icon icon="solar:alt-arrow-right-linear" class="text-sm"></iconify-icon>
                </button>
                <button className="btn-outline-glow px-8 py-3 rounded-xl text-xs font-medium text-zinc-200 tracking-wide w-48 hover:text-white">
                    View Schematics
                </button>
              </div>
            </div>

            <div className="lg:h-[500px] w-full h-[400px] relative skeuo-card-inner rounded-xl overflow-hidden p-2 group animate-entry" style={{ animationDelay: '0.2s' }}>
              <video 
                src="https://cdn.midjourney.com/video/cd532bc5-a838-40c6-b8d0-974a38392966/1.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover rounded-lg aura-img" 
              />
              <div className="aura-overlay group-hover:opacity-60 transition-opacity duration-500 opacity-80 rounded-xl absolute top-0 right-0 bottom-0 left-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-24 border-t border-red-900/20 bg-black/20 relative z-20">
        <div className="container md:px-12 mx-auto px-6">
          <div className="flex justify-between items-end mb-16 animate-entry">
            <div>
              <h6 className="uppercase block text-[10px] font-medium text-red-400 tracking-widest mb-3">
                Node Types
              </h6>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">
                Our Services
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'solar:layers-bold-duotone', title: '2D & 3D\nAnimation' },
              { icon: 'solar:videocamera-bold-duotone', title: 'Promo Video\nProduction' },
              { icon: 'solar:magic-stick-3-bold-duotone', title: 'Visual Effects\n(VFX)' },
              { icon: 'solar:star-bold-duotone', title: 'Motion\nBranding' }
            ].map((service, idx) => (
              <div key={idx} className="skeuo-card-inner group flex flex-col text-center rounded-xl p-8 relative items-center transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(220,38,38,0.3)] hover:-translate-y-2 animate-entry" style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(220,38,38,0.2)] bg-black/50 border border-red-900/50 group-hover:border-red-500/50 transition-all">
                  <iconify-icon icon={service.icon} class="text-4xl text-red-400 group-hover:text-red-500 transition-colors"></iconify-icon>
                </div>
                <h3 className="text-lg font-medium leading-tight mb-8 text-zinc-100 group-hover:text-red-400 transition-colors whitespace-pre-line">
                  {service.title}
                </h3>
                <div className="mt-auto w-full">
                  <button className="btn-outline-glow w-full py-2.5 rounded-lg text-xs font-medium tracking-wide text-zinc-300 group-hover:text-white transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-24 pb-24 border-t border-red-900/20 relative z-20">
        <div className="container md:px-12 mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h6 className="uppercase block text-[10px] font-medium text-red-400 tracking-widest mb-3">
              System Logic
            </h6>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Execution Protocol
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-light">
              We believe in a transparent, collaborative process. Here is how we turn your abstract ideas into structured visual matrices efficiently.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] -z-10">
              <div className="absolute inset-0 border-t border-dashed border-red-900/30"></div>
              <div className="absolute inset-0 w-full h-full animate-flow-dash opacity-80" style={{ maskImage: 'linear-gradient(90deg,transparent,black 15%,black 85%,transparent)', WebkitMaskImage: 'linear-gradient(90deg,transparent,black 15%,black 85%,transparent)' }}></div>
            </div>

            {[
              { step: '01', icon: 'solar:clipboard-list-bold-duotone', title: 'Brief & Script', desc: 'We start by diving deep into your brand\'s vision. We craft a compelling script and storyboard.' },
              { step: '02', icon: 'solar:palette-bold-duotone', title: 'Design & Motion', desc: 'Our designers create high-fidelity style frames. Once approved, our animators bring the visuals to life.' },
              { step: '03', icon: 'solar:rocket-2-bold-duotone', title: 'Render & Delivery', desc: 'We polish every frame with VFX, sound design, and color grading, delivering the final assets.' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center group cursor-default">
                <div className="w-24 h-24 rounded-full skeuo-shell flex items-center justify-center mb-8 relative z-10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] group-hover:border-red-500/50">
                  <iconify-icon icon={item.icon} class="text-3xl text-red-400 transition-transform duration-500 group-hover:scale-105"></iconify-icon>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center bg-black border border-red-500/30 text-red-400 font-bold text-xs shadow-[0_0_15px_rgba(220,38,38,0.3)] transition-all duration-300 group-hover:scale-110">{item.step}</div>
                </div>
                <h3 className="text-xl font-medium text-zinc-100 mb-3 transition-colors group-hover:text-red-400">{item.title}</h3>
                <p className="text-zinc-500 text-xs leading-relaxed px-4 font-light transition-colors group-hover:text-zinc-300">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <Industries />

      <Projects />

      <section className="skeuo-shell md:p-12 z-20 mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative mb-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="uppercase block text-[10px] font-medium text-red-400 tracking-widest mb-3">
                Telemetry Feed
              </span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Thoughts on Motion,<br />Design & Technology.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { tag: 'Sector 01', title: 'Simulating Abstract Fluids in Cinema 4D', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80' },
              { tag: 'Identity', title: 'The Resurgence of Glassmorphism 2.0', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80' },
              { tag: 'Node Alpha', title: 'Navigating the AI Revolution in Motion', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80' }
            ].map((article, idx) => (
              <a href="#" key={idx} className="group flex flex-col gap-6 p-4 rounded-xl skeuo-card-inner transition-transform hover:-translate-y-2">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-red-900/20 p-1">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover rounded-md aura-img" />
                  <div className="absolute inset-0 aura-overlay rounded-md opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1.5 rounded-sm bg-black/80 border border-red-500/30 text-[9px] font-medium tracking-widest uppercase text-red-300">
                      {article.tag}
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <div className="flex items-center gap-3 text-xs font-light text-zinc-500 mb-3">
                    <span>Oct 24, 2023</span>
                    <span className="w-1 h-1 rounded-full bg-red-900/50"></span>
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-lg font-medium text-zinc-100 leading-tight mb-3 transition-colors group-hover:text-red-400">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          <div className="relative rounded-[2rem] skeuo-shell p-8 md:p-12 overflow-hidden border border-red-900/30">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-4 text-white">
                  Join our uplink feed
                </h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed max-w-md">
                  Get exclusive schematics, framework updates, and architectural insights delivered straight to your node.
                </p>
              </div>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Enter identification string" className="flex-1 skeuo-card-inner rounded-xl px-6 py-4 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 transition-colors" />
                <button type="button" className="btn-gradient text-white font-medium text-xs tracking-wide py-4 px-8 rounded-xl transition-transform flex items-center justify-center gap-2 whitespace-nowrap">
                  Initialize
                  <iconify-icon icon="solar:alt-arrow-right-linear" class="text-sm"></iconify-icon>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}