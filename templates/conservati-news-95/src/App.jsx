import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
        console.log('MagaNewsHQ: System Online');
        
        // Date Display
        const dateEl = document.getElementById('current-date');
        if(dateEl) {
            dateEl.textContent = new Date().toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
        }

        const main = document.querySelector('#articles');
        const updateStatus = document.querySelector('#update-status');
        const lastServerFetch = 1770777568;
        const existingLinks = new Set();
        document.querySelectorAll('.article-card a[href]').forEach(a => existingLinks.add(a.href));

        function formatTimestamps() {
            document.querySelectorAll('.article-date').forEach(el => {
                const ts = parseInt(el.dataset.timestamp, 10);
                if (ts) {
                    const date = new Date(ts * 1000);
                    // Calculate relative time
                    const diff = Math.floor((new Date() - date) / 1000);
                    if (diff < 3600) el.textContent = Math.floor(diff / 60) + 'm ago';
                    else if (diff < 86400) el.textContent = Math.floor(diff / 3600) + 'h ago';
                    else el.textContent = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                }
            });
        }
        formatTimestamps();

        // Share functionality
        document.addEventListener('click', async function(e) {
            const btn = e.target.closest('.share-button');
            if (!btn) return;
            e.preventDefault();
            const url = btn.dataset.url;
            
            // Animation feedback
            const icon = btn.querySelector('iconify-icon');
            const originalIcon = icon.getAttribute('icon');
            
            try {
                if (navigator.share) await navigator.share({ title: 'Maga News HQ', url });
                else {
                    await navigator.clipboard.writeText(url);
                    icon.setAttribute('icon', 'solar:check-circle-bold');
                    icon.classList.add('text-green-600');
                    setTimeout(() => {
                        icon.setAttribute('icon', originalIcon);
                        icon.classList.remove('text-green-600');
                    }, 2000);
                }
            } catch (err) { console.error('Share failed', err); }
        });

        // Mobile menu
        const burger = document.querySelector('.menu-burger');
        const mobileMenu = document.querySelector('.mobile-menu');
        burger.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
            const icon = burger.querySelector('iconify-icon');
            if (mobileMenu.classList.contains('translate-x-full')) {
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            } else {
                icon.setAttribute('icon', 'solar:close-circle-linear');
            }
        });

        // Ad Rotator
        const slides = document.querySelectorAll('.ad-slide');
        if (slides.length > 0) {
            let current = 0;
            setInterval(() => {
                slides[current].classList.remove('active', 'opacity-100');
                slides[current].classList.add('opacity-0');
                current = (current + 1) % slides.length;
                slides[current].classList.remove('opacity-0');
                slides[current].classList.add('active', 'opacity-100');
            }, 8000);
        }

        // Auto update logic
        async function fetchNewArticles() {
            updateStatus.classList.remove('hidden');
            updateStatus.classList.add('flex');
            
            try {
                const response = await fetch('/api.php?_t=' + Date.now());
                const data = await response.json();
                const items = Array.isArray(data) ? data : (data.articles || []);
                const newItems = items.filter(a => !existingLinks.has(a.link) && (Date.parse(a.pubDate)/1000 > lastServerFetch));
                
                if (newItems.length > 0) {
                    for (const article of newItems) {
                        const articleEl = document.createElement('article');
                        articleEl.className = 'article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col animate-fade-in';
                        articleEl.innerHTML = `
                            <div class="relative overflow-hidden aspect-[16/10] bg-zinc-100">
                                <div class="absolute top-2 left-2 z-10 px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold uppercase rounded">New</div>
                                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="p-5 flex flex-col gap-3 flex-1">
                                <div class="flex items-center justify-between text-xs">
                                    <span class="font-bold text-red-700 uppercase tracking-wider text-[10px]">Breaking</span>
                                    <span class="text-zinc-400">Just now</span>
                                </div>
                                <h2 class="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-red-700 transition-colors">
                                    <a href="${article.link}" target="_blank">${article.title}</a>
                                </h2>
                                <div class="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
                                    <span class="text-xs font-medium text-zinc-500">${article.source || 'News'}</span>
                                    <button class="share-button text-zinc-400 hover:text-red-600" data-url="${article.link}">
                                        <iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
                                    </button>
                                </div>
                            </div>`;
                        // Insert after featured if exists, else prepend
                        const featured = document.querySelector('.col-span-2');
                        if(featured) {
                            featured.after(articleEl);
                        } else {
                            main.prepend(articleEl);
                        }
                        existingLinks.add(article.link);
                    }
                }
            } catch(e) {}
            setTimeout(() => {
                updateStatus.classList.add('hidden');
                updateStatus.classList.remove('flex');
            }, 2000);
        }
        setInterval(fetchNewArticles, 60000);
    });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#0f172a] text-white text-xs font-medium py-2 border-b border-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex items-center justify-between gap-4">
<div className="flex items-center gap-2 shrink-0">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
<span className="uppercase tracking-widest text-red-400 font-bold text-[10px]">Breaking News</span>
</div>
<div className="flex-1 overflow-hidden mask-linear-fade">
<marquee behavior="scroll" className="opacity-90 tracking-wide font-medium" direction="left" scrollamount="4">
                    TRUMP RALLY SCHEDULED FOR PENNSYLVANIA *** ITALY AVALANCHE DISASTER: DEATH TOLL RISES *** FBI RELEASES NEW NANCY GUTHRIE EVIDENCE *** CALIFORNIA HIGH-SPEED RAIL FACES NEW "GASLIGHTING" CHARGES *** NIKKI HALEY CALLS FOR IRAN ACTION ***
                </marquee>
</div>
<div className="hidden sm:flex items-center gap-3 text-zinc-400">
<span id="current-date">Loading...</span>
</div>
</div>
</div>

<header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-6">
<a className="group flex items-center gap-2.5" href="/index.php">
<div className="relative h-9 w-9 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm border border-red-500/20">
                        M
                        <div className="absolute -top-1 -right-1">
<iconify-icon className="text-blue-600" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
<div className="flex flex-col -gap-1">
<span className="font-extrabold text-lg tracking-tighter leading-none text-zinc-900">MAGA NEWS</span>
<span className="text-[10px] font-bold tracking-[0.2em] text-red-700 uppercase leading-none">Headquarters</span>
</div>
</a>
</div>

<nav className="hidden md:flex items-center gap-1 p-1 bg-zinc-100/50 rounded-full border border-zinc-200/50">
<a className="px-4 py-1.5 text-sm font-medium text-zinc-900 bg-white shadow-sm rounded-full transition-all" href="/index.php">Home</a>
<a className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="/news.php">News</a>
<a className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="/about.php">Mission</a>
<a className="px-4 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="/contact.php">Contact</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white bg-red-700 hover:bg-red-800 rounded-md transition-colors shadow-sm" href="https://www.buymeacoffee.com/maganews" target="_blank">
                    Donate
                    <iconify-icon icon="solar:heart-linear" width="14"></iconify-icon>
</a>
<a aria-label="Login" className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all" href="/admin/login.php">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>

<button aria-label="Menu" className="menu-burger md:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-md">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="mobile-menu fixed inset-0 z-40 bg-zinc-50/95 backdrop-blur-xl transform translate-x-full transition-transform duration-300 md:hidden pt-24 px-6 flex flex-col">
<nav className="flex flex-col gap-2 text-lg font-semibold text-zinc-900">
<a className="p-3 bg-white rounded-lg border border-zinc-200 shadow-sm" href="/index.php">Home</a>
<a className="p-3 bg-white rounded-lg border border-zinc-200 shadow-sm" href="/news.php">News Feed</a>
<a className="p-3 bg-white rounded-lg border border-zinc-200 shadow-sm" href="/about.php">Mission Statement</a>
<a className="p-3 bg-white rounded-lg border border-zinc-200 shadow-sm" href="/contact.php">Contact Us</a>
<a className="p-3 bg-red-600 text-white rounded-lg border border-red-500 shadow-sm text-center mt-4" href="https://www.buymeacoffee.com/maganews">Donate to the Cause</a>
</nav>
<div className="mt-auto mb-8 border-t border-zinc-200 pt-6">
<div className="flex gap-6 justify-center">
<a className="text-zinc-400 hover:text-[#1877F2]" href="https://www.facebook.com/MagaNewsHQ" target="_blank"><iconify-icon icon="logos:facebook" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-[#FF0000]" href="https://www.youtube.com/@MagaNewsHQ" target="_blank"><iconify-icon icon="logos:youtube-icon" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-[#E4405F]" href="https://www.instagram.com/MagaNewsHQ" target="_blank"><iconify-icon icon="skill-icons:instagram" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-black" href="https://www.tiktok.com/@Officialmaganews" target="_blank"><iconify-icon icon="logos:tiktok-icon" width="24"></iconify-icon></a>
</div>
</div>
</div>

<main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full space-y-8">

<div className="w-full bg-white rounded-2xl overflow-hidden relative shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-zinc-200 ring-1 ring-zinc-100">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600 z-20"></div>
<div className="aspect-[21/9] md:aspect-[32/9] relative bg-zinc-100">
<div className="ad-banner-rotator h-full w-full relative" id="adRotator">
<div className="ad-slide active absolute inset-0 transition-opacity duration-1000 opacity-0 [&amp;.active]:opacity-100">
<a className="block w-full h-full group" href="" target="_blank">
<video autoplay="" className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700" loop="" muted="" playsinline="" src="https://maganewshq.com/ads/ad_68fecc0b2bf9b.mp4"></video>
</a>
</div>
</div>

<div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md text-zinc-500 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded border border-zinc-200/50">Sponsored</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-200 pb-4">
<div>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-red-600" icon="solar:fire-bold"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest text-red-600">Top Stories</span>
</div>
<h1 className="text-3xl font-bold tracking-tighter text-zinc-900">Front Line News</h1>
</div>
<div className="hidden flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium animate-pulse border border-blue-100" id="update-status">
<iconify-icon className="animate-spin" icon="solar:refresh-circle-linear" width="14"></iconify-icon>
                Updating live feed...
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="articles">


<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col md:col-span-2 lg:col-span-2 relative" data-timestamp="1770776035">
<div className="absolute top-0 left-0 w-1 h-full bg-red-600 z-10"></div>
<div className="flex flex-col md:flex-row h-full">
<div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
<img alt="Avalanche" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/02/931/523/italy-search-and-rescue-mountain-3.jpg?ve=1&amp;tl=1"/>
</div>
<div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br from-white to-zinc-50">
<div className="space-y-3">
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700 border border-red-200">World Alert</span>
<span className="text-zinc-400 text-xs article-date" data-timestamp="1770776035">Loading...</span>
</div>
<h2 className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-zinc-900 group-hover:text-red-700 transition-colors">
<a href="https://www.foxnews.com/world/record-setting-wave-mountain-deaths-rocks-italy-avalanches-strike" target="_blank">Record-setting wave of mountain deaths rocks Italy after avalanches strike</a>
</h2>
<p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">At least a dozen people died in Italian backcountry avalanches after the Winter Olympics began. Officials cited unstable snow conditions in a tragedy that has shaken the region.</p>
</div>
<div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
<span className="flex items-center gap-1 text-xs font-semibold text-zinc-900">
<iconify-icon className="text-zinc-400" icon="solar:tv-linear"></iconify-icon> Fox News
                            </span>
<div className="flex gap-2">
<button className="share-button p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-all" data-url="https://www.foxnews.com/world/record-setting-wave-mountain-deaths-rocks-italy-avalanches-strike">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770775901">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="Nancy Guthrie Case" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://static.foxnews.com/foxnews.com/content/uploads/2026/02/nancy-guthrie-suspect.gif"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-blue-700 uppercase tracking-wider text-[10px]">Crime</span>
<span className="text-zinc-400 article-date" data-timestamp="1770775901">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-blue-700 transition-colors">
<a href="https://www.foxnews.com/us/what-timing-fbis-image-release-suggests-nancy-guthrie-case-crime-insider" target="_blank">What the timing of the FBI’s image release suggests in the Nancy Guthrie case</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Fox News</span>
<button className="share-button text-zinc-400 hover:text-blue-600" data-url="https://www.foxnews.com/us/what-timing-fbis-image-release-suggests-nancy-guthrie-case-crime-insider">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770775887">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="High Speed Rail" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://nypost.com/wp-content%2Fuploads%2Fsites%2F2%2F2026%2F02%2Ftrain_e09b68.jpg?quality%3D90%26strip%3Dall"/>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-red-700 uppercase tracking-wider text-[10px]">Waste Watch</span>
<span className="text-zinc-400 article-date" data-timestamp="1770775887">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-red-700 transition-colors">
<a href="https://nypost.com/2026/02/10/us-news/high-speed-rail-to-yosemite-critics-say-its-gaslighting/" target="_blank">California High-Speed Rail pitch to Yosemite mocked as ‘gaslighting’</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">NY Post</span>
<button className="share-button text-zinc-400 hover:text-red-600" data-url="https://nypost.com/2026/02/10/us-news/high-speed-rail-to-yosemite-critics-say-its-gaslighting/">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770775257">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="JFK Grandson" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/02/931/523/jack-schlossberg-rfkjr-dangerous.jpg?ve=1&amp;tl=1"/>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-zinc-600 uppercase tracking-wider text-[10px]">Politics</span>
<span className="text-zinc-400 article-date" data-timestamp="1770775257">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-blue-700 transition-colors">
<a href="https://www.foxnews.com/media/jfks-grandson-jack-schlossberg-doubles-down-attacks-rfk-jr-warns-dangerous-agenda" target="_blank">JFK’s grandson Jack Schlossberg doubles down on attacks against RFK Jr</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Fox News</span>
<button className="share-button text-zinc-400 hover:text-blue-600" data-url="https://www.foxnews.com/media/jfks-grandson-jack-schlossberg-doubles-down-attacks-rfk-jr-warns-dangerous-agenda">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770774589">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="Nikki Haley" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/11/931/523/nikki-haley-chinese-visas.jpg?ve=1&amp;tl=1"/>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-red-700 uppercase tracking-wider text-[10px]">National Security</span>
<span className="text-zinc-400 article-date" data-timestamp="1770774589">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-red-700 transition-colors">
<a href="https://www.foxnews.com/media/nikki-haley-urges-trump-make-iran-action-legacy-defining-moment-before-leaving-office" target="_blank">Nikki Haley urges Trump to make Iran action a 'legacy-defining moment'</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Fox News</span>
<button className="share-button text-zinc-400 hover:text-red-600" data-url="https://www.foxnews.com/media/nikki-haley-urges-trump-make-iran-action-legacy-defining-moment-before-leaving-office">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770773908">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="SF Teachers Strike" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://nypost.com/wp-content%2Fuploads%2Fsites%2F2%2F2026%2F02%2F120898358.jpg?quality%3D90%26strip%3Dall"/>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-red-700 uppercase tracking-wider text-[10px]">Education</span>
<span className="text-zinc-400 article-date" data-timestamp="1770773908">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-red-700 transition-colors">
<a href="https://nypost.com/2026/02/10/us-news/striking-san-francisco-teachers-tell-parents-to-skip-homework/" target="_blank">Teachers email parents demanding they don’t homeschool kids as strike grinds on</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">NY Post</span>
<button className="share-button text-zinc-400 hover:text-red-600" data-url="https://nypost.com/2026/02/10/us-news/striking-san-francisco-teachers-tell-parents-to-skip-homework/">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770773604">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="Reparations" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2025/07/931/523/cash-photo.jpg?ve=1&amp;tl=1"/>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-zinc-600 uppercase tracking-wider text-[10px]">US News</span>
<span className="text-zinc-400 article-date" data-timestamp="1770773604">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-blue-700 transition-colors">
<a href="https://www.foxnews.com/media/evanston-reparations-committee-issue-25k-44-residents" target="_blank">Illinois city hands out $25K cash payments to 44 Black residents</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Fox News</span>
<button className="share-button text-zinc-400 hover:text-blue-600" data-url="https://www.foxnews.com/media/evanston-reparations-committee-issue-25k-44-residents">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770772223">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="Sam Darnold" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/02/931/523/sam-darnold-super-bowl-lx.jpg?ve=1&amp;tl=1"/>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-zinc-600 uppercase tracking-wider text-[10px]">Sports</span>
<span className="text-zinc-400 article-date" data-timestamp="1770772223">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-blue-700 transition-colors">
<a href="https://www.foxnews.com/sports/sam-darnold-what-his-nfl-journeys-lesson-would-after-super-bowl-win-always-believe-yourself" target="_blank">Sam Darnold on what his NFL journey's lesson would be after Super Bowl win</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Fox News</span>
<button className="share-button text-zinc-400 hover:text-blue-600" data-url="https://www.foxnews.com/sports/sam-darnold-what-his-nfl-journeys-lesson-would-after-super-bowl-win-always-believe-yourself">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="article-card group bg-white rounded-2xl border border-zinc-200 overflow-hidden flex flex-col" data-timestamp="1770771622">
<div className="relative overflow-hidden aspect-[16/10] bg-zinc-100">
<img alt="Susan Collins" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2026/02/931/523/susan-collins-fox-digital-intv-feb.-10-2026.jpg?ve=1&amp;tl=1"/>
</div>
<div className="p-5 flex flex-col gap-3 flex-1">
<div className="flex items-center justify-between text-xs">
<span className="font-bold text-zinc-600 uppercase tracking-wider text-[10px]">Senate</span>
<span className="text-zinc-400 article-date" data-timestamp="1770771622">...</span>
</div>
<h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 group-hover:text-blue-700 transition-colors">
<a href="https://www.foxnews.com/politics/susan-collins-shrugs-off-attacks-democrats-trump-says-maine-voters-dont-vote-party-line" target="_blank">Susan Collins shrugs off attacks by Democrats and Trump</a>
</h2>
<div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between">
<span className="text-xs font-medium text-zinc-500">Fox News</span>
<button className="share-button text-zinc-400 hover:text-blue-600" data-url="https://www.foxnews.com/politics/susan-collins-shrugs-off-attacks-democrats-trump-says-maine-voters-dont-vote-party-line">
<iconify-icon icon="solar:share-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</article>
</div>

<div className="flex flex-col items-center gap-6 pt-8 pb-4">
<div className="flex items-center gap-1.5 p-1 bg-white border border-zinc-200 rounded-lg shadow-sm">
<span className="w-8 h-8 flex items-center justify-center bg-zinc-900 text-white rounded font-medium text-sm">1</span>
<a className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 rounded font-medium text-sm transition-colors" href="?page=2">2</a>
<a className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:bg-zinc-50 rounded font-medium text-sm transition-colors" href="?page=3">3</a>
<span className="w-8 h-8 flex items-center justify-center text-zinc-400 text-sm">...</span>
<a className="px-3 h-8 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 rounded font-medium text-sm transition-colors border-l border-zinc-100" href="?page=2">
                    Next <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="w-full max-w-lg bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 border border-red-100 text-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
<div className="relative z-10">
<h3 className="text-lg font-bold text-red-900 mb-1">Defend Real News</h3>
<p className="text-sm text-red-800/80 mb-4">The mainstream media wants to silence us. Help us fight back.</p>
<a className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/20 transition-all" href="https://www.buymeacoffee.com/maganews" target="_blank">
                        Support The Movement <iconify-icon icon="solar:cup-star-bold" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-zinc-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-red-700 rounded-sm flex items-center justify-center text-white font-bold text-xs">M</div>
<span className="font-bold text-zinc-900 tracking-tight">MAGA NEWS HQ</span>
</div>
<p className="text-[10px] text-zinc-400 font-medium uppercase tracking-wide">© 2026 America First Media. All rights reserved.</p>
</div>
<div className="flex items-center gap-5">
<a className="text-zinc-400 hover:text-red-600 transition-colors" href="/cdn-cgi/l/email-protection#8be5eefcf8cbe6eaeceae5eefcf8e3faa5e8e4e6"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-[#1877F2] transition-colors" href="https://www.facebook.com/MagaNewsHQ" target="_blank"><iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:facebook" width="18"></iconify-icon></a>
<a className="text-zinc-400 hover:text-[#FF0000] transition-colors" href="https://www.youtube.com/@MagaNewsHQ" target="_blank"><iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:youtube-icon" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-[#E4405F] transition-colors" href="https://www.instagram.com/MagaNewsHQ" target="_blank"><iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="skill-icons:instagram" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-black transition-colors" href="https://www.tiktok.com/@Officialmaganews" target="_blank"><iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:tiktok-icon" width="18"></iconify-icon></a>
</div>
</div>
</footer>





    </>
  );
}
