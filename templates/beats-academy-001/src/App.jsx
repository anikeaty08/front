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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-1/2 aspect-square bg-blue-600/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/2 aspect-square bg-red-600/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[40%] left-[60%] w-1/3 aspect-square bg-amber-500/5 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter text-white">BEATS<span className="text-blue-500">.</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#courses">Courses</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#timings">Timings</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/5 rounded-full transition-all" href="#contact">
                Join Academy
            </a>
<button className="md:hidden text-neutral-400 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
<main className="relative z-10">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 flex flex-col items-center text-center min-h-[90vh] justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5"></iconify-icon>
                Admissions open now !
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white max-w-4xl leading-[1.1]">
                Feel the Rhythm at <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">Beats Academy</span>
</h1>
<p className="mt-6 text-lg md:text-xl text-neutral-400 max-w-2xl font-light">
                Master the art of percussion. From drums to cajon, discover your groove with expert instructors in a state-of-the-art musical environment.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)]" href="#courses">
                    Explore Classes
                    <iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 rounded-full transition-all" href="#contact">
                    Contact Us
                </a>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950/50" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Mastering the Language of Rhythm</h2>
<div className="space-y-6 text-neutral-400 text-base md:text-lg font-light leading-relaxed">
<p>
                                At Beats Academy, we believe that rhythm is the heartbeat of all music. We are dedicated to teaching the intricate arts of rhythm, timing, and instrumental skills to aspiring musicians.
                            </p>
<p>
                                Whether you are a complete beginner taking your first strike or an intermediate student looking to refine your technique, our curriculum is designed to unlock your percussive potential in a high-energy, supportive environment.
                            </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-2">
<iconify-icon className="text-xl" icon="solar:music-notes-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Expert Instructors</h3>
<p className="text-xs text-neutral-500">Learn from seasoned performers.</p>
</div>
<div className="flex flex-col gap-2">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-2">
<iconify-icon className="text-xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Dynamic Classes</h3>
<p className="text-xs text-neutral-500">High-energy practical sessions.</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative z-10">
<img alt="Student playing drums" className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -inset-4 border border-blue-500/20 rounded-3xl z-0 hidden md:block"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="courses">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Our Instruments</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto">Choose your weapon of choice. We offer specialized training across a variety of percussion instruments.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-neutral-900/40 border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 overflow-hidden hover:bg-neutral-900/80">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:vinyl-record-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Acoustic Drums</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Build a solid foundation in contemporary drumming, covering rock, jazz, and funk patterns.</p>
<a className="inline-flex items-center text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors" href="#contact">
                            Enquire Now <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-neutral-900/40 border border-white/5 hover:border-amber-500/30 rounded-2xl p-6 transition-all duration-300 overflow-hidden hover:bg-neutral-900/80">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:music-note-slider-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Djembe</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Connect with traditional African rhythms and learn the fundamental tones, slaps, and bass techniques.</p>
<a className="inline-flex items-center text-xs font-medium text-amber-400 hover:text-amber-300 transition-colors" href="#contact">
                            Enquire Now <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-neutral-900/40 border border-white/5 hover:border-red-500/30 rounded-2xl p-6 transition-all duration-300 overflow-hidden hover:bg-neutral-900/80">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Cajon (Clap Box)</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Master the acoustic versatility of the Cajon. Perfect for unplugged sessions and modern acoustic pop.</p>
<a className="inline-flex items-center text-xs font-medium text-red-400 hover:text-red-300 transition-colors" href="#contact">
                            Enquire Now <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-neutral-900/40 border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all duration-300 overflow-hidden hover:bg-neutral-900/80">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Bongos</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Dive into Afro-Cuban beats. Learn the intricate hand techniques to create vibrant, fast-paced rhythms.</p>
<a className="inline-flex items-center text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors" href="#contact">
                            Enquire Now <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950/50" id="timings">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Class Schedule</h2>
<p className="text-neutral-400 text-sm">Flexible timings designed for students and working professionals.</p>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 bg-neutral-900 border border-white/5 px-4 py-2 rounded-full w-fit">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                        IST Timezone
                    </div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden">
<div className="divide-y divide-white/5">

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-neutral-800/50 transition-colors">
<div className="flex items-center gap-4 mb-4 sm:mb-0">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<div>
<h4 className="text-base font-medium text-white">Acoustic Drums</h4>
<p className="text-xs text-neutral-500 mt-1">Beginner to Intermediate</p>
</div>
</div>
<div className="flex flex-col sm:text-right gap-1">
<span className="text-sm text-neutral-300 font-medium">Tuesday &amp; Friday</span>
<span className="text-sm text-neutral-400">7:00 PM – 8:00 PM</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-neutral-800/50 transition-colors">
<div className="flex items-center gap-4 mb-4 sm:mb-0">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<div>
<h4 className="text-base font-medium text-white">Djembe Basics</h4>
<p className="text-xs text-neutral-500 mt-1">All Levels</p>
</div>
</div>
<div className="flex flex-col sm:text-right gap-1">
<span className="text-sm text-neutral-300 font-medium">Wednesday &amp; Friday</span>
<span className="text-sm text-neutral-400">6:00 PM – 7:00 PM</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-neutral-800/50 transition-colors">
<div className="flex items-center gap-4 mb-4 sm:mb-0">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div>
<h4 className="text-base font-medium text-white">Cajon Grooves</h4>
<p className="text-xs text-neutral-500 mt-1">Acoustic Sessions</p>
</div>
</div>
<div className="flex flex-col sm:text-right gap-1">
<span className="text-sm text-neutral-300 font-medium">Wednesday &amp; Friday</span>
<span className="text-sm text-neutral-400">7:30 PM – 9:00 PM</span>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 hover:bg-neutral-800/50 transition-colors">
<div className="flex items-center gap-4 mb-4 sm:mb-0">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div>
<h4 className="text-base font-medium text-white">Bongo Techniques</h4>
<p className="text-xs text-neutral-500 mt-1">Latin Rhythms</p>
</div>
</div>
<div className="flex flex-col sm:text-right gap-1">
<span className="text-sm text-neutral-300 font-medium">Wednesday &amp; Friday</span>
<span className="text-sm text-neutral-400">10:00 AM – 11:30 AM</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col sm:flex-row items-center justify-center mb-12 gap-6">
<a className="text-sm text-neutral-400 hover:text-white flex items-center gap-1 transition-colors bg-white/5 hover:bg-white/10 px-6 py-2.5 rounded-full border border-white/10" href="https://www.instagram.com/beatsacdemy?igsh=ajFyM3lmMzE2YXo0" target="_blank">
                        Follow our Instagram <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="aspect-square rounded-xl overflow-hidden border border-white/5 group">
<img alt="Concert Drums" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border border-white/5 group">
<img alt="Djembe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border border-white/5 group hidden md:block">
<img alt="Studio Setup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-[2/1] md:col-span-2 rounded-xl overflow-hidden border border-white/5 group">
<img alt="Live Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border border-white/5 group">
<img alt="Cajon Player" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950/80" id="contact">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to Play?</h2>
<p className="text-neutral-400 text-sm md:text-base mb-10 leading-relaxed">
                            Drop us a message to schedule a trial class or ask any questions about our curriculum. We typically respond within 24 hours.
                        </p>
<div className="space-y-6">
<div className="flex items-center gap-4 group cursor-default">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Call Us</p>
<a className="text-base text-white hover:text-blue-400 transition-colors" href="tel:8208362043">8208362043</a>
</div>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Email Us</p>
<a className="text-base text-white hover:text-blue-400 transition-colors" href="mailto:beatsacademy001@gmail.com">beatsacademy001@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 p-8 rounded-2xl">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 font-medium ml-1">First Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 font-medium ml-1">Last Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 font-medium ml-1">Email Address</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-neutral-400 font-medium ml-1">Instrument of Interest</label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none">
<option disabled="" selected="" value="">Select an instrument...</option>
<option value="drums">Acoustic Drums</option>
<option value="djembe">Djembe</option>
<option value="cajon">Cajon</option>
<option value="bongos">Bongos</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5 pb-2">
<label className="text-xs text-neutral-400 font-medium ml-1">Message</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none" placeholder="Tell us about your musical background..." rows="3"></textarea>
</div>
<button className="w-full py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/5 rounded-lg transition-all flex items-center justify-center gap-2" type="submit">
                                Send Message
                                <iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="py-8 px-6 border-t border-white/5 bg-neutral-950 text-center">
<div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
<span className="text-lg font-semibold tracking-tighter text-white">BEATS<span className="text-blue-500">.</span></span>
<p className="text-xs text-neutral-500">© 2024 Beats Academy. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
