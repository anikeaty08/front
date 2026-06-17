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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center text-sm tracking-tighter">NKP</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#projects">Projects</a>
<a className="hover:text-zinc-900 transition-colors" href="#blog">Blog</a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800" href="#contact">
                Contact Me
            </a>
<button className="md:hidden text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[30rem] bg-gradient-to-b from-blue-50 to-transparent blur-3xl opacity-60 -z-10 rounded-full"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 max-w-4xl mx-auto leading-[1.1]">
                I Build Websites That Convert Visitors Into Customers
            </h1>
<p className="mt-6 text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                Full Stack Web Developer specializing in modern design &amp; SEO. Helping businesses grow with high-converting digital experiences.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-11 inline-flex items-center justify-center rounded-md bg-zinc-900 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-zinc-800 gap-2" href="#projects">
                    View My Work
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-11 inline-flex items-center justify-center rounded-md bg-white border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 hover:text-zinc-900 shadow-sm" href="#contact">
                    Hire Me
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="aspect-[2/1] rounded-2xl bg-zinc-50 border border-zinc-100 shadow-sm overflow-hidden flex items-center justify-center relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="flex items-center justify-center gap-4 text-zinc-300 relative z-10">
<iconify-icon className="text-5xl" icon="solar:code-square-linear"></iconify-icon>
<iconify-icon className="text-7xl text-zinc-200" icon="solar:monitor-smartphone-linear"></iconify-icon>
<iconify-icon className="text-5xl" icon="solar:rocket-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">About Me</h2>
<p className="text-base text-zinc-500 leading-relaxed mb-6">
                Hi, I'm Niloy. I don't just write code; I solve business problems. With a deep understanding of both development and user psychology, I craft digital experiences designed to engage and convert. 
            </p>
<p className="text-base text-zinc-500 leading-relaxed">
                Whether you need a blazing-fast marketing site or a scalable e-commerce platform, my focus remains constant: delivering measurable results through clean code, intuitive design, and strategic SEO optimization. Let's build something exceptional together.
            </p>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">My Services</h2>
<p className="text-base text-zinc-500 max-w-xl">Comprehensive digital solutions focused on aesthetics, performance, and revenue growth.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">Website Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Modern, user-friendly designs that capture your brand's essence and engage your audience.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:server-square-update-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">WordPress Dev</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Fast, scalable, and easy-to-manage WordPress websites tailored to your specific needs.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">Landing Pages</h3>
<p className="text-sm text-zinc-500 leading-relaxed">High-converting landing pages optimized to turn ad clicks into actual customers.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-transform hover:-translate-y-1 duration-300">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-3">SEO Optimization</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Rank higher on Google with technical and on-page SEO strategies that drive organic traffic.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Technical Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100 text-center">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:code-linear"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-zinc-900 mb-3">Core Web</h4>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">HTML5</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">CSS3</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">JavaScript</span>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100 text-center">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:box-minimalistic-linear"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-zinc-900 mb-3">CMS &amp; Builders</h4>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">WordPress</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">Elementor</span>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100 text-center">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:target-linear"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-zinc-900 mb-3">Search Engine</h4>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">On-page SEO</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">Technical SEO</span>
</div>
</div>

<div className="p-6 rounded-xl bg-zinc-50 border border-zinc-100 text-center">
<iconify-icon className="text-3xl text-zinc-400 mb-4" icon="solar:bolt-linear"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-zinc-900 mb-3">Performance</h4>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">Speed Optimization</span>
<span className="px-3 py-1 bg-white border border-zinc-200 rounded-md text-xs text-zinc-600 font-medium shadow-sm">Core Web Vitals</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Selected Work</h2>
<p className="text-base text-zinc-500 max-w-xl">A showcase of websites designed to drive engagement and deliver measurable results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl bg-zinc-100 border border-zinc-200 mb-6 overflow-hidden relative flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-zinc-300">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 opacity-50"></div>
<iconify-icon className="text-5xl text-zinc-300 relative z-10 transition-transform duration-300 group-hover:scale-110" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">E-commerce</span>
<span className="text-xs text-zinc-400 font-medium">2026</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mt-3 mb-2 group-hover:text-blue-600 transition-colors">Fashion E-commerce Platform</h3>
<p className="text-sm text-zinc-500 line-clamp-2">A clean, high-performance online store with an intuitive UI designed to significantly improve conversion rates.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl bg-zinc-100 border border-zinc-200 mb-6 overflow-hidden relative flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-zinc-300">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-blue-50 opacity-50"></div>
<iconify-icon className="text-5xl text-zinc-300 relative z-10 transition-transform duration-300 group-hover:scale-110" icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Marketing</span>
<span className="text-xs text-zinc-400 font-medium">2025</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mt-3 mb-2 group-hover:text-indigo-600 transition-colors">SaaS Landing Page</h3>
<p className="text-sm text-zinc-500 line-clamp-2">A modern, high-converting landing page built for a software startup, featuring dynamic scroll animations.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl bg-zinc-100 border border-zinc-200 mb-6 overflow-hidden relative flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:border-zinc-300">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 opacity-50"></div>
<iconify-icon className="text-5xl text-zinc-300 relative z-10 transition-transform duration-300 group-hover:scale-110" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-600 bg-zinc-100 px-2 py-1 rounded">Portfolio</span>
<span className="text-xs text-zinc-400 font-medium">2025</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mt-3 mb-2 group-hover:text-zinc-600 transition-colors">Agency Portfolio Website</h3>
<p className="text-sm text-zinc-500 line-clamp-2">A minimal and premium portfolio designed for a creative agency to showcase their projects effortlessly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-16 text-center">Client Success</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">"Niloy completely transformed our online presence. The new website is not only beautiful but our lead conversion rate has doubled since launch. Highly recommend his expertise."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium text-sm border border-zinc-200">SD</div>
<div>
<p className="text-sm font-semibold tracking-tight text-zinc-900">Sarah Davis</p>
<p className="text-xs text-zinc-500">Marketing Director</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">"The SEO strategy implemented alongside our website rebuild worked wonders. We are now ranking on the first page for our main keywords, and organic traffic is up by 150%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium text-sm border border-zinc-200">MR</div>
<div>
<p className="text-sm font-semibold tracking-tight text-zinc-900">Mark Roberts</p>
<p className="text-xs text-zinc-500">E-commerce Founder</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-100 shadow-sm">
<div className="flex gap-1 text-zinc-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">"Fast, professional, and incredibly detail-oriented. Niloy delivered the project ahead of schedule and the code quality was impeccable. It was a seamless experience from start to finish."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-medium text-sm border border-zinc-200">EL</div>
<div>
<p className="text-sm font-semibold tracking-tight text-zinc-900">Emma Lewis</p>
<p className="text-xs text-zinc-500">Agency Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Latest Insights</h2>
<p className="text-base text-zinc-500 max-w-xl">Thoughts, tips, and strategies on web development, design, and growth.</p>
</div>
<a className="text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors inline-flex items-center gap-1" href="#">
                    View all posts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group">
<div className="aspect-video rounded-xl bg-zinc-50 border border-zinc-100 mb-5 overflow-hidden flex items-center justify-center relative transition-colors group-hover:bg-zinc-100">
<iconify-icon className="text-4xl text-zinc-300 relative z-10" icon="solar:document-text-linear"></iconify-icon>
</div>
<time className="text-xs text-zinc-400 font-medium mb-2 block">Oct 12, 2025</time>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">How to Build a High-Converting Website</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Discover the essential elements every website needs to turn casual browsers into paying customers.</p>
<a className="text-sm font-medium text-zinc-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-1" href="#">
                        Read more <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>

<article className="group">
<div className="aspect-video rounded-xl bg-zinc-50 border border-zinc-100 mb-5 overflow-hidden flex items-center justify-center relative transition-colors group-hover:bg-zinc-100">
<iconify-icon className="text-4xl text-zinc-300 relative z-10" icon="solar:magnifer-linear"></iconify-icon>
</div>
<time className="text-xs text-zinc-400 font-medium mb-2 block">Nov 05, 2025</time>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">Beginner's Guide to SEO in 2026</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">A comprehensive overview of what search engines are looking for this year and how to optimize your content.</p>
<a className="text-sm font-medium text-zinc-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-1" href="#">
                        Read more <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>

<article className="group">
<div className="aspect-video rounded-xl bg-zinc-50 border border-zinc-100 mb-5 overflow-hidden flex items-center justify-center relative transition-colors group-hover:bg-zinc-100">
<iconify-icon className="text-4xl text-zinc-300 relative z-10" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<time className="text-xs text-zinc-400 font-medium mb-2 block">Dec 18, 2025</time>
<h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors cursor-pointer">Top 5 Mistakes in Website Design</h3>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">Avoid these common design pitfalls that frustrate users and hurt your brand's credibility online.</p>
<a className="text-sm font-medium text-zinc-900 group-hover:text-blue-600 transition-colors inline-flex items-center gap-1" href="#">
                        Read more <iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-400" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Let's work together</h2>
<p className="text-base text-zinc-400 mb-10 max-w-md">Ready to elevate your online presence? Drop me a message and let's discuss how we can achieve your business goals.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-0.5">Email</p>
<a className="text-sm font-medium text-white hover:text-blue-400 transition-colors" href="mailto:niloy.dev@email.com">niloy.dev@email.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-0.5">Phone</p>
<a className="text-sm font-medium text-white hover:text-blue-400 transition-colors" href="tel:+880123456789">+880 123 456 789</a>
</div>
</div>
</div>
<div className="mt-12">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Social Profiles</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white hover:bg-zinc-700 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-800">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm font-medium text-zinc-300" htmlFor="name">Name</label>
<input className="w-full h-11 px-4 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-zinc-300" htmlFor="email">Email</label>
<input className="w-full h-11 px-4 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-zinc-300" htmlFor="subject">Subject</label>
<input className="w-full h-11 px-4 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm" id="subject" placeholder="Project Inquiry" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-zinc-300" htmlFor="message">Message</label>
<textarea className="w-full p-4 rounded-lg bg-zinc-900/50 border border-zinc-700 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all text-sm resize-none" id="message" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full h-11 inline-flex items-center justify-center rounded-lg bg-white px-6 text-sm font-medium text-zinc-900 shadow transition-colors hover:bg-zinc-100 mt-2" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-lg bg-white text-zinc-900 flex items-center justify-center text-sm tracking-tighter">NKP</span>
</a>
<div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
</div>
<p className="text-xs text-zinc-600">
                © 2026 Niloy Kumar Pal. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
