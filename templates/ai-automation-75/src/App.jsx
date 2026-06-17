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



{
"@context": "https://schema.org",
"@type": "Organization",
"name": "SeriousMindz AI",
"url": "https://www.seriousmindz.ai",
"logo": "https://www.seriousmindz.ai/assets/seriousmindz-cosmic-logo.png",
"image": "https://www.seriousmindz.ai/assets/seriousmindz-cosmic-logo.png",
"description": "Intelligent business automation and scaling through AI agents and high-performance web development.",
"sameAs": [
"https://www.facebook.com/profile.php?id=61578854008110",
"https://www.instagram.com/seriousmindz/",
"https://www.linkedin.com/company/seriousmindz-marketing/",
"https://x.com/seriousmindzai"
],
"contactPoint": {
"@type": "ContactPoint",
"contactType": "sales",
"url": "https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R"
}
}



(function () {
const style = document.createElement("style");
style.textContent = `.animate-on-scroll { animation-play-state: paused !important; } .animate-on-scroll.animate { animation-play-state: running !important; }`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => { window.__inViewIO.observe(el); });
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



      document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      });
      function closeMobileMenu() {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.body.style.overflow = '';
      }
    


        (function() {
          const plans = {
            creator: {
              title: "Essentials",
              desc: "Foundational tools for intelligent automation.",
              features: ["Essential AI Tools", "Basic Automation", "Email Support"],
              links: [
                { name: "Serious Basic", url: "https://link.seriousmindz.ai/payment-link/68eedac9219709f213e2b221" },
                { name: "Serious Basic with AI", url: "https://link.seriousmindz.ai/payment-link/68eedafa2197096206e2b223" },
                { name: "Serious AI Starter", url: "https://link.seriousmindz.ai/payment-link/68eeda1b2197096957e2b218" }
              ]
            },
            pro: {
              title: "Professional",
              desc: "Advanced scaling for serious businesses.",
              features: ["Advanced Workflows", "Priority Support", "Higher Limits"],
              links: [
                { name: "Serious Pro", url: "https://link.seriousmindz.ai/payment-link/68eeda482197093827e2b221" },
                { name: "Serious Pro Yearly", url: "https://link.seriousmindz.ai/payment-link/68eeda7167ee3b670e69e674" },
                { name: "AI Starter Plus", url: "https://link.seriousmindz.ai/payment-link/68eed9d7219709b2e9e2b216" }
              ]
            },
            agency: {
              title: "Premium & Custom",
              desc: "Full-scale custom development and premium features.",
              features: ["Custom Website Builds", "Enterprise AI Solutions", "Dedicated Manager"],
              links: [
                { name: "Serious Premium", url: "https://link.seriousmindz.ai/payment-link/68eed964613b1b5e7acecb0c" },
                { name: "Premium Yearly", url: "https://link.seriousmindz.ai/payment-link/68eed9d7219709b2e9e2b216" },
                { name: "Custom Website Build", url: "https://link.seriousmindz.ai/payment-link/68f08fad2197096998e2bd06", highlight: true }
              ]
            }
          };

          const keys = ['creator', 'pro', 'agency'];
          let currentIndex = 0;
          let intervalId;

          const activeBtnClass = "relative w-full flex items-center justify-between p-4 lg:p-5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] transition-transform hover:scale-[1.02] group border-t border-white/20";
          const inactiveBtnClass = "w-full flex items-center justify-between p-4 lg:p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left";

          window.selectPlan = function(planKey) {
            currentIndex = keys.indexOf(planKey);

            ['creator', 'pro', 'agency'].forEach(key => {
              const btn = document.getElementById('btn-' + key);
              const icon = btn.querySelector('svg');

              if (key === planKey) {
                btn.className = activeBtnClass;
                btn.querySelector('span').className = "text-lg lg:text-xl font-sans";
                icon.classList.remove('text-neutral-500');
                if(key === 'creator') icon.classList.add('fill-white/20'); 

                const dot = document.getElementById('active-dot');
                if(dot) btn.appendChild(dot);
              } else {
                btn.className = inactiveBtnClass;
                btn.querySelector('span').className = "text-lg lg:text-xl group-hover:text-white font-sans";
                icon.classList.add('text-neutral-500');
                icon.classList.remove('fill-white/20');
              }
            });

            // Update noodle paths only on desktop
            if (window.innerWidth >= 1024) {
                ['creator', 'pro', 'agency'].forEach(key => {
                  const path = document.getElementById('path-' + key);
                  if (path) {
                      if (key === planKey) {
                        path.setAttribute('class', 'noodle-beam');
                      } else {
                        path.setAttribute('class', 'noodle-path opacity-20');
                      }
                  }
                });
            }

            const data = plans[planKey];
            const elements = ['plan-title', 'plan-desc', 'plan-features', 'plan-buttons'].map(id => document.getElementById(id));
            elements.forEach(el => el.style.opacity = '0');
            elements.forEach(el => el.style.transition = 'opacity 0.2s ease');

            setTimeout(() => {
              document.getElementById('plan-title').textContent = data.title;
              document.getElementById('plan-desc').textContent = data.desc;
              document.getElementById('plan-features').innerHTML = data.features.map(feat => `
                <div class="flex items-center gap-4 group/item">
                  <div class="flex-none transition-transform group-hover/item:translate-x-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="#f97316" class="text-orange-500"><path d="M22 12 6 22V2z" stroke="none"></path></svg>
                  </div>
                  <span class="text-white text-sm font-sans">${feat}</span>
                </div>
              `).join('');

              document.getElementById('plan-buttons').innerHTML = data.links.map(link => {
                const isHighlight = link.highlight ? 'bg-gradient-to-r from-orange-600 to-amber-500 border-orange-500 shadow-lg shadow-orange-900/40' : 'bg-white/5 hover:bg-white/10 border-white/10';
                return `
                 <a href="${link.url}" target="_blank" class="w-full py-3 rounded-xl ${isHighlight} text-white text-sm transition-all flex items-center justify-between px-6 border hover:scale-[1.02]">
                    <span class="font-medium">${link.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right opacity-70"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                 </a>
                `;
              }).join('');

              elements.forEach(el => el.style.opacity = '1');
            }, 200);
          }

          window.manualSelectPlan = function(key) { clearInterval(intervalId); selectPlan(key); }
          window.nextPlan = function() { clearInterval(intervalId); currentIndex = (currentIndex + 1) % keys.length; selectPlan(keys[currentIndex]); }
          window.prevPlan = function() { clearInterval(intervalId); currentIndex = (currentIndex - 1 + keys.length) % keys.length; selectPlan(keys[currentIndex]); }
          
          function startRotation() {
              intervalId = setInterval(() => { currentIndex = (currentIndex + 1) % keys.length; selectPlan(keys[currentIndex]); }, 5000);
          }

          selectPlan('creator');
          startRotation();

          const section = document.getElementById('pricing');
          section.addEventListener('mouseenter', () => clearInterval(intervalId));
          section.addEventListener('mouseleave', () => startRotation());
        })();
      


        (function() {
            const canvas = document.getElementById('shader-bg');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let width, height, particles = [];

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }
            
            class Particle {
                constructor() {
                    this.reset();
                    this.y = Math.random() * height; // Start random y
                }
                reset() {
                    this.x = Math.random() * width;
                    this.y = height + Math.random() * 100;
                    this.speed = 0.5 + Math.random() * 1.5;
                    this.size = Math.random() * 1.5;
                    this.opacity = Math.random() * 0.5;
                }
                update() {
                    this.y -= this.speed;
                    if (this.y < -10) this.reset();
                }
                draw() {
                    ctx.fillStyle = `rgba(249, 115, 22, ${this.opacity})`; // Orange tint
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            function init() {
                resize();
                particles = Array.from({ length: 40 }, () => new Particle());
                loop();
            }

            function loop() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => { p.update(); p.draw(); });
                requestAnimationFrame(loop);
            }

            window.addEventListener('resize', resize);
            init();

            // Typing Effect Logic for the Dashboard Card
            const typingElement = document.querySelector('.typing-effect');
            if (typingElement) {
                const phrases = [
                    "Analyzing request... Sending pricing_v2.pdf",
                    "Optimizing database queries...",
                    "Generating weekly growth report...",
                    "Syncing with CRM..."
                ];
                let phraseIndex = 0;
                setInterval(() => {
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    typingElement.textContent = phrases[phraseIndex];
                }, 4000);
            }
        })();
    
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
      

<div className="fixed z-0 top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none">
<canvas className="absolute inset-0 w-full h-full z-0 opacity-80" id="shader-bg" style={{filter: 'contrast(1.1) brightness(0.8)'}}></canvas>
<div className="absolute inset-0 z-0 bg-grid-white opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] z-10 opacity-70 pointer-events-none"></div>
<div className="absolute inset-0 bg-[#050505]/20 z-10 mix-blend-overlay pointer-events-none"></div>
</div>

<div className="w-full bg-orange-950/20 border-b border-orange-500/10 backdrop-blur-md relative z-50 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent animate-pulse pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center text-center">
<p className="text-[10px] sm:text-xs font-sans font-medium tracking-wide flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-glow-gold">
<span className="uppercase font-semibold tracking-wider text-orange-200/90 font-geist">Faith-Based Business</span>
<span className="hidden sm:inline-block w-1 h-1 rounded-full bg-orange-400"></span>
<span className="italic font-light text-orange-100/90 font-geist">"Commit to the Lord whatever you do, and he will establish your plans." - Proverbs 16:3</span>
</p>
</div>
</div>

<nav className="relative z-50 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto border-b border-white/5 animate-entry delay-75">

<a aria-label="SeriousMindz AI Homepage" className="flex items-center group cursor-pointer" href="https://www.seriousmindz.ai">
<svg aria-labelledby="logoTitle" className="h-12 md:h-14 w-auto" fill="none" role="img" viewbox="0 0 420 65" xmlns="http://www.w3.org/2000/svg">
<title id="logoTitle">SeriousMindz AI Logo</title>
<defs>
<lineargradient id="brainGradient" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#ec4899"></stop> 
<stop offset="50%" stop-color="#8b5cf6"></stop> 
<stop offset="100%" stop-color="#3b82f6"></stop> 
</lineargradient>
<lineargradient id="textGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f8fafc"></stop>
<stop offset="45%" stop-color="#94a3b8"></stop>
<stop offset="55%" stop-color="#475569"></stop>
<stop offset="100%" stop-color="#cbd5e1"></stop>
</lineargradient>
<filter height="140%" id="logoGlow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<feflood flood-color="#8b5cf6" flood-opacity="0.6" result="glowColor"></feflood>
<fecomposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"></fecomposite>
<femerge>
<femergenode in="softGlow"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<g filter="url(#logoGlow)" stroke="url(#brainGradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" transform="translate(10, 5) scale(2.2)">
<path d="M9 3a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 9 16"></path>
<path d="M15 3a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 15 16"></path>
<path d="M9 3h6"></path>
<path d="M9 16h6"></path>
<path d="M12 5v4"></path>
<path d="M12 13v3"></path>
<path d="M7 8c1-1 3-1 3 1"></path>
<path d="M17 8c-1-1-3-1-3 1"></path>
</g>
<text className="font-quicksand" fill="url(#textGradient)" filter="url(#logoGlow)" fontFamily="'Orbitron', sans-serif" fontSize="28" font-weight="900" letter-spacing="1" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" style={{textShadow: '0px 2px 4px rgba(0,0,0,0.5)'}} x="75" y="42">SERIOUSMINDZ AI</text>
</svg>
</a>

<div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-1 py-1 backdrop-blur-md">
<a className="px-4 py-1.5 bg-neutral-800/80 rounded-full text-xs text-white flex items-center gap-2 border border-white/5 shadow-inner font-geist" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
          Home
        </a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="#services">Services</a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="#pricing">Pricing</a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.skool.com/seriousmindzaspire-ai-" target="_blank">Community</a>
<a className="px-4 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">Book Call</a>
</div>

<div className="hidden md:flex items-center gap-3">

<a className="group relative flex items-center justify-center px-4 py-2 rounded-full bg-neutral-900 border border-white/10 overflow-hidden transition-all hover:bg-neutral-800 hover:border-white/20" href="https://app.seriousmindz.com/" target="_blank">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] animate-shimmer pointer-events-none"></div>
<span className="relative z-10 flex items-center gap-2 text-xs font-medium text-neutral-300 group-hover:text-white font-geist tracking-wide">
<svg className="lucide lucide-layout-grid group-hover:text-orange-400 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                 Client App
             </span>
</a>

<a className="shiny-cta nav-btn font-sans" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R" target="_blank">
<span className="font-geist">Get Started</span>
</a>
</div>

<button aria-label="Open Menu" className="md:hidden p-2 text-white/80 hover:text-white transition-colors" id="mobile-menu-btn">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</button>
</nav>

<div className="hidden fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl md:hidden overflow-y-auto" id="mobile-menu">
<div className="flex flex-col items-center justify-center min-h-screen gap-8 p-6 relative">
<button aria-label="Close Menu" className="absolute top-6 right-6 text-white/70 hover:text-white p-2" onclick="closeMobileMenu()">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
<a className="text-2xl text-white font-geist font-light" href="#" onclick="closeMobileMenu()">Home</a>
<a className="text-2xl text-neutral-400 hover:text-white font-geist font-light" href="#services" onclick="closeMobileMenu()">Services</a>
<a className="text-2xl text-neutral-400 hover:text-white font-geist font-light" href="#pricing" onclick="closeMobileMenu()">Pricing</a>
<a className="text-2xl text-neutral-400 hover:text-white font-geist font-light" href="https://www.skool.com/seriousmindzaspire-ai-" onclick="closeMobileMenu()" target="_blank">Community</a>
<a className="text-2xl text-neutral-400 hover:text-white font-geist font-light" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">Book Call</a>
<div className="w-12 h-px bg-white/10 my-2"></div>
<a className="text-xl text-neutral-300 hover:text-orange-400 flex items-center gap-3 font-geist" href="https://app.seriousmindz.com/" target="_blank">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
             Client App
        </a>
<a className="mt-4 shiny-cta font-sans px-10 py-4" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R" target="_blank"><span className="font-geist text-lg">Get Started</span></a>
</div>
</div>


<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative items-center">

<div className="plus-decoration top-24 left-6 hidden lg:block"></div>
<div className="plus-decoration bottom-24 right-6 hidden lg:block"></div>

<div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1280 600">
<path className="noodle-path" d="M 320 400 C 400 400, 600 500, 800 200"></path>
<path className="noodle-beam" d="M 320 400 C 400 400, 600 500, 800 200"></path>
</svg>
</div>

<div className="lg:col-span-7 flex flex-col relative items-start z-10">

<div className="mb-6 lg:mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 animate-entry delay-100 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="lucide lucide-sparkles w-3 h-3 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
<span className="relative font-geist">AI-Powered Business Evolution</span>
</div>

<div className="relative godray-wrapper animate-entry delay-150 mb-6" id="hero-title-container">
<h1 className="text-4xl sm:text-5xl lg:text-[76px] leading-[1.1] lg:leading-[1.05] font-light tracking-tight godray-text font-quicksand" id="hero-title">
              INTELLIGENT
              <span className="inline-flex align-middle mx-1"></span>
              SCALING
              <br/>
              SERIOUS
              <br/>
              RESULTS
            </h1>
</div>

<p className="text-base sm:text-lg text-neutral-400 max-w-xl mb-8 lg:mb-10 leading-relaxed animate-entry delay-200 font-geist">
          Stop guessing what works. SeriousMindz AI builds high-converting websites and deploys advanced AI systems to automate your growth.
        </p>

<div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-16 lg:mb-20 gap-x-4 gap-y-4 items-stretch sm:items-center animate-entry delay-300 relative z-20">
<a className="shiny-cta" href="#pricing">
<span className="font-geist">View Plans</span>
</a>
<a className="sonar-container hover-border-beam px-8 py-4 rounded-full bg-white text-black text-lg transition-all font-sans font-medium group text-center flex items-center justify-center" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">
<span className="relative z-10 font-geist">Book Demo</span>
<div className="sonar-wave animate border-white/50"></div>
<div className="sonar-wave animate delay-1 border-white/30"></div>
</a>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 mt-0 relative justify-center z-10 animate-entry delay-500">

<div className="relative w-full max-w-[340px] sm:max-w-[360px] bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0"></div>

<div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-6 sm:p-8 flex flex-col items-start overflow-hidden">
<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent"></div>

<div className="flex justify-between w-full items-start mb-6 relative">
<span className="text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 flex items-center gap-2 overflow-hidden font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Live Metrics
              </span>
</div>
<h3 className="text-xl text-white mb-2 font-geist">Serious Velocity</h3>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed font-geist">Automated systems hitting peak efficiency.</p>

<div className="w-full mb-8">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-400 font-light tracking-tight font-quicksand">
                  +842%
                </span>
<span className="text-xs text-orange-500 flex items-center bg-orange-500/10 px-1.5 py-0.5 rounded font-geist">
<svg className="lucide lucide-arrow-up mr-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                  ROI
                </span>
</div>

<div className="w-full h-16 relative mt-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 280 60">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 50 C 40 50, 60 30, 100 35 C 140 40, 160 10, 200 15 C 240 20, 260 5, 280 0 V 60 H 0 Z" fill="url(#chartGradient)"></path>
<path d="M0 50 C 40 50, 60 30, 100 35 C 140 40, 160 10, 200 15 C 240 20, 260 5, 280 0" fill="none" stroke="#f97316" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<circle cx="280" cy="0" fill="#fff" r="3" stroke="#f97316" strokeWidth="2"></circle>
</svg>
</div>
</div>

<a className="flex items-center justify-center hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 w-full border-white/20 rounded-full border-t mb-8 pt-3 pb-3 shadow-[0_4px_15px_rgba(249,115,22,0.4)] relative z-20 font-geist" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">
              Schedule Analysis
            </a>

<div className="relative w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-6 flex items-center justify-center">
<span className="bg-[#0A0A0A] px-2 text-[10px] text-neutral-400 uppercase font-geist">AI Powered Scale</span>
</div>

<div className="flex gap-4 w-full">
<div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-geist">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-white fill-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
                Auto-Optimization
              </div>
</div>
</div>
</div>
</div>
</main>

<section className="-mt-4 lg:-mt-8 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mx-auto pt-0 px-2.5 lg:px-0 pb-16 lg:pb-24 relative animate" id="services">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] bg-orange-600/20 blur-[100px] rounded-full z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">

<div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1200 600">
<path className="noodle-path" d="M 200 100 C 300 100, 300 200, 500 220"></path>
<path className="noodle-beam" d="M 200 100 C 300 100, 300 200, 500 220"></path>
<path className="noodle-path" d="M 800 250 C 900 250, 900 150, 1000 150"></path>
<path className="noodle-beam-reverse" d="M 800 250 C 900 250, 900 150, 1000 150"></path>
</svg>
</div>

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative shadow-[0_0_40px_-10px_rgba(249,115,22,0.15)] backdrop-blur-sm z-10 animate">

<div className="-top-10 -right-10 bg-orange-500/10 w-56 h-56 rounded-full absolute blur-3xl"></div>
<div className="plus-decoration bottom-6 left-6 opacity-30"></div>

<div className="flex sm:px-6 bg-white/5 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-3 text-sm text-neutral-400">
<a className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition-colors font-geist" href="https://www.seriousmindz.ai">
<svg className="lucide lucide-zap text-orange-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                SeriousMindz OS
              </a>
<span className="opacity-40 font-geist">/</span>
<span className="text-white font-geist">Growth</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 text-[11px] font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Live
              </span>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-white/5 border-white/5 border-r">
<div className="px-4 py-4">
<a className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-900/20 text-sm hover:brightness-110 transition-all px-3 py-2 border border-white/10 font-geist" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R" target="_blank">
<svg className="lucide lucide-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                  New Project
                </a>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">
<div className="px-2 mb-2 text-[10px] uppercase text-neutral-500 font-geist">Automation</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[400px] sm:min-h-[520px] bg-black/20">

<div className="px-4 sm:px-6 py-3 border-b border-white/5 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-6 min-w-max">
<button className="text-sm text-white border-b-2 border-orange-500 pb-3 -mb-3.5 font-geist">Overview</button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-geist">Websites</button>
<button className="text-sm text-neutral-500 hover:text-white transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-white/10 font-geist">AI Agents</button>
</div>
</div>

<div className="px-4 sm:px-6 py-6 border-b border-white/5">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-3">
<h3 className="text-white text-xl sm:text-2xl font-light tracking-tight font-quicksand">Business Velocity</h3>
</div>
</div>
<div className="mt-2 text-sm text-neutral-400 font-geist">
                  Systems running optimally • <a className="text-orange-400 hover:text-orange-300 transition-colors font-geist" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">View detailed report</a>
</div>
</div>

<div className="px-4 sm:px-6 py-6 space-y-4">

<div className="rounded-xl ring-1 ring-white/10 bg-neutral-900/50 p-4 border-l-2 border-green-500 relative overflow-hidden transition-all hover:bg-neutral-900/70">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent opacity-20 pointer-events-none"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">

<div className="p-1.5 bg-green-500/10 rounded-md border border-green-500/20 relative sonar-container">
<svg className="lucide lucide-bot text-green-500 relative z-10" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>

<div className="sonar-wave animate border-green-500/50"></div>
</div>
<div>
<div className="text-sm text-white font-medium font-geist">Sales_Agent_01</div>
<div className="text-[10px] text-green-400 flex items-center gap-1.5 font-mono mt-0.5 font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    Live Interaction
                                </div>
</div>
</div>
<span className="text-[10px] text-neutral-500 font-mono bg-white/5 px-1.5 py-0.5 rounded font-geist">ID: #8821</span>
</div>
<div className="space-y-2.5 font-mono text-xs pl-1">
<div className="flex gap-2 text-neutral-400"><span className="text-blue-400 font-bold min-w-[35px] font-geist">User:</span><span className="font-geist">"What pricing plans do you offer?"</span></div>
<div className="flex gap-2 text-white"><span className="text-green-400 font-bold min-w-[35px] font-geist">AI:</span><span className="typing-effect animate-pulse font-geist">Analyzing request... Sending pricing_v2.pdf</span></div>
</div>
</div>

<div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4 hover:bg-white/[0.04] transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div>
<div className="text-sm text-white font-geist">Website Conversion Spike</div>
<div className="text-xs text-neutral-500 mt-0.5 font-geist">+42% Leads captured this week</div>
</div>
</div>
<span className="text-[10px] rounded-md bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20 px-2 py-0.5 font-geist">SERIOUS</span>
</div>
</div>

<div className="rounded-xl ring-1 ring-orange-500/20 bg-gradient-to-b from-orange-500/5 to-transparent p-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div>
<div className="text-sm text-white font-geist">Deploying AI Agents</div>
<div className="text-xs text-neutral-500 mt-0.5 font-geist">Customer Support Bot • Sales Assistant</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-3">
<span className="text-xs text-neutral-500 font-geist">Deploying</span>
<div className="flex-1 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-[88%] rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
</div>
<span className="text-xs text-white font-geist">88%</span>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 bg-white/5 border-l border-white/5 min-h-[520px]">
<div className="px-4 sm:px-5 py-4 space-y-4">
<div className="rounded-xl ring-1 ring-white/10 bg-black/20 p-4">
<div className="text-xs text-neutral-500 mb-3 uppercase font-geist">Live Metrics</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
<div className="text-[10px] text-neutral-400 mb-1 font-geist">Traffic</div>
<div className="text-lg text-white font-geist">84.3K</div>
</div>
<div className="bg-white/5 rounded-lg p-3 ring-1 ring-white/5">
<div className="text-[10px] text-neutral-400 mb-1 font-geist">Leads</div>
<div className="text-lg text-orange-400 font-geist">1,240</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 max-w-7xl rounded-3xl mt-16 lg:mt-24 mr-auto mb-16 lg:mb-24 ml-auto pt-8 lg:pt-12 pr-6 lg:pr-10 pb-8 lg:pb-12 pl-6 lg:pl-10 relative mx-2.5 lg:mx-auto animate" id="pricing" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>

<div className="plus-decoration top-6 right-6 opacity-40"></div>
<div className="plus-decoration bottom-6 left-6 opacity-40"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 z-10 relative gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="flex gap-4 mb-3 gap-x-4 gap-y-4 items-center">
<span className="text-5xl lg:text-6xl text-white/5 font-light tracking-tight font-quicksand">02.</span>
<div className="space-y-2">
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tight font-quicksand">Unlock Serious Growth</h2>
</div>
</div>
<p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-8 lg:mb-12 max-w-lg font-geist">
            Choose the perfect plan to automate your business, analyze trends in real-time, and scale your revenue.
          </p>
<div className="flex flex-col gap-3 lg:gap-4 w-full relative z-10 max-w-md">

<button className="relative w-full flex items-center justify-between p-4 lg:p-5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] transition-transform hover:scale-[1.02] group border-t border-white/20" id="btn-creator" onclick="manualSelectPlan('creator')">
<span className="text-lg lg:text-xl font-sans">Essentials</span>
<svg className="lucide lucide-zap w-6 h-6 fill-white/20" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>

<div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full translate-x-1/2 ring-4 ring-[#050505]" id="active-dot">
<div className="absolute inset-0 rounded-full border border-orange-500 animate-[sonar_1.5s_infinite]"></div>
</div></button>
<button className="w-full flex items-center justify-between p-4 lg:p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left" id="btn-pro" onclick="manualSelectPlan('pro')">
<span className="text-lg lg:text-xl group-hover:text-white font-sans">Professional</span>
<svg className="lucide lucide-rocket w-6 h-6 group-hover:text-white transition-colors text-neutral-500" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 lg:p-5 rounded-xl bg-[#181824] border border-white/5 text-neutral-200 hover:bg-[#20202e] hover:border-white/10 transition-all group text-left" id="btn-agency" onclick="manualSelectPlan('agency')">
<span className="text-lg lg:text-xl group-hover:text-white font-sans">Premium &amp; Builds</span>
<svg className="lucide lucide-globe w-6 h-6 group-hover:text-white transition-colors text-neutral-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
</div>
</div>

<div className="hidden lg:block lg:col-span-2 h-[400px] z-10 relative translate-y-16 gap-x-12 gap-y-12">
<svg className="w-full h-full absolute inset-0 overflow-visible" preserveaspectratio="none" viewbox="0 0 200 400">
<path className="noodle-beam" d="M-50 160 C 80 160, 80 200, 180 200 L 240 200" id="path-creator"></path>
<path className="noodle-path" d="M-50 160 C 80 160, 80 200, 180 200 L 240 200"></path>
<path className="noodle-path opacity-20" d="M-50 250 C 80 250, 80 200, 180 200 L 240 200" id="path-pro"></path>
<path className="noodle-path opacity-20" d="M-50 340 C 80 340, 80 200, 180 200 L 240 200" id="path-agency"></path>
<path d="M230 195 L 240 200 L 230 205" fill="none" stroke="#f97316" strokeWidth="2"></path>
<circle cx="240" cy="200" fill="#f97316" r="2"></circle>
</svg>
</div>

<div className="lg:col-span-5 relative h-full w-full">
<div className="relative w-full h-full bg-neutral-900 rounded-[32px] p-[2px] electric-card overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-orange-500 to-transparent opacity-80 z-0"></div>
<div className="relative z-10 bg-[#0A0A0A] rounded-[30px] h-full p-6 lg:p-10 flex flex-col overflow-hidden">
<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none"></div>
<div className="flex items-center justify-between mb-2 relative z-10">
<h3 className="text-2xl lg:text-3xl text-white font-light tracking-tight font-quicksand" id="plan-title" style={{opacity: '1'}}>Essentials</h3>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5" onclick="prevPlan()">
<svg className="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-1.5 rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5" onclick="nextPlan()">
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<p className="text-neutral-400 mt-2 mb-8 text-sm leading-relaxed border-b border-white/10 pb-8 relative z-10 font-geist" id="plan-desc" style={{opacity: '1'}}>Foundational tools for intelligent automation.</p>
<div className="space-y-4 mb-6 relative z-10 flex-grow font-sans min-h-[120px]" id="plan-features" style={{opacity: '1'}}>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="text-orange-500" fill="#f97316" height="12" viewbox="0 0 24 24" width="12"><path d="M22 12 6 22V2z" stroke="none"></path></svg>
</div>
<span className="text-white text-sm font-sans">Essential AI Tools</span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="text-orange-500" fill="#f97316" height="12" viewbox="0 0 24 24" width="12"><path d="M22 12 6 22V2z" stroke="none"></path></svg>
</div>
<span className="text-white text-sm font-sans">Basic Automation</span>
</div>
<div className="flex items-center gap-4 group/item">
<div className="flex-none transition-transform group-hover/item:translate-x-1">
<svg className="text-orange-500" fill="#f97316" height="12" viewbox="0 0 24 24" width="12"><path d="M22 12 6 22V2z" stroke="none"></path></svg>
</div>
<span className="text-white text-sm font-sans">Email Support</span>
</div>
</div>
<div className="space-y-3 relative z-10" id="plan-buttons" style={{opacity: '1'}}>
<a className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border-white/10 text-white text-sm transition-all flex items-center justify-between px-6 border hover:scale-[1.02]" href="https://link.seriousmindz.ai/payment-link/68eedac9219709f213e2b221" target="_blank">
<span className="font-medium">Serious Basic</span>
<svg className="lucide lucide-arrow-right opacity-70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border-white/10 text-white text-sm transition-all flex items-center justify-between px-6 border hover:scale-[1.02]" href="https://link.seriousmindz.ai/payment-link/68eedafa2197096206e2b223" target="_blank">
<span className="font-medium">Serious Basic with AI</span>
<svg className="lucide lucide-arrow-right opacity-70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border-white/10 text-white text-sm transition-all flex items-center justify-between px-6 border hover:scale-[1.02]" href="https://link.seriousmindz.ai/payment-link/68eeda1b2197096957e2b218" target="_blank">
<span className="font-medium">Serious AI Starter</span>
<svg className="lucide lucide-arrow-right opacity-70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="bg-center animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-tr from-gray-500/0 via-gray-500/10 to-gray-500/0 from-white/0 via-white/10 to-white/0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5347579-34d0-43b9-99d3-126f6193d19d_1600w.jpg)] max-w-7xl bg-cover rounded-3xl mt-16 lg:mt-24 mr-auto mb-12 ml-auto pt-16 lg:pt-24 pr-6 pb-6 pl-6 relative animate" style={{position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '24px'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="z-10 text-center max-w-4xl mr-auto mb-16 lg:mb-24 ml-auto pr-6 pl-6 relative">
<h2 className="text-2xl md:text-3xl text-white mb-3 font-light tracking-tight font-quicksand">Ready to get Serious?</h2>
<p className="text-neutral-400 max-w-lg mx-auto mb-8 text-base leading-relaxed font-geist">
          Schedule a strategy call to discuss how SeriousMindz AI can automate your business and scale your revenue.
        </p>
<div className="relative max-w-xs mx-auto sonar-container">
<div className="sonar-wave animate border-white/20"></div>
<a className="w-full bg-white hover:bg-neutral-200 text-black px-4 py-3 rounded-xl text-sm transition-colors shadow-lg flex items-center justify-center gap-2 font-semibold tracking-tight relative z-10 font-geist" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">
             Book Strategy Call
             <svg className="lucide lucide-calendar-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</a>
</div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-7xl mx-auto px-6">
<div className="lg:col-span-2 col-span-full">
<div className="flex flex-col items-start gap-4">
<a className="flex items-center group" href="https://www.seriousmindz.ai">
<svg className="h-14 w-auto" fill="none" viewbox="0 0 420 65" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="brainGradientFooter" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#ec4899"></stop>
<stop offset="50%" stop-color="#8b5cf6"></stop>
<stop offset="100%" stop-color="#3b82f6"></stop>
</lineargradient>
<lineargradient id="textGradientFooter" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f8fafc"></stop>
<stop offset="45%" stop-color="#94a3b8"></stop>
<stop offset="55%" stop-color="#475569"></stop>
<stop offset="100%" stop-color="#cbd5e1"></stop>
</lineargradient>
<filter height="140%" id="logoGlowFooter" width="140%" x="-20%" y="-20%">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<feflood flood-color="#8b5cf6" flood-opacity="0.6" result="glowColor"></feflood>
<fecomposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"></fecomposite>
<femerge>
<femergenode in="softGlow"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<g filter="url(#logoGlowFooter)" stroke="url(#brainGradientFooter)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" transform="translate(10, 5) scale(2.2)">
<path d="M9 3a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 9 16"></path>
<path d="M15 3a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 15 16"></path>
<path d="M9 3h6"></path>
<path d="M9 16h6"></path>
<path d="M12 5v4"></path>
<path d="M12 13v3"></path>
<path d="M7 8c1-1 3-1 3 1"></path>
<path d="M17 8c-1-1-3-1-3 1"></path>
</g>
<text className="font-quicksand" fill="url(#textGradientFooter)" filter="url(#logoGlowFooter)" fontFamily="'Orbitron', sans-serif" fontSize="28" font-weight="900" letter-spacing="1" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" style={{textShadow: '0px 2px 4px rgba(0,0,0,0.5)'}} x="75" y="42">SERIOUSMINDZ AI</text>
</svg>
</a>
<p className="text-xs text-neutral-500 font-geist">Intelligent Scaling Solutions.</p>
<p className="text-[10px] sm:text-xs font-sans mt-2 leading-relaxed text-glow-gold">
<span className="block uppercase font-bold text-orange-200/90 mb-1 font-geist">Faith-Based Business</span>
<span className="italic text-orange-100/80 font-geist">"Commit to the Lord whatever you do, and he will establish your plans." - Proverbs 16:3</span>
</p>
</div>
</div>
<div>
<h4 className="text-white mb-4 text-sm font-geist">Services</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.seriousmindz.com" target="_blank">AI Automation</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://link.seriousmindz.ai/payment-link/68f08fad2197096998e2bd06" target="_blank">Website Development</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.seriousmgmt.com">Lead Generation</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="#pricing">Pricing Plans</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-4 text-sm font-geist">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.seriousmgmt.com" target="_blank">About Us</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.skool.com/seriousmindzaspire-ai-" target="_blank">Community</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://link.seriousmindz.ai/widget/booking/H2U0tyZe2aGUy1Q8fU4R">Book a Call</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors flex items-center gap-2 font-geist" href="https://share.google/Zb4jA1E7dyUMe6O5W" rel="noopener noreferrer" target="_blank">Google Profile <svg className="lucide lucide-map-pin" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.facebook.com/profile.php?id=61578854008110" rel="noopener noreferrer" target="_blank">Facebook</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.instagram.com/seriousmindz/" rel="noopener noreferrer" target="_blank">Instagram</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://www.linkedin.com/company/seriousmindz-marketing/?viewAsMember=true" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://x.com/seriousmindzai" rel="noopener noreferrer" target="_blank">X (Twitter)</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://seriousm-ukfavw.manus.space/" target="_blank">Privacy Policy</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white transition-colors font-geist" href="https://seriousm-ukfavw.manus.space/" target="_blank">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-4 text-sm font-geist">Our Sites</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.seriousmindz.info/" rel="noopener noreferrer" target="_blank">SeriousMindz Info</a></li>
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.seriousmindz.com/" rel="noopener noreferrer" target="_blank">SeriousMindz.com</a></li>
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.gohighlevel.com/?fp_ref=byfxe" rel="noopener noreferrer" target="_blank">GoHighLevel</a></li>
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://kwi3xj8pg4pr.space.minimax.io/" rel="noopener noreferrer" target="_blank">AI Demo</a></li>
</ul>
</div>
<div>
<h4 className="text-white mb-4 text-sm font-geist">Partners</h4>
<ul className="space-y-3">
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.ethercoop.org/" rel="noopener noreferrer" target="_blank">Ether Coop</a></li>
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://tdreallogistics.com/" rel="noopener noreferrer" target="_blank">TD Real Logistics</a></li>
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.theparkingguys.com/" rel="noopener noreferrer" target="_blank">The Parking Guys</a></li>
<li><a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://pivottechschool.com/" rel="noopener noreferrer" target="_blank">Pivot Tech School</a></li>
</ul>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-8 overflow-hidden relative group">
<h4 className="text-white mb-4 text-sm font-geist">Client Portfolio</h4>
<div className="absolute top-0 bottom-0 left-0 w-12 z-10 bg-gradient-to-r from-[#17171a] to-transparent"></div>
<div className="absolute top-0 bottom-0 right-0 w-12 z-10 bg-gradient-to-l from-[#17171a] to-transparent"></div>
<div className="flex select-none gap-8 w-full overflow-hidden mask-linear-fade">
<div className="flex shrink-0 items-center gap-8 justify-around whitespace-nowrap animate-marquee group-hover:paused">
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://nativeblackcultivation.com/" rel="noopener noreferrer" target="_blank">Native Black Cultivation</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.arisechurchdecatur.org/" rel="noopener noreferrer" target="_blank">Arise Church Decatur</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.drlarhondac.com/" rel="noopener noreferrer" target="_blank">Dr. LaRhonda C</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://8020fitnessnashville.com/" rel="noopener noreferrer" target="_blank">80/20 Fitness Nashville</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://officehubhsv.com/" rel="noopener noreferrer" target="_blank">Office Hub HSV</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://partynridenashville.com/" rel="noopener noreferrer" target="_blank">Party &amp; Ride Nashville</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.tdrldriveway.com" rel="noopener noreferrer" target="_blank">TDRL Driveway</a>
<span className="text-neutral-700 font-geist">•</span>
</div>
<div aria-hidden="true" className="flex shrink-0 items-center gap-8 justify-around whitespace-nowrap animate-marquee group-hover:paused">
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://nativeblackcultivation.com/" rel="noopener noreferrer" target="_blank">Native Black Cultivation</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.arisechurchdecatur.org/" rel="noopener noreferrer" target="_blank">Arise Church Decatur</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.drlarhondac.com/" rel="noopener noreferrer" target="_blank">Dr. LaRhonda C</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://8020fitnessnashville.com/" rel="noopener noreferrer" target="_blank">80/20 Fitness Nashville</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://officehubhsv.com/" rel="noopener noreferrer" target="_blank">Office Hub HSV</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://partynridenashville.com/" rel="noopener noreferrer" target="_blank">Party &amp; Ride Nashville</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-400 hover:text-orange-400 transition-colors font-geist" href="https://www.tdrldriveway.com" rel="noopener noreferrer" target="_blank">TDRL Driveway</a>
<span className="text-neutral-700 font-geist">•</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/5">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
<p className="text-xs text-neutral-500 font-geist">
            © 2025 SeriousMindz AI. All rights reserved.
          </p>
<div className="flex items-center gap-4 flex-wrap justify-center">
<a className="text-xs text-neutral-500 hover:text-orange-400 transition-colors font-geist" href="https://www.seriousmindz.info/" rel="noopener noreferrer" target="_blank">Info</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-500 hover:text-orange-400 transition-colors font-geist" href="https://www.seriousmindz.com/" rel="noopener noreferrer" target="_blank">Main Site</a>
<span className="text-neutral-700 font-geist">•</span>
<a className="text-xs text-neutral-500 hover:text-orange-400 transition-colors font-geist" href="https://www.gohighlevel.com/?fp_ref=byfxe" rel="noopener noreferrer" target="_blank">GoHighLevel</a>
</div>
</div>
</div>
</footer>

<div className="hidden md:block fixed bottom-0 left-8 z-50 translate-y-2 hover:translate-y-0 transition-transform duration-300">
<a className="block bg-neutral-900 border-t border-x border-indigo-500/50 rounded-t-xl p-3 pb-4 shadow-[0_-10px_40px_-10px_rgba(99,102,241,0.25)] hover:shadow-[0_-10px_50px_-5px_rgba(99,102,241,0.4)] transition-all group" href="https://www.skool.com/seriousmindzaspire-ai-" target="_blank">
<div className="flex items-center gap-3">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-200 group-hover:text-white font-geist tracking-wide">Join Skool Community</span>
<svg className="lucide lucide-external-link text-indigo-400 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</a>
</div>



    </>
  );
}
