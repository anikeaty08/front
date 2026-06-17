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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
850: '#1f2025',
950: '#09090b', // Deep dark
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Scroll Reveal Logic
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Scroll to Trial
        function scrollToTrial() {
            document.getElementById('trial').scrollIntoView({ behavior: 'smooth' });
        }

        // Trial Logic
        function activateTrial() {
            const initial = document.getElementById('trial-initial');
            const active = document.getElementById('trial-active');
            
            // Simple fade out/in effect
            initial.style.opacity = '0';
            setTimeout(() => {
                initial.style.display = 'none';
                active.style.display = 'block';
                active.style.opacity = '0';
                active.classList.remove('hidden');
                
                // Trigger reflow
                void active.offsetWidth;
                
                active.style.transition = 'opacity 0.5s ease';
                active.style.opacity = '1';
            }, 300);
        }

        function copyCode() {
            const code = document.getElementById('access-code').innerText;
            navigator.clipboard.writeText(code);
            const toast = document.getElementById('copy-toast');
            toast.style.opacity = '1';
            setTimeout(() => toast.style.opacity = '0', 2000);
        }

        // Tabs Logic
        function switchTab(os) {
            // Update buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if (btn.dataset.tab === os) {
                    btn.classList.remove('border-transparent', 'text-zinc-500');
                    btn.classList.add('border-blue-500', 'text-white');
                } else {
                    btn.classList.add('border-transparent', 'text-zinc-500');
                    btn.classList.remove('border-blue-500', 'text-white');
                }
            });

            // Update Content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(os + '-content').classList.add('active');
        }

        // Modal Logic
        function openCheckout(plan, price) {
            document.getElementById('modal-plan-name').innerText = plan;
            document.getElementById('modal-plan-price').innerText = price;
            document.getElementById('btn-price').innerText = price;
            document.getElementById('payment-success').classList.add('hidden');
            document.getElementById('checkout-modal').classList.remove('hidden');
        }

        function openModal(type) {
            document.getElementById('info-modal').classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById(id).classList.add('hidden');
        }

        function processDemoPayment() {
            const btn = document.querySelector('form button');
            const originalText = btn.innerText;
            btn.innerHTML = '<iconify-icon icon="svg-spinners:ring-resize" class="text-lg"></iconify-icon>';
            
            setTimeout(() => {
                document.getElementById('payment-success').classList.remove('hidden');
                btn.innerText = originalText;
            }, 1500);
        }

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-lg', 'shadow-blue-900/5');
            } else {
                nav.classList.remove('shadow-lg', 'shadow-blue-900/5');
            }
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-900/10 blur-[100px] rounded-full opacity-50"></div>
</div>

<header className="glass-header sticky top-0 z-50 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-white text-lg" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">VAULTVPN</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:flex bg-white text-black text-xs font-medium py-2 px-4 rounded-full hover:bg-zinc-200 transition-colors" onclick="scrollToTrial()">
                    Free Trial
                </button>
<button className="md:hidden text-white" onclick="toggleMobileMenu()">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-16 left-0 w-full glass-header border-t border-white/5 p-6 flex-col gap-4 md:hidden" id="mobile-menu">
<a className="text-sm text-zinc-300" href="#features" onclick="toggleMobileMenu()">Features</a>
<a className="text-sm text-zinc-300" href="#how-it-works" onclick="toggleMobileMenu()">How it works</a>
<a className="text-sm text-zinc-300" href="#pricing" onclick="toggleMobileMenu()">Pricing</a>
<button className="text-left text-sm text-blue-400 font-medium" onclick="scrollToTrial(); toggleMobileMenu()">Start Free Trial</button>
</div>
</header>

<section className="pt-24 pb-16 px-6 md:pt-32 md:pb-24 max-w-5xl mx-auto text-center relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[10px] uppercase tracking-wider font-medium text-blue-300">New: Canada East Node</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Stable VPN for Bettors <br className="hidden md:block"/>
<span className="text-zinc-500">in the US &amp; Canada</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Built for people who need consistent access to betting platforms and fast, low-latency routing.
            Private, secure, and ready for high-traffic moments.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-up text-sm text-zinc-300" style={{animationDelay: '0.3s'}}>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
<span>Stable routing</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon>
<span>Low-latency locations</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:devices-linear"></iconify-icon>
<span>Quick setup</span>
</div>
</div>
<div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<button className="group relative inline-flex items-center gap-2 bg-white text-zinc-950 text-sm font-medium py-3 px-8 rounded-full hover:bg-zinc-200 transition-all active:scale-95" onclick="scrollToTrial()">
                Start 3-Day Free Trial
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<span className="text-xs text-zinc-500">No card required for trial. Cancel anytime.</span>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all hover:grayscale-0 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<div className="text-center">
<div className="text-lg font-medium text-white">99.9%</div>
<div className="text-xs text-zinc-500">Uptime (Demo)</div>
</div>
<div className="text-center">
<div className="text-lg font-medium text-white">10k+</div>
<div className="text-xs text-zinc-500">Setups (Demo)</div>
</div>
<div className="text-center">
<div className="text-lg font-medium text-white">24/7</div>
<div className="text-xs text-zinc-500">Support</div>
</div>
</div>
</section>

<section className="py-12 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-500 mb-8">Works where you bet</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">

<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white">Polymarket</span>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white">PS3838</span>
</div>
<div className="flex items-center gap-2 group hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl text-zinc-300" icon="solar:crown-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-white">Pinnacle</span>
</div>
</div>
<p className="text-center text-[10px] text-zinc-600 mt-8">Logos for demo purposes only. No affiliation with these platforms.</p>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6 reveal-on-scroll" id="features">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-12 tracking-tight">Built for reliability</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">US &amp; Canada Routing</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Optimized server nodes located strategically in key regions for lower latency.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Fast Switching</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Switch IP addresses instantly without dropping your active session context.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Kill Switch Guidance</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Setup tips to ensure your connection cuts immediately if the VPN drops.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon className="text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Multi-device Support</h3>
<p className="text-xs text-zinc-400 leading-relaxed">One account works on your desktop, laptop, and mobile devices simultaneously.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon className="text-xl" icon="solar:eye-closed-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Privacy-First</h3>
<p className="text-xs text-zinc-400 leading-relaxed">We don't log your activity. Your betting strategy remains your business.</p>
</div>

<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon className="text-xl" icon="solar:headset-linear"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">24/7 Support (Demo)</h3>
<p className="text-xs text-zinc-400 leading-relaxed">Dedicated support team understanding the urgency of live events.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5 reveal-on-scroll" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-16 tracking-tight text-center">Get connected in minutes</h2>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-blue-500/30 flex items-center justify-center z-10 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<span className="text-sm font-semibold text-blue-400">1</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Create an account</h3>
<p className="text-xs text-zinc-400 max-w-[200px]">Sign up with just an email. No invasive personal data required.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-blue-500/30 flex items-center justify-center z-10 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<span className="text-sm font-semibold text-blue-400">2</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Get access code</h3>
<p className="text-xs text-zinc-400 max-w-[200px]">Start the trial to generate your unique connection key instantly.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-blue-500/30 flex items-center justify-center z-10 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
<span className="text-sm font-semibold text-blue-400">3</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Connect &amp; switch</h3>
<p className="text-xs text-zinc-400 max-w-[200px]">Download the app, paste your code, and choose your region.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 reveal-on-scroll" id="trial">
<div className="glass-panel rounded-2xl p-1 overflow-hidden">
<div className="bg-zinc-950/80 p-8 md:p-12 rounded-xl text-center" id="trial-initial">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-400 mb-6">
<iconify-icon className="text-3xl" icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium text-white mb-4">Ready to test drive?</h2>
<p className="text-sm text-zinc-400 mb-8 max-w-md mx-auto">Get instant access to our premium network for 72 hours. No credit card required.</p>
<button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium py-3 px-8 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95" onclick="activateTrial()">
                    Generate Access Key
                </button>
</div>

<div className="bg-zinc-950/80 p-6 md:p-8 rounded-xl hidden" id="trial-active">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-white/5 pb-6">
<div>
<h3 className="text-lg font-medium text-white mb-1">Your Access Key</h3>
<p className="text-xs text-zinc-400">Expires in: <span className="text-blue-400 font-mono">71:59:59</span></p>
</div>
<div className="mt-4 md:mt-0 w-full md:w-auto relative">
<div className="flex items-center gap-2 bg-zinc-900 border border-white/10 rounded-lg p-1 pr-2">
<code className="font-mono text-sm text-zinc-300 px-3 py-1 bg-transparent" id="access-code">BETVPN-8X29-M4K1</code>
<button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded transition-colors" onclick="copyCode()" title="Copy">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
</button>
</div>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] text-green-400 opacity-0 transition-opacity" id="copy-toast">Copied!</div>
</div>
</div>
<div className="mb-4">
<div className="flex gap-4 border-b border-white/10 mb-6 overflow-x-auto no-scrollbar">
<button className="tab-btn text-sm pb-2 border-b-2 border-blue-500 text-white font-medium whitespace-nowrap" data-tab="ios" onclick="switchTab('ios')">iOS</button>
<button className="tab-btn text-sm pb-2 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 whitespace-nowrap" data-tab="android" onclick="switchTab('android')">Android</button>
<button className="tab-btn text-sm pb-2 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 whitespace-nowrap" data-tab="windows" onclick="switchTab('windows')">Windows</button>
<button className="tab-btn text-sm pb-2 border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 whitespace-nowrap" data-tab="mac" onclick="switchTab('mac')">macOS</button>
</div>

<div className="tab-content active" id="ios-content">
<ol className="list-decimal list-inside space-y-3 text-sm text-zinc-400 mb-6 marker:text-blue-500">
<li>Download <span className="text-white">VaultVPN Connect</span> from App Store (Demo).</li>
<li>Open app and select "Login with Key".</li>
<li>Paste your access key.</li>
<li>Allow VPN configuration permission.</li>
</ol>
<button className="flex items-center gap-2 text-xs text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                            Download for iOS (Mock)
                        </button>
</div>

<div className="tab-content" id="android-content">
<ol className="list-decimal list-inside space-y-3 text-sm text-zinc-400 mb-6 marker:text-blue-500">
<li>Get the APK or install from Play Store (Demo).</li>
<li>Tap "Import Profile".</li>
<li>Paste the key: <span className="font-mono text-xs bg-zinc-900 p-1 rounded">BETVPN-8X29-M4K1</span>.</li>
<li>Select US-East or Canada node.</li>
</ol>
<button className="flex items-center gap-2 text-xs text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors">
<iconify-icon icon="solar:download-linear"></iconify-icon>
                            Download for Android (Mock)
                        </button>
</div>

<div className="tab-content" id="windows-content">
<ol className="list-decimal list-inside space-y-3 text-sm text-zinc-400 mb-6 marker:text-blue-500">
<li>Download the Windows installer (MSI).</li>
<li>Run setup and launch VaultVPN.</li>
<li>Click "Activate Trial" and paste key.</li>
<li>Turn on "Kill Switch" in settings.</li>
</ol>
<button className="flex items-center gap-2 text-xs text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors">
<iconify-icon icon="solar:monitor-linear"></iconify-icon>
                            Download for Windows (Mock)
                        </button>
</div>

<div className="tab-content" id="mac-content">
<ol className="list-decimal list-inside space-y-3 text-sm text-zinc-400 mb-6 marker:text-blue-500">
<li>Download the .dmg file.</li>
<li>Drag to Applications folder.</li>
<li>Launch and paste your access key.</li>
<li>Allow network extension in System Settings.</li>
</ol>
<button className="flex items-center gap-2 text-xs text-white bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-lg transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear"></iconify-icon>
                            Download for macOS (Mock)
                        </button>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] text-zinc-500">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                    Trial valid for 72 hours from activation.
                </div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6 reveal-on-scroll" id="pricing">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight text-center">Simple, transparent pricing</h2>
<p className="text-center text-sm text-zinc-400 mb-16">All plans include full access to all nodes.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium text-zinc-300 mb-2">Monthly</h3>
<div className="text-3xl font-semibold text-white mb-4">$12<span className="text-sm text-zinc-500 font-normal">/mo</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Access to all US/CA nodes</li>
<li className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 5 Devices</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="openCheckout('Monthly', '$12')">Select Monthly</button>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col relative border-blue-500/30 bg-blue-900/5">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Best Value</div>
<h3 className="text-sm font-medium text-blue-300 mb-2">Yearly</h3>
<div className="text-3xl font-semibold text-white mb-4">$89<span className="text-sm text-zinc-500 font-normal">/yr</span></div>
<p className="text-xs text-green-400 mb-4">Save ~40%</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-xs text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Access to all US/CA nodes</li>
<li className="flex items-center gap-2 text-xs text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 10 Devices</li>
<li className="flex items-center gap-2 text-xs text-zinc-300"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20" onclick="openCheckout('Yearly', '$89')">Select Yearly</button>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium text-zinc-300 mb-2">Quarterly</h3>
<div className="text-3xl font-semibold text-white mb-4">$29<span className="text-sm text-zinc-500 font-normal">/3mo</span></div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Access to all US/CA nodes</li>
<li className="flex items-center gap-2 text-xs text-zinc-400"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> 5 Devices</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="openCheckout('Quarterly', '$29')">Select Quarterly</button>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6 reveal-on-scroll" id="faq">
<h2 className="text-2xl font-medium text-white mb-12 tracking-tight text-center">Frequently asked questions</h2>
<div className="space-y-4">

<details className="group glass-panel rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-zinc-300 hover:text-white">
                    Will this help access betting platforms?
                    <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed">
                    Our service provides routing through US and Canadian servers, which can help maintain stable connections to various online services. We recommend checking the terms of service of any platform you use to ensure compliance.
                </div>
</details>

<details className="group glass-panel rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-zinc-300 hover:text-white">
                    Will it slow down my connection?
                    <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed">
                    All VPNs introduce some latency due to encryption and distance. However, VaultVPN is optimized for speed, using lightweight protocols to minimize lag, making it suitable for real-time applications.
                </div>
</details>

<details className="group glass-panel rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-zinc-300 hover:text-white">
                    Is it legal to use?
                    <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed">
                    Using a VPN is legal in the US and Canada for privacy and security. However, using a VPN to bypass geographical restrictions on betting sites may violate their terms of service or local regulations. Please use responsibly.
                </div>
</details>

<details className="group glass-panel rounded-lg">
<summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-zinc-300 hover:text-white">
                    How do I cancel?
                    <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed">
                    You can cancel your subscription at any time through your account dashboard. For the free trial, access simply expires after 72 hours—no cancellation needed as we don't take payment details upfront.
                </div>
</details>
</div>
</section>

<footer className="bg-zinc-950 border-t border-white/5 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:shield-keyhole-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">VAULTVPN</span>
</div>
<p className="text-xs text-zinc-500 max-w-xs">
                        Secure routing solutions for the modern internet. Built for stability, privacy, and speed.
                    </p>
</div>
<div className="flex gap-8">
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-300 mb-2">Legal</span>
<a className="text-xs text-zinc-500 hover:text-white" href="#" onclick="openModal('privacy')">Privacy Policy</a>
<a className="text-xs text-zinc-500 hover:text-white" href="#" onclick="openModal('terms')">Terms of Service</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-zinc-300 mb-2">Support</span>
<a className="text-xs text-zinc-500 hover:text-white" href="#">Contact Us</a>
<a className="text-xs text-zinc-500 hover:text-white" href="#">Status</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 text-[10px] text-zinc-600 text-center md:text-left">
<p className="mb-2">© 2023 VaultVPN IO. All rights reserved. This is a demo landing page.</p>
<p>Disclaimer: VaultVPN is not affiliated with any betting platform. We do not encourage illegal gambling or violation of third-party terms of service.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="checkout-modal">
<div className="bg-zinc-900 border border-white/10 rounded-xl w-full max-w-md overflow-hidden relative shadow-2xl">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white" onclick="closeModal('checkout-modal')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="p-6">
<h3 className="text-lg font-medium text-white mb-1">Secure Checkout</h3>
<p className="text-xs text-zinc-400 mb-6">Demo Mode - No real payment processing</p>
<div className="bg-zinc-950 rounded-lg p-4 mb-6 border border-white/5 flex justify-between items-center">
<div>
<div className="text-xs text-zinc-400">Selected Plan</div>
<div className="text-sm font-medium text-white" id="modal-plan-name">Monthly</div>
</div>
<div className="text-lg font-semibold text-white" id="modal-plan-price">$12</div>
</div>
<div className="space-y-3 mb-6">
<button className="w-full flex items-center justify-center gap-2 bg-[#1f2937] hover:bg-[#374151] text-white py-3 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="logos:google-pay" width="24"></iconify-icon> Pay
                    </button>
<button className="w-full flex items-center justify-center gap-2 bg-[#000000] border border-white/10 hover:border-white/30 text-white py-3 rounded-lg text-sm font-medium transition-colors">
<iconify-icon icon="logos:apple-pay" width="24"></iconify-icon> Pay
                    </button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-900 px-2 text-zinc-500">Or pay with card</span></div>
</div>
<form className="space-y-3" onsubmit="event.preventDefault(); processDemoPayment();">
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Email address" required="" type="email"/>
<div className="relative">
<input className="w-full bg-zinc-950 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Card number (4242...)" required="" type="text"/>
<iconify-icon className="absolute right-4 top-3.5 text-zinc-500" icon="solar:card-linear"></iconify-icon>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg text-sm transition-colors mt-2" type="submit">
                            Pay <span id="btn-price">$12</span>
</button>
</form>
</div>
<div className="flex items-center justify-center gap-1 text-[10px] text-zinc-500">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon>
                    Encrypted and secure (Demo)
                </div>
</div>

<div className="absolute inset-0 bg-zinc-900 flex flex-col items-center justify-center p-6 hidden" id="payment-success">
<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
<iconify-icon className="text-4xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Payment Successful</h3>
<p className="text-sm text-zinc-400 text-center mb-6">Your premium access has been activated.</p>
<div className="bg-zinc-950 border border-white/10 rounded-lg p-3 mb-6 w-full text-center">
<p className="text-[10px] text-zinc-500 uppercase tracking-wide mb-1">Premium Key</p>
<p className="font-mono text-white tracking-widest">PREM-9921-XMAS</p>
</div>
<button className="text-sm text-blue-400 hover:text-blue-300" onclick="closeModal('checkout-modal')">Close Window</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" id="info-modal">
<div className="bg-zinc-900 border border-white/10 rounded-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto relative p-8">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white" onclick="closeModal('info-modal')">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<h2 className="text-xl font-medium text-white mb-4">Legal Information</h2>
<div className="prose prose-invert prose-sm">
<p className="text-zinc-400 text-sm">This is a demonstration page. The "Privacy Policy" and "Terms of Service" would typically appear here. <br/><br/>
                For this demo: No data is collected, no cookies are stored, and no real payments are processed. The access codes generated are simulated and do not provide real VPN access.</p>
</div>
</div>
</div>


    </>
  );
}
