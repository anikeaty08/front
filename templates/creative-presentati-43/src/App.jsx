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



        lucide.createIcons();
    
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
      

<section className="slide-container">
<div className="absolute top-0 left-0 w-full h-2 bg-lime-500"></div>
<div className="flex-1 flex bg-grid-subtle">

<div className="w-32 border-r border-neutral-100 flex flex-col justify-between items-center py-12 bg-white z-10">
<div className="h-8 w-8 bg-lime-500 rounded-full"></div>
<div className="flex-1 flex items-center justify-center">
<span className="vertical-text text-neutral-300 font-mono tracking-widest text-sm uppercase">Visual Strategy Deck</span>
</div>
<span className="text-neutral-900 font-mono font-medium">01</span>
</div>

<div className="flex-1 flex flex-col justify-center px-32 relative">
<div className="absolute top-12 right-12">
<i className="w-12 h-12 text-neutral-200" data-lucide="aperture"></i>
</div>
<span className="inline-block py-1 px-3 border border-lime-500/30 text-lime-600 rounded-full text-xs font-semibold tracking-wider uppercase w-max mb-8 bg-lime-50">
                    Confidential
                </span>
<h1 className="text-[140px] leading-[0.9] font-semibold tracking-tighter text-neutral-900 mb-12">
                    Visual<br/>
<span className="text-neutral-300">Strategy</span><br/>
                    2025.
                </h1>
<div className="flex gap-24 border-t border-neutral-100 pt-12 mt-12">
<div>
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Subject</p>
<p className="text-xl font-medium">Commercial Photography &amp;<br/>Brand Identity Evolution</p>
</div>
<div>
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Presenter</p>
<p className="text-xl font-medium">Creative Team</p>
</div>
<div>
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Date</p>
<p className="text-xl font-medium">October 2024</p>
</div>
</div>
</div>

<div className="w-64 bg-neutral-50 border-l border-neutral-100 relative overflow-hidden">
<div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-lime-400 rounded-full blur-[80px] opacity-20"></div>
</div>
</div>
</section>

<section className="slide-container">
<div className="flex h-full">

<div className="w-20 bg-neutral-900 text-white flex flex-col items-center justify-between py-10">
<i className="w-6 h-6 text-lime-400" data-lucide="layers"></i>
<span className="font-mono text-sm opacity-50">02</span>
</div>
<div className="flex-1 flex flex-col p-16">
<div className="flex justify-between items-end mb-12">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 bg-lime-500 rounded-full"></div>
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Project 01</span>
</div>
<h2 className="text-6xl font-medium tracking-tight text-neutral-900">2025 Spring Sale <span className="text-neutral-300 font-light ml-4">2025 春促</span></h2>
</div>
<div className="text-right">
<span className="text-xs font-mono text-neutral-400 bg-neutral-100 px-2 py-1 rounded">11 ASSETS</span>
</div>
</div>

<div className="flex-1 grid grid-cols-6 grid-rows-2 gap-4">

<div className="col-span-2 row-span-2 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="h-32 grid grid-cols-3 gap-4 mt-4">
<div className="bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-neutral-100 rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1507114845806-0347f6150324?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="slide-container bg-neutral-50">
<div className="flex h-full">
<div className="w-1/2 p-24 flex flex-col justify-center relative">
<div className="absolute top-12 left-12 text-neutral-300">
<i className="w-24 h-24 opacity-20" data-lucide="quote"></i>
</div>
<div className="relative z-10">
<span className="px-3 py-1 bg-lime-100 text-lime-700 text-xs font-bold uppercase rounded-full tracking-wide mb-8 inline-block">Feedback</span>
<h2 className="text-6xl font-medium tracking-tighter leading-tight mb-12">
<span className="text-neutral-400">“</span>
                        赵玥老师搭得太好看了<br/>
<span className="text-neutral-400 line-through decoration-lime-500 decoration-4">sorry</span>
<span className="text-neutral-400">”</span>
</h2>
<div className="pl-8 border-l-4 border-lime-500">
<p className="text-4xl text-neutral-800 font-light italic">
                            这是服装广告吗？
                        </p>
<p className="mt-4 text-neutral-500 text-lg">Product vs. Styling Ambiguity</p>
</div>
</div>
</div>
<div className="w-1/2 bg-white p-4 grid grid-rows-3 gap-4">
<div className="row-span-2 rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-mono backdrop-blur">Look 01</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1485230946086-1d99d52571eb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
<span className="w-2 h-2 bg-neutral-300 rounded-full"></span>
<span className="w-2 h-2 bg-neutral-900 rounded-full"></span>
<span className="w-2 h-2 bg-neutral-300 rounded-full"></span>
<span className="text-xs text-neutral-400 ml-4">03 / 09</span>
</div>
</div>
</section>

<section className="slide-container bg-neutral-900 text-white">
<div className="h-2 w-full bg-gradient-to-r from-lime-500 to-lime-800"></div>
<div className="flex-1 flex p-20 gap-20 items-center">

<div className="w-5/12 space-y-12 opacity-50 hover:opacity-100 transition-opacity duration-500">
<div className="border-b border-neutral-700 pb-8">
<h3 className="text-lime-500 text-sm font-bold uppercase tracking-widest mb-4">Phase 1: Early Stage</h3>
<h2 className="text-5xl font-medium mb-6">仅仅是为了好看</h2>
<p className="text-xl text-neutral-400 leading-relaxed">
<i className="inline w-5 h-5 mr-2 -mt-1 text-red-400" data-lucide="x-circle"></i>
                        目标单一，缺乏商业深度。
                    </p>
</div>
<div>
<h4 className="text-2xl font-medium mb-4">Result 结果</h4>
<p className="text-lg text-neutral-400 font-light">
                        图片的传播效果有限，<br/>
                        产品被稀释为相片的一部分，<br/>
<span className="text-white border-b border-neutral-600">主次关系模糊。</span>
</p>
</div>
</div>

<div className="h-64 w-px bg-neutral-800 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 p-2 border border-neutral-700 rounded-full">
<i className="text-lime-500" data-lucide="arrow-right"></i>
</div>
</div>

<div className="w-6/12 space-y-10">
<div>
<h3 className="text-lime-500 text-sm font-bold uppercase tracking-widest mb-4">Phase 2: Expected Goal</h3>
<h2 className="text-5xl font-medium mb-8 leading-tight">
<span className="text-white">美观</span> + <span className="text-white">信息</span> + <span className="text-lime-400">产品展现</span><br/>
<span className="text-3xl text-neutral-400 font-light">达到完美的均衡</span>
</h2>
</div>
<div className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 backdrop-blur-sm">
<h4 className="text-2xl font-medium mb-6 flex items-center gap-3">
<i className="text-lime-400" data-lucide="refresh-cw"></i>
                        思维转变
                    </h4>
<p className="text-xl leading-relaxed text-neutral-300 font-light mb-8">
                        从“拍一张好照片”变成 <span className="text-white font-medium border-b-2 border-lime-500">“定制一个视觉方案”</span>。<br/>
                        商业摄影的核心是“功能展示的视觉化”。
                    </p>
<div className="grid grid-cols-3 gap-6 text-sm text-neutral-400">
<div className="flex flex-col gap-2">
<i className="text-neutral-500" data-lucide="ear"></i>
<span>佩戴角度</span>
</div>
<div className="flex flex-col gap-2">
<i className="text-neutral-500" data-lucide="activity"></i>
<span>人体工学曲线</span>
</div>
<div className="flex flex-col gap-2">
<i className="text-neutral-500" data-lucide="bike"></i>
<span>专业运动紧密性</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 right-12 text-neutral-600 font-mono text-sm">04</div>
</section>

<section className="slide-container">
<div className="flex-1 flex flex-col p-20 relative bg-grid-subtle">
<div className="flex justify-between items-start mb-16">
<div className="max-w-2xl">
<span className="text-lime-600 font-mono text-sm tracking-widest uppercase mb-4 block">Concept Integration</span>
<h2 className="text-7xl font-semibold tracking-tighter text-neutral-900 mb-6">产品展现 <span className="text-neutral-300">x</span> 场景氛围</h2>
<p className="text-2xl text-neutral-500 font-light">目标：清晰的产品（工业设计）及其使用场景。</p>
</div>
<div className="w-16 h-16 border border-neutral-200 rounded-full flex items-center justify-center">
<span className="font-mono text-neutral-400">05</span>
</div>
</div>
<div className="flex-1 grid grid-cols-3 gap-8">

<div className="group relative h-full bg-white shadow-lg rounded-xl overflow-hidden border border-neutral-100">
<img className="w-full h-3/4 object-cover" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<h4 className="text-lg font-medium mb-1">Industrial Design</h4>
<p className="text-neutral-400 text-sm">Clear structure &amp; texture details.</p>
</div>
<div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-4 h-4 text-neutral-900" data-lucide="maximize-2"></i>
</div>
</div>

<div className="group relative h-full bg-white shadow-lg rounded-xl overflow-hidden border border-neutral-100 mt-12">
<img className="w-full h-3/4 object-cover" src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<h4 className="text-lg font-medium mb-1">Context Usage</h4>
<p className="text-neutral-400 text-sm">Real-world environment integration.</p>
</div>
</div>

<div className="group relative h-full bg-white shadow-lg rounded-xl overflow-hidden border border-neutral-100">
<img className="w-full h-3/4 object-cover" src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<h4 className="text-lg font-medium mb-1">Atmosphere</h4>
<p className="text-neutral-400 text-sm">Mood setting without distraction.</p>
</div>
</div>
</div>
</div>
</section>

<section className="slide-container bg-neutral-950 text-white">
<div className="flex h-full">
<div className="w-1/3 p-20 flex flex-col justify-center border-r border-neutral-800 z-10 bg-neutral-950">
<div className="mb-auto">
<span className="text-lime-400 text-xs font-bold uppercase tracking-widest border border-lime-900 bg-lime-900/20 px-2 py-1 rounded">Target Audience</span>
</div>
<h2 className="text-7xl font-semibold tracking-tighter mb-8">
                    用户社群感
                </h2>
<p className="text-2xl text-neutral-400 font-light leading-relaxed mb-12">
                    在图片中添加目标用户的社群感，<br/>
<span className="text-white font-normal border-b border-lime-500">增强身份认同</span>。
                </p>
<div className="flex gap-4">
<div className="px-6 py-3 bg-neutral-900 rounded-lg border border-neutral-800 flex items-center gap-3">
<i className="text-lime-500" data-lucide="users"></i>
<span className="text-sm font-medium">Belonging</span>
</div>
<div className="px-6 py-3 bg-neutral-900 rounded-lg border border-neutral-800 flex items-center gap-3">
<i className="text-lime-500" data-lucide="heart"></i>
<span className="text-sm font-medium">Identity</span>
</div>
</div>
<div className="mt-auto text-neutral-700 font-mono">06</div>
</div>
<div className="w-2/3 relative">

<div className="absolute top-0 left-0 w-full h-1/2 overflow-hidden border-b border-neutral-800">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-700" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<span className="bg-black/50 backdrop-blur px-3 py-1 text-sm font-mono border border-white/20 rounded">Gym Community</span>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 overflow-hidden bg-neutral-900">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-700" src="https://images.unsplash.com/photo-1552674605-4694559e5bc7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6">
<span className="bg-black/50 backdrop-blur px-3 py-1 text-sm font-mono border border-white/20 rounded">Runners Club</span>
</div>
</div>
</div>
</div>
</section>

<section className="slide-container">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full relative group overflow-hidden border-r border-white">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-sm">
<span className="text-white text-lg font-medium tracking-widest uppercase">Lifestyle</span>
</div>
</div>
<div className="w-1/2 h-full relative group overflow-hidden">
<img className="w-full h-full object-cover transform group-hover:scale-105 transition duration-1000" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-sm">
<span className="text-white text-lg font-medium tracking-widest uppercase">Performance</span>
</div>
</div>
</div>
<div className="absolute bottom-10 w-full text-center pointer-events-none">
<span className="bg-white px-4 py-2 rounded-full text-neutral-900 font-mono text-sm shadow-xl">07 — Visual Contrast</span>
</div>
</section>

<section className="slide-container bg-neutral-50 p-20 flex flex-col">
<div className="flex justify-between items-end mb-16 border-b border-neutral-200 pb-8">
<div>
<h2 className="text-7xl font-semibold tracking-tighter text-neutral-900 mb-4">商业与美感的闭环</h2>
<p className="text-2xl text-neutral-500 font-light">Expectation Phase: The Loop</p>
</div>
<div className="text-right max-w-xl">
<p className="text-lg text-neutral-600">
                    超越简单而刻意的“展示”，进入 <span className="text-lime-600 font-semibold">“品牌心智建设”</span>。<br/>
                    从推销产品到推销 <span className="italic">生活方式</span> 和 <span className="italic">身份认同</span>。
                </p>
</div>
</div>
<div className="flex-1 flex gap-4 h-full">

<div className="w-1/2 rounded-2xl overflow-hidden shadow-sm relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 px-4 py-2 rounded-lg backdrop-blur">
<span className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">Main Campaign</span>
</div>
</div>

<div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
<div className="rounded-xl overflow-hidden shadow-sm bg-white p-2">
<div className="w-full h-full rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1616423662038-f4311803320d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="rounded-xl overflow-hidden shadow-sm bg-white p-2">
<div className="w-full h-full rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="rounded-xl overflow-hidden shadow-sm bg-white p-2">
<div className="w-full h-full rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="rounded-xl overflow-hidden shadow-sm bg-white p-2 flex items-center justify-center bg-lime-50 border border-lime-100">
<div className="text-center">
<i className="w-8 h-8 mx-auto text-lime-500 mb-2" data-lucide="arrow-up-right"></i>
<span className="text-sm font-medium text-lime-700">Brand Lift</span>
</div>
</div>
</div>
</div>
<div className="absolute top-20 right-20 text-neutral-200 font-mono text-9xl -z-10 opacity-20">08</div>
</section>

<section className="slide-container bg-white flex items-center justify-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-lime-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-neutral-100 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
<div className="max-w-6xl px-12 relative z-10 text-center">
<div className="w-20 h-20 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-16 text-lime-400 shadow-xl shadow-lime-500/20">
<i className="w-10 h-10" data-lucide="lightbulb"></i>
</div>
<h1 className="text-5xl font-medium leading-relaxed tracking-tight text-neutral-800 mb-16">
                “从简单地追求图片美感，到确立一种具有 <span className="text-neutral-900 font-bold border-b-4 border-lime-400">适用性</span> 和 <span className="text-neutral-900 font-bold border-b-4 border-lime-400">复用性</span> 商业价值的产品图片，再到输出具有不可替代性的具有 <span className="text-neutral-900 font-bold">品牌调性</span>、<span className="text-neutral-900 font-bold">身份认同</span> 的视觉方案...”
            </h1>
<p className="text-2xl text-neutral-500 font-light leading-relaxed max-w-4xl mx-auto">
                这不仅仅是作为摄影师正在思考的规划，<br/>
                也是公司提高 <span className="text-neutral-900 font-medium">品牌影响力</span>、<span className="text-neutral-900 font-medium">黏性</span> 和 <span className="text-neutral-900 font-medium">品牌溢价</span> 的转变思路。
            </p>
<div className="mt-20 flex justify-center gap-12">
<div className="flex items-center gap-3 text-neutral-400 uppercase tracking-widest text-sm">
<span className="w-2 h-2 bg-lime-500 rounded-full"></span>
                    Strategy
                </div>
<div className="flex items-center gap-3 text-neutral-400 uppercase tracking-widest text-sm">
<span className="w-2 h-2 bg-neutral-900 rounded-full"></span>
                    Execution
                </div>
<div className="flex items-center gap-3 text-neutral-400 uppercase tracking-widest text-sm">
<span className="w-2 h-2 bg-lime-500 rounded-full"></span>
                    Value
                </div>
</div>
</div>
<div className="absolute bottom-12 w-full text-center">
<span className="text-neutral-300 font-mono text-sm">End of Deck 09/09</span>
</div>
</section>


    </>
  );
}
