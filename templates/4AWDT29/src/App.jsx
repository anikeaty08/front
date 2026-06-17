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
      

<header className="relative z-30">
<nav className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between reveal">
<a className="text-2xl font-semibold tracking-tight flex items-center gap-1" href="#">
<span className="text-indigo-600">L</span><span>oop</span><span className="text-pink-500">w</span><span>ork</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-indigo-600 transition" href="#features">Features</a>
<a className="hover:text-indigo-600 transition" href="#pricing">Pricing</a>
<a className="hover:text-indigo-600 transition" href="#testimonials">Testimonials</a>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-50 transition">Log in</button>
<button className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl transition">Get started</button>
</div>
</nav>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<svg className="absolute -top-16 -left-16 w-[40rem] opacity-30" fill="none" viewbox="0 0 200 200">
<circle cx="100" cy="100" fill="url(#grad1)" r="100"></circle>
<defs>
<lineargradient id="grad1" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#c7d2fe"></stop>
<stop offset="100%" stop-color="#fbcfe8"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

<div className="reveal">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6">
          Collaborate.<br/>Create.<br/><span className="text-indigo-600">Stay in loop.</span>
</h1>
<p className="mb-10 text-lg text-gray-600 max-w-lg">
          Loopwork combines Kanban, shared moodboards, and instant audio huddles—so your creative team can ideate and ship without context-switching.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg shadow-lg transition">Try for free</button>
<button className="px-6 py-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition">Book a demo</button>
</div>
</div>

<div className="relative reveal">
<div className="border border-gray-200 rounded-3xl shadow-2xl overflow-hidden bg-white">

<div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-sm text-gray-500">Loopwork Dashboard</div>
<div></div>
</div>

<div className="flex items-center gap-6 px-6 py-3 border-b border-gray-200 text-sm">
<button className="font-medium text-indigo-600">Kanban</button>
<button className="text-gray-500 hover:text-gray-700 transition">Moodboard</button>
<button className="text-gray-500 hover:text-gray-700 transition">Audio</button>
</div>

<div className="grid grid-cols-3 gap-4 px-6 py-6 bg-gray-50">

<div>
<h3 className="text-sm font-medium mb-3">To-do</h3>
<div className="space-y-3">
<div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 text-xs">Define color palette</div>
<div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 text-xs">Wireframe landing</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium mb-3">In progress</h3>
<div className="space-y-3">
<div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 text-xs flex items-center justify-between">
                  Build hero section
                  <span className="text-[10px] py-0.5 px-1.5 bg-indigo-100 text-indigo-600 rounded">Dev</span>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium mb-3">Done</h3>
<div className="space-y-3">
<div className="bg-white border border-gray-200 shadow-sm rounded-lg p-3 text-xs line-through">User research</div>
</div>
</div>
</div>

<div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between bg-white">
<div className="flex -space-x-2">
<img alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=facearea&amp;facepad=3&amp;w=64&amp;h=64&amp;q=80"/>
<img alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=3&amp;w=64&amp;h=64&amp;q=80"/>
<img alt="avatar" className="w-6 h-6 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=facearea&amp;facepad=3&amp;w=64&amp;h=64&amp;q=80"/>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
<i className="w-4 h-4 text-gray-600" data-lucide="mic"></i>
</button>
<button className="w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-500 flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="phone"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-28" id="features">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything your team needs</h2>
<p className="text-gray-600 max-w-2xl mx-auto">
        A unified workspace designed for fluid collaboration—stay focused on what matters.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-12 reveal">

<div className="flex flex-col items-start">
<div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-indigo-50">
<i className="w-6 h-6 text-indigo-600" data-lucide="layout-kanban"></i>
</div>
<h3 className="text-lg font-medium mb-2">Visual Kanban</h3>
<p className="text-sm text-gray-600">Drag-and-drop boards keep work transparent and momentum high.</p>
</div>
<div className="flex flex-col items-start">
<div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-pink-50">
<i className="w-6 h-6 text-pink-500" data-lucide="image"></i>
</div>
<h3 className="text-lg font-medium mb-2">Shared Moodboards</h3>
<p className="text-sm text-gray-600">Spark inspiration with real-time collaborative canvases.</p>
</div>
<div className="flex flex-col items-start">
<div className="mb-4 w-10 h-10 flex items-center justify-center rounded-lg bg-emerald-50">
<i className="w-6 h-6 text-emerald-600" data-lucide="headphones"></i>
</div>
<h3 className="text-lg font-medium mb-2">Instant Audio Huddles</h3>
<p className="text-sm text-gray-600">Jump into quick conversations without leaving your flow.</p>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-4xl mx-auto px-6 lg:px-0 reveal">
<h2 className="text-center text-3xl font-semibold tracking-tight mb-6">See your progress over time</h2>
<p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Loopwork gives you clear insights into velocity, focus and workload so you can iterate confidently.
      </p>
<div className="rounded-2xl border border-gray-200 bg-white shadow-lg p-8">
<div>
<canvas height="110" id="productivityChart"></canvas>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-28" id="testimonials">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Loved by creatives worldwide</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 reveal">

<figure className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
<blockquote className="text-gray-700 mb-6">
          “Loopwork keeps our design, content and dev teams perfectly in sync. We can’t imagine working without it.”
        </blockquote>
<figcaption className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=facearea&amp;facepad=3&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<div className="text-sm font-medium">Ava Williams</div>
<div className="text-xs text-gray-500">Product Designer</div>
</div>
</figcaption>
</figure>
<figure className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
<blockquote className="text-gray-700 mb-6">
          “The moodboard feature is game-changing—it’s like our inspiration lives right next to the work itself.”
        </blockquote>
<figcaption className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=facearea&amp;facepad=3&amp;w=64&amp;h=64&amp;q=80"/>
<div>
<div className="text-sm font-medium">Marcus Woods</div>
<div className="text-xs text-gray-500">Creative Director</div>
</div>
</figcaption>
</figure>
<figure className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
<blockquote className="text-gray-700 mb-6">
          “Audio huddles let us resolve blockers in minutes. So simple yet so powerful.”
        </blockquote>
<figcaption className="flex items-center gap-3">
<img alt="avatar" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium">Sofia Lee</div>
<div className="text-xs text-gray-500">Engineering Lead</div>
</div>
</figcaption>
</figure>
</div>
</section>

<section className="py-24 bg-gray-50" id="pricing">
<div className="max-w-5xl mx-auto px-6 lg:px-0 text-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Simple pricing</h2>
<p className="text-gray-600 mb-16">Start free, scale with your team. No credit card required.</p>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-gray-200 bg-white rounded-2xl shadow-lg p-10 flex flex-col">
<h3 className="text-lg font-medium mb-2">Starter</h3>
<p className="text-3xl font-semibold mb-6">$0<span className="text-base font-normal">/mo</span></p>
<ul className="text-sm text-gray-600 space-y-3 flex-1">
<li>Up to 3 projects</li>
<li>Kanban boards</li>
<li>Basic moodboards</li>
<li>Limited audio huddles</li>
</ul>
<button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition">Get started</button>
</div>

<div className="border-2 border-indigo-600 bg-white rounded-2xl shadow-xl p-10 flex flex-col">
<h3 className="text-lg font-medium mb-2">Pro</h3>
<p className="text-3xl font-semibold mb-6">$12</p></div></div></div></section>
    </>
  );
}
