import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      import createGlobe from 'https://cdn.skypack.dev/cobe';

      document.addEventListener("DOMContentLoaded", (event) => {
        // --- GSAP Setup ---
        gsap.registerPlugin(ScrollTrigger);

        // --- COBE GLOBE ---
        let phi = 0;
        let canvas = document.getElementById("cobe-canvas");

        if(canvas) {
          const globe = createGlobe(canvas, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [239/255, 95/255, 60/255], // #EF5F3C Orange
            glowColor: [0.1, 0.1, 0.1],
            markers: [
              { location: [40.7128, -74.0060], size: 0.1 }, // NY
              { location: [51.5074, -0.1278], size: 0.1 }, // London
              { location: [1.3521, 103.8198], size: 0.08 }, // Singapore
              { location: [22.3193, 114.1694], size: 0.08 }, // Hong Kong
              { location: [-23.5505, -46.6333], size: 0.08 }, // Sao Paulo
              { location: [25.2048, 55.2708], size: 0.08 }, // Dubai
              { location: [35.6762, 139.6503], size: 0.08 }, // Tokyo
              { location: [52.5200, 13.4050], size: 0.08 }, // Berlin
              { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
              { location: [19.4326, -99.1332], size: 0.08 } // Mexico City
            ],
            onRender: (state) => {
              state.phi = phi;
              phi += 0.002;
            },
          });

          // Fade in canvas once initialized
          setTimeout(() => {
            canvas.style.opacity = '1';
          }, 500);
        }


        // --- MOBILE MENU ---
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('mobile-menu-close');
        const overlay = document.getElementById('mobile-menu-overlay');

        function toggleMenu() {
          const isClosed = overlay.classList.contains('translate-x-full');
          if (isClosed) {
            overlay.classList.remove('translate-x-full');
            document.body.classList.add('overflow-hidden');
          } else {
            overlay.classList.add('translate-x-full');
            document.body.classList.remove('overflow-hidden');
          }
        }

        if (menuBtn && closeBtn && overlay) {
          menuBtn.addEventListener('click', toggleMenu);
          closeBtn.addEventListener('click', toggleMenu);
        }

        // --- VIDEO ---
        const vid = document.getElementById('feature-video');
        if (vid) {
          const playSafely = () => {
            const playPromise = vid.play();
            if (playPromise && typeof playPromise.catch === 'function') {
              playPromise.catch(() => {});
            }
          };
          vid.loop = true;
          vid.playbackRate = 1;
          vid.addEventListener('canplay', playSafely, { once: true });
          if (vid.readyState >= 2) playSafely();
        }

        // --- NAVBAR ---
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 20) {
            navbar.classList.add('bg-white/90', 'backdrop-blur-md');
            navbar.classList.remove('bg-transparent');
          } else {
            navbar.classList.remove('bg-white/90', 'backdrop-blur-md');
            navbar.classList.add('bg-transparent');
          }
        });

        // --- ANIMATIONS ---
        const splitTextToSpans = (element) => {
          const text = element.innerText;
          const words = text.split(' ');
          const newContent = words.map(word => {
            return `<span class="inline-block overflow-hidden align-top leading-tight"><span class="inline-block translate-y-full reveal-word-inner">${word}&nbsp;</span></span>`;
          }).join('');
          element.innerHTML = newContent;
        };

        document.querySelectorAll('.reveal-text').forEach(el => {
          splitTextToSpans(el);
          gsap.to(el.querySelectorAll('.reveal-word-inner'), {
            y: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          });
        });

        gsap.utils.toArray('.reveal-visual').forEach(visual => {
          gsap.from(visual, {
            scrollTrigger: {
              trigger: visual,
              start: "top 80%"
            },
            scale: 0.95,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out"
          });
        });

        gsap.utils.toArray('.reveal-section').forEach(section => {
          gsap.from(section.children, {
            scrollTrigger: {
              trigger: section,
              start: "top 80%"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[60] bg-white/80 backdrop-blur-sm translate-x-full transition-transform duration-300 ease-in-out flex flex-col" id="mobile-menu-overlay">

<div className="flex justify-end p-6">
<button className="p-2 text-[#0C0B07] hover:text-[#EF5F3C] transition-colors rounded-full hover:bg-black/5" id="mobile-menu-close">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

<div className="flex-grow flex flex-col items-center justify-center gap-8 pb-20">
<nav className="flex flex-col items-center gap-6 text-center">
<a className="text-3xl font-medium text-[#0C0B07] hover:text-[#EF5F3C] transition-colors" href="#">
            Products
          </a>
<a className="text-3xl font-medium text-[#0C0B07] hover:text-[#EF5F3C] transition-colors" href="#">
            Solutions
          </a>
<a className="text-3xl font-medium text-[#0C0B07] hover:text-[#EF5F3C] transition-colors" href="#">
            Developers
          </a>
<a className="text-3xl font-medium text-[#0C0B07] hover:text-[#EF5F3C] transition-colors" href="#">
            Company
          </a>
</nav>
<div className="h-px w-24 bg-[#0C0B07]/10 my-2"></div>
<a className="px-8 py-4 bg-[#0C0B07] text-white rounded-full text-lg font-medium hover:bg-black/80 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 group" href="mailto:contact@nuvera.global">
          Speak with Sales
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent" id="navbar">
<div className="flex z-10 h-[90px] max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative items-center justify-between">
<a aria-label="Nuvera Home" className="flex items-center gap-2" href="#">
<svg className="sm:h-7 w-[204px] h-[24px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(12, 11, 7)', width: '204px', height: '24px'}} viewbox="0 0 357 42" xmlns="http://www.w3.org/2000/svg">
<path d="M30.3403 0H42.4241C42.4241 9.93975 50.5797 18.001 60.6358 18.001V29.945C43.9056 29.945 30.3403 16.5367 30.3403 0Z" fill="#0C0B07"></path>
<path d="M72.7644 6.01266H60.6358V18.001H72.7644V6.01266Z" fill="#0C0B07"></path>
<path d="M42.4241 41.9555H30.3403C30.3403 32.0158 22.1847 23.9545 12.1287 23.9545V12.0105C28.8589 12.0105 42.4241 25.4188 42.4241 41.9555Z" fill="#0C0B07"></path>
<path d="M12.1287 23.9471H0V35.9355H12.1287V23.9471Z" fill="#0C0B07"></path>
<path d="M96.4082 5.11039H109.607L128.776 28.5398V5.11039H137.71V36.8377H124.511L105.342 13.3196V36.8377H96.4082V5.11039Z" fill="#0C0B07"></path>
<path className="" d="M143.89 21.3512V5.11039H152.824V21.0406C152.824 25.6555 154.799 30.2704 163.149 30.2704C171.5 30.2704 173.43 25.6111 173.43 21.0406V5.11039H182.364V21.3512C182.364 31.646 176.932 37.7252 163.149 37.7252C149.367 37.7252 143.89 31.6904 143.89 21.3512Z" fill="#0C0B07"></path>
<path d="M184.13 5.11039H193.647L206.711 31.7051L219.775 5.11039H229.292L215.899 31.9862C214.148 35.5065 210.594 37.7252 206.711 37.7252C202.828 37.7252 199.274 35.5065 197.523 31.9862L184.13 5.11039Z" fill="#0C0B07"></path>
<path d="M231.597 5.11039H263.965V11.8109H240.53V17.8901H263.067V24.0137H240.53V30.1373H263.965V36.8377H231.597V5.11039Z" fill="#0C0B07"></path>
<path d="M270.1 5.11039H295.689C304.398 5.11039 308.618 8.39406 308.618 14.6064C308.618 18.955 306.239 21.795 301.884 23.0374C305.925 23.2593 308.529 25.5668 308.529 29.3829V36.8377H299.595V26.9423H279.034V36.8377H270.1V5.11039ZM293.624 19.8425C297.171 19.8425 299.326 18.955 299.326 15.982C299.326 13.0089 297.171 12.2102 293.624 12.2102H279.034V19.8425H293.624Z" fill="#0C0B07"></path>
<path d="M333.482 4.22291C336.976 4.22291 340.186 6.19016 341.81 9.33331L356.041 36.8377H346.523L343.291 30.2704H323.628L320.395 36.8377H310.878L325.154 9.32591C326.785 6.19016 329.988 4.22291 333.474 4.22291H333.482ZM340.059 23.7031L333.459 10.2947L326.86 23.7031H340.059Z" fill="#0C0B07"></path>
<path d="M348.439 7.16638C348.439 5.36184 349.935 4.23031 352.329 4.23031C354.724 4.23031 356.033 5.36184 356.033 7.16638C356.033 8.97092 354.612 10.132 352.329 10.132C350.474 10.132 348.439 8.98571 348.439 7.16638ZM352.337 9.33331C354.088 9.33331 355.165 8.4976 355.165 7.16638C355.165 5.83517 354.088 5.02164 352.337 5.02164C350.474 5.02164 349.322 5.84996 349.322 7.16638C349.322 8.48281 350.474 9.33331 352.337 9.33331ZM350.653 5.62809H352.936C353.751 5.62809 354.23 6.01266 354.23 6.64129C354.23 7.12201 353.968 7.44002 353.601 7.59533L354.237 8.59374H353.175L352.689 7.75803H351.551V8.59374H350.668V5.62809H350.653ZM352.801 7.05545C353.153 7.05545 353.325 6.92233 353.325 6.68567C353.325 6.449 353.153 6.33807 352.801 6.33807H351.544V7.05545H352.801Z" fill="#0C0B07"></path>
</svg>
</a>

<div className="hidden lg:flex items-center justify-center gap-6">
<a className="px-6 py-2.5 bg-[#0C0B07] text-white rounded-full text-[15px] font-medium hover:bg-black/80 transition-all shadow-lg shadow-black/5" href="mailto:contact@nuvera.global">
            Speak with Sales
          </a>
</div>

<button aria-label="Open Menu" className="lg:hidden p-2 text-[#0C0B07] hover:bg-black/5 rounded-full transition-colors" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col relative overflow-hidden bg-[#F6F6F6] justify-center pt-24 lg:pt-0">

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="figma-grid-bg"></div>
</div>

<div className="hidden lg:block absolute top-0 right-0 pl-12 w-1/2 h-full z-0">
<img alt="Nuvera Global Infrastructure" className="h-full object-contain" src="https://fpsmihlklcdswkyqxphz.supabase.co/storage/v1/object/public/assets/cards-liquid.webp"/>
</div>

<div className="flex-grow flex flex-col w-full max-w-[1440px] z-10 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative justify-center">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center lg:pt-[120px]">

<div className="flex flex-col items-start max-w-2xl reveal-section">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-gradient-border bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:globe-linear"></iconify-icon>
<span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                Global Cross-Border Infrastructure
              </span>
</div>
<h1 className="sm:text-7xl lg:text-[5rem] leading-[0.95] text-6xl font-semibold text-[#0C0B07] tracking-tight mb-8">
              Built for
              <br/>
<span className="text-[#EF5F3C]">Financial Operators</span>
</h1>
<p className="text-xl sm:text-2xl text-[#5E5E5E] font-normal leading-relaxed mb-12 max-w-xl">
              Execute international payments, operate virtual accounts and
              process third-party settlements across the Americas, Europe, Asia,
              and Africa.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-8 py-4 bg-[#0C0B07] text-white rounded-full font-medium text-lg hover:bg-black/80 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 group whitespace-nowrap" href="mailto:contact@nuvera.global">
                Speak with Sales
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="lg:hidden w-full relative h-[400px] rounded-2xl overflow-hidden reveal-visual flex justify-center">
<img alt="Nuvera Dashboard" className="h-full" src="https://fpsmihlklcdswkyqxphz.supabase.co/storage/v1/object/public/assets/cards-liquid.webp"/>
</div>
</div>

<div className="flex flex-wrap gap-4 w-full md:pt-16 gap-x-4 gap-y-4 items-center justify-center lg:justify-start">
<div className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#0C0B07]/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:border-[#0C0B07]/10 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-default">
<iconify-icon className="text-orange-500 text-lg group-hover:scale-110 transition-transform duration-300" icon="solar:transfer-horizontal-linear"></iconify-icon>
<span className="text-[#5E5E5E] text-sm font-medium">
              Cross-Border IN / OUT
            </span>
</div>
<div className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#0C0B07]/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:border-[#0C0B07]/10 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-default">
<iconify-icon className="text-orange-500 text-lg group-hover:scale-110 transition-transform duration-300" icon="solar:card-transfer-linear"></iconify-icon>
<span className="text-[#5E5E5E] text-sm font-medium">
              Third-Party Payments
            </span>
</div>
<div className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#0C0B07]/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:border-[#0C0B07]/10 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-default">
<iconify-icon className="text-orange-500 text-lg group-hover:scale-110 transition-transform duration-300" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-[#5E5E5E] text-sm font-medium">
              USD &amp; EUR Virtual Accounts
            </span>
</div>
<div className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-[#0C0B07]/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:border-[#0C0B07]/10 hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-default">
<iconify-icon className="text-orange-500 text-lg group-hover:scale-110 transition-transform duration-300" icon="solar:server-square-linear"></iconify-icon>
<span className="text-[#5E5E5E] text-sm font-medium">
              Infrastructure for MSBs &amp; PSPs
            </span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-black pt-24 pb-24 relative">
<div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
<video autoplay="" className="w-full h-full object-cover saturate-150" id="feature-video" muted="" playsinline="" preload="auto">
<source src="https://fpsmihlklcdswkyqxphz.supabase.co/storage/v1/object/public/assets/bg-video-yoyo.webm" type="video/webm"/>
<source src="./assets/bg-video-yoyo.mp4?v=2" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[#0C0B07]/60 z-[1]"></div>
</div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div>
<span className="text-stone-300 text-sm tracking-wide uppercase">
              [01] Infrastructure
            </span>
<h2 className="text-4xl md:text-5xl tracking-tight mt-4 reveal-text font-semibold">
              Virtual Accounts Infrastructure
            </h2>
</div>
<p className="text-stone-300 max-w-md font-light text-lg pb-2 text-right md:text-left reveal-text">
            Multi-currency virtual accounts designed for high-volume
            institutional operators.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group tech-card relative border border-white/10 rounded-xl overflow-hidden min-h-[420px] flex flex-col p-8 cursor-default">
<div className="absolute top-0 inset-x-0 h-40 beam-light w-full pointer-events-none -z-10"></div>
<div className="absolute inset-0 tech-grid-overlay opacity-50 pointer-events-none"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-lg text-white">
<iconify-icon icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-[11px] text-green-400 font-mono tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                ACTIVE
              </div>
</div>
<div className="flex-grow relative">
<div className="absolute inset-x-0 top-0 space-y-3 transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-xs text-stone-200 font-mono uppercase">
                    Account Name
                  </span>
<span className="text-sm text-stone-300 font-medium">
                    Nuvera Inst.
                  </span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-xs text-stone-200 font-mono uppercase">
                    Bank Name
                  </span>
<span className="text-sm text-stone-300 font-medium">
                    Chase Bank NA
                  </span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2 group-hover:border-orange-500/50 transition-colors">
<span className="text-xs text-stone-200 font-mono uppercase">
                    Routing (ABA)
                  </span>
<span className="text-sm text-orange-200/90 font-mono tracking-wider">
                    021000021
                  </span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-2">
<span className="text-xs text-stone-200 font-mono uppercase">
                    Account No.
                  </span>
<span className="text-sm text-stone-300 font-mono tracking-wider">
                    ********8842
                  </span>
</div>
</div>
</div>
<div className="relative z-10 pt-8 mt-auto">
<h3 className="text-2xl font-medium text-white mb-2">
                Local Collections
              </h3>
<p className="text-sm text-stone-300 leading-relaxed font-light">
                Named virtual accounts on local rails. Collect USD via ACH/Wire
                and GBP via Faster Payments.
              </p>
</div>
</div>

<div className="group tech-card relative border border-white/10 rounded-xl overflow-hidden min-h-[420px] flex flex-col p-8 cursor-default">
<div className="absolute top-0 inset-x-0 h-40 beam-light w-full pointer-events-none -z-10"></div>
<div className="absolute inset-0 tech-grid-overlay opacity-50 pointer-events-none"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-lg text-white">
<iconify-icon icon="lucide:globe" width="24"></iconify-icon>
</div>
<div className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-[11px] text-purple-400 font-mono tracking-wider">
                GLOBAL
              </div>
</div>
<div className="flex-grow relative">
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all">
<div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                    €
                  </div>
<div className="flex flex-col">
<span className="text-xs text-stone-300">EUR Balance</span>
<span className="text-sm text-white font-mono">
                      SEPA / SWIFT
                    </span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all delay-75">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold">
                    $
                  </div>
<div className="flex flex-col">
<span className="text-xs text-stone-300">USD Balance</span>
<span className="text-sm text-white font-mono">ACH / WIRE</span>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all delay-100">
<div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">
                    £
                  </div>
<div className="flex flex-col">
<span className="text-xs text-stone-300">GBP Balance</span>
<span className="text-sm text-white font-mono">
                      CHAPS / FPS
                    </span>
</div>
</div>
</div>
</div>
<div className="relative z-10 pt-8 mt-auto">
<h3 className="text-2xl font-medium text-white mb-2">
                Multi-Currency
              </h3>
<p className="text-sm text-stone-300 leading-relaxed font-light">
                Hold 30+ currencies in a single IBAN structure. Convert and
                settle instantly with wholesale FX rates.
              </p>
</div>
</div>

<div className="group tech-card relative border border-white/10 rounded-xl overflow-hidden min-h-[420px] flex flex-col p-8 cursor-default">
<div className="absolute top-0 inset-x-0 h-40 beam-light w-full pointer-events-none -z-10"></div>
<div className="absolute inset-0 tech-grid-overlay opacity-50 pointer-events-none"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-lg text-white">
<iconify-icon icon="solar:tuning-square-2-linear" width="24"></iconify-icon>
</div>
<div className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[11px] text-blue-400 font-mono tracking-wider">
                v2.1 API
              </div>
</div>
<div className="flex-grow relative overflow-hidden">
<div className="font-mono text-[10px] leading-relaxed text-stone-200 group-hover:text-stone-300 transition-colors">
<div className="flex">
<span className="text-purple-400">POST</span>
<span className="ml-2">/v1/accounts/create</span>
</div>
<div className="flex mt-2">{</div>
<div className="flex pl-4">
                  "type":
                  <span className="text-green-400 ml-1">"virtual_iban"</span>
                  ,
                </div>
<div className="flex pl-4">
                  "currency":
                  <span className="text-green-400 ml-1">"EUR"</span>
                  ,
                </div>
<div className="flex pl-4">"holder": {</div>
<div className="flex pl-8">
                  "name":
                  <span className="text-orange-300 ml-1">"Acme Corp"</span>
                  ,
                </div>
<div className="flex pl-8">
                  "country":
                  <span className="text-orange-300 ml-1">"NL"</span>
</div>
<div className="flex pl-4">}</div>
<div className="flex">}</div>
<div className="mt-3 p-2 bg-green-900/10 border border-green-500/20 rounded opacity-50 group-hover:opacity-100 transition-opacity">
<span className="text-green-400">200 OK</span>
<span className="text-stone-200 ml-2">124ms</span>
</div>
</div>
</div>
<div className="relative z-10 pt-8 mt-auto">
<h3 className="text-2xl font-medium text-white mb-2">API Driven</h3>
<p className="text-sm text-stone-300 leading-relaxed font-light">
                Fully automated account issuance. Generate IBANs and retrieve
                details via a simple REST API request.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-[#0C0B07] bg-[#F6F6F6] z-20 pt-24 pb-24 relative">
<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="figma-grid-bg"></div>
</div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col gap-6">
<div>
<span className="uppercase block text-sm text-[#EF5F3C] tracking-wide mb-4">
            [02] Target Audience
          </span>
<h2 className="md:text-6xl leading-[1.1] text-5xl tracking-tight max-w-2xl reveal-text font-semibold text-[#0C0B07]">
            Who We Serve
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5 relative group">
<div className="aspect-[3/4] overflow-hidden rounded-lg relative border border-[#0C0B07]/10 shadow-2xl">
<img alt="Global Trade" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://fpsmihlklcdswkyqxphz.supabase.co/storage/v1/object/public/assets/section-person-2.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white/90 font-medium">Powering Global Trade</p>
</div>
</div>
</div>
<div className="md:col-span-7 flex flex-col justify-center md:pl-12">
<div className="space-y-10">
<div className="flex flex-col group cursor-pointer border-[#0C0B07]/10 border-b pb-8 gap-4">
<div className="flex items-center gap-4">
<span className="font-mono text-[#EF5F3C] text-sm">01</span>
<h3 className="text-2xl font-medium text-[#0C0B07]">
                    Importers &amp; Exporters
                  </h3>
</div>
<p className="leading-relaxed font-light text-[#5E5E5E] max-w-lg pl-10">
                  Execute supplier payments with predictable FX, structured
                  documentation and faster settlement cycles.
                </p>
</div>
<div className="flex flex-col group cursor-pointer border-[#0C0B07]/10 border-b pb-8 gap-4">
<div className="flex items-center gap-4">
<span className="font-mono text-[#EF5F3C] text-sm">02</span>
<h3 className="text-2xl font-medium text-[#0C0B07]">
                    Money Services Businesses
                  </h3>
</div>
<p className="text-[#5E5E5E] font-light leading-relaxed pl-10 max-w-lg">
                  Operate cross-border corridors, execute third-party
                  settlements and expand global payout capabilities.
                </p>
</div>
<div className="flex flex-col group cursor-pointer pb-8 gap-4">
<div className="flex items-center gap-4">
<span className="font-mono text-[#EF5F3C] text-sm">03</span>
<h3 className="text-2xl font-medium text-[#0C0B07]">
                    PSPs &amp; Fintechs
                  </h3>
</div>
<p className="text-[#5E5E5E] font-light leading-relaxed pl-10 max-w-lg">
                  Add global payout infrastructure, USD &amp; EUR virtual
                  accounts and structured international flows.
                </p>
</div>
</div>
<div className="flex items-center gap-8 mt-12">
<a className="flex items-center gap-2 text-lg font-medium text-[#0C0B07] hover:text-[#EF5F3C] transition group pl-10" href="#">
                Partner with us
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-24 relative overflow-hidden min-h-[600px] flex items-center">
<div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

<div className="flex flex-col justify-center">
<span className="text-white text-sm uppercase tracking-wide font-medium mb-6">
            [03] Coverage
          </span>
<h2 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] mb-8">
<span className="reveal-text block">Every Corridor.</span>
<span className="reveal-text block text-[#EF5F3C]">Already Live.</span>
</h2>
<p className="text-lg text-stone-400 leading-relaxed max-w-md font-light reveal-text">
            We don't chase markets — we wire them. Our infrastructure spans the
            routes that matter most to global operators, with local rails,
            regional clearing and cross-border settlement already in place. Find
            your next corridor below.
          </p>
<div className="flex flex-wrap justify-start gap-2 mt-8">
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-stone-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-colors">
              North America
            </button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-stone-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-colors">
              EEA Zone
            </button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-stone-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-colors">
              United Kingdom
            </button>
<button className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-stone-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-colors">
              APAC
            </button>
</div>
</div>

<div className="relative flex items-center justify-center w-full aspect-square max-w-[600px] mx-auto reveal-visual">

<canvas height="600" id="cobe-canvas" width="600"></canvas>

<div className="absolute inset-0 bg-black/60 lg:hidden z-10 pointer-events-none"></div>
</div>
</div>
</section>

<section className="relative bg-gradient-to-b from-[#F8F7F4] to-[#FFE8E0] text-[#0C0B07] pt-24 pb-12 overflow-hidden border-t border-stone-200">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 max-w-[1400px] mx-auto px-6 relative">
<div className="lg:col-span-6 flex flex-col h-full justify-between">
<div>
<span className="text-[#5E5E5E] text-sm uppercase tracking-wide mb-8 block font-medium">
              [04] Get Started
            </span>
<h2 className="text-5xl lg:text-6xl leading-[1.05] tracking-tight font-medium mb-8 reveal-text text-[#0C0B07]">
              Operate Globally.
              <br/>
              Move Capital Without Friction.
            </h2>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-[#0C0B07] text-white rounded-full font-medium text-lg hover:bg-black/80 transition-all shadow-xl shadow-black/5 group w-fit" href="mailto:contact@nuvera.global">
              Speak with Sales
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-6 flex flex-col justify-end lg:pl-12">
<div className="grid grid-cols-2 gap-8 text-sm mt-auto border-t border-stone-300 pt-8">
<div>
<h4 className="font-semibold text-[#0C0B07] mb-4">Company</h4>
<ul className="space-y-3 text-stone-600">
<li>
<a className="hover:text-[#EF5F3C] transition-colors" href="#">
                    About
                  </a>
</li>
<li>
<a className="hover:text-[#EF5F3C] transition-colors" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-stone-300/50 flex flex-col sm:flex-row justify-between items-center text-stone-200 text-sm">
<p className="text-stone-500">
          Nuvera © 2025 — Global Cross-Border Infrastructure
        </p>
<div className="flex gap-4 mt-4 sm:mt-0">
<a className="hover:text-black transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
<a className="hover:text-black transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon>
</a>
</div>
</div>
</section>



    </>
  );
}
