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
                    },
                    colors: {
                        'dark-bg': '#0B0C10',
                        'neon-cyan': '#00FFF7',
                        'neon-magenta': '#FF00C8'
                    }
                }
            }
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

        // Card hover effects
        document.querySelectorAll('.pricing-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                if (card.classList.contains('scale-105')) {
                    card.style.transform = 'scale(1.05)';
                } else {
                    card.style.transform = 'translateY(0) scale(1)';
                }
            });
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
<path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0, 255, 247, 0.05)" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
<line className="grid-line" style={{animationDelay: '0.5s'}} x1="0" x2="100%" y1="25%" y2="25%"></line>
<line className="grid-line" style={{animationDelay: '1s'}} x1="0" x2="100%" y1="75%" y2="75%"></line>
<line className="grid-line" style={{animationDelay: '1.5s'}} x1="25%" x2="25%" y1="0" y2="100%"></line>
<line className="grid-line" style={{animationDelay: '2s'}} x1="75%" x2="75%" y1="0" y2="100%"></line>
</svg>

<div className="relative z-10 text-center pt-16 pb-8">
<h1 className="text-5xl lg:text-7xl font-bold mb-4 neon-text-cyan">PRICING</h1>
<p className="text-xl text-white/70 max-w-2xl mx-auto px-4">Choose your power level. Upgrade your digital presence with our cutting-edge solutions.</p>
<div className="w-24 h-px bg-gradient-to-r from-neon-cyan to-neon-magenta mx-auto mt-8"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="pricing-card neon-border bg-dark-bg/50 backdrop-blur-sm p-8 transition-all duration-500 hover-glow" style={{animationDelay: '0.2s'}}>
<div className="text-center mb-8">
<h3 className="text-2xl font-bold mb-2">BASIC</h3>
<div className="w-12 h-px bg-neon-cyan mx-auto mb-6"></div>
<div className="text-5xl font-bold neon-text-cyan mb-2">$29</div>
<p className="text-white/60">/month</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        5 Projects
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        10GB Storage
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        Basic Support
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        API Access
                    </li>
</ul>
<button className="w-full py-4 border border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300">
                    SELECT BASIC
                </button>
</div>

<div className="pricing-card neon-border-magenta bg-dark-bg/50 backdrop-blur-sm p-8 transition-all duration-500 hover-glow-magenta transform scale-105" style={{animationDelay: '0.4s'}}>
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="cta-gradient px-6 py-2 text-sm font-bold text-dark-bg">POPULAR</span>
</div>
<div className="text-center mb-8">
<h3 className="text-2xl font-bold mb-2">PRO</h3>
<div className="w-12 h-px bg-neon-magenta mx-auto mb-6"></div>
<div className="text-5xl font-bold neon-text-magenta mb-2">$79</div>
<p className="text-white/60">/month</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-magenta rounded-full mr-3"></span>
                        25 Projects
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-magenta rounded-full mr-3"></span>
                        100GB Storage
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-magenta rounded-full mr-3"></span>
                        Priority Support
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-magenta rounded-full mr-3"></span>
                        Advanced API
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-magenta rounded-full mr-3"></span>
                        Analytics
                    </li>
</ul>
<button className="w-full py-4 cta-gradient text-dark-bg font-bold hover:opacity-90 transition-all duration-300">
                    SELECT PRO
                </button>
</div>

<div className="pricing-card neon-border bg-dark-bg/50 backdrop-blur-sm p-8 transition-all duration-500 hover-glow" style={{animationDelay: '0.6s'}}>
<div className="text-center mb-8">
<h3 className="text-2xl font-bold mb-2">ENTERPRISE</h3>
<div className="w-12 h-px bg-neon-cyan mx-auto mb-6"></div>
<div className="text-5xl font-bold neon-text-cyan mb-2">$199</div>
<p className="text-white/60">/month</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        Unlimited Projects
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        1TB Storage
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        24/7 Support
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        Custom API
                    </li>
<li className="flex items-center">
<span className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></span>
                        White Label
                    </li>
</ul>
<button className="w-full py-4 border border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan hover:text-dark-bg transition-all duration-300">
                    SELECT ENTERPRISE
                </button>
</div>
</div>

<div className="text-center mt-16">
<p className="text-white/60 mb-8">Need a custom solution? We've got you covered.</p>
<button className="px-12 py-4 border border-neon-magenta text-neon-magenta font-bold hover:bg-neon-magenta hover:text-dark-bg transition-all duration-300">
                CONTACT SALES
            </button>
</div>
</div>

<div className="fixed pointer-events-none w-96 h-96 bg-gradient-radial from-neon-cyan/10 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out opacity-0" id="mouse-gradient"></div>


    </>
  );
}
