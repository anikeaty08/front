import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Reveal Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 80;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#0B1F33] border-b border-[#1A365D]">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="block" href="#">
<img alt="HelixMind AI Solutions" className="w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bae3690-3bf4-4f59-87c7-71612b4a72f9_1600w.png"/>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors duration-300" href="#services">Capabilities</a>
<a className="hover:text-white transition-colors duration-300" href="#process">Our Process</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block px-5 py-2.5 text-sm font-semibold text-white bg-[#2F80ED] rounded hover:bg-[#256cc9] transition-all duration-300 shadow-sm" href="#contact">
                    Consultation
                </a>
<button className="md:hidden text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden bg-[#F7F9FC] pt-36 pb-20 relative">
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF4FF] border border-[#2F80ED]/20 text-xs font-semibold text-[#0B1F33] mb-8 cursor-default active">
                Practical Systems for Modern Business
            </div>

<h1 className="reveal delay-200 text-4xl md:text-6xl font-bold tracking-tight text-[#0B1F33] mb-4 leading-[1.1] active">
                Automation, Modernization, <br className="hidden md:block"/> &amp; Intelligence.
            </h1>

<p className="reveal delay-200 text-xl md:text-2xl font-semibold text-[#2F80ED] mb-6 tracking-tight active">
                Unlock Intelligence. Elevate Potential.
            </p>

<p className="reveal delay-300 text-lg text-[#4A5568] max-w-2xl mx-auto mb-10 leading-relaxed active">
                We act as your technical partner, implementing custom automation, refining your web presence, and deploying AI tools so your business runs smoother.
            </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 active">
<a className="group w-full sm:w-auto px-8 py-3.5 bg-[#2F80ED] text-white text-sm font-semibold rounded hover:bg-[#256cc9] transition-all shadow-md text-center flex items-center justify-center gap-2" href="#contact">
                    Partner With Us
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#CBD5E0] text-[#0B1F33] text-sm font-semibold rounded hover:bg-slate-50 hover:border-[#A0AEC0] transition-all text-center flex items-center justify-center shadow-sm" href="#services">
                    Our Capabilities
                </a>
</div>
</div>
</header>

<section className="border-y border-slate-200 bg-white py-16 reveal active">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="block text-xs font-bold text-[#4A5568] uppercase tracking-widest mb-6">WHO WE WORK WITH</span>
<h2 className="text-2xl md:text-3xl font-bold text-[#0B1F33] tracking-tight mb-8">Helping Local Service Businesses &amp; Professionals</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left sm:text-center">
<div className="flex items-center sm:justify-center gap-3 text-sm font-medium text-[#0B1F33] p-2">
<svg aria-hidden="true" className="iconify text-[#2F80ED] iconify--lucide" data-icon="lucide:check" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="20 6 9 17 4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    HVAC, Plumbing, Electrical &amp; Trades
                </div>
<div className="flex items-center sm:justify-center gap-3 text-sm font-medium text-[#0B1F33] p-2">
<svg aria-hidden="true" className="iconify text-[#2F80ED] iconify--lucide" data-icon="lucide:check" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="20 6 9 17 4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    Real Estate Agents &amp; Brokers
                </div>
<div className="flex items-center sm:justify-center gap-3 text-sm font-medium text-[#0B1F33] p-2">
<svg aria-hidden="true" className="iconify text-[#2F80ED] iconify--lucide" data-icon="lucide:check" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="20 6 9 17 4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    Lawyers, Accountants &amp; Consultants
                </div>
<div className="flex items-center sm:justify-center gap-3 text-sm font-medium text-[#0B1F33] p-2">
<svg aria-hidden="true" className="iconify text-[#2F80ED] iconify--lucide" data-icon="lucide:check" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" points="20 6 9 17 4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline></svg>
                    Boutiques, Cafes &amp; Local Retail
                </div>
</div>
<p className="text-sm text-[#4A5568] italic">
                “Built for businesses that value their time and want systems that just work.”
            </p>
</div>
</section>

<section className="py-24 relative bg-[#F7F9FC]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] tracking-tight mb-4">Core Capabilities</h2>
<p className="text-[#4A5568] max-w-xl mx-auto text-base">We provide end-to-end technical services designed to stabilize and scale your operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 p-8 rounded-xl bg-white border border-slate-200 hover:border-[#2F80ED]/40 transition-all duration-300 shadow-sm flex flex-col">
<div className="h-10 w-10 rounded-lg bg-[#F0F5FF] text-[#2F80ED] flex items-center justify-center mb-5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor-check" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 11l3 3L22 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-[#0B1F33] mb-3">Website Audits &amp; Redesigns</h3>
<p className="text-sm text-[#4A5568] leading-relaxed mb-4 flex-grow">
                        We don't just build from scratch; we audit your existing site to identify conversion bottlenecks. Our team redesigns interfaces for modern professional appeal, ensuring mobile usability and clarity.
                    </p>
<ul className="space-y-2 mt-auto pt-4 border-t border-slate-100">
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Performance Audits
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Mobile Optimization
                        </li>
</ul>
</div>

<div className="reveal delay-100 p-8 rounded-xl bg-white border border-slate-200 hover:border-[#2F80ED]/40 transition-all duration-300 shadow-sm flex flex-col">
<div className="h-10 w-10 rounded-lg bg-[#F0F5FF] text-[#2F80ED] flex items-center justify-center mb-5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cog" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 2v2m0 16v2m-8.66-15l1 1.73m13.32 13.32l1 1.73M2 12h2m16 0h2m-2.68-7.32l-1 1.73m-13.32 13.32l-1 1.73" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-[#0B1F33] mb-3">Smart Business Automation</h3>
<p className="text-sm text-[#4A5568] leading-relaxed mb-4 flex-grow">
                        We build reliable background systems that handle repetitive tasks. From invoicing and appointment confirmations to lead follow-ups, we ensure nothing falls through the cracks.
                    </p>
<ul className="space-y-2 mt-auto pt-4 border-t border-slate-100">
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Workflow Integration
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> CRM Management
                        </li>
</ul>
</div>

<div className="reveal delay-200 p-8 rounded-xl bg-white border border-slate-200 hover:border-[#2F80ED]/40 transition-all duration-300 shadow-sm flex flex-col">
<div className="h-10 w-10 rounded-lg bg-[#F0F5FF] text-[#2F80ED] flex items-center justify-center mb-5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l7-7l3 3l-7 7l-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="m2 2l7.586 7.586" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="11" cy="11" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-[#0B1F33] mb-3">Content Creation Systems</h3>
<p className="text-sm text-[#4A5568] leading-relaxed mb-4 flex-grow">
                        Maintain a consistent brand voice without the manual effort. We implement systems that generate high-quality social media posts, blogs, and newsletters tailored to your industry.
                    </p>
<ul className="space-y-2 mt-auto pt-4 border-t border-slate-100">
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Automated Drafting
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Multi-Channel Publishing
                        </li>
</ul>
</div>

<div className="reveal delay-200 p-8 rounded-xl bg-white border border-slate-200 hover:border-[#2F80ED]/40 transition-all duration-300 shadow-sm flex flex-col">
<div className="h-10 w-10 rounded-lg bg-[#F0F5FF] text-[#2F80ED] flex items-center justify-center mb-5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-[#0B1F33] mb-3">24/7 AI Assistants</h3>
<p className="text-sm text-[#4A5568] leading-relaxed mb-4 flex-grow">
                        Deploy intelligent chatbots trained on your business data. These assistants handle frequently asked questions, qualify potential leads, and manage bookings instantly, any time of day.
                    </p>
<ul className="space-y-2 mt-auto pt-4 border-t border-slate-100">
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Instant Inquiry Response
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Automated Scheduling
                        </li>
</ul>
</div>

<div className="reveal delay-300 p-8 rounded-xl bg-white border border-slate-200 hover:border-[#2F80ED]/40 transition-all duration-300 shadow-sm flex flex-col md:col-span-2 lg:col-span-1">
<div className="h-10 w-10 rounded-lg bg-[#F0F5FF] text-[#2F80ED] flex items-center justify-center mb-5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user-circle-2" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><circle cx="12" cy="10" fill="none" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-[#0B1F33] mb-3">Digital Twins &amp; Spokespeople</h3>
<p className="text-sm text-[#4A5568] leading-relaxed mb-4 flex-grow">
                        Leverage custom AI avatars for video content. We create consistent digital spokespeople for your ad campaigns, internal training libraries, and client onboarding videos.
                    </p>
<ul className="space-y-2 mt-auto pt-4 border-t border-slate-100">
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Employee Training
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-[#4A5568]">
<span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]"></span> Consistent Branding
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-slate-200 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-3xl md:text-4xl font-bold text-[#0B1F33] tracking-tight mb-16 text-center">Engagement Process</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-10 right-10 h-[1px] bg-slate-200"></div>

<div className="reveal delay-100 relative text-center">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-[#2F80ED] mb-6 relative z-10 shadow-sm">
<span className="text-lg font-bold">1</span>
</div>
<h3 className="text-base font-bold text-[#0B1F33] mb-2">Discovery</h3>
<p className="text-sm text-[#4A5568] px-2">We analyze your current workflows and digital infrastructure to pinpoint inefficiencies.</p>
</div>

<div className="reveal delay-200 relative text-center">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-[#2F80ED] mb-6 relative z-10 shadow-sm">
<span className="text-lg font-bold">2</span>
</div>
<h3 className="text-base font-bold text-[#0B1F33] mb-2">Strategy</h3>
<p className="text-sm text-[#4A5568] px-2">We propose a specific plan: which tasks to automate, what to modernize, and how to implement.</p>
</div>

<div className="reveal delay-300 relative text-center">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-[#2F80ED] mb-6 relative z-10 shadow-sm">
<span className="text-lg font-bold">3</span>
</div>
<h3 className="text-base font-bold text-[#0B1F33] mb-2">Implementation</h3>
<p className="text-sm text-[#4A5568] px-2">Our team handles the technical build, integration, and testing of your new systems.</p>
</div>

<div className="reveal delay-300 relative text-center">
<div className="w-16 h-16 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center text-[#2F80ED] mb-6 relative z-10 shadow-sm">
<span className="text-lg font-bold">4</span>
</div>
<h3 className="text-base font-bold text-[#0B1F33] mb-2">Handoff</h3>
<p className="text-sm text-[#4A5568] px-2">We provide documentation and training so you and your team own the solution.</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-[#F7F9FC] pt-24 pb-24 relative" id="contact">
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="reveal delay-100 bg-white p-12 rounded-2xl border border-slate-200 shadow-xl text-center">
<h2 className="text-3xl md:text-4xl font-bold text-[#0B1F33] tracking-tight mb-6">Let's Discuss Your Needs</h2>
<p className="text-[#4A5568] text-base mb-10 leading-relaxed">
                    Schedule a consultation to discuss your current challenges. We'll explore potential automation and modernization solutions tailored to your business.
                </p>
<div className="flex flex-col items-center gap-6">
<a className="group w-full sm:w-auto px-10 py-4 bg-[#2F80ED] text-white text-base font-semibold rounded hover:bg-[#256cc9] transition-all shadow-md text-center flex items-center justify-center gap-2" href="https://calendar.app.google/3x4cAfBK3wX33T2Q7" rel="noopener noreferrer" target="_blank">
                        Book a Strategy Call
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-strokeWidth="2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<p className="text-xs text-[#4A5568]">
                        Or email us directly at <a className="text-[#2F80ED] hover:underline font-medium" href="mailto:brandon@helixmindaisolutions.ai">brandon@helixmindaisolutions.ai</a>
</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#0B1F33] border-[#0B1F33] border-t pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<a className="block" href="#">
<img alt="HelixMind AI Solutions" className="h-8 w-auto object-contain brightness-0 invert opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bae3690-3bf4-4f59-87c7-71612b4a72f9_1600w.png"/>
</a>
</div>
<p className="text-sm text-slate-300 max-w-xs leading-relaxed">
                        Professional automation and technical services for local businesses.
                    </p>
<div className="mt-4">
<a className="text-sm text-[#2F80ED] hover:text-white transition-colors" href="mailto:brandon@helixmindaisolutions.ai">brandon@helixmindaisolutions.ai</a>
</div>
</div>
<div className="">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-300">
<li className=""><a className="hover:text-[#2F80ED] transition-colors" href="#">Website Audits</a></li>
<li className=""><a className="hover:text-[#2F80ED] transition-colors" href="#">Automation</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-300">
<li><a className="hover:text-[#2F80ED] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#2F80ED] transition-colors" href="#">Process</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2025 HelixMind AI Solutions. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
