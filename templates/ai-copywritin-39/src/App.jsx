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
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.perspective-1000': { perspective: '1000px' },
'.rotate-y-12': { transform: 'rotateY(12deg)' },
'.rotate-z-6': { transform: 'rotateZ(6deg)' },
'.transform-style-3d': { transformStyle: 'preserve-3d' }
});
}
]
};



      // 1. Interactive Spotlight
      const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const x = Math.round((clientX / window.innerWidth) * 100);
          const y = Math.round((clientY / window.innerHeight) * 100);

          document.documentElement.style.setProperty('--cursor-x', `${clientX}px`);
          document.documentElement.style.setProperty('--cursor-y', `${clientY}px`);
      };

      const handleCardHover = (e) => {
          const cards = document.getElementsByClassName("spotlight-card");
          for(const card of cards) {
              const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
          };
      }

      window.addEventListener('mousemove', (e) => {
          handleMouseMove(e);
          handleCardHover(e);
      });

      // 2. 3D Tilt Effect
      const tiltCards = document.querySelectorAll('.tilt-card');
      tiltCards.forEach(card => {
          card.addEventListener('mousemove', (e) => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const rotateX = ((y - centerY) / centerY) * -10; 
              const rotateY = ((x - centerX) / centerX) * 10;

              card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
          });

          card.addEventListener('mouseleave', () => {
              card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
          });
      });

      // 3. Typewriter Effect Logic
      const typewriterElement = document.getElementById('typewriter-content');
      const badgeText = document.querySelector('#ai-badge span');
      const badgeIcon = document.querySelector('#ai-badge iconify-icon');
      
      const textToType = "Creativity is no longer bound by technical skill. With the right tools, ideas flow seamlessly from mind to canvas, empowering creators to build the impossible. The boundaries between human imagination and artificial intelligence are dissolving, creating a new era of expression.";
      let typeIndex = 0;

      function typeWriter() {
        if (typeIndex < textToType.length) {
          typewriterElement.textContent += textToType.charAt(typeIndex);
          typeIndex++;
          setTimeout(typeWriter, Math.random() * 30 + 30); // Random typing speed
        } else {
            // Typing finished
            document.getElementById('ai-badge').classList.add('opacity-0');
            typewriterElement.classList.remove('typewriter-cursor');
            
            setTimeout(() => {
                // Reset to loop
                typewriterElement.textContent = "";
                typeIndex = 0;
                document.getElementById('ai-badge').classList.remove('opacity-0');
                typewriterElement.classList.add('typewriter-cursor');
                setTimeout(typeWriter, 1000);
            }, 5000);
        }
      }
      
      // Start typing after a small delay
      setTimeout(typeWriter, 1000);

      // 4. Pricing Toggle Logic
      let isYearly = false;
      function togglePricing() {
          isYearly = !isYearly;
          const toggleCircle = document.getElementById('toggle-circle');
          const prices = document.querySelectorAll('.price-value');
          
          if (isYearly) {
              toggleCircle.classList.add('translate-x-6');
              toggleCircle.classList.remove('translate-x-1');
              toggleCircle.classList.add('bg-indigo-500');
              toggleCircle.classList.remove('bg-white');
              document.getElementById('yearly-label').classList.add('text-white');
              document.getElementById('monthly-label').classList.remove('text-white');
          } else {
              toggleCircle.classList.remove('translate-x-6');
              toggleCircle.classList.add('translate-x-1');
              toggleCircle.classList.remove('bg-indigo-500');
              toggleCircle.classList.add('bg-white');
              document.getElementById('yearly-label').classList.remove('text-white');
              document.getElementById('monthly-label').classList.add('text-white');
          }

          prices.forEach(price => {
              const newVal = isYearly ? price.dataset.yearly : price.dataset.monthly;
              // Animate number change simply by swapping text
              price.style.opacity = '0';
              setTimeout(() => {
                  price.textContent = '$' + newVal;
                  price.style.opacity = '1';
              }, 150);
          });
      }

      // 5. Mobile Menu Logic
      function toggleMobileMenu() {
          const menu = document.getElementById('mobile-menu');
          const icon = document.querySelector('#mobile-menu-btn iconify-icon');
          
          if (menu.classList.contains('translate-y-[-100%]')) {
              menu.classList.remove('translate-y-[-100%]');
              icon.setAttribute('icon', 'lucide:x');
          } else {
              menu.classList.add('translate-y-[-100%]');
              icon.setAttribute('icon', 'lucide:menu');
          }
      }

      // 6. Modal Logic
      function toggleModal(modalID) {
          const modal = document.getElementById(modalID);
          if (modal.classList.contains('hidden')) {
              modal.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
          } else {
              modal.classList.add('hidden');
              document.body.style.overflow = 'auto';
          }
      }

      // 7. Particle System (Preserved)
      const canvas=document.getElementById("particles-canvas"),ctx=canvas.getContext("2d");let particles=[];function resize(){canvas.width=window.innerWidth,canvas.height=window.innerHeight}function createParticles(){particles=[];const e=Math.floor(window.innerWidth*window.innerHeight/2e4);for(let t=0;t<e;t++)particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,size:Math.random()*1.5+.5,alpha:Math.random()*.5+.1})}function animate(){ctx.clearRect(0,0,canvas.width,canvas.height),particles.forEach(e=>{e.x+=e.vx,e.y+=e.vy,e.x<0&&(e.x=canvas.width),e.x>canvas.width&&(e.x=0),e.y<0&&(e.y=canvas.height),e.y>canvas.height&&(e.y=0),ctx.beginPath(),ctx.arc(e.x,e.y,e.size,0,2*Math.PI),ctx.fillStyle=`rgba(255, 255, 255, ${e.alpha})`,ctx.fill()}),requestAnimationFrame(animate)}window.addEventListener("resize",()=>{resize(),createParticles()}),resize(),createParticles(),animate();
    
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
      

<div className="cursor-glow fixed inset-0 pointer-events-none z-0 transition-opacity duration-300" id="cursor-glow"></div>
<canvas className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30" id="particles-canvas"></canvas>
<div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse z-0 pointer-events-none"></div>
<div className="fixed bottom-0 right-1/4 w-[30rem] h-[30rem] bg-fuchsia-500/10 rounded-full blur-[120px] animate-pulse z-0 pointer-events-none" style={{animationDelay: '2s'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 z-50" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-white">
<iconify-icon height="18" icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-white">
            LEXICON.
          </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
</div>

<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" onclick="toggleModal('auth-modal')">
            Sign in
          </button>
<button className="group relative px-4 py-2 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-neutral-200" onclick="toggleModal('auth-modal')">
<span className="relative z-10">Get Started</span>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
</div>

<button className="md:hidden text-white z-50 relative" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform translate-y-[-100%] transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 text-xl font-medium" id="mobile-menu">
<a className="text-white" href="#features" onclick="toggleMobileMenu()">Features</a>
<a className="text-white" href="#pricing" onclick="toggleMobileMenu()">Pricing</a>
<a className="text-white" href="#" onclick="toggleMobileMenu()">Manifesto</a>
<div className="h-px w-20 bg-white/10 my-4"></div>
<button className="text-neutral-400" onclick="toggleMobileMenu(); toggleModal('auth-modal')">Sign In</button>
<button className="px-8 py-3 bg-white text-black rounded-full" onclick="toggleMobileMenu(); toggleModal('auth-modal')">Get Started</button>
</div>
</nav>

<div className="fixed inset-0 z-[60] hidden" id="auth-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="toggleModal('auth-modal')"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 animate-float">
<div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500"></div>
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white" onclick="toggleModal('auth-modal')">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
<div className="text-center mb-8">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4 border border-white/10">
<iconify-icon className="text-indigo-400" icon="lucide:user" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Welcome Back</h3>
<p className="text-neutral-500 text-sm">Enter your details to access your workspace.</p>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Email address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="name@company.com" type="email"/>
</div>
<button className="w-full py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                        Continue with Email
                    </button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-[#0a0a0a] px-2 text-neutral-600">Or continue with</span></div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:github" width="16"></iconify-icon> GitHub
                        </button>
<button className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:chrome" width="16"></iconify-icon> Google
                        </button>
</div>
</div>
</div>
</div>
</div>

<section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
          Lexicon AI 2.0 is now available
          <iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
          Craft content
          <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400 text-shimmer">
            at the speed of thought.
          </span>
</h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Experience the first AI writing assistant that understands your brand
          voice. Generate SEO-optimized articles, emails, and copy in seconds.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="px-8 py-3.5 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-200 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" onclick="toggleModal('auth-modal')">
            Start Writing Free
            <iconify-icon height="16" icon="lucide:zap" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-white font-medium text-sm hover:border-neutral-700 transition-colors flex items-center gap-2 group">
            View Showreel
            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="lucide:play" width="16"></iconify-icon>
</button>
</div>

<div className="relative max-w-5xl mx-auto perspective-1000">
<div className="relative bg-[#0d0d0d] rounded-[1.5rem] border border-white/10 shadow-2xl overflow-hidden aspect-[16/10] group tilt-card spotlight-card">
<div className="spotlight-border"></div>
<div className="spotlight-border"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-20 pointer-events-none"></div>

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="mx-auto w-64 h-5 rounded bg-white/5 flex items-center justify-center text-[10px] text-neutral-500">
                lexicon.ai/editor/future-of-ai
              </div>
</div>

<div className="flex h-full">

<div className="w-64 border-r border-white/5 bg-white/[0.01] p-4 hidden md:block">
<div className="space-y-4">
<div className="h-8 w-8 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="lucide:command" width="16"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-20 bg-white/10 rounded"></div>
<div className="h-2 w-32 bg-white/5 rounded"></div>
<div className="h-2 w-24 bg-white/5 rounded"></div>
</div>
</div>
</div>

<div className="flex-1 p-8 md:p-12 relative overflow-hidden text-left">
<div className="space-y-6">
<h1 className="text-3xl font-medium text-white/90">The Future of Generative Art</h1>
<div className="typewriter-cursor text-neutral-400 font-light leading-relaxed text-lg font-mono" id="typewriter-content">

</div>
</div>

<div className="absolute bottom-8 right-8 h-10 px-4 bg-indigo-600 rounded-full flex items-center gap-2 text-xs font-medium text-white shadow-lg shadow-indigo-600/20 transition-opacity duration-300 opacity-100" id="ai-badge">
<iconify-icon className="animate-spin-slow" icon="lucide:stars" width="14"></iconify-icon>
<span>AI Generating...</span>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-neutral-800/50 blur-xl rounded-[100%] -z-10"></div>
</div>
</div>
</section>

<div className="diagonal-section bg-neutral-900/50 border-y border-white/5 relative z-10 py-16 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-neutral-500 font-medium mb-8">
          TRUSTED BY INNOVATIVE TEAMS
        </p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            ACME
            <span className="font-light">CORP</span>
</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            KROMA
          </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            NEXUS
          </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            VERTEX
          </div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            ORBITAL
          </div>
</div>
</div>
</div>

<section className="py-32 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Beyond simple
            <span className="text-neutral-500">autocomplete.</span>
</h2>
<p className="text-neutral-400 text-lg max-w-xl font-light">
            Our model is trained on high-converting copy, not just internet
            noise. It understands context, tone, and strategic intent.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="features-grid">

<div className="spotlight-card group rounded-2xl bg-white/[0.03] border border-white/5 p-8 hover:bg-white/[0.06] transition-colors relative tilt-card">
<div className="spotlight-border"></div>
<div className="h-12 w-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Contextual Awareness
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Lexicon remembers previous paragraphs and maintains consistency
              throughout long-form content.
            </p>
</div>

<div className="spotlight-card group rounded-2xl bg-white/[0.03] border border-white/5 p-8 hover:bg-white/[0.06] transition-colors relative tilt-card">
<div className="spotlight-border"></div>
<div className="h-12 w-12 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:wand-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Tone Matching</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Upload a sample of your writing, and our AI will mimic your unique
              style perfectly.
            </p>
</div>

<div className="spotlight-card group rounded-2xl bg-white/[0.03] border border-white/5 p-8 hover:bg-white/[0.06] transition-colors relative tilt-card">
<div className="spotlight-border"></div>
<div className="h-12 w-12 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Multilingual SEO
            </h3>
<p className="text-sm text-neutral-400 leading-relaxed">
              Generate native-quality content in 30+ languages with built-in
              keyword optimization.
            </p>
</div>

<div className="md:col-span-3 spotlight-card group rounded-2xl bg-white/[0.03] border border-white/5 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 mt-6 overflow-hidden tilt-card">
<div className="spotlight-border"></div>
<div className="flex-1 space-y-6 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-300">
<iconify-icon icon="lucide:zap" width="12"></iconify-icon>
                Workflow Automation
              </div>
<h3 className="text-3xl font-medium text-white">
                Connect to your tools
              </h3>
<p className="text-neutral-400 text-lg font-light leading-relaxed">
                Don't just write. Publish. Lexicon integrates directly with CMS
                platforms like WordPress, Ghost, and Webflow to streamline your
                publishing pipeline.
              </p>
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors" href="#">
                Explore Integrations
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="flex-1 relative w-full h-64 md:h-auto perspective-1000">
<div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
<div className="grid grid-cols-3 gap-4 transform rotate-y-12 rotate-z-6 scale-90 opacity-80">

<div className="aspect-square bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-4xl animate-float">
<iconify-icon className="text-blue-500" icon="lucide:file-text"></iconify-icon>
</div>
<div className="aspect-square bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-4xl animate-float" style={{animationDelay: '1s'}}>
<iconify-icon className="text-yellow-500" icon="lucide:mail"></iconify-icon>
</div>
<div className="aspect-square bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-4xl animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-green-500" icon="lucide:slack"></iconify-icon>
</div>
<div className="aspect-square bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-4xl animate-float" style={{animationDelay: '0.5s'}}>
<iconify-icon className="text-sky-500" icon="lucide:twitter"></iconify-icon>
</div>
<div className="aspect-square bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-4xl animate-float" style={{animationDelay: '1.5s'}}>
<iconify-icon className="text-pink-500" icon="lucide:instagram"></iconify-icon>
</div>
<div className="aspect-square bg-neutral-900 rounded-xl border border-white/10 flex items-center justify-center text-4xl animate-float" style={{animationDelay: '2.5s'}}>
<iconify-icon className="text-blue-700" icon="lucide:linkedin"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gradient-to-b from-black to-neutral-950 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
            Simple, transparent
            <span className="text-neutral-500">pricing.</span>
</h2>
<p className="text-neutral-400 mb-8">Start for free, scale as you grow.</p>

<div className="flex items-center justify-center gap-4">
<span className="text-sm font-medium text-neutral-400" id="monthly-label">Monthly</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black" id="pricing-toggle" onclick="togglePricing()">
<span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition-transform" id="toggle-circle"></span>
</button>
<span className="text-sm font-medium text-white" id="yearly-label">Yearly <span className="text-indigo-400 text-xs ml-1 font-bold">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">

<div className="tilt-card group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
<div className="tilt-content">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Starter</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-4xl font-semibold text-white tracking-tight">
                    $0
                  </span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<p className="text-sm text-neutral-400 mt-2">
                  Perfect for individuals.
                </p>
</div>
<ul className="space-y-4 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                  5,000 words per month
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                  10+ templates
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                  Basic support
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors" onclick="toggleModal('auth-modal')">
                Get Started
              </button>
</div>
</div>

<div className="tilt-card group relative bg-neutral-900/80 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-8 shadow-[0_0_50px_-12px_rgba(99,102,241,0.2)]">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide text-white uppercase">
              Most Popular
            </div>
<div className="tilt-content">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Pro</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-4xl font-semibold text-white tracking-tight price-value" data-monthly="29" data-yearly="24">
                    $29
                  </span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<p className="text-sm text-neutral-400 mt-2">
                  For power users and creators.
                </p>
</div>
<ul className="space-y-4 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon>
                  Unlimited words
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon>
                  Advanced tone matching
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon>
                  SEO Mode
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-indigo-400" icon="lucide:check"></iconify-icon>
                  Plagiarism checker
                </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10" onclick="toggleModal('auth-modal')">
                Start Pro Trial
              </button>
</div>
</div>

<div className="tilt-card group relative bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
<div className="tilt-content">
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Team</h3>
<div className="flex items-baseline gap-1 mt-2">
<span className="text-4xl font-semibold text-white tracking-tight price-value" data-monthly="99" data-yearly="79">
                    $99
                  </span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<p className="text-sm text-neutral-400 mt-2">
                  For agencies and startups.
                </p>
</div>
<ul className="space-y-4 mb-8 text-sm text-neutral-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                  5 Team seats
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                  Collaborative workspace
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                  API Access
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check"></iconify-icon>
                  Priority support
                </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                Contact Sales
              </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white">
<iconify-icon icon="lucide:sparkles" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter text-white">
                LEXICON.
              </span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of storytellers with artificial
              intelligence. Built for quality, speed, and creativity.
            </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#features">
                  Features
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#pricing">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Changelog
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Privacy
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Security
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-neutral-600 text-xs">
            © 2024 Lexicon AI Inc. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
