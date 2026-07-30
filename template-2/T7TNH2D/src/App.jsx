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



  lucide.createIcons();

  // Analog Clock
  const hourHand = document.getElementById('hour');
  const minuteHand = document.getElementById('minute');
  const secondHand = document.getElementById('second');

  function setClock() {
    const now = new Date();
    const secondsRatio = now.getSeconds() / 60;
    const minutesRatio = (secondsRatio + now.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + now.getHours()) / 12;

    secondHand.style.transform = `rotate(${secondsRatio * 360}deg)`;
    minuteHand.style.transform = `rotate(${minutesRatio * 360}deg)`;
    hourHand.style.transform = `rotate(${hoursRatio * 360}deg)`;
  }

  setClock();
  setInterval(setClock, 1000);

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
      <div className="video-background-container fixed top-0 w-full h-screen -z-10 blur-2xl"><video autoPlay className="w-full h-full object-cover" loop muted playsInline src="https://cdn.midjourney.com/video/a55ecb14-20d9-44ab-9266-c3373ac45ff4/0.mp4"></video></div>
<main className="min-h-full flex flex-col relative z-10 pt-12 pr-4 pb-12 pl-4 items-center justify-start">
<h1 className="text-4xl mb-10 tracking-tight animate-fade-in font-geist font-semibold text-glass" style={{}}>AutoSync Hub</h1>
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 w-full max-w-7xl">

<div className="aspect-square rounded-3xl p-6 flex flex-col justify-between glass-card animate-fade-in delay-100">
<div className="flex justify-center">
<svg className="lucide lucide-car stroke-current opacity-80 w-[64px] h-[64px]" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" style={{width: `64px`, height: `64px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<div className="grid grid-cols-2 gap-4 text-center text-sm">
<div className="">
<p className="font-medium font-geist text-glass" style={{}}>41 <span className="text-xs font-geist" style={{}}>psi</span></p>
<p className="font-geist text-glass-muted" style={{}}>FL</p>
</div>
<div className="">
<p className="font-medium font-geist text-glass" style={{}}>40 <span className="text-xs font-geist" style={{}}>psi</span></p>
<p className="font-geist text-glass-muted" style={{}}>FR</p>
</div>
<div className="">
<p className="font-medium font-geist text-glass" style={{}}>42 <span className="text-xs font-geist" style={{}}>psi</span></p>
<p className="font-geist text-glass-muted" style={{}}>RL</p>
</div>
<div className="">
<p className="font-medium font-geist text-glass" style={{}}>41 <span className="text-xs font-geist" style={{}}>psi</span></p>
<p className="font-geist text-glass-muted" style={{}}>RR</p>
</div>
</div>
<p className="text-glass-muted text-sm font-geist text-center mt-4" style={{}}>Tire Monitor</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col justify-between glass-card animate-fade-in delay-200">
<div className="flex space-x-6 justify-center">
<div className="flex flex-col items-center">
<svg className="lucide lucide-shield-check w-8 h-8 stroke-current text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-xs mt-1 font-geist text-glass-muted" style={{}}>Driver</p>
</div>
<div className="flex flex-col items-center">
<svg className="lucide lucide-shield-alert w-8 h-8 stroke-current text-yellow-400" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
<p className="text-xs mt-1 font-geist text-glass-muted" style={{}}>Passenger</p>
</div>
</div>
<div className="flex mt-4 space-x-10 justify-center">
<div className="flex flex-col items-center">
<svg className="lucide lucide-lock w-8 h-8 stroke-current text-red-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<p className="text-xs mt-1 font-geist text-glass-muted" style={{}}>Left</p>
</div>
<div className="flex flex-col items-center">
<svg className="lucide lucide-unlock w-8 h-8 stroke-current text-red-400" data-lucide="unlock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
<p className="text-xs mt-1 font-geist text-glass-muted" style={{}}>Right</p>
</div>
</div>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>Safety Status</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col justify-between overflow-hidden glass-card animate-fade-in delay-300">
<div className="relative flex-1 rounded-2xl overflow-hidden">
<img alt="SmartDrive Preview" className="w-full h-full object-cover" src="https://cdn.midjourney.com/b0ad527e-4204-493e-9d20-334d36e18515/0_3.png?w=800&q=80" />
<div className=""></div>
<div className="absolute top-3 left-3 glass-accent px-3 py-1.5 rounded-full text-xs font-medium font-geist text-emerald-300" style={{}}>ACTIVE</div>
</div>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>SmartDrive</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col glass-card animate-fade-in delay-400">
<h2 className="text-sm font-medium mb-4 font-geist text-glass-muted" style={{}}>SCHEDULE</h2>
<ul className="space-y-3 flex-1 overflow-auto">
<li className="flex">
<span className="w-1.5 rounded-full bg-orange-400 mr-3 mt-1 flex-shrink-0"></span>
<div className="">
<p className="text-sm font-medium font-geist text-glass" style={{}}>9:00 AM – 10:00 AM</p>
<p className="text-xs font-geist text-glass-muted" style={{}}>Client Meeting</p>
</div>
</li>
<li className="flex">
<span className="w-1.5 rounded-full bg-purple-400 mr-3 mt-1 flex-shrink-0"></span>
<div className="">
<p className="text-sm font-medium font-geist text-glass" style={{}}>2:00 PM – 3:30 PM</p>
<p className="text-xs font-geist text-glass-muted" style={{}}>Project Review</p>
</div>
</li>
<li className="text-xs text-glass-muted pl-5 font-geist" style={{}}>3 more events…</li>
</ul>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>Schedule</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col justify-between glass-card animate-fade-in delay-500">
<div className="">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-map-pin w-4 h-4 stroke-current text-glass-muted" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-sm font-geist text-glass" style={{}}>Seattle</p>
</div>
<p className="text-6xl font-geist font-semibold text-glass" style={{}}>68°</p>
</div>
<div className="flex items-center space-x-2 mt-2">
<svg className="lucide lucide-cloud-rain w-4 h-4 stroke-current text-blue-400" data-lucide="cloud-rain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M16 14v6"></path><path d="M8 14v6"></path><path d="M12 16v6"></path></svg>
<p className="text-sm font-geist text-glass" style={{}}>Light Rain</p>
</div>
<p className="text-xs mt-1 font-geist text-glass-muted" style={{}}>H: 71° L: 54°</p>
</div>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>Climate</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col glass-card animate-fade-in delay-600">
<h2 className="text-sm font-medium mb-4 font-geist text-glass-muted" style={{}}>Journey Stats</h2>
<ul className="space-y-3 flex-1">
<li className="flex justify-between text-sm">
<span className="font-geist text-glass-muted" style={{}}>Distance</span>
<span className="font-medium font-geist text-glass" style={{}}>127 mi</span>
</li>
<li className="flex justify-between text-sm">
<span className="font-geist text-glass-muted" style={{}}>Duration</span>
<span className="font-medium font-geist text-glass" style={{}}>2 hr 15 min</span>
</li>
<li className="flex justify-between text-sm">
<span className="font-geist text-glass-muted" style={{}}>Speed</span>
<span className="font-medium font-geist text-glass" style={{}}>58 mph</span>
</li>
<li className="flex justify-between text-sm">
<span className="font-geist text-glass-muted" style={{}}>Fuel Economy</span>
<span className="font-medium font-geist text-glass" style={{}}>42.1 mpg</span>
</li>
</ul>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>Journey Stats</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col justify-between glass-card animate-fade-in delay-700">
<div className="">
<div className="flex items-start justify-between">
<div className="">
<p className="text-5xl leading-none font-geist font-semibold text-glass" style={{}}>284 <span className="text-xl font-medium font-geist" style={{}}>mi</span></p>
<p className="text-sm mt-1 font-geist text-glass-muted" style={{}}>PowerCell</p>
</div>
<svg className="lucide lucide-zap w-6 h-6 stroke-current text-orange-400 mt-1" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="w-full h-2 rounded-full mt-4 progress-glass">
<div className="h-full rounded-full progress-fill" style={{width: `78%`}}></div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4 text-sm">
<div className="">
<p className="font-geist text-glass-muted" style={{}}>Full Charge</p>
<p className="font-medium font-geist text-glass" style={{}}>in 28 min</p>
</div>
<div>
<p className="font-geist text-glass-muted" style={{}}>Rate</p>
<p className="font-medium font-geist text-glass" style={{}}>87 kW</p>
</div>
</div>
</div>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>PowerCell</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col justify-between overflow-hidden glass-card animate-fade-in delay-800">
<div className="relative flex-1 rounded-2xl overflow-hidden">
<img alt="Navigator Preview" className="w-full h-full object-cover" src="https://cdn.midjourney.com/5f01dd9f-8748-4269-9e80-3103055d2c04/0_0.png?w=800&q=80" />
<div className="absolute top-4 left-4 glass-accent rounded-xl px-3 py-1.5 flex items-center space-x-2 text-sm">
<svg className="lucide lucide-compass w-4 h-4 stroke-current text-orange-400" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist text-glass" style={{}}>18 mi</span>
<span className="font-geist text-glass-muted" style={{}}>|</span>
<span className="font-geist text-glass" style={{}}>Turn Right</span>
</div>
</div>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>Navigator</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col items-center justify-center glass-card animate-fade-in delay-900">
<div className="relative flex items-center justify-center w-40 h-40 rounded-full border-2 border-white/20" id="clock">
<div className="absolute w-1 h-1 rounded-full bg-white/90"></div>
<div className="origin-bottom w-1.5 absolute bottom-1/2 rounded bg-white/90" id="hour" style={{height: `28%`, transform: `rotate(509.841667deg)`}}></div>
<div className="origin-bottom w-1 absolute bottom-1/2 rounded bg-white/90" id="minute" style={{height: `38%`, transform: `rotate(358.1deg)`}}></div>
<div className="origin-bottom w-0.5 bg-orange-400 absolute bottom-1/2 rounded" id="second" style={{height: `44%`, transform: `rotate(246deg)`}}></div>
</div>
<p className="text-sm mt-4 font-geist text-glass-muted" style={{}}>Timekeeper</p>
</div>

<div className="aspect-square rounded-3xl p-6 flex flex-col justify-between glass-card animate-fade-in delay-1000">
<div className="flex-1 rounded-2xl overflow-hidden">
<img alt="Album Cover" className="w-full h-full object-cover" src="https://cdn.midjourney.com/ff469743-a422-4f94-9180-dd7715886658/0_3.png?w=800&q=80" />
</div>
<div className="mt-4">
<p className="text-sm font-medium font-geist text-glass" style={{}}>Midnight City</p>
<p className="text-xs font-geist text-glass-muted" style={{}}>M83</p>
</div>
<p className="text-center text-sm mt-4 font-geist text-glass-muted" style={{}}>SoundWave</p>
</div>
</section>
</main>


    </>
  );
}
