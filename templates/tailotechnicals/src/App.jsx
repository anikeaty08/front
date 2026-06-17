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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0fdfa',
100: '#ccfbf1',
400: '#22d3ee',
500: '#06b6d4',
600: '#0891b2',
900: '#134e4a',
},
accent: {
400: '#c084fc',
500: '#a855f7',
600: '#9333ea',
},
dark: {
950: '#020617',
900: '#0f172a',
800: '#1e293b',
700: '#334155',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'spin-fast': 'spin 0.7s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // 1. Dynamic Year (Footer)
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // 2. Dark Mode Toggle Logic
        const themeToggleBtn = document.getElementById('themeToggle');
        const htmlElement = document.documentElement;
        
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlElement.classList.toggle('dark');
            localStorage.theme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
        });

        // 3. Handle URL Hash for simulated routing (Admin Modal)
        window.addEventListener('hashchange', () => {
            if(window.location.hash === '#login') {
                document.getElementById('loginModal').classList.remove('hidden');
            }
        });

        if(window.location.hash === '#login') {
            document.getElementById('loginModal').classList.remove('hidden');
        }

        // 4. SPECIFIC HANDLER FOR HELP EMAIL
        function sendHelpEmail(event) {
            event.preventDefault();
            const btn = document.getElementById('helpSubmitBtn');
            const originalContent = btn.innerHTML;
            const formData = new FormData(event.target);
            
            // Extract values
            const name = formData.get('name');
            const category = formData.get('category');
            const description = formData.get('description');

            // UI Loading State
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="18" class="animate-spin-fast"></iconify-icon> <span class="ml-2">Preparing Email...</span>';
            
            setTimeout(() => {
                // Construct Mailto Link
                const subject = `Technical Help Request: ${category} - ${name}`;
                const body = `Name: ${name}\nCategory: ${category}\n\nDescription:\n${description}\n\n(Please attach any relevant screenshots or logs manually to this email)`;
                
                // Open Email Client
                window.location.href = `mailto:tailotechnicals@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Reset UI
                btn.innerHTML = originalContent;
                btn.disabled = false;
                event.target.reset();
            }, 1000);
        }

        // 5. Generic Form Handler (For Contact & Login)
        function handleFormSubmit(event, btnId, successMsg) {
            event.preventDefault();
            const btn = document.getElementById(btnId);
            const originalContent = btn.innerHTML;
            
            // Set Loading State
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="18" class="animate-spin-fast"></iconify-icon> <span class="ml-2">Processing...</span>';
            
            // Simulate Backend Latency (2 seconds)
            setTimeout(() => {
                // Success State
                btn.classList.remove('bg-white', 'text-dark-900', 'bg-gradient-to-r');
                btn.classList.add('bg-green-500', 'text-white');
                btn.innerHTML = '<iconify-icon icon="lucide:check" width="18"></iconify-icon> <span class="ml-2">Success!</span>';
                
                alert(successMsg);
                
                // Reset Form after delay
                setTimeout(() => {
                    event.target.reset();
                    btn.disabled = false;
                    btn.innerHTML = originalContent;
                    btn.classList.remove('bg-green-500', 'text-white');
                    // Simple check to restore correct base class
                    if(btnId === 'contactSubmitBtn') {
                        btn.classList.add('bg-gradient-to-r'); 
                    } else {
                        btn.classList.add('bg-white', 'text-dark-900');
                    }
                }, 1000);
            }, 2000);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.04]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a aria-label="Home" className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-brand-500 to-accent-600 flex items-center justify-center text-white font-semibold text-xs tracking-tighter shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
                    TT
                </div>
<span className="text-white font-semibold tracking-tight text-sm uppercase">Tailo Technicals</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#help">Free Help</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors" id="themeToggle">
<iconify-icon className="hidden dark:block" icon="lucide:sun" width="18"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="lucide:moon" width="18"></iconify-icon>
</button>
<a aria-label="Admin Login" className="hidden md:flex text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#login">Admin</a>
<a aria-label="Get Started" className="hidden sm:flex px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-xs font-medium rounded-full border border-white/10 transition-all hover:scale-105 items-center gap-2" href="#contact">
                    Get Started
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>

<button aria-label="Open Menu" className="md:hidden p-2 text-slate-300" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden glass-panel border-t border-white/5 p-6 space-y-4" id="mobileMenu">
<a className="block text-sm text-slate-300" href="#services">Services</a>
<a className="block text-sm text-slate-300" href="#about">About</a>
<a className="block text-sm text-slate-300" href="#help">Free Help</a>
<a className="block text-sm text-slate-300" href="#contact">Contact</a>
<div className="pt-4 border-t border-white/5">
<a className="block text-xs text-brand-500" href="#login">Admin Portal</a>
</div>
</div>
</nav>

<header className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-16 px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-medium tracking-wide uppercase mb-6 animate-float">
<span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
            Technical Assistance Redefined
        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
<span className="block text-gradient pb-2">Creating a true difference</span>
            in the digital world.
        </h1>
<p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Enhance your IT infrastructure with smart technical solutions. We provide cutting-edge development and free technical assistance to empower startups, students, and businesses.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a aria-label="Request Free Help" className="w-full sm:w-auto px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-full transition-all hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2" href="#help">
<iconify-icon icon="lucide:zap" width="16"></iconify-icon>
                Get Free Technical Help
            </a>
<a aria-label="Explore Services" className="w-full sm:w-auto px-8 py-3 glass-panel hover:bg-white/5 text-white text-sm font-medium rounded-full transition-all border border-white/10 flex items-center justify-center gap-2" href="#services">
                Explore Services
            </a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-dark-900/50" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Smart Solutions</h2>
<p className="text-slate-400 text-sm max-w-md">Comprehensive IT services tailored for growth and efficiency.</p>
</div>
<a className="text-xs font-medium text-brand-400 flex items-center gap-1 hover:text-brand-300" href="#contact">
                    View full catalog <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:border-brand-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Software Development</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Custom applications built with modern frameworks tailored to your business logic.</p>
<button aria-label="Learn more about Software Development" className="text-xs text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/10 transition-colors">Learn more</button>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-accent-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI-based Solutions</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Integrate intelligent automation and machine learning models into your workflow.</p>
<button aria-label="Learn more about AI Solutions" className="text-xs text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/10 transition-colors">Learn more</button>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-blue-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Cybersecurity Guidance</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Protect your digital assets with our comprehensive security audits and protocols.</p>
<button aria-label="Learn more about Cybersecurity" className="text-xs text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/10 transition-colors">Learn more</button>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-brand-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Web &amp; App Development</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Responsive, high-performance websites and mobile applications.</p>
<button aria-label="Learn more about Web App Development" className="text-xs text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/10 transition-colors">Learn more</button>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-accent-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Technical Support</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">24/7 assistance for hardware and software issues to keep you running.</p>
<button aria-label="Learn more about Tech Support" className="text-xs text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md border border-white/10 transition-colors">Learn more</button>
</div>

<div className="relative overflow-hidden p-8 rounded-2xl border border-brand-500/30 bg-brand-500/5 group">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-brand-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-500/20">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Free Technical Assistance</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Our mission to give back. Free guidance for students and startups.</p>
<a aria-label="Get Free Help Now" className="inline-block text-xs font-semibold text-brand-900 bg-brand-500 hover:bg-brand-400 px-4 py-2 rounded-md transition-colors" href="#help">Get Help Now</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-accent-400 font-medium text-xs tracking-widest uppercase mb-4 block">Our DNA</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">
                        Futuristic. Intelligent. <br/>
<span className="text-slate-500">Trustworthy.</span>
</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-400">
<iconify-icon icon="lucide:target" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Our Mission</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">To enhance IT software, provide smart technical solutions, and offer free technical assistance to help individuals and businesses grow.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent-400">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Who We Serve</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">Students, Small Businesses, Startups, and general users needing reliable tech guidance.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="lucide:trending-up" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Future Roadmap</h4>
<p className="text-slate-400 text-sm font-light leading-relaxed">Expanding AI integration and launching a dedicated learning platform for aspiring developers.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] text-slate-500 font-mono">system_status.log</span>
</div>
<div className="font-mono text-xs space-y-2">
<div className="flex gap-2">
<span className="text-slate-500">001</span>
<span className="text-brand-400">CONNECTING_TO_CORE...</span>
</div>
<div className="flex gap-2">
<span className="text-slate-500">002</span>
<span className="text-slate-300">Loading modules: [AI, SECURE, DEV]</span>
</div>
<div className="flex gap-2">
<span className="text-slate-500">003</span>
<span className="text-green-400">SUCCESS: Tailo Technicals Online</span>
</div>
<div className="flex gap-2">
<span className="text-slate-500">004</span>
<span className="text-slate-300">Optimizing user experience...</span>
</div>
<div className="flex gap-2">
<span className="text-slate-500">005</span>
<span className="text-accent-400">READY FOR INPUT_</span>
<span className="w-2 h-4 bg-accent-400 animate-pulse inline-block align-middle"></span>
</div>
</div>

<div className="mt-8 pt-4 border-t border-white/5">
<div className="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-wider">
<span>Design</span>
<span>Develop</span>
<span>Deploy</span>
</div>
<div className="h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
<div className="h-full w-2/3 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl z-0"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl z-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-slate-950" id="help">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Request Free Technical Help</h2>
<p className="text-slate-400 text-sm">Submit your issue below. Students and startups get priority tagging in our system.</p>
</div>
<div className="max-w-2xl mx-auto glass-panel p-8 md:p-10 rounded-2xl border border-brand-500/20">

<form className="space-y-6" id="helpForm" onsubmit="sendHelpEmail(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Your Name</label>
<input className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Category</label>
<select className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-brand-500 transition-colors" name="category">
<option value="student">Student Project</option>
<option value="startup">Startup Infrastructure</option>
<option value="debug">Code Debugging</option>
<option value="general">General Inquiry</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Problem Description</label>
<textarea className="w-full bg-dark-800 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-500 transition-colors" name="description" placeholder="Describe the technical issue you are facing..." required="" rows="4"></textarea>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-400 uppercase tracking-wide">Upload Screenshot/Log (Optional)</label>
<div className="relative border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:bg-white/5 transition-colors cursor-pointer group">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" name="file" type="file"/>
<iconify-icon className="text-slate-500 mb-2 group-hover:text-brand-500 transition-colors" icon="lucide:upload-cloud" width="24"></iconify-icon>
<p className="text-xs text-slate-500">Drag files here or click to upload</p>
</div>
</div>
<button className="w-full py-3 bg-white text-dark-900 font-medium text-sm rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="helpSubmitBtn" type="submit">
<span>Submit Request</span>
<iconify-icon icon="lucide:send" width="14"></iconify-icon>
</button>
</form>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-10 text-center">Trusted by Future Leaders</h2>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar">

<div className="min-w-[300px] md:min-w-[400px] glass-panel p-6 rounded-xl snap-center border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-300 font-light mb-6">"Tailo Technicals helped me optimize my startup's backend architecture for free. Truly selfless and professional."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Alex Chen</p>
<p className="text-[10px] text-slate-500">Founder, NexaStream</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] glass-panel p-6 rounded-xl snap-center border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-300 font-light mb-6">"As a CS student, their mentorship on my final year project was invaluable. They explained complex concepts simply."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Sarah Jenkins</p>
<p className="text-[10px] text-slate-500">Computer Science Student</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] glass-panel p-6 rounded-xl snap-center border border-white/5">
<div className="flex items-center gap-1 text-yellow-500 mb-4">
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
<iconify-icon icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-sm text-slate-300 font-light mb-6">"Fast, reliable, and secure solutions. The dark mode default is a nice touch for us devs!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div>
<p className="text-xs font-medium text-white">Marcus O.</p>
<p className="text-[10px] text-slate-500">CTO, Vertex Logic</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Get in touch</h2>
<p className="text-slate-400 text-sm mb-8 font-light">Have a project in mind or need technical consultancy? Fill out the form or reach us via email.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
<p className="text-sm text-white">contact@tailotechnicals.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
<p className="text-sm text-white">Tech Park, Cyber City</p>
</div>
</div>

<div className="flex gap-4 pt-4">
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 hover:text-white text-slate-400 flex items-center justify-center transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 hover:text-white text-slate-400 flex items-center justify-center transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-500 hover:text-white text-slate-400 flex items-center justify-center transition-all" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl border border-white/10">
<form className="space-y-4" id="contactForm" onsubmit="handleFormSubmit(event, 'contactSubmitBtn', 'Message Sent Successfully!')">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-semibold">Name</label>
<input className="w-full bg-dark-800 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-brand-500 focus:outline-none transition-colors" name="contactName" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-semibold">Email</label>
<input className="w-full bg-dark-800 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-brand-500 focus:outline-none transition-colors" name="contactEmail" required="" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-semibold">Subject</label>
<input className="w-full bg-dark-800 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-brand-500 focus:outline-none transition-colors" name="contactSubject" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-semibold">Message</label>
<textarea className="w-full bg-dark-800 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-brand-500 focus:outline-none transition-colors" name="contactMessage" required="" rows="4"></textarea>
</div>

<div className="flex items-center gap-2 p-3 bg-dark-800 rounded border border-white/5">
<input className="w-4 h-4 rounded border-slate-600 bg-transparent text-brand-500 focus:ring-0" id="captcha" required="" type="checkbox"/>
<label className="text-xs text-slate-400" htmlFor="captcha">I am not a robot (Tick to verify)</label>
</div>
<button className="w-full py-2.5 bg-gradient-to-r from-brand-600 to-accent-600 text-white font-medium text-sm rounded hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" id="contactSubmitBtn" type="submit">
<span>Send Message</span>
</button>
</form>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] bg-dark-900/90 backdrop-blur-md hidden flex items-center justify-center p-4" id="loginModal">
<div className="w-full max-w-md bg-dark-800 border border-white/10 rounded-2xl p-8 relative shadow-2xl">
<button aria-label="Close Modal" className="absolute top-4 right-4 text-slate-500 hover:text-white" onclick="window.location.hash=''; document.getElementById('loginModal').classList.add('hidden')">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="w-10 h-10 rounded bg-brand-500 mx-auto flex items-center justify-center text-white font-bold mb-4">TT</div>
<h3 className="text-xl font-semibold text-white">Admin Portal</h3>
<p className="text-xs text-slate-400">Secure access for staff only</p>
</div>
<form className="space-y-4" onsubmit="handleFormSubmit(event, 'loginBtn', 'Redirecting to Dashboard...')">
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-semibold">Email</label>
<input className="w-full bg-dark-900 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-brand-500 focus:outline-none" name="adminEmail" placeholder="admin@tailo.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-slate-500 font-semibold">Password</label>
<input className="w-full bg-dark-900 border border-white/10 rounded px-3 py-2 text-sm text-white focus:border-brand-500 focus:outline-none" name="adminPass" required="" type="password"/>
</div>
<button className="w-full py-2 bg-white text-dark-900 font-medium text-sm rounded hover:bg-slate-200 flex items-center justify-center gap-2 disabled:opacity-50" id="loginBtn" type="submit">
<span>Sign In</span>
</button>
</form>
</div>
</div>

<footer className="border-t border-white/5 bg-dark-900 py-12 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-white font-bold text-[10px]">TT</div>
<span className="text-white font-semibold text-sm">TAILO TECHNICALS</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                    Creating a true difference through innovation and free technical assistance.
                </p>
<div className="flex gap-2 text-[10px] text-slate-600">

<span>© <span id="currentYear"></span> Tailo Technicals.</span>
<span>All rights reserved.</span>
</div>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-brand-400 transition-colors" href="#">Software Dev</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">IT Solutions</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Cybersecurity</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">AI Systems</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-400">
<li><a className="hover:text-brand-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-4">Subscribe</h4>
<p className="text-[10px] text-slate-500 mb-2">Join our newsletter for tech insights.</p>
<form className="flex" onsubmit="event.preventDefault(); alert('Subscribed!');">
<input className="bg-white/5 border border-white/10 rounded-l text-xs px-3 py-2 text-white focus:outline-none w-full" placeholder="Email address" required="" type="email"/>
<button aria-label="Subscribe" className="bg-brand-600 hover:bg-brand-500 text-white px-3 py-2 rounded-r text-xs transition-colors" type="submit">
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</form>
</div>
</div>
</footer>



    </>
  );
}
