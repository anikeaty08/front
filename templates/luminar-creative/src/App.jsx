import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        (function() {
          const animateNumber = (element, target, suffix = '', decimals = 0) => {
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              element.textContent = current.toFixed(decimals) + suffix;
            }, 16);
          };

          const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
          };

          const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseFloat(element.getAttribute('data-count-target'));
                const text = element.parentElement.nextElementSibling.textContent.toLowerCase();
                
                let suffix = '';
                let displayTarget = target;
                let decimals = 0;
                
                if (text.includes('users')) {
                  suffix = 'K+';
                  displayTarget = target;
                  decimals = 0;
                } else if (text.includes('images')) {
                  suffix = 'M+';
                  displayTarget = target;
                  decimals = 0;
                } else if (text.includes('uptime')) {
                  suffix = '%';
                  displayTarget = target;
                  decimals = 1;
                } else if (text.includes('rating')) {
                  suffix = '/5';
                  displayTarget = target;
                  decimals = 1;
                }
                
                animateNumber(element, displayTarget, suffix, decimals);
                statsObserver.unobserve(element);
              }
            });
          }, observerOptions);

          document.querySelectorAll('[data-count-target]').forEach(el => {
            statsObserver.observe(el);
          });
        })();
      


      // Mobile menu toggle
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Lucide icons initialization
      lucide.createIcons();

      // Scroll animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      }, observerOptions);

      // Observe all elements with animation classes
      document.querySelectorAll('.animate-on-scroll, .animate-slide-right, .animate-slide-left, .animate-scale, .animate-fade').forEach(el => {
        observer.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl border-neutral-800 bg-black/80">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-6 lg:gap-12">
<a className="flex items-center gap-2.5" href="#">
<span className="xl:pt-2 xl:pb-2 text-base font-semibold tracking-tight w-32 sm:w-40 h-16 sm:h-24 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3535c305-9612-4c66-ac14-2a3ef4583bd1_320w.png)] bg-cover bg-center pt-2 pb-2"></span>
</a>
<nav className="hidden items-center gap-6 lg:gap-8 text-sm lg:flex text-neutral-400">
<a className="transition-colors hover:text-neutral-100" href="#product">
                Product
              </a>
<a className="transition-colors hover:text-neutral-100" href="#solutions">
                Solutions
              </a>
<a className="transition-colors hover:text-neutral-100" href="#resources">
                Resources
              </a>
<a className="transition-colors hover:text-neutral-100" href="#pricing">
                Pricing
              </a>
</nav>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<a className="hidden md:inline-flex text-sm font-medium transition-colors text-neutral-400 hover:text-neutral-100" href="#">
              Sign in
            </a>
<a className="hidden lg:inline-flex items-center gap-2 text-sm font-medium rounded-lg px-3 sm:px-4 py-2 transition-colors text-black bg-neutral-100 hover:bg-neutral-200" href="#">
<span>Get started</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg transition-colors text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900" id="mobile-menu-button">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden border-t border-neutral-800 bg-black/95 backdrop-blur-xl" id="mobile-menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
<nav className="flex flex-col gap-4 mb-6">
<a className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400" href="#product">
              Product
            </a>
<a className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400" href="#solutions">
              Solutions
            </a>
<a className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400" href="#resources">
              Resources
            </a>
<a className="text-sm font-medium transition-colors text-neutral-100 hover:text-neutral-400" href="#pricing">
              Pricing
            </a>
</nav>
<div className="flex flex-col gap-3 pt-4 border-t border-neutral-800">
<a className="text-center text-sm font-medium rounded-lg px-4 py-2.5 transition-colors text-neutral-100 bg-neutral-900 hover:bg-neutral-800" href="#">
              Sign in
            </a>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2.5 transition-colors text-black bg-neutral-100 hover:bg-neutral-200" href="#">
<span>Get started</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<section className="bg-gradient-to-b from-neutral-950/0 to-black pt-32 pb-20">
<div className="max-w-7xl mr-auto ml-auto pr-4 pl-4 sm:pr-6 sm:pl-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 text-xs font-medium rounded-full px-3 py-1.5 mb-6 text-neutral-400 bg-neutral-900 animate-on-scroll animated">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="">Now available: Version 5.0 with enhanced AI tools</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-neutral-100 animate-on-scroll animate-on-scroll-delay-1 animated">
            Professional creative suite for modern teams
          </h1>
<p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10 text-neutral-400 animate-on-scroll animate-on-scroll-delay-2 animated">
            Powerful editing tools, intelligent automation, and seamless
            collaboration. Everything you need to create exceptional visual
            content.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-on-scroll animate-on-scroll-delay-3 animated">
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-colors hover:bg-neutral-200 text-sm font-medium text-black bg-neutral-100 w-full rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#">
<span className="">Start free trial</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium border rounded-lg px-6 py-3 transition-colors text-neutral-100 bg-black border-neutral-700 hover:bg-neutral-950" href="#">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">Watch demo</span>
</a>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-neutral-500 animate-on-scroll animate-on-scroll-delay-4 animated">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Free 14-day trial</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="">No credit card required</span>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto animate-scale animate-on-scroll-delay-5 animated">
<div className="relative rounded-xl border p-2 shadow-2xl border-neutral-800 bg-neutral-950 shadow-neutral-100/10">
<div className="overflow-hidden bg-black border-neutral-800 border rounded-lg">
<div className="border-b px-4 py-3 flex items-center gap-2 border-neutral-800">
<div className="flex items-center gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
</div>
<div className="flex-1 mx-4 hidden sm:block">
<div className="h-6 rounded-md px-3 flex items-center text-xs bg-neutral-900 text-neutral-400 max-w-md">dashboard.luminar.app/projects</div>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center">
<svg className="text-neutral-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path></svg>
</div>
</div>
</div>
<div className="p-3 sm:p-6 bg-neutral-950">

<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
<div className="">
<h3 className="text-base sm:text-lg font-semibold text-neutral-100 mb-1">Project Dashboard</h3>
<p className="text-xs sm:text-sm text-neutral-400">Overview of your creative workspace</p>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors text-neutral-400 border-neutral-700 hover:bg-neutral-900">
<svg className="inline mr-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<span className="hidden sm:inline">Export</span>
</button>
<button className="flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-lg transition-colors text-black bg-neutral-100 hover:bg-neutral-200">
<svg className="inline mr-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
<span className="hidden sm:inline">New Project</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
<div className="sm:p-4 bg-black border-neutral-800 border rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-medium text-neutral-400">Active Projects</div>
<div className="flex bg-blue-500/10 w-8 h-8 rounded-lg items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-1">24</div>
<div className="text-xs text-emerald-500">+12% this month</div>
</div>
<div className="bg-black border border-neutral-800 rounded-lg p-3 sm:p-4">
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-medium text-neutral-400">Team Members</div>
<div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path className="" d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-1">12</div>
<div className="text-xs text-neutral-500">8 online now</div>
</div>
<div className="bg-black border border-neutral-800 rounded-lg p-3 sm:p-4">
<div className="flex mb-2 items-center justify-between">
<div className="text-xs font-medium text-neutral-400">Storage Used</div>
<div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path className="" d="M3 5v14a9 3 0 0 0 18 0V5"></path></svg>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-1">342GB</div>
<div className="text-xs text-neutral-500">68% of 500GB</div>
</div>
<div className="sm:p-4 bg-black border-neutral-800 border rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-medium text-neutral-400">Processed Today</div>
<div className="flex bg-emerald-500/10 w-8 h-8 rounded-lg items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="text-xl sm:text-2xl font-semibold text-neutral-100 mb-1">1,432</div>
<div className="text-xs text-emerald-500">+24% vs yesterday</div>
</div>
</div>

<div className="mb-6">
<div className="flex mb-4 items-center justify-between">
<h4 className="text-sm font-semibold text-neutral-100">Recent Projects</h4>
<a className="text-xs font-medium text-neutral-400 hover:text-neutral-100 hidden sm:block" href="#">View all →</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
<div className="bg-black border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
<div className="aspect-video bg-neutral-900 relative">
<img alt="Project" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5f52e2f1-d904-420f-82c5-91ee43087973_1600w.webp"/>
<div className="absolute top-2 right-2">
<span className="px-2 py-1 text-xs font-medium rounded bg-emerald-500/20 text-emerald-500 backdrop-blur-sm">Active</span>
</div>
</div>
<div className="p-3">
<h5 className="text-sm font-medium text-neutral-100 mb-1">Brand Campaign 2024</h5>
<p className="text-xs text-neutral-400 mb-3">Last edited 2 hours ago</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-black bg-neutral-600"></div>
<div className="w-6 h-6 rounded-full border-2 border-black bg-neutral-500"></div>
<div className="w-6 h-6 rounded-full border-2 border-black bg-neutral-700 flex items-center justify-center text-xs text-neutral-300">+3</div>
</div>
<div className="text-xs text-neutral-500">24 files</div>
</div>
</div>
</div>
<div className="bg-black border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
<div className="aspect-video bg-neutral-900 relative">
<img alt="Project" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7b53e074-8834-4a02-9cd1-fe96549bd7ba_1600w.png"/>
<div className="absolute top-2 right-2">
<span className="px-2 py-1 text-xs font-medium rounded bg-blue-500/20 text-blue-500 backdrop-blur-sm">In Review</span>
</div>
</div>
<div className="p-3">
<h5 className="text-sm font-medium text-neutral-100 mb-1">Product Photography</h5>
<p className="text-xs text-neutral-400 mb-3">Last edited 5 hours ago</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-black bg-neutral-500"></div>
<div className="w-6 h-6 rounded-full border-2 border-black bg-neutral-600"></div>
</div>
<div className="text-xs text-neutral-500">18 files</div>
</div>
</div>
</div>
<div className="bg-black border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors">
<div className="aspect-video bg-neutral-900 relative">
<img alt="Project" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3691670-52f5-409f-a1aa-c66aabcff3e5_1600w.png"/>
<div className="absolute top-2 right-2">
<span className="px-2 py-1 text-xs font-medium rounded bg-neutral-700 text-neutral-300 backdrop-blur-sm">Draft</span>
</div>
</div>
<div className="p-3">
<h5 className="text-sm font-medium text-neutral-100 mb-1">Social Media Assets</h5>
<p className="text-xs text-neutral-400 mb-3">Last edited yesterday</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-black bg-neutral-700"></div>
</div>
<div className="text-xs text-neutral-500">12 files</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

<div className="bg-black border border-neutral-800 rounded-lg p-3 sm:p-4">
<h4 className="text-sm font-semibold text-neutral-100 mb-4">Recent Activity</h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 bg-neutral-800 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99667665-1a71-4064-bf58-4743bb9e0ebc_320w.webp)] bg-cover rounded-full"></div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm text-neutral-100"><span className="font-medium">Sarah Chen</span> uploaded 12 new images</p>
<p className="text-xs text-neutral-500 mt-1">Brand Campaign 2024 • 2 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 bg-neutral-800 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg)] bg-cover rounded-full"></div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm text-neutral-100"><span className="font-medium">Alex Park</span> completed color grading</p>
<p className="text-xs text-neutral-500 mt-1">Product Photography • 4 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 bg-neutral-800 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp)] bg-cover rounded-full"></div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm text-neutral-100"><span className="font-medium">Maria Garcia</span> added 3 comments</p>
<p className="text-xs text-neutral-500 mt-1">Social Media Assets • 6 hours ago</p>
</div>
</div>
<div className="flex items-start gap-3 hidden sm:flex">
<div className="flex-shrink-0 bg-neutral-800 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ddc37ed0-cf39-4a27-9409-f680f25cb6d7_320w.jpg)] bg-cover rounded-full"></div>
<div className="flex-1 min-w-0">
<p className="text-xs sm:text-sm text-neutral-100"><span className="font-medium">David Chen</span> exported final deliverables</p>
<p className="text-xs text-neutral-500 mt-1">Brand Campaign 2024 • Yesterday</p>
</div>
</div>
</div>
</div>

<div className="bg-black border border-neutral-800 rounded-lg p-3 sm:p-4">
<h4 className="text-sm font-semibold text-neutral-100 mb-4">Quick Actions</h4>
<div className="space-y-3">
<button className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors text-left">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
<svg className="text-blue-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs sm:text-sm font-medium text-neutral-100">Upload Files</div>
<div className="text-xs text-neutral-400">Add images to project</div>
</div>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors text-left">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
<svg className="text-purple-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs sm:text-sm font-medium text-neutral-100">AI Background Removal</div>
<div className="text-xs text-neutral-400 hidden sm:block">Process batch images</div>
</div>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors text-left">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
<svg className="text-emerald-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs sm:text-sm font-medium text-neutral-100">Invite Team Member</div>
<div className="text-xs text-neutral-400 hidden sm:block">Collaborate on projects</div>
</div>
</button>
<button className="w-full flex items-center gap-3 p-3 rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors text-left">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
<svg className="text-orange-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs sm:text-sm font-medium text-neutral-100">Leave Feedback</div>
<div className="text-xs text-neutral-400 hidden sm:block">Comment on designs</div>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -top-8 -right-8 w-32 h-32 rounded-xl border shadow-lg animate-pulse bg-neutral-900 border-neutral-700 p-4 hidden lg:block">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="text-xs font-medium text-neutral-100">
                  Processing
                </div>
</div>
<div className="space-y-2">
<div className="h-1.5 rounded-full bg-neutral-700">
<div className="w-3/4 h-full rounded-full bg-neutral-100"></div>
</div>
<div className="h-1.5 rounded-full bg-neutral-700">
<div className="w-1/2 h-full rounded-full bg-neutral-100"></div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 w-40 h-24 rounded-xl border shadow-lg bg-neutral-900 border-neutral-700 p-4 hidden lg:block" style={{animation: 'float 3s ease-in-out infinite'}}>
<div className="flex items-center justify-between mb-2">
<div className="text-xs font-medium text-neutral-100">Layers</div>
<div className="text-xs text-neutral-400">24</div>
</div>
<div className="flex -space-x-1">
<div className="w-6 h-6 rounded border-2 bg-neutral-700 border-neutral-900"></div>
<div className="w-6 h-6 rounded border-2 bg-neutral-600 border-neutral-900"></div>
<div className="w-6 h-6 rounded border-2 bg-neutral-500 border-neutral-900"></div>
<div className="w-6 h-6 rounded border-2 bg-neutral-400 border-neutral-900 flex items-center justify-center text-[10px] text-black">
                  +20
                </div>
</div>
</div>
<div className="absolute top-1/3 -right-12 w-28 h-28 rounded-xl border shadow-lg bg-neutral-900 border-neutral-700 p-3 hidden lg:block" style={{animation: 'float 4s ease-in-out infinite', animationDelay: '1s'}}>
<div className="flex items-center gap-1.5 mb-2">
<svg className="w-3 h-3 text-neutral-100" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
</svg>
<div className="text-xs font-medium text-neutral-100">Color</div>
</div>
<div className="grid grid-cols-4 gap-1">
<div className="w-4 h-4 rounded bg-red-500"></div>
<div className="w-4 h-4 rounded bg-blue-500"></div>
<div className="w-4 h-4 rounded bg-green-500"></div>
<div className="w-4 h-4 rounded bg-yellow-500"></div>
</div>
</div>
<div className="absolute top-12 -left-8 w-36 h-20 rounded-xl border shadow-lg bg-neutral-900 border-neutral-700 p-3 hidden lg:block" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s'}}>
<div className="flex items-center gap-2 mb-2">
<svg className="w-3 h-3 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<div className="text-xs font-medium text-neutral-100">
                  AI Enhanced
                </div>
</div>
<div className="text-[10px] text-neutral-400">
                Background removed • 2s ago
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-16 border-y bg-black border-neutral-800 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
<div className="text-center animate-on-scroll">
<div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-neutral-100" data-count-target="150">
              0
            </div>
<div className="text-xs sm:text-sm text-neutral-400">Active users</div>
</div>
<div className="text-center animate-on-scroll animate-on-scroll-delay-1">
<div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-neutral-100" data-count-target="50">
              0
            </div>
<div className="text-xs sm:text-sm text-neutral-400">Images processed</div>
</div>
<div className="text-center animate-on-scroll animate-on-scroll-delay-2">
<div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-neutral-100" data-count-target="99.9">
              0
            </div>
<div className="text-xs sm:text-sm text-neutral-400">Uptime</div>
</div>
<div className="text-center animate-on-scroll animate-on-scroll-delay-3">
<div className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1 text-neutral-100" data-count-target="4.9">
              0
            </div>
<div className="text-xs sm:text-sm text-neutral-400">User rating</div>
</div>
</div>
</div>

</section>

<section className="py-16 sm:py-24 bg-black" id="product">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="max-w-3xl mb-12 sm:mb-16 animate-on-scroll">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-4 text-neutral-100">
            Everything you need to create professional content
          </h2>
<p className="text-base sm:text-lg text-neutral-400">
            Built for photographers, designers, and creative teams who demand
            precision and efficiency.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

<div className="group relative border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all bg-neutral-950 border-neutral-800 hover:shadow-neutral-100/5 animate-on-scroll">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-neutral-100">
<svg className="lucide lucide-layers w-6 h-6 text-black" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold mb-3 text-neutral-100">
              Advanced Layer System
            </h3>
<p className="text-sm sm:text-base leading-relaxed mb-6 text-neutral-400">
              Non-destructive editing with unlimited layers, smart objects, and
              adjustment layers. Full control over every element of your
              composition.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all text-neutral-100" href="#">
<span>Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all bg-neutral-950 border-neutral-800 hover:shadow-neutral-100/5 animate-on-scroll animate-on-scroll-delay-1">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-neutral-100">
<svg className="lucide lucide-brain w-6 h-6 text-black" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold mb-3 text-neutral-100">
              AI-Powered Tools
            </h3>
<p className="text-sm sm:text-base leading-relaxed mb-6 text-neutral-400">
              Intelligent background removal, object selection, and
              content-aware fill. Let AI handle the tedious work while you focus
              on creativity.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all text-neutral-100" href="#">
<span>Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all bg-neutral-950 border-neutral-800 hover:shadow-neutral-100/5 animate-on-scroll animate-on-scroll-delay-2">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-neutral-100">
<svg className="lucide lucide-palette w-6 h-6 text-black" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold mb-3 text-neutral-100">
              Professional Color Grading
            </h3>
<p className="text-sm sm:text-base leading-relaxed mb-6 text-neutral-400">
              Precise color correction with curves, LUTs, and HSL adjustments.
              Create consistent looks across your entire project with custom
              presets.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all text-neutral-100" href="#">
<span>Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group relative border rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all bg-neutral-950 border-neutral-800 hover:shadow-neutral-100/5 animate-on-scroll animate-on-scroll-delay-3">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-neutral-100">
<svg className="lucide lucide-users w-6 h-6 text-black" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg sm:text-xl font-semibold mb-3 text-neutral-100">
              Team Collaboration
            </h3>
<p className="text-sm sm:text-base leading-relaxed mb-6 text-neutral-400">
              Share projects, leave feedback, and collaborate in real-time.
              Manage permissions and keep your team aligned with centralized
              asset libraries.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all text-neutral-100" href="#">
<span className="">Learn more</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-24">
<div className="animate-slide-right">
<div className="inline-flex items-center gap-2 text-xs font-medium border rounded-full px-3 py-1.5 mb-6 text-neutral-400 bg-black border-neutral-800">
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Performance</span>
</div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-100">
              Lightning fast, even with large files
            </h2>
<p className="text-base sm:text-lg leading-relaxed mb-8 text-neutral-400">
              GPU-accelerated processing ensures smooth editing, even with
              high-resolution images and complex layer stacks. Work faster
              without compromising quality.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-4 animate-on-scroll">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 bg-black border-neutral-800">
<svg className="lucide lucide-gauge w-5 h-5 text-neutral-100" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div>
<h4 className="text-sm sm:text-base font-medium mb-1 text-neutral-100">
                    Real-time previews
                  </h4>
<p className="text-xs sm:text-sm text-neutral-400">
                    See your changes instantly without waiting for renders or
                    processing.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-1">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 bg-black border-neutral-800">
<svg className="lucide lucide-hard-drive w-5 h-5 text-neutral-100" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</div>
<div className="">
<h4 className="text-sm sm:text-base font-medium mb-1 text-neutral-100">
                    Smart caching
                  </h4>
<p className="text-xs sm:text-sm text-neutral-400">
                    Intelligent memory management keeps your workflow smooth and
                    responsive.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-2">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 bg-black border-neutral-800">
<svg className="lucide lucide-cpu w-5 h-5 text-neutral-100" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div className="">
<h4 className="text-sm sm:text-base font-medium mb-1 text-neutral-100">
                    Multi-threaded processing
                  </h4>
<p className="text-xs sm:text-sm text-neutral-400">
                    Utilizes all available CPU cores for batch operations and
                    exports.
                  </p>
</div>
</div>
</div>
</div>
<div className="border rounded-xl p-4 sm:p-8 shadow-sm bg-black border-neutral-800 animate-slide-left">
<div className="aspect-[4/3] rounded-lg mb-6 overflow-hidden bg-neutral-900">
<img alt="Performance" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7b53e074-8834-4a02-9cd1-fe96549bd7ba_1600w.png"/>
</div>
<div className="grid grid-cols-3 gap-3 sm:gap-4">
<div className="text-center p-3 sm:p-4 rounded-lg border bg-neutral-950 border-neutral-800 animate-on-scroll">
<div className="text-xl sm:text-2xl font-semibold mb-1 text-neutral-100">
                  3.2s
                </div>
<div className="text-xs text-neutral-400">Export time</div>
</div>
<div className="text-center p-3 sm:p-4 rounded-lg border bg-neutral-950 border-neutral-800 animate-on-scroll animate-on-scroll-delay-1">
<div className="text-xl sm:text-2xl font-semibold mb-1 text-neutral-100">
                  60fps
                </div>
<div className="text-xs text-neutral-400">Preview rate</div>
</div>
<div className="text-center p-3 sm:p-4 rounded-lg border bg-neutral-950 border-neutral-800 animate-on-scroll animate-on-scroll-delay-2">
<div className="text-xl sm:text-2xl font-semibold mb-1 text-neutral-100">
                  200MP
                </div>
<div className="text-xs text-neutral-400">Max resolution</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
<div className="order-2 lg:order-1 animate-slide-right">
<div className="bg-black border-neutral-800 border rounded-xl p-4 sm:p-8 shadow-sm">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
<div className="flex items-center gap-3">
<div className="bg-neutral-900 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/99667665-1a71-4064-bf58-4743bb9e0ebc_320w.webp)] bg-cover border-neutral-800 border rounded-full"></div>
<div>
<div className="text-sm font-medium text-neutral-100">
                      Sarah Chen
                    </div>
<div className="text-xs text-neutral-500">
                      Creative Director
                    </div>
</div>
</div>
<div className="text-xs text-neutral-500 hidden sm:block">2 min ago</div>
</div>
<div className="aspect-video rounded-lg mb-4 overflow-hidden bg-neutral-900">
<img alt="Collaboration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c3691670-52f5-409f-a1aa-c66aabcff3e5_1600w.png"/>
</div>
<div className="flex items-center gap-2 mb-4">
<div className="flex-1 h-1 rounded-full bg-neutral-800">
<div className="w-2/3 h-full rounded-full bg-neutral-100"></div>
</div>
<span className="text-xs text-neutral-400">67%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="bg-neutral-700 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/502f3826-dd9e-498a-8e43-c7540001bd5a_320w.webp)] bg-cover border-black border-2 rounded-full"></div>
<div className="bg-neutral-600 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c43fd30-7622-4f38-a139-ab7c72e6252c_320w.webp)] bg-cover border-black border-2 rounded-full"></div>
<div className="bg-neutral-500 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/93e809b2-9bbb-4529-a484-213a3c44171d_320w.webp)] bg-cover border-black border-2 rounded-full"></div>
</div>
<button className="text-xs font-medium rounded-lg px-3 py-1.5 transition-colors text-neutral-100 bg-neutral-900 hover:bg-neutral-800">
                  Add comment
                </button>
</div>
</div>
</div>
<div className="order-1 lg:order-2 animate-slide-left">
<div className="inline-flex items-center gap-2 text-xs font-medium border rounded-full px-3 py-1.5 mb-6 text-neutral-400 bg-black border-neutral-800">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Collaboration</span>
</div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-100">
              Built for teams that move fast
            </h2>
<p className="text-base sm:text-lg leading-relaxed mb-8 text-neutral-400">
              Streamline your creative workflow with powerful collaboration
              features. Share feedback, manage versions, and keep everyone in
              sync.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-4 animate-on-scroll">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 bg-black border-neutral-800">
<svg className="lucide lucide-message-circle w-5 h-5 text-neutral-100" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="">
<h4 className="text-sm sm:text-base font-medium mb-1 text-neutral-100">
                    Contextual comments
                  </h4>
<p className="text-xs sm:text-sm text-neutral-400">
                    Pin feedback directly to specific areas of your design for
                    clear communication.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-1">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 bg-black border-neutral-800">
<svg className="lucide lucide-git-branch w-5 h-5 text-neutral-100" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div className="">
<h4 className="text-sm sm:text-base font-medium mb-1 text-neutral-100">
                    Version control
                  </h4>
<p className="text-xs sm:text-sm text-neutral-400">
                    Automatic versioning lets you experiment freely and revert
                    to any previous state.
                  </p>
</div>
</div>
<div className="flex items-start gap-4 animate-on-scroll animate-on-scroll-delay-2">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 bg-black border-neutral-800">
<svg className="lucide lucide-folder w-5 h-5 text-neutral-100" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<div className="">
<h4 className="text-sm sm:text-base font-medium mb-1 text-neutral-100">
                    Shared libraries
                  </h4>
<p className="text-xs sm:text-sm text-neutral-400">
                    Centralize your assets and maintain brand consistency across
                    all projects.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-black" id="solutions">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-on-scroll">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-100">
            Integrates with your workflow
          </h2>
<p className="text-base sm:text-lg text-neutral-400">
            Connect with the tools you already use. Seamless integration with
            popular platforms and services.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
<div className="border rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-md transition-shadow bg-neutral-950 border-neutral-800 animate-scale">
<div className="text-center">
<div className="w-10 h-10 sm:w-12 sm:h-12 border rounded-lg mx-auto mb-3 flex items-center justify-center bg-black border-neutral-800">
<svg className="lucide lucide-figma text-neutral-100" data-lucide="figma" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="text-xs sm:text-sm font-medium text-neutral-100">Figma</div>
</div>
</div>
<div className="border rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-md transition-shadow bg-neutral-950 border-neutral-800 animate-scale animate-on-scroll-delay-1">
<div className="text-center">
<div className="w-10 h-10 sm:w-12 sm:h-12 border rounded-lg mx-auto mb-3 flex items-center justify-center bg-black border-neutral-800">
<svg className="lucide lucide-github text-neutral-100" data-lucide="github" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<div className="text-xs sm:text-sm font-medium text-neutral-100">GitHub</div>
</div>
</div>
<div className="border rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-md transition-shadow bg-neutral-950 border-neutral-800 animate-scale animate-on-scroll-delay-2">
<div className="text-center">
<div className="w-10 h-10 sm:w-12 sm:h-12 border rounded-lg mx-auto mb-3 flex items-center justify-center bg-black border-neutral-800">
<svg className="lucide lucide-slack text-neutral-100" data-lucide="slack" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</div>
<div className="text-xs sm:text-sm font-medium text-neutral-100">Slack</div>
</div>
</div>
<div className="border rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-md transition-shadow bg-neutral-950 border-neutral-800 animate-scale animate-on-scroll-delay-3">
<div className="text-center">
<div className="w-10 h-10 sm:w-12 sm:h-12 border rounded-lg mx-auto mb-3 flex items-center justify-center bg-black border-neutral-800">
<svg className="lucide lucide-droplet text-neutral-100" data-lucide="droplet" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div className="text-xs sm:text-sm font-medium text-neutral-100">Dropbox</div>
</div>
</div>
<div className="border rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-md transition-shadow bg-neutral-950 border-neutral-800 animate-scale animate-on-scroll-delay-4">
<div className="text-center">
<div className="w-10 h-10 sm:w-12 sm:h-12 border rounded-lg mx-auto mb-3 flex items-center justify-center bg-black border-neutral-800">
<svg className="lucide lucide-cloud text-neutral-100" data-lucide="cloud" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
<div className="text-xs sm:text-sm font-medium text-neutral-100">Drive</div>
</div>
</div>
<div className="border rounded-xl p-4 sm:p-6 flex items-center justify-center hover:shadow-md transition-shadow bg-neutral-950 border-neutral-800 animate-scale animate-on-scroll-delay-5">
<div className="text-center">
<div className="w-10 h-10 sm:w-12 sm:h-12 border rounded-lg mx-auto mb-3 flex items-center justify-center bg-black border-neutral-800">
<svg className="lucide lucide-trello text-neutral-100" data-lucide="trello" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
</div>
<div className="text-xs sm:text-sm font-medium text-neutral-100">Notion</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-950" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-on-scroll">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-100">
            Simple, transparent pricing
          </h2>
<p className="text-base sm:text-lg text-neutral-400">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

<div className="border rounded-xl p-6 sm:p-8 bg-black border-neutral-800 animate-on-scroll">
<div className="mb-8">
<h3 className="text-base sm:text-lg font-semibold mb-2 text-neutral-100">
                Starter
              </h3>
<p className="text-xs sm:text-sm mb-6 text-neutral-400">
                Perfect for individuals and freelancers
              </p>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100">
                  $12
                </span>
<span className="text-neutral-400">/month</span>
</div>
</div>
<a className="block w-full text-center text-sm font-medium rounded-lg py-2.5 transition-colors mb-8 text-neutral-100 bg-neutral-900 hover:bg-neutral-800" href="#">
              Start free trial
            </a>
<div className="space-y-3">
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Up to 5 projects</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-1">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">50GB storage</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-2">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Basic AI tools</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-3">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Email support</span>
</div>
</div>
</div>

<div className="rounded-xl p-6 sm:p-8 relative shadow-xl bg-neutral-100 text-black animate-on-scroll animate-on-scroll-delay-1">
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-3 py-1 shadow-sm text-neutral-100 bg-black">
                Most popular
              </span>
</div>
<div className="mb-8">
<h3 className="text-base sm:text-lg font-semibold mb-2">Professional</h3>
<p className="text-xs sm:text-sm mb-6 text-neutral-600">
                For professionals and small teams
              </p>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight">$29</span>
<span className="text-neutral-600">/month</span>
</div>
</div>
<a className="block w-full text-center text-sm font-medium rounded-lg py-2.5 transition-colors mb-8 text-neutral-100 bg-black hover:bg-neutral-900" href="#">
              Start free trial
            </a>
<div className="space-y-3">
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-700">Unlimited projects</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-1">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-700">500GB storage</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-2">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-700">Advanced AI tools</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-3">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-700">Priority support</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-4">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-700">Team collaboration</span>
</div>
</div>
</div>

<div className="border rounded-xl p-6 sm:p-8 bg-black border-neutral-800 animate-on-scroll animate-on-scroll-delay-2">
<div className="mb-8">
<h3 className="text-base sm:text-lg font-semibold mb-2 text-neutral-100">
                Enterprise
              </h3>
<p className="text-xs sm:text-sm mb-6 text-neutral-400">
                For large teams and organizations
              </p>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-100">
                  Custom
                </span>
</div>
</div>
<a className="block w-full text-center text-sm font-medium rounded-lg py-2.5 transition-colors mb-8 text-neutral-100 bg-neutral-900 hover:bg-neutral-800" href="#">
              Contact sales
            </a>
<div className="space-y-3">
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Everything in Professional</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-1">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Unlimited storage</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-2">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Advanced security</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-3">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Dedicated support</span>
</div>
<div className="flex items-start gap-3 text-xs sm:text-sm animate-on-scroll animate-on-scroll-delay-4">
<svg className="lucide lucide-check w-5 h-5 flex-shrink-0 mt-0.5 text-neutral-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-400">Custom integrations</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-black" id="resources">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-on-scroll">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-100">
            Trusted by creative professionals
          </h2>
<p className="text-base sm:text-lg text-neutral-400">
            See what our users have to say about their experience with Luminar.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
<div className="border rounded-xl p-6 sm:p-8 bg-neutral-950 border-neutral-800 animate-on-scroll">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm sm:text-base leading-relaxed mb-6 text-neutral-400">
              "Luminar has completely transformed our design workflow. The AI
              tools save us hours every week, and the collaboration features
              keep our team in perfect sync."
            </p>
<div className="flex items-center gap-3">
<div className="bg-neutral-700 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg)] bg-cover rounded-full"></div>
<div>
<div className="text-sm font-medium text-neutral-100">
                  Alex Thompson
                </div>
<div className="text-xs text-neutral-400">
                  Creative Director at Studio
                </div>
</div>
</div>
</div>
<div className="border rounded-xl p-6 sm:p-8 bg-neutral-950 border-neutral-800 animate-on-scroll animate-on-scroll-delay-1">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm sm:text-base leading-relaxed mb-6 text-neutral-400">
              "The performance is incredible. I can edit 200MP images without any lag. The GPU acceleration makes everything feel instantaneous."
            </p>
<div className="flex items-center gap-3">
<div className="bg-neutral-700 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/502f3826-dd9e-498a-8e43-c7540001bd5a_320w.webp)] bg-cover rounded-full"></div>
<div>
<div className="text-sm font-medium text-neutral-100">
                  Jamie Rodriguez
                </div>
<div className="text-xs text-neutral-400">
                  Professional Photographer
                </div>
</div>
</div>
</div>
<div className="border rounded-xl p-6 sm:p-8 bg-neutral-950 border-neutral-800 animate-on-scroll animate-on-scroll-delay-2">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neutral-100 fill-neutral-100" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm sm:text-base leading-relaxed mb-6 text-neutral-400">
              "Best creative software I've used. The integration with our existing tools was seamless, and the learning curve was surprisingly gentle."
            </p>
<div className="flex items-center gap-3">
<div className="bg-neutral-700 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c43fd30-7622-4f38-a139-ab7c72e6252c_320w.webp)] bg-cover rounded-full"></div>
<div>
<div className="text-sm font-medium text-neutral-100">
                  Morgan Lee
                </div>
<div className="text-xs text-neutral-400">
                  UI/UX Designer
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="border rounded-xl p-8 sm:p-12 lg:p-16 text-center bg-black border-neutral-800 animate-on-scroll">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-neutral-100">
            Ready to transform your creative workflow?
          </h2>
<p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 text-neutral-400">
            Join thousands of creative professionals who trust Luminar for their projects. Start your free trial today.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-6 py-3 transition-colors shadow-sm text-black bg-neutral-100 hover:bg-neutral-200" href="#">
<span>Start free trial</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium border rounded-lg px-6 py-3 transition-colors text-neutral-100 bg-black border-neutral-700 hover:bg-neutral-950" href="#">
<span>Contact sales</span>
</a>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 sm:py-16 bg-black border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h3 className="text-sm font-semibold mb-4 text-neutral-100">Product</h3>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Features</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Integrations</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Pricing</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold mb-4 text-neutral-100">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">About</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Blog</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Careers</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Press</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold mb-4 text-neutral-100">Resources</h3>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Documentation</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Help Center</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Community</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Tutorials</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold mb-4 text-neutral-100">Legal</h3>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Privacy</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Terms</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Security</a></li>
<li><a className="text-sm transition-colors text-neutral-400 hover:text-neutral-100" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-neutral-800">
<div className="flex items-center gap-2">
<span className="text-base font-semibold text-neutral-100">Luminar</span>
</div>
<p className="text-sm text-neutral-400">© 2024 Luminar. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-neutral-100 transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-400 hover:text-neutral-100 transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="text-neutral-400 hover:text-neutral-100 transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
