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
      
        // Initialize Lucide icons
        lucide.createIcons();

        // Chart initialization
        const ctx = document.getElementById('sustainabilityChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    data: [20, 35, 25, 45, 30, 50],
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1.5,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { display: false },
                    y: { display: false }
                },
                elements: { point: { radius: 0 } }
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
      

<div className="fixed inset-0 z-0">
<div className="absolute inset-0 bg-gray-400" style={{backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`, backgroundSize: `cover`, backgroundPosition: `center`}}></div>
<div className="absolute inset-x-0 bottom-0 h-64 gradient-overlay"></div>
<div className="absolute inset-y-0 left-0 w-4/5 side-gradient"></div>
</div>

<nav className="relative z-50 animate-fade-in pt-8 pr-8 pl-8">
<div className="max-w-7xl mx-auto">
<div className="glass-effect bg-white/5 border-white/10 border rounded-[30px] pt-6 pr-12 pb-6 pl-12">
<div className="flex items-center justify-between relative"><iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-none" frameborder="0" id="asset-iframe-1755766744768" loading="lazy" src="https://cdn.prod.website-files.com/6735308632b4cf02011413d2/67409d0eb03bcd27f67bc943_White%20Logo%20without%20BG.svg"></iframe>

<div className="flex items-center space-x-4">
</div>

<div className="flex items-center space-x-12">
<a className="text-white font-medium hover:text-white/80 transition-colors font-geist-mono" href="#">Home</a>
<a className="text-white/50 font-medium hover:text-white transition-colors font-geist-mono" href="#">Services</a>
<a className="text-white/50 font-medium hover:text-white transition-colors font-geist-mono" href="#">Gateways</a>
<a className="text-white/50 font-medium hover:text-white transition-colors font-geist-mono" href="#">Contact Us</a>
<div className="w-4 h-4 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>
</nav>

<main className="relative z-10 pr-8 pl-8">
<div className="max-w-7xl mx-auto">

<div className="pt-16 pb-24">

<h1 className="xl:text-8xl leading-tight animate-fade-in-delay-1 text-7xl font-semibold text-white tracking-tight font-geist-mono mb-16" style={{lineHeight: `1.2`}}>
                    Innovating the Future of Business
                </h1>

<div className="flex items-start space-x-12 mb-16 animate-fade-in-delay-2">
<div className="w-px h-24 bg-white mt-2"></div>
<p className="text-white/70 text-lg font-light leading-relaxed max-w-xl font-geist-mono">
                        With a sleek and modern aesthetic, your landing page resonates with ambition and professionalism, emphasizing innovation as the cornerstone of success.
                    </p>
</div>

<div className="flex items-center space-x-16 animate-fade-in-delay-3">

<button className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-normal text-lg transition-colors font-geist-mono">
                        Request More Info
                    </button>

<div className="flex items-center space-x-8">
<div className="flex -space-x-4">
<div className="w-12 h-12 bg-gray-400 rounded-full border-2 border-green-800" style={{backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face')`, backgroundSize: `cover`}}></div>
<div className="w-12 h-12 bg-gray-400 rounded-full border-2 border-green-800" style={{backgroundImage: `url('https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face')`, backgroundSize: `cover`}}></div>
<div className="w-12 h-12 bg-gray-400 rounded-full border-2 border-green-800" style={{backgroundImage: `url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face')`, backgroundSize: `cover`}}></div>
<div className="w-12 h-12 bg-gray-400 rounded-full border-2 border-green-800" style={{backgroundImage: `url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face')`, backgroundSize: `cover`}}></div>
</div>
<div>
<div className="text-white text-3xl tracking-tight font-geist-mono font-semibold">12+</div>
<div className="text-white/60 text-base font-geist-mono">Client Satisfaction</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto pb-24">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 glass-effect bg-white/5 border border-white/10 rounded-[30px] p-12 animate-fade-in-delay-4">
<div className="grid grid-cols-2 gap-16">
<div className="">
<div className="text-5xl text-white mb-4 tracking-tight font-geist-mono font-semibold">85%</div>
<div className="text-white/70 font-light font-geist-mono">Driving Digital Success</div>
</div>
<div className="">
<div className="text-5xl text-white mb-4 tracking-tight font-geist-mono font-semibold">23%</div>
<div className="text-white/70 font-light font-geist-mono">Empowering Growth</div>
</div>
</div>
</div>

<div className="glass-effect bg-white/5 border border-white/10 rounded-[30px] p-8 text-center animate-fade-in-delay-5">
<div className="text-5xl text-white mb-4 tracking-tight font-geist-mono font-semibold">10+</div>
<div className="text-white/70 font-light leading-relaxed font-geist-mono">Through Innovation</div>
</div>
</div>

<div className="mt-8 animate-fade-in-delay-4">
<div className="glass-effect bg-white/5 border border-white/10 rounded-[30px] p-8 max-w-sm">
<div className="text-white/70 font-light mb-4 font-geist-mono">• Sustainable</div>
<div className="" style={{height: `100px`}}>
<canvas className="" height="200" id="sustainabilityChart" style={{display: `block`, boxSizing: `border-box`, height: `100px`, width: `318px`}} width="636"></canvas>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
