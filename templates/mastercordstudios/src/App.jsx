import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0-init');
                        entry.target.classList.add('animate-fade-up');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.scroll-animate').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-zinc-800/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30rem] h-[30rem] bg-zinc-900/40 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] animate-grid-flow [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-zinc-100 flex items-center gap-1" href="#">
                MC.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-100 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</div>
<div>
<a className="px-4 py-2 bg-zinc-100 text-zinc-950 rounded-full font-medium text-xs hover:bg-white transition-colors" href="#contact">
                    Hire Me
                </a>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="pt-32 pb-24 px-6 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="opacity-0-init animate-fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse"></span>
                    Accepting New Commissions
                </div>
<h1 className="opacity-0-init animate-fade-up delay-100 text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-100 mb-6 leading-[1.1]">
                    Architecting premium <br className="hidden md:block"/> Discord communities.
                </h1>
<p className="opacity-0-init animate-fade-up delay-200 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    I am a professional Discord server developer with over 3 years of experience. I design, build, and secure custom, scalable servers tailored to elevate your brand and engage your audience.
                </p>
<div className="opacity-0-init animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-6 py-3 bg-zinc-100 text-zinc-950 rounded-full font-medium text-sm hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                        Start Your Project 
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-6 py-3 bg-transparent border border-zinc-800 text-zinc-300 rounded-full font-medium text-sm hover:bg-zinc-900 transition-colors" href="#services">
                        Explore Services
                    </a>
</div>
</div>
</section>

<section className="border-y border-zinc-800/50 bg-zinc-900/20 py-10 px-6 backdrop-blur-sm scroll-animate opacity-0-init">
<div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-32 text-center">
<div className="flex flex-col gap-1 hover:-translate-y-1 transition-transform duration-300">
<div className="text-3xl font-semibold tracking-tight text-zinc-100">3+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Years Experience</div>
</div>
<div className="flex flex-col gap-1 hover:-translate-y-1 transition-transform duration-300">
<div className="text-3xl font-semibold tracking-tight text-zinc-100">Premium</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Quality Builds</div>
</div>
<div className="flex flex-col gap-1 hover:-translate-y-1 transition-transform duration-300">
<div className="text-3xl font-semibold tracking-tight text-zinc-100">100%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Custom Tailored</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto scroll-animate opacity-0-init" id="services">
<div className="mb-16 md:text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">Comprehensive Solutions</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-2xl md:mx-auto font-light">
                    Every community is unique. I provide end-to-end development services to ensure your server is functional, secure, and visually cohesive.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900/70 hover:border-zinc-700/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-6 text-zinc-100 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 border border-zinc-700/50">
<iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Architecture &amp; Design</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Logical channel layouts, aesthetic category designs, and intuitive role hierarchies. I structure your server to promote engagement and easy navigation.
                    </p>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900/70 hover:border-zinc-700/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-6 text-zinc-100 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 border border-zinc-700/50">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Bot Integration</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Setup and configuration of essential and custom bots. From leveling systems and economy to automated moderation and ticketing systems.
                    </p>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900/70 hover:border-zinc-700/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-6 text-zinc-100 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 border border-zinc-700/50">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Security &amp; Verification</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Robust security measures to protect against raids, spam, and malicious activity. Implementation of seamless verification gates for new members.
                    </p>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 hover:bg-zinc-900/70 hover:border-zinc-700/50 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-6 text-zinc-100 group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300 border border-zinc-700/50">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-100 mb-3">Onboarding Experience</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Custom welcome screens, reaction roles, and guided tutorials to ensure new members understand your community rules and how to participate instantly.
                    </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50 bg-zinc-950/50 backdrop-blur-md scroll-animate opacity-0-init" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">Investment in Quality</h2>
<p className="text-sm text-zinc-400 font-light leading-relaxed mb-6">
                            Building a successful Discord server requires planning, technical knowledge, and an eye for design. As a professional developer, I charge for my expertise and the time dedicated to crafting a flawless community hub for you.
                        </p>
<ul className="space-y-4 text-sm text-zinc-300 font-light">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-lg text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors" icon="solar:check-circle-linear"></iconify-icon>
<span>Initial consultation to understand your brand and goals.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-lg text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors" icon="solar:check-circle-linear"></iconify-icon>
<span>Custom quote based on server complexity and requirements.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-lg text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors" icon="solar:check-circle-linear"></iconify-icon>
<span>Iterative build process with feedback loops.</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-lg text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors" icon="solar:check-circle-linear"></iconify-icon>
<span>Final handover with documentation and owner training.</span>
</li>
</ul>
</div>
<div className="w-full md:w-80 bg-zinc-900/60 backdrop-blur-lg border border-zinc-800/80 rounded-2xl p-8 shrink-0 relative overflow-hidden group hover:border-zinc-700/80 transition-colors duration-500">
<div className="absolute top-0 right-0 w-32 h-32 bg-zinc-700/20 blur-3xl rounded-full group-hover:bg-zinc-600/30 transition-colors duration-500"></div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2 relative z-10">Custom Quoted</h3>
<p className="text-xs text-zinc-500 font-medium tracking-wide uppercase mb-6 relative z-10">Project Based</p>
<p className="text-sm text-zinc-400 font-light mb-8 relative z-10">
                            Pricing scales with the size and technical requirements of your server. Contact me to discuss your vision.
                        </p>
<a className="w-full block text-center px-4 py-3 bg-zinc-100 text-zinc-950 rounded-xl font-medium text-sm hover:bg-white transition-colors relative z-10" href="#contact">
                            Request a Quote
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50 relative overflow-hidden scroll-animate opacity-0-init" id="contact">
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-900/30 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 mb-4">Let's build together.</h2>
<p className="text-sm text-zinc-400 font-light">
                        Fill out the form below with details about your project, and I'll get back to you with next steps.
                    </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5 group">
<label className="text-xs font-medium text-zinc-300 ml-1 group-focus-within:text-zinc-100 transition-colors">Name</label>
<input className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5 group">
<label className="text-xs font-medium text-zinc-300 ml-1 group-focus-within:text-zinc-100 transition-colors">Discord Username</label>
<input className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" placeholder="username#0000" type="text"/>
</div>
</div>
<div className="space-y-1.5 group">
<label className="text-xs font-medium text-zinc-300 ml-1 group-focus-within:text-zinc-100 transition-colors">Project Type</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all appearance-none cursor-pointer">
<option className="bg-zinc-900" value="new">Brand New Server Build</option>
<option className="bg-zinc-900" value="revamp">Existing Server Revamp</option>
<option className="bg-zinc-900" value="security">Security Audit &amp; Setup</option>
<option className="bg-zinc-900" value="other">Other Consultation</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5 group">
<label className="text-xs font-medium text-zinc-300 ml-1 group-focus-within:text-zinc-100 transition-colors">Project Details</label>
<textarea className="w-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" placeholder="Tell me about your community, goals, and any specific features you need..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full py-3 bg-zinc-100 text-zinc-950 rounded-xl font-medium text-sm hover:bg-white transition-colors flex items-center justify-center gap-2" type="button">
                            Send Inquiry <iconify-icon className="text-base" icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 py-10 px-6 mt-auto bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-8">
<div className="text-xl font-medium tracking-tighter text-zinc-300">
                MasterCord.
            </div>
<div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-zinc-400 font-medium">
<a className="flex items-center gap-2 hover:text-zinc-100 transition-colors group" href="https://discord.gg/tMVNjH6KPh" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:chat-round-line-linear"></iconify-icon>
                    Discord
                </a>
<a className="flex items-center gap-2 hover:text-zinc-100 transition-colors group" href="https://www.youtube.com/@MasterCord-350" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:play-circle-linear"></iconify-icon>
                    YouTube
                </a>
<a className="flex items-center gap-2 hover:text-zinc-100 transition-colors group" href="https://www.instagram.com/mastercord350/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:camera-linear"></iconify-icon>
                    Instagram
                </a>
<a className="flex items-center gap-2 hover:text-zinc-100 transition-colors group" href="https://www.linkedin.com/in/mastercord/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg group-hover:-translate-y-0.5 transition-transform" icon="solar:case-linear"></iconify-icon>
                    LinkedIn
                </a>
</div>
<p className="text-xs text-zinc-500 font-light mt-2">
                © 2023 MasterCord. All rights reserved.
            </p>
</div>
</footer>



    </>
  );
}
