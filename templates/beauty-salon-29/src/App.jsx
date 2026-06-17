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



        document.getElementById('year').textContent = new Date().getFullYear();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white">
<span className="font-bold text-sm">B</span>
</div>
                BEAUTY BODY BANGKOK
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium border border-zinc-200 rounded-full px-4 py-2 hover:bg-white hover:border-zinc-300 transition-all" href="tel:+66924458425">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    +66 92 445 8425
                </a>
<a className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-sm" href="#book">
                    Book Now
                </a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Open Daily 09:00 - 23:00
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-zinc-900 tracking-tighter leading-[1.1] mb-6">
                    Discover the best in <span className="text-zinc-400">beauty &amp; wellness.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 max-w-lg font-light leading-relaxed">
                    Located in Sukhumvit Soi 22. We offer top-quality hair, nail, skin, and massage treatments for men and women. Look and feel your best today.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2" href="#services">
                        View Services
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="bg-white border border-zinc-200 text-zinc-700 text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-50 transition-all flex items-center gap-2" href="https://maps.app.goo.gl/qukhmBx8co5WZ4V56" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                        Get Directions
                    </a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/50 to-transparent rounded-[2rem] -rotate-2 scale-[0.98]"></div>
<img alt="Beauty Salon Bangkok" className="relative w-full rounded-[2rem] shadow-xl shadow-zinc-200/50 aspect-[4/5] object-cover" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/beautiful-young-woman-smiling.webp"/>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-zinc-200 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-3">Our Services</h2>
<p className="text-zinc-500 font-light max-w-md">Comprehensive beauty treatments curated for your relaxation and style.</p>
</div>
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-200 hover:border-zinc-900 transition-all pb-0.5 w-fit" href="#">View Full Menu</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group p-2 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
<img alt="Hair Services" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/lady-giving-a-hair-cut.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 text-zinc-900">
<iconify-icon icon="solar:scissors-square-linear" width="20"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Hair Services</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">Stylish haircuts, coloring, and advanced treatments ensuring your hair looks its absolute best.</p>
</div>
</div>

<div className="group p-2 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
<img alt="Nail Services" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/lady-hand-with-nails-done-after-manicure.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 text-zinc-900">
<iconify-icon icon="solar:palette-linear" width="20"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Nail Services</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">Manicures, pedicures, and custom nail art. Keep your nails looking stunning and healthy.</p>
</div>
</div>

<div className="group p-2 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
<img alt="Massage Services" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/foot-massage-and-head-massage-at-the-same-time.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 text-zinc-900">
<iconify-icon icon="solar:hand-heart-linear" width="20"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Massage Services</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">Relax and rejuvenate. Thai massage, foot massage, and oil treatments to ease stress.</p>
</div>
</div>

<div className="group p-2 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
<img alt="Waxing Services" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/Waxing-Services.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 text-zinc-900">
<iconify-icon icon="solar:stars-linear" width="20"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Waxing Services</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">Expert waxing for smooth, hair-free skin. Designed for comfort and long-lasting results.</p>
</div>
</div>

<div className="group p-2 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
<img alt="Facial Care" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/Beautician-with-a-brush-applies-a-white-moisturizing-mask-to-the-face-of-a-young-girl-client-in-a-sp_1.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 text-zinc-900">
<iconify-icon icon="solar:face-scan-square-linear" width="20"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Facial Care</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">Refresh and rejuvenate your skin with expert facial care services and personalized treatments.</p>
</div>
</div>

<div className="group p-2 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-zinc-300 transition-all duration-300">
<div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/2]">
<img alt="Eyelash Services" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/09/Young-woman-undergoing-eyelash-extensions-procedure-closeupYoung-woman-undergoing-eyelash-extensions-procedure-cl-1024x576.webp"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-2 text-zinc-900">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
</div>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Eyelash Services</h3>
<p className="text-sm text-zinc-500 mt-2 line-clamp-2">Get full, beautiful lashes. Designed to provide comfort and stunning, lasting results.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto" id="about">
<div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 lg:p-20 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
<iconify-icon className="rotate-12" icon="solar:crown-star-linear" width="400"></iconify-icon>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-6">Why Choose<br/>Beauty Body Bangkok?</h2>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[24px] text-zinc-400">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg mb-1">Skilled Professionals</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">Our team dedicates itself to providing excellent service with years of experience.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[24px] text-zinc-400">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg mb-1">Comfortable Atmosphere</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">Our salon is made to feel like home. Relax in a welcoming environment.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 min-w-[24px] text-zinc-400">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-lg mb-1">Premium Products</h3>
<p className="text-zinc-400 font-light text-sm leading-relaxed">We use only the best products to get the best results for your skin and hair.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-zinc-700 pb-1 hover:border-white transition-colors" href="https://www.instagram.com/beau_tbb/" target="_blank">
                            View our Gallery on Instagram
                            <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-full min-h-[300px] lg:min-h-[500px] rounded-2xl overflow-hidden hidden lg:block">
<img alt="Salon Interior" className="absolute inset-0 w-full h-full object-cover" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/beauty-body-bangkok-salon.webp"/>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-3xl mx-auto" id="faq">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
<p className="text-zinc-500 mt-2 font-light">Find the answers you need.</p>
</div>
<div className="space-y-4">

<details className="group p-4 bg-white border border-zinc-200 rounded-2xl open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center cursor-pointer font-medium text-zinc-900">
                    What are your operating hours?
                    <span className="transition-transform group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm text-zinc-500 font-light leading-relaxed">
                    We are open daily from 9:00 AM to 11:00 PM. Our flexible hours make it easy for you to schedule an appointment at your convenience.
                </div>
</details>

<details className="group p-4 bg-white border border-zinc-200 rounded-2xl open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center cursor-pointer font-medium text-zinc-900">
                    What payment methods do you accept?
                    <span className="transition-transform group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm text-zinc-500 font-light leading-relaxed">
                    We accept cash, Thai bank transfer, QR code payment, and all major debit or credit cards.
                </div>
</details>

<details className="group p-4 bg-white border border-zinc-200 rounded-2xl open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center cursor-pointer font-medium text-zinc-900">
                    Do I need to make an appointment?
                    <span className="transition-transform group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm text-zinc-500 font-light leading-relaxed">
                    Walk-ins are welcome. However, appointments are recommended to ensure availability and cut wait times. You can book by phone, email, or online.
                </div>
</details>

<details className="group p-4 bg-white border border-zinc-200 rounded-2xl open:ring-1 open:ring-zinc-200">
<summary className="flex justify-between items-center cursor-pointer font-medium text-zinc-900">
                    What products do you use?
                    <span className="transition-transform group-open:rotate-180 text-zinc-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm text-zinc-500 font-light leading-relaxed">
                    We use high-quality, professional-grade products for all our services. Selected for safety and effectiveness to ensure the best results.
                </div>
</details>
</div>
</section>

<section className="py-20 px-6 border-t border-zinc-200 bg-white" id="contact">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
<img alt="Consultation" className="absolute inset-0 w-full h-full object-cover" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/pedicure-chair-in-a-beauty-salon.webp"/>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tighter text-zinc-900 mb-6">
                    Free Consultation.
                </h2>
<div className="space-y-4 text-zinc-500 font-light leading-relaxed mb-8">
<p>Wondering how much our services cost? Come in for a free consultation with no obligations.</p>
<p>Our friendly staff will provide you with a personalized quote and professional advice. Don’t forget to bring photos of styles you like.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-zinc-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-zinc-800 transition-all flex justify-center items-center gap-2" href="tel:+66813230046">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        Call Us Now
                    </a>
<a className="bg-white border border-zinc-200 text-zinc-900 text-sm font-medium px-8 py-3 rounded-full hover:bg-zinc-50 transition-all flex justify-center items-center gap-2" href="https://line.me/ti/p/~beautybodybangkok">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                        Line Chat
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Latest from the Blog</h2>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Read all</a>
</div>
<div className="grid md:grid-cols-3 gap-6">
<a className="group block" href="#">
<div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<img alt="Thai Massage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/09/the-origin-of-thai-massage-768x432.webp"/>
</div>
<p className="text-xs font-medium text-zinc-400 mb-2">Thai Massage</p>
<h3 className="text-base font-medium text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors">Discover Why Thai Massage is Loved</h3>
</a>
<a className="group block" href="#">
<div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<img alt="Eyelashes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/09/stunning-womans-long-eyelashes-768x432.webp"/>
</div>
<p className="text-xs font-medium text-zinc-400 mb-2">Eyelash</p>
<h3 className="text-base font-medium text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors">Eyelash Extensions in Bangkok: The Ultimate Guide</h3>
</a>
<a className="group block" href="#">
<div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<img alt="Men Salon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://beautybodybangkok.com/wp-content/uploads/2024/06/image-7-768x384.jpeg"/>
</div>
<p className="text-xs font-medium text-zinc-400 mb-2">Hair Treatments</p>
<h3 className="text-base font-medium text-zinc-900 leading-snug group-hover:text-zinc-600 transition-colors">How to Choose the Right Beauty Salon for Men</h3>
</a>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 py-16 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
<div className="col-span-1 lg:col-span-1">
<a className="text-lg font-bold tracking-tighter text-zinc-900 mb-6 block" href="#">BEAUTY BODY.</a>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
                        265/1 Sukhumvit Alley 22<br/>
                        Khlong Tan, Khlong Toei<br/>
                        Bangkok 10110, Thailand
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Sitemap</h4>
<ul className="space-y-2 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500 font-light">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Connect</h4>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all" href="https://www.facebook.com/profile.php?id=61555672994677">
<iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all" href="https://www.instagram.com/beau_tbb/">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all" href="mailto:info@beautybodybangkok.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 font-light">
<p>© <span id="year">2024</span> Beauty Body Bangkok. All rights reserved.</p>
<div className="flex gap-4">
<span>English</span>
<a className="hover:text-zinc-600" href="#">ไทย</a>
<a className="hover:text-zinc-600" href="#">简体中文</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
