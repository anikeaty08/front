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
      

<div className="p-2 md:p-4">
<header className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[90vh] flex flex-col">

<img alt="Swimmer" className="absolute inset-0 w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b45ba84-7332-4d87-b0b0-6a5cfd674b9a_3840w.jpg"/>

<div className="absolute inset-0 bg-blue-900/30 mix-blend-multiply"></div>
<div className="bg-gradient-to-r from-blue-600/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1d9ceb] to-transparent opacity-80"></div>

<nav className="relative z-20 flex justify-between items-center px-6 py-8 md:px-12 text-white">
<div className="text-2xl font-medium tracking-tight">Marlin SC</div>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white/80 transition-colors" href="#">Coaching</a>
<a className="hover:text-white/80 transition-colors" href="#">Reviews</a>
<a className="hover:text-white/80 transition-colors" href="#">About</a>
<a className="hover:text-white/80 transition-colors" href="#">Contact</a>
</div>
<button className="hidden md:block bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                    Book a session
                </button>
</nav>

<div className="relative z-20 flex-1 flex flex-col justify-end px-6 py-12 md:px-12 md:py-24 max-w-4xl">
<h1 className="text-6xl md:text-[5.5rem] leading-[1.05] tracking-tight font-normal text-white mb-6">
                    Feel confident in<br/>every stroke
                </h1>
<p className="text-lg text-white/90 mb-10 max-w-xl font-light">
                    Patient, personalized coaching that meets you where you are—whether you're overcoming a fear of the water or refining your technique.
                </p>
<button className="w-fit bg-[#2da6ef] text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-[#2594d9] transition-colors group">
<span className="text-lg font-medium">Book your first lesson</span>
<span className="bg-white text-[#2da6ef] p-1.5 rounded-full flex items-center justify-center">
<iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</button>
</div>

<div className="hidden lg:block absolute right-12 bottom-24 z-20 w-80">
<div className="relative">
<div className="absolute -top-6 inset-x-4 h-full bg-white/40 backdrop-blur-md rounded-3xl"></div>
<div className="absolute -top-3 inset-x-2 h-full bg-white/70 backdrop-blur-md rounded-3xl"></div>
<div className="relative bg-white rounded-3xl p-5 shadow-2xl flex gap-4">
<img alt="Avatar" className="w-16 h-16 rounded-xl object-cover shrink-0" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-medium text-gray-900 text-lg tracking-tight mb-1">Sarah Jenkins</h4>
<p className="text-xs text-gray-500 leading-tight">I used to panic in the deep end. Coach Dan didn't just teach me how to swim; he taught me how to trust myself in the water. I just completed my first ocean swim!</p>
</div>
</div>
</div>
</div>
</header>
</div>

<section className="py-24 px-6 md:px-12 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
<div className="flex-1 w-full">
<h2 className="text-[3rem] md:text-[4rem] leading-none tracking-tight font-normal mb-16 max-w-xl">
                A welcoming space to build your swimming skills
            </h2>
<div className="flex flex-wrap gap-12 md:gap-24">
<div>
<div className="text-[4rem] md:text-[5rem] tracking-tight font-normal leading-none mb-2">15+</div>
<div className="text-lg text-gray-600">Years coaching</div>
</div>
<div>
<div className="text-[4rem] md:text-[5rem] tracking-tight font-normal leading-none mb-2">500+</div>
<div className="text-lg text-gray-600">Swimmers guided</div>
</div>
</div>
</div>
<div className="flex-1 w-full">
<img alt="Coach" className="w-full h-auto aspect-[4/5] object-cover rounded-[2rem] md:rounded-[3rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 items-start border-t border-gray-100">
<div className="col-span-1">
<p className="text-lg text-gray-600 font-light leading-relaxed max-w-[200px]">Learn at your own pace</p>
</div>
<div className="col-span-1 lg:col-span-3">
<h3 className="text-4xl md:text-[3.5rem] tracking-tight font-normal leading-[1.1] max-w-4xl">
                We focus on patience, proper technique, and building your confidence so you can truly enjoy the water.
            </h3>
</div>
</section>

<section className="py-12 px-6 md:px-12 max-w-[90rem] mx-auto flex flex-col gap-6">

<div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[320px] flex items-center group">
<img alt="Beginner" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/50 to-transparent"></div>
<div className="relative z-10 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="max-w-xl">
<h4 className="text-4xl md:text-5xl text-white tracking-tight font-normal mb-6">Water Confidence</h4>
<ul className="text-white/90 space-y-3 text-lg font-light">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Overcome your fears and learn the fundamentals.</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>1:1 patient, supportive instruction.</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Focus on breathing, floating, and going at your own pace.</li>
</ul>
</div>
<div className="text-white flex flex-col items-start md:items-end md:self-end">
<span className="text-lg md:text-xl font-light mb-[-10px]">Start from/</span>
<span className="text-[5rem] md:text-[6rem] font-normal tracking-tight leading-none">$80</span>
</div>
</div>
</div>

<div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[320px] flex items-center group">
<img alt="Performance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0d346c]/90 via-[#0d346c]/50 to-transparent"></div>
<div className="relative z-10 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="max-w-xl">
<h4 className="text-4xl md:text-5xl text-white tracking-tight font-normal mb-6">Stroke Refinement</h4>
<ul className="text-white/90 space-y-3 text-lg font-light">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Improve your efficiency and swim with ease.</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Technique adjustments for smoother movement.</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Endurance building and form analysis.</li>
</ul>
</div>
<div className="text-white flex flex-col items-start md:items-end md:self-end">
<span className="text-lg md:text-xl font-light mb-[-10px]">Start from/</span>
<span className="text-[5rem] md:text-[6rem] font-normal tracking-tight leading-none">$120</span>
</div>
</div>
</div>

<div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[320px] flex items-center group">
<img alt="Elite" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/50 to-transparent"></div>
<div className="relative z-10 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="max-w-xl">
<h4 className="text-4xl md:text-5xl text-white tracking-tight font-normal mb-6">Performance Swim</h4>
<ul className="text-white/90 space-y-3 text-lg font-light">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Push your limits and prepare for your next event.</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Custom training plans tailored to your goals.</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white"></div>Speed strategy, pacing, and race day preparation.</li>
</ul>
</div>
<div className="text-white flex flex-col items-start md:items-end md:self-end">
<span className="text-lg md:text-xl font-light mb-[-10px]">Start from/</span>
<span className="text-[5rem] md:text-[6rem] font-normal tracking-tight leading-none text-white/80">$180</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-[90rem] mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
<h2 className="text-5xl md:text-[4rem] tracking-tight font-normal leading-[1.05]">
                Hi, I'm Coach Dan.<br/>Let's get you swimming.
            </h2>
<p className="max-w-md text-lg text-gray-600 font-light lg:text-right">
                I believe swimming is a life skill everyone deserves to enjoy, free from stress or pressure.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col gap-6">
<img alt="Coach Dan" className="w-full aspect-[3/4] object-cover rounded-[2rem] md:rounded-[3rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<p className="text-lg text-gray-600 font-light mt-4">
                    For over 15 years, I've helped hundreds of people—from nervous beginners to seasoned athletes—discover their rhythm in the water. My approach is simple: no pressure, just patience and proven techniques.
                </p>
</div>

<div className="flex flex-col gap-6 pt-12">
<a className="bg-[#2B9FF0] text-white rounded-[2rem] md:rounded-[3rem] p-10 h-[300px] flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform" href="#">

<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
<h3 className="text-[2.5rem] tracking-tight font-normal leading-tight relative z-10 flex flex-col gap-2">
<span>Let's chat</span>
<span className="flex items-center gap-2">book <iconify-icon className="w-8 h-8" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></span>
</h3>
</a>
<img alt="Swimmer learning" className="w-full h-[400px] object-cover rounded-[2rem] md:rounded-[3rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="flex flex-col gap-6">
<img alt="Swimmer in pool" className="w-full h-[300px] object-cover rounded-[2rem] md:rounded-[3rem]" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<img alt="Coach instructing" className="w-full aspect-[3/4] object-cover rounded-[2rem] md:rounded-[3rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-6xl mx-auto text-center flex flex-col items-center">
<h2 className="text-4xl md:text-[3.5rem] tracking-tight font-normal mb-4">Stories from the pool</h2>
<p className="text-lg text-gray-500 font-light mb-16">Hear from people who took the plunge.</p>

<div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
<img alt="thumb" className="w-24 md:w-32 h-20 md:h-24 rounded-2xl object-cover opacity-20 hidden sm:block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img alt="thumb" className="w-24 md:w-32 h-20 md:h-24 rounded-2xl object-cover opacity-40 hidden md:block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img alt="thumb" className="w-20 md:w-28 h-16 md:h-20 rounded-2xl object-cover opacity-60" src="https://images.unsplash.com/photo-1570158268183-d296b2892211?w=400&amp;q=80"/>
<img alt="thumb" className="w-20 md:w-28 h-16 md:h-20 rounded-2xl object-cover opacity-80" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&amp;q=80"/>

<img alt="thumb active" className="w-24 md:w-32 h-20 md:h-24 rounded-2xl object-cover shadow-lg border-2 border-white scale-110 z-10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;q=80"/>
<img alt="thumb" className="w-20 md:w-28 h-16 md:h-20 rounded-2xl object-cover opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&amp;q=80"/>
<img alt="thumb" className="w-20 md:w-28 h-16 md:h-20 rounded-2xl object-cover opacity-60" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&amp;q=80"/>
<img alt="thumb" className="w-24 md:w-32 h-20 md:h-24 rounded-2xl object-cover opacity-40 hidden md:block" src="https://images.unsplash.com/photo-1600965962361-9035dbfd1c50?w=400&amp;q=80"/>
<img alt="thumb" className="w-24 md:w-32 h-20 md:h-24 rounded-2xl object-cover opacity-20 hidden sm:block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<p className="text-xl md:text-[1.75rem] font-normal tracking-tight leading-snug mb-8 max-w-4xl">
            "I was terrified of the water my whole life. Dan’s patience changed everything. At 35, I finally learned to swim and actually look forward to my weekly sessions."
        </p>
<p className="text-lg font-medium text-gray-900 tracking-tight">Michael, Adult Beginner</p>
</section>

<section className="py-24 px-6 md:px-12 max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-12">
<h2 className="text-5xl md:text-[4.5rem] tracking-tight font-normal leading-[1.05] w-full lg:w-1/3">
            Everything you need to know
        </h2>
<div className="w-full lg:w-2/3 relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-gray-900 min-h-[500px]">
<img alt="Swimmer close up" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#072445]/90 to-transparent"></div>
<div className="relative z-10 p-8 md:p-16 flex flex-col justify-center h-full gap-2">
<div className="border-b border-white/20 py-6 group cursor-pointer">
<div className="flex justify-between items-center text-white">
<span className="text-xl md:text-2xl tracking-tight font-normal">Do I need to know how to swim to start?</span>
<iconify-icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="border-b border-white/20 py-6 group cursor-pointer">
<div className="flex justify-between items-center text-white">
<span className="text-xl md:text-2xl tracking-tight font-normal">What should I bring to my first lesson?</span>
<iconify-icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="border-b border-white/20 py-6 group cursor-pointer">
<div className="flex justify-between items-center text-white">
<span className="text-xl md:text-2xl tracking-tight font-normal">Do you work with adults who are afraid of the water?</span>
<iconify-icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="border-b border-white/20 py-6 group cursor-pointer border-b-0">
<div className="flex justify-between items-center text-white">
<span className="text-xl md:text-2xl tracking-tight font-normal">How many sessions will I need?</span>
<iconify-icon className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<div className="p-2 md:p-4 pb-4">
<footer className="bg-[#1A8BE4] text-white rounded-[2rem] md:rounded-[3rem] overflow-hidden relative">

<div className="absolute bottom-0 left-0 w-full h-full pointer-events-none opacity-40">
<div className="absolute -bottom-1/2 -left-1/4 w-[120%] h-[120%] bg-gradient-radial from-white/20 to-transparent rounded-full blur-3xl"></div>
<div className="absolute top-1/4 -right-1/4 w-[80%] h-[80%] bg-gradient-radial from-white/10 to-transparent rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 flex flex-col h-full">

<div className="px-8 py-10 md:px-16 md:py-12 border-b border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
<h3 className="text-[2rem] tracking-tight font-normal">Ready to jump in?</h3>
<button className="bg-white text-[#1A8BE4] pl-6 pr-2 py-2 rounded-full flex items-center gap-4 hover:bg-gray-50 transition-colors group">
<span className="text-sm font-medium">Book your first lesson</span>
<span className="bg-[#1A8BE4] text-white p-1.5 rounded-full flex items-center justify-center">
<iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</button>
</div>

<div className="px-8 py-16 md:px-16 md:py-20 flex flex-col lg:flex-row justify-between gap-16">

<div className="flex-1 max-w-md">
<h4 className="text-[2.5rem] tracking-tight font-medium mb-4">Marlin SC</h4>
<p className="text-2xl font-light text-white/90 leading-tight">
                            From your first float to your fastest lap,<br/>we've got you.
                        </p>
</div>

<div className="flex-1 flex flex-col lg:items-end w-full max-w-2xl">

<div className="flex gap-3 mb-16 flex-wrap lg:justify-end">
<a className="border border-white/30 rounded-full px-6 py-2 text-sm font-light hover:bg-white/10 transition-colors" href="#">Coaching</a>
<a className="border border-white/30 rounded-full px-6 py-2 text-sm font-light hover:bg-white/10 transition-colors" href="#">Reviews</a>
<a className="border border-white/30 rounded-full px-6 py-2 text-sm font-light hover:bg-white/10 transition-colors" href="#">About</a>
<a className="border border-white/30 rounded-full px-6 py-2 text-sm font-light hover:bg-white/10 transition-colors" href="#">Contact</a>
</div>

<div className="w-full flex flex-col md:flex-row justify-between lg:justify-end gap-12 lg:gap-24 mb-8">
<div className="lg:text-left">
<h5 className="text-[1.75rem] tracking-tight font-normal mb-3">Contact us here</h5>
<a className="block text-lg font-light text-white hover:text-white/80 transition-colors mb-1" href="mailto:hello@coachdan.au">hello@coachdan.au</a>
<a className="block text-lg font-light text-white hover:text-white/80 transition-colors" href="tel:+61480555548">+61 (480) 555-548</a>
</div>

<div className="flex gap-3 lg:pt-2">
<a className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="w-5 h-5 text-xl" icon="prime:instagram" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="w-5 h-5 text-xl" icon="prime:twitter" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="w-5 h-5 text-xl" icon="prime:linkedin" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" href="#">
<iconify-icon className="w-5 h-5 text-xl" icon="prime:facebook" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="px-8 py-8 md:px-16 mt-auto flex flex-col md:flex-row justify-between items-center text-white/70 text-sm font-light gap-4 border-t border-white/10">
<p>2025 Marlin fc. all right reserved</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Term &amp; Conditions</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
