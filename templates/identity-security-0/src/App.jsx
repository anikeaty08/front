import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#ff6f3b] py-3 text-center flex flex-col sm:flex-row justify-center items-center gap-2">
<span className="text-lg font-normal">Linx Announces Series B with $33M Total Funding</span>
<a className="text-lg font-normal underline hover:no-underline flex items-center gap-1" href="#">
            Learn more <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<nav className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center relative z-10">
<a className="shrink-0" href="#">
<img alt="Linx" className="h-8" src="https://cdn.prod.website-files.com/69529b4327b8e0f645d9edff/695d3e9ac43c8efc41ab7490_Linx-logo.webp"/>
</a>
<div className="hidden lg:flex items-center gap-8 text-lg font-normal">
<a className="flex items-center gap-1 hover:text-gray-600 transition" href="#">Platform <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="flex items-center gap-1 hover:text-gray-600 transition" href="#">Solutions <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="flex items-center gap-1 hover:text-gray-600 transition" href="#">Customers <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="flex items-center gap-1 hover:text-gray-600 transition" href="#">Resources <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="flex items-center gap-1 hover:text-gray-600 transition" href="#">Company <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
</div>
<div className="hidden sm:flex items-center gap-4 shrink-0">
<button className="px-6 py-2.5 rounded-full border border-[#181918] text-lg font-medium hover:bg-[#181918] hover:text-white transition-colors">Sign in</button>
<button className="px-6 py-2.5 rounded-full bg-[#181918] text-white border border-[#181918] text-lg font-medium hover:bg-gray-800 transition-colors">Get a demo</button>
</div>
</nav>

<section className="relative max-w-[1400px] mx-auto px-6 pt-16 pb-40">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffd229] opacity-30 blur-[120px] rounded-full pointer-events-none -translate-y-1/4 translate-x-1/4 z-0"></div>
<div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="max-w-2xl">
<h1 className="text-6xl md:text-8xl leading-[1.05] font-medium tracking-tight mb-8">Identity security is now a breeze</h1>
<p className="text-2xl text-[#424342] mb-12 max-w-xl font-normal leading-snug">The AI-native platform for identity security, visibility, and governance.</p>
<button className="px-8 py-4 rounded-full bg-[#181918] text-white text-xl font-medium hover:bg-gray-800 transition-colors shadow-lg">Get a demo</button>
</div>
<div className="relative w-full aspect-square md:aspect-auto">
<img alt="Colorful flower and ladybug illustration" className="w-[120%] max-w-none ml-[-10%] md:w-[130%] md:ml-[-15%] lg:w-[140%] lg:ml-0 lg:-mt-24 object-contain" src="https://cdn.prod.website-files.com/69529b4327b8e0f645d9edff/6957e55257f8d84fb0a58404_a229642e793fa54b51e68a7619774664_sunflower.webp"/>
</div>
</div>
</section>

<div className="absolute top-[600px] left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[1200px] bg-white z-50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-sm border border-gray-100">
<div className="p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:items-start">

<div className="w-28 h-28 bg-[#181918] flex items-center justify-center shrink-0">
<i className="text-white w-14 h-14" data-lucide="asterisk" strokeWidth="2"></i>
</div>

<div className="flex-1 pr-0 lg:pr-8">
<h3 className="text-2xl font-medium tracking-tight mb-4">This website uses cookies</h3>
<p className="text-lg text-gray-700 leading-relaxed font-normal">
                    We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.
                </p>
</div>

<div className="flex flex-col sm:flex-row gap-3 shrink-0 pt-2 lg:pt-0">
<button className="px-6 py-3 rounded-full border border-gray-300 text-[#181918] text-lg font-medium hover:border-[#181918] hover:bg-gray-50 transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#181918] focus:ring-offset-2">
                    Manage Preferences
                </button>
<button className="px-8 py-3 rounded-full bg-[#181918] text-white border border-[#181918] text-lg font-medium hover:bg-gray-800 transition-all shadow-md hover:shadow-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#181918] focus:ring-offset-2">
                    Accept All
                </button>
</div>
</div>
</div>



    </>
  );
}
