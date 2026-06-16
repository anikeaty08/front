import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const magnifier = document.getElementById('magnifier');
            const magnifierContent = document.getElementById('magnifier-content');
            const mainContent = document.getElementById('main-content');
            const cursorDot = document.getElementById('cursor-dot');
            const card = document.getElementById('spotlight-card');
            
            // Configuration
            const zoomLevel = 2;
            const lensSize = 150; // must match CSS width/height
            
            // Clone content into magnifier
            // We use cloneNode(true) to get all children including styles
            // Note: In a production react app this approach might lose event listeners on the clone, 
            // but for visual magnification it is perfect.
            const clonedContent = mainContent.cloneNode(true);
            
            // Strip IDs from cloned content to prevent duplicates/JS errors
            const elementsWithIds = clonedContent.querySelectorAll('[id]');
            elementsWithIds.forEach(el => el.removeAttribute('id'));
            
            // Remove scripts from clone
            const scripts = clonedContent.querySelectorAll('script');
            scripts.forEach(s => s.remove());
            
            magnifierContent.appendChild(clonedContent);
            
            // Force the cloned content to be the full width of the document
            magnifierContent.style.width = document.documentElement.scrollWidth + 'px';
            magnifierContent.style.transform = `scale(${zoomLevel})`;

            // State
            let mouseX = 0;
            let mouseY = 0;
            
            // Mouse Movement Tracking
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                // Show elements on first move
                magnifier.style.display = 'block';
                
                // Update Spotlight Card (original functionality)
                if (card) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            });

            // Animation Loop for Smoothness
            function render() {
                // Position Cursor Dot
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';

                // Position Magnifying Lens
                magnifier.style.left = mouseX + 'px';
                magnifier.style.top = mouseY + 'px';
                
                // Calculate Offset for Inner Content
                // The math: We need to shift the content so that the point under the cursor
                // lines up with the center of the lens.
                // 1. Get absolute page coordinates
                const pageX = mouseX + window.scrollX;
                const pageY = mouseY + window.scrollY;
                
                // 2. Calculate position inside the scaled container
                // We want the point (pageX, pageY) to be at center of lens (75, 75)
                // Lens is at clientX, clientY.
                
                const offsetX = -(pageX * zoomLevel) + (lensSize / 2);
                const offsetY = -(pageY * zoomLevel) + (lensSize / 2);
                
                magnifierContent.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${zoomLevel})`;

                requestAnimationFrame(render);
            }
            
            render();
            
            // Handle Resize
            window.addEventListener('resize', () => {
                magnifierContent.innerHTML = '';
                const newClone = mainContent.cloneNode(true);
                // Clean clone again
                newClone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
                newClone.querySelectorAll('script').forEach(s => s.remove());
                magnifierContent.appendChild(newClone);
                magnifierContent.style.width = document.documentElement.scrollWidth + 'px';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="main-content">

<header className="relative bg-[#FDE047] liquid-shape pt-6 pb-24 lg:pt-8 lg:pb-32 lg:min-h-[90vh] flex flex-col overflow-hidden">

<nav className="w-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between z-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[#FDE047]">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-lg font-semibold tracking-tighter uppercase">Flux.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">Products</a>
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">Company</a>
<a className="text-sm font-medium hover:opacity-70 transition-opacity" href="#">Pricing</a>
</div>
<button className="bg-black text-white text-xs font-medium px-6 py-3 rounded-full hover:scale-105 transition-transform active:scale-95 flex items-center gap-2 shadow-lg">
<span>Open Account</span>
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</button>
</nav>

<div className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-12 mt-16 lg:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-center">

<div className="flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 bg-black/5 border border-black/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
<span className="text-[10px] font-semibold tracking-widest uppercase">The New Standard</span>
</div>
<h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-black">
                        Money<br/>
<span className="opacity-40">without</span><br/>
                        friction.
                    </h1>
<p className="text-sm md:text-base font-medium max-w-md leading-relaxed opacity-80">
                        Experience the fluidity of next-gen banking. Zero delays, infinite scale, and a design that moves as fast as you do.
                    </p>
<div className="flex items-center gap-4 pt-4">
<button className="bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
                            Get Started
                            <span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="px-8 py-4 rounded-full text-sm font-semibold border-2 border-black/10 hover:border-black/30 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="18"></span>
                            How it works
                        </button>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end">

<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
<div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>

<div className="glass-panel w-full max-w-md p-8 rounded-[32px] text-black relative transform rotate-[-2deg] hover:rotate-0 transition-all duration-700 ease-out z-20 group">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-xs font-medium opacity-60 uppercase tracking-wider mb-1">Total Liquidity</p>
<h3 className="text-4xl font-bold tracking-tight">$124,500.00</h3>
</div>
<div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center border border-black/10">
<span className="iconify" data-icon="lucide:infinity" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-2xl bg-white/40 border border-white/40">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-black text-[#FDE047] flex items-center justify-center">
<span className="iconify" data-icon="lucide:arrow-down-left" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<p className="text-xs font-bold">Inbound Transfer</p>
<p className="text-[10px] opacity-60">Stripe Inc.</p>
</div>
</div>
<span className="text-sm font-bold text-green-700">+$8,420.50</span>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl bg-white/20 border border-white/20 group-hover:bg-white/30 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center border border-black/5">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<p className="text-xs font-bold">Software Sub</p>
<p className="text-[10px] opacity-60">Figma</p>
</div>
</div>
<span className="text-sm font-bold opacity-80">-$15.00</span>
</div>
</div>
<div className="absolute -top-4 -right-4 bg-[#FDE047] text-black text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full shadow-lg border-2 border-white">
                            Live Data
                        </div>
</div>

<div className="glass-panel absolute -bottom-12 -left-4 w-64 p-5 rounded-[24px] z-30 transform translate-y-8 lg:translate-y-0 lg:translate-x-0 rotate-[4deg] backdrop-blur-md bg-white/40">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] font-bold uppercase opacity-60">Card Limit</span>
<span className="iconify" data-icon="lucide:credit-card" data-width="16"></span>
</div>
<div className="h-2 w-full bg-black/10 rounded-full overflow-hidden mb-2">
<div className="h-full bg-black w-[70%] rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] font-bold">
<span>$14k Used</span>
<span className="opacity-50">$20k</span>
</div>
</div>
</div>
</div>
</header>

<section className="bg-[#0A0A0A] relative z-0 pt-24 pb-24 -mt-20">
<div className="w-full max-w-7xl mx-auto px-6 lg:px-12">

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-center mb-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2 text-white">
<span className="iconify" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-lg font-bold tracking-tight">AcmeCorp</span>
</div>
<div className="flex items-center justify-center gap-2 text-white">
<span className="iconify" data-icon="lucide:triangle" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-lg font-bold tracking-tight">Vortex</span>
</div>
<div className="flex items-center justify-center gap-2 text-white">
<span className="iconify" data-icon="lucide:circle-dashed" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-lg font-bold tracking-tight">Orbit</span>
</div>
<div className="flex items-center justify-center gap-2 text-white">
<span className="iconify" data-icon="lucide:square-stack" data-strokeWidth="1.5" data-width="24"></span>
<span className="text-lg font-bold tracking-tight">Layer</span>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 flex flex-col justify-center space-y-6">
<span className="text-[#FDE047] text-[10px] font-bold uppercase tracking-widest">Core Features</span>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                            Built for the <br/>
<span className="text-white/30">speed of light.</span>
</h2>
<p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                            Traditional banking infrastructure is broken. We rebuilt the stack from the ground up using organic liquid geometry and hyper-fast transaction layers.
                        </p>
</div>

<div className="lg:col-span-8 grid md:grid-cols-2 gap-4">

<div className="spotlight-card border border-white/5 rounded-[32px] p-8 h-[320px] flex flex-col justify-between group" id="spotlight-card">

<div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
<div className="relative z-20">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-[#FDE047] group-hover:text-black transition-colors duration-300">
<span className="iconify" data-icon="lucide:radar" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
<span className="iconify text-zinc-800 group-hover:text-[#FDE047]/20" data-icon="lucide:globe" data-strokeWidth="0.5" data-width="140"></span>
</div>
<div className="relative z-20">
<h3 className="text-white text-xl font-semibold mb-2">Global Vision</h3>
<p className="text-zinc-400 text-xs leading-relaxed max-w-[90%]">
                                    Real-time oversight across all jurisdictions. Move capital instantly between borders without the friction.
                                </p>
</div>
</div>

<div className="bg-[#171717] border border-white/5 rounded-[32px] p-8 hover:bg-[#202020] transition-colors group relative overflow-hidden h-[320px] flex flex-col justify-end">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-[#FDE047]" data-icon="lucide:shield-check" data-strokeWidth="1" data-width="80"></span>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:fingerprint" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-white text-xl font-semibold mb-2">Vault Security</h3>
<p className="text-zinc-500 text-xs leading-relaxed">
                                Biometric authentication and AI-driven fraud detection keep your assets locked down in the deep void.
                            </p>
</div>

<div className="md:col-span-2 glass-dark rounded-[32px] p-8 md:p-10 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-[#FDE047]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
<div className="max-w-md space-y-4">
<div className="inline-flex items-center gap-2 bg-[#FDE047] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                        New Beta
                                    </div>
<h3 className="text-white text-2xl font-semibold">API First Infrastructure</h3>
<p className="text-zinc-400 text-sm">
                                        Connect your business logic directly to our banking core. Webhooks, granular permissions, and instant settlement.
                                    </p>
</div>

<div className="bg-black/40 border border-white/10 rounded-2xl p-4 w-full md:w-auto min-w-[200px] font-mono text-[10px] text-zinc-400">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="space-y-1">
<p><span className="text-purple-400">const</span> <span className="text-blue-400">transfer</span> = <span className="text-purple-400">await</span> flux.<span className="text-yellow-300">send</span>({</p>
<p className="pl-4">amount: <span className="text-green-400">5000</span>,</p>
<p className="pl-4">currency: <span className="text-orange-400">'USD'</span>,</p>
<p className="pl-4">to: <span className="text-orange-400">'acc_8x92...'</span></p>
<p>});</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] pb-12 pt-0">
<div className="w-full max-w-7xl mx-auto px-6 lg:px-12 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-zinc-600 text-xs">© 2026 Flux Financial Technologies. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-[#FDE047] transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-[#FDE047] transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-zinc-500 hover:text-[#FDE047] transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</footer>
</div>

<div id="magnifier">
<div id="magnifier-content"></div>
</div>
<div id="cursor-dot"></div>



    </>
  );
}
