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



      lucide.createIcons();
    
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
      
<div className="max-w-[1400px] mx-auto w-full border-x relative bg-[#08090A]/40 min-h-screen flex flex-col border-white/10">

<header className="sticky top-0 z-50 border-b glass-panel border-white/10">
<div className="grid grid-cols-1 md:grid-cols-12 h-16 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="col-span-1 md:col-span-3 flex items-center px-6 justify-between md:justify-start">
<a className="font-medium tracking-widest text-sm uppercase hover:opacity-70 transition-opacity text-neutral-100" href="#">
              Abdullah Sohail
            </a>

<button className="md:hidden text-neutral-100">
<i className="w-5 h-5" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<nav className="col-span-1 md:col-span-6 flex items-center px-6 space-x-8 hidden md:flex">
<a className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-neutral-100 text-neutral-100" href="#home">
              Home
            </a>
<a className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-neutral-100" href="#about">
              About
            </a>
<a className="text-xs font-medium uppercase tracking-widest transition-colors hover:text-neutral-100" href="#work">
              Work
            </a>
</nav>

<div className="col-span-1 md:col-span-3 flex items-center px-6 justify-end hidden md:flex">
<a className="text-xs font-mono text-neutral-500 transition-colors flex items-center gap-2 hover:text-neutral-300" href="mailto:abdullah.msohail@gmail.com">
<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              abdullah.msohail@gmail.com
            </a>
</div>
</div>
</header>

<main className="flex-grow grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x relative divide-white/10">

<div className="col-span-1 md:col-span-9 divide-y divide-white/10">

<section className="p-8 md:p-16 lg:p-24 flex flex-col gap-8 relative group" id="home">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-6 h-6 text-zinc-700" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-6 max-w-3xl">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-1 border text-[10px] uppercase tracking-wider rounded text-neutral-500 border-white/10">
                  Available for projects
                </span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.95] text-neutral-100 font-semibold">
                Hi, I'm Abdullah.
              </h1>
<h2 className="text-2xl md:text-3xl tracking-tight text-neutral-300 font-semibold">
                Freelance Developer
                <span className="text-neutral-600">&amp;</span>
<span className="text-neutral-100">Entrepreneur</span>
</h2>
<p className="text-base md:text-lg text-neutral-500 font-light leading-relaxed max-w-2xl">
                I build innovative SaaS products and AI automation solutions
                that solve real problems. With expertise in web development and
                system design, I help businesses scale through thoughtful
                technology and clean architecture.
              </p>
<div className="pt-6 flex gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-wide transition-colors bg-neutral-100 text-black hover:bg-neutral-200" href="#contact">
<i className="w-4 h-4" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
                  Get In Contact
                </a>
<a className="inline-flex items-center gap-2 px-5 py-2.5 border text-xs font-medium uppercase tracking-wide transition-colors border-white/10 text-neutral-300 hover:border-white/30 hover:text-white" href="#about">
                  Learn More
                </a>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="group relative p-8 md:p-12 h-full hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-12">
<div className="p-3 border rounded-sm border-white/10 bg-black">
<i className="w-6 h-6 text-zinc-100" data-lucide="code-2" style={{strokeWidth: '1.5'}}></i>
</div>
<i className="w-5 h-5 group-hover:text-zinc-100 transition-colors -rotate-45 group-hover:rotate-0 duration-300 text-zinc-700" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-neutral-100">
                SaaS Platforms
              </h3>
<p className="text-sm text-neutral-500 mb-4">
                Full-stack web applications with scalable architecture and
                modern tech stacks.
              </p>
<div className="flex gap-2 mt-auto flex-wrap">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border text-neutral-500 border-white/10">
                  Web Development
                </span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border text-neutral-500 border-white/10">
                  System Design
                </span>
</div>
</div>

<div className="group relative p-8 md:p-12 h-full hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-12">
<div className="p-3 border rounded-sm border-white/10 bg-black">
<i className="w-6 h-6 text-zinc-100" data-lucide="bot" style={{strokeWidth: '1.5'}}></i>
</div>
<i className="w-5 h-5 group-hover:text-zinc-100 transition-colors -rotate-45 group-hover:rotate-0 duration-300 text-zinc-700" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-neutral-100">
                AI Automation
              </h3>
<p className="text-sm text-neutral-500 mb-4">
                Intelligent automation solutions leveraging AI to streamline
                business processes.
              </p>
<div className="flex gap-2 mt-auto flex-wrap">
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border text-neutral-500 border-white/10">
                  AI/ML
                </span>
<span className="text-[10px] uppercase tracking-wider px-2 py-1 border text-neutral-500 border-white/10">
                  Automation
                </span>
</div>
</div>
</div>

<div className="w-full overflow-hidden" id="work">
<div className="p-8 md:p-12">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium uppercase tracking-widest text-neutral-100">
                  Featured Work
                </h3>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-white/10 text-neutral-500 hover:text-white hover:bg-white/10 transition-colors" onclick="document.getElementById('gallery-scroller').scrollBy({left: -320, behavior: 'smooth'})">
<i className="w-4 h-4" data-lucide="arrow-left" style={{strokeWidth: '1.5'}}></i>
</button>
<button className="p-2 rounded-full border border-white/10 text-neutral-500 hover:text-white hover:bg-white/10 transition-colors" onclick="document.getElementById('gallery-scroller').scrollBy({left: 320, behavior: 'smooth'})">
<i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" id="gallery-scroller">
<div className="flex gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="Web Development" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        SaaS Platform Architecture
                      </span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="AI Automation" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        AI Automation Workflows
                      </span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="System Design" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2734&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        Distributed System Design
                      </span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="Analytics" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        Analytics Dashboard
                      </span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="Web Development" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        SaaS Platform Architecture
                      </span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="AI Automation" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        AI Automation Workflows
                      </span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="System Design" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2734&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        Distributed System Design
                      </span>
</div>
</div>
<div className="min-w-[280px] md:min-w-[380px] aspect-[16/10] bg-neutral-900/50 border border-white/10 relative group overflow-hidden rounded-sm shrink-0">
<img alt="Analytics" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<span className="text-neutral-100 text-sm font-medium">
                        Analytics Dashboard
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10" id="about">
<div className="col-span-1 md:col-span-4 p-8 md:p-12 bg-white/[0.01]">
<h3 className="text-sm font-medium uppercase tracking-widest mb-6 flex items-center gap-2 text-neutral-100">
<i className="w-4 h-4" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
                About
              </h3>
<div className="aspect-square w-full border mb-6 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 bg-neutral-900 border-white/5">
<div className="absolute inset-0 flex items-center justify-center text-neutral-800">
<i className="w-12 h-12 opacity-20" data-lucide="user-circle" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="flex flex-col gap-1 font-mono text-xs text-neutral-600">
<p>ROLE: DEVELOPER &amp; ENTREPRENEUR</p>
<p>FOCUS: SAAS &amp; AI AUTOMATION</p>
<p>SKILLS: WEB DEV, SYSTEMS</p>
</div>
</div>
<div className="col-span-1 md:col-span-8 p-8 md:p-16">
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 text-neutral-100 font-semibold">
                Building products that scale through thoughtful engineering
                &amp; entrepreneurial mindset.
              </h3>
<div className="space-y-6 text-sm md:text-base leading-relaxed font-light text-neutral-400">
<p>
                  I'm Abdullah Sohail, a junior at the University of Central
                  Florida studying Computer Science. As a freelance developer
                  and entrepreneur, I specialize in building scalable SaaS
                  products and intelligent automation solutions. I combine
                  technical expertise with business acumen to create products
                  that solve real problems.
                </p>
<p>
                  My expertise spans full-stack web development and system
                  design, with a particular focus on creating robust,
                  maintainable architectures that can grow with your business.
                  I've worked on a variety of SaaS products, from early-stage
                  startups to established platforms.
                </p>
<p>
                  Recently, I've been diving deep into AI automation, helping
                  businesses leverage cutting-edge technology to streamline
                  operations and unlock new capabilities. I believe in the power
                  of AI to transform how we work, when applied thoughtfully.
                </p>
<p>
                  When I'm not coding, I'm exploring new technologies,
                  contributing to open source, and mentoring aspiring
                  developers. I'm passionate about the intersection of
                  technology and entrepreneurship, always looking for innovative
                  ways to create value.
                </p>
<p>
                  I'm trilingual, which has given me a unique advantage in
                  understanding diverse perspectives and communicating
                  effectively across cultures. This linguistic versatility,
                  combined with my technical background, makes me particularly
                  effective in sales—I can translate complex technical concepts
                  into compelling value propositions that resonate with clients
                  from different backgrounds and industries.
                </p>
</div>
</div>
</section>
</div>

<div className="col-span-1 md:col-span-3 relative bg-black/20">
<div className="sticky top-16">
<div className="p-6 border-b flex items-center justify-between border-white/10">
<h3 className="text-xs font-medium uppercase tracking-widest text-neutral-100">
                Skills &amp; Focus
              </h3>
<i className="w-4 h-4 text-zinc-600" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="divide-y divide-white/5">

<div className="p-6 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-neutral-200">
                    Web Development
                  </h4>
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
</div>
<p className="text-xs text-neutral-500 mb-2">
                  Full-Stack Development
                </p>
<p className="text-[10px] font-mono text-neutral-600">
                  React, Node, Python, PostgreSQL
                </p>
</div>

<div className="p-6 hover:bg-white/[0.02] transition-colors">
<div className="flex items-center justify-between mb-1">
<h4 className="text-sm font-medium text-neutral-200">
                    System Design
                  </h4>
<div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
</div>
<p className="text-xs text-neutral-500 mb-2">
                  Architecture &amp; Scalability
                </p>
<p className="text-[10px] font-mono text-neutral-600">
                  Microservices, Cloud, DevOps
                </p>
</div>

<div className="p-6 border-t border-white/10">
<h3 className="text-xs font-medium uppercase tracking-widest text-neutral-100 flex items-center gap-2">
<i className="w-4 h-4 text-zinc-600" data-lucide="briefcase" style={{strokeWidth: '1.5'}}></i>
                  Experience
                </h3>
</div>

<div className="p-6 hover:bg-white/[0.02] transition-colors group">
<h4 className="text-sm font-medium mb-1 text-neutral-300">
                  SaaS Products
                </h4>
<p className="text-xs text-neutral-500 mb-2">Multiple Projects</p>
<p className="text-[10px] font-mono text-neutral-600">
                  Full-stack development, architecture design, and technical
                  leadership for various SaaS platforms
                </p>
</div>

<div className="p-6 hover:bg-white/[0.02] transition-colors">
<h4 className="text-sm font-medium mb-1 text-neutral-300">
                  AI Automation
                </h4>
<p className="text-xs text-neutral-500 mb-2">
                  Consulting &amp; Development
                </p>
<p className="text-[10px] font-mono text-neutral-600">
                  Building intelligent automation solutions using modern AI/ML
                  technologies
                </p>
</div>

<div className="p-6 hover:bg-white/[0.02] transition-colors">
<h4 className="text-sm font-medium mb-1 text-neutral-300">
                  Entrepreneurship
                </h4>
<p className="text-xs text-neutral-500 mb-2">Product Development</p>
<p className="text-[10px] font-mono text-neutral-600">
                  Building and launching digital products from concept to market
                </p>
</div>
</div>
</div>
</div>
</main>

<section className="border-t border-white/10">
<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="col-span-1 md:col-span-3 p-8 md:p-12 bg-white/[0.01] flex items-start">
<h3 className="text-sm font-medium uppercase tracking-widest text-neutral-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="lightbulb" style={{strokeWidth: '1.5'}}></i>
              Reflection
            </h3>
</div>
<div className="col-span-1 md:col-span-9 p-8 md:p-16">
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 text-neutral-100 font-semibold">
              Building this portfolio has been a journey of growth and learning.
            </h3>
<div className="space-y-6 text-sm md:text-base leading-relaxed font-light text-neutral-400">
<p>
                My digital portfolio is coming together really well, and I'm
                genuinely proud of the progress I've made so far. The overall
                layout and navigation flow feel clean, intuitive, and easy for
                visitors to understand, which was one of my main goals from the
                start. I spent time selecting a color scheme and font pairing
                that feel modern and professional, and I'm happy with how
                readable and visually balanced everything looks across different
                pages.
              </p>
<p>
                Throughout the process of building this portfolio, I've learned
                a lot not just about design choices, but also about structuring
                content in a way that highlights my strengths. It taught me how
                important consistency is for creating a cohesive user experience
                and how small improvements in layout or spacing can make the
                entire site feel more polished.
              </p>
<p>
                Some parts of the process were challenging at first, especially
                deciding how to organize different sections so everything felt
                natural and not overwhelming. But working through those
                decisions helped me develop stronger design instincts. Tools
                like design templates, color palette generators, and examples of
                professional portfolios online were really helpful resources,
                and I plan to keep using them as I refine my site.
              </p>
<p>
                Overall, I feel confident about the direction my digital
                portfolio is heading, and I'm excited to continue improving it
                as I grow and gain more experience.
              </p>
</div>
</div>
</div>
</section>
<footer className="border-t relative overflow-hidden border-white/10" id="contact">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x relative z-10 divide-white/10">

<div className="col-span-1 md:col-span-9 p-8 md:p-16 flex flex-col justify-center items-start">
<h2 className="text-3xl md:text-4xl tracking-tighter mb-4 text-neutral-100 font-semibold">
              Let's build something great 🚀
            </h2>
<p className="text-lg text-neutral-500 font-light mb-8">
              Have a project in mind? Reach out at
              <a className="underline underline-offset-4 transition-all text-neutral-300 hover:text-white decoration-white/20" href="mailto:abdullah.msohail@gmail.com">
                abdullah.msohail@gmail.com
              </a>
              and let's discuss how we can work together.
            </p>
<a className="px-6 py-3 border text-xs font-medium uppercase tracking-widest transition-all duration-300 border-neutral-700 bg-neutral-900/50 text-neutral-100 hover:bg-neutral-100 hover:text-black hover:border-neutral-100" href="mailto:abdullah.msohail@gmail.com">
              abdullah.msohail@gmail.com
            </a>
</div>

<div className="col-span-1 md:col-span-3 p-8 md:p-16 flex flex-col justify-end bg-black/30">
<div className="mt-auto font-mono text-[10px] space-y-2 text-neutral-600">
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="globe" style={{strokeWidth: '1.5'}}></i>
<span>WORLDWIDE</span>
</div>
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
<span>REMOTE WORK</span>
</div>
<div className="pt-8 text-neutral-700">© 2024 ABDULLAH SOHAIL</div>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
