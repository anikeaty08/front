import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // State management
        const items = document.querySelectorAll('.floating-item');
        let isDragging = false;
        let currentDragItem = null;
        let startX, startY, startLeft, startTop;
        let maxZIndex = 50;

        // --- Draggable Logic ---
        
        items.forEach(item => {
            item.addEventListener('mousedown', startDrag);
        });

        function startDrag(e) {
            isDragging = true;
            currentDragItem = e.currentTarget;
            
            // Bring to front
            maxZIndex++;
            currentDragItem.style.zIndex = maxZIndex;
            
            // Get initial positions
            startX = e.clientX;
            startY = e.clientY;
            
            // Get computed style for exact pixel values
            const style = window.getComputedStyle(currentDragItem);
            startLeft = parseFloat(style.left);
            startTop = parseFloat(style.top);
            
            // Attach global listeners
            document.addEventListener('mousemove', onDrag);
            document.addEventListener('mouseup', stopDrag);
        }

        function onDrag(e) {
            if (!isDragging || !currentDragItem) return;
            
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            
            // Update position (using pixels directly on left/top)
            // This separates the drag layout from the scroll transform
            currentDragItem.style.left = `${startLeft + dx}px`;
            currentDragItem.style.top = `${startTop + dy}px`;
        }

        function stopDrag() {
            isDragging = false;
            currentDragItem = null;
            document.removeEventListener('mousemove', onDrag);
            document.removeEventListener('mouseup', stopDrag);
        }

        // --- Scroll Fly-Away Logic ---

        function updateScatter() {
            const scrollY = window.scrollY;
            // Dampening factor to control explosion speed
            const explosionFactor = 1.5; 
            
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            items.forEach(item => {
                // Calculate vector from screen center to item center
                // Note: We use offsetLeft/Top to get position relative to parent (which covers screen)
                // We add width/2 and height/2 to get the center of the item
                const rectX = item.offsetLeft + item.offsetWidth / 2;
                const rectY = item.offsetTop + item.offsetHeight / 2;
                
                const dirX = rectX - centerX;
                const dirY = rectY - centerY;

                // Normalize slightly so items further away don't move exponentially faster, 
                // but keep some relative distance logic.
                // Actually, simpler is just moving based on distance from center.
                
                const moveX = (dirX * scrollY * 0.002) * explosionFactor;
                const moveY = (dirY * scrollY * 0.002) * explosionFactor;

                // Apply via CSS variables to preserve Tailwind's rotation/scale
                item.style.setProperty('--tw-translate-x', `${moveX}px`);
                item.style.setProperty('--tw-translate-y', `${moveY}px`);
                
                // Optional: Fade out as they fly away
                const opacity = Math.max(0, 1 - (scrollY / (window.innerHeight * 1.5)));
                // Only apply opacity change if scrolling deep
                if(scrollY > 100) item.style.opacity = opacity;
                else item.style.opacity = 1;
            });
        }

        window.addEventListener('scroll', () => {
            requestAnimationFrame(updateScatter);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full flex flex-col overflow-hidden pointer-events-none">

<div className="bg-orange-600 text-white py-2.5 px-4 text-center relative z-50 pointer-events-auto shadow-sm">
<p className="text-sm font-medium inline-flex items-center gap-1">
                Lumina Studio has joined forces with Perplexity AI. 
                <a className="opacity-90 hover:opacity-100 font-semibold inline-flex items-center ml-1 hover:underline" href="#">
                    Read the story <i className="w-3.5 h-3.5 ml-1" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</p>
</div>

<nav className="bg-black text-white px-6 md:px-8 py-5 flex justify-between items-center relative z-50 border-b border-white/10 pointer-events-auto">

<div className="hidden md:flex items-center gap-8 text-base text-gray-400 font-medium">
<a className="hover:text-white transition-colors duration-200" href="#">Showcase</a>
<a className="hover:text-white transition-colors duration-200" href="#">Membership</a>
<a className="hover:text-white transition-colors duration-200" href="#">Updates</a>
<a className="hover:text-white transition-colors duration-200" href="#">About Us</a>
</div>

<div className="flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-2">
<span className="iconify text-white text-2xl" data-icon="simple-icons:nintendo"></span>
<span className="font-medium text-lg tracking-tight">LUMINA</span>
</div>

<div>
<button className="border border-white/30 rounded-full px-6 py-1.5 text-base font-medium text-white hover:bg-white/10 transition-colors">
                    Log in
                </button>
</div>
</nav>

<main className="flex-grow relative w-full flex flex-col items-center justify-center py-12 lg:py-0 pointer-events-auto">

<div className="relative z-40 w-full max-w-[340px] md:max-w-[400px] aspect-[3/4] bg-gray-100 shadow-2xl overflow-hidden group mx-auto transition-transform duration-500">
<img alt="Fashion Model" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pt-20">
<h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] drop-shadow-lg">
                        The future<br/>of digital<br/>artistry
                    </h1>
<p className="text-lg md:text-xl text-white/90 mt-6 leading-relaxed max-w-[260px] font-medium drop-shadow-md">
                        Transform concepts into breathtaking visuals instantly. <br/>Powered by AI, directed by you.
                    </p>
<button className="mt-8 bg-orange-600 hover:bg-orange-500 text-white text-base px-8 py-3.5 rounded-full font-medium transition-all transform hover:-translate-y-0.5 shadow-xl shadow-orange-900/20 cursor-pointer">
                        Get Started
                    </button>
</div>
</div>

<div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none max-w-[1600px] mx-auto z-30" id="scatter-container">


<div className="floating-item absolute top-[12%] left-[8%] w-44 p-3 bg-white shadow-lg -rotate-6 pointer-events-auto transition-transform duration-75 ease-linear hover:scale-105">
<div className="w-full aspect-[4/5] bg-gray-200 mb-3 overflow-hidden pointer-events-none">
<img className="w-full h-full object-cover grayscale pointer-events-none" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"/>
</div>
</div>

<div className="floating-item absolute top-[28%] left-[18%] w-48 shadow-xl rotate-3 pointer-events-auto overflow-hidden border-4 border-white transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-full h-auto object-cover pointer-events-none" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"/>
</div>

<div className="floating-item absolute bottom-[28%] left-[4%] w-60 h-48 bg-black shadow-2xl rotate-2 pointer-events-auto border-2 border-white/20 transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity pointer-events-none" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500"/>
</div>

<div className="floating-item absolute bottom-[35%] left-[16%] w-52 h-36 shadow-lg -rotate-2 pointer-events-auto border-4 border-white z-10 transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="floating-item absolute bottom-[5%] left-[20%] w-48 h-56 bg-white p-1 shadow-xl rotate-6 pointer-events-auto flex gap-1 transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-1/2 h-full object-cover grayscale contrast-125 pointer-events-none" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?w=300"/>
<img className="w-1/2 h-full object-cover grayscale contrast-125 pointer-events-none" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=300"/>
</div>

<div className="floating-item absolute bottom-[8%] left-[8%] w-72 h-24 bg-[#f0f0f0] shadow-lg -rotate-1 flex items-center justify-evenly p-2 pointer-events-auto rounded-sm transition-transform duration-75 ease-linear hover:scale-105">
<div className="w-14 h-14 rounded-full bg-[#FF4F00] shadow-inner pointer-events-none"></div>
<div className="w-14 h-14 rounded-full bg-[#10B981] shadow-inner pointer-events-none"></div>
<div className="w-14 h-14 rounded-full bg-[#7f1d1d] shadow-inner pointer-events-none"></div>
<div className="w-14 h-14 rounded-full bg-[#334155] shadow-inner pointer-events-none"></div>
</div>


<div className="floating-item absolute top-[8%] right-[20%] w-52 h-44 shadow-xl -rotate-2 pointer-events-auto overflow-hidden border-4 border-white transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500"/>
</div>

<div className="floating-item absolute top-[22%] right-[28%] w-36 h-36 bg-[#8B2323] shadow-lg rotate-12 flex items-center justify-center pointer-events-auto z-10 transition-transform duration-75 ease-linear hover:scale-105">
<span className="iconify text-white text-7xl pointer-events-none" data-icon="solar:asterisk-circle-bold-duotone"></span>
</div>

<div className="floating-item absolute top-[40%] right-[6%] w-64 h-64 shadow-2xl -rotate-3 pointer-events-auto overflow-hidden transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-full h-full object-cover scale-110 pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="floating-item absolute bottom-[26%] right-[26%] w-44 h-36 bg-green-800 shadow-lg rotate-3 pointer-events-auto overflow-hidden border-2 border-white transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-full h-full object-cover pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="floating-item absolute bottom-[16%] right-[12%] w-56 h-40 shadow-xl -rotate-6 pointer-events-auto overflow-hidden transition-transform duration-75 ease-linear hover:scale-105">
<img className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500"/>
</div>
</div>
</main>
</div>


    </>
  );
}
