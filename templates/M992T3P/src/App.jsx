import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    // Counter animation
    document.querySelectorAll('.counter').forEach(el => {
      const target = +el.getAttribute('data-count');
      let count = 0;
      const update = () => {
        count += Math.ceil(target / 120);
        if (count > target) count = target;
        el.textContent = count.toLocaleString();
        if (count < target) requestAnimationFrame(update);
      };
      update();
    });

    // FAQ icon toggle
    document.querySelectorAll('details summary').forEach(summary => {
      summary.addEventListener('click', () => {
        const icon = summary.querySelector('i');
        icon.setAttribute('data-lucide', summary.parentElement.open ? 'plus' : 'minus');
        lucide.createIcons();
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
<div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
<a className="text-2xl tracking-tight font-semibold text-indigo-600" href="#">FlowPilot</a>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-indigo-600 transition-colors" href="#">Home</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Features</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Pricing</a>
<a className="hover:text-indigo-600 transition-colors" href="#">About</a>
<a className="hover:text-indigo-600 transition-colors" href="#">Contact</a>
</nav>
<button className="hidden md:inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-md px-5 py-2 transition">
        Get Started
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden p-2 rounded-md hover:bg-slate-100">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative">
<img alt="" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0f172acc] via-[#1e293bcc] to-transparent"></div>
<div className="relative max-w-7xl mx-auto flex flex-col gap-6 py-32 px-6 text-white">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-tight">
        Orchestrate Your Flow.<br/>Achieve More with FlowPilot.
      </h1>
<p className="max-w-2xl text-lg opacity-90">
        The productivity cockpit that aligns tasks, teams, and time—so you can cruise through workdays with clarity.
      </p>
<div className="flex gap-4">
<button className="bg-indigo-600 hover:bg-indigo-700 text-sm font-medium px-6 py-3 rounded-md flex items-center gap-2 transition">
          Try It Free
          <i className="w-4 h-4" data-lucide="rocket"></i>
</button>
<button className="bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-sm font-medium px-6 py-3 rounded-md transition">
          Watch Demo
        </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="border border-slate-100 p-8 rounded-lg hover:shadow-lg transition group">
<i className="w-8 h-8 text-indigo-600 mb-4" data-lucide="users"></i>
<h3 className="text-lg font-medium mb-2">Real-time Collaboration</h3>
<p className="text-sm text-slate-600">
          Brainstorm, plan, and execute with your team—live, anywhere.
        </p>
</div>
<div className="border border-slate-100 p-8 rounded-lg hover:shadow-lg transition group">
<i className="w-8 h-8 text-teal-600 mb-4" data-lucide="calendar"></i>
<h3 className="text-lg font-medium mb-2">Smart Task Scheduling</h3>
<p className="text-sm text-slate-600">
          Auto-prioritized agendas that adapt to changes on the fly.
        </p>
</div>
<div className="border border-slate-100 p-8 rounded-lg hover:shadow-lg transition group">
<i className="w-8 h-8 text-purple-600 mb-4" data-lucide="smartphone"></i>
<h3 className="text-lg font-medium mb-2">Cross-platform Sync</h3>
<p className="text-sm text-slate-600">
          Keep momentum across desktop, mobile, and web—seamlessly.
        </p>
</div>
<div className="border border-slate-100 p-8 rounded-lg hover:shadow-lg transition group">
<i className="w-8 h-8 text-indigo-600 mb-4" data-lucide="bar-chart-3"></i>
<h3 className="text-lg font-medium mb-2">Focus Analytics</h3>
<p className="text-sm text-slate-600">
          Visualize productivity patterns and sharpen your workflow.
        </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">Pilot Your Day with Precision</h2>
<p className="text-slate-600">
        FlowPilot merges powerful task planning with intuitive design, ensuring you never miss a beat. From AI-assisted prioritization to deep integrations, our cockpit view puts everything that matters on one clear radar.
      </p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-600 mt-1" data-lucide="check-circle"></i>
<span className="text-slate-600 text-sm">Automated progress tracking</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-600 mt-1" data-lucide="check-circle"></i>
<span className="text-slate-600 text-sm">One-click integration with 50+ services</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-teal-600 mt-1" data-lucide="check-circle"></i>
<span className="text-slate-600 text-sm">Customizable dashboards &amp; widgets</span>
</li>
</ul>
<button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-3 rounded-md transition flex items-center gap-2">
        Explore Features
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div>
<img alt="Dashboard mockup" className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</section>

<section className="bg-slate-50">
<div className="max-w-6xl mx-auto py-24 px-6 grid lg:grid-cols-2 gap-12 items-center">
<img alt="Team" className="rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">About FlowPilot</h2>
<p className="text-slate-600 mb-4">
          We’re a distributed crew of productivity enthusiasts, designers, and engineers on a mission to create a workspace where creativity soars and distractions vanish.
        </p>
<p className="text-slate-600">
          Since launching in 2022, FlowPilot has helped over 120k professionals find their rhythm, backed by venture partners that believe in our vision of friction-free work.
        </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Snapshots from the Cockpit</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<img alt="" className="rounded-md object-cover h-64 w-full" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="rounded-md object-cover h-64 w-full" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="rounded-md object-cover h-64 w-full" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="rounded-md object-cover h-64 w-full" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="" className="rounded-md object-cover h-64 w-full" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="rounded-md object-cover h-64 w-full" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</section>

<section className="bg-gradient-to-r from-indigo-50 to-teal-50">
<div className="max-w-7xl mx-auto py-24 px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Use Cases</h2>
<div className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory pb-4">

<div className="min-w-[320px] bg-white border border-slate-100 rounded-lg p-6 snap-start scroll-ml-6">
<i className="w-6 h-6 text-indigo-600 mb-4" data-lucide="briefcase"></i>
<h3 className="font-medium mb-2">Project Roadmaps</h3>
<p className="text-sm text-slate-600">Align long-term goals with milestones.</p>
</div>
<div className="min-w-[320px] bg-white border border-slate-100 rounded-lg p-6 snap-start">
<i className="w-6 h-6 text-teal-600 mb-4" data-lucide="graduation-cap"></i>
<h3 className="font-medium mb-2">Academic Planning</h3>
<p className="text-sm text-slate-600">Organize coursework and assignment deadlines.</p>
</div>
<div className="min-w-[320px] bg-white border border-slate-100 rounded-lg p-6 snap-start">
<i className="w-6 h-6 text-purple-600 mb-4" data-lucide="mic"></i>
<h3 className="font-medium mb-2">Content Production</h3>
<p className="text-sm text-slate-600">Sync scripts, shoots, and editorial calendars.</p>
</div>
<div className="min-w-[320px] bg-white border border-slate-100 rounded-lg p-6 snap-start">
<i className="w-6 h-6 text-indigo-600 mb-4" data-lucide="activity"></i>
<h3 className="font-medium mb-2">Agile Sprints</h3>
<p className="text-sm text-slate-600">Track tasks, velocity, and retrospectives.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6 text-center">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
<div>
<h3 className="text-5xl font-semibold text-indigo-600 counter" data-count="120000">0</h3>
<p className="text-slate-600 mt-2">Active Users</p>
</div>
<div>
<h3 className="text-5xl font-semibold text-teal-600 counter" data-count="48">0</h3>
<p className="text-slate-600 mt-2">Integrations</p>
</div>
<div>
<h3 className="text-5xl font-semibold text-purple-600 counter" data-count="8700000">0</h3>
<p className="text-slate-600 mt-2">Tasks Completed</p>
</div>
</div>
</section>

<section className="bg-slate-50">
<div className="max-w-7xl mx-auto py-24 px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Trusted by Teams Worldwide</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 border border-slate-100 rounded-lg">
<p className="italic text-slate-600">“FlowPilot transformed our chaotic workload into a symphony of productivity. Tasks finally feel manageable.”</p>
<div className="flex items-center gap-3 mt-6">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg"/>
<div>
<p className="font-medium">Anna Richardson</p>
<p className="text-xs text-slate-500">Product Lead, Nimbus</p>
</div>
</div>
</div>
<div className="bg-white p-8 border border-slate-100 rounded-lg">
<p className="italic text-slate-600">“The focus analytics revealed patterns we never saw. Our developers get into flow faster each morning.”</p>
<div className="flex items-center gap-3 mt-6">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/45.jpg"/>
<div>
<p className="font-medium">Miguel Santos</p>
<p className="text-xs text-slate-500">CTO, Hyperloop Labs</p>
</div>
</div>
</div>
<div className="bg-white p-8 border border-slate-100 rounded-lg">
<p className="italic text-slate-600">“In under a week we had everyone onboarded and shipping faster than ever—FlowPilot is a game-changer.”</p>
<div className="flex items-center gap-3 mt-6">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/77.jpg"/>
<div>
<p className="font-medium">Liam Chen</p>
<p className="text-xs text-slate-500">Founder, PixelForge</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto py-24 px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="border border-slate-100 rounded-lg p-6">
<summary className="font-medium cursor-pointer flex items-center justify-between">
          Is there a free trial?
          <i className="w-4 h-4" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-slate-600 text-sm">Yes—enjoy a 14-day fully featured trial without credit card.</p>
</details>
<details className="border border-slate-100 rounded-lg p-6">
<summary className="font-medium cursor-pointer flex items-center justify-between">
          Which platforms are supported?
          <i className="w-4 h-4" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-slate-600 text-sm">FlowPilot runs on macOS, Windows, Linux, iOS, Android, and web.</p>
</details>
<details className="border border-slate-100 rounded-lg p-6">
<summary className="font-medium cursor-pointer flex items-center justify-between">
          Do you offer discounts for education or nonprofits?
          <i className="w-4 h-4" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-slate-600 text-sm">Yes—qualifying institutions receive a 30% discount.</p>
</details>
<details className="border border-slate-100 rounded-lg p-6">
<summary className="font-medium cursor-pointer flex items-center justify-between">
          How secure is my data?
          <i className="w-4 h-4" data-lucide="plus"></i>
</summary>
<p className="mt-4 text-slate-600 text-sm">We use end-to-end encryption, SOC2 compliance, and regular audits.</p>
</details>
</div>
</section>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<svg height="100%" width="100%">
<defs>
<lineargradient id="grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: '0.2'}}></stop>
</lineargradient>
</defs>
<rect fill="url(#grad)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto py-24 px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Take Command of Your Productivity</h2>
<p className="text-slate-600 mb-8 max-w-2xl mx-auto">
        Start your journey with FlowPilot today and experience the cockpit that guides thousands to peak performance.
      </p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-8 py-4 rounded-md transition flex items-center gap-2 mx-auto">
        Start Free Trial
        <i className="w-4 h-4" data-lucide="rocket"></i>
</button>
</div>
</section>

<footer className="border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">
<div className="space-y-4">
<a className="text-2xl font-semibold tracking-tight text-indigo-600" href="#">FlowPilot</a>
<p className="text-slate-600 text-sm max-w-xs">
          Navigate workdays with clarity and control. © 2024 FlowPilot Inc. All rights reserved.
        </p>
</div>
<div className="flex flex-wrap gap-12">
<div className="space-y-3">
<h4 className="font-medium">Product</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-indigo-600" href="#">Features</a></li>
<li><a className="hover:text-indigo-600" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-600" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-600" href="#">Updates</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="font-medium">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-indigo-600" href="#">About</a></li>
<li><a className="hover:text-indigo-600" href="#">Press</a></li>
<li><a className="hover:text-indigo-600" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="font-medium">Resources</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-indigo-600" href="#">Help Center</a></li>
<li><a className="hover:text-indigo-600" href="#">Community</a></li>
<li><a className="hover:text-indigo-600" href="#">Docs</a></li>
<li><a className="hover:text-indigo-600" href="#">Blog</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="font-medium">Follow Us On</h4>
<div className="flex gap-4">
<a className="p-2 rounded-full hover:bg-slate-100 transition" href="#">
<i className="w-5 h-5 text-slate-600" data-lucide="twitter"></i>
</a>
<a className="p-2 rounded-full hover:bg-slate-100 transition" href="#">
<i className="w-5 h-5 text-slate-600" data-lucide="facebook"></i>
</a>
<a className="p-2 rounded-full hover:bg-slate-100 transition" href="#">
<i className="w-5 h-5 text-slate-600" data-lucide="instagram"></i>
</a>
<a className="p-2 rounded-full hover:bg-slate-100 transition" href="#">
<i className="w-5 h-5 text-slate-600" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
