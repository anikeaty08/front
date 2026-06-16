import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const originalBtnContent = submitBtn.innerHTML;

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Set loading state
            submitBtn.innerHTML = 'Sending...';
            submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
            submitBtn.disabled = true;

            const formData = new FormData(form);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    // Success state
                    submitBtn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18" stroke-width="1.5"></iconify-icon> Your form has been sent';
                    submitBtn.classList.remove('bg-white', 'text-zinc-950', 'hover:bg-zinc-200', 'opacity-75', 'cursor-not-allowed');
                    submitBtn.classList.add('bg-emerald-500', 'text-white', 'hover:bg-emerald-600');
                    form.reset();
                    
                    // Revert back after 5 seconds
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.classList.remove('bg-emerald-500', 'text-white', 'hover:bg-emerald-600');
                        submitBtn.classList.add('bg-white', 'text-zinc-950', 'hover:bg-zinc-200');
                        submitBtn.disabled = false;
                    }, 5000);
                } else {
                    // Error state
                    console.error(response);
                    submitBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="18" stroke-width="1.5"></iconify-icon> Error Sending';
                    submitBtn.classList.remove('bg-white', 'text-zinc-950', 'hover:bg-zinc-200', 'opacity-75', 'cursor-not-allowed');
                    submitBtn.classList.add('bg-red-500', 'text-white', 'hover:bg-red-600');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalBtnContent;
                        submitBtn.classList.remove('bg-red-500', 'text-white', 'hover:bg-red-600');
                        submitBtn.classList.add('bg-white', 'text-zinc-950', 'hover:bg-zinc-200');
                        submitBtn.disabled = false;
                    }, 3000);
                }
            })
            .catch(error => {
                console.error(error);
                submitBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="18" stroke-width="1.5"></iconify-icon> Network Error';
                submitBtn.classList.remove('bg-white', 'text-zinc-950', 'hover:bg-zinc-200', 'opacity-75', 'cursor-not-allowed');
                submitBtn.classList.add('bg-red-500', 'text-white', 'hover:bg-red-600');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.classList.remove('bg-red-500', 'text-white', 'hover:bg-red-600');
                    submitBtn.classList.add('bg-white', 'text-zinc-950', 'hover:bg-zinc-200');
                    submitBtn.disabled = false;
                }, 3000);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20 blur-[120px] rounded-full bg-gradient-to-b from-zinc-500 to-transparent"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
<a className="font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="bg-white text-zinc-950 px-1.5 py-0.5 rounded-sm tracking-tighter leading-none">IA</span>
<span className="">IAN'S AUTOMATIONS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-zinc-400 font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hidden hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-white text-zinc-950 px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                Contact Me
            </a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-24">

<section className="max-w-4xl mx-auto px-6 text-center pt-20 pb-32">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                Accepting new clients
            </div>
<h1 className="md:text-6xl lg:text-7xl text-balance leading-tight text-4xl font-semibold tracking-tight">
                Scale your business <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">without the overhead.</span>
</h1>
<p className="md:text-xl text-balance text-lg font-light text-zinc-400 max-w-2xl mt-6 mr-auto ml-auto">AI websites, chatbots, and workflows that work 24/7. Focus on growth while intelligent systems handle the rest.</p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium">
<a className="w-full sm:w-auto bg-white text-zinc-950 px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#contact">
                    Book your free Audit
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-zinc-800 hover:bg-zinc-900 transition-colors flex items-center justify-center gap-2 text-zinc-300" href="#services">
                    Explore Services <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="border-y border-zinc-900 bg-zinc-950/50 py-12">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-900 text-center">
<div className="pt-4 md:pt-0">
<div className="text-3xl font-semibold tracking-tight text-white mb-2">20+ Hours</div>
<div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Saved per week</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-3xl font-semibold tracking-tight text-white mb-2">24/7</div>
<div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Never miss a lead</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-3xl font-semibold tracking-tight text-white mb-2">100%</div>
<div className="text-sm text-zinc-400 font-medium tracking-wide uppercase">Custom Solutions</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32" id="services">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Core Capabilities</h2>
<p className="text-zinc-400 max-w-xl text-base font-light text-balance">Intelligent systems designed to integrate seamlessly into your business, reducing friction and driving conversions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 hover:border-zinc-700">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
<iconify-icon icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Smart Websites</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">High-performance landing pages and websites that automatically capture leads, integrate with your CRM, and load instantly.</p>
</div>

<div className="group border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 hover:border-zinc-700">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">24/7 Chatbots</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">AI-driven customer support that answers FAQs, qualifies leads, and books appointments around the clock without human intervention.</p>
</div>

<div className="group border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 hover:border-zinc-700">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Autonomous Workflows</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Connect your favorite apps to automate tedious tasks like data entry, email follow-ups, and invoice generation.</p>
</div>

<div className="group border border-zinc-800 bg-zinc-900/30 p-8 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 hover:border-zinc-700">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-white group-hover:scale-110 transition-all">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">AI Agents</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Custom digital workers trained on your specific data to handle complex, multi-step tasks from research to content generation.</p>
</div>
</div>
<div className="mt-12 text-center border-t border-zinc-900 pt-8">
<p className="text-sm text-zinc-400 font-medium">Because every business is unique, there is no rigid pricing structure.</p>
<a className="inline-flex items-center gap-1 mt-2 text-sm text-white hover:text-zinc-300 transition-colors" href="#contact">
                    Contact me to discuss a custom tailored plan <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="bg-zinc-900/20 py-32 border-y border-zinc-900" id="process">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">How It Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-[1px] bg-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-sm font-medium mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">1</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Audit</h3>
<p className="text-sm text-zinc-400 font-light text-balance">We analyze your current operations to find bottlenecks and identify where AI and automation will have the highest ROI.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-sm font-medium mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">2</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Build</h3>
<p className="text-sm text-zinc-400 font-light text-balance">I custom-build your AI setup, whether it's an intelligent website, a chatbot, or an interconnected workflow system.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 flex items-center justify-center text-sm font-medium mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)]">3</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Automate</h3>
<p className="text-sm text-zinc-400 font-light text-balance">We go live. Watch as your new systems seamlessly handle tasks 24/7, freeing up your time to focus on scaling.</p>
</div>
</div>
</div>
</section>

<section className="hidden max-w-6xl mx-auto px-6 py-32" id="projects">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Featured Work</h2>
<p className="text-zinc-400 text-base font-light text-balance max-w-xl">A glimpse into systems built to solve real business problems.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden mb-5">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/40 to-transparent z-10"></div>

<div className="w-full h-full flex items-center justify-center text-zinc-700 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:gallery-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">Website</span>
<span className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">Workflow</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 text-zinc-100 group-hover:text-white transition-colors">E-Commerce Automation</h3>
<p className="text-sm text-zinc-500 font-light line-clamp-2">A complete overhaul of a storefront with integrated inventory management and automated order processing workflows.</p>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden mb-5">
<div className="absolute inset-0 bg-zinc-950/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center z-20 text-white shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
</div>

<div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:videocamera-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">Chatbot</span>
<span className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">AI Agent</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 text-zinc-100 group-hover:text-white transition-colors">Real Estate Lead Gen Bot</h3>
<p className="text-sm text-zinc-500 font-light line-clamp-2">An interactive chatbot that qualifies property inquiries 24/7 and automatically schedules viewings based on agent availability.</p>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-[4/3] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden mb-5">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 to-transparent z-10"></div>

<div className="w-full h-full flex items-center justify-center text-zinc-700 group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">Workflow</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 text-zinc-100 group-hover:text-white transition-colors">Financial Data Pipeline</h3>
<p className="text-sm text-zinc-500 font-light line-clamp-2">Autonomous system connecting multiple SaaS tools to extract, format, and report financial data weekly without human input.</p>
</div>
</div>
</section>

<section className="max-w-6xl border-zinc-900 border-t mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="" id="faq">
<h2 className="text-3xl font-semibold tracking-tight mb-8">Common Questions</h2>
<div className="divide-y divide-zinc-900 border-y border-zinc-900">
<details className="group py-5" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-zinc-100 hover:text-white transition-colors outline-none">
                                Will this replace my staff?
                                <span className="text-zinc-500 transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-sm text-zinc-400 mt-4 leading-relaxed font-light">
                                No. These systems are designed to augment your existing team. By automating repetitive and mundane tasks, your staff can focus on high-level strategy, complex problem-solving, and building relationships. Think of it as giving your team a digital assistant.
                            </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-zinc-100 hover:text-white transition-colors outline-none">
                                How hard is it to manage?
                                <span className="text-zinc-500 transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-sm text-zinc-400 mt-4 leading-relaxed font-light">
                                My solutions are built to be hands-off. Once implemented, they run autonomously. For websites and chatbots, I provide a simple dashboard if you need to view data, and I'm always available for ongoing maintenance if requested.
                            </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-zinc-100 hover:text-white transition-colors outline-none">
                                How much does a project cost?
                                <span className="text-zinc-500 transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-sm text-zinc-400 mt-4 leading-relaxed font-light">
                                Pricing is entirely dependent on the complexity and scope of what you need. A simple workflow integration costs less than a fully custom AI agent. Contact me to discuss your needs, and I'll provide a transparent quote.
                            </p>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm text-zinc-100 hover:text-white transition-colors outline-none">
                                What tools do you use?
                                <span className="text-zinc-500 transition-transform duration-300 group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-sm text-zinc-400 mt-4 leading-relaxed font-light">
                                I use a modern stack tailored to the task. This includes custom code (JavaScript/Python), OpenAI/Anthropic APIs for intelligence, n8n (a superior and more flexible competitor to Zapier/Make) for workflows, and modern web frameworks for sites. The focus is always on reliability and speed.
                            </p>
</details>
</div>
</div>

<div className="md:p-10 overflow-hidden bg-zinc-900/40 border-zinc-800 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative" id="contact">
<div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/30 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
<h2 className="text-2xl font-semibold tracking-tight mb-2">Let's discuss your project</h2>
<p className="text-sm text-zinc-400 mb-8 font-light">Fill out the form below and I'll get back to you ASAP.</p>

<form action="https://api.web3forms.com/submit" className="z-10 relative space-y-5" id="contactForm" method="POST">

<input name="access_key" type="hidden" value="0a987585-fe79-45c9-8da7-0875da141201"/>
<input name="subject" type="hidden" value="New Inquiry from Ian's Automations Landing Page"/>
<input className="hidden" name="botcheck" style={{display: 'none'}} type="checkbox"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-300" htmlFor="name">Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-300" htmlFor="email">Email</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-300" htmlFor="phone">Phone Number</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-600" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-2 relative">
<label className="block text-xs font-medium text-zinc-300" htmlFor="service">Service Interest</label>
<div className="relative">
<select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg pl-4 pr-10 py-2.5 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all appearance-none cursor-pointer" id="service" name="service" required="">
<option className="text-zinc-500" disabled="" selected="" value="">Select a service...</option>
<option value="Website">Smart Website</option>
<option value="Workflow">Autonomous Workflow</option>
<option value="Chatbot">24/7 Chatbot</option>
<option value="Agent">AI Agent</option>
<option value="Other">Other / Not sure</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-500">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-300" htmlFor="description">Project Description</label>
<textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-none placeholder:text-zinc-600" id="description" name="message" placeholder="Briefly describe what you are looking to get done..." required="" rows="4"></textarea>
</div>
<button className="hover:bg-zinc-200 transition-all duration-300 flex text-sm font-medium text-zinc-950 bg-white w-full rounded-lg pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" id="submitBtn" type="submit">
                            Submit Request
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
<p className="text-xs text-zinc-500 text-center mt-4">By submitting, you agree to receive an automated confirmation
                            email.</p>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
<div className="flex flex-col items-center md:items-start gap-4">
<a className="font-medium tracking-tighter text-lg flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity" href="#">
<span className="bg-white text-zinc-950 px-1.5 py-0.5 rounded-sm tracking-tighter leading-none text-xs">IA</span>
<span className="text-sm text-zinc-50">IAN'S AUTOMATIONS</span>
</a>
<span className="text-sm text-zinc-500 font-light">© 2024 Ian's Automations. All rights reserved.</span>
</div>
<div className="flex flex-col items-center md:items-end gap-3 text-sm">
<span className="text-zinc-50 font-medium mb-1">Contact</span>
<a className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-light" href="mailto:iansautomations@gmail.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    iansautomations@gmail.com
                </a>
<a className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 font-light" href="tel:+12673299474">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    (267) 329-9474
                </a>
</div>
</div>
</footer>



    </>
  );
}
