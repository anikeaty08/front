import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const videoRef = useRef(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Custom fade-in/fade-out loop logic
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
    const video = videoRef.current;
    if (!video) return;

    let animationFrameId;

    const checkTime = () => {
      if (video.duration && !video.paused) {
        const time = video.currentTime;
        const duration = video.duration;
        const fadeDuration = 0.5;

        if (time < fadeDuration) {
          // Fade in
          setVideoOpacity(time / fadeDuration);
        } else if (duration - time < fadeDuration) {
          // Fade out
          setVideoOpacity(Math.max(0, (duration - time) / fadeDuration));
        } else {
          // Full opacity
          setVideoOpacity(1);
        }
      }
      animationFrameId = requestAnimationFrame(checkTime);
    };

    const handlePlay = () => {
      setIsPlaying(true);
      animationFrameId = requestAnimationFrame(checkTime);
    };

    const handlePause = () => {
      setIsPlaying(false);
      cancelAnimationFrame(animationFrameId);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    // Initial play attempt (browsers might block autoplay without muted)
    video.play().catch(e => console.log("Autoplay prevented by browser:", e));

    return () => {
      cancelAnimationFrame(animationFrameId);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const handleVideoEnded = () => {
    setVideoOpacity(0);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(e => console.log("Replay interrupted:", e));
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-black font-inter">
      
      {/* Background Video Layer */}
      <div 
        className="absolute w-full pointer-events-none z-0"
        style={{top: '300px', inset: 'auto 0 0 0', height: 'calc(100vh - 300px)'}}
      >
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover transition-opacity duration-100"
          style={{opacity: videoOpacity}}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white opacity-80" />
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 w-full px-8 py-6 mx-auto max-w-7xl flex justify-between items-center">
        <a href="/" className="text-3xl tracking-tight font-instrument text-black decoration-transparent">
          Aethera<sup>®</sup>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <a href="#" className="text-[#000000] hover:text-black transition-colors font-medium">Home</a>
          <a href="#" className="text-[#6F6F6F] hover:text-black transition-colors">Studio</a>
          <a href="#" className="text-[#6F6F6F] hover:text-black transition-colors">About</a>
          <a href="#" className="text-[#6F6F6F] hover:text-black transition-colors">Journal</a>
          <a href="#" className="text-[#6F6F6F] hover:text-black transition-colors">Reach Us</a>
        </div>

        <button className="bg-[#000000] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-transform duration-300 hover:scale-[1.03] active:scale-95">
          Begin Journey
        </button>
      </nav>

      {/* Hero Section */}
      <main 
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full max-w-7xl mx-auto"
        style={{paddingTop: 'calc(8rem - 75px)', paddingBottom: '10rem' // pb-40 equivalent}}
      >
        <h1 
          className="font-instrument font-normal text-5xl sm:text-7xl md:text-8xl max-w-5xl mx-auto tracking-custom animate-fade-rise"
          style={{lineHeight: 0.95}}
        >
          <span className="text-[#000000]">Beyond </span>
          <span className="text-[#6F6F6F] italic">silence,</span>
          <span className="text-[#000000]"> we build </span>
          <br className="hidden md:block" />
          <span className="text-[#6F6F6F] italic">the eternal.</span>
        </h1>

        <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay">
          Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.
        </p>

        <button className="bg-[#000000] text-white px-14 py-5 rounded-full text-base font-medium mt-12 transition-transform duration-300 hover:scale-[1.03] active:scale-95 animate-fade-rise-delay-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          Begin Journey
        </button>
      </main>

    </div>
  );
}