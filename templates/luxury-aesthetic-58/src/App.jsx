import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Theme Toggle Logic
        const htmlEl = document.documentElement;
        const themeBtn = document.getElementById('theme-toggle');
        
        // Setup initial theme based on class or preference (default dark as per class in this file)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !htmlEl.classList.contains('dark') && !htmlEl.classList.contains('light')) {
            htmlEl.classList.add('dark');
        }

        themeBtn.addEventListener('click', () => {
            htmlEl.classList.toggle('dark');
        });

        // 2. Word Transition Logic (pages, products, marketing)
        const words = ["pages.", "products.", "marketing."];
        let wordIndex = 0;
        const wordEl = document.getElementById('word-rotator');

        setInterval(() => {
            // Animate out (rotate 3D and fade)
            wordEl.style.opacity = '0';
            wordEl.style.transform = 'translateY(10px) rotateX(-60deg)';
            
            setTimeout(() => {
                // Change word
                wordIndex = (wordIndex + 1) % words.length;
                wordEl.innerText = words[wordIndex];
                
                // Reset transform for animation in
                wordEl.style.transition = 'none';
                wordEl.style.transform = 'translateY(-10px) rotateX(60deg)';
                
                // Force reflow
                void wordEl.offsetWidth;
                
                // Animate in
                wordEl.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease';
                wordEl.style.opacity = '1';
                wordEl.style.transform = 'translateY(0) rotateX(0deg)';
            }, 600); // Wait for fade out
        }, 3500);

        // 3. Continuous 3D Floating Animation
        const floatElements = document.querySelectorAll('.js-3d-float');
        const startTime = Date.now();

        function animate3D() {
            const time = (Date.now() - startTime) * 0.001; // elapsed time in seconds
            
            floatElements.forEach((el, index) => {
                // Stagger animations based on index
                const offset = index * Math.PI;
                
                // Calculate subtle rotation and translation
                const rotX = Math.sin(time * 0.8 + offset) * 4; // Max 4 degrees rotation
                const rotY = Math.cos(time * 1.2 + offset) * 4;
                const transY = Math.sin(time * 1.5 + offset) * 8; // Max 8px vertical movement
                
                // Apply inline styles to satisfy constraint
                el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(${transY}px)`;
            });

            requestAnimationFrame(animate3D);
        }

        // Start 3D animation
        animate3D();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-1/4 w-[40vw] h-[40vw] rounded-full bg-amber-400/5 dark:bg-amber-500/10 blur-[120px] pointer-events-none -translate-y-1/2" style={{zIndex: '-1'}}></div>
<div className="fixed bottom-0 right-1/4 w-[30vw] h-[30vw] rounded-full bg-slate-400/10 dark:bg-white/5 blur-[100px] pointer-events-none translate-y-1/2" style={{zIndex: '-1'}}></div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-black/40 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<span className="text-base font-semibold tracking-tighter text-slate-900 dark:text-white">KIM</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Treatments</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Clinic</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Journal</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 flex items-center justify-center rounded-full bg-slate-200/50 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300" id="theme-toggle">
<iconify-icon className="text-base hidden dark:block" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base block dark:hidden" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-slate-900 dark:bg-white px-4 text-xs font-medium text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-600 focus:ring-offset-2 dark:focus:ring-offset-black">
                    Book Consultation
                </button>
</div>
</div>
</nav>

<main className="pt-24 pb-16 lg:pt-32 lg:pb-24">

<section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh]">

<div className="flex flex-col items-start" style={{zIndex: '10'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 dark:bg-amber-500/10 mb-6">
<iconify-icon className="text-amber-600 dark:text-amber-400 text-xs" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-amber-700 dark:text-amber-300">Vien Tham My Kim</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
                    Refining elegance <br className="hidden md:block"/>
                    across all our <br/>
<span className="inline-flex relative">

<span className="text-amber-600 dark:text-amber-400 drop-shadow-sm" id="word-rotator" style={{display: 'inline-block', transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease', transformStyle: 'preserve-3d', transformOrigin: 'center center'}}>
                            pages
                        </span>
</span>
</h1>
<p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-md mb-10 leading-relaxed font-normal">
                    Discover a sanctuary where advanced aesthetics meet unparalleled luxury. Tailored treatments designed to illuminate your natural beauty.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 dark:bg-white px-6 text-sm font-medium text-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/20 dark:shadow-white/10">
                        Explore Treatments
                        <iconify-icon className="text-sm" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 rounded-full bg-transparent border border-slate-200 dark:border-white/10 px-6 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Our Clinic
                    </button>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center" style={{perspective: '1200px'}}>

<div className="js-3d-float relative w-3/4 aspect-[3/4] rounded-2xl md:rounded-[2rem] border border-white/20 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur-2xl shadow-2xl shadow-slate-300/50 dark:shadow-black/50 overflow-hidden flex flex-col justify-end p-6 md:p-8" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-gradient-to-tr from-amber-200/40 via-transparent to-slate-200/40 dark:from-amber-900/40 dark:via-black/50 dark:to-slate-800/40" style={{transform: 'translateZ(-10px)'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 dark:from-black/90 dark:via-black/20 to-transparent"></div>
<div className="relative" style={{transform: 'translateZ(30px)'}}>
<div className="w-10 h-10 rounded-full bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-amber-600 dark:text-amber-400 text-lg" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">Signature Gold</h3>
<p className="text-xs text-slate-600 dark:text-slate-400">Premium revitalization therapy.</p>
</div>
</div>

<div className="js-3d-float absolute top-10 -right-4 w-1/2 aspect-square rounded-2xl border border-white/30 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-xl shadow-xl flex items-center justify-center" style={{transformStyle: 'preserve-3d', zIndex: '-1'}}>
<div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent dark:from-white/5 dark:to-transparent rounded-2xl"></div>
<iconify-icon className="text-4xl text-slate-400/50 dark:text-white/20" icon="solar:magic-stick-3-linear" strokeWidth="1.5" style={{transform: 'translateZ(20px)'}}></iconify-icon>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-4">Elevate your experience</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">Meticulously crafted protocols integrating state-of-the-art technology with refined holistic care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative" style={{perspective: '1000px'}}>

<div className="group relative rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 group-hover:border-amber-200 dark:group-hover:border-amber-500/20">
<iconify-icon className="text-xl text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400" icon="solar:dropper-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Advanced Formulations</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Exclusive serums and dermal treatments engineered for profound, lasting radiance.</p>
</div>

<div className="group relative rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 group-hover:border-amber-200 dark:group-hover:border-amber-500/20">
<iconify-icon className="text-xl text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Precision Analysis</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Comprehensive dermal mapping ensuring every protocol is uniquely yours.</p>
</div>

<div className="group relative rounded-2xl border border-slate-200/50 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md p-8 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 hover:-translate-y-1 hover:bg-white dark:hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-amber-50 dark:group-hover:bg-amber-500/10 group-hover:border-amber-200 dark:group-hover:border-amber-500/20">
<iconify-icon className="text-xl text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Holistic Harmony</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Blending clinical efficacy with restorative spa traditions for total rejuvenation.</p>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200/50 dark:border-white/5 py-12 text-center">
<p className="text-xs text-slate-400 font-medium tracking-wide">© 2024 KIM LUXURY SPA. ALL RIGHTS RESERVED.</p>
</footer>



    </>
  );
}
