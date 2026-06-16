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
        
        // Initialize VANTA.FOG
        VANTA.FOG({
            el: "#bg-animation",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            highlightColor: 0xd4a7f0,
            midtoneColor: 0x63c5b7,
            lowlightColor: 0x568bfa,
            blurFactor: 0.73,
            speed: 2.10,
            zoom: 0.50
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative overflow-hidden min-h-screen" id="bg-animation">

<div className="absolute inset-x-0 bottom-0 h-64 wave-bg -z-10 opacity-70"></div>
<div className="absolute inset-x-0 top-0 h-64 wave-bg-top -z-10 opacity-70"></div>

<nav className="container mx-auto px-6 py-6 relative z-10">
<div className="flex items-center justify-between fade-in">
<div className="text-2xl font-semibold text-gray-800">mindful<span className="text-[#A78BFA]">.</span></div>

<div className="md:hidden">
<button className="text-gray-600 focus:outline-none" id="menu-toggle">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="hidden md:flex space-x-8">
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Features</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Pricing</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Resources</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">About</a>
</div>
<div className="hidden md:flex items-center space-x-4">
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors" href="#">Login</a>
<a className="px-4 py-2 text-sm text-[#A78BFA] border border-[#A78BFA] rounded-full hover:bg-[#A78BFA] hover:text-white transition-colors" href="#">Sign Up</a>
</div>
</div>

<div className="md:hidden hidden pt-4 pb-2 fade-in" id="mobile-menu">
<div className="flex flex-col space-y-3 px-2 bg-white/80 backdrop-blur-sm rounded-lg p-4">
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Features</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Pricing</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Resources</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">About</a>
<a className="text-gray-600 hover:text-[#A78BFA] transition-colors py-2" href="#">Login</a>
<a className="text-center px-4 py-2 text-sm text-[#A78BFA] border border-[#A78BFA] rounded-full hover:bg-[#A78BFA] hover:text-white transition-colors" href="#">Sign Up</a>
</div>
</div>
</nav>

<section className="container mx-auto px-6 py-12 md:py-24 flex items-center justify-center min-h-[70vh] relative z-10">
<div className="max-w-3xl text-center relative z-10">

<div className="absolute top-1/4 -left-20 w-40 h-40 bg-[#A78BFA]/10 rounded-full blur-xl -z-10"></div>
<div className="absolute bottom-1/3 right-0 w-32 h-32 bg-[#A78BFA]/15 rounded-full blur-lg -z-10"></div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6 fade-in delay-1">
                    Find <span className="blur-text">Calm</span> in the Chaos
                </h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto fade-in delay-2">
                    Take back control of your mental well-being with guided meditations, daily check-ins, and science-backed tools for a calmer mind.
                </p>
<div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12 fade-in delay-3">
<a className="inline-block px-8 py-4 text-white font-medium bg-[#A78BFA] rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm bg-opacity-90" href="#">
                        Start Your Journey
                    </a>
<a className="inline-block px-8 py-4 text-gray-700 font-medium border border-[#E5E7EB] rounded-full hover:border-[#A78BFA] hover:text-[#A78BFA] transition-colors" href="#">
                        Learn More
                    </a>
</div>
<div className="flex items-center justify-center space-x-6 fade-in delay-4">
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/62.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<p className="text-sm text-gray-600">Join <span className="font-medium text-[#A78BFA]">10,000+</span> people finding peace</p>
</div>
</div>
</section>
</div>


    </>
  );
}
