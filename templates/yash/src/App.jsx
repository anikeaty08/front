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



        const messages = {
            1: {
                title: "Why I Love You",
                text: "I love you for the way you understand me without words, for how you support my dreams, and for being my safe haven. Your kindness, your strength, and your beautiful soul captivate me every single day. You are everything I never knew I needed and everything I'll always want."
            },
            2: {
                title: "You Make Me Feel...",
                text: "You make me feel like I'm floating on clouds, like every day is a celebration, like I can conquer the world with you by my side. You bring out the best in me, make me laugh until my cheeks hurt, and fill my heart with warmth that radiates through my entire being."
            },
            3: {
                title: "My Promise To You",
                text: "I promise to love you through every season of life, to stand by your side in joy and in challenges, to make you smile even on the hardest days. I promise to cherish you, respect you, and choose you every single day. You have my heart, now and always."
            }
        };

        function openLetter() {
            document.getElementById('frontPage').classList.add('hidden');
            document.getElementById('letterPage').classList.remove('hidden');
            document.getElementById('letterPage').classList.add('fade-in');
            lucide.createIcons();
        }

        function showMessage(num) {
            const messageBox = document.getElementById('messageBox');
            const messageTitle = document.getElementById('messageTitle');
            const messageText = document.getElementById('messageText');
            
            messageTitle.textContent = messages[num].title;
            messageText.textContent = messages[num].text;
            
            messageBox.classList.remove('hidden');
            messageBox.classList.add('fade-in');
            
            messageBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            lucide.createIcons();
        }

        function closeMessage() {
            const messageBox = document.getElementById('messageBox');
            messageBox.classList.add('hidden');
        }

        lucide.createIcons();
    
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
      

<div className="max-w-2xl w-full" id="frontPage">
<div className="relative">

<div className="absolute -top-8 -left-8 float-heart" style={{animationDelay: '0s'}}>
<i className="w-8 h-8 text-pink-300 fill-pink-300" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="absolute -top-12 right-12 float-heart" style={{animationDelay: '1s'}}>
<i className="w-6 h-6 text-rose-300 fill-rose-300" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="absolute -top-6 right-4 float-heart" style={{animationDelay: '2s'}}>
<i className="w-5 h-5 text-red-300 fill-red-300" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="absolute bottom-12 -left-4 float-heart" style={{animationDelay: '1.5s'}}>
<i className="w-6 h-6 text-pink-400 fill-pink-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="absolute bottom-8 -right-8 float-heart" style={{animationDelay: '0.5s'}}>
<i className="w-7 h-7 text-rose-400 fill-rose-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="letter-paper rounded-3xl shadow-2xl border border-pink-100 p-12 sm:p-16 relative overflow-hidden text-center">

<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-100 to-transparent rounded-bl-full opacity-40"></div>
<div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-rose-100 to-transparent rounded-tr-full opacity-40"></div>

<div className="relative z-10 space-y-8">

<div className="pulse-heart inline-block mb-4">
<div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-full p-8 shadow-xl">
<i className="w-20 h-20 text-white" data-lucide="mail-heart" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="slide-up" style={{animationDelay: '0.2s'}}>
<h1 className="text-5xl sm:text-6xl font-semibold text-rose-900 tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        For Aditi
                    </h1>
<div className="w-32 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto mb-6"></div>
</div>

<div className="slide-up" style={{animationDelay: '0.4s'}}>
<p className="text-xl sm:text-2xl text-gray-700 mb-2" style={{fontFamily: '\'Inter\', sans-serif'}}>
                        I have something special to tell you...
                    </p>
<p className="text-base text-gray-500" style={{fontFamily: '\'Inter\', sans-serif'}}>
                        Open this letter to discover a message from my heart
                    </p>
</div>

<div className="slide-up pt-4" style={{animationDelay: '0.6s'}}>
<button className="group bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-3 mx-auto border-2 border-white shadow-xl" onclick="openLetter()">
<i className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
<span className="text-xl font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>Open My Letter</span>
<i className="w-6 h-6 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="flex justify-center gap-3 pt-6">
<i className="w-4 h-4 text-rose-400 fill-rose-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-pink-400 fill-pink-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
<i className="w-4 h-4 text-red-400 fill-red-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="mt-6 text-center slide-up" style={{animationDelay: '0.8s'}}>
<p className="text-sm text-rose-800/60" style={{fontFamily: '\'Inter\', sans-serif'}}>With love from Yash ❤️</p>
</div>
</div>

<div className="hidden max-w-2xl w-full" id="letterPage">
<div className="relative">

<div className="absolute -top-8 -left-8 float-heart" style={{animationDelay: '0s'}}>
<i className="w-6 h-6 text-pink-300 fill-pink-300" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="absolute -top-12 right-12 float-heart" style={{animationDelay: '1s'}}>
<i className="w-5 h-5 text-rose-300 fill-rose-300" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="absolute -top-6 right-4 float-heart" style={{animationDelay: '2s'}}>
<i className="w-4 h-4 text-red-300 fill-red-300" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="letter-paper rounded-2xl shadow-2xl border border-pink-100 p-8 sm:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-transparent rounded-bl-full opacity-40"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-rose-100 to-transparent rounded-tr-full opacity-40"></div>

<div className="text-center mb-8 relative">
<div className="inline-block mb-4">
<i className="w-12 h-12 text-rose-400 mx-auto" data-lucide="mail-open" style={{strokeWidth: '1.5'}}></i>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold text-rose-900 tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>To My Dearest Aditi</h1>
<div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"></div>
</div>

<div className="space-y-6 mb-8 text-gray-700 relative" style={{fontFamily: '\'Inter\', sans-serif'}}>
<p className="text-base sm:text-lg leading-relaxed">
                    My Darling,
                </p>
<p className="text-base leading-relaxed">
                    Every moment with you feels like a beautiful dream I never want to wake up from. Your smile brightens my darkest days, and your laughter is the sweetest melody my heart has ever known.
                </p>
<p className="text-base leading-relaxed">
                    I cherish every second we spend together, every conversation we share, and every memory we create. You make my world complete in ways I never thought possible.
                </p>
<p className="text-base leading-relaxed">
                    Click the buttons below to discover just how much you mean to me...
                </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<button className="group bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 border border-pink-400" onclick="window.open('https://sweet-sayings-button.lovable.app', '_blank')">
<i className="w-5 h-5 fill-white" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>Another message for you</span>
</button>
<button className="group bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 border border-rose-400" onclick="showMessage(1)">
<i className="w-5 h-5" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>Why I Love You</span>
</button>
<button className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 border border-purple-400" onclick="showMessage(2)">
<i className="w-5 h-5 fill-white" data-lucide="star" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>You Make Me</span>
</button>
<button className="group bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3 border border-red-400" onclick="showMessage(3)">
<i className="w-5 h-5" data-lucide="moon-star" style={{strokeWidth: '1.5'}}></i>
<span className="font-medium" style={{fontFamily: '\'Inter\', sans-serif'}}>My Promise</span>
</button>
</div>

<div className="hidden bg-white rounded-xl p-6 border-2 border-pink-200 shadow-lg relative" id="messageBox">
<button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors" onclick="closeMessage()">
<i className="w-5 h-5" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-rose-500 fill-rose-500" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<h3 className="text-xl font-semibold text-rose-900 mb-2" id="messageTitle" style={{fontFamily: '\'Playfair Display\', serif'}}></h3>
<p className="text-gray-700 leading-relaxed" id="messageText" style={{fontFamily: '\'Inter\', sans-serif'}}></p>
</div>
</div>
</div>

<div className="mt-8 text-right relative">
<p className="text-2xl text-rose-900 mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>With all my love,</p>
<p className="text-3xl font-semibold text-rose-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Your Yash</p>
<div className="flex justify-end gap-2 mt-4">
<i className="w-4 h-4 text-rose-400 fill-rose-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
<i className="w-4 h-4 text-pink-400 fill-pink-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
<i className="w-4 h-4 text-red-400 fill-red-400" data-lucide="heart" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="mt-6 text-center">
<p className="text-sm text-rose-800/60" style={{fontFamily: '\'Inter\', sans-serif'}}>Made with love, just for you ❤️</p>
</div>
</div>


    </>
  );
}
