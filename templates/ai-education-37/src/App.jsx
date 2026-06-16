import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.cursor-hover');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Preloader Logic
        window.addEventListener('load', () => {
            const progress = document.getElementById('loader-progress');
            const preloader = document.getElementById('preloader');
            
            let loadVal = 0;
            const loadInterval = setInterval(() => {
                loadVal += Math.floor(Math.random() * 10) + 5;
                if(loadVal > 100) loadVal = 100;
                progress.style.width = loadVal + '%';
                
                if(loadVal === 100) {
                    clearInterval(loadInterval);
                    setTimeout(() => {
                        preloader.classList.add('loaded');
                        document.querySelector('#hero').classList.add('hero-revealed');
                        setTimeout(revealOnScroll, 500); 
                    }, 500);
                }
            }, 50);
        });

        // PARALLAX ENGINE
        let ticking = false;
        
        function updateParallax() {
            const parallaxElements = document.querySelectorAll('.parallax-element');
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            parallaxElements.forEach(el => {
                const speed = parseFloat(el.getAttribute('data-parallax-speed')) || 0.1;
                const rect = el.parentElement.getBoundingClientRect(); // relative to viewport
                const elementTop = rect.top;
                const elementHeight = rect.height;

                if (elementTop < windowHeight && elementTop + elementHeight > 0) {
                    let yPos = 0;
                    const center = windowHeight / 2;
                    const elCenter = elementTop + (elementHeight / 2);
                    const diff = center - elCenter;
                    yPos = diff * speed;
                    
                    el.style.transform = `translateY(${yPos}px)`;
                }
            });
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }, { passive: true });

        updateParallax();

        // Reveal on Scroll
        function revealOnScroll() {
            const reveals = document.querySelectorAll('.reveal');
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            reveals.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', revealOnScroll);

        // CAROUSEL STACK LOGIC
        const cardsContainer = document.getElementById('cards-container');
        const dots = [
          document.getElementById('dot-1'),
          document.getElementById('dot-2'),
          document.getElementById('dot-3')
        ];
        
        let currentCard = 1;
        let isAnimating = false;
        
        function updateDots() {
            if(!cardsContainer) return;
            dots.forEach((dot, index) => {
                if (index === currentCard - 1) {
                dot.className = 'cursor-hover w-3 h-3 rounded-full bg-[#6366f1] transition-all duration-300 scale-125 shadow-[0_0_10px_#6366f1]';
                } else {
                dot.className = 'cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300';
                }
            });
        }
        
        function setActiveCard(cardNumber) {
          if(!cardsContainer) return;
          if (isAnimating || cardNumber === currentCard) return;
          
          isAnimating = true;
          cardsContainer.className = `stack-section card-${cardNumber}-active relative`;
          currentCard = cardNumber;
          updateDots();
          
          setTimeout(() => {
            isAnimating = false;
          }, 800);
        }
        
        dots.forEach((dot, index) => {
          if(dot) {
              dot.addEventListener('click', () => {
                setActiveCard(index + 1);
              });
          }
        });
        
        // Auto-rotate cards
        if(cardsContainer) {
            setInterval(() => {
              if (!isAnimating) {
                const nextCard = currentCard === 3 ? 1 : currentCard + 1;
                setActiveCard(nextCard);
              }
            }, 6000);
        }

        // RAZORPAY INTEGRATION (Dummy Function)
        function startPayment(planName) {
            alert(`Initializing Razorpay for: ${planName}\n\nNote: You need a Razorpay Key ID in the implementation to proceed with actual payment.`);
            
            // ACTUAL IMPLEMENTATION EXAMPLE:
            /*
            var options = {
                "key": "YOUR_RAZORPAY_KEY_ID",
                "amount": "50000", // Amount in paise (500.00 INR)
                "currency": "INR",
                "name": "CREAIQ",
                "description": "Payment for " + planName,
                "image": "https://example.com/your_logo.png",
                "handler": function (response){
                    alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
                },
                "prefill": {
                    "name": "User Name",
                    "email": "user@example.com",
                    "contact": "9999999999"
                },
                "theme": {
                    "color": "#6366f1"
                }
            };
            var rzp1 = new Razorpay(options);
            rzp1.open();
            */
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="cursor"></div>
<div className="noise-overlay"></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="liquid-blob bg-[#6366f1]" style={{width: '500px', height: '500px', top: '-100px', left: '-100px', opacity: '0.15', animationDuration: '15s'}}></div>
<div className="liquid-blob bg-purple-600" style={{width: '400px', height: '400px', top: '40%', right: '-100px', opacity: '0.15', animationDuration: '20s', animationDelay: '-5s'}}></div>
<div className="liquid-blob bg-cyan-600" style={{width: '600px', height: '600px', bottom: '-150px', left: '20%', opacity: '0.1', animationDuration: '25s', animationDelay: '-10s'}}></div>
</div>
<div id="preloader">
<div className="flex flex-col items-center gap-4">
<span className="font-heading tracking-[0.2em] text-xs uppercase text-white/50" id="loader-text">INITIALIZING CREAIQ</span>
<div className="loader-bar">
<div className="loader-progress" id="loader-progress"></div>
</div>
</div>
</div>

<nav className="fixed w-full z-[60] top-0 transition-all duration-300 py-4">
<div className="max-w-7xl mx-auto px-4">

<div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
<a className="cursor-hover group flex items-center gap-1.5" href="#">
<span className="font-heading font-bold text-xl tracking-tighter text-white">CREAIQ</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#3a4b9f] flex items-center justify-center shadow-[0_4px_10px_rgba(99,102,241,0.3)] group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:atom-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#problem">The Gap</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#framework">Framework</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#courses">Courses</a>
<a className="cursor-hover text-xs font-medium uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#pdf-why">Why PDF</a>
</div>
<div className="hidden md:block">
<button className="cursor-hover px-5 py-2 border border-white/20 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors bg-white/5 backdrop-blur-sm">
                        Start Now
                    </button>
</div>
<button className="md:hidden text-white cursor-hover">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-32 pb-20" id="hero">
<div className="absolute top-32 left-6 md:left-12 z-20 hidden md:block">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 00. INTRO ]</span>
</div>

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Background" className="parallax-element w-full h-[120%] object-cover opacity-20 grayscale contrast-125 will-change-transform mix-blend-overlay" data-parallax-speed="0.5" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/60 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
<div className="reveal mb-12 opacity-0">
<div className="glass-panel inline-flex items-center gap-2 px-4 py-1.5 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] animate-pulse shadow-[0_0_10px_#6366f1]"></span>
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-300">Creativity + AI + IQ</span>
</div>
</div>
<h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] tracking-tight text-white drop-shadow-2xl">
<span className="split-line"><span className="block">CREATE</span></span>
<span className="split-line"><span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20" style={{transitionDelay: '100ms'}}>SMARTER</span></span>
</h1>
<p className="mt-8 text-lg md:text-xl text-gray-300/80 font-light max-w-2xl mx-auto leading-relaxed reveal opacity-0 delay-200 backdrop-blur-sm rounded-lg p-2">
                In a fast-paced, AI-driven world, those who mix AI + creativity don’t just survive — they monetize faster. CREAIQ helps you <span className="text-white border-b border-[#6366f1]/50 pb-0.5 cursor-hover hover:border-[#6366f1] hover:text-[#6366f1] transition-colors">learn practical skills</span> without the fluff.
            </p>
<div className="mt-10 flex flex-col md:flex-row gap-4 items-center reveal opacity-0 delay-300">
<a className="cursor-hover px-8 py-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300 hover:scale-105" href="#framework">
                    Start L-EARN-ING™ Today
                </a>
<a className="cursor-hover px-8 py-4 glass-panel border border-white/10 hover:bg-white hover:text-black text-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300" href="#courses">
                    Explore Courses →
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 reveal opacity-0 delay-500">
<span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">SCROLL</span>
<div className="glass-panel w-[1px] h-12 !bg-gradient-to-b from-[#6366f1] to-transparent/10 !border-0"></div>
</div>
</header>

<div className="relative z-20 border-b border-white/5 bg-white/[0.02] backdrop-blur-sm">
<div className="marquee-container overflow-hidden whitespace-nowrap py-4">
<div className="marquee-content gap-16 items-center">
<span className="flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest"><iconify-icon className="text-[#6366f1]" icon="solar:check-circle-linear"></iconify-icon> No Prior Experience Required</span>
<span className="flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest"><iconify-icon className="text-[#6366f1]" icon="solar:bolt-linear"></iconify-icon> Learn Today, Apply Tomorrow</span>
<span className="flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest"><iconify-icon className="text-[#6366f1]" icon="solar:wallet-money-linear"></iconify-icon> Earn Fast</span>
<span className="flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest"><iconify-icon className="text-[#6366f1]" icon="solar:users-group-rounded-linear"></iconify-icon> Built for Creators &amp; Hustlers</span>
<span className="flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest"><iconify-icon className="text-[#6366f1]" icon="solar:check-circle-linear"></iconify-icon> No Prior Experience Required</span>
<span className="flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest"><iconify-icon className="text-[#6366f1]" icon="solar:bolt-linear"></iconify-icon> Learn Today, Apply Tomorrow</span>
<span className="flex items-center gap-3 text-sm font-medium text-gray-400 uppercase tracking-widest"><iconify-icon className="text-[#6366f1]" icon="solar:wallet-money-linear"></iconify-icon> Earn Fast</span>
</div>
</div>
</div>

<section className="py-32 relative z-10" id="problem">

<div className="absolute top-10 left-6 md:left-12 z-20 hidden md:block">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 01. THE GAP ]</span>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
<div className="reveal">
<h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">The world doesn’t<br/>reward effort. <span className="text-gray-500">It rewards leverage.</span></h2>
<p className="text-gray-400 max-w-lg text-lg">Thousands watch tutorials but never start. The gap between learning and earning is where CREAIQ exists.</p>
</div>
<div className="reveal flex p-1 glass-panel rounded-lg">
<div className="px-6 py-2 text-xs font-semibold uppercase tracking-wide rounded bg-white/5 text-gray-300">
                        Stop Overthinking
                    </div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-8 rounded-2xl cursor-hover group hover:border-red-400/30">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:text-red-400 transition-colors">
<iconify-icon icon="solar:video-library-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">Endless Tutorials</h3>
<p className="text-sm text-gray-400 leading-relaxed">Watching hours of content but never actually starting the work.</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group hover:border-red-400/30">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:text-red-400 transition-colors">
<iconify-icon icon="solar:hourglass-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">Slow Skills</h3>
<p className="text-sm text-gray-400 leading-relaxed">Learning traditional skills that take years to monetize in a fast market.</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group hover:border-red-400/30">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 mb-6 group-hover:text-red-400 transition-colors">
<iconify-icon icon="solar:bomb-emoji-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">Overwhelmed</h3>
<p className="text-sm text-gray-400 leading-relaxed">Drowning in new AI tools, trends, and noise without direction.</p>
</div>

<div className="glass-panel p-8 rounded-2xl cursor-hover group hover:border-green-400/30 border-green-500/20 bg-green-500/5">
<div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mb-6">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">The Solution</h3>
<p className="text-sm text-gray-400 leading-relaxed">A small group is quietly earning by using AI correctly. Join them.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden z-10" id="framework">

<div className="absolute top-10 left-6 md:left-12 z-20 hidden md:block">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 02. FRAMEWORK ]</span>
</div>

<div className="liquid-blob bg-[#6366f1]" style={{width: '600px', height: '600px', top: '20%', right: '-20%', opacity: '0.1'}}></div>
<div className="max-w-7xl mx-auto px-6 mb-24 text-center pt-12">
<h2 className="font-heading text-4xl lg:text-5xl font-semibold mb-6 reveal">Meet CREAIQ</h2>
<p className="text-xl text-gray-300 max-w-2xl mx-auto reveal delay-100">
                Where <span className="text-white font-bold">CRE</span>ativity meets <span className="text-white font-bold">AI</span> and <span className="text-white font-bold">IQ</span>.
            </p>
<p className="text-gray-400 mt-4 reveal delay-100">No academic theory. No generic "AI motivation". Just clear playbooks.</p>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-10 rounded-3xl relative overflow-hidden group reveal delay-100">
<div className="absolute -right-4 -top-4 text-[120px] font-heading font-bold text-white/5 z-0 group-hover:text-white/10 transition-colors">1</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#6366f1]/20">Step 01</div>
<h3 className="font-heading text-3xl font-bold text-white mb-4">Learn</h3>
<p className="text-gray-400 leading-relaxed">Understand the fundamentals without drowning in information. We filter the noise so you focus only on what matters.</p>
</div>
</div>

<div className="glass-panel p-10 rounded-3xl relative overflow-hidden group reveal delay-200">
<div className="absolute -right-4 -top-4 text-[120px] font-heading font-bold text-white/5 z-0 group-hover:text-white/10 transition-colors">2</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1]/20 text-[#6366f1] text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#6366f1]/20">Step 02</div>
<h3 className="font-heading text-3xl font-bold text-white mb-4">Apply</h3>
<p className="text-gray-400 leading-relaxed">Follow step-by-step actions using AI tools and shortcuts. Turn knowledge into execution immediately.</p>
</div>
</div>

<div className="glass-panel p-10 rounded-3xl relative overflow-hidden group reveal delay-300 border-white/20">

<div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-transparent pointer-events-none"></div>
<div className="absolute -right-4 -top-4 text-[120px] font-heading font-bold text-white/5 z-0 group-hover:text-white/10 transition-colors">3</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366f1] text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg shadow-indigo-500/40">Step 03</div>
<h3 className="font-heading text-3xl font-bold text-white mb-4">Earn</h3>
<p className="text-gray-400 leading-relaxed">Clear monetization paths — freelancing, services, or digital products. Learn once. Apply fast. Earn repeatedly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden z-10 min-h-screen flex items-center bg-black/20" id="courses">

<div className="absolute top-10 left-6 md:left-12 z-20 hidden md:block">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 03. COURSES ]</span>
</div>
<div className="max-w-7xl mx-auto px-6 w-full h-full pt-12">
<div className="flex flex-col lg:flex-row gap-12 items-center justify-between">

<div className="flex-1 max-w-xl lg:pr-8 reveal">
<div className="flex items-center space-x-2 mb-6">
<div className="w-1.5 h-1.5 bg-[#6366f1] rounded-full animate-pulse shadow-[0_0_10px_#6366f1]"></div>
<p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium">Income-Ready Skills</p>
</div>
<div className="mb-8">
<h2 className="font-heading text-4xl lg:text-6xl font-medium leading-tight tracking-tight mb-6 text-white">
<span className="block">Courses built for</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#6366f1] to-purple-400">Speed &amp; Income</span>
</h2>
<p className="text-lg text-white/70 leading-relaxed max-w-md">
                            We start with practical PDF playbooks — simple, focused, and constantly updated. Each answers one question: "How can I start earning quickly?"
                        </p>
</div>

<div className="flex space-x-4 items-center pl-1">
<button className="cursor-hover w-3 h-3 rounded-full bg-[#6366f1] transition-all duration-300 scale-125 shadow-[0_0_10px_#6366f1]" id="dot-1"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-2"></button>
<button className="cursor-hover w-2 h-2 rounded-full bg-white/20 hover:bg-white/50 transition-all duration-300" id="dot-3"></button>
</div>
</div>

<div className="flex flex-col space-y-8 items-center w-full lg:w-auto reveal delay-200">
<div className="stack-section card-1-active relative" id="cards-container">

<div className="stack-card glass-panel rounded-2xl h-[34rem] md:h-[36rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 to-purple-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-[#6366f1]" icon="solar:bolt-linear" width="16"></iconify-icon>
<span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Beginner</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-[10px] text-white">PDF Playbook</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-[#6366f1] to-blue-400 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">AI Tools for Income</h3>
<p className="text-xs text-white/60 mb-6 uppercase tracking-widest">Save hours. Create faster.</p>
<ul className="text-left space-y-3 mb-8 w-full px-4">
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-[#6366f1]" icon="solar:check-circle-linear"></iconify-icon> Automate manual work</li>
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-[#6366f1]" icon="solar:check-circle-linear"></iconify-icon> Create sellable assets</li>
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-[#6366f1]" icon="solar:check-circle-linear"></iconify-icon> Quick wins for beginners</li>
</ul>
</div>
<button className="cursor-hover w-full py-3 px-4 glass-panel rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group/btn" onclick="startPayment('AI Tools for Income')">
                                    Get Started <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[34rem] md:h-[36rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-purple-400" icon="solar:keyboard-linear" width="16"></iconify-icon>
<span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Freelancers</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-[10px] text-white">System Pack</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:chat-square-code-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">Monetization Prompts</h3>
<p className="text-xs text-white/60 mb-6 uppercase tracking-widest">Not just prompts. Money makers.</p>
<ul className="text-left space-y-3 mb-8 w-full px-4">
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Ready-to-use packs</li>
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Freelancing workflows</li>
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-purple-400" icon="solar:check-circle-linear"></iconify-icon> Reduce thinking time</li>
</ul>
</div>
<button className="cursor-hover w-full py-3 px-4 glass-panel rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group/btn" onclick="startPayment('Monetization Prompts')">
                                    Buy Pack <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="stack-card glass-panel rounded-2xl h-[34rem] md:h-[36rem] border border-white/10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-900/40 z-0"></div>
<div className="relative z-10 h-full flex flex-col p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-2">
<iconify-icon className="text-emerald-400" icon="solar:graph-up-linear" width="16"></iconify-icon>
<span className="text-[10px] font-semibold text-white/60 uppercase tracking-widest">Hustlers</span>
</div>
<span className="glass-panel px-2 py-1 rounded text-[10px] text-white">Strategy</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:briefcase-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-3xl font-semibold tracking-tight mb-2 text-white">Business Using AI</h3>
<p className="text-xs text-white/60 mb-6 uppercase tracking-widest">Automate &amp; Scale.</p>
<ul className="text-left space-y-3 mb-8 w-full px-4">
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Build service agencies</li>
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Create digital products</li>
<li className="flex items-center gap-2 text-sm text-gray-300"><iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Automate operations</li>
</ul>
</div>
<button className="cursor-hover w-full py-3 px-4 glass-panel rounded-xl text-white text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group/btn" onclick="startPayment('Business Using AI')">
                                    Join Strategy <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="pdf-why">

<div className="absolute top-10 left-6 md:left-12 z-20 hidden md:block">
<span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-400 border border-white/5">[ 04. METHOD ]</span>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12">
<div className="text-center mb-16 reveal">
<h2 className="font-heading text-4xl font-medium tracking-tight mb-4 text-white">Why we start with PDFs</h2>
<p className="text-gray-400 max-w-md mx-auto">We believe learning should be distraction-free.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="glass-panel p-8 rounded-2xl text-center cursor-hover hover:border-[#6366f1]/50 transition-colors">
<iconify-icon className="text-[#6366f1] mb-4" icon="solar:cup-hot-linear" width="32"></iconify-icon>
<h3 className="text-xl font-bold text-white mb-2">Easy to Consume</h3>
<p className="text-sm text-gray-400">No long videos to binge watch. Just clear content you can read at your own pace.</p>
</div>
<div className="glass-panel p-8 rounded-2xl text-center cursor-hover hover:border-[#6366f1]/50 transition-colors">
<iconify-icon className="text-[#6366f1] mb-4" icon="solar:running-linear" width="32"></iconify-icon>
<h3 className="text-xl font-bold text-white mb-2">Action Focused</h3>
<p className="text-sm text-gray-400">Designed for execution. Read a step, do the step. No unnecessary theory.</p>
</div>
<div className="glass-panel p-8 rounded-2xl text-center cursor-hover hover:border-[#6366f1]/50 transition-colors">
<iconify-icon className="text-[#6366f1] mb-4" icon="solar:forbidden-circle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-bold text-white mb-2">Distraction Free</h3>
<p className="text-sm text-gray-400">Get straight to the point. We value your time as much as your results.</p>
</div>
</div>

<div className="reveal mt-12">
<div className="glass-panel p-1 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent border border-white/10">
<div className="bg-[#050a14]/80 backdrop-blur-md rounded-[20px] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4 border border-blue-500/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                                Coming Soon
                            </div>
<h3 className="font-heading text-2xl font-bold text-white mb-2">The Future of CREAIQ</h3>
<p className="text-gray-400 text-sm leading-relaxed max-w-xl">We are starting with high-impact PDFs, but we aren't stopping there. We are building a comprehensive ecosystem including <span className="text-white font-medium">Recorded Video Courses</span>, <span className="text-white font-medium">Live Workshops</span>, and an exclusive <span className="text-white font-medium">Community</span> for members to network and grow together.</p>
</div>
<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center"><iconify-icon className="text-white" icon="solar:videocamera-record-linear" width="24"></iconify-icon></div>
<span className="text-[10px] uppercase tracking-wider">Video</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center"><iconify-icon className="text-white" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon></div>
<span className="text-[10px] uppercase tracking-wider">Community</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center"><iconify-icon className="text-white" icon="solar:presentation-graph-linear" width="24"></iconify-icon></div>
<span className="text-[10px] uppercase tracking-wider">Live</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-black/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-panel p-10 rounded-3xl border-l-4 border-l-green-500 reveal">
<h3 className="font-heading text-2xl font-bold text-white mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
<iconify-icon icon="solar:check-read-linear" width="20"></iconify-icon>
</span>
                        CREAIQ is for you if...
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-green-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>You want to earn online, not just learn theory.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-green-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>You feel overwhelmed by AI but curious about its power.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-green-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>You prefer clear actionable steps over long lectures.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-green-500 mt-1" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>You want skills that actually convert to income.</span>
</li>
</ul>
</div>

<div className="glass-panel p-10 rounded-3xl border-l-4 border-l-red-500 reveal delay-100">
<h3 className="font-heading text-2xl font-bold text-white mb-8 flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</span>
                        It's NOT for you if...
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-red-500 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You’re looking for "get rich overnight" scams.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-red-500 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You don’t want to apply what you learn.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-red-500 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You expect results without putting in the action.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-red-500 mt-1" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>You prefer complicated theories over simple systems.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 text-center">

<div className="absolute inset-0 flex items-center justify-center overflow-hidden z-[-1]">
<div className="w-[800px] h-[800px] bg-[#6366f1] opacity-10 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 reveal">
<h2 className="font-heading text-4xl md:text-6xl font-semibold mb-6 text-white leading-tight">Your learning shouldn’t stay stuck in notebooks.</h2>
<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">The AI wave is already here. The only question is whether you’ll watch it pass or use it to earn.</p>
<a className="cursor-hover inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 gap-3 group" href="#courses">
                Start L-EARN-ING™ <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-black/80 backdrop-blur-xl pt-24 pb-12 border-t border-white/10 relative z-20" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2 space-y-6">
<div className="flex items-center gap-1.5 mb-6">
<span className="font-heading font-bold text-2xl tracking-tighter text-white">CREAIQ</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366f1] to-[#3a4b9f] flex items-center justify-center shadow-[0_4px_10px_rgba(99,102,241,0.3)]">
<iconify-icon className="text-white" icon="solar:atom-linear" width="20"></iconify-icon>
</div>
</div>
<p className="text-gray-500 text-base leading-relaxed max-w-sm">Create • AI • IQ<br/>Learn smart. Build fast. Earn sooner.</p>
<div className="flex gap-4">
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#6366f1] hover:text-white transition-colors border-0" href="#"><iconify-icon icon="solar:brand-x-linear" width="16"></iconify-icon></a>
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#6366f1] hover:text-white transition-colors border-0" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="16"></iconify-icon></a>
<a className="cursor-hover w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white hover:bg-[#6366f1] hover:text-white transition-colors border-0" href="#"><iconify-icon icon="solar:brand-youtube-linear" width="16"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-base uppercase tracking-widest">Platform</h5>
<ul className="space-y-4 text-base text-gray-500">
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Courses</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Framework</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Login</a></li>
</ul>
</div>
<div>
<h5 className="font-heading font-medium text-white mb-6 text-base uppercase tracking-widest">Legal</h5>
<ul className="space-y-4 text-base text-gray-500">
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="cursor-hover hover:text-white transition-colors" href="#">Support</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-600">
<p>© 2023 CREAIQ. All rights reserved.</p>
<p>Designed for Hustlers.</p>
</div>
</div>
</footer>


    </>
  );
}
