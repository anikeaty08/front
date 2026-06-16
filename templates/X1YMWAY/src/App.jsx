import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'sans': ['Inter', 'system-ui', 'sans-serif']
                    }
                }
            }
        }
    


        // Add entrance animations on load
        window.addEventListener('load', function() {
            const elements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
            elements.forEach((el, index) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    el.style.transition = 'all 0.8s ease-out';
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-[1200px] h-[630px] mx-auto bg-white flex overflow-hidden">

<div className="w-[600px] h-full relative animate-fade-in">
<img alt="Emergency care facility" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/10"></div>
</div>

<div className="w-[600px] h-full bg-blue-600 flex flex-col relative">

<div className="bg-white px-8 py-6 border-b border-gray-100 animate-slide-up flex items-center justify-center">

<svg className="logo-svg" fill="none" viewbox="0 0 400 80" xmlns="http://www.w3.org/2000/svg">

<rect fill="#DC2626" height="30" rx="4" width="30" x="10" y="25"></rect>
<rect fill="white" height="20" width="6" x="22" y="30"></rect>
<rect fill="white" height="6" width="16" x="17" y="35"></rect>

<text fill="#374151" fontFamily="Inter, sans-serif" fontSize="16" font-weight="700" x="55" y="35">PHYSICIANS</text>

<text fontFamily="Inter, sans-serif" fontSize="16" font-weight="700" x="55" y="55">
<tspan fill="#2563EB">PREM</tspan><tspan fill="#DC2626">I</tspan><tspan fill="#DC2626">ER</tspan>
</text>

<text fill="#6B7280" fontFamily="Inter, sans-serif" fontSize="12" font-weight="400" x="200" y="40">EMERGENCY CENTERS</text>
</svg>
</div>

<div className="flex-1 flex flex-col justify-center px-12 py-8">

<div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 mb-8 text-center animate-slide-up animate-delay-200">
<div className="text-white/90 text-lg font-medium">
                        JUNE 9-13
                    </div>
</div>

<h1 className="text-white text-4xl font-bold leading-tight mb-6 text-center animate-slide-up animate-delay-400">
                    Emergency care,<br/>
                    designed with<br/>
                    families in mind.
                </h1>

<p className="text-white/90 text-lg text-center mb-8 leading-relaxed animate-slide-up animate-delay-400">
                    Skip the wait and receive concierge-level<br/>
                    attention in our comfortable,<br/>
                    state-of-the-art facility.
                </p>

<div className="text-center animate-slide-up animate-delay-400">
<button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5">
                        Learn More About Our Services
                    </button>
</div>
</div>

<div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-tl-full"></div>
<div className="absolute top-1/2 right-0 w-2 h-24 bg-white/10 rounded-l-full"></div>
</div>
</div>


    </>
  );
}
