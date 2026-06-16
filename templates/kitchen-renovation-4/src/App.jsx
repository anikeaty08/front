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
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
},
accent: {
50: '#fffbeb',
100: '#fef3c7',
200: '#fde68a',
300: '#fcd34d',
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
700: '#b45309',
800: '#92400e',
900: '#78350f',
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'shimmer': 'shimmer 3s infinite',
'shine': 'shine 3s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
'0%': { transform: 'translateX(-100%)' },
'50%': { transform: 'translateX(100%)' },
'100%': { transform: 'translateX(100%)' },
},
shine: {
'from': { 'background-position': '0 0' },
'to': { 'background-position': '-200% 0' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 bg-white/90 border-stone-200/50 border-b top-0 right-0 left-0 backdrop-blur-md" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex group-hover:bg-accent-500 transition-colors duration-300 text-white bg-stone-900 w-8 h-8 rounded-lg shadow-sm items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
</div>
<span className="group-hover:text-stone-700 transition-colors text-xl font-playfair font-medium text-stone-900 tracking-tight">
            RenovateYourKitchen.com
          </span>
</a>

<div className="hidden md:flex items-center">
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#styles">
            Styles
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#process">
            Our Process
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#portfolio">
            Portfolio
          </a>
<a className="text-sm font-medium text-stone-600 hover:text-accent-600 transition-colors px-3" href="#guide">
            Integration Guide
          </a>
<div className="h-4 w-px bg-stone-300 mx-3"></div>
<a className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-accent-600 transition-colors mr-4" href="/estimate">
            Estimate Tool
          </a>
<a className="bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0" href="/estimate">
            Start Estimate
          </a>
</div>

<button aria-label="Toggle menu" className="md:hidden p-2 text-stone-600 hover:text-stone-900" onclick="toggleMobileMenu()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="menu-closed flex flex-col bg-white/95 backdrop-blur-xl border-t border-stone-100 md:hidden absolute top-20 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#styles" onclick="closeMobileMenu()">
            Styles
          </a>
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#process" onclick="closeMobileMenu()">
            Our Process
          </a>
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#portfolio" onclick="closeMobileMenu()">
            Portfolio
          </a>
<a className="text-base font-medium text-stone-700 py-2 border-b border-stone-50" href="#guide" onclick="closeMobileMenu()">
            Integration Guide
          </a>
<a className="w-full bg-accent-500 text-white text-center text-base font-medium py-3 rounded-lg shadow-sm mt-2" href="/estimate" onclick="closeMobileMenu()">
            Start Estimate
          </a>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden bg-stone-50 pt-20 relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Luxury Kitchen Design" className="w-full h-full object-cover" fetchpriority="high" src="https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
</div>

<div className="z-10 animate-slide-up text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900/5 border border-stone-900/10 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
<span className="uppercase text-xs font-semibold text-stone-800 tracking-wide">
            Serving NY, NJ, and CT
          </span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-playfair font-medium text-stone-900 tracking-tight mb-6 drop-shadow-sm">
<span className="underline decoration-stone-300 decoration-2 underline-offset-8">
<span className="animate-shine bg-clip-text text-transparent bg-gradient-to-r from-stone-900 via-stone-500 to-stone-900 bg-[length:200%_auto]">
              Elevated Living
            </span>
</span>
<span className="block mt-4 text-stone-900">
            Begins in the Kitchen.
          </span>
</h1>
<p className="text-xl md:text-2xl text-stone-800 mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-sm">
          The Tri-State’s premier design-build authority for high-end kitchen transformations. Bespoke craftsmanship meet streamlined execution in NY, NJ, and CT.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative overflow-hidden w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-accent-500/25 transition-all duration-300 transform hover:-translate-y-0.5 isolate" href="/estimate">
<span className="relative z-10 flex items-center justify-center gap-2">
              Browse Style Collections
              <svg className="transition-transform duration-300 group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent z-0 skew-x-12"></div>
</a>
<a className="sm:w-auto hover:bg-white/80 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium text-stone-900 bg-white/70 w-full border-stone-200 border rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 shadow-sm backdrop-blur-md" href="/contact">
            Book an In-Home Consultation
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-down" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-stone-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-6 reveal">
<div className="max-w-3xl">
<div className="flex items-center gap-2 mb-3">
<div className="flex text-amber-400">
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<span className="text-sm font-medium text-stone-500">
                5.0 Average based on Client Reviews
              </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-4">
              Reimagining Luxury
            </h2>
<p className="text-lg text-stone-600 leading-relaxed">
              We have reimagined the luxury renovation experience. By combining artisanal design with a "productized" approach, we eliminate the ambiguity of custom building. Select from our signature style palettes and experience a fixed-labor, high-margin transformation that respects your time and your investment.
            </p>
</div>
</div>

<div className="-mx-6 px-6 md:mx-0 md:px-0 [&amp;::-webkit-scrollbar]:hidden overflow-hidden mask-edges" id="reviews-carousel" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="carousel-track pb-8 pt-2">

<div className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "The team transformed our Manhattan condo with the Modern Minimalist collection. Handle-less cabinets and integrated appliances look incredible. 8 weeks exactly."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  SJ
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "Chosen the Coastal Hamptons style for our Fairfield home. Fixed labor pricing gave us total peace of mind. Exceptional craftsmanship."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  MD
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Mike Davies
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "They handled all the complex Hoboken permits for our Industrial Loft kitchen. Reclaimed wood accents and professional range are a dream!"
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  JL
                </div>
<div>
<div className="text-sm font-medium text-stone-900">Jenny L</div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>

<div aria-hidden="true" className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "The team transformed our Manhattan condo with the Modern Minimalist collection. Handle-less cabinets and integrated appliances look incredible. 8 weeks exactly."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  SJ
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div aria-hidden="true" className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "Chosen the Coastal Hamptons style for our Fairfield home. Fixed labor pricing gave us total peace of mind. Exceptional craftsmanship."
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  MD
                </div>
<div>
<div className="text-sm font-medium text-stone-900">
                    Mike Davies
                  </div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
<div aria-hidden="true" className="w-[280px] md:w-[320px] flex-shrink-0 bg-stone-50 rounded-2xl p-6 border border-stone-100 flex flex-col h-full">
<div className="flex text-amber-400 mb-4">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                "They handled all the complex Hoboken permits for our Industrial Loft kitchen. Reclaimed wood accents and professional range are a dream!"
              </p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-500">
                  JL
                </div>
<div>
<div className="text-sm font-medium text-stone-900">Jenny L</div>
<div className="text-xs text-stone-400">Google Review</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 border-stone-200 border-b pt-24 pb-24 relative overflow-hidden" id="styles">
<div className="absolute inset-0 z-0 pointer-events-none relative z-10">
<div className="absolute inset-0 bg-grid-stone"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-300/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-200/40 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal text-center mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-4">
            Signature Style Collections
          </h2>
<p className="text-lg text-stone-500 max-w-2xl mx-auto">
            Select from our signature style palettes—tailored for Tri-State architecture.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

<div className="flex flex-col bg-white h-full border border-stone-100 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="overflow-hidden bg-stone-200 w-full h-64 bg-[url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80)] bg-cover bg-center rounded-2xl relative">
<span className="absolute top-5 left-5 font-medium text-white mix-blend-overlay z-20">
                Manhattan / Jersey City
              </span>
</div>
<div className="pt-6 px-3 pb-4">
<div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">
                Modern Minimalist
              </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                Handle-less cabinetry, integrated smart appliances, and slab backsplashes. Optimized for high-rise living and sleek urban aesthetics.
              </p>
</div>
</div>

<div className="flex flex-col bg-white h-full border border-stone-100 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-100">
<div className="relative w-full h-64 bg-stone-200 rounded-2xl overflow-hidden">
<span className="absolute top-5 left-5 font-medium text-white mix-blend-overlay z-20">
                Long Island / Fairfield
              </span>
<div className="bg-stone-200 bg-[url(https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="pt-6 px-3 pb-4">
<div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">
                Coastal Hamptons
              </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                Shaker-style millwork, oversized marble islands, and nautical-inspired brass accents. Airy, light-filled, and timeless.
              </p>
</div>
</div>

<div className="flex flex-col bg-white h-full border border-stone-100 rounded-[2rem] p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group reveal delay-200">
<div className="relative w-full h-64 bg-stone-200 rounded-2xl overflow-hidden">
<span className="absolute top-5 left-5 font-medium text-white mix-blend-overlay z-20">
                Brooklyn / Hoboken
              </span>
<img alt="Industrial Kitchen" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" loading="lazy" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="pt-6 px-3 pb-4">
<div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center text-accent-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path>
<path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">
                Industrial Loft
              </h3>
<p className="text-stone-500 text-sm leading-relaxed">
                Exposed brick integration, matte black hardware, reclaimed wood accents, and professional-grade ranges.
              </p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-stone-100 p-8 md:p-12 reveal">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<h3 className="text-2xl font-medium text-stone-900 mb-4 tracking-tight">
                Premium Materials &amp; Finishes
              </h3>
<p className="text-stone-500 text-lg leading-relaxed mb-6">
                We use premium products, high-grade stone imports, and
                meticulous techniques to maximize beauty for a wide variety of aesthetics.
              </p>
<a className="inline-flex items-center gap-2 text-base font-medium text-accent-600 hover:text-accent-700 transition-colors" href="/estimate">
                Ask about our custom options
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-stone-100 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-stone-200/50 cursor-default">
<span className="font-medium text-stone-700">Calacatta Borghini</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-stone-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-stone-100/50 cursor-default">
<span className="font-medium text-stone-700">Matte Black</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-amber-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-amber-100/50 cursor-default">
<span className="font-medium text-stone-700">Reclaimed Wood</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-zinc-100 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-zinc-200/50 cursor-default">
<span className="font-medium text-stone-700">Quartzite</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-orange-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-orange-100/50 cursor-default">
<span className="font-medium text-stone-700">Shaker Millwork</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-slate-50 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-slate-200/50 cursor-default">
<span className="font-medium text-stone-700">Integrated LED</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-gray-100 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-gray-200/50 cursor-default">
<span className="font-medium text-stone-700">Smart Appliances</span>
</div>

<div className="rounded-xl h-20 flex items-center justify-center text-center px-4 bg-stone-200 transition-transform duration-300 hover:-translate-y-1 shadow-sm border border-stone-300/50 cursor-default">
<span className="font-medium text-stone-700">Brass Accents</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal mb-16">
<h2 className="md:text-4xl text-3xl font-medium text-stone-900 tracking-tight">
            Why Choose Us
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 reveal group hover:bg-white hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:heart-handshake" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              Fixed Labor Pricing
            </h3>
<p className="text-stone-500 text-base">
              We eliminate the uncertainty of hourly billing, providing a clear financial roadmap.
            </p>
</div>

<div className="reveal delay-100 group hover:bg-white hover:shadow-lg transition-all duration-300 bg-stone-50 border-stone-100 border rounded-2xl p-6">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:ruler" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              Local Permit Expertise
            </h3>
<p className="text-stone-500 text-base">
              We navigate the complex building codes of NYC, Westchester, and Greenwich so you don’t have to.
            </p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 reveal delay-200 group hover:bg-white hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:clipboard-check" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="m9 14l2 2l4-4"></path>
</g>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              Curated Material Accounts
            </h3>
<p className="text-stone-500 text-base">
              Access trade-only discounts on Sub-Zero, Wolf, and Miele through our procurement team.
            </p>
</div>

<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100 reveal delay-300 group hover:bg-white hover:shadow-lg transition-all duration-300">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-accent-500 transition-colors mb-4 iconify--lucide" data-icon="lucide:shield" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<h3 className="text-xl font-medium text-stone-900 mb-2">
              Design-Build Synergy
            </h3>
<p className="text-stone-500 text-base">
              One point of contact from the first sketch to the final backsplash tile.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-stone-900 pt-24 pb-24 relative" id="process">
<div className="transform bg-stone-800/50 w-1/2 h-full absolute top-0 right-0 translate-x-1/4 skew-x-12"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 reveal">
<div className="inline-block text-accent-400 font-medium text-sm mb-4 tracking-wide uppercase">
              How It Works
            </div>
<h2 className="text-3xl md:text-5xl font-medium mb-6 tracking-tight">
              Our 4-Step Process
            </h2>
<h3 className="text-xl text-stone-300 mb-8 font-medium">
              Streamlined Execution
            </h3>
<div className="prose prose-invert prose-lg text-stone-400 mb-10 leading-relaxed">
<p>
<strong>1. Style Selection:</strong> Choose from our three signature aesthetic palettes or customize a hybrid look.
              </p>
<p className="mt-4">
<strong>2. Precision Measurement:</strong> Our team conducts a technical site survey in your Westchester, Bergen, or Fairfield home.
              </p>
<p className="mt-4">
<strong>3. Fixed-Quote Proposal:</strong> Receive a comprehensive bid covering labor and material allowances—no "estimate creep."
              </p>
<p className="mt-4">
<strong>4. White-Glove Build:</strong> We manage all local permits and construction, delivering a chef-ready kitchen in 8–12 weeks.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-accent-400 border border-stone-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm font-medium text-stone-200">
                  Fixed-Quote Proposal
                </span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-accent-400 border border-stone-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm font-medium text-stone-200">
                  8-12 Week White-Glove Build
                </span>
</div>
</div>
</div>
<div className="lg:w-1/2 reveal delay-200">
<div className="overflow-hidden aspect-[4/5] bg-center bg-stone-800 bg-[url(https://images.unsplash.com/photo-1600566753086-00f18efc2294?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80)] max-w-md bg-cover border-stone-700 border rounded-2xl mr-auto ml-auto relative shadow-2xl">
<div className="absolute bottom-6 left-6"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pb-24 relative overflow-hidden" id="faq">
<div className="absolute inset-0 z-0 pointer-events-none relative z-10">
<div className="absolute inset-0 bg-grid-stone"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-300/40 rounded-full blur-[90px] mix-blend-multiply"></div>
</div>
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
<p className="text-stone-500">
            Common questions about our process and capabilities.
          </p>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">
                How long does a typical Tri-State kitchen renovation take?
              </span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                Most of our signature transformations are completed within 8 to 12 weeks once materials arrive on-site. We prioritize aggressive scheduling to minimize downtime in your home.
              </div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal delay-100">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">
                Do you handle DOB permits in NYC or local board approvals in CT?
              </span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                Yes. Our team specializes in the specific bureaucratic requirements of Tri-State municipalities, from Manhattan Department of Buildings filings to Westchester local board variances.
              </div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal delay-200">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">What is included in the "Standard, Premium, and Luxury" tiers?</span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                All tiers include full demolition and professional installation. "Luxury" adds bespoke cabinetry, premium stone imports (e.g., Calacatta Borghini), and integrated high-end appliance suites.
              </div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal delay-200">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">Can I keep my current appliances?</span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                While we recommend a full integration for the best aesthetic result, our "Modern Minimalist" and "Industrial Loft" packages can be adapted to fit your existing high-end appliances.
              </div>
</div>
</div>

<div className="bg-white rounded-xl border border-stone-200 overflow-hidden reveal delay-200">
<button aria-expanded="false" className="accordion-btn w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors" onclick="toggleAccordion(this)">
<span className="font-medium text-stone-900">What areas do you serve specifically?</span>
<svg aria-hidden="true" className="accordion-icon iconify text-stone-400 iconify--lucide" data-icon="lucide:chevron-down" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="accordion-content bg-stone-50/50">
<div className="px-6 pb-6 pt-2 text-stone-600 text-sm leading-relaxed">
                We serve a 60-mile radius from Midtown Manhattan, including all five boroughs, Westchester, Nassau County, Bergen County, Hudson County, and Fairfield County.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-200 relative overflow-hidden" id="contact">
<div className="absolute inset-0 z-0 bg-grid-white pointer-events-none"></div>
</section>
    </>
  );
}
