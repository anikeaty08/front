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



    function randInt(max) { return Math.floor(Math.random() * max); }
    const categories = ['nature', 'city', 'people', 'abstract'];
    const shapes = ['clip-hexagon', 'clip-circle', 'clip-diamond', 'rounded-3xl'];
    const hoverEffects = [
      'hover-zoom',
      'hover-zoomout',
      'hover-move-up',
      'hover-move-right',
      'hover-rotate',
      'hover-tilt',
      'hover-blur',
      'hover-shadow-xl',
      'hover-grayscale',
      'hover-zoom hover-move-up',
      'hover-zoom hover-rotate',
      'hover-grayscale hover-zoom',
      'hover-blur hover-zoomout',
      'hover-shadow-xl hover-rotate',
      'hover-move-up hover-tilt',
      'hover-zoomout hover-tilt',
    ];
    const images = [];
    for(let i=1; i<=104; i++) {
      const cat = categories[randInt(categories.length)];
      const shape = shapes[randInt(shapes.length)];
      const hover = hoverEffects[randInt(hoverEffects.length)];
      const url = `https://picsum.photos/seed/${cat}${i}/500/500`;
      images.push({
        id: i,
        url,
        cat,
        shape,
        hover
      });
    }
    function renderImages(filterCat='all') {
      const gallery = document.getElementById('gallery');
      gallery.innerHTML = '';
      images.forEach(img => {
        if(filterCat !== 'all' && img.cat !== filterCat) return;
        const borderColor = {
          nature: 'border-green-400',
          city: 'border-blue-400',
          people: 'border-pink-400',
          abstract: 'border-yellow-400'
        }[img.cat];
        const overlayColor = {
          nature: 'bg-green-200/40',
          city: 'bg-blue-200/40',
          people: 'bg-pink-200/40',
          abstract: 'bg-yellow-100/50'
        }[img.cat];
        gallery.innerHTML += `
          <div class="relative group ${img.cat} select-none cursor-pointer img-transition ${img.hover} w-48 h-48 mx-auto">
            <div class="absolute inset-0 glow ${borderColor} border-4 ${img.shape} pointer-events-none transition-shadow duration-300"></div>
            <div class="overflow-hidden w-full h-full ${img.shape}">
              <img src="${img.url}" alt="Image ${img.id}"
                class="w-full h-full object-cover shadow-lg ${img.shape} border-4 ${borderColor}" />
              <span class="shine ${img.shape}"></span>
              <div class="absolute inset-0 ${overlayColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-multiply ${img.shape}"></div>
            </div>
            <span class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 rounded-lg px-3 py-1 text-xs font-semibold text-gray-600 shadow backdrop-blur-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
              ${img.cat.charAt(0).toUpperCase()+img.cat.slice(1)}
            </span>
          </div>
        `;
      });
    }
    function filterImages(cat) {
      renderImages(cat);
    }
    renderImages();
  
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
      
<div className="py-10 px-4 max-w-7xl mx-auto">
<h1 className="font-extrabold text-4xl sm:text-5xl text-center text-purple-800 mb-8 drop-shadow-lg tracking-tight">Animated 100+ Image Gallery</h1>
<div className="flex flex-wrap justify-center gap-4 mb-10">
<button className="bg-purple-600 text-white px-4 py-2 rounded-full shadow hover:bg-purple-800 transition" onclick="filterImages('all')">All</button>
<button className="bg-green-600 text-white px-4 py-2 rounded-full shadow hover:bg-green-800 transition" onclick="filterImages('nature')">Nature</button>
<button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow hover:bg-blue-800 transition" onclick="filterImages('city')">City</button>
<button className="bg-pink-600 text-white px-4 py-2 rounded-full shadow hover:bg-pink-800 transition" onclick="filterImages('people')">People</button>
<button className="bg-yellow-500 text-white px-4 py-2 rounded-full shadow hover:bg-yellow-700 transition" onclick="filterImages('abstract')">Abstract</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" id="gallery">
</div>
</div>


    </>
  );
}
