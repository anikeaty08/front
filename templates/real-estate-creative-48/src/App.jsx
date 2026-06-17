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



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // --- Smooth Scroll Setup (Lenis) ---
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Soft exponential ease
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // --- Dots Animation Logic (Updated for Dark Mode) ---
        const canvas = document.getElementById('dots-canvas');
        const ctx = canvas.getContext('2d');
        let mouseX = -100;
        let mouseY = -100;

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function drawDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const space = 30;
            const radius = 1.5; 
            const rows = Math.ceil(canvas.height / space);
            const cols = Math.ceil(canvas.width / space);

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * space + space / 2;
                    const y = r * space + space / 2;
                    const dist = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
                    const maxDist = 300;
                    
                    // White dots for dark background
                    let alpha = 0.1; 
                    if (dist < maxDist) {
                        alpha += (1 - dist / maxDist) * 0.6;
                    }
                    
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2);
                    // Changed to White RGB
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.fill();
                }
            }
            requestAnimationFrame(drawDots);
        }
        drawDots();

        // --- Work Scroll Logic ---
        const workSection = document.querySelector('#work');
        const track = document.querySelector('#carousel-track');
        const progressBar = document.querySelector('#progress-bar');
        
        let currentScroll = 0;
        let targetScroll = 0;
        let currentProgress = 0;
        let targetProgress = 0;

        const ease = 0.08; 

        function animate() {
            // Work Animation
            currentScroll += (targetScroll - currentScroll) * ease;
            currentProgress += (targetProgress - currentProgress) * ease;
            track.style.transform = `translateX(${currentScroll}px)`;
            progressBar.style.width = `${currentProgress * 100}%`;

            requestAnimationFrame(animate);
        }

        function handleScroll() {
            // Work Logic
            const workRect = workSection.getBoundingClientRect();
            const trackWidth = track.scrollWidth;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const scrollableHeight = workSection.offsetHeight - windowHeight;
            const workScrolled = -workRect.top;
            
            if (workRect.top <= 0 && workRect.bottom >= 0) {
                const percentage = Math.min(Math.max(workScrolled / scrollableHeight, 0), 1);
                targetScroll = -(trackWidth - windowWidth) * percentage;
                targetProgress = percentage;
            }
        }
        
        window.addEventListener('scroll', handleScroll);
        animate();
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="opxjeAzlg0dkUUVGEZri"></div>

</div></div></div>

<nav className="fixed flex md:px-12 md:py-8 z-50 text-white mix-blend-difference w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-between">
<a className="lowercase hover:opacity-70 transition-opacity cursor-pointer text-base font-semibold text-[#fc3b00] tracking-tighter uppercase" href="#" onclick="lenis.scrollTo('#hero')">Archaitec</a>
<div className="flex gap-8 text-xs font-medium tracking-wide lowercase text-white/90">
<button className="hover:text-[#fc3b00] transition-colors cursor-pointer" onclick="lenis.scrollTo('#work')" style={{}}>Case Study</button>
<button className="hover:text-[#fc3b00] transition-colors cursor-pointer" onclick="lenis.scrollTo('#goods')" style={{}}>Solutions</button>
<button className="hover:text-[#fc3b00] transition-colors cursor-pointer" onclick="lenis.scrollTo('#studio')" style={{}}>Method</button>
<button className="hover:text-[#fc3b00] transition-colors cursor-pointer" onclick="lenis.scrollTo('#contact')">Contact</button>
</div>
</nav>

<header className="flex flex-col md:px-12 overflow-hidden w-full h-screen pr-6 pl-6 relative" id="hero">

<canvas className="absolute top-0 left-0 w-full h-full -z-10" height="735" id="dots-canvas" width="1000"></canvas>
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#fc3b00] rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 -z-20 opacity-10"></div>

<div className="flex-grow"></div>

<div className="flex flex-col md:flex-row md:pb-16 w-full border-neutral-800 border-b pb-12 items-end justify-between">
<div className="reveal-text md:mb-0 md:w-auto w-full mb-8">
<p className="md:text-sm leading-relaxed lowercase text-xs font-normal text-neutral-400 tracking-wide max-w-xs mb-8">We fuse high-end branding, performance marketing, and immersive 3D technology (Arch + AI + Tech) to turn blueprints into best-sellers.</p>
<button className="group inline-flex text-[10px] md:text-xs uppercase transition-colors hover:border-[#fc3b00] hover:text-[#fc3b00] cursor-pointer font-medium text-neutral-300 tracking-widest border-neutral-700 border-b pb-1 gap-x-2 gap-y-2 items-center" onclick="lenis.scrollTo('#goods')">Explore Solutions</button>
</div>
<div className="text-left md:text-right reveal-text delay-100">
<h1 className="md:text-8xl lg:text-9xl lowercase leading-[0.85] text-5xl font-semibold text-white tracking-tighter">The End-to-End <br/>Real Estate <br/>Marketing Ecosystem</h1>
</div>
</div>

<div className="flex reveal-text delay-200 w-full pt-6 pb-6 items-center justify-between">
<div className="flex gap-12">
<div className="hidden md:block">
<span className="text-xs font-medium lowercase flex items-center gap-2 text-neutral-400">
<span className="w-2 h-2 bg-[#fc3b00] rounded-full animate-pulse shadow-[0_0_10px_#fc3b00]"></span>
                        Accepting New Developments
                    </span>
</div>
</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest animate-pulse">
                SCROLL TO EXPLORE
            </div>
</div>
</header>

<section className="bg-[#050505] px-6 md:px-12 py-32 flex justify-center items-center relative z-10">
<h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tighter text-white text-center max-w-5xl">
            Traditional developers juggle a branding agency, a rendering studio, and a sales team. <span className="text-neutral-500">We unify the entire journey.</span> From the first ad impression to the final handshake.
        </h2>
</section>

<section className="relative h-[250vh] bg-[#050505] z-0" id="work">
<div className="sticky overflow-hidden flex flex-col bg-[#050505] w-full h-screen top-0 justify-center">
<div className="absolute top-0 left-0 w-full px-6 md:px-12 pt-16 md:pt-24 flex justify-between items-start z-10 pointer-events-none">
<span className="text-[10px] font-medium tracking-widest uppercase opacity-40 text-neutral-400">Featured Case Study</span>
<span className="text-[10px] font-medium tracking-widest uppercase opacity-40 text-neutral-400">Costalita Villas</span>
</div>
<div className="flex -space-x-12 will-change-transform md:pl-24 md:-space-x-32 w-max pt-20 pb-20 pl-8 items-center" id="carousel-track" style={{transform: 'translateX(0px)'}}>

<article className="group shrink-0 cursor-pointer transition-all duration-500 hover:z-50 hover:-translate-y-6 hover:rotate-1 md:w-[45vw] w-[85vw] relative">
<div className="aspect-[16/9] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(252,59,0,0.3)] bg-neutral-900 w-full border-white/10 border rounded-bl-[10px] relative shadow-2xl">
<img alt="Luxury Branding" className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?w=2160&amp;q=80"/>
<div className="transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="mt-6 flex items-start justify-between px-2">
<div className="">
<h3 className="lowercase transition-colors group-hover:text-[#fc3b00] md:text-3xl text-2xl font-medium text-white tracking-tight">The Brand</h3>
<p className="lowercase text-xs font-medium text-neutral-500 tracking-wide mt-1">Identity &amp; Storytelling</p>
</div>
<div className="flex h-8 w-8 -translate-x-4 items-center justify-center rounded-full border border-neutral-800 bg-[#050505] text-[#fc3b00] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:border-[#fc3b00] group-hover:opacity-100">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[85vw] shrink-0 cursor-pointer transition-all duration-500 hover:z-50 hover:-translate-y-6 hover:-rotate-1 md:w-[45vw]">
<div className="aspect-[16/9] overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(252,59,0,0.3)] bg-neutral-900 w-full border-white/10 border rounded-bl-[10px] relative shadow-2xl">
<img alt="Digital Reach" className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2160&amp;q=80"/>
<div className="transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="mt-6 flex items-start justify-between px-2">
<div className="">
<h3 className="lowercase transition-colors group-hover:text-[#fc3b00] md:text-3xl text-2xl font-medium text-white tracking-tight">The Reach</h3>
<p className="mt-1 text-xs font-medium lowercase tracking-wide text-neutral-500">Web &amp; Lead Gen</p>
</div>
<div className="flex h-8 w-8 -translate-x-4 items-center justify-center rounded-full border border-neutral-800 bg-[#050505] text-[#fc3b00] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:border-[#fc3b00] group-hover:opacity-100">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</article>

<article className="group relative w-[85vw] shrink-0 cursor-pointer transition-all duration-500 hover:z-50 hover:-translate-y-6 hover:rotate-1 md:w-[45vw]">
<div className="relative aspect-[16/9] w-full overflow-hidden rounded-bl-[10px] rounded-br-[200px] rounded-tl-[200px] rounded-tr-[10px] border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-500 group-hover:shadow-[0_20px_40px_-15px_rgba(252,59,0,0.3)]">
<img alt="Immersive Experience" className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
</div>
<div className="mt-6 flex items-start justify-between px-2">
<div className="">
<h3 className="lowercase transition-colors group-hover:text-[#fc3b00] md:text-3xl text-2xl font-medium text-white tracking-tight">The Experience</h3>
<p className="mt-1 text-xs font-medium lowercase tracking-wide text-neutral-500">Unreal Engine App</p>
</div>
<div className="flex h-8 w-8 -translate-x-4 items-center justify-center rounded-full border border-neutral-800 bg-[#050505] text-[#fc3b00] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:border-[#fc3b00] group-hover:opacity-100">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</article>
</div>
<div className="absolute bottom-8 left-6 md:left-12 w-32 h-0.5 bg-neutral-800 overflow-hidden">
<div className="h-full bg-[#fc3b00] w-0" id="progress-bar" style={{width: '0.913331%'}}></div>
</div>
</div>
</section>

<section className="relative min-h-[150vh] z-10 bg-[#050505]" id="goods">
<div className="sticky flex flex-col overflow-hidden w-full h-screen top-0 justify-center">
<div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-12 md:py-0">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4">
<h2 className="md:text-6xl lowercase text-4xl font-semibold text-white tracking-tighter">Core Capabilities</h2>
<div className="flex items-center gap-4">
<span className="text-[10px] font-medium tracking-widest uppercase text-neutral-500">Edition 01</span>
<div className="w-16 h-px bg-neutral-800"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-square bg-neutral-900 rounded-[20px] overflow-hidden mb-6">
<img alt="Branding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1507643179173-617d69956cef?w=1000&amp;q=80"/>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 bg-black/20 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
</div>
</div>
<div className="flex justify-between items-baseline px-2">
<h3 className="lowercase group-hover:text-[#fc3b00] transition-colors text-lg font-medium text-neutral-200 tracking-tight" style={{}}>Branding &amp; Growth</h3>
</div>
<p className="lowercase text-xs text-neutral-600 mt-1 pr-2 pl-2">Identity, CGI &amp; Lead Generation.</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-square bg-neutral-900 rounded-[20px] overflow-hidden mb-6">
<img alt="Cloud 3D" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1000&amp;q=80"/>
<div className="absolute top-6 right-6">
<span className="text-[10px] uppercase font-bold text-white tracking-widest bg-[#fc3b00] rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Engagement</span>
</div>
</div>
<div className="flex justify-between items-baseline px-2">
<h3 className="lowercase group-hover:text-[#fc3b00] transition-colors text-lg font-medium text-neutral-200 tracking-tight">Cloud 3D Solutions</h3>
</div>
<p className="text-xs text-neutral-600 mt-1 lowercase px-2">Pixel Streaming &amp; Web Viewers.</p>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-square bg-neutral-900 rounded-[20px] overflow-hidden mb-6">
<img alt="Showroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1558002038-1091a166111c?w=1000&amp;q=80"/>
<div className="absolute top-6 right-6">
<span className="text-[10px] uppercase font-bold text-white tracking-widest bg-[#fc3b00] rounded-full pt-1.5 pr-3 pb-1.5 pl-3">Closing Tool</span>
</div>
</div>
<div className="flex justify-between items-baseline px-2">
<h3 className="lowercase group-hover:text-[#fc3b00] transition-colors text-lg font-medium text-neutral-200 tracking-tight">Showroom Experience</h3>
</div>
<p className="text-xs text-neutral-600 mt-1 lowercase px-2">Unreal Engine Desktop Apps.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 pt-0 -mt-12 md:-mt-24" id="studio">
<div className="studio-card md:rounded-t-[3rem] overflow-hidden min-h-screen md:py-32 md:px-12 text-[#fcfbf9] bg-neutral-900 border-neutral-800 rounded-t-3xl border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
<div className="">
<h3 className="md:text-4xl lg:text-5xl lowercase leading-tight text-3xl font-semibold tracking-tighter mb-8">The Archaitec Method</h3>
<div className="w-16 h-px mb-8 bg-[#fc3b00]"></div>
<p className="uppercase text-sm text-neutral-500 tracking-wide">Technology Stack</p>
</div>
<div className="flex flex-col justify-between h-full">
<p className="md:text-lg leading-relaxed lowercase text-base font-light text-neutral-400 tracking-wide max-w-lg">
                            Where Human Creativity meets Artificial Intelligence. We don't just render images; we simulate lifestyles and analyze buyer behavior in real-time.
                        </p>
<div className="grid grid-cols-2 gap-12 border-neutral-800 border-t mt-20 pt-12 gap-x-12 gap-y-12">
<div className="">
<span className="block text-[10px] uppercase font-semibold text-[#fc3b00] tracking-widest mb-6">Capabilities</span>
<ul className="space-y-3 text-sm font-normal lowercase text-neutral-400">
<li className="flex gap-3 group gap-x-3 gap-y-3 items-center">
<span className="text-white font-medium">Precision:</span> AI-Driven Segmentation
                                    </li>
<li className="flex gap-3 group gap-x-3 gap-y-3 items-center">
<span className="text-white font-medium">Speed:</span> Real-Time Rendering
                                    </li>
<li className="flex gap-3 group gap-x-3 gap-y-3 items-center">
<span className="text-white font-medium">Insight:</span> 3D Behavior Analytics
                                    </li>
</ul>
</div>
<div className="">
<span className="block text-[10px] uppercase font-semibold text-[#fc3b00] tracking-widest mb-6">Stack</span>
<ul className="lowercase text-sm font-normal text-neutral-400 space-y-3">
<li className="">Unreal Engine 5.4</li>
<li className="">NVIDIA Omniverse</li>
<li className="">Pixel Streaming</li>
<li className="">Custom Analytics APIs</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-32 pt-24 border-t border-neutral-800" id="contact">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
<div className="max-w-3xl">
<h4 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter lowercase mb-8 text-white">
                                Ready to upgrade<br/>your sales process?
                            </h4>
<a className="inline-flex items-center gap-3 md:text-2xl transition-all lowercase hover:text-[#fc3b00] hover:border-[#fc3b00] hover:gap-4 group text-xl font-medium text-neutral-500 border-neutral-800 border-b pb-1" href="mailto:hello@archaitec.io">hello@archaitec.io</a>
</div>
<div className="flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
<div className="flex gap-4">
<a className="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fc3b00] hover:text-white hover:border-[#fc3b00] transition-all duration-300" href="#">
<iconify-icon icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fc3b00] hover:text-white hover:border-[#fc3b00] transition-all duration-300" href="#">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="p-3 rounded-full border border-neutral-800 text-neutral-500 hover:bg-[#fc3b00] hover:text-white hover:border-[#fc3b00] transition-all duration-300" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
<span className="text-[10px] font-medium uppercase tracking-widest text-neutral-600">
                                © 2026 Archaitec S.L.
                            </span>
</div>
</div>
</div>
</footer>
</div>
</section>



    </>
  );
}
