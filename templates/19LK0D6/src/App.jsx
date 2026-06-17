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
      
    // Replace icons
    lucide.createIcons();

    // Fade-in animation on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('opacity-100','translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold:.2});
    document.querySelectorAll('.animate-fade-in, .animate-fade-in-delay').forEach(el=>{
      el.classList.add('opacity-0','translate-y-4','transition','duration-700');
      observer.observe(el);
    });

    // Chart.js
    const ctx = document.getElementById('stressChart').getContext('2d');
    new Chart(ctx,{
      type:'line',
      data:{
        labels:['Week 0','Week 1','Week 2','Week 3','Week 4','Week 5','Week 6'],
        datasets:[{
          label:'Stress Level (1-10)',
          data:[8.2,6.9,6.1,5.0,4.3,3.7,3.1],
          borderColor:'#10b981',
          backgroundColor:'rgba(16,185,129,.1)',
          tension:.4,
          fill:true,
          pointRadius:3
        }]
      },
      options:{
        responsive:true,
        scales:{
          y:{beginAtZero:false,suggestedMin:0,suggestedMax:10,grid:{color:'#f1f5f9'}},
          x:{grid:{display:false}}
        },
        plugins:{
          legend:{display:false}
        }
      }
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      

<header className="fixed inset-x-0 top-0 bg-white/80 backdrop-blur z-30 border-b border-slate-100">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<h1 className="text-lg font-semibold tracking-tight">Susan Antunes</h1>
<nav className="hidden md:flex gap-8 text-sm">
<a className="hover:text-emerald-600 transition" href="#services">Services</a>
<a className="hover:text-emerald-600 transition" href="#benefits">Benefits</a>
<a className="hover:text-emerald-600 transition" href="#results">Results</a>
<a className="hover:text-emerald-600 transition" href="#contact">Contact</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 transition focus:outline-none" href="https://wa.me/1234567890?text=I%20want%20to%20book%20a%20massage" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
        WhatsApp
      </a>
</div>
</header>

<section className="pt-32 pb-24 relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="max-w-3xl mx-auto text-center px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 animate-fade-in">
        Reconnect with Your Body
      </h2>
<p className="text-lg md:text-xl mb-8 text-slate-600 animate-fade-in-delay" style={{animationDelay: '.15s'}}>
        Personalized therapeutic massages that relieve pain, restore mobility and calm the mind.
      </p>
<div className="flex justify-center gap-4 animate-fade-in-delay" style={{animationDelay: '.3s'}}>
<a className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow hover:bg-emerald-700 transition" href="#services">
          Explore Services
        </a>
<a className="rounded-md border border-slate-300 px-6 py-3 text-sm font-medium hover:border-emerald-600 hover:text-emerald-600 transition" href="https://wa.me/1234567890?text=I%20need%20help%20choosing%20the%20right%20massage" target="_blank">
          Talk to Susan
        </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="services">
<h3 className="text-3xl font-semibold tracking-tight mb-12 text-center">Services</h3>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Swedish Massage</h4>
<p className="text-sm text-slate-600 flex-grow">Gentle, long strokes to promote overall relaxation and circulation.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Swedish%20Massage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Deep Tissue Massage</h4>
<p className="text-sm text-slate-600 flex-grow">Targets deeper muscle layers to release chronic tension and knots.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Deep%20Tissue%20Massage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Hot Stone Massage</h4>
<p className="text-sm text-slate-600 flex-grow">Warm stones melt away tension and improve blood flow.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Hot%20Stone%20Massage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Sports Massage</h4>
<p className="text-sm text-slate-600 flex-grow">Enhances performance, reduces soreness, and accelerates recovery for athletes.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Sports%20Massage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Prenatal Massage</h4>
<p className="text-sm text-slate-600 flex-grow">Safe, soothing support for expecting mothers, relieving back pain and swelling.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Prenatal%20Massage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Reflexology</h4>
<p className="text-sm text-slate-600 flex-grow">Focused pressure on feet and hands to stimulate organ and nerve health.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Reflexology" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Aromatherapy Massage</h4>
<p className="text-sm text-slate-600 flex-grow">Essential oils enhance relaxation, mood, and immune response.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Aromatherapy%20Massage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Trigger-Point Therapy</h4>
<p className="text-sm text-slate-600 flex-grow">Pinpoint pressure breaks up stubborn knots and restores range of motion.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Trigger%20Point%20Therapy" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Lymphatic Drainage</h4>
<p className="text-sm text-slate-600 flex-grow">Gentle technique enhances immune function and reduces swelling.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Lymphatic%20Drainage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>

<div className="group rounded-lg border border-slate-100 overflow-hidden shadow-sm transition hover:shadow-md">
<img alt="" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-6 flex flex-col gap-4">
<h4 className="font-medium text-lg">Chair Massage (15-min)</h4>
<p className="text-sm text-slate-600 flex-grow">Quick tension relief for office or events, no oils required.</p>
<a className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium hover:underline" href="https://wa.me/1234567890?text=I%20want%20Chair%20Massage" target="_blank">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            I want this one
          </a>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20" id="benefits">
<div className="max-w-5xl mx-auto px-6">
<h3 className="text-3xl font-semibold tracking-tight mb-12 text-center">Why it Works</h3>
<div className="grid gap-10 md:grid-cols-2">
<div className="flex gap-6">
<i className="w-8 h-8 text-emerald-600" data-lucide="heart-handshake"></i>
<div>
<h5 className="font-medium mb-1">Personalized Approach</h5>
<p className="text-sm text-slate-600">Every session starts with a quick assessment so techniques match your unique needs.</p>
</div>
</div>
<div className="flex gap-6">
<i className="w-8 h-8 text-emerald-600" data-lucide="activity"></i>
<div>
<h5 className="font-medium mb-1">Pain Relief &amp; Mobility</h5>
<p className="text-sm text-slate-600">Targeted work frees joints and muscles from chronic tension, increasing range-of-motion.</p>
</div>
</div>
<div className="flex gap-6">
<i className="w-8 h-8 text-emerald-600" data-lucide="brain-circuit"></i>
<div>
<h5 className="font-medium mb-1">Stress Reduction</h5>
<p className="text-sm text-slate-600">Gentle stimulation of the parasympathetic nervous system lowers cortisol and heart rate.</p>
</div>
</div>
<div className="flex gap-6">
<i className="w-8 h-8 text-emerald-600" data-lucide="leaf"></i>
<div>
<h5 className="font-medium mb-1">Holistic Well-Being</h5>
<p className="text-sm text-slate-600">Combining breathwork, aromatherapy and bodywork to align body and mind.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-20" id="results">
<div className="text-center mb-12">
<h3 className="text-3xl font-semibold tracking-tight">Measured Results</h3>
<p className="text-slate-600 text-sm mt-2">Average stress levels reported by 50 clients over 6 weekly sessions.</p>
</div>
<div className="w-full max-w-md mx-auto">
<div>
<canvas height="300" id="stressChart" width="400"></canvas>
</div>
</div>
</section>

<section className="py-24 bg-emerald-600 text-white" id="contact">
<div className="max-w-3xl mx-auto text-center px-6">
<h3 className="text-3xl font-semibold tracking-tight mb-6">Ready to feel better?</h3>
<p className="mb-8">Reach out now—Susan will personally help you choose the perfect massage or schedule your first session.</p>
<a className="inline-flex items-center gap-3 bg-white text-emerald-700 font-medium px-7 py-3 rounded-md shadow hover:bg-slate-50 transition" href="https://wa.me/1234567890?text=I%20want%20to%20make%20a%20call%20for%20massage" target="_blank">
<i className="w-5 h-5" data-lucide="phone"></i>
        Book via WhatsApp
      </a>
</div>
</section>

<footer className="py-10 text-center text-xs text-slate-500">
    © <span id="year"></span> Susan Antunes · All Rights Reserved
  </footer>



    </>
  );
}
