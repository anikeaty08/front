import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Flashlight Logic
        const cards = document.querySelectorAll(".flashlight-card");
        
        document.addEventListener("mousemove", (e) => {
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        });

        // Carousel Logic
        const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalItems = 4;
        const itemsToShow = window.innerWidth >= 768 ? 3 : 1; 
        const maxIndex = totalItems - itemsToShow;

        function updateCarousel() {
            const percentage = -(currentIndex * (100 / itemsToShow));
            track.style.transform = `translateX(${percentage}%)`;
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0; 
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = maxIndex;
            }
            updateCarousel();
        });

        setInterval(() => {
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000); // Slowed down slightly

        window.addEventListener('resize', () => {
            currentIndex = 0;
            updateCarousel();
        });

        updateCarousel();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-60 hue-rotate-15 blur-md" data-alpha-mask="65" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 65%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="TIWE0oFfvUmetsFoxL6u"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full h-full max-w-[1400px] mx-auto px-4 md:px-8">
<div className="w-full h-full border-x grid grid-cols-4 border-white/5">
<div className="border-r h-full hidden md:block border-white/5"></div>
<div className="border-r h-full hidden md:block border-white/5"></div>
<div className="border-r h-full hidden md:block border-white/5"></div>
</div>
</div>

<div className="fixed top-0 left-0 w-full h-[500px] blur-[120px] pointer-events-none z-0 bg-emerald-900/10"></div>

<nav className="fixed top-0 w-full z-50 border-b bg-[#020408]/80 backdrop-blur-md border-white/5">
<div className="flex h-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:gamepad-charge-linear" width="28"></iconify-icon>
</div>
<span className="text-xl tracking-tighter font-semibold text-white">SNAKER iO</span>
</div>
<div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
<a className="text-sm transition-colors font-medium tracking-tight uppercase text-slate-400 hover:text-emerald-400" href="#">Arena</a>
<a className="text-sm transition-colors font-medium tracking-tight uppercase text-slate-400 hover:text-emerald-400" href="#">Skins</a>
<a className="text-sm transition-colors font-medium tracking-tight uppercase text-slate-400 hover:text-emerald-400" href="#">Rankings</a>
<a className="text-sm transition-colors font-medium tracking-tight uppercase text-slate-400 hover:text-emerald-400" href="#">Blog</a>
</div>
<div className="flex items-center gap-6">
<button className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full border hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all border-white/10 hover:text-emerald-400 text-slate-400">
<iconify-icon icon="solar:bag-linear" width="20"></iconify-icon>
</button>
<a className="bg-emerald-500 px-6 py-2.5 rounded-full text-base font-semibold transition-all tracking-tight flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] text-black hover:bg-emerald-400" href="#">
                    Start Playing
                    <iconify-icon icon="solar:user-circle-bold" width="20"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden z-10 pt-40 pb-24 relative">
<div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.95] mb-10 text-white">
                    Slither into <br/>
<span className="text-emerald-500/90 font-medium">Immortality.</span>
</h1>
<p className="text-xl md:text-2xl max-w-lg font-light leading-relaxed mb-12 text-slate-400">
                    Dominate the arena in the world's most responsive snake io game. High stakes, crypto rewards, and zero lag.
                </p>
<div className="flex flex-wrap gap-4 mb-14">
<span className="px-5 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase border-emerald-900/30 bg-emerald-950/20 text-emerald-300">#multiplayer</span>
<span className="px-5 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase border-emerald-900/30 bg-emerald-950/20 text-emerald-300">#esports</span>
<span className="px-5 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase border-emerald-900/30 bg-emerald-950/20 text-emerald-300">#strategy</span>
<span className="px-5 py-2 rounded-full border text-xs font-semibold tracking-wide uppercase border-emerald-900/30 bg-emerald-950/20 text-emerald-300">#web3</span>
</div>
<div className="flex items-center gap-6">
<button className="group px-9 py-4 rounded-full text-lg font-semibold transition-all flex items-center gap-3 shadow-lg bg-white text-black hover:bg-emerald-50 shadow-white/5">
                        Enter The Arena
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
<button className="flex gap-2 transition-colors hover:text-white font-medium text-slate-300 rounded-full pt-4 pr-6 pb-4 pl-6 gap-x-2 gap-y-2 items-center">
<iconify-icon className="" height="24" icon="solar:play-circle-linear" style={{color: 'rgb(156, 163, 175)'}} width="24"></iconify-icon>
                        Watch Trailer
                    </button>
</div>
</div>

<div className="relative">

<div className="overflow-hidden aspect-[4/3] group flashlight-card border-white/5 border rounded-3xl relative" style={{-MouseX: '-103px', -MouseY: '780.5px'}}>
<img alt="Snake Game Art" className="group-hover:scale-105 transition-transform duration-700 hover:mix-blend-normal opacity-60 mix-blend-luminosity w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66b2e80b-6117-4db0-91de-959e8673e282_3840w.jpg?w=800&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-[#020408] via-transparent to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd9bcd75-c237-42a6-a6a6-a9a2b276d0d5_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-6 right-6 backdrop-blur-xl border p-5 rounded-2xl max-w-xs shadow-2xl z-20 bg-slate-950/80 border-white/10">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="w-20 h-20 rounded-lg overflow-hidden border relative border-white/10">
<img alt="Skin" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/65023394-a019-4168-bf24-3f576ec641ab_320w.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-emerald-500/20"></div>
</div>
<div>
<h4 className="text-lg font-medium tracking-tight text-white">Viper Elite Skin</h4>
<p className="text-xs uppercase tracking-wider font-semibold mt-1 text-emerald-400">Limited Edition</p>
<p className="font-semibold mt-1 text-white">$24.00</p>
</div>
<button className="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors ml-auto text-black hover:bg-white">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-16 border-y relative z-10 bg-[#020408] border-white/5">
<div className="max-w-full overflow-hidden mask-linear-fade">
<div className="flex animate-marquee hover:grayscale-0 transition-all duration-500 hover:opacity-100 opacity-40 w-max grayscale gap-x-20 gap-y-20 items-center">

<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:spacex" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" height="56" icon="logos:100tb" style={{color: 'rgb(52, 211, 153)'}} width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:uber" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:visa" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" height="56" icon="logos:100tb" style={{color: 'rgb(52, 211, 153)'}} width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" height="56" icon="logos:altair" style={{color: 'rgb(52, 211, 153)'}} width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" height="56" icon="simple-icons:apollographql" style={{color: 'rgb(52, 211, 153)'}} width="56"></iconify-icon>

<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:spacex" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:nasa" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:uber" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:visa" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:razer" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:nvidia" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:steam" width="56"></iconify-icon>
<iconify-icon className="transition-colors hover:text-emerald-400" icon="simple-icons:twitch" width="56"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 relative z-10">
<div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

<div className="relative flashlight-card rounded-3xl border p-0 border-white/5" style={{-MouseX: '605px', -MouseY: '-225px'}}>
<div className="aspect-square overflow-hidden rounded-3xl relative z-10 bg-slate-900">
<img alt="Gameplay" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-emerald-500/20 backdrop-blur-md rounded-full flex items-center justify-center border group cursor-pointer hover:scale-110 transition-transform border-emerald-400/30">
<iconify-icon className="ml-1 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] text-white" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>
</div>
</div>

<div>
<p className="text-emerald-500 uppercase tracking-widest text-sm font-semibold mb-4">About The Game</p>
<h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-10 leading-tight text-white">
                    We Are The Best <br/>
<span className="text-slate-500">Snake IO Platform.</span>
</h2>
<div className="space-y-10">
<div className="flex gap-6 items-start group cursor-default">
<span className="text-2xl font-light group-hover:text-emerald-400 transition-colors font-mono text-slate-600">01</span>
<div>
<h3 className="text-2xl font-medium mb-2 tracking-tight group-hover:text-emerald-100 transition-colors text-white">Zero-Lag Engine</h3>
<p className="text-lg font-light leading-relaxed text-slate-400">
                                Built on custom WebSocket infrastructure ensuring &lt; 20ms ping globally. Precision movement is key to survival.
                            </p>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="flex gap-6 items-start group cursor-default">
<span className="text-2xl font-light group-hover:text-emerald-400 transition-colors font-mono text-slate-600">02</span>
<div>
<h3 className="text-2xl font-medium mb-2 tracking-tight group-hover:text-emerald-100 transition-colors text-white">Play to Earn</h3>
<p className="text-lg font-light leading-relaxed text-slate-400">
                                Climb the daily leaderboards to earn crypto tokens. Your skill translates directly to rewards.
                            </p>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="flex gap-6 items-start group cursor-default">
<span className="text-2xl font-light group-hover:text-emerald-400 transition-colors font-mono text-slate-600">03</span>
<div>
<h3 className="text-2xl font-medium mb-2 tracking-tight group-hover:text-emerald-100 transition-colors text-white">Custom Physics</h3>
<p className="text-lg font-light leading-relaxed text-slate-400">
                                Experience momentum-based movement. Coil, dash, and strike with our proprietary physics engine.
                            </p>
</div>
</div>
</div>
<div className="mt-12">
<button className="px-8 py-3 rounded-full border text-lg transition-all border-white/10 text-white hover:bg-white hover:text-black hover:border-white">
                        Explore Features
                    </button>
</div>
</div>
</div>
</section>

<section className="z-10 bg-[#03050a] border-t pt-24 pb-24 relative border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="flashlight-card p-10 rounded-2xl border transition-colors group border-white/5" style={{-MouseX: '605px', -MouseY: '-1145px'}}>
<div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-emerald-400">
<iconify-icon icon="solar:rocket-2-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white">Instant Respawn</h3>
<p className="text-lg font-light leading-relaxed text-slate-400">Get back into the action immediately without loading screens.</p>
</div>

<div className="flashlight-card p-10 rounded-2xl border transition-colors group border-white/5" style={{-MouseX: '261px', -MouseY: '-1145px'}}>
<div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-emerald-400">
<iconify-icon icon="solar:wallet-money-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white">Instant Payouts</h3>
<p className="text-lg font-light leading-relaxed text-slate-400">Withdraw your winnings to your connected wallet instantly.</p>
</div>

<div className="flashlight-card p-10 rounded-2xl border transition-colors group border-white/5" style={{-MouseX: '-83px', -MouseY: '-1145px'}}>
<div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-emerald-400">
<iconify-icon icon="solar:shield-check-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white">Anti-Cheat</h3>
<p className="text-lg font-light leading-relaxed text-slate-400">AI-driven behavioral analysis keeps the arena fair for everyone.</p>
</div>

<div className="flashlight-card p-10 rounded-2xl border transition-colors group border-white/5" style={{-MouseX: '-427px', -MouseY: '-1145px'}}>
<div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 text-emerald-400">
<iconify-icon icon="solar:headset-help-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-white">24/7 Support</h3>
<p className="text-lg font-light leading-relaxed text-slate-400">Our team is always online to help with account or gameplay issues.</p>
</div>
</div>
</div>
</section>

<section className="z-10 pt-32 pb-32 relative">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-12">
<p className="text-emerald-500 uppercase tracking-widest text-sm font-semibold mb-3">Gameplay</p>
<h2 className="text-5xl font-light tracking-tighter text-white">Experience the Friction.</h2>
</div>
<div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden group flashlight-card border border-white/5" style={{-MouseX: '605px', -MouseY: '-1784px'}}>
<img alt="Wide Gameplay" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col md:px-24 z-20 bg-gradient-to-r from-[#020408] via-[#020408]/50 to-transparent pr-12 pl-12 absolute top-0 right-0 bottom-0 left-0 justify-center">
<div className="max-w-xl">
<h3 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight text-white">Master the Coil.</h3>
<p className="text-xl font-light mb-10 leading-relaxed text-slate-300">
                             Trapping opponents isn't just luck. It's geometry. Watch the tutorial to learn advanced entrapment techniques.
                         </p>
<button className="px-8 py-4 rounded-full flex items-center gap-3 font-semibold transition-colors w-fit shadow-lg bg-white text-black hover:bg-emerald-400 shadow-white/10">
<iconify-icon icon="solar:play-circle-bold" width="24"></iconify-icon>
                             Watch Gameplay
                         </button>
</div>
</div>
</div>
</div>
</section><section className="py-32 relative z-10">
<div className="max-w-[1400px] mx-auto px-6">

<div className="rounded-[40px] border bg-[#03050a] overflow-hidden group border-white/5">
<div className="grid lg:grid-cols-2">

<div 5="" border-white="" class-b-0="" lg:border-r="" overflow-hidden"="">
<img alt="Premium Features Art" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent opacity-60"></div>

<div className="absolute bottom-8 left-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-md border shadow-xl transition-transform hover:scale-105 cursor-default bg-black/60 border-white/10">
<div className="flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:shield-check-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wide text-slate-200">Adaptive identity graph</span>
</div>
</div>

<div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-[#03050a]">

<div className="flex items-center gap-2 mb-8 text-emerald-500/80">
<iconify-icon icon="solar:star-fall-bold-duotone" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">New in 2.7 — Lattice scoring</span>
</div>

<h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-6 leading-[1.05] text-white">
                        Premium Features <br/>
<span className="text-slate-600">( Account )</span>
</h2>

<p className="text-lg font-light mb-12 leading-relaxed max-w-lg text-slate-400">
                        Ling Coll Freya Legend Angela Legend, and many more exclusive skins are waiting for you to unlock in the premium tier.
                    </p>

<div className="flex flex-wrap items-center gap-4 mb-16">
<button className="px-8 py-3.5 rounded-full font-semibold shadow-lg transition-all flex items-center gap-2 hover:scale-105 active:scale-95 bg-white text-black hover:bg-emerald-400 shadow-white/5">
                            Buy Now
                            <iconify-icon icon="solar:arrow-right-bold-duotone" width="20"></iconify-icon>
</button>
<button className="px-6 py-3.5 rounded-full border font-medium transition-colors flex items-center gap-2 border-white/10 text-white hover:bg-white/5 hover:border-white/20">
                            Show Info
                            <iconify-icon className="text-slate-400" icon="solar:info-circle-bold-duotone" width="20"></iconify-icon>
</button>
<button className="px-4 py-3 font-medium transition-colors text-slate-400 hover:text-emerald-400">
                            Contact
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">

<div className="bg-white/[0.03] rounded-2xl p-5 border hover:bg-white/[0.06] transition-colors group/card border-white/5">
<div className="mb-3 text-emerald-500/80 group-hover/card:text-emerald-400 transition-colors">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 mb-1">Status</p>
<p className="text-lg font-semibold tracking-tight mb-0.5 text-white">No Error</p>
<p className="text-xs text-slate-500">Developers</p>
</div>

<div className="bg-white/[0.03] rounded-2xl p-5 border hover:bg-white/[0.06] transition-colors group/card border-white/5">
<div className="mb-3 text-emerald-500/80 group-hover/card:text-emerald-400 transition-colors">
<iconify-icon icon="solar:chart-square-bold-duotone" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 mb-1">Win Rate</p>
<p className="text-lg font-semibold tracking-tight mb-0.5 text-white">70%</p>
<p className="text-xs text-slate-500">Last 12 months</p>
</div>

<div className="bg-white/[0.03] rounded-2xl p-5 border hover:bg-white/[0.06] transition-colors group/card border-white/5">
<div className="mb-3 text-emerald-500/80 group-hover/card:text-emerald-400 transition-colors">
<iconify-icon icon="solar:lock-keyhole-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-500 mb-1">Security</p>
<p className="text-lg font-semibold tracking-tight mb-0.5 text-white">High Rank</p>
<p className="text-xs text-slate-500">Verified</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 border-y bg-[#03050a] pt-32 pb-32 relative border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div className="">
<p className="text-emerald-500 uppercase tracking-widest text-sm font-semibold mb-3">Marketplace</p>
<h2 className="text-5xl md:text-6xl font-light tracking-tighter text-white">Legendary Skins</h2>
</div>
<div className="flex gap-4">
<button className="w-14 h-14 rounded-full border flex items-center justify-center transition-all border-white/10 text-white hover:bg-white hover:text-black" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-14 h-14 rounded-full border flex items-center justify-center transition-all border-white/10 text-white hover:bg-white hover:text-black" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-hidden relative min-h-[500px]">
<div className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" id="carouselTrack">

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="flashlight-card rounded-3xl p-8 border h-full group border-white/5" style={{-MouseX: '589px', -MouseY: '-3759.421875px'}}>
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white">Cyber Python</h3>
<p className="text-slate-500 mt-1">Season 1 Rare</p>
</div>
<span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium text-emerald-400">$12.00</span>
</div>
<div className="aspect-square rounded-2xl bg-gradient-to-br p-8 mb-8 relative overflow-hidden flex items-center justify-center z-10 border from-slate-800 to-black border-white/5">
<img alt="Skin 1" className="w-full h-full object-cover rounded-xl opacity-80 group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center relative z-10">
<button className="flex items-center gap-2 font-medium group-hover:text-emerald-400 transition-colors text-white">
                                    View Details 
                                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white text-black hover:bg-emerald-400">
<iconify-icon icon="solar:cart-large-2-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="flashlight-card rounded-3xl p-8 border h-full group border-white/5" style={{-MouseX: '138.34375px', -MouseY: '-3759.421875px'}}>
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white">Golden Mamba</h3>
<p className="text-slate-500 mt-1">Legendary</p>
</div>
<span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium text-emerald-400">$45.00</span>
</div>
<div className="aspect-square rounded-2xl bg-gradient-to-br p-8 mb-8 relative overflow-hidden flex items-center justify-center z-10 border from-yellow-900/10 to-black border-white/5">
<img alt="Skin 2" className="w-full h-full object-cover rounded-xl opacity-80 group-hover:scale-105 transition-transform sepia-[.5] brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-center relative z-10">
<button className="flex items-center gap-2 font-medium group-hover:text-emerald-400 transition-colors text-white">
                                    View Details 
                                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white text-black hover:bg-emerald-400">
<iconify-icon icon="solar:cart-large-2-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="flashlight-card rounded-3xl p-8 border h-full group border-white/5" style={{-MouseX: '-312.3125px', -MouseY: '-3759.421875px'}}>
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white">Neon Cobra</h3>
<p className="text-slate-500 mt-1">Epic Tier</p>
</div>
<span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium text-emerald-400">$28.00</span>
</div>
<div className="aspect-square rounded-2xl bg-gradient-to-br p-8 mb-8 relative overflow-hidden flex items-center justify-center z-10 border from-purple-900/20 to-black border-white/5">
<img alt="Skin 3" className="w-full h-full object-cover rounded-xl opacity-80 group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center relative z-10">
<button className="flex items-center gap-2 font-medium group-hover:text-emerald-400 transition-colors text-white">
                                    View Details 
                                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white text-black hover:bg-emerald-400">
<iconify-icon icon="solar:cart-large-2-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="flashlight-card rounded-3xl p-8 border h-full group border-white/5" style={{-MouseX: '-762.96875px', -MouseY: '-3759.421875px'}}>
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<h3 className="text-2xl font-medium tracking-tight text-white">Ghost Viper</h3>
<p className="text-slate-500 mt-1">Stealth Ops</p>
</div>
<span className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full text-sm font-medium text-emerald-400">$32.00</span>
</div>
<div className="aspect-square rounded-2xl bg-gradient-to-br p-8 mb-8 relative overflow-hidden flex items-center justify-center z-10 border from-slate-800 to-black border-white/5">
<img alt="Skin 4" className="w-full h-full object-cover rounded-xl opacity-80 group-hover:scale-105 transition-transform grayscale" src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-center relative z-10">
<button className="flex items-center gap-2 font-medium group-hover:text-emerald-400 transition-colors text-white">
                                    View Details 
                                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white text-black hover:bg-emerald-400">
<iconify-icon icon="solar:cart-large-2-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-end mt-12">
<button className="px-8 py-3 bg-emerald-500 rounded-full font-medium tracking-tight transition-colors text-black hover:bg-white">
                     View All Skins
                 </button>
</div>
</div>
</section>

<section className="py-32 relative z-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-5xl md:text-6xl font-light tracking-tighter mb-6 text-white">
                        Join the <br/>
<span className="text-emerald-500/80">Beta Server.</span>
</h2>
<p className="text-xl font-light mb-10 max-w-md text-slate-400">
                        Get early access to new skins, maps, and experimental physics engines before anyone else.
                    </p>
<form __gchrome_uniqueid="1" className="flex gap-2 max-w-md border p-2 rounded-full bg-[#05070e] relative z-10 border-white/10">
<input __gchrome_uniqueid="2" className="bg-transparent px-6 py-3 w-full outline-none placeholder:text-slate-600 font-light text-lg text-white" placeholder="Enter your email" type="email"/>
<button className="px-8 py-3 rounded-full font-semibold transition-colors bg-white text-black hover:bg-emerald-400" type="button">
                            Join
                        </button>
</form>
<p className="text-sm mt-4 ml-4 text-slate-600">Limited spots available for Season 4 testing.</p>
</div>
<div className="relative">

<div className="relative z-10 grid grid-cols-2 gap-4">
<img alt="Player 1" className="rounded-2xl w-full h-64 object-cover translate-y-12 grayscale hover:grayscale-0 transition-all duration-500 border border-white/5" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Player 2" className="rounded-2xl w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-white/5" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<footer className="py-20 border-t bg-[#020408] relative z-10 border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="text-emerald-400">
<iconify-icon icon="solar:gamepad-charge-linear" width="36"></iconify-icon>
</div>
<span className="text-2xl tracking-tighter font-semibold text-white">SNAKER iO</span>
</div>
<p className="text-slate-500 max-w-xs font-light text-lg">
                        15523 Sirena Well, Leschport, <br/>
                        MA 11862-4746
                    </p>
<p className="text-slate-500 mt-2 font-light text-lg">info@snaker.io</p>
<div className="flex gap-4 mt-8">
<a className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500/20 transition-all hover:border-emerald-500/50 border-white/10 text-slate-400 hover:text-white" href="#">
<iconify-icon icon="simple-icons:discord" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500/20 transition-all hover:border-emerald-500/50 border-white/10 text-slate-400 hover:text-white" href="#">
<iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-emerald-500/20 transition-all hover:border-emerald-500/50 border-white/10 text-slate-400 hover:text-white" href="#">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
<div>
<h4 className="font-medium mb-6 text-lg text-white">Game</h4>
<ul className="space-y-4 text-slate-500 font-light text-lg">
<li><a className="transition-colors hover:text-emerald-400" href="#">Play Now</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Skins Market</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Leaderboard</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Tournaments</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-lg text-white">Company</h4>
<ul className="space-y-4 text-slate-500 font-light text-lg">
<li><a className="transition-colors hover:text-emerald-400" href="#">About Us</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Press Kit</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 text-lg text-white">Support</h4>
<ul className="space-y-4 text-slate-500 font-light text-lg">
<li><a className="transition-colors hover:text-emerald-400" href="#">Help Center</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-emerald-400" href="#">Status</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t pt-10 text-center md:text-left flex flex-col md:flex-row justify-between items-center border-white/5">
<p className="text-sm text-slate-600">Copyright © 2024 Snaker IO. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-slate-500 text-sm">System Normal</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
