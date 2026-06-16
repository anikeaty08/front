import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          // Gallery filtering functionality
          document.addEventListener('DOMContentLoaded', function() {
            const container = document.getElementById('aura-emfqfrzed');
            const filterButtons = container.querySelectorAll('.gallery-filter');
            const galleryItems = container.querySelectorAll('.gallery-item');
            const categoryMenuBtns = container.querySelectorAll('.category-menu-btn');
            const categoryDropdowns = container.querySelectorAll('.category-dropdown');
            
            // Gallery filter functionality
            filterButtons.forEach(button => {
              button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                
                // Update active button styles
                filterButtons.forEach(btn => {
                  btn.classList.remove('active', 'bg-gray-900', 'text-white');
                  btn.classList.add('bg-gray-100', 'text-gray-700');
                });
                
                this.classList.add('active', 'bg-gray-900', 'text-white');
                this.classList.remove('bg-gray-100', 'text-gray-700');
                
                // Filter gallery items with smooth animation
                galleryItems.forEach((item, index) => {
                  if (filter === 'all' || item.dataset.category === filter) {
                    // Show item
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    
                    setTimeout(() => {
                      item.style.opacity = '1';
                      item.style.transform = 'scale(1)';
                    }, index * 100);
                  } else {
                    // Hide item
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    
                    setTimeout(() => {
                      item.style.display = 'none';
                    }, 300);
                  }
                });
              });
            });

            // Category menu functionality
            categoryMenuBtns.forEach(btn => {
              btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const dropdown = this.nextElementSibling;
                
                // Close all other dropdowns
                categoryDropdowns.forEach(d => {
                  if (d !== dropdown) {
                    d.classList.add('hidden');
                  }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('hidden');
              });
            });

            // Close dropdowns when clicking outside
            document.addEventListener('click', function(e) {
              if (!e.target.closest('.category-menu-btn')) {
                categoryDropdowns.forEach(dropdown => {
                  dropdown.classList.add('hidden');
                });
              }
            });
          });

          // Menu action functions
          function sortGallery(sortType) {
            console.log('Sorting gallery by:', sortType);
            // Add your sorting logic here
            alert(`Sorting gallery by ${sortType}`);
          }

          function shareCategory(category) {
            console.log('Sharing category:', category);
            // Add your sharing logic here
            if (navigator.share) {
              navigator.share({
                title: `${category.charAt(0).toUpperCase() + category.slice(1)} Gallery`,
                text: `Check out these amazing ${category} creations!`,
                url: window.location.href
              });
            } else {
              // Fallback for browsers that don't support Web Share API
              navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
              });
            }
          }

          function exportCategory(category) {
            console.log('Exporting category:', category);
            // Add your export logic here
            alert(`Exporting ${category} images...`);
          }
        


        // Gallery filtering functionality
        document.addEventListener('DOMContentLoaded', function() {
          const filterButtons = document.querySelectorAll('#aura-emfq4j7rs .gallery-filter');
          const galleryItems = document.querySelectorAll('#aura-emfq4j7rs .gallery-item');
          
          filterButtons.forEach(button => {
            button.addEventListener('click', function() {
              const filter = this.dataset.filter;
              
              // Update active button styles
              filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-gray-900', 'text-white');
                btn.classList.add('bg-gray-100', 'text-gray-700');
              });
              
              this.classList.add('active', 'bg-gray-900', 'text-white');
              this.classList.remove('bg-gray-100', 'text-gray-700');
              
              // Filter gallery items with smooth animation
              galleryItems.forEach((item, index) => {
                if (filter === 'all' || item.dataset.category === filter) {
                  // Show item
                  item.style.display = 'block';
                  item.style.opacity = '0';
                  item.style.transform = 'scale(0.9)';
                  
                  setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                  }, index * 100);
                } else {
                  // Hide item
                  item.style.opacity = '0';
                  item.style.transform = 'scale(0.9)';
                  
                  setTimeout(() => {
                    item.style.display = 'none';
                  }, 300);
                }
              });
            });
          });
        });
      


    // Counter animation for stats
    function animateCounters() {
      const counters = document.querySelectorAll('#aura-emfqg1833 .counter');
      
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          // Add suffix for percentage
          const suffix = counter.parentElement.nextElementSibling.textContent.includes('Satisfaction') ? '%' : 
                        counter.parentElement.nextElementSibling.textContent.includes('Projects') ? '+' : '+';
          
          counter.textContent = Math.floor(current) + suffix;
        }, 16);
      });
    }
    
    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          entry.target.classList.add('animated');
          animateCounters();
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe the stats container
    observer.observe(document.getElementById('aura-emfqg1833'));
  


    (function() {
      const container = document.getElementById('aura-emfqcy41p');
      if (!container) return;

      const tabs = container.querySelectorAll('.billing-tab');
      const prices = container.querySelectorAll('.price');
      const hints = {
        starter: container.querySelector('[data-billing-hint="starter"]'),
        pro: container.querySelector('[data-billing-hint="pro"]'),
        enterprise: container.querySelector('[data-billing-hint="enterprise"]')
      };

      function setBilling(mode) {
        // Update tabs visual state
        tabs.forEach(btn => {
          const isActive = btn.dataset.bill === mode;
          btn.classList.toggle('bg-white', isActive);
          btn.classList.toggle('ring-1', isActive);
          btn.classList.toggle('ring-black/5', isActive);
          btn.classList.toggle('shadow-sm', isActive);
          btn.classList.toggle('text-gray-900', isActive);
          btn.classList.toggle('text-gray-600', !isActive);
        });

        // Update all prices with smooth transition
        prices.forEach(el => {
          const newValue = el.getAttribute(mode === 'monthly' ? 'data-monthly' : 'data-yearly');
          // Add smooth transition effect
          el.style.transform = 'scale(0.95)';
          el.style.opacity = '0.7';
          
          setTimeout(() => {
            el.textContent = newValue;
            el.style.transform = 'scale(1)';
            el.style.opacity = '1';
          }, 150);
        });

        // Update hint text
        const yearlyNote = 'Billed yearly — save 30%';
        const monthlyNoteStarter = 'Ideal for businesses ready to explore AI and intelligent automation.';
        const monthlyNotePro = 'Built for companies that want to gain an edge with AI‑powered automation.';
        const monthlyNoteEnt = 'For businesses aiming to harness AI and automation to lead their industry.';

        if (mode === 'yearly') {
          if (hints.starter) hints.starter.textContent = yearlyNote;
          if (hints.pro) hints.pro.textContent = yearlyNote;
          if (hints.enterprise) hints.enterprise.textContent = yearlyNote;
        } else {
          if (hints.starter) hints.starter.textContent = monthlyNoteStarter;
          if (hints.pro) hints.pro.textContent = monthlyNotePro;
          if (hints.enterprise) hints.enterprise.textContent = monthlyNoteEnt;
        }
      }

      // Add click event listeners to toggle buttons
      tabs.forEach(btn => {
        btn.addEventListener('click', () => {
          setBilling(btn.dataset.bill);
        });
      });

      // Add CSS for smooth price transitions
      const style = document.createElement('style');
      style.textContent = `
        .price {
          transition: all 0.2s ease-in-out;
        }
      `;
      document.head.appendChild(style);

      // Initialize with monthly billing
      setBilling('monthly');
    })();
  


    (function () {
      const root = document.getElementById('aura-emfo9kf64');
      if (!root) return;

      const tabs = root.querySelectorAll('.billing-tab');
      const prices = root.querySelectorAll('.price');
      const hints = {
        starter: root.querySelector('[data-billing-hint="starter"]'),
        pro: root.querySelector('[data-billing-hint="pro"]'),
        enterprise: root.querySelector('[data-billing-hint="enterprise"]')
      };

      function setBilling(mode) {
        // update tabs visual
        tabs.forEach(btn => {
          const active = btn.dataset.bill === mode;
          btn.classList.toggle('bg-white', active);
          btn.classList.toggle('ring-1', active);
          btn.classList.toggle('ring-black/5', active);
          btn.classList.toggle('shadow-sm', active);
          btn.classList.toggle('text-gray-900', active);
          btn.classList.toggle('text-gray-600', !active);
        });

        // update prices
        prices.forEach(el => {
          const value = el.getAttribute(mode === 'monthly' ? 'data-monthly' : 'data-yearly');
          el.textContent = value;
        });

        // update hints
        const yearlyNote = 'Billed yearly — save 30%';
        const monthlyNoteStarter = 'Ideal for businesses ready to explore AI and intelligent automation.';
        const monthlyNotePro = 'Built for companies that want to gain an edge with AI‑powered automation.';
        const monthlyNoteEnt = 'For businesses aiming to harness AI and automation to lead their industry.';

        if (mode === 'yearly') {
          if (hints.starter) hints.starter.textContent = yearlyNote;
          if (hints.pro) hints.pro.textContent = yearlyNote;
          if (hints.enterprise) hints.enterprise.textContent = yearlyNote;
        } else {
          if (hints.starter) hints.starter.textContent = monthlyNoteStarter;
          if (hints.pro) hints.pro.textContent = monthlyNotePro;
          if (hints.enterprise) hints.enterprise.textContent = monthlyNoteEnt;
        }
      }

      tabs.forEach(btn => {
        btn.addEventListener('click', () => setBilling(btn.dataset.bill));
      });

      // default state
      setBilling('monthly');
    })();
  


      // Initialize Lucide icons
      lucide.createIcons();
      
      // Gallery filtering
      const filterButtons = document.querySelectorAll('.gallery-filter');
      const galleryItems = document.querySelectorAll('.gallery-item');
      
      filterButtons.forEach(button => {
        button.addEventListener('click', () => {
          const filter = button.dataset.filter;
          
          // Update active button
          filterButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-gray-900', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-700');
          });
          
          button.classList.add('active', 'bg-gray-900', 'text-white');
          button.classList.remove('bg-gray-100', 'text-gray-700');
          
          // Filter gallery items with animation
          galleryItems.forEach((item, index) => {
            if (filter === 'all' || item.dataset.category === filter) {
              item.style.display = 'block';
              setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
              }, index * 50);
            } else {
              item.style.opacity = '0';
              item.style.transform = 'scale(0.95)';
              setTimeout(() => {
                item.style.display = 'none';
              }, 300);
            }
          });
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
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, observerOptions);
      
      // Observe animated elements
      document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
      
      // Smooth scrolling for navigation links
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
      
      // Add parallax effect on scroll
      window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.animate-float');
        parallaxElements.forEach(el => {
          const speed = 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="video-background-container top-0 w-full -z-10 absolute h-screen"><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/af6b100b-cd15-4257-b845-8a5388a23f1b/3.mp4"></video></div>

<nav className="fixed top-0 left-0 right-0 z-50 glass bg-white/80 border-b border-gray-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="animate-slide-in-down flex space-x-3 items-center" style={{animationPlayState: 'running'}}>
<span className="text-xl font-semibold tracking-tight">Prism Studio</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="animate-slide-in-down delay-100 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" href="#gallery" style={{animationPlayState: 'running'}}>Gallery</a>
<a className="animate-slide-in-down delay-200 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" href="#features" style={{animationPlayState: 'running'}}>Features</a>
<a className="animate-slide-in-down delay-300 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" href="#showcase" style={{animationPlayState: 'running'}}>Showcase</a>
<a className="animate-slide-in-down delay-400 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors hover-lift" href="#pricing" style={{animationPlayState: 'running'}}>Pricing</a>
</div>

<div className="animate-slide-in-down delay-500 flex items-center space-x-3" style={{animationPlayState: 'running'}}>
<button className="hidden sm:inline-flex text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
              Sign In
            </button>
<button className="cursor-pointer inline-flex flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black/50 max-sm:h-12 text-lg text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] items-center justify-center hover-lift" role="button">Get Started</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center" style={{isolation: 'isolate'}}>

<div className="absolute inset-0 -z-10 flex bg-[#ffffff]/50 items-center justify-center">

<div className="w-[1600px] h-[1600px] rounded-full" style="background:
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 18%, rgba(0,0,0,0.02) 26%, rgba(0,0,0,0) 30%) ,
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.06) 34%, rgba(0,0,0,0) 38%) ,
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.04) 44%, rgba(0,0,0,0) 48%) ,
      radial-gradient(circle at 50% 60%, rgba(0,0,0,0.03) 54%, rgba(0,0,0,0) 58%) ;
      filter: blur(6px);
      opacity: .35;
      mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%);
      -webkit-mask-image: radial-gradient(circle at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%);
      transform: translateY(6vh) scaleX(1.25);">
</div>
</div>

<div className="relative aspect-square flex w-[90vw] max-w-3xl items-center justify-center">

<div className="absolute inset-0 ring-black/5 ring-1 rounded-full shadow-inner blur-3xl" style="background:
        radial-gradient(120% 120% at 30% 25%, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.95) 55%, rgba(230,230,230,0.9) 100%),
        radial-gradient(60% 60% at 65% 70%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transform: scale(1.0);">

<div className="absolute inset-0 rounded-full overflow-hidden">
<div className="absolute inset-0 rounded-full animate-pulse-soft" style={{background: 'radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.4) 0%, rgba(150, 100, 255, 0.3) 30%, rgba(255, 150, 200, 0.2) 60%, transparent 80%)', animation: 'crystalGlow 4s ease-in-out infinite alternate'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at 70% 60%, rgba(255, 200, 100, 0.3) 0%, rgba(100, 255, 200, 0.25) 40%, transparent 70%)', animation: 'crystalGlow2 3s ease-in-out infinite alternate-reverse'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at 50% 10%, rgba(200, 100, 255, 0.2) 0%, rgba(100, 255, 150, 0.15) 50%, transparent 80%)', animation: 'crystalGlow3 5s ease-in-out infinite'}}></div>
</div>
<style>
        @keyframes crystalGlow {
          0% {
            opacity: 0.3;
            transform: scale(0.8) rotate(0deg);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1) rotate(180deg);
          }
          100% {
            opacity: 0.4;
            transform: scale(1.2) rotate(360deg);
          }
        }
        
        @keyframes crystalGlow2 {
          0% {
            opacity: 0.2;
            transform: scale(1.1) rotate(45deg);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.9) rotate(225deg);
          }
          100% {
            opacity: 0.3;
            transform: scale(1.0) rotate(405deg);
          }
        }
        
        @keyframes crystalGlow3 {
          0% {
            opacity: 0.15;
            transform: scale(0.9) rotate(90deg);
          }
          33% {
            opacity: 0.4;
            transform: scale(1.3) rotate(210deg);
          }
          66% {
            opacity: 0.25;
            transform: scale(0.7) rotate(330deg);
          }
          100% {
            opacity: 0.35;
            transform: scale(1.1) rotate(450deg);
          }
        }
      </style>
</div>

<div className="pointer-events-none absolute -top-6 left-10 w-40 h-40 rounded-full" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.55) 35%, rgba(255,255,255,0) 70%)', filter: 'blur(4px)', opacity: '.85'}}></div>
<div className="pointer-events-none absolute bottom-10 right-14 w-24 h-24 rounded-full" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0) 70%)', filter: 'blur(6px)', opacity: '.8'}}></div>

<div className="relative z-20 flex flex-col text-center px-6 py-8 space-y-12 items-center">

<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 text-xs font-medium text-gray-700 mb-4">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-gray-800" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        AI Automation for Businesses
      </span>

<div className="flex items-center gap-4">
<h1 className="sm:text-6xl text-5xl font-semibold text-gray-900 tracking-tight">CREATIVE AI</h1>
</div>

<p className="mt-3 text-base sm:text-lg text-gray-600">
        Custom AI solutions, built for the innovators of tomorrow
      </p>

<div className="flex gap-3 mt-6 items-center">
<span className=""><a className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-sky-400/60 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.35),0_40px_80px_rgba(56,189,248,0.18)] group ring-[#ffffff]/30 ring-1 text-base font-semibold text-white tracking-tight bg-neutral-950/95 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_0_0_1px_rgba(56,189,248,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08)]" href="#contact" style={{zIndex: '2'}}>
<span className="relative z-[1] group-hover:translate-x-1 transition-transform duration-300">View Our Spaces</span>
<svg className="lucide lucide-arrow-right relative z-[1] w-4 h-4 text-sky-100 group-hover:translate-x-2 transition-transform duration-300" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(224, 242, 254)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" style={{background: 'linear-gradient(45deg, rgba(56,189,248,0.8) 0%, rgba(99,102,241,0.8) 50%, rgba(168,85,247,0.8) 100%)', animation: 'pulse 2s ease-in-out infinite'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{boxShadow: '0 0 0 1px rgba(56,189,248,0.45), 0 18px 60px rgba(56,189,248,0.25)', background: 'radial-gradient(140% 160% at 50% -20%, rgba(56,189,248,0.22) 0%, rgba(56,189,248,0.08) 35%, rgba(56,189,248,0.00) 60%)'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0) 60%)'}}></span>
</a></span>
<button className="relative w-[14em] h-[3em] rounded-[30em] text-[15px] font-inherit border-none overflow-hidden z-[1] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] before:content-[''] before:absolute before:top-0 before:left-0 before:h-[3em] before:w-0 before:rounded-[30em] before:bg-gradient-to-r before:from-[#881BB6] before:to-[#E1A4FF] before:transition-[width] before:duration-500 before:ease-in-out before:z-[-1] hover:before:w-[14em]">
  See Our Service
</button>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-[16%] rounded-full -z-10" style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.24) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0) 70%)', filter: 'blur(18px)', opacity: '.25'}}></div>
</div>
</div>
<div className="relative sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 invisible">
<div className="text-center max-w-4xl mr-auto ml-auto invisible">
<h1 className="animate-fade-in-up text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none text-gray-900" style={{animationPlayState: 'running'}}>
      Creative AI for
      <span className="text-gradient block mt-2">Everyone</span>
</h1>
<p className="animate-fade-in-up delay-200 mt-8 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{animationPlayState: 'running'}}>
      Transform your wildest ideas into extraordinary visuals with the most advanced AI technology. Beautiful, intelligent, effortless.
    </p>

<div className="flex gap-3 mt-12 items-center justify-center">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.18)] hover:bg-gray-800 transition-colors">
          Get Template
          <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm hover:bg-gray-50 transition-colors">
          See Our Services
        </button>
</div>

<div className="animate-fade-in-up delay-600 grid grid-cols-3 gap-8 max-w-md mt-16 mr-auto ml-auto invisible" style={{animationPlayState: 'running'}}>
<div className="animate-zoom-in delay-700 text-center" style={{animationPlayState: 'running'}}>
<div className="text-3xl font-semibold text-gray-900">2M+</div>
<div className="text-sm text-gray-500 mt-1">Creations</div>
</div>
<div className="text-center animate-zoom-in delay-800" style={{animationPlayState: 'running'}}>
<div className="text-3xl font-semibold text-gray-900">50K+</div>
<div className="text-sm text-gray-500 mt-1">Artists</div>
</div>
<div className="text-center animate-zoom-in delay-900" style={{animationPlayState: 'running'}}>
<div className="text-3xl font-semibold text-gray-900">15+</div>
<div className="text-sm text-gray-500 mt-1">AI Models</div>
</div>
</div>
</div>

<div className="animate-scale-in delay-800 mt-20 relative max-w-5xl mx-auto" style={{animationPlayState: 'running'}}>
<div className="relative glass-strong bg-white/40 rounded-3xl border border-white/60 shadow-2xl overflow-hidden hover-lift">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>

<div className="flex items-center justify-between px-6 py-4 border-b border-white/20">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-red-400 rounded-full animate-pulse-soft" style={{animationPlayState: 'running'}}></div>
<div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse-soft delay-200" style={{animationPlayState: 'running'}}></div>
<div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-soft delay-400" style={{animationPlayState: 'running'}}></div>
</div>
<div className="flex-1 max-w-md mx-6">
<div className="bg-white/60 rounded-full px-4 py-2 text-sm text-gray-600 text-center shimmer-effect">
            prismstudio.ai/create
          </div>
</div>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-share w-4 h-4 text-gray-500 hover-lift cursor-pointer" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<svg className="lucide lucide-bookmark w-4 h-4 text-gray-500 hover-lift cursor-pointer" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</div>
</div>

<div className="p-8">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="space-y-6">
<div>
<h3 className="text-2xl font-semibold mb-4 text-gray-900">Dream Canvas</h3>
<div className="space-y-3">
<div className="bg-white/80 rounded-2xl p-4 border border-gray-200/60 shimmer-effect hover-lift">
<div className="text-sm text-gray-500 mb-2">Prompt</div>
<div className="text-gray-800">"Ethereal forest with glowing butterflies, cinematic lighting, 8K"</div>
</div>
<div className="flex items-center space-x-3">
<div className="bg-white/80 rounded-xl px-4 py-2 text-sm border border-gray-200/60 hover-lift">
<span className="text-gray-500">Style:</span> <span className="font-medium">Photorealistic</span>
</div>
<div className="bg-white/80 rounded-xl px-4 py-2 text-sm border border-gray-200/60 hover-lift">
<span className="text-gray-500">Ratio:</span> <span className="font-medium">16:9</span>
</div>
</div>
<button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl py-4 font-medium hover:from-blue-600 hover:to-purple-700 transition-all hover-lift animate-glow shadow-lg" style={{animationPlayState: 'running'}}>
                  Generate Magic ✨
                </button>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-video rounded-2xl overflow-hidden border border-gray-200/60 shadow-xl hover-lift">
<img alt="AI Generated Forest" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3010aaee-8ea5-4931-b2db-b19ed09a0d96_3840w.jpg" style={{}}/>
</div>
<div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs px-3 py-2 rounded-full font-medium shadow-lg animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-check inline w-3 h-3 mr-1" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
              Generated
            </div>
</div>
</div>
</div>
</div>

<div className="absolute -top-8 left-8 bg-white rounded-2xl p-4 shadow-xl border border-gray-200/60 glass animate-float hover-lift" style={{animationPlayState: 'running'}}>
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse-soft" style={{animationPlayState: 'running'}}></div>
<span className="text-sm font-medium text-gray-700">Processing...</span>
</div>
</div>
<div className="absolute -bottom-6 right-12 bg-white rounded-2xl p-4 shadow-xl border border-gray-200/60 glass animate-float delay-500 hover-lift" style={{animationPlayState: 'running'}}>
<div className="flex items-center space-x-3">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-500" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium text-gray-700">2.3s generation</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-100 pt-32 pb-32">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center">
<p className="sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-4xl font-medium text-gray-500 tracking-tight">
<span className="lyric-line" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '0s'}}>"We harness</span>
<span className="lyric-line text-gray-900 font-semibold" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '0.8s', marginLeft: '0.5rem'}}>your data</span><span className="lyric-line" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '1.6s'}}>, understand your audience,</span>
<span className="lyric-line" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '2.4s'}}>and</span>
<span className="lyric-line text-gray-900 font-semibold" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '3.2s', marginLeft: '0.5rem'}}>use AI</span>
<span className="lyric-line" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '4s', marginLeft: '0.5rem'}}>to help your brand rise above the noise.</span>
<span className="lyric-line" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '4.8s'}}>The best part?</span>
<span className="lyric-line text-gray-900 font-semibold" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '5.6s', marginLeft: '0.5rem'}}>We execute</span><span className="lyric-line" style={{opacity: '0', display: 'inline-block', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '6.4s'}}>, too."</span>
</p>
<div className="mt-12 flex items-center justify-center gap-3" style={{opacity: '0', animation: 'lyricFadeIn 0.8s ease-in-out forwards', animationDelay: '7.2s'}}>
<div className="relative">
<div className="absolute inset-0 -z-10 blur-3xl rounded-full" style={{background: 'radial-gradient(40% 40% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0) 70%)', transform: 'translateY(10px)'}}></div>
<img alt="Founder avatar" className="ring-1 ring-black/5 w-12 h-12 object-cover rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.18)]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b5fa796b-5a4e-4746-8463-8e491f896f5c_320w.jpg" style={{}}/>
</div>
<span className="text-base text-gray-700">Founder of ORB AI</span>
</div>
</div>
<style>
    @keyframes lyricFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px) scale(0.95);
      }
      100% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .lyric-line {
      transition: all 0.3s ease;
    }

    .lyric-line:hover {
      transform: scale(1.05);
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  </style>
</div>
</section><section className="flex bg-[#ffffff] pt-32 pr-32 pb-32 pl-32 items-center justify-center">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto pr-4 pl-4">

<div className="text-center mb-16">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 text-xs font-medium text-gray-700 uppercase tracking-wide">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-gray-800" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        Benefits
      </span>
<h2 className="sm:text-5xl text-4xl font-semibold tracking-tight mt-6">Why Choose Us</h2>
<p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mt-3">Partner with an AI agency delivering smart solutions.</p>
</div>

<div className="grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="relative bg-white rounded-3xl p-8 ring-1 ring-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
<div className="mb-8 flex items-center justify-center">
<div className="relative w-28 h-28 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center animate-pulse-soft" style={{boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(0,0,0,0.06)', animation: 'pulse-soft 3s ease-in-out infinite'}}>
<div className="absolute w-2 h-2 bg-gray-300 rounded-full top-3 right-4 animate-bounce-gentle delay-500" style={{animation: 'bounce-gentle 2s ease-in-out infinite 0.5s'}}></div>
<div className="w-1 h-10 bg-gray-800 rounded-full transition-transform duration-1000" style={{transformOrigin: 'bottom center', transform: 'rotate(18deg)', animation: 'rotate-slow 6s ease-in-out infinite'}}></div>
<div className="absolute w-2 h-2 bg-gray-800 rounded-full bottom-1.5"></div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Real‑Time Analytics</h3>
<p className="text-gray-600 leading-relaxed">Stay ahead with accurate, real‑time performance tracking.</p>
</div>

<div className="relative bg-white ring-black/5 ring-1 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
<div className="mb-8">
<div className="relative overflow-visible animate-pulse-soft bg-gray-50 w-full h-28 ring-black/5 ring-1 rounded-2xl" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.7)', animation: 'pulse-soft 3s ease-in-out infinite 1s'}}>
<span className="absolute left-12 -top-2 text-[10px] font-medium text-gray-700 bg-white rounded-full px-2 py-0.5 ring-1 ring-black/5 animate-float delay-300" style={{boxShadow: '0 8px 18px rgba(0,0,0,0.06)', animation: 'float 3s ease-in-out infinite 0.3s'}}>20% Automation</span>
<span className="absolute right-4 -top-2 text-[10px] font-medium text-gray-700 bg-white rounded-full px-2 py-0.5 ring-1 ring-black/5 animate-float delay-700" style={{boxShadow: '0 8px 18px rgba(0,0,0,0.06)', animation: 'float 3s ease-in-out infinite 0.7s'}}>60% Cost</span>
<div className="absolute inset-x-8 bottom-4 flex gap-2 items-end justify-center">
<div className="w-6 h-6 bg-white ring-1 ring-black/5 rounded-md animate-bounce-gentle delay-100" style={{boxShadow: '0 6px 14px rgba(0,0,0,0.06)', animation: 'bounce-gentle 2s ease-in-out infinite 0.1s'}}></div>
<div className="w-6 h-10 bg-white ring-1 ring-black/5 rounded-md animate-bounce-gentle delay-200" style={{boxShadow: '0 6px 14px rgba(0,0,0,0.06)', animation: 'bounce-gentle 2s ease-in-out infinite 0.2s'}}></div>
<div className="w-6 h-14 bg-white ring-1 ring-black/5 rounded-md animate-bounce-gentle delay-300" style={{boxShadow: '0 6px 14px rgba(0,0,0,0.06)', animation: 'bounce-gentle 2s ease-in-out infinite 0.3s'}}></div>
<div className="w-6 h-20 bg-white ring-1 ring-black/5 rounded-md animate-bounce-gentle delay-400" style={{boxShadow: '0 6px 14px rgba(0,0,0,0.06)', animation: 'bounce-gentle 2s ease-in-out infinite 0.4s'}}></div>
<div className="w-6 h-24 bg-white ring-1 ring-black/5 rounded-md animate-bounce-gentle delay-500" style={{boxShadow: '0 6px 14px rgba(0,0,0,0.06)', animation: 'bounce-gentle 2s ease-in-out infinite 0.5s'}}></div>
</div>
</div>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">AI‑Driven Growth</h3>
<p className="text-gray-600 leading-relaxed">Make smarter moves with accurate, real‑time business insights.</p>
</div>

<div className="relative bg-white ring-black/5 ring-1 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[0_6px_24px_rgba(0,0,0,0.08)]">
<div className="flex overflow-hidden relative bg-gray-50 rounded-xl mb-8 items-center justify-center"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" id="asset-video-1758251819113" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/d9a88b9e-7ed5-464b-a036-0518cdd85eae/0.mp4"></video>
<div className="relative flex ring-0 bg-white/0 opacity-25 w-28 h-28 rounded-full items-center justify-center" style={{boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), 0 10px 24px rgba(0,0,0,0.06)'}}>

</div>
<style>
    @keyframes smooth-ripple {
      0% {
        transform: scale(1);
        opacity: 0.8;
      }
      20% {
        opacity: 0.6;
      }
      50% {
        opacity: 0.4;
      }
      80% {
        opacity: 0.2;
      }
      100% {
        transform: scale(3.5);
        opacity: 0;
      }
    }
  </style>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Sync in real time</h3>
<p className="text-gray-600 leading-relaxed">Connect with your team instantly to track progress and updates.</p>
</div>
</div>

<div className="flex flex-wrap gap-3 relative overflow-hidden w-full mt-10 items-center justify-center">

<div className="flex items-center gap-3 whitespace-nowrap" style={{animation: 'aura-marquee-rtl 28s linear infinite', willChange: 'transform'}}>

<div className="flex items-center gap-3 flex-shrink-0">
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-coins w-4 h-4" data-lucide="coins" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
        Cost Effective
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
        Real‑Time Insights
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-workflow w-4 h-4" data-lucide="workflow" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
        Automation
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-brain-circuit w-4 h-4" data-lucide="brain-circuit" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
        Data‑Driven Decisions
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        Faster Innovation
      </span>
</div>

<div aria-hidden="true" className="flex items-center gap-3 flex-shrink-0">
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-coins w-4 h-4" data-lucide="coins" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
        Cost Effective
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
        Real‑Time Insights
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-workflow w-4 h-4" data-lucide="workflow" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
        Automation
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-brain-circuit w-4 h-4" data-lucide="brain-circuit" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
        Data‑Driven Decisions
      </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white text-gray-800 text-sm font-medium ring-1 ring-black/5 shadow-sm">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
        Faster Innovation
      </span>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, rgba(255,255,255,0.85), rgba(255,255,255,0))'}}></div>
<div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, rgba(255,255,255,0.85), rgba(255,255,255,0))'}}></div>

<div className="relative max-w-5xl mx-auto mt-10 w-full">

<div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-4 w-32 z-10" style={{background: 'linear-gradient(to right, rgba(245,245,245,0.98), rgba(245,245,245,0.5), rgba(245,245,245,0))'}}></div>

<div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-4 w-32 z-10" style={{background: 'linear-gradient(to left, rgba(245,245,245,0.98), rgba(245,245,245,0.5), rgba(245,245,245,0))'}}></div>
</div>
<style>
    @keyframes aura-marquee-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes slideRightToLeft {
      0% { transform: translateX(100%); opacity: 0; }
      20% { opacity: 0.6; }
      50% { opacity: 1; }
      80% { opacity: 0.6; }
      100% { transform: translateX(-100%); opacity: 0; }
    }
  </style>
</div>
</div>
<style>
    @keyframes slideRTL {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  </style>
</section><section className="bg-neutral-100 pt-32 pb-32">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text mb-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 mb-6">
<span className="text-xs font-medium text-gray-700 uppercase tracking-wide">Services</span>
</div>
<h2 className="sm:text-5xl text-4xl font-semibold tracking-tight mb-4">Our AI-Driven Services</h2>
<p className="sm:text-xl text-lg text-gray-600 max-w-2xl mr-auto ml-auto">Leverage AI features that boost performance to your business.</p>
</div>
<div className="grid gap-6 lg:gap-8 lg:grid-cols-2">

<div className="relative bg-white rounded-3xl p-8 ring-1 ring-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)]">
<div className="relative mb-10">
<div className="w-14 h-14 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center text-gray-900" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<span className="absolute left-16 top-1.5 w-6 h-6 rounded-full bg-white ring-1 ring-black/5" style={{boxShadow: '0 8px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)'}}></span>
<span className="absolute left-8 top-16 w-4 h-4 rounded-full bg-white ring-1 ring-black/5" style={{boxShadow: '0 6px 14px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.7)'}}></span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">AI Strategy Consulting</h3>
<p className="text-gray-600 leading-relaxed">Get expert guidance to implement AI solutions that drive business growth.</p>
</div>

<div className="relative lg:row-span-2 bg-white ring-black/5 ring-1 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
<button className="absolute right-6 top-6 text-sm font-medium text-gray-800 bg-white ring-black/5 ring-1 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_3px_12px_rgba(0,0,0,0.15)]">Generate</button>
<div className="bg-neutral-50 border-gray-200/60 border rounded-2xl mt-14 pt-4 pr-4 pb-4 pl-4 shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
<div className="flex items-center mb-3">
</div>
<div className="space-y-2 text-sm text-gray-700">
<div className="ring-1 ring-black/5 bg-white rounded-lg pt-3 pr-4 pb-3 pl-4 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">Continue writing</div>
<div className="bg-white rounded-lg px-4 py-3 ring-1 ring-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">Fix spelling</div>
<div className="bg-white rounded-lg px-4 py-3 ring-1 ring-black/5 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">Explain in detail</div>
</div>
</div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight mt-8 mb-2">Content Generation</h3>
<p className="text-gray-600 leading-relaxed">We provide seamless content creation solutions that generate captivating, high-quality content in line with your brand's voice.</p>
</div>

<div className="relative lg:row-span-2 overflow-hidden bg-white max-h-fit ring-black/5 ring-1 rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)]">
<div className="absolute left-6 top-6 w-9 h-9 rounded-full bg-white ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 10px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-sparkles text-gray-800 w-4.5 h-4.5" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="absolute left-16 top-12 flex gap-1.5">
<span className="w-2 h-2 rounded-full bg-gray-300"></span>
<span className="w-2 h-2 rounded-full bg-gray-300"></span>
<span className="w-2 h-2 rounded-full bg-gray-300"></span>
</div>
<div className="absolute left-16 top-16 bg-white rounded-xl px-4 py-3 text-sm ring-1 ring-black/5 flex items-center gap-3" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.10)'}}>
<span className="text-gray-700">Set up a Zoom call with Emily at 10:00 AM on Wednesday.</span>
<div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center">
<svg className="lucide lucide-user" data-lucide="user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="mt-28 mb-10">
<div className="w-full h-14 bg-white rounded-full ring-1 ring-black/5 flex items-center px-5 text-gray-400" style={{boxShadow: 'inset 0 5px 14px rgba(0,0,0,0.10), inset 0 -1px 0 rgba(0,0,0,0.03)'}}>
          Type a message
        </div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">AI-Powered Chatbots</h3>
<p className="text-gray-600 leading-relaxed">We develop AI-driven chatbots with advanced cognitive technologies to elevate customer support and automate business operations.</p>
</div>

<div className="relative bg-white rounded-3xl p-8 ring-1 ring-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)]">
<div className="grid grid-cols-4 gap-3 mb-8">
<div className="col-span-1 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-bot text-gray-900" data-lucide="bot" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="col-span-2 h-20 bg-white rounded-2xl ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 12px 26px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-diamond text-gray-900" data-lucide="diamond" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<div className="col-span-1 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-hand-metal text-gray-900" data-lucide="hand-metal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 1 0-4 0v2"></path><path d="M10 10.5V5a2 2 0 1 0-4 0v9"></path><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"></path></svg>
</div>
<div className="col-span-1 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-gamepad-2 text-gray-900" data-lucide="gamepad-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
</div>
<div className="col-span-1 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-workflow text-gray-900" data-lucide="workflow" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<div className="col-span-2 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-shield-check text-gray-900" data-lucide="shield-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="col-span-1 h-14 bg-white rounded-xl ring-1 ring-black/5 flex items-center justify-center" style={{boxShadow: '0 10px 22px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)'}}>
<svg className="lucide lucide-wand-2 text-gray-900" data-lucide="wand-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-gray-900 mb-2">Automated Workflows</h3>
<p className="text-gray-600 leading-relaxed">Automate workflows to streamline tasks, boost efficiency, and save time.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-32 pb-32">
<div className="sm:px-6 lg:px-8 bg-gradient-to-b from-[#ffffff] to-[#ffffff]/0 max-w-7xl rounded-3xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 shadow-2xl" id="aura-emfqfrzed">
<div className="text-center mb-16">
<h2 className="animate-fade-in-up text-4xl sm:text-5xl font-bold tracking-tight mb-6" style={{animationPlayState: 'running'}}>
            Endless <span className="text-gradient shimmer-effect">Possibilities</span>
</h2>
<p className="animate-fade-in-up delay-200 text-xl text-gray-600 max-w-2xl mx-auto" style={{animationPlayState: 'running'}}>
            Explore what others have created. Get inspired. Start your own masterpiece.
          </p>
</div>

<div className="animate-fade-in-up delay-300 flex flex-wrap justify-center gap-3 mb-12" style={{animationPlayState: 'running'}}>
<div className="relative">
<button className="gallery-filter active px-6 py-3 text-sm font-medium bg-gray-900 text-white rounded-full transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 hover-lift" data-filter="all">
              All Creations
            </button>
<button className="category-menu-btn absolute -top-1 -right-1 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors" data-category="all">
<svg className="lucide lucide-more-horizontal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
<div className="category-dropdown hidden absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('recent')">Sort by Recent</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('popular')">Sort by Popular</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('trending')">Sort by Trending</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="shareCategory('all')">Share Category</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="exportCategory('all')">Export Images</button>
</div>
</div>
</div>
<div className="relative">
<button className="gallery-filter px-6 py-3 text-sm font-medium bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg hover:scale-105 hover-lift" data-filter="portraits">
              Portraits
            </button>
<button className="category-menu-btn absolute -top-1 -right-1 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors" data-category="portraits">
<svg className="lucide lucide-more-horizontal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
<div className="category-dropdown hidden absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('recent')">Sort by Recent</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('popular')">Sort by Popular</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('trending')">Sort by Trending</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="shareCategory('portraits')">Share Category</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="exportCategory('portraits')">Export Images</button>
</div>
</div>
</div>
<div className="relative">
<button className="gallery-filter px-6 py-3 text-sm font-medium bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg hover:scale-105 hover-lift" data-filter="landscapes">
              Landscapes
            </button>
<button className="category-menu-btn absolute -top-1 -right-1 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors" data-category="landscapes">
<svg className="lucide lucide-more-horizontal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
<div className="category-dropdown hidden absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('recent')">Sort by Recent</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('popular')">Sort by Popular</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('trending')">Sort by Trending</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="shareCategory('landscapes')">Share Category</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="exportCategory('landscapes')">Export Images</button>
</div>
</div>
</div>
<div className="relative">
<button className="gallery-filter px-6 py-3 text-sm font-medium bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg hover:scale-105 hover-lift" data-filter="abstract">
              Abstract
            </button>
<button className="category-menu-btn absolute -top-1 -right-1 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors" data-category="abstract">
<svg className="lucide lucide-more-horizontal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
<div className="category-dropdown hidden absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('recent')">Sort by Recent</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('popular')">Sort by Popular</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('trending')">Sort by Trending</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="shareCategory('abstract')">Share Category</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="exportCategory('abstract')">Export Images</button>
</div>
</div>
</div>
<div className="relative">
<button className="gallery-filter px-6 py-3 text-sm font-medium bg-gray-100 text-gray-700 rounded-full transition-all duration-300 hover:bg-gray-200 hover:text-gray-900 hover:shadow-lg hover:scale-105 hover-lift" data-filter="digital">
              Digital Art
            </button>
<button className="category-menu-btn absolute -top-1 -right-1 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors" data-category="digital">
<svg className="lucide lucide-more-horizontal" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
<div className="category-dropdown hidden absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50">
<div className="p-1">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('recent')">Sort by Recent</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('popular')">Sort by Popular</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="sortGallery('trending')">Sort by Trending</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="shareCategory('digital')">Share Category</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50 rounded-lg transition-colors" onclick="exportCategory('digital')">Export Images</button>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bg-neutral-50 border-stone-50/95 border rounded-3xl pt-9 pr-9 pb-9 pl-9 shadow blur-none">

<div className="animate-scale-in delay-400 gallery-item group transition-all duration-500" data-category="portraits" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f85c1618-fce0-4e99-8806-e575c196ac1b_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Ethereal Portrait</h4>
<p className="text-white/80 text-sm">by @alex_chen</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
<div className="animate-scale-in delay-500 gallery-item group transition-all duration-500" data-category="landscapes" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Mountain Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5e0ad476-5d44-4dca-af2d-426c34df7845_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Mystic Mountains</h4>
<p className="text-white/80 text-sm">by @sarah_k</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
<div className="animate-scale-in delay-600 gallery-item group transition-all duration-500" data-category="abstract" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Abstract Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/528ade97-312c-4962-87a2-ad2a8eb0a801_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Fluid Dreams</h4>
<p className="text-white/80 text-sm">by @mike_art</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
<div className="animate-scale-in delay-700 gallery-item group transition-all duration-500" data-category="digital" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Digital Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/673a4f97-d66d-40c8-a04b-44985ef5577b_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Neon Cityscape</h4>
<p className="text-white/80 text-sm">by @tech_visionary</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
<div className="animate-scale-in delay-800 gallery-item group transition-all duration-500" data-category="portraits" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/14cafb43-31c2-46cf-bac7-91225366bbb3_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Golden Hour</h4>
<p className="text-white/80 text-sm">by @portrait_pro</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
<div className="animate-scale-in delay-900 gallery-item group transition-all duration-500" data-category="landscapes" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Nature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af13ac82-b54d-44bd-967a-f16b6243e15c_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Forest Serenity</h4>
<p className="text-white/80 text-sm">by @nature_lover</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
<div className="animate-scale-in delay-1000 gallery-item group transition-all duration-500" data-category="abstract" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Abstract" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8d6eabf6-a4fd-4707-bcb1-892162b2e4f7_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Color Symphony</h4>
<p className="text-white/80 text-sm">by @abstract_mind</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
<div className="animate-scale-in delay-1100 gallery-item group transition-all duration-500" data-category="digital" style={{animationPlayState: 'running'}}>
<div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-square cursor-pointer hover-lift">
<img alt="Digital" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d16a778-5c91-48bf-85ea-7b862d9cea30_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h4 className="text-white font-medium mb-1">Digital Dreams</h4>
<p className="text-white/80 text-sm">by @futurist</p>
</div>
<div className="absolute top-4 right-4 bg-white/20 glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-bounce-gentle" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-heart w-4 h-4 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<div className="relative inline-block group">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/95 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{-X: '199.6484375px', -Y: '12px', -O: '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>View All Gallery<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.55), rgba(255,255,255,.28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>

</div>

</section>

<section className="bg-gray-50 pt-32 pb-32">
<div className="sm:px-6 lg:px-8 max-w-7xl border-0 rounded-none mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">

<div className="text-center max-w-4xl mr-auto mb-12 ml-auto space-y-4">
<span className="inline-flex items-center gap-2 uppercase text-xs font-medium text-gray-700 tracking-wide bg-white ring-black/5 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm">showcase</span>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
        Professional Results in <span className="text-gradient shimmer-effect">Seconds</span>
</h2>
<p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
        From concept to creation faster than ever before. Watch your ideas transform into stunning visual masterpieces with unprecedented speed and quality.
      </p>
</div>

<div className="grid lg:grid-cols-2 gap-6 lg:gap-8 pt-6 pr-6 pb-6 pl-6" style={{boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.8)'}}>

<div className="relative bg-[#f9fafb]/95 border-neutral-50/80 border-2 ring-[#ffffff]/95 ring-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex text-white bg-gray-50 w-20 h-10 rounded-xl shadow-lg items-center justify-center">
<svg className="lucide lucide-badge-check w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="badge-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-gray-900 tracking-tight">Lightning Fast Processing</h4>
<p className="text-gray-600 mt-1">Generate 4K images in under 3 seconds with our optimized AI models running on cutting-edge GPU clusters.</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="flex items-center justify-center text-sm text-[#000000] bg-gray-50 w-20 h-10 rounded-xl shadow-lg">2.3s avg</span>
</div>
</div>
<div className="border-t border-gray-200 mt-4 mb-4"></div>
<div className="flex items-center justify-between">
<span className="text-3xl font-semibold tracking-tight">01</span>
<button className="w-9 h-9 rounded-xl bg-white ring-1 ring-black/5 flex items-center justify-center hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-more-horizontal w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="more-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(55, 65, 81)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mt-4 rounded-2xl overflow-hidden border border-gray-200/60">
<img alt="Speed Showcase" className="w-full h-56 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5e1c1b8c-f44b-4a81-abaf-0241f388c8ff_3840w.jpg" style={{}}/>
</div>
<div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
<div className="flex items-center gap-1">
<span className="w-2 h-2 bg-green-400 rounded-full"></span>
<span className="">99.9% uptime</span>
</div>
<div className="flex items-center gap-1">
<span className="w-2 h-2 bg-blue-400 rounded-full"></span>
<span className="">Global CDN</span>
</div>
</div>
</div>

<div className="relative bg-[#f9fafb]/95 border-neutral-50/80 border-2 ring-[#ffffff]/95 ring-0 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex text-white bg-gray-50 w-20 h-10 rounded-xl shadow-lg items-center justify-center">
<svg className="lucide lucide-infinity w-[22px] h-[22px]" data-icon-replaced="true" data-lucide="infinity" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '22px', height: '22px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-gray-900 tracking-tight">Unlimited Creativity</h4>
<p className="text-gray-600 mt-1">Explore any artistic style, from photorealism to abstract expressionism. Our AI understands context, mood, and artistic intent.</p>
</div>
</div>
</div>
<div className="border-t border-gray-200 mt-4 mb-4"></div>
<div className="flex items-center justify-between">
<span className="text-3xl font-semibold tracking-tight">02</span>
<button className="w-9 h-9 rounded-xl bg-white ring-1 ring-black/5 flex items-center justify-center hover:bg-gray-100 transition-colors">
<svg className="lucide lucide-more-horizontal w-[22px] h-[22px]" data-icon-replaced="true" data-lucide="more-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '22px', height: '22px', color: 'rgb(55, 65, 81)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mt-4 rounded-2xl overflow-hidden border border-gray-200/60">
<img alt="Creative Styles" className="bg-[#ffffff] w-full h-56 object-cover border-[#ffffff]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3010aaee-8ea5-4931-b2db-b19ed09a0d96_3840w.jpg" style={{}}/>
</div>
<div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
<div className="flex items-center gap-1">
<span className="w-2 h-2 bg-purple-400 rounded-full"></span>
<span className="">Custom training</span>
</div>
<div className="flex items-center gap-1">
<span className="w- h-2 bg-pink-400 rounded-full"></span>
<span className="">Style mixing</span>
</div>
</div>
</div>

<div className="relative lg:col-span-2 ring-black/5 ring-1 bg-white max-w-fit rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] space-y-2">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex text-white bg-gray-50 w-10 h-10 rounded-xl shadow-lg items-center justify-center">
<svg className="lucide lucide-badge-check w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="badge-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-gray-900 tracking-tight">Professional Quality</h4>
<p className="text-gray-600 mt-1">Every image optimized for print, web, and commercial use. Advanced post-processing ensures perfect color accuracy and sharpness.</p>
</div>
</div>
<span className="flex items-center justify-center text-sm text-[#000000] bg-gray-50 w-20 h-10 rounded-xl shadow-lg">4k Ready</span>
</div>
<div className="border-t border-gray-200 mt-4 mb-4"></div>
<div className="flex items-center justify-between">
<span className="text-3xl font-semibold tracking-tight">03</span>
<button className="flex hover:bg-gray-100 transition-colors bg-white w-10 h-9 ring-black/5 ring-1 rounded-xl items-center justify-center">
<svg className="lucide lucide-more-horizontal w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="more-horizontal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(55, 65, 81)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="mt-4 rounded-2xl overflow-hidden border border-gray-200/60">
<img alt="Professional Quality" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d16a778-5c91-48bf-85ea-7b862d9cea30_3840w.jpg" style={{}}/>
</div>
<div className="flex gap-1 items-center">
<span className="w-2 h-2 bg-teal-400 rounded-full"></span>
<span className="">Print ReadyCommercial license</span>
</div><div className="flex gap-1 items-center">
<span className="w-2 h-2 bg-teal-400 rounded-full"></span>
<span className="">Commercial license</span>
</div>
</div>
</div>

<div className="text-center mt-12">
<button className="btn" onmousedown="this.style.transform='translateY(-1px)'; this.style.boxShadow='0 5px 10px rgba(0, 0, 0, 0.2)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(0, 0, 0, 0.2)';" onmouseup="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 20px rgba(0, 0, 0, 0.2)';" style={{position: 'relative', fontSize: '17px', textTransform: 'uppercase', textDecoration: 'none', padding: '1em 2.5em', display: 'inline-flex', cursor: 'pointer', borderRadius: '6em', border: 'none', fontFamily: 'inherit', fontWeight: '500', color: 'black', backgroundColor: 'white', alignItems: 'center', gap: '0.75rem', transform: 'translateY(0px)', boxShadow: 'none'}}>
  Start Your Free Trial
  <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<style>
    .btn::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 100px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s;
      background-color: #fff;
    }
    .btn:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  </style>
</button>
<style>
        @keyframes pulse512 {
          0% { box-shadow: 0 0 0 0 #05bada66; }
          70% { box-shadow: 0 0 0 10px rgba(218, 3, 8, 0); }
          100% { box-shadow: 0 0 0 0 rgba(218, 3, 8, 0); }
        }
      </style>
</div>
</div>
</section><section className="bg-gray-50 pt-32 pb-32">
<div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

<div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
<span className="inline-flex items-center gap-2 uppercase text-xs font-medium text-gray-700 tracking-wide bg-white ring-black/5 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm">
        
        Projects
      </span>
<h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Proven Impact &amp; Results</h2>
<p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">Explore projects that showcase our AI creative engine delivering measurable outcomes in the real world.</p>
</div>

<div className="max-w-5xl mx-auto mb-8 sm:mb-10">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<button className="px-4 py-3 rounded-xl bg-white text-gray-700 text-sm font-medium ring-1 ring-black/5 shadow-sm hover:bg-gray-50 transition-colors">Project 1</button>
<button className="px-4 py-3 rounded-xl bg-white text-gray-700 text-sm font-medium ring-1 ring-black/5 shadow-sm hover:bg-gray-50 transition-colors">Project 2</button>
<button className="px-4 py-3 rounded-xl bg-gray-900 text-white text-sm font-medium shadow-[0_6px_20px_rgba(0,0,0,0.12)]">Project 3</button>
</div>
</div>

<div className="sm:p-6 md:p-8 bg-white ring-neutral-50/80 ring-1 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-2xl">
<div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">

<div className="lg:col-span-6">
<div className="overflow-hidden ring-1 ring-black/5 bg-gray-100 rounded-3xl shadow-xl">
<img alt="Project visual showcasing AI-generated motion and texture" className="sm:h-80 lg:h-full w-full h-64 object-cover border-stone-50 border-2 ring-0 rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f31592f-d087-425d-b862-49f408779ce3_1600w.jpg" style={{}}/>
</div>
</div>

<div className="lg:col-span-6">
<div className="mb-3 text-sm text-gray-500 tracking-wide">03</div>
<h3 className="sm:text-3xl text-2xl font-semibold text-gray-900 tracking-tight">Renderflow  Automated Creative Pipeline</h3>
<p className="mt-3 text-base text-gray-600 leading-relaxed">An AI-powered workflow that turns briefs into polished campaign visuals. It automates moodboards, style iterations, and final 4K renders while keeping brand fidelity.</p>

<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="bg-white ring-black/5 ring-1 rounded-2xl pt-5 pr-6 pb-5 pl-6 shadow-md">
<div className="text-3xl font-semibold tracking-tight text-gray-900">60%</div>
<div className="text-sm text-gray-500 mt-1">Faster concept-to-render</div>
</div>
<div className="bg-white ring-black/5 ring-1 rounded-2xl pt-5 pr-6 pb-5 pl-6 shadow-md">
<div className="text-3xl font-semibold tracking-tight text-gray-900">35%</div>
<div className="text-sm text-gray-500 mt-1">Lift in team output</div>
</div>
</div>

<div className="mt-6">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 text-white text-sm font-medium shadow-sm hover:bg-gray-800 transition-colors">
              View case study
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-gray-50 pt-32 pb-32">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6" id="aura-emfqg0ov0">

<div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
<span className="inline-flex items-center gap-2 ring-1 ring-black/5 uppercase text-xs font-medium text-gray-700 tracking-wide bg-white rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm">
        
        Customers
      </span>
<h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">What Our Clients Say</h2>
<p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">Join customers who trust AI to transform their business.</p>
</div>

<div className="grid lg:grid-cols-2 gap-8 lg:gap-8 sm:mb-10 items-center justify-center">

<div className="relative">

<div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-4 translate-y-4 scale-95 opacity-60"></div>
<div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-2 translate-y-2 scale-[0.97] opacity-80"></div>

<div className="relative sm:p-8 bg-white max-h-full ring-black/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] z-10">
<p className="text-xl sm:text-2xl leading-relaxed text-gray-900 text-center">
        Their <span className="text-gray-500">AI‑driven</span> approach helped us reach the right audience and <span className="text-gray-800">grow faster</span> with smarter insights—streamlining our strategy, improving engagement, and <span className="text-gray-800">delivering results</span> we couldn't achieve before.
      </p>
<div className="mt-6 flex justify-center">
<span className="inline-flex w-9 h-9 items-center justify-center rounded-full ring-1 ring-black/5 bg-white shadow-sm">
<svg className="lucide lucide-quote w-4.5 h-4.5 text-gray-800" data-lucide="quote" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</span>
</div>
</div>
</div>

<div className="relative mx-auto">

<div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-4 translate-y-4 scale-95 opacity-60"></div>
<div className="absolute inset-0 bg-white ring-black/5 ring-1 rounded-3xl shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] transform translate-x-2 translate-y-2 scale-[0.97] opacity-80"></div>

<div className="relative bg-white max-w-fit ring-black/5 ring-1 rounded-3xl pt-2 pr-2 pb-2 pl-2 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] z-10">
<div className="rounded-2xl overflow-hidden ring-1 ring-black/5">
<img alt="Customer showcase" className="sm:h-80 lg:h-full w-full h-24 max-h-80 object-contain" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3298a779-4fd2-42f6-b4d4-141d024cb9b9_1600w.jpg" style={{}}/>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12">

<div className="bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-6">
<div className="flex gap-1 text-gray-800 mb-3 items-center">
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 leading-relaxed">We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Brendan" className="w-10 h-10 rounded-xl object-cover ring-1 ring-black/5 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b5fa796b-5a4e-4746-8463-8e491f896f5c_320w.jpg"/>
<div className="">
<div className="text-sm font-medium text-gray-900">Brendan</div>
<div className="text-xs text-gray-500">Marketing Director at StratIQ</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-6">
<div className="flex gap-1 text-gray-800 mb-3 items-center">
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 leading-relaxed">Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We’re already seeing results.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Lena" className="w-10 h-10 rounded-xl object-cover ring-1 ring-black/5 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b868b942-246c-46ca-812c-31b49fd61a16_320w.jpg"/>
<div>
<div className="text-sm font-medium text-gray-900">Lena M</div>
<div className="text-xs text-gray-500">Manager at NovaTech</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_6px_20px_rgba(0,0,0,0.08)] p-6">
<div className="flex gap-1 text-gray-800 mb-3 items-center">
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="currentColor" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(209, 213, 219)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 leading-relaxed">From ideation to final delivery, they were incredibly proactive and sharp. Our new AI‑powered assistant reduced manual work and improved user satisfaction.</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Eli" className="w-10 h-10 rounded-xl object-cover ring-1 ring-black/5 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/149e33ce-f3dc-40ee-b985-cb0735411ff5_320w.jpg"/>
<div className="">
<div className="text-sm font-medium text-gray-900">Eli R</div>
<div className="text-xs text-gray-500">COO at GridFrame</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-4xl mr-auto ml-auto" id="aura-emfqg1833">
<div className="">
<div className="text-3xl font-semibold tracking-tight text-gray-900 counter" data-target="100">0</div>
<div className="mt-1 text-sm text-gray-500">Projects Completed</div>
</div>
<div className="border-t sm:border-t-0 sm:border-l border-gray-200 pl-0 sm:pl-8 pt-8 sm:pt-0">
<div className="text-3xl font-semibold tracking-tight text-gray-900 counter" data-target="95">0</div>
<div className="mt-1 text-sm text-gray-500">Client Satisfaction</div>
</div>
<div className="border-t sm:border-t-0 sm:border-l border-gray-200 pl-0 sm:pl-8 pt-8 sm:pt-0">
<div className="text-3xl font-semibold tracking-tight text-gray-900 counter" data-target="10">0</div>
<div className="mt-1 text-sm text-gray-500">Years of Experience</div>
</div>

</div>
</div>
</section><section className="bg-gray-50 pt-32 pb-32">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
<span className="inline-flex items-center gap-2 ring-1 ring-black/5 uppercase text-xs font-medium text-gray-700 tracking-wide bg-white rounded-full pt-1 pr-3 pb-1 pl-3 shadow-sm">
<svg className="lucide lucide-wallet w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="wallet" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(31, 41, 55)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
      Pricing
    </span>
<h2 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">Simple Price For All</h2>
<p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">Flexible pricing plans that fit your budget and scale with needs.</p>

<div className="mt-6 flex items-center justify-center gap-3">
<div className="inline-flex items-center p-1 bg-white rounded-full ring-1 ring-black/5 shadow-sm">
<button className="billing-tab rounded-full px-4 py-2 text-sm font-medium text-gray-900 bg-white ring-1 ring-black/5 shadow-sm" data-bill="monthly">Monthly</button>
<button className="billing-tab rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900" data-bill="yearly">Yearly</button>
</div>
<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white ring-1 ring-black/5 shadow-sm text-xs font-medium text-gray-700">
        30% off
      </span>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8">
<div className="text-sm font-medium text-gray-900">Starter</div>
<div className="mt-4 flex items-baseline gap-2">
<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          $<span className="price" data-monthly="800" data-yearly="560" style={{transform: 'scale(1)', opacity: '1'}}>800</span>
</div>
<span className="text-gray-500">/month</span>
</div>
<div className="mt-2 text-sm text-gray-500" data-billing-hint="starter">Ideal for businesses ready to explore AI and intelligent automation.</div>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 text-sm font-medium ring-1 ring-black/5 shadow-sm py-3 hover:bg-gray-50 transition-colors">
        Get Started
        <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<div className="mt-6 border-t border-gray-200"></div>
<ul className="mt-6 space-y-3 text-gray-700">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Basic AI Tools</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Limited Automation Features</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Real‑Time Reporting</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Basic Chatbot Integration</span>
</li>
</ul>
</div>

<div className="relative bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-gray-900">Pro</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-900 text-white text-xs font-medium shadow-sm">
<svg className="lucide lucide-heart w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="heart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
          Popular
        </span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          $<span className="price" data-monthly="1700" data-yearly="1190" style={{transform: 'scale(1)', opacity: '1'}}>1700</span>
</div>
<span className="text-gray-500">/month</span>
</div>
<div className="mt-2 text-sm text-gray-500" data-billing-hint="pro">Built for companies that want to gain an edge with AI‑powered automation.</div>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 text-white text-sm font-medium py-3 shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:bg-gray-800 transition-colors">
        Get Started
        <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<div className="mt-6 border-t border-gray-200"></div>
<ul className="mt-6 space-y-3 text-gray-700">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Advanced AI Tools</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Customizable Workflows</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>AI‑Powered Analytics</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Premium Chatbot Features</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Cross‑Platform Integrations</span>
</li>
</ul>
</div>

<div className="bg-white rounded-3xl ring-1 ring-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04),_0_12px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8">
<div className="text-sm font-medium text-gray-900">Enterprise</div>
<div className="mt-4 flex items-baseline gap-2">
<div className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          $<span className="price" data-monthly="4700" data-yearly="3290" style={{transform: 'scale(1)', opacity: '1'}}>4700</span>
</div>
<span className="text-gray-500">/month</span>
</div>
<div className="mt-2 text-sm text-gray-500" data-billing-hint="enterprise">For businesses aiming to harness AI and automation to lead their industry.</div>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-gray-900 text-sm font-medium ring-1 ring-black/5 shadow-sm py-3 hover:bg-gray-50 transition-colors">
        Get Started
        <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<div className="mt-6 border-t border-gray-200"></div>
<ul className="mt-6 space-y-3 text-gray-700">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Fully Customized AI Solutions</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Unlimited Integrations</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Advanced Reporting &amp; Insights</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Scalable AI Solutions</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Team Collaboration Features</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check mt-0.5 w-4.5 h-4.5 text-gray-800" data-lucide="check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Priority Feature Access</span>
</li>
</ul>
</div>
</div>

<div className="mt-8 flex items-center justify-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white ring-1 ring-black/5 shadow-sm text-sm text-gray-700">
<svg className="lucide lucide-heart w-4 h-4 text-red-500" data-lucide="heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
      We donate 2% of your membership to pediatric wellbeing
    </div>
</div>


</div>


</section>

<footer className="bg-white border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid lg:grid-cols-4 gap-8">

<div className="lg:col-span-1 animate-fade-in-up" style={{animationPlayState: 'running'}}>
<div className="flex items-center space-x-3 mb-4">
<span className="text-xl font-semibold">Prism Studio</span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">
              Transforming imagination into visual reality with the most advanced AI creative tools.
            </p>
<div className="flex space-x-4">
<a className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors hover-lift" href="#">
<svg className="lucide lucide-twitter w-5 h-5 text-gray-600" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors hover-lift" href="#">
<svg className="lucide lucide-instagram w-5 h-5 text-gray-600" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors hover-lift" href="#">
<svg className="lucide lucide-linkedin w-5 h-5 text-gray-600" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>

<div className="animate-fade-in-up delay-100" style={{animationPlayState: 'running'}}>
<h3 className="font-semibold text-gray-900 mb-4">Product</h3>
<ul className="space-y-3">
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Features</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Pricing</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">API</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Integrations</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Changelog</a></li>
</ul>
</div>

<div className="animate-fade-in-up delay-200" style={{animationPlayState: 'running'}}>
<h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
<ul className="space-y-3">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Documentation</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Tutorials</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Blog</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Community</a></li>
<li><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Support</a></li>
</ul>
</div>

<div className="animate-fade-in-up delay-300" style={{animationPlayState: 'running'}}>
<h3 className="font-semibold text-gray-900 mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">About Us</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Careers</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Press</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Privacy Policy</a></li>
<li className=""><a className="text-gray-600 hover:text-gray-900 transition-colors hover-lift" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between animate-fade-in-up delay-400" style={{animationPlayState: 'paused'}}>
<p className="text-gray-500 text-sm">
            © 2024 Prism Studio. All rights reserved.
          </p>
<div className="flex sm:mt-0 mt-4 space-x-2 items-center">
<span className="text-sm text-gray-500">Made with</span>
<svg className="lucide lucide-heart animate-bounce-gentle w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationPlayState: 'paused', width: '16px', height: '16px', color: 'rgb(16, 24, 39)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-sm text-gray-500">with Aura Build</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
