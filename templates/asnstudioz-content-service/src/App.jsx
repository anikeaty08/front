import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#F5F7FA]/80 backdrop-blur-md border-b border-[#EAEFF3]">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-medium text-slate-900 tracking-tighter" href="#">ASN studioz</a>
<div className="hidden md:flex space-x-8 text-sm text-slate-500">
<a className="hover:text-[#8FAFC3] transition-colors" href="#work">Work</a>
<a className="hover:text-[#8FAFC3] transition-colors" href="#services">Services</a>
<a className="hover:text-[#8FAFC3] transition-colors" href="#about">About</a>
<a className="hover:text-[#8FAFC3] transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-[#8FAFC3] transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#order">
                Start Project
            </a>
<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="flex-grow pt-20">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-[#F5F7FA] to-[#DCE9F2]/30">
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-block text-xs font-medium tracking-widest uppercase text-[#8FAFC3] mb-6">Creative Agency</span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-slate-900 leading-tight mb-8">
                    Creative Editing &amp; <br className="hidden md:block"/> Design Solutions
                </h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-light">
                    Elevating brands through clean aesthetics, premium editorial design, and seamless digital experiences.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#work">
                        View Work
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-900 bg-white border border-[#EAEFF3] rounded-full hover:border-[#8FAFC3] hover:text-[#8FAFC3] transition-colors shadow-sm" href="#order">
                        Start Project
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3] hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8FAFC3] mb-6 shadow-sm">
<iconify-icon icon="solar:videocamera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Video Editing</h3>
<p className="text-sm text-slate-500 font-light">Cinematic cuts, color grading, and dynamic storytelling for modern platforms.</p>
</div>

<div className="p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3] hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8FAFC3] mb-6 shadow-sm">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Content Writing</h3>
<p className="text-sm text-slate-500 font-light">Engaging copy, editorial articles, and brand voice development.</p>
</div>

<div className="p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3] hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8FAFC3] mb-6 shadow-sm">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Graphic Design</h3>
<p className="text-sm text-slate-500 font-light">Minimalist layouts, typography selection, and visual identity systems.</p>
</div>

<div className="p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3] hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#8FAFC3] mb-6 shadow-sm">
<iconify-icon icon="solar:vector-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Logo Design</h3>
<p className="text-sm text-slate-500 font-light">Timeless marks, custom typography, and comprehensive brand guidelines.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F5F7FA]" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Selected Work</h2>
<p className="text-sm text-slate-500 max-w-md font-light">A curated collection of our recent projects, showcasing our minimal and editorial approach.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 text-xs font-medium rounded-full bg-slate-900 text-white">All</button>
<button className="px-4 py-2 text-xs font-medium rounded-full bg-white text-slate-500 border border-[#EAEFF3] hover:border-[#8FAFC3] hover:text-[#8FAFC3] transition-colors">Editing</button>
<button className="px-4 py-2 text-xs font-medium rounded-full bg-white text-slate-500 border border-[#EAEFF3] hover:border-[#8FAFC3] hover:text-[#8FAFC3] transition-colors">Graphics</button>
<button className="px-4 py-2 text-xs font-medium rounded-full bg-white text-slate-500 border border-[#EAEFF3] hover:border-[#8FAFC3] hover:text-[#8FAFC3] transition-colors">Logos</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#EAEFF3] rounded-3xl overflow-hidden mb-4 relative">
<video autoplay="" className="group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out opacity-90 w-full h-full object-cover z-10 grayscale" loop="" muted="" onclick="window.location.href='https://www.instagram.com/reel/DUrdW2_DrdG/?igsh=MWo3Zjg4OXFmeGx2'" playsinline="" role="button">
<source className="" src="https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-3286-large.mp4" type="video/mp4"/>
</video>
<div className="flex group-hover:opacity-100 transition-opacity duration-500 ease-out opacity-0 z-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex text-slate-900 bg-white/90 w-14 h-14 rounded-full shadow-sm backdrop-blur-md items-center justify-center">
<iconify-icon className="ml-1" height="24" icon="solar:play-bold" style={{color: 'rgb(15, 23, 42)'}} width="24"></iconify-icon>
</div>
</div>
</div>
<h4 className="text-base font-medium text-slate-900 tracking-tight">Trending or Customized Video</h4>
<p className="text-xs text-slate-500 mt-1">Video Editing, Direction</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#EAEFF3] rounded-3xl overflow-hidden mb-4 relative">
<img alt="Project 1" className="group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out bg-center opacity-90 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0e9a390-19c0-452e-b543-9574f5e812ad_1600w.jpg"/>
</div>
<h4 className="text-base font-medium text-slate-900 tracking-tight">Graphic Design</h4>
<p className="text-xs text-slate-500 mt-1">Graphic Design, Packaging</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#EAEFF3] rounded-3xl overflow-hidden mb-4 relative">
<img alt="Project 2" className="group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out opacity-90 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4ad6a4a-89b5-4c37-93f1-a7b372888af8_3840w.png"/>
</div>
<h4 className="text-base font-medium text-slate-900 tracking-tight">Seamless Logo</h4>
<p className="text-xs text-slate-500 mt-1">Logo Design, Branding</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] bg-[#EAEFF3] rounded-3xl overflow-hidden mb-4 relative">
<img alt="Project 3" className="group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out opacity-90 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3545ef3-1bd8-4092-a142-f330ea45dca8_1600w.webp?w=800&amp;q=80"/>
</div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Objekt Magazine</h4>
<p className="text-xs text-slate-500 mt-1">Content Writing, Editorial</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Our Expertise</h2>
<p className="text-sm text-slate-500 font-light">Comprehensive creative solutions tailored for modern brands.</p>
</div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3]">
<div className="md:w-1/3">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Brand Identity</h3>
<p className="text-sm text-slate-500 font-light mb-6">Crafting unique visual languages that resonate with your target audience and stand the test of time.</p>
<a className="text-sm font-medium text-[#8FAFC3] flex items-center gap-1 hover:text-slate-900 transition-colors" href="#order">
                                Order Now <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Logo Design &amp; Variations</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Typography Selection</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Color Palette Creation</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Comprehensive Brand Guidelines</span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3]">
<div className="md:w-1/3">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Digital Content</h3>
<p className="text-sm text-slate-500 font-light mb-6">High-end video production and editorial writing to elevate your digital presence.</p>
<a className="text-sm font-medium text-[#8FAFC3] flex items-center gap-1 hover:text-slate-900 transition-colors" href="#order">
                                Order Now <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Short-form Video Editing</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Color Grading &amp; Sound Design</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">SEO-Optimized Articles</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Social Media Copywriting</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#DCE9F2]/30" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="aspect-square bg-white rounded-[2.5rem] p-4 shadow-sm border border-[#EAEFF3]">
<div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#EAEFF3]">
<img alt="Studio Space" className="bg-center opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48c1b159-b70a-422a-97d3-9e955812b208_1600w.jpg"/>
</div>
</div>
<div className="max-w-lg">
<span className="inline-block text-xs font-medium tracking-widest uppercase text-[#8FAFC3] mb-4">About Studio</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6 leading-tight">Clarity through <br/> minimal design.</h2>
<p className="text-base text-slate-500 mb-6 font-light leading-relaxed">
                            At ASN STUDIO, we believe that true luxury lies in simplicity. We strip away the unnecessary to reveal the core essence of your brand, creating editorial-quality designs and content that speak softly but resonate deeply.
                        </p>
<p className="text-base text-slate-500 mb-8 font-light leading-relaxed">
                            Based in the digital space, we collaborate with visionary clients worldwide to build identities, produce content, and design interfaces inspired by the calm aesthetics of nature and high fashion.
                        </p>
<div className="flex gap-8">
<div>
<h4 className="text-2xl font-medium text-slate-900 tracking-tight">120+</h4>
<p className="text-xs text-slate-500 mt-1">Projects Completed</p>
</div>
<div className="">
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="inline-block text-xs font-medium tracking-widest uppercase text-[#8FAFC3] mb-4">Pricing</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Transparent packages.</h2>
<p className="text-sm text-slate-500 font-light">Choose a plan that fits your project's scope and scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3] flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Starter</h3>
<p className="text-xs text-slate-500 font-light mb-6">Essential design and editing for individuals and small brands.</p>
<div className="mb-8">
<span className="text-4xl font-medium text-slate-900 tracking-tighter">$19</span>
<span className="text-xs text-slate-500 font-light">/project</span>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">1 Video Edit (up to 3 mins)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">Basic Color Grading</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">Simple Typography Logo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">2 Revisions</span>
</li>
</ul>
<a className="w-full text-center px-6 py-3.5 text-sm font-medium text-slate-900 bg-white border border-[#EAEFF3] rounded-xl hover:border-[#8FAFC3] hover:text-[#8FAFC3] transition-colors shadow-sm" href="#order">
                            Get Started
                        </a>
</div>

<div className="p-8 rounded-3xl bg-white border border-[#8FAFC3] shadow-md flex flex-col relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="bg-[#8FAFC3] text-white text-xs font-medium px-4 py-1.5 rounded-full uppercase tracking-widest">Popular</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Professional</h3>
<p className="text-xs text-slate-500 font-light mb-6">Comprehensive creative solutions for growing businesses.</p>
<div className="mb-8">
<span className="text-4xl font-medium text-slate-900 tracking-tighter">$49</span>
<span className="text-xs text-slate-500 font-light">/project</span>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">3 Premium Video Edits</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">Advanced Sound &amp; Color</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">Full Brand Identity Package</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-light text-slate-700">5 Revisions</span>
</li>
</ul>
<a className="w-full text-center px-6 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors" href="#order">
                            Get Started
                        </a>
</div>

<div className="p-8 rounded-3xl bg-[#F5F7FA] border border-[#EAEFF3] flex flex-col">
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Retainer</h3>
<p className="text-xs text-slate-500 font-light mb-6">Ongoing creative support and dedicated studio hours.</p>
<div className="mb-8">
<span className="text-4xl font-medium text-slate-900 tracking-tighter">$99</span>
<span className="text-xs text-slate-500 font-light">/month</span>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">40 Hours Dedicated Work</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">Priority Turnaround</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-slate-700 font-light">All Studio Services Included</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#8FAFC3] mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-light text-slate-700">Unlimited Revisions</span>
</li>
</ul>
<a className="w-full text-center px-6 py-3.5 text-sm font-medium text-slate-900 bg-white border border-[#EAEFF3] rounded-xl hover:border-[#8FAFC3] hover:text-[#8FAFC3] transition-colors shadow-sm" href="#order">
                            Contact Us
                        </a>
</div>
</div>
</div>
</section>

<section className="bg-white border-[#EAEFF3] border-t pt-24 pr-6 pb-24 pl-6" id="order">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="" id="contact">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Get in touch</h2>
<p className="text-sm text-slate-500 font-light mb-10 max-w-md">Have a general inquiry or want to say hello? Send us a message or reach out on our social channels.</p>
<div className="space-y-6 mb-12">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAEFF3] flex items-center justify-center text-[#8FAFC3]">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-500">Email</p>
<p className="text-sm font-medium text-slate-900">asnstudioz.contentservice@gmail.com</p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-full bg-[#F5F7FA] border border-[#EAEFF3] flex items-center justify-center text-[#8FAFC3]">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-500">Instagram</p>
<p className="text-sm font-medium text-slate-900 cursor-pointer" onclick="window.location.href='https://www.instagram.com/asnstudioz.in?igsh=NTV6MGl5OWNubHM4'" role="button">@asnstudioz.in</p>
</div>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-[#F5F7FA] border border-[#EAEFF3] rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#8FAFC3] focus:ring-1 focus:ring-[#8FAFC3] transition-colors placeholder:text-slate-400 font-light" placeholder="Name" type="text"/>
<input className="w-full bg-[#F5F7FA] border border-[#EAEFF3] rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#8FAFC3] focus:ring-1 focus:ring-[#8FAFC3] transition-colors placeholder:text-slate-400 font-light" placeholder="Email" type="email"/>
</div>
<textarea className="w-full bg-[#F5F7FA] border border-[#EAEFF3] rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#8FAFC3] focus:ring-1 focus:ring-[#8FAFC3] transition-colors placeholder:text-slate-400 font-light resize-none" placeholder="Your message..." rows="3"></textarea>
<button className="px-6 py-3 text-sm font-medium text-slate-900 bg-white border border-[#EAEFF3] rounded-xl hover:border-[#8FAFC3] hover:text-[#8FAFC3] transition-colors shadow-sm" type="button">
                                Send Message
                            </button>
</form>
</div>

<div className="bg-[#F5F7FA] p-8 md:p-10 rounded-3xl border border-[#EAEFF3]">
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Start a Project</h3>
<p className="text-sm text-slate-500 font-light mb-8">Fill out the details below to receive a custom proposal.</p>
<form className="space-y-5">
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name</label>
<input className="w-full bg-white border border-[#EAEFF3] rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#8FAFC3] focus:ring-1 focus:ring-[#8FAFC3] transition-colors font-light" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Service Required</label>
<select className="focus:outline-none focus:border-[#8FAFC3] focus:ring-1 focus:ring-[#8FAFC3] transition-colors cursor-pointer text-sm font-light text-slate-700 bg-white w-full border-[#EAEFF3] border rounded-xl pt-3 pr-4 pb-3 pl-4">
<option>Select a service</option>
<option>Video Editing</option>
<option className="">Graphic Design</option>
<option className="">Content Writing</option>
</select>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Estimated Budget</label>
<select className="focus:outline-none focus:border-[#8FAFC3] focus:ring-1 focus:ring-[#8FAFC3] transition-colors cursor-pointer text-sm font-light text-slate-700 bg-white w-full border-[#EAEFF3] border rounded-xl pt-3 pr-4 pb-3 pl-4">
<option className="">Select budget</option>
<option className="">$15 - $19</option>
<option className="">$39 - $49</option>
<option className="">$89 - $99</option>
</select>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1.5">Project Details</label>
<textarea className="w-full bg-white border border-[#EAEFF3] rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-[#8FAFC3] focus:ring-1 focus:ring-[#8FAFC3] transition-colors placeholder:text-slate-400 font-light resize-none" placeholder="Briefly describe your goals, timeline, and deliverables..." rows="4"></textarea>
</div>
<button className="hover:bg-slate-800 transition-colors text-sm font-medium text-white bg-slate-900 w-full rounded-xl mt-2 pt-3.5 pb-3.5" type="button">
                                Submit Project Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-[#EAEFF3] py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-lg font-medium tracking-tighter text-slate-900">ASN</div>
<div className="text-xs font-light text-slate-500">© 2026 ASN Studioz. All rights reserved.</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#8FAFC3] transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#8FAFC3] transition-colors" href="#">
<iconify-icon icon="solar:basketball-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
