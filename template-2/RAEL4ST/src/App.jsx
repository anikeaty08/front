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
      

<div className="fixed inset-0 opacity-30">

<div className="absolute inset-0">
<span className="rain-char text-green-400">V</span>
<span className="rain-char text-green-300">R</span>
<span className="rain-char text-green-200">0</span>
<span className="rain-char text-green-400">1</span>
<span className="rain-char text-green-300">ミ</span>
<span className="rain-char text-green-400">A</span>
<span className="rain-char text-green-300">ネ</span>
<span className="rain-char text-green-200">2</span>
<span className="rain-char text-green-400">ム</span>
<span className="rain-char text-green-300">3</span>
<span className="rain-char text-green-200">D</span>
<span className="rain-char text-green-400">ハ</span>
<span className="rain-char text-green-300">4</span>
<span className="rain-char text-green-400">ラ</span>
<span className="rain-char text-green-300">C</span>
<span className="rain-char text-green-200">5</span>
<span className="rain-char text-green-400">モ</span>
<span className="rain-char text-green-300">A</span>
<span className="rain-char text-green-400">R</span>
<span className="rain-char text-green-300">ノ</span>
<span className="rain-char text-green-200">6</span>
<span className="rain-char text-green-400">7</span>
<span className="rain-char text-green-300">リ</span>
<span className="rain-char text-green-400">8</span>
<span className="rain-char text-green-300">ス</span>
<span className="rain-char text-green-200">E</span>
<span className="rain-char text-green-400">M</span>
<span className="rain-char text-green-300">9</span>
<span className="rain-char text-green-400">シ</span>
<span className="rain-char text-green-300">G</span>
</div>

<div className="absolute inset-0 opacity-50">
<span className="rain-char rain-char-fast text-green-500" style={{left: `3%`, animationDelay: `0.3s`}}>0</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `9%`, animationDelay: `1.4s`}}>カ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `16%`, animationDelay: `0.8s`}}>!</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `23%`, animationDelay: `2.1s`}}>ワ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `30%`, animationDelay: `0.2s`}}>X</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `37%`, animationDelay: `1.8s`}}>シ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `44%`, animationDelay: `0.9s`}}>#</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `51%`, animationDelay: `2.4s`}}>ん</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `58%`, animationDelay: `0.6s`}}>$</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `65%`, animationDelay: `1.2s`}}>ロ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `72%`, animationDelay: `0.1s`}}>%</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `79%`, animationDelay: `2.0s`}}>ン</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `86%`, animationDelay: `0.7s`}}>^</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `93%`, animationDelay: `1.5s`}}>ョ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `6%`, animationDelay: `1.0s`}}>&</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `13%`, animationDelay: `2.3s`}}>マ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `20%`, animationDelay: `0.4s`}}>(</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `27%`, animationDelay: `1.7s`}}>タ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `34%`, animationDelay: `0.5s`}}>)</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `41%`, animationDelay: `1.9s`}}>ソ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `48%`, animationDelay: `0.3s`}}>-</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `55%`, animationDelay: `2.2s`}}>コ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `62%`, animationDelay: `0.8s`}}>+</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `69%`, animationDelay: `1.6s`}}>と</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `76%`, animationDelay: `0.2s`}}>=</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `83%`, animationDelay: `1.3s`}}>ウ</span>
<span className="rain-char rain-char-fast text-green-500" style={{left: `90%`, animationDelay: `0.9s`}}>@</span>
<span className="rain-char rain-char-slow text-green-600" style={{left: `97%`, animationDelay: `2.5s`}}>テ</span>
</div>

<div className="absolute inset-0 opacity-25">
<span className="rain-char text-green-700" style={{left: `1%`, fontSize: `10px`, animationDelay: `0.1s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `4%`, fontSize: `10px`, animationDelay: `0.6s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `7%`, fontSize: `10px`, animationDelay: `1.1s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `10%`, fontSize: `10px`, animationDelay: `1.6s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `14%`, fontSize: `10px`, animationDelay: `0.4s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `17%`, fontSize: `10px`, animationDelay: `0.9s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `21%`, fontSize: `10px`, animationDelay: `1.4s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `24%`, fontSize: `10px`, animationDelay: `1.9s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `26%`, fontSize: `10px`, animationDelay: `0.2s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `29%`, fontSize: `10px`, animationDelay: `0.7s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `31%`, fontSize: `10px`, animationDelay: `1.2s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `33%`, fontSize: `10px`, animationDelay: `1.7s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `36%`, fontSize: `10px`, animationDelay: `0.3s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `39%`, fontSize: `10px`, animationDelay: `0.8s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `43%`, fontSize: `10px`, animationDelay: `1.3s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `46%`, fontSize: `10px`, animationDelay: `1.8s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `49%`, fontSize: `10px`, animationDelay: `0.5s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `53%`, fontSize: `10px`, animationDelay: `1.0s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `56%`, fontSize: `10px`, animationDelay: `1.5s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `59%`, fontSize: `10px`, animationDelay: `2.0s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `63%`, fontSize: `10px`, animationDelay: `0.1s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `66%`, fontSize: `10px`, animationDelay: `0.6s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `70%`, fontSize: `10px`, animationDelay: `1.1s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `73%`, fontSize: `10px`, animationDelay: `1.6s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `77%`, fontSize: `10px`, animationDelay: `0.4s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `80%`, fontSize: `10px`, animationDelay: `0.9s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `84%`, fontSize: `10px`, animationDelay: `1.4s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `87%`, fontSize: `10px`, animationDelay: `1.9s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `91%`, fontSize: `10px`, animationDelay: `0.2s`}}>1</span>
<span className="rain-char text-green-700" style={{left: `94%`, fontSize: `10px`, animationDelay: `0.7s`}}>0</span>
<span className="rain-char text-green-700" style={{left: `98%`, fontSize: `10px`, animationDelay: `1.2s`}}>1</span>
</div>
</div>

<div className="relative z-10 min-h-screen flex items-center justify-center text-slate-50 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="mb-8">
<h1 className="md:text-8xl ] text-6xl font-black text-gray-400 tracking-tight bg-[transparent mb-4">
                    ENTER THE
                    <span className="from-green-400 to-green-600 text-slate-50 bg-clip-text">
                        METAVERSE
                    </span>
</h1>
<p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                    Experience reality beyond imagination. Step into immersive worlds where the impossible becomes possible.
                </p>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-12">
<div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 float">
<span className="text-green-400 font-mono text-sm">8K RESOLUTION</span>
</div>
<div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 float" style={{animationDelay: `0.5s`}}>
<span className="text-green-400 font-mono text-sm">120Hz REFRESH</span>
</div>
<div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 float" style={{animationDelay: `1s`}}>
<span className="text-green-400 font-mono text-sm">HAPTIC FEEDBACK</span>
</div>
<div className="bg-gray-800/50 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 float" style={{animationDelay: `1.5s`}}>
<span className="text-green-400 font-mono text-sm">WIRELESS</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
<button className="hover:bg-green-600 transition-all duration-300 transform hover:scale-105 btn-glow text-lg font-bold text-black bg-green-500 rounded-lg px-8 py-4">
                    START YOUR JOURNEY
                </button>
<button className="hover:bg-green-500 hover:text-black transition-all duration-300 transform hover:scale-105 text-lg font-bold text-green-400 border-green-300 border-2 rounded-lg px-8 py-4">
                    WATCH DEMO
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
<div className="text-center">
<div className="md:text-4xl text-3xl font-bold text-slate-50">1M+</div>
<div className="text-sm text-gray-400 font-mono">ACTIVE USERS</div>
</div>
<div className="text-center">
<div className="md:text-4xl text-3xl font-bold text-slate-50">500+</div>
<div className="text-gray-400 font-mono text-sm">VR EXPERIENCES</div>
</div>
<div className="text-center">
<div className="md:text-4xl text-3xl font-bold text-slate-50">99.9%</div>
<div className="text-gray-400 font-mono text-sm">UPTIME</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
<div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
<div className="w-1 h-2 bg-green-500 rounded-full mt-2 float"></div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80 pointer-events-none"></div>
<div className="fixed inset-0 bg-gradient-radial from-green-900/10 via-transparent to-transparent pointer-events-none"></div>

    </>
  );
}
