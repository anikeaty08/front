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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
zinc: { 850: '#1f1f22', 900: '#18181b', 950: '#09090b' },
indigo: { 500: '#6366f1', 600: '#4f46e5' }
},
backgroundImage: {
'gradient-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), rgba(255, 255, 255, 0))',
},
animation: { 'fade-in': 'fadeIn 0.5s ease-out forwards' },
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}
// Simple client-side router for demo purposes
function switchPage(pageId) {
// Hide all pages
document.querySelectorAll('.page-content').forEach(el => {
el.classList.add('hidden');
el.classList.remove('animate-fade-in');
});
// Show selected page
const selected = document.getElementById(pageId);
selected.classList.remove('hidden');
// Trigger animation reflow
void selected.offsetWidth;
selected.classList.add('animate-fade-in');
// Update Active Nav State
document.querySelectorAll('.nav-link').forEach(el => {
el.classList.remove('text-zinc-100');
el.classList.add('text-zinc-500');
});
document.getElementById(`nav-${pageId}`).classList.remove('text-zinc-500');
document.getElementById(`nav-${pageId}`).classList.add('text-zinc-100');
window.scrollTo(0,0);
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
      


<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-zinc-950/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group cursor-pointer" href="javascript:switchPage('home')">
<div className="w-8 h-8 rounded bg-zinc-100 flex items-center justify-center text-zinc-950 shadow-lg shadow-zinc-500/20">
<iconify-icon icon="solar:infinity-bold" width="20"></iconify-icon>
</div>
<span className="text-zinc-100 font-medium tracking-tight text-lg">
            Alestra
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<button className="nav-link text-zinc-100 hover:text-zinc-100 transition-colors" id="nav-home" onclick="switchPage('home')">
            Home
          </button>
<button className="nav-link text-zinc-500 hover:text-zinc-100 transition-colors" id="nav-about" onclick="switchPage('about')">
            About
          </button>
<button className="nav-link text-zinc-500 hover:text-zinc-100 transition-colors" id="nav-services" onclick="switchPage('services')">
            Services
          </button>
<button className="nav-link text-zinc-500 hover:text-zinc-100 transition-colors" id="nav-technology" onclick="switchPage('technology')">
            Technology
          </button>
<button className="nav-link text-zinc-500 hover:text-zinc-100 transition-colors" id="nav-portfolio" onclick="switchPage('portfolio')">
            Portfolio
          </button>
<button className="nav-link text-zinc-500 hover:text-zinc-100 transition-colors" id="nav-contact" onclick="switchPage('contact')">
            Contact
          </button>
</div>

<div className="flex items-center gap-4">
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-zinc-100 px-4 font-medium text-zinc-950 transition-all hover:bg-white hover:ring-2 hover:ring-zinc-200 hover:ring-offset-2 hover:ring-offset-zinc-950" href="#contact" onclick="switchPage('contact')">
<span className="text-xs tracking-wide">Get Started</span>
</a>
</div>
</div>
</nav>

<main className="page-content hidden" id="technology">
<div className="max-w-7xl mx-auto px-6 pb-20">
<div className="pt-12 mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Technology Stack
          </h2>
<p className="text-zinc-400 max-w-2xl mx-auto font-light">
            We leverage industry-leading platforms and tools to deliver robust,
            scalable, and future-proof solutions.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-12 mb-16">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="solar:cloud-bold" width="24"></iconify-icon>
              Cloud Platforms
            </h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center">
<iconify-icon icon="logos:aws" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">AWS</div>
<div className="text-xs text-zinc-500">Amazon Web Services</div>
</div>
</div>
<div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center">
<iconify-icon icon="logos:microsoft-azure" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Azure</div>
<div className="text-xs text-zinc-500">Microsoft Cloud</div>
</div>
</div>
<div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center">
<iconify-icon icon="logos:google-cloud" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">GCP</div>
<div className="text-xs text-zinc-500">Google Cloud Platform</div>
</div>
</div>
<div className="p-4 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="simple-icons:digitalocean" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">DigitalOcean</div>
<div className="text-xs text-zinc-500">Cloud Infrastructure</div>
</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-orange-400" icon="solar:shield-warning-bold" width="24"></iconify-icon>
              Security &amp; Compliance
            </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<div className="text-white font-medium">Palo Alto Networks</div>
<div className="text-sm text-zinc-500">
                    Next-gen firewall solutions
                  </div>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<div className="text-white font-medium">CrowdStrike Falcon</div>
<div className="text-sm text-zinc-500">
                    Endpoint protection platform
                  </div>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<div className="text-white font-medium">Splunk</div>
<div className="text-sm text-zinc-500">
                    Security information &amp; event management
                  </div>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<div className="text-white font-medium">
                    Compliance Frameworks
                  </div>
<div className="text-sm text-zinc-500">
                    SOC 2, ISO 27001, HIPAA, GDPR
                  </div>
</div>
</li>
</ul>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="solar:database-bold" width="20"></iconify-icon>
              Databases
            </h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                PostgreSQL
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                MySQL / MariaDB
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                MongoDB
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Redis
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Amazon RDS
              </li>
</ul>
</div>
<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-purple-400" icon="solar:code-bold" width="20"></iconify-icon>
              Development
            </h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                React / Next.js
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Node.js / Python
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                .NET / Java
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Docker / Kubernetes
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Terraform / Ansible
              </li>
</ul>
</div>
<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
<h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
<iconify-icon className="text-blue-400" icon="solar:chart-square-bold" width="20"></iconify-icon>
              Analytics &amp; BI
            </h3>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Tableau
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Power BI
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Looker
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Apache Spark
              </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:programming-bold"></iconify-icon>
                Snowflake
              </li>
</ul>
</div>
</div>
</div>
</main>
<main className="page-content hidden" id="contact">
<div className="max-w-4xl mx-auto px-6 pb-20">
<div className="pt-12 mb-12 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
            Get In Touch
          </h2>
<p className="text-zinc-400 max-w-xl mx-auto font-light">
            Ready to transform your IT infrastructure? Our team is here to help.
            Schedule a free consultation today.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-indigo-400" icon="solar:phone-bold" width="24"></iconify-icon>
</div>
<div className="text-sm text-zinc-500 mb-1">Phone</div>
<div className="text-white font-medium">+1 (555) 123-4567</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-emerald-400" icon="solar:letter-bold" width="24"></iconify-icon>
</div>
<div className="text-sm text-zinc-500 mb-1">Email</div>
<div className="text-white font-medium">contact@alestra.com</div>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-purple-400" icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div className="text-sm text-zinc-500 mb-1">Office</div>
<div className="text-white font-medium">San Francisco, CA</div>
</div>
</div>
<div className="p-8 md:p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800">
<h3 className="text-xl font-semibold text-white mb-6">
            Send Us a Message
          </h3>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                  First Name *
                </label>
<input className="w-full h-11 rounded-lg bg-zinc-950 border border-zinc-800 px-4 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                  Last Name *
                </label>
<input className="w-full h-11 rounded-lg bg-zinc-950 border border-zinc-800 px-4 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                  Email Address *
                </label>
<input className="w-full h-11 rounded-lg bg-zinc-950 border border-zinc-800 px-4 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                  Phone Number
                </label>
<input className="w-full h-11 rounded-lg bg-zinc-950 border border-zinc-800 px-4 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                Company Name
              </label>
<input className="w-full h-11 rounded-lg bg-zinc-950 border border-zinc-800 px-4 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                Service Interest
              </label>
<select className="w-full h-11 rounded-lg bg-zinc-950 border border-zinc-800 px-4 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all">
<option>IT Consulting &amp; Strategy</option>
<option>Cloud Infrastructure</option>
<option>Cybersecurity Solutions</option>
<option>Managed IT Services</option>
<option>Data Analytics &amp; BI</option>
<option>Custom Software Development</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-zinc-300 mb-2">
                Message *
              </label>
<textarea className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none" placeholder="Tell us about your project or needs..." required="" rows="5"></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 rounded border-zinc-700 bg-zinc-900 text-indigo-500 focus:ring-indigo-500" required="" type="checkbox"/>
<label className="text-sm text-zinc-400">
                I agree to the
                <a className="text-indigo-400 hover:text-indigo-300" href="#">
                  Privacy Policy
                </a>
                and consent to being contacted by Alestra Solutions.
              </label>
</div>
<button className="w-full h-12 rounded-lg bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors" type="submit">
              Send Message
            </button>
</form>
</div>
<div className="mt-12 p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
<div className="text-center mb-4">
<h4 className="text-lg font-semibold text-white mb-2">
              Visit Our Office
            </h4>
<p className="text-sm text-zinc-500">Alestra Solutions Headquarters</p>
</div>
<div className="aspect-video rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-zinc-700" icon="solar:map-bold" width="48"></iconify-icon>
<p className="text-zinc-600 text-sm mt-2">Map embed placeholder</p>
<p className="text-zinc-500 text-xs">
                123 Tech Boulevard, San Francisco, CA 94105
              </p>
</div>
</div>
</div>
</div>
</main>
<div className="flex-grow pt-24 relative z-10">

<main className="page-content animate-fade-in block" id="home">
<div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-md mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 relative">
<span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 animate-ping"></span>
</span>
              Trusted by 500+ Businesses Worldwide
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-500 max-w-5xl mx-auto leading-[1.1] mb-6">
              Transform Your Business with
              <br/>
              Modern IT Solutions
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              We deliver enterprise-grade technology services that drive growth,
              enhance security, and optimize operations for forward-thinking
              organizations.
            </p>
<div className="flex justify-center gap-4 flex-wrap">
<button className="h-11 px-6 rounded-full bg-zinc-100 hover:bg-white text-zinc-950 text-sm font-medium transition-all" onclick="switchPage('services')">
                Explore Services
              </button>
<button className="h-11 px-6 rounded-full border border-zinc-800 hover:border-zinc-600 text-zinc-300 text-sm font-medium transition-all" onclick="switchPage('contact')">
                Schedule Consultation
              </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all group">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Enterprise Security
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Advanced cybersecurity solutions protecting your data,
                infrastructure, and reputation with 24/7 monitoring and threat
                response.
              </p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all group">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400" icon="solar:cloud-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
                Cloud Infrastructure
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Scalable cloud solutions leveraging AWS, Azure, and Google Cloud
                to reduce costs and increase operational efficiency.
              </p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400" icon="solar:chart-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">IT Consulting</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Strategic technology roadmaps and digital transformation
                consulting to align IT investments with business objectives.
              </p>
</div>
</div>
<div className="mb-24 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              How We Work
            </h2>
<p className="text-zinc-400 max-w-2xl mx-auto mb-12">
              Our proven methodology ensures successful project delivery from
              discovery to deployment
            </p>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 relative">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-4 text-indigo-400 font-semibold">
                  1
                </div>
<h4 className="text-white font-medium mb-2">Discovery</h4>
<p className="text-sm text-zinc-500">
                  Understanding your business needs, challenges, and objectives
                </p>
<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-zinc-800"></div>
</div>
<div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 relative">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400 font-semibold">
                  2
                </div>
<h4 className="text-white font-medium mb-2">Strategy</h4>
<p className="text-sm text-zinc-500">
                  Designing customized solutions aligned with your goals
                </p>
<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-zinc-800"></div>
</div>
<div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800 relative">
<div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4 text-purple-400 font-semibold">
                  3
                </div>
<h4 className="text-white font-medium mb-2">Implementation</h4>
<p className="text-sm text-zinc-500">
                  Executing projects with precision and minimal disruption
                </p>
<div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-zinc-800"></div>
</div>
<div className="p-6 rounded-xl bg-zinc-950 border border-zinc-800">
<div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-4 text-orange-400 font-semibold">
                  4
                </div>
<h4 className="text-white font-medium mb-2">Optimization</h4>
<p className="text-sm text-zinc-500">
                  Continuous monitoring, support, and improvement
                </p>
</div>
</div>
</div>
<div className="mb-24">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                By The Numbers
              </h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
                Our track record speaks for itself
              </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2">
                  15+
                </div>
<div className="text-sm text-zinc-500">Years Experience</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2">
                  500+
                </div>
<div className="text-sm text-zinc-500">Active Clients</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2">
                  2k+
                </div>
<div className="text-sm text-zinc-500">Projects Completed</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 text-center">
<div className="text-4xl md:text-5xl font-semibold text-white mb-2">
                  99.9%
                </div>
<div className="text-sm text-zinc-500">Uptime SLA</div>
</div>
</div>
</div>
<div className="border-t border-zinc-800 pt-16 mb-24">
<div className="text-center mb-12">
<span className="text-xs uppercase tracking-wider text-zinc-500 font-medium mb-4 block">
                Trusted By Industry Leaders
              </span>
<div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
<div className="text-zinc-600 text-2xl font-semibold">TechCorp</div>
<div className="text-zinc-600 text-2xl font-semibold">
                  GlobalBank
                </div>
<div className="text-zinc-600 text-2xl font-semibold">
                  MediHealth
                </div>
<div className="text-zinc-600 text-2xl font-semibold">
                  RetailPro
                </div>
</div>
</div>
</div>
<div className="mb-24">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                Client Testimonials
              </h2>
<p className="text-zinc-400 max-w-2xl mx-auto">
                What our clients say about working with us
              </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  "Alestra transformed our entire IT infrastructure. Their
                  expertise in cloud migration saved us 40% on costs while
                  improving performance dramatically."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:user-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">
                      James Peterson
                    </div>
<div className="text-xs text-zinc-500">CTO, TechCorp</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  "Outstanding security implementation. We achieved full
                  compliance and their 24/7 monitoring gives us complete peace
                  of mind."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:user-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">
                      Maria Rodriguez
                    </div>
<div className="text-xs text-zinc-500">VP IT, MediHealth</div>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  "A true technology partner. Their managed services have freed
                  up our team to focus on strategic initiatives instead of daily
                  firefighting."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:user-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">David Chen</div>
<div className="text-xs text-zinc-500">CEO, RetailPro</div>
</div>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center mb-24">
<div>
<span className="text-indigo-400 font-medium tracking-wider text-xs uppercase mb-4 block">
                Why Choose Alestra
              </span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                Technology Partner You Can Trust
              </h2>
<p className="text-zinc-400 leading-relaxed mb-6">
                With over 15 years of experience delivering mission-critical IT
                solutions, we combine technical excellence with business acumen
                to drive measurable results.
              </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<strong className="text-white">99.9% Uptime SLA</strong>
<br/>
<span className="text-zinc-500 text-sm">
                      Enterprise-grade reliability and performance guarantees
                    </span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<strong className="text-white">Certified Experts</strong>
<br/>
<span className="text-zinc-500 text-sm">
                      AWS, Azure, Cisco, and Microsoft certified professionals
                    </span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 mt-1" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div>
<strong className="text-white">24/7 Support</strong>
<br/>
<span className="text-zinc-500 text-sm">
                      Round-the-clock monitoring and rapid response team
                    </span>
</div>
</li>
</ul>
</div>
<div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-700" icon="solar:server-bold" width="120"></iconify-icon>
</div>
</div>
<div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-12 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
<p className="text-zinc-400 max-w-2xl mx-auto mb-8">
              Schedule a free consultation with our technology experts to
              discuss your challenges and explore tailored solutions.
            </p>
<button className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" onclick="switchPage('contact')">
              Start Your Journey
            </button>
</div>
</div>
</main>

<main className="page-content hidden" id="portfolio">
<div className="max-w-7xl mx-auto px-6 pb-20">
<div className="pt-12 mb-16 border-b border-zinc-800/50 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                Client Success Stories
              </h2>
<p className="text-zinc-400 max-w-md font-light">
                Real results from businesses that partnered with us to transform
                their technology infrastructure.
              </p>
</div>
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
<button className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-950 text-xs font-medium">
                All Industries
              </button>
<button className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 text-xs font-medium transition-all">
                Finance
              </button>
<button className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 text-xs font-medium transition-all">
                Healthcare
              </button>
<button className="px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 text-xs font-medium transition-all">
                Retail
              </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-6 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-zinc-900/0"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
<div className="w-2/3 h-2/3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg blur-2xl"></div>
</div>

<div className="absolute bottom-0 left-8 right-8 h-2/3 bg-zinc-950 rounded-t-xl border-t border-x border-zinc-800 shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
<div className="p-4 flex gap-4 border-b border-zinc-900">
<div className="w-16 h-2 bg-zinc-900 rounded-full"></div>
<div className="w-8 h-2 bg-zinc-900 rounded-full"></div>
</div>
<div className="p-4 grid grid-cols-3 gap-4">
<div className="h-20 bg-zinc-900/50 rounded"></div>
<div className="h-20 bg-zinc-900/50 rounded"></div>
<div className="h-20 bg-zinc-900/50 rounded"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">
                    Fintech
                  </span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-xs text-zinc-500">2024</span>
</div>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-indigo-200 transition-colors flex items-center gap-2">
                Global Bank Infrastructure Migration
                <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">
<strong className="text-white">Challenge:</strong>
                Legacy on-premise systems causing operational inefficiencies.
                <strong className="text-white">Solution:</strong>
                Migrated to AWS cloud with zero downtime.
                <strong className="text-white">Result:</strong>
                40% cost reduction, 3x faster processing.
              </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-6 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-zinc-900/0"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
<div className="w-2/3 h-2/3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg blur-2xl"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-zinc-800 text-6xl" icon="solar:cart-large-4-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">
                    E-Commerce
                  </span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-xs text-zinc-500">2023</span>
</div>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-emerald-200 transition-colors flex items-center gap-2">
                Healthcare Network Security Overhaul
                <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">
<strong className="text-white">Challenge:</strong>
                HIPAA compliance gaps and security vulnerabilities.
                <strong className="text-white">Solution:</strong>
                Implemented multi-layer security with 24/7 monitoring.
                <strong className="text-white">Result:</strong>
                Full compliance, zero breaches in 2 years.
              </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-6 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 to-zinc-900/0"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
<div className="w-2/3 h-2/3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg blur-2xl"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-zinc-700/50 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-zinc-700/50 flex items-center justify-center">
<div className="w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)]"></div>
</div>
</div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-pink-400 uppercase tracking-wider">
                    AI Platform
                  </span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-xs text-zinc-500">2023</span>
</div>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-pink-200 transition-colors flex items-center gap-2">
                Retail Chain Digital Transformation
                <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">
<strong className="text-white">Challenge:</strong>
                Disconnected POS systems across 200+ stores.
                <strong className="text-white">Solution:</strong>
                Unified cloud-based inventory and analytics platform.
                <strong className="text-white">Result:</strong>
                Real-time insights, 25% inventory optimization.
              </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 mb-6 group-hover:border-zinc-600 transition-colors">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-900/20 to-zinc-900/0"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
<div className="w-2/3 h-2/3 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg blur-2xl"></div>
</div>
<div className="absolute bottom-8 left-8 p-4 bg-zinc-950/80 backdrop-blur border border-zinc-800 rounded-lg">
<iconify-icon className="text-orange-500" icon="solar:graph-up-bold" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-orange-400 uppercase tracking-wider">
                    Analytics
                  </span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-xs text-zinc-500">2022</span>
</div>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-orange-200 transition-colors flex items-center gap-2">
                Manufacturing IoT Integration
                <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">
<strong className="text-white">Challenge:</strong>
                Manual monitoring of production lines causing delays.
                <strong className="text-white">Solution:</strong>
                IoT sensors with predictive maintenance AI.
                <strong className="text-white">Result:</strong>
                60% reduction in downtime, $2M annual savings.
              </p>
</div>
</div>

<div className="mt-20 p-12 rounded-3xl bg-zinc-900/30 border border-zinc-800 text-center">
<h3 className="text-2xl text-white font-semibold mb-4">
              Ready to Write Your Success Story?
            </h3>
<p className="text-zinc-500 mb-8 max-w-lg mx-auto">
              Join hundreds of satisfied clients who have transformed their
              businesses with our IT solutions.
            </p>
<button className="inline-flex h-11 items-center justify-center rounded-full bg-white px-8 font-medium text-zinc-950 hover:bg-zinc-200 transition-colors" onclick="switchPage('contact')">
              Schedule Consultation
            </button>
</div>
</div>
</main>

<main className="page-content hidden" id="services">
<div className="max-w-7xl mx-auto px-6 pb-20">
<div className="pt-12 mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
              Our Services
            </h2>
<p className="text-zinc-400 max-w-2xl mx-auto font-light mb-8">
              Comprehensive IT solutions designed to modernize your
              infrastructure, secure your assets, and accelerate business
              growth.
            </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
<div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="solar:lightbulb-bolt-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">
                  IT Consulting &amp; Strategy
                </h3>
</div>
<p className="text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-900">
                Expert guidance to align your technology investments with
                business objectives and long-term growth plans.
              </p>
<ul className="space-y-3 text-sm text-zinc-400 mb-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon>
                  Technology Roadmap Development
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon>
                  Digital Transformation Planning
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon>
                  IT Budget Optimization
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-bold"></iconify-icon>
                  Vendor Selection &amp; Management
                </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium transition-all text-sm" onclick="switchPage('contact')">
                Learn More
              </button>
</div>
<div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="solar:cloud-check-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">
                  Cloud Infrastructure
                </h3>
</div>
<p className="text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-900">
                Scalable, secure cloud solutions leveraging AWS, Azure, and
                Google Cloud Platform for maximum flexibility.
              </p>
<ul className="space-y-3 text-sm text-zinc-400 mb-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
                  Cloud Migration &amp; Deployment
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
                  Multi-Cloud Strategy
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
                  Infrastructure as Code (IaC)
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
                  Cost Optimization &amp; Monitoring
                </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium transition-all text-sm" onclick="switchPage('contact')">
                Learn More
              </button>
</div>
<div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
<iconify-icon className="text-orange-400" icon="solar:shield-warning-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">
                  Cybersecurity Solutions
                </h3>
</div>
<p className="text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-900">
                Comprehensive security services to protect your data,
                infrastructure, and reputation from evolving threats.
              </p>
<ul className="space-y-3 text-sm text-zinc-400 mb-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon>
                  24/7 Security Monitoring
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon>
                  Penetration Testing &amp; Audits
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon>
                  Incident Response &amp; Recovery
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-orange-500" icon="solar:check-circle-bold"></iconify-icon>
                  Compliance Management
                </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium transition-all text-sm" onclick="switchPage('contact')">
                Learn More
              </button>
</div>
<div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
<iconify-icon className="text-purple-400" icon="solar:settings-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">
                  Managed IT Services
                </h3>
</div>
<p className="text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-900">
                Proactive IT management and support to keep your systems running
                smoothly and your team productive.
              </p>
<ul className="space-y-3 text-sm text-zinc-400 mb-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon>
                  Help Desk &amp; End-User Support
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon>
                  Network Administration
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon>
                  Server &amp; Database Management
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-500" icon="solar:check-circle-bold"></iconify-icon>
                  Backup &amp; Disaster Recovery
                </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium transition-all text-sm" onclick="switchPage('contact')">
                Learn More
              </button>
</div>
<div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<iconify-icon className="text-blue-400" icon="solar:chart-square-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">
                  Data Analytics &amp; BI
                </h3>
</div>
<p className="text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-900">
                Transform raw data into actionable insights with business
                intelligence and advanced analytics solutions.
              </p>
<ul className="space-y-3 text-sm text-zinc-400 mb-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                  Data Warehouse Design
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                  Real-Time Dashboards
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                  Predictive Analytics
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                  AI/ML Integration
                </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium transition-all text-sm" onclick="switchPage('contact')">
                Learn More
              </button>
</div>
<div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center border border-pink-500/20">
<iconify-icon className="text-pink-400" icon="solar:code-bold" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">
                  Custom Software Development
                </h3>
</div>
<p className="text-sm text-zinc-400 mb-6 pb-6 border-b border-zinc-900">
                Bespoke software solutions tailored to your unique business
                processes and competitive requirements.
              </p>
<ul className="space-y-3 text-sm text-zinc-400 mb-6">
<li className="flex items-center gap-3">
<iconify-icon className="text-pink-500" icon="solar:check-circle-bold"></iconify-icon>
                  Web &amp; Mobile Applications
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-pink-500" icon="solar:check-circle-bold"></iconify-icon>
                  API Development &amp; Integration
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-pink-500" icon="solar:check-circle-bold"></iconify-icon>
                  Legacy System Modernization
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-pink-500" icon="solar:check-circle-bold"></iconify-icon>
                  DevOps &amp; CI/CD
                </li>
</ul>
<button className="w-full h-10 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium transition-all text-sm" onclick="switchPage('contact')">
                Learn More
              </button>
</div>
</div>
</div>
</main>

<main className="page-content hidden" id="about">
<div className="max-w-7xl mx-auto px-6 pb-20">
<div className="pt-12 mb-12 border-b border-zinc-800 pb-8">
<span className="text-indigo-400 font-medium tracking-wider text-xs uppercase mb-2 block">
              About Alestra Solutions
            </span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Empowering Businesses Through Technology
            </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-2">
<div className="mb-12">
<h3 className="text-2xl font-semibold text-white mb-4">
                  Our Mission
                </h3>
<p className="text-zinc-400 leading-relaxed mb-4">
                  At Alestra Solutions, we exist to bridge the gap between
                  business ambition and technological capability. Our mission is
                  to empower organizations with innovative IT solutions that
                  drive measurable growth, enhance operational efficiency, and
                  create lasting competitive advantages.
                </p>
<p className="text-zinc-400 leading-relaxed">
                  We believe technology should be an enabler, not a barrier.
                  That's why we take a consultative, partnership-first
                  approach—understanding your unique challenges before
                  prescribing solutions.
                </p>
</div>
<div className="mb-12">
<h3 className="text-2xl font-semibold text-white mb-4">
                  Our Vision
                </h3>
<p className="text-zinc-400 leading-relaxed">
                  To become the most trusted technology partner for mid-market
                  and enterprise organizations globally, recognized for
                  delivering exceptional outcomes, fostering long-term
                  relationships, and pioneering innovative solutions that shape
                  the future of business technology.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
<div className="text-4xl font-semibold text-white mb-2">15+</div>
<div className="text-sm text-zinc-500">Years in Business</div>
</div>
<div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
<div className="text-4xl font-semibold text-white mb-2">500+</div>
<div className="text-sm text-zinc-500">Clients Worldwide</div>
</div>
<div className="p-6 rounded-xl bg-zinc-900/30 border border-zinc-800">
<div className="text-4xl font-semibold text-white mb-2">
                    99.9%
                  </div>
<div className="text-sm text-zinc-500">Client Satisfaction</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:shield-check-bold"></iconify-icon>
                  Integrity
                </h4>
<p className="text-sm text-zinc-500">
                  We operate with transparency, honesty, and ethical standards
                  in every client interaction and business decision.
                </p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:star-bold"></iconify-icon>
                  Excellence
                </h4>
<p className="text-sm text-zinc-500">
                  We pursue mastery in our craft, continuously learning and
                  improving to deliver world-class solutions.
                </p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:users-group-two-rounded-bold"></iconify-icon>
                  Collaboration
                </h4>
<p className="text-sm text-zinc-500">
                  We work as an extension of your team, fostering open
                  communication and shared ownership of success.
                </p>
</div>
<div className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800">
<h4 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-orange-400" icon="solar:lightbulb-bolt-bold"></iconify-icon>
                  Innovation
                </h4>
<p className="text-sm text-zinc-500">
                  We embrace emerging technologies and creative problem-solving
                  to deliver cutting-edge solutions.
                </p>
</div>
</div>
</div>

<div className="mt-12 rounded-2xl bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-1/2">
<h3 className="text-xl font-semibold text-white mb-2">
                Meet Our Leadership Team
              </h3>
<p className="text-sm text-zinc-500">
                Experienced professionals committed to your success and driving
                innovation in IT services.
              </p>
</div>
<div className="w-full md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 mx-auto mb-3 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:user-bold" width="32"></iconify-icon>
</div>
<div className="text-sm font-medium text-white">Sarah Chen</div>
<div className="text-xs text-zinc-500">CEO &amp; Founder</div>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 mx-auto mb-3 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:user-bold" width="32"></iconify-icon>
</div>
<div className="text-sm font-medium text-white">Michael Torres</div>
<div className="text-xs text-zinc-500">CTO</div>
</div>
<div className="text-center">
<div className="w-20 h-20 rounded-full bg-zinc-800 border border-zinc-700 mx-auto mb-3 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:user-bold" width="32"></iconify-icon>
</div>
<div className="text-sm font-medium text-white">Aisha Patel</div>
<div className="text-xs text-zinc-500">VP Operations</div>
</div>
</div>
</div>
</div>
</main>
</div>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-6 relative z-10 text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:infinity-bold" width="14"></iconify-icon>
</div>
<span className="text-zinc-500">© 2024 Alestra Solutions.</span>
</div>
<div className="flex items-center gap-8">
<button className="text-zinc-500 hover:text-white transition-colors" onclick="switchPage('about')">
            About
          </button>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="switchPage('services')">
            Services
          </button>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="switchPage('technology')">
            Technology
          </button>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="switchPage('portfolio')">
            Portfolio
          </button>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="switchPage('contact')">
            Contact
          </button>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
            Privacy
          </a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
            Terms
          </a>
</div>
</div>
</footer>

    </>
  );
}
