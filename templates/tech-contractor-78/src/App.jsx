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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Auto-show popup after delay
setTimeout(function() {
const popup = document.getElementById('lead-capture-overlay');
if (popup && !localStorage.getItem('leadPopupShown')) {
popup.classList.add('show');
}
}, 5000);
function closeLeadPopup(event) {
if (event && event.target !== event.currentTarget) return;
const popup = document.getElementById('lead-capture-overlay');
popup.classList.remove('show');
localStorage.setItem('leadPopupShown', 'true');
}
function submitLeadForm(event) {
event.preventDefault();
const formData = new FormData(event.target);
const name = formData.get('name');
const phone = formData.get('phone');
const address = formData.get('address');
const message = formData.get('message');
let leadMessage = '🎯 *New Lead Captured!*\n\n';
leadMessage += '👤 *Name:* ' + name + '\n';
leadMessage += '📱 *Phone:* ' + phone + '\n';
if (address) {
leadMessage += '🏠 *Address:* ' + address + '\n';
}
if (message) {
leadMessage += '💬 *Message:* ' + message + '\n';
}
leadMessage += '\n⏰ *Time:* ' + new Date().toLocaleString();
leadMessage += '\n\n_Generated via Widgetify Lead Capture_';
const whatsappUrl = 'https://wa.me/9656778508?text=' + encodeURIComponent(leadMessage);
window.open(whatsappUrl, '_blank');
// Show success message and close popup
alert('✅ Thank you! Your details have been sent successfully. We will contact you soon!');
closeLeadPopup();
// Reset form
event.target.reset();
}
// Prevent showing popup if already shown in this session
if (localStorage.getItem('leadPopupShown')) {
// Optional: Clear after 24 hours
const lastShown = localStorage.getItem('leadPopupShownTime');
const now = new Date().getTime();
if (!lastShown || (now - parseInt(lastShown)) > 24 * 60 * 60 * 1000) {
localStorage.removeItem('leadPopupShown');
}
}



        function sendToWhatsapp() {
            const phoneNumber = "919656778508";
            
            const name = document.getElementById('wa-name').value;
            const business = document.getElementById('wa-business').value;
            const address = document.getElementById('wa-address').value;
            const city = document.getElementById('wa-city').value;
            const type = document.getElementById('wa-type').value;
            const duration = document.getElementById('wa-duration').value;
            const message = document.getElementById('wa-message').value;

            // Construct message
            const text = `*New Service Inquiry*%0a%0a*Name:* ${name}%0a*Business:* ${business}%0a*Location:* ${address}, ${city}%0a*Type:* ${type}%0a*Duration:* ${duration}%0a*Message:* ${message}`;

            const url = `https://wa.me/${phoneNumber}?text=${text}`;
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white tracking-tighter font-medium text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black text-xs font-bold">
                    M</div>
                ADNAN
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#contact">Hire Me</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10">
</div>
<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-slate-300 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for Contract
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Tech Contractor <br/>
<span className="text-gradient">• Websites</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-xl mx-auto md:mx-0 leading-relaxed mb-8">
                I build scalable, high-performance web solutions for startups and global agencies. Reliable remote
                contracting with a focus on precision and conversion.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" href="#contact">
                    Start Your Project
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-white rounded-lg font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="#projects">
                    View Work
                </a>
</div>
</div>
<div className="relative w-full max-w-sm md:max-w-md">

<div className="aspect-[4/5] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 group">
<img className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://i.ibb.co/jPPB5LdX/download.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-medium text-lg">Muhammed Adnan</p>
<p className="text-slate-400 text-sm">Remote Contractor</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-12">
<p className="text-center text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Powering Solutions
                With</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
<div className="flex items-center gap-3 group">
<div className="p-2 bg-white/5 rounded-lg border border-white/10 text-pink-400 group-hover:border-pink-500/50 transition-colors">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium text-sm">Lovable</span>
<span className="text-xs text-slate-500">Frontend</span>
</div>
</div>
<div className="w-px h-8 bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-3 group">
<div className="p-2 bg-white/5 rounded-lg border border-white/10 text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium text-sm">Supabase</span>
<span className="text-xs text-slate-500">Backend</span>
</div>
</div>
<div className="w-px h-8 bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-3 group">
<div className="p-2 bg-white/5 rounded-lg border border-white/10 text-blue-400 group-hover:border-blue-500/50 transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium text-sm">Gemini</span>
<span className="text-xs text-slate-500">Artificial Intelligence</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="projects">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Selected Work</h2>
<p className="text-slate-400 font-light">Contracted projects delivering value and scale.</p>
</div>
<a className="text-sm text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">View all
                projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel rounded-2xl p-1 group hover:-translate-y-1 transition-transform duration-300">
<div className="bg-[#111] rounded-xl aspect-[4/3] relative overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-gradient-to-tr from-rose-950 to-slate-900">
<span className="text-2xl font-semibold tracking-tighter opacity-30">Nyla</span>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all" href="https://www.nylainteriors.in/" target="_blank">
                            Visit Nyla Interiors <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-white font-medium text-lg tracking-tight">Nyla Interiors</h3>
<p className="text-sm text-slate-500 mt-1">Interior Design Portfolio</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-1 group hover:-translate-y-1 transition-transform duration-300">
<div className="bg-[#111] rounded-xl aspect-[4/3] relative overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-gradient-to-tr from-stone-900 to-stone-800">
<span className="text-2xl font-semibold tracking-tighter opacity-30">IDC</span>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all" href="https://www.idcinteriorstudio.com/" target="_blank">
                            Visit IDC Studio <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-white font-medium text-lg tracking-tight">IDC Interior Studio</h3>
<p className="text-sm text-slate-500 mt-1">Architecture &amp; Design</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-1 group hover:-translate-y-1 transition-transform duration-300">
<div className="bg-[#111] rounded-xl aspect-[4/3] relative overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-gradient-to-tr from-sky-950 to-slate-900">
<span className="text-2xl font-semibold tracking-tighter opacity-30">GB UAE</span>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all" href="https://globalbestuae.com/" target="_blank">
                            Visit Global Best <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-white font-medium text-lg tracking-tight">Global Best UAE</h3>
<p className="text-sm text-slate-500 mt-1">Business Consulting</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-1 group hover:-translate-y-1 transition-transform duration-300">
<div className="bg-[#111] rounded-xl aspect-[4/3] relative overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-gradient-to-tr from-orange-950 to-red-950">
<span className="text-2xl font-semibold tracking-tighter opacity-30">W-Mart</span>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all" href="https://welcomemart.shop/" target="_blank">
                            Visit Welcome Mart <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="px-4 pb-4">
<h3 className="text-white font-medium text-lg tracking-tight">Welcome Mart</h3>
<p className="text-sm text-slate-500 mt-1">E-Commerce Platform</p>
</div>
</div>

<div className="glass-panel rounded-2xl p-1 group hover:-translate-y-1 transition-transform duration-300 md:col-span-2 lg:col-span-2">
<div className="bg-[#111] rounded-xl aspect-[2.66/1] md:aspect-[2.1/1] lg:aspect-[2.66/1] relative overflow-hidden mb-4">
<div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-gradient-to-r from-slate-900 via-emerald-950/20 to-slate-900">
<span className="text-3xl font-semibold tracking-tighter opacity-30">Welcome Properties</span>
</div>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<a className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all" href="https://www.welcomeproperties.in/" target="_blank">
                            Visit Welcome Properties <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="px-4 pb-4 flex justify-between items-end">
<div>
<h3 className="text-white font-medium text-lg tracking-tight">Welcome Properties</h3>
<p className="text-sm text-slate-500 mt-1">Real Estate Listing Platform</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 px-6">
<div className="max-w-5xl mx-auto">

<h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-gradient">
                My Certificates
            </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="glass-panel rounded-xl overflow-hidden transition hover:scale-[1.02] hover:border-white/20" href="https://www.mygreatlearning.com/certificate/TCLNUHNS?referrer_code=GLL44ZJATMMKQ" target="_blank">

<div className="overflow-hidden">
<img alt="Great Learning Certificate" className="transition duration-300 hover:scale-105 w-full h-48 object-cover" src="cer1.jpg"/>
</div>

<div className="pt-6 pr-6 pb-6 pl-6">
<h3 className="text-xl font-medium text-white mb-1">Front End Development - HTML</h3>
<p className="text-sm text-zinc-400 mb-3">
                            Great Learning Certification
                        </p>
<span className="text-sm font-medium text-zinc-300">
                View Certificate →
              </span>
</div>
</a>

<a className="glass-panel rounded-xl overflow-hidden transition hover:scale-[1.02] hover:border-white/20" href="https://www.mygreatlearning.com/certificate/POKVFWES?referrer_code=GLL44ZJATMMKQ" target="_blank">

<div className="overflow-hidden">
<img className="w-full h-48 object-cover transition duration-300 hover:scale-105" src="cer2.jpg"/>
</div>

<div className="p-6">
<h3 className="text-xl font-medium text-white mb-1">Design App</h3>
<p className="text-sm text-zinc-400 mb-3">
                            Great Learning Certification
                        </p>
<span className="text-sm font-medium text-zinc-300">
                View Certificate →
              </span>
</div>
</a>
<a className="glass-panel group rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.03] hover:border-white/25 hover:shadow-2xl" href="https://thetechcontractor.vercel.app/cer3.jpg.jpeg" rel="noopener noreferrer" target="_blank">

<div className="relative overflow-hidden">
<img alt="Kraft Night Hackathon Certificate" className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" src="cer3.jpg.jpeg" />

<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
</img></div>

<div className="p-6">
<h3 className="text-lg md:text-xl font-semibold text-white mb-1 tracking-tight">
                            Kraft Night Hackathon
                        </h3>
<p className="text-sm text-zinc-400 mb-4">
                            20-hour Hackathon Certificate
                        </p>
<span className="inline-flex items-center gap-1 text-sm font-medium text-zinc-300 group-hover:text-white transition">
      View Certificate
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="insights">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">
                Insights &amp; Articles
            </h2>
<p className="text-slate-400 font-light">
                Sharing thoughts, experiences and real journey in tech.
            </p>
<a className="inline-block mt-6 text-sm border-b border-white/30 pb-1 text-white hover:border-white transition" href="https://www.linkedin.com/in/muhammedadnanvv/" target="_blank">
                View Full LinkedIn Profile →
            </a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-white text-xl font-semibold mb-3">
                    My Journey From Zero Skill to Self-Learner
                </h3>
<p className="text-slate-400 text-sm mb-4">
                    A personal story about learning, growth, and building skills from scratch.
                </p>
<a className="text-white text-sm border-b border-white/30 hover:border-white transition" href="https://www.linkedin.com/pulse/my-journey-from-zero-skill-self-learner-personal-story-adnan-qxitc" target="_blank">
                    Read Article →
                </a>
</div>

<div className="glass-panel p-4 rounded-2xl overflow-hidden">
<iframe allowfullscreen="" className="rounded-xl" frameborder="0" height="500" src="https://www.linkedin.com/embed/feed/update/urn:li:share:7424583355775574016?collapsed=1" width="100%">
</iframe>
</div>

<div className="glass-panel p-4 rounded-2xl overflow-hidden">
<iframe allowfullscreen="" className="rounded-xl" frameborder="0" height="500" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7417193393065201664?collapsed=1" width="100%">
</iframe>
</div>

<div className="glass-panel p-6 rounded-2xl">
<h3 className="text-white text-xl font-semibold mb-3">
                    Kerala Startup Fest – Day 1 Experience
                </h3>
<p className="text-slate-400 text-sm mb-4">
                    A glimpse into networking, innovation and startup energy.
                </p>
<a className="text-white text-sm border-b border-white/30 hover:border-white transition" href="https://www.linkedin.com/posts/muhammedadnanvv_day-1-at-keralastartupfest-its-a-great-activity-7414677572162076674-knoA" target="_blank">
                    View Post →
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Transparent Project Pricing</h2>
<p className="text-slate-400 font-light">Simple, contractor-friendly tiers based on scope and complexity.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl flex flex-col hover:border-white/20 transition-colors">
<div className="mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Small Website</h3>
<p className="text-sm text-slate-500 mt-2">Perfect for portfolios or single landing pages.</p>
</div>
<div className="mt-auto">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-semibold text-white">₹15,000</span>
</div>
<p className="text-xs text-slate-500 mb-6">+ Requirement Charges</p>
<a className="block w-full text-center py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all" href="#contact">
                            Start Small Project
                        </a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col relative border-white/20 bg-white/[0.03]">
<div className="absolute top-0 right-0 p-4">
<iconify-icon className="text-white/20" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<div className="mb-6">
<div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Medium Website</h3>
<p className="text-sm text-slate-500 mt-2">For small businesses requiring multiple pages and CMS.
                        </p>
</div>
<div className="mt-auto">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-semibold text-white">₹25,000+</span>
</div>
<p className="text-xs text-slate-500 mb-6">+ Requirement Charges</p>
<a className="block w-full text-center py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all" href="#contact">
                            Start Medium Project
                        </a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col hover:border-white/20 transition-colors">
<div className="mb-6">
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-white mb-4 border border-white/10">
<iconify-icon icon="solar:sitemap-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Large Website</h3>
<p className="text-sm text-slate-500 mt-2">Complex functionality, e-commerce, or custom web apps.
                        </p>
</div>
<div className="mt-auto">
<div className="flex items-baseline gap-1 mb-1">
<span className="text-2xl font-semibold text-white">₹37,000+</span>
</div>
<p className="text-xs text-slate-500 mb-6">+ Requirement Charges</p>
<a className="block w-full text-center py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-all" href="#contact">
                            Start Large Project
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto" id="contact">
<div className="flex flex-col md:flex-row gap-12 md:gap-20">
<div className="md:w-1/3">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Hire Me</h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                    I am currently available for remote contract work. Whether you need a quick landing page or a
                    long-term development partner, let's discuss how I can help your business grow.
                </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-white">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<div>
<span className="block font-medium text-white text-sm">Phone</span>
<a className="text-slate-400 text-sm hover:text-white transition-colors" href="tel:09656778508">096567 78508</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center text-white">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<div>
<span className="block font-medium text-white text-sm">Address</span>
</div>
</div>
<div className="h-px bg-white/10 w-full my-4"></div>
<div className="flex items-center gap-4 text-sm text-slate-300">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
</div>
<div>
<span className="block font-medium text-white">Quick Turnaround</span>
<span className="text-slate-500">Committed to Deadlines</span>
</div>
</div>
</div>
</div>
<div className="md:w-2/3">
<form className="space-y-6" id="whatsappForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Full Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm" id="wa-name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Business Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm" id="wa-business" placeholder="Company Ltd." type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Address</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm" id="wa-address" placeholder="Street Address" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">City, State / Country</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm" id="wa-city" placeholder="New York, USA" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Website Type</label>
<div className="relative">
<select className="w-full bg-[#050505] border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm appearance-none rounded-none cursor-pointer" id="wa-type">
<option>Portfolio Website</option>
<option>Corporate / Business</option>
<option>E-Commerce</option>
<option>Landing Page</option>
<option>Blog / Content</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Contract Duration</label>
<div className="relative">
<select className="w-full bg-[#050505] border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm appearance-none rounded-none cursor-pointer" id="wa-duration">
<option selected="">1 Month</option>
<option>3 Months</option>
<option>6 Months</option>
<option>Project Based (Fixed)</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Why do you want to hire me?</label>
<textarea className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm resize-none" id="wa-message" placeholder="Briefly describe project goals and requirements..." rows="3"></textarea>
</div>
<div className="pt-4">
<button className="group w-full md:w-auto px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2" onclick="sendToWhatsapp()" type="button">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                            Send on WhatsApp
                        </button>
<p className="text-xs text-slate-600 mt-3 text-center md:text-left">
<iconify-icon className="inline align-text-bottom mr-1" icon="solar:shield-check-linear"></iconify-icon>
                            Your details are secure. Direct communication.
                        </p>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#08090a] py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-black text-[10px] font-bold">
                    M</div>
<span className="text-white text-sm font-medium tracking-tight">Muhammed Adnan</span>
</div>
<p className="text-xs text-slate-600">
                © 2026 Muhammed Adnan. All rights reserved.
            </p>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:mailbox-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
