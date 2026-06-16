import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Navbar Transition
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass-nav', 'py-4');
                navbar.classList.remove('py-6', 'border-transparent');
            } else {
                navbar.classList.remove('glass-nav', 'py-4');
                navbar.classList.add('py-6', 'border-transparent');
            }
        });

        // Intersection Observer for Reveal Elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Chart Animation Trigger
                    if(entry.target.id === 'chart-container') {
                        document.getElementById('growthLine').classList.add('draw');
                        document.getElementById('growthArea').classList.remove('opacity-0');
                        document.getElementById('endMarker').classList.remove('opacity-0');
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-500 py-6 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="font-bebas text-2xl tracking-widest text-white hover:text-red-600 transition-colors duration-300" href="https://www.onlineinvesting.ch/">
                ONLINEINVESTING<span className="text-red-600">.CH</span>
</a>
<a className="group relative px-6 py-2 overflow-hidden rounded-full bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-300" href="#inquire">
<div className="absolute inset-0 w-0 bg-red-600 transition-all duration-[250ms] ease-out group-hover:w-full opacity-10"></div>
<span className="relative text-sm uppercase tracking-widest text-white group-hover:text-red-500 font-medium">Inquire</span>
</a>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 opacity-60">
<iframe className="w-full h-full scale-105" frameborder="0" height="100%" src="https://my.spline.design/coincrypto-W4I121jIYDWmIhHPEaQLDKCD/" width="100%"></iframe>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black z-10"></div>

<div className="relative z-20 text-center max-w-5xl px-4 mt-20 reveal-element">
<p className="text-red-600 tracking-[0.3em] uppercase text-sm mb-4 font-semibold">Premium Swiss Digital Asset</p>
<h1 className="font-bebas text-7xl md:text-9xl text-white leading-[0.85] tracking-tight mb-6">
                INVEST IN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">AUTHORITY</span>
</h1>
<p className="font-khand font-light text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Secure the definitive digital benchmark for Swiss finance. <br className="hidden md:block"/>Dominance is not claimed, it is acquired.
            </p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
<i className="w-6 h-6 text-zinc-500" data-lucide="arrow-down"></i>
</div>
</header>

<section className="py-24 md:py-32 relative bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="reveal-element">
<h2 className="font-bebas text-5xl md:text-6xl text-white mb-8 tracking-tight">The Market <br/> Benchmark</h2>
<div className="space-y-6 text-lg md:text-xl font-light text-zinc-400 leading-relaxed">
<p>
                            In the digital economy, trust is the currency of highest value. <a className="text-white hover:text-red-500 transition-colors" href="https://www.onlineinvesting.ch/">onlineinvesting.ch</a> is not merely a domain; it is an institution before a single line of code is written.
                        </p>
<p>
                            It represents the convergence of Swiss financial heritage and modern digital accessibility. Owning this asset instantly positions your venture as the category leader.
                        </p>
</div>
</div>

<div className="reveal-element delay-200">
<div className="glass-panel p-10 md:p-12 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 text-red-600">
<i className="w-24 h-24 rotate-180" data-lucide="quote"></i>
</div>
<blockquote className="relative z-10 text-2xl md:text-3xl text-zinc-200 font-light leading-snug mb-8">
                            "A domain of this caliber replaces years of marketing spend. It builds immediate equity with the user the moment they see the URL."
                        </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-red-600">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-white font-medium uppercase tracking-wider text-sm">Elena Voss</p>
<p className="text-zinc-500 text-sm">Director of Digital Assets, Zürich</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal-element">
<span className="text-red-600 tracking-[0.2em] uppercase text-sm font-semibold">Value Proposition</span>
<h2 className="font-bebas text-5xl md:text-6xl text-white mt-2 tracking-tight">The Six Pillars of Value</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-red-600/30 transition-all duration-300 group reveal-element">
<div className="w-12 h-12 mb-6 text-zinc-400 group-hover:text-red-500 transition-colors">
<i className="w-full h-full" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Brand Recall</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Impossible to forget. The exact search term matches the brand name, ensuring top-of-mind awareness.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-red-600/30 transition-all duration-300 group reveal-element delay-100">
<div className="w-12 h-12 mb-6 text-zinc-400 group-hover:text-red-500 transition-colors">
<i className="w-full h-full" data-lucide="bar-chart-big" strokeWidth="1.5"></i>
</div>
<h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">SEO Dominance</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Pre-optimized for the highest value keywords. Organic traffic potential is built into the syntax.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-red-600/30 transition-all duration-300 group reveal-element delay-200">
<div className="w-12 h-12 mb-6 text-zinc-400 group-hover:text-red-500 transition-colors">
<i className="w-full h-full" data-lucide="check-verified" strokeWidth="1.5"></i>
</div>
<h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Trust .CH</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Leveraging the inherent stability and prestige of the Swiss ccTLD. The gold standard of domains.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-red-600/30 transition-all duration-300 group reveal-element">
<div className="w-12 h-12 mb-6 text-zinc-400 group-hover:text-red-500 transition-colors">
<i className="w-full h-full" data-lucide="door-open" strokeWidth="1.5"></i>
</div>
<h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Market Entry</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Bypass the "trust building" phase. Enter the market with the credibility of an established giant.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-red-600/30 transition-all duration-300 group reveal-element delay-100">
<div className="w-12 h-12 mb-6 text-zinc-400 group-hover:text-red-500 transition-colors">
<i className="w-full h-full" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
</div>
<h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Superior CTR</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Exact match domains statistically generate higher click-through rates in paid and organic search.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-red-600/30 transition-all duration-300 group reveal-element delay-200">
<div className="w-12 h-12 mb-6 text-zinc-400 group-hover:text-red-500 transition-colors">
<i className="w-full h-full" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<h3 className="font-bebas text-2xl text-white mb-2 tracking-wide">Strategic Asset</h3>
<p className="text-zinc-500 font-light leading-relaxed">
                        Digital real estate that appreciates. A defensive moat against competitors and an offensive tool for growth.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
<div className="lg:col-span-1 reveal-element">
<h2 className="font-bebas text-5xl text-white mb-4 tracking-tight">Projected <br/> Valuation</h2>
<p className="text-zinc-400 font-light text-lg mb-8">
                        The trajectory of premium .ch domains continues to outperform traditional asset classes.
                    </p>
<div className="flex flex-col gap-2">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-khand font-semibold text-white">370,000</span>
<span className="text-sm text-zinc-500 uppercase">CHF</span>
</div>
<span className="text-sm text-red-500 font-medium tracking-wider uppercase">2035 Target Valuation</span>
</div>
</div>
<div className="lg:col-span-2 relative h-[400px] w-full reveal-element" id="chart-container">

<svg className="w-full h-full overflow-visible" viewbox="0 0 800 400">

<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#dc2626" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#dc2626" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="#333" strokeWidth="1" x1="50" x2="750" y1="350" y2="350"></line>
<line opacity="0.5" stroke="#333" stroke-dasharray="4 4" strokeWidth="1" x1="50" x2="750" y1="275" y2="275"></line>
<line opacity="0.5" stroke="#333" stroke-dasharray="4 4" strokeWidth="1" x1="50" x2="750" y1="200" y2="200"></line>
<line opacity="0.5" stroke="#333" stroke-dasharray="4 4" strokeWidth="1" x1="50" x2="750" y1="125" y2="125"></line>

<text fill="#666" fontFamily="Khand" fontSize="14" x="50" y="380">2025</text>
<text fill="#666" fontFamily="Khand" fontSize="14" x="190" y="380">2027</text>
<text fill="#666" fontFamily="Khand" fontSize="14" x="330" y="380">2029</text>
<text fill="#666" fontFamily="Khand" fontSize="14" x="470" y="380">2031</text>
<text fill="#666" fontFamily="Khand" fontSize="14" x="610" y="380">2033</text>
<text fill="#666" fontFamily="Khand" fontSize="14" x="750" y="380">2035</text>

<path className="chart-path" d="M 50 350 C 250 350, 450 300, 750 50" fill="none" id="growthLine" stroke="#dc2626" strokeWidth="3"></path>

<path className="opacity-0 transition-opacity duration-[2000ms] delay-1000" d="M 50 350 C 250 350, 450 300, 750 50 L 750 350 L 50 350 Z" fill="url(#chartGradient)" id="growthArea"></path>

<circle className="opacity-0 transition-opacity delay-[2000ms]" cx="750" cy="50" fill="#000" id="endMarker" r="6" stroke="#dc2626" strokeWidth="2"></circle>

<circle cx="50" cy="350" fill="#666" r="4"></circle>
</svg>
</div>
</div>
</div>
</section>

<section className="py-32 relative flex items-center justify-center" id="inquire">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9zdmc+')] opacity-20"></div>
<div className="max-w-4xl w-full mx-auto px-6 relative z-10">
<div className="glass-panel p-12 md:p-16 rounded-3xl text-center border-t border-white/10 shadow-2xl shadow-red-900/10 reveal-element">
<p className="font-khand text-zinc-500 uppercase tracking-widest mb-4">Strategic Acquisition</p>
<div className="mb-10">
<h2 className="font-bebas text-7xl md:text-8xl text-white tracking-tight">22'000 CHF</h2>
<p className="text-red-500 font-light tracking-wide mt-2">Fixed Price Transfer</p>
</div>
<div className="flex flex-col items-center gap-6">
<a className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-zinc-200 transition-all duration-300" href="mailto:info@cleardesign.ch">
<span>Secure Asset Now</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<p className="text-zinc-600 font-khand font-light text-sm">
                        Inquiries handled by Clear Design. <br/>
<a className="text-zinc-400 hover:text-white transition-colors" href="mailto:info@cleardesign.ch">info@cleardesign.ch</a>
</p>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/5 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div>
<a className="font-bebas text-2xl text-white mb-4 tracking-widest block hover:text-red-500 transition-colors" href="https://www.onlineinvesting.ch/">ONLINEINVESTING<span className="text-red-600">.CH</span></a>
<p className="font-khand font-light text-zinc-500 text-sm max-w-xs">
                        The premier digital destination for Swiss financial authority. A distinct asset for the visionary leader.
                    </p>
</div>

<div className="flex flex-col gap-3 font-khand font-light text-zinc-400">
<span className="text-white font-medium mb-2">Navigation</span>
<a className="hover:text-red-500 transition-colors" href="https://www.onlineinvesting.ch/">Home</a>
<a className="hover:text-red-500 transition-colors" href="#inquire">Valuation</a>
<a className="hover:text-red-500 transition-colors" href="#inquire">Contact</a>
</div>

<div className="flex flex-col gap-3 font-khand font-light text-zinc-400">
<span className="text-white font-medium mb-2">Legal</span>
<a className="hover:text-red-500 transition-colors" href="#">Terms of Sale</a>
<a className="hover:text-red-500 transition-colors" href="#">Privacy Policy</a>
<div className="flex flex-col gap-1 mt-4">
<span className="text-zinc-600 text-xs">© 2025 OnlineInvesting.ch. All rights reserved.</span>
<a className="text-zinc-600 text-xs hover:text-white transition-colors" href="https://www.cleardesign.ch/" rel="noopener noreferrer" target="_blank">
                            Landing page development by Clear Design Experts
                        </a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
