import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
ink: '#AA1C1C',
cream: '#FFF6E9',
paper: '#FFFCF5',
charcoal: '#2A2A2A',
stone: '#57534E',
gold: '#C59D5F',
},
fontFamily: {
bengali: ['"Noto Sans Bengali"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
animation: {
'fade-in': 'fadeIn 0.4s ease-out forwards',
'slide-in': 'slideIn 0.3s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(4px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideIn: {
'0%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(0)' },
}
}
}
}
}



        const views = {
            home: document.getElementById('view-home'),
            post: document.getElementById('view-post'),
            admin: document.getElementById('view-admin'),
            authors: document.getElementById('view-authors'),
            category: document.getElementById('view-category')
        };
        
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        let isMenuOpen = false;

        function router(route) {
            Object.values(views).forEach(el => el.classList.add('hidden-section'));
            if (views[route]) {
                views[route].classList.remove('hidden-section');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function toggleMobileMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                document.body.classList.add('mobile-menu-open');
                menuIcon.setAttribute('icon', 'lucide:x');
            } else {
                mobileMenu.classList.remove('menu-visible');
                mobileMenu.classList.add('menu-hidden');
                document.body.classList.remove('mobile-menu-open');
                menuIcon.setAttribute('icon', 'lucide:menu');
            }
        }

        function switchRole(role) {
            const btnReader = document.getElementById('btn-reader');
            const btnAdmin = document.getElementById('btn-admin');
            
            if (role === 'admin') {
                btnReader.className = "px-3 py-1 rounded-full text-xs font-semibold text-charcoal hover:bg-stone-200/50 transition-all";
                btnAdmin.className = "px-3 py-1 rounded-full text-xs font-semibold bg-ink text-white shadow-sm transition-all";
                router('admin');
            } else {
                btnAdmin.className = "px-3 py-1 rounded-full text-xs font-semibold text-charcoal hover:bg-stone-200/50 transition-all";
                btnReader.className = "px-3 py-1 rounded-full text-xs font-semibold bg-ink text-white shadow-sm transition-all";
                router('home');
            }
        }

        router('home');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full backdrop-blur-md bg-cream/80 border-b border-ink/10">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group z-50" onclick="router('home')">
<div className="w-8 h-8 bg-ink rounded-md flex items-center justify-center text-cream shadow-sm group-hover:bg-ink/90 transition-colors">
<span className="font-serif font-bold text-lg italic leading-none pt-1">P</span>
</div>
<div className="flex flex-col">
<span className="font-bengali font-bold text-ink text-xl leading-none tracking-tight">পত্রিকা</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<button className="text-charcoal hover:text-ink text-sm font-medium transition-colors" onclick="router('home')">প্রচ্ছদ</button>
<button className="text-charcoal hover:text-ink text-sm font-medium transition-colors" onclick="router('category')">গল্প</button>
<button className="text-charcoal hover:text-ink text-sm font-medium transition-colors" onclick="router('category')">কবিতা</button>
<button className="text-charcoal hover:text-ink text-sm font-medium transition-colors" onclick="router('category')">প্রবন্ধ</button>
<button className="text-charcoal hover:text-ink text-sm font-medium transition-colors" onclick="router('authors')">লেখকবৃন্দ</button>
</nav>

<div className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-1 bg-white/50 border border-ink/10 rounded-full px-1 py-1">
<button className="px-3 py-1 rounded-full text-xs font-semibold bg-ink text-white shadow-sm transition-all" id="btn-reader" onclick="switchRole('reader')">Reader</button>
<button className="px-3 py-1 rounded-full text-xs font-semibold text-charcoal hover:bg-stone-200/50 transition-all" id="btn-admin" onclick="switchRole('admin')">Admin</button>
</div>
<button className="text-charcoal hover:text-ink transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<button className="md:hidden z-50 text-charcoal p-1" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" id="menu-icon" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-40 bg-cream/98 backdrop-blur-xl menu-hidden flex flex-col pt-24 px-8 pb-8 md:hidden" id="mobile-menu">
<nav className="flex flex-col gap-6 text-2xl font-bengali font-bold text-charcoal">
<button className="text-left hover:text-ink transition-colors" onclick="router('home'); toggleMobileMenu()">প্রচ্ছদ</button>
<button className="text-left hover:text-ink transition-colors" onclick="router('category'); toggleMobileMenu()">গল্প সংকলন</button>
<button className="text-left hover:text-ink transition-colors" onclick="router('category'); toggleMobileMenu()">কবিতা</button>
<button className="text-left hover:text-ink transition-colors" onclick="router('category'); toggleMobileMenu()">প্রবন্ধ ও নিবন্ধ</button>
<button className="text-left hover:text-ink transition-colors" onclick="router('authors'); toggleMobileMenu()">লেখকবৃন্দ</button>
</nav>
<div className="mt-auto border-t border-ink/10 pt-8 space-y-6">
<div className="flex items-center gap-3">
<span className="text-sm font-serif text-stone/50 uppercase tracking-widest">View Mode</span>
<div className="flex items-center gap-2">
<button className="text-sm font-semibold text-ink underline underline-offset-4" onclick="switchRole('reader'); toggleMobileMenu()">Reader</button>
<button className="text-sm font-semibold text-stone/60 hover:text-charcoal" onclick="switchRole('admin'); toggleMobileMenu()">Admin</button>
</div>
</div>
<div className="flex gap-6 text-stone/40">
<iconify-icon icon="lucide:facebook" width="24"></iconify-icon>
<iconify-icon icon="lucide:twitter" width="24"></iconify-icon>
<iconify-icon icon="lucide:instagram" width="24"></iconify-icon>
</div>
</div>
</div>

<main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 py-8" id="main-container">

<section className="page-transition" id="view-home">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-start border-b border-ink/10 pb-16">
<div className="lg:col-span-7 space-y-6 pt-4">
<span className="inline-block px-2 py-1 bg-ink/5 text-ink text-xs font-semibold rounded tracking-wide border border-ink/10">সম্পাদকীয়</span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink leading-[1.1] tracking-tight cursor-pointer hover:opacity-90 transition-opacity" onclick="router('post')">
                        হারিয়ে যাওয়া শব্দের খোঁজে: বাংলা সাহিত্যের আধুনিক বাঁক
                    </h1>
<p className="text-lg text-charcoal/80 leading-relaxed font-light max-w-2xl">
                        সাহিত্যের দুনিয়ায় পরিবর্তন আসছে। নতুন লেখকরা কীভাবে পুরনো ঐতিহ্যকে নতুন আঙ্গিকে তুলে ধরছেন, তা নিয়েই আমাদের এবারের বিশেষ আয়োজন।
                    </p>
<div className="flex items-center gap-4 text-sm text-stone/60 font-serif pt-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden border border-white shadow-sm">
<img alt="Author" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<span className="text-charcoal font-medium">সুনীল গঙ্গোপাধ্যায়</span>
</div>
<span className="hidden sm:inline w-px h-3 bg-stone-300"></span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:calendar" width="14"></iconify-icon> ১২ অক্টোবর, ২০২৪</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="lucide:clock" width="14"></iconify-icon> ৫ মিনিট পাঠ</span>
</div>
</div>
<div className="lg:col-span-5 relative group cursor-pointer" onclick="router('post')">
<div className="aspect-[4/3] bg-stone-200 rounded-lg overflow-hidden border border-ink/5 relative shadow-sm hover:shadow-md transition-all duration-500">
<div className="absolute inset-0 bg-stone-100 flex items-center justify-center overflow-hidden">
<div className="absolute w-[150%] h-[150%] bg-ink/5 rounded-full blur-3xl -top-20 -right-20 group-hover:bg-ink/10 transition-colors duration-500"></div>
<div className="absolute w-[80%] h-[80%] bg-gold/10 rounded-full blur-2xl bottom-0 left-0"></div>
<span className="font-serif text-9xl text-ink/10 italic group-hover:scale-110 transition-transform duration-500">Aa</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-bold text-charcoal tracking-tight flex items-center gap-2">
<iconify-icon className="text-gold" icon="lucide:star" width="20"></iconify-icon>
                            সম্পাদকীয় পছন্দ
                        </h2>
<button className="text-xs font-semibold text-ink hover:underline underline-offset-4" onclick="router('category')">সব দেখুন</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">

<article className="group cursor-pointer flex flex-col gap-3" onclick="router('post')">
<div className="aspect-[3/2] bg-white rounded-lg border border-ink/5 overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-100 to-white"></div>
<div className="absolute bottom-4 left-4 p-2 bg-white/90 backdrop-blur rounded border border-ink/10">
<iconify-icon className="text-ink" icon="lucide:feather" width="18"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-gold tracking-wide uppercase mt-1">কবিতা</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors leading-snug">শহরের শেষ বিকেলের রোদ</h3>
<p className="text-stone/70 text-sm line-clamp-2 leading-relaxed">বিকেল গড়িয়ে সন্ধ্যা নামছে, শহরের কোলাহলে হারিয়ে যাচ্ছে পাখির ডাক...</p>
</article>

<article className="group cursor-pointer flex flex-col gap-3" onclick="router('post')">
<div className="aspect-[3/2] bg-white rounded-lg border border-ink/5 overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-bl from-stone-100 to-cream"></div>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-gold tracking-wide uppercase mt-1">গল্প</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors leading-snug">অপেক্ষার প্রহর ও একটি নীল খাম</h3>
<p className="text-stone/70 text-sm line-clamp-2 leading-relaxed">বহুবছর পর পিয়ন এসে কড়া নাড়ল দরজায়। হাতে সেই পরিচিত হাতের লেখা...</p>
</article>

<article className="group cursor-pointer flex flex-col gap-3" onclick="router('post')">
<div className="aspect-[3/2] bg-white rounded-lg border border-ink/5 overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-white"></div>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-gold tracking-wide uppercase mt-1">প্রবন্ধ</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors leading-snug">রবীন্দ্রনাথ ও আধুনিক মনন</h3>
<p className="text-stone/70 text-sm line-clamp-2 leading-relaxed">বিশ্বকবির দর্শন আজ কতটা প্রাসঙ্গিক, তা নিয়ে নতুন করে ভাবার সময় এসেছে...</p>
</article>

<article className="group cursor-pointer flex flex-col gap-3" onclick="router('post')">
<div className="aspect-[3/2] bg-white rounded-lg border border-ink/5 overflow-hidden relative shadow-sm hover:shadow-md transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-50 to-stone-200"></div>
</div>
<div className="flex items-center gap-2 text-xs font-semibold text-gold tracking-wide uppercase mt-1">ভ্রমণ</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors leading-snug">কাশ্মীরের ডাল লেকে এক সন্ধ্যা</h3>
<p className="text-stone/70 text-sm line-clamp-2 leading-relaxed">পাহাড়ের ছায়া যখন জলে এসে পড়ে, তখন সময় যেন থমকে দাঁড়ায়...</p>
</article>
</div>
</div>

<div className="lg:col-span-4 space-y-8">
<div className="bg-white border border-ink/10 rounded-xl p-6 shadow-sm">
<h3 className="text-xs font-bold text-stone/40 uppercase tracking-widest mb-6 border-b border-ink/10 pb-2">সর্বশেষ লেখা</h3>
<div className="flex flex-col gap-6">

<div className="group cursor-pointer" onclick="router('post')">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-bold text-ink bg-ink/5 px-1.5 py-0.5 rounded">গল্প</span>
<span className="text-[10px] text-stone/40 font-serif">Today</span>
</div>
<h4 className="text-base font-bold text-charcoal group-hover:text-ink transition-colors leading-snug mb-1">বৃষ্টির দিনে রবীন্দ্রসংগীত</h4>
<span className="text-xs text-stone/50">হুমায়ূন আহমেদ</span>
</div>

<div className="group cursor-pointer" onclick="router('post')">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded">কবিতা</span>
<span className="text-[10px] text-stone/40 font-serif">Yesterday</span>
</div>
<h4 className="text-base font-bold text-charcoal group-hover:text-ink transition-colors leading-snug mb-1">মেঘের পরে মেঘ জমেছে</h4>
<span className="text-xs text-stone/50">রবীন্দ্রনাথ ঠাকুর</span>
</div>

<div className="group cursor-pointer" onclick="router('post')">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded">প্রবন্ধ</span>
<span className="text-[10px] text-stone/40 font-serif">2 days ago</span>
</div>
<h4 className="text-base font-bold text-charcoal group-hover:text-ink transition-colors leading-snug mb-1">বাংলার বাউল ঐতিহ্য</h4>
<span className="text-xs text-stone/50">সৈয়দ মুজতবা আলী</span>
</div>

<div className="group cursor-pointer" onclick="router('post')">
<div className="flex items-baseline justify-between mb-1">
<span className="text-[10px] font-bold text-ink bg-ink/5 px-1.5 py-0.5 rounded">উপন্যাস</span>
<span className="text-[10px] text-stone/40 font-serif">3 days ago</span>
</div>
<h4 className="text-base font-bold text-charcoal group-hover:text-ink transition-colors leading-snug mb-1">পদ্মা নদীর মাঝি (পর্ব-১)</h4>
<span className="text-xs text-stone/50">মানিক বন্দোপাধ্যায়</span>
</div>
</div>
</div>

<div className="bg-ink text-cream rounded-xl p-8 text-center relative overflow-hidden">
<iconify-icon className="absolute top-4 left-4 text-white/10 text-4xl" icon="lucide:quote"></iconify-icon>
<p className="font-serif italic text-lg leading-relaxed relative z-10 mb-4">
                            "মরিতে চাহি না আমি সুন্দর ভুবনে,<br/>মানবের মাঝে আমি বাঁচিবারে চাই।"
                        </p>
<span className="text-xs font-bold uppercase tracking-widest opacity-60">— রবীন্দ্রনাথ ঠাকুর</span>
</div>
</div>
</div>

<div className="border-t border-ink/10 pt-16 pb-8">
<div className="bg-white border border-ink/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-stone-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 max-w-lg">
<h3 className="text-2xl font-bold text-charcoal mb-2">সাহিত্য ও সংস্কৃতির সব খবর</h3>
<p className="text-stone/60 text-sm">সপ্তাহের সেরা লেখাগুলো সরাসরি আপনার ইমেইলে পেতে সাবস্ক্রাইব করুন।</p>
</div>
<div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
<input className="px-4 py-2.5 rounded-lg border border-stone-200 bg-stone-50 w-full sm:w-64 focus:outline-none focus:border-ink transition-colors text-sm" placeholder="আপনার ইমেইল দিন" type="email"/>
<button className="px-6 py-2.5 bg-charcoal text-white font-semibold rounded-lg hover:bg-ink transition-colors text-sm shadow-sm">সাবস্ক্রাইব</button>
</div>
</div>
</div>
</section>

<section className="hidden-section page-transition" id="view-authors">

<div className="bg-white border border-ink/10 rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 relative z-10">
<img alt="Featured" className="w-full h-full object-cover bg-stone-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Jibanananda"/>
</div>
<div className="relative z-10">
<span className="text-xs font-serif text-gold uppercase tracking-widest font-semibold mb-2 block">Featured Author</span>
<h1 className="text-3xl md:text-5xl font-bold text-ink mb-4">জীবনানন্দ দাশ</h1>
<p className="text-stone/70 text-lg leading-relaxed max-w-2xl mb-6">
                        রবীন্দ্র-পরবর্তী যুগের অন্যতম প্রধান আধুনিক কবি। তাঁকে শুদ্ধতম কবি অভিধায় আখ্যায়িত করা হয়েছে। তাঁর কবিতায় গ্রামবাংলার নিসর্গ ও রূপকথা এক অনন্য মাত্রায় ফুটে উঠেছে।
                    </p>
<div className="flex flex-wrap justify-center md:justify-start gap-3">
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">Poetry</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">Essays</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">Novels</span>
</div>
</div>
</div>
<div className="mb-8 flex items-center justify-between">
<h2 className="text-2xl font-bold text-charcoal">সকল লেখক</h2>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded border border-ink/10 text-stone-500 hover:bg-white hover:text-ink transition-colors"><iconify-icon icon="lucide:layout-grid" width="16"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-stone-400 hover:text-charcoal transition-colors"><iconify-icon icon="lucide:list" width="16"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-ink/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-ink/30 hover:shadow-sm transition-all group cursor-pointer">
<div className="w-20 h-20 rounded-full border-2 border-cream shadow-sm overflow-hidden mb-4 group-hover:scale-105 transition-transform">
<img alt="Felix" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<h3 className="text-lg font-bold text-charcoal">সুনীল গঙ্গোপাধ্যায়</h3>
<p className="text-xs text-stone/50 font-serif mb-3">Poet &amp; Novelist</p>
<button className="mt-auto text-xs font-semibold text-ink hover:underline">View Profile</button>
</div>

<div className="bg-white border border-ink/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-ink/30 hover:shadow-sm transition-all group cursor-pointer">
<div className="w-20 h-20 rounded-full border-2 border-cream shadow-sm overflow-hidden mb-4 group-hover:scale-105 transition-transform">
<img alt="Aneka" src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka"/>
</div>
<h3 className="text-lg font-bold text-charcoal">তসলিমা নাসরিন</h3>
<p className="text-xs text-stone/50 font-serif mb-3">Writer &amp; Physician</p>
<button className="mt-auto text-xs font-semibold text-ink hover:underline">View Profile</button>
</div>

<div className="bg-white border border-ink/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-ink/30 hover:shadow-sm transition-all group cursor-pointer">
<div className="w-20 h-20 rounded-full border-2 border-cream shadow-sm overflow-hidden mb-4 group-hover:scale-105 transition-transform">
<img alt="Ryan" src="https://api.dicebear.com/7.x/notionists/svg?seed=Ryan"/>
</div>
<h3 className="text-lg font-bold text-charcoal">হুমায়ূন আহমেদ</h3>
<p className="text-xs text-stone/50 font-serif mb-3">Novelist &amp; Filmmaker</p>
<button className="mt-auto text-xs font-semibold text-ink hover:underline">View Profile</button>
</div>

<div className="bg-white border border-ink/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-ink/30 hover:shadow-sm transition-all group cursor-pointer">
<div className="w-20 h-20 rounded-full border-2 border-cream shadow-sm overflow-hidden mb-4 group-hover:scale-105 transition-transform">
<img alt="Tagore" src="https://api.dicebear.com/7.x/notionists/svg?seed=Tagore"/>
</div>
<h3 className="text-lg font-bold text-charcoal">রবীন্দ্রনাথ ঠাকুর</h3>
<p className="text-xs text-stone/50 font-serif mb-3">Nobel Laureate</p>
<button className="mt-auto text-xs font-semibold text-ink hover:underline">View Profile</button>
</div>

<div className="bg-white border border-ink/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-ink/30 hover:shadow-sm transition-all group cursor-pointer">
<div className="w-20 h-20 rounded-full border-2 border-cream shadow-sm overflow-hidden mb-4 group-hover:scale-105 transition-transform">
<img alt="Bibhuti" src="https://api.dicebear.com/7.x/notionists/svg?seed=Bibhuti"/>
</div>
<h3 className="text-lg font-bold text-charcoal">বিভূতিভূষণ</h3>
<p className="text-xs text-stone/50 font-serif mb-3">Novelist</p>
<button className="mt-auto text-xs font-semibold text-ink hover:underline">View Profile</button>
</div>

<div className="bg-white border border-ink/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-ink/30 hover:shadow-sm transition-all group cursor-pointer">
<div className="w-20 h-20 rounded-full border-2 border-cream shadow-sm overflow-hidden mb-4 group-hover:scale-105 transition-transform">
<img alt="Sarat" src="https://api.dicebear.com/7.x/notionists/svg?seed=Sarat"/>
</div>
<h3 className="text-lg font-bold text-charcoal">শরৎচন্দ্র চট্টোপাধ্যায়</h3>
<p className="text-xs text-stone/50 font-serif mb-3">Novelist</p>
<button className="mt-auto text-xs font-semibold text-ink hover:underline">View Profile</button>
</div>
</div>
</section>

<section className="hidden-section page-transition" id="view-category">
<div className="flex flex-col md:flex-row gap-12 items-start">

<aside className="w-full md:w-64 flex-shrink-0 space-y-8 sticky top-24">
<div>
<h3 className="text-xs font-bold text-stone/40 uppercase tracking-widest mb-4">Categories</h3>
<div className="space-y-3">
<div className="flex items-center">
<input checked="" className="custom-checkbox peer" id="cat-poem" type="checkbox"/>
<label className="text-sm text-stone-600 font-medium hover:text-ink transition-colors" htmlFor="cat-poem">কবিতা (Poetry)</label>
</div>
<div className="flex items-center">
<input checked="" className="custom-checkbox peer" id="cat-story" type="checkbox"/>
<label className="text-sm text-stone-600 font-medium hover:text-ink transition-colors" htmlFor="cat-story">গল্প (Stories)</label>
</div>
<div className="flex items-center">
<input className="custom-checkbox peer" id="cat-essay" type="checkbox"/>
<label className="text-sm text-stone-600 font-medium hover:text-ink transition-colors" htmlFor="cat-essay">প্রবন্ধ (Essays)</label>
</div>
<div className="flex items-center">
<input className="custom-checkbox peer" id="cat-novel" type="checkbox"/>
<label className="text-sm text-stone-600 font-medium hover:text-ink transition-colors" htmlFor="cat-novel">উপন্যাস (Novels)</label>
</div>
</div>
</div>
<div>
<h3 className="text-xs font-bold text-stone/40 uppercase tracking-widest mb-4">Time Period</h3>
<div className="space-y-3">
<div className="flex items-center">
<input checked="" className="custom-checkbox peer" id="year-2024" type="checkbox"/>
<label className="text-sm text-stone-600 font-medium hover:text-ink transition-colors" htmlFor="year-2024">2024</label>
</div>
<div className="flex items-center">
<input className="custom-checkbox peer" id="year-2023" type="checkbox"/>
<label className="text-sm text-stone-600 font-medium hover:text-ink transition-colors" htmlFor="year-2023">2023</label>
</div>
<div className="flex items-center">
<input className="custom-checkbox peer" id="year-old" type="checkbox"/>
<label className="text-sm text-stone-600 font-medium hover:text-ink transition-colors" htmlFor="year-old">Archived</label>
</div>
</div>
</div>
</aside>

<div className="flex-grow w-full">
<div className="mb-6 flex items-baseline justify-between border-b border-ink/10 pb-4">
<h1 className="text-3xl font-bold text-ink tracking-tight">গল্প ও কবিতা সংকলন</h1>
<span className="text-xs font-serif text-stone/50 italic">Showing 10+ results</span>
</div>
<div className="space-y-6">

<article className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 -mx-4 rounded-xl hover:bg-white/60 hover:shadow-sm transition-all cursor-pointer" onclick="router('post')">
<div className="w-full sm:w-48 aspect-[3/2] bg-stone-200 rounded-lg overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-50 flex items-center justify-center">
<iconify-icon className="text-stone/20" icon="lucide:book-open" width="32"></iconify-icon>
</div>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-600">Story</span>
<span className="text-xs text-stone/40 font-serif">Oct 12, 2024</span>
</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors mb-2">অপেক্ষার প্রহর ও একটি নীল খাম</h3>
<p className="text-sm text-stone/60 line-clamp-2 mb-3">বহুবছর পর পিয়ন এসে কড়া নাড়ল দরজায়। হাতে সেই পরিচিত নীল খাম, যার অপেক্ষায় কেটে গেছে দীর্ঘ দুটি যুগ।</p>
<div className="flex items-center gap-2 text-xs font-medium text-stone/50">
<img alt="avatar" className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
<span>সুনীল গঙ্গোপাধ্যায়</span>
</div>
</div>
</article>

<article className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 -mx-4 rounded-xl hover:bg-white/60 hover:shadow-sm transition-all cursor-pointer" onclick="router('post')">
<div className="w-full sm:w-48 aspect-[3/2] bg-stone-200 rounded-lg overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-gradient-to-br from-paper to-white flex items-center justify-center">
<iconify-icon className="text-stone/20" icon="lucide:feather" width="32"></iconify-icon>
</div>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-amber-50 text-amber-600">Poetry</span>
<span className="text-xs text-stone/40 font-serif">Sep 28, 2024</span>
</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors mb-2">শহরের শেষ বিকেলের রোদ</h3>
<p className="text-sm text-stone/60 line-clamp-2 mb-3">শহরের বুকে যখন সন্ধ্যা নামে, তখন ট্রামলাইনের পাশে দাঁড়িয়ে থাকা পুরনো গাছটা ফিসফিস করে কথা বলে।</p>
<div className="flex items-center gap-2 text-xs font-medium text-stone/50">
<img alt="avatar" className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/notionists/svg?seed=Aneka"/>
<span>তসলিমা নাসরিন</span>
</div>
</div>
</article>

<article className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 -mx-4 rounded-xl hover:bg-white/60 hover:shadow-sm transition-all cursor-pointer" onclick="router('post')">
<div className="w-full sm:w-48 aspect-[3/2] bg-stone-200 rounded-lg overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
<iconify-icon className="text-stone/20" icon="lucide:file-text" width="32"></iconify-icon>
</div>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-50 text-emerald-600">Essay</span>
<span className="text-xs text-stone/40 font-serif">Sep 10, 2024</span>
</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors mb-2">বাংলা ভাষা ও তার বিবর্তন</h3>
<p className="text-sm text-stone/60 line-clamp-2 mb-3">চর্যাপদ থেকে আজকের ফেসবুক স্ট্যাটাস—বাংলা ভাষার এই দীর্ঘ পথচলার বাঁকে বাঁকে লুকিয়ে আছে ইতিহাসের মণিমুক্তো।</p>
<div className="flex items-center gap-2 text-xs font-medium text-stone/50">
<img alt="avatar" className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/notionists/svg?seed=Ryan"/>
<span>হুমায়ূন আহমেদ</span>
</div>
</div>
</article>

<article className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-4 -mx-4 rounded-xl hover:bg-white/60 hover:shadow-sm transition-all cursor-pointer" onclick="router('post')">
<div className="w-full sm:w-48 aspect-[3/2] bg-stone-200 rounded-lg overflow-hidden flex-shrink-0">
<div className="w-full h-full bg-gradient-to-br from-stone-100 to-white flex items-center justify-center">
<iconify-icon className="text-stone/20" icon="lucide:cloud-sun" width="32"></iconify-icon>
</div>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-purple-50 text-purple-600">Travel</span>
<span className="text-xs text-stone/40 font-serif">Aug 15, 2024</span>
</div>
<h3 className="text-xl font-bold text-charcoal group-hover:text-ink transition-colors mb-2">পথের পাঁচালী: এক নতুন যাত্রা</h3>
<p className="text-sm text-stone/60 line-clamp-2 mb-3">গ্রামের সেই মেঠো পথ ধরে হাঁটতে হাঁটতে হঠাৎ মনে হলো, জীবন তো আসলে এই পথেরই মতো। কোথাও আঁকাবাঁকা, কোথাও সোজা।</p>
<div className="flex items-center gap-2 text-xs font-medium text-stone/50">
<img alt="avatar" className="w-5 h-5 rounded-full" src="https://api.dicebear.com/7.x/notionists/svg?seed=Bibhuti"/>
<span>বিভূতিভূষণ</span>
</div>
</div>
</article>
</div>

<div className="flex justify-center gap-2 mt-12">
<button className="w-8 h-8 flex items-center justify-center rounded border border-ink/10 text-stone-500 hover:bg-white hover:text-ink transition-colors disabled:opacity-50"><iconify-icon icon="lucide:chevron-left" width="16"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center rounded bg-ink text-white font-serif text-sm">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-ink/10 text-stone-500 hover:bg-white hover:text-ink transition-colors font-serif text-sm">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-ink/10 text-stone-500 hover:bg-white hover:text-ink transition-colors font-serif text-sm">3</button>
<button className="w-8 h-8 flex items-center justify-center rounded border border-ink/10 text-stone-500 hover:bg-white hover:text-ink transition-colors"><iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="hidden-section page-transition" id="view-post">
<div className="max-w-[720px] mx-auto">
<div className="flex items-center gap-2 text-xs text-stone/50 mb-8 font-serif">
<span className="hover:text-ink cursor-pointer" onclick="router('home')">Home</span>
<iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon>
<span className="hover:text-ink cursor-pointer" onclick="router('category')">Essays</span>
</div>
<h1 className="text-3xl md:text-5xl font-bold text-ink leading-[1.2] mb-6 tracking-tight">
                    হারিয়ে যাওয়া শব্দের খোঁজে: বাংলা সাহিত্যের আধুনিক বাঁক
                </h1>
<div className="flex items-center justify-between border-y border-ink/10 py-4 mb-8">
<div className="flex items-center gap-3">
<img alt="Author" className="w-10 h-10 rounded-full border border-stone-200 bg-white" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
<div className="flex flex-col">
<span className="text-sm font-bold text-charcoal">সুনীল গঙ্গোপাধ্যায়</span>
<span className="text-xs text-stone/60">সাহিত্যিক ও প্রাবন্ধিক</span>
</div>
</div>
<div className="flex items-center gap-4 text-stone/50">
<button className="hover:text-ink transition-colors"><iconify-icon icon="lucide:share-2" width="18"></iconify-icon></button>
<button className="hover:text-ink transition-colors"><iconify-icon icon="lucide:bookmark" width="18"></iconify-icon></button>
</div>
</div>
<article className="prose-bengali text-lg md:text-xl text-charcoal/90">
<p className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-ink first-letter:float-left first-letter:mr-3 first-letter:mt-[-6px]">
                        সাহিত্যের ইতিহাস এক অদ্ভুত পথচলা। কখনো সে রাজপথ দিয়ে হাটে, কখনো বা সরু গলি দিয়ে। বাংলা সাহিত্যের ক্ষেত্রেও এর ব্যতিক্রম ঘটেনি। উনিশ শতকের নবজাগরণ থেকে শুরু করে আজকের ফেইসবুক স্ট্যাটাস—সবর্ত্রই শব্দের এক মায়াবী খেলা।
                    </p>
<p className="mb-6">
                        আধুনিক কবিতার দিকে তাকালে দেখা যায়, ছন্দের বাধন আলগা হয়েছে অনেক আগেই। এখন ভাবটাই মুখ্য। কিন্তু এই ভাব প্রকাশের মাধ্যম হিসেবে যে ভাষা ব্যবহৃত হচ্ছে, তা অনেক ক্ষেত্রেই সংকর। <span className="bg-ink/5 px-1 rounded text-ink font-medium">ইংরেজি ও বাংলার মিশেলে</span> তৈরি হচ্ছে এক নতুন উপভাষা।
                    </p>
<h2 className="text-2xl font-bold text-ink mt-10 mb-4 tracking-tight">প্রযুক্তির প্রভাব ও সাহিত্য</h2>
<p className="mb-6">
                        বই পড়ার অভ্যাস কমেছে, এ কথা অস্বীকার করার উপায় নেই। কিন্তু পড়ার মাধ্যম বদলেছে। এখন মানুষ স্ক্রল করে পড়ে। তাই লেখকদের চ্যালেঞ্জ এখন দ্বিগুণ। স্বল্প সময়ে পাঠকের মন জয় করতে হবে।
                    </p>
<blockquote className="border-l-4 border-gold pl-6 py-2 my-8 italic text-2xl text-stone/80 font-serif bg-white/50 rounded-r-lg">
                        "শব্দ যখন নীরব হয়, তখন অনুভূতির জন্ম হয়। কিন্তু ডিজিটাল কোলাহলে সেই নীরবতা আজ বড়ই দুর্লভ।"
                    </blockquote>
<p className="mb-6">
                        তবুও আশার কথা হলো, লিটল ম্যাগাজিন আন্দোলন এখনো থেমে নেই। কলেজ স্ট্রিটের মোড়ে এখনো তরুণ লেখকরা আড্ডা দেয়, চায়ের কাপে ঝড় তোলে। তাদের চোখে এখনো স্বপ্ন—বাংলা সাহিত্যকে বিশ্বদরবারে নতুন করে পরিচয় করিয়ে দেওয়ার।
                    </p>
<p className="mb-12">
                        আমাদের দায়িত্ব এই ধুকপুকানিটাকে জিইয়ে রাখা। শুদ্ধ বাংলার চর্চা, ধ্রুপদী সাহিত্যের পাঠ এবং নতুনকে বরণ করে নেওয়া—এই তিনে মিলেই গড়ে উঠবে আগামীর বাংলা সাহিত্য।
                    </p>
</article>

<div className="flex flex-wrap gap-2 mb-12 border-t border-ink/10 pt-6">
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600 hover:bg-ink hover:text-white transition-colors cursor-pointer">#BengaliLiterature</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600 hover:bg-ink hover:text-white transition-colors cursor-pointer">#Modernism</span>
<span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600 hover:bg-ink hover:text-white transition-colors cursor-pointer">#Culture</span>
</div>

<div className="bg-stone-50 rounded-xl p-6 md:p-8 mb-12">
<h3 className="text-sm font-bold text-stone/40 uppercase tracking-widest mb-6">Read Next</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="group cursor-pointer">
<h4 className="text-lg font-bold text-charcoal group-hover:text-ink transition-colors mb-2">পোস্টমডার্ন সাহিত্য ও আমাদের অবস্থান</h4>
<p className="text-xs text-stone/60 line-clamp-2">পাশ্চাত্যের হাওয়া যখন পূর্বে এসে লাগে, তখন তার রূপ কেমন হয়?</p>
</div>
<div className="group cursor-pointer">
<h4 className="text-lg font-bold text-charcoal group-hover:text-ink transition-colors mb-2">কবিতার ছন্দ প্রকরণ</h4>
<p className="text-xs text-stone/60 line-clamp-2">মাত্রাবৃত্ত না কি অক্ষরবৃত্ত? নবীন কবিদের জন্য একটি নির্দেশিকা।</p>
</div>
</div>
</div>
</div>
</section>

<section className="hidden-section page-transition h-[calc(100vh-8rem)]" id="view-admin">
<div className="flex flex-col md:flex-row h-full gap-6">

<aside className="hidden md:flex w-64 flex-shrink-0 flex-col gap-1">
<div className="mb-6 px-3">
<h2 className="text-xs font-semibold text-stone/50 uppercase tracking-widest font-sans">Dashboard</h2>
</div>
<button className="flex items-center gap-3 px-3 py-2 rounded-md bg-ink/10 text-ink font-medium text-sm">
<iconify-icon icon="lucide:file-text" width="18"></iconify-icon> Posts
                    </button>
<button className="flex items-center gap-3 px-3 py-2 rounded-md text-charcoal hover:bg-stone-200/50 font-medium text-sm transition-colors">
<iconify-icon icon="lucide:users" width="18"></iconify-icon> Authors
                    </button>
<button className="flex items-center gap-3 px-3 py-2 rounded-md text-charcoal hover:bg-stone-200/50 font-medium text-sm transition-colors">
<iconify-icon icon="lucide:settings" width="18"></iconify-icon> Settings
                    </button>
</aside>

<div className="flex-grow bg-white rounded-xl border border-ink/10 shadow-sm flex flex-col overflow-hidden h-full">
<div className="h-16 border-b border-stone-100 flex items-center justify-between px-4 md:px-6 bg-paper flex-shrink-0">
<div className="flex items-center gap-4">
<span className="hidden sm:inline text-xs font-mono text-stone/40">/posts/new</span>
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
<span className="text-xs text-stone/50">Unsaved</span>
</div>
<button className="px-4 py-1.5 bg-ink text-white text-sm font-semibold rounded shadow-sm hover:bg-ink/90 transition-colors">Publish</button>
</div>
<div className="flex-grow flex flex-col overflow-y-auto">
<div className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b border-stone-100 px-4 md:px-6 py-3 flex items-center gap-4 overflow-x-auto">
<div className="flex items-center gap-1 border-r border-stone-100 pr-4 flex-shrink-0">
<button className="p-1.5 text-stone/60 hover:text-ink hover:bg-red-50 rounded"><iconify-icon icon="lucide:bold" width="16"></iconify-icon></button>
<button className="p-1.5 text-stone/60 hover:text-ink hover:bg-red-50 rounded"><iconify-icon icon="lucide:italic" width="16"></iconify-icon></button>
</div>
<div className="flex items-center gap-1 flex-shrink-0">
<button className="p-1.5 text-stone/60 font-serif font-bold text-sm hover:text-ink">H1</button>
<button className="p-1.5 text-stone/60 font-serif font-bold text-sm hover:text-ink">H2</button>
</div>
</div>
<div className="max-w-[720px] mx-auto w-full px-6 py-10 flex flex-col gap-6">
<input className="text-3xl md:text-4xl font-bold text-charcoal placeholder:text-stone/30 outline-none bg-transparent font-bengali tracking-tight w-full" type="text" value="হারিয়ে যাওয়া শব্দের খোঁজে"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-semibold text-stone/40 uppercase mb-1.5">Category</label>
<div className="relative">
<select className="w-full bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded px-3 py-2 appearance-none focus:border-ink outline-none">
<option>প্রবন্ধ (Essays)</option>
<option>কবিতা (Poetry)</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-stone/40 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="prose-bengali text-lg text-charcoal/80 outline-none min-h-[300px]" contenteditable="true">
<p>এখানে লিখুন...</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-ink/10 bg-paper py-12 mt-auto">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-ink rounded text-cream flex items-center justify-center font-serif font-bold text-xs italic">P</div>
<span className="font-bengali font-bold text-ink text-lg">পত্রিকা</span>
</div>
<p className="text-stone/60 text-sm leading-relaxed max-w-xs font-serif">Bridging tradition and modern reading experiences.</p>
</div>
<div>
<h4 className="font-serif font-semibold text-charcoal text-sm mb-4">Navigation</h4>
<ul className="space-y-2 text-sm text-stone/60">
<li><button className="hover:text-ink" onclick="router('home')">Home</button></li>
<li><button className="hover:text-ink" onclick="router('authors')">Authors</button></li>
<li><button className="hover:text-ink" onclick="router('category')">Archive</button></li>
</ul>
</div>
<div>
<h4 className="font-serif font-semibold text-charcoal text-sm mb-4">Connect</h4>
<div className="flex gap-4 text-stone/40">
<a className="hover:text-ink" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-ink" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
