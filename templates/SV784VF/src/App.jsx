import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-sm mx-auto bg-transparent rounded-[32px] shadow-2xl overflow-hidden relative" style={{borderRadius: '0px'}}>

<div className="h-[844px] overflow-y-auto bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-800 pb-28" id="car-dashboard" style={{}}>

<div className="pt-8 pr-6 pb-4 pl-6">
<div className="flex animate-slide-in-up items-start justify-between" style={{animationDelay: '0.1s'}}>
<div className="flex space-x-4 items-center">
<img alt="User Avatar" className="w-12 h-12 ring-2 ring-violet-400 flex-shrink-0 object-cover border-4 rounded-full shadow-md" src="https://images.unsplash.com/photo-1745441112413-0312d23c0d19?w=320&amp;q=80" style={{}}/>
<div className="text-left space-y-0">
<h1 className="neon-glow-violet text-lg font-medium text-white tracking-normal font-manrope" style={{}}>Volkan Uslu</h1>
<p className="text-xs font-medium text-violet-300 tracking-tight mt-0.5" style={{paddingLeft: '2px'}}>Good morning</p>
</div>
</div>
<div className="flex items-center space-x-3">
<button aria-label="Add Notification" className="relative flex cursor-pointer w-12 h-12 bg-white/10 border-white/20 border rounded-full pt-2 pr-2 pb-2 pl-2 items-center justify-center" style={{width: '48px', height: '48px'}} type="button">
<svg className="lucide lucide-plus w-[28px] h-[28px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(196, 181, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div aria-label="Notifications" className="relative flex cursor-pointer w-12 h-12 bg-white/10 border-white/20 border rounded-full pt-2 pr-2 pb-2 pl-2 items-center justify-center" role="button" style={{width: '48px', height: '48px'}} tabindex="0">
<svg className="lucide lucide-bell w-[28px] h-[28px]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(196, 181, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-2 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-semibold font-sans leading-none text-white bg-violet-700 rounded-full tracking-tighter" style={{minWidth: '1.25rem', height: '1.25rem', fontWeight: '600'}}>12</span>
</div>
</div>
</div>
<div className="max-w-full animate-slide-in-up flex bg-white/10 border-white/20 border rounded-2xl mt-8 pt-0 pb-0 pl-4 backdrop-blur-md space-x-1 items-center" style={{animationDelay: '0.2s', overflow: 'hidden', clipPath: 'inset(0)'}}>
<div className="flex-1 text-left pl-1" style={{width: '100vw'}}>
<p className="neon-glow-violet text-lg font-semibold text-white tracking-tight font-manrope" style={{letterSpacing: '-0.025em'}}>Peugeot</p>
<p className="eon-glow-violet widttext-xl text-[#fff] text-2xl font-medium tracking-tight font-manrope" style={{width: '100px'}}>e-208 GT</p>
</div>
<img alt="Luxury electric SUV side profile" className="max-w-full h-120 flex-shrink-0 object-contain" data-car-model="e-208 GT" data-car-name="Peugeot" src="https://www.peugeot.co.uk/content/dam/peugeot/master/b2c/our-range/showroom/208/2024-06-new-208-white-label/new-e-208-white-label/E_208_GT.png?w=800&amp;q=80" style={{display: 'block', objectFit: 'cover', overflow: 'hidden'}}/>
</div>
</div>

<div className="grid grid-cols-2 gap-4 pr-6 pl-6">

<div className="flex flex-col animate-slide-in-up card-hover-glow bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md justify-between" style={{animationDelay: '0.3s', width: '160px', height: '239px'}}>
<div className="flex flex-col items-start justify-between">
<span className="text-[#ffff] text-base font-medium tracking-tight" style={{}}>Battery</span>
<span className="text-xs font-medium text-violet-300 tracking-tight mt-1" style={{}}>Last charge 1w ago</span>
</div>
<div className="flex-grow flex pt-4 items-center justify-center">

<div className="relative" style={{width: '92px', height: '140px'}}>

<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-2 bg-gray-50 rounded-t-sm" style={{height: '4px', borderTopLeftRadius: '2px', borderTopRightRadius: '2px'}}></div>

<div className="w-full h-full relative overflow-hidden bg-white/10 border-2 rounded-2xl">

<div className="absolute bottom-1 left-1 w-20 flex flex-col bg-gradient-to-t from-white/30 to-white/10 border-white/20 border rounded-xl pt-1 pr-1 pb-1 pl-1 backdrop-blur-md items-center justify-center" style={{height: '70%', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
<svg className="lucide lucide-zap w-7 h-7" fill="white" height="24" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
<span className="text-lg font-semibold text-white tracking-tighter mt-1 font-sans" style={{}}>63%</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="flex flex-col animate-slide-in-up card-hover-glow bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md justify-between" style={{animationDelay: '0.4s', width: '156px', height: '110px'}}>
<div className="flex items-start justify-between">
<span className="text-base font-medium text-[#ffffff] tracking-tight" style={{}}>Distance</span>
<svg className="lucide lucide-route w-5 h-5 text-violet-300" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div className="mt-2">
<span className="text-4xl font-medium text-white font-manrope" style={{}}>104</span>
<span className="text-sm font-medium text-violet-300 tracking-tighter ml-1" style={{}}>km</span>
</div>
</div>

<div className="flex flex-col animate-slide-in-up card-hover-glow bg-white/10 border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md justify-between" style={{animationDelay: '0.5s', width: '156px', height: '110px'}}>
<div className="flex items-start justify-between">
<span className="text-[#fff] text-base font-medium tracking-tighter" style={{}}>Climate</span>
<svg className="lucide lucide-thermometer w-[20px] h-[20px]" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(196, 181, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div className="flex mt-2 items-baseline">
<span className="text-4xl font-medium text-white font-manrope" style={{}}>22<span className="text-2xl font-manrope font-medium" style={{}}>°</span></span>
</div>
</div>
</div>
</div>

<div className="mt-4 pr-6 pl-6">
<div className="flex gap-4" id="carousel-wrapper">
<div className="flex gap-4 cursor-pointer animate-slide-in-up card-hover-glow min-w-[280px] flex-shrink-0 scroll-snap-align-start bg-white/10 border-white/20 border rounded-2xl pt-2 pr-2 pb-2 pl-2 backdrop-blur-md items-center" id="charging-port-card" style={{animationDelay: '0.7s', width: '100%'}}>
<div className="w-full flex bg-black/20 rounded-xl items-center justify-center">
<div className="w-full flex bg-black/20 rounded-lg pt-4 pr-4 pb-4 pl-4 space-x-4 space-y-4 items-center justify-center">
<div className="flex-1">
<p className="text-base font-semibold text-white tracking-tight" style={{}}>Charging port</p>
<p className="text-sm text-violet-300 tracking-tighter font-sans" style={{}}>CCS2</p>
<p className="text-xs text-violet-400 mt-1 tracking-tighter font-sans" style={{}}>Max DC rate: 110kW</p>
</div>
<svg className="lucide lucide-chevron-right w-[20px] h-[20px]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(196, 181, 253)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-black/30 backdrop-blur-lg border-t border-white/20 rounded-2xl">
<div className="flex h-20 pr-4 pl-4 items-center justify-around sticky bottom-0 left-0 right-0 bg-black/30 backdrop-blur-lg border-t border-white/20 rounded-2xl" id="">
<a className="flex flex-col items-center gap-1 text-green-400 neon-glow-green" href="#" style={{}}>
<svg className="lucide lucide-car-front w-6 h-6 icon-glow-green" data-lucide="car-front" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"></path><path d="M7 14h.01"></path><path d="M17 14h.01"></path><rect height="8" rx="2" width="18" x="3" y="10"></rect><path d="M5 18v2"></path><path d="M19 18v2"></path></svg>
<span className="text-xs font-semibold tracking-tighter" style={{}}>Home</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-white transition-colors w-12 h-12 justify-center hover:bg-violet-700/50 text-violet-300 bg-violet-700/30 rounded-full" href="#" style={{aspectRatio: '1 / 1'}}>
<svg className="lucide lucide-map w-6 h-6" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</a>
<a className="flex flex-col items-center gap-1 text-violet-300 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-settings w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-xs font-medium tracking-tighter font-sans" style={{}}>Settings</span>
</a>
</div>
</div>
</div>

<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration></div></div>
    </>
  );
}
