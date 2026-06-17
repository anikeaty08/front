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
      
tailwind.config = {
theme: {
extend: {
colors: {
brand: '#0d3443',
accent: '#0ef0c8',
dark: '#0a2530',
deep: '#051016',
neutral: '#404040',
light: '#f5f5f5',
surface: '#ffffff'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
mono: ['Space Mono', 'monospace'],
},
animation: {
'marquee': 'marquee 40s linear infinite',
'marquee-tools': 'marquee 30s linear infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'scan': 'scan 4s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' }
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
scan: {
'0%': { top: '0%' },
'100%': { top: '100%' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Hero Chart
      document.addEventListener('DOMContentLoaded', function() {
        const ctx = document.getElementById('heroChart');
        if (ctx) {
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
              datasets: [{
                label: 'Leads',
                data: [65, 78, 90, 105, 125, 148],
                borderColor: '#0ef0c8',
                backgroundColor: 'rgba(14, 240, 200, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#0ef0c8',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: '#0d3443',
                  titleColor: '#fff',
                  bodyColor: '#0ef0c8',
                  borderColor: 'rgba(255,255,255,0.1)',
                  borderWidth: 1,
                  padding: 12,
                  displayColors: false
                }
              },
              scales: {
                x: {
                  display: true,
                  grid: { display: false },
                  ticks: { color: 'rgba(255,255,255,0.3)', font: { size: 10 } }
                },
                y: {
                  display: true,
                  grid: { color: 'rgba(255,255,255,0.05)' },
                  ticks: { color: 'rgba(255,255,255,0.3)', font: { size: 10 } }
                }
              }
            }
          });
        }

        // Hero Image Slider
        const slides = document.querySelectorAll('.slide-image');
        const labelText = document.getElementById('slider-label-text');
        let currentSlide = 0;

        function nextSlide() {
          slides[currentSlide].classList.remove('active');
          currentSlide = (currentSlide + 1) % slides.length;
          slides[currentSlide].classList.add('active');
          if (labelText && slides[currentSlide].dataset.label) {
            labelText.textContent = slides[currentSlide].dataset.label;
          }
        }

        if (slides.length > 0) {
          setInterval(nextSlide, 4000);
        }

        // GSAP Animations
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);

          // Service cards animation
          gsap.utils.toArray('.service-card').forEach((card, i) => {
            gsap.fromTo(card, 
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.1,
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play none none none'
                }
              }
            );
          });
        }
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
      

<nav className="fixed top-6 left-0 w-full flex justify-center z-50 px-4 pointer-events-none">
<div className="glass-panel flex shadow-black/5 transition-transform hover:scale-[1.01] duration-500 pointer-events-auto rounded-full pt-2 pr-8 pb-2 pl-4 shadow-lg items-center">
<a className="flex items-center group" href="#">
<img alt="AI Property Lab" className="h-14 w-auto object-contain" src="https://aipropertylab.com/wp-content/uploads/2025/06/AI-Property-Lab-Logo-AIPL-Blue.png"/>
</a>
<div className="hidden lg:flex items-center gap-6 ml-8">
<a className="text-sm font-medium text-neutral hover:text-brand transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral hover:text-brand transition-colors" href="#benefits">Benefits</a>
<a className="text-sm font-medium text-neutral hover:text-brand transition-colors" href="#faq">FAQ</a>
<a className="text-sm font-medium text-neutral hover:text-brand transition-colors" href="#contact">Contact</a>
</div>
<button className="uppercase hover:bg-accent hover:text-brand transition-all shadow-brand/20 cursor-pointer text-xs font-semibold text-white tracking-wider bg-[#0d3443] rounded-full ml-8 pt-2 pr-5 pb-2 pl-5 shadow-lg" data-fillout-dynamic-resize="" data-fillout-embed-type="popup" data-fillout-id="dFk5mWWLzzus" data-fillout-inherit-parameters="" data-fillout-initialized="true" data-fillout-popup-size="medium">
          Book a Call
        </button>
</div>
</nav>
<main className="">

<section className="relative min-h-screen w-full bg-deep overflow-hidden flex items-center justify-center pt-28 pb-10 px-4">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

<div className="absolute inset-0 w-full h-full pointer-events-none" id="hero-slider">
<img alt="Estate Agents" className="slide-image active absolute inset-0 w-full h-full object-cover" data-label="Estate Agents" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Property Developers" className="slide-image absolute inset-0 w-full h-full object-cover" data-label="Property Developers" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Trades" className="slide-image absolute inset-0 w-full h-full object-cover" data-label="Trades &amp; Fitters" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Mortgage Brokers" className="slide-image absolute inset-0 w-full h-full object-cover" data-label="Mortgage Brokers" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<img alt="Property Investors" className="slide-image absolute inset-0 w-full h-full object-cover" data-label="Property Investors" src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-gradient-to-b from-deep/60 via-deep/30 to-deep w-full h-full absolute top-0 left-0"></div>
</div>

<div className="absolute top-28 right-8 md:right-16 z-20">
<div className="flex bg-white/10 border-white/20 border rounded-lg pt-2 pr-4 pb-2 pl-4 shadow-2xl backdrop-blur-md gap-x-3 gap-y-3 items-center">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
</span>
<span className="text-xs font-bold text-white tracking-wide uppercase font-mono" id="slider-label-text">
              Estate Agents
            </span>
</div>
</div>

<div className="relative z-10 w-full max-w-[1400px] min-h-[600px] lg:h-[75vh] ceramic-container bg-[#081218] rounded-[2rem] lg:rounded-[3rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row shadow-2xl">

<div className="flex-1 p-8 lg:p-20 flex flex-col justify-center relative">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
<div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up">
<div className="px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] uppercase tracking-[0.2em] font-medium">
                AI-Powered Automation
              </div>
</div>
<h1 className="font-display font-bold text-5xl lg:text-7xl leading-[1.1] tracking-tight text-white mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              Stop Chasing
              <span className="text-white/40">Leads Manually.</span>
</h1>
<p className="text-lg text-white/60 font-light max-w-md leading-relaxed mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Streamline your property business, automate your admin, and
              generate exclusive leads on autopilot. Built for Agents, Trades,
              and Investors.
            </p>
<div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<button className="group text-brand overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(14,240,200,0.4)] flex items-center justify-center text-center rounded-full pt-4 pr-8 pb-4 pl-8 relative bg-white cursor-pointer" data-fillout-dynamic-resize="" data-fillout-embed-type="popup" data-fillout-id="dFk5mWWLzzus" data-fillout-inherit-parameters="" data-fillout-initialized="true" data-fillout-popup-size="medium">
<span className="relative z-10 font-bold text-xs uppercase tracking-widest">
                  Book Discovery Call
                </span>
</button>
<a className="flex gap-3 hover:text-white transition-colors group text-sm font-medium text-white/60 items-center justify-center sm:justify-start" href="#services">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
                How it works
              </a>
</div>
</div>

<div className="flex-1 bg-[#0a161d] relative overflow-hidden flex items-center justify-center p-10 min-h-[500px] perspective-container">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="glass-card-dark relative w-full max-w-[420px] rounded-2xl p-6 rotate-3d z-10">
<div className="scan-line"></div>
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<h3 className="text-white text-sm font-medium">Pipeline</h3>
<p className="text-white/40 text-[10px]">Live AI Analytics</p>
</div>
</div>
<div className="flex flex-col items-end">
<div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono mb-1">
                      +24.5% ▲
                    </div>
<span className="text-[10px] text-white/30 font-mono">Updated 1m ago</span>
</div>
</div>
<div className="w-full h-32 mb-6 relative">
<canvas className="" height="192" id="heroChart" style={{display: 'block', boxSizing: 'border-box', height: '128px', width: '370.7px'}} width="556"></canvas>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-accent/20 transition-colors">
<p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Qualified Leads</p>
<p className="text-white text-xl font-bold font-display">1,248</p>
</div>
<div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-accent/20 transition-colors">
<p className="text-white/40 text-[10px] uppercase tracking-wider mb-1">Conversion Rate</p>
<p className="text-accent text-xl font-bold font-display">18.4%</p>
</div>
</div>
<div className="bg-[#050c11] rounded-xl p-4 border border-white/5">
<p className="text-[10px] text-white/30 uppercase tracking-widest mb-3">Recent AI Actions</p>
<div className="space-y-3">
<div className="flex gap-3 items-center opacity-100">
<div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
<span className="text-xs text-white/80 font-mono">Qualifying Lead #4092...</span>
</div>
<div className="flex gap-3 items-center opacity-60">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<span className="text-xs text-white/60 font-mono">Drafted Tenancy Agreement</span>
</div>
<div className="flex gap-3 items-center opacity-40">
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<span className="text-xs text-white/40 font-mono">Sent Viewing Reminder</span>
</div>
</div>
</div>
</div>
<div className="absolute top-20 right-10 bg-[#0d3443] border border-white/10 p-3 rounded-xl shadow-xl animate-pulse-slow z-20 hidden md:flex items-center gap-3 backdrop-blur-md">
<div className="relative">
<div className="w-2 h-2 rounded-full bg-accent animate-ping absolute inset-0"></div>
<div className="w-2 h-2 rounded-full bg-accent relative"></div>
</div>
<span className="text-white text-xs font-mono">AI Agent Active</span>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral/10 bg-white py-12 overflow-hidden">
<div className="relative w-full flex">
<div className="animate-marquee whitespace-nowrap flex items-center gap-16">
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">ESTATE AGENTS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">PROPERTY MANAGERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">MORTGAGE BROKERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">PROPERTY INVESTORS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">PROPERTY INSURANCE</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">CONVEYANCERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">AIRBNB HOSTS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">COMMERCIAL SPACES</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">KITCHEN &amp; BATH FITTERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">STONE FABRICATORS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">EXTENSION BUILDERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">LOFT CONVERSIONS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">ARCHITECTS</span>

<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">ESTATE AGENTS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">PROPERTY MANAGERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">MORTGAGE BROKERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">PROPERTY INVESTORS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">PROPERTY INSURANCE</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">CONVEYANCERS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">AIRBNB HOSTS</span>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral/50 uppercase">COMMERCIAL SPACES</span>
</div>
</div>
</section>

<section className="bg-light py-8 overflow-hidden border-b border-neutral/10">
<div className="container mx-auto px-6 mb-4">
<p className="text-center text-xs font-semibold tracking-[0.2em] text-neutral/40 uppercase">Powered by Industry-Leading Tools</p>
</div>
<div className="relative w-full flex">
<div className="tools-marquee whitespace-nowrap flex items-center gap-12">
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z"></path></svg>
<span className="text-sm font-medium text-neutral/70">OpenAI</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
<span className="text-sm font-medium text-neutral/70">Make</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z"></path></svg>
<span className="text-sm font-medium text-neutral/70">HubSpot</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path></svg>
<span className="text-sm font-medium text-neutral/70">Vapi</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"></path></svg>
<span className="text-sm font-medium text-neutral/70">n8n</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path></svg>
<span className="text-sm font-medium text-neutral/70">GoHighLevel</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
<span className="text-sm font-medium text-neutral/70">Calendly</span>
</div>

<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z"></path></svg>
<span className="text-sm font-medium text-neutral/70">OpenAI</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
<span className="text-sm font-medium text-neutral/70">Make</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg border border-neutral/10">
<svg className="w-5 h-5 text-neutral/60" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z"></path></svg>
<span className="text-sm font-medium text-neutral/70">HubSpot</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand text-center relative overflow-hidden" id="services">
<div className="absolute inset-0 bg-[linear-gradient(rgba(14,240,200,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(14,240,200,0.07)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent/10 blur-[100px] rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-24 relative z-10">
<div className="flex flex-col items-center max-w-4xl mx-auto mb-16">
<span className="inline-flex items-center gap-2 border border-white/20 rounded-full px-3 py-1 mb-4">
<span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
<span className="text-[10px] uppercase tracking-[0.2em] font-medium text-accent">The AI Property Lab Difference</span>
</span>
<h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight text-balance">
              Automate the Boring, Multiply the Profits.
            </h2>
<p className="text-white/80 text-lg font-light leading-relaxed max-w-3xl">
              We build custom AI automation and lead generation systems that are specifically designed for the property and home improvement sectors.
            </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">High-Converting Websites</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                Your website should be your best salesperson. We build modern, fast sites designed to turn visitors into booked appointments.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Built for Conversion &amp; Speed</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Mobile-First Design</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"></path><path d="m5 8 4 4"></path><path d="m12 15 4 4"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">Automated Lead Gen</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                Stop relying on referrals alone. We implement smart acquisition systems that find your ideal customers and start the conversation.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Targeted Landlord/Vendor Ads</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Instant Auto-Qualification</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">Document Automation</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                Never manually type out a proposal, tenancy agreement, or onboarding form again. Systems that draft and send docs automatically.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Auto-Draft Contracts</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Integrated E-Signatures</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">AI Voice &amp; Call Handling</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                Never miss a call. Our AI answers enquiries, qualifies leads, and books appointments while you're on site or sleeping.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>24/7 Call Answering</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Conversational Qualification</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">Automated Booking</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                Let customers book themselves in without the back-and-forth emails. Viewings, quotes, consultations—scheduled automatically.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Self-Service Customer Booking</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Automated Reminders</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">Custom AI Consultancy</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                Every business is different. We work with you one-on-one to design and build bespoke automation solutions tailored to your workflow.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Bespoke Solution Architecture</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="">1-on-1 Implementation</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">Workflow Audit</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                Find exactly where you're bleeding time and money. We analyse your current processes, identify the bottlenecks, and deliver a custom automation roadmap.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Process Bottleneck ID</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Custom Automation Roadmap</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">SEO &amp; AI Search Optimisation</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                The way people search is changing. We make sure you rank on Google and get recommended by AI assistants like ChatGPT, Gemini, and Perplexity.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>Rank on Google &amp; ChatGPT</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span>AI-Optimised Content</span>
</li>
</ul>
</div>

<div className="service-card p-8 rounded-3xl bg-white/5 border border-white/10 group" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 50px)', opacity: '0'}}>
<div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-5 border border-accent/30">
<svg className="w-7 h-7 text-accent service-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="font-display text-xl font-semibold text-white mb-3 transition-colors">Local Visibility &amp; Reputation</h3>
<p className="text-white/70 font-light text-sm leading-relaxed mb-6 transition-colors">
                When someone searches "roofer near me" on Google or asks ChatGPT for an estate agent, you want to be the name that comes up.
              </p>
<ul className="space-y-3 text-xs text-white/70 font-light">
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="">Google Business Optimisation</span>
</li>
<li className="flex items-start gap-3 transition-colors">
<div className="check-icon w-4 h-4 min-w-[16px] bg-accent text-brand rounded-full flex items-center justify-center mt-0.5 transition-all duration-300">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="">Automated Review Collection</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-light" id="benefits">
<div className="container mx-auto px-6 lg:px-24">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="lg:sticky lg:top-32">
<h2 className="font-display text-4xl lg:text-5xl font-semibold text-brand mb-6 tracking-tight">
                Is Your Business Running You?
              </h2>
<p className="text-neutral text-lg font-light leading-relaxed mb-8">
                You started your business to build something great, but the reality often looks different. It's not a lack of effort; it's a lack of leverage. You don't need to work harder. You need a smarter system.
              </p>
<a className="text-brand font-semibold text-sm border-b border-brand hover:text-accent hover:border-accent transition-colors pb-1 inline-flex items-center gap-2" href="#services">
                See the Solution
                <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="space-y-6">
<div className="bg-white p-8 rounded-2xl border border-neutral/5 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5 text-red-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="16" y1="2" y2="8"></line><line x1="16" x2="22" y1="2" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-brand mb-3">Lost Revenue</h3>
<p className="text-neutral/80 font-light text-sm leading-relaxed">
                  Missed calls and slow follow-ups mean potential clients go to your competitors. Every enquiry that slips through the cracks is money walking out the door.
                </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-neutral/5 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 text-orange-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-3a2 2 0 0 1-2-2V2"></path><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"></path></svg>
</div>
<h3 className="font-display text-xl font-semibold text-brand mb-3">Admin Overload</h3>
<p className="text-neutral/80 font-light text-sm leading-relaxed">
                  You spend more time copy-pasting data into contracts than you do on site or viewing properties. The paperwork never stops piling up.
                </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-neutral/5 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-5 text-yellow-500">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline><polyline points="16 17 22 17 22 11"></polyline></svg>
</div>
<h3 className="font-display text-xl font-semibold text-brand mb-3">Inconsistent Leads</h3>
<p className="text-neutral/80 font-light text-sm leading-relaxed">
                  Feast or famine months make it impossible to plan for growth. Without a predictable pipeline, you're always on the back foot.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="container mx-auto px-6 lg:px-24">
<div className="grid md:grid-cols-2 gap-12 items-start">
<div className="lg:sticky lg:top-32">
<span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">FAQ</span>
<h2 className="font-display text-4xl font-semibold text-brand mb-6 text-balance tracking-tight">
                Common questions about AI for property businesses.
              </h2>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand border-b border-brand pb-1 hover:text-accent hover:border-accent transition-colors" href="#contact">
                Ask a different question
              </a>
</div>
<div className="space-y-8">
<div>
<h3 className="font-display text-lg font-semibold text-brand mb-2">
                  Do I need to be technical to use AI automation?
                </h3>
<p className="text-neutral/80 font-light leading-relaxed">
                  Not at all. If you can use email and a smartphone, you can use what we build. We design everything to be simple and intuitive—no coding, no complicated dashboards, no jargon.
                </p>
</div>
<div>
<h3 className="font-display text-lg font-semibold text-brand mb-2">
                  How long does setup take?
                </h3>
<p className="text-neutral/80 font-light leading-relaxed">
                  Most clients are up and running within 2-4 weeks, depending on the complexity. We handle the heavy lifting—you just need to answer a few questions and give us access to your existing tools.
                </p>
</div>
<div>
<h3 className="font-display text-lg font-semibold text-brand mb-2">
                  How much does it cost?
                </h3>
<p className="text-neutral/80 font-light leading-relaxed">
                  It depends on what you need. Some clients start with a single automation for a few hundred pounds. Others invest in a full system overhaul. We'll give you a clear quote after the discovery call—no surprises, no hidden fees.
                </p>
</div>
<div>
<h3 className="font-display text-lg font-semibold text-brand mb-2">
                  Does it work with my CRM/Software?
                </h3>
<p className="text-neutral/80 font-light leading-relaxed">
                  Yes. We work with the tools you already have—whether that's Outlook, Google, WhatsApp, Xero, or industry-specific software. The goal is to make your current setup work harder, not replace it.
                </p>
</div>
<div className="">
<h3 className="font-display text-lg font-semibold text-brand mb-2">
                  Is my business too small?
                </h3>
<p className="text-neutral/80 font-light leading-relaxed">
                  Some of our best results come from smaller operations—a one-person letting agency, a two-van roofing team. Automation isn't just for big companies. It's for anyone who wants their time back and more control over their growth.
                </p>
</div>
<div>
<h3 className="font-display text-lg font-semibold text-brand mb-2">
                  What happens after setup?
                </h3>
<p className="text-neutral/80 font-light leading-relaxed">
                  We train you (and your team, if needed) on how everything works. Then we're on hand for questions during a support period. After that, you can choose to manage it yourself or keep us on retainer for ongoing help.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[linear-gradient(rgba(14,240,200,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,240,200,0.03)_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
<div className="container mx-auto px-6 lg:px-24 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="">
<span className="text-accent font-semibold tracking-widest uppercase text-xs mb-3 block">Get Started</span>
<h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6 tracking-tight">Ready to Automate?</h2>
<p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                Book a free 30-minute discovery call. We'll chat about your current challenges and show you exactly how AI can help.
              </p>
<ul className="space-y-4 text-white/80 font-light mb-8">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">No sales pressure—just honest advice</span>
</li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-accent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Actionable advice you can use immediately</span>
</li>
</ul>

<div className="border-t border-white/10 pt-8 mt-8">
<h3 className="text-white font-semibold mb-4">Or reach out directly:</h3>
<div className="space-y-3">
<a className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors" href="mailto:info@aipropertylab.com">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span className="">info@aipropertylab.com</span>
</a>
</div>
</div>
</div>

<div className="bg-white/5 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div data-fillout-dynamic-resize="" data-fillout-embed-type="standard" data-fillout-id="dFk5mWWLzzus" data-fillout-inherit-parameters="" data-fillout-initialized="true" style={{width: '100%', height: '379px', position: 'relative', transition: 'height 150ms'}}><div className="fillout-embed-standard" style={{opacity: '1'}}><div className="fillout-embed-loading" style={{display: 'none'}}></div><div className="fillout-embed-iframe-container" style={{opacity: '1'}}><iframe allow="microphone; camera; geolocation" src="https://embed.fillout.com/t/dFk5mWWLzzus?fillout-embed-id=73681566556127&amp;fillout-embed-type=standard&amp;fillout-embed-parent-page=https%3A%2F%2Fwww.aura.build%2Feditor%2Fa6ea77cf-b434-4328-908a-5774c373e2f7&amp;fillout-embed-dynamic-resize=true" style={{border: '0px'}} title="dFk5mWWLzzus"></iframe></div></div></div>

</div>
</div>
</div>
</section>
</main>

<footer className="bg-deep py-16 border-t border-white/5">
<div className="container mx-auto px-6 lg:px-24">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="inline-block mb-6" href="#">
<img alt="AI Property Lab" className="h-16 w-auto brightness-0 invert opacity-80" src="https://aipropertylab.com/wp-content/uploads/2025/06/AI-Property-Lab-Logo-AIPL-Blue.png"/>
</a>
<p className="text-white/50 font-light text-sm leading-relaxed max-w-sm mb-6">
              AI automation and lead generation systems built specifically for property and home improvement businesses across the UK.
            </p>
<div className="flex gap-4 gap-x-4 gap-y-4">
<a className="flex items-center justify-center hover:text-accent hover:border-accent transition-colors text-white/50 bg-white/5 w-10 h-10 border-white/10 border rounded-full" href="https://www.linkedin.com/company/105952260/">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
</a>
<a className="flex items-center justify-center hover:text-accent hover:border-accent transition-colors text-white/50 bg-white/5 w-10 h-10 border-white/10 border rounded-full" href="/#">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="facebook" fill="currentColor" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="flex items-center justify-center hover:text-accent hover:border-accent transition-colors text-white/50 bg-white/5 w-10 h-10 border-white/10 border rounded-full" href="https://www.instagram.com/aipropertylab/">
<svg className="" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-white/50 hover:text-accent transition-colors text-sm" href="#services">Services</a></li>
<li><a className="text-white/50 hover:text-accent transition-colors text-sm" href="#benefits">Benefits</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Industries</h4>
<ul className="space-y-3">
<li><a className="text-white/50 hover:text-accent transition-colors text-sm" href="#">Estate &amp; Letting Agents</a></li>
<li><a className="text-white/50 hover:text-accent transition-colors text-sm" href="#">Home Improvement</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-white/30 text-xs">© 2025 AI Property Lab. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-white/30 hover:text-white/60 transition-colors text-xs" href="#">Privacy Policy</a>
<a className="text-white/30 hover:text-white/60 transition-colors text-xs" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
