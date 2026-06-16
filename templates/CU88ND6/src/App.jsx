import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    function openMobileMenu() {
      mobileMenu.classList.add('open');
      mobileMenuOverlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenuHandler() {
      mobileMenu.classList.remove('open');
      mobileMenuOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }

    mobileMenuBtn?.addEventListener('click', openMobileMenu);
    closeMobileMenu?.addEventListener('click', closeMobileMenuHandler);
    mobileMenuOverlay?.addEventListener('click', closeMobileMenuHandler);

    // Sort dropdown functionality
    const sortBtn = document.getElementById('sortBtn');
    const sortDropdown = document.getElementById('sortDropdown');

    sortBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      sortDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      sortDropdown?.classList.add('hidden');
    });

    // View toggle functionality
    const gridViewBtn = document.getElementById('gridViewBtn');
    const listViewBtn = document.getElementById('listViewBtn');
    const websiteGrid = document.getElementById('websiteGrid');

    gridViewBtn?.addEventListener('click', () => {
      gridViewBtn.classList.add('bg-indigo-50', 'text-indigo-600');
      gridViewBtn.classList.remove('text-gray-500');
      listViewBtn?.classList.remove('bg-indigo-50', 'text-indigo-600');
      listViewBtn?.classList.add('text-gray-500');
      websiteGrid?.classList.remove('grid-cols-1');
      websiteGrid?.classList.add('sm:grid-cols-2', 'lg:grid-cols-3');
    });

    listViewBtn?.addEventListener('click', () => {
      listViewBtn.classList.add('bg-indigo-50', 'text-indigo-600');
      listViewBtn.classList.remove('text-gray-500');
      gridViewBtn?.classList.remove('bg-indigo-50', 'text-indigo-600');
      gridViewBtn?.classList.add('text-gray-500');
      websiteGrid?.classList.add('grid-cols-1');
      websiteGrid?.classList.remove('sm:grid-cols-2', 'lg:grid-cols-3');
    });

    // Traffic toggle functionality
    const trafficToggle = document.getElementById('trafficToggle');
    
    trafficToggle?.addEventListener('change', function() {
      const toggleDot = this.nextElementSibling.querySelector('.toggle-dot');
      const toggleBg = this.nextElementSibling;
      
      if (this.checked) {
        toggleDot.style.transform = 'translateX(12px)';
        toggleBg.style.backgroundColor = '#6366f1';
      } else {
        toggleDot.style.transform = 'translateX(0)';
        toggleBg.style.backgroundColor = '#e5e7eb';
      }
    });

    // Animate cards on load
    window.addEventListener('load', () => {
      const cards = document.querySelectorAll('.card-hover');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      });
    });

    // Search functionality (placeholder)
    const searchInput = document.querySelector('input[placeholder*="Search"]');
    searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        searchInput.focus();
      }
    });

    // Filter checkboxes functionality
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const indicator = this.nextElementSibling;
        if (this.checked) {
          indicator.style.transform = 'scale(1)';
        } else {
          indicator.style.transform = 'scale(1)';
        }
      });
    });

    // Range slider functionality
    const rangeSlider = document.querySelector('.range-slider');
    const trafficLabel = document.querySelector('.rounded-full.bg-indigo-100 span');
    
    rangeSlider?.addEventListener('input', function() {
      const value = parseInt(this.value);
      let label = '';
      
      if (value === 0) {
        label = 'Any traffic';
      } else if (value < 10000) {
        label = `Up to ${Math.round(value/1000)}K visits`;
      } else if (value < 1000000) {
        label = `Up to ${Math.round(value/1000)}K visits`;
      } else {
        label = 'Up to 1M+ visits';
      }
      
      if (trafficLabel) {
        trafficLabel.textContent = label;
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 border-gray-200 border-b backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center gap-4">
<button className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<div className="flex items-center gap-3">
<div className="">
<span className="text-lg font-bold tracking-tight text-gray-900 font-sans">WebCatalog</span>
<div className="hidden text-xs text-gray-500 sm:block font-sans">Discover Amazing Websites</div>
</div>
</div>

<div className="hidden items-center gap-6 ml-8 lg:flex">
<a className="text-sm font-medium text-indigo-600 font-sans" href="#">Explore</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition font-sans" href="#">Categories</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition font-sans" href="#">Collections</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition font-sans" href="#">Submit Site</a>
</div>
</div>

<div className="hidden flex-1 max-w-lg mx-8 md:block">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100" placeholder="Search websites, keywords, categories..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
</div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 sm:block">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="hidden rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900 sm:block font-sans">
            Sign in
          </button>
<button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 font-sans">
            Submit Website
          </button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 hidden bg-black/20 backdrop-blur-sm md:hidden" id="mobileMenuOverlay"></div>

<div className="mobile-menu fixed left-0 top-0 z-50 h-full w-80 bg-white shadow-xl md:hidden" id="mobileMenu">
<div className="flex h-16 items-center justify-between border-b px-4">
<span className="font-semibold font-sans">Menu</span>
<button className="rounded-md p-2 text-gray-600 hover:bg-gray-100" id="closeMobileMenu">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-4 space-y-4">
<a className="block py-2 text-indigo-600 font-medium font-sans" href="#">Explore</a>
<a className="block py-2 text-gray-600 font-sans" href="#">Categories</a>
<a className="block py-2 text-gray-600 font-sans" href="#">Collections</a>
<a className="block py-2 text-gray-600 font-sans" href="#">Submit Site</a>
<hr className="my-4"/>
<a className="block py-2 text-gray-600 font-sans" href="#">Sign in</a>
<button className="w-full rounded-lg bg-indigo-600 py-2 text-sm font-medium text-white font-sans">Submit Website</button>
</div>
</div>

<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-0 pb-8 pl-0">
<div className="flex gap-8">

<aside className="sticky top-24 hidden h-fit w-72 shrink-0 lg:block bg-gray-100 border-neutral-950/10 border rounded-xl pt-3 pr-3 pb-3 pl-3">

<div className="flex mb-6 items-center justify-between">
<h3 className="font-semibold text-gray-900 font-sans">Filters</h3>
<button className="text-sm text-indigo-600 hover:text-indigo-500 transition font-sans">Clear all</button>
</div>
<div className="space-y-8">

<section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
<h4 className="mb-3 text-sm font-semibold text-gray-900 font-sans">Featured Collections</h4>
<div className="space-y-2">
<button className="flex w-full items-center gap-3 rounded-lg p-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition font-sans">
<svg className="lucide lucide-trending-up h-4 w-4 text-green-500" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                Trending This Week
              </button>
<button className="flex w-full items-center gap-3 rounded-lg p-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition font-sans">
<svg className="lucide lucide-award h-4 w-4 text-yellow-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
                Award Winners
              </button>
<button className="flex w-full items-center gap-3 rounded-lg p-2 text-left text-sm text-gray-700 hover:bg-gray-50 transition font-sans">
<svg className="lucide lucide-zap h-4 w-4 text-purple-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Recently Launched
              </button>
</div>
</section>

<section className="">
<div className="mb-4 flex items-center justify-between">
<h4 className="text-sm font-semibold text-gray-900 font-sans">Categories</h4>
<button className="text-gray-400 hover:text-gray-600 transition">
<svg className="lucide lucide-chevron-up h-4 w-4" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300 group-hover:border-gray-400">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 font-sans">E-commerce</span>
<span className="text-xs text-gray-500 font-sans">247</span>
</div>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300 group-hover:border-gray-400">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 font-sans">Portfolio</span>
<span className="text-xs text-gray-500 font-sans">192</span>
</div>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300 group-hover:border-gray-400">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 font-sans">SaaS</span>
<span className="text-xs text-gray-500 font-sans">134</span>
</div>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300 group-hover:border-gray-400">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 font-sans">Agency</span>
<span className="text-xs text-gray-500 font-sans">98</span>
</div>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300 group-hover:border-gray-400">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-700 font-sans">Blog</span>
<span className="text-xs text-gray-500 font-sans">156</span>
</div>
</label>
</div>
</section>

<section className="">
<div className="mb-4 flex items-center justify-between">
<h4 className="text-sm font-semibold text-gray-900 font-sans">Technology</h4>
<button className="text-gray-400 hover:text-gray-600 transition">
<svg className="lucide lucide-chevron-up h-4 w-4" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 gap-2">
<button className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 transition">
<span className="font-sans">React</span>
<span className="text-xs text-gray-500 font-sans">89</span>
</button>
<button className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 transition">
<span className="font-sans">WordPress</span>
<span className="text-xs text-gray-500 font-sans">167</span>
</button>
<button className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 transition">
<span className="font-sans">Shopify</span>
<span className="text-xs text-gray-500 font-sans">78</span>
</button>
<button className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2 text-left text-sm text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 transition">
<span className="font-sans">Next.js</span>
<span className="text-xs text-gray-500 font-sans">43</span>
</button>
</div>
</section>

<section>
<div className="mb-4 flex items-center justify-between">
<h4 className="text-sm font-semibold text-gray-900 font-sans">Design Style</h4>
<button className="text-gray-400 hover:text-gray-600 transition">
<svg className="lucide lucide-chevron-up h-4 w-4" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
</div>
<div className="space-y-3">
<label className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-3">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-gray-700 font-sans">Minimalist</span>
</div>
<span className="text-xs text-gray-500 font-sans">234</span>
</label>
<label className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-3">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-gray-700 font-sans">Bold &amp; Colorful</span>
</div>
<span className="text-xs text-gray-500 font-sans">89</span>
</label>
<label className="flex items-center justify-between cursor-pointer">
<div className="flex items-center gap-3">
<input className="checkbox sr-only" type="checkbox"/>
<span className="checkbox-indicator flex h-4 w-4 items-center justify-center rounded border border-gray-300">
<svg className="lucide lucide-check h-3 w-3 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-sm text-gray-700 font-sans">Dark Theme</span>
</div>
<span className="text-xs text-gray-500 font-sans">156</span>
</label>
</div>
</section>

<section>
<div className="mb-4 flex items-center justify-between">
<h4 className="text-sm font-semibold text-gray-900 font-sans">Monthly Traffic</h4>
</div>
<div className="space-y-4">
<div className="px-2">
<input className="range-slider w-full" max="1000000" min="0" type="range" value="500000"/>
<div className="mt-2 flex justify-between text-xs text-gray-500">
<span className="font-sans">0</span>
<span className="font-sans">1M+</span>
</div>
</div>
<div className="text-center">
<span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 font-sans">Up to 500K visits</span>
</div>
</div>
</section>
</div>
</aside>

<main className="flex-1">

<div className="mb-8">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div className="">
<h1 className="text-2xl tracking-tight text-gray-900 sm:text-3xl font-manrope font-medium">
                Explore Websites
              </h1>
<p className="mt-1 text-gray-600 font-sans">
                Discover 1,247+ beautifully designed websites for inspiration
              </p>
</div>

<div className="flex items-center gap-2">
<div className="flex rounded-lg border border-gray-200 bg-white p-1">
<button className="rounded-md bg-indigo-50 px-3 py-1.5 text-indigo-600" id="gridViewBtn">
<svg className="lucide lucide-grid-3x3 h-4 w-4" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</button>
<button className="rounded-md px-3 py-1.5 text-gray-500 hover:text-gray-700" id="listViewBtn">
<svg className="lucide lucide-list h-4 w-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="mb-8 flex flex-wrap items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-2">
<button className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-200 font-sans">
              All Websites
            </button>
<button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50 font-sans">
              E-commerce
            </button>
<button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50 font-sans">
              Portfolio
            </button>
<button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50 font-sans">
              SaaS
            </button>
<button className="hidden rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-600 transition hover:bg-gray-50 sm:block font-sans">
              Agency
            </button>
</div>

<div className="flex items-center gap-2">
<button className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm lg:hidden">
<svg className="lucide lucide-sliders-horizontal h-4 w-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</button>
<div className="relative">
<button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm transition hover:bg-gray-50" id="sortBtn">
<svg className="lucide lucide-arrow-up-down h-4 w-4" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
<span className="hidden sm:inline font-sans">Sort:</span>
<span className="font-sans">Popular</span>
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute right-0 top-12 z-20 hidden w-48 animate-scale-in rounded-lg border border-gray-200 bg-white shadow-lg" id="sortDropdown">
<div className="p-1">
<button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 font-sans">
<svg className="lucide lucide-trending-up h-4 w-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    Most Popular
                  </button>
<button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 font-sans">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Recently Added
                  </button>
<button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 font-sans">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    Highest Rated
                  </button>
<button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 font-sans">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    Most Traffic
                  </button>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6 flex items-center justify-between text-sm text-gray-600">
<span className="font-sans">Showing <span className="font-medium text-gray-900 font-sans">1,247</span> websites</span>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<span className="font-sans">Show traffic data</span>
<label className="flex items-center cursor-pointer">
<input className="sr-only" id="trafficToggle" type="checkbox"/>
<div className="toggle-bg relative h-4 w-7 rounded-full bg-gray-200">
<div className="toggle-dot absolute left-0.5 top-0.5 h-3 w-3 rounded-full bg-white shadow transition-transform"></div>
</div>
</label>
</div>
</div>
</div>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="websiteGrid">

<article className="card-hover group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm opacity-0 translate-y-4">
<div className="relative">
<img alt="Stripe Dashboard" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/172fe927-753d-4059-8905-e9db2c3fb02f_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-indigo-600 transition">
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-blue-600 transition">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="absolute bottom-3 left-3 opacity-0 transition-opacity group-hover:opacity-100">
<div className="flex items-center gap-2 text-white text-sm">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-sans">2.4M visits/mo</span>
</div>
</div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-2">
<span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 font-sans">SaaS</span>
<span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 font-sans">React</span>
</div>
<h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 transition font-sans">
                Stripe Dashboard
              </h3>
<p className="mb-4 text-sm text-gray-600 font-sans">
                Online payment processing platform with beautiful, minimal design and exceptional UX.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart h-3 w-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-sans">847</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-sans">4.9</span>
</div>
</div>
<span className="text-xs text-gray-500 font-sans">stripe.com</span>
</div>
</div>
</article>

<article className="card-hover group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm opacity-0 translate-y-4" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Shopify Store" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75ddcad6-763d-443a-837b-e6aec9a8f152_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-indigo-600 transition">
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-blue-600 transition">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="absolute bottom-3 left-3 opacity-0 transition-opacity group-hover:opacity-100">
<div className="flex items-center gap-2 text-white text-sm">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-sans">890K visits/mo</span>
</div>
</div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-2">
<span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700 font-sans">E-commerce</span>
<span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 font-sans">Shopify</span>
</div>
<h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 transition font-sans">
                Allbirds Store
              </h3>
<p className="mb-4 text-sm text-gray-600 font-sans">
                Sustainable footwear company with clean, eco-friendly design and seamless shopping experience.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart h-3 w-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-sans">523</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-sans">4.7</span>
</div>
</div>
<span className="text-xs text-gray-500 font-sans">allbirds.com</span>
</div>
</div>
</article>

<article className="card-hover group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm opacity-0 translate-y-4" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Design Portfolio" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc49801c-a307-4486-b26f-f853f4ed6dc1_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-indigo-600 transition">
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-blue-600 transition">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="absolute bottom-3 left-3 opacity-0 transition-opacity group-hover:opacity-100">
<div className="flex items-center gap-2 text-white text-sm">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-sans">45K visits/mo</span>
</div>
</div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-2">
<span className="rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-700 font-sans">Portfolio</span>
<span className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-700 font-sans">Vue.js</span>
</div>
<h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 transition font-sans">
                Sarah Chen Design
              </h3>
<p className="mb-4 text-sm text-gray-600 font-sans">
                Creative portfolio showcasing innovative UI/UX design work with stunning visual storytelling.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart h-3 w-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-sans">234</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-sans">4.8</span>
</div>
</div>
<span className="text-xs text-gray-500 font-sans">sarahchen.co</span>
</div>
</div>
</article>

<article className="card-hover group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm opacity-0 translate-y-4" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Analytics Dashboard" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d2c6a72c-709a-4f76-8af7-ceead407c973_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-indigo-600 transition">
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-blue-600 transition">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="absolute bottom-3 left-3 opacity-0 transition-opacity group-hover:opacity-100">
<div className="flex items-center gap-2 text-white text-sm">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-sans">1.2M visits/mo</span>
</div>
</div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-2">
<span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700 font-sans">SaaS</span>
<span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 font-sans">Angular</span>
</div>
<h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 transition font-sans">
                DataFlow Analytics
              </h3>
<p className="mb-4 text-sm text-gray-600 font-sans">
                Business intelligence platform with intuitive dashboards and powerful data visualization tools.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart h-3 w-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-sans">672</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-sans">4.6</span>
</div>
</div>
<span className="text-xs text-gray-500 font-sans">dataflow.io</span>
</div>
</div>
</article>

<article className="card-hover group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm opacity-0 translate-y-4" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Marketing Agency" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0bcf765-e8d8-40ef-8ed1-54f947ee8820_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-indigo-600 transition">
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-blue-600 transition">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="absolute bottom-3 left-3 opacity-0 transition-opacity group-hover:opacity-100">
<div className="flex items-center gap-2 text-white text-sm">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-sans">156K visits/mo</span>
</div>
</div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-2">
<span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-700 font-sans">Agency</span>
<span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700 font-sans">Gatsby</span>
</div>
<h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 transition font-sans">
                Velocity Digital
              </h3>
<p className="mb-4 text-sm text-gray-600 font-sans">
                Full-service digital marketing agency with bold branding and compelling case studies.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart h-3 w-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-sans">389</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-sans">4.5</span>
</div>
</div>
<span className="text-xs text-gray-500 font-sans">velocitydigital.com</span>
</div>
</div>
</article>

<article className="card-hover group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm opacity-0 translate-y-4" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Tech Blog" className="h-48 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6f627dda-22f9-4cd4-bde1-95bafd0aca99_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
<div className="absolute right-3 top-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-indigo-600 transition">
<svg className="lucide lucide-bookmark h-4 w-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="rounded-full bg-white/90 p-2 text-gray-600 shadow-sm backdrop-blur hover:bg-white hover:text-blue-600 transition">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="absolute bottom-3 left-3 opacity-0 transition-opacity group-hover:opacity-100">
<div className="flex items-center gap-2 text-white text-sm">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-sans">234K visits/mo</span>
</div>
</div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-2">
<span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 font-sans">Blog</span>
<span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700 font-sans">WordPress</span>
</div>
<h3 className="mb-2 font-semibold text-gray-900 group-hover:text-indigo-600 transition font-sans">
                Code &amp; Coffee
              </h3>
<p className="mb-4 text-sm text-gray-600 font-sans">
                Developer blog featuring tutorials, industry insights, and tech trends with clean typography.
              </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-gray-500">
<div className="flex items-center gap-1">
<svg className="lucide lucide-heart h-3 w-3" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="font-sans">445</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-3 w-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-sans">4.4</span>
</div>
</div>
<span className="text-xs text-gray-500 font-sans">codeandcoffee.dev</span>
</div>
</div>
</article>
</div>

<div className="mt-12 text-center">
<button className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 hover:border-gray-400 font-sans">
<svg className="lucide lucide-refresh-cw mr-2 h-4 w-4" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
            Load More Websites
          </button>
</div>
</main>
</div>
</div>



    </>
  );
}
