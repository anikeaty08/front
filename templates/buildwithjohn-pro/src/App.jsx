import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'blur-in': 'blurIn 0.8s ease-out forwards',
'scale-in': 'scaleIn 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
'slide-out-left': 'slideOutLeft 0.8s ease-out forwards',
'marquee': 'marquee 25s linear infinite',
'marquee-reverse': 'marquee-reverse 25s linear infinite',
'typing': 'typing 4s steps(40, end) infinite',
'blink': 'blink 1s infinite'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(24px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
blurIn: {
'0%': { opacity: '0', filter: 'blur(8px)' },
'100%': { opacity: '1', filter: 'blur(0px)' }
},
scaleIn: {
'0%': { opacity: '0', transform: 'scale(0.95)' },
'100%': { opacity: '1', transform: 'scale(1)' }
},
float: {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-8px)' }
},
pulseGlow: {
'0%, 100%': { boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)' },
'50%': { boxShadow: '0 0 40px rgba(34, 197, 94, 0.6), 0 0 80px rgba(34, 197, 94, 0.2)' }
},
slideInLeft: {
'0%': { opacity: '0', transform: 'translateX(-100%)' },
'100%': { opacity: '1', transform: 'translateX(0)' }
},
slideOutLeft: {
'0%': { opacity: '1', transform: 'translateX(0)' },
'100%': { opacity: '0', transform: 'translateX(-100%)' }
},
letterReveal: {
'0%': { opacity: '0', transform: 'translateY(24px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' }
},
'marquee-reverse': {
'0%': { transform: 'translateX(-100%)' },
'100%': { transform: 'translateX(0%)' }
},
typing: {
'0%': { width: '0' },
'100%': { width: '100%' }
},
blink: {
'0%, 50%': { opacity: '1' },
'51%, 100%': { opacity: '0' }
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Initialize Lucide icons
      lucide.createIcons();
      
      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      
      if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
          mobileNav.classList.toggle('hidden');
        });
      }

      // Go to Top button functionality
      const goToTopBtn = document.getElementById('goToTop');
      const heroSection = document.getElementById('heroSection');
      
      if (goToTopBtn && heroSection) {
        goToTopBtn.addEventListener('click', (e) => {
          e.preventDefault();
          heroSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      }

      // Letter-by-letter animation for headline
      function animateHeadlineLetters() {
        const headline = document.getElementById('heroHeadline');
        if (!headline) return;

        const text = headline.textContent;
        headline.innerHTML = '';

        // Split text into letters and spaces
        const letters = text.split('').map((char, index) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.classList.add('letter-animated');
          
          if (char === ' ') {
            span.style.marginRight = '0.5rem';
          }

          // Add staggered delay
          setTimeout(() => {
            span.classList.add('animate');
          }, 1000 + (index * 50)); // Start after 1s with 50ms stagger

          return span;
        });

        letters.forEach(letter => headline.appendChild(letter));
      }

      // Typing animation for the code container
      function startCodeTypingAnimation() {
        const codeContainer = document.getElementById('codeContainer');
        if (!codeContainer) return;

        const codeLines = [
          { text: '// Figma Design System', className: 'text-sm text-gray-400 font-geist-mono mb-2' },
          { 
            text: '', 
            className: 'text-sm leading-relaxed font-geist-mono', 
            html: '<span class="text-blue-400">const</span> <span class="text-yellow-300">components</span> <span class="text-white">= {</span>'
          },
          { text: '  button: "primary-cta",', className: 'text-sm leading-relaxed font-geist-mono ml-4 text-green-400' },
          { text: '  card: "glass-container",', className: 'text-sm leading-relaxed font-geist-mono ml-4 text-green-400' },
          { text: '  typography: "system-fonts"', className: 'text-sm leading-relaxed font-geist-mono ml-4 text-green-400' },
          { text: '};', className: 'text-sm leading-relaxed font-geist-mono text-white' },
          { text: '// Interactive prototypes', className: 'text-sm leading-relaxed font-geist-mono mt-2 text-gray-500' },
          { 
            text: '', 
            className: 'text-sm leading-relaxed font-geist-mono', 
            html: '<span class="text-blue-400">function</span> <span class="text-yellow-300">createPrototype()</span> <span class="text-white">{</span>'
          },
          { text: '  return userTesting;', className: 'text-sm leading-relaxed font-geist-mono ml-4' },
          { text: '}', className: 'text-sm leading-relaxed font-geist-mono text-white' }
        ];

        let currentLine = 0;
        const typingSpeed = 80; // milliseconds per character
        const lineDelay = 400; // delay between lines

        function typeLine() {
          if (currentLine >= codeLines.length) return;

          const line = codeLines[currentLine];
          const lineElement = document.createElement('div');
          lineElement.className = line.className;
          
          if (line.html) {
            lineElement.innerHTML = line.html;
            codeContainer.appendChild(lineElement);
            currentLine++;
            setTimeout(typeLine, lineDelay);
          } else {
            lineElement.classList.add('typing-line');
            codeContainer.appendChild(lineElement);

            let charIndex = 0;
            function typeChar() {
              if (charIndex < line.text.length) {
                lineElement.textContent = line.text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeChar, typingSpeed);
              } else {
                lineElement.classList.remove('typing-line');
                lineElement.classList.add('typed');
                currentLine++;
                setTimeout(typeLine, lineDelay);
              }
            }

            // Start typing immediately
            lineElement.style.opacity = '1';
            lineElement.style.borderRight = '2px solid #10B981';
            typeChar();
          }
        }

        // Start the typing animation after a delay
        setTimeout(typeLine, 1000);
      }

      // Intersection Observer for code animation
      function setupCodeAnimationObserver() {
        const codeContainer = document.getElementById('codeContainer');
        if (!codeContainer) return;

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.children.length === 0) {
              startCodeTypingAnimation();
            }
          });
        }, {
          threshold: 0.3,
          rootMargin: '0px'
        });

        observer.observe(codeContainer);
      }

      // Enhanced scroll effects for status indicator (horizontal positioning)
      const statusIndicator = document.getElementById('statusIndicator');
      let lastScrollY = window.scrollY;
      let ticking = false;
      
      function updateStatusIndicator() {
        const scrollY = window.scrollY;
        const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
        const scrollProgress = Math.min(scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);
        
        // Show the indicator after initial animation
        setTimeout(() => {
          statusIndicator.style.opacity = '1';
        }, 1800);
        
        // Dynamic positioning and effects based on scroll (horizontal layout)
        if (scrollY > 100) {
          const translateY = -scrollY * 0.1; // Parallax effect
          const scale = Math.max(0.9, 1 - scrollProgress * 0.1); // Subtle scale
          
          statusIndicator.style.transform = `translateY(calc(-50% + ${translateY}px)) scale(${scale})`;
          
          // Add scroll-based glow intensity
          const glowIntensity = Math.sin(scrollProgress * Math.PI) * 0.3;
          statusIndicator.style.filter = `drop-shadow(0 0 ${20 + glowIntensity * 20}px rgba(34, 197, 94, ${0.3 + glowIntensity}))`;
        } else {
          statusIndicator.style.transform = 'translateY(-50%) scale(1)';
          statusIndicator.style.filter = 'drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))';
        }
        
        lastScrollY = scrollY;
        ticking = false;
      }
      
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateStatusIndicator);
          ticking = true;
        }
      }
      
      window.addEventListener('scroll', requestTick, { passive: true });

      // Cursor invert effect for hero section
      const heroSectionEl = document.getElementById('heroSection');
      const body = document.body;
      const maskElement = heroSectionEl.querySelector('.cursor-invert-mask::before');
      let isInHero = false;

      if (heroSectionEl) {
        heroSectionEl.addEventListener('mouseenter', (e) => {
          isInHero = true;
          body.classList.add('cursor-invert-active');
          body.style.cursor = 'none';
        });

        heroSectionEl.addEventListener('mouseleave', (e) => {
          isInHero = false;
          body.classList.remove('cursor-invert-active');
          body.style.cursor = 'auto';
        });

        heroSectionEl.addEventListener('mousemove', (e) => {
          if (!isInHero) return;
          
          const x = e.clientX;
          const y = e.clientY;
          
          // Update the CSS custom property for cursor position
          document.documentElement.style.setProperty('--cursor-x', x + 'px');
          document.documentElement.style.setProperty('--cursor-y', y + 'px');
          
          // Update the pseudo-element position via CSS variable
          const maskElements = document.querySelectorAll('.cursor-invert-mask');
          maskElements.forEach(mask => {
            mask.style.setProperty('--cursor-x', x + 'px');
            mask.style.setProperty('--cursor-y', y + 'px');
          });
        });
      }

      // Update CSS to use the variables
      const style = document.createElement('style');
      style.textContent = `
        .cursor-invert-mask::before {
          left: var(--cursor-x, 0px);
          top: var(--cursor-y, 0px);
        }
      `;
      document.head.appendChild(style);

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });

      // Add click interaction to status indicator
      if (statusIndicator) {
        statusIndicator.addEventListener('click', () => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      }

      // Trigger animations when page loads
      document.addEventListener('DOMContentLoaded', () => {
        animateHeadlineLetters();
        setupCodeAnimationObserver();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-50" data-alpha-mask="53" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 53%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 53%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="TIWE0oFfvUmetsFoxL6u"></div>

</div></div>

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}></div>
<div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-purple-600/15 blur-3xl opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}></div>
<div className="absolute bottom-0 left-1/2 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}></div>
</div>

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-3 hidden lg:flex opacity-0 animate-slide-up" style={{animationDelay: '2s'}}>
<div className="group">
</div>
</div>

<div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block transition-all duration-700 ease-out opacity-0 rounded-full shadow-2xl backdrop-blur-3xl" style={{animationDelay: '1.8s', filter: 'drop-shadow(rgba(34, 197, 94, 0.3) 0px 0px 20px)', opacity: '1'}}>
<div className="inline-flex gap-3 hover:shadow-green-500/20 transition-all duration-500 group cursor-pointer overflow-hidden bg-black/20 border-white/30 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-2xl backdrop-blur-3xl gap-x-3 gap-y-3 items-center" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)'}}>

<div className="absolute inset-0 opacity-50 bg-gradient-to-br from-white/20 via-transparent to-black/20 rounded-full"></div>
<div className="bg-gradient-to-br from-white/10 to-transparent opacity-30 rounded-full absolute top-[1px] right-[1px] bottom-[1px] left-[1px] shadow backdrop-blur-none"></div>

<div className="relative flex items-center gap-3">

<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-green-400 shadow-lg animate-pulse-glow"></span>
</div>

<span className="bg-clip-text whitespace-nowrap text-sm font-semibold text-transparent tracking-wide font-geist bg-gradient-to-r from-green-400 via-white to-gray-300">
        Available for projects
      </span>

<div className="transform transition-transform duration-300 group-hover:translate-x-1">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(74, 222, 128)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 17l9.2-9.2M17 17V7H7"></path>
</svg>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-8 w-6 h-px bg-gradient-to-l from-white/30 to-transparent transform -translate-y-1/2"></div>
</div>

<header className="fixed z-40 animate-fade-in opacity-0 mt-4 mb-4 top-0 right-0 left-0 backdrop-blur-3xl" style={{animationDelay: '0.2s'}}>
<div className="relative max-w-7xl lg:px-8 ring-1 ring-white/10 bg-white/10 border-white/20 border rounded-2xl mr-auto ml-auto pr-6 pl-6 shadow-lg backdrop-blur-lg">
<div className="flex h-20 items-center justify-between">
<a className="group" href="#">
<div className="flex items-center gap-2">
<div className="group-hover:bg-white/20 transition-colors bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6561608a-823c-49dc-864c-21a6deefdd39_3840w.png)] bg-cover border-0 rounded-none pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<span className="block bg-center text-lg font-semibold tracking-tight font-geist bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6561608a-823c-49dc-864c-21a6deefdd39_320w.png)] bg-cover"></span>
</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 font-geist" href="#work" style={{}}>Work</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 font-geist" href="#about" style={{}}>About</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 font-geist" href="#process" style={{}}>Process</a>
<a className="hover:text-white transition-colors duration-200 text-sm font-medium text-gray-300 font-geist" href="/https://drive.google.com/file/d/1OmtxJAAmvVIFYjWy1MTQG4pyCrC1qSOP/view?usp=drive_link">Resume</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 hover:bg-white transition-all duration-200 hover:scale-105 text-sm font-semibold text-black font-geist bg-white/90 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg backdrop-blur-md" href="#contact">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      Let's connect
    </a>
<button className="md:hidden rounded-xl bg-white/15 border border-white/30 p-2.5 text-white hover:bg-white/20 backdrop-blur-md" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" stroke-line="round" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-b border-white/20 rounded-b-2xl shadow-lg ring-1 ring-white/10" id="mobileNav">
<div className="px-6 py-6 space-y-4">
<a className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist" href="#work" style={{}}>Work</a>
<a className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist" href="#about" style={{}}>About</a>
<a className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist" href="#process" style={{}}>Process</a>
<a className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-colors font-geist" href="#journal" style={{}}>Journal</a>
<div className="pt-4 border-t border-white/20">
<a className="flex items-center justify-center gap-2 rounded-xl bg-white/90 text-black px-6 py-3 text-base font-semibold backdrop-blur-md shadow-lg font-geist" href="#contact" style={{}}>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          Let's connect
        </a>
</div>
</div>
</div>
</div>
</header>

<section className="lg:pt-40 lg:pb-28 overflow-hidden cursor-invert-mask pt-32 pb-20 relative" id="heroSection" style={{-CursorX: '1436px', -CursorY: '321px'}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center">

<div className="flex animate-scale-in opacity-0 mb-8 justify-center" style={{animationDelay: '0.8s'}}>
<div className="relative parallax-scale" data-parallax="scale" data-scale-end="1.2" data-scale-start="1" style={{transform: 'scale(1)'}}>
<div className="max-w-xl relative group overflow-hidden aspect-[3/4] bg-white/10 ring-white/15 ring-1 rounded-2xl backdrop-blur">
<img alt="Essential blazer" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/94d0623f-63c5-4b27-8da9-305434318a61_1600w.png"/>
<div className="max-w-xl relative group overflow-hidden aspect-[3/4] bg-white/10 ring-white/15 ring-1 backdrop-blur rounded-xl text-sm">
<img alt="Essential blazer" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl text-sm" src="https://cdn.midjourney.com/23068c2c-3629-4025-af2a-629137790bb1/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl text-sm"></div>
<div className="absolute bottom-4 left-4 right-4 rounded-xl text-sm">
<h3 className="text-white font-semibold font-geist rounded-xl text-sm">Tailored Blazer</h3>
<p className="text-white/70 font-geist rounded-xl text-sm">From $229</p>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4">
</div>
</div>
</div>
</div>

<div className="opacity-0 animate-slide-up" style={{animationDelay: '1s'}}>
<h1 className="text-5xl font-bold text-white tracking-tight lg:text-7xl xl:text-7xl" id="heroHeadline"><span className="letter-animated">
</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">G</span><span className="letter-animated">o</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">H</span><span className="letter-animated">i</span><span className="letter-animated">g</span><span className="letter-animated">h</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">l</span><span className="letter-animated">e</span><span className="letter-animated">v</span><span className="letter-animated">e</span><span className="letter-animated">l</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">S</span><span className="letter-animated">p</span><span className="letter-animated">e</span><span className="letter-animated">c</span><span className="letter-animated">i</span><span className="letter-animated">a</span><span className="letter-animated">l</span><span className="letter-animated">i</span><span className="letter-animated">s</span><span className="letter-animated">t</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">S</span><span className="letter-animated">p</span><span className="letter-animated">e</span><span className="letter-animated">c</span><span className="letter-animated">i</span><span className="letter-animated">a</span><span className="letter-animated">l</span><span className="letter-animated">i</span><span className="letter-animated">s</span><span className="letter-animated">t</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">&amp;</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">A</span><span className="letter-animated">u</span><span className="letter-animated">t</span><span className="letter-animated">o</span><span className="letter-animated">m</span><span className="letter-animated">a</span><span className="letter-animated">t</span><span className="letter-animated">i</span><span className="letter-animated">o</span><span className="letter-animated">n</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">A</span><span className="letter-animated">r</span><span className="letter-animated">c</span><span className="letter-animated">h</span><span className="letter-animated">i</span><span className="letter-animated">t</span><span className="letter-animated">e</span><span className="letter-animated">c</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated">
</span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span><span className="letter-animated" style={{marginRight: '0.5rem'}}> </span></h1>
</div>
<div className="opacity-0 animate-slide-up" style={{animationDelay: '1.2s'}}>
<p className="lg:text-2xl leading-relaxed text-xl font-light text-gray-400 tracking-tight font-geist max-w-3xl mt-6 mr-auto ml-auto">I help entrepreneurs scale with custom GHL setups, smart automations, and high-converting funnels.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0 mt-10 gap-x-4 gap-y-4 items-center justify-center" style={{animationDelay: '1.4s'}}>
<a className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-geist" href="#work" style={{}}>
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              View my work
              <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur text-white px-8 py-4 text-base font-medium hover:bg-white/15 transition-all duration-300 hover:scale-105 font-geist" href="#about" style={{}}>
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              About me
            </a>
</div>

<div className="grid grid-cols-3 animate-fade-in opacity-0 max-w-lg mt-16 mr-auto ml-auto gap-x-10 gap-y-8" style={{animationDelay: '1.6s'}}>
<div className="text-center">
</div>
<div className="text-center">
</div>
</div>
</div>
</div>
</section>

<section className="border-y animate-fade-in overflow-hidden opacity-0 border-white/10 pt-16 pb-16" style={{animationDelay: '1.8s'}}>
<div className="lg:px-8 max-w-7xl mx-auto px-6">
<p className="text-sm font-medium text-gray-500 font-geist text-center mb-8">TECH STACK TO AMPLIFY OUR SUCCESS</p>

<div className="relative overflow-hidden">
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex gap-16 lg:gap-20 mr-8 ml-8 gap-x-16 gap-y-16 items-center justify-center">
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">ChatGPT</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist" style={{}}>Google Ads</div><div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist" style={{}}>Google Workspace</div>
<div className="text-gray-400 text-lg font-medium tracking-tight hover:text-gray-300 transition-colors font-geist" style={{}}>Notion</div>
<div className="text-gray-400 text-lg font-medium tracking-tight hover:text-gray-300 transition-colors font-geist" style={{}}>Figma</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">Wordpress</div>
</div><div className="flex gap-16 lg:gap-20 mr-8 ml-8 gap-x-16 gap-y-16 items-center justify-center">
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">N8n</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">Go High Level</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">Make.com</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">Notion</div>
<div className="text-gray-400 text-lg font-medium tracking-tight hover:text-gray-300 transition-colors font-geist" style={{}}>Figma</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">Click Up</div>
</div><div className="flex gap-16 lg:gap-20 mr-8 ml-8 gap-x-16 gap-y-16 items-center justify-center">
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist">Canva</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist" style={{}}>Photoshop</div>
<div className="hover:text-gray-300 transition-colors text-lg font-medium text-gray-400 tracking-tight font-geist" style={{}}>Zapier</div>
<div className="text-gray-400 text-lg font-medium tracking-tight hover:text-gray-300 transition-colors font-geist" style={{}}>Notion</div>
<div className="text-gray-400 text-lg font-medium tracking-tight hover:text-gray-300 transition-colors font-geist" style={{}}>Figma</div>
<div className="text-gray-400 text-lg font-medium tracking-tight hover:text-gray-300 transition-colors font-geist" style={{}}>Linear</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="work">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="lg:text-5xl animate-slide-up text-4xl font-light text-white tracking-tight font-geist opacity-0" style={{animationDelay: '2s'}}>
            What I do
          </h2>
<p className="animate-slide-up text-xl text-gray-400 font-geist opacity-0 mt-4" style={{animationDelay: '2.2s'}}>Comprehensive solutions for scaling digital businesses, from backend logic to frontend aesthetics.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 animate-scale-in bg-gradient-to-b from-white/10 to-white/5 opacity-0 border-white/10 border rounded-3xl pt-8 pr-8 pb-10 pl-8" style={{animationDelay: '2.4s'}}>
<svg className="lucide lucide-settings" data-icon-replaced="true" data-icon-set="lucide" data-lucide="settings" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg><h3 className="text-2xl font-light text-white tracking-tight font-geist mb-4">GHL Setup &amp; Operations</h3>
<p className="leading-relaxed text-gray-400 font-geist mb-6">Full account configuration, dashboard customization, and ongoing management tailored to your KPIs.</p>
<ul className="text-sm text-gray-300 space-y-3">
<li className="flex font-geist gap-x-3 gap-y-3 items-center">Funnel and Website development</li><li className="flex font-geist gap-x-3 gap-y-3 items-center">Sub-account setup</li>
<li className="flex gap-3 font-geist gap-x-3 gap-y-3 items-center">Calendar &amp; booking integration</li>
</ul>
</div>

<div className="group hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 animate-scale-in bg-gradient-to-b from-white/10 to-white/5 opacity-0 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8" style={{animationDelay: '2.6s'}}>
<svg className="lucide lucide-audio-waveform" data-icon-replaced="true" data-icon-set="lucide" data-lucide="audio-waveform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"></path></svg><h3 className="text-2xl font-light text-white tracking-tight font-geist mb-4">Marketing Automations</h3>
<p className="leading-relaxed text-gray-400 font-geist mb-6">Seamless integration of email, SMS, and task workflows to nurture leads 24/7 without manual input.</p>
<ul className="space-y-3 text-sm text-gray-300">
<li className="flex gap-3 font-geist gap-x-3 gap-y-3 items-center">Email/SMS Drip Campaigns</li>
<li className="flex gap-3 font-geist gap-x-3 gap-y-3 items-center">Lead Scoring triggers</li>
<li className="flex font-geist gap-x-3 gap-y-3 items-center">Zapier/Make integrations</li>
</ul>
</div>

<div className="group rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-8 hover:from-white/15 hover:to-white/10 transition-all duration-500 hover:scale-105 opacity-0 animate-scale-in" style={{animationDelay: '2.8s'}}>
<svg className="lucide lucide-computer" data-icon-replaced="true" data-icon-set="lucide" data-lucide="computer" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="14" x="5" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 18h2"></path><path d="M12 18h6"></path></svg><h3 className="text-2xl font-light text-white tracking-tight font-geist mb-4">Funnels &amp; Websites</h3>
<p className="leading-relaxed text-gray-400 font-geist mb-6">High-converting landing pages and full websites built on WordPress, GHL, or Framer.</p>
<ul className="space-y-3 text-sm text-gray-300">
<li className="flex gap-3 font-geist gap-x-3 gap-y-3 items-center">Sales Page Design</li>
<li className="flex gap-3 font-geist gap-x-3 gap-y-3 items-center">Membership Areas</li>
<li className="flex gap-3 font-geist gap-x-3 gap-y-3 items-center">Payment Gateway Setup</li>
</ul>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24">
<div className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center justify-between mb-10">
<div className="">
<h2 className="text-3xl lg:text-4xl text-white opacity-0 animate-slide-up font-geist tracking-tight font-light" style={{animationDelay: '3s'}}>Selected Work</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<article className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-scale-in" style={{animationDelay: '3.4s'}}>
<div className="relative aspect-[16/10] overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ee7fd91-bc93-4be3-a890-38a2854fb96e_1600w.png)] bg-contain absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Aurora Financial App" className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ee7fd91-bc93-4be3-a890-38a2854fb96e_1600w.png?w=800&amp;q=80"/><div className="absolute left-2 right-2 bottom-2">
<div className="flex bg-white/10 border-white/10 border rounded-xl mx-2 my-2 pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl items-center justify-between">
<span className="xl:bg-clip-text xl:text-transparent text-sm font-bold font-geist bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/50 via-white/100 to-white/50">Funnels and Website Designs</span>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-scale-in" style={{animationDelay: '3.6s'}}>
<div className="relative aspect-[16/10] overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Nexus Dashboard" className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a413084a-63e4-4068-ad65-e6055a870a3d_1600w.png"/><div className="absolute left-2 right-2 bottom-2">
<div className="flex bg-white/10 border-white/10 border rounded-xl mx-2 my-2 pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl items-center justify-between">
<span className="text-sm font-geist font-bold bg-gradient-to-b from-white/100 to-white/50 xl:bg-clip-text xl:text-transparent">Automations and Integrations</span>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-scale-in" style={{animationDelay: '3.8s'}}>
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Zenith E-commerce" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ee361ca-4978-4130-bab8-b605105c04b4_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute left-2 right-2 bottom-2">
<div className="flex bg-white/10 border-white/10 border rounded-xl mx-2 my-2 pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl items-center justify-between">
<span className="text-sm font-medium text-white font-geist">Graphic Designs</span>
</div>
</div>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] opacity-0 animate-scale-in" style={{animationDelay: '4s'}}>
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Orbit Workspace" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5162c07d-8a65-4a42-9a8c-c48dbea36297_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute left-2 right-2 bottom-2">
<div className="flex bg-white/10 border-white/10 border rounded-xl mx-2 my-2 pt-4 pr-4 pb-4 pl-4 backdrop-blur-xl items-center justify-between">
<span className="text-sm font-medium text-white font-geist">Admin Task</span>
</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="pt-24 pb-24" id="about">
<div className="mx-auto max-w-7xl px-6 lg:px-8">

<div className="relative mb-16 text-center">
<div aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-12 w-[560px] rounded-full bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-2xl"></div>
<h2 className="relative text-4xl lg:text-5xl text-white font-geist tracking-tight font-light" style={{}}>About <span className="text-white/80 font-geist tracking-tight font-light" style={{}}>Me</span></h2>
</div>

<div className="lg:p-12 bg-black/40 border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-xl">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/10 to-transparent"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div className="relative space-y-6">
<div className="rounded-3xl group p-3 cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:bg-zinc-800/60 hover:shadow-xl bg-zinc-900/80 border-zinc-800 border shadow-2xl">
<div className="overflow-hidden rounded-2xl ring-1 ring-white/10">
<img alt="Working outdoors on a laptop" className="lg:h-[480px] transition-transform duration-700 group-hover:scale-105 w-full h-[400px] object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fff5bb3d-190e-4bb8-8a90-06a573d9edb2_1600w.png"/>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-3 shadow-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
<div className="overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Design workspace setup" className="lg:h-36 transition-transform duration-500 group-hover:scale-105 w-full h-28 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd170c81-9c3a-4e6b-a4be-263ba134067f_800w.jpg"/>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-3 shadow-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
<div className="overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Creative tools and materials" className="lg:h-36 transition-transform duration-500 group-hover:scale-105 w-full h-28 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e99a77f2-adb0-4f84-89dc-789c02bffeb2_800w.jpg"/>
</div>
</div>
</div><div className="grid grid-cols-2 gap-6">
<div className="rounded-2xl bg-white/5 border border-white/10 p-3 shadow-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
<div className="overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Design workspace setup" className="lg:h-36 transition-transform duration-500 group-hover:scale-105 w-full h-28 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e4f15ac-8abc-4203-acea-199210feb2f0_800w.jpg"/>
</div>
</div>
<div className="rounded-2xl bg-white/5 border border-white/10 p-3 shadow-lg hover:bg-white/10 transition-all duration-300 group cursor-pointer">
<div className="overflow-hidden rounded-xl ring-1 ring-white/10">
<img alt="Creative tools and materials" className="lg:h-36 transition-transform duration-500 group-hover:scale-105 bg-center w-full h-28 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/531428e1-8196-4a67-91d0-d3026844b79a_800w.jpg"/>
</div>
</div>
</div>
</div>

<div className="relative space-y-8">
<div className="space-y-4">
<h3 className="text-2xl lg:text-3xl text-white font-geist tracking-tight font-light" style={{}}>Curious about me?</h3>
<div className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent"></div>
</div>
<div className="space-y-8">
<div className="rounded-2xl bg-white/10 border border-white/10 p-6 lg:p-8 text-gray-300 text-base lg:text-lg leading-relaxed hover:bg-white/[0.12] transition-colors duration-300">
<p className="font-geist mb-6">I’m a GoHighLevel and automation specialist focused on building systems that help businesses run smoother, convert better, and scale without chaos. With experience across digital marketing, CRM setup, and workflow design, I turn messy processes into clear, automated journeys that save teams time and recover lost revenue.</p>
<p className="font-geist mb-6">My approach blends strategy, operations, and a strong understanding of how real businesses work. From mapping funnels and pipelines to connecting tools with APIs, webhooks, and no-code automations, every build is designed to be practical, maintainable, and easy for teams to use. I work closely with founders, marketers, and sales teams to align tech, messaging, and process with actual business goals.</p>
<p className="font-geist">Beyond individual campaigns, I think in systems—standardizing assets, building reusable automation libraries, and documenting clear workflows so teams can onboard faster and operate with less guesswork. For me, great work means fewer manual tasks, better data visibility, and customer experiences that feel seamless from first click to closed deal.</p>
</div>
<ul className="space-y-4 text-gray-300">
<li className="flex items-start gap-4 group">
<span className="inline-flex items-center justify-center w-10 h-10 bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl flex-shrink-0 group-hover:bg-[#ffffff]/25 transition-colors duration-300">
<svg className="lucide lucide-zap w-5 h-5" data-icon-replaced="true" data-lucide="zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</span>
<div className="flex-1 pt-1">
<span className="text-sm lg:text-base font-medium font-geist" style={{}}>Full‑time freelancer</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<span className="inline-flex items-center justify-center w-10 h-10 bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl flex-shrink-0 group-hover:bg-[#ffffff]/25 transition-colors duration-300">
<svg className="lucide lucide-message-circle w-5 h-5" data-icon-replaced="true" data-lucide="message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</span>
<div className="flex-1 pt-1">
<span className="text-sm lg:text-base font-medium font-geist" style={{}}>Open to exciting projects and creative collaborations</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<span className="inline-flex items-center justify-center w-10 h-10 bg-[#ffffff]/20 border-[#ffffff]/30 border rounded-xl flex-shrink-0 group-hover:bg-[#ffffff]/25 transition-colors duration-300">
<svg className="lucide lucide-smile w-5 h-5" data-icon-replaced="true" data-lucide="smile" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</span>
<div className="flex-1 pt-1">
<span className="text-sm lg:text-base font-medium font-geist" style={{}}>Friendly, approachable, and always eager to connect</span>
</div>
</li>
</ul>
<div className="flex pt-4 justify-start">
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-white/10"></div>
</div>
</div>
</section><section className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d850914-e949-410a-ac08-c604b47ea90f_3840w.jpg)] bg-cover pt-24 pb-24" id="about">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6" i42"="">

<div className="relative mb-12 text-center">
<div aria-hidden="true" className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-2 h-12 w-[560px] rounded-full bg-gradient-to-r from-white/5 via-white/25 to-white/5 blur-2xl"></div>
<h2 className="lg:text-5xl bg-clip-text text-4xl font-light text-transparent tracking-tight font-geist bg-gradient-to-r from-white to-white/50 relative">My <span className="text-white/80 bg-none font-geist tracking-tight font-light" style={{}}>Process</span></h2>
</div>

<div className="grid grid-cols-12 gap-6 bg-neutral-950/90 max-w-7xl border-neutral-800 border rounded-3xl pt-24 pb-24 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] gap-x-6 gap-y-6">
<div className="col-span-12 md:col-span-10 md:col-start-2">
<div className="fade-in-up mb-16 visible">
<p className="text-lg text-neutral-300/90 font-geist max-w-2xl">
        A structured approach to design that ensures every solution is grounded in user needs and business objectives.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="fade-in-up border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md space-y-6">
<div className="flex gap-4 font-poppins gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">
            01</div>
<h3 className="text-2xl font-semibold font-roboto">Discovery &amp; Audit</h3>
</div>
<p className="leading-relaxed text-neutral-300/80 font-geist pl-16">Before anything else, I start with clarity. I review your current tech stack, funnels, CRM, and automations to identify gaps, friction points, and opportunities. This stage ensures we build a system tailored to your goals</p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• Deep dive into your CRM, funnels, and automations</div>
<div className="">• Identify bottlenecks and gaps in your customer journey</div>
<div className="">• Review your tagging system, segmentation, and pipeline stages</div>
<div className="">• Check existing integrations and tech stack</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-1 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-md space-y-6">
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">
            02</div>
<h3 className="text-2xl font-semibold font-roboto">Strategy Blueprint</h3>
</div>
<p className="leading-relaxed text-neutral-300/80 font-geist pl-16">With the insights from the audit, I map out your complete funnel and automation architecture. This includes the customer journey, segmentation plan, follow-up sequences, tracking, and all key touchpoints. You’ll see a simple, easy-to-understand blueprint that shows exactly how everything will work together.</p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• A clear funnel and automation architecture</div>
<div className="">• Customer journey mapping from lead → conversion → retention</div>
<div className="">• Segmentation and follow-up strategy</div>
<div className="">• Trigger points, timing, and logic for automations</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-2 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6 visible">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">
            03</div>
<h3 className="text-2xl font-semibold font-roboto" style={{}}>Ideate &amp; Prototype</h3>
</div>
<p className="leading-relaxed text-neutral-300/80 font-geist pl-16">Once the strategy is approved, I bring everything to life inside GoHighLevel.
This includes setting up:</p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• Funnels &amp; landing pages</div>
<div className="">• Automations &amp; workflows</div>
<div className="">• Pipelines &amp; opportunity stages</div>
<div className="">• Calendars, forms, and triggers</div><div className="">• Tags, custom fields, and segmentation</div><div className="">• Integrations (Stripe, Google, webhooks, APIs, Zapier, etc.)</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-3 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">
            04</div>
<h3 className="text-2xl font-semibold font-roboto">Test &amp; Handover</h3>
</div>
<p className="leading-relaxed text-neutral-300/80 font-geist pl-16">Every part of the system is fully tested—from form submissions to email/SMS logic, pipeline movement, notifications, and payment flows.

After QA is complete, you’ll receive:</p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• Full documentation</div>
<div className="">• Loom video walkthroughs</div>
<div className="">• Optional ongoing support or optimization</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-white/10 border-t pt-24 pb-24 relative" id="contact">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16">
<div className="gap-x-0 gap-y-4">
<h2 className="text-4xl lg:text-5xl text-white mb-6 opacity-0 animate-slide-up font-geist tracking-tight font-light" style={{animationDelay: '5.2s'}}>
              Let's create something amazing together
            </h2>
<p className="animate-slide-up text-xl text-gray-400 font-geist opacity-0 mb-8" style={{animationDelay: '5.4s'}}>Ready to bring your vision to life? I'd love to hear about your project and explore how we can work together.</p>
<div className="flex items-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '5.8s'}}>
<a className="rounded-2xl bg-white/10 border border-white/20 p-3 hover:bg-white/15 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-gray-300" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="hover:bg-white/15 transition-colors bg-white/10 border-white/20 border rounded-2xl pt-3 pr-3 pb-3 pl-3" href="/https://www.facebook.com/PJohnDA/">
<svg className="lucide lucide-facebook" data-icon-replaced="true" data-icon-set="lucide" data-lucide="facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(209, 213, 219)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div className="flex flex-col animate-slide-up sm:flex-row opacity-0 mt-10 mr-10 mb-10 ml-10 relative gap-x-0 gap-y-4" style={{animationDelay: '5.6s'}}>
<a className="inline-flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-base font-semibold text-black font-geist text-center bg-white rounded-full pt-4 pr-8 pb-4 pl-10 absolute top-10 bottom-10 left-20" href="/mailto:buildwithjohn1@gmail.com" style={{maskImage: 'linear-gradient(180deg, transparent, black 50%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 50%, black 100%, transparent)'}}>buildwithjohn1@gmail.com<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in border-white/10 border-t mt-16 pt-8 items-center justify-between" style={{animationDelay: '6.2s'}}>
<div className="flex items-center gap-2">
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6561608a-823c-49dc-864c-21a6deefdd39_320w.png)] bg-cover border-0 rounded-none pt-5 pr-5 pb-5 pl-5">
<span className="block bg-center text-lg font-semibold tracking-tight font-geist bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6561608a-823c-49dc-864c-21a6deefdd39_320w.png)] bg-cover" style={{}}></span>
</div>
<span className="text-sm text-gray-500 font-geist" style={{}}>© 2025 Build With John. All rights reserved.</span>
</div>
<div className="text-sm text-gray-500 font-geist" style={{}}>Designed in Aura, built with love</div>
</div>
</div>

<div className="fixed bottom-8 right-8 z-50 opacity-0 animate-fade-in" style={{animationDelay: '6.4s'}}>
<button aria-label="Go to top" className="group relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-white/10" id="goToTop">
<svg className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19V6m-7 7l7-7 7 7"></path>
</svg>
</button>
</div>
</footer>




    </>
  );
}
