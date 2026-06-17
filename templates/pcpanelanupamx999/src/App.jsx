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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neon: {
purple: '#a855f7', // Violet 500
blue: '#3b82f6',   // Blue 500
cyan: '#06b6d4',   // Cyan 500
}
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Router Logic
        function navigate(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
            });
            // Show selected page
            document.getElementById(pageId).classList.remove('hidden');
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Close mobile menu if open
            document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Registration Validation
        function handleRegister(e) {
            e.preventDefault();
            const p1 = document.getElementById('regPass').value;
            const p2 = document.getElementById('regConfirm').value;
            const err = document.getElementById('regError');

            if (p1 !== p2) {
                err.classList.remove('hidden');
                return;
            }
            err.classList.add('hidden');
            alert('Registration simulated. Redirecting to login...');
            navigate('login');
        }

        // Payment Logic
        let timerInterval;
        let currentPackage = "";
        
        function openPaymentModal(pkgName, price) {
            currentPackage = pkgName;
            const modal = document.getElementById('paymentModal');
            const step1 = document.getElementById('paymentStep1');
            const step2 = document.getElementById('paymentStep2');
            
            // Reset state
            step1.classList.remove('hidden');
            step2.classList.add('hidden');
            document.getElementById('utrInput').value = '';
            document.getElementById('modalPackageName').innerText = pkgName;
            document.getElementById('modalPrice').innerText = '₹' + price;
            
            modal.classList.remove('hidden');

            // Start Timer (60 seconds)
            let timeLeft = 60;
            const timerDisplay = document.getElementById('timerDisplay');
            timerDisplay.innerText = "01:00";
            
            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                timeLeft--;
                
                // Format time 00:00
                const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
                const s = (timeLeft % 60).toString().padStart(2, '0');
                timerDisplay.innerText = `${m}:${s}`;
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    timerDisplay.innerText = "Time Expired - Please Refresh";
                    timerDisplay.classList.add('text-zinc-400');
                }
            }, 1000);
        }

        function closePaymentModal() {
            document.getElementById('paymentModal').classList.add('hidden');
            clearInterval(timerInterval);
        }

        function submitPayment() {
            const utr = document.getElementById('utrInput').value;
            if (utr.length < 12) { // Basic UTR length check
                alert("Please enter a valid 12-digit UTR number.");
                return;
            }
            
            // Move to success step
            clearInterval(timerInterval);
            document.getElementById('paymentStep1').classList.add('hidden');
            document.getElementById('paymentStep2').classList.remove('hidden');
        }

        function finalizePayment() {
            const phone = "919339878493"; // Assuming country code +91
            const message = encodeURIComponent(`Hello, I have purchased ${currentPackage}. My Payment verification is complete.`);
            window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
            closePaymentModal();
        }
    
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-1/2 h-1/2 bg-violet-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-cyan-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="navigate('home')">
<div className="p-2 bg-gradient-to-br from-violet-600 to-cyan-500 rounded-lg group-hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300">
<i className="text-white w-6 h-6" data-lucide="gamepad-2"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white group-hover:text-violet-400 transition-colors">ANUAM</span>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium hover:text-white transition-colors" onclick="navigate('home')">Home</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="navigate('cheats')">Cheats</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="navigate('services')">Services</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="navigate('about')">About</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="navigate('contact')">Contact</button>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" onclick="navigate('login')">Login</button>
<button className="px-5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium text-white transition-all hover:neon-glow" onclick="navigate('register')">Register</button>
</div>

<button className="md:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:hidden glass border-b border-white/5 absolute w-full" id="mobile-menu">
<div className="flex flex-col p-4 gap-4">
<button className="text-left text-base font-medium text-zinc-300" onclick="navigate('home')">Home</button>
<button className="text-left text-base font-medium text-zinc-300" onclick="navigate('cheats')">Cheats</button>
<button className="text-left text-base font-medium text-zinc-300" onclick="navigate('services')">Services</button>
<button className="text-left text-base font-medium text-zinc-300" onclick="navigate('login')">Login</button>
<button className="text-left text-base font-medium text-violet-400" onclick="navigate('register')">Register</button>
</div>
</div>
</nav>

<main className="flex-grow pt-20">

<section className="page-section min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden" id="home">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-[120px] -z-10 animate-pulse-glow"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-[120px] -z-10 animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-neonBlue/30 text-neonBlue text-xs font-bold tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-neonBlue animate-pulse"></span>
                        SYSTEM ONLINE v4.0
                    </div>
<h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Free Fire Pc Panel<br/>
<span className="text-gradient">Enhancement Tools</span>
</h1>
<p className="text-secondary text-lg leading-relaxed max-w-xl mb-8">
                        ANUPAM X999 DARKNET SERVER with our undetectable, Anti-Ban Panel.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 px-8 py-4 rounded bg-green-500/10 border border-green-500/20 hover:border-green-500 text-green-400 font-medium transition-all hover:bg-green-500/20 group" href="https://wa.me/message/RDX3GB3WRBZHO1" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                            Join WhatsApp
                        </a>
<a className="flex items-center justify-center gap-2 px-8 py-4 rounded bg-indigo-500/10 border border-indigo-500/20 hover:border-indigo-500 text-indigo-400 font-medium transition-all hover:bg-indigo-500/20 group" href="https://discord.gg/VFzqYYpFfB" target="_blank">
<i className="w-5 h-5" data-lucide="gamepad-2"></i>
                            Join Discord
                        </a>
</div>
</div>

<div className="relative flex justify-center animate-float hidden lg:flex">
<div className="relative z-10 w-full max-w-md bg-gradient-to-br from-surface to-black border border-white/10 rounded-2xl p-2 shadow-2xl neon-border">
<div className="absolute inset-0 bg-neonBlue/20 blur-xl -z-10"></div>
<div className="aspect-video bg-black rounded-xl overflow-hidden relative">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
<div className="w-20 h-20 rounded-full border-2 border-neonBlue flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(0,240,255,0.4)]">
<i className="w-10 h-10 text-neonBlue" data-lucide="crosshair"></i>
</div>
<div className="text-xs text-neonBlue font-mono tracking-widest">TARGET LOCKED</div>
</div>

<div className="absolute bottom-4 left-4 right-4 h-1 bg-white/10 rounded overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-neonBlue to-neonPurple"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden max-w-7xl mx-auto px-6 py-12" id="cheats">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">Premium Packages</h2>
<p className="text-lg text-zinc-400">Choose your level of dominance</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all group">
<h3 className="text-xl font-medium text-white mb-2">BASIC</h3>
<div className="text-4xl font-medium text-white mb-6">₹400<span className="text-lg text-zinc-500 font-normal">/Mo-LifeTime=₹500</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-violet-400" data-lucide="check"></i> Aimbot Legit</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-violet-400" data-lucide="check"></i> ESP Lines</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-violet-400" data-lucide="check"></i> All server safe</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> If you have any problems, you can contact me</li>
</ul>
<button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-all" onclick="openPaymentModal('Daily Pass', 199)">Purchase Now</button>
</div>

<div className="glass p-8 rounded-2xl border border-violet-500/30 relative shadow-[0_0_30px_rgba(139,92,246,0.1)] transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full text-xs font-semibold text-white tracking-wide uppercase">Most Popular</div>
<h3 className="text-xl font-medium text-white mb-2">INTERNAL</h3>
<div className="text-4xl font-medium text-white mb-6">₹500<span className="text-lg text-zinc-500 font-normal">/Mo-LifeTime=₹ 1500</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> Everything in Daily</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> Silent Aim</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i>𝙈𝙖𝙜𝙣𝙚𝙩𝙞𝙘-𝙋𝙪𝙡𝙡 </li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> Streamer Mode</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> If you have any problems, you can contact me</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 font-medium transition-all shadow-lg shadow-violet-500/20" onclick="openPaymentModal('Weekly Pass', 899)">Purchase Now</button>
</div>

<div className="glass p-8 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all group">
<h3 className="text-xl font-medium text-white mb-2">𝐒𝐓𝐑𝐄𝐀𝐌𝐄𝐑-𝐏𝐀𝐍𝐄𝐋</h3>
<div className="text-4xl font-medium text-white mb-6">₹2k<span className="text-lg text-zinc-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-violet-400" data-lucide="check"></i> Full Feature Access</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-violet-400" data-lucide="check"></i> iPad View</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-violet-400" data-lucide="check"></i> Private Server</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-violet-400" data-lucide="check"></i> VIP Support</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> If you have any problems, you can contact me</li>
</ul>
<button className="w-full py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-all" onclick="openPaymentModal('Monthly Pass', 2499)">Purchase Now</button>
</div>
</div>
</section>

<section className="page-section hidden max-w-7xl mx-auto px-6 py-12" id="services">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">Our Custom Services </h2>
<p className="text-lg text-zinc-400">ANUPAM X999 DARKNET SERVER CUSTOM  PRODUCTS SERVICE</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass p-6 rounded-xl border border-white/5 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4 text-violet-400">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Anti-Ban Protection</h3>
<p className="text-zinc-400">Advanced bypass methods ensuring your account remains safe from detection systems.</p>
</div>
<div className="glass p-6 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Instant Delivery</h3>
<p className="text-zinc-400">Automated systems deliver your Exe immediately after payment confirmation.</p>
</div>
<div className="glass p-6 rounded-xl border border-white/5 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4 text-violet-400">
<i className="w-6 h-6" data-lucide="headphones"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">24/7 Support</h3>
<p className="text-zinc-400">Dedicated team available round the clock to assist with setup and troubleshooting.</p>
</div>
<div className="glass p-6 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
<i className="w-6 h-6" data-lucide="crosshair"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Custom Configs</h3>
<p className="text-zinc-400">Tailored settings for legit play or rage hacking, fully customizable by you.</p>
</div>
<div className="glass p-6 rounded-xl border border-white/5 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-violet-500/10 rounded-lg flex items-center justify-center mb-4 text-violet-400">
<i className="w-6 h-6" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Daily Updates</h3>
<p className="text-zinc-400">We update our tools instantly whenever the game patches to ensure zero downtime.</p>
</div>
<div className="glass p-6 rounded-xl border border-white/5 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 text-cyan-400">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Private Community</h3>
<p className="text-zinc-400">Access to our private VIP Discord server for strategies and networking.</p>
</div>
<div className="glass p-8 rounded-2xl border border-violet-500/30 relative shadow-[0_0_30px_rgba(139,92,246,0.1)] transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full text-xs font-semibold text-white tracking-wide uppercase">CUSTOM PANEL Purchase Now</div>
<h3 className="text-xl font-medium text-white mb-2">CUSTOM Everything </h3>
<div className="text-4xl font-medium text-white mb-6">₹ contact<span className="text-lg text-zinc-500 font-normal">/obb charge 600</span></div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> any panel </li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> Silent Aim</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i>𝙈𝙖𝙜𝙣𝙚𝙩𝙞𝙘-𝙋𝙪𝙡𝙡 </li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> Streamer Mode</li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> A TO Z </li>
<li className="flex items-center gap-3 text-zinc-300"><i className="w-5 h-5 text-cyan-400" data-lucide="check"></i> If you have any problems, you can contact me</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 font-medium transition-all shadow-lg shadow-violet-500/20" onclick="openPaymentModal('Weekly Pass', 899)">Purchase Now</button>
</div>
</div>
</section>

<section className="page-section hidden max-w-4xl mx-auto px-6 py-12" id="about">
<div className="space-y-12">
<div className="text-center">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-6">About ANUPAM THAKUR </h2>
<p className="text-lg text-zinc-400">My name is Anupam Thakur. I am an ethical hacker and a website designer with a strong passion for technology and cybersecurity. I enjoy learning how systems work and how to make them more secure.

I have knowledge of Python and Java, and I am continuously learning these languages from A to Z to improve my skills in programming, automation, and secure development. I like creating websites that are not only visually attractive but also safe and efficient.

My goal is to grow as a professional ethical hacker and developer, help people protect their digital assets, and build smart, secure web solutions.

I believe in continuous learning, ethical practices, and using technology for positive purposes.

— Anupam Thakur</p>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-2xl text-white font-medium mb-4">Our Mission</h3>
<p className="text-zinc-400 leading-relaxed">To provide the most secure, reliable, and high-performance gaming tools in the market. We believe in quality over quantity and transparency with our user base.</p>
</div>
<div>
<h3 className="text-2xl text-white font-medium mb-4">Why Choose Us?</h3>
<p className="text-zinc-400 leading-relaxed">Unlike cheap resellers, we develop our own kernels. Our dedicated developers work tirelessly to stay ahead of anti-cheat updates.</p>
</div>
</div>
<div className="glass p-8 rounded-2xl border border-white/5 text-center">
<h3 className="text-xl text-white font-medium mb-4">Trusted by over 10,000+ Gamers</h3>
<div className="flex justify-center gap-2">
<i className="w-5 h-5 text-yellow-500 fill-yellow-500" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-500 fill-yellow-500" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-500 fill-yellow-500" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-500 fill-yellow-500" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-500 fill-yellow-500" data-lucide="star"></i>
</div>
</div>
</div>
</section>

<section className="page-section hidden max-w-7xl mx-auto px-6 py-12" id="contact">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-6">
                Get In Touch
            </h2>
<p className="text-lg text-zinc-400 mb-8">
                Have questions? Need support? Reach out to us directly.
            </p>
<div className="space-y-4">

<a className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-[#25D366]/50 transition-colors" href="https://wa.me/message/RDX3GB3WRBZHO1" target="_blank">
<div className="bg-[#25D366] p-2 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</div>
<span className="text-white font-medium">WhatsApp Support</span>
</a>

<a className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-[#5865F2]/50 transition-colors" href="https://discord.gg/h733z3fCH8" target="_blank">
<div className="bg-[#5865F2] p-2 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="gamepad"></i>
</div>
<span className="text-white font-medium">Discord Server</span>
</a>

<a className="flex items-center gap-4 p-4 glass rounded-xl border border-white/5 hover:border-sky-500/50 transition-colors" href="https://t.me/YOURCHANNEL" target="_blank">
<div className="bg-sky-500 p-2 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="send"></i>
</div>
<span className="text-white font-medium">Telegram Channel</span>
</a>
</div>
</div>
</div>
</section>

<section className="page-section hidden max-w-md mx-auto px-6 py-12" id="login">
<div className="glass p-8 rounded-2xl border border-white/5 shadow-2xl shadow-violet-900/10">
<div className="text-center mb-8">
<h2 className="text-2xl font-medium text-white mb-2">Welcome Back</h2>
<p className="text-zinc-400 text-sm">Sign in to manage your subscription</p>
</div>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 transition-colors outline-none" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-violet-500 transition-colors outline-none" placeholder="••••••••" type="password"/>
</div>
<button className="w-full py-3 bg-white text-zinc-950 rounded-lg font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" type="button">Login</button>
</form>
<div className="mt-6 text-center text-sm text-zinc-500">
                    Don't have an account? <button className="text-violet-400 hover:text-violet-300" onclick="navigate('register')">Register</button>
</div>
</div>
</section>

<section className="page-section hidden max-w-md mx-auto px-6 py-12" id="register">
<div className="glass p-8 rounded-2xl border border-white/5 shadow-2xl shadow-cyan-900/10">
<div className="text-center mb-8">
<h2 className="text-2xl font-medium text-white mb-2">Create Account</h2>
<p className="text-zinc-400 text-sm">Join the elite gaming community</p>
</div>
<form className="space-y-5" id="regForm" onsubmit="handleRegister(event)">
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Username</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 transition-colors outline-none" id="regUser" placeholder="Username" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 transition-colors outline-none" id="regEmail" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Password</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 transition-colors outline-none" id="regPass" placeholder="••••••••" required="" type="password"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Confirm Password</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg p-3 text-white focus:border-cyan-500 transition-colors outline-none" id="regConfirm" placeholder="••••••••" required="" type="password"/>
</div>
<div className="text-red-500 text-xs hidden" id="regError">Passwords do not match</div>
<button className="w-full py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]" type="submit">Create Account</button>
</form>
<div className="mt-6 text-center text-sm text-zinc-500">
                    Already have an account? <button className="text-cyan-400 hover:text-cyan-300" onclick="navigate('login')">Login</button>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-[100] hidden" id="paymentModal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closePaymentModal()"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm p-4">
<div className="glass bg-white rounded-3xl border border-white/20 shadow-2xl overflow-hidden relative">

<div id="paymentStep1">

<div className="bg-[#00BAF2] h-12 w-full absolute top-0 left-0 rounded-t-3xl z-0"></div>
<div className="bg-[#0f172a] h-1/2 w-full absolute bottom-0 left-0 z-0"></div>
<div className="relative z-10 bg-white m-4 mt-8 rounded-2xl p-4 shadow-lg text-center pb-8">
<div className="flex items-center justify-center gap-2 mb-4">

<span className="text-2xl font-bold tracking-tight text-[#0f2d5e]">Pay<span className="text-[#00BAF2]">tm</span></span>
<span className="text-xs font-bold text-zinc-400">▼</span>
<span className="text-xl font-bold italic text-zinc-700">UPI</span>
</div>

<div className="w-64 h-64 mx-auto mb-4 bg-white p-1">
<img alt="UPI QR Code" className="w-full h-full object-contain" src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&amp;data=upi://pay?pa=9339878493@ptsbi&amp;pn=NexusGaming&amp;am=0&amp;cu=INR"/>
</div>
<div className="text-center space-y-1 mb-6">
<div className="text-lg font-semibold text-zinc-800" id="modalPackageName">Package Name</div>
<div className="text-2xl font-bold text-zinc-900" id="modalPrice">₹0</div>
<div className="text-sm font-medium text-zinc-500 mt-2">9339878493@ptsbi</div>
</div>

<div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
<div className="text-red-500 font-mono font-bold text-xl mb-3" id="timerDisplay">01:00</div>
<div className="space-y-3">
<input className="w-full p-3 border border-zinc-300 rounded-lg text-zinc-900 bg-white focus:ring-2 focus:ring-[#00BAF2] outline-none text-center font-mono" id="utrInput" placeholder="Enter 12-digit UTR" type="number"/>
<button className="w-full py-3 bg-[#00BAF2] hover:bg-[#00a0d1] text-white font-bold rounded-lg transition-colors shadow-md" onclick="submitPayment()">
                                    Submit UTR
                                </button>
</div>
</div>
</div>
</div>

<div className="hidden bg-white p-8 text-center min-h-[400px] flex flex-col items-center justify-center" id="paymentStep2">
<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
<i className="w-10 h-10 text-green-600" data-lucide="check"></i>
</div>
<h3 className="text-2xl font-bold text-zinc-800 mb-2">Payment Successful!</h3>
<p className="text-zinc-500 mb-8">Your transaction has been verified.</p>
<button className="px-8 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-all w-full" onclick="finalizePayment()">
                        Done
                    </button>
</div>
</div>

<button className="absolute -top-12 right-0 text-white/50 hover:text-white" onclick="closePaymentModal()">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
</div>
</div>


    </>
  );
}
