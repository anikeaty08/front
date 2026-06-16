import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
}
},
animation: {
'scroll': 'scroll 40s linear infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Reveal Animation on Scroll
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = mobileMenu.querySelectorAll('a');

        function toggleMenu() {
            mobileMenu.classList.toggle('-translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        
        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Sticky Header Transition
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.classList.add('bg-white');
                navbar.classList.remove('bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.remove('bg-white');
                navbar.classList.add('bg-white/95');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-stone-100" id="navbar">
<div className="md:px-8 md:h-24 flex h-20 max-w-[95%] mr-auto ml-auto pr-4 pl-4 relative items-center justify-between">

<button className="md:hidden absolute left-4 z-50 text-stone-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button><nav className="hidden md:flex flex-1 gap-8 uppercase text-xs font-medium tracking-widest gap-x-8 gap-y-8 justify-start">
<a className="hover:text-stone-500 transition-colors" href="#story">The Story</a>
<a className="hover:text-stone-500 transition-colors" href="#menu">Menu</a>
<a className="hover:text-stone-500 transition-colors" href="#order">Order Online</a>
</nav>


<div className="flex-shrink-0 mx-auto z-50">
<a className="flex flex-col items-center" href="#">
<span className="md:text-2xl uppercase text-xl font-bold tracking-tight border-stone-900 border-2 pt-1 pr-3 pb-1 pl-3 -translate-x-16">Green Crow</span>
<span className="text-[10px] uppercase tracking-[0.3em] mt-1 -translate-x-16">Tacos</span>
</a>
</div>

<nav className="hidden md:flex flex-1 justify-end items-center gap-8 text-xs tracking-widest uppercase font-medium">
<a className="hover:text-stone-500 transition-colors" href="#guestchef">Guest Chef</a>
<a className="hover:text-stone-500 transition-colors" href="#giftcards">Gift Cards</a>
<a className="hover:text-stone-500 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-stone-500 transition-colors" href="#blog">Blog</a>
<div className="flex items-center gap-4 ml-4 pl-4 border-l border-stone-200">
<a aria-label="Facebook" className="hover:text-stone-500 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a aria-label="Instagram" className="hover:text-stone-500 transition-colors" href="#">
<iconify-icon className="" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
</div>
</nav>

<div className="md:hidden absolute right-4 flex gap-4">
<a className="hover:text-stone-500 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</header>

<div className="fixed inset-0 bg-white z-40 transform -translate-x-full transition-transform duration-500 flex flex-col justify-center items-center gap-8 md:hidden" id="mobile-menu">
<a className="text-xl tracking-tight font-medium hover:text-stone-500" href="#story">The Story</a>
<a className="text-xl tracking-tight font-medium hover:text-stone-500" href="#menu">Menu</a>
<a className="text-xl tracking-tight font-medium hover:text-stone-500" href="#order">Order Online</a>
<a className="text-xl tracking-tight font-medium hover:text-stone-500" href="#guestchef">Guest Chef</a>
<a className="text-xl tracking-tight font-medium hover:text-stone-500" href="#giftcards">Gift Cards</a>
<a className="text-xl tracking-tight font-medium hover:text-stone-500" href="#gallery">Gallery</a>
<a className="text-xl tracking-tight font-medium hover:text-stone-500" href="#blog">Blog</a>
<button className="absolute top-6 left-4" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

<section className="relative h-[50vh] mt-20 md:mt-24 w-full overflow-hidden bg-stone-100">
<div className="flex animate-scroll w-[200%] h-full">

<div className="flex w-1/2 h-full">
<img alt="IMG_9740.jpeg" className="" data-image="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg" data-image-dimensions="1125x1560" data-image-focal-point="0.5,0.5" data-load="false" data-loader="sqs" data-src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg" decoding="async" elementtiming="nbf-gallery-reel-item" height="1560" loading="lazy" sizes="36.05769230769231vh" src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg" srcset="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0259ffa0-7d25-4709-872c-5e67bc7474ab/IMG_9740.jpeg?format=2500w 2500w" style={{display: 'block', objectPosition: '50% 50%', objectFit: 'cover', width: '100%', height: '100%'}} width="1125"/>
<img alt="4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg" className="" data-image="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg" data-image-dimensions="1620x1670" data-image-focal-point="0.5,0.5" data-load="false" data-loader="sqs" data-src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg" decoding="async" elementtiming="nbf-gallery-reel-item" height="1670" loading="lazy" sizes="48.50299401197605vh" src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg" srcset="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/7ac7296f-d93e-45df-acb4-2b94fb17027e/4D66D6E2-A63A-4F63-96B2-138F7EEEADF0.jpeg?format=2500w 2500w" style={{display: 'block', objectPosition: '50% 50%', objectFit: 'cover', width: '100%', height: '100%'}} width="1620"/>
<img alt="E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg" className="" data-image="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg" data-image-dimensions="1440x1800" data-image-focal-point="0.5,0.5" data-load="false" data-loader="sqs" data-src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg" decoding="async" elementtiming="nbf-gallery-reel-item" height="1800" loading="lazy" sizes="40vh" src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg" srcset="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/efb285ee-f682-4607-b6ef-9dde883cd328/E8DB11FA-8DB6-46DD-A025-F88277F9D7FD.jpeg?format=2500w 2500w" style={{display: 'block', objectPosition: '50% 50%', objectFit: 'cover', width: '100%', height: '100%'}} width="1440"/>
<img alt="E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" className="" data-image="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" data-image-dimensions="2964x2964" data-image-focal-point="0.5,0.5" data-load="false" data-loader="sqs" data-src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" decoding="async" elementtiming="nbf-gallery-reel-item" height="2964" loading="lazy" sizes="50vh" src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" srcset="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=2500w 2500w" style={{display: 'block', objectPosition: '50% 50%', objectFit: 'cover', width: '100%', height: '100%'}} width="2964"/>
</div>

<div className="flex h-full w-1/2">
<img alt="Tacos" className="h-full w-1/4 object-cover" src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&amp;w=1980&amp;auto=format&amp;fit=crop"/>
<img alt="Ambience" className="h-full w-1/4 object-cover" src="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&amp;w=1919&amp;auto=format&amp;fit=crop"/>
<img alt="Ingredients" className="h-full w-1/4 object-cover" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&amp;w=2157&amp;auto=format&amp;fit=crop"/>
<img alt="Cocktails" className="h-full w-1/4 object-cover" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
</section>

<section className="reveal active md:px-12 pt-24 pr-6 pb-24 pl-6">
<div className="text-center max-w-4xl mr-auto ml-auto space-y-12">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900">
      “Real Food”
    </h1>
<div className="space-y-8 text-base md:text-lg font-light leading-relaxed text-stone-700">
<p className="grayscale-0">
  We seek to integrate <span className="font-medium text-stone-900">creative, approachable food</span> and sustainable
  practices that nourish the soul and our environment. We embrace the belief that food has the power to
  <em className="font-serif italic text-stone-900">unite</em>.
</p>
<p className="">
        We use intentionally sourced and
        <span className="font-medium text-stone-900">predominantly organic ingredients</span>. We source ethically raised
        meats. We support small production natural wines, spirits, and beers. We support our local farmers, artisans,
        and community groups.
      </p>
<p className="">
        We do not use industrial seed oils or GMO products. We use compostable products and compost our usable waste. We
        encourage a healthy work/life balance for our team. We are committed to continuously improving our standards.
      </p>
<p className="text-xl md:text-2xl font-medium text-stone-900 pt-4 font-serif italic">
        Our bodies are gardens to be tended.
      </p>
</div>
<div className="pt-8 border-t border-stone-100 max-w-2xl mx-auto">
<p className="text-sm text-stone-500 font-light">
        Green Crow Taco Company is a uniquely Northwest proof of concept project from Chef/Owner Kyle Nicholson that
        harmonizes social &amp; environmental initiatives with great tasting food to nourish the soul.
      </p>
</div>
</div>
</section>

<section className="md:py-24 md:px-12 reveal bg-zinc-50 px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">

<div className="order-2 md:order-1 space-y-6 text-center md:text-left">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-snug">
        Tacos are the primary focus of the project for their simple yet vast possibilities.
      </h2>
<p className="text-stone-600 font-light text-base md:text-lg leading-relaxed">
        I creatively combine traditional preparations with predominantly local and foraged ingredients for tacos that
        pay homage to their Latin American origins, and are truly Pacific Northwestern.
      </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-1 transition-all text-sm font-medium uppercase tracking-wider" href="#story">
          Learn more about our story
          <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 md:order-2">
<div className="aspect-square w-full relative overflow-hidden bg-stone-200">
<img alt="9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg" className="" data-image="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg" data-image-dimensions="3024x3780" data-image-focal-point="0.5,0.5" data-load="false" data-loader="sqs" data-src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg" decoding="async" elementtiming="nbf-gallery-reel-item" height="3780" loading="lazy" sizes="40vh" src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg" srcset="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/d9588ed7-8273-4367-a7cd-6b67c1379bce/9E527A5E-67E0-4919-B40A-104E5B5E1E35.jpeg?format=2500w 2500w" style={{display: 'block', objectPosition: '50% 50%', objectFit: 'cover', width: '100%', height: '100%'}} width="3024"/>
</div>
</div>
</div>
</section>

<section className="md:py-24 md:px-12 reveal bg-white pt-12 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

<div className="order-1">
<div className="aspect-square w-full relative overflow-hidden bg-stone-200">
<img alt="E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" className="" data-image="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" data-image-dimensions="2964x2964" data-image-focal-point="0.5,0.5" data-load="false" data-loader="sqs" data-src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" decoding="async" elementtiming="nbf-gallery-reel-item" height="2964" loading="lazy" sizes="50vh" src="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg" srcset="https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=100w 100w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=300w 300w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=500w 500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=750w 750w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/5f2c4f7231d0c515da94d10b/0423932b-d399-47e2-aa67-9d061813192f/E527594A-6553-49DE-BD91-6E4FCF7C0071.jpeg?format=2500w 2500w" style={{display: 'block', objectPosition: '50% 50%', objectFit: 'cover', width: '100%', height: '100%'}} width="2964"/>
</div>
</div>

<div className="order-2 space-y-6 text-center md:text-left">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-stone-900 leading-snug">
                    Spirits of the Southern Hemisphere.
                </h2>
<p className="text-stone-600 font-light text-base md:text-lg leading-relaxed">
                    We offer a curated selection of artisanal southern hemisphere spirits, along with craft cocktails, local beer, natural wine, and a thoughtful variety of non-alcoholic refreshments.
                </p>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-300 hover:border-stone-900 pb-1 transition-all text-sm font-medium uppercase tracking-wider" href="#menu">
                        View Drink Menu
                        <iconify-icon icon="solar:wine-glass-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-stone-50 text-center reveal">
<div className="max-w-3xl mx-auto space-y-12">
<div className="space-y-4">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900">Port Townsend, Washington</h2>
<p className="text-lg text-stone-600 font-light">1036 Lawrence Street, 98368</p>
</div>
<div className="space-y-2">
<a className="block text-stone-800 hover:text-stone-500 transition-colors font-medium" href="mailto:greencrowtacos@gmail.com">greencrowtacos@gmail.com</a>
<a className="block text-stone-800 hover:text-stone-500 transition-colors font-medium" href="tel:3603409982">360.340.9982</a>
</div>
<div className="space-y-2">
<p className="uppercase text-xs tracking-widest text-stone-500 font-medium">Hours</p>
<p className="text-lg text-stone-800">Monday - Friday</p>
<p className="text-lg text-stone-800">11:30 AM - 8:00 PM</p>
</div>
<div className="pt-4">
<a className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-stone-700 transition-colors" href="https://maps.google.com/?q=1036+Lawrence+Street,+Port+Townsend,+WA+98368" target="_blank">
                    Get Directions
                    <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-stone-950 text-stone-50 reveal">
<div className="max-w-xl mx-auto text-center space-y-8">
<div className="space-y-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Subscribe to Our Newsletter</h2>
<p className="text-stone-400 font-light">Sign up to receive news, special events, and menu updates.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('success-msg').classList.remove('hidden'); this.reset();">
<div className="relative">
<input className="w-full bg-stone-900 border border-stone-800 text-white px-4 py-3 placeholder-stone-600 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Email Address" required="" type="email"/>
</div>
<button className="w-full bg-white text-stone-950 px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-stone-200 transition-colors" type="submit">
                    Sign Up
                </button>
<p className="text-[10px] text-stone-600 pt-2">Protected by reCAPTCHA and the Google Privacy Policy.</p>
</form>
<div className="hidden text-green-400 font-medium tracking-wide animate-fade-in-up" id="success-msg">
                Thank you! You're on the list.
            </div>
</div>
</section>

<footer className="bg-stone-950 text-stone-600 py-12 px-6 border-t border-stone-900 text-center text-xs tracking-widest uppercase">
<div className="flex flex-col md:flex-row justify-center items-center gap-6">
<span className="opacity-50">© 2024 Green Crow Tacos</span>
<span className="hidden md:inline opacity-30">|</span>
<a className="hover:text-stone-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-400 transition-colors" href="#">Accessibility</a>
</div>
</footer>


    </>
  );
}
