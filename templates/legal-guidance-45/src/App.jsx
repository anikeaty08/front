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



      // Render icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Interactive demo logic
      const steps = [
        document.getElementById('step-1'),
        document.getElementById('step-2'),
        document.getElementById('step-3'),
      ];
      const nextBtn = document.getElementById('demo-next');
      const prevBtn = document.getElementById('demo-prev');
      const progress = document.getElementById('demo-progress');
      const stepLabel = document.getElementById('demo-step-label');
      const matches = document.getElementById('demo-matches');
      let current = 0;
      let chosenArea = null;

      function updateUI() {
        steps.forEach((s, i) => s.classList.toggle('hidden', i !== current));
        progress.style.width = `${((current + 1) / steps.length) * 100}%`;
        stepLabel.textContent = `Step ${current + 1} of ${steps.length}`;
        prevBtn.disabled = current === 0;
        nextBtn.textContent = current === steps.length - 1 ? 'Finish' : 'Next';
      }
      updateUI();

      // area selection (step 1)
      steps[0].querySelectorAll('button[data-area]').forEach(btn => {
        btn.addEventListener('click', () => {
          chosenArea = btn.getAttribute('data-area');
          steps[0].querySelectorAll('button[data-area]').forEach(b => {
            b.classList.remove('ring-neutral-300');
            b.style.background = '#FFFFFF';
          });
          btn.classList.add('ring-neutral-300');
          btn.style.background = '#FFF7F3';
        });
      });

      nextBtn.addEventListener('click', () => {
        if (current === 0 && !chosenArea) {
          // nudge
          steps[0].querySelectorAll('button[data-area]').forEach(b => b.classList.add('ring-neutral-300'));
          return;
        }
        if (current === 1) {
          // prepare matches
          const desc = document.getElementById('demo-description').value || 'General consultation';
          const urgency = document.getElementById('demo-urgency').value;
          const budget = document.getElementById('demo-budget').value;
          matches.innerHTML = [
            {
              name: 'Ariana Chen, Esq.',
              spec: chosenArea || 'Business Law',
              rate: '$180/hr',
              rating: '4.9',
              time: '~3m',
              img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200'
            },
            {
              name: 'Daniel Ortega, Esq.',
              spec: chosenArea || 'Contracts',
              rate: '$160/hr',
              rating: '4.8',
              time: '~5m',
              img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200'
            }
          ].map(card => `
            <div class="rounded-xl bg-white ring-1 ring-neutral-200 p-4 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-10 w-10 rounded-full object-cover ring-2 ring-white" alt="">
                <div>
                  <div class="text-[14px] font-medium tracking-tight">${card.name}</div>
                  <div class="text-[12px] text-neutral-500">${card.spec} • ${card.rate}</div>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="text-[12px] text-neutral-600 inline-flex items-center gap-1">
                  <i data-lucide="star" class="w-4 h-4 text-yellow-500"></i> ${card.rating}
                </div>
                <a href="#"
                   class="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-lg text-white ring-1 ring-black/5"
                   style="background:var(--accent);">
                  Consult
                </a>
              </div>
            </div>
          `).join('') + `
            <div class="text-[12.5px] text-neutral-600">
              Request includes: “${desc}” • ${urgency} • ${budget}
            </div>
          `;
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        if (current < steps.length - 1) {
          current++;
          updateUI();
        } else {
          // restart for demo
          current = 0;
          chosenArea = null;
          document.getElementById('demo-description').value = '';
          updateUI();
        }
      });

      prevBtn.addEventListener('click', () => {
        if (current > 0) {
          current--;
          updateUI();
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
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a className="group inline-flex items-center gap-3" href="#">
<div className="h-8 w-8 rounded-md border border-neutral-200 bg-white shadow-sm grid place-content-center tracking-tight text-[12px] font-semibold text-[#1A1A1A] group-hover:shadow transition-all">
              LA
            </div>
<span className="sr-only">LegalAdvisor</span>
<div className="hidden sm:flex flex-col leading-tight">
<span className="text-[14px] font-medium tracking-tight" style={{fontFamily: '\'Manrope\', system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>LegalAdvisor</span>
<span className="text-[12px] text-neutral-500">Expert legal + AI</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-[14px] text-neutral-700 hover:text-[#1A1A1A] transition-colors" href="#services">Services</a>
<a className="text-[14px] text-neutral-700 hover:text-[#1A1A1A] transition-colors" href="#demo">Demo</a>
<a className="text-[14px] text-neutral-700 hover:text-[#1A1A1A] transition-colors" href="#use-cases">Use Cases</a>
<a className="text-[14px] text-neutral-700 hover:text-[#1A1A1A] transition-colors" href="#pricing">Pricing</a>
<a className="text-[14px] text-neutral-700 hover:text-[#1A1A1A] transition-colors" href="#testimonials">Testimonials</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-[14px] text-neutral-700 hover:text-[#1A1A1A] transition-colors" href="#">
<i className="w-4 h-4" data-lucide="log-in"></i>
              Sign in
            </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-[14px] font-medium text-white shadow-sm ring-1 ring-black/5" href="#hero-cta" style={{background: 'var(--accent)'}}>
<i className="w-4 h-4" data-lucide="sparkles"></i>
              Get Legal Help Now
            </a>
</div>
</div>
</div>
</header>

<section className="relative" id="hero">

<div className="absolute inset-0 -z-10">
<div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-50" style={{background: 'radial-gradient(60% 60% at 50% 50%, #FFF 0%, #EDEEF4 60%, transparent 100%)'}}></div>
<div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-60" style={{background: 'radial-gradient(60% 60% at 50% 50%, #FFF 0%, #E9F0FA 60%, transparent 100%)'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

<div className="lg:col-span-6">
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#111111] font-semibold" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
              Expert Legal Guidance at Your Fingertips
            </h1>
<p className="mt-5 text-[16.5px] leading-7 text-neutral-700" style={{fontFamily: '\'Manrope\', system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
              Connect instantly with vetted lawyers and an AI legal assistant for clear, actionable advice. From quick clarifications to complex strategy—get confident, confidential guidance when it matters.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3" id="hero-cta">
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-medium text-white shadow-sm ring-1 ring-black/5 hover:shadow-md transition-all hover:-translate-y-0.5" href="#demo" style={{background: 'var(--accent)'}}>
<i className="w-5 h-5" data-lucide="scale"></i>
                Get Legal Help Now
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-medium text-[#1A1A1A] bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 hover:-translate-y-0.5 transition-all" href="#services">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                Explore Services
              </a>
</div>

<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200"/>
</div>
<div className="text-[13px] text-neutral-600">
                Trusted by 10,000+ clients. Avg. rating 4.9/5.
              </div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative">

<div className="relative grid gap-6">

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-[#E9F0FA] grid place-content-center ring-1 ring-neutral-200">
<i className="w-4 h-4 text-[#1A1A1A]" data-lucide="bot"></i>
</div>
<div>
<div className="text-[14px] font-medium tracking-tight">AI Legal Assistant</div>
<div className="text-[12px] text-neutral-500">Instant, reliable guidance</div>
</div>
</div>
<div className="text-[12px] text-neutral-500">Secure</div>
</div>
<div className="mt-4 space-y-3">
<div className="max-w-[85%] rounded-xl px-4 py-3 bg-[#F5F7FA] text-[13.5px] text-neutral-800 ring-1 ring-neutral-200">
                      How do I structure a consulting agreement to protect IP?
                    </div>
<div className="ml-auto max-w-[90%] rounded-xl px-4 py-3 bg-white text-[13.5px] text-neutral-800 ring-1 ring-neutral-200">
                      Consider a clear IP ownership clause with “work-made-for-hire” language and a perpetual assignment. Would you like a vetted template?
                    </div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                      Draft Clause
                    </button>
<button className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<i className="w-4 h-4" data-lucide="file-text"></i>
                      Review My Doc
                    </button>
</div>
</div>

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200"/>
<div>
<div className="text-[14.5px] font-medium tracking-tight">Ariana Chen, Esq.</div>
<div className="text-[12px] text-neutral-500">Business &amp; IP Law • 8 yrs</div>
</div>
</div>
<div className="text-[12px] text-neutral-600 inline-flex items-center gap-1">
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i> 4.9
                    </div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-[#F9FAFB] ring-1 ring-neutral-200 p-3">
<div className="text-[11px] text-neutral-500">Rate</div>
<div className="text-[14px] font-medium">$180/hr</div>
</div>
<div className="rounded-lg bg-[#F9FAFB] ring-1 ring-neutral-200 p-3">
<div className="text-[11px] text-neutral-500">Response</div>
<div className="text-[14px] font-medium">~3m</div>
</div>
<div className="rounded-lg bg-[#F9FAFB] ring-1 ring-neutral-200 p-3">
<div className="text-[11px] text-neutral-500">Licensed</div>
<div className="text-[14px] font-medium">CA • NY</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-lg text-white shadow-sm ring-1 ring-black/5" style={{background: 'var(--accent)'}}>
<i className="w-4 h-4" data-lucide="message-circle"></i>
                      Request Consult
                    </button>
<button className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<i className="w-4 h-4" data-lucide="eye"></i>
                      View Profile
                    </button>
</div>
</div>

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm overflow-hidden">
<div className="p-4 flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">Platform Preview</div>
<div className="text-[12px] text-neutral-500">1:12</div>
</div>
<div className="relative">
<video autoplay="" className="w-full aspect-video object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1555371363-230a1b1d8b7b?q=80&amp;w=1200" src="https://www.w3schools.com/html/mov_bbb.mp4">
</video>
<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-neutral-200/60"></div>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</section>

<section className="relative" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#111111]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            What we offer
          </h2>
<a className="hidden md:inline-flex items-center gap-2 text-[14px] text-[#1A1A1A]" href="#demo">
            See how it works <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-shadow shadow-sm hover:shadow-md p-6">
<div className="h-10 w-10 rounded-md bg-[#E9F0FA] ring-1 ring-neutral-200 grid place-content-center">
<i className="w-5 h-5 text-[#1A1A1A]" data-lucide="briefcase"></i>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>Legal Consultation</h3>
<p className="mt-2 text-[14.5px] text-neutral-700">
              Fast access to vetted attorneys across specialties—instant chat or scheduled calls tailored to your case.
            </p>
<div className="mt-4 text-[13.5px] text-neutral-600 inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i> Avg response ~3 minutes
            </div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-shadow shadow-sm hover:shadow-md p-6">
<div className="h-10 w-10 rounded-md bg-[#E9F0FA] ring-1 ring-neutral-200 grid place-content-center">
<i className="w-5 h-5 text-[#1A1A1A]" data-lucide="bot"></i>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>AI Legal Assistant</h3>
<p className="mt-2 text-[14.5px] text-neutral-700">
              Verified guidance on demand—draft clauses, summarize cases, and prepare with confidence.
            </p>
<div className="mt-4 text-[13.5px] text-neutral-600 inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i> Private &amp; encrypted
            </div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-shadow shadow-sm hover:shadow-md p-6">
<div className="h-10 w-10 rounded-md bg-[#E9F0FA] ring-1 ring-neutral-200 grid place-content-center">
<i className="w-5 h-5 text-[#1A1A1A]" data-lucide="file-text"></i>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>Document Review</h3>
<p className="mt-2 text-[14.5px] text-neutral-700">
              Clause-by-clause analysis from experts and AI, with clear risks, suggestions, and redlines.
            </p>
<div className="mt-4 text-[13.5px] text-neutral-600 inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="pen-tool"></i> Redlines &amp; suggested edits
            </div>
</div>
</div>
</div>
</section>

<section className="relative" id="demo">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#111111]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            Try the matching flow
          </h2>
<div className="hidden md:flex items-center gap-2 text-[14px] text-neutral-600">
            Seamless, guided, and private
          </div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-6 rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-6">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">Lawyer Matching</div>
<div className="text-[12px] text-neutral-500" id="demo-step-label">Step 1 of 3</div>
</div>

<div className="mt-4 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-[var(--accent)] rounded-full transition-all" id="demo-progress" style={{width: '33%'}}></div>
</div>

<div className="mt-6 space-y-6">

<div className="" id="step-1">
<div className="text-[14px] text-neutral-700">Which area best fits your matter?</div>
<div className="mt-3 flex flex-wrap gap-2">
<button className="px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 text-[13.5px]" data-area="Business Law">Business Law</button>
<button className="px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 text-[13.5px]" data-area="Personal Injury">Personal Injury</button>
<button className="px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 text-[13.5px]" data-area="Family Law">Family Law</button>
<button className="px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 text-[13.5px]" data-area="Employment">Employment</button>
<button className="px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 text-[13.5px]" data-area="Contracts">Contracts</button>
</div>
</div>

<div className="hidden" id="step-2">
<div className="text-[14px] text-neutral-700">Briefly describe your case:</div>
<textarea className="mt-3 w-full rounded-lg bg-white ring-1 ring-neutral-200 focus:ring-neutral-300 outline-none p-3 text-[14px] placeholder:text-neutral-400" id="demo-description" placeholder="e.g., Drafting a consulting agreement with IP protection…" rows="4"></textarea>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-lg bg-[#F9FAFB] ring-1 ring-neutral-200 p-3">
<div className="text-[11px] text-neutral-500">Urgency</div>
<select className="mt-1 w-full bg-transparent outline-none text-[13px]" id="demo-urgency">
<option>Within a day</option>
<option>Within a week</option>
<option>Flexible</option>
</select>
</div>
<div className="rounded-lg bg-[#F9FAFB] ring-1 ring-neutral-200 p-3">
<div className="text-[11px] text-neutral-500">Budget</div>
<select className="mt-1 w-full bg-transparent outline-none text-[13px]" id="demo-budget">
<option>$ - Initial consult</option>
<option>$$ - Standard</option>
<option>$$$ - Complex</option>
</select>
</div>
</div>
</div>

<div className="hidden" id="step-3">
<div className="text-[14px] text-neutral-700">Top matches for you:</div>
<div className="mt-3 space-y-3" id="demo-matches">

</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<button className="inline-flex items-center gap-2 text-[13.5px] px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 text-neutral-700 disabled:opacity-50" id="demo-prev">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back
              </button>
<button className="inline-flex items-center gap-2 text-[13.5px] px-3 py-2 rounded-lg text-white shadow-sm ring-1 ring-black/5" id="demo-next" style={{background: 'var(--accent)'}}>
                Next <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="lg:col-span-6">
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-5">
<div className="flex items-center justify-between">
<div className="text-[14px] font-medium tracking-tight">Consultation Workspace</div>
<div className="inline-flex items-center gap-2 text-[12px] text-neutral-600">
<i className="w-4 h-4" data-lucide="wifi"></i>
                  Live
                </div>
</div>
<div className="mt-4 rounded-xl ring-1 ring-neutral-200 overflow-hidden bg-[#FBFCFE]">

<svg className="w-full h-auto" viewbox="0 0 1100 600">
<defs>
<lineargradient id="grad" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#FFFFFF"></stop>
<stop offset="100%" stop-color="#F3F6FB"></stop>
</lineargradient>
</defs>

<rect fill="url(#grad)" height="600" stroke="#E5E7EB" width="260" x="0" y="0"></rect>
<rect fill="#FFFFFF" height="38" rx="8" stroke="#E5E7EB" width="228" x="16" y="20"></rect>
<circle cx="36" cy="39" fill="#E9F0FA" r="9" stroke="#E5E7EB"></circle>
<text fill="#111111" fontFamily="Manrope, sans-serif" fontSize="14" x="56" y="44">Search lawyers...</text>

<g>
<circle cx="36" cy="94" fill="#E9F0FA" r="16" stroke="#E5E7EB"></circle>
<rect fill="#111111" height="14" opacity="0.85" rx="3" width="160" x="64" y="78"></rect>
<rect fill="#9CA3AF" height="10" rx="3" width="120" x="64" y="98"></rect>
</g>
<g>
<circle cx="36" cy="154" fill="#E9F0FA" r="16" stroke="#E5E7EB"></circle>
<rect fill="#111111" height="14" opacity="0.85" rx="3" width="140" x="64" y="138"></rect>
<rect fill="#9CA3AF" height="10" rx="3" width="100" x="64" y="158"></rect>
</g>
<g>
<circle cx="36" cy="214" fill="#E9F0FA" r="16" stroke="#E5E7EB"></circle>
<rect fill="#111111" height="14" opacity="0.85" rx="3" width="150" x="64" y="198"></rect>
<rect fill="#9CA3AF" height="10" rx="3" width="120" x="64" y="218"></rect>
</g>

<rect fill="#FFFFFF" height="600" stroke="#E5E7EB" width="840" x="260" y="0"></rect>

<rect fill="#FFFFFF" height="64" stroke="#E5E7EB" width="840" x="260" y="0"></rect>
<circle cx="292" cy="32" fill="#E9F0FA" r="12" stroke="#E5E7EB"></circle>
<text fill="#111111" fontFamily="Manrope, sans-serif" fontSize="14" x="314" y="37">New Consultation</text>

<rect fill="#FBFCFE" height="380" rx="12" stroke="#E5E7EB" width="808" x="276" y="88"></rect>

<rect fill="#F5F7FA" height="48" rx="12" stroke="#E5E7EB" width="360" x="300" y="116"></rect>
<rect fill="#FFFFFF" height="48" rx="12" stroke="#E5E7EB" width="360" x="704" y="178"></rect>
<rect fill="#F5F7FA" height="48" rx="12" stroke="#E5E7EB" width="420" x="300" y="242"></rect>
<rect fill="#FFFFFF" height="48" rx="12" stroke="#E5E7EB" width="420" x="644" y="304"></rect>

<rect fill="#FFFFFF" height="60" rx="12" stroke="#E5E7EB" width="808" x="276" y="488"></rect>
<text fill="#6B7280" fontFamily="Manrope, sans-serif" fontSize="14" x="296" y="525">Ask a question or @mention a lawyer...</text>
<circle cx="1046" cy="518" fill="#FF6522" r="14"></circle>
</svg>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-lg bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition">
<i className="w-4 h-4" data-lucide="mouse-pointer-click"></i>
                  Interact
                </button>
<button className="inline-flex items-center gap-2 text-[13px] px-3 py-2 rounded-lg text-white shadow-sm ring-1 ring-black/5" style={{background: 'var(--accent)'}}>
<i className="w-4 h-4" data-lucide="send"></i>
                  Start a consult
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="use-cases">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#111111]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
          Tailored for every legal moment
        </h2>
<p className="mt-3 text-[15px] text-neutral-700 max-w-2xl">
          Whether you’re forming a company or navigating personal matters, get the right expertise—fast.
        </p>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="building-2"></i>
<span className="text-[14px]">Business Law</span>
</div>
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="ambulance"></i>
<span className="text-[14px]">Personal Injury</span>
</div>
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="heart"></i>
<span className="text-[14px]">Family Law</span>
</div>
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="file-signature"></i>
<span className="text-[14px]">Contracts</span>
</div>
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="briefcase"></i>
<span className="text-[14px]">Employment</span>
</div>
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="plane"></i>
<span className="text-[14px]">Immigration</span>
</div>
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="home"></i>
<span className="text-[14px]">Real Estate</span>
</div>
<div className="group flex items-center gap-2 rounded-xl bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition p-3">
<i className="w-4 h-4" data-lucide="lamp-desk"></i>
<span className="text-[14px]">Intellectual Property</span>
</div>
</div>
</div>
</section>

<section className="relative" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#111111]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            Clients who found clarity
          </h2>
<div className="hidden md:flex items-center gap-2 text-[14px] text-neutral-600">
            Real stories from real cases
          </div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Marcus L.</div>
<div className="text-[12px] text-neutral-500">Founder</div>
</div>
</div>
<p className="mt-4 text-[14.5px] text-neutral-700">
              The AI draft was spot-on and the attorney’s edits were surgical. We closed our vendor contract in a day.
            </p>
<div className="mt-3 text-[13px] text-neutral-600 inline-flex items-center gap-1">
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
</div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Elena R.</div>
<div className="text-[12px] text-neutral-500">HR Director</div>
</div>
</div>
<p className="mt-4 text-[14.5px] text-neutral-700">
              Clear guidance on employment policy updates—fast. The platform feels premium and effortless.
            </p>
<div className="mt-3 text-[13px] text-neutral-600 inline-flex items-center gap-1">
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500 opacity-60" data-lucide="star"></i>
</div>
</div>
<div className="rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-6">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Priya S.</div>
<div className="text-[12px] text-neutral-500">Operations</div>
</div>
</div>
<p className="mt-4 text-[14.5px] text-neutral-700">
              Felt like having an in-house counsel. The match was perfect and the advice was actionable.
            </p>
<div className="mt-3 text-[13px] text-neutral-600 inline-flex items-center gap-1">
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18">
<div className="text-center max-w-2xl mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-[#111111]" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>
            Simple, transparent pricing
          </h2>
<p className="mt-3 text-[15px] text-neutral-700">
            Start free. Scale with priority response and dedicated counsel.
          </p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

<div className="flex flex-col rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
<div className="text-[14px] font-medium tracking-tight">Starter</div>
<div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>$0</div>
<div className="text-[13px] text-neutral-600">Pay-as-you-go consultations</div>
<ul className="mt-4 space-y-2 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> AI assistant access</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Standard response</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Secure docs</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-[14px] font-medium bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition" href="#demo">
                Get Started
              </a>
</div>
</div>

<div className="flex flex-col rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm relative">
<div className="absolute -top-3 right-6 text-[11px] px-2 py-1 rounded-full text-white" style={{background: 'var(--accent)'}}>Popular</div>
<div className="text-[14px] font-medium tracking-tight">Professional</div>
<div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>$39<span className="text-[13px] text-neutral-500">/mo</span></div>
<div className="text-[13px] text-neutral-600">Priority support + discounted rates</div>
<ul className="mt-4 space-y-2 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Priority response</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> 10% off legal hours</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Advanced AI drafting</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-[14px] font-medium text-white ring-1 ring-black/5 hover:shadow-sm transition" href="#demo" style={{background: 'var(--accent)'}}>
                Upgrade
              </a>
</div>
</div>

<div className="flex flex-col rounded-2xl bg-white ring-1 ring-neutral-200 p-6 shadow-sm">
<div className="text-[14px] font-medium tracking-tight">Enterprise</div>
<div className="mt-2 text-3xl font-semibold tracking-tight" style={{fontFamily: '\'Playfair Display\', Georgia, serif'}}>Custom</div>
<div className="text-[13px] text-neutral-600">Dedicated counsel &amp; SLAs</div>
<ul className="mt-4 space-y-2 text-[14px] text-neutral-700">
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Legal ops workspace</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> SSO &amp; compliance</li>
<li className="inline-flex items-center gap-2"><i className="w-4 h-4 text-green-600" data-lucide="check"></i> Dedicated counsel bench</li>
</ul>
<div className="mt-6">
<a className="inline-flex w-full justify-center items-center gap-2 rounded-lg px-4 py-2.5 text-[14px] font-medium bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition" href="#demo">
                Contact Sales
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-neutral-200/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="inline-flex items-center gap-3">
<div className="h-8 w-8 rounded-md border border-neutral-200 bg-white shadow-sm grid place-content-center tracking-tight text-[12px] font-semibold text-[#1A1A1A]">LA</div>
<div className="text-[14px] font-medium tracking-tight">LegalAdvisor</div>
</div>
<p className="mt-3 text-[14px] text-neutral-600 max-w-sm">
              Expert lawyers and AI assistance—confident decisions without the complexity.
            </p>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight text-neutral-800">Product</div>
<ul className="mt-3 space-y-2 text-[14px] text-neutral-700">
<li><a className="hover:text-[#1A1A1A]" href="#services">Services</a></li>
<li><a className="hover:text-[#1A1A1A]" href="#demo">Demo</a></li>
<li><a className="hover:text-[#1A1A1A]" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight text-neutral-800">Company</div>
<ul className="mt-3 space-y-2 text-[14px] text-neutral-700">
<li><a className="hover:text-[#1A1A1A]" href="#">About</a></li>
<li><a className="hover:text-[#1A1A1A]" href="#">Careers</a></li>
<li><a className="hover:text-[#1A1A1A]" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-[13px] font-medium tracking-tight text-neutral-800">Legal</div>
<ul className="mt-3 space-y-2 text-[14px] text-neutral-700">
<li><a className="hover:text-[#1A1A1A]" href="#">Privacy</a></li>
<li><a className="hover:text-[#1A1A1A]" href="#">Terms</a></li>
<li><a className="hover:text-[#1A1A1A]" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="text-[13px] text-neutral-600">© <span id="year"></span> LegalAdvisor. All rights reserved.</div>
<div className="flex items-center gap-4 text-[13px] text-neutral-600">
<a className="inline-flex items-center gap-1 hover:text-[#1A1A1A]" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i> Twitter
            </a>
<a className="inline-flex items-center gap-1 hover:text-[#1A1A1A]" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i> LinkedIn
            </a>
<a className="inline-flex items-center gap-1 hover:text-[#1A1A1A]" href="#">
<i className="w-4 h-4" data-lucide="mail"></i> Email
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
