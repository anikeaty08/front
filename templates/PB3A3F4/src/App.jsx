import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'slide-right': 'slideRight 0.7s ease-out forwards'
},
keyframes: {
fadeIn: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
slideRight: { '0%': { opacity: '0', transform: 'translateX(-30px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } }
}
}
}
}



    lucide.createIcons();

    // Card slider functionality
    const track = document.getElementById('cardTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -300, behavior: 'smooth' });
    });

    // Hide scrollbar for webkit browsers
    const style = document.createElement('style');
    style.textContent = `
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `;
    document.head.appendChild(style);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21f5cac3-90a8-4ccb-bd07-9bbecae12dd5_3840w.jpg")'}}></div>
<div className="min-h-screen flex lg:px-8 pt-8 pr-4 pb-8 pl-4 items-center justify-center" style={{}}>
<div className="w-full max-w-7xl overflow-hidden bg-white/80 backdrop-blur-xl border-white/20 border rounded-3xl shadow-2xl" style={{animation: 'fade-in 0.8s ease-out', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)'}}>

<div className="flex lg:p-10 bg-white/10 backdrop-blur-md border-white/10 border-b pt-6 pr-6 pb-6 pl-6 items-center justify-between" style={{animation: 'slide-right 0.6s ease-out 0.2s both', backdropFilter: 'blur(12px)'}}>

<div className="flex items-center gap-6">
<div className="flex items-center gap-3">
<span className="font-semibold text-lg tracking-tight hidden sm:block text-white font-geist drop-shadow-sm">FlexSpace</span>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/90 backdrop-blur-sm text-white text-sm font-medium hover:bg-orange-600/90 transition-colors" style={{backdropFilter: 'blur(8px)'}}>
<span className="font-geist">Most Popular</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors" style={{backdropFilter: 'blur(8px)'}}>
<span className="font-geist">Meeting Rooms</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors" style={{backdropFilter: 'blur(8px)'}}>
<span className="font-geist">Hot Desks</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors" style={{backdropFilter: 'blur(8px)'}}>
<span className="font-geist">Private Office</span>
</button>
</div>
</div>

<div className="flex items-center gap-3">
<button className="p-2 rounded-lg hover:bg-white/20 transition-colors hidden sm:flex backdrop-blur-sm" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-bell w-5 h-5 text-white" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<div className="flex items-center gap-3 pl-3 border-l border-white/30">
<img alt="avatar" className="w-9 h-9 rounded-full object-cover ring-2 ring-orange-500/80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10b82f02-0664-4276-be7d-8b63b0623907_320w.jpg" style={{}}/>
<div className="hidden sm:block text-sm leading-tight">
<p className="font-medium text-white font-geist drop-shadow-sm">Marcus Chen</p>
<p className="text-white/80 font-geist">marcus@techflow.co</p>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-white/80" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="flex flex-col gap-12 lg:px-10 pt-12 pr-6 pb-12 pl-6" style={{background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(10px)'}}>

<div className="grid lg:grid-cols-2 gap-12">

<div className="flex flex-col justify-center" style={{animation: 'slide-right 0.8s ease-out 0.6s both'}}>
<div className="text-left">
<h2 className="sm:text-6xl lg:text-8xl leading-none text-5xl text-white tracking-tight font-playfair drop-shadow-lg" style={{}}>Flex<span className="text-orange-400 font-playfair" style={{}}>Space</span></h2>
<p className="mt-4 text-lg text-white/90 leading-relaxed font-geist drop-shadow-sm">Transform your work experience with flexible, modern spaces designed for productivity and collaboration.</p>
</div>
<div className="mt-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
<button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 group font-geist" style={{backdropFilter: 'blur(12px)'}}>
<svg className="lucide lucide-play-circle w-5 h-5 group-hover:text-orange-300 transition-colors" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
  Watch Demo
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-orange-500/90 backdrop-blur-md hover:bg-orange-600/90 text-white transition-colors font-geist" style={{backdropFilter: 'blur(12px)'}}>
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
        Book Space Now
      </button>
</div>

<div className="flex items-center gap-4 text-sm text-white/70">
<span className="font-geist">Trusted by leading companies:</span>
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center text-xs font-semibold font-geist text-white" style={{backdropFilter: 'blur(8px)'}}>G</div>
<div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center text-xs font-semibold font-geist text-white" style={{backdropFilter: 'blur(8px)'}}>M</div>
<div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center text-xs font-semibold font-geist text-white" style={{backdropFilter: 'blur(8px)'}}>S</div>
<span className="text-white/60 font-geist">+200 more</span>
</div>
</div>
</div>
</div><div className="flex flex-col justify-center" style={{animation: 'slide-up 0.8s ease-out 0.4s both'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 backdrop-blur-md text-orange-200 text-sm font-medium w-fit mb-6 border border-orange-400/30" style={{backdropFilter: 'blur(12px)'}}>
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="font-geist">Premium Locations Available</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] font-playfair text-white drop-shadow-lg" style={{}}>Discover Your Perfect Workspace</h1>
<p className="mt-4 text-xl text-white/90 leading-relaxed font-geist drop-shadow-sm">Book premium coworking spaces, meeting rooms, and private offices across the city. Flexible plans, instant booking.</p>

<div className="flex items-center gap-8 mt-8 pt-6 border-t border-white/20">
<div>
<div className="text-2xl text-orange-300 font-playfair drop-shadow-sm" style={{}}>150+</div>
<div className="text-sm text-white/70 font-geist">Locations</div>
</div>
<div>
<div className="text-2xl text-orange-300 font-playfair drop-shadow-sm" style={{}}>25k+</div>
<div className="text-sm text-white/70 font-geist">Happy Members</div>
</div>
<div>
<div className="text-2xl text-orange-300 font-playfair drop-shadow-sm" style={{}}>4.9★</div>
<div className="text-sm text-white/70 font-geist">Rating</div>
</div>
</div>
</div>

</div>

<div className="w-full">
<div className="flex mb-8 items-center justify-between">
<h3 className="text-2xl font-playfair text-white drop-shadow-sm" style={{}}>Featured Spaces</h3>
<div className="flex gap-2">
<button className="p-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-colors" id="prevBtn" style={{backdropFilter: 'blur(12px)'}}>
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-colors" id="nextBtn" style={{backdropFilter: 'blur(12px)'}}>
<svg className="lucide lucide-chevron-right w-[16px] h-[16px]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="cardTrack">

<div className="bg-black/30 backdrop-blur-xl rounded-xl border border-white/20 hover:shadow-xl hover:bg-black/40 transition-all duration-300 group" style={{backdropFilter: 'blur(16px)'}}>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div>
<h4 className="font-semibold text-white font-geist">TechHub Central</h4>
<p className="text-sm text-white/70 flex items-center gap-1 mt-1 font-geist">
<svg className="lucide lucide-map-pin w-3 h-3 text-white/60" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                SCBD, Jakarta Selatan
              </p>
</div>
<div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 backdrop-blur-md text-green-300 rounded-full text-xs font-medium border border-green-400/30 font-geist" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
              Available
            </div>
</div>
<div className="rounded-lg overflow-hidden aspect-[4/3] mb-4">
<img alt="TechHub Central" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d7b9294-2ae6-4b09-865d-c46481dfaccc_800w.jpg" style={{}}/>
</div>
<div className="flex items-center justify-between text-sm mb-4">
<div className="flex items-center gap-4 text-white/70">
<span className="flex items-center gap-1 font-geist">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                24/7 Access
              </span>
<span className="flex items-center gap-1 font-geist">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                50 Desks
              </span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-lg font-semibold text-white font-geist">$45</span>
<span className="text-sm text-white/70 font-geist">/day</span>
</div>
<button className="px-4 py-2 bg-orange-500/90 backdrop-blur-md text-white text-sm font-medium rounded-lg hover:bg-orange-600/90 transition-colors font-geist" style={{backdropFilter: 'blur(8px)'}}>
              Book Now
            </button>
</div>
</div>
</div>

<div className="bg-black/30 backdrop-blur-xl rounded-xl border border-white/20 hover:shadow-xl hover:bg-black/40 transition-all duration-300 group" style={{backdropFilter: 'blur(16px)'}}>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div className="">
<h4 className="font-semibold text-white font-geist">Creative District</h4>
<p className="text-sm text-white/70 flex items-center gap-1 mt-1 font-geist">
<svg className="lucide lucide-map-pin w-3 h-3 text-white/60" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Kemang, Jakarta Selatan
              </p>
</div>
<div className="flex items-center gap-1 px-2 py-1 bg-pink-500/20 backdrop-blur-md text-pink-300 rounded-full text-xs font-medium border border-pink-400/30 font-geist" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-flame w-3 h-3" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
              Popular
            </div>
</div>
<div className="rounded-lg overflow-hidden aspect-[4/3] mb-4">
<img alt="Creative District" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b175135-a5f6-4b15-bd83-d88886f4f40e_800w.jpg" style={{}}/>
</div>
<div className="flex items-center justify-between text-sm mb-4">
<div className="flex items-center gap-4 text-white/70">
<span className="flex items-center gap-1 font-geist">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                6AM - 11PM
              </span>
<span className="flex items-center gap-1 font-geist">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                32 Desks
              </span>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-lg font-semibold text-white font-geist">$38</span>
<span className="text-sm text-white/70 font-geist">/day</span>
</div>
<button className="px-4 py-2 bg-orange-500/90 backdrop-blur-md text-white text-sm font-medium rounded-lg hover:bg-orange-600/90 transition-colors font-geist" style={{backdropFilter: 'blur(8px)'}}>
              Book Now
            </button>
</div>
</div>
</div>

<div className="bg-black/30 backdrop-blur-xl rounded-xl border border-white/20 hover:shadow-xl hover:bg-black/40 transition-all duration-300 group" style={{backdropFilter: 'blur(16px)'}}>
<div className="p-5">
<div className="flex items-start justify-between mb-4">
<div>
<h4 className="font-semibold text-white font-geist">Business Plaza</h4>
<p className="text-sm text-white/70 flex items-center gap-1 mt-1 font-geist">
<svg className="lucide lucide-map-pin w-3 h-3 text-white/60" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Kuningan, Jakarta Selatan
              </p>
</div>
<div className="flex items-center gap-1 px-2 py-1 bg-yellow-500/20 backdrop-blur-md text-yellow-300 rounded-full text-xs font-medium border border-yellow-400/30 font-geist" style={{backdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-star w-3 h-3" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
              Premium
            </div>
</div>
<div className="rounded-lg overflow-hidden aspect-[4/3] mb-4">
<img alt="Business Plaza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e746e827-f5eb-429e-a946-e41035adc171_800w.jpg" style={{}}/>
</div>
<div className="flex items-center justify-between text-sm mb-4">
<div className="flex items-center gap-4 text-white/70">
<span className="flex items-center gap-1 font-geist">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></span></div></div></div></div></div></div></div></div>
</div>



    </>
  );
}
