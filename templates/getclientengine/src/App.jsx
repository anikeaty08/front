import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-200/60 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-medium tracking-tight flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white group-hover:scale-95 transition-transform duration-300">
<span className="text-xl italic font-serif">a</span>
</div>
<span className="">aura.</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#work">Work</a>
<a className="hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">Studio</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-all hover:pr-5 group" href="#contact">
                    Start project
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<button className="md:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto space-y-8 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm text-xs font-medium text-neutral-600 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-neutral-950 leading-[0.95]">
                We craft digital <br/>
<span className="font-serif italic text-neutral-400">experiences</span> that scale.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed">
                A design and development agency building high-converting websites for ambitious brands.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group">
                    View our work
                    <iconify-icon className="group-hover:translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-down-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white border border-neutral-200 text-neutral-900 font-medium text-sm hover:bg-neutral-50 hover:border-neutral-300 transition-colors shadow-sm">
                    Our services
                </button>
</div>
</div>
</section>

<div className="w-full overflow-hidden border-y border-neutral-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Trusted by industry leaders</p>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-semibold tracking-tight">Acme Corp</span>
<span className="text-xl font-semibold tracking-tight">Linear</span>
<span className="text-xl font-semibold tracking-tight">Vercel</span>
<span className="text-xl font-semibold tracking-tight">Stripe</span>
<span className="text-xl font-semibold tracking-tight">Raycast</span>
<span className="text-xl font-semibold tracking-tight">Framer</span>
<span className="text-xl font-semibold tracking-tight">Notion</span>
<span className="text-xl font-semibold tracking-tight">Shopify</span>

<span className="text-xl font-semibold tracking-tight">Acme Corp</span>
<span className="text-xl font-semibold tracking-tight">Linear</span>
<span className="text-xl font-semibold tracking-tight">Vercel</span>
<span className="text-xl font-semibold tracking-tight">Stripe</span>
<span className="text-xl font-semibold tracking-tight">Raycast</span>
</div>
</div>
</div>
<style>
        .animate-marquee {
            animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>

<section className="py-24 px-6 max-w-7xl mx-auto" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Selected Work</h2>
<p className="text-neutral-500 max-w-md">A curated selection of projects where we pushed the boundaries of design and performance.</p>
</div>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-300 pb-0.5 hover:border-neutral-900 transition-colors" href="#">View all projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative border border-neutral-100">
<img alt="Minimalist Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1">Mono Architecture</h3>
<p className="text-neutral-500 text-sm">Web Design, Development</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative border border-neutral-100">
<img alt="Abstract Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1">Chronos Watch</h3>
<p className="text-neutral-500 text-sm">eCommerce, Branding</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative border border-neutral-100">
<img alt="Dark Mode UI" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1">Lumina Finance</h3>
<p className="text-neutral-500 text-sm">Product Design, App</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden mb-6 relative border border-neutral-100">
<img alt="Lifestyle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1">Apex Fitness</h3>
<p className="text-neutral-500 text-sm">Marketing Site, CMS</p>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-neutral-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h2 className="text-3xl font-medium tracking-tight mb-6">Expertise</h2>
<p className="text-neutral-500 leading-relaxed mb-8">
                        We don't just build websites; we build systems that enable growth. Our process is rooted in data and elevated by world-class design.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group" href="#">
                        Learn about our process
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900 shadow-sm">
<iconify-icon icon="solar:figma-file-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Design &amp; UI/UX</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Crafting intuitive and visually stunning interfaces that drive engagement. We focus on usability without compromising on aesthetics.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900 shadow-sm">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Development</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Clean, scalable code built on modern stacks like React, Next.js, and Tailwind. Performance and accessibility are standard.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900 shadow-sm">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Strategy &amp; Growth</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Data-driven insights to position your brand effectively. We help you define your voice and reach your target audience.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-neutral-200 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-6 text-neutral-900 shadow-sm">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Brand Identity</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                            Creating memorable brand systems including logos, typography, and color palettes that stand the test of time.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="bg-neutral-900 rounded-3xl overflow-hidden text-white relative">
<div className="absolute top-0 right-0 p-32 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 p-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 items-center">
<div className="p-12 md:p-16 relative z-10">
<div className="inline-flex items-center gap-2 mb-6 text-neutral-400 text-xs font-medium uppercase tracking-widest">
<iconify-icon icon="solar:star-linear"></iconify-icon>
<span>The Approach</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                        Design that works  as good as it looks.
                    </h2>
<p className="text-neutral-400 mb-8 max-w-sm text-lg leading-relaxed">
                        We believe that great design is invisible. It should just work, guiding the user effortlessly from point A to point B.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 text-neutral-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-neutral-300">Semantic HTML structure</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-neutral-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-neutral-300">Optimized for Core Web Vitals</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-neutral-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-neutral-300">Responsive across all devices</span>
</li>
</ul>
</div>
<div className="h-full min-h-[400px] bg-neutral-800 relative overflow-hidden group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-64 h-80 bg-neutral-900 border border-neutral-700 rounded-xl shadow-2xl transform rotate-[-6deg] group-hover:rotate-0 transition-all duration-500 p-4">
<div className="w-full h-32 bg-neutral-800 rounded-lg mb-4 animate-pulse"></div>
<div className="w-3/4 h-4 bg-neutral-800 rounded mb-2"></div>
<div className="w-1/2 h-4 bg-neutral-800 rounded mb-6"></div>
<div className="flex gap-2">
<div className="w-1/2 h-20 bg-neutral-800 rounded-lg"></div>
<div className="w-1/2 h-20 bg-neutral-800 rounded-lg"></div>
</div>
</div>
<div className="w-64 h-80 bg-neutral-800 border border-neutral-600 rounded-xl shadow-2xl absolute transform rotate-[6deg] translate-x-12 translate-y-12 group-hover:rotate-0 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-500 p-4 z-10">
<div className="flex justify-between items-center mb-6">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div className="w-4 h-4 rounded bg-neutral-700"></div>
</div>
<div className="w-full h-4 bg-neutral-700 rounded mb-3"></div>
<div className="w-full h-4 bg-neutral-700 rounded mb-3"></div>
<div className="w-2/3 h-4 bg-neutral-700 rounded mb-8"></div>
<div className="w-full h-10 bg-neutral-600 rounded-lg"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-4xl mx-auto text-center">
<iconify-icon className="text-neutral-200 mb-8" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<h3 className="text-2xl md:text-4xl font-serif italic text-neutral-900 leading-tight mb-8">
            "Aura transformed our digital presence. The attention to detail and technical execution was flawless. They didn't just deliver a website; they delivered a business tool."
        </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-neutral-900">James Miller</p>
<p className="text-xs text-neutral-500">CTO, FinTech Solutions</p>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-neutral-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Let's build something <br/> meaningful together.</h2>
<p className="text-neutral-500 text-lg mb-8">Reach out to discuss your next project.</p>
<div className="space-y-4">
<a className="flex items-center gap-3 text-neutral-900 hover:text-neutral-600 transition-colors" href="mailto:hello@aura.agency">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
<span>hello@aura.agency</span>
</a>
<div className="flex items-center gap-3 text-neutral-900">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Los Angeles, CA</span>
</div>
</div>
</div>

<form className="space-y-6 bg-neutral-50 p-8 rounded-3xl border border-neutral-100">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Name</label>
<input className="w-full bg-white border-b border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Email</label>
<input className="w-full bg-white border-b border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300" data-transferchain-field-id="5918" data-transferchain-field-type="email" placeholder="john@company.com" type="email"/>
<div data-transferchain-element="email-5918" data-transferchain-field-id="5918" data-transferchain-group-id="group-1" style={{position: 'relative!important', display: 'block!important', float: 'left!important', width: '0!important', height: '0!important', flex: '0!important', alignSelf: 'flex-start!important'}}></div></div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Project Details</label>
<textarea className="w-full bg-white border-b border-neutral-200 p-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300 resize-none" placeholder="Tell us about your goals..." rows="4"></textarea>
</div>
<div className="space-y-3">
<label className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">Budget Range</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs text-neutral-500 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all hover:border-neutral-400">
                                     $5k - $10k
                                 </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs text-neutral-500 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all hover:border-neutral-400">
                                    $10k - $25k
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-xs text-neutral-500 peer-checked:bg-neutral-900 peer-checked:text-white peer-checked:border-neutral-900 transition-all hover:border-neutral-400">
                                    $25k+
                                </div>
</label>
</div>
</div>
<button className="w-full py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group" type="button">
                        Send Inquiry
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
<div className="pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2024 Aura Agency. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>
<div data-transferchain-root="" style={{position: 'absolute!important', top: '0!important', left: '0!important', width: '0!important', height: '0!important', display: 'block!important'}}></div>
    </>
  );
}
