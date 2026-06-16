import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                
                const icon = mobileBtn.querySelector('iconify-icon');
                if (mobileMenu.classList.contains('hidden')) {
                    icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                } else {
                    icon.setAttribute('icon', 'solar:close-circle-linear');
                }
            });
            
            // Close mobile menu on link click
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                    mobileBtn.querySelector('iconify-icon').setAttribute('icon', 'solar:hamburger-menu-linear');
                });
            });
        }

        // Scroll Reveal
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            var windowHeight = window.innerHeight;
            var elementVisible = 50;

            for (var i = 0; i < reveals.length; i++) {
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 brightness-75" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 w-full h-full z-0">
<iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe>
</div>
</div>
<main className="md:py-12 flex flex-col min-h-screen z-10 w-full max-w-6xl pt-8 pr-6 pb-8 pl-6 relative">

<nav className="flex relative reveal active select-none sticky z-50 bg-black/20 border-white/5 border rounded-xl mb-24 pt-3 pr-4 pb-3 pl-4 top-6 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-indigo-500/10"></div>
<span className="font-mono font-semibold text-xs text-zinc-100">AB</span>
</div>
<span className="text-xs font-semibold text-zinc-200 tracking-tight">Andy Bounds</span>
</a>

<div className="hidden md:flex gap-4 lg:gap-6 items-center">
<a className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded" href="#expertise">Expertise</a>
<a className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded" href="#methodology">Methodology</a>
<a className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded" href="#about">About</a>
<a className="text-[11px] hover:text-white transition-colors font-medium text-zinc-400 px-2 py-1 hover:bg-white/5 rounded" href="#faq">FAQ</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center justify-center gap-2 hover:bg-white transition-all text-[11px] font-semibold text-zinc-900 bg-zinc-100 rounded px-3 py-1.5" href="#book">
                    Book a Conversation
                </a>

<button className="md:hidden flex items-center justify-center w-8 h-8 rounded hover:bg-white/5 text-zinc-400 hover:text-zinc-100 transition-colors" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="18"></iconify-icon>
</button>
</div>

<div className="absolute top-full right-0 left-0 mt-2 bg-[#09090b]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden hidden flex-col shadow-2xl z-50" id="mobile-menu">
<div className="flex flex-col p-2 gap-1">
<a className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#expertise">Expertise</a>
<a className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#methodology">Methodology</a>
<a className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#about">About</a>
<a className="px-4 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#faq">FAQ</a>
<a className="px-4 py-3 text-sm font-medium text-indigo-400 bg-indigo-500/10 rounded-lg transition-colors mt-2" href="#book">Book a Conversation</a>
</div>
</div>
</nav>

<header className="reveal md:pt-12 active mb-24 pt-8 text-center flex flex-col items-center">
<div className="max-w-4xl">
<h1 className="md:text-7xl leading-tight reveal active hover:scale-[1.01] transition-transform duration-500 text-5xl font-medium text-zinc-100 tracking-tight mb-8">
                    Say It So People <span className="text-indigo-400">Say Yes</span>.
                </h1>
<p className="md:text-lg leading-relaxed text-base text-zinc-400 max-w-2xl mx-auto mb-10">
                    Andy Bounds helps professionals explain their ideas, products, and value so clearly that people understand, engage, and act.
                </p>
</div>
</header>

<section className="reveal active mb-32 flex flex-col items-center max-w-4xl mx-auto w-full">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-6 text-center">Watch Andy Explain the Power of Clear Communication</h2>
<div className="glass-card p-2 md:p-3 rounded-2xl w-full mb-8 shadow-2xl">
<div className="aspect-video bg-zinc-900 rounded-xl w-full flex items-center justify-center border border-white/5 relative overflow-hidden group cursor-pointer">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
<div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
<div className="w-20 h-20 rounded-full bg-zinc-950/80 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-indigo-500/50 transition-all duration-300 z-10 shadow-xl">
<iconify-icon className="text-zinc-300 group-hover:text-indigo-400 ml-1 transition-colors" icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>
</div>
<p className="text-zinc-400 text-sm md:text-base text-center max-w-2xl mb-10 leading-relaxed">
                In this short video, Andy shows why most people lose deals not because of product — but because of how they explain it.
            </p>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white hover:scale-[1.02] transition-all text-sm font-semibold text-zinc-900 bg-zinc-100 rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)]" href="#book">
                Book a Conversation with Andy
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</section>

<section className="reveal mb-32 text-center max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium text-zinc-100 tracking-tight mb-10 leading-tight">
                You know your value.<br/>
<span className="text-zinc-500">Your audience doesn’t.</span>
</h2>
<div className="space-y-6 text-base md:text-lg text-zinc-400 mb-12">
<p>Messages become complicated.<br/>Presentations lose clarity.<br/>Opportunities stall.</p>
<p className="text-zinc-300">It’s rarely the product that fails.</p>
<p className="text-xl font-medium text-indigo-400">It’s the explanation.</p>
</div>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-xs font-semibold text-zinc-300 bg-white/5 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#expertise">
                Improve Your Messaging
            </a>
</section>

<section className="mb-32 reveal" id="expertise">
<div className="flex items-center gap-2 mb-12 justify-center">
<div className="h-px bg-zinc-800 w-8"></div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">What Andy Does</span>
<div className="h-px bg-zinc-800 w-8"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="glass-card flex flex-col rounded-xl p-8 gap-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:chat-square-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Clear Commercial Messaging</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Turn complex ideas into language customers understand instantly.</p>
</div>

<div className="glass-card flex flex-col rounded-xl p-8 gap-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Sales Communication Coaching</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Help individuals present with clarity and impact.</p>
</div>

<div className="glass-card flex flex-col rounded-xl p-8 gap-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Leadership Communication</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Equip leaders to communicate direction clearly and persuasively.</p>
</div>

<div className="glass-card flex flex-col rounded-xl p-8 gap-y-4">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 mb-2">
<iconify-icon className="text-indigo-400" icon="solar:presentation-graph-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight">Presentation Effectiveness</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Strengthen how ideas are delivered so they land.</p>
</div>
</div>
</section>

<section className="mb-32 reveal">
<div className="flex items-center gap-2 mb-12 justify-center">
<div className="h-px bg-zinc-800 w-8"></div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Why Andy</span>
<div className="h-px bg-zinc-800 w-8"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

<div className="glass-card flex gap-5 rounded-xl p-6 items-start group hover:bg-white/[0.02] transition-colors">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-zinc-500 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:user-star-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1">Led by Andy Bounds</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Specialist in persuasive communication and commercial clarity.</p>
</div>
</div>

<div className="glass-card flex gap-5 rounded-xl p-6 items-start group hover:bg-white/[0.02] transition-colors">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-zinc-500 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:hammer-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1">Practical Over Theoretical</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Focused on real-world business conversations.</p>
</div>
</div>

<div className="glass-card flex gap-5 rounded-xl p-6 items-start group hover:bg-white/[0.02] transition-colors">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-zinc-500 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:target-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1">Results-Focused Messaging</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Communication designed to drive understanding and action.</p>
</div>
</div>

<div className="glass-card flex gap-5 rounded-xl p-6 items-start group hover:bg-white/[0.02] transition-colors">
<div className="w-8 h-8 rounded bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-zinc-500 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-100 transition-colors" icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-200 mb-1">Energy and Engagement</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Clear thinking delivered with confidence and pace.</p>
</div>
</div>
</div>
</section>

<section className="reveal mb-32" id="methodology">
<div className="flex items-center gap-2 mb-12">
<div className="h-px bg-zinc-800 w-12"></div>
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">How It Works</span>
</div>
<div className="relative grid grid-cols-1 gap-6 max-w-3xl mx-auto mb-12">

<div className="absolute left-[28px] top-6 bottom-6 w-px bg-zinc-800 hidden md:block z-0"></div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 pb-8 border-b border-white/5 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">01</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Diagnose the Message Gap</h3>
<p className="text-sm text-zinc-500">Identify where clarity is being lost.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:filters-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 pb-8 border-b border-white/5 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">02</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Simplify the Message</h3>
<p className="text-sm text-zinc-500">Refine language so customers understand quickly.</p>
</div>
</div>

<div className="relative flex gap-6 md:gap-10 group reveal">
<div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 relative z-10 group-hover:border-indigo-500/50 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-indigo-400 transition-colors" icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div className="pt-2 w-full">
<div className="text-[10px] font-mono text-indigo-500 mb-1">03</div>
<h3 className="text-lg font-medium text-zinc-200 mb-2">Strengthen Delivery</h3>
<p className="text-sm text-zinc-500">Ensure communication lands with impact.</p>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-xs font-semibold text-zinc-300 bg-white/5 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#book">
                    Schedule a Discussion
                </a>
</div>
</section>

<section className="reveal mb-32 pt-8" id="about">
<div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">

<div className="absolute left-0 bottom-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -ml-16 -mb-16 rounded-full pointer-events-none"></div>

<div className="relative z-10 hidden md:flex items-center justify-center shrink-0">
<div className="w-32 h-32 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent"></div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors duration-500" icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
</div>
<div className="relative z-10 max-w-xl w-full">
<div className="flex items-center gap-2 mb-6 text-indigo-400">
<iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-mono font-medium uppercase tracking-widest">About</span>
</div>
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight mb-6">Hi, I’m Andy Bounds.</h2>
<div className="text-zinc-400 text-sm leading-relaxed space-y-4">
<p>I help professionals explain their value in a way that makes people want to say yes.</p>
<p>Whether in sales, leadership, or presentations, clear communication drives commercial success.</p>
<p className="text-zinc-200 font-medium">My focus is simple: make complex ideas easy to understand and compelling to act on.</p>
</div>
</div>
</div>
</section>

<section className="reveal mb-32 max-w-5xl mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="solar:close-circle-linear" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-400 tracking-tight">Before</h3>
</div>
<ul className="space-y-4 text-sm text-zinc-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-700" icon="solar:minus-circle-linear" width="16"></iconify-icon>
                            Overcomplicated explanations.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-700" icon="solar:minus-circle-linear" width="16"></iconify-icon>
                            Lost attention.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-zinc-700" icon="solar:minus-circle-linear" width="16"></iconify-icon>
                            Missed opportunities.
                        </li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8 relative overflow-hidden border-indigo-500/20 shadow-[0_0_30px_-15px_rgba(99,102,241,0.2)]">
<div className="absolute inset-0 bg-indigo-500/[0.02] pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="flex items-center gap-3 mb-6 relative z-10">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight">After</h3>
</div>
<ul className="space-y-4 text-sm text-zinc-300 relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-indigo-400" icon="solar:arrow-right-linear" width="16"></iconify-icon>
                            Clear, confident messaging.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-indigo-400" icon="solar:arrow-right-linear" width="16"></iconify-icon>
                            Stronger engagement.
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-indigo-400" icon="solar:arrow-right-linear" width="16"></iconify-icon>
                            More decisive action.
                        </li>
</ul>
</div>
</div>
<div className="flex justify-center mt-12">
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-xs font-semibold text-zinc-300 bg-white/5 border-white/10 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#book">
                    Start Improving Your Communication
                 </a>
</div>
</section>

<section className="reveal mb-32 max-w-3xl mx-auto w-full" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium text-zinc-100 tracking-tight">Common Questions</h2>
</div>
<div className="space-y-3">

<details className="glass-card rounded-xl group cursor-pointer transition-all">
<summary className="p-6 font-medium text-zinc-200 flex justify-between items-center text-sm">
                        Who is Andy’s work designed for?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Sales professionals, leaders, and teams who need to communicate clearly and persuasively.
                    </div>
</details>

<details className="glass-card rounded-xl group cursor-pointer transition-all">
<summary className="p-6 font-medium text-zinc-200 flex justify-between items-center text-sm">
                        Is this presentation training?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        It focuses on commercial communication that drives understanding and action.
                    </div>
</details>

<details className="glass-card rounded-xl group cursor-pointer transition-all">
<summary className="p-6 font-medium text-zinc-200 flex justify-between items-center text-sm">
                        Do you work with individuals or teams?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Both.
                    </div>
</details>

<details className="glass-card rounded-xl group cursor-pointer transition-all">
<summary className="p-6 font-medium text-zinc-200 flex justify-between items-center text-sm">
                        What makes this different?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        The focus is on clarity that influences decisions — not just style.
                    </div>
</details>

<details className="glass-card rounded-xl group cursor-pointer transition-all">
<summary className="p-6 font-medium text-zinc-200 flex justify-between items-center text-sm">
                        How do we begin?
                        <iconify-icon className="text-zinc-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                        Book a conversation to explore your communication challenges.
                    </div>
</details>
</div>
</section>

<section className="reveal mb-20 text-center pt-24 border-t border-white/5 max-w-4xl mx-auto w-full flex flex-col items-center" id="book">
<h2 className="text-4xl md:text-5xl font-medium text-zinc-100 mb-6 tracking-tight">Make Your Message Land</h2>
<p className="text-zinc-400 text-base md:text-lg mb-12 max-w-2xl">
                Book a conversation with Andy Bounds to explore how clearer communication can improve commercial results.
            </p>

<div className="glass-card w-full max-w-3xl rounded-2xl p-2 mb-10 min-h-[500px] flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10 flex flex-col items-center gap-4">
<iconify-icon className="text-zinc-500 group-hover:text-indigo-400 transition-colors" icon="solar:calendar-linear" width="48"></iconify-icon>
<p className="text-sm font-medium text-zinc-500 font-mono tracking-widest uppercase">Calendly Booking Component</p>
</div>
</div>
<p className="text-sm font-medium text-indigo-400">
                If they understand you, they’re more likely to act.
            </p>
</section>
</main>


    </>
  );
}
