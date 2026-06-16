import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
turquoise: '#28C2C2',
cream: '#F5EAD6',
dark: '#1A1A1A',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Initial Data
        const defaultContent = {
            hero: {
                title: "The Purest Pour Over Experience.",
                subtitle: "Unlock the rich, full-bodied potential of your coffee beans with our premium stainless steel dual-layer dripper.",
                cta: "Buy on Amazon"
            },
            features: [
                { icon: "filter", title: "Dual-layer Mesh", desc: "Ultra-fine inner mesh plus laser-cut outer layer captures grounds while allowing essential oils to pass." },
                { icon: "coffee", title: "Universal Fit", desc: "Wide cone base fits almost any mug, cup, or carafe. Perfect for home, office, or camping." },
                { icon: "droplets", title: "Simple Brewing", desc: "Just add grounds, pour hot water, and brew in minutes. Beginner-friendly and pro-approved." },
                { icon: "recycle", title: "Eco-Friendly", desc: "Reusable 18/8 stainless steel filter eliminates paper waste. Rinses clean instantly." }
            ],
            philosophy: {
                title: "Journey to Explore New Tastes",
                body: "At Docalo, each cup is an adventure. Our pour-over dripper reveals unique nuances in every brew—from bright, floral single-origin coffees to bold dark roasts. Discover the full spectrum of coffee’s flavor landscape."
            },
            characteristics: [
                { 
                    title: "Premium Design", 
                    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
                    points: ["Tapered flow regulation", "Even extraction", "Barista-quality results"] 
                },
                { 
                    title: "Full-Bodied Flavor", 
                    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
                    points: ["Dual-layer metal mesh", "Rich natural oils", "Zero paper waste"] 
                },
                { 
                    title: "Single Cup Perfect", 
                    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
                    points: ["Fits most mugs", "1–2 cup capacity", "Travel ready"] 
                }
            ],
            specs: {
                Material: "18/8 Stainless Steel",
                Mesh: "Precision-etched Micro-mesh",
                Capacity: "1–2 Cups",
                Cleaning: "Rinse or Dishwasher Safe",
                Durability: "Lifetime Use, No Clogging"
            },
            testimonials: [
                { name: "Sarah Jenkins", quote: "The flavor clarity is unmatched. No paper taste, just pure coffee oils.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" },
                { name: "Mark D.", quote: "I take this camping everywhere. Indestructible and easy to clean.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" },
                { name: "Elena R.", quote: "Beautiful design that fits perfectly on my favorite ceramic mug.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80" }
            ],
            cta_text: "Eco-friendly, reusable, premium stainless steel coffee dripper."
        };

        function appData() {
            return {
                view: 'home', // home, login, cms
                isAdmin: false,
                auth: {
                    username: '',
                    password: '',
                    error: ''
                },
                content: defaultContent,

                initApp() {
                    // Load icons
                    lucide.createIcons();
                    
                    // Load from local storage if exists
                    const saved = localStorage.getItem('docalo_content');
                    if (saved) {
                        this.content = JSON.parse(saved);
                    }

                    // Check login session
                    if (localStorage.getItem('docalo_admin') === 'true') {
                        this.isAdmin = true;
                    }
                    
                    // Re-render icons when view changes
                    this.$watch('view', () => {
                        setTimeout(() => lucide.createIcons(), 50);
                    });
                },

                login() {
                    if (this.auth.username === 'admin' && this.auth.password === 'admin123') {
                        this.isAdmin = true;
                        localStorage.setItem('docalo_admin', 'true');
                        this.view = 'cms';
                        this.auth.error = '';
                        this.auth.username = '';
                        this.auth.password = '';
                    } else {
                        this.auth.error = 'Invalid credentials. Try admin / admin123';
                    }
                },

                logout() {
                    this.isAdmin = false;
                    localStorage.removeItem('docalo_admin');
                    this.view = 'home';
                },

                saveContent() {
                    localStorage.setItem('docalo_content', JSON.stringify(this.content));
                    alert('Changes saved successfully!');
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div @click="view = 'home'" className="flex items-center gap-2 cursor-pointer">
<i className="text-turquoise w-6 h-6" data-lucide="coffee"></i>
<span className="text-xl font-medium tracking-tight text-slate-900">Docalo</span>
</div>
<div className="flex items-center gap-6">
<template x-if="!isAdmin">
<button @click="view = 'login'" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                        Admin Login
                    </button>
</template>
<template x-if="isAdmin">
<div className="flex gap-4">
<button @click="view = 'cms'" className="text-sm font-medium text-turquoise hover:text-teal-600 transition-colors">
                            Dashboard
                        </button>
<button @click="logout()" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
                            Logout
                        </button>
<button @click="view = 'home'" className="text-sm font-medium text-slate-900 border border-slate-300 px-3 py-1 rounded-full hover:bg-white transition-colors">
                            View Site
                        </button>
</div>
</template>
<a className="hidden md:block bg-slate-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20" href="#">
                    Buy Now
                </a>
</div>
</div>
</nav>

<main className="pt-16 animate-fade-in" x-show="view === 'home'">

<section className="relative overflow-hidden min-h-[85vh] flex items-center">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
<div className="order-2 lg:order-1 space-y-8">
<span className="inline-block px-3 py-1 bg-turquoise/10 text-turquoise text-sm font-medium rounded-full tracking-wide">
                        Premium Brewing
                    </span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 leading-[1.1]" x-text="content.hero.title"></h1>
<p className="text-xl text-slate-600 max-w-lg leading-relaxed" x-text="content.hero.subtitle"></p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center gap-2 bg-turquoise text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal-500 transition-all shadow-xl shadow-turquoise/20 transform hover:-translate-y-1" href="#">
<span x-text="content.hero.cta"></span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="pt-8 flex items-center gap-6 text-slate-400">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="shield-check"></i>
<span className="text-sm">Lifetime Warranty</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="truck"></i>
<span className="text-sm">Free Shipping</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-turquoise/20 to-transparent rounded-full blur-3xl opacity-50"></div>
<img alt="Pour Over Coffee" className="relative z-10 w-full h-auto rounded-3xl shadow-2xl shadow-slate-900/10 transform hover:scale-[1.02] transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<template :key="feature.title" x-htmlFor="feature in content.features">
<div className="p-8 rounded-2xl bg-cream/30 border border-stone-100 hover:border-turquoise/30 transition-colors group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-turquoise group-hover:scale-110 transition-transform">
<i :data-lucide="feature.icon" className="w-6 h-6"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight" x-text="feature.title"></h3>
<p className="text-slate-500 text-base leading-relaxed" x-text="feature.desc"></p>
</div>
</template>
</div>
</div>
</section>

<section className="py-32 bg-cream relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<i className="w-10 h-10 text-turquoise mx-auto mb-8 opacity-80" data-lucide="feather"></i>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-8" x-text="content.philosophy.title"></h2>
<p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed italic" x-text="content.philosophy.body"></p>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12">
<template :key="char.title" x-htmlFor="char in content.characteristics">
<div className="space-y-4">
<div className="h-64 bg-stone-100 rounded-2xl mb-6 overflow-hidden relative group">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"/>
<div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight" x-text="char.title"></h3>
<ul className="space-y-2">
<template x-htmlFor="point in char.points">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-turquoise mt-1 shrink-0" data-lucide="check"></i>
<span x-text="point"></span>
</li>
</template>
</ul>
</div>
</template>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-cream">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Technical Specs</h2>
<p className="text-slate-400">Engineered for precision and durability. Every detail matters in the pursuit of the perfect cup.</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
<template x-htmlFor="(value, key) in content.specs">
<div className="border-b border-slate-800 pb-4">
<dt className="text-sm text-turquoise uppercase tracking-wider font-medium mb-1" x-text="key"></dt>
<dd className="text-lg text-slate-200" x-text="value"></dd>
</div>
</template>
</div>
</div>
</div>
</section>

<section className="py-24 bg-cream">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-medium text-slate-900 tracking-tight mb-16">Loved by Coffee Enthusiasts</h2>
<div className="grid md:grid-cols-3 gap-8">
<template x-htmlFor="review in content.testimonials">
<div className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 mb-8 text-lg leading-relaxed">"<span x-text="review.quote"></span>"</p>
<div className="flex items-center gap-4">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="w-12 h-12 rounded-full object-cover bg-slate-200"/>
<div>
<div className="font-medium text-slate-900" x-text="review.name"></div>
<div className="text-sm text-slate-400">Verified Buyer</div>
</div>
</div>
</div>
</template>
</div>
</div>
</section>

<section className="py-32 bg-white text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">Brew Better Today.</h2>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto" x-text="content.cta_text"></p>
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20" href="#">
<span x-text="content.hero.cta"></span>
<i className="w-5 h-5" data-lucide="external-link"></i>
</a>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<i className="text-turquoise w-6 h-6" data-lucide="coffee"></i>
<span className="text-xl font-medium tracking-tight text-slate-900">Docalo</span>
</div>
<div className="flex gap-8 text-slate-500 text-base">
<a className="hover:text-turquoise transition-colors" href="#">Our Story</a>
<a className="hover:text-turquoise transition-colors" href="#">Brew Guide</a>
<a className="hover:text-turquoise transition-colors" href="#">Support</a>
</div>
<div className="flex gap-6 text-slate-400">
<a className="hover:text-turquoise transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-turquoise transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-turquoise transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div className="text-center text-slate-300 text-sm mt-12">
                © 2023 Docalo Coffee Co. All rights reserved.
            </div>
</footer>
</main>

<section className="min-h-screen flex items-center justify-center bg-cream px-6" x-show="view === 'login'">
<div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 animate-fade-in-up">
<div className="text-center mb-8">
<i className="w-10 h-10 text-turquoise mx-auto mb-4" data-lucide="lock"></i>
<h2 className="text-2xl font-medium text-slate-900">Admin Access</h2>
<p className="text-slate-500 text-base mt-2">Enter credentials to edit site content.</p>
</div>
<form @submit.prevent="login">
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all bg-stone-50" type="text" x-model="auth.username"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all bg-stone-50" type="password" x-model="auth.password"/>
</div>
<div className="text-red-500 text-sm text-center font-medium" x-show="auth.error" x-text="auth.error"></div>
<button className="w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg" type="submit">
                        Login to CMS
                    </button>
<div className="flex items-center justify-between pt-2">
<button @click="view = 'home'" className="text-slate-400 text-sm hover:text-slate-600 transition-colors" type="button">
                            Back to Home
                        </button>
<button className="text-turquoise text-sm font-medium hover:text-teal-600 transition-colors" type="button">
                            Sign up account?
                        </button>
</div>
</div>
</form>
</div>
</section>

<section className="min-h-screen bg-slate-50 flex" x-show="view === 'cms'">

<aside className="w-64 bg-white border-r border-slate-200 fixed h-full overflow-y-auto z-10 hidden md:block">
<div className="p-6 border-b border-slate-100">
<div className="flex items-center gap-2">
<i className="text-turquoise w-5 h-5" data-lucide="layout-dashboard"></i>
<span className="font-medium text-slate-900">Docalo CMS</span>
</div>
</div>
<nav className="p-4 space-y-1">
<template x-htmlFor="section in ['Hero', 'Features', 'Philosophy', 'Characteristics', 'Specs', 'Testimonials']">
<a className="block px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-turquoise transition-colors text-sm font-medium" href="#" x-text="section"></a>
</template>
</nav>
<div className="p-4 border-t border-slate-100 absolute bottom-0 w-full">
<button @click="logout()" className="flex items-center gap-2 text-red-500 text-sm font-medium hover:bg-red-50 w-full p-3 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="log-out"></i> Logout
                </button>
</div>
</aside>

<div className="flex-1 md:ml-64 p-8 overflow-y-auto h-screen">
<header className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-medium text-slate-900 tracking-tight">Edit Content</h1>
<p className="text-slate-500 text-sm">Real-time updates are saved locally.</p>
</div>
<div className="flex gap-3">
<button @click="view = 'home'" className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-50">Preview Site</button>
<button @click="saveContent()" className="px-4 py-2 bg-turquoise text-white rounded-lg text-sm font-medium hover:bg-teal-600 shadow-lg shadow-turquoise/20 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="save"></i> Save Changes
                    </button>
</div>
</header>
<div className="space-y-8 max-w-4xl">

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
<h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center gap-2"><i className="w-4 h-4 text-slate-400" data-lucide="monitor"></i> Hero Section</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium uppercase text-slate-400 mb-1">Headline</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-turquoise outline-none" type="text" x-model="content.hero.title"/>
</div>
<div>
<label className="block text-xs font-medium uppercase text-slate-400 mb-1">Subheadline</label>
<textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-turquoise outline-none h-24" x-model="content.hero.subtitle"></textarea>
</div>
<div>
<label className="block text-xs font-medium uppercase text-slate-400 mb-1">CTA Text</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-turquoise outline-none" type="text" x-model="content.hero.cta"/>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
<h3 className="text-lg font-medium text-slate-900 mb-4">Philosophy / Story</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium uppercase text-slate-400 mb-1">Title</label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-turquoise outline-none" type="text" x-model="content.philosophy.title"/>
</div>
<div>
<label className="block text-xs font-medium uppercase text-slate-400 mb-1">Body Text</label>
<textarea className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-turquoise outline-none h-32" x-model="content.philosophy.body"></textarea>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
<h3 className="text-lg font-medium text-slate-900 mb-4">Product Features</h3>
<div className="grid md:grid-cols-2 gap-6">
<template :key="index" x-htmlFor="(feature, index) in content.features">
<div className="p-4 bg-stone-50 rounded-lg border border-stone-100">
<div className="text-xs font-bold text-turquoise mb-2">Feature <span x-text="index + 1"></span></div>
<div className="space-y-2">
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-turquoise outline-none" type="text" x-model="feature.title"/>
<textarea className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-turquoise outline-none h-20" x-model="feature.desc"></textarea>
</div>
</div>
</template>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
<h3 className="text-lg font-medium text-slate-900 mb-4">Technical Specifications</h3>
<div className="grid md:grid-cols-2 gap-4">
<template x-htmlFor="(value, key) in content.specs">
<div>
<label className="block text-xs font-medium uppercase text-slate-400 mb-1" x-text="key"></label>
<input className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:border-turquoise outline-none" type="text" x-model="content.specs[key]"/>
</div>
</template>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
