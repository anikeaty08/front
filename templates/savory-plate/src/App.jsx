import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            const container = document.getElementById('swipe-container');
            let cards = Array.from(container.querySelectorAll('[data-card]'));
            let activeCard = cards.find(c => c.getAttribute('data-card') === '0');
            
            let isDragging = false;
            let startX = 0;
            let currentX = 0;
            let startY = 0;
            let currentY = 0;
            let cardWidth = activeCard.offsetWidth;

            function initCard(card) {
                card.addEventListener('mousedown', handleStart);
                card.addEventListener('touchstart', handleStart, { passive: false });
            }

            // Initialize the top card
            initCard(activeCard);

            function handleStart(e) {
                if (e.target.closest('button') || e.target.closest('a')) return;
                
                isDragging = true;
                startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
                startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
                
                activeCard.style.transition = 'none';
                activeCard.style.cursor = 'grabbing';
                
                // Add scale and lift effect on grab for tactile feedback
                activeCard.style.transform = `scale(1.03) translateY(-5px)`;
                activeCard.classList.add('shadow-2xl');
                // Ensure high z-index during drag
                activeCard.style.zIndex = '50';

                document.addEventListener('mousemove', handleMove);
                document.addEventListener('touchmove', handleMove, { passive: false });
                document.addEventListener('mouseup', handleEnd);
                document.addEventListener('touchend', handleEnd);
            }

            function handleMove(e) {
                if (!isDragging) return;
                e.preventDefault(); // Prevent scrolling on touch

                const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
                const clientY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;

                currentX = clientX - startX;
                currentY = clientY - startY;

                // Rotation factor: more rotation for further distance
                const rotate = currentX * 0.08; 
                
                // Apply transform with inertia-like feel (translate + rotate + scale)
                activeCard.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotate}deg) scale(1.03)`;

                // Animate background cards progressively as top card moves away
                const progress = Math.min(Math.abs(currentX) / (cardWidth / 2.5), 1);
                updateBackgroundCards(progress);
            }

            function handleEnd(e) {
                if (!isDragging) return;
                isDragging = false;

                document.removeEventListener('mousemove', handleMove);
                document.removeEventListener('touchmove', handleMove);
                document.removeEventListener('mouseup', handleEnd);
                document.removeEventListener('touchend', handleEnd);

                const threshold = cardWidth * 0.35; // Swipe threshold distance
                const velocity = Math.abs(currentX); // Simplified velocity check

                if (Math.abs(currentX) > threshold) {
                    // Swipe Out Logic (Inertia throw)
                    const direction = currentX > 0 ? 1 : -1;
                    const endX = (window.innerWidth / 2 + cardWidth) * direction;
                    const endY = currentY + (currentY / Math.abs(currentX || 1)) * 100; // Continue trajectory
                    
                    activeCard.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    activeCard.style.transform = `translate(${endX}px, ${endY}px) rotate(${direction * 45}deg)`;
                    
                    // Reset stack after animation
                    setTimeout(() => {
                        resetStack();
                    }, 400);
                } else {
                    // Snap Back Logic (Spring physics feel)
                    activeCard.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'; // Elastic ease
                    activeCard.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
                    activeCard.style.cursor = 'grab';
                    activeCard.style.zIndex = '30';
                    activeCard.classList.remove('shadow-2xl');
                    
                    // Reset background cards
                    updateBackgroundCards(0);
                }

                currentX = 0;
                currentY = 0;
            }

            function updateBackgroundCards(progress) {
                // Animate the stack behind the active card
                const nextCard = cards.find(c => c.getAttribute('data-card') === '1');
                const lastCard = cards.find(c => c.getAttribute('data-card') === '2');

                if (nextCard) {
                    // Interpolate next card: scale 0.95->1.0, y 16px->0px
                    const scale = 0.95 + (0.05 * progress);
                    const y = 16 - (16 * progress); 
                    const opacity = 0.7 + (0.3 * progress);
                    nextCard.style.transform = `scale(${scale}) translateY(${y}px)`;
                    nextCard.style.opacity = opacity;
                }

                if (lastCard) {
                    // Interpolate last card: scale 0.9->0.95, y 32px->16px
                    const scale = 0.9 + (0.05 * progress);
                    const y = 32 - (16 * progress);
                    const opacity = 0.4 + (0.3 * progress);
                    lastCard.style.transform = `scale(${scale}) translateY(${y}px)`;
                    lastCard.style.opacity = opacity;
                }
            }

            function resetStack() {
                // Cycle the cards for infinite loop effect
                
                // Hide current active card instantly
                activeCard.style.transition = 'none';
                activeCard.style.opacity = '0';
                activeCard.style.transform = 'translate(0, 40px) scale(0.9)';
                
                // Find all cards
                const c0 = cards.find(c => c.getAttribute('data-card') === '0');
                const c1 = cards.find(c => c.getAttribute('data-card') === '1');
                const c2 = cards.find(c => c.getAttribute('data-card') === '2');

                // Shift data attributes to rotate roles
                // 0 -> 2 (Bottom), 1 -> 0 (Top), 2 -> 1 (Middle)
                c0.setAttribute('data-card', '2');
                c1.setAttribute('data-card', '0');
                c2.setAttribute('data-card', '1');

                // Apply new styles based on new roles
                updateCardStyles(c1, 'top');
                updateCardStyles(c2, 'middle');
                updateCardStyles(c0, 'bottom');

                // Update event listeners
                c0.removeEventListener('mousedown', handleStart);
                c0.removeEventListener('touchstart', handleStart);
                
                // Set new active card
                activeCard = c1; 
                initCard(activeCard);

                // Fade the old active card back in at the bottom of the stack
                setTimeout(() => {
                    c0.style.transition = 'all 0.5s ease-out';
                    c0.style.opacity = '0.4';
                }, 50);
            }

            function updateCardStyles(card, role) {
                card.style.transition = 'all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
                if (role === 'top') {
                    card.style.zIndex = '30';
                    card.style.transform = 'scale(1) translateY(0)';
                    card.style.opacity = '1';
                    card.style.cursor = 'grab';
                    card.classList.remove('pointer-events-none');
                } else if (role === 'middle') {
                    card.style.zIndex = '20';
                    card.style.transform = 'scale(0.95) translateY(16px)';
                    card.style.opacity = '0.7';
                    card.classList.add('pointer-events-none');
                } else if (role === 'bottom') {
                    card.style.zIndex = '10';
                    card.style.transform = 'scale(0.9) translateY(32px)';
                    card.style.opacity = '0.4';
                    card.classList.add('pointer-events-none');
                }
            }
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-grid h-full w-full opacity-60"></div>

<nav className="fixed flex flex-col z-50 pr-4 pl-4 top-6 right-0 left-0 items-center">

<input className="peer hidden" id="mobile-menu-toggle" type="checkbox"/>

<div className="glass-panel flex shadow-black/5 gap-2 w-full max-w-4xl rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-2 gap-y-2 items-center justify-between relative z-20">

<a className="flex items-center gap-2 px-4 group shrink-0" href="#">
<div className="w-8 h-8 bg-brand-black text-white rounded-full flex items-center justify-center group-hover:bg-brand-rose transition-colors duration-300">
<span className="font-serif italic font-bold text-lg">S</span>
</div>
<span className="font-bold tracking-tight hidden sm:block">The Savory Plate</span>
</a>

<div className="hidden md:flex bg-slate-100/50 rounded-full pt-1 pr-1 pb-1 pl-1 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] items-center">
<a className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-white hover:shadow-sm transition-all duration-300" href="#">Recipes</a>
<a className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-white hover:shadow-sm transition-all duration-300" href="#">Seasonal</a>
<a className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-white hover:shadow-sm transition-all duration-300" href="#">Pantry</a>
<a className="px-5 py-2 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-white hover:shadow-sm transition-all duration-300" href="#">Shop</a>
</div>

<div className="flex gap-2 shrink-0 pr-1 gap-x-2 gap-y-2 items-center">
<button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="uppercase hover:bg-brand-rose transition-colors duration-300 flex text-xs font-bold text-white tracking-widest bg-slate-950 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 gap-x-2 gap-y-2 items-center">
<span className="">Subscribe</span>
</button>

<label className="md:hidden w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center transition-colors cursor-pointer text-slate-900" htmlFor="mobile-menu-toggle">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</label>
</div>
</div>

<div className="hidden peer-checked:flex w-full max-w-4xl flex-col gap-2 mt-2 p-3 bg-white/90 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.1)] z-10 origin-top animate-in slide-in-from-top-4 fade-in duration-200">
<div className="flex flex-col gap-1 p-2">
<a className="flex items-center justify-between px-5 py-3 rounded-xl hover:bg-slate-100/80 transition-colors group" href="#">
<span className="text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900">Recipes</span>
<iconify-icon className="text-lg text-slate-400 group-hover:text-brand-rose transition-colors" icon="solar:chef-hat-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between px-5 py-3 rounded-xl hover:bg-slate-100/80 transition-colors group" href="#">
<span className="text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900">Seasonal</span>
<iconify-icon className="text-lg text-slate-400 group-hover:text-brand-rose transition-colors" icon="solar:leaf-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between px-5 py-3 rounded-xl hover:bg-slate-100/80 transition-colors group" href="#">
<span className="text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900">Pantry</span>
<iconify-icon className="text-lg text-slate-400 group-hover:text-brand-rose transition-colors" icon="solar:box-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between px-5 py-3 rounded-xl hover:bg-slate-100/80 transition-colors group" href="#">
<span className="text-sm font-bold uppercase tracking-wider text-slate-600 group-hover:text-slate-900">Shop</span>
<iconify-icon className="text-lg text-slate-400 group-hover:text-brand-rose transition-colors" icon="solar:bag-3-linear"></iconify-icon>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 px-4 md:px-8 max-w-[1600px] mx-auto space-y-4">

<section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:h-[85vh] min-h-[600px]">

<div className="md:col-span-8 bg-white rounded-[2rem] overflow-hidden relative group border border-slate-200 shadow-sm">
<img alt="Cooking Hero" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6586e163-951e-453e-abaa-5e04803575da_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
<div className="flex items-center gap-3 mb-4">
<span className="bg-white text-black px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest font-mono">Chef's Choice</span>
<span className="text-white/80 text-xs font-mono">15 MIN PREP</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[0.9] mb-6 text-balance">
                        Master the Art of <span className="italic text-brand-rose">Home Cooking</span>
</h1>
<div className="flex items-center justify-between border-t border-white/20 pt-6">
<p className="text-white/80 max-w-md text-sm md:text-base line-clamp-2">
                            Discover seasonal ingredients, authentic recipes, and plating techniques to elevate your dinner table.
                        </p>
<button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<iconify-icon className="text-2xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4 h-full">

<div className="flex-1 overflow-hidden group hover:shadow-md transition-all bg-[#F5F2EA] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f04154e7-08c7-4859-be2d-ebf0eeb3c84d_1600w.jpg)] bg-cover bg-center border-slate-200 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative">
<div className="group-hover:opacity-100 transition-opacity duration-500 transform group-hover:rotate-12 opacity-20 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0">
<svg className="text-brand-rose text-6xl w-[64px] h-[64px] z-10" data-icon-set="solar" data-solar="leaf-bold-duotone" height="64" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 22c-4.418 0-8-3.646-8-8.143c0-4.462 2.553-9.67 6.537-11.531A3.45 3.45 0 0 1 12 2z" fill="currentColor" fill-rule="evenodd"></path><path d="M13.463 2.326A3.45 3.45 0 0 0 12 2v7l4.432-4.432c-.863-.947-1.86-1.724-2.97-2.242" fill="currentColor" opacity=".3"></path><path d="M12 9v5.5l6.614-6.614c-.572-1.22-1.308-2.357-2.182-3.318z" fill="currentColor" opacity=".4"></path><path d="m12 19.5l7.811-7.811a15 15 0 0 0-1.197-3.803L12 14.5z" fill="currentColor" opacity=".6"></path><path d="M19.811 11.689L12 19.5V22c4.418 0 8-3.646 8-8.143c0-.71-.064-1.438-.189-2.168" fill="currentColor" opacity=".7"></path></svg>
</div>
<div className="flex flex-col z-10 h-full relative justify-between">
<div className="">
<span className="text-[10px] uppercase block font-bold text-slate-500 tracking-widest font-mono mb-2">In Season Now</span>
<h2 className="leading-tight text-2xl font-serif">Spring Herb Essentials</h2>
</div>
<div className="flex gap-2 mt-4">
<img alt="Chef Avatar" className="w-12 h-12 rounded-full object-cover border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5d29712-71a8-43a4-b382-2ab031158a73_320w.webp"/>
<div className="flex flex-col justify-center">
<span className="text-xs font-bold">Chef Gabriella</span>
<span className="text-[10px] text-slate-950">Fresh from the garden</span>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-brand-black rounded-[2rem] p-8 relative overflow-hidden group">
<div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700">
<img alt="Kitchen Tools" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e8517d2-d2e3-4ae9-8229-c11652e50747_1600w.webp"/>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
<h3 className="text-white text-lg font-medium leading-snug mb-2">Must-Have Knives 2024</h3>
<a className="text-xs text-white/70 hover:text-white uppercase tracking-widest font-bold flex items-center gap-2" href="#">
                                Read Review <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden py-6 border-y border-slate-200 bg-white">
<div className="flex whitespace-nowrap gap-12 animate-marquee items-center text-slate-400">

<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Farm to Table</span>
<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Organic Ingredients</span>
<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Culinary Arts</span>
<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Seasonal Menus</span>
<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Wine Pairing</span>
<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Farm to Table</span>
<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Organic Ingredients</span>
<span className="flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase"><iconify-icon className="text-brand-rose" icon="solar:star-bold"></iconify-icon> Culinary Arts</span>
</div>
</div>

<section className="py-16">
<div className="flex justify-between items-end mb-10 px-2">
<div className="">
<h2 className="text-4xl font-serif italic text-slate-800">Fresh from the Kitchen</h2>
<p className="text-slate-500 mt-2 font-mono text-xs uppercase tracking-widest">New recipes to try this week</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img alt="Pasta" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a303e4a0-923e-4f94-8213-c2d1ffa5d04a_800w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Dinner</span>
</div>
</div>
<h3 className="text-lg font-bold leading-tight group-hover:text-brand-rose transition-colors">Handmade Tagliatelle with Sage</h3>
<div className="flex items-center gap-2 mt-2 text-slate-400 text-xs font-mono">
<span>45 Mins</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Medium</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img alt="Salad" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d5615e8-afc9-4652-988c-3a8245b21055_800w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Healthy</span>
</div>
</div>
<h3 className="text-lg font-bold leading-tight group-hover:text-brand-rose transition-colors">Citrus &amp; Fennel Summer Salad</h3>
<div className="flex items-center gap-2 mt-2 text-slate-400 text-xs font-mono">
<span>15 Mins</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Easy</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img alt="Dessert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f742445-55e3-4a85-8e6b-fa533046e5a4_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Dessert</span>
</div>
</div>
<h3 className="text-lg font-bold leading-tight group-hover:text-brand-rose transition-colors">Decadent Dark Chocolate Tart</h3>
<div className="flex items-center gap-2 mt-2 text-slate-400 text-xs font-mono">
<span>60 Mins</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Hard</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative mb-4">
<img alt="Meal Prep" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb14d50f-45f8-42e5-b0ca-5e941cb14d30_800w.jpg"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Guides</span>
</div>
</div>
<h3 className="text-lg font-bold leading-tight group-hover:text-brand-rose transition-colors">Weekly Meal Prep: Grains &amp; Greens</h3>
<div className="flex items-center gap-2 mt-2 text-slate-400 text-xs font-mono">
<span>2 Hours</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Easy</span>
</div>
</article>
</div>
</section>

<section className="py-12">
<div className="bg-white border border-slate-200 rounded-[3rem] overflow-hidden shadow-sm">
<div className="grid md:grid-cols-2">
<div className="md:p-20 flex flex-col pt-12 pr-12 pb-12 pl-12 items-start justify-center">
<iconify-icon className="text-4xl text-brand-rose mb-8 opacity-20" icon="solar:chef-hat-bold"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif leading-none mb-6">
                            Culinary Magic, <br/> I'm <span className="italic text-slate-400">Gabriella</span>.
                        </h2>
<div className="space-y-6 text-slate-600 leading-relaxed max-w-md">
<p className="">After a decade in the corporate world, I followed my heart to Tuscany to learn the ancient secrets of authentic Italian cooking.</p>
<p className="">I'm here to show you that handmade pasta and slow-simmered sauces are simpler than you think.</p>
</div>
<div className="mt-10 flex gap-4">
<button className="uppercase hover:bg-brand-rose transition-colors text-xs font-bold text-white tracking-widest bg-slate-900 rounded-xl pt-4 pr-8 pb-4 pl-8">
                                Explore Dishes
                            </button>
<button className="border border-slate-200 px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest hover:border-slate-900 transition-colors">
                                Masterclasses
                            </button>
</div>

<div className="mt-12 pt-8 border-t border-slate-100 w-full flex gap-12">
<div>
<span className="block text-2xl font-bold font-serif">1.2K+</span>
<span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Recipes</span>
</div>
<div>
<span className="block text-2xl font-bold font-serif">4M+</span>
<span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest">Followers</span>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Chef Profile" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5d29712-71a8-43a4-b382-2ab031158a73_1600w.webp"/>
<div className="absolute bottom-8 right-8 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-xs">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] font-bold uppercase tracking-widest text-slate-800 font-mono">Rolling Pasta</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="grid lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 flex flex-col justify-center">
<h2 className="text-4xl font-serif mb-8">Global Flavors</h2>
<div className="space-y-1">

<div className="group border-b border-slate-200 py-4 cursor-pointer hover:bg-white hover:pl-4 transition-all duration-300 rounded-lg">
<div className="flex justify-between items-center">
<span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">01. Italian</span>
<iconify-icon className="text-slate-300 group-hover:text-brand-rose opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-slate-200 py-4 cursor-pointer hover:bg-white hover:pl-4 transition-all duration-300 rounded-lg">
<div className="flex justify-between items-center">
<span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">02. Asian Fusion</span>
<iconify-icon className="text-slate-300 group-hover:text-brand-rose opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-slate-200 py-4 cursor-pointer hover:bg-white hover:pl-4 transition-all duration-300 rounded-lg">
<div className="flex justify-between items-center">
<span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">03. French Patisserie</span>
<iconify-icon className="text-slate-300 group-hover:text-brand-rose opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="group border-b border-slate-200 py-4 cursor-pointer hover:bg-white hover:pl-4 transition-all duration-300 rounded-lg">
<div className="flex justify-between items-center">
<span className="text-sm font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">04. Modern American</span>
<iconify-icon className="text-slate-300 group-hover:text-brand-rose opacity-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden min-h-[500px] flex items-center justify-center group">

<img alt="Map" className="w-full h-full object-contain opacity-20 invert" src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"/>

<div className="absolute top-[30%] left-[20%] group/pin cursor-pointer">
<div className="w-4 h-4 bg-brand-rose rounded-full animate-ping absolute opacity-75"></div>
<div className="w-4 h-4 bg-brand-rose rounded-full relative border-2 border-slate-900 z-10 hover:scale-125 transition-transform"></div>

<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20">
<img alt="Pin" className="w-24 h-16 object-cover rounded-md mb-2 block" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=200&amp;h=120&amp;fit=crop"/>
<span className="text-[10px] font-bold uppercase tracking-widest">Spices of India</span>
</div>
</div>
<div className="absolute top-[25%] right-[25%] group/pin cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full relative border-2 border-slate-900 z-10 hover:bg-brand-rose transition-colors"></div>
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20">
<img alt="Pin" className="w-24 h-16 object-cover rounded-md mb-2 block" src="https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&amp;w=200&amp;h=120&amp;fit=crop"/>
<span className="text-[10px] font-bold uppercase tracking-widest">Dim Sum</span>
</div>
</div>
<div className="absolute top-[20%] left-[48%] group/pin cursor-pointer">
<div className="w-4 h-4 bg-white rounded-full relative border-2 border-slate-900 z-10 hover:bg-brand-rose transition-colors"></div>
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover/pin:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20">
<img alt="Pin" className="w-24 h-16 object-cover rounded-md mb-2 block" src="https://images.unsplash.com/photo-1498579150354-977475b7ea0b?q=80&amp;w=200&amp;h=120&amp;fit=crop"/>
<span className="text-[10px] font-bold uppercase tracking-widest">Pasta Fresca</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<style>
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-enter {
            opacity: 0;
            animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
    </style>
<div className="relative z-10 max-w-7xl mx-auto px-6">

<div className="text-center max-w-2xl mx-auto mb-20 animate-enter" style={{animationDelay: '0.1s'}}>
<span className="text-brand-rose font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 block hover:tracking-[0.25em] transition-all duration-300 cursor-default">The Kitchen Table</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight">Join the Movement</h2>
<p className="text-slate-500 text-lg leading-relaxed text-balance">Over 2,000,000 foodies and home cooks sharing their passion for flavor, techniques, and daily inspiration.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">

<div className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 hover:border-slate-300 transition-all duration-300 group text-center hover:shadow-xl hover:-translate-y-1 animate-enter" style={{animationDelay: '0.2s'}}>
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-600 group-hover:scale-110 group-hover:bg-brand-rose group-hover:text-white transition-all duration-300 ease-out group-hover:rotate-6 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-brand-rose transition-colors">Foodie Podcast</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Interviews with world-renowned chefs and local farmers exploring the future of culinary arts.</p>
<a className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 py-2 border-b border-slate-200 group-hover:border-brand-rose group-hover:text-brand-rose transition-all" href="#">
<span>Listen Now</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 transition-all duration-300 group text-center relative z-10 shadow-2xl md:scale-105 border-t-4 border-t-brand-rose hover:-translate-y-2 animate-enter" style={{animationDelay: '0.3s'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg transform transition-transform group-hover:scale-110">Most Popular</div>
<div className="w-16 h-16 bg-brand-rose/5 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-rose group-hover:scale-110 group-hover:bg-brand-rose group-hover:text-white transition-all duration-300 ease-out group-hover:-rotate-6 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:letter-linear"></iconify-icon>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900">Weekly Menu Plan</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Curated grocery lists and seasonal recipes sent every Sunday to simplify your week.</p>
<a className="inline-flex items-center justify-center uppercase hover:bg-slate-900 hover:scale-[1.02] transition-all duration-300 shadow-brand-rose/20 text-xs font-bold text-white tracking-widest bg-slate-900 w-full rounded-xl px-6 py-4 shadow-lg" href="#">
                    Subscribe Free
                </a>
</div>

<div className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 hover:border-slate-300 transition-all duration-300 group text-center hover:shadow-xl hover:-translate-y-1 animate-enter" style={{animationDelay: '0.4s'}}>
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-600 group-hover:scale-110 group-hover:bg-brand-rose group-hover:text-white transition-all duration-300 ease-out group-hover:rotate-6 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:shop-2-linear"></iconify-icon>
</div>
<h3 className="font-bold text-xl mb-3 text-slate-900 group-hover:text-brand-rose transition-colors">Kitchen Shop</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Our favorite cookware, aprons, and pantry staples hand-picked for your home kitchen.</p>
<a className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-900 py-2 border-b border-slate-200 group-hover:border-brand-rose group-hover:text-brand-rose transition-all" href="#">
<span>Browse Shop</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 overflow-hidden bg-slate-50/30">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative h-[480px] w-full flex items-center justify-center select-none perspective-1000" id="swipe-container">

<div className="absolute w-[340px] bg-white p-8 rounded-3xl shadow-lg border border-slate-200/60 opacity-40 scale-90 translate-y-8 z-10 transition-all duration-500 ease-out pointer-events-none" data-card="2">
<div className="flex items-center gap-4 mb-6">
<img alt="Marcus" className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Marcus Chen</h4>
<span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Sous Chef</span>
</div>
</div>
<p className="text-slate-600 leading-relaxed italic mb-6">"The knife skills workshop is essential. I've been cooking for years but this corrected habits I didn't know I had."</p>
<div className="flex gap-1 text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>

<div className="absolute w-[340px] bg-white p-8 rounded-3xl shadow-xl border border-slate-200/60 opacity-70 scale-95 translate-y-4 z-20 transition-all duration-500 ease-out pointer-events-none" data-card="1">
<div className="flex items-center gap-4 mb-6">
<img alt="Sarah" className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Sarah Miller</h4>
<span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Food Blogger</span>
</div>
</div>
<p className="text-slate-600 leading-relaxed italic mb-6">"Finally a platform that focuses on technique rather than just ingredients. My plating has improved dramatically."</p>
<div className="flex gap-1 text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>

<div className="absolute w-[340px] bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 z-30 cursor-grab active:cursor-grabbing touch-none transform-gpu will-change-transform" data-card="0" id="active-card">
<div className="absolute -top-3 -right-3 bg-brand-rose text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">New</div>
<div className="flex items-center gap-4 mb-6 pointer-events-none">
<img alt="Elena" className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b41e0982-e59c-4c4a-b89f-66f692b2984d_320w.jpg"/>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Elena Rodriguez</h4>
<span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Home Baker</span>
</div>
</div>
<p className="text-slate-600 leading-relaxed italic mb-6 pointer-events-none">"The sourdough guide completely changed my baking game. My family asks for this bread every single week now!"</p>
<div className="flex gap-1 text-yellow-400 text-xs pointer-events-none">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>

<div className="absolute bottom-4 right-4 text-slate-200 animate-pulse pointer-events-none">
<svg className="lucide lucide-hand-metal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v3.1"></path><path d="M10 12.5V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"></path><path d="M6 12v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6a7 7 0 0 0 7 7h9a5 5 0 0 0 5-5v-5a5 5 0 0 0-5-5h-4"></path></svg>
</div>
</div>
</div>

<div className="lg:pl-12">
<span className="text-brand-rose font-mono text-xs uppercase tracking-[0.2em] mb-4 block font-semibold">Testimonials</span>
<h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 tracking-tight font-medium">Stories from the<br/>Kitchen Table</h2>
<p className="text-slate-600 text-lg mb-10 leading-relaxed font-light">Join thousands of home cooks who are mastering new techniques and transforming their daily meals into experiences.</p>
<div className="flex items-center gap-10">
<div className="flex flex-col gap-1">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">4.9</span>
<div className="flex text-yellow-400 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">Average Rating</span>
</div>
<div className="h-12 w-px bg-slate-200"></div>
<div className="flex flex-col gap-1">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">12k+</span>
<span className="text-xs text-brand-rose font-mono">+140 this week</span>
<span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-1">Active Members</span>
</div>
</div>
<div className="mt-12 flex gap-4">
<button className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center gap-2 group">
                        Read Stories
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10 mt-12">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-sm">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-brand-black text-white rounded-full flex items-center justify-center">
<span className="font-serif italic font-bold text-lg">S</span>
</div>
<span className="font-bold tracking-tight text-xl">The Savory Plate</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed">
                        A digital sanctuary for those seeking inspiration in cooking, baking, and entertaining. Crafted with love in Paris.
                    </p>
</div>
<div className="flex gap-12 md:gap-24 flex-wrap">
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6">Recipes</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-brand-rose transition-colors" href="#">Dinner Ideas</a></li>
<li><a className="hover:text-brand-rose transition-colors" href="#">Baking &amp; Desserts</a></li>
<li><a className="hover:text-brand-rose transition-colors" href="#">Healthy Eating</a></li>
<li><a className="hover:text-brand-rose transition-colors" href="#">Cocktails</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-brand-rose transition-colors" href="#">About the Chef</a></li>
<li><a className="hover:text-brand-rose transition-colors" href="#">Cookbook</a></li>
<li><a className="hover:text-brand-rose transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-brand-rose transition-colors" href="#">Partnerships</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-xs uppercase tracking-widest mb-6">Social</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-brand-rose transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon> Instagram</a></li>
<li><a className="hover:text-brand-rose transition-colors flex items-center gap-2" href="#"><iconify-icon icon="brandico:tiktok"></iconify-icon> TikTok</a></li>
<li><a className="hover:text-brand-rose transition-colors flex items-center gap-2" href="#"><iconify-icon icon="brandico:pinterest"></iconify-icon> Pinterest</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-10">
<h2 className="text-[14vw] leading-none text-slate-100 font-serif text-center select-none pointer-events-none">FLAVORS</h2>
<div className="flex justify-between items-center text-xs text-slate-400 mt-4 font-mono uppercase">
<span>© 2024 The Savory Plate</span>
<div className="flex gap-4">
<a className="hover:text-slate-800" href="#">Privacy</a>
<a className="hover:text-slate-800" href="#">Terms</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
