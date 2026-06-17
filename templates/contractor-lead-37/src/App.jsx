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



      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
          };

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach((el) => {
              observer.observe(el);
          });
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 flex items-center h-[4.5rem]">
<div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
<a className="font-semibold tracking-tighter text-lg text-white uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-orange-500 text-xl" icon="solar:chart-square-linear"></iconify-icon>
          LEADSAKOLYTOS
        </a>
<div className="hidden md:flex items-center space-x-8 text-sm text-slate-300">
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="/#case-studies">Case</a>
<a className="hover:text-white transition-colors" href="#faq">FAQs</a>
</div>
<div>
<a className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium rounded-full px-6 py-2.5 transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(234,88,12,0.3)]" href="#schedule">
            Get Your Free Audit
          </a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-950 border-b border-white/5">
<div className="absolute inset-0 z-0 bg-grid-navy"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">
<div className="reveal active">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-[1px] bg-orange-500"></div>
<span className="font-medium tracking-widest uppercase text-xs text-orange-500">
              Web Design for Contractors
            </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-white">
            Turn Your Website Into a
            <br/>
<span className="text-slate-400 font-light">
              24/7 Lead-Generating Machine.
            </span>
</h1>
<p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-lg mb-10 font-light">
            Stop losing high-ticket jobs to competitors with better-looking
            websites. We design fast, mobile-friendly, and SEO-optimized
            websites built specifically to convert homeowners into paying
            clients.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium rounded-full px-8 py-4 transition-all transform hover:-translate-y-0.5" href="#schedule">
              Get Your Free Website Audit
              <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center bg-transparent border border-slate-700 hover:bg-slate-800 text-slate-300 hover:text-white text-sm font-normal rounded-full px-8 py-4 transition-all" href="#pricing">
              See Our Work
            </a>
</div>
</div>

<div className="relative reveal delay-200 hidden lg:block active">
<div className="relative w-full aspect-square rounded-full border border-slate-800 flex items-center justify-center p-8 bg-slate-900/50 backdrop-blur-sm">
<div className="absolute inset-0 border border-slate-700/50 rounded-full scale-75 border-dashed animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-0 border border-orange-500/20 rounded-full scale-50"></div>
<div className="relative z-10 w-full max-w-xs bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
<div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
<iconify-icon className="text-2xl" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 mb-1">New Lead Acquired</p>
<p className="text-sm text-white font-medium">
                    Kitchen Remodel — $85k Budget
                  </p>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Intent Score</span>
<span className="text-orange-500 font-medium tracking-widest">
                    HIGH
                  </span>
</div>
<div className="w-full bg-slate-900 rounded-full h-1.5">
<div className="bg-orange-500 h-1.5 rounded-full w-[92%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-slate-900 relative border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 reveal">
<span className="font-medium tracking-widest uppercase text-xs text-blue-500 mb-6 block">
            Empathy &amp; Competency
          </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
            You Build Homes.
            <br className="hidden md:block"/>
            We Build Websites.
          </h2>
<p className="text-slate-400 leading-relaxed mb-8">
            After 10 years of experience in the trenches of a family
            construction business, we know that you don't have the time or
            desire to learn how to code a website. We also know the frustration
            of paying an expensive agency for a website that never actually
            makes the phone ring. We built Leads Akolytos to provide small
            businesses with expert guidance that doesn’t break the bank. We
            handle the design, the tech, and the hosting, so you can focus
            entirely on your craft.
          </p>
<div className="flex items-start gap-4 p-5 border border-slate-800 bg-slate-950/50 rounded-xl">
<iconify-icon className="text-2xl text-orange-500 mt-1 flex-shrink-0" icon="lucide:message-square-quote"></iconify-icon>
<p className="text-sm text-slate-300 italic">
              "Our old website was embarrassing, and we were losing remodeling
              bids to guys who did worse work but had better marketing. Leads
              Akolytos built us a brand-new site that looks incredibly
              professional. Our conversion rate tripled in the first month."
              <br/>
<span className="block mt-2 font-medium text-orange-500 not-italic">
                — Mike R., General Contractor
              </span>
</p>
</div>
</div>

<div className="lg:col-span-7 reveal delay-100">
<div className="relative w-full aspect-video bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden group cursor-pointer shadow-2xl">

<div className="absolute inset-0 bg-slate-800 bg-[url('https://images.unsplash.com/photo-1541888081198-b9846b0fc5ba?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.4)] group-hover:scale-110 transition-transform duration-300 pl-2">
<iconify-icon className="text-4xl text-white" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-4 flex items-start gap-3 px-2">
<iconify-icon className="text-slate-500 mt-0.5 text-lg" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-sm text-slate-400 italic">
              Watch: How 10 years in the construction trenches led to a better
              way to get leads.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-950 relative border-b border-slate-800 overflow-hidden" id="system">
<div className="absolute inset-0 z-0 bg-grid-navy opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-2 lg:order-1">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              An Outdated Website is Costing You High-Ticket Jobs
            </h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
              When a homeowner needs a roof replaced, a kitchen remodeled, or an
              emergency plumbing fix, they pull out their phone and search
              Google. If they click your link and your website looks like it was
              built in 2005, takes too long to load, or is hard to navigate on a
              smartphone, they will immediately leave and call your competitor.
            </p>
<ul className="space-y-4 text-sm text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:x-circle"></iconify-icon>
<div>
                  Looking unprofessional and losing trust before you even get a
                  chance to quote the job.
                </div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:x-circle"></iconify-icon>
<div>
                  Wasting money on ads or SEO because your site traffic
                  "bounces" instead of filling out a contact form.
                </div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:x-circle"></iconify-icon>
<div>
                  Missing out on emergency service calls because your phone
                  number isn't easily clickable on mobile devices.
                </div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:x-circle"></iconify-icon>
<div>
                  Getting buried on Google because search engines penalize slow,
                  outdated, and non-mobile-friendly websites.
                </div>
</li>
</ul>
</div>
<div className="order-1 lg:order-2">
<div className="relative w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl reveal delay-100 bg-slate-900 group">
<div className="absolute inset-0 w-full h-full flex flex-col bg-slate-950">
<div className="h-16 border-b border-slate-800 flex items-center px-8 justify-between">
<div className="text-white font-semibold tracking-tighter text-lg">
                    PREMIUM BUILDS
                  </div>
<div className="hidden md:flex gap-6">
<div className="h-2 w-16 bg-slate-800 rounded"></div>
<div className="h-2 w-16 bg-slate-800 rounded"></div>
</div>
<div className="h-8 w-32 bg-orange-600 rounded-md"></div>
</div>
<div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-slate-900/50 -skew-x-12 translate-x-1/4"></div>
<div className="w-full max-w-lg relative z-10">
<div className="h-4 w-32 bg-orange-500/20 rounded mb-6 flex items-center px-2">
<div className="h-1 w-1/2 bg-orange-500 rounded"></div>
</div>
<div className="h-12 w-full bg-white rounded-md mb-4"></div>
<div className="h-12 w-4/5 bg-white rounded-md mb-8"></div>
<div className="space-y-3 mb-10">
<div className="h-3 w-full bg-slate-800 rounded"></div>
<div className="h-3 w-5/6 bg-slate-800 rounded"></div>
<div className="h-3 w-4/6 bg-slate-800 rounded"></div>
</div>
<div className="flex gap-4">
<div className="h-12 w-40 bg-orange-600 rounded-md"></div>
<div className="h-12 w-40 border border-slate-700 rounded-md"></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 h-full w-[50%] bg-[#e5e5e5] border-r-2 border-slate-400 overflow-hidden" id="before-panel" style={{width: '50%'}}>
<div className="absolute inset-0 w-[1000px] h-full scanlines pt-10 px-8">
<div className="w-[800px] h-[500px] bg-white border-4 border-[#c0c0c0] shadow-inner p-2 flex flex-col">
<div className="h-8 bg-gradient-to-b from-[#0a246a] to-[#a6caf0] flex items-center px-2 mb-2">
<span className="text-white text-xs font-sans font-medium">
                        Internet Explorer - Bob's Contracting
                      </span>
</div>
<div className="flex-1 border border-[#c0c0c0] p-6 overflow-hidden relative">
<div className="text-center mb-6">
<h1 className="text-[#0000ee] text-3xl font-serif underline mb-2">
                          WELCOME TO BOB'S HOME REPAIR
                        </h1>
<div className="w-full h-1 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=')] repeat-x"></div>
</div>
<div className="flex gap-6">
<div className="w-48">
<div className="bg-[#ffffcc] border border-[#ffcc00] p-2 mb-4 text-xs font-serif text-red-600 font-bold text-center blink">
                            *** CALL US NOW ***
                            <br/>
                            555-0199
                          </div>
<ul className="text-sm font-serif text-blue-800 underline space-y-2">
<li>Home Page</li>
<li>About Us</li>
<li>Pictures of work</li>
<li>Contact Bob</li>
</ul>
</div>
<div className="flex-1 text-sm font-serif text-black space-y-4">
<p>
                            We do all kinds of work. Roofs, floors, kitchens. We
                            have been in business since 1995. Quality
                            guaranteed.
                          </p>
<div className="flex gap-2">
<div className="w-32 h-24 bg-stone-300 border-2 border-stone-500 flex items-center justify-center text-[10px] text-stone-500">
                              Image missing
                            </div>
<div className="w-32 h-24 bg-stone-300 border-2 border-stone-500 flex items-center justify-center text-[10px] text-stone-500">
                              Image missing
                            </div>
</div>
<p className="text-xs bg-cyan-200 inline-block p-1 mt-4 border border-black">
                            Email us at: bob_contractor@aol.com
                          </p>
</div>
</div>
</div>
</div>
</div>
</div>
<input className="absolute inset-0 w-full h-full opacity-0 z-30 m-0" max="100" min="0" oninput="document.getElementById('before-panel').style.width = this.value + '%'; document.getElementById('slider-line').style.left = this.value + '%';" type="range" value="50"/>
<div className="absolute top-0 bottom-0 w-1 bg-orange-500 z-20 pointer-events-none -ml-[2px]" id="slider-line" style={{left: '50%'}}>
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 bg-slate-900 border border-slate-700 rounded-full shadow-lg flex items-center justify-center text-white">
<iconify-icon className="rotate-90 text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
</div>
<div className="absolute bottom-6 left-6 z-20 bg-stone-200 text-stone-900 text-[10px] font-medium px-3 py-1.5 rounded tracking-widest uppercase shadow-md pointer-events-none transition-opacity group-hover:opacity-0">
                The Old Way
              </div>
<div className="absolute bottom-6 right-6 z-20 bg-slate-800/80 text-white text-[10px] font-medium px-3 py-1.5 rounded backdrop-blur-md tracking-widest uppercase border border-slate-700 pointer-events-none transition-opacity group-hover:opacity-0">
                Leads Akolytos
              </div>
</div>
<p className="text-center text-xs text-slate-500 mt-6 reveal delay-200">
              Drag to see the digital transformation
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-900 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="w-full max-w-3xl mx-auto text-center border-b border-slate-800 pb-16 mb-16 reveal">
<a className="inline-flex items-center gap-2 text-white hover:text-orange-500 text-sm font-medium transition-colors group" href="#case-studies">
            View the Contractor Case Study
            <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal">
<div className="order-1">
<div className="aspect-square md:aspect-video lg:aspect-square bg-slate-950 rounded-2xl border border-slate-800 p-8 flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 space-y-4">
<div className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl opacity-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-xs text-slate-400">
                      Budget: Under $5k
                    </span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest">
                    Filtered
                  </span>
</div>
<div className="w-full bg-orange-600/10 border border-orange-500/30 p-4 rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.1)] flex items-center justify-between transform scale-105">
<div>
<div className="flex items-center gap-3 mb-1">
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
<span className="text-sm font-medium text-white">
                        Full Home Renovation
                      </span>
</div>
<span className="text-xs text-slate-400 pl-5">
                      Budget: $150k+ | Timeline: ASAP
                    </span>
</div>
<span className="text-xs text-orange-500 uppercase tracking-widest font-medium">
                    Passed to CRM
                  </span>
</div>
<div className="w-full bg-slate-900 border border-slate-700 p-4 rounded-xl opacity-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-xs text-slate-400">
                      Renter / Not Owner
                    </span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-widest">
                    Filtered
                  </span>
</div>
</div>
</div>
</div>
<div className="order-2">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
              Web Design Built Specifically for the Construction Industry
            </h2>
<p className="text-slate-400 text-base leading-relaxed mb-8">
              At Leads Akolytos, we don't just build "pretty" websites. We build
              digital storefronts engineered to capture leads and grow your
              bottom line. Our custom web design services combine superior
              quality with affordability.
            </p>
<ul className="space-y-4 text-sm text-slate-300 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<strong className="text-white font-medium">
                    Mobile-First Design:
                  </strong>
                  Over 60% of home service searches happen on a smartphone. We
                  ensure your site looks flawless and functions perfectly on
                  every device.
                </div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<strong className="text-white font-medium">
                    Conversion-Focused Layouts:
                  </strong>
                  We place clear, compelling "Call Now" or "Get a Free Estimate"
                  buttons exactly where users expect them, removing all friction
                  from booking a job.
                </div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<strong className="text-white font-medium">
                    Built for SEO from Day One:
                  </strong>
                  A beautiful site is useless if no one can find it. We build
                  your site on a technical foundation that Google loves,
                  ensuring maximum speed and search visibility.
                </div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5 text-lg flex-shrink-0" icon="lucide:check-circle"></iconify-icon>
<div>
<strong className="text-white font-medium">
                    Showcasing Your Craft:
                  </strong>
                  We create stunning portfolio galleries and dedicated service
                  pages that highlight your expertise in roofing, remodeling,
                  plumbing, or building.
                </div>
</li>
</ul>
<a className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium rounded-full px-8 py-4 transition-all transform hover:-translate-y-0.5 shadow-[0_0_15px_rgba(234,88,12,0.3)]" href="#schedule">
              Schedule a Call
            </a>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 bg-slate-950 border-b border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="font-medium tracking-widest uppercase text-xs text-orange-500 mb-6 block">
            The Process
          </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Three Simple Steps to a
            <br className="hidden md:block"/>
            Website You Can Be Proud Of
          </h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Upgrading your digital presence shouldn't be a headache. We make the
            web design process completely effortless for you.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal delay-100">
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="text-6xl font-light text-slate-800 absolute -top-4 -right-2 group-hover:text-orange-500/10 transition-colors select-none pointer-events-none">
              01
            </div>
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon className="text-2xl" icon="lucide:calendar"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-white">
              Schedule a Free Consultation
            </h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">
              We’ll evaluate your current website (or your ideas for a new one)
              and map out exactly what you need to attract your ideal clients.
            </p>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="text-6xl font-light text-slate-800 absolute -top-4 -right-2 group-hover:text-orange-500/10 transition-colors select-none pointer-events-none">
              02
            </div>
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon className="text-2xl" icon="lucide:pen-tool"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-white">
              Review Your Custom Design
            </h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">
              Our team will build a modern, high-converting mockup tailored to
              your brand, services, and local market.
            </p>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="text-6xl font-light text-slate-800 absolute -top-4 -right-2 group-hover:text-orange-500/10 transition-colors select-none pointer-events-none">
              03
            </div>
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
<iconify-icon className="text-2xl" icon="lucide:rocket"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-4 text-white">
              Launch &amp; Generate Leads
            </h3>
<p className="text-slate-400 text-sm leading-relaxed font-light">
              We handle the technical launch, optimize the site for Google, and
              hand you the keys to a powerful new lead-generation engine.
            </p>
</div>
</div>
<div className="text-center mt-12 reveal delay-200">
<a className="inline-flex items-center justify-center gap-2 bg-transparent border border-orange-500 hover:bg-orange-500/10 text-orange-500 text-sm font-medium rounded-full px-8 py-4 transition-all" href="#schedule">
            Get Your Free Website Audit
          </a>
</div>
</div>
</section>

<section className="py-32 relative bg-slate-950 overflow-hidden" id="schedule">

<div className="absolute inset-0 z-0 bg-grid-navy opacity-30"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<span className="w-16 h-16 mx-auto bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
<iconify-icon className="text-3xl text-orange-500" icon="solar:phone-calling-linear"></iconify-icon>
</span>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8">
          Don't Let Bad Design
          <br className="hidden md:block"/>
<span className="text-slate-500 font-light">Hold Your Business Back</span>
</h2>
<p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light">
          Many highly skilled contractors grapple with the challenge of
          generating high-quality leads simply because their website doesn't
          reflect the quality of their physical work. By partnering with us,
          you’ll transform your online presence into a powerful asset that
          builds trust instantly. Empower yourself to focus on what you do
          best—building and repairing beautiful homes—while your website works
          around the clock to bring in new business.
        </p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center bg-orange-600 hover:bg-orange-500 text-white text-base font-medium rounded-full px-10 py-5 transition-all transform hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(234,88,12,0.6)] w-full sm:w-auto" href="#">
            Schedule a Call
          </a>
<span className="text-xs text-slate-600">
            Takes 30 seconds. No pressure, just strategy.
          </span>
</div>
</div>
</section>

<footer className="bg-[#05080f] py-16 border-t border-slate-900 text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<a className="font-semibold tracking-tighter text-lg text-white uppercase flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-orange-500" icon="solar:chart-square-linear"></iconify-icon>
            LEADSAKOLYTOS
          </a>
<p className="text-slate-500 font-light text-xs leading-relaxed max-w-xs">
            Engineering high-conversion digital assets and lead generation
            systems exclusively for the construction trades.
          </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs tracking-widest uppercase">
            Platform
          </h4>
<ul className="space-y-3 text-slate-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Services
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Case Studies
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs tracking-widest uppercase">
            Support
          </h4>
<ul className="space-y-3 text-slate-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">FAQs</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Careers</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Contact Us
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-xs tracking-widest uppercase">
            Contact
          </h4>
<ul className="space-y-3 text-slate-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="mailto:hello@leadsakolytos.com">
                hello@leadsakolytos.com
              </a>
</li>
<li>
<a className="text-orange-500 hover:text-orange-400 transition-colors inline-flex items-center gap-1" href="#schedule">
                Book Strategy Session
                <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 font-light">
<p>© 2024 Leads Akolytos. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-slate-400 transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>



    </>
  );
}
