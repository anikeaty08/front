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
      
    // Lucide icons
    lucide.createIcons({attrs: {strokeWidth: 1.5}});

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach((el, i) => {
      observer.observe(el);
      el.style.animationDelay = `${i * 80}ms`;
    });

    // Wave animation
    const canvas = document.getElementById('waveCanvas');
    const ctx = canvas.getContext('2d');
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function drawWave(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 2;
      const lines = 50;
      for (let j = 0; j < lines; j++) {
        ctx.beginPath();
        const offset = j * 4;
        for (let x = 0; x <= canvas.width; x += 8) {
          const y = canvas.height / 2 + Math.sin(x * 0.01 + time / 1000 + j * 0.3) * 30 + offset - lines * 2;
          ctx.lineTo(x, y);
        }
        const alpha = 0.15 - j * 0.002;
        ctx.strokeStyle = `rgba(99,102,241,${alpha})`; // indigo hue
        ctx.stroke();
      }
      requestAnimationFrame(drawWave);
    }
    requestAnimationFrame(drawWave);

    // Chart.js metric
    const ctxChart = document.getElementById('velocityChart').getContext('2d');
    new Chart(ctxChart, {
      type: 'line',
      data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
          data: [3, 5, 4, 6, 7, 9, 8, 11],
          borderColor: '#6366f1',
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false }
        }
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
      

<canvas className="fixed inset-0 -z-10" height="709" id="waveCanvas" width="963"></canvas>

<header className="w-full">
<nav className="mx-auto flex items-center justify-between px-6 lg:px-10 py-6 max-w-7xl">
<div className="text-xl font-semibold tracking-tight font-geist">NOVA</div>
<ul className="hidden md:flex space-x-10 text-sm">
<li className=""><a className="transition-colors hover:text-neutral-700 font-geist" href="#services">Services</a></li>
<li className=""><a className="transition-colors hover:text-neutral-700 font-geist" href="#work">Work</a></li>
<li><a className="transition-colors hover:text-neutral-700 font-geist" href="#about">About</a></li>
<li><a className="transition-colors hover:text-neutral-700 font-geist" href="#contact">Contact</a></li>
</ul>
<button className="md:hidden p-2 rounded-md hover:bg-neutral-200">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</nav>
</header>

<section className="min-h-[90vh] flex flex-col text-center pr-6 pl-6 items-center justify-center">
<h1 className="reveal sm:text-6xl lg:text-7xl max-w-4xl shown text-4xl font-semibold tracking-tight font-space-grotesk mb-6" style={{animationDelay: `0ms`}}>
      We Craft Digital <span className="text-indigo-600 font-space-grotesk font-semibold">Experiences</span> that Inspire
    </h1>
<p className="reveal max-w-xl mb-10 shown text-neutral-600 font-geist" style={{animationDelay: `80ms`}}>
      Forward-thinking design & development agency turning bold ideas into polished products.
    </p>
<div className="reveal flex space-x-4 shown" style={{animationDelay: `160ms`}}>
<a className="transition-colors hover:bg-indigo-400 text-sm font-medium text-[#ffffff] font-geist bg-indigo-500 rounded-md pt-3 pr-6 pb-3 pl-6" href="#contact">
        Start a Project
      </a><a className="hover:border-neutral-500 text-sm font-medium font-geist border-neutral-300 border rounded-md pt-3 pr-6 pb-3 pl-6" href="#work">
        View Portfolio
      </a>
</div>
</section>

<section className="relative py-24" id="services">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="reveal shown text-3xl font-bold tracking-tight font-space-grotesk mb-12" style={{animationDelay: `240ms`}}>Core Services</h2>
<div className="reveal grid gap-10 md:grid-cols-2 lg:grid-cols-3 shown" style={{animationDelay: `320ms`}}>

<div className="group p-8 border rounded-xl hover:border-indigo-500 transition-colors shadow-lg bg-neutral-100 border-neutral-200 hover:shadow-indigo-400/40" style={{backdropFilter: `saturate(180%) blur(12px)`}}>
<svg className="lucide lucide-code w-10 h-10 mb-6 stroke-[1.5] group-hover:text-indigo-400 transition-colors" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<h3 className="text-xl font-semibold mb-3 tracking-tight text-neutral-900 font-geist">Web Development</h3>
<p className="text-base leading-relaxed text-neutral-600 font-geist">
    High-performance, accessible, and maintainable web applications built to scale.
  </p>
</div>
<div className="group p-8 border rounded-lg hover:border-indigo-500 transition-colors bg-neutral-100 border-neutral-200">
<svg className="lucide lucide-pen-tool w-8 h-8 mb-6 stroke-[1.5] group-hover:text-indigo-400" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<h3 className="text-xl font-medium mb-2 font-geist">UI / UX Design</h3>
<p className="text-sm text-neutral-600 font-geist">
            User-centric visual language and seamless interactions that resonate.
          </p>
</div>
<div className="group p-8 border rounded-lg hover:border-indigo-500 transition-colors bg-neutral-100 border-neutral-200">
<svg className="lucide lucide-smartphone w-8 h-8 mb-6 stroke-[1.5] group-hover:text-indigo-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<h3 className="text-xl font-medium mb-2 font-geist">Mobile Apps</h3>
<p className="text-sm text-neutral-600 font-geist">
            Native & cross-platform solutions delivering consistent performance on any device.
          </p>
</div>
<div className="group p-8 border rounded-lg hover:border-indigo-500 transition-colors bg-neutral-100 border-neutral-200">
<svg className="lucide lucide-bar-chart-3 w-8 h-8 mb-6 stroke-[1.5] group-hover:text-indigo-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<h3 className="text-xl font-medium mb-2 font-geist">Data Visualization</h3>
<p className="text-sm text-neutral-600 font-geist">
            Transform complex data into compelling, interactive stories and dashboards.
          </p>
</div>
<div className="group hover:border-indigo-500 transition-colors bg-neutral-100 border-neutral-200 border rounded-lg pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-shield w-8 h-8 mb-6 stroke-[1.5] group-hover:text-indigo-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<h3 className="text-xl font-medium mb-2 font-geist">Cyber Security</h3>
<p className="text-sm text-neutral-600 font-geist">
            Robust protection strategies ensuring resilience against digital threats.
          </p>
</div>
<div className="group p-8 border rounded-lg hover:border-indigo-500 transition-colors bg-neutral-100 border-neutral-200">
<svg className="lucide lucide-zap w-8 h-8 mb-6 stroke-[1.5] group-hover:text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="text-xl font-medium mb-2 font-geist">Automation</h3>
<p className="text-sm text-neutral-600 font-geist">
            Streamline processes and unlock productivity through smart automation.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 backdrop-blur bg-neutral-100/30">
<div className="max-w-4xl mx-auto px-6">
<h2 className="reveal text-3xl tracking-tight mb-10 font-space-grotesk font-semibold shown" style={{animationDelay: `400ms`}}>Impact in Numbers</h2>
<div className="reveal border rounded-lg p-8 bg-neutral-100 border-neutral-200 shown" style={{animationDelay: `480ms`}}>
<div className="grid md:grid-cols-2 gap-10">
<div className="">
<p className="text-sm mb-4 text-neutral-600 font-geist">Launch Velocity (Projects / Quarter)</p>

<div className="">
<canvas className="" height="544" id="velocityChart" style={{display: `block`, boxSizing: `border-box`, height: `272px`, width: `370px`}} width="740"></canvas>
</div>
</div>
<div className="flex flex-col justify-center space-y-6">
<div>
<span className="text-4xl font-space-grotesk font-semibold">+120%</span>
<p className="text-sm text-neutral-600 font-geist">Avg. client conversion increase</p>
</div>
<div>
<span className="text-4xl font-space-grotesk font-semibold">98%</span>
<p className="text-sm text-neutral-600 font-geist">On-time project delivery</p>
</div>
<div>
<span className="text-4xl font-space-grotesk font-semibold">4.9/5</span>
<p className="text-sm text-neutral-600 font-geist">Client satisfaction score</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="work">
<div className="max-w-6xl mx-auto px-6">
<h2 className="reveal text-3xl tracking-tight mb-12 font-space-grotesk font-semibold shown" style={{animationDelay: `560ms`}}>Selected Work</h2>
<div className="reveal grid gap-6 md:grid-cols-2 lg:grid-cols-3 shown" style={{animationDelay: `640ms`}}>
<div className="group relative overflow-hidden rounded-lg border border-neutral-200">
<img alt="" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end bg-neutral-50/60">
<p className="p-4 text-base font-geist">Metaverse Landing Page</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg border border-neutral-200">
<img alt="" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end bg-neutral-50/60">
<p className="p-4 text-base font-geist">Finance Dashboard</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg border border-neutral-200">
<img alt="" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end bg-neutral-50/60">
<p className="p-4 text-base font-geist">Wellness Mobile App</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg border border-neutral-200">
<img alt="" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end bg-neutral-50/60">
<p className="p-4 text-base font-geist">Analytics Platform</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg border border-neutral-200">
<img alt="" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end bg-neutral-50/60">
<p className="p-4 text-base font-geist">Brand Website</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-lg border border-neutral-200">
<img alt="" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end bg-neutral-50/60">
<p className="p-4 text-base font-geist">Interactive Installation</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 backdrop-blur bg-neutral-100/30" id="about">
<div className="max-w-4xl mx-auto px-6">
<h2 className="reveal text-3xl tracking-tight mb-10 font-space-grotesk font-semibold shown" style={{animationDelay: `720ms`}}>Who We Are</h2>
<div className="reveal space-y-6 shown" style={{animationDelay: `800ms`}}>
<p className="text-neutral-600 font-geist">
          Nova is a distributed team of designers, engineers, and strategists obsessed with building next-gen digital products. We merge imaginative storytelling with robust technology to spark meaningful connections between brands and their audiences.
        </p>
<p className="text-neutral-600 font-geist">
          From startups to Fortune 500s, our work propels innovation, elevates experiences, and drives measurable growth.
        </p>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="reveal text-3xl tracking-tight mb-6 font-space-grotesk font-semibold" style={{animationDelay: `880ms`}}>Let’s Build Something Remarkable</h2>
<p className="reveal mb-10 text-neutral-600 font-geist" style={{animationDelay: `960ms`}}>
        Share your vision and we’ll help shape it into reality. Reach out for a quote, collaboration, or just a friendly chat.
      </p>
<form className="reveal border rounded-lg p-8 space-y-6 bg-neutral-100 border-neutral-200" style={{animationDelay: `1040ms`}}>
<div className="grid md:grid-cols-2 gap-6">
<input className="w-full border focus:border-indigo-500 p-3 rounded-md text-sm placeholder-neutral-500 bg-neutral-200/50 border-neutral-300" data-ddg-inputtype="identities.fullName" placeholder="Name" required type="text" />
<input className="w-full border focus:border-indigo-500 p-3 rounded-md text-sm placeholder-neutral-500 bg-neutral-200/50 border-neutral-300" data-ddg-autofill="true" data-ddg-inputtype="identities.emailAddress" placeholder="Email" required style={{backgroundSize: `auto 24px !important`, backgroundPosition: `right center !important`, backgroundRepeat: `no-repeat !important`, backgroundOrigin: `content-box !important`, backgroundImage: `url("chrome-extension://bkdgflcldnnnapblkhphbgpggdiikppg/img/logo-small.svg") !important`, transition: `background !important`}} type="email" />
</div>
<textarea className="w-full border focus:border-indigo-500 p-3 rounded-md text-sm placeholder-neutral-500 resize-none bg-neutral-200/50 border-neutral-300" placeholder="Project details" rows="5"></textarea>
<button className="w-full py-3 bg-indigo-500 transition-colors rounded-md text-sm font-medium hover:bg-indigo-400 font-geist">
          Send Message
        </button>
</form>
</div>
</section>

<footer className="border-t py-10 text-center text-sm text-neutral-500 border-neutral-200 font-geist">
    © <span className="font-geist" id="year">2025</span> Nova — All rights reserved.
  </footer>



    </>
  );
}
