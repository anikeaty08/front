import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: {
800: '#1a2332',
900: '#0f1621',
},
gold: {
400: '#d4af37',
500: '#c5a028',
},
gray: {
50: '#f9fafb',
100: '#f5f7fa',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'scroll': 'scroll 30s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'shimmer': 'shimmer 2.5s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
'0%': { backgroundPosition: '-200% 0' },
'100%': { backgroundPosition: '200% 0' },
}
}
}
}
}



        // Initializing Lucide Icons
        lucide.createIcons();

        // Reveal on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Progress Bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progressBar").style.width = scrolled + "%";
            
            // Navbar Glass effect on scroll
            const nav = document.getElementById('navbar');
            if (winScroll > 50) {
                nav.classList.add('glass-panel', 'shadow-sm');
            } else {
                nav.classList.remove('glass-panel', 'shadow-sm');
            }
        });

        // ROI Calculator
        const slider = document.getElementById('roiSlider');
        const hoursDisplay = document.getElementById('hoursSaved');
        const moneyDisplay = document.getElementById('moneySaved');

        slider.addEventListener('input', (e) => {
            const hours = e.target.value;
            // Assumption: Madison Studio saves 2/3 of time. Avg hourly rate ~$40
            const saved = Math.round(hours * 0.66); 
            const annual = saved * 40 * 52;
            
            hoursDisplay.innerText = `${saved} hrs`;
            moneyDisplay.innerText = `$${annual.toLocaleString()}`;
            
            // Animate values slightly
            hoursDisplay.classList.remove('scale-100');
            hoursDisplay.classList.add('scale-110');
            setTimeout(() => hoursDisplay.classList.remove('scale-110'), 150);
        });

        // Hero Typewriter Effect
        const heroText = "Madison Studio helps school district communication teams maintain consistent messaging across websites, social media, email, and mobile apps—saving 10+ hours per week.";
        const typeWriterElement = document.getElementById('heroTypewriter');
        let i = 0;
        
        function typeWriter() {
            if (i < heroText.length) {
                typeWriterElement.innerHTML += heroText.charAt(i);
                i++;
                setTimeout(typeWriter, 20); // typing speed
            } else {
                typeWriterElement.classList.remove('typewriter-cursor');
            }
        }
        
        // Start typewriter after a slight delay
        setTimeout(typeWriter, 1000);

        // The "Showstopper" Animation Loop
        const demoText = "Due to severe weather conditions, all district schools will be closed tomorrow, January 15th.";
        const demoElement = document.getElementById('demo-editor-text');
        const aiButton = document.getElementById('ai-button');
        const outputCards = document.querySelectorAll('.output-card');
        
        function runDemoAnimation() {
            // Reset
            demoElement.innerHTML = "";
            aiButton.style.opacity = "0";
            aiButton.style.transform = "translateY(16px)";
            outputCards.forEach(card => {
                card.style.opacity = "0.3";
                card.style.transform = "scale(0.95)";
                card.classList.remove('border-green-400');
                const badge = card.querySelector('.w-2');
                if(badge) badge.classList.replace('bg-green-400', 'bg-slate-600');
            });

            // Step 1: Type
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                if (charIndex < demoText.length) {
                    demoElement.innerHTML += demoText.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                    // Step 2: Show Button
                    setTimeout(() => {
                        aiButton.style.opacity = "1";
                        aiButton.style.transform = "translateY(0)";
                        
                        // Step 3: Click Button (simulate)
                        setTimeout(() => {
                            aiButton.querySelector('button').classList.add('scale-95');
                            setTimeout(() => aiButton.querySelector('button').classList.remove('scale-95'), 150);
                            
                            // Step 4: Distribute
                            let cardIndex = 0;
                            const distributeInterval = setInterval(() => {
                                if (cardIndex < outputCards.length) {
                                    const card = outputCards[cardIndex];
                                    card.style.opacity = "1";
                                    card.style.transform = "scale(1)";
                                    card.classList.add('border-green-400');
                                    const badge = card.querySelector('.w-2');
                                    if(badge) {
                                        badge.classList.replace('bg-slate-600', 'bg-green-400');
                                        badge.classList.add('shadow-[0_0_10px_rgba(74,222,128,0.5)]');
                                    }
                                    cardIndex++;
                                } else {
                                    clearInterval(distributeInterval);
                                    // Loop
                                    setTimeout(runDemoAnimation, 4000);
                                }
                            }, 300);
                            
                        }, 800);
                    }, 500);
                }
            }, 30);
        }

        // Trigger demo animation when section is in view
        const demoSection = document.getElementById('how-it-works');
        const demoObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                runDemoAnimation();
                demoObserver.disconnect(); // Run once trigger, then it loops itself
            }
        }, { threshold: 0.5 });
        
        demoObserver.observe(demoSection);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-navy-800 to-gold-400 z-50 w-0 transition-all duration-100" id="progressBar"></div>

<nav className="fixed w-full z-40 transition-all duration-300 top-0" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-navy-800 text-white flex items-center justify-center rounded-sm font-serif text-lg font-bold group-hover:bg-gold-400 transition-colors duration-500">M</div>
<span className="font-serif text-xl font-semibold tracking-tight text-navy-800">Madison Studio</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors" href="#pricing">Pricing</a>
<button className="bg-navy-800 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-navy-900 transition-all hover:scale-105 hover:shadow-lg flex items-center gap-2 group">
<span>Schedule Demo</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden luxury-gradient">

<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 opacity-50 skew-x-12 translate-x-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 max-w-2xl reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-navy-800 mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-gold-400"></span>
</span>
                        New for K-12 Districts
                    </div>
<h1 className="font-serif text-5xl lg:text-7xl font-medium tracking-tight text-navy-800 leading-[1.1]">
                        Stop recreating the <span className="italic text-slate-400">same message</span> for every platform.
                    </h1>
<p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg min-h-[3.5rem]" id="heroTypewriter">

</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-navy-800 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-navy-900 transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group relative overflow-hidden">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
<span>Schedule Your Demo</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="chevron-right"></i>
</button>
<button className="bg-white border border-slate-200 text-navy-800 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span>See How Districts Use It</span>
</button>
</div>
<div className="pt-8 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<p>Trusted by 50+ forward-thinking districts</p>
</div>
</div>

<div className="relative h-[500px] w-full reveal-on-scroll stagger-delay-2 group perspective-1000">

<div className="absolute top-10 left-0 w-full max-w-md bg-white rounded-xl shadow-lg border border-red-100 p-6 transform -rotate-6 scale-90 opacity-60 transition-all duration-700 group-hover:opacity-0 group-hover:translate-x-[-100px]">
<div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<span className="text-xs font-semibold text-red-500">Urgent: Login Failed</span>
</div>
<div className="space-y-3 opacity-50">
<div className="h-2 bg-slate-200 rounded w-3/4"></div>
<div className="h-2 bg-slate-200 rounded w-1/2"></div>
<div className="h-2 bg-slate-200 rounded w-5/6"></div>
</div>
</div>
<div className="absolute top-20 right-10 w-full max-w-sm bg-white rounded-xl shadow-lg border border-slate-200 p-6 transform rotate-3 scale-90 opacity-60 transition-all duration-700 group-hover:opacity-0 group-hover:translate-x-[100px]">
<div className="flex justify-between mb-4">
<span className="text-xs font-medium text-slate-400">Facebook Manager</span>
</div>
<div className="h-20 bg-slate-50 rounded mb-2 border border-dashed border-slate-200"></div>
<div className="h-8 bg-blue-600 rounded w-1/3 opacity-20"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-0 overflow-hidden transform transition-all duration-700 hover:scale-105 z-20">
<div className="bg-navy-800 p-4 flex justify-between items-center">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
</div>
<span className="text-xs font-medium text-white/80">Madison Dashboard</span>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-serif text-lg font-medium text-navy-800">Weather Alert</h3>
<span className="px-2 py-1 bg-green-50 text-green-600 text-xs rounded-full border border-green-100 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="check"></i> Synced
                                </span>
</div>
<div className="space-y-4">
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between group/item">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="facebook"></i>
</div>
<span className="text-sm font-medium text-slate-700">Facebook</span>
</div>
<i className="w-4 h-4 text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity" data-lucide="check-circle-2"></i>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between group/item">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-500">
<i className="w-4 h-4" data-lucide="twitter"></i>
</div>
<span className="text-sm font-medium text-slate-700">Twitter</span>
</div>
<i className="w-4 h-4 text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity" data-lucide="check-circle-2"></i>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-between group/item">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
<i className="w-4 h-4" data-lucide="globe"></i>
</div>
<span className="text-sm font-medium text-slate-700">District Website</span>
</div>
<i className="w-4 h-4 text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity" data-lucide="check-circle-2"></i>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 border border-slate-200/50 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none -z-10"></div>
<div className="absolute top-20 left-10 p-2 bg-white shadow-lg rounded-xl animate-float"><i className="w-5 h-5 text-purple-500" data-lucide="mail"></i></div>
<div className="absolute bottom-20 right-10 p-2 bg-white shadow-lg rounded-xl animate-float-delayed"><i className="w-5 h-5 text-slate-700" data-lucide="smartphone"></i></div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-white py-10 overflow-hidden">
<p className="text-center text-xs font-semibold tracking-wider text-slate-400 uppercase mb-8">Empowering communications teams at</p>
<div className="relative w-full overflow-hidden">
<div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
<div className="flex w-1/2 justify-around items-center px-10 gap-12 text-slate-400 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Oakridge Schools</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Valley Unified</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Summit Academy</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Riverdale District</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">North Star Prep</div>
</div>
<div className="flex w-1/2 justify-around items-center px-10 gap-12 text-slate-400 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Oakridge Schools</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Valley Unified</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Summit Academy</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">Riverdale District</div>
<div className="text-xl font-serif font-bold hover:text-navy-800 cursor-default">North Star Prep</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy-800 mb-4 tracking-tight">The challenges you face every day</h2>
<p className="text-slate-500 text-lg">Managing district communications shouldn't feel like firefighting.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll stagger-delay-1 group">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-red-500" data-lucide="layers"></i>
</div>
<h3 className="font-serif text-lg font-medium text-navy-800 mb-2">Channel Overload</h3>
<p className="text-sm text-slate-500 leading-relaxed">Juggling 6+ platforms with login credentials scattered across sticky notes.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll stagger-delay-2 group">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-orange-500" data-lucide="alert-circle"></i>
</div>
<h3 className="font-serif text-lg font-medium text-navy-800 mb-2">Inconsistent Branding</h3>
<p className="text-sm text-slate-500 leading-relaxed">Old logos and wrong colors appearing on school sub-pages without approval.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll stagger-delay-3 group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-blue-500 group-hover:animate-spin" data-lucide="clock"></i>
</div>
<h3 className="font-serif text-lg font-medium text-navy-800 mb-2">Time Scarcity</h3>
<p className="text-sm text-slate-500 leading-relaxed">Spending 15+ hours a week just reformatting the same message for different apps.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 reveal-on-scroll stagger-delay-4 group">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-purple-500" data-lucide="file-x"></i>
</div>
<h3 className="font-serif text-lg font-medium text-navy-800 mb-2">Lost Content</h3>
<p className="text-sm text-slate-500 leading-relaxed">Great photos and stories getting buried in email threads, never to be seen.</p>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden bg-navy-900 text-white relative" id="how-it-works">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl filter mix-blend-screen"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl filter mix-blend-screen"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="font-serif text-4xl lg:text-5xl font-medium mb-6 tracking-tight">Create Once. Publish Everywhere.</h2>
<p className="text-slate-300 text-lg max-w-2xl mx-auto">Watch how Madison Studio transforms a single update into a multi-channel campaign instantly.</p>
</div>

<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 reveal-on-scroll">
<div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-700/50 relative">

<div className="bg-slate-100 border-b border-slate-200 p-3 flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>

<div className="p-8 h-[300px] bg-white text-slate-800 relative">
<div className="font-serif text-2xl mb-4 text-navy-800">School Closing Alert</div>
<div className="text-slate-500 font-mono text-sm leading-relaxed typewriter-cursor" id="demo-editor-text"></div>

<div className="absolute bottom-6 right-6 opacity-0 transform translate-y-4 transition-all duration-500" id="ai-button">
<button className="bg-gold-400 hover:bg-gold-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                                    Adapt &amp; Publish
                                </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col items-center justify-center gap-4 reveal-on-scroll stagger-delay-2 h-32 lg:h-auto">
<div className="w-0.5 h-full bg-slate-700 relative overflow-hidden hidden lg:block">
<div className="absolute top-0 left-0 w-full h-1/3 bg-gold-400 animate-slide-down"></div>
</div>
<div className="w-12 h-12 rounded-full bg-navy-800 border border-slate-600 flex items-center justify-center z-10 relative">
<i className="w-5 h-5 text-white lg:hidden" data-lucide="arrow-right"></i>
<i className="w-5 h-5 text-gold-400 hidden lg:block animate-pulse" data-lucide="wand-2"></i>
</div>
</div>

<div className="lg:col-span-5 reveal-on-scroll stagger-delay-3">
<div className="grid grid-cols-2 gap-4" id="output-grid">

<div className="output-card opacity-30 scale-95 p-4 rounded-lg bg-navy-800 border border-slate-700 transition-all duration-500 flex flex-col gap-2">
<div className="flex justify-between items-center">
<i className="w-4 h-4 text-blue-400" data-lucide="facebook"></i>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
</div>
<div className="h-2 w-3/4 bg-slate-700 rounded"></div>
<div className="h-20 bg-slate-700/50 rounded mt-1"></div>
</div>
<div className="output-card opacity-30 scale-95 p-4 rounded-lg bg-navy-800 border border-slate-700 transition-all duration-500 flex flex-col gap-2">
<div className="flex justify-between items-center">
<i className="w-4 h-4 text-sky-400" data-lucide="twitter"></i>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
</div>
<div className="h-2 w-full bg-slate-700 rounded"></div>
<div className="h-2 w-2/3 bg-slate-700 rounded"></div>
</div>
<div className="output-card opacity-30 scale-95 p-4 rounded-lg bg-navy-800 border border-slate-700 transition-all duration-500 flex flex-col gap-2">
<div className="flex justify-between items-center">
<i className="w-4 h-4 text-green-400" data-lucide="smartphone"></i>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
</div>
<div className="h-2 w-1/2 bg-slate-700 rounded"></div>
</div>
<div className="output-card opacity-30 scale-95 p-4 rounded-lg bg-navy-800 border border-slate-700 transition-all duration-500 flex flex-col gap-2">
<div className="flex justify-between items-center">
<i className="w-4 h-4 text-purple-400" data-lucide="mail"></i>
<div className="w-2 h-2 rounded-full bg-slate-600"></div>
</div>
<div className="h-2 w-1/3 bg-slate-700 rounded"></div>
<div className="h-16 bg-slate-700/50 rounded mt-1"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<h2 className="font-serif text-3xl lg:text-4xl font-medium text-navy-800 mb-6">Built specifically for K-12 Districts</h2>
<p className="text-slate-500 text-lg mb-8">Features designed to handle everything from emergency closures to the superintendent's weekly newsletter.</p>
<ul className="space-y-6">
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-green-200 transition-colors">
<i className="w-3.5 h-3.5 text-green-600" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-navy-800">ADA Compliant Automatically</h4>
<p className="text-sm text-slate-500 mt-1">Every post is checked for accessibility before it goes live.</p>
</div>
</li>
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-green-200 transition-colors">
<i className="w-3.5 h-3.5 text-green-600" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-navy-800">SIS Integration</h4>
<p className="text-sm text-slate-500 mt-1">Connects seamlessly with PowerSchool, Skyward, and Google.</p>
</div>
</li>
<li className="flex gap-4 items-start group">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 flex-shrink-0 group-hover:bg-green-200 transition-colors">
<i className="w-3.5 h-3.5 text-green-600" data-lucide="check"></i>
</div>
<div>
<h4 className="font-medium text-navy-800">Emergency Override</h4>
<p className="text-sm text-slate-500 mt-1">Push urgent alerts to the top of every website and app instantly.</p>
</div>
</li>
</ul>
</div>
<div className="relative reveal-on-scroll stagger-delay-2">
<div className="aspect-square rounded-2xl bg-slate-50 overflow-hidden relative border border-slate-100 shadow-lg">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-90 transition-transform duration-[10s] hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-gold-400">Success Story</span>
<div className="flex text-gold-400"><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i><i className="w-3 h-3 fill-current" data-lucide="star"></i></div>
</div>
<p className="font-serif italic text-lg leading-relaxed">"Madison Studio saved our small team over 15 hours a week. We can finally focus on storytelling instead of formatting."</p>
<p className="mt-4 text-sm font-medium">— Sarah Jenkins, Dir. of Communications</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<h2 className="font-serif text-3xl font-medium text-navy-800 mb-6">Calculate Your Savings</h2>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<label className="block text-sm font-medium text-slate-700 mb-4">Hours spent on social media &amp; web updates weekly</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-navy-800 mb-8" id="roiSlider" max="40" min="5" type="range" value="15"/>
<div className="flex justify-between items-end border-b border-slate-100 pb-6 mb-6">
<div>
<p className="text-sm text-slate-500 mb-1">Weekly Time Saved</p>
<p className="text-4xl font-serif text-navy-800" id="hoursSaved">10 hrs</p>
</div>
<div className="text-right">
<p className="text-sm text-slate-500 mb-1">Annual Cost Savings</p>
<p className="text-4xl font-serif text-green-600" id="moneySaved">$24,000</p>
</div>
</div>
<p className="text-xs text-slate-400">*Based on average communications specialist salary.</p>
</div>
</div>

<div className="reveal-on-scroll stagger-delay-2">
<h2 className="font-serif text-3xl font-medium text-navy-800 mb-6">Transparent Pricing</h2>
<div className="bg-navy-800 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32" data-lucide="school"></i>
</div>
<div className="relative z-10">
<div className="inline-block bg-gold-400 text-navy-900 text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</div>
<h3 className="text-2xl font-serif mb-2">District Standard</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-bold">$3,500</span>
<span className="text-slate-400">/ year per school</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-green-400" data-lucide="check-circle"></i>
<span className="text-slate-200">Unlimited users</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-green-400" data-lucide="check-circle"></i>
<span className="text-slate-200">All 6 social/web channels</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-green-400" data-lucide="check-circle"></i>
<span className="text-slate-200">Emergency alert system</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-green-400" data-lucide="check-circle"></i>
<span className="text-slate-200">Priority support</span>
</li>
</ul>
<button className="w-full bg-white text-navy-800 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors">
                                Get Started
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-navy-900"></div>
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-navy-900 to-black"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center text-white">
<h2 className="font-serif text-5xl lg:text-6xl mb-8 leading-tight">Ready to reclaim your time?</h2>
<p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Join the communications directors who have stopped the copy-paste madness.</p>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
<button className="bg-gold-400 text-navy-900 px-10 py-5 rounded-full text-lg font-semibold hover:bg-gold-500 transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.5)] w-full sm:w-auto">
                    Schedule Your Demo
                </button>
<div className="text-sm text-slate-400 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    2 slots available today
                </div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-navy-800 text-white flex items-center justify-center rounded-sm font-serif text-sm">M</div>
<span className="font-serif text-lg font-semibold text-navy-800">Madison Studio</span>
</div>
<div className="text-sm text-slate-500">
                © 2024 Madison Studio. Designed for Education.
            </div>
<div className="flex gap-6">
<i className="w-5 h-5 text-slate-400 hover:text-navy-800 cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 text-slate-400 hover:text-navy-800 cursor-pointer transition-colors" data-lucide="linkedin"></i>
<i className="w-5 h-5 text-slate-400 hover:text-navy-800 cursor-pointer transition-colors" data-lucide="instagram"></i>
</div>
</div>
</footer>


    </>
  );
}
