import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['Space Grotesk', 'monospace'],
},
colors: {
background: '#030305',
surface: '#0F1115',
surface_highlight: '#1A1D23',
border: 'rgba(255, 255, 255, 0.08)',
primary: '#FFFFFF',
secondary: '#888899',
accent: '#6E56CF', // Linear Purple
accent_glow: 'rgba(110, 86, 207, 0.4)',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
},
animation: {
'shimmer': 'shimmer 8s linear infinite',
'scan': 'scan 3s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
shimmer: {
'0%': { backgroundPosition: '-200% center' },
'100%': { backgroundPosition: '200% center' },
},
scan: {
'0%, 100%': { top: '0%', opacity: 0 },
'10%': { opacity: 1 },
'90%': { opacity: 1 },
'100%': { top: '100%', opacity: 0 },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple Intersection Observer for Fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-noise"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/20 rounded-[100%] blur-[120px] pointer-events-none -z-10 opacity-40"></div>

<nav className="fixed top-0 w-full z-40 border-b border-border bg-background/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-accent to-white rounded-sm"></div>
<span className="font-medium tracking-tight text-sm">REMAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-secondary">
<a className="hover:text-primary transition-colors" href="#features">Features</a>
<a className="hover:text-primary transition-colors" href="#how-it-works">Methodology</a>
<a className="hover:text-primary transition-colors" href="#integration">Integration</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-secondary hover:text-primary transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors" href="#">Get Access</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-30 grid-mask pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="text-[10px] font-medium tracking-wide uppercase text-accent">Now in Public Beta</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-gradient mb-8 max-w-4xl mx-auto leading-[1.1]">
                Stop guessing. <br/>
                Start converting.
            </h1>
<p className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The AI-powered creative predictor for real estate. We analyze thousands of visual signals to predict pCTR and pCVR before you spend a dollar.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Start Analyzing <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-full border border-border bg-surface hover:bg-surface_highlight text-secondary hover:text-white transition-colors text-sm font-medium">
                    View Methodology
                </button>
</div>

<div className="relative max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-surface border border-border rounded-xl overflow-hidden shadow-2xl shadow-accent/10 animate-float">

<div className="h-10 border-b border-border bg-surface_highlight/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="grid grid-cols-12 h-full">

<div className="col-span-2 border-r border-border bg-surface p-4 hidden md:block">
<div className="space-y-4">
<div className="h-2 w-1/2 bg-white/10 rounded"></div>
<div className="h-2 w-3/4 bg-white/10 rounded"></div>
<div className="h-2 w-2/3 bg-white/10 rounded"></div>
</div>
</div>

<div className="col-span-12 md:col-span-10 p-6 md:p-8 relative">

<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden border border-border group">
<img alt="Luxury Home" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="bounding-box top-[20%] left-[10%] w-[30%] h-[40%]">
<div className="absolute -top-6 left-0 bg-accent text-white text-[10px] px-2 py-0.5 rounded">High Ceiling</div>
</div>
<div className="bounding-box top-[30%] right-[15%] w-[25%] h-[30%] delay-100">
<div className="absolute -bottom-6 right-0 bg-accent text-white text-[10px] px-2 py-0.5 rounded">Natural Light</div>
</div>

<div className="absolute left-0 right-0 h-[1px] bg-accent shadow-[0_0_10px_#6E56CF] animate-scan"></div>
</div>
<div className="flex-1 space-y-6">
<div>
<h3 className="text-xs uppercase tracking-widest text-secondary mb-2">Predicted Performance</h3>
<div className="flex items-end gap-2">
<span className="text-4xl font-mono text-white">2.4%</span>
<span className="text-sm text-green-400 mb-1 flex items-center"><i className="w-3 h-3" data-lucide="arrow-up"></i> 0.8% vs avg</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full mt-2 overflow-hidden">
<div className="h-full bg-accent w-[75%]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-white/5 rounded border border-border">
<div className="text-[10px] text-secondary">Luxury Score</div>
<div className="text-lg font-mono">94/100</div>
</div>
<div className="p-3 bg-white/5 rounded border border-border">
<div className="text-[10px] text-secondary">Room Type</div>
<div className="text-lg font-mono">Living</div>
</div>
</div>
<div className="p-3 bg-accent/10 border border-accent/20 rounded text-xs text-accent-100">
<span className="font-semibold text-accent">AI Recommendation:</span> Use as Hero Image in carousel. Add "Panormamic View" to copy.
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-10 border-y border-border bg-surface/50">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">

<span className="text-lg font-semibold tracking-tight">META</span>
<span className="text-lg font-semibold tracking-tight">MIXPANEL</span>
<span className="text-lg font-semibold tracking-tight">AUTOGLUON</span>
<span className="text-lg font-semibold tracking-tight">QWEN</span>
<span className="text-lg font-semibold tracking-tight">PILAR HOMES</span>
</div>
</div>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-3xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Scientific precision for <br/>creative decisions.</h2>
<p className="text-secondary text-lg">Eliminate human bias. Our AutoGluon-based models analyze millions of data points to ensure your budget goes to the creatives that actually perform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 group relative p-8 rounded-2xl bg-surface border border-border overflow-hidden hover-glow">
<div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/20 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center mb-6 text-accent">
<i className="w-5 h-5" data-lucide="eye"></i>
</div>
<h3 className="text-xl font-medium mb-3">Vision Language Models (VLM)</h3>
<p className="text-secondary text-sm leading-relaxed max-w-md">
                                Powered by Qwen 2.5 VL. Our system "sees" lighting, architectural style, and room types, transforming static pixels into actionable granular attributes.
                            </p>
</div>

<div className="w-full h-48 bg-background border border-border rounded-lg relative overflow-hidden">
<div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1 p-1">
<div className="bg-white/5 rounded-sm animate-pulse"></div>
<div className="bg-white/10 rounded-sm"></div>
<div className="bg-white/5 rounded-sm"></div>
<div className="bg-white/5 rounded-sm"></div>
<div className="bg-accent/20 rounded-sm flex items-center justify-center text-[10px] text-accent">Living</div>
<div className="bg-white/5 rounded-sm"></div>
<div className="bg-white/10 rounded-sm"></div>
<div className="bg-white/5 rounded-sm"></div>
</div>
<div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> 
                                Attributes Extracted
                            </div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative p-8 rounded-2xl bg-surface border border-border overflow-hidden hover-glow flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center mb-6 text-accent">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium mb-3">pCTR &amp; pCVR Scoring</h3>
<p className="text-secondary text-sm leading-relaxed">
                            "Pre-flight" validation. Know the conversion probability before launch using historical data from PilarHomes Marketplace.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-border">
<div className="flex justify-between items-end mb-2">
<span className="text-xs text-secondary">Confidence</span>
<span className="text-xl font-mono text-white">98.2%</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full">
<div className="bg-accent h-1.5 rounded-full w-[98%]"></div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative p-8 rounded-2xl bg-surface border border-border overflow-hidden hover-glow">
<div className="mb-6">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center mb-6 text-accent">
<i className="w-5 h-5" data-lucide="link"></i>
</div>
<h3 className="text-xl font-medium mb-3">Sidecar Integration</h3>
<p className="text-secondary text-sm leading-relaxed">
                            Zero-code setup. Connect your Meta Business Account and get insights in seconds, not weeks.
                        </p>
</div>
<div className="flex items-center justify-center gap-4 mt-8 opacity-80">
<div className="w-12 h-12 rounded-full border border-border bg-white/5 flex items-center justify-center"><i className="w-5 h-5" data-lucide="facebook"></i></div>
<div className="w-20 border-t border-dashed border-secondary"></div>
<div className="w-12 h-12 rounded-full border border-accent bg-accent/10 flex items-center justify-center text-accent"><i className="w-5 h-5" data-lucide="zap"></i></div>
</div>
</div>

<div className="md:col-span-2 group relative p-8 rounded-2xl bg-surface border border-border overflow-hidden hover-glow">
<div className="grid md:grid-cols-2 gap-8 items-center h-full">
<div className="order-2 md:order-1">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-border flex items-center justify-center mb-6 text-accent">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-medium mb-3">Network Intelligence</h3>
<p className="text-secondary text-sm leading-relaxed mb-4">
                                Solve the "Cold Start" problem. Even small agencies benefit from the Transfer Learning of millions of marketplace interactions.
                            </p>
<ul className="space-y-2 text-sm text-secondary">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-accent" data-lucide="check"></i> Instant enterprise-grade data
                                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-accent" data-lucide="check"></i> Cross-market insights
                                </li>
</ul>
</div>
<div className="order-1 md:order-2 relative h-48 md:h-full w-full flex items-center justify-center">

<div className="relative w-40 h-40">
<div className="absolute inset-0 rounded-full border border-accent/20 animate-pulse-slow"></div>
<div className="absolute inset-8 rounded-full border border-accent/40 animate-pulse-slow delay-100"></div>
<div className="absolute inset-[40%] rounded-full bg-accent blur-xl opacity-40"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-surface border-y border-border relative" id="how-it-works">
<div className="max-w-5xl mx-auto px-6">

<div className="mb-20 max-w-2xl">
<span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">The Logic Proxy</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-white leading-[1.1]">
                    Optimizing for ROI, <br/>
                    not vanity metrics.
                </h2>
<p className="text-secondary text-lg leading-relaxed mb-8">
                    Most AI tools optimize for clicks. We optimize for revenue. By training on offline conversion data via our Mixpanel bridge, we reveal which "pretty" photos actually generate sales.
                </p>
<a className="inline-flex items-center text-sm font-medium text-white border-b border-white/30 pb-0.5 hover:text-accent hover:border-accent transition-colors" href="#">
                    Read the technical whitepaper <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="space-y-6">

<div className="group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-background/50 hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<h3 className="text-2xl font-medium text-white">1. Ingestion</h3>
<span className="font-mono text-xl text-accent/60 md:order-last">01</span>
</div>
<p className="text-secondary text-base max-w-xl">
                        Upload raw property gallery. Our VLM Engine tags attributes (Lighting: Warm, Style: Mid-century) to create a structured visual dataset.
                    </p>
</div>

<div className="group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-background/50 hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<h3 className="text-2xl font-medium text-white">2. Prediction</h3>
<span className="font-mono text-xl text-accent/60 md:order-last">02</span>
</div>
<p className="text-secondary text-base max-w-xl">
                        AutoGluon models compare visual tags against historical pCVR data from the PilarHomes network to forecast performance.
                    </p>
</div>

<div className="group relative p-8 md:p-10 rounded-2xl border border-white/5 bg-background/50 hover:bg-white/[0.02] transition-colors">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
<h3 className="text-2xl font-medium text-white">3. Recommendation</h3>
<span className="font-mono text-xl text-accent/60 md:order-last">03</span>
</div>
<p className="text-secondary text-base max-w-xl">
                        System outputs the optimal "Hero Image" and generates copy structure based on high-converting patterns specific to your market.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-8 text-white">
                Ready to scale your <br/>ROAS?
            </h2>
<p className="text-xl text-secondary mb-12 font-light">
                Join the top 1% of real estate marketers leveraging predictive AI.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="h-14 px-10 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
                    Request Demo
                </button>
<button className="h-14 px-10 rounded-full bg-transparent border border-border hover:bg-white/5 transition-colors font-medium">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-border bg-background pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div className="col-span-2 md:col-span-1">
<span className="font-medium tracking-tight text-lg mb-6 block text-white">REMAI</span>
<p className="text-secondary text-xs leading-relaxed max-w-xs">
                        The visual intelligence engine for modern real estate marketing. 
                        San Francisco, CA.
                    </p>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-secondary mb-6">Product</h4>
<ul className="space-y-4 text-sm text-secondary/80">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integration</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-secondary mb-6">Company</h4>
<ul className="space-y-4 text-sm text-secondary/80">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-secondary mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-secondary/80">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
<p className="text-[10px] text-secondary/50 uppercase tracking-widest">© 2025 Real Estate Marketing AI.</p>
<div className="flex gap-6">
<i className="w-4 h-4 text-secondary hover:text-white cursor-pointer transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 text-secondary hover:text-white cursor-pointer transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 text-secondary hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
