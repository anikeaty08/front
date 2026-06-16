import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    function nextSlide() {
      const slides = document.querySelectorAll('.slide');
      const indicators = document.querySelectorAll('.indicator');
      const activeSlide = document.querySelector('.slide.active');
      const activeIndex = Array.from(slides).indexOf(activeSlide);
      const nextIndex = (activeIndex + 1) % slides.length;
      
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(ind => {
        ind.classList.remove('bg-blue-500', 'w-8');
        ind.classList.add('bg-gray-600', 'w-2');
      });
      
      slides[nextIndex].classList.add('active');
      indicators[nextIndex].classList.remove('bg-gray-600', 'w-2');
      indicators[nextIndex].classList.add('bg-blue-500', 'w-8');
      
      document.getElementById('nextBtn').textContent = 
        nextIndex === slides.length - 1 ? 'Get Started' : 'Next';
    }
    
    function prevSlide() {
      const slides = document.querySelectorAll('.slide');
      const indicators = document.querySelectorAll('.indicator');
      const activeSlide = document.querySelector('.slide.active');
      const activeIndex = Array.from(slides).indexOf(activeSlide);
      const prevIndex = (activeIndex - 1 + slides.length) % slides.length;
      
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(ind => {
        ind.classList.remove('bg-blue-500', 'w-8');
        ind.classList.add('bg-gray-600', 'w-2');
      });
      
      slides[prevIndex].classList.add('active');
      indicators[prevIndex].classList.remove('bg-gray-600', 'w-2');
      indicators[prevIndex].classList.add('bg-blue-500', 'w-8');
      
      document.getElementById('nextBtn').textContent = 'Next';
    }
    
    function skipToLast() {
      const slides = document.querySelectorAll('.slide');
      const indicators = document.querySelectorAll('.indicator');
      const lastIndex = slides.length - 1;
      
      slides.forEach(slide => slide.classList.remove('active'));
      indicators.forEach(ind => {
        ind.classList.remove('bg-blue-500', 'w-8');
        ind.classList.add('bg-gray-600', 'w-2');
      });
      
      slides[lastIndex].classList.add('active');
      indicators[lastIndex].classList.remove('bg-gray-600', 'w-2');
      indicators[lastIndex].classList.add('bg-blue-500', 'w-8');
      
      document.getElementById('nextBtn').textContent = 'Get Started';
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative w-[320px] h-[650px] bg-black rounded-[45px] border border-white/10 overflow-hidden shadow-2xl">
<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-[30px] bg-black rounded-b-2xl z-10"></div>
<div className="bg-[#101010] h-full">

<div className="absolute top-12 left-0 right-0 z-10 flex justify-center space-x-2">
<div className="indicator h-1 rounded-full bg-blue-500 w-8 transition-all duration-300"></div>
<div className="indicator h-1 rounded-full bg-gray-600 w-2 transition-all duration-300"></div>
<div className="indicator h-1 rounded-full bg-gray-600 w-2 transition-all duration-300"></div>
</div>

<div className="absolute top-12 right-6 z-10">
<button className="text-gray-400 text-sm" onclick="skipToLast()">Skip</button>
</div>

<div className="h-full">

<div className="slide active h-full flex flex-col absolute inset-0">
<div className="flex-1 flex items-center justify-center pt-16 pb-4">
<div className="relative w-48 h-48">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 flex items-center justify-center">
<div className="w-20 h-20 rounded-full bg-yellow-400"></div>
</div>
</div>

<div className="absolute bottom-0 right-0">
<div className="w-28 h-16 bg-white rounded-full"></div>
<div className="w-16 h-16 bg-white rounded-full absolute -top-8 -left-2"></div>
<div className="w-16 h-16 bg-white rounded-full absolute -top-6 left-8"></div>
</div>

<div className="absolute inset-0 -z-10">
<div className="w-full h-full rounded-full bg-blue-500/10"></div>
</div>
</div>
</div>
<div className="px-8 pb-28">
<h1 className="text-white text-2xl font-bold mb-3">Real-time Weather Updates</h1>
<p className="text-gray-400 text-sm leading-relaxed">
              Get accurate weather forecasts with real-time updates for your location and anywhere in the world.
            </p>
</div>
</div>

<div className="slide h-full flex flex-col absolute inset-0">
<div className="flex-1 flex items-center justify-center pt-16 pb-4">
<div className="relative w-48 h-48">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-36 h-20 bg-gray-300 rounded-full mt-4"></div>
<div className="w-20 h-20 bg-gray-300 rounded-full absolute -top-2 left-2"></div>
<div className="w-20 h-20 bg-gray-300 rounded-full absolute -top-2 right-2"></div>

<div className="absolute bottom-4 left-10 w-1 h-10 bg-blue-400 rounded-full transform -rotate-12"></div>
<div className="absolute bottom-0 left-16 w-1 h-8 bg-blue-400 rounded-full"></div>
<div className="absolute bottom-2 left-24 w-1 h-12 bg-blue-400 rounded-full transform rotate-12"></div>
</div>

<div className="absolute inset-0 -z-10">
<div className="w-full h-full rounded-full bg-blue-500/10"></div>
</div>
</div>
</div>
<div className="px-8 pb-28">
<h1 className="text-white text-2xl font-bold mb-3">Detailed Forecasts</h1>
<p className="text-gray-400 text-sm leading-relaxed">
              Plan ahead with hourly and 7-day forecasts that include precipitation, humidity, and wind data.
            </p>
</div>
</div>

<div className="slide h-full flex flex-col absolute inset-0">
<div className="flex-1 flex items-center justify-center pt-16 pb-4">
<div className="relative w-48 h-48">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 bg-blue-500 rounded-t-full rounded-b-3xl rotate-45 flex items-center justify-center">
<div className="w-10 h-10 bg-white rounded-full -rotate-45"></div>
</div>
</div>

<div className="absolute inset-0 -z-10">
<div className="w-full h-full rounded-full bg-blue-500/10"></div>
</div>
</div>
</div>
<div className="px-8 pb-28">
<h1 className="text-white text-2xl font-bold mb-3">Location Based</h1>
<p className="text-gray-400 text-sm leading-relaxed">
              Get weather information for your current location or search for any place around the globe.
            </p>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 right-0 px-8 flex justify-between">
<button className="text-gray-500" onclick="prevSlide()">
<svg className="h-6 w-6" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="bg-blue-500 px-6 py-3 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 text-white font-medium" id="nextBtn" onclick="nextSlide()">
          Next
        </button>
</div>
</div>
<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[30%] h-1 bg-gray-600 rounded-full"></div>
</div>

    </>
  );
}
