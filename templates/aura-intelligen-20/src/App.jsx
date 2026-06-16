import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Text Reveal Animation
        const textContainer = document.querySelector('.reveal-text-container');
        const textToReveal = "Constructing Digital Intelligence";
        
        // Wrap words and spaces
        const words = textToReveal.split(' ');
        let delayCounter = 0;
        
        words.forEach((word, index) => {
            const wordSpan = document.createElement('span');
            wordSpan.className = 'inline-block whitespace-nowrap overflow-hidden align-bottom pb-1';
            
            // Split word into letters
            const letters = word.split('');
            letters.forEach((letter) => {
                const letterSpan = document.createElement('span');
                letterSpan.className = 'reveal-text inline-block';
                letterSpan.innerHTML = `<span style="animation-delay: ${delayCounter * 0.05}s">${letter}</span>`;
                wordSpan.appendChild(letterSpan.firstElementChild);
                delayCounter++;
            });

            textContainer.appendChild(wordSpan);
            
            // Add space unless it's the last word
            if (index < words.length - 1) {
                const space = document.createElement('span');
                space.innerHTML = '&nbsp;';
                space.className = 'inline-block';
                textContainer.appendChild(space);
            }
        });

        // Flashlight Effect
        const cards = document.querySelectorAll('.flashlight-card');
        document.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Carousel Logic
        const carouselCards = document.querySelectorAll('.carousel-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;

        function updateCarousel() {
            carouselCards.forEach((card, index) => {
                card.className = 'carousel-card bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl flex flex-col justify-center text-center'; // reset
                
                // Calculate relative position
                const diff = (index - currentIndex + 3) % 3;
                
                if (diff === 0) {
                    card.classList.add('active');
                } else if (diff === 1) {
                    card.classList.add('next');
                } else {
                    card.classList.add('prev');
                }
            });
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % 3;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + 3) % 3;
            updateCarousel();
        });

        // Loop carousel automatically
        setInterval(() => {
             // currentIndex = (currentIndex + 1) % 3;
             // updateCarousel();
        }, 5000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<div className="relative w-[95vw] h-[90vh] bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 shadow-3d flex flex-col clip-intro">

<div className="h-10 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 space-x-2 z-50 shrink-0">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-neutral-800/50 px-3 py-1 rounded text-[10px] text-neutral-400 font-mono flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:lock-keyhole-minimalistic-bold-duotone"></iconify-icon>
                    aura.intelligence
                </div>
</div>
</div>

<div className="relative flex-1 overflow-y-auto overflow-x-hidden custom-scroll scroll-smooth" id="scroll-container">

<div className="fixed inset-0 pointer-events-none z-0">
<div className="stars" style={{boxShadow: '1744px 122px #444 , 134px 1321px #555 , 92px 859px #333'}}></div>
<div className="stars" style={{animationDuration: '100s', opacity: '0.5'}}></div>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-neutral-900/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
<span className="font-bold text-black text-xs tracking-tighter">A</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Aura</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#features">Solutions</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#testimonials">Research</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<button className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 text-xs font-medium text-white transition-all">
                        Contact Sales
                    </button>
</div>
</nav>

<section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 animate-[fadeIn_1s_ease-out_0.2s_backwards]">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">New: Aura v2.0 Model Release</span>
</div>
<h1 aria-label="Constructing Digital Intelligence" className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1] reveal-text-container">

</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-2xl mb-10 leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
                    We build autonomous AI agents that reshape how businesses operate. 
                    From predictive analytics to generative interfaces, Aura is the engine of the future.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_1.0s_forwards]">

<button className="group relative px-8 py-3 rounded-full text-sm font-semibold text-white bg-black overflow-hidden transform transition-transform active:scale-95">
<div className="border-beam"></div>
<span className="relative z-10">Start Building</span>
</button>
<button className="px-8 py-3 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                        View Documentation
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02] py-10 relative overflow-hidden">
<div className="marquee-container relative max-w-7xl mx-auto">
<div className="flex gap-16 w-max marquee-content items-center">

<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-neutral-600 text-3xl w-24" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:notion"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:linear"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:raycast"></iconify-icon>

<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:openai"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-neutral-600 text-3xl w-24" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:notion"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:linear"></iconify-icon>
<iconify-icon className="text-neutral-600 text-2xl w-24" icon="simple-icons:raycast"></iconify-icon>
</div>
</div>
</section>

<section className="relative max-w-7xl mx-auto px-6 py-24" id="features">

<div className="absolute inset-0 flex justify-between pointer-events-none px-6 max-w-7xl mx-auto">
<div className="w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
</div>
<div className="mb-16 relative z-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-neutral-400 max-w-xl">Harness the power of Large Language Models with our optimized infrastructure designed for scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

<div className="flashlight-card rounded-2xl p-8 flex flex-col justify-between min-h-[320px] group">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white text-xl" icon="solar:bolt-circle-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Real-time Processing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                Millisecond latency for chat interfaces and autonomous agents. Built on edge networks globally.
                            </p>
</div>
<div className="flex items-center justify-between mt-8 border-t border-white/5 pt-4">
<span className="text-xs font-mono text-neutral-600">01</span>
<span className="text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
</div>
</div>

<div className="flashlight-card rounded-2xl p-8 flex flex-col justify-between min-h-[320px] group">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white text-xl" icon="solar:shield-keyhole-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                SOC2 Type II compliant. End-to-end encryption for all data vectors and model weights.
                            </p>
</div>
<div className="flex items-center justify-between mt-8 border-t border-white/5 pt-4">
<span className="text-xs font-mono text-neutral-600">02</span>
<span className="text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
</div>
</div>

<div className="flashlight-card rounded-2xl p-8 flex flex-col justify-between min-h-[320px] group">
<div>
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white text-xl" icon="solar:chart-square-bold-duotone"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                                Turn raw unstructured data into actionable insights with our proprietary embedding models.
                            </p>
</div>
<div className="flex items-center justify-between mt-8 border-t border-white/5 pt-4">
<span className="text-xs font-mono text-neutral-600">03</span>
<span className="text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Explore</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/50 relative overflow-hidden" id="testimonials">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
<h2 className="text-2xl font-semibold text-white mb-12">Trusted by Innovators</h2>
<div className="relative w-full max-w-2xl h-[280px] carousel-perspective flex justify-center items-center">

<div className="carousel-card active bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl flex flex-col justify-center text-center" data-index="0">
<div className="mb-4 flex justify-center text-yellow-500 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mb-6">"Aura has completely transformed how we handle customer support data. The latency is practically non-existent."</p>
<div>
<div className="text-sm font-semibold text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">CTO, TechFlow</div>
</div>
</div>

<div className="carousel-card next bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl flex flex-col justify-center text-center" data-index="1">
<div className="mb-4 flex justify-center text-yellow-500 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mb-6">"The security compliance features allowed us to integrate AI into our fintech products without worry."</p>
<div>
<div className="text-sm font-semibold text-white">David Chen</div>
<div className="text-xs text-neutral-500">VP Engineering, FinSafe</div>
</div>
</div>

<div className="carousel-card prev bg-neutral-900 border border-neutral-800 p-8 rounded-2xl shadow-2xl flex flex-col justify-center text-center" data-index="2">
<div className="mb-4 flex justify-center text-yellow-500 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg text-white font-medium mb-6">"Scaling our agents from 100 to 1M users was seamless. The infrastructure is rock solid."</p>
<div>
<div className="text-sm font-semibold text-white">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">Founder, AgentX</div>
</div>
</div>
</div>

<div className="flex gap-4 mt-8">
<button className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-white hover:bg-neutral-800 flex items-center justify-center transition-colors" id="prevBtn">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 text-white hover:bg-neutral-800 flex items-center justify-center transition-colors" id="nextBtn">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center">
<span className="font-bold text-black text-[10px] tracking-tighter">A</span>
</div>
<span className="text-sm font-semibold text-white">Aura</span>
</div>
<p className="text-xs text-neutral-500">Constructing the intelligence<br/>layer of the internet.</p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">Agents</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">Vectors</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">About</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">Blog</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">Privacy</a></li>
<li><a className="text-xs text-neutral-400 hover:text-white" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600">© 2024 Aura Intelligence Inc. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="text-neutral-600 hover:text-white text-sm cursor-pointer" icon="simple-icons:twitter"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white text-sm cursor-pointer" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white text-sm cursor-pointer" icon="simple-icons:discord"></iconify-icon>
</div>
</div>
</div>
</footer>
</div>
</div>


    </>
  );
}
