import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
lucide.createIcons();
document.getElementById('year').textContent=new Date().getFullYear();

const ctx=document.getElementById('visitsChart').getContext('2d');
new Chart(ctx,{
  type:'line',
  data:{
    labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
    datasets:[{label:'Visits',data:[6200,7200,8100,9800,10600,9300,10200],
      borderColor:'rgba(245,158,11,1)',backgroundColor:'rgba(245,158,11,.15)',borderWidth:2,tension:.35,fill:true,
      pointRadius:3,pointBackgroundColor:'rgba(245,158,11,1)'}]
  },
  options:{
    responsive:true,maintainAspectRatio:false,
    scales:{x:{ticks:{color:'#e7e5e4',font:{family:'Instrument Serif',size:12}}},
            y:{ticks:{color:'#e7e5e4',font:{family:'Instrument Serif',size:12}},
               grid:{color:'rgba(120,113,108,.2)'}}},
    plugins:{legend:{display:false}}
  }
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63" width="100%"></iframe>
</div>

<header className="w-full max-w-3xl mx-auto mt-12 lg:mt-20 border border-[var(--border)] rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,.06),0px_6px_12px_-4px_rgba(0,0,0,.25)] bg-[var(--card)]/60 backdrop-blur" id="home" style={{animation: 'fadeUp .9s ease-out .15s both'}}>

<nav className="flex justify-between items-center flex-wrap gap-y-4 px-8 pt-8 pb-4 border-b border-[var(--border)]">
<ul className="flex gap-6 font-sans text-base">
<li><a className="hover:text-[var(--accent)]" href="#home">Home</a></li>
<li><a className="hover:text-[var(--accent)]" href="#about">About</a></li>
<li><a className="hover:text-[var(--accent)]" href="#work">Work</a></li>
<li><a className="hover:text-[var(--accent)]" href="#blog">Blog</a></li>
<li><a className="hover:text-[var(--accent)]" href="#contact">Contact</a></li>
</ul>
<ul className="flex gap-5">
<li><a aria-label="Twitter" className="hover:text-[var(--accent)] text-orange-400" href="https://twitter.com"><i className="w-5 h-5" data-lucide="twitter"></i></a></li>
<li><a aria-label="LinkedIn" className="hover:text-[var(--accent)] text-orange-400" href="https://linkedin.com"><i className="w-5 h-5" data-lucide="linkedin"></i></a></li>
<li><a aria-label="GitHub" className="hover:text-[var(--accent)] text-orange-400" href="https://github.com"><i className="w-5 h-5" data-lucide="github"></i></a></li>
</ul>
</nav>

<div className="px-8 pt-10 pb-14">
<h1 className="font-instrument-serif text-7xl leading-none tracking-tight text-[var(--accent)]">Shannon Lockett</h1>
<h2 className="font-instrument-serif text-3xl mt-4 tracking-tight text-orange-200/80">
      Retail Leader • Web Designer/Developer • AI Enthusiast
    </h2>

<section className="mt-10 space-y-8">
<article className="border-l-4 border-[var(--accent)] pl-6" style={{animation: 'fadeUp .8s ease-out .3s both'}}>
<header className="flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[var(--accent)]" data-lucide="sparkles"></i>
<h3 className="font-instrument-serif text-2xl tracking-tight">Welcome to my new Portfolio</h3>
</header>
<p>Implemented a brand-new animation pipeline which boosts performance by <span className="text-[var(--accent)]">28 %</span>.</p>
</article>
<article className="border-l-4 border-[var(--accent)] pl-6" style={{animation: 'fadeUp .8s ease-out .45s both'}}>
<header className="flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[var(--accent)]" data-lucide="user-check"></i>
<h3 className="font-instrument-serif text-2xl tracking-tight">Accessibility Pass</h3>
</header>
<p>Achieved full WCAG AA compliance; navigation contrast now exceeds 5:1.</p>
</article>
<article className="border-l-4 border-[var(--accent)] pl-6" style={{animation: 'fadeUp .8s ease-out .6s both'}}>
<header className="flex items-center gap-2 mb-1">
<i className="w-5 h-5 text-[var(--accent)]" data-lucide="trend-up"></i>
<h3 className="font-instrument-serif text-2xl tracking-tight">Traffic Milestone</h3>
</header>
<p>Crossed the <span className="text-[var(--accent)]">50 K</span> monthly visits mark; see last 7 days below.</p>
</article>
</section>

<div className="mt-12 p-6 rounded-lg bg-orange-900/60" style={{animation: 'fadeUp .8s ease-out .75s both'}}>
<h3 className="font-instrument-serif text-2xl tracking-tight text-[var(--accent)] mb-4">Daily Visits • Last 7 Days</h3>
<div><canvas height="140" id="visitsChart"></canvas></div>
</div>
</div>
</header>

<section className="max-w-3xl mx-auto px-8 mt-24" id="about" style={{animation: 'fadeUp .9s ease-out .1s both'}}>
<h2 className="font-instrument-serif text-4xl tracking-tight text-[var(--accent)] mb-6">About Me</h2>
<p className="mb-4">
    I’m a multi-disciplinary leader who bridges in-store retail strategy with cutting-edge
    web experiences. My passion lies in crafting performant, inclusive, and creatively vibrant digital products
    that resonate with real-world audiences.
  </p>
<p>
    Away from the keyboard you’ll find me exploring generative art, mentoring young professionals, and sneaking
    AI workflows into everyday life.
  </p>
</section>

<section className="max-w-3xl mx-auto px-8 mt-24" id="work" style={{animation: 'fadeUp .9s ease-out .15s both'}}>
<h2 className="font-instrument-serif text-4xl tracking-tight text-[var(--accent)] mb-8">Selected Work</h2>
<div className="grid md:grid-cols-2 gap-8">

<article className="group border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-colors duration-300">
<img alt="" className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6">
<h3 className="font-instrument-serif text-2xl tracking-tight mb-2 text-orange-100">E-Commerce Replatform</h3>
<p>Led a migration to a headless commerce stack, slashing load time by 42 % and increasing AOV 18 %.</p>
</div>
</article>

<article className="group border border-[var(--border)] rounded-lg overflow-hidden hover:border-[var(--accent)] transition-colors duration-300">
<img alt="" className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-6">
<h3 className="font-instrument-serif text-2xl tracking-tight mb-2 text-orange-100">Interactive Store Kiosk</h3>
<p>Designed a React/Three.js info-kiosk that increased customer engagement by 3× in pilot stores.</p>
</div>
</article>
</div>
</section>

<section className="max-w-3xl mx-auto px-8 mt-24" id="blog" style={{animation: 'fadeUp .9s ease-out .2s both'}}>
<h2 className="font-instrument-serif text-4xl tracking-tight text-[var(--accent)] mb-8">Latest Writing</h2>
<div className="space-y-10">
<article className="flex gap-6">
<img alt="" className="w-32 h-32 object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<h3 className="font-instrument-serif text-2xl tracking-tight mb-1 text-orange-100">Demystifying Core Web Vitals 2024</h3>
<p className="text-sm mb-2 text-orange-400">May 2 • 7 min read</p>
<p>How to groom Lighthouse scores without sacrificing design flair—my pragmatic approach.</p>
</div>
</article>
<article className="flex gap-6">
<img alt="" className="w-32 h-32 object-cover rounded-md" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<h3 className="font-instrument-serif text-2xl tracking-tight mb-1 text-orange-100">AI Ops: Automating the Boring Stuff</h3>
<p className="text-sm mb-2 text-orange-400">Apr 14 • 5 min read</p>
<p>From cron jobs to GPT-4-powered customer replies—my toolbox and tips.</p>
</div>
</article>
</div>
</section>

<section className="max-w-3xl mx-auto px-8 mt-24 mb-32" id="contact" style={{animation: 'fadeUp .9s ease-out .25s both'}}>
<h2 className="font-instrument-serif text-4xl tracking-tight text-[var(--accent)] mb-8">Get in Touch</h2>
<form aria-label="Contact form" className="grid gap-6">
<div className="grid md:grid-cols-2 gap-6">
<label className="flex flex-col gap-2">
<span className="sr-only">Name</span>
<input className="px-4 py-3 rounded-md bg-[var(--card)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" placeholder="Name" required="" type="text"/>
</label>
<label className="flex flex-col gap-2">
<span className="sr-only">Email</span>
<input className="px-4 py-3 rounded-md bg-[var(--card)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" placeholder="Email" required="" type="email"/>
</label>
</div>
<label className="flex flex-col gap-2">
<span className="sr-only">Message</span>
<textarea className="px-4 py-3 rounded-md bg-[var(--card)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] resize-none" placeholder="Message" required="" rows="5"></textarea>
</label>
<button className="justify-self-start px-6 py-3 bg-[var(--accent)] font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300 text-orange-900 hover:bg-amber-400" type="submit">
      Send Message
    </button>
</form>
</section>

<footer className="border-t border-[var(--border)] py-8 text-center">
<p className="mb-4">© <span id="year"></span> Shannon Lockett. All rights reserved.</p>
<div className="flex justify-center gap-6">
<a aria-label="Twitter" className="hover:text-[var(--accent)] text-orange-400" href="https://twitter.com"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a aria-label="LinkedIn" className="hover:text-[var(--accent)] text-orange-400" href="https://linkedin.com"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a aria-label="GitHub" className="hover:text-[var(--accent)] text-orange-400" href="https://github.com"><i className="w-5 h-5" data-lucide="github"></i></a>
</div>
</footer>



    </>
  );
}
