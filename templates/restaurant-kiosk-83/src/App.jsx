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



        function goTo(screenId) {
            const screens = ['screen-1', 'screen-2', 'screen-3', 'screen-4', 'screen-5'];
            screens.forEach(id => {
                document.getElementById(id).classList.add('hidden');
            });

            const header = document.getElementById('global-header');
            if (screenId === 'screen-1' || screenId === 'screen-5') {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }

            const target = document.getElementById(screenId);
            target.classList.remove('hidden');

            if(screenId === 'screen-3') {
                const transcript = document.getElementById('voice-transcript');
                transcript.classList.add('hidden');
                setTimeout(() => {
                    transcript.classList.remove('hidden');
                }, 1500);
            }
        }

        function toggleOption(btn) {
            const isActive = btn.classList.contains('bg-zinc-900');
            if (isActive) {
                btn.classList.remove('bg-zinc-900', 'text-white', 'border-zinc-900');
                btn.classList.add('text-zinc-600', 'border-zinc-200');
            } else {
                btn.classList.add('bg-zinc-900', 'text-white', 'border-zinc-900');
                btn.classList.remove('text-zinc-600', 'border-zinc-200');
            }
        }

        // Voice Overlay Logic
        function openVoiceMode() {
            const overlay = document.getElementById('voice-overlay');
            const sheet = document.getElementById('voice-sheet');
            
            overlay.classList.remove('hidden');
            // Trigger animation frame
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                sheet.classList.remove('translate-y-full');
            }, 10);
        }

        function closeVoiceMode() {
            const overlay = document.getElementById('voice-overlay');
            const sheet = document.getElementById('voice-sheet');
            
            overlay.classList.add('opacity-0');
            sheet.classList.add('translate-y-full');

            setTimeout(() => {
                overlay.classList.add('hidden');
            }, 300);
        }
    
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
      

<main className="relative w-full max-w-[480px] h-[850px] bg-zinc-50 overflow-hidden shadow-2xl rounded-3xl ring-8 ring-zinc-900">

<header className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between p-6 hidden" id="global-header">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight uppercase">Fresh<span className="text-orange-600">Eats</span></span>
</div>
<button className="text-xs font-medium text-zinc-500 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-sm border border-zinc-200 touch-feedback" onclick="goTo('screen-1')">
                Cancel
            </button>
</header>

<section className="absolute inset-0 z-30 bg-zinc-900 flex flex-col justify-end transition-transform duration-500" id="screen-1">
<div className="absolute inset-0">
<img alt="Food Hero" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
</div>
<div className="relative z-10 p-8 pb-12 flex flex-col gap-6">
<div>
<h1 className="text-5xl font-semibold text-white tracking-tight mb-2">Order<br/>Here</h1>
<p className="text-lg text-zinc-300 font-light">Tap to start or ask the assistant.</p>
</div>
<div className="flex flex-col gap-4 mt-4">
<button className="h-20 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl flex items-center justify-center gap-3 text-xl font-medium shadow-lg touch-feedback transition-colors" onclick="goTo('screen-2')">
<span>Start Order</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="24"></span>
</button>
<button className="h-20 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center gap-3 text-xl font-medium shadow-lg touch-feedback" onclick="openVoiceMode()">
<span className="iconify" data-icon="lucide:mic" data-width="24"></span>
<span>Talk to Assistant</span>
</button>
</div>
<div className="flex justify-between items-center mt-4">
<button className="flex items-center gap-2 text-zinc-400 text-sm">
<span className="iconify" data-icon="lucide:accessibility" data-width="18"></span>
<span>Accessibility</span>
</button>
<div className="flex gap-1">
<div className="w-1 h-1 bg-green-500 rounded-full"></div>
<span className="text-xs text-zinc-500">System Active</span>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 z-20 bg-zinc-50 pt-24 pb-32 overflow-y-auto hidden" id="screen-2">
<div className="px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-6">What are you<br/>craving?</h2>
<div className="grid grid-cols-2 gap-4">

<div className="relative group h-48 rounded-2xl overflow-hidden cursor-pointer touch-feedback shadow-sm" onclick="goTo('screen-3')">
<img alt="Burgers" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white font-medium text-lg">Burgers</span>
</div>
</div>
<div className="relative group h-48 rounded-2xl overflow-hidden cursor-pointer touch-feedback shadow-sm" onclick="goTo('screen-3')">
<img alt="Bowls" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white font-medium text-lg">Bowls</span>
</div>
</div>
<div className="relative group h-48 rounded-2xl overflow-hidden cursor-pointer touch-feedback shadow-sm" onclick="goTo('screen-3')">
<img alt="Sides" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1625937759420-26d7e003e04c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white font-medium text-lg">Sides</span>
</div>
</div>
<div className="relative group h-48 rounded-2xl overflow-hidden cursor-pointer touch-feedback shadow-sm" onclick="goTo('screen-3')">
<img alt="Drinks" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="text-white font-medium text-lg">Drinks</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6 z-30">
<button className="w-full glass-panel p-4 rounded-xl border border-zinc-200 shadow-lg flex items-center gap-4 text-left touch-feedback group" onclick="openVoiceMode()">
<div className="bg-orange-100 p-2 rounded-full text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:mic" data-width="20"></span>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wide font-medium">Try saying</p>
<p className="text-sm font-medium text-zinc-800">"I want a spicy chicken bowl"</p>
</div>
</button>
</div>
</section>

<div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex-col justify-end transition-opacity duration-300 opacity-0" id="voice-overlay">
<div className="absolute inset-0" onclick="closeVoiceMode()"></div> 
<div className="relative bg-zinc-900 w-full rounded-t-[2.5rem] p-8 pb-12 shadow-2xl ring-1 ring-white/10 transform transition-transform duration-300 translate-y-full" id="voice-sheet">

<button className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors" onclick="closeVoiceMode()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
<div className="flex flex-col items-center justify-center pt-4">

<div className="mb-6 bg-orange-600/20 p-4 rounded-full">
<span className="iconify text-orange-500" data-icon="lucide:mic" data-width="32"></span>
</div>

<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Listening...</h3>
<p className="text-zinc-400 text-sm mb-10 text-center px-8">Go ahead, I'm listening.</p>

<div className="h-16 flex items-center justify-center gap-2 voice-active">
<div className="w-2 bg-orange-500 rounded-full h-16 voice-bar"></div>
<div className="w-2 bg-orange-500 rounded-full h-16 voice-bar"></div>
<div className="w-2 bg-orange-500 rounded-full h-16 voice-bar"></div>
<div className="w-2 bg-orange-500 rounded-full h-16 voice-bar"></div>
<div className="w-2 bg-orange-500 rounded-full h-16 voice-bar"></div>
</div>
</div>
</div>
</div>

<section className="absolute inset-0 z-20 bg-zinc-50 hidden flex flex-col h-full" id="screen-3">
<div className="relative h-[35%] shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-6 left-6 bg-white/90 backdrop-blur p-3 rounded-full shadow-md touch-feedback z-10" onclick="goTo('screen-2')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="24"></span>
</button>
</div>
<div className="flex-1 -mt-6 bg-zinc-50 rounded-t-3xl relative z-10 px-6 pt-8 pb-32 overflow-y-auto">
<div className="flex justify-between items-start mb-2">
<h2 className="text-2xl font-semibold tracking-tight">Double Truffle Burger</h2>
<span className="text-2xl font-medium text-orange-600">$12.50</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-8">Wagyu beef patty, truffle aioli, aged swiss cheese, arugula, and caramelized onions.</p>
<div className="hidden mb-6 bg-zinc-900 text-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-pulse" id="voice-transcript">
<span className="iconify text-orange-500" data-icon="lucide:sparkles" data-width="18"></span>
<p className="text-sm font-medium">"No onions, extra cheese please"</p>
</div>
<div className="space-y-6">
<div>
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">Size</h3>
<div className="flex gap-3">
<button className="flex-1 py-3 px-4 rounded-xl border border-orange-600 bg-orange-50 text-orange-700 font-medium text-sm flex justify-center items-center touch-feedback">
                                Regular
                            </button>
<button className="flex-1 py-3 px-4 rounded-xl border border-zinc-200 text-zinc-600 font-medium text-sm flex justify-center items-center touch-feedback">
                                Large (+$3)
                            </button>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">Remove</h3>
<div className="flex flex-wrap gap-3">
<button className="option-toggle py-2 px-4 rounded-full border border-zinc-200 text-zinc-600 text-sm touch-feedback flex items-center gap-2" onclick="toggleOption(this)">
<span>Onions</span>
</button>
<button className="option-toggle py-2 px-4 rounded-full border border-zinc-200 text-zinc-600 text-sm touch-feedback flex items-center gap-2" onclick="toggleOption(this)">
<span>Pickles</span>
</button>
<button className="option-toggle py-2 px-4 rounded-full border border-zinc-200 text-zinc-600 text-sm touch-feedback flex items-center gap-2" onclick="toggleOption(this)">
<span>Sauce</span>
</button>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wide mb-3">Add-ons</h3>
<div className="flex flex-wrap gap-3">
<button className="option-toggle py-2 px-4 rounded-full border border-zinc-200 text-zinc-600 text-sm touch-feedback" onclick="toggleOption(this)">
<span>+ Bacon ($2)</span>
</button>
<button className="option-toggle py-2 px-4 rounded-full border border-zinc-200 text-zinc-600 text-sm touch-feedback" onclick="toggleOption(this)">
<span>+ Avocado ($1.5)</span>
</button>
</div>
</div>
</div>
<div className="flex items-center justify-between mt-8 p-4 bg-white border border-zinc-100 rounded-2xl shadow-sm">
<span className="font-medium text-zinc-900">Quantity</span>
<div className="flex items-center gap-6">
<button className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center touch-feedback hover:bg-zinc-200">
<span className="iconify" data-icon="lucide:minus" data-width="20"></span>
</button>
<span className="text-xl font-semibold">1</span>
<button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center touch-feedback hover:bg-zinc-700">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-zinc-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
<button className="w-full h-16 bg-zinc-900 text-white rounded-xl flex items-center justify-between px-6 font-medium shadow-lg touch-feedback" onclick="goTo('screen-4')">
<span>Add to Order</span>
<span>$12.50</span>
</button>
</div>
</section>

<section className="absolute inset-0 z-20 bg-zinc-50 pt-24 hidden flex flex-col h-full" id="screen-4">
<div className="px-6 flex-1 overflow-y-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Your Order</h2>
<div className="flex gap-4 mb-6">
<img className="w-20 h-20 rounded-xl object-cover shrink-0" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-medium text-zinc-900">Double Truffle Burger</h3>
<span className="font-medium text-zinc-900">$12.50</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Regular Size, No Onions, Extra Cheese</p>
<div className="flex gap-3 mt-3">
<button className="text-xs font-medium text-zinc-400 underline decoration-zinc-300">Edit</button>
<button className="text-xs font-medium text-red-400 underline decoration-red-200">Remove</button>
</div>
</div>
</div>
<div className="flex gap-4 mb-6 opacity-60">
<img className="w-20 h-20 rounded-xl object-cover shrink-0" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex justify-between items-start">
<h3 className="font-medium text-zinc-900">Cola Zero</h3>
<span className="font-medium text-zinc-900">$2.50</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Medium, No Ice</p>
<div className="flex gap-3 mt-3">
<button className="text-xs font-medium text-zinc-400 underline decoration-zinc-300">Edit</button>
<button className="text-xs font-medium text-red-400 underline decoration-red-200">Remove</button>
</div>
</div>
</div>
<button className="w-full py-4 border border-dashed border-zinc-300 rounded-xl text-zinc-500 font-medium text-sm flex items-center justify-center gap-2 hover:bg-zinc-50 hover:border-zinc-400 transition-colors" onclick="goTo('screen-2')">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
                    Add More Items
                </button>
</div>
<div className="bg-white border-t border-zinc-100 p-6 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
<div className="flex justify-between mb-2">
<span className="text-zinc-500">Subtotal</span>
<span className="text-zinc-900">$15.00</span>
</div>
<div className="flex justify-between mb-6">
<span className="text-zinc-500">Tax</span>
<span className="text-zinc-900">$1.20</span>
</div>
<div className="flex justify-between mb-6 text-xl font-semibold">
<span>Total</span>
<span>$16.20</span>
</div>
<button className="w-full h-16 bg-orange-600 text-white rounded-xl text-lg font-medium shadow-lg touch-feedback flex justify-between items-center px-6" onclick="goTo('screen-5')">
<span>Checkout</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="24"></span>
</button>
<div className="mt-4 flex justify-center items-center gap-2 text-zinc-400 text-xs">
<span className="iconify" data-icon="lucide:mic" data-width="14"></span>
<span>"Remove the drink"</span>
</div>
</div>
</section>

<section className="absolute inset-0 z-30 bg-zinc-900 flex flex-col justify-center items-center text-center p-8 hidden" id="screen-5">
<div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl animate-[bounce_1s_ease-out]">
<span className="iconify text-white" data-icon="lucide:check" data-width="48"></span>
</div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-2">Order Confirmed</h2>
<p className="text-zinc-400 text-lg mb-12">Please take your receipt below.</p>
<div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 w-full max-w-sm mb-8">
<p className="text-sm text-zinc-400 uppercase tracking-widest mb-2">Order Number</p>
<p className="text-6xl font-bold text-white tracking-tighter">#804</p>
</div>
<button className="absolute bottom-8 text-zinc-500 text-sm hover:text-white transition-colors" onclick="goTo('screen-1')">
                Start New Order
            </button>
</section>
</main>


    </>
  );
}
