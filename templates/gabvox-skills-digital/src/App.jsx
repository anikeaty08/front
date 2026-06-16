import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: { 850: '#151e32', 950: '#020617' }
}
}
}
}



        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-view');
            pages.forEach(page => {
                page.classList.add('hidden');
            });

            // Show selected page
            const selectedPage = document.getElementById(pageId);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
            }

            // Scroll to top
            window.scrollTo(0, 0);

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if(!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }

        function toggleMobile() {
             document.getElementById('mobile-menu').classList.add('hidden');
        }

        // Initialize home
        document.addEventListener('DOMContentLoaded', () => {
            // Optional: Check URL hash for routing
            const hash = window.location.hash.substring(1);
            if (hash && document.getElementById(hash)) {
                showPage(hash);
            } else if (hash && document.getElementById('service-'+hash)) {
                 showPage('service-'+hash);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="cursor-pointer text-white text-lg font-semibold tracking-tight flex items-center gap-2" onclick="showPage('home')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<span className="iconify" data-icon="lucide:zap" data-width="18"></span>
</div>
                GABVOX
            </a>
<div className="hidden lg:flex items-center gap-1 text-sm font-medium text-slate-400 bg-white/5 p-1 rounded-full border border-white/5">
<button className="nav-btn px-4 py-1.5 rounded-full hover:text-white transition-all" onclick="showPage('home')">Home</button>
<button className="nav-btn px-4 py-1.5 rounded-full hover:text-white transition-all" onclick="showPage('about')">About</button>
<button className="nav-btn px-4 py-1.5 rounded-full hover:text-white transition-all" onclick="showPage('services')">Services</button>
<button className="nav-btn px-4 py-1.5 rounded-full hover:text-white transition-all" onclick="showPage('portfolio')">Portfolio</button>
<button className="nav-btn px-4 py-1.5 rounded-full hover:text-white transition-all" onclick="showPage('blog')">Blog</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-5 py-2 rounded-full text-xs font-semibold hover:bg-slate-200 transition-all" onclick="showPage('contact')">
                    Book Consultation
                </button>
<button className="lg:hidden text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>

<div className="hidden lg:hidden border-t border-white/5 bg-slate-950 absolute w-full p-4 space-y-2" id="mobile-menu">
<button className="block w-full text-left text-sm py-2 px-4 hover:bg-white/5 rounded-lg" onclick="showPage('home'); toggleMobile()">Home</button>
<button className="block w-full text-left text-sm py-2 px-4 hover:bg-white/5 rounded-lg" onclick="showPage('services'); toggleMobile()">Services</button>
<button className="block w-full text-left text-sm py-2 px-4 hover:bg-white/5 rounded-lg" onclick="showPage('portfolio'); toggleMobile()">Portfolio</button>
<button className="block w-full text-left text-sm py-2 px-4 hover:bg-white/5 rounded-lg" onclick="showPage('contact'); toggleMobile()">Contact</button>
</div>
</nav>

<main className="pt-16 min-h-screen relative">

<section className="page-view fade-in" id="home">
<div className="relative pt-20 pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow"></div>
<div className="max-w-5xl mx-auto px-6 text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Top Rated Fiverr Freelancer &amp; Automation Expert
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                        Scalable Digital Solutions for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Modern Businesses</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        I build intelligent automation systems, verify Google profiles, and design high-converting digital assets. Elevate your brand with precision engineering.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-900/20" onclick="showPage('contact')">
                            Book a Consultation
                        </button>
<button className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 px-8 py-3.5 rounded-full text-sm font-medium transition-all" onclick="showPage('portfolio')">
                            View Work
                        </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 pb-24">
<h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">Core Competencies</h2>
<div className="grid md:grid-cols-4 gap-4">
<div className="p-6 bg-slate-900/50 border border-white/5 rounded-xl hover:border-blue-500/30 cursor-pointer transition-all" onclick="showPage('service-whatsapp')">
<span className="iconify text-green-500 mb-4" data-icon="lucide:message-circle" data-width="24"></span>
<h3 className="text-white font-medium mb-1">Automation</h3>
<p className="text-xs text-slate-400">WhatsApp &amp; n8n Workflows</p>
</div>
<div className="p-6 bg-slate-900/50 border border-white/5 rounded-xl hover:border-purple-500/30 cursor-pointer transition-all" onclick="showPage('service-logo')">
<span className="iconify text-purple-500 mb-4" data-icon="lucide:palette" data-width="24"></span>
<h3 className="text-white font-medium mb-1">Design</h3>
<p className="text-xs text-slate-400">Logos &amp; Visual Identity</p>
</div>
<div className="p-6 bg-slate-900/50 border border-white/5 rounded-xl hover:border-indigo-500/30 cursor-pointer transition-all" onclick="showPage('service-shopify')">
<span className="iconify text-indigo-500 mb-4" data-icon="lucide:shopping-bag" data-width="24"></span>
<h3 className="text-white font-medium mb-1">E-Commerce</h3>
<p className="text-xs text-slate-400">Shopify &amp; Dropshipping</p>
</div>
<div className="p-6 bg-slate-900/50 border border-white/5 rounded-xl hover:border-blue-500/30 cursor-pointer transition-all" onclick="showPage('service-gbp')">
<span className="iconify text-blue-500 mb-4" data-icon="lucide:map-pin" data-width="24"></span>
<h3 className="text-white font-medium mb-1">Local SEO</h3>
<p className="text-xs text-slate-400">Google Business Profile</p>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="about">
<div className="max-w-4xl mx-auto px-6">
<h1 className="text-4xl font-semibold text-white mb-8">About Gabvox Gabriel</h1>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6 text-slate-400 leading-relaxed">
<p>I am a digital architect based in Nigeria, specializing in bridging the gap between complex technology and business growth. With over 5 years of experience on platforms like Fiverr and Upwork, I have helped hundreds of global clients optimize their digital footprint.</p>
<p>My philosophy is simple: <strong>Efficiency through Automation, Authority through Design.</strong> Whether I am coding a custom n8n workflow or designing a minimal logo, the goal is always to provide tangible ROI.</p>
<div className="flex gap-8 mt-6">
<div><div className="text-3xl font-bold text-white">500+</div><div className="text-xs text-slate-500 uppercase mt-1">Projects</div></div>
<div><div className="text-3xl font-bold text-white">4.9/5</div><div className="text-xs text-slate-500 uppercase mt-1">Rating</div></div>
<div><div className="text-3xl font-bold text-white">5+</div><div className="text-xs text-slate-500 uppercase mt-1">Years Exp</div></div>
</div>
</div>
<div className="bg-slate-900 aspect-square rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
<span className="text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors">GG</span>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="services">
<div className="max-w-6xl mx-auto px-6">
<h1 className="text-4xl font-semibold text-white mb-4 text-center">Digital Expertise</h1>
<p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">Select a service category to learn how I can help you scale.</p>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-purple-500/50 cursor-pointer transition-all" onclick="showPage('service-logo')">
<span className="iconify text-purple-400 w-10 h-10 mb-4" data-icon="lucide:pen-tool"></span>
<h3 className="text-xl text-white font-medium mb-2">Logo &amp; Banner Design</h3>
<p className="text-sm text-slate-400">Minimalist vector branding.</p>
</div>
<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-green-500/50 cursor-pointer transition-all" onclick="showPage('service-whatsapp')">
<span className="iconify text-green-400 w-10 h-10 mb-4" data-icon="lucide:message-square"></span>
<h3 className="text-xl text-white font-medium mb-2">WhatsApp Automation</h3>
<p className="text-sm text-slate-400">Chatbots &amp; API flows with n8n.</p>
</div>
<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-blue-400/50 cursor-pointer transition-all" onclick="showPage('service-telegram')">
<span className="iconify text-blue-400 w-10 h-10 mb-4" data-icon="lucide:send"></span>
<h3 className="text-xl text-white font-medium mb-2">Telegram Automation</h3>
<p className="text-sm text-slate-400">Community management bots.</p>
</div>
<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-red-500/50 cursor-pointer transition-all" onclick="showPage('service-gbp')">
<span className="iconify text-red-400 w-10 h-10 mb-4" data-icon="lucide:map-pin"></span>
<h3 className="text-xl text-white font-medium mb-2">Google Business Profile</h3>
<p className="text-sm text-slate-400">Verification &amp; Local SEO.</p>
</div>
<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-yellow-500/50 cursor-pointer transition-all" onclick="showPage('service-vibe')">
<span className="iconify text-yellow-400 w-10 h-10 mb-4" data-icon="lucide:code-2"></span>
<h3 className="text-xl text-white font-medium mb-2">VIBE Coding</h3>
<p className="text-sm text-slate-400">Modern web development.</p>
</div>
<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-green-300/50 cursor-pointer transition-all" onclick="showPage('service-shopify')">
<span className="iconify text-green-300 w-10 h-10 mb-4" data-icon="lucide:shopping-bag"></span>
<h3 className="text-xl text-white font-medium mb-2">Shopify Store Setup</h3>
<p className="text-sm text-slate-400">Design &amp; Dropshipping setup.</p>
</div>
<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-orange-500/50 cursor-pointer transition-all" onclick="showPage('service-seo')">
<span className="iconify text-orange-400 w-10 h-10 mb-4" data-icon="lucide:search"></span>
<h3 className="text-xl text-white font-medium mb-2">SEO Writing</h3>
<p className="text-sm text-slate-400">Content that ranks.</p>
</div>
<div className="group p-8 bg-slate-900 rounded-xl border border-white/5 hover:border-blue-600/50 cursor-pointer transition-all" onclick="showPage('service-facebook')">
<span className="iconify text-blue-600 w-10 h-10 mb-4" data-icon="lucide:facebook"></span>
<h3 className="text-xl text-white font-medium mb-2">Facebook Management</h3>
<p className="text-sm text-slate-400">Page setup &amp; optimization.</p>
</div>
</div>
</div>
</section>


<section className="page-view hidden fade-in py-20" id="service-logo">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">Logo &amp; Banner Design</h1>
<p className="text-slate-400 mb-8">Brand identity is your silent ambassador. I create scalable, vector-based logos and social media kits that resonate with your target audience.</p>
<h3 className="text-white font-medium mb-4">Features</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-purple-500" data-icon="lucide:check"></span> Vector Source Files (AI, SVG)</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-purple-500" data-icon="lucide:check"></span> Social Media Kit (FB, Twitter, LinkedIn)</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-purple-500" data-icon="lucide:check"></span> Brand Guidelines PDF</li>
</ul>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Start Project</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-purple-500 mx-auto mb-4" data-icon="lucide:pen-tool" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: Adobe Illustrator, Photoshop, Figma</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="service-whatsapp">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">WhatsApp Automation</h1>
<p className="text-slate-400 mb-8">Leverage the power of WhatsApp Cloud API. I build intelligent flows using n8n and Relevance AI to automate customer support and sales 24/7.</p>
<h3 className="text-white font-medium mb-4">Capabilities</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-green-500" data-icon="lucide:check"></span> n8n Workflow Integration</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-green-500" data-icon="lucide:check"></span> AI Chatbot (Relevance AI)</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-green-500" data-icon="lucide:check"></span> Bulk Broadcasting</li>
</ul>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Automate Now</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-green-500 mx-auto mb-4" data-icon="lucide:message-circle" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: n8n, Relevance AI, Postman</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="service-telegram">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">Telegram Automation</h1>
<p className="text-slate-400 mb-8">Manage communities effectively with custom Telegram bots. From welcome messages to payment integration within chat.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-blue-400" data-icon="lucide:check"></span> Group Management Bots</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-blue-400" data-icon="lucide:check"></span> Auto-forwarding &amp; Filtering</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-blue-400" data-icon="lucide:check"></span> Webhook Integration</li>
</ul>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Build Bot</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-blue-400 mx-auto mb-4" data-icon="lucide:send" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: BotFather, Python, n8n</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="service-gbp">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">Google Business Profile</h1>
<p className="text-slate-400 mb-8">Get verified and ranked in the Local Pack. I handle the complex verification process and optimize your profile for local search.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-red-500" data-icon="lucide:check"></span> Instant Verification Support</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-red-500" data-icon="lucide:check"></span> Local SEO Keyword Optimization</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-red-500" data-icon="lucide:check"></span> Review Management Strategy</li>
</ul>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Rank Locally</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-red-500 mx-auto mb-4" data-icon="lucide:map-pin" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: GMB, Google Maps, Local Falcon</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="service-vibe">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">VIBE Coding Services</h1>
<p className="text-slate-400 mb-8">Modern, fast, and responsive web development using the latest AI-assisted stacks. Get your MVP or landing page built in record time.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-yellow-500" data-icon="lucide:check"></span> HTML5 / Tailwind CSS</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-yellow-500" data-icon="lucide:check"></span> React &amp; Next.js</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-yellow-500" data-icon="lucide:check"></span> Rapid Prototyping</li>
</ul>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Get Code</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-yellow-500 mx-auto mb-4" data-icon="lucide:code" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: VS Code, Cursor, Tailwind</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="service-shopify">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">Shopify Store Setup</h1>
<p className="text-slate-400 mb-8">Launch a professional dropshipping or brand store. I handle theme customization, product upload, and app integration.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-green-300" data-icon="lucide:check"></span> Premium Theme Installation</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-green-300" data-icon="lucide:check"></span> Payment Gateway Setup</li>
<li className="flex items-center gap-3 text-slate-400"><span className="iconify text-green-300" data-icon="lucide:check"></span> App Integration (Klaviyo, Reviews)</li>
</ul>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Launch Store</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-green-300 mx-auto mb-4" data-icon="lucide:shopping-bag" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: Shopify, DSers, Canva</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="service-seo">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">SEO Writing</h1>
<p className="text-slate-400 mb-8">Content that ranks and converts. I write blog posts and website copy optimized for your target keywords.</p>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Order Content</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-orange-500 mx-auto mb-4" data-icon="lucide:file-text" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: SurferSEO, Ahrefs, Grammarly</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="service-facebook">
<div className="max-w-5xl mx-auto px-6">
<button className="text-sm text-slate-500 hover:text-white mb-8 flex items-center gap-1" onclick="showPage('services')"><span className="iconify" data-icon="lucide:arrow-left"></span> Back to Services</button>
<div className="grid md:grid-cols-2 gap-12">
<div>
<h1 className="text-4xl font-semibold text-white mb-6">Facebook Management</h1>
<p className="text-slate-400 mb-8">Complete setup and optimization of your Facebook Business Page, including Meta Business Suite configuration.</p>
<button className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium hover:bg-slate-200" onclick="showPage('contact')">Optimize Page</button>
</div>
<div className="bg-slate-900 rounded-xl border border-white/5 p-8 flex items-center justify-center">
<div className="text-center">
<span className="iconify text-blue-600 mx-auto mb-4" data-icon="lucide:facebook" data-width="48"></span>
<p className="text-sm text-slate-500">Tools: Meta Business Suite, Canva</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-4xl font-semibold text-white mb-12 text-center">Selected Work</h1>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
<div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-white font-medium">TechStart Branding</h3>
<p className="text-xs text-slate-400">Logo Design</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
<div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-white font-medium">Bistro GMB Rank #1</h3>
<p className="text-xs text-slate-400">Local SEO</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
<div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-white font-medium">E-Com WhatsApp Bot</h3>
<p className="text-xs text-slate-400">Automation</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
<div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-white font-medium">Crypto Telegram Bot</h3>
<p className="text-xs text-slate-400">Python/n8n</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
<div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-white font-medium">Fashion Shopify Store</h3>
<p className="text-xs text-slate-400">E-Commerce</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
<div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-slate-950 to-transparent">
<h3 className="text-white font-medium">SaaS SEO Blog</h3>
<p className="text-xs text-slate-400">Content Writing</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<h1 className="text-4xl font-semibold text-white mb-12 text-center">Client Feedback</h1>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
<div className="flex text-yellow-500 mb-4"><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span></div>
<p className="text-slate-400 text-sm mb-4">"Gabvox setup our WhatsApp automation perfectly. Sales increased by 30% in the first month."</p>
<p className="text-white text-xs font-semibold">David K. - CEO</p>
</div>
<div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
<div className="flex text-yellow-500 mb-4"><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span></div>
<p className="text-slate-400 text-sm mb-4">"Best GMB service on Fiverr. He got us verified when everyone else failed."</p>
<p className="text-white text-xs font-semibold">Sarah M. - Local Business</p>
</div>
<div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
<div className="flex text-yellow-500 mb-4"><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span></div>
<p className="text-slate-400 text-sm mb-4">"Incredible design work. The logo is exactly what we envisioned."</p>
<p className="text-white text-xs font-semibold">Mike T. - Tech Startup</p>
</div>
<div className="p-6 bg-slate-900/50 rounded-xl border border-white/5">
<div className="flex text-yellow-500 mb-4"><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span><span className="iconify" data-icon="lucide:star"></span></div>
<p className="text-slate-400 text-sm mb-4">"Professional, fast, and knowledgeable about n8n."</p>
<p className="text-white text-xs font-semibold">James R. - Agency Owner</p>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="blog">
<div className="max-w-4xl mx-auto px-6">
<h1 className="text-4xl font-semibold text-white mb-12">Insights</h1>
<div className="space-y-8">
<article className="p-6 bg-slate-900/30 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
<span className="text-xs text-blue-400 font-medium uppercase tracking-wide">Automation</span>
<h2 className="text-xl text-white font-medium mt-2 mb-3">How to Use n8n for WhatsApp Marketing</h2>
<p className="text-slate-400 text-sm">A comprehensive guide on setting up the Cloud API and connecting it to workflows.</p>
</article>
<article className="p-6 bg-slate-900/30 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer">
<span className="text-xs text-purple-400 font-medium uppercase tracking-wide">Design</span>
<h2 className="text-xl text-white font-medium mt-2 mb-3">The Psychology of Minimalist Logos</h2>
<p className="text-slate-400 text-sm">Why simple designs tend to be more memorable and scalable in 2024.</p>
</article>
<article className="p-6 bg-slate-900/30 rounded-xl border border-white/5 hover:border-red-500/30 transition-all cursor-pointer">
<span className="text-xs text-red-400 font-medium uppercase tracking-wide">SEO</span>
<h2 className="text-xl text-white font-medium mt-2 mb-3">GMB Video Verification Guide</h2>
<p className="text-slate-400 text-sm">Step-by-step process to pass the new video verification requirements for Google.</p>
</article>
</div>
</div>
</section>

<section className="page-view hidden fade-in py-20" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h1 className="text-4xl font-semibold text-white mb-4">Let's Work Together</h1>
<p className="text-slate-400">Based in Nigeria, serving clients worldwide. Fill out the form or chat via WhatsApp.</p>
</div>
<form className="space-y-4 mb-12">
<div className="grid md:grid-cols-2 gap-4">
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Name" type="text"/>
<input className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Email" type="email"/>
</div>
<select className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
<option>Select Service...</option>
<option>WhatsApp Automation</option>
<option>Google Business Profile</option>
<option>Logo Design</option>
<option>Shopify Store</option>
<option>Other</option>
</select>
<textarea className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500" placeholder="Tell me about your project..." rows="4"></textarea>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-4 rounded-lg transition-all" type="button">Send Message</button>
</form>
<div className="grid md:grid-cols-3 gap-6 text-center">
<a className="p-4 bg-slate-900 rounded-lg border border-white/5 hover:bg-slate-800 block" href="#">
<span className="iconify mx-auto text-green-500 mb-2" data-icon="lucide:message-circle"></span>
<span className="text-sm text-white">WhatsApp</span>
</a>
<a className="p-4 bg-slate-900 rounded-lg border border-white/5 hover:bg-slate-800 block" href="#">
<span className="iconify mx-auto text-blue-500 mb-2" data-icon="lucide:mail"></span>
<span className="text-sm text-white">Email</span>
</a>
<a className="p-4 bg-slate-900 rounded-lg border border-white/5 hover:bg-slate-800 block" href="#">
<span className="iconify mx-auto text-purple-500 mb-2" data-icon="lucide:linkedin"></span>
<span className="text-sm text-white">LinkedIn</span>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-slate-950 border-t border-white/5 py-12 mt-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<a className="text-white font-semibold flex items-center gap-2 mb-4" href="#">
<span className="iconify text-blue-500" data-icon="lucide:zap"></span> GABVOX
                </a>
<p className="text-slate-500 text-sm">Empowering businesses with cutting-edge digital solutions.</p>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><button className="hover:text-blue-400" onclick="showPage('service-whatsapp')">Automation</button></li>
<li><button className="hover:text-blue-400" onclick="showPage('service-logo')">Design</button></li>
<li><button className="hover:text-blue-400" onclick="showPage('service-gbp')">Local SEO</button></li>
<li><button className="hover:text-blue-400" onclick="showPage('service-shopify')">Shopify</button></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><button className="hover:text-blue-400" onclick="showPage('about')">About Me</button></li>
<li><button className="hover:text-blue-400" onclick="showPage('portfolio')">Portfolio</button></li>
<li><button className="hover:text-blue-400" onclick="showPage('blog')">Blog</button></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
<div className="flex gap-4 text-slate-500">
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
</div>
<p className="text-xs text-slate-600 mt-4">© 2024 Gabvox. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
