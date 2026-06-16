import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Data & State
        const items = document.querySelectorAll('.cmd-item');
        const input = document.getElementById('cmd-input');
        const listContainer = document.getElementById('cmd-list');
        let selectedIndex = 0;
        let visibleItems = Array.from(items);

        // --- Core Interactions ---

        // Focus Logic
        function setFocus(index) {
            items.forEach(item => item.setAttribute('aria-selected', 'false'));
            
            if (visibleItems.length === 0) {
                selectedIndex = -1;
                return;
            }
            
            if (index >= visibleItems.length) index = 0;
            if (index < 0) index = visibleItems.length - 1;
            
            selectedIndex = index;
            const currentItem = visibleItems[selectedIndex];
            
            if (currentItem) {
                currentItem.setAttribute('aria-selected', 'true');
                currentItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            }
        }

        setFocus(0);

        // Filter Logic
        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            visibleItems = [];

            items.forEach(item => {
                const keywords = item.getAttribute('data-keywords');
                const text = item.innerText.toLowerCase();
                const match = keywords.includes(query) || text.includes(query);
                
                if (match) {
                    item.style.display = 'flex';
                    visibleItems.push(item);
                } else {
                    item.style.display = 'none';
                }
            });

            const separators = document.querySelectorAll('.h-px');
            separators.forEach(sep => sep.style.display = query ? 'none' : 'block');
            
            const titles = document.querySelectorAll('.uppercase');
            titles.forEach(t => t.style.display = query ? 'none' : 'block');

            const reviews = document.querySelector('.reviews');
            if(reviews) reviews.style.display = query ? 'none' : 'block';

            setFocus(0);
        });

        // Keyboard Navigation
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                input.focus();
            }

            if (e.key === 'Escape') {
                input.value = '';
                input.blur();
                input.dispatchEvent(new Event('input'));
            }

            if ((e.metaKey || e.ctrlKey) && e.key === 's') {
                e.preventDefault();
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSf6pBE9idOVF33I22RuX5h15BfGoXhN8UByOhKRSwxibveoOw/viewform', '_blank');
            }

            if ((e.metaKey || e.ctrlKey) && e.key === 'g') {
                e.preventDefault();
                window.open('https://t.me/+hn5RlIFlTBYyMmM0', '_blank');
            }

            if (visibleItems.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    setFocus(selectedIndex + 1);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    setFocus(selectedIndex - 1);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    visibleItems[selectedIndex].click();
                }
            }
        });

        items.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                const idx = visibleItems.indexOf(item);
                if (idx !== -1) {
                    selectedIndex = idx;
                    items.forEach(i => i.setAttribute('aria-selected', 'false'));
                    item.setAttribute('aria-selected', 'true');
                }
            });
        });

        // --- Reviews Carousel ---
        let currentReview = 1;
        const totalReviews = 2;
        
        function switchReview() {
            const r1 = document.getElementById('review-1');
            const r2 = document.getElementById('review-2');
            const d1 = document.getElementById('dot-1');
            const d2 = document.getElementById('dot-2');

            if (currentReview === 1) {
                r1.style.opacity = '0';
                r1.style.transform = 'translateY(-8px)';
                
                setTimeout(() => {
                    r2.style.opacity = '1';
                    r2.style.transform = 'translateY(0)';
                }, 50);

                d1.classList.replace('bg-[#141115]', 'bg-[#141115]/20');
                d2.classList.replace('bg-[#141115]/20', 'bg-[#141115]');
                currentReview = 2;
            } else {
                r2.style.opacity = '0';
                r2.style.transform = 'translateY(-8px)';
                
                setTimeout(() => {
                    r1.style.opacity = '1';
                    r1.style.transform = 'translateY(0)';
                }, 50);

                d2.classList.replace('bg-[#141115]', 'bg-[#141115]/20');
                d1.classList.replace('bg-[#141115]/20', 'bg-[#141115]');
                currentReview = 1;
            }
            
            setTimeout(() => {
                 if (currentReview === 1) r2.style.transform = 'translateY(8px)';
                 else r1.style.transform = 'translateY(8px)';
            }, 400);
        }

        setInterval(switchReview, 5000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-start justify-center gap-6 lg:gap-8 z-10">

<main className="w-full lg:w-[480px] flex flex-col gap-4 shrink-0">

<header className="mb-1 px-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-[#141115] rounded-full flex items-center justify-center text-white text-[10px] font-bold tracking-tight">LZ</div>
<span className="text-sm font-semibold tracking-tight text-[#141115]">Luki Zip</span>
</div>
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-[#BAFF29] animate-pulse"></span>
<span className="text-xs text-[#6c6c6c] font-medium">Open to work</span>
</div>
</header>

<div className="palette-container w-full bg-white rounded-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-300" id="palette">

<div className="relative border-b border-black/5">
<span className="iconify absolute left-4 top-1/2 -translate-y-1/2 text-[#6c6c6c]" data-icon="lucide:search" data-width="18"></span>
<input autocomplete="off" autofocus="" className="w-full h-14 pl-11 pr-4 bg-transparent outline-none text-[15px] placeholder:text-[#6c6c6c] text-[#141115] font-normal" id="cmd-input" placeholder="Video, Współpraca, AI..." type="text"/>
<div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 pointer-events-none">
<kbd className="h-5 px-1.5 bg-[#F6F5FC] border border-black/10 rounded-[4px] text-[10px] font-medium text-[#6c6c6c] flex items-center">⌘K</kbd>
</div>
</div>

<div className="max-h-[50vh] overflow-y-auto no-scrollbar py-2" id="cmd-list">

<div className="px-2 pt-2 pb-1">
<div className="px-2 pb-2 text-[11px] font-medium text-[#6c6c6c] uppercase tracking-wider">Sugestie</div>

<a className="cmd-item group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200" data-keywords="współpraca contact projekty creative direction" href="https://docs.google.com/forms/d/e/1FAIpQLSf6pBE9idOVF33I22RuX5h15BfGoXhN8UByOhKRSwxibveoOw/viewform" target="_blank">
<div className="flex items-center gap-3">
<div className="icon-box p-1.5 bg-[#F6F5FC] rounded-md text-[#6c6c6c] group-hover:text-[#224DBF] transition-colors">
<span className="iconify" data-icon="lucide:clapperboard" data-width="18"></span>
</div>
<div className="flex flex-col">
<span className="text-[13px] font-medium text-[#141115]">Współpraca</span>
<span className="text-[12px] text-[#6c6c6c]">Projekty &amp; Creative Direction</span>
</div>
</div>
<kbd className="shortcut-key hidden sm:flex h-5 px-1.5 bg-white border border-black/10 rounded-[4px] text-[10px] font-medium text-[#6c6c6c] items-center justify-center transition-colors">⌘S</kbd>
</a>

<a className="cmd-item group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 mt-1" data-keywords="grupka community telegram ai video" href="https://t.me/+hn5RlIFlTBYyMmM0" target="_blank">
<div className="flex items-center gap-3">
<div className="icon-box p-1.5 bg-[#F6F5FC] rounded-md text-[#6c6c6c] group-hover:text-[#224DBF] transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
</div>
<div className="flex flex-col">
<span className="text-[13px] font-medium text-[#141115]">Grupka</span>
<span className="text-[12px] text-[#6c6c6c]">AI Video Community</span>
</div>
</div>
<kbd className="shortcut-key hidden sm:flex h-5 px-1.5 bg-white border border-black/10 rounded-[4px] text-[10px] font-medium text-[#6c6c6c] items-center justify-center transition-colors">⌘G</kbd>
</a>
</div>

<div className="h-px bg-black/5 mx-4 my-2"></div>

<div className="px-2 pt-1 pb-2">
<div className="px-2 pb-2 text-[11px] font-medium text-[#6c6c6c] uppercase tracking-wider">Więcej</div>

<a className="cmd-item group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200" data-keywords="youtube video social" href="https://www.youtube.com/@luki_zip" target="_blank">
<div className="flex items-center gap-3">
<div className="icon-box p-1.5 bg-[#F6F5FC] rounded-md text-[#6c6c6c] group-hover:text-[#224DBF] transition-colors">
<span className="iconify" data-icon="lucide:youtube" data-width="18"></span>
</div>
<span className="text-[13px] font-medium text-[#141115]">YouTube</span>
</div>
<span className="iconify text-[#6c6c6c] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>

<a className="cmd-item group flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 mt-1" data-keywords="tiktok social video" href="https://www.tiktok.com/@luki.zip" target="_blank">
<div className="flex items-center gap-3">
<div className="icon-box p-1.5 bg-[#F6F5FC] rounded-md text-[#6c6c6c] group-hover:text-[#224DBF] transition-colors">
<span className="iconify" data-icon="lucide:music-2" data-width="18"></span>
</div>
<span className="text-[13px] font-medium text-[#141115]">TikTok</span>
</div>
<span className="iconify text-[#6c6c6c] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>

<div className="mt-2 border-t border-black/5 bg-[#F6F5FC]/50 p-4 reviews">
<div className="relative h-24 w-full">

<div className="review-slide absolute inset-0 flex flex-col justify-center opacity-100 pointer-events-none" id="review-1">
<p className="text-[13px] leading-relaxed text-[#141115] italic">"Praca z Lukim to czysta przyjemność. Strona wygląda świetnie, działa bezbłędnie, już zbiera pozytywne opinie."</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[11px] font-semibold text-[#141115]">Kirutika</span>
<span className="text-[11px] text-[#6c6c6c]">CEO Ambrosial Automations</span>
<div className="flex text-[#224DBF]">
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
</div>
</div>
</div>

<div className="review-slide absolute inset-0 flex flex-col justify-center opacity-0 translate-y-2 pointer-events-none" id="review-2">
<p className="text-[13px] leading-relaxed text-[#141115] italic">"Łukasz zrozumiał naszą wizję od razu. Komunikacja mega klarowna. Mogliśmy spać spokojnie."</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-[11px] font-semibold text-[#141115]">Jacek Goszczyński</span>
<span className="text-[11px] text-[#6c6c6c]">CEO JG-Marine</span>
<div className="flex text-[#224DBF]">
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="10" style={{fill: 'currentColor'}}></span>
</div>
</div>
</div>
</div>

<div className="flex justify-start gap-1.5 mt-1">
<button className="w-1.5 h-1.5 rounded-full bg-[#141115] transition-colors" id="dot-1"></button>
<button className="w-1.5 h-1.5 rounded-full bg-[#141115]/20 transition-colors" id="dot-2"></button>
</div>
</div>
</div>
</div>

<footer className="flex items-center justify-between w-full px-2 mt-2">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1.5">
<span className="iconify text-[#6c6c6c]" data-icon="lucide:command" data-width="12"></span>
<span className="text-[11px] text-[#6c6c6c]">Komendy</span>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="text-[11px] text-[#6c6c6c]">ESC zamknij</span>
</div>
</footer>
</main>

<section className="w-full lg:w-[420px] xl:w-[460px] flex flex-col gap-4 shrink-0 transition-all">

<header className="hidden lg:flex mb-1 px-2 items-center justify-between h-[28px]">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tight text-[#141115]">Showreel 2024</span>
</div>
<div className="flex items-center gap-1.5">
<span className="px-1.5 py-0.5 rounded border border-black/10 text-[10px] font-medium text-[#6c6c6c] bg-white">4K</span>
</div>
</header>

<div className="video-card w-full bg-white rounded-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden cursor-pointer group relative">

<div className="relative w-full aspect-video bg-[#111]">

<img alt="Showreel Thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="play-btn h-12 w-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300">
<span className="iconify ml-0.5" data-icon="lucide:play" data-width="20" style={{fill: 'currentColor'}}></span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-between">
<div>
<p className="text-white text-[13px] font-medium tracking-tight">AI &amp; Video Production</p>
<p className="text-white/70 text-[11px]">01:34 • Edited by Luki</p>
</div>
<span className="iconify text-white/80" data-icon="lucide:maximize-2" data-width="16"></span>
</div>


</div>

<div className="lg:hidden p-3 border-t border-black/5 flex items-center justify-between bg-white">
<span className="text-[13px] font-medium text-[#141115]">Showreel 2024</span>
<div className="flex items-center gap-1 text-[#6c6c6c]">
<span className="iconify" data-icon="lucide:film" data-width="14"></span>
<span className="text-[11px]">Zobacz więcej</span>
</div>
</div>
</div>

<div className="hidden lg:flex flex-wrap gap-2 px-1">
<span className="px-2 py-1 rounded bg-black/5 text-[10px] font-medium text-[#6c6c6c]">DaVinci Resolve</span>
<span className="px-2 py-1 rounded bg-black/5 text-[10px] font-medium text-[#6c6c6c]">After Effects</span>
<span className="px-2 py-1 rounded bg-black/5 text-[10px] font-medium text-[#6c6c6c]">Midjourney</span>
<span className="px-2 py-1 rounded bg-black/5 text-[10px] font-medium text-[#6c6c6c]">RunwayML</span>
</div>
</section>
</div>


    </>
  );
}
