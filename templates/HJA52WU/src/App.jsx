import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        let currentSlide = 0;
        let progressInterval;
        let autoplayInterval;
        const totalSlides = 3;
        const slideDelay = 4000; // 4 seconds
        
        function updateSlider() {
            const wrapper = document.getElementById('slider-wrapper');
            const dots = document.querySelectorAll('.dot');
            
            wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            // Reset all dots
            dots.forEach((dot, index) => {
                const progressFill = dot.querySelector('.progress-fill');
                if (index === currentSlide) {
                    dot.classList.add('active');
                    dot.style.width = '48px'; // 4 times wider (12px * 4)
                    dot.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    progressFill.style.width = '0%';
                } else {
                    dot.classList.remove('active');
                    dot.style.width = '12px'; // Default width
                    dot.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    progressFill.style.width = '0%';
                }
            });
            
            // Start progress animation for active slide
            startProgress();
        }
        
        function startProgress() {
            // Clear existing intervals
            clearInterval(progressInterval);
            clearInterval(autoplayInterval);
            
            const activeDot = document.querySelector('.dot.active .progress-fill');
            let progress = 0;
            const increment = 100 / (slideDelay / 50); // Update every 50ms
            
            progressInterval = setInterval(() => {
                progress += increment;
                if (activeDot) {
                    activeDot.style.width = Math.min(progress, 100) + '%';
                }
                if (progress >= 100) {
                    clearInterval(progressInterval);
                }
            }, 50);
            
            // Set autoplay timer
            autoplayInterval = setTimeout(() => {
                nextSlide();
            }, slideDelay);
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }
        
        function previousSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
        
        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
        }
        
        // Initialize slider
        updateSlider();
        
        // Pause autoplay on hover
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(progressInterval);
            clearInterval(autoplayInterval);
        });
        
        sliderContainer.addEventListener('mouseleave', () => {
            startProgress();
        });
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 fade-in">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="flex h-16 items-center justify-between">
<div className="text-2xl font-medium tracking-tight">LUXE</div>
<div className="hidden md:flex space-x-8">
<div className="relative group">
<a className="text-sm font-normal hover:text-gray-600 transition-colors flex items-center gap-1" href="#">
            Каталог
            <svg className="transition-transform group-hover:rotate-180" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="py-2">
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Платья</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Блузки</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Юбки</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Брюки</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Жакеты</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Аксессуары</a>
</div>
</div>
</div>
<a className="text-sm font-normal text-red-600 hover:text-red-700 transition-colors" href="#">Новинки</a>
<a className="text-sm font-normal hover:text-gray-600 transition-colors" href="#">Коллекции</a>
<a className="text-sm font-normal hover:text-gray-600 transition-colors" href="#">О нас</a>
<a className="text-sm font-normal hover:text-gray-600 transition-colors" href="#">Магазины</a>
<div className="relative group">
<a className="text-sm font-normal hover:text-gray-600 transition-colors flex items-center gap-1" href="#">
            Покупателям
            <svg className="transition-transform group-hover:rotate-180" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="py-2">
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Доставка</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Оплата</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Возврат и обмен</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Размерная сетка</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Частые вопросы</a>
<a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors" href="#">Контакты</a>
</div>
</div>
</div>
</div>
<div className="flex space-x-4 items-center">
<button className="hover:text-gray-600 transition-colors">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hover:text-gray-600 transition-colors relative">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium" style={{fontSize: '10px'}}>3</span>
</button>
<button className="hover:text-gray-600 transition-colors relative">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-medium" style={{fontSize: '10px'}}>2</span>
</button>
<button className="hover:text-gray-600 transition-colors">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button>
<button className="md:hidden hover:text-gray-600 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen overflow-hidden">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
</video>
<div className="video-overlay absolute inset-0"></div>
<div className="relative z-10 flex h-full text-white text-center items-center justify-center" id="aura-eme0tpywa">
<div className="relative w-full max-w-3xl px-6&lt;!-- Slider Container --&gt; &lt;div class=" overflow-hidden"="" slider-container="">
<div className="slider-wrapper flex transition-transform duration-700 ease-in-out" id="slider-wrapper" style={{transform: 'translateX(0%)'}}>

<div className="slide w-full flex-shrink-0">
<h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 slide-up stagger-1">Новая коллекция</h1>
<p className="text-xl md:text-2xl font-light mb-8 slide-up stagger-2">Элегантность в каждой детали</p>
<button className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors slide-up stagger-3">
                    Смотреть коллекцию
                </button>
</div>

<div className="slide w-full flex-shrink-0">
<h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 slide-up stagger-1">Весенние образы</h1>
<p className="text-xl md:text-2xl font-light mb-8 slide-up stagger-2">Свежие решения для нового сезона</p>
<button className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors slide-up stagger-3">
                    Посмотреть новинки
                </button>
</div>

<div className="slide w-full flex-shrink-0">
<h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 slide-up stagger-1">Эксклюзивные модели</h1>
<p className="text-xl md:text-2xl font-light mb-8 slide-up stagger-2">Уникальные решения для особых случаев</p>
<button className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors slide-up stagger-3">
                    Узнать больше
                </button>
</div>
</div>
</div>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all z-10" onclick="previousSlide()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all z-10" onclick="nextSlide()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
<button className="h-2 bg-white/30 transition-all dot progress-rect active" onclick="goToSlide(0)" style={{width: '48px', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
<div className="progress-fill h-full bg-white transition-all duration-100 ease-linear" style={{width: '0%'}}></div>
</button>
<button className="h-2 w-3 transition-all dot progress-rect bg-white/30" onclick="goToSlide(1)" style={{width: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
<div className="progress-fill h-full bg-white transition-all duration-100 ease-linear" style={{width: '0%'}}></div>
</button>
<button className="h-2 w-3 bg-white/30 transition-all dot progress-rect" onclick="goToSlide(2)" style={{width: '12px', backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
<div className="progress-fill h-full bg-white transition-all duration-100 ease-linear" style={{width: '0%'}}></div>
</button>
</div>

</div>
</section>

<section className="sm:px-8 max-w-7xl relative mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<h2 className="text-4xl font-medium tracking-tight text-center mb-16 slide-up stagger-1">Коллекции</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative group cursor-pointer slide-up stagger-2">
<div className="aspect-[4/5] bg-gray-100 overflow-hidden">
<img alt="Весенняя коллекция" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&amp;h=1000&amp;fit=crop&amp;crop=faces"/>
<div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
<div className="p-8 text-white">
<h3 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">Весенняя коллекция</h3>
<button className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                            Смотреть коллекцию
                        </button>
</div>
</div>
</div>
</div>

<div className="relative group cursor-pointer slide-up stagger-3">
<div className="aspect-[4/5] bg-gray-100 overflow-hidden">
<img alt="Деловая коллекция" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&amp;h=1000&amp;fit=crop&amp;crop=faces"/>
<div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
<div className="p-8 text-white">
<h3 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">Деловая коллекция</h3>
<button className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                            Смотреть коллекцию
                        </button>
</div>
</div>
</div>
</div>

<div className="relative group cursor-pointer slide-up stagger-4">
<div className="aspect-[4/5] bg-gray-100 overflow-hidden">
<img alt="Вечерняя коллекция" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&amp;h=1000&amp;fit=crop&amp;crop=faces"/>
<div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
<div className="p-8 text-white">
<h3 className="text-3xl md:text-4xl font-medium mb-4 tracking-tight">Вечерняя коллекция</h3>
<button className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors">
                            Смотреть коллекцию
                        </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="flex justify-between items-center mb-16">
<h2 className="text-4xl font-medium tracking-tight slide-up stagger-1">Новинки</h2>
<div className="flex space-x-2 slide-up stagger-2">
<button className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-all">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-12 h-12 flex hover:bg-black hover:text-white hover:border-black transition-all border-gray-200 border items-center justify-center">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="aura-eme0tmmi3">
<div className="bg-white group cursor-pointer slide-up stagger-2 relative">

<div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 font-medium z-10">NEW</div>

<button className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
<img alt="Платье" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="p-4">
<h3 className="font-medium mb-1">Элегантное платье</h3>
<p className="text-gray-600 text-sm mb-2">Черное платье-футляр</p>

<div className="flex space-x-1 mb-3">
<button className="w-4 h-4 bg-black rounded-full border-2 border-black"></button>
<button className="w-4 h-4 bg-gray-600 rounded-full border border-gray-300"></button>
<button className="w-4 h-4 bg-blue-900 rounded-full border border-gray-300"></button>
</div>
<div className="flex items-center space-x-2">
<p className="font-medium">28 500 ₽</p>
<p className="text-gray-400 text-sm line-through">35 000 ₽</p>
</div>
</div>
</div>
<div className="bg-white group cursor-pointer slide-up stagger-3 relative">

<button className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
<img alt="Блузка" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="p-4">
<h3 className="font-medium mb-1">Шелковая блузка</h3>
<p className="text-gray-600 text-sm mb-2">Белая классическая блузка</p>

<div className="flex space-x-1 mb-3">
<button className="w-4 h-4 bg-white rounded-full border-2 border-black"></button>
<button className="w-4 h-4 bg-pink-100 rounded-full border border-gray-300"></button>
<button className="w-4 h-4 bg-blue-100 rounded-full border border-gray-300"></button>
</div>
<p className="font-medium">18 900 ₽</p>
</div>
</div>
<div className="bg-white group cursor-pointer slide-up stagger-4 relative">

<div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1 font-medium z-10">NEW</div>

<button className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
<img alt="Жакет" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="p-4">
<h3 className="font-medium mb-1">Твидовый жакет</h3>
<p className="text-gray-600 text-sm mb-2">Классический жакет</p>

<div className="flex space-x-1 mb-3">
<button className="w-4 h-4 bg-gray-800 rounded-full border-2 border-black"></button>
<button className="w-4 h-4 bg-amber-100 rounded-full border border-gray-300"></button>
<button className="w-4 h-4 bg-red-900 rounded-full border border-gray-300"></button>
</div>
<div className="flex items-center space-x-2">
<p className="font-medium">45 200 ₽</p>
<p className="text-gray-400 text-sm line-through">52 000 ₽</p>
</div>
</div>
</div>
<div className="bg-white group cursor-pointer slide-up stagger-5 relative">

<button className="absolute top-4 right-4 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors z-10">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
</svg>
</button>
<div className="aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
<img alt="Юбка" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560243563-062bfc001d68?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="p-4">
<h3 className="font-medium mb-1">Плиссированная юбка</h3>
<p className="text-gray-600 text-sm mb-2">Midi юбка в складку</p>

<div className="flex space-x-1 mb-3">
<button className="w-4 h-4 bg-gray-600 rounded-full border-2 border-black"></button>
<button className="w-4 h-4 bg-black rounded-full border border-gray-300"></button>
<button className="w-4 h-4 bg-blue-600 rounded-full border border-gray-300"></button>
</div>
<div className="flex items-center space-x-2">
<p className="font-medium">22 700 ₽</p>
<p className="text-gray-400 text-sm line-through">28 500 ₽</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 sm:px-8">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-medium tracking-tight text-center mb-16 slide-up stagger-1">Наши магазины</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="slide-up stagger-2">
<div className="bg-gray-100 h-96 mb-8 rounded-none overflow-hidden">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4266856280937!2d37.62320001584335!3d55.75399998055697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a636edcd2cd%3A0x4c2ca101e2c8c617!2z0KDQtdC00L7Qtywg0JHQvtC70YzRiNCw0Y8g0JTQvNC40YLRgNC-0LLQutCwLCDRg9C7LiDQndC40LrQvtC70YzRgdC60LDRjywgMTIsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGPLCAxMDM2OTI!5e0!3m2!1sru!2s!4v1629798048000!5m2!1sru!2s" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
<div className="space-y-8 slide-up stagger-3">
<div className="border-l-2 border-gray-900 pl-6">
<h3 className="text-xl font-medium mb-2">Москва, ЦУМ</h3>
<p className="text-gray-600 mb-4">Петровка, 2, 3 этажЕжедневно 10:00 - 22:00</p>
<div className="flex items-center space-x-4 text-sm">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+7 (495) 123-45-67</span>
</div>
</div>
</div>
<div className="border-l-2 border-gray-200 pl-6 slide-up stagger-4">
<h3 className="text-xl font-medium mb-2">Санкт-Петербург, Невский</h3>
<p className="text-gray-600 mb-4">Невский проспект, 56Ежедневно 10:00 - 21:00</p>
<div className="flex items-center space-x-4 text-sm">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+7 (812) 123-45-67</span>
</div>
</div>
</div>
<div className="border-l-2 border-gray-200 pl-6 slide-up stagger-5">
<h3 className="text-xl font-medium mb-2">Екатеринбург, Пассаж</h3>
<p className="text-gray-600 mb-4">Вайнера, 9Ежедневно 10:00 - 21:00</p>
<div className="flex items-center space-x-4 text-sm">
<div className="flex items-center space-x-1">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+7 (343) 123-45-67</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white">
<div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
<h2 className="text-4xl font-medium tracking-tight mb-6 slide-up stagger-1">Будьте в курсе новинок</h2>
<p className="text-gray-300 mb-8 text-lg slide-up stagger-2">Подпишитесь на нашу рассылку и получайте уведомления о новых коллекциях</p>
<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto slide-up stagger-3">
<input className="flex-1 px-4 py-3 bg-white text-black text-sm focus:outline-none" placeholder="Ваш email" type="email"/>
<button className="bg-white text-black px-6 py-3 text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                    Подписаться
                </button>
</div>
</div>
</section>

<footer className="bg-gray-100 py-16">
<div className="max-w-7xl mx-auto px-6 sm:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="slide-up stagger-1">
<div className="text-2xl font-medium tracking-tight mb-4">LUXE</div>
<p className="text-gray-600 text-sm">Премиум женская одежда для современных и стильных женщин</p>
</div>
<div className="slide-up stagger-2">
<h4 className="font-medium mb-4">Компания</h4>
<div className="space-y-2 text-sm text-gray-600">
<a className="block hover:text-black transition-colors" href="#">О нас</a>
<a className="block hover:text-black transition-colors" href="#">Карьера</a>
<a className="block hover:text-black transition-colors" href="#">Пресса</a>
</div>
</div>
<div className="slide-up stagger-3">
<h4 className="font-medium mb-4">Помощь</h4>
<div className="space-y-2 text-sm text-gray-600">
<a className="block hover:text-black transition-colors" href="#">Доставка</a>
<a className="block hover:text-black transition-colors" href="#">Возврат</a>
<a className="block hover:text-black transition-colors" href="#">Размеры</a>
</div>
</div>
<div className="slide-up stagger-4">
<h4 className="font-medium mb-4">Контакты</h4>
<div className="space-y-2 text-sm text-gray-600">
<p>+7 (495) 123-45-67</p>
<p>info@luxe-fashion.ru</p>
<div className="flex space-x-4 mt-4">
<button className="hover:text-black transition-colors">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</button>
<button className="hover:text-black transition-colors">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-200 mt-12 pt-8 text-center text-sm text-gray-600 slide-up stagger-5">
<p>© 2024 LUXE. Все права защищены.</p>
</div>
</div>
</footer>


    </>
  );
}
