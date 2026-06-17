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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
<div className="max-w-7xl mx-auto px-8 h-28 flex items-center justify-between relative">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white relative">
<i className="w-5 h-5 absolute -top-1 -right-1 text-pink-300" data-lucide="sparkles"></i>
<span className="font-serif-heading text-xl font-medium tracking-tight">E</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-lg font-medium text-pink-500" href="#home">Home</a>
<a className="text-lg font-normal text-slate-500 hover:text-pink-500 transition-colors" href="#about">About Me</a>
<a className="text-lg font-normal text-slate-500 hover:text-pink-500 transition-colors" href="#services">Services</a>
<a className="hover:text-pink-500 transition-colors text-lg font-normal text-slate-500" href="#contact">Contact Me</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="hover:bg-pink-600 transition-all shadow-pink-500/20 flex items-center gap-2 text-lg font-medium text-white bg-pink-500 rounded-full pt-3 pr-7 pb-3 pl-7 shadow-md" href="https://drive.google.com/file/d/1Mq_XywHdy8I8FtAQdNAzXpITCM2J41Xz/view?usp=sharing">Download CV<i className="w-5 h-5" data-lucide="download"></i></a>
<a className="px-7 py-3 text-lg font-medium text-pink-500 bg-white border border-pink-200 rounded-full hover:bg-pink-50 transition-all flex items-center gap-2" href="#contact">
<i className="w-5 h-5" data-lucide="phone"></i>
                    Call Me
                </a>
</div>
<button className="md:hidden p-2 text-slate-600">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="overflow-hidden min-h-screen flex pt-40 pb-32 relative items-center" id="home">

<div className="absolute top-40 left-20 text-pink-100 opacity-50 rotate-12 -z-10">
<i className="w-24 h-24" data-lucide="waves"></i>
</div>
<div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center relative w-full">

<div className="lg:col-span-5 relative z-10">
<p className="text-lg font-medium text-slate-400 mb-4 tracking-wide">Hi, I am</p>
<h1 className="font-serif-heading text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-4">
                    Menna Allah<br/>Atef
                </h1>
<h2 className="text-2xl font-medium tracking-tight text-pink-500 mb-6">
                    UI/UX Designer &amp; AI Specialist
                </h2>
<p className="text-xl text-slate-500 leading-relaxed mb-10 font-light max-w-md">
                    I help brands grow by crafting elegant, user-centric digital experiences, blending modern design principles with the power of Artificial Intelligence.
                </p>
<div className="flex items-center gap-6">
<a className="px-8 py-3.5 text-lg font-medium text-white bg-pink-500 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all" href="#contact">
                        Contact Me
                    </a>

<div className="text-pink-300 hidden md:block">
<i className="w-8 h-8" data-lucide="corner-down-left"></i>
</div>
</div>
</div>

<div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center -z-10">
<div className="w-[500px] h-[500px] bg-pink-100/80 rounded-full mix-blend-multiply filter blur-[60px] transform -translate-y-10 translate-x-10"></div>
<div className="absolute w-[400px] h-[400px] bg-rose-50 rounded-full mix-blend-multiply filter blur-[50px] transform translate-y-10 -translate-x-10"></div>
</div>

<div className="relative w-[450px] h-[450px] rounded-[3rem] overflow-hidden shadow-2xl shadow-pink-900/10 border-8 border-white bg-white">
<img alt="Menna Allah Atef" className="object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d537a2e-5892-4841-a5e6-76710a086149_1600w.jpg"/>
</div>

<div className="absolute top-20 left-10 bg-white p-3 rounded-full shadow-lg text-pink-500 animate-bounce" style={{animationDuration: '4s'}}>
<i className="w-6 h-6" data-lucide="figma"></i>
</div>
<div className="absolute bottom-32 left-0 bg-white p-3 rounded-full shadow-lg text-pink-500 animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<div className="absolute top-40 right-20 bg-white p-3 rounded-full shadow-lg text-pink-500 animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.5s'}}>
<i className="w-6 h-6" data-lucide="monitor"></i>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
<a className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all bg-white shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all bg-white shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all bg-white shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-pink-200 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all bg-white shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-16">
<h3 className="text-pink-500 font-medium tracking-wide mb-2 text-lg">My Services</h3>
<h2 className="font-serif-heading text-4xl font-medium tracking-tight text-slate-900">Some Of The Services I Provide</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-[2rem] p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 group">
<div className="w-20 h-20 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="video"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900 mb-4">AI Video Creation</h4>
<p className="text-base text-slate-500 font-light leading-relaxed">Leveraging AI to produce engaging, high-quality video content.</p>
</div>

<div className="bg-white rounded-[2rem] p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 group">
<div className="w-20 h-20 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="layout-template"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900 mb-4">Social Media Design</h4>
<p className="text-base text-slate-500 font-light leading-relaxed">Crafting visually stunning graphics to elevate brand identity.</p>
</div>

<div className="bg-white rounded-[2rem] p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 group">
<div className="w-20 h-20 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="file-text"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900 mb-4">CV &amp; LinkedIn</h4>
<p className="text-base text-slate-500 font-light leading-relaxed">Professional resume design and profile optimization.</p>
</div>

<div className="bg-white rounded-[2rem] p-10 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100 transition-all duration-300 group">
<div className="w-20 h-20 mx-auto bg-pink-50 rounded-full flex items-center justify-center text-pink-400 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="share-2"></i>
</div>
<h4 className="text-xl font-medium tracking-tight text-slate-900 mb-4">Social Management</h4>
<p className="text-base text-slate-500 font-light leading-relaxed">Strategic planning to grow your audience and engagement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="about">

<div className="absolute right-0 top-1/3 text-pink-50 opacity-50 -z-10 flex flex-col gap-2">
<i className="w-32 h-32" data-lucide="chevrons-right"></i>
</div>
<div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5">
<h3 className="text-pink-500 font-medium tracking-wide mb-2 text-lg">About Me</h3>
<h2 className="font-serif-heading text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-6">Why You Hire Me?</h2>
<p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                    With a deep passion for aesthetics and usability, I bridge the gap between user needs and business goals. My approach combines intuitive design with cutting-edge AI tools.
                </p>

<div className="space-y-6">
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-medium text-slate-800">UI/UX Design</span>
<span className="text-base font-medium text-slate-500">95%</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-1.5">
<div className="bg-pink-500 h-1.5 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-medium text-slate-800">Social Media Design</span>
<span className="text-base font-medium text-slate-500">90%</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-1.5">
<div className="bg-[#a855f7] h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-lg font-medium text-slate-800">AI Tools &amp; Video</span>
<span className="text-base font-medium text-slate-500">85%</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-1.5">
<div className="bg-[#3b82f6] h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col md:flex-row items-center gap-12 relative">
<div className="relative">

<div className="absolute inset-0 bg-pink-100 rounded-full scale-110 -z-10"></div>

<div className="w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-white shadow-xl bg-white">
<img alt="Menna" className="object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3783376d-18fd-4e1e-bb77-7afcdbd1bdc8_800w.jpg"/>
</div>
</div>

<div className="flex flex-col gap-8 md:pl-8">
<div className="">
<p className="text-4xl font-serif-heading text-pink-500 mb-1 tracking-tight">40+</p>
<p className="text-lg font-medium text-slate-800 mb-2 tracking-tight">Happy Clients</p>
<p className="text-base text-slate-400 font-light max-w-[150px]">Delivering satisfaction across various industries.</p>
</div>
</div>
</div>
</div>
</section>



<footer className="pb-12 pt-20" id="contact">
<div className="max-w-4xl mx-auto px-8 relative">

<div className="absolute -right-10 -top-10 text-pink-200 -z-10">
<i className="w-32 h-32" data-lucide="sun"></i>
</div>
<div className="bg-gradient-to-r from-pink-50 to-white border border-pink-100 rounded-[3rem] p-12 text-center shadow-lg shadow-pink-900/5 relative overflow-hidden flex flex-col items-center justify-center">

<div className="flex text-white bg-pink-500 w-12 h-12 rounded-full mb-6 items-center justify-center">
<span className="font-serif-heading text-2xl font-medium">E</span>
</div>
<h2 className="font-serif-heading text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Let's Connect With Me</h2>
<a className="inline-flex items-center gap-3 hover:text-pink-500 transition-colors text-2xl font-medium text-slate-700" href="tel:01111578621">
<i className="w-6 h-6 text-pink-500" data-lucide="phone-call"></i>
                    01111578621
                </a>
</div>
<div className="text-center mt-8">
<p className="text-sm text-slate-400 font-light tracking-wide">
                    © Design by Menna Allah Atef
                </p>
</div>
</div>
</footer>


    </>
  );
}
