import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Icons
      lucide.createIcons({
          strokeWidth: 1.5
      });

      // Simple Routing Logic
      function navigate(viewId) {
          // Hide all views
          document.querySelectorAll('.page-view').forEach(el => {
              el.classList.add('hidden');
              el.classList.remove('block');
          });

          // Show target view
          const target = document.getElementById(`view-${viewId}`);
          if(target) {
              target.classList.remove('hidden');
              target.classList.add('block');
          }

          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // FAQ Accordion Logic
      document.querySelectorAll('.faq-toggle').forEach(button => {
          button.addEventListener('click', () => {
              const content = button.nextElementSibling;
              const icon = button.querySelector('i');

              // Toggle current
              content.classList.toggle('hidden');
              if (content.classList.contains('hidden')) {
                  icon.setAttribute('data-lucide', 'plus');
                  icon.classList.remove('rotate-45');
              } else {
                  icon.setAttribute('data-lucide', 'plus'); // Keep plus but rotate to look like an X or keep standard
                  icon.classList.add('rotate-45');
              }

              // Re-init icon to apply changes
              lucide.createIcons({ strokeWidth: 1.5 });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#0B1220]/80 backdrop-blur-md border-b border-white/5">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<button className="flex items-center gap-3 group" onclick="navigate('home')">
<span className="group-hover:text-gray-200 transition-colors text-xl font-semibold text-white tracking-tight">Sleeping Giant Co</span>
</button>

<div className="hidden md:flex items-center gap-8">
<button className="hover:text-white transition-colors text-sm font-medium text-gray-300" onclick="navigate('services')">
            Services
          </button>
<button className="hover:text-white transition-colors text-sm font-medium text-gray-300" onclick="navigate('home'); setTimeout(() =&gt; { const el = document.getElementById('our-approach'); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: 'smooth'}); } }, 50);">
            Our Approach
          </button>
<button className="hover:text-white transition-colors text-sm font-medium text-gray-300" onclick="navigate('home'); setTimeout(() =&gt; { const h2 = Array.from(document.querySelectorAll('h2')).find(e =&gt; e.textContent.includes('Frequently Asked Questions')); if(h2) { const el = h2.closest('section') || h2; const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: 'smooth'}); } }, 50);">
            FAQ
          </button>
<button className="hover:text-white transition-colors text-sm font-medium text-gray-300" onclick="navigate('contact')">
            Contact
          </button>
</div>

<div className="hidden md:block">
<button className="px-5 py-2.5 bg-[#F5A623] text-[#0B1220] text-sm font-medium rounded-md shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all" onclick="navigate('contact')">
            Book a Growth Call
          </button>
</div>

<button className="md:hidden text-gray-300 hover:text-white">
<i data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="flex-grow pt-20">



<div className="page-view block" id="view-home">

<section className="md:pt-48 md:pb-24 overflow-hidden pt-32 pr-6 pb-16 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5A623]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F5A623]/20 bg-[#F5A623]/5 mb-8">
<span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse"></span>
<span className="text-sm font-medium text-gray-300">
                Marketing without the agency model
              </span>
</div>
<h1 className="leading-[1.1] md:text-6xl text-5xl font-semibold tracking-tight mb-8">
              You don't need more marketing.
              <br/>
<span className="text-[#F5A623]">You need a system that sells.</span>
</h1>
<p className="leading-relaxed md:text-xl text-lg text-neutral-50 max-w-2xl mr-auto mb-12 ml-auto">
              Hands-on marketing support for growing Australian businesses -
              focused on the strategies that drive real revenue, without the
              smoke and mirrors of a traditional agency.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:shadow-[0_0_35px_rgba(245,166,35,0.6)] hover:-translate-y-0.5 transition-all duration-300 text-lg font-medium text-[#0B1220] bg-[#F5A623] w-full rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(245,166,35,0.4)]" onclick="navigate('contact')">
                Book a Free Growth Call
              </button>
<button className="sm:w-auto hover:bg-white/5 transition-colors duration-300 text-lg font-medium text-white w-full border-white/20 border rounded-lg pt-4 pr-8 pb-4 pl-8" onclick="navigate('services')">
                Explore Services
              </button>
</div>
</div>
</section>

<section className="py-12 relative z-10 w-full overflow-hidden bg-[#0B1220]">
<div className="max-w-7xl mx-auto text-center mb-10 px-6">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em]">
              Trusted by forward-thinking companies
            </p>
</div>
<div className="relative w-full flex overflow-hidden group">

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B1220] via-[#0B1220]/80 to-transparent z-10 pointer-events-none"></div>

<div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">

<div className="flex items-center justify-center gap-16 px-8 min-w-max">

<div className="flex flex-col items-start justify-center shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-3">
<div className="w-1.5 h-6 bg-[#F5A623]"></div>
<span className="text-2xl font-semibold tracking-tight text-white">
                      DEMATIC
                    </span>
</div>
<span className="text-xs text-gray-400 tracking-wider mt-1 ml-4 scale-90 origin-left">
                    Connected Workforce Solutions
                  </span>
</div>

<div className="flex flex-col items-start justify-center shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-1">
<div className="flex -space-x-3 text-[#F5A623]">
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24">
<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
</svg>
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24">
<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
</svg>
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24">
<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
</svg>
</div>
<span className="text-3xl font-bold tracking-tighter text-[#2563eb] italic lowercase">
                      colby
                    </span>
</div>
<div className="flex flex-col items-end w-full -mt-1">
<span className="text-xs font-bold text-white uppercase tracking-widest scale-90 origin-right">
                      Storage Solutions
                    </span>
<span className="text-xs text-gray-400 tracking-widest uppercase scale-75 origin-right">
                      By Dematic
                    </span>
</div>
</div>

<div className="flex items-center justify-center shrink-0 gap-3 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-full h-full text-white absolute inset-0" fill="white" viewbox="0 0 24 24">
<path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.38c-.34.19-.76.19-1.1 0l-7.94-4.43A.995.995 0 0 1 3 16.45V7.55c0-.38.21-.71.53-.88l7.9-4.38c.34-.19.76-.19 1.1 0l7.94 4.43c.32.18.53.51.53.88v8.9z" fill="white"></path>
</svg>
<span className="text-xs font-bold text-[#0B1220] z-10 scale-90">
                      ebm
                    </span>
</div>
<span className="text-2xl font-semibold tracking-tight text-white">
                    RentCover
                  </span>
</div>

<div className="flex flex-col items-center justify-center shrink-0 w-40 h-16 rounded-[100px] border-2 border-gray-400 bg-gradient-to-b from-[#4facfe] to-[#00f2fe] shadow-inner relative overflow-hidden group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="absolute inset-0 bg-[#0052D4]/50"></div>
<span className="text-xl font-bold tracking-tight text-white z-10" style={{transform: 'scaleY(0.9)'}}>
                    HY-GEN
                  </span>
<span className="text-xs font-bold tracking-[0.2em] text-white z-10 scale-50 -mt-1">
                    NUTRIENTS
                  </span>
</div>

<div className="flex flex-col items-end shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-4xl font-bold italic text-white" style={{letterSpacing: '-2px', transform: 'skewX(-15deg)'}}>
                    Mac's
                  </span>
<div className="flex gap-1 mt-1 opacity-80">
<div className="w-3 h-1 bg-[#F5A623] skew-x-[-30deg]"></div>
<div className="w-3 h-1 bg-[#F5A623] skew-x-[-30deg]"></div>
<div className="w-8 h-1 bg-[#F5A623] skew-x-[-30deg]"></div>
</div>
</div>

<div className="flex flex-col shrink-0 border border-gray-500 w-48 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="bg-[#1e3a8a] py-2 flex flex-col items-center">
<span className="text-sm font-medium tracking-wider text-white uppercase">
                      Vicki Philipoff
                    </span>
<span className="text-xs tracking-[0.2em] text-white uppercase mt-0.5 scale-75">
                      Settlements
                    </span>
</div>
<div className="bg-gray-300 py-1 text-center flex items-center justify-center gap-1">
<span className="text-xs tracking-[0.1em] text-[#0B1220] uppercase font-medium scale-75">
                      Settle with ease
                    </span>
</div>
</div>

<div className="flex h-12 shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="bg-gray-300 w-12 flex items-center justify-center p-2">
<div className="grid grid-cols-4 gap-0.5">
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-[#F5A623]"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
</div>
</div>
<div className="bg-[#1e3a8a] px-4 flex items-center">
<span className="text-xl font-normal tracking-tight text-white">
                      Burgess Paluch
                    </span>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-16 px-8 min-w-max">

<div className="flex flex-col items-start justify-center shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-3">
<div className="w-1.5 h-6 bg-[#F5A623]"></div>
<span className="text-2xl font-semibold tracking-tight text-white">
                      DEMATIC
                    </span>
</div>
<span className="text-xs text-gray-400 tracking-wider mt-1 ml-4 scale-90 origin-left">
                    Connected Workforce Solutions
                  </span>
</div>

<div className="flex flex-col items-start justify-center shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-1">
<div className="flex -space-x-3 text-[#F5A623]">
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24">
<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
</svg>
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24">
<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
</svg>
<svg className="w-8 h-8 fill-current" viewbox="0 0 24 24">
<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
</svg>
</div>
<span className="text-3xl font-bold tracking-tighter text-[#2563eb] italic lowercase">
                      colby
                    </span>
</div>
<div className="flex flex-col items-end w-full -mt-1">
<span className="text-xs font-bold text-white uppercase tracking-widest scale-90 origin-right">
                      Storage Solutions
                    </span>
<span className="text-xs text-gray-400 tracking-widest uppercase scale-75 origin-right">
                      By Dematic
                    </span>
</div>
</div>

<div className="flex items-center justify-center shrink-0 gap-3 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-full h-full text-white absolute inset-0" fill="white" viewbox="0 0 24 24">
<path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.38c-.34.19-.76.19-1.1 0l-7.94-4.43A.995.995 0 0 1 3 16.45V7.55c0-.38.21-.71.53-.88l7.9-4.38c.34-.19.76-.19 1.1 0l7.94 4.43c.32.18.53.51.53.88v8.9z" fill="white"></path>
</svg>
<span className="text-xs font-bold text-[#0B1220] z-10 scale-90">
                      ebm
                    </span>
</div>
<span className="text-2xl font-semibold tracking-tight text-white">
                    RentCover
                  </span>
</div>

<div className="flex flex-col items-center justify-center shrink-0 w-40 h-16 rounded-[100px] border-2 border-gray-400 bg-gradient-to-b from-[#4facfe] to-[#00f2fe] shadow-inner relative overflow-hidden group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="absolute inset-0 bg-[#0052D4]/50"></div>
<span className="text-xl font-bold tracking-tight text-white z-10" style={{transform: 'scaleY(0.9)'}}>
                    HY-GEN
                  </span>
<span className="text-xs font-bold tracking-[0.2em] text-white z-10 scale-50 -mt-1">
                    NUTRIENTS
                  </span>
</div>

<div className="flex flex-col items-end shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-4xl font-bold italic text-white" style={{letterSpacing: '-2px', transform: 'skewX(-15deg)'}}>
                    Mac's
                  </span>
<div className="flex gap-1 mt-1 opacity-80">
<div className="w-3 h-1 bg-[#F5A623] skew-x-[-30deg]"></div>
<div className="w-3 h-1 bg-[#F5A623] skew-x-[-30deg]"></div>
<div className="w-8 h-1 bg-[#F5A623] skew-x-[-30deg]"></div>
</div>
</div>

<div className="flex flex-col shrink-0 border border-gray-500 w-48 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="bg-[#1e3a8a] py-2 flex flex-col items-center">
<span className="text-sm font-medium tracking-wider text-white uppercase">
                      Vicki Philipoff
                    </span>
<span className="text-xs tracking-[0.2em] text-white uppercase mt-0.5 scale-75">
                      Settlements
                    </span>
</div>
<div className="bg-gray-300 py-1 text-center flex items-center justify-center gap-1">
<span className="text-xs tracking-[0.1em] text-[#0B1220] uppercase font-medium scale-75">
                      Settle with ease
                    </span>
</div>
</div>

<div className="flex h-12 shrink-0 group/logo cursor-pointer opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="bg-gray-300 w-12 flex items-center justify-center p-2">
<div className="grid grid-cols-4 gap-0.5">
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-[#F5A623]"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
<div className="w-1.5 h-1.5 bg-gray-500"></div>
</div>
</div>
<div className="bg-[#1e3a8a] px-4 flex items-center">
<span className="text-xl font-normal tracking-tight text-white">
                      Burgess Paluch
                    </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0e1628] border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 pointer-events-none opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F5A623]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto relative">

<div className="text-center mb-16 max-w-4xl mx-auto">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-6" id="approach">
                A different way to work with marketing
              </h2>
<p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                Most growing businesses don’t need a full-service agency.
                <br className="hidden md:block"/>
                They need direct support, clear priorities, and work that ties
                back to revenue.
              </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8 items-stretch">

<div className="md:p-10 flex flex-col overflow-hidden bg-[#111928] h-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between mb-8 pb-8 border-b border-white/5 relative z-10 shrink-0">
<h3 className="text-2xl font-medium text-white tracking-tight">
                    Typical agency model
                  </h3>
<span className="text-sm font-medium text-gray-400 bg-white/5 border-white/10 border rounded-md pt-1 pr-3 pb-1 pl-3">
                    Vendor-led
                  </span>
</div>
<ul className="flex flex-col relative z-10">
<li className="flex items-start gap-5">
<iconify-icon className="text-gray-500 mt-0.5 shrink-0" height="24" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-300">
                      Multiple layers between you and the work
                    </span>
</li>
<li className="flex items-start gap-5 mt-6 pt-6 border-t border-white/5">
<iconify-icon className="text-gray-500 mt-0.5 shrink-0" height="24" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-300">
                      Retainers that prioritise activity over outcomes
                    </span>
</li>
<li className="flex items-start gap-5 mt-6 pt-6 border-t border-white/5">
<iconify-icon className="text-gray-500 mt-0.5 shrink-0" height="24" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-300">
                      Generic plans applied across many clients
                    </span>
</li>
<li className="flex items-start gap-5 mt-6 pt-6 border-t border-white/5">
<iconify-icon className="text-gray-500 mt-0.5 shrink-0" height="24" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-300">
                      Time spent on meetings, reporting, and process
                    </span>
</li>
</ul>
<div className="shrink-0 text-center bg-[#1a2333]/50 z-10 border-white/5 border rounded-xl mt-auto pt-5 pr-6 pb-5 pl-6 relative translate-y-3">
<p className="text-base text-gray-400">
                    You often end up paying for process, not momentum.
                  </p>
</div>
</div>

<div className="relative group h-full">

<div className="absolute -inset-1 bg-gradient-to-br from-[#F5A623]/40 to-transparent rounded-2xl blur-lg pointer-events-none"></div>

<div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-[#F5A623] via-[#F5A623]/30 to-[#F5A623]/80 shadow-[0_0_30px_rgba(245,166,35,0.1)] flex flex-col">

<div className="p-8 md:p-10 flex flex-col overflow-hidden bg-[#111928] h-full rounded-[15px] relative">
<div className="absolute inset-0 bg-gradient-to-b from-[#F5A623]/[0.05] to-transparent pointer-events-none"></div>
<div className="flex z-10 border-[#F5A623]/20 border-b mb-8 pb-8 relative items-center justify-between shrink-0">
<h3 className="text-2xl font-medium text-white tracking-tight" id="our-approach">
                        Our approach
                      </h3>
<span className="px-3 py-1 rounded-md bg-[#F5A623]/10 border border-[#F5A623]/30 text-sm font-medium text-[#F5A623]">
                        Partner-led
                      </span>
</div>
<ul className="flex flex-col z-10 relative">
<li className="flex items-start gap-5">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-200">
                          Work directly with the person responsible for the work
                        </span>
</li>
<li className="flex border-[#F5A623]/10 border-t mt-6 pt-6 gap-x-5 gap-y-5 items-start">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-200">Focus on the key tasks that actually drive growth</span>
</li>
<li className="flex items-start gap-5 mt-6 pt-6 border-t border-[#F5A623]/10">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-200">
                          Strategy and execution working together
                        </span>
</li>
<li className="flex items-start gap-5 mt-6 pt-6 border-t border-[#F5A623]/10">
<iconify-icon className="text-[#F5A623] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-lg text-gray-200">
                          Clear priorities and consistent progress
                        </span>
</li>
</ul>
<div className="z-10 shrink-0 text-center bg-[#F5A623]/5 border-[#F5A623]/20 border rounded-xl mt-auto pt-5 pr-6 pb-5 pl-6 relative translate-y-4">
<p className="text-base text-gray-200">
                        Hands-on support designed around your business, no
                        lock-in retainers.
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-5xl mx-auto">
<div className="bg-[#111928] border border-white/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="flex items-center justify-center gap-6 mb-8 relative z-10">
<div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/10 flex-grow max-w-[200px]"></div>
<h3 className="text-2xl font-medium tracking-tight text-white whitespace-nowrap">
                    What you can expect
                  </h3>
<div className="h-[1px] bg-gradient-to-l from-transparent via-white/20 to-white/10 flex-grow max-w-[200px]"></div>
</div>
<p className="md:text-xl leading-relaxed text-lg text-gray-300 max-w-3xl z-10 mr-auto mb-10 ml-auto relative">A practical partner who helps design, implement, and improve - without the inflated monthly retainer!</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
<button className="sm:w-auto hover:shadow-[0_0_30px_rgba(245,166,35,0.4)] transition-all text-lg font-medium text-[#0B1220] bg-[#F5A623] w-full rounded-lg pt-4 pr-10 pb-4 pl-10 shadow-[0_0_20px_rgba(245,166,35,0.25)]" onclick="navigate('contact')">
                    Book a Growth Call
                  </button>
<button className="sm:w-auto hover:bg-white/5 hover:border-white/20 transition-colors text-lg font-medium text-white bg-transparent w-full border-white/10 border rounded-lg pt-4 pr-10 pb-4 pl-10" onclick="navigate('services')">
                    Services
                  </button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute inset-0 pointer-events-none opacity-[0.15]" style={{backgroundImage: 'radial-gradient(rgba(245, 166, 35, 0.3) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="z-10 max-w-7xl mr-auto ml-auto relative">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                Where We Can Help
              </h2>
<div className="space-y-3">
<p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Every business is different. We start by understanding your
                  goals and where growth is currently constrained.
                </p>
<p className="md:text-2xl leading-relaxed text-xl text-gray-300 max-w-3xl mr-auto ml-auto"></p>
</div>
</div>

<div className="relative max-w-5xl mx-auto mb-16">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#F5A623] to-transparent relative z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-[#F5A623] blur-[4px] opacity-80 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[15px] bg-[#F5A623] blur-[20px] opacity-40 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-[40px] bg-[#F5A623] blur-[40px] opacity-20 pointer-events-none"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative">

<div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-[#F5A623]/30 via-white/5 to-white/5 flex flex-col transition-all duration-300 hover:from-[#F5A623]/50 shadow-2xl">
<div className="md:p-10 flex flex-col overflow-hidden bg-[#111928] h-full rounded-[15px] pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/10 to-transparent"></div>
<div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-white/10 flex items-center justify-center text-[#F5A623] mb-8 shadow-sm">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-6 text-white">
                    Paid Advertising
                  </h3>
<div className="space-y-6 flex-grow">
<p className="text-lg text-gray-400 leading-relaxed">
                      Sometimes the biggest opportunity is simply reaching more
                      high-intent buyers.
                    </p>
<p className="text-lg text-gray-400 leading-relaxed">
                      Paid channels like Google and Meta can help capture demand
                      from people already looking for what you offer.
                    </p>
</div>
<button className="group inline-flex gap-1.5 transition-colors hover:text-white text-sm font-medium text-[#F5A623] w-max mt-8 gap-x-1.5 gap-y-1.5 items-center" onclick="navigate('services'); setTimeout(() =&gt; { const el = document.getElementById('paid-ads'); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: 'smooth'}); } }, 50);">
                    Explore
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-[#F5A623]/30 via-white/5 to-white/5 flex flex-col transition-all duration-300 hover:from-[#F5A623]/50 shadow-2xl">
<div className="bg-[#111928] p-8 md:p-10 flex flex-col h-full rounded-[15px] relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/10 to-transparent"></div>
<div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-white/10 flex items-center justify-center text-[#F5A623] mb-8 shadow-sm">
<i className="w-6 h-6 fill-current" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-6 text-white">
                    Conversion Improvement
                  </h3>
<div className="space-y-6 flex-grow">
<p className="text-lg text-gray-400 leading-relaxed">
                      In many cases, traffic already exists — but too few
                      visitors become customers.
                    </p>
<p className="text-lg text-gray-400 leading-relaxed">
                      Improving landing pages, messaging and offers can
                      dramatically increase results.
                    </p>
</div>
<button className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#F5A623] transition-colors hover:text-white w-max" onclick="navigate('services'); setTimeout(() =&gt; { const el = document.getElementById('conversion'); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: 'smooth'}); } }, 50);">
                    Explore
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-b from-[#F5A623]/30 via-white/5 to-white/5 flex flex-col transition-all duration-300 hover:from-[#F5A623]/50 shadow-2xl">
<div className="bg-[#111928] p-8 md:p-10 flex flex-col h-full rounded-[15px] relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/10 to-transparent"></div>
<div className="w-12 h-12 rounded-xl bg-[#0B1220] border border-white/10 flex items-center justify-center text-[#F5A623] mb-8 shadow-sm">
<i className="w-6 h-6" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-6 text-white">
                    Follow-Up &amp; Customer Nurture
                  </h3>
<div className="space-y-6 flex-grow">
<p className="text-lg text-gray-400 leading-relaxed">
                      A large portion of sales happen after the first
                      interaction.
                    </p>
<p className="text-lg text-gray-400 leading-relaxed">
                      Simple follow-up systems, like email and CRM workflows can
                      turn interest into revenue.
                    </p>
</div>
<button className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#F5A623] transition-colors hover:text-white w-max" onclick="navigate('services'); setTimeout(() =&gt; { const el = document.getElementById('nurture'); if(el) { const y = el.getBoundingClientRect().top + window.scrollY - 100; window.scrollTo({top: y, behavior: 'smooth'}); } }, 50);">
                    Explore
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="text-center mt-20 max-w-3xl mx-auto space-y-3 relative z-10">
<p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                Not every business needs everything.
              </p>
<p className="md:text-2xl leading-relaxed text-xl text-gray-300">We focus on the key areas that <span className="text-[#F5A623] font-medium">actually move</span> the needle.</p>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
              Frequently Asked Questions
            </h2>
<div className="space-y-4">

<div className="bg-[#111928] border border-white/5 rounded-xl overflow-hidden">
<button className="faq-toggle flex focus:outline-none text-left w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-lg font-medium">
                    How is this different from working with a traditional
                    agency?
                  </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-content leading-relaxed text-lg text-gray-400 pr-6 pb-6 pl-6">
                  Most agencies are structured to manage a large number of
                  clients at once. That often means multiple layers between
                  strategy and execution, and work that focuses on activity
                  rather than outcomes. Our approach is different. We work with
                  a smaller number of businesses and operate more like an
                  extension of the team. That means direct involvement, clearer
                  communication, and a focus on the few things that will
                  actually drive results.
                </div>
</div>

<div className="bg-[#111928] border border-white/5 rounded-xl overflow-hidden">
<button className="faq-toggle flex focus:outline-none text-left w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-lg font-medium">
                    What does working together typically look like?
                  </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-content leading-relaxed text-lg text-gray-400 pr-6 pb-6 pl-6">We start by understanding your business, how you're currently acquiring customers, and where growth may be constrained. From there we identify the opportunities most likely to drive results and agree on where to focus. Some businesses engage us for focused projects, while others prefer ongoing support where we work alongside the business to continually improve marketing and revenue.</div>
</div>

<div className="bg-[#111928] border border-white/5 rounded-xl overflow-hidden">
<button className="faq-toggle flex focus:outline-none text-left w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-lg font-medium">
                    What types of businesses do you typically work with?
                  </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-content leading-relaxed text-lg text-gray-400 pr-6 pb-6 pl-6">We work with growing Australian businesses that want marketing to become more structured and revenue focused. This includes service businesses, B2B companies, ecommerce brands, and businesses in industries like manufacturing and technology. What they usually have in common is that they’ve reached a stage where marketing needs to move beyond ad-hoc campaigns and become a more consistent driver of growth.</div>
</div>

<div className="bg-[#111928] border border-white/5 rounded-xl overflow-hidden">
<button className="faq-toggle flex focus:outline-none text-left w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<span className="text-lg font-medium">
                    Is this suitable for small and medium-sized businesses?
                  </span>
<i className="w-5 h-5 text-gray-400 transition-transform duration-300" data-lucide="plus"></i>
</button>
<div className="faq-content leading-relaxed text-lg text-gray-400 pr-6 pb-6 pl-6">Yes. We work with small to medium sized businesses that want experienced marketing support without the complexity or cost of building a full internal team or engaging a large agency. Because we work in flexible ways - from focused projects to ongoing support - businesses can engage us at a level that makes sense for their budget.</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0e1628] border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to Wake the Sleeping Giant?
              </h2>
<p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Stop burning budget on isolated tactics. Let's look under the
                hood of your current setup, identify the exact leaks in your
                funnel, and build a customized battle plan for scalable growth.
              </p>
<div className="space-y-6">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="w-8 h-8 rounded-full bg-[#111928] border border-white/10 flex items-center justify-center font-medium text-sm">
                    1
                  </div>
<span className="text-lg font-medium">Discovery Call</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#111928] border border-[#F5A623]/50 text-[#F5A623] flex items-center justify-center font-medium text-sm shadow-[0_0_10px_rgba(245,166,35,0.2)]">
                    2
                  </div>
<span className="text-lg font-medium">
                    The Audit &amp; Strategy
                  </span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#111928] border border-white/10 flex items-center justify-center font-medium text-sm">
                    3
                  </div>
<span className="text-lg font-medium">Campaign Launch</span>
</div>
</div>
</div>

<div className="bg-[#111928] border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 rounded-2xl pointer-events-none"></div>
<form className="relative z-10 space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Name
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Work Email
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Company Name
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="Acme Corp" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Website
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="https://" type="url"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                    Phone Number
                  </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="+61 400 000 000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                    Brief Message
                  </label>
<textarea className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors resize-none" placeholder="What is your biggest bottleneck right now?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-[#F5A623] text-[#0B1220] text-lg font-medium rounded-lg shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all mt-4" type="submit">
                  Book Your Strategy Call
                </button>
</form>
</div>
</div>
</section>
</div>



<div className="page-view hidden" id="view-services">

<section className="pt-32 pb-20 px-6 border-b border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
              Where We Can Help
            </h1>
<p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Every business is different. Our role is to understand where
              growth is currently constrained and focus on the areas most likely
              to improve revenue. Below are some of the areas we most often help
              businesses strengthen.
            </p>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-4 md:gap-12">
<a className="text-lg font-medium text-[#F5A623] hover:text-white transition-colors flex items-center gap-2 justify-center" href="#paid-ads">
<i className="w-5 h-5" data-lucide="target"></i>
              Paid Advertising
            </a>
<a className="text-lg font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 justify-center" href="#conversion">
<i className="w-5 h-5" data-lucide="layout-template"></i>
              Conversion Optimisation
            </a>
<a className="text-lg font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 justify-center" href="#nurture">
<i className="w-5 h-5" data-lucide="workflow"></i>
              Follow-Up &amp; Nurture
            </a>
</div>

<p className="text-sm text-gray-500 text-center mt-6 max-w-3xl mx-auto">
            Not every business needs everything. We start by understanding
            what’s working, what’s missing, and where the biggest opportunity
            is.
          </p>
</section>

<section className="py-24 px-6 bg-[#0e1628]" id="paid-ads">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-7">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#F5A623]/10 text-[#F5A623] mb-6">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Paid Advertising
              </h2>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                For many businesses the biggest growth opportunity is simply
                reaching more of the right buyers. We help businesses improve
                acquisition through channels like Google, Meta, LinkedIn and
                other paid platforms, focusing on campaigns that generate
                qualified leads and measurable revenue rather than just clicks.
              </p>
<button className="px-8 py-3.5 bg-[#F5A623] text-[#0B1220] text-lg font-medium rounded-lg shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all inline-flex items-center gap-2" onclick="navigate('contact')">
                Get Started
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight mb-6">
                  Why This Matters
                </h3>
<p className="text-lg text-gray-400 leading-relaxed">
                  Paid advertising can be incredibly powerful when it is
                  connected to the broader sales process. Instead of focusing
                  only on traffic or impressions, we focus on attracting the
                  right audience and ensuring campaigns are aligned with real
                  business outcomes such as enquiries, customers and revenue.
                </p>
</div>
</div>
<div className="lg:col-span-5">
<div className="bg-[#111928] border border-white/5 rounded-2xl p-8 sticky top-28">
<h3 className="text-xl font-semibold mb-6 pb-6 border-b border-white/5">
                  What's Included
                </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Campaign strategy &amp; setup
                      </strong>
<p className="text-base text-gray-400">
                        Building and structuring campaigns across the right
                        platforms for your business.
                      </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Creative and messaging testing
                      </strong>
<p className="text-base text-gray-400">
                        Testing different angles, offers and messaging to find
                        what resonates with your audience.
                      </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Audience targeting &amp; optimisation
                      </strong>
<p className="text-base text-gray-400">
                        Refining audiences and campaigns over time to improve
                        lead quality and performance.
                      </p>
</div>
</li>
</ul>
<div className="mt-8 rounded-xl border border-white/5 bg-[#0B1220] p-4">
<p className="text-sm text-gray-400 leading-relaxed">
                    We keep this practical. The goal is clarity, consistency,
                    and measurable improvement—without unnecessary complexity.
                  </p>
</div>
</div>
</div>
</div>
</section>



<section className="py-24 px-6" id="conversion">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-7">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#F5A623]/10 text-[#F5A623] mb-6">
<i className="w-6 h-6" data-lucide="layout-template"></i>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Conversion Optimisation
              </h2>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                More traffic doesn’t always mean more revenue. Often the
                quickest wins come from improving what happens after the
                click—your landing pages, offers, messaging, and lead capture.
                The goal is simple: make it easier for the right people to take
                the next step.
              </p>
<button className="px-8 py-3.5 bg-[#F5A623] text-[#0B1220] text-lg font-medium rounded-lg shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all inline-flex items-center gap-2" onclick="navigate('contact')">
                Get Started
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight mb-6">
                  Why This Matters
                </h3>
<p className="text-lg text-gray-400 leading-relaxed">
                  If your conversion rate is low, you end up paying more for
                  every lead or sale—no matter how good the ads are. Small
                  improvements to clarity, trust, and friction can lift
                  performance across every channel. It’s often the difference
                  between “ads don’t work for us” and “this is scaling.”
                </p>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-[#111928] border border-white/5 rounded-2xl p-8 sticky top-28">
<h3 className="text-xl font-semibold mb-6 pb-6 border-b border-white/5">
                  What’s Included
                </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Landing page &amp; offer review
                      </strong>
<p className="text-base text-gray-400">
                        Identify the biggest conversion blockers—message
                        clarity, trust, friction, and next-step alignment.
                      </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Copy &amp; layout improvements
                      </strong>
<p className="text-base text-gray-400">
                        Practical updates to structure, headlines, CTAs, and
                        content that help visitors take action.
                      </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Testing &amp; iteration
                      </strong>
<p className="text-base text-gray-400">
                        Simple testing and ongoing refinement to improve
                        conversion over time—without overcomplicating it.
                      </p>
</div>
</li>
</ul>
<div className="mt-8 rounded-xl border border-white/5 bg-[#0B1220] p-4">
<p className="text-sm text-gray-400 leading-relaxed">
                    Tip: not every business needs a full redesign. We look for
                    the smallest changes that make the biggest difference first.
                  </p>
</div>
</div>
</div>
</div>
</section>



<section className="py-24 px-6 bg-[#0e1628]" id="nurture">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-7">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#F5A623]/10 text-[#F5A623] mb-6">
<i className="w-6 h-6" data-lucide="workflow"></i>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                Follow-Up &amp; Nurture
              </h2>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Many businesses lose opportunities after the first enquiry or
                first website visit. Follow-up doesn’t need to be complex—it
                just needs to be consistent. We help set up simple systems that
                keep prospects engaged, improve response speed, and turn more
                interest into revenue.
              </p>
<button className="px-8 py-3.5 bg-[#F5A623] text-[#0B1220] text-lg font-medium rounded-lg shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all inline-flex items-center gap-2" onclick="navigate('contact')">
                Get Started
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<div className="mt-16">
<h3 className="text-2xl font-semibold tracking-tight mb-6">
                  Why This Matters
                </h3>
<p className="text-lg text-gray-400 leading-relaxed">
                  For most businesses, the first touch rarely converts. The
                  brands that win are the ones that follow up clearly and
                  consistently. Simple nurture and lead handling can lift
                  conversion rates without increasing ad spend—because you’re
                  getting more from the demand you already generate.
                </p>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-[#111928] border border-white/5 rounded-2xl p-8 sticky top-28">
<h3 className="text-xl font-semibold mb-6 pb-6 border-b border-white/5">
                  What’s Included
                </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Lead handling &amp; response review
                      </strong>
<p className="text-base text-gray-400">
                        Identify where leads drop off—speed to lead, handover,
                        messaging, and follow-up consistency.
                      </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        Email &amp; nurture sequences
                      </strong>
<p className="text-base text-gray-400">
                        Simple, practical sequences that keep prospects warm and
                        increase conversions over time.
                      </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-[#10b981]">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<strong className="block text-white font-medium mb-1">
                        CRM &amp; automation setup
                      </strong>
<p className="text-base text-gray-400">
                        Lightweight workflows to organise leads, reduce manual
                        follow-up, and improve visibility.
                      </p>
</div>
</li>
</ul>
<div className="mt-8 rounded-xl border border-white/5 bg-[#0B1220] p-4">
<p className="text-sm text-gray-400 leading-relaxed">
                    We keep this simple. The goal is consistency and
                    clarity—systems your team will actually use.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0e1628]">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to Wake the Sleeping Giant?
              </h2>
<p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Stop burning budget on isolated tactics. Let's look under the
                hood of your current setup, identify the exact leaks in your
                funnel, and build a customized battle plan for scalable growth.
              </p>
<div className="space-y-6">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="w-8 h-8 rounded-full bg-[#111928] border border-white/10 flex items-center justify-center font-medium text-sm">
                    1
                  </div>
<span className="text-lg font-medium">Discovery Call</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#111928] border border-[#F5A623]/50 text-[#F5A623] flex items-center justify-center font-medium text-sm shadow-[0_0_10px_rgba(245,166,35,0.2)]">
                    2
                  </div>
<span className="text-lg font-medium">
                    The Audit &amp; Proposal
                  </span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-[#111928] border border-white/10 flex items-center justify-center font-medium text-sm">
                    3
                  </div>
<span className="text-lg font-medium">System Launch</span>
</div>
</div>
</div>

<div className="bg-[#111928] border border-white/5 rounded-2xl p-8 shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 rounded-2xl pointer-events-none"></div>
<form className="relative z-10 space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Name
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Work Email
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Company Name
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="Acme Corp" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                      Website
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="https://" type="url"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                    Phone Number
                  </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="+61 400 000 000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-gray-400">
                    Brief Message
                  </label>
<textarea className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors resize-none" placeholder="What is your biggest bottleneck right now?" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-[#F5A623] text-[#0B1220] text-lg font-medium rounded-lg shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all mt-4" type="submit">
                  Book Your Strategy Call
                </button>
</form>
</div>
</div>
</section>
</div>



<div className="page-view hidden" id="view-contact">
<section className="min-h-[80vh] flex items-center justify-center py-24 px-6 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5A623]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl w-full">
<div className="text-center mb-12">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
                Start Your Engine
              </h1>
<p className="text-lg md:text-xl text-gray-400">
                Tell us about your goals. We'll audit your current setup and
                propose a battle plan.
              </p>
</div>
<div className="bg-[#111928] border border-white/5 rounded-2xl p-8 md:p-12 shadow-2xl">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">
                      Full Name
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">
                      Work Email
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">
                      Company
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="Acme Corp" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">
                      Website URL
                    </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="https://" type="url"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
<input className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors" placeholder="+61 400 000 000" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300">
                    Brief Message
                  </label>
<textarea className="w-full bg-[#0B1220] border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-[#F5A623] focus:ring-1 focus:ring-[#F5A623] transition-colors resize-none" placeholder="e.g. Lead quality is poor, CPL is too high, scaling is breaking our ROAS..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-[#F5A623] text-[#0B1220] text-lg font-medium rounded-lg shadow-[0_0_15px_rgba(245,166,35,0.3)] hover:shadow-[0_0_25px_rgba(245,166,35,0.5)] transition-all" type="submit">
                    Book Your Strategy Call
                  </button>
<p className="text-center text-sm text-gray-500 mt-4">
                    100% confidential. No spam, ever.
                  </p>
</div>
</form>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-white/5 bg-[#0B1220] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-white/5 text-gray-400 flex items-center justify-center font-semibold text-xs">
            SG
          </div>
<span className="text-sm text-gray-400">
            © 2026 Sleeping Giant Co. All rights reserved.
          </span>
</div>
<div className="flex items-center gap-6">
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>


    </>
  );
}
