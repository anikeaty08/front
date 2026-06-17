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
mono: ['Space Mono', 'monospace'],
},
colors: {
honey: {
400: '#FBBF24',
500: '#F59E0B',
600: '#D97706',
},
dark: {
900: '#0a0a0a',
800: '#171717',
}
},
animation: {
'blob': 'blob 10s infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
fadeIn: {
'0%': { opacity: '0', display: 'none' },
'1%': { display: 'block', opacity: '0' },
'100%': { opacity: '1', display: 'block' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Update Dynamic Dates
        const today = new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById('privacy-date').textContent = today;
        document.getElementById('terms-date').textContent = today;
        document.getElementById('year').textContent = new Date().getFullYear();

        // Routing Logic
        function handleNav(event, path) {
            if(event) event.preventDefault(); // Stop full page reload
            
            // Push state safely (wrapped for local file system safety)
            try {
                window.history.pushState({}, "", path);
            } catch(e) {
                console.log("Routing via hash or memory due to local file restriction");
            }
            
            // Render content
            renderPage(path);
        }

        function toggleMobileMenu() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        function renderPage(path) {
            // Map paths to Element IDs
            const routes = {
                '/': 'page-home',
                '/privacy-policy': 'page-privacy',
                '/terms-of-service': 'page-terms'
            };

            // Identify current page ID
            let targetId = routes['/']; // Default to home
            
            // Check path match
            if (path.includes('privacy-policy')) targetId = routes['/privacy-policy'];
            else if (path.includes('terms-of-service')) targetId = routes['/terms-of-service'];
            else targetId = routes['/'];

            // Hide all pages
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
            });

            // Show target page
            const targetEl = document.getElementById(targetId);
            if(targetEl) {
                targetEl.classList.add('active');
                window.scrollTo(0, 0);
            }

            // Update Active State on Links
            document.querySelectorAll('.nav-link').forEach(link => {
                // Check if current path matches link path
                const linkPath = link.getAttribute('data-path');
                let isActive = false;

                if (linkPath === '/' && (path === '/' || path === '')) isActive = true;
                else if (linkPath !== '/' && path.includes(linkPath.substring(1))) isActive = true;

                if(isActive) {
                    link.classList.add('text-white');
                    link.classList.remove('text-slate-400');
                } else {
                    link.classList.remove('text-white');
                    link.classList.add('text-slate-400');
                }
            });
        }

        // Handle Browser Back/Forward buttons
        window.addEventListener('popstate', () => {
            renderPage(window.location.pathname);
        });

        // Initial Load
        document.addEventListener('DOMContentLoaded', () => {
            renderPage(window.location.pathname);
        });
    
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
      

<div className="fixed inset-0 bg-black z-[-2]"></div>

<div className="fixed inset-0 overflow-hidden z-[-1]">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[100px] mix-blend-screen animate-blob"></div>
<div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-honey-600/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-slate-800/20 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
</div>

<div className="bg-noise"></div>

<nav className="glass-nav fixed top-0 w-full z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center group cursor-pointer" href="/" onclick="handleNav(event, '/')">
<span className="font-sans font-semibold text-lg tracking-tight text-white group-hover:text-honey-400 transition-colors">HoneyDEV</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer" data-path="/" href="/" onclick="handleNav(event, '/')">Home</a>
<a className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer" data-path="/privacy-policy" href="/privacy-policy" onclick="handleNav(event, '/privacy-policy')">Privacy</a>
<a className="nav-link text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer" data-path="/terms-of-service" href="/terms-of-service" onclick="handleNav(event, '/terms-of-service')">Terms</a>
</div>

<button aria-label="Menu" className="md:hidden text-slate-300 hover:text-white p-2" onclick="toggleMobileMenu()">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-black/95 backdrop-blur-xl absolute w-full left-0 top-16 p-4 flex flex-col gap-4 shadow-2xl transition-all" id="mobile-menu">
<a className="text-slate-400 hover:text-white block py-2 text-sm font-medium" href="/" onclick="handleNav(event, '/'); toggleMobileMenu()">Home</a>
<a className="text-slate-400 hover:text-white block py-2 text-sm font-medium" href="/privacy-policy" onclick="handleNav(event, '/privacy-policy'); toggleMobileMenu()">Privacy</a>
<a className="text-slate-400 hover:text-white block py-2 text-sm font-medium" href="/terms-of-service" onclick="handleNav(event, '/terms-of-service'); toggleMobileMenu()">Terms</a>
</div>
</nav>

<main className="relative pt-16 min-h-screen flex flex-col">

<div className="page-section active animate-fade-in" id="page-home">

<section className="relative pt-24 pb-20 md:pt-36 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
<span className="flex h-2 w-2 rounded-full bg-honey-500"></span>
<span className="text-xs font-mono text-honey-400 uppercase tracking-wider">Introducing HoneyAI</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
<span className="gradient-text">Future of Automation</span><br/>
<span className="text-slate-500 text-3xl md:text-5xl font-light block mt-2">Powered by <span className="honey-gradient-text">HoneyDEV Studio</span></span>
</h1>

<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-slide-up" style={{animationDelay: '0.3s'}}>
                        AI-powered automation for social media and business platforms. Meet <strong>HoneyAI</strong> — your intelligent agent assistant designed to streamline workflows and secure authentication.
                    </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium rounded-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2" onclick="document.getElementById('features').scrollIntoView({behavior: 'smooth'})">
<span>Get Started</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white border border-white/10 font-medium rounded-lg hover:bg-white/10 transition-all" onclick="handleNav(event, '/privacy-policy')">
                            Read Policies
                        </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-indigo-500/10 via-honey-500/10 to-indigo-500/10 blur-[80px] rounded-full pointer-events-none z-0"></div>
</section>

<section className="py-24 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Engineered for Performance</h2>
<p className="text-slate-400 font-light">Secure, scalable, and intelligent automation infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-indigo-400 text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Agents &amp; Automation</h3>
<p className="text-slate-400 text-sm leading-relaxed">HoneyAI agents autonomously handle complex tasks, optimizing business logic without manual intervention.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
<iconify-icon className="text-pink-400 text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Social Workflow</h3>
<p className="text-slate-400 text-sm leading-relaxed">Seamlessly connect and automate interactions across major social platforms with intelligent scheduling.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:briefcase-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Business Logic</h3>
<p className="text-slate-400 text-sm leading-relaxed">Integrate deeply with business platforms to unify data streams and operational triggers.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 bg-honey-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-honey-500/20 transition-colors">
<iconify-icon className="text-honey-400 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Secure OAuth</h3>
<p className="text-slate-400 text-sm leading-relaxed">Uses Google OAuth 2.0. We request minimal scopes: name, email, and profile picture only.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:code-scan-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Developer First</h3>
<p className="text-slate-400 text-sm leading-relaxed">Built on modern stacks with a focus on API accessibility, extensibility, and clean documentation.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:lock-password-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Privacy by Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">Compliant with GDPR standards. Your data is encrypted and never sold to third parties.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.02]">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Join the Network</h2>
<div className="flex flex-wrap items-center justify-center gap-4">
<a className="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all" href="https://github.com/honeydevstudio" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-slate-400 group-hover:text-white" icon="mdi:github"></iconify-icon>
<span className="text-sm font-medium text-slate-300 group-hover:text-white">GitHub</span>
</a>
<a className="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all" href="https://www.linkedin.com/company/honeydevstudio" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-blue-400 group-hover:text-blue-300" icon="mdi:linkedin"></iconify-icon>
<span className="text-sm font-medium text-slate-300 group-hover:text-white">LinkedIn</span>
</a>
<a className="group flex items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all" href="https://x.com/honeydevstudio" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl text-slate-400 group-hover:text-white" icon="prime:twitter"></iconify-icon>
<span className="text-sm font-medium text-slate-300 group-hover:text-white">X / Twitter</span>
</a>
</div>
<div className="mt-8 flex flex-col gap-2">
<a className="text-honey-400 hover:text-honey-300 font-mono text-sm transition-colors" href="mailto:aryanahmedalamin@yahoo.co.uk">aryanahmedalamin@yahoo.co.uk</a>
<a className="text-honey-400 hover:text-honey-300 font-mono text-sm transition-colors" href="mailto:aryanahmedalamin@gmail.com">aryanahmedalamin@gmail.com</a>
</div>
</div>
</section>
</div>

<div className="page-section animate-fade-in" id="page-privacy">

<div className="pt-24 pb-12 px-6 bg-gradient-to-b from-slate-900 to-black border-b border-white/5">
<div className="max-w-3xl mx-auto">
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Privacy Policy</h1>
<p className="text-slate-400 text-sm font-mono">Last Updated: <span id="privacy-date"></span></p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-12">
<article className="prose prose-invert prose-slate max-w-none">
<p className="lead text-lg text-slate-300">
                        At HoneyDEV Studio ("we", "our", or "us"), we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and HoneyAI services.
                    </p>
<div className="bg-slate-900/50 border border-slate-800 p-4 rounded-lg my-6">
<h4 className="text-white font-medium mt-0 mb-2">Google OAuth Disclosure</h4>
<p className="text-sm text-slate-400 mb-0">
                            Our application uses Google OAuth 2.0 for authentication. We only request access to your <strong>name, email address, and profile picture</strong>. We do not access your Google Drive, Gmail content, or contacts.
                        </p>
</div>
<h2>1. Information We Collect</h2>
<p>We collect the minimum amount of data necessary to provide our services:</p>
<ul>
<li><strong>Account Information:</strong> When you sign in via Google OAuth, we receive your name, email address, and profile picture URL.</li>
<li><strong>Usage Data:</strong> We may collect anonymous analytics data regarding how you interact with our AI agents to improve performance.</li>
</ul>
<h2>2. How We Use Your Information</h2>
<p>Your data is processed for the following purposes:</p>
<ul>
<li>To authenticate your identity securely.</li>
<li>To provide and maintain the HoneyAI automation services.</li>
<li>To communicate with you regarding service updates or security alerts.</li>
</ul>
<h2>3. Data Deletion</h2>
<p>To request the deletion of your data, please send an email to <a href="mailto:aryanahmedalamin@gmail.com">aryanahmedalamin@gmail.com</a>. We will process your request within 30 days.</p>
<h2>4. Contact Us</h2>
<p>If you have any questions about this Privacy Policy, please contact us.</p>
</article>
</div>
</div>

<div className="page-section animate-fade-in" id="page-terms">

<div className="pt-24 pb-12 px-6 bg-gradient-to-b from-slate-900 to-black border-b border-white/5">
<div className="max-w-3xl mx-auto">
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Terms of Service</h1>
<p className="text-slate-400 text-sm font-mono">Last Updated: <span id="terms-date"></span></p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-12">
<article className="prose prose-invert prose-slate max-w-none">
<p className="lead text-lg text-slate-300">
                       Please read these Terms of Service ("Terms") carefully before using the HoneyDEV Studio website and HoneyAI services.
                   </p>
<h2>1. Acceptance of Terms</h2>
<p>By accessing or using our Service, you agree to be bound by these Terms.</p>
<h2>2. Description of Service</h2>
<p>HoneyDEV Studio provides "HoneyAI", an AI-powered automation tool. The Service is provided on an "AS IS" basis.</p>
<h2>3. User Responsibilities</h2>
<p>You agree to use the Service in compliance with all applicable laws and regulations.</p>
<h2>4. Intellectual Property</h2>
<p>The Service and its original content are the exclusive property of HoneyDEV Studio.</p>
<h2>5. Contact Us</h2>
<p>For any questions regarding these Terms, please contact us at <a href="mailto:aryanahmedalamin@yahoo.co.uk">aryanahmedalamin@yahoo.co.uk</a>.</p>
</article>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black z-10 relative">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>

<div className="flex items-center mb-4">
<span className="font-sans font-medium text-white tracking-tight">HoneyDEV Studio</span>
</div>
<p className="text-slate-500 text-sm max-w-xs">
                        Pioneering the future of AI automation with HoneyAI.
                    </p>
</div>
<div className="flex flex-col md:flex-row gap-8 md:gap-12">
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium text-sm">Legal</h4>
<a className="text-slate-500 hover:text-honey-400 text-sm transition-colors cursor-pointer" href="/privacy-policy" onclick="handleNav(event, '/privacy-policy')">Privacy Policy</a>
<a className="text-slate-500 hover:text-honey-400 text-sm transition-colors cursor-pointer" href="/terms-of-service" onclick="handleNav(event, '/terms-of-service')">Terms of Service</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium text-sm">Connect</h4>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="https://github.com/honeydevstudio" target="_blank"><iconify-icon className="text-lg" icon="mdi:github"></iconify-icon></a>
<a className="text-slate-500 hover:text-blue-400 transition-colors" href="https://www.linkedin.com/company/honeydevstudio" target="_blank"><iconify-icon className="text-lg" icon="mdi:linkedin"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="https://x.com/honeydevstudio" target="_blank"><iconify-icon className="text-lg" icon="prime:twitter"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">© <span id="year"></span> HoneyDEV Studio. All rights reserved.</p>
<p className="text-slate-700 text-xs font-mono">Built with Next.js 14+</p>
</div>
</div>
</footer>



    </>
  );
}
