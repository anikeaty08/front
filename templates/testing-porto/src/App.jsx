import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Portfolio data
const portfolioData = {
  ecommerce: {
    title: 'E-commerce Platform',
    subtitle: 'Modern marketplace with seamless UX',
    category: 'Web Design & Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
    description: 'A comprehensive e-commerce platform designed to deliver an exceptional shopping experience. Built with modern web technologies to ensure fast performance and smooth navigation.',
    challenge: 'The client needed a scalable e-commerce solution that could handle thousands of products while maintaining fast load times and providing an intuitive user experience across all devices.',
    solution: 'We developed a progressive web application with advanced filtering, real-time inventory management, and a streamlined checkout process. The platform features dynamic product recommendations and integrated payment solutions.',
    results: [
      { metric: '180%', label: 'Increase in conversion rate' },
      { metric: '3.2s', label: 'Average page load time' },
      { metric: '95%', label: 'Mobile satisfaction score' }
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    link: 'https://example.com'
  },
  banking: {
    title: 'Banking App',
    subtitle: 'Fintech mobile solution',
    category: 'Mobile App Design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
    description: 'A secure and intuitive mobile banking application that empowers users to manage their finances on the go. Designed with security and user experience as top priorities.',
    challenge: 'Creating a banking app that balances robust security measures with a simple, frictionless user experience while meeting strict regulatory requirements.',
    solution: 'We implemented biometric authentication, end-to-end encryption, and a clean interface that makes complex financial operations simple. The app includes features like instant transfers, bill payments, and spending insights.',
    results: [
      { metric: '4.8★', label: 'App store rating' },
      { metric: '500k+', label: 'Active users' },
      { metric: '99.9%', label: 'Uptime reliability' }
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Plaid API', 'AWS'],
    link: 'https://example.com'
  },
  brand: {
    title: 'Brand Identity',
    subtitle: 'Complete visual system',
    category: 'Brand Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
    description: 'A comprehensive brand identity system that captures the essence of a forward-thinking technology company. From logo design to brand guidelines, every element tells a cohesive story.',
    challenge: 'The client needed to rebrand to appeal to a more modern, tech-savvy audience while maintaining trust with their existing customer base.',
    solution: 'We created a bold, minimalist identity system with a distinctive logo, vibrant color palette, and flexible design system. The brand guidelines ensure consistency across all touchpoints.',
    results: [
      { metric: '200%', label: 'Brand recognition increase' },
      { metric: '85%', label: 'Positive sentiment' },
      { metric: '50+', label: 'Brand assets delivered' }
    ],
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe After Effects'],
    link: 'https://example.com'
  },
  dashboard: {
    title: 'Analytics Dashboard',
    subtitle: 'Data visualization platform',
    category: 'UI/UX Design & Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    description: 'An advanced analytics dashboard that transforms complex data into actionable insights. Built for data-driven decision makers who need real-time visibility into their business metrics.',
    challenge: 'The client needed to consolidate data from multiple sources into a single, intuitive interface that non-technical users could understand and use effectively.',
    solution: 'We designed an interactive dashboard with customizable widgets, real-time data updates, and advanced filtering capabilities. The interface adapts to different user roles and permissions.',
    results: [
      { metric: '70%', label: 'Faster decision making' },
      { metric: '10+', label: 'Data sources integrated' },
      { metric: '98%', label: 'User satisfaction' }
    ],
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL', 'Docker'],
    link: 'https://example.com'
  },
  video: {
    title: 'Video Platform',
    subtitle: 'Streaming interface design',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop',
    description: 'A modern video streaming platform that delivers high-quality content with minimal buffering. Designed to compete with industry leaders while offering unique features.',
    challenge: 'Creating a video platform that provides smooth playback across varying network conditions while maintaining a beautiful, distraction-free viewing experience.',
    solution: 'We built an adaptive streaming solution with intelligent quality adjustment, offline viewing capabilities, and personalized recommendations. The interface disappears during playback to maximize content focus.',
    results: [
      { metric: '5M+', label: 'Monthly active users' },
      { metric: '45min', label: 'Average session duration' },
      { metric: '92%', label: 'Content completion rate' }
    ],
    technologies: ['Next.js', 'Video.js', 'AWS MediaConvert', 'Redis', 'CDN'],
    link: 'https://example.com'
  }
};

function openPortfolioModal(projectId) {
  const project = portfolioData[projectId];
  if (!project) return;

  const modal = document.getElementById('portfolioModal');
  const modalContent = document.getElementById('modalContent');

  modalContent.innerHTML = `
    <!-- Hero Image -->
    <div class="relative w-full aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden border border-white/10 mb-6">
      <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${project.title}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div class="absolute bottom-4 left-4 md:bottom-6 md:left-6">
        <span class="inline-flex items-center text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
          ${project.category}
        </span>
      </div>
    </div>

    <!-- Title & Description -->
    <div class="mb-8">
      <h2 class="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tighter leading-tight">${project.title}</h2>
      <p class="text-base md:text-lg text-neutral-400 mt-2">${project.subtitle}</p>
      <div class="h-px bg-white/10 mt-6"></div>
    </div>

    <!-- Overview -->
    <div class="mb-8">
      <h3 class="text-xl md:text-2xl font-medium text-white tracking-tight mb-3">Overview</h3>
      <p class="text-sm md:text-base text-neutral-300 leading-relaxed">${project.description}</p>
    </div>

    <!-- Challenge & Solution Grid -->
    <div class="grid md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6">
        <h3 class="text-lg md:text-xl font-medium text-white tracking-tight mb-3 flex items-center gap-2">
          <i data-lucide="target" class="w-5 h-5" style="stroke-width:1.5"></i>
          Challenge
        </h3>
        <p class="text-sm md:text-base text-neutral-300 leading-relaxed">${project.challenge}</p>
      </div>
      <div class="bg-white/5 border border-white/10 rounded-xl p-5 md:p-6">
        <h3 class="text-lg md:text-xl font-medium text-white tracking-tight mb-3 flex items-center gap-2">
          <i data-lucide="lightbulb" class="w-5 h-5" style="stroke-width:1.5"></i>
          Solution
        </h3>
        <p class="text-sm md:text-base text-neutral-300 leading-relaxed">${project.solution}</p>
      </div>
    </div>

    <!-- Results -->
    <div class="mb-8">
      <h3 class="text-xl md:text-2xl font-medium text-white tracking-tight mb-4">Results</h3>
      <div class="grid grid-cols-3 gap-3 md:gap-4">
        ${project.results.map(result => `
          <div class="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-4 md:p-6 text-center">
            <div class="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight">${result.metric}</div>
            <div class="text-xs md:text-sm text-neutral-400 mt-2">${result.label}</div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Technologies -->
    <div class="mb-8">
      <h3 class="text-xl md:text-2xl font-medium text-white tracking-tight mb-4">Technologies Used</h3>
      <div class="flex flex-wrap gap-2">
        ${project.technologies.map(tech => `
          <span class="inline-flex items-center gap-2 text-xs md:text-sm text-neutral-200 bg-white/5 border-white/10 border rounded-full py-2 px-4 hover:bg-white/10 transition-colors duration-200">
            ${tech}
          </span>
        `).join('')}
      </div>
    </div>

    <!-- CTA -->
    <div class="h-px bg-white/10 mb-6"></div>
    <div class="flex flex-col sm:flex-row gap-4">
      <a href="${project.link}" target="_blank" class="gradient-border w-full sm:w-auto transition-transform hover:scale-[1.02] duration-200">
        <span class="gradient-border-inner">
          View Live Project
          <i data-lucide="external-link" class="w-4 h-4 ml-2" style="stroke-width:1.5"></i>
        </span>
      </a>
      <button onclick="closePortfolioModal()" class="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200">
        Close
      </button>
    </div>
  `;

  // Reinitialize Lucide icons in the modal
  lucide.createIcons();

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
  const modal = document.getElementById('portfolioModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function openContactModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  lucide.createIcons();
}

function closeContactModal() {
  const modal = document.getElementById('contactModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function copyEmail() {
  const email = 'hello@brind.studio';
  navigator.clipboard.writeText(email).then(() => {
    const copyText = document.getElementById('copyText');
    copyText.textContent = 'Copied!';
    copyText.classList.add('text-green-400');
    
    setTimeout(() => {
      copyText.textContent = 'Click to copy';
      copyText.classList.remove('text-green-400');
    }, 2000);
  });
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closePortfolioModal();
    closeContactModal();
  }
});

lucide.createIcons();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="lines fixed top-0 left-0 right-0 h-full m-auto pointer-events-none z-0" style={{width: '90vw'}}>
<div className="line line-anim line-1 absolute w-px h-full top-0 left-1/2" style={{marginLeft: '-22.5vw', background: 'rgba(255,255,255,0.1)'}}></div>
<div className="line line-anim line-2 absolute w-px h-full top-0 left-1/2" style={{background: 'rgba(255,255,255,0.1)'}}></div>
<div className="line line-anim line-3 absolute w-px h-full top-0 left-1/2" style={{marginLeft: '22.5vw', background: 'rgba(255,255,255,0.1)'}}></div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4 md:p-6" id="contactModal">

<div className="absolute inset-0 bg-black/80 modal-backdrop" onclick="closeContactModal()"></div>

<div className="relative z-10 w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl animate-scaleIn">

<button className="absolute top-4 right-4 z-20 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur border border-white/10 transition-all duration-300 hover:scale-110" onclick="closeContactModal()">
<i className="w-5 h-5 text-white" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>

<div className="p-6 md:p-8">
<div className="text-center mb-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-4">
<i className="w-6 h-6 text-white" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">Get in Touch</h3>
<p className="text-sm text-neutral-400 mt-2">Choose how you'd like to contact me</p>
</div>
<div className="space-y-3">

<a className="w-full group relative overflow-hidden flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300" href="mailto:hello@brind.studio?subject=Project Inquiry&amp;body=Hi, I'd like to discuss a project with you.">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-blue-400" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 text-left">
<div className="text-sm font-medium text-white">Open Email Client</div>
<div className="text-xs text-neutral-400">hello@brind.studio</div>
</div>
<i className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>

<a className="w-full group relative overflow-hidden flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=hello@brind.studio&amp;su=Project Inquiry&amp;body=Hi, I'd like to discuss a project with you." target="_blank">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:scale-110 transition-transform duration-300">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
<polyline points="22,6 12,13 2,6"></polyline>
</svg>
</div>
<div className="flex-1 text-left">
<div className="text-sm font-medium text-white">Open in Gmail</div>
<div className="text-xs text-neutral-400">Compose in browser</div>
</div>
<i className="w-5 h-5 text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" data-lucide="external-link" style={{strokeWidth: '1.5'}}></i>
</a>

<button className="w-full group relative overflow-hidden flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300" onclick="copyEmail()">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
<i className="w-5 h-5 text-purple-400" data-lucide="copy" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1 text-left">
<div className="text-sm font-medium text-white">Copy Email Address</div>
<div className="text-xs text-neutral-400" id="copyText">Click to copy</div>
</div>
<i className="w-5 h-5 text-neutral-400 group-hover:text-white transition-all duration-300" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="mt-6 pt-6 border-t border-white/10">
<div className="flex items-center justify-center gap-4 text-neutral-400">
<a className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition" href="#">
<i className="w-5 h-5" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition" href="#">
<i className="w-5 h-5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="p-2 rounded-lg hover:bg-white/5 hover:text-white transition" href="#">
<i className="w-5 h-5" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4 md:p-6" id="portfolioModal">

<div className="absolute inset-0 bg-black/80 modal-backdrop" onclick="closePortfolioModal()"></div>

<div className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-2xl lg:rounded-3xl animate-scaleIn">

<button className="absolute top-4 right-4 md:top-6 md:right-6 z-20 inline-flex items-center justify-center h-10 w-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur border border-white/10 transition-all duration-300 hover:scale-110" onclick="closePortfolioModal()">
<i className="w-5 h-5 text-white" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>

<div className="p-6 md:p-8 lg:p-12" id="modalContent">

</div>
</div>
</div>

<header className="relative z-10 animate-slideDown bg-zinc-950/80 backdrop-blur-xl w-full max-w-7xl border-zinc-800/60 border rounded-2xl lg:rounded-3xl mt-4 md:mt-6 mx-auto p-3 md:p-4">
<div className="flex flex-col md:flex-row gap-3 md:gap-4 items-center justify-between">
<div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] md:w-[150px] h-[32px] md:h-[40px] bg-[url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=320&amp;h=100&amp;fit=crop)] bg-cover rounded transition-transform hover:scale-105 duration-200" href="#"></a>
<button className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors">
<i className="w-5 h-5" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors duration-200 font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors duration-200 font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full" href="#testimonials">Testimonials</a>
<a className="hover:text-white transition-colors duration-200 font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200 font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200 font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-200 hover:after:w-full" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex gradient-border transition-transform hover:scale-[1.02] duration-200" href="#resume">
<span className="gradient-border-inner">Resume</span>
</a>
</div>
</header>

<section className="relative z-10 animate-scaleIn animation-delay-200 bg-neutral-900/60 w-full bg-[url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&amp;h=900&amp;fit=crop)] max-w-7xl bg-cover border-white/10 border rounded-2xl lg:rounded-3xl mt-12 md:mt-24 mx-auto p-4 md:p-6 lg:p-8 backdrop-blur min-h-[500px] md:min-h-[600px] flex items-end">

<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/50 to-neutral-950/90 rounded-2xl lg:rounded-3xl"></div>

<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-4 md:bottom-6 left-4 md:left-6 animate-fadeIn animation-delay-600" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none text-sky-300/40" style={{fontWeight: '600', fontSize: 'min(25vw, 200px)', lineHeight: '0.8', md: 'font-size:min(20vw, 280px)'}}>BRIND</span>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start w-full">

<div className="lg:col-span-7 z-10">
<h1 className="text-[32px] sm:text-[44px] md:text-6xl lg:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter animate-fadeInLeft animation-delay-300">Building Digital Experiences That Captivate</h1>
</div>

<div className="lg:col-span-5 z-10">
<p className="text-sm md:text-base text-neutral-300 max-w-[42ch] animate-fadeInRight animation-delay-400">Our team blends strategy, design, and technology to craft memorable digital experiences that drive results.</p>
<div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fadeInUp animation-delay-500 mt-5 items-start sm:items-center">
<a className="gradient-border w-full sm:w-auto transition-transform hover:scale-[1.02] duration-200" href="#contact">
<span className="gradient-border-inner">Book a call</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200" href="#pricing">
View pricing
<i className="w-4 h-4 ml-2" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 animate-scaleIn animation-delay-300 bg-zinc-950/80 backdrop-blur-xl w-full max-w-7xl border-white/10 border rounded-2xl lg:rounded-3xl mt-12 md:mt-24 mx-auto p-4 md:p-6 lg:p-8" id="portfolio">

<div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center animate-fadeInUp">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight">Portfolio</span>
<span className="hidden sm:block w-px h-10 bg-white/10"></span>
<span className="text-sm text-neutral-300">featured work</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start mt-6 md:mt-8">

<div className="flex flex-col min-h-full justify-between lg:col-span-5 animate-fadeInLeft animation-delay-200">
<div>
<h2 className="text-[32px] sm:text-[44px] md:text-6xl lg:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">
Creative solutions that make impact.
</h2>

<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-300"></div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<p className="text-sm font-medium text-white tracking-tight">Skills &amp; Expertise</p>
<div className="mt-3 flex flex-wrap gap-2 stagger-animation">
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<i className="w-3.5 h-3.5" data-lucide="code" style={{strokeWidth: '1.5'}}></i>
Frontend Development
</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<i className="w-3.5 h-3.5" data-lucide="palette" style={{strokeWidth: '1.5'}}></i>
UI/UX Design
</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<i className="w-3.5 h-3.5" data-lucide="camera" style={{strokeWidth: '1.5'}}></i>
Photography
</span>
<span className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-white/5 border-white/10 border rounded-full py-1.5 px-3 hover:bg-white/10 transition-colors duration-200">
<i className="w-3.5 h-3.5" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
Brand Identity
</span>
</div>
</div>

<div className="mt-6 grid grid-cols-3 gap-3 md:gap-4 stagger-animation">
<div className="hover-lift bg-white/5 border border-white/10 rounded-xl p-4">
<div className="text-xl md:text-2xl font-semibold text-white">50+</div>
<div className="text-xs text-neutral-400 mt-1">Projects</div>
</div>
<div className="hover-lift bg-white/5 border border-white/10 rounded-xl p-4">
<div className="text-xl md:text-2xl font-semibold text-white">5</div>
<div className="text-xs text-neutral-400 mt-1">Years</div>
</div>
<div className="hover-lift bg-white/5 border border-white/10 rounded-xl p-4">
<div className="text-xl md:text-2xl font-semibold text-white">100%</div>
<div className="text-xs text-neutral-400 mt-1">Satisfaction</div>
</div>
</div>
</div>
<div className="w-full mt-8 md:mt-10 animate-fadeInUp animation-delay-500">
<p className="text-sm font-medium text-white tracking-tight">Available for projects</p>
<p className="text-sm text-neutral-300 max-w-sm mt-1">
Crafting digital experiences with clean code, thoughtful design, and user-first approach.
</p>
<div className="flex flex-col sm:flex-row gap-4 mt-5">
<a className="gradient-border w-full sm:w-auto transition-transform hover:scale-[1.02] duration-200" href="#work">
<span className="gradient-border-inner">View portfolio</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200" href="#pricing">
Start project
<i className="w-4 h-4 ml-2" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7 animate-fadeInRight animation-delay-300">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 stagger-animation">

<div className="md:col-span-2 relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift cursor-pointer" onclick="openPortfolioModal('ecommerce')">
<div className="aspect-[16/10] relative overflow-hidden">
<img alt="Creative web design project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="monitor" style={{strokeWidth: '1.5'}}></i>
Web Design
</span>
</div>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-8 w-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<i className="w-4 h-4 text-white" data-lucide="external-link" style={{strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="p-3 md:p-4">
<h3 className="text-sm md:text-base font-medium text-white tracking-tight">E-commerce Platform</h3>
<p className="text-xs md:text-sm text-neutral-400 mt-1">Modern marketplace with seamless UX</p>
</div>
</div>

<div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift cursor-pointer" onclick="openPortfolioModal('banking')">
<div className="aspect-square relative overflow-hidden">
<img alt="Mobile app design" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<i className="w-3.5 h-3.5" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Banking App</h3>
<p className="text-xs text-neutral-400 mt-1">Fintech mobile solution</p>
</div>
</div>

<div className="relative overflow-hidden group hover:border-white/20 transition-all duration-300 bg-neutral-900 border-white/10 border rounded-xl md:rounded-2xl hover-lift cursor-pointer" onclick="openPortfolioModal('brand')">
<div className="aspect-square relative overflow-hidden">
<img alt="Brand identity design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<i className="w-3.5 h-3.5" data-lucide="palette" style={{strokeWidth: '1.5'}}></i>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Brand Identity</h3>
<p className="text-xs text-neutral-400 mt-1">Complete visual system</p>
</div>
</div>

<div className="relative overflow-hidden group hover:border-white/20 transition-all duration-300 bg-neutral-900 border-white/10 border rounded-xl md:rounded-2xl hover-lift cursor-pointer" onclick="openPortfolioModal('dashboard')">
<div className="aspect-square relative overflow-hidden">
<img alt="Dashboard design" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<i className="w-3.5 h-3.5" data-lucide="layout-dashboard" style={{strokeWidth: '1.5'}}></i>
</span>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Analytics Dashboard</h3>
<p className="text-xs text-neutral-400 mt-1">Data visualization</p>
</div>
</div>

<div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-neutral-900 group hover:border-white/20 transition-all duration-300 hover-lift cursor-pointer" onclick="openPortfolioModal('video')">
<div className="aspect-square relative overflow-hidden">
<img alt="Video platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-2 backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</span>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<i className="h-6 w-6 text-white ml-1" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<div className="p-3">
<h3 className="text-sm font-medium text-white tracking-tight">Video Platform</h3>
<p className="text-xs text-neutral-400 mt-1">Streaming interface</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 animate-scaleIn animation-delay-400 bg-zinc-950/80 backdrop-blur-xl w-full max-w-7xl border-white/10 border rounded-2xl lg:rounded-3xl mt-12 md:mt-24 mx-auto p-4 md:p-6 lg:p-8" id="testimonials">

<div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center animate-fadeInUp">
<span className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight">Testimonials</span>
<span className="hidden sm:block w-px bg-white/10 h-10"></span>
<span className="text-sm text-zinc-400">client success stories</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-center mt-6 md:mt-8">

<div className="lg:col-span-6 animate-fadeInLeft animation-delay-200">
<h3 className="text-[32px] sm:text-[44px] md:text-6xl lg:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">Clients love Brind</h3>
<p className="mt-3 text-sm md:text-base text-zinc-400 max-w-[48ch]">Trusted by innovative companies, delivering exceptional digital experiences that drive real results.</p>
<div className="mt-6 grid grid-cols-3 gap-3 stagger-animation">
<div className="bg-zinc-900/60 border-white/10 border rounded-xl p-4 md:p-6 hover-lift">
<div className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">50+</div>
<div className="text-xs text-zinc-400 mt-1">Projects delivered</div>
</div>
<div className="rounded-xl bg-zinc-900/60 border border-white/10 p-4 md:p-6 hover-lift">
<div className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">5</div>
<div className="text-xs text-zinc-400 mt-1">Years experience</div>
</div>
<div className="rounded-xl bg-zinc-900/60 border border-white/10 p-4 md:p-6 hover-lift">
<div className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">100%</div>
<div className="text-xs text-zinc-400 mt-1">Client satisfaction</div>
</div>
</div>
<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-400"></div>

<div className="flex flex-col sm:flex-row gap-4 mt-5">
<a className="gradient-border w-full sm:w-auto transition-transform hover:scale-[1.02] duration-200" href="#contact">
<span className="gradient-border-inner">Book a call</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200" href="#pricing">
Start project
<i className="w-4 h-4 ml-2" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInRight animation-delay-300 relative overflow-hidden h-[500px] md:h-[600px] rounded-2xl lg:rounded-3xl">
<div className="testimonial-scroll-container flex flex-col gap-4 md:gap-6">

<article className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-2xl p-4 md:p-6 lg:p-8 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-base md:text-lg font-semibold text-zinc-100 tracking-tight">Sarah Thompson</div>
<div className="text-xs text-zinc-400 mt-0.5">CEO, TechFlow Solutions</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm md:text-base text-zinc-300">
"Working with Brind was exceptional. The team delivered a stunning website that perfectly captured our vision and significantly improved our user engagement."
</p>
<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
+180% engagement
</span>
<span className="text-xs text-zinc-500">Web Development</span>
</div>
</div>
</div>
</article>

<article className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-2xl p-4 md:p-6 lg:p-8 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-base md:text-lg font-semibold text-zinc-100 tracking-tight">Marcus Rodriguez</div>
<div className="text-xs text-zinc-400 mt-0.5">CTO, InnovateHub</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm md:text-base text-zinc-300">
"The creative development process was seamless. Brind understood our technical requirements and delivered a solution that exceeded our expectations."
</p>
<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
Mobile App
</span>
<span className="text-xs text-zinc-500">Development</span>
</div>
</div>
</div>
</article>

<article className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-2xl p-4 md:p-6 lg:p-8 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-base md:text-lg font-semibold text-zinc-100 tracking-tight">Emma Chen</div>
<div className="text-xs text-zinc-400 mt-0.5">Creative Director, PixelCraft</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm md:text-base text-zinc-300">
"Outstanding attention to detail and creative vision. The brand identity work exceeded our expectations and truly captured our company's essence."
</p>
<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="palette" style={{strokeWidth: '1.5'}}></i>
Brand Design
</span>
<span className="text-xs text-zinc-500">Visual Identity</span>
</div>
</div>
</div>
</article>

<article className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-2xl p-4 md:p-6 lg:p-8 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-base md:text-lg font-semibold text-zinc-100 tracking-tight">David Park</div>
<div className="text-xs text-zinc-400 mt-0.5">Founder, StartupLab</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm md:text-base text-zinc-300">
"Fast turnaround, professional communication, and exceptional results. The full-stack solution helped us launch on time and under budget."
</p>
<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="code" style={{strokeWidth: '1.5'}}></i>
Full-Stack
</span>
<span className="text-xs text-zinc-500">Development</span>
</div>
</div>
</div>
</article>

<article className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-2xl p-4 md:p-6 lg:p-8 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-base md:text-lg font-semibold text-zinc-100 tracking-tight">Sarah Thompson</div>
<div className="text-xs text-zinc-400 mt-0.5">CEO, TechFlow Solutions</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm md:text-base text-zinc-300">
"Working with Brind was exceptional. The team delivered a stunning website that perfectly captured our vision and significantly improved our user engagement."
</p>
<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
+180% engagement
</span>
<span className="text-xs text-zinc-500">Web Development</span>
</div>
</div>
</div>
</article>
<article className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border-zinc-800/60 border rounded-2xl p-4 md:p-6 lg:p-8 flex-shrink-0 hover-lift">
<div className="flex items-start gap-4">
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-base md:text-lg font-semibold text-zinc-100 tracking-tight">Marcus Rodriguez</div>
<div className="text-xs text-zinc-400 mt-0.5">CTO, InnovateHub</div>
</div>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex items-center gap-2 text-sm text-zinc-300">
<span className="text-zinc-200">5.0</span>
<div className="flex text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm md:text-base text-zinc-300">
"The creative development process was seamless. Brind understood our technical requirements and delivered a solution that exceeded our expectations."
</p>
<div className="mt-4 flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
<i className="w-3.5 h-3.5" data-lucide="smartphone" style={{strokeWidth: '1.5'}}></i>
Mobile App
</span>
<span className="text-xs text-zinc-500">Development</span>
</div>
</div>
</div>
</article>
</div>

<div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-10"></div>
<div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent pointer-events-none z-10"></div>
</div>
</div>
</section>

<section className="relative z-10 animate-scaleIn animation-delay-500 bg-zinc-950/80 backdrop-blur-xl w-full max-w-7xl border-white/10 border rounded-2xl lg:rounded-3xl mt-12 md:mt-24 mx-auto p-4 md:p-6 lg:p-8" id="services">

<div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center animate-fadeInUp">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight">Services</span>
<span className="hidden sm:block w-px bg-white/10 h-10"></span>
<span className="text-sm text-neutral-300">what we offer</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8">

<div className="lg:col-span-6 animate-fadeInLeft animation-delay-200">
<h2 className="text-[32px] sm:text-[44px] md:text-6xl lg:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">Let's Build Something Extraordinary</h2>
<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-300"></div>

<div className="mt-6 animate-fadeInUp animation-delay-400">
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
<h3 className="text-xl sm:text-2xl md:text-3xl text-zinc-100 font-light tracking-tighter">Creative Development</h3>
<span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-200 w-fit">Starting at $2,999</span>
</div>
<p className="text-zinc-400 text-sm md:text-base mt-3">Crafting digital experiences that captivate and convert your audience</p>
</div>
<div className="h-px bg-white/10 mt-6 animate-fadeIn animation-delay-500"></div>

<div className="mt-6 animate-fadeInUp animation-delay-600">
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
<h3 className="text-xl sm:text-2xl md:text-3xl text-zinc-100 font-light tracking-tighter">Full-Stack Solutions</h3>
<span className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm text-zinc-200 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition-colors duration-200 w-fit">Starting at $5,999</span>
</div>
<p className="text-zinc-400 text-sm md:text-base mt-3">Complete digital solutions from strategy to deployment and beyond.</p>
</div>

<div className="flex flex-col sm:flex-row gap-4 mt-6">
<a className="gradient-border w-full sm:w-auto transition-transform hover:scale-[1.02] duration-200" href="#work">
<span className="gradient-border-inner">View work</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 border border-white/10 rounded-lg px-6 py-3 text-sm text-white hover:bg-white/10 transition-all duration-200" href="#pricing">
Start project
<i className="w-4 h-4 ml-2" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>

<div className="lg:col-span-6 animate-fadeInRight animation-delay-300">
<div className="relative mx-auto w-full hover-lift" style={{filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))'}}>

<div className="rounded-2xl lg:rounded-[28px] bg-neutral-900/60 ring-1 ring-white/10 p-2 md:p-3">

<div className="relative overflow-hidden rounded-xl lg:rounded-[22px] bg-neutral-950 border border-white/10">

<div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 border-b border-white/10">
<span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-zinc-700"></span>
<span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-zinc-700/70"></span>
<span className="h-2 w-2 md:h-3 md:w-3 rounded-full bg-zinc-700/50"></span>
</div>

<div className="p-3 md:p-4 lg:p-6">
<div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 lg:gap-4 stagger-animation">
<div className="relative overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300 aspect-square">
<img alt="Project preview 1" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=320&amp;h=320&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300 aspect-square">
<img alt="Project preview 2" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=320&amp;h=320&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-neutral-900 md:row-span-2 hover:scale-105 transition-transform duration-300 aspect-square md:aspect-auto">
<img alt="Project preview 3" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=320&amp;h=640&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="relative overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300 aspect-square">
<img alt="Project preview 4" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=320&amp;h=320&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
<div className="relative overflow-hidden rounded-lg md:rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300 aspect-square">
<img alt="Project preview 5" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=320&amp;h=320&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -right-12 md:-right-24 bottom-0 w-48 h-48 md:w-72 md:h-72 rounded-full bg-white/10 blur-3xl"></div>
<div className="pointer-events-none absolute -left-12 md:-left-24 -top-12 md:-top-24 w-56 h-56 md:w-80 md:h-80 rounded-full bg-white/5 blur-3xl"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 animate-scaleIn animation-delay-600 bg-zinc-950/80 backdrop-blur-xl w-full max-w-7xl border-white/10 border rounded-2xl lg:rounded-3xl mt-12 md:mt-24 mx-auto p-4 md:p-6 lg:p-8" id="about">

<div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start sm:items-center animate-fadeInUp">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight">About</span>
<span className="hidden sm:block w-px bg-white/10 h-10"></span>
<span className="text-sm text-neutral-300">our story</span>
</div>
<div className="h-px bg-white/10 mt-4 animate-fadeIn animation-delay-100"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8">

<div className="lg:col-span-7 animate-fadeInLeft animation-delay-200">
<h2 className="text-[32px] sm:text-[44px] md:text-6xl lg:text-7xl leading-[1.05] font-light text-zinc-100 tracking-tighter">
We Create Digital Excellence
</h2>
<p className="mt-6 text-sm md:text-base text-neutral-300 leading-relaxed">
Founded in 2019, Brind emerged from a passion for creating exceptional digital experiences. We're a team of designers, developers, and strategists dedicated to pushing the boundaries of what's possible on the web.
</p>
<p className="mt-4 text-sm md:text-base text-neutral-300 leading-relaxed">
Our mission is simple: to craft digital solutions that not only look stunning but drive real business results. We believe in the power of thoughtful design, clean code, and user-centric thinking.
</p>

<div className="mt-8">
<h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-4">Our Values</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 stagger-animation">
<div className="bg-white/5 border border-white/10 rounded-xl p-5 hover-lift">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 mb-3">
<i className="w-5 h-5 text-blue-400" data-lucide="target" style={{strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-base font-medium text-white tracking-tight">Excellence First</h4>
<p className="text-sm text-neutral-400 mt-2">We're committed to delivering the highest quality in every project we undertake.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-5 hover-lift">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 mb-3">
<i className="w-5 h-5 text-purple-400" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-base font-medium text-white tracking-tight">Client Partnership</h4>
<p className="text-sm text-neutral-400 mt-2">We work closely with our clients, treating their success as our own.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-5 hover-lift">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="lightbulb" style={{strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-base font-medium text-white tracking-tight">Innovation</h4>
<p className="text-sm text-neutral-400 mt-2">We stay ahead of trends and embrace cutting-edge technologies.</p>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-5 hover-lift">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 mb-3">
<i className="w-5 h-5 text-orange-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-base font-medium text-white tracking-tight">Passion</h4>
<p className="text-sm text-neutral-400 mt-2">We love what we do, and it shows in every pixel and line of code.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 animate-fadeInRight animation-delay-300">
<h3 className="text-xl md:text-2xl font-medium text-white tracking-tight mb-6">Meet The Team</h3>
<div className="space-y-4 stagger-animation">

<div className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border border-white/10 rounded-2xl p-5 md:p-6 hover-lift">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0 overflow-hidden">
<img alt="Alex Chen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div className="flex-1">
<h4 className="text-base font-semibold text-white tracking-tight">Alex Chen</h4>
<p className="text-sm text-neutral-400">Founder &amp; Creative Director</p>
<p className="text-xs text-neutral-500 mt-2">Leading creative vision and strategy with 10+ years of experience in digital design.</p>
<div className="flex items-center gap-2 mt-3">
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border border-white/10 rounded-2xl p-5 md:p-6 hover-lift">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 overflow-hidden">
<img alt="Sarah Martinez" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div className="flex-1">
<h4 className="text-base font-semibold text-white tracking-tight">Sarah Martinez</h4>
<p className="text-sm text-neutral-400">Lead Developer</p>
<p className="text-xs text-neutral-500 mt-2">Full-stack expert specializing in React, Node.js, and scalable architectures.</p>
<div className="flex items-center gap-2 mt-3">
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="github" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border border-white/10 rounded-2xl p-5 md:p-6 hover-lift">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex-shrink-0 overflow-hidden">
<img alt="James Wilson" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div className="flex-1">
<h4 className="text-base font-semibold text-white tracking-tight">James Wilson</h4>
<p className="text-sm text-neutral-400">UI/UX Designer</p>
<p className="text-xs text-neutral-500 mt-2">Creating intuitive interfaces that users love with attention to every detail.</p>
<div className="flex items-center gap-2 mt-3">
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="dribbble" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-zinc-900/90 via-zinc-900/50 to-zinc-800/20 border border-white/10 rounded-2xl p-5 md:p-6 hover-lift">
<div className="flex items-start gap-4">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex-shrink-0 overflow-hidden">
<img alt="Maria Garcia" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div className="flex-1">
<h4 className="text-base font-semibold text-white tracking-tight">Maria Garcia</h4>
<p className="text-sm text-neutral-400">Project Manager</p>
<p className="text-xs text-neutral-500 mt-2">Ensuring seamless delivery and client satisfaction on every project.</p>
<div className="flex items-center gap-2 mt-3">
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-neutral-400 hover:text-white transition" href="#">
<i className="w-4 h-4" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 animate-scaleIn animation-delay-600 w-full max-w-7xl border-white/10 border rounded-2xl lg:rounded-3xl mt-12 md:mt-24 mb-6 md:mb-8 mx-auto p-4 md:p-6 lg:p-8 backdrop-blur" id="contact">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-0 bottom-0 w-[60%] h-[80%] rounded-[40%] bg-gradient-to-tr from-white/5 to-transparent blur-3xl"></div>
</div>

<div className="flex items-center justify-center gap-4 text-neutral-400 text-sm animate-fadeInUp animation-delay-100">
<span className="h-px w-8 md:w-12 bg-white/10"></span>
<span className="italic">Reach out anytime</span>
<span className="h-px w-8 md:w-12 bg-white/10"></span>
</div>

<h2 className="mt-4 text-3xl sm:text-4xl md:text-6xl text-white text-center font-light tracking-tighter animate-fadeInUp animation-delay-200">
Let's Stay <span className="text-white/90">Connected</span>
</h2>

<p className="mt-4 text-sm md:text-base text-neutral-400 max-w-xl mx-auto text-center animate-fadeInUp animation-delay-300">Got questions or want to collaborate? Feel free to reach out—We're open to new projects or just a casual chat!</p>

<div className="mt-6 flex justify-center animate-fadeInUp animation-delay-400">
<button className="gradient-border transition-transform hover:scale-[1.02] duration-200" onclick="openContactModal()">
<span className="gradient-border-inner">Contact me</span>
</button>
</div>

<div className="mt-8 flex items-center justify-center gap-4 md:gap-6 text-neutral-400 animate-fadeInUp animation-delay-500">
<a aria-label="X (Twitter)" className="p-2 rounded hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200" href="#">
<i className="w-5 h-5" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Instagram" className="p-2 rounded hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200" href="#">
<i className="w-5 h-5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
<span className="h-6 w-px bg-white/10"></span>
<a aria-label="Facebook" className="p-2 rounded hover:bg-white/5 hover:text-white transition hover:scale-110 duration-200" href="#">
<i className="w-5 h-5" data-lucide="facebook" style={{strokeWidth: '1.5'}}></i>
</a>
</div>

<p className="mt-6 text-center animate-fadeInUp animation-delay-600">
<a className="text-sm text-neutral-300 underline underline-offset-4 hover:text-white hover:scale-105 inline-block transition-all duration-200" href="mailto:hello@brind.studio">hello@brind.studio</a>
</p>

<div className="mt-12 h-px bg-white/5 animate-fadeIn animation-delay-600"></div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-500 animate-fadeInUp animation-delay-600">
<p>© <span id="year">2025</span> BRIND</p>
<p className="text-neutral-600">Crafted with passion &amp; precision</p>
</div>
</footer>


    </>
  );
}
