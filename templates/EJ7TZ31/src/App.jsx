import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      // Initialize Lucide icons
      lucide.createIcons();

      // Code animation data
      const codeLines = [
        {
          lineNumber: 1,
          content: [
            { text: 'import', class: 'text-purple-400' },
            { text: ' proflow ', class: 'text-white' },
            { text: 'as', class: 'text-purple-400' },
            { text: ' pf', class: 'text-blue-300' }
          ]
        },
        {
          lineNumber: 2,
          content: [
            { text: 'from', class: 'text-purple-400' },
            { text: ' proflow.ai ', class: 'text-white' },
            { text: 'import', class: 'text-purple-400' },
            { text: ' IntelligentProcessor', class: 'text-blue-300' },
            { text: ', AutoScaler', class: 'text-blue-300' }
          ]
        },
        {
          lineNumber: 3,
          content: []
        },
        {
          lineNumber: 4,
          content: [
            { text: '# Advanced workflow with ML-powered decision making', class: 'text-gray-400' }
          ]
        },
        {
          lineNumber: 5,
          content: [
            { text: '@pf.workflow', class: 'text-blue-400' },
            { text: '(', class: 'text-white' },
            { text: '"enterprise-automation-v2"', class: 'text-green-400' },
            { text: ', ', class: 'text-white' },
            { text: 'auto_scale', class: 'text-orange-300' },
            { text: '=', class: 'text-white' },
            { text: 'True', class: 'text-yellow-400' },
            { text: ')', class: 'text-white' }
          ]
        },
        {
          lineNumber: 6,
          content: [
            { text: 'async def', class: 'text-purple-400' },
            { text: ' process_customer_requests', class: 'text-blue-300' },
            { text: '(', class: 'text-white' },
            { text: 'request_data', class: 'text-orange-300' },
            { text: ': RequestPayload', class: 'text-blue-300' },
            { text: '):', class: 'text-white' }
          ]
        },
        {
          lineNumber: 7,
          content: [
            { text: '    processor = IntelligentProcessor(', class: 'text-white' }
          ]
        },
        {
          lineNumber: 8,
          content: [
            { text: '        ', class: 'text-white' },
            { text: 'model', class: 'text-orange-300' },
            { text: '=', class: 'text-white' },
            { text: '"gpt-4-turbo"', class: 'text-green-400' },
            { text: ',', class: 'text-white' }
          ]
        },
        {
          lineNumber: 9,
          content: [
            { text: '        ', class: 'text-white' },
            { text: 'confidence_threshold', class: 'text-orange-300' },
            { text: '=', class: 'text-white' },
            { text: '0.95', class: 'text-yellow-400' }
          ]
        },
        {
          lineNumber: 10,
          content: [
            { text: '    )', class: 'text-white' }
          ]
        },
        {
          lineNumber: 11,
          content: []
        },
        {
          lineNumber: 12,
          content: [
            { text: '    insights = ', class: 'text-white' },
            { text: 'await', class: 'text-purple-400' },
            { text: ' processor.analyze_with_context(', class: 'text-white' }
          ]
        },
        {
          lineNumber: 13,
          content: [
            { text: '        data=request_data,', class: 'text-white' }
          ]
        },
        {
          lineNumber: 14,
          content: [
            { text: '        context=pf.get_historical_patterns()', class: 'text-white' }
          ]
        },
        {
          lineNumber: 15,
          content: [
            { text: '    )', class: 'text-white' }
          ]
        },
        {
          lineNumber: 16,
          content: []
        },
        {
          lineNumber: 17,
          content: [
            { text: '    ', class: 'text-white' },
            { text: 'if', class: 'text-purple-400' },
            { text: ' insights.confidence > processor.threshold:', class: 'text-white' }
          ]
        },
        {
          lineNumber: 18,
          content: [
            { text: '        ', class: 'text-white' },
            { text: 'return', class: 'text-purple-400' },
            { text: ' ', class: 'text-white' },
            { text: 'await', class: 'text-purple-400' },
            { text: ' processor.auto_resolve(insights)', class: 'text-white' }
          ]
        },
        {
          lineNumber: 19,
          content: [
            { text: '    ', class: 'text-white' },
            { text: 'else', class: 'text-purple-400' },
            { text: ':', class: 'text-white' }
          ]
        },
        {
          lineNumber: 20,
          content: [
            { text: '        ', class: 'text-white' },
            { text: 'await', class: 'text-purple-400' },
            { text: ' pf.escalate_to_human(insights, priority=', class: 'text-white' },
            { text: '"high"', class: 'text-green-400' },
            { text: ')', class: 'text-white' }
          ]
        }
      ];

      let isTyping = false;
      let typingSpeed = 50; // milliseconds per character
      let lineDelay = 200; // delay between lines

      // Code typing animation function
      async function typeCode() {
        if (isTyping) return;
        isTyping = true;

        const codeContent = document.getElementById('code-content');
        const typingStatus = document.getElementById('typing-status');
        const footerStatus = document.getElementById('footer-status');

        codeContent.innerHTML = '';
        typingStatus.textContent = 'Typing...';
        footerStatus.textContent = 'Generating code...';

        for (let i = 0; i < codeLines.length; i++) {
          const line = codeLines[i];
          
          // Create line container
          const lineDiv = document.createElement('div');
          lineDiv.className = 'flex code-line group hover:bg-white/5 rounded px-2 py-1 transition-colors';
          lineDiv.innerHTML = `
            <span class="text-gray-500 w-10 text-right mr-4 select-none">${line.lineNumber}</span>
            <span class="line-content"></span>
          `;
          
          codeContent.appendChild(lineDiv);
          const lineContent = lineDiv.querySelector('.line-content');

          // Add typing class for animation
          setTimeout(() => {
            lineDiv.classList.add('typing');
          }, 50);

          // Type each character in the line
          if (line.content.length > 0) {
            for (let j = 0; j< line.content.length; j++) {
              const token = line.content[j];
              const span = document.createElement('span');
              span.className = token.class;
              lineContent.appendChild(span);

              // Type each character in the token
              for (let k = 0; k < token.text.length; k++) {
                await new Promise(resolve => setTimeout(resolve, typingSpeed));
                span.textContent += token.text[k];
              }
            }
          }

          // Add typing cursor to current line
          const cursor = document.createElement('span');
          cursor.className = 'typing-indicator';
          lineContent.appendChild(cursor);

          await new Promise(resolve => setTimeout(resolve, lineDelay));
          cursor.remove();
        }

        typingStatus.textContent = 'Complete';
        footerStatus.textContent = 'Ready for execution';
        isTyping = false;
      }

      // Counter animation function
      function animateCounters() {
        const counters = document.querySelectorAll('[data-counter]');
        counters.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-counter'));
          const duration = 2000;
          const increment = target / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            
            if (target % 1 !== 0) {
              counter.textContent = current.toFixed(1);
            } else {
              counter.textContent = Math.floor(current);
            }
          }, 16);
        });
      }

      // Intersection Observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade-in')) {
              entry.target.classList.add('visible');
            }
            if (entry.target.classList.contains('slide-up')) {
              entry.target.classList.add('visible');
              
              // Start code typing animation when terminal is visible
              if (entry.target.querySelector('#code-content')) {
                setTimeout(() => typeCode(), 1000);
              }
              
              // Start counter animation when stats are visible
              if (entry.target.querySelector('[data-counter]')) {
                setTimeout(() => animateCounters(), 500);
              }
            }
          }
        });
      }, observerOptions);

      // Observe all animated elements
      document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
        observer.observe(el);
      });

      // Mobile menu functionality
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileOverlay = document.getElementById('mobile-overlay');
      const closeMobile = document.getElementById('close-mobile');
      const mobileBackdrop = document.getElementById('mobile-backdrop');

      function openMobileMenu() {
        mobileOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }

      function closeMobileMenu() {
        mobileOverlay.classList.add('hidden');
        document.body.style.overflow = '';
      }

      mobileMenu.addEventListener('click', openMobileMenu);
      closeMobile.addEventListener('click', closeMobileMenu);
      mobileBackdrop.addEventListener('click', closeMobileMenu);

      // Restart typing animation
      const restartButton = document.getElementById('restart-typing');
      restartButton.addEventListener('click', () => {
        if (!isTyping) {
          typeCode();
        }
      });

      // Auto-start typing animation after initial delay
      setTimeout(() => {
        const codeSection = document.querySelector('.slide-up');
        if (codeSection && codeSection.classList.contains('visible')) {
          typeCode();
        }
      }, 3000);

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

      // Add copy functionality to code terminal
      const copyButton = document.querySelector('[data-lucide="copy"]');
      if (copyButton) {
        copyButton.addEventListener('click', async () => {
          try {
            const codeText = Array.from(document.querySelectorAll('.line-content'))
              .map(line => line.textContent)
              .join('\n');
            
            await navigator.clipboard.writeText(codeText);
            
            // Visual feedback
            copyButton.classList.add('text-green-400');
            setTimeout(() => {
              copyButton.classList.remove('text-green-400');
            }, 1000);
          } catch (err) {
            console.error('Failed to copy code:', err);
          }
        });
      }

      // Add keyboard shortcuts
      document.addEventListener('keydown', (e) => {
        // Escape key closes mobile menu
        if (e.key === 'Escape') {
          closeMobileMenu();
        }
        
        // Space key restarts typing animation
        if (e.key === ' ' && e.target === document.body) {
          e.preventDefault();
          if (!isTyping) {
            typeCode();
          }
        }
      });

      // Performance optimization: Reduce motion for users who prefer it
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        typingSpeed = 10;
        lineDelay = 50;
      }

      // Initial icon setup
      setTimeout(() => {
        lucide.createIcons();
      }, 100);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0">

<div className="absolute top-0 left-1/4 w-96 h-96 aurora opacity-20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 animate-pulse" style={{animationDelay: '4s'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
</div>

<header className="relative z-50 glass border-b border-white/10">
<nav className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="fade-in flex items-center space-x-3 group visible" style={{animationDelay: '0.1s'}}>
<div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-110">
<svg className="lucide lucide-zap w-4 h-4 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-lg tracking-tight group-hover:text-purple-300 transition-colors font-manrope font-medium" style={{}}>ProFlow Studio</span>
</div>

<div className="hidden lg:flex items-center space-x-8">
<a className="fade-in text-sm text-gray-300 hover:text-white transition-all duration-300 relative group visible font-manrope font-medium" href="#" style={{animationDelay: '0.2s'}}>
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="fade-in text-sm text-gray-300 hover:text-white transition-all duration-300 relative group visible font-manrope font-medium" href="#" style={{animationDelay: '0.3s'}}>
            Solutions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="fade-in text-sm text-gray-300 hover:text-white transition-all duration-300 relative group visible font-manrope font-medium" href="#" style={{animationDelay: '0.4s'}}>
            Enterprise
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="fade-in text-sm text-gray-300 hover:text-white transition-all duration-300 relative group visible font-manrope font-medium" href="#" style={{animationDelay: '0.5s'}}>
            Resources
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
</a>
<a className="fade-in text-sm text-gray-300 hover:text-white transition-all duration-300 relative group visible font-manrope font-medium" href="#" style={{animationDelay: '0.6s'}}>
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
</a>
</div>

<div className="hidden lg:flex items-center space-x-4">
<button className="fade-in text-sm text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 visible font-manrope font-medium" style={{animationDelay: '0.7s'}}>Sign in</button>
<button className="fade-in bg-white text-black px-5 py-2.5 rounded-full text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-white/20 visible font-manrope font-medium" style={{animationDelay: '0.8s'}}>
            Start free trial
          </button>
</div>

<button className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors" id="mobile-menu">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</nav>
</header>

<div className="fixed inset-0 z-40 lg:hidden hidden" id="mobile-overlay">
<div className="absolute inset-0 bg-black/80 glass" id="mobile-backdrop"></div>
<div className="absolute right-4 top-20 w-80 bg-gray-900/90 glass border border-white/20 rounded-3xl p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6">
<span className="text-lg font-manrope font-medium" style={{}}>Menu</span>
<button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors" id="close-mobile">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="space-y-4 mb-6">
<a className="block py-2 text-gray-300 hover:text-white hover:bg-white/5 px-3 rounded-lg transition-all font-manrope font-medium" href="#" style={{}}>Features</a>
<a className="block py-2 text-gray-300 hover:text-white hover:bg-white/5 px-3 rounded-lg transition-all font-manrope font-medium" href="#" style={{}}>Solutions</a>
<a className="block py-2 text-gray-300 hover:text-white hover:bg-white/5 px-3 rounded-lg transition-all font-manrope font-medium" href="#" style={{}}>Enterprise</a>
<a className="block py-2 text-gray-300 hover:text-white hover:bg-white/5 px-3 rounded-lg transition-all font-manrope font-medium" href="#" style={{}}>Resources</a>
<a className="block py-2 text-gray-300 hover:text-white hover:bg-white/5 px-3 rounded-lg transition-all font-manrope font-medium" href="#" style={{}}>Pricing</a>
</nav>
<div className="space-y-3">
<button className="w-full text-gray-300 hover:text-white transition-colors text-left py-2 px-3 rounded-lg hover:bg-white/5 font-manrope font-medium" style={{}}>Sign in</button>
<button className="w-full bg-white text-black px-4 py-3 rounded-xl text-sm hover:bg-gray-100 transition-all hover:scale-105 font-manrope font-medium" style={{}}>
          Start free trial
        </button>
</div>
</div>
</div>

<section className="relative z-10 pt-24 pb-32">
<div className="max-w-6xl mx-auto px-6 lg:px-8">

<div className="fade-in flex justify-center mb-8 visible" style={{animationDelay: '0.2s'}}>
<div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full px-6 py-3 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<svg className="lucide lucide-sparkles w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-sm text-purple-300 tracking-wide font-manrope font-medium" style={{}}>NEW: AI-POWERED AUTOMATION 2.0</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="text-center mb-12">
<h1 className="fade-in text-5xl lg:text-8xl font-bold tracking-tight mb-6 leading-none visible" style={{animationDelay: '0.4s'}}>
<span className="text-gradient font-geist font-light" style={{}}>Transform</span><br/>
<span className="text-white font-geist font-light" style={{}}>workflows into</span><br/>
<span className="text-gradient typing-cursor font-light font-geist" style={{}}>intelligent</span><br/>
<span className="text-white font-geist font-light" style={{}}>experiences</span>
</h1>

<p className="fade-in lg:text-2xl max-w-4xl leading-relaxed visible text-lg text-gray-400 font-geist mr-auto ml-auto" style={{animationDelay: '0.6s'}}>
          ProFlow Studio leverages cutting-edge AI to automate complex business processes, 
          <span className="text-purple-300 font-geist" style={{}}>reduce operational overhead by 60%</span>, 
          and deliver exceptional user experiences at enterprise scale.
        </p>
</div>

<div className="fade-in flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20 visible" style={{animationDelay: '0.8s'}}>
<button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-white/20 flex items-center space-x-3 group">
<span className="font-manrope font-medium" style={{}}>Start building for free</span>
<svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="gradient-border rounded-full hover-lift">
<div className="gradient-border-inner px-8 py-4 rounded-full flex items-center space-x-3 group">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
<svg className="lucide lucide-play w-5 h-5 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</div>
<div className="text-left">
<div className="font-medium text-white font-manrope" style={{}}>Watch  demo</div>
</div>
</div>
</button>
</div>

<div className="slide-up max-w-6xl mx-auto visible" style={{animationDelay: '1s'}}>
<div className="bg-gray-900/60 border border-white/20 rounded-3xl overflow-hidden glass glow shadow-2xl">

<div className="border-b border-white/10">
<div className="flex items-center justify-between px-6 py-4">
<div className="flex items-center space-x-4">
<div className="flex space-x-2">
<div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer shadow-lg shadow-red-500/50"></div>
<div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer shadow-lg shadow-yellow-500/50"></div>
<div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer shadow-lg shadow-green-500/50"></div>
</div>
<div className="flex items-center space-x-4">
<div className="bg-white/10 px-3 py-1 rounded-lg flex items-center space-x-2">
<svg className="lucide lucide-file-code w-3 h-3 text-purple-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
<span className="text-xs text-gray-300 font-manrope font-medium" style={{}}>workflow-automation.py</span>
</div>
<div className="px-3 py-1 rounded-lg flex items-center space-x-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
<svg className="lucide lucide-settings w-3 h-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs font-manrope font-medium" style={{}}>config.yaml</span>
</div>
</div>
</div>
<div className="flex items-center space-x-3">
<button className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs font-medium hover:bg-green-500/30 transition-colors">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="font-manrope font-medium" id="typing-status" style={{}}>Typing...</span>
</button>
<svg className="lucide lucide-maximize-2 w-4 h-4 text-gray-400 hover:text-white transition-colors cursor-pointer" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
<button className="w-4 h-4 text-gray-400 hover:text-white transition-colors cursor-pointer" id="restart-typing">
<svg className="lucide lucide-refresh-cw w-4 h-4" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</button>
<svg className="lucide lucide-copy w-4 h-4 text-gray-400 hover:text-white transition-colors cursor-pointer" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</div>
</div>
</div>

<div className="code-container p-8 font-mono text-sm leading-relaxed bg-gradient-to-br from-gray-900/50 to-black/50">
<div className="space-y-3" id="code-content"><div className="flex code-line group hover:bg-white/5 rounded px-2 py-1 transition-colors typing">
<span className="text-gray-500 w-10 text-right mr-4 select-none">1</span>
<span className="line-content"><span className="text-purple-400">import</span><span className="text-white"> proflow </span><span className="text-purple-400">as</span><span className="text-blue-300"> pf</span></span>
</div><div className="flex code-line group hover:bg-white/5 rounded px-2 py-1 transition-colors typing">
<span className="text-gray-500 w-10 text-right mr-4 select-none">2</span>
<span className="line-content"><span className="text-purple-400">from</span><span className="text-white"> proflow.ai </span><span className="text-purple-400">import</span><span className="text-blue-300"> IntelligentProcessor</span><span className="text-blue-300">, AutoScaler</span></span>
</div><div className="flex code-line group hover:bg-white/5 rounded px-2 py-1 transition-colors typing">
<span className="text-gray-500 w-10 text-right mr-4 select-none">3</span>
<span className="line-content"></span>
</div><div className="flex code-line group hover:bg-white/5 rounded px-2 py-1 transition-colors typing">
<span className="text-gray-500 w-10 text-right mr-4 select-none">4</span>
<span className="line-content"><span className="text-gray-400"># Advanced workflow with ML-powered decision making</span></span>
</div><div className="flex code-line group hover:bg-white/5 rounded px-2 py-1 transition-colors typing">
<span className="text-gray-500 w-10 text-right mr-4 select-none">5</span>
<span className="line-content"><span className="text-blue-400">@pf.workflow</span><span className="text-white">(</span><span className="text-green-400">"enterprise-automation-v2"</span><span className="text-white">, </span><span className="text-orange-300">auto_scale</span><span className="text-white">=</span><span className="text-yellow-400">True</span><span className="text-white">)</span></span>
</div><div className="flex code-line group hover:bg-white/5 rounded px-2 py-1 transition-colors typing">
<span className="text-gray-500 w-10 text-right mr-4 select-none">6</span>
<span className="line-content"><span className="text-purple-400">async de</span></span>
</div></div>
</div>

<div className="border-t border-white/10 px-8 py-3 flex items-center justify-between bg-gray-900/80">
<div className="flex items-center space-x-4 text-xs text-gray-400">
<span className="font-manrope font-medium" style={{}}>⚡ Python 3.12</span>
<span className="font-manrope font-medium" style={{}}>🔥 ProFlow SDK 2.1.0</span>
<span className="font-manrope font-medium" style={{}}>✨ AI Models: GPT-4, Claude-3</span>
</div>
<div className="flex items-center space-x-2 text-xs text-green-400">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
<span className="font-manrope font-medium" id="footer-status" style={{}}>Generating code...</span>
</div>
</div>
</div>
</div>

<div className="slide-up grid grid-cols-1 md:grid-cols-4 gap-8 mt-24" style={{animationDelay: '1.2s'}}>
<div className="text-center group hover-lift">
<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
<div className="text-4xl lg:text-5xl text-gradient mb-2 font-geist" data-counter="10" style={{transition: 'outline 0.1s ease-in-out'}}>0</div>
<div className="text-gray-400 text-sm font-manrope font-medium" style={{}}>Million+ workflows</div>
<div className="text-gray-500 text-xs mt-1 font-manrope font-medium" style={{}}>automated daily</div>
</div>
</div>
<div className="text-center group hover-lift">
<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
<div className="text-4xl lg:text-5xl text-gradient mb-2 font-geist" data-counter="60" style={{transition: 'outline 0.1s ease-in-out'}}>0</div>
<div className="text-gray-400 text-sm font-manrope font-medium" style={{}}>Cost reduction</div>
<div className="text-gray-500 text-xs mt-1 font-manrope font-medium" style={{}}>average savings</div>
</div>
</div>
<div className="text-center group hover-lift">
<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
<div className="text-4xl lg:text-5xl text-gradient mb-2 font-geist" data-counter="99.9" style={{transition: 'outline 0.1s ease-in-out'}}>0</div>
<div className="text-gray-400 text-sm font-manrope font-medium" style={{}}>Uptime reliability</div>
<div className="text-gray-500 text-xs mt-1 font-manrope font-medium" style={{}}>enterprise SLA</div>
</div>
</div>
<div className="text-center group hover-lift">
<div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300">
<div className="text-4xl lg:text-5xl text-gradient mb-2 font-geist" data-counter="2.3" style={{transition: 'outline 0.1s ease-in-out'}}>0</div>
<div className="text-gray-400 text-sm font-manrope font-medium" style={{}}>Seconds avg response</div>
<div className="text-gray-500 text-xs mt-1 font-manrope font-medium" style={{}}>AI processing time</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
