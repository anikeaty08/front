import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        document.getElementById('menu-toggle').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Initialize VANTA.HALO
        VANTA.HALO({
            el: "#bg-container",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 0x0,
            size: 1.5,
            baseColor: 0xa78bfa,
            amplitudeFactor: 1.0
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="bg-container"></div>
<div className="relative z-10 min-h-screen">

<nav className="container mx-auto px-6 py-6 relative z-10">
<div className="flex items-center justify-between fade-in">
<div className="text-2xl font-semibold text-white">mindful<span className="text-[#A78BFA]">.</span></div>

<div className="md:hidden">
<button className="text-white focus:outline-none" id="menu-toggle">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-white/80 hover:text-white transition-colors" href="#">Features</a>
<a className="text-[#A78BFA] font-medium" href="#">Pricing</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">Resources</a>
<a className="text-white/80 hover:text-white transition-colors" href="#">About</a>
</div>
<div className="hidden md:flex items-center space-x-4">
<a className="text-white/80 hover:text-white transition-colors" href="#">Login</a>
<a className="px-4 py-2 text-sm text-[#A78BFA] border border-[#A78BFA] rounded-full hover:bg-[#A78BFA] hover:text-white transition-colors glass" href="#">Sign Up</a>
</div>
</div>

<div className="md:hidden hidden pt-4 pb-2 fade-in" id="mobile-menu">
<div className="flex flex-col space-y-3 px-2 glass rounded-lg p-4">
<a className="text-white/80 hover:text-white transition-colors py-2" href="#">Features</a>
<a className="text-[#A78BFA] font-medium py-2" href="#">Pricing</a>
<a className="text-white/80 hover:text-white transition-colors py-2" href="#">Resources</a>
<a className="text-white/80 hover:text-white transition-colors py-2" href="#">About</a>
<a className="text-white/80 hover:text-white transition-colors py-2" href="#">Login</a>
<a className="text-center px-4 py-2 text-sm text-[#A78BFA] border border-[#A78BFA] rounded-full hover:bg-[#A78BFA] hover:text-white transition-colors glass" href="#">Sign Up</a>
</div>
</div>
</nav>

<section className="container mx-auto px-6 py-12 md:py-24 relative z-10">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-5xl font-bold text-white mb-6 fade-in">
                    Mental Health Should Be <span className="text-[#A78BFA]">Accessible</span>
</h1>
<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto fade-in delay-1">
                    Choose the plan that fits your journey to better mental wellness
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="pricing-card card-border rounded-2xl p-8 fade-in delay-1">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white mb-2">Free Forever</h3>
<div className="text-4xl font-bold text-white mb-4">$0</div>
<p className="text-white/70">Perfect to get started</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Daily check-ins
                        </li>
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            5 guided meditations
                        </li>
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Basic journaling
                        </li>
</ul>
<button className="w-full py-3 px-6 border-2 border-[#A78BFA]/50 text-[#A78BFA] rounded-full font-medium hover:bg-[#A78BFA] hover:text-white transition-colors glass">
                        Get Started Free
                    </button>
</div>

<div className="pricing-card popular-card rounded-2xl p-8 relative fade-in delay-2">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="glass text-[#A78BFA] px-4 py-1 rounded-full text-sm font-medium border border-[#A78BFA]/30">Most Popular</span>
</div>
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white mb-2">Mindful Monthly</h3>
<div className="text-4xl font-bold text-white mb-1">$9.99</div>
<div className="text-white/70 mb-4">/month</div>
<p className="text-white/70">For regular practice</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Unlimited meditations
                        </li>
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Sleep sounds library
                        </li>
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Expert content access
                        </li>
</ul>
<button className="w-full py-3 px-6 bg-[#A78BFA] text-white rounded-full font-medium hover:bg-purple-600 transition-colors">
                        Try Free for 7 Days →
                    </button>
</div>

<div className="pricing-card card-border rounded-2xl p-8 fade-in delay-3">
<div className="text-center mb-8">
<h3 className="text-2xl font-bold text-white mb-2">Mindful Yearly</h3>
<div className="text-4xl font-bold text-white mb-1">$69.99</div>
<div className="text-white/70 mb-2">/year</div>
<div className="inline-block glass border border-green-400/30 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
                            Save 40%
                        </div>
<p className="text-white/70">Best value &amp; features</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Everything in Monthly
                        </li>
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Live therapy sessions
                        </li>
<li className="flex items-center text-white/80">
<svg className="w-5 h-5 text-[#A78BFA] mr-3" fill="currentColor" viewbox="0 0 20 20">
<path clip-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
                            Exclusive content series
                        </li>
</ul>
<button className="w-full py-3 px-6 border-2 border-[#A78BFA]/50 text-[#A78BFA] rounded-full font-medium hover:bg-[#A78BFA] hover:text-white transition-colors glass">
                        Try Free for 7 Days →
                    </button>
</div>
</div>

<div className="text-center mt-16 fade-in delay-4">
<p className="text-white/70 mb-6">All plans include a 7-day free trial. Cancel anytime.</p>
<div className="flex items-center justify-center space-x-6">
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#A78BFA]/30" src="https://randomuser.me/api/portraits/women/62.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#A78BFA]/30" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#A78BFA]/30" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<p className="text-sm text-white/70">Join <span className="font-medium text-[#A78BFA]">10,000+</span> people finding peace</p>
</div>
</div>
</section>
</div>


    </>
  );
}
