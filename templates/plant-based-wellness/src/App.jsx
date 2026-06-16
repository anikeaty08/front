import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // --- 1. Masked Staggered Word Reveal ---
            function wrapTextNodes(el) {
                const childNodes = Array.from(el.childNodes);
                for (let child of childNodes) {
                    if (child.nodeType === Node.TEXT_NODE) {
                        const text = child.nodeValue;
                        if (text.trim() === '') continue;
                        
                        const words = text.split(' ');
                        const fragment = document.createDocumentFragment();
                        
                        words.forEach((word, index) => {
                            if (word === '') return;
                            const outer = document.createElement('span');
                            outer.style.overflow = 'hidden';
                            outer.style.display = 'inline-flex';
                            outer.style.verticalAlign = 'bottom';
                            if(index < words.length - 1) outer.style.marginRight = '0.25em';
                            
                            const inner = document.createElement('span');
                            inner.textContent = word;
                            inner.style.display = 'inline-block';
                            inner.style.transform = 'translateY(110%)';
                            inner.classList.add('reveal-inner');
                            
                            outer.appendChild(inner);
                            fragment.appendChild(outer);
                        });
                        
                        el.replaceChild(fragment, child);
                    } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
                        wrapTextNodes(child);
                    }
                }
            }

            document.querySelectorAll('.reveal-text').forEach(el => {
                wrapTextNodes(el);
                gsap.to(el.querySelectorAll('.reveal-inner'), {
                    y: '0%',
                    ease: 'power4.out',
                    duration: 1.2,
                    stagger: 0.04,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%'
                    }
                });
            });

            // --- 1.5 Word Rotation with slide/blur/fade ---
            setTimeout(() => {
                const container = document.getElementById('random-body');
                if (!container) return;
                
                const words = ["Body", "Mind", "Focus", "Spirit", "Energy"];
                let currentWordIndex = 0;
                
                setInterval(() => {
                    const currentWord = words[currentWordIndex];
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    const nextWord = words[currentWordIndex];
                    
                    const oldHTML = currentWord.split('').map(c => `<span class="out-char inline-block" style="will-change: transform, opacity, filter">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
                    const newHTML = nextWord.split('').map(c => `<span class="in-char inline-block" style="opacity:0; filter:blur(8px); transform:translateY(30px); will-change: transform, opacity, filter">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
                    
                    container.innerHTML = `
                        <span class="absolute left-1/2 -translate-x-1/2 whitespace-nowrap flex">${oldHTML}</span>
                        <span class="relative flex justify-center whitespace-nowrap">${newHTML}</span>
                    `;
                    
                    container.style.position = 'relative';
                    container.style.display = 'inline-flex';
                    container.style.justifyContent = 'center';
                    
                    // Animate Out
                    gsap.to(container.querySelectorAll('.out-char'), {
                        y: -30,
                        opacity: 0,
                        filter: 'blur(8px)',
                        duration: 0.6,
                        stagger: 0.03,
                        ease: "power2.in"
                    });
                    
                    // Animate In
                    gsap.to(container.querySelectorAll('.in-char'), {
                        y: 0,
                        opacity: 1,
                        filter: 'blur(0px)',
                        duration: 0.8,
                        stagger: 0.04,
                        ease: "power3.out",
                        delay: 0.15
                    });
                    
                }, 3500); // cycle every 3.5s
            }, 2500); // wait for initial GSAP reveal stagger

            // --- 2. Parallax Background ---
            gsap.to('.parallax-bg', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.parallax-container',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center">
<div className="w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-4 h-full border-x border-gray-200/50">
<div className="border-r border-gray-200/50 hidden md:block"></div>
<div className="border-r border-gray-200/50 hidden md:block"></div>
<div className="border-r border-gray-200/50 hidden md:block"></div>
<div className="hidden md:block"></div>
</div>
</div>
<div className="relative z-10">

<nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<a className="text-3xl tracking-tight text-[#2A3B2C] font-newsreader font-light" href="#">Verdant</a>
<div className="hidden md:flex items-center gap-10 text-lg text-gray-600">
<a className="hover:text-black transition-colors font-sans" href="#">Menu</a>
<a className="hover:text-black transition-colors font-sans" href="#">Philosophy</a>
<a className="hover:text-black transition-colors font-sans" href="#">Coaching</a>
<a className="hover:text-black transition-colors font-sans" href="#">Articles</a>
</div>
<div className="flex items-center gap-6 text-lg">
<a className="hidden sm:block hover:text-gray-600 transition-colors font-sans" href="#">Sign In</a>
<a className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors font-sans" href="#">Get Started</a>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 pt-16 pb-24 flex flex-col items-center text-center">
<div className="flex items-center gap-3 mb-10 bg-white/50 backdrop-blur-sm border border-gray-200 py-1.5 px-4 rounded-full">
<div className="flex -space-x-2">
<img alt="User" className="w-7 h-7 object-cover border-[#F6F5F2] border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp"/>
<img alt="User" className="w-7 h-7 object-cover border-[#F6F5F2] border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e8dcc2a-cfdf-4807-888e-d6488bf7387d_320w.webp"/>
<img alt="User" className="w-7 h-7 object-cover border-[#F6F5F2] border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85d1a045-0b29-49e3-ac10-a754b5fca03f_320w.jpg"/>
</div>
<span className="text-sm font-medium text-gray-600 font-sans">Joined by <span className="text-black font-sans">2,500+</span> wellness seekers</span>
</div>
<h1 className="reveal-text text-5xl md:text-7xl tracking-tight leading-tight max-w-4xl text-[#2A3B2C] mb-8 font-newsreader font-light">
                Nourish Your <span className="inline-flex justify-center min-w-[3.5em] text-center" id="random-body">Body</span> from the Inside Out
            </h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed font-newsreader font-light">
                Wholesome, expertly crafted plant-based nutrition designed to elevate your daily energy, improve focus, and support sustainable wellness.
            </p>
<button className="bg-[#2A3B2C] text-white rounded-full px-8 py-4 text-lg flex items-center gap-3 hover:bg-[#1f2c21] transition-colors font-sans">
                Explore Menu
                <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</main>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="text-xs font-mono tracking-widest text-gray-400 mb-6 flex items-center gap-4">
<span>01</span><div className="h-px bg-gray-300 w-12"></div><span>SOURCING</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">

<div className="relative rounded-2xl overflow-hidden group bg-gray-200">
<img alt="Farming" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a2605e1-058f-467a-bca2-16aacdb706a0_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
<p className="text-xl tracking-tight font-newsreader font-light">Sourced directly from organic, regenerative farms.</p>
</div>
</div>

<div className="bg-[#2A3B2C] rounded-2xl p-6 relative flex flex-col items-center justify-center">
<div className="bg-[#F6F5F2] rounded-xl p-6 w-full max-w-sm shadow-xl relative z-10 transform transition-transform hover:-translate-y-2 duration-300">
<div className="flex items-center gap-4 mb-4">
<img alt="Salad" className="w-14 h-14 rounded-lg object-cover bg-gray-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5fe49f96-1c36-4800-8d69-bcddec308154_320w.webp"/>
<div>
<h3 className="text-xl tracking-tight text-[#2A3B2C] font-newsreader font-light">Quinoa Power Bowl</h3>
<p className="text-sm text-gray-500 font-sans">Lunch option</p>
</div>
</div>
<p className="text-sm text-gray-600 mb-6 leading-relaxed font-sans">
                            A dense source of complete plant protein, fiber, and essential minerals to keep you satiated.
                        </p>
<div className="space-y-3">
<div className="flex justify-between text-sm border-b border-gray-200 pb-2">
<span className="text-gray-500 font-sans">Protein</span>
<span className="font-medium font-sans">24g</span>
</div>
<div className="flex justify-between text-sm border-b border-gray-200 pb-2">
<span className="text-gray-500 font-sans">Fiber</span>
<span className="font-medium font-sans">12g</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-gray-500 font-sans">Calories</span>
<span className="font-medium font-sans">420</span>
</div>
</div>
</div>
<div className="absolute bottom-6 flex gap-2">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white/50"></div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group hidden md:block bg-gray-200">
<img alt="Active person" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/589912bf-5a13-4f0b-a17c-7e47d5c9dc1e_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
<div className="absolute top-6 left-6 right-6 text-white text-right pointer-events-none">
<p className="text-lg tracking-tight font-medium max-w-[200px] ml-auto font-sans">Fuel for sustained energy throughout your active day.</p>
</div>
<div className="absolute bottom-6 left-6 text-white pointer-events-none">
<span className="text-sm font-medium border border-white/30 rounded-full px-4 py-1.5 backdrop-blur-sm font-sans">Vitality Focus</span>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 pb-32 text-center">
<p className="text-3xl md:text-5xl leading-tight text-[#2A3B2C] tracking-tight font-newsreader font-light">
                "True wellness begins with what you put into your body. Our carefully selected, organic ingredients work synergistically to enhance <span className="inline-block border border-[#2A3B2C]/30 rounded-full px-4 py-1 transform -rotate-2 font-newsreader font-light">vitality</span> and promote long-term cellular health."
            </p>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="text-xs font-mono tracking-widest text-gray-400 mb-6 flex items-center gap-4">
<span>02</span><div className="h-px bg-gray-300 w-12"></div><span>INGREDIENTS</span>
</div>
<h2 className="reveal-text text-3xl md:text-4xl tracking-tight text-[#2A3B2C] mb-8 font-newsreader font-light">Core Botanicals</h2>
<div className="flex overflow-x-auto no-scrollbar gap-6 pb-4 gap-x-6 gap-y-6">
<div className="flex-shrink-0 w-40 flex flex-col items-center gap-4">
<div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-100">
<img alt="Kale" className="w-full h-full object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b15df25d-be73-4c25-a7c5-e6c80ce27b2d_320w.webp"/>
</div>
<span className="text-lg text-gray-700 font-sans">Lacinato Kale</span>
</div>
<div className="flex-shrink-0 w-40 flex flex-col items-center gap-4">
<div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-100">
<img alt="Sweet Potato" className="w-full h-full object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b06dff5-4ac4-47c7-9034-07a037e714da_320w.webp"/>
</div>
<span className="text-lg text-gray-700 font-sans">Sweet Potato</span>
</div>
<div className="flex-shrink-0 w-40 flex flex-col items-center gap-4 relative">
<div className="w-40 h-40 bg-[#2A3B2C] rounded-2xl flex items-center justify-center p-4 shadow-sm relative group cursor-pointer">
<img alt="Blueberries" className="w-full h-full object-contain mix-blend-screen opacity-50 group-hover:opacity-30 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/434453af-e733-4b2d-9045-ddef89cb1578_320w.webp"/>
<span className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity font-sans">View details</span>
</div>
<span className="text-lg text-gray-700 font-sans">Wild Blueberries</span>
</div>
<div className="flex-shrink-0 w-40 flex flex-col items-center gap-4">
<div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-100">
<img alt="Avocado" className="mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f742445-55e3-4a85-8e6b-fa533046e5a4_320w.jpg"/>
</div>
<span className="text-lg text-gray-700 font-sans">Hass Avocado</span>
</div>
<div className="flex-shrink-0 w-40 flex flex-col items-center gap-4">
<div className="w-40 h-40 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm border border-gray-100">
<img alt="Ginger" className="mix-blend-multiply w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c9b1bbc-9036-4150-b11a-37e01d6f4ea0_320w.jpg"/>
</div>
<span className="text-lg text-gray-700 font-sans">Fresh Ginger</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="text-xs font-mono tracking-widest text-gray-400 mb-6 flex items-center gap-4">
<span>03</span><div className="h-px bg-gray-300 w-12"></div><span>PERFORMANCE</span>
</div>
<div className="parallax-container relative rounded-3xl overflow-hidden h-[700px] flex items-center justify-center">

<img alt="Nature landscape" className="parallax-bg w-full h-[130%] object-cover absolute top-[-15%] right-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a408136d-4a5e-4dd2-a4ac-c1dcdd484319_1600w.jpg"/>
<div className="bg-black/30 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center pt-10">
<div className="flex items-center gap-2 text-white/80 text-sm font-medium mb-4 tracking-widest uppercase font-sans">
<iconify-icon height="16" icon="solar:pulse-linear" width="16"></iconify-icon>
                        Performance Metrics
                    </div>
<h2 className="reveal-text text-4xl md:text-6xl text-white tracking-tight mb-16 text-center font-newsreader font-light">
                        Unlock your natural physical potential.
                    </h2>

<div className="w-full max-w-lg backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-white mb-8">
<div className="mb-6">
<span className="text-sm text-white/70 uppercase tracking-wider block mb-2 font-sans">Track your progress</span>
<p className="text-lg font-medium leading-relaxed font-sans">A proprietary blend of adaptogens, probiotics, and micronutrients to support long-term metabolic health.</p>
</div>
<div className="space-y-6">
<div className="">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-white/70 font-sans">Chronological Age</span>
<span className="text-2xl font-newsreader font-light">32</span>
</div>
<div className="flex justify-between items-end mb-3">
<span className="text-lg font-sans">Metabolic Age</span>
<span className="text-sm text-emerald-300 font-sans">4 years younger</span>
</div>
<div className="w-full bg-white/20 rounded-full h-1">
<div className="bg-emerald-400 h-1 rounded-full w-[70%]"></div>
</div>
</div>
<div className="pt-4 border-t border-white/10">
<div className="flex justify-between items-end mb-3">
<span className="text-lg font-sans">Vitality Index</span>
<div className="text-right">
<span className="text-2xl font-newsreader font-light">88</span><span className="text-sm text-white/70 font-sans">/100</span>
<p className="text-xs text-emerald-300 mt-1 font-sans">Top 15% percentile</p>
</div>
</div>
<div className="w-full bg-white/20 rounded-full h-1 relative">
<div className="bg-white h-1 rounded-full w-[88%]"></div>
</div>
</div>
</div>
</div>
<div className="flex gap-4 w-full max-w-lg justify-between">
<div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full py-2 px-4 flex items-center gap-3 text-white">
<div className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&amp;h=50&amp;fit=crop"/>
<img alt="User" className="w-6 h-6 rounded-full border border-white/20 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&amp;h=50&amp;fit=crop"/>
</div>
<span className="text-sm font-medium font-sans">300+ Active Coaches</span>
</div>
<div className="backdrop-blur-md bg-white rounded-2xl p-4 text-[#2A3B2C] shadow-2xl absolute -right-4 lg:-right-32 bottom-20 hidden md:block">
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-1 font-sans">Verdant Impact</span>
<div className="flex items-baseline gap-1">
<span className="text-4xl tracking-tight font-newsreader font-light">5.2</span>
<span className="text-xl font-newsreader font-light">x</span>
</div>
<span className="text-sm text-gray-600 block mt-1 font-sans">Increased sustained energy</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="text-xs font-mono tracking-widest text-gray-400 mb-6 flex items-center gap-4">
<span>04</span><div className="h-px bg-gray-300 w-12"></div><span>CURATION</span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
<h2 className="reveal-text text-4xl tracking-tight text-[#2A3B2C] font-newsreader font-light">Curated Menus</h2>
<div className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar pb-2 text-2xl md:text-3xl font-serif text-gray-300">
<button className="text-[#2A3B2C] border-b border-[#2A3B2C] pb-1 font-newsreader font-light">Morning</button>
<button className="hover:text-gray-600 transition-colors font-newsreader font-light">Midday</button>
<button className="hover:text-gray-600 transition-colors font-newsreader font-light">Evening</button>
<button className="hover:text-gray-600 transition-colors font-newsreader font-light">Elixirs</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
<div>
<span className="inline-block border border-gray-300 rounded-full px-3 py-1 text-xs text-gray-600 mb-6 font-sans">Antioxidant Rich</span>
<h3 className="text-4xl tracking-tight text-[#2A3B2C] mb-4 font-newsreader font-light">Açaí Superberry Bowl</h3>
<p className="text-lg text-gray-600 mb-8 max-w-md leading-relaxed font-sans">
                        A vibrant blend of wild-harvested organic açaí, topped with house-made grain-free granola, fresh berries, and raw cacao nibs.
                    </p>
<div className="flex gap-6 text-sm text-gray-500 font-medium">
<span className="font-sans">10 mins prep</span>
<span className="w-1 h-1 rounded-full bg-gray-300 self-center"></span>
<span className="font-sans">340 kcal</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 h-80">
<img alt="Acai Bowl Preparation" className="w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad5bccd9-b4f6-4528-b96a-637397efbdbd_800w.webp"/>
<div className="relative rounded-2xl overflow-hidden group">
<img alt="Finished Acai Bowl" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b511ecb7-fd0b-4418-a9f4-07e4c0225cbe_800w.webp"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
<button className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity font-sans">View Recipe</button>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-200">
<div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 gap-4 hover:bg-white/50 transition-colors px-4 -mx-4 rounded-xl">
<div className="flex items-center gap-8 w-full md:w-1/2">
<span className="text-gray-400 text-xl font-newsreader font-light">( 1 )</span>
<h4 className="text-xl text-[#2A3B2C] font-newsreader font-light">Matcha Chia Pudding</h4>
</div>
<div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-4 md:items-center">
<p className="text-gray-600 text-base max-w-sm font-sans">Ceremonial grade matcha whisked into creamy coconut milk with omega-rich chia seeds.</p>
<div className="flex gap-4 text-sm text-gray-400 whitespace-nowrap">
<span className="font-sans">5 mins</span>
<span className="font-sans">•</span>
<span className="font-sans">280 kcal</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-200 gap-4 hover:bg-white/50 transition-colors px-4 -mx-4 rounded-xl">
<div className="flex items-center gap-8 w-full md:w-1/2">
<span className="text-gray-400 text-xl font-newsreader font-light">( 2 )</span>
<h4 className="text-xl text-[#2A3B2C] font-newsreader font-light">Smashed Edamame Toast</h4>
</div>
<div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-4 md:items-center">
<p className="text-gray-600 text-base max-w-sm font-sans">High-protein edamame mash on sourdough with microgreens and a drizzle of toasted sesame oil.</p>
<div className="flex gap-4 text-sm text-gray-400 whitespace-nowrap">
<span className="font-sans">15 mins</span>
<span className="font-sans">•</span>
<span className="font-sans">320 kcal</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24 overflow-hidden">
<div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
<div className="flex-shrink-0 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 text-gray-700 bg-white shadow-sm">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium font-sans">100% Organic</span>
</div>
<div className="flex-shrink-0 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 text-gray-700 bg-white shadow-sm">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium font-sans">Refined Sugar-Free</span>
</div>
<div className="flex-shrink-0 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 text-gray-700 bg-white shadow-sm">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium font-sans">Plant-Based</span>
</div>
<div className="flex-shrink-0 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 text-gray-700 bg-white shadow-sm">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium font-sans">Non-GMO Verified</span>
</div>
<div className="flex-shrink-0 flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2.5 text-gray-700 bg-white shadow-sm">
<iconify-icon className="text-gray-400" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-base font-medium font-sans">No Preservatives</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="bg-[#2A3B2C] rounded-[2.5rem] p-10 md:p-16 lg:p-24 text-white flex flex-col lg:flex-row gap-16 relative overflow-hidden">
<div className="absolute top-10 right-1/2 text-[150px] text-white/5 select-none pointer-events-none leading-none font-newsreader font-light">01</div>
<div className="absolute bottom-10 -right-10 text-[200px] text-white/5 select-none pointer-events-none leading-none font-newsreader font-light">02</div>
<div className="flex-1 flex flex-col justify-between relative z-10">
<div>
<h2 className="reveal-text text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 leading-[1.1] font-newsreader font-light">
                            Flexible wellness plans. Cancel anytime. Full access to our ecosystem.
                        </h2>
<p className="text-lg text-white/70 max-w-md mb-12 font-sans">
                            No hidden fees, no restrictive contracts. Just pure, guided nutrition tailored to your lifestyle.
                        </p>
</div>
<div className="">
<span className="text-base font-medium block mb-4 font-sans">Join our vibrant community</span>
<p className="text-sm text-white/60 mb-6 max-w-xs font-sans">Access exclusive local events, workshops, and connect with like-minded individuals.</p>
<div className="flex gap-4">
<img alt="Yoga" className="w-20 h-20 object-cover border-white/20 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d914b29c-2d55-4462-9d55-4caad0f3156a_320w.webp"/>
<img alt="Cooking" className="w-20 h-20 object-cover border-white/20 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1eee1c1-086d-4026-8a6b-4eb0283a0045_320w.webp"/>
</div>
</div>
</div>
<div className="flex-1 flex flex-col items-end relative z-10">
<div className="bg-[#F6F5F2] text-[#1a1a1a] rounded-3xl p-8 w-full max-w-sm mb-12 shadow-2xl">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 bg-[#2A3B2C]/10 rounded-full flex items-center justify-center">
<iconify-icon className="text-[#2A3B2C]" height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider border border-gray-300 rounded-full px-3 py-1 text-gray-600 font-sans">Most Popular</span>
</div>
<h3 className="text-2xl text-[#2A3B2C] mb-2 font-newsreader font-light">Premium Access</h3>
<p className="text-sm text-gray-600 mb-6 font-sans">Everything you need to transform your daily routine.</p>
<ul className="space-y-4 mb-8 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 mt-0.5" height="16" icon="solar:check-linear" width="16"></iconify-icon>
<span className="text-gray-700 font-sans">Unlimited recipe library access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 mt-0.5" height="16" icon="solar:check-linear" width="16"></iconify-icon>
<span className="text-gray-700 font-sans">Personalized macro tracking</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 mt-0.5" height="16" icon="solar:check-linear" width="16"></iconify-icon>
<span className="text-gray-700 font-sans">Weekly 1-on-1 coaching call</span>
</li>
</ul>
<div className="flex items-end gap-2 mb-6">
<span className="text-4xl tracking-tight font-newsreader font-light">$39</span>
<span className="text-gray-500 mb-1 font-sans">/month</span>
</div>
<button className="w-full bg-[#1a1a1a] text-white rounded-xl py-3.5 font-medium hover:bg-gray-800 transition-colors font-sans">Start Free Trial</button>
<div className="flex justify-center mt-6">
<div className="bg-gray-200 rounded-full p-1 flex text-xs font-medium text-gray-500 w-fit">
<div className="bg-white text-black rounded-full px-4 py-1.5 shadow-sm font-sans">Monthly</div>
<div className="px-4 py-1.5 font-sans">Annually (-20%)</div>
</div>
</div>
</div>
<div className="w-full grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
<div className="">
<div className="flex items-center gap-2 mb-2">
<span className="font-medium text-base font-sans">Elena M.</span>
<iconify-icon className="text-emerald-400" height="16" icon="solar:verified-check-linear" width="16"></iconify-icon>
</div>
<p className="text-xs text-white/60 leading-relaxed font-sans">"Been using Verdant recipes for 6 months. My afternoon slumps are completely gone."</p>
</div>
<div>
<div className="flex items-center gap-2 mb-2">
<span className="font-medium text-base font-sans">David K.</span>
<iconify-icon className="text-emerald-400" height="16" icon="solar:verified-check-linear" width="16"></iconify-icon>
</div>
<p className="text-xs text-white/60 leading-relaxed font-sans">"The coaching aspect is what sets this apart. Finally a sustainable approach."</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="text-xs font-mono tracking-widest text-gray-400 mb-6 flex items-center justify-center gap-4">
<div className="h-px bg-gray-300 w-12"></div><span>05</span><div className="h-px bg-gray-300 w-12"></div>
</div>
<div className="text-center mb-16">
<span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 mb-6 font-sans">Community Stories</span>
<h2 className="reveal-text text-4xl md:text-5xl tracking-tight text-[#2A3B2C] mb-4 font-newsreader font-light">
                    Join thousands of transformed lives.
                </h2>
<p className="text-lg text-gray-600 font-sans">Discover how real people are elevating their health with Verdant.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col justify-between shadow-sm">
<div>
<h3 className="text-2xl text-[#2A3B2C] mb-4 font-newsreader font-light">Verdant changed my routine</h3>
<p className="text-base text-gray-600 leading-relaxed font-sans">
                            From the very first week, the difference is noticeable—everything feels more connected, more purposeful. Week after week, that sense of progress only grows. No extreme diets, just clear, achievable habits.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
<div>
<div className="flex items-center gap-1 mb-1">
<iconify-icon className="text-black bg-black rounded-full text-white" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<span className="font-medium font-sans">4.9</span>
</div>
<span className="text-xs text-gray-500 font-sans">Average rating</span>
</div>
<span className="text-xl text-gray-400 font-newsreader font-light">Vogue</span>
</div>
</div>
<div className="bg-[#2A3B2C] rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10">
<div className="flex gap-1 mb-2 text-emerald-400">
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-white/80 mb-6 font-sans">Verified Member</p>
<h3 className="text-xl mb-4 font-newsreader font-light">"The meals are incredible."</h3>
</div>
<div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mt-4 z-10 group cursor-pointer">
<img alt="User eating" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58dbb1df-1c55-4e76-8ed9-07466c65f24a_800w.webp"/>
<div className="flex group-hover:bg-black/40 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
<iconify-icon className="text-white ml-1" height="20" icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-end min-h-[400px]">
<img alt="Workout" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db58a287-d5fd-4b44-a700-17942a7d9ff1_800w.webp"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 text-white">
<h3 className="text-2xl mb-3 leading-tight font-newsreader font-light">"My digestion is so much better now."</h3>
<p className="text-sm text-white/80 mb-4 font-sans">The product is top tier and the customer service is even better. These people really understand holistic health.</p>
<span className="text-xs uppercase tracking-wider font-semibold border-b border-white/30 pb-1 inline-block font-sans">Read full story</span>
</div>
<div className="absolute top-6 right-6 w-8 h-8 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
<iconify-icon className="text-white" height="16" icon="solar:maximize-linear" width="16"></iconify-icon>
</div>
</div>
<div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col justify-between">
<div className="">
<h3 className="text-xl text-[#2A3B2C] mb-3 font-newsreader font-light">More than just food</h3>
<p className="text-sm text-gray-600 mb-6 leading-relaxed font-sans">Verdant is a lifestyle shift. It's simple, delicious, and easy to consume. The benefits described are exactly what you experience.</p>
<div className="flex gap-2 mb-6">
<img alt="Food" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Food" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center text-xs text-gray-500 border border-gray-200 cursor-pointer hover:bg-gray-100 font-sans">
                                +12
                            </div>
</div>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-gray-100">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium font-sans">Jessica T.</span>
<iconify-icon className="text-emerald-500" height="16" icon="solar:verified-check-linear" width="16"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-sans">Verified Buyer</span>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t border-gray-200 bg-[#F6F5F2]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
<div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4 font-sans">Ready for a change?</span>
<h3 className="reveal-text text-3xl text-[#2A3B2C] mb-6 font-newsreader font-light">Start your journey. Contact us today.</h3>
<p className="text-base text-gray-600 font-sans">Join a community dedicated to feeling their absolute best every single day.</p>
</div>
<div className="md:text-center flex flex-col md:items-center">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-4 font-sans">Let's Talk</span>
<p className="text-lg text-gray-900 mb-2 font-sans">1 (800) 555-0199</p>
<a className="text-2xl text-[#2A3B2C] border-b border-gray-300 pb-1 hover:border-[#2A3B2C] transition-colors mb-8 font-newsreader font-light" href="mailto:hello@verdant.co">hello@verdant.co</a>
<div className="text-sm text-gray-500">
<p className="font-medium text-gray-900 mb-1 font-sans">Headquarters</p>
<p className="font-sans">124 Wellness Way<br/>Portland, OR 97204</p>
</div>
</div>
<div className="flex md:justify-end gap-16 text-lg text-[#2A3B2C]">
<div className="flex flex-col gap-4">
<a className="hover:text-gray-500 transition-colors font-sans" href="#">Home</a>
<a className="hover:text-gray-500 transition-colors font-sans" href="#">Our Story</a>
<a className="hover:text-gray-500 transition-colors font-sans" href="#">Journal</a>
</div>
<div className="flex flex-col gap-4">
<a className="hover:text-gray-500 transition-colors font-sans" href="#">Shop</a>
<a className="hover:text-gray-500 transition-colors font-sans" href="#">FAQ</a>
<a className="hover:text-gray-500 transition-colors font-sans" href="#">Contact</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 overflow-hidden flex justify-center">
<h2 className="text-[15vw] leading-[0.8] tracking-tighter text-[#2A3B2C] text-center w-full select-none font-newsreader font-light">
                    Verdant
                </h2>
</div>
<div className="max-w-7xl mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
<p className="font-sans">© 2024 Verdant Wellness Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-gray-700 font-sans" href="#">Privacy Policy</a>
<a className="hover:text-gray-700 font-sans" href="#">Terms of Service</a>
</div>
</div>
</footer>
</div>



    </>
  );
}
