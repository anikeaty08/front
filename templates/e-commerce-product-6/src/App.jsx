import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const products = [
            { name: 'Wireless Earbuds', price: '$129', color: 'from-violet-500 to-violet-700', icon: 'lucide:headphones' },
            { name: 'Smart Watch', price: '$299', color: 'from-blue-500 to-blue-700', icon: 'lucide:watch' },
            { name: 'Leather Bag', price: '$189', color: 'from-amber-500 to-amber-700', icon: 'lucide:briefcase' },
            { name: 'Sunglasses', price: '$149', color: 'from-rose-500 to-rose-700', icon: 'lucide:glasses' },
            { name: 'Sneakers', price: '$179', color: 'from-emerald-500 to-emerald-700', icon: 'lucide:footprints' },
            { name: 'Backpack', price: '$99', color: 'from-cyan-500 to-cyan-700', icon: 'lucide:pack' },
            { name: 'Camera', price: '$449', color: 'from-pink-500 to-pink-700', icon: 'lucide:camera' },
            { name: 'Speakers', price: '$199', color: 'from-indigo-500 to-indigo-700', icon: 'lucide:speaker' }
        ];
        
        const carousel = document.getElementById('carousel');
        const allProducts = [...products, ...products, ...products];
        
        allProducts.forEach((product, index) => {
            const item = document.createElement('div');
            item.className = 'flex-shrink-0 w-36 group cursor-pointer';
            item.innerHTML = `
                <div class="relative bg-gradient-to-br ${product.color} rounded-xl p-4 h-32 flex items-center justify-center mb-2 overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-${product.color.split('-')[1]}-500/20">
                    <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span class="iconify text-white/90 transition-transform duration-500 group-hover:scale-110" data-icon="${product.icon}" data-width="40" style="stroke-width: 1.5;"></span>
                </div>
                <h3 class="text-white text-xs font-medium truncate">${product.name}</h3>
                <p class="text-zinc-400 text-xs">${product.price}</p>
            `;
            carousel.appendChild(item);
        });
        
        let currentIndex = products.length;
        const itemWidth = 160;
        let isAnimating = false;
        let autoplayInterval;
        
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        
        function updateDots() {
            const actualIndex = currentIndex % products.length;
            const dotGroup = Math.floor(actualIndex / 2);
            document.querySelectorAll('.dot').forEach((dot, i) => {
                if (i === dotGroup) {
                    dot.classList.add('w-6', 'bg-white');
                    dot.classList.remove('w-1.5', 'bg-white/30');
                } else {
                    dot.classList.remove('w-6', 'bg-white');
                    dot.classList.add('w-1.5', 'bg-white/30');
                }
            });
        }
        
        function slide(direction) {
            if (isAnimating) return;
            isAnimating = true;
            
            currentIndex += direction;
            carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
            
            setTimeout(() => {
                if (currentIndex >= products.length * 2) {
                    carousel.style.transition = 'none';
                    currentIndex = products.length;
                    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                    setTimeout(() => {
                        carousel.style.transition = 'transform 700ms cubic-bezier(0.25, 0.1, 0.25, 1)';
                    }, 50);
                } else if (currentIndex < products.length) {
                    carousel.style.transition = 'none';
                    currentIndex = products.length * 2 - 1;
                    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
                    setTimeout(() => {
                        carousel.style.transition = 'transform 700ms cubic-bezier(0.25, 0.1, 0.25, 1)';
                    }, 50);
                }
                isAnimating = false;
                updateDots();
            }, 700);
        }
        
        document.getElementById('nextBtn').addEventListener('click', () => {
            slide(1);
            resetAutoplay();
        });
        
        document.getElementById('prevBtn').addEventListener('click', () => {
            slide(-1);
            resetAutoplay();
        });
        
        function startInterval = setInterval(() => slide(1), 3000);
        }
        
        function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
        }
        
        startAutoplay();
        updateDots();
        
        carousel.parentElement.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        carousel.parentElement.addEventListener('mouseleave', startAutoplay);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative bg-gradient-to-br from-zinc-950-zinc-900 to-zinc-950 overflow-hidden" style={{width: '970px', height: '250px', borderRadius: '16px'}}>

<div className="absolute inset-0 opacity-5">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
</div>

<div -bottom-20="" -right-20="" absolute="" bg-blue-600="" blur-3xl"="" className="absolute -top-20 -left-20 w-64 h-64 bg-violet-600 rounded-full opacity-20 &lt;/div&gt; &lt;div class=" h-64="" opacity-20="" rounded-full="" w-64=""></div>

<div className="relative h-full flex">

<div className="flex flex-col justify-center pl-10 pr-6 w-64 flex-shrink-0">
<span className="text-violet-400 text-xs font-medium tracking-wide uppercase mb-2">New Collection</span>
<h2 className="text-white text-2xl font-semibold tracking-tight leading-tight mb-3">Discover Premium Products</h2>
<p className="text-zinc-400 text-xs leading-relaxed mb-4">Curated selection of modern essentials for your lifestyle.</p>
<button className="group flex items-center gap-2 bg-white-xs font-medium px-4 py-2 rounded-lg w-fit hover:bg-zinc-100 transition-all duration-300">
                    Shop Now
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="flex-1 flex items-center overflow-hidden relative">

<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none"></div>

<div className="flex gap-4 transition-transform duration-700" id="carousel" style={{transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'}}>

</div>

<div className="absolute bottom-4 right-6 flex items-center gap-2 z-20">
<button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300" id="prevBtn">
<svg aria-hidden="true" data-icon="lucide:chevron-left" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300" id="nextBtn">
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon="lucide:chevron-right" data-icon-replaced="true" data-width="16" height="16" role="img" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
<div className="dot w-6 h-1 rounded-full bg-white/30 transition-all duration-500" data-index="0"></div>
<div className="dot w-1.5 h-1 rounded-full bg-white/30 transition-all duration-500" data-index="1"></div>
<div className="dot w-1.5 h-1 rounded-full bg-white/30 transition-all duration-500" data-index="2"></div>
<div className="dot w-1.5 h-1 rounded-full bg-white/30 transition-all duration-500" data-index="3"></div>
</div>

<div className="absolute top-4 right-6 text-white text-sm font-semibold tracking-tighter">
            STORE<span className="text-violet-400">.</span>
</div>
</div>

</div></div>
    </>
  );
}
