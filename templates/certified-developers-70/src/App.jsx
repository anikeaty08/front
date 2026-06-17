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



      lucide.createIcons();

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileBtn.querySelector('[data-lucide]');
        icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
        lucide.createIcons();
      });

      // Full-time / Contract toggle
      const fullBtn = document.getElementById('fulltimeBtn');
      const contractBtn = document.getElementById('contractBtn');
      function activate(btn, other) {
        btn.classList.add('bg-gray-900','text-white','shadow-lg');
        other.classList.remove('bg-gray-900','text-white','shadow-lg');
        other.classList.add('hover:bg-white');
      }
      fullBtn.addEventListener('click', () => activate(fullBtn, contractBtn));
      contractBtn.addEventListener('click', () => activate(contractBtn, fullBtn));
    
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
      

<header className="w-full border-b border-gray-200/80 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-6 lg:px-16">
<nav className="flex items-center justify-between py-5">
<a className="text-xl font-semibold tracking-tight flex items-center gap-2 hover:text-blue-600 transition-colors" href="#" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-6 h-6" data-lucide="code-2" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg>
            DEVVAULT
          </a>
<ul className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700" style={{fontFamily: '\'Inter\', sans-serif'}}>
<li><a className="flex items-center gap-2 hover:text-blue-600 transition-colors" href="#search">
<svg className="w-4 h-4" data-lucide="user-search" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg> Hire Developers
            </a></li>
<li><a className="flex items-center gap-2 hover:text-blue-600 transition-colors" href="#directory">
<svg className="w-4 h-4" data-lucide="list-checks" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg> Browse Directory
            </a></li>
<li><a className="flex items-center gap-2 hover:text-blue-600 transition-colors" href="#certs">
<svg className="w-4 h-4" data-lucide="badge-check" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg> Certifications
            </a></li>
<li><a className="flex items-center gap-2 hover:text-blue-600 transition-colors" href="#resources">
<svg className="w-4 h-4" data-lucide="book-open" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg> Resources
            </a></li>
</ul>
<div className="hidden lg:flex items-center gap-3" style={{fontFamily: '\'Inter\', sans-serif'}}>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all border-gray-200 hover:bg-gray-50 hover:border-gray-300">
<svg className="w-4 h-4" data-lucide="log-in" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg> Sign In
            </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all shadow-sm bg-blue-600 text-white hover:bg-blue-700">
<svg className="w-4 h-4" data-lucide="briefcase" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg> Post a Job
            </button>
</div>
<button className="lg:hidden flex items-center p-2 rounded-lg transition-colors hover:bg-gray-100" id="mobileMenuBtn">
<svg className="w-5 h-5" data-lucide="menu" style={{strokeWidth: '1.5'}} xmlns="http://www.w3.org/2000/svg"></svg>
</button>
</nav>
<div className="lg:hidden pb-6 hidden border-t border-gray-100" id="mobileMenu">
<ul className="flex flex-col gap-1 text-sm font-medium pt-4" style={{fontFamily: '\'Inter\', sans-serif'}}>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50" href="#search">
<svg className="w-4 h-4" data-lucide="user-search" style={{strokeWidth: '1.5'}}></svg> Hire Developers
            </a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50" href="#directory">
<svg className="w-4 h-4" data-lucide="list-checks" style={{strokeWidth: '1.5'}}></svg> Browse Directory
            </a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50" href="#certs">
<svg className="w-4 h-4" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> Certifications
            </a></li>
<li><a className="flex items-center gap-3 w-full py-3 px-3 rounded-lg transition-colors hover:bg-gray-50" href="#resources">
<svg className="w-4 h-4" data-lucide="book-open" style={{strokeWidth: '1.5'}}></svg> Resources
            </a></li>
<li className="flex gap-2 mt-4">
<button className="flex-1 py-2 rounded-lg border text-sm font-medium transition-colors border-gray-200 hover:bg-gray-50">Sign In</button>
<button className="flex-1 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">Post a Job</button>
</li>
</ul>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 lg:px-16 py-14 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex gap-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-full items-center border border-blue-100 px-4 py-2" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></svg>
              Certified Talent Network
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>
              Find <span className="text-blue-600">Certified</span> Developers in Minutes
            </h1>
<p className="text-lg max-w-xl leading-relaxed text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
              Browse rigorously verified engineers across modern stacks. Match by skills, certifications, timezone, and availability.
            </p>

<div className="flex items-center gap-8 pt-2">
<div>
<div className="text-2xl font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>18K+</div>
<div className="text-sm text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Developers Verified</div>
</div>
<div className="w-px h-12 bg-gray-200"></div>
<div>
<div className="text-2xl font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>120+</div>
<div className="text-sm text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Technologies</div>
</div>
<div className="w-px h-12 bg-gray-200"></div>
<div>
<div className="text-2xl font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>4.9</div>
<div className="text-sm text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Average Rating</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-6 pt-4">

<div className="rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border-gray-100">
<div className="relative">
<img alt="Featured Developer" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-3 left-3 bg-emerald-600 px-2 py-1 rounded-lg text-xs font-medium text-white" style={{fontFamily: '\'Inter\', sans-serif'}}>Available Now</div>
<button className="absolute top-3 right-3 flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-sm hover:scale-110 transition-all bg-white/90 hover:bg-white">
<svg className="w-4 h-4 text-gray-700" data-lucide="heart" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h3 className="font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Ava Thompson</h3>
<p className="text-sm text-gray-500 mt-1 flex items-center gap-1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></svg> Remote (US/EU)
                      </p>
</div>
<div className="text-right">
<div className="text-lg font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>$110/hr</div>
<div className="text-xs text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Senior Frontend</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-2.5 py-1 text-xs rounded-md bg-gray-100 text-gray-700">React</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-gray-100 text-gray-700">TypeScript</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-gray-100 text-gray-700 flex items-center gap-1">
<svg className="w-3 h-3 text-emerald-600" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> AWS Certified
                    </span>
</div>
<div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
<div className="text-sm text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>8+ yrs</div>
<div className="text-sm text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>Lead experience</div>
<div className="text-sm text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>C2 English</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl border p-6 flex flex-col justify-between border-blue-100">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-10 h-10 rounded-xl flex items-center justify-center bg-blue-100">
<svg className="w-5 h-5 text-indigo-600" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></svg>
</div>
<h4 className="font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Verified Credentials</h4>
</div>
<p className="text-sm leading-relaxed text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
                    Every profile is vetted with multi-step ID checks and certification verification to ensure quality and trust.
                  </p>
</div>
<button className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all group text-blue-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
                  Learn how we verify
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl">
<img alt="Developers Workspace" className="w-full object-cover aspect-[4/5] lg:aspect-[4/5]" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-6 left-6 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 bg-white/95" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4 text-amber-500" data-lucide="award" style={{strokeWidth: '1.5'}}></svg>
                Top Certified Talent
              </div>
</div>

<div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md rounded-2xl shadow-2xl border p-6 bg-white border-gray-100">
<div className="flex items-start justify-between gap-4 mb-4">
<div className="flex-1">
<h5 className="font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Noah Rivera</h5>
<p className="text-sm text-gray-500 mt-1 flex items-center gap-1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></svg> Toronto, CA (ET±2)
                  </p>
</div>
<div className="text-right">
<div className="text-xs text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>From</div>
<div className="font-semibold text-xl" style={{fontFamily: '\'Inter\', sans-serif'}}>$140/hr</div>
</div>
</div>
<div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
<div className="flex items-center gap-1 text-xs text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="server" style={{strokeWidth: '1.5'}}></svg> Backend
                </div>
<div className="flex items-center gap-1 text-xs text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="cpu" style={{strokeWidth: '1.5'}}></svg> Go • Rust
                </div>
<div className="flex items-center gap-1 text-xs text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3 text-emerald-600" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> CNCF Cert.
                </div>
</div>
<div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all shadow-sm bg-gray-900 text-white hover:bg-gray-800" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4" data-lucide="eye" style={{strokeWidth: '1.5'}}></svg> View Profile
                </button>
<button className="flex items-center justify-center w-12 h-12 rounded-xl border transition-all border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300">
<svg className="w-4 h-4" data-lucide="share" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20" id="search">
<div className="mx-auto max-w-7xl px-6 lg:px-16">
<div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6 lg:p-8">
<div className="text-center mb-8">
<h2 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Search Certified Developers</h2>
<p className="mt-2 text-gray-600" style={{fontFamily: '\'Inter\', sans-serif'}}>Filter by role, skill, certification, rate, and timezone</p>
</div>

<div className="flex items-center rounded-2xl p-1 mb-8 max-w-xs mx-auto bg-gray-100">
<button className="flex-1 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 bg-gray-900 text-white shadow-lg" id="fulltimeBtn" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4" data-lucide="id-card" style={{strokeWidth: '1.5'}}></svg> Full-time
            </button>
<button className="flex-1 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 hover:bg-white" id="contractBtn" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4" data-lucide="clock" style={{strokeWidth: '1.5'}}></svg> Contract
            </button>
</div>

<form className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">

<div className="relative xl:col-span-2">
<label className="block text-xs font-medium text-gray-500 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Keywords</label>
<div className="relative">
<svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search" style={{strokeWidth: '1.5'}}></svg>
<input className="w-full pl-11 pr-4 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white" placeholder="e.g., React, AWS, Kubernetes" type="text"/>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Location / Timezone</label>
<div className="relative">
<svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="globe" style={{strokeWidth: '1.5'}}></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option>Remote (Global)</option>
<option>US Only (ET/CT/PT)</option>
<option>EU Only (CET/CEST)</option>
<option>LATAM (UTC-6 to UTC-3)</option>
<option>APAC (UTC+5 to UTC+10)</option>
</select>
<svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></svg>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Role</label>
<div className="relative">
<svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="briefcase" style={{strokeWidth: '1.5'}}></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option>Frontend Engineer</option>
<option>Backend Engineer</option>
<option>Full‑Stack Engineer</option>
<option>DevOps / SRE</option>
<option>Data Engineer</option>
<option>Mobile Engineer</option>
</select>
<svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></svg>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Primary Skill</label>
<div className="relative">
<svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="code" style={{strokeWidth: '1.5'}}></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option>React</option>
<option>Node.js</option>
<option>Python</option>
<option>Go</option>
<option>Rust</option>
<option>Java / Spring</option>
</select>
<svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></svg>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Experience</label>
<div className="relative">
<svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option>Any</option>
<option>2+ years</option>
<option>4+ years</option>
<option>6+ years</option>
<option>10+ years</option>
</select>
<svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></svg>
</div>
</div>

<div className="relative">
<label className="block text-xs font-medium text-gray-500 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Rate / Salary Range</label>
<div className="relative">
<svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="dollar-sign" style={{strokeWidth: '1.5'}}></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option>$50–$100/hr</option>
<option>$100–$150/hr</option>
<option>$150–$250/hr</option>
<option>$250+/hr</option>
<option>$120k–$160k</option>
<option>$160k–$220k</option>
</select>
<svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></svg>
</div>
</div>

<div className="relative xl:col-span-2">
<label className="block text-xs font-medium text-gray-500 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>Certification</label>
<div className="relative">
<svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg>
<select className="appearance-none w-full pl-11 pr-10 py-4 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-200 bg-white">
<option>Any</option>
<option>AWS Certified (SAA/SAP)</option>
<option>GCP Professional</option>
<option>Azure Architect</option>
<option>CKA / CKS</option>
<option>Oracle Java Professional</option>
<option>Security+</option>
</select>
<svg className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" data-lucide="chevron-down" style={{strokeWidth: '1.5'}}></svg>
</div>
</div>

<div className="flex items-end sm:col-span-2 lg:col-span-4 xl:col-span-2">
<button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium transition-all shadow-lg hover:shadow-xl bg-blue-600 text-white hover:bg-blue-700" style={{fontFamily: '\'Inter\', sans-serif'}} type="submit">
<svg className="w-4 h-4" data-lucide="search" style={{strokeWidth: '1.5'}}></svg>
                Search Developers
              </button>
</div>
</form>

<div className="flex flex-wrap gap-3 border-t border-gray-100 mt-6 pt-6">
<div className="text-sm font-medium text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Quick filters:</div>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-blue-50 text-blue-700 hover:bg-blue-100" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3 inline mr-1" data-lucide="zap" style={{strokeWidth: '1.5'}}></svg> Available now
            </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-50 text-gray-700 hover:bg-gray-100" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3 inline mr-1" data-lucide="shield" style={{strokeWidth: '1.5'}}></svg> Security cleared
            </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-50 text-gray-700 hover:bg-gray-100" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3 inline mr-1" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></svg> US timezone
            </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-50 text-gray-700 hover:bg-gray-100" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3 inline mr-1" data-lucide="trophy" style={{strokeWidth: '1.5'}}></svg> Top rated
            </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors bg-gray-50 text-gray-700 hover:bg-gray-100" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3 inline mr-1" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> Kubernetes
            </button>
</div>
</div>
</div>
</section>

<section className="py-16" id="directory">
<div className="mx-auto max-w-7xl px-6 lg:px-16">
<div className="flex items-end justify-between mb-8">
<div>
<h3 className="text-xl sm:text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Featured Developers</h3>
<p className="text-gray-600 mt-1" style={{fontFamily: '\'Inter\', sans-serif'}}>Handpicked profiles based on quality, reviews, and certifications</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700" href="#" style={{fontFamily: '\'Inter\', sans-serif'}}>
            View all
            <svg className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all">
<div className="relative">
<img alt="Developer" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute top-3 left-3 flex items-center gap-2">
<span className="bg-emerald-600 text-white text-[11px] px-2 py-1 rounded-md">Verified</span>
<span className="bg-white/90 text-gray-700 text-[11px] px-2 py-1 rounded-md border border-gray-200">Top 3%</span>
</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white">
<svg className="w-4 h-4 text-gray-700" data-lucide="bookmark" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h4 className="font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Maya Patel</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></svg> Berlin, DE (CET)
                  </p>
</div>
<div className="text-right">
<div className="text-sm font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>$95/hr</div>
<div className="text-[11px] text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Frontend</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Vue</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Nuxt</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100 flex items-center gap-1">
<svg className="w-3 h-3 text-emerald-600" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> GCP Pro
                </span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-800" style={{fontFamily: '\'Inter\', sans-serif'}}>View</button>
<button className="w-11 h-11 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50">
<svg className="w-4 h-4 mx-auto" data-lucide="message-square" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
</div>
</div>

<div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all">
<div className="relative">
<img alt="Developer" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute top-3 left-3 flex items-center gap-2">
<span className="bg-emerald-600 text-white text-[11px] px-2 py-1 rounded-md">Verified</span>
</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white">
<svg className="w-4 h-4 text-gray-700" data-lucide="bookmark" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h4 className="font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Ethan Chen</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></svg> Remote (US)
                  </p>
</div>
<div className="text-right">
<div className="text-sm font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>$150/hr</div>
<div className="text-[11px] text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>DevOps / SRE</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Kubernetes</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Terraform</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100 flex items-center gap-1">
<svg className="w-3 h-3 text-emerald-600" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> CKA
                </span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-800" style={{fontFamily: '\'Inter\', sans-serif'}}>View</button>
<button className="w-11 h-11 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50">
<svg className="w-4 h-4 mx-auto" data-lucide="message-square" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
</div>
</div>

<div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all">
<div className="relative">
<img alt="Developer" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 flex items-center gap-2">
<span className="bg-white/90 text-gray-700 text-[11px] px-2 py-1 rounded-md border border-gray-200">Top Rated</span>
</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white">
<svg className="w-4 h-4 text-gray-700" data-lucide="bookmark" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h4 className="font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Sofia Almeida</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></svg> Lisbon, PT (GMT)
                  </p>
</div>
<div className="text-right">
<div className="text-sm font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>$120/hr</div>
<div className="text-[11px] text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Full‑Stack</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Next.js</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Node</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100 flex items-center gap-1">
<svg className="w-3 h-3 text-emerald-600" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> AWS SAA
                </span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-800" style={{fontFamily: '\'Inter\', sans-serif'}}>View</button>
<button className="w-11 h-11 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50">
<svg className="w-4 h-4 mx-auto" data-lucide="message-square" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
</div>
</div>

<div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition-all">
<div className="relative">
<img alt="Developer" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute top-3 left-3 flex items-center gap-2">
<span className="bg-emerald-600 text-white text-[11px] px-2 py-1 rounded-md">Verified</span>
</div>
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 border border-gray-200 flex items-center justify-center hover:bg-white">
<svg className="w-4 h-4 text-gray-700" data-lucide="bookmark" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-start justify-between">
<div>
<h4 className="font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>Lucas Moretti</h4>
<p className="text-xs text-gray-500 mt-1 flex items-center gap-1" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-3 h-3" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></svg> São Paulo, BR (BRT)
                  </p>
</div>
<div className="text-right">
<div className="text-sm font-semibold" style={{fontFamily: '\'Inter\', sans-serif'}}>$135/hr</div>
<div className="text-[11px] text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>Data Eng</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Python</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100">Spark</span>
<span className="px-2 py-1 rounded-md text-xs bg-gray-100 flex items-center gap-1">
<svg className="w-3 h-3 text-emerald-600" data-lucide="badge-check" style={{strokeWidth: '1.5'}}></svg> GCP Pro
                </span>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 py-2.5 rounded-xl text-sm font-medium bg-gray-900 text-white hover:bg-gray-800" style={{fontFamily: '\'Inter\', sans-serif'}}>View</button>
<button className="w-11 h-11 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50">
<svg className="w-4 h-4 mx-auto" data-lucide="message-square" style={{strokeWidth: '1.5'}}></svg>
</button>
</div>
</div>
</div>
</div>

<div className="mt-12 border-t border-gray-200"></div>
</div>
</section>

<section className="py-14" id="certs">
<div className="mx-auto max-w-7xl px-6 lg:px-16">
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-gray-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-700" data-lucide="lock" style={{strokeWidth: '1.5'}}></svg>
</div>
<h4 className="font-semibold tracking-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>Identity &amp; Background</h4>
</div>
<p className="text-sm text-gray-600 mt-3" style={{fontFamily: '\'Inter\', sans-serif'}}>KYC, work history, and references cross-checked for every professional.</p>
</div>
<div className="rounded-2xl border border-gray-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-700" data-lucide="stethoscope" style={{strokeWidth: '1.5'}}></svg>
</div>
<h4 className="font-semibold tracking-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>Technical Screening</h4>
</div>
<p className="text-sm text-gray-600 mt-3" style={{fontFamily: '\'Inter\', sans-serif'}}>Practical challenges and peer reviews calibrated per seniority and stack.</p>
</div>
<div className="rounded-2xl border border-gray-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
<svg className="w-5 h-5 text-blue-700" data-lucide="medal" style={{strokeWidth: '1.5'}}></svg>
</div>
<h4 className="font-semibold tracking-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>Certification Proof</h4>
</div>
<p className="text-sm text-gray-600 mt-3" style={{fontFamily: '\'Inter\', sans-serif'}}>Digital credential verification for cloud, security, and platform certs.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white" id="resources">
<div className="mx-auto max-w-7xl px-6 lg:px-16 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-2 text-gray-900">
<svg className="w-5 h-5" data-lucide="code-2" style={{strokeWidth: '1.5'}}></svg>
<span className="font-semibold tracking-tight" style={{fontFamily: '\'Inter\', sans-serif'}}>DEVVAULT</span>
</div>
<p className="text-sm text-gray-600 mt-2" style={{fontFamily: '\'Inter\', sans-serif'}}>The trusted directory for certified software professionals.</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600" href="#" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4" data-lucide="help-circle" style={{strokeWidth: '1.5'}}></svg> Help Center
            </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600" href="#" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4" data-lucide="file-text" style={{strokeWidth: '1.5'}}></svg> Terms
            </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600" href="#" style={{fontFamily: '\'Inter\', sans-serif'}}>
<svg className="w-4 h-4" data-lucide="shield" style={{strokeWidth: '1.5'}}></svg> Privacy
            </a>
</div>
</div>
<div className="mt-6 text-xs text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>© 2025 DevVault Inc. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
