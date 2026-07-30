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
      
        // Initialize UI components after DOM is fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Variables
            const frameNextBtn = document.getElementById('frameNextBtn');
            const mountNextBtn = document.getElementById('mountNextBtn');
            const mountBackBtn = document.getElementById('mountBackBtn');
            const glazingBackBtn = document.getElementById('glazingBackBtn');
            const finishBtn = document.getElementById('finishBtn');
            const footerAddToCartBtn = document.getElementById('footerAddToCartBtn');
            const arViewBtn = document.getElementById('arViewBtn');
            const closeArBtn = document.getElementById('closeArBtn');
            const viewInRoomBtn = document.getElementById('viewInRoomBtn');
            const closeModalBtn = document.getElementById('closeModalBtn');
            
            // Step navigation
            const framePage = document.getElementById('framePage');
            const mountPage = document.getElementById('mountPage');
            const glazingPage = document.getElementById('glazingPage');
            
            // Step indicators
            const step1Circle = document.getElementById('step1Circle');
            const step2Circle = document.getElementById('step2Circle');
            const step3Circle = document.getElementById('step3Circle');
            const step1Text = document.getElementById('step1Text');
            const step2Text = document.getElementById('step2Text');
            const step3Text = document.getElementById('step3Text');
            const connector1 = document.getElementById('connector1');
            const connector2 = document.getElementById('connector2');
            
            // Navigation
            frameNextBtn.addEventListener('click', function() {
                framePage.classList.remove('active');
                mountPage.classList.add('active');
                
                step1Circle.classList.remove('step-active');
                step1Circle.classList.add('step-completed');
                step2Circle.classList.remove('step-inactive');
                step2Circle.classList.add('step-active');
                
                step1Text.classList.remove('text-gray-700');
                step1Text.classList.add('text-gray-500');
                step2Text.classList.remove('text-gray-400');
                step2Text.classList.add('text-gray-700');
                
                connector1.classList.remove('bg-gray-200');
                connector1.classList.add('bg-green-500');
            });
            
            mountNextBtn.addEventListener('click', function() {
                mountPage.classList.remove('active');
                glazingPage.classList.add('active');
                
                step2Circle.classList.remove('step-active');
                step2Circle.classList.add('step-completed');
                step3Circle.classList.remove('step-inactive');
                step3Circle.classList.add('step-active');
                
                step2Text.classList.remove('text-gray-700');
                step2Text.classList.add('text-gray-500');
                step3Text.classList.remove('text-gray-400');
                step3Text.classList.add('text-gray-700');
                
                connector2.classList.remove('bg-gray-200');
                connector2.classList.add('bg-green-500');
            });
            
            mountBackBtn.addEventListener('click', function() {
                mountPage.classList.remove('active');
                framePage.classList.add('active');
                
                step2Circle.classList.remove('step-active');
                step2Circle.classList.add('step-inactive');
                step1Circle.classList.remove('step-completed');
                step1Circle.classList.add('step-active');
                
                step2Text.classList.remove('text-gray-700');
                step2Text.classList.add('text-gray-400');
                step1Text.classList.remove('text-gray-500');
                step1Text.classList.add('text-gray-700');
                
                connector1.classList.remove('bg-green-500');
                connector1.classList.add('bg-gray-200');
            });
            
            glazingBackBtn.addEventListener('click', function() {
                glazingPage.classList.remove('active');
                mountPage.classList.add('active');
                
                step3Circle.classList.remove('step-active');
                step3Circle.classList.add('step-inactive');
                step2Circle.classList.remove('step-completed');
                step2Circle.classList.add('step-active');
                
                step3Text.classList.remove('text-gray-700');
                step3Text.classList.add('text-gray-400');
                step2Text.classList.remove('text-gray-500');
                step2Text.classList.add('text-gray-700');
                
                connector2.classList.remove('bg-green-500');
                connector2.classList.add('bg-gray-200');
            });
            
            // AR Modal
            arViewBtn.addEventListener('click', function() {
                document.getElementById('arModal').style.display = 'flex';
            });
            
            closeArBtn.addEventListener('click', function() {
                document.getElementById('arModal').style.display = 'none';
            });
            
            // Close main modal
            closeModalBtn.addEventListener('click', function() {
                alert('Frame customization canceled');
            });
            
            // Frame options functionality
            const frameOptions = document.querySelectorAll('.frame-option');
            frameOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options
                    frameOptions.forEach(opt => opt.classList.remove('selected'));
                    // Add selected class to clicked option
                    this.classList.add('selected');
                });
            });
            
            // Glazing options functionality
            const glazingOptions = document.querySelectorAll('.glazing-option');
            glazingOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove selected class from all options
                    glazingOptions.forEach(opt => opt.classList.remove('selected'));
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Update preview
                    const glazingType = this.getAttribute('data-glazing');
                    const glazingLayer = document.getElementById('glazingLayer');
                    
                    // Remove all glazing classes
                    glazingLayer.classList.remove('glazing-preview-standard', 'glazing-preview-nonglare', 
                        'glazing-preview-uv', 'glazing-preview-museum', 'glazing-preview-acrylic');
                    
                    // Add the selected glazing class
                    glazingLayer.classList.add(`glazing-preview-${glazingType}`);
                });
            });
            
            // Mount style functionality
            const mountOptions = document.querySelectorAll('.mount-option');
            mountOptions.forEach(option => {
                option.addEventListener('click', function() {
                    // Remove active class from all options
                    mountOptions.forEach(opt => opt.classList.remove('active-mat'));
                    // Add active class to clicked option
                    this.classList.add('active-mat');
                });
            });
            
            // Initialize sliders
            const frameWidth = document.getElementById('frameWidth');
            const frameWidthValue = document.getElementById('frameWidthValue');
            const matWidth = document.getElementById('matWidth');
            const matWidthValue = document.getElementById('matWidthValue');
            
            frameWidth.addEventListener('input', function() {
                frameWidthValue.textContent = `${this.value}mm`;
                document.getElementById('frameLayer').style.borderWidth = `${this.value}px`;
            });
            
            matWidth.addEventListener('input', function() {
                matWidthValue.textContent = `${this.value}mm`;
                document.getElementById('matLayer').style.borderWidth = `${this.value}px`;
            });
            
            // Mat toggle
            const enableMat = document.getElementById('enableMat');
            const matOptionsContainer = document.getElementById('matOptionsContainer');
            const matLayer = document.getElementById('matLayer');
            
            enableMat.addEventListener('change', function() {
                if (this.checked) {
                    matOptionsContainer.classList.remove('hidden');
                    matLayer.style.display = 'block';
                } else {
                    matOptionsContainer.classList.add('hidden');
                    matLayer.style.display = 'none';
                }
            });
            
            // Add to cart functionality
            finishBtn.addEventListener('click', function() {
                alert('Your custom framed artwork has been added to cart!');
            });
            
            footerAddToCartBtn.addEventListener('click', function() {
                alert('Your custom framed artwork has been added to cart!');
            });
        });
    
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
      
<div className="modal-container">
<div className="modal-content">

<header className="sticky-header w-full border-b border-gray-200 animate-in" style={{animationDelay: `0.1s`}}>
<div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<div className="flex items-center">
<button className="mr-3 text-gray-500 hover:text-gray-700" id="closeModalBtn" type="button">
<svg className="lucide lucide-x w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<h1 className="text-xl font-medium">Custom Frame Selection</h1>
</div>
<div className="flex items-center">
<div className="flex space-x-2 mr-4" id="stepIndicator">
<div className="step-container">
<div className="step-circle step-active" id="step1Circle">1</div>
<span className="text-sm font-medium text-gray-700" id="step1Text">Frame</span>
</div>
<div className="h-0.5 w-6 bg-gray-200 self-center" id="connector1"></div>
<div className="step-container">
<div className="step-circle step-inactive" id="step2Circle">2</div>
<span className="text-sm font-medium text-gray-400" id="step2Text">Mount</span>
</div>
<div className="h-0.5 w-6 bg-gray-200 self-center" id="connector2"></div>
<div className="step-container">
<div className="step-circle step-inactive" id="step3Circle">3</div>
<span className="text-sm font-medium text-gray-400" id="step3Text">Glazing</span>
</div>
</div>
<div className="flex space-x-3">
<button className="flex items-center space-x-2 text-sm bg-gray-100 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-200" id="shareButton">
<svg className="lucide lucide-share-2 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span>Share</span>
</button>
<button className="flex items-center space-x-2 text-sm bg-gray-100 py-2 px-4 rounded-full hover:bg-gray-200 transition duration-200">
<svg className="lucide lucide-help-circle w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span>Help</span>
</button>
</div>
</div>
</div>
</div>
</header>
<main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-5 animate-in" style={{animationDelay: `0.2s`}}>
<div className="sticky top-24">
<div className="sm:p-8 bg-gray-50 rounded-xl mb-6 pt-6 pr-6 pb-6 pl-6">
<div className="relative art-shadow" id="artPreview" style={{height: `65vh`, maxHeight: `600px`}}>
<div className="absolute inset-0 border-[20px] border-[#8B4513] rounded-sm transition-all duration-300 ease-in-out" id="frameLayer">

<div className="frame-texture" id="frameTexture" style={{backgroundImage: `url('https://images.unsplash.com/photo-1553267751-1c148a7280a1?q=80&w=300')`}}></div>
</div>
<img alt="Artwork" className="w-full h-full object-cover rounded-sm" id="artworkImage" src="https://www.tombutlerartist.com/cdn/shop/products/eiffel-for-you-534131.jpg?v=1705695815&width=1100" />
<div className="absolute inset-[20px] border-[30px] border-white rounded-sm transition-all duration-300 ease-in-out" id="matLayer"></div>
<div className="absolute inset-[20px] transition-all duration-300 ease-in-out glazing-preview-standard" id="glazingLayer"></div>
</div>

<button className="mt-4 w-full py-3 px-4 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200" id="viewInRoomBtn" type="button">
<svg className="lucide lucide-view w-5 h-5 text-gray-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"></path><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"></path><path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"></path></svg>
<span className="text-sm font-medium text-gray-700">View in Room</span>
</button>

<button className="mt-3 w-full py-3 px-4 rounded-lg shadow-sm flex items-center justify-center space-x-2 ar-view-btn transition duration-200" id="arViewBtn" type="button">
<svg className="lucide lucide-cube w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-9 5-9-5V8l9-5 9 5v8z"></path><path d="m3 8 9 5 9-5"></path><path d="M12 3v10"></path></svg>
<span className="text-sm font-medium">View in Augmented Reality</span>
</button>
</div>
</div>
</div>

<div className="lg:col-span-7 space-y-8">

<section className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-in page active" id="framePage" style={{animationDelay: `0.3s`}}>
<div className="border-b border-gray-200 px-6 py-4">
<h2 className="text-lg font-medium">Step 1: Frame Options</h2>
</div>
<div className="p-6 space-y-5">

<div className="bg-yellow-50 border border-yellow-100 rounded-md p-3 mb-4" id="artistPreferredNotice">
<div className="flex items-center">
<svg className="lucide lucide-check-circle w-5 h-5 text-yellow-600 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-yellow-800">The artist's preferred frame settings are pre-selected for this artwork.</p>
</div>
</div>

<div className="relative dropdown-container mb-5">
<div className="flex justify-between items-center mb-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="frameMaterial">Frame Material</label>
<button className="text-xs text-yellow-600 hover:text-yellow-800" id="resetFrameMaterial" type="button">Reset</button>
</div>
<button className="flex justify-between w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-left" id="frameMaterialBtn" type="button">
<span>Wood</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu mt-1 border border-gray-200 rounded-md shadow-lg bg-white">
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-label="Wood" data-texture="https://images.unsplash.com/photo-1553267751-1c148a7280a1?q=80&w=300" data-value="wood">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#A0522D`}}></span>
<span>Wood</span>
</div>
<p className="text-xs text-gray-500 mt-1">Traditional and classic finish</p>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-label="Metal" data-texture="https://images.unsplash.com/photo-1629991299382-8b8e915475e0?q=80&w=300" data-value="metal">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#C0C0C0`}}></span>
<span>Metal</span>
</div>
<p className="text-xs text-gray-500 mt-1">Modern and sleek</p>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-label="Bamboo" data-texture="https://images.unsplash.com/photo-1602045486350-4e53a69865c6?q=80&w=300" data-value="bamboo">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#D8BC85`}}></span>
<span>Bamboo</span>
</div>
<p className="text-xs text-gray-500 mt-1">Eco-friendly, natural look</p>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50" data-label="Composite" data-texture="https://images.unsplash.com/photo-1606591199381-7c294cbc595d?q=80&w=300" data-value="composite">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#35383C`}}></span>
<span>Composite</span>
</div>
<p className="text-xs text-gray-500 mt-1">Durable, lightweight</p>
</div>
</div>
</div>

<div className="relative dropdown-container mb-5">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="frameColor">Frame Color</label>
<button className="flex justify-between w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-left" id="frameColorBtn" type="button">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#8B4513`}}></span>
<span>Walnut</span>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu mt-1 border border-gray-200 rounded-md shadow-lgbg-white">
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-color="#8B4513" data-label="Walnut" data-value="walnut">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#8B4513`}}></span>
<span>Walnut</span>
<span className="preferred-badge ml-2">
<svg className="lucide lucide-star mr-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                    Artist's Choice
                                                </span>
</div>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-color="#000000" data-label="Black" data-value="black">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#000000`}}></span>
<span>Black</span>
</div>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-color="#FFFFFF" data-label="White" data-value="white">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#FFFFFF`}}></span>
<span>White</span>
</div>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-color="#D2B48C" data-label="Natural" data-value="natural">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#D2B48C`}}></span>
<span>Natural</span>
</div>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50" data-color="#4A0404" data-label="Mahogany" data-value="mahogany">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#4A0404`}}></span>
<span>Mahogany</span>
</div>
</div>
</div>
</div>

<div className="mb-5">
<div className="flex justify-between items-center mb-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="frameWidth">Frame Width</label>
<span className="text-sm text-gray-500" id="frameWidthValue">20mm</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="frameWidth" max="40" min="10" name="frameWidth" type="range" value="20" />
</div>

<div className="mb-5">
<label className="block text-sm font-medium text-gray-700 mb-2">Frame Profile</label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="frame-option p-3 border border-gray-200 rounded-lg text-center selected" data-profile="classic">
<div className="h-16 flex items-center justify-center mb-2">
<svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
<rect fill="#8B4513" height="50" stroke="#000" strokeWidth="1" width="50" x="5" y="5"></rect>
<rect fill="white" height="40" stroke="#000" strokeWidth="1" width="40" x="10" y="10"></rect>
</svg>
</div>
<span className="text-sm">Classic</span>
<span className="preferred-badge ml-2 text-[10px]">
<svg className="lucide lucide-star mr-1" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                Artist's Choice
                                            </span>
</div>
<div className="frame-option p-3 border border-gray-200 rounded-lg text-center" data-profile="modern">
<div className="h-16 flex items-center justify-center mb-2">
<svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
<rect fill="#8B4513" height="50" stroke="#000" strokeWidth="1" width="50" x="5" y="5"></rect>
<rect fill="white" height="44" stroke="#000" strokeWidth="1" width="44" x="8" y="8"></rect>
</svg>
</div>
<span className="text-sm">Modern</span>
</div>
<div className="frame-option p-3 border border-gray-200 rounded-lg text-center" data-profile="floating">
<div className="h-16 flex items-center justify-center mb-2">
<svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="40" stroke="#000" strokeWidth="1" width="40" x="10" y="10"></rect>
<rect fill="none" height="50" stroke="#8B4513" strokeWidth="3" width="50" x="5" y="5"></rect>
</svg>
</div>
<span className="text-sm">Floating</span>
</div>
<div className="frame-option p-3 border border-gray-200 rounded-lg text-center" data-profile="ornate">
<div className="h-16 flex items-center justify-center mb-2">
<svg fill="none" height="60" viewBox="0 0 60 60" width="60" xmlns="http://www.w3.org/2000/svg">
<rect fill="#8B4513" height="50" stroke="#000" strokeWidth="1" width="50" x="5" y="5"></rect>
<rect fill="white" height="40" stroke="#000" strokeWidth="1" width="40" x="10" y="10"></rect>
<path d="M5 5L10 10M55 5L50 10M5 55L10 50M55 55L50 50" stroke="#000" strokeWidth="1"></path>
</svg>
</div>
<span className="text-sm">Ornate</span>
</div>
</div>
</div>

<div className="mt-6 flex justify-end">
<button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-200" id="frameNextBtn" type="button">
                                        Continue to Mount Options
                                        <svg className="lucide lucide-arrow-right ml-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-in page" id="mountPage" style={{animationDelay: `0.3s`}}>
<div className="border-b border-gray-200 px-6 py-4">
<h2 className="text-lg font-medium">Step 2: Mount Options</h2>
</div>
<div className="p-6 space-y-5">

<div className="flex items-center justify-between">
<label className="flex items-center cursor-pointer" htmlFor="enableMat">
<div className="mr-3">
<span className="text-sm font-medium text-gray-900">Include Matting</span>
<p className="text-xs text-gray-500">Add a decorative border around artwork</p>
</div>
</label>
<div className="relative">
<input checked className="sr-only toggle-checkbox" id="enableMat" type="checkbox" />
<div className="toggle-label block bg-gray-200 w-12 h-6 rounded-full"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
</div>
</div>
<div id="matOptionsContainer">

<div className="relative dropdown-container mb-5 mt-5">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="matColor">Mat Color</label>
<button className="flex justify-between w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-left" id="matColorBtn" type="button">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#FFFFFF`}}></span>
<span>White</span>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu mt-1 border border-gray-200 rounded-md shadow-lg bg-white">
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-color="#FFFFFF" data-label="White" data-value="white">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#FFFFFF`}}></span>
<span>White</span>
<span className="preferred-badge ml-2">
<svg className="lucide lucide-star mr-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                        Artist's Choice
                                                    </span>
</div>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-color="#F5F5F5" data-label="Off-White" data-value="offwhite">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#F5F5F5`}}></span>
<span>Off-White</span>
</div>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50 border-b border-gray-100" data-color="#000000" data-label="Black" data-value="black">
<div className="flex items-center">
<span className="color-swatch" style={{backgroundColor: `#000000`}}></span>
<span>Black</span>
</div>
</div>
<div className="dropdown-option p-3 hover:bg-gray-50" data-color="" data-label="Custom Color" data-value="custom">
<div className="flex items-center">
<span className="color-swatch" style={{background: `linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%)`}}></span>
<span>Custom Color</span>
</div>
</div>
</div>
</div>

<div className="mb-5">
<div className="flex justify-between items-center mb-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="matWidth">Mat Width</label>
<span className="text-sm text-gray-500" id="matWidthValue">30mm</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="matWidth" max="80" min="20" name="matWidth" type="range" value="30" />
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Mount Style</label>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
<div className="mount-style-preview relative cursor-pointer">
<img alt="Single Mat Preview" className="rounded-lg shadow-md w-full h-32 object-cover" src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=300" />
<div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
<div className="mount-option bg-white p-2 rounded-md active-mat" data-mount-style="single">
<span className="text-sm font-medium">Single Mat</span>
</div>
</div>
</div>
<div className="mount-style-preview relative cursor-pointer">
<img alt="Double Mat Preview" className="rounded-lg shadow-md w-full h-32 object-cover" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=300" />
<div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
<div className="mount-option bg-white p-2 rounded-md" data-mount-style="double">
<span className="text-sm font-medium">Double Mat</span>
</div>
</div>
</div>
<div className="mount-style-preview relative cursor-pointer">
<img alt="Floating Mat Preview" className="rounded-lg shadow-md w-full h-32 object-cover" src="https://images.unsplash.com/photo-1558882224-dda166733046?q=80&w=300" />
<div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
<div className="mount-option bg-white p-2 rounded-md" data-mount-style="floating">
<span className="text-sm font-medium">Floating</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex justify-between">
<button className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" id="mountBackBtn" type="button">
<svg className="lucide lucide-arrow-left mr-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                                        Back to Frame
                                    </button>
<button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" id="mountNextBtn" type="button">
                                        Continue to Glazing
                                        <svg className="lucide lucide-arrow-right ml-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-in page" id="glazingPage" style={{animationDelay: `0.3s`}}>
<div className="border-b border-gray-200 px-6 py-4">
<h2 className="text-lg font-medium">Step 3: Glazing Options</h2>
</div>
<div className="p-6 space-y-5">
<p className="text-sm text-gray-600 mb-4">Choose a glazing option that will protect your artwork while minimizing reflections.</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glazing-option border border-gray-200 rounded-lg p-4 selected" data-glazing="standard">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium">Standard Glass</h3>
<p className="text-sm text-gray-500">Basic protection</p>
</div>
<span className="text-yellow-600 font-medium">$0</span>
</div>
<ul className="text-xs text-gray-600 space-y-1">
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Clear glass finish
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Basic protection from dust
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-x w-4 h-4 text-red-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                                No UV protection
                                            </li>
</ul>
</div>
<div className="glazing-option border border-gray-200 rounded-lg p-4" data-glazing="nonglare">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium">Non-Glare Glass</h3>
<p className="text-sm text-gray-500">Reduced reflections</p>
</div>
<span className="text-yellow-600 font-medium">+$35</span>
</div>
<ul className="text-xs text-gray-600 space-y-1">
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Etched surface reduces reflections
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Ideal for brightly lit rooms
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-x w-4 h-4 text-red-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                                No UV protection
                                            </li>
</ul>
</div>
<div className="glazing-option border border-gray-200 rounded-lg p-4" data-glazing="uv">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium">UV-Protective Glass</h3>
<p className="text-sm text-gray-500">Prevents fading</p>
</div>
<span className="text-yellow-600 font-medium">+$75</span>
</div>
<ul className="text-xs text-gray-600 space-y-1">
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Blocks 99% of UV light
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Prevents artwork fading
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-x w-4 h-4 text-red-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                                Still has some reflections
                                            </li>
</ul>
</div>
<div className="glazing-option border border-gray-200 rounded-lg p-4" data-glazing="museum">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium">Museum Glass</h3>
<p className="text-sm text-gray-500">Premium protection</p>
<span className="preferred-badge text-[10px] mt-1">
<svg className="lucide lucide-star mr-1" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                                    Artist's Choice
                                                </span>
</div>
<span className="text-yellow-600 font-medium">+$120</span>
</div>
<ul className="text-xs text-gray-600 space-y-1">
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                99% anti-reflective coating
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Blocks 99% of UV light
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Virtually invisible glass
                                            </li>
</ul>
</div>
<div className="glazing-option border border-gray-200 rounded-lg p-4" data-glazing="acrylic">
<div className="flex justify-between items-start mb-3">
<div>
<h3 className="font-medium">Acrylic Plexi</h3>
<p className="text-sm text-gray-500">Lightweight and shatterproof</p>
</div>
<span className="text-yellow-600 font-medium">+$50</span>
</div>
<ul className="text-xs text-gray-600 space-y-1">
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 2424" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Lightweight and shatterproof
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Ideal for larger pieces
                                            </li>
<li className="flex items-center">
<svg className="lucide lucide-check w-4 h-4 text-green-500 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                                Includes UV protection
                                            </li>
</ul>
</div>
</div>

<div className="mt-8 flex justify-between">
<button className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" id="glazingBackBtn" type="button">
<svg className="lucide lucide-arrow-left mr-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
                                        Back to Mount
                                    </button>
<button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" id="finishBtn" type="button">
                                        Add to Cart
                                        <svg className="lucide lucide-shopping-cart ml-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</button>
</div>
</div>
</section>
</div>
</div>
</main>

<div className="sticky-bar p-4 border-t border-gray-200 animate-in" style={{animationDelay: `0.5s`}}>
<div className="max-w-6xl mx-auto flex items-center justify-between">
<div className="flex items-center">
<img alt="Artwork thumbnail" className="w-16 h-16 object-cover rounded-md mr-4" src="https://www.tombutlerartist.com/cdn/shop/products/eiffel-for-you-534131.jpg?v=1705695815&width=100" />
<div>
<h3 className="font-medium text-gray-900">Eiffel For You</h3>
<p className="text-sm text-gray-500">Tom Butler • Original Acrylic on Canvas</p>
</div>
</div>
<div className="flex items-center">
<div className="text-right mr-6">
<p className="text-sm text-gray-500">Your Price</p>
<p className="text-xl font-semibold text-gray-900">$245.00</p>
</div>
<button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" id="footerAddToCartBtn" type="button">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</div>

<div id="arModal">
<div className="ar-container">
<div className="ar-content">
<div className="ar-frame">
<img alt="Framed artwork" src="https://www.tombutlerartist.com/cdn/shop/products/eiffel-for-you-534131.jpg?v=1705695815&width=1100" />
</div>
<div className="ar-instructions">
<p className="text-sm font-medium mb-1">Use your phone to scan the room</p>
<p className="text-xs">Move your phone to place the artwork on your wall</p>
</div>
<button className="ar-close" id="closeArBtn">
<svg className="lucide lucide-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>


    </>
  );
}
