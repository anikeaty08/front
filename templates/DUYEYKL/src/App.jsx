import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    document.getElementById('menu-btn').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="fixed top-1/3 left-0 z-40 hidden lg:flex flex-col space-y-1">
<a className="flex h-12 w-12 items-center justify-center bg-gray-900 hover:bg-green-600 transition-all duration-300 text-white group" href="#" style={{borderTopRightRadius: '6px'}}>
<svg className="lucide lucide-facebook h-5 w-5 group-hover:scale-110 transition-transform" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="flex h-12 w-12 items-center justify-center bg-gray-900 hover:bg-green-600 transition-all duration-300 text-white group" href="#">
<svg className="lucide lucide-twitter h-5 w-5 group-hover:scale-110 transition-transform" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex h-12 w-12 items-center justify-center bg-gray-900 hover:bg-green-600 transition-all duration-300 text-white group" href="#" style={{borderBottomRightRadius: '6px'}}>
<svg className="lucide lucide-instagram h-5 w-5 group-hover:scale-110 transition-transform" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</aside>

<header className="bg-white/95 backdrop-blur-md border-b border-gray-200/20 sticky top-0 z-30 fade-in">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
<a className="text-xl font-bold tracking-tighter text-gray-900" href="#">lunia<span className="align-super text-xs font-light text-green-600">™</span></a>
<nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
<a className="hover:text-green-600 transition-colors duration-200 relative group" href="#">
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
</a>
<a className="hover:text-green-600 transition-colors duration-200 relative group" href="#">
                Innovation Lab
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
</a>
<a className="hover:text-green-600 transition-colors duration-200 relative group" href="#">
                Sustainability
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
</a>
<a className="hover:text-green-600 transition-colors duration-200 relative group" href="#">
                Science
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
</a>
<a className="hover:text-green-600 transition-colors duration-200 relative group" href="#">
                Community
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-200 group-hover:w-full"></span>
</a>
</nav>
<div className="flex items-center space-x-3">
<button className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors" id="menu-btn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="hidden md:flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors group">
<svg className="lucide lucide-search h-5 w-5 group-hover:scale-110 transition-transform" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hidden md:flex items-center justify-center h-10 w-10 rounded-lg hover:bg-gray-100 transition-colors group relative">
<svg className="lucide lucide-shopping-bag h-5 w-5 group-hover:scale-110 transition-transform" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">3</span>
</button>
</div>
</div>

<div className="md:hidden bg-white border-t border-gray-100 hidden" id="mobile-menu">
<nav className="px-4 py-6 flex flex-col space-y-4 text-sm font-medium">
<a className="hover:text-green-600 transition-colors py-2" href="#">Products</a>
<a className="hover:text-green-600 transition-colors py-2" href="#">Innovation Lab</a>
<a className="hover:text-green-600 transition-colors py-2" href="#">Sustainability</a>
<a className="hover:text-green-600 transition-colors py-2" href="#">Science</a>
<a className="hover:text-green-600 transition-colors py-2" href="#">Community</a>
</nav>
</div>
</header>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77bd7788-e487-4f4b-85a6-ea90f9910cba_3840w.jpg)] bg-cover">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-20 sm:pb-24">

<div className="flex flex-col justify-center space-y-6">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900 slide-up">lunia</h1>
<div className="slide-up stagger-1">
<p className="text-lg sm:text-xl text-green-700 font-medium mb-2">Advanced Natural Beauty</p>
<p className="max-w-lg text-gray-600 leading-relaxed">Revolutionary snail secretion filtrate technology meets cutting-edge peptides. Clinically proven to restore cellular regeneration, boost collagen synthesis, and deliver unprecedented hydration for visibly younger, radiant skin.</p>
</div>
<div className="slide-up stagger-2">
<div className="flex items-center space-x-6 mb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-award h-5 w-5 text-green-600" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-sm font-medium text-gray-700">Dermatologist Tested</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-leaf h-5 w-5 text-green-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-sm font-medium text-gray-700">100% Natural</span>
</div>
</div>
<div className="mb-8">
<span className="block text-sm font-semibold text-gray-900 mb-3">Select Size</span>
<div className="flex space-x-4">
<label className="flex items-center space-x-3 cursor-pointer group">
<input className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-full checked:bg-green-600 checked:border-green-600 transition-all hover:border-green-400" name="size" type="radio"/>
<div className="select-none">
<span className="text-sm font-medium peer-checked:font-semibold text-gray-700">Small</span>
<span className="block text-xs text-gray-500">30ml - $89</span>
</div>
</label>
<label className="flex items-center space-x-3 cursor-pointer group">
<input checked="" className="peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-full checked:bg-green-600 checked:border-green-600 transition-all hover:border-green-400" name="size" type="radio"/>
<div className="select-none">
<span className="text-sm font-medium peer-checked:font-semibold text-gray-700">Large</span>
<span className="block text-xs text-gray-500">50ml - $139</span>
</div>
</label>
</div>
</div>
</div>
<div className="slide-up stagger-3 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 transition-all duration-200 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl group">
<span>Add to Cart - $139</span>
<svg className="lucide lucide-shopping-cart h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>
<button className="inline-flex items-center justify-center px-6 py-4 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-gray-700 font-semibold rounded-lg">
<svg className="lucide lucide-play-circle h-5 w-5 mr-2" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span>Watch Demo</span>
</button>
</div>
</div>

<div className="relative flex lg:items-end slide-up stagger-4 items-center justify-center">
<img alt="lunia Premium Bottle" className="w-64 sm:w-72 lg:w-80 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2784faff-d788-4235-bebb-56ba24f098e5_800w.jpg"/>
<img alt="Premium Packaging" className="absolute -right-8 sm:-right-16 top-8 sm:top-10 w-48 sm:w-56 lg:w-60 rounded-2xl shadow-xl hidden sm:block hover:scale-105 transition-transform duration-500 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f46bf9c9-3ce5-43c1-a422-b4c4c739a6c2_800w.jpg"/>
<div className="absolute -left-8 bottom-12 bg-white rounded-xl p-4 shadow-lg hidden lg:block">
<div className="flex items-center space-x-3">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c82d6765-7e5d-4e81-855c-94793e2d63d2_320w.jpg"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81508906-af60-495c-ac86-8039b3832a33_320w.jpg"/>
<img alt="" className="h-8 w-8 rounded-full border-2 border-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f052416b-2c41-4a53-9029-20675c1cdfde_320w.jpg"/>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">10K+ Happy Users</p>
<div className="flex items-center space-x-1">
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-gray-600">4.9/5 Rating</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div className="slide-up">
<div className="flex items-center justify-center mb-2">
<svg className="lucide lucide-users h-6 w-6 text-green-600 mr-2" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<p className="text-3xl sm:text-4xl font-bold text-gray-900">127K+</p>
</div>
<p className="text-sm text-gray-600 font-medium">Satisfied Customers</p>
</div>
<div className="slide-up stagger-1">
<div className="flex items-center justify-center mb-2">
<svg className="lucide lucide-heart h-6 w-6 text-green-600 mr-2" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<p className="text-3xl sm:text-4xl font-bold text-gray-900">98%</p>
</div>
<p className="text-sm text-gray-600 font-medium">Satisfaction Rate</p>
</div>
<div className="slide-up stagger-2">
<div className="flex items-center justify-center mb-2">
<svg className="lucide lucide-globe h-6 w-6 text-green-600 mr-2" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<p className="text-3xl sm:text-4xl font-bold text-gray-900">45+</p>
</div>
<p className="text-sm text-gray-600 font-medium">Countries</p>
</div>
<div className="slide-up stagger-3">
<div className="flex items-center justify-center mb-2">
<svg className="lucide lucide-award h-6 w-6 text-green-600 mr-2" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<p className="text-3xl sm:text-4xl font-bold text-gray-900">12</p>
</div>
<p className="text-sm text-gray-600 font-medium">Beauty Awards</p>
</div>
</div>
</section>

<section className="bg-gray-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/75bdb8aa-4ca3-4822-b868-8421e8198cf3_3840w.jpg)] bg-cover">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
<div className="slide-up mb-16">
<h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 tracking-tight">Why Choose lunia?</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Backed by 15 years of dermatological research and powered by nature's most effective ingredients</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
<div className="slide-up stagger-1 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-6">
<svg className="lucide lucide-zap h-7 w-7 text-green-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-3 text-gray-900">Fast-Acting Formula</h3>
<p className="text-sm text-gray-600 leading-relaxed">See visible results in just 7 days. Our advanced peptide complex accelerates skin renewal and collagen production.</p>
</div>
<div className="slide-up stagger-2 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-6">
<svg className="lucide lucide-shield-check h-7 w-7 text-green-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-3 text-gray-900">Clinically Proven</h3>
<p className="text-sm text-gray-600 leading-relaxed">Tested on 1000+ participants with 96% showing significant improvement in skin texture and hydration.</p>
</div>
<div className="slide-up stagger-3 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 sm:col-span-2 lg:col-span-1">
<div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-xl mb-6">
<svg className="lucide lucide-leaf h-7 w-7 text-green-600" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-3 text-gray-900">100% Natural</h3>
<p className="text-sm text-gray-600 leading-relaxed">Sustainably sourced ingredients with zero harmful chemicals. Perfect for sensitive skin types.</p>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 py-24 items-center">
<div className="slide-up">
<img alt="Laboratory Research" className="rounded-2xl shadow-lg w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9afffd05-f2bb-4dcc-9335-d6e64dce4dcc_800w.jpg"/>
</div>
<div className="slide-up stagger-1">
<div className="inline-flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
<svg className="lucide lucide-microscope h-4 w-4 mr-2" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
                Science-Backed Innovation
            </div>
<h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 tracking-tight">Pioneering Skincare Technology</h2>
<p className="mb-8 text-gray-600 leading-relaxed max-w-lg">Our breakthrough snail secretion filtrate contains 96% mucin, naturally rich in hyaluronic acid, glycolic acid, and elastin. Combined with our proprietary peptide complex, it delivers unparalleled skin regeneration.</p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div>
<p className="text-2xl font-bold text-green-600">96%</p>
<p className="text-sm text-gray-600">Active Mucin Content</p>
</div>
<div className="">
<p className="text-2xl font-bold text-green-600">7 Days</p>
<p className="text-sm text-gray-600">Visible Results</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold rounded-lg">
<svg className="lucide lucide-flask-conical h-5 w-5 mr-2" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
                    View Research
                </button>
<button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all text-gray-700 font-semibold rounded-lg">
<svg className="lucide lucide-download h-5 w-5 mr-2" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                    Clinical Studies
                </button>
</div>
</div>
</div>
</section>

<section className="bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="text-center mb-16 slide-up">
<h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 tracking-tight">Complete Skincare Collection</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Transform your routine with our scientifically formulated product line</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="slide-up bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-droplets h-6 w-6 text-blue-600" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2">Regenerating Serum</h3>
<p className="text-sm text-gray-600 mb-4">Ultra-concentrated snail mucin formula</p>
<p className="text-lg font-bold text-gray-900">$89 - $139</p>
</div>
<div className="slide-up stagger-1 bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
<div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sparkles h-6 w-6 text-purple-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2">Hydrating Cream</h3>
<p className="text-sm text-gray-600 mb-4">24-hour moisture lock technology</p>
<p className="text-lg font-bold text-gray-900">$65 - $95</p>
</div>
<div className="slide-up stagger-2 bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group sm:col-span-2 lg:col-span-1">
<div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-sun h-6 w-6 text-orange-600" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="font-semibold text-lg mb-2">UV Defense SPF 50</h3>
<p className="text-sm text-gray-600 mb-4">Mineral sunscreen with antioxidants</p>
<p className="text-lg font-bold text-gray-900">$45 - $65</p>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="text-center mb-16 slide-up">
<h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 tracking-tight">What Our Customers Say</h2>
<p className="text-lg text-gray-600">Real results from real people</p>
</div>
<div className="relative">
<div className="flex space-x-8 overflow-hidden" id="testimonial-track">
<div className="min-w-full lg:min-w-[33.33%] bg-gray-50 rounded-xl p-8 slide-up">
<div className="flex items-center space-x-1 mb-4">
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 leading-relaxed mb-6">"After just two weeks, my skin feels completely transformed. The fine lines around my eyes have visibly reduced, and my complexion is more radiant than ever."</p>
<div className="flex items-center space-x-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/234b921f-c187-4467-9f59-7a0f8b5377fd_320w.jpg"/>
<div>
<p className="font-semibold text-gray-900">Sarah Chen</p>
<p className="text-sm text-gray-500">Marketing Director, Age 34</p>
</div>
</div>
</div>
<div className="min-w-full lg:min-w-[33.33%] bg-gray-50 rounded-xl p-8 slide-up stagger-1">
<div className="flex items-center space-x-1 mb-4">
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 leading-relaxed mb-6">"I've tried countless skincare products, but lunia is in a league of its own. My dermatologist even asked what I was using because my skin looked so healthy."</p>
<div className="flex items-center space-x-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdc7194d-1cb7-4c85-a5d0-657d7429fa51_320w.jpg"/>
<div>
<p className="font-semibold text-gray-900">Michael Torres</p>
<p className="text-sm text-gray-500">Photographer, Age 28</p>
</div>
</div>
</div>
<div className="min-w-full lg:min-w-[33.33%] bg-gray-50 rounded-xl p-8 slide-up stagger-2">
<div className="flex items-center space-x-1 mb-4">
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 leading-relaxed mb-6">"As someone with sensitive skin, I was hesitant to try new products. lunia has been a game-changer - gentle yet incredibly effective. My skin has never looked better!"</p>
<div className="flex items-center space-x-4">
<img alt="" className="h-12 w-12 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db93d327-6f7a-44ef-afb5-149848109b3c_320w.jpg"/>
<div>
<p className="font-semibold text-gray-900">Emma Rodriguez</p>
<p className="text-sm text-gray-500">Wellness Blogger, Age 31</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a25f66d8-000a-4af7-a213-b609071d4281_3840w.jpg)] bg-cover">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
<div className="slide-up">
<h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white tracking-tight">Ready to Transform Your Skin?</h2>
<p className="text-lg text-green-100 mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers who've discovered the power of natural regeneration. Start your journey to radiant, youthful skin today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
<button className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 transition-all duration-200 text-green-700 font-semibold rounded-lg shadow-lg hover:shadow-xl group">
<span>Shop Now - Free Shipping</span>
<svg className="lucide lucide-arrow-right h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center px-6 py-4 border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200 text-white font-semibold rounded-lg">
<svg className="lucide lucide-phone h-5 w-5 mr-2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">Speak with Expert</span>
</button>
</div>
<div className="flex items-center justify-center space-x-8 text-green-100">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-truck h-5 w-5" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-sm">Free Shipping</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-shield h-5 w-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm">30-Day Guarantee</span>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-headphones h-5 w-5" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="text-sm">Expert Support</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-gray-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
<div className="slide-up">
<h3 className="text-xl font-bold text-white mb-6">lunia<span className="align-super text-xs font-light text-green-600">™</span></h3>
<p className="text-sm leading-relaxed mb-6">Advanced natural skincare solutions backed by science and powered by nature's most effective ingredients.</p>
<div className="flex items-center space-x-4">
<a className="flex items-center justify-center h-10 w-10 bg-gray-800 hover:bg-green-600 transition-colors rounded-lg" href="#">
<svg className="lucide lucide-facebook h-5 w-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="flex items-center justify-center h-10 w-10 bg-gray-800 hover:bg-green-600 transition-colors rounded-lg" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex items-center justify-center h-10 w-10 bg-gray-800 hover:bg-green-600 transition-colors rounded-lg" href="#">
<svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
<div className="slide-up stagger-1">
<h4 className="font-semibold text-white mb-4">Products</h4>
<ul className="space-y-3 text-sm">
<li className=""><a className="hover:text-green-400 transition-colors" href="#">Regenerating Serum</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Hydrating Cream</a></li>
<li className=""><a className="hover:text-green-400 transition-colors" href="#">UV Defense SPF 50</a></li>
<li className=""><a className="hover:text-green-400 transition-colors" href="#">Complete Kit</a></li>
</ul>
</div>
<div className="slide-up stagger-2">
<h4 className="font-semibold text-white mb-4">Support</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-green-400 transition-colors" href="#">Customer Service</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Skin Consultation</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-green-400 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div className="slide-up stagger-3">
<h4 className="font-semibold text-white mb-4">Newsletter</h4>
<p className="text-sm mb-4">Get skincare tips and exclusive offers</p>
<div className="flex">
<input className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-600 text-sm" placeholder="Your email" type="email"/>
<button className="px-4 py-2 bg-green-600 hover:bg-green-700 transition-colors rounded-r-lg">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
<p className="">© 2024 lunia™. All rights reserved.</p>
<div className="flex items-center space-x-6 mt-4 sm:mt-0">
<a className="hover:text-green-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-green-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-green-400 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
