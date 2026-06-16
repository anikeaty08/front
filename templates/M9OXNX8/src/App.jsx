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
      

<div className="hero-bg min-h-screen relative overflow-hidden font-poppins">
<div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE]/70 to-[#FFF7ED]/80"></div>
<div className="absolute inset-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1000 600%22%3E%3Cdefs%3E%3CradialGradient id=%22a%22%3E%3Cstop offset=%220%25%22 stop-color=%22%230284C7%22 stop-opacity=%22.07%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%23F97316%22 stop-opacity=%22.04%22/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23a)%22/%3E%3C/svg%3E\')', backgroundSize: 'cover'}}></div>

<nav className="relative z-10 flex items-center justify-between px-8 py-6 font-poppins">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex items-center justify-center bg-gradient-to-tr from-[#0284C7] to-[#F97316] rounded-full shadow-lg">
<svg fill="none" height="28" viewbox="0 0 32 32" width="28">
<circle cx="16" cy="16" fill="#FEFCE8" fillOpacity="0.82" r="11"></circle>
<circle cx="16" cy="16" r="9.5" stroke="#0284C7" strokeWidth="2"></circle>
<g>
<path d="M16 6 L18 13 L25 13 L19.5 17 L21.5 24 L16 19.5 L10.5 24 L12.5 17 L7 13 L14 13 Z" fill="#F97316" stroke="#10B981" strokeWidth="1"></path>
</g>
<circle cx="16" cy="16" fill="#10B981" fillOpacity="0.95" r="3"></circle>
</svg>
</div>
<span className="text-2xl font-semibold tracking-tight font-poppins">
<span className="text-[#0284C7]">Trip</span><span className="text-[#F97316]">Nova</span>
</span>
</div>
<div className="hidden md:flex items-center space-x-4 font-poppins">
<a className="px-5 py-2 rounded-full bg-[#E0F2FE] text-[#0284C7] font-semibold shadow-sm hover:bg-[#0284C7] hover:text-white transition-all" href="#">Home</a>
<a className="px-5 py-2 rounded-full bg-[#E0F2FE] text-[#0284C7] font-semibold shadow-sm hover:bg-[#0284C7] hover:text-white transition-all" href="#">Destinations</a>
<a className="px-5 py-2 rounded-full bg-[#E0F2FE] text-[#0284C7] font-semibold shadow-sm hover:bg-[#0284C7] hover:text-white transition-all" href="#">Services</a>
<a className="px-5 py-2 rounded-full bg-[#E0F2FE] text-[#0284C7] font-semibold shadow-sm hover:bg-[#0284C7] hover:text-white transition-all" href="#">Blog</a>
<a className="px-5 py-2 rounded-full bg-[#E0F2FE] text-[#0284C7] font-semibold shadow-sm hover:bg-[#0284C7] hover:text-white transition-all" href="#">Contact</a>
</div>
<div className="flex items-center space-x-4 font-poppins">
<span className="text-[#64748B] text-sm">ENG</span>
<button className="bg-[#10B981] text-white px-8 py-2 rounded-full font-medium hover:bg-[#0284C7] transition-colors shadow-md">
                    Start Planning
                </button>
</div>
</nav>

<div className="relative z-10 max-w-7xl font-poppins mr-auto ml-auto pt-8 pr-8 pl-8">

<div className="flex justify-center">
<div className="glass-frame w-full max-w-6xl rounded-3xl relative font-poppins">

<div className="perspective-frame w-full h-[700px] flex items-center justify-center">
<div className="perspective-inner w-full h-full">
<div className="grid-container h-full grid grid-rows-3 gap-4">


<div className="grid gap-4 grid-cols-6 row-1">
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&amp'}}></div>
</div>
</div>

<div className="grid gap-4 grid-cols-6 row-2">
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&amp'}}></div>
</div>
</div>

<div className="grid gap-4 grid-cols-6 row-3">
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&amp'}}></div>
</div>
<div className="grid-item relative w-full h-full overflow-hidden rounded-xl">
<div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&amp'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center z-20 font-poppins">
<div className="hero-text-overlay rounded-3xl p-12 max-w-4xl mx-auto text-center font-poppins">
<div className="space-y-6">
<h1 className="text-4xl xl:text-5xl font-bold text-[#0F172A] leading-tight font-poppins">
                                    AI-Powered Travel Planning for
                                    <span className="text-[#0284C7]">Curious Explorers</span>
</h1>
<p className="text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto font-poppins">
                                    Plan your next getaway with our intelligent travel assistant – optimized routes, real-time updates, and personalized experiences from start to finish.
                                </p>

<div className="pt-4">
<button className="bg-[#F97316] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#10B981] transition-colors text-lg shadow-lg hover:shadow-xl font-poppins">
                                        Start Your Journey
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center font-poppins mt-10">
<div className="grid grid-cols-3 gap-6 max-w-lg">
<div className="glass-card rounded-2xl p-6 text-center floating-animation font-poppins">
<div className="text-3xl font-bold text-[#0284C7] font-poppins">150+</div>
<div className="text-sm text-[#64748B] font-poppins">Countries</div>
</div>
<div className="glass-card rounded-2xl p-6 text-center floating-animation font-poppins" style={{animationDelay: '1s'}}>
<div className="text-3xl font-bold text-[#F97316] font-poppins">24/7</div>
<div className="text-sm text-[#64748B] font-poppins">AI Support</div>
</div>
<div className="glass-card rounded-2xl p-6 text-center floating-animation font-poppins" style={{animationDelay: '2s'}}>
<div className="text-3xl font-bold text-[#10B981] font-poppins">98%</div>
<div className="text-sm text-[#64748B] font-poppins">Satisfaction</div>
</div>
</div>
</div>

<div className="flex justify-center mt-16 mb-6">
<h2 className="text-3xl font-bold text-slate-950 tracking-tight font-poppins">
                    Destination Highlight
                </h2>
</div>

<div className="flex justify-center font-poppins pb-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">

<div className="relative rounded-3xl overflow-hidden shadow-xl w-full h-[400px]">
<div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end pt-6 pr-6 pb-6 pl-6">
<div className="glass-overlay rounded-2xl p-5 mb-4">
<div className="flex items-center gap-3 mb-4">
<div className="text-3xl">🇬🇷</div>
<div className="flex-1">
<div className="text-xl font-bold text-white font-poppins">Santorini, Greece</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center text-sm">
<span className="mr-2 text-[#F97316]">☀️</span>
<span className="text-white font-poppins">Temperature: <span className="font-semibold text-white font-poppins">26° Sunny</span></span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#0284C7]">📅</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Travel Dates:</span>
<span className="text-white font-normal font-poppins"> June 15–22</span>
</span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#10B981]">💨</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Wind:</span>
<span className="text-white font-normal font-poppins"> Moderate Breeze</span>
</span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#64748B]">✨</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Vibe:</span>
<span className="text-white font-normal font-poppins"> Romantic &amp; Scenic</span>
</span>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#075985] transition-all text-sm font-semibold text-white font-poppins rounded-xl pt-3 pr-6 pb-3 pl-6">
<span className=""></span> Explore Itinerary
                            </button>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden shadow-xl w-full h-[400px]">
<div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end pt-6 pr-6 pb-6 pl-6">
<div className="glass-overlay rounded-2xl p-5 mb-4">
<div className="flex items-center gap-3 mb-4">
<div className="text-3xl">🇯🇵</div>
<div className="flex-1">
<div className="text-xl font-bold text-white font-poppins">Tokyo, Japan</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center text-sm">
<span className="mr-2 text-[#F97316]">🌤️</span>
<span className="text-white font-poppins">Temperature: <span className="font-semibold text-white font-poppins">22° Sunny</span></span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#0284C7]">📅</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Travel Dates:</span>
<span className="text-white font-normal font-poppins"> July 3–10</span>
</span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#10B981]">💨</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Wind:</span>
<span className="text-white font-normal font-poppins"> Light Breeze</span>
</span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#64748B]">🏙️</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Vibe:</span>
<span className="text-white font-normal font-poppins"> Futuristic &amp; Dynamic</span>
</span>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#075985] transition-all text-sm font-semibold text-white font-poppins rounded-xl pt-3 pr-6 pb-3 pl-6">
<span className=""></span> Explore Itinerary
                            </button>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden shadow-xl w-full h-[400px]">
<div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end pt-6 pr-6 pb-6 pl-6">
<div className="glass-overlay rounded-2xl p-5 mb-4">
<div className="flex items-center gap-3 mb-4">
<div className="text-3xl">🇸🇬</div>
<div className="flex-1">
<div className="text-xl font-bold text-white font-poppins">Singapore</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center text-sm">
<span className="mr-2 text-[#F97316]">🌡️</span>
<span className="text-white font-poppins">Temperature: <span className="font-semibold text-white font-poppins">31° Humid</span></span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#0284C7]">📅</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Travel Dates:</span>
<span className="text-white font-normal font-poppins"> August 20–27</span>
</span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#10B981]">💨</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Wind:</span>
<span className="text-white font-normal font-poppins"> Calm</span>
</span>
</div>
<div className="flex items-center text-sm">
<span className="mr-2 text-[#64748B]">🌺</span>
<span className="">
<span className="font-semibold text-slate-50 font-poppins">Vibe:</span>
<span className="text-white font-normal font-poppins"> Modern &amp; Lush</span>
</span>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#075985] transition-all text-sm font-semibold text-white font-poppins rounded-xl pt-3 pr-6 pb-3 pl-6">
<span className=""></span> Explore Itinerary
                            </button>
</div>
</div>
</div>
</div>

</div>
</div>

    </>
  );
}
