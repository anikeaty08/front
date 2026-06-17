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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Router Function
        function route(event, pageId) {
            if(event) event.preventDefault();
            
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show requested section
            const activeSection = document.getElementById(pageId);
            if (activeSection) {
                activeSection.classList.add('active');
                window.scrollTo(0, 0);
                
                // Update URL history without reload
                history.pushState(null, null, `#${pageId}`);
                
                // Update active state in Nav if needed (optional visual cue)
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('text-slate-900');
                    link.classList.add('text-slate-500');
                    if(link.getAttribute('data-target') === pageId) {
                        link.classList.remove('text-slate-500');
                        link.classList.add('text-slate-900');
                    }
                });
            }
        }

        // Handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            route(null, hash);
        });

        // Initial Load
        document.addEventListener('DOMContentLoaded', () => {
            const hash = window.location.hash.replace('#', '') || 'home';
            route(null, hash);
        });

        // Mobile Menu Logic
        function toggleMobile() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Form Submission Logic
        function handleFormSubmit(event, containerId) {
            event.preventDefault(); // Stop default navigation
            
            const form = event.target;
            const btn = form.querySelector('button[type="submit"]');
            const isDarkBtn = btn.classList.contains('bg-slate-900');
            
            // 1. Loading State
            btn.disabled = true;
            btn.innerHTML = `<span class="spinner ${isDarkBtn ? '' : 'spinner-dark'}"></span> Sending...`;
            
            // 2. AJAX Submission to Formspree
            const data = new FormData(form);
            
            fetch("https://formspree.io/f/xqeqpobz", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    // 3. Success Message Replacement
                    const container = document.getElementById(containerId);
                    container.innerHTML = `
                        <div class="flex flex-col items-center justify-center text-center py-12 px-4 animation-fadeIn h-full min-h-[300px]">
                            <div class="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-6 ring-4 ring-emerald-50/50">
                                <span class="iconify" data-icon="lucide:check" data-width="28"></span>
                            </div>
                            <h3 class="text-xl font-medium text-stone-100 mb-2 tracking-tight">Inquiry Received</h3>
                            <p class="text-stone-500 text-sm max-w-xs mx-auto mb-8 leading-relaxed">
                                Thanks for reaching out. A strategist will review your brand details and contact you shortly.
                            </p>
                            <button onclick="location.reload()" class="text-xs font-medium text-stone-400 hover:text-stone-600 underline transition-colors">
                                Send another message
                            </button>
                        </div>
                    `;
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                             alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                             alert("Oops! There was a problem submitting your form");
                        }
                        // Reset button
                        btn.disabled = false;
                        btn.innerHTML = isDarkBtn ? "Submit Inquiry" : "Book a Free Amazon Growth Call";
                    });
                }
            }).catch(error => {
                 alert("Oops! There was a problem submitting your form");
                 btn.disabled = false;
                 btn.innerHTML = isDarkBtn ? "Submit Inquiry" : "Book a Free Amazon Growth Call";
            });
        }
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ZHhDKfVqqu8PKOSMwfuA"></div>

</div></div>

<header className="fixed top-0 left-0 right-0 backdrop-blur-md border-b z-[100] bg-black/90 border-stone-800" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase select-none cursor-pointer text-stone-100" href="#home" onclick="route(event, 'home')" style={{}}>
                Amazon Titans
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500" style={{}}>
<a className="nav-link transition-colors hover:text-stone-100" data-target="home" href="#home" onclick="route(event, 'home')" style={{}}>Home</a>
<a className="nav-link transition-colors hover:text-stone-100" data-target="services" href="#services" onclick="route(event, 'services')">Services</a>
<a className="nav-link transition-colors hover:text-stone-100" data-target="pricing" href="#pricing" onclick="route(event, 'pricing')" style={{}}>Pricing</a>
<a className="nav-link transition-colors hover:text-stone-100" data-target="casestudies" href="#casestudies" onclick="route(event, 'casestudies')" style={{}}>Case Studies</a>
<a className="nav-link transition-colors hover:text-stone-100" data-target="about" href="#about" onclick="route(event, 'about')" style={{}}>About</a>
<a className="ml-2 px-4 py-2 rounded-md transition-colors bg-stone-100 text-black hover:bg-stone-200" href="#contact" onclick="route(event, 'contact')" style={{}}>Book a Free Amazon Growth Call</a>
</nav>

<button className="md:hidden p-2 text-stone-100" onclick="toggleMobile()" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full border-b p-6 flex flex-col gap-4 text-sm font-medium shadow-lg z-[99] bg-black border-stone-800" id="mobile-menu" style={{}}>
<a className="block py-2 border-b border-stone-950" href="#home" onclick="route(event, 'home'); toggleMobile()" style={{}}>Home</a>
<a className="block py-2 border-b border-stone-950" href="#services" onclick="route(event, 'services'); toggleMobile()" style={{}}>Services</a>
<a className="block py-2 border-b border-stone-950" href="#pricing" onclick="route(event, 'pricing'); toggleMobile()" style={{}}>Pricing</a>
<a className="block py-2 border-b border-stone-950" href="#casestudies" onclick="route(event, 'casestudies'); toggleMobile()" style={{}}>Case Studies</a>
<a className="block py-2 border-b border-stone-950" href="#about" onclick="route(event, 'about'); toggleMobile()" style={{}}>About</a>
<a className="block py-2 font-bold text-pink-100" href="#contact" onclick="route(event, 'contact'); toggleMobile()" style={{}}>Book Call</a>
</div>
</header>
<main className="flex-grow pt-16 relative">

<div className="page-section active" id="home">

<section className="md:py-32 text-center max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 max-w-4xl mx-auto text-stone-100" style={{}}>
                    We Scale Amazon Brands With Data — Not Guesswork.
                </h1>
<p className="text-lg md:text-xl text-stone-500 font-light mb-10 max-w-2xl mx-auto leading-relaxed" style={{}}>
                    Amazon PPC, listing optimization, and full-service account management for brands doing $50K–$40M/year who want profitable growth.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<button className="px-8 py-3 font-medium rounded-lg transition shadow-sm w-full sm:w-auto bg-stone-100 text-black hover:bg-stone-200" onclick="route(event, 'contact')" style={{}}>
                        Book a Free Amazon Growth Call
                    </button>
<button className="px-8 py-3 border font-medium rounded-lg transition w-full sm:w-auto bg-black text-stone-100 border-stone-800 hover:bg-stone-950" onclick="route(event, 'services')" style={{}}>
                        See How It Works
                    </button>
</div>

<div className="border-t pt-8 flex flex-wrap justify-center gap-6 md:gap-12 text-sm text-stone-500 font-medium border-stone-900" style={{}}>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:bar-chart-2" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Amazon-native growth strategies</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:target" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg> Performance-focused PPC management</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:award" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg> Senior-level operators, not juniors</div>
<div className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:file-text" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg> Transparent reporting &amp; clear KPIs</div>
</div>
</section>

<section className="border-y py-16 border-stone-900 bg-stone-950/50" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold uppercase tracking-widest mb-10 text-stone-600" style={{}}>Some of Our Clients</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-1.5 text-stone-100" style={{}} title="That's it.">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="font-bold tracking-tighter text-xl lowercase">That's it.</span>
</div>
<div className="flex items-center gap-2 text-stone-100" style={{}} title="Discovery Kids">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe-2" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="font-black tracking-tight text-lg uppercase">Discovery<span className="text-pink-400" style={{}}>Kids</span></span>
</div>
<div className="flex items-center gap-2 text-stone-100" style={{}} title="Backbone">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gamepad-2" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M6 11h4M8 9v4m7-1h.01M18 10h.01m-.69-5H6.68a4 4 0 0 0-3.978 3.59l-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258q-.01-.075-.017-.151A4 4 0 0 0 17.32 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-medium tracking-wide text-lg">BACKBONE</span>
</div>
<div className="flex items-center gap-2 text-stone-100" style={{}} title="Sharper Image">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-light tracking-[0.2em] text-sm uppercase border-b pb-0.5 border-stone-100" style={{}}>Sharper Image</span>
</div>
<div className="flex items-center gap-2 text-stone-100" style={{}} title="FAO Schwarz">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:toy-brick" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="1" width="18" x="3" y="8"></rect><path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3m14 0V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"></path></g></svg>
<span className="font-semibold tracking-widest text-base uppercase" style={{fontFamily: '\'Playfair Display\', serif'}}>FAO Schwarz</span>
</div>
<div className="flex items-center gap-2 text-stone-100" style={{}} title="PIMAX">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor-dot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 17v4m10-8.693V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693M8 21h8"></path><circle cx="19" cy="6" r="3"></circle></g></svg>
<span className="font-black italic tracking-widest text-xl uppercase">Pimax</span>
</div>
<div className="flex items-center gap-2 text-stone-100" style={{}} title="Simucube">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gauge" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m12 14l4-4M3.34 19a10 10 0 1 1 17.32 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold tracking-tight text-lg uppercase">Simucube</span>
</div>
<div className="flex items-center gap-1 text-stone-100" style={{}} title="Case Yard">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
<span className="font-bold tracking-tight text-lg uppercase">CaseYard</span>
</div>
<div className="flex items-center gap-2 text-stone-100" style={{}} title="Three Sixty Group">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dashed" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-light tracking-widest text-sm uppercase">ThreeSixty</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">Growing on Amazon Isn’t Hard — Growing Profitably Is.</h2>
<p className="leading-relaxed text-stone-400" style={{}}>
                        Most Amazon sellers don’t fail because of bad products. They fail because of wasted ad spend, weak listings, and decisions made without real data. If your ACOS is creeping up, rankings feel unstable, or growth has stalled — the problem isn’t effort. It’s strategy.
                    </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 bg-stone-950" style={{}}>
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 md:gap-0">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">It’s All Here.</h2>
<p className="text-stone-500 leading-relaxed" style={{}}>
                            To grow your brand in a constantly evolving marketplace, you need a dedicated team of experts and a cohesive growth strategy.
                        </p>
</div>
<button className="text-sm font-medium flex items-center gap-1 whitespace-nowrap cursor-pointer text-stone-100 hover:text-stone-400" onclick="route(event, 'services')" style={{}}>
                        View All Services <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-xl border transition group border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-lg font-medium mb-1">Full Service Management</h3>
</div>
<div className="p-8 rounded-xl border transition group border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mouse-pointer-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium mb-1">PPC Advertising</h3>
</div>
<div className="p-8 rounded-xl border transition group border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-list" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect><path d="M14 4h7m-7 5h7m-7 6h7m-7 5h7"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-1">Listing Optimization</h3>
</div>
</div>
</section>

<section className="py-20 border-t bg-stone-950 border-stone-800" style={{}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight mb-8">Ready to Scale Without Burning Cash?</h2>
<button className="px-8 py-3 font-medium rounded-lg transition shadow-sm mb-12 bg-stone-100 text-black hover:bg-stone-200" onclick="route(event, 'contact')" style={{}}>
                        Book a Free Amazon Growth Call
                    </button>

<div className="text-left p-8 rounded-xl border shadow-sm max-w-xl mx-auto bg-black border-stone-800" id="home-form-container" style={{}}>
<form action="https://formspree.io/f/xqeqpobz" className="grid gap-4" method="POST" onsubmit="handleFormSubmit(event, 'home-form-container')">
<div>
<label className="block text-xs font-medium mb-1 text-stone-300" style={{}}>Email</label>
<input className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 transition bg-black border-stone-800" name="email" required="" style={{}} type="email"/>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-stone-300" style={{}}>Message</label>
<textarea className="w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-stone-900 transition bg-black border-stone-800" name="message" required="" rows="3" style={{}}></textarea>
</div>
<button className="w-full py-2 font-medium text-sm rounded transition flex items-center justify-center bg-stone-900 text-stone-100 hover:bg-stone-800" style={{}} type="submit">Submit Inquiry</button>
</form>
</div>
</div>
</section>
</div>

<div className="page-section" id="services">
<section className="py-20 border-b bg-stone-950 border-stone-800" style={{}}>
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-stone-100" style={{}}>
                        Amazon Growth Services Built for Profit.
                    </h1>
<p className="text-lg text-stone-500 font-light mb-8 max-w-2xl mx-auto" style={{}}>
                        We focus on margin-first execution: ads, listings, and account strategy that scales without waste.
                    </p>
<button className="px-6 py-2 font-medium rounded-lg transition bg-stone-100 text-black hover:bg-stone-200" onclick="route(event, 'contact')" style={{}}>
                        Book a Free Amazon Growth Call
                    </button>
</div>
</section>
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Growth Planning &amp; Strategy</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Whatever you want to achieve, we’ll get you there through meticulous planning and unmatched execution.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mouse-pointer-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>PPC Advertising</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Want more sales? Better profitability? Our Amazon PPC experts use the latest technology to optimize campaigns for your specific needs.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-list" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect><path d="M14 4h7m-7 5h7m-7 6h7m-7 5h7"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Product Listing Optimization</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Create high-converting product listings that lower ad costs, improve ranking and searchability, and grow sales.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor-play" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Demand-Side Platform (DSP)</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Reach your audience anywhere online to expand visibility and build brand loyalty with Amazon’s powerful programmatic advertising platform.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Amazon Brand Support</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Our Partner Success team handles all potential issues with your account health, including suppressed listings, stranded inventory, and more.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 16l2 2l4-4"></path><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14M7.5 4.27l9 5.15"></path><path d="M3.29 7L12 12l8.71-5M12 22V12"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Inventory Management</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Never worry about restocking issues or forecasting issues again thanks to our time-tested inventory projection systems.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Google Advertising</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Get your brand in front of shoppers on the world’s largest search engine with our targeted Google advertising campaigns.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Customer Service Management</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Save valuable time on buyer-seller messaging, review management, and more through our full suite of customer service management options.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:undo-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 14L4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Lost Inventory Recovery</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Our proprietary recovery process hunts down every cent that you’re owed, so you can stay focused on the rest of your business.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m16 12l-4-4l-4 4m4 4V8"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Amazon SEO</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            We help you generate laser-targeted traffic and higher conversion rates, taking your sales velocity to the next level.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:camera" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Product Photography &amp; Video</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Convert shoppers into buyers and make your products shine with beautiful, professionally shot video and photography.
                        </p>
</div>

<div className="p-8 border rounded-xl transition group h-full border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-100 transition bg-stone-950 text-stone-100" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-bar-chart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M8 18v-2m4 2v-4m4 4v-6"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 text-stone-100" style={{}}>Customized Reporting</h3>
<p className="text-sm text-stone-500 leading-relaxed" style={{}}>
                            Keep a close eye on the data that matters most to you via our custom-built reporting tools and easy-to-understand dashboard.
                        </p>
</div>
</div>
</div>
</div>

<div className="page-section" id="pricing">
<section className="py-20 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h1 className="text-4xl font-medium tracking-tight mb-4">Simple Pricing. Serious Results.</h1>
<p className="text-stone-500 max-w-2xl mx-auto mb-8" style={{}}>Clear deliverables, transparent reporting, and execution that’s built for profit.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="border rounded-xl p-8 transition relative border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="mb-6">
<h3 className="text-xl font-medium text-stone-100" style={{}}>Growth Starter</h3>
<p className="text-xs text-stone-500 uppercase tracking-wide mt-2" style={{}}>Best for: Brands under $100K/month</p>
</div>
<ul className="space-y-4 mb-8 text-sm text-stone-400" style={{}}>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Amazon PPC management</li>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Listing optimization</li>
</ul>
<div className="pt-6 border-t border-stone-900" style={{}}>
<p className="font-medium mb-4 text-stone-100" style={{}}>Starting at $5,000<span className="font-normal text-stone-600" style={{}}>/month</span></p>
<button className="w-full py-2 border font-medium rounded transition border-stone-800 text-stone-100 hover:bg-stone-950" onclick="route(event, 'contact')" style={{}}>Apply for This Plan</button>
</div>
</div>

<div className="border rounded-xl p-8 relative shadow-xl transform md:-translate-y-4 border-stone-100 bg-stone-100 text-black" style={{}}>
<div className="absolute top-0 right-0 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg bg-black text-stone-100" style={{}}>POPULAR</div>
<div className="mb-6">
<h3 className="text-xl font-medium">Growth Scale</h3>
<p className="text-xs uppercase tracking-wide mt-2 text-stone-600" style={{}}>Best for: $100K–$1M/month brands</p>
</div>
<ul className="space-y-4 mb-8 text-sm text-stone-700" style={{}}>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Full PPC management</li>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Weekly optimization</li>
</ul>
<div className="pt-6 border-t border-stone-200" style={{}}>
<p className="font-medium mb-4 text-black">Starting at $7,500<span className="text-stone-500 font-normal" style={{}}>/month</span></p>
<button className="w-full py-2 font-medium rounded transition bg-black text-stone-100 hover:bg-stone-900" onclick="route(event, 'contact')" style={{}}>Book Strategy Call</button>
</div>
</div>

<div className="border rounded-xl p-8 transition relative border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="mb-6">
<h3 className="text-xl font-medium text-stone-100" style={{}}>Market Leader</h3>
<p className="text-xs text-stone-500 uppercase tracking-wide mt-2" style={{}}>Best for: $1M+/month brands</p>
</div>
<ul className="space-y-4 mb-8 text-sm text-stone-400" style={{}}>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated Amazon strategist</li>
<li className="flex gap-3"><svg aria-hidden="true" className="iconify text-stone-100 iconify--lucide" data-icon="lucide:check" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Aggressive scaling strategy</li>
</ul>
<div className="pt-6 border-t border-stone-900" style={{}}>
<p className="font-medium mb-4 text-stone-100" style={{}}>Custom Pricing</p>
<button className="w-full py-2 border font-medium rounded transition border-stone-800 text-stone-100 hover:bg-stone-950" onclick="route(event, 'contact')" style={{}}>Apply for Partnership</button>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="casestudies">

<section className="py-24 px-6 text-center relative overflow-hidden bg-stone-100 text-black" style={{}}>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">We Turn Data Into Dominance.</h1>
<p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed text-stone-600" style={{}}>
                        From 6-figure launches to 8-figure exits. Here is the raw data from our portfolio growth over the last decade.
                    </p>
<div className="flex flex-wrap justify-center gap-8 text-left">
<div className="border-l pl-4 border-stone-300" style={{}}>
<div className="text-3xl font-medium tracking-tight">$350M+</div>
<div className="text-xs text-stone-500 uppercase tracking-wide" style={{}}>Managed Revenue</div>
</div>
<div className="border-l pl-4 border-stone-300" style={{}}>
<div className="text-3xl font-medium tracking-tight">72x</div>
<div className="text-xs text-stone-500 uppercase tracking-wide" style={{}}>Avg. ROI</div>
</div>
<div className="border-l pl-4 border-stone-300" style={{}}>
<div className="text-3xl font-medium tracking-tight">9yr</div>
<div className="text-xs text-stone-500 uppercase tracking-wide" style={{}}>Client Tenure</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 -mt-10 relative z-20">
<div className="grid lg:grid-cols-3 gap-6">

<div className="rounded-xl shadow-lg border p-8 flex flex-col bg-black border-stone-800" style={{}}>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-pink-950 text-pink-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<div>
<h3 className="font-semibold text-stone-100" style={{}}>Consumer Electronics</h3>
<p className="text-xs text-stone-500 uppercase" style={{}}>Strategic Scaling</p>
</div>
</div>
<div className="flex-grow space-y-6">
<div className="flex justify-between items-end border-b pb-4 border-stone-900" style={{}}>
<div>
<p className="text-xs text-stone-500 mb-1" style={{}}>Starting Annual Sales</p>
<p className="text-xl font-mono text-stone-600" style={{}}>$640,000</p>
</div>
<div className="text-right">
<p className="text-xs text-stone-500 mb-1" style={{}}>Current Annual Sales</p>
<p className="text-2xl font-mono font-medium text-stone-100" style={{}}>$45,983,736</p>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span>Growth Trajectory</span>
<span className="text-orange-400" style={{}}>+7,085%</span>
</div>
<div className="flex items-end gap-1 h-24 pb-0">
<div className="w-1/5 rounded-t h-[5%] bg-stone-900" style={{}}></div>
<div className="w-1/5 rounded-t h-[25%] bg-stone-800" style={{}}></div>
<div className="w-1/5 rounded-t h-[45%] bg-stone-700" style={{}}></div>
<div className="w-1/5 rounded-t h-[70%] bg-stone-600" style={{}}></div>
<div className="w-1/5 rounded-t h-full relative group bg-stone-100" style={{}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition bg-stone-100 text-black" style={{}}>Year 9</div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl shadow-lg border p-8 flex flex-col bg-black border-stone-800" style={{}}>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-red-950 text-red-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:apple" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></g></svg>
</div>
<div>
<h3 className="font-semibold text-stone-100" style={{}}>Grocery &amp; Food</h3>
<p className="text-xs text-stone-500 uppercase" style={{}}>Category Capture</p>
</div>
</div>
<div className="flex-grow space-y-6">
<div className="flex justify-between items-end border-b pb-4 border-stone-900" style={{}}>
<div>
<p className="text-xs text-stone-500 mb-1" style={{}}>Starting Annual Sales</p>
<p className="text-xl font-mono text-stone-600" style={{}}>$330,000</p>
</div>
<div className="text-right">
<p className="text-xs text-stone-500 mb-1" style={{}}>Current Annual Sales</p>
<p className="text-2xl font-mono font-medium text-stone-100" style={{}}>$19,519,249</p>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span>Growth Trajectory</span>
<span className="text-orange-400" style={{}}>+5,814%</span>
</div>
<div className="flex items-end gap-1 h-24 pb-0">
<div className="w-1/5 rounded-t h-[5%] bg-stone-900" style={{}}></div>
<div className="w-1/5 rounded-t h-[15%] bg-stone-800" style={{}}></div>
<div className="w-1/5 rounded-t h-[35%] bg-stone-700" style={{}}></div>
<div className="w-1/5 rounded-t h-[60%] bg-stone-600" style={{}}></div>
<div className="w-1/5 rounded-t h-full bg-red-400" style={{}}></div>
</div>
</div>
</div>
</div>

<div className="rounded-xl shadow-lg border p-8 flex flex-col bg-black border-stone-800" style={{}}>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-red-950 text-red-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:rocket" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<div>
<h3 className="font-semibold text-stone-100" style={{}}>Premium Toys</h3>
<p className="text-xs text-stone-500 uppercase" style={{}}>Aggressive Launch</p>
</div>
</div>
<div className="flex-grow space-y-6">
<div className="flex justify-between items-end border-b pb-4 border-stone-900" style={{}}>
<div>
<p className="text-xs text-stone-500 mb-1" style={{}}>Year 1 Sales</p>
<p className="text-xl font-mono text-stone-600" style={{}}>$218,700</p>
</div>
<div className="text-right">
<p className="text-xs text-stone-500 mb-1" style={{}}>Year 4 Sales</p>
<p className="text-2xl font-mono font-medium text-stone-100" style={{}}>$16,064,569</p>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs font-medium">
<span>Growth Trajectory</span>
<span className="text-orange-400" style={{}}>+7,245%</span>
</div>
<div className="flex items-end gap-1 h-24 pb-0">
<div className="w-1/4 rounded-t h-[5%] bg-stone-900" style={{}}></div>
<div className="w-1/4 rounded-t h-[20%] bg-stone-800" style={{}}></div>
<div className="w-1/4 rounded-t h-[55%] bg-stone-600" style={{}}></div>
<div className="w-1/4 rounded-t h-full bg-red-400" style={{}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-24">
<div className="border rounded-xl overflow-hidden shadow-sm bg-black border-stone-800" style={{}}>
<div className="px-6 py-5 border-b flex justify-between items-center border-stone-900 bg-stone-950" style={{}}>
<h3 className="font-medium text-stone-100" style={{}}>Performance Ledger (Anonymized)</h3>
<span className="text-xs font-mono text-stone-600" style={{}}>UPDATED: Q4 2025</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-sm text-left">
<thead className="text-xs text-stone-500 uppercase border-b bg-stone-950 border-stone-900" style={{}}>
<tr>
<th className="px-6 py-4 font-medium">Industry</th>
<th className="px-6 py-4 font-medium">Starting Revenue</th>
<th className="px-6 py-4 font-medium text-right">Latest Annual Run Rate</th>
<th className="px-6 py-4 font-medium text-right">Total Growth</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-900" style={{}}>

<tr className="transition hover:bg-stone-950" style={{}}>
<td className="px-6 py-4 font-medium text-stone-100" style={{}}>Electronics / Power</td>
<td className="px-6 py-4 font-mono text-stone-500" style={{}}>$240,878</td>
<td className="px-6 py-4 font-mono text-right text-stone-100" style={{}}>$14,982,799</td>
<td className="px-6 py-4 font-medium text-right text-orange-400" style={{}}>+6,120%</td>
</tr>

<tr className="transition hover:bg-stone-950" style={{}}>
<td className="px-6 py-4 font-medium text-stone-100" style={{}}>VR &amp; Gaming Hardware</td>
<td className="px-6 py-4 font-mono text-stone-500" style={{}}>$1,059,727</td>
<td className="px-6 py-4 font-mono text-right text-stone-100" style={{}}>$6,972,727</td>
<td className="px-6 py-4 font-medium text-right text-orange-400" style={{}}>+558%</td>
</tr>

<tr className="transition hover:bg-stone-950" style={{}}>
<td className="px-6 py-4 font-medium text-stone-100" style={{}}>Women's Fashion</td>
<td className="px-6 py-4 font-mono text-stone-500" style={{}}>$95,000</td>
<td className="px-6 py-4 font-mono text-right text-stone-100" style={{}}>$6,098,363</td>
<td className="px-6 py-4 font-medium text-right text-orange-400" style={{}}>+6,319%</td>
</tr>

<tr className="transition hover:bg-stone-950" style={{}}>
<td className="px-6 py-4 font-medium text-stone-100" style={{}}>Personal Care</td>
<td className="px-6 py-4 font-mono text-stone-500" style={{}}>$295,000</td>
<td className="px-6 py-4 font-mono text-right text-stone-100" style={{}}>$4,793,883</td>
<td className="px-6 py-4 font-medium text-right text-orange-400" style={{}}>+1,525%</td>
</tr>

<tr className="transition hover:bg-stone-950" style={{}}>
<td className="px-6 py-4 font-medium text-stone-100" style={{}}>Specialty Food</td>
<td className="px-6 py-4 font-mono text-stone-500" style={{}}>$2,982,626</td>
<td className="px-6 py-4 font-mono text-right text-stone-100" style={{}}>$8,109,736</td>
<td className="px-6 py-4 font-medium text-right text-orange-400" style={{}}>+172%</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t text-center bg-stone-950 border-stone-900" style={{}}>
<button className="text-sm font-medium transition flex items-center justify-center gap-2 text-stone-100 hover:text-stone-400" onclick="route(event, 'contact')" style={{}}>
                            See if your brand qualifies for this growth trajectory <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>
</div>

<div className="page-section" id="about">
<section className="max-w-4xl mx-auto px-6 py-20 md:py-24">

<div className="mb-16">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-stone-100" style={{}}>Founder &amp; Principal</h1>
<div className="w-20 h-1 rounded-full mb-8 bg-stone-100" style={{}}></div>
<div className="prose prose-stone prose-lg max-w-none text-stone-500 font-light leading-relaxed space-y-6" style={{}}>
<p>
                            I started selling on Amazon and eBay in 2006, back when Seller Central was primitive, support barely existed, and there were no “gurus” to copy from.
                        </p>
<p>
                            I built my experience the hard way—inside my own Amazon account, learning what breaks, what scales, and what silently kills profitability. Between , I spent years mastering the platform end-to-end before ever charging a client.
                        </p>
<p>
                            In 2011, I signed my first Amazon Seller Central client in New York. That marked the beginning of my professional consulting career. From , I worked with a small group of sellers, refining systems for PPC, catalog management, customer service, reimbursements, and account health—long before agencies tried to “productize” Amazon services.
                        </p>
<p>
                            In 2013, I relocated to California and formally built the foundation of what is now Amazon Titans.
                        </p>
<p>
                            Since then, I’ve managed and overseen large-scale Amazon portfolios totaling nearly  in revenue, working with 25 high-quality, reputable brands, primarily based in the United States.
                        </p>
<p className="italic font-medium border-l-2 pl-4 text-stone-100 border-stone-100" style={{}}>
                            This is not theory. This is operational Amazon at scale.
                        </p>
</div>
</div>

<div className="border rounded-xl p-8 md:p-10 mb-20 bg-stone-950 border-stone-800" style={{}}>
<h2 className="text-xl font-medium mb-6 text-stone-100" style={{}}>What We Do Today</h2>
<p className="text-stone-500 mb-6" style={{}}>As Founder and Principal of Amazon Titans, I personally lead:</p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-stone-400" style={{}}><svg aria-hidden="true" className="iconify mt-1 text-stone-100 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Amazon growth strategy &amp; account architecture</li>
<li className="flex gap-3 text-stone-400" style={{}}><svg aria-hidden="true" className="iconify mt-1 text-stone-100 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> PPC structure, scaling, and efficiency control</li>
</ul>
<div className="flex items-center gap-3 font-medium pt-6 border-t text-stone-100 border-stone-800" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 11l2 2l4-4m-6 12v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                        Every client strategy flows through me. We don’t outsource thinking.
                    </div>
</div>

<div className="mb-20">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight mb-4">About Amazon Titans</h2>
<p className="text-stone-500" style={{}}>Built for Serious Amazon Operators</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 border rounded-lg text-center transition border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="text-3xl font-medium mb-1 text-stone-100" style={{}}>~25</div>
<div className="text-xs text-stone-500 uppercase tracking-wide" style={{}}>Active Clients</div>
<p className="text-sm mt-2 text-stone-600" style={{}}>Small and selective by design.</p>
</div>
<div className="p-6 border rounded-lg text-center transition border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="text-3xl font-medium mb-1 text-stone-100" style={{}}>90%</div>
<div className="text-xs text-stone-500 uppercase tracking-wide" style={{}}>U.S. Based Brands</div>
<p className="text-sm mt-2 text-stone-600" style={{}}>High-quality, reputable partners.</p>
</div>
<div className="p-6 border rounded-lg text-center transition border-stone-800 bg-black hover:border-stone-700" style={{}}>
<div className="text-3xl font-medium mb-1 text-stone-100" style={{}}>$250M</div>
<div className="text-xs text-stone-500 uppercase tracking-wide" style={{}}>Managed Revenue</div>
<p className="text-sm mt-2 text-stone-600" style={{}}>Operational scale, not experiments.</p>
</div>
</div>
</div>

<div className="mb-20">
<div className="flex flex-col md:flex-row gap-12">
<div className="md:w-1/3">
<h2 className="text-2xl font-medium tracking-tight mb-4">What We Manage <span className="text-stone-600" style={{}}>(End-to-End)</span></h2>
<p className="text-stone-500 mb-6" style={{}}>We don’t “advise.” We run the account.</p>
<p className="text-sm border-l pl-4 text-stone-600 border-stone-800" style={{}}>If it affects revenue, margin, or account health—we handle it.</p>
</div>
<div className="md:w-2/3">
<div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex gap-3 text-sm text-stone-400" style={{}}><svg aria-hidden="true" className="iconify shrink-0 text-stone-100 iconify--lucide" data-icon="lucide:arrow-right-circle" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m12 16l4-4l-4-4m-4 4h8"></path></g></svg> Full Seller &amp; Vendor Central Mgmt</div>
<div className="flex gap-3 text-sm text-stone-400" style={{}}><svg aria-hidden="true" className="iconify shrink-0 text-stone-100 iconify--lucide" data-icon="lucide:arrow-right-circle" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m12 16l4-4l-4-4m-4 4h8"></path></g></svg> PPC (SP, SB, SD) Launch to Scale</div>
<div className="flex gap-3 text-sm text-stone-400" style={{}}><svg aria-hidden="true" className="iconify shrink-0 text-stone-100 iconify--lucide" data-icon="lucide:arrow-right-circle" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m12 16l4-4l-4-4m-4 4h8"></path></g></svg> Customer Service &amp; Messaging</div>
<div className="flex gap-3 text-sm text-stone-400" style={{}}><svg aria-hidden="true" className="iconify shrink-0 text-stone-100 iconify--lucide" data-icon="lucide:arrow-right-circle" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m12 16l4-4l-4-4m-4 4h8"></path></g></svg> Daily Case Management Support</div>
<div className="flex gap-3 text-sm text-stone-400" style={{}}><svg aria-hidden="true" className="iconify shrink-0 text-stone-100 iconify--lucide" data-icon="lucide:arrow-right-circle" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m12 16l4-4l-4-4m-4 4h8"></path></g></svg> Refunds &amp; Reimbursement Recovery</div>
<div className="flex gap-3 text-sm text-stone-400" style={{}}><svg aria-hidden="true" className="iconify shrink-0 text-stone-100 iconify--lucide" data-icon="lucide:arrow-right-circle" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m12 16l4-4l-4-4m-4 4h8"></path></g></svg> Catalog Cleanup &amp; Compliance</div>
</div>
</div>
</div>
</div>

<div className="mb-20 rounded-xl p-8 md:p-12 relative overflow-hidden bg-stone-100 text-black" style={{}}>
<div className="absolute top-0 right-0 p-12 opacity-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="120" height="120" role="img" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<div className="relative z-10">
<h2 className="text-2xl font-medium mb-6">Our Team</h2>
<p className="mb-8 max-w-xl text-stone-700" style={{}}>
                            Amazon Titans operates with a distributed expert team, not generic VAs. 40+ team members globally, including U.S.-based leadership.
                        </p>
<div className="grid sm:grid-cols-2 gap-6 text-sm text-stone-700" style={{}}>
<div className="border-l pl-4 border-stone-300" style={{}}>
                                
                                Focused solely on ad performance
                            </div>
<div className="border-l pl-4 border-stone-300" style={{}}>
                                
                                Focused on conversion &amp; listing health
                            </div>
<div className="border-l pl-4 border-stone-300" style={{}}>
                                
                                Handling daily execution and cases
                            </div>
<div className="border-l pl-4 border-stone-300" style={{}}>
                                
                                Ensuring nothing falls through the cracks
                            </div>
</div>
</div>
</div>

<div className="mb-20">
<h2 className="text-2xl font-medium tracking-tight mb-8 text-center">Why Amazon Titans Is Different</h2>
<div className="grid md:grid-cols-2 border rounded-xl overflow-hidden border-stone-800" style={{}}>
<div className="p-8 border-b md:border-b-0 md:border-r bg-stone-950 border-stone-800" style={{}}>
<h3 className="font-medium mb-6 uppercase tracking-wider text-xs text-stone-600" style={{}}>Most Amazon Agencies</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-stone-600" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Chase volume</li>
<li className="flex items-center gap-3 text-stone-600" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Overpromise &amp; Under-execute</li>
</ul>
</div>
<div className="p-8 bg-black">
<h3 className="font-medium mb-6 uppercase tracking-wider text-xs text-stone-100" style={{}}>Amazon Titans</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 font-medium text-stone-100" style={{}}><svg aria-hidden="true" className="iconify text-orange-400 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Fewer clients, deeper involvement</li>
<li className="flex items-center gap-3 font-medium text-stone-100" style={{}}><svg aria-hidden="true" className="iconify text-orange-400 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Decisions driven by margin &amp; longevity</li>
</ul>
</div>
</div>
</div>

<div className="text-center py-12 border-t border-stone-800" style={{}}>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 text-stone-100" style={{}}>Amazon is unforgiving. Experience matters.</h2>
<p className="text-stone-500 mb-10 max-w-lg mx-auto" style={{}}>Amazon Titans exists for brands that want execution at scale, not experiments.</p>
<button className="px-8 py-3 font-medium rounded-lg transition bg-stone-100 text-black hover:bg-stone-200" onclick="route(event, 'contact')" style={{}}>Book a Free Amazon Growth Call</button>
</div>
</section>
</div>

<div className="page-section" id="contact">
<section className="py-20 border-b bg-stone-950 border-stone-800" style={{}}>
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-stone-100" style={{}}>Book Your Amazon Growth Call</h1>
<p className="text-lg text-stone-500 font-light mb-8" style={{}}>Tell us where you are today — we’ll tell you what to fix first.</p>
</div>
</section>
<section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16">

<div>
<div className="p-8 rounded-xl border shadow-sm bg-black border-stone-800" id="main-contact-form-container" style={{}}>
<form action="https://formspree.io/f/xqeqpobz" className="space-y-4" method="POST" onsubmit="handleFormSubmit(event, 'main-contact-form-container')">
<div>
<label className="block text-sm font-medium mb-1 text-stone-300" style={{}}>Name</label>
<input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-stone-900 transition bg-black border-stone-800" name="name" required="" style={{}} type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-stone-300" style={{}}>Email</label>
<input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-stone-900 transition bg-black border-stone-800" name="email" required="" style={{}} type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-stone-300" style={{}}>Company</label>
<input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-stone-900 transition bg-black border-stone-800" name="company" required="" style={{}} type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-1 text-stone-300" style={{}}>Biggest Challenge</label>
<textarea className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-stone-900 transition bg-black border-stone-800" name="message" required="" rows="4" style={{}}></textarea>
</div>
<button className="w-full py-3 font-medium rounded transition shadow-sm mt-4 flex items-center justify-center bg-stone-100 text-black hover:bg-stone-200" style={{}} type="submit">
                                Book a Free Amazon Growth Call
                            </button>
</form>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="mb-12">
<div className="border border-dashed rounded-xl p-8 text-center bg-stone-950 border-stone-700 text-stone-600" style={{}}>
<svg aria-hidden="true" className="iconify mx-auto mb-2 opacity-50 iconify--lucide" data-icon="lucide:calendar" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<p className="text-sm">Calendly Scheduling Widget</p>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t py-12 mt-auto bg-black border-stone-800" style={{}}>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-sm font-semibold tracking-tighter uppercase block mb-2 text-stone-100" style={{}}>Amazon Titans</span>
<p className="text-xs text-stone-600" style={{}}>© 2023 Amazon Titans. All rights reserved.</p>
</div>
<div className="flex gap-6 text-xs text-stone-500" style={{}}>
<a className="hover:text-stone-100" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-stone-100" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
