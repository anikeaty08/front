import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'clip-in': 'clipIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards',
'fade-up': 'fadeUp 0.6s ease-out forwards',
},
keyframes: {
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Spotlight Effect Logic
        const cards = document.querySelectorAll('.spotlight-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                sidebar.classList.remove('-translate-x-full');
                sidebar.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                setTimeout(() => {
                    // Only hide display if we are on mobile to prevent layout shift on resize
                    if(window.innerWidth < 1024) {
                        // sidebar.classList.add('hidden'); 
                        // Keeping it flex but translated out is better for animation
                    }
                }, 300);
            }
        });

        // Close sidebar on click outside (mobile)
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
                isMenuOpen = false;
                sidebar.classList.add('-translate-x-full');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>

<header className="lg:hidden fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
<div className="font-semibold tracking-tight text-lg">ACME_OS</div>
<button className="p-2 text-neutral-600 hover:text-neutral-900" id="mobile-menu-btn">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</header>

<aside className="fixed left-0 top-0 bottom-0 w-64 glass-panel z-30 hidden lg:flex flex-col justify-between p-6 transition-transform duration-300 transform lg:translate-x-0 -translate-x-full" id="sidebar">
<div>

<div className="mb-10 px-2 flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:command" data-width="18"></span>
</div>
<span className="font-semibold tracking-tight text-lg">ACME_OS</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-900 bg-neutral-200/50 rounded-lg group transition-colors" href="#">
<span className="iconify text-neutral-900" data-icon="lucide:layout-grid" data-width="18"></span>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg group transition-colors" href="#">
<span className="iconify group-hover:text-neutral-900 transition-colors" data-icon="lucide:bar-chart-3" data-width="18"></span>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg group transition-colors" href="#">
<span className="iconify group-hover:text-neutral-900 transition-colors" data-icon="lucide:users" data-width="18"></span>
                    Team
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg group transition-colors" href="#">
<span className="iconify group-hover:text-neutral-900 transition-colors" data-icon="lucide:layers" data-width="18"></span>
                    Projects
                </a>
</nav>
<div className="mt-8 px-3">
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">System</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                        Status: Operational
                    </a>
<a className="flex items-center gap-3 py-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="16"></span>
                        Configuration
                    </a>
</nav>
</div>
</div>

<div className="border-t border-neutral-200/50 pt-4 mt-4">
<button className="flex items-center gap-3 w-full px-2 py-2 hover:bg-neutral-100 rounded-lg transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 flex items-center justify-center overflow-hidden">
<span className="iconify text-neutral-500" data-icon="lucide:user" data-width="16"></span>
</div>
<div className="flex-1 text-left">
<p className="text-sm font-medium text-neutral-900">Alex Designer</p>
<p className="text-xs text-neutral-500">Admin</p>
</div>
<span className="iconify text-neutral-400" data-icon="lucide:chevron-up" data-width="16"></span>
</button>
</div>
</aside>

<main className="relative z-10 lg:ml-64 min-h-screen p-6 pt-24 lg:p-12 lg:pt-16">

<div className="max-w-7xl mx-auto mb-12 animate-clip-in">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-2">Dashboard</h1>
<p className="text-neutral-500 text-lg">Overview of your infrastructure performance.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-neutral-600 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-colors shadow-sm">
                        Export Data
                    </button>
<button className="btn-shine px-4 py-2 text-sm font-medium text-white bg-neutral-900 border border-neutral-900 rounded-full shadow-lg shadow-neutral-900/20 active:scale-95 transition-transform">
<span className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                            New Project
                        </span>
</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

<div className="spotlight-card rounded-3xl col-span-1 md:col-span-2 lg:col-span-8 p-8 flex flex-col justify-between h-[320px] lg:h-[400px] animate-clip-in" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-start z-10">
<div>
<p className="text-sm font-medium text-neutral-500 mb-1">Total Revenue</p>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">$124,500.00</h2>
<div className="flex items-center gap-1 mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
                            +12.5%
                        </div>
</div>
<div className="flex gap-2">
<span className="text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-1 rounded border border-neutral-200">12M</span>
<span className="text-xs font-medium text-neutral-900 bg-white px-2 py-1 rounded border border-neutral-200 shadow-sm">30D</span>
<span className="text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-1 rounded border border-neutral-200">7D</span>
</div>
</div>

<div className="flex items-end justify-between gap-2 h-40 mt-6 z-10 w-full px-2">

<div className="w-full bg-neutral-200 rounded-t-sm h-[40%] bar-animate" style={{animationDelay: '0.1s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[65%] bar-animate" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[50%] bar-animate" style={{animationDelay: '0.3s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[75%] bar-animate" style={{animationDelay: '0.4s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[60%] bar-animate" style={{animationDelay: '0.5s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[85%] bar-animate" style={{animationDelay: '0.6s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[70%] bar-animate" style={{animationDelay: '0.7s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[90%] bar-animate" style={{animationDelay: '0.8s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[65%] bar-animate" style={{animationDelay: '0.9s'}}></div>
<div className="w-full bg-neutral-900 rounded-t-sm h-[95%] bar-animate" style={{animationDelay: '1.0s'}}></div> 
<div className="w-full bg-neutral-200 rounded-t-sm h-[80%] bar-animate" style={{animationDelay: '1.1s'}}></div>
<div className="w-full bg-neutral-200 rounded-t-sm h-[70%] bar-animate" style={{animationDelay: '1.2s'}}></div>
</div>
</div>

<div className="spotlight-card rounded-3xl col-span-1 lg:col-span-4 p-8 animate-clip-in" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-center mb-6 z-10 relative">
<h3 className="text-lg font-semibold text-neutral-900">System Status</h3>
<span className="iconify text-neutral-400" data-icon="lucide:activity" data-width="20"></span>
</div>
<div className="space-y-4 z-10 relative">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
<span className="iconify text-neutral-600" data-icon="lucide:server" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">API Gateway</p>
<p className="text-xs text-neutral-500">Uptime: 99.9%</p>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
<span className="iconify text-neutral-600" data-icon="lucide:database" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Primary DB</p>
<p className="text-xs text-neutral-500">Optimizing...</p>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-sm">
<span className="iconify text-neutral-600" data-icon="lucide:cloud" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">CDN Edge</p>
<p className="text-xs text-neutral-500">Latency: 24ms</p>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
</div>

<div className="pt-4 border-t border-neutral-200/50 mt-4">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-neutral-500">Maintenance Mode</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-2 border-neutral-300 appearance-none cursor-pointer transition-all duration-300 ease-in-out z-10 shadow-sm" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>
</div>

<div className="spotlight-card rounded-3xl col-span-1 md:col-span-1 lg:col-span-4 p-8 flex flex-col justify-center items-center text-center animate-clip-in group cursor-pointer" style={{animationDelay: '0.3s'}}>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-neutral-100 to-white border border-neutral-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 z-10">
<span className="iconify text-neutral-900" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 z-10">Deploy Production</h3>
<p className="text-sm text-neutral-500 mt-2 max-w-[200px] z-10">Trigger a new build and deploy to all edge regions.</p>
</div>

<div className="spotlight-card rounded-3xl col-span-1 md:col-span-1 lg:col-span-4 p-8 animate-clip-in" style={{animationDelay: '0.4s'}}>
<div className="flex justify-between items-center mb-4 z-10 relative">
<h3 className="text-base font-semibold text-neutral-900">Active Contributors</h3>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">View All</a>
</div>
<div className="flex -space-x-3 overflow-hidden py-2 z-10 relative pl-1">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white grayscale hover:grayscale-0 transition-all duration-300 transform hover:-translate-y-1" src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
<div className="h-10 w-10 rounded-full ring-2 ring-white bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-600 z-10 relative">
                        +5
                    </div>
</div>
</div>

<div className="spotlight-card rounded-3xl col-span-1 lg:col-span-4 p-8 animate-clip-in" style={{animationDelay: '0.5s'}}>
<h3 className="text-base font-semibold text-neutral-900 mb-4 z-10 relative">Notifications</h3>
<div className="space-y-3 z-10 relative">
<div className="flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></div>
<p className="text-sm text-neutral-600 leading-snug"><span className="font-medium text-neutral-900">Deployment #829</span> finished successfully.</p>
</div>
<div className="flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></div>
<p className="text-sm text-neutral-600 leading-snug"><span className="font-medium text-neutral-900">Billing</span> invoice generated for October.</p>
</div>
<div className="flex gap-3 items-start">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 flex-shrink-0"></div>
<p className="text-sm text-neutral-600 leading-snug"><span className="font-medium text-neutral-900">Security</span> audit completed. No risks.</p>
</div>
</div>
</div>
</div>
<footer className="mt-12 border-t border-neutral-200 py-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 animate-fade-up opacity-0" style={{animationDelay: '0.8s'}}>
<p>© 2024 Acme Inc. All systems operational.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-900" href="#">Privacy</a>
<a className="hover:text-neutral-900" href="#">Terms</a>
<a className="hover:text-neutral-900" href="#">Support</a>
</div>
</footer>
</main>


    </>
  );
}
