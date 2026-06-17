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
brand: {
green: '#76b82a',
dark: '#1a1a1a',
light: '#f9f9f9',
}
},
fontFamily: {
sans: ['Open Sans', 'sans-serif'],
heading: ['Poppins', 'sans-serif'],
},
backgroundImage: {
'brand-gradient': 'linear-gradient(to right, #ffb400, #ff9000)',
'brand-gradient-hover': 'linear-gradient(to right, #ff9000, #ffb400)',
}
}
}
}



        // 1. Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });

        // 2. Sticky Header Logic
        const header = document.getElementById('main-header');
        const backToTop = document.getElementById('backToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.remove('bg-transparent', 'py-4');
                header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
            } else {
                header.classList.add('bg-transparent', 'py-4');
                header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-2');
            }

            if (window.scrollY > 300) {
                backToTop.classList.remove('translate-y-20', 'opacity-0');
            } else {
                backToTop.classList.add('translate-y-20', 'opacity-0');
            }
        });

        // 3. Hero Mouse Parallax
        const heroSection = document.getElementById('home');
        const floatingElements = document.querySelectorAll('.floating-element');

        heroSection.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;

            floatingElements.forEach(el => {
                const speed = el.getAttribute('data-speed');
                const xPos = x * speed;
                const yPos = y * speed;
                el.style.transform = `translate(${xPos}px, ${yPos}px)`;
            });
        });

        // 4. Ingredient Tabs Logic
        const ingredients = [
            {
                title: "Tribulus Terrestris",
                desc: "A powerful plant extract used for centuries to support vitality and muscle strength. Our concentrated extract ensures you get the maximum saponin content for peak hormonal balance.",
                img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Guarana Extract",
                desc: "Natural source of caffeine that provides a sustained energy release without the crash. Packed with antioxidants to fight fatigue and improve focus during intense workouts.",
                img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                title: "Beta Carotene",
                desc: "Essential for immune health and vision, this powerful antioxidant also aids in recovery by reducing oxidative stress caused by heavy lifting and endurance training.",
                img: "https://images.unsplash.com/photo-1590868309235-ea34bed7bd7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ];

        function changeIngredient(index) {
            const title = document.getElementById('ing-title');
            const desc = document.getElementById('ing-desc');
            const img = document.getElementById('ing-image');
            const btns = document.querySelectorAll('.ingredient-btn');

            // Fade out
            title.style.opacity = '0';
            desc.style.opacity = '0';
            img.style.opacity = '0';
            title.style.transform = 'translateY(10px)';

            // Update Active State
            btns.forEach(btn => btn.classList.remove('ingredient-active'));
            btns[index].classList.add('ingredient-active');

            setTimeout(() => {
                // Change Content
                title.innerText = ingredients[index].title;
                desc.innerText = ingredients[index].desc;
                img.src = ingredients[index].img;

                // Fade In
                title.style.opacity = '1';
                desc.style.opacity = '1';
                img.style.opacity = '1';
                title.style.transform = 'translateY(0)';
            }, 400);
        }

        // 5. Video Modal Logic
        const modal = document.getElementById('videoModal');
        function toggleVideo() {
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            } else {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }

        // 6. Swiper Initialization
        const swiper = new Swiper('.product-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300" id="main-header">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-heading font-semibold text-2xl tracking-tight text-brand-dark group-hover:text-brand-green transition-colors">MuscleUp</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="font-medium text-sm hover:text-brand-green transition-colors" href="#home">Home</a>
<a className="font-medium text-sm hover:text-brand-green transition-colors" href="#features">Features</a>
<a className="font-medium text-sm hover:text-brand-green transition-colors" href="#ingredients">Ingredients</a>
<a className="font-medium text-sm hover:text-brand-green transition-colors" href="#products">Products</a>
<a className="font-medium text-sm hover:text-brand-green transition-colors" href="#reviews">Reviews</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-block px-6 py-2.5 rounded-full bg-brand-gradient font-semibold text-sm shadow-lg shadow-orange-500/30 hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300 text-white" href="#products">
                    Order Now
                </a>

<button className="md:hidden text-brand-dark">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="1.5" height="24" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-white to-gray-50" id="home">

<div className="overflow-hidden w-full h-full absolute top-0 right-0 bottom-0 left-0" id="hero-scene">


<div className="floating-element top-[15%] left-[10%] text-brand-green/20" data-speed="2" style={{transform: 'translate(-15.72px, 18.6px)'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="64" data-icon="lucide:leaf" data-rotate="45deg" data-width="1.5" height="64" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
</div>

<div className="floating-element bottom-[20%] right-[10%] text-red-500/30" data-speed="-2" style={{transform: 'translate(15.72px, -18.6px)'}}>
<div className="w-8 h-8 rounded-full bg-red-500/20 blur-sm"></div>
<svg aria-hidden="true" className="iconify absolute top-0 iconify--lucide" data-height="48" data-icon="lucide:cherry" data-width="1.5" height="48" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3m10 0a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3"></path><path d="M7 14c3.22-2.91 4.29-8.75 5-12c1.66 2.38 4.94 9 5 12"></path><path d="M22 9c-4.29 0-7.14-2.33-10-7c5.71 0 10 4.67 10 7"></path></g></svg>
</div>

<div className="floating-element top-[60%] left-[5%] text-yellow-400/30" data-speed="1" style={{transform: 'translate(-7.86px, 9.3px)'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="56" data-icon="lucide:droplets" data-width="1.5" height="56" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>

<div className="floating-element top-[20%] right-[20%] text-yellow-500/20" data-speed="-1.5" style={{transform: 'translate(11.79px, -13.95px)'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="72" data-icon="lucide:flower-2" data-width="1.5" height="72" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">

<div className="order-2 lg:order-1 text-center lg:text-left aos-init aos-animate" data-aos="fade-right">
<span className="inline-block py-1 px-3 rounded-full bg-brand-green/10 text-brand-green font-semibold text-xs tracking-wider mb-4">PREMIUM NUTRITION</span>
<h1 className="font-heading font-semibold text-5xl lg:text-7xl leading-[1.1] text-brand-dark mb-6 tracking-tight">
                    Mix Protein <br/> <span className="text-brand-green">Provided Way</span> <br/> To Growth.
                </h1>
<p className="text-lg text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0">
                    Experience increased energy and faster recovery with MuscleUp. The innovative formula designed for your peak performance.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="px-8 py-4 rounded-full bg-brand-gradient font-semibold text-base shadow-xl shadow-orange-500/30 hover:scale-105 hover:brightness-110 transition-all duration-300 text-white" href="#products">
                        Shop Now
                    </a>
<a className="px-8 py-4 rounded-full text-brand-dark border font-semibold text-base transition-all duration-300 flex items-center gap-2 justify-center bg-white border-gray-200 hover:bg-gray-50" href="#ingredients">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flask-conical" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        View Ingredients
                    </a>
</div>
</div>

<div className="order-1 lg:order-2 relative flex justify-center aos-init aos-animate" data-aos="fade-left">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-green/10 rounded-full filter blur-3xl"></div>

<div className="relative w-full max-w-md floating-element" data-speed="0" style={{position: 'relative', transform: 'translate(0px, 0px)'}}>
<img alt="M3 Whey Gold" className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" style={{maskImage: 'linear-gradient(black 80%, transparent 100%)'}}/>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-20 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 aos-init" data-aos="fade-up">
<h2 className="font-heading font-semibold text-3xl lg:text-4xl text-brand-dark mb-4 tracking-tight">Why Choose MuscleUp?</h2>
<div className="w-16 h-1 bg-brand-green mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-2xl border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-gray-100 shadow-gray-200/50 aos-init" data-aos="fade-up" data-aos-delay="0">
<div className="w-12 h-12 rounded-lg flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors bg-green-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:vegan" data-width="1.5" height="24" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8q6 0 6-6q-6 0-6 6"></path><path d="M17.41 3.59a10 10 0 1 0 3 3"></path><path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"></path></g></svg>
</div>
<h3 className="font-heading font-semibold text-lg text-brand-dark mb-3">Dietary Supplement</h3>
<p className="text-sm leading-relaxed">100% natural ingredients sourced from organic farms ensuring purity.</p>
</div>

<div className="group p-8 rounded-2xl border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-gray-100 shadow-gray-200/50 aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="w-12 h-12 rounded-lg flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors bg-green-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:flask-conical" data-width="1.5" height="24" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-heading font-semibold text-lg text-brand-dark mb-3">Formula Innovative</h3>
<p className="text-sm leading-relaxed">Scientifically backed composition for maximum absorption and effect.</p>
</div>

<div className="group p-8 rounded-2xl border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-gray-100 shadow-gray-200/50 aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="w-12 h-12 rounded-lg flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors bg-green-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:shield-check" data-width="1.5" height="24" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="font-heading font-semibold text-lg text-brand-dark mb-3">Certified Quality</h3>
<p className="text-sm leading-relaxed">Lab tested for heavy metals and banned substances. Safe for athletes.</p>
</div>

<div className="group p-8 rounded-2xl border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white border-gray-100 shadow-gray-200/50 aos-init" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 rounded-lg flex items-center justify-center text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors bg-green-50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:rocket" data-width="1.5" height="24" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="font-heading font-semibold text-lg text-brand-dark mb-3">Fast Results</h3>
<p className="text-sm leading-relaxed">Feel the difference in your energy levels within the first week of use.</p>
</div>
</div>
</div>
</section>

<section className="py-12 border-y relative overflow-hidden bg-green-50/50 border-green-100">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%2376b82a\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10 aos-init" data-aos="zoom-in">
<div className="flex items-center gap-4 mb-4">
<div className="h-[1px] w-12 md:w-24 bg-brand-green"></div>
<div className="w-20 h-20 rounded-full bg-gradient-to-br to-yellow-500 flex items-center justify-center shadow-lg ring-4 from-yellow-300 ring-white">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="40" data-icon="lucide:award" data-width="1.5" height="40" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div className="h-[1px] w-12 md:w-24 bg-brand-green"></div>
</div>
<h3 className="font-heading font-semibold text-xl md:text-2xl text-brand-dark">100% Guaranteed Potency</h3>
<p className="text-sm text-gray-500 mt-2">Tested for maximum testosterone support</p>
</div>
</section>

<section className="py-24 relative bg-white" id="ingredients">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="aos-init" data-aos="fade-right">
<span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-2 block">Natural Power</span>
<h2 className="font-heading font-semibold text-4xl text-brand-dark mb-6 tracking-tight ingredient-content" id="ing-title">Tribulus Terrestris</h2>
<p className="text-lg leading-relaxed mb-10 ingredient-content" id="ing-desc">
                        A powerful plant extract used for centuries to support vitality and muscle strength. Our concentrated extract ensures you get the maximum saponin content for peak hormonal balance.
                    </p>

<div className="flex flex-wrap gap-4">
<button className="ingredient-btn ingredient-active w-16 h-16 rounded-xl border flex items-center justify-center hover:shadow-md transition-all border-gray-200" onclick="changeIngredient(0)">
<svg aria-hidden="true" className="iconify text-green-600 iconify--lucide" data-height="28" data-icon="lucide:leaf" data-width="1.5" height="28" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
</button>
<button className="ingredient-btn w-16 h-16 rounded-xl border flex items-center justify-center hover:shadow-md transition-all border-gray-200" onclick="changeIngredient(1)">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-height="28" data-icon="lucide:cherry" data-width="1.5" height="28" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3m10 0a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3c-2.5-2-5 .24-5 3"></path><path d="M7 14c3.22-2.91 4.29-8.75 5-12c1.66 2.38 4.94 9 5 12"></path><path d="M22 9c-4.29 0-7.14-2.33-10-7c5.71 0 10 4.67 10 7"></path></g></svg>
</button>
<button className="ingredient-btn w-16 h-16 rounded-xl border flex items-center justify-center hover:shadow-md transition-all border-gray-200" onclick="changeIngredient(2)">
<svg aria-hidden="true" className="iconify text-orange-500 iconify--lucide" data-height="28" data-icon="lucide:carrot" data-width="1.5" height="28" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"></path><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9"></path><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2"></path></g></svg>
</button>
</div>
</div>

<div className="relative h-[400px] bg-brand-light rounded-3xl overflow-hidden shadow-2xl ingredient-content aos-init" data-aos="fade-left" id="ing-image-container">
<img alt="Ingredient" className="absolute inset-0 w-full h-full object-cover" id="ing-image" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/40"></div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&amp'}}>
<div className="absolute inset-0 bg-brand-dark/70"></div>
<div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
<button className="group relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 bg-white" onclick="toggleVideo()">
<span className="absolute inline-flex h-full w-full rounded-full opacity-20 animate-ping bg-white"></span>
<svg aria-hidden="true" className="iconify text-brand-green ml-1 iconify--lucide" data-height="32" data-icon="lucide:play" data-width="1.5" height="32" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<h2 className="mt-8 font-heading font-semibold text-3xl tracking-tight text-white">Watch How It Works</h2>
<p className="mt-2 text-gray-300">See the transformation journey</p>
</div>
</section>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4 bg-black/90" id="videoModal">
<div className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border bg-black border-gray-800">
<button className="absolute top-4 right-4 z-20 hover:text-brand-green text-white" onclick="toggleVideo()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="32" data-icon="lucide:x" data-width="1.5" height="32" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="Video placeholder"></iframe>
</div>
</div>

<section className="py-24 bg-brand-light" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 aos-init" data-aos="fade-up">
<div>
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-brand-dark tracking-tight">Top Sellers</h2>
<p className="text-gray-500 mt-2">Fuel your body with the best</p>
</div>

<div className="flex gap-2">
<button aria-controls="swiper-wrapper-e7f7dceb71452dc10" aria-label="Previous slide" className="swiper-button-prev-custom w-10 h-10 rounded-full border flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all border-gray-300 hover:text-white" tabindex="0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button aria-controls="swiper-wrapper-e7f7dceb71452dc10" aria-label="Next slide" className="swiper-button-next-custom w-10 h-10 rounded-full border flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all border-gray-300 hover:text-white" tabindex="0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="swiper product-swiper !pb-12 swiper-initialized swiper-horizontal swiper-backface-hidden aos-init" data-aos="fade-up" data-aos-delay="200">
<div aria-live="polite" className="swiper-wrapper" id="swiper-wrapper-e7f7dceb71452dc10">

<div aria-label="1 / 4" className="swiper-slide swiper-slide-active" data-swiper-slide-index="0" role="group" style={{width: '390.667px', marginRight: '30px'}}>
<div className="rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border group bg-white border-gray-100">
<div className="relative h-64 flex items-center justify-center rounded-xl mb-6 bg-gray-50">
<img alt="Product" className="h-48 object-contain group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<h3 className="font-heading font-semibold text-xl text-brand-dark mb-1">Serious Mass Gold</h3>
<p className="text-xs text-gray-500 mb-4">Whey Protein Isolate</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-brand-green">$89.99</span>
<button className="p-2 rounded-full bg-brand-dark hover:bg-brand-green transition-colors text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>

<div aria-label="2 / 4" className="swiper-slide swiper-slide-next" data-swiper-slide-index="1" role="group" style={{width: '390.667px', marginRight: '30px'}}>
<div className="rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border group bg-white border-gray-100">
<div className="relative h-64 flex items-center justify-center rounded-xl mb-6 bg-gray-50">
<img alt="Product" className="h-48 object-contain group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<h3 className="font-heading font-semibold text-xl text-brand-dark mb-1">Testo Booster</h3>
<p className="text-xs text-gray-500 mb-4">Hormonal Support</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-brand-green">$49.99</span>
<button className="p-2 rounded-full bg-brand-dark hover:bg-brand-green transition-colors text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>

<div aria-label="3 / 4" className="swiper-slide" data-swiper-slide-index="2" role="group" style={{width: '390.667px', marginRight: '30px'}}>
<div className="rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border group bg-white border-gray-100">
<div className="relative h-64 flex items-center justify-center rounded-xl mb-6 bg-gray-50">
<img alt="Product" className="h-48 object-contain group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" style={{filter: 'hue-rotate(90deg)'}}/>
</div>
<h3 className="font-heading font-semibold text-xl text-brand-dark mb-1">Pre-Workout X</h3>
<p className="text-xs text-gray-500 mb-4">Explosive Energy</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-brand-green">$34.99</span>
<button className="p-2 rounded-full bg-brand-dark hover:bg-brand-green transition-colors text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>

<div aria-label="4 / 4" className="swiper-slide" data-swiper-slide-index="3" role="group" style={{width: '390.667px', marginRight: '30px'}}>
<div className="rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border group bg-white border-gray-100">
<div className="relative h-64 flex items-center justify-center rounded-xl mb-6 bg-gray-50">
<img alt="Product" className="h-48 object-contain group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1579722820308-d74e571900a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" style={{filter: 'hue-rotate(180deg)'}}/>
</div>
<h3 className="font-heading font-semibold text-xl text-brand-dark mb-1">BCAA Recovery</h3>
<p className="text-xs text-gray-500 mb-4">Post-Workout</p>
<div className="flex items-center justify-between">
<span className="text-lg font-bold text-brand-green">$29.99</span>
<button className="p-2 rounded-full bg-brand-dark hover:bg-brand-green transition-colors text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</button>
</div>
</div>
</div>
</div>
<div className="swiper-pagination mt-8 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span aria-current="true" aria-label="Go to slide 1" className="swiper-pagination-bullet swiper-pagination-bullet-active" role="button" tabindex="0"></span><span aria-label="Go to slide 2" className="swiper-pagination-bullet" role="button" tabindex="0"></span><span aria-label="Go to slide 3" className="swiper-pagination-bullet" role="button" tabindex="0"></span><span aria-label="Go to slide 4" className="swiper-pagination-bullet" role="button" tabindex="0"></span></div>
<span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span><span aria-atomic="true" aria-live="assertive" className="swiper-notification"></span></div>
</div>
</section>

<section className="py-24 relative bg-white">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
<svg className="relative block w-[calc(100%+1.3px)] h-[50px] fill-brand-light" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 pt-12">
<h2 className="font-heading font-semibold text-3xl text-center text-brand-dark mb-12 tracking-tight aos-init" data-aos="fade-up">Bundle &amp; Save</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-2xl p-8 relative overflow-hidden group border bg-gray-50 border-gray-100 aos-init" data-aos="fade-up" data-aos-delay="0">
<div className="absolute top-4 right-4 bg-brand-green text-xs font-bold px-3 py-1 rounded-full z-10 text-white">SAVE 14%</div>
<div className="h-40 flex justify-center mb-6">
<img className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-heading font-semibold text-lg text-brand-dark">Starter Pack</h3>
<p className="text-sm text-gray-500 mb-6">1 Month Supply</p>
<button className="w-full py-3 rounded-lg border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green transition-colors hover:text-white">Buy Now - $75</button>
</div>

<div className="bg-brand-dark rounded-2xl p-8 relative overflow-hidden group transform md:-translate-y-4 shadow-2xl aos-init" data-aos="fade-up" data-aos-delay="100">
<div className="absolute top-4 right-4 bg-brand-gradient text-xs font-bold px-3 py-1 rounded-full z-10 text-white">SAVE 25%</div>
<div className="h-40 flex justify-center mb-6">
<img className="h-full object-contain opacity-90 group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<img className="h-full object-contain -ml-12 opacity-90 group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-heading font-semibold text-lg text-white">Pro Stack</h3>
<p className="text-sm mb-6 text-gray-400">3 Month Supply</p>
<button className="w-full py-3 rounded-lg bg-brand-gradient font-semibold hover:brightness-110 transition-colors shadow-lg shadow-orange-500/20 text-white">Buy Now - $199</button>
</div>

<div className="rounded-2xl p-8 relative overflow-hidden group border bg-gray-50 border-gray-100 aos-init" data-aos="fade-up" data-aos-delay="200">
<div className="absolute top-4 right-4 bg-brand-green text-xs font-bold px-3 py-1 rounded-full z-10 text-white">SAVE 40%</div>
<div className="h-40 flex justify-center mb-6">
<img className="h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<img className="h-full object-contain -ml-8 mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<img className="h-full object-contain -ml-8 mix-blend-multiply group-hover:scale-110 transition-transform" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<h3 className="font-heading font-semibold text-lg text-brand-dark">Ultimate Beast</h3>
<p className="text-sm text-gray-500 mb-6">6 Month Supply</p>
<button className="w-full py-3 rounded-lg border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green transition-colors hover:text-white">Buy Now - $350</button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-brand-light border-t border-gray-200">
<div className="max-w-4xl mx-auto px-6 aos-init" data-aos="fade-up">
<h4 className="font-heading font-semibold text-sm uppercase mb-8 tracking-widest text-center text-gray-400">Scientific References</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-xs text-gray-500">
<div className="flex gap-3">
<span className="font-bold text-brand-green">01</span>
<p>Smith, J. et al. (2020). "Effects of Tribulus Terrestris on Athletic Performance." Journal of Sports Science, 12(3), 45-52.</p>
</div>
<div className="flex gap-3">
<span className="font-bold text-brand-green">02</span>
<p>Doe, R. (2019). "Whey Protein Isolate vs Concentrate: Absorption Rates." Nutrition Reviews, 8(1), 112-118.</p>
</div>
<div className="flex gap-3">
<span className="font-bold text-brand-green">03</span>
<p>Williams, K. (2021). "Herbal Adaptogens and Cortisol Regulation in Athletes." International Journal of Herbal Medicine.</p>
</div>
<div className="flex gap-3">
<span className="font-bold text-brand-green">04</span>
<p>Chen, L. et al. (2022). "Long-term safety of BCAA supplementation." Clinical Nutrition Today, 15(4).</p>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark pt-20 pb-10 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-heading font-semibold text-xl tracking-tight">MuscleUp</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-gray-400">
                        Dedicated to providing the cleanest, most effective sports nutrition to athletes worldwide.
                    </p>
<div className="flex gap-4">
<a className="hover:text-brand-green transition-colors text-gray-400" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-brand-green transition-colors text-gray-400" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-brand-green transition-colors text-gray-400" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>

<div>
<h5 className="font-heading font-semibold mb-6 text-white">Quick Links</h5>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-brand-green transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Products</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Lab Results</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h5 className="font-heading font-semibold mb-6 text-white">Support</h5>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-brand-green transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Track Order</a></li>
</ul>
</div>

<div>
<h5 className="font-heading font-semibold mb-6 text-white">Contact</h5>
<ul className="space-y-3 text-sm text-gray-400">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-brand-green mt-1 iconify--lucide" data-icon="lucide:map-pin" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span>123 Fitness Blvd,Muscle City, CA 90210</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-brand-green iconify--lucide" data-icon="lucide:mail" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span>support@muscleup.com</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-brand-green iconify--lucide" data-icon="lucide:phone" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>+1 (800) 123-4567</span>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 text-center text-xs text-gray-500 border-gray-800">
<p>© 2023 MuscleUp Inc. All rights reserved.</p>
</div>
</div>
</footer>

<button className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-brand-green shadow-lg flex items-center justify-center transition-all duration-300 z-40 hover:bg-brand-dark text-white" id="backToTop" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up" data-width="1.5" height="1.5" role="img" viewbox="0 0 24 24" width="1.5" xmlns="http://www.w3.org/2000/svg"><path d="m5 12l7-7l7 7m-7 7V5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>





    </>
  );
}
