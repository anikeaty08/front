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



        gsap.registerPlugin(ScrollTrigger);

        function splitTextForReveal(element) {
            const text = element.textContent.trim();
            const words = text.split(' ');
            element.textContent = '';
            words.forEach(word => {
                const wrapper = document.createElement('span');
                wrapper.classList.add('word-wrapper');
                const inner = document.createElement('span');
                inner.classList.add('word-inner');
                inner.textContent = word + '\u00A0';
                wrapper.appendChild(inner);
                element.appendChild(wrapper);
            });
        }

        document.querySelectorAll('.reveal-text').forEach(element => {
            splitTextForReveal(element);
            const innerWords = element.querySelectorAll('.word-inner');
            gsap.to(innerWords, {
                y: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        gsap.to("#hero-bg", {
            yPercent: 30,
            ease: "none",
            scrollTrigger: {
                trigger: "#hero-section",
                start: "top top",
                end: "bottom top",
                scrub: true
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference">
<div className="flex items-center gap-2">
<iconify-icon height="28" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase">Ms. Gloria's TLC</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight bg-stone-900/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
<a className="hover:opacity-70 transition" href="#">Home</a>
<a className="hover:opacity-70 transition" href="#about">About</a>
<a className="hover:opacity-70 transition" href="#services">Services</a>
<a className="hover:opacity-70 transition" href="#contact">Contact</a>
</div>
<button className="bg-white text-stone-950 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-stone-200 transition">
            Client Portal
        </button>
</nav>

<header className="relative w-full h-screen min-h-[800px] overflow-hidden" id="hero-section">
<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Caregiver holding hand" className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover filter brightness-[0.65] will-change-transform" id="hero-bg" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&amp;w=2000"/>
</div>
<div className="flex flex-col md:px-12 md:pb-24 text-white pr-6 pb-12 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end z-10">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
<div>
<div className="flex items-center gap-2 mb-6 opacity-80">
<div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></div>
<span className="text-xs font-medium tracking-wide uppercase">Certified Nursing Assistants</span>
</div>
<h1 className="reveal-text leading-[1.05] md:text-7xl text-5xl tracking-tighter mb-6 font-light">The TLC your loved ones deserve.</h1>
</div>
<div className="flex flex-col items-start lg:items-end justify-end gap-8">
<p className="text-lg md:text-xl font-light leading-relaxed max-w-md text-left lg:text-right opacity-90 tracking-tight">
                        Specially trained caregivers providing the support needed to live safely and comfortably at home for as long as possible.
                    </p>
<div className="flex gap-4">
<a className="group flex items-center gap-3 bg-white text-stone-950 pl-6 pr-2 py-2 rounded-full transition hover:bg-stone-200" href="#about">
<span className="text-xs font-medium">Learn More</span>
<div className="w-8 h-8 bg-stone-950 rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition duration-300">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto w-full flex justify-between text-xs font-medium uppercase tracking-widest opacity-50 mt-12 border-t border-white/20 pt-6">
<span>In-Home Exceptional Care</span>
<span>Licensed • Bonded • Insured</span>
</div>
</div>
</header>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto" id="about">
<div className="flex justify-between items-baseline mb-12 border-b border-stone-200 pb-4">
<span className="text-xs text-stone-400 uppercase tracking-widest">/ 01 Our Commitment</span>
<span className="text-xs text-stone-400 font-mono">[ 01 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<h2 className="reveal-text text-4xl md:text-5xl tracking-tighter text-stone-900 leading-tight mb-8 font-light">Care tailored to your family's unique journey.</h2>
<p className="text-stone-500 text-lg leading-relaxed mb-8 tracking-tight">
                    Whether a family member needs a little extra help around the house, assistance during recovery from surgery, or someone to check in throughout the week, our services are planned specifically for you.
                </p>
<div className="bg-stone-100 p-8 rounded-[32px] border border-stone-200">
<p className="text-stone-600 italic font-light leading-relaxed tracking-tight">
                        "We modify the plan for your family member as their needs change, ensuring the highest level of continuity and comfort."
                    </p>
<div className="mt-6 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-stone-900">Ms. Gloria</span>
<span className="block text-xs text-stone-400">Founder &amp; CEO</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 relative h-[600px] overflow-hidden rounded-[40px] group border border-stone-200 shadow-sm">
<img alt="Caregiver with senior" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 to-transparent flex flex-col justify-end p-12">
<div className="flex gap-4">
<div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex-1">
<span className="text-3xl font-light text-white block mb-1 tracking-tighter">CNA</span>
<span className="text-xs uppercase tracking-widest text-teal-300">Certified Expertise</span>
</div>
<div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex-1">
<span className="text-3xl font-light text-white block mb-1 tracking-tighter">TLC</span>
<span className="text-xs uppercase tracking-widest text-teal-300">Compassionate Care</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 bg-stone-950 text-white rounded-[48px] max-w-[1600px] mx-auto overflow-hidden" id="services">
<div className="flex justify-between items-baseline mb-16 border-b border-white/10 pb-4">
<span className="text-xs text-stone-500 uppercase tracking-widest">/ 02 Specialized Services</span>
<span className="text-xs text-stone-500 font-mono">[ 02 ]</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="text-5xl tracking-tighter font-light mb-8">Personal &amp; Specialized Clinical Care</h2>
<p className="text-stone-400 text-lg max-w-md tracking-tight">Comprehensive support ranging from chronic condition management to daily companionship.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div className="flex gap-4">
<iconify-icon className="text-teal-400" icon="solar:brain-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<div>
<h4 className="font-medium text-lg mb-1 tracking-tight">Alzheimer’s &amp; Dementia</h4>
<p className="text-sm text-stone-500 font-light">Specialized memory care protocols for peace of mind.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-teal-400" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<div>
<h4 className="font-medium text-lg mb-1 tracking-tight">Hospice Support</h4>
<p className="text-sm text-stone-500 font-light">End-of-life care with dignity and respect.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-teal-400" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<div>
<h4 className="font-medium text-lg mb-1 tracking-tight">Post-Surgical Care</h4>
<p className="text-sm text-stone-500 font-light">Living assistance during critical recovery periods.</p>
</div>
</div>
<div className="flex gap-4">
<iconify-icon className="text-teal-400" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<div>
<h4 className="font-medium text-lg mb-1 tracking-tight">Companionship</h4>
<p className="text-sm text-stone-500 font-light">Daily social interaction and mental stimulation.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white/5 border border-white/5 p-8 rounded-[32px] hover:bg-white/10 transition group">
<iconify-icon className="mb-6 text-teal-400" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-4 tracking-tight">Medication &amp; Vitals</h3>
<ul className="text-stone-400 text-sm space-y-3 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Medication Reminders</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Catheter/Ostomy (Empty Only)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Doctor Communication</li>
</ul>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-[32px] hover:bg-white/10 transition group">
<iconify-icon className="mb-6 text-teal-400" icon="solar:bath-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-4 tracking-tight">Personal Grooming</h3>
<ul className="text-stone-400 text-sm space-y-3 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Bathing Assistance</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Dressing &amp; Hygiene</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Incontinence Care</li>
</ul>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-[32px] hover:bg-white/10 transition group">
<iconify-icon className="mb-6 text-teal-400" icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-xl font-medium mb-4 tracking-tight">Daily Logistics</h3>
<ul className="text-stone-400 text-sm space-y-3 font-light">
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Grocery &amp; Pharmacy Errands</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Meals &amp; Menu Planning</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500/50" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Appointment Scheduling</li>
</ul>
</div>
</div>
</section>

<section className="px-6 py-24 md:px-12 max-w-[1600px] mx-auto" id="contact">
<div className="bg-stone-100 rounded-[48px] p-8 md:p-16 border border-stone-200 flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/2">
<span className="text-xs text-teal-600 uppercase font-medium tracking-widest block mb-4">/ 03 Get Started</span>
<h2 className="text-4xl md:text-6xl tracking-tighter text-stone-900 mb-8 font-light">Bring professional TLC to your home.</h2>
<div className="flex items-center gap-4 bg-white p-6 rounded-[24px] border border-stone-200 inline-flex shadow-sm">
<div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase text-stone-400 font-medium tracking-widest mb-0.5">Direct Line</span>
<span className="text-lg font-medium text-stone-900">(415) 789-3456</span>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-stone-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium tracking-widest text-stone-400 ml-1">Full Name</label>
<input className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-100 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-500/10 transition" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium tracking-widest text-stone-400 ml-1">Email Address</label>
<input className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-100 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-500/10 transition" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium tracking-widest text-stone-400 ml-1">Service Required</label>
<select className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-100 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-500/10 transition appearance-none">
<option>Alzheimer's Care</option>
<option>Companionship</option>
<option>Post-Surgical Care</option>
<option>Other Services</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-[10px] uppercase font-medium tracking-widest text-stone-400 ml-1">Message</label>
<textarea className="w-full px-4 py-3.5 rounded-2xl bg-stone-50 border border-stone-100 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-teal-500/10 transition" rows="4"></textarea>
</div>
<button className="w-full bg-teal-900 text-white py-4 rounded-2xl text-xs font-medium uppercase tracking-widest hover:bg-teal-800 transition shadow-lg shadow-teal-900/10">
                        Request a Care Plan
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-stone-950 text-white px-6 py-24 md:px-12">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-teal-400" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<span className="text-2xl font-medium tracking-tighter uppercase">Ms. Gloria's TLC</span>
</div>
<h3 className="text-2xl font-light text-stone-500 mb-8 max-w-sm tracking-tight leading-snug">Exceptional in-home care services for the ones you love most.</h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="simple-icons:facebook" width="16"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition" href="#"><iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon></a>
</div>
</div>
<div>
<span className="text-[10px] uppercase font-medium tracking-widest text-stone-600 block mb-6">Explore</span>
<ul className="space-y-4 text-sm font-light text-stone-400">
<li><a className="hover:text-teal-400 transition" href="#">Home</a></li>
<li><a className="hover:text-teal-400 transition" href="#about">Our Commitment</a></li>
<li><a className="hover:text-teal-400 transition" href="#services">Specialized Care</a></li>
<li><a className="hover:text-teal-400 transition" href="#contact">Contact Us</a></li>
</ul>
</div>
<div>
<span className="text-[10px] uppercase font-medium tracking-widest text-stone-600 block mb-6">Compliance</span>
<ul className="space-y-4 text-sm font-light text-stone-400">
<li><a className="hover:text-teal-400 transition" href="http://msgloria.com/Privacy_Rights.pdf" target="_blank">Patient Privacy Policy</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Caregiver Login</a></li>
<li><a className="hover:text-teal-400 transition" href="#">Terms of Use</a></li>
</ul>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-stone-600 tracking-wider uppercase">
<span>© 2025 Ms. Gloria's TLC llc. All rights reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<span>Certified Nursing Assistant Agency</span>
</div>
</div>
</footer>


    </>
  );
}
