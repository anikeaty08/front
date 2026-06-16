import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'mono': ['Space Mono', 'monospace']
                    }
                }
            }
        }
    


        // Word by word animation
        function animateWords() {
            const words = document.querySelectorAll('.word');
            
            words.forEach(word => {
                const delay = parseInt(word.getAttribute('data-delay')) || 0;
                
                setTimeout(() => {
                    word.style.animation = 'word-appear 0.8s ease-out forwards';
                }, delay);
            });
        }

        // Mouse interaction
        let mouseX = 0, mouseY = 0;
        const gradient = document.getElementById('mouse-gradient');
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            gradient.style.left = (mouseX - 192) + 'px';
            gradient.style.top = (mouseY - 192) + 'px';
            gradient.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            gradient.style.opacity = '0';
        });

        // Word hover effects
        document.querySelectorAll('.word').forEach(word => {
            word.addEventListener('mouseenter', () => {
                word.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
            });
            
            word.addEventListener('mouseleave', () => {
                word.style.textShadow = 'none';
            });
        });

        // Initialize animations
        window.addEventListener('load', () => {
            setTimeout(animateWords, 500);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="60" id="grid" patternunits="userSpaceOnUse" width="60">
<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>

<line className="grid-line" style={{animationDelay: '0.5s'}} x1="0" x2="100%" y1="20%" y2="20%"></line>
<line className="grid-line" style={{animationDelay: '1s'}} x1="0" x2="100%" y1="80%" y2="80%"></line>
<line className="grid-line" style={{animationDelay: '1.5s'}} x1="20%" x2="20%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: '2s'}} x1="80%" x2="80%" y1="0" y2="100%"></line>

<circle className="detail-dot" cx="20%" cy="20%" r="2" style={{animationDelay: '3s'}}></circle>
<circle className="detail-dot" cx="80%" cy="20%" r="2" style={{animationDelay: '3.2s'}}></circle>
<circle className="detail-dot" cx="20%" cy="80%" r="2" style={{animationDelay: '3.4s'}}></circle>
<circle className="detail-dot" cx="80%" cy="80%" r="2" style={{animationDelay: '3.6s'}}></circle>
</svg>

<nav className="fixed left-0 top-0 h-full w-64 bg-black/90 backdrop-blur-sm border-r border-white/10 z-20 p-8">
<div className="nav-item mb-12" style={{animationDelay: '0.2s'}}>
<h2 className="text-2xl font-bold">SYSTEM</h2>
<div className="w-8 h-px bg-white/30 mt-2"></div>
</div>
<ul className="space-y-6">
<li className="nav-item" style={{animationDelay: '0.4s'}}>
<a className="block text-lg hover:text-white/80 transition-colors" href="#">HOME</a>
</li>
<li className="nav-item" style={{animationDelay: '0.6s'}}>
<a className="block text-lg hover:text-white/80 transition-colors" href="#">ABOUT</a>
</li>
<li className="nav-item" style={{animationDelay: '0.8s'}}>
<a className="block text-lg hover:text-white/80 transition-colors" href="#">SERVICES</a>
</li>
<li className="nav-item" style={{animationDelay: '1s'}}>
<a className="block text-lg hover:text-white/80 transition-colors" href="#">PROJECTS</a>
</li>
<li className="nav-item" style={{animationDelay: '1.2s'}}>
<a className="block text-lg hover:text-white/80 transition-colors" href="#">CONTACT</a>
</li>
</ul>
<div className="absolute bottom-8 left-8 nav-item" style={{animationDelay: '1.4s'}}>
<div className="text-sm opacity-60">
<p>v2.1.0</p>
<p>ONLINE</p>
</div>
</div>
</nav>

<div className="floating-element" style={{top: '25%', left: '35%', animationDelay: '5s'}}></div>
<div className="floating-element" style={{top: '60%', left: '85%', animationDelay: '5.5s'}}></div>
<div className="floating-element" style={{top: '40%', left: '30%', animationDelay: '6s'}}></div>
<div className="floating-element" style={{top: '75%', left: '90%', animationDelay: '6.5s'}}></div>

<div className="relative z-10 min-h-screen ml-64 flex flex-col justify-center items-center px-16 py-20">

<div className="text-center max-w-4xl mx-auto">
<div className="mb-8">
<h2 className="text-sm font-normal text-white/60 uppercase tracking-[0.3em] mb-4">
<span className="word" data-delay="0">DIGITAL</span>
<span className="word" data-delay="200">SOLUTIONS</span>
</h2>
<div className="w-16 h-px bg-white/30 mx-auto"></div>
</div>
<h1 className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight mb-8">
<div className="mb-4">
<span className="word" data-delay="800">CREATE</span>
</div>
<div className="mb-4">
<span className="word" data-delay="1200">INNOVATE</span>
</div>
<div className="text-4xl lg:text-5xl font-normal text-white/80">
<span className="word" data-delay="1600">DOMINATE</span>
</div>
</h1>
<p className="text-xl leading-relaxed text-white/70 mb-12 max-w-2xl mx-auto">
<span className="word" data-delay="2000">Building</span>
<span className="word" data-delay="2200">the</span>
<span className="word" data-delay="2400">future</span>
<span className="word" data-delay="2600">through</span>
<span className="word" data-delay="2800">cutting-edge</span>
<span className="word" data-delay="3000">technology</span>
<span className="word" data-delay="3200">and</span>
<span className="word" data-delay="3400">innovative</span>
<span className="word" data-delay="3600">design.</span>
</p>

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0" style={{animation: 'word-appear 1s ease-out forwards', animationDelay: '4s'}}>
<button className="px-8 py-4 bg-white text-black font-bold text-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
                    GET STARTED
                </button>
<button className="px-8 py-4 border border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                    LEARN MORE
                </button>
</div>
<div className="mt-12 text-sm text-white/50 opacity-0" style={{animation: 'word-appear 1s ease-out forwards', animationDelay: '4.5s'}}>
<p>SCROLL TO EXPLORE</p>
<div className="w-px h-8 bg-white/30 mx-auto mt-4"></div>
</div>
</div>
</div>

<div className="fixed pointer-events-none w-96 h-96 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out opacity-0" id="mouse-gradient"></div>


    </>
  );
}
