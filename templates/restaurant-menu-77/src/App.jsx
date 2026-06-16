import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const slider = document.getElementById('slider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const progressBar = document.getElementById('progressBar');

        const scrollAmount = () => {
            // Determine scroll amount based on child width (responsive)
            const card = slider.querySelector('div.snap-center');
            return card ? card.offsetWidth + 24 : 300; // 24 is the gap (gap-6)
        };

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });

        // Update progress bar and button states
        slider.addEventListener('scroll', () => {
            const maxScroll = slider.scrollWidth - slider.clientWidth;
            const scrollPercentage = slider.scrollLeft / maxScroll;
            
            // Adjust progress bar width (simple interpolation)
            // Base width 16.6% (1/6), moving to 100%
            const progress = 16.6 + (scrollPercentage * 83.4);
            progressBar.style.width = `${Math.min(100, Math.max(16.6, progress))}%`;
            
            // Disable buttons logic
            prevBtn.disabled = slider.scrollLeft <= 10;
            nextBtn.disabled = slider.scrollLeft >= maxScroll - 10;
            
            // Visual opacity for disabled state
            prevBtn.style.opacity = slider.scrollLeft <= 10 ? '0.5' : '1';
            nextBtn.style.opacity = slider.scrollLeft >= maxScroll - 10 ? '0.5' : '1';
        });

        // Initial check
        prevBtn.style.opacity = '0.5';
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav bis_size='{"x":0,"y":0,"w":824,"h":90,"abs_x":440,"abs_y":42}' className="w-full px-6 py-6 max-w-7xl mx-auto flex items-center justify-between">
<div bis_size='{"x":24,"y":35,"w":69,"h":20,"abs_x":464,"abs_y":77}' className="text-sm font-semibold tracking-tighter uppercase text-stone-900">
            Culinary.
        </div>
<div bis_size='{"x":309,"y":37,"w":186,"h":16,"abs_x":749,"abs_y":79}' className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-500">
<a bis_size='{"x":309,"y":37,"w":32,"h":16,"abs_x":749,"abs_y":79}' className="hover:text-stone-900 transition-colors" href="#">Menu</a>
<a bis_size='{"x":374,"y":37,"w":55,"h":16,"abs_x":814,"abs_y":79}' className="hover:text-stone-900 transition-colors" href="#">Locations</a>
<a bis_size='{"x":462,"y":37,"w":33,"h":16,"abs_x":902,"abs_y":79}' className="hover:text-stone-900 transition-colors" href="#">Chefs</a>
</div>
<div bis_size='{"x":712,"y":24,"w":88,"h":42,"abs_x":1152,"abs_y":66}' className="flex items-center gap-4">
<button bis_size='{"x":712,"y":24,"w":36,"h":42,"abs_x":1152,"abs_y":66}' className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon bis_size='{"x":720,"y":32,"w":20,"h":20,"abs_x":1160,"abs_y":74}' height="20" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button bis_size='{"x":764,"y":24,"w":36,"h":42,"abs_x":1204,"abs_y":66}' className="p-2 text-stone-500 hover:text-stone-900 transition-colors relative">
<iconify-icon bis_size='{"x":772,"y":32,"w":20,"h":20,"abs_x":1212,"abs_y":74}' height="20" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span bis_size='{"x":788,"y":28,"w":8,"h":8,"abs_x":1228,"abs_y":70}' className="absolute top-1 right-1 w-2 h-2 bg-orange-500 rounded-full border border-stone-50"></span>
</button>
</div>
</nav>

<main bis_size='{"x":0,"y":90,"w":824,"h":807,"abs_x":440,"abs_y":132}' className="flex-grow flex flex-col justify-center py-10">

<div bis_size='{"x":0,"y":130,"w":824,"h":141,"abs_x":440,"abs_y":172}' className="max-w-7xl mx-auto w-full px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div bis_size='{"x":24,"y":130,"w":448,"h":141,"abs_x":464,"abs_y":172}' className="space-y-2">
<span bis_size='{"x":24,"y":136,"w":132,"h":14,"abs_x":464,"abs_y":178}' className="text-xs font-medium text-orange-600 uppercase tracking-wide">Curated Selection</span>
<h1 bis_size='{"x":24,"y":162,"w":448,"h":48,"abs_x":464,"abs_y":204}' className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">Seasonal Tastes</h1>
<p bis_size='{"x":24,"y":218,"w":448,"h":53,"abs_x":464,"abs_y":260}' className="text-stone-500 max-w-md text-sm leading-relaxed pt-2">
                    Explore our rotating menu of chef-inspired dishes, crafted with locally sourced ingredients and served with elegance.
                </p>
</div>

<div bis_size='{"x":712,"y":232,"w":88,"h":40,"abs_x":1152,"abs_y":274}' className="flex items-center gap-2">
<button bis_size='{"x":712,"y":232,"w":40,"h":40,"abs_x":1152,"abs_y":274}' className="group flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed" id="prevBtn" style={{opacity: '0.5'}}>
<iconify-icon bis_size='{"x":723,"y":243,"w":18,"h":18,"abs_x":1163,"abs_y":285}' className="text-stone-600 group-hover:text-stone-900" height="18" icon="lucide:arrow-left" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button bis_size='{"x":760,"y":232,"w":40,"h":40,"abs_x":1200,"abs_y":274}' className="group flex items-center justify-center w-10 h-10 rounded-full border border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed" id="nextBtn">
<iconify-icon bis_size='{"x":771,"y":243,"w":18,"h":18,"abs_x":1211,"abs_y":285}' className="text-stone-600 group-hover:text-stone-900" height="18" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div bis_size='{"x":0,"y":320,"w":824,"h":537,"abs_x":440,"abs_y":362}' className="relative w-full">

<div bis_size='{"x":0,"y":320,"w":824,"h":520,"abs_x":440,"abs_y":362}' className="no-scrollbar flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-6 max-w-[1920px] mx-auto pb-12 scroll-smooth" id="slider">

<div bis_size='{"x":24,"y":320,"w":378,"h":472,"abs_x":464,"abs_y":362}' className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] group cursor-pointer">
<div bis_size='{"x":24,"y":320,"w":378,"h":472,"abs_x":464,"abs_y":362}' className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
<img alt="Healthy Bowl" bis_size='{"x":24,"y":320,"w":376,"h":471,"abs_x":464,"abs_y":362}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":24,"y":320,"w":376,"h":471,"abs_x":464,"abs_y":362}' className="bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":24,"y":676,"w":376,"h":124,"abs_x":464,"abs_y":718}' className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div bis_size='{"x":48,"y":700,"w":328,"h":16,"abs_x":488,"abs_y":742}' className="flex items-center gap-2 text-xs font-medium text-orange-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon bis_size='{"x":48,"y":701,"w":14,"h":14,"abs_x":488,"abs_y":743}' icon="lucide:flame" strokeWidth="1.5" width="14"></iconify-icon>
<span bis_size='{"x":70,"y":700,"w":50,"h":16,"abs_x":510,"abs_y":742}'>Trending</span>
</div>
<h3 bis_size='{"x":48,"y":724,"w":328,"h":28,"abs_x":488,"abs_y":766}' className="text-xl font-medium tracking-tight mb-1">Avocado Green Bowl</h3>
<div bis_size='{"x":48,"y":756,"w":328,"h":20,"abs_x":488,"abs_y":798}' className="flex justify-between items-center text-sm text-stone-200">
<span bis_size='{"x":48,"y":756,"w":88,"h":20,"abs_x":488,"abs_y":798}'>Fresh Greens</span>
<span bis_size='{"x":330,"y":756,"w":46,"h":20,"abs_x":770,"abs_y":798}' className="font-semibold text-white">$14.00</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":426,"y":320,"w":378,"h":472,"abs_x":866,"abs_y":362}' className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] group cursor-pointer">
<div bis_size='{"x":426,"y":320,"w":378,"h":472,"abs_x":866,"abs_y":362}' className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
<img alt="Pizza" bis_size='{"x":426,"y":320,"w":376,"h":471,"abs_x":866,"abs_y":362}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/edf72822-798b-4227-b147-09b3930ed416_800w.jpg"/>
<div bis_size='{"x":426,"y":320,"w":376,"h":471,"abs_x":866,"abs_y":362}' className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div bis_size='{"x":426,"y":676,"w":376,"h":124,"abs_x":866,"abs_y":718}' className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div bis_size='{"x":450,"y":700,"w":328,"h":16,"abs_x":890,"abs_y":742}' className="flex items-center gap-2 text-xs font-medium text-orange-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon bis_size='{"x":450,"y":701,"w":14,"h":14,"abs_x":890,"abs_y":743}' icon="lucide:star" strokeWidth="1.5" width="14"></iconify-icon>
<span bis_size='{"x":472,"y":700,"w":81,"h":16,"abs_x":912,"abs_y":742}'>Chef's Choice</span>
</div>
<h3 bis_size='{"x":450,"y":724,"w":328,"h":28,"abs_x":890,"abs_y":766}' className="text-xl font-medium tracking-tight mb-1">Margherita Artisan</h3>
<div bis_size='{"x":450,"y":756,"w":328,"h":20,"abs_x":890,"abs_y":798}' className="flex justify-between items-center text-sm text-stone-200">
<span bis_size='{"x":450,"y":756,"w":120,"h":20,"abs_x":890,"abs_y":798}'>Italian Stone Oven</span>
<span bis_size='{"x":733,"y":756,"w":45,"h":20,"abs_x":1173,"abs_y":798}' className="font-semibold text-white">$18.50</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":828,"y":320,"w":378,"h":472,"abs_x":1268,"abs_y":362}' className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] group cursor-pointer">
<div bis_size='{"x":828,"y":320,"w":378,"h":472,"abs_x":1268,"abs_y":362}' className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
<img alt="Dim Sum" bis_size='{"x":828,"y":320,"w":376,"h":471,"abs_x":1268,"abs_y":362}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":828,"y":320,"w":376,"h":471,"abs_x":1268,"abs_y":362}' className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div bis_size='{"x":828,"y":676,"w":376,"h":124,"abs_x":1268,"abs_y":718}' className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div bis_size='{"x":852,"y":700,"w":328,"h":16,"abs_x":1292,"abs_y":742}' className="flex items-center gap-2 text-xs font-medium text-orange-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon bis_size='{"x":852,"y":701,"w":14,"h":14,"abs_x":1292,"abs_y":743}' icon="lucide:clock" strokeWidth="1.5" width="14"></iconify-icon>
<span bis_size='{"x":874,"y":700,"w":68,"h":16,"abs_x":1314,"abs_y":742}'>20 min prep</span>
</div>
<h3 bis_size='{"x":852,"y":724,"w":328,"h":28,"abs_x":1292,"abs_y":766}' className="text-xl font-medium tracking-tight mb-1">Cantonese Dim Sum</h3>
<div bis_size='{"x":852,"y":756,"w":328,"h":20,"abs_x":1292,"abs_y":798}' className="flex justify-between items-center text-sm text-stone-200">
<span bis_size='{"x":852,"y":756,"w":123,"h":20,"abs_x":1292,"abs_y":798}'>Steamed Selection</span>
<span bis_size='{"x":1132,"y":756,"w":49,"h":20,"abs_x":1572,"abs_y":798}' className="font-semibold text-white">$22.00</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":1230,"y":320,"w":378,"h":472,"abs_x":1670,"abs_y":362}' className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] group cursor-pointer">
<div bis_size='{"x":1230,"y":320,"w":378,"h":472,"abs_x":1670,"abs_y":362}' className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
<img alt="Burger" bis_size='{"x":1230,"y":320,"w":376,"h":471,"abs_x":1670,"abs_y":362}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1230,"y":320,"w":376,"h":471,"abs_x":1670,"abs_y":362}' className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div bis_size='{"x":1230,"y":676,"w":376,"h":124,"abs_x":1670,"abs_y":718}' className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div bis_size='{"x":1254,"y":700,"w":328,"h":16,"abs_x":1694,"abs_y":742}' className="flex items-center gap-2 text-xs font-medium text-orange-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon bis_size='{"x":1254,"y":701,"w":14,"h":14,"abs_x":1694,"abs_y":743}' icon="lucide:thumbs-up" strokeWidth="1.5" width="14"></iconify-icon>
<span bis_size='{"x":1276,"y":700,"w":57,"h":16,"abs_x":1716,"abs_y":742}'>Top Rated</span>
</div>
<h3 bis_size='{"x":1254,"y":724,"w":328,"h":28,"abs_x":1694,"abs_y":766}' className="text-xl font-medium tracking-tight mb-1">Wagyu Signature</h3>
<div bis_size='{"x":1254,"y":756,"w":328,"h":20,"abs_x":1694,"abs_y":798}' className="flex justify-between items-center text-sm text-stone-200">
<span bis_size='{"x":1254,"y":756,"w":95,"h":20,"abs_x":1694,"abs_y":798}'>Aged Cheddar</span>
<span bis_size='{"x":1534,"y":756,"w":49,"h":20,"abs_x":1974,"abs_y":798}' className="font-semibold text-white">$24.00</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":1632,"y":320,"w":378,"h":472,"abs_x":2072,"abs_y":362}' className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] group cursor-pointer">
<div bis_size='{"x":1632,"y":320,"w":378,"h":472,"abs_x":2072,"abs_y":362}' className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
<img alt="Sushi" bis_size='{"x":1632,"y":320,"w":376,"h":471,"abs_x":2072,"abs_y":362}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1632,"y":320,"w":376,"h":471,"abs_x":2072,"abs_y":362}' className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div bis_size='{"x":1632,"y":676,"w":376,"h":124,"abs_x":2072,"abs_y":718}' className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div bis_size='{"x":1656,"y":700,"w":328,"h":16,"abs_x":2096,"abs_y":742}' className="flex items-center gap-2 text-xs font-medium text-orange-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon bis_size='{"x":1656,"y":701,"w":14,"h":14,"abs_x":2096,"abs_y":743}' icon="lucide:fish" strokeWidth="1.5" width="14"></iconify-icon>
<span bis_size='{"x":1678,"y":700,"w":65,"h":16,"abs_x":2118,"abs_y":742}'>Daily Catch</span>
</div>
<h3 bis_size='{"x":1656,"y":724,"w":328,"h":28,"abs_x":2096,"abs_y":766}' className="text-xl font-medium tracking-tight mb-1">Nigiri Platter</h3>
<div bis_size='{"x":1656,"y":756,"w":328,"h":20,"abs_x":2096,"abs_y":798}' className="flex justify-between items-center text-sm text-stone-200">
<span bis_size='{"x":1656,"y":756,"w":118,"h":20,"abs_x":2096,"abs_y":798}'>Japanese Imports</span>
<span bis_size='{"x":1936,"y":756,"w":49,"h":20,"abs_x":2376,"abs_y":798}' className="font-semibold text-white">$32.00</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":2034,"y":320,"w":378,"h":472,"abs_x":2474,"abs_y":362}' className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] xl:w-[25vw] group cursor-pointer">
<div bis_size='{"x":2034,"y":320,"w":378,"h":472,"abs_x":2474,"abs_y":362}' className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200">
<img alt="Pasta" bis_size='{"x":2034,"y":320,"w":376,"h":471,"abs_x":2474,"abs_y":362}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":2034,"y":320,"w":376,"h":471,"abs_x":2474,"abs_y":362}' className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div bis_size='{"x":2034,"y":676,"w":376,"h":124,"abs_x":2474,"abs_y":718}' className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div bis_size='{"x":2058,"y":700,"w":328,"h":16,"abs_x":2498,"abs_y":742}' className="flex items-center gap-2 text-xs font-medium text-orange-200 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<iconify-icon bis_size='{"x":2058,"y":701,"w":14,"h":14,"abs_x":2498,"abs_y":743}' icon="lucide:heart" strokeWidth="1.5" width="14"></iconify-icon>
<span bis_size='{"x":2080,"y":700,"w":62,"h":16,"abs_x":2520,"abs_y":742}'>Vegetarian</span>
</div>
<h3 bis_size='{"x":2058,"y":724,"w":328,"h":28,"abs_x":2498,"abs_y":766}' className="text-xl font-medium tracking-tight mb-1">Truffle Carbonara</h3>
<div bis_size='{"x":2058,"y":756,"w":328,"h":20,"abs_x":2498,"abs_y":798}' className="flex justify-between items-center text-sm text-stone-200">
<span bis_size='{"x":2058,"y":756,"w":116,"h":20,"abs_x":2498,"abs_y":798}'>Homemade Pasta</span>
<span bis_size='{"x":2338,"y":756,"w":48,"h":20,"abs_x":2778,"abs_y":798}' className="font-semibold text-white">$26.00</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":2436,"y":320,"w":8,"h":472,"abs_x":2876,"abs_y":362}' className="shrink-0 w-2"></div>
</div>

<div bis_size='{"x":0,"y":856,"w":824,"h":1,"abs_x":440,"abs_y":898}' className="max-w-7xl mx-auto px-6 mt-4">
<div bis_size='{"x":24,"y":856,"w":776,"h":1,"abs_x":464,"abs_y":898}' className="w-full h-[1px] bg-stone-200 rounded-full overflow-hidden">
<div bis_size='{"x":24,"y":856,"w":124,"h":1,"abs_x":464,"abs_y":898}' className="w-[16%] h-full bg-stone-900 transition-all duration-300 ease-out" id="progressBar"></div>
</div>
</div>
</div>
</main>

<footer bis_size='{"x":0,"y":897,"w":824,"h":80,"abs_x":440,"abs_y":939}' className="w-full py-8 border-t border-stone-100 mt-auto">
<div bis_size='{"x":0,"y":930,"w":824,"h":16,"abs_x":440,"abs_y":972}' className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p bis_size='{"x":24,"y":930,"w":228,"h":16,"abs_x":464,"abs_y":972}'>© 2024 Culinary Inc. All rights reserved.</p>
<div bis_size='{"x":629,"y":930,"w":171,"h":16,"abs_x":1069,"abs_y":972}' className="flex gap-6">
<a bis_size='{"x":629,"y":930,"w":42,"h":16,"abs_x":1069,"abs_y":972}' className="hover:text-stone-900 transition-colors" href="#">Privacy</a>
<a bis_size='{"x":695,"y":930,"w":35,"h":16,"abs_x":1135,"abs_y":972}' className="hover:text-stone-900 transition-colors" href="#">Terms</a>
<a bis_size='{"x":754,"y":930,"w":46,"h":16,"abs_x":1194,"abs_y":972}' className="hover:text-stone-900 transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>


    </>
  );
}
