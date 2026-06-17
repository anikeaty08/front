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
      

<div className="fixed inset-0 opacity-20">

<div className="absolute inset-0">
<span className="rain-char text-gray-400">V</span>
<span className="rain-char text-gray-500">R</span>
<span className="rain-char text-gray-300">0</span>
<span className="rain-char text-gray-400">1</span>
<span className="rain-char text-gray-500">ミ</span>
<span className="rain-char text-gray-400">A</span>
<span className="rain-char text-gray-500">ネ</span>
<span className="rain-char text-gray-300">2</span>
<span className="rain-char text-gray-400">ム</span>
<span className="rain-char text-gray-500">3</span>
<span className="rain-char text-gray-300">D</span>
<span className="rain-char text-gray-400">ハ</span>
<span className="rain-char text-gray-500">4</span>
<span className="rain-char text-gray-400">ラ</span>
<span className="rain-char text-gray-500">C</span>
<span className="rain-char text-gray-300">5</span>
<span className="rain-char text-gray-400">モ</span>
<span className="rain-char text-gray-500">A</span>
<span className="rain-char text-gray-400">R</span>
<span className="rain-char text-gray-500">ノ</span>
<span className="rain-char text-gray-300">6</span>
<span className="rain-char text-gray-400">7</span>
<span className="rain-char text-gray-500">リ</span>
<span className="rain-char text-gray-400">8</span>
<span className="rain-char text-gray-500">ス</span>
<span className="rain-char text-gray-300">E</span>
<span className="rain-char text-gray-400">M</span>
<span className="rain-char text-gray-500">9</span>
<span className="rain-char text-gray-400">シ</span>
<span className="rain-char text-gray-500">G</span>
</div>

<div className="absolute inset-0 opacity-50">
<span className="rain-char rain-char-fast text-gray-600" style={{left: '3%', animationDelay: '0.3s'}}>0</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '9%', animationDelay: '1.4s'}}>カ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '16%', animationDelay: '0.8s'}}>!</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '23%', animationDelay: '2.1s'}}>ワ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '30%', animationDelay: '0.2s'}}>X</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '37%', animationDelay: '1.8s'}}>シ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '44%', animationDelay: '0.9s'}}>#</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '51%', animationDelay: '2.4s'}}>ん</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '58%', animationDelay: '0.6s'}}>$</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '65%', animationDelay: '1.2s'}}>ロ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '72%', animationDelay: '0.1s'}}>%</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '79%', animationDelay: '2.0s'}}>ン</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '86%', animationDelay: '0.7s'}}>^</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '93%', animationDelay: '1.5s'}}>ョ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '6%', animationDelay: '1.0s'}}>&amp;</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '13%', animationDelay: '2.3s'}}>マ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '20%', animationDelay: '0.4s'}}>(</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '27%', animationDelay: '1.7s'}}>タ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '34%', animationDelay: '0.5s'}}>)</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '41%', animationDelay: '1.9s'}}>ソ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '48%', animationDelay: '0.3s'}}>-</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '55%', animationDelay: '2.2s'}}>コ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '62%', animationDelay: '0.8s'}}>+</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '69%', animationDelay: '1.6s'}}>と</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '76%', animationDelay: '0.2s'}}>=</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '83%', animationDelay: '1.3s'}}>ウ</span>
<span className="rain-char rain-char-fast text-gray-600" style={{left: '90%', animationDelay: '0.9s'}}>@</span>
<span className="rain-char rain-char-slow text-gray-700" style={{left: '97%', animationDelay: '2.5s'}}>テ</span>
</div>

<div className="absolute inset-0 opacity-25">
<span className="rain-char text-gray-800" style={{left: '1%', fontSize: '10px', animationDelay: '0.1s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '4%', fontSize: '10px', animationDelay: '0.6s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '7%', fontSize: '10px', animationDelay: '1.1s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '10%', fontSize: '10px', animationDelay: '1.6s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '14%', fontSize: '10px', animationDelay: '0.4s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '17%', fontSize: '10px', animationDelay: '0.9s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '21%', fontSize: '10px', animationDelay: '1.4s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '24%', fontSize: '10px', animationDelay: '1.9s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '26%', fontSize: '10px', animationDelay: '0.2s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '29%', fontSize: '10px', animationDelay: '0.7s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '31%', fontSize: '10px', animationDelay: '1.2s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '33%', fontSize: '10px', animationDelay: '1.7s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '36%', fontSize: '10px', animationDelay: '0.3s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '39%', fontSize: '10px', animationDelay: '0.8s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '43%', fontSize: '10px', animationDelay: '1.3s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '46%', fontSize: '10px', animationDelay: '1.8s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '49%', fontSize: '10px', animationDelay: '0.5s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '53%', fontSize: '10px', animationDelay: '1.0s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '56%', fontSize: '10px', animationDelay: '1.5s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '59%', fontSize: '10px', animationDelay: '2.0s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '63%', fontSize: '10px', animationDelay: '0.1s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '66%', fontSize: '10px', animationDelay: '0.6s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '70%', fontSize: '10px', animationDelay: '1.1s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '73%', fontSize: '10px', animationDelay: '1.6s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '77%', fontSize: '10px', animationDelay: '0.4s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '80%', fontSize: '10px', animationDelay: '0.9s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '84%', fontSize: '10px', animationDelay: '1.4s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '87%', fontSize: '10px', animationDelay: '1.9s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '91%', fontSize: '10px', animationDelay: '0.2s'}}>1</span>
<span className="rain-char text-gray-800" style={{left: '94%', fontSize: '10px', animationDelay: '0.7s'}}>0</span>
<span className="rain-char text-gray-800" style={{left: '98%', fontSize: '10px', animationDelay: '1.2s'}}>1</span>
</div>
</div>

<div className="relative z-10 min-h-screen flex items-center justify-center px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="mb-8 slide-in-1">
<h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight">
                    ENTER THE
                    <span className="text-white">
                        METAVERSE
                    </span>
</h1>
<p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                    Experience reality beyond imagination. Step into immersive worlds where the impossible becomes possible.
                </p>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-12 slide-in-2">
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 float">
<span className="text-white font-mono text-sm">8K RESOLUTION</span>
</div>
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 float" style={{animationDelay: '0.5s'}}>
<span className="text-white font-mono text-sm">120Hz REFRESH</span>
</div>
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 float" style={{animationDelay: '1s'}}>
<span className="text-white font-mono text-sm">HAPTIC FEEDBACK</span>
</div>
<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 float" style={{animationDelay: '1.5s'}}>
<span className="text-white font-mono text-sm">WIRELESS</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 slide-in-3">
<button className="bg-white hover:bg-gray-200 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 btn-glow">
                    START YOUR JOURNEY
                </button>
<button className="border-2 border-white text-white hover:bg-white hover:text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                    WATCH DEMO
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto slide-in-4">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white">1M+</div>
<div className="text-gray-500 font-mono text-sm">ACTIVE USERS</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white">500+</div>
<div className="text-gray-500 font-mono text-sm">VR EXPERIENCES</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold text-white">99.9%</div>
<div className="text-gray-500 font-mono text-sm">UPTIME</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 slide-in-5">
<div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
<div className="w-1 h-2 bg-white rounded-full mt-2 float"></div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none slide-in-6"></div>
<div className="fixed inset-0 bg-gradient-radial from-gray-900/10 via-transparent to-transparent pointer-events-none"></div>

    </>
  );
}
