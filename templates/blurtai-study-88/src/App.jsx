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
sans: ['Inter', 'system-ui', 'sans-serif'],
caveat: ['Caveat', 'cursive'],
},
colors: {
'playful-pink': '#ec4899',
'playful-purple': '#8b5cf6',
'playful-orange': '#f97316',
'playful-lime': '#84cc16',
'playful-blue': '#3b82f6',
'playful-coral': '#f87171',
}
}
}
}



{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{
"@type": "Question",
"name": "Is BlurtAI free to use?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Yes! BlurtAI offers a free tier with access to core features. No credit card required to get started."
}
},
{
"@type": "Question",
"name": "Is this just for GCSE?",
"acceptedAnswer": {
"@type": "Answer",
"text": "No, BlurtAI supports GCSE, A-Level, Undergraduate studies, and even custom subjects you create yourself."
}
},
{
"@type": "Question",
"name": "How are AI lessons different from ChatGPT?",
"acceptedAnswer": {
"@type": "Answer",
"text": "Unlike ChatGPT, BlurtAI provides structured, curriculum-aligned lessons that explain, test, and adapt in real-time — all in one guided flow."
}
},
{
"@type": "Question",
"name": "Which exam boards do you support?",
"acceptedAnswer": {
"@type": "Answer",
"text": "We support AQA, Edexcel, OCR, and WJEC exam boards with content aligned to their specific curricula."
}
}
]
}



        // Typewriter Effect
        const typewriterElement = document.getElementById('typewriter');
        const words = [
            { text: 'GCSE', color: '#ec4899' },
            { text: 'A-Level', color: '#8b5cf6' },
            { text: 'Undergraduate', color: '#3b82f6' },
            { text: 'AP', color: '#84cc16' },
            { text: 'Custom Study', color: '#f97316' }
        ];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeWriter() {
            const current = words[wordIndex];
            const displayText = current.text.substring(0, charIndex);
            
            typewriterElement.textContent = displayText;
            typewriterElement.style.color = current.color;

            if (!isDeleting && charIndex < current.text.length) {
                charIndex++;
                setTimeout(typeWriter, 100);
            } else if (!isDeleting && charIndex === current.text.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, 2000);
            } else if (isDeleting && charIndex > 0) {
                charIndex--;
                setTimeout(typeWriter, 50);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeWriter, 300);
            }
        }

        typeWriter();

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const height = Math.max(56, 72 - scrollY * 0.1);
            const opacity = Math.min(0.85, 0.3 + scrollY * 0.003);
            const blur = Math.min(20, 8 + scrollY * 0.05);
            const borderOpacity = Math.min(0.2, 0.05 + scrollY * 0.001);
            
            navbar.style.height = `${height}px`;
            navbar.style.background = `rgba(24, 24, 27, ${opacity})`;
            navbar.style.backdropFilter = `blur(${blur}px)`;
            navbar.style.borderBottom = `1px solid rgba(255,255,255,${borderOpacity})`;
        });

        // Scroll animations for fade-in elements
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 50);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-scroll, .scale-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });

        // AI Lessons Zoom Section
        const featuresSection = document.getElementById('features');
        const laptopContainer = document.getElementById('laptop-container');
        const laptopScreen = document.getElementById('laptop-screen');
        const annotationLeft = document.querySelector('.annotation-left');
        const annotationRight = document.querySelector('.annotation-right');

        window.addEventListener('scroll', () => {
            const rect = featuresSection.getBoundingClientRect();
            const sectionHeight = featuresSection.offsetHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight));
            
            // Scale: 0.6 -> 1
            const scale = 0.6 + (progress * 0.4 * Math.min(1, progress / 0.4));
            // RotateX: 15 -> 0
            const rotateX = Math.max(0, 15 - (progress * 30));
            // Screen Y: 80 -> 0
            const screenY = Math.max(0, 80 - (progress * 160));
            
            laptopContainer.style.transform = `scale(${Math.min(1, scale)}) perspective(1000px) rotateX(${rotateX}deg)`;
            laptopScreen.style.transform = `translateY(${screenY}px)`;
            
            // Show annotations when zoomed in
            if (progress > 0.6 && annotationLeft && annotationRight) {
                annotationLeft.style.opacity = '1';
                annotationRight.style.opacity = '1';
                annotationLeft.querySelectorAll('.annotation-arrow').forEach(el => el.classList.add('visible'));
                annotationRight.querySelectorAll('.annotation-arrow').forEach(el => el.classList.add('visible'));
            }
        });

        // Fill-in-the-blank animation
        const fillSection = document.getElementById('fill-blanks');
        const successMessage = document.getElementById('success-message');
        
        window.addEventListener('scroll', () => {
            const rect = fillSection.getBoundingClientRect();
            const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
            
            if (progress > 0.5) {
                successMessage.style.opacity = '1';
                document.getElementById('blank1').style.background = 'rgba(132, 204, 22, 0.1)';
                document.getElementById('blank1').style.borderColor = '#84cc16';
                document.getElementById('blank2').style.background = 'rgba(132, 204, 22, 0.1)';
                document.getElementById('blank2').style.borderColor = '#84cc16';
            }
        });

        // FAQ Toggle
        function toggleFaq(trigger) {
            const item = trigger.closest('.faq-item');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon');
            const isOpen = !content.classList.contains('hidden');
            
            // Close all others
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.querySelector('.faq-content').classList.add('hidden');
                faq.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
            });
            
            if (!isOpen) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        }

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="navbar" style={{height: '72px', background: 'rgba(24, 24, 27, 0.3)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(255,255,255,0.05)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-semibold text-sm" style={{background: 'linear-gradient(135deg, var(--playful-pink), var(--playful-purple), var(--playful-blue))'}}>B</div>
<span className="text-lg font-semibold tracking-tight" style={{background: 'linear-gradient(90deg, var(--playful-pink), var(--playful-purple), var(--playful-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>BlurtAI</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#subjects">Subjects</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors px-4 py-2">Log in</button>
<button className="text-sm font-medium px-4 py-2 rounded-full text-white flex items-center gap-2 transition-all hover:scale-105" style={{background: 'linear-gradient(90deg, var(--playful-pink), var(--playful-purple), var(--playful-blue))'}}>
                    Get Started
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
</nav>
<main>

<section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20" id="hero">

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="float-object absolute top-1/4 left-1/6 w-20 h-24 rounded-lg opacity-20" style={{background: 'linear-gradient(135deg, var(--playful-pink), var(--playful-purple))', transform: 'rotate(-10deg)'}}></div>
<div className="float-object-delayed absolute top-1/3 right-1/5 w-16 h-20 rounded-lg opacity-15" style={{background: 'linear-gradient(135deg, var(--playful-purple), var(--playful-blue))', transform: 'rotate(15deg)'}}></div>
<div className="float-object absolute bottom-1/4 left-1/4 w-12 h-3 rounded-full opacity-20" style={{background: 'var(--playful-lime)'}}></div>
<div className="float-object-delayed absolute top-2/5 left-2/3 w-10 h-10 rounded opacity-15" style={{background: 'var(--playful-orange)', transform: 'rotate(45deg)'}}></div>
<div className="float-object absolute bottom-1/3 right-1/4 w-14 h-14 rounded-lg opacity-10" style={{background: 'linear-gradient(135deg, var(--playful-blue), var(--playful-lime))'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10" style={{background: 'radial-gradient(circle, var(--playful-purple) 0%, transparent 70%)'}}></div>
<div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10" style={{background: 'radial-gradient(circle, var(--playful-pink) 0%, transparent 70%)'}}></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
<span className="cursor-blink" id="typewriter" style={{color: 'var(--playful-pink)'}}>GCSE</span>
<span className="text-zinc-100"> Revision That Actually Teaches</span>
</h1>
<p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Not flashcards. Not quizzes. Guided AI lessons that explain, test, and adapt — all in one flow.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto px-8 py-4 rounded-full text-white font-medium flex items-center justify-center gap-3 transition-all hover:scale-105 gradient-animate" style={{background: 'linear-gradient(90deg, var(--playful-pink), var(--playful-purple), var(--playful-blue))', animation: 'pulse-glow 2s infinite'}}>
<iconify-icon height="20" icon="solar:square-academic-cap-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        Start Learning Free
                    </button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium flex items-center justify-center gap-3 border border-zinc-700 hover:border-zinc-500 transition-all hover:bg-zinc-800/50">
<iconify-icon height="20" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        Watch Demo
                    </button>
</div>
<div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full" style={{background: 'var(--playful-lime)'}}></span>
                        No card needed
                    </span>
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full" style={{background: 'var(--playful-purple)'}}></span>
                        AQA, Edexcel, OCR aligned
                    </span>
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full" style={{background: 'var(--playful-blue)'}}></span>
                        Built for UK students
                    </span>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-cue">
<iconify-icon className="text-zinc-500" height="28" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</section>

<section className="py-32 md:py-40 relative" id="narrative">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="space-y-8">
<p className="text-2xl sm:text-3xl md:text-4xl font-medium text-zinc-100 fade-in-scroll tracking-tight">You've seen AI study tools before.</p>
<p className="text-xl sm:text-2xl text-zinc-500 fade-in-scroll italic">"Flashcards"</p>
<p className="text-xl sm:text-2xl text-zinc-500 fade-in-scroll italic">"AI quizzes"</p>
<p className="text-xl sm:text-2xl text-zinc-500 fade-in-scroll italic">"Summaries of summaries"</p>
<p className="text-xl sm:text-2xl text-zinc-400 fade-in-scroll" style={{fontStyle: 'italic'}}>Even ChatGPT can do this.</p>
</div>
</div>
</section>

<section className="py-20 relative -mt-12" id="problem">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden transition-all duration-500 scale-in" id="problem-container">

<div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div className="flex-1 mx-4">
<div className="bg-zinc-800 rounded-md px-3 py-1.5 text-xs text-zinc-500 max-w-md mx-auto text-center">
                                typical-ai-study-tool.app
                            </div>
</div>
</div>

<div className="p-6 md:p-8">
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 slide-in-left">
<div className="text-sm text-zinc-500 mb-4 flex items-center gap-2">
<iconify-icon height="16" icon="solar:card-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Flashcard
                                </div>
<div className="h-24 flex items-center justify-center border-2 border-dashed border-zinc-700 rounded-lg">
<span className="text-zinc-600 text-sm">Front of card</span>
</div>
<p className="text-zinc-500 text-sm mt-4 italic fade-quote">"Memorise this."</p>
</div>

<div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 fade-in-scroll">
<div className="text-sm text-zinc-500 mb-4 flex items-center gap-2">
<iconify-icon height="16" icon="solar:list-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    Multiple Choice
                                </div>
<div className="space-y-2">
<div className="px-3 py-2 bg-zinc-700/30 rounded-lg text-sm text-zinc-400">A) Option one</div>
<div className="px-3 py-2 bg-zinc-700/30 rounded-lg text-sm text-zinc-400">B) Option two</div>
<div className="px-3 py-2 bg-zinc-700/30 rounded-lg text-sm text-zinc-400">C) Option three</div>
</div>
<p className="text-zinc-500 text-sm mt-4 italic fade-quote">"Guess again."</p>
</div>

<div className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 slide-in-right">
<div className="text-sm text-zinc-500 mb-4 flex items-center gap-2">
<iconify-icon height="16" icon="solar:chat-dots-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                                    AI Chat
                                </div>
<div className="space-y-3">
<div className="bg-zinc-700/30 rounded-lg px-3 py-2 text-sm text-zinc-400 max-w-[80%]">Explain photosynthesis</div>
<div className="bg-zinc-700/30 rounded-lg px-3 py-2 text-sm text-zinc-500 ml-auto max-w-[80%]">Here's a summary...</div>
</div>
<p className="text-zinc-500 text-sm mt-4 italic fade-quote">"Here's a summary."</p>
</div>
</div>
<p className="text-center text-zinc-500 mt-8 text-lg">This isn't learning. It's <span className="text-playful-coral">guessing</span>.</p>
</div>
</div>
</div>
</section>

<section className="py-20 -mt-12 relative" id="turning-point">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="flex items-center gap-6 justify-center mb-8 fade-in-scroll">
<div className="flex-1 h-px" style={{background: 'linear-gradient(90deg, transparent, var(--playful-purple), transparent)'}}></div>
</div>
<p className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight fade-in-scroll">
                    Here's what <span className="text-playful-coral">they</span> don't do.
                </p>
<div className="flex items-center gap-6 justify-center mt-8 fade-in-scroll">
<div className="flex-1 h-px" style={{background: 'linear-gradient(90deg, transparent, var(--playful-purple), transparent)'}}></div>
</div>
</div>
</section>

<section className="relative" id="features" style={{height: '200vh'}}>
<div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

<div className="hidden xl:block absolute left-8 top-1/2 -translate-y-1/2 max-w-[180px] annotation-left opacity-0 transition-opacity duration-500">
<p className="font-caveat text-xl text-playful-coral mb-2">AI explains step-by-step</p>
<svg className="transform -scale-x-100" height="60" width="100">
<path className="annotation-arrow" d="M10 50 Q 60 40 90 10" fill="none" stroke="var(--playful-coral)" strokeWidth="2"></path>
<path className="annotation-arrow" d="M85 5 L 95 10 L 88 18" fill="none" stroke="var(--playful-coral)" strokeWidth="2"></path>
</svg>
</div>
<div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 max-w-[180px] text-right annotation-right opacity-0 transition-opacity duration-500">
<p className="font-caveat text-xl text-playful-coral mb-2">Adapts to your level</p>
<svg className="ml-auto" height="60" width="100">
<path className="annotation-arrow" d="M90 50 Q 40 40 10 10" fill="none" stroke="var(--playful-coral)" strokeWidth="2"></path>
<path className="annotation-arrow" d="M15 5 L 5 10 L 12 18" fill="none" stroke="var(--playful-coral)" strokeWidth="2"></path>
</svg>
</div>

<div className="relative transition-all duration-100 ease-out" id="laptop-container" style={{transform: 'scale(0.6) perspective(1000px) rotateX(15deg)', transformOrigin: 'center center'}}>
<div className="w-[90vw] max-w-4xl mx-auto">

<div className="bg-zinc-800 rounded-t-2xl p-2 border border-zinc-700">

<div className="bg-zinc-950 rounded-xl overflow-hidden transition-transform duration-100" id="laptop-screen" style={{transform: 'translateY(80px)'}}>

<div className="bg-zinc-900 border-b border-zinc-800 px-4 sm:px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, var(--playful-pink), var(--playful-purple))'}}>
<iconify-icon className="text-white" height="18" icon="solar:atom-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-sm sm:text-base">Chemistry - Rates of Reaction</h3>
<p className="text-xs text-zinc-500">A-Level • Unit 3</p>
</div>
</div>
<span className="px-3 py-1 rounded-full text-xs font-medium" style={{background: 'var(--playful-purple)', color: 'white'}}>AQA</span>
</div>

<div className="p-4 sm:p-6 space-y-4 min-h-[300px] sm:min-h-[350px]">

<div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background: 'var(--playful-purple)'}}>
<iconify-icon className="text-white" height="16" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-playful-purple font-medium mb-2">AI EXPLAINS</p>
<p className="text-zinc-300 text-sm sm:text-base leading-relaxed">For a reaction to happen, particles must <span className="text-playful-lime font-medium">collide with enough energy</span>. This minimum energy is called <span className="text-playful-blue font-medium">activation energy</span>.</p>
</div>
</div>
</div>

<div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 sm:p-5">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{background: 'var(--playful-blue)'}}>
<iconify-icon className="text-white" height="16" icon="solar:chat-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<div>
<p className="text-xs text-playful-blue font-medium mb-2">THINK ABOUT IT</p>
<p className="text-zinc-300 text-sm sm:text-base">Why do you think higher temperatures increase reaction rates?</p>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-playful-orange" height="18" icon="solar:lightbulb-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-zinc-500 text-sm italic">Hint: Think about particle movement...</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-700 h-4 rounded-b-xl mx-8"></div>
<div className="bg-zinc-600 h-2 rounded-b-lg mx-16"></div>
</div>
</div>

<p className="xl:hidden absolute bottom-8 left-1/2 -translate-x-1/2 font-caveat text-lg text-playful-coral text-center">AI explains, then tests — all in one flow</p>
</div>
</section>

<section className="py-32 md:py-40 relative overflow-hidden" id="flashcards">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="relative">

<div className="hidden lg:block absolute inset-0 opacity-30 blur-sm scale-90 transform -translate-y-8">
<div className="bg-zinc-800/50 rounded-2xl p-8 border border-zinc-700/30">
<div className="h-64 bg-zinc-900/50 rounded-xl"></div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">

<div className="hidden lg:block text-right fade-in-scroll">
<p className="font-caveat text-2xl text-playful-coral">Appears when memory matters</p>
<svg className="ml-auto mt-2" height="50" width="150">
<path className="annotation-arrow visible" d="M10 40 Q 80 30 140 15" fill="none" stroke="var(--playful-coral)" strokeWidth="2"></path>
<path d="M135 10 L 145 15 L 138 23" fill="none" stroke="var(--playful-coral)" strokeWidth="2"></path>
</svg>
</div>

<div className="fade-in-scroll">
<div className="glass-card bg-zinc-900/80 border border-zinc-700/50 rounded-2xl p-6 sm:p-8 shadow-2xl" style={{boxShadow: '0 25px 50px -12px rgba(139, 92, 246, 0.15)'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:bolt-linear" style={{color: 'var(--playful-orange)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="font-medium" style={{color: 'var(--playful-orange)'}}>Flashcard</span>
</div>
<span className="text-sm text-zinc-500">3 of 12</span>
</div>
<div className="mb-6">
<p className="text-zinc-400 text-sm mb-2">Question:</p>
<p className="text-xl font-medium">What is activation energy?</p>
</div>
<div className="bg-zinc-800/50 rounded-xl p-4 mb-6 border border-playful-lime/20">
<p className="text-zinc-400 text-sm mb-2">Answer:</p>
<p className="text-playful-lime">The minimum energy required for particles to react upon collision.</p>
</div>
<div className="flex gap-3 mb-6">
<button className="flex-1 py-3 rounded-xl font-medium transition-all hover:opacity-80" style={{background: 'rgba(248, 113, 113, 0.1)', color: 'var(--playful-coral)', border: '1px solid rgba(248, 113, 113, 0.2)'}}>Again</button>
<button className="flex-1 py-3 rounded-xl font-medium transition-all hover:opacity-80" style={{background: 'rgba(132, 204, 22, 0.1)', color: 'var(--playful-lime)', border: '1px solid rgba(132, 204, 22, 0.2)'}}>Got it</button>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500">
<iconify-icon height="16" icon="solar:refresh-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Spaced repetition active</span>
<div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full rounded-full" style={{width: '65%', background: 'linear-gradient(90deg, var(--playful-purple), var(--playful-blue))'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-6 mt-16">
<div className="text-center fade-in-scroll">
<div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{background: 'rgba(59, 130, 246, 0.1)'}}>
<iconify-icon height="24" icon="solar:target-linear" style={{color: 'var(--playful-blue)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2">Context-aware</h3>
<p className="text-sm text-zinc-500">Tests the exact concept you just learned</p>
</div>
<div className="text-center fade-in-scroll">
<div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{background: 'rgba(139, 92, 246, 0.1)'}}>
<iconify-icon height="24" icon="solar:clock-circle-linear" style={{color: 'var(--playful-purple)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2">Spaced repetition</h3>
<p className="text-sm text-zinc-500">AI schedules reviews at optimal times</p>
</div>
<div className="text-center fade-in-scroll">
<div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{background: 'rgba(132, 204, 22, 0.1)'}}>
<iconify-icon height="24" icon="solar:graph-up-linear" style={{color: 'var(--playful-lime)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2">Progress tracking</h3>
<p className="text-sm text-zinc-500">Every card mastered increases your score</p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 relative" id="fill-blanks">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="sticky top-[15vh]">
<div className="text-center mb-8 fade-in-scroll">
<p className="font-caveat text-xl text-playful-coral mb-2">Tested while you learn — not after.</p>
</div>
<div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 sm:p-8 glass-card fade-in-scroll" id="fill-blank-card">
<div className="flex items-center gap-3 mb-6">
<iconify-icon height="24" icon="solar:question-circle-linear" id="fill-icon" style={{color: 'var(--playful-blue)', strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-sm text-zinc-500">Complete the sentence</span>
</div>
<p className="text-lg sm:text-xl leading-relaxed" id="fill-sentence">
<span className="text-playful-purple font-medium">Catalysts</span> lower the 
                            <span className="inline-block px-3 py-1 rounded-lg transition-all duration-300" id="blank1" style={{background: 'rgba(59, 130, 246, 0.1)', borderBottom: '2px solid var(--playful-blue)'}}>
<span className="text-playful-blue">activation energy</span>
</span>
                            by providing an 
                            <span className="inline-block px-3 py-1 rounded-lg transition-all duration-300" id="blank2" style={{background: 'rgba(59, 130, 246, 0.1)', borderBottom: '2px solid var(--playful-blue)'}}>
<span className="text-playful-blue">alternative pathway</span>
</span>.
                        </p>
<div className="mt-6 p-4 rounded-xl opacity-0 transition-opacity duration-500" id="success-message" style={{background: 'rgba(132, 204, 22, 0.1)', border: '1px solid rgba(132, 204, 22, 0.2)'}}>
<div className="flex items-center gap-2">
<iconify-icon height="20" icon="solar:check-circle-linear" style={{color: 'var(--playful-lime)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-playful-lime text-sm">Perfect! You've demonstrated understanding of catalyst mechanisms.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 relative" id="exam-feedback" style={{minHeight: '150vh'}}>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 fade-in-scroll">
<p className="font-caveat text-xl text-playful-coral">Marked against real mark schemes — instantly.</p>
</div>
<div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 glass-card fade-in-scroll transition-all duration-500" id="student-answer">
<div className="flex items-center gap-3 mb-6">
<iconify-icon height="20" icon="solar:pen-linear" style={{color: 'var(--playful-blue)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="font-medium">Your Answer</span>
</div>
<div className="bg-zinc-800/50 rounded-xl p-4 mb-4">
<p className="text-sm text-zinc-400 mb-2">Question:</p>
<p className="font-medium">Explain how catalysts increase the rate of reaction. [6 marks]</p>
</div>
<div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
<p>Catalysts provide an alternative pathway for the reaction with a lower activation energy.</p>
<p>This means more particles have the required minimum energy to react upon collision.</p>
<p>As a result, there are more successful collisions per unit time, increasing the rate of reaction.</p>
</div>
</div>

<div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 glass-card slide-in-right" id="mark-scheme">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<iconify-icon height="20" icon="solar:diploma-linear" style={{color: 'var(--playful-purple)', strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="font-medium">Mark Scheme</span>
</div>
<span className="px-4 py-1.5 rounded-full font-semibold text-sm scale-in" id="score-badge" style={{background: 'linear-gradient(90deg, var(--playful-lime), #65a30d)', color: 'white'}}>5/6</span>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="shrink-0 mt-0.5" height="18" icon="solar:check-circle-linear" style={{color: 'var(--playful-lime)', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-playful-lime font-medium">Lowers activation energy</span> — 1 mark</span>
</div>
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="shrink-0 mt-0.5" height="18" icon="solar:check-circle-linear" style={{color: 'var(--playful-lime)', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-playful-lime font-medium">Alternative pathway</span> — 1 mark</span>
</div>
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="shrink-0 mt-0.5" height="18" icon="solar:check-circle-linear" style={{color: 'var(--playful-lime)', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-playful-lime font-medium">More particles have required energy</span> — 2 marks</span>
</div>
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="shrink-0 mt-0.5" height="18" icon="solar:check-circle-linear" style={{color: 'var(--playful-lime)', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-playful-lime font-medium">Successful collisions</span> — 1 mark</span>
</div>
<div className="flex items-start gap-3 text-sm">
<iconify-icon className="shrink-0 mt-0.5" height="18" icon="solar:close-circle-linear" style={{color: 'var(--playful-coral)', strokeWidth: '1.5'}} width="18"></iconify-icon>
<span><span className="text-playful-coral font-medium">Catalyst unchanged after reaction</span> — missing 1 mark</span>
</div>
</div>
<div className="mt-6 p-4 rounded-xl" style={{background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)'}}>
<div className="flex items-start gap-2">
<iconify-icon className="shrink-0 mt-0.5" height="18" icon="solar:lightbulb-linear" style={{color: 'var(--playful-blue)', strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm text-zinc-300"><span className="text-playful-blue font-medium">To get full marks:</span> Mention that catalysts are not used up in the reaction and can be reused.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 relative" id="comparison">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12">
<p className="text-xl text-zinc-500 mb-4 fade-in-scroll">Other tools stop here.</p>
<div className="flex flex-wrap justify-center gap-2 mb-8 fade-in-scroll">
<span className="px-4 py-2 rounded-full text-sm bg-zinc-800/50 text-zinc-500">Flashcards</span>
<span className="px-4 py-2 rounded-full text-sm bg-zinc-800/50 text-zinc-500">Quizzes</span>
<span className="px-4 py-2 rounded-full text-sm bg-zinc-800/50 text-zinc-500">Summaries</span>
</div>
<p className="text-xl font-medium mb-4 fade-in-scroll" style={{color: 'var(--playful-purple)'}}>BlurtAI keeps teaching.</p>
<div className="flex flex-wrap justify-center gap-2 fade-in-scroll">
<span className="px-4 py-2 rounded-full text-sm font-medium" style={{background: 'rgba(139, 92, 246, 0.2)', color: 'var(--playful-purple)'}}>Guided Lessons</span>
<span className="px-4 py-2 rounded-full text-sm font-medium" style={{background: 'rgba(59, 130, 246, 0.2)', color: 'var(--playful-blue)'}}>Adaptive Flow</span>
<span className="px-4 py-2 rounded-full text-sm font-medium" style={{background: 'rgba(132, 204, 22, 0.2)', color: 'var(--playful-lime)'}}>Exam Feedback</span>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden fade-in-scroll">
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-zinc-800">
<th className="text-left p-4 text-sm font-medium text-zinc-400">Feature</th>
<th className="p-4 text-sm font-medium text-zinc-400 text-center">Other Tools</th>
<th className="p-4 text-sm font-medium text-center" style={{background: 'rgba(139, 92, 246, 0.1)', color: 'var(--playful-purple)'}}>BlurtAI</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-zinc-800/50 comparison-row">
<td className="p-4 text-sm">Explains concepts</td>
<td className="p-4 text-center"><iconify-icon className="text-zinc-500" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></td>
<td className="p-4 text-center" style={{background: 'rgba(139, 92, 246, 0.05)'}}><iconify-icon height="20" icon="solar:check-circle-bold" style={{color: 'var(--playful-lime)'}} width="20"></iconify-icon></td>
</tr>
<tr className="border-b border-zinc-800/50 comparison-row">
<td className="p-4 text-sm">Tests with quizzes</td>
<td className="p-4 text-center"><iconify-icon className="text-zinc-500" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></td>
<td className="p-4 text-center" style={{background: 'rgba(139, 92, 246, 0.05)'}}><iconify-icon height="20" icon="solar:check-circle-bold" style={{color: 'var(--playful-lime)'}} width="20"></iconify-icon></td>
</tr>
<tr className="border-b border-zinc-800/50 comparison-row">
<td className="p-4 text-sm">Generates flashcards</td>
<td className="p-4 text-center"><iconify-icon className="text-zinc-500" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></td>
<td className="p-4 text-center" style={{background: 'rgba(139, 92, 246, 0.05)'}}><iconify-icon height="20" icon="solar:check-circle-bold" style={{color: 'var(--playful-lime)'}} width="20"></iconify-icon></td>
</tr>
<tr className="border-b border-zinc-800/50 comparison-row">
<td className="p-4 text-sm font-medium">Adapts to mistakes</td>
<td className="p-4 text-center"><iconify-icon className="text-zinc-600" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></td>
<td className="p-4 text-center" style={{background: 'rgba(139, 92, 246, 0.05)'}}><iconify-icon height="20" icon="solar:check-circle-bold" style={{color: 'var(--playful-lime)'}} width="20"></iconify-icon></td>
</tr>
<tr className="border-b border-zinc-800/50 comparison-row">
<td className="p-4 text-sm font-medium">Guides full lesson flow</td>
<td className="p-4 text-center"><iconify-icon className="text-zinc-600" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></td>
<td className="p-4 text-center" style={{background: 'rgba(139, 92, 246, 0.05)'}}><iconify-icon height="20" icon="solar:check-circle-bold" style={{color: 'var(--playful-lime)'}} width="20"></iconify-icon></td>
</tr>
<tr className="border-b border-zinc-800/50 comparison-row">
<td className="p-4 text-sm font-medium">Exam-style feedback</td>
<td className="p-4 text-center"><iconify-icon className="text-zinc-600" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></td>
<td className="p-4 text-center" style={{background: 'rgba(139, 92, 246, 0.05)'}}><iconify-icon height="20" icon="solar:check-circle-bold" style={{color: 'var(--playful-lime)'}} width="20"></iconify-icon></td>
</tr>
<tr className="comparison-row">
<td className="p-4 text-sm font-medium">UK curriculum aligned</td>
<td className="p-4 text-center"><iconify-icon className="text-zinc-600" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon></td>
<td className="p-4 text-center" style={{background: 'rgba(139, 92, 246, 0.05)'}}><iconify-icon height="20" icon="solar:check-circle-bold" style={{color: 'var(--playful-lime)'}} width="20"></iconify-icon></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 relative" id="subjects">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 fade-in-scroll">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Built for every level</h2>
<p className="text-zinc-400">From GCSE to university, BlurtAI adapts to your curriculum.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-playful-pink/50 transition-all duration-300 fade-in-scroll cursor-pointer">
<div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.2), rgba(236, 72, 153, 0.1))'}}>
<iconify-icon height="24" icon="solar:notebook-linear" style={{color: 'var(--playful-pink)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2">GCSE</h3>
<p className="text-sm text-zinc-500">Years 10-11</p>
</div>
<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-playful-purple/50 transition-all duration-300 fade-in-scroll cursor-pointer">
<div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))'}}>
<iconify-icon height="24" icon="solar:book-2-linear" style={{color: 'var(--playful-purple)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2">A-Level</h3>
<p className="text-sm text-zinc-500">Years 12-13</p>
</div>
<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-playful-blue/50 transition-all duration-300 fade-in-scroll cursor-pointer">
<div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1))'}}>
<iconify-icon height="24" icon="solar:square-academic-cap-linear" style={{color: 'var(--playful-blue)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2">Undergraduate</h3>
<p className="text-sm text-zinc-500">University level</p>
</div>
<div className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-playful-orange/50 transition-all duration-300 fade-in-scroll cursor-pointer">
<div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2), rgba(249, 115, 22, 0.1))'}}>
<iconify-icon height="24" icon="solar:pen-new-square-linear" style={{color: 'var(--playful-orange)', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="font-medium mb-2">Custom Subjects</h3>
<p className="text-sm text-zinc-500">Create your own</p>
</div>
</div>

<div className="text-center fade-in-scroll">
<p className="text-sm text-zinc-500 mb-4">Aligned with UK exam boards</p>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-5 py-2 rounded-full text-sm font-medium bg-zinc-800 border border-zinc-700 scale-in">AQA</span>
<span className="px-5 py-2 rounded-full text-sm font-medium bg-zinc-800 border border-zinc-700 scale-in">Edexcel</span>
<span className="px-5 py-2 rounded-full text-sm font-medium bg-zinc-800 border border-zinc-700 scale-in">OCR</span>
<span className="px-5 py-2 rounded-full text-sm font-medium bg-zinc-800 border border-zinc-700 scale-in">WJEC</span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 relative" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 fade-in-scroll">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Frequently asked questions</h2>
<p className="text-zinc-400">Everything you need to know about BlurtAI.</p>
</div>
<div className="space-y-3" id="faq-container">
<div className="faq-item bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden fade-in-scroll">
<button className="faq-trigger w-full px-6 py-5 flex items-center justify-between text-left" onclick="toggleFaq(this)">
<span className="font-medium">Is BlurtAI free to use?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 faq-icon" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5 hidden">
<p className="text-zinc-400 text-sm leading-relaxed">Yes! BlurtAI offers a free tier with access to core features including AI lessons, flashcards, and basic exam feedback. No credit card required to get started. Premium features are available with a subscription.</p>
</div>
</div>
<div className="faq-item bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden fade-in-scroll">
<button className="faq-trigger w-full px-6 py-5 flex items-center justify-between text-left" onclick="toggleFaq(this)">
<span className="font-medium">Is this just for GCSE?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 faq-icon" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5 hidden">
<p className="text-zinc-400 text-sm leading-relaxed">No, BlurtAI supports GCSE, A-Level, Undergraduate studies, and even custom subjects you create yourself. The AI adapts to the complexity and depth required for each level.</p>
</div>
</div>
<div className="faq-item bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden fade-in-scroll">
<button className="faq-trigger w-full px-6 py-5 flex items-center justify-between text-left" onclick="toggleFaq(this)">
<span className="font-medium">How are AI lessons different from ChatGPT?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 faq-icon" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5 hidden">
<p className="text-zinc-400 text-sm leading-relaxed">Unlike ChatGPT, BlurtAI provides structured, curriculum-aligned lessons that explain, test, and adapt in real-time — all in one guided flow. We don't just answer questions; we teach concepts, verify understanding, and provide exam-style feedback.</p>
</div>
</div>
<div className="faq-item bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden fade-in-scroll">
<button className="faq-trigger w-full px-6 py-5 flex items-center justify-between text-left" onclick="toggleFaq(this)">
<span className="font-medium">Can I create my own subjects?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 faq-icon" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5 hidden">
<p className="text-zinc-400 text-sm leading-relaxed">Absolutely! You can create custom subjects for any topic you want to learn. Upload your own materials, and BlurtAI will generate lessons, flashcards, and assessments tailored to your content.</p>
</div>
</div>
<div className="faq-item bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden fade-in-scroll">
<button className="faq-trigger w-full px-6 py-5 flex items-center justify-between text-left" onclick="toggleFaq(this)">
<span className="font-medium">Which exam boards do you support?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 faq-icon" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5 hidden">
<p className="text-zinc-400 text-sm leading-relaxed">We support AQA, Edexcel, OCR, and WJEC exam boards with content aligned to their specific curricula. Our lessons and mark schemes reflect the actual requirements of each board.</p>
</div>
</div>
<div className="faq-item bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden fade-in-scroll">
<button className="faq-trigger w-full px-6 py-5 flex items-center justify-between text-left" onclick="toggleFaq(this)">
<span className="font-medium">Does it work on mobile?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300 faq-icon" height="20" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="faq-content px-6 pb-5 hidden">
<p className="text-zinc-400 text-sm leading-relaxed">Yes! BlurtAI is fully responsive and works beautifully on phones, tablets, and desktops. Study on the bus, at home, or anywhere you have a few minutes to learn.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative" id="cta">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-scroll">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Start Learning Smarter Today</h2>
<p className="text-zinc-400 mb-8">Free to start. No card required.</p>
<button className="px-8 py-4 rounded-full text-white font-medium inline-flex items-center gap-3 transition-all hover:scale-105 gradient-animate" style={{background: 'linear-gradient(90deg, var(--playful-pink), var(--playful-purple), var(--playful-blue))', animation: 'pulse-glow 2s infinite'}}>
<iconify-icon height="20" icon="solar:square-academic-cap-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                    Get Started Free
                    <iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="border-t border-zinc-800 py-12">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-semibold text-sm" style={{background: 'linear-gradient(135deg, var(--playful-pink), var(--playful-purple), var(--playful-blue))'}}>B</div>
<span className="text-lg font-semibold tracking-tight" style={{background: 'linear-gradient(90deg, var(--playful-pink), var(--playful-purple), var(--playful-blue))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>BlurtAI</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-sm text-zinc-600">© 2025 BlurtAI. Made with ❤️ for UK students.</p>
</div>
</div>
</footer>


    </>
  );
}
