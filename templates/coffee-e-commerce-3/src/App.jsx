import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'velvet-dark': '#1A2F25',
'velvet-darker': '#15221E',
'crema': '#F4EFE6',
'gold': '#A67B5B',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'gold-wave': "url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'6\\' viewBox=\\'0 0 20 6\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M0 5C2.5 5 2.5 1 5 1C7.5 1 7.5 5 10 5C12.5 5 12.5 1 15 1C17.5 1 17.5 5 20 5\\' stroke=\\'%23A67B5B\\' stroke-width=\\'1.5\\'/%3E%3C/svg%3E')",
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Initialize Icons
        lucide.createIcons();

        // Sticky Header Logic
        const header = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.remove('bg-transparent', 'py-6');
                header.classList.add('bg-velvet-dark/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
            } else {
                header.classList.add('bg-transparent', 'py-6');
                header.classList.remove('bg-velvet-dark/90', 'backdrop-blur-md', 'shadow-lg', 'py-4');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<header className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-3 items-center">

<nav className="hidden md:flex space-x-8 text-xs font-medium tracking-wide text-crema/90">
<a className="wave-link hover:text-white transition-colors" href="/home">Home</a>
<a className="wave-link hover:text-white transition-colors" href="/shop-subscribe">Shop &amp; Subscribe</a>
<a className="wave-link hover:text-white transition-colors" href="/provenance">Provenance</a>
</nav>
<div className="md:hidden">
<svg className="lucide lucide-menu w-5 h-5 text-crema" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>

<div className="flex justify-center">
<a className="flex items-center gap-2 group" href="#">
<span className="font-serif text-xl tracking-tight font-semibold text-crema group-hover:text-gold transition-colors duration-300">VELVET ORIGIN</span>
</a>
</div><div className="absolute left-1/2 -translate-x-1/2 top-[52px] hidden md:flex items-center justify-center pointer-events-none">
<span className="text-[8px] font-medium tracking-[0.4em] text-crema/40 uppercase font-sans border-t border-crema/10 pt-1.5 px-4 transition-all duration-500 hover:text-gold/60 hover:border-gold/30">The Sensory Hub</span>
</div>

<div className="flex justify-end items-center space-x-6 text-xs font-medium tracking-wide text-crema/90">
<a className="hidden md:inline-block wave-link hover:text-white transition-colors" href="#">Locations</a>
<a className="hidden md:inline-block wave-link hover:text-white transition-colors" href="/baristas-notebook">Journal</a>
<button className="hover:text-gold transition-colors">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hover:text-gold transition-colors flex items-center gap-1">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="text-[10px]">(0)</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Espresso extraction macro" className="animate-[pulse_8s_ease-in-out_infinite] opacity-60 w-full h-full object-cover scale-105" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=3840&amp;q=80" style={{animationPlayState: 'paused'}}/> 

<div className="absolute inset-0 bg-gradient-to-b from-velvet-dark/30 via-transparent to-velvet-dark"></div>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-4 mt-16">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-crema drop-shadow-lg mb-6 leading-[1.1]">
                Sip the Silence.
            </h1>
<p className="text-crema/90 text-sm md:text-base tracking-wide max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Your daily digital refuge. Small-batch roasts crafted for the moment.
            </p>
<a className="inline-flex items-center justify-center px-8 py-3 text-xs font-medium tracking-widest uppercase border border-crema/30 rounded-full hover:bg-crema hover:text-velvet-dark transition-all duration-300 backdrop-blur-sm group" href="#shop">
                Shop the Roast
                <svg className="lucide lucide-arrow-right w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="absolute bottom-8 w-full flex justify-center animate-bounce">
<svg className="lucide lucide-arrow-down w-4 h-4 text-crema/40" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</section>

<section className="py-24 bg-velvet-dark relative overflow-hidden" id="shop">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
<div className="">
<h2 className="text-2xl md:text-3xl font-serif tracking-tight mb-2">Curated Roasts</h2>
<p className="text-crema/50 text-xs tracking-wide">Small batches released weekly.</p>
</div>
<div className="flex gap-4">
<button className="p-2 rounded-full border border-crema/10 hover:border-gold/50 hover:text-gold transition-colors">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 rounded-full border border-crema/10 hover:border-gold/50 hover:text-gold transition-colors">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-16 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer product-card rounded-xl p-6 bg-white/5 border border-white/5">
<div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-[#0a0f0d] relative flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Midnight Velvet Blend" className="product-img opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d33304f-5ac4-4f82-86a9-aeb8996c7671_1600w.png" style={{}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-gold transition-colors">Midnight Velvet</h3>
<p className="text-xs text-crema/60 mb-3">Dark Roast | Chocolate, Molasses</p>
</div>
<span className="text-sm font-medium">$22.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer product-card rounded-xl p-6 bg-white/5 border border-white/5">
<div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-[#f0f0f0] relative flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img alt="Ethiopia Yirgacheffe" className="product-img opacity-90 mix-blend-multiply w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb6afc25-9b64-4162-8495-d30bd80e5db4_800w.png"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-gold transition-colors">Ethiopia Yirgacheffe</h3>
<p className="text-xs text-crema/60 mb-3">Light Roast | Jasmine, Berry</p>
</div>
<span className="text-sm font-medium">$26.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer product-card bg-white/5 border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="aspect-[3/4] overflow-hidden flex bg-[#6b3e2e] rounded-lg mb-6 relative items-center justify-center">
<img alt="Colombia Huila" className="product-img opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f9045b2-fa8f-48b3-814d-d7ef0e042575_800w.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-gold transition-colors">Colombia Huila</h3>
<p className="text-xs text-crema/60 mb-3">Medium Roast | Caramel, Citrus</p>
</div>
<span className="text-sm font-medium">$24.00</span>
</div>
</div>

<div className="min-w-[280px] md:min-w-[340px] snap-center group cursor-pointer product-card rounded-xl p-6 bg-white/5 border border-white/5">
<div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-[#1a2335] relative flex items-center justify-center">
<img alt="Decaf Mountain Water" className="product-img object-cover h-full w-full opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/945b4f7a-1de8-4139-9af3-eb40aa71a486_800w.png" style={{}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-gold transition-colors">Decaf Mountain</h3>
<p className="text-xs text-crema/60 mb-3">Medium | Fig, Brown Sugar</p>
</div>
<span className="text-sm font-medium">$23.00</span>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden flex items-center justify-center min-h-[600px]">

<div className="absolute inset-0 z-0">
<img alt="Coffee Shop Interior" className="w-full h-full object-cover blur-sm brightness-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95132470-c250-4188-aefe-2846cbe85d98_3840w.png" style={{}}/>
<div className="absolute inset-0 bg-velvet-dark/40"></div>
</div>
<div className="relative z-10 w-full max-w-5xl px-6 grid md:grid-cols-2 gap-12 items-center">

<div className="text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-900/20 text-green-400 text-[10px] tracking-wider uppercase mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Live from Downtown
                </div>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4 text-white">Find Your Focus.</h2>
<p className="text-crema/80 text-sm leading-relaxed max-w-sm">
                    Check the vibe at our sanctuary before you arrive. Optimized for deep work and quiet conversations.
                </p>
</div>

<div className="glass-panel rounded-2xl p-8 shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
<span className="text-xs font-semibold tracking-wider text-crema/60 uppercase">Sanctuary Status</span>
<svg className="lucide lucide-wifi w-4 h-4 text-crema/60" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>

<div className="grid grid-cols-1 gap-6">

<div className="group">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium flex items-center gap-2">
<svg className="lucide lucide-users w-3 h-3 text-gold" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Capacity
                            </span>
<span className="text-xs text-gold">42%</span>
</div>

<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gold w-[42%] rounded-full shadow-[0_0_10px_rgba(166,123,91,0.5)]"></div>
</div>
<p className="text-[10px] text-crema/40 mt-1.5">Plenty of space near the window.</p>
</div>

<div className="">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium flex items-center gap-2">
<svg className="lucide lucide-waves w-3 h-3 text-emerald-400" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> Noise Level
                            </span>
<span className="text-xs text-emerald-400">45dB</span>
</div>

<div className="flex items-end gap-1 h-6">
<div className="w-1 bg-emerald-400/20 h-2 rounded-sm"></div>
<div className="w-1 bg-emerald-400/40 h-3 rounded-sm"></div>
<div className="w-1 bg-emerald-400/60 h-5 rounded-sm animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-emerald-400/80 h-3 rounded-sm"></div>
<div className="w-1 bg-emerald-400/40 h-4 rounded-sm"></div>
<div className="w-1 bg-emerald-400/20 h-2 rounded-sm"></div>
<div className="w-1 bg-emerald-400/10 h-1 rounded-sm"></div>
</div>
<p className="text-[10px] text-crema/40 mt-1.5">Focus Friendly. Soft chatter.</p>
</div>

<div className="bg-black/20 rounded-lg p-3 flex items-center gap-3 border border-white/5 mt-2">
<div className="w-10 h-10 bg-gray-800 rounded overflow-hidden flex-shrink-0 relative">
<img alt="Album Art" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&amp;w=2673&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3 h-3 bg-white rounded-full"></div>
<div className="absolute w-8 h-8 rounded-full border border-white/20"></div>
</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium truncate">Blue in Green</p>
<p className="text-[10px] text-crema/50 truncate">Miles Davis</p>
</div>
<div className="flex gap-1">
<div className="w-0.5 h-2 bg-gold animate-[bounce_1s_infinite]"></div>
<div className="w-0.5 h-3 bg-gold animate-[bounce_1.2s_infinite]"></div>
<div className="w-0.5 h-2 bg-gold animate-[bounce_0.8s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-velvet-dark py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<h2 className="text-3xl md:text-4xl font-serif text-crema tracking-tight mb-4">Join the Inner Circle.</h2>
<p className="text-crema/60 text-sm mb-8 font-light max-w-sm">Get brewing guides, early access to micro-lots, and our monthly curated playlist directly to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md">
<input className="bg-transparent border-b border-crema/20 py-3 px-2 text-sm text-crema placeholder-crema/30 focus:outline-none focus:border-gold transition-colors w-full" placeholder="email@address.com" required="" type="email"/>
<button className="whitespace-nowrap px-8 py-3 bg-crema text-velvet-dark text-xs font-medium tracking-wider uppercase rounded-full hover:bg-gold hover:text-white transition-all duration-300" type="submit">
                            Subscribe
                        </button>
</form>
</div>
<div className="order-1 md:order-2 flex justify-center md:justify-end">

<div className="relative w-64 h-64 opacity-80">
<svg className="w-full h-full stroke-gold fill-none" strokeWidth="0.8" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

<path d="M40,150 Q60,180 90,180 T140,150" strokeLinecap="round"></path>
<path d="M40,150 L40,100 Q40,60 80,60"></path>
<path d="M140,150 L140,100 Q140,60 100,60"></path>
<path d="M90,20 L90,60" stroke-dasharray="4,4"></path> 
<circle cx="100" cy="100" r="30" stroke-opacity="0.3"></circle>
<circle cx="110" cy="90" fill="#A67B5B" r="5" stroke="none"></circle> 
</svg>
<div className="absolute inset-0 bg-gradient-to-t from-velvet-dark to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-velvet-darker py-20 border-t border-white/5">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

<div className="space-y-6">
<span className="font-serif text-lg tracking-tight font-semibold text-crema">VELVET ORIGIN</span>
<p className="text-xs text-crema/40 leading-relaxed max-w-[200px]">Roasted with intention in Seattle. Designed for the senses.</p>
</div>

<div className="flex flex-col space-y-4">
<h4 className="text-xs font-medium text-crema uppercase tracking-widest mb-2 opacity-50">Shop</h4>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">All Coffee</a>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">Subscriptions</a>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">Merchandise</a>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">Gift Cards</a>
</div>

<div className="flex flex-col space-y-4">
<h4 className="text-xs font-medium text-crema uppercase tracking-widest mb-2 opacity-50">Support</h4>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">Shipping</a>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">Returns</a>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">FAQ</a>
<a className="text-xs text-crema/60 hover:text-gold transition-colors" href="#">Contact</a>
</div>

<div className="flex flex-col space-y-4">
<h4 className="text-xs font-medium text-crema uppercase tracking-widest mb-2 opacity-50">Connect</h4>
<div className="flex space-x-4">
<a className="text-crema/60 hover:text-gold transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-crema/60 hover:text-gold transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-crema/60 hover:text-gold transition-colors" href="#">
<svg className="lucide lucide-music w-4 h-4" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</a>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-crema/30">
<p>© 2024 Velvet Origin. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-crema" href="#">Privacy Policy</a>
<a className="hover:text-crema" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
