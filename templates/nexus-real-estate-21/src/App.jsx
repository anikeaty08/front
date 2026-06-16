import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
<nav className="pointer-events-auto bg-white/70 backdrop-blur-xl border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center justify-between w-full max-w-4xl transition-all duration-300">

<div className="flex-shrink-0 flex items-center">
<span className="text-base font-medium tracking-tighter text-zinc-900">NEXUS</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#earnings">Earnings</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#community">Community</a>
</div>

<div className="flex items-center">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white text-xs font-medium rounded-full px-5 py-2 hover:bg-zinc-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#">
                    Join Now
                </a>
</div>
</nav>
</div>

<section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="max-w-4xl mx-auto text-center mb-16 fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200/60 shadow-sm text-xs font-medium text-zinc-600 mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    The new standard for agents
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-900 leading-[1.05] mb-8">
                    Keep More Commission.<br className="hidden sm:block"/> Grow Without Limits.
                </h1>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed font-normal mb-10">
                    A modern real estate brokerage built for agents who want higher earnings, better tools, and long-term scalable growth.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center bg-zinc-900 text-white text-sm font-medium rounded-full px-8 py-3 hover:bg-zinc-800 transition-all shadow-[0_0_20px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_-5px_rgba(0,0,0,0.4)] hover:-translate-y-0.5" href="#">
                        Start Earning More
                    </a>
<a className="inline-flex items-center justify-center bg-white text-zinc-900 border border-zinc-200/80 text-sm font-medium rounded-full px-8 py-3 hover:bg-zinc-50 transition-all shadow-sm" href="#">
                        Book a Demo
                    </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto fade-in delay-200">

<div className="md:col-span-2 relative rounded-3xl overflow-hidden bg-zinc-100 border border-zinc-200/50 shadow-sm h-[300px] sm:h-[400px] group">
<img alt="Successful Real Estate Agent" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-white rounded-3xl p-6 border border-zinc-200/50 shadow-sm flex flex-col justify-center flex-1 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl"></div>
<iconify-icon className="text-blue-500 text-2xl mb-4 relative z-10" icon="solar:wallet-money-linear"></iconify-icon>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1 relative z-10">Your Split</p>
<p className="text-3xl font-medium tracking-tighter text-zinc-900 relative z-10">100%</p>
</div>
<div className="bg-zinc-900 rounded-3xl p-6 shadow-sm flex flex-col justify-center flex-1 text-white relative overflow-hidden">
<div className="absolute -left-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
<iconify-icon className="text-zinc-400 text-2xl mb-4 relative z-10" icon="solar:graph-up-linear"></iconify-icon>
<p className="text-xs font-normal text-zinc-400 uppercase tracking-widest mb-1 relative z-10">Rev Share</p>
<p className="text-xl font-medium tracking-tight text-white relative z-10">Infinite Growth</p>
</div>
</div>
</div>
</div>
</section>

<section className="pb-24 pt-10 mesh-bg border-b border-zinc-200/50">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Agents joining from top brokerages</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 grayscale mix-blend-multiply">
<span className="text-xl font-medium tracking-tighter text-zinc-800">Keller Williams</span>
<span className="text-xl font-medium tracking-tighter text-zinc-800">RE/MAX</span>
<span className="text-xl font-medium tracking-tighter text-zinc-800">eXp Realty</span>
<span className="text-xl font-medium tracking-tighter text-zinc-800">Coldwell Banker</span>
</div>
</div>
</section>

<section className="py-32 bg-[#fafafa] fade-in relative">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-900 mb-4">
                    Everything you need to scale.
                </h2>
<p className="text-base text-zinc-500 font-normal">
                    Re-engineered from the ground up to give you more control, better tools, and higher margins.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 border border-zinc-200/60 shadow-sm relative overflow-hidden group hover:border-zinc-300 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-50 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
<div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-8">
<iconify-icon className="text-2xl" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">Higher Commission Splits</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed max-w-md">
                        Keep more from every deal you close with our modern, optimized fee structure designed specifically for top producers.
                    </p>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Revenue Share</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Build passive income streams beyond your own transactions by growing the network.
                    </p>
</div>

<div className="bg-white rounded-[2rem] p-8 border border-zinc-200/60 shadow-sm hover:border-zinc-300 transition-colors">
<div className="w-12 h-12 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon className="text-2xl" icon="solar:cloud-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Cloud Native</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">
                        Work from anywhere with a fully digital system designed for modern mobility.
                    </p>
</div>

<div className="md:col-span-2 bg-zinc-900 text-white rounded-[2rem] p-8 md:p-12 border border-zinc-800 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-8 backdrop-blur-sm">
<iconify-icon className="text-2xl" icon="solar:widget-add-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Integrated Tooling</h3>
<p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-md">
                            CRM, marketing automation, and transaction management seamlessly integrated into one unified dashboard.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white fade-in border-y border-zinc-200/50" id="earnings">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-900 mb-4">
                    The math is simple.
                </h2>
<p className="text-base text-zinc-500 font-normal">
                    See exactly why top agents are leaving legacy models behind.
                </p>
</div>
<div className="relative flex flex-col md:flex-row gap-8 items-center justify-center max-w-5xl mx-auto">

<div className="w-full md:w-5/12 bg-[#fafafa] border border-zinc-200 rounded-[2rem] p-8 md:p-10 scale-95 md:-mr-8 z-0 opacity-80">
<h3 className="text-lg font-medium tracking-tight text-zinc-600 mb-8">Legacy Brokerage</h3>
<div className="space-y-5 mb-10">
<div className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                            High desk fees
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                            Capped earning potential
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                            Outdated software
                        </div>
</div>
<div>
<p className="text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Take home on $100k</p>
<p className="text-2xl font-medium tracking-tighter text-zinc-500">$70,000</p>
</div>
</div>

<div className="w-full md:w-7/12 bg-white border border-zinc-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-[2rem] p-8 md:p-12 relative z-10">
<div className="absolute top-8 right-8 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        The Nexus Model
                    </div>
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-8">Modern Platform</h3>
<div className="space-y-5 mb-12">
<div className="flex items-center gap-3 text-sm text-zinc-700 font-normal">
<div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Keep up to 100% of your commission
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-700 font-normal">
<div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Revenue share system for infinite growth
                        </div>
<div className="flex items-center gap-3 text-sm text-zinc-700 font-normal">
<div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
                            Modern tech stack included
                        </div>
</div>
<div className="pt-8 border-t border-zinc-100 flex items-end justify-between">
<div>
<p className="text-xs font-medium text-zinc-500 mb-1 uppercase tracking-wider">Take home on $100k</p>
<p className="text-4xl sm:text-5xl font-medium tracking-tighter text-zinc-900">$85,000<span className="text-blue-500">+</span></p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#fafafa] fade-in">
<div className="max-w-6xl mx-auto px-6 lg:px-8">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-16">
                Loved by top producers.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm md:translate-y-0">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-medium text-sm">JD</div>
<div>
<p className="text-sm font-medium text-zinc-900">James D.</p>
<p className="text-xs text-zinc-500 font-normal">Top Producer</p>
</div>
</div>
<p className="text-sm text-zinc-600 font-normal leading-relaxed">
                        "I kept more in my first few deals than I expected. The split is exactly as advertised, no hidden fees. Wish I switched sooner."
                    </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm md:translate-y-8">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-medium text-sm">ST</div>
<div>
<p className="text-sm font-medium text-zinc-900">Sarah T.</p>
<p className="text-xs text-zinc-500 font-normal">Broker Associate</p>
</div>
</div>
<p className="text-sm text-zinc-600 font-normal leading-relaxed">
                        "This model changed how I think about income. The revenue share is building a future for my family beyond just my daily hustle."
                    </p>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm md:translate-y-16">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 font-medium text-sm">MR</div>
<div>
<p className="text-sm font-medium text-zinc-900">Michael R.</p>
<p className="text-xs text-zinc-500 font-normal">Independent Agent</p>
</div>
</div>
<p className="text-sm text-zinc-600 font-normal leading-relaxed">
                        "Clear system. Better results. The tech stack alone saves me hours every week, letting me focus on closing."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-950 text-white relative overflow-hidden fade-in mt-16">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-white">
                Ready to elevate your career?
            </h2>
<p className="text-base text-zinc-400 font-normal mb-10 max-w-xl mx-auto">
                Join a brokerage designed for agents who want maximum income, ownership, and control.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center bg-white text-zinc-950 text-sm font-medium rounded-full px-8 py-3 hover:bg-zinc-100 transition-colors" href="#">
                    Start Onboarding
                </a>
<a className="inline-flex items-center justify-center bg-zinc-800/50 backdrop-blur-sm text-white border border-zinc-700/50 text-sm font-medium rounded-full px-8 py-3 hover:bg-zinc-800 transition-colors" href="#">
                    Talk to a Broker
                </a>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-10 border-t border-zinc-900 text-zinc-500">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex-shrink-0 text-white">
<span className="text-sm font-medium tracking-tighter">NEXUS</span>
</div>
<div className="flex items-center space-x-6">
<a className="text-xs font-normal hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs font-normal hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs font-normal hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
