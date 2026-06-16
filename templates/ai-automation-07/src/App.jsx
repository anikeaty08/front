import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let previousView = 'auth-view';

        function hideAllViews() {
            document.getElementById('auth-view').classList.add('hidden');
            document.getElementById('contact-view').classList.add('hidden');
            document.getElementById('main-view').classList.add('hidden');
        }

        function showAuth() {
            hideAllViews();
            document.getElementById('auth-view').classList.remove('hidden');
            window.scrollTo(0, 0);
            previousView = 'auth-view';
        }

        function showContact() {
            if (!document.getElementById('auth-view').classList.contains('hidden')) {
                previousView = 'auth-view';
            } else if (!document.getElementById('main-view').classList.contains('hidden')) {
                previousView = 'main-view';
            }
            hideAllViews();
            document.getElementById('contact-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function showMain() {
            hideAllViews();
            document.getElementById('main-view').classList.remove('hidden');
            window.scrollTo(0, 0);
            previousView = 'main-view';
        }

        function goBack() {
            if (previousView === 'main-view') {
                showMain();
            } else {
                showAuth();
            }
        }
    


        // Continuously observe and remove platform-injected watermarks
        const removeWatermarks = () => {
            const elements = document.querySelectorAll('a, div, span, button, p');
            elements.forEach(el => {
                if (el.textContent && el.textContent.toLowerCase().includes('made with aura')) {
                    el.style.setProperty('display', 'none', 'important');
                    el.style.setProperty('opacity', '0', 'important');
                    el.style.setProperty('pointer-events', 'none', 'important');
                    if (el.parentElement && el.parentElement !== document.body) {
                        el.parentElement.style.setProperty('display', 'none', 'important');
                    }
                }
            });
        };

        // Run immediately
        removeWatermarks();

        // Run on DOM mutations in case the builder injects it with a delay
        const observer = new MutationObserver(removeWatermarks);
        observer.observe(document.documentElement, { childList: true, subtree: true });
        
        // Backup interval just in case
        setInterval(removeWatermarks, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col items-center justify-center p-6 relative z-20" id="auth-view">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="w-full max-w-sm">
<div className="text-center mb-10">
<div className="text-zinc-100 text-xl font-semibold tracking-tight mb-6">AIA.</div>
<h1 className="text-2xl font-semibold text-zinc-100 tracking-tight">Sign in to platform</h1>
<p className="text-sm text-zinc-500 mt-2">Enter your credentials to access your workspace.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); showMain();">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full bg-[#0c0c0e] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full bg-[#0c0c0e] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all" placeholder="••••••••" required="" type="password"/>
</div>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 text-sm font-medium px-4 py-3.5 rounded-full hover:bg-zinc-300 transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
                    Sign in
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
<div className="mt-8 text-center">
<button className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" onclick="showContact()">Need help? Contact support</button>
</div>
</div>
</div>

<div className="hidden min-h-screen flex flex-col items-center justify-center p-6 relative z-20" id="contact-view">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="w-full max-w-md">
<button className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-2 mb-10 group" onclick="goBack()">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Go back
            </button>
<div className="mb-10">
<h1 className="text-3xl font-semibold text-zinc-100 tracking-tight">Contact Us</h1>
<p className="text-sm text-zinc-500 mt-2">Send us a message and our engineering team will get back to you.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Message sent successfully.'); goBack();">
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">Full name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full bg-[#0c0c0e] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all" placeholder="Jane Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full bg-[#0c0c0e] border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-300 mb-2">Message</label>
<textarea className="w-full bg-[#0c0c0e] border border-white/10 rounded-2xl p-4 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-white/20 focus:bg-white/5 transition-all resize-none" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-100 text-zinc-950 text-sm font-medium px-4 py-3.5 rounded-full hover:bg-zinc-300 transition-colors flex items-center justify-center gap-2 mt-2" type="submit">
                    Send message
                    <iconify-icon icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>

<div className="hidden" id="main-view">

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-zinc-100 text-lg font-semibold tracking-tighter" href="#">AIA.</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="text-sm hover:text-zinc-100 transition-colors" href="#process">Process</a>
<a className="text-sm hover:text-zinc-100 transition-colors" href="#clients">Case Studies</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:block text-sm hover:text-zinc-100 transition-colors" onclick="showContact()">Contact Us</button>
<button className="hidden md:block text-sm hover:text-zinc-100 transition-colors" onclick="showAuth()">Sign out</button>
<a className="bg-zinc-100 text-zinc-950 text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-300 transition-colors flex items-center gap-2" href="#">
                        Book Audit
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8 backdrop-blur-sm">
<iconify-icon className="text-indigo-400" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Next-generation business operations</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-100 tracking-tight leading-[1.1] max-w-4xl">
                    Operate at the speed of <span className="text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500">thought.</span>
</h1>
<p className="text-base md:text-lg mt-6 max-w-2xl text-zinc-400 leading-relaxed">
                    We build bespoke AI agents and intelligent workflows that automate your repetitive tasks, optimize data flow, and scale your operations without scaling your headcount.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-zinc-100 text-zinc-950 text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-300 transition-colors flex items-center justify-center gap-2" href="#">
                        Start Building
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto border border-white/10 text-zinc-300 text-sm font-medium px-6 py-3 rounded-full hover:bg-white/5 transition-colors flex items-center justify-center" href="#services">
                        Explore Services
                    </a>
</div>
</div>
</main>

<section className="py-24 relative border-t border-white/5 bg-zinc-950/50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight text-center">Infrastructure for the AI era.</h2>
<p className="text-sm mt-4 text-zinc-500 text-center max-w-xl">Replace brittle, manual processes with robust, self-healing automated systems designed specificially for your business logic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl border border-white/5 bg-[#0c0c0e] hover:bg-[#121214] transition-colors duration-300">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-colors">
<iconify-icon className="text-xl text-zinc-300 group-hover:text-indigo-400 transition-colors" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">Autonomous Agents</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Custom LLM-powered agents that handle customer support, internal queries, and complex multistep tasks without human intervention.</p>
</div>

<div className="group relative p-8 rounded-3xl border border-white/5 bg-[#0c0c0e] hover:bg-[#121214] transition-colors duration-300">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
<iconify-icon className="text-xl text-zinc-300 group-hover:text-blue-400 transition-colors" icon="solar:git-branch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">Workflow Automation</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Connect your disparate software stack. We engineer seamless data pipelines and trigger-based actions across your CRM, ERP, and communication tools.</p>
</div>

<div className="group relative p-8 rounded-3xl border border-white/5 bg-[#0c0c0e] hover:bg-[#121214] transition-colors duration-300">
<div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-colors">
<iconify-icon className="text-xl text-zinc-300 group-hover:text-purple-400 transition-colors" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">Data Extraction &amp; Analysis</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Turn unstructured documents into actionable data. Automatically parse invoices, emails, and reports into clean formats ready for analytics.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight mb-16">How we deploy.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
<div className="relative">
<div className="text-8xl font-semibold text-white/5 absolute -top-10 -left-4 -z-10 select-none">01</div>
<h4 className="text-base font-semibold text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Audit &amp; Architect
                        </h4>
<p className="text-sm text-zinc-500 leading-relaxed">We analyze your current bottlenecks, map out existing workflows, and design an AI-first architecture tailored to your goals and tech stack.</p>
</div>
<div className="relative">
<div className="text-8xl font-semibold text-white/5 absolute -top-10 -left-4 -z-10 select-none">02</div>
<h4 className="text-base font-semibold text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Build &amp; Integrate
                        </h4>
<p className="text-sm text-zinc-500 leading-relaxed">Development of custom models, webhook integrations, and API connections. We build securely within a staging environment parallel to your operations.</p>
</div>
<div className="relative">
<div className="text-8xl font-semibold text-white/5 absolute -top-10 -left-4 -z-10 select-none">03</div>
<h4 className="text-base font-semibold text-zinc-100 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Deploy &amp; Iterate
                        </h4>
<p className="text-sm text-zinc-500 leading-relaxed">Smooth transition to production. We monitor performance, handle edge cases, and continuously refine the models based on real-world data.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-t-full pointer-events-none -z-10"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-zinc-100 tracking-tight mb-6">Stop managing tasks. <br/>Start managing outcomes.</h2>
<p className="text-base text-zinc-400 mb-10">Schedule a free 30-minute discovery call to see exactly how much time and money AI automation can save your business.</p>
<a className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 text-sm font-medium px-8 py-4 rounded-full hover:bg-zinc-300 transition-colors" href="#">
                    Book your technical audit
                    <iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<footer className="border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-zinc-100 text-base font-semibold tracking-tight">AIA.</span>
<span className="text-xs text-zinc-600">© 2024 AI Automation Inc.</span>
</div>
<div className="flex flex-wrap gap-6 text-xs text-zinc-500">
<button className="hover:text-zinc-300 transition-colors" onclick="showContact()">Contact Us</button>
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>
</div>





    </>
  );
}
