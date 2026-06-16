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
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#DC2626', // Vibrant Red
dark: '#991B1B',
accent: '#FEF08A', // Energetic Yellow
},
neutral: {
850: '#1f1f1f',
}
},
animation: {
'marquee': 'marquee 25s linear infinite',
'marquee2': 'marquee2 25s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
marquee2: {
'0%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(0%)' },
},
},
}
}
}



        const countDownDate = new Date("Aug 28, 2028 08:00:00").getTime();

        const x = setInterval(function() {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
            document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
            document.getElementById("mins").innerHTML = minutes < 10 ? "0" + minutes : minutes;
            document.getElementById("secs").innerHTML = seconds < 10 ? "0" + seconds : seconds;
        }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="relative">
<div className="absolute inset-0 bg-brand transform skew-x-12 translate-x-1 translate-y-1"></div>
<span className="relative z-10 bg-black text-white font-display font-bold text-2xl px-3 py-1 -skew-x-12 inline-block">QUSAR</span>
</div>
<span className="text-neutral-900 font-display font-bold text-2xl tracking-tighter italic">MARATHON</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-neutral-600">
<a className="hover:text-brand transition-colors" href="#home">Home</a>
<a className="hover:text-brand transition-colors" href="#about">About</a>
<a className="hover:text-brand transition-colors" href="#categories">Races</a>
<a className="hover:text-brand transition-colors" href="#sponsors">Partners</a>
</div>
<button className="hidden sm:flex bg-brand hover:bg-black text-white text-sm font-semibold uppercase tracking-wider px-6 py-3 transition-all duration-300 transform -skew-x-12 hover:-translate-y-1 shadow-lg shadow-brand/30 hover:shadow-black/30">
<span className="skew-x-12">Register Now</span>
</button>
<button className="lg:hidden text-neutral-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-neutral-900" id="home">

<div className="absolute inset-0 z-0 opacity-60">
<img alt="Marathon Runners" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-brand/20 z-0 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-0"></div>

<div className="absolute top-20 right-0 w-96 h-96 bg-brand rounded-full blur-[120px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center mt-10">
<div>
<div className="inline-flex items-center gap-3 bg-brand px-4 py-1 mb-8 transform -skew-x-12 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
<span className="skew-x-12 text-white font-bold tracking-widest uppercase text-xs flex items-center gap-2">
<span className="iconify" data-icon="lucide:flame" data-width="14"></span> August 28, 2028
                    </span>
</div>
<h1 className="font-display text-7xl md:text-9xl font-bold text-white tracking-tighter leading-[0.85] mb-6 uppercase italic drop-shadow-2xl">
                    Run The <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-red-500 to-yellow-500">Peak</span>
</h1>
<p className="text-xl text-neutral-300 max-w-lg mb-10 font-medium border-l-4 border-brand pl-6">
                    The Caucasus Mountains are calling. Unleash your potential in the most exhilarating race of the decade.
                </p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="bg-brand hover:bg-white hover:text-brand text-white text-base font-bold uppercase tracking-wider px-8 py-4 transition-all transform hover:-translate-y-1 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] border-2 border-transparent hover:border-brand">
                        Secure Your Spot
                    </button>
<button className="bg-transparent hover:bg-white/10 text-white border-2 border-white text-base font-bold uppercase tracking-wider px-8 py-4 transition-colors flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play" data-width="16"></span> Watch Trailer
                    </button>
</div>
</div>

<div className="flex flex-col items-start lg:items-end">
<div className="bg-neutral-800/80 backdrop-blur-xl border-t-4 border-brand p-8 w-full max-w-md transform skew-x-[-2deg] shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-white" data-icon="lucide:timer" data-width="100"></span>
</div>
<h3 className="text-white font-display uppercase font-bold italic tracking-widest text-lg mb-6 flex items-center gap-2">
<span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-fast"></span> Start Line In
                    </h3>
<div className="grid grid-cols-4 gap-2 text-center" id="countdown">
<div className="bg-neutral-900/50 p-3 rounded border border-white/5">
<span className="text-4xl font-display font-bold text-white block" id="days">00</span>
<span className="text-[10px] uppercase text-neutral-400 font-bold">Days</span>
</div>
<div className="bg-neutral-900/50 p-3 rounded border border-white/5">
<span className="text-4xl font-display font-bold text-white block" id="hours">00</span>
<span className="text-[10px] uppercase text-neutral-400 font-bold">Hrs</span>
</div>
<div className="bg-neutral-900/50 p-3 rounded border border-white/5">
<span className="text-4xl font-display font-bold text-white block" id="mins">00</span>
<span className="text-[10px] uppercase text-neutral-400 font-bold">Min</span>
</div>
<div className="bg-brand p-3 rounded shadow-[0_0_15px_rgba(220,38,38,0.5)]">
<span className="text-4xl font-display font-bold text-white block" id="secs">00</span>
<span className="text-[10px] uppercase text-white/80 font-bold">Sec</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-brand overflow-hidden flex whitespace-nowrap py-3 border-y border-white/10 z-20 transform -rotate-1 origin-bottom-left scale-105">
<div className="animate-marquee flex items-center gap-8 text-white font-display font-bold uppercase tracking-widest text-lg italic">
<span>Registration Open</span> • <span>Early Bird Ends Soon</span> • <span>#Qusar2028</span> • <span>Run The Peak</span> • <span>Push Limits</span> • <span>Registration Open</span> • <span>Early Bird Ends Soon</span> • <span>#Qusar2028</span> • 
            </div>
<div className="animate-marquee2 absolute top-3 flex items-center gap-8 text-white font-display font-bold uppercase tracking-widest text-lg italic">
<span>Registration Open</span> • <span>Early Bird Ends Soon</span> • <span>#Qusar2028</span> • <span>Run The Peak</span> • <span>Push Limits</span> • <span>Registration Open</span> • <span>Early Bird Ends Soon</span> • <span>#Qusar2028</span> • 
            </div>
</div>
</section>

<section className="py-12 bg-neutral-900 border-b border-neutral-800 overflow-hidden">
<p className="text-center text-neutral-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Powered By World Class Partners</p>
<div className="relative w-full overflow-hidden">
<div className="flex animate-marquee whitespace-nowrap gap-24 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">

<span className="text-4xl font-display font-bold text-white italic tracking-tighter">NIKE<span className="text-brand">.RUN</span></span>
<span className="text-4xl font-display font-bold text-white tracking-widest">GARMIN</span>
<span className="text-4xl font-display font-bold text-white italic">RED<span className="text-brand">BULL</span></span>
<span className="text-4xl font-display font-bold text-white tracking-tighter">STRAVA</span>
<span className="text-4xl font-display font-bold text-white">ADIDAS</span>
<span className="text-4xl font-display font-bold text-white italic tracking-tighter">NIKE<span className="text-brand">.RUN</span></span>
<span className="text-4xl font-display font-bold text-white tracking-widest">GARMIN</span>
<span className="text-4xl font-display font-bold text-white italic">RED<span className="text-brand">BULL</span></span>
<span className="text-4xl font-display font-bold text-white tracking-tighter">STRAVA</span>
<span className="text-4xl font-display font-bold text-white">ADIDAS</span>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50 -skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 relative group">
<div className="absolute -top-4 -left-4 w-full h-full border-2 border-neutral-900 rounded-lg z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand z-20 flex items-center justify-center text-white font-bold text-2xl rotate-12 shadow-xl">
                        2028
                    </div>
<img alt="Runner tying shoes" className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?q=80&amp;w=1991&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2">
<span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block flex items-center gap-2">
<span className="w-8 h-1 bg-brand"></span> The Spirit
                    </span>
<h2 className="font-display text-5xl md:text-6xl font-bold text-neutral-900 tracking-tight mb-6 uppercase italic">Unstoppable <br/> <span className="text-stroke text-neutral-900">Energy</span></h2>
<p className="text-neutral-600 text-lg leading-relaxed mb-8 font-medium">
                        Qusar Marathon isn't just a run; it's a festival of adrenaline. We combine music, culture, and athleticism into a single explosive weekend. Feel the rhythm of the drums at every kilometer.
                    </p>
<div className="grid grid-cols-3 gap-6">
<div className="bg-neutral-900 text-white p-4 text-center transform hover:-translate-y-2 transition-transform">
<span className="block text-3xl font-display font-bold text-brand">5K+</span>
<span className="text-xs uppercase tracking-wider text-neutral-400">Athletes</span>
</div>
<div className="bg-neutral-100 p-4 text-center transform hover:-translate-y-2 transition-transform border border-neutral-200">
<span className="block text-3xl font-display font-bold text-neutral-900">42</span>
<span className="text-xs uppercase tracking-wider text-neutral-500">Nations</span>
</div>
<div className="bg-brand/10 p-4 text-center transform hover:-translate-y-2 transition-transform border border-brand/20">
<span className="block text-3xl font-display font-bold text-brand">$50K</span>
<span className="text-xs uppercase tracking-wider text-neutral-500">Prizes</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 relative clip-slant-top clip-slant-bottom" id="categories">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30"></div>
<div className="absolute top-1/2 left-0 w-full h-96 bg-brand/5 -skew-y-6 transform -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand font-bold tracking-widest uppercase text-sm mb-2">Select Your Distance</span>
<h2 className="font-display text-5xl font-bold text-white tracking-tight mb-4 uppercase italic">Choose Your <span className="text-brand">Fight</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-neutral-800 rounded-xl overflow-hidden group relative hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300">
<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="p-8">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-neutral-700/50 rounded-lg flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="28"></span>
</div>
<span className="bg-neutral-700 text-white text-xs font-bold px-2 py-1 rounded uppercase">Entry Level</span>
</div>
<h3 className="font-display text-4xl font-bold text-white mb-1 italic">5 KM</h3>
<span className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6 block">The Spark</span>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Digital Timing</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="iconify text-blue-500" data-icon="lucide:check" data-width="16"></span> Finisher Medal</li>
</ul>
<button className="w-full py-4 border border-neutral-600 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors group-hover:border-white">Details</button>
</div>
</div>

<div className="bg-neutral-800 rounded-xl overflow-hidden group relative hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-300">
<div className="absolute top-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
<div className="p-8">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-neutral-700/50 rounded-lg flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
<span className="iconify" data-icon="lucide:flame" data-width="28"></span>
</div>
<span className="bg-neutral-700 text-white text-xs font-bold px-2 py-1 rounded uppercase">Popular</span>
</div>
<h3 className="font-display text-4xl font-bold text-white mb-1 italic">10 KM</h3>
<span className="text-sm font-semibold text-neutral-400 uppercase tracking-widest mb-6 block">The Burn</span>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="iconify text-yellow-500" data-icon="lucide:check" data-width="16"></span> Tech Shirt</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="iconify text-yellow-500" data-icon="lucide:check" data-width="16"></span> Race Photos</li>
</ul>
<button className="w-full py-4 border border-neutral-600 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors group-hover:border-white">Details</button>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden group relative transform scale-105 shadow-2xl z-10 border-2 border-transparent hover:border-brand transition-all">
<div className="absolute top-0 right-0 bg-brand text-white text-xs font-bold px-4 py-1 skew-x-12 -mr-2">ELITE</div>
<div className="p-8">
<div className="flex justify-between items-start mb-6">
<div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:trophy" data-width="28"></span>
</div>
</div>
<h3 className="font-display text-4xl font-bold text-neutral-900 mb-1 italic">21 KM</h3>
<span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-6 block">Half Marathon</span>
<p className="text-sm text-neutral-600 mb-6">The ultimate challenge. Conquer the elevation and claim your glory.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-700"><span className="iconify text-brand" data-icon="lucide:star" data-width="16"></span> VIP Lounge Access</li>
<li className="flex items-center gap-3 text-sm text-neutral-700"><span className="iconify text-brand" data-icon="lucide:star" data-width="16"></span> Pro Race Kit</li>
<li className="flex items-center gap-3 text-sm text-neutral-700"><span className="iconify text-brand" data-icon="lucide:star" data-width="16"></span> Medal Engraving</li>
</ul>
<button className="w-full py-4 bg-brand text-white font-bold uppercase tracking-wider hover:bg-black transition-colors shadow-lg shadow-brand/30">Register Pro</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white bg-grid-pattern" id="map">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-white group rotate-1 hover:rotate-0 transition-all duration-500">
<img alt="Baku City Map" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-4 h-4 bg-brand rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-brand rounded-full relative border-2 border-white"></div>
</div>
</div>
<div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
<div className="flex items-center justify-between">
<h4 className="font-bold text-white uppercase italic tracking-wide">Baku City Loop</h4>
<span className="bg-brand text-white text-xs font-bold px-2 py-1 rounded">LIVE TRACKING</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-brand font-bold tracking-widest uppercase text-sm mb-2 block">The Course</span>
<h2 className="font-display text-5xl font-bold text-neutral-900 tracking-tight mb-6 uppercase italic">Scenic &amp; <br/> <span className="text-brand">Fast</span></h2>
<p className="text-neutral-600 mb-8 leading-relaxed font-medium">
                        A route designed for personal bests. Flat boulevards, coastal breezes, and the electric energy of the city support you every step of the way.
                    </p>
<div className="flex gap-4 mb-8">
<div className="bg-neutral-50 border-l-4 border-brand p-4 w-1/2">
<span className="block text-3xl font-bold text-neutral-900">140m</span>
<span className="text-xs text-neutral-500 uppercase font-semibold">Elevation Gain</span>
</div>
<div className="bg-neutral-50 border-l-4 border-brand p-4 w-1/2">
<span className="block text-3xl font-bold text-neutral-900">4</span>
<span className="text-xs text-neutral-500 uppercase font-semibold">Aid Stations</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-wide hover:gap-4 transition-all" href="#">
                        View Interactive Map <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white relative overflow-hidden" id="ai-coach">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-brand/10 to-transparent skew-x-12"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 bg-brand text-white px-3 py-1 text-xs font-bold uppercase tracking-wider mb-6 transform -skew-x-12">
<span className="skew-x-12">New Technology</span>
</div>
<h2 className="font-display text-5xl font-bold mb-6 italic uppercase">Your Digital <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-yellow-500">Pacemaker</span></h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        Data meets endurance. Our AI Coach analyzes your biometrics in real-time to adjust your pacing strategy and prevent injury.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-brand shrink-0">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<div>
<h4 className="font-bold text-white">Live Biometrics</h4>
<p className="text-sm text-neutral-500">Heart rate variability analysis every second.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-brand shrink-0">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<div>
<h4 className="font-bold text-white">Adaptive Plans</h4>
<p className="text-sm text-neutral-500">Training schedules that evolve with your progress.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 relative">
<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">

<div className="flex items-end gap-2 h-40 mb-6">
<div className="w-full bg-brand/20 rounded-t h-[40%] animate-pulse"></div>
<div className="w-full bg-brand/40 rounded-t h-[60%] animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-full bg-brand/60 rounded-t h-[30%] animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-brand rounded-t h-[80%] animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="w-full bg-brand/80 rounded-t h-[50%] animate-pulse" style={{animationDelay: '0.4s'}}></div>
<div className="w-full bg-brand/40 rounded-t h-[70%] animate-pulse" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="flex items-center gap-3 bg-neutral-800 p-4 rounded-xl border border-neutral-700">
<div className="w-10 h-10 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
<span className="iconify" data-icon="lucide:check" data-width="20"></span>
</div>
<div>
<div className="text-xs text-neutral-400 uppercase font-bold">Current Pace</div>
<div className="text-xl font-display font-bold text-white">4:45 <span className="text-sm font-normal text-neutral-500">/km</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="green">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-green-600 font-bold tracking-widest uppercase text-sm mb-2 block">Sustainability</span>
<h2 className="font-display text-4xl font-bold text-neutral-900 tracking-tight mb-4 uppercase italic">Run Clean, <span className="text-green-600">Run Green</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-neutral-50 p-8 rounded-2xl border-2 border-transparent hover:border-green-500 transition-colors group">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:leaf" data-width="32"></span>
</div>
<h3 className="font-bold text-xl text-neutral-900 mb-2">Zero Plastic</h3>
<p className="text-neutral-500 text-sm">Eliminating single-use plastics from the entire race village.</p>
</div>
<div className="bg-neutral-50 p-8 rounded-2xl border-2 border-transparent hover:border-green-500 transition-colors group">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:trees" data-width="32"></span>
</div>
<h3 className="font-bold text-xl text-neutral-900 mb-2">Reforestation</h3>
<p className="text-neutral-500 text-sm">One registration equals one tree planted in the Qusar valley.</p>
</div>
<div className="bg-neutral-50 p-8 rounded-2xl border-2 border-transparent hover:border-green-500 transition-colors group">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="32"></span>
</div>
<h3 className="font-bold text-xl text-neutral-900 mb-2">Electric Logistics</h3>
<p className="text-neutral-500 text-sm">100% electric vehicle fleet for race support and logistics.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display text-4xl font-bold text-neutral-900 tracking-tight mb-12 text-center uppercase italic">Questions?</h2>
<div className="space-y-4">
<details className="group bg-white border border-neutral-200 rounded-lg open:shadow-lg transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-neutral-900 hover:text-brand transition-colors">
                        Where can I pick up my race kit?
                        <span className="iconify transform group-open:rotate-180 transition-transform text-neutral-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed pt-2">
                        Race kits can be collected at the Expo Center in Baku on Aug 26-27, or at the start line in Qusar on race morning (VIP only).
                    </div>
</details>
<details className="group bg-white border border-neutral-200 rounded-lg open:shadow-lg transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-neutral-900 hover:text-brand transition-colors">
                        Is there a bag drop facility?
                        <span className="iconify transform group-open:rotate-180 transition-transform text-neutral-400" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed pt-2">
                        Yes, a secure bag drop area is available near the start line. Please use the official bag provided in your race kit.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-brand text-white text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="font-display text-5xl md:text-8xl font-bold mb-8 uppercase italic tracking-tighter transform -rotate-1">Don't Miss The <br/> Start Gun</h2>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<button className="bg-white text-brand hover:bg-black hover:text-white font-bold uppercase tracking-wider px-12 py-5 rounded shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] transition-all transform hover:-translate-y-1">
                    Register Now
                </button>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-20 pb-10 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6 group" href="#">
<span className="bg-white text-black font-display font-bold text-xl px-2 py-1 -skew-x-12">QUSAR</span>
<span className="text-white font-display font-bold text-xl italic">MARATHON</span>
</a>
<p className="text-neutral-500 text-sm mb-6">The premier athletic event of the Caucasus. Certified by AIMS.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-brand transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-brand transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center hover:bg-brand transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-neutral-800 pb-2 inline-block">Race Info</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-medium">
<li><a className="hover:text-brand transition-colors" href="#">Route Map</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Start List</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Results</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Photos</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-neutral-800 pb-2 inline-block">Support</h4>
<ul className="space-y-3 text-sm text-neutral-400 font-medium">
<li><a className="hover:text-brand transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Volunteers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Sponsorship</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-neutral-800 pb-2 inline-block">Stay Updated</h4>
<form className="flex flex-col gap-3">
<input className="bg-neutral-800 border border-neutral-700 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-brand w-full transition-colors font-medium" placeholder="Enter your email" type="email"/>
<button className="bg-brand text-white hover:bg-white hover:text-brand transition-colors px-4 py-3 rounded text-sm font-bold uppercase tracking-wide">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-medium uppercase tracking-wide">
<p>© 2028 Qusar Marathon. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
