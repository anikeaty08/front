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



        (function () {
          const header = document.querySelector('header[data-element-id="aura-emhvb0sodjz780mw"]');
          if (!header) return;
          const apply = () => {
            if (window.scrollY > 10) {
              header.classList.add('bg-white/50', 'backdrop-blur-sm');
            } else {
              header.classList.remove('bg-white/50', 'backdrop-blur-sm');
            }
          };
          window.addEventListener('scroll', apply, { passive: true });
          document.addEventListener('DOMContentLoaded', apply);
          apply();
        })();
      


                    (function () {
                      const panel = document.getElementById('scheduler-panel');
                      if (!panel) return;

                      // Move this panel into the main booking area and hide the white card behind it
                      try {
                        const book = document.getElementById('book');
                        if (book) {
                          const whiteCard = book.querySelector('div.bg-white.w-full.max-w-2xl');
                          if (whiteCard) {
                            // Insert panel before the white card and hide the white card
                            if (!whiteCard.previousElementSibling || whiteCard.previousElementSibling !== panel) {
                              whiteCard.parentNode.insertBefore(panel, whiteCard);
                            }
                            whiteCard.style.display = 'none';
                            panel.classList.add('bg-slate-900','text-slate-100','ring-1','ring-white/10','rounded-3xl','w-full','max-w-2xl','mx-auto');
                          }
                        }
                      } catch (e) {}

                      const step1 = panel.querySelector('#step-1');
                      const step2 = panel.querySelector('#step-2');
                      const success = panel.querySelector('#success');
                      const nextBtn = panel.querySelector('#to-step-2');
                      const backBtn = panel.querySelector('#back-to-step-1');
                      const form = panel.querySelector('#booking-form');

                      let selectedService = '';
                      let selectedDay = '';
                      let selectedTime = '';

                      // Service radios
                      panel.querySelectorAll('input[name="service"]').forEach((input) => {
                        input.addEventListener('change', () => {
                          selectedService = input.value;
                          panel.querySelectorAll('.service-option').forEach(l => l.classList.remove('ring-2','ring-emerald-400','bg-white/10'));
                          const label = input.closest('label');
                          if (label) label.classList.add('ring-2','ring-emerald-400','bg-white/10');
                          updateContinue();
                        });
                      });

                      // Day buttons
                      panel.querySelectorAll('[data-day]').forEach((btn) => {
                        btn.addEventListener('click', () => {
                          panel.querySelectorAll('[data-day]').forEach(b => b.classList.remove('bg-white/20','text-white'));
                          btn.classList.add('bg-white/20','text-white');
                          selectedDay = btn.getAttribute('data-day');
                          updateContinue();
                        });
                      });

                      // Time buttons
                      panel.querySelectorAll('[data-time]').forEach((btn) => {
                        btn.addEventListener('click', () => {
                          panel.querySelectorAll('[data-time]').forEach(b => b.classList.remove('bg-emerald-400/20','ring-emerald-400'));
                          btn.classList.add('bg-emerald-400/20','ring-emerald-400');
                          selectedTime = btn.getAttribute('data-time');
                          updateContinue();
                        });
                      });

                      function updateContinue() {
                        if (selectedService && selectedDay && selectedTime) {
                          nextBtn.disabled = false;
                          nextBtn.classList.remove('opacity-50','cursor-not-allowed');
                        }
                      }

                      nextBtn && nextBtn.addEventListener('click', () => {
                        if (nextBtn.disabled) return;
                        step1.classList.add('hidden');
                        step2.classList.remove('hidden');
                        panel.querySelector('#summary-service').textContent = selectedService;
                        panel.querySelector('#summary-date').textContent = selectedDay;
                        panel.querySelector('#summary-time').textContent = selectedTime;
                        panel.querySelector('#field-service').value = selectedService;
                        panel.querySelector('#field-date').value = selectedDay;
                        panel.querySelector('#field-time').value = selectedTime;
                      });

                      backBtn && backBtn.addEventListener('click', () => {
                        step2.classList.add('hidden');
                        step1.classList.remove('hidden');
                      });

                      form && form.addEventListener('submit', (e) => {
                        e.preventDefault();
                        step2.classList.add('hidden');
                        success.classList.remove('hidden');
                      });
                    })();
                  


      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="fixed -z-10 mix-blend-multiply top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100"></div>
<img alt="" className="absolute inset-x-0 top-[-10%] mx-auto w-[1200px] max-w-none opacity-20 blur-3xl select-none pointer-events-none object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-200 to-sky-200 blur-3xl opacity-70"></div>
<div className="bg-gradient-to-tr from-fuchsia-200 to-rose-200 opacity-60 w-72 h-72 rounded-full absolute bottom-0 left-[-10%] blur-3xl"></div>
</div>

<header className="z-40 sticky transition duration-300 bg-transparent top-0" style={{willChange: 'backdrop-filter, background-color'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex pt-5 pb-5 items-center justify-between [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<a className="inline-flex items-center gap-2" href="#">
<div className="flex bg-center text-white w-[160px] h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e66e6ba4-9889-4ac7-a40a-db6dd09be786_800w.webp?w=800&amp;q=80)] bg-cover rounded-none ring-0 items-center justify-center"></div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
<a className="hover:text-slate-900 transition font-sans font-light" href="#livescan" style={{}}>
              Livescan Fingerpriting
            </a>
<a className="hover:text-slate-900 transition font-sans font-light" href="#passport" style={{}}>
              Passport Photo
            </a>
<a className="hover:text-slate-900 transition font-sans font-light" href="#background" style={{}}>
              Background
            </a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 transition font-sans font-light" style={{}}>
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              (213) 386-1038
            </button>
<a className="inline-flex hover:bg-black transition text-sm text-white bg-slate-900 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 gap-x-2 items-center font-sans font-light" href="#book" style={{}}>
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book now
            </a>
</div>
</div>
</div>

</header>

<section className="z-10 xl:pb-20 pb-20 relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 sm:py-12 lg:py-20 pt-8 pb-8 gap-x-10 gap-y-10 items-center">

<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-600 shadow-sm [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate font-sans font-light" style={{}}>
<div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
              On‑time hours • Same‑day appointments
            </div>
<h1 className="sm:text-5xl lg:text-6xl [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll animate text-4xl font-light text-slate-900 tracking-tight font-bricolage mt-5" style={{transition: 'outline 0.1s ease-in-out'}}>
  End long waits, confusing fees, and rejected prints—fast, clear‑priced Live Scan &amp; Fingerprinting in Los Angeles
</h1>
<p className="mt-4 text-base sm:text-lg text-slate-600 [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll animate font-sans font-light" style={{}}>
              Fast, accurate services: Livescan fingerprinting (in‑store or
              mobile), passport photos (in‑store), and background checks
              (in‑store or online). Book online in 60 seconds.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll animate">
<a className="inline-flex hover:bg-black transition text-sm text-white bg-slate-900 rounded-xl pt-3 pr-5 pb-3 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] gap-x-2 items-center justify-center font-sans font-light" href="#book" style={{}}>
                Book appointment
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex gap-2 hover:bg-slate-50 transition text-sm text-slate-900 bg-white rounded-xl pt-3 pr-5 pb-3 pl-5 ring-1 ring-slate-200 items-center justify-center font-sans font-light" href="tel:+12133861038" style={{}}>
<svg className="lucide lucide-phone-call h-4 w-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Call (213) 386‑1038
              </a>
</div>
<div className="mt-8 flex items-center gap-4 [animation:fadeSlideIn_0.5s_ease-out_0.6s_both] animate-on-scroll animate">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600 font-sans font-light" style={{}}>
                Trusted by employers, schools, and licensing agencies across LA
                • First‑time pass guarantee
              </p>
</div>
</div>

<div className="relative" id="book">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5 bg-slate-900 text-slate-100 ring-1 ring-white/10 rounded-3xl w-full max-w-2xl mx-auto" id="scheduler-panel">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300 font-sans font-light" style={{}}>
<svg className="lucide lucide-calendar-check-2 h-3.5 w-3.5" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
                      Step 1 of 2
                    </span>
<span className="text-[11px] text-slate-400 font-sans font-light" style={{}}>
                      Avg. visit 15–20m
                    </span>
</div>

<div className="mt-4" id="step-1">
<h4 className="text-lg tracking-tight text-white font-sans font-light" style={{}}>
                      Schedule your visit
                    </h4>
<p className="mt-1 text-xs text-slate-300 font-sans font-light" style={{}}>
                      Choose a service, day, and time.
                    </p>

<div className="mt-4">
<p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2 font-sans font-light" style={{}}>
                        Service
                      </p>
<div className="grid grid-cols-2 gap-2">
<label className="service-option cursor-pointer rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 p-3 flex items-center gap-3">
<input className="sr-only" name="service" type="radio" value="Livescan Fingerprinting"/>
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
<svg className="lucide lucide-fingerprint h-4.5 w-4.5" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<div>
<span className="text-sm text-white font-sans font-light" style={{}}>
                              Livescan
                            </span>
<span className="block text-[11px] text-slate-400 font-sans font-light" style={{}}>
                              Electronic submission
                            </span>
</div>
<span className="ml-auto text-[11px] text-slate-400 font-sans font-light" style={{}}>
                            ~20m
                          </span>
</label>
<label className="service-option cursor-pointer rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 p-3 flex items-center gap-3 ring-2 ring-emerald-400 bg-white/10">
<input className="sr-only" name="service" type="radio" value="FD-258 Ink Card"/>
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
<svg className="lucide lucide-pen-tool h-4.5 w-4.5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div>
<span className="text-sm text-white font-sans font-light" style={{}}>
                              FD‑258 Ink
                            </span>
<span className="block text-[11px] text-slate-400 font-sans font-light" style={{}}>
                              Hard copy
                            </span>
</div>
<span className="ml-auto text-[11px] text-slate-400 font-sans font-light" style={{}}>
                            ~20m
                          </span>
</label>
<label className="service-option cursor-pointer rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 p-3 flex items-center gap-3">
<input className="sr-only" name="service" type="radio" value="Passport Photo"/>
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
<svg className="lucide lucide-camera h-4.5 w-4.5" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div>
<span className="text-sm text-white font-sans font-light" style={{}}>
                              Passport Photo
                            </span>
<span className="block text-[11px] text-slate-400 font-sans font-light" style={{}}>
                              In‑store
                            </span>
</div>
<span className="ml-auto text-[11px] text-slate-400 font-sans font-light" style={{}}>
                            ~10m
                          </span>
</label>
<label className="service-option cursor-pointer rounded-lg ring-1 ring-white/10 bg-white/5 hover:bg-white/10 p-3 flex items-center gap-3">
<input className="sr-only" name="service" type="radio" value="Mobile On‑Site Team"/>
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
<svg className="lucide lucide-truck h-4.5 w-4.5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div>
<span className="text-sm text-white font-sans font-light" style={{}}>
                              Mobile team
                            </span>
<span className="block text-[11px] text-slate-400 font-sans font-light" style={{}}>
                              On‑site groups
                            </span>
</div>
<span className="ml-auto text-[11px] text-slate-400 font-sans font-light" style={{}}>
                            By quote
                          </span>
</label>
</div>
</div>

<div className="mt-4">
<p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2 font-sans font-light" style={{}}>
                        Day
                      </p>
<div className="grid grid-cols-7 gap-1 text-xs">
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-2 text-center bg-white/20 text-white font-sans font-light" data-day="Today" style={{}} type="button">
                          Today
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-2 text-center font-sans font-light" data-day="Tomorrow" style={{}} type="button">
                          Tomorrow
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-2 text-center font-sans font-light" data-day="Fri" style={{}} type="button">
                          Fri
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-2 text-center font-sans font-light" data-day="Sat" style={{}} type="button">
                          Sat
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-2 text-center font-sans font-light" data-day="Sun" style={{}} type="button">
                          Sun
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-2 text-center font-sans font-light" data-day="Mon" style={{}} type="button">
                          Mon
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-2.5 py-2 text-center font-sans font-light" data-day="Tue" style={{}} type="button">
                          Tue
                        </button>
</div>
</div>

<div className="mt-4">
<p className="text-[11px] uppercase tracking-wide text-slate-400 mb-2 font-sans font-light" style={{}}>
                        Time
                      </p>
<div className="grid grid-cols-3 gap-2">
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="9:30 AM" style={{}} type="button">
                          9:30 AM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white bg-emerald-400/20 ring-emerald-400 font-sans font-light" data-time="10:00 AM" style={{}} type="button">
                          10:00 AM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="10:20 AM" style={{}} type="button">
                          10:20 AM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="11:00 AM" style={{}} type="button">
                          11:00 AM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="1:00 PM" style={{}} type="button">
                          1:00 PM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="2:15 PM" style={{}} type="button">
                          2:15 PM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="3:40 PM" style={{}} type="button">
                          3:40 PM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="5:00 PM" style={{}} type="button">
                          5:00 PM
                        </button>
<button className="rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 px-3 py-2 text-sm text-white font-sans font-light" data-time="6:15 PM" style={{}} type="button">
                          6:15 PM
                        </button>
</div>
</div>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2.5 text-sm hover:bg-slate-100 transition font-sans font-light" id="to-step-2" style={{}}>
                      Continue
                      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="mt-2 hidden" id="step-2">
<div className="flex items-center justify-between">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300 font-sans font-light" style={{}}>
<svg className="lucide lucide-user h-3.5 w-3.5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        Step 2 of 2
                      </span>
<span className="text-[11px] text-slate-400 font-sans font-light" style={{}}>
                        We confirm by SMS/email
                      </span>
</div>
<h4 className="mt-3 text-lg tracking-tight text-white font-sans font-light" style={{}}>
                      Your details
                    </h4>
<form className="mt-3" id="booking-form">
<div className="grid grid-cols-1 gap-3">
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                            Full name
                          </label>
<input className="w-full rounded-md bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                              Email
                            </label>
<input className="w-full rounded-md bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" name="email" placeholder="jane@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                              Phone
                            </label>
<input className="w-full rounded-md bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" name="phone" placeholder="(213) 555‑0123" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                              Service
                            </label>
<input className="w-full rounded-md bg-white/5 text-white ring-1 ring-white/10 px-3 py-2 text-sm" id="field-service" name="service" readonly=""/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                              Location
                            </label>
<select className="w-full rounded-md bg-white/5 text-white ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" name="location">
<option className="text-slate-900 font-sans font-light" style={{}} value="Paramount Plaza (Koreatown)">
                                Paramount Plaza (Koreatown)
                              </option>
<option className="text-slate-900 font-sans font-light" style={{}} value="Mobile — On‑site">
                                Mobile — On‑site
                              </option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                              Day
                            </label>
<input className="w-full rounded-md bg-white/5 text-white ring-1 ring-white/10 px-3 py-2 text-sm" id="field-date" name="day" readonly=""/>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                              Time
                            </label>
<input className="w-full rounded-md bg-white/5 text-white ring-1 ring-white/10 px-3 py-2 text-sm" id="field-time" name="time" readonly=""/>
</div>
</div>
<div>
<label className="block text-xs text-slate-300 mb-1 font-sans font-light" style={{}}>
                            Notes (optional)
                          </label>
<textarea className="w-full rounded-md bg-white/5 text-white placeholder-slate-400 ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/20" name="notes" placeholder="Agency/ORI, number of people, access instructions…" rows="2"></textarea>
</div>
<label className="inline-flex items-center gap-2 text-xs text-slate-300 font-sans font-light" style={{}}>
<input className="rounded bg-white/5 ring-1 ring-white/10" name="sms" type="checkbox"/>
                          I agree to receive appointment updates by SMS/email
                        </label>
</div>

<div className="mt-4 rounded-lg bg-white/5 ring-1 ring-white/10 p-3 text-sm">
<div className="grid grid-cols-3 gap-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-badge-check h-4 w-4 text-emerald-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-slate-200 font-sans font-light" id="summary-service" style={{}}>FD-258 Ink Card</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar h-4 w-4 text-slate-300" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-slate-200 font-sans font-light" id="summary-date" style={{}}>Today</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock h-4 w-4 text-slate-300" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-slate-200 font-sans font-light" id="summary-time" style={{}}>10:00 AM</span>
</div>
</div>
</div>
<div className="mt-5 flex items-center gap-2">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 text-white px-4 py-2.5 text-sm ring-1 ring-white/20 hover:bg-white/15 transition font-sans font-light" id="back-to-step-1" style={{}} type="button">
                          Back
                        </button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 text-slate-900 px-4 py-2.5 text-sm hover:bg-emerald-300 transition font-sans font-light" style={{}} type="submit">
                          Submit request
                          <svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</form>
</div>

<div className="hidden mt-2 text-center p-6" id="success">
<div className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400">
<svg className="lucide lucide-check h-5 w-5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h4 className="mt-3 text-lg tracking-tight text-white font-sans font-light" style={{}}>
                      Request sent!
                    </h4>
<p className="mt-1 text-sm text-slate-300 font-sans font-light" style={{}}>
                      Thanks—our team will confirm your
                      <span className="font-sans font-light" style={{}}>time</span>
                      and
                      <span className="font-sans font-light" style={{}}>service</span>
                      shortly.
                    </p>
<a className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 text-sm hover:bg-slate-100 transition font-sans font-light" href="#book" style={{}}>
                      Book another
                    </a>
</div>

<div className="hidden">
<span className="bg-white/20 bg-emerald-400/20 text-emerald-300 ring-emerald-400 ring-2 opacity-50 cursor-not-allowed"></span>
</div>

</div><div className="[animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll animate bg-white w-full max-w-2xl ring-black/5 ring-1 rounded-3xl mr-auto ml-auto relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{display: 'none'}}>

<div className="flex items-center justify-between border-b border-slate-100 px-5 sm:px-6 py-4">
<div className="flex items-center gap-2 text-slate-500">
<button className="p-1.5 rounded-md hover:bg-slate-100">
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="text-sm font-sans font-light" style={{}}>Select a time</span>
<button className="p-1.5 rounded-md hover:bg-slate-100">
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="hidden sm:flex items-center gap-3 w-72">
<div className="relative w-full">
<svg className="lucide lucide-search absolute left-3 top-2.5 h-4 w-4 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 py-2 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="Search services (Livescan, Passport Photo, Background)" type="text"/>
</div>
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-12">


<main className="col-span-8 sm:col-span-8">
<div className="px-3 sm:px-6 py-5">
<div className="flex items-center justify-between">
<h3 className="text-lg sm:text-xl tracking-tight text-slate-900 font-sans font-light" style={{}}>
                        Wed, 18th — Paramount Plaza
                      </h3>
<div className="flex items-center gap-2 text-slate-500">
<button className="p-1.5 rounded-md hover:bg-slate-100">
<svg className="lucide lucide-chevron-left h-4 w-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-1.5 rounded-md hover:bg-slate-100">
<svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="mt-4 relative">
<div className="grid grid-cols-1">
<div className="relative">

<div className="grid grid-rows-6 gap-6 text-[11px] text-slate-400">
<div className="relative pl-14">
<span className="absolute left-0 top-0 font-sans font-light" style={{}}>10:00</span>
<div className="h-px w-full bg-slate-100"></div>
</div>
<div className="relative pl-14">
<span className="absolute left-0 top-0 font-sans font-light" style={{}}>11:00</span>
<div className="h-px w-full bg-slate-100"></div>
</div>
<div className="relative pl-14">
<span className="absolute left-0 top-0 font-sans font-light" style={{}}>12:00</span>
<div className="h-px w-full bg-slate-100"></div>
</div>
<div className="relative pl-14">
<span className="absolute left-0 top-0 font-sans font-light" style={{}}>13:00</span>
<div className="h-px w-full bg-slate-100"></div>
</div>
<div className="relative pl-14">
<span className="absolute left-0 top-0 font-sans font-light" style={{}}>14:00</span>
<div className="h-px w-full bg-slate-100"></div>
</div>
<div className="relative pl-14">
<span className="absolute left-0 top-0 font-sans font-light" style={{}}>15:00</span>
<div className="h-px w-full bg-slate-100"></div>
</div>
</div>

<div className="absolute inset-0">
<div className="absolute left-16 right-4 top-[12%] h-24 rounded-xl border-2 border-dashed border-sky-200 bg-sky-50/60 shadow-sm">
<div className="p-3">
<p className="text-xs sm:text-sm truncate font-sans font-light" style={{}}>
                                  Livescan Fingerprinting
                                </p>
<p className="text-[11px] text-slate-500 font-sans font-light" style={{}}>
                                  11:00 – 11:20 • Est. $35 + govt fees
                                </p>
<div className="mt-2 flex items-center gap-2 text-xs text-emerald-700 font-sans font-light" style={{}}>
<svg className="lucide lucide-badge-check h-3.5 w-3.5" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
                                  Electronic submission
                                </div>
</div>
</div>
<div className="absolute left-16 right-24 top-[56%] h-20 rounded-xl bg-amber-50 shadow-sm ring-1 ring-amber-100">
<div className="p-3">
<p className="text-xs sm:text-sm truncate font-sans font-light" style={{}}>
                                  FD‑258 Ink Card
                                </p>
<p className="text-[11px] text-slate-500 font-sans font-light" style={{}}>
                                  13:45 – 14:05 • $35 first card
                                </p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#pricing" style={{}}>
<svg className="lucide lucide-info h-3.5 w-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                          Government fees vary by agency; we’ll show an estimate
                          at checkout.
                        </a>
</div>
</div>
</div>
</main>
</div>

<div className="md:absolute md:-right-8 md:top-16 md:w-[420px] ring-white/10 ring-1 text-slate-100 bg-slate-900 rounded-3xl mt-0 mr-4 ml-4 mb-6 md:mb-0 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
</div>
</div>

</div>
</div>
</div>
</section>

<section className="z-10 relative" id="process">
<div className="w-full">
<div className="sm:px-8 sm:py-16 lg:py-20 text-slate-100 bg-slate-900 w-full ring-white/10 ring-1 pt-12 pr-5 pb-12 pl-5">
<div className="mx-auto max-w-3xl text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate font-sans font-light" style={{}}>
<svg className="lucide lucide-workflow h-3.5 w-3.5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
              How it works
            </span>
<h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl tracking-tight [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate font-bricolage font-light" style={{}}>
              Easy, guided fingerprinting from start to finish
            </h2>
<p className="mt-4 text-sm sm:text-base text-slate-300 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll animate font-sans font-light" style={{}}>
              Book online, visit our Los Angeles location or schedule mobile
              service, and we’ll submit your fingerprints electronically where
              applicable.
            </p>
</div>
<div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8 [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll animate">
<span className="inline-flex text-[11px] items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-sans font-light" style={{}}>
                Step 1
              </span>
<h3 className="mt-3 text-xl sm:text-2xl tracking-tight font-bricolage font-light" style={{}}>
                Choose your service
              </h3>
<p className="mt-2 text-sm text-slate-300 font-sans font-light" style={{}}>
                Livescan fingerprinting (in‑store or mobile), FD‑258 ink cards,
                and mobile on‑site teams for groups and employers.
              </p>
<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="rounded-lg bg-slate-800 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-fingerprint h-4.5 w-4.5" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
<span className="text-sm font-sans font-light" style={{}}>Livescan</span>
</div>
<span className="text-xs text-slate-400 font-sans font-light" style={{}}>Electronic</span>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
<span className="inline-flex items-center gap-1 rounded-md bg-slate-700/70 px-2 py-1 font-sans font-light" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                      DOJ/FBI routing
                    </span>
<span className="inline-flex items-center gap-1 rounded-md bg-slate-700/70 px-2 py-1 font-sans font-light" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                      20 min
                    </span>
</div>
</div>
<div className="rounded-lg bg-slate-800 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-200">
<svg className="lucide lucide-pen-tool h-4.5 w-4.5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<span className="text-sm font-sans font-light" style={{}}>FD‑258 Ink</span>
</div>
<span className="text-xs text-slate-400 font-sans font-light" style={{}}>Hard copy</span>
</div>
<ul className="mt-3 space-y-2 text-xs text-slate-300">
<li className="flex items-center gap-2 font-sans font-light" style={{}}>
<svg className="lucide lucide-check-circle-2 h-3.5 w-3.5 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                      Accepted nationwide
                    </li>
<li className="flex items-center gap-2 font-sans font-light" style={{}}>
<svg className="lucide lucide-file-text h-3.5 w-3.5 text-sky-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                      Extra cards available
                    </li>
</ul>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll animate">
<span className="inline-flex text-[11px] items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-sans font-light" style={{}}>
                Step 2
              </span>
<h3 className="mt-3 text-xl sm:text-2xl tracking-tight font-bricolage font-light" style={{}}>
                Pick a time
              </h3>
<p className="mt-2 text-sm text-slate-300 font-sans font-light" style={{}}>
                Same‑day and next‑day appointments. We honor posted hours—no
                extended lunches. Walk‑ins welcome during business hours.
              </p>
<div className="bg-slate-800 ring-white/10 ring-1 rounded-lg mt-5 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between text-xs text-slate-400">
<span className="inline-flex items-center gap-1 font-sans font-light" style={{}}>
<svg className="lucide lucide-wand-2 h-3.5 w-3.5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                    Smart slots
                  </span>
<span className="font-sans font-light" style={{}}>Most availability</span>
</div>
<div className="mt-3 grid grid-cols-7 gap-1">
<div className="h-14 rounded-md bg-slate-700/60 relative flex flex-col justify-end p-1 gap-0.5">
<div className="h-3 rounded bg-emerald-400/80 w-full"></div>
</div>
<div className="h-14 rounded-md bg-slate-700/60 relative flex flex-col justify-end p-1 gap-0.5">
<div className="h-2 rounded bg-amber-400/80 w-full"></div>
</div>
<div className="h-14 rounded-md bg-slate-700/60 relative flex flex-col justify-end p-1 gap-0.5">
<div className="h-3 rounded bg-sky-400/80 w-full"></div>
</div>
<div className="h-14 rounded-md bg-slate-700/60 relative flex flex-col justify-end p-1 gap-0.5">
<div className="h-2 rounded bg-rose-400/80 w-full"></div>
</div>
<div className="h-14 rounded-md bg-slate-700/60 relative flex flex-col justify-end p-1 gap-0.5">
<div className="h-3 rounded bg-emerald-400/80 w-full"></div>
</div>
<div className="h-14 rounded-md bg-slate-700/60 relative flex flex-col justify-end p-1 gap-0.5">
<div className="h-2 rounded bg-indigo-400/80 w-full"></div>
</div>
<div className="h-14 rounded-md bg-slate-700/60 relative flex flex-col justify-end p-1 gap-0.5">
<div className="h-3 rounded bg-sky-400/80 w-full"></div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-emerald-300 font-sans font-light" style={{}}>Plenty of slots</span>
<span className="text-slate-400 font-sans font-light" style={{}}>Most days 10a–6p</span>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 sm:p-8 [animation:fadeSlideIn_0.5s_ease-out_0.6s_both] animate-on-scroll animate">
<span className="inline-flex text-[11px] items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-sans font-light" style={{}}>
                Step 3
              </span>
<h3 className="mt-3 text-xl sm:text-2xl tracking-tight font-bricolage font-light" style={{}}>
                Get fingerprinted
              </h3>
<p className="mt-2 text-sm text-slate-300 font-sans font-light" style={{}}>
                Bring a valid photo ID and your request form/ORI. Our
                technicians guide you end‑to‑end.
              </p>
<div className="mt-5 rounded-lg bg-slate-800 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-xs text-slate-300">
<div className="flex -space-x-2">
<img alt="" className="ring-2 ring-slate-800 w-7 h-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-7 h-7 object-cover ring-slate-800 ring-2 rounded-full" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-7 h-7 object-cover ring-slate-800 ring-2 rounded-full" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-slate-400 font-sans font-light" style={{}}>
                    Patient, certified technicians
                  </span>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-start gap-2 text-xs">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<p className="text-slate-200 font-sans font-light" style={{}}>
                      Flat, rolled, and slaps captured with quality checks.
                    </p>
</div>
<div className="flex items-start gap-2 text-xs">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<p className="text-slate-200 font-sans font-light" style={{}}>
                      First‑time pass guarantee: free reprint/rescan within 30
                      days; if our capture causes a rejection, we refund your
                      service fee.
                    </p>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-3 py-2 text-xs hover:bg-slate-100 transition font-sans font-light" href="#book" style={{}}>
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    Book now
                  </a>
<span className="text-xs text-slate-400 font-sans font-light" style={{}}>
                    Avg. visit: 15–20 minutes
                  </span>
</div>
</div>
</div>

<div className="sm:p-8 bg-white/5 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 [animation:fadeSlideIn_0.5s_ease-out_0.7s_both] animate-on-scroll animate">
<span className="inline-flex text-[11px] items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-sans font-light" style={{}}>
                Step 4
              </span>
<h3 className="mt-3 text-lg sm:text-2xl tracking-tight font-bricolage font-light" style={{}}>
                Submission &amp; results
              </h3>
<p className="mt-2 text-sm text-slate-300 font-sans font-light" style={{}}>
                Live Scan submissions are sent electronically to the requesting
                agency. Processing times vary by request.
              </p>
<div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
<div className="rounded-lg bg-slate-800 ring-1 ring-white/10 p-3 sm:p-4 text-center">
<div className="text-xl sm:text-2xl tracking-tight text-white font-bricolage font-light" style={{}}>
                    15–20m
                  </div>
<div className="mt-1 text-[10px] sm:text-[11px] text-slate-400 font-sans font-light" style={{}}>
                    In‑office visit
                  </div>
</div>
<div className="rounded-lg bg-slate-800 ring-1 ring-white/10 p-3 sm:p-4 text-center">
<div className="text-xl sm:text-2xl tracking-tight text-white font-bricolage font-light" style={{}}>
                    3–7 days
                  </div>
<div className="mt-1 text-[10px] sm:text-[11px] text-slate-400 font-sans font-light" style={{}}>
                    Typical results window
                  </div>
</div>
<div className="rounded-lg bg-slate-800 ring-1 ring-white/10 p-3 sm:p-4 text-center">
<div className="text-xl sm:text-2xl tracking-tight text-white font-bricolage font-light" style={{}}>
                    Email/SMS
                  </div>
<div className="mt-1 text-[10px] sm:text-[11px] text-slate-400 font-sans font-light" style={{}}>
                    Status updates
                  </div>
</div>
</div>
<div className="flex gap-2 text-xs text-slate-300 mt-4 items-center">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-sans font-light" style={{}}>
                  We provide receipts and submission tracking where available.
                </span>
</div>
</div>
</div>

<div className="mt-10 lg:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.8s_both] animate-on-scroll animate">
<a className="inline-flex hover:bg-white/90 transition text-sm text-slate-900 bg-white rounded-xl pt-3 pr-5 pb-3 pl-5 items-center gap-2 font-sans font-light" href="#book" style={{}}>
              Book appointment
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex gap-2 hover:bg-white/10 transition text-sm text-white bg-white/5 rounded-xl pt-3 pr-5 pb-3 pl-5 ring-1 ring-white/10 items-center font-sans font-light" href="#mobile" style={{}}>
<svg className="lucide lucide-truck h-4 w-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
              Request mobile team
            </a>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="about">
<div className="mt-20 mb-20 w-full">
<div className="sm:px-8 sm:py-16 lg:py-20 text-slate-900 w-full pt-12 pr-5 pb-12 pl-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mx-auto max-w-7xl">
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<figure className="rounded-2xl overflow-hidden ring-1 ring-slate-900/10 bg-slate-100">
<img alt="Technician capturing fingerprints with a live scan device" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1659353886868-753b0c5c5772?w=1600&amp;q=80"/>
</figure>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm font-sans font-light" style={{}}>
<svg className="lucide lucide-sparkle h-3.5 w-3.5" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                About American Live Scan
              </span>
<h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bricolage font-light" style={{}}>
                Fast, friendly, and reliable in LA.
              </h2>
<p className="mt-4 text-sm sm:text-base text-slate-600 font-sans font-light" style={{}}>
                We help individuals and organizations complete background checks
                and licensing requirements with speed and care. Appointments run
                on time, instructions are simple, and our technicians guide you
                through every step. Our patient, certified technicians take the
                time to get clear prints—even for hard‑to‑capture fingers.
              </p>
<div className="mt-6">
<a className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm bg-slate-900 text-white hover:bg-black transition shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] font-sans font-light" href="#faq" style={{}}>
                  See common questions
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-900/10 p-4">
<p className="text-base tracking-tight font-sans font-light" style={{}}>
                    Secure handling
                  </p>
<p className="mt-1 text-[11px] text-slate-600 font-sans font-light" style={{}}>
                    Encrypted submissions where applicable
                  </p>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-900/10 p-4">
<p className="text-base tracking-tight font-sans font-light" style={{}}>
                    Quick visits
                  </p>
<p className="mt-1 text-[11px] text-slate-600 font-sans font-light" style={{}}>
                    15–20 minute appointments
                  </p>
</div>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-900/10 p-4">
<p className="text-base tracking-tight font-sans font-light" style={{}}>
                    Patient, certified techs
                  </p>
<p className="mt-1 text-[11px] text-slate-600 font-sans font-light" style={{}}>
                    We take time to get clear prints
                  </p>
</div>
</div>
<div className="mt-6 flex items-center gap-4 text-xs text-slate-600">
<div className="inline-flex items-center gap-1.5 font-sans font-light" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Open today 9:00a–7:00p
                </div>
<div className="inline-flex items-center gap-1.5 font-sans font-light" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Walk‑ins welcome
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="pricing">
<div className="w-full mt-20 mb-20">
<div className="sm:px-8 sm:py-16 lg:py-20 text-slate-900 w-full pt-12 pr-5 pb-12 pl-5">
<div className="mx-auto max-w-7xl">

<div className="mx-auto max-w-3xl text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate font-sans font-light" style={{}}>
<svg className="lucide lucide-badge-dollar-sign h-3.5 w-3.5" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
                Simple, transparent pricing
              </span>
<h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl tracking-tight [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate font-bricolage font-light" style={{}}>
                Only pay for the service you need
              </h2>
<p className="mt-4 text-sm sm:text-base text-slate-600 [animation:fadeSlideIn_0.5s_ease-out_0.3s_both] animate-on-scroll font-sans font-light" style={{}}>
                Government fees vary by agency and are added at checkout for
                Livescan submissions.
              </p>
</div>

<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm [animation:fadeSlideIn_0.5s_ease-out_0.4s_both] animate-on-scroll" id="services">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-sans font-light" style={{}}>
                    Livescan Fingerprinting
                  </h3>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 font-sans font-light" style={{}}>
                    Most popular
                  </span>
</div>
<p className="mt-3 text-sm text-slate-600 font-sans font-light" style={{}}>
                  Electronic submission to the requesting agency.
                </p>
<div className="mt-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl tracking-tight font-bricolage font-light" style={{}}>
                      $35
                    </span>
<span className="text-sm text-slate-600 font-sans font-light" style={{}}>+ govt fees</span>
</div>
<p className="mt-1 text-xs text-slate-500 font-sans font-light" style={{}}>
                    Fees shown before you confirm
                  </p>
</div>

<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
<p className="text-xs text-slate-700 font-sans font-light" style={{}}>
                    Livescan pricing
                  </p>
<ul className="mt-2 space-y-1.5 text-xs text-slate-700">
<li className="flex items-center justify-between">
<span className="font-sans font-light" style={{}}>$35 — Live Scan</span>
</li>
<li className="flex items-center justify-between">
<span className="font-sans font-light" style={{}}>
                        $32 — Registration with California Department of Justice
                        (DOJ)
                      </span>
</li>
</ul>
</div>
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm bg-slate-100 text-slate-900 hover:bg-slate-200 transition font-sans font-light" href="#book" style={{}}>
                  Book Livescan
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-slate-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-600 font-sans font-light" style={{}}>
                      Digital capture with quality checks
                    </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-slate-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-600 font-sans font-light" style={{}}>
                      Submission routing to DOJ/FBI (as requested)
                    </span>
</li>
</ul>
</div>

<div className="rounded-2xl border-2 border-slate-900 bg-white p-6 sm:p-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] relative [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] animate-on-scroll">
<div className="absolute -top-4 left-0 right-0 flex justify-center">
<span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs text-white font-sans font-light" style={{}}>
<svg className="lucide lucide-star h-3 w-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    Great value
                  </span>
</div>
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-sans font-light" style={{}}>
                    Fingerprint Card (FD‑258)
                  </h3>
<span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs text-emerald-700 font-sans font-light" style={{}}>
                    Walk‑ins OK
                  </span>
</div>
<p className="mt-3 text-sm text-slate-600 font-sans font-light" style={{}}>
                  Hard copy fingerprints on standard FD‑258 cards.
                </p>
<div className="mt-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl tracking-tight font-bricolage font-light" style={{}}>
                      $35
                    </span>
<span className="text-sm text-slate-600 font-sans font-light" style={{}}>first card</span>
</div>
<p className="mt-1 text-xs text-slate-500 font-sans font-light" style={{}}>
                    $15 each additional card
                  </p>
</div>
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm bg-slate-900 text-white hover:bg-black transition shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06)] font-sans font-light" href="#book" style={{}}>
                  Book Fingerprint Card
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-slate-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-600 font-sans font-light" style={{}}>
                      Two rolled impressions per finger
                    </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-slate-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-600 font-sans font-light" style={{}}>We supply FD‑258 cards</span>
</li>
</ul>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm [animation:fadeSlideIn_0.5s_ease-out_0.6s_both] animate-on-scroll" id="mobile">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-sans font-light" style={{}}>
                    Mobile On‑Site Teams
                  </h3>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700 font-sans font-light" style={{}}>
                    Custom
                  </span>
</div>
<p className="mt-3 text-sm text-slate-600 font-sans font-light" style={{}}>
                  Perfect for employers, schools, and events across Los Angeles.
                </p>
<div className="mt-6">
<div className="flex items-baseline gap-1">
<span className="text-4xl tracking-tight font-bricolage font-light" style={{}}>
                      From $99
                    </span>
</div>
<p className="mt-1 text-xs text-slate-500 font-sans font-light" style={{}}>
                    Trip fee + per‑person rates • Group discounts 10+
                  </p>
</div>
<a className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm bg-slate-100 text-slate-900 hover:bg-slate-200 transition font-sans font-light" href="#cta" style={{}}>
                  Request a quote
                  <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex items-start gap-3">
<svg className="lucide lucide-calendar-check-2 h-5 w-5 text-slate-900 shrink-0" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
<span className="text-slate-600 font-sans font-light" style={{}}>
                      On‑time arrival; we stay through your booked window
                    </span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check h-5 w-5 text-slate-900 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-slate-600 font-sans font-light" style={{}}>
                      Flexible scheduling, evenings available
                    </span>
</li>
</ul>
</div>
</div>

<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-600 [animation:fadeSlideIn_0.5s_ease-out_0.7s_both] animate-on-scroll">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-sans font-light" style={{}}>Clean, professional studio</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-headset h-4 w-4 text-emerald-600" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
<span className="font-sans font-light" style={{}}>Calls/texts answered by humans</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-sans font-light" style={{}}>First‑time pass guarantee</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10" id="cta">
<div className="w-full mt-20 mb-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll">
<div className="absolute inset-0 opacity-10">
<div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-white to-slate-300 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-white to-slate-300 blur-3xl"></div>
</div>
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight font-bricolage font-light" style={{}}>
                  Ready to get fingerprinted?
                </h2>
<p className="mt-4 text-base sm:text-lg text-slate-300 font-sans font-light" style={{}}>
                  Book your Livescan or FD‑258 fingerprint card today. Walk‑ins
                  welcome, appointments guaranteed.
                </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm bg-white text-slate-900 hover:bg-slate-100 transition shadow-lg font-sans font-light" href="#book" style={{}}>
                    Book now
                    <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-white/20 font-sans font-light" href="sms:+12133861038" style={{}}>
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    Text us
                  </a>
</div>
<div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans font-light" style={{}}>Same‑day availability</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="lucide lucide-headset h-4 w-4 text-emerald-400" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
<span className="font-sans font-light" style={{}}>Humans answer calls &amp; texts</span>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 p-6">
<div className="flex items-center gap-3 pb-4 border-b border-white/10">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 object-cover ring-slate-900 ring-2 rounded-full" src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-8 h-8 object-cover ring-slate-900 ring-2 rounded-full" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<img alt="" className="ring-2 ring-slate-900 w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-sans font-light" style={{}}>American Live Scan</p>
<p className="text-xs text-slate-400 font-sans font-light" style={{}}>
                        Los Angeles • Open today
                      </p>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300 font-sans font-light" style={{}}>Avg. visit time</span>
<span className="text-emerald-400 font-sans font-light" style={{}}>
                        15–20 minutes
                      </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300 font-sans font-light" style={{}}>Same‑day slots</span>
<span className="text-emerald-400 font-sans font-light" style={{}}>
                        Available
                      </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300 font-sans font-light" style={{}}>Avg. response time</span>
<span className="text-emerald-400 font-sans font-light" style={{}}>
                        Under 2 minutes
                      </span>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="font-sans font-light" style={{}}>Walk‑ins welcome • Appointment recommended</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

<div className="col-span-2">
<div className="inline-flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center ring-1 ring-slate-900/10">
<svg className="lucide lucide-fingerprint w-5 h-5" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
</div>
<span className="text-base tracking-tight font-sans font-light" style={{}}>
                American Live Scan
              </span>
</div>
<p className="mt-4 text-sm text-slate-600 max-w-xs font-sans font-light" style={{}}>
              Fast, accurate fingerprinting in Los Angeles. Livescan
              submissions, FD‑258 fingerprint cards, and mobile on‑site teams.
            </p>
<div className="mt-6 flex flex-col gap-2 text-sm text-slate-700">
<div className="inline-flex items-center gap-2 font-sans font-light" style={{}}>
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Paramount Plaza — 3580 Wilshire Blvd Suite 132, Los Angeles, CA
                90010
              </div>
<div className="inline-flex items-center gap-2 font-sans font-light" style={{}}>
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Mon–Sat 9:00a–7:00p • Sun by appointment • We honor posted hours
              </div>
<div className="inline-flex items-center gap-2 font-sans font-light" style={{}}>
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                (213) 386‑1038 • Human‑answered
              </div>
<div className="inline-flex items-center gap-2 font-sans font-light" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                support@americanlivescan.com
              </div>
</div>
</div>

<div>
<h3 className="text-sm text-slate-900 font-sans font-light" style={{}}>Services</h3>
<ul className="mt-4 space-y-3 text-sm">
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#pricing" style={{}}>
                  Livescan Fingerprinting
                </a>
</li>
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#pricing" style={{}}>
                  Passport Photo
                </a>
</li>
</ul>
</div>

<div>
<h3 className="text-sm text-slate-900 font-sans font-light" style={{}}>Company</h3>
<ul className="mt-4 space-y-3 text-sm">
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#about" style={{}}>
                  About
                </a>
</li>
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#process" style={{}}>
                  How it works
                </a>
</li>
</ul>
</div>

<div>
<h3 className="text-sm text-slate-900 font-sans font-light" id="faq" style={{}}>
              Resources
            </h3>
<ul className="mt-4 space-y-3 text-sm">
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#book" style={{}}>
                  Book an appointment
                </a>
</li>
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#" style={{}}>
                  Accepted IDs
                </a>
</li>
</ul>
</div>

<div>
<h3 className="text-sm text-slate-900 font-sans font-light" style={{}}>Legal</h3>
<ul className="mt-4 space-y-3 text-sm">
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#" style={{}}>
                  Privacy
                </a>
</li>
<li>
<a className="text-slate-600 hover:text-slate-900 transition font-sans font-light" href="#" style={{}}>
                  Terms
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-600 font-sans font-light" style={{}}>
            © 2024 American Live Scan. All rights reserved.
          </p>
<div className="flex items-center gap-4 text-xs text-slate-600">
<span className="inline-flex items-center gap-1.5 font-sans font-light" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              All systems operational
            </span>
<span className="text-slate-400 font-sans font-light" style={{}}>
              Government fees are set by the requesting agency and may change
              without notice.
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
