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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue for polymer feel
600: '#0284c7',
900: '#0c4a6e',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Set the date we're counting down to
        const deadline = new Date("Feb 10, 2026 23:59:59").getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = deadline - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            // Display the result
            const el = document.getElementById("reg-countdown");
            if (el) {
                if (distance < 0) {
                    clearInterval(x);
                    el.innerHTML = "CLOSED";
                    el.classList.add("text-red-500");
                } else {
                    el.innerHTML = days + "d " + hours + "h " + minutes + "m ";
                }
            }
        }, 1000);
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter flex items-center gap-2 group" href="#">
<span className="bg-zinc-900 text-white w-8 h-8 flex items-center justify-center rounded-lg group-hover:bg-brand-600 transition-colors">E</span>
<span>ELASTOPLAZ'26</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#events">Events</a>
<a className="hover:text-zinc-900 transition-colors" href="#passes">Passes</a>
<a className="hover:text-zinc-900 transition-colors" href="#workshop">Workshop</a>
<a className="hover:text-zinc-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2" href="#register">
                    Register Now
                    <svg aria-hidden="true" className="" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<button className="md:hidden text-zinc-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-zinc-100 p-6 absolute w-full left-0 top-16 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-sm font-medium text-zinc-600" href="#about">About</a>
<a className="text-sm font-medium text-zinc-600" href="#events">Events</a>
<a className="text-sm font-medium text-zinc-600" href="#passes">Passes</a>
<a className="text-sm font-medium text-zinc-600" href="#workshop">Workshop</a>
<a className="text-sm font-medium text-zinc-600" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-zinc-600" href="#contact">Contact</a>
<hr className="border-zinc-100"/>
<a className="text-brand-600 font-medium text-sm" href="#register">Register Now →</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-pattern opacity-40 -z-10 mask-image-gradient"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[100px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">Registration Open</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-6 leading-[1.1]">
                Shaping the Future <br/> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Polymers</span>.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Society of Plastics and Rubber Technologists presents <strong className="font-medium text-zinc-900">ELASTOPLAZ '26</strong>. <br/>A National Level Technical Symposium at Anna University.
            </p>

<div className="flex flex-wrap justify-center gap-6 mb-12">
<div className="bg-white/50 backdrop-blur border border-zinc-200 p-4 rounded-xl min-w-[160px]">
<p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Registration Ends</p>
<div className="text-xl font-mono font-medium text-zinc-900" id="reg-countdown">27d 4h 53m </div>
<p className="text-[10px] text-zinc-400 mt-1">Feb 10, 2026</p>
</div>
<div className="bg-white/50 backdrop-blur border border-zinc-200 p-4 rounded-xl min-w-[160px]">
<p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Event Starts</p>
<div className="text-xl font-mono font-medium text-zinc-900">Feb 15, 2026</div> 
<p className="text-[10px] text-zinc-400 mt-1">Anna University</p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-zinc-200 flex items-center justify-center gap-2" href="#passes">
<svg aria-hidden="true" data-icon="lucide:ticket" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Get Passes
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg hover:border-zinc-300 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="https://chat.whatsapp.com/" target="_blank">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Join WhatsApp Group
                </a>
</div>
</div>
</section>

<section className="border-zinc-100 border-t pt-20 pb-20" id="about">
<div className="text-center max-w-3xl mt-auto mr-auto mb-auto ml-auto pr-6 pl-6">
<svg aria-hidden="true" className="mx-auto mb-4" data-icon="lucide:flask-conical" data-icon-replaced="true" data-icon-set="lucide" data-lucide="flask-conical" data-width="32" fill="none" height="32" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(24, 24, 27)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path><path d="M8.5 2h7"></path><path d="M7 16h10"></path></svg>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">About The Department</h2>
<p className="leading-relaxed font-light text-zinc-500" style={{}}>The Society of Plastics and Rubber Technologists (SPART) at Anna University has been a pioneer in fostering innovation in polymer science. ELASTOPLAZ is our flagship symposium, bringing together bright minds to compete, learn, and innovate in the field of materials science and engineering.</p>
</div>
</section>

<section className="py-24 bg-zinc-50/50" id="events">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Symposium Events</h2>
<p className="text-zinc-500 text-sm">Compete in technical and non-technical challenges.</p>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-3 mb-8">
<span className="p-2 bg-blue-100 text-blue-600 rounded-lg">
<svg aria-hidden="true" data-icon="lucide:cpu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</span>
<h3 className="text-xl font-medium tracking-tight">Technical Events</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 1</span>
<span className="text-sm font-medium text-zinc-900">₹300</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Paper Presentation</h4>
<p className="overflow-hidden text-xs text-zinc-500 h-10 mb-4">Present your research and innovative ideas in polymer technology.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 2</span>
<span className="text-sm font-medium text-zinc-900">₹200</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Poster Presentation</h4>
<p className="text-xs text-zinc-500 mb-4 h-10 overflow-hidden">Visual representation of concepts and case studies.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 1</span>
<span className="text-sm font-medium text-zinc-900">₹300</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">CAD Modelling</h4>
<p className="text-xs text-zinc-500 mb-4 h-10 overflow-hidden">Design complex parts using industry standard software.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 2</span>
<span className="text-sm font-medium text-zinc-900">₹200</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Technical Quiz</h4>
<p className="text-xs text-zinc-500 mb-4 h-10 overflow-hidden">Test your knowledge in chemistry and engineering.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-3 mb-8">
<span className="p-2 bg-purple-100 text-purple-600 rounded-lg">
<svg aria-hidden="true" data-icon="lucide:gamepad-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 11h4M8 9v4m7-1h.01M18 10h.01m-.69-5H6.68a4 4 0 0 0-3.978 3.59l-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258q-.01-.075-.017-.151A4 4 0 0 0 17.32 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<h3 className="text-xl font-medium tracking-tight">Non-Technical Events</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 3</span>
<span className="text-sm font-medium text-zinc-900">₹100</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Connections</h4>
<p className="text-xs text-zinc-500 mb-4 h-10 overflow-hidden">Connect the clues to find the answer.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 3</span>
<span className="text-sm font-medium text-zinc-900">₹100</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">IPL Auction</h4>
<p className="text-xs text-zinc-500 mb-4 h-10 overflow-hidden">Build your dream team with a virtual budget.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 3</span>
<span className="text-sm font-medium text-zinc-900">₹100</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Adzap</h4>
<p className="text-xs text-zinc-500 mb-4 h-10 overflow-hidden">Marketing skills with a touch of humor.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>

<div className="group bg-white p-6 rounded-2xl border border-zinc-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-semibold bg-zinc-100 px-2 py-1 rounded text-zinc-600">Tier 3</span>
<span className="text-sm font-medium text-zinc-900">₹100</span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Prove Us Wrong</h4>
<p className="text-xs text-zinc-500 mb-4 h-10 overflow-hidden">Debate and challenge existing notions.</p>
<a className="w-full block text-center py-2 rounded-lg border border-zinc-200 text-xs font-medium text-zinc-600 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors" href="https://forms.google.com/" target="_blank">Register</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-zinc-100 bg-zinc-900 text-white relative overflow-hidden" id="workshop">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-800 to-transparent opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<span className="text-brand-400 font-semibold tracking-wider text-xs uppercase mb-2 block">Premium Experience</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Exclusive Workshop: <br/>Polymer Processing</h2>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                    Dive deep into the mechanics of plastic extrusion and rubber compounding. Hands-on sessions with industry experts. Certification included upon completion.
                </p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 text-zinc-300 text-sm">
<svg aria-hidden="true" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                        Feb 15, 2026
                    </div>
<div className="flex items-center gap-2 text-zinc-300 text-sm">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        10:00 AM - 03:00 PM
                    </div>
</div>
</div>
<div className="w-full md:w-96 bg-zinc-800 p-8 rounded-2xl border border-zinc-700">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium">Workshop Pass</h3>
<span className="text-2xl font-semibold text-white">₹350</span>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                        Hands-on Training
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                        Certificate Provided
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                        Lunch Included
                    </li>
</ul>
<a className="block w-full bg-white text-zinc-900 text-center py-3 rounded-lg font-medium text-sm hover:bg-zinc-200 transition-colors" href="https://forms.google.com/" target="_blank">Register for Workshop</a>
</div>
</div>
</section>

<section className="py-24" id="passes">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Combo Passes</h2>
<p className="text-zinc-500 text-sm max-w-lg mx-auto">Get the best value by choosing a combo pass. Includes entry to multiple events and the workshop.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-zinc-200 bg-white flex flex-col hover:border-zinc-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-zinc-900">Bronze Pass</h3>
<p className="text-sm text-zinc-500">Essential participation.</p>
</div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900 mb-6">₹500</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            2 Tier-2 Technical Events
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            2 Tier-3 Non-Technical Events
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-all" href="https://forms.google.com/" target="_blank">Get Bronze</a>
</div>

<div className="p-8 rounded-2xl border border-zinc-200 bg-white flex flex-col relative shadow-xl shadow-zinc-200/50">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-3 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase">Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-zinc-900">Silver Pass</h3>
<p className="text-sm text-zinc-500">Balanced experience.</p>
</div>
<div className="text-4xl font-semibold tracking-tight text-zinc-900 mb-6">₹700</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1 Tier-1 Technical Event
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            2 Tier-3 Non-Technical Events
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all" href="https://forms.google.com/" target="_blank">Get Silver</a>
</div>

<div className="p-8 rounded-2xl border border-zinc-200 bg-gradient-to-b from-brand-50/50 to-white flex flex-col hover:border-brand-200 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-brand-900">Gold Pass</h3>
<p className="text-sm text-brand-700/70">The complete package.</p>
</div>
<div className="text-4xl font-semibold tracking-tight text-brand-900 mb-6">₹800</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1 Tier-1 Technical Event
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1 Tier-2 Technical Event
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-brand-200 text-sm font-medium text-brand-700 bg-brand-50 hover:bg-brand-100 hover:border-brand-300 transition-all" href="https://forms.google.com/" target="_blank">Get Gold</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-200 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 mb-4 text-xs font-medium uppercase tracking-wide">
                        Payment Process
                    </div>
<h2 className="text-2xl font-semibold text-zinc-900 mb-4">How to Pay</h2>
<ol className="space-y-4 text-sm text-zinc-600 list-decimal list-inside marker:text-zinc-900 marker:font-medium">
<li>Scan the UPI QR code provided.</li>
<li>Enter the exact amount corresponding to your chosen event or pass.</li>
<li>Take a clear screenshot of the payment success screen (include Transaction ID).</li>
<li>Upload the screenshot in the Google Registration Form.</li>
</ol>
<div className="mt-6 p-4 bg-zinc-50 rounded-lg border border-zinc-100 text-xs text-zinc-500 flex gap-3">
<svg aria-hidden="true" data-icon="lucide:info" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
<p>Note: Registration is only confirmed after payment verification. Please keep the Transaction ID handy.</p>
</div>
</div>
<div className="w-full md:w-64 flex flex-col items-center">
<div className="w-48 h-48 bg-white p-2 rounded-xl border border-zinc-200 shadow-sm flex items-center justify-center mb-4 relative overflow-hidden group">

<svg aria-hidden="true" data-icon="lucide:qr-code" data-width="80" height="80" role="img" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3m5 0v.01M12 7v3a2 2 0 0 1-2 2H7m-4 0h.01M12 3h.01M12 16v.01M16 12h1m4 0v.01M12 21v-1"></path></g></svg>
<div className="absolute inset-0 bg-zinc-900/5 hidden group-hover:flex items-center justify-center transition-all">
<span className="text-xs font-medium bg-white px-2 py-1 rounded shadow-sm">Your QR Here</span>
</div>
</div>
<p className="text-xs font-mono text-zinc-500">UPI ID: elastoplaz26@upi</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Previous Editions</h2>
<p className="text-zinc-500 text-sm">Glimpses from Elastoplaz '25 and '24.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
<img alt="Symposium Audience" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white text-sm font-medium">Inauguration Ceremony</span>
</div>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Lab Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Meeting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Presentation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-2xl overflow-hidden relative group">
<img alt="Students" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-16" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-semibold text-white tracking-tighter mb-4 block" href="#">ELASTOPLAZ'26</a>
<p className="text-sm leading-relaxed max-w-sm mb-6">
                    The Department of Rubber and Plastics Technology, Anna University, Chennai. <br/>
                    Fostering excellence in polymer science since 1980.
                </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm">
<li>
<span className="block text-xs text-zinc-500 uppercase tracking-wide mb-1">Student Coordinator</span>
<span className="text-white">John Doe</span>
<a className="hover:text-brand-400 transition-colors" href="tel:+919876543210">+91 98765 43210</a>
</li>
<li>
<span className="block text-xs text-zinc-500 uppercase tracking-wide mb-1">Event Head</span>
<span className="text-white">Jane Smith</span>
<a className="hover:text-brand-400 transition-colors" href="tel:+919876543211">+91 98765 43211</a>
</li>
<li>
<a className="hover:text-brand-400 transition-colors flex items-center gap-2 mt-2" href="mailto:elastoplaz26@annauniv.edu">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                            elastoplaz26@annauniv.edu
                        </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Venue</h4>
<a className="text-xs font-medium text-brand-400 mt-4 flex items-center gap-1 hover:text-brand-300" href="https://maps.google.com" target="_blank">
                    Get Directions <svg aria-hidden="true" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 text-center text-xs text-zinc-600">
            © 2026 Society of Plastics and Rubber Technologists. All rights reserved.
        </div>
</footer>



    </>
  );
}
