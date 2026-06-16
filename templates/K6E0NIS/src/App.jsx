import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();
    
    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl border-b bg-stone-100/40 border-stone-200/50" style={{}}>
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
<a className="flex items-center space-x-2 animate-fade-in" href="#">
<span className="text-xl tracking-tight font-geist font-light" style={{}}>NeuralFlow</span>
</a>
<nav className="hidden items-center space-x-8 text-sm font-medium md:flex animate-fade-in delay-100">
<a className="transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#about" style={{}}>Features</a>
<a className="transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#pricing" style={{}}>Pricing</a>
<a className="transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#solutions" style={{}}>Solutions</a>
<a className="transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#help" style={{}}>Support</a>
</nav>
<div className="hidden items-center space-x-3 md:flex animate-fade-in delay-200">
<a className="text-sm transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#" style={{}}>Sign in</a>
<a className="rounded-lg px-4 py-2 text-sm transition-all hover:shadow-lg text-stone-100 font-geist font-light bg-rose-500 hover:shadow-rose-500/25 hover:bg-rose-600" href="#" style={{}}>Get Started</a>
</div>

<button className="flex items-center justify-center md:hidden" id="mobileBtn">
<svg className="lucide lucide-menu h-6 w-6 text-stone-600" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
<div className="border-t backdrop-blur-xl px-4 py-6 md:hidden hidden border-stone-200/50 bg-stone-50/95" id="mobileMenu" style={{}}>
<nav className="space-y-4 text-sm font-medium">
<a className="block transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#about" style={{}}>Features</a>
<a className="block transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#pricing" style={{}}>Pricing</a>
<a className="block transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#solutions" style={{}}>Solutions</a>
<a className="block transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#help" style={{}}>Support</a>
<div className="border-t pt-4 border-stone-200" style={{}}>
<a className="block pb-3 transition-colors text-stone-600 font-geist font-light hover:text-rose-600" href="#" style={{}}>Sign in</a>
<a className="block rounded-lg px-4 py-2 text-center transition-all text-stone-100 font-geist font-light bg-rose-500 hover:bg-rose-600" href="#" style={{}}>Get Started</a>
</div>
</nav>
</div>
</header>

<section className="relative flex min-h-screen items-center pt-20 lg:pt-24">
<div className="absolute inset-0 bg-[url(https://cdn.midjourney.com/a55c302e-35a2-40d2-8ae8-1f2bc7f74192/0_0.png?w=800&amp;q=80)] bg-cover" style={{}}></div>
<div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-20 lg:px-8">
<div className="flex flex-col justify-center space-y-8">
<div className="animate-slide-up">
<div className="inline-flex items-center rounded-full px-3 py-1 text-xs ring-1 font-geist font-light bg-rose-500/10 ring-rose-500/20 text-rose-600" style={{}}>
<svg className="lucide lucide-sparkles mr-2 h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
            New: Advanced Neural Networks
          </div>
</div>
<h1 className="text-4xl tracking-tight sm:text-5xl lg:text-6xl animate-slide-up delay-100 font-geist font-bold" style={{}}>
          Next-Generation
          <span className="relative inline-flex items-center justify-center font-bold text-stone-100 font-geist bg-gradient-to-r rounded-2xl mr-2 ml-2 pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] to-rose-500 from-rose-600" style={{}}>
            AI Agents
          </span>
          That Actually Work
        </h1>
<p className="max-w-xl text-lg leading-relaxed animate-slide-up delay-200 text-stone-600 font-geist font-light" style={{}}>
          Deploy intelligent conversational agents that understand context, learn from interactions, and deliver exceptional customer experiences at scale.
        </p>
<div className="flex flex-col gap-4 sm:flex-row sm:items-center animate-slide-up delay-300">
<a className="inline-flex items-center justify-center transition-all hover:shadow-xl text-sm font-light text-stone-100 font-geist rounded-lg pt-3 pr-8 pb-3 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] hover:shadow-rose-500/25 hover:bg-rose-600 bg-rose-500" href="#" style={{}}>
            Start Building
            <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center text-sm transition-colors text-stone-700 font-geist font-light hover:text-rose-600" href="#learn" style={{}}>
<svg className="lucide lucide-play mr-2 h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
            Watch Demo
          </a>
</div>
</div>
<div className="relative flex justify-center animate-blur-in delay-400">
<div className="relative">
<div className="absolute -inset-1 rounded-3xl blur-xl" style={{}}></div>
<div className="relative overflow-hidden bg-stone-100 rounded-2xl pt-1 pr-1 pb-1 pl-1 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{}}>
<img alt="AI Neural Network" className="h-96 w-full rounded-2xl object-cover sm:h-[32rem]" src="https://cdn.midjourney.com/f65dc4b9-fb2e-4323-8a45-dc30cde7746d/0_2.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 rounded-3xl" style={{}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 animate-fade-in">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm uppercase tracking-wider text-stone-500 font-geist font-light" style={{}}>Trusted by industry leaders</p>
<div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-6">
<div className="flex justify-center text-lg text-stone-400 font-geist font-light" style={{}}>TechCorp</div>
<div className="flex justify-center text-lg text-stone-400 font-geist font-light" style={{}}>DataFlow</div>
<div className="flex justify-center text-lg text-stone-400 font-geist font-light" style={{}}>CloudSync</div>
<div className="flex justify-center text-lg text-stone-400 font-geist font-light" style={{}}>AutoScale</div>
<div className="flex justify-center text-lg text-stone-400 font-geist font-light" style={{}}>SmartBot</div>
<div className="flex justify-center text-lg text-stone-400 font-geist font-light" style={{}}>NeuralNet</div>
</div>
</div>
</section>

<section className="py-24" id="solutions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto mb-16 max-w-3xl text-center">
<h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl animate-slide-up font-geist font-bold" style={{}}>
          The Complete
          <span className="relative mx-2 inline-flex items-center rounded-2xl bg-gradient-to-r px-4 py-2 text-stone-100 font-geist font-bold to-rose-500 from-rose-600" style={{}}>
            AI Platform
          </span>
          For Modern Businesses
        </h2>
<p className="mt-6 text-lg animate-slide-up delay-100 text-stone-600 font-geist font-light" style={{}}>
          Build, deploy, and scale intelligent agents with our comprehensive suite of AI-powered tools and services.
        </p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="group relative overflow-hidden rounded-2xl p-8 ring-1 transition-all animate-slide-up delay-200 bg-stone-100/50 ring-stone-200 hover:bg-stone-100/80 hover:ring-rose-500/50" style={{}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-rose-500/10 group-hover:bg-rose-500/20 text-rose-600" style={{}}>
<svg className="lucide lucide-brain h-6 w-6" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
</div>
<h3 className="text-xl font-geist font-light" style={{}}>Advanced NLP</h3>
<p className="mt-4 leading-relaxed text-stone-600 font-geist font-light" style={{}}>
            Sophisticated language understanding powered by transformer models and contextual reasoning.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl p-8 ring-1 transition-all animate-slide-up delay-300 bg-stone-100/50 ring-stone-200 hover:bg-stone-100/80 hover:ring-rose-500/50" style={{}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-rose-500/10 group-hover:bg-rose-500/20 text-rose-600" style={{}}>
<svg className="lucide lucide-shield h-6 w-6" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-xl font-geist font-light" style={{}}>Enterprise Security</h3>
<p className="mt-4 leading-relaxed text-stone-600 font-geist font-light" style={{}}>
            Bank-grade encryption, SOC 2 compliance, and advanced threat protection for all interactions.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl p-8 ring-1 transition-all animate-slide-up delay-400 bg-stone-100/50 ring-stone-200 hover:bg-stone-100/80 hover:ring-rose-500/50" style={{}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-rose-500/10 group-hover:bg-rose-500/20 text-rose-600" style={{}}>
<svg className="lucide lucide-plug h-6 w-6" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
</div>
<h3 className="text-xl font-geist font-light" style={{}}>Seamless Integration</h3>
<p className="mt-4 leading-relaxed text-stone-600 font-geist font-light" style={{}}>
            Connect with your existing tools through REST APIs, webhooks, and pre-built connectors.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl p-8 ring-1 transition-all animate-slide-up delay-500 bg-stone-100/50 ring-stone-200 hover:bg-stone-100/80 hover:ring-rose-500/50" style={{}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-rose-500/10 group-hover:bg-rose-500/20 text-rose-600" style={{}}>
<svg className="lucide lucide-activity h-6 w-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-geist font-light" style={{}}>Real-Time Analytics</h3>
<p className="mt-4 leading-relaxed text-stone-600 font-geist font-light" style={{}}>
            Monitor performance, track conversations, and gain insights with comprehensive dashboards.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl p-8 ring-1 transition-all animate-slide-up delay-600 bg-stone-100/50 ring-stone-200 hover:bg-stone-100/80 hover:ring-rose-500/50" style={{}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-rose-500/10 group-hover:bg-rose-500/20 text-rose-600" style={{}}>
<svg className="lucide lucide-message-circle h-6 w-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<h3 className="text-xl font-geist font-light" style={{}}>Natural Conversations</h3>
<p className="mt-4 leading-relaxed text-stone-600 font-geist font-light" style={{}}>
            Human-like dialogue with emotional intelligence and context awareness for engaging interactions.
          </p>
</div>
<div className="group relative overflow-hidden rounded-2xl p-8 ring-1 transition-all animate-slide-up delay-700 bg-stone-100/50 ring-stone-200 hover:bg-stone-100/80 hover:ring-rose-500/50" style={{}}>
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors bg-rose-500/10 group-hover:bg-rose-500/20 text-rose-600" style={{}}>
<svg className="lucide lucide-trending-up h-6 w-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-geist font-light" style={{}}>Continuous Learning</h3>
<p className="mt-4 leading-relaxed text-stone-600 font-geist font-light" style={{}}>
            Machine learning algorithms that improve accuracy and performance with every interaction.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center animate-slide-up">
<h2 className="text-3xl tracking-tight sm:text-4xl font-geist font-bold" style={{}}>Choose Your Plan</h2>
<p className="mt-4 text-lg text-stone-600 font-geist font-light" style={{}}>Scale from startup to enterprise with flexible pricing</p>
</div>
<div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-3">

<div className="flex flex-col overflow-hidden rounded-2xl shadow-xl ring-1 animate-slide-up delay-200 bg-stone-100/50 ring-stone-200" style={{}}>
<div className="flex-1 p-8">
<h3 className="text-xl font-geist font-light" style={{}}>Starter</h3>
<div className="mt-6">
<span className="text-4xl font-geist font-bold" style={{}}>$49</span>
<span className="text-stone-600 font-geist font-light" style={{}}>/month</span>
</div>
<ul className="mt-8 space-y-4 text-sm">
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                5,000 conversations/month
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Basic analytics
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Email support
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                API access
              </li>
</ul>
</div>
<div className="p-8">
<button className="w-full rounded-lg px-6 py-3 text-sm transition-all bg-stone-200 hover:bg-stone-300 font-geist font-light" style={{}}>
              Get Started
            </button>
</div>
</div>

<div className="flex flex-col overflow-hidden rounded-2xl shadow-xl ring-2 animate-slide-up delay-300 bg-stone-100/50 ring-rose-500/60" style={{}}>
<div className="bg-gradient-to-r px-8 py-2 from-rose-500 to-rose-600" style={{}}>
<span className="text-sm text-stone-100 font-geist font-light" style={{}}>Most Popular</span>
</div>
<div className="flex-1 p-8">
<h3 className="text-xl font-geist font-light" style={{}}>Professional</h3>
<div className="mt-6">
<span className="text-4xl font-geist font-bold" style={{}}>$149</span>
<span className="text-stone-600 font-geist font-light" style={{}}>/month</span>
</div>
<ul className="mt-8 space-y-4 text-sm">
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                50,000 conversations/month
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Advanced analytics
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Priority support
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Custom integrations
              </li>
</ul>
</div>
<div className="p-8">
<button className="w-full rounded-lg px-6 py-3 text-sm transition-all hover:shadow-lg text-stone-100 font-geist font-light bg-rose-500 hover:shadow-rose-500/25 hover:bg-rose-600" style={{}}>
              Get Started
            </button>
</div>
</div>

<div className="flex flex-col overflow-hidden rounded-2xl shadow-xl ring-1 animate-slide-up delay-400 bg-stone-100/50 ring-stone-200" style={{}}>
<div className="flex-1 p-8">
<h3 className="text-xl font-geist font-light" style={{}}>Enterprise</h3>
<div className="mt-6">
<span className="text-4xl font-geist font-bold" style={{}}>Custom</span>
</div>
<ul className="mt-8 space-y-4 text-sm">
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Unlimited conversations
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Custom AI training
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                24/7 dedicated support
              </li>
<li className="flex items-center font-geist font-light" style={{}}>
<svg className="lucide lucide-check mr-3 h-4 w-4 text-amber-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                On-premise deployment
              </li>
</ul>
</div>
<div className="p-8">
<button className="w-full rounded-lg px-6 py-3 text-sm transition-all bg-stone-200 hover:bg-stone-300 font-geist font-light" style={{}}>
              Contact Sales
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="text-center animate-slide-up">
<h2 className="text-3xl tracking-tight sm:text-4xl font-geist font-bold" style={{}}>
          Loved by teams at
          <span className="relative mx-2 inline-flex items-center rounded-2xl bg-gradient-to-r px-4 py-2 text-stone-100 font-geist font-bold to-rose-500 from-rose-600" style={{}}>
            500+ companies
          </span>
</h2>
</div>
<div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl p-8 ring-1 animate-slide-up delay-200 bg-stone-100/50 ring-stone-200" style={{}}>
<div className="mt-6 flex items-center gap-3">
<img alt="Sarah Chen" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1581182830442-e8bc7babbf15?w=320&amp;q=80"/>
<div>
<div className="font-geist font-light" style={{}}>Sarah Chen</div>
<div className="text-sm text-stone-600 font-geist font-light" style={{}}>VP of Customer Success</div>
</div>
</div>
</div>
<div className="rounded-2xl p-8 ring-1 animate-slide-up delay-300 bg-stone-100/50 ring-stone-200" style={{}}>
<div className="mt-6 flex items-center gap-3">
<img alt="Marcus Thompson" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=800&amp;q=80"/>
<div>
<div className="font-geist font-light" style={{}}>Marcus Thompson</div>
<div className="text-sm text-stone-600 font-geist font-light" style={{}}>CTO</div>
</div>
</div>
</div>
<div className="rounded-2xl p-8 ring-1 animate-slide-up delay-400 bg-stone-100/50 ring-stone-200" style={{}}>
<div className="mt-6 flex items-center gap-3">
<img alt="Emma Rodriguez" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=320&amp;q=80"/>
<div>
<div className="font-geist font-light" style={{}}>Emma Rodriguez</div>
<div className="text-sm text-stone-600 font-geist font-light" style={{}}>Head of Operations</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-32">
<div className="absolute inset-0 bg-[url(https://cdn.midjourney.com/22a6de82-dcd6-448c-929f-36544594d981/0_0.png?w=800&amp;q=80)] bg-cover" style={{}}></div>
<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
<div className="animate-slide-up">
<h2 className="text-3xl tracking-tight sm:text-4xl lg:text-5xl font-geist font-bold" style={{}}>
          Ready to build the future of customer engagement?
        </h2>
<p className="mt-6 text-lg text-stone-600 font-geist font-light" style={{}}>
          Join thousands of companies already using NeuralFlow to create exceptional AI-powered experiences.
        </p>
<div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
<a className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-base shadow-lg transition-all hover:shadow-xl text-stone-100 font-geist font-light bg-rose-500 hover:shadow-rose-500/25 hover:bg-rose-600" href="#" style={{}}>
            Start Your Free Trial
            <svg className="lucide lucide-arrow-right ml-2 h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center rounded-lg border px-8 py-4 text-base transition-all border-stone-300 font-geist font-light hover:border-rose-500 hover:bg-rose-500/10" href="#" style={{}}>
            Schedule Demo
          </a>
</div>
</div>
</div>
</section>

<footer className="border-t py-16 border-stone-200 bg-stone-50/50" style={{}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
<div className="space-y-4">
<div className="flex items-center space-x-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br to-rose-500 from-rose-600" style={{}}>
<svg className="lucide lucide-brain-circuit h-4 w-4 text-stone-100" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<span className="text-xl font-geist font-light" style={{}}>NeuralFlow</span>
</div>
<p className="text-sm text-stone-600 font-geist font-light" style={{}}>
            Building the next generation of AI-powered customer experiences.
          </p>
</div>
<div className="space-y-3">
<h4 className="text-sm font-geist font-light" style={{}}>Product</h4>
<nav className="space-y-2 text-sm text-stone-600" style={{}}>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Features</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Pricing</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>API</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Documentation</a>
</nav>
</div>
<div className="space-y-3">
<h4 className="text-sm font-geist font-light" style={{}}>Company</h4>
<nav className="space-y-2 text-sm text-stone-600" style={{}}>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>About</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Blog</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Careers</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Contact</a>
</nav>
</div>
<div className="space-y-3">
<h4 className="text-sm font-geist font-light" style={{}}>Support</h4>
<nav className="space-y-2 text-sm text-stone-600" style={{}}>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Help Center</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Community</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Status</a>
<a className="block transition-colors font-geist font-light hover:text-rose-600" href="#" style={{}}>Privacy</a>
</nav>
</div>
</div>
<div className="mt-12 border-t pt-8 text-center text-sm border-stone-200 text-stone-600" style={{}}>
<p className="font-geist font-light" style={{}}>© 2024 NeuralFlow. All rights reserved.</p>
</div>
</div>
</footer>




    </>
  );
}
