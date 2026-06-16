import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Smooth scroll for anchor links
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
<span className="text-sm font-semibold text-neutral-950 tracking-tight">SP</span>
</div>
<span className="text-lg font-semibold tracking-tight">Sunlight Point</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#results">Results</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="bg-gradient-to-r from-amber-400 to-orange-500 text-neutral-950 text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity" href="#book">
                Book a Call
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
<div className="relative max-w-5xl mx-auto px-6 text-center py-20">
<div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
<span className="text-sm text-neutral-300">Now accepting 3 new clients for January</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight mb-6">
                AI websites that turn<br/>
<span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">visitors into revenue</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                We build intelligent websites that work 24/7 to capture leads, automate your sales process, and grow your business on autopilot.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-orange-500 text-neutral-950 font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2" href="#book">
                    Book Your Free Strategy Call
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full sm:w-auto text-neutral-300 font-medium px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#results">
<span className="iconify" data-icon="lucide:play" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    See Our Results
                </a>
</div>

<div className="flex flex-col items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-neutral-950 flex items-center justify-center text-xs font-medium">JD</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-neutral-950 flex items-center justify-center text-xs font-medium">MK</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-neutral-950 flex items-center justify-center text-xs font-medium">RS</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-neutral-950 flex items-center justify-center text-xs font-medium">AL</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 border-2 border-neutral-950 flex items-center justify-center text-xs font-medium">+47</div>
</div>
<p className="text-sm text-neutral-400">Trusted by <span className="text-white font-medium">50+ businesses</span> generating $2M+ in revenue</p>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-neutral-500 mb-10">Trusted by forward-thinking companies</p>
<div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
<span className="text-xl font-semibold tracking-tight">Nexus</span>
<span className="text-xl font-semibold tracking-tight">Velocity</span>
<span className="text-xl font-semibold tracking-tight">Prism</span>
<span className="text-xl font-semibold tracking-tight">Quantum</span>
<span className="text-xl font-semibold tracking-tight">Horizon</span>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                Your website should be your best salesperson
            </h2>
<p className="text-lg text-neutral-400 mb-12">
                Most business websites are digital brochures. They look nice but don't convert. You're leaving money on the table every single day.
            </p>
<div className="grid md:grid-cols-3 gap-6 text-left">
<div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
<span className="iconify text-red-400 mb-4" data-icon="lucide:x-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
<h3 className="font-medium mb-2">Low Conversion Rates</h3>
<p className="text-sm text-neutral-400">Visitors leave without taking action because there's no intelligent engagement</p>
</div>
<div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
<span className="iconify text-red-400 mb-4" data-icon="lucide:clock" data-width="24" style={{strokeWidth: '1.5'}}></span>
<h3 className="font-medium mb-2">Manual Follow-ups</h3>
<p className="text-sm text-neutral-400">You're spending hours on tasks that could be automated</p>
</div>
<div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
<span className="iconify text-red-400 mb-4" data-icon="lucide:trending-down" data-width="24" style={{strokeWidth: '1.5'}}></span>
<h3 className="font-medium mb-2">Missed Opportunities</h3>
<p className="text-sm text-neutral-400">Leads go cold while you sleep because no one's there to respond</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-neutral-900/50 to-transparent" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-amber-400 text-sm font-medium mb-4">WHAT WE BUILD</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Websites that work while you sleep
                </h2>
<p className="text-neutral-400 max-w-2xl mx-auto">
                    Every feature is designed with one goal: turning your website into a revenue-generating machine.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<span className="iconify text-amber-400" data-icon="lucide:bot" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">AI Chat Assistants</h3>
<p className="text-sm text-neutral-400 leading-relaxed">24/7 intelligent chatbots that qualify leads, answer questions, and book appointments automatically.</p>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<span className="iconify text-amber-400" data-icon="lucide:zap" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">Smart Lead Capture</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Intelligent forms and popups that appear at the perfect moment to maximize conversions.</p>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<span className="iconify text-amber-400" data-icon="lucide:mail" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">Automated Follow-ups</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Email and SMS sequences that nurture leads until they're ready to buy.</p>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<span className="iconify text-amber-400" data-icon="lucide:calendar" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">Booking Integration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Seamless calendar integration that lets prospects book calls without the back-and-forth.</p>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<span className="iconify text-amber-400" data-icon="lucide:bar-chart-3" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">Analytics Dashboard</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Real-time insights into visitor behavior, conversion rates, and revenue attribution.</p>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<span className="iconify text-amber-400" data-icon="lucide:sparkles" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium mb-3">Personalization Engine</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Dynamic content that adapts to each visitor based on their behavior and preferences.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-amber-400 text-sm font-medium mb-4">HOW IT WORKS</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    From strategy call to launch in 3 weeks
                </h2>
<p className="text-neutral-400">A streamlined process designed to get you results fast.</p>
</div>
<div className="relative">
<div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 to-transparent hidden md:block"></div>
<div className="space-y-12">
<div className="flex gap-8 items-start">
<div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-semibold text-neutral-950">1</div>
<div className="pt-2">
<h3 className="text-xl font-medium mb-2">Strategy Call</h3>
<p className="text-neutral-400">We analyze your business, understand your goals, and create a custom roadmap for your AI-powered website.</p>
</div>
</div>
<div className="flex gap-8 items-start">
<div className="w-16 h-16 bg-neutral-800 border border-amber-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-medium">2</div>
<div className="pt-2">
<h3 className="text-xl font-medium mb-2">Design &amp; Build</h3>
<p className="text-neutral-400">Our team designs and develops your website with all AI features integrated and tested.</p>
</div>
</div>
<div className="flex gap-8 items-start">
<div className="w-16 h-16 bg-neutral-800 border border-amber-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl font-medium">3</div>
<div className="pt-2">
<h3 className="text-xl font-medium mb-2">Launch &amp; Optimize</h3>
<p className="text-neutral-400">We launch your site, monitor performance, and continuously optimize for better results.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-neutral-900/50 to-transparent" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-amber-400 text-sm font-medium mb-4">REAL RESULTS</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Numbers that speak for themselves
                </h2>
</div>
<div className="grid md:grid-cols-4 gap-8 mb-20">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">347%</div>
<p className="text-sm text-neutral-400">Average increase in lead generation</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">$2.1M</div>
<p className="text-sm text-neutral-400">Revenue generated for clients</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">89%</div>
<p className="text-sm text-neutral-400">Reduction in manual tasks</p>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">24/7</div>
<p className="text-sm text-neutral-400">Lead capture &amp; qualification</p>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-neutral-300 mb-6">"Our new website generated more qualified leads in the first month than our old site did in a year. The AI chatbot alone has booked 50+ calls."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-xs font-medium">JD</div>
<div>
<p className="font-medium text-sm">James Davidson</p>
<p className="text-xs text-neutral-500">CEO, Nexus Consulting</p>
</div>
</div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-neutral-300 mb-6">"I used to spend 3 hours a day on follow-ups. Now everything is automated and I can focus on closing deals. Best investment I've made."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-xs font-medium">SK</div>
<div>
<p className="font-medium text-sm">Sarah Kim</p>
<p className="text-xs text-neutral-500">Founder, Velocity Marketing</p>
</div>
</div>
</div>
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-amber-400" data-icon="lucide:star" data-width="18" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-neutral-300 mb-6">"The ROI was immediate. Within 2 weeks of launch, we closed a $50k deal that came directly through the AI chat. It paid for itself 10x over."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-xs font-medium">MR</div>
<div>
<p className="font-medium text-sm">Michael Roberts</p>
<p className="text-xs text-neutral-500">Director, Prism Solutions</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-amber-400 text-sm font-medium mb-4">INVESTMENT</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                    Simple, transparent pricing
                </h2>
<p className="text-neutral-400">Choose the package that fits your growth stage.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8">
<h3 className="text-lg font-medium mb-2">Growth</h3>
<p className="text-sm text-neutral-400 mb-6">Perfect for businesses ready to scale</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$4,997</span>
<span className="text-neutral-500 ml-2">one-time</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Custom AI-powered website
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            AI chatbot integration
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Lead capture system
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Booking integration
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            30-day support
                        </li>
</ul>
<a className="block w-full text-center border border-white/10 text-white font-medium py-3 rounded-full hover:bg-white/5 transition-colors" href="#book">
                        Get Started
                    </a>
</div>
<div className="relative bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/30 rounded-2xl p-8">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-neutral-950 text-xs font-medium px-4 py-1 rounded-full">
                        MOST POPULAR
                    </div>
<h3 className="text-lg font-medium mb-2">Scale</h3>
<p className="text-sm text-neutral-400 mb-6">For businesses serious about automation</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$9,997</span>
<span className="text-neutral-500 ml-2">one-time</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Everything in Growth
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Advanced AI personalization
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Email/SMS automation
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            CRM integration
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            Analytics dashboard
                        </li>
<li className="flex items-center gap-3 text-sm">
<span className="iconify text-green-400" data-icon="lucide:check" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            90-day priority support
                        </li>
</ul>
<a className="block w-full text-center bg-gradient-to-r from-amber-400 to-orange-500 text-neutral-950 font-medium py-3 rounded-full hover:opacity-90 transition-opacity" href="#book">
                        Get Started
                    </a>
</div>
</div>
<p className="text-center text-sm text-neutral-500 mt-8">
                Need a custom solution? <a className="text-amber-400 hover:underline" href="#book">Book a call</a> to discuss enterprise options.
            </p>
</div>
</section>

<section className="py-24" id="book">
<div className="max-w-4xl mx-auto px-6">
<div className="relative bg-gradient-to-b from-amber-500/20 to-transparent border border-amber-500/30 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5"></div>
<div className="relative">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        Ready to turn your website into a revenue machine?
                    </h2>
<p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
                        Book a free 30-minute strategy call. We'll analyze your current website, identify opportunities, and show you exactly how AI can grow your business.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-orange-500 text-neutral-950 font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2" href="#">
<span className="iconify" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Book Your Free Strategy Call
                        </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            No obligation
                        </div>
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            30-minute call
                        </div>
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Custom roadmap included
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-12">
                Frequently asked questions
            </h2>
<div className="space-y-4">
<details className="group bg-neutral-900/50 border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium">How long does it take to build my website?</span>
<span className="iconify text-neutral-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm">
                        Most projects are completed within 2-3 weeks from kickoff. This includes design, development, AI integration, and testing. Complex projects may take 4-6 weeks.
                    </div>
</details>
<details className="group bg-neutral-900/50 border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium">What AI features are included?</span>
<span className="iconify text-neutral-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm">
                        Our websites include AI chatbots, smart lead capture, personalization engines, and automated follow-up sequences. The exact features depend on your package and business needs.
                    </div>
</details>
<details className="group bg-neutral-900/50 border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium">Do I need technical skills to manage the website?</span>
<span className="iconify text-neutral-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm">
                        Not at all. We build websites with user-friendly dashboards where you can manage content, view analytics, and adjust settings without any coding knowledge.
                    </div>
</details>
<details className="group bg-neutral-900/50 border border-white/5 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer">
<span className="font-medium">What kind of results can I expect?</span>
<span className="iconify text-neutral-400 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</summary>
<div className="px-6 pb-6 text-neutral-400 text-sm">
                        Our clients typically see a 200-400% increase in lead generation and significant time savings from automation. Results vary based on your industry and traffic levels.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
<span className="text-sm font-semibold text-neutral-950 tracking-tight">SP</span>
</div>
<span className="font-semibold tracking-tight">Sunlight Point</span>
</div>
<div className="flex items-center gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-sm text-neutral-500">© 2024 Sunlight Point. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
