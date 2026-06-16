import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



// Mobile menu toggle
document.getElementById('menuBtn').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('hidden');
});

// Scroll reveal animations
function reveal() {
  const reveals = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-blur');
  
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;
    
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('revealed');
    }
  }
}

window.addEventListener('scroll', reveal);
reveal(); // Check on load

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Close mobile menu if open
      document.getElementById('mobileMenu').classList.add('hidden');
    }
  });
});

// Add scroll effect to navigation
let lastScrollTop = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    nav.style.transform = 'translateY(-100%)';
  } else {
    nav.style.transform = 'translateY(0)';
  }
  
  lastScrollTop = scrollTop <=
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="hQmuxsIsbhqg99eGrTZM"></div>
</div>

<nav className="glassmorphism fixed top-0 left-0 right-0 z-50 transition-transform duration-300" style={{transform: 'translateY(-100%)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="scroll-reveal flex items-center space-x-3 revealed">
<iconify-icon className="text-pink-500" height="28" icon="solar:stars-linear" width="28"></iconify-icon>
<span className="text-lg font-normal text-white tracking-tight">Alexine Mudawar</span>
</div>
<div className="scroll-reveal stagger-1 hidden md:flex items-center space-x-8 revealed">
<a className="text-sm font-light text-gray-400 hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="text-sm font-light text-gray-400 hover:text-white transition-colors" href="#solution">The Solution</a>
<a className="text-sm font-light text-gray-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm font-light text-gray-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-light text-gray-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="scroll-reveal stagger-2 flex items-center space-x-4 revealed">
<a className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-4 py-2 text-white/90 tracking-tight font-medium transition-all duration-500 hover:-translate-y-[1px] hover:text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-[0_0_15px_rgba(236,72,153,0.3)]" href="#contact">
          Level Up My Career
        </a>
<button className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" id="menuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10 bg-black/95 backdrop-blur-xl" id="mobileMenu">
<div className="px-4 py-6 space-y-4">
<a className="block text-base font-light text-gray-400 hover:text-white" href="#problem">The Problem</a>
<a className="block text-base font-light text-gray-400 hover:text-white" href="#solution">The Solution</a>
<a className="block text-base font-light text-gray-400 hover:text-white" href="#process">Process</a>
<a className="block text-base font-light text-gray-400 hover:text-white" href="#about">About</a>
<a className="block text-base font-light text-gray-400 hover:text-white" href="#faq">FAQ</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">

<div className="hero-glow-layer"></div>
<div className="hero-flow-lines"></div>
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl floating"></div>
<div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl floating" style={{animationDelay: '-2s'}}></div>
<div className="absolute top-1/2 left-1/3 w-24 h-24 bg-fuchsia-500/10 rounded-full blur-2xl floating" style={{animationDelay: '-4s'}}></div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-12 relative z-10">
<div className="text-center">
<div className="scroll-reveal inline-flex glow-pink bg-pink-500/5 border-pink-500/20 border rounded-full mb-8 px-4 py-1.5 backdrop-blur-md space-x-2 items-center revealed">
<div className="flex w-5 h-5 pulse-glow bg-pink-500/20 rounded-full items-center justify-center">
<iconify-icon className="text-pink-400" height="14" icon="solar:star-fall-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-normal text-pink-200">Empowering Women in Sales</span>
</div>
<h1 className="scroll-reveal stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1] mb-6 revealed">
        You’re Not Stuck.<br/>
<span className="inline-block font-normal bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent pb-2">You’re Undersupported</span>
</h1>
<p className="scroll-reveal stagger-2 md:text-xl leading-relaxed revealed text-lg font-light text-gray-300 max-w-2xl mr-auto mb-10 ml-auto">Most women in sales don’t lack ability they lack the right environment, guidance, and support. Alexine Mudawar helps change that.</p>

<div className="scroll-reveal stagger-3 max-w-3xl mx-auto mb-10 revealed">
<div className="relative bg-zinc-900/60 border border-white/10 p-2 rounded-2xl backdrop-blur-xl shadow-2xl">
<div className="aspect-video bg-black/80 rounded-xl flex items-center justify-center border border-white/5 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=1600')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
<div className="z-10 flex flex-col items-center">
<div className="w-16 h-16 bg-pink-500/90 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-pink-500 transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.4)]">
<iconify-icon className="text-white ml-1" height="28" icon="solar:play-bold" width="28"></iconify-icon>
</div>
<span className="text-xs font-normal tracking-widest text-white/70 uppercase">Video Placeholder</span>
</div>
</div>
</div>
<p className="text-sm font-light text-gray-400 mt-4">Watch: Why Women in Sales Struggle to Break Through</p>
</div>

<div className="scroll-reveal stagger-4 max-w-2xl mx-auto text-left mb-12 revealed">
<p className="text-base font-light text-gray-300 mb-6">If your sales career isn’t progressing the way you want, the issue isn’t effort. <span className="text-white font-normal">It’s support.</span></p>
<p className="text-base font-light text-gray-300 mb-4">Many women in sales:</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start text-gray-300 font-light text-base">
<iconify-icon className="text-pink-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
            Feel isolated in their role
          </li>
<li className="flex items-start text-gray-300 font-light text-base">
<iconify-icon className="text-pink-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
            Lack mentorship and guidance
          </li>
<li className="flex items-start text-gray-300 font-light text-base">
<iconify-icon className="text-pink-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
            Struggle to navigate leadership environments
          </li>
<li className="flex items-start text-gray-300 font-light text-base">
<iconify-icon className="text-pink-400 mr-3 mt-0.5 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
            Don’t have access to the right development
          </li>
</ul>
<div className="p-6 bg-pink-500/5 border border-pink-500/10 rounded-2xl">
<p className="text-sm font-light text-gray-300 mb-4">In this video, Alexine breaks down:</p>
<ul className="space-y-2">
<li className="flex items-center text-gray-300 font-light text-sm">
<div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></div>
              Why many women feel stuck in sales
            </li>
<li className="flex items-center text-gray-300 font-light text-sm">
<div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></div>
              What support actually looks like
            </li>
<li className="flex items-center text-gray-300 font-light text-sm">
<div className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></div>
              How to create real career growth
            </li>
</ul>
</div>
</div>
<div className="scroll-reveal stagger-5 flex justify-center revealed">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(236,72,153,0.3)] gap-2" href="#contact">
<span>Level Up My Career</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-sm font-light tracking-wide text-gray-400 mb-8 uppercase">Women in sales growing their careers</p>
<div className="w-full max-w-4xl mx-auto h-24 border border-dashed border-white/10 rounded-xl flex items-center justify-center bg-black/30 backdrop-blur-sm group">
<span className="text-gray-500 font-light tracking-widest text-xs uppercase group-hover:text-pink-400 transition-colors">Image Placeholder (Logos/Faces)</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow-pink bg-pink-500/5 border-pink-500/20 border rounded-full mb-8 px-4 py-1.5 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-pink-400" height="16" icon="solar:target-linear" width="16"></iconify-icon>
<span className="text-sm font-normal text-pink-200">The Core Issue</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Why Many Women in Sales<br/>
<span className="inline-block font-normal bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent pb-1">Don’t Progress</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="scroll-reveal stagger-1 card-hover bg-zinc-900/80 border border-white/5 rounded-3xl p-8 revealed">
<div className="flex w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-pink-400" height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Lack of support systems</h3>
<p className="text-gray-400 font-light leading-relaxed">Growth happens without guidance. Without a network to lean on, navigating challenges becomes an isolated struggle.</p>
</div>
<div className="scroll-reveal stagger-2 card-hover bg-zinc-900/80 border border-white/5 rounded-3xl p-8 revealed">
<div className="flex w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-purple-400" height="24" icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Limited mentorship</h3>
<p className="text-gray-400 font-light leading-relaxed">Few role models or leaders to learn from. It's difficult to picture your path to the top when no one there looks like you.</p>
</div>
<div className="scroll-reveal stagger-3 card-hover bg-zinc-900/80 border border-white/5 rounded-3xl p-8 revealed">
<div className="flex w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-pink-400" height="24" icon="solar:map-arrow-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Unclear career path</h3>
<p className="text-gray-400 font-light leading-relaxed">Progression feels uncertain. Without a structured framework, knowing the exact steps to promotion remains a guessing game.</p>
</div>
<div className="scroll-reveal stagger-4 card-hover bg-zinc-900/80 border border-white/5 rounded-3xl p-8 revealed">
<div className="flex w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl items-center justify-center mb-6">
<iconify-icon className="text-purple-400" height="24" icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-3 tracking-tight">Underdeveloped confidence</h3>
<p className="text-gray-400 font-light leading-relaxed">Potential isn’t fully realized. The constant friction of an unsupportive environment gradually wears down self-belief.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="scroll-reveal-scale bg-zinc-900/50 border border-pink-500/20 rounded-[2rem] p-10 md:p-16 backdrop-blur-xl shadow-[0_0_50px_rgba(236,72,153,0.05)] revealed">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8">
        The Problem Isn’t Capability.<br/>
<span className="font-normal bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">It’s Environment.</span>
</h2>
<div className="space-y-4 mb-10">
<p className="text-lg md:text-xl font-light text-gray-300">More effort won’t fix this.</p>
<p className="text-lg md:text-xl font-light text-gray-300">More pressure won’t fix this.</p>
</div>
<div className="inline-block text-left bg-black/40 border border-white/10 rounded-2xl p-8">
<p className="text-white font-normal mb-6 text-lg">Growth happens when:</p>
<ul className="space-y-4">
<li className="flex items-center text-gray-300 font-light">
<iconify-icon className="text-pink-400 mr-4 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
            Support is consistent
          </li>
<li className="flex items-center text-gray-300 font-light">
<iconify-icon className="text-pink-400 mr-4 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
            Development is intentional
          </li>
<li className="flex items-center text-gray-300 font-light">
<iconify-icon className="text-pink-400 mr-4 shrink-0" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
            Environment enables success
          </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="solution">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="scroll-reveal inline-flex glow-purple bg-purple-500/5 border-purple-500/20 border rounded-full mb-8 px-4 py-1.5 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-purple-400" height="16" icon="solar:lightbulb-bolt-linear" width="16"></iconify-icon>
<span className="text-sm font-normal text-purple-200">The Mechanism</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-6 revealed">
        Sales Growth Through<br/>
<span className="inline-block font-normal bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-1">Community &amp; Development</span>
</h2>
<p className="scroll-reveal stagger-2 max-w-2xl mx-auto text-lg font-light text-gray-300 leading-relaxed revealed">
        Top performers don’t grow alone. They grow through structured environments designed to amplify their natural abilities.
      </p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
<div className="scroll-reveal stagger-1 bg-black/40 rounded-2xl p-8 border border-white/5 text-center revealed">
<div className="w-16 h-16 mx-auto bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-pink-400" height="28" icon="solar:hand-heart-linear" width="28"></iconify-icon>
</div>
<h4 className="text-white font-normal text-lg mb-2">Support</h4>
<p className="text-sm font-light text-gray-400">A community that understands your challenges and backs your ambition.</p>
</div>
<div className="scroll-reveal stagger-2 bg-black/40 rounded-2xl p-8 border border-white/5 text-center revealed">
<div className="w-16 h-16 mx-auto bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-purple-400" height="28" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h4 className="text-white font-normal text-lg mb-2">Mentorship</h4>
<p className="text-sm font-light text-gray-400">Guidance from those who have navigated the path before you.</p>
</div>
<div className="scroll-reveal stagger-3 bg-black/40 rounded-2xl p-8 border border-white/5 text-center revealed">
<div className="w-16 h-16 mx-auto bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-pink-400" height="28" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h4 className="text-white font-normal text-lg mb-2">Structured Development</h4>
<p className="text-sm font-light text-gray-400">Frameworks and training to systematically build your skills.</p>
</div>
</div>
<div className="mt-16 text-center scroll-reveal stagger-4 revealed">
<div className="inline-flex items-center px-6 py-3 rounded-full bg-zinc-900 border border-white/10">
<span className="text-gray-400 font-light">This is what turns:</span>
<span className="mx-3 text-white font-medium">Potential</span>
<iconify-icon className="text-pink-500" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
<span className="mx-3 text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text font-medium">Progression</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-black">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="scroll-reveal-blur bg-zinc-900/50 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-md revealed">
<div className="aspect-[21/9] w-full bg-black/80 rounded-2xl border border-dashed border-white/20 flex flex-col items-center justify-center mb-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-transparent opacity-50"></div>
<iconify-icon className="text-gray-600 mb-3" height="48" icon="solar:gallery-wide-linear" width="48"></iconify-icon>
<span className="text-xs font-light tracking-widest text-gray-500 uppercase">Image Placeholder</span>
<p className="text-sm font-light text-gray-400 mt-2">Women building successful sales careers</p>
</div>
<div className="text-center max-w-2xl mx-auto">
<p className="text-xl font-light text-gray-200 leading-relaxed">
          "Women in Sales helps professionals develop skills, confidence, and career direction in an environment built for their success."
        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden" id="process">
<div className="absolute right-0 top-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]"></div>
<div className="absolute left-0 bottom-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-20">
<div className="scroll-reveal inline-flex glow-pink bg-pink-500/5 border-pink-500/20 border rounded-full mb-8 px-4 py-1.5 backdrop-blur-sm space-x-2 items-center revealed">
<iconify-icon className="text-pink-400" height="16" icon="solar:route-linear" width="16"></iconify-icon>
<span className="text-sm font-normal text-pink-200">The Path Forward</span>
</div>
<h2 className="scroll-reveal stagger-1 text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-white mb-8 revealed">
        How Alexine<br/>
<span className="inline-block font-normal bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent pb-1">Supports Growth</span>
</h2>
</div>
<div className="max-w-4xl mx-auto mb-16">
<div className="grid md:grid-cols-3 gap-8">
<div className="scroll-reveal stagger-1 text-center relative revealed">
<div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-pink-500/30 to-transparent"></div>
<div className="w-16 h-16 flex bg-zinc-900 border border-white/10 rounded-full mx-auto mb-6 shadow-lg backdrop-blur-xl items-center justify-center relative z-10">
<span className="text-2xl font-light text-pink-400">1</span>
</div>
<h4 className="text-white font-normal text-lg mb-3">Identify current challenges</h4>
<p className="text-gray-400 font-light text-sm">Pinpoint the specific roadblocks holding back your progression.</p>
</div>
<div className="scroll-reveal stagger-2 text-center relative revealed">
<div className="hidden md:block absolute top-8 left-[60%] w-full h-[1px] bg-gradient-to-r from-purple-500/30 to-transparent"></div>
<div className="w-16 h-16 mx-auto mb-6 shadow-lg flex items-center justify-center bg-zinc-900 border border-white/10 rounded-full relative z-10">
<span className="text-2xl font-light text-purple-400">2</span>
</div>
<h4 className="text-white font-normal text-lg mb-3">Provide structured development</h4>
<p className="text-gray-400 font-light text-sm">Follow a proven framework designed for modern sales environments.</p>
</div>
<div className="scroll-reveal stagger-3 text-center relative revealed">
<div className="w-16 h-16 mx-auto mb-6 shadow-lg flex items-center justify-center bg-zinc-900 border border-white/10 rounded-full relative z-10">
<span className="text-2xl font-light text-pink-400">3</span>
</div>
<h4 className="text-white font-normal text-lg mb-3">Build confidence &amp; performance</h4>
<p className="text-gray-400 font-light text-sm">Execute with assurance and achieve consistent, measurable growth.</p>
</div>
</div>
</div>
<div className="text-center scroll-reveal stagger-4 revealed">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300 gap-2 group" href="#contact">
<span>Grow My Career</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-black">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="scroll-reveal bg-zinc-900/40 border border-white/5 rounded-[2rem] p-10 md:p-16 revealed">
<div className="text-center mb-12">
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-white">What's Included</h3>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="bg-black/40 border border-white/5 rounded-xl p-5 flex items-center group hover:border-pink-500/30 transition-colors">
<iconify-icon className="text-pink-400 mr-4" height="24" icon="solar:presentation-graph-linear" width="24"></iconify-icon>
<span className="text-gray-200 font-light text-sm">Sales Training Programs</span>
</div>
<div className="bg-black/40 border border-white/5 rounded-xl p-5 flex items-center group hover:border-purple-500/30 transition-colors">
<iconify-icon className="text-purple-400 mr-4" height="24" icon="solar:route-linear" width="24"></iconify-icon>
<span className="text-gray-200 font-light text-sm">Career Development Support</span>
</div>
<div className="bg-black/40 border border-white/5 rounded-xl p-5 flex items-center group hover:border-pink-500/30 transition-colors">
<iconify-icon className="text-pink-400 mr-4" height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
<span className="text-gray-200 font-light text-sm">Mentorship Opportunities</span>
</div>
<div className="bg-black/40 border border-white/5 rounded-xl p-5 flex items-center group hover:border-purple-500/30 transition-colors">
<iconify-icon className="text-purple-400 mr-4" height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
<span className="text-gray-200 font-light text-sm">Community Access</span>
</div>
<div className="bg-black/40 border border-white/5 rounded-xl p-5 flex items-center group hover:border-pink-500/30 transition-colors sm:col-span-2 lg:col-span-1">
<iconify-icon className="text-pink-400 mr-4" height="24" icon="solar:crown-star-linear" width="24"></iconify-icon>
<span className="text-gray-200 font-light text-sm">Leadership Development</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="scroll-reveal-left revealed">
<div className="aspect-[4/5] w-full bg-zinc-900 border border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent opacity-50"></div>
<iconify-icon className="text-gray-600 mb-4" height="64" icon="solar:user-circle-linear" width="64"></iconify-icon>
<span className="text-xs font-light tracking-widest text-gray-500 uppercase">Image Placeholder</span>
<span className="text-sm font-light text-gray-400 mt-2">Alexine Mudawar</span>
</div>
</div>
<div className="scroll-reveal-right revealed space-y-8">
<div>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-2">
            Hi, I’m <span className="font-normal text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">Alexine Mudawar.</span>
</h2>
</div>
<div className="space-y-6 text-lg font-light text-gray-300 leading-relaxed">
<p>
            I work with women in sales who want to grow their careers but feel unsupported.
          </p>
<p>
            The issue isn’t ability — it’s access to the right environment.
          </p>
<p>
            My focus is helping women build confidence, skills, and long-term success through proven frameworks and an empowering community.
          </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white border border-pink-500/30 rounded-xl hover:bg-pink-500/10 transition-colors gap-2" href="#contact">
<span>Learn More About the Community</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">Frequently Asked Questions</h2>
<p className="text-gray-400 font-light">Everything you need to know about the program.</p>
</div>
<div className="space-y-4">

<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors revealed">
<h4 className="text-lg font-normal text-white mb-3 tracking-tight">Who is this for?</h4>
<p className="text-gray-400 font-light text-sm leading-relaxed">Women in sales at any stage of their career looking for growth and support.</p>
</div>

<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors revealed">
<h4 className="text-lg font-normal text-white mb-3 tracking-tight">Is this training or community?</h4>
<p className="text-gray-400 font-light text-sm leading-relaxed">Both — it is heavily focused on actionable growth combined with a supportive community.</p>
</div>

<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors revealed">
<h4 className="text-lg font-normal text-white mb-3 tracking-tight">Does this help experienced professionals?</h4>
<p className="text-gray-400 font-light text-sm leading-relaxed">Yes, especially those looking to progress into leadership or break through career plateaus.</p>
</div>

<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors revealed">
<h4 className="text-lg font-normal text-white mb-3 tracking-tight">What makes this different?</h4>
<p className="text-gray-400 font-light text-sm leading-relaxed">Our uncompromising focus on holistic support, structured development, and an empowering community designed specifically for women.</p>
</div>

<div className="scroll-reveal p-6 bg-zinc-900/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors revealed">
<h4 className="text-lg font-normal text-white mb-3 tracking-tight">How do we start?</h4>
<p className="text-gray-400 font-light text-sm leading-relaxed">The first step is simple: book a call below to discuss your current situation and goals.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6 revealed">
      Build the Career<br/>
<span className="inline-block font-normal bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent pb-2">You Want</span>
</h2>
<p className="scroll-reveal stagger-1 max-w-2xl mx-auto text-lg md:text-xl font-light text-gray-300 leading-relaxed mb-12 revealed">
      Book a call to explore how you can grow in sales with the right support.
    </p>
<div className="scroll-reveal stagger-2 max-w-3xl mx-auto mb-12 revealed">
<div className="w-full h-[500px] bg-zinc-900/50 border border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center backdrop-blur-sm group">
<iconify-icon className="text-gray-600 mb-4 group-hover:text-pink-400 transition-colors" height="48" icon="solar:calendar-linear" width="48"></iconify-icon>
<span className="text-gray-500 font-light tracking-widest text-sm uppercase group-hover:text-gray-300 transition-colors">Calendly Placeholder</span>
</div>
</div>
<div className="scroll-reveal stagger-3 revealed">
<button className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(236,72,153,0.3)] gap-2">
<span>Book My Call</span>
<iconify-icon height="24" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-2">
<div className="flex items-center space-x-3 mb-4">
<iconify-icon className="text-pink-500" height="28" icon="solar:stars-linear" width="28"></iconify-icon>
<span className="text-xl font-normal text-white tracking-tight">Alexine Mudawar</span>
</div>
<p className="text-gray-400 font-light leading-relaxed max-w-md text-sm">
          Empowering women in sales to build confidence, skills, and long-term career success through community and structured development.
        </p>
</div>
<div>
<h4 className="text-white font-normal mb-4 text-sm">Program</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#problem">The Problem</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#solution">The Solution</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#process">Process</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-normal mb-4 text-sm">Connect</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="text-gray-400 hover:text-white transition-colors" href="#about">About Alexine</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#faq">FAQ</a></li>
<li><a className="text-gray-400 hover:text-white transition-colors" href="#contact">Book a Call</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-500 font-light text-xs">
        © 2024 Women in Sales. All rights reserved.
      </p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-500 hover:text-white transition-colors font-light text-xs" href="#">Privacy Policy</a>
<a className="text-gray-500 hover:text-white transition-colors font-light text-xs" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
