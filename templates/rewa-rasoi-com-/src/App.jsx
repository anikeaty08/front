import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Splash screen logic
    window.addEventListener('load', () => {
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            splash.classList.add('splash-exit');
            setTimeout(() => {
                splash.remove();
            }, 1000);
        }, 1500); // Show for 1.5 seconds
    });



  (function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    if (!toggleBtn || !menu) return;

    const icon = toggleBtn.querySelector('iconify-icon');

    function openMenu() {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'false');
      if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'true');
      if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
      document.body.style.overflow = '';
    }

    function isOpen() {
      return !menu.classList.contains('opacity-0');
    }

    toggleBtn.addEventListener('click', () => {
      if (isOpen()) closeMenu();
      else openMenu();
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });
  })();



        // Simple Carousel Logic
        const cards = document.querySelectorAll('.slider-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalCards = cards.length;

        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }

        function nextCard() {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }

        function prevCard() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }

        nextBtn.addEventListener('click', () => {
            nextCard();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevCard();
            resetInterval();
        });

        let autoSlide = setInterval(nextCard, 5000);

        function resetInterval() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextCard, 5000);
        }
    


    // Menu Filter Logic
    document.addEventListener('DOMContentLoaded', () => {
        const filterBtns = document.querySelectorAll('.menu-filter-btn');
        const menuCategories = document.querySelectorAll('.menu-category');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update button active states
                filterBtns.forEach(b => {
                    b.classList.remove('bg-gray-900', 'text-white', 'shadow-md');
                    b.classList.add('bg-white/60', 'border-gray-300', 'text-gray-700');
                });
                btn.classList.remove('bg-white/60', 'border-gray-300', 'text-gray-700');
                btn.classList.add('bg-gray-900', 'text-white', 'shadow-md');

                const filterValue = btn.getAttribute('data-filter');

                // Filter menu items
                menuCategories.forEach(cat => {
                    cat.classList.remove('menu-fade-in'); // Reset animation
                    
                    if (filterValue === 'all' || cat.getAttribute('data-category') === filterValue) {
                        cat.style.display = 'block';
                        // Small timeout to re-trigger the css animation smoothly
                        setTimeout(() => cat.classList.add('menu-fade-in'), 10);
                    } else {
                        cat.style.display = 'none';
                    }
                });
            });
        });
    });



    const form = document.getElementById('reservation-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('span');
    const btnIcon = submitBtn.querySelector('iconify-icon');

    // Handle seamless form submission using AJAX
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // UI Loading State
        submitBtn.disabled = true;
        btnText.innerText = 'Sending...';
        btnIcon.setAttribute('icon', 'solar:spinner-linear');
        btnIcon.classList.add('animate-spin');
        errorMsg.classList.add('hidden');

        const data = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                form.reset();
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                successMsg.classList.add('flex');
            } else {
                // API Error
                errorMsg.classList.remove('hidden');
            }
        } catch (error) {
            // Network Error
            errorMsg.classList.remove('hidden');
        }

        // Revert UI Loading State
        submitBtn.disabled = false;
        btnText.innerText = 'Send Request';
        btnIcon.setAttribute('icon', 'solar:plain-3-linear');
        btnIcon.classList.remove('animate-spin');
    });

    // Helper function to reset and show form again after success
    function resetForm() {
        successMsg.classList.add('hidden');
        successMsg.classList.remove('flex');
        form.classList.remove('hidden');
    }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[9999] bg-[#E3DDD7] flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-md" id="splash-screen">
<div className="flex flex-col items-center gap-6" style={{animation: 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}>
<div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-2xl">
<iconify-icon icon="solar:chef-hat-linear" width="32"></iconify-icon>
</div>
<h1 className="text-3xl md:text-5xl font-playfair italic font-medium tracking-tight text-gray-900">Rewa Ki Rasoi</h1>
</div>
</div>


<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white">
<iconify-icon icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight">Rewa Ki Rasoi</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#book">Contact</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group" href="#book">
        Book Table
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-[#E3DDD7] opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors mobile-link" href="#about">About Us</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors mobile-link" href="#menu">Menu</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors mobile-link" href="#book">Book a Table</a>
</div>


<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white border border-gray-100 shadow-sm text-green-600">
<iconify-icon icon="solar:leaf-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">100% Pure Vegetarian</span>
</div>

<h1 className="animate-enter delay-200 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    Authentic <br/>
<span className="font-playfair italic font-medium">flavors.</span>
</h1>

<p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                    Experience the true taste of tradition at Rewa Ki Rasoi. From wholesome Thalis to rich curries, prepared fresh daily.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<a className="bg-gray-900 text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200/50" href="#menu">
                        Explore Menu
                        <iconify-icon icon="solar:menu-dots-square-linear" width="20"></iconify-icon>
</a>
<a className="px-6 py-4 text-gray-600 font-medium hover:text-gray-900 flex items-center gap-2 transition-colors group" href="#book">
                        Book a Table
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/40 via-yellow-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

<button className="absolute left-0 md:left-4 lg:-left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform cursor-pointer" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-0 md:right-4 lg:-right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gray-900 text-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="relative w-[340px] md:w-[400px] h-[500px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden transform rotate-0 hover:rotate-0 transition-transform duration-500 mr-auto ml-auto ring-1 ring-gray-900/5">

<div className="w-full h-full relative bg-gray-100" id="sliderContainer">

<div className="slider-card card-active w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Indian Thali" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white z-20">
<p className="text-sm font-semibold uppercase tracking-wider mb-1 opacity-80">Signature</p>
<h3 className="text-3xl font-playfair italic">Special Thali</h3>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Paneer Dish" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white z-20">
<p className="text-sm font-semibold uppercase tracking-wider mb-1 opacity-80">Main Course</p>
<h3 className="text-3xl font-playfair italic">Rich Curries</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10 border-t border-gray-900/10 mt-12" id="about">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 flex flex-col items-start">
<div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Location</h3>
<p className="text-gray-600 leading-relaxed text-sm">Front of Sanjay Nagar Pani Tanki, Prayagaraj road, Gulab Nagar, Chhatrapati Nagar, Rewa, Madhya Pradesh 486001</p>
</div>

<div className="group bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 flex flex-col items-start">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Opening Hours</h3>
<ul className="text-gray-600 text-sm w-full space-y-1">
<li className="flex justify-between"><span>Mon - Sun</span> <span>7:00 am – 11:30 pm</span></li>
</ul>
<span className="mt-4 text-xs font-semibold uppercase tracking-wider text-green-600 bg-green-100 px-2 py-1 rounded-md">Open Daily</span>
</div>

<div className="group bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 flex flex-col items-start">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Contact Us</h3>
<p className="text-gray-600 leading-relaxed text-sm mb-4">Call us for reservations or quick orders.</p>
<a className="text-xl font-medium tracking-tight text-gray-900 hover:text-gray-500 transition-colors" href="tel:08349687909">08349687909</a>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32 pt-12" id="menu">
<div className="flex flex-col items-center text-center mb-10 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Our Menu</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
            Pure Vegetarian 
            <span className="font-playfair italic font-medium">masterpieces.</span>
</h2>
</div>

<div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-16 animate-enter delay-100" id="menu-filters">
<button className="menu-filter-btn bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-md" data-filter="all">All</button>
<button className="menu-filter-btn bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300" data-filter="thali">Thali</button>
<button className="menu-filter-btn bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300" data-filter="main">Main Course</button>
<button className="menu-filter-btn bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300" data-filter="breads-rice">Breads &amp; Rice</button>
<button className="menu-filter-btn bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300" data-filter="snacks">Snacks &amp; Fast Food</button>
<button className="menu-filter-btn bg-white/60 backdrop-blur-sm border border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-900 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300" data-filter="drinks">Soups &amp; Drinks</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 animate-enter delay-200 items-start">

<div className="space-y-16">

<div className="menu-category transition-all duration-500" data-category="thali">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2 flex items-center justify-between">
                    Thali
                    <iconify-icon className="text-gray-400" icon="solar:plate-linear"></iconify-icon>
</h3>
<div className="space-y-6">
<div className="flex flex-col">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-gray-900">Normal Thali</span>
<span className="font-semibold text-gray-900">₹129.00</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">Dal fry, rice, seasonal veg, 4 roti, salad and achar.</p>
</div>
<div className="flex flex-col">
<div className="flex justify-between items-baseline mb-1">
<span className="font-semibold text-gray-900">Thali [Mini]</span>
<span className="font-semibold text-gray-900">₹89.00</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed">6 Poori, sabji, salad and achar.</p>
</div>
</div>
</div>

<div className="menu-category transition-all duration-500" data-category="main">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2">Main Course - Paneer</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Matar Paneer</span><span className="text-gray-900 font-medium text-sm">₹119.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Palak Paneer</span><span className="text-gray-900 font-medium text-sm">₹139.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Shahi Paneer</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Butter Paneer Masala</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Kadai Paneer</span><span className="text-gray-900 font-medium text-sm">₹139.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Punjabi Paneer</span><span className="text-gray-900 font-medium text-sm">₹139.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Lababdar</span><span className="text-gray-900 font-medium text-sm">₹259.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Hyderabadi</span><span className="text-gray-900 font-medium text-sm">₹140.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Masala</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Do Pyaaza</span><span className="text-gray-900 font-medium text-sm">₹239.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Pasanda</span><span className="text-gray-900 font-medium text-sm">₹259.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Bhageli</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Tikka Masala</span><span className="text-gray-900 font-medium text-sm">₹259.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Chilli Paneer Gravy</span><span className="text-gray-900 font-medium text-sm">₹169.00</span></div>
</div>
</div>

<div className="menu-category transition-all duration-500" data-category="main">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2">Main Course - Veg &amp; Dal</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Rewa Rasoi Special</span><span className="text-gray-900 font-medium text-sm">₹399.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Mushroom Masala</span><span className="text-gray-900 font-medium text-sm">₹229.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Kaju Masala</span><span className="text-gray-900 font-medium text-sm">₹279.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Malai Kofta</span><span className="text-gray-900 font-medium text-sm">₹259.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Kofta</span><span className="text-gray-900 font-medium text-sm">₹209.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Mix Veg</span><span className="text-gray-900 font-medium text-sm">₹169.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Aloo Gobi Matar</span><span className="text-gray-900 font-medium text-sm">₹119.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Sev Tamatar</span><span className="text-gray-900 font-medium text-sm">₹159.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Dum Aloo</span><span className="text-gray-900 font-medium text-sm">₹139.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Choka Bharta</span><span className="text-gray-900 font-medium text-sm">₹159.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Dal Tadka</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Rajasthani Dal</span><span className="text-gray-900 font-medium text-sm">₹209.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Manchurian Gravy</span><span className="text-gray-900 font-medium text-sm">₹69.00</span></div>
</div>
</div>

<div className="menu-category transition-all duration-500" data-category="breads-rice">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2">Rice &amp; Biryani</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Plain Rice</span><span className="text-gray-900 font-medium text-sm">₹59.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Jeera Rice</span><span className="text-gray-900 font-medium text-sm">₹69.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Masala Rice</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Pulao</span><span className="text-gray-900 font-medium text-sm">₹159.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Biryani</span><span className="text-gray-900 font-medium text-sm">₹189.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Fried Rice</span><span className="text-gray-900 font-medium text-sm">₹139.00</span></div>
</div>
</div>
</div>

<div className="space-y-16">

<div className="menu-category transition-all duration-500" data-category="breads-rice">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2">Breads</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Tawa Roti</span><span className="text-gray-900 font-medium text-sm">₹10.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Tawa Butter Roti</span><span className="text-gray-900 font-medium text-sm">₹15.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Plain Tandoori Roti</span><span className="text-gray-900 font-medium text-sm">₹15.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Butter Tandoori Roti</span><span className="text-gray-900 font-medium text-sm">₹20.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Aloo Paratha</span><span className="text-gray-900 font-medium text-sm">₹49.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Paratha</span><span className="text-gray-900 font-medium text-sm">₹69.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Laccha Paratha</span><span className="text-gray-900 font-medium text-sm">₹59.00</span></div>
</div>
</div>

<div className="menu-category transition-all duration-500" data-category="snacks">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2">Noodles &amp; Pasta</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Noodles</span><span className="text-gray-900 font-medium text-sm">₹69.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Hakka Noodles</span><span className="text-gray-900 font-medium text-sm">₹89.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Schezwan Noodles</span><span className="text-gray-900 font-medium text-sm">₹89.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Chinese Veg Pasta</span><span className="text-gray-900 font-medium text-sm">₹69.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Red Sauce Pasta</span><span className="text-gray-900 font-medium text-sm">₹89.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">White Sauce Pasta</span><span className="text-gray-900 font-medium text-sm">₹99.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Cheese Pasta</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
</div>
</div>

<div className="menu-category transition-all duration-500" data-category="snacks">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2">Fast Food &amp; Snacks</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Burger</span><span className="text-gray-900 font-medium text-sm">₹59.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Cheese Burger</span><span className="text-gray-900 font-medium text-sm">₹89.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Paneer Sandwich</span><span className="text-gray-900 font-medium text-sm">₹89.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Finger Chips</span><span className="text-gray-900 font-medium text-sm">₹99.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Crispy Corn</span><span className="text-gray-900 font-medium text-sm">₹139.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Chole Bhature [2 Pcs]</span><span className="text-gray-900 font-medium text-sm">₹89.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Cheese Maggi</span><span className="text-gray-900 font-medium text-sm">₹119.00</span></div>
</div>
</div>

<div className="menu-category transition-all duration-500" data-category="drinks">
<h3 className="text-2xl font-playfair font-semibold italic text-gray-900 mb-6 border-b border-gray-900/10 pb-2">Soups, Sides &amp; Drinks</h3>
<div className="space-y-4">
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Manchow Soup</span><span className="text-gray-900 font-medium text-sm">₹69.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Tomato Soup</span><span className="text-gray-900 font-medium text-sm">₹59.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Green Salad</span><span className="text-gray-900 font-medium text-sm">₹49.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Veg Raita</span><span className="text-gray-900 font-medium text-sm">₹59.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Fruit Salad</span><span className="text-gray-900 font-medium text-sm">₹69.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Chocolate Shake</span><span className="text-gray-900 font-medium text-sm">₹129.00</span></div>
<div className="flex justify-between items-baseline"><span className="font-medium text-gray-800">Chaas</span><span className="text-gray-900 font-medium text-sm">₹49.00</span></div>
</div>
</div>
</div>
</div>
</section>


<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-24" id="book">
<div className="bg-[#efeae5] rounded-[2.5rem] p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-sm border border-white/50 animate-enter">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent opacity-60 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

<div className="flex flex-col justify-center items-start text-left">
<span className="bg-white text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-flex items-center gap-2 shadow-sm">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
                    Reservations
                </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                    Book a table or 
                    <span className="font-playfair italic font-medium">pre-order.</span>
</h2>
<p className="text-gray-500 mb-8 max-w-sm text-sm md:text-base leading-relaxed">
                    Planning a visit or want your food ready when you arrive? Send us your details and food preferences, and we'll take care of the rest.
                </p>
<div className="flex items-center gap-4 text-sm font-medium text-gray-900 bg-white/50 px-4 py-3 rounded-xl border border-white">
<iconify-icon className="text-yellow-600 text-lg" icon="solar:bell-bing-bold"></iconify-icon>
                    We'll confirm your booking shortly.
                </div>
</div>

<div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-gray-900/5 relative min-h-[400px] flex flex-col justify-center">

<div className="hidden flex-col items-center justify-center text-center py-8 animate-enter" id="form-success">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-green-100">
<iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-playfair italic font-medium text-gray-900 mb-3">Request Sent!</h3>
<p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">Thank you! We have received your reservation request and will contact you shortly.</p>
<button className="mt-8 text-sm font-semibold text-gray-900 hover:text-gray-500 transition-colors flex items-center gap-2" onclick="resetForm()" type="button">
<iconify-icon icon="solar:refresh-linear"></iconify-icon> Make another booking
                    </button>
</div>

<div className="hidden mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium flex items-center gap-3" id="form-error">
<iconify-icon icon="solar:danger-triangle-linear" width="20"></iconify-icon>
                    Oops! Something went wrong. Please try again.
                </div>

<form action="https://formspree.io/f/xlgpdwnp" className="flex flex-col gap-5" id="reservation-form" method="POST">

<input name="_subject" type="hidden" value="New Reservation Request from Rewa Ki Rasoi"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wider" htmlFor="name">Name</label>
<input className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-shadow placeholder:text-gray-400" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wider" htmlFor="phone">Phone Number</label>
<input className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-shadow placeholder:text-gray-400" id="phone" name="phone" placeholder="+91 00000 00000" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wider" htmlFor="date">Date</label>
<input className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-shadow" id="date" name="date" required="" type="date"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wider" htmlFor="time">Time</label>
<input className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-shadow" id="time" name="time" required="" type="time"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wider" htmlFor="details">Food Details / Special Requests</label>
<textarea className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/10 transition-shadow resize-none placeholder:text-gray-400" id="details" name="message" placeholder="E.g., Booking for 4 people, please prepare 2 Normal Thalis in advance..." rows="3"></textarea>
</div>
<button className="w-full bg-gray-900 text-white rounded-xl py-4 text-sm font-semibold hover:bg-gray-800 transition-colors mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" id="submit-btn" type="submit">
<span>Send Request</span>
<iconify-icon icon="solar:plain-3-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12">

<div className="border-t border-gray-900/10 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24 animate-enter delay-200">
<div className="max-w-xs">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:chef-hat-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight">Rewa Ki Rasoi</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                Serving joy, one <span className="font-playfair italic font-medium">meal</span> at a time.
            </h4>
<p className="text-xs text-gray-500 mb-6">100% Pure Vegetarian Restaurant in Rewa, Madhya Pradesh.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-2 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Navigate</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Home</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#about">About Us</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#menu">Menu</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wider">Contact</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#book">Book a Table</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="tel:08349687909">Call Us</a>
<span className="text-sm text-gray-500">Open 7am - 11:30pm</span>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-900/5 flex justify-between text-[10px] text-gray-400 font-medium uppercase tracking-wider">
<span>© 2026 Rewa Ki Rasoi. All rights reserved.</span>
<span>Pure Veg</span>
</div>
</footer>

    </>
  );
}
