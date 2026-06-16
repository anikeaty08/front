import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
green: '#064e3b', // Deep emerald
greenLight: '#34d399',
orange: '#f97316', // Bright orange
dark: '#0a0a0a',
light: '#fafafa',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'reveal': 'reveal 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
reveal: {
'0%': { transform: 'scale(1.1)', filter: 'blur(10px)' },
'100%': { transform: 'scale(1)', filter: 'blur(0)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-medium text-lg tracking-tighter hover:text-brand-orange transition-colors" href="#">
                ALBATROSS<span className="text-brand-orange">.</span>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#studio">Studio</a>
<a className="px-4 py-2 rounded-full border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300" href="#contact">
                    Book 2026
                </a>
</div>

<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Golf Course Landscape" className="w-full h-full object-cover opacity-60 animate-reveal" src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
<div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-8 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
</span>
<span className="text-xs font-medium text-brand-orange tracking-wide uppercase">2026 Season Bookings Open</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Frame the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-greenLight to-emerald-600">Perfect Swing.</span>
</h1>
<p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                Global cinematography and photography for world-class golf courses, tournaments, and luxury resorts. Capturing the silence before the strike.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.7s'}}>
<a className="group relative px-8 py-3 bg-white text-black rounded-full font-medium text-sm transition-transform hover:scale-105" href="#work">
                    View Portfolio
                </a>
<a className="flex items-center gap-2 text-white hover:text-brand-orange transition-colors text-sm font-medium px-6 py-3" href="#showreel">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Watch Showreel
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</header>

<section className="md:py-32 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Selected Works</h2>
<p className="text-neutral-500 text-sm">Curated frames from the 2024-2025 tour.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm text-brand-orange hover:text-white transition-colors mt-4 md:mt-0" href="#">
                Full Archive <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 aspect-[4/5] lg:col-span-1">
<img alt="Golfer Silhouette" className="transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/839ff678-4261-4368-ac03-567d6c193f07_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-brand-orange text-xs font-medium uppercase tracking-wider mb-1">Pebble Beach</p>
<h3 className="text-white text-lg font-medium">Morning Mist</h3>
</div>
</div>

<div className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 aspect-video md:aspect-[4/5] lg:col-span-2 lg:aspect-[16/9]">
<img alt="Green Landscape" className="transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2a2a33f-3eef-49a5-8327-303a64f3e979_3840w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-brand-orange text-xs font-medium uppercase tracking-wider mb-1">Augusta National</p>
<h3 className="text-white text-lg font-medium">The 12th Hole</h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:video" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
</div>

<div className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 aspect-[4/3] lg:aspect-[4/3]">
<img alt="Bunker Shot" className="transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/120ceb7f-e5b4-471f-8098-b949727d6cf5_1600w.png"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-brand-orange text-xs font-medium uppercase tracking-wider mb-1">St Andrews</p>
<h3 className="text-white text-lg font-medium">Sand &amp; grit</h3>
</div>
</div>

<div className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-900 aspect-[4/3] lg:col-span-2 lg:aspect-[21/9]">
<img alt="Aerial Drone Shot" className="transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1535132011086-b8818f016104?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-brand-orange text-xs font-medium uppercase tracking-wider mb-1">Drone Cinematography</p>
<h3 className="text-white text-lg font-medium">Fairway From Above</h3>
</div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md rounded-full p-2">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:video" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
</div>
</div>
<div className="mt-8 flex md:hidden justify-center">
<a className="flex items-center gap-1 text-sm text-brand-orange font-medium" href="#">
                View All Projects <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</section>

<section className="bg-neutral-900/30 border-y border-white/5 py-24 px-6 relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-xl">
<span className="text-brand-orange text-xs font-medium uppercase tracking-widest mb-2 block">Expertise</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                    Tools for the modern <br/> golf aesthetic.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">

<div className="group hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-colors duration-300">
<div className="h-10 w-10 bg-brand-green/20 text-brand-greenLight rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 group-hover:text-brand-orange transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:camera" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Editorial Photography</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        High-resolution imagery for course marketing, magazines, and brand campaigns. Focusing on natural light and architectural lines.
                    </p>
</div>

<div className="group hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-colors duration-300">
<div className="h-10 w-10 bg-brand-green/20 text-brand-greenLight rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 group-hover:text-brand-orange transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:aperture" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">4K Drone Cinematography</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Licensed aerial coverage providing sweeping perspectives of course layouts. Smooth, cinematic motion tailored for broadcast.
                    </p>
</div>

<div className="group hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-colors duration-300">
<div className="h-10 w-10 bg-brand-green/20 text-brand-greenLight rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 group-hover:text-brand-orange transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor-play" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Post-Production &amp; Grading</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Professional color grading to match your brand's palette. Fast turnaround edits for social media reels and TV commercials.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by premier courses worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">

<span className="text-xl font-medium tracking-tight text-white">TAYLORMADE</span>
<span className="text-xl font-serif italic text-white">Titleist</span>
<span className="text-xl font-medium tracking-tighter text-white">PGA TOUR</span>
<span className="text-xl font-medium text-white">ROLEX</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-3xl mx-auto" id="contact">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Let's Capture the Game</h2>
<p className="text-neutral-400 text-lg">Accepting commissions for the 2026 season.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Name</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all placeholder:text-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all placeholder:text-neutral-700" placeholder="john@club.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Service Interest</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full text-center py-2 text-sm border border-neutral-800 rounded-md text-neutral-400 peer-checked:bg-brand-green/20 peer-checked:text-brand-greenLight peer-checked:border-brand-greenLight/30 transition-all hover:border-neutral-700">Photography</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full text-center py-2 text-sm border border-neutral-800 rounded-md text-neutral-400 peer-checked:bg-brand-green/20 peer-checked:text-brand-greenLight peer-checked:border-brand-greenLight/30 transition-all hover:border-neutral-700">Video</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full text-center py-2 text-sm border border-neutral-800 rounded-md text-neutral-400 peer-checked:bg-brand-green/20 peer-checked:text-brand-greenLight peer-checked:border-brand-greenLight/30 transition-all hover:border-neutral-700">Drone</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-full text-center py-2 text-sm border border-neutral-800 rounded-md text-neutral-400 peer-checked:bg-brand-green/20 peer-checked:text-brand-greenLight peer-checked:border-brand-greenLight/30 transition-all hover:border-neutral-700">Tour</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-orange/50 focus:ring-1 focus:ring-brand-orange/50 transition-all placeholder:text-neutral-700" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                Send Inquiry <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="mb-6 md:mb-0">
<a className="text-white font-medium text-2xl tracking-tighter block mb-2" href="#">
                        ALBATROSS<span className="text-brand-orange">.</span>
</a>
<p className="text-neutral-500 text-sm max-w-xs">Premium lens work for the gentleman's game.</p>
</div>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:youtube" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg></a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
<p>© 2026 Albatross Visuals. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
