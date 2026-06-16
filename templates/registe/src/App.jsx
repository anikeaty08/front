import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Intersection Observer for scroll animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));

      // Animated counters
      function animateCounter(el) {
        const target = parseFloat(el.dataset.target || '0');
        const suffix = el.dataset.suffix || '';
        const decimals = parseInt(el.dataset.decimals || '0', 10);
        const duration = 1200;
        const start = performance.now();

        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const val = target * p;
          el.textContent = val.toFixed(decimals) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
      document.querySelectorAll('.counter').forEach(animateCounter);

      // Activity panel toggle
      const toggle = document.getElementById('activityToggle');
      const list = document.getElementById('activityList');
      const footer = document.getElementById('activityFooter');
      if (toggle) {
        toggle.addEventListener('click', () => {
          list.classList.toggle('hidden');
          footer.classList.toggle('hidden');
        });
      }

      // TLD chips quick-append
      const input = document.getElementById('domainInput');
      document.querySelectorAll('.tld-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
          if (!input) return;
          const tld = chip.dataset.tld || '';
          let value = (input.value || '').trim();

          // If value empty, start with 'yourbrand'
          if (!value) value = 'yourbrand';

          // Replace existing TLD or append
          value = value.replace(/(\.[a-z0-9-]+)?$/i, '') + tld;
          input.value = value;
          input.focus();
        });
      });

      // Domain search mock handler
      const form = document.getElementById('domainSearchForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const v = (input?.value || '').trim();
          if (!v) {
            input?.focus();
            return;
          }
          // Simple pulse to indicate search
          form.classList.add('ring-2','ring-white/30');
          setTimeout(()=> form.classList.remove('ring-2','ring-white/30'), 400);
        });
      }

      // WHOIS mock handler
      const whoisForm = document.getElementById('whoisForm');
      const whoisInput = document.getElementById('whoisInput');
      const whoisResult = document.getElementById('whoisResult');
      if (whoisForm && whoisInput && whoisResult) {
        whoisForm.addEventListener('submit', (e) => {
          e.preventDefault();
          if (!whoisInput.value.trim()) {
            whoisInput.focus();
            return;
          }
          whoisResult.classList.remove('hidden');
          whoisResult.innerHTML = '<div class="text-sm text-white/90">Fetching WHOIS data…</div>';
          setTimeout(() => {
            whoisResult.innerHTML = `
              <div class="space-y-2 text-sm">
                <div><span class="text-white/60">Domain:</span> <span class="text-white/90">${whoisInput.value.trim().toLowerCase()}</span></div>
                <div><span class="text-white/60">Status:</span> <span class="text-emerald-400">Available</span></div>
                <div><span class="text-white/60">WHOIS Privacy:</span> <span class="text-white/90">Supported</span></div>
              </div>
            `;
          }, 700);
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10">
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="krvLrHX3sj3cg8BHywDj"></div>

</div>

<div className="pointer-events-none fixed inset-0 -z-20">
<div className="absolute -top-32 -left-32 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.15),transparent_70%)] blur-3xl"></div>
<div className="absolute top-1/3 -right-32 h-[540px] w-[540px] rounded-full bg-[radial-gradient(circle_at_center,rgba(175,82,222,0.12),transparent_70%)] blur-3xl"></div>
<div className="absolute -bottom-32 left-1/4 h-[580px] w-[580px] rounded-full bg-[radial-gradient(circle_at_center,rgba(52,199,89,0.08),transparent_70%)] blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(1400px_600px_at_50%_0%,rgba(0,122,255,0.08),transparent),radial-gradient(1200px_500px_at_80%_100%,rgba(175,82,222,0.06),transparent)]"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 animate-fade-in delay-0 backdrop-blur-xl bg-black/20 border-b border-white/10" style={{animationPlayState: 'running'}}>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex lg:py-6 pt-4 pb-4 items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative">
<svg className="" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path>
</svg>
</div>
<span className="text-xl font-display font-semibold tracking-tight">
              registeo
            </span>
</a>
<nav className="hidden md:flex items-center gap-1 text-sm font-medium">
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#features">
              Domains
            </a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#transfer">
              Transfer
            </a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#whois">
              WHOIS
            </a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#pricing">
              Pricing
            </a>
<a className="px-4 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200" href="#support">
              Support
            </a>
</nav>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex h-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl">
              Sign In
            </button>
<button className="group relative inline-flex h-10 items-center justify-center rounded-xl bg-white px-5 text-sm font-semibold text-black hover:bg-white/90 transition-all duration-200 shadow-lg shadow-white/20">
<span className="relative z-10">Get Started</span>
<div className="absolute inset-0 rounded-xl bg-white opacity-0 blur-lg group-hover:opacity-20 transition-opacity"></div>
</button>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
<path d="M4 6h16"></path>
</svg>
</button>
</div>
</div>
</div>
</header>

<main className="">
<section className="relative lg:pt-32 lg:pb-24 pt-8 pb-32">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 xl:gap-16">

<div className="relative z-10 lg:col-span-6 xl:col-span-5">
<div className="animate-slide-up delay-200 mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse" style={{animationPlayState: 'running'}}></span>
<span className="text-xs font-medium">Instant Domain Search</span>
</div>
<div className="h-4 w-px bg-white/20"></div>
<span className="text-xs">.com $9.99/yr • Free privacy</span>
</div>
<h1 className="animate-slide-up delay-300 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] mb-6 font-geist font-light tracking-tighter" style={{animationPlayState: 'running'}}>
                Find your perfect
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">
                  domain name
                </span>
</h1>
<p className="animate-slide-up delay-500 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/70 mb-6" style={{animationPlayState: 'running'}}>
                Secure your brand in seconds. Search, register, and transfer
                domains with transparent pricing, free WHOIS privacy, and
                powerful DNS tools.
              </p>

<form className="animate-slide-up delay-600 w-full mb-6" id="domainSearchForm" style={{animationPlayState: 'running'}}>
<div className="flex items-stretch gap-2">
<div className="relative flex-1">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</span>
<input autocomplete="off" className="w-full rounded-2xl border border-white/15 bg-white/5 pl-10 pr-4 py-4 text-base outline-none focus:border-white/25 focus:bg-white/10 transition-colors placeholder:text-white/40" id="domainInput" placeholder="Search domain — e.g. yourbrand.com" type="text"/>
</div>
<button className="rounded-2xl bg-white text-black px-6 py-4 text-base font-semibold hover:bg-white/90 transition-colors" type="submit">
                    Search
                  </button>
</div>
<div className="mt-3 flex flex-wrap items-center gap-2">
<button className="tld-chip inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:border-white/25 transition" data-tld=".com" type="button">
                    .com $9.99
                  </button>
<button className="tld-chip inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:border-white/25 transition" data-tld=".net" type="button">
                    .net $11.99
                  </button>
<button className="tld-chip inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:border-white/25 transition" data-tld=".org" type="button">
                    .org $8.99
                  </button>
<button className="tld-chip inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:border-white/25 transition" data-tld=".io" type="button">
                    .io $39.99
                  </button>
<button className="tld-chip inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 hover:border-white/25 transition" data-tld=".ai" type="button">
                    .ai $69.99
                  </button>
</div>
</form>
<div className="animate-slide-up delay-700 flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{animationPlayState: 'running'}}>
<button className="group relative inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-black hover:bg-white/90 transition-all duration-300 shadow-2xl shadow-white/20">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path>
</svg>
<span>Search Domains</span>
<div className="absolute inset-0 rounded-2xl bg-white opacity-0 blur-xl group-hover:opacity-25 transition-opacity"></div>
</button>
<button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h20"></path>
<path d="M12 2v20"></path>
</svg>
<span>Transfer Domain</span>
</button>
</div>

<div className="animate-slide-up delay-900 grid grid-cols-3 gap-8 mt-12" id="statsContainer" style={{animationPlayState: 'running'}}>
<div>
<div className="text-2xl text-white font-geist font-light tracking-tighter">
<span className="counter" data-suffix="+" data-target="3200000">
                      0
                    </span>
</div>
<div className="text-sm text-white/60 mt-1">
                    Domains registered
                  </div>
</div>
<div>
<div className="text-2xl text-white font-geist font-light tracking-tighter">
<span className="counter" data-suffix="+" data-target="600">
                      0
                    </span>
</div>
<div className="text-sm text-white/60 mt-1">TLDs</div>
</div>
<div>
<div className="text-2xl text-white font-geist font-light tracking-tighter">
<span className="counter" data-decimals="1" data-suffix="%" data-target="98.0">
                      0
                    </span>
</div>
<div className="text-sm text-white/60 mt-1">Transfer success</div>
</div>
</div>
</div>

<div className="relative lg:col-span-6 xl:col-span-7">

<div className="animate-blur-in delay-500 relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 ring-1 ring-white/5 shadow-2xl shadow-black/40" style={{animationPlayState: 'running'}}>
<img alt="Global domain network visualization" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

<div className="glow-light"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="rounded-xl bg-black/40 p-3 backdrop-blur-xl ring-1 ring-white/10">
<div className="text-sm font-medium text-white">
                      Limited-time deal
                    </div>
<div className="text-xs text-white/70 mt-0.5">
                      .com $9.99/yr • Free WHOIS privacy
                    </div>
</div>
</div>
</div>

<div className="animate-slide-up delay-1100 absolute -bottom-16 right-0 w-full max-w-sm lg:absolute lg:right-0 lg:top-8 lg:-bottom-auto lg:w-80" style={{animationPlayState: 'running'}}>
<div className="relative shadow-black/40 ring-1 ring-white/10 bg-white/20 border-white/15 border rounded-2xl mr-5 pt-5 pr-5 pb-5 pl-5 shadow-2xl backdrop-blur-3xl" style={{background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(40px)', border: '1px solid rgba(255, 255, 255, 0.18)', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'}}>
<div className="flex items-center justify-between">
<div className="flex gap-3 items-center">
<div className="inline-flex h-9 w-9 ring-1 ring-white/20 bg-neutral-50/20 rounded-xl items-center justify-center">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path>
</svg>
</div>
<h3 className="text-base font-display font-semibold">
                        Recent Activity
                      </h3>
</div>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors" id="activityToggle">
<svg className="stroke-[1.5] w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>
<div className="space-y-3 hidden" id="activityList">

<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate">
                          brandnova.com registered
                        </p>
<p className="text-xs text-white/60">
                          1 min ago • New registration
                        </p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
<svg className="h-3 w-3 text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bring-white/20 bg-neutral-50/20 rounded-xl shadow-lg flex-shrink-0">
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M7 8l-4 4 4 4"></path>
<path d="M17 16l4-4-4-4"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate">
                          Transferred pixelhub.io
                        </p>
<p className="text-xs text-white/60">
                          5 mins ago • Transfer in
                        </p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></div>
</div>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/8 transition-all duration-200">
<div className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl ring-white/20 bg-neutral-50/20 rounded-xl ring-1 ring-white/15 shadow-lg flex-shrink-0">
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22V2"></path>
<path d="M2 12h20"></path>
<path d="M6 6h0"></path>
<path d="M18 6h0"></path>
<path d="M6 18h0"></path>
<path d="M18 18h0"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm font-medium text-white truncate">
                          DNS updated for craftly.org
                        </p>
<p className="text-xs text-white/60">
                          8 mins ago • DNS change
                        </p>
</div>
<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-5 w-5 sm:h-6 sm:w-6 rounded bg-green-500/20 flex items-center justify-center">
<svg className="h-3 w-3 text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 hidden" id="activityFooter">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                      Register another domain
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              Everything you need to
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">
                manage your domains
              </span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              Transparent pricing, free WHOIS privacy, powerful DNS, and
              lightning-fast transfers — all in one place.
            </p>
</div>
<div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 lg:p-8 ring-1 ring-white/5 shadow-2xl shadow-black/40">
<div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Transparent pricing" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="M3 12h18"></path>
</svg>
</button>
</div>
</div>
<div>
<h3 className="text-xl font-display font-semibold tracking-tight mb-3">
                    Transparent Pricing
                  </h3>
<p className="text-white/70 leading-relaxed mb-6">
                    No hidden fees. Renewals you can plan for. Great deals on
                    .com, .net, .org, .io, .ai and 600+ more.
                  </p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
                    View TLDs
                  </button>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Privacy and DNS" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</button>
</div>
</div>
<div>
<h3 className="text-xl font-display font-semibold tracking-tight mb-3">
                    Free Privacy &amp; DNS
                  </h3>
<p className="text-white/70 leading-relaxed mb-6">
                    WHOIS privacy included on eligible TLDs, with global Anycast
                    DNS, URL/Email forwarding, and DNSSEC.
                  </p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 21a8 8 0 0 0-16 0"></path>
<circle cx="10" cy="8" r="5"></circle>
</svg>
                    Learn more
                  </button>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="relative h-48 lg:h-52 overflow-hidden rounded-xl ring-1 ring-white/10 mb-6">
<img alt="Fast transfers" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-xl hover:bg-white/25 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M7 8l-4 4 4 4"></path>
<path d="M17 16l4-4-4-4"></path>
</svg>
</button>
</div>
</div>
<div>
<h3 className="text-xl font-display font-semibold tracking-tight mb-3">
                    Lightning‑Fast Transfers
                  </h3>
<p className="text-white/70 leading-relaxed mb-6">
                    Simple, guided transfers with zero downtime and automatic
                    year extension on eligible TLDs.
                  </p>
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-200">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105"></path>
<path d="M3 12h18"></path>
</svg>
                    Start transfer
                  </button>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="gallery">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              Popular TLDs and
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">
                limited‑time deals
              </span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              Choose from hundreds of extensions — from classics to new generics
              and country codes.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt=".com TLD" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">.com</h4>
<p className="text-xs text-white/70">
                    From $9.99/yr • Best for businesses
                  </p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt=".net TLD" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">.net</h4>
<p className="text-xs text-white/70">
                    From $11.99/yr • Networks &amp; tech
                  </p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt=".org TLD" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">.org</h4>
<p className="text-xs text-white/70">
                    From $8.99/yr • Communities &amp; non‑profits
                  </p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5 md:col-span-2">
<img alt=".io TLD" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 ring-1 ring-white/10">
<h4 className="text-lg font-semibold text-white mb-2">.io</h4>
<p className="text-sm text-white/70 max-w-md">
                    From $39.99/yr • Startups and modern apps love .io for its
                    short, tech-forward identity.
                  </p>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 ring-1 ring-white/5">
<img alt=".ai TLD" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526378722323-4ae9b3f222e1?w=1200&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="bg-black/40 backdrop-blur-xl rounded-xl p-4 ring-1 ring-white/10">
<h4 className="font-semibold text-white mb-1">.ai</h4>
<p className="text-xs text-white/70">
                    From $69.99/yr • AI startups &amp; research
                  </p>
</div>
</div>
</div>
</div>
<div className="text-center">
<button className="group inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl">
<svg className="h-5 w-5 stroke-[1.5]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
<span>Browse all TLDs</span>
</button>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32 in-view" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              Trusted by
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-geist font-light tracking-tighter">
                builders and brands
              </span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              See why creators and teams move their domains to registeo.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6">
                  "Switching my portfolio to registeo took minutes. Pricing is
                  clear, privacy is free, and DNS changes are instant."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Sarah Chen" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://image.pollinations.ai/prompt/AI%20generated%20tech%20founder%20portrait%2C%20dark%20UI%20lighting%2C%20neon%20edge%20glow%2C%201%3A1%2C%20black%20background%2C%20high%20detail?width=256&amp;height=256&amp;nologo=true"/>
<div>
<div className="font-semibold text-white">Sarah Chen</div>
<div className="text-sm text-white/60">Founder, Orbital Labs</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6">
                  "We moved 40+ domains in one afternoon. The transfer wizard is
                  foolproof and DNS propagation was blazing fast."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Miguel Alvarez" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="font-semibold text-white">Miguel Alvarez</div>
<div className="text-sm text-white/60">CTO, NovaStack</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-500">
<div className="mb-6">
<div className="flex text-yellow-400 mb-4">
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-white/90 leading-relaxed mb-6">
                  "Their UI is gorgeous, support is instant, and the WHOIS
                  privacy being free is the cherry on top."
                </blockquote>
</div>
<div className="flex items-center gap-4">
<img alt="Lina Park" className="h-12 w-12 rounded-full ring-2 ring-white/20 object-cover" src="https://image.pollinations.ai/prompt/AI%20generated%20product%20designer%20portrait%2C%20dark%20UI%20cinematic%20lighting%2C%20neon%20purple%20rim%20light%2C%201%3A1%2C%20high%20detail?width=256&amp;height=256&amp;nologo=true"/>
<div>
<div className="font-semibold text-white">Lina Park</div>
<div className="text-sm text-white/60">
                    Product Designer, StudioPixel
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              Simple, transparent
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                pricing
              </span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
              Fair renewals, free WHOIS privacy on eligible TLDs, and powerful
              DNS included.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 ring-1 ring-white/5 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-display font-semibold">Registration</h3>
<span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  Best value
                </span>
</div>
<div className="mb-6">
<div className="text-4xl font-geist font-light tracking-tight">
                  $9.99
                </div>
<div className="text-white/60 text-sm">
                  per year • .com introductory rate
                </div>
</div>
<ul className="space-y-3 text-white/80 text-sm">
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  Free WHOIS privacy (eligible TLDs)
                </li>
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  Global Anycast DNS
                </li>
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  DNSSEC, URL &amp; Email Forwarding
                </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition">
                Register a domain
              </button>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 ring-1 ring-white/5 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-display font-semibold">Transfer</h3>
<span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  Most popular
                </span>
</div>
<div className="mb-6">
<div className="text-4xl font-geist font-light tracking-tight">
                  $9.99
                </div>
<div className="text-white/60 text-sm">
                  includes +1 year on eligible TLDs
                </div>
</div>
<ul className="space-y-3 text-white/80 text-sm">
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  Zero downtime transfers
                </li>
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  Guided, automated process
                </li>
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  Instant DNS import
                </li>
</ul>
<a className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition" href="#transfer">
                Start a transfer
              </a>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-8 ring-1 ring-white/5 backdrop-blur-xl hover:from-white/12 hover:to-white/6 transition-all duration-300">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-display font-semibold">Managed DNS</h3>
<span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  Included
                </span>
</div>
<div className="mb-6">
<div className="text-4xl font-geist font-light tracking-tight">
                  Free
                </div>
<div className="text-white/60 text-sm">with every domain</div>
</div>
<ul className="space-y-3 text-white/80 text-sm">
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  Anycast network • 40+ PoPs
                </li>
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  ALIAS, CAA, SRV, TXT, MX support
                </li>
<li className="flex items-start gap-3">
<span className="text-green-400 mt-0.5">✓</span>
                  DNS templates &amp; API access
                </li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition">
                Explore DNS
              </button>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32" id="transfer">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
                Move your domains
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  without downtime
                </span>
</h2>
<p className="text-white/70 text-lg leading-relaxed mb-6">
                Our guided transfer keeps your site online, imports your DNS,
                and extends your registration by one year on eligible TLDs.
              </p>
<ol className="space-y-4 text-white/90">
<li className="flex gap-4">
<span className="h-7 w-7 rounded-full bg-white text-black font-semibold flex items-center justify-center text-sm">
                    1
                  </span>
                  Unlock your domain and get the authorization code from your
                  current registrar.
                </li>
<li className="flex gap-4">
<span className="h-7 w-7 rounded-full bg-white text-black font-semibold flex items-center justify-center text-sm">
                    2
                  </span>
                  Enter your domain and auth code, then confirm contact details.
                </li>
<li className="flex gap-4">
<span className="h-7 w-7 rounded-full bg-white text-black font-semibold flex items-center justify-center text-sm">
                    3
                  </span>
                  Approve the transfer email — we handle the rest automatically.
                </li>
</ol>
<a className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition" href="#pricing">
                Start transfer
              </a>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5">
<img alt="Domain transfer wizard UI" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32" id="whois">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
                Fast
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                  WHOIS lookup
                </span>
</h2>
<p className="text-white/70 text-lg leading-relaxed mb-6">
                Check domain availability and ownership details. We protect your
                personal data with free WHOIS Privacy where supported.
              </p>
<form className="space-y-3" id="whoisForm">
<div className="relative">
<span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/50">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</span>
<input aria-label="WHOIS domain input" className="w-full rounded-2xl border border-white/15 bg-white/5 pl-10 pr-4 py-4 text-base outline-none focus:border-white/25 focus:bg-white/10 transition-colors placeholder:text-white/40" id="whoisInput" placeholder="Enter a domain — e.g. studio.dev" type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-2xl bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition" type="submit">
                  Lookup
                </button>
</form>
<div className="mt-6 hidden rounded-xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5" id="whoisResult">
<div className="text-sm text-white/90">Fetching WHOIS data…</div>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5">
<img alt="WHOIS results interface" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32" id="support">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-geist font-light tracking-tighter">
              World‑class
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                support
              </span>
</h2>
<p className="max-w-2xl mx-auto text-lg text-white/70">
              24/7 help from domain experts via chat and email. Fast answers,
              clear guidance.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-white/90 font-medium">
                    How long does a transfer take?
                  </span>
<span className="ml-4 rounded-lg border border-white/10 bg-white/10 p-1.5 transition group-open:rotate-45">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v10M7 8h10"></path>
</svg>
</span>
</summary>
<p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Most transfers complete within 5–7 days depending on the TLD
                  and current registrar. Approving the confirmation email
                  typically speeds this up.
                </p>
</details>
<div className="my-4 h-px bg-white/10"></div>
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-white/90 font-medium">
                    Do you include WHOIS privacy?
                  </span>
<span className="ml-4 rounded-lg border border-white/10 bg-white/10 p-1.5 transition group-open:rotate-45">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v10M7 8h10"></path>
</svg>
</span>
</summary>
<p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Yes, WHOIS Privacy is free on all eligible TLDs. Some
                  registries may not support privacy due to policy.
                </p>
</details>
<div className="my-4 h-px bg-white/10"></div>
<details className="group">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-white/90 font-medium">
                    Can I use your DNS with domains elsewhere?
                  </span>
<span className="ml-4 rounded-lg border border-white/10 bg-white/10 p-1.5 transition group-open:rotate-45">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v10M7 8h10"></path>
</svg>
</span>
</summary>
<p className="mt-3 text-white/70 text-sm leading-relaxed">
                  Absolutely. Add your domain to registeo and update nameservers
                  to use our Anycast DNS globally.
                </p>
</details>
</div>
<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-white/4 p-6 backdrop-blur-xl">
<div className="flex items-center gap-4 mb-6">
<img alt="Support dashboard" className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="font-semibold">Talk to a domain expert</div>
<div className="text-sm text-white/60">
                    Average first reply under 5 minutes
                  </div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-5 py-3 text-sm font-semibold hover:bg-white/90 transition" href="#">
                  Live chat
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition" href="mailto:support@registeo.example">
                  Email us
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition" href="#">
                  Status page
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition" href="#">
                  API docs
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-animate relative py-20 lg:py-32">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 ring-1 ring-white/5">
<div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.25),transparent_60%)] blur-3xl"></div>
<div className="absolute -left-10 -bottom-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(175,82,222,0.2),transparent_60%)] blur-3xl"></div>
<div className="relative">
<h3 className="text-3xl sm:text-4xl font-geist font-light tracking-tighter mb-4">
                Ready to claim your name?
              </h3>
<p className="text-white/70 mb-8 max-w-2xl">
                Search, register, and manage domains in minutes with transparent
                pricing and powerful tools.
              </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition" href="#features">
                  Get started
                </a>
<a className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/25 transition" href="#pricing">
                  View pricing
                </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div>
<div className="flex items-center gap-3 mb-4">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="28" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path>
</svg>
<span className="text-lg font-display font-semibold">registeo</span>
</div>
<p className="text-white/60 text-sm">
              Register, transfer, and manage domains with privacy and powerful
              DNS — all in one place.
            </p>
</div>
<div>
<div className="text-white font-medium mb-4">Product</div>
<ul className="space-y-2 text-white/70 text-sm">
<li><a className="hover:text-white" href="#features">Domains</a></li>
<li><a className="hover:text-white" href="#transfer">Transfer</a></li>
<li><a className="hover:text-white" href="#whois">WHOIS</a></li>
<li><a className="hover:text-white" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-white font-medium mb-4">Company</div>
<ul className="space-y-2 text-white/70 text-sm">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#support">Support</a></li>
<li><a className="hover:text-white" href="#">Status</a></li>
</ul>
</div>
<div>
<div className="text-white font-medium mb-4">Legal</div>
<ul className="space-y-2 text-white/70 text-sm">
<li><a className="hover:text-white" href="#">Terms</a></li>
<li><a className="hover:text-white" href="#">Privacy</a></li>
<li><a className="hover:text-white" href="#">Acceptable Use</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="text-xs text-white/50">
            ©
            <span id="year"></span>
            registeo. All rights reserved.
          </div>
<div className="flex items-center gap-3">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<svg className="text-white/80" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 5.8c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.1-.7.4-1.6.8-2.4 1-1.4-1.4-3.9-1.3-5.2.1-1 1-1.4 2.4-1 3.7-3.1-.2-5.9-1.7-7.8-4.1-.9 1.6-.4 3.7 1.2 4.7-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.6 3.1 4-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8-1.6 1.2-3.6 1.8-5.6 1.5 2 1.3 4.4 2 6.8 2 8.1 0 12.6-6.9 12.3-13.1.9-.7 1.5-1.3 1.9-2.1z"></path>
</svg>
</a>
<a aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition" href="#">
<svg className="text-white/80" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-2c-2.8.6-3.3-1.2-3.3-1.2-.4-1.1-1-1.4-1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1 .9-.3 1.8-.4 2.7-.4.9 0 1.8.1 2.7.4 1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.8-2.4 4.6-4.6 4.9.4.3.8.9.8 1.9v2.8c0 .3.2.7.7.5 4-1.3 6.9-5.1 6.9-9.6C22 6.6 17.5 2 12 2z"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
