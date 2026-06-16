import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.lucide && lucide.createIcons();

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
if (menuBtn && mobileNav) {
  let open = false;
  menuBtn.addEventListener('click', () => {
    open = !open;
    mobileNav.classList.toggle('hidden', !open);
    menuBtn.innerHTML = open ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white/90"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-white/90"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>';
  });
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative">
<div className="absolute inset-0">
<img alt="Calm abstract background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="/#projects">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 backdrop-blur">
<span className="text-sm font-semibold text-white/90">MX</span>
</span>
<span className="uppercase text-lg font-semibold tracking-tighter font-bricolage">Portfolio</span>
</a>
<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/90 hover:bg-white/10 transition font-geist" href="/#projects">Projects</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="/#about">About</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="/#contact">Contact</a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist" href="mailto:design@example.com">
            Get in touch
          </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" id="menuBtn">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90 font-geist" href="/#projects">Projects</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="/#about">About</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="/#contact">Contact</a>
</div>
</div>
</div>
</nav>
<section className="relative z-10">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-28 pb-24 lg:pb-40 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/20 backdrop-blur">
<svg className="h-4 w-4 text-white/80" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"></path></svg>
<span className="text-xs font-medium text-white/80 font-geist">Mental Health UX Design</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-geist font-light tracking-tighter">
        Improving Mental Health UX for IDF Veterans
      </h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80 font-geist">
        Designing a consistent, empathetic, and personalized digital experience for IDF veterans. Transforming a bureaucratic process into a human-centered journey that rebuilds trust and makes care more accessible.
      </p>
<div className="flex gap-3 mt-8 items-center justify-center flex-wrap">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-5 py-3 text-sm sm:text-base font-semibold hover:bg-white/90 transition font-geist" href="#research">
          Read the research
        </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/15 ring-1 ring-white/15 transition text-sm font-medium text-white font-geist bg-white/10 rounded-full px-5 py-3 backdrop-blur" href="#concept">
          See the concept
        </a>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/60">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="uppercase tracking-wider font-geist">Privacy &amp; Trust First</span>
</div>
</div>
</section>
</header>
<section className="relative z-10 -mt-12 pb-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="h-4 w-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Human-centered care</p>
<p className="text-xs text-white/70 font-geist">Empathy at every touchpoint</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="h-4 w-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Trust &amp; transparency</p>
<p className="text-xs text-white/70 font-geist">Clear steps and expectations</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<svg className="h-4 w-4 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</span>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Mental health first</p>
<p className="text-xs text-white/70 font-geist">Designed for diverse needs</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-3xl mx-8 pt-6 pr-6 pb-6 pl-6" id="research">
<div className="flex items-center gap-2 text-sm text-white/70">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H8l-5 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
<span className="font-normal font-geist">Research Insights</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] font-medium text-white tracking-tighter font-geist">Understanding the Problem</h2>
<p className="mt-1 text-sm sm:text-base text-white/70 font-normal font-geist">Through in-depth interviews with veterans and rehabilitation coordinators</p>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
<article className="sm:p-6 flex flex-col min-h-[360px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H8l-5 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">What veterans told us</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">User Research</p>
</div>
</div>
<ul className="space-y-2 text-sm text-white/80 font-geist">
<li className="flex items-start gap-2">
<span className="text-white/60 mt-0.5">•</span>
<span>Fear of stigma: "Will they take my weapon?", "Does this mean I'm mentally ill?"</span>
</li>
<li className="flex items-start gap-2">
<span className="text-white/60 mt-0.5">•</span>
<span>Lack of trust in the system: repetitive document requests, unclear intent</span>
</li>
<li className="flex items-start gap-2">
<span className="text-white/60 mt-0.5">•</span>
<span>Difficulty finding relevant information: rights scattered across systems</span>
</li>
<li className="flex items-start gap-2">
<span className="text-white/60 mt-0.5">•</span>
<span>Need for a human anchor: someone to listen, not just a portal</span>
</li>
</ul>
</div>
</article>
<article className="sm:p-6 flex flex-col min-h-[360px] bg-white/10 ring-1 ring-white/15 backdrop-blur rounded-2xl pt-5 pr-5 pb-5 pl-5 justify-between">
<div className="space-y-5">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-white/20 ring-1 ring-white/25 flex items-center justify-center">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div>
<h3 className="text-lg font-semibold text-white font-geist tracking-tight">Key user needs</h3>
<p className="text-xs text-white/60 font-geist uppercase tracking-wider">Design Goals</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-sm font-semibold text-white font-geist">True accessibility</p>
<p className="text-xs text-white/70 font-geist mt-1">Personalized, relevant information</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-sm font-semibold text-white font-geist">Transparency</p>
<p className="text-xs text-white/70 font-geist mt-1">Clear steps and timelines</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-sm font-semibold text-white font-geist">Human presence</p>
<p className="text-xs text-white/70 font-geist mt-1">Emotional support alongside digital</p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<p className="text-sm font-semibold text-white font-geist">Adaptability</p>
<p className="text-xs text-white/70 font-geist mt-1">Modular design for diverse needs</p>
</div>
</div>
</div>
</article>
</div>
</section>
<section className="mt-20 sm:p-8 bg-white/5 ring-1 ring-white/10 backdrop-blur rounded-3xl mx-8 pt-6 pr-6 pb-6 pl-6" id="concept">
<div className="flex items-center gap-2 text-sm text-white/70">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path></svg>
<span className="font-normal font-geist">Design Concept</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] font-medium text-white tracking-tighter font-geist">The Digital "Lobby"</h2>
<p className="mt-1 text-sm sm:text-base text-white/70 font-normal font-geist">A central place where veterans can see, understand, and act on their mental health journey</p>
</div>
<div className="mt-6 rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur p-5 sm:p-6">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-3">
<img alt="Coordinator" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-base font-semibold text-white font-geist">Your Coordinator</p>
<p className="text-sm text-white/60 font-geist">Dana Levi • Response in ~24h</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-2 text-sm hover:bg-white/15 transition font-geist text-white">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H8l-5 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path></svg>
          Message
        </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-white/60 font-geist uppercase tracking-wider">Status</span>
<svg className="h-4 w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
<p className="text-sm font-semibold text-white font-geist">Rehabilitation (Mental Health)</p>
<p className="text-xs text-white/70 font-geist mt-1">Disability: PTSD • Severity: Moderate</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-white/60 font-geist uppercase tracking-wider">Treatments</span>
<svg className="h-4 w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<div className="space-y-1 text-sm text-white/80 font-geist">
<div className="flex justify-between"><span>Granted</span><span>24</span></div>
<div className="flex justify-between"><span>Used</span><span>17</span></div>
<div className="flex justify-between"><span>Remaining</span><span>7</span></div>
</div>
<div className="mt-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/40 rounded-full" style={{width: '70%'}}></div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs text-white/60 font-geist uppercase tracking-wider">Recommendations</span>
<svg className="h-4 w-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"></path></svg>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 font-geist">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>
            Schedule therapy
          </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 text-xs text-white/80 font-geist">
<svg className="h-3 w-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8"></path></svg>
            Upload doc
          </span>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4 flex items-start justify-between gap-4">
<div className="flex items-start gap-3">
<svg className="h-5 w-5 text-white/70 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l10 5-10 5L2 7l10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
<div>
<p className="text-sm font-semibold text-white font-geist">Rights utilization tracker</p>
<p className="text-xs text-white/70 font-geist mt-1">You've used 17 of 24 therapy sessions. Don't leave benefits unused.</p>
</div>
</div>
<button className="whitespace-nowrap inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-3 py-2 text-sm font-semibold hover:bg-white/90 transition font-geist">
        Book session
      </button>
</div>
</div>
<div className="mt-8 text-center">
<button className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition font-geist">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1.003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
      View full case study
    </button>
</div>
</section>
<section className="max-w-7xl sm:px-6 sm:mt-20 mr-auto mb-24 ml-auto pr-4 pl-4" id="faq">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
<div className="md:col-span-5">
<h2 className="text-[56px] sm:text-[80px] leading-none font-semibold text-white tracking-tighter font-geist">Outcomes.</h2>
<p className="mt-3 text-sm sm:text-base text-white/80 font-geist">
            The impact of human-centered design on mental health services for veterans
          </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/15 backdrop-blur font-geist" href="#contact">
<span>Discuss this project</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="md:col-span-7 space-y-3">
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur p-5">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center shrink-0">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-white font-geist">Renewed trust</h3>
<p className="text-sm text-white/70 font-geist mt-1">Veterans reported a clear, supportive experience that reduced stigma and confusion</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur p-5">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center shrink-0">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13l-3 3a2 2 0 0 0 3 3l3-3m1-5l3-3a2 2 0 0 1 3 3l-3 3"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-white font-geist">Better collaboration</h3>
<p className="text-sm text-white/70 font-geist mt-1">Rehabilitation staff saw improved communication and transparency</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/10 ring-1 ring-white/15 backdrop-blur p-5">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 flex items-center justify-center shrink-0">
<svg className="h-5 w-5 text-white/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l10 5-10 5L2 7l10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-white font-geist">Ecosystem foundation</h3>
<p className="text-sm text-white/70 font-geist mt-1">A basis for a broader digital rehabilitation experience bridging emotional, bureaucratic, and human needs</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="max-w-7xl mr-auto ml-auto pr-6 pb-12 pl-6">
<div className="p-8 lg:p-12 border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-2xl">
<div className="text-center mb-8">
<h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight font-geist mb-3">Let's work together</h3>
<p className="text-sm text-white/70 font-geist mb-6">Interested in discussing UX design projects?</p>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition font-geist" href="mailto:design@example.com">
        Get in touch
        <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15">
<span className="text-xs font-semibold text-white/90">MX</span>
</span>
<span className="text-xs text-white/40 font-geist">© 2025 Portfolio</span>
</div>
<a className="text-xs text-white/60 hover:text-white/90 transition font-geist" href="/#projects">Back to Projects</a>
</div>
</div>
</footer>



    </>
  );
}
