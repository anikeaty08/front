import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('slider-track');
            const progressBar = document.getElementById('scroll-progress');
            const section = document.getElementById('facilities-section');

            // Handle progress bar update
            const updateProgress = () => {
                if (window.innerWidth >= 768) return; // Desktop view uses grid
                
                const maxScroll = track.scrollWidth - track.clientWidth;
                if (maxScroll <= 0) return;
                
                // Calculate percentage, keeping a minimum width of 15% for the first item
                let progress = (track.scrollLeft / maxScroll) * 100;
                progress = Math.max(15, progress); 
                
                progressBar.style.width = `${progress}%`;
            };

            track.addEventListener('scroll', updateProgress);
            
            // Visual hint animation when section enters viewport
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && window.innerWidth < 768) {
                    // Small delay, then nudge the scroll to show it's a slider
                    setTimeout(() => {
                        track.scrollBy({ left: 40, behavior: 'smooth' });
                        
                        // Return to start after nudge
                        setTimeout(() => {
                            track.scrollBy({ left: -40, behavior: 'smooth' });
                        }, 500);
                        
                    }, 800);
                    
                    // Disconnect after first trigger
                    observer.disconnect();
                }
            }, { threshold: 0.3 });

            observer.observe(section);
            
            // Set initial state
            updateProgress();
            window.addEventListener('resize', updateProgress);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<section className="py-24 px-0 md:px-12 lg:px-24 mx-auto max-w-screen-2xl overflow-hidden" id="facilities-section">

<div className="text-center mb-16 md:mb-24 px-6 md:px-0">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 uppercase">
                Facilities and Services
            </h2>
</div>

<div className="relative w-full">
<div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-y-20 md:gap-x-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 md:px-0 pb-4 md:pb-0 scroll-smooth" id="slider-track">

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:bus-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Pick Up &amp; Drop</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">We'll pick up from airport while you comfy on your ride.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:map-point-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Parking Space</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">Please consider your private parking or better yet.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:wineglass-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Welcome Drink</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">We have the fuel to start your day right.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:bath-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Hot &amp; Cold Water</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">Let us know if you need anything to be more comfortable.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:wi-fi-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Free Wifi</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">Stay connected with fast, complimentary Wi-Fi throughout.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:dumbbell-large-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Gymnasium</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">Stay fit with our fully equipped gym, open for your convenience.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:waterdrop-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Hot Pools</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">Relax and unwind in our luxurious hot pools and Jacuzzi.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="slider-item flex-none w-[75vw] md:w-auto snap-start flex flex-col items-center text-center group cursor-pointer">
<div className="mb-6 flex justify-center items-center text-[#A68A71]">
<iconify-icon height="48" icon="solar:washing-machine-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-3 transition-colors group-hover:text-[#A68A71]">Wash Car</h3>
<p className="text-lg text-gray-500 leading-relaxed max-w-sm flex-grow">Enjoy a clean car with our convenient on-site wash service.</p>
<div className="mt-8 w-12 h-12 rounded-full bg-[#e5e3db] group-hover:bg-[#dcd9ce] transition-colors duration-300 flex items-center justify-center text-gray-500 group-hover:text-gray-900">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="md:hidden mt-8 w-full max-w-[120px] mx-auto bg-[#e5e3db] h-1 rounded-full overflow-hidden">
<div className="bg-[#A68A71] h-full w-[15%] rounded-full transition-all duration-150 ease-out" id="scroll-progress"></div>
</div>
</div>
</section>


    </>
  );
}
