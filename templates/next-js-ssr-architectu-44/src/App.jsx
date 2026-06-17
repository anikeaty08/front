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
      

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
<nav className="glass-nav border border-gray-200/60 rounded-full pl-5 pr-2 py-2 flex items-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
<a className="group flex items-center gap-2 text-sm text-gray-800 hover:text-black transition-colors" href="#">
<div className="bg-black text-white p-1 rounded-md">
<iconify-icon height="16" icon="solar:code-square-linear" width="16"></iconify-icon>
</div>
<span className="font-montserrat font-semibold tracking-tight">Next.js Arch</span>
</a>
<div className="h-4 w-px bg-gray-200"></div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 font-montserrat">
<a className="hover:text-black transition-colors" href="#architecture">Architecture</a>
<a className="hover:text-black transition-colors" href="#performance">Performance</a>
<a className="hover:text-black transition-colors flex items-center gap-1" href="#blog">
            Blog
            <span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-[10px] font-bold">SSR</span>
</a>
</div>
<div className="h-4 w-px bg-gray-200 hidden md:block"></div>
<a className="group bg-black text-white text-xs px-4 py-2.5 rounded-full hover:bg-gray-800 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 font-montserrat font-medium shadow-lg shadow-black/10" href="#repo">
<iconify-icon height="16" icon="solar:github-linear" width="16"></iconify-icon>
          View Source
        </a>
</nav>
</div>

<main className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">

<div className="bg-white rounded-[2.5rem] p-8 md:p-14 lg:p-20 shadow-sm border border-gray-100 relative overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">

<div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-mono mb-8 hover:bg-white hover:shadow-sm transition-all cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            NEXT.JS APP ROUTER • SSR ENABLED
          </div>

<h1 className="animate-fade-up delay-200 text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight mb-8 text-gray-900 font-medium">
            Server-Side <br/>
<span className="italic text-gray-400 font-serif">Perfected.</span>
</h1>

<p className="animate-fade-up delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 font-montserrat font-medium">
            A production-grade Next.js architecture demonstrating <span className="text-gray-900 font-semibold">Server-Side Rendering</span>, <span className="text-gray-900 font-semibold">Dynamic Metadata</span>, and <span className="text-gray-900 font-semibold">Core Web Vitals</span> optimization.
          </p>

<div className="animate-fade-up delay-500 flex flex-wrap justify-center gap-4 w-full">
<button className="bg-gray-900 text-white pl-6 pr-5 py-3.5 rounded-xl text-sm hover:bg-black hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium shadow-xl shadow-gray-900/20">
              Run Performance Audit
              <iconify-icon height="18" icon="solar:bolt-linear" width="18"></iconify-icon>
</button>
<button className="bg-white border border-gray-200 text-gray-600 px-6 py-3.5 rounded-xl text-sm hover:border-gray-400 hover:text-gray-900 transition-all duration-300 font-montserrat font-medium flex items-center gap-2">
<iconify-icon height="18" icon="solar:document-text-linear" width="18"></iconify-icon>
              Read Documentation
            </button>
</div>

<div className="mt-16 w-full max-w-3xl animate-fade-up delay-500">
<div className="rounded-xl border border-gray-200 bg-[#111] shadow-2xl overflow-hidden">
<div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#1a1a1a]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto text-[10px] text-gray-500 font-mono">app/page.tsx</div>
</div>
<div className="p-6 text-left overflow-x-auto">
<pre className="font-mono text-xs md:text-sm leading-relaxed"><code className="language-typescript"><span className="text-purple-400">import</span> { Suspense } <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>
<span className="text-purple-400">import</span> { Metrics, Hero } <span className="text-purple-400">from</span> <span className="text-green-400">'@/components'</span>

<span className="text-gray-500">// Server Component (RSC)</span>
<span className="text-purple-400">export default async function</span> <span className="text-blue-400">Page</span>() {
  <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> <span className="text-blue-400">fetchData</span>() <span className="text-gray-500">// Server-side fetch</span>

  <span className="text-purple-400">return</span> (
    <span className="text-blue-300">&lt;main&gt;</span>
      <span className="text-blue-300">&lt;Hero</span> <span className="text-orange-300">data</span>=<span className="text-blue-300">{</span>data<span className="text-blue-300">}</span> <span className="text-blue-300">/&gt;</span>
      <span className="text-blue-300">&lt;Suspense</span> <span className="text-orange-300">fallback</span>=<span className="text-blue-300">{&lt;Skeleton /&gt;}&gt;</span>
         <span className="text-blue-300">&lt;Metrics /&gt;</span> <span className="text-gray-500">// Streaming UI</span>
      <span className="text-blue-300">&lt;/Suspense&gt;</span>
    <span className="text-blue-300">&lt;/main&gt;</span>
  )
}</code></pre>
</div>
</div>
</div>
</div>
</div>

<div className="w-full py-12 mt-4 border-b border-gray-100 marquee-mask relative overflow-hidden">
<div className="flex w-[200%] animate-infinite-scroll">
<div className="flex items-center justify-around w-1/2 gap-12 px-8">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:nextjs-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">Next.js 14</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:react" width="24"></iconify-icon>
<span className="font-semibold text-lg">React Server Components</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:typescript-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">TypeScript</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:tailwindcss-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">Tailwind CSS</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:vercel-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">Vercel Edge</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="simple-icons:lighthouse" width="24"></iconify-icon>
<span className="font-semibold text-lg">Lighthouse 100</span>
</div>
</div>

<div className="flex items-center justify-around w-1/2 gap-12 px-8">
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:nextjs-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">Next.js 14</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:react" width="24"></iconify-icon>
<span className="font-semibold text-lg">React Server Components</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:typescript-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">TypeScript</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:tailwindcss-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">Tailwind CSS</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="logos:vercel-icon" width="24"></iconify-icon>
<span className="font-semibold text-lg">Vercel Edge</span>
</div>
<div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
<iconify-icon height="24" icon="simple-icons:lighthouse" width="24"></iconify-icon>
<span className="font-semibold text-lg">Lighthouse 100</span>
</div>
</div>
</div>
</div>

<div className="py-24" id="architecture">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-900" height="24" icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-montserrat">Server-Side Rendering</h3>
<p className="text-sm text-gray-500 leading-relaxed font-montserrat">
                    Pre-rendered HTML on request time using <code>getServerSideProps</code> or App Router. Eliminates layout shift and boosts SEO rankings immediately.
                </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-900" height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-montserrat">Performance First</h3>
<p className="text-sm text-gray-500 leading-relaxed font-montserrat">
                    Automatic image optimization with <code>next/image</code>, font subsetting, and route prefetching. Achieving &lt; 100ms TBT (Total Blocking Time).
                </p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-gray-900" height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 font-montserrat">Semantic SEO</h3>
<p className="text-sm text-gray-500 leading-relaxed font-montserrat">
                    Dynamic Open Graph tags generated via <code>generateMetadata</code>. Structured JSON-LD data for rich search results.
                </p>
</div>
</div>
</div>

<div className="py-16 bg-white rounded-[2.5rem] border border-gray-100 p-8 md:p-12 relative overflow-hidden" id="performance">
<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<iconify-icon height="300" icon="solar:graph-up-linear" width="300"></iconify-icon>
</div>
<div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
<div>
<h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 font-medium mb-4">Core Web Vitals</h2>
<p className="text-gray-500 font-montserrat">Live metrics from the production deployment.</p>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Audited: Just now
             </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">

<div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
<div className="relative w-20 h-20 flex items-center justify-center mb-4">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="3"></path>
</svg>
<span className="absolute text-xl font-bold font-mono">100</span>
</div>
<span className="font-montserrat font-medium text-sm text-gray-600">Performance</span>
</div>

<div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
<div className="relative w-20 h-20 flex items-center justify-center mb-4">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="3"></path>
</svg>
<span className="absolute text-xl font-bold font-mono">100</span>
</div>
<span className="font-montserrat font-medium text-sm text-gray-600">Accessibility</span>
</div>

<div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
<div className="relative w-20 h-20 flex items-center justify-center mb-4">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="3"></path>
</svg>
<span className="absolute text-xl font-bold font-mono">100</span>
</div>
<span className="font-montserrat font-medium text-sm text-gray-600">Best Practices</span>
</div>

<div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
<div className="relative w-20 h-20 flex items-center justify-center mb-4">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="100, 100" strokeWidth="3"></path>
</svg>
<span className="absolute text-xl font-bold font-mono">100</span>
</div>
<span className="font-montserrat font-medium text-sm text-gray-600">SEO</span>
</div>
</div>
</div>

<div className="py-24" id="blog">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 font-medium mb-4">Engineering Blog</h2>
<p className="text-gray-500 font-montserrat max-w-lg">Content fetched server-side from CMS. Simulating <code>/posts/[slug]</code> dynamic routing with static generation.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-semibold border-b border-gray-200 pb-1 hover:border-black transition-colors" href="#">
                View Archive
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-6">

<article className="group relative flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
<div className="w-full md:w-64 h-48 bg-gray-100 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:code-file-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-gray-100">
                        Architecture
                    </div>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex items-center gap-3 text-xs text-gray-400 font-mono mb-3">
<span>Oct 12, 2024</span>
<span>•</span>
<span>5 min read</span>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
<a className="before:absolute before:inset-0" href="#">Reducing Main Thread Work in React Apps</a>
</h3>
<p className="text-gray-500 font-montserrat text-sm leading-relaxed mb-4 line-clamp-2">
                        Strategies for offloading heavy computations to Web Workers and optimizing hydration strategies in Next.js 14 to improve TTI (Time to Interactive).
                    </p>
<div className="flex items-center gap-2">
<span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">Performance</span>
<span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">React</span>
</div>
</div>
</article>

<article className="group relative flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
<div className="w-full md:w-64 h-48 bg-gray-100 rounded-2xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:database-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-gray-100">
                        Backend
                    </div>
</div>
<div className="flex-1 flex flex-col justify-center">
<div className="flex items-center gap-3 text-xs text-gray-400 font-mono mb-3">
<span>Sep 28, 2024</span>
<span>•</span>
<span>8 min read</span>
</div>
<h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
<a className="before:absolute before:inset-0" href="#">Mastering Server Actions for Mutations</a>
</h3>
<p className="text-gray-500 font-montserrat text-sm leading-relaxed mb-4 line-clamp-2">
                        A deep dive into form handling without useEffect. How to use Server Actions to mutate data directly from components while maintaining type safety with Zod.
                    </p>
<div className="flex items-center gap-2">
<span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">Next.js</span>
<span className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border border-gray-100">TypeScript</span>
</div>
</div>
</article>
</div>
</div>

<div className="py-20 border-t border-gray-200 mt-12 text-center" id="repo">
<h2 className="text-3xl font-medium mb-6">Ready to Scale?</h2>
<p className="text-gray-500 mb-8 max-w-lg mx-auto font-montserrat">
            Check the repository for the full source code including the Tailwind configuration, ESLint setup, and Dockerfile.
         </p>
<div className="flex justify-center gap-4">
<button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:github-bold" width="20"></iconify-icon>
                 Clone Repository
             </button>
<button className="bg-white border border-gray-200 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors">
                 Deploy to Vercel
             </button>
</div>
<p className="mt-12 text-xs text-gray-400 font-mono">
            MIT License • © 2025 Engineering Portfolio
         </p>
</div>
</main>

    </>
  );
}
