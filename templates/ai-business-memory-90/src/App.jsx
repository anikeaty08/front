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
colors: {
bg: '#faf8f5',
ink: '#1a1a1a',
gold: {
DEFAULT: '#b8860b',
hover: '#9b7109',
light: '#fdf8ed',
border: '#e6c875'
},
semantic: {
green: '#10b981',
red: '#ef4444',
amber: '#f59e0b'
}
},
fontFamily: {
serif: ['"Instrument Serif"', 'serif'],
sans: ['"DM Sans"', 'sans-serif'],
},
boxShadow: {
'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'float': '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Setup Auth UI State
        function updateAuthUI() {
            const token = localStorage.getItem('rekal_token');
            const authContainer = document.getElementById('auth-buttons');
            
            if (token) {
                authContainer.innerHTML = `
                    <a href="/dashboard.html" class="bg-ink text-white px-4 py-2 rounded-md hover:bg-ink/90 transition-colors flex items-center gap-1.5">
                        Dashboard <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
                    </a>
                `;
            } else {
                authContainer.innerHTML = `
                    <button onclick="openModal('login')" class="px-4 py-2 border border-ink/20 rounded-md hover:bg-ink/5 transition-colors hidden sm:block">Login</button>
                    <button onclick="openModal('register')" class="bg-gold text-white px-4 py-2 rounded-md hover:bg-gold-hover transition-colors shadow-sm">Start Free Trial</button>
                `;
            }
        }

        // Modal Logic
        const modal = document.getElementById('auth-modal');
        const modalContent = document.getElementById('modal-content');

        function openModal(tab = 'login') {
            // If logged in, buttons should redirect to dashboard, but just in case:
            if(localStorage.getItem('rekal_token') && tab === 'register') {
                window.location.href = '/dashboard.html';
                return;
            }
            
            modal.classList.remove('hidden');
            // small delay to allow display:block to apply before animating opacity
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
            switchTab(tab);
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function switchTab(tab) {
            const loginForm = document.getElementById('form-login');
            const registerForm = document.getElementById('form-register');
            const tabLogin = document.getElementById('tab-login');
            const tabRegister = document.getElementById('tab-register');

            if (tab === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
                tabLogin.classList.add('text-ink', 'border-gold');
                tabLogin.classList.remove('text-ink/40', 'border-transparent');
                tabRegister.classList.remove('text-ink', 'border-gold');
                tabRegister.classList.add('text-ink/40', 'border-transparent');
            } else {
                registerForm.classList.remove('hidden');
                loginForm.classList.add('hidden');
                tabRegister.classList.add('text-ink', 'border-gold');
                tabRegister.classList.remove('text-ink/40', 'border-transparent');
                tabLogin.classList.remove('text-ink', 'border-gold');
                tabLogin.classList.add('text-ink/40', 'border-transparent');
            }
        }

        // Mock Auth Handler
        function handleAuth(e) {
            e.preventDefault();
            // Mocking a successful login/register
            localStorage.setItem('rekal_token', 'mock_jwt_token_12345');
            
            // Show brief success state then redirect
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Success...';
            btn.classList.add('opacity-80');
            
            setTimeout(() => {
                window.location.href = '/dashboard.html'; // Adjust based on actual route
                closeModal();
                updateAuthUI();
                btn.innerText = originalText;
                btn.classList.remove('opacity-80');
            }, 800);
        }

        // FAQ Accordion Logic
        document.querySelectorAll('.faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('iconify-icon');
                
                // Close others
                document.querySelectorAll('.faq-content').forEach(c => {
                    if (c !== content && !c.classList.contains('hidden')) {
                        c.classList.add('hidden');
                        c.previousElementSibling.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    content.classList.add('hidden');
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });

        // Scroll Animations (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Sticky Navbar effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('bg-bg');
            } else {
                navbar.classList.remove('nav-scrolled');
                navbar.classList.add('bg-bg');
            }
        });

        // Initialize UI
        updateAuthUI();
    
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
      

<nav className="fixed top-0 w-full z-40 transition-all duration-300 bg-bg" id="navbar">
<div className="max-w-[960px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-gold flex items-center justify-center rounded-sm group-hover:bg-gold-hover transition-colors">
<span className="text-white font-serif text-sm leading-none pt-0.5">R</span>
</div>
<span className="font-serif text-xl tracking-tight mt-1">Rekal</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm text-ink/70">
<a className="hover:text-ink transition-colors" href="#features">Features</a>
<a className="hover:text-ink transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-ink transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3 text-sm" id="auth-buttons">

</div>
</div>
</nav>

<div className="fixed inset-0 z-50 hidden opacity-0 transition-opacity duration-300" id="auth-modal">
<div className="absolute inset-0 bg-ink/20 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm">
<div className="bg-bg rounded-xl shadow-float border border-ink/5 overflow-hidden transform scale-95 transition-transform duration-300" id="modal-content">
<div className="p-6">
<button className="absolute top-4 right-4 text-ink/40 hover:text-ink transition-colors" onclick="closeModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex gap-4 border-b border-ink/10 mb-6">
<button className="pb-2 text-sm font-medium border-b-2 border-transparent text-ink/40 transition-colors" id="tab-login" onclick="switchTab('login')">Login</button>
<button className="pb-2 text-sm font-medium border-b-2 border-transparent text-ink/40 transition-colors" id="tab-register" onclick="switchTab('register')">Register</button>
</div>

<form className="hidden flex flex-col gap-4" id="form-login" onsubmit="handleAuth(event)">
<div>
<label className="block text-xs text-ink/60 mb-1">Email</label>
<input className="w-full bg-white border border-ink/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-shadow" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-ink/60 mb-1">Password</label>
<input className="w-full bg-white border border-ink/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-shadow" required="" type="password"/>
</div>
<button className="w-full bg-ink text-bg py-2 rounded-md text-sm hover:bg-ink/90 transition-colors mt-2" type="submit">Sign In</button>
</form>

<form className="hidden flex flex-col gap-4" id="form-register" onsubmit="handleAuth(event)">
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs text-ink/60 mb-1">Name</label>
<input className="w-full bg-white border border-ink/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-ink/60 mb-1">Phone (Optional)</label>
<input className="w-full bg-white border border-ink/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs text-ink/60 mb-1">Email</label>
<input className="w-full bg-white border border-ink/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-ink/60 mb-1">Password</label>
<input className="w-full bg-white border border-ink/10 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold" required="" type="password"/>
</div>
<div>
<label className="block text-xs text-ink/60 mb-1">Business Niche</label>
<div className="relative">
<select className="w-full bg-white border border-ink/10 rounded-md px-3 py-2 text-sm appearance-none focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold">
<option>Real Estate</option>
<option>Textiles</option>
<option>Auto Parts</option>
<option>General Business</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-ink/40 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-gold text-white py-2 rounded-md text-sm hover:bg-gold-hover transition-colors mt-2" type="submit">Start Free Trial</button>
</form>
</div>
</div>
</div>
</div>

<main className="pt-24 pb-16">

<section className="max-w-[960px] mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-24 text-center">
<div className="reveal max-w-3xl mx-auto">
<h1 className="font-serif text-5xl md:text-7xl tracking-tight text-ink leading-[1.1] mb-6">
                    Aapka business sab bhool jaata hai.<br/>
<span className="text-gold">Rekal</span> yaad rakhega.
                </h1>
<p className="text-lg md:text-xl text-ink/70 mb-4 max-w-2xl mx-auto">
                    The AI that remembers every business conversation you've ever had — so you never lose a deal to bad memory again.
                </p>
<p className="text-sm text-ink/50 mb-8 max-w-lg mx-auto leading-relaxed">
                    You have 200+ client conversations on WhatsApp. You've forgotten 90% of what was said. How many deals did that cost you?
                </p>
<div className="flex flex-col items-center gap-3">
<button className="bg-gold text-white px-6 py-3 rounded-md text-base hover:bg-gold-hover transition-colors flex items-center gap-2 group" onclick="openModal('register')">
                        Start 7-Day Free Trial
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-ink/40 flex items-center gap-2">
<span>No credit card required</span>
<span>•</span>
<span>5 free chat uploads</span>
<span>•</span>
<span>Works with WhatsApp</span>
</p>
</div>
</div>

<div className="reveal mt-16 relative mx-auto max-w-2xl">
<div className="absolute -inset-1 bg-gradient-to-b from-gold/20 to-transparent blur-xl rounded-3xl opacity-50"></div>
<div className="relative bg-white border border-ink/5 rounded-xl shadow-float p-1 overflow-hidden">
<div className="bg-bg/50 rounded-lg p-4 flex flex-col gap-4 text-left">

<div className="flex justify-between items-center border-b border-ink/5 pb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center text-ink/60 font-medium text-xs">AS</div>
<div>
<div className="text-sm font-medium flex items-center gap-2">
                                        Amit Sharma
                                        <span className="w-2 h-2 rounded-full bg-semantic-green"></span>
</div>
<div className="text-xs text-ink/40">Buyer • Real Estate</div>
</div>
</div>
<div className="text-xs bg-gold-light text-gold px-2 py-1 rounded border border-gold/20">₹1.2 Cr Budget</div>
</div>

<div className="grid md:grid-cols-2 gap-4">
<div className="bg-white p-3 rounded-md border border-ink/5 shadow-sm">
<div className="text-xs text-ink/40 mb-2 flex items-center gap-1">
<iconify-icon icon="solar:history-linear"></iconify-icon> Recent Moments
                                </div>
<div className="space-y-3 relative before:absolute before:inset-y-1 before:left-1.5 before:w-px before:bg-ink/5">
<div className="flex gap-2 relative z-10">
<div className="w-3 h-3 rounded-full bg-semantic-amber mt-0.5 border-2 border-white"></div>
<div>
<div className="text-xs font-medium">Follow-up Promised</div>
<div className="text-xs text-ink/60 truncate w-32">"Holi ke baad dekhte hain"</div>
</div>
</div>
<div className="flex gap-2 relative z-10">
<div className="w-3 h-3 rounded-full bg-semantic-green mt-0.5 border-2 border-white"></div>
<div>
<div className="text-xs font-medium">Requirement Captured</div>
<div className="text-xs text-ink/60 truncate w-32">3BHK, East facing, Ground floor</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="bg-white p-2 rounded-md border border-ink/10 flex items-center gap-2">
<iconify-icon className="text-ink/40" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
<span className="text-xs text-ink/70">Amit ka exact budget kya tha?</span>
</div>
<div className="bg-gold-light p-3 rounded-md border border-gold/10 relative">
<iconify-icon className="absolute top-2 right-2 text-gold/40" icon="solar:stars-linear"></iconify-icon>
<div className="text-xs text-ink/80 leading-relaxed">
                                        Based on chats from Feb 12: Amit mentioned his max budget is <strong>₹1.2 Cr</strong> but prefers something around <strong>₹1.05 Cr</strong> if it's near the metro station.
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[960px] mx-auto px-4 md:px-6 py-20 border-t border-ink/5">
<div className="reveal text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-3">Yeh toh roz hota hai...</h2>
<p className="text-sm text-ink/60">The invisible leaks costing your business every day.</p>
</div>
<div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12">

<div className="reveal bg-white border border-ink/5 p-5 rounded-xl shadow-subtle flex gap-4 items-start">
<div className="text-2xl mt-1">🔍</div>
<div>
<h3 className="text-sm font-medium text-ink mb-1">"Woh Ludhiana wale party ka message kahan hai?"</h3>
<p className="text-xs text-ink/60 leading-relaxed">You spend 10 minutes scrolling WhatsApp trying to find one conversation. Every. Single. Day.</p>
</div>
</div>

<div className="reveal bg-white border border-ink/5 p-5 rounded-xl shadow-subtle flex gap-4 items-start" style={{transitionDelay: '100ms'}}>
<div className="text-2xl mt-1">💸</div>
<div>
<h3 className="text-sm font-medium text-ink mb-1">"Client aaya 4 mahine baad — yaad hi nahi kya maanga tha"</h3>
<p className="text-xs text-ink/60 leading-relaxed">A buyer returns. You forgot their budget. Deal goes to a competitor who remembered.</p>
</div>
</div>

<div className="reveal bg-white border border-ink/5 p-5 rounded-xl shadow-subtle flex gap-4 items-start" style={{transitionDelay: '200ms'}}>
<div className="text-2xl mt-1">📉</div>
<div>
<h3 className="text-sm font-medium text-ink mb-1">"Follow-up karna tha, bhool gaye"</h3>
<p className="text-xs text-ink/60 leading-relaxed">Commitments made in chats slip through the cracks. Money walks out the door silently.</p>
</div>
</div>

<div className="reveal bg-white border border-ink/5 p-5 rounded-xl shadow-subtle flex gap-4 items-start" style={{transitionDelay: '300ms'}}>
<div className="text-2xl mt-1">🤷</div>
<div>
<h3 className="text-sm font-medium text-ink mb-1">"Pata nahi aaj kal kya maang rahe hain"</h3>
<p className="text-xs text-ink/60 leading-relaxed">5 buyers asked for the same thing. You didn't notice the pattern because data is scattered.</p>
</div>
</div>
</div>
<div className="reveal text-center max-w-2xl mx-auto bg-ink text-bg p-6 rounded-xl">
<p className="text-sm leading-relaxed">
                    Indian businesses lose <span className="text-gold font-medium">₹3-10 Lakhs</span> every year to forgotten conversations. Not bad decisions — forgotten ones.
                </p>
</div>
</section>

<section className="max-w-[960px] mx-auto px-4 md:px-6 py-20" id="how-it-works">
<div className="reveal text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-3">3 Steps. 5 Minutes. Done.</h2>
<p className="text-sm text-ink/60">No complicated setup. No WhatsApp APIs.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-ink/10 -z-10"></div>

<div className="reveal flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-ink/10 rounded-2xl flex items-center justify-center mb-4 shadow-subtle relative">
<span className="absolute -top-2 -right-2 w-6 h-6 bg-ink text-white text-xs rounded-full flex items-center justify-center">1</span>
<iconify-icon className="text-2xl text-ink" icon="solar:export-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Export Chat</h3>
<p className="text-xs text-ink/60 leading-relaxed max-w-[200px]">Open WhatsApp → Chat → Export Chat → Upload the .txt file to Rekal.</p>
</div>

<div className="reveal flex flex-col items-center text-center" style={{transitionDelay: '150ms'}}>
<div className="w-16 h-16 bg-white border border-ink/10 rounded-2xl flex items-center justify-center mb-4 shadow-subtle relative">
<span className="absolute -top-2 -right-2 w-6 h-6 bg-ink text-white text-xs rounded-full flex items-center justify-center">2</span>
<iconify-icon className="text-2xl text-ink" icon="solar:cpu-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">AI Extracts</h3>
<p className="text-xs text-ink/60 leading-relaxed max-w-[200px]">Our AI reads Hinglish and pulls out prices, commitments, and requirements.</p>
</div>

<div className="reveal flex flex-col items-center text-center" style={{transitionDelay: '300ms'}}>
<div className="w-16 h-16 bg-gold text-white border border-gold rounded-2xl flex items-center justify-center mb-4 shadow-subtle relative">
<span className="absolute -top-2 -right-2 w-6 h-6 bg-ink text-white text-xs rounded-full flex items-center justify-center">3</span>
<iconify-icon className="text-2xl" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Remember Everything</h3>
<p className="text-xs text-ink/60 leading-relaxed max-w-[200px]">Search in Hindi or English. Get instant answers. Never forget a deal.</p>
</div>
</div>
<div className="reveal text-center mt-12 text-xs text-ink/40">
                Works with .txt and .zip exports • Supports Hindi, English, Hinglish • 100% private
            </div>
</section>

<section className="max-w-[960px] mx-auto px-4 md:px-6 py-20 border-t border-ink/5" id="features">
<div className="reveal text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-3">What Rekal Gives You</h2>
<p className="text-sm text-ink/60">A living memory of your entire business.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal bg-white border border-ink/5 rounded-xl p-6 shadow-subtle flex flex-col">
<div className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center mb-4 text-ink">
<iconify-icon className="text-xl" icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Smart Contact Cards</h3>
<p className="text-xs text-ink/60 leading-relaxed mb-6 flex-grow">Every contact becomes a living profile. See their role, health status, preferences, and latest context at a glance.</p>
<div className="bg-bg border border-ink/5 rounded-md p-3">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-ink/10"></div>
<div className="h-2 w-20 bg-ink/20 rounded"></div>
</div>
<div className="h-1.5 w-full bg-ink/5 rounded mb-1.5"></div>
<div className="h-1.5 w-2/3 bg-ink/5 rounded"></div>
</div>
</div>

<div className="reveal bg-white border border-ink/5 rounded-xl p-6 shadow-subtle flex flex-col" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center mb-4 text-ink">
<iconify-icon className="text-xl" icon="solar:route-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Business Moments</h3>
<p className="text-xs text-ink/60 leading-relaxed mb-6 flex-grow">We don't show raw messages. We show meaning. Price discussions, requirements, and negotiations organized by type.</p>
<div className="bg-bg border border-ink/5 rounded-md p-3 space-y-2">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-semantic-amber"></div><div className="h-1.5 w-16 bg-ink/20 rounded"></div></div>
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold"></div><div className="h-1.5 w-24 bg-ink/20 rounded"></div></div>
</div>
</div>

<div className="reveal bg-white border border-ink/5 rounded-xl p-6 shadow-subtle flex flex-col" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center mb-4 text-ink">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">AI Search in Hinglish</h3>
<p className="text-xs text-ink/60 leading-relaxed mb-6 flex-grow">Ask "Rajesh ka budget kya tha?" and get an instant answer. Not 50 search results to scroll through.</p>
<div className="bg-bg border border-ink/5 rounded-md p-3">
<div className="h-6 w-full bg-white border border-ink/10 rounded mb-2 flex items-center px-2">
<div className="h-1 w-16 bg-ink/10 rounded"></div>
</div>
<div className="bg-gold-light border border-gold/10 p-2 rounded h-8"></div>
</div>
</div>

<div className="reveal bg-white border border-ink/5 rounded-xl p-6 shadow-subtle flex flex-col">
<div className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center mb-4 text-ink">
<iconify-icon className="text-xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Commitment Tracker</h3>
<p className="text-xs text-ink/60 leading-relaxed mb-6 flex-grow">"Next week payment karunga" is automatically detected and tracked with deadlines. Never miss a follow-up.</p>
<div className="bg-bg border border-ink/5 rounded-md p-3">
<div className="flex items-center justify-between bg-white p-1.5 rounded border border-ink/5">
<div className="flex items-center gap-2"><div className="w-3 h-3 border border-ink/20 rounded-sm"></div><div className="h-1.5 w-16 bg-ink/20 rounded"></div></div>
<span className="text-[8px] text-semantic-red bg-semantic-red/10 px-1 py-0.5 rounded">Overdue</span>
</div>
</div>
</div>

<div className="reveal bg-white border border-ink/5 rounded-xl p-6 shadow-subtle flex flex-col" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center mb-4 text-ink">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Relationship Health</h3>
<p className="text-xs text-ink/60 leading-relaxed mb-6 flex-grow">Contacts going cold? A buyer you forgot about just came back? Rekal tells you before it's too late.</p>
<div className="bg-bg border border-ink/5 rounded-md p-3 flex gap-2">
<div className="flex-1 bg-white border border-ink/5 rounded p-2 text-center"><div className="w-2 h-2 rounded-full bg-semantic-red mx-auto mb-1"></div><div className="h-1 w-8 bg-ink/10 mx-auto rounded"></div></div>
<div className="flex-1 bg-white border border-ink/5 rounded p-2 text-center"><div className="w-2 h-2 rounded-full bg-semantic-green mx-auto mb-1"></div><div className="h-1 w-8 bg-ink/10 mx-auto rounded"></div></div>
</div>
</div>

<div className="reveal bg-white border border-ink/5 rounded-xl p-6 shadow-subtle flex flex-col" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 bg-bg rounded-lg flex items-center justify-center mb-4 text-ink">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Memory Compounding</h3>
<p className="text-xs text-ink/60 leading-relaxed mb-6 flex-grow">Like an FD. Every chat you upload makes it richer. Soon, Rekal knows your business better than you do.</p>
<div className="bg-bg border border-ink/5 rounded-md p-3 flex items-center justify-between">
<div className="text-xs font-medium text-ink/60">847 Chats</div>
<div className="text-[10px] bg-semantic-green/10 text-semantic-green px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon> Growing
                        </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-ink text-white overflow-hidden">
<div className="max-w-[960px] mx-auto px-4 md:px-6 mb-10 text-center reveal">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-3">Built for Every Business</h2>
<p className="text-sm text-white/60">Same AI engine. Different business lens.</p>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-4 px-4 md:px-8 pb-8 snap-x snap-mandatory reveal">

<div className="shrink-0 w-2 md:w-[calc(50vw-480px)]"></div>
<div className="shrink-0 w-64 bg-white/5 border border-white/10 p-5 rounded-xl snap-center flex flex-col">
<div className="text-2xl mb-3">🏠</div>
<h3 className="text-sm font-medium mb-2">Real Estate</h3>
<p className="text-xs text-white/50 leading-relaxed">Match buyers to properties from forgotten conversations and track exact budget requirements.</p>
</div>
<div className="shrink-0 w-64 bg-white/5 border border-white/10 p-5 rounded-xl snap-center flex flex-col">
<div className="text-2xl mb-3">🧵</div>
<h3 className="text-sm font-medium mb-2">Textiles</h3>
<p className="text-xs text-white/50 leading-relaxed">Track fabric orders, price negotiations, and monitor supplier delivery reliability.</p>
</div>
<div className="shrink-0 w-64 bg-white/5 border border-white/10 p-5 rounded-xl snap-center flex flex-col">
<div className="text-2xl mb-3">🔧</div>
<h3 className="text-sm font-medium mb-2">Auto Parts</h3>
<p className="text-xs text-white/50 leading-relaxed">Remember part compatibility queries, customer vehicle history, and local stock demand.</p>
</div>
<div className="shrink-0 w-64 bg-white/5 border border-white/10 p-5 rounded-xl snap-center flex flex-col">
<div className="text-2xl mb-3">🏥</div>
<h3 className="text-sm font-medium mb-2">Medical</h3>
<p className="text-xs text-white/50 leading-relaxed">Organize patient interaction history, prescription requests, and appointment follow-ups.</p>
</div>
<div className="shrink-0 w-64 bg-white/5 border border-white/10 p-5 rounded-xl snap-center flex flex-col">
<div className="text-2xl mb-3">📊</div>
<h3 className="text-sm font-medium mb-2">CA / Tax</h3>
<p className="text-xs text-white/50 leading-relaxed">Keep track of missing document requests, filing deadlines, and client historical context.</p>
</div>
<div className="shrink-0 w-64 bg-white/5 border border-white/10 p-5 rounded-xl snap-center flex flex-col">
<div className="text-2xl mb-3">💼</div>
<h3 className="text-sm font-medium mb-2">General</h3>
<p className="text-xs text-white/50 leading-relaxed">Works out of the box for any service or trading business that runs primarily on WhatsApp.</p>
</div>

<div className="shrink-0 w-4 md:w-[calc(50vw-480px)]"></div>
</div>
</section>

<section className="max-w-[960px] mx-auto px-4 md:px-6 py-20" id="pricing">
<div className="reveal text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-3">Simple. Transparent. Worth Every Paisa.</h2>
<p className="text-sm text-ink/60 max-w-lg mx-auto leading-relaxed">One recovered deal pays for 3+ years of Rekal. Average broker commission: ₹2-5L. Rekal cost: ₹6,000-24,000/year.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center">

<div className="reveal bg-white border border-ink/10 rounded-xl p-6 flex flex-col h-full">
<h3 className="text-sm font-medium text-ink/60 mb-2">Free Trial</h3>
<div className="mb-4"><span className="text-2xl font-serif text-ink tracking-tight">₹0</span><span className="text-xs text-ink/40">/7 days</span></div>
<ul className="text-xs text-ink/70 space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>5 WhatsApp uploads</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>10 AI searches/day</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>3 Voice searches/day</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Up to 25 contacts</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Basic health status</li>
</ul>
<button className="w-full py-2 border border-ink/20 rounded-md text-sm hover:bg-ink/5 transition-colors" onclick="openModal('register')">Start Trial</button>
</div>

<div className="reveal bg-white border border-ink/10 rounded-xl p-6 flex flex-col h-full" style={{transitionDelay: '100ms'}}>
<h3 className="text-sm font-medium text-ink mb-2">Starter</h3>
<div className="mb-4"><span className="text-2xl font-serif text-ink tracking-tight">₹499</span><span className="text-xs text-ink/40">/mo</span></div>
<ul className="text-xs text-ink/70 space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>50 WhatsApp uploads/mo</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>50 AI searches/day</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>10 Voice searches/day</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Up to 200 contacts</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Commitment tracking</li>
</ul>
<button className="w-full py-2 border border-ink/20 rounded-md text-sm hover:bg-ink/5 transition-colors" onclick="openModal('register')">Get Started</button>
</div>

<div className="reveal bg-white border-2 border-gold rounded-xl p-6 flex flex-col h-full relative transform lg:-translate-y-2 shadow-float z-10" style={{transitionDelay: '200ms'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-medium px-2 py-0.5 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="text-sm font-medium text-ink mb-2">Professional</h3>
<div className="mb-4"><span className="text-2xl font-serif text-ink tracking-tight">₹999</span><span className="text-xs text-ink/40">/mo</span></div>
<ul className="text-xs text-ink/70 space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear"></iconify-icon>200 WhatsApp uploads/mo</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear"></iconify-icon>200 AI searches/day</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear"></iconify-icon>50 Voice searches/day</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Up to 500 contacts</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gold mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Pattern intelligence</li>
</ul>
<button className="w-full py-2 bg-gold text-white rounded-md text-sm hover:bg-gold-hover transition-colors shadow-sm" onclick="openModal('register')">Get Started</button>
</div>

<div className="reveal bg-white border border-ink/10 rounded-xl p-6 flex flex-col h-full" style={{transitionDelay: '300ms'}}>
<h3 className="text-sm font-medium text-ink mb-2">Business</h3>
<div className="mb-4"><span className="text-2xl font-serif text-ink tracking-tight">₹1,999</span><span className="text-xs text-ink/40">/mo</span></div>
<ul className="text-xs text-ink/70 space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Unlimited uploads</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Unlimited AI searches</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Unlimited Voice searches</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Unlimited contacts</li>
<li className="flex items-start gap-2"><iconify-icon className="text-ink/40 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>Multi-niche support</li>
</ul>
<button className="w-full py-2 border border-ink/20 rounded-md text-sm hover:bg-ink/5 transition-colors" onclick="openModal('register')">Get Started</button>
</div>
</div>
<div className="reveal mt-8 text-center text-xs text-ink/50 bg-ink/5 py-3 rounded-lg max-w-2xl mx-auto">
                All plans include: Hinglish AI • WhatsApp export support • Encrypted data
            </div>
</section>

<section className="max-w-[720px] mx-auto px-4 md:px-6 py-20 border-t border-ink/5">
<div className="reveal text-center mb-16">
<p className="text-sm font-medium text-gold mb-2">Built for Indian businesses, by an Indian builder</p>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-4">Questions?</h2>
<p className="text-xs text-ink/60">Your data never leaves your account. We never share data between users.</p>
</div>
<div className="space-y-4">

<div className="reveal border border-ink/10 rounded-lg bg-white overflow-hidden">
<button className="faq-btn w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none">
<span className="text-sm font-medium">Is my WhatsApp data safe?</span>
<iconify-icon className="text-ink/40 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-5 pb-4 text-xs text-ink/60 leading-relaxed border-t border-ink/5 pt-3">
                        Your data is encrypted, stored in your personal account, and never shared with other users. We don't use unofficial WhatsApp APIs — you manually export and upload your chats, keeping you in full control.
                    </div>
</div>
<div className="reveal border border-ink/10 rounded-lg bg-white overflow-hidden">
<button className="faq-btn w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none">
<span className="text-sm font-medium">Does it work with Hindi/Hinglish?</span>
<iconify-icon className="text-ink/40 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-5 pb-4 text-xs text-ink/60 leading-relaxed border-t border-ink/5 pt-3">
                        Yes! Our AI natively understands Hindi, English, and Hinglish (mixed). Search in whatever language you think in, and it will find the exact context from your chats.
                    </div>
</div>
<div className="reveal border border-ink/10 rounded-lg bg-white overflow-hidden">
<button className="faq-btn w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none">
<span className="text-sm font-medium">How is this different from a CRM?</span>
<iconify-icon className="text-ink/40 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-5 pb-4 text-xs text-ink/60 leading-relaxed border-t border-ink/5 pt-3">
                        CRMs require you to manually enter data. Rekal reads your existing WhatsApp conversations and extracts everything automatically. Zero data entry required from your side.
                    </div>
</div>
<div className="reveal border border-ink/10 rounded-lg bg-white overflow-hidden">
<button className="faq-btn w-full px-5 py-4 text-left flex justify-between items-center focus:outline-none">
<span className="text-sm font-medium">Do I need WhatsApp Business API?</span>
<iconify-icon className="text-ink/40 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content hidden px-5 pb-4 text-xs text-ink/60 leading-relaxed border-t border-ink/5 pt-3">
                        No. You simply export your chat from regular WhatsApp (using the native Export Chat feature) and upload the .txt or .zip file. It works perfectly with any standard WhatsApp version.
                    </div>
</div>
</div>
</section>

<section className="max-w-[960px] mx-auto px-4 md:px-6 py-24 text-center">
<div className="reveal bg-white border border-ink/10 rounded-2xl p-10 md:p-16 shadow-float relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-ink mb-4">Stop losing deals to bad memory.</h2>
<p className="text-sm md:text-base text-ink/60 mb-8 max-w-md mx-auto">Upload your first WhatsApp chat in 2 minutes. See what you've been forgetting.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
<button className="w-full sm:w-auto bg-gold text-white px-8 py-3 rounded-md text-sm hover:bg-gold-hover transition-colors shadow-sm" onclick="openModal('register')">
                            Start 7-Day Free Trial
                        </button>
<button className="w-full sm:w-auto border border-ink/20 text-ink px-8 py-3 rounded-md text-sm hover:bg-ink/5 transition-colors" onclick="openModal('login')">
                            Login
                        </button>
</div>
<p className="text-xs text-ink/40">₹0 to start • No credit card • Cancel anytime</p>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-ink/5 py-12">
<div className="max-w-[960px] mx-auto px-4 md:px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="flex flex-col items-center md:items-start gap-2">
<a className="flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-gold flex items-center justify-center rounded-sm">
<span className="text-white font-serif text-xs leading-none pt-0.5">R</span>
</div>
<span className="font-serif text-lg tracking-tight mt-1">Rekal</span>
</a>
<p className="text-xs text-ink/50">Your business memory that never forgets.</p>
</div>
<div className="flex gap-6 text-xs text-ink/60">
<a className="hover:text-ink transition-colors" href="#features">Features</a>
<a className="hover:text-ink transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-ink transition-colors" href="#how-it-works">How It Works</a>
<button className="hover:text-ink transition-colors" onclick="openModal('login')">Login</button>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-ink/5 text-xs text-ink/40">
<p>© 2026 Rekal. All rights reserved.</p>
<p>Made in India 🇮🇳 • Built in Chandigarh</p>
</div>
</div>
</footer>



    </>
  );
}
