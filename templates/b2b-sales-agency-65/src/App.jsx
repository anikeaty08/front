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
display: ['Satoshi', 'sans-serif'],
},
colors: {
brand: {
50: '#f2f8fc',
100: '#e1eff8',
500: '#0f172a', // Deep slate/navy
600: '#020617', // Nearly black
900: '#000000',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple Fade In Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-slide-up');
                    entry.target.style.opacity = "1";
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Select elements to animate
        document.querySelectorAll('section h2, section p, .group').forEach((el) => {
            // Add initial state
            el.style.opacity = "0";
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-100 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center font-display font-bold text-lg rounded-lg group-hover:bg-slate-800 transition-colors">S</div>
<span className="font-display font-bold text-lg tracking-tight text-slate-900">SELLENCE</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#problem">The Problem</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#process">Methodology</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pricing">30-Day Pilot</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#contact">
                    Log in
                </a>
<a className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-slate-900 text-white text-sm font-medium transition-all hover:bg-slate-800 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" href="#contact">
                    Book Diagnostic
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 opacity-0 animate-slide-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Accepting Pilot Partners for Q4</span>
</div>
<h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-slate-900 leading-[1.1] mb-8 opacity-0 animate-slide-up delay-100">
                    B2B Sales Execution <br className="hidden sm:block"/>
<span className="text-slate-500">That Generates Revenue.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up delay-200 font-light">
                    We build and operate high-performance sales systems for B2B companies. 
                    Scale your revenue without hiring, training, or managing an internal team.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up delay-300">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg bg-slate-900 text-white text-base font-semibold transition-transform active:scale-95 hover:bg-slate-800 shadow-lg shadow-slate-900/20" href="#pricing">
                        Start a 30-Day Pilot
                        <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-lg border border-slate-200 bg-white text-slate-900 text-base font-semibold transition-colors hover:bg-slate-50 hover:border-slate-300" href="#contact">
                        Book Diagnostic Call
                    </a>
</div>
<div className="mt-12 flex items-center justify-center gap-8 opacity-0 animate-fade-in delay-300">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i>
<span className="text-sm font-medium text-slate-600">Fully Managed Execution</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-slate-900" data-lucide="check-circle-2"></i>
<span className="text-sm font-medium text-slate-600">Metric-Driven Results</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</header>

<section className="py-12 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by innovative B2B Tech Companies</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center justify-center gap-2 font-display font-bold text-xl text-slate-800">
<div className="w-6 h-6 bg-slate-800 rounded"></div> Acme Corp
                </div>
<div className="flex items-center justify-center gap-2 font-display font-bold text-xl text-slate-800">
<div className="w-6 h-6 border-2 border-slate-800 rounded-full"></div> Nexus
                </div>
<div className="flex items-center justify-center gap-2 font-display font-bold text-xl text-slate-800">
<div className="w-6 h-6 bg-slate-800 rotate-45"></div> Vertex
                </div>
<div className="flex items-center justify-center gap-2 font-display font-bold text-xl text-slate-800">
<div className="w-6 h-6 border-2 border-slate-800"></div> Spherix
                </div>
<div className="hidden lg:flex items-center justify-center gap-2 font-display font-bold text-xl text-slate-800">
<div className="w-6 h-6 bg-slate-800 rounded-tr-xl"></div> Linear
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="problem">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
                        Why internal sales teams <br/> fail to launch.
                    </h2>
<p className="text-slate-600 text-lg leading-relaxed mb-8">
                        Founders and Sales Directors often face a "Growth Trap." You need revenue to hire, but you need to hire to get revenue. Building an internal team is slow, expensive, and unpredictable.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="trending-down"></i>
</div>
<div>
<h3 className="font-semibold text-slate-900">High Overhead &amp; Risk</h3>
<p className="text-sm text-slate-500 mt-1">Hiring SDRs, AEs, and Sales Managers costs $200k+ annually before a single deal is closed.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="hourglass"></i>
</div>
<div>
<h3 className="font-semibold text-slate-900">Slow Ramp-Up Time</h3>
<p className="text-sm text-slate-500 mt-1">It takes 3-6 months to onboard and train reps. You lose critical market momentum.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-red-600" data-lucide="alert-circle"></i>
</div>
<div>
<h3 className="font-semibold text-slate-900">Lack of Systems</h3>
<p className="text-sm text-slate-500 mt-1">Without a proven playbook, new hires burn leads and fail to convert pipeline.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
<div className="absolute -top-4 -right-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg transform rotate-3">
                        The SELLENCE Solution
                    </div>
<h3 className="font-display font-bold text-2xl text-slate-900 mb-2">The External Sales Engine</h3>
<p className="text-slate-500 mb-8">Ready-to-run sales operations deployed in days.</p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-sm font-medium text-slate-700">Lead Research &amp; Qualification</span>
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-sm font-medium text-slate-700">Multi-channel Outreach</span>
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-sm font-medium text-slate-700">Sales Calls &amp; Demos</span>
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-sm font-medium text-slate-700">Pipeline Management</span>
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
</div>
<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-sm font-medium text-slate-700">Closing &amp; Negotiation</span>
<i className="w-4 h-4 text-slate-900" data-lucide="check"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
                    We Sell. You Scale.
                </h2>
<p className="text-slate-600">
                    Our proven 4-step framework transforms your sales function from a liability into a predictable revenue asset.
                </p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

<div className="bg-white group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-slate-900 transition-colors relative">
<span className="absolute top-2 right-3 text-xs font-bold text-slate-300">01</span>
<i className="w-8 h-8 text-slate-700 group-hover:text-slate-900" data-lucide="microscope"></i>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">Diagnose</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We analyze your offer, market fit, and current sales assets. We identify bottlenecks and build the strategy.
                        </p>
</div>

<div className="bg-white group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-slate-900 transition-colors relative">
<span className="absolute top-2 right-3 text-xs font-bold text-slate-300">02</span>
<i className="w-8 h-8 text-slate-700 group-hover:text-slate-900" data-lucide="rocket"></i>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">Pilot (30 Days)</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We launch a rapid-test campaign. We validate messaging, set up systems, and start generating initial meetings.
                        </p>
</div>

<div className="bg-white group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-slate-900 transition-colors relative">
<span className="absolute top-2 right-3 text-xs font-bold text-slate-300">03</span>
<i className="w-8 h-8 text-slate-700 group-hover:text-slate-900" data-lucide="bar-chart-3"></i>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">Execute &amp; Measure</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Full throttle execution. Lead gen, calls, and closing. Weekly KPI reports provide total transparency.
                        </p>
</div>

<div className="bg-white group">
<div className="w-24 h-24 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-slate-900 transition-colors relative">
<span className="absolute top-2 right-3 text-xs font-bold text-slate-300">04</span>
<i className="w-8 h-8 text-slate-700 group-hover:text-slate-900" data-lucide="layers"></i>
</div>
<h3 className="font-bold text-lg text-slate-900 mb-2">Scale</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            We double down on what converts. We optimize the funnel and increase volume for predictable growth.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-2">
                        Comprehensive Sales Solutions
                    </h2>
<p className="text-slate-600">Everything you need to close deals, under one roof.</p>
</div>
<a className="text-slate-900 font-medium hover:text-slate-600 flex items-center gap-2" href="#contact">
                    Discuss your needs <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<i className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" data-lucide="target"></i>
</div>
<h3 className="font-display font-bold text-xl text-slate-900 mb-3">Sales Execution</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Complete end-to-end sales management. We act as your outbound team.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Lead Qualification
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Outbound Campaigns
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Sales Calls &amp; Demos
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Closing
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<i className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" data-lucide="settings-2"></i>
</div>
<h3 className="font-display font-bold text-xl text-slate-900 mb-3">Sales Systems</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        The infrastructure required to track, measure, and optimize revenue.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> CRM Architecture
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Pipeline Management
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Automated Follow-ups
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Performance Dashboards
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
<i className="w-6 h-6 text-slate-900 group-hover:text-white transition-colors" data-lucide="globe-2"></i>
</div>
<h3 className="font-display font-bold text-xl text-slate-900 mb-3">Market Entry</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        Validate new markets or regions with low risk and high speed.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Region Testing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Offer Validation
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Pilot Campaigns
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700">
<div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Go-to-Market Strategy
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="pricing">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-6">
                        Start with a 30-Day Pilot. <br/>
<span className="text-slate-400">Scale on results.</span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                        We don't believe in long-term lock-ins before proving value. Our pilot engagement is designed to validate the system and generate initial opportunities.
                    </p>
<div className="flex flex-col gap-4 mb-8">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<div>
<h4 className="font-semibold text-white">Low Monthly Retainer</h4>
<p className="text-sm text-slate-400">Covers operational costs and tech stack.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<div>
<h4 className="font-semibold text-white">Performance Commission</h4>
<p className="text-sm text-slate-400">We earn when you close. Success-aligned incentives.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<div>
<h4 className="font-semibold text-white">No Long-Term Contracts</h4>
<p className="text-sm text-slate-400">Month-to-month flexibility. Cancel anytime.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl">
<h3 className="text-xl font-bold mb-6">What's included in the Pilot:</h3>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
<i className="w-5 h-5 text-slate-400" data-lucide="search"></i>
<span className="text-slate-200">Total Addressable Market Analysis</span>
</div>
<div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
<i className="w-5 h-5 text-slate-400" data-lucide="message-square"></i>
<span className="text-slate-200">Messaging Framework &amp; Scripting</span>
</div>
<div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
<i className="w-5 h-5 text-slate-400" data-lucide="send"></i>
<span className="text-slate-200">Multi-Channel Outreach (Email, LinkedIn, Phone)</span>
</div>
<div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
<i className="w-5 h-5 text-slate-400" data-lucide="calendar-check"></i>
<span className="text-slate-200">Sales Meetings &amp; Qualifying Calls</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="file-bar-chart"></i>
<span className="text-slate-200">Weekly Performance Reporting</span>
</div>
</div>
<a className="w-full inline-flex items-center justify-center h-12 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors" href="#contact">
                        Apply for Pilot Program
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-8">
                Execution Over Theory.
            </h2>
<p className="text-lg text-slate-600 leading-relaxed mb-8">
                SELLENCE was built for one reason: most B2B companies struggle to execute sales. Consultants give you slides; we give you revenue. We are a team of senior sales operators, not advisors. We integrate with your company to become your primary revenue engine.
            </p>
<div className="inline-flex items-center justify-center w-full h-px bg-slate-100 my-8"></div>
<div className="flex justify-center gap-12">
<div className="text-center">
<div className="text-4xl font-bold font-display text-slate-900 mb-1">15+</div>
<div className="text-xs uppercase tracking-widest text-slate-500">Markets Entered</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold font-display text-slate-900 mb-1">$40M+</div>
<div className="text-xs uppercase tracking-widest text-slate-500">Pipeline Generated</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold font-display text-slate-900 mb-1">3x</div>
<div className="text-xs uppercase tracking-widest text-slate-500">Avg ROI</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-6">
                        Diagnose Your Sales in 15 Minutes.
                    </h2>
<p className="text-slate-600 mb-8">
                        Book a free diagnostic call. We'll audit your current sales process, identify the leaks, and show you exactly how SELLENCE can scale your revenue.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-slate-700">
<i className="w-5 h-5" data-lucide="mail"></i>
<span>hello@sellence.com</span>
</div>
<div className="flex items-center gap-4 text-slate-700">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span>London, UK (Serving Global)</span>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="first-name">First Name</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow text-sm" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="last-name">Last Name</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow text-sm" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="company">Company Name</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow text-sm" id="company" placeholder="Acme Inc." type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="email">Work Email</label>
<input className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow text-sm" id="email" placeholder="jane@acme.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-900" htmlFor="challenge">Biggest Sales Challenge</label>
<div className="relative">
<select className="w-full h-10 px-3 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow text-sm bg-white appearance-none cursor-pointer" id="challenge">
<option disabled="" selected="" value="">Select an option</option>
<option value="lead-gen">Not enough leads</option>
<option value="closing">Low conversion/closing rate</option>
<option value="hiring">Struggling to hire sales team</option>
<option value="market-entry">Entering new market</option>
</select>
<i className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full h-12 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 mt-2" type="submit">
                            Book Diagnostic Call
                        </button>
<p className="text-xs text-center text-slate-400 mt-4">
                            By submitting, you agree to our privacy policy. No spam.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 text-white flex items-center justify-center font-display font-bold text-xs rounded">S</div>
<span className="font-display font-bold text-slate-900">SELLENCE</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-sm text-slate-400">
                © 2024 SELLENCE. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
