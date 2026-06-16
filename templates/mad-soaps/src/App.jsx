import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('closed')) {
                menu.classList.remove('closed');
                menu.classList.add('open');
                icon.setAttribute('icon', 'solar:close-circle-linear');
            } else {
                menu.classList.remove('open');
                menu.classList.add('closed');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 w-full z-[100] bg-[#050507]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="flex h-16 max-w-[1400px] mx-auto px-6 items-center justify-between gap-6 relative z-[101]">

<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2 z-50 hover:opacity-80 transition-opacity shrink-0" href="index.html">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
          Mad Soaps
        </a>

<div className="hidden lg:flex items-center gap-1 h-full">
<a className="text-sm font-medium text-white hover:text-white transition-colors px-4 py-2" href="index.html">Home</a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 pt-2 pr-4 pb-2 pl-4" href="/boat-services">Boats</a>
<a className="hover:text-white transition-colors text-sm font-medium text-zinc-400 pt-2 pr-4 pb-2 pl-4" href="car-detailing-packages">Cars</a>

<div className="relative group h-full flex items-center">
<button className="flex group-hover:text-white transition-colors outline-none text-sm font-medium text-zinc-400 pt-2 pr-4 pb-2 pl-4 gap-x-1.5 gap-y-1.5 items-center">
                    Plans
                    <iconify-icon className="transition-transform duration-200 group-hover:rotate-180 text-zinc-500 group-hover:text-white" icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>

<div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-48 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 nav-dropdown">
<div className="bg-[#0A0A0C] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden backdrop-blur-xl p-1.5">
<a className="flex items-center gap-2 px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group/item" href="marine-plans">
<iconify-icon className="text-zinc-500 group-hover/item:text-blue-400 transition-colors" icon="solar:anchor-linear" width="16"></iconify-icon>
<span>Marine Plans</span>
</a>
<a className="flex items-center gap-2 px-3 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all group/item" href="auto-plans">
<iconify-icon className="text-zinc-500 group-hover/item:text-indigo-400 transition-colors" icon="solar:wheel-angle-linear" width="16"></iconify-icon>
<span>Auto Plans</span>
</a>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="tel:8336237627">
<iconify-icon className="text-zinc-400" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="hidden xl:inline">(833) 623-7627</span>
</a>
<button className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="mobile-menu closed absolute top-16 left-0 w-full bg-[#050507] border-b border-white/10 shadow-2xl overflow-hidden z-[99]" id="mobile-menu">
<div className="p-4 flex flex-col gap-2">
<a className="block px-4 py-3 rounded-xl bg-white/5 text-white text-sm font-medium transition-colors" href="index.html">Home</a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="boat-detailing-packages">Boats</a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/5 text-zinc-400 hover:text-white text-sm font-medium transition-colors" href="car-detailing-packages">Cars</a>

<div className="px-4 py-3 rounded-xl border border-white/5 bg-white/[0.02]">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">Plans</span>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white text-sm font-medium transition-colors" href="marine-plans">
<iconify-icon icon="solar:anchor-linear" width="16"></iconify-icon>
                          Marine Plans
                      </a>
<a className="flex items-center gap-2 py-2 text-zinc-300 hover:text-white text-sm font-medium transition-colors" href="auto-plans">
<iconify-icon icon="solar:wheel-angle-linear" width="16"></iconify-icon>
                          Auto Plans
                      </a>
</div>
</div>
</div>
</div>
</nav>
<main className="flex-grow overflow-hidden relative flex flex-col justify-center min-h-[calc(100vh-64px)] pb-12">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<section className="py-12 px-6 relative">
<div className="max-w-5xl mx-auto">

<div className="text-center space-y-6 mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-400 text-xs font-medium uppercase tracking-wider">
                        Premium Mobile Service
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                        What would you like <br className="hidden md:block"/>
<span className="text-blue-500">detailed today?</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light">
                        Select your vehicle type below to view specific packages and get a price.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">

<a className="glass-panel glass-card-hover group relative rounded-3xl p-8 md:p-12 flex flex-col items-center text-center cursor-pointer" href="boat-detailing-packages">
<div className="group-hover:opacity-100 transition-opacity cursor-pointer bg-blue-500/5 opacity-0 rounded-3xl absolute top-0 right-0 bottom-0 left-0" role="button"></div>
<div className="flex group-hover:scale-110 transition-transform duration-300 text-white bg-[#050507] w-20 h-20 z-10 border-white/10 border rounded-2xl mb-8 relative shadow-xl items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:anchor-linear" width="40"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight relative z-10">Marine</h2>
<p className="text-zinc-400 text-sm md:text-base mb-8 relative z-10 font-light">
                            Boat washing, waxing, and detailing at your dock or marina.
                        </p>
<div className="mt-auto relative z-10 w-full">
<span className="flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors text-sm font-semibold text-white bg-white/5 w-full h-12 border-white/10 border rounded-full">
                                View Boat Services
                            </span>
</div>
</a>

<a className="glass-panel glass-card-hover group relative rounded-3xl p-8 md:p-12 flex flex-col items-center text-center cursor-pointer" href="car-detailing-packages">
<div className="group-hover:opacity-100 transition-opacity bg-indigo-500/5 opacity-0 rounded-3xl absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-20 h-20 bg-[#050507] rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-indigo-400" icon="solar:wheel-angle-linear" width="40"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight relative z-10">Automotive</h2>
<p className="text-zinc-400 text-sm md:text-base mb-8 relative z-10 font-light">
                            Car interior and exterior detailing at your home or office.
                        </p>
<div className="mt-auto relative z-10 w-full">
<span className="flex items-center justify-center group-hover:bg-indigo-600 group-hover:border-indigo-600 transition-colors text-sm font-semibold text-white bg-white/5 w-full h-12 border-white/10 border rounded-full">
                                View Car Services
                            </span>
</div>
</a>
</div>

<div className="mt-16 text-center">
<div className="flex justify-center text-yellow-400 gap-1 mb-3">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-sm text-zinc-500">Trusted by over 500+ clients in Annapolis</p>
</div>
</div>
</section>

<div className="max-w-3xl mx-auto px-6 mt-12 w-full" id="contact">
<div className="border-t border-white/5 pt-12">
<div className="text-center mb-8">
<h3 className="text-xl font-medium text-white">General Inquiries</h3>
<p className="text-zinc-500 text-sm mt-1">Not sure what you need? Fill this out.</p>
</div>
<div className="glass-panel overflow-hidden rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
<fieldd-lead-form className="" code="vwsXon"></fieldd-lead-form>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 bg-[#050507]">
<div className="max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
<div className="md:col-span-1 space-y-4">
<a className="text-lg font-semibold tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
                        Mad Soaps
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                        Specialized mobile detailing for Annapolis.
                    </p>
</div>
<div className="flex flex-col gap-3 gap-x-3 gap-y-3">
<h4 className="text-sm font-medium text-white">Services</h4>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="boat-detailing-packages">Boat Cleaning</a>
<a className="hover:text-white transition-colors text-xs text-zinc-400" href="car-detailing-packages">Car Cleaning</a><a className="hover:text-white transition-colors text-xs text-zinc-400" href="car-detailing-packages">Boat Plans</a><a className="hover:text-white transition-colors text-xs text-zinc-400" href="car-detailing-packages">Car Plans</a>
</div>
<div className="flex flex-col gap-3 gap-x-3 gap-y-3">
<h4 className="text-sm font-medium text-white">Areas</h4>
<span className="text-xs text-zinc-500">Annapolis</span>
<span className="text-xs text-zinc-500">Eastport</span>
<span className="text-xs text-zinc-500">South River</span>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white">Contact</h4>
<a className="text-xs text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="tel:8336237627">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        (833) 623-7627
                    </a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-500 text-xs font-light">© 2024 Mad Soaps. All rights reserved.</div>
<div className="flex gap-6 text-xs text-zinc-500 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
