import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  // lucide icons
  lucide.createIcons();

  // current year
  document.getElementById('year').textContent = new Date().getFullYear();

  // reveal animation
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('opacity-100','translate-y-0');
        observer.unobserve(e.target);
      }
    });
  },{threshold:.2});
  reveals.forEach(card=>{
    card.classList.add('opacity-0','translate-y-4','transition','duration-500','ease-out');
    observer.observe(card);
  });

  // stats chart
  const ctx=document.getElementById('viewsChart').getContext('2d');
  new Chart(ctx,{
    type:'line',
    data:{
      labels:['Jan','Feb','Mar','Apr','May','Jun'],
      datasets:[{
        label:'Live attendance',
        data:[320,410,450,560,680,740],
        borderColor:'#4f46e5',
        backgroundColor:'rgba(99,102,241,.15)',
        tension:.4,
        fill:true,
        pointRadius:4,
        pointHoverRadius:5
      }]
    },
    options:{
      plugins:{legend:{display:false}},
      scales:{
        y:{grid:{color:'rgba(0,0,0,.05)'}, ticks:{stepSize:200}},
        x:{grid:{display:false}}
      },
      responsive:true,
      maintainAspectRatio:false
    }
  });

  // hero keyframe helper (for inline style animation start)
  document.addEventListener('DOMContentLoaded',()=>{
    const style=document.createElement('style');
    style.textContent=`@keyframes fadeSlideIn{to{opacity:1;transform:translateY(0)}}`;
    document.head.append(style);
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="absolute left-4 top-4 z-50 px-3 py-2 rounded-md bg-indigo-600 text-white text-sm sr-only focus:not-sr-only" href="#main">Skip to main content</a>

<header className="relative pt-28 pb-24 px-6 overflow-hidden">

<div className="absolute inset-0 -z-10">
<div className="absolute -top-24 right-1/2 w-[600px] h-[600px] bg-indigo-100 rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
<div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-rose-100 rounded-full filter blur-3xl opacity-30 animate-pulse delay-75"></div>
</div>
<div className="max-w-3xl mx-auto text-center space-y-6">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight opacity-0 translate-y-6 transition duration-700 ease-out" style={{animation: 'fadeSlideIn 0.6s forwards'}}>Product Webinars</h1>
<p className="text-lg text-neutral-600 opacity-0 translate-y-6 transition duration-700 ease-out delay-75" style={{animation: 'fadeSlideIn 0.6s .1s forwards'}}>Live deep-dives and an ever-growing on-demand library for busy builders.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 translate-y-6 transition duration-700 ease-out delay-100" style={{animation: 'fadeSlideIn 0.6s .2s forwards'}}>
<button aria-label="Browse library" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 overflow-hidden">
<span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition"></span>
<i className="w-5 h-5" data-lucide="play-circle"></i>Browse library
      </button>
<button aria-label="Upcoming sessions" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neutral-100 hover:bg-neutral-200 text-sm transition focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 overflow-hidden">
<span className="absolute inset-0 bg-neutral-900/5 opacity-0 group-hover:opacity-100 transition"></span>
<i className="w-4 h-4" data-lucide="calendar"></i>Upcoming sessions
      </button>
</div>
</div>
</header>

<section className="max-w-5xl mx-auto px-6 -mt-10" id="main">
<form aria-label="Filter webinars" className="bg-white/90 backdrop-blur rounded-xl ring-1 ring-neutral-200 shadow-sm px-6 py-5 flex flex-col sm:flex-row gap-4">
<label className="relative flex-1">
<span className="sr-only">Search webinars</span>
<input aria-label="Search webinars" className="peer w-full rounded-md bg-neutral-50 border border-neutral-200 py-3 pl-11 pr-4 text-sm placeholder-neutral-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition" placeholder="Search webinars…" type="search"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none peer-focus:text-indigo-500" data-lucide="search"></i>
</label>
<label className="relative">
<span className="sr-only">Category</span>
<select aria-label="Select webinar category" className="appearance-none bg-neutral-50 border border-neutral-200 pr-10 pl-4 py-3 rounded-md text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition">
<option value="">All topics</option>
<option>Email Security</option>
<option>Automation</option>
<option>AI</option>
</select>
<i className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" data-lucide="chevron-down"></i>
</label>
</form>
</section>

<section className="max-w-5xl mx-auto px-6 mt-20 space-y-8">
<header className="flex items-baseline justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Live webinars</h2>
<span className="inline-flex items-center gap-2 text-sm font-medium text-rose-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
</span>
      Happening soon
    </span>
</header>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article aria-labelledby="webinar-1-title" className="reveal flex flex-col rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md">
<div className="p-5 space-y-3 flex-1">
<h3 className="text-base font-medium" id="webinar-1-title">Zero-Trust Mail Gateways</h3>
<p className="text-sm text-neutral-600">Today · 4 PM CET</p>
<p className="text-sm text-neutral-600 line-clamp-3">Architecting mail flow for breach containment and visibility.</p>
</div>
<button aria-label="Join webinar: Zero-Trust Mail Gateways" className="m-5 py-2.5 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm flex items-center justify-center gap-1 transition">
<i className="w-4 h-4" data-lucide="video"></i>Join now
      </button>
</article>
<article aria-labelledby="webinar-2-title" className="reveal flex flex-col rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-75">
<div className="p-5 space-y-3 flex-1">
<h3 className="text-base font-medium" id="webinar-2-title">End-to-End Encryption 101</h3>
<p className="text-sm text-neutral-600">Tomorrow · 11 AM CET</p>
<p className="text-sm text-neutral-600 line-clamp-3">A fast-paced demo with live key rotation and deep Q&amp;A.</p>
</div>
<button aria-label="Reserve webinar: End-to-End Encryption 101" className="m-5 py-2.5 rounded-md bg-rose-600 hover:bg-rose-500 text-white text-sm flex items-center justify-center gap-1 transition">
<i className="w-4 h-4" data-lucide="clock"></i>Reserve
      </button>
</article>
<article aria-labelledby="webinar-3-title" className="reveal flex flex-col rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-100">
<div className="p-5 space-y-3 flex-1">
<h3 className="text-base font-medium" id="webinar-3-title">AI-Driven Phishing Detection</h3>
<p className="text-sm text-neutral-600">Friday · 2 PM CET</p>
<p className="text-sm text-neutral-600 line-clamp-3">Behind the scenes of our transformer model and real-world catch rates.</p>
</div>
<button aria-label="Join waitlist for AI-Driven Phishing Detection" className="m-5 py-2.5 rounded-md bg-neutral-100 hover:bg-neutral-200 text-sm flex items-center justify-center gap-1 transition">
<i className="w-4 h-4" data-lucide="zap"></i>Join waitlist
      </button>
</article>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mt-24 space-y-8">
<header className="flex items-baseline justify-between">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight">On-demand</h2>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1" href="#">
      All sessions<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</header>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<article aria-labelledby="ondemand-1-title" className="reveal overflow-hidden rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md">
<img alt="Server racks with purple lighting" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1521790797524-b2497295b8e9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-5 space-y-2">
<h3 className="text-base font-medium leading-snug" id="ondemand-1-title">Securing SMTP Relays at Scale</h3>
<p className="text-sm text-neutral-600">45 min · Intermediate</p>
<button aria-label="Watch Securing SMTP Relays at Scale" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
<i className="w-4 h-4" data-lucide="play"></i>Watch
        </button>
</div>
</article>
<article aria-labelledby="ondemand-2-title" className="reveal overflow-hidden rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-75">
<img alt="Person holding neon envelope icon" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe79e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-5 space-y-2">
<h3 className="text-base font-medium leading-snug" id="ondemand-2-title">Migrating from SPF/DKIM to BIMI</h3>
<p className="text-sm text-neutral-600">30 min · Beginner</p>
<button aria-label="Watch Migrating from SPF/DKIM to BIMI" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
<i className="w-4 h-4" data-lucide="play"></i>Watch
        </button>
</div>
</article>
<article aria-labelledby="ondemand-3-title" className="reveal overflow-hidden rounded-lg ring-1 ring-neutral-200 hover:ring-indigo-300 transition shadow-sm hover:shadow-md delay-100">
<img alt="Developer writing code on multiple monitors" className="w-full h-36 object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-5 space-y-2">
<h3 className="text-base font-medium leading-snug" id="ondemand-3-title">Parsing Mail Headers with Python</h3>
<p className="text-sm text-neutral-600">60 min · Advanced</p>
<button aria-label="Watch Parsing Mail Headers with Python" className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
<i className="w-4 h-4" data-lucide="play"></i>Watch
        </button>
</div>
</article>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mt-24 space-y-6">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-center">Community stats</h2>
<p className="text-center text-sm text-neutral-600 max-w-md mx-auto">Attendance growth over the last 6 months.</p>
<div className="mx-auto max-w-lg">
<div className="bg-neutral-50 ring-1 ring-neutral-200 rounded-lg p-6">
<canvas aria-label="Webinar attendance trend" id="viewsChart" role="img"></canvas>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 mt-24 py-10 text-center text-sm text-neutral-500">
  © <span id="year"></span> Company
</footer>



    </>
  );
}
