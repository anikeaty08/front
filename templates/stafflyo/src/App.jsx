import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      function downloadPDF() {
          window.print();
      }

      document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('aside nav ul li a');

        function onScroll() {
          let currentSectionId = null;

          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 200 && rect.bottom > 200) {
              currentSectionId = section.getAttribute('id');
            }
          });

          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            currentSectionId = sections[sections.length - 1].getAttribute('id');
          }

          if (!currentSectionId && sections.length) {
            currentSectionId = sections[0].getAttribute('id');
          }

          navLinks.forEach(link => {
            link.classList.remove('font-medium', 'text-[#1D4ED8]', 'bg-[#EFF6FF]');
            if (currentSectionId && link.getAttribute('href') === '#' + currentSectionId) {
              link.classList.add('font-medium', 'text-[#1D4ED8]', 'bg-[#EFF6FF]');
            }
          });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="flex flex-col md:flex-row min-h-screen">

<aside className="w-full md:w-64 md:fixed h-auto md:h-screen border-b md:border-b-0 md:border-r border-[#E2E8F0] bg-white z-10 flex flex-col">
<div className="p-6 md:p-8 border-b border-[#E2E8F0] flex items-center gap-3">
<img alt="Stafflyo Logo" className="w-8 h-8 object-contain" src="https://www.weboptim.eu/img/stafflyo-logo-blue.png"/>
<span className="text-xl font-light text-[#0F172A] tracking-tight">
<span className="font-semibold">Staff</span>lyo
      </span>
</div>
<nav className="p-4 md:p-6 flex-1 overflow-y-auto hidden md:block">
<ul className="space-y-1 text-base font-normal text-[#475569]">
<li className="">
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors font-medium text-[#1D4ED8] bg-[#EFF6FF]" href="#overview">
            1. Brand Overview
          </a>
</li>
<li className="">
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#personality">
            2. Personality
          </a>
</li>
<li className="">
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#values">
            3. Values
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#logo">
            4. Logo System
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#colors">
            5. Color Palette
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#typography">
            6. Typography
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#grid">
            7. Grid &amp; Spacing
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#iconography">
            8. Iconography
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#imagery">
            9. Imagery
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#voice">
            10. Tone of Voice
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#ui">
            11. UI Principles
          </a>
</li>
<li>
<a className="block px-3 py-2 rounded-lg hover:bg-[#F1F5F9] hover:text-[#1D4ED8] transition-colors" href="#applications">
            12. Applications
          </a>
</li>
</ul>
</nav>
</aside>

<main className="flex-1 md:ml-64 p-6 md:p-16 lg:p-24 max-w-5xl">
<div className="w-full" id="export-content">
<header className="flex flex-col md:flex-row md:items-start gap-8 md:gap-4 mb-20 gap-x-8 gap-y-8 justify-between">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-[#334155] text-xs font-medium tracking-widest uppercase mb-6 shadow-sm">
<i className="text-[#1D4ED8] w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
            Brand Manual v1.2
          </div>
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0F172A] mb-6">
            Stafflyo Design System
          </h1>
<p className="text-xl md:text-2xl text-[#475569] leading-relaxed font-normal">
            A comprehensive guide to the visual and verbal identity of
            Stafflyo. Built to ensure consistency, professionalism, and
            clarity across all touchpoints.
          </p>
</div>

<button className="inline-flex gap-2 hover:bg-[#1E40AF] transition-all shrink-0 md:mt-0 text-lg font-medium text-white bg-[#1D4ED8] rounded-xl mt-2 pt-3 pr-6 pb-3 pl-6 shadow-sm gap-x-2 gap-y-2 items-center justify-center" data-html2canvas-ignore="true" id="download-btn" onclick="downloadPDF()">
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
              Download PDF
            </button>
</header>

<section className="mb-24 scroll-mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm break-inside-avoid" id="overview">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A] mb-8 flex items-center gap-4">
<span className="w-8 h-1 bg-[#1D4ED8] rounded-full inline-block"></span>
          1. Brand Overview
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-xl">
<h3 className="text-xs font-medium text-[#64748B] uppercase tracking-widest mb-3">
              Product
            </h3>
<p className="text-lg text-[#334155] font-normal">
              Professional staff scheduling and workforce management
              software.
            </p>
</div>
<div className="bg-[#F8FAFC] border border-[#E2E8F0] p-6 rounded-xl">
<h3 className="text-xs font-medium text-[#64748B] uppercase tracking-widest mb-3">
              Target Audience
            </h3>
<p className="text-lg text-[#334155] font-normal">
              Managers and owners of operational businesses (restaurants,
              retail, gyms, small chains).
            </p>
</div>
<div className="md:col-span-2 p-8 bg-[#1D4ED8] rounded-xl shadow-sm">
<h3 className="text-xs font-medium text-white/70 uppercase tracking-widest mb-3">
              Mission
            </h3>
<p className="text-2xl md:text-3xl font-medium tracking-tight text-white leading-snug">
              Simplify work for managers by providing precise control over
              employee shifts, attendance and labor costs.
            </p>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12" id="personality">
<div className="pb-6 border-b border-[#E2E8F0] mb-8 break-inside-avoid">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A]">
            2. Brand Personality
          </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
<div className="p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-xl flex flex-col gap-4 break-inside-avoid">
<div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center justify-center">
<i className="text-[#1D4ED8] w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-[#0F172A]">
                  Professional
                </span>
</div>
<div className="p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-xl flex flex-col gap-4 break-inside-avoid">
<div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center justify-center">
<i className="text-[#1D4ED8] w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-[#0F172A]">Reliable</span>
</div>
<div className="p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-xl flex flex-col gap-4 break-inside-avoid">
<div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center justify-center">
<i className="text-[#1D4ED8] w-6 h-6" data-lucide="target" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-[#0F172A]">Precise</span>
</div>
<div className="p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-xl flex flex-col gap-4 break-inside-avoid">
<div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center justify-center">
<i className="text-[#1D4ED8] w-6 h-6" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-[#0F172A]">
                  Technological
                </span>
</div>
<div className="p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-xl flex flex-col gap-4 break-inside-avoid">
<div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center justify-center">
<i className="text-[#1D4ED8] w-6 h-6" data-lucide="award" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-[#0F172A]">
                  Authoritative
                </span>
</div>
<div className="p-6 bg-white border border-[#E2E8F0] shadow-sm rounded-xl flex flex-col gap-4 break-inside-avoid">
<div className="w-12 h-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg flex items-center justify-center">
<i className="text-[#1D4ED8] w-6 h-6" data-lucide="minimize" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-[#0F172A]">Minimal</span>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm break-inside-avoid" id="values">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A] mb-8 flex items-center gap-4">
<span className="w-8 h-1 bg-[#1D4ED8] rounded-full inline-block"></span>
          3. Brand Values
        </h2>
<div className="space-y-8">
<div className="flex flex-col md:flex-row gap-6 items-start bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0]">
<div className="w-12 h-12 rounded-lg bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center shrink-0">
<span className="text-lg font-medium text-[#1D4ED8]">01</span>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-2">
                Clarity Over Clutter
              </h3>
<p className="text-lg text-[#475569] font-normal leading-relaxed">
                We believe in providing managers with exactly what they need
                to see, without distractions. Our interfaces are purposeful,
                highly structured, and impeccably clean.
              </p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 items-start bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0]">
<div className="w-12 h-12 rounded-lg bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center shrink-0">
<span className="text-lg font-medium text-[#1D4ED8]">02</span>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-2">
                Empowering Control
              </h3>
<p className="text-lg text-[#475569] font-normal leading-relaxed">
                Our tools are built to give operational leaders absolute
                command over their workforce logistics and costs, fostering
                unmatched confidence in decision-making.
              </p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 items-start bg-[#F8FAFC] p-6 rounded-xl border border-[#E2E8F0]">
<div className="w-12 h-12 rounded-lg bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center shrink-0">
<span className="text-lg font-medium text-[#1D4ED8]">03</span>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-2">
                Unwavering Reliability
              </h3>
<p className="text-lg text-[#475569] font-normal leading-relaxed">
                Businesses depend on us to function seamlessly. We
                prioritize technical stability, robust data accuracy, and
                absolute dependability above all else.
              </p>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12" id="logo">
<div className="pb-6 border-b border-[#E2E8F0] mb-8 break-inside-avoid">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A]">
            4. Logo Concept &amp; Usage
          </h2>
</div>
<p className="text-lg text-[#475569] font-normal mb-8 max-w-3xl leading-relaxed">
          The Stafflyo logo ingeniously combines the concept of human
          resources with time management. The symbol features three stylized
          figures coming together to form a cohesive unit, with the negative
          space in the center cleverly revealing the hands of a clock. This
          directly represents our core mission: optimizing workforce
          scheduling. The wordmark uses a clean, modern sans-serif typeface,
          accompanied by a precise tracking tagline that explicitly states
          our focus.
        </p>
<div className="mb-8">
<h3 className="text-lg font-medium text-[#0F172A] mb-4">
            Logo Variants
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px] break-inside-avoid relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:16px_16px] opacity-30">
</div>
<h4 className="absolute top-6 left-6 text-xs font-medium text-[#64748B] uppercase tracking-widest z-10">
                Primary (Light)
              </h4>
<img alt="Primary Logo" className="z-10 w-40 h-auto object-contain relative" src="https://www.weboptim.eu/img/stafflyo-logo-text-blue.png"/>
</div>

<div className="bg-[#0F172A] border border-[#1E293B] shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px] break-inside-avoid relative overflow-hidden">
<div className="[background-size:16px_16px] opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<h4 className="absolute top-6 left-6 text-xs font-medium text-[#94A3B8] uppercase tracking-widest z-10">
                Primary (Dark)
              </h4>
<img alt="Primary Logo Dark" className="w-40 h-auto object-contain brightness-0 invert relative z-10" src="https://www.weboptim.eu/img/stafflyo-logo-text-blue.png"/>
</div>

<div className="bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px] break-inside-avoid relative">
<h4 className="absolute top-6 left-6 text-xs font-medium text-[#64748B] uppercase tracking-widest">
                Monochrome
              </h4>
<img alt="Monochrome Logo" className="w-40 h-auto object-contain brightness-0" src="https://www.weboptim.eu/img/stafflyo-logo-text-blue.png"/>
</div>

<div className="bg-[#1D4ED8] border border-[#1E40AF] shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px] break-inside-avoid relative overflow-hidden">
<h4 className="absolute top-6 left-6 text-xs font-medium text-white/70 uppercase tracking-widest z-10">
                White
              </h4>
<img alt="White Logo" className="z-10 w-40 h-auto object-contain relative invert brightness-0" src="https://www.weboptim.eu/img/stafflyo-logo-text-blue.png"/>
</div>

<div className="flex flex-col min-h-[240px] break-inside-avoid bg-white border-[#E2E8F0] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm items-center justify-center">
<h4 className="absolute top-6 left-6 text-xs font-medium text-[#64748B] uppercase tracking-widest">
                Icon Only (Light)
              </h4>
<div className="w-24 h-24 rounded-3xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center shadow-lg relative z-10">
<img alt="Stafflyo Icon Dark" className="w-14 h-14 object-contain brightness-0 invert" src="https://www.weboptim.eu/img/stafflyo-logo-blue.png"/>
</div>
</div>
<div className="bg-[#0F172A] border border-[#1E293B] shadow-sm rounded-2xl p-8 flex flex-col items-center justify-center min-h-[240px] break-inside-avoid relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30">
</div>
<h4 className="absolute top-6 left-6 text-xs font-medium text-[#94A3B8] uppercase tracking-widest z-10">
                Icon Only (Dark)
              </h4>
<div className="w-24 h-24 rounded-3xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-lg relative z-10">
<img alt="Stafflyo Icon" className="w-14 h-14 object-contain" src="https://www.weboptim.eu/img/stafflyo-logo-blue.png"/>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="break-inside-avoid">
<h3 className="text-xs font-medium text-[#64748B] uppercase tracking-widest mb-4">
              Clear Space
            </h3>
<div className="border border-[#E2E8F0] bg-white rounded-xl p-8 flex flex-col items-center justify-center relative shadow-sm mb-6 min-h-[240px]">
<div className="relative p-8 border border-dashed border-[#1D4ED8]/40 bg-[#EFF6FF] rounded-lg inline-flex">

<img alt="Stafflyo Logo Space" className="w-32 h-auto object-contain relative z-10" src="https://www.weboptim.eu/img/stafflyo-logo-text-blue.png"/>

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-px bg-[#1D4ED8]/40">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-px bg-[#1D4ED8]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-px bg-[#1D4ED8]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-[#1D4ED8] font-mono font-medium bg-[#EFF6FF] px-1">
                    X
                  </div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-8 w-px bg-[#1D4ED8]/40">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-px bg-[#1D4ED8]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-px bg-[#1D4ED8]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-[#1D4ED8] font-mono font-medium bg-[#EFF6FF] px-1">
                    X
                  </div>
</div>

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-px bg-[#1D4ED8]/40">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-px bg-[#1D4ED8]"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-px bg-[#1D4ED8]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-[#1D4ED8] font-mono font-medium bg-[#EFF6FF] px-1">
                    X
                  </div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-px bg-[#1D4ED8]/40">
<div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-px bg-[#1D4ED8]"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-px bg-[#1D4ED8]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-[#1D4ED8] font-mono font-medium bg-[#EFF6FF] px-1">
                    X
                  </div>
</div>
</div>
</div>
<div className="bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-xl">
<h4 className="text-sm font-semibold text-[#0F172A] mb-2 flex items-center gap-2">
<span className="w-6 h-6 bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE] rounded flex items-center justify-center font-mono text-xs">
                      X
                    </span>
                = Height of the symbol
              </h4>
<p className="text-sm text-[#475569] leading-relaxed">
                To ensure visual impact and legibility, always maintain a
                minimum clear space around the logo. This isolates it from
                competing graphic elements such as typography, imagery, or
                page edges. The clear space
                <strong className="font-medium text-[#0F172A]">X</strong>
                is defined by the height of the symbol itself.
              </p>
</div>
</div>

<div className="flex flex-col gap-4 break-inside-avoid">
<div className="flex items-center gap-4 bg-white border border-[#E2E8F0] shadow-sm p-5 rounded-xl border-l-4 border-l-[#16A34A]">
<i className="text-[#16A34A] w-6 h-6 shrink-0" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-[#0F172A]">
                    Keep the proportions between the symbol and wordmark intact.
                  </span>
</div>
<div className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-xl border-l-4 border-l-[#DC2626]">
<i className="text-[#DC2626] w-6 h-6 shrink-0" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-[#475569]">
                    Do not alter the positioning of the clock hands.
                  </span>
</div>
<div className="flex items-center gap-4 bg-[#F8FAFC] border border-[#E2E8F0] p-5 rounded-xl border-l-4 border-l-[#DC2626]">
<i className="text-[#DC2626] w-6 h-6 shrink-0" data-lucide="x-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-[#475569]">
                    Do not stretch or distort the text or symbol.
                  </span>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm break-inside-avoid" id="colors">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A] mb-8 flex items-center gap-4">
<span className="w-8 h-1 bg-[#1D4ED8] rounded-full inline-block"></span>
          5. Color Palette
        </h2>
<h3 className="text-lg font-medium text-[#0F172A] mb-4">Core Colors</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

<div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white break-inside-avoid">
<div className="h-32 bg-[#1D4ED8] border-b border-[#E2E8F0]"></div>
<div className="p-4">
<div className="text-lg font-medium text-[#0F172A]">
                Deep Blue
              </div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #1D4ED8
              </div>
<div className="text-sm text-[#475569] mt-2 font-normal">
                Primary Brand
              </div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white break-inside-avoid">
<div className="h-32 bg-[#FFFFFF] border-b border-[#E2E8F0]"></div>
<div className="p-4">
<div className="text-lg font-medium text-[#0F172A]">
                Clean White
              </div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #FFFFFF
              </div>
<div className="text-sm text-[#475569] mt-2 font-normal">
                Surface / UI
              </div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white break-inside-avoid">
<div className="h-32 bg-[#0F172A] border-b border-[#E2E8F0]"></div>
<div className="p-4">
<div className="text-lg font-medium text-[#0F172A]">
                Dark Slate
              </div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #0F172A
              </div>
<div className="text-sm text-[#475569] mt-2 font-normal">
                Headings / Text
              </div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white break-inside-avoid">
<div className="h-32 bg-[#F8FAFC] border-b border-[#E2E8F0]"></div>
<div className="p-4">
<div className="text-lg font-medium text-[#0F172A]">
                Light Slate
              </div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #F8FAFC
              </div>
<div className="text-sm text-[#475569] mt-2 font-normal">
                Backgrounds
              </div>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-[#0F172A] mb-4">
          Semantic Status
        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

<div className="rounded-xl p-4 border border-[#E2E8F0] bg-[#F8FAFC] flex items-center gap-4 break-inside-avoid">
<div className="w-10 h-10 rounded-lg bg-[#16A34A] shadow-sm flex-shrink-0"></div>
<div>
<div className="text-lg font-medium text-[#0F172A]">Success</div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #16A34A
              </div>
</div>
</div>

<div className="rounded-xl p-4 border border-[#E2E8F0] bg-[#F8FAFC] flex items-center gap-4 break-inside-avoid">
<div className="w-10 h-10 rounded-lg bg-[#D97706] shadow-sm flex-shrink-0"></div>
<div>
<div className="text-lg font-medium text-[#0F172A]">Warning</div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #D97706
              </div>
</div>
</div>

<div className="rounded-xl p-4 border border-[#E2E8F0] bg-[#F8FAFC] flex items-center gap-4 break-inside-avoid">
<div className="w-10 h-10 rounded-lg bg-[#DC2626] shadow-sm flex-shrink-0"></div>
<div>
<div className="text-lg font-medium text-[#0F172A]">Error</div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #DC2626
              </div>
</div>
</div>
</div>
<h3 className="text-lg font-medium text-[#0F172A] mb-4">
          Brand Gradients
        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white break-inside-avoid">
<div className="h-32 bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6] border-b border-[#E2E8F0]"></div>
<div className="p-4">
<div className="text-lg font-medium text-[#0F172A]">
                Primary Blue Gradient
              </div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #1D4ED8 → #3B82F6
              </div>
<div className="text-sm text-[#475569] mt-2 font-normal">
                Active states / Highlights
              </div>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm bg-white break-inside-avoid">
<div className="h-32 bg-gradient-to-br from-[#0F172A] to-[#1E293B] border-b border-[#E2E8F0]"></div>
<div className="p-4">
<div className="text-lg font-medium text-[#0F172A]">
                Dark Slate Gradient
              </div>
<div className="text-xs text-[#64748B] mt-1 font-mono uppercase font-medium">
                #0F172A → #1E293B
              </div>
<div className="text-sm text-[#475569] mt-2 font-normal">
                Dark backgrounds / Contrast elements
              </div>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12" id="typography">
<div className="pb-6 border-b border-[#E2E8F0] mb-8 break-inside-avoid">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A]">
            6. Typography System
          </h2>
</div>
<p className="text-lg text-[#475569] font-normal mb-8 max-w-2xl">
          We use
          <strong className="font-medium text-[#0F172A]">Inter</strong>
          for all brand and product interfaces. It is a modern geometric
          sans-serif that ensures high legibility. Font weights are kept
          intentional for a highly structured hierarchy.
        </p>
<div className="bg-white border border-[#E2E8F0] shadow-sm rounded-2xl p-8 md:p-12 mb-10 flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden break-inside-avoid">
<div className="text-9xl leading-none font-medium tracking-tight text-[#1D4ED8] opacity-10 select-none">
            Aa
          </div>
<div className="flex-1 text-center md:text-left">
<div className="text-5xl font-medium tracking-tight text-[#0F172A] mb-3">
              Inter
            </div>
<div className="text-xl text-[#475569] font-normal">
              Regular, Medium
            </div>
</div>
<div className="text-lg text-[#64748B] font-mono tracking-widest break-all max-w-[200px] text-right hidden md:block font-normal">
            ABCDEFGHIJKLMNOPQRSTUVWXYZ
            <br/>
                abcdefghijklmnopqrstuvwxyz
            <br/>
                0123456789
          </div>
</div>
<div className="border border-[#E2E8F0] shadow-sm rounded-xl overflow-hidden bg-white break-inside-avoid">
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="bg-[#F8FAFC] text-xs text-[#475569] uppercase tracking-widest border-b border-[#E2E8F0]">
<th className="p-5 font-medium">Level</th>
<th className="p-5 font-medium border-l border-[#E2E8F0]">
                  Example
                </th>
<th className="p-5 font-medium border-l border-[#E2E8F0] hidden md:table-cell">
                  Properties
                </th>
</tr>
</thead>
<tbody className="divide-y divide-[#E2E8F0]">
<tr>
<td className="p-5 text-lg font-medium text-[#64748B]">H1</td>
<td className="p-5 border-l border-[#E2E8F0]">
<span className="text-5xl font-medium tracking-tight text-[#0F172A] leading-none">
                        Schedule Overview
                      </span>
</td>
<td className="p-5 border-l border-[#E2E8F0] text-xs text-[#64748B] font-mono font-medium hidden md:table-cell">
                  text-5xl, font-medium, tracking-tight
                </td>
</tr>
<tr>
<td className="p-5 text-lg font-medium text-[#64748B]">H2</td>
<td className="p-5 border-l border-[#E2E8F0]">
<span className="text-3xl font-medium tracking-tight text-[#0F172A] leading-none">
                        Employee Roster
                      </span>
</td>
<td className="p-5 border-l border-[#E2E8F0] text-xs text-[#64748B] font-mono font-medium hidden md:table-cell">
                  text-3xl, font-medium, tracking-tight
                </td>
</tr>
<tr className="">
<td className="p-5 text-lg font-medium text-[#64748B]">H3</td>
<td className="p-5 border-l border-[#E2E8F0]">
<span className="text-xl font-medium tracking-tight text-[#0F172A] leading-none">
                        Morning Shift
                      </span>
</td>
<td className="p-5 border-l border-[#E2E8F0] text-xs text-[#64748B] font-mono font-medium hidden md:table-cell">
                  text-xl, font-medium, tracking-tight
                </td>
</tr>
<tr>
<td className="p-5 text-lg font-medium text-[#64748B]">Body</td>
<td className="p-5 border-l border-[#E2E8F0]">
<span className="text-lg font-normal text-[#334155]">
                        Manage your team's weekly hours and ensure compliance.
                      </span>
</td>
<td className="p-5 border-l border-[#E2E8F0] text-xs text-[#64748B] font-mono font-medium hidden md:table-cell">
                  text-lg, font-normal
                </td>
</tr>
<tr>
<td className="p-5 text-lg font-medium text-[#64748B]">
                  Small
                </td>
<td className="p-5 border-l border-[#E2E8F0]">
<span className="text-base font-normal text-[#475569]">
                        Last updated 2 mins ago
                      </span>
</td>
<td className="p-5 border-l border-[#E2E8F0] text-xs text-[#64748B] font-mono font-medium hidden md:table-cell">
                  text-base, font-normal
                </td>
</tr>
<tr>
<td className="p-5 text-lg font-medium text-[#64748B]">
                  Caption
                </td>
<td className="p-5 border-l border-[#E2E8F0]">
<span className="text-xs font-medium text-[#64748B] uppercase tracking-widest">
                        Settings
                      </span>
</td>
<td className="p-5 border-l border-[#E2E8F0] text-xs text-[#64748B] font-mono font-medium hidden md:table-cell">
                  text-xs, font-medium
                </td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-24 scroll-mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm break-inside-avoid" id="grid">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A] mb-8 flex items-center gap-4">
<span className="w-8 h-1 bg-[#1D4ED8] rounded-full inline-block"></span>
          7. Grid &amp; Spacing System
        </h2>
<p className="text-lg text-[#475569] font-normal mb-8 max-w-2xl">
          Layouts rely on a strict clear grid system. Spacing should be
          structured to maintain a highly organized, robust interface.
        </p>
<div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-8 relative">
<div className="grid grid-cols-12 gap-4 h-32">

<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden sm:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden sm:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden md:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden md:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden md:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden md:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden md:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden md:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden lg:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden lg:block"></div>
<div className="bg-[#1D4ED8]/5 border border-[#1D4ED8]/20 rounded-md h-full hidden lg:block"></div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12 break-inside-avoid" id="iconography">
<div className="pb-6 border-b border-[#E2E8F0] mb-8">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A]">
            8. Iconography Style
          </h2>
</div>
<p className="text-lg text-[#475569] font-normal mb-8 max-w-2xl">
          Icons should be minimal and geometric. Housed inside sturdy
          containers, they communicate function with clarity. Keep colors
          neutral unless indicating a specific status or primary action. We
          utilize Lucide icons with a 1.5 stroke width.
        </p>
<div className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6">
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#1D4ED8] transition-colors" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#1D4ED8] transition-colors" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#1D4ED8] transition-colors" data-lucide="wallet" strokeWidth="1.5"></i>
</div>
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#1D4ED8] transition-colors" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#1D4ED8] transition-colors" data-lucide="settings" strokeWidth="1.5"></i>
</div>
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#1D4ED8] transition-colors" data-lucide="bell" strokeWidth="1.5"></i>
</div>
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#1D4ED8] transition-colors" data-lucide="file-plus" strokeWidth="1.5"></i>
</div>
<div className="aspect-square flex flex-col items-center justify-center border border-[#E2E8F0] bg-white rounded-xl hover:border-[#CBD5E1] shadow-sm transition-colors group">
<i className="text-[#0F172A] w-7 h-7 group-hover:text-[#DC2626] transition-colors" data-lucide="log-out" strokeWidth="1.5"></i>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm break-inside-avoid" id="imagery">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A] mb-8 flex items-center gap-4">
<span className="w-8 h-1 bg-[#1D4ED8] rounded-full inline-block"></span>
          9. Image &amp; Illustration Style
        </h2>
<p className="text-lg text-[#475569] font-normal mb-8 max-w-2xl">
          Avoid cartoon illustrations or overly stylized startup graphics.
          Use clean UI abstractions, geometric patterns, or high-quality,
          authentic photography of operational environments treated with
          cool, professional tones.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="h-56 rounded-xl bg-gradient-to-br from-[#F8FAFC] to-white border border-[#E2E8F0] flex items-center justify-center overflow-hidden relative shadow-sm">

<div className="absolute inset-0 flex items-center justify-center opacity-80">
<div className="w-3/4 h-28 bg-white shadow-sm border border-[#E2E8F0] rounded-lg flex flex-col justify-between p-4 transform -rotate-1">
<div className="w-1/3 h-2 bg-[#F1F5F9] rounded"></div>
<div className="flex gap-2">
<div className="w-full h-8 bg-[#F8FAFC] border border-[#E2E8F0] rounded"></div>
<div className="w-1/2 h-8 bg-[#1D4ED8] rounded"></div>
</div>
</div>
</div>
<span className="text-xs font-medium text-[#0F172A] uppercase tracking-widest relative z-10 bg-white/90 border border-[#E2E8F0] px-3 py-1.5 rounded-md shadow-sm backdrop-blur-md">
                  UI Abstraction
                </span>
</div>
<div className="h-56 rounded-xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center relative overflow-hidden shadow-sm">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent">
</div>
<span className="text-xs font-medium text-white/70 uppercase tracking-widest relative z-10">
                  Photography Placeholder
                </span>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12 break-inside-avoid" id="voice">
<div className="pb-6 border-b border-[#E2E8F0] mb-8">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A]">
            10. Tone of Voice
          </h2>
</div>
<p className="text-lg text-[#475569] font-normal mb-8 max-w-2xl">
          Our voice is Clear, Direct, Professional, Helpful, and Structured.
          We do not use marketing buzzwords or an overly playful tone. We
          speak to managers as confident peers.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-white border border-[#E2E8F0] border-t-2 border-t-[#16A34A] rounded-xl p-8 shadow-sm">
<h3 className="text-sm font-medium text-[#16A34A] uppercase tracking-widest mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i>
              Do This
            </h3>
<ul className="space-y-4 text-lg font-normal text-[#334155]">
<li className="pb-4 border-b border-[#F1F5F9]">
                "Your schedule for Oct 12-18 is published."
              </li>
<li className="pb-4 border-b border-[#F1F5F9]">
                "Please review the pending time-off requests."
              </li>
<li>"Labor costs exceeded the daily budget by 4%."</li>
</ul>
</div>
<div className="bg-[#F8FAFC] border border-[#E2E8F0] border-t-2 border-t-[#DC2626] rounded-xl p-8 shadow-sm">
<h3 className="text-sm font-medium text-[#DC2626] uppercase tracking-widest mb-6 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="x-circle" strokeWidth="1.5"></i>
              Don't Do This
            </h3>
<ul className="space-y-4 text-lg font-normal text-[#64748B]">
<li className="pb-4 border-b border-[#E2E8F0]">
                "Yay! Your awesome schedule is ready to go! 🎉"
              </li>
<li className="pb-4 border-b border-[#E2E8F0]">
                "Uh oh, looks like someone wants a day off."
              </li>
<li>"Yikes, you spent way too much money today."</li>
</ul>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12 bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-12 shadow-sm break-inside-avoid" id="ui">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A] mb-8 flex items-center gap-4">
<span className="w-8 h-1 bg-[#1D4ED8] rounded-full inline-block"></span>
          11. UI Design Principles
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="col-span-1 lg:col-span-1 space-y-8">
<div className="">
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-2">
                Crisp Boundaries
              </h3>
<p className="text-lg text-[#475569] font-normal leading-relaxed">
                Rely on subtle borders (#E2E8F0) and minimal shadows to
                clearly separate distinct content surfaces. Avoid heavy
                lines.
              </p>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-2">
                High Data Density
              </h3>
<p className="text-lg text-[#475569] font-normal leading-relaxed">
                SaaS users need data. Use intentional text sizing for
                tables, paired with clear, medium-weight headings.
              </p>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-[#0F172A] mb-2">
                Active States
              </h3>
<p className="text-lg text-[#475569] font-normal leading-relaxed">
                Interactive elements highlight with the Deep Blue to confirm
                precise active states instantly without clutter.
              </p>
</div>
</div>
<div className="col-span-1 lg:col-span-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-8 lg:p-12 flex items-center justify-center">

<div className="w-full max-w-sm bg-white border border-[#E2E8F0] rounded-xl shadow-sm overflow-hidden">
<div className="p-4 border-b border-[#E2E8F0] flex justify-between items-center">
<h4 className="text-lg font-medium text-[#0F172A]">
                  Shift Details
                </h4>
<i className="text-[#64748B] cursor-pointer hover:text-[#0F172A] w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>
<div className="p-5">
<div className="flex items-center gap-4 mb-5">
<div className="w-10 h-10 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-sm font-medium text-[#0F172A]">
                    JD
                  </div>
<div className="">
<div className="text-xl font-medium tracking-tight text-[#0F172A] leading-none mb-1">
                      John Doe
                    </div>
<div className="text-base font-normal text-[#64748B]">
                      Senior Barista
                    </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-5">
<div className="bg-[#FAFAFA] rounded-lg p-3 border border-[#E2E8F0]">
<div className="text-xs font-medium text-[#64748B] mb-1">
                      Time
                    </div>
<div className="text-lg font-medium text-[#0F172A]">
                      08:00 - 16:00
                    </div>
</div>
<div className="bg-[#FAFAFA] rounded-lg p-3 border border-[#E2E8F0]">
<div className="text-xs font-medium text-[#64748B] mb-1">
                      Duration
                    </div>
<div className="text-lg font-medium text-[#0F172A]">
                      8h 00m
                    </div>
</div>
</div>

<div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
<span className="text-lg font-medium text-[#334155]">
                        Manager Approval
                      </span>
<div className="w-10 h-6 bg-[#1D4ED8] rounded-full relative cursor-pointer border border-transparent shadow-inner flex items-center">
<div className="w-4 h-4 bg-white rounded-full absolute right-1 shadow-sm transition-all"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-12 break-inside-avoid" id="applications">
<div className="pb-6 border-b border-[#E2E8F0] mb-8">
<h2 className="text-2xl font-medium tracking-tight text-[#0F172A]">
            12. Example Brand Applications
          </h2>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">

<div className="h-12 border-b border-[#E2E8F0] bg-[#F8FAFC] flex items-center px-4 gap-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#E2E8F0]"></div>
<div className="w-3 h-3 rounded-full bg-[#E2E8F0]"></div>
<div className="w-3 h-3 rounded-full bg-[#E2E8F0]"></div>
</div>
<div className="mx-auto w-1/2 h-7 bg-white rounded border border-[#E2E8F0] flex items-center justify-center shadow-sm">
<span className="text-xs text-[#64748B] font-mono font-normal">
                    app.stafflyo.com
                  </span>
</div>
</div>

<div className="flex h-[450px]">

<div className="w-56 border-r border-[#E2E8F0] bg-[#FAFAFA] p-5 hidden sm:flex flex-col gap-2">
<div className="flex items-center gap-2 mb-8 px-2">
<img alt="Stafflyo Logo" className="w-6 h-6 object-contain" src="https://www.weboptim.eu/img/stafflyo-logo-blue.png"/>
<span className="text-xl font-light text-[#0F172A] tracking-tight">
<span className="font-semibold">Staff</span>lyo
                </span>
</div>
<div className="px-3 py-2 rounded-lg bg-[#F1F5F9] text-base font-medium text-[#1D4ED8] flex items-center gap-3">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i>
                Schedule
              </div>
<div className="px-3 py-2 rounded-lg text-base font-normal text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] flex items-center gap-3 transition-colors">
<i className="w-5 h-5" data-lucide="users" strokeWidth="1.5"></i>
                Team
              </div>
<div className="px-3 py-2 rounded-lg text-base font-normal text-[#475569] hover:bg-[#F1F5F9] hover:text-[#0F172A] flex items-center gap-3 transition-colors">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
                Reports
              </div>
</div>

<div className="flex-1 p-8 bg-white overflow-hidden flex flex-col">
<div className="flex justify-between items-center mb-8">
<h3 className="text-2xl font-medium tracking-tight text-[#0F172A]">
                  Weekly Schedule
                </h3>
<button className="bg-[#1D4ED8] text-white text-base font-medium px-4 py-2 rounded-lg hover:bg-[#1E40AF] transition-colors shadow-sm">
                      Publish
                    </button>
</div>

<div className="flex-1 border border-[#E2E8F0] rounded-xl flex flex-col overflow-hidden bg-white">
<div className="flex border-b border-[#E2E8F0] bg-[#FAFAFA]">
<div className="w-32 p-3 border-r border-[#E2E8F0] text-xs font-medium text-[#64748B] uppercase tracking-wide">
                    Employee
                  </div>
<div className="flex-1 p-3 text-xs font-medium text-[#64748B] uppercase tracking-wide text-center border-r border-[#E2E8F0]">
                    Mon 12
                  </div>
<div className="flex-1 p-3 text-xs font-medium text-[#64748B] uppercase tracking-wide text-center border-r border-[#E2E8F0]">
                    Tue 13
                  </div>
<div className="flex-1 p-3 text-xs font-medium text-[#64748B] uppercase tracking-wide text-center">
                    Wed 14
                  </div>
</div>
<div className="flex border-b border-[#E2E8F0]">
<div className="w-32 p-3 border-r border-[#E2E8F0] flex items-center gap-3 bg-white">
<div className="w-7 h-7 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-xs font-medium text-[#0F172A]">
                      AS
                    </div>
<span className="text-base font-normal text-[#0F172A]">
                          A. Smith
                        </span>
</div>
<div className="flex-1 p-2 border-r border-[#E2E8F0]">
<div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-2 h-full">
<div className="text-xs font-medium text-[#1D4ED8]">
                        09:00 - 17:00
                      </div>
</div>
</div>
<div className="flex-1 p-2 border-r border-[#E2E8F0]">
<div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg p-2 h-full">
<div className="text-xs font-medium text-[#1D4ED8]">
                        09:00 - 17:00
                      </div>
</div>
</div>
<div className="flex-1 p-2 bg-[#FAFAFA]"></div>
</div>
<div className="flex">
<div className="w-32 p-3 border-r border-[#E2E8F0] flex items-center gap-3 bg-white">
<div className="w-7 h-7 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-xs font-medium text-[#0F172A]">
                      BJ
                    </div>
<span className="text-base font-normal text-[#0F172A]">
                          B. Jones
                        </span>
</div>
<div className="flex-1 p-2 border-r border-[#E2E8F0] bg-[#FAFAFA]"></div>
<div className="flex-1 p-2 border-r border-[#E2E8F0]">
<div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-lg p-2 h-full">
<div className="text-xs font-medium text-[#D97706]">
                        12:00 - 20:00
                      </div>
</div>
</div>
<div className="flex-1 p-2">
<div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-lg p-2 h-full">
<div className="text-xs font-medium text-[#D97706]">
                        12:00 - 20:00
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>



    </>
  );
}
