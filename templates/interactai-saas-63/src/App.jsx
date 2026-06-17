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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Cursor Glow Effect
        const cursorGlow = document.getElementById('cursor-glow');
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });

        // Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });

        // Magnetic Button Effect
        document.querySelectorAll('.magnetic-button').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });

        // 3D Card Tilt Effect
        document.querySelectorAll('.card-3d').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'rotateY(0) rotateX(0) translateZ(0)';
            });
        });

        // Chat Animation
        const chatMessages = [
            { type: 'user', text: 'Can you show me how integrations work?' },
            { type: 'bot', text: 'Absolutely! Let me demonstrate our Salesforce integration...' },
            { type: 'user', text: 'That looks great! What about pricing?' },
            { type: 'bot', text: 'Perfect timing! Based on your needs, I\'d recommend our Growth plan...' }
        ];

        let messageIndex = 0;
        
        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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

        // Add parallax effect on scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.particle').forEach((particle, index) => {
                const speed = 0.5 + (index * 0.1);
                particle.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Ripple effect on buttons
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                ripple.style.cssText = `
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background: rgba(255,255,255,0.4);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s ease-out;
                    left: ${e.clientX - rect.left - 10}px;
                    top: ${e.clientY - rect.top - 10}px;
                    pointer-events: none;
                `;
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    
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
      

<div className="cursor-glow hidden lg:block" id="cursor-glow"></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">I</span>
</div>
<span className="font-semibold tracking-tight text-lg">InteractAI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#sales">For Sales</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#marketing">For Marketing</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#testimonials">Testimonials</a>
</div>
<button className="magnetic-button px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-gray-900/20">
                    Join Waitlist
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 mesh-gradient grid-pattern overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="particle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
<div className="particle" style={{top: '40%', left: '20%', animationDelay: '0.5s'}}></div>
<div className="particle" style={{top: '60%', left: '5%', animationDelay: '1s'}}></div>
<div className="particle" style={{top: '30%', left: '85%', animationDelay: '1.5s'}}></div>
<div className="particle" style={{top: '70%', left: '90%', animationDelay: '2s'}}></div>
<div className="particle" style={{top: '15%', left: '75%', animationDelay: '2.5s'}}></div>
<div className="particle" style={{top: '80%', left: '30%', animationDelay: '3s'}}></div>
<div className="particle" style={{top: '50%', left: '95%', animationDelay: '3.5s'}}></div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-96 h-96">
<div className="orbit-animation absolute">
<div className="w-12 h-12 rounded-xl glass-effect shadow-lg flex items-center justify-center">
<span className="iconify text-indigo-500" data-icon="lucide:message-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="orbit-reverse absolute">
<div className="w-10 h-10 rounded-lg glass-effect shadow-lg flex items-center justify-center">
<span className="iconify text-purple-500" data-icon="lucide:sparkles" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-indigo-100">
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
</div>
<span className="text-xs font-medium text-gray-700">Now in Private Beta</span>
</div>
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-tight">
                        Your product,
                        <span className="block gradient-text gradient-animate">explaining itself.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-600 max-w-xl leading-relaxed">
                        Prospects ask questions, get instant answers, see features in action &amp; book meetings. All through conversations.
                        <span className="font-medium text-gray-900">Your website becomes the demo.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="magnetic-button group relative px-8 py-4 bg-gray-900 text-white font-medium rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-gray-900/30" id="waitlist-btn">
<span className="relative z-10 flex items-center justify-center gap-2">
                                Join the Waitlist
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="magnetic-button flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-white transition-all">
<span className="iconify text-gray-600" data-icon="lucide:play-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">Watch Demo</span>
</button>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 border-2 border-white"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
<div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">+200</div>
</div>
<p className="text-sm text-gray-600">Trusted by <span className="font-medium text-gray-900">200+ teams</span></p>
</div>
</div>

<div className="relative perspective-container">
<div className="relative float-animation">

<div className="card-3d relative bg-white rounded-3xl shadow-2xl shadow-indigo-500/10 border border-gray-100 overflow-hidden">
<div className="p-6">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:bot" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-sm">InteractAI</p>
<p className="text-xs text-green-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                                Online
                                            </p>
</div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
<span className="iconify text-gray-400" data-icon="lucide:mic" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 cursor-pointer transition-colors">
<span className="iconify text-gray-400" data-icon="lucide:video" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>

<div className="space-y-4 mb-6" id="chat-container">
<div className="chat-bubble flex gap-3 stagger-1" style={{animationDelay: '0.5s'}}>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex-shrink-0"></div>
<div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 max-w-xs">
<p className="text-sm text-gray-700">How does your pricing work?</p>
</div>
</div>
<div className="chat-bubble flex gap-3 justify-end stagger-2" style={{animationDelay: '1s'}}>
<div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl rounded-tr-md px-4 py-3 max-w-xs">
<p className="text-sm text-white">Great question! Let me show you our plans...</p>
</div>
</div>

<div className="chat-bubble ml-11 stagger-3" style={{animationDelay: '1.5s'}}>
<div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-4 border border-indigo-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:zap" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-sm">Growth Plan</p>
<p className="text-xs text-gray-500">Most popular</p>
</div>
<span className="ml-auto font-semibold text-indigo-600">$299/mo</span>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 text-xs font-medium bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">Select</button>
<button className="flex-1 py-2 text-xs font-medium bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">Compare</button>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-1 mb-4 opacity-50">
<div className="wave-bar w-1 h-4 bg-indigo-400 rounded-full" style={{animationDelay: '0s'}}></div>
<div className="wave-bar w-1 h-6 bg-indigo-500 rounded-full" style={{animationDelay: '0.1s'}}></div>
<div className="wave-bar w-1 h-8 bg-indigo-600 rounded-full" style={{animationDelay: '0.2s'}}></div>
<div className="wave-bar w-1 h-6 bg-indigo-500 rounded-full" style={{animationDelay: '0.3s'}}></div>
<div className="wave-bar w-1 h-4 bg-indigo-400 rounded-full" style={{animationDelay: '0.4s'}}></div>
<div className="wave-bar w-1 h-6 bg-indigo-500 rounded-full" style={{animationDelay: '0.5s'}}></div>
<div className="wave-bar w-1 h-8 bg-indigo-600 rounded-full" style={{animationDelay: '0.6s'}}></div>
<div className="wave-bar w-1 h-5 bg-indigo-400 rounded-full" style={{animationDelay: '0.7s'}}></div>
</div>

<div className="relative">
<input className="w-full px-4 py-3 pr-12 bg-gray-50 rounded-xl text-sm border border-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-300 transition-all" placeholder="Ask about features, pricing, integrations..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
<span className="iconify text-white" data-icon="lucide:send" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 glass-effect rounded-2xl p-4 shadow-xl border border-white/50 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
<span className="iconify text-green-600" data-icon="lucide:trending-up" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-2xl font-semibold text-gray-900">11x</p>
<p className="text-xs text-gray-500">Higher conversion</p>
</div>
</div>
</div>
<div className="absolute -bottom-4 -left-6 glass-effect rounded-2xl p-4 shadow-xl border border-white/50" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
<span className="iconify text-purple-600" data-icon="lucide:users" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-2xl font-semibold text-gray-900">847</p>
<p className="text-xs text-gray-500">SQLs this month</p>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{overflow: 'visible'}}>
<defs>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '0.3'}}></stop>
<stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: '0.1'}}></stop>
</lineargradient>
</defs>
<path className="connection-line" d="M -20 50 Q -50 100 -30 150" fill="none" stroke="url(#lineGradient)" strokeWidth="2"></path>
<path className="connection-line" d="M 420 80 Q 450 40 480 60" fill="none" stroke="url(#lineGradient)" strokeWidth="2" style={{animationDelay: '0.5s'}}></path>
</svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
<span className="text-xs text-gray-400">Scroll to explore</span>
<span className="iconify text-gray-400" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<p className="text-sm font-medium text-indigo-600 mb-2">TRUSTED BY INDUSTRY LEADERS</p>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">200+ B2B SaaS teams launching with InteractAI</h2>
</div>
<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex scroll-animation">
<div className="flex items-center gap-16 px-8">
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Acme</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Globex</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Hooli</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Initech</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Massive</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Soylent</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Umbrella</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Vehement</div>
</div>
<div className="flex items-center gap-16 px-8">
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Acme</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Globex</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Hooli</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Initech</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Massive</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Soylent</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Umbrella</div>
<div className="text-2xl font-semibold tracking-tighter text-gray-300 hover:text-gray-400 transition-colors cursor-pointer">Vehement</div>
</div>
</div>
</div>
<p className="text-center text-sm text-gray-500 mt-8">Mid-market to enterprise. All seeing <span className="font-medium text-indigo-600">11x higher conversion</span> than traditional websites.</p>
</section>

<section className="py-32 bg-gray-50 mesh-gradient relative overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 scroll-reveal">
<p className="text-sm font-medium text-indigo-600 mb-4">THE NEW STANDARD</p>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Convert prospects on the first visit.</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    No demo form. No calendar link. No 6-month sales cycle. InteractAI turns your website into a living product experience.
                </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
<div className="scroll-reveal interactive-card card-3d bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 pulse-glow">
<span className="iconify text-white" data-icon="lucide:message-square" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Talk to Your Product</h3>
<p className="text-gray-600">Buyers ask questions. Get answers in seconds. No waiting for sales to respond.</p>

<div className="mt-6 p-4 bg-gray-50 rounded-xl">
<div className="flex items-center gap-2 text-sm text-gray-500">
<span className="typing-indicator flex gap-1">
<span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
<span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
<span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
</span>
<span>AI is typing...</span>
</div>
</div>
</div>
<div className="scroll-reveal interactive-card card-3d bg-white rounded-3xl p-8 border border-gray-100 shadow-sm" style={{transitionDelay: '0.1s'}}>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6">
<span className="iconify text-white" data-icon="lucide:play" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Live Demonstrations</h3>
<p className="text-gray-600">See features demonstrated in real-time. Experience the product, don't just read about it.</p>
<div className="mt-6 relative h-20 bg-gray-50 rounded-xl overflow-hidden">
<div className="absolute inset-0 shimmer-effect"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
<span className="iconify text-purple-500" data-icon="lucide:play" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
<div className="scroll-reveal interactive-card card-3d bg-white rounded-3xl p-8 border border-gray-100 shadow-sm" style={{transitionDelay: '0.2s'}}>
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6">
<span className="iconify text-white" data-icon="lucide:calendar-check" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Instant Meetings</h3>
<p className="text-gray-600">Prospects to SQLs while you sleep. Qualified meetings booked automatically.</p>
<div className="mt-6 p-4 bg-green-50 rounded-xl flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-medium text-green-900">Meeting Booked</p>
<p className="text-xs text-green-600">Tomorrow at 2:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="sales">
<div className="absolute inset-0 grid-pattern opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="scroll-reveal">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
<span className="iconify text-blue-600" data-icon="lucide:target" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium text-blue-700">FOR SALES TEAMS</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        Know who's ready to buy.
                        <span className="block text-gray-400">Before you call.</span>
</h2>
<p className="text-xl text-gray-600 mb-10">
                        Every conversation is intelligence. Your dashboard shows who to reach out to and exactly what they care about.
                    </p>
<div className="space-y-6">
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
<span className="iconify text-blue-600" data-icon="lucide:user-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Pre-Qualified Leads</h4>
<p className="text-sm text-gray-600">Visitors qualify themselves through conversation. No discovery calls needed.</p>
</div>
<span className="iconify text-gray-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
<span className="iconify text-purple-600" data-icon="lucide:brain" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Context-Ready Calls</h4>
<p className="text-sm text-gray-600">See every question, feature explored, objection raised. Walk into calls prepared.</p>
</div>
<span className="iconify text-gray-300 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
<span className="iconify text-green-600" data-icon="lucide:gauge" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Intent Scoring</h4>
<p className="text-sm text-gray-600">High, medium, or low. Focus your time on prospects actually ready to buy.</p>
</div>
<span className="iconify text-gray-300 group-hover:text-green-400 group-hover:translate-x-1 transition-all" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
<span className="iconify text-orange-600" data-icon="lucide:building-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Buying Signals</h4>
<p className="text-sm text-gray-600">Track companies, not just people. Multiple visitors = serious intent.</p>
</div>
<span className="iconify text-gray-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>

<div className="scroll-reveal perspective-container">
<div className="relative float-animation" style={{animationDuration: '8s'}}>
<div className="card-3d bg-white rounded-3xl shadow-2xl shadow-blue-500/10 border border-gray-100 overflow-hidden">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between">
<h3 className="font-semibold">Lead Intelligence</h3>
<div className="flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                        Live
                                    </div>
</div>
</div>
<div className="p-6 space-y-4">

<div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white font-semibold">
                                            JD
                                        </div>
<div className="flex-1">
<div className="flex items-center gap-2">
<p className="font-medium">Jane Doe</p>
<span className="px-2 py-0.5 text-xs font-medium bg-green-500 text-white rounded-full">HOT</span>
</div>
<p className="text-sm text-gray-500">VP of Sales @ TechCorp</p>
</div>
<div className="text-right">
<p className="text-lg font-semibold text-green-600">92</p>
<p className="text-xs text-gray-400">Intent Score</p>
</div>
</div>
<div className="mt-3 flex gap-2">
<span className="px-2 py-1 text-xs bg-white rounded-md text-gray-600">Pricing</span>
<span className="px-2 py-1 text-xs bg-white rounded-md text-gray-600">Integration</span>
<span className="px-2 py-1 text-xs bg-white rounded-md text-gray-600">Enterprise</span>
</div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-100 hover:shadow-md transition-shadow cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-white font-semibold">
                                            MS
                                        </div>
<div className="flex-1">
<div className="flex items-center gap-2">
<p className="font-medium">Mike Smith</p>
<span className="px-2 py-0.5 text-xs font-medium bg-yellow-500 text-white rounded-full">WARM</span>
</div>
<p className="text-sm text-gray-500">Product Manager @ StartupXYZ</p>
</div>
<div className="text-right">
<p className="text-lg font-semibold text-yellow-600">67</p>
<p className="text-xs text-gray-400">Intent Score</p>
</div>
</div>
</div>

<div className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow cursor-pointer opacity-70">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white font-semibold">
                                            AJ
                                        </div>
<div className="flex-1">
<p className="font-medium">Alex Johnson</p>
<p className="text-sm text-gray-500">Developer @ Agency Co</p>
</div>
<div className="text-right">
<p className="text-lg font-semibold text-gray-500">34</p>
<p className="text-xs text-gray-400">Intent Score</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-xl border border-green-100 animate-bounce" style={{animationDuration: '2s'}}>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:bell" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs font-medium">New Hot Lead!</p>
<p className="text-xs text-gray-500">Just now</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gray-50 relative overflow-hidden" id="marketing">
<div className="absolute inset-0 mesh-gradient"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="scroll-reveal perspective-container order-2 lg:order-1">
<div className="relative float-animation" style={{animationDuration: '7s', animationDelay: '0.5s'}}>
<div className="card-3d bg-white rounded-3xl shadow-2xl shadow-purple-500/10 border border-gray-100 overflow-hidden">
<div className="p-6 border-b border-gray-100">
<div className="flex items-center justify-between">
<h3 className="font-semibold">Question Analytics</h3>
<select className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none">
<option>Last 7 days</option>
<option>Last 30 days</option>
</select>
</div>
</div>
<div className="p-6">

<div className="relative h-48 mb-6">
<div className="absolute top-4 left-4 px-3 py-2 bg-purple-100 rounded-lg text-sm text-purple-700 font-medium" style={{animation: 'float 3s ease-in-out infinite'}}>
                                        "How does pricing work?"
                                    </div>
<div className="absolute top-12 right-8 px-3 py-2 bg-indigo-100 rounded-lg text-sm text-indigo-700 font-medium" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s'}}>
                                        "vs Competitor X?"
                                    </div>
<div className="absolute top-28 left-12 px-3 py-2 bg-pink-100 rounded-lg text-sm text-pink-700 font-medium" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s'}}>
                                        "Enterprise features?"
                                    </div>
<div className="absolute bottom-4 right-4 px-3 py-2 bg-blue-100 rounded-lg text-sm text-blue-700 font-medium" style={{animation: 'float 4.5s ease-in-out infinite', animationDelay: '0.3s'}}>
                                        "API documentation?"
                                    </div>
<div className="absolute bottom-12 left-24 px-3 py-2 bg-green-100 rounded-lg text-xs text-green-700 font-medium" style={{animation: 'float 3.2s ease-in-out infinite', animationDelay: '0.7s'}}>
                                        "SOC2 compliant?"
                                    </div>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="text-center p-3 bg-gray-50 rounded-xl">
<p className="text-2xl font-semibold text-gray-900">1,247</p>
<p className="text-xs text-gray-500">Questions</p>
</div>
<div className="text-center p-3 bg-gray-50 rounded-xl">
<p className="text-2xl font-semibold text-purple-600">23</p>
<p className="text-xs text-gray-500">Content Gaps</p>
</div>
<div className="text-center p-3 bg-gray-50 rounded-xl">
<p className="text-2xl font-semibold text-indigo-600">8</p>
<p className="text-xs text-gray-500">Competitors</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 glass-effect rounded-2xl p-4 shadow-xl border border-purple-100" style={{animation: 'float 5s ease-in-out infinite'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
<span className="iconify text-purple-600" data-icon="lucide:lightbulb" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-medium">New Insight</p>
<p className="text-xs text-gray-500">42% ask about SSO</p>
</div>
</div>
</div>
</div>
</div>

<div className="scroll-reveal order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
<span className="iconify text-purple-600" data-icon="lucide:megaphone" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium text-purple-700">FOR MARKETING TEAMS</span>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
                        Marketing intelligence from
                        <span className="block gradient-text">actual prospect questions.</span>
</h2>
<p className="text-xl text-gray-600 mb-10">
                        Stop guessing what to write. Your dashboard shows exactly what buyers ask before they convert.
                    </p>
<div className="space-y-6">
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 transition-colors">
<span className="iconify text-purple-600" data-icon="lucide:help-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Real Questions</h4>
<p className="text-sm text-gray-600">Capture what prospects actually ask - real buyer language from real conversations.</p>
</div>
</div>
</div>
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center group-hover:bg-pink-200 transition-colors">
<span className="iconify text-pink-600" data-icon="lucide:file-question" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Content Gaps</h4>
<p className="text-sm text-gray-600">See what InteractAI couldn't answer. Build what buyers need.</p>
</div>
</div>
</div>
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
<span className="iconify text-indigo-600" data-icon="lucide:swords" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Competitor Intel</h4>
<p className="text-sm text-gray-600">See which competitors matter and what positioning wins.</p>
</div>
</div>
</div>
<div className="interactive-card group p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-all cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
<span className="iconify text-blue-600" data-icon="lucide:bar-chart-3" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex-1">
<h4 className="font-semibold mb-1">Channel Performance</h4>
<p className="text-sm text-gray-600">Look beyond traffic. Start measuring conversation quality.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 scroll-reveal">
<p className="text-sm font-medium text-indigo-600 mb-4">TESTIMONIALS</p>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">Loved by forward-thinking teams</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="scroll-reveal interactive-card bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
<div className="flex gap-1 mb-6">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-700 mb-6">"InteractAI completely transformed how we approach website conversions. Our SQL generation increased 11x in the first month."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600"></div>
<div>
<p className="font-medium">Sarah Chen</p>
<p className="text-sm text-gray-500">VP Sales, TechCorp</p>
</div>
</div>
</div>
<div className="scroll-reveal interactive-card bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100" style={{transitionDelay: '0.1s'}}>
<div className="flex gap-1 mb-6">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-700 mb-6">"The question analytics alone is worth 10x the price. We finally understand what our buyers actually care about."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
<div>
<p className="font-medium">Marcus Rodriguez</p>
<p className="text-sm text-gray-500">CMO, StartupXYZ</p>
</div>
</div>
</div>
<div className="scroll-reveal interactive-card bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100" style={{transitionDelay: '0.2s'}}>
<div className="flex gap-1 mb-6">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-700 mb-6">"Our sales team walks into calls knowing exactly what prospects care about. Close rates jumped 40% in 90 days."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
<div>
<p className="font-medium">Emily Watson</p>
<p className="text-sm text-gray-500">Head of Revenue, ScaleUp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900"></div>
<div className="absolute inset-0 opacity-30">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)'}}></div>
</div>

<div className="absolute inset-0 overflow-hidden">
<div className="particle" style={{top: '20%', left: '10%', background: 'rgba(255,255,255,0.3)'}}></div>
<div className="particle" style={{top: '60%', left: '80%', background: 'rgba(255,255,255,0.3)', animationDelay: '1s'}}></div>
<div className="particle" style={{top: '40%', left: '50%', background: 'rgba(255,255,255,0.2)', animationDelay: '2s'}}></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="scroll-reveal">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-sm font-medium text-white/80">Limited spots available</span>
</div>
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                    Ready to transform your website?
                </h2>
<p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                    Join 200+ teams already converting prospects on the first visit. No demo forms. No waiting.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="magnetic-button group px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:shadow-2xl hover:shadow-white/20 transition-all">
<span className="flex items-center justify-center gap-2">
                            Join the Waitlist
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
</button>
<button className="magnetic-button flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all">
<span className="iconify" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="font-medium">Book a Demo</span>
</button>
</div>
<p className="mt-8 text-sm text-white/50">No credit card required • Setup in 5 minutes • Cancel anytime</p>
</div>
</div>
</section>

<footer className="py-16 bg-gray-900 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white font-semibold text-sm">I</span>
</div>
<span className="font-semibold tracking-tight text-lg text-white">InteractAI</span>
</div>
<div className="flex items-center gap-8">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<span className="iconify text-gray-400" data-icon="lucide:twitter" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors" href="#">
<span className="iconify text-gray-400" data-icon="lucide:linkedin" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-800 text-center">
<p className="text-sm text-gray-500">© 2024 InteractAI. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
