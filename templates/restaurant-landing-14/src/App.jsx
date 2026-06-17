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
jade: '#0F3D3E',
gold: '#C9A227',
ivory: '#F8F4EC',
charcoal: '#111827',
beige: '#EADBC8',
},
fontFamily: {
serif: ['Cinzel', 'serif'],
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
fontSize: {
'xs': '0.75rem',
'sm': '0.875rem',
'base': '1rem',
'lg': '1.125rem',
'xl': '1.25rem',
'2xl': '1.5rem',
'3xl': '1.875rem',
'4xl': '2.25rem',
'5xl': '3rem',
'6xl': '3.75rem',
'7xl': '4.5rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-charcoal/95', 'backdrop-blur-md', 'shadow-lg');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-3');
            } else {
                navbar.classList.remove('bg-charcoal/95', 'backdrop-blur-md', 'shadow-lg');
                navbar.classList.add('py-4');
                navbar.classList.remove('py-3');
            }
        });

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Menu Tabs Logic
        const tabBtns = document.querySelectorAll('.menu-tab-btn');
        const tabContents = document.querySelectorAll('.menu-tab-content');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active classes
                tabBtns.forEach(b => {
                    b.classList.remove('text-gold');
                    b.classList.add('text-ivory/50');
                });
                tabContents.forEach(c => c.classList.add('hidden'));

                // Add active class to clicked
                btn.classList.remove('text-ivory/50');
                btn.classList.add('text-gold');
                
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                targetContent.classList.remove('hidden');
                
                // Slight re-trigger of animation
                targetContent.classList.remove('animate-fade-up');
                void targetContent.offsetWidth; // trigger reflow
                targetContent.classList.add('animate-fade-up');
            });
        });

        // FAQ Accordion Logic
        const faqBtns = document.querySelectorAll('.faq-btn');
        
        faqBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('iconify-icon');
                const isActive = content.classList.contains('active');

                // Close all
                document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
                document.querySelectorAll('.faq-btn iconify-icon').forEach(i => i.style.transform = 'rotate(0deg)');

                // Open clicked if it wasn't active
                if (!isActive) {
                    content.classList.add('active');
                    icon.style.transform = 'rotate(180deg)';
                }
            });
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
      

<header className="fixed w-full z-50 transition-all duration-300 py-4 border-b border-white/5" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">

<a className="flex flex-col items-center group" href="#">
<span className="font-serif text-2xl lg:text-3xl tracking-tight text-ivory group-hover:text-gold transition-colors duration-300">JADE</span>
<span className="text-xs tracking-[0.3em] text-beige/70 uppercase font-medium">Cafe &amp; China Town</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors duration-300 tracking-wide" href="#about">Story</a>
<a className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors duration-300 tracking-wide" href="#menu">Menu</a>
<a className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors duration-300 tracking-wide" href="#ambiance">Ambiance</a>
<a className="text-sm font-medium text-ivory/80 hover:text-gold transition-colors duration-300 tracking-wide" href="#location">Location</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium text-ivory hover:text-gold transition-colors duration-300" href="tel:+924235139715">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
<span className="tracking-wide">Call Now</span>
</a>
<a className="bg-gold text-charcoal px-6 py-2.5 rounded-none text-sm font-medium tracking-wide hover:bg-ivory transition-colors duration-300" href="#reservation">
                    Reserve Table
                </a>
</div>

<button className="md:hidden text-ivory p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full glass border-t border-white/10 flex flex-col py-4 px-6 gap-4 shadow-2xl" id="mobile-menu">
<a className="text-base font-medium text-ivory hover:text-gold py-2 border-b border-white/5 mobile-link" href="#about">Story</a>
<a className="text-base font-medium text-ivory hover:text-gold py-2 border-b border-white/5 mobile-link" href="#menu">Menu</a>
<a className="text-base font-medium text-ivory hover:text-gold py-2 border-b border-white/5 mobile-link" href="#ambiance">Ambiance</a>
<a className="text-base font-medium text-ivory hover:text-gold py-2 border-b border-white/5 mobile-link" href="#location">Location</a>
<a className="bg-gold text-charcoal text-center px-6 py-3 mt-2 rounded-none text-sm font-medium tracking-wide mobile-link" href="#reservation">Reserve Table</a>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Elegant restaurant interior" className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" loading="lazy" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-jade/70 to-charcoal/90"></div>
</div>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pt-20 animate-fade-up">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-black/20 backdrop-blur-sm mb-8">
<iconify-icon className="text-gold" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-ivory/90">3.8/5 from 2,479+ Reviews</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-ivory leading-[1.1] tracking-tight mb-6 text-balance">
                An Elevated Dining Experience in <span className="text-gold italic">Lake City</span>
</h1>
<p className="text-base md:text-lg text-beige/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Experience premium Chinese, continental, café favorites, desserts, and signature comfort food in an elegant, cozy setting at Lake City Mall, Lahore.
            </p>

<div className="flex flex-wrap justify-center gap-4 mb-10 text-xs font-medium tracking-widest text-ivory/60 uppercase">
<span className="flex items-center gap-1"><iconify-icon icon="solar:cup-linear" width="16"></iconify-icon> Dine-In</span>
<span className="text-gold/50">•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:bag-linear" width="16"></iconify-icon> Takeout</span>
<span className="text-gold/50">•</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:scooter-linear" width="16"></iconify-icon> Delivery</span>
</div>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="bg-gold text-charcoal px-8 py-3.5 rounded-none text-sm font-medium tracking-wide hover:bg-ivory hover:-translate-y-1 transition-all duration-300 text-center w-full sm:w-auto" href="#reservation">
                    Reserve a Table
                </a>
<a className="bg-transparent border border-ivory/30 text-ivory px-8 py-3.5 rounded-none text-sm font-medium tracking-wide hover:bg-white/5 hover:border-ivory transition-all duration-300 text-center w-full sm:w-auto" href="#menu">
                    Explore Menu
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-ivory" icon="solar:mouse-circle-linear" width="32"></iconify-icon>
</div>
</section>

<section className="bg-jade border-y border-white/5 py-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex overflow-x-auto no-scrollbar gap-12 md:gap-8 justify-start md:justify-center items-center">
<div className="flex items-center gap-3 shrink-0 group cursor-default">
<div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:sofa-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-beige tracking-wide">Elegant Ambiance</span>
</div>
<div className="flex items-center gap-3 shrink-0 group cursor-default">
<div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-beige tracking-wide">Family Dining</span>
</div>
<div className="flex items-center gap-3 shrink-0 group cursor-default">
<div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-beige tracking-wide">Chinese &amp; Continental</span>
</div>
<div className="flex items-center gap-3 shrink-0 group cursor-default">
<div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:moon-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-beige tracking-wide">Open Till 11 PM</span>
</div>
<div className="flex items-center gap-3 shrink-0 group cursor-default">
<div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-beige tracking-wide">Lake City Mall</span>
</div>
</div>
</div>
</section>

<section className="bg-ivory text-charcoal py-24 lg:py-32" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="flex items-center gap-4 mb-6">
<div className="h-px w-12 bg-gold"></div>
<span className="text-sm font-medium tracking-widest text-jade uppercase">Our Story</span>
</div>
<h2 className="text-3xl lg:text-5xl font-serif font-medium tracking-tight mb-8 text-balance">
                        Where Taste Meets Atmosphere in Lahore
                    </h2>
<div className="space-y-6 text-base text-charcoal/70 font-light leading-relaxed">
<p>
                            Nestled in the heart of Lake City Mall, Jade Cafe &amp; China Town is a premium lifestyle dining destination designed for those who appreciate exceptional flavors and an inviting atmosphere. We are renowned across Lahore as a sanctuary for culinary excellence, offering a sophisticated yet comfortable space for every occasion.
                        </p>
<p>
                            Whether you're seeking a cozy corner for artisan coffee and our signature Molten Lava Cake, an elegant family dinner featuring authentic Chinese wok specialties, or a casual weekend brunch with our premium continental selection, our menu is curated to satisfy diverse palates.
                        </p>
<p>
                            We believe dining is an experience, not just a meal. From the warm, ambient lighting to the meticulously plated dishes, every detail is crafted to make you feel welcomed, indulged, and eager to return.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 pt-10 border-t border-black/10">
<div>
<p className="text-3xl font-serif text-jade mb-2">10+</p>
<p className="text-xs font-medium tracking-wide uppercase text-charcoal/60">Years of Culinary Passion</p>
</div>
<div>
<p className="text-3xl font-serif text-jade mb-2">100%</p>
<p className="text-xs font-medium tracking-wide uppercase text-charcoal/60">Premium Ingredients</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="aspect-[4/5] img-zoom-container group relative">
<img alt="Cozy cafe ambiance" className="img-zoom w-full h-full object-cover" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-4 border border-white/30 pointer-events-none"></div>
</div>

<div className="absolute -bottom-10 -left-10 w-2/3 aspect-square img-zoom-container group border-4 border-ivory hidden md:block shadow-2xl">
<img alt="Signature dish presentation" className="img-zoom w-full h-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-charcoal py-24 lg:py-32 relative border-t border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-jade/20 via-charcoal to-charcoal pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">Chef's Highlights</span>
<h2 className="text-3xl lg:text-5xl font-serif font-medium tracking-tight text-ivory mb-6">Signature Experiences</h2>
<p className="text-beige/70 font-light">A curated selection of our most beloved creations, blending rich culinary traditions with modern café culture.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-black">
<img alt="Premium Chinese Cuisine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80 opacity-60" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Wok Fired</span>
<h3 className="text-2xl font-serif text-ivory mb-3 group-hover:text-gold transition-colors">Signature Chinese</h3>
<p className="text-sm text-ivory/70 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Authentic flavors, premium cuts, and vibrant vegetables tossed to perfection.</p>
</div>
</article>

<article className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-black">
<img alt="Continental Dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80 opacity-60" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Continental</span>
<h3 className="text-2xl font-serif text-ivory mb-3 group-hover:text-gold transition-colors">Premium Pastas &amp; Grills</h3>
<p className="text-sm text-ivory/70 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Rich, creamy sauces, tender grilled chicken, and comforting European classics.</p>
</div>
</article>

<article className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-black">
<img alt="Molten Lava Cake Dessert" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80 opacity-60" loading="lazy" src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
<span className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Indulgence</span>
<h3 className="text-2xl font-serif text-ivory mb-3 group-hover:text-gold transition-colors">Iconic Desserts</h3>
<p className="text-sm text-ivory/70 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">End your meal with our famous Molten Lava Cake and specialty roasted coffee.</p>
</div>
</article>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-ivory hover:text-gold transition-colors border-b border-gold/30 hover:border-gold pb-1" href="#menu">
                    Discover Full Variety <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-jade py-24 lg:py-32" id="menu">
<div className="max-w-5xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-5xl font-serif font-medium tracking-tight text-ivory mb-4">A Taste of Elegance</h2>
<p className="text-beige/80 font-light">Explore a glimpse of our diverse culinary offerings.</p>
</div>

<div className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-6 mb-12 border-b border-white/10 pb-4">
<button className="menu-tab-btn active text-sm font-medium tracking-wide whitespace-nowrap text-gold" data-target="tab-chinese">Chinese</button>
<button className="menu-tab-btn text-sm font-medium tracking-wide whitespace-nowrap text-ivory/50 hover:text-ivory transition-colors" data-target="tab-continental">Continental</button>
<button className="menu-tab-btn text-sm font-medium tracking-wide whitespace-nowrap text-ivory/50 hover:text-ivory transition-colors" data-target="tab-cafe">Café &amp; Desserts</button>
</div>

<div className="relative min-h-[400px]">

<div className="menu-tab-content grid md:grid-cols-2 gap-x-16 gap-y-8 animate-fade-up" id="tab-chinese">
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Kung Pao Chicken</h4>
<p className="text-xs text-beige/60 font-light">Spicy stir-fry with peanuts, vegetables, and chili peppers.</p>
</div>
<span className="text-gold font-medium">Rs. 1450</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Beef Chili Dry</h4>
<p className="text-xs text-beige/60 font-light">Crispy beef strips glazed in savory soy and green chilies.</p>
</div>
<span className="text-gold font-medium">Rs. 1650</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Chicken Manchurian</h4>
<p className="text-xs text-beige/60 font-light">Classic sweet and tangy tomato-garlic sauce.</p>
</div>
<span className="text-gold font-medium">Rs. 1350</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Special Fried Rice</h4>
<p className="text-xs text-beige/60 font-light">Wok-tossed with chicken, prawns, egg, and vegetables.</p>
</div>
<span className="text-gold font-medium">Rs. 950</span>
</div>
</div>

<div className="menu-tab-content hidden grid md:grid-cols-2 gap-x-16 gap-y-8" id="tab-continental">
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Tarragon Chicken</h4>
<p className="text-xs text-beige/60 font-light">Grilled breast topped with creamy tarragon herb sauce.</p>
</div>
<span className="text-gold font-medium">Rs. 1550</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Fettuccine Alfredo</h4>
<p className="text-xs text-beige/60 font-light">Rich parmesan cream sauce, grilled chicken, mushrooms.</p>
</div>
<span className="text-gold font-medium">Rs. 1400</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Classic Club Sandwich</h4>
<p className="text-xs text-beige/60 font-light">Triple-decker with roast chicken, egg, cheese, and fries.</p>
</div>
<span className="text-gold font-medium">Rs. 1150</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Thin Crust Margarita</h4>
<p className="text-xs text-beige/60 font-light">Fresh tomato sauce, mozzarella, basil, olive oil.</p>
</div>
<span className="text-gold font-medium">Rs. 1250</span>
</div>
</div>

<div className="menu-tab-content hidden grid md:grid-cols-2 gap-x-16 gap-y-8" id="tab-cafe">
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Molten Lava Cake</h4>
<p className="text-xs text-beige/60 font-light">Warm chocolate cake with a gooey center, vanilla ice cream.</p>
</div>
<span className="text-gold font-medium">Rs. 850</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Caramel Macchiato</h4>
<p className="text-xs text-beige/60 font-light">Espresso, steamed milk, vanilla syrup, caramel drizzle.</p>
</div>
<span className="text-gold font-medium">Rs. 650</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Classic Mint Margarita</h4>
<p className="text-xs text-beige/60 font-light">Refreshing blend of fresh mint, lemon, and crushed ice.</p>
</div>
<span className="text-gold font-medium">Rs. 550</span>
</div>
<div className="flex justify-between items-end border-b border-white/10 pb-4 group">
<div className="pr-4">
<h4 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors mb-1">Loaded Brownie Skillet</h4>
<p className="text-xs text-beige/60 font-light">Sizzling walnut brownie topped with chocolate fudge.</p>
</div>
<span className="text-gold font-medium">Rs. 900</span>
</div>
</div>
</div>
<p className="text-center text-xs text-beige/40 mt-12">* Prices are indicative and subject to change. Please check in-store for the full, updated menu.</p>
</div>
</section>

<section className="bg-ivory text-charcoal py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="grid grid-cols-2 gap-4">
<img alt="Restaurant interior" className="rounded-t-full h-64 object-cover w-full mt-12 shadow-lg" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Plated food" className="rounded-b-full h-64 object-cover w-full shadow-lg" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<h2 className="text-3xl lg:text-4xl font-serif font-medium tracking-tight mb-8">Why Lake City Chooses Jade</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="mt-1 text-jade">
<iconify-icon icon="solar:star-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg font-medium mb-1">Sophisticated Comfort</h4>
<p className="text-sm text-charcoal/70 font-light">Our ambiance strikes the perfect balance between upscale elegance and cozy familiarity, making it ideal for casual meetups or celebratory dinners.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 text-jade">
<iconify-icon icon="solar:plate-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg font-medium mb-1">A Menu for Everyone</h4>
<p className="text-sm text-charcoal/70 font-light">From authentic Chinese woks to creamy pastas, burgers, and decadent desserts, our diverse menu ensures every guest finds their craving.</p>
</div>
</li>
<li className="flex gap-4">
<div className="mt-1 text-jade">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg font-medium mb-1">Premium Convenience</h4>
<p className="text-sm text-charcoal/70 font-light">Located conveniently inside Lake City Mall, offering ample parking, a safe family environment, and seamless takeout or delivery options.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-charcoal py-24 border-y border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-jade/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-5xl font-serif font-medium tracking-tight text-ivory mb-4">Words of Delight</h2>
<p className="text-beige/70 font-light">Join thousands of satisfied guests who have made Jade Cafe their preferred dining destination in Lahore.</p>
</div>
<div className="text-right">
<div className="flex items-center gap-1 text-gold mb-2 justify-end">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="opacity-50" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium tracking-wide text-ivory">3.8 / 5 on Google</p>
<p className="text-xs text-beige/50">Based on 2,479+ reviews</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-1 text-gold mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-ivory/90 font-light leading-relaxed mb-6">"An absolute gem in Lake City. The ambiance is beautifully lit and perfect for a family dinner. The Chicken Manchurian and Molten Lava cake are must-haves. Premium service!"</p>
<p className="text-xs font-medium tracking-wide text-gold uppercase">- Amna S.</p>
</div>

<div className="glass p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-1 text-gold mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-ivory/90 font-light leading-relaxed mb-6">"Love the variety here. My friends wanted Chinese, I wanted pasta, and we all got exactly what we craved. The interior feels very high-end but cozy. Will definitely return."</p>
<p className="text-xs font-medium tracking-wide text-gold uppercase">- Hassan R.</p>
</div>

<div className="glass p-8 rounded-sm hover:-translate-y-2 transition-transform duration-300">
<div className="flex items-center gap-1 text-gold mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-ivory/90 font-light leading-relaxed mb-6">"Ordered delivery to my place in Lake City. The food arrived hot, packing was premium, and portions were generous. Their mint margarita is incredibly refreshing."</p>
<p className="text-xs font-medium tracking-wide text-gold uppercase">- Zainab F.</p>
</div>
</div>
</div>
</section>

<section className="bg-charcoal py-2 pt-0" id="ambiance">
<div className="grid grid-cols-2 md:grid-cols-4 gap-1 sm:gap-2">
<div className="aspect-square img-zoom-container relative group">
<img alt="Coffee and dessert" className="w-full h-full object-cover img-zoom" loading="lazy" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-ivory font-serif tracking-wide text-sm">Café Catchups</span>
</div>
</div>
<div className="aspect-square img-zoom-container relative group">
<img alt="Family dining" className="w-full h-full object-cover img-zoom" loading="lazy" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-ivory font-serif tracking-wide text-sm">Family Dinners</span>
</div>
</div>
<div className="aspect-square img-zoom-container relative group">
<img alt="Restaurant interior evening" className="w-full h-full object-cover img-zoom" loading="lazy" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-ivory font-serif tracking-wide text-sm">Evening Ambiance</span>
</div>
</div>
<div className="aspect-square img-zoom-container relative group">
<img alt="Gourmet dish" className="w-full h-full object-cover img-zoom" loading="lazy" src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="text-ivory font-serif tracking-wide text-sm">Gourmet Taste</span>
</div>
</div>
</div>
</section>

<section className="bg-jade py-24 lg:py-32 border-t border-white/10" id="location">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="text-ivory">
<span className="text-gold text-sm font-medium tracking-widest uppercase mb-4 block">Visit Us</span>
<h2 className="text-3xl lg:text-5xl font-serif font-medium tracking-tight mb-8">Your Destination in Lake City</h2>
<div className="space-y-6 mb-10">
<div className="flex gap-4 items-start">
<iconify-icon className="text-gold mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-lg mb-1">Lake City Mall</h4>
<p className="text-sm text-beige/70 font-light leading-relaxed">9732+MVH, Block M 1 Lake City,<br/>Lahore, Punjab, Pakistan</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-gold mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-lg mb-1">Opening Hours</h4>
<p className="text-sm text-beige/70 font-light">Open Daily — Closes at 11:00 PM</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-gold mt-1" icon="solar:phone-linear" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-lg mb-1">Contact</h4>
<a className="text-sm text-beige/70 font-light hover:text-gold transition-colors" href="tel:+924235139715">+92 42 35139715</a>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 border-t border-white/10 pt-8">
<a className="flex-1 bg-transparent border border-ivory/30 text-center py-3.5 text-sm font-medium tracking-wide hover:bg-white/5 transition-colors flex justify-center items-center gap-2" href="tel:+924235139715">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon> Call for Delivery
                        </a>
<a className="flex-1 bg-transparent border border-ivory/30 text-center py-3.5 text-sm font-medium tracking-wide hover:bg-white/5 transition-colors flex justify-center items-center gap-2" href="https://maps.google.com/?q=Jade+Cafe+Lake+City+Mall+Lahore" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:routing-2-linear" width="18"></iconify-icon> Get Directions
                        </a>
</div>
</div>

<div className="bg-charcoal p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden" id="reservation">
<div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full pointer-events-none"></div>
<h3 className="text-2xl font-serif font-medium text-ivory mb-2">Reserve a Table</h3>
<p className="text-sm text-beige/60 font-light mb-8">Secure your spot for an unforgettable dining experience.</p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Reservation request sent! Our team will contact you shortly.');">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-ivory/70 mb-1 tracking-wide uppercase">Name</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-ivory placeholder-white/30 focus:outline-none focus:border-gold transition-colors text-sm" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-ivory/70 mb-1 tracking-wide uppercase">Phone</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-ivory placeholder-white/30 focus:outline-none focus:border-gold transition-colors text-sm" placeholder="+92 3XX XXXXXXX" required="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-ivory/70 mb-1 tracking-wide uppercase">Date</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold transition-colors text-sm" required="" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-ivory/70 mb-1 tracking-wide uppercase">Time</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold transition-colors text-sm" required="" type="time"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-ivory/70 mb-1 tracking-wide uppercase">Guests</label>
<select className="w-full bg-transparent border-b border-white/20 pb-2 text-ivory focus:outline-none focus:border-gold transition-colors text-sm appearance-none cursor-pointer">
<option className="bg-charcoal" value="2">2 People</option>
<option className="bg-charcoal" value="3">3 People</option>
<option className="bg-charcoal" value="4">4 People</option>
<option className="bg-charcoal" value="5">5 People</option>
<option className="bg-charcoal" value="6+">6+ People</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-ivory/70 mb-1 tracking-wide uppercase">Special Requests</label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-ivory placeholder-white/30 focus:outline-none focus:border-gold transition-colors text-sm" placeholder="Occasion, dietary needs..." type="text"/>
</div>
<button className="w-full bg-gold text-charcoal py-4 text-sm font-medium tracking-wide hover:bg-ivory transition-colors duration-300 mt-4" type="submit">
                            Request Reservation
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="bg-ivory text-charcoal py-24 border-t border-black/5">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-serif font-medium tracking-tight mb-4">Frequently Asked Questions</h2>
<p className="text-charcoal/60 font-light text-sm">Everything you need to know about dining with us.</p>
</div>
<div className="space-y-4">

<div className="border-b border-black/10">
<button className="faq-btn w-full text-left py-4 flex justify-between items-center focus:outline-none group">
<span className="font-medium text-base group-hover:text-jade transition-colors">Do you offer dine-in, takeaway, and delivery?</span>
<iconify-icon className="text-charcoal/50 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content text-sm text-charcoal/70 font-light pb-4">
                        Yes, we offer a full-service elegant dine-in experience, convenient takeaway, and fast delivery to Lake City and nearby areas.
                    </div>
</div>

<div className="border-b border-black/10">
<button className="faq-btn w-full text-left py-4 flex justify-between items-center focus:outline-none group">
<span className="font-medium text-base group-hover:text-jade transition-colors">Is Jade Cafe &amp; China Town suitable for family dinners?</span>
<iconify-icon className="text-charcoal/50 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content text-sm text-charcoal/70 font-light pb-4">
                        Absolutely. We pride ourselves on being a family-friendly restaurant with a warm, comfortable ambiance and a menu diverse enough to satisfy all age groups.
                    </div>
</div>

<div className="border-b border-black/10">
<button className="faq-btn w-full text-left py-4 flex justify-between items-center focus:outline-none group">
<span className="font-medium text-base group-hover:text-jade transition-colors">Do you have both Chinese and continental options?</span>
<iconify-icon className="text-charcoal/50 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content text-sm text-charcoal/70 font-light pb-4">
                        Yes, our unique positioning allows us to serve authentic premium Chinese wok dishes alongside gourmet continental options like pastas, steaks, and café staples.
                    </div>
</div>

<div className="border-b border-black/10">
<button className="faq-btn w-full text-left py-4 flex justify-between items-center focus:outline-none group">
<span className="font-medium text-base group-hover:text-jade transition-colors">Are reservations recommended?</span>
<iconify-icon className="text-charcoal/50 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content text-sm text-charcoal/70 font-light pb-4">
                        While walk-ins are always welcome, we highly recommend making a reservation during weekends and prime dinner hours to ensure a seamless experience.
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-charcoal border-t border-white/10 pt-20 pb-8 text-ivory">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex flex-col items-start group mb-6" href="#">
<span className="font-serif text-3xl tracking-tight text-ivory group-hover:text-gold transition-colors duration-300">JADE</span>
<span className="text-xs tracking-[0.3em] text-beige/70 uppercase font-medium">Cafe &amp; China Town</span>
</a>
<p className="text-xs text-beige/60 font-light leading-relaxed mb-6">
                        An elevated dining experience in Lahore combining upscale casual dining, authentic Chinese flavors, and premium café culture.
                    </p>
<div className="flex gap-4">
<a className="text-ivory/50 hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-ivory/50 hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-ivory/50 hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:map-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-gold">Explore</h4>
<ul className="space-y-3 text-sm text-beige/70 font-light">
<li><a className="hover:text-ivory transition-colors" href="#about">Our Story</a></li>
<li><a className="hover:text-ivory transition-colors" href="#menu">Full Menu</a></li>
<li><a className="hover:text-ivory transition-colors" href="#ambiance">Ambiance Gallery</a></li>
<li><a className="hover:text-ivory transition-colors" href="#reservation">Reservations</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-gold">Contact</h4>
<ul className="space-y-4 text-sm text-beige/70 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-gold/50" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="hover:text-ivory transition-colors" href="tel:+924235139715">+92 42 35139715</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-gold/50" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>9732+MVH, Block M 1,<br/>Lake City Mall, Lahore</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-gold/50" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<span>Open Daily<br/>Closes at 11:00 PM</span>
</li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-6 text-gold">Service Options</h4>
<ul className="space-y-3 text-sm text-beige/70 font-light">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Premium Dine-In</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Fresh Takeaway</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Fast Delivery</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-gold rounded-full"></div> Private Gatherings</li>
</ul>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-beige/40 font-light">
                    © <span id="year"></span> Jade Cafe &amp; China Town. All rights reserved.
                </p>
<div className="flex gap-4 text-xs text-beige/40 font-light">
<a className="hover:text-ivory transition-colors" href="#">Privacy Policy</a>
<span>|</span>
<a className="hover:text-ivory transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full md:hidden bg-jade/95 backdrop-blur-md border-t border-white/10 flex justify-between px-2 py-3 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center w-1/3 text-ivory hover:text-gold transition-colors" href="tel:+924235139715">
<iconify-icon icon="solar:phone-calling-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium mt-1 tracking-wide">Call</span>
</a>
<a className="flex flex-col items-center justify-center w-1/3 text-gold hover:text-ivory transition-colors border-x border-white/10" href="#reservation">
<iconify-icon icon="solar:calendar-add-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium mt-1 tracking-wide">Reserve</span>
</a>
<a className="flex flex-col items-center justify-center w-1/3 text-ivory hover:text-gold transition-colors" href="https://maps.google.com/?q=Jade+Cafe+Lake+City+Mall+Lahore" target="_blank">
<iconify-icon icon="solar:routing-2-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium mt-1 tracking-wide">Directions</span>
</a>
</div>

<div className="h-16 md:hidden bg-charcoal"></div>



    </>
  );
}
