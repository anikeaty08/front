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



        <section class="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
            <div class="hero-image-overlay" style="background-image: url('https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/68d10e8473c859ff1549c607.jpeg');"></div>
            
            <div class="relative z-10">
                <h1 class="text-7xl md:text-[14rem] font-black tracking-tighter mb-4 leading-none italic uppercase wild-glitch">
                    JESUS IS<br>THE DOOR.
                </h1>
                <div class="flex items-center justify-center gap-12 mb-16">
                    <div class="h-[4px] w-24 bg-white"></div>
                    <span class="mono text-lg uppercase tracking-[0.5em] font-black">Wear The Way</span>
                    <div class="h-[4px] w-24 bg-white"></div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-center gap-10">
                    <button class="btn-primary text-2xl" onclick="showPage('drop')">Shop Easter Drop</button>
                    <button class="btn-secondary text-2xl">Access Data List</button>
                </div>
            </div>
        </section>

        <section class="py-48 container mx-auto px-6 section-reveal">
            <h2 class="text-7xl font-black italic uppercase tracking-tighter mb-24 border-l-8 border-white pl-12">ABIDE_COLLECTION</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
                <!-- STORM PROOF TEE -->
                <div class="product-card group cursor-pointer" onclick="showProduct('storm-proof')">
                    <div class="img-container aspect-[3/4]">
                        <img src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69856d580708e4197d030d11.png" class="product-image-fit" alt="STORM PROOF TEE">
                        <div class="absolute top-4 right-4 mono text-[10px] bg-white text-black px-2 py-1 font-black">240 GSM</div>
                    </div>
                    <div class="p-10 border-t-2 border-zinc-900 bg-zinc-900/10">
                        <h3 class="font-black uppercase text-2xl mb-2 tracking-tight group-hover:text-red-500">STORM PROOF TEE</h3>
                        <p class="mono text-xs text-zinc-400 uppercase">Industrial Box Fit // ABIDE</p>
                        <button class="btn-primary w-full text-xs mt-10 py-4">View Specs</button>
                    </div>
                </div>
                <!-- OLIVES IN THE NIGHT TEE -->
                <div class="product-card group cursor-pointer" onclick="showProduct('olives-night')">
                    <div class="img-container aspect-[3/4]">
                        <img src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69857a20d017c3002fce6967.png" class="product-image-fit" alt="OLIVES IN THE NIGHT TEE">
                        <div class="absolute top-4 right-4 mono text-[10px] bg-white text-black px-2 py-1 font-black">240 GSM</div>
                    </div>
                    <div class="p-10 border-t-2 border-zinc-900 bg-zinc-900/10">
                        <h3 class="font-black uppercase text-2xl mb-2 tracking-tight group-hover:text-red-500">OLIVES IN THE NIGHT</h3>
                        <p class="mono text-xs text-zinc-400 uppercase">Industrial Box Fit // ABIDE</p>
                        <button class="btn-primary w-full text-xs mt-10 py-4">View Specs</button>
                    </div>
                </div>
                <!-- SILENCE & THUNDER TEE -->
                <div class="product-card group cursor-pointer" onclick="showProduct('silence-thunder')">
                    <div class="img-container aspect-[3/4]">
                        <img src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69857d3fd017c3a167ceffbb.png" class="product-image-fit" alt="SILENCE & THUNDER TEE">
                        <div class="absolute top-4 right-4 mono text-[10px] bg-white text-black px-2 py-1 font-black">240 GSM</div>
                    </div>
                    <div class="p-10 border-t-2 border-zinc-900 bg-zinc-900/10">
                        <h3 class="font-black uppercase text-2xl mb-2 tracking-tight group-hover:text-red-500">SILENCE & THUNDER</h3>
                        <p class="mono text-xs text-zinc-400 uppercase">Industrial Box Fit // ABIDE</p>
                        <button class="btn-primary w-full text-xs mt-10 py-4">View Specs</button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 7 Touch Points Banner -->
        <section class="py-48 bg-white text-black section-reveal">
            <div class="container mx-auto px-6">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div>
                        <h2 class="text-8xl font-black italic uppercase leading-none mb-12 wild-glitch">Built Like<br>A Label.</h2>
                        <p class="text-2xl font-bold mb-16 tracking-tight leading-relaxed uppercase">Every PORTAL/s garment carries seven intentional details—identity, message, Scripture anchor, and a TAP HERE access point. No shortcuts. No generic prints.</p>
                        <button class="btn-primary bg-black text-white border-black text-xl" onclick="showPage('touchpoints')">See Technical Points</button>
                    </div>
                    <div class="aspect-square bg-zinc-200 border-[12px] border-black flex items-center justify-center p-20 relative">
                         <div class="absolute top-4 left-4 mono text-[10px] font-black">[ DATA_VIZ_31 ]</div>
                         <div class="text-[12px] mono text-zinc-500 border-2 border-dashed border-zinc-400 p-12 text-center italic font-bold"> [ SPEC_MAP_STORM_PROOF ] </div>
                    </div>
                </div>
            </div>
        </section>
    


        <section class="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            <div class="hero-image-overlay" style="background-image: url('https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/68d10e8473c859ff1549c607.jpeg');"></div>
            <h1 class="text-9xl md:text-[16rem] font-black italic uppercase wild-glitch tracking-tighter">THE ASSIGNMENT</h1>
            <p class="mono text-xl uppercase text-zinc-200 mt-4 mb-20 italic tracking-[1em] font-black">You are the Portal.</p>
            <div class="flex flex-col md:flex-row gap-8">
                <button class="btn-primary px-20 py-8 text-3xl">Shop Current Drop</button>
                <button class="btn-secondary px-20 py-8 text-3xl">Get Early Access</button>
            </div>
        </section>

        <section class="py-48 container mx-auto px-6">
             <div class="max-w-6xl mx-auto bg-zinc-900/50 border-4 border-white p-20 mb-48 text-left relative">
                <div class="absolute top-0 right-0 bg-white text-black font-black px-4 py-1 mono text-xs uppercase">Encrypted_Message</div>
                <h2 class="text-6xl font-black italic uppercase mb-12">The 7 Touch Points</h2>
                <p class="text-2xl text-zinc-200 mb-20 font-medium leading-relaxed uppercase">Each piece is built with seven deliberate touch points—so the message stays clean and the quality stays premium. Industrial durability. Scripture order.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 mono text-xs uppercase font-black">
                    <div class="border-b-2 border-zinc-800 py-6 flex justify-between"><span>Front Mark</span> <span class="text-white">ID_STAMP</span></div>
                    <div class="border-b-2 border-zinc-800 py-6 flex justify-between"><span>Back Statement</span> <span class="text-white">MSG_CORE</span></div>
                    <div class="border-b-2 border-zinc-800 py-6 flex justify-between"><span>Scripture Ref</span> <span class="text-white">ANCHOR_v1</span></div>
                    <div class="border-b-2 border-zinc-800 py-6 flex justify-between"><span>Application Line</span> <span class="text-white">WALK_PROTOCOL</span></div>
                    <div class="border-b-2 border-zinc-800 py-6 flex justify-between"><span>Inside Neck</span> <span class="text-white">HIDDEN_BUILD</span></div>
                    <div class="border-b-2 border-zinc-800 py-6 flex justify-between"><span>Woven Label</span> <span class="text-white">CRAFT_FINISH</span></div>
                    <div class="col-span-full border-2 border-red-600 p-8 flex justify-between items-center mt-12 bg-red-900/10">
                        <span class="text-red-500 text-xl font-black">TAP HERE NFC ACCESS</span> 
                        <span class="text-red-500 font-black animate-pulse">[ ACTIVE ]</span>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-20">
                <div class="product-card group cursor-pointer" onclick="showProduct('storm-proof')">
                    <div class="aspect-square img-container"><img src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69856d580708e4197d030d11.png" class="product-image-fit" alt="TEE"></div>
                    <div class="p-10 bg-zinc-900/20"><h3 class="font-black uppercase text-2xl">STORM PROOF</h3><button class="btn-primary w-full mt-8 py-3 text-xs">Technical Specs</button></div>
                </div>
                <div class="product-card group cursor-pointer" onclick="showProduct('olives-night')">
                    <div class="aspect-square img-container"><img src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69857a20d017c3002fce6967.png" class="product-image-fit" alt="TEE"></div>
                    <div class="p-10 bg-zinc-900/20"><h3 class="font-black uppercase text-2xl">OLIVES NIGHT</h3><button class="btn-primary w-full mt-8 py-3 text-xs">Technical Specs</button></div>
                </div>
                <div class="product-card group cursor-pointer" onclick="showProduct('silence-thunder')">
                    <div class="aspect-square img-container"><img src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69857d3fd017c3a167ceffbb.png" class="product-image-fit" alt="TEE"></div>
                    <div class="p-10 bg-zinc-900/20"><h3 class="font-black uppercase text-2xl">SILENCE THUNDER</h3><button class="btn-primary w-full mt-8 py-3 text-xs">Technical Specs</button></div>
                </div>
            </div>
        </section>
    


        <section class="py-48 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div class="img-container aspect-[3/4] bg-zinc-900 border-8 border-white cursor-zoom-in">
                 <img src="${img}" class="product-image-fit" alt="DETAIL">
                 <div class="absolute bottom-4 left-4 mono text-[12px] bg-white text-black p-4 font-black">ITEM_CODE: PRTL-001</div>
            </div>
            <div>
                <h1 class="text-8xl font-black italic mb-4 uppercase wild-glitch">${title}</h1>
                <p class="text-6xl font-black mono mb-12 border-b-4 border-white pb-8 tracking-tighter">$65.00 AUD</p>
                
                <!-- ALBUM INTEGRATION BLOCK -->
                <div class="album-integration">
                    <img src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/6985d7ebd017c320b6dc8d5d.jpg" class="w-32 h-32 object-cover border-2 border-white grayscale hover:grayscale-0 transition-all" alt="ABIDE ALBUM">
                    <div>
                        <h4 class="mono text-[10px] font-black text-red-600 uppercase mb-2">Connected_Project: [ ABIDE ]</h4>
                        <p class="text-lg font-black uppercase tracking-tight">Indie Psalmists - ABIDE Album</p>
                        <p class="mono text-[10px] text-zinc-500 uppercase mt-2 font-bold">RELEASING EASTER FRIDAY</p>
                    </div>
                </div>

                <div class="space-y-12 bg-white text-black p-12 border-l-[20px] border-red-600 mt-12">
                    <h4 class="mono text-lg uppercase font-black tracking-widest">[ TECHNICAL_BUILD_REPORT ]</h4>
                    <ul class="mono text-sm space-y-6 uppercase font-bold">
                        <li class="flex justify-between border-b border-zinc-200 pb-4"><span>Collection</span> <span>ABIDE</span></li>
                        <li class="flex justify-between border-b border-zinc-200 pb-4"><span>Density</span> <span>240 GSM Heavy Cotton</span></li>
                        <li class="flex justify-between border-b border-zinc-200 pb-4 font-black"><span>Walk Protocol</span> <span>${appLine}</span></li>
                        <li class="flex justify-between text-red-600 font-black pt-4"><span>NFC PROTOCOL</span> <span>[ ACCESS_GRANTED ]</span></li>
                    </ul>
                </div>
                
                <button class="btn-primary w-full mt-16 py-10 text-4xl">Deploy to Cart</button>
                <button onclick="showPage('home')" class="mono text-sm uppercase text-zinc-400 block text-center mt-12 hover:text-white underline tracking-widest">Back to Data Logs</button>
            </div>
        </section>
    


        <section class="py-48 container mx-auto px-6">
            <h1 class="text-[12rem] font-black italic uppercase mb-12 tracking-tighter wild-glitch">7_PTS</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div class="touchpoint-box bg-zinc-900/50 border-white border-2"><h3 class="font-black text-3xl mb-4 italic">01. ID_MARK</h3><p class="text-zinc-300 text-xs uppercase mono">Front chest placement. Embroidered identity mark.</p></div>
                <div class="touchpoint-box border-white border-2"><h3 class="font-black text-3xl mb-4 italic">02. MESSAGE</h3><p class="text-zinc-300 text-xs uppercase mono">Bold graphic deployment on center back.</p></div>
                <div class="touchpoint-box border-white border-2"><h3 class="font-black text-3xl mb-4 italic">03. ANCHOR</h3><p class="text-zinc-300 text-xs uppercase mono">Scripture reference on right sleeve.</p></div>
                <div class="touchpoint-box border-white border-2"><h3 class="font-black text-3xl mb-4 italic">04. PROTOCOL</h3><p class="text-zinc-300 text-xs uppercase mono">Obedience line on left sleeve cuff.</p></div>
                <div class="touchpoint-box border-white border-2"><h3 class="font-black text-3xl mb-4 italic">05. PRIVATE</h3><p class="text-zinc-300 text-xs uppercase mono">Inside neck hidden reminder.</p></div>
                <div class="touchpoint-box border-white border-2"><h3 class="font-black text-3xl mb-4 italic">06. CRAFT</h3><p class="text-zinc-300 text-xs uppercase mono">Side hem woven label finish.</p></div>
                <div class="touchpoint-box col-span-full border-red-600 bg-red-900/10 py-16"><h3 class="font-black text-5xl mb-6 text-red-500 italic">07. NFC_TRIGGER</h3><p class="text-white text-lg uppercase mono font-black">Digital access portal integrated into lower hem.</p></div>
            </div>
        </section>
    


        <section class="py-48 container mx-auto px-6 max-w-5xl text-center">
            <h1 class="text-[10rem] font-black italic uppercase mb-24 wild-glitch">CORE_OS</h1>
            <p class="text-4xl italic leading-tight text-white mb-24 uppercase font-bold tracking-tighter">We build wearable anchors for the ambassadors of the Kingdom. Streetwear isn't the mission—it's the uniform for the assignment.</p>
            <div class="h-1 bg-white w-1/2 mx-auto"></div>
        </section>
    


        <section class="py-48 container mx-auto px-6 max-w-4xl">
            <h1 class="text-8xl font-black italic uppercase mb-24 wild-glitch">QUERY_LOGS</h1>
            <div class="space-y-16">
                <div class="border-b-4 border-white pb-10"><h3 class="font-black uppercase text-4xl mb-4">WHAT IS TAP HERE?</h3><p class="text-zinc-200 mono text-lg uppercase">NFC protocol for digital devotional access.</p></div>
            </div>
        </section>
    


        <section class="py-48 container mx-auto px-6"><h2 class="text-8xl font-black italic uppercase mb-12">STRAT_INTEL</h2></section>
    


        const PRODUCTS = {
            'storm-proof': { 
                title: 'STORM PROOF TEE', 
                img: 'https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69856d580708e4197d030d11.png', 
                appLine: 'STAY READY. ANCHORED.',
                audio: 'https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/6985d565d017c3251ddc3765.mp3'
            },
            'olives-night': { 
                title: 'OLIVES IN THE NIGHT', 
                img: 'https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69857a20d017c3002fce6967.png', 
                appLine: 'OBEY. WATCH. PRAY.',
                audio: 'https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/6985d5090708e428b2122d19.mp3'
            },
            'silence-thunder': { 
                title: 'SILENCE & THUNDER TEE', 
                img: 'https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/69857d3fd017c3a167ceffbb.png', 
                appLine: 'WALK IN POWER.',
                audio: 'https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/6985d3e81dfc02026dc08bfa.mp3'
            }
        };

        let currentAudio = null;

        function showPage(pageId) {
            terminateSonic();
            const container = document.getElementById('main-view');
            const templateElement = document.getElementById(pageId + '-template');
            if (templateElement) {
                container.innerHTML = templateElement.innerHTML;
                window.scrollTo(0,0);
                lucide.createIcons();
                initReveal();
            }
        }

        function terminateSonic() {
            if (currentAudio) {
                currentAudio.pause();
                currentAudio = null;
            }
            document.getElementById('sonic-hud').style.display = 'none';
            document.getElementById('sonic-waves-container').style.display = 'none';
        }

        function generateSonicBars() {
            const container = document.getElementById('sonic-waves-container');
            container.innerHTML = '';
            for (let i = 0; i < 60; i++) {
                const bar = document.createElement('div');
                bar.className = 'sonic-bar';
                bar.style.animationDelay = `${Math.random() * 0.5}s`;
                bar.style.animationDuration = `${0.3 + Math.random() * 0.7}s`;
                container.appendChild(bar);
            }
        }

        function showProduct(productId) {
            terminateSonic();

            const container = document.getElementById('main-view');
            const templateString = document.getElementById('product-template').innerHTML;
            const data = PRODUCTS[productId];
            
            let html = templateString
                .replace(/\${title}/g, data.title)
                .replace(/\${img}/g, data.img)
                .replace(/\${appLine}/g, data.appLine);
            
            container.innerHTML = html;
            window.scrollTo(0,0);
            lucide.createIcons();

            if (data.audio) {
                currentAudio = new Audio(data.audio);
                currentAudio.loop = true;
                currentAudio.play().then(() => {
                    document.getElementById('sonic-hud').style.display = 'inline';
                    document.getElementById('sonic-waves-container').style.display = 'flex';
                    generateSonicBars();
                }).catch(e => {
                    console.log("Audio trigger blocked by browser policy.");
                });
            }
        }

        function initReveal() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('active');
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
        }

        function handleParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-image-overlay');
            parallaxElements.forEach(el => {
                const parent = el.parentElement;
                const offsetTop = parent.offsetTop;
                if (scrolled + window.innerHeight > offsetTop) {
                    const relativeScroll = scrolled - offsetTop;
                    el.style.transform = `translateY(${relativeScroll * 0.45}px) scale(1.1)`;
                }
            });
        }

        window.addEventListener('scroll', handleParallax);
        window.onload = () => {
            showPage('home');
            setInterval(() => {
                const logo = document.querySelector('.nav-logo');
                if(logo && Math.random() > 0.9) {
                    logo.style.transform = `translate(${Math.random()*4}px, ${Math.random()*4}px) rotate(${Math.random()*4}deg)`;
                    setTimeout(() => logo.style.transform = '', 50);
                }
            }, 100);
        };
    
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
      
<div className="vignette"></div>

<div id="sonic-waves-container">

</div>
<div className="hud-text top-4 left-4 mono">
        SYS_AUTH: [GRANTED] // PORTAL_OS_v4.2 
        <span className="ml-4" id="sonic-hud">
<span className="animate-pulse">// SONIC_STREAM: [ACTIVE]</span>
<button id="stop-sonic" onclick="terminateSonic()">[ TERMINATE_STREAM ]</button>
</span>
</div>
<div className="hud-text bottom-20 right-4 mono text-right">LOC: 37.8136° S, 144.9631° E<br/>STATUS: DEPLOYING_EASTER_DROP</div>

<div className="bg-red-700 text-[10px] text-center py-1 uppercase font-black fixed bottom-0 left-0 w-full z-[100] border-t border-black">
        [ SYSTEM_NAV ] : 
        <button className="px-2 underline" onclick="showPage('home')">HOME</button> | 
        <button className="px-2 underline" onclick="showPage('touchpoints')">7_TOUCH_POINTS</button> | 
        <button className="px-2 underline" onclick="showPage('drop')">DROP_PAGE</button> | 
        <button className="px-2 underline" onclick="showPage('about')">ABOUT</button> | 
        <button className="px-2 underline" onclick="showPage('faq')">FAQ</button> | 
        <button className="px-2 underline" onclick="showPage('ads')">ADS</button>
</div>
<div id="app-content">

<div className="announcement-bar">
<marquee className="flex font-black tracking-[0.5em]" scrollamount="14">
                ACCESSING PORTAL ENCRYPTED STREAM // FREE AU SHIPPING OVER $150 // LIMITED DROP. NO RESTOCKS // JESUS IS THE DOOR // 7 TOUCH POINTS SYSTEM ACTIVE //
            </marquee>
</div>
<header className="sticky-header">
<div className="container mx-auto px-6 py-2 flex items-center justify-between">
<img alt="PORTAL/s" className="nav-logo cursor-pointer" onclick="showPage('home')" src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/698581030a7fd18168a5da54.png"/>
<nav className="hidden md:flex space-x-12 text-[10px] font-black uppercase tracking-[0.4em]">
<a className="hover:text-red-600 transition-colors" href="#">Shop</a>
<a className="hover:text-red-600 transition-colors" href="#" onclick="showPage('drop')">Drops</a>
<button className="hover:text-red-600 transition-colors" onclick="showPage('touchpoints')">Technical</button>
<a className="hover:text-red-600 transition-colors" href="#" onclick="showPage('about')">Core</a>
</nav>
<div className="flex items-center space-x-8">
<i className="w-5 h-5 cursor-pointer hover:rotate-90 transition-transform" data-lucide="search"></i>
<i className="w-5 h-5 cursor-pointer" data-lucide="shopping-cart"></i>
</div>
</div>
</header>
<main id="main-view">

</main>
<footer className="bg-black border-t-4 border-white pt-32 pb-48 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
<div className="text-[20rem] font-black text-white italic -rotate-12 translate-y-20 select-none">PORTAL</div>
</div>
<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 relative z-10">
<div>
<img alt="PORTAL/s" className="h-20 mb-10 brightness-150 transition-all cursor-pointer" onclick="showPage('home')" src="https://storage.googleapis.com/msgsndr/u1dke7aBujsudjmkKmJ3/media/698581030a7fd18168a5da54.png"/>
<p className="mono text-[10px] text-zinc-500 leading-loose uppercase tracking-widest">
                        EST. 2024 // MELB_AU<br/>
                        BUILT FOR THE ASSIGNMENT.<br/>
                        DECENTLY AND IN ORDER.
                    </p>
</div>
<div>
<h4 className="mono text-[11px] font-bold uppercase mb-10 text-zinc-400 border-b border-zinc-800 pb-2">[ DIRECTORY ]</h4>
<ul className="text-xs font-black uppercase space-y-6 tracking-widest">
<li><button className="hover:text-red-500" onclick="showPage('touchpoints')">Engineering</button></li>
<li><a className="hover:text-red-500" href="#">Heavyweight Inventory</a></li>
<li><a className="hover:text-red-500" href="#" onclick="showPage('drop')">Active Drops</a></li>
</ul>
</div>
<div>
<h4 className="mono text-[11px] font-bold uppercase mb-10 text-zinc-400 border-b border-zinc-800 pb-2">[ PROTOCOLS ]</h4>
<ul className="text-xs font-black uppercase space-y-6 tracking-widest">
<li><button className="hover:text-red-500" onclick="showPage('faq')">FAQ_OS</button></li>
<li><a className="hover:text-red-500" href="#">Shipping_Logs</a></li>
<li><a className="hover:text-red-500" href="#">Return_Policy</a></li>
</ul>
</div>
<div>
<h4 className="mono text-[11px] font-bold uppercase mb-10 text-zinc-400 border-b border-zinc-800 pb-2">[ DATA_SYNC ]</h4>
<div className="flex border-4 border-white bg-black">
<input className="bg-transparent px-6 py-4 text-xs w-full outline-none mono uppercase text-white" placeholder="EMAIL_ADDR" type="email"/>
<button className="bg-white text-black px-10 font-black text-xs uppercase hover:bg-red-600 hover:text-white transition-colors">Join</button>
</div>
</div>
</div>
</footer>
</div>













    </>
  );
}
