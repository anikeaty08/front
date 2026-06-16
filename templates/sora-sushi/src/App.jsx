import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', function() {
      const viewMenuButton = document.getElementById('viewMenuButton');
      const menuPopover = document.getElementById('menuPopover');
      const menuPopoverContent = document.getElementById('menuPopoverContent');
      const closeMenuPopover = document.getElementById('closeMenuPopover');
      const menuPopoverBackdrop = document.getElementById('menuPopoverBackdrop');
      const viewFullMenu = document.getElementById('viewFullMenu');
      const reserveFromMenu = document.getElementById('reserveFromMenu');

      // Open popover
      viewMenuButton.addEventListener('click', (e) => {
        e.preventDefault();
        menuPopover.classList.remove('hidden');
        setTimeout(() => {
          menuPopover.classList.remove('opacity-0');
          menuPopoverContent.classList.remove('scale-95');
          menuPopoverContent.classList.add('scale-100');
        }, 10);
      });

      // Close popover function
      function closePopover() {
        menuPopover.classList.add('opacity-0');
        menuPopoverContent.classList.remove('scale-100');
        menuPopoverContent.classList.add('scale-95');
        setTimeout(() => {
          menuPopover.classList.add('hidden');
        }, 300);
      }

      // Close popover events
      closeMenuPopover.addEventListener('click', closePopover);
      menuPopoverBackdrop.addEventListener('click', closePopover);

      // Escape key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menuPopover.classList.contains('hidden')) {
          closePopover();
        }
      });

      // View full menu - close popover and scroll to menu section
      viewFullMenu.addEventListener('click', (e) => {
        e.preventDefault();
        closePopover();
        setTimeout(() => {
          document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      });

      // Reserve from menu - close popover and open reservation modal
      reserveFromMenu.addEventListener('click', () => {
        closePopover();
        setTimeout(() => {
          const reservationModal = document.getElementById('reservationModal');
          if (reservationModal) {
            reservationModal.classList.remove('hidden');
          }
        }, 300);
      });
    });
  


    (function(){const button = document.querySelector('.liquid-glass-button');if(button){button.addEventListener('click', function(e){const rect = this.getBoundingClientRect();const x = e.clientX - rect.left;const y = e.clientY - rect.top;const ripple = document.createElement('span');ripple.className = 'absolute rounded-full bg-gradient-radial from-white/30 to-transparent pointer-events-none animate-ping';ripple.style.left = x - 25 + 'px';ripple.style.top = y - 25 + 'px';ripple.style.width = '50px';ripple.style.height = '50px';ripple.style.animation = 'ripple 0.6s linear';this.appendChild(ripple);setTimeout(() => ripple.remove(), 600);});}})()
  


    // Enhanced tab functionality with smooth scrolling
    document.addEventListener('DOMContentLoaded', function() {
      const tabButtons = document.querySelectorAll('.tab-btn');
      const tabContents = document.querySelectorAll('.tab-content');
      const container = document.getElementById('tabContentContainer');
      
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const tabId = button.getAttribute('data-tab');
          
          // Remove active class from all buttons and contents
          tabButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-emerald-500/20', 'text-emerald-400');
            btn.classList.add('text-neutral-300');
          });
          tabContents.forEach(content => {
            content.classList.remove('active');
          });
          
          // Add active class to clicked button
          button.classList.add('active', 'bg-emerald-500/20', 'text-emerald-400');
          button.classList.remove('text-neutral-300');
          
          // Show corresponding content and scroll to it
          let targetContent;
          if (tabId === 'drinks') {
            targetContent = document.getElementById('wines');
          } else if (tabId === 'desserts') {
            targetContent = document.getElementById('desserts');
          } else if (tabId === 'appetizers') {
            targetContent = document.getElementById('appetizers');
          } else {
            targetContent = document.getElementById(tabId);
          }
          
          if (targetContent) {
            targetContent.classList.add('active');
            
            // Smooth scroll to the target content within the container
            const targetOffset = targetContent.offsetTop - container.offsetTop;
            container.scrollTo({
              top: targetOffset,
              behavior: 'smooth'
            });
          }
        });
      });
    });
  


    // Initialize icons
    lucide.createIcons();

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => {
          btn.classList.remove('active', 'bg-emerald-500/20', 'text-emerald-400');
          btn.classList.add('bg-neutral-900/50', 'text-neutral-300');
        });
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active', 'bg-emerald-500/20', 'text-emerald-400');
        button.classList.remove('bg-neutral-900/50', 'text-neutral-300');
        document.getElementById(tabId).classList.add('active');
      });
    });

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all animate-in elements
    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

    // Parallax scrolling for background
    let ticking = false;
    const parallaxBg = document.getElementById('parallaxBg');
    
    function updateParallax() {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3; // Adjust speed here
      
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${rate}px)`;
      }
      
      ticking = false;
    }
    
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }
    
    window.addEventListener('scroll', requestTick);

    // Mobile menu
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    mobileBtn?.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    // Reservation modal
    const modal = document.getElementById('reservationModal');
    const openButtons = [
      document.getElementById('openReservation'),
      document.getElementById('openReservationHero'),
      document.getElementById('openReservationRail'),
      document.getElementById('openReservationMenu'),
      document.getElementById('openReservationHours')
    ].filter(Boolean);
    const closeBtn = document.getElementById('closeReservation');

    openButtons.forEach(btn => btn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    }));
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });

    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length > 1) {
          e.preventDefault();
          document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Image carousel functionality
    (function() {
      const carousel = document.getElementById('imageCarousel');
      const dots = document.querySelectorAll('.carousel-dot');
      const prevBtn = document.getElementById('prevSlide');
      const nextBtn = document.getElementById('nextSlide');
      let currentSlide = 0;
      const totalSlides = 6;
      let autoSlideInterval;
      
      function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -(currentSlide * 100);
        carousel.style.transform = `translateX(${translateX}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
          if (index === currentSlide) {
            dot.classList.add('opacity-75');
            dot.classList.remove('opacity-50');
          } else {
            dot.classList.add('opacity-50');
            dot.classList.remove('opacity-75');
          }
        });
      }
      
      function nextSlide() {
        const nextIndex = (currentSlide + 1) % totalSlides;
        goToSlide(nextIndex);
      }
      
      function prevSlide() {
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        goToSlide(prevIndex);
      }
      
      function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
      }
      
      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }
      
      // Event listeners
      nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 8000);
      });
      
      prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        setTimeout(startAutoSlide, 8000);
      });
      
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          goToSlide(index);
          stopAutoSlide();
          setTimeout(startAutoSlide, 8000);
        });
      });
      
      // Pause auto-slide on hover
      carousel.parentElement.addEventListener('mouseenter', stopAutoSlide);
      carousel.parentElement.addEventListener('mouseleave', startAutoSlide);
      
      // Touch/swipe support
      let touchStartX = 0;
      let touchEndX = 0;
      
      carousel.parentElement.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
      });
      
      carousel.parentElement.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        setTimeout(startAutoSlide, 8000);
      });
      
      function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }
      }
      
      // Start auto-slide on page load
      startAutoSlide();
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="parallax-bg top-0 w-full -z-10 bg-cover bg-center brightness-50 blur-sm absolute h-3/4 image-hover-subtle" id="parallaxBg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?w=3840&amp'}}></div>

<header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md animate-in show" style={{-Delay: '100ms'}}>
<div className="mx-auto max-w-7xl px-4">
<div className="flex bg-neutral-900/80 border-white/10 border rounded-2xl mt-4 pt-3 pr-4 pb-3 pl-4 shadow-sm backdrop-blur-2xl items-center justify-between">
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex hover:bg-neutral-800 bg-neutral-800/60 border-white/10 border rounded-md pt-2 pr-2.5 pb-2 pl-2.5 items-center justify-center" id="mobileMenuBtn">
<svg className="lucide lucide-menu h-5 w-5 text-neutral-200" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="inline-flex items-center gap-2" href="#">
<span className="inline-block bg-emerald-500/90 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bc80e1ba-98bb-4be8-a20c-c4c10ddaf146_320w.jpg)] bg-cover ring-emerald-400/40 ring-1 rounded-full image-hover" style={{}}></span>
<span className="text-xl tracking-tight font-playfair" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Sora Sushi</span>
</a>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300" id="desktopNav">
<a className="hover:text-white transition" href="#menu">Menu</a>
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#space">Our Space</a>
<a className="hover:text-white transition" href="#hours">Hours</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm hover:bg-neutral-800" href="tel:+11234567890">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">Call</span>
</a>
<button className="inline-flex gap-2 hover:bg-emerald-400 text-sm font-medium text-neutral-900 bg-emerald-500/90 rounded-lg pt-2.5 pr-3.5 pb-2.5 pl-3.5 gap-x-2 gap-y-2 items-center" id="openReservation">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">Book a Table</span>
</button>
</div>
</div>

<div className="md:hidden bg-neutral-900/80 border-white/10 border rounded-2xl mt-3 pt-3 pr-4 pb-3 pl-4 backdrop-blur-md hidden" id="mobileNav">
<div className="flex flex-col gap-3 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#menu">Menu</a>
<a className="hover:text-white transition" href="#about">About</a>
<a className="hover:text-white transition" href="#space">Our Space</a>
<a className="hover:text-white transition" href="#hours">Hours</a>
</div>
</div>
</div>
</header>

<section className="relative pt-28">
<div className="max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-12 gap-4 md:gap-6">

<div className="col-span-12 lg:col-span-8 animate-in slide-right show" style={{-Delay: '200ms'}}>
<div className="relative overflow-hidden rounded-3xl border border-white/10 hero-container">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505575972945-281dd7fc4e1c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop')] bg-cover bg-center image-hover-subtle" style={{}}></div>
<div className="relative z-10 bg-neutral-950/90">
<div className="flex min-h-[70vh] md:min-h-[78vh] lg:min-h-[82vh] relative items-center">

<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-5"></div>

<div className="pointer-events-none absolute inset-0 flex items-center justify-center animate-in fade-scale show" style={{-Delay: '800ms'}}>
<img alt="Signature sushi bowl" className="hero-image md:max-w-2xl shadow-black/50 aspect-square w-3/4 max-w-xl object-cover ring-white/20 ring-1 rounded-full shadow-2xl" src="https://images.unsplash.com/photo-1534482421-64566f976cfa?w=3840&amp;q=80"/>
</div>

<div className="z-10 md:p-10 pt-6 pr-6 pb-6 pl-6 relative">
<div className="max-w-xl animate-stagger">
<p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 animate-in show" style={{-Delay: '400ms'}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
      Tonight: Chef's Omakase seats available
    </p>
<h1 className="font-serif tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.95] animate-in show" style={{fontFamily: '\'Cormorant Garamond\', serif', -Delay: '500ms'}}>
      Sushi Sensation
    </h1>
<p className="animate-in show text-neutral-300 mix-blend-lighten max-w-md mt-4 saturate-100 brightness-100" style={{-Delay: '600ms'}}>
      Seasonal fish, precise technique, and a touch of smoke. Experience contemporary Japanese dining in the heart of the city.
    </p>
<div className="mt-6 flex flex-wrap items-center gap-3 animate-in show" style={{-Delay: '700ms'}}>
<button className="inline-flex items-center gap-2 rounded-xl bg-emerald-500/90 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-emerald-400" id="openReservationHero">
<svg className="lucide lucide-calendar-check h-4 w-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
        Reserve now
      </button>
<button className="inline-flex hover:bg-neutral-800 text-sm bg-neutral-900/60 border-white/10 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 gap-x-2 gap-y-2 items-center" id="viewMenuButton">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
        View menu
      </button>
</div>
</div>

<div className="fixed inset-0 z-[70] opacity-0 transition-opacity duration-300 hidden" id="menuPopover">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="menuPopoverBackdrop"></div>
<div className="relative mx-auto mt-16 w-[92%] max-w-4xl rounded-3xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl p-6 transform scale-95 transition-transform duration-300" id="menuPopoverContent">
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="font-serif text-3xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Menu Highlights</h3>
<p className="mt-1 text-sm text-neutral-300">Fresh selections from today's market</p>
</div>
<button className="hover:bg-neutral-800 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2" id="closeMenuPopover">
<svg className="lucide lucide-x w-[20px] h-[20px]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[60vh] overflow-y-auto">

<div className="space-y-4">
<h4 className="font-serif text-xl tracking-tight text-emerald-400" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Sushi &amp; Sashimi</h4>
<div className="space-y-3">
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div>
<h5 className="font-medium text-neutral-100">Omakase Flight</h5>
<p className="text-xs text-neutral-400">10-course progression</p>
</div>
<span className="text-sm text-emerald-400">$25</span>
</div>
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div>
<h5 className="font-medium text-neutral-100">Toro Nigiri Duo</h5>
<p className="text-xs text-neutral-400">Bluefin belly, fresh wasabi</p>
</div>
<span className="text-sm text-emerald-400">$8</span>
</div>
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div>
<h5 className="font-medium text-neutral-100">Santa Barbara Uni</h5>
<p className="text-xs text-neutral-400">Sea urchin, warm rice</p>
</div>
<span className="text-sm text-emerald-400">$22</span>
</div>
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div className="">
<h5 className="font-medium text-neutral-100">Charred Dragon Roll</h5>
<p className="text-xs text-neutral-400">Eel, avocado, torched glaze</p>
</div>
<span className="text-sm text-emerald-400">$19</span>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="font-serif text-xl tracking-tight text-emerald-400" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Appetizers &amp; Drinks</h4>
<div className="space-y-3">
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div className="">
<h5 className="font-medium text-neutral-100">Hamachi Crudo</h5>
<p className="text-xs text-neutral-400">Jalapeño oil, citrus soy</p>
</div>
<span className="text-sm text-emerald-400">$18</span>
</div>
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div>
<h5 className="font-medium text-neutral-100">Prawn Tempura</h5>
<p className="text-xs text-neutral-400">Crisp batter, tentsuyu</p>
</div>
<span className="text-sm text-emerald-400">$14</span>
</div>
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div>
<h5 className="font-medium text-neutral-100">Yuzu Highball</h5>
<p className="text-xs text-neutral-400">Whisky, yuzu, shiso leaf</p>
</div>
<span className="text-sm text-emerald-400">$14</span>
</div>
<div className="flex justify-between items-start p-3 rounded-lg border border-white/10 bg-neutral-800/30">
<div>
<h5 className="font-medium text-neutral-100">Dassai 45 Sake</h5>
<p className="text-xs text-neutral-400">Junmai Daiginjo</p>
</div>
<span className="text-sm text-emerald-400">$18</span>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between pt-4 border-t border-white/10">
<p className="text-xs text-neutral-400">Menu items and prices subject to seasonal availability</p>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-2 text-sm hover:bg-neutral-700" href="#menu" id="viewFullMenu">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
            View Full Menu
          </a>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-emerald-400" id="reserveFromMenu">
<svg className="lucide lucide-calendar-check h-4 w-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
            Reserve Now
          </button>
</div>
</div>
</div>
</div>

</div>
</div>

<div className="relative z-10 flex items-center justify-between border-t border-white/10 px-6 md:px-10 py-4 text-xs text-neutral-300 animate-in show" style={{-Delay: '900ms'}}>
<div className="flex items-center gap-4">
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-map-pin h-3.5 w-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> 124 Minami Ave
                  </span>
<span className="hidden sm:inline-flex items-center gap-1.5">
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Open today 12:00–23:00
                  </span>
</div>
<div className="flex items-center gap-3">
<button aria-label="Instagram" className="rounded-full border border-white/10 p-1.5 hover:bg-neutral-800"><svg className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></button>
<button aria-label="Facebook" className="rounded-full border border-white/10 p-1.5 hover:bg-neutral-800"><svg className="lucide lucide-facebook h-4 w-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></button>
<button aria-label="Share" className="rounded-full border border-white/10 p-1.5 hover:bg-neutral-800"><svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg></button>
</div>
</div>
</div>
</div>
</div>

<aside className="col-span-12 lg:col-span-4 flex flex-col lg:flex-col gap-4 md:gap-6 overflow-x-auto lg:overflow-visible animate-in slide-left animate-stagger show pb-1" style={{-Delay: '300ms'}}>

<a className="group relative flex-1 min-w-[260px] lg:min-w-0 h-64 md:h-72 overflow-hidden rounded-3xl border border-white/10 animate-in show" href="#menu" style={{-Delay: '400ms'}}>
<img alt="Plated sushi roll with greens" className="absolute inset-0 h-full w-full object-cover image-hover transition-all duration-300 group-hover:blur-sm" src="https://images.unsplash.com/photo-1512132411229-c30391241dd8?w=3840&amp;q=80"/>
<div className="bg-gradient-to-b from-black/10 via-black/40 to-black/70 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be4c469a-0090-4702-b71e-fd45162a29c6_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 image-hover-subtle transition-all duration-300 group-hover:blur-sm" style={{}}></div>

<div className="z-10 flex absolute right-4 bottom-4 items-center">
<span className="text-xl text-neutral-100 tracking-tight font-serif border-0 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>MENU</span>
<span className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-neutral-200 group-hover:translate-x-0.5 transition">
<svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<button className="group flex-1 min-w-[260px] lg:min-w-0 md:h-72 overflow-hidden relative text-left h-64 border-white/10 border rounded-3xl top-0 right-0 bottom-0 left-0 animate-in show" id="openReservationRail" style={{-Delay: '500ms'}}>
<img alt="Guest seated at dinner with wine" className="absolute inset-0 h-full w-full object-cover image-hover transition-all duration-300 group-hover:blur-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c61614d6-d4ab-402c-ad91-48ebadf6e6ba_800w.jpg"/>
<div className="bg-gradient-to-b from-black/10 via-black/40 to-black/70 absolute top-0 right-0 bottom-0 left-0 transition-all duration-300 group-hover:blur-sm"></div>

<div className="absolute bottom-4 right-4 z-10 flex items-center">
<span className="text-xl text-neutral-100 tracking-tight font-serif border-0 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>RESERVATION</span>
<span className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-neutral-200 group-hover:scale-105 transition">
<svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</button>

<a className="group relative flex-1 min-w-[260px] lg:min-w-0 h-64 md:h-72 overflow-hidden rounded-3xl border border-white/10 animate-in show" href="#space" style={{-Delay: '600ms'}}>
<img alt="Warm modern restaurant interior" className="absolute inset-0 h-full w-full object-cover image-hover transition-all duration-300 group-hover:blur-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/69b12c7c-bd2f-41ee-8a25-97100d9ab96f_800w.jpg" style={{}}/>
<div className="absolute bg-gradient-to-b from-black/10 via-black/40 to-black/70 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/69b12c7c-bd2f-41ee-8a25-97100d9ab96f_800w.jpg)] bg-cover top-0 right-0 bottom-0 left-0 image-hover-subtle transition-all duration-300 group-hover:blur-sm" style={{}}></div>

<div className="absolute bottom-4 right-4 z-10 flex items-center">
<span className="text-xl text-neutral-100 tracking-tight font-serif border-0 rounded-full pt-2.5 pr-5 pb-2.5 pl-5" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>OUR SPACE</span>
<span className="-ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-neutral-900/80 text-neutral-200 group-hover:scale-105 transition">
<svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>
</aside>
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-16 relative" id="menu">
<div className="max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex items-end justify-between gap-6 animate-in show" style={{-Delay: '100ms'}}>
<div className="">
<h2 className="md:text-5xl text-4xl tracking-tight font-serif" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>The Menu</h2>
<p className="mt-2 text-neutral-300">Crafted daily from Tokyo market selections and local catch.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-neutral-800 text-sm bg-neutral-900/60 border-white/10 border rounded-lg pt-2 pr-3.5 pb-2 pl-3.5" href="#">
<svg className="lucide lucide-download h-4 w-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download PDF
    </a>
</div>

<div className="mt-8 flex justify-center animate-in show" style={{-Delay: '150ms'}}>
<div className="inline-flex overflow-x-auto bg-neutral-900/50 border-white/10 border rounded-2xl pt-1.5 pr-1.5 pb-1.5 pl-1.5 space-x-2">
<button className="tab-btn flex-shrink-0 rounded-xl px-4 py-2.5ald-400 hover:bg-emerald-500/30 transition whitespace-nowrap bg-neutral-900/50 text-neutral-300" data-tab="appetizers">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18"></path>
<path d="M3 6h18"></path>
<path d="M3 18h18"></path>
</svg>
<span>Appetizers</span>
</div>
</button>
<button className="tab-btn flex-shrink-0 hover:bg-neutral-800/60 transition whitespace-nowrap active text-sm font-medium text-emerald-400 bg-emerald-500/20 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4" data-tab="food">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path>
<path d="M18 12v.5"></path>
<path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path>
<path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path>
<path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path>
<path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path>
</svg>
<span className="">Sushi &amp; Sashimi</span>
</div>
</button>
<button className="tab-btn flex-shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-300 hover:bg-neutral-800/60 transition whitespace-nowrap bg-neutral-900/50" data-tab="drinks">
<div className="flex items-center gap-2">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 22h8"></path>
<path d="M7 10h10"></path>
<path d="M12 15v7"></path>
<path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
</svg>
<span className="">Wine &amp; Sake</span>
</div>
</button>
<button className="tab-btn flex-shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-300 hover:bg-neutral-800/60 transition whitespace-nowrap bg-neutral-900/50" data-tab="cocktails">
<div className="flex items-center gap-2">
<svg className="lucide lucide-martini w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="martini" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 22h8"></path><path d="M12 11v11"></path><path d="m19 3-7 8-7-8Z"></path></svg>
<span className="">Cocktails</span>
</div>
</button>
<button className="tab-btn flex-shrink-0 rounded-xl px-4 py-2.5 text-sm font-medium text-neutral-300 hover:bg-neutral-800/60 transition whitespace-nowrap bg-neutral-900/50" data-tab="desserts">
<div className="flex items-center gap-2">
<svg className="lucide lucide-dessert w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="dessert" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826"></path><path d="M20.804 14.869a9 9 0 0 1-17.608 0"></path><circle cx="12" cy="4" r="2"></circle></svg>
<span className="">Desserts</span>
</div>
</button>
</div>
</div>

<div className="overflow-y-auto max-h-[600px] mt-8 space-y-6" id="tabContentContainer">

<div className="tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-stagger" id="appetizers">
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '200ms'}}>
<div className="relative overflow-hidden">
<img alt="Tempura" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1750308250159-eabb42417e0c?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Large tiger prawns encased in our signature light, airy tempura batter made with ice-cold sparkling water. Served immediately with warm tentsuyu dipping sauce and fresh grated daikon radish for cleansing the palate.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Prawn Tempura</h3>
<span className="text-sm text-neutral-300">$14</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Crisp batter, tentsuyu, daikon oroshi.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '300ms'}}>
<div className="relative overflow-hidden">
<img alt="Gyoza" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1738681336104-608b4e7dc3b0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Hand-folded dumplings filled with pork and chives, pan-fried until golden. Served with black vinegar dipping sauce and chili oil.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Pork Gyoza</h3>
<span className="text-sm text-neutral-300">$12</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Pan-fried dumplings, black vinegar.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '400ms'}}>
<div className="relative overflow-hidden">
<img alt="Edamame" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1611810174991-5cdd99a2c6b2?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Young soybeans lightly salted and grilled with a touch of garlic and sesame oil. A perfect start to your meal.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Charred Edamame</h3>
<span className="text-sm text-neutral-300">$8</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Garlic, sesame oil, sea salt.</p>
</div>
</div>
</div><div className="tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-stagger" id="appetizers">
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '200ms'}}>
<div className="relative overflow-hidden">
<img alt="Tuna Tataki" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1596189181426-7f63a1737f0d?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Seared yellowfin tuna coated in toasted sesame seeds and black pepper. Sliced thin and served with ponzu gel, micro greens, and pickled ginger. The exterior is charred while the center remains ruby red and buttery.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Tuna Tataki</h3>
<span className="text-sm text-neutral-300">$16</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Sesame crust, ponzu, micro greens.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '300ms'}}>
<div className="relative overflow-hidden">
<img alt="Agedashi Tofu" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1745582763219-1a5259056ba3?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Silky tofu lightly dusted in potato starch and fried until golden. Served in a warm dashi broth with grated daikon, bonito flakes, and scallions. A comforting dish that showcases the pure flavor of premium tofu.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Agedashi Tofu</h3>
<span className="text-sm text-neutral-300">$10</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Crispy tofu, dashi broth, bonito.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '400ms'}}>
<div className="relative overflow-hidden">
<img alt="Hamachi Crudo" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1643639946354-7a04bd9a6129?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Fresh hamachi sashimi dressed with jalapeño oil, citrus soy, and topped with paper-thin radish slices. Finished with crispy garlic chips and a sprinkle of sea salt. The fish melts on your tongue with bright, clean flavors.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Hamachi Crudo</h3>
<span className="text-sm text-neutral-300">$18</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Jalapeño oil, citrus soy, radish.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '700ms'}}>
<div className="relative overflow-hidden">
</div>
</div>
</div>

<div className="tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 animate-stagger active" id="food">
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '200ms'}}>
<div className="overflow-hidden relative top-0 right-0 bottom-0 left-0">
<img alt="Omakase flight" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/60 opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">A carefully curated journey through seasonal fish and vegetables. Each piece is served at optimal temperature with house-made accompaniments. The progression builds from lighter, more delicate flavors to richer, more complex preparations.</p>
</div>
</div>
<span className="absolute top-3 right-3 rounded-full bg-emerald-500/90 px-2.5 py-1 text-xs text-neutral-900">Chef's Pick</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Omakase Flight</h3>
<span className="text-sm text-neutral-300">$25</span>
</div>
<p className="mt-1 text-sm text-neutral-400">10-course progression of nigiri and small plates.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '300ms'}}>
<div className="relative overflow-hidden">
<img alt="Toro Nigiri" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1562158074-d49fbeffcc91?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Premium bluefin tuna belly, aged for 7 days and brushed with aged soy. Served with freshly grated wasabi from Shizuoka Prefecture. The marbling melts on your tongue, delivering rich umami with a clean finish.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Toro Nigiri Duo</h3>
<span className="text-sm text-neutral-300">$8</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Bluefin belly, brushed soy, fresh wasabi.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '400ms'}}>
<div className="relative overflow-hidden">
<img alt="Salmon sashimi" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1599253336132-b3d7cc7799eb?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">New Zealand King salmon, dry-aged for 3 days to concentrate flavor. Topped with citrus kosho made from yuzu and green chilies, finished with aromatic shiso oil. Served at precisely 58°F for optimal texture.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Ora King Sashimi</h3>
<span className="text-sm text-neutral-300">$18</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Citrus kosho, shiso oil.</p>
</div>
</div>
<div className="menu-card overflow-hidden animate-in show group bg-neutral-900/50 border-white/10 border rounded-2xl" style={{-Delay: '500ms'}}>
<div className="relative overflow-hidden">
<img alt="Dragon roll" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1728691192936-096ed468762c?w=3840&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Fresh water eel glazed with our signature tare sauce, paired with creamy avocado and cucumber. The roll is lightly torched tableside, creating a caramelized exterior while maintaining the tender interior. Garnished with black sesame.</p>
</div>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Charred Dragon Roll</h3>
<span className="text-sm text-neutral-300">$19</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Eel, avocado, torched glaze.</p>
</div>
</div>
<div className="menu-card overflow-hidden animate-in show group bg-neutral-900/50 border-white/10 border rounded-2xl" style={{-Delay: '600ms'}}>
<div className="relative overflow-hidden">
<img alt="Sea urchin nigiri" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1719789254386-1dd65f30bf4e?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Santa Barbara sea urchin, served at peak freshness with warm sushi rice seasoned with rice vinegar. The creamy, briny uni melts instantly, offering pure ocean flavor with a hint of sweetness. A true delicacy for adventurous palates.</p>
</div>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Santa Barbara Uni</h3>
<span className="text-sm text-neutral-300">$22</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Sea urchin, warm rice, nori.</p>
</div>
</div>
<div className="menu-card overflow-hidden animate-in show group bg-neutral-900/50 border-white/10 border rounded-2xl" style={{-Delay: '700ms'}}>
<div className="relative overflow-hidden">
<img alt="Chirashi bowl" className="menu-image h-48 w-full object-cover" src="https://images.unsplash.com/photo-1638866381709-071747b518c8?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">A beautiful assortment of seven different sashimi varieties over seasoned sushi rice. Includes tuna, salmon, yellowtail, mackerel, and seasonal catches. Garnished with ikura, cucumber, and pickled vegetables. Perfect for sharing or as a complete meal.</p>
</div>
</div>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Chef's Chirashi Bowl</h3>
<span className="text-sm text-neutral-300">$28</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Seven fish selection, ikura, pickles.</p>
</div>
</div>
</div>

<div className="tab-content grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8 pb-8" id="wines">

<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<h3 className="font-serif text-2xl tracking-tight mb-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Wine Selection</h3>
<div className="space-y-4">
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Chablis Premier Cru</h4>
<p className="text-sm text-neutral-400">William Fèvre, Burgundy 2021</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$16 / $85</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Pinot Noir</h4>
<p className="text-sm text-neutral-400">Willamette Valley, Oregon 2022</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$14 / $68</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Champagne</h4>
<p className="text-sm text-neutral-400">Billecart-Salmon Brut Réserve</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$22 / $120</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Sancerre</h4>
<p className="text-sm text-neutral-400">Henri Bourgeois, Loire Valley 2023</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$15 / $75</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
<h3 className="font-serif text-2xl tracking-tight mb-4" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Premium Sake</h3>
<div className="space-y-4">
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Dassai 45</h4>
<p className="text-sm text-neutral-400">Junmai Daiginjo, Yamaguchi</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$18 / $95</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Kubota Manju</h4>
<p className="text-sm text-neutral-400">Junmai Daiginjo, Niigata</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$22 / $115</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Hakkaisan Tokubetsu</h4>
<p className="text-sm text-neutral-400">Junmai, Niigata Prefecture</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$12 / $58</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="font-medium text-neutral-100">Kokuryu Ishidaya</h4>
<p className="text-sm text-neutral-400">Junmai Ginjo, Fukui</p>
</div>
<div className="text-right">
<span className="text-sm text-neutral-300">$16 / $82</span>
<p className="text-xs text-neutral-500">glass / bottle</p>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" id="cocktails">
<div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
<div className="relative overflow-hidden">
<img alt="Yuzu Highball" className="h-48 w-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<span className="absolute top-3 right-3 rounded-full bg-neutral-900/70 px-2.5 py-1 text-xs border border-white/10">Signature</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Yuzu Highball</h3>
<span className="text-sm text-neutral-300">$14</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Whisky, yuzu, soda, shiso leaf.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
<div className="relative overflow-hidden">
<img alt="Sakura Martini" className="h-48 w-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Sakura Martini</h3>
<span className="text-sm text-neutral-300">$16</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Gin, cherry blossom syrup, lemon.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
<div className="relative overflow-hidden">
<img alt="Smoky Old Fashioned" className="h-48 w-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1536935338788-846bb9981813?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Smoky Old Fashioned</h3>
<span className="text-sm text-neutral-300">$18</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Japanese whisky, maple, binchotan smoke.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
<div className="relative overflow-hidden">
<img alt="Matcha Sour" className="h-48 w-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Matcha Sour</h3>
<span className="text-sm text-neutral-300">$15</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Vodka, matcha, egg white, lime.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
<div className="relative overflow-hidden">
<img alt="Plum Wine Spritz" className="h-48 w-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1481671703460-040cb8a2d909?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Plum Wine Spritz</h3>
<span className="text-sm text-neutral-300">$12</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Umeshu, prosecco, cucumber, mint.</p>
</div>
</div>
<div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
<div className="relative overflow-hidden">
<img alt="Negroni Variation" className="h-48 w-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1686055603777-b09f802d41b6?w=3840&amp;q=80"/>
<div className="absolute bg-gradient-to-t from-black/60 to-transparent top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Kyoto Negroni</h3>
<span className="text-sm text-neutral-300">$17</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Gin, sake, Campari, vermouth.</p>
</div>
</div>
</div>

<div className="tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" id="desserts">
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '200ms'}}>
<div className="relative overflow-hidden">
<img alt="Matcha dessert" className="menu-image w-full h-48 object-cover" src="https://images.unsplash.com/photo-1736195676924-162ed0fac50b?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Silky smooth panna cotta infused with ceremonial grade matcha from Uji, Kyoto. Topped with house-made toasted sesame brittle and a delicate yuzu gel that adds brightness to balance the earthy matcha bitterness.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Matcha Panna Cotta</h3>
<span className="text-sm text-neutral-300">$9</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Toasted sesame brittle, yuzu.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '300ms'}}>
<div className="relative overflow-hidden">
<img alt="Mochi ice cream" className="menu-image w-full h-48 object-cover" src="https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=3840&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">House-made mochi filled with premium ice cream. Choose from black sesame, red bean, or yuzu flavors. Served with a delicate soy caramel sauce.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Mochi Ice Cream Trio</h3>
<span className="text-sm text-neutral-300">$12</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Black sesame, red bean, yuzu.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '400ms'}}>
<div className="relative overflow-hidden">
<img alt="Dorayaki" className="menu-image w-full h-48 object-cover" src="https://images.unsplash.com/photo-1626497132810-f38eb29c5385?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Fluffy pancake sandwich filled with sweet red bean paste and a hint of honey. Lightly grilled and served warm with green tea.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Honey Dorayaki</h3>
<span className="text-sm text-neutral-300">$8</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Red bean, honey, served warm.</p>
</div>
</div>
</div><div className="tab-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" id="desserts">
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '200ms'}}>
<div className="relative overflow-hidden">
<img alt="Matcha dessert" className="menu-image w-full h-48 object-cover" src="https://images.unsplash.com/photo-1586590830950-2f308452eebc?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Silky smooth panna cotta infused with ceremonial grade matcha from Uji, Kyoto. Topped with house-made toasted sesame brittle and a delicate yuzu gel that adds brightness to balance the earthy matcha bitterness.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Matcha Panna Cotta</h3>
<span className="text-sm text-neutral-300">$9</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Toasted sesame brittle, yuzu.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '300ms'}}>
<div className="relative overflow-hidden">
<img alt="Chocolate fondant" className="menu-image w-full h-48 object-cover" src="https://images.unsplash.com/photo-1702692534041-227a18ac52de?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Rich dark chocolate soufflé with a molten center, served warm with vanilla bean ice cream. Made with 70% Belgian cocoa and finished with a light dusting of powdered sugar and candied orange zest.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Chocolate Soufflé</h3>
<span className="text-sm text-neutral-300">$11</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Molten center, vanilla ice cream.</p>
</div>
</div>
<div className="menu-card rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50 animate-in show group" style={{-Delay: '400ms'}}>
<div className="relative overflow-hidden">
<img alt="Cheesecake" className="menu-image w-full h-48 object-cover" src="https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=800&amp;q=80" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
<div className="text-center text-white-hover:translate-y-0 transition-transform duration-300">
<p className="text-sm leading-relaxed">Japanese-style rare cheesecake made with cream cheese and mascarpone, lightened with whipped cream. Served with fresh seasonal berries and a delicate honey lavender drizzle. Perfectly creamy and not too sweet.</p>
</div>
</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Rare Cheesecake</h3>
<span className="text-sm text-neutral-300">$10</span>
</div>
<p className="mt-1 text-sm text-neutral-400">Seasonal berries, honey lavender.</p>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3 animate-in show mt-8 items-center justify-center" style={{-Delay: '800ms'}}>
<button className="inline-flex gap-2 hover:bg-emerald-400 text-sm font-medium text-neutral-900 bg-emerald-500/90 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 items-center" id="openReservationMenu">Book your reservation<svg className="lucide lucide-calendar-plus h-4 w-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg></button><button className="liquid-glass-button relative inline-flex items-center justify-center h-10 px-6 rounded-xl text-white/90 font-medium text-sm cursor-pointer outline-none overflow-hidden bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/15 shadow-lg hover:scale-105 hover:shadow-xl hover:-translate-y-0.5 active:scale-98 active:translate-y-px transition-all duration-300 ease-out" style={{boxShadow: '0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)'}}>
<div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3"></div>
</div>
<span className="relative z-10">For take out</span>

<style>
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1
      }
  
      100% {
        transform: scale(2);
        opacity: 0
      }
    }
  </style>
</button>
</div>

</div>
</section>

<section className="md:py-24 pt-16 pb-16 relative" id="about">
<div className="mx-auto max-w-7xl px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
<div className="relative overflow-hidden rounded-3xl border border-white/10 animate-in slide-right show" style={{-Delay: '100ms'}}>
<img alt="Chef preparing fish" className="h-full w-full object-cover image-hover" src="https://images.unsplash.com/photo-1711991022613-63df8929f311?w=3840&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 rounded-full bg-neutral-900/70 px-3 py-1 text-xs border border-white/10">Since 2016</span>
</div>
<div className="animate-in slide-left animate-stagger show" style={{-Delay: '200ms'}}>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight animate-in show" style={{fontFamily: '\'Cormorant Garamond\', serif', -Delay: '300ms'}}>Craft, Seasonality, Respect</h2>
<p className="mt-3 text-neutral-300 animate-in show" style={{-Delay: '400ms'}}>
            We source from small fisheries and local farms, aging and curing in-house for depth and balance. Our menu shifts with the market—no two evenings are the same.
          </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-stagger">
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4 animate-in show" style={{-Delay: '500ms'}}>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-fish h-4 w-4" data-lucide="fish" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path><path d="M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path></svg> Wild catch
              </div>
<p className="mt-2 text-xs text-neutral-400">Line-caught, flash chilled.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4 animate-in show" style={{-Delay: '600ms'}}>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-leaf h-4 w-4" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> Seasonal greens
              </div>
<p className="mt-2 text-xs text-neutral-400">Market herbs and microgreens.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-4 animate-in show" style={{-Delay: '700ms'}}>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-flame h-4 w-4" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg> Char &amp; smoke
              </div>
<p className="mt-2 text-xs text-neutral-400">Binchotan finishes for aroma.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 relative pt-16 pb-16" id="space">
<div className="max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="animate-in show" style={{-Delay: '100ms'}}>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Our Space</h2>
<p className="mt-2 text-neutral-300 max-w-2xl">An intimate cedar bar for omakase, soft stone textures, and a low, golden glow. Designed for focus and ease.</p>
</div>
<div className="mt-8 relative overflow-hidden rounded-3xl border border-white/10 animate-in show" style={{-Delay: '200ms'}}>
<div className="flex transition-transform duration-700 ease-in-out" id="imageCarousel" style={{transform: 'translateX(-100%)'}}>
<div className="min-w-full h-96 relative">
<img alt="Bar counter" className="w-full h-full object-cover image-hover-subtle" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/69b12c7c-bd2f-41ee-8a25-97100d9ab96f_3840w.jpg" style={{}}/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
<span className="text-sm text-white">Bar Counter</span>
</div>
</div>
<div className="min-w-full h-96 relative">
<img alt="Dining room" className="w-full h-full object-cover image-hover-subtle" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33ae7024-68a3-4d02-abdd-56bfc4e7d4aa_3840w.jpg" style={{}}/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
<span className="text-sm text-white">Dining Room</span>
</div>
</div>
<div className="min-w-full h-96 relative">
<img alt="Ambient lighting" className="w-full h-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=3840&amp;q=80" style={{}}/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
<span className="text-sm text-white">Ambient Lighting</span>
</div>
</div>
<div className="min-w-full h-96 relative">
<img alt="Kitchen workspace" className="w-full h-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1651977560788-98792cd34da0?w=3840&amp;q=80" style={{}}/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
<span className="text-sm text-white">Kitchen Workspace</span>
</div>
</div>
<div className="min-w-full h-96 relative">
<img alt="Private dining area" className="w-full h-full object-cover image-hover-subtle" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/11aba371-b6f5-4906-88c1-d8cddc37ddad_3840w.jpg" style={{}}/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
<span className="text-sm text-white">Private Dining</span>
</div>
</div>
<div className="min-w-full h-96 relative">
<img alt="Wine cellar" className="w-full h-full object-cover image-hover-subtle" src="https://images.unsplash.com/photo-1743388572168-876de1712713?w=3840&amp;q=80" style={{}}/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
<span className="text-sm text-white">Wine Cellar</span>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 flex space-x-2">
<button className="w-2 h-2 rounded-full bg-white carousel-dot active:opacity-100 opacity-50" data-slide="0"></button>
<button className="w-2 h-2 rounded-full bg-white carousel-dot opacity-75" data-slide="1"></button>
<button className="w-2 h-2 rounded-full bg-white carousel-dot opacity-50" data-slide="2"></button>
<button className="w-2 h-2 rounded-full bg-white carousel-dot opacity-50" data-slide="3"></button>
<button className="carousel-dot bg-white w-2 h-2 rounded-full opacity-50" data-slide="4"></button>
<button className="w-2 h-2 rounded-full bg-white carousel-dot opacity-50" data-slide="5"></button>
</div>

<button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all" id="prevSlide">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<button className="transform -translate-y-1/2 hover:bg-black/70 transition-all absolute bg-black/50 rounded-full pt-2 pr-2 pb-2 pl-2 top-1/2 right-4" id="nextSlide">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="md:py-24 pt-16 pb-16 relative" id="hours">
<div className="mx-auto max-w-7xl px-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-stagger">
<div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 animate-in show" style={{-Delay: '100ms'}}>
<h3 className="font-serif text-2xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Hours</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex items-center justify-between"><span>Mon–Thu</span><span>12:00–22:00</span></li>
<li className="flex items-center justify-between"><span>Fri–Sat</span><span>12:00–23:00</span></li>
<li className="flex items-center justify-between"><span>Sun</span><span>Closed</span></li>
</ul>
<button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-emerald-400" id="openReservationHours">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Book for tonight
          </button>
</div>
<div className="rounded-3xl border border-white/10 bg-neutral-900/50 p-6 animate-in show" style={{-Delay: '200ms'}}>
<h3 className="font-serif text-2xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Location</h3>
<p className="mt-2 text-neutral-300 text-sm">124 Minami Ave, Suite B, River District</p>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<a className="underline decoration-emerald-500/50 underline-offset-4 hover:text-white" href="https://maps.google.com" rel="noopener" target="_blank">Open in Maps</a>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-300">
<svg className="lucide lucide-car h-4 w-4" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
<span>Street + garage parking</span>
</div>
</div>
<div className="rounded-3xl border border-white/10 overflow-hidden animate-in show" style={{-Delay: '300ms'}}>
<div className="w-full h-64 relative top-0 right-0 bottom-0 left-0">
<img alt="City map placeholder" className="absolute inset-0 h-full w-full object-cover image-hover-subtle" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd358ba6-8fe1-427a-addd-3ba9abf64f43_3840w.jpg" style={{}}/>
<div className="bg-center absolute bg-gradient-to-t from-black/40 to-transparent top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2 text-sm">
<span className="inline-flex items-center gap-2"><svg className="lucide lucide-navigation h-4 w-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg> Get directions</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10 animate-in show" style={{-Delay: '100ms'}}>
<div className="mx-auto max-w-7xl px-4">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="inline-block bg-emerald-500/90 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bc80e1ba-98bb-4be8-a20c-c4c10ddaf146_320w.jpg)] bg-cover ring-emerald-400/40 ring-1 rounded-full image-hover" style={{}}></span>
<span className="text-xl tracking-tight font-playfair" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Sora Sushi</span>
</div>
<div className="text-sm text-neutral-400">
          © <span id="year">2025</span> Sora Dining Group. All rights reserved.
        </div>
<div className="flex items-center gap-3">
<a className="text-sm hover:text-white" href="#">Privacy</a>
<a className="text-sm hover:text-white" href="#">Terms</a>
<a className="text-sm hover:text-white" href="mailto:hello@sorasushi.com">Contact</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="reservationModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="bg-neutral-900/60 w-[92%] max-w-xl border-white/10 border rounded-3xl mt-24 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-md">
<div className="flex items-start justify-between">
<div className="">
<h3 className="font-serif text-3xl tracking-tight" style={{fontFamily: '\'Cormorant Garamond\', serif'}}>Reserve a Table</h3>
<p className="mt-1 text-sm text-neutral-300">We'll hold your table for 15 minutes. Counter seating available upon request.</p>
</div>
<button className="hover:bg-neutral-800 border-white/10 border rounded-lg pt-2 pr-2 pb-2 pl-2" id="closeReservation">
<svg className="lucide lucide-x w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<form className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="text-xs text-neutral-400">Name</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-800/70 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Your name" required="" type="text"/>
</div>
<div className="">
<label className="text-xs text-neutral-400">Email</label>
<input className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-800/70 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="">
<label className="text-xs text-neutral-400">Date</label>
<input className="focus:outline-none focus:ring-2 focus:ring-white-500/50 text-sm bg-neutral-800/70 w-full border-white/10 border rounded-lg mt-1 pt-2 pr-3 pb-2 pl-3" required="" type="date"/>
</div>
<div className="">
<label className="text-xs text-neutral-400">Time</label>
<input className="focus:outline-none focus:ring-2 focus:ring-neutral-500/50 text-sm bg-neutral-800/70 w-full border-white/10 border rounded-lg mt-1 pt-2 pr-3 pb-2 pl-3" required="" type="time"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Party size</label>
<select className="focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-sm bg-neutral-800/70 w-full border-white/10 border rounded-lg mt-1 pt-2 pr-3 pb-2 pl-3">
<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-xs text-neutral-400">Notes</label>
<textarea className="mt-1 w-full rounded-lg border border-white/10 bg-neutral-800/70 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50" placeholder="Allergies, counter seating, occasion…" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<p className="text-xs text-neutral-400">By booking you agree to our reservation policy.</p>
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 px-4 py-2.5 text-sm font-medium text-neutral-900 hover:bg-emerald-400" type="submit">
<svg className="lucide lucide-check-circle2 h-4 w-4" data-lucide="check-circle2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Confirm
          </button>
</div>
</form>
</div>
</div>




    </>
  );
}
