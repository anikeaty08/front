import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Clock Functionality
        function updateClock() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const timeString = `${hours}:${minutes}`;
            
            document.getElementById('lock-time').innerText = timeString;
            document.getElementById('status-time').innerText = timeString;

            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const dateString = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;
            document.getElementById('lock-date').innerText = dateString;
        }

        setInterval(updateClock, 1000);
        updateClock();

        // Unlock Logic
        const lockScreen = document.getElementById('lock-screen');
        const homeScreen = document.getElementById('home-screen');
        
        function unlockPhone() {
            lockScreen.classList.add('unlock-slide-up');
            homeScreen.classList.remove('home-hidden');
            homeScreen.classList.add('home-scale-in');
        }

        // App Logic
        const appLayer = document.getElementById('app-layer');
        const appTitle = document.getElementById('app-title');

        function openApp(name, colorClass) {
            appTitle.innerText = name;
            appLayer.classList.remove('app-closed');
            appLayer.classList.add('app-open');
        }

        function closeApp() {
            appLayer.classList.remove('app-open');
            appLayer.classList.add('app-closed');
        }

        lockScreen.addEventListener('click', (e) => {
            if(e.target === lockScreen || e.target.closest('.group')) {
                // handle click
            }
        });

        // Download Self Logic
        document.getElementById('download-btn').addEventListener('click', function() {
            // Get current HTML
            const htmlContent = document.documentElement.outerHTML;
            // Create blob
            const blob = new Blob([htmlContent], {type: 'text/html'});
            const url = URL.createObjectURL(blob);
            this.href = url;
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative h-[850px] w-[410px] bg-black rounded-[60px] shadow-2xl ring-8 ring-zinc-900 border-[8px] border-zinc-800 overflow-hidden select-none">

<div className="absolute inset-0 wallpaper-gradient z-0"></div>
<div className="absolute inset-0 bg-black/20 z-0"></div>

<div className="absolute top-0 left-0 w-full z-50 px-8 pt-4 flex justify-between items-center text-xs font-medium tracking-wide">
<div className="w-12 text-center pl-2" id="status-time">9:41</div>

<div className="h-9 w-32 bg-black rounded-full flex items-center justify-between px-3 transition-all duration-300 ease-out cursor-pointer hover:w-48 hover:h-12 active:scale-95 z-50" id="dynamic-island">
<div className="h-full flex items-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300 overflow-hidden w-0 hover:w-auto">
<iconify-icon className="text-green-400 text-lg" icon="lucide:music"></iconify-icon>
<div className="flex flex-col leading-none whitespace-nowrap">
<span className="text-[0.6rem] text-zinc-400">Playing</span>
<span className="text-[0.7rem] font-semibold">Waves</span>
</div>
</div>

<div className="flex gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
<div className="w-2 h-2 rounded-full bg-zinc-800/80"></div>
</div>
<div className="h-full flex items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
<div className="flex gap-0.5 items-end h-3" id="music-waves">
<div className="w-0.5 h-full bg-green-400 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-2 bg-green-400 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-3 bg-green-400 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-1.5 w-12 justify-end pr-2">
<iconify-icon icon="lucide:signal" strokeWidth="2.5" width="14"></iconify-icon>
<iconify-icon icon="lucide:wifi" strokeWidth="2.5" width="14"></iconify-icon>
<iconify-icon icon="lucide:battery-full" strokeWidth="2.5" width="18"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 z-40 flex flex-col items-center pt-24 pb-8 transition-transform duration-500 cursor-grab active:cursor-grabbing" id="lock-screen">
<div className="flex flex-col items-center gap-2 mt-4 drop-shadow-md">
<iconify-icon className="text-white/70 mb-2" icon="lucide:lock" width="20"></iconify-icon>
<div className="text-lg font-medium text-white/80 tracking-wide uppercase" id="lock-date">Monday, June 5</div>
<div className="text-[5.5rem] leading-none font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60" id="lock-time">9:41</div>
</div>

<div className="flex gap-4 mt-6">
<div className="bg-white/10 backdrop-blur-md rounded-xl p-3 w-20 h-20 flex flex-col justify-between items-center border border-white/10 shadow-lg">
<iconify-icon className="text-blue-300" icon="lucide:cloud-rain" width="24"></iconify-icon>
<span className="text-sm font-medium">18°</span>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-xl p-3 w-32 h-20 flex flex-col justify-between border border-white/10 shadow-lg">
<div className="flex justify-between items-start w-full">
<span className="text-xs text-white/60 font-medium">UP NEXT</span>
<iconify-icon className="text-white/60" icon="lucide:calendar" width="14"></iconify-icon>
</div>
<div className="leading-tight">
<span className="text-xs font-semibold block">Design Review</span>
<span className="text-[0.65rem] text-white/60">10:00 - 11:00 AM</span>
</div>
</div>
</div>
<div className="flex-1"></div>

<div className="w-full px-12 flex justify-between items-end mb-8">
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center transition active:bg-white/30 active:scale-90 group">
<iconify-icon className="group-hover:text-yellow-200 transition-colors" icon="lucide:flashlight" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center transition active:bg-white/30 active:scale-90 group">
<iconify-icon className="group-hover:text-blue-200 transition-colors" icon="lucide:camera" width="20"></iconify-icon>
</button>
</div>

<div className="w-full h-16 absolute bottom-0 flex justify-center items-end pb-2 cursor-pointer z-50 group" onclick="unlockPhone()">
<div className="flex flex-col items-center gap-2">
<span className="text-xs font-medium text-white/50 tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">Click to Open</span>
<div className="w-32 h-1.5 bg-white rounded-full"></div>
</div>
</div>
</div>

<div className="absolute inset-0 z-20 flex flex-col pt-32 px-6 pb-4 home-hidden" id="home-screen">

<div className="grid grid-cols-4 gap-x-5 gap-y-8">

<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Mail', 'bg-blue-500')">
<div className="w-[60px] h-[60px] squircle bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg relative overflow-hidden">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20"></div>
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Mail</span>
</button>
<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Calendar', 'bg-red-500')">
<div className="w-[60px] h-[60px] squircle bg-white flex flex-col items-center pt-3 shadow-lg relative overflow-hidden">
<span className="text-[0.6rem] font-bold text-red-500 uppercase tracking-wide">Mon</span>
<span className="text-2xl font-light text-zinc-900 leading-none mt-0.5">5</span>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Calendar</span>
</button>
<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Photos', 'bg-white')">
<div className="w-[60px] h-[60px] squircle bg-white flex items-center justify-center shadow-lg relative overflow-hidden">
<div className="absolute w-2 h-2 rounded-full bg-orange-400 -translate-y-3"></div>
<div className="absolute w-2 h-2 rounded-full bg-blue-400 translate-y-3"></div>
<div className="absolute w-2 h-2 rounded-full bg-green-400 -translate-x-3"></div>
<div className="absolute w-2 h-2 rounded-full bg-purple-400 translate-x-3"></div>
<div className="blur-md w-full h-full absolute inset-0 bg-white/50"></div>
<iconify-icon className="text-zinc-800 z-10" icon="lucide:image" width="26"></iconify-icon>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Photos</span>
</button>
<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Camera', 'bg-zinc-800')">
<div className="w-[60px] h-[60px] squircle bg-zinc-800 flex items-center justify-center shadow-lg relative overflow-hidden border border-zinc-700">
<div className="w-10 h-10 rounded-full border-2 border-zinc-500 flex items-center justify-center">
<div className="w-3 h-3 bg-zinc-500 rounded-full"></div>
</div>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Camera</span>
</button>
<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Weather', 'bg-blue-400')">
<div className="w-[60px] h-[60px] squircle bg-gradient-to-b from-blue-400 to-sky-300 flex items-center justify-center shadow-lg relative overflow-hidden">
<iconify-icon className="text-white relative z-10" icon="lucide:cloud-sun" width="28"></iconify-icon>
<div className="absolute top-[-10%] right-[-10%] w-8 h-8 bg-yellow-300 rounded-full blur-md"></div>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Weather</span>
</button>
<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Maps', 'bg-green-100')">
<div className="w-[60px] h-[60px] squircle bg-green-100 flex items-center justify-center shadow-lg relative overflow-hidden">
<div className="absolute inset-0 border-4 border-white/20 rounded-[22%]"></div>
<iconify-icon className="text-green-600" icon="lucide:map" width="26"></iconify-icon>
<div className="absolute bottom-1 right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Maps</span>
</button>
<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Notes', 'bg-yellow-100')">
<div className="w-[60px] h-[60px] squircle bg-white flex items-center justify-center shadow-lg relative overflow-hidden">
<div className="w-full h-2 bg-yellow-300 absolute top-0"></div>
<div className="flex flex-col gap-1 w-8">
<div className="h-0.5 w-full bg-zinc-200"></div>
<div className="h-0.5 w-full bg-zinc-200"></div>
<div className="h-0.5 w-2/3 bg-zinc-200"></div>
</div>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Notes</span>
</button>
<button className="flex flex-col items-center gap-1.5 group active:scale-90 transition-transform duration-200" onclick="openApp('Settings', 'bg-zinc-400')">
<div className="w-[60px] h-[60px] squircle bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center shadow-lg relative overflow-hidden">
<iconify-icon className="text-white spin-slow" icon="lucide:settings-2" width="30"></iconify-icon>
</div>
<span className="text-[0.7rem] font-medium tracking-tight text-white/90 drop-shadow-md">Settings</span>
</button>
</div>

<div className="flex-1 flex justify-center items-end pb-6">
<div className="bg-white/30 backdrop-blur-md px-2 py-1 rounded-full flex gap-1.5">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
<div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
</div>
</div>

<div className="h-[90px] w-full bg-white/10 backdrop-blur-xl rounded-[35px] flex items-center justify-around px-4 mb-2 border border-white/5 shadow-2xl z-30">
<button className="flex flex-col items-center group active:scale-90 transition-transform duration-200" onclick="openApp('Phone', 'bg-green-500')">
<div className="w-[55px] h-[55px] squircle bg-green-500 flex items-center justify-center shadow-lg">
<iconify-icon icon="lucide:phone" width="26"></iconify-icon>
</div>
</button>
<button className="flex flex-col items-center group active:scale-90 transition-transform duration-200" onclick="openApp('Safari', 'bg-blue-400')">
<div className="w-[55px] h-[55px] squircle bg-white flex items-center justify-center shadow-lg">
<iconify-icon className="text-blue-500" icon="lucide:compass" width="30"></iconify-icon>
</div>
</button>
<button className="flex flex-col items-center group active:scale-90 transition-transform duration-200" onclick="openApp('Messages', 'bg-green-500')">
<div className="w-[55px] h-[55px] squircle bg-green-500 flex items-center justify-center shadow-lg">
<iconify-icon className="fill-current text-white" icon="lucide:message-circle" width="28"></iconify-icon>
</div>
</button>
<button className="flex flex-col items-center group active:scale-90 transition-transform duration-200" onclick="openApp('Music', 'bg-red-500')">
<div className="w-[55px] h-[55px] squircle bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg">
<iconify-icon icon="lucide:music" width="26"></iconify-icon>
</div>
</button>
</div>

<div className="w-full flex justify-center pt-2 pb-1">
<div className="w-32 h-1.5 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="absolute inset-0 bg-white z-[60] app-closed transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-bottom overflow-hidden flex flex-col" id="app-layer">

<div className="pt-14 pb-4 px-6 border-b border-zinc-100 flex justify-between items-center bg-white sticky top-0 z-10">
<div className="flex items-center text-blue-500 font-medium cursor-pointer -ml-2" onclick="closeApp()">
<iconify-icon icon="lucide:chevron-left" width="24"></iconify-icon>
<span>Back</span>
</div>
<h1 className="font-semibold text-zinc-900 text-lg absolute left-1/2 -translate-x-1/2" id="app-title">App Name</h1>
<iconify-icon className="text-zinc-900" icon="lucide:more-horizontal"></iconify-icon>
</div>

<div className="flex-1 overflow-y-auto ios-scroll bg-zinc-50 p-6">
<div className="w-full h-48 bg-zinc-200 rounded-2xl animate-pulse mb-6"></div>
<div className="space-y-4">
<div className="h-4 bg-zinc-200 rounded w-3/4 animate-pulse"></div>
<div className="h-4 bg-zinc-200 rounded w-1/2 animate-pulse"></div>
<div className="h-4 bg-zinc-200 rounded w-full animate-pulse"></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="h-32 bg-zinc-200 rounded-xl animate-pulse delay-75"></div>
<div className="h-32 bg-zinc-200 rounded-xl animate-pulse delay-100"></div>
<div className="h-32 bg-zinc-200 rounded-xl animate-pulse delay-150"></div>
<div className="h-32 bg-zinc-200 rounded-xl animate-pulse delay-200"></div>
</div>
</div>

<div className="w-full bg-white flex justify-center pb-2 pt-2 cursor-pointer absolute bottom-0" onclick="closeApp()">
<div className="w-32 h-1.5 bg-black rounded-full"></div>
</div>
</div>
</div>

<a className="fixed bottom-6 right-6 bg-zinc-900 text-white border border-zinc-800 rounded-full px-5 py-2.5 text-xs font-medium tracking-tight hover:bg-zinc-800 transition-colors cursor-pointer shadow-lg flex items-center gap-2 z-[100]" download="ios-simulation.html" id="download-btn">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
        Download HTML
    </a>


    </>
  );
}
