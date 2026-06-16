import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    AOS.init({ once: true, duration: 600 });

    // Lucide icons
    lucide.createIcons();

    // Simple Chart.js demo
    const ctx = document.getElementById('pipelineChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Opportunities',
          data: [3, 7, 9, 14],
          borderColor: '#6366F1',
          backgroundColor: 'rgba(99,102,241,0.15)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a1a1aa' } },
          y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#a1a1aa' } }
        }
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative flex flex-col min-h-[90vh] md:px-10 lg:px-20 text-center pr-6 pl-6 items-center justify-center">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 to-black"></div>
<h1 className="sm:text-5xl lg:text-6xl leading-tight aos-init aos-animate text-4xl font-semibold mb-6" data-aos="fade-up" data-aos-delay="50">LinkedIn isn’t broken. Your playbook is.<br className="hidden md:block"/></h1>
<p className="max-w-2xl text-lg sm:text-xl mb-10 text-neutral-300 aos-init aos-animate" data-aos="fade-up" data-aos-delay="150" style={{}}>
      Stop chasing likes. Start turning buyer signals into revenue.<br className="hidden sm:block"/>
      We rewire LinkedIn into your highest-performing sales channel.
    </p>
<a className="inline-flex items-center gap-3 hover:bg-indigo-500 transition-all duration-300 aos-init aos-animate font-medium text-cyan-950 bg-[#00e6fc] rounded-md pt-4 pr-8 pb-4 pl-8" data-aos="zoom-in" data-aos-delay="250" href="#reframe" style={{transition: 'outline 0.1s ease-in-out'}}>
<i data-lucide="compass"></i> Show Me the New Way
    </a>
<img alt="" className="absolute bottom-0 right-0 w-72 md:w-96 lg:w-[32rem] object-cover opacity-10 pointer-events-none select-none" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</section>

<section className="px-6 md:px-10 lg:px-20 py-24 border-t border-slate-200" id="reframe">
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
<div className="aos-init aos-animate" data-aos="fade-right">
<h2 className="text-3xl md:text-4xl font-semibold mb-5">The Reframe</h2>
<p className="mb-6 text-neutral-300" style={{}}>Most content agencies sell likes.<br/>We sell leverage.</p>
<p className="mb-6">You're not here for social media clout.<br/>You're here for revenue.</p>
</div>
<div className="space-y-6 aos-init aos-animate" data-aos="fade-left">
<div className="p-6 rounded-lg border bg-neutral-900/40 border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<h3 className="font-medium mb-3 flex items-center gap-2"><i className="text-rose-500" data-lucide="x-circle" style={{transition: 'outline 0.1s ease-in-out'}}></i> Old Way</h3>
<p className="text-neutral-300" style={{}}>Spray, pray, hope your ICP sees it.</p>
</div>
<div className="p-6 rounded-lg border bg-neutral-900/40 border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<h3 className="font-medium mb-3 flex items-center gap-2"><i className="text-[#00e6fc]" data-lucide="check-circle" style={{transition: 'outline 0.1s ease-in-out'}}></i> New Way</h3>
<p className="text-neutral-300" style={{}}>Reverse-engineered content that hits the decision-maker's feed—on purpose.</p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-10 lg:px-20 py-24 border-t bg-neutral-900/20 border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-5xl mx-auto text-center space-y-10">
<h2 className="text-3xl md:text-4xl font-semibold aos-init aos-animate" data-aos="fade-up">87% of your engagement is wasted.</h2>
<p className="text-neutral-300 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" style={{}}>
        Your team posts.Your network claps.Your buyer? Silent.
      </p>
<p className="max-w-3xl mx-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        Meanwhile, competitors build pipeline behind the scenes—
        with less content, but smarter strategy.
      </p>
</div>
</section>

<section className="px-6 md:px-10 lg:px-20 py-24 border-t border-slate-200">
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
<div className="space-y-6 aos-init aos-animate" data-aos="fade-right">
<h2 className="text-3xl md:text-4xl font-semibold">
          It’s not that you're invisible.You're forgettable.
        </h2>
<p>Your dream clients saw your post.But they didn't feel it.We fix that.</p>
<p className="text-neutral-300" style={{}}>
          We build content that hits emotional triggers, tracks silent lurkers,
          and maps every click to real pipeline motion.
        </p>
</div>
<div className="aos-init aos-animate" data-aos="fade-left">
<img alt="Emotional Impact" className="rounded-lg border shadow-xl object-cover border-slate-200" src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&amp;fit=crop&amp;w=900&amp;q=70"/>
</div>
</div>
</section>

<section className="px-6 md:px-10 lg:px-20 py-24 border-t bg-neutral-900/20 border-slate-200" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 aos-init aos-animate" data-aos="fade-up">Welcome to Precision Posting.</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="p-6 rounded-lg border border-slate-200 aos-init aos-animate bg-[#1a222d]/60" data-aos="fade-up" data-aos-delay="50" style={{}}>
<i className="w-6 h-6 mb-4 text-indigo-400" data-lucide="database"></i>
<p className="font-medium mb-2">Scrape who’s engaging (even if they don’t like)</p>
</div>
<div className="p-6 rounded-lg border border-slate-200 aos-init aos-animate bg-[#1a222d]/60" data-aos="fade-up" data-aos-delay="100" style={{}}>
<i className="w-6 h-6 mb-4 text-indigo-400" data-lucide="radar"></i>
<p className="font-medium mb-2">Detect buying intent in real-time</p>
</div>
<div className="p-6 rounded-lg border border-slate-200 aos-init aos-animate bg-[#1a222d]/60" data-aos="fade-up" data-aos-delay="150" style={{}}>
<i className="w-6 h-6 mb-4 text-indigo-400" data-lucide="edit-3"></i>
<p className="font-medium mb-2">Create posts engineered to provoke action</p>
</div>
<div className="p-6 rounded-lg border border-slate-200 aos-init aos-animate bg-[#1a222d]/60" data-aos="fade-up" data-aos-delay="200" style={{}}>
<i className="w-6 h-6 mb-4 text-indigo-400" data-lucide="activity"></i>
<p className="font-medium mb-2">Attribution dashboards that speak CRO, not CMO</p>
</div>
</div>

<div className="mt-16 rounded-lg border p-8 border-slate-200 aos-init aos-animate bg-[#1a222d]/60" data-aos="zoom-in" data-aos-delay="300" style={{}}>
<h3 className="font-medium mb-6 flex items-center gap-2"><i data-lucide="bar-chart-3"></i> Pipeline Preview</h3>
<div className="relative w-full h-64">
<canvas id="pipelineChart"></canvas>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-10 lg:px-20 py-24 border-t border-slate-200">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6 aos-init aos-animate" data-aos="fade-right">
<h2 className="text-3xl md:text-4xl font-semibold">Origin8 → LinkedIn Revenue Engine</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="mt-1 text-[#00e6fc]" data-lucide="check" style={{transition: 'outline 0.1s ease-in-out'}}></i> Strategic content execution
          </li>
<li className="flex items-start gap-3">
<i className="mt-1 text-[#00e6fc]" data-lucide="check" style={{transition: 'outline 0.1s ease-in-out'}}></i> ICP-first creative
          </li>
<li className="flex items-start gap-3">
<i className="mt-1 text-[#00e6fc]" data-lucide="check" style={{transition: 'outline 0.1s ease-in-out'}}></i> Signal-based campaign triggers
          </li>
<li className="flex items-start gap-3">
<i className="mt-1 text-[#00e6fc]" data-lucide="check" style={{transition: 'outline 0.1s ease-in-out'}}></i> End-to-end done-for-you system
          </li>
</ul>
<p className="font-medium text-indigo-400">🕒 30-day ROI or don’t pay.</p>
</div>
<img alt="Offer Illustration" className="rounded-lg border shadow-xl object-cover border-slate-200 aos-init aos-animate" data-aos="fade-left" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</section>

<section className="px-6 md:px-10 lg:px-20 py-24 bg-gradient-to-br to-transparent border-t from-indigo-700/20 via-violet-800/10 border-slate-200" style={{}}>
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold aos-init aos-animate" data-aos="fade-up">Ready to stop guessing?</h2>
<p className="text-neutral-300 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" style={{}}>
        We'll show you who’s engaging, what to post, and how to close—without ever logging into LinkedIn.
      </p>
<a className="inline-flex items-center gap-3 px-10 py-5 rounded-md border transition-all duration-300 font-medium border-indigo-600 hover:border-indigo-400 bg-indigo-600/10 hover:bg-indigo-600/20 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
        👉 Book a Precision Demo
      </a>
</div>
</section>

<footer className="py-10 border-t text-center text-sm text-neutral-500 border-slate-200" style={{}}>
    © 2023 Origin8 • All Rights Reserved
  </footer>



    </>
  );
}
