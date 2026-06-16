import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Roboto', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
background: '#0B0B15',
surface: '#131320',
surfaceLight: '#1C1C2E',
primary: '#00BFFF', // Cyan
secondary: '#20B2AA', // Teal
accent: '#818CF8', // Indigo
text: {
main: '#FFFFFF',
muted: '#94A3B8',
dark: '#0F172A'
}
},
backgroundImage: {
'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(0, 191, 255, 0.15) 0%, transparent 60%)',
'gradient-primary': 'linear-gradient(135deg, #00BFFF 0%, #20B2AA 100%)',
'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
'mesh': 'radial-gradient(at 0% 0%, rgba(32, 178, 170, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(0, 191, 255, 0.15) 0px, transparent 50%)',
'soft-mesh': 'radial-gradient(at 10% 10%, rgba(32, 178, 170, 0.1) 0px, transparent 40%), radial-gradient(at 90% 90%, rgba(0, 191, 255, 0.1) 0px, transparent 40%)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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



        // Init Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const mobileMenu = document.getElementById('mobile-menu');
        
        function toggleMobileMenu() {
            if (mobileMenu.classList.contains('translate-x-full')) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }

        // Modal Logic
        const modalOverlay = document.getElementById('modal-overlay');
        const modalContent = document.getElementById('modal-content');
        const modalBody = document.getElementById('modal-body');

        // Modal Content Templates
        const modalTemplates = {
            login: `
                <h3 class="text-2xl font-display font-semibold mb-6">Welcome Back</h3>
                <form onsubmit="handleForm(event, 'Login successful!')">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Email</label>
                            <input type="email" required placeholder="you@company.com" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                        </div>
                        <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Password</label>
                            <input type="password" required placeholder="••••••••" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                        </div>
                        <button type="submit" class="w-full bg-primary hover:bg-cyan-400 text-white font-bold py-3 rounded-lg transition-colors mt-2">Log In</button>
                    </div>
                    <p class="text-center text-sm text-text-muted mt-6">Don't have an account? <button onclick="toggleModal('signup')" class="text-primary hover:underline">Sign up</button></p>
                </form>
            `,
            signup: `
                <h3 class="text-2xl font-display font-semibold mb-2">Get Started</h3>
                <p class="text-text-muted text-sm mb-6">Join industry leaders forging the future.</p>
                <form onsubmit="handleForm(event, 'Account created successfully!')">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Full Name</label>
                            <input type="text" required placeholder="Jane Doe" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                        </div>
                        <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Work Email</label>
                            <input type="email" required placeholder="name@company.com" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                        </div>
                         <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Password</label>
                            <input type="password" required placeholder="Create a password" class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                        </div>
                        <button type="submit" class="w-full bg-gradient-primary text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/20 mt-2">Create Account</button>
                    </div>
                </form>
            `,
            contact: `
                <h3 class="text-2xl font-display font-semibold mb-2">Contact Us</h3>
                <p class="text-text-muted text-sm mb-6">Tell us about your project.</p>
                <form onsubmit="handleForm(event, 'Message sent! We will reach out shortly.')">
                    <div class="space-y-4">
                         <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Name</label>
                            <input type="text" required class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                        </div>
                        <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Email</label>
                            <input type="email" required class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors">
                        </div>
                         <div>
                            <label class="block text-xs uppercase tracking-wider text-text-muted mb-1">Message</label>
                            <textarea rows="3" required class="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-primary transition-colors"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-white text-background font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors mt-2">Send Message</button>
                    </div>
                </form>
            `
        };

        function toggleModal(type) {
            if(type) {
                // Open
                modalBody.innerHTML = modalTemplates[type] || modalTemplates['contact'];
                modalOverlay.classList.remove('hidden');
                modalOverlay.classList.add('flex');
                // Small delay for animation
                setTimeout(() => {
                    modalContent.classList.remove('scale-95', 'opacity-0');
                    modalContent.classList.add('scale-100', 'opacity-100');
                }, 10);
            }
        }

        function closeModal() {
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                modalOverlay.classList.add('hidden');
                modalOverlay.classList.remove('flex');
            }, 300);
        }

        function handleForm(e, msg) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = "Processing...";
            btn.disabled = true;
            btn.classList.add('opacity-70', 'cursor-not-allowed');

            setTimeout(() => {
                btn.innerText = "Success";
                btn.classList.remove('bg-primary', 'bg-gradient-primary', 'bg-white', 'text-background');
                btn.classList.add('bg-green-500', 'text-white');
                
                setTimeout(() => {
                    alert(msg);
                    closeModal();
                    // Reset button state for next time (technically form clears on reload but good practice)
                    setTimeout(() => {
                        btn.disabled = false;
                        btn.classList.remove('opacity-70', 'cursor-not-allowed', 'bg-green-500', 'text-white');
                         // Restore approximate classes based on modal type logic or reload
                    }, 500);
                }, 500);
            }, 1000);
        }

        // Close modal on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-background/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,191,255,0.5)] transition-shadow text-white">
<svg className="lucide lucide-sparkles w-5 h-5 fill-current" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="font-display font-semibold text-xl tracking-tight">Aurora AI</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
<a className="hover:text-glow transition-all hover:text-white" href="#solutions">Solutions</a>
<a className="hover:text-glow transition-all hover:text-white" href="#about">About</a>
<a className="hover:text-glow transition-all hover:text-white" href="#cases">Case Studies</a>
<a className="hover:text-glow transition-all hover:text-white" href="#insights">Insights</a>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium hover:text-primary transition-colors" onclick="toggleModal('login')">Log in</button>
<button className="hover:scale-105 active:scale-95 px-5 py-2 rounded-full text-sm font-medium transition-all border shadow-lg bg-white/10 hover:bg-white/20 text-white border-white/5 shadow-black/20" onclick="toggleModal('signup')">
                    Get Started
                </button>
</div>

<button className="md:hidden p-2 text-white" onclick="toggleMobileMenu()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col justify-center items-center gap-8" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-text-muted hover:text-white" onclick="toggleMobileMenu()">
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<a className="text-2xl font-display font-medium text-white" href="#solutions" onclick="toggleMobileMenu()">Solutions</a>
<a className="text-2xl font-display font-medium text-white" href="#about" onclick="toggleMobileMenu()">About</a>
<a className="text-2xl font-display font-medium text-white" href="#cases" onclick="toggleMobileMenu()">Case Studies</a>
<a className="text-2xl font-display font-medium text-white" href="#contact" onclick="toggleMobileMenu()">Contact</a>
<div className="flex flex-col gap-4 mt-8 w-64">
<button className="w-full py-3 rounded-full border font-medium border-white/10 text-white" onclick="toggleMobileMenu(); toggleModal('login')">Log in</button>
<button className="w-full py-3 rounded-full bg-primary font-medium shadow-[0_0_20px_rgba(0,191,255,0.3)] text-white" onclick="toggleMobileMenu(); toggleModal('signup')">Get Started</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[100] hidden items-center justify-center px-4" id="modal-overlay">
<div className="absolute inset-0 backdrop-blur-sm bg-black/60" onclick="closeModal()"></div>
<div className="glass-modal relative w-full max-w-md p-8 rounded-3xl shadow-2xl transform transition-all scale-95 opacity-0" id="modal-content">
<button className="absolute top-4 right-4 text-text-muted transition-colors hover:text-white" onclick="closeModal()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div id="modal-body">

</div>
</div>
</div>

<header className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden" style={{}}>
<div className="absolute inset-0 bg-hero-glow z-0"></div>
<div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-slow"></div>
<div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
<div className="absolute top-32 left-[15%] w-16 h-16 border border-primary/20 rounded-full animate-float hidden lg:block backdrop-blur-sm"></div>
<div className="absolute bottom-40 right-[15%] w-24 h-24 border border-secondary/20 rounded-lg rotate-45 animate-float delay-700 hidden lg:block backdrop-blur-sm"></div>
<div className="container mx-auto px-6 relative z-10 text-center max-w-5xl" style={{}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8 cursor-default hover:bg-primary/10 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                Next Gen Intelligence v2.0 Live
            </div>
<h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight leading-[1.1] mb-6 text-glow" style={{}}>
                Forge the Future with <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary via-cyan-300" style={{}}>Dynamic AI Solutions</span>
</h1>
<p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed" style={{}}>
                We architect and implement cutting-edge AI to unlock unparalleled growth and efficiency for your organization.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="group relative px-8 py-4 bg-gradient-primary rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all overflow-hidden w-full sm:w-auto text-white" onclick="toggleModal('signup')">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Start Your AI Journey
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<a className="group px-8 py-4 bg-surface border rounded-full font-medium transition-all flex items-center justify-center gap-2 w-full sm:w-auto border-white/10 text-white hover:bg-white/5" href="#solutions">
                    Learn More
                    <svg className="lucide lucide-chevron-down w-4 h-4 text-text-muted group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>

<div className="grid md:grid-cols-3 gap-6 text-left scroll-mt-24" id="solutions">
<div className="glass p-6 rounded-2xl hover:border-primary/40 transition-all duration-300 group cursor-default hover:bg-white/5">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-lg font-display font-semibold mb-2 group-hover:text-primary transition-colors">Custom Models</h3>
<p className="text-text-muted text-sm leading-relaxed">Tailored AI models designed to solve your unique business challenges effectively.</p>
</div>
<div className="glass p-6 rounded-2xl hover:border-secondary/40 transition-all duration-300 group cursor-default hover:bg-white/5">
<div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 text-secondary group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
<svg className="lucide lucide-blocks w-6 h-6" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<h3 className="text-lg font-display font-semibold mb-2 group-hover:text-secondary transition-colors">Seamless Integration</h3>
<p className="text-text-muted text-sm leading-relaxed">Effortless integration of AI capabilities into your existing workflows and systems.</p>
</div>
<div className="glass p-6 rounded-2xl transition-all duration-300 group cursor-default hover:border-blue-400/40 hover:bg-white/5">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-blue-400/10 text-blue-400">
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-lg font-display font-semibold mb-2 group-hover:text-blue-400 transition-colors">Data-Driven Insights</h3>
<p className="text-text-muted text-sm leading-relaxed">Unlock actionable intelligence from your data to drive strategic decisions.</p>
</div>
</div>
</div>
</header>

<section className="py-12 border-y bg-background/50 border-white/5">
<div className="container mx-auto px-6">
<p className="text-center text-xs font-semibold tracking-widest text-text-muted uppercase mb-8 opacity-60">Trusted by Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 cursor-default">
<div className="flex items-center gap-2 text-xl font-display font-bold transition-colors hover:text-white"><svg className="lucide lucide-triangle fill-current" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Apes Corp</div>
<div className="flex items-center gap-2 text-xl font-display font-bold transition-colors hover:text-white"><svg className="lucide lucide-hexagon fill-current" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> NeveTech</div>
<div className="flex items-center gap-2 text-xl font-display font-bold transition-colors hover:text-white"><svg className="lucide lucide-circle fill-current" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Zenith</div>
<div className="flex items-center gap-2 text-xl font-display font-bold transition-colors hover:text-white"><svg className="lucide lucide-square fill-current" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Quantum</div>
</div>
</div>
</section>

<section className="overflow-hidden scroll-mt-20 pt-24 pb-24 relative" id="cases" style={{}}>
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="container mx-auto px-6 relative z-10" style={{}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6" style={{}}>

<div className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-primary/10 rounded-lg text-primary"><svg className="lucide lucide-rocket w-6 h-6" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg></div>
<span className="text-xs text-primary font-bold uppercase tracking-wider">Growth</span>
</div>
<div className="text-5xl font-display font-semibold mb-2 flex items-baseline gap-1">500<span className="text-primary text-3xl">+</span></div>
<p className="text-text-muted text-sm mb-6">Successful Projects</p>
<div className="h-1 w-full rounded-full overflow-hidden bg-white/10">
<div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_10px_rgba(0,191,255,0.5)]"></div>
</div>
</div><div className="glass overflow-hidden group hover:-translate-y-2 transition-transform duration-500 lg:mt-8 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="flex mb-6 items-start justify-between">
<div className="p-3 bg-secondary/10 rounded-lg text-secondary"><svg className="lucide lucide-smile w-6 h-6" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></div>
<span className="text-xs text-secondary font-bold uppercase tracking-wider">Trust</span>
</div>
<div className="text-5xl font-display font-semibold mb-2 flex items-baseline gap-1">98<span className="text-secondary text-3xl">%</span></div>
<p className="text-text-muted text-sm mb-6">Client Satisfaction</p>
<div className="h-1 w-full rounded-full overflow-hidden bg-white/10">
<div className="h-full bg-secondary w-[98%] rounded-full shadow-[0_0_10px_rgba(32,178,170,0.5)]"></div>
</div>
</div>


<div className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500" style={{}}>
<div className="flex justify-between items-start mb-6" style={{}}>
<div className="p-3 bg-purple-500/10 rounded-lg text-purple-400"><svg className="lucide lucide-hourglass w-6 h-6" data-lucide="hourglass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14"></path><path d="M5 2h14"></path><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path></svg></div>
<span className="text-xs font-bold uppercase tracking-wider text-purple-400">Experience</span>
</div>
<div className="text-5xl font-display font-semibold mb-2 flex items-baseline gap-1">12<span className="text-3xl text-purple-400">+</span></div>
<p className="text-text-muted text-sm mb-6">Years of Innovation</p>
<div className="h-1 w-full rounded-full overflow-hidden bg-white/10">
<div className="h-full w-full rounded-full shadow-[0_0_10px_rgba(129,140,248,0.5)] bg-purple-400"></div>
</div>
</div>

<div className="glass p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 lg:mt-8">
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-pink-500/10 rounded-lg text-pink-400"><svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></div>
<span className="text-xs font-bold uppercase tracking-wider text-pink-400">Impact</span>
</div>
<div className="text-5xl font-display font-semibold mb-2 flex items-baseline gap-1">10<span className="text-3xl text-pink-400">x</span></div>
<p className="text-text-muted text-sm mb-6">ROI Average</p>
<div className="h-1 w-full rounded-full overflow-hidden bg-white/10">
<div className="h-full w-[90%] rounded-full shadow-[0_0_10px_rgba(192,132,252,0.5)] bg-pink-400"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 text-gray-900">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-display font-semibold tracking-tight mb-4 text-gray-900">Streamlined Discovery Hub</h2>
<p className="text-gray-500 max-w-2xl mx-auto text-lg">Navigate to your ideal solution with clarity. Select the path that aligns with your immediate goals.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group bg-white border-gray-200">
<div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
<svg className="lucide lucide-brain-circuit w-7 h-7" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-display font-semibold mb-3">Custom AI Solutions</h3>
<p className="text-gray-500 text-base mb-8 leading-relaxed">
                         Architect a bespoke AI strategy that tackles operational bottlenecks and scales with your ambition.
                    </p>
<button className="inline-flex items-center text-sm font-bold text-primary tracking-wide uppercase group-hover:gap-2 transition-all" onclick="toggleModal('contact')">
                        Design Your Solution <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="p-8 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group bg-white border-gray-200">
<div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
<svg className="lucide lucide-graduation-cap w-7 h-7" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
</div>
<h3 className="text-xl font-display font-semibold mb-3">Enterprise AI Training</h3>
<p className="text-gray-500 text-base mb-8 leading-relaxed">
                         Equip your workforce with cutting-edge skills to foster a culture of continuous innovation.
                    </p>
<button className="inline-flex items-center text-sm font-bold text-secondary tracking-wide uppercase group-hover:gap-2 transition-all" onclick="toggleModal('contact')">
                        Upskill Your Team <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="p-8 rounded-2xl border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group bg-white border-gray-200">
<div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-display font-semibold mb-3">Instant Workflows</h3>
<p className="text-gray-500 text-base mb-8 leading-relaxed">
                         Deploy pre-built, battle-tested AI workflows to automate routine tasks and see results from day one.
                    </p>
<button className="inline-flex items-center text-sm font-bold text-blue-500 tracking-wide uppercase group-hover:gap-2 transition-all" onclick="toggleModal('contact')">
                        Deploy Now <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br relative scroll-mt-20 from-teal-50/5 via-gray-50/5 to-cyan-50/5" id="about">
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight leading-tight max-w-xl">
                    Crafting Intelligence with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Precision &amp; Purpose</span>
</h2>
<div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full hidden md:block"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">

<div className="lg:col-span-7 glass p-10 rounded-3xl relative overflow-hidden group hover:border-primary/20 transition-colors">
<div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
<svg className="lucide lucide-rocket w-48 h-48" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-primary/20 rounded-lg"><svg className="lucide lucide-target w-6 h-6 text-primary" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg></div>
<h3 className="text-2xl font-display font-semibold">Our Mission</h3>
</div>
<p className="text-text-muted text-lg leading-relaxed max-w-2xl">
                        To democratize advanced intelligent solutions and enable businesses of all sizes to harness the power of AI for growth and innovation. We believe in a future where AI isn't just a tool, but a collaborative partner.
                    </p>
</div>

<div className="lg:col-span-5 glass p-10 rounded-3xl relative overflow-hidden group lg:mt-12 hover:border-secondary/20 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
<svg className="lucide lucide-heart w-40 h-40" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-secondary/20 rounded-lg"><svg className="lucide lucide-heart-handshake w-6 h-6 text-secondary" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg></div>
<h3 className="text-2xl font-display font-semibold">Core Values</h3>
</div>
<p className="text-text-muted text-lg leading-relaxed">
                        Driven by innovation, integrity, and impact. We are committed to ethical AI practices and delivering exceptional results with transparency.
                    </p>
</div>
</div>

<div className="mb-12">
<h3 className="text-2xl font-display font-semibold mb-10">The Minds Behind Aurora</h3>
<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="glass p-8 rounded-2xl text-center group transition-all duration-300 hover:bg-white/5">
<div className="relative inline-block mb-6">
<div className="w-32 h-32 rounded-full overflow-hidden border-2 group-hover:border-primary transition-colors border-white/10">
<img alt="Joan Munoz" className="w-full h-full object-cover" src="https://i.pravatar.cc/300?img=12"/>
</div>
<a className="absolute bottom-0 right-0 bg-surface rounded-full p-2 border hover:border-primary hover:text-primary transition-colors border-white/10" href="#">
<svg className="lucide lucide-linkedin w-4 h-4 fill-current" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<h4 className="text-xl font-semibold mb-1">Joan Munoz</h4>
<p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">CEO &amp; Founder</p>
<p className="text-text-muted text-sm leading-relaxed">Leading strategic vision and driving innovation with over a decade of AI research experience.</p>
</div><div className="glass group transition-all duration-300 md:translate-y-12 text-center rounded-2xl pt-8 pr-8 pb-8 pl-8 hover:bg-white/5">
<div className="relative inline-block mb-6">
<div className="w-32 h-32 rounded-full overflow-hidden border-2 group-hover:border-secondary transition-colors border-white/10">
<img alt="Jean O'Mood" className="w-full h-full object-cover" src="https://i.pravatar.cc/300?img=11"/>
</div>
<a className="absolute bottom-0 right-0 bg-surface rounded-full p-2 border hover:border-secondary hover:text-secondary transition-colors border-white/10" href="#">
<svg className="lucide lucide-linkedin w-4 h-4 fill-current" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<h4 className="text-xl font-semibold mb-1">Jean O'Mood</h4>
<p className="text-secondary uppercase text-xs font-bold tracking-widest mb-4">CTO</p>
<p className="text-text-muted text-sm leading-relaxed">Architecting robust machine learning infrastructure and scalable
        solution frameworks.</p>
</div>


<div className="glass p-8 rounded-2xl text-center group transition-all duration-300 hover:bg-white/5">
<div className="relative inline-block mb-6">
<div className="w-32 h-32 rounded-full overflow-hidden border-2 group-hover:border-blue-400 transition-colors border-white/10">
<img alt="Jhon Nhom" className="w-full h-full object-cover" src="https://i.pravatar.cc/300?img=8"/>
</div>
<a className="absolute bottom-0 right-0 bg-surface rounded-full p-2 border transition-colors border-white/10 hover:border-blue-400 hover:text-blue-400" href="#">
<svg className="lucide lucide-linkedin w-4 h-4 fill-current" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<h4 className="text-xl font-semibold mb-1">Jhon Nhom</h4>
<p className="text-xs font-bold uppercase tracking-widest mb-4 text-blue-400">Head of Research</p>
<p className="text-text-muted text-sm leading-relaxed">Spearheading R&amp;D efforts and pushing the boundaries of what's possible in NLP.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative">
<div className="container mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-display font-semibold mb-2">Client Success Stories</h2>
<p className="text-text-muted">Discover how we've fueled growth for others.</p>
</div>
<button className="text-primary text-sm font-bold flex items-center hover:gap-2 transition-all" onclick="toggleModal('contact')">View All Stories <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="md:col-span-1 glass p-10 rounded-3xl flex flex-col justify-between bg-gradient-to-br to-transparent border-primary/20 hover:border-primary/40 transition-colors cursor-default from-white/5">
<div>
<div className="flex gap-1 text-primary mb-6">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<blockquote className="text-2xl font-display font-medium leading-relaxed mb-8">
                            "Aurora AI's custom solution streamlined our data analysis, saving us hundreds of hours. Their team's expertise is unmatched."
                        </blockquote>
</div>
<div className="flex items-center gap-4 border-t pt-6 border-white/10">
<img className="w-12 h-12 rounded-full border border-white/10" src="https://i.pravatar.cc/100?img=5"/>
<div>
<p className="font-bold text-white">Sarah Johnson</p>
<p className="text-primary text-sm">COO, Apes Corp</p>
</div>
<svg className="lucide lucide-quote w-8 h-8 ml-auto fill-current text-white/10" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
</div>
<div className="flex flex-col gap-6">

<div className="glass p-8 rounded-3xl transition-colors cursor-default hover:bg-white/5">
<div className="flex gap-1 text-secondary mb-4">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-text-muted mb-6 italic">"The AI training program was transformative. We are now developing in-house solutions."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-gray-700 text-white">MC</div>
<div>
<p className="text-sm font-bold">Michael Chen</p>
<p className="text-xs text-text-muted">NeveTech Solutions</p>
</div>
</div>
</div>

<div className="glass p-8 rounded-3xl bg-surfaceLight transition-colors cursor-default hover:bg-white/5">
<div className="flex gap-1 text-primary mb-4">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-3 h-3 fill-current" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<p className="text-text-muted mb-6 italic">"Working with Aurora AI felt like a true partnership. Powerful tailored solutions."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold bg-gray-700 text-white">ER</div>
<div>
<p className="text-sm font-bold">Emily Rodriguez</p>
<p className="text-xs text-text-muted">Zenith Enterprises</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-background border-y border-white/5">
<div className="container mx-auto px-6 text-center">
<h3 className="text-lg font-display font-medium text-text-muted mb-8">Our Technology Stack</h3>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 text-text-muted/60 font-medium">
<div className="flex items-center gap-2 transition-colors cursor-default hover:text-white"><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> OpenAI</div>
<div className="flex items-center gap-2 transition-colors cursor-default hover:text-white"><svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> TensorFlow</div>
<div className="flex items-center gap-2 transition-colors cursor-default hover:text-white"><svg className="lucide lucide-flame w-5 h-5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg> PyTorch</div>
<div className="flex items-center gap-2 transition-colors cursor-default hover:text-white"><svg className="lucide lucide-smile w-5 h-5" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg> Hugging Face</div>
<div className="flex items-center gap-2 transition-colors cursor-default hover:text-white"><svg className="lucide lucide-link w-5 h-5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> LangChain</div>
<div className="flex items-center gap-2 transition-colors cursor-default hover:text-white"><svg className="lucide lucide-cloud w-5 h-5" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg> AWS</div>
</div>
</div>
</section>

<section className="py-24 bg-background relative scroll-mt-20" id="insights">
<div className="container mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-display font-semibold mb-2">Latest <span className="text-primary">Insights &amp; News</span></h2>
<p className="text-text-muted">Expert analysis on AI trends and breakthroughs.</p>
</div>
<a className="bg-surfaceLight border px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 hover:bg-white/10 border-white/10" href="#insights">
                    View All Posts <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="md:col-span-2 group relative rounded-3xl overflow-hidden aspect-video md:aspect-auto border cursor-pointer border-white/10">
<img alt="AI Network" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
<div className="relative h-full p-8 md:p-12 flex flex-col justify-end">
<span className="inline-block px-3 py-1 bg-primary text-xs font-bold rounded-full mb-4 w-fit text-white">FEATURED</span>
<h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">Generative AI Beyond the Hype</h3>
<p className="text-text-muted max-w-lg mb-6 line-clamp-2">Exploring practical applications of Large Language Models in enterprise environments and how to implement them effectively.</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full border border-white/20" src="https://i.pravatar.cc/150?img=11"/>
<div>
<p className="text-sm font-bold text-white">Jean O'Mood</p>
<p className="text-xs text-text-muted">CTO</p>
</div>
</div>
</div>
</article>
<div className="flex flex-col gap-8">

<article className="glass p-6 rounded-3xl flex-1 group transition-colors flex flex-col justify-center relative overflow-hidden cursor-pointer hover:border-white/20">
<div className="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><svg className="lucide lucide-code w-24 h-24" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg></div>
<span className="text-xs font-bold text-secondary uppercase tracking-wider mb-3 block">Development</span>
<h4 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">Optimizing Machine Learning Workflows</h4>
<p className="text-text-muted text-sm mb-4 line-clamp-2">Best practices for streamlining your ML pipeline from data ingestion to deployment.</p>
<span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all text-secondary">Read Article <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</article>

<article className="glass p-6 rounded-3xl flex-1 group transition-colors flex flex-col justify-center relative overflow-hidden cursor-pointer hover:border-white/20">
<div className="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><svg className="lucide lucide-shield w-24 h-24" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
<span className="text-xs font-bold uppercase tracking-wider mb-3 block text-blue-400">Ethics</span>
<h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">Ethical AI: A Practical Framework</h4>
<p className="text-text-muted text-sm mb-4 line-clamp-2">Building transparency and accountability into your AI systems without compromising performance.</p>
<span className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all text-blue-400">Read Article <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</article>
</div>
</div>
</div>
</section>

<section className="py-20 bg-surfaceLight/30">
<div className="container mx-auto px-6 max-w-3xl">
<h2 className="text-3xl font-display font-semibold text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white/5 transition-all">
<summary className="flex items-center justify-between list-none">
<span className="font-medium text-lg">What kind of AI solutions do you provide?</span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-text-muted mt-4 text-sm leading-relaxed animate-float" style={{animation: 'none'}}>
                        We specialize in NLP, computer vision, and predictive analytics tailored for enterprise needs. From custom model training to full-scale deployment integration.
                    </div>
</details>
<details className="group glass p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white/5 transition-all">
<summary className="flex items-center justify-between list-none">
<span className="font-medium text-lg">How long does development typically take?</span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-text-muted mt-4 text-sm leading-relaxed">
                        Timelines vary by complexity. A standard MVP can be delivered in 4-6 weeks, while enterprise-scale integration may take 3-6 months.
                    </div>
</details>
<details className="group glass p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white/5 transition-all">
<summary className="flex items-center justify-between list-none">
<span className="font-medium text-lg">Who is the AI training for?</span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-text-muted mt-4 text-sm leading-relaxed">
                        Our training is designed for technical teams looking to upskill in ML ops, as well as executives needing a strategic understanding of AI implementation.
                    </div>
</details>
<details className="group glass p-6 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer open:bg-white/5 transition-all">
<summary className="flex items-center justify-between list-none">
<span className="font-medium text-lg">How do you ensure ethical use of AI?</span>
<span className="transition-transform group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-text-muted mt-4 text-sm leading-relaxed">
                        We adhere to a strict ethical framework focusing on transparency, bias mitigation, and data privacy compliance (GDPR/CCPA) in all our models.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-r from-primary to-secondary relative overflow-hidden scroll-mt-20 via-cyan-400" id="contact">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
<div>
<h2 className="text-3xl font-display font-bold mb-2 max-w-xl text-white">Ready to Transform Your Business?</h2>
<p className="font-medium opacity-90 text-blue-50">Schedule a free consultation today.</p>
</div>
<button className="text-primary font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 whitespace-nowrap bg-white hover:bg-gray-50" onclick="toggleModal('contact')">
                Collaborate with us <svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
</div>
</section>

<footer className="bg-background border-t pt-16 pb-8 border-white/5">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-primary flex items-center justify-center text-xs text-white">
<svg className="lucide lucide-sparkles w-3 h-3 fill-current" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="font-display font-bold text-lg">Aurora AI</span>
</div>
<p className="text-text-muted text-sm mb-6 max-w-xs">Pioneering the next generation of intelligent solutions for forward-thinking enterprises.</p>
<div className="flex gap-4">
<a className="text-text-muted hover:text-primary transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-text-muted hover:text-primary transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-text-muted hover:text-primary transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div>
<h4 className="font-bold mb-4">Solutions</h4>
<ul className="space-y-2 text-sm text-text-muted">
<li><a className="transition-colors hover:text-white" href="#solutions">Custom Models</a></li>
<li><a className="transition-colors hover:text-white" href="#solutions">Integration</a></li>
<li><a className="transition-colors hover:text-white" href="#contact" onclick="toggleModal('contact')">Consulting</a></li>
<li><a className="transition-colors hover:text-white" href="#solutions">Training</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-text-muted">
<li><a className="transition-colors hover:text-white" href="#about">About Us</a></li>
<li><a className="transition-colors hover:text-white" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-white" href="#insights">Blog</a></li>
<li><a className="transition-colors hover:text-white" href="#contact" onclick="toggleModal('contact')">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-text-muted">
<li><a className="transition-colors hover:text-white" href="#">Privacy Policy</a></li>
<li><a className="transition-colors hover:text-white" href="#">Terms of Service</a></li>
<li><a className="transition-colors hover:text-white" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted border-white/5">
<p>© 2024 Aurora AI Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span>Designed with Precision</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
