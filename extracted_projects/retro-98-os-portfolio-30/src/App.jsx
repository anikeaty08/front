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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function updateClock() {
        const now = new Date();
        const t = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
        const el = document.getElementById('clock');
        if (el) el.textContent = t;
      }
      updateClock();
      setInterval(updateClock, 30000);
    


      (function(){var tracks=[{title:'Impact Moderato',artist:'Kevin MacLeod',src:'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Impact%20Moderato.mp3'},{title:'Cipher',artist:'Kevin MacLeod',src:'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Cipher.mp3'},{title:'Carefree',artist:'Kevin MacLeod',src:'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Carefree.mp3'},{title:'Wallpaper',artist:'Kevin MacLeod',src:'https://incompetech.com/music/royalty-free/mp3-royaltyfree/Wallpaper.mp3'}];var audio=document.getElementById('mp-audio');var idx=0;var pl=document.getElementById('mp-playlist');var trackEl=document.getElementById('mp-track');var artistEl=document.getElementById('mp-artist');var status=document.getElementById('mp-status');function renderPL(){pl.innerHTML='';tracks.forEach(function(t,i){var d=document.createElement('div');d.style.cssText='padding:6px 10px;cursor:pointer;'+(i===idx?'background:#000080;color:#fff':'color:#000');d.textContent=(i+1)+'. '+t.title+' — '+t.artist;d.addEventListener('click',function(){idx=i;load(true)});pl.appendChild(d)})}function load(autoplay){var t=tracks[idx];audio.src=t.src;trackEl.textContent='♪ '+t.title;artistEl.textContent=t.artist;renderPL();if(autoplay){audio.play().then(function(){status.textContent='Playing'}).catch(function(){status.textContent='Click Play'})}}document.getElementById('mp-play').addEventListener('click',function(){if(!audio.src)load(false);audio.play().then(function(){status.textContent='Playing'}).catch(function(){status.textContent='Error'})});document.getElementById('mp-pause').addEventListener('click',function(){audio.pause();status.textContent='Paused'});document.getElementById('mp-next').addEventListener('click',function(){idx=(idx+1)%tracks.length;load(true)});document.getElementById('mp-prev').addEventListener('click',function(){idx=(idx-1+tracks.length)%tracks.length;load(true)});document.getElementById('mp-vol').addEventListener('input',function(e){audio.volume=parseFloat(e.target.value)});audio.volume=0.6;audio.addEventListener('ended',function(){idx=(idx+1)%tracks.length;load(true)});document.getElementById('music-close').addEventListener('click',function(e){e.preventDefault();document.getElementById('music-player').style.display='none';audio.pause()});var mp=document.getElementById('music-player');var tb=document.getElementById('music-title-bar');var dragging=false,ox=0,oy=0,started=false;tb.addEventListener('mousedown',function(e){if(e.target.closest('.win-close'))return;dragging=true;started=false;var r=mp.getBoundingClientRect();ox=e.clientX-r.left;oy=e.clientY-r.top;e.preventDefault()});document.addEventListener('mousemove',function(e){if(!dragging)return;if(!started){var r=mp.getBoundingClientRect();mp.style.left=r.left+'px';mp.style.top=r.top+'px';started=true}mp.style.left=Math.max(0,Math.min(window.innerWidth-100,e.clientX-ox))+'px';mp.style.top=Math.max(0,Math.min(window.innerHeight-50,e.clientY-oy))+'px'});document.addEventListener('mouseup',function(){dragging=false});renderPL()})();
    


      (function(){
        var win=document.getElementById('instagram-popup');
        var tb=document.getElementById('ig-title-bar');
        var close=document.getElementById('ig-close');
        if(!win) return;

        var dragging=false, ox=0, oy=0, started=false;
        if(tb) {
          tb.addEventListener('mousedown', function(e){
            if(e.target.closest('.win-close')) return;
            dragging=true; started=false;
            var r=win.getBoundingClientRect();
            ox=e.clientX-r.left; oy=e.clientY-r.top;
            e.preventDefault();
          });
        }
        document.addEventListener('mousemove', function(e){
          if(!dragging) return;
          if(!started){
            var r=win.getBoundingClientRect();
            win.style.left=r.left+'px'; win.style.top=r.top+'px'; win.style.transform='none';
            started=true;
          }
          win.style.left=Math.max(0,Math.min(window.innerWidth-100,e.clientX-ox))+'px';
          win.style.top=Math.max(0,Math.min(window.innerHeight-50,e.clientY-oy))+'px';
        });
        document.addEventListener('mouseup', function(){ dragging=false; });

        if(close) {
          close.addEventListener('click', function(e){
            e.preventDefault();
            win.style.display='none';
          });
        }
      })();
    


      (function(){var bios=document.getElementById('bios-screen');var login=document.getElementById('login-screen');var homeWin=document.getElementById('home-window');var flash=document.getElementById('crt-flash');var rip=document.getElementById('rip-overlay');if(bios)bios.style.display='block';if(login)login.style.display='none';if(homeWin)homeWin.style.display='none';try{sessionStorage.removeItem('retro98_booted');localStorage.removeItem('retro98_booted')}catch(e){}function showHome(){if(homeWin)homeWin.style.display='flex';var ig=document.getElementById('instagram-popup');if(ig)ig.style.display='flex';}function gotoLogin(){bios.style.display='none';login.style.display='block'}function gotoDesktop(){flash.classList.add('flashing');setTimeout(function(){flash.classList.add('squish')},180);setTimeout(function(){login.style.display='none';flash.classList.remove('flashing','squish');showHome()},520)}var lines=[{sel:'[data-line="1"] .bios-val',text:':Portfolio Website'},{sel:'[data-line="2"] .bios-val',text:':Aura.build'},{sel:'[data-line="3"] .bios-val',text:':Web Developer'},{sel:'[data-line="4"] .bios-val',text:':5'},{sel:'[data-line="5"] .bios-val',text:':Figma, Framer, My SQL, PHP, Wordpress, React, Webflow'},{sel:'[data-line="6"] .bios-val',text:':English, Hindi'}];var li=0;function typeLine(){if(li>=lines.length)return;var L=lines[li];var el=document.querySelector(L.sel);var i=0;var iv=setInterval(function(){if(!el){clearInterval(iv);return}el.textContent=L.text.slice(0,++i);if(i>=L.text.length){clearInterval(iv);li++;setTimeout(typeLine,200)}},25)}typeLine();document.addEventListener('keydown',function(e){if(login.style.display==='none'&&bios.style.display!=='none'){if(e.key==='Enter'){gotoLogin()}else if(e.key==='f'||e.key==='F'){rip.style.display='flex';setTimeout(function(){rip.style.display='none'},600)}}else if(login.style.display==='block'){if(e.key==='Enter'){gotoDesktop()}}});var cb=document.getElementById('confirm-btn');if(cb)cb.addEventListener('click',gotoDesktop);var wc=document.getElementById('win-close');if(wc)wc.addEventListener('click',function(e){e.preventDefault();homeWin.style.display='none'});document.querySelectorAll('.faq-row').forEach(function(r){r.addEventListener('click',function(){r.classList.toggle('open');var t=r.querySelector('.faq-toggle');if(t)t.textContent=r.classList.contains('open')?'−':'+'})});document.querySelectorAll('.tab-btn[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var id=a.getAttribute('href').slice(1);var t=document.getElementById(id);if(t)t.scrollIntoView({behavior:'smooth',block:'start'})})})})();
    


      (function(){var win=document.getElementById('home-window');var titleBar=win&&win.querySelector('.title-bar');var closeBtn=document.getElementById('win-close');var myComputer=document.querySelector('.desktop-only-icons a:first-child');if(!win||!titleBar)return;var isDragging=false;var offsetX=0;var offsetY=0;var startedDrag=false;titleBar.style.cursor='move';titleBar.style.userSelect='none';titleBar.addEventListener('mousedown',function(e){if(e.target.closest('.win-close'))return;isDragging=true;startedDrag=false;var rect=win.getBoundingClientRect();offsetX=e.clientX-rect.left;offsetY=e.clientY-rect.top;e.preventDefault()});document.addEventListener('mousemove',function(e){if(!isDragging)return;if(!startedDrag){var rect=win.getBoundingClientRect();win.style.left=rect.left+'px';win.style.top=rect.top+'px';win.style.transform='none';startedDrag=true}var newX=e.clientX-offsetX;var newY=e.clientY-offsetY;newX=Math.max(0,Math.min(window.innerWidth-100,newX));newY=Math.max(0,Math.min(window.innerHeight-50,newY));win.style.left=newX+'px';win.style.top=newY+'px'});document.addEventListener('mouseup',function(){isDragging=false});if(closeBtn){closeBtn.addEventListener('click',function(e){e.preventDefault();win.style.display='none'})}if(myComputer){myComputer.addEventListener('click',function(e){e.preventDefault();win.style.display='flex'})}})();
    


      (function(){var tracks=[{title:'Jesus, sometimes i..',artist:'',src:'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/20741284-9786-4b72-85d3-26843b274843/8ae9205c-12f8-4470-b1b8-8fbc1c0e3c4f-output-3-.opus?v=1778454243072'},{title:'The Weeknd, Lana Del Rey - The Abyss',artist:'',src:'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/20741284-9786-4b72-85d3-26843b274843/a36cbda9-5745-4317-b7bf-a43824c94848-output.opus?v=1778453970028'},{title:'OKSII - Shurter',artist:'',src:'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/20741284-9786-4b72-85d3-26843b274843/f2fb8bb5-2e89-4437-ab67-eec589414756-output-1-.opus?v=1778454081102'},{title:'Kanye West - Run Right Back To Me',artist:'',src:'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/20741284-9786-4b72-85d3-26843b274843/c383b2b5-bcad-43ae-8798-c26f4d4ce682-output-2-.opus?v=1778454157780'}];var audio=document.getElementById('mp-audio');var pl=document.getElementById('mp-playlist');var trackEl=document.getElementById('mp-track');var artistEl=document.getElementById('mp-artist');var status=document.getElementById('mp-status');var idx=0;function renderPL(){pl.innerHTML='';tracks.forEach(function(t,i){var d=document.createElement('div');d.style.cssText='padding:6px 10px;cursor:pointer;'+(i===idx?'background:#000080;color:#fff':'color:#000');d.textContent=(i+1)+'. '+t.title;d.addEventListener('click',function(){idx=i;load(true)});pl.appendChild(d)})}function load(autoplay){var t=tracks[idx];audio.src=t.src;trackEl.textContent='♪ '+t.title;artistEl.textContent=t.artist;renderPL();if(autoplay){audio.play().then(function(){status.textContent='Playing'}).catch(function(){status.textContent='Click Play'})}}var play=document.getElementById('mp-play');var pause=document.getElementById('mp-pause');var next=document.getElementById('mp-next');var prev=document.getElementById('mp-prev');var newPlay=play.cloneNode(true);play.parentNode.replaceChild(newPlay,play);var newPause=pause.cloneNode(true);pause.parentNode.replaceChild(newPause,pause);var newNext=next.cloneNode(true);next.parentNode.replaceChild(newNext,next);var newPrev=prev.cloneNode(true);prev.parentNode.replaceChild(newPrev,prev);newPlay.addEventListener('click',function(){if(!audio.src)load(false);audio.play().then(function(){status.textContent='Playing'}).catch(function(){status.textContent='Error'})});newPause.addEventListener('click',function(){audio.pause();status.textContent='Paused'});newNext.addEventListener('click',function(){idx=(idx+1)%tracks.length;load(true)});newPrev.addEventListener('click',function(){idx=(idx-1+tracks.length)%tracks.length;load(true)});var newAudio=audio.cloneNode(true);audio.parentNode.replaceChild(newAudio,audio);audio=newAudio;audio.volume=0.6;audio.addEventListener('ended',function(){idx=(idx+1)%tracks.length;load(true)});document.getElementById('mp-vol').addEventListener('input',function(e){audio.volume=parseFloat(e.target.value)});renderPL()})();
    


      (function(){var clickSrc='https://motionape-website.s3.us-east-1.amazonaws.com/Freebies/SoundFX/Sounds/Mouse-click/Click-09.mp3';var clickPool=[];var poolSize=4;for(var i=0;i<poolSize;i++){var a=new Audio(clickSrc);a.volume=0.7;a.loop=false;a.preload='auto';clickPool.push(a)}var poolIdx=0;var audioUnlocked=false;function unlockAudio(){if(audioUnlocked)return;audioUnlocked=true;clickPool.forEach(function(a){try{a.play().then(function(){a.pause();a.currentTime=0}).catch(function(){})}catch(e){}});try{loginChime.play().then(function(){loginChime.pause();loginChime.currentTime=0}).catch(function(){})}catch(e){}}function playClick(){var a=clickPool[poolIdx];poolIdx=(poolIdx+1)%poolSize;try{a.currentTime=0;a.play().catch(function(){})}catch(e){}}document.addEventListener('click',function(e){unlockAudio();var t=e.target;if(!t)return;if(t.closest('input,textarea,select,[contenteditable=true]'))return;var interactive=t.closest('button,a,[role=button],[onclick],.tab-btn,.see-btn,.desktop-icon,.win-close,.confirm-btn,.faq-row,.tool-tile,.menu-bar .ml,#mp-play,#mp-pause,#mp-next,#mp-prev,.win98-raised');if(!interactive)return;if(interactive.disabled||interactive.getAttribute('aria-disabled')==='true')return;playClick()},true);document.addEventListener('keydown',unlockAudio,true);document.addEventListener('touchstart',unlockAudio,true);var loginChime=new Audio('https://framerusercontent.com/assets/TNuCtwiWG8HneplwZMJsoi4I0N0.mp3');loginChime.volume=0.6;loginChime.loop=false;loginChime.preload='auto';function playChime(){try{loginChime.currentTime=0;loginChime.play().catch(function(){})}catch(e){}}function loginVisible(){var login=document.getElementById('login-screen');return login&&login.style.display==='block'}var cb=document.getElementById('confirm-btn');if(cb){cb.addEventListener('click',function(){if(loginVisible())setTimeout(playChime,80)})}document.addEventListener('keydown',function(e){if(e.key==='Enter'&&loginVisible())setTimeout(playChime,80)})})();
    
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
      
<div className="bios-screen" id="bios-screen" onclick="if(window.innerWidth&lt;=767){var l=document.getElementById('login-screen');this.style.display='none';if(l)l.style.display='block';}" style={{display: 'none', cursor: 'pointer'}}>
<div className="" style={{position: 'absolute', top: '32px', left: '32px', display: 'flex', gap: '8px', alignItems: 'flex-start'}}>
<img alt="" src="https://framerusercontent.com/images/nwacZBTCKpHmPT4XBdEjLC9tc.png" style={{width: '39px', height: '55px', imageRendering: 'pixelated'}}/>
<div className="">
<div className="">Welcome to my portfolio website</div>
<div className="">For a better experience use the desktop version</div>
</div>
</div>
<img alt="" className="object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1957051-6958-496a-9000-b2444e8deb8d_1600w.png" style={{position: 'absolute', top: '32px', right: '32px', width: '330px', height: '186px', imageRendering: 'pixelated'}}/>
<div className="" id="bios-lines" style={{position: 'absolute', top: '196px', left: '32px'}}>
<div className="bios-row" data-line="1">
<span className="bios-label">File</span>
<span className="bios-val">:Portfolio Website</span>
</div>
<div className="bios-row" data-line="2">
<span className="bios-label">Built with</span>
<span className="bios-val">:Aura.build</span>
</div>
<div className="" style={{height: '32px'}}></div>
<div className="bios-row" data-line="3">
<span className="bios-label">Specialist</span>
<span className="bios-val">:Web Developer</span>
</div>
<div className="bios-row" data-line="4">
<span className="bios-label">Years of Experience</span>
<span className="bios-val">:5</span>
</div>
<div className="bios-row" data-line="5">
<span className="bios-label">Stack</span>
<span className="bios-val">
            :Figma, Framer, My SQL, PHP, Wordpress, React, Webflow
          </span>
</div>
<div className="bios-row" data-line="6">
<span className="bios-label">Languages</span>
<span className="bios-val">:English, Hindi</span>
</div>
</div>
<div style={{position: 'absolute', left: '32px', bottom: '56px'}}>
<div>
          Press
          <span className="bios-key">F</span>
          to pay respects
        </div>
<div>
          Press
          <span className="bios-key">Enter</span>
          to load the website
        </div>
</div>
</div>
<div className="login-screen" id="login-screen" style={{display: 'none'}}>
<img alt="" className="login-wallpaper" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86b1bb7c-c4f8-4c10-a60e-85aa69b0a783_1600w.jpg"/>
<div className="login-card">
<img alt="" className="" src="https://framerusercontent.com/images/fJDvIDyRVMU083oWzVbIgBwp0nY.jpg" style={{width: '120px', height: '120px', imageRendering: 'pixelated'}}/>
<div style={{height: '12px'}}></div>
<div className="" style={{fontFamily: '\'Handjet\', sans-serif', fontWeight: '700', fontSize: '17px', color: '#fff'}}>
          Enter Password
        </div>
<div style={{height: '8px'}}></div>
<div className="" style={{display: 'flex', gap: '8px'}}>
<div className="pwd-field">
            ••••••
            <span className="blink-caret" style={{width: '1px', height: '18px', background: '#000', display: 'inline-block', marginLeft: '2px'}}></span>
</div>
<button className="confirm-btn" id="confirm-btn">Confirm</button>
</div>
</div>
</div>
<div className="crt-flash" id="crt-flash"></div>
<div className="rip-overlay" id="rip-overlay" style={{display: 'none'}}>
<div className="rip-box">R.I.P.</div>
</div>

<div className="desktop-only-icons absolute z-10 flex flex-col" style={{top: '44px', left: '32px', gap: '28px'}}>
<a className="desktop-icon flex flex-col items-center gap-1.5" href="#" onclick="event.preventDefault();document.getElementById('home-window').style.display='flex';" style={{width: '80px'}}>
<img alt="" src="https://framerusercontent.com/images/uLE52N3JZ7WafwPB01oWNu4QRk.png" style={{width: '48px', height: '48px', imageRendering: 'pixelated'}}/>
<p className="icon-label">My Computer</p>
</a>
<a className="desktop-icon flex flex-col items-center gap-1.5" href="https://framer.link/nick404" rel="noreferrer noopener" style={{width: '80px'}} target="_blank">
<img alt="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3120121-b8a1-4feb-a224-94f561f38e6d_800w.png" style={{width: '48px', height: '48px', imageRendering: 'pixelated', background: '#000', objectFit: 'contain'}}/>
<p className="icon-label">Built with Aura</p>
</a>
<a className="desktop-icon flex flex-col items-center gap-1.5" href="https://aura.build" rel="noreferrer noopener" style={{width: '80px'}} target="_blank">
<img alt="" className="" src="https://framerusercontent.com/images/1FUFhteVvS3VQzzy9c3jFqLLWgI.png" style={{width: '48px', height: '48px', imageRendering: 'pixelated'}}/>
<p className="icon-label">Get This Template Free</p>
</a>
<a className="desktop-icon flex flex-col items-center gap-1.5" href="#" id="music-icon" onclick="event.preventDefault();document.getElementById('music-player').style.display='flex';" style={{width: '80px'}}>
<img alt="" src="https://framerusercontent.com/images/C2rNcoyAF0EcMLLTKXoNk7Ooaf4.png" style={{width: '48px', height: '48px', imageRendering: 'pixelated'}}/>
<p className="icon-label">Music</p>
</a>
<a className="desktop-icon flex flex-col items-center gap-1.5" href="#" id="insta-icon" onclick="event.preventDefault();document.getElementById('instagram-popup').style.display='flex';" style={{width: '80px'}}>
<img alt="" src="https://framerusercontent.com/images/4vadkgG59Hav0qspfxbgt5c.png" style={{width: '48px', height: '48px', imageRendering: 'pixelated'}}/>
<p className="icon-label">Instagram</p>
</a>
</div>

<a className="desktop-only-icons desktop-icon absolute z-10 flex flex-col items-center gap-1.5" href="#" style={{right: '32px', bottom: '108px', width: '80px'}}>
<img alt="" src="https://framerusercontent.com/images/aUiO9TgRYS71ppQpJSwLrc9Z9M.png" style={{width: '48px', height: '48px', imageRendering: 'pixelated'}}/>
<p className="icon-label">Recycle Bin</p>
</a>

<div className="fixed flex right-0 bottom-0 left-0 items-center justify-between taskbar-mobile" style={{height: '54px', padding: '0 3px', background: '#C0C0C0', boxShadow: 'inset 0 1px 0 0 #FFFFFF, inset 0 2px 0 0 #DEDEDE', zIndex: '50'}}>
<nav className="flex items-center" style={{gap: '4px'}}>
<a className="win98-raised flex items-center" href="#" style={{height: '48px', padding: '0 12px', gap: '8px'}}>
<img alt="" src="https://framerusercontent.com/images/97Zc0zw4nM87xhO3n8HHwelPAA.svg" style={{width: '24px', height: '24px'}}/>
<span className="pixel-text" style={{fontSize: '17px', letterSpacing: '0.06em'}}>
            Home
          </span>
</a>
<a className="win98-raised flex items-center" href="#" onclick="event.preventDefault();document.getElementById('home-window').style.display='flex';" style={{height: '48px', padding: '0 12px', gap: '8px'}}>
<img alt="" src="https://framerusercontent.com/images/bm5UGJSuwEUFc8TX2JS3qgoDATY.svg" style={{width: '24px', height: '24px'}}/>
<span className="pixel-text" style={{fontSize: '17px', letterSpacing: '0.06em'}}>
            Portfolio
          </span>
</a>
<a className="win98-raised flex items-center" href="#" style={{height: '48px', padding: '0 12px', gap: '8px'}}>
<img alt="" src="https://framerusercontent.com/images/xp2oF07fhLlfg8wd7lVZRNly3Q.png" style={{width: '24px', height: '24px', imageRendering: 'pixelated'}}/>
<span className="pixel-text" style={{fontSize: '17px', letterSpacing: '0.06em'}}>
            Contact Me
          </span>
</a>
</nav>
<div className="flex items-center relative" style={{gap: '4px'}}>
<img alt="" className="robot-sprite" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99113b00-6c5b-46af-890f-ea5f35ffd150_1600w.png" style={{position: 'absolute', right: '200px', bottom: '-8px', width: '140px', height: '80px', imageRendering: 'pixelated', pointerEvents: 'none', objectFit: 'contain'}}/>
<a className="win98-raised flex items-center justify-center" href="https://www.instagram.com/josephbadiger/" rel="noreferrer noopener" style={{width: '48px', height: '48px'}} target="_blank">
<img alt="Instagram" className="" src="https://framerusercontent.com/images/4vadkgG59Hav0qspfxbgt5c.png" style={{width: '24px', height: '24px', imageRendering: 'pixelated'}}/>
</a>
<div className="flex items-center" style={{paddingLeft: '6px'}}>
<img alt="" src="https://framerusercontent.com/images/bYu3AxYAokw6bhwssSc4e1riUGI.png" style={{width: '24px', height: '24px', imageRendering: 'pixelated'}}/>
</div>
<div className="win98-sunken flex items-center" style={{height: '49px', padding: '0 12px', marginRight: '3px'}}>
<p className="pixel-text" id="clock" style={{fontSize: '17px'}}>4:36 AM</p>
</div>
</div>
</div>

<div className="crt-jitter"></div>
<div className="crt-scanlines"></div>
<div className="crt-roll"></div>

<div className="home-window" id="home-window" style={{display: 'flex'}}>
<div className="title-bar" style={{cursor: 'move', userSelect: 'none'}}>
<img alt="" src="https://framerusercontent.com/images/97Zc0zw4nM87xhO3n8HHwelPAA.svg" style={{width: '12px', height: '12px'}}/>
<span className="title-bar-title">Portfolio</span>
<div style={{flex: '1'}}></div>
<a className="win-close" href="#" id="win-close">
<svg height="7" viewbox="0 0 8 7" width="8">
<path d="M0 0 L8 7 M8 0 L0 7" stroke="#000" strokeWidth="1"></path>
</svg>
</a>
</div>
<div className="menu-bar">
<span className="ml">File</span>
<span className="ml">Edit</span>
<span className="ml">View</span>
<span className="ml">Go</span>
<span className="ml">Help</span>
</div>
<div className="win-scroll" id="win-scroll">
<div className="scroll-content">
<img alt="" className="cloud-bg" src="https://framerusercontent.com/images/CY9nFVcElQuS0aRbAPoUP4Q5xU.jpeg"/>
<div className="scroll-inner">
<div className="tab-row">
<a className="tab-btn" href="/#">Portfolio</a>
<a className="tab-btn" href="#services">Services</a>
<a className="tab-btn" href="#tools">Why Us</a>
<a className="tab-btn" href="#faq">FAQ</a>
</div>
<div className="" style={{position: 'relative', marginTop: '44px'}}>
<img alt="" className="bg-center object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d2b9d1f-d641-4062-9af5-a0a817bcc1e4_3840w.png?w=800&amp;q=80" style={{width: '1098px', height: '130px', display: 'block'}}/>
<div className="body-text" style={{position: 'absolute', right: '16px', bottom: '12px', textAlign: 'right'}}>
<div className="">Web Development Services</div>
<div className="">joseph@velocentlabs.com</div>
</div>
</div>
<div className="" style={{display: 'flex', gap: '24px', marginTop: '36px'}}>
<div className="" style={{width: '200px'}}>
<img alt="" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e91216ce-6f18-4a6d-a03b-d429d609b8c0_800w.jpg" style={{width: '200px', height: '200px', display: 'block'}}/>
<div className="" style={{height: '16px'}}></div>
<div className="body-text">Available for hire</div>
<div className="" style={{height: '4px'}}></div>
<a className="body-text" href="https://gmail.com" style={{color: '#1A00FF', textDecoration: 'none'}}>
                  joseph@velocentlabs.com
                </a>
<div className="" style={{height: '24px'}}></div>
<div className="body-text">Socials</div>
<div className="" style={{height: '8px'}}></div>
<div className="body-text" style={{display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 12px'}}>
<span className="">/insta</span>
<a className="" href="https://instagram.com" style={{color: '#1A00FF', textDecoration: 'none'}}>
                    @josephbadiger
                  </a>
</div>
</div>
<div className="" style={{width: '650px'}}>
<div className="body-text">Web Developer</div>
<div className="" style={{height: '4px'}}></div>
<h1 className="h-inter">Joseph Badiger</h1>
<div className="" style={{height: '32px'}}></div>
<p className="body-text" style={{maxWidth: '650px'}}>
                  Building websites that don't just look sharp, but actually
                  convert. We turn business goals into fast, user-friendly
                  experiences, and we're all about clear strategy, clean
                  execution, and shipping in days not months. Let's build
                  something that actually performs.
                </p>
<div className="" id="work" style={{marginTop: '80px'}}>
<h1 className="h-inter">My Work</h1>
<div className="" style={{height: '24px'}}></div>
<div className="project-card" style={{width: '650px', marginBottom: '28px'}}>
<img alt="" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29ddbc46-0524-405b-8684-75127139dc0d_1600w.png" style={{width: '650px', height: '488px', display: 'block'}}/>
<div className="" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '32px', marginTop: '8px'}}>
<span className="body-text">Beyond Travels</span>
<a className="see-btn" href="/#">See Project</a>
</div>
</div>
<div className="project-card" style={{width: '650px', marginBottom: '28px'}}>
<img alt="" className="bg-center object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16ce6ab3-14ec-4b42-81ab-785faebe70a2_1600w.png" style={{width: '650px', height: '488px', display: 'block'}}/>
<div className="" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '32px', marginTop: '8px'}}>
<span className="body-text">Goencho Randap</span>
<a className="see-btn" href="/portfolio/foodspot">
                        See Project
                      </a>
</div>
</div>
<div className="project-card" style={{width: '650px', marginBottom: '28px'}}>
<img alt="" className="object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03f94572-f38f-4890-afef-f8b231239d7d_1600w.png" style={{width: '650px', height: '488px', display: 'block'}}/>
<div className="" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '32px', marginTop: '8px'}}>
<span className="body-text">Elshaddai charitable trust</span>
<a className="see-btn" href="/#">See Project</a>
</div>
</div>
<div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginTop: '32px'}}>
<span className="body-text">
                      Wanna see more? Check my portfolio page!
                    </span>
<a className="see-btn" href="/#">View My Portfolio</a>
</div>
</div>
<div className="" id="services" style={{marginTop: '80px'}}>
<h1 className="h-inter">Services</h1>
<div className="" style={{height: '24px'}}></div>
<div className="" style={{display: 'flex', flexDirection: 'column', gap: '16px', width: '650px'}}>
<div className="" style={{border: '1px solid #000', padding: '16px 20px', background: 'rgba(255,255,255,0.15)'}}>
<div className="body-text"><strong>Web Design</strong></div>
<div className="" style={{height: '4px'}}></div>
<div className="body-text">
                        From wireframes to final designs, I'll craft a site
                        that's visually stunning and easy to use.
                      </div>
</div>
<div className="" style={{border: '1px solid #000', padding: '16px 20px', background: 'rgba(255,255,255,0.15)'}}>
<div className="body-text">
<strong className="">UI/UX Design</strong>
</div>
<div className="" style={{height: '4px'}}></div>
<div className="body-text">
                        Creating seamless, user-focused experiences that make
                        every click count.
                      </div>
</div>
<div className="" style={{border: '1px solid #000', padding: '16px 20px', background: 'rgba(255,255,255,0.15)'}}>
<div className="body-text">
<strong className="">Responsive Design</strong>
</div>
<div className="" style={{height: '4px'}}></div>
<div className="body-text">
                        Your site will look amazing on every device—desktop,
                        tablet, or smartphone.
                      </div>
</div>
<div className="" style={{border: '1px solid #000', padding: '16px 20px', background: 'rgba(255,255,255,0.15)'}}>
<div className="body-text">
<strong className="">
                          Website Updates &amp; Maintenance
                        </strong>
</div>
<div className="" style={{height: '4px'}}></div>
<div className="body-text">
                        Already have a site? I can keep it fresh, functional,
                        and glitch-free.
                      </div>
</div>
</div>
</div>
<div className="" id="tools" style={{marginTop: '80px'}}>
<h1 className="h-inter">Why Us</h1>
<div className="" style={{height: '24px'}}></div>
<div className="" style={{display: 'grid', gridTemplateColumns: 'repeat(4,152px)', gap: '16px'}}>
<div className="tool-tile" style={{background: 'transparent', boxShadow: 'inset -1px -1px 0 0 #0A0A0A, inset 1px 1px 0 0 #FFFFFF, inset -2px -2px 0 0 #808080, inset 2px 2px 0 0 #DEDEDE', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div className="" style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#000'}}>
                        ✓
                      </div>
<div className="body-text">
<strong className="">7 Days</strong>
</div>
<div className="" style={{fontFamily: 'Georgia, serif', fontSize: '13px', color: '#808080'}}>
                        Average Launch Time
                      </div>
</div>
<div className="tool-tile" style={{background: 'transparent', boxShadow: 'inset -1px -1px 0 0 #0A0A0A, inset 1px 1px 0 0 #FFFFFF, inset -2px -2px 0 0 #808080, inset 2px 2px 0 0 #DEDEDE', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#000'}}>
                        ★
                      </div>
<div className="body-text">
<strong className="">4.9 / 5</strong>
</div>
<div className="" style={{fontFamily: 'Georgia, serif', fontSize: '13px', color: '#808080'}}>
                        From 100+ Clients
                      </div>
</div>
<div className="tool-tile" style={{background: 'transparent', boxShadow: 'inset -1px -1px 0 0 #0A0A0A, inset 1px 1px 0 0 #FFFFFF, inset -2px -2px 0 0 #808080, inset 2px 2px 0 0 #DEDEDE', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', color: '#000'}}>
                        🎯
                      </div>
<div className="body-text">
<strong className="">Conversion-First</strong>
</div>
<div className="" style={{fontFamily: 'Georgia, serif', fontSize: '13px', color: '#808080'}}>
                        Strategy Before Design
                      </div>
</div>
<div className="tool-tile" style={{background: 'transparent', boxShadow: 'inset -1px -1px 0 0 #0A0A0A, inset 1px 1px 0 0 #FFFFFF, inset -2px -2px 0 0 #808080, inset 2px 2px 0 0 #DEDEDE', padding: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px'}}>
<div style={{width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', color: '#000'}}>
                        🛠
                      </div>
<div className="body-text"><strong>Modern Stack</strong></div>
<div className="" style={{fontFamily: 'Georgia, serif', fontSize: '13px', color: '#808080'}}>
                        Framer · WordPress · Shopify
                      </div>
</div>
</div>
</div>
<div className="" id="faq" style={{marginTop: '80px'}}>
<h1 className="h-inter">FAQ</h1>
<div className="" style={{height: '16px'}}></div>
<div className="faq-item">
<div className="faq-row" onclick="var r=this;r.classList.toggle('open');var t=r.querySelector('.faq-toggle');if(t)t.textContent=r.classList.contains('open')?'−':'+';">
<span className="">
                        How much do you charge for a website?
                      </span>
<span className="faq-toggle">+</span>
</div>
<div className="faq-answer">
                      Pricing depends on scope, but most projects fall between
                      $1.5k–$8k. I send a fixed quote after we chat.
                    </div>
</div>
<div className="" style={{height: '8px'}}></div>
<div className="faq-item">
<div className="faq-row" onclick="var r=this;r.classList.toggle('open');var t=r.querySelector('.faq-toggle');if(t)t.textContent=r.classList.contains('open')?'−':'+';">
<span className="">Do you offer revisions?</span>
<span className="faq-toggle">+</span>
</div>
<div className="faq-answer">
                      Yes — every project includes two rounds of revisions, with
                      extra rounds available at an hourly rate.
                    </div>
</div>
<div className="" style={{height: '8px'}}></div>
<div className="faq-item">
<div className="faq-row" onclick="var r=this;r.classList.toggle('open');var t=r.querySelector('.faq-toggle');if(t)t.textContent=r.classList.contains('open')?'−':'+';">
<span className="">Will my website be mobile-friendly?</span>
<span className="faq-toggle">+</span>
</div>
<div className="faq-answer">
                      Absolutely. Every site I ship is fully responsive across
                      desktop, tablet, and phone breakpoints.
                    </div>
</div>
<div className="" style={{height: '8px'}}></div>
<div className="faq-item">
<div className="faq-row" onclick="var r=this;r.classList.toggle('open');var t=r.querySelector('.faq-toggle');if(t)t.textContent=r.classList.contains('open')?'−':'+';">
<span className="">
                        What do you need from me to get started?
                      </span>
<span className="faq-toggle">+</span>
</div>
<div className="faq-answer">
                      A short brief, any brand assets you have, and links to
                      sites you like. We take it from there.
                    </div>
</div>
<div className="" style={{marginTop: '32px', textAlign: 'center'}}>
<div className="body-text">Got any questions? Contact me!</div>
<div className="" style={{height: '8px'}}></div>
<a className="h-inter" href="/mailto:joseph@velocentlabs.com" style={{color: '#1A00FF', textDecoration: 'none'}}>
                      joseph@velocentlabs.com
                    </a>
</div>
</div>
</div>
<div className="" style={{width: '200px', position: 'relative'}}></div>
</div>
</div>
</div>
</div>
<div className="status-bar">
<div className="status-panel">404 object(s)</div>
</div>
</div>
<div id="music-player" style={{position: 'absolute', left: '60%', top: '120px', width: '340px', background: 'rgb(192, 192, 192)', boxShadow: 'rgb(10, 10, 10) -1px -1px 0px 0px inset, rgb(222, 222, 222) 1px 1px 0px 0px inset, rgb(128, 128, 128) -2px -2px 0px 0px inset, rgb(255, 255, 255) 2px 2px 0px 0px inset', zIndex: '30', flexDirection: 'column', animation: '0.28s ease-out 0s 1 normal none running winOpen', display: 'none'}}>
<div className="title-bar" id="music-title-bar" style={{cursor: 'move', userSelect: 'none'}}>
<img alt="" src="https://framerusercontent.com/images/C2rNcoyAF0EcMLLTKXoNk7Ooaf4.png" style={{width: '14px', height: '14px', imageRendering: 'pixelated'}}/>
<span className="title-bar-title">Windows Media Player</span>
<div style={{flex: '1'}}></div>
<a className="win-close" href="#" id="music-close">
<svg height="7" viewbox="0 0 8 7" width="8">
<path d="M0 0 L8 7 M8 0 L0 7" stroke="#000" strokeWidth="1"></path>
</svg>
</a>
</div>
<div className="menu-bar">
<span className="ml">File</span>
<span className="ml">View</span>
<span className="ml">Play</span>
<span className="ml">Help</span>
</div>
<div style={{padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px'}}>
<div className="win98-sunken" style={{padding: '10px', background: '#000', color: '#00FF00', fontFamily: '\'VT323\', monospace', fontSize: '18px', lineHeight: '1.2', minHeight: '60px'}}>
<div id="mp-track" style={{color: '#00FF00'}}>♪ Press Play to Begin</div>
<div id="mp-artist" style={{color: '#808080', fontSize: '14px', marginTop: '4px'}}></div>
</div>
<div style={{display: 'flex', gap: '6px', justifyContent: 'center'}}>
<button className="win98-raised pixel-text" id="mp-prev" style={{width: '48px', height: '36px', fontSize: '16px', border: '0', cursor: 'pointer'}}>
            ◀◀
          </button>
<button className="win98-raised pixel-text" id="mp-play" style={{width: '60px', height: '36px', fontSize: '16px', border: '0', cursor: 'pointer'}}>
            ▶ Play
          </button>
<button className="win98-raised pixel-text" id="mp-pause" style={{width: '60px', height: '36px', fontSize: '16px', border: '0', cursor: 'pointer'}}>
            ❚❚ Pause
          </button>
<button className="win98-raised pixel-text" id="mp-next" style={{width: '48px', height: '36px', fontSize: '16px', border: '0', cursor: 'pointer'}}>
            ▶▶
          </button>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
<span className="pixel-text" style={{fontSize: '13px'}}>Vol</span>
<input id="mp-vol" max="1" min="0" step="0.05" style={{flex: '1'}} type="range" value="0.6"/>
</div>
<div className="win98-sunken" id="mp-playlist" style={{background: '#fff', maxHeight: '120px', overflowY: 'auto', fontFamily: 'Georgia, serif', fontSize: '14px'}}>
<div style={{padding: '6px 10px', cursor: 'pointer', background: 'rgb(0, 0, 128)', color: 'rgb(255, 255, 255)'}}>
            1. Jesus, sometimes i..
          </div>
<div style={{padding: '6px 10px', cursor: 'pointer', color: 'rgb(0, 0, 0)'}}>
            2. The Weeknd, Lana Del Rey - The Abyss
          </div>
<div style={{padding: '6px 10px', cursor: 'pointer', color: 'rgb(0, 0, 0)'}}>
            3. OKSII - Shurter
          </div>
<div style={{padding: '6px 10px', cursor: 'pointer', color: 'rgb(0, 0, 0)'}}>
            4. Kanye West - Run Right Back To Me
          </div>
</div>
<audio id="mp-audio" preload="none"></audio>
</div>
<div className="status-bar">
<div className="status-panel" id="mp-status">Ready</div>
</div>
</div>

<div id="instagram-popup" style={{position: 'absolute', left: '10%', top: '120px', width: '300px', background: 'rgb(192, 192, 192)', boxShadow: 'rgb(10, 10, 10) -1px -1px 0px 0px inset, rgb(222, 222, 222) 1px 1px 0px 0px inset, rgb(128, 128, 128) -2px -2px 0px 0px inset, rgb(255, 255, 255) 2px 2px 0px 0px inset', zIndex: '60', flexDirection: 'column', animation: '0.28s ease-out 0s 1 normal none running winOpen', display: 'none'}}>
<div className="title-bar" id="ig-title-bar" style={{cursor: 'move', userSelect: 'none'}}>
<img alt="" src="https://framerusercontent.com/images/4vadkgG59Hav0qspfxbgt5c.png" style={{width: '14px', height: '14px', imageRendering: 'pixelated'}}/>
<span className="title-bar-title">Instagram</span>
<div style={{flex: '1'}}></div>
<a className="win-close" href="#" id="ig-close">
<svg height="7" viewbox="0 0 8 7" width="8">
<path d="M0 0 L8 7 M8 0 L0 7" stroke="#000" strokeWidth="1"></path>
</svg>
</a>
</div>
<div style={{padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
<img alt="Instagram" src="https://framerusercontent.com/images/4vadkgG59Hav0qspfxbgt5c.png" style={{width: '56px', height: '56px', imageRendering: 'pixelated'}}/>
<div className="body-text" style={{textAlign: 'center', fontSize: '15px', lineHeight: '1.4'}}>
          Follow me on Instagram to stay connected!
        </div>
<a className="win98-raised pixel-text" href="https://www.instagram.com/josephbadiger/" rel="noopener noreferrer" style={{textDecoration: 'none', padding: '6px 16px', display: 'inline-flex', alignItems: 'center', fontSize: '17px', color: '#000'}} target="_blank">
          @josephbadiger
        </a>
</div>
</div>






    </>
  );
}
