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



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
}
},
plugins: [
function({ addUtilities }) {
const newUtilities = {
".perspective-dramatic": { perspective: "100px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
};
addUtilities(newUtilities);
}
]
};



        // --- MOCK DATABASE ---
        const MockDB = {
            users: [],
            leads: [],
            logs: [],
            
            connect: function() {
                console.log("[DB] Connecting...");
                return new Promise(resolve => setTimeout(resolve, 800));
            },
            
            addUser: function(email, password) {
                this.users.push({ id: Date.now(), email, password, createdAt: new Date() });
                this.log(`User registered: ${email}`);
                return true;
            },
            
            addLead: function(email, message) {
                this.leads.push({ id: Date.now(), email, message, status: 'new' });
                this.log(`New lead: ${email}`);
                return true;
            },

            log: function(msg) {
                this.logs.push({ time: new Date(), msg });
                console.log(`[DB] ${msg}`);
            }
        };

        // --- UI UTILITIES ---

        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            const icon = type === 'success' ? 'check-circle' : 'loader-2';
            const color = type === 'success' ? 'text-emerald-400 border-emerald-500/20' : 'text-blue-400 border-blue-500/20';
            const spin = type === 'loading' ? 'animate-spin' : '';
            
            toast.className = `flex items-center gap-3 rounded-lg border ${color} bg-neutral-900/90 p-4 shadow-xl backdrop-blur-md transition-all duration-300 transform translate-x-full`;
            toast.innerHTML = `
                <span class="iconify ${spin} ${color}" data-icon="lucide:${icon}" data-width="20"></span>
                <p class="text-sm font-medium text-white">${message}</p>
            `;
            
            container.appendChild(toast);
            
            // Animate in
            requestAnimationFrame(() => {
                toast.classList.remove('translate-x-full');
            });

            // Remove after delay
            setTimeout(() => {
                toast.classList.add('translate-x-full', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // --- MODAL LOGIC ---

        const modal = document.getElementById('universal-modal');
        const modalBody = document.getElementById('modal-body');

        function openModal(type) {
            let content = '';
            
            if (type === 'login') {
                content = `
                    <h3 class="text-2xl font-medium text-white">Welcome back</h3>
                    <p class="mt-2 text-sm text-neutral-400">Enter your credentials to access your account.</p>
                    <form onsubmit="handleLogin(event)" class="mt-6 space-y-4">
                        <div>
                            <label class="block text-xs text-neutral-500">Email</label>
                            <input type="email" required class="mt-1 w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="you@company.com">
                        </div>
                        <div>
                            <label class="block text-xs text-neutral-500">Password</label>
                            <input type="password" required class="mt-1 w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="••••••••">
                        </div>
                        <button type="submit" class="w-full rounded-lg bg-white py-2.5 text-sm font-medium text-black hover:bg-neutral-200">Sign In</button>
                    </form>
                `;
            } else if (type === 'signup') {
                content = `
                    <h3 class="text-2xl font-medium text-white">Create account</h3>
                    <p class="mt-2 text-sm text-neutral-400">Start managing your finances today.</p>
                    <form onsubmit="handleSignup(event)" class="mt-6 space-y-4">
                        <div>
                            <label class="block text-xs text-neutral-500">Work Email</label>
                            <input type="email" required class="mt-1 w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="name@company.com">
                        </div>
                        <div>
                            <label class="block text-xs text-neutral-500">Company Name</label>
                            <input type="text" required class="mt-1 w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Acme Inc.">
                        </div>
                        <button type="submit" class="w-full rounded-lg bg-emerald-500 py-2.5 text-sm font-medium text-white hover:bg-emerald-600">Get Started</button>
                    </form>
                `;
            } else if (type === 'contact') {
                content = `
                    <h3 class="text-2xl font-medium text-white">Contact Sales</h3>
                    <p class="mt-2 text-sm text-neutral-400">Tell us about your needs.</p>
                    <form onsubmit="handleContact(event)" class="mt-6 space-y-4">
                        <textarea required rows="4" class="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="How can we help?"></textarea>
                        <button type="submit" class="w-full rounded-lg bg-white py-2.5 text-sm font-medium text-black hover:bg-neutral-200">Send Message</button>
                    </form>
                `;
            } else if (type === 'demo') {
                content = `
                    <div class="aspect-video w-full rounded-lg bg-black flex items-center justify-center border border-white/10">
                        <span class="iconify text-emerald-500 animate-pulse" data-icon="lucide:play" data-width="48"></span>
                    </div>
                    <p class="mt-4 text-center text-sm text-neutral-400">Demo video loading from server...</p>
                `;
            } else {
                content = `
                    <h3 class="text-xl font-medium text-white">Feature Locked</h3>
                    <p class="mt-2 text-sm text-neutral-400">Please sign in to access ${type} features.</p>
                    <button onclick="closeModal()" class="mt-6 w-full rounded-lg border border-white/10 bg-white/5 py-2 text-sm text-white hover:bg-white/10">Close</button>
                `;
            }

            modalBody.innerHTML = content;
            modal.classList.add('active');
        }

        function closeModal() {
            modal.classList.remove('active');
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // --- ACTION HANDLERS ---

        async function handleLogin(e) {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            
            showToast('Authenticating...', 'loading');
            await MockDB.connect();
            
            closeModal();
            showToast(`Welcome back, ${email.split('@')[0]}!`);
            MockDB.log(`User logged in: ${email}`);
        }

        async function handleSignup(e) {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            
            showToast('Creating account...', 'loading');
            await MockDB.connect();
            
            MockDB.addUser(email, 'hashed_pw');
            closeModal();
            showToast('Account created successfully!');
        }

        async function handleContact(e) {
            e.preventDefault();
            showToast('Sending message...', 'loading');
            await MockDB.connect();
            
            MockDB.addLead('user@input.com', 'Contact request');
            closeModal();
            showToast('Message sent to sales team.');
        }

        function copyCode() {
            navigator.clipboard.writeText(`const finex = require('finex-node');`);
            showToast('Code snippet copied to clipboard');
        }

        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        function simulateDataRefresh() {
            showToast('Refreshing real-time data...', 'loading');
            setTimeout(() => {
                showToast('Data updated');
            }, 800);
        }
        
        function updateChart(period) {
            showToast(`Loading ${period} data...`, 'loading');
            // Randomize bar heights to simulate data change
            const bars = document.querySelectorAll('#chart-bars > div');
            bars.forEach(bar => {
                const newHeight = Math.floor(Math.random() * 60) + 20;
                bar.style.height = `${newHeight}%`;
            });
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
      

<div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2" id="toast-container"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2" href="#" onclick="window.scrollTo(0,0); return false;">
<span className="text-lg font-medium tracking-tighter text-white font-sans">FINEX</span>
</a>
<div className="hidden items-center gap-8 md:flex">
<button className="text-sm font-normal text-neutral-400 hover:text-white transition-colors font-sans" onclick="scrollToSection('features')">Products</button>
<button className="hover:text-white transition-colors text-sm font-normal text-neutral-400" onclick="scrollToSection('solutions')">Solutions</button>
<button className="text-sm font-normal text-neutral-400 hover:text-white transition-colors font-sans" onclick="scrollToSection('developers')">Developers</button>
<button className="text-sm font-normal text-neutral-400 hover:text-white transition-colors font-sans" onclick="scrollToSection('pricing')">Pricing</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden hover:text-neutral-300 md:block text-sm font-normal text-white" onclick="openModal('login')">Sign in</button>
<button className="group relative flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-normal text-white transition-all hover:bg-white/10 hover:border-white/20" onclick="openModal('signup')">
<span className="font-sans">Get Started</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 overflow-hidden">
<div className="z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="glow-blob"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 animate-fade-in-up font-sans">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                v2.0 is now live
            </div>
<h1 className="mx-auto max-w-4xl text-5xl tracking-tighter text-white md:text-7xl lg:text-8xl font-dm-sans font-light" style={{}}>
                Financial infrastructure <br/>
<span className="bg-gradient-to-b from-emerald-400 to-emerald-700 bg-clip-text text-transparent font-dm-sans font-light" style={{}}>for the internet.</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 font-light leading-relaxed font-sans">
                Seamlessly manage corporate cards, global payments, and expenses. 
                The all-in-one platform designed for modern growth teams.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-medium text-black transition-transform hover:scale-105 active:scale-95 font-sans" onclick="scrollToSection('developers')">
                    Start Integration
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 active:bg-white/20 font-sans" onclick="openModal('demo')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Watch Demo
                </button>
</div>

<div className="relative mx-auto mt-20 max-w-5xl perspective-[2000px]">
<div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 blur-xl opacity-50"></div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-2xl">
<div className="flex items-center justify-between border-b border-white/5 bg-neutral-900 px-4 py-3">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex h-6 w-64 items-center justify-center rounded-md bg-neutral-800 text-xs text-neutral-500 font-sans">
                            finex.com/dashboard
                        </div>
<div className="h-8 w-8 rounded-full bg-neutral-800 cursor-pointer hover:bg-neutral-700 transition-colors" onclick="openModal('profile')"></div>
</div>
<div className="flex h-[500px]">
<div className="hidden w-64 flex-col border-r border-white/5 bg-neutral-900/50 p-4 md:flex">
<div className="space-y-1">
<button className="w-full flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 text-sm font-medium text-white text-left font-sans">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:layout-dashboard" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                                    Overview
                                </button>
<button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-normal text-neutral-400 hover:bg-white/5 hover:text-white transition-colors text-left font-sans">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
                                    Transactions
                                </button>
<button className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-normal text-neutral-400 hover:bg-white/5 hover:text-white transition-colors text-left font-sans">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wallet" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
                                    Wallets
                                </button>
</div>
</div>
<div className="flex-1 overflow-hidden bg-neutral-950/50 p-6 md:p-8">
<div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
<div className="rounded-xl border border-white/5 bg-neutral-900 p-4 cursor-pointer hover:border-emerald-500/30 transition-colors" onclick="simulateDataRefresh()">
<p className="text-xs text-neutral-500 font-sans">Total Revenue</p>
<p className="mt-1 text-2xl text-white font-dm-sans font-light" style={{}}>$240,500.00</p>
<div className="mt-2 flex items-center gap-1 text-xs text-emerald-400 font-sans">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
                                        +12.5%
                                    </div>
</div>
<div className="rounded-xl border border-white/5 bg-neutral-900 p-4 cursor-pointer hover:border-emerald-500/30 transition-colors" onclick="simulateDataRefresh()">
<p className="text-xs text-neutral-500 font-sans">Active Cards</p>
<p className="mt-1 text-2xl text-white font-dm-sans font-light" style={{}}>1,204</p>
<div className="mt-2 flex items-center gap-1 text-xs text-emerald-400 font-sans">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                                        +34 new
                                    </div>
</div>
<div className="rounded-xl border border-white/5 bg-neutral-900 p-4 cursor-pointer hover:border-emerald-500/30 transition-colors" onclick="simulateDataRefresh()">
<p className="text-xs text-neutral-500 font-sans">Pending</p>
<p className="mt-1 text-2xl text-white font-dm-sans font-light" style={{}}>$12,040.50</p>
<div className="mt-2 flex items-center gap-1 text-xs text-neutral-500 font-sans">Processing</div>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-neutral-900 p-6">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-sm font-medium text-white font-sans">Cashflow</h3>
<div className="flex gap-2">
<button className="rounded-md bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/20 font-sans" onclick="updateChart('7D')">7D</button>
<button className="rounded-md px-2 py-1 text-xs text-neutral-500 hover:bg-white/5 hover:text-white font-sans" onclick="updateChart('1M')">1M</button>
</div>
</div>
<div className="relative h-48 w-full">
<div className="flex h-full items-end justify-between gap-2 px-2" id="chart-bars">

<div className="w-full rounded-t-sm bg-emerald-500/20 hover:bg-emerald-500/40 transition-all duration-500 h-[40%]"></div>
<div className="w-full rounded-t-sm bg-emerald-500/20 hover:bg-emerald-500/40 transition-all duration-500 h-[65%]"></div>
<div className="w-full rounded-t-sm bg-emerald-500/20 hover:bg-emerald-500/40 transition-all duration-500 h-[45%]"></div>
<div className="w-full rounded-t-sm bg-emerald-500/20 hover:bg-emerald-500/40 transition-all duration-500 h-[80%]"></div>
<div className="w-full rounded-t-sm bg-emerald-500/20 hover:bg-emerald-500/40 transition-all duration-500 h-[55%]"></div>
<div className="w-full rounded-t-sm bg-emerald-500/20 hover:bg-emerald-500/40 transition-all duration-500 h-[70%]"></div>
<div className="w-full rounded-t-sm bg-emerald-500 bg-[linear-gradient(180deg,rgba(16,185,129,1)_0%,rgba(16,185,129,0.5)_100%)] h-[85%] relative group"></div>
<div className="w-full rounded-t-sm bg-emerald-500/20 hover:bg-emerald-500/40 transition-all duration-500 h-[75%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="pt-24 pb-24 border-b border-white/5" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl tracking-tight text-white md:text-5xl font-dm-sans font-light">Unify your financial stack</h2>
<p className="mx-auto mt-4 max-w-2xl text-neutral-400 font-sans">Everything you need to manage your business finances in one intuitive interface.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-rows-2 h-auto lg:h-[800px]">
<div className="card-hover group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 md:col-span-2 cursor-pointer" onclick="openModal('feature-global')">
<div className="relative z-10 flex h-full flex-col justify-between">
<div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:globe-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-sans">Global Payments</h3>
<p className="mt-2 max-w-sm text-sm text-neutral-400 font-sans">Send and receive payments in over 120 currencies with real-time exchange rates and zero hidden fees.</p>
</div>
<div className="mt-8 flex items-center justify-center gap-8 opacity-50">
<div className="h-32 w-32 rounded-full border border-dashed border-white/20 relative animate-[spin_10s_linear_infinite]">
<div className="absolute top-2 left-6 h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
</div>
</div>
</div>
</div>
<div className="card-hover group relative col-span-1 row-span-2 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 cursor-pointer" onclick="openModal('feature-mobile')">
<div className="relative z-10 h-full flex flex-col">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-sans">Mobile First</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">Manage everything on the go. Real-time notifications for every transaction.</p>
<div className="relative mt-12 flex-1 rounded-t-3xl border-x border-t border-white/10 bg-neutral-950 p-4 shadow-2xl mx-auto w-full max-w-[240px]">
<div className="mb-6 flex justify-between items-center px-2">
<div className="h-1 w-12 rounded-full bg-white/20"></div>
</div>
<div className="space-y-3">
<div className="h-24 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5 p-4">
<div className="flex justify-between">
<div className="h-8 w-8 rounded-full bg-white/10"></div>
<span className="text-xs text-emerald-400 font-sans">Active</span>
</div>
<div className="mt-4 h-2 w-16 rounded bg-white/20"></div>
</div>
</div>
</div>
</div>
</div>
<div className="card-hover group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 cursor-pointer" onclick="openModal('feature-security')">
<div className="relative z-10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-sans">Bank-grade Security</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">SOC2 Type II certified. Your data is encrypted at rest and in transit.</p>
</div>
</div>
<div className="card-hover group relative col-span-1 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 p-8 cursor-pointer" onclick="openModal('feature-cards')">
<div className="relative z-10">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 text-pink-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-sans">Corporate Cards</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">Issue physical and virtual cards instantly with custom limits.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-neutral-950" id="solutions">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl tracking-tight text-white font-dm-sans font-light">End-to-end Solutions</h2>
<p className="mx-auto mt-4 max-w-xl text-neutral-400 font-sans">Designed for modern teams to move faster.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 transition-all hover:bg-neutral-900 hover:border-white/20">
<div className="mb-6 h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-sans">Connect &amp; Identify</h3>
<p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans">
                        Instantly verify business identities and connect bank accounts with a single API call. 
                        Reduce fraud by 95%.
                    </p>
<div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-emerald-500/50"></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 transition-all hover:bg-neutral-900 hover:border-white/20">
<div className="mb-6 h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M11 9h4a2 2 0 0 1 0 4h-4a2 2 0 0 0 0 4h4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-sans">Configure Logic</h3>
<p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans">
                        Set complex spending rules, approval workflows, and limits. 
                        Automate your financial policy enforcement.
                    </p>
<div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-500/50"></div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/30 p-8 transition-all hover:bg-neutral-900 hover:border-white/20">
<div className="mb-6 h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
<svg className="iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3.5"></path><path d="M16 12h5"></path><path d="M21 16h-5"></path><path d="m16 19l-3-3l3-3"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white font-sans">Sync &amp; Reconcile</h3>
<p className="mt-3 text-sm text-neutral-400 leading-relaxed font-sans">
                        Push data to your ledger in real-time. 
                        Compatible with Quickbooks, Xero, Netsuite, and custom ERPs.
                    </p>
<div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full w-full bg-purple-500/50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative overflow-hidden" id="developers">
<div className="absolute inset-0 bg-neutral-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950"></div>
<div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-400 mb-6 font-mono">
<span>GET /v1/transactions</span>
</div>
<h2 className="text-3xl tracking-tight text-white font-dm-sans font-light">Built for developers</h2>
<p className="mt-6 text-neutral-400 font-sans leading-relaxed">
                    A powerful API that fits into your existing workflow. 
                    Webhooks, sandboxes, and detailed documentation to help you build financial products faster.
                </p>
<div className="mt-8 flex flex-wrap gap-4">
<button className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-sans group">
                        Read the docs
                        <svg className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
<div className="w-full max-w-lg rounded-xl border border-white/10 bg-[#0D0D0D] p-6 font-mono text-xs hover:border-white/20 transition-colors group shadow-2xl">
<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<div className="h-2.5 w-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500 transition-colors"></div>
<div className="h-2.5 w-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
<div className="h-2.5 w-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500 transition-colors"></div>
</div>
<span className="text-neutral-600">server.js</span>
</div>
<div className="space-y-2 text-neutral-400 overflow-x-auto">
<p className="font-sans"><span className="text-purple-400 font-sans">const</span> <span className="text-blue-400 font-sans">finex</span> = <span className="text-purple-400 font-sans">require</span>(<span className="text-emerald-400 font-sans">'finex-node'</span>);</p>
<p> </p>
<p className="font-sans"><span className="text-neutral-500">// Initialize payment intent</span></p>
<p className="font-sans"><span className="text-purple-400 font-sans">const</span> payment = <span className="text-purple-400 font-sans">await</span> <span className="text-blue-400 font-sans">finex</span>.payments.<span className="text-yellow-400 font-sans">create</span>({</p>
<p className="pl-4 font-sans">amount: <span className="text-orange-400 font-sans">5000</span>,</p>
<p className="pl-4 font-sans">currency: <span className="text-emerald-400 font-sans">'usd'</span>,</p>
<p className="pl-4 font-sans">source: <span className="text-emerald-400 font-sans">'tok_visa'</span>,</p>
<p className="pl-4 font-sans">metadata: { <span className="text-blue-400">order_id</span>: <span className="text-emerald-400">'6789'</span> }</p>
<p className="font-sans">});</p>
<p> </p>
<p className="font-sans"><span className="text-purple-400">console</span>.<span className="text-yellow-400">log</span>(payment.status); <span className="text-neutral-500">// 'succeeded'</span></p>
</div>
<button className="mt-6 w-full rounded border border-white/10 bg-white/5 py-2 text-center text-xs text-neutral-500 hover:bg-white/10 hover:text-white transition-colors font-sans flex items-center justify-center gap-2" onclick="copyCode()">
<svg className="iconify iconify--lucide" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="14" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Copy Snippet
                </button>
</div>
</div>
</section>

<section className="py-32" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight text-white font-dm-sans font-light">Simple, transparent pricing</h2>
<p className="mt-4 text-neutral-400 font-sans">No hidden fees. Scale as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-8 hover:border-white/20 transition-all flex flex-col">
<div className="mb-4 text-lg font-medium text-white font-sans">Starter</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white font-dm-sans">$0</span>
<span className="text-neutral-500 text-sm font-sans">/month</span>
</div>
<p className="mt-4 text-sm text-neutral-400 font-sans">Perfect for startups and small teams just getting started.</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-300 font-sans flex-1">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Up to 2 corporate cards
                        </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Basic analytics
                        </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Standard support
                        </li>
</ul>
<button className="mt-8 w-full rounded-lg border border-white/10 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 font-sans" onclick="openModal('signup')">
                        Start for free
                    </button>
</div>

<div className="relative rounded-2xl border border-emerald-500/30 bg-neutral-900/60 p-8 shadow-2xl shadow-emerald-900/10 flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white font-sans">
                        Most Popular
                    </div>
<div className="mb-4 text-lg font-medium text-white font-sans">Growth</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white font-dm-sans">$49</span>
<span className="text-neutral-500 text-sm font-sans">/month</span>
</div>
<p className="mt-4 text-sm text-neutral-400 font-sans">For growing teams that need more control and flexibility.</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-300 font-sans flex-1">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Unlimited cards
                        </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Custom spending limits
                        </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Accounting integrations
                        </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            24/7 Priority support
                        </li>
</ul>
<button className="mt-8 w-full rounded-lg bg-emerald-500 py-3 text-sm font-medium text-white hover:bg-emerald-600 font-sans" onclick="openModal('signup')">
                        Get Started
                    </button>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/20 p-8 hover:border-white/20 transition-all flex flex-col">
<div className="mb-4 text-lg font-medium text-white font-sans">Enterprise</div>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-light text-white font-dm-sans">Custom</span>
</div>
<p className="mt-4 text-sm text-neutral-400 font-sans">Advanced security and dedicated support for large organizations.</p>
<ul className="mt-8 space-y-4 text-sm text-neutral-300 font-sans flex-1">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            SSO &amp; SAML
                        </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Dedicated account manager
                        </li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-emerald-500 iconify iconify--lucide" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                            Custom contracts &amp; SLA
                        </li>
</ul>
<button className="mt-8 w-full rounded-lg border border-white/10 bg-white/5 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 font-sans" onclick="openModal('contact')">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-32 border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
<h2 className="text-4xl tracking-tighter text-white md:text-6xl font-dm-sans font-light" style={{}}>Ready to scale your finances?</h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400 font-sans">Join over 4,000 innovative companies managing their spending with Finex today.</p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="h-12 rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-neutral-200 font-sans" onclick="openModal('signup')">
                    Get Started Now
                </button>
<button className="h-12 rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-white/5 font-sans" onclick="openModal('contact')">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<span className="text-lg font-medium tracking-tighter text-white font-sans">FINEX</span>
<p className="mt-4 max-w-xs text-sm text-neutral-500 font-sans">
                        The financial operating system for the next generation of internet companies.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white font-sans">Product</h4>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li><button className="hover:text-emerald-400 transition-colors text-left font-sans" onclick="scrollToSection('features')">Features</button></li>
<li><button className="hover:text-emerald-400 transition-colors text-left font-sans" onclick="scrollToSection('solutions')">Solutions</button></li>
<li><button className="hover:text-emerald-400 transition-colors text-left font-sans" onclick="scrollToSection('pricing')">Pricing</button></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white font-sans">Company</h4>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li><button className="hover:text-emerald-400 transition-colors text-left font-sans" onclick="openModal('about')">About</button></li>
<li><button className="hover:text-emerald-400 transition-colors text-left font-sans" onclick="openModal('contact')">Contact</button></li>
</ul>
</div>
</div>
<div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600 font-sans">© 2023 Finex Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-neutral-500 font-sans">Database Connected: <span className="text-emerald-500 font-sans" id="db-status">Active</span></span>
</div>
</div>
</div>
</footer>

<div className="modal fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" id="universal-modal">
<div className="modal-content relative w-full max-w-md rounded-2xl border border-white/10 bg-neutral-900 p-8 shadow-2xl">
<button className="absolute right-4 top-4 text-neutral-500 hover:text-white" onclick="closeModal()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div id="modal-body">
<h3 className="text-2xl text-white font-dm-sans font-light" style={{}}>Welcome back</h3>
<p className="mt-2 text-sm text-neutral-400 font-sans">Enter your credentials to access your account.</p>
<form className="mt-6 space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs text-neutral-500 font-sans">Email</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-500 font-sans">Password</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2 text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full rounded-lg bg-white py-2.5 text-sm font-medium text-black hover:bg-neutral-200 font-sans" type="submit">Sign In</button>
</form>
</div>
</div>
</div>



    </>
  );
}
