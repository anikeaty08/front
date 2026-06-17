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
      
      // FAQ Accordion
      function toggleAccordion(item){
        var content = item.querySelector('.accordion-content');
        var arrow = item.querySelector('.accordion-arrow');
        var open = content.classList.contains('open');
        document.querySelectorAll('.accordion-content').forEach(el=>el.classList.remove('open'));
        document.querySelectorAll('.accordion-arrow').forEach(el=>el.classList.remove('open'));
        if(!open){
          content.classList.add('open');
          arrow.classList.add('open');
        }
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
      

<div className="absolute inset-0 w-full h-full z-0 bg-grid pointer-events-none"></div>
<div className="absolute left-[-5vw] top-[-10vh] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-[#805fff] via-[#3e6bfa] to-[#141721] opacity-40 animate-glow pointer-events-none"></div>
<div className="absolute right-[-10vw] top-[10vh] w-[32vw] h-[32vw] rounded-full bg-gradient-to-br from-[#3e6bfa] to-transparent opacity-30 animate-glow pointer-events-none"></div>
<div className="absolute right-[10vw] bottom-[-15vh] w-[32vw] h-[32vw] rounded-full bg-gradient-to-tr from-[#64d7ff] via-[#a0aaff] to-transparent opacity-20 animate-glow pointer-events-none"></div>

<nav className="fixed top-0 left-0 w-full z-20 backdrop-blur bg-gradient-to-b from-[#161a22cc] to-[#14172100] border-b border-[#24283b33] py-4 px-6 lg:px-32 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#805fff] to-[#3e6bfa] flex items-center justify-center text-2xl font-extrabold">M</div>
<span className="text-xl font-bold tracking-tight">MetaFlow3D</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-semibold">
<a className="hover:text-[#805fff] transition" href="#features">Features</a>
<a className="hover:text-[#805fff] transition" href="#workflows">Workflows</a>
<a className="hover:text-[#805fff] transition" href="#faq">FAQ</a>
<a className="hover:text-[#805fff] transition" href="#contact">Contact</a>
</div>
<a className="bg-gradient-to-r from-[#41caff] to-[#805fff] px-7 py-2 rounded-lg font-semibold hover:scale-105 transition shadow-xl shadow-[#3e6bfa33]" href="#getstarted">Start your 3D Revolution</a>
</nav>

<section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-28 pb-14 md:pb-24 z-10">
<div className="text-center max-w-3xl mx-auto animate-fadeInUp">
<div className="uppercase tracking-[0.2em] text-[#7ec3ff] text-[0.9rem] mb-4 font-semibold">Grow on your own business</div>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-t from-[#805fff] via-[#fff] to-[#3e6bfa] bg-clip-text text-transparent drop-shadow-xl mb-6">
          MetaFlow3D:<br/>
<span className="text-white">Intelligent 3D Solutions</span> <span className="text-[#805fff]">for Architecture</span>
</h1>
<div className="text-xl md:text-2xl text-[#b6d6ff] mb-10 font-medium">
          AI-powered 3D Rendering and Workflow Management for Creative Professionals.
        </div>
<a className="inline-block bg-gradient-to-r from-[#41caff] via-[#805fff] to-[#3e6bfa] px-12 py-4 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all" href="#getstarted">Start Your 3D Revolution</a>
</div>

<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl animate-fadeInUp" id="features">
<div className="relative rounded-2xl bg-[#181c24] border border-[#805fff33] shadow-xl p-8 overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
<div className="absolute top-[-32px] right-[-32px] w-24 h-24 bg-gradient-to-br from-[#805fff] to-transparent rounded-full blur-2xl opacity-30 pointer-events-none"></div>
<div className="text-3xl font-bold mb-3 text-[#a0aaff]">ComfyUI for 3D</div>
<div className="text-[#e7f0fa] mb-5">Node-based workflow builder for creating stunning 3D environments. Drag-and-drop, no code required.</div>
<div className="flex gap-3 flex-wrap">
<span className="text-xs uppercase bg-gradient-to-r from-[#41caff] to-[#805fff] px-3 py-1 rounded-md font-semibold text-white">Node-based</span>
<span className="text-xs uppercase bg-gradient-to-r from-[#fff] to-[#3e6bfa] px-3 py-1 rounded-md font-semibold text-[#181c24]">Drag &amp; Drop</span>
</div>
</div>
<div className="relative rounded-2xl bg-[#181c24] border border-[#41caff44] shadow-xl p-8 overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
<div className="absolute bottom-[-32px] left-[-32px] w-24 h-24 bg-gradient-to-tr from-[#41caff] to-transparent rounded-full blur-2xl opacity-30 pointer-events-none"></div>
<div className="text-3xl font-bold mb-3 text-[#64d7ff]">AI Content Automation</div>
<div className="text-[#e7f0fa] mb-5">Automate repetitive 3D tasks. Let AI handle asset tagging, content distribution, and more.</div>
<div className="flex gap-3 flex-wrap">
<span className="text-xs uppercase bg-gradient-to-r from-[#41caff] to-[#805fff] px-3 py-1 rounded-md font-semibold text-white">AI-Powered</span>
<span className="text-xs uppercase bg-gradient-to-r from-[#fff] to-[#3e6bfa] px-3 py-1 rounded-md font-semibold text-[#181c24]">Automation</span>
</div>
</div>
<div className="relative rounded-2xl bg-[#181c24] border border-[#41caff33] shadow-xl p-8 overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
<div className="absolute top-[-32px] left-[-32px] w-24 h-24 bg-gradient-to-br from-[#64d7ff] to-transparent rounded-full blur-2xl opacity-30 pointer-events-none"></div>
<div className="text-3xl font-bold mb-3 text-[#41caff]">Blender Integration</div>
<div className="text-[#e7f0fa] mb-5">Import 3D assets directly from Blender with one click. No manual exports required.</div>
<div className="flex gap-3 flex-wrap">
<span className="text-xs uppercase bg-gradient-to-r from-[#41caff] to-[#805fff] px-3 py-1 rounded-md font-semibold text-white">Blender</span>
<span className="text-xs uppercase bg-gradient-to-r from-[#fff] to-[#3e6bfa] px-3 py-1 rounded-md font-semibold text-[#181c24]">Integration</span>
</div>
</div>
</div>
</section>

<section className="bg-[#141721] py-24 px-6 md:px-0 flex flex-col items-center" id="mission">
<div className="max-w-3xl text-center">
<div className="uppercase text-[#41caff] tracking-widest font-bold text-sm mb-5">Our Mission</div>
<h2 className="text-4xl md:text-5xl font-bold mb-6">To simplify complex workflows with intuitive tools,<br/>helping teams work smarter, faster, and more efficiently.</h2>
</div>
</section>

<section className="relative bg-[#161a22] py-28 px-6 md:px-0" id="workflows">
<div className="max-w-5xl mx-auto animate-fadeInUp">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Workflows</h2>
<p className="text-[#b6d6ff] text-lg mb-8">Pre-built and customizable AI-powered 3D production workflows for architects, designers, and creative teams.</p>
<div className="flex gap-3 flex-wrap mb-8">
<span className="text-xs uppercase bg-gradient-to-r from-[#41caff] to-[#805fff] px-3 py-1 rounded-md font-semibold text-white">Templates</span>
<span className="text-xs uppercase bg-gradient-to-r from-[#fff] to-[#3e6bfa] px-3 py-1 rounded-md font-semibold text-[#181c24]">Automation</span>
<span className="text-xs uppercase bg-gradient-to-tr from-[#805fff] to-[#41caff] px-3 py-1 rounded-md font-semibold text-white">Collaboration</span>
</div>
<a className="inline-block bg-gradient-to-r from-[#41caff] via-[#805fff] to-[#3e6bfa] px-10 py-3 rounded-lg font-bold text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-all" href="#getstarted">See Workflow Templates</a>
</div>
<div className="flex-1 grid grid-cols-1 gap-7">
<div className="rounded-xl bg-[#181c24] border border-[#805fff33] p-5 shadow-lg hover:-translate-y-2 transition group">
<div className="text-lg font-bold text-[#a0aaff] mb-1">Photo to 3D Model</div>
<div className="text-[#e7f0fa] text-sm">Upload a photo, let AI generate a 3D model. Perfect for concepting and rapid prototyping.</div>
</div>
<div className="rounded-xl bg-[#181c24] border border-[#41caff44] p-5 shadow-lg hover:-translate-y-2 transition group">
<div className="text-lg font-bold text-[#41caff] mb-1">AI Texture Generation</div>
<div className="text-[#e7f0fa] text-sm">Generate seamless textures for your 3D models with a single click. No Photoshop needed.</div>
</div>
<div className="rounded-xl bg-[#181c24] border border-[#41caff33] p-5 shadow-lg hover:-translate-y-2 transition group">
<div className="text-lg font-bold text-[#805fff] mb-1">Realtime Collaboration</div>
<div className="text-[#e7f0fa] text-sm">Invite team members to collaborate in real time. Share feedback, assets, and ideas instantly.</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#141721] py-24 px-6 md:px-0" id="faq">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<div className="uppercase text-[#805fff] font-semibold tracking-widest text-xs mb-4">FAQ</div>
<h2 className="text-4xl font-bold mb-4">Frequently Asked <span className="text-[#41caff]">Questions</span></h2>
</div>
<div className="divide-y divide-[#232546]">

<div className="py-6 cursor-pointer" onclick="toggleAccordion(this)">
<div className="flex items-center justify-between transition-colors">
<span className="font-semibold text-lg">What types of projects is MetaFlow3D suitable for?</span>
<svg className="accordion-arrow w-5 h-5 ml-4 transition-transform" fill="none" stroke="#b6d6ff" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
</div>
<div className="accordion-content mt-3 text-[#c9e3ff] text-base">
              MetaFlow3D is ideal for a wide range of 3D projects, including architectural visualization, product design, animation, and virtual reality experiences. It's particularly suited for creative agencies and businesses that require high-quality 3D rendering, efficient asset management, and streamlined workflows.
            </div>
</div>
<div className="py-6 cursor-pointer" onclick="toggleAccordion(this)">
<div className="flex items-center justify-between transition-colors">
<span className="font-semibold text-lg">How does MetaFlow3D integrate with existing 3D modeling tools?</span>
<svg className="accordion-arrow w-5 h-5 ml-4 transition-transform" fill="none" stroke="#b6d6ff" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
</div>
<div className="accordion-content mt-3 text-[#c9e3ff] text-base">
              MetaFlow3D offers seamless integration with Blender and other major 3D tools. You can import assets directly and automate exports for rendering or collaboration.
            </div>
</div>
<div className="py-6 cursor-pointer" onclick="toggleAccordion(this)">
<div className="flex items-center justify-between transition-colors">
<span className="font-semibold text-lg">What is the learning curve for MetaFlow3D?</span>
<svg className="accordion-arrow w-5 h-5 ml-4 transition-transform" fill="none" stroke="#b6d6ff" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
</div>
<div className="accordion-content mt-3 text-[#c9e3ff] text-base">
              MetaFlow3D is designed to be intuitive for both beginners and advanced users. Most teams get up and running in under a week with our onboarding and support resources.
            </div>
</div>
<div className="py-6 cursor-pointer" onclick="toggleAccordion(this)">
<div className="flex items-center justify-between transition-colors">
<span className="font-semibold text-lg">How does AI enhance the 3D content creation process in MetaFlow3D?</span>
<svg className="accordion-arrow w-5 h-5 ml-4 transition-transform" fill="none" stroke="#b6d6ff" strokeWidth="2" viewbox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
</div>
<div className="accordion-content mt-3 text-[#c9e3ff] text-base">
              AI in MetaFlow3D automates complex tasks such as texture generation, asset tagging, and scene assembly. This speeds up workflows and allows creative teams to focus on design rather than repetitive manual work.
            </div>
</div>
</div>
</div>
</section>

<section className="bg-[#141721] py-24 px-6 md:px-0">
<div className="max-w-7xl mx-auto">
<div className="mb-10 text-center">
<div className="uppercase text-[#41caff] font-semibold tracking-widest text-xs mb-4">Testimonials</div>
<h2 className="text-4xl font-bold mb-4">Words from our lovely clients</h2>
</div>
<div className="flex flex-col md:flex-row gap-10 md:gap-7 justify-center items-stretch">
<div className="flex-1 bg-[#181c24] border border-[#805fff33] rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
<div className="mb-4"><svg className="text-[#41caff]" fill="none" height="32" width="44"><path d="M14.8 32V24C14.8 12.8 25.6 9.6 25.6 0H0v8.8h14.8V32ZM44 32V24C44 12.8 33.2 9.6 33.2 0H58v8.8H44V32Z" fill="currentColor"></path></svg></div>
<div className="text-lg text-[#e7f0fa] mb-7">The AI-powered tools have revolutionized our design process. What used to take weeks now takes days, and the quality has improved dramatically. MetaFlow3D has become an indispensable part of our workflow.</div>
<div className="flex items-center gap-4 mt-4">
<img alt="profile" className="w-12 h-12 rounded-full object-cover border-2 border-[#41caff]" src="https://randomuser.me/api/portraits/men/43.jpg"/>
<div>
<div className="font-semibold">Michael Rodriguez</div>
<div className="text-xs uppercase text-[#b6d6ff]">Creative Director, Stellar Studios</div>
</div>
</div>
</div>
<div className="flex-1 bg-[#181c24] border border-[#41caff44] rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
<div className="mb-4"><svg className="text-[#805fff]" fill="none" height="32" width="44"><path d="M14.8 32V24C14.8 12.8 25.6 9.6 25.6 0H0v8.8h14.8V32ZM44 32V24C44 12.8 33.2 9.6 33.2 0H58v8.8H44V32Z" fill="currentColor"></path></svg></div>
<div className="text-lg text-[#e7f0fa] mb-7">The learning curve was surprisingly gentle, and the support team has been exceptional. Within a week, our entire team was comfortable with the platform and seeing significant improvements in output.</div>
<div className="flex items-center gap-4 mt-4">
<img alt="profile" className="w-12 h-12 rounded-full object-cover border-2 border-[#805fff]" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div>
<div className="font-semibold">Laura Nakamura</div>
<div className="text-xs uppercase text-[#b6d6ff]">VFX Supervisor</div>
</div>
</div>
</div>
<div className="flex-1 bg-[#181c24] border border-[#41caff33] rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300">
<div className="mb-4"><svg className="text-[#41caff]" fill="none" height="32" width="44"><path d="M14.8 32V24C14.8 12.8 25.6 9.6 25.6 0H0v8.8h14.8V32ZM44 32V24C44 12.8 33.2 9.6 33.2 0H58v8.8H44V32Z" fill="currentColor"></path></svg></div>
<div className="text-lg text-[#e7f0fa] mb-7">MetaFlow3D's collaborative features have transformed how our distributed team works together. Real-time feedback and asset sharing have made remote work seamless.</div>
<div className="flex items-center gap-4 mt-4">
<img alt="profile" className="w-12 h-12 rounded-full object-cover border-2 border-[#41caff]" src="https://randomuser.me/api/portraits/men/29.jpg"/>
<div>
<div className="font-semibold">Marcus Weber</div>
<div className="text-xs uppercase text-[#b6d6ff]">Production Manager</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#161a22] py-24 px-6 md:px-0" id="contact">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-bold mb-6">Join the AI-Powered 3D Revolution: <span className="text-[#805fff]">Transform Your Creative Workflow Today!</span></h2>
<p className="text-[#b6d6ff] text-lg mb-6">Thousands of creative agencies are already thriving with MetaFlow3D.</p>
</div>
<form className="flex-1 bg-[#181c24] rounded-xl shadow-lg p-8 flex flex-col gap-5">
<input className="bg-[#23263a] border border-[#41caff44] rounded-lg py-3 px-5 mb-2 text-white focus:outline-none focus:border-[#805fff] transition" placeholder="Name" type="text"/>
<input className="bg-[#23263a] border border-[#41caff44] rounded-lg py-3 px-5 mb-2 text-white focus:outline-none focus:border-[#805fff] transition" placeholder="Email" type="email"/>
<textarea className="bg-[#23263a] border border-[#41caff44] rounded-lg py-3 px-5 mb-2 text-white focus:outline-none focus:border-[#805fff] transition" placeholder="Your message" rows="4"></textarea>
<button className="bg-gradient-to-r from-[#41caff] via-[#805fff] to-[#3e6bfa] px-10 py-3 rounded-lg font-bold text-base shadow-lg hover:scale-105 hover:shadow-2xl transition-all" type="submit">Start Creating Now</button>
</form>
</div>
</section>

<footer className="bg-[#141721] border-t border-[#232546] pt-14 pb-8 px-6 md:px-0">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:gap-24 justify-between items-start">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-3 mb-3">
<span className="w-8 h-8 rounded-full bg-gradient-to-r from-[#805fff] to-[#3e6bfa] flex items-center justify-center text-2xl font-extrabold">M</span>
<span className="text-xl font-bold">MetaFlow3D</span>
</div>
<div className="text-[#b6d6ff] mb-2">AI platform for efficient 3D rendering and workflow management.</div>
<div className="text-xs text-[#50699e]">© 2024 MetaFlow3d. All rights reserved.</div>
</div>
<div className="flex flex-col md:flex-row gap-7 md:gap-20">
<div>
<div className="text-[#41caff] font-bold mb-2">Product</div>
<ul className="text-[#e7f0fa] flex flex-col gap-1">
<li><a className="hover:text-[#805fff] transition" href="#features">Features</a></li>
<li><a className="hover:text-[#805fff] transition" href="#workflows">Workflows</a></li>
<li><a className="hover:text-[#805fff] transition" href="#faq">FAQ</a></li>
<li><a className="hover:text-[#805fff] transition" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<div className="text-[#41caff] font-bold mb-2">Company</div>
<ul className="text-[#e7f0fa] flex flex-col gap-1">
<li><a className="hover:text-[#805fff] transition" href="#">Blog</a></li>
<li><a className="hover:text-[#805fff] transition" href="#">Pricing</a></li>
<li><a className="hover:text-[#805fff] transition" href="#">Documentation</a></li>
<li><a className="hover:text-[#805fff] transition" href="#">Mission</a></li>
</ul>
</div>
<div>
<div className="text-[#41caff] font-bold mb-2">Legal</div>
<ul className="text-[#e7f0fa] flex flex-col gap-1">
<li><a className="hover:text-[#805fff] transition" href="#">Privacy policy</a></li>
<li><a className="hover:text-[#805fff] transition" href="#">Terms of service</a></li>
</ul>
</div>
</div>
<div className="flex gap-4 mt-8 md:mt-0">
<a className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#805fff] to-[#41caff] flex items-center justify-center text-white hover:scale-110 transition shadow" href="#">
<svg fill="none" height="20" viewbox="0 0 20 20" width="20"><circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="2"></circle><path d="M5 10l3 3 7-7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#41caff] to-[#805fff] flex items-center justify-center text-white hover:scale-110 transition shadow" href="#">
<svg fill="none" height="20" viewbox="0 0 20 20" width="20"><rect fill="currentColor" height="4" rx="2" width="14" x="3" y="8"></rect></svg>
</a>
</div>
</div>
</footer>


    </>
  );
}
