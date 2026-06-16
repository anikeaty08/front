import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const slider = document.getElementById('slider');
        const dots = [document.getElementById('dot-0'), document.getElementById('dot-1'), document.getElementById('dot-2')];

        // Programmatic scroll
        function scrollToSlide(index) {
            const width = slider.clientWidth;
            slider.scrollTo({
                left: -1 * index * width, // Negative because RTL direction might affect scrollLeft behavior in some browsers, but usually standard flex-row in RTL still scrolls normally. Let's rely on element width calculation.
                // Actually for RTL flex-row, the first item is on the right. 
                // However, CSS snap logic handles it. Let's try standard calculation.
                // In standard LTR JS logic: left: index * width.
                // Since we used flex-row with dir="rtl" on html, let's verify.
                // To be safe and compatible, we use scrollIntoView on children.
                behavior: 'smooth'
            });
            // Better approach for RTL compatibility:
            slider.children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            updateDots(index);
        }

        // Update dots on scroll
        slider.addEventListener('scroll', () => {
            const scrollLeft = Math.abs(slider.scrollLeft);
            const width = slider.clientWidth;
            const index = Math.round(scrollLeft / width);
            
            // RTL correction: if browsers treat scrollLeft as negative or starting from right
            // The safest is calculating based on center point intersection usually, but let's try simple index approximation
            // For this specific view, scrollIntoView is safer, but for dots we need to detect.
            // Let's use IntersectionObserver for perfect dot syncing.
        });

        // Robust Dot Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = Array.from(slider.children).indexOf(entry.target);
                    updateDots(index);
                }
            });
        }, { threshold: 0.6, root: slider });

        Array.from(slider.children).forEach(child => observer.observe(child));

        function updateDots(activeIdx) {
            dots.forEach((dot, idx) => {
                if (idx === activeIdx) {
                    dot.classList.remove('bg-white/20');
                    dot.classList.add('bg-white');
                } else {
                    dot.classList.remove('bg-white');
                    dot.classList.add('bg-white/20');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-sm h-[800px] bg-black rounded-[2.5rem] shadow-2xl border-[6px] border-neutral-900 overflow-hidden ring-1 ring-white/10">

<div className="absolute top-0 left-0 right-0 h-12 z-30 flex justify-between items-end px-6 pb-2 text-[10px] font-medium tracking-widest text-white/60 pointer-events-none select-none">
<span dir="ltr">9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:signal-linear" width="14"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" width="14"></iconify-icon>
<iconify-icon className="text-white" icon="solar:battery-full-linear" width="14"></iconify-icon>
</div>
</div>

<button className="absolute top-12 right-5 z-30 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors active:scale-95 border border-white/5" onclick="alert('Close clicked')">
<iconify-icon className="text-neutral-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>

<div className="flex overflow-x-hidden snap-x snap-mandatory h-full w-full scroll-smooth" id="slider">

<div className="w-full h-full flex-shrink-0 snap-center flex flex-col items-center justify-between relative p-6 pt-24 pb-8 bg-neutral-950">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-neutral-950/50 to-neutral-950 z-0 pointer-events-none"></div>
<div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-enter">

<div className="w-20 h-20 rounded-full border border-amber-500/20 flex items-center justify-center bg-gradient-to-b from-amber-500/10 to-transparent gold-glow mb-2">
<iconify-icon className="text-amber-400" icon="solar:cup-star-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<div className="space-y-2 max-w-[260px]">
<h1 className="text-2xl font-semibold tracking-tight text-white">
                            خلصت التحدي 👏
                        </h1>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                            كانت رحلة طويلة، بس إرادتك كانت أقوى من أي عذر.
                        </p>
</div>
</div>

<div className="relative z-10 w-full animate-enter" style={{animationDelay: '0.1s'}}>
<button className="w-full group bg-white text-black h-14 rounded-xl font-medium text-sm hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 active:scale-[0.98]" onclick="scrollToSlide(1)">
<span>شوف إنجازك</span>
<iconify-icon className="transition-transform group-hover:-translate-x-1" icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="w-full h-full flex-shrink-0 snap-center flex flex-col items-center justify-between relative bg-black p-6 pt-20 pb-8">
<div className="relative z-10 w-full flex flex-col items-center">

<div className="mb-8 flex flex-col items-center animate-enter">
<iconify-icon className="text-amber-500 mb-4 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" icon="solar:medal-ribbons-star-linear" width="64"></iconify-icon>
<span className="px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-400 text-xs font-medium tracking-wide">
                             ملخص الأداء
                        </span>
</div>

<div className="w-full space-y-3 relative z-10">

<div className="glass-panel rounded-xl p-4 flex items-center gap-4 animate-enter" style={{animationDelay: '0.1s'}}>
<div className="w-10 h-10 rounded-lg bg-neutral-900/80 flex items-center justify-center text-neutral-400 border border-white/5">
<iconify-icon icon="solar:calendar-check-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-500">الالتزام</span>
<span className="text-base text-slate-100 font-medium dir-ltr text-right">21 Days</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center gap-4 animate-enter" style={{animationDelay: '0.2s'}}>
<div className="w-10 h-10 rounded-lg bg-neutral-900/80 flex items-center justify-center text-neutral-400 border border-white/5">
<iconify-icon icon="solar:fire-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-500">مجموع الخطوات</span>
<span className="text-base text-slate-100 font-medium">150,000 خطوة</span>
</div>
</div>

<div className="glass-panel rounded-xl p-4 flex items-center gap-4 animate-enter" style={{animationDelay: '0.3s'}}>
<div className="w-10 h-10 rounded-lg bg-neutral-900/80 flex items-center justify-center text-emerald-500/80 border border-white/5">
<iconify-icon icon="solar:body-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-neutral-500">النتيجة</span>
<span className="text-base text-emerald-400 font-medium dir-ltr text-right">- 5.0 kg</span>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10 animate-enter" style={{animationDelay: '0.4s'}}>
<button className="w-full bg-neutral-800 text-white h-14 rounded-xl font-medium text-sm hover:bg-neutral-700 border border-neutral-700 transition-all flex items-center justify-center gap-2 active:scale-[0.98]" onclick="scrollToSlide(2)">
<span>التالي</span>
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="w-full h-full flex-shrink-0 snap-center flex flex-col relative bg-neutral-950 p-6 pt-20 pb-8">

<div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-neutral-900 to-transparent opacity-60 pointer-events-none"></div>

<div className="flex-1 flex flex-col items-center justify-center text-center relative z-10 animate-enter">
<div className="mb-6 text-neutral-500">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<p className="text-xl text-white font-medium leading-relaxed tracking-tight max-w-[280px]">
                        اللي بنيته هنا… <br/>
<span className="text-neutral-500">راح يكمل معك في حياتك</span>
</p>
</div>

<div className="w-full space-y-3 relative z-10 animate-enter" style={{animationDelay: '0.2s'}}>

<button className="w-full group relative overflow-hidden flex items-center justify-center gap-2 bg-gradient-to-b from-amber-400 to-amber-500 text-black h-14 rounded-xl font-semibold text-sm transition-transform active:scale-[0.98] shadow-lg shadow-amber-900/20">
<span className="relative z-10">كمل على نفس الطريق</span>
<iconify-icon className="relative z-10 transition-transform group-hover:-translate-x-1" icon="solar:arrow-left-linear" width="18"></iconify-icon>
</button>

<button className="w-full h-14 rounded-xl font-medium text-sm text-neutral-400 hover:text-white transition-colors hover:bg-white/5 border border-transparent hover:border-white/5">
                        اشترك بتحدي جديد
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-none">
<div className="w-1.5 h-1.5 rounded-full bg-white transition-colors duration-300" id="dot-0"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 transition-colors duration-300" id="dot-1"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 transition-colors duration-300" id="dot-2"></div>
</div>
</div>


    </>
  );
}
