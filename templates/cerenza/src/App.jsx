import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function () {
          const container = document.getElementById('heroMediaContainer');
          const video = document.getElementById('heroHoverVideo');
          if (!container || !video) return;

          const playVideo = () => {
            try {
              video.currentTime = 0;
              const p = video.play();
              if (p && typeof p.catch === 'function') p.catch(() => {});
            } catch (_) {}
          };

          const pauseVideo = () => {
            try {
              video.pause();
              video.currentTime = 0;
            } catch (_) {}
          };

          container.addEventListener('mouseenter', playVideo);
          container.addEventListener('mouseleave', pauseVideo);

          // Touch support
          container.addEventListener('touchstart', playVideo, { passive: true });
          container.addEventListener('touchend', pauseVideo, { passive: true });
          container.addEventListener('touchcancel', pauseVideo, { passive: true });
        })();
      


    // Icons
    lucide.createIcons();

    // Mobile menu
    const openBtn = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('backdrop');

    function toggleMenu(show) {
      if (show) {
        mobileMenu.classList.remove('hidden');
      } else {
        mobileMenu.classList.add('hidden');
      }
    }
    openBtn?.addEventListener('click', () => toggleMenu(true));
    closeBtn?.addEventListener('click', () => toggleMenu(false));
    backdrop?.addEventListener('click', () => toggleMenu(false));

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();
  


      // Icons
      lucide.createIcons();

      // Mobile menu
      const openBtn = document.getElementById('openMenu');
      const closeBtn = document.getElementById('closeMenu');
      const mobileMenu = document.getElementById('mobileMenu');
      const backdrop = document.getElementById('backdrop');

      function toggleMenu(show) {
        if (show) {
          mobileMenu.classList.remove('hidden');
        } else {
          mobileMenu.classList.add('hidden');
        }
      }
      openBtn?.addEventListener('click', () => toggleMenu(true));
      closeBtn?.addEventListener('click', () => toggleMenu(false));
      backdrop?.addEventListener('click', () => toggleMenu(false));

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky z-40 bg-white/80 border-neutral-200 border-b top-0 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<button aria-label="Open menu" className="inline-flex items-center justify-center rounded-md p-2 text-neutral-600 hover:text-black hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-300 lg:hidden" id="openMenu">
<svg className="lucide lucide-menu h-6 w-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<a className="flex-1 lg:flex-none text-center" href="#">
<span className="text-2xl sm:text-3xl tracking-tight font-semibold">CERENZA</span>
</a>

<div className="flex flex-1 items-center justify-end gap-4">
<button aria-label="Search" className="p-2 rounded-md hover:bg-neutral-100">
<svg className="lucide lucide-search h-5 w-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Account" className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100">
<svg className="lucide lucide-user h-5 w-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button aria-label="Favorites" className="hidden sm:inline-flex p-2 rounded-md hover:bg-neutral-100">
<svg className="lucide lucide-star h-5 w-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
<button aria-label="Bag" className="inline-flex p-2 rounded-md hover:bg-neutral-100">
<svg className="lucide lucide-shopping-bag h-5 w-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>
</div>
</div>

<nav className="border-neutral-200 border-t">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<ul className="flex gap-6 overflow-x-auto py-3 text-sm text-neutral-700">
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Haute Couture</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Ready-to-Wear</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">High Jewelry</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Fine Jewelry</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Watches</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Eyewear</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Fragrance</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Beauty</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">Skincare</a></li>
<li className=""><a className="hover:text-black whitespace-nowrap" href="#">About</a></li>
</ul>
</div>
</nav>
</header>

<div className="fixed z-50 hidden top-0 right-0 bottom-0 left-0" id="mobileMenu">
<div className="absolute inset-0 bg-black/30" id="backdrop"></div>
<div className="ml-auto h-full w-80 max-w-[85%] bg-white shadow-xl p-6 flex flex-col">
<div className="flex items-center justify-between">
<span className="text-xl tracking-tight font-semibold">Menu</span>
<button aria-label="Close menu" className="p-2 rounded-md hover:bg-neutral-100" id="closeMenu">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<ul className="mt-6 space-y-4 text-neutral-800">
<li><a className="block hover:text-black" href="#">Atelier</a></li>
<li><a className="block hover:text-black" href="#">Ready-to-Wear</a></li>
<li><a className="block hover:text-black" href="#">High Jewelry</a></li>
<li><a className="block hover:text-black" href="#">Fine Jewelry</a></li>
<li><a className="block hover:text-black" href="#">Timepieces</a></li>
<li><a className="block hover:text-black" href="#">Eyewear</a></li>
<li><a className="block hover:text-black" href="#">Fragrance</a></li>
<li><a className="block hover:text-black" href="#">Beauty</a></li>
<li><a className="block hover:text-black" href="#">Skincare</a></li>
<li><a className="block hover:text-black" href="#">About</a></li>
</ul>
<div className="mt-auto flex gap-4 pt-6 border-t border-neutral-200">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-neutral-800">
<svg className="lucide lucide-user h-4 w-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Account
          </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-300 text-sm font-medium hover:bg-neutral-50">
<svg className="lucide lucide-shopping-bag h-4 w-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Bag
          </button>
</div>
</div>
</div>

<section className="relative top-0 right-0 bottom-0 left-0">
<div className="sm:h-[78vh] lg:h-[86vh] h-[68vh] relative top-0 right-0 bottom-0 left-0 group" id="heroMediaContainer">
<img alt="Editorial portrait with gold accents" className="absolute w-full h-full object-cover top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b4fdf298-05b2-4493-a261-e0cad9148ec7_3840w.jpg?w=800&amp;q=80"/>
<video className="absolute w-full h-full object-cover top-0 right-0 bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" id="heroHoverVideo" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/28e83539-e6ec-400f-87f6-238a53d58fce_3840w.jpg" preload="metadata" src="https://cdn.midjourney.com/video/844582ff-c0a9-4bcf-9c14-a38eaab38755/3.mp4"></video>
<div className="bg-gradient-to-t from-black/50 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex sm:px-6 lg:px-8 h-full max-w-7xl mr-auto ml-auto pr-4 pb-16 pl-4 items-end justify-center">
<div className="max-w-2xl text-center">
<p className="sm:text-sm uppercase text-xs text-white/80 tracking-wide">Haute Couture</p>
<h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
      The Première Edition Dress
    </h1>
<p className="mt-3 text-sm sm:text-base text-white/90 max-w-xl mx-auto">
      Exquisite craftsmanship meets timeless elegance. A masterpiece of precision tailoring and refined artistry.
    </p>
<div className="mt-6 flex gap-3 justify-center">
<a className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-neutral-100" href="#">
        See more
      </a>
<a className="inline-flex items-center justify-center rounded-md border border-white/70 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10" href="#">
        Explore collection
      </a>
</div>
</div>
</div>
</div>

</section>

<section className="sm:px-6 lg:px-8 w-full pt-14 pr-4 pb-14 pl-4 top-0 right-0 bottom-0 left-0">
<div className="max-w-7xl mx-auto mb-10">
<div className="text-center">
<p className="text-xs sm:text-sm uppercase tracking-wide text-neutral-600 mb-2">Featured Collections</p>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900">Curated Selections</h2>
<p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">Discover our carefully curated collections, each telling a unique story of craftsmanship and contemporary design.</p>
</div>
</div>
<div className="flex gap-1.5 bg-gray-800 w-full h-[700px] rounded pt-1.5 pr-1.5 pb-1.5 pl-1.5 top-0 right-0 bottom-0 left-0">
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group bg-gray-800 h-full rounded-sm relative top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Fashion portrait 1" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1366adb0-6622-49a5-81b2-abfd42c2378f_1600w.jpg" style={{}}/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-sm pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Urban Elegance</h3>
<p className="text-gray-200 text-sm">Contemporary minimalist design with clean lines</p>
<p className="text-gray-400 text-xs mt-2">Spring Collection 2024</p>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group bg-gray-800 h-full rounded-sm relative top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Modern Minimalism" className="card-image w-full h-full object-cover rounded-sm" src="https://cdn.midjourney.com/72c699b7-87ef-40b7-b5bd-59e7cddad312/0_0.png?w=800&amp;q=80"/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-sm pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Modern Minimalism</h3>
<p className="text-gray-200 text-sm">Refined simplicity with architectural precision</p>
<p className="text-gray-400 text-xs mt-2">Contemporary Essentials</p>
</div>
</div>
<div className="card-panel h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-gray-800 flex justify-center items-center hover:flex-4 relative group">
<img alt="Fashion portrait 2" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d4f665e4-d64e-4e04-9296-379076b9fe82_1600w.jpg" style={{}}/>
<div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex flex-col justify-end p-6">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Classic Grace</h3>
<p className="text-gray-200 text-sm">Timeless sophistication meets modern comfort</p>
<p className="text-gray-400 text-xs mt-2">Heritage Collection</p>
</div>
</div>
<div className="card-panel h-full flex-1 overflow-hidden cursor-pointer rounded-sm transition-all duration-500 bg-gray-800 flex justify-center items-center hover:flex-4 relative group">
<img alt="Fashion portrait 3" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e46db625-c1cb-4014-ba55-f5baebe4adad_1600w.jpg" style={{}}/>
<div className="card-overlay absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex flex-col justify-end p-6">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Bold Expression</h3>
<p className="text-gray-200 text-sm">Vibrant textures and daring silhouettes</p>
<p className="text-gray-400 text-xs mt-2">Avant-Garde Series</p>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group bg-gray-800 h-full rounded-sm relative top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Fashion portrait 4" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f615ff41-fad5-45aa-9b1d-fcb2bd629365_1600w.jpg" style={{}}/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-sm pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Natural Beauty</h3>
<p className="text-gray-200 text-sm">Organic forms inspired by nature's elegance</p>
<p className="text-gray-400 text-xs mt-2">Earth Tones Collection</p>
</div>
</div>
<div className="card-panel flex-1 overflow-hidden cursor-pointer transition-all duration-500 flex hover:flex-4 group bg-gray-800 h-full rounded-sm relative top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="Fashion portrait 5" className="card-image w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/548251c7-a97a-4c25-8e2d-79f4498b49e0_1600w.jpg" style={{}}/>
<div className="card-overlay group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 rounded-sm pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-white text-xl font-medium mb-1 tracking-tight">Modern Romance</h3>
<p className="text-gray-200 text-sm">Delicate details with contemporary edge</p>
<p className="text-gray-400 text-xs mt-2">Evening Collection</p>
</div>
</div>
<style>
      .font-inter {
        font-family: 'Inter', sans-serif;
      }

      .card-panel {
        transition: flex 0.5s ease;
      }

      .card-panel:hover {
        flex: 4;
      }

      .card-image {
        transition: all 0.5s ease;
      }

      .card-overlay {
        transition: opacity 0.3s ease;
      }
    </style>
<style id="all-fonts-style-font-geist">
      .font-geist {
        font-family: 'Geist', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-roboto">
      .font-roboto {
        font-family: 'Roboto', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-montserrat">
      .font-montserrat {
        font-family: 'Montserrat', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-poppins">
      .font-poppins {
        font-family: 'Poppins', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-playfair">
      .font-playfair {
        font-family: 'Playfair Display', serif !important;
      }
    </style>
<style id="all-fonts-style-font-instrument-serif">
      .font-instrument-serif {
        font-family: 'Instrument Serif', serif !important;
      }
    </style>
<style id="all-fonts-style-font-merriweather">
      .font-merriweather {
        font-family: 'Merriweather', serif !important;
      }
    </style>
<style id="all-fonts-style-font-bricolage">
      .font-bricolage {
        font-family: 'Bricolage Grotesque', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-jakarta">
      .font-jakarta {
        font-family: 'Plus Jakarta Sans', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-manrope">
      .font-manrope {
        font-family: 'Manrope', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-space-grotesk">
      .font-space-grotesk {
        font-family: 'Space Grotesk', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-work-sans">
      .font-work-sans {
        font-family: 'Work Sans', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-pt-serif">
      .font-pt-serif {
        font-family: 'PT Serif', serif !important;
      }
    </style>
<style id="all-fonts-style-font-geist-mono">
      .font-geist-mono {
        font-family: 'Geist Mono', monospace !important;
      }
    </style>
<style id="all-fonts-style-font-space-mono">
      .font-space-mono {
        font-family: 'Space Mono', monospace !important;
      }
    </style>
<style id="all-fonts-style-font-quicksand">
      .font-quicksand {
        font-family: 'Quicksand', sans-serif !important;
      }
    </style>
<style id="all-fonts-style-font-nunito">
      .font-nunito {
        font-family: 'Nunito', sans-serif !important;
      }
    </style>
</div>

</section><section className="relative">
<div className="sm:h-[78vh] lg:h-[86vh] h-[68vh] relative">
<img alt="Fall–Winter ready-to-wear editorial portrait" className="absolute inset-0 h-full w-full object-cover" src="https://cdn.midjourney.com/f921b7eb-613a-4231-8519-1dda2c1a00ae/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
<div className="z-10 flex sm:px-6 lg:px-8 h-full pr-4 pb-16 pl-4 relative items-end justify-center">
<div className="text-center max-w-3xl">
<p className="text-xs sm:text-sm uppercase tracking-wide text-white/80">Fragrance</p>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mt-2">
      The Signature Parfum Collection
    </h1>
<p className="sm:text-base text-sm text-white/90 max-w-2xl mt-3 mr-auto ml-auto">Artisanal compositions crafted with rare essences. Each fragrance tells a story of sophist .</p><div className="flex gap-3 mt-6 justify-center">
<a className="inline-flex items-center justify-center hover:bg-neutral-100 text-sm font-medium text-black bg-white rounded-md pt-2.5 pr-4 pb-2.5 pl-4" href="#">Discover Scents</a>
<a className="inline-flex items-center justify-center hover:bg-white/10 text-sm font-medium text-white border-white/70 border rounded-md pt-2.5 pr-4 pb-2.5 pl-4" href="#">View fragrance notes</a>
</div></div>
</div>
</div>
</section><section className="relative">
<div className="sm:h-[78vh] lg:h-[86vh] h-[68vh] relative">
<img alt="Fall–Winter ready-to-wear editorial portrait" className="absolute inset-0 h-full w-full object-cover" src="https://cdn.midjourney.com/16b45e77-ebdf-4dad-91c6-12c0369f3351/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
<div className="z-10 flex sm:px-6 lg:px-8 h-full pr-4 pb-16 pl-4 relative items-end justify-center">
<div className="text-center max-w-3xl">
<p className="text-xs sm:text-sm uppercase tracking-wide text-white/80">Accessories</p>
<h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
      The Artisan Handbag Collection
    </h1>
<p className="sm:text-base text-sm text-white/90 max-w-2xl mt-3 mr-auto ml-auto">
      Masterfully crafted leather goods. Timeless silhouettes meet contemporary functionality in every piece.
    </p>
<div className="flex gap-3 mt-6 justify-center">
<a className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-neutral-100" href="#">
        Shop collection
      </a>
<a className="inline-flex items-center justify-center rounded-md border border-white/70 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10" href="#">
        View craftsmanship
      </a>
</div>
</div>
</div>
</div>
</section><section className="relative">
<div className="sm:h-[78vh] lg:h-[86vh] h-[68vh] relative">
<img alt="Fall–Winter ready-to-wear editorial portrait" className="absolute inset-0 h-full w-full object-cover" src="https://cdn.midjourney.com/6fa2cc7e-17c7-4ae8-a7cd-b098d3070ba2/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>
<div className="z-10 flex sm:px-6 lg:px-8 h-full pr-4 pb-16 pl-4 relative items-end justify-center">
<div className="text-center max-w-3xl">
<p className="text-xs sm:text-sm uppercase tracking-wide text-white/80">Beauty</p>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mt-2">
      The Atelier Makeup Collection
    </h1>
<p className="mt-3 text-sm sm:text-base text-white/90 max-w-2xl mx-auto">
      Luxurious formulations meet timeless elegance. Professional-grade pigments and innovative textures for effortless beauty.
    </p>
<div className="mt-6 flex gap-3 justify-center">
<a className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-medium text-black hover:bg-neutral-100" href="#">
        Shop now
      </a>
<a className="inline-flex items-center justify-center rounded-md border border-white/70 px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10" href="#">
        View tutorials
      </a>
</div>
</div>
</div>
</div>
</section><section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4"><footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="">
<h5 className="text-sm tracking-tight font-semibold">CERENZA</h5>
<p className="mt-3 text-sm text-neutral-600 max-w-xs">
              A modern atelier of refined essentials. Designed in Paris. Assembled in Switzerland and Italy.
            </p>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Collections</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className=""><a className="hover:text-black" href="#">Timepieces</a></li>
<li className=""><a className="hover:text-black" href="#">Jewelry</a></li>
<li><a className="hover:text-black" href="#">Eyewear</a></li>
<li><a className="hover:text-black" href="#">Fragrance</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Company</h6>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-black" href="#">Careers</a></li>
<li><a className="hover:text-black" href="#">Sustainability</a></li>
<li className=""><a className="hover:text-black" href="#">Press</a></li>
<li><a className="hover:text-black" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h6 className="text-sm tracking-tight font-semibold">Newsletter</h6>
<p className="mt-3 text-sm text-neutral-600">Receive product stories and early releases.</p>
<form className="mt-4 flex gap-2">
<input className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Email address" type="email"/>
<button className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800" type="submit">
                Join <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© <span id="year">2025</span> Cerenza Studio. All rights reserved.</p>
<div className="flex gap-4 text-neutral-600">
<a className="text-xs hover:text-black" href="#">Privacy</a>
<a className="text-xs hover:text-black" href="#">Terms</a>
<a className="text-xs hover:text-black" href="#">Cookies</a>
</div>
</div>
</div>
</footer></section><footer className="bg-neutral-50 border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-6">
<p className="text-sm text-neutral-600">Follow us</p>
<div className="flex gap-4">
<a aria-label="Instagram" className="text-neutral-500 hover:text-black transition-colors" href="#">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter" className="text-neutral-500 hover:text-black transition-colors" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Facebook" className="text-neutral-500 hover:text-black transition-colors" href="#">
<svg className="lucide lucide-facebook h-5 w-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span>© 2025 Cerenza Studio</span>
<span className="hidden sm:inline">•</span>
<a className="hover:text-black" href="#">Support</a>
</div>
</div>
</div>
</footer>
    </>
  );
}
