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
darkMode: 'class',
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const generateDummyArticles = () => {
            const categories = ["Human Design", "Numerologi", "Life Path", "Refleksi", "Spiritualitas"];
            const allTags = ["Energi", "Karir", "Relasi", "Mindset", "Keseimbangan", "Fokus", "Kesadaran"];
            const articles = [];
            for(let i=1; i<=15; i++) {
                const cat = categories[Math.floor(Math.random() * categories.length)];
                const tags = allTags.sort(() => 0.5 - Math.random()).slice(0, 2);
                articles.push({
                    id: i, title: `Menyelami Konsep ${cat} untuk Kehidupan #${i}`,
                    summary: `Pelajari bagaimana elemen fundamental dari ${cat.toLowerCase()} dapat membantu mengurai kompleksitas pengambilan keputusan sehari-hari.`,
                    category: cat, tags: tags, author: "Tim Aura", date: `${i+10} Nov 2023`, readTime: `${Math.floor(Math.random() * 5) + 3} mnt`
                });
            }
            return articles;
        };

        function auraApp() {
            return {
                // Global State
                isDark: true,
                isLoggedIn: false, // Simulate auth state
                page: 'landing', // landing, login, register, forgot, dashboard, input, result, insights, detail
                isGlobalLoading: false,
                mobileMenuOpen: false,

                // Insights State
                articles: [],
                activeArticle: null,
                searchQuery: '', selectedCategory: null, selectedTags: [],
                categories: ["Human Design", "Numerologi", "Life Path", "Refleksi", "Spiritualitas"],
                availableTags: ["Energi", "Karir", "Relasi", "Mindset", "Keseimbangan", "Fokus", "Kesadaran"],
                currentPageNum: 1, itemsPerPage: 6,

                initApp() {
                    const savedTheme = localStorage.getItem('theme');
                    this.isDark = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                    this.articles = generateDummyArticles();
                    this.$watch('searchQuery', () => this.resetPagination());
                    this.$watch('selectedTags', () => this.resetPagination());
                    // Auto-login for testing purposes if needed
                    // this.isLoggedIn = true; this.page = 'dashboard';
                },

                toggleTheme() {
                    this.isDark = !this.isDark;
                    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
                },

                // Routing & Loading Simulator
                goTo(targetPage) {
                    this.mobileMenuOpen = false;
                    // Don't scroll to top if just switching tabs in input, but since pages change entirely, scroll up
                    window.scrollTo({ top: 0, behavior: 'instant' }); 
                    this.page = targetPage;
                },

                simulateLoading(callback) {
                    this.isGlobalLoading = true;
                    setTimeout(() => {
                        this.isGlobalLoading = false;
                        callback();
                    }, 800);
                },

                // Form Submissions
                submitLogin() {
                    this.simulateLoading(() => {
                        this.isLoggedIn = true;
                        this.goTo('dashboard');
                    });
                },
                submitRegister() {
                    this.simulateLoading(() => {
                        this.isLoggedIn = true;
                        this.goTo('dashboard');
                    });
                },
                submitGeneric() {
                    this.simulateLoading(() => { alert('Aksi berhasil (Simulasi)'); });
                },
                submitAnalysis() {
                    this.simulateLoading(() => { this.goTo('result'); });
                },
                logout() {
                    this.simulateLoading(() => {
                        this.isLoggedIn = false;
                        this.goTo('landing');
                    });
                },

                // Articles Logic
                openArticle(article) { this.activeArticle = article; this.goTo('detail'); },
                toggleTag(tag) {
                    const idx = this.selectedTags.indexOf(tag);
                    idx > -1 ? this.selectedTags.splice(idx, 1) : this.selectedTags.push(tag);
                },
                resetFilters() { this.searchQuery = ''; this.selectedCategory = null; this.selectedTags = []; this.resetPagination(); },
                
                get filteredArticles() {
                    let res = this.articles;
                    if (this.searchQuery.trim() !== '') {
                        const q = this.searchQuery.toLowerCase();
                        res = res.filter(a => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.tags.some(t => t.toLowerCase().includes(q)));
                    }
                    if (this.selectedCategory) res = res.filter(a => a.category === this.selectedCategory);
                    if (this.selectedTags.length > 0) res = res.filter(a => this.selectedTags.every(t => a.tags.includes(t)));
                    return res;
                },
                get totalPages() { return Math.ceil(this.filteredArticles.length / this.itemsPerPage); },
                get paginatedArticles() {
                    const start = (this.currentPageNum - 1) * this.itemsPerPage;
                    return this.filteredArticles.slice(start, start + this.itemsPerPage);
                },
                resetPagination() { this.currentPageNum = 1; },
                goToPage(p) { if(p >= 1 && p <= this.totalPages) { this.currentPageNum = p; this.scrollToGrid(); } },
                nextPage() { if(this.currentPageNum < this.totalPages) { this.currentPageNum++; this.scrollToGrid(); } },
                prevPage() { if(this.currentPageNum > 1) { this.currentPageNum--; this.scrollToGrid(); } },
                scrollToGrid() { document.getElementById('article-grid')?.scrollIntoView({behavior: 'smooth'}); }
            }
        }
    
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
      

<div className="fixed inset-0 z-[100] bg-white/80 dark:bg-[#0a0a0d]/80 backdrop-blur-sm flex items-center justify-center" x-show="isGlobalLoading" x-transition.opacity="">
<iconify-icon className="text-indigo-500 animate-spin" icon="solar:spinner-bold-duotone" width="48"></iconify-icon>
</div>

<nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#0a0a0d]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div @click="goTo('landing')" className="flex-shrink-0 cursor-pointer">
<span className="text-xl font-semibold tracking-tighter bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400 text-gradient">AURA</span>
</div>

<div className="hidden md:flex items-center space-x-8">

<template x-if="!isLoggedIn">
<div className="flex items-center space-x-8">
<a :className="page === 'landing' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'" @click.prevent="goTo('landing')" className="text-sm font-medium hover:text-slate-900 dark:hover:text-white" href="#">Beranda</a>
<a :className="page === 'insights' || page === 'detail' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'" @click.prevent="goTo('insights')" className="text-sm font-medium hover:text-slate-900 dark:hover:text-white" href="#">Insight</a>
</div>
</template>

<template x-if="isLoggedIn">
<div className="flex items-center space-x-8">
<a :className="page === 'dashboard' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'" @click.prevent="goTo('dashboard')" className="text-sm font-medium hover:text-slate-900 dark:hover:text-white" href="#">Dashboard</a>
<a :className="page === 'input' || page === 'result' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'" @click.prevent="goTo('input')" className="text-sm font-medium hover:text-slate-900 dark:hover:text-white" href="#">Analisis Baru</a>
<a :className="page === 'insights' || page === 'detail' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'" @click.prevent="goTo('insights')" className="text-sm font-medium hover:text-slate-900 dark:hover:text-white" href="#">Insight</a>
</div>
</template>
</div>

<div className="flex items-center space-x-4">

<button @click="toggleTheme()" className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 focus:outline-none">
<iconify-icon icon="solar:moon-linear" width="20" x-show="!isDark"></iconify-icon>
<iconify-icon icon="solar:sun-linear" style={{display: 'none'}} width="20" x-show="isDark"></iconify-icon>
</button>

<template x-if="!isLoggedIn">
<div className="hidden md:flex items-center space-x-3">
<button @click="goTo('login')" className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Masuk</button>
<button @click="goTo('register')" className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 shadow-sm transition-colors">Daftar</button>
</div>
</template>

<template x-if="isLoggedIn">
<div className="hidden md:flex items-center space-x-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center cursor-pointer border border-indigo-500/20">
<span className="text-xs font-medium">JD</span>
</div>
<button @click="logout()" className="text-sm font-medium text-slate-500 hover:text-rose-500 transition-colors">Keluar</button>
</div>
</template>

<button @click="mobileMenuOpen = !mobileMenuOpen" className="md:hidden text-slate-500 dark:text-slate-400 focus:outline-none">
<iconify-icon :icon="mobileMenuOpen ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0d]" x-show="mobileMenuOpen" x-transition="">
<div className="px-4 pt-2 pb-4 space-y-1">
<template x-if="!isLoggedIn">
<div>
<a @click.prevent="goTo('landing')" className="block px-3 py-2 text-base font-medium text-slate-900 dark:text-white" href="#">Beranda</a>
<a @click.prevent="goTo('insights')" className="block px-3 py-2 text-base font-medium text-slate-500 dark:text-slate-400" href="#">Insight</a>
<div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
<button @click="goTo('login')" className="w-full px-4 py-2 text-center text-sm font-medium border border-slate-200 dark:border-white/10 rounded-xl">Masuk</button>
<button @click="goTo('register')" className="w-full px-4 py-2 text-center text-sm font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl">Daftar</button>
</div>
</div>
</template>
<template x-if="isLoggedIn">
<div>
<a @click.prevent="goTo('dashboard')" className="block px-3 py-2 text-base font-medium text-slate-900 dark:text-white" href="#">Dashboard</a>
<a @click.prevent="goTo('input')" className="block px-3 py-2 text-base font-medium text-slate-500 dark:text-slate-400" href="#">Analisis Baru</a>
<a @click.prevent="goTo('insights')" className="block px-3 py-2 text-base font-medium text-slate-500 dark:text-slate-400" href="#">Insight</a>
<div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
<button @click="logout()" className="w-full px-3 py-2 text-left text-base font-medium text-rose-500">Keluar</button>
</div>
</div>
</template>
</div>
</div>
</nav>

<main className="pt-16 flex-grow flex flex-col">



<div className="flex-grow" x-show="page === 'landing'" x-transition:enter="transition ease-out duration-500" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 translate-y-4">

<section className="relative pt-32 pb-20 overflow-hidden px-4">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" x-show="isDark"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-block py-1 px-3 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-6 tracking-wide">EKSPLORASI KESADARAN DIRI</span>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]">
                        Temukan <span className="text-gradient bg-gradient-to-r from-indigo-500 to-cyan-500">Blueprint Energi</span> <br className="hidden sm:block"/> &amp; Takdir Hidupmu
                    </h1>
<p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-normal">
                        Kombinasi analisis Human Design dan Numerologi untuk membantu Anda memahami potensi sejati, cara mengambil keputusan yang tepat, dan pola hidup yang harmoni.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button @click="isLoggedIn ? goTo('input') : goTo('register')" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-lg shadow-indigo-500/10 dark:shadow-white/5">
                            Mulai Analisis Gratis
                        </button>
<button @click="goTo('insights')" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                            Pelajari Lebih Lanjut
                        </button>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 dark:bg-[#0d0d12] border-y border-slate-200 dark:border-white/[0.05]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 dark:text-white mb-4">Pilar Analisis Aura</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto">Sistem terintegrasi untuk memetakan kesadaran, potensi, dan alur waktu kehidupan Anda.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:dna-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-2 tracking-tight">Human Design</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Peta genetik mekanika energi Anda. Pahami strategi terbaik berinteraksi dengan dunia.</p>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sort-by-time-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-2 tracking-tight">Numerologi Nama</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Vibrasi tersembunyi di balik identitas Anda yang membentuk karakter dan impresi luar.</p>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:route-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-2 tracking-tight">Life Path Number</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Arah dan tujuan utama jiwa Anda di kehidupan ini berdasarkan tanggal kelahiran.</p>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 hover:-translate-y-1 transition-transform duration-300 group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-2 tracking-tight">Personal Year</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Siklus tema tahunan untuk mengetahui kapan harus bertindak, merenung, atau beristirahat.</p>
</div>
</div>
</div>
</section>

<section className="py-20 overflow-hidden" x-data="{ 
                activeTestimonial: 0, 
                testimonials: [
                    { text: 'Analisis Human Design dari AURA mengubah cara saya berbisnis. Saya berhenti memaksakan inisiatif dan mulai menunggu peluang yang tepat. Hasilnya luar biasa.', author: 'Rina S.', role: 'Entrepreneur, Projector 4/6' },
                    { text: 'Pemahaman tentang Personal Year membantu saya melewati masa transisi karir dengan lebih tenang. Rasional, logis, dan sangat aplikatif.', author: 'Andi W.', role: 'Software Engineer, Manifesting Generator' },
                    { text: 'Desain UI yang bersih dipadu dengan insight mendalam. Tidak terasa seperti membaca ramalan, melainkan panduan psikologis yang terstruktur.', author: 'Sarah M.', role: 'Creative Director' }
                ],
                next() { this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length },
                prev() { this.activeTestimonial = (this.activeTestimonial - 1 + this.testimonials.length) % this.testimonials.length }
            }">
<div className="max-w-4xl mx-auto px-4 text-center">
<iconify-icon className="text-slate-200 dark:text-white/5 mb-8" icon="solar:quote-right-linear" width="64"></iconify-icon>
<div className="relative min-h-[160px]">
<template :key="index" x-htmlFor="(testi, index) in testimonials">
<div className="absolute inset-0 flex flex-col items-center justify-center" x-show="activeTestimonial === index" x-transition.opacity.duration.500ms="">
<p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 mb-6 leading-relaxed" x-text="testi.text"></p>
<div className="text-sm">
<span className="font-medium text-slate-900 dark:text-white" x-text="testi.author"></span>
<span className="text-slate-400 mx-2">|</span>
<span className="text-slate-500 dark:text-slate-400" x-text="testi.role"></span>
</div>
</div>
</template>
</div>
<div className="flex items-center justify-center gap-4 mt-8">
<button @click="prev()" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<div className="flex gap-2">
<template :key="i" x-htmlFor="(t, i) in testimonials">
<button :className="activeTestimonial === i ? 'w-6 bg-indigo-500' : 'w-2 bg-slate-300 dark:bg-slate-700'" @click="activeTestimonial = i" className="h-2 rounded-full transition-all duration-300"></button>
</template>
</div>
<button @click="next()" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
</div>
</section>
</div>



<div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6" style={{display: 'none'}} x-show="page === 'login'" x-transition="">
<div className="w-full max-w-md">
<div className="bg-white dark:bg-[#141419] p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-white/[0.08] shadow-xl shadow-slate-200/20 dark:shadow-none relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full pointer-events-none"></div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Masuk ke Akun</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Lanjutkan perjalanan refleksi diri Anda.</p>
<form @submit.prevent="submitLogin()" className="space-y-5">
<div className="relative float-input">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="login-email" placeholder=" " required="" type="email"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="login-email">Email</label>
</div>
<div className="relative float-input">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="login-password" placeholder=" " required="" type="password"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="login-password">Password</label>
</div>
<div className="flex items-center justify-between mt-4">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="text-indigo-500 border-slate-300 dark:border-slate-600 focus:ring-indigo-500/50 rounded" type="checkbox"/>
<span className="text-xs text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Ingat saya</span>
</label>
<button @click="goTo('forgot')" className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline" type="button">Lupa Password?</button>
</div>
<button className="w-full py-3 mt-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="submit">
                            Masuk <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                        Belum punya akun? <button @click="goTo('register')" className="font-medium text-slate-900 dark:text-white hover:underline">Daftar sekarang</button>
</div>
</div>
</div>
</div>



<div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6" style={{display: 'none'}} x-show="page === 'register'" x-transition="">
<div className="w-full max-w-md" x-data="{ pwd: '', strength: 0 }">
<div className="bg-white dark:bg-[#141419] p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-white/[0.08] shadow-xl shadow-slate-200/20 dark:shadow-none relative overflow-hidden">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Buat Akun Baru</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Simpan riwayat analisis dan akses insight personal.</p>
<form @submit.prevent="submitRegister()" className="space-y-4">
<div className="relative float-input">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="reg-name" placeholder=" " required="" type="text"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="reg-name">Nama Lengkap</label>
</div>
<div className="relative float-input">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="reg-email" placeholder=" " required="" type="email"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="reg-email">Email</label>
</div>
<div className="relative float-input">
<input @input="strength = pwd.length &gt; 8 ? (pwd.match(/[A-Z]/) ? (pwd.match(/[0-9]/) ? 3 : 2) : 1) : (pwd.length &gt; 0 ? 1 : 0)" className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="reg-password" placeholder=" " required="" type="password" x-model="pwd"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="reg-password">Password</label>
</div>

<div className="flex gap-1 h-1 mt-1" x-show="pwd.length &gt; 0">
<div :className="strength &gt;= 1 ? 'bg-rose-500' : 'bg-slate-200 dark:bg-white/10'" className="h-full flex-1 rounded-full transition-colors"></div>
<div :className="strength &gt;= 2 ? 'bg-amber-500' : 'bg-slate-200 dark:bg-white/10'" className="h-full flex-1 rounded-full transition-colors"></div>
<div :className="strength &gt;= 3 ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-white/10'" className="h-full flex-1 rounded-full transition-colors"></div>
</div>
<div className="relative float-input pt-2">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="reg-confirm" placeholder=" " required="" type="password"/>
<label className="absolute left-4 top-5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="reg-confirm">Konfirmasi Password</label>
</div>
<button className="w-full py-3 mt-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors" type="submit">
                            Daftar
                        </button>
</form>
<div className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
                        Sudah punya akun? <button @click="goTo('login')" className="font-medium text-slate-900 dark:text-white hover:underline">Masuk</button>
</div>
</div>
</div>
</div>



<div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6" style={{display: 'none'}} x-show="page === 'forgot'" x-transition="">
<div className="w-full max-w-md">
<div className="bg-white dark:bg-[#141419] p-8 sm:p-10 rounded-2xl border border-slate-200 dark:border-white/[0.08] text-center">
<div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-6 text-slate-600 dark:text-slate-400">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Lupa Password?</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Masukkan email Anda untuk menerima tautan reset password.</p>
<form @submit.prevent="submitGeneric()" className="space-y-4 text-left">
<div className="relative float-input">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="forgot-email" placeholder=" " required="" type="email"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="forgot-email">Email</label>
</div>
<button className="w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors" type="submit">
                            Kirim Link Reset
                        </button>
</form>
<button @click="goTo('login')" className="mt-6 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon> Kembali ke Login
                    </button>
</div>
</div>
</div>



<div className="flex-grow bg-slate-50 dark:bg-[#0a0a0d] py-8" style={{display: 'none'}} x-show="page === 'dashboard'" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="opacity-100" x-transition:enter-start="opacity-0">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

<aside className="hidden lg:block lg:col-span-1">
<div className="sticky top-24 space-y-1">
<h3 className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Menu Utama</h3>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-slate-200/50 dark:bg-white/10 text-slate-900 dark:text-white text-sm font-medium transition-colors">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon> Dashboard
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon> Riwayat Analisis
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-medium transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="20"></iconify-icon> Insight Disimpan
                            </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 text-sm font-medium transition-colors mt-8">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon> Pengaturan
                            </button>
</div>
</aside>

<div className="lg:col-span-3 space-y-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Halo, John Doe</h1>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Lanjutkan perjalanan pemahaman diri Anda hari ini.</p>
</div>
<button @click="goTo('input')" className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition-colors shadow-sm flex items-center gap-2 w-fit">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Analisis Baru
                            </button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div @click="goTo('result')" className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 flex items-start justify-between group cursor-pointer hover:border-indigo-500/30 transition-colors">
<div>
<div className="text-xs font-medium text-slate-400 mb-1 flex items-center gap-1"><iconify-icon icon="solar:dna-linear"></iconify-icon> Human Design</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Projector 4/6</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Strategi: Menunggu Undangan</p>
</div>
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>

<div @click="goTo('result')" className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 flex items-start justify-between group cursor-pointer hover:border-cyan-500/30 transition-colors">
<div>
<div className="text-xs font-medium text-slate-400 mb-1 flex items-center gap-1"><iconify-icon icon="solar:route-linear"></iconify-icon> Life Path</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Angka 7</h3>
<p className="text-sm text-slate-500 dark:text-slate-400">Sang Pencari Kebenaran</p>
</div>
<iconify-icon className="text-slate-300 dark:text-slate-600 group-hover:text-cyan-500 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div>
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-4">Rekomendasi Berdasarkan Profil Anda</h3>
<div className="space-y-3">
<div @click="goTo('insights')" className="p-4 rounded-xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 flex gap-4 items-center hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
<div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 flex-shrink-0 flex items-center justify-center text-indigo-500">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 line-clamp-1">Memahami Mekanika Projector dalam Bekerja</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Human Design • Waktu baca 4 menit</p>
</div>
</div>
<div @click="goTo('insights')" className="p-4 rounded-xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 flex gap-4 items-center hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer transition-colors">
<div className="w-12 h-12 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 flex-shrink-0 flex items-center justify-center text-cyan-500">
<iconify-icon icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 line-clamp-1">Kekuatan Analitis Life Path 7</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Numerologi • Waktu baca 3 menit</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>



<div className="flex-grow py-12 px-4" style={{display: 'none'}} x-data="{ activeTab: 'hd' }" x-show="page === 'input'" x-transition="">
<div className="max-w-2xl mx-auto">
<div className="text-center mb-10">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-3">Mulai Analisis</h1>
<p className="text-sm text-slate-500 dark:text-slate-400">Pilih sistem yang ingin Anda eksplorasi dan masukkan data kelahiran.</p>
</div>

<div className="flex p-1 mb-8 bg-slate-200/50 dark:bg-[#1a1a24] rounded-xl">
<button :className="activeTab === 'hd' ? 'bg-white dark:bg-[#2a2a35] text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'" @click="activeTab = 'hd'" className="flex-1 py-2 text-sm font-medium rounded-lg transition-all">Human Design</button>
<button :className="activeTab === 'num' ? 'bg-white dark:bg-[#2a2a35] text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'" @click="activeTab = 'num'" className="flex-1 py-2 text-sm font-medium rounded-lg transition-all">Numerologi</button>
</div>

<div className="bg-white dark:bg-[#141419] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/[0.08] shadow-sm">
<form @submit.prevent="submitAnalysis()" className="space-y-5">
<div className="relative float-input">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="input-name" placeholder=" " required="" type="text"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="input-name">Nama Lengkap (Sesuai Akta)</label>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="relative float-input">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer [color-scheme:light] dark:[color-scheme:dark]" id="input-date" placeholder=" " required="" type="date"/>
<label className="absolute left-4 top-3.5 text-xs text-slate-400 transition-all pointer-events-none -translate-y-2" htmlFor="input-date">Tanggal Lahir</label>
</div>

<div className="relative float-input" x-show="activeTab === 'hd'">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer [color-scheme:light] dark:[color-scheme:dark]" id="input-time" placeholder=" " type="time"/>
<label className="absolute left-4 top-3.5 text-xs text-slate-400 transition-all pointer-events-none -translate-y-2" htmlFor="input-time">Waktu Lahir (Opsional)</label>
</div>
</div>
<div className="relative float-input" x-show="activeTab === 'hd'">
<input className="w-full px-4 pt-5 pb-2 rounded-xl bg-slate-50 dark:bg-[#0a0a0d] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors peer" id="input-city" placeholder=" " type="text"/>
<label className="absolute left-4 top-3.5 text-sm text-slate-400 transition-all pointer-events-none peer-focus:text-xs peer-focus:-translate-y-2" htmlFor="input-city">Kota Kelahiran</label>
</div>
<button className="w-full py-3.5 mt-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:stars-linear" width="18"></iconify-icon> Generate Analisis
                        </button>
</form>
</div>
</div>
</div>



<div className="flex-grow py-8 bg-slate-50 dark:bg-[#0a0a0d]" style={{display: 'none'}} x-show="page === 'result'" x-transition="">
<div className="max-w-4xl mx-auto px-4 sm:px-6">

<div className="flex items-center justify-between mb-8">
<button @click="goTo('dashboard')" className="text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon> Kembali
                    </button>
<button className="px-4 py-2 rounded-lg bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:printer-linear"></iconify-icon> Simpan PDF
                    </button>
</div>

<div className="bg-white dark:bg-[#141419] p-8 rounded-3xl border border-slate-200 dark:border-white/[0.08] mb-8 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-500/5 rounded-full blur-[40px] pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">

<div className="w-32 h-32 rounded-full border-4 border-indigo-100 dark:border-indigo-500/20 flex-shrink-0 flex items-center justify-center relative bg-white dark:bg-[#0a0a0d]">
<div className="absolute inset-2 rounded-full border border-dashed border-indigo-200 dark:border-indigo-500/40"></div>
<iconify-icon className="text-indigo-500" icon="solar:dna-bold-duotone" width="48"></iconify-icon>
</div>
<div>
<span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-3 inline-block">Human Design Blueprint</span>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white mb-2">Projector 4/6</h1>
<p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-lg">Sebagai Projector, energi aura Anda berfokus dan menyerap. Desain Anda bukan untuk memulai aksi secara membabi buta, melainkan membimbing energi orang lain setelah diundang.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10">
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:bolt-circle-linear"></iconify-icon> Kekuatan Alami
                        </h3>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Kemampuan observasi mendalam terhadap sistem dan efisiensi.</span>
</li>
<li className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Membaca potensi tersembunyi dalam diri orang lain.</span>
</li>
<li className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Menjadi penasehat atau pemandu yang sangat presisi.</span>
</li>
</ul>
</div>

<div className="p-6 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10">
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon> Tantangan (Not-Self)
                        </h3>
<ul className="space-y-3">
<li className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>Rasa pahit (bitterness) jika tidak diakui atau ditolak.</span>
</li>
<li className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>Kelelahan fisik karena mencoba mengimbangi energi Generator.</span>
</li>
<li className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
<iconify-icon className="text-rose-500 mt-0.5 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span>Memberi saran sebelum diminta secara eksplisit.</span>
</li>
</ul>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 mb-8">
<h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white mb-6">Distribusi Pusat Energi</h3>
<div className="space-y-5">

<div>
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-slate-700 dark:text-slate-300">Head (Inspirasi)</span>
<span className="text-slate-500">Terbuka (Open)</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
<div className="h-full bg-slate-300 dark:bg-slate-600 w-[20%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-slate-700 dark:text-slate-300">Ajna (Analisis)</span>
<span className="text-indigo-500 font-medium">Terdefinisi (Defined)</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
<div className="h-full bg-indigo-500 w-[100%] rounded-full"></div>
</div>
</div>

<div>
<div className="flex justify-between text-xs mb-1">
<span className="font-medium text-slate-700 dark:text-slate-300">Sacral (Tenaga Hidup)</span>
<span className="text-slate-500">Terbuka (Open)</span>
</div>
<div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/5 overflow-hidden">
<div className="h-full bg-slate-300 dark:bg-slate-600 w-[10%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="space-y-4 mb-12">

<div className="bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden" x-data="{ open: false }">
<button @click="open = !open" className="w-full px-6 py-4 flex items-center justify-between focus:outline-none bg-slate-50/50 dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<span className="font-medium text-slate-900 dark:text-white text-sm">Strategi: Menunggu Undangan</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div x-collapse="" x-show="open">
<div className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5">
                                Undangan adalah kuncinya. Bukan berarti Anda pasif, tetapi Anda perlu diakui sebelum membagikan energi atau wawasan Anda. Dalam cinta, karir, dan tempat tinggal, biarkan orang lain yang datang dan 'mengundang' keahlian Anda. Ini menghindari rasa pahit penolakan.
                            </div>
</div>
</div>

<div className="bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden" x-data="{ open: false }">
<button @click="open = !open" className="w-full px-6 py-4 flex items-center justify-between focus:outline-none bg-slate-50/50 dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
<span className="font-medium text-slate-900 dark:text-white text-sm">Otoritas Internal: Splenic</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div x-collapse="" x-show="open">
<div className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5">
                                Otoritas Splenic bekerja di saat ini (in the now) melalui intuisi kilat atau insting bertahan hidup. Suaranya pelan dan hanya berbicara sekali. Jangan overthinking keputusan yang sudah terasa benar di detik pertama.
                            </div>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/50 to-cyan-50/50 dark:from-indigo-500/10 dark:to-cyan-500/5 border border-indigo-100 dark:border-indigo-500/20 relative overflow-hidden">
<iconify-icon className="absolute -bottom-4 -right-4 text-indigo-500/10 dark:text-indigo-400/10" icon="solar:lightbulb-bolt-linear" width="120"></iconify-icon>
<h4 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 relative z-10">Refleksi Harian</h4>
<p className="text-slate-800 dark:text-slate-200 text-sm relative z-10 max-w-lg leading-relaxed">Luangkan waktu sendiri setidaknya 2 jam hari ini untuk membersihkan aura Anda dari energi orang lain. Ingat, produktivitas Anda dinilai dari kualitas wawasan, bukan kuantitas jam kerja fisik.</p>
</div>
</div>
</div>



<div className="flex-grow" style={{display: 'none'}} x-show="page === 'insights'" x-transition="">
<section className="relative pt-20 pb-12 overflow-hidden">
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-4">
                        Insight &amp; Refleksi
                    </h1>
<p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-normal">
                        Artikel mendalam untuk memahami aliran energi dan potensi sejati dalam dirimu.
                    </p>
<div className="relative max-w-xl mx-auto">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white dark:bg-[#141419] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm transition-colors" placeholder="Cari berdasarkan judul, kategori, atau tag..." type="text" x-model.debounce.300ms="searchQuery"/>
<button @click="searchQuery = ''" className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" x-show="searchQuery"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></button>
</div>
</div>
</section>

<section className="border-b border-slate-200 dark:border-white/[0.05] bg-slate-50/50 dark:bg-[#0a0a0d]/50 sticky top-16 z-30 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 sm:pb-0">
<button :className="!selectedCategory ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-white dark:bg-[#141419] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'" @click="selectedCategory = null; resetPagination()" className="whitespace-nowrap px-4 py-1.5 rounded-full border text-xs font-medium transition-colors">Semua Kategori</button>
<template :key="cat" x-htmlFor="cat in categories">
<button :className="selectedCategory === cat ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'bg-white dark:bg-[#141419] border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400'" @click="selectedCategory = cat; resetPagination()" className="whitespace-nowrap px-4 py-1.5 rounded-full border text-xs font-medium transition-colors" x-text="cat"></button>
</template>
</div>

<div className="mt-4 flex flex-wrap gap-2 items-center" x-data="{ expanded: false }">
<span className="text-xs font-medium text-slate-400 mr-2"><iconify-icon className="inline align-middle" icon="solar:tag-linear"></iconify-icon> Filter:</span>
<template :key="tag" x-htmlFor="(tag, index) in availableTags">
<button :className="selectedTags.includes(tag) ? 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30' : 'bg-transparent border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'" @click="toggleTag(tag); resetPagination()" className="px-3 py-1 rounded-full border text-xs font-medium transition-colors flex items-center gap-1" x-show="expanded || index &lt; 5">
<span x-text="tag"></span>
<iconify-icon icon="solar:close-square-linear" width="12" x-show="selectedTags.includes(tag)"></iconify-icon>
</button>
</template>
<button @click="expanded = !expanded" className="text-xs text-indigo-500 dark:text-indigo-400 font-medium ml-1" x-show="availableTags.length &gt; 5" x-text="expanded ? 'Tutup' : 'Lihat Semua'"></button>
</div>
</div>
</section>

<section className="py-12 bg-white dark:bg-[#0a0a0d] min-h-[50vh]" id="article-grid">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center py-20" style={{display: 'none'}} x-show="paginatedArticles.length === 0">
<div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-4 text-slate-400"><iconify-icon icon="solar:ghost-linear" width="32"></iconify-icon></div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2 tracking-tight">Tidak ada artikel ditemukan</h3>
<button @click="resetFilters()" className="mt-2 text-sm text-indigo-500 hover:underline">Reset Filter</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" x-show="paginatedArticles.length &gt; 0">
<template :key="article.id" x-htmlFor="article in paginatedArticles">
<article @click="openArticle(article)" className="group flex flex-col bg-slate-50 dark:bg-[#141419] rounded-2xl border border-slate-200 dark:border-white/[0.08] overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300 relative">
<div className="relative w-full aspect-video bg-slate-200 dark:bg-[#1a1a24] overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 group-hover:scale-105 transition-transform duration-500"></div>
<iconify-icon className="text-slate-400 dark:text-slate-600 z-10" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
<div className="absolute top-4 left-4 z-20">
<span className="px-2.5 py-1 rounded-md bg-white/90 dark:bg-black/60 backdrop-blur-md text-[10px] font-medium text-slate-900 dark:text-white uppercase tracking-wider border border-white/20" x-text="article.category"></span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
<span x-text="article.date"></span><span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> <span x-text="article.readTime"></span></span>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2 tracking-tight leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2" x-text="article.title"></h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 flex-grow" x-text="article.summary"></p>
<div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
<div className="flex gap-1 overflow-hidden">
<template :key="tag" x-htmlFor="tag in article.tags.slice(0, 2)">
<span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/5 px-2 py-0.5 rounded" x-text="'#' + tag"></span>
</template>
</div>
<span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 flex items-center gap-1">Baca <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</article>
</template>
</div>

<div className="mt-16 flex justify-center" x-show="totalPages &gt; 1">
<nav className="inline-flex items-center gap-1 bg-slate-50 dark:bg-[#141419] p-1.5 rounded-full border border-slate-200 dark:border-white/10">
<button :className="currentPageNum === 1 ? 'opacity-50' : 'hover:bg-slate-200 dark:hover:bg-white/10'" :disabled="currentPageNum === 1" @click="prevPage()" className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"><iconify-icon icon="solar:alt-arrow-left-linear" width="20"></iconify-icon></button>
<div className="flex items-center px-2 space-x-1">
<template :key="page" x-htmlFor="page in totalPages">
<button :className="currentPageNum === page ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10'" @click="goToPage(page)" className="w-9 h-9 text-sm rounded-full flex items-center justify-center transition-all font-medium" x-text="page"></button>
</template>
</div>
<button :className="currentPageNum === totalPages ? 'opacity-50' : 'hover:bg-slate-200 dark:hover:bg-white/10'" :disabled="currentPageNum === totalPages" @click="nextPage()" className="w-9 h-9 flex items-center justify-center rounded-full transition-colors"><iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon></button>
</nav>
</div>
</div>
</section>
</div>



<div className="flex-grow py-8 bg-white dark:bg-[#0a0a0d]" style={{display: 'none'}} x-show="page === 'detail'" x-transition="">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex text-xs text-slate-500 dark:text-slate-400 mb-8">
<ol className="inline-flex items-center space-x-2">
<li><a @click.prevent="goTo('landing')" className="hover:text-slate-900 dark:hover:text-white" href="#">Beranda</a></li>
<li><iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></li>
<li><a @click.prevent="goTo('insights')" className="hover:text-slate-900 dark:hover:text-white" href="#">Insight</a></li>
<li><iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon></li>
<li className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[200px]" x-text="activeArticle?.title"></li>
</ol>
</nav>
<div className="flex flex-col lg:flex-row gap-12">
<article className="lg:w-2/3 max-w-[800px]">
<header className="mb-10">
<span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-indigo-600 dark:text-indigo-400 mb-4 inline-block" x-text="activeArticle?.category"></span>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 dark:text-white mb-6 leading-[1.1]" x-text="activeArticle?.title"></h1>
<div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 py-4 border-y border-slate-200 dark:border-white/10">
<span className="font-medium text-slate-900 dark:text-slate-200" x-text="activeArticle?.author"></span>
<span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
<span x-text="activeArticle?.date"></span>
<span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
<span x-text="activeArticle?.readTime"></span>
</div>
</header>
<div className="w-full aspect-[21/9] rounded-2xl bg-slate-100 dark:bg-[#1a1a24] mb-12 flex items-center justify-center border border-slate-200 dark:border-white/5">
<iconify-icon className="text-slate-300 dark:text-slate-700" icon="solar:gallery-wide-linear" width="64"></iconify-icon>
</div>
<div className="space-y-6 text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed font-normal">
<p className="text-xl text-slate-800 dark:text-slate-200 font-medium leading-snug mb-8" x-text="activeArticle?.summary"></p>
<p>Pemahaman mengenai energi bawaan bukanlah tentang membatasi diri, melainkan optimasi. Layaknya perangkat keras yang membutuhkan sistem operasi yang tepat agar berjalan mulus.</p>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 dark:text-white mt-10 mb-4">Mekanika Menunggu Undangan</h2>
<p>Banyak diajarkan untuk proaktif. Namun memaksakan tindakan tanpa adanya aliran energi yang mendukung seringkali berujung pada kelelahan.</p>
<blockquote className="my-10 pl-6 border-l-4 border-slate-900 dark:border-white italic text-slate-800 dark:text-slate-200 text-xl font-light tracking-tight">
                                "Ketika kamu berhenti berusaha menjadi orang lain dan mulai bersandar pada desain aslimu, resistensi hidup perlahan memudar."
                            </blockquote>
<div className="my-10 p-6 md:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10">
<h4 className="text-sm font-medium text-slate-900 dark:text-white uppercase tracking-widest mb-2">Refleksi Praktis</h4>
<p className="text-slate-600 dark:text-slate-400 text-base">Perhatikan bagaimana energi di sekitarmu berubah saat kamu tidak memaksakan inisiatif.</p>
</div>
</div>
</article>
<aside className="lg:w-1/3 space-y-8">
<div className="p-6 rounded-2xl bg-slate-900 dark:bg-[#141419] border border-slate-800 dark:border-white/10 text-center relative overflow-hidden">
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Ketahui Blueprint Kamu</h3>
<p className="text-sm text-slate-400 mb-6 font-light">Dapatkan analisa Human Design dan Numerologimu.</p>
<button @click="isLoggedIn ? goTo('input') : goTo('register')" className="w-full py-3 rounded-xl bg-white text-slate-900 text-sm font-medium hover:bg-slate-100 transition-colors">
                                Mulai Analisis Gratis
                            </button>
</div>
<div className="bg-slate-50 dark:bg-[#141419] rounded-2xl border border-slate-200 dark:border-white/[0.08] p-6">
<h3 className="text-base font-medium text-slate-900 dark:text-white mb-4 tracking-tight">Artikel Terkait</h3>
<div className="space-y-4">
<template :key="item.id" x-htmlFor="item in articles.slice(0, 3)">
<a @click.prevent="openArticle(item)" className="group flex gap-4 items-start" href="#">
<div className="w-16 h-16 rounded-lg bg-slate-200 dark:bg-[#1a1a24] flex-shrink-0"></div>
<div>
<h4 className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug group-hover:text-indigo-500 line-clamp-2 mb-1" x-text="item.title"></h4>
</div>
</a>
</template>
</div>
</div>
</aside>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a0d] pt-12 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xl font-semibold tracking-tighter bg-gradient-to-r from-indigo-500 to-cyan-500 text-gradient">AURA</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
<a @click.prevent="goTo('insights')" className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Insight</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Privasi</a>
<a className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Ketentuan</a>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500 font-medium">
                © 2024 Aura. Refleksi Kesadaran Diri.
            </div>
</div>
</footer>



    </>
  );
}
