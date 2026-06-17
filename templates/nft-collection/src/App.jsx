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



        function openModal(imageSrc) {
            const modal = document.getElementById('flipCardModal');
            const modalImage = document.getElementById('modalImage');
            
            modalImage.src = imageSrc;
            modal.classList.add('active');
            
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('flipCardModal');
            modal.classList.remove('active');
            
            // Restore body scroll
            document.body.style.overflow = 'hidden';
        }

        // Close modal when clicking outside the card
        document.getElementById('flipCardModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
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
      

<div className="flip-card-container" id="flipCardModal">
<div className="flip-card">
<div className="flip-card-inner">
<div className="flip-card-front">
<div className="">Click to reveal image</div>
</div>
<div className="flip-card-back">
<button className="close-btn" onclick="closeModal()">×</button>
<img alt="Full size image" className="fullsize-image cursor-pointer" id="modalImage" onclick="window.location.href='https://digitaldynamics.uk/wp-content/uploads/2025/12/bastard-cat-5.png'" role="button" src="https://www.aura.build/editor/8f87b81c-24e2-4421-b5cf-15f89550b7dd"/>
</div>
</div>
</div>
</div>
<div className="overflow-hidden w-full h-screen">
<section className="overflow-hidden flex w-full h-screen relative gap-x-4 gap-y-4 items-center justify-center">

<div className="pointer-events-none z-10 noise-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<div className="perspective flex w-full h-full items-center justify-center">
<img alt="Pixel Pacas Logo" className="select-none z-50 w-auto h-6 object-contain absolute top-6 left-6" src="https://digitaldynamics.uk/wp-content/uploads/2025/12/pixelpacas.png"/>
<div className="gap-4 flex-none grid grid-rows-4 grid-cols-1 z-20 w-[150vw] h-[150vh] relative perspective-inner" style={{}}>

<div className="grid gap-4 grid-cols-7 row-1 gap-x-4 gap-y-4" style={{}}>
<div className="grid-item overflow-hidden w-full h-full rounded-lg relative" onclick="openModal('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&amp;auto=format&amp;fit=crop')" style={{}}>
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp'}}></div>
</div>
<div className="grid-item overflow-hidden w-full h-full rounded-lg relative" onclick="openModal('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center cursor-default w-full h-full bg-cover" onclick="event.stopPropagation()" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/LOGO-300-GIF-2.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-9.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/Pixel-Paca-Clouds-Pink.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/PixelPaca-GIF-Unicorn-Cloud-3.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/Paca-3.png\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1600&amp;auto=format&amp;fit=crop')">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&amp'}}></div>
</div>
</div>

<div className="grid gap-4 grid-cols-7 row-2">
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&amp;auto=format&amp;fit=crop')">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-4.gif\')'}}></div>
</div>
<div className="grid-item overflow-hidden w-full h-full rounded-lg relative" onclick="openModal('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" onclick="openModal('https://digitaldynamics.uk/wp-content/uploads/2025/12/Freddie-Live-at-Wembly-July-13-1985.png'); event.stopPropagation();" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-6.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-7.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-5.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/Pixel-Paca-star-wars.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/PixelPaca-GIF-Unicorn-Cloud-4.gif\')'}}></div>
</div>
</div>

<div className="grid gap-4 grid-cols-7 row-3">
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1600&amp;auto=format&amp;fit=crop')">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/PixelPaca-GIF-Unicorn-Cloud-3.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/Paca-20.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-1.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/Pixel-Paca-Clouds-blue.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-8.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=1600&amp;auto=format&amp;fit=crop')">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&amp'}}></div>
</div>
</div>

<div className="grid gap-4 grid-cols-7 row-4">
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&amp;auto=format&amp;fit=crop')">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1600&amp;auto=format&amp;fit=crop')">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/Paca-14.png\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-3.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-11.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=1600&amp;auto=format&amp;fit=crop')">
<div className="bg-center w-full h-full bg-cover" style={{backgroundImage: 'url(\'https://digitaldynamics.uk/wp-content/uploads/2025/12/special-10.gif\')'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-lg" onclick="openModal('https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=1600&amp;auto=format&amp;fit=crop')">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?w=800&amp'}}></div>
</div>
</div>
</div>
</div>
</section>
</div>


    </>
  );
}
