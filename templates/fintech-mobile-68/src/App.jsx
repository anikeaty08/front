import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Carousel Logic
        const track = document.getElementById('carousel-track');
        const dots = document.getElementById('pagination').children;
        const nextBtn = document.getElementById('next-btn');
        const btnText = document.getElementById('btn-text');
        
        let currentIndex = 0;
        const totalSlides = 3;
        let startX = 0;
        let isDragging = false;

        function updateSlide(index) {
            // Move Track
            track.style.transform = `translateX(-${index * 100}%)`;
            
            // Update Dots
            Array.from(dots).forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-slate-200');
                    dot.classList.add('bg-slate-900', 'w-6'); // Stretch active dot
                } else {
                    dot.classList.remove('bg-slate-900', 'w-6');
                    dot.classList.add('bg-slate-200', 'w-2.5');
                }
            });

            // Update Button Text
            if (index === totalSlides - 1) {
                btnText.textContent = "Get Started";
            } else {
                btnText.textContent = "Next";
            }
        }

        // Button Click Handler
        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
                updateSlide(currentIndex);
            } else {
                // Action for Get Started (e.g., redirect or close)
                console.log("Onboarding Complete");
            }
        });

        // Touch Events for Swipe
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
        });

        track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (diff > 50) { // Swipe Left
                if (currentIndex < totalSlides - 1) {
                    currentIndex++;
                    updateSlide(currentIndex);
                }
            } else if (diff < -50) { // Swipe Right
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlide(currentIndex);
                }
            }
            isDragging = false;
        });

        // Mouse Events for Desktop Testing
        track.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            track.style.cursor = 'grabbing';
        });

        track.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            const endX = e.clientX;
            const diff = startX - endX;
            if (diff > 50 && currentIndex < totalSlides - 1) {
                currentIndex++;
                updateSlide(currentIndex);
            } else if (diff < -50 && currentIndex > 0) {
                currentIndex--;
                updateSlide(currentIndex);
            }
            isDragging = false;
            track.style.cursor = 'grab';
        });
        
        // Prevent image drag
        track.addEventListener('mouseleave', () => { isDragging = false; track.style.cursor = 'grab'; });

        // Initialize
        updateSlide(0);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[400px] h-[850px] bg-white rounded-[48px] shadow-2xl border-[8px] border-white ring-1 ring-slate-900/5 overflow-hidden flex flex-col justify-between">

<div className="absolute top-0 left-0 w-full h-14 z-20 flex justify-between items-end px-8 pb-2">
<span className="text-sm font-semibold text-slate-900">9:41</span>
<div className="flex gap-1.5 items-center">
<i className="w-4 h-4 text-slate-900 stroke-[2]" data-lucide="signal"></i>
<i className="w-4 h-4 text-slate-900 stroke-[2]" data-lucide="wifi"></i>
<div className="w-6 h-3 border border-slate-900 rounded-[4px] relative">
<div className="absolute inset-0.5 bg-slate-900 rounded-[2px] w-4"></div>
</div>
</div>
</div>

<div className="absolute top-14 left-0 w-full flex justify-center z-20">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-blue-600 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-white fill-white" data-lucide="zap"></i>
</div>
<span className="font-semibold text-xl tracking-tight text-slate-900">GoKwik</span>
</div>
</div>

<div className="flex w-full h-full slide-transition cursor-grab active:cursor-grabbing" id="carousel-track">

<div className="w-full flex-shrink-0 flex flex-col h-full pt-20">

<div className="h-[65%] w-full flex items-center justify-center relative">

<div className="absolute w-64 h-64 bg-blue-50 rounded-full blur-3xl -top-4 -left-10 opacity-60"></div>

<div className="relative z-10 w-64">

<div className="bg-white border-2 border-slate-900 rounded-3xl p-3 shadow-lg relative transform -rotate-3">

<div className="flex justify-between items-center mb-4 border-b border-slate-100 pb-2">
<div className="w-16 h-2 bg-slate-100 rounded-full"></div>
<i className="w-4 h-4 text-slate-900" data-lucide="shopping-bag"></i>
</div>

<div className="flex gap-3 mb-3 items-center">
<div className="w-10 h-10 rounded-lg bg-orange-50 border border-slate-200 flex items-center justify-center">
<i className="w-5 h-5 text-orange-400" data-lucide="watch"></i>
</div>
<div className="flex-1">
<div className="w-20 h-2 bg-slate-800 rounded-full mb-1.5"></div>
<div className="w-12 h-1.5 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="bg-blue-50 rounded-xl p-2 border border-blue-100 mb-2">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-semibold text-blue-600">Pay in 3</span>
<span className="text-[10px] font-semibold text-slate-900">₹2,000/mo</span>
</div>
<div className="flex gap-1">
<div className="h-1.5 flex-1 bg-blue-500 rounded-full"></div>
<div className="h-1.5 flex-1 bg-blue-200 rounded-full"></div>
<div className="h-1.5 flex-1 bg-blue-200 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-white border-2 border-slate-900 text-slate-900 px-3 py-1.5 rounded-full shadow-lg transform rotate-6 flex items-center gap-1">
<i className="w-3 h-3 stroke-[3]" data-lucide="percent"></i>
<span className="text-xs font-bold">Interest</span>
</div>

<div className="absolute -bottom-6 -left-2 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
<i className="w-5 h-5 text-purple-400" data-lucide="shirt"></i>
</div>
<div className="absolute top-10 -right-8 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm">
<i className="w-6 h-6 text-pink-400" data-lucide="headphones"></i>
</div>
</div>
</div>

<div className="px-8 pb-10">
<h2 className="text-[28px] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-4">
                        Shop your favourite <br/> brands on EMI
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                        Buy products from GoKwik partner brands and convert every purchase into 0% interest EMI for up to 3 months.
                    </p>
</div>
</div>

<div className="w-full flex-shrink-0 flex flex-col h-full pt-20">

<div className="h-[65%] w-full flex items-center justify-center relative">
<div className="absolute w-64 h-64 bg-emerald-50 rounded-full blur-3xl top-10 right-0 opacity-60"></div>

<div className="relative z-10 w-64">

<div className="bg-white border-2 border-slate-900 rounded-3xl p-4 shadow-lg w-full relative">
<div className="absolute top-4 right-4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>

<div className="space-y-6 relative">

<div className="absolute left-[15px] top-2 h-full w-0.5 bg-slate-100 -z-10"></div>

<div className="flex gap-3 items-center opacity-40 grayscale">
<div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center z-10">
<i className="w-4 h-4 text-slate-400" data-lucide="package-check"></i>
</div>
<div className="bg-slate-50 rounded-lg p-2 flex-1">
<div className="w-20 h-2 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center z-10 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]">
<i className="w-4 h-4 text-emerald-600" data-lucide="truck"></i>
</div>
<div className="bg-white border border-emerald-100 shadow-sm rounded-lg p-3 flex-1">
<div className="flex justify-between mb-1">
<div className="w-24 h-2.5 bg-slate-900 rounded-full"></div>
<span className="text-[10px] text-emerald-600 font-semibold">In Transit</span>
</div>
<div className="w-16 h-2 bg-slate-200 rounded-full"></div>
</div>
</div>

<div className="flex gap-3 items-center opacity-40">
<div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center z-10">
<i className="w-4 h-4 text-slate-400" data-lucide="home"></i>
</div>
<div className="bg-slate-50 rounded-lg p-2 flex-1">
<div className="w-16 h-2 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="px-8 pb-10">
<h2 className="text-[28px] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-4">
                        Track all your orders <br/> in one place
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                        Easily track every order placed using the GoKwik platform with real-time updates.
                    </p>
</div>
</div>

<div className="w-full flex-shrink-0 flex flex-col h-full pt-20">

<div className="h-[65%] w-full flex items-center justify-center relative">
<div className="absolute w-64 h-64 bg-amber-50 rounded-full blur-3xl bottom-10 left-10 opacity-60"></div>

<div className="relative z-10 w-full px-8 flex flex-col items-center">

<div className="w-48 h-28 bg-white border-2 border-slate-900 rounded-xl relative shadow-md z-0 mb-[-20px] transform rotate-[-4deg] flex flex-col justify-between p-3">
<div className="flex justify-between items-start">
<div className="w-8 h-5 bg-slate-200 rounded overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-100"></div>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="landmark"></i>
</div>
<div className="flex gap-2 items-end">
<span className="text-xs font-mono text-slate-400">•••• 4242</span>
</div>
</div>

<div className="w-32 h-32 bg-amber-100 border-2 border-slate-900 rounded-full relative z-10 shadow-xl flex items-center justify-center">
<div className="absolute inset-2 border border-amber-200 rounded-full border-dashed"></div>
<i className="w-12 h-12 text-amber-500 stroke-[1.5]" data-lucide="coins"></i>

<div className="absolute top-2 right-4 text-amber-400 animate-bounce">
<i className="w-5 h-5 fill-current" data-lucide="sparkle"></i>
</div>
</div>

<div className="absolute right-[20%] top-[40%]">
<div className="bg-white p-1.5 rounded-full border border-slate-100 shadow-sm">
<i className="w-5 h-5 text-green-500" data-lucide="arrow-down-right"></i>
</div>
</div>

<div className="mt-6 bg-white border border-slate-100 rounded-full px-4 py-1.5 shadow-sm flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs font-medium text-slate-600">Rewards credited instantly</span>
</div>
</div>
</div>

<div className="px-8 pb-32">
<h2 className="text-[28px] font-semibold text-slate-900 leading-[1.1] tracking-tight mb-4">
                        Earn gold on every <br/> EMI payment
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                        Receive assured gold rewards on every EMI payment and transfer them directly to your bank account.
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full z-30 pb-10 pt-10 bg-gradient-to-t from-white via-white to-transparent">
<div className="px-8 flex flex-col items-center">

<div className="flex gap-2 mb-8" id="pagination">
<div className="w-2.5 h-2.5 rounded-full bg-slate-900 transition-all duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200 transition-all duration-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200 transition-all duration-300"></div>
</div>

<button className="w-full bg-blue-600 hover:bg-blue-700 active:scale-95 btn-transition text-white font-medium py-4 rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 text-lg" id="next-btn">
<span id="btn-text">Next</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-slate-200 rounded-full z-40"></div>
</div>


    </>
  );
}
