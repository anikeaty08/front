import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-enter').forEach(el => observer.observe(el));
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
                menuBtn.innerHTML = '<iconify-icon icon="lucide:x" width="24" stroke-width="1.5"></iconify-icon>';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" stroke-width="1.5"></iconify-icon>';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                isMenuOpen = false;
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" stroke-width="1.5"></iconify-icon>';
            });
        });

        // Navbar Blur Effect on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-black/80', 'backdrop-blur-md');
            } else {
                nav.classList.remove('bg-black/80', 'backdrop-blur-md');
            }
        });

        // Pricing Toggle Logic
        const toggle = document.getElementById('billing-toggle');
        const amounts = document.querySelectorAll('.price-amount');
        const monthlyLabel = document.getElementById('billing-monthly');
        const yearlyLabel = document.getElementById('billing-yearly');

        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                monthlyLabel.classList.replace('text-white', 'text-slate-400');
                yearlyLabel.classList.replace('text-slate-400', 'text-white');
                amounts.forEach(amount => {
                    amount.textContent = '$' + amount.dataset.yearly;
                });
            } else {
                yearlyLabel.classList.replace('text-white', 'text-slate-400');
                monthlyLabel.classList.replace('text-slate-400', 'text-white');
                amounts.forEach(amount => {
                    amount.textContent = '$' + amount.dataset.monthly;
                });
            }
        });

        // FAQ Accordion
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('iconify-icon');
            
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                icon.style.transform = 'rotate(0deg)';
                button.classList.remove('text-indigo-400');
            } else {
                // Close others (optional)
                document.querySelectorAll('.faq-item > div').forEach(div => div.style.maxHeight = '0px');
                document.querySelectorAll('.faq-item iconify-icon').forEach(ic => ic.style.transform = 'rotate(0deg)');
                
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(45deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tighter text-white z-50" href="#">NEXUS</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-all" href="#">Start Project</a>
</div>

<button className="md:hidden text-white z-50" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center gap-8 md:hidden" id="mobile-menu">
<a className="text-2xl font-medium text-white tracking-tight mobile-link" href="#services">Services</a>
<a className="text-2xl font-medium text-white tracking-tight mobile-link" href="#features">Features</a>
<a className="text-2xl font-medium text-white tracking-tight mobile-link" href="#work">Work</a>
<a className="text-2xl font-medium text-white tracking-tight mobile-link" href="#pricing">Pricing</a>
<div className="flex flex-col gap-4 mt-8 w-64">
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium">Log in</button>
<button className="w-full py-3 rounded-lg bg-white text-black font-medium">Get Started</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/20 rounded-[100%] blur-[120px] -z-10 pointer-events-none opacity-50"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 animate-enter">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                v2.0 is now live
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 animate-enter" style={{transitionDelay: '100ms'}}>
                Digital products <br/>
<span className="text-gradient">that define the future.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-enter" style={{transitionDelay: '200ms'}}>
                Nexus is a full-service digital agency helping startups and enterprise companies ship better software, faster. Design, engineering, and strategy in one subscription.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter" style={{transitionDelay: '300ms'}}>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
                    Start your project
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 glass text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all">
                    View our work
                </button>
</div>

<div className="mt-24 pt-8 border-t border-white/5 animate-enter" style={{transitionDelay: '400ms'}}>
<p className="text-xs text-slate-500 mb-6 uppercase tracking-widest font-medium">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tight text-white">Acme Inc.</span>
<span className="text-xl font-bold tracking-tight text-white">KYPER</span>
<span className="text-xl font-bold tracking-tight text-white">Bolt.</span>
<span className="text-xl font-bold tracking-tight text-white">GlobalBank</span>
<span className="text-xl font-bold tracking-tight text-white">FocalPoint</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Our Expertise</h2>
<p className="text-slate-400 max-w-lg">Comprehensive design and development solutions tailored for scalability.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass glass-hover p-8 rounded-2xl group transition-all duration-300 animate-enter">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Product Design</h3>
<p className="text-sm text-slate-400 leading-relaxed">User-centric interfaces crafted with precision. We focus on usability, accessibility, and modern aesthetics.</p>
</div>

<div className="glass glass-hover p-8 rounded-2xl group transition-all duration-300 animate-enter" style={{transitionDelay: '100ms'}}>
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Full-Stack Dev</h3>
<p className="text-sm text-slate-400 leading-relaxed">Scalable architecture using React, Next.js, and Node. Performance-first engineering.</p>
</div>

<div className="glass glass-hover p-8 rounded-2xl group transition-all duration-300 animate-enter" style={{transitionDelay: '200ms'}}>
<div className="h-10 w-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Growth Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed">Data-driven marketing and SEO optimization to convert traffic into loyal customers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/5 border-y border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="text-indigo-400 font-medium text-xs tracking-wider uppercase mb-2 block">Why Nexus?</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">Everything you need to ship.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 grid-rows-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-4 row-span-2 glass rounded-2xl p-8 relative overflow-hidden group animate-enter">
<div className="relative z-10">
<h3 className="text-2xl font-semibold text-white mb-2">Real-time Analytics</h3>
<p className="text-slate-400 max-w-sm text-sm">Monitor your application performance and user engagement in real-time with our custom dashboard integrations.</p>
</div>
<div className="absolute right-0 bottom-0 w-3/4 h-3/4 translate-x-12 translate-y-12 bg-indigo-900/20 rounded-tl-2xl border-t border-l border-white/10 p-6 transition-transform group-hover:translate-x-8 group-hover:translate-y-8">

<div className="w-full h-full flex items-end gap-2">
<div className="w-1/5 h-20 bg-indigo-500/20 rounded-t"></div>
<div className="w-1/5 h-32 bg-indigo-500/40 rounded-t"></div>
<div className="w-1/5 h-24 bg-indigo-500/30 rounded-t"></div>
<div className="w-1/5 h-40 bg-indigo-500/60 rounded-t"></div>
<div className="w-1/5 h-36 bg-indigo-500/50 rounded-t"></div>
</div>
</div>
</div>

<div className="md:col-span-2 glass rounded-2xl p-8 flex flex-col justify-between group hover:bg-white/5 transition-colors animate-enter" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-emerald-400 text-3xl mb-4" icon="lucide:shield-check"></iconify-icon>
<div>
<h3 className="text-xl font-semibold text-white">Enterprise Security</h3>
<p className="text-xs text-slate-400 mt-2">SOC2 Compliant infrastructure.</p>
</div>
</div>

<div className="md:col-span-2 glass rounded-2xl p-8 flex flex-col justify-between group hover:bg-white/5 transition-colors animate-enter" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-blue-400 text-3xl mb-4" icon="lucide:users"></iconify-icon>
<div>
<h3 className="text-xl font-semibold text-white">Team Collaboration</h3>
<p className="text-xs text-slate-400 mt-2">Built-in comments and version control.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-16 text-center">From concept to launch</h2>
<div className="relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t border-dashed border-slate-800 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative z-10 animate-enter">
<div className="w-24 h-24 rounded-full glass bg-[#050505] border border-white/10 flex items-center justify-center text-2xl font-semibold text-white mb-6 mx-auto md:mx-0">1</div>
<h3 className="text-lg font-semibold text-white text-center md:text-left mb-2">Discovery</h3>
<p className="text-sm text-slate-400 text-center md:text-left">We dive deep into your business goals and user needs.</p>
</div>

<div className="relative z-10 animate-enter" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 rounded-full glass bg-[#050505] border border-white/10 flex items-center justify-center text-2xl font-semibold text-white mb-6 mx-auto md:mx-0">2</div>
<h3 className="text-lg font-semibold text-white text-center md:text-left mb-2">Design</h3>
<p className="text-sm text-slate-400 text-center md:text-left">Wireframing, prototyping, and high-fidelity UI design.</p>
</div>

<div className="relative z-10 animate-enter" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 rounded-full glass bg-[#050505] border border-white/10 flex items-center justify-center text-2xl font-semibold text-white mb-6 mx-auto md:mx-0">3</div>
<h3 className="text-lg font-semibold text-white text-center md:text-left mb-2">Develop</h3>
<p className="text-sm text-slate-400 text-center md:text-left">Clean code implementation with modern tech stacks.</p>
</div>

<div className="relative z-10 animate-enter" style={{transitionDelay: '300ms'}}>
<div className="w-24 h-24 rounded-full glass bg-[#050505] border border-indigo-500/30 flex items-center justify-center text-2xl font-semibold text-indigo-400 mb-6 mx-auto md:mx-0">4</div>
<h3 className="text-lg font-semibold text-white text-center md:text-left mb-2">Launch</h3>
<p className="text-sm text-slate-400 text-center md:text-left">Deployment, testing, and post-launch support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02]" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Selected Work</h2>
<p className="text-slate-400">See what we've built for others.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors mt-4 md:mt-0" href="#">
                    View all projects <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer animate-enter">
<div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-white/10 mb-6 overflow-hidden relative">

<div className="absolute inset-0 bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-3/4 h-3/4 bg-slate-950/50 rounded-lg border border-white/5 backdrop-blur-sm flex items-center justify-center">
<span className="text-2xl font-bold tracking-tight text-white/20">FinTech App</span>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-1">Nova Finance</h3>
<p className="text-sm text-slate-400">Mobile App • Fintech</p>
</div>

<div className="group cursor-pointer animate-enter" style={{transitionDelay: '100ms'}}>
<div className="aspect-video bg-gradient-to-br from-indigo-900 to-slate-900 rounded-xl border border-white/10 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-indigo-950/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<div className="w-3/4 h-3/4 bg-slate-950/50 rounded-lg border border-white/5 backdrop-blur-sm flex items-center justify-center">
<span className="text-2xl font-bold tracking-tight text-white/20">SaaS Dashboard</span>
</div>
</div>
</div>
<h3 className="text-xl font-semibold text-white mb-1">Metrics IO</h3>
<p className="text-sm text-slate-400">Web Platform • Analytics</p>
</div>
</div>
<div className="mt-8 md:hidden">
<a className="flex items-center gap-2 text-sm font-medium text-white" href="#">
                    View all projects <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Transparent Pricing</h2>
<p className="text-slate-400 mb-8">Choose the plan that fits your stage.</p>

<div className="flex items-center justify-center gap-4">
<span className="text-sm font-medium text-white" id="billing-monthly">Monthly</span>
<label className="relative flex items-center cursor-pointer" htmlFor="billing-toggle">
<input className="sr-only peer" id="billing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
</label>
<span className="text-sm font-medium text-slate-400" id="billing-yearly">Yearly <span className="text-indigo-400 text-xs ml-1">(Save 20%)</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass p-8 rounded-2xl flex flex-col animate-enter">
<div className="mb-4">
<span className="text-indigo-400 font-medium text-xs tracking-wider uppercase">Starter</span>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-semibold text-white price-amount" data-monthly="2,900" data-yearly="2,320">$2,900</span>
<span className="text-slate-500 ml-2 text-sm">/mo</span>
</div>
<p className="text-sm text-slate-400 mt-4">Perfect for MVP development and small business websites.</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> 1 Active Request</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> UI/UX Design</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> Web Development</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> Average 48h Delivery</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">Get Started</button>
</div>

<div className="glass p-8 rounded-2xl flex flex-col relative border-indigo-500/50 bg-indigo-500/5 animate-enter" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
<div className="mb-4">
<span className="text-indigo-300 font-medium text-xs tracking-wider uppercase">Growth</span>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-semibold text-white price-amount" data-monthly="4,900" data-yearly="3,920">$4,900</span>
<span className="text-slate-500 ml-2 text-sm">/mo</span>
</div>
<p className="text-sm text-slate-400 mt-4">For scaling startups requiring continuous design &amp; dev.</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> 2 Active Requests</li>
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> Full-Stack Development</li>
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> Priority Support</li>
<li className="flex items-start gap-3 text-sm text-white"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> DevOps &amp; Maintenance</li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors">Get Started</button>
</div>

<div className="glass p-8 rounded-2xl flex flex-col animate-enter" style={{transitionDelay: '200ms'}}>
<div className="mb-4">
<span className="text-indigo-400 font-medium text-xs tracking-wider uppercase">Enterprise</span>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-semibold text-white">Custom</span>
</div>
<p className="text-sm text-slate-400 mt-4">Tailored solutions for large organizations.</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> Dedicated Squad</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> Custom SLAs</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> Enterprise Security</li>
<li className="flex items-start gap-3 text-sm text-slate-300"><iconify-icon className="text-indigo-400 flex-shrink-0 mt-0.5" icon="lucide:check"></iconify-icon> White-glove Onboarding</li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02]" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="glass rounded-lg overflow-hidden faq-item">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-200">How fast is the delivery?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">
                            Most requests are delivered within 48-72 hours. Larger, complex features may be broken down into smaller milestones to ensure steady progress.
                        </div>
</div>
</div>

<div className="glass rounded-lg overflow-hidden faq-item">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-200">What tech stack do you use?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">
                            We specialize in the modern JavaScript stack: React, Next.js for frontend, Node.js for backend, and Tailwind CSS for styling. We also support PostgreSQL and Supabase.
                        </div>
</div>
</div>

<div className="glass rounded-lg overflow-hidden faq-item">
<button className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-slate-200">Can I pause my subscription?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="lucide:plus"></iconify-icon>
</button>
<div className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<div className="px-6 pb-4 text-sm text-slate-400 leading-relaxed">
                            Yes! If you don't have enough work to fill a month, you can pause your subscription and resume it when you have more requests. No wasted days.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center">

<div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-black border border-white/10 z-0"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to build the extraordinary?</h2>
<p className="text-slate-300 mb-8 max-w-lg mx-auto">Join forward-thinking companies building with Nexus today.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault(); alert('Thanks for subscribing!');">
<input className="flex-1 bg-white/5 border border-white/10 text-white px-5 py-3 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-500 text-sm" placeholder="Enter your email" required="" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-slate-200 transition-colors whitespace-nowrap" type="submit">Get Access</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white mb-4 block" href="#">NEXUS</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">Design, development, and strategy for the modern web. Built for scale.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2024 Nexus Agency Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs text-emerald-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
