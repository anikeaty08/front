import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Carousel Logic
        const container = document.getElementById('tours-carousel');
        const leftBtn = document.getElementById('scroll-left');
        const rightBtn = document.getElementById('scroll-right');

        if (container && leftBtn && rightBtn) {
            rightBtn.addEventListener('click', () => {
                const scrollAmount = container.clientWidth / 2;
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            leftBtn.addEventListener('click', () => {
                const scrollAmount = container.clientWidth / 2;
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2" href="#">
                QuokkaGuide
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Tours</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Become a Creator</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
                    Login
                </a>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#">
                    Register
                </a>

<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>
<main className="pt-16">

<section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-start">

<img alt="Sydney Harbour" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                        Explore Australia at your own pace
                    </h1>
<p className="text-lg md:text-xl text-slate-100 mb-8 font-normal leading-relaxed max-w-lg shadow-sm">
                        Self-guided driving tours with audio, maps, and local stories — no schedule.
                    </p>
<button className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-0.5">
                        Start a tour
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="relative -mt-10 z-30 px-6">
<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Find a tour for your trip</h2>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" data-lucide="search"></i>
</div>
<input className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:bg-white focus:border-blue-600 transition-all text-base" placeholder="Search by city or tour name" type="text"/>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Popular destinations to explore</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-900/5" href="#">
<img alt="Sydney" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="text-white text-lg font-semibold tracking-tight">Sydney</h3>
</div>
</a>

<a className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-900/5" href="#">
<img alt="Melbourne" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="text-white text-lg font-semibold tracking-tight">Melbourne</h3>
</div>
</a>

<a className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-900/5" href="#">
<img alt="Gold Coast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="text-white text-lg font-semibold tracking-tight">Gold Coast</h3>
</div>
</a>

<a className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden shadow-sm ring-1 ring-slate-900/5" href="#">
<img alt="Hobart" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<h3 className="text-white text-lg font-semibold tracking-tight">Hobart</h3>
</div>
</a>
</div>
</section>

<section className="py-12 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">

<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Featured tours</h2>
<p className="text-slate-500 mt-2 text-sm">Top rated driving experiences around Australia</p>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors mr-2" href="#">
                            View all tours
                        </a>
<div className="flex gap-2">
<button aria-label="Scroll left" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-slate-300 transition-all" id="scroll-left">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button aria-label="Scroll right" className="w-9 h-9 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-blue-600 hover:border-slate-300 transition-all" id="scroll-right">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar -mx-6 px-6" id="tours-carousel">

<div className="min-w-[320px] max-w-[320px] snap-start flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 group h-full">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Great Ocean Road" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 truncate">The Great Ocean Road</h3>
<p className="text-sm text-slate-500 line-clamp-3 mb-5 leading-relaxed">
                                Experience one of the world's most scenic coastal drives. See the Twelve Apostles, native wildlife, and lush rainforests along the way.
                            </p>

<div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="car-front"></i>
                                    Driving
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                    5h 00m
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                    243km
                                </div>
</div>
<div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">From $22</span>
</div>
<button className="w-full mt-4 bg-slate-50 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center">
                                View tour
                            </button>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] snap-start flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 group h-full">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Sydney Coast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 truncate">Sydney to Jervis Bay</h3>
<p className="text-sm text-slate-500 line-clamp-3 mb-5 leading-relaxed">
                                Drive past stunning white sand beaches and coastal villages. Perfect for dolphin watching and relaxing seaside vibes south of Sydney.
                            </p>

<div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="car-front"></i>
                                    Driving
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                    3h 30m
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                    180km
                                </div>
</div>
<div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">From $19</span>
</div>
<button className="w-full mt-4 bg-slate-50 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center">
                                View tour
                            </button>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] snap-start flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 group h-full">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Blue Mountains" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 truncate">Blue Mountains Loop</h3>
<p className="text-sm text-slate-500 line-clamp-3 mb-5 leading-relaxed">
                                Discover dramatic scenery, deep eucalyptus forests, and majestic waterfalls just a short drive from the city center.
                            </p>

<div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="car-front"></i>
                                    Driving
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                    4h 15m
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                    90km
                                </div>
</div>
<div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">From $20</span>
</div>
<button className="w-full mt-4 bg-slate-50 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center">
                                View tour
                            </button>
</div>
</div>

<div className="min-w-[320px] max-w-[320px] snap-start flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow duration-300 group h-full">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Uluru" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2 truncate">Red Centre Way</h3>
<p className="text-sm text-slate-500 line-clamp-3 mb-5 leading-relaxed">
                                An iconic outback journey through the heart of Australia. See Uluru, Kata Tjuta, and Kings Canyon on this legendary route.
                            </p>

<div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="car-front"></i>
                                    Driving
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                                    6h 00m
                                </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<i className="w-4 h-4 text-slate-400" data-lucide="map-pin"></i>
                                    320km
                                </div>
</div>
<div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">From $25</span>
</div>
<button className="w-full mt-4 bg-slate-50 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-medium py-2.5 px-4 rounded-xl transition-colors text-sm flex items-center justify-center">
                                View tour
                            </button>
</div>
</div>

<div className="min-w-[20px] snap-start"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">How it works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:border-blue-200 transition-colors">
<i className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" data-lucide="map"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Choose a driving tour</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-xs">Pick a route that fits your trip. Download it instantly to your phone.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:border-blue-200 transition-colors">
<i className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" data-lucide="navigation"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Follow the route</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-xs">Get GPS-guided stops along the way. Pause whenever you like.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 border border-slate-100 group-hover:border-blue-200 transition-colors">
<i className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors" data-lucide="headphones"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Listen &amp; explore</h3>
<p className="text-slate-500 text-base leading-relaxed max-w-xs">Stories and history play automatically as you drive through locations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Explore better with the QuokkaGuide app</h2>
<p className="text-lg text-slate-600 mb-8 font-normal">Built for driving tours — even offline.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-700">
<i className="w-5 h-5 text-blue-600" data-lucide="check"></i>
<span className="font-medium">GPS-based audio guidance</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<i className="w-5 h-5 text-blue-600" data-lucide="check"></i>
<span className="font-medium">Offline maps &amp; content</span>
</li>
<li className="flex items-center gap-3 text-slate-700">
<i className="w-5 h-5 text-blue-600" data-lucide="check"></i>
<span className="font-medium">Easy to follow while driving</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors shadow-sm w-full sm:w-auto">
<i className="w-5 h-5 fill-current" data-lucide="apple"></i>
<span className="text-sm font-medium">App Store</span>
</button>
<button className="flex items-center justify-center gap-3 px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm w-full sm:w-auto">
<i className="w-5 h-5 fill-current" data-lucide="play"></i>
<span className="text-sm font-medium">Google Play</span>
</button>
</div>
</div>

<div className="lg:w-1/3 flex justify-center">
<div className="relative w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">

<div className="w-full h-full bg-white relative">

<div className="h-14 bg-slate-50 border-b border-slate-100 flex items-center justify-center">
<span className="text-xs font-semibold text-slate-900">Route Map</span>
</div>

<div className="w-full h-full bg-slate-200 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white rounded-full flex items-center justify-center bg-blue-500/20">
<div className="w-4 h-4 bg-blue-600 rounded-full shadow-lg border-2 border-white"></div>
</div>

<div className="absolute bottom-6 left-4 right-4 bg-white p-4 rounded-xl shadow-lg">
<div className="h-2 w-16 bg-slate-100 rounded mb-2"></div>
<div className="h-4 w-3/4 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">

<div className="p-12 md:p-16 md:w-1/2 z-10 flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
                            Share your city. <br/>Create your own tour.
                        </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Turn your local knowledge into driving tours for travelers.
                        </p>
<ul className="space-y-3 mb-10">
<li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Create at your own pace
                            </li>
<li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Reach global travelers
                            </li>
<li className="flex items-center gap-3 text-slate-300 text-sm font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                Earn from your content
                            </li>
</ul>
<div>
<button className="px-6 py-3 text-sm font-medium text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors shadow-lg">
                                Become a Creator
                            </button>
</div>
</div>

<div className="md:w-1/2 h-64 md:h-auto relative">
<img alt="Planning a trip" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay md:mix-blend-normal md:opacity-100" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-4">
<span className="text-lg font-semibold tracking-tight text-slate-900">QuokkaGuide</span>
<p className="text-sm text-slate-500 max-w-xs">
                    Self-guided driving tours for the modern traveler. Explore the world at your own pace.
                </p>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-4">
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Help</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Become a Creator</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacy</a>
<a className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors" href="#">Terms</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-50 text-center md:text-left">
<p className="text-xs text-slate-400">© 2024 QuokkaGuide. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
