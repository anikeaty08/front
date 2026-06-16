import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple interactive element for demo purposes (Navbar background on scroll)
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('bg-[#030712]/90', 'shadow-lg');
                nav.classList.remove('bg-[#030712]/50');
            } else {
                nav.classList.add('bg-[#030712]/50');
                nav.classList.remove('bg-[#030712]/90', 'shadow-lg');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-800/10 blur-[100px] pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#030712]/50 border-b border-white/5">
<div className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-8 h-8 rounded-full border border-blue-500/50 flex items-center justify-center overflow-hidden group-hover:border-blue-400 transition-colors duration-300">
<i className="w-5 h-5 text-blue-400" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-widest uppercase leading-none">Beyond Depth</span>
<span className="text-xs text-slate-500 tracking-[0.2em] uppercase mt-1">Diving Club</span>
</div>
</div>
<ul className="hidden lg:flex items-center gap-10">
<li className="relative">
<a className="text-xs font-medium tracking-widest text-white uppercase flex flex-col items-center gap-1" href="#">
                    Home
                    <span className="w-1 h-1 rounded-full bg-blue-500 absolute -bottom-3"></span>
</a>
</li>
<li><a className="text-xs font-medium tracking-widest text-slate-500 hover:text-white uppercase transition-colors" href="#about">About</a></li>
<li><a className="text-xs font-medium tracking-widest text-slate-500 hover:text-white uppercase transition-colors" href="#dives">Dives</a></li>
<li><a className="text-xs font-medium tracking-widest text-slate-500 hover:text-white uppercase transition-colors" href="#courses">Courses</a></li>
<li><a className="text-xs font-medium tracking-widest text-slate-500 hover:text-white uppercase transition-colors" href="#expeditions">Expeditions</a></li>
<li><a className="text-xs font-medium tracking-widest text-slate-500 hover:text-white uppercase transition-colors" href="#gallery">Gallery</a></li>
<li><a className="text-xs font-medium tracking-widest text-slate-500 hover:text-white uppercase transition-colors" href="#contact">Contact</a></li>
</ul>
<button className="hidden md:flex items-center gap-2 border border-slate-700 hover:border-slate-400 rounded-full px-6 py-2.5 transition-all duration-300 group bg-slate-900/30">
<span className="text-xs font-medium tracking-widest uppercase text-slate-300 group-hover:text-white">Join the Club</span>
<i className="w-3 h-3 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden z-10 noise-bg">

<div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20">
<div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
<div className="w-2 h-2 rounded-full border border-slate-700"></div>
<div className="w-2 h-2 rounded-full border border-slate-700"></div>
<div className="w-2 h-2 rounded-full border border-slate-700"></div>
<div className="w-2 h-2 rounded-full border border-slate-700"></div>
<span className="text-xs font-medium tracking-widest text-slate-600 [writing-mode:vertical-lr] rotate-180 mt-6 uppercase">Scroll</span>
</div>
<div className="container mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row relative z-10 h-full">

<div className="w-full lg:w-[55%] flex flex-col justify-center pt-10 lg:pt-0">
<h1 className="font-heading text-6xl md:text-7xl xl:text-[7rem] font-medium uppercase leading-[0.95] tracking-tighter mb-8">
<span className="block text-slate-100">Explore.</span>
<span className="block text-slate-100">Discover.</span>
<span className="block text-blue-500 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">Belong Below.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-lg mb-12 font-light leading-relaxed">
                    Beyond Depth Diving Club is more than a passion— it's a way of life. Join a global community that lives to explore the ocean and protect it.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6 mb-20 lg:mb-32">
<button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] group">
<span className="text-sm font-medium tracking-widest uppercase">Become a Member</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full sm:w-auto flex items-center justify-center gap-4 group">
<div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center bg-slate-900/50 group-hover:border-slate-400 group-hover:bg-slate-800 transition-all duration-300">
<i className="w-4 h-4 text-white ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium tracking-widest text-slate-300 group-hover:text-white uppercase transition-colors">Watch the Experience</span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-800/50 pt-8">
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-slate-400" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-200 tracking-wide uppercase mb-1">Adventure</h3>
<p className="text-base text-slate-500 leading-snug font-light">Discover breathtaking dive destinations.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-slate-400" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-200 tracking-wide uppercase mb-1">Community</h3>
<p className="text-base text-slate-500 leading-snug font-light">Connect with passionate divers worldwide.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-slate-400" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-slate-200 tracking-wide uppercase mb-1">Ocean Care</h3>
<p className="text-base text-slate-500 leading-snug font-light">Protect the ocean we all love.</p>
</div>
</div>
</div>
</div>

<div className="hidden lg:block absolute right-0 top-0 w-[55vw] h-full pointer-events-none">

<div className="absolute inset-0 portal-mask border-l border-blue-500/20 shadow-[-20px_0_100px_rgba(59,130,246,0.15)] z-20"></div>

<div className="absolute inset-0 portal-mask overflow-hidden bg-slate-900 z-10">
<img alt="Scuba Diver in Cave" className="w-full h-full object-cover object-center opacity-80 mix-blend-lighten scale-105" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#030712_100%)] opacity-90"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-transparent to-transparent w-32"></div>
</div>

<div className="absolute right-16 bottom-32 z-30 flex flex-col items-end gap-6 pointer-events-auto">

<div className="relative w-32 h-32 rounded-full border border-slate-700/60 bg-[#030712]/40 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">

<div className="absolute inset-1.5 rounded-full border border-dashed border-slate-600/40"></div>

<div className="absolute inset-3 rounded-full border border-slate-700/30"></div>
<span className="text-[10px] font-medium text-slate-400 tracking-[0.2em] mb-0.5">DEPTH</span>
<div className="flex items-start">
<span className="text-5xl font-medium text-white tracking-tighter leading-none">24</span>
</div>
<span className="text-[10px] font-medium text-slate-500 tracking-widest mt-1">M</span>

<div className="absolute bottom-4 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,1)]"></div>
</div>

<div className="flex flex-col items-end gap-1 relative before:content-[''] before:absolute before:-top-3 before:right-0 before:w-8 before:h-[1px] before:bg-blue-500/50">
<span className="text-xs font-medium text-slate-300 tracking-widest font-mono">22°17'38" N</span>
<span className="text-xs font-medium text-slate-500 tracking-widest font-mono">114°09'52" E</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 noise-bg" id="about">
<div className="container mx-auto px-6 md:px-16 lg:px-24">
<div className="flex flex-col lg:flex-row gap-20 items-center">
<div className="w-full lg:w-1/2 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
<img alt="Underwater Reef" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal hover:scale-105 transition-all duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-blue-500/50"></div>
<div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-blue-500/50"></div>
</div>
</div>
<div className="w-full lg:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-blue-500"></span>
<span className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase">The Philosophy</span>
</div>
<h2 className="font-heading text-4xl md:text-5xl font-medium uppercase tracking-tighter mb-8 leading-tight">
                        We seek what <br/> lies beneath the surface.
                    </h2>
<p className="text-lg text-slate-400 mb-6 font-light leading-relaxed">
                        Founded on the principles of exploration, conservation, and elite training, Beyond Depth is a sanctuary for those drawn to the abyss. We don't just dive; we study, we preserve, and we push the boundaries of human capability underwater.
                    </p>
<p className="text-lg text-slate-400 mb-10 font-light leading-relaxed">
                        Our members have access to uncharted wrecks, exclusive cave systems, and a network of professionals dedicated to mastering the craft of technical and recreational diving.
                    </p>
<a className="inline-flex items-center gap-3 text-sm font-medium tracking-widest uppercase text-white hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-1 w-max" href="#">
                        Read Our Manifesto
                        <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#050a14] border-t border-white/5" id="expeditions">
<div className="container mx-auto px-6 md:px-16 lg:px-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-blue-500"></span>
<span className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase">Deployments</span>
</div>
<h2 className="font-heading text-4xl md:text-5xl font-medium uppercase tracking-tighter">Upcoming Expeditions</h2>
</div>
<button className="flex items-center gap-2 border border-slate-700 hover:border-white rounded-full px-6 py-2 transition-all duration-300 text-xs font-medium tracking-widest uppercase text-slate-300 hover:text-white shrink-0">
                    View Calendar
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#080d1a] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
<div className="h-64 overflow-hidden relative">
<img alt="Cenote" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] to-transparent"></div>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-full px-3 py-1 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
<span className="text-[10px] font-medium tracking-widest text-slate-300 uppercase">Advanced</span>
</div>
</div>
<div className="p-8">
<p className="text-xs font-medium tracking-widest text-blue-400 mb-2 font-mono">Q3 • 2024</p>
<h3 className="text-2xl font-heading font-medium uppercase tracking-tighter mb-3">Yucatán Cenotes</h3>
<p className="text-base text-slate-500 font-light mb-6 line-clamp-2">Navigate the ancient underground river systems of Mexico. A technical cave diving experience requiring specialized certification.</p>
<div className="flex items-center justify-between border-t border-slate-800/60 pt-4">
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-sm font-light">Mexico</span>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="group relative bg-[#080d1a] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500">
<div className="h-64 overflow-hidden relative">
<img alt="Shipwreck" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] to-transparent"></div>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-full px-3 py-1 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-[10px] font-medium tracking-widest text-slate-300 uppercase">Intermediate</span>
</div>
</div>
<div className="p-8">
<p className="text-xs font-medium tracking-widest text-blue-400 mb-2 font-mono">Q4 • 2024</p>
<h3 className="text-2xl font-heading font-medium uppercase tracking-tighter mb-3">SS Thistlegorm</h3>
<p className="text-base text-slate-500 font-light mb-6 line-clamp-2">Explore the legendary WWII shipwreck in the Red Sea. Rich in history, marine life, and spectacular artifacts.</p>
<div className="flex items-center justify-between border-t border-slate-800/60 pt-4">
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-sm font-light">Egypt</span>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="group relative bg-[#080d1a] border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 md:hidden lg:block">
<div className="h-64 overflow-hidden relative">
<img alt="Ice Diving" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] to-transparent"></div>
<div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur border border-slate-700 rounded-full px-3 py-1 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
<span className="text-[10px] font-medium tracking-widest text-slate-300 uppercase">Expert</span>
</div>
</div>
<div className="p-8">
<p className="text-xs font-medium tracking-widest text-blue-400 mb-2 font-mono">Q1 • 2025</p>
<h3 className="text-2xl font-heading font-medium uppercase tracking-tighter mb-3">Silfra Fissure</h3>
<p className="text-base text-slate-500 font-light mb-6 line-clamp-2">Dive between two tectonic plates in crystal clear glacial water. Drysuit certification and extreme cold tolerance required.</p>
<div className="flex items-center justify-between border-t border-slate-800/60 pt-4">
<div className="flex items-center gap-2 text-slate-400">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-sm font-light">Iceland</span>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative border-t border-white/5 overflow-hidden noise-bg">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="container mx-auto px-6 md:px-16 lg:px-24">
<div className="text-center max-w-2xl mx-auto mb-20">
<div className="flex items-center justify-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-blue-500"></span>
<span className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase">Hardware</span>
<span className="w-8 h-[1px] bg-blue-500"></span>
</div>
<h2 className="font-heading text-4xl md:text-5xl font-medium uppercase tracking-tighter mb-6">Professional Grade. <br/> Always.</h2>
<p className="text-lg text-slate-400 font-light">Safety and reliability are non-negotiable at depth. We partner with the leading manufacturers to provide our members with state-of-the-art life support systems.</p>
</div>
<div className="relative w-full max-w-5xl mx-auto mt-10">

<div className="relative z-10 w-full md:w-2/3 mx-auto flex justify-center">

<div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full border border-slate-800 bg-[#080d1a] shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center before:content-[''] before:absolute before:-inset-4 before:border before:border-slate-800/50 before:rounded-full before:border-dashed">
<i className="w-24 h-24 text-slate-700" data-lucide="cpu" strokeWidth="1"></i>

<div className="absolute inset-0 flex items-center justify-center flex-col opacity-50">
<div className="w-32 h-32 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<span className="absolute text-blue-400 font-mono text-xs tracking-widest">P02 1.3</span>
</div>
</div>
</div>

<div className="hidden lg:block absolute inset-0 z-0">

<div className="absolute top-[15%] left-[10%] flex items-center gap-4">
<div className="text-right">
<h4 className="text-sm font-medium text-white uppercase tracking-wider mb-1">Closed Circuit</h4>
<p className="text-xs text-slate-500 tracking-wide">Zero bubble emissions.</p>
</div>
<div className="w-24 h-[1px] bg-slate-700 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div></div>
</div>

<div className="absolute bottom-[20%] right-[10%] flex items-center gap-4 flex-row-reverse">
<div className="text-left">
<h4 className="text-sm font-medium text-white uppercase tracking-wider mb-1">Real-time Telemetry</h4>
<p className="text-xs text-slate-500 tracking-wide">Advanced decompression algorithms.</p>
</div>
<div className="w-32 h-[1px] bg-slate-700 relative"><div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full"></div></div>
</div>
</div>
</div>
<div className="flex justify-center mt-16">
<a className="text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-white transition-colors border-b border-slate-700 hover:border-white pb-1" href="#">View Full Fleet Inventory</a>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#030712]">
<div className="container mx-auto px-6 md:px-16 lg:px-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-slate-800/50">
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-5xl md:text-6xl font-heading font-medium text-white tracking-tighter mb-2">15<span className="text-blue-500">k</span>+</span>
<span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Dives Logged</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-5xl md:text-6xl font-heading font-medium text-white tracking-tighter mb-2">120</span>
<span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Global Locations</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-5xl md:text-6xl font-heading font-medium text-white tracking-tighter mb-2">50<span className="text-blue-500">+</span></span>
<span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Reefs Restored</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-5xl md:text-6xl font-heading font-medium text-white tracking-tighter mb-2">24<span className="text-blue-500">/</span>7</span>
<span className="text-xs font-medium text-slate-500 tracking-widest uppercase">Medical Support</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative noise-bg">
<div className="container mx-auto px-6 md:px-16 lg:px-24">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-blue-500"></span>
<span className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase">The Network</span>
</div>
<h2 className="font-heading text-4xl md:text-5xl font-medium uppercase tracking-tighter mb-16">Global Community</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#080d1a] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#0a1122] transition-colors">
<div>
<i className="w-8 h-8 text-slate-700 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                            "The level of professionalism and the sheer caliber of expeditions organized by Beyond Depth are unmatched. It's transformed how I approach technical diving."
                        </p>
</div>
<div className="flex items-center gap-4 border-t border-slate-800/60 pt-6">
<div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-wide uppercase">Marcus Vance</h4>
<p className="text-xs text-slate-500 font-mono tracking-wider mt-0.5">Trimix Instructor</p>
</div>
</div>
</div>

<div className="bg-[#080d1a] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#0a1122] transition-colors relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px]"></div>
<div>
<i className="w-8 h-8 text-blue-500/30 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-8">
                            "Finding a community that cares as deeply about ocean conservation as they do about exploration is rare. This club actively funds and participates in reef restoration."
                        </p>
</div>
<div className="flex items-center gap-4 border-t border-slate-800/60 pt-6">
<div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden border border-blue-500/30">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-wide uppercase">Dr. Elena Rostova</h4>
<p className="text-xs text-blue-400 font-mono tracking-wider mt-0.5">Marine Biologist</p>
</div>
</div>
</div>

<div className="bg-[#080d1a] border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:bg-[#0a1122] transition-colors">
<div>
<i className="w-8 h-8 text-slate-700 mb-6" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                            "The gear support and logistics planning make remote deployments seamless. You can focus entirely on the dive knowing the backend is handled by experts."
                        </p>
</div>
<div className="flex items-center gap-4 border-t border-slate-800/60 pt-6">
<div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-wide uppercase">James K.</h4>
<p className="text-xs text-slate-500 font-mono tracking-wider mt-0.5">Cave Diver Level III</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-[#010308] pt-32 pb-12 border-t border-white/10 overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full flex items-end justify-center pointer-events-none opacity-5">
<h1 className="font-heading text-[20vw] leading-none font-medium uppercase tracking-tighter">DEPTH</h1>
</div>
<div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">

<div className="flex flex-col items-center text-center mb-32">
<h2 className="font-heading text-5xl md:text-7xl font-medium uppercase tracking-tighter mb-8">Ready to Descend?</h2>
<p className="text-xl text-slate-400 font-light max-w-xl mb-10">Applications for membership are currently open. Join the vanguard of underwater exploration.</p>
<button className="bg-white text-black hover:bg-slate-200 rounded-full px-10 py-5 flex items-center gap-3 transition-all duration-300 group">
<span className="text-sm font-medium tracking-widest uppercase">Initiate Sequence</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 rounded-full border border-slate-600 flex items-center justify-center">
<i className="w-3 h-3 text-slate-400" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<span className="text-sm font-medium tracking-widest uppercase">Beyond Depth</span>
</div>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-6 max-w-xs">Global diving club dedicated to technical exploration, conservation, and elite community building.</p>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-white tracking-widest uppercase mb-6">Expeditions</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Cave Systems</a></li>
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Deep Wrecks</a></li>
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Ice Diving</a></li>
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Reef Restoration</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white tracking-widest uppercase mb-6">Club</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Membership</a></li>
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Training Facility</a></li>
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Equipment Fleet</a></li>
<li><a className="text-sm text-slate-400 hover:text-blue-400 transition-colors font-light" href="#">Medical Standards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white tracking-widest uppercase mb-6">Comms</h4>
<p className="text-sm text-slate-500 font-light mb-4">Subscribe to intelligence briefings.</p>
<div className="relative">
<input className="w-full bg-[#080d1a] border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Email Address" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-slate-800 rounded hover:bg-blue-600 transition-colors text-white">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 mt-16">
<p className="text-xs text-slate-600 tracking-wider">© 2024 Beyond Depth Club. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-slate-600 hover:text-slate-400 tracking-wider transition-colors" href="#">Privacy</a>
<a className="text-xs text-slate-600 hover:text-slate-400 tracking-wider transition-colors" href="#">Terms</a>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
<span className="text-[10px] text-slate-500 tracking-widest uppercase font-mono">Systems Nominal</span>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
