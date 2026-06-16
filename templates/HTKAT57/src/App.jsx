import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui']
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'scale-in': 'scaleIn 0.7s ease-out forwards'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(30px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
scaleIn: {
'0%': { opacity: '0', transform: 'scale(0.9)' },
'100%': { opacity: '1', transform: 'scale(1)' }
}
}
}
}
}



// Initialize Lucide icons
lucide.createIcons();

// Power button functionality
const powerBtn = document.getElementById('powerBtn');
const powerLabel = document.getElementById('powerLabel');
let isOn = true;

powerBtn.addEventListener('click', () => {
  isOn = !isOn;
  powerLabel.textContent = isOn ? 'ON' : 'OFF';
  powerBtn.className = isOn 
    ? 'flex items-center gap-2 px-3 py-2 border border-cyan-400/50 rounded-xl bg-cyan-500/10 backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300'
    : 'flex items-center gap-2 px-3 py-2 border border-red-400/50 rounded-xl bg-red-500/10 backdrop-blur-sm hover:bg-red-500/20 hover:border-red-400 transition-all duration-300';
  
  const icon = powerBtn.querySelector('i');
  const label = powerBtn.querySelector('span');
  if (isOn) {
    icon.className = 'w-4 h-4 text-cyan-400';
    label.className = 'text-xs font-medium text-cyan-400';
  } else {
    icon.className = 'w-4 h-4 text-red-400';
    label.className = 'text-xs font-medium text-red-400';
  }
});

// Temperature control
const tempSlider = document.getElementById('tempSlider');
const tempDisplay = document.getElementById('tempDisplay');
const dial = document.getElementById('dial');

function updateTemperature(temp) {
  tempDisplay.textContent = `${temp}°`;
  // Calculate angle for conic gradient (270 degrees total sweep)
  const percentage = (temp - 10) / 20;
  const angle = 135 + (percentage * 270);
  dial.style.setProperty('--temp-angle', `${angle}deg`);
}

tempSlider.addEventListener('input', (e) => {
  updateTemperature(parseInt(e.target.value));
});

// Initialize
updateTemperature(25);

// Add subtle pulsing animation to the dial
setInterval(() => {
  if (isOn) {
    dial.style.filter = 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))';
    setTimeout(() => {
      dial.style.filter = 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.2))';
    }, 1000);
  }
}, 2000);

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative mx-auto opacity-0 animate-scale-in" style={{animationDelay: '0.1s'}}>

<div className="w-[390px] h-[844px] bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[55px] p-2 shadow-2xl">

<div className="w-full h-full bg-black rounded-[45px] p-1">

<div className="w-full h-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-[40px] overflow-hidden relative">


<div className="text-white h-full overflow-y-auto">

<header className="flex items-center justify-between px-6 pt-6 opacity-0 animate-fade-in" style={{animationDelay: '0.3s'}}>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>9:41</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-wifi w-4 h-4 text-white" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="flex">
<div className="w-1 h-3 bg-white rounded-sm mr-0.5"></div>
<div className="w-1 h-3 bg-white rounded-sm mr-0.5"></div>
<div className="w-1 h-3 bg-white rounded-sm mr-0.5"></div>
<div className="w-1 h-3 bg-gray-600 rounded-sm"></div>
</div>
<div className="w-6 h-3 border border-white rounded-sm ml-1 relative">
<div className="absolute right-0 top-0 w-4 h-full bg-green-400 rounded-sm"></div>
<div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white rounded-full"></div>
</div>
</div>
</header>

<div className="flex items-center justify-between px-6 mt-6 opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
<button className="p-2 rounded-xl hover:bg-white/10 transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-chevron-left w-6 h-6" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="text-center">
<h1 className="text-xl font-semibold tracking-tight font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Smart Thermostat</h1>
<p className="text-sm text-gray-400 mt-0.5 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Living Room</p>
</div>
<button className="flex items-center gap-2 px-3 py-2 border border-cyan-400/50 rounded-xl bg-cyan-500/10 backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300" id="powerBtn">
<span className="text-xs font-medium text-cyan-400 font-nunito" id="powerLabel" style={{transition: 'outline 0.1s ease-in-out'}}>ON</span>
<svg className="lucide lucide-power w-4 h-4 text-cyan-400" data-lucide="power" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
</button>
</div>

<nav className="flex items-center justify-center gap-8 mt-8 opacity-0 animate-fade-in" style={{animationDelay: '0.5s'}}>
<button className="flex flex-col items-center text-gray-500 hover:text-white transition-all duration-200 group">
<svg className="lucide lucide-video w-5 h-5 mb-2 group-hover:scale-110 transition-transform" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span className="text-xs font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Camera</span>
</button>
<div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
<button className="flex flex-col items-center text-white relative">
<div className="absolute -inset-2 bg-cyan-500/20 rounded-lg blur-sm"></div>
<svg className="lucide lucide-thermometer w-5 h-5 mb-2 relative z-10" data-lucide="thermometer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
<span className="text-xs font-medium relative z-10 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Thermostat</span>
</button>
<div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
<button className="flex flex-col items-center text-gray-500 hover:text-white transition-all duration-200 group">
<svg className="lucide lucide-lightbulb w-5 h-5 mb-2 group-hover:scale-110 transition-transform" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-xs font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Lighting</span>
</button>
</nav>

<div className="flex justify-center mt-8 opacity-0 animate-scale-in" style={{animationDelay: '0.6s'}}>
<div className="relative">
<div className="relative w-64 h-64 rounded-full" id="dial" style={{background: 'conic-gradient(from 135deg, #06b6d4 0deg, #0891b2 calc(var(--temp-angle, 180deg)), rgba(255,255,255,0.05) calc(var(--temp-angle, 180deg)), rgba(255,255,255,0.05) 360deg)', -TempAngle: '337.5deg', filter: 'drop-shadow(rgba(6, 182, 212, 0.3) 0px 0px 20px)'}}>
<div className="absolute inset-3 rounded-full bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 border border-white/10 shadow-2xl">
<div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent"></div>
<div className="flex flex-col items-center justify-center h-full relative z-10">
<div className="text-xs font-semibold tracking-widest text-gray-400 mb-2 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>COOLING</div>
<div className="text-5xl tracking-tight mb-2 font-nunito font-semibold" id="tempDisplay" style={{transition: 'outline 0.1s ease-in-out'}}>25°</div>
<div className="flex items-center gap-2 mt-2">
<svg className="lucide lucide-leaf w-4 h-4 text-emerald-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-xs text-emerald-400 font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Eco Mode</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>30°</div>
<div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>10°</div>
<div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>15°</div>
<div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>25°</div>
</div>
</div>
</div>

<div className="px-8 mt-6 opacity-0 animate-slide-up" style={{animationDelay: '0.7s'}}>
<input className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider" id="tempSlider" max="30" min="10" type="range" value="25"/>
</div>

<div className="grid grid-cols-2 gap-3 px-6 mt-8 opacity-0 animate-slide-up" style={{animationDelay: '0.8s'}}>
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center justify-between mb-3">
<svg className="lucide lucide-droplets w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<div className="text-right">
<div className="text-xl font-bold font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>79%</div>
<div className="text-xs text-gray-400 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Humidity</div>
</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full" style={{width: '79%'}}></div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-orange-400/30 hover:bg-white/10 transition-all duration-300 group">
<div className="flex items-center justify-between mb-3">
<svg className="lucide lucide-sun w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<div className="text-right">
<div className="text-xl font-bold font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>30°</div>
<div className="text-xs text-gray-400 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Outside</div>
</div>
</div>
<div className="w-full bg-white/10 rounded-full h-2">
<div className="bg-gradient-to-r from-orange-500 to-red-400 h-2 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>

<div className="px-6 mt-8 pb-8 opacity-0 animate-slide-up" style={{animationDelay: '0.9s'}}>
<div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-3">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group">
<svg className="lucide lucide-wind w-5 h-5 mb-1 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"></path><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"></path><path d="M9.8 4.4A2 2 0 1 1 11 8H2"></path></svg>
<span className="text-xs font-medium text-gray-400 group-hover:text-white font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Mode</span>
</button>
<button className="flex flex-col items-center p-3 rounded-xl bg-cyan-500/20 border border-cyan-400/50 relative">
<div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-lg"></div>
<svg className="lucide lucide-leaf w-5 h-5 mb-1 text-cyan-400 relative z-10" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="text-xs font-medium text-cyan-400 relative z-10 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Eco</span>
</button>
<button className="flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group">
<svg className="lucide lucide-calendar w-5 h-5 mb-1 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs font-medium text-gray-400 group-hover:text-white font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>Schedule</span>
</button>
<button className="flex flex-col items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-200 group">
<svg className="lucide lucide-activity w-5 h-5 mb-1 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs font-medium text-gray-400 group-hover:text-white font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>History</span>
</button>
</div>
</div>
</div>

<div className="flex justify-center pb-2 opacity-0 animate-fade-in" style={{animationDelay: '1s'}}>
<div className="w-32 h-1 bg-white/30 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 rounded-[55px] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>

<div className="absolute -inset-4 bg-black/20 rounded-[60px] blur-xl -z-10"></div>
</div>


    </>
  );
}
