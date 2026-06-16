import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      // Initialize Vanta animations
      VANTA.DOTS({
        el: "#vanta-testimonial-1",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 100,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        color2: 0x4b5563,
        backgroundColor: 0x030712,
        size: 3,
        spacing: 30,
      });
      
      VANTA.DOTS({
        el: "#vanta-testimonial-2",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 100,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xe5e7eb,
        color2: 0x9ca3af,
        backgroundColor: 0x030712,
        size: 3.5,
        spacing: 25,
      });
      
      VANTA.DOTS({
        el: "#vanta-testimonial-3",
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 100,
        minWidth: 200,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xd1d5db,
        color2: 0x6b7280,
        backgroundColor: 0x030712,
        size: 4,
        spacing: 20,
      });
      
      // Carousel functionality
      const carousel = document.getElementById('carousel-container');
      const prevBtn = document.getElementById('prev-btn');
      const nextBtn = document.getElementById('next-btn');
      const dots = document.querySelectorAll('.carousel-dot');
      let currentIndex = 0;
      
      function updateCarousel() {
        const slideWidth = document.querySelector('#carousel-container > div').offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Update active dot
        dots.forEach((dot, index) => {
          if (index === currentIndex) {
            dot.classList.add('bg-white');
            dot.classList.remove('bg-gray-600');
          } else {
            dot.classList.remove('bg-white');
            dot.classList.add('bg-gray-600');
          }
        });
      }
      
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % 3;
        updateCarousel();
      });
      
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + 3) % 3;
        updateCarousel();
      });
      
      dots.forEach((dot) => {
        dot.addEventListener('click', () => {
          currentIndex = parseInt(dot.dataset.index);
          updateCarousel();
        });
      });
      
      window.addEventListener('resize', updateCarousel);
      updateCarousel();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

<div className="text-center mb-12">
<span className="px-3 py-1 bg-gray-800/80 rounded-full text-xs text-gray-400 mb-3 inline-block">TESTIMONIALS</span>
<h2 className="text-3xl font-bold text-white mb-3">What Our Clients Say</h2>
<div className="h-1 w-16 bg-gray-400 mx-auto mt-2 mb-4 rounded-full"></div>
<p className="text-gray-400 max-w-2xl mx-auto">Hear from the developers and companies who have transformed their projects with our platform.</p>
</div>

<div className="relative">

<div className="relative overflow-hidden">
<div className="flex transition-transform duration-300 ease-in-out" id="carousel-container">

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col">
<div className="h-24 relative" id="vanta-testimonial-1"></div>
<div className="p-6 bg-gray-900 flex-grow flex flex-col">
<div className="flex items-center mb-4">
<div className="text-yellow-400 flex">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
<p className="text-gray-400 text-sm italic mb-6 flex-grow">"The platform's performance has been exceptional. We've seen our load times decrease by 40% and our user engagement increase significantly since implementation."</p>
<div className="flex items-center mt-auto">
<div className="h-10 w-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-semibold">JD</div>
<div>
<h4 className="text-white text-sm font-medium">Jessica Dawson</h4>
<p className="text-gray-400 text-xs">CTO, TechFusion</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col">
<div className="h-24 relative" id="vanta-testimonial-2"></div>
<div className="p-6 bg-gray-900 flex-grow flex flex-col">
<div className="flex items-center mb-4">
<div className="text-yellow-400 flex">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
<p className="text-gray-400 text-sm italic mb-6 flex-grow">"Security was our primary concern, and this platform exceeded our expectations. The multi-layered approach and constant monitoring give us peace of mind we never had before."</p>
<div className="flex items-center mt-auto">
<div className="h-10 w-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-semibold">MR</div>
<div>
<h4 className="text-white text-sm font-medium">Michael Rodriguez</h4>
<p className="text-gray-400 text-xs">Security Lead, FinSecure</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex-shrink-0 px-4">
<div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-800 h-full flex flex-col">
<div className="h-24 relative" id="vanta-testimonial-3"></div>
<div className="p-6 bg-gray-900 flex-grow flex flex-col">
<div className="flex items-center mb-4">
<div className="text-yellow-400 flex">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
</div>
<p className="text-gray-400 text-sm italic mb-6 flex-grow">"The analytics capabilities have transformed how we make decisions. We can now see patterns and trends in real-time that were previously invisible to us."</p>
<div className="flex items-center mt-auto">
<div className="h-10 w-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center text-white font-semibold">SL</div>
<div>
<h4 className="text-white text-sm font-medium">Sarah Lin</h4>
<p className="text-gray-400 text-xs">Data Scientist, DataNova</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-8 items-center">
<button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition" id="prev-btn">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" fill-rule="evenodd"></path>
</svg>
</button>
<div className="flex items-center space-x-2 mx-4">
<button className="w-3 h-3 rounded-full bg-white carousel-dot active" data-index="0"></button>
<button className="w-3 h-3 rounded-full bg-gray-600 carousel-dot" data-index="1"></button>
<button className="w-3 h-3 rounded-full bg-gray-600 carousel-dot" data-index="2"></button>
</div>
<button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition" id="next-btn">
<svg className="h-5 w-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" fill-rule="evenodd"></path>
</svg>
</button>
</div>
</div>
</div>


    </>
  );
}
