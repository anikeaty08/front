import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Modal Functionality
        const modal = document.getElementById('product-modal');
        const modalImage = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalPrice = document.getElementById('modal-price');

        function openModal(title, price, imageSrc) {
            modalTitle.innerText = title;
            modalPrice.innerText = price;
            modalImage.src = imageSrc;
            
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeModal() {
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
            document.body.style.overflow = ''; // Restore scrolling
        }

        // Close modal on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6" id="product-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" onclick="closeModal()"></div>

<div className="relative w-full max-w-5xl bg-[#0a0a0a] border border-white/10 shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
<button className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full transition-all" onclick="closeModal()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="w-full md:w-1/2 bg-[#050505] relative flex items-center justify-center overflow-hidden">
<img alt="Product Detail" className="w-full h-full object-cover" id="modal-image" src=""/>
</div>

<div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center overflow-y-auto">
<div className="mb-1">
<span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">New Arrival</span>
</div>
<h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 tracking-tight" id="modal-title">Product Title</h2>
<p className="text-2xl font-medium text-white mb-6" id="modal-price">$0.00</p>
<p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    Engineered for the streets. This garment features heavyweight cotton construction, a relaxed boxy fit, and our signature garment dye process for a vintage aesthetic. Double-needle stitching ensures durability.
                </p>

<div className="mb-8">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3 block">Select Size</label>
<div className="flex flex-wrap gap-3">
<button className="w-12 h-12 border border-white/20 hover:border-white text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center justify-center">S</button>
<button className="w-12 h-12 border border-white/20 hover:border-white text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center justify-center bg-white/5 border-white/40 text-white">M</button>
<button className="w-12 h-12 border border-white/20 hover:border-white text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center justify-center">L</button>
<button className="w-12 h-12 border border-white/20 hover:border-white text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center justify-center">XL</button>
</div>
</div>

<div className="flex gap-4">
<button className="flex-1 bg-white text-black font-bold uppercase tracking-wide py-4 hover:bg-zinc-200 transition-colors">
                        Add to Cart
                    </button>
<button className="px-6 border border-white/20 hover:bg-white/5 text-white transition-colors">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="mt-6 flex items-center gap-2 text-xs text-green-400">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    In Stock - Ships Immediately
                </div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
<div className="flex h-16 md:h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<button className="lg:hidden p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:flex-1">
<a className="block group" href="#">
<img alt="Daystarr" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" src="https://daystarr.co/cdn/shop/files/3dgifmaker41196.gif?v=1703894706&amp;width=1000"/>
</a>
</div>

<div className="hidden lg:flex flex-1 justify-center space-x-10 text-sm font-medium tracking-wide">
<a className="text-zinc-400 hover:text-white transition-colors relative group" href="#">
                    Shop All
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<a className="text-zinc-400 hover:text-white transition-colors relative group" href="#">
                    New Arrivals
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
<a className="text-zinc-400 hover:text-white transition-colors relative group" href="#">
                    Lookbook
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
</a>
</div>

<div className="flex flex-1 justify-end items-center gap-2 md:gap-4">
<button className="hidden lg:block p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hidden lg:block p-2 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button className="relative p-2 hover:bg-white/5 rounded-full transition-colors text-white group">
<svg className="lucide lucide-shopping-bag w-5 h-5 group-hover:text-indigo-400 transition-colors" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full border border-black"></span>
</button>
</div>
</div>
</nav>

<main className="pt-16 md:pt-20">
<section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-[#080808]">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black-900/10 via-[#050505] to-[#050505] absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
<span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-indigo-300 mb-8 tracking-wider uppercase backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                    Available Now: Drop 001
                </span>
<h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 uppercase leading-[0.9]">
                    Streetwear <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">Garment</span>
</h1>
<p className="text-base md:text-xl text-zinc-400 max-w-lg mb-12 font-light leading-relaxed">
                    Designed in Los Angeles. Built for longevity. Redefining the modern silhouette.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="px-10 py-4 bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all uppercase tracking-wide min-w-[180px]" href="#shop">
                        Shop Drop
                    </a>
<a className="px-10 py-4 bg-transparent border border-white/10 text-white font-bold text-sm hover:bg-white/5 hover:border-white/30 transition-all uppercase tracking-wide min-w-[180px]" href="#">
                        Lookbook
                    </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block opacity-50">
<svg className="lucide lucide-arrow-down w-6 h-6 text-white" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</section>

<div className="w-full bg-indigo-950 border-y border-white/10 py-4 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-indigo-950 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-indigo-950 to-transparent z-10"></div>
<div className="whitespace-nowrap flex gap-12 animate-scroll">

<div className="flex gap-12 text-xs font-bold tracking-[0.2em] text-indigo-200 uppercase items-center">
<span>Worldwide Shipping</span> <span>•</span> <span>Premium Fabrics</span> <span className="">•</span> <span>Limited Quantities</span> <span>•</span> <span>Designed in LA</span> <span>•</span>
<span>Worldwide Shipping</span> <span>•</span> <span>Premium Fabrics</span> <span>•</span> <span>Limited Quantities</span> <span>•</span> <span>Designed in LA</span> <span>•</span>
<span>Worldwide Shipping</span> <span>•</span> <span>Premium Fabrics</span> <span>•</span> <span>Limited Quantities</span> <span>•</span> <span>Designed in LA</span> <span>•</span>
<span>Worldwide Shipping</span> <span>•</span> <span>Premium Fabrics</span> <span>•</span> <span>Limited Quantities</span> <span>•</span> <span>Designed in LA</span> <span>•</span>
</div>
</div>
</div>

<section className="max-w-[1400px] mx-auto px-4 md:px-8 py-24" id="shop">
<div className="flex flex-col md:flex-row gap-4 border-white/5 border-b mb-12 pb-8 gap-x-4 gap-y-4 items-end justify-between">
<div>
<h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Latest Arrivals</h2>
<p className="text-zinc-500">Collection 01 — Fall/Winter 2024</p>
</div>
<a className="text-sm font-medium text-white hover:text-indigo-400 flex items-center gap-2 transition-colors group" href="#">
                    View all products 
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">

<div className="group cursor-pointer w-full" onclick="openModal('Daystarr LA Oversized Hoodie', '$85.00', 'https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY5MTk5NDMyXzExMDM1MjI5NjExNzc0OThfMjE0NjA3MTY3Njk1MzkxMzc5N19uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE5EUXdlREU0TURBdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtc2VhMS0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDYmX25jX29jPVE2Y1oyUUY2SlBRRFdqZ2tLOHdiNlZLYUF4Y3VER0ctMEpweFdkZ3kzWWlPck1ZUUxaSFdBSVYwZkNIcmNUV2dpclpNazAwJl9uY19vaGM9cDlTMjFLLWV1VllRN2tOdndGVzk3SVYmX25jX2dpZD11ZV90RWVqZ3RKWHBxMVNIb0xVb1pBJmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BZnFDYnphamRnV3RSVDlFd1JTcjR6Vk95M1V5OXhpcWZ1SjliRG1uX1VMbWlBJm9lPTY5NjRENkYxJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNDY5MTk5NDMyXzExMDM1MjI5NjExNzc0OThfMjE0NjA3MTY3Njk1MzkxMzc5N19uLmpwZyIsIm5iZiI6MTc2Nzg0MTQxNSwiZXhwIjoxNzY3ODQ1MDE1LCJpYXQiOjE3Njc4NDE0MTV9.CNsoSHidWDEAk-VHbhA40vu5cHBBqTJMBw7Fa8qgDzk')">
<div className="relative w-full aspect-[3/4] bg-zinc-900 overflow-hidden mb-5">
<span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-20">New</span>
<img alt="Hoodie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDY5MTk5NDMyXzExMDM1MjI5NjExNzc0OThfMjE0NjA3MTY3Njk1MzkxMzc5N19uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE5EUXdlREU0TURBdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtc2VhMS0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDYmX25jX29jPVE2Y1oyUUY2SlBRRFdqZ2tLOHdiNlZLYUF4Y3VER0ctMEpweFdkZ3kzWWlPck1ZUUxaSFdBSVYwZkNIcmNUV2dpclpNazAwJl9uY19vaGM9cDlTMjFLLWV1VllRN2tOdndGVzk3SVYmX25jX2dpZD11ZV90RWVqZ3RKWHBxMVNIb0xVb1pBJmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BZnFDYnphamRnV3RSVDlFd1JTcjR6Vk95M1V5OXhpcWZ1SjliRG1uX1VMbWlBJm9lPTY5NjRENkYxJl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNDY5MTk5NDMyXzExMDM1MjI5NjExNzc0OThfMjE0NjA3MTY3Njk1MzkxMzc5N19uLmpwZyIsIm5iZiI6MTc2Nzg0MTQxNSwiZXhwIjoxNzY3ODQ1MDE1LCJpYXQiOjE3Njc4NDE0MTV9.CNsoSHidWDEAk-VHbhA40vu5cHBBqTJMBw7Fa8qgDzk"/>

<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-20 hover:scale-110">
<svg className="lucide lucide-scan-eye w-4 h-4" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-sm md:text-base font-medium text-white group-hover:text-indigo-400 transition-colors line-clamp-1">Daystarr LA Oversized Hoodie</h3>
<span className="text-sm font-semibold text-white ml-2">$85.00</span>
</div>
<p className="text-xs text-zinc-500">Heavyweight Cotton • Black</p>
</div>
</div>

<div className="group cursor-pointer w-full" onclick="openModal('Graphic Vintage Tee', '$45.00', 'https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDUzMTE3MzU4XzUwOTcxNjQxODEyNTY3MF80ODUyOTAwNTY4NjA2NjI1Nl9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE1USXplREUwTURRdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtZGV0MS0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDImX25jX29jPVE2Y1oyUUdBWHd3b1dNS1lPYlpZRW9aUVJjeGpJNWhUeXBVRW1FanlsRjFnVlpmWDVWQjQ3ZFpoTW8xVlhzbS05aHZRdkRvJl9uY19vaGM9RlpvVXNlNklCc1FRN2tOdndIVjlaLXImX25jX2dpZD1oUERDZHBrbENtVTNfeFdHUkZSRnJRJmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BZnFpNjdqc1MyQmJIRHN5Yjh0dmtzOGNYLW5MbFdSQWszbHQ0ZFEzWGl6U3FBJm9lPTY5NjUwMDI5Jl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNDUzMTE3MzU4XzUwOTcxNjQxODEyNTY3MF80ODUyOTAwNTY4NjA2NjI1Nl9uLmpwZyIsIm5iZiI6MTc2Nzg0MTcyNiwiZXhwIjoxNzY3ODQ1MzI2LCJpYXQiOjE3Njc4NDE3MjZ9.IXC9W8R5o49DI0JKGDBuSiAyKHug0jiFRw1nXD5-C8Y')">
<div className="relative w-full aspect-[3/4] bg-zinc-900 overflow-hidden mb-5">
<img alt="Tee" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDUzMTE3MzU4XzUwOTcxNjQxODEyNTY3MF80ODUyOTAwNTY4NjA2NjI1Nl9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE1USXplREUwTURRdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtZGV0MS0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDImX25jX29jPVE2Y1oyUUdBWHd3b1dNS1lPYlpZRW9aUVJjeGpJNWhUeXBVRW1FanlsRjFnVlpmWDVWQjQ3ZFpoTW8xVlhzbS05aHZRdkRvJl9uY19vaGM9RlpvVXNlNklCc1FRN2tOdndIVjlaLXImX25jX2dpZD1oUERDZHBrbENtVTNfeFdHUkZSRnJRJmVkbT1BUHMxN0NVQkFBQUEmY2NiPTctNSZvaD0wMF9BZnFpNjdqc1MyQmJIRHN5Yjh0dmtzOGNYLW5MbFdSQWszbHQ0ZFEzWGl6U3FBJm9lPTY5NjUwMDI5Jl9uY19zaWQ9MTBkMTNiIiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNDUzMTE3MzU4XzUwOTcxNjQxODEyNTY3MF80ODUyOTAwNTY4NjA2NjI1Nl9uLmpwZyIsIm5iZiI6MTc2Nzg0MTcyNiwiZXhwIjoxNzY3ODQ1MzI2LCJpYXQiOjE3Njc4NDE3MjZ9.IXC9W8R5o49DI0JKGDBuSiAyKHug0jiFRw1nXD5-C8Y"/>
<button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-20 hover:scale-110">
<svg className="lucide lucide-scan-eye w-4 h-4" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-sm md:text-base font-medium text-white group-hover:text-indigo-400 transition-colors line-clamp-1">Graphic Vintage Tee</h3>
<span className="text-sm font-semibold text-white ml-2">$45.00</span>
</div>
<p className="text-xs text-zinc-500">Soft Wash • Charcoal</p>
</div>
</div>

<div className="group cursor-pointer w-full" onclick="openModal('Court Mesh Shorts', '$55.00', 'https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDYwNzY2MDk1XzE1NzAwMzU3MDAwNjQxOTVfNjAwMzAyOTkyNzQ3MjMyODQzMF9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE5EUXdlREUzT1RrdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtaGVsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMTEmX25jX29jPVE2Y1oyUUZRX1RXM19maHFWY1V4S0M4blBmR0dPeW5Ja242SEZLbF9ZTXo0QmtUMk1RV0JHaUxLcVZxOE5CaDJmc0xpcmNLY2RtVldNTzNVM3I2TXRSRHJHMlo0Jl9uY19vaGM9dmJ0dFpKSm1xTGdRN2tOdndHTmFqYWomX25jX2dpZD1vaVJjYWt6Smw5bV9EclZFOHpUT193JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZm90elhuYUs1ZU5UYl91ank5TngxT0tBSkNKSG5HQnU5VWhLVFVZRFNZUXNBJm9lPTY5NjREODU0Jl9uY19zaWQ9ZDg4NWEyIiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNDYwNzY2MDk1XzE1NzAwMzU3MDAwNjQxOTVfNjAwMzAyOTkyNzQ3MjMyODQzMF9uLmpwZyIsIm5iZiI6MTc2Nzg0MjAyNCwiZXhwIjoxNzY3ODQ1NjI0LCJpYXQiOjE3Njc4NDIwMjR9.Y0w6_c3I7J0sJgqhjgqUCOTAXC_fdWIU4QvFlGEPOQA')">
<div className="relative w-full aspect-[3/4] bg-zinc-900 overflow-hidden mb-5">
<img alt="Shorts" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDYwNzY2MDk1XzE1NzAwMzU3MDAwNjQxOTVfNjAwMzAyOTkyNzQ3MjMyODQzMF9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDY0MHg2NDBfc2gwLjA4X3R0NiZlZmc9ZXlKMlpXNWpiMlJsWDNSaFp5STZJbWx0WVdkbFgzVnliR2RsYmk0eE5EUXdlREUzT1RrdWMyUnlMbVl5T1RNMU1DNWtaV1poZFd4MFgybHRZV2RsTG1NeUluMCZfbmNfaHQ9c2NvbnRlbnQtaGVsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMTEmX25jX29jPVE2Y1oyUUZRX1RXM19maHFWY1V4S0M4blBmR0dPeW5Ja242SEZLbF9ZTXo0QmtUMk1RV0JHaUxLcVZxOE5CaDJmc0xpcmNLY2RtVldNTzNVM3I2TXRSRHJHMlo0Jl9uY19vaGM9dmJ0dFpKSm1xTGdRN2tOdndHTmFqYWomX25jX2dpZD1vaVJjYWt6Smw5bV9EclZFOHpUT193JmVkbT1BTlRLSUlvQkFBQUEmY2NiPTctNSZvaD0wMF9BZm90elhuYUs1ZU5UYl91ank5TngxT0tBSkNKSG5HQnU5VWhLVFVZRFNZUXNBJm9lPTY5NjREODU0Jl9uY19zaWQ9ZDg4NWEyIiwiZmlsZW5hbWUiOiJTbmFwSW5zdGEudG9fNDYwNzY2MDk1XzE1NzAwMzU3MDAwNjQxOTVfNjAwMzAyOTkyNzQ3MjMyODQzMF9uLmpwZyIsIm5iZiI6MTc2Nzg0MjAyNCwiZXhwIjoxNzY3ODQ1NjI0LCJpYXQiOjE3Njc4NDIwMjR9.Y0w6_c3I7J0sJgqhjgqUCOTAXC_fdWIU4QvFlGEPOQA"/>
<button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-20 hover:scale-110">
<svg className="lucide lucide-scan-eye w-4 h-4" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
</button>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-sm md:text-base font-medium text-white group-hover:text-indigo-400 transition-colors line-clamp-1">Court Mesh Shorts</h3>
<span className="text-sm font-semibold text-white ml-2">$55.00</span>
</div>
<p className="text-xs text-zinc-500">Double Layered • Cream</p>
</div>
</div>

<div className="group cursor-pointer w-full" onclick="openModal('Navy Blue Sade Tee', '$35.00', 'https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS81Njg4NDY2NDdfMTc5NjY3ODQ2OTU5NjkzNjNfMTA3MjY3NjM0Mzg5ODIwNzc1N19uLmpwZz9zZT0tMSZzdHA9ZHN0LWpwZWdyX2UzNV9wNjQweDY0MF9zaDAuMDhfdHQ2JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VERTVNakF1YUdSeUxtWTRNamM0Tnk1a1pXWmhkV3gwWDJsdFlXZGxMbU15SW4wJl9uY19odD1zY29udGVudC1sZ2EzLTEuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTExMSZfbmNfb2M9UTZjWjJRR2R0NURBckRvQTN4SGd3V0FyOGYwN0w0MnEwTG16SUhLOHhpcW9xb0Y4SW9ZUV9aZ21jWjFhMWJkeF8wQ3RzbWcmX25jX29oYz1BQi1LUjJGMWZ4UVE3a052d0h1UkRRZSZfbmNfZ2lkPWl5RDU2Nng5bHBDSzU3R0tHRklkTlEmZWRtPUFQczE3Q1VCQUFBQSZjY2I9Ny01Jm9oPTAwX0Fmb0I4YXBVaWRZeUhMZGY0X1otWE1GQmxDOFQxc2paX2xFUGswNVF6elczRFEmb2U9Njk2NERFRDAmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBJbnN0YS50b181Njg4NDY2NDdfMTc5NjY3ODQ2OTU5NjkzNjNfMTA3MjY3NjM0Mzg5ODIwNzc1N19uLmpwZyIsIm5iZiI6MTc2Nzg0MjIxMSwiZXhwIjoxNzY3ODQ1ODExLCJpYXQiOjE3Njc4NDIyMTF9.6bCzRrhJzty5qSZT6WNC4ZGoVNI9Zyd1gANKUqW57po')">
<div className="relative w-full aspect-[3/4] bg-zinc-900 overflow-hidden mb-5">
<span className="absolute top-3 left-3 bg-zinc-800 text-zinc-300 text-[10px] px-2 py-1 uppercase tracking-wide font-bold z-10">Sold Out</span>
<img alt="Sold Out Tee" className="cursor-not-allowed opacity-60 w-full h-full object-cover grayscale" src="https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjg4NS0xNS81Njg4NDY2NDdfMTc5NjY3ODQ2OTU5NjkzNjNfMTA3MjY3NjM0Mzg5ODIwNzc1N19uLmpwZz9zZT0tMSZzdHA9ZHN0LWpwZWdyX2UzNV9wNjQweDY0MF9zaDAuMDhfdHQ2JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNkltbHRZV2RsWDNWeWJHZGxiaTR4TkRRd2VERTVNakF1YUdSeUxtWTRNamM0Tnk1a1pXWmhkV3gwWDJsdFlXZGxMbU15SW4wJl9uY19odD1zY29udGVudC1sZ2EzLTEuY2RuaW5zdGFncmFtLmNvbSZfbmNfY2F0PTExMSZfbmNfb2M9UTZjWjJRR2R0NURBckRvQTN4SGd3V0FyOGYwN0w0MnEwTG16SUhLOHhpcW9xb0Y4SW9ZUV9aZ21jWjFhMWJkeF8wQ3RzbWcmX25jX29oYz1BQi1LUjJGMWZ4UVE3a052d0h1UkRRZSZfbmNfZ2lkPWl5RDU2Nng5bHBDSzU3R0tHRklkTlEmZWRtPUFQczE3Q1VCQUFBQSZjY2I9Ny01Jm9oPTAwX0Fmb0I4YXBVaWRZeUhMZGY0X1otWE1GQmxDOFQxc2paX2xFUGswNVF6elczRFEmb2U9Njk2NERFRDAmX25jX3NpZD0xMGQxM2IiLCJmaWxlbmFtZSI6IlNuYXBJbnN0YS50b181Njg4NDY2NDdfMTc5NjY3ODQ2OTU5NjkzNjNfMTA3MjY3NjM0Mzg5ODIwNzc1N19uLmpwZyIsIm5iZiI6MTc2Nzg0MjIxMSwiZXhwIjoxNzY3ODQ1ODExLCJpYXQiOjE3Njc4NDIyMTF9.6bCzRrhJzty5qSZT6WNC4ZGoVNI9Zyd1gANKUqW57po"/>
</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="text-sm md:text-base font-medium text-zinc-400 line-through decoration-zinc-500 line-clamp-1">Navy Blue Sade Tee</h3>
<span className="text-sm font-semibold text-zinc-500">$35.00</span>
</div>
<p className="text-xs text-zinc-600">Archived</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative h-80 md:h-[500px] group overflow-hidden rounded-sm border border-white/5 cursor-pointer">
<img alt="Outerwear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" src="https://i.snapcdn.app/photo?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJodHRwczovL3Njb250ZW50LmNkbmluc3RhZ3JhbS5jb20vdi90NTEuMjkzNTAtMTUvNDcxMzU4MDI2XzEyOTIwMTQ3NTg4MTMzOTFfNDQxNzQzNzM0MTY1MjM0NzY2NV9uLmpwZz9zdHA9ZHN0LWpwZ19lMzVfcDQ4MHg0ODBfdHQ2JmVmZz1leUoyWlc1amIyUmxYM1JoWnlJNklrTkJVazlWVTBWTVgwbFVSVTB1YVcxaFoyVmZkWEpzWjJWdUxqRTBOREI0TVRnd01DNXpaSEl1WmpJNU16VXdMbVJsWm1GMWJIUmZhVzFoWjJVdVl6SWlmUSZfbmNfaHQ9c2NvbnRlbnQtaGVsMy0xLmNkbmluc3RhZ3JhbS5jb20mX25jX2NhdD0xMDcmX25jX29jPVE2Y1oyUUhZaG1sNTVEUWFQTi1NYnl5RnJocHZtQ3QzWUFhOE5YZ0VsNF9JQlBaTF9XYmUwSjRmOTZrWUprSkU0c29ENXZTY0hhQWhfdTg1QS1RU2MwS18tbDhPJl9uY19vaGM9LVd5X3MzWk05VkVRN2tOdndFbXRwSVQmX25jX2dpZD1GQ3ZPNE9VQ0lGUnA1cHItczc4SWNnJmVkbT1BTFFST0ZrQkFBQUEmY2NiPTctNSZpZ19jYWNoZV9rZXk9TXpVeU56WTVPRGt5T1RRME9ERXhNelk0TXclM0QlM0QuMy1jY2I3LTUmb2g9MDBfQWZvNnFidUIySXZmc0xYejZTdlQxMFptRVVwTEstU2hFa3F1ZGhldE1OcXNudyZvZT02OTY0RTY0MSZfbmNfc2lkPWZjOGRmYiIsImZpbGVuYW1lIjoiU25hcEluc3RhLnRvXzQ3MTM1ODAyNl8xMjkyMDE0NzU4ODEzMzkxXzQ0MTc0MzczNDE2NTIzNDc2NjVfbi5qcGciLCJuYmYiOjE3Njc4NDI0NDcsImV4cCI6MTc2Nzg0NjA0NywiaWF0IjoxNzY3ODQyNDQ3fQ.7g8QtLCa3NTLWFQ9NT4lbIwBWfov3vXmAwGTUtD9agM"/>
<div className="bg-gradient-to-t from-black via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="text-3xl font-heading font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Outerwear</h3>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<span className="text-sm font-medium text-white">Shop Collection</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-white" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="relative h-80 md:h-[500px] group overflow-hidden rounded-sm border border-white/5 cursor-pointer">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="text-3xl font-heading font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Accessories</h3>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<span className="text-sm font-medium text-white">Shop Collection</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-white" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-white/5 bg-[#080808]">
<div className="text-center max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<svg className="lucide lucide-mail mr-auto mb-6 ml-auto w-[32px] h-[32px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '32px', height: '32px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<h2 className="text-3xl font-bold text-white font-heading mb-4">Join the Movement</h2>
<p className="text-zinc-400 mb-8 max-w-lg mx-auto">Get early access to limited drops, exclusive collaborations, and behind-the-scenes content.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onsubmit="event.preventDefault(); alert('Subscribed!');">
<input className="flex-1 bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm" placeholder="Enter your email" required="" type="email"/>
<button className="hover:bg-indigo-700 transition-colors whitespace-nowrap text-sm font-bold text-white bg-indigo-600 rounded-sm pt-3 pr-8 pb-3 pl-8" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-white/5 pb-16">

<div className="md:col-span-4 flex flex-col items-start">
<img alt="Daystar Logo" className="h-16 w-auto mb-6 opacity-80" src="https://daystarr.co/cdn/shop/files/3dgifmaker41196.gif?v=1703894706&amp;width=1000"/>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                        Refining the aesthetic of modern streetwear through silhouette, fabric, and detail. Based in Los Angeles.
                    </p>
</div>

<div className="md:col-span-2">
<h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Shop</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li className=""><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Support</h4>
<ul className="space-y-4 text-sm text-zinc-400">
<li className=""><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Returns</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="text-white font-bold mb-6 text-xs uppercase tracking-widest">Connect</h4>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all" href="https://www.instagram.com/daystarr.co/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all" href="#">
<svg className="lucide lucide-twitter w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Daystar Garments. All rights reserved.</p>
<div className="flex gap-4 items-center">
<span>Terms of Service</span>
<span>Privacy Policy</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
