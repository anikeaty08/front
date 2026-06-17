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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // 3D Background with Three.js
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container.appendChild(renderer.domElement);
        
        // Create floating particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 100;
        const posArray = new Float32Array(particlesCount * 3);
        
        for(let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }
        
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        
        const particle
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
      

<div id="canvas-container"></div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-20 left-10 animate-float-icon" style={{animationDelay: '0s'}}>
<i className="w-8 h-8 text-primary/20" data-lucide="hotel"></i>
</div>
<div className="absolute top-40 right-20 animate-float-icon" style={{animationDelay: '0.5s'}}>
<i className="w-10 h-10 text-accent/20" data-lucide="trending-up"></i>
</div>
<div className="absolute top-60 left-1/4 animate-float-icon" style={{animationDelay: '1s'}}>
<i className="w-6 h-6 text-primary/15" data-lucide="bar-chart-3"></i>
</div>
<div className="absolute bottom-40 right-1/3 animate-float-icon" style={{animationDelay: '1.5s'}}>
<i className="w-8 h-8 text-yellow-500/20" data-lucide="star"></i>
</div>
<div className="absolute bottom-20 left-20 animate-float-icon" style={{animationDelay: '2s'}}>
<i className="w-12 h-12 text-accent/15" data-lucide="building-2"></i>
</div>
<div className="absolute top-1/3 right-10 animate-float-icon" style={{animationDelay: '2.5s'}}>
<i className="w-7 h-7 text-primary/20" data-lucide="coins"></i>
</div>
<div className="absolute bottom-1/3 left-1/3 animate-float-icon" style={{animationDelay: '3s'}}>
<i className="w-9 h-9 text-yellow-400/15" data-lucide="trophy"></i>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#home">
<div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center animate-pulse-glow">
<span className="text-white font-bold text-lg tracking-tighter">ZR</span>
</div>
<div className="hidden sm:block">
<span className="text-white font-semibold tracking-tight group-hover:text-primary transition-colors">ZAKI</span>
<span className="text-primary text-xs block -mt-1 tracking-wide">REVENUE SOLUTIONS</span>
</div>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="nav-link text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1" href="#home">
<i className="w-4 h-4 animate-wave" data-lucide="home"></i> Home
                    </a>
<a className="nav-link text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1" href="#about">
<i className="w-4 h-4 animate-wave" data-lucide="user" style={{animationDelay: '0.1s'}}></i> About
                    </a>
<a className="nav-link text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1" href="#services">
<i className="w-4 h-4 animate-wave" data-lucide="briefcase" style={{animationDelay: '0.2s'}}></i> Services
                    </a>
<a className="nav-link text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1" href="#portfolio">
<i className="w-4 h-4 animate-wave" data-lucide="folder" style={{animationDelay: '0.3s'}}></i> Portfolio
                    </a>
<a className="nav-link text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1" href="#testimonials">
<i className="w-4 h-4 animate-wave" data-lucide="message-circle" style={{animationDelay: '0.4s'}}></i> Reviews
                    </a>
<a className="nav-link text-sm text-gray-300 hover:text-primary transition-colors flex items-center gap-1" href="#contact">
<i className="w-4 h-4 animate-wave" data-lucide="mail" style={{animationDelay: '0.5s'}}></i> Contact
                    </a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full text-primary text-sm hover:bg-primary/10 transition-all group" href="tel:+919876543210">
<i className="w-4 h-4 group-hover:animate-bounce" data-lucide="phone"></i>
<span>Call Now</span>
</a>
<a className="px-4 py-2 gradient-primary text-white font-medium rounded-full text-sm hover:scale-105 transition-transform animate-pulse-glow" href="#contact">
                        Book Consultation
                    </a>
<button className="lg:hidden text-white p-2" id="menuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="hidden lg:hidden glassmorphism-dark mx-4 rounded-2xl p-6 mt-2" id="mobileMenu">
<div className="flex flex-col gap-4">
<a className="text-gray-300 hover:text-primary transition-colors py-2 flex items-center gap-2" href="#home">
<i className="w-4 h-4" data-lucide="home"></i> Home
                </a>
<a className="text-gray-300 hover:text-primary transition-colors py-2 flex items-center gap-2" href="#about">
<i className="w-4 h-4" data-lucide="user"></i> About
                </a>
<a className="text-gray-300 hover:text-primary transition-colors py-2 flex items-center gap-2" href="#services">
<i className="w-4 h-4" data-lucide="briefcase"></i> Services
                </a>
<a className="text-gray-300 hover:text-primary transition-colors py-2 flex items-center gap-2" href="#portfolio">
<i className="w-4 h-4" data-lucide="folder"></i> Portfolio
                </a>
<a className="text-gray-300 hover:text-primary transition-colors py-2 flex items-center gap-2" href="#testimonials">
<i className="w-4 h-4" data-lucide="message-circle"></i> Reviews
                </a>
<a className="text-gray-300 hover:text-primary transition-colors py-2 flex items-center gap-2" href="#contact">
<i className="w-4 h-4" data-lucide="mail"></i> Contact
                </a>
</div>
</div>
</header>

<a className="whatsapp-float fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" href="https://wa.me/919876543210" target="_blank">
<svg className="w-7 h-7 text-white" fill="currentColor" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
</a>

<section className="hero-gradient min-h-screen relative overflow-hidden pt-20" id="home">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-morph"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-morph" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/5 rounded-full animate-spin-reverse"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="animate-orbit" style={{animationDuration: '15s'}}>
<i className="w-8 h-8 text-primary/40" data-lucide="hotel"></i>
</div>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="animate-orbit" style={{animationDuration: '20s', animationDelay: '-5s'}}>
<i className="w-6 h-6 text-accent/40" data-lucide="trending-up"></i>
</div>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="animate-orbit" style={{animationDuration: '25s', animationDelay: '-10s'}}>
<i className="w-7 h-7 text-yellow-400/30" data-lucide="star"></i>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full mb-6 animate-bounce-3d">
<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
<span className="text-xs text-gray-400">India's Leading Revenue Management Experts</span>
<i className="w-4 h-4 text-primary animate-spin-slow" data-lucide="sparkles"></i>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
<span className="text-white">Revolutionizing</span><br/>
<span className="text-primary">Hotel Revenue</span><br/>
<span className="text-white">with </span><span className="text-accent">AI</span><span className="text-white"> + Expertise</span>
</h1>
<p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                        Smart Revenue Growth for Smart Hotels. Transform your property's performance with data-driven strategies and cutting-edge technology.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
<a className="px-8 py-4 gradient-primary text-white font-medium rounded-full hover:scale-105 transition-transform shadow-lg shadow-primary/30 flex items-center justify-center gap-2 animate-pulse-glow" href="#contact">
<i className="w-5 h-5 animate-bounce" data-lucide="calendar"></i>
                            Book Free Consultation
                        </a>
<a className="px-8 py-4 glassmorphism text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2 group" href="https://wa.me/919876543210">
<svg className="w-5 h-5 text-green-400 group-hover:animate-bounce" fill="currentColor" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
                            WhatsApp Now
                        </a>
</div>

<div className="grid grid-cols-3 gap-6">
<div className="text-center lg:text-left group">
<div className="flex items-center justify-center lg:justify-start gap-2">
<i className="w-6 h-6 text-primary group-hover:animate-bounce" data-lucide="building-2"></i>
<div className="text-3xl lg:text-4xl font-semibold text-primary counter" data-target="150">0</div>
</div>
<div className="text-xs text-gray-500 mt-1">Hotels Managed</div>
</div>
<div className="text-center lg:text-left group">
<div className="flex items-center justify-center lg:justify-start gap-2">
<i className="w-6 h-6 text-accent group-hover:animate-bounce" data-lucide="trending-up"></i>
<div className="text-3xl lg:text-4xl font-semibold text-accent counter" data-target="40">0</div>
</div>
<div className="text-xs text-gray-500 mt-1">% Avg. Growth</div>
</div>
<div className="text-center lg:text-left group">
<div className="flex items-center justify-center lg:justify-start gap-2">
<i className="w-6 h-6 text-primary group-hover:animate-bounce" data-lucide="map-pin"></i>
<div className="text-3xl lg:text-4xl font-semibold text-primary counter" data-target="25">0</div>
</div>
<div className="text-xs text-gray-500 mt-1">Cities Covered</div>
</div>
</div>
</div>

<div className="relative perspective-1000">
<div className="animate-float-3d transform-3d">

<div className="relative mb-6">
<div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl animate-morph"></div>
<img alt="Luxury Hotel" className="relative rounded-3xl shadow-2xl image-3d w-full h-64 object-cover border border-white/10" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-4 right-4 glassmorphism rounded-full px-4 py-2 flex items-center gap-2">
<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
<span className="text-xs text-white">Live Dashboard</span>
</div>
</div>

<div className="glassmorphism-dark rounded-3xl p-6 shadow-2xl relative animate-tilt-3d">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<i className="w-6 h-6 text-accent animate-pulse" data-lucide="activity"></i>
<div>
<h3 className="text-lg font-medium text-white">Revenue Dashboard</h3>
<p className="text-xs text-gray-400">Real-time Analytics</p>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full">
<span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
<span className="text-xs text-accent">Live</span>
</div>
</div>

<div className="h-32 flex items-end gap-2 mb-6">
<div className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-lg graph-bar" style={{height: '40%', animationDelay: '0.1s'}}></div>
<div className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-lg graph-bar" style={{height: '60%', animationDelay: '0.2s'}}></div>
<div className="flex-1 bg-gradient-to-t from-accent/80 to-accent/20 rounded-t-lg graph-bar" style={{height: '45%', animationDelay: '0.3s'}}></div>
<div className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-lg graph-bar" style={{height: '80%', animationDelay: '0.4s'}}></div>
<div className="flex-1 bg-gradient-to-t from-accent/80 to-accent/20 rounded-t-lg graph-bar" style={{height: '65%', animationDelay: '0.5s'}}></div>
<div className="flex-1 bg-gradient-to-t from-primary/80 to-primary/20 rounded-t-lg graph-bar" style={{height: '90%', animationDelay: '0.6s'}}></div>
<div className="flex-1 bg-gradient-to-t from-accent/80 to-accent/20 rounded-t-lg graph-bar" style={{height: '100%', animationDelay: '0.7s'}}></div>
</div>

<div className="grid grid-cols-3 gap-3">
<div className="glassmorphism rounded-xl p-3 text-center group hover:bg-primary/10 transition-colors">
<i className="w-4 h-4 text-primary mx-auto mb-1 group-hover:animate-bounce" data-lucide="indian-rupee"></i>
<div className="text-primary text-lg font-semibold">8.5L</div>
<div className="text-xs text-gray-400">RevPAR</div>
</div>
<div className="glassmorphism rounded-xl p-3 text-center group hover:bg-accent/10 transition-colors">
<i className="w-4 h-4 text-accent mx-auto mb-1 group-hover:animate-bounce" data-lucide="arrow-up-right"></i>
<div className="text-accent text-lg font-semibold">+42%</div>
<div className="text-xs text-gray-400">Growth</div>
</div>
<div className="glassmorphism rounded-xl p-3 text-center group hover:bg-blue-500/10 transition-colors">
<i className="w-4 h-4 text-blue-400 mx-auto mb-1 group-hover:animate-bounce" data-lucide="bed"></i>
<div className="text-blue-400 text-lg font-semibold">89%</div>
<div className="text-xs text-gray-400">Occupancy</div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 glassmorphism rounded-2xl p-4 shadow-xl animate-bounce-3d" style={{animationDelay: '0.5s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-accent animate-pulse" data-lucide="trending-up"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Revenue Up</div>
<div className="text-xs text-accent">+₹2.4L today</div>
</div>
</div>
</div>
<div className="absolute -bottom-4 -left-4 glassmorphism rounded-2xl p-4 shadow-xl animate-bounce-3d" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-yellow-400 animate-spin-slow" data-lucide="trophy"></i>
</div>
<div>
<div className="text-sm font-medium text-white">OTA Rank</div>
<div className="text-xs text-yellow-400">#1 in City</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
<div className="flex flex-col items-center gap-2 animate-bounce">
<span className="text-xs text-gray-400">Scroll Down</span>
<i className="w-6 h-6 text-primary" data-lucide="chevron-down"></i>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden" id="about">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-10 right-20 animate-float-icon">
<i className="w-12 h-12 text-primary/10" data-lucide="award"></i>
</div>
<div className="absolute bottom-20 left-10 animate-float-icon" style={{animationDelay: '1s'}}>
<i className="w-10 h-10 text-accent/10" data-lucide="target"></i>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="relative group">
<div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Hotel Lobby" className="relative rounded-2xl shadow-xl image-3d w-full h-40 object-cover border border-white/10" src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300&amp;h=200&amp;fit=crop"/>
</div>
<div className="relative group">
<div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Hotel Room" className="relative rounded-2xl shadow-xl image-3d w-full h-52 object-cover border border-white/10" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&amp;h=250&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="relative group">
<div className="absolute -inset-2 bg-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Hotel Pool" className="relative rounded-2xl shadow-xl image-3d w-full h-52 object-cover border border-white/10" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&amp;h=250&amp;fit=crop"/>
</div>
<div className="relative group">
<div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<img alt="Hotel Dining" className="relative rounded-2xl shadow-xl image-3d w-full h-40 object-cover border border-white/10" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&amp;h=200&amp;fit=crop"/>
</div>
</div>
</div>

<div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glassmorphism-dark rounded-2xl p-4 shadow-xl animate-float-3d">
<div className="flex items-center gap-6">
<div className="text-center">
<i className="w-5 h-5 text-primary mx-auto mb-1 animate-bounce" data-lucide="users"></i>
<div className="text-xl font-semibold text-white">500+</div>
<div className="text-xs text-gray-400">Happy Clients</div>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="text-center">
<i className="w-5 h-5 text-accent mx-auto mb-1 animate-bounce" data-lucide="calendar-check" style={{animationDelay: '0.2s'}}></i>
<div className="text-xl font-semibold text-white">10+</div>
<div className="text-xs text-gray-400">Years Exp.</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full mb-6">
<i className="w-4 h-4 text-primary animate-bounce" data-lucide="map-pin"></i>
<span className="text-xs text-gray-400">Founded in Lucknow — Serving Pan India</span>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">
<span className="text-white">About</span>
<span className="text-primary"> ZAKI </span>
<span className="text-accent">REVENUE</span>
</h2>
<p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        We are Lucknow's premier hotel revenue management company, transforming how hotels maximize their potential. Our data-driven approach combines cutting-edge technology with deep industry expertise.
                    </p>

<div className="grid sm:grid-cols-2 gap-6 mb-10">
<div className="glassmorphism rounded-2xl p-6 group hover:bg-primary/5 transition-colors card-3d">
<div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-6 h-6 text-primary" data-lucide="target"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2">Our Mission</h4>
<p className="text-sm text-gray-400">Empower every hotel with world-class revenue strategies regardless of their size.</p>
</div>
<div className="glassmorphism rounded-2xl p-6 group hover:bg-accent/5 transition-colors card-3d">
<div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-6 h-6 text-accent" data-lucide="eye"></i>
</div>
<h4 className="text-lg font-medium text-white mb-2">Our Vision</h4>
<p className="text-sm text-gray-400">To become India's most trusted partner in hospitality revenue growth.</p>
</div>
</div>

<h4 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-accent animate-pulse" data-lucide="check-circle"></i>
                        Why Hotels Choose Us
                    </h4>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="text-center group">
<div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2 group-hover:animate-bounce-3d">
<i className="w-5 h-5 text-primary" data-lucide="heart"></i>
</div>
<div className="text-2xl font-semibold text-primary counter" data-target="98">0</div>
<div className="text-xs text-gray-500 mt-1">% Retention</div>
</div>
<div className="text-center group">
<div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-2 group-hover:animate-bounce-3d">
<i className="w-5 h-5 text-accent" data-lucide="trending-up"></i>
</div>
<div className="text-2xl font-semibold text-accent counter" data-target="45">0</div>
<div className="text-xs text-gray-500 mt-1">% ADR Up</div>
</div>
<div className="text-center group">
<div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-2 group-hover:animate-bounce-3d">
<i className="w-5 h-5 text-primary" data-lucide="bar-chart"></i>
</div>
<div className="text-2xl font-semibold text-primary counter" data-target="60">0</div>
<div className="text-xs text-gray-500 mt-1">% RevPAR</div>
</div>
<div className="text-center group">
<div className="w-12 h-12 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-2 group-hover:animate-bounce-3d">
<i className="w-5 h-5 text-accent" data-lucide="headphones"></i>
</div>
<div className="text-2xl font-semibold text-accent">24/7</div>
<div className="text-xs text-gray-500 mt-1">Support</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-slate-900 relative overflow-hidden" id="services">
<div className="absolute inset-0">
<div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph"></div>
<div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-morph" style={{animationDelay: '3s'}}></div>
</div>

<div className="absolute inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-20 left-1/4 animate-orbit" style={{animationDuration: '30s'}}>
<i className="w-8 h-8 text-primary/20" data-lucide="pie-chart"></i>
</div>
<div className="absolute bottom-20 right-1/4 animate-orbit" style={{animationDuration: '25s', animationDelay: '-10s'}}>
<i className="w-6 h-6 text-accent/20" data-lucide="zap"></i>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full mb-6">
<i className="w-4 h-4 text-primary animate-spin-slow" data-lucide="sparkles"></i>
<span className="text-xs text-gray-400">Comprehensive Revenue Solutions</span>
<i className="w-4 h-4 text-accent animate-spin-slow" data-lucide="sparkles" style={{animationDirection: 'reverse'}}></i>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
<span className="text-white">Our</span>
<span className="text-primary"> Premium</span>
<span className="text-accent"> Services</span>
</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    End-to-end revenue management solutions designed to maximize your hotel's profitability
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-primary" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Dynamic Pricing</h3>
<p className="text-sm text-gray-400 mb-4">AI-powered pricing strategies that adapt to market demand in real-time.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-accent" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Revenue Management</h3>
<p className="text-sm text-gray-400 mb-4">Strategic revenue optimization with forecasting and demand analysis.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-yellow-400" data-lucide="trophy"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">OTA Ranking Boost</h3>
<p className="text-sm text-gray-400 mb-4">Improve visibility on Booking.com, MakeMyTrip, Goibibo &amp; more.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-purple-400" data-lucide="git-branch"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Channel Manager</h3>
<p className="text-sm text-gray-400 mb-4">Seamless integration across all booking channels.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-pink-500/30 to-pink-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-pink-400" data-lucide="megaphone"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Digital Marketing</h3>
<p className="text-sm text-gray-400 mb-4">SEO, PPC, Social Media campaigns for hotels.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-orange-500/30 to-orange-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-orange-400" data-lucide="search"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Competitor Analysis</h3>
<p className="text-sm text-gray-400 mb-4">Stay ahead with detailed market intelligence.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-yellow-400/30 to-yellow-400/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-yellow-300" data-lucide="star"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Review Management</h3>
<p className="text-sm text-gray-400 mb-4">Build stellar online reputation across platforms.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>

<div className="service-card glassmorphism-dark rounded-2xl p-6 group cursor-pointer preserve-3d">
<div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-cyan-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-bounce-3d">
<i className="w-7 h-7 text-cyan-400" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Website &amp; Booking</h3>
<p className="text-sm text-gray-400 mb-4">Custom hotel websites with integrated booking engine.</p>
<a className="text-primary text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4 group-hover:animate-bounce" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full mb-6">
<i className="w-4 h-4 text-primary animate-wave" data-lucide="folder"></i>
<span className="text-xs text-gray-400">Success Stories</span>
<i className="w-4 h-4 text-accent animate-wave" data-lucide="sparkles" style={{animationDelay: '0.3s'}}></i>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
<span className="text-white">Our</span>
<span className="text-primary"> Portfolio</span>
</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Real results from real hotels we've transformed
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glassmorphism-dark rounded-3xl overflow-hidden group card-3d">
<div className="relative h-56 overflow-hidden">
<img alt="Grand Heritage Hotel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 rounded-full flex items-center gap-1">
<i className="w-3 h-3 text-white animate-pulse" data-lucide="trending-up"></i>
<span className="text-xs text-white font-medium">+67% Revenue</span>
</div>
<div className="absolute top-4 right-4">
<i className="w-8 h-8 text-yellow-400 animate-bounce-3d" data-lucide="award"></i>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                            Grand Heritage Hotel
                            <i className="w-5 h-5 text-accent" data-lucide="verified"></i>
</h3>
<p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-primary" data-lucide="map-pin"></i>
                            Lucknow • 120 Rooms
                        </p>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center group/stat">
<i className="w-4 h-4 text-primary mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="indian-rupee"></i>
<div className="text-primary text-lg font-semibold">+67%</div>
<div className="text-xs text-gray-500">RevPAR</div>
</div>
<div className="text-center group/stat">
<i className="w-4 h-4 text-accent mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="arrow-up"></i>
<div className="text-accent text-lg font-semibold">+45%</div>
<div className="text-xs text-gray-500">ADR</div>
</div>
<div className="text-center group/stat">
<i className="w-4 h-4 text-blue-400 mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="bed"></i>
<div className="text-blue-400 text-lg font-semibold">92%</div>
<div className="text-xs text-gray-500">Occupancy</div>
</div>
</div>

<div className="flex items-end gap-4 h-20 p-3 glassmorphism rounded-xl">
<div className="flex-1 text-center">
<div className="h-6 bg-gray-600 rounded-t mb-2"></div>
<span className="text-xs text-gray-500">Before</span>
</div>
<div className="flex-1 text-center">
<div className="h-14 bg-gradient-to-t from-primary to-primary/50 rounded-t mb-2 graph-bar"></div>
<span className="text-xs text-primary">After</span>
</div>
</div>
</div>
</div>

<div className="glassmorphism-dark rounded-3xl overflow-hidden group card-3d">
<div className="relative h-56 overflow-hidden">
<img alt="Royal Palm Resort" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 rounded-full flex items-center gap-1">
<i className="w-3 h-3 text-white animate-pulse" data-lucide="trending-up"></i>
<span className="text-xs text-white font-medium">+82% Revenue</span>
</div>
<div className="absolute top-4 right-4">
<i className="w-8 h-8 text-yellow-400 animate-bounce-3d" data-lucide="crown"></i>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                            Royal Palm Resort
                            <i className="w-5 h-5 text-accent" data-lucide="verified"></i>
</h3>
<p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-primary" data-lucide="map-pin"></i>
                            Jaipur • 85 Rooms
                        </p>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center group/stat">
<i className="w-4 h-4 text-primary mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="indian-rupee"></i>
<div className="text-primary text-lg font-semibold">+82%</div>
<div className="text-xs text-gray-500">RevPAR</div>
</div>
<div className="text-center group/stat">
<i className="w-4 h-4 text-accent mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="arrow-up"></i>
<div className="text-accent text-lg font-semibold">+58%</div>
<div className="text-xs text-gray-500">ADR</div>
</div>
<div className="text-center group/stat">
<i className="w-4 h-4 text-blue-400 mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="bed"></i>
<div className="text-blue-400 text-lg font-semibold">88%</div>
<div className="text-xs text-gray-500">Occupancy</div>
</div>
</div>
<div className="flex items-end gap-4 h-20 p-3 glassmorphism rounded-xl">
<div className="flex-1 text-center">
<div className="h-5 bg-gray-600 rounded-t mb-2"></div>
<span className="text-xs text-gray-500">Before</span>
</div>
<div className="flex-1 text-center">
<div className="h-16 bg-gradient-to-t from-accent to-accent/50 rounded-t mb-2 graph-bar"></div>
<span className="text-xs text-accent">After</span>
</div>
</div>
</div>
</div>

<div className="glassmorphism-dark rounded-3xl overflow-hidden group card-3d">
<div className="relative h-56 overflow-hidden">
<img alt="Boutique Stay Inn" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 rounded-full flex items-center gap-1">
<i className="w-3 h-3 text-white animate-pulse" data-lucide="trending-up"></i>
<span className="text-xs text-white font-medium">+55% Revenue</span>
</div>
<div className="absolute top-4 right-4">
<i className="w-8 h-8 text-purple-400 animate-bounce-3d" data-lucide="gem"></i>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                            Boutique Stay Inn
                            <i className="w-5 h-5 text-accent" data-lucide="verified"></i>
</h3>
<p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-primary" data-lucide="map-pin"></i>
                            Delhi • 45 Rooms
                        </p>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center group/stat">
<i className="w-4 h-4 text-primary mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="indian-rupee"></i>
<div className="text-primary text-lg font-semibold">+55%</div>
<div className="text-xs text-gray-500">RevPAR</div>
</div>
<div className="text-center group/stat">
<i className="w-4 h-4 text-accent mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="arrow-up"></i>
<div className="text-accent text-lg font-semibold">+38%</div>
<div className="text-xs text-gray-500">ADR</div>
</div>
<div className="text-center group/stat">
<i className="w-4 h-4 text-blue-400 mx-auto mb-1 group-hover/stat:animate-bounce" data-lucide="bed"></i>
<div className="text-blue-400 text-lg font-semibold">95%</div>
<div className="text-xs text-gray-500">Occupancy</div>
</div>
</div>
<div className="flex items-end gap-4 h-20 p-3 glassmorphism rounded-xl">
<div className="flex-1 text-center">
<div className="h-8 bg-gray-600 rounded-t mb-2"></div>
<span className="text-xs text-gray-500">Before</span>
</div>
<div className="flex-1 text-center">
<div className="h-14 bg-gradient-to-t from-purple-500 to-purple-500/50 rounded-t mb-2 graph-bar"></div>
<span className="text-xs text-purple-400">After</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-slate-950 relative overflow-hidden" id="testimonials">
<div className="absolute inset-0">
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-morph"></div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-20 left-20 animate-float-icon">
<i className="w-8 h-8 text-primary/20" data-lucide="heart"></i>
</div>
<div className="absolute bottom-20 right-20 animate-float-icon" style={{animationDelay: '1s'}}>
<i className="w-6 h-6 text-accent/20" data-lucide="thumbs-up"></i>
</div>
<div className="absolute top-1/3 right-1/4 animate-float-icon" style={{animationDelay: '2s'}}>
<i className="w-10 h-10 text-yellow-400/15" data-lucide="smile"></i>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full mb-6">
<i className="w-4 h-4 text-primary animate-pulse" data-lucide="heart"></i>
<span className="text-xs text-gray-400">Client Love</span>
<i className="w-4 h-4 text-accent animate-pulse" data-lucide="heart" style={{animationDelay: '0.5s'}}></i>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
<span className="text-white">What Hotels</span>
<span className="text-primary"> Say About Us</span>
</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="glassmorphism-dark rounded-3xl p-8 relative card-3d group">
<div className="absolute -top-4 left-8 text-6xl text-primary/30">"</div>
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.1s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.2s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.3s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.4s'}}></i>
</div>
<p className="text-gray-300 mb-6 leading-relaxed">
                        "ZAKI transformed our revenue completely. Our OTA rankings improved drastically and we saw a 67% increase in RevPAR within 6 months!"
                    </p>
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Rajesh Kumar" className="w-12 h-12 rounded-full object-cover border-2 border-primary/50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
</div>
<div>
<div className="text-white font-medium">Rajesh Kumar</div>
<div className="text-xs text-gray-400">GM, Grand Heritage Hotel</div>
</div>
</div>
</div>

<div className="glassmorphism-dark rounded-3xl p-8 relative card-3d group">
<div className="absolute -top-4 left-8 text-6xl text-primary/30">"</div>
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.1s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.2s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.3s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.4s'}}></i>
</div>
<p className="text-gray-300 mb-6 leading-relaxed">
                        "Best decision we made was partnering with ZAKI. Their data-driven approach and 24/7 support is unmatched in the industry."
                    </p>
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Priya Sharma" className="w-12 h-12 rounded-full object-cover border-2 border-primary/50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
</div>
<div>
<div className="text-white font-medium">Priya Sharma</div>
<div className="text-xs text-gray-400">Owner, Royal Palm Resort</div>
</div>
</div>
</div>

<div className="glassmorphism-dark rounded-3xl p-8 relative card-3d group">
<div className="absolute -top-4 left-8 text-6xl text-primary/30">"</div>
<div className="flex gap-1 mb-4">
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star"></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.1s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.2s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.3s'}}></i>
<i className="w-4 h-4 text-yellow-400 fill-current animate-pulse" data-lucide="star" style={{animationDelay: '0.4s'}}></i>
</div>
<p className="text-gray-300 mb-6 leading-relaxed">
                        "From struggling with 50% occupancy to consistently hitting 90%+. ZAKI's team truly understands hotel revenue management."
                    </p>
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Amit Verma" className="w-12 h-12 rounded-full object-cover border-2 border-primary/50" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face"/>
<div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-white" data-lucide="check"></i>
</div>
</div>
<div>
<div className="text-white font-medium">Amit Verma</div>
<div className="text-xs text-gray-400">Director, Boutique Stay Inn</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden" id="contact">
<div className="absolute inset-0">
<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-morph" style={{animationDelay: '3s'}}></div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-20 right-1/4 animate-float-icon">
<i className="w-8 h-8 text-primary/15" data-lucide="mail"></i>
</div>
<div className="absolute bottom-1/3 left-20 animate-float-icon" style={{animationDelay: '1.5s'}}>
<i className="w-6 h-6 text-accent/15" data-lucide="phone"></i>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 glassmorphism rounded-full mb-6">
<i className="w-4 h-4 text-primary animate-bounce" data-lucide="send"></i>
<span className="text-xs text-gray-400">Get In Touch</span>
<i className="w-4 h-4 text-accent animate-pulse" data-lucide="heart"></i>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
<span className="text-white">Contact</span>
<span className="text-primary"> Us</span>
</h2>
<p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Ready to transform your hotel's revenue? Let's talk!
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="glassmorphism-dark rounded-3xl p-8 card-3d">
<h3 className="text-2xl font-semibold text-white tracking-tight mb-6 flex items-center gap-2">
<i className="w-6 h-6 text-primary animate-bounce" data-lucide="calendar-check"></i>
                        Book Free Consultation
                    </h3>
<form className="space-y-6" id="contactForm">
<div className="grid sm:grid-cols-2 gap-6">
<div className="group">
<label className="block text-sm text-gray-400 mb-2 flex items-center gap-1">
<i className="w-4 h-4 text-primary group-focus-within:animate-bounce" data-lucide="user"></i>
                                    Full Name
                                </label>
<input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors" name="name" placeholder="Your Name" required="" type="text"/>
</div>
<div className="group">
<label className="block text-sm text-gray-400 mb-2 flex items-center gap-1">
<i className="w-4 h-4 text-primary group-focus-within:animate-bounce" data-lucide="phone"></i>
                                    Phone Number
                                </label>
<input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
</div>
<div className="group">
<label className="block text-sm text-gray-400 mb-2 flex items-center gap-1">
<i className="w-4 h-4 text-primary group-focus-within:animate-bounce" data-lucide="mail"></i>
                                Email Address
                            </label>
<input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors" name="email" placeholder="your@email.com" required="" type="email"/>
</div>
<div className="group">
<label className="block text-sm text-gray-400 mb-2 flex items-center gap-1">
<i className="w-4 h-4 text-primary group-focus-within:animate-bounce" data-lucide="building"></i>
                                Hotel Name
                            </label>
<input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors" name="hotel" placeholder="Your Hotel Name" type="text"/>
</div>
<div className="group">
<label className="block text-sm text-gray-400 mb-2 flex items-center gap-1">
<i className="w-4 h-4 text-primary group-focus-within:animate-bounce" data-lucide="message-square"></i>
                                Message
                            </label>
<textarea className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors resize-none" name="message" placeholder="Tell us about your revenue goals..." rows="4"></textarea>
</div>
<button className="w-full py-4 gradient-primary text-white font-medium rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 animate-pulse-glow group" type="submit">
<i className="w-5 h-5 group-hover:animate-bounce" data-lucide="send"></i>
                            Send Message
                            <i className="w-5 h-5 animate-spin-slow" data-lucide="sparkles"></i>
</button>
</form>
</div>

<div className="space-y-6">

<div className="grid sm:grid-cols-3 gap-4">
<a className="glassmorphism-dark rounded-2xl p-6 text-center hover:bg-primary/10 transition-all group card-3d" href="tel:+919876543210">
<div className="w-12 h-12 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-3 group-hover:animate-bounce-3d">
<i className="w-6 h-6 text-primary" data-lucide="phone"></i>
</div>
<span className="text-sm text-white">Call Now</span>
</a>
<a className="glassmorphism-dark rounded-2xl p-6 text-center hover:bg-green-500/10 transition-all group card-3d" href="https://wa.me/919876543210">
<div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-3 group-hover:animate-bounce-3d">
<svg className="w-6 h-6 text-green-400" fill="currentColor" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path></svg>
</div>
<span className="text-sm text-white">WhatsApp</span>
</a>
<a className="glassmorphism-dark rounded-2xl p-6 text-center hover:bg-blue-500/10 transition-all group card-3d" href="mailto:info@zakirevenuesolutions.com">
<div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center mb-3 group-hover:animate-bounce-3d">
<i className="w-6 h-6 text-blue-400" data-lucide="mail"></i>
</div>
<span className="text-sm text-white">Email Us</span>
</a>
</div>

<div className="glassmorphism-dark rounded-3xl p-8 card-3d">
<h4 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
<i className="w-5 h-5 text-primary animate-float-icon" data-lucide="building-2"></i>
                            Our Office
                        </h4>
<div className="space-y-4">
<div className="flex items-start gap-4 group">
<div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-bounce">
<i className="w-5 h-5 text-primary" data-lucide="map-pin"></i>
</div>
<div>
<p className="text-white">ZAKI THE REVENUE SOLUTIONS</p>
<p className="text-sm text-gray-400">42, Hazratganj, Lucknow<br/>Uttar Pradesh 226001, India</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:animate-bounce">
<i className="w-5 h-5 text-accent" data-lucide="clock"></i>
</div>
<div>
<p className="text-white">Working Hours</p>
<p className="text-sm text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
</div>
</div>
</div>
</div>

<div className="glassmorphism-dark rounded-3xl overflow-hidden h-64 relative group">
<img alt="Office Location" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="glassmorphism rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-primary animate-pulse" data-lucide="navigation"></i>
<span className="text-sm text-white">View on Google Maps</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="external-link"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-slate-950 border-t border-white/5 relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-morph"></div>
<div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-morph" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center animate-pulse-glow">
<span className="text-white font-bold text-lg tracking-tighter">ZR</span>
</div>
<div>
<span className="text-white font-semibold tracking-tight">ZAKI</span>
<span className="text-primary text-xs block -mt-1 tracking-wide">REVENUE SOLUTIONS</span>
</div>
</div>
<p className="text-sm text-gray-400 mb-6">
                        Smart Revenue Growth for Smart Hotels. Lucknow's premier hotel revenue management company.
                    </p>
<div className="flex gap-3">
<a className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:animate-bounce" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:animate-bounce" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:animate-bounce" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group" href="#">
<i className="w-4 h-4 text-gray-400 group-hover:text-primary group-hover:animate-bounce" data-lucide="twitter"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-primary animate-wave" data-lucide="link"></i>
                        Quick Links
                    </h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#home"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Home</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#about"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>About Us</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#services"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Services</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#portfolio"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Portfolio</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#contact"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-accent animate-wave" data-lucide="briefcase" style={{animationDelay: '0.2s'}}></i>
                        Services
                    </h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#services"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Dynamic Pricing</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#services"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Revenue Management</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#services"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>OTA Ranking</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#services"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Digital Marketing</a></li>
<li><a className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group" href="#services"><i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right"></i>Review Management</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 flex items-center gap-2">
<i className="w-4 h-4 text-primary animate-wave" data-lucide="phone" style={{animationDelay: '0.4s'}}></i>
                        Contact Info
                    </h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 group">
<i className="w-4 h-4 text-primary group-hover:animate-bounce" data-lucide="map-pin"></i>
<span className="text-sm text-gray-400">Lucknow, UP, India</span>
</li>
<li className="flex items-center gap-3 group">
<i className="w-4 h-4 text-primary group-hover:animate-bounce" data-lucide="phone"></i>
<span className="text-sm text-gray-400">+91 98765 43210</span>
</li>
<li className="flex items-center gap-3 group">
<i className="w-4 h-4 text-primary group-hover:animate-bounce" data-lucide="mail"></i>
<span className="text-sm text-gray-400">info@zakirevenue.com</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="copyright"></i>
                    2024 ZAKI THE REVENUE SOLUTIONS. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
