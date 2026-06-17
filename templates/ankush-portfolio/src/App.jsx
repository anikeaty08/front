import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Function to select a service from cards and scroll to form smoothly
        function selectService(serviceName) {
            const serviceSelect = document.getElementById('service');
            if(serviceSelect) {
                serviceSelect.value = serviceName;
            }
            
            // Use scrollIntoView instead of window.location.href to avoid iframe security blocks
            const targetSection = document.getElementById('start-project');
            if(targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Function to format message and send to WhatsApp
        function sendToWhatsApp(event) {
            event.preventDefault(); // Prevent standard form submission

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const budget = document.getElementById('budget').value;
            const details = document.getElementById('details').value;

            // Construct the message
            const message = `Hello Ankush 👋\n\nI’m interested in your service.\n\n🧑 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n\n💼 Service: ${service}\n💰 Budget: ${budget}\n\n📝 Project Details:\n${details}\n\nPlease get back to me. Thank you!`;

            // Encode for URL
            const encodedMessage = encodeURIComponent(message);
            
            // Set WhatsApp Number
            const whatsappNumber = "919123966544"; // Your assigned number
            
            // Build Final URL
            const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open in new tab
            window.open(url, '_blank');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none bg-grid opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-zinc-800 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

<nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-white/5">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 font-semibold text-lg tracking-tighter flex items-center gap-2" href="#">
<span className="bg-zinc-100 text-zinc-950 rounded-sm w-6 h-6 flex items-center justify-center text-xs">AM</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-100 transition-colors" href="#skills">Skills</a>
<a className="hover:text-zinc-100 transition-colors" href="#start-project">Start Project</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#start-project">
                Hire Me
            </a>
</div>
</nav>
<main className="flex-grow z-10">

<section className="pt-32 pb-20 px-6" id="about">
<div className="max-w-3xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 mb-4">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for work
                </div>
<h1 className="text-4xl md:text-6xl font-semibold text-zinc-100 tracking-tighter leading-tight">
                    Hi, I'm Ankush. <br/>
<span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">Web Developer.</span>
</h1>
<p className="text-base md:text-lg leading-relaxed text-zinc-400 max-w-2xl mx-auto">
                    I help businesses build modern, fast, and user-friendly websites that drive real results. I specialize in creating clean designs, responsive layouts, and high-performing websites that work smoothly across all devices.
                </p>
<div className="pt-8 border-t border-white/5 mt-8">
<p className="text-lg md:text-xl font-medium text-zinc-300 italic tracking-tight">
                        "I don't just build websites — I create digital experiences that help businesses grow."
                    </p>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-sm md:text-base font-medium text-zinc-300 tracking-wide uppercase mb-2">My Mission</p>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
                    To help businesses and individuals build a strong online presence and grow digitally with high-quality websites.
                </p>
</div>
</section>

<section className="pt-24 pb-16 px-6" id="services">
<div className="max-w-5xl mx-auto">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 tracking-tight">My Services</h2>
<p className="text-sm md:text-base text-zinc-500 mt-2">Comprehensive solutions for your digital needs. Click on any service to start.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="cursor-pointer group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/60 transition-all flex flex-col h-full" onclick="selectService('Website Development')">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">Website Development</h3>
<p className="text-sm text-zinc-500 mb-4 flex-grow">Professional and fully responsive websites for businesses, startups, portfolios, and blogs.</p>
</div>

<div className="cursor-pointer group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/60 transition-all flex flex-col h-full" onclick="selectService('E-commerce Development')">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">E-commerce Development</h3>
<p className="text-sm text-zinc-500 mb-4 flex-grow">Online stores that help you sell products easily. Platforms: Shopify, WooCommerce.</p>
</div>

<div className="cursor-pointer group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/60 transition-all flex flex-col h-full" onclick="selectService('UI/UX Design')">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">UI/UX Design</h3>
<p className="text-sm text-zinc-500 mb-4 flex-grow">Modern and attractive website layouts using Figma with a user-focused approach.</p>
</div>

<div className="cursor-pointer group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/60 transition-all flex flex-col h-full" onclick="selectService('Website Optimization')">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">Website Optimization</h3>
<p className="text-sm text-zinc-500 mb-4 flex-grow">Speed optimization, image compression, and code improvements for better UX.</p>
</div>

<div className="cursor-pointer group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/60 transition-all flex flex-col h-full" onclick="selectService('SEO')">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">SEO</h3>
<p className="text-sm text-zinc-500 mb-4 flex-grow">Help websites rank better on Google through proven on-page and technical strategies.</p>
</div>

<div className="cursor-pointer group p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/15 hover:bg-zinc-900/60 transition-all flex flex-col h-full" onclick="selectService('Website Maintenance')">
<iconify-icon className="text-2xl text-zinc-100 mb-4" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-lg font-medium text-zinc-100 tracking-tight mb-2 group-hover:text-white transition-colors">Website Maintenance</h3>
<p className="text-sm text-zinc-500 mb-4 flex-grow">Ongoing support, bug fixing, backups, and security to keep things running smoothly.</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-white/[0.02] border-y border-white/5">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight mb-3 flex items-center justify-center gap-2">
<iconify-icon icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon> How It Works
                    </h2>
<p className="text-sm text-zinc-500">A seamless process to get your project started instantly.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-zinc-400 relative">

<div className="hidden lg:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 text-xl shadow-sm">1</div>
<p>👉 Click on any <strong>service</strong><br/>(Frontend, E-commerce, etc.)</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 text-xl shadow-sm">2</div>
<p>👉 You will be redirected to the <strong>pricing section</strong></p>
</div>
<div className="relative z-10 flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-100 text-xl shadow-sm">3</div>
<p>👉 Fill in your project <strong>details</strong> and click Submit</p>
</div>
<div className="relative z-10 flex flex-col items-center text-center gap-3">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<iconify-icon icon="solar:whatsapp-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-zinc-300">🚀 Details are instantly sent to WhatsApp for a <strong>quick response</strong>.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/20" id="skills">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h2 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight mb-6 flex items-center gap-3">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> Why Choose Me?
                    </h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-white/10 p-1 rounded-full"><iconify-icon className="text-zinc-100 text-xs" icon="solar:check-circle-linear"></iconify-icon></div>
<div><p className="text-sm font-medium text-zinc-200">Professional and modern designs</p></div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-white/10 p-1 rounded-full"><iconify-icon className="text-zinc-100 text-xs" icon="solar:check-circle-linear"></iconify-icon></div>
<div><p className="text-sm font-medium text-zinc-200">Fast delivery without compromising quality</p></div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 bg-white/10 p-1 rounded-full"><iconify-icon className="text-zinc-100 text-xs" icon="solar:check-circle-linear"></iconify-icon></div>
<div><p className="text-sm font-medium text-zinc-200">Clear communication throughout the project</p></div>
</li>
</ul>
</div>

<div>
<h2 className="text-xl md:text-2xl font-semibold text-zinc-100 tracking-tight mb-6 flex items-center gap-3">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon> Skills &amp; Tools
                    </h2>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-sm text-zinc-300 font-medium">HTML</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-sm text-zinc-300 font-medium">CSS</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-sm text-zinc-300 font-medium">JavaScript</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-sm text-zinc-300 font-medium">WordPress</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-sm text-zinc-300 font-medium">Figma</span>
<span className="px-4 py-2 rounded-lg bg-zinc-900 border border-white/10 text-sm text-zinc-300 font-medium">Shopify</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative" id="start-project">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-emerald-900/10 rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<div className="text-center mb-10 space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 mx-auto">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Instant Reply within 5–10 minutes
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-100 tracking-tight">🚀 Get Started Now</h2>
<p className="text-sm md:text-base text-zinc-400">Fill in your details and connect with me instantly on WhatsApp.</p>
</div>

<form className="bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xl" onsubmit="sendToWhatsApp(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="name">Name</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" id="name" placeholder="John Doe" required="" type="text"/>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" id="phone" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="email">Email Address</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="service">Service चयन</label>
<div className="relative">
<select className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all cursor-pointer" id="service" required="">
<option disabled="" selected="" value="">Select a service...</option>
<option value="Website Development">Website Development</option>
<option value="E-commerce Development">E-commerce Development</option>
<option value="UI/UX Design">UI/UX Design</option>
<option value="Website Optimization">Website Optimization</option>
<option value="SEO">SEO</option>
<option value="Website Maintenance">Website Maintenance</option>
<option value="Other / Custom Request">Other / Custom Request</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="budget">Estimated Budget</label>
<div className="relative">
<select className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 appearance-none focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all cursor-pointer" id="budget" required="">
<option disabled="" selected="" value="">Select budget...</option>
<option value="Under ₹10,000">Under ₹10,000</option>
<option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
<option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
<option value="₹50,000+">₹50,000+</option>
<option value="Not Sure Yet">Not Sure Yet</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-wider" htmlFor="details">Project Details</label>
<textarea className="w-full bg-zinc-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all resize-none" id="details" placeholder="Tell me a bit about your project requirements..." required="" rows="4"></textarea>
</div>

<div className="pt-4 border-t border-white/5 text-center space-y-4">
<p className="text-xs text-zinc-400 font-medium">👉 No forms. No waiting. Just instant conversation.</p>
<button className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-6 py-4 rounded-xl transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] group" type="submit">
<iconify-icon className="text-xl" icon="solar:whatsapp-bold"></iconify-icon>
<span>👉 Chat on WhatsApp</span>
</button>
<p className="text-xs text-zinc-500">Click submit to instantly connect with me on WhatsApp and discuss your project.</p>
</div>
</form>
</div>
</section>
</main>

<footer className="py-8 text-center border-t border-white/5">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500 font-medium tracking-wide">© Ankush Mazumder. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-500 hover:text-emerald-400 transition-colors" href="https://wa.me/919123966544" target="_blank">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="mailto:officailankushmazumder@gmail.com">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
