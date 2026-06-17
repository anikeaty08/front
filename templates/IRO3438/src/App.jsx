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
                    fontFamily: {
                        'manrope': ['Manrope', 'sans-serif'],
                        'inter': ['Inter', 'sans-serif']
                    }
                }
            }
        }
    


        let currentSection = 0;
        let isAnimating = false;
        const totalSections = 5;
        let lastScrollTime = 0;
        
        function updateDots() {
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSection);
            });
        }
        
        function goToSection(sectionIndex) {
            if (isAnimating || sectionIndex === currentSection || sectionIndex < 0 || sectionIndex >= totalSections) return;
            
            isAnimating = true;
            const oldSection = document.getElementById(`section-${currentSection}`);
            const newSection = document.getElementById(`section-${sectionIndex}`);
            
            oldSection.classList.remove('active');
            newSection.classList.add('active');
            currentSection = sectionIndex;
            updateDots();
            
            setTimeout(() => {
                isAnimating = false;
            }, 400);
        }
        
        // Scroll detection
        const scrollContainer = document.querySelector('.scroll-container');
        
        scrollContainer.addEventListener('scroll', () => {
            if (isAnimating) return;
            
            const scrollTop = scrollContainer.scrollTop;
            const sectionHeight = window.innerHeight;
            const newSection = Math.floor(scrollTop / sectionHeight);
            
            if (newSection !== currentSection && newSection >= 0 && newSection < totalSections) {
                goToSection(newSection);
            }
        });
        
        // Wheel event for smoother navigation
        let wheelTimeout;
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            
            const now = Date.now();
            if (now - lastScrollTime < 600 || isAnimating) return;
            
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (e.deltaY > 0 && currentSection < totalSections - 1) {
                    lastScrollTime = now;
                    goToSection(currentSection + 1);
                    scrollContainer.scrollTo({
                        top: (currentSection + 1) * window.innerHeight,
                        behavior: 'smooth'
                    });
                } else if (e.deltaY < 0 && currentSection > 0) {
                    lastScrollTime = now;
                    goToSection(currentSection - 1);
                    scrollContainer.scrollTo({
                        top: (currentSection - 1) * window.innerHeight,
                        behavior: 'smooth'
                    });
                }
            }, 10);
        }, { passive: false });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (isAnimating) return;
            
            if (e.key === 'ArrowDown' && currentSection < totalSections - 1) {
                e.preventDefault();
                goToSection(currentSection + 1);
                scrollContainer.scrollTo({
                    top: (currentSection + 1) * window.innerHeight,
                    behavior: 'smooth'
                });
            } else if (e.key === 'ArrowUp' && currentSection > 0) {
                e.preventDefault();
                goToSection(currentSection - 1);
                scrollContainer.scrollTo({
                    top: (currentSection - 1) * window.innerHeight,
                    behavior: 'smooth'
                });
            }
        });
        
        // Touch events for mobile
        let startY = 0;
        let endY = 0;
        
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            endY = e.changedTouches[0].clientY;
            const diff = startY - endY;
            
            if (Math.abs(diff) > 50 && !isAnimating) {
                if (diff > 0 && currentSection < totalSections - 1) {
                    goToSection(currentSection + 1);
                } else if (diff < 0 && currentSection > 0) {
                    goToSection(currentSection - 1);
                }
            }
        });
        
        // Initialize
        updateDots();
    
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
      

<nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<div className="text-2xl font-manrope font-light text-white tracking-tight">FinanceSecure</div>
<div className="hidden md:flex space-x-8">
<button className="text-gray-300 hover:text-white transition-colors text-sm" onclick="goToSection(0)">Home</button>
<button className="text-gray-300 hover:text-white transition-colors text-sm" onclick="goToSection(1)">About</button>
<button className="text-gray-300 hover:text-white transition-colors text-sm" onclick="goToSection(2)">Services</button>
<button className="text-gray-300 hover:text-white transition-colors text-sm" onclick="goToSection(3)">Testimonials</button>
<button className="text-gray-300 hover:text-white transition-colors text-sm" onclick="goToSection(4)">Contact</button>
</div>
</div>
</nav>

<div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
<div className="dot active" data-section="0" onclick="goToSection(0)"></div>
<div className="dot" data-section="1" onclick="goToSection(1)"></div>
<div className="dot" data-section="2" onclick="goToSection(2)"></div>
<div className="dot" data-section="3" onclick="goToSection(3)"></div>
<div className="dot" data-section="4" onclick="goToSection(4)"></div>
</div>

<div className="scroll-container fixed inset-0 z-0">
<div className="scroll-content"></div>
</div>

<div className="section active" id="section-0">
<div className="h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
<div className="text-center text-white px-6 max-w-6xl">
<h1 className="font-manrope font-light text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight leading-none">
                    Secure Your Financial Future with Confidence
                </h1>
<p className="font-inter text-lg md:text-xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Expert wealth management tailored to your goals, lifestyle, and legacy.
                </p>
<button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-inter text-base font-medium transform hover:scale-105 transition-all duration-300 custom-shadow">
                    Start Your Journey
                </button>
</div>
</div>
</div>

<div className="section" id="section-1">
<div className="h-full flex items-center justify-center bg-black py-20">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-manrope font-light text-5xl md:text-6xl text-white mb-8 tracking-tight">
                        Building Wealth, Preserving Legacy
                    </h2>
<p className="font-inter text-base text-gray-300 leading-relaxed mb-12">
                        For over two decades, we've helped individuals and families navigate complex financial landscapes. 
                        Our personalized approach combines cutting-edge technology with time-tested investment strategies 
                        to deliver exceptional results that stand the test of time.
                    </p>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center">
<div className="font-manrope font-light text-4xl text-blue-400 mb-2 tracking-tight">$2.5B+</div>
<div className="font-inter text-sm text-gray-400">Assets Under Management</div>
</div>
<div className="text-center">
<div className="font-manrope font-light text-4xl text-blue-400 mb-2 tracking-tight">500+</div>
<div className="font-inter text-sm text-gray-400">Satisfied Clients</div>
</div>
<div className="text-center">
<div className="font-manrope font-light text-4xl text-blue-400 mb-2 tracking-tight">20+</div>
<div className="font-inter text-sm text-gray-400">Years of Excellence</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section" id="section-2">
<div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20">
<div className="container mx-auto px-6">
<h2 className="font-manrope font-light text-5xl md:text-6xl text-center text-white mb-16 tracking-tight">
                    Comprehensive Financial Services
                </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors backdrop-blur-sm">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-blue-400" fill="currentColor" viewbox="0 0 20 20">
<path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
</svg>
</div>
<h3 className="font-manrope font-light text-xl text-white mb-4 tracking-tight">Wealth Management</h3>
<p className="font-inter text-sm text-gray-400">Personalized investment strategies designed to grow and protect your wealth over time.</p>
</div>
<div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors backdrop-blur-sm">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-blue-400" fill="currentColor" viewbox="0 0 20 20">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<h3 className="font-manrope font-light text-xl text-white mb-4 tracking-tight">Retirement Planning</h3>
<p className="font-inter text-sm text-gray-400">Secure your future with comprehensive retirement strategies tailored to your lifestyle.</p>
</div>
<div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors backdrop-blur-sm">
<div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
<svg className="w-6 h-6 text-blue-400" fill="currentColor" viewbox="0 0 20 20">
<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
</svg>
</div>
<h3 className="font-manrope font-light text-xl text-white mb-4 tracking-tight">Estate Planning</h3>
<p className="font-inter text-sm text-gray-400">Preserve your legacy with sophisticated estate planning and wealth transfer strategies.</p>
</div>
</div>
</div>
</div>
</div>

<div className="section" id="section-3">
<div className="h-full flex items-center justify-center bg-black py-20">
<div className="container mx-auto px-6">
<h2 className="font-manrope font-light text-5xl md:text-6xl text-center text-white mb-16 tracking-tight">
                    What Our Clients Say
                </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
<div className="bg-gray-900/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
<p className="font-inter text-base text-gray-300 mb-6">"Their expertise in wealth management has exceeded our expectations. We feel confident about our financial future."</p>
<div className="font-manrope font-light text-white tracking-tight">Sarah Johnson</div>
<div className="font-inter text-sm text-gray-400">Business Owner</div>
</div>
<div className="bg-gray-900/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
<p className="font-inter text-base text-gray-300 mb-6">"Professional, knowledgeable, and truly caring. They've helped us achieve goals we never thought possible."</p>
<div className="font-manrope font-light text-white tracking-tight">Michael Chen</div>
<div className="font-inter text-sm text-gray-400">Retired Executive</div>
</div>
<div className="bg-gray-900/30 p-8 rounded-xl border border-gray-700 backdrop-blur-sm">
<p className="font-inter text-base text-gray-300 mb-6">"The personalized approach and attention to detail sets them apart. Highly recommended for serious investors."</p>
<div className="font-manrope font-light text-white tracking-tight">Emily Rodriguez</div>
<div className="font-inter text-sm text-gray-400">Healthcare Professional</div>
</div>
</div>
</div>
</div>
</div>

<div className="section" id="section-4">
<div className="h-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-manrope font-light text-5xl md:text-6xl text-white mb-8 tracking-tight">
                        Ready to Get Started?
                    </h2>
<p className="font-inter text-lg text-gray-300 mb-12">
                        Schedule a complimentary consultation to discuss your financial goals and discover how we can help you achieve them.
                    </p>
<button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-inter text-base font-medium transform hover:scale-105 transition-all duration-300 custom-shadow">
                        Schedule Consultation
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
