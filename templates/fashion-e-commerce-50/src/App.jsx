import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter uppercase text-stone-900 flex items-center gap-2" href="#">
          SHERAZI
        </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#collection">
            Collection
          </a>
<a className="hover:text-stone-900 transition-colors" href="#about">
            Atelier
          </a>
<a className="hover:text-stone-900 transition-colors" href="#contact">
            Contact
          </a>
</div>

<div className="flex items-center gap-4">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-rose-500 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="z-10 flex flex-col items-start space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
            New Summer Collection '24
          </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1]">
            Elegance Woven
            <br/>
<span className="text-stone-400">In Every Thread.</span>
</h1>
<p className="text-lg text-stone-500 max-w-md leading-relaxed font-light">
            Sherazi Garments brings you the finest selection of ladies' eastern
            and western wear. Premium fabrics, timeless designs.
          </p>
<div className="flex flex-wrap items-center gap-4">
<a className="group relative px-6 py-3 bg-stone-900 text-stone-50 text-sm font-medium rounded-lg overflow-hidden transition-all hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-200" href="#collection">
<span className="relative z-10 flex items-center gap-2">
                Shop Now
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
<a className="px-6 py-3 text-sm font-medium text-stone-600 hover:text-stone-900 border border-stone-200 rounded-lg transition-colors bg-white" href="#contact">
              Contact Us
            </a>
</div>
</div>

<div className="h-[400px] md:h-[500px] w-full flex items-center justify-center relative perspective-1000">
<div className="scene">
<div className="carousel">

<div className="carousel__cell">
<img alt="Dress 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>

<div className="carousel__cell">
<img alt="Dress 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&amp;w=1908&amp;auto=format&amp;fit=crop"/>
</div>

<div className="carousel__cell">
<img alt="Dress 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&amp;w=1934&amp;auto=format&amp;fit=crop"/>
</div>

<div className="carousel__cell">
<img alt="Dress 4" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="carousel__cell">
<img alt="Dress 5" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=1966&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent pointer-events-none"></div>
</div>
</div>
</header>

<div className="w-full bg-stone-900 py-3 overflow-hidden whitespace-nowrap relative">
<div className="inline-block animate-[marquee_20s_linear_infinite] text-stone-400 text-xs font-medium tracking-widest uppercase">
<span className="mx-8">New Arrivals</span>
<span className="mx-8 text-stone-600">•</span>
<span className="mx-8">Premium Lawn</span>
<span className="mx-8 text-stone-600">•</span>
<span className="mx-8">Chiffon Collection</span>
<span className="mx-8 text-stone-600">•</span>
<span className="mx-8">Stitched Suits</span>
<span className="mx-8 text-stone-600">•</span>
<span className="mx-8">Easy Returns</span>
<span className="mx-8 text-stone-600">•</span>
<span className="mx-8">Nationwide Delivery</span>
</div>
</div>
<style>
      @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
      }
    </style>

<section className="py-24 max-w-7xl mx-auto px-6" id="collection">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-stone-900">
            Curated Collection
          </h2>
<p className="text-stone-500 mt-2 text-sm">
            Discover the latest trends in modesty and style.
          </p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors" href="#">
          View all
          <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-100 mb-4">
<img alt="Floral Lawn" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-stone-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
<div className="absolute top-3 left-3 px-2 py-1 bg-stone-900/10 backdrop-blur text-stone-900 text-[10px] font-semibold uppercase tracking-wider rounded">
              Sold Out
            </div>
</div>
<h3 className="text-sm font-medium text-stone-900">Floral Silk Tunic</h3>
<p className="mt-1 text-sm text-stone-500">PKR 4,500</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-100 mb-4">
<img alt="Beige Kurti" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-stone-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-stone-900">Embroidered Linen</h3>
<p className="mt-1 text-sm text-stone-500">PKR 3,200</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-100 mb-4">
<img alt="Evening Wear" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-stone-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/80 backdrop-blur text-rose-600 text-[10px] font-semibold uppercase tracking-wider rounded">
              Sale
            </div>
</div>
<h3 className="text-sm font-medium text-stone-900">
            Velvet Evening Gown
          </h3>
<p className="mt-1 text-sm text-stone-500">
<span className="line-through mr-2 opacity-50">PKR 8,000</span>
            PKR 6,500
          </p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-stone-100 mb-4">
<img alt="Summer Lawn" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-stone-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-stone-900">
            Classic Cotton Kurta
          </h3>
<p className="mt-1 text-sm text-stone-500">PKR 2,800</p>
</div>
</div>
</section>

<section className="bg-stone-100 border-y border-stone-200" id="contact">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12 overflow-hidden relative">

<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
<div className="max-w-lg">
<div className="flex items-center gap-3 mb-4">
<span className="h-8 w-8 rounded-lg bg-green-500 flex items-center justify-center text-white">
<iconify-icon icon="solar:wallet-money-linear" width="20"></iconify-icon>
</span>
<span className="text-sm font-semibold tracking-wide text-green-700 uppercase">
                  Secure Payments
                </span>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-3">
                Seamless Checkout with Easypaisa
              </h2>
<p className="text-stone-500 text-sm leading-relaxed">
                Shop your favorite looks and pay instantly using your Easypaisa
                mobile account. We ensure a secure and hassle-free transaction
                experience.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-6 bg-stone-50 p-6 rounded-xl border border-stone-200 shadow-sm">

<div className="flex flex-col">
<span className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                  Easypaisa &amp; WhatsApp
                </span>
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-900" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<span className="text-2xl font-medium text-stone-900 tracking-tight">
                    0300 4059423
                  </span>
</div>
<span className="text-xs text-stone-500 mt-2">
                  Available Mon-Sat, 9am - 9pm
                </span>
</div>

<div className="hidden sm:block w-px bg-stone-200"></div>

<div className="flex flex-col justify-center">
<button className="px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg shadow-sm shadow-green-200 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                  Chat to Order
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-medium tracking-tighter uppercase text-stone-900" href="#">
              SHERAZI
            </a>
<p className="mt-4 text-sm text-stone-500 max-w-xs font-light">
              Redefining elegance for the modern woman. Authentic designs,
              premium quality, and swift delivery across the nation.
            </p>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  New Arrivals
                </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  Formal Wear
                </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  Casual Pret
                </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  Unstitched
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">
              Customer Care
            </h4>
<ul className="space-y-2 text-sm text-stone-500 font-light">
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  Track Order
                </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  Shipping Policy
                </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  Returns &amp; Exchange
                </a>
</li>
<li>
<a className="hover:text-stone-900 transition-colors" href="#">
                  Payment Guide
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400">
            © 2024 Sherazi Garments. All rights reserved.
          </p>
<div className="flex items-center gap-4 text-stone-400">
<iconify-icon className="hover:text-stone-900 transition-colors cursor-pointer" icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-stone-900 transition-colors cursor-pointer" icon="solar:facebook-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
