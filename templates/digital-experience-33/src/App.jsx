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



        // Initialize Icons
        lucide.createIcons();

        // 1. FORMSPREE AJAX SUBMISSION
        // ------------------------------------------------------------------
        const form = document.getElementById("contact-form");
        
        async function handleSubmit(event) {
            event.preventDefault();
            const status = document.getElementById("form-status");
            const btn = document.getElementById("submit-btn");
            const btnText = btn.querySelector("span");
            const data = new FormData(event.target);

            // Check if user set ID
            if(form.action.includes('YOUR_FORMSPREE_ID')) {
                alert("Please add your Formspree Form ID in the HTML code.");
                return;
            }

            // UI Loading State
            btn.disabled = true;
            btnText.innerHTML = "";
            const spinner = document.createElement("div");
            spinner.className = "spinner";
            btnText.appendChild(spinner);

            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                btn.disabled = false;
                btnText.innerHTML = "Send Request";
                if (response.ok) {
                    status.innerHTML = "Thanks for your submission!";
                    status.classList.remove('hidden', 'text-red-500');
                    status.classList.add('text-green-600');
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form";
                        }
                        status.classList.remove('hidden', 'text-green-600');
                        status.classList.add('text-red-500');
                    });
                }
            }).catch(error => {
                btn.disabled = false;
                btnText.innerHTML = "Send Request";
                status.innerHTML = "Oops! There was a problem submitting your form";
                status.classList.remove('hidden', 'text-green-600');
                status.classList.add('text-red-500');
            });
        }
        form.addEventListener("submit", handleSubmit);

        // 2. SANITY CMS CONNECTION
        // ------------------------------------------------------------------
        // To connect: Replace PROJECT_ID with your actual Sanity Project ID.
        // Data structure expected in Sanity: Document type 'project' with fields: title, category, mainImage (image)
        
        const PROJECT_ID = 'YOUR_SANITY_PROJECT_ID'; // <--- PUT ID HERE
        const DATASET = 'production';
        
        async function fetchSanityProjects() {
            // Skip if no ID is set
            if(PROJECT_ID === 'YOUR_SANITY_PROJECT_ID') return;

            // GROQ Query
            const query = encodeURIComponent(`*[_type == "project"] | order(_createdAt desc) [0...4] {
                title,
                category,
                "imageUrl": mainImage.asset->url
            }`);
            
            const url = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${query}`;

            try {
                const response = await fetch(url);
                const result = await response.json();
                
                if (result.result.length > 0) {
                    renderProjects(result.result);
                    document.getElementById('sanity-status').classList.remove('hidden');
                }
            } catch (error) {
                console.log('Sanity fetch error (Expected if no ID provided):', error);
            }
        }

        function renderProjects(projects) {
            const grid = document.getElementById('work-grid');
            grid.innerHTML = ''; // Clear fallback content

            projects.forEach((project, index) => {
                const isEven = index % 2 !== 0; // Staggered layout logic
                
                const card = `
                <div class="group cursor-pointer ${isEven ? 'md:mt-16' : ''} fade-in-up">
                    <div class="bg-slate-100 rounded-xl overflow-hidden aspect-[4/3] mb-6 relative border border-slate-200">
                        <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                    </div>
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg font-medium text-slate-900 tracking-tight mb-1">${project.title}</h3>
                            <p class="text-sm text-slate-500">${project.category}</p>
                        </div>
                        <span class="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right w-5 h-5 text-slate-900"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                        </span>
                    </div>
                </div>`;
                grid.innerHTML += card;
            });
        }

        // Initialize Sanity Fetch
        fetchSanityProjects();

        // Smooth scroll for nav
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
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
      

<nav className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2" href="#">
                AURA.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="/services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#work">Work</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Models</a>
</div>
<a className="hidden md:inline-flex items-center justify-center transition-all duration-200 hover:bg-slate-800 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-5 pb-2 pl-5" href="#contact">
                Start Project
            </a>
<button className="md:hidden text-slate-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
<div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
<div className="absolute inset-0 opacity-40 grayscale brightness-110 mix-blend-multiply scale-[1.2] origin-top">
<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/glasswave-6HLEnvJfCRsq1aKT2xqlgme7" width="100%"></iframe>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
<div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-50"></div>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 mb-8 fade-in-up shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Accepting new clients for Q4
            </div>
<h1 className="md:text-7xl leading-[1.1] fade-in-up delay-100 text-5xl font-semibold text-slate-900 tracking-tight mb-8">
                We help ambitious brands look<br className="hidden md:block"/> the way they deserve to be seen.
            </h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200 font-medium">
                By designing premium, detail-driven websites that elevate perception and create lasting credibility.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-slate-900/10" href="#contact">
                    Schedule Discovery
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center" href="#work">
                    View Portfolio
                </a>
</div>
</div>
</section>

<section className="border-y bg-slate-50/50 border-slate-100 pt-12 pb-12 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">10+</p>
<p className="text-sm text-slate-500 mt-1">Years Experience</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">120+</p>
<p className="text-sm text-slate-500 mt-1">Projects Launched</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">300%</p>
<p className="text-sm text-slate-500 mt-1">Avg. ROI Increase</p>
</div>
<div className="text-center md:text-left flex items-center justify-center md:justify-start opacity-40 grayscale hover:grayscale-0 transition-all">
<div className="flex gap-6 items-center">
<svg className="lucide lucide-triangle w-6 h-6" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
<svg className="lucide lucide-circle w-6 h-6" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
<svg className="lucide lucide-square w-6 h-6" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Expertise</h2>
<p className="text-slate-500 max-w-md">Refined services tailored for growth and longevity.</p>
</div>
<a className="hover:border-slate-900 transition-colors text-sm font-medium text-slate-900 w-fit border-slate-300 border-b pb-0.5" href="/services">Full Service List</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors border border-slate-100">
<svg className="lucide lucide-layout w-5 h-5 text-slate-700" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">UI/UX Design</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Clean, conversion-focused interfaces that prioritize user experience and brand consistency. We design for clarity.
                    </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Wireframing &amp; Prototyping</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Visual Identity</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors border border-slate-100">
<svg className="lucide lucide-code-2 w-5 h-5 text-slate-700" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Development</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Pixel-perfect implementation using modern frameworks. Fast, secure, and SEO-optimized code structure.
                    </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> React / Next.js / Tailwind</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> CMS Integration</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors border border-slate-100">
<svg className="lucide lucide-trending-up w-5 h-5 text-slate-700" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Growth Strategy</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Beyond the launch. We help you scale with data-driven insights, analytics setup, and performance tuning.
                    </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SEO Optimization</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Analytics &amp; Heatmaps</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">How we work</h2>
<p className="text-slate-500">A transparent, linear journey from concept to reality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="relative">
<span className="block text-5xl font-light text-slate-200 mb-4">01</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Discovery</h3>
<p className="text-sm text-slate-500 leading-relaxed">We deep dive into your business goals, audience, and competitors to build a solid foundation.</p>
</div>
<div className="relative">
<span className="block text-5xl font-light text-slate-200 mb-4">02</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Design</h3>
<p className="text-sm text-slate-500 leading-relaxed">Crafting the visual language. Wireframes turn into high-fidelity mockups for your approval.</p>
</div>
<div className="relative">
<span className="block text-5xl font-light text-slate-200 mb-4">03</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Build</h3>
<p className="text-sm text-slate-500 leading-relaxed">Translating design into code. Responsive, accessible, and fast implementation.</p>
</div>
<div className="relative">
<span className="block text-5xl font-light text-slate-200 mb-4">04</span>
<h3 className="text-lg font-medium text-slate-900 mb-2">Launch</h3>
<p className="text-sm text-slate-500 leading-relaxed">Testing, deployment, and handover. We ensure everything runs perfectly on day one.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Selected Work</h2>
<p className="text-slate-500">Recent projects defining digital standards.</p>
</div>
<span className="hidden text-xs text-green-600 bg-green-50 px-2 py-1 rounded border border-green-200" id="sanity-status">
                    Live Data
                </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16" id="work-grid">

<div className="group cursor-pointer">
<div className="bg-slate-100 rounded-xl overflow-hidden aspect-[4/3] mb-6 relative border border-slate-200">
<div className="absolute inset-4 bg-white shadow-sm rounded-lg overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
<div className="h-4 bg-slate-50 border-b border-slate-100 flex items-center px-3 gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4">
<div className="w-1/2 h-6 bg-slate-100 rounded"></div>
<div className="flex gap-4">
<div className="w-2/3 h-24 bg-slate-50 rounded"></div>
<div className="w-1/3 h-24 bg-slate-100 rounded"></div>
</div>
<div className="w-full h-32 bg-slate-50 rounded mt-auto"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Ventura Capital</h3>
<p className="text-sm text-slate-500">Fintech • Web Design</p>
</div>
<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-slate-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
<div className="group cursor-pointer md:mt-16">
<div className="bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] mb-6 relative border border-slate-800">
<div className="absolute inset-4 bg-slate-800 shadow-sm rounded-lg overflow-hidden flex flex-col transition-transform duration-500 group-hover:scale-[1.02]">
<div className="h-4 bg-slate-900/50 flex items-center px-3 gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4 items-center justify-center">
<div className="w-16 h-16 rounded-full border border-slate-600 flex items-center justify-center">
<div className="w-8 h-8 bg-slate-500 rounded-full"></div>
</div>
<div className="w-32 h-4 bg-slate-700 rounded"></div>
<div className="w-48 h-2 bg-slate-700/50 rounded"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Mono Audio</h3>
<p className="text-sm text-slate-500">E-commerce • Shopify</p>
</div>
<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-slate-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
<div className="group cursor-pointer">
<div className="bg-slate-50 rounded-xl overflow-hidden aspect-[4/3] mb-6 relative border border-slate-200">
<div className="absolute inset-x-8 inset-y-4 bg-white shadow-lg rounded-t-lg border-t border-x border-slate-100 transition-transform duration-500 group-hover:translate-y-2">
<div className="p-6 grid grid-cols-2 gap-4">
<div className="col-span-2 h-8 bg-slate-100 rounded w-1/3"></div>
<div className="h-20 bg-slate-50 rounded border border-slate-100"></div>
<div className="h-20 bg-slate-50 rounded border border-slate-100"></div>
<div className="h-20 bg-slate-50 rounded border border-slate-100"></div>
<div className="h-20 bg-slate-50 rounded border border-slate-100"></div>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Apex Architecture</h3>
<p className="text-sm text-slate-500">Portfolio • Minimalist</p>
</div>
<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-slate-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
<div className="group cursor-pointer md:mt-16">
<div className="bg-[#F3F4F6] rounded-xl overflow-hidden aspect-[4/3] mb-6 relative border border-slate-200 flex items-center justify-center">
<div className="w-32 h-48 bg-white shadow-xl rounded-xl border border-slate-100 rotate-[-12deg] translate-x-4 transition-transform duration-500 group-hover:rotate-[-15deg] group-hover:translate-x-2 z-10"></div>
<div className="w-32 h-48 bg-slate-900 shadow-xl rounded-xl rotate-[12deg] -translate-x-4 transition-transform duration-500 group-hover:rotate-[15deg] group-hover:-translate-x-2"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">Canvas Mobile</h3>
<p className="text-sm text-slate-500">App Landing • SaaS</p>
</div>
<span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-slate-900" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Engagement Models</h2>
<p className="text-slate-500">We don't sell hours. We sell outcomes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col h-full">
<div className="mb-6">
<span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Essentials</span>
<h3 className="text-2xl font-semibold text-slate-900 mt-2 tracking-tight">Market Entry</h3>
<p className="text-sm text-slate-500 mt-3 leading-relaxed">Perfect for local businesses establishing their first professional digital presence.</p>
</div>
<div className="space-y-4 mb-8 flex-1">
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            Custom One-Page Design
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            Mobile Responsive
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-slate-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            Basic SEO Setup
                        </div>
</div>
<a className="block w-full py-3 text-center text-sm font-medium border border-slate-200 rounded-lg hover:border-slate-900 hover:text-slate-900 text-slate-600 transition-colors" href="#contact">Inquire for Pricing</a>
</div>

<div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-slate-800 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>
<div className="mb-6 relative z-10">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Growth</span>
<h3 className="text-2xl font-semibold text-white mt-2 tracking-tight">Business Scale</h3>
<p className="text-sm text-slate-400 mt-3 leading-relaxed">Comprehensive solution for companies ready to dominate their local market.</p>
</div>
<div className="space-y-4 mb-8 flex-1 relative z-10">
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            Multi-Page Strategic Design
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            CMS Content Management
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            Advanced Analytics &amp; Integration
                        </div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center shrink-0"><svg className="lucide lucide-check w-3 h-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
                            Priority Support
                        </div>
</div>
<a className="block w-full py-3 text-center text-sm font-medium bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors relative z-10" href="#contact">Inquire for Pricing</a>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-12" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Ready to transform<br/> your digital presence?
                </h2>
<p className="text-lg text-slate-500 max-w-lg mx-auto">
                    We take on a limited number of clients per quarter. Secure your spot today.
                </p>
</div>
<div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100/50">

<form action="https://formspree.io/f/YOUR_FORMSPREE_ID" className="space-y-4" id="contact-form" method="POST">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all" id="email" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all resize-none" id="message" name="message" placeholder="Tell us about your goals..." required="" rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-sm transition-all flex items-center justify-center gap-2 group" id="submit-btn" type="submit">
<span>Send Request</span>
<svg className="lucide lucide-send w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<p className="text-center text-sm mt-3 hidden" id="form-status"></p>
</form>
</div>
</div>
<footer className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter">AURA.</span>
<span className="text-xs text-slate-400">© 2024</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-slate-900 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-slate-900 transition-colors" href="#">Instagram</a>
</div>
</footer>
</section>


    </>
  );
}
