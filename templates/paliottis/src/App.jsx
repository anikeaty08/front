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
wine: {
50: '#fdf3f3',
100: '#fbe8e8',
800: '#5e1919',
900: '#3f1010',
},
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
800: '#292524',
900: '#1c1917',
},
olive: {
700: '#3f4d26',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
}
}
}
}



        lucide.createIcons();

        const locations = {
            abbotsford: {
                title: "Abbotsford",
                image: "https://paliottisitalianrestaurants.ca/wp-content/uploads/2017/08/Paliottis-Abbotsford-01.jpg",
                desc: "Located in Cedar Park, our Abbotsford home offers a cozy, intimate atmosphere. Owned and operated with a unique touch, this location features exclusive menu items like the 'Godfather' steak. It's a place where the lights are low, the wine pours freely, and the brother's personal style shines through.",
                address: "2580 Cedar Park Place, Abbotsford"
            },
            maple: {
                title: "Maple Ridge",
                image: "https://paliottisitalianrestaurants.ca/wp-content/uploads/2022/11/IMG_2146-e1605290991723-1024x387-1.jpeg",
                desc: "The Original. This is where the Paliotti legacy planted its roots. Located on 227th Street, the Maple Ridge location embodies the classic family gatherings Dino and Maria envisioned. It’s the heart of the operation, known for consistent, comforting classics and a bustling family vibe.",
                address: "11980 227 Street, Maple Ridge"
            }
        };

        const contentDiv = document.getElementById('location-content');
        const btnAbby = document.getElementById('btn-abby');
        const btnMaple = document.getElementById('btn-maple');

        function renderLocation(key) {
            const data = locations[key];
            contentDiv.innerHTML = `
                <div class="h-[400px] rounded-lg overflow-hidden relative shadow-2xl shadow-black/20 group border border-stone-800">
                    <img src="${data.image}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" alt="${key}">
                    <div class="absolute inset-0 bg-stone-900/10"></div>
                </div>
                <div class="space-y-6">
                    <div class="flex items-center gap-3">
                        <h3 class="font-serif text-3xl tracking-tight text-stone-100 capitalize">${data.title}</h3>
                        ${key === 'maple' ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-wine-900 text-white">Original</span>' : ''}
                    </div>
                    <p class="text-stone-400 font-light leading-relaxed text-lg">
                        ${data.desc}
                    </p>
                    <div class="flex flex-col gap-4 text-sm text-stone-300 pt-4 border-t border-stone-800">
                        <div class="flex items-center gap-3">
                            <i data-lucide="map-pin" class="w-4 h-4 text-wine-800"></i>
                            <span>${data.address}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <i data-lucide="clock" class="w-4 h-4 text-wine-800"></i>
                            <span>Open today: 4:00 PM - 10:00 PM</span>
                        </div>
                    </div>
                     <button class="mt-6 border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 px-6 py-2 rounded-md text-sm transition-all w-max font-medium">
                        Get Directions
                    </button>
                </div>
            `;
            lucide.createIcons();
            
            // Animation reset
            contentDiv.classList.remove('fade-enter-active');
            contentDiv.classList.add('fade-enter');
            setTimeout(() => {
                contentDiv.classList.add('fade-enter-active');
                contentDiv.classList.remove('fade-enter');
            }, 50);
        }

        function switchLocation(loc) {
            if(loc === 'abbotsford') {
                btnAbby.classList.add('bg-stone-100', 'text-stone-900', 'shadow-sm');
                btnAbby.classList.remove('text-stone-400');
                
                btnMaple.classList.remove('bg-stone-100', 'text-stone-900', 'shadow-sm');
                btnMaple.classList.add('text-stone-400');
            } else {
                btnMaple.classList.add('bg-stone-100', 'text-stone-900', 'shadow-sm');
                btnMaple.classList.remove('text-stone-400');
                
                btnAbby.classList.remove('bg-stone-100', 'text-stone-900', 'shadow-sm');
                btnAbby.classList.add('text-stone-400');
            }
            renderLocation(loc);
        }

        // Initialize with Maple Ridge (The Original)
        switchLocation('maple');
    
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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-grain mix-blend-multiply"></div>

<header className="fixed top-0 w-full z-40 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60 transition-all duration-300">
<div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-serif text-xl tracking-tight text-wine-900 flex items-center gap-2" href="#">
                PALIOTTI’S
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-stone-600 font-medium">
<a className="hover:text-wine-900 transition-colors" href="#story">Legacy</a>
<a className="hover:text-wine-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-wine-900 transition-colors" href="#journal">Journal</a>
<a className="hover:text-wine-900 transition-colors" href="#locations">Locations</a>
<a className="flex items-center gap-2 hover:text-wine-900 transition-colors" href="https://www.doordash.com/store/paliotti's-italian-restaurant-abbotsford-209461/18488157/?srsltid=AfmBOooOaVkZKNJZcg8zPQqCbQmv8lRw5V8E8tuq8O_e-NdrmhzuP_Gd" target="_blank">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Order Pickup
                </a>
</nav>
<a className="bg-wine-900 text-stone-50 text-xs font-medium tracking-wide px-5 py-2.5 rounded-md hover:bg-wine-800 transition-colors duration-300 shadow-sm" href="#reservations">
                Book a Table
            </a>
</div>
</header>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8 pr-0 md:pr-12 order-2 md:order-1">
<div className="inline-flex items-center gap-2 text-olive-700 text-xs font-medium tracking-widest uppercase border border-olive-700/20 px-3 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-olive-700"></span>
                    Est. Maple Ridge
                </div>
<h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight text-stone-900">
                    Generations of <br/><i className="text-wine-900">good taste.</i>
</h1>
<p className="text-lg text-stone-600 font-light leading-relaxed max-w-md">
                    From Dino and Maria’s first kitchen to the brothers’ tables today. Authentic Italian, distinct to each location, unified by the family name.
                </p>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10" href="#locations">
                        Find Your Location
                    </a>
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-stone-600 border border-stone-200 hover:border-wine-900 hover:text-wine-900 transition-all bg-white" href="#menu">
                        View Menu
                    </a>
</div>
</div>
<div className="relative h-[550px] w-full rounded-xl overflow-hidden shadow-2xl shadow-stone-900/10 order-1 md:order-2 group">
<img alt="Italian Pasta Close Up" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" src="https://images.unsplash.com/photo-1626844131082-256783844137?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100 scroll-mt-16" id="story">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative">
<div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl shadow-stone-200 relative group">
<img alt="Paliotti Family" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://paliottisitalianrestaurants.ca/wp-content/uploads/2017/08/family.jpg"/>
<div className="absolute inset-0 bg-wine-900/10 mix-blend-multiply"></div>
</div>
<div className="absolute -bottom-6 -right-6 bg-stone-50 p-6 rounded-lg shadow-lg max-w-xs border border-stone-100 hidden md:block">
<p className="font-serif text-xl italic text-wine-900 leading-tight">"Eat. Drink. Enjoy. That's the only rule."</p>
<p className="text-xs text-stone-500 mt-2 font-medium uppercase tracking-wider">— Dino &amp; Maria Paliotti</p>
</div>
</div>

<div className="space-y-8">
<div className="">
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase block mb-3">Our History</span>
<h2 className="font-serif text-4xl tracking-tight text-stone-900 mb-6">A tale of two brothers.</h2>
<div className="space-y-4 text-stone-600 font-light leading-relaxed">
<p className="">
                                The Paliotti legacy began with Dino and Maria, who brought their passion for authentic Italian hospitality to the community. What started as a single dream in Maple Ridge has evolved into a family tradition carried forward by their sons.
                            </p>
<p className="">
                                Today, the brothers run the show, each bringing their own flair to the family name. The  location stands as the original foundation, while the  location expands on that heritage with its own unique menu twists.
                            </p>
</div>
</div>

<div className="bg-stone-50 border border-stone-200 rounded-lg p-6 space-y-4">
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-sprout w-4 h-4 text-olive-700" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
<h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">The Valley Connection</h3>
</div>
<p className="text-sm text-stone-600 leading-relaxed">
                            While the Chilliwack location has changed hands, the passion remains. Michael Paliotti continues to serve the valley through , offering chef-prepared meals delivered straight to your door.
                        </p>
<p className="leading-relaxed text-sm text-stone-600 border-stone-200 border-t mt-3 pt-3"><span className="text-wine-900 font-medium">Coming Soon:</span> Keep an eye out for , an immersive cooking class experience currently in production by Michael Paliotti.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50 scroll-mt-16" id="menu">
<div className="max-w-screen-xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase block mb-3">The Menu</span>
<h2 className="font-serif text-4xl tracking-tight text-stone-900">Highlights from the kitchen.</h2>
<p className="text-stone-500 mt-2 text-sm font-light">Menus vary slightly by location. These are the legends.</p>
</div>
<div className="flex gap-4">
<a className="text-xs font-medium bg-white px-4 py-2 rounded border border-stone-200 hover:border-wine-900 transition-colors" href="https://paliottisitalianrestaurants.ca/wp-content/uploads/2023/01/Paliottis-Abbotsford-Menu-Jan-2023.pdf" target="_blank">
                        Abbotsford PDF
                    </a>
<a className="text-xs font-medium bg-white px-4 py-2 rounded border border-stone-200 hover:border-wine-900 transition-colors" href="https://paliottisitalianrestaurants.ca/wp-content/uploads/2023/03/Menu-2-8.pdf" target="_blank">
                        Maple Ridge PDF
                    </a>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-star w-4 h-4 text-wine-900 fill-wine-900" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<h3 className="font-serif text-xl text-stone-900">House Signatures</h3>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Tortellini Gigi</h4>
<span className="text-stone-400 text-xs">$23</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                Cheese-filled tortellini tossed with prosciutto, peas, and fresh mushrooms in our signature rosé sauce.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">The Godfather</h4>
<span className="text-stone-400 text-xs">$36</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                7oz Sirloin steak topped with scallops and prawns, finished in a rich Sambuca cream sauce. Served with seasonal vegetables.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Jambalaya</h4>
<span className="text-stone-400 text-xs">$25</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                A Paliotti twist. Spicy Italian sausage, chicken, prawns, peppers, onions, and mushrooms in a spicy marinara over linguine.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-utensils w-4 h-4 text-stone-400" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<h3 className="font-serif text-xl text-stone-900">Italian Classics</h3>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Chicken Parmigiana</h4>
<span className="text-stone-400 text-xs">$26</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                Hand-breaded chicken breast topped with marinara and melted mozzarella. Served with a side of fettuccine alfredo.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Nonna’s Lasagna</h4>
<span className="text-stone-400 text-xs">$22</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                Baked with layers of our homemade meat sauce, ricotta, and mozzarella cheese.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Seafood Linguine</h4>
<span className="text-stone-400 text-xs">$27</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                Prawns, scallops, baby shrimp, and clams tossed in your choice of marinara or cream sauce.
                            </p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-flame w-4 h-4 text-stone-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<h3 className="font-serif text-xl text-stone-900">From the Grill</h3>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Ribeye Steak</h4>
<span className="text-stone-400 text-xs">$42</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                10oz Ribeye, seasoned and grilled to perfection. Served with roasted potatoes and vegetables.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Rack of Lamb</h4>
<span className="text-stone-400 text-xs">$44</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                Dijon crusted rack of lamb, oven-roasted and served with a mint demi-glace.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-medium text-stone-900 text-sm">Chicken Neptune</h4>
<span className="text-stone-400 text-xs">$29</span>
</div>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                                Chicken breast topped with crab meat, shrimp, asparagus and hollandaise sauce.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-wine-900 text-stone-50 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<span className="inline-block py-1 px-3 border border-wine-100/30 rounded-full text-[10px] tracking-widest uppercase mb-6 bg-wine-800/50 backdrop-blur-sm">VIP Access</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-wine-50">Join the Famiglia List</h2>
<p className="text-wine-100/80 font-light mb-8 text-sm md:text-base">
                Be the first to know about our rotating features, wine tasting events, and exclusive offers for our inner circle.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-wine-800/50 border border-wine-700 text-stone-100 placeholder-wine-300/50 px-4 py-3 rounded text-sm focus:outline-none focus:border-stone-200 transition-colors" placeholder="Your email address" type="email"/>
<button className="bg-stone-50 text-wine-900 px-6 py-3 rounded text-sm font-semibold hover:bg-stone-200 transition-colors" type="submit">
                    Join In
                </button>
</form>
<p className="text-[10px] text-wine-300/50 mt-4">We respect your inbox like we respect our Nonna's recipes.</p>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-stone-100 scroll-mt-16" id="journal">
<div className="max-w-screen-xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div className="">
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase block mb-3">Table Talk</span>
<h2 className="font-serif text-4xl tracking-tight text-stone-900">Life, love &amp; leftovers.</h2>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-wine-900 hover:text-wine-800" href="#">
                    Read all stories <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 mb-6 relative">

<img alt="Tomato Sauce Cooking" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Recipe
                        </div>
</div>
<div className="space-y-3">
<h3 className="font-serif text-xl text-stone-900 group-hover:text-wine-900 transition-colors">Sunday Gravy: A Simple Ragu</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed line-clamp-3">
                            The secret isn't in the fancy ingredients. It's in the simmer. Learn how to make our basic meat sauce at home for your own Sunday gathering.
                        </p>
<span className="inline-block text-xs font-medium text-stone-400 border-b border-transparent group-hover:border-stone-300 transition-all">Read Recipe</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 mb-6 relative">

<img alt="Couple taking selfie at romantic dinner" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://storage.googleapis.com/msgsndr/xPhZY3SP14YyPzTyxTPz/media/692757e696891519898b460c.jpeg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Life
                        </div>
</div>
<div className="space-y-3">
<h3 className="font-serif text-xl text-stone-900 group-hover:text-wine-900 transition-colors">Finding the Right Person</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed line-clamp-3">
                            Relationships are like a good risotto—you can't rush them, and you have to keep stirring. If they don't enjoy watching you eat pasta, they aren't the one.
                        </p>
<span className="inline-block text-xs font-medium text-stone-400 border-b border-transparent group-hover:border-stone-300 transition-all">Read Advice</span>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 mb-6 relative">

<img alt="Fraser Valley Landscape" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                            Legacy
                        </div>
</div>
<div className="space-y-3">
<h3 className="font-serif text-xl text-stone-900 group-hover:text-wine-900 transition-colors">More Stories from the Valley</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed line-clamp-3">
                            From the early days of Dino and Maria to the new ventures in the Fraser Valley. Explore the archive of our family history.
                        </p>
<span className="inline-block text-xs font-medium text-stone-400 border-b border-transparent group-hover:border-stone-300 transition-all">Read Archive</span>
</div>
</article>
</div>
<div className="mt-8 md:hidden text-center">
<a className="inline-flex items-center gap-1 text-sm font-medium text-wine-900 hover:text-wine-800" href="#">
                    Read all stories <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="reviews">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-16">
<svg className="lucide lucide-quote w-8 h-8 text-stone-300 fill-stone-300 mx-auto mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900">From the locals.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-stone-200/50 shadow-sm relative">
<div className="flex gap-1 text-wine-800 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                        "The Tortellini Gigi is honestly life-changing. I've been coming to the Abbotsford location for years and it always feels like coming home. The staff treat you like family immediately."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-500">S</div>
<span className="text-xs font-medium text-stone-900">Sarah J.</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-stone-200/50 shadow-sm relative">
<div className="flex gap-1 text-wine-800 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                        "We celebrated our 25th anniversary at the Maple Ridge location. The ambiance was perfect and the 'Godfather' steak was cooked perfectly. A true gem in the valley."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-500">M</div>
<span className="text-xs font-medium text-stone-900">Michael R.</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-stone-200/50 shadow-sm relative">
<div className="flex gap-1 text-wine-800 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                        "Best Italian food outside of Vancouver, hands down. The portions are generous and the sauce... wow. You can taste the history in the recipes."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-500">D</div>
<span className="text-xs font-medium text-stone-900">David L.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-stone-50" id="locations">
<div className="max-w-screen-xl mx-auto">
<div className="text-center mb-12">
<span className="text-xs font-medium tracking-widest text-stone-400 uppercase mb-4 block">Visit Us</span>
<h2 className="font-serif text-4xl tracking-tight mb-8">Two homes. Same heart.</h2>

<div className="inline-flex bg-stone-800 p-1 rounded-lg border border-stone-700 relative">
<button className="relative z-10 px-8 py-2 rounded text-sm font-medium transition-colors duration-300 text-stone-900 bg-stone-100 shadow-sm" id="btn-maple" onclick="switchLocation('maple')">Maple Ridge (Original)</button>
<button className="relative z-10 px-8 py-2 rounded text-sm font-medium transition-colors duration-300 text-stone-400 hover:text-stone-200" id="btn-abby" onclick="switchLocation('abbotsford')">Abbotsford</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" id="location-content">
<div className="h-[400px] rounded-lg overflow-hidden relative shadow-2xl shadow-black/20 group border border-stone-800">
<img alt="maple" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://paliottisitalianrestaurants.ca/wp-content/uploads/2022/11/IMG_2146-e1605290991723-1024x387-1.jpeg"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3">
<h3 className="font-serif text-3xl tracking-tight text-stone-100 capitalize">Maple Ridge</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-wine-900 text-white">Original</span>
</div>
<p className="text-stone-400 font-light leading-relaxed text-lg">
                        The Original. This is where the Paliotti legacy planted its roots. Located on 227th Street, the Maple Ridge location embodies the classic family gatherings Dino and Maria envisioned. It’s the heart of the operation, known for consistent, comforting classics and a bustling family vibe.
                    </p>
<div className="flex flex-col gap-4 text-sm text-stone-300 pt-4 border-t border-stone-800">
<div className="flex items-center gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 text-wine-800" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>11980 227 Street, Maple Ridge</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-clock w-4 h-4 text-wine-800" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Open today: 4:00 PM - 10:00 PM</span>
</div>
</div>
<button className="mt-6 border border-stone-700 text-stone-300 hover:text-white hover:border-stone-500 px-6 py-2 rounded-md text-sm transition-all w-max font-medium">
                        Get Directions
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-24 pb-12 px-6 border-t border-stone-200" id="reservations">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="space-y-6">
<h2 className="font-serif text-3xl tracking-tight text-stone-900">Save a seat at the table.</h2>
<p className="text-stone-600 font-light max-w-sm">
                    We keep tables open for walk-ins, but for Friday and Saturday nights, we recommend booking ahead.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-wine-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-wine-800 transition-colors text-center shadow-lg shadow-wine-900/20">
                        Make a Reservation
                    </button>
<a className="border border-stone-300 text-stone-600 px-8 py-3 rounded-md text-sm font-medium hover:border-wine-900 hover:text-wine-900 transition-colors text-center flex items-center justify-center gap-2" href="https://www.doordash.com/store/paliotti's-italian-restaurant-abbotsford-209461/18488157/?srsltid=AfmBOooOaVkZKNJZcg8zPQqCbQmv8lRw5V8E8tuq8O_e-NdrmhzuP_Gd" target="_blank">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg> Order Pickup
                    </a>
</div>
<div className="flex gap-4 mt-8">
<a className="text-stone-400 hover:text-wine-900 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-stone-400 hover:text-wine-900 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-stone-400 hover:text-wine-900 transition-colors" href="#"><svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
<div className="grid grid-cols-2 gap-8 text-sm text-stone-600">
<div>
<h4 className="font-medium text-stone-900 mb-4">Abbotsford</h4>
<p>2580 Cedar Park Place</p>
<p>Abbotsford, BC</p>
<p className="mt-4"><a className="hover:text-wine-900 transition-colors" href="tel:+16045550101">(604) 555-0101</a></p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Maple Ridge</h4>
<p>11980 227 Street</p>
<p>Maple Ridge, BC</p>
<p className="mt-4"><a className="hover:text-wine-900 transition-colors" href="tel:+16045550102">(604) 555-0102</a></p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Hours</h4>
<p>Tue - Thu: 4pm - 9pm</p>
<p>Fri - Sat: 4pm - 10pm</p>
<p>Sun: 4pm - 9pm</p>
<p className="text-stone-400 mt-2">Closed Mondays</p>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4">Legal</h4>
<a className="block hover:text-stone-900" href="#">Privacy Policy</a>
<a className="block hover:text-stone-900 mt-2" href="#">Terms of Service</a>
<p className="mt-4 text-xs text-stone-400">© 2024 Paliotti’s.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
