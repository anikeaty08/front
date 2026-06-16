import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const hud = document.getElementById('hero-hud');
            const hudStatus = document.getElementById('hud-status');
            const hudX = document.getElementById('hud-x');
            const hudY = document.getElementById('hud-y');

            if (hud) {
                hud.addEventListener('mousemove', (e) => {
                    const rect = hud.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    // Update cursor tracking
                    hud.style.setProperty('--mouse-x', `${x}px`);
                    hud.style.setProperty('--mouse-y', `${y}px`);

                    // Update parallax logic (-1 to 1 bounds)
                    const px = (x / rect.width) * 2 - 1;
                    const py = (y / rect.height) * 2 - 1;
                    hud.style.setProperty('--px', px);
                    hud.style.setProperty('--py', py);

                    // Update readouts
                    if (hudStatus) hudStatus.textContent = 'TRACKING_ACTIVE';
                    if (hudX) hudX.textContent = x.toFixed(1).padStart(5, '0');
                    if (hudY) hudY.textContent = y.toFixed(1).padStart(5, '0');
                });

                hud.addEventListener('mouseleave', () => {
                    // Reset to neutral state
                    if (hudStatus) hudStatus.textContent = 'AWAITING_INPUT';
                    hud.style.setProperty('--px', 0);
                    hud.style.setProperty('--py', 0);
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-base font-medium tracking-tight uppercase flex items-center gap-2" href="index.html">
                Velnor
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="products.html">Products</a>
<a className="hover:text-zinc-100 transition-colors" href="ideas.html">Ideas</a>
<a className="hover:text-zinc-100 transition-colors" href="about.html">About</a>
<a className="hover:text-zinc-100 transition-colors" href="support.html">Support</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-zinc-800/50 border border-white/10 rounded-md hover:bg-zinc-800 transition-all" href="contact.html">
                Contact Studio
            </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>
<main>

<section className="relative min-h-screen pt-24 pb-12 px-6 flex items-center max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-center">

<div className="lg:col-span-5 flex flex-col items-start z-10">
<div className="flex items-center gap-3 mb-8">
<div className="h-[1px] w-8 bg-blue-500/40"></div>
<span className="text-xs font-mono text-zinc-500 tracking-wider uppercase">Independent Studio</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                        Engineering clarity.<br/>
                        Designing focus.
                    </h1>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-md mb-10 font-light">
                        Velnor builds thoughtful software products that help people work, create, and think better.
                    </p>
<div className="flex items-center gap-4">
<a className="group relative px-5 py-3 text-xs font-medium text-white bg-zinc-900 border border-white/10 rounded-md overflow-hidden transition-all hover:border-white/20" href="products.html">
<div className="absolute inset-0 w-0 bg-white/5 transition-all duration-300 ease-out group-hover:w-full"></div>
<span className="relative flex items-center gap-2">
                                View our products
                                <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</a>
</div>
</div>

<div className="lg:col-span-7 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0a0a0c] border border-white/5 rounded-2xl overflow-hidden cursor-crosshair group" id="hero-hud">

<div className="absolute inset-0 tech-grid opacity-30"></div>

<div className="absolute top-0 bottom-0 w-[1px] bg-white/10 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transform: 'translateX(var(--mouse-x, 0px))'}}></div>
<div className="absolute left-0 right-0 h-[1px] bg-white/10 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transform: 'translateY(var(--mouse-y, 0px))'}}></div>

<div className="absolute w-6 h-6 -ml-3 -mt-3 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))'}}>
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
<div className="absolute inset-0 border border-blue-500/30 rounded-full animate-ping opacity-50"></div>
</div>

<div className="absolute top-6 left-6 flex flex-col gap-1 z-30 pointer-events-none">
<span className="text-xs font-mono text-zinc-500 tracking-wider">SYS.VELNOR.CORE</span>
<span className="text-xs font-mono text-blue-400/80 tracking-wider" id="hud-status">AWAITING_INPUT</span>
<div className="mt-2 flex flex-col gap-0.5">
<span className="text-xs font-mono text-zinc-600">X_AXIS: <span id="hud-x">000.0</span></span>
<span className="text-xs font-mono text-zinc-600">Y_AXIS: <span id="hud-y">000.0</span></span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 w-[280px] h-[280px] pointer-events-none z-10 transition-transform duration-300 ease-out" style={{transform: 'translate(calc(-50% + var(--px, 0) * 20px), calc(-50% + var(--py, 0) * 20px))'}}>

<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/5"></div>
<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-white/5"></div>

<div className="absolute inset-0 border border-white/5 rounded-full"></div>
<div className="absolute inset-8 border border-white/5 rounded-full"></div>
<div className="absolute inset-16 border-t border-b border-blue-500/20 rounded-full animate-slow-spin"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-zinc-800 border border-white/20 rounded-full"></div>

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transition-all duration-75 ease-out" style={{transform: 'translateY(calc(var(--py, 0) * 100px))'}}></div>
</div>

<div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 pointer-events-none"></div>
<div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20 pointer-events-none"></div>
<div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20 pointer-events-none"></div>
<div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 pointer-events-none"></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0c]">
<div className="max-w-3xl mx-auto text-center">
<iconify-icon className="text-zinc-500 mb-6" height="24" icon="solar:tuning-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">
                    Deliberate software creation.
                </h2>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-8">
                    Velnor is an independent studio. We don't chase noise. We value clarity, quality, and long-term usefulness. By maintaining a small, focused footprint, we are able to design and ship software that feels crafted, not just produced.
                </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white bg-zinc-800/50 border border-white/10 rounded-md px-4 py-2 hover:bg-zinc-800 transition-all" href="about.html">
                    Read our full story
                </a>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="text-xs font-mono text-blue-500/80 tracking-wider uppercase block mb-2">Featured Product</span>
<h2 className="text-3xl font-medium tracking-tight text-white">Flowline</h2>
</div>
<a className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors" href="products.html">
                        Explore all products 
                        <iconify-icon height="14" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="relative w-full rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900/80 to-[#09090b] overflow-hidden flex flex-col lg:flex-row">
<div className="p-8 md:p-12 lg:w-2/5 flex flex-col justify-center z-10 border-b lg:border-b-0 lg:border-r border-white/5">
<div className="w-12 h-12 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-white" height="24" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Structure your day.</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8">
                            An AI-powered day planner app for iOS and macOS. Flowline helps you structure tasks, stay focused, and work with absolute clarity. Designed for professionals who need more signal and less noise.
                        </p>
<a className="text-xs font-medium text-white hover:text-blue-400 transition-colors flex items-center gap-2" href="products.html">
                            Discover Flowline
                            <iconify-icon height="14" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>

<div className="relative lg:w-3/5 min-h-[300px] bg-zinc-950/50 p-8 flex items-center justify-center overflow-hidden">
<div className="relative w-full max-w-md">
<div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10"></div>
<div className="space-y-4">
<div className="relative pl-12">
<div className="absolute left-[21px] top-3 w-2 h-2 rounded-full bg-blue-500/80 border-[3px] border-zinc-950"></div>
<div className="bg-zinc-900 border border-white/5 rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
<div className="w-1/3 h-2 bg-white/20 rounded mb-3"></div>
<div className="w-3/4 h-2 bg-white/10 rounded"></div>
</div>
</div>
<div className="relative pl-12 opacity-60">
<div className="absolute left-[22px] top-3 w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="bg-zinc-900/50 border border-white/5 rounded-lg p-4">
<div className="w-1/4 h-2 bg-white/20 rounded mb-3"></div>
<div className="w-1/2 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0c]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="max-w-2xl">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Future Explorations.</h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                            Beyond our active products, the studio continuously researches and validates new concepts. 
                        </p>
</div>
<a className="text-xs font-medium text-zinc-400 hover:text-white flex items-center gap-1 transition-colors" href="ideas.html">
                        View research lab
                        <iconify-icon height="14" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Research 01</span>
<iconify-icon className="text-zinc-600" height="18" icon="solar:cpu-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">AI Validation Tools</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
                            Systems designed to help builders quickly stress-test software ideas using aggregated market intelligence.
                        </p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Research 02</span>
<iconify-icon className="text-zinc-600" height="18" icon="solar:code-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">Developer Research</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
                            Utilities that streamline documentation discovery and architectural planning for software engineers.
                        </p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Research 03</span>
<iconify-icon className="text-zinc-600" height="18" icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h4 className="text-base font-medium text-white mb-2 tracking-tight">Focus Mechanisms</h4>
<p className="text-xs text-zinc-500 font-light leading-relaxed">
                            Expanding on the logic of Flowline to create frameworks that improve decision-making.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Connect with Velnor.</h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 max-w-md">
                            Need technical support, have a billing inquiry, or want to discuss a partnership? We are here to help. For comprehensive guides, please visit our <a className="text-white underline decoration-white/20 underline-offset-2 hover:decoration-white transition-all" href="support.html">Support Center</a>.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-lg border border-white/10 bg-zinc-900 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-400" height="16" icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-medium text-white mb-1">Direct Email</h5>
<p className="text-xs text-zinc-500 font-light mb-2">All contact methods resolve to this address.</p>
<a className="text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors" href="mailto:dkov.dev@gmail.com">dkov.dev@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 md:p-8">
<form action="mailto:dkov.dev@gmail.com" className="space-y-5" enctype="text/plain" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-md py-2.5 px-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" name="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-md py-2.5 px-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600" name="email" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Inquiry Type</label>
<select className="w-full bg-zinc-900 border border-white/10 rounded-md py-2.5 px-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all" name="type">
<option disabled="" selected="" value="">Select routing</option>
<option value="support">Technical Support</option>
<option value="business">Business / Partnership</option>
<option value="general">General</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-md py-2.5 px-3 text-sm text-zinc-200 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-zinc-600 resize-none" name="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<p className="text-xs text-zinc-500 max-w-xs leading-tight">
                                    By submitting, you agree to our 
                                    <a className="text-zinc-300 hover:text-white underline decoration-white/20 underline-offset-2" href="privacy.html">Privacy Policy</a> and 
                                    <a className="text-zinc-300 hover:text-white underline decoration-white/20 underline-offset-2" href="terms.html">Terms</a>.
                                </p>
<button className="px-6 py-2.5 text-xs font-medium text-zinc-900 bg-zinc-100 rounded-md hover:bg-white transition-colors shrink-0" type="submit">
                                    Send via Client
                                </button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#09090b] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1 flex flex-col">
<a className="text-white text-sm font-medium tracking-tight uppercase mb-4 inline-block" href="index.html">
                        Velnor
                    </a>
<p className="text-xs text-zinc-500 font-light leading-relaxed max-w-[200px]">
                        An independent product studio building thoughtful software.
                    </p>
</div>
<div>
<h6 className="text-xs font-medium text-white mb-4 tracking-tight">Studio</h6>
<ul className="flex flex-col gap-3 text-xs text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors" href="about.html">About</a></li>
<li><a className="hover:text-white transition-colors" href="products.html">Products</a></li>
<li><a className="hover:text-white transition-colors" href="ideas.html">Ideas</a></li>
</ul>
</div>
<div>
<h6 className="text-xs font-medium text-white mb-4 tracking-tight">Support</h6>
<ul className="flex flex-col gap-3 text-xs text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors" href="support.html">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="contact.html">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="mailto:dkov.dev@gmail.com">dkov.dev@gmail.com</a></li>
</ul>
</div>
<div>
<h6 className="text-xs font-medium text-white mb-4 tracking-tight">Legal &amp; Trust</h6>
<ul className="flex flex-col gap-3 text-xs text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors flex items-center gap-1" href="privacy.html">Privacy Policy <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-1" href="terms.html">Terms of Service <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon></a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-zinc-600 font-mono">
<span>© 2026 Velnor. All rights reserved.</span>
<span className="mt-2 md:mt-0 flex items-center gap-1">
                    SYS.OP.NORMAL <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 inline-block ml-1"></span>
</span>
</div>
</div>
</footer>



    </>
  );
}
