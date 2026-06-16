import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function handleEnrollment(event) {
            event.preventDefault();
            
            const form = event.target;
            const name = form.querySelector('[name="name"]').value;
            const email = form.querySelector('[name="email"]').value;
            const phone = form.querySelector('[name="phone"]').value;
            const instrument = form.querySelector('[name="instrument"]').value;

            // Prepare the message text
            const message = `Hi Beats Academy!\n\nI am interested in joining.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nInstrument: ${instrument}`;
            const encodedMessage = encodeURIComponent(message);

            // 1. Prepare Mailto URL
            const mailtoUrl = `mailto:beatsacademy001@gmail.com?subject=New Enrollment Request - ${encodeURIComponent(name)}&body=${encodedMessage}`;
            
            // 2. Prepare WhatsApp URL
            const whatsappUrl = `https://wa.me/8446647533?text=${encodedMessage}`;

            // Open WhatsApp in a new tab
            window.open(whatsappUrl, '_blank');
            
            // Trigger Email Client in the current window
            window.location.href = mailtoUrl;

            // Optional: reset form after submission
            form.reset();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-blue-500" icon="solar:vinyl-linear" strokeWidth="1.5"></iconify-icon>
                BEATS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#instruments">Instruments</a>
<a className="hover:text-white transition-colors" href="#enroll">Enrollment</a>
</div>
<div className="flex items-center gap-4">
<a className="h-9 px-5 items-center justify-center rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors flex gap-2 shadow-[0_0_15px_rgba(255,255,255,0.2)]" href="#enroll">
                    Join Now
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 flex items-center justify-center min-h-[90vh]">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-blue-500/20 text-xs text-blue-200 mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></span>
                    Registration open for upcoming batches
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                    Feel the Beat. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white text-glow">Learn the Rhythm.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Dive into a world of pure musical energy. Master the drums, explore exotic percussions, and command strings and keys in a high-end environment built for pure passion.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-blue-600 text-white font-medium text-sm flex items-center justify-center hover:bg-blue-500 transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(59,130,246,0.3)]" href="#enroll">
                        Start Your Journey
                    </a>
<a className="h-12 px-8 rounded-full bg-white/5 text-white border border-white/10 font-medium text-sm flex items-center justify-center hover:bg-white/10 transition-colors w-full sm:w-auto backdrop-blur-md group" href="#instruments">
<iconify-icon className="mr-2 text-lg text-zinc-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Explore Instruments
                    </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden relative img-overlay border border-white/5 bg-zinc-900/30 backdrop-blur-sm group">

<div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-zinc-950 opacity-80 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center text-zinc-800">
<iconify-icon className="text-8xl opacity-20 text-blue-500/30" icon="solar:vinyl-linear"></iconify-icon>
</div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-3">The Philosophy</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6 leading-tight">
                            We breathe rhythm. <br/>We shape artists.
                        </h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6 font-light">
                            At Beats Academy, music isn't just taught—it's felt. We focus entirely on the raw energy of rhythm and the emotional power of live instrumentation.
                        </p>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-light">
                            Our academy is a sanctuary for those who want to feel every beat, strum, and key press. No distractions, just pure musical immersion in a premium, highly energetic environment.
                        </p>
<div className="grid grid-cols-2 gap-6">
<div>
<iconify-icon className="text-2xl text-blue-400 mb-3" icon="solar:bolt-linear"></iconify-icon>
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Pure Energy</h4>
<p className="text-xs text-zinc-500 font-light">High-octane learning spaces designed to inspire.</p>
</div>
<div>
<iconify-icon className="text-2xl text-blue-400 mb-3" icon="solar:music-library-2-linear"></iconify-icon>
<h4 className="text-base font-medium text-white mb-1 tracking-tight">Premium Gear</h4>
<p className="text-xs text-zinc-500 font-light">Access exclusively to top-tier, professional instruments.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="instruments">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">The Arsenal</h2>
<p className="text-sm text-zinc-400 max-w-xl mx-auto font-light">Find your weapon of choice. Master the core of rhythm and melody.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="group relative p-8 rounded-3xl bg-[#0a0f1c] border border-blue-500/30 hover:border-blue-400 transition-all duration-500 overflow-hidden flex flex-col justify-end md:col-span-2 lg:col-span-2 row-span-2 shadow-[inset_0_0_60px_rgba(59,130,246,0.1)]">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute top-8 right-8 h-16 w-16 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] backdrop-blur-md">
<iconify-icon className="text-3xl animate-[spin_10s_linear_infinite]" icon="solar:vinyl-linear"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white mb-3 tracking-tight group-hover:text-glow transition-all">Acoustic &amp; Electronic Drums</h3>
<p className="text-sm text-zinc-300 font-light max-w-md leading-relaxed">The undisputed heartbeat of our academy. Build explosive power, impeccable timing, and complex groove mastery on world-class kits.</p>
</div>
</div>

<div className="group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:box-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Clapbox</h3>
<p className="text-xs text-zinc-500 font-light">Acoustic rhythm box for intimate, raw grooves.</p>
</div>
</div>

<div className="group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:cup-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Djembe</h3>
<p className="text-xs text-zinc-500 font-light">Traditional hand percussion for dynamic, organic beats.</p>
</div>
</div>

<div className="group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between md:col-span-2 lg:col-span-1">
<iconify-icon className="text-2xl text-cyan-400 group-hover:scale-110 transition-transform" icon="solar:keyboard-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Keyboard</h3>
<p className="text-xs text-zinc-500 font-light">Synthesis and classical foundations combined.</p>
</div>
</div>

<div className="group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between">
<iconify-icon className="text-2xl text-blue-400 group-hover:scale-110 transition-transform" icon="solar:music-note-2-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Guitar</h3>
<p className="text-xs text-zinc-500 font-light">Acoustic &amp; Electric strings for modern performers.</p>
</div>
</div>

<div className="group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:round-transfer-horizontal-linear"></iconify-icon>
<div>
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Bongo</h3>
<p className="text-xs text-zinc-500 font-light">High-energy dual drums for Latin and pop rhythms.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="enroll">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-[2.5rem] bg-gradient-to-br from-zinc-900/80 to-[#050505] border border-white/10 p-8 md:p-16 relative overflow-hidden backdrop-blur-xl shadow-2xl">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-4">Take the Stage.</h2>
<p className="text-sm text-zinc-400 mb-10 max-w-md leading-relaxed font-light">
                                Reserve your spot in our upcoming sessions. Drop your details below and our team will get in touch immediately to align your passion with the perfect instrument.
                            </p>

<div className="inline-flex flex-col gap-2">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Fast Track</span>
<a className="inline-flex items-center gap-3 h-12 px-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm hover:bg-blue-500/20 transition-all hover:scale-[1.02]" href="https://wa.me/8446647533" target="_blank">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                                    Chat on WhatsApp
                                </a>
</div>
</div>

<div className="bg-[#050505]/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
<form className="space-y-5" id="enrollForm" onsubmit="handleEnrollment(event)">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" name="name" placeholder="Your Name" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Phone Number</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" name="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 px-1">Instrument of Interest</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all appearance-none cursor-pointer" name="instrument" required="">
<option className="bg-zinc-900 text-zinc-500" value="">Select an instrument...</option>
<option className="bg-zinc-900 text-white" value="Drums">Drums (Primary Focus)</option>
<option className="bg-zinc-900 text-white" value="Clapbox">Clapbox</option>
<option className="bg-zinc-900 text-white" value="Djembe">Djembe</option>
<option className="bg-zinc-900 text-white" value="Bongo">Bongo</option>
<option className="bg-zinc-900 text-white" value="Keyboard">Keyboard</option>
<option className="bg-zinc-900 text-white" value="Guitar">Guitar</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full h-12 rounded-xl bg-white text-black font-medium text-sm hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all mt-4" type="submit">
                                    Submit Application
                                </button>
<p className="text-[10px] text-zinc-500 text-center mt-3 font-light">Submitting will send your details to our team and open a direct WhatsApp chat.</p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<a className="fixed bottom-6 right-6 h-14 w-14 bg-white text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform z-50 group border border-white/10" href="https://wa.me/8446647533" target="_blank">
<iconify-icon className="text-2xl group-hover:animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
</a>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
<div className="text-center md:text-left">
<a className="text-xl font-medium tracking-tighter text-white flex items-center justify-center md:justify-start gap-2 mb-3" href="#">
<iconify-icon className="text-blue-500" icon="solar:vinyl-linear" strokeWidth="1.5"></iconify-icon>
                        BEATS
                    </a>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed font-light">
                        Elevating musical education through pure passion, world-class instruments, and relentless rhythm.
                    </p>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="mailto:beatsacademy001@gmail.com"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-zinc-600 uppercase tracking-widest font-medium">© 2024 Beats Academy. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest" href="#">Privacy</a>
<a className="text-[10px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
