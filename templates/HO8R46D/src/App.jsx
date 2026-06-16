import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener("DOMContentLoaded", function() {
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjusted for nav height
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Fade-in animation on scroll
      const fadeEls = document.querySelectorAll('.fade-in-up');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });
      
      fadeEls.forEach(el => observer.observe(el));
      
      // Parallax sections subtle effect
      const parallaxSections = document.querySelectorAll('.parallax-section');
      
      function updateParallax() {
        parallaxSections.forEach(section => {
          const scrollPosition = window.pageYOffset;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition + window.innerHeight > sectionTop && 
              scrollPosition < sectionTop + sectionHeight) {
            const distance = (scrollPosition - sectionTop) * 0.05;
            section.style.transform = `translateY(${distance}px)`;
          }
        });
      }
      
      window.addEventListener('scroll', updateParallax, { passive: true });
      window.addEventListener('resize', updateParallax);
      updateParallax();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 z-0 opacity-50 pointer-events-none">
<div className="absolute inset-0 bg-noise"></div>
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120vw] h-[70vh] bg-gradient-radial from-cyan-500/20 via-fuchsia-400/10 to-transparent opacity-70 blur-3xl"></div>
<div className="absolute top-1/3 left-1/4 w-[30vw] h-[40vh] bg-gradient-to-br from-violet-600/20 to-transparent rounded-full blur-2xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[30vh] bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
</div>

<nav className="fixed top-0 inset-x-0 flex items-center justify-between px-6 md:px-12 py-6 z-50 backdrop-blur-lg bg-black/20 border-b border-white/5">
<div className="flex items-center space-x-3">
<div className="w-9 h-9 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
<span className="font-bold text-lg tracking-wider">A</span>
</div>
<span className="font-extralight text-xl tracking-widest uppercase">Aura</span>
</div>
<div className="flex items-center space-x-6">
<div className="hidden md:flex space-x-8">
<a className="text-sm font-light text-white/80 hover:text-white transition" href="#intro">About</a>
<a className="text-sm font-light text-white/80 hover:text-white transition" href="#features">Features</a>
<a className="text-sm font-light text-white/80 hover:text-white transition" href="#early-access">Early Access</a>
</div>
<a className="text-sm font-light border border-white/80 rounded-full px-6 py-2 hover:bg-white hover:text-black transition duration-300 ease-in-out" href="#early-access">Sign In</a>
</div>
</nav>

<header className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-16">
<div className="relative z-10 max-w-6xl mx-auto text-center">
<h1 className="font-extralight tracking-widest text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl uppercase bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent mb-8 fade-in-up">
        Immerse<br/>in the AI Era
      </h1>
<p className="text-lg md:text-xl font-light tracking-wide text-cyan-100/90 max-w-2xl mx-auto mb-12 fade-in-up" style={{transitionDelay: '0.2s'}}>
        Aura brings you the stories, streams, and personalities behind AI's most daring ideas. Experience the pulse of innovation—live, interactive, and inspiring.
      </p>
<a className="inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white text-base font-normal tracking-wide px-10 py-4 rounded-full shadow-lg hover:shadow-fuchsia-500/20 hover:scale-[1.03] transition-all duration-300 ease-in-out fade-in-up" href="#" id="early-access" style={{transitionDelay: '0.35s'}}>
        Get Early Access
      </a>
</div>
<div className="flex justify-center mt-24 fade-in-up absolute bottom-8" style={{transitionDelay: '0.5s'}}>
<a className="animate-bounce p-2" href="#intro">
<svg className="w-8 h-8 text-cyan-300/70" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</header>

<section className="relative py-32 flex items-center min-h-[60vh] px-6 parallax-section" id="intro">
<div className="max-w-3xl mx-auto fade-in-up">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
        The World Is Changing
      </h2>
<p className="text-cyan-100/90 text-xl font-light leading-relaxed">
        Artificial Intelligence isn't just a headline—it's a revolution unfolding in real time. <span className="text-fuchsia-400">Aura</span> is your front row seat to the minds, art, and code shaping tomorrow.
      </p>
</div>
</section>

<section className="relative py-32 flex items-center min-h-[60vh] px-6 bg-gradient-to-b from-black via-violet-950/30 to-black parallax-section">
<div className="max-w-3xl mx-auto fade-in-up">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-8 bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
        Discover, Don't Just Watch
      </h2>
<p className="text-cyan-100/90 text-xl font-light leading-relaxed">
        Dive into curated stories, live demos, and behind-the-scenes interviews. Aura brings the creators and explorers of AI into your living room and your imagination.
      </p>
</div>
</section>

<section className="relative py-32 flex items-center min-h-[60vh] px-6 parallax-section">
<div className="max-w-3xl mx-auto fade-in-up">
<h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
        Be Part of the Pulse
      </h2>
<p className="text-cyan-100/90 text-xl font-light leading-relaxed">
        Ask questions, vote on topics, and interact with visionaries. Aura isn't just a window—it's an invitation.<br className="hidden sm:inline"/>
<span className="text-fuchsia-400">Will you watch, or will you shape the future?</span>
</p>
</div>
</section>

<section className="bg-gradient-to-b from-black to-violet-950/50 py-32" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-20 text-center fade-in-up">
<h3 className="text-3xl sm:text-4xl font-light bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-500 bg-clip-text text-transparent mb-4 uppercase tracking-widest">Why Aura?</h3>
<p className="text-cyan-100/90 text-xl font-light max-w-2xl mx-auto">We blend the best of technology, creativity, and community for an AI experience like no other.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
<div className="flex flex-col items-center fade-in-up group" style={{transitionDelay: '0.05s'}}>
<div className="w-20 h-20 bg-gradient-to-br from-fuchsia-400 to-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
</svg>
</div>
<h4 className="font-light uppercase tracking-widest text-xl mb-4 text-white">Live AI Streams</h4>
<p className="text-cyan-100/80 text-center font-light text-base leading-relaxed">Real-time demos, coding, and art from the boldest AI creators. Experience innovation as it happens.</p>
</div>
<div className="flex flex-col items-center fade-in-up group" style={{transitionDelay: '0.15s'}}>
<div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-fuchsia-400 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12l2 2 4-4"></path>
</svg>
</div>
<h4 className="font-light uppercase tracking-widest text-xl mb-4 text-white">Curated Stories</h4>
<p className="text-cyan-100/80 text-center font-light text-base leading-relaxed">Explainers, interviews, and deep dives into the world of AI, crafted to inspire and inform.</p>
</div>
<div className="flex flex-col items-center fade-in-up group" style={{transitionDelay: '0.25s'}}>
<div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
<svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 00-3-3.87"></path>
<path d="M16 3.13a4 4 0 010 7.75"></path>
</svg>
</div>
<h4 className="font-light uppercase tracking-widest text-xl mb-4 text-white">Interactive Community</h4>
<p className="text-cyan-100/80 text-center font-light text-base leading-relaxed">Shape the conversation. Connect, discuss, and imagine together with AI enthusiasts globally.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-br from-black via-violet-950/20 to-black">
<div className="max-w-4xl mx-auto text-center fade-in-up">
<h3 className="text-3xl sm:text-4xl font-light mb-8 bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
        Ready to join the revolution?
      </h3>
<p className="text-xl font-light text-cyan-100/90 mb-10 max-w-2xl mx-auto">
        Be among the first to experience Aura. Early access members get exclusive content and features.
      </p>
<a className="inline-block bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white text-base font-normal tracking-wide px-10 py-4 rounded-full shadow-lg hover:shadow-fuchsia-500/20 hover:scale-[1.03] transition-all duration-300 ease-in-out" href="#">
        Sign Up for Early Access
      </a>
</div>
</section>

<footer className="bg-black/80 border-t border-white/5 py-12 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center mb-10">
<div className="flex items-center space-x-3 mb-6 md:mb-0">
<div className="w-8 h-8 bg-gradient-to-tr from-cyan-400 via-fuchsia-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
<span className="font-bold text-sm tracking-wider">A</span>
</div>
<span className="font-extralight text-lg tracking-widest uppercase">Aura</span>
</div>
<div className="flex space-x-8">
<a className="text-cyan-100/70 hover:text-cyan-100 text-sm font-light transition-colors" href="#">Privacy</a>
<a className="text-cyan-100/70 hover:text-cyan-100 text-sm font-light transition-colors" href="#">Terms</a>
<a className="text-cyan-100/70 hover:text-cyan-100 text-sm font-light transition-colors" href="#">Contact</a>
<a className="text-cyan-100/70 hover:text-cyan-100 text-sm font-light transition-colors" href="#">About</a>
</div>
</div>
<div className="text-cyan-100/50 text-sm font-light text-center md:text-left border-t border-white/5 pt-6">
        © 2024 Aura — All Rights Reserved. Shaping the future of AI storytelling.
      </div>
</div>
</footer>


    </>
  );
}
