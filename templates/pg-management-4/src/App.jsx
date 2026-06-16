import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
            PGStay
        </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="text-sm font-medium text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300" href="#">
            Login
        </a>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">

<div className="absolute inset-0 z-0">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-900/10 rounded-full blur-[120px] opacity-40"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
</div>
<div className="relative z-10 max-w-4xl w-full text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-amber-400 mb-4 reveal-on-scroll">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                Now available for early access
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9] text-white">
<span className="block overflow-hidden">
<span className="char-reveal" style={{animationDelay: '0.1s'}}>A</span>
<span className="char-reveal italic text-amber-500/90" style={{animationDelay: '0.2s'}}>calmer</span>
<span className="char-reveal" style={{animationDelay: '0.3s'}}>way</span>
</span>
<span className="block overflow-hidden">
<span className="char-reveal" style={{animationDelay: '0.4s'}}>to</span>
<span className="char-reveal" style={{animationDelay: '0.5s'}}>run</span>
<span className="char-reveal" style={{animationDelay: '0.6s'}}>your</span>
<span className="char-reveal" style={{animationDelay: '0.7s'}}>PG.</span>
</span>
</h1>
<p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-400 font-light leading-relaxed reveal-on-scroll delay-300">
                Launch your PG website, manage tenants, beds, and payments — without the spreadsheets or WhatsApp chaos.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 reveal-on-scroll delay-300">
<button className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105">
                    Launch Your PG
                    <iconify-icon className="inline-block ml-2 -mr-1 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 text-white hover:text-amber-200 font-medium transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" width="20"></iconify-icon>
                    View Demo
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 animate-bounce">
<iconify-icon icon="lucide:arrow-down" width="24"></iconify-icon>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/50 relative z-20 overflow-hidden">
<div className="marquee-container w-full">
<div className="marquee-content flex gap-12 whitespace-nowrap text-lg text-neutral-500 font-medium tracking-wide">
<span>Launch in 30 seconds</span> ✦ <span>OTP-based login</span> ✦ <span>Built for Indian PGs</span> ✦ <span>No learning curve</span> ✦ <span>Owner + Tenant portals</span> ✦ <span>Automated Rent Collection</span> ✦
                <span>Launch in 30 seconds</span> ✦ <span>OTP-based login</span> ✦ <span>Built for Indian PGs</span> ✦ <span>No learning curve</span> ✦ <span>Owner + Tenant portals</span> ✦ <span>Automated Rent Collection</span> ✦
            </div>
</div>
</section>

<section className="py-32 px-4 relative z-10">
<div className="max-w-4xl mx-auto text-center space-y-24">
<div className="space-y-6">
<p className="text-3xl md:text-5xl serif text-neutral-600 reveal-on-scroll">
                    Beds tracked on Excel.
                </p>
<p className="text-3xl md:text-5xl serif text-neutral-600 reveal-on-scroll delay-100">
                    Tenants managed on WhatsApp.
                </p>
<p className="text-3xl md:text-5xl serif text-neutral-600 reveal-on-scroll delay-200">
                    No visibility on revenue.
                </p>
</div>
<div className="reveal-on-scroll delay-300">
<div className="h-16 w-px bg-gradient-to-b from-transparent via-amber-500 to-transparent mx-auto mb-12"></div>
<h2 className="text-4xl md:text-6xl text-white font-medium tracking-tight">
                    PGStay replaces all of this with <br/>
<span className="serif italic text-amber-500">one calm dashboard.</span>
</h2>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10" id="features">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll hover:bg-white/5 transition-colors duration-500 group">
<div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bed-double" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Smart Bed Management</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Visualise occupancy floor-wise. Drag and drop to move tenants. Know exactly what's available instantly.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll delay-100 hover:bg-white/5 transition-colors duration-500 group">
<div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:wallet" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Automated Payments</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Rent reminders via WhatsApp. UPI integration. Track security deposits and dues without the math.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll delay-200 hover:bg-white/5 transition-colors duration-500 group">
<div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:user-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Tenant Onboarding</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        Digital KYC collection. Generate agreements automatically. A professional check-in experience.
                    </p>
</div>

<div className="glass-panel p-8 rounded-3xl md:col-span-2 lg:col-span-2 reveal-on-scroll hover:bg-white/5 transition-colors duration-500 group flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 space-y-4">
<div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:smartphone" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold">Your Own Website</h3>
<p className="text-neutral-400 leading-relaxed text-sm max-w-md">
                            Get a stunning, SEO-optimised landing page for your PG property instantly. Let students and professionals find you on Google and apply directly.
                        </p>
</div>

<div className="flex-1 w-full bg-neutral-900 border border-white/10 rounded-xl p-4 shadow-2xl skew-y-1 transform transition-transform group-hover:skew-y-0">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="space-y-2">
<div className="h-8 w-3/4 bg-neutral-800 rounded animate-pulse"></div>
<div className="h-32 w-full bg-neutral-800 rounded animate-pulse opacity-50"></div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-3xl reveal-on-scroll delay-100 hover:bg-white/5 transition-colors duration-500 group">
<div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold mb-3">Owner Analytics</h3>
<p className="text-neutral-400 leading-relaxed text-sm">
                        View monthly revenue, expenses, and occupancy trends at a glance. Data-driven decisions.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-4 relative z-10 bg-neutral-900/30" id="experience">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-20 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl text-white font-serif mb-6">A seamless journey for tenants</h2>
<p className="text-neutral-400">From discovery to move-in, fully digital.</p>
</div>
<div className="relative border-l border-white/10 ml-6 md:ml-1/2 space-y-12 pb-12">

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center reveal-on-scroll">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-amber-500 ring-4 ring-neutral-900"></div>
<div className="md:text-right md:order-1">
<h4 className="text-xl text-white font-medium mb-2">Explore PG</h4>
<p className="text-neutral-500 text-sm">Tenants view your amenities, rooms, and pricing on your dedicated web link.</p>
</div>
<div className="hidden md:block md:order-2">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-white/5">1</div>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center reveal-on-scroll delay-100">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-700 ring-4 ring-neutral-900"></div>
<div className="hidden md:flex md:justify-end md:order-1">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-white/5">2</div>
</div>
<div className="md:order-2">
<h4 className="text-xl text-white font-medium mb-2">Apply Online</h4>
<p className="text-neutral-500 text-sm">Paperless application form with document upload (Aadhaar/PAN) directly from phone.</p>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center reveal-on-scroll delay-200">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-700 ring-4 ring-neutral-900"></div>
<div className="md:text-right md:order-1">
<h4 className="text-xl text-white font-medium mb-2">Pay Deposit</h4>
<p className="text-neutral-500 text-sm">Secure UPI payment gateway for booking amount and security deposit.</p>
</div>
<div className="hidden md:block md:order-2">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-white/5">3</div>
</div>
</div>

<div className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-16 items-center reveal-on-scroll delay-300">
<div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-700 ring-4 ring-neutral-900"></div>
<div className="hidden md:flex md:justify-end md:order-1">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 border border-white/5">4</div>
</div>
<div className="md:order-2">
<h4 className="text-xl text-white font-medium mb-2">Get Approved</h4>
<p className="text-neutral-500 text-sm">You review the profile, approve with one click, and they get their digital room key.</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-[80vh] flex flex-col items-center justify-center relative px-4 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-900/20 to-neutral-900/0 rounded-full blur-[100px] z-0 pointer-events-none"></div>
<div className="relative z-10 text-center max-w-3xl space-y-10">
<h2 className="text-5xl md:text-7xl serif text-white tracking-tight leading-tight reveal-on-scroll">
                Stop managing your PG <br/>
<span className="italic text-neutral-500">in fragments.</span>
</h2>
<div className="flex flex-col items-center gap-4 reveal-on-scroll delay-100">
<button className="amber-glow px-10 py-5 bg-amber-500 text-black text-lg font-bold rounded-full hover:bg-amber-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.6)]">
                    Start with PGStay
                </button>
<p className="text-neutral-500 text-sm">Free to start · Takes under a minute</p>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10 bg-black relative z-10">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span className="text-white font-serif text-lg">PGStay</span>
</div>
<div className="text-neutral-500 text-sm">
                © 2024 PGStay Inc. All rights reserved.
            </div>
<div className="flex gap-6 text-neutral-400">
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
