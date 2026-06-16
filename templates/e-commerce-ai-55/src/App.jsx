import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Graphik', 'Arial', 'sans-serif'],
},
colors: {
primary: '#fefa72',    // Yellow-01
secondary: '#9e826e',  // Brown
tertiary: '#9886ff',   // Purple
neutral: {
darkest: '#000000', // Black
darker: '#232323',  // Primary text color
lightest: '#f7f7f7', // Background cards
lighter: '#eae6dd',  // Borders/dividers
},
darkBg: '#2a2a2a', // Dark background section color
darkBgAlt: '#232323', // Slightly darker variant
darkBorder: '#3a3a3a',
textMuted: '#888888',
},
fontSize: {
'xs': '0.8125rem',
'sm': '1rem',
'base': '1.125rem', // Bumped up 1 size as requested
'lg': '1.25rem',
'xl': '1.5rem',
'2xl': '2rem',
'3xl': '2.5rem',
'4xl': '3rem',     // h3
'5xl': '3.75rem',  // h2
'6xl': '5rem',     // h1 desktop
},
lineHeight: {
tight: '1.2',
snug: '1.4',
normal: '1.5',
},
letterSpacing: {
tight: '-0.05em',
tighter: '-0.08em',
tightest: '-0.1em',
},
boxShadow: {
'sm': '0 4px 8px -2px rgba(0,0,0,0.1)',
'2xl': '0 32px 64px -12px rgba(0,0,0,0.14)',
},
borderRadius: {
'full': '20rem',
'xl': '1rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-primary px-4 py-2 flex items-center justify-center text-xs font-medium">
<span>Feb 24: We've raised a <strong>€4M Seed Round</strong></span>
</div>

<nav className="sticky top-0 z-50 bg-white border-b border-neutral-lighter px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-8">
<a aria-label="Cernel Home" href="#">
<svg className="text-neutral-darkest" fill="none" height="24" viewbox="0 0 100 30" width="80" xmlns="http://www.w3.org/2000/svg">

<path d="M15 15C15 23.2843 8.28427 30 0 30L0 0C8.28427 0 15 6.71573 15 15Z" fill="currentColor"></path>
<path d="M35 15C35 23.2843 28.2843 30 20 30L20 0C28.2843 0 35 6.71573 35 15Z" fill="currentColor"></path>
<text fill="currentColor" fontFamily="Graphik" fontSize="24" font-weight="600" letter-spacing="-0.05em" x="45" y="22">cernel.</text>
</svg>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-darker">
<a className="hover:text-black transition-colors" href="#">Products</a>
<a className="hover:text-black transition-colors" href="#">About</a>
<a className="hover:text-black transition-colors" href="#">Careers</a>
<a className="hover:text-black transition-colors" href="#">News</a>
<a className="hover:text-black transition-colors" href="#">Resources</a>
</div>
</div>
<div className="flex items-center gap-4 text-xs font-medium">
<a className="hover:text-black transition-colors hidden sm:block" href="#">Login</a>
<a className="bg-[#bba996] text-white px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-all" href="#">Book demo</a>
</div>
</nav>

<section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
<div className="bg-[#313131] rounded-3xl overflow-hidden relative text-white min-h-[600px] lg:min-h-[800px] flex flex-col items-center pt-20 px-6 sm:px-12">

<div className="absolute inset-0 pointer-events-none opacity-60 flex items-center justify-center mt-40">

<div className="relative w-full max-w-4xl h-full mt-32">

<div className="absolute left-1/4 top-0 w-[1px] h-32 bg-white/20"></div>
<div className="absolute left-[10%] top-1/4 w-[1px] h-full bg-white/10 dashed border-l border-dashed border-white/20"></div>

<div className="absolute top-0 w-full flex justify-between px-10">
<div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded text-xs border border-white/20 backdrop-blur-sm">
<i className="w-4 h-4 text-white/70 stroke-[1.5]" data-lucide="file-spreadsheet"></i> Supplier Sheets
                        </div>
</div>
<div className="absolute top-12 w-full flex justify-between px-10">
<div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded text-xs border border-white/20 backdrop-blur-sm">
<i className="w-4 h-4 text-white/70 stroke-[1.5]" data-lucide="database"></i> ERP Systems
                        </div>
</div>
<div className="absolute top-24 w-full flex justify-between px-10">
<div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded text-xs border border-white/20 backdrop-blur-sm">
<i className="w-4 h-4 text-white/70 stroke-[1.5]" data-lucide="globe"></i> Market Data
                        </div>
</div>

<div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4 w-full max-w-2xl justify-center z-10">
<div className="bg-white text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 text-xs font-medium w-64 justify-center">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="box"></i> Categorization &amp; Enrichment
                        </div>
<div className="bg-white text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 text-xs font-medium w-48 justify-center">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="align-left"></i> Product Description
                        </div>
<div className="bg-white text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 text-xs font-medium w-56 justify-center">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="image"></i> Media Content Creation
                        </div>
</div>

<div className="absolute top-1/2 left-1/4 bg-[#232323] border border-white/10 rounded-lg p-4 w-64 shadow-2xl z-20">
<div className="flex items-center gap-2 text-xs mb-3 text-white/80 border-b border-white/10 pb-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="search"></i> Product Data
                        </div>
<div className="text-[0.65rem] space-y-1.5 font-mono text-white/60">
<div><span className="text-blue-400">CATEGORY:</span> APPAREL - T-SHIRT</div>
<div><span className="text-blue-400">MATERIAL:</span> ORGANIC COTTON</div>
<div><span className="text-blue-400">FIT:</span> REGULAR</div>
<div><span className="text-blue-400">STYLE:</span> Y2K</div>
<div><span className="text-blue-400">PATTERN:</span> SOLID</div>
</div>
</div>

<div className="absolute top-1/4 right-0 flex flex-col gap-2">
<div className="bg-white text-black px-4 py-2 rounded shadow flex items-center gap-2 text-xs font-medium w-40">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="shopping-cart"></i> Webshop
                        </div>
<div className="bg-[#bba996] text-white px-4 py-2 rounded shadow flex items-center gap-2 text-xs font-medium w-40">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="store"></i> Markets
                        </div>
<div className="bg-white text-black px-4 py-2 rounded shadow flex items-center gap-2 text-xs font-medium w-40">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="rss"></i> Feeds
                        </div>
</div>

<div className="absolute top-1/4 left-[30%] bg-white/5 backdrop-blur rounded border border-white/10 px-3 py-1.5 text-xs text-white/80 border-l-2 border-l-green-400">
                        22% increase in searches<br/>on select attributes
                    </div>
</div>
</div>

<div className="relative z-30 text-center max-w-4xl mx-auto flex flex-col items-center">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tightest leading-tight mb-6">
                    Product onboarding<br/>without the manual work
                </h1>
<p className="text-lg text-white/70 max-w-2xl mb-6">
                    Cernel is a new kind of infrastructure: an intelligent engine designed to unify, enrich, and activate all product data in ecommerce automatically.
                </p>
<p className="text-base font-medium text-white mb-8">
                    Launch faster. React to trends in seconds. Be visible anywhere.
                </p>
<a className="bg-primary text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors" href="#">
                    Book demo
                </a>
</div>
</div>
</section>

<section className="border-y border-neutral-lighter py-8 overflow-hidden bg-white">
<div className="flex whitespace-nowrap animate-marquee items-center">

<div className="flex items-center gap-16 px-8 min-w-max grayscale opacity-60">
<img alt="Vero Moda" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/6995d620385dacc1aa499968_vero-moda-logo-freelogovectors.net_.png"/>
<img alt="Hummel" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/698306646aa59672bb795fef_hummel-international-logo-.png"/>
<img alt="Matas" className="h-8 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/69830685172a925e56960f59_matas.png"/>
<img alt="M&amp;M" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/698306e0bcc072637075bc51_logo-M_M_611a36e7-7efe-4c31-94bb-5a147a83155d_black.png"/>
<img alt="Luksusbaby" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/698306f4c5d5822fa9fbcada_Luksusbaby_Logo_UdenDK_Udenbilinje_sort_UDENtweens.png"/>
<span className="font-medium text-xl tracking-tight uppercase">helsebixen</span>
<span className="font-medium text-xl tracking-tight uppercase">MADE4MEN</span>
</div>

<div className="flex items-center gap-16 px-8 min-w-max grayscale opacity-60">
<img alt="Vero Moda" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/6995d620385dacc1aa499968_vero-moda-logo-freelogovectors.net_.png"/>
<img alt="Hummel" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/698306646aa59672bb795fef_hummel-international-logo-.png"/>
<img alt="Matas" className="h-8 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/69830685172a925e56960f59_matas.png"/>
<img alt="M&amp;M" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/698306e0bcc072637075bc51_logo-M_M_611a36e7-7efe-4c31-94bb-5a147a83155d_black.png"/>
<img alt="Luksusbaby" className="h-6 object-contain" src="https://cdn.prod.website-files.com/69610c48ff2cbd4f84f3ea42/698306f4c5d5822fa9fbcada_Luksusbaby_Logo_UdenDK_Udenbilinje_sort_UDENtweens.png"/>
<span className="font-medium text-xl tracking-tight uppercase">helsebixen</span>
<span className="font-medium text-xl tracking-tight uppercase">MADE4MEN</span>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-neutral-lighter">
<div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter leading-tight text-neutral-darkest mb-8">
                Every ecommerce team knows the pain
            </h2>
</div>
<div className="space-y-6 text-neutral-darker max-w-lg">
<p>Purchasing sends a spreadsheet. A name, a GTIN, a blurry image. Sometimes a generic description the supplier shared with 5,000 retailers. Design sends over a sketch.</p>
<p>Marketing must turn it into a full product page — descriptions, attributes, categories, meta titles, translations, and images — before it can go live.</p>
<p>The result: backlogs of thousands of products, revenue stuck in the warehouse, and a team buried in manual work.</p>
<p>Cernel changes that.</p>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-lighter">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col gap-6">
<div className="bg-neutral-lightest rounded-xl overflow-hidden border border-neutral-lighter aspect-[4/3] flex items-center justify-center p-4">
<img alt="Data Foundation UI" className="w-full h-auto object-contain shadow-sm rounded border border-neutral-lighter" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/698052c71d803b2470950fd4_Group%201000005567.webp"/>
</div>
<div>
<h3 className="text-base font-medium text-neutral-darkest mb-2">Product Data Foundation</h3>
<p className="text-sm text-neutral-darker mb-4">Structure and enrich your product data automatically. Build new categories, filters, and attributes to unlock the potential in every product.</p>
<a className="text-sm font-medium text-tertiary flex items-center gap-1 hover:opacity-80 transition-opacity" href="#">
                        Read more <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="bg-neutral-lightest rounded-xl overflow-hidden border border-neutral-lighter aspect-[4/3] flex items-center justify-center p-6">
<img alt="Media Content UI" className="w-full h-full object-contain" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69807ceba0000ea74b7b5a52_Group%201000005561.svg"/>
</div>
<div>
<h3 className="text-base font-medium text-neutral-darkest mb-2">Media Content</h3>
<p className="text-sm text-neutral-darker mb-4">Create a visual catalogue that matches your brand and connects with your audience. On demand. At scale. In season, every season.</p>
<a className="text-sm font-medium text-tertiary flex items-center gap-1 hover:opacity-80 transition-opacity" href="#">
                        Read more <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="bg-neutral-lightest rounded-xl overflow-hidden border border-neutral-lighter aspect-[4/3] flex items-center justify-center p-6">
<img alt="Market Optimization UI" className="w-full h-auto object-contain shadow-sm rounded border border-neutral-lighter" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69807d00c8f3d67daaa45842_Group%201000005562.webp"/>
</div>
<div>
<h3 className="text-base font-medium text-neutral-darkest mb-2">Market and Feed Optimization</h3>
<p className="text-sm text-neutral-darker mb-4">Become visible anywhere, while removing translation and feed data bottlenecks entirely.</p>
<a className="text-sm font-medium text-tertiary flex items-center gap-1 hover:opacity-80 transition-opacity" href="#">
                        Read more <i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-lighter">
<div className="max-w-3xl mb-16">
<span className="text-xs font-medium text-neutral-darker uppercase tracking-wider mb-4 block">Higher standards are emerging</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-neutral-darkest mb-6">
                What changes when product onboarding runs itself?
            </h2>
<p className="text-neutral-darker max-w-xl">
                Ecommerce teams using Cernel spend less time on manual work, launch products faster, and unlock revenue that was stuck in their backlog.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-lighter">

<div className="border-r border-b border-neutral-lighter p-8 flex flex-col justify-between min-h-[280px]">
<div>
<div className="w-6 h-6 rounded-full bg-[#e3dcd1] flex items-center justify-center mb-4">
<i className="w-3.5 h-3.5 text-neutral-darkest stroke-[2]" data-lucide="check"></i>
</div>
<h4 className="text-sm font-medium text-neutral-darkest mb-2">Reduced Manual Work</h4>
<p className="text-xs text-neutral-darker leading-snug">Cernel removes most of the manual, repetitive work in product onboarding, reducing the cost of every SKU sold.</p>
</div>
<div className="text-5xl font-medium tracking-tighter mt-8">
                    -85%
                </div>
</div>

<div className="border-r border-b border-neutral-lighter p-8 flex flex-col justify-between min-h-[280px]">
<div>
<div className="w-6 h-6 rounded-full bg-[#e3dcd1] flex items-center justify-center mb-4">
<i className="w-3.5 h-3.5 text-neutral-darkest stroke-[2]" data-lucide="check"></i>
</div>
<h4 className="text-sm font-medium text-neutral-darkest mb-2">Faster Time-To-Market</h4>
<p className="text-xs text-neutral-darker leading-snug">Ecommerce teams can move entire collections, or a new supplier batches, through to market at near instant speed. No more bottlenecks, or products wasting away at the warehouse.</p>
</div>
<div className="text-5xl font-medium tracking-tighter mt-8">
                    -95%
                </div>
</div>

<div className="border-r border-b border-neutral-lighter p-8 flex flex-col justify-between min-h-[280px]">
<div>
<div className="w-6 h-6 rounded-full bg-[#e3dcd1] flex items-center justify-center mb-4">
<i className="w-3.5 h-3.5 text-neutral-darkest stroke-[2]" data-lucide="check"></i>
</div>
<h4 className="text-sm font-medium text-neutral-darkest mb-2">Consistent Product Data</h4>
<p className="text-xs text-neutral-darker leading-snug">Siloes between purchasing, design, and marketing are real. Increase product data quality and consistency, so everyone has access and sees the same output.</p>
</div>
<div className="text-5xl font-medium tracking-tighter mt-8">
                    100%
                </div>
</div>

<div className="border-r border-b border-neutral-lighter p-8 flex flex-col justify-between min-h-[280px]">
<div>
<div className="w-6 h-6 rounded-full bg-neutral-lightest border border-neutral-lighter flex items-center justify-center mb-4">
<i className="w-3.5 h-3.5 text-neutral-darkest stroke-[2]" data-lucide="check"></i>
</div>
<h4 className="text-sm font-medium text-neutral-darkest mb-2">Be Visible Anywhere</h4>
<p className="text-xs text-neutral-darker leading-snug">Your products not only become fully visible in traditional markets and feeds, but also when your customers search intent-based in LLM chats.</p>
</div>
<div className="text-5xl font-medium tracking-tighter mt-8">
                    All
                </div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-lighter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 max-w-lg">
<span className="text-xs font-medium text-neutral-darker mb-4 block">Mikkel, Head of Ecommerce, Firtal</span>
<h2 className="text-3xl font-medium tracking-tight leading-tight text-neutral-darkest mb-6">
                    "We added a thousand extra hands without adding headcount."
                </h2>
<p className="text-neutral-darker">
                    Firtal, a Scandinavian retailer, explains how structured product data is becoming make-or-break for online retailers — and how Cernel helped them.
                </p>
</div>
<div className="lg:col-span-7 relative rounded-2xl overflow-hidden group cursor-pointer bg-neutral-lightest aspect-video">

<img alt="Video Thumbnail" className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69821510920d779ea89ab8b0_6a888580447f066e4f6abe6051b20706_unnamed%209.jpg"/>

<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
<div className="w-16 h-16 bg-black/60 backdrop-blur rounded-full flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
<i className="w-6 h-6 ml-1 stroke-[1.5] fill-white" data-lucide="play"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1c1c1c] text-white py-24 relative overflow-hidden bg-grid-pattern">

<div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto mb-20 relative z-10">
<span className="text-xs font-medium text-white/50 uppercase tracking-wider mb-4 block">How it works</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter leading-tight max-w-2xl">
                From raw data to sales-ready products.<br/>Here's how.
            </h2>
</div>

<div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 relative z-10 items-center">
<div className="max-w-md">
<h3 className="text-2xl font-medium mb-6">Product Data Foundation</h3>
<div className="space-y-4 text-white/70 text-sm mb-8">
<p>Your product data arrives in dozens of formats— different naming conventions, missing fields, inconsistent structures.</p>
<p>Before you can enrich anything, you need a clean foundation.</p>
<p>Cernel normalizes your catalogue automatically, mapping attributes to your target channels and filling structural gaps.</p>
<p>How it's done:</p>
<ul className="list-disc pl-5 space-y-2">
<li>Automatic attribute mapping</li>
<li>Multi-source data merging</li>
<li>Channel-specific formatting</li>
<li>Validation and error flagging</li>
</ul>
</div>
<a className="inline-flex bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2 rounded-full text-xs font-medium transition-colors" href="#">
                    Learn more
                </a>
</div>

<div className="relative h-[400px] w-full border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8">

<div className="w-full h-full border border-dashed border-white/10 relative">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full flex items-center justify-center">
<div className="w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
</div>

<div className="absolute left-0 top-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-white/30"></div>
<div className="absolute right-0 top-1/2 w-1/2 h-[1px] bg-gradient-to-l from-transparent to-white/30"></div>
</div>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 relative z-10 items-center">

<div className="relative h-[400px] w-full border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 order-2 lg:order-1">
<div className="bg-[#e9f2d0] rounded p-4 text-black max-w-xs shadow-xl relative">
<div className="flex items-center gap-2 text-xs font-medium mb-2 border-b border-black/10 pb-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="sparkles"></i> Agent Reasoning
                    </div>
<p className="text-xs leading-snug">Hover over an attribute to see how the agent reasons, as it finds out what best describes the item.</p>
</div>
</div>
<div className="max-w-md lg:ml-auto order-1 lg:order-2">
<h3 className="text-2xl font-medium mb-6">Product Data Enrichment</h3>
<div className="space-y-4 text-white/70 text-sm mb-8">
<p>Your supplier sent a product name and a SKU. You need 15 attributes to sell it properly.</p>
<p>Cernel extracts what's there, enriches from external sources, and fills the gaps - validated against unique identifiers, so nothing is made up.</p>
<p>Every attribute traces back to its source.</p>
<p>Your team reviews edge cases, not everything. Configure once for your product categories.</p>
<p>Cernel learns your attribute structure, your quality standards, and your exceptions. New products get enriched automatically.</p>
</div>
<a className="inline-flex bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2 rounded-full text-xs font-medium transition-colors" href="#">
                    Learn more
                </a>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 relative z-10 items-center">
<div className="max-w-md">
<h3 className="text-2xl font-medium mb-6">Media Content</h3>
<div className="space-y-4 text-white/70 text-sm mb-8">
<p>You have a flat product image on a white background. Your customers want to see it styled, in context, on a model, in the right season.</p>
<p>Cernel generates product imagery that matches your brand — packshots, environment shots, seasonal visuals, and user-generated-style content. All from the product data and a single source image.</p>
<p>Upload your brand guidelines and reference images once. The platform learns your visual identity and applies it consistently across every product, every collection, every market.</p>
<p>No photoshoots. No creative agency timelines. Product imagery at the speed your business needs it.</p>
</div>
<a className="inline-flex bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2 rounded-full text-xs font-medium transition-colors" href="#">
                    Learn more
                </a>
</div>

<div className="relative w-full rounded-2xl flex items-center justify-center p-4">
<div className="grid grid-cols-3 gap-4 w-full max-w-xl">

<div className="col-span-1 bg-white rounded flex flex-col overflow-hidden h-[280px]">
<div className="text-[0.65rem] text-black/50 p-2 border-b border-black/5 flex justify-between">
                            Product Image <i className="w-3 h-3" data-lucide="expand"></i>
</div>
<div className="flex-1 bg-neutral-100 flex items-center justify-center p-4">

<div className="w-16 h-32 bg-neutral-200 rounded"></div>
</div>
</div>

<div className="col-span-2 grid grid-cols-2 gap-4 h-[280px]">
<div className="bg-white rounded flex flex-col overflow-hidden">
<div className="text-[0.65rem] text-black/50 p-2 border-b border-black/5 flex justify-between">On Model <i className="w-3 h-3" data-lucide="expand"></i></div>
<div className="flex-1 bg-neutral-100"><img alt="Model" className="w-full h-full object-cover opacity-50" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69821510920d779ea89ab8b0_6a888580447f066e4f6abe6051b20706_unnamed%209.jpg"/></div>
</div>
<div className="bg-white rounded flex flex-col overflow-hidden">
<div className="text-[0.65rem] text-black/50 p-2 border-b border-black/5 flex justify-between">Environment <i className="w-3 h-3" data-lucide="expand"></i></div>
<div className="flex-1 bg-neutral-200"></div>
</div>
<div className="bg-white rounded flex flex-col overflow-hidden">
<div className="text-[0.65rem] text-black/50 p-2 border-b border-black/5 flex justify-between">Season <i className="w-3 h-3" data-lucide="expand"></i></div>
<div className="flex-1 bg-neutral-200"></div>
</div>
<div className="bg-white rounded flex flex-col overflow-hidden">
<div className="text-[0.65rem] text-black/50 p-2 border-b border-black/5 flex justify-between">User Generated <i className="w-3 h-3" data-lucide="expand"></i></div>
<div className="flex-1 bg-neutral-100"></div>
</div>
</div>
</div>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 relative z-10 items-center">
<div className="relative h-[400px] w-full border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8 order-2 lg:order-1">

<div className="flex flex-wrap gap-4 justify-center items-center">
<img alt="DK" className="w-12 h-12" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69807f6224078de7b8f292ae_546faea5b5529734c054ae9ff0393399_Group%201000005590.svg"/>
<img alt="UK" className="w-12 h-12" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69807f629af479d408ab3891_aa975f62a3496ab45455fbdbaebb20cb_Group%201000005589.svg"/>
<img alt="DE" className="w-12 h-12" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69807f62e087414bc6e43467_1ace4c33859fef6b47d51d63f445a95b_Group%201000005592.svg"/>
<img alt="FR" className="w-12 h-12" src="https://cdn.prod.website-files.com/6960fddc2b1785539a5b9558/69807f62ecf57c3e4e9155bb_20faac6f6755b4a5cf77e6b59408111e_Group%201000005591.svg"/>
</div>
</div>
<div className="max-w-md lg:ml-auto order-1 lg:order-2">
<h3 className="text-2xl font-medium mb-6">Translations</h3>
<div className="space-y-4 text-white/70 text-sm mb-8">
<p>Expanding to a new market shouldn't mean hiring a new content team.</p>
<p>Cernel doesn't just translate — it adapts. Set your tone of voice and select your target markets. The platform generates culturally adapted product descriptions in every language, maintaining your brand voice while speaking naturally to local customers.</p>
<p>Danish, English, German, French, Swedish — and growing. Each translation is generated from the enriched product data, not from a source text, so it reads like original content in every language.</p>
<p>One product. Many markets. Zero manual translation work.</p>
</div>
<a className="inline-flex bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2 rounded-full text-xs font-medium transition-colors" href="#">
                    Learn more
                </a>
</div>
</div>

<div className="px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
<div className="max-w-md">
<h3 className="text-2xl font-medium mb-6">Feed Optimization</h3>
<div className="space-y-4 text-white/70 text-sm mb-8">
<p>Your products don't just live on your webshop. They need to be found — on Google Shopping, Amazon, Shopify, and increasingly inside AI-powered search.</p>
<p>Cernel maps your product data to the exact attribute requirements of every channel. Google color, Amazon fit type, Shopify metafields — automatically generated, formatted, and kept up to date.</p>
<p>Your supplier calls it "midnight blue." Your customer searches for "navy blue." Cernel knows the difference.</p>
</div>
<a className="inline-flex bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2 rounded-full text-xs font-medium transition-colors" href="#">
                    Learn more
                </a>
</div>
<div className="relative h-[400px] w-full border border-white/10 rounded-2xl bg-black/20 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8">

<div className="w-full h-full border border-white/5 grid grid-cols-4 grid-rows-4 relative">
<div className="col-start-2 row-start-2 border-b border-r border-white/10"></div>
<div className="col-start-3 row-start-3 border-t border-l border-white/10 relative">
<div className="absolute -top-1 -left-1 w-2 h-2 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-b border-neutral-lighter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<span className="text-xs font-medium text-neutral-darker uppercase tracking-wider mb-4 block">Our Vision</span>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight leading-tight text-neutral-darkest mb-12">
                    Humans should do valuable and creative tasks, not mindless repetition
                </h2>
<a className="inline-flex bg-neutral-darker text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition-colors" href="#">
                    Andreas Busch
                </a>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-neutral-darker">
<div className="space-y-6">
<p className="font-medium text-neutral-darkest">Today, online brands manage millions of product data points manually, on multiple channels, and in many markets. This in itself is close to impossible to maintain and it's not viable for any business.</p>
<p>As searches move into AI chats, the amount of data needed to be tied to every product multiplies by an order of magnitude. When these new search patterns take over, no brand can remain relevant online without the help of AI.</p>
<p>We've created Cernel as a platform that lets us gather and enrich all siloed product data, structure it into queryable sources, and feed it to our AI agents that have a fully optimized context to work from.</p>
</div>
<div className="space-y-6">
<p>And the killer feature - it's all done automatically.</p>
<p>Handling product data automatically is a great starting point, but it's only the beginning.</p>
<p>We believe that one day we will be able to tie the entire ecommerce value chain together and run all repetitive tasks with minimal human intervention.</p>
<p>Essentially we do this to free humans from tasks that neither bring joy or a sense of fulfillment, so they, in the future, can do much more valuable and creative work.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#232323] text-white py-24 text-center px-4">
<span className="text-xs font-medium text-white/50 mb-4 block">Join today</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tighter mb-6">
            Want to try Cernel?
        </h2>
<p className="text-white/70 mb-8 max-w-md mx-auto">
            Join our growing community of brands and retailers who have chosen Cernel to resolve their product onboarding nightmare.
        </p>
<a className="inline-block bg-primary text-black px-8 py-3 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors" href="#">
            Book demo
        </a>
</section>

<footer className="bg-white border-t border-neutral-lighter py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

<div>
<svg className="text-neutral-darkest" fill="none" height="18" viewbox="0 0 100 30" width="60" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15C15 23.2843 8.28427 30 0 30L0 0C8.28427 0 15 6.71573 15 15Z" fill="currentColor"></path>
<path d="M35 15C35 23.2843 28.2843 30 20 30L20 0C28.2843 0 35 6.71573 35 15Z" fill="currentColor"></path>
</svg>
</div>

<div className="text-sm text-neutral-darker space-y-2">
<p className="font-medium text-neutral-darkest mb-4">Cernel ApS</p>
<p>+45 53 57 81 01</p>
<p>mb@cernel.ai</p>
<p className="mt-4">Dalgas Avenue 2F, 3<br/>8000 Aarhus C</p>
<p className="mt-4">CVR: 44052857</p>
</div>

<div className="text-sm">
<p className="font-medium text-neutral-darkest mb-4">Products</p>
<ul className="space-y-3 text-neutral-darker">
<li><a className="hover:text-black" href="#">Product Data</a></li>
<li><a className="hover:text-black" href="#">Media Content</a></li>
<li><a className="hover:text-black" href="#">Market Optimization</a></li>
</ul>
<p className="font-medium text-neutral-darkest mb-4 mt-8">Resources</p>
<ul className="space-y-3 text-neutral-darker">
<li><a className="hover:text-black" href="#">Docs</a></li>
</ul>
</div>

<div className="text-sm">
<p className="font-medium text-neutral-darkest mb-4">Company</p>
<ul className="space-y-3 text-neutral-darker">
<li><a className="hover:text-black" href="#">About</a></li>
<li><a className="hover:text-black" href="#">Career</a></li>
<li><a className="hover:text-black" href="#">News</a></li>
</ul>
<p className="font-medium text-neutral-darkest mb-4 mt-8">Legal</p>
<ul className="space-y-3 text-neutral-darker">
<li><a className="hover:text-black" href="#">Terms and Conditions</a></li>
<li><a className="hover:text-black" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black" href="#">Sub-processor</a></li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-neutral-lighter text-xs text-neutral-darker flex flex-col md:flex-row justify-between items-center gap-4">
<p>Cernel © 2023-2026</p>

</div>
</footer>


    </>
  );
}
