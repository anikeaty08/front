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



        // Cinematic Intro Logic
        document.addEventListener('DOMContentLoaded', () => {
            const intro = document.getElementById('intro-overlay');
            const body = document.body;

            setTimeout(() => {
                intro.classList.add('intro-finish');
                body.classList.remove('intro-active');
            }, 2500);

            setTimeout(() => {
                intro.remove();
            }, 3500);

            // Intersection Observer
            const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });

        // Cart State
        let cart = [];
        const badge = document.getElementById('cart-badge');
        const cartPanel = document.getElementById('cart-panel');
        const overlay = document.getElementById('cart-panel-overlay');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        // Toggle Cart UI
        function toggleCart() {
            if (cartPanel.classList.contains('translate-x-full')) {
                cartPanel.classList.remove('translate-x-full');
                overlay.style.opacity = '1';
                overlay.style.pointerEvents = 'auto';
                renderCart();
            } else {
                cartPanel.classList.add('translate-x-full');
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
            }
        }

        // Add to Cart Logic with Animation
        function addWithLoading(itemName, price, btn) {
            const btnText = btn.querySelector('.btn-text');
            const originalContent = btnText.innerHTML;
            
            // Loading State
            btnText.innerHTML = '<iconify-icon icon="line-md:loading-twotone-loop" class="text-xl"></iconify-icon>';
            
            setTimeout(() => {
                // Restore Button
                btnText.innerHTML = originalContent;
                
                // Add Item logic
                cart.push({ name: itemName, price: price });
                updateBadge();
                showToast();
                
            }, 800);
        }

        // Checkout Logic
        function processCheckout(btn) {
            if (cart.length === 0) return;

            const btnText = btn.querySelector('.btn-text');
            const icon = btn.querySelector('iconify-icon');
            const originalContent = btnText.innerHTML;
            const originalIcon = icon.getAttribute('icon');

            // Set Loading Visuals
            btnText.innerHTML = 'Redirecting to PayPal...';
            icon.setAttribute('icon', 'line-md:loading-twotone-loop');
            
            // Calculate Total
            const total = cart.reduce((sum, item) => sum + item.price, 0);

            setTimeout(() => {
                let url = '';
                
                // Conditional Logic
                if (total >= 20) {
                    url = '[INSERT YOUR PAYPAL LINK HERE]'; // Full Version
                } else if (total > 0) {
                    url = '[INSERT YOUR PAYPAL LINK HERE]'; // Basic Version
                }

                if (url) {
                    window.open(url, '_blank');
                }

                // Reset Button State after redirect
                setTimeout(() => {
                    btnText.innerHTML = originalContent;
                    icon.setAttribute('icon', originalIcon);
                }, 1000);
            }, 1500);
        }

        function updateBadge() {
            badge.innerText = cart.length;
            badge.classList.remove('opacity-0', 'scale-50');
        }

        function renderCart() {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `<div class="text-center mt-20 text-gray-600 text-xs mono">SYSTEM IDLE. NO MODULES SELECTED.</div>`;
                cartTotal.innerText = '$0.00';
                return;
            }

            let html = '';
            let total = 0;
            
            cart.forEach((item, index) => {
                total += item.price;
                html += `
                <div class="flex items-center justify-between p-3 rounded bg-white/[0.05] border border-white/5 animate-[reveal_0.3s_ease]">
                    <div>
                        <div class="text-white text-sm font-medium">${item.name}</div>
                        <div class="text-cyan-400 text-xs font-mono">$${item.price.toFixed(2)}</div>
                    </div>
                    <button onclick="removeItem(${index})" class="text-gray-500 hover:text-red-400 transition-colors">
                        <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
                    </button>
                </div>`;
            });

            cartItemsContainer.innerHTML = html;
            cartTotal.innerText = '$' + total.toFixed(2);
        }

        function removeItem(index) {
            cart.splice(index, 1);
            updateBadge();
            renderCart();
            if(cart.length === 0) {
                badge.classList.add('opacity-0', 'scale-50');
            }
        }

        // Toast Notification
        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
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
      

<div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center" id="intro-overlay">
<div className="relative flex items-center justify-center">

<div className="rounded-full animate-[expand-circle_2s_ease-out_forwards]" id="intro-circle"></div>
</div>

<div className="mt-8 font-mono text-cyan-500 text-xs tracking-widest uppercase overflow-hidden whitespace-nowrap border-r-2 border-cyan-500/0 animate-[typing_1.5s_steps(20,end)_0.5s_both]">
            Scanning System Parameters...
        </div>
</div>

<div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[80] translate-y-20 opacity-0 transition-all duration-500 px-6 py-3 bg-cyan-950/90 border border-cyan-500/30 text-cyan-200 text-xs font-mono rounded shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center gap-3 backdrop-blur-md pointer-events-none" id="toast">
<iconify-icon className="text-cyan-400 text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span>ADDED TO NEURAL LINK</span>
</div>

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-300" id="cart-panel-overlay" onclick="toggleCart()"></div>
<div className="fixed top-0 right-0 h-full w-full max-w-sm bg-black border-l border-white/10 z-[70] translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col" id="cart-panel">
<div className="p-6 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="font-bold text-white tracking-tight text-sm">SECURE COMMAND CENTER</h3>
</div>
<button className="text-gray-500 hover:text-white transition-colors" onclick="toggleCart()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4" id="cart-items">

<div className="text-center mt-20 text-gray-600 text-xs mono">
                SYSTEM IDLE. NO MODULES SELECTED.
            </div>
</div>
<div className="p-6 border-t border-white/10 bg-white/[0.02]">
<div className="flex justify-between items-center mb-6 text-sm">
<span className="text-gray-400">Total Allocation:</span>
<span className="font-mono text-cyan-400 text-lg font-bold" id="cart-total">$0.00</span>
</div>

<button className="group w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm tracking-wider uppercase rounded transition-all shadow-[0_0_15px_rgba(34,211,238,0.5)] flex items-center justify-center gap-2" onclick="processCheckout(this)">
<iconify-icon className="text-lg transition-transform group-hover:scale-110" icon="solar:shield-check-bold"></iconify-icon>
<span className="btn-text">Complete Purchase</span>
</button>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:cpu-linear"></iconify-icon>
<span className="font-bold tracking-tight text-white text-sm hud-text">SYSTEM.OS</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide">
<a className="hover:text-cyan-400 transition-colors" href="#features">MODULES</a>
<a className="hover:text-cyan-400 transition-colors" href="#pricing">ACCESS</a>
</div>

<button className="relative group p-2 hover:bg-white/5 rounded-full transition-colors" onclick="toggleCart()">
<iconify-icon className="text-white text-xl group-hover:text-cyan-400 transition-colors" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute top-0 right-0 h-4 w-4 bg-red-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full opacity-0 scale-50 transition-all duration-300" id="cart-badge">0</span>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[60vh]">
<div className="reveal mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/10 text-cyan-400 text-[10px] uppercase tracking-widest font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                System Online
            </div>
<h1 className="reveal text-7xl md:text-9xl font-bold text-white tracking-tighter mb-4 jarvis-glow select-none">
                J.A.R.V.I.S.
            </h1>
<p className="reveal max-w-xl mx-auto text-lg md:text-xl text-gray-400 mb-10 tracking-tight leading-relaxed">
                The Future of PC Control is Here. <br/>
<span className="text-gray-500 text-sm">Advanced neural interface for seamless desktop automation.</span>
</p>
<div className="reveal flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<button className="btn-shine glitch-hover group relative w-full sm:w-auto px-8 py-3 bg-cyan-500 text-black font-semibold text-sm rounded transition-all duration-300 flex items-center justify-center gap-2" onclick="addWithLoading('Ultimate Protocol', 20, this)">
<iconify-icon className="text-lg" icon="solar:shield-star-linear"></iconify-icon>
<span className="btn-text">Get Full Access - $20</span>
</button>
<button className="glitch-hover group relative w-full sm:w-auto px-8 py-3 bg-transparent border border-white/20 text-white font-medium text-sm rounded transition-all duration-300 flex items-center justify-center gap-2" onclick="addWithLoading('Basic Protocol', 5, this)">
<span className="btn-text">Try Basic - $5</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="absolute top-1/2 left-4 md:left-20 w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden md:block"></div>
<div className="absolute top-1/2 right-4 md:right-20 w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden md:block"></div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="features">
<div className="reveal mb-12 flex items-end justify-between border-b border-white/10 pb-4">
<h2 className="text-2xl font-semibold text-white tracking-tight">Core Modules</h2>
<span className="mono text-xs text-gray-500">INITIALIZING SUB-SYSTEMS...</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="reveal md:col-span-2 group relative p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-8xl text-cyan-500 -rotate-12 translate-x-4 -translate-y-4" icon="solar:folder-with-files-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-cyan-950/30 flex items-center justify-center border border-cyan-500/20 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-cyan-400 text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">PC Command Center</h3>
<p className="text-sm text-gray-400 max-w-sm">Total authority over your operating system. Execute complex file operations, launch application sequences, and manage system resources with natural language commands.</p>
<div className="mt-6 flex gap-2">
<div className="h-1 w-12 bg-cyan-500/20 rounded-full overflow-hidden">
<div className="h-full w-full bg-cyan-400 animate-[loading_2s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>

<div className="reveal group relative p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors duration-500">
<div className="w-10 h-10 rounded bg-purple-950/20 flex items-center justify-center border border-purple-500/20 mb-4">
<iconify-icon className="text-purple-400 text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">3D Hub</h3>
<p className="text-xs text-gray-400 leading-relaxed">Direct interface for 3D modeling software and printer management. Visualize G-code in real-time.</p>
</div>

<div className="reveal group relative p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors duration-500">
<div className="w-10 h-10 rounded bg-red-950/20 flex items-center justify-center border border-red-500/20 mb-4">
<iconify-icon className="text-red-400 text-xl" icon="solar:eye-scan-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Vision &amp; Security</h3>
<p className="text-xs text-gray-400 leading-relaxed">Biometric face recognition and intruder alerts. Personalized AI greeting protocols upon detection.</p>
</div>

<div className="reveal md:col-span-2 group relative p-8 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-green-950/20 flex items-center justify-center border border-green-500/20 mb-4">
<iconify-icon className="text-green-400 text-xl" icon="solar:voice-scan-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Voice Core</h3>
<p className="text-sm text-gray-400 max-w-sm">Ultra-low latency conversational engine. Instant music playback, weather reports, and contextual dialogue.</p>
</div>

<div className="flex items-end gap-1 h-12">
<div className="w-1 bg-green-500/50 rounded-full animate-[wave_1s_ease-in-out_infinite]"></div>
<div className="w-1 bg-green-500/50 rounded-full animate-[wave_1.2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-1 bg-green-500/50 rounded-full animate-[wave_0.8s_ease-in-out_infinite_0.2s]"></div>
<div className="w-1 bg-green-500/50 rounded-full animate-[wave_1.4s_ease-in-out_infinite_0.3s]"></div>
<div className="w-1 bg-green-500/50 rounded-full animate-[wave_1s_ease-in-out_infinite_0.4s]"></div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24" id="pricing">
<div className="reveal text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Select Clearance Level</h2>
<p className="text-gray-400">Choose the protocol that fits your hardware requirements.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="reveal relative p-8 rounded-2xl bg-black border border-white/10 hover:border-white/20 transition-all">
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2">Basic Protocol</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$5</span>
<span className="text-sm text-gray-500">/ license</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-green-500 text-lg" icon="lucide:unlock"></iconify-icon>
                            Core AI Chat Functionality
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-green-500 text-lg" icon="lucide:unlock"></iconify-icon>
                            Basic App Launching
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<iconify-icon className="text-green-500 text-lg" icon="lucide:unlock"></iconify-icon>
                            Standard Voice Input
                        </li>

<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-700 text-lg" icon="lucide:lock"></iconify-icon>
                            Full File Control
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-gray-700 text-lg" icon="lucide:lock"></iconify-icon>
                            Vision Security
                        </li>
</ul>
<button className="glitch-hover w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2" onclick="addWithLoading('Basic Protocol', 5, this)">
<span className="btn-text">Initiate Basic</span>
</button>
</div>

<div className="reveal relative p-8 rounded-2xl bg-black border border-cyan-500/50 shadow-[0_0_50px_-15px_rgba(6,182,212,0.15)] relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
<div className="absolute top-5 right-5">
<span className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] text-cyan-400 uppercase tracking-wider font-bold">Recommended</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white mb-2 text-cyan-50">Ultimate Protocol</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$20</span>
<span className="text-sm text-gray-400">/ lifetime</span>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-200">
<iconify-icon className="text-cyan-400 text-lg" icon="lucide:unlock"></iconify-icon>
<span className="font-medium">Full PC Folder &amp; File Control</span>
</li>
<li className="flex items-center gap-3 text-sm text-gray-200">
<iconify-icon className="text-cyan-400 text-lg" icon="lucide:unlock"></iconify-icon>
<span className="font-medium">3D Hub Modeling Interface</span>
</li>
<li className="flex items-center gap-3 text-sm text-gray-200">
<iconify-icon className="text-cyan-400 text-lg" icon="lucide:unlock"></iconify-icon>
<span className="font-medium">Vision Security &amp; Face ID</span>
</li>
<li className="flex items-center gap-3 text-sm text-gray-200">
<iconify-icon className="text-cyan-400 text-lg" icon="lucide:unlock"></iconify-icon>
<span className="font-medium">Lifetime Updates &amp; Priority Support</span>
</li>
</ul>
<button className="btn-shine glitch-hover w-full py-3 rounded-lg bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2" onclick="addWithLoading('Ultimate Protocol', 20, this)">
<span className="btn-text">Get Full Access</span>
</button>
</div>
</div>
</section>
<footer className="border-t border-white/10 mt-20 bg-black">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-bold tracking-tight text-white text-lg">JARVIS</span>
<span className="text-xs text-gray-600 border-l border-gray-800 pl-2 ml-2">STARK INDUSTRIES © 2024</span>
</div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-cyan-400 transition-colors" href="#">PRIVACY</a>
<a className="hover:text-cyan-400 transition-colors" href="#">TERMS</a>
<a className="hover:text-cyan-400 transition-colors" href="#">CONTACT</a>
</div>
</div>
</footer>
</main>
<style>
        @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        @keyframes wave {
            0%, 100% { height: 20%; }
            50% { height: 100%; }
        }
    </style>


    </>
  );
}
