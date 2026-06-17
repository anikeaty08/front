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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Intersection Observer for Scroll Reveals ---
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        if (el.classList.contains('stagger-item')) {
                            const delay = el.getAttribute('data-delay') || '0';
                            setTimeout(() => {
                                el.style.opacity = '1';
                                el.style.transform = 'translateY(0)';
                            }, parseInt(delay));
                        } else {
                            el.style.opacity = '1';
                            el.style.transform = 'translateY(0)';
                        }
                        observer.unobserve(el);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(15px)';
                el.style.transition = 'opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)';
                el.style.willChange = 'opacity, transform';
                revealObserver.observe(el);
            });

            // --- Parallax Effect for Background Grid ---
            const parallaxBg = document.getElementById('parallax-bg');
            let ticking = false;

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const scrolled = window.scrollY;
                        if (parallaxBg) {
                            parallaxBg.style.transform = `translate3d(0, ${scrolled * 0.15}px, 0)`;
                        }
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });

            // --- Form Submission & Notification Logic ---
            const scriptURL = 'https://script.google.com/macros/s/AKfycbyDH6xPJGJ2QwG6FUgx-F-oVfXIK0x5c3yfPWOAKJrCdUpFxgBwpSPp21JcmkrMrV2z/exec';
            
            const form = document.forms['google-sheet-form'];
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            const toast = document.getElementById('toast-notification');

            form.addEventListener('submit', e => {
                e.preventDefault();
                
                // Update button state to loading
                const originalText = btnText.innerText;
                btnText.innerText = 'Transmitting...';
                btnIcon.setAttribute('icon', 'solar:refresh-circle-linear');
                btnIcon.classList.add('animate-spin');

                // Map data explicitly to the required keys
                const nameValue = document.getElementById('name').value;
                const emailValue = document.getElementById('email').value;
                const messageValue = document.getElementById('message').value;

                const payload = {
                    email: emailValue,
                    parameters: `Name: ${nameValue} | Details: ${messageValue}`
                };

                fetch(scriptURL, { 
                    method: 'POST', 
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
                .then(() => {
                    // Reset form and button
                    form.reset();
                    btnText.innerText = originalText;
                    btnIcon.classList.remove('animate-spin');
                    btnIcon.setAttribute('icon', 'solar:routing-2-linear');
                    
                    // Show success notification toast
                    toast.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
                    toast.classList.add('opacity-100', 'translate-y-0');
                    
                    // Hide notification after 4 seconds
                    setTimeout(() => {
                        toast.classList.remove('opacity-100', 'translate-y-0');
                        toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
                    }, 4000);
                })
                .catch(error => {
                    console.error('Error!', error.message);
                    
                    // Update button to show failure
                    btnText.innerText = 'Transmission Failed';
                    btnIcon.classList.remove('animate-spin');
                    btnIcon.setAttribute('icon', 'solar:close-circle-linear');
                    
                    // Ensure the success toast remains hidden
                    toast.classList.remove('opacity-100', 'translate-y-0');
                    toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        btnText.innerText = originalText;
                        btnIcon.setAttribute('icon', 'solar:routing-2-linear');
                    }, 3000);
                });
            });

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
      

<div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-4 py-3 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] opacity-0 -translate-y-4 pointer-events-none transition-all duration-500 ease-out will-change-transform" id="toast-notification">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white tracking-tight">Transmission Successful</h4>
<p className="text-xs text-gray-400 font-medium">Your data has been transferred successfully.</p>
</div>
</div>

<div className="fixed inset-0 z-[-3] bg-[#050505]">
<div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/40 via-[#050505] to-[#1e1b4b]/30" style={{backgroundSize: '200% 200%', animation: 'subtleGradient 20s ease-in-out infinite'}}></div>
</div>

<div className="fixed inset-0 z-[-2] opacity-[0.03] pointer-events-none will-change-transform" id="parallax-bg" style={{backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-black/40 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white select-none hover:text-blue-400 transition-colors duration-300" href="#home">V T X</a>
<div className="flex items-center gap-6">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-300 hidden md:block" href="#home">Home</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-300 hidden md:block" href="#infrastructure">Infrastructure</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors duration-300 hidden md:block" href="#matrix">Matrix</a>
<a className="text-xs font-medium tracking-wide text-white/90 hover:text-white transition-all duration-300 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.05] hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]" href="#contact">
                    Connect
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-24 pb-12 overflow-hidden" id="home">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-blue-600/10 blur-[100px] rounded-full animate-pulse pointer-events-none mix-blend-screen"></div>
<div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide text-gray-400 uppercase">System Active</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                We Plug the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">Mobile Leaks</span><br className="hidden md:block"/> in Luxury Construction.
            </h1>
<p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                Stop bleeding premium clients due to sluggish digital architecture. We engineer highly optimized, GPU-accelerated web experiences that load instantly.
            </p>

<div className="w-full max-w-md bg-black/40 border border-white/5 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors duration-500">

<div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
<div className="relative z-10 space-y-6">

<div>
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-widest">Legacy Sites</span>
<span className="text-xs font-semibold text-red-400/80 tracking-wide flex items-center gap-1">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="14"></iconify-icon> Throttled
                            </span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-red-500/40 rounded-full w-[15%]" style={{animation: 'struggleLoad 4s infinite ease-in-out alternate'}}></div>
</div>
</div>

<div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

<div>
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-white uppercase tracking-widest">Vertex Elite</span>
<span className="text-xs font-semibold text-blue-400 tracking-wide flex items-center gap-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="14"></iconify-icon> Optimized
                            </span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
<div className="absolute top-0 bottom-0 left-0 bg-blue-500 rounded-full" style={{animation: 'lightningLoad 2.5s infinite ease-out'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative" id="infrastructure">
<div className="mb-16 md:mb-24 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Engineered for Dominance.</h2>
<p className="text-sm md:text-base text-gray-400 max-w-xl font-medium leading-relaxed">Our infrastructure bypasses traditional limitations, leveraging modern browser APIs to deliver uncompromising speed.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:bg-[#0f0f0f] transition-all duration-500 reveal-on-scroll stagger-item overflow-hidden" data-delay="0">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 will-change-transform">
<iconify-icon className="text-blue-400" icon="solar:cpu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">GPU Accelerated</h3>
<p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">Offloading render calculations to hardware ensures 60fps scrolling and micro-interactions without main thread blocking.</p>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:bg-[#0f0f0f] transition-all duration-500 reveal-on-scroll stagger-item overflow-hidden" data-delay="100">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500 will-change-transform">
<iconify-icon className="text-purple-400" icon="solar:waterdrops-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Liquid Transitions</h3>
<p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">Eliminating jarring page reloads. Our architecture simulates native app routing for a seamless user journey.</p>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 hover:bg-[#0f0f0f] transition-all duration-500 reveal-on-scroll stagger-item overflow-hidden" data-delay="200">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500 will-change-transform">
<iconify-icon className="text-emerald-400" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Edge Fortified</h3>
<p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">Assets distributed globally across edge networks, guaranteeing near-zero latency regardless of client location.</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-t border-white/[0.02] bg-gradient-to-b from-transparent to-black/50" id="matrix">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Structural Matrices.</h2>
<p className="text-sm md:text-base text-gray-400 max-w-md font-medium">Visualizing data flow across high-value asset deployments.</p>
</div>
<a className="mt-6 md:mt-0 text-xs font-medium tracking-wide text-white flex items-center gap-2 group hover:text-blue-400 transition-colors duration-300" href="#contact">
                    Connect Directory <iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] aspect-[4/3] md:aspect-video relative reveal-on-scroll stagger-item cursor-pointer" data-delay="0">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-[#0a0a0a] group-hover:scale-105 transition-transform duration-[1.5s] ease-out will-change-transform">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)'}}></div>
</div>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 backdrop-blur-sm">Aura Tower</span>
<span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase">Latency: 42ms</span>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">Penthouse Automation Matrix</h4>
</div>
</div>

<div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#0a0a0a] aspect-[4/3] md:aspect-video relative reveal-on-scroll stagger-item cursor-pointer" data-delay="150">
<div className="absolute inset-0 bg-gradient-to-bl from-gray-900 to-[#0a0a0a] group-hover:scale-105 transition-transform duration-[1.5s] ease-out will-change-transform">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at center, #fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex items-center gap-3 mb-3">
<span className="text-[10px] font-semibold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20 backdrop-blur-sm">Oasis Estate</span>
<span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase">Uptime: 99.9%</span>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">Network Topography Visualization</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative border-t border-white/[0.02]" id="contact">
<div className="max-w-xl mx-auto text-center mb-12 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Establish Connection.</h2>
<p className="text-sm md:text-base text-gray-400 font-medium leading-relaxed">Initialize a direct protocol to our engineering team.</p>
</div>
<div className="max-w-md mx-auto reveal-on-scroll bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-2xl"></div>
<form className="relative z-10 flex flex-col gap-5" id="google-sheet-form" name="google-sheet-form">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest" htmlFor="name">Designation / Name</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm font-medium text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="name" name="name" placeholder="Enter your full name" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest" htmlFor="email">Comms Link / Email</label>
<input className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm font-medium text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest" htmlFor="message">Project Parameters</label>
<textarea className="w-full bg-[#050505] border border-white/10 rounded-lg px-4 py-3 text-sm font-medium text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none" id="message" name="message" placeholder="Detail your digital infrastructure requirements..." required="" rows="4"></textarea>
</div>
<button className="mt-2 w-full bg-white text-black px-4 py-3.5 rounded-lg text-xs font-semibold tracking-wide hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2 group" id="submit-btn" type="submit">
<span id="btn-text">Transmit Data</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="solar:routing-2-linear" id="btn-icon" width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden flex flex-col items-center">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen"></div>
<div className="relative z-10 text-center max-w-2xl reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-8">Initiate Infrastructure Upgrade.</h2>
<a className="inline-block bg-white text-black px-8 py-3.5 rounded-full text-xs font-semibold tracking-wide hover:scale-105 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 will-change-transform" href="#contact">
                Deploy Now
            </a>
</div>
<div className="w-full max-w-7xl mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] font-medium text-gray-500 uppercase tracking-widest relative z-10">
<div className="tracking-tighter text-gray-400 mb-4 md:mb-0 text-sm font-semibold select-none">
                V T X <span className="font-normal text-[10px] opacity-40 ml-2 tracking-widest">© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors duration-300" href="#">Status</a>
<a className="hover:text-white transition-colors duration-300" href="#">Protocols</a>
<a className="hover:text-white transition-colors duration-300" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
