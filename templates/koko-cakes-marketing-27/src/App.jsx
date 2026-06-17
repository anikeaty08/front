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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-16 pl-6">
<div className="flex flex-col md:flex-row md:items-end gap-8 mb-16 gap-x-8 gap-y-8 items-start justify-between">
<div className="">
<div className="uppercase tracking-[0.2em] font-medium text-xs text-brand mb-4 flex items-center gap-2">
<span className="w-8 h-px bg-brand"></span> Client Proposal
                </div>
<h1 className="text-3xl tracking-tight font-semibold uppercase">KOKO CAKES</h1>
</div>
<div className="md:text-right">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1">Prepared by</p>
<p className="text-lg tracking-tight font-medium uppercase">HOLA MUNDO</p>
</div>
</div>
<div className="border-b border-neutral-200 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div className="">
<h2 className="text-5xl font-semibold text-neutral-900 tracking-tight mb-6">Monthly Content Plan</h2>
<div className="flex flex-wrap gap-6 text-sm text-neutral-500">
<div className="flex items-center gap-2 bg-neutral-50 px-4 py-2 rounded-full border border-neutral-100">
<iconify-icon className="text-lg text-brand" icon="solar:calendar-linear"></iconify-icon>
<span className="font-medium">Early March → Early April</span>
</div>
<div className="flex items-center gap-2 bg-neutral-50 px-4 py-2 rounded-full border border-neutral-100">
<iconify-icon className="text-lg text-brand" icon="solar:document-text-linear"></iconify-icon>
<span className="font-medium">04-03-2026</span>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-16 border-b border-neutral-200">
<div className="lg:col-span-2 flex items-center">
<p className="text-2xl text-neutral-600 leading-relaxed font-light tracking-tight">
                "This proposal outlines a structured monthly content plan designed to elevate Koko Cakes’ Instagram presence, support Mother’s Day and Eid campaigns, and increase engagement through strategic content and competitions."
            </p>
</div>
<div className="space-y-10">
<div className="">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">Plan Summary</h3>
<div className="flex gap-4">
<div className="bg-white border border-neutral-200 p-5 rounded-2xl flex-1 shadow-sm">
<p className="text-4xl font-semibold tracking-tight text-brand">12</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wide font-medium">Total Posts</p>
</div>
<div className="bg-white border border-neutral-200 p-5 rounded-2xl flex-1 shadow-sm">
<p className="text-4xl font-semibold tracking-tight text-brand">2</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-wide font-medium">Video Reels</p>
</div>
</div>
</div>
<div className="">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">Key Focus Areas</h3>
<div className="flex flex-wrap gap-2.5">
<span className="text-xs font-medium px-4 py-2 bg-brand-soft border border-brand-soft text-brand rounded-full">Mother’s Day</span>
<span className="text-xs font-medium px-4 py-2 bg-brand-soft border border-brand-soft text-brand rounded-full">Eid</span>
<span className="text-xs font-medium px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-full">New Items</span>
<span className="text-xs font-medium px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-full">Premium Direction</span>
<span className="text-xs font-medium px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-full">Competition</span>
<span className="text-xs font-medium px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-full">Cake of the Week</span>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24">
<div className="mb-16">
<h2 className="text-4xl tracking-tight font-semibold mb-3">Content Plan</h2>
<p className="text-lg text-neutral-500 font-light">Visual direction and structural concepts for the 12 planned posts.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Elegant cake decorated with flowers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">01</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Mother’s Day Announcement</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Introduce the Mother’s Day cake collection.</p>
</div>
<div className="">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Elegant cake decorated with flowers.</p>
</div>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Caption</h4>
<p className="text-sm text-neutral-800 font-medium text-right" dir="rtl">"لأن الأم تستحق أكثر من كلمة شكراً… كعكة خاصة لها 💐"</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Start building demand early.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Luxury cake close-up" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">02</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Mother’s Day Product Close-Up</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Show one hero cake.</p>
</div>
<div className="">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Luxury cake close-up highlighting textures and premium finish.</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Product seduction and desire.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Luxury cake and pastry packaging presentation" className="cursor-pointer w-full h-full object-cover" onclick="window.location.href='https://www.freepik.com/premium-ai-image/delicious-chocolate-cake-with-fresh-cherries-gift-box-wooden-table-special-occasion-celebration_417276482.htm#fromView=search&amp;page=1&amp;position=24&amp;uuid=b17124a7-89c5-4e66-aa08-45bf48b2c024&amp;query=cake+gift+box'" role="button" src="https://images.unsplash.com/photo-1559622214-f8a9850965bb?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" height="12" icon="solar:camera-linear" style={{color: 'rgb(236, 157, 193)'}} width="12"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">03</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Mother’s Day Gift Box</h3>
<div className="space-y-5 flex-1">
<div className="">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Cake gift box with elegant topper.</p>
</div>
<div className="">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Luxury packaging presentation, soft lighting.</p>
</div>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Caption</h4>
<p className="text-sm text-neutral-800 font-medium text-right" dir="rtl">"هدية بسيطة… لكنها تصنع لحظة لا تُنسى."</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Push gifting orders.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-brand-soft flex items-center justify-center">
<img alt="Competition Graphics" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:pen-linear"></iconify-icon> Graphic Post
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">04</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Competition Announcement</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">"Surprise Someone" Instagram competition.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Mechanics</h4>
<ul className="text-sm text-neutral-700 leading-relaxed list-disc list-inside marker:text-brand">
<li>Follow account</li>
<li>Tag someone</li>
<li>Share in story</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Prize</h4>
<p className="text-sm text-neutral-700 leading-relaxed font-medium">Free premium cake</p>
</div>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Rapid reach and engagement.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Premium product photography" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">05</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Cake of the Week #1</h3>
<div className="space-y-5 flex-1">
<div className="">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Highlight a hero cake flavour.</p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Premium product photography, clean background.</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Weekly sales focus.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Partial dessert reveal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">06</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">New Item Teaser</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Tease a new dessert item.</p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Partial reveal, dramatic shadows.</p>
</div>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Caption</h4>
<p className="text-sm text-neutral-800 font-medium text-right" dir="rtl">"شيء جديد قادم… هل تخمنون؟"</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Curiosity and comments.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Chef decorating cake" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">07</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Behind the Scenes</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Chef decorating cake.</p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Natural bakery moment, warm lighting.</p>
</div>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Caption</h4>
<p className="text-sm text-neutral-800 font-medium text-right" dir="rtl">"كل كعكة تبدأ بفكرة… وتنتهي بابتسامة."</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Humanise the brand.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Cake slice reveal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">08</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Cake of the Week #2</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Second hero cake focus.</p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Cake slice reveal showing internal textures/layers.</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Sales push.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Elegant Eid-themed pistachio cake" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">09</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Eid Preview</h3>
<div className="space-y-5 flex-1">
<div className="">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Eid cake collection preview.</p>
</div>
<div className="">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Elegant Eid-themed cake setting.</p>
</div>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Caption</h4>
<p className="text-sm text-neutral-800 font-medium text-right" dir="rtl">"استعدوا لعيد بطعم مختلف."</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Build anticipation.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-100">
<img alt="Customer joyfully celebrating with a cake" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:camera-linear"></iconify-icon> Photo
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">10</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Customer Moment</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Customer celebrating with Koko cake.</p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Visual Direction</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Lifestyle celebration moment, authentic joy.</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Show real usage and community.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-900">
<img alt="Chocolate pouring" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1605807646983-377bc5a76493?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:video-frame-linear"></iconify-icon> Reel (15s)
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">11</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Chocolate Cake ASMR</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Slow motion chocolate pouring over cake.</p>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Scenes</h4>
<ul className="text-sm text-neutral-700 leading-relaxed list-disc list-inside marker:text-brand">
<li>Cake close-up</li>
<li>Chocolate pour</li>
<li>Slice cut &amp; plating</li>
</ul>
</div>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Overlay Text</h4>
<p className="text-sm text-neutral-800 font-medium text-right" dir="rtl">"لحظة تذوب فيها الشوكولاتة."</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Save and share.</p>
</div>
</div>
</article>

<article className="bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-col shadow-sm group">
<div className="relative h-72 overflow-hidden bg-neutral-900">
<img alt="Couple interaction" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
<iconify-icon className="text-2xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm text-xs font-medium px-3.5 py-1.5 rounded-full text-neutral-800 flex items-center gap-1.5 border border-white/20 shadow-sm">
<iconify-icon className="text-brand" icon="solar:video-frame-linear"></iconify-icon> Reel (15s)
                    </div>
<div className="absolute top-5 right-5 w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-medium text-sm shadow-lg">12</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl tracking-tight font-semibold mb-6 text-neutral-900">Relatable Bakery Moment</h3>
<div className="space-y-5 flex-1">
<div>
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-1.5">Concept</h4>
<p className="text-sm text-neutral-700 leading-relaxed">Husband choosing the wrong cake flavour.</p>
</div>
<div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100">
<h4 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Script &amp; Text</h4>
<p className="text-sm text-neutral-800 font-medium text-right mb-2" dir="rtl">Wife: "جبت الكيكة؟"</p>
<p className="text-sm text-neutral-600 text-right italic" dir="rtl">(Husband shows wrong cake)</p>
<p className="text-sm text-neutral-800 font-medium text-right mt-2" dir="rtl">Text: "لما تنسى تسألها شنو تحب…"</p>
</div>
</div>
<div className="mt-8 pt-5 border-t border-neutral-100 flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center shrink-0">
<iconify-icon className="text-brand text-sm" icon="solar:target-linear"></iconify-icon>
</div>
<p className="text-sm text-neutral-600"><span className="font-medium text-neutral-900">Goal:</span> Reach and relatability.</p>
</div>
</div>
</article>
</div>
</section>

<section className="border-t border-neutral-200 bg-[#fafafa] py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl tracking-tight font-semibold mb-2">Weekly Schedule</h2>
<p className="text-neutral-500 font-light">Content distribution overview.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
<div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand font-semibold mb-6">W1</div>
<ul className="space-y-4">
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Mother’s Day launch</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Cake of the Week</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Competition</span>
</li>
</ul>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
<div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand font-semibold mb-6">W2</div>
<ul className="space-y-4">
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>New item teaser</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Behind the scenes</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Funny Reel</span>
</li>
</ul>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
<div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand font-semibold mb-6">W3</div>
<ul className="space-y-4">
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Eid preview</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Customer moment</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>ASMR Reel</span>
</li>
</ul>
</div>

<div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
<div className="w-10 h-10 rounded-full bg-brand-soft flex items-center justify-center text-brand font-semibold mb-6">W4</div>
<ul className="space-y-4">
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Cake of the week</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Winner announcement</span>
</li>
<li className="text-sm text-neutral-700 flex items-start gap-3">
<iconify-icon className="text-brand mt-0.5 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Product reminder</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-neutral-200">
<div className="max-w-2xl">
<h2 className="text-3xl tracking-tight font-semibold mb-8">Next Steps</h2>
<div className="space-y-4">
<div className="flex items-center gap-5 p-5 border border-neutral-200 rounded-2xl bg-white shadow-sm hover:border-brand-soft transition-colors">
<div className="w-12 h-12 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-neutral-800 font-medium">Client approves content directions and captions.</p>
</div>
<div className="flex items-center gap-5 p-5 border border-neutral-200 rounded-2xl bg-white shadow-sm hover:border-brand-soft transition-colors">
<div className="w-12 h-12 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<p className="text-neutral-800 font-medium">Hola Mundo prepares final creative brief and shot list.</p>
</div>
<div className="flex items-center gap-5 p-5 border border-neutral-200 rounded-2xl bg-white shadow-sm hover:border-brand-soft transition-colors">
<div className="w-12 h-12 rounded-full bg-brand-soft text-brand flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:clapperboard-play-linear"></iconify-icon>
</div>
<p className="text-neutral-800 font-medium">Production and scheduling begins immediately after approval.</p>
</div>
</div>
</div>
</section>

    </>
  );
}
