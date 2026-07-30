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



// Simulate progress updates
document.addEventListener('DOMContentLoaded', function() {
  // Simulate color progress completion
  setTimeout(() => {
    const colorProgress = document.querySelector('.bg-indigo-500');
    const colorStatus = document.getElementById('colorStatus');
    const colorText = colorProgress.parentNode.parentNode.querySelector('.text-gray-500');
    const colorPercentage = colorProgress.parentNode.parentNode.querySelector('.text-indigo-600');
    
    if (colorProgress && colorStatus && colorText && colorPercentage) {
      colorProgress.style.width = '100%';
      colorStatus.classList.remove('animate-pulse', 'bg-indigo-500');
      colorStatus.classList.add('bg-green-500');
      colorText.textContent = 'Color palette exported successfully';
      colorText.classList.remove('text-gray-500');
      colorText.classList.add('text-green-600');
      colorPercentage.textContent = '100%';
      colorPercentage.classList.remove('text-indigo-600');
      colorPercentage.classList.add('text-green-600');
    }
  }, 3000);

  // Simulate component progress updates
  let componentProgress = 42;
  const componentInterval = setInterval(() => {
    componentProgress += Math.random() * 15;
    if (componentProgress >= 100) {
      componentProgress = 100;
      clearInterval(componentInterval);
      
      // Update component completion
      const compProgress = document.querySelector('.bg-orange-500');
      const compStatus = document.getElementById('componentStatus');
      const compText = compProgress.parentNode.parentNode.querySelector('.text-gray-500');
      const compPercentage = compProgress.parentNode.parentNode.querySelector('.text-orange-600');
      
      if (compProgress && compStatus && compText && compPercentage) {
        compProgress.style.width = '100%';
        compStatus.classList.remove('animate-pulse', 'bg-orange-500');
        compStatus.classList.add('bg-green-500');
        compText.textContent = 'Component library exported successfully';
        compText.classList.remove('text-gray-500');
        compText.classList.add('text-green-600');
        compPercentage.textContent = '100%';
        compPercentage.classList.remove('text-orange-600');
        compPercentage.classList.add('text-green-600');
      }
    } else {
      const compProgress = document.querySelector('.bg-orange-500');
      const compPercentage = compProgress.parentNode.parentNode.querySelector('.text-orange-600');
      if (compProgress && compPercentage) {
        compProgress.style.width = Math.round(componentProgress) + '%';
        compPercentage.textContent = Math.round(componentProgress) + '%';
      }
    }
    
    // Update overall progress
    const overallProgress = (85 + 100 + componentProgress) / 3;
    const overallBar = document.querySelector('.bg-gradient-to-r');
    const overallText = overallBar.parentNode.parentNode.querySelector('span');
    if (overallBar && overallText) {
      overallBar.style.width = Math.round(overallProgress) + '%';
      overallText.textContent = Math.round(overallProgress) + '% Complete';
    }
  }, 2000);
});



    lucide.createIcons();

    // Interactive color updates
    const colorPreview = document.getElementById('colorPreview');
    const hueSlider = document.getElementById('hueSlider');
    const satSlider = document.getElementById('satSlider');
    const lightSlider = document.getElementById('lightSlider');

    function updateColor() {
      const hue = hueSlider?.value || 248;
      const sat = satSlider?.value || 84;
      const light = lightSlider?.value || 65;
      
      if (colorPreview) {
        colorPreview.style.background = `linear-gradient(135deg, hsl(${hue}, ${sat}%, ${Math.max(light-10, 20)}%), hsl(${hue}, ${sat}%, ${Math.min(light+10, 80)}%))`;
      }
    }

    hueSlider?.addEventListener('input', updateColor);
    satSlider?.addEventListener('input', updateColor);
    lightSlider?.addEventListener('input', updateColor);
  
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("/assets/9d08ced8-659d-4f74-bc99-21ceb0980b53_3840w.jpg")`}}></div>
<div className="max-w-6xl mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<nav className="flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-gray-900 font-geist text-lg font-medium" style={{}}>Studio</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-gray-600 hover:text-gray-900 transition-colors font-geist text-sm font-medium" href="#" style={{}}>Features</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors font-geist text-sm font-medium" href="#" style={{}}>Templates</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors font-geist text-sm font-medium" href="#" style={{}}>Pricing</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors font-geist text-sm font-medium" href="#" style={{}}>Docs</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:block text-gray-600 hover:text-gray-900 transition-colors font-geist text-sm font-medium" style={{}}>
          Sign In
        </button>
<button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors font-geist text-sm font-medium" style={{}}>
          Get Started
        </button>

<button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
<svg className="w-5 h-5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>
</div><div className="fade-up mt-16 mb-16" style={{animationDelay: `0s`}}><div className="max-w-3xl text-center mr-auto ml-auto">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/25 text-gray-800 px-3 py-1.5 rounded-full mb-6 font-geist text-sm font-medium shadow-lg" style={{}}>
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
  Design System Generator
</div>
<h1 className="tracking-tight text-gray-900 mb-6 font-pt-serif text-5xl" style={{}}>
      Create beautiful design systems 
      <span className="text-5xl text-gray-600 font-pt-serif" style={{}}>in minutes, not hours</span>
</h1>
<p className="text-gray-600 mb-8 leading-relaxed font-geist text-lg font-medium" style={{}}>
      Generate cohesive color palettes, harmonious typography scales, and consistent components with our intuitive visual tools. No design experience required.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 font-geist text-lg font-medium" style={{}}>
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
        Get Started Free
      </button>
<button className="bg-white/10 backdrop-blur-xl border border-white/20 text-gray-800 px-6 py-3 rounded-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-2 font-geist text-lg font-medium shadow-lg hover:shadow-xl" style={{}}>
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="5,3 19,12 5,21"></polygon>
</svg>
        Watch Demo
      </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 mb-12">
</div>
</div></div>
<div className="max-w-6xl mr-auto ml-auto pt-0 pr-4 pb-12 pl-4">

<div className="fade-up mb-12" style={{animationDelay: `0.1s`}}>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="fade-up" style={{animationDelay: `0.2s`}}>
</div>

<div className="fade-up" style={{animationDelay: `0.3s`}}>
</div>
</div>

<div className="fade-up mt-12" style={{animationDelay: `0.4s`}}>
<div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-2xl" style={{background: `linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)`}}>
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-layers w-4 h-4 text-gray-800" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h2 className="text-gray-800 font-geist text-lg font-medium">Live Component Preview</h2>
<p className="text-gray-600 font-geist text-sm font-medium">Interactive showcase of your design system in action</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
<span className="text-gray-700 font-geist text-sm font-medium">Live Preview</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 mb-8 border-b border-white/20">
<button className="px-4 py-2 text-gray-800 border-b-2 border-gray-800 font-geist text-sm font-medium bg-white/10 backdrop-blur-sm rounded-t-lg">Components</button>
<button className="px-4 py-2 text-gray-600 hover:text-gray-800 font-geist text-sm font-medium transition-colors hover:bg-white/5 rounded-t-lg">Patterns</button>
<button className="px-4 py-2 text-gray-600 hover:text-gray-800 font-geist text-sm font-medium transition-colors hover:bg-white/5 rounded-t-lg">Layouts</button>
</div>

<div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-4 mb-8 flex items-center justify-between shadow-lg">
<div className="flex items-center gap-3">
<span className="text-gray-700 font-geist text-sm font-medium">Preview Theme:</span>
<select className="border border-white/30 bg-white/20 backdrop-blur-sm rounded-xl px-3 py-1.5 text-sm font-geist text-gray-700">
<option>Light Mode</option>
<option>Dark Mode</option>
<option>High Contrast</option>
</select>
</div>
<div className="flex items-center gap-2">
<button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 px-3 py-1.5 rounded-xl hover:bg-white/30 transition-colors font-geist text-sm font-medium shadow-sm">Reset</button>
<button className="bg-gray-800/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl hover:bg-gray-800/90 transition-colors font-geist text-sm font-medium shadow-lg">Customize</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-gray-700 font-geist text-sm font-medium">Buttons & Actions</h3>
<span className="bg-green-400/20 backdrop-blur-sm text-green-700 px-2 py-1 rounded-full text-xs font-geist font-medium border border-green-400/30">Ready</span>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 space-y-3 shadow-lg">
<button className="w-full bg-gray-800/80 backdrop-blur-sm text-white py-2.5 px-4 rounded-xl hover:bg-gray-800/90 transition-all duration-300 font-geist text-sm font-medium flex items-center justify-center gap-2 hover:shadow-lg transform hover:-translate-y-0.5 border border-gray-700/30">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12l5 5L20 7"></path>
</svg>
          Primary Action
        </button>
<button className="w-full border border-white/30 bg-white/20 backdrop-blur-sm text-gray-700 py-2.5 px-4 rounded-xl hover:bg-white/30 hover:border-white/40 transition-all duration-300 font-geist text-sm font-medium transform hover:-translate-y-0.5 shadow-sm">
          Secondary Action
        </button>
<button className="w-full text-gray-600 py-2 px-4 rounded-xl hover:bg-white/10 transition-colors font-geist text-sm font-medium underline">
          Link Action
        </button>
<div className="pt-2 text-center">
<span className="text-gray-500 font-geist text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">Hover to test interactions</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-gray-700 font-geist text-sm font-medium">Form Elements</h3>
<span className="bg-blue-400/20 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-full text-xs font-geist font-medium border border-blue-400/30">Interactive</span>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 space-y-3 shadow-lg">
<div className="relative">
<input className="w-full border border-white/30 bg-white/20 backdrop-blur-sm rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:border-transparent font-geist transition-all duration-200 text-gray-700 placeholder-gray-500" placeholder="Enter your name..." type="text" />
<div className="absolute right-3 top-3">
<svg className="text-gray-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<input className="w-full border border-white/30 bg-white/20 backdrop-blur-sm rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:border-transparent font-geist transition-all duration-200 text-gray-700 placeholder-gray-500" placeholder="your.email@example.com" type="email" />
<div className="relative">
<select className="w-full border border-white/30 bg-white/20 backdrop-blur-sm rounded-xl py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600/50 focus:border-transparent font-geist appearance-none text-gray-700">
<option>Choose a category</option>
<option>Design System</option>
<option>UI Components</option>
<option>Typography</option>
</select>
<div className="absolute right-3 top-3 pointer-events-none">
<svg className="text-gray-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="6,9 12,15 18,9"></polyline>
</svg>
</div>
</div>
<div className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-xl transition-colors">
<input className="w-4 h-4 text-gray-700 bg-white/20 backdrop-blur-sm border-white/30 rounded focus:ring-gray-600/50 focus:ring-2" id="checkbox1" type="checkbox" />
<label className="text-gray-700 font-geist text-sm font-medium cursor-pointer" htmlFor="checkbox1">Accept terms and conditions</label>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-gray-700 font-geist text-sm font-medium">Cards & Content</h3>
<span className="bg-purple-400/20 backdrop-blur-sm text-purple-700 px-2 py-1 rounded-full text-xs font-geist font-medium border border-purple-400/30">Enhanced</span>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg">
<div className="border border-white/25 bg-white/15 backdrop-blur-sm rounded-2xl p-4 hover:shadow-2xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center shadow-lg">
<svg className="w-4 h-4 text-gray-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="flex-1">
<h4 className="text-gray-800 font-geist text-sm font-medium">Sarah Johnson</h4>
<p className="text-gray-600 font-geist text-xs">Product Designer</p>
</div>
<div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20">
<div className="w-2 h-2 bg-green-400 rounded-full shadow-sm"></div>
<span className="text-gray-600 font-geist text-xs">Online</span>
</div>
</div>
<p className="text-gray-600 font-geist text-sm mb-4 leading-relaxed">Crafting beautiful user experiences with systematic design principles.</p>
<div className="flex gap-2">
<button className="flex-1 bg-gray-800/80 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-xs font-geist font-medium hover:bg-gray-800/90 transition-colors shadow-lg border border-gray-700/30">Connect</button>
<button className="border border-white/30 bg-white/20 backdrop-blur-sm text-gray-700 px-3 py-2 rounded-xl text-xs font-geist font-medium hover:bg-white/30 transition-colors shadow-sm">Message</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 pt-8 border-t border-white/20">
<div className="flex items-center justify-between mb-6">
<h3 className="text-gray-700 font-geist text-lg font-medium">Component Gallery</h3>
<div className="flex items-center gap-2">
<button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 px-3 py-1.5 rounded-xl hover:bg-white/30 transition-colors font-geist text-sm font-medium shadow-sm">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="7" rx="1" width="7" x="14" y="14"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
</svg>
</button>
<button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 px-3 py-1.5 rounded-xl hover:bg-white/30 transition-colors font-geist text-sm font-medium shadow-sm">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-colors shadow-lg">
<div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-4 shadow-lg">
<div className="flex items-center justify-between mb-4">
<h4 className="text-gray-800 font-geist text-sm font-medium">Navigation Menu</h4>
<span className="bg-blue-400/20 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-full text-xs font-geist font-medium border border-blue-400/30">Active</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-gray-800 bg-white/20 backdrop-blur-sm rounded-xl font-geist text-sm font-medium border border-white/20 shadow-sm" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9,22 9,12 15,12 15,22"></polyline>
</svg>
              Dashboard
              <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/10 rounded-xl transition-all duration-200 font-geist text-sm font-medium" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 4h2a2 2 0 0 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
</svg>
              Projects
              <span className="ml-auto bg-white/20 backdrop-blur-sm text-gray-600 px-1.5 py-0.5 rounded-lg text-xs font-geist border border-white/20">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/10 rounded-xl transition-all duration-200 font-geist text-sm font-medium" href="#">
<svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
              Settings
            </a>
</nav>
</div>
</div>

<div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/15 transition-colors shadow-lg">
<div className="space-y-3">
<div className="flex items-center justify-between mb-4">
<h4 className="text-gray-800 font-geist text-sm font-medium">Status & Alerts</h4>
<span className="bg-green-400/20 backdrop-blur-sm text-green-700 px-2 py-1 rounded-full text-xs font-geist font-medium border border-green-400/30">All Systems Go</span>
</div>
<div className="bg-green-400/15 backdrop-blur-sm border border-green-400/25 rounded-2xl p-3 hover:shadow-lg transition-all duration-200 shadow-sm">
<div className="flex items-start gap-3">
<div className="w-5 h-5 bg-green-500/80 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
</div>
<div>
<p className="text-green-800 font-geist text-sm font-medium">System Updated</p>
<p className="text-green-700 font-geist text-xs">Design tokens synchronized successfully</p>
</div>
</div>
</div>
<div className="bg-blue-400/15 backdrop-blur-sm border border-blue-400/25 rounded-2xl p-3 hover:shadow-lg transition-all duration-200 shadow-sm">
<div className="flex items-start gap-3">
<div className="w-5 h-5 bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
<svg className="text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="16" y2="12"></line>
<line x1="12" x2="12.01" y1="8" y2="8"></line>
</svg>
</div>
<div>
<p className="text-blue-800 font-geist text-sm font-medium">New Features</p>
<p className="text-blue-700 font-geist text-xs">Dark mode support now available</p>
</div>
</div>
</div>
<div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-3 hover:shadow-lg transition-all duration-200 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
<span className="text-gray-700 font-geist text-sm font-medium">System Health</span>
</div>
<div className="flex items-center gap-2">
<span className="text-gray-600 font-geist text-sm">99.9%</span>
<div className="w-16 bg-white/20 backdrop-blur-sm rounded-full h-1.5 border border-white/20">
<div className="bg-green-500 h-1.5 rounded-full shadow-sm" style={{width: `99.9%`}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 pt-8 border-t border-white/20">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-gray-800 font-geist text-lg font-medium">Export Your Design System</h3>
<p className="text-gray-600 font-geist text-sm mt-1">Choose your preferred format and start building</p>
</div>
<div className="flex items-center gap-2 bg-green-400/15 backdrop-blur-sm px-3 py-2 rounded-full border border-green-400/25">
<div className="w-2 h-2 bg-green-400 rounded-full shadow-sm"></div>
<span className="text-green-700 font-geist text-sm font-medium">Ready to Export</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<button className="group relative hover:bg-gray-800/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-white bg-gray-800/60 border-gray-700/30 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm justify-start">
<div className="flex items-center justify-between mb-3">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7,10 12,15 17,10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
<span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-geist border border-white/20">Popular</span>
</div>
<h4 className="font-geist text-sm font-medium mb-1">CSS Variables</h4>
<p className="text-gray-300 font-geist text-xs">Modern CSS custom properties</p>
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</button>
<button className="group relative bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 p-4 rounded-2xl hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
<div className="flex items-center justify-between mb-3">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polyline points="16,18 22,12 16,6"></polyline>
<polyline points="8,6 2,12 8,18"></polyline>
</svg>
<span className="bg-blue-400/20 backdrop-blur-sm text-blue-700 px-2 py-1 rounded-lg text-xs font-geist border border-blue-400/30">Dev Ready</span>
</div>
<h4 className="font-geist text-sm font-medium mb-1">Design Tokens</h4>
<p className="text-gray-600 font-geist text-xs">JSON format for any platform</p>
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</button>
<button className="group relative hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl text-gray-700 bg-white/20 border-white/30 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="flex items-center justify-between mb-3">
<svg className="text-gray-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(55, 65, 81)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<span className="bg-indigo-400/20 backdrop-blur-sm text-indigo-700 px-2 py-1 rounded-lg text-xs font-geist font-medium border border-indigo-400/30">Framework</span>
</div>
<h4 className="font-geist text-sm font-medium mb-1">Figma Plugin</h4>
<p className="text-gray-600 font-geist text-xs">Import directly to Figma projects</p>
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
</button></div></div></div><div className="fade-up bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl mt-8 pt-8 pr-8 pb-8 pl-8 shadow-2xl" style={{animationDelay: `0.5s`, background: `linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 100%)`}}>

<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl flex items-center justify-center shadow-lg">
<svg className="w-4 h-4 text-gray-800" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7,10 12,15 17,10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<div className="">
<h2 className="text-gray-800 font-geist text-lg font-medium">Export Progress</h2>
<p className="text-gray-600 font-geist text-sm font-medium">Generating your design system files</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="">
<div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-6 mb-6 shadow-lg">
<div className="flex items-center justify-between mb-4">
<h3 className="text-gray-800 font-geist text-lg font-medium">Overall Progress</h3>
<span className="bg-indigo-100/80 backdrop-blur-sm text-indigo-700 px-3 py-1 rounded-full font-geist text-sm font-medium border border-indigo-200/50">67% Complete</span>
</div>
<div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-3 mb-2 border border-white/20">
<div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full transition-all duration-700" style={{width: `67%`}}></div>
</div>
<p className="text-gray-600 font-geist text-xs font-medium">Estimated time remaining: 2-3 minutes</p>
</div>

<div className="space-y-4">
<h4 className="text-gray-800 font-geist text-lg font-medium mb-4">Export Status</h4>

<div className="flex items-start gap-3 p-3 bg-green-400/15 backdrop-blur-sm rounded-2xl border border-green-400/25 shadow-lg">
<div className="w-8 h-8 bg-green-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-green-200/50">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h5 className="text-gray-800 font-geist text-sm font-medium">Color Palette</h5>
<div className="flex items-center gap-2">
<svg className="text-green-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-green-600 font-geist text-sm font-medium">Complete</span>
</div>
</div>
<div className="w-full bg-green-200/50 backdrop-blur-sm rounded-full h-1.5 border border-green-300/30">
<div className="bg-green-500 h-1.5 rounded-full shadow-sm" style={{width: `100%`}}></div>
</div>
<p className="text-green-700 font-geist text-xs font-medium mt-1">45 color tokens generated</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 bg-indigo-400/15 backdrop-blur-sm rounded-2xl border border-indigo-400/25 shadow-lg">
<div className="w-8 h-8 bg-indigo-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-indigo-200/50">
<svg className="text-indigo-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16"></path>
<path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"></path>
<path d="M9 20h6"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h5 className="text-gray-800 font-geist text-sm font-medium">Typography Scale</h5>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-sm"></div>
<span className="text-indigo-600 font-geist text-sm font-medium">85%</span>
</div>
</div>
<div className="w-full bg-indigo-200/50 backdrop-blur-sm rounded-full h-1.5 border border-indigo-300/30">
<div className="bg-indigo-500 h-1.5 rounded-full transition-all duration-500 shadow-sm" style={{width: `85%`}}></div>
</div>
<p className="text-indigo-700 font-geist text-xs font-medium mt-1">Processing font families and scales</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 bg-purple-400/15 backdrop-blur-sm rounded-2xl border border-purple-400/25 shadow-lg">
<div className="w-8 h-8 bg-purple-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-purple-200/50">
<svg className="text-purple-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h5 className="text-gray-800 font-geist text-sm font-medium">CSS Variables</h5>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-sm"></div>
<span className="text-purple-600 font-geist text-sm font-medium">72%</span>
</div>
</div>
<div className="w-full bg-purple-200/50 backdrop-blur-sm rounded-full h-1.5 border border-purple-300/30">
<div className="bg-purple-500 h-1.5 rounded-full transition-all duration-500 shadow-sm" style={{width: `72%`}}></div>
</div>
<p className="text-purple-700 font-geist text-xs font-medium mt-1">Generating CSS custom properties</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 bg-orange-400/15 backdrop-blur-sm rounded-2xl border border-orange-400/25 shadow-lg">
<div className="w-8 h-8 bg-orange-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-orange-200/50">
<svg className="text-orange-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M9 9h6v6H9z"></path>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h5 className="text-gray-800 font-geist text-sm font-medium">Component Library</h5>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-sm"></div>
<span className="text-orange-600 font-geist text-sm font-medium">42%</span>
</div>
</div>
<div className="w-full bg-orange-200/50 backdrop-blur-sm rounded-full h-1.5 border border-orange-300/30">
<div className="bg-orange-500 h-1.5 rounded-full transition-all duration-500 shadow-sm" style={{width: `42%`}}></div>
</div>
<p className="text-orange-700 font-geist text-xs font-medium mt-1">Building reusable components</p>
</div>
</div>

<div className="flex items-start gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg">
<div className="w-8 h-8 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm border border-white/25">
<svg className="text-gray-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="16,18 22,12 16,6"></polyline>
<polyline points="8,6 2,12 8,18"></polyline>
</svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h5 className="text-gray-800 font-geist text-sm font-medium">Design Tokens</h5>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-gray-400 rounded-full shadow-sm"></div>
<span className="text-gray-600 font-geist text-sm font-medium">Pending</span>
</div>
</div>
<div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-1.5 border border-white/25">
<div className="bg-gray-400 h-1.5 rounded-full shadow-sm" style={{width: `0%`}}></div>
</div>
<p className="text-gray-600 font-geist text-xs font-medium mt-1">Waiting for components to complete</p>
</div>
</div>
</div>
</div>

<div className="">

<div className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-6 mb-6 shadow-lg">
<h4 className="text-gray-800 font-geist text-lg font-medium mb-4">Export Summary</h4>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 shadow-sm">
<div className="text-2xl font-geist font-medium text-gray-800 mb-1">45</div>
<div className="text-gray-600 font-geist text-sm font-medium">Color Variables</div>
</div>
<div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 shadow-sm">
<div className="text-2xl font-geist font-medium text-gray-800 mb-1">12</div>
<div className="text-gray-600 font-geist text-sm font-medium">Typography Styles</div>
</div>
<div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 shadow-sm">
<div className="text-2xl font-geist font-medium text-gray-800 mb-1">24</div>
<div className="text-gray-600 font-geist text-sm font-medium">UI Components</div>
</div>
<div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 border border-white/30 shadow-sm">
<div className="text-2xl font-geist font-medium text-gray-800 mb-1">187</div>
<div className="text-gray-600 font-geist text-sm font-medium">CSS Classes</div>
</div>
</div>
</div>

<div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 shadow-lg">
<h4 className="text-gray-800 font-geist text-lg font-medium mb-4">Export Formats</h4>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-green-400/15 backdrop-blur-sm rounded-xl border border-green-400/25 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-500 rounded-full shadow-sm"></div>
<span className="text-gray-700 font-geist text-sm font-medium">CSS Variables</span>
</div>
<span className="bg-green-100/80 backdrop-blur-sm text-green-700 px-2 py-1 rounded text-xs font-geist font-medium border border-green-200/50">Ready</span>
</div>
<div className="flex items-center justify-between p-3 bg-indigo-400/15 backdrop-blur-sm rounded-xl border border-indigo-400/25 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-sm"></div>
<span className="text-gray-700 font-geist text-sm font-medium">Tailwind Config</span>
</div>
<span className="bg-indigo-100/80 backdrop-blur-sm text-indigo-700 px-2 py-1 rounded text-xs font-geist font-medium border border-indigo-200/50">Processing</span>
</div>
<div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-gray-400 rounded-full shadow-sm"></div>
<span className="text-gray-600 font-geist text-sm font-medium">Figma Tokens</span>
</div>
<span className="bg-white/15 backdrop-blur-sm text-gray-600 px-2 py-1 rounded text-xs font-geist font-medium border border-white/25">Pending</span>
</div>
<div className="flex items-center justify-between p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-gray-400 rounded-full shadow-sm"></div>
<span className="text-gray-600 font-geist text-sm font-medium">Style Dictionary</span>
</div>
<span className="bg-white/15 backdrop-blur-sm text-gray-600 px-2 py-1 rounded text-xs font-geist font-medium border border-white/25">Pending</span>
</div>
</div>
</div>

<div className="mt-6">
<h4 className="text-gray-800 font-geist text-sm font-medium mb-3">Quick Actions</h4>
<div className="flex flex-col gap-2">
<button className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur-sm text-white py-2.5 px-4 rounded-xl hover:bg-gray-800/90 transition-colors font-geist text-sm font-medium disabled:bg-white/10 disabled:text-gray-500 disabled:cursor-not-allowed border border-gray-700/30 shadow-lg" disabled>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7,10 12,15 17,10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
            Export All Files
          </button>
<button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 py-2.5 px-4 rounded-xl hover:bg-white/30 transition-colors font-geist text-sm font-medium shadow-sm">
            Cancel Export
          </button>
</div>
</div>
</div>
</div>
</div>
</div>

</div>


    </>
  );
}
