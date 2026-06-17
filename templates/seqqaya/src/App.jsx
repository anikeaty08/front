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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Menu Data (5 dishes)
        const menuData = [
            {
                title: "Khlea with Eggs",
                price: "MAD 35",
                cat: "Breakfast",
                desc: "Traditional preserved beef cooked with farm-fresh eggs and cumin. Served with hot bread and tea.",
                img: "https://images.unsplash.com/photo-1598511726623-d20111313881?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Pizza Poisson",
                price: "MAD 45",
                cat: "Pizza",
                desc: "Homemade tomato sauce, mozzarella, seasonal seafood mix (shrimp, calamari), oregano, and olives.",
                img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop"
            },
            {
                title: "Tacos Blanco",
                price: "MAD 40",
                cat: "Tacos",
                desc: "Grilled chicken breast, rich white cheese sauce, french fries, wrapped in a toasted tortilla.",
                img: "https://images.unsplash.com/photo-1629814249584-bd4d53cf0e7d?q=80&w=2071&auto=format&fit=crop"
            },
            {
                title: "Moroccan Tea",
                price: "MAD 12",
                cat: "Drinks",
                desc: "Authentic Moroccan mint tea, brewed with gun powder tea leaves and fresh organic mint.",
                img: "https://images.unsplash.com/photo-1597393353415-b3730f3719fe?q=80&w=2070&auto=format&fit=crop"
            },
            {
                title: "Panini Mixte",
                price: "MAD 30",
                cat: "Sandwiches",
                desc: "A loaded panini with grilled chicken, tuna, melted cheese, fresh vegetables, and house sauce.",
                img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop"
            }
        ];

        // Navbar Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Parallax Effect (desktop only)
        const imgUp = document.getElementById('img-up');
        const imgDown = document.getElementById('img-down');
        
        function handleParallax() {
            if (window.innerWidth < 1024) {
                imgUp.style.transform = 'translateY(0)';
                imgDown.style.transform = 'translateY(0)';
                return;
            }
            const scrollVal = window.scrollY;
            const aboutSection = document.getElementById('about');
            const offset = aboutSection.offsetTop - window.innerHeight;
            
            if (scrollVal > offset) {
                const move = (scrollVal - offset) * 0.15;
                imgUp.style.transform = `translateY(-${move}px)`;
                imgDown.style.transform = `translateY(${move}px)`;
            }
        }
        window.addEventListener('scroll', handleParallax);
        window.addEventListener('resize', handleParallax);

        // Mobile Menu
        function openMobileMenu() {
            document.getElementById('mobile-menu').classList.add('open');
            document.getElementById('mobile-overlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeMobileMenu() {
            document.getElementById('mobile-menu').classList.remove('open');
            document.getElementById('mobile-overlay').classList.remove('active');
            document.body.style.overflow = '';
        }

        // Menu Interaction
        const menuList = document.getElementById('menu-list');
        const menuPreview = document.getElementById('menu-preview');
        const previewImg = document.getElementById('preview-img');
        const previewTitle = document.getElementById('preview-title');
        const previewPrice = document.getElementById('preview-price');
        const previewDesc = document.getElementById('preview-desc');
        const previewCat = document.getElementById('preview-cat');

        let currentOpenMobile = null;

        function toggleDish(index, clickedEl) {
            const data = menuData[index];
            
            if (window.innerWidth >= 1024) {
                // Desktop: side preview at 50%
                previewImg.src = data.img;
                previewTitle.innerText = data.title;
                previewPrice.innerText = data.price;
                previewDesc.innerText = data.desc;
                previewCat.innerText = data.cat;

                menuList.classList.remove('w-full');
                menuList.classList.add('w-1/2');
                
                menuPreview.classList.remove('w-0');
                menuPreview.classList.add('w-1/2', 'active');
            } else {
                // Mobile: inline preview under each dish
                const allPreviews = document.querySelectorAll('.mobile-preview');
                const targetPreview = document.querySelector(`[data-mobile-preview="${index}"]`);
                
                if (currentOpenMobile === index) {
                    // Close current
                    targetPreview.classList.remove('open');
                    currentOpenMobile = null;
                    return;
                }

                // Close all
                allPreviews.forEach(p => p.classList.remove('open'));

                // Populate
                targetPreview.querySelector('[data-mp-img]').src = data.img;
                targetPreview.querySelector('[data-mp-title]').innerText = data.title;
                targetPreview.querySelector('[data-mp-price]').innerText = data.price;
                targetPreview.querySelector('[data-mp-desc]').innerText = data.desc;
                targetPreview.querySelector('[data-mp-cat]').innerText = data.cat;

                // Open target
                targetPreview.classList.add('open');
                currentOpenMobile = index;

                setTimeout(() => {
                    targetPreview.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        }

        function closePreview() {
            menuList.classList.add('w-full');
            menuList.classList.remove('w-1/2');
            
            menuPreview.classList.remove('w-1/2', 'active');
            menuPreview.classList.add('w-0');
        }

        // Scroll Reveal Observer
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            revealObserver.observe(el);
        });

        // Reservation Webhook
        async function submitReservation(e) {
            e.preventDefault();
            
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            const payload = {
                name: document.getElementById('res-name').value,
                phone: document.getElementById('res-phone').value,
                email: document.getElementById('res-email').value,
                email: document.getElementById('res-email').value,
                date: document.getElementById('res-date').value,
                time: document.getElementById('res-time').value,
                guests: document.getElementById('res-guests').value
            };

            try {
                await fetch('https://bram05.app.n8n.cloud/webhook-test/reservation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                });
                
                btn.innerText = 'Reservation Sent!';
                console.log("form submited!")
                e.target.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3000);
            } catch (error) {
                console.error('Error submitting reservation:', error);
                btn.innerText = 'Error. Try Again.';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                }, 3000);
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
      

<div id="mobile-overlay" onclick="closeMobileMenu()"></div>

<div className="w-full md:w-[50vw] lg:w-[50vw] text-white flex flex-col" id="mobile-menu">
<div className="flex items-center justify-between p-6 border-b border-stone-800">
<span className="text-xl font-bold tracking-tight font-heading">SE<span className="text-coral">QQ</span>AYA</span>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-800 transition-colors" onclick="closeMobileMenu()">
<iconify-icon className="text-stone-300" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col p-6 gap-6 flex-1">
<a className="text-lg font-medium hover:text-coral transition-colors" href="#about" onclick="closeMobileMenu()">About</a>
<a className="text-lg font-medium hover:text-coral transition-colors" href="#menu" onclick="closeMobileMenu()">Menu</a>
<a className="text-lg font-medium hover:text-coral transition-colors" href="#reviews" onclick="closeMobileMenu()">Reviews</a>
<a className="text-lg font-medium hover:text-coral transition-colors" href="#location" onclick="closeMobileMenu()">Location</a>
<div className="mt-auto pb-6">
<a className="flex items-center justify-center w-full px-6 py-4 bg-coral hover:bg-[#D94532] text-white text-sm font-semibold tracking-wide rounded-full transition-all" href="#reservation" onclick="closeMobileMenu()">
                    Reserve Table
                </a>
</div>
</div>
</div>

<nav className="fixed z-50 nav-anim text-white bg-transparent top-0 right-0 left-0" id="navbar">
<div className="flex md:h-24 h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex flex-col leading-none group" href="#">
<span className="group-hover:text-coral transition-colors text-lg md:text-2xl font-bold tracking-tight font-heading">SE<span className="text-coral">QQ</span>AYA</span>
</a>
<div className="hidden lg:flex items-center space-x-10 text-sm font-medium tracking-wide">
<a className="hover:text-coral transition-colors" href="#about">About</a>
<a className="hover:text-coral transition-colors" href="#menu">Menu</a>
<a className="hover:text-coral transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-coral transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex group relative overflow-hidden rounded-full border border-coral text-coral px-6 py-2.5 text-xs font-semibold tracking-wide transition-all hover:bg-coral hover:text-white shadow-sm" href="#reservation">
<span className="flex items-center gap-2 z-10 relative">Reserve Table</span>
</a>
<button className="lg:hidden text-white hover:text-coral transition-colors" onclick="openMobileMenu()">
<iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="min-h-[600px] flex overflow-hidden bg-stone-900 w-full h-screen relative items-center justify-center">
<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60"></div>
<div className="bg-gradient-to-t from-black/80 via-transparent to-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-4xl mt-10 mr-auto ml-auto pr-4 pl-4 relative space-y-6">
<h1 className="leading-[0.9] overflow-hidden text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-heading">
<span className="inline-block overflow-hidden pb-2 mr-4"><span className="word-anim" style={{animationDelay: '0.1s'}}>Come</span> <span className="word-anim" style={{animationDelay: '0.2s'}}>Hungry.</span></span>
<br className="hidden md:block"/>
<span className="inline-block overflow-hidden pb-2 ml-4">
<span className="word-anim text-coral" style={{animationDelay: '0.5s'}}>Leave</span>
<span className="word-anim text-coral" style={{animationDelay: '0.7s'}}>Happy.</span>
</span>
</h1>
<div className="hero-content-anim space-y-8">
<p className="md:text-base leading-snug text-sm font-normal text-stone-200 opacity-90 max-w-[80vw] md:max-w-2xl mr-auto ml-auto line-clamp-2">
                Authentic Moroccan breakfast, signature tacos, artisanal pizza &amp; more. A modern culinary experience on Boulevard Mohamed V.
              </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="md:w-auto bg-coral hover:bg-[#D94532] transition-all duration-300 flex items-center justify-center gap-2 shadow-coral/20 hover:shadow-coral/40 text-sm font-semibold text-white tracking-wide w-[80%] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#menu">
  View Menu
  <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-[80%] md:w-auto px-8 py-4 bg-transparent border border-coral text-coral hover:bg-coral hover:text-white text-sm font-semibold tracking-wide rounded-full transition-all duration-300" href="#reservation">
                  Book a Table
                </a>
</div>
</div>
</div>
</header>

<section className="overflow-hidden pt-24 pr-[5%] pb-24 pl-[5%]" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mr-auto ml-auto gap-x-20 gap-y-20 items-center">
<div className="flex flex-col justify-between h-[80%] max-w-[88%] order-1 space-y-6">
<div className="flex flex-col gap-6">
<div className="scroll-reveal visible">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-3 block">Our Story</span>
<h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 tracking-tight leading-tight">
                        Authentic
                        &amp; <br/><span className="text-stone-400">Modern Vibes</span></h2>
</div>
<div className="space-y-6 text-stone-600 font-light leading-relaxed text-base scroll-reveal visible" style={{transitionDelay: '0.1s'}}>
<p className="">
                        Located on the vibrant Boulevard Mohamed V,
                        <span className="font-semibold text-stone-900">Seqqaya</span> brings
                        a fresh perspective to dining in Sefrou. We blend traditional Moroccan hospitality with a
                        modern,
                        airy
                        atmosphere.
                    </p>
<p className="">
                        From our famous
                        <span className="text-stone-900 font-medium border-b border-coral/30">Khlea with aged beef</span> to
                        our
                        wood-fired pizzas and signature Tacos Blanco, every dish is crafted with quality local
                        ingredients
                        and
                        served with a smile.
                    </p>
</div>
</div>
<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 scroll-reveal pt-4 gap-x-6 gap-y-6" style={{transitionDelay: '0.2s'}}>
<div className="flex items-center gap-4 items-start bg-stone-200 py-4 px-2 rounded-[1rem]">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-coral shrink-0">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-stone-900 font-heading">Quality Food</h4>
<p className="text-xs text-stone-500 mt-1">Fresh, local produce.</p>
</div>
</div>
<div className="flex items-center gap-4 items-start bg-stone-200 py-4 px-2 rounded-[1rem]">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-coral shrink-0">
<iconify-icon className="" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-bold text-stone-900 font-heading">Friendly Staff</h4>
<p className="text-xs text-stone-500 mt-1">Welcoming you daily.</p>
</div>
</div>
</div>
</div>
<div className="order-2 lg:h-[600px] flex gap-6 h-[400px] relative gap-x-6 gap-y-6 justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-stone-100/50 rounded-full blur-3xl -z-10">
</div>
<div className="parallax-img relative w-1/2 h-full flex items-end scroll-reveal visible" id="img-up">
<img className="shadow-stone-900/20 w-full h-[70%] object-cover rounded-2xl shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/819e48d5-30d8-4b53-9e16-490baa7bd2f1_800w.webp"/>
<div className="-left-4 z-20 bg-white border-stone-50 border rounded-xl pt-3 pr-3 pb-3 pl-3 absolute top-[40%] shadow-xl">
<div className="flex gap-1 text-coral text-xs mb-1">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs font-semibold text-stone-900 font-heading">"Best Service!"</p>
</div>
</div>
<div className="parallax-img relative w-1/2 h-full flex items-start pt-8 scroll-reveal visible" id="img-down" style={{transitionDelay: '0.15s'}}>
<img className="w-full h-[70%] object-cover rounded-2xl shadow-2xl shadow-stone-900/20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-[35%] -left-8 bg-white p-3 rounded-xl shadow-xl z-20 border border-stone-50">
<div className="flex gap-1 text-coral text-xs mb-1">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-heading font-semibold text-xs text-stone-900">"Best Khlea in town!"</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-stone-100 pt-12 pr-[5%] pb-12 pl-[5%]" id="menu">
<div className="w-full max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
<div className="mb-12 max-w-7xl mx-auto scroll-reveal">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-3 block">Eat &amp; Drink</span>
<h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 tracking-tight">Trending
            <span className="text-stone-400">Dishes</span>
</h2>
<p className="text-stone-500 mt-2 text-sm">Click on a dish to view details.</p>
</div>
<div className="flex flex-col lg:flex-row gap-0 lg:gap-8 w-full h-full relative" id="menu-container">

<div className="flex flex-col gap-4 w-full h-full" id="menu-list">

<div className="scroll-reveal" style={{transitionDelay: '0.05s'}}>
<div className="menu-item group cursor-pointer hover:bg-stone-100 hover:border-stone-200 flex transition-all md:p-6 bg-[#F9F8F6] w-full border-transparent border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between" onclick="toggleDish(0, this)">
<div className="flex items-center gap-4 md:gap-6">
<span className="group-hover:text-coral transition-colors text-lg md:text-2xl font-bold text-stone-300 font-heading">01</span>
<div className="">
<h3 className="text-base md:text-2xl font-heading font-bold text-stone-900">Khlea with Eggs
                            </h3>
<p className="text-xs md:text-sm text-stone-500 mt-1">Traditional preserved beef with eggs
                            </p>
</div>
</div>
<div className="flex items-center gap-2 md:gap-4">
<span className="font-bold text-stone-900 text-sm md:text-base">MAD 35</span>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-coral group-hover:border-coral transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="mobile-preview lg:hidden bg-stone-900 rounded-xl mx-2 text-white" data-mobile-preview="0">
<div className="flex gap-4 p-4">
<img className="w-28 h-28 rounded-lg object-cover shrink-0" data-mp-img="" src=""/>
<div className="flex flex-col justify-center">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-1" data-mp-cat=""></span>
<h4 className="font-heading font-bold text-base" data-mp-title=""></h4>
<p className="text-stone-400 text-xs mt-1 leading-relaxed" data-mp-desc=""></p>
<p className="text-stone-300 font-bold text-sm mt-2" data-mp-price=""></p>
</div>
</div>
</div>
</div>

<div className="scroll-reveal" style={{transitionDelay: '0.1s'}}>
<div className="menu-item group cursor-pointer hover:bg-stone-100 hover:border-stone-200 flex transition-all md:p-6 bg-[#F9F8F6] w-full border-transparent border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-between" onclick="toggleDish(1, this)">
<div className="flex items-center gap-4 md:gap-6">
<span className="group-hover:text-coral transition-colors text-lg md:text-2xl font-bold text-stone-300 font-heading">02</span>
<div>
<h3 className="text-base md:text-2xl font-heading font-bold text-stone-900">Pizza Poisson
        </h3>
<p className="text-xs md:text-sm text-stone-500 mt-1">Seafood mix, mozzarella, oregano</p>
</div>
</div>
<div className="flex items-center gap-2 md:gap-4">
<span className="font-bold text-stone-900 text-sm md:text-base">MAD 45</span>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-coral group-hover:border-coral transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="mobile-preview bg-stone-900 rounded-xl text-white" data-mobile-preview="1">
<div className="flex gap-4 px-4 h-full">
<img className="w-28 h-28 rounded-lg object-cover shrink-0" data-mp-img="" src=""/>
<div className="flex flex-col justify-center">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-1" data-mp-cat=""></span>
<h4 className="font-heading font-bold text-base" data-mp-title=""></h4>
<p className="text-stone-400 text-xs mt-1 leading-relaxed" data-mp-desc=""></p>
<p className="text-stone-300 font-bold text-sm mt-2" data-mp-price=""></p>
</div>
</div>
</div>
</div>

<div className="scroll-reveal" style={{transitionDelay: '0.15s'}}>
<div className="menu-item group cursor-pointer hover:bg-stone-100 hover:border-stone-200 flex transition-all bg-[#F9F8F6] w-full border-transparent border rounded-xl p-4 md:p-6 items-center justify-between" onclick="toggleDish(2, this)">
<div className="flex items-center gap-4 md:gap-6">
<span className="group-hover:text-coral transition-colors text-lg md:text-2xl font-bold text-stone-300 font-heading">03</span>
<div>
<h3 className="text-base md:text-2xl font-heading font-bold text-stone-900">Tacos Blanco
                            </h3>
<p className="text-xs md:text-sm text-stone-500 mt-1">Chicken, cheese sauce, fries</p>
</div>
</div>
<div className="flex items-center gap-2 md:gap-4">
<span className="font-bold text-stone-900 text-sm md:text-base">MAD 40</span>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-coral group-hover:border-coral transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="mobile-preview lg:hidden bg-stone-900 rounded-xl mx-2 text-white" data-mobile-preview="2">
<div className="flex gap-4 p-4">
<img className="w-28 h-28 rounded-lg object-cover shrink-0" data-mp-img="" src=""/>
<div className="flex flex-col justify-center">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-1" data-mp-cat=""></span>
<h4 className="font-heading font-bold text-base" data-mp-title=""></h4>
<p className="text-stone-400 text-xs mt-1 leading-relaxed" data-mp-desc=""></p>
<p className="text-stone-300 font-bold text-sm mt-2" data-mp-price=""></p>
</div>
</div>
</div>
</div>

<div className="scroll-reveal" style={{transitionDelay: '0.2s'}}>
<div className="menu-item group cursor-pointer hover:bg-stone-100 hover:border-stone-200 flex transition-all bg-[#F9F8F6] w-full border-transparent border rounded-xl p-4 md:p-6 items-center justify-between" onclick="toggleDish(3, this)">
<div className="flex items-center gap-4 md:gap-6">
<span className="group-hover:text-coral transition-colors text-lg md:text-2xl font-bold text-stone-300 font-heading">04</span>
<div className="">
<h3 className="text-base md:text-2xl font-heading font-bold text-stone-900">Moroccan Tea
                            </h3>
<p className="text-xs md:text-sm text-stone-500 mt-1">Fresh mint, brewed to perfection</p>
</div>
</div>
<div className="flex items-center gap-2 md:gap-4">
<span className="font-bold text-stone-900 text-sm md:text-base">MAD 12</span>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-coral group-hover:border-coral transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="mobile-preview lg:hidden bg-stone-900 rounded-xl mx-2 text-white" data-mobile-preview="3">
<div className="flex gap-4 p-4">
<img className="w-28 h-28 rounded-lg object-cover shrink-0" data-mp-img="" src=""/>
<div className="flex flex-col justify-center">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-1" data-mp-cat=""></span>
<h4 className="font-heading font-bold text-base" data-mp-title=""></h4>
<p className="text-stone-400 text-xs mt-1 leading-relaxed" data-mp-desc=""></p>
<p className="text-stone-300 font-bold text-sm mt-2" data-mp-price=""></p>
</div>
</div>
</div>
</div>

<div className="scroll-reveal" style={{transitionDelay: '0.25s'}}>
<div className="menu-item group cursor-pointer hover:bg-stone-100 hover:border-stone-200 flex transition-all bg-[#F9F8F6] w-full border-transparent border rounded-xl p-4 md:p-6 items-center justify-between" onclick="toggleDish(4, this)">
<div className="flex items-center gap-4 md:gap-6">
<span className="group-hover:text-coral transition-colors text-lg md:text-2xl font-bold text-stone-300 font-heading">05</span>
<div>
<h3 className="text-base md:text-2xl font-heading font-bold text-stone-900">Panini Mixte
                            </h3>
<p className="text-xs md:text-sm text-stone-500 mt-1">Grilled chicken, tuna, cheese,
                                vegetables</p>
</div>
</div>
<div className="flex items-center gap-2 md:gap-4">
<span className="font-bold text-stone-900 text-sm md:text-base">MAD 30</span>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-stone-100 flex items-center justify-center text-stone-400 group-hover:text-coral group-hover:border-coral transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="mobile-preview lg:hidden bg-stone-900 rounded-xl mx-2 text-white" data-mobile-preview="4">
<div className="flex gap-4 p-4">
<img className="w-28 h-28 rounded-lg object-cover shrink-0" data-mp-img="" src=""/>
<div className="flex flex-col justify-center">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-1" data-mp-cat=""></span>
<h4 className="font-heading font-bold text-base" data-mp-title=""></h4>
<p className="text-stone-400 text-xs mt-1 leading-relaxed" data-mp-desc=""></p>
<p className="text-stone-300 font-bold text-sm mt-2" data-mp-price=""></p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden min-h-[50px] h-fit lg:h-full lg:flex w-0 overflow-hidden relative rounded-2xl bg-stone-900 text-white flex-col border border-stone-800" id="menu-preview">
<button className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-coral transition-colors" onclick="closePreview()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="h-64 w-full relative shrink-0">
<img className="absolute inset-0 w-full h-full object-cover" id="preview-img" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
</div>
<div className="w-full p-8 flex flex-col justify-start relative z-10">
<div className="mb-4">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-1 block" id="preview-cat">Category</span>
<div className="flex justify-between items-start">
<h2 className="text-2xl font-heading font-bold tracking-tight" id="preview-title">Dish Name</h2>
<p className="text-xl font-light text-stone-400 whitespace-nowrap" id="preview-price">MAD 00</p>
</div>
</div>
<p className="text-stone-400 leading-relaxed font-light text-sm mb-6" id="preview-desc">Description goes
                    here.</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 rounded-lg p-3">
<iconify-icon className="text-coral mb-2" icon="solar:fire-linear" width="24"></iconify-icon>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">Calories</p>
<p className="font-bold text-sm">450 kcal</p>
</div>
<div className="bg-white/5 rounded-lg p-3">
<iconify-icon className="text-coral mb-2" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<p className="text-[10px] text-stone-400 uppercase tracking-wider">Prep Time</p>
<p className="font-bold text-sm">15 min</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-[10%] pr-[5%] pb-[10%] pl-[5%] relative" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row scroll-reveal mb-12 items-end justify-between">
<div className="">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-2 block">Testimonials</span>
<h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 tracking-tight">What our
      <span className="text-stone-400">Guests Say</span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

<div className="review-card bg-white p-8 rounded-2xl border border-stone-100 transition-shadow flex flex-col justify-between h-full scroll-reveal" style={{transitionDelay: '0.1s'}}>
<div className="">
<div className="flex gap-1 text-coral mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"A nice place in the city center of Sefrou. The food is
      varied and the prices are reasonable. The Khlea is a must-try!"</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-700 font-bold text-xs">
      AM</div>
<div>
<p className="text-stone-900 text-sm font-bold">Ahmed M.</p>
<p className="text-stone-400 text-xs">Local Guide</p>
</div>
</div>
</div>

<div className="review-card bg-white p-8 rounded-2xl border border-stone-100 transition-shadow flex flex-col justify-between h-full scroll-reveal" style={{transitionDelay: '0.2s'}}>
<div className="">
<div className="flex gap-1 text-coral mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"Clean, modern, and the staff is very polite. The tacos
      are huge and very tasty. Highly recommended."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-700 font-bold text-xs">
      SK</div>
<div>
<p className="text-stone-900 text-sm font-bold">Sarah K.</p>
<p className="text-stone-400 text-xs">Verified Guest</p>
</div>
</div>
</div>

<div className="review-card bg-white p-8 rounded-2xl border border-stone-100 transition-shadow flex flex-col justify-between h-full scroll-reveal" style={{transitionDelay: '0.3s'}}>
<div className="">
<div className="flex gap-1 text-coral mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"Great spot for breakfast. The location on Blvd Mohamed
      V is convenient. Good coffee and fast service."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-700 font-bold text-xs">
      YB</div>
<div>
<p className="text-stone-900 text-sm font-bold">Youssef B.</p>
<p className="text-stone-400 text-xs">Local Guide</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden max-h-screen flex items-center" id="reservation">
<div className="absolute inset-0 z-0 opacity-20">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="max-w-4xl mx-auto relative z-10 bg-stone-900/80 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-stone-800 w-full">
<div className="text-center mb-8 scroll-reveal">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-2 block">Reservations</span>
<h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight">Book Your Table</h2>
<p className="text-stone-400 mt-2 text-sm">Join us for an unforgettable meal.</p>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-4 scroll-reveal" onsubmit="submitReservation(event)" style={{transitionDelay: '0.1s'}}>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Full Name</label>
<input className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-coral transition-colors" id="res-name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Phone Number</label>
<input className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-coral transition-colors" id="res-phone" placeholder="+212 600 000 000" required="" type="tel"/>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">email adress</label>
<input className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-coral transition-colors" id="res-email" placeholder="email@contact.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Date</label>
<input className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-coral transition-colors text-stone-300" id="res-date" required="" type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Time</label>
<input className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-coral transition-colors text-stone-300" id="res-time" required="" type="time"/>
</div>
<div className="space-y-1.5 md:col-span-2">
<label className="text-xs font-bold uppercase tracking-wider text-stone-500">Number of Guests</label>
<select className="w-full bg-stone-800 border border-stone-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-coral transition-colors text-stone-300" id="res-guests">
<option value="1">1 Person</option>
<option selected="" value="2">2 People</option>
<option value="3">3 People</option>
<option value="4">4 People</option>
<option value="5+">5+ People</option>
</select>
</div>
<div className="md:col-span-2 pt-2">
<button className="w-full bg-coral hover:bg-[#D94532] text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-coral/20" type="submit">
                        Confirm Reservation
                    </button>
</div>
</form>
</div>
</section>

<section className="bg-white border-stone-100 border-t pt-24 pr-[5%] pb-24 pl-[5%]" id="location">
<div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mr-auto ml-auto gap-x-2 gap-y-12">
<div className="space-y-8">
<div className="scroll-reveal">
<span className="text-coral text-xs font-bold tracking-widest uppercase mb-2 block">Visit Us</span>
<h2 className="text-3xl md:text-4xl font-heading font-bold text-stone-900 tracking-tight leading-tight">Location
      &amp; <br/><span className="text-stone-400">Hours</span></h2>
</div>
<div className="space-y-6 scroll-reveal w-full" style={{transitionDelay: '0.1s'}}>
<div className="flex gap-4">
<div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-coral shrink-0">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-1">Address</h4>
<p className="text-stone-600 text-sm leading-relaxed">Boulevard Mohamed V,<br/>Sefrou 31000, Morocco</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-[#F9F8F6] rounded-full flex items-center justify-center text-coral shrink-0">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-1">Contact</h4>
<p className="text-stone-600 text-sm leading-relaxed">05 35 68 30 89</p>
</div>
</div>
</div>
<a className="scroll-reveal inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg text-sm font-semibold hover:bg-coral transition-colors" href="https://www.google.com/maps/place/Seqqaya+:+Restaurant+%26+Pizzeria/" style={{transitionDelay: '0.2s'}} target="_blank">
    Get Directions
    <iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="lg:h-auto overflow-hidden scroll-reveal w-full h-80 rounded-2xl relative" style={{transitionDelay: '0.1s'}}>
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.937371128989!2d-4.838228989039362!3d33.82188407313314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f9bb976381eb7%3A0x777438c5e7357052!2sSeqqaya%20%3A%20Restaurant%20%26%20Pizzeria!5e1!3m2!1sen!2sma!4v1771605028620!5m2!1sen!2sma" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-stone-900 text-white pt-16 pb-8">
<div className="flex flex-col max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-10 gap-y-10 items-center">
<a className="text-3xl md:text-4xl font-heading font-bold tracking-tighter text-white" href="#">SE<span className="text-coral">QQ</span>AYA</a>
<ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-stone-300">
<li className=""><a className="hover:text-coral transition-colors" href="#about">About</a></li>
<li className=""><a className="hover:text-coral transition-colors" href="#menu">Menu</a></li>
<li className=""><a className="hover:text-coral transition-colors" href="#reviews">Reviews</a></li>
<li className=""><a className="hover:text-coral transition-colors" href="#reservation">Reservation</a></li>
<li className=""><a className="hover:text-coral transition-colors" href="#location">Location</a></li>
</ul>
<div className="flex gap-6 gap-x-6 gap-y-6">
<a className="hover:text-white transition-colors text-coral" href="https://facebook.com"><iconify-icon className="" height="28" icon="ic:baseline-facebook" width="28"></iconify-icon></a>
<a className="text-coral hover:text-white transition-colors" href="https://instagram.com">
<iconify-icon className="" height="28" icon="mdi:instagram" width="28"></iconify-icon>
</a>
<a className="text-coral hover:text-white transition-colors" href="https://whatsapp.com">
<iconify-icon className="" height="28" icon="ic:baseline-whatsapp" width="28"></iconify-icon>
</a>
<a className="text-coral hover:text-white transition-colors" href="https://gmail.com">
<iconify-icon className="" height="28" icon="solar:letter-linear" width="28"></iconify-icon>
</a>
</div>
<div className="flex flex-col md:flex-row gap-4 w-full border-stone-800 border-t mt-4 pt-4 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-stone-500 text-xs">© 2026 Seqqaya Restaurant.</p>
<div className="text-stone-500 text-xs font-medium">Sefrou, Morocco</div>
</div>
</div>
</footer>


    </>
  );
}
