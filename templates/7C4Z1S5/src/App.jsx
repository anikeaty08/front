import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    window.onload = () => {
      particlesJS("particles-js", {
        "particles": {
          "number": {"value": 60},
          "color": {"value": "#fff"},
          "shape": {"type": "circle"},
          "opacity": {"value": 0.08, "random": true},
          "size": {"value": 3, "random": true},
          "move": {"enable": true, "speed": 0.7}
        },
        "interactivity": {"events": {"onhover": {"enable": false}}},
        "retina_detect": true
      });
    }
  


            window.addEventListener('DOMContentLoaded', function() {
              new Chart(document.getElementById('timelineChart').getContext('2d'), {
                type: 'bar',
                data: {
                  labels: ['Discovery', 'Design', 'Dev', 'Launch'],
                  datasets: [{
                    label: 'Weeks',
                    data: [1, 2, 2, 1],
                    backgroundColor: 'rgba(99,102,241,0.7)'
                  }]
                },
                options: {
                  plugins: {legend: {display: false},},
                  scales: {
                    y: {beginAtZero:true, ticks: {color: "#fff"}},
                    x: {ticks: {color: "#fff"}}
                  }
                }
              });
            });
          


    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none" id="particles-js"><canvas className="particles-js-canvas-el" height="876" style={{width: '100%', height: '100%'}} width="1425"></canvas></div>


<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex w-[94vw] max-w-5xl animate-fade-in-down bg-white/5 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-xl backdrop-blur-md items-center justify-between" style={{animationDelay: '0.1s'}}>
<div className="flex items-center">
<svg className="w-7 h-7" fill="none" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"></circle><circle cx="12" cy="12" fill="white" r="3"></circle></svg>
<span className="ml-2 text-base font-medium tracking-tight">Ikram</span>
</div>
<div className="hidden md:flex items-center gap-7 text-sm text-gray-300 ml-8">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="hover:text-white transition-colors" href="#faqs">FAQs</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3 ml-5">
<a className="hidden md:inline-block text-sm font-medium hover:text-white transition-colors" href="#contact">Let's Talk</a>
<a className="hover:bg-gray-200 transition-colors text-sm font-medium text-black bg-white rounded-full px-5 py-1.5 shadow hover:shadow-lg" href="#start">Start Project</a>
</div>
</nav>

<section className="relative z-10 flex flex-col min-h-screen text-center pt-36 pr-6 pb-32 pl-6 items-center justify-center">
<div className="absolute top-1/2 left-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-white/10 via-indigo-400/10 to-black/0 blur-[110px] rounded-full pointer-events-none"></div>
<span className="px-4 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/15 animate-fade-in" style={{animationDelay: '0.2s'}}>
      UI/UX Designer &amp; Product Expert
    </span>
<h1 className="md:text-6xl text-4xl font-semibold tracking-tighter leading-tight max-w-4xl animate-fade-in-up" style={{animationDelay: '0.3s'}}>
      Elevate Your Brand with <span className="text-indigo-400">Minimalist</span> &amp; Impactful Digital Experiences.
    </h1>
<p className="md:text-xl max-w-2xl text-lg text-neutral-300 mt-5 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
      Hi, I'm <span className="font-semibold text-white">Ikram</span> — I design, develop, and launch stunning websites, products, and brands that get results. 5+ years of proven results, from startups to global brands.
    </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
<a className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl outline-none focus-visible:ring-2 ring-indigo-400" href="#work">
        See My Work
      </a>
<a className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/20 transition-all border border-white/20" href="#contact">
        Book a Free Consultation
      </a>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/10 animate-fade-in-up" id="about" style={{animationDelay: '0.6s'}}>
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Who I Am
        </h2>
<p className="text-neutral-300 text-lg mb-6">
          I’m Ikram, a digital designer, developer, and strategist. Over the past 5 years, I’ve partnered with 70+ clients worldwide to launch products, brands, and experiences that matter. I blend <span className="text-white font-semibold">clarity</span>, <span className="text-white font-semibold">emotion</span>, and <span className="text-white font-semibold">conversion</span> into every pixel.
        </p>
<ul className="flex flex-wrap gap-6 text-sm">
<li className="flex items-center gap-3">
<svg className="lucide lucide-badge-check w-6 h-6 text-indigo-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
            5+ Years Experience
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-users w-6 h-6 text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            70+ Projects Delivered
          </li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-globe w-6 h-6 text-indigo-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
            Clients in 20+ Countries
          </li>
</ul>
</div>
<div className="flex flex-col items-center md:items-end">
<img alt="Ikram UI Designer" className="rounded-2xl w-72 h-72 object-cover shadow-2xl border-4 border-white/10 animate-fade-in" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80" style={{animationDelay: '0.7s'}}/>
<span className="block mt-6 text-neutral-400 text-sm italic">“Design is not just what it looks like, but how it works.”</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
<div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
<div className="text-3xl font-semibold text-indigo-400">98%</div>
<div className="text-xs mt-1 text-neutral-400">Client Satisfaction</div>
</div>
<div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center animate-fade-in-up" style={{animationDelay: '0.9s'}}>
<div className="text-3xl font-semibold text-indigo-400">3x</div>
<div className="text-xs mt-1 text-neutral-400">Average ROI Increase</div>
</div>
<div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center animate-fade-in-up" style={{animationDelay: '1s'}}>
<div className="text-3xl font-semibold text-indigo-400">50+</div>
<div className="text-xs mt-1 text-neutral-400">Websites Launched</div>
</div>
<div className="bg-white/5 rounded-lg p-6 border border-white/10 text-center animate-fade-in-up" style={{animationDelay: '1.1s'}}>
<div className="text-3xl font-semibold text-indigo-400">100k+</div>
<div className="text-xs mt-1 text-neutral-400">Users Impacted</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/10 animate-fade-in-up" id="services" style={{animationDelay: '1.2s'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
      What I Do
    </h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="bg-gradient-to-br from-indigo-500/10 via-white/10 to-black/0 border border-white/10 rounded-xl p-7 hover:shadow-indigo-800/30 shadow-lg transition-shadow group animate-fade-in-up" style={{animationDelay: '1.3s'}}>
<svg className="lucide lucide-layout-dashboard w-8 h-8 text-indigo-400 mb-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
<p className="text-neutral-300 text-sm mb-3">
          Beautiful, intuitive interfaces for web &amp; mobile. User-centric, conversion-focused, and future-proof.
        </p>
<ul className="text-xs text-neutral-400 space-y-1">
<li>• Wireframes &amp; Prototypes</li>
<li>• Responsive Web &amp; App Design</li>
<li>• Design Systems</li>
</ul>
</div>
<div className="bg-gradient-to-br from-indigo-500/10 via-white/10 to-black/0 border border-white/10 rounded-xl p-7 hover:shadow-indigo-800/30 shadow-lg transition-shadow group animate-fade-in-up" style={{animationDelay: '1.4s'}}>
<svg className="lucide lucide-code w-8 h-8 text-indigo-400 mb-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<h3 className="text-xl font-semibold mb-2">Web Development</h3>
<p className="text-neutral-300 text-sm mb-3">
          Fast, scalable, SEO-friendly sites and products. Clean code, seamless animations, and robust performance.
        </p>
<ul className="text-xs text-neutral-400 space-y-1">
<li>• Websites &amp; Web Apps</li>
<li>• Landing Pages</li>
<li>• CMS &amp; E-commerce</li>
</ul>
</div>
<div className="bg-gradient-to-br from-indigo-500/10 via-white/10 to-black/0 border border-white/10 rounded-xl p-7 hover:shadow-indigo-800/30 shadow-lg transition-shadow group animate-fade-in-up" style={{animationDelay: '1.5s'}}>
<svg className="lucide lucide-megaphone w-8 h-8 text-indigo-400 mb-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
<h3 className="text-xl font-semibold mb-2">Product Marketing</h3>
<p className="text-neutral-300 text-sm mb-3">
          Go-to-market strategy, creative campaigns, and conversion optimization for product launches and scale.
        </p>
<ul className="text-xs text-neutral-400 space-y-1">
<li>• Brand &amp; Content Strategy</li>
<li>• Growth Hacking</li>
<li>• Funnel Optimization</li>
</ul>
</div>
</div>
</section>

<section className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-white/10 animate-fade-in-up" id="work" style={{animationDelay: '1.6s'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
      Featured Projects
    </h2>
<div className="grid md:grid-cols-3 gap-10">
<div className="bg-white/5 border border-white/10 rounded-2xl p-4 group hover:border-indigo-400/60 transition-all hover:shadow-indigo-800/20 shadow-lg animate-fade-in-up" style={{animationDelay: '1.7s'}}>
<img alt="Project 1" className="rounded-xl mb-4 w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<h3 className="text-lg font-semibold mb-1">Saasy Dashboard</h3>
<p className="text-sm text-neutral-400 mb-3">B2B SaaS web app. UI/UX, front-end development, brand system.</p>
<a className="text-indigo-400 text-xs font-medium hover:underline" href="#">View Case Study →</a>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-4 group hover:border-indigo-400/60 transition-all hover:shadow-indigo-800/20 shadow-lg animate-fade-in-up" style={{animationDelay: '1.8s'}}>
<img alt="Project 2" className="rounded-xl mb-4 w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<h3 className="text-lg font-semibold mb-1">Healthify App</h3>
<p className="text-sm text-neutral-400 mb-3">Mobile health platform. UX research, UI design, app dev, launch marketing.</p>
<a className="text-indigo-400 text-xs font-medium hover:underline" href="#">View Case Study →</a>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-4 group hover:border-indigo-400/60 transition-all hover:shadow-indigo-800/20 shadow-lg animate-fade-in-up" style={{animationDelay: '1.9s'}}>
<img alt="Project 3" className="rounded-xl mb-4 w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80"/>
<h3 className="text-lg font-semibold mb-1">Artsy Commerce</h3>
<p className="text-sm text-neutral-400 mb-3">E-commerce brand. End-to-end design, brand, site build, growth marketing.</p>
<a className="text-indigo-400 text-xs font-medium hover:underline" href="#">View Case Study →</a>
</div>
</div>
<div className="flex justify-center mt-10">
<a className="px-8 py-2 bg-white text-black font-medium rounded-full hover:bg-indigo-50 transition-all shadow hover:shadow-xl" href="#contact">
        Start Your Project
      </a>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/10 animate-fade-in-up" id="process" style={{animationDelay: '2s'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
      My Proven Process
    </h2>
<div className="flex flex-col md:flex-row items-start justify-between gap-8">
<div className="flex-1 border-l-2 border-indigo-400/20 pl-7 space-y-10">
<div>
<div className="flex items-center gap-4 mb-2">
<div className="bg-indigo-400/20 rounded-full w-10 h-10 flex items-center justify-center text-indigo-400 font-bold">1</div>
<span className="font-semibold tracking-tight">Discovery</span>
</div>
<p className="text-neutral-300 text-sm pl-14">Deep dive into your goals, audience &amp; market. Align on vision.</p>
</div>
<div>
<div className="flex items-center gap-4 mb-2">
<div className="bg-indigo-400/20 rounded-full w-10 h-10 flex items-center justify-center text-indigo-400 font-bold">2</div>
<span className="font-semibold tracking-tight">Design &amp; Prototype</span>
</div>
<p className="text-neutral-300 text-sm pl-14">Craft wireframes, flows, and stunning UI. Iterate fast with feedback.</p>
</div>
<div>
<div className="flex items-center gap-4 mb-2">
<div className="bg-indigo-400/20 rounded-full w-10 h-10 flex items-center justify-center text-indigo-400 font-bold">3</div>
<span className="font-semibold tracking-tight">Development</span>
</div>
<p className="text-neutral-300 text-sm pl-14">Lightning-fast, accessible, SEO-ready code. Pixel-perfect builds.</p>
</div>
<div>
<div className="flex items-center gap-4 mb-2">
<div className="bg-indigo-400/20 rounded-full w-10 h-10 flex items-center justify-center text-indigo-400 font-bold">4</div>
<span className="font-semibold tracking-tight">Launch &amp; Optimize</span>
</div>
<p className="text-neutral-300 text-sm pl-14">Go live, analyze, and optimize for growth &amp; conversions.</p>
</div>
</div>
<div className="flex-1 flex items-center justify-center md:justify-end mt-12 md:mt-0">
<div className="rounded-xl bg-white/5 border border-white/10 shadow-lg p-6 w-full md:w-80">
<h3 className="text-lg font-semibold mb-4">Timeline</h3>
<canvas className="w-full h-40" height="135" id="timelineChart" style={{display: 'block', boxSizing: 'border-box', height: '135px', width: '270px'}} width="270"></canvas>

</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/10 animate-fade-in-up" id="testimonials" style={{animationDelay: '2.1s'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
      What Clients Say
    </h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white/5 rounded-xl border border-white/10 p-6 shadow animate-fade-in-up" style={{animationDelay: '2.2s'}}>
<blockquote className="mb-5 text-neutral-200">“Ikram is a rare blend of creative and technical. Our product launch was seamless and visually stunning.”</blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full border border-white/15" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="font-semibold text-sm">James R.</div>
<div className="text-xs text-neutral-400">Founder, SaaS Startup</div>
</div>
</div>
</div>
<div className="bg-white/5 rounded-xl border border-white/10 p-6 shadow animate-fade-in-up" style={{animationDelay: '2.3s'}}>
<blockquote className="mb-5 text-neutral-200">“A total professional. Our site is faster, looks incredible, and conversions are up 2.7x!”</blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full border border-white/15" src="https://randomuser.me/api/portraits/women/43.jpg"/>
<div>
<div className="font-semibold text-sm">Maria K.</div>
<div className="text-xs text-neutral-400">Head of Marketing</div>
</div>
</div>
</div>
<div className="bg-white/5 rounded-xl border border-white/10 p-6 shadow animate-fade-in-up" style={{animationDelay: '2.4s'}}>
<blockquote className="mb-5 text-neutral-200">“If you want a designer who understands product, code, and growth—Ikram is the one.”</blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full border border-white/15" src="https://randomuser.me/api/portraits/men/55.jpg"/>
<div>
<div className="font-semibold text-sm">Alex T.</div>
<div className="text-xs text-neutral-400">Product Lead, E-commerce</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6">
<div className="max-w-4xl mx-auto my-20 bg-gradient-to-r from-indigo-500/50 via-white/10 to-black/0 rounded-2xl border border-white/15 shadow-xl px-10 py-12 flex flex-col md:flex-row items-center gap-10 animate-fade-in-up" style={{animationDelay: '2.5s'}}>
<div className="flex-1">
<h3 className="text-2xl font-semibold mb-3 tracking-tight">Ready to transform your digital presence?</h3>
<p className="text-neutral-200 text-lg mb-4">Let’s create something unforgettable together. Book your free strategy call today.</p>
</div>
<div>
<a className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-indigo-100 transition-all shadow-lg hover:shadow-xl" href="#contact">
          Book Free Call
        </a>
</div>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-10 animate-fade-in-up" style={{animationDelay: '2.6s'}}>
<h2 className="text-lg font-semibold text-white/80 mb-6 text-center">Trusted by teams at</h2>
<div className="flex flex-wrap justify-center items-center gap-10 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
<img alt="Microsoft" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"/>
<img alt="Google" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google.png"/>
<img alt="Netflix" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
<img alt="Nike" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"/>
<img alt="Logitech" className="h-8" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Logitech_logo.svg"/>
</div>
</section>

<section className="relative z-10 max-w-5xl mx-auto px-6 py-20 border-t border-white/10 animate-fade-in-up" id="faqs" style={{animationDelay: '2.7s'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">
      Frequently Asked Questions
    </h2>
<div className="space-y-6">
<details className="bg-white/5 rounded-lg border border-white/10 p-5 group open:bg-indigo-900/10 transition-all animate-fade-in-up" style={{animationDelay: '2.8s'}}>
<summary className="cursor-pointer flex items-center gap-3 font-semibold text-lg tracking-tight">
<svg className="lucide lucide-help-circle w-5 h-5 text-indigo-400" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
          What’s your process like?
        </summary>
<div className="pl-8 pt-2 text-neutral-300 text-sm">It’s collaborative and transparent. I keep you updated at every step.</div>
</details>
<details className="bg-white/5 rounded-lg border border-white/10 p-5 group open:bg-indigo-900/10 transition-all animate-fade-in-up" style={{animationDelay: '2.9s'}}>
<summary className="cursor-pointer flex items-center gap-3 font-semibold text-lg tracking-tight">
<svg className="lucide lucide-clock w-5 h-5 text-indigo-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          How fast are your projects?
        </summary>
<div className="pl-8 pt-2 text-neutral-300 text-sm">Most sites launch in 4–6 weeks. Rush delivery available.</div>
</details>
<details className="bg-white/5 rounded-lg border border-white/10 p-5 group open:bg-indigo-900/10 transition-all animate-fade-in-up" style={{animationDelay: '3s'}}>
<summary className="cursor-pointer flex items-center gap-3 font-semibold text-lg tracking-tight">
<svg className="lucide lucide-wallet w-5 h-5 text-indigo-400" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
          What is your pricing model?
        </summary>
<div className="pl-8 pt-2 text-neutral-300 text-sm">Flat-rate, value-based. No hourly surprises. Request a quote for details.</div>
</details>
</div>
</section>

<section className="relative z-10 max-w-4xl mx-auto px-6 py-20 border-t border-white/10 animate-fade-in-up" id="contact" style={{animationDelay: '3.1s'}}>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 text-center">
      Let’s Build Something Great
    </h2>
<form className="bg-white/5 rounded-2xl border border-white/10 shadow-xl p-10 max-w-2xl mx-auto space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block mb-2 text-sm font-medium">Name</label>
<input className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/15 text-white focus:outline-none focus:border-indigo-400 transition" required="" type="text"/>
</div>
<div>
<label className="block mb-2 text-sm font-medium">Email</label>
<input className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/15 text-white focus:outline-none focus:border-indigo-400 transition" required="" type="email"/>
</div>
</div>
<div>
<label className="block mb-2 text-sm font-medium">Project Details</label>
<textarea className="w-full px-4 py-2 rounded-lg bg-black/40 border border-white/15 text-white focus:outline-none focus:border-indigo-400 transition" required="" rows="4"></textarea>
</div>
<div className="flex items-center gap-3">
<button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl outline-none focus-visible:ring-2 ring-indigo-400" type="submit">
          Send Inquiry
        </button>
<span className="text-neutral-400 text-xs">Typically replies within 24h</span>
</div>
</form>
</section>

<footer className="relative z-10 max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between border-t border-white/10 gap-6 animate-fade-in-up" style={{animationDelay: '3.2s'}}>
<div className="flex items-center gap-2 text-sm text-neutral-400">
<svg className="w-5 h-5" fill="none" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"></circle><circle cx="12" cy="12" fill="white" r="3"></circle></svg>
      © 2024 Ikram – UI/UX Designer
    </div>
<div className="flex gap-5">
<a aria-label="Twitter" className="hover:text-white transition-colors" href="https://twitter.com/" target="_blank">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="https://linkedin.com/" target="_blank">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Email" className="hover:text-white transition-colors" href="mailto:hello@ikram.com">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</footer>



<style>
    @keyframes fade-in-up {
      0% { opacity: 0; transform: translateY(40px); }
      100% { opacity: 1; transform: none; }
    }
    @keyframes fade-in {
      0% { opacity: 0;}
      100% { opacity: 1;}
    }
    @keyframes fade-in-down {
      0% { opacity: 0; transform: translateY(-20px);}
      100% { opacity: 1; transform: none;}
    }
    .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both; }
    .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
    .animate-fade-in-down { animation: fade-in-down 1.2s cubic-bezier(.4,0,.2,1) both; }
    [style*="animation-delay"] { animation-delay: var(--delay, 0s) !important; }
  </style>

    </>
  );
}
