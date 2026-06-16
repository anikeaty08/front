import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
            const menu = document.getElementById('navbar-sticky');
            
            toggleBtn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
                toggleBtn.setAttribute('aria-expanded', !isExpanded);
            });
            
            // Close menu when clicking a link
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if(!menu.classList.contains('hidden')) {
                        menu.classList.add('hidden');
                        toggleBtn.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b backdrop-blur-md border-blue-200 bg-white/80">
<div className="flex flex-wrap max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-3 rtl:space-x-reverse" href="#">

<div className="flex items-center justify-center">
<svg className="" fill="none" height="32" viewbox="0 0 50 32" width="40" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="logo_grad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#2563eb', stopOpacity: '1'}}></stop>
</lineargradient>
<lineargradient id="logo_grad_dark" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#1e40af', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path d="M14 26C10 26 5 22 5 16C5 10 10 6 16 8C20 9 22 14 24 16" stroke="url(#logo_grad)" strokeLinecap="round" strokeWidth="6"></path>

<path d="M24 16L34 6C40 0 45 5 45 12C45 22 36 26 36 26" stroke="url(#logo_grad)" strokeLinecap="round" strokeWidth="6"></path>

<path d="M12 24L36 6" stroke="url(#logo_grad)" strokeLinecap="round" stroke-opacity="0.8" strokeWidth="5"></path>

<path d="M14 26C12 26 10 24 10 20" fill="none" opacity="0.5" stroke="url(#logo_grad_dark)" strokeWidth="2"></path>
</svg>
</div>
<span className="self-center whitespace-nowrap text-lg font-semibold text-blue-900 tracking-tight">TrustLight</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all duration-300 text-white bg-blue-900 hover:bg-blue-800" href="#contact">
                    Schedule Readiness Call
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-200 hover:bg-blue-100" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent border-blue-100 bg-blue-50">
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-cyan-600 md:p-0 transition-colors text-blue-900 hover:bg-blue-100" href="#services">Services</a>
</li>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-cyan-600 md:p-0 transition-colors text-blue-900 hover:bg-blue-100" href="#industries">Industries</a>
</li>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-cyan-600 md:p-0 transition-colors text-blue-900 hover:bg-blue-100" href="#approach">Approach</a>
</li>
<li className="">
<a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-cyan-600 md:p-0 transition-colors text-blue-900 hover:bg-blue-100" href="#about">About</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-blue-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-cyan-50 border-cyan-100 text-cyan-700">
<span className="flex h-2 w-2 rounded-full bg-cyan-600"></span>
                Now accepting new consultancy partners for Q4
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.1] text-blue-900">
                Practical AI. Real Workflows.<br/>
<span className="text-blue-500">Real Results.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-blue-500 max-w-2xl mr-auto mb-10 ml-auto">
                We help attorneys, engineering firms, and operations-heavy businesses adopt artificial intelligence safely. No sci-fi hype—just engineered efficiency and better margins.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium rounded-lg focus:ring-4 focus:ring-blue-300 transition-all shadow-sm text-white bg-blue-900 hover:bg-blue-800" href="#contact">
                    Schedule an AI Readiness Call
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium border rounded-lg transition-all shadow-sm text-blue-700 bg-white border-blue-200 hover:bg-blue-50 hover:text-blue-900" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-blue-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest mb-8 text-blue-400">Trusted by forward-thinking firms in</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex justify-center items-center gap-2">
<iconify-icon className="text-blue-800" icon="lucide:scale" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-blue-800">LexStandard</span>
</div>
<div className="flex justify-center items-center gap-2">
<iconify-icon className="text-blue-800" icon="lucide:building-2" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-blue-800">Apex Build</span>
</div>
<div className="flex justify-center items-center gap-2">
<iconify-icon className="text-blue-800" icon="lucide:briefcase" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-blue-800">Kensington Partners</span>
</div>
<div className="flex justify-center items-center gap-2">
<iconify-icon className="text-blue-800" icon="lucide:truck" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-blue-800">Global Logistics</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-blue-900">Engineered for Impact</h2>
<p className="text-blue-500 max-w-2xl text-lg">We don't sell tools; we solve business problems. Our services are designed to bridge the gap between complex operations and modern AI capabilities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl border shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 bg-white border-blue-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors bg-cyan-50 text-cyan-600">
<iconify-icon height="24" icon="lucide:radar" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-blue-900">AI Readiness &amp; Strategy</h3>
<p className="text-blue-500 text-sm leading-relaxed mb-4">
                        We audit your data infrastructure and workflows to identify high-leverage opportunities for AI, ensuring you only invest where ROI is clear.
                    </p>
</div>

<div className="group p-8 rounded-xl border shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 bg-white border-blue-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors bg-cyan-50 text-cyan-600">
<iconify-icon height="24" icon="lucide:workflow" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-blue-900">Workflow Automation</h3>
<p className="text-blue-500 text-sm leading-relaxed mb-4">
                        Connect disjointed systems and automate repetitive document handling, allowing your high-value staff to focus on decision-making, not data entry.
                    </p>
</div>

<div className="group p-8 rounded-xl border shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 bg-white border-blue-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors bg-cyan-50 text-cyan-600">
<iconify-icon height="24" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-blue-900">Industry-Specific Solutions</h3>
<p className="text-blue-500 text-sm leading-relaxed mb-4">
                        Custom LLM deployments tuned for legal discovery, construction bid analysis, or regulatory compliance checking. Safe, private, and accurate.
                    </p>
</div>

<div className="group p-8 rounded-xl border shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 bg-white border-blue-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors bg-cyan-50 text-cyan-600">
<iconify-icon height="24" icon="lucide:trending-up" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-blue-900">AI-Powered Growth</h3>
<p className="text-blue-500 text-sm leading-relaxed mb-4">
                        Modernize your go-to-market strategy using data-driven insights to target the right clients and automate personalized outreach at scale.
                    </p>
</div>

<div className="group p-8 rounded-xl border shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 bg-white border-blue-200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors bg-cyan-50 text-cyan-600">
<iconify-icon height="24" icon="lucide:graduation-cap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 text-blue-900">Enablement &amp; Training</h3>
<p className="text-blue-500 text-sm leading-relaxed mb-4">
                        Technology fails without adoption. We train your teams on prompting, ethical usage, and new workflows to ensure lasting change.
                    </p>
</div>

<div className="group p-8 rounded-xl border shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-center items-center text-center bg-white border-blue-200">
<h3 className="text-lg font-medium mb-2 text-blue-900">Unsure where to start?</h3>
<p className="text-blue-500 text-sm mb-6">Let's discuss your biggest operational bottleneck.</p>
<a className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-cyan-600 hover:text-cyan-700" href="#contact">
                        Book a discovery call <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-blue-900 text-white" id="industries">

<div className="absolute top-0 right-0 w-1/3 h-full skew-x-12 pointer-events-none bg-blue-800/20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Designed for High-Trust Industries</h2>
<p className="text-lg mb-8 leading-relaxed text-blue-400">
                        Generic AI tools are often insufficient for sectors where accuracy, privacy, and compliance are non-negotiable. We build systems that respect the gravity of your work.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-cyan-500" height="24" icon="lucide:scale" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-blue-100">Legal &amp; Attorneys</h4>
<p className="text-sm text-blue-400">Automate contract review, summarize case files, and extract precedents from massive discovery datasets without compromising client privilege.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-cyan-500" height="24" icon="lucide:hard-hat" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-blue-100">Construction &amp; Engineering</h4>
<p className="text-sm text-blue-400">Analyze RFPs faster, optimize supply chain ordering, and manage project documentation to reduce costly overruns.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-cyan-500" height="24" icon="lucide:users" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-2 text-blue-100">Professional Services</h4>
<p className="text-sm text-blue-400">Streamline client onboarding, report generation, and internal knowledge management to increase billable efficiency.</p>
</div>
</div>
</div>
</div>
<div className="border rounded-2xl p-8 backdrop-blur-sm bg-blue-800/50 border-blue-700">

<div className="flex flex-col gap-4">
<div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider mb-2 text-blue-400">
<span>Document Ingestion Workflow</span>
<span className="text-cyan-400">Live</span>
</div>
<div className="border p-4 rounded-lg flex items-center gap-4 bg-blue-900 border-blue-700">
<div className="w-8 h-8 rounded flex items-center justify-center bg-yellow-900/50 text-yellow-400">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-24 rounded mb-2 bg-blue-700"></div>
<div className="h-1.5 w-16 rounded bg-blue-800"></div>
</div>
<iconify-icon className="text-green-500" icon="lucide:check-circle" width="16"></iconify-icon>
</div>
<div className="flex justify-center">
<iconify-icon className="text-blue-600" icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
<div className="border border-cyan-500/30 p-4 rounded-lg flex items-center gap-4 relative overflow-hidden bg-blue-900">
<div className="absolute inset-0 bg-cyan-500/5"></div>
<div className="w-8 h-8 rounded flex items-center justify-center relative z-10 bg-cyan-900/50 text-cyan-400">
<iconify-icon icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<div className="flex-1 relative z-10">
<div className="h-2 w-32 rounded mb-2 bg-blue-600"></div>
<div className="h-1.5 w-24 rounded bg-blue-700"></div>
</div>
<span className="text-xs px-2 py-1 rounded relative z-10 bg-cyan-900/50 text-cyan-300">AI Processing</span>
</div>
<div className="flex justify-center">
<iconify-icon className="text-blue-600" icon="lucide:arrow-down" width="16"></iconify-icon>
</div>
<div className="border p-4 rounded-lg flex items-center gap-4 bg-blue-900 border-blue-700">
<div className="w-8 h-8 rounded flex items-center justify-center bg-green-900/50 text-green-400">
<iconify-icon icon="lucide:database" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-20 rounded mb-2 bg-blue-700"></div>
<div className="h-1.5 w-12 rounded bg-blue-800"></div>
</div>
<iconify-icon className="text-green-500" icon="lucide:check-circle" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-blue-900">The Trustlight Methodology</h2>
<p className="text-blue-500 max-w-2xl mx-auto">We strip away the complexity. Our process is transparent, iterative, and focused on tangible outcomes.</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0 bg-blue-100"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">

<div className="p-6 border rounded-lg transition-colors bg-white border-blue-200 hover:border-blue-300">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-md bg-blue-900 text-white">01</div>
<h3 className="text-lg font-medium mb-2 text-blue-900">Audit &amp; Discovery</h3>
<p className="text-sm text-blue-500">We analyze your current systems, data hygiene, and bottlenecks to find the highest-ROI entry points.</p>
</div>

<div className="p-6 border rounded-lg transition-colors bg-white border-blue-200 hover:border-blue-300">
<div className="w-10 h-10 border rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-sm bg-white border-blue-200 text-blue-900">02</div>
<h3 className="text-lg font-medium mb-2 text-blue-900">Strategy &amp; Design</h3>
<p className="text-sm text-blue-500">We architect a solution that integrates with your existing tools, prioritizing data security and user experience.</p>
</div>

<div className="p-6 border rounded-lg transition-colors bg-white border-blue-200 hover:border-blue-300">
<div className="w-10 h-10 border rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-sm bg-white border-blue-200 text-blue-900">03</div>
<h3 className="text-lg font-medium mb-2 text-blue-900">Implementation</h3>
<p className="text-sm text-blue-500">We build, test, and deploy. Whether it's a custom automation or a marketing engine, we ensure it works.</p>
</div>

<div className="p-6 border rounded-lg transition-colors bg-white border-blue-200 hover:border-blue-300">
<div className="w-10 h-10 border rounded-full flex items-center justify-center font-semibold mb-4 text-sm shadow-sm bg-white border-blue-200 text-blue-900">04</div>
<h3 className="text-lg font-medium mb-2 text-blue-900">Optimization</h3>
<p className="text-sm text-blue-500">We don't just leave. We train your team, monitor performance, and refine the system for long-term value.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-blue-50 border-blue-200" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-5 order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden shadow-lg border aspect-square lg:aspect-auto h-full border-blue-200 bg-blue-200">

<div className="absolute inset-0 bg-gradient-to-tr flex items-center justify-center p-8 from-blue-800 to-blue-600">
<div className="text-center">
<iconify-icon className="mb-4 opacity-50 text-cyan-400" icon="lucide:quote" width="48"></iconify-icon>
<p className="text-lg font-medium italic leading-relaxed text-white">
                                    "We founded Trustlight because we saw a gap between AI hype and business reality. Our mission is to build systems that work when the hype fades."
                                </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
<span className="font-semibold tracking-wide uppercase text-xs mb-3 text-cyan-600">About Trustlight</span>
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-blue-900">Founder-Led Technical Expertise</h2>
<div className="space-y-4 leading-relaxed text-blue-600">
<p>
                            Trustlight is not a marketing agency pivoting to AI. We are a consultancy rooted in software architecture, operations, and strategic growth.
                        </p>
<p>
                            With deep experience spanning software engineering, paid advertising, and go-to-market strategy, we understand that technology is only as good as the business outcome it drives.
                        </p>
<p>
                            We act as your technical partners, translating complex capabilities into practical workflows that your attorneys, engineers, and staff can trust every single day.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm font-medium text-blue-800">Workflow Optimization</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm font-medium text-blue-800">Data Privacy First</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm font-medium text-blue-800">Full-Stack Architecture</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-cyan-600" icon="lucide:check" width="18"></iconify-icon>
<span className="text-sm font-medium text-blue-800">GTM Strategy</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-blue-900">Start the Conversation</h2>
<p className="text-blue-500">No sales pressure. Just a conversation to see if AI can help your business.</p>
</div>
<div className="rounded-2xl shadow-sm border p-8 bg-white border-blue-200">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block mb-2 text-sm font-medium text-blue-700" htmlFor="name">Full Name</label>
<input className="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 outline-none transition-all bg-blue-50 border-blue-200 text-blue-900" id="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-blue-700" htmlFor="email">Work Email</label>
<input className="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 outline-none transition-all bg-blue-50 border-blue-200 text-blue-900" id="email" placeholder="john@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-blue-700" htmlFor="industry">Industry</label>
<div className="relative">
<select className="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 appearance-none outline-none transition-all bg-blue-50 border-blue-200 text-blue-900" id="industry">
<option>Legal / Law Firm</option>
<option>Construction / Engineering</option>
<option>Professional Services</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-500">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium text-blue-700" htmlFor="message">How can we help?</label>
<textarea className="border text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-3 outline-none transition-all bg-blue-50 border-blue-200 text-blue-900" id="message" placeholder="Briefly describe your current challenge..." rows="4"></textarea>
</div>
<button className="w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3.5 text-center transition-all duration-300 flex items-center justify-center gap-2 text-white bg-blue-900 hover:bg-blue-800" type="submit">
                        Request Consultation
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-xs text-center mt-4 text-blue-400">
                        We respect your inbox. No spam, ever.
                    </p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t bg-blue-950 text-blue-400 border-blue-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
<div>
<a className="flex items-center gap-3 mb-2 text-white" href="#">

<svg fill="none" height="24" viewbox="0 0 50 32" width="24" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="logo_grad_footer" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#22d3ee', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M14 26C10 26 5 22 5 16C5 10 10 6 16 8C20 9 22 14 24 16" stroke="url(#logo_grad_footer)" strokeLinecap="round" strokeWidth="6"></path>
<path d="M24 16L34 6C40 0 45 5 45 12C45 22 36 26 36 26" stroke="url(#logo_grad_footer)" strokeLinecap="round" strokeWidth="6"></path>
<path d="M12 24L36 6" stroke="url(#logo_grad_footer)" strokeLinecap="round" stroke-opacity="0.8" strokeWidth="5"></path>
</svg>
<span className="font-semibold tracking-tight">Trustlight</span>
</a>
<p className="text-sm max-w-xs">Practical AI solutions for the real world. Transforming information-heavy industries with safety and precision.</p>
</div>
<div className="flex gap-6 mt-6 md:mt-0 text-sm font-medium">
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#industries">Industries</a>
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#contact">Contact</a>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs border-blue-800">
<p>© 2024 Trustlight Consultancy. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
