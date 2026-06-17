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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-[#E6E6E6] border-beam-b">
<div className="flex flex-col lg:flex-row justify-between lg:items-stretch h-auto lg:h-16">

<div className="flex items-center justify-between p-4 lg:p-0 lg:w-1/4 lg:border-beam-r bg-[#E6E6E6] relative z-20">
<a className="block pl-4 lg:pl-6" href="#">
<span className="text-2xl font-bold tracking-tight-custom uppercase flex items-center gap-2">
<div className="w-4 h-4 bg-[#FF3300]"></div> MEDHA ACADEMY
                    </span>
</a>
<button className="lg:hidden p-1 border-beam bg-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden lg:flex flex-1 justify-end items-center font-tech text-xs tracking-widest uppercase divide-x divide-black border-l border-black">
<a className="flex items-center hover-invert transition-colors duration-0 h-full pr-8 pl-8" href="/about">
                    [01] About
                </a>
<a className="flex items-center hover-invert transition-colors duration-0 h-full pr-8 pl-8" href="/projects">
                    [02] Projects
                </a>
<a className="flex items-center hover-invert transition-colors duration-0 h-full pr-8 pl-8" href="/events">
                    [03] Events
                </a>
<a className="h-full flex items-center px-8 bg-black text-white hover:bg-[#FF3300] transition-colors duration-0 font-bold" href="/join">
<iconify-icon className="mr-2" icon="solar:user-plus-linear"></iconify-icon> Join Medha
                </a>
</div>
</div>
</nav>

<div className="h-16 w-full"></div>

<section className="w-full border-beam-b grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">

<div className="reveal-element lg:col-span-8 border-beam-r relative overflow-hidden group border-b lg:border-b-0 border-black is-visible">
<div className="bg-center documentary-img bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp'}}></div>
<div className="border-beam z-10 hidden group-hover:block uppercase text-xs font-tech bg-white pt-2 pr-2 pb-2 pl-2 absolute right-8 bottom-8">Location: DHAKA // UNIT: 01</div>
</div>

<div className="lg:col-span-4 flex flex-col justify-between bg-[#E6E6E6] p-6 lg:p-8 relative">
<div className="">
<div className="reveal-element font-tech text-xs text-[#FF3300] mb-6 flex items-center gap-2 border-b border-[#FF3300]/30 pb-2 delay-100 is-visible">
<iconify-icon className="animate-pulse" icon="solar:record-circle-linear"></iconify-icon> ECOSYSTEM STATUS: ACTIVE
                </div>
<h1 className="reveal-element text-5xl lg:text-6xl font-bold uppercase tracking-tight-custom leading-[0.9] mb-8 delay-200 is-visible">
                    Build the<br/>Self.<br/>Build the<br/>Culture.
                </h1>
<p className="reveal-element leading-relaxed delay-300 is-visible text-lg font-medium border-black border-l-2 pb-5 pl-4">Medha Academy is a parallel ecosystem for talent discovery, cultivation, alignment, and deployment. We operate outside the noise to build the next generation of philosophers, builders and thinkers.</p>
</div>
<div className="mt-12 lg:mt-0 space-y-0">
<a className="reveal-element group block w-full border-beam border-b-0 bg-white hover:bg-black hover:text-white transition-all duration-0 p-4 uppercase font-bold tracking-wider flex justify-between items-center text-sm delay-300 is-visible" href="#projects">
<span>See Projects</span>
<iconify-icon className="" icon="solar:arrow-right-down-linear" width="20"></iconify-icon>
</a>
<a className="reveal-element group block w-full border-beam bg-[#FF3300] text-white hover:bg-black transition-all duration-0 p-4 uppercase font-bold tracking-wider flex justify-between items-center text-sm delay-300 is-visible" href="/join">
<span>Join Medha Academy</span>
<iconify-icon icon="solar:login-2-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="w-full border-beam-b">
<div className="reveal-element bg-black text-white px-6 py-3 font-tech text-xs border-beam-b tracking-widest uppercase flex items-center gap-2">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Operational Logic
        </div>
<div className="grid grid-cols-1 md:grid-cols-3 bg-[#E6E6E6]">

<div className="reveal-element p-8 border-b md:border-b-0 md:border-r border-black hover:bg-white transition-colors duration-0 group">
<div className="font-tech text-4xl font-bold text-[#FF3300] mb-4 opacity-50 group-hover:opacity-100">01.</div>
<h3 className="text-xl font-bold uppercase mb-2">The Intake</h3>
<p className="text-sm font-medium leading-relaxed opacity-80">
                    Enter through the gates via events or content. No resume drops. We observe curiosity, conduct, and questions.
                </p>
</div>

<div className="reveal-element p-8 border-b md:border-b-0 md:border-r border-black hover:bg-white transition-colors duration-0 group delay-100">
<div className="font-tech text-4xl font-bold text-[#FF3300] mb-4 opacity-50 group-hover:opacity-100">02.</div>
<h3 className="text-xl font-bold uppercase mb-2">The Filter</h3>
<p className="text-sm font-medium leading-relaxed opacity-80">
                    Rigorous profiling reveals your natural grain. We separate signal from noise. High standards, no freeloading.
                </p>
</div>

<div className="reveal-element p-8 border-black hover:bg-white transition-colors duration-0 group delay-200">
<div className="font-tech text-4xl font-bold text-[#FF3300] mb-4 opacity-50 group-hover:opacity-100">03.</div>
<h3 className="text-xl font-bold uppercase mb-2">The Deployment</h3>
<p className="text-sm font-medium leading-relaxed opacity-80">
                    Placement into a specific project lane. Mentorship, real stakes, and structured work with a brotherhood.
                </p>
</div>
</div>
</section>

<section className="w-full border-beam-b bg-[#F0F0F0]" id="projects">
<div className="p-6 border-beam-b flex flex-col md:flex-row justify-between md:items-center bg-[#E6E6E6] sticky top-16 z-30 shadow-sm">
<h2 className="reveal-element text-2xl font-bold uppercase tracking-tight">Ecosystem Projects</h2>
<div className="reveal-element flex gap-4 mt-2 md:mt-0 font-tech text-xs delay-100">
<span className="flex items-center gap-1"><div className="w-2 h-2 bg-black rounded-full"></div> ACTIVE</span>
<span className="flex items-center gap-1 opacity-50"><div className="w-2 h-2 border border-black rounded-full"></div> INCUBATING</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="reveal-element border-b md:border-r border-black p-8 bg-white hover-invert group min-h-[240px] flex flex-col justify-between cursor-pointer">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:paint-palette-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Creative Glade</h3>
<p className="text-sm font-medium leading-snug opacity-80">Physical creation and contemplation space. Art, craft, beauty, play, quiet work, gatherings.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element lg:border-r hover-invert group min-h-[240px] flex flex-col cursor-pointer delay-100 bg-white border-black border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:videocamera-record-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Video Sans</h3>
<p className="text-sm font-medium leading-snug opacity-80">Guild for editors and creators. Skill first, taste driven, anti-commercial.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element border-b md:border-r lg:border-r-0 border-black p-8 bg-white hover-invert group min-h-[240px] flex flex-col justify-between cursor-pointer delay-200">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:pen-new-square-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Platonic Dhaka</h3>
<p className="text-sm font-medium leading-snug opacity-80">Op-ed and narrative engine for social and cultural clarity.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element border-b md:border-r lg:border-r border-black p-8 bg-white hover-invert group min-h-[240px] flex flex-col justify-between cursor-pointer">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:library-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Alexandria</h3>
<p className="leading-snug text-sm font-medium opacity-80">Structured lifelong learning. Reading circles, epistemic discipline, curricula.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element lg:border-r hover-invert group min-h-[240px] flex flex-col cursor-pointer delay-100 bg-white border-black border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="" icon="solar:rocket-2-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Startup Club</h3>
<p className="text-sm font-medium leading-snug opacity-80">Community of startup enthusiasts. Building tools, sharing resources, and launching ventures.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element border-b md:border-r lg:border-r-0 border-black p-8 bg-white hover-invert group min-h-[240px] flex flex-col justify-between cursor-pointer delay-200">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="" icon="solar:map-point-wave-linear" width="32"></iconify-icon>
<span className="uppercase text-xs font-tech border-current border pr-1 pl-1">Active</span>
</div>
<h3 className="uppercase text-2xl font-bold mb-2">POLITIKOS MAP</h3>
<p className="text-sm font-medium leading-snug opacity-80">Open source map to track crime and corruption among crucial institutions.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element border-b md:border-r lg:border-r border-black p-8 bg-white hover-invert group min-h-[240px] flex flex-col justify-between cursor-pointer">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:map-linear" width="32"></iconify-icon>
<span className="uppercase text-xs font-tech border-current border pr-1 pl-1">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Dhaka Scouts</h3>
<p className="text-sm font-medium leading-snug opacity-80">Weekly human-scale urban exploration and documentation of the city.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element border-b lg:border-r border-black p-8 bg-white hover-invert group min-h-[240px] flex flex-col justify-between cursor-pointer delay-100">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:microphone-2-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Prosno Show</h3>
<p className="text-sm font-medium leading-snug opacity-80">Public Socratic inquiry, street questions, long-form dialogues.</p>
</div>
<div className="uppercase group-hover:opacity-100 transition-opacity text-xs font-tech opacity-0 mt-6">-&gt; Learn More</div>
</div>

<div className="reveal-element border-b md:border-r lg:border-r-0 border-black p-8 bg-white hover-invert group min-h-[240px] flex flex-col justify-between cursor-pointer delay-200">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="" icon="solar:women-linear" width="32"></iconify-icon>
<span className="uppercase text-xs font-tech border-current border pr-1 pl-1">Active</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Lumina</h3>
<p className="text-sm font-medium leading-snug opacity-80">All female sorority for intellectual sisterhood, women-led social change, and ethics.</p>
</div>
<div className="font-tech text-xs uppercase mt-6 opacity-0 group-hover:opacity-100 transition-opacity">-&gt; Learn More</div>
</div>

<div className="reveal-element border-b md:border-r lg:border-r border-black p-8 bg-[#E6E6E6] text-gray-700 hover:bg-white hover:text-black group min-h-[240px] flex flex-col justify-between cursor-pointer">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:dumbbell-large-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase text-gray-500">Incubating</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Fight Club</h3>
<p className="text-sm font-medium leading-snug opacity-80">Disciplined body plus knowledge. Grappling and principles. Power without corruption.</p>
</div>
</div>

<div className="reveal-element border-b md:border-r lg:border-r border-black p-8 bg-[#E6E6E6] text-gray-700 hover:bg-white hover:text-black group min-h-[240px] flex flex-col justify-between cursor-pointer delay-100">
<div className="">
<div className="flex justify-between items-start mb-4">
<iconify-icon icon="solar:atom-linear" width="32"></iconify-icon>
<span className="font-tech text-xs border border-current px-1 uppercase text-gray-500">Incubating</span>
</div>
<h3 className="text-2xl font-bold uppercase mb-2">Principia</h3>
<p className="text-sm font-medium leading-snug opacity-80">Knowledge community under Alexandria. Personalized intellect paths, unity, care, truth.</p>
</div>
</div>

<div className="hidden lg:block border-b border-black bg-[#E6E6E6]"></div>
</div>
</section>

<section className="w-full border-beam-b p-6 lg:p-12">
<div className="max-w-5xl mx-auto">
<h2 className="reveal-element text-3xl font-bold uppercase tracking-tight mb-8 flex items-center gap-3">
<iconify-icon icon="solar:calendar-minimalistic-linear"></iconify-icon> Weekly Cadence
            </h2>
<div className="border-t border-black">

<div className="reveal-element group flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-black hover:bg-[#FF3300] hover:text-white transition-colors duration-0 px-2 cursor-pointer">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 mb-1 md:mb-0">Session 01</div>
<div className="flex-1 font-bold uppercase text-lg">Intellect Night</div>
<div className="font-tech text-sm">Discussion &amp; Debate</div>
</div>

<div className="reveal-element group flex flex-col md:flex-row md:items-center hover:bg-[#FF3300] hover:text-white transition-colors duration-0 cursor-pointer border-black border-b pt-4 pr-2 pb-4 pl-2 items-start justify-between delay-100">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 mb-1 md:mb-0">Session 02</div>
<div className="flex-1 font-bold uppercase text-lg">Creation Night</div>
<div className="font-tech text-sm">Deep Work / Studio</div>
</div>

<div className="reveal-element group flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-black hover:bg-[#FF3300] hover:text-white transition-colors duration-0 px-2 cursor-pointer delay-200">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 mb-1 md:mb-0">Session 03</div>
<div className="flex-1 font-bold uppercase text-lg">Body &amp; Brotherhood</div>
<div className="font-tech text-sm">Physical Training</div>
</div>

<div className="reveal-element group flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b border-black hover:bg-[#FF3300] hover:text-white transition-colors duration-0 px-2 cursor-pointer delay-300">
<div className="font-tech text-xs uppercase w-32 opacity-70 group-hover:opacity-100 mb-1 md:mb-0">Session 04</div>
<div className="flex-1 font-bold uppercase text-lg">City Outing</div>
<div className="font-tech text-sm">Exploration</div>
</div>
</div>
</div>
</section>

<section className="w-full border-beam-b bg-white">
<div className="grid grid-cols-1 md:grid-cols-3">
<a className="reveal-element p-10 border-b md:border-b-0 md:border-r border-black hover:bg-[#E6E6E6] group transition-colors" href="/events">
<iconify-icon className="mb-6" icon="solar:ticket-linear" width="40"></iconify-icon>
<h3 className="text-xl font-bold uppercase mb-2">Attend an Event</h3>
<p className="text-sm text-gray-600 mb-4">The first step. Observe the culture and meet the people.</p>
<span className="font-tech text-xs uppercase border-b border-black">View Calendar</span>
</a>
<a className="reveal-element p-10 border-b md:border-b-0 md:border-r border-black hover:bg-[#E6E6E6] group transition-colors delay-100" href="/join">
<iconify-icon className="mb-6" icon="solar:document-add-linear" width="40"></iconify-icon>
<h3 className="text-xl font-bold uppercase mb-2">Apply to Circle</h3>
<p className="text-sm text-gray-600 mb-4">For serious members ready for commitment and growth.</p>
<span className="font-tech text-xs uppercase border-b border-black">Start Application</span>
</a>
<a className="reveal-element p-10 border-black hover:bg-[#E6E6E6] group transition-colors delay-200" href="/contact">
<iconify-icon className="mb-6" icon="solar:users-group-rounded-linear" width="40"></iconify-icon>
<h3 className="text-xl font-bold uppercase mb-2">Collaborate</h3>
<p className="text-sm text-gray-600 mb-4">For builders and creators looking for project deployment.</p>
<span className="font-tech text-xs uppercase border-b border-black">Pitch Project</span>
</a>
</div>
</section>

<section className="w-full border-beam-b bg-[#1A1A1A] text-[#E6E6E6] p-8 lg:p-16">
<div className="max-w-4xl mx-auto">
<h2 className="reveal-element text-sm font-tech text-[#FF3300] uppercase tracking-widest mb-8">/// Core Principles</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="reveal-element flex gap-4">
<iconify-icon className="text-[#FF3300] shrink-0" icon="solar:check-square-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase mb-1">Truth over Status</h4>
<p className="text-sm text-gray-400">We do not care who you are, only what is true.</p>
</div>
</div>
<div className="reveal-element flex gap-4 delay-100">
<iconify-icon className="text-[#FF3300] shrink-0" icon="solar:check-square-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase mb-1">Skill over Talk</h4>
<p className="text-sm text-gray-400">Demonstrated ability is the only currency.</p>
</div>
</div>
<div className="reveal-element flex gap-4 delay-200">
<iconify-icon className="text-[#FF3300] shrink-0" icon="solar:check-square-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase mb-1">Beauty before Performance</h4>
<p className="text-sm text-gray-400">We optimize for aesthetic and moral truth, not metrics.</p>
</div>
</div>
<div className="reveal-element flex gap-4">
<iconify-icon className="text-[#FF3300] shrink-0" icon="solar:check-square-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase mb-1">Discipline without Ego</h4>
<p className="text-sm text-gray-400">Hard work is expected. Humility is mandatory.</p>
</div>
</div>
<div className="reveal-element flex gap-4 delay-100">
<iconify-icon className="text-[#FF3300] shrink-0" icon="solar:check-square-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase mb-1">Community over Individualism</h4>
<p className="text-sm text-gray-400">The strength of the wolf is the pack.</p>
</div>
</div>
<div className="reveal-element flex gap-4 delay-200">
<iconify-icon className="text-[#FF3300] shrink-0" icon="solar:check-square-linear"></iconify-icon>
<div className="">
<h4 className="font-bold uppercase mb-1">No Freeloading</h4>
<p className="text-sm text-gray-400">High signal only. Contribute or leave.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-[#E6E6E6] w-full border-t border-black">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="lg:p-16 lg:border-b-0 lg:border-r border-[#333] border-b pt-8 pr-8 pb-8 pl-8">
<h2 className="reveal-element text-4xl lg:text-5xl font-bold uppercase tracking-tight-custom leading-none mb-8">
                    Build the<br/>Parallel<br/>Institution.
                </h2>
<div className="reveal-element space-y-4 delay-100">
<label className="font-tech text-xs uppercase tracking-widest text-gray-400">Join the Signal</label>
<div className="flex border border-[#555]">
<input className="bg-transparent w-full p-4 font-tech text-white outline-none placeholder:text-gray-600 focus:bg-[#1A1A1A]" placeholder="EMAIL ADDRESS" type="email"/>
<button className="bg-white text-black font-bold uppercase px-8 py-4 hover:bg-[#FF3300] hover:text-white transition-colors duration-0">
                            Submit
                        </button>
</div>
</div>
</div>
<div className="lg:p-16 flex flex-col pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="reveal-element grid grid-cols-2 gap-8 mb-16 delay-200">
<div className="">
<h4 className="font-tech text-xs text-gray-400 uppercase mb-4">Operations</h4>
<p className="uppercase leading-relaxed text-sm font-bold">Dhaka, Bangladesh</p>
</div>
<div className="">
<h4 className="font-tech text-xs text-gray-400 uppercase mb-4">Contact</h4>
<p className="uppercase leading-relaxed text-sm font-bold">medha.acd@gmail.com</p>
<div className="flex gap-4 mt-4">
<iconify-icon className="text-gray-400 hover:text-white cursor-pointer" icon="solar:camera-linear"></iconify-icon>
<iconify-icon className="text-gray-400 hover:text-white cursor-pointer" icon="solar:brand-youtube-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-[#333] font-tech text-[10px] uppercase text-gray-500">
<div className="">© 2024 MEDHA ACADEMY.</div>
<div className="md:mt-0 mt-2">EST. 2024</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
