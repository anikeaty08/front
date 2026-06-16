import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
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
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


              (function() {
                const testimonials = document.querySelectorAll('[data-testimonial-index]');
                const quoteEl = document.getElementById('testimonial-quote');
                const authorEl = document.getElementById('testimonial-author');

                testimonials.forEach(function(thumbnail) {
                  thumbnail.addEventListener('click', function() {
                    // Remove active state from all
                    testimonials.forEach(function(t) {
                      const isActive = t.getAttribute('data-active') === 'true';
                      t.removeAttribute('data-active');

                      if (isActive) {
                        t.classList.remove('h-9', 'w-9', 'sm:h-14', 'sm:w-14', 'sm:h-16', 'sm:w-16', 'md:h-16', 'md:w-16', 'ring-2', 'ring-white/20', 'shadow-lg');
                        t.classList.add('h-8', 'w-8', 'sm:h-12', 'sm:w-12', 'md:h-14', 'md:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
                      }
                    });

                    // Set clicked as active
                    thumbnail.setAttribute('data-active', 'true');
                    thumbnail.classList.remove('h-8', 'w-8', 'sm:h-12', 'sm:w-12', 'md:h-14', 'md:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
                    thumbnail.classList.add('h-9', 'w-9', 'sm:h-14', 'sm:w-14', 'md:h-16', 'md:w-16', 'ring-2', 'ring-white/20', 'shadow-lg');

                    // Fade out
                    quoteEl.style.opacity = '0';
                    authorEl.style.opacity = '0';

                    setTimeout(function() {
                      // Update content
                      var quote = thumbnail.getAttribute('data-testimonial-quote');
                      var name = thumbnail.getAttribute('data-testimonial-name');
                      var role = thumbnail.getAttribute('data-testimonial-role');

                      quoteEl.querySelector('p').innerHTML = quote;
                      authorEl.querySelector('p').innerHTML = name + ' <span class="text-slate-400 font-normal font-geist">' + role + '</span>';

                      // Fade in
                      quoteEl.style.opacity = '1';
                      authorEl.style.opacity = '1';
                    }, 250);
                  });
                });
              })();
            


        (function() {
          const testimonials = document.querySelectorAll('[data-testimonial-index]');
          const quoteEl = document.getElementById('testimonial-quote');
          const authorEl = document.getElementById('testimonial-author');

          testimonials.forEach(function(thumbnail) {
            thumbnail.addEventListener('click', function() {
              // Remove active state from all
              testimonials.forEach(function(t) {
                t.removeAttribute('data-active');
                t.classList.remove('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-white/20', 'shadow-lg');
                t.classList.add('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
              });

              // Set clicked as active
              thumbnail.setAttribute('data-active', 'true');
              thumbnail.classList.remove('h-12', 'w-12', 'sm:h-14', 'sm:w-14', 'ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
              thumbnail.classList.add('h-14', 'w-14', 'sm:h-16', 'sm:w-16', 'ring-2', 'ring-white/20', 'shadow-lg');

              // Fade out
              quoteEl.style.opacity = '0';
              authorEl.style.opacity = '0';

              setTimeout(function() {
                // Update content
                var quote = thumbnail.getAttribute('data-testimonial-quote');
                var name = thumbnail.getAttribute('data-testimonial-name');
                var role = thumbnail.getAttribute('data-testimonial-role');

                quoteEl.querySelector('p').innerHTML = quote;
                authorEl.querySelector('p').innerHTML = name + ' <span class="text-slate-400 font-normal font-geist">' + role + '</span>';

                // Fade in
                quoteEl.style.opacity = '1';
                authorEl.style.opacity = '1';
              }, 250);
            });
          });
        })();
      


        (function() {
          const pricing = {
            monthly: {
              starter: { price: '$12', period: '/ mo', billing: 'Billed monthly per user' },
              pro: { price: '$39', period: '/ mo', billing: 'Billed monthly per user' },
              business: { price: '$99', period: '/ mo', billing: 'Billed monthly per user' }
            },
            yearly: {
              starter: { price: '$115', period: '/ yr', billing: 'Billed yearly per user (save 20%)' },
              pro: { price: '$374', period: '/ yr', billing: 'Billed yearly per user (save 20%)' },
              business: { price: '$950', period: '/ yr', billing: 'Billed yearly per user (save 20%)' }
            }
          };

          let currentBilling = 'monthly';

          const monthlyToggle = document.getElementById('monthly-toggle');
          const yearlyToggle = document.getElementById('yearly-toggle');
          const monthlyRadio = document.getElementById('monthly-radio');
          const yearlyRadio = document.getElementById('yearly-radio');
          const monthlyRadioInner = document.getElementById('monthly-radio-inner');
          const yearlyRadioInner = document.getElementById('yearly-radio-inner');

          function updatePricing(billingType) {
            currentBilling = billingType;

            // Update all prices
            document.querySelectorAll('[data-price]').forEach(function(el) {
              const plan = el.getAttribute('data-price');
              el.textContent = pricing[billingType][plan].price;
            });

            // Update all periods
            document.querySelectorAll('[data-period]').forEach(function(el) {
              el.textContent = pricing[billingType].starter.period;
            });

            // Update all billing text
            document.querySelectorAll('[data-billing-text]').forEach(function(el) {
              const parentArticle = el.closest('article');
              const priceEl = parentArticle.querySelector('[data-price]');
              const plan = priceEl.getAttribute('data-price');
              el.textContent = pricing[billingType][plan].billing;
            });

            // Update toggle styling
            if (billingType === 'monthly') {
              // Monthly active
              monthlyToggle.classList.add('ring-blue-400/30', 'bg-blue-500/10');
              monthlyToggle.classList.remove('bg-transparent', 'ring-white/10');
              monthlyRadio.classList.add('ring-blue-300/50');
              monthlyRadio.classList.remove('ring-white/20');
              monthlyRadioInner.classList.add('bg-blue-400');
              monthlyRadioInner.classList.remove('bg-transparent');

              // Yearly inactive
              yearlyToggle.classList.add('bg-transparent', 'ring-white/10');
              yearlyToggle.classList.remove('ring-blue-400/30', 'bg-blue-500/10');
              yearlyRadio.classList.add('ring-white/20');
              yearlyRadio.classList.remove('ring-blue-300/50');
              yearlyRadioInner.classList.add('bg-transparent');
              yearlyRadioInner.classList.remove('bg-blue-400');
            } else {
              // Yearly active
              yearlyToggle.classList.add('ring-blue-400/30', 'bg-blue-500/10');
              yearlyToggle.classList.remove('bg-transparent', 'ring-white/10');
              yearlyRadio.classList.add('ring-blue-300/50');
              yearlyRadio.classList.remove('ring-white/20');
              yearlyRadioInner.classList.add('bg-blue-400');
              yearlyRadioInner.classList.remove('bg-transparent');

              // Monthly inactive
              monthlyToggle.classList.add('bg-transparent', 'ring-white/10');
              monthlyToggle.classList.remove('ring-blue-400/30', 'bg-blue-500/10');
              monthlyRadio.classList.add('ring-white/20');
              monthlyRadio.classList.remove('ring-blue-300/50');
              monthlyRadioInner.classList.add('bg-transparent');
              monthlyRadioInner.classList.remove('bg-blue-400');
            }
          }

          monthlyToggle.addEventListener('click', function() {
            updatePricing('monthly');
          });

          yearlyToggle.addEventListener('click', function() {
            updatePricing('yearly');
          });
        })();
      


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="XxCmD31vVBmiINgvYCho"></div>

</div>


<header className="px-4 sm:px-6 md:px-10 w-full max-w-7xl mt-4 sm:mt-6 mx-auto relative [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="flex items-center justify-between gap-4">
<div className="flex gap-2 items-center">
<a className="inline-flex items-center justify-center h-[40px] w-[110px] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/628c9aa3-73d4-417b-ad64-3ecdd0f0c7a2_1600w.png)] bg-cover rounded mix-blend-screen" href="#"></a>
</div>
<nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors font-medium font-geist" href="#features" style={{}}>
            Features
          </a>
<a className="hover:text-white transition-colors font-medium font-geist" href="#automation" style={{}}>
            Automation
          </a>
<a className="hover:text-white transition-colors font-medium font-geist" href="#integrations" style={{}}>
            Integrations
          </a>
<a className="hover:text-white transition-colors font-medium font-geist" href="#pricing" style={{}}>
            Pricing
          </a>
<a className="hover:text-white transition-colors font-medium font-geist" href="#resources" style={{}}>
            Resources
          </a>
</nav>
<div className="flex gap-2 items-center">
<div className="hidden lg:flex items-center w-[320px] rounded-full ring-1 ring-white/10 bg-white/5 px-3 h-10 backdrop-blur">
<svg className="w-4 h-4 text-neutral-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="flex-1 bg-transparent outline-none text-sm text-neutral-200 placeholder:text-neutral-500 px-2" placeholder="Search tasks, workflows, or commands…"/>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/10 bg-white/10 text-white hover:bg-white/15">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
<a className="hidden md:inline-flex items-center justify-center hover:bg-white/15 h-10 text-sm font-medium text-white bg-white/10 border-white/10 border rounded-full pr-4 pl-4 font-geist" href="#signin" style={{}}>
            Sign in
          </a>
</div>
</div>
</header>
<div className="relative">

<section className="z-10 mt-12 sm:mt-16 md:mt-20 mb-16 sm:mb-20 pt-0 pb-0 relative">
<div className="md:pt-12 text-center max-w-full mr-auto ml-auto pt-10 pr-6 pl-6">
<h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#d5c4ff] font-geist font-light tracking-tighter" style={{}}>
              Your All-in-One
            </span>
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#cbb4ff] font-geist font-light tracking-tighter" style={{}}>
              AI Productivity Hub
            </span>
</h1>
<p className="md:text-lg text-base text-slate-300 max-w-2xl mt-5 mr-auto ml-auto [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll font-geist" style={{}}>
            Manage tasks, organize meetings, and boost productivity with
            intelligent automation.
            <span className="text-slate-200 font-geist" style={{}}>
              Everything you need in one place.
            </span>
</p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 items-center justify-center [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<a className="group inline-flex items-center justify-center gap-3 shadow-neutral-900/20 transition duration-200 ease-out hover:-translate-y-0.5 overflow-hidden text-base font-medium text-white bg-gradient-to-br from-[#3d81f0] to-[#0c118d] rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-lg" href="#get-started" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(117, 170, 255, 1), rgba(7, 31, 70, 1))', -BorderRadiusBefore: '9999px'}}>
<span className="group-hover:opacity-100 transition duration-300 bg-gradient-to-tr from-violet-500/20 to-fuchsia-400/10 opacity-0 absolute top-0 right-0 bottom-0 left-0"></span>
<span className="relative z-10 font-geist" style={{}}>Get Started</span>
</a>
<a className="inline-flex items-center justify-center hover:bg-white/15 transition text-base font-medium text-neutral-200 bg-gradient-to-br from-white/20 to-white/0 rounded-full px-6 py-3 font-geist" href="#learn-more" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '9999px'}}>
              Learn More
            </a>
</div>
</div>
</section>
</div>

<div className="mr-auto ml-auto [animation:fadeSlideIn_0.8s_ease-out_0.8s_both]" style={{maxWidth: '1200px', transform: 'translateY(clamp(24px, 6vh, 80px))', position: 'relative', zIndex: '5'}}></div>

<section className="sm:px-6 lg:px-8 lg:pt-12 lg:pb-12 z-10 sm:pt-24 md:pt-32 sm:pb-20 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-16 pl-4 relative" id="features">
<div className="overflow-hidden sm:p-6 md:p-8 sm:rounded-3xl [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] bg-neutral-950/80 rounded-2xl ring-neutral-800 ring-1 pt-4 pr-4 pb-4 pl-4 relative backdrop-blur">
<div className="flex px-3 sm:px-6 border-white/10 border-b pt-3 pr-2 sm:pr-4 pb-3 pl-2 sm:pl-4 items-center justify-between gap-2 flex-wrap">
<div className="flex items-center gap-2">
<div className="hidden sm:block">
<p className="text-sm font-medium text-white tracking-tight font-geist" style={{}}>
                Nura Planner
              </p>
<p className="text-[11px] text-slate-400 font-geist" style={{}}>
                November 2025
              </p>
</div>
</div>
<div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-wrap">
<div className="hidden md:flex items-center gap-2 h-10 rounded-lg border border-white/10 bg-white/5 pl-3 pr-3">
<svg className="h-4 w-4 text-slate-300 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="h-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none text-slate-200 w-56" placeholder="Search your schedule…" type="text"/>
</div>
<button className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-slate-200">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
<span className="hidden sm:block font-geist" style={{}}>Prev</span>
</button>
<button className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-slate-200">
<span className="hidden sm:block font-geist" style={{}}>Next</span>
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-slate-200 font-geist" style={{}}>
                AdaFlow Workspace
                <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<img alt="User Avatar" className="ml-2 hidden sm:block h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ea777f21-df8c-431d-956a-57390ff9e591_320w.jpg"/>
</div>
</div>
<div className="flex">
<aside className="hidden lg:block w-64 xl:w-72 border-white/10 border-r pt-4 pr-3 pb-4 pl-3">
<div className="bg-white/5 border-white/10 border rounded-xl pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
<svg className="h-4 w-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="text-sm font-medium tracking-tight text-white font-geist" style={{}}>
                  November 2025
                </div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5">
<svg className="h-4 w-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
<div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] text-slate-400">
<span className="font-geist" style={{}}>Su</span>
<span className="font-geist" style={{}}>Mo</span>
<span className="font-geist" style={{}}>Tu</span>
<span className="font-geist" style={{}}>We</span>
<span className="font-geist" style={{}}>Th</span>
<span className="font-geist" style={{}}>Fr</span>
<span className="font-geist" style={{}}>Sa</span>
</div>
<div className="mt-2 grid grid-cols-7 gap-1 text-center">
<span className="py-1 text-[12px] text-slate-500 font-geist" style={{}}>
                  26
                </span>
<span className="py-1 text-[12px] text-slate-500 font-geist" style={{}}>
                  27
                </span>
<span className="py-1 text-[12px] text-slate-500 font-geist" style={{}}>
                  28
                </span>
<span className="py-1 text-[12px] text-slate-500 font-geist" style={{}}>
                  29
                </span>
<span className="py-1 text-[12px] text-slate-500 font-geist" style={{}}>
                  30
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  1
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  2
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  3
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  4
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  5
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  6
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  7
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  8
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  9
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  10
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  11
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  12
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  13
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  14
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  15
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  16
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  17
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  18
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  19
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  20
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  21
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  22
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  23
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  24
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  25
                </span>
<span className="py-1 text-[12px] text-white rounded-md bg-gradient-to-r from-violet-500/40 to-fuchsia-600/40 ring-1 ring-white/10 font-geist" style={{}}>
                  26
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  27
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  28
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  29
                </span>
<span className="py-1 text-[12px] text-slate-300 font-geist" style={{}}>
                  30
                </span>
</div>
</div>
<div className="mt-5">
<p className="mb-2 text-sm font-medium tracking-tight text-white font-geist" style={{}}>
                Linked Calendars
              </p>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-sm text-slate-200 font-geist" style={{}}>
                      Work
                    </span>
</div>
<button className="relative h-5 w-9 rounded-full bg-white/10 ring-1 ring-white/10 transition">
<span className="absolute left-4 top-0.5 h-4 w-4 rounded-full bg-white shadow transition"></span>
</button>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-sky-400"></span>
<span className="text-sm text-slate-200 font-geist" style={{}}>
                      Personal
                    </span>
</div>
<button className="relative h-5 w-9 rounded-full bg-white/10 ring-1 ring-white/10 transition">
<span className="absolute left-4 top-0.5 h-4 w-4 rounded-full bg-white shadow transition"></span>
</button>
</div>
<div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-fuchsia-400"></span>
<span className="text-sm text-slate-200 font-geist" style={{}}>
                      Team
                    </span>
</div>
<button className="relative h-5 w-9 rounded-full bg-white/10 ring-1 ring-white/10 transition">
<span className="absolute left-1 top-0.5 h-4 w-4 rounded-full bg-white shadow transition"></span>
</button>
</div>
</div>
</div>
<div className="mt-6">
<p className="mb-2 text-sm font-medium tracking-tight text-white font-geist" style={{}}>
                Next Up
              </p>
<div className="space-y-2">
<div className="flex items-start gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
<input className="mt-1 h-4 w-4 accent-violet-500" type="checkbox"/>
<div className="">
<p className="text-sm text-slate-200 font-geist" style={{}}>
                      Prep monthly review deck
                    </p>
<p className="text-xs text-slate-400 font-geist" style={{}}>
                      Today • 2:00 PM
                    </p>
</div>
</div>
</div>
</div>
</aside>
<div className="min-w-0 flex-1 p-2 sm:p-3 md:p-4">
<div className="overflow-x-auto">
<div className="w-full">
<div className="grid gap-1 sm:gap-2 mb-2 sm:mb-3 text-[10px] sm:text-xs" style={{gridTemplateColumns: '72px repeat(5,1fr)'}}>
<div className="text-xs text-slate-400"></div>
<div className="text-xs font-medium tracking-tight text-slate-200 text-center font-geist" style={{}}>
                    Mon 24
                  </div>
<div className="text-xs font-medium tracking-tight text-slate-200 text-center font-geist" style={{}}>
                    Tue 25
                  </div>
<div className="text-xs font-medium tracking-tight text-slate-200 text-center font-geist" style={{}}>
                    Wed 26
                  </div>
<div className="text-xs font-medium tracking-tight text-slate-200 text-center font-geist" style={{}}>
                    Thu 27
                  </div>
<div className="text-xs font-medium tracking-tight text-slate-200 text-center font-geist" style={{}}>
                    Fri 28
                  </div>
</div>
<div className="grid" style={{gridTemplateColumns: '72px repeat(5,1fr)', gridAutoRows: '64px', gap: '0'}}>
<div className="flex items-center pr-2 text-[11px] text-slate-500 font-geist" style={{gridRow: '1'}}>
                    07:00
                  </div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '1'}}></div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '1'}}></div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '1'}}></div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '1'}}></div>
<div className="border-white/10 border-l border-r border-t bg-white/5 relative" style={{gridRow: '1'}}></div>
<div className="flex items-center pr-2 text-[11px] text-slate-500 font-geist" style={{gridRow: '2'}}>
                    08:00
                  </div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-60 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 ring-emerald-400/30 ring-1">
<p className="text-[11px] text-emerald-300 leading-tight font-geist" style={{}}>
                        Daily Kickoff
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        08:30 - 09:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-60 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 ring-emerald-400/30 ring-1">
<p className="text-[11px] text-emerald-300 leading-tight font-geist" style={{}}>
                        Daily Kickoff
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        08:30 - 09:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '2'}}></div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-60 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 ring-emerald-400/30 ring-1">
<p className="text-[11px] text-emerald-300 leading-tight font-geist" style={{}}>
                        Daily Kickoff
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        08:30 - 09:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-r border-t bg-white/5 relative" style={{gridRow: '2'}}>
<div className="evt evt-at-30 evt-h-60 bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 ring-emerald-400/30 ring-1">
<p className="text-[11px] text-emerald-300 leading-tight font-geist" style={{}}>
                        Daily Kickoff
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        08:30 - 09:00
                      </p>
</div>
</div>
<div className="flex items-center pr-2 text-[11px] text-slate-500 font-geist" style={{gridRow: '3'}}>
                    09:00
                  </div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '3 / 5'}}>
<div className="evt ring-1 ring-fuchsia-400/30 bg-gradient-to-r from-fuchsia-500/20 to-violet-500/10" style={{top: 'calc(50%)', bottom: 'var(--evt-pad)'}}>
<p className="text-[11px] text-fuchsia-300 leading-tight font-geist" style={{}}>
                        UX Jam Session
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        09:30 - 11:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '3 / 4'}}>
<div className="evt ring-1 ring-violet-400/30 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/10" style={{top: '50%', height: '64px'}}>
<p className="text-[11px] text-violet-300 leading-tight font-geist" style={{}}>
                        Quarterly Planning
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        09:30 - 10:30
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '3 / 5'}}>
<div className="evt ring-1 ring-rose-400/30 bg-gradient-to-r from-rose-500/20 to-fuchsia-500/10" style={{top: 'calc(64px * 0.75)', bottom: 'var(--evt-pad)'}}>
<p className="text-[11px] text-rose-300 leading-tight font-geist" style={{}}>
                        Stakeholder Sync
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        09:45 - 11:30
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '3 / 4'}}>
<div className="evt ring-1 ring-amber-400/30 bg-gradient-to-r from-amber-500/20 to-orange-500/10" style={{top: '50%', height: '64px'}}>
<p className="text-[11px] text-amber-300 leading-tight font-geist" style={{}}>
                        Dept All-Hands
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        09:30 - 10:30
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-r border-t bg-white/5 relative" style={{gridRow: '3'}}></div>
<div className="flex items-center pr-2 text-[11px] text-slate-500 font-geist" style={{gridRow: '4'}}>
                    10:00
                  </div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '4 / 6'}}>
<div className="evt ring-1 ring-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-sky-500/10" style={{top: 'calc(64px * 0.75)', bottom: 'calc(64px + var(--evt-pad))'}}>
<p className="text-[11px] text-cyan-300 leading-tight font-geist" style={{}}>
                        Build Sprint
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        10:45 - 12:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '4'}}></div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '4'}}></div>
<div className="border-white/10 border-l border-r border-t bg-white/5 relative" style={{gridRow: '4 / 5'}}></div>
<div className="flex items-center pr-2 text-[11px] text-slate-500 font-geist" style={{gridRow: '5'}}>
                    11:00
                  </div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '5'}}></div>
<div className="bg-white/5 border-white/10 border-t border-l relative" style={{gridRow: '5'}}></div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '5'}}></div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '5'}}></div>
<div className="border-white/10 border-l border-r border-t bg-white/5 relative" style={{gridRow: '5'}}></div>
<div className="flex items-center pr-2 text-[11px] text-slate-500 font-geist" style={{gridRow: '6'}}>
                    12:00
                  </div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '6'}}>
<div className="evt evt-h-60 evt-at-00 ring-1 ring-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/10">
<p className="text-[11px] text-purple-300 leading-tight font-geist" style={{}}>
                        Lunch
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        12:00 - 13:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '6'}}>
<div className="evt evt-h-60 evt-at-00 ring-1 ring-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/10">
<p className="text-[11px] text-purple-300 leading-tight font-geist" style={{}}>
                        Lunch
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        12:00 - 13:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '6'}}>
<div className="evt evt-h-60 evt-at-00 ring-1 ring-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/10">
<p className="text-[11px] text-purple-300 leading-tight font-geist" style={{}}>
                        Lunch
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        12:00 - 13:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '6'}}>
<div className="evt evt-h-60 evt-at-00 ring-1 ring-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/10">
<p className="text-[11px] text-purple-300 leading-tight font-geist" style={{}}>
                        Lunch
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        12:00 - 13:00
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-r border-t bg-white/5 relative" style={{gridRow: '6'}}>
<div className="evt evt-h-60 evt-at-00 ring-1 ring-purple-400/30 bg-gradient-to-r from-purple-500/20 to-pink-500/10">
<p className="text-[11px] text-purple-300 leading-tight font-geist" style={{}}>
                        Lunch
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        12:00 - 13:00
                      </p>
</div>
</div>
<div className="flex items-center pr-2 text-[11px] text-slate-500 font-geist" style={{gridRow: '7'}}>
                    13:00
                  </div>
<div className="bg-white/5 border-white/10 border-t border-l relative" style={{gridRow: '7'}}>
<div className="evt ring-1 ring-violet-400/30 border border-dashed border-violet-400/30 bg-transparent" style={{top: 'var(--evt-pad)', height: '56px'}}>
<p className="text-[11px] text-violet-300 leading-tight font-geist" style={{}}>
                        AdaFlow AI Hint
                      </p>
<p className="text-[10px] text-slate-400 font-geist" style={{}}>
                        Suggested slot
                      </p>
</div>
</div>
<div className="border-white/10 border-l border-t bg-white/5 relative" style={{gridRow: '7'}}></div>
<div className="border-white/10 border-l border-t border-b bg-white/5 relative" style={{gridRow: '7'}}></div>
<div className="border-white/10 border-l border-t border-b bg-white/5 relative" style={{gridRow: '7'}}></div>
<div className="border-white/10 border-l border-r border-t border-b bg-white/5 relative" style={{gridRow: '7'}}></div>
</div>
<div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
<div className="flex text-xs text-slate-300 gap-x-2 gap-y-2 items-center font-geist" style={{}}>
                    Nura AI Scheduling is on
                  </div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 font-geist" style={{}}>
<svg className="lucide lucide-share-2" data-icon-replaced="true" data-icon-set="lucide" data-lucide="share-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                      Share
                    </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 font-geist" style={{}}>
<svg className="lucide lucide-download" data-icon-replaced="true" data-icon-set="lucide" data-lucide="download" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(226, 232, 240)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                      Export
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="px-4 sm:px-6 lg:px-8 lg:pt-12 lg:pb-12 z-10 max-w-7xl mx-auto pt-20 sm:pt-24 md:pt-32 pr-4 pb-16 sm:pb-20 pl-4 relative" id="features">
<div className="overflow-hidden sm:p-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-gradient-to-br from-white/5 to-white/0 rounded-3xl ring-white/10 ring-1 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"></div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12 animate">
<div className="mb-6">
<div className="flex text-[13px] sm:text-sm uppercase font-medium text-blue-400 tracking-tight items-center justify-between">
<span className="font-geist" style={{}}>FEATURES</span>
<span className="font-geist" style={{}}>(01)</span>
</div>
<div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div>
<div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:flex-row sm:items-end sm:justify-between mb-0 gap-x-0 gap-y-0 animate">
<div className="">
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white text-left mt-0 font-geist font-light tracking-tighter" style={{}}>
                Powerful Features for Modern Teams
              </h2>
</div>
<p className="sm:text-base text-sm text-slate-300 text-left max-w-[42ch] font-geist" style={{}}>
              Discover intelligent tools designed to help your team automate
              tasks, stay organized, and move faster with clarity and control.
            </p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<article className="lg:col-span-2 group relative overflow-hidden bg-neutral-900 border-neutral-800 border rounded-2xl p-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-start justify-between mb-4">
<h3 className="text-white text-xl sm:text-2xl font-geist font-light tracking-tighter" style={{}}>
                Real-Time Performance Analytics
              </h3>
<span className="text-lg font-semibold text-emerald-400 font-geist" style={{}}>
                99.2%
              </span>
</div>
<p className="text-sm text-slate-300 mb-6 font-geist" style={{}}>
              Monitor system performance, task completion, and team productivity
              with our advanced analytics dashboard powered by AI insights.
            </p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="relative h-[180px] rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 ring-1 ring-violet-400/30 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-8 opacity-10">
<div className="border-r border-violet-300"></div>
<div className="border-r border-violet-300"></div>
<div className="border-r border-violet-300"></div>
<div className="border-r border-violet-300"></div>
<div className="border-violet-300 border-r"></div>
<div className="border-r border-violet-300"></div>
<div className="border-r border-violet-300"></div>
<div></div>
</div>
<div className="absolute left-4 top-4 flex -space-x-2">
<img alt="team member 1" className="h-8 w-8 ring-2 ring-white/20 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc0337fb-ed78-4515-a35d-9bf52d6af946_320w.webp"/>
<img alt="team member 2" className="h-8 w-8 ring-2 ring-white/20 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp"/>
<img alt="team member 3" className="h-8 w-8 ring-2 ring-white/20 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4a9d0cf0-9561-4da3-870d-41ebc9bf447f_320w.jpg"/>
</div>
<div className="absolute left-4 bottom-4">
<span className="inline-flex items-center gap-2 text-[11px] text-violet-200 bg-white/20 backdrop-blur rounded-full px-3 py-1.5 ring-1 ring-white/20 font-geist" style={{}}>
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                    Performance Insights
                  </span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 ring-1 ring-emerald-400/30 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-emerald-400"></span>
<span className="text-sm text-emerald-200 font-medium font-geist" style={{}}>
                      System Health
                    </span>
</div>
<span className="text-[11px] text-emerald-300 font-geist" style={{}}>
                    Active
                  </span>
</div>
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-400/10 ring-1 ring-orange-400/30 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-orange-400"></span>
<span className="text-sm text-orange-200 font-medium font-geist" style={{}}>
                      Load Balancing
                    </span>
</div>
<span className="text-[11px] text-orange-300 font-geist" style={{}}>
                    Optimizing
                  </span>
</div>
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-400/10 ring-1 ring-purple-400/30 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-purple-400"></span>
<div className="flex flex-col">
<span className="text-sm text-purple-200 font-medium font-geist" style={{}}>
                        AI Processing
                      </span>
<span className="text-[10px] text-purple-300 font-geist" style={{}}>
                        Real-time analysis
                      </span>
</div>
</div>
<span className="text-[11px] text-purple-300 font-geist" style={{}}>
                    Live
                  </span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-[11px] text-slate-200 bg-white/10 rounded-full px-3 py-1 ring-1 ring-white/10 font-geist" style={{}}>
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
                Powered by AI
              </span>
<span className="inline-flex items-center gap-2 text-[11px] text-slate-200 bg-white/10 rounded-full px-3 py-1 ring-1 ring-white/10 font-geist" style={{}}>
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
                Secure &amp; Compliant
              </span>
</div>
</article>
<article className="group relative rounded-2xl border border-neutral-800 bg-neutral-900 p-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-semibold font-geist" style={{}}>
              Smart Automation
            </h3>
<p className="mt-2 text-sm text-slate-300 font-geist" style={{}}>
              Streamline workflows and boost productivity with intelligent task
              automation.
            </p>
<div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="relative h-[120px] flex items-end justify-around gap-2">
<div className="w-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t" style={{height: '45%'}}></div>
<div className="w-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t" style={{height: '65%'}}></div>
<div className="w-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t" style={{height: '80%'}}></div>
<div className="w-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t" style={{height: '55%'}}></div>
<div className="w-8 bg-gradient-to-t from-violet-500 to-fuchsia-500 rounded-t" style={{height: '90%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-[11px] text-violet-200 bg-violet-500/20 rounded-full px-2 py-1 ring-1 ring-violet-400/30 font-geist" style={{}}>
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path>
<path d="M12 2v2"></path>
<path d="M17 20v2"></path>
<path d="M17 2v2"></path>
<path d="M2 12h2"></path>
<path d="M2 17h2"></path>
<path d="M2 7h2"></path>
<path d="M20 12h2"></path>
<path d="M20 17h2"></path>
<path d="M20 7h2"></path>
<path d="M7 20v2"></path>
<path d="M7 2v2"></path>
<rect height="16" rx="2" width="16" x="4" y="4"></rect>
<rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
                Auto-Scaling
              </span>
</div>
</article>
<article className="group relative rounded-2xl border border-neutral-800 bg-neutral-900 p-6 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<h3 className="text-white text-lg sm:text-xl tracking-tight font-semibold font-geist" style={{}}>
              Enterprise Integration
            </h3>
<p className="mt-2 text-sm text-slate-300 font-geist" style={{}}>
              Seamlessly connect with your existing tech stack and third-party
              services.
            </p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-white/5 px-3 py-2">
<span className="text-sm text-slate-200 font-geist" style={{}}>
                  01 API Gateway Setup
                </span>
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-white/5 px-3 py-2">
<span className="text-sm text-slate-200 font-geist" style={{}}>
                  02 Data Synchronization
                </span>
<svg className="text-emerald-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-orange-400/30 bg-orange-500/10 px-3 py-2">
<span className="text-sm text-slate-200 font-geist" style={{}}>
                  03 Security Protocols
                </span>
<svg className="text-orange-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-white/10 bg-white/5 px-3 py-2">
<span className="text-sm text-slate-200 font-geist" style={{}}>
                  04 Optimization
                </span>
<svg className="text-slate-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
</div>
</article>
<article className="lg:col-span-2 group relative overflow-hidden bg-neutral-900 border-neutral-800 border rounded-2xl p-6 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white text-xl sm:text-2xl font-geist font-light tracking-tighter" style={{}}>
                Advanced Security &amp; Compliance
              </h3>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-200 bg-emerald-500/20 rounded-full px-2 py-1 ring-1 ring-emerald-400/30 font-geist" style={{}}>
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
</svg>
                  Enterprise Grade
                </span>
<span className="text-lg font-semibold text-white font-geist" style={{}}>
                  SOC 2
                </span>
</div>
</div>
<p className="text-sm text-slate-300 mb-6 font-geist" style={{}}>
              Protect your data and maintain compliance with industry-leading
              security measures and automated governance tools.
            </p>
<div className="grid grid-cols-3 gap-4">
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-red-500/20 to-red-400/10 ring-1 ring-red-400/30">
<div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full mb-2">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h4 className="font-medium text-red-200 text-sm font-geist" style={{}}>
                  Encryption
                </h4>
<p className="text-xs text-red-300 font-geist" style={{}}>
                  End-to-end AES-256
                </p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-green-400/10 ring-1 ring-green-400/30">
<div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mb-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h4 className="font-medium text-green-200 text-sm font-geist" style={{}}>
                  Monitoring
                </h4>
<p className="text-xs text-green-300 font-geist" style={{}}>
                  24/7 threat detection
                </p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-400/10 ring-1 ring-blue-400/30">
<div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="m9 15 2 2 4-4"></path>
</svg>
</div>
<h4 className="font-medium text-blue-200 text-sm font-geist" style={{}}>
                  Compliance
                </h4>
<p className="text-xs text-blue-300 font-geist" style={{}}>
                  GDPR, HIPAA ready
                </p>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="sm:px-6 lg:px-8 lg:pt-12 lg:pb-12 z-10 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative">
<div className="overflow-hidden sm:p-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950 rounded-3xl ring-neutral-800 ring-1 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12 animate">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-blue-400">
<span className="font-geist">TESTIMONIALS</span>
<span className="font-geist">(02)</span>
</div>
<div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div>
<div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:flex-row sm:items-end sm:justify-between mb-0 gap-x-0 gap-y-0 animate">
<div className="">
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white text-left mt-0 font-geist font-light tracking-tighter">
                What our customers say
              </h2>
</div>
<p className="sm:text-base text-sm text-slate-300 text-left max-w-[42ch] font-geist">
              Real feedback from teams using Nura to plan better, focus deeper,
              and ship faster.
            </p>
</div>
</div>

<section className="sm:px-6 lg:pl-0 lg:pr-0 lg:pt-0 lg:pb-0 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative pb-24 sm:pb-0" id="testimonial">
<div className="overflow-hidden p-6 sm:p-8 md:p-10 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll bg-gradient-to-br from-black/10 to-black/0 ring-white/10 ring-1 rounded-2xl sm:rounded-3xl relative backdrop-blur min-h-[400px] sm:min-h-[500px] md:min-h-[540px]" style={{minHeight: '540px'}}>
<div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
<div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"></div>
<div className="absolute top-6 left-6 opacity-10 text-white">
<svg className="w-12 h-12 sm:w-16 sm:h-16" fill="none" stroke="currentColor" strokeWidth="1.3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h3v10H5V9a2 2 0 0 1 2-2Zm9 0h3v10h-5V9a2 2 0 0 1 2-2Z"></path>
</svg>
</div>
<div className="flex flex-col justify-between pb-20 sm:pb-0" style={{minHeight: '420px'}}>
<blockquote className="relative text-center max-w-5xl mx-auto transition-opacity duration-300 flex-1 flex items-center justify-center" id="testimonial-quote">
<p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-tight font-light text-white tracking-tighter font-geist px-2 sm:px-4">
                  Nura completely
                  <span className="text-blue-400 font-geist font-light tracking-tighter">
                    transformed the way
                  </span>
                  our team manages schedules. It keeps us organized, synced, and
                  focused —
                  <span className="text-blue-400 font-geist font-light tracking-tighter">
                    without wasting time planning
                  </span>
                  or switching tools.
                </p>
</blockquote>
<div className="mt-6 sm:mt-8 text-center transition-opacity duration-300 px-4" id="testimonial-author">
<p className="text-sm sm:text-base text-slate-200 font-medium font-geist">
                  Sarah Nguyen
                  <span className="text-slate-400 font-normal font-geist">
                    Project Manager, Nova Studio
                  </span>
</p>
</div>
<div className="fixed bottom-4 left-4 right-4 sm:static sm:mt-8 sm:mt-10 flex items-end justify-center gap-1.5 sm:gap-3 md:gap-4 flex-wrap px-2 bg-neutral-950/95 sm:bg-transparent backdrop-blur-lg sm:backdrop-blur-none rounded-xl sm:rounded-none p-3 sm:p-0 border border-white/10 sm:border-0">
<img alt="Avatar 1" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="0" data-testimonial-name="Michael Chen" data-testimonial-quote="The AI automation in Nura has &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;saved us countless hours&lt;/span&gt; every week. Our team is more productive than ever, and we can finally focus on what really matters — &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;building great products&lt;/span&gt;." data-testimonial-role="CEO, TechFlow" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_320w.webp"/>
<img alt="Avatar 2" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm:rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="1" data-testimonial-name="Emily Rodriguez" data-testimonial-quote="Switching to Nura was the &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;best decision&lt;/span&gt; we made this year. The integrations are seamless, the interface is intuitive, and our team collaboration has &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;never been stronger&lt;/span&gt;." data-testimonial-role="Product Lead, Innovate Labs" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<img alt="Avatar 3" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm:rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="2" data-testimonial-name="David Kim" data-testimonial-quote="Nura's intelligent task prioritization helps us &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;ship features faster&lt;/span&gt; and with more confidence. The real-time sync across our distributed team is a &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;game-changer and worthy&lt;/span&gt;." data-testimonial-role="Engineering Manager, CloudBase" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_320w.jpg"/>
<img alt="Avatar highlighted" className="h-9 w-9 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-lg sm:rounded-xl object-cover ring-2 ring-white/20 shadow-lg cursor-pointer" data-active="true" data-testimonial-index="3" data-testimonial-name="Sarah Nguyen" data-testimonial-quote="Nura completely &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;transformed the way&lt;/span&gt; our team manages schedules. It keeps us organized, synced, and focused — &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;without wasting time planning&lt;/span&gt; or switching tools." data-testimonial-role="Project Manager, Nova Studio" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
<img alt="Avatar 5" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm:rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="4" data-testimonial-name="Jessica Park" data-testimonial-quote="From onboarding to daily workflows, Nura makes everything &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;effortless and efficient&lt;/span&gt;. We've reduced meeting time by 40% and our team satisfaction scores have &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;skyrocketed&lt;/span&gt;." data-testimonial-role="Operations Director, Nexus Group" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp"/>
<img alt="Avatar 6" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm:rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="5" data-testimonial-name="Alex Thompson" data-testimonial-quote="The visual clarity and smart notifications in Nura help us stay aligned without &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;constant check-ins&lt;/span&gt;. Our design process is smoother and we deliver &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;higher quality work&lt;/span&gt; on time." data-testimonial-role="Design Lead, Studio Bright" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp"/>
<img alt="Avatar 7" className="h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-lg sm:rounded-xl object-cover ring-1 ring-white/10 opacity-40 grayscale cursor-pointer transition-opacity duration-200 hover:opacity-60" data-testimonial-index="6" data-testimonial-name="Rachel Foster" data-testimonial-quote="Nura has become the &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;single source of truth&lt;/span&gt; for our entire marketing team. Campaign planning, execution, and reporting are all in one place, making us &lt;span className='text-blue-400 font-geist font-light tracking-tighter'&gt;incredibly agile&lt;/span&gt;." data-testimonial-role="Marketing VP, Growth Co" src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=96&amp;h=96&amp;fit=crop&amp;crop=faces"/>
</div>
</div>

</div>
</section>
</div>

</section>
<section className="sm:px-6 lg:px-8 lg:pt-12 lg:pb-12 z-10 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative" id="features">
<div className="overflow-hidden sm:p-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll bg-neutral-950 rounded-3xl ring-neutral-800 ring-1 pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12">
<div className="mb-6">
<div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-blue-400">
<span className="font-geist">PRICING</span>
<span className="font-geist">(03)</span>
</div>
<div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div>
<div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:flex-row sm:items-end sm:justify-between gap-0">
<div className="">
<h2 className="sm:text-4xl md:text-5xl text-3xl text-white text-left mt-0 font-geist font-light tracking-tighter">
                Simple, predictable pricing
              </h2>
</div>
<p className="sm:text-base text-sm text-slate-300 text-left max-w-[42ch] font-geist">
              Pick a plan that fits your team. Switch or cancel anytime. Yearly
              saves you more.
            </p>
</div>
</div>

<section className="px-4 sm:px-6 lg:pl-0 lg:pr-0 z-10 max-w-7xl mx-auto relative" id="pricing">
<div className="z-10 grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 relative">

<aside className="flex flex-col p-4 sm:p-5 md:p-6 rounded-xl lg:rounded-none ring-1 lg:ring-0 ring-white/10 gap-4 sm:gap-6 items-start justify-start">
<div className="">
<h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight font-geist">
                  Choose your Runa plan
                </h3>
</div>
<div className="w-full space-y-3">

<label className="flex items-center justify-between gap-3 cursor-pointer hover:bg-white/[0.04] transition bg-transparent ring-white/10 ring-1 rounded-xl px-4 py-3 w-full" id="yearly-toggle">
<input className="sr-only" name="billing" type="radio" value="yearly"/>
<div className="flex items-center gap-3 min-w-0">
<span className="relative flex-shrink-0 h-5 w-5 rounded-full ring-1 ring-white/20 grid place-items-center" id="yearly-radio">
<span className="h-2.5 w-2.5 rounded-full bg-transparent" id="yearly-radio-inner"></span>
</span>
<span className="text-slate-300 text-sm font-geist whitespace-nowrap">
                      Yearly billing
                    </span>
</div>
<span className="flex-shrink-0 text-[11px] text-emerald-300/80 bg-emerald-500/10 ring-1 ring-emerald-400/20 rounded-full px-2 py-0.5 font-geist">
                    Save 20%
                  </span>
</label>

<label className="flex items-center gap-3 rounded-xl ring-1 ring-blue-400/30 bg-blue-500/10 px-4 py-3 cursor-pointer hover:bg-blue-500/20 transition" id="monthly-toggle">
<input checked="" className="sr-only" name="billing" type="radio" value="monthly"/>
<span className="relative h-5 w-5 rounded-full ring-1 ring-blue-300/50 grid place-items-center" id="monthly-radio">
<span className="h-2.5 w-2.5 rounded-full bg-blue-400" id="monthly-radio-inner"></span>
</span>
<span className="text-slate-100 text-sm font-geist">
                    Monthly billing
                  </span>
</label>
</div>
</aside>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<article className="rounded-xl sm:rounded-2xl ring-1 ring-neutral-800 bg-neutral-900 p-4 sm:p-5 md:p-6 flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="mb-2">
<h4 className="text-lg sm:text-xl tracking-tight font-semibold font-geist">
                    Starter
                  </h4>
<p className="text-slate-400 text-sm font-geist">
                    Launch personal workflows
                  </p>
</div>
<div className="mt-4 flex items-end gap-2">
<span className="text-white text-3xl sm:text-4xl md:text-5xl tracking-tight font-semibold font-geist" data-price="starter">
                    $12
                  </span>
<span className="text-slate-400 text-base font-medium font-geist" data-period="">
                    / mo
                  </span>
</div>
<p className="text-slate-400 text-sm mt-1 font-geist" data-billing-text="">
                  Billed monthly per user
                </p>
<div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-300 font-geist">
                      Up to 5 projects
                    </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5">
<svg className="lucide lucide-check" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-300 font-geist">
                      1,500 actions / month
                    </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-300 font-geist">
                      Basic integrations
                    </span>
</li>
</ul>
<div className="mt-6">
<button className="w-full inline-flex items-center justify-center rounded-xl ring-1 ring-white/10 text-slate-200 hover:bg-white/10 transition px-4 py-3 text-sm font-medium font-geist">
                    Get started
                  </button>
</div>
</article>

<article className="relative rounded-2xl ring-1 ring-neutral-800 bg-neutral-900 p-6 flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="mb-2">
<h4 className="text-blue-400 text-xl tracking-tight font-semibold font-geist">
                    Pro
                  </h4>
<p className="text-slate-400 text-sm font-geist">
                    Scale with advanced automation
                  </p>
</div>
<div className="mt-4 flex items-end gap-2">
<span className="text-white text-4xl sm:text-5xl tracking-tight font-semibold font-geist" data-price="pro">
                    $39
                  </span>
<span className="text-slate-400 text-base font-medium font-geist" data-period="">
                    / mo
                  </span>
</div>
<p className="text-slate-400 text-sm mt-1 font-geist" data-billing-text="">
                  Billed monthly per user
                </p>
<div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-300 font-geist">
                      Unlimited projects
                    </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-300 font-geist">
                      50,000 actions / month
                    </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/15 bg-white/5">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-300 font-geist">
                      All integrations + API
                    </span>
</li>
</ul>
<div className="mt-6">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-500 text-white hover:bg-blue-500/90 transition-colors px-4 py-3 text-sm font-medium shadow-lg shadow-neutral-900/20 font-geist">
                    Upgrade to Pro
                  </button>
</div>
</article>

<article className="rounded-2xl ring-1 ring-neutral-800 bg-neutral-900 p-6 flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
<div className="mb-2">
<h4 className="text-emerald-300 text-xl tracking-tight font-semibold font-geist">
                    Business
                  </h4>
<p className="text-slate-300 text-sm font-geist">
                    Security and control for teams
                  </p>
</div>
<div className="mt-4 flex items-end gap-2">
<span className="text-white text-4xl sm:text-5xl tracking-tight font-semibold font-geist" data-price="business">
                    $99
                  </span>
<span className="text-slate-400 text-base font-medium font-geist" data-period="">
                    / mo
                  </span>
</div>
<p className="text-slate-400 text-sm mt-1 font-geist" data-billing-text="">
                  Billed monthly per user
                </p>
<div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<ul className="mt-4 space-y-3">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-emerald-400/30 bg-emerald-500/10">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-200 font-geist">
                      SSO, roles &amp; permissions
                    </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-emerald-400/30 bg-emerald-500/10">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-200 font-geist">
                      Audit logs &amp; usage caps
                    </span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-emerald-400/30 bg-emerald-500/10">
<svg className="lucide lucide-check w-[14px] h-[14px]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-sm text-slate-200 font-geist">
                      Dedicated support
                    </span>
</li>
</ul>
<div className="mt-6">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-500 text-white hover:bg-blue-500/90 transition-colors px-4 py-3 text-sm font-medium shadow-lg shadow-neutral-900/20 font-geist">
                    Contact sales
                  </button>
</div>
</article>
</div>
</div>
</section>
</div>

</section>



<footer className="px-4 sm:px-6 lg:px-8 lg:pt-14 lg:pb-14 z-10 max-w-7xl mx-auto pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 relative">
<div className="relative overflow-hidden rounded-2xl sm:rounded-3xl ring-1 ring-neutral-800 bg-neutral-950 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">

<div className="sm:p-8 md:p-12 lg:p-16 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 pt-6 pr-6 pb-6 pl-6 relative">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 border-b border-white/10 pb-8 sm:pb-10">
<div className="space-y-4 md:col-span-2 lg:col-span-2">
<div className="flex items-center gap-2">
<h3 className="text-2xl text-white font-geist font-light tracking-tighter">
                  Nura
                </h3>
</div>
<p className="max-w-3xl text-slate-300 font-geist">
                AI-powered productivity for modern teams. Plan, automate, and
                collaborate — all in one place.
              </p>

<form className="mt-5 max-w-xl">
<label className="sr-only" htmlFor="nl-email">Email address</label>
<div className="flex gap-2">
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400/70 transition text-xs sm:text-sm text-white bg-white/10 border border-white/10 rounded-lg sm:rounded-xl px-3 py-2 sm:py-2.5 font-geist" id="nl-email" placeholder="you@company.com" required="" type="email"/>
<button className="inline-flex items-center gap-2 rounded-lg sm:rounded-xl bg-blue-500 hover:bg-blue-500/90 transition text-xs sm:text-sm font-medium text-white px-3 sm:px-4 py-2 sm:py-2.5 ring-1 ring-blue-400/30 shadow-[0_8px_24px_-8px_rgba(59,130,246,0.45)] font-geist" type="submit">
                    Subscribe
                  </button>
</div>
<p className="mt-2 text-xs text-slate-400 font-geist">
                  No spam. Unsubscribe anytime.
                </p>
</form>
</div>

<nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6 sm:gap-8 md:col-span-2 lg:col-span-2">
<div className="">
<h4 className="text-white/90 font-semibold tracking-tight mb-3 font-geist">
                  Product
                </h4>
<ul className="space-y-2 text-sm text-slate-300 font-geist">
<li className="">
<a className="hover:text-white transition" href="#">Overview</a>
</li>
<li className="">
<a className="hover:text-white transition" href="#">
                      Automation
                    </a>
</li>
<li className="">
<a className="hover:text-white transition" href="#">
                      Integrations
                    </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white/90 font-semibold tracking-tight mb-3 font-geist">
                  Resources
                </h4>
<ul className="space-y-2 text-sm text-slate-300 font-geist">
<li className="">
<a className="hover:text-white transition" href="#">Docs</a>
</li>
<li className="">
<a className="hover:text-white transition" href="#">
                      Templates
                    </a>
</li>
<li className="">
<a className="hover:text-white transition" href="#">
                      Changelog
                    </a>
</li>
</ul>
</div>
<div className="">
<h4 className="text-white/90 font-semibold tracking-tight mb-3 font-geist">
                  Company
                </h4>
<ul className="space-y-2 text-sm text-slate-300 font-geist">
<li className="">
<a className="hover:text-white transition" href="#">About</a>
</li>
<li className="">
<a className="hover:text-white transition" href="#contact">
                      Contact
                    </a>
</li>
<li className="">
<a className="hover:text-white transition" href="#">Careers</a>
</li>
</ul>
</div>
</nav>
</div>

<div className="mt-8 sm:mt-10 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 backdrop-blur" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 ring-1 ring-emerald-400/30 text-xs text-emerald-200 bg-emerald-500/10 rounded-full px-3 py-1.5 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Available for demos
                </div>
<h4 className="text-white font-semibold tracking-tight font-geist">
                  Get in touch
                </h4>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">Schedule a personalized demo</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">Custom enterprise solutions</span>
</li>
<li className="flex items-start gap-2">
<svg className="w-4 h-4 text-blue-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="font-geist">
                      Migration &amp; onboarding support
                    </span>
</li>
</ul>
<div className="flex items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 text-white hover:text-blue-300 transition font-geist" href="mailto:hello@nura.ai">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
                    hello@nura.ai
                  </a>
</div>

<div className="flex items-center gap-3 pt-2">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-slate-200" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 5.8c-.6.3-1.3.5-2 .6.7-.4 1.2-1.1 1.5-1.8-.7.4-1.4.7-2.2.9A3.6 3.6 0 0 0 12 7.9c0 .3 0 .6.1.9-3-.2-5.7-1.6-7.6-3.8a3.7 3.7 0 0 0 .5 4.8c-.5 0-1-.2-1.5-.4v.1c0 1.8 1.3 3.3 3.1 3.7a3.8 3.8 0 0 1-1.6.1 3.7 3.7 0 0 0 3.5 2.6A7.3 7.3 0 0 1 2 18.6a10.2 10.2 0 0 0 5.5 1.6c6.6 0 10.3-5.6 10.3-10.4v-.5c.7-.5 1.2-1.1 1.7-1.8Z"></path>
</svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-slate-200" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.1c.7-1.2 2.2-2.5 4.6-2.5 4.9 0 5.8 3.2 5.8 7.4V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24H8z"></path>
</svg>
</a>
<a aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-slate-200" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.8.5-5.8.5-5.8s0-4-.5-5.8ZM9.5 15.5v-7l6 3.5-6 3.5Z"></path>
</svg>
</a>
</div>
</div>

<form aria-label="Contact form" className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
<div className="">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">
                    Name
                  </label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400/70 transition text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 font-geist" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">
                    Email
                  </label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400/70 transition text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 font-geist" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">
                    Company
                  </label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400/70 transition text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 font-geist" placeholder="Your company" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">
                    Team size
                  </label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-blue-400/70 transition text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 font-geist">
<option className="bg-[#0b0716] font-geist" value="1-10">
                      1–10 people
                    </option>
<option className="bg-[#0b0716] font-geist" value="11-50">
                      11–50 people
                    </option>
<option className="bg-[#0b0716] font-geist" value="51-200">
                      51–200 people
                    </option>
<option className="bg-[#0b0716] font-geist" value="200+">
                      200+ people
                    </option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-white/80 mb-1 font-geist">
                    Message
                  </label>
<textarea className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-blue-400/70 transition text-sm text-white bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 font-geist" placeholder="Tell us about your needs…" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex justify-end">
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-500/90 transition text-sm font-medium text-white px-4 py-2.5 ring-1 ring-blue-400/30 shadow-[0_8px_24px_-8px_rgba(59,130,246,0.45)] font-geist" type="submit">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
                    Send message
                  </button>
</div>
</form>
</div>
</div>

<div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
<p className="text-slate-400 text-sm font-geist">
              © 2025 Nura AI. All rights reserved.
            </p>
<div className="flex items-center gap-3 sm:gap-4 text-slate-400 text-xs sm:text-sm flex-wrap">
<a className="hover:text-white transition font-geist" href="#privacy">
                Privacy
              </a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition font-geist" href="#terms">
                Terms
              </a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition font-geist" href="#security">
                Security
              </a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition font-geist" href="#status">
                Status
              </a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
