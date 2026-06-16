import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Toggle interaction for visual effect
        const toggle = document.querySelector('.toggle-checkbox');
        const dot = document.querySelector('.dot');
        toggle.addEventListener('change', function() {
            if(this.checked) {
                dot.style.transform = 'translateX(100%)';
            } else {
                dot.style.transform = 'translateX(0)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{}}>
<div className="flex justify-between items-center h-16" style={{}}>

<div className="flex items-center gap-8" style={{}}>
<a className="text-xl font-semibold tracking-tighter text-gray-900 flex items-center gap-1 font-quicksand" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-900" data-icon="lucide:layers" data-width="24" height="24" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
                        COASTAQ
                    </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors font-quicksand" href="#marketplace">Marketplace</a>
<a className="hover:text-gray-900 transition-colors font-quicksand" href="#pricing">Seller Plans</a>
<a className="hover:text-gray-900 transition-colors font-quicksand" href="#">Safety Tips</a>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-400" data-icon="lucide:search" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm transition-all" placeholder="Search cars, property, jobs..." type="text"/>
</div>

<div className="flex items-center gap-4" style={{}}>
<button className="relative p-2 text-gray-400 hover:text-gray-600 transition">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full ring-2 ring-white bg-purple-500"></span>
</button>
<button className="relative p-2 text-gray-400 hover:text-gray-600 transition" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bell" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="h-6 w-px bg-gray-200 mx-1"></div>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-gray-600 font-quicksand" href="#">
                        Log in
                    </a>
<a className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm font-quicksand" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Sell Item
                    </a>
</div>
</div>
</div>
</nav>

<div className="md:hidden border-b border-gray-100 p-4 bg-white" style={{}}>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-400" data-icon="lucide:search" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-900 sm:text-sm" placeholder="Search..." type="text"/>
</div>
</div>

<section className="sm:pt-24 sm:pb-20 pt-16 pb-12" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{}}>
<h1 className="sm:text-5xl text-4xl text-gray-900 tracking-tight mb-6 font-quicksand font-medium" style={{}}>
                Buy and Sell,<br className="hidden sm:block" style={{}}/> simplified for everyone.
            </h1>
<p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 tracking-tight leading-relaxed font-quicksand" style={{}}>
                Buy, sell, and trade electronics, vehicles, fashion, and real estate securely. 
                Connect directly with verified local sellers and manage your business.
            </p>

<div className="flex flex-wrap justify-center gap-3 animate-fade-in-up">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-400" data-icon="lucide:car" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
                    Vehicles
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-400" data-icon="lucide:home" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
                    Real Estate
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-400" data-icon="lucide:smartphone" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
                    Electronics
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-400" data-icon="lucide:shirt" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Fashion
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-400" data-icon="lucide:briefcase" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
                    Services
                </button>
</div>
</div>
</section>

<section className="py-12 bg-white border-t border-gray-100" id="marketplace">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="text-2xl tracking-tight text-gray-900 font-quicksand font-medium" style={{}}>Fresh Recommendations</h2>
<p className="text-gray-500 text-sm mt-1 font-quicksand">Based on your location and recent views.</p>
</div>
<a className="text-sm font-medium text-gray-900 hover:text-gray-600 flex items-center gap-1 font-quicksand" href="#">
                    View all <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-purple-500 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="absolute bottom-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded font-quicksand">Used</span>
</div>
<div className="p-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-gray-900 truncate pr-4 font-quicksand">Ford Mustang GT 2018</h3>
<p className="text-xs text-gray-500 mt-1 font-quicksand">San Francisco, CA</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-lg font-semibold text-gray-900 font-quicksand">$28,500</span>
<span className="text-xs text-gray-400 font-quicksand">2h ago</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Laptop" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-purple-500 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="absolute bottom-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded font-quicksand">New</span>
</div>
<div className="p-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-gray-900 truncate pr-4 font-quicksand">MacBook Pro M2 Max</h3>
<p className="text-xs text-gray-500 mt-1 font-quicksand">Austin, TX</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-lg font-semibold text-gray-900 font-quicksand">$2,100</span>
<span className="text-xs text-gray-400 font-quicksand">5m ago</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="House" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-purple-500 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="absolute bottom-3 left-3 bg-pink-600/90 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded font-quicksand">Featured</span>
</div>
<div className="p-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-gray-900 truncate pr-4 font-quicksand">Modern Loft Downtown</h3>
<p className="text-xs text-gray-500 mt-1 font-quicksand">New York, NY</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-lg font-semibold text-gray-900 font-quicksand">$4,500<span className="text-sm font-normal text-gray-500 font-quicksand">/mo</span></span>
<span className="text-xs text-gray-400 font-quicksand">1d ago</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Shoes" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-purple-500 transition-colors shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="p-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-gray-900 truncate pr-4 font-quicksand">Nike Air Max Limited</h3>
<p className="text-xs text-gray-500 mt-1 font-quicksand">Los Angeles, CA</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<span className="text-lg font-semibold text-gray-900 font-quicksand">$120</span>
<span className="text-xs text-gray-400 font-quicksand">Just now</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="mb-10 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200/50 border border-gray-200 text-xs font-medium text-gray-600 mb-6 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Seller Tools
                    </div>
<h2 className="text-3xl tracking-tight text-gray-900 mb-4 font-quicksand font-medium" style={{}}>Manage customers with ease.</h2>
<p className="text-gray-500 mb-8 text-lg leading-relaxed font-quicksand">
                        Our integrated messaging platform connects you directly with buyers. Negotiate prices, share locations securely, and track your sales all in one dashboard.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 bg-blue-100 p-1 rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-700" data-icon="lucide:check" data-width="12" height="12" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-gray-600 text-sm font-quicksand">Real-time instant messaging with buyers.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-blue-100 p-1 rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-700" data-icon="lucide:check" data-width="12" height="12" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-gray-600 text-sm font-quicksand">Integrated payment requests via Stripe &amp; PayPal.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-blue-100 p-1 rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide text-blue-700" data-icon="lucide:check" data-width="12" height="12" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-gray-600 text-sm font-quicksand">Automated safety tips in chat.</span>
</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-400 transition-all font-quicksand" href="#">
                        Learn more about selling
                    </a>
</div>

<div className="relative bg-white border border-gray-200 rounded-xl shadow-xl p-6 rotate-1 hover:rotate-0 transition-transform duration-500">

<div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium font-quicksand">JD</div>
<div>
<div className="text-sm font-medium text-gray-900 font-quicksand">John Doe</div>
<div className="text-xs text-gray-400 font-quicksand">Interested in 'Sony Camera'</div>
</div>
</div>
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-300" data-icon="lucide:more-horizontal" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</div>

<div className="space-y-4">
<div className="flex justify-end">
<div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-2xl rounded-tr-sm max-w-xs font-quicksand">
                                Hi John! Yes, the camera is still available.
                            </div>
</div>
<div className="flex justify-start">
<div className="bg-gray-100 text-gray-900 text-sm py-2 px-4 rounded-2xl rounded-tl-sm max-w-xs border border-gray-200 font-quicksand">
                                Great. Is the price negotiable? I can offer $450 via PayPal.
                            </div>
</div>
<div className="flex justify-end">
<div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-2xl rounded-tr-sm max-w-xs font-quicksand">
                                That works. I'll send the payment link now.
                            </div>
</div>

<div className="flex justify-center my-4">
<div className="bg-pink-50 text-pink-700 text-xs py-1 px-3 rounded-full flex items-center gap-1 border border-pink-100 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="12" height="12" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                                System: Payment request generated securely via Stripe.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight text-gray-900 font-quicksand font-medium" style={{}}>Seller Plans</h2>
<p className="mt-4 text-gray-500 text-lg font-quicksand">Choose the right tier to grow your business.</p>

<div className="mt-8 flex justify-center items-center gap-3">
<span className="text-sm font-medium text-gray-900 font-quicksand">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer" htmlFor="billing-toggle">
<input className="sr-only toggle-checkbox" id="billing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-label transition-colors duration-200 ease-in-out"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out shadow-sm transform translate-x-0"></div>
</label>
<span className="text-sm font-medium text-gray-500 font-quicksand">Annually <span className="text-blue-600 text-xs font-medium ml-1 font-quicksand">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-gray-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-gray-900 font-quicksand">Bronze</h3>
<p className="text-sm text-gray-500 mt-2 font-quicksand">Perfect for casual sellers.</p>
</div>
<div className="mb-6">
<span className="text-4xl tracking-tight text-gray-900 font-quicksand font-medium" style={{}}>$30</span>
<span className="text-gray-500 font-quicksand">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-900" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Up to 20 listings active
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-900" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Basic seller dashboard
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-900" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Standard support
                        </li>
</ul>
<button className="w-full py-2.5 bg-white border border-gray-200 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all font-quicksand">
                        Get Started
                    </button>
</div>

<div className="relative border border-gray-900 bg-gray-900 rounded-2xl p-8 flex flex-col shadow-xl scale-105 z-10">
<div className="absolute top-0 right-0 -mt-3 -mr-3 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full border border-gray-200 shadow-sm font-quicksand">
                        Popular
                    </div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white font-quicksand">Silver</h3>
<p className="text-sm text-gray-400 mt-2 font-quicksand">For growing small businesses.</p>
</div>
<div className="mb-6">
<span className="text-4xl tracking-tight text-white font-quicksand font-medium" style={{}}>$50</span>
<span className="text-gray-400 font-quicksand">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-300 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-white" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Unlimited listings
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-white" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Verified Seller Badge
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-white" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            5 Featured posts / month
                        </li>
</ul>
<button className="w-full py-2.5 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all font-quicksand">
                        Upgrade to Silver
                    </button>
</div>

<div className="border border-gray-200 rounded-2xl p-8 flex flex-col hover:border-gray-300 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-gray-900 font-quicksand">Gold</h3>
<p className="text-sm text-gray-500 mt-2 font-quicksand">Power sellers &amp; agencies.</p>
</div>
<div className="mb-6">
<span className="text-4xl tracking-tight text-gray-900 font-quicksand font-medium" style={{}}>$80</span>
<span className="text-gray-500 font-quicksand">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-900" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Everything in Silver
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-900" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Unlimited Featured posts
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide text-gray-900" data-icon="lucide:check" data-width="16" height="16" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Advanced Analytics
                        </li>
</ul>
<button className="w-full py-2.5 bg-white border border-gray-200 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all font-quicksand">
                        Contact Sales
                    </button>
</div>
</div>

<div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-400">
<span className="text-xs font-medium uppercase tracking-wider font-quicksand">Secured Payments by</span>
<div className="flex items-center gap-6">

<div className="flex items-center gap-1 font-semibold text-gray-500 tracking-tight font-quicksand">
                        stripe
                    </div>

<div className="flex items-center gap-1 font-semibold text-gray-500 tracking-tight italic font-quicksand">
                        PayPal
                    </div>

<div className="flex items-center gap-1 text-xs font-medium text-gray-500 font-quicksand">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:landmark" data-width="14" height="14" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Wire Transfer
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-gray-900 flex items-center gap-1 mb-4 font-quicksand" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" preserveaspectratio="xMidYMid meet" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
                        COASTAQ
                    </a>
<p className="text-sm text-gray-500 font-quicksand">
                        The trusted global marketplace for local trade. Simple, secure, and convenient.
                    </p>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm font-quicksand">Marketplace</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-gray-900 font-quicksand" href="#">Electronics</a></li>
<li><a className="hover:text-gray-900 font-quicksand" href="#">Real Estate</a></li>
<li><a className="hover:text-gray-900 font-quicksand" href="#">Vehicles</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm font-quicksand">Support</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-gray-900 font-quicksand" href="#">Help Center</a></li>
<li><a className="hover:text-gray-900 font-quicksand" href="#">Safety Tips</a></li>
<li><a className="hover:text-gray-900 font-quicksand" href="#">Selling Rules</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-gray-900 mb-4 text-sm font-quicksand">Legal</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-gray-900 font-quicksand" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900 font-quicksand" href="#">Terms of Service</a></li>
<li><a className="hover:text-gray-900 font-quicksand" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400 font-quicksand">© 2023 Coastaq Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-600" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-gray-400 hover:text-gray-600" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-gray-400 hover:text-gray-600" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" preserveaspectratio="xMidYMid meet" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
