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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple logic to toggle the custom switch UI visually
        const toggleInput = document.getElementById('toggle1');
        if (toggleInput) {
            const weeklyLabel = toggleInput.parentElement.previousElementSibling;
            const biweeklyLabel = toggleInput.parentElement.nextElementSibling;

            toggleInput.addEventListener('change', function() {
                if(this.checked) {
                    biweeklyLabel.classList.remove('text-gray-500');
                    biweeklyLabel.classList.add('text-gray-900', 'font-medium');
                    weeklyLabel.classList.add('text-gray-500');
                    weeklyLabel.classList.remove('text-gray-900', 'font-medium');
                } else {
                    weeklyLabel.classList.remove('text-gray-500');
                    weeklyLabel.classList.add('text-gray-900', 'font-medium');
                    biweeklyLabel.classList.add('text-gray-500');
                    biweeklyLabel.classList.remove('text-gray-900', 'font-medium');
                }
            });
        }
    
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
      

<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><iframe frameborder="0" height="100%" src="https://www.jassicafarm.com" width="100%"></iframe></div>

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/80 border-stone-950">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="tracking-tighter font-semibold text-lg font-geist text-gray-900">JESSICA FARM</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
</nav>

<div className="flex items-center gap-4">
<button className="text-gray-500 transition-colors p-1 flex items-center justify-center rounded-full hover:text-gray-900 hover:bg-gray-100">
<iconify-icon className="" height="20" icon="solar:alt-arrow-down-outline" style={{strokeWidth: '1.5', color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon>
</button>
<button className="text-gray-500 transition-colors p-1 flex items-center justify-center rounded-full relative hover:text-gray-900 hover:bg-gray-100">
<iconify-icon className="" height="20" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-gray-900"></span>
</button>
<button className="md:hidden text-gray-500 p-1 flex items-center justify-center hover:text-gray-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="overflow-hidden md:pt-32 md:pb-36 pt-20 pr-6 pb-24 pl-6 relative">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="max-w-xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 font-geist bg-gray-100 border-gray-200 text-gray-600">
<iconify-icon height="14" icon="solar:leaf-linear" width="14"></iconify-icon>
                        100% Grass-fed Organic
                    </div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-gray-900 tracking-tight font-geist mb-6">
                        Farm fresh milk, delivered to your door.
                    </h1>
<p className="text-lg text-gray-500 mb-8 font-light leading-relaxed font-geist">
                        Experience the taste of real milk. Bottled in glass and delivered weekly from our local pasture straight to your porch before you wake up.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium transition-colors gap-2 shadow-sm font-geist bg-gray-900 text-white hover:bg-gray-800">
                            Start Delivery
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center px-6 py-3 rounded-full border text-sm font-medium transition-colors font-geist bg-white border-gray-200 text-gray-900 hover:bg-gray-50">
                            View Products
                        </button>
</div>
</div>

<div className="relative hidden md:block w-full aspect-square max-w-md mx-auto">
<div className="flex transform cursor-pointer bg-gradient-to-tr from-gray-100 to-white border-neutral-900 border rounded-[2rem] absolute top-0 right-0 bottom-0 left-0 shadow-sm rotate-3 rotate-x-20 -rotate-y-30 -rotate-z-5 items-center justify-center" onclick="window.location.href='https://tse2.mm.bing.net/th/id/OIP.l1Y3spDeFxMkmUEaFBabFQHaE8?rs=1&amp;pid=ImgDetMain&amp;o=7&amp;rm=3'" role="button">
<div className="flex gap-4">

<div className="w-16 h-40 rounded-t-xl rounded-b-md shadow-sm border relative flex flex-col items-center pt-2 bg-white border-stone-950">
<div className="w-8 h-4 rounded-sm mb-2 bg-gray-100"></div>
<div className="bg-gray-50/50 w-full h-full border-stone-950 rounded-b-md border-t mt-auto"></div>
<div className="absolute bottom-4 text-xs font-medium tracking-tighter transform -rotate-90 font-geist text-gray-300">WHOLE</div>
</div>
<div className="w-16 h-40 rounded-t-xl rounded-b-md shadow-sm border relative flex flex-col items-center pt-2 transform translate-y-4 bg-white border-stone-950">
<div className="w-8 h-4 rounded-sm mb-2 bg-gray-100"></div>
<div className="w-full h-24 rounded-b-md border-t mt-auto bg-gray-50/50 border-stone-950"></div>
<div className="absolute bottom-4 text-xs font-medium tracking-tighter transform -rotate-90 font-geist text-gray-300">SKIM</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 w-24 h-24 rounded-full mix-blend-multiply filter blur-xl opacity-70 bg-gray-100"></div>
<div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full mix-blend-multiply filter blur-xl opacity-70 bg-gray-50"></div>
</div>
</div>
</section>

<section className="py-20 border-y bg-white border-stone-950">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl mb-4 font-geist tracking-tight text-gray-900">Simple, transparent delivery</h2>
<p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto font-geist">Set up your subscription once and wake up to fresh milk. No commitments, pause or cancel anytime.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-px z-0 bg-gray-100"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 border rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200">
<iconify-icon className="text-gray-900" height="24" icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 font-geist text-gray-900">1. Choose your milk</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist">Select from our range of farm-fresh, glass-bottled dairy products.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 border rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200">
<iconify-icon className="text-gray-900" height="24" icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 font-geist text-gray-900">2. Set schedule</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist">Pick a weekly or bi-weekly delivery that fits your family's routine.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 border rounded-2xl flex items-center justify-center mb-6 shadow-sm bg-white border-gray-200">
<iconify-icon className="text-gray-900" height="24" icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 font-geist text-gray-900">3. Enjoy at home</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist">We deliver directly to your doorstep in reusable insulated cooler bags.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#fafafa] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col sm:flex-row gap-6 mb-12 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
</div>

<div className="flex items-center gap-3">
<span className="text-sm font-medium font-geist text-gray-900">Weekly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only toggle-checkbox" id="toggle1" type="checkbox"/>
<div className="w-10 h-5 rounded-full toggle-label relative transition-colors duration-200 ease-in-out before:content-[''] before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:top-0.5 before:left-0.5 before:transition-transform before:duration-200 before:ease-in-out shadow-inner bg-gray-200"></div>
</label>
<span className="text-sm text-gray-500 font-geist">Bi-weekly</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="rounded-2xl border p-6 flex flex-col shadow-sm relative transition-colors bg-white border-gray-200 hover:border-gray-300">
<div className="absolute top-0 right-0 p-6">
<iconify-icon className="text-gray-300" height="24" icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-1 font-geist text-gray-900">Organic Whole Milk</h3>
<p className="text-xs text-gray-500 mb-6 font-geist line-clamp-2">Cream top, pasteurized at low temperatures to preserve flavor and nutrients.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-gray-900 tracking-tight font-geist">₹60</span>
<span className="text-xs text-gray-500 font-geist">/ bottle</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm font-geist text-gray-600">
<iconify-icon className="text-gray-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                1 Liter Glass Bottle
                            </li>
<li className="flex items-center gap-3 text-sm font-geist text-gray-600">
<iconify-icon className="text-gray-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                100% Grass-fed
                            </li>
<li className="flex items-center gap-3 text-sm font-geist text-gray-600">
<iconify-icon className="text-gray-400" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                No artificial hormones
                            </li>
</ul>
<button className="w-full py-2.5 rounded-xl border text-sm font-medium transition-colors font-geist border-gray-200 text-gray-900 hover:bg-gray-50">Add to Delivery</button>
</div>

<div className="rounded-2xl border p-6 flex flex-col shadow-sm relative transform md:-translate-y-2 bg-gray-900 border-gray-800">
<div className="absolute top-0 right-0 p-6">
<iconify-icon className="text-gray-600" height="24" icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<div className="inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-medium w-max mb-3 font-geist tracking-wider uppercase bg-gray-800 border-gray-700 text-gray-300">Most Popular</div>
<h3 className="text-lg font-medium mb-1 font-geist text-white">Organic Skim Milk</h3>
<p className="text-xs mb-4 font-geist line-clamp-2 text-gray-400">Fat-free organic milk with all the natural vitamins and minerals intact.</p>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold font-geist tracking-tight text-white">₹140</span>
<span className="text-xs font-geist text-gray-400">/ bottle</span>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm font-geist text-gray-300">
<iconify-icon className="text-gray-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                1 Liter Glass Bottle
                            </li>
<li className="flex items-center gap-3 text-sm font-geist text-gray-300">
<iconify-icon className="text-gray-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                0% Fat
                            </li>
<li className="flex items-center gap-3 text-sm font-geist text-gray-300">
<iconify-icon className="text-gray-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                Rich in Calcium
                            </li>
</ul>
<button className="w-full py-2.5 rounded-xl text-sm font-medium transition-colors font-geist bg-white text-gray-900 hover:bg-gray-50">Add to Delivery</button>
</div>

</div>
</div>
</section>

<section className="bg-white border-stone-950 border-t pt-24 pr-6 pb-24 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">
<h2 className="text-3xl mb-4 font-geist tracking-tight text-gray-900">Join the local dairy movement</h2>
<p className="text-base text-gray-500 font-geist mb-8">Enter your zip code to see if we deliver to your neighborhood and get 10% off your first month.</p>
<form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
<input className="flex-grow focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow placeholder:text-gray-400 text-sm border-gray-200 border rounded-xl pt-3 pr-4 pb-3 pl-4" placeholder="Enter Zip Code" type="text"/>
<button className="transition-colors whitespace-nowrap hover:bg-gray-800 text-sm font-medium text-white font-geist bg-gray-900 rounded-xl pt-3 pr-6 pb-3 pl-6" type="submit">
                        Check Availability
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-[#fafafa] border-stone-950 border-t pt-16 pr-6 pb-8 pl-6">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="tracking-tighter font-semibold text-base mb-4 block font-geist text-gray-900">JESSICA FARM</span>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs font-geist">
                    Bringing the farm directly to your doorstep. Sustainable, local, and fresh dairy delivery.
                </p>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 font-geist text-gray-900">Shop</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li className=""><a className="transition-colors font-geist hover:text-gray-900" href="#">All Products</a></li>
<li className=""><a className="transition-colors font-geist hover:text-gray-900" href="#">Milk</a></li>
<li><a className="transition-colors font-geist hover:text-gray-900" href="#">Eggs &amp; Butter</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 font-geist text-gray-900">Company</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li className=""><a className="transition-colors font-geist hover:text-gray-900" href="#">Our Farm</a></li>
<li className=""><a className="transition-colors font-geist hover:text-gray-900" href="#">Sustainability</a></li>
<li className=""><a className="transition-colors font-geist hover:text-gray-900" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-sm mb-4 font-geist text-gray-900">Legal</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li className=""><a className="transition-colors font-geist hover:text-gray-900" href="#">Terms of Service</a></li>
<li className=""><a className="transition-colors font-geist hover:text-gray-900" href="#">Privacy Policy</a></li>
<li className=""><a className="transition-colors hover:text-gray-900 font-geist" href="#">Delivery Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row max-w-6xl border-gray-200 border-t mr-auto ml-auto pt-8 items-center justify-between">
<p className="text-xs mb-4 sm:mb-0 font-geist text-gray-400">
                © 2024 Jessica Farm. All rights reserved.
            </p>
<div className="flex gap-4">
<a className="transition-colors text-gray-400 hover:text-gray-900" href="#">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-gray-400 hover:text-gray-900" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
