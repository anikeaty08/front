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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Random sparkle emojis floating up on click
    document.body.addEventListener('click', function(e) {
      if (e.target.closest('#popup-overlay')) return;
      const emojis = ['🎵','⭐','🎸','💫','🔥','🎤','✨','🎶'];
      const el = document.createElement('div');
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        position:fixed; left:${e.clientX}px; top:${e.clientY}px;
        pointer-events:none; font-size:1.5rem; z-index:9998;
        animation: floatUp 1.2s ease-out forwards;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1200);
    });

    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        0% { opacity:1; transform: translateY(0) scale(1); }
        100% { opacity:0; transform: translateY(-80px) scale(1.5); }
      }
    `;
    document.head.appendChild(style);

    // Hit counter increment
    let count = 1337;
    setInterval(() => {
      count++;
      const el = document.querySelector('.hit-counter');
      if(el) el.textContent = String(count).padStart(6,'0');
    }, 5000);
  
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
      

<div id="popup-overlay">
<div className="win98-panel" id="popup-box">
<div className="win98-titlebar flex items-center justify-between px-2 py-1">
<span className="text-xs font-bold text-white press-start" style={{fontSize: '0.45rem'}}>COUGHN.EXE</span>
<div className="flex gap-1">
<div className="win98-btn-close" onclick="document.getElementById('popup-overlay').style.display='none'">✕</div>
</div>
</div>
<div className="p-4 text-center">
<div className="text-4xl mb-2">🎵</div>
<p className="press-start text-center mb-3" style={{fontSize: '0.55rem', color: '#000080', lineHeight: '1.8'}}>
          WELCOME TO THE OFFICIAL COUGHN WEBSITE!!!
        </p>
<p className="comic text-sm text-black mb-3">
          You are visitor <span className="font-bold text-red-600">#001,337</span><br/>
          New music video is OUT NOW!!!
        </p>
<div className="under-construction h-4 mb-3"></div>
<button className="win98-btn w-full text-black font-bold" onclick="document.getElementById('popup-overlay').style.display='none'">
          ★ ENTER SITE ★
        </button>
</div>
</div>
</div>

<div className="overflow-hidden py-1" style={{background: '#ff00ff', borderBottom: '3px solid #ffff00'}}>
<div className="whitespace-nowrap marquee inline-block">
<span className="vt323 text-xl text-yellow-300 font-bold">
        🎵 WELCOME TO COUGHN'S OFFICIAL WEBSITE!!! 🎵    
        ★ NEW MUSIC VIDEO OUT NOW – CLICK TO WATCH!!! ★    
        🎵 STREAMING ON SPOTIFY · YOUTUBE · APPLE MUSIC 🎵    
        ★ BEST VIEWED IN 800x600 RESOLUTION ★    
        🎵 SIGN THE GUESTBOOK!!! 🎵    
        ★ SHARING IS CARING!!! ★    
      </span>
</div>
</div>

<div className="max-w-4xl mx-auto px-2 py-4">

<div className="win98-panel mb-3">
<div className="win98-titlebar px-2 py-1 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xs text-white font-bold vt323 text-lg">COUGHN.EXE — Home Page</span>
</div>
<div className="flex gap-1">
<div className="win98-btn text-xs px-2">_</div>
<div className="win98-btn text-xs px-2">□</div>
<div className="win98-btn-close">✕</div>
</div>
</div>
<div className="p-4 text-center" style={{background: 'linear-gradient(180deg, #000033, #000066)'}}>

<div className="flex justify-center gap-3 mb-2">
<span className="spin inline-block text-2xl">⭐</span>
<span className="spin inline-block text-2xl" style={{animationDirection: 'reverse', animationDuration: '2s'}}>💫</span>
<span className="spin inline-block text-2xl">⭐</span>
</div>
<h1 className="press-start rainbow mb-1" style={{fontSize: '1.4rem', lineHeight: '1.6'}}>
          COUGHN
        </h1>
<p className="vt323 text-2xl neon-text" style={{color: '#ff00ff'}}>
          ★ OFFICIAL WEBSITE ★
        </p>
<div className="flex justify-center gap-1 mt-2 flex-wrap">
<span className="vt323 text-lg" style={{color: '#00ffff'}}>[ MUSIC ]</span>
<span className="vt323 text-lg" style={{color: '#ffff00'}}> • </span>
<span className="vt323 text-lg" style={{color: '#00ffff'}}>[ VIDEOS ]</span>
<span className="vt323 text-lg" style={{color: '#ffff00'}}> • </span>
<span className="vt323 text-lg" style={{color: '#00ffff'}}>[ LINKS ]</span>
<span className="vt323 text-lg" style={{color: '#ffff00'}}> • </span>
<span className="vt323 text-lg" style={{color: '#00ffff'}}>[ GUESTBOOK ]</span>
</div>
<div className="flex justify-center gap-3 mt-2">
<span className="spin inline-block text-2xl" style={{animationDuration: '5s'}}>🎸</span>
<span className="spin inline-block text-2xl" style={{animationDirection: 'reverse', animationDuration: '4s'}}>🎵</span>
<span className="spin inline-block text-2xl" style={{animationDuration: '6s'}}>🎸</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-3">

<div className="flex flex-col gap-3 sm:w-1/3">

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1">
<span className="vt323 text-white text-lg">📁 About COUGHN</span>
</div>
<div className="p-3" style={{background: '#ffffcc'}}>
<img alt="" className="hidden" src="https://i.imgur.com/removed.png"/>
<div className="text-center mb-2">
<div className="inline-block p-3 rounded-full mb-1 wobble" style={{background: 'linear-gradient(135deg, #ff00ff, #0000ff)', border: '3px solid #ffff00'}}>
<span style={{fontSize: '2.5rem'}}>🎤</span>
</div>
</div>
<p className="comic text-xs text-black leading-relaxed">
              Welcome to my OFFICIAL website!!! I am <strong>COUGHN</strong>, an independent artist dropping 🔥🔥🔥 music. 
              My new music video is OUT NOW!!! Stream it on all platforms!!!
            </p>
<div className="mt-2 text-center">
<span className="blink press-start" style={{fontSize: '0.4rem', color: '#ff0000'}}>
                ★ NEW MUSIC!!!★
              </span>
</div>
</div>
</div>

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1">
<span className="vt323 text-white text-lg">📊 Visitor Counter</span>
</div>
<div className="p-3 text-center" style={{background: '#c0c0c0'}}>
<p className="vt323 text-sm text-black mb-1">You are visitor:</p>
<div className="hit-counter inline-block mb-2">001337</div>
<p className="comic text-xs text-black">Since Jan 1, 2024</p>
</div>
</div>

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1">
<span className="vt323 text-white text-lg">🏅 Badges</span>
</div>
<div className="p-3 flex flex-wrap gap-2 justify-center" style={{background: '#c0c0c0'}}>
<div className="visitor-badge px-2 py-1 text-center" style={{fontSize: '0.75rem'}}>
              ★ BEST ARTIST ★<br/><span style={{fontSize: '0.6rem'}}>2024</span>
</div>
<div className="text-center px-2 py-1 text-xs font-bold" style={{background: '#000', color: '#00ff00', border: '2px solid #00ff00', fontFamily: '\'VT323\', monospace', fontSize: '0.85rem'}}>
              NETSCAPE<br/>NOW!
            </div>
<div className="text-center px-2 py-1 text-xs font-bold" style={{background: '#0000aa', color: '#ffffff', border: '2px solid #ffff00', fontFamily: '\'VT323\', monospace', fontSize: '0.85rem'}}>
              MADE WITH<br/>❤️ HTML
            </div>
<div className="text-center px-2 py-1" style={{background: '#ff6600', color: '#fff', border: '2px solid #ffcc00', fontFamily: '\'VT323\', monospace', fontSize: '0.85rem'}}>
              FREE<br/>MUSIC!
            </div>
</div>
</div>

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1">
<span className="vt323 text-white text-lg">🚧 Coming Soon</span>
</div>
<div className="p-3 text-center" style={{background: '#c0c0c0'}}>
<div className="under-construction h-5 mb-2"></div>
<div className="text-4xl mb-1 bounce-text inline-block">🚧</div>
<p className="press-start text-black text-center mt-1" style={{fontSize: '0.4rem', lineHeight: '2'}}>
              TOUR DATES<br/>UNDER CONSTRUCTION!!!
            </p>
<div className="under-construction h-5 mt-2"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-3 sm:flex-1">

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1 flex items-center justify-between">
<span className="vt323 text-white text-lg">🎬 Latest Music Video</span>
<div className="win98-btn-close">✕</div>
</div>
<div className="p-3" style={{background: '#ffffff'}}>
<div className="text-center mb-2">
<div className="blink inline-block flash-bg px-3 py-1 mb-2">
<span className="press-start text-black" style={{fontSize: '0.4rem'}}>★ NEW!!! ★</span>
</div>
</div>

<div className="win98-inset p-2 mb-3">
<div className="flex items-center justify-center" style={{background: '#000', height: '140px', position: 'relative', overflow: 'hidden'}}>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
<div className="text-5xl spin inline-block" style={{animationDuration: '4s'}}>▶</div>
<span className="vt323 text-lg" style={{color: '#ffff00'}}>COUGHN — LATEST VIDEO</span>
<span className="vt323 text-sm" style={{color: '#00ff00'}}>Click to Watch on YouTube</span>
</div>

<div className="absolute inset-0" style={{background: 'repeating-linear-gradient(0deg,rgba(0,0,0,0.4) 0px,rgba(0,0,0,0.4) 1px,transparent 1px,transparent 3px)', pointerEvents: 'none'}}></div>
</div>
</div>
<p className="comic text-xs text-black mb-2 font-bold">🎬 COUGHN — OFFICIAL MUSIC VIDEO (2024)</p>
<p className="comic text-xs text-black mb-3">
              The brand new music video from COUGHN!!! Watch it now and share with ALL your friends!!! 
              Streaming on YouTube, Spotify, and Apple Music!!!
            </p>
<div className="flex flex-wrap gap-2 justify-center">
<a className="win98-btn text-black no-underline flex items-center gap-1 text-sm" href="#">
                ▶ WATCH NOW
              </a>
<a className="win98-btn text-black no-underline flex items-center gap-1 text-sm" href="#">
                💾 SAVE
              </a>
<a className="win98-btn text-black no-underline flex items-center gap-1 text-sm" href="#">
                📧 SEND TO FRIEND
              </a>
</div>
<div className="mt-3 win98-inset p-2">
<p className="vt323 text-sm text-black">
                👁 Views: <span className="font-bold text-blue-800">420,069</span>  | 
                👍 Likes: <span className="font-bold text-blue-800">13,337</span>  | 
                💬 Comments: <span className="font-bold text-blue-800">888</span>
</p>
</div>
</div>
</div>

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1 flex items-center justify-between">
<span className="vt323 text-white text-lg">🎵 Latest Single — Stream Now!</span>
<div className="win98-btn-close">✕</div>
</div>
<div className="p-3" style={{background: '#ffffff'}}>

<div className="mb-3" style={{background: '#000', border: '2px inset #808080', padding: '8px'}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center" style={{background: 'linear-gradient(135deg,#330033,#000033)', border: '1px solid #ffff00'}}>
<span className="text-2xl">💿</span>
</div>
<div>
<p className="vt323 text-lg" style={{color: '#00ff00'}}>COUGHN — Latest Single</p>
<p className="vt323 text-sm" style={{color: '#ffff00'}}>320kbps · 2024</p>
</div>
</div>

<div className="mb-2" style={{background: '#004400', height: '10px', border: '1px solid #008800'}}>
<div style={{background: 'linear-gradient(90deg,#00ff00,#00aa00)', width: '62%', height: '100%'}}></div>
</div>
<div className="flex items-center justify-between mb-1">
<span className="vt323 text-sm" style={{color: '#00ff00'}}>1:47</span>
<div className="flex gap-1">
<div className="win98-btn text-xs px-1">⏮</div>
<div className="win98-btn text-xs px-1" style={{background: '#008800', color: '#00ff00'}}>▶ PLAY</div>
<div className="win98-btn text-xs px-1">⏭</div>
</div>
<span className="vt323 text-sm" style={{color: '#00ff00'}}>2:52</span>
</div>

<div className="flex items-end gap-px justify-center mt-2" style={{height: '24px'}}>
<div className="w-2" style={{background: '#00ff00', height: '30%'}}></div>
<div className="w-2" style={{background: '#00ff00', height: '80%'}}></div>
<div className="w-2" style={{background: '#00ff00', height: '55%'}}></div>
<div className="w-2" style={{background: '#ffff00', height: '95%'}}></div>
<div className="w-2" style={{background: '#ff8800', height: '70%'}}></div>
<div className="w-2" style={{background: '#00ff00', height: '40%'}}></div>
<div className="w-2" style={{background: '#00ff00', height: '85%'}}></div>
<div className="w-2" style={{background: '#ffff00', height: '60%'}}></div>
<div className="w-2" style={{background: '#00ff00', height: '45%'}}></div>
<div className="w-2" style={{background: '#ff8800', height: '90%'}}></div>
<div className="w-2" style={{background: '#00ff00', height: '50%'}}></div>
<div className="w-2" style={{background: '#00ff00', height: '75%'}}></div>
</div>
</div>
<p className="comic text-xs text-black mb-3">
              Listen to my latest track on all streaming platforms!!! It SLAPS 🔥🔥🔥
            </p>
<div className="flex flex-wrap gap-2">
<a className="win98-btn text-black no-underline text-sm" href="#">🎵 Spotify</a>
<a className="win98-btn text-black no-underline text-sm" href="#">▶ YouTube</a>
<a className="win98-btn text-black no-underline text-sm" href="#">🍎 Apple Music</a>
</div>
</div>
</div>

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1">
<span className="vt323 text-white text-lg">🔗 Cool Links!!!</span>
</div>
<div style={{background: '#ffffff'}}>
<table className="w-full text-xs comic">
<thead>
<tr style={{background: '#000080', color: 'white'}}>
<th className="p-2 text-left vt323 text-base">Platform</th>
<th className="p-2 text-left vt323 text-base">Link</th>
<th className="p-2 text-left vt323 text-base">Status</th>
</tr>
</thead>
<tbody>
<tr className="hover:bg-yellow-100 transition-colors" style={{borderBottom: '1px solid #c0c0c0'}}>
<td className="p-2 font-bold text-black">🎵 Spotify</td>
<td className="p-2"><a className="text-blue-700 text-xs" href="#">open.spotify.com/artist/coughn</a></td>
<td className="p-2"><span className="text-green-700 font-bold vt323 text-sm">● ONLINE</span></td>
</tr>
<tr className="hover:bg-yellow-100 transition-colors" style={{borderBottom: '1px solid #c0c0c0', background: '#f0f0f0'}}>
<td className="p-2 font-bold text-black">▶ YouTube</td>
<td className="p-2"><a className="text-blue-700 text-xs" href="#">youtube.com/@coughn</a></td>
<td className="p-2"><span className="text-green-700 font-bold vt323 text-sm">● ONLINE</span></td>
</tr>
<tr className="hover:bg-yellow-100 transition-colors" style={{background: '#ffffff'}}>
<td className="p-2 font-bold text-black">🍎 Apple Music</td>
<td className="p-2"><a className="text-blue-700 text-xs" href="#">music.apple.com/coughn</a></td>
<td className="p-2"><span className="text-green-700 font-bold vt323 text-sm">● ONLINE</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="win98-panel">
<div className="win98-titlebar px-2 py-1 flex items-center justify-between">
<span className="vt323 text-white text-lg">📖 Guestbook — Sign It!!!</span>
<div className="win98-btn-close">✕</div>
</div>
<div className="p-3" style={{background: '#ffffff'}}>

<div className="mb-3 space-y-2">
<div className="win98-inset p-2">
<p className="vt323 text-base text-blue-800">xX_MusicFan_Xx says:</p>
<p className="comic text-xs text-black">"COUGHN is literally the GOAT!!! New video goes CRAZY 🔥"</p>
<p className="vt323 text-xs text-gray-500">— Jan 15, 2024 from California</p>
</div>
<div className="win98-inset p-2">
<p className="vt323 text-base text-blue-800">Stacy123 says:</p>
<p className="comic text-xs text-black">"love love LOVE the new single!!! already played it 100 times lol 😭❤️"</p>
<p className="vt323 text-xs text-gray-500">— Jan 14, 2024 from New York</p>
</div>
<div className="win98-inset p-2">
<p className="vt323 text-base text-blue-800">DJ_Realtalk says:</p>
<p className="comic text-xs text-black">"bookmarked this page!!! come to Chicago pls!!!"</p>
<p className="vt323 text-xs text-gray-500">— Jan 12, 2024 from Chicago</p>
</div>
</div>

<div className="win98-panel p-2">
<p className="vt323 text-black text-base mb-2">✏️ Sign the Guestbook:</p>
<div className="space-y-2">
<input className="guestbook-input" placeholder="Your Name / Handle" type="text"/>
<input className="guestbook-input" placeholder="Your City / Country" type="text"/>
<textarea className="guestbook-input" placeholder="Leave a message!!!" rows="2"></textarea>
<button className="win98-btn text-black font-bold w-full">📨 SUBMIT ENTRY!!!</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="win98-panel mt-3">
<div className="win98-titlebar px-2 py-1">
<span className="vt323 text-white text-lg">© COUGHN OFFICIAL WEBSITE</span>
</div>
<div className="p-3 text-center" style={{background: '#c0c0c0'}}>
<div className="star-divider text-xl mb-2">★ ★ ★ ★ ★ ★ ★ ★ ★ ★</div>
<p className="comic text-xs text-black mb-1">
          © 2024 COUGHN — All Rights Reserved (but sharing is caring!!!)
        </p>
<p className="vt323 text-sm text-black mb-2">
          Best viewed in 800×600 · IE 6.0 · Netscape Navigator
        </p>
<div className="flex justify-center gap-3 flex-wrap mb-2">
<a className="vt323 text-base text-blue-800" href="#">[ HOME ]</a>
<a className="vt323 text-base text-blue-800" href="#">[ MUSIC ]</a>
<a className="vt323 text-base text-blue-800" href="#">[ VIDEOS ]</a>
<a className="vt323 text-base text-blue-800" href="#">[ LINKS ]</a>
<a className="vt323 text-base text-blue-800" href="#">[ GUESTBOOK ]</a>
</div>
<div className="blink">
<p className="press-start text-black" style={{fontSize: '0.4rem'}}>MADE WITH ❤️ AND TOO MUCH COFFEE</p>
</div>
<div className="star-divider text-xl mt-2">★ ★ ★ ★ ★ ★ ★ ★ ★ ★</div>
</div>
</div>
</div>


    </>
  );
}
