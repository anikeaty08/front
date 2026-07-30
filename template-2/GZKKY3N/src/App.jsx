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



    // Animated grid background
    const rand = (min, max) => Math.random() * (max - min) + min;
    class Pixel {
      constructor(x, y, color, speed, delay, delayHide, step, boundSize) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.speed = rand(0.1, 0.9) * speed;
        this.size = 0;
        this.sizeStep = rand(0, 0.5);
        this.minSize = 0.5;
        this.maxSizeAvailable = boundSize || 2;
        this.maxSize = rand(this.minSize, this.maxSizeAvailable);
        this.sizeDirection = 1;
        this.delay = delay;
        this.delayHide = delayHide;
        this.counter = 0;
        this.counterHide = 0;
        this.counterStep = step;
        this.isHidden = false;
        this.isFlicking = false;
      }
      draw(ctx) {
        const centerOffset = this.maxSizeAvailable * 0.5 - this.size * 0.5;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size);
      }
      show() {
        this.isHidden = false;
        this.counterHide = 0;
        if (this.counter <= this.delay) {
          this.counter += this.counterStep;
          return;
        }
        if (this.size >= this.maxSize) {
          this.isFlicking = true;
        }
        if (this.isFlicking) {
          this.flicking();
        } else {
          this.size += this.sizeStep;
        }
      }
      hide() {
        this.counter = 0;
        if (this.counterHide <= this.delayHide) {
          this.counterHide += this.counterStep;
          if (this.isFlicking) {
            this.flicking();
          }
          return;
        }
        this.isFlicking = false;
        if (this.size <= 0) {
          this.size = 0;
          this.isHidden = true;
          return;
        } else {
          this.size -= 0.05;
        }
      }
      flicking() {
        if (this.size >= this.maxSize) {
          this.sizeDirection = -1;
        } else if (this.size <= this.minSize) {
          this.sizeDirection = 1;
        }
        this.size += this.sizeDirection * this.speed;
      }
    }
    const container = document.querySelector("#animation-container");
    const canvas = document.createElement("canvas");
    const interval = 1000 / 60;
    container.append(canvas);
    const ctx = canvas.getContext("2d");
    let width;
    let height;
    let pixels;
    let request;
    let lastTime;
    let ticker;
    let maxTicker = 360;
    let animationDirection = 1;
    const getDelay = (x, y, direction) => {
      let dx = x - width * 0.5;
      let dy = y - height;
      if (direction) dy = y;
      return Math.sqrt(dx ** 2 + dy ** 2);
    }
    const initPixels = () => {
      const h = Math.floor(rand(220, 280));
      const colorsLen = 5;
      const colors = Array.from({ length: colorsLen }, (_, index) => `hsl(${Math.floor(rand(h, h + (index + 1) * 10))} 100% ${rand(50, 100)}%)`);
      const gap = 6;
      const step = (width + height) * 0.005;
      const speed = rand(0.008, 0.25);
      const maxSize = Math.floor(gap * 0.5);
      pixels = [];
      for (let x = 0; x < width; x += gap) {
        for (let y = 0; y < height; y += gap) {
          if (x + maxSize > width || y + maxSize > height) continue;
          const color = colors[Math.floor(Math.random() * colorsLen)];
          const delay = getDelay(x, y);
          const delayHide = getDelay(x, y);
          pixels.push(new Pixel(x, y, color, speed, delay, delayHide, step, maxSize));
        }
      }
    }
    const animate = () => {
      request = requestAnimationFrame(animate);
      const now = performance.now();
      const diff = now - (lastTime || 0);
      if (diff < interval) return;
      lastTime = now - (diff % interval);
      ctx.clearRect(0, 0, width, height);
      if (ticker >= maxTicker) {
        animationDirection = -1;
      } else if (ticker <= 0) {
        animationDirection = 1;
      }
      let allHidden = true;
      pixels.forEach((pixel) => {
        if (animationDirection > 0) {
          pixel.show();
        } else {
          pixel.hide();
          allHidden = allHidden && pixel.isHidden;
        }
        pixel.draw(ctx);
      });
      ticker += animationDirection;
      if (animationDirection < 0 && allHidden) {
        ticker = 0;
      }
    }
    const resize = () => {
      cancelAnimationFrame(request);
      const rect = container.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = width;
      canvas.height = height;
      initPixels();
      ticker = 0;
      animate();
    }
    new ResizeObserver(resize).observe(container);
    // No focus transition on inputs
  
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
      
<div className="min-h-screen flex items-center justify-center p-4">

<div className="absolute inset-0 pointer-events-none opacity-40" id="animation-container"></div>

<div className="max-w-md w-full bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 relative z-10 animate-fadeIn">
<div className="p-8">

<div className="flex justify-center mb-8">
<div className="h-12 w-12 rounded-full bg-indigo-500/20 flex items-center justify-center animate-pulse">
<i className="fa-solid fa-bolt text-indigo-400 text-xl"></i>
</div>
</div>

<div className="text-center mb-8 animate-slideUp">
<h2 className="text-xl font-semibold text-white">Sign in</h2>
<p className="text-gray-400 text-sm mt-1">Access your account</p>
</div>

<form className="space-y-5 staggered-animation">
<div>
<input autocomplete="username" className="w-full px-4 py-3 bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-200 placeholder-gray-500" placeholder="Email" type="email" />
</div>
<div className="relative">
<input autocomplete="current-password" className="w-full px-4 py-3 bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-200 placeholder-gray-500" placeholder="Password" type="password" />
<button className="absolute right-3 top-3 text-gray-400 hover:text-gray-300" tabindex="-1" type="button">
<i className="fa-solid fa-eye-slash text-sm"></i>
</button>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center">
<input className="h-4 w-4 bg-gray-700 border-0 rounded text-indigo-500 focus:ring-0 focus:ring-offset-0" type="checkbox" />
<span className="ml-2 block text-xs text-gray-400">Remember me</span>
</label>
<a className="text-xs text-indigo-400 hover:text-indigo-300" href="#">Forgot password?</a>
</div>
<button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition font-medium text-sm" type="submit">
            Sign in
          </button>
<div className="relative my-4">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-gray-700"></div>
</div>
<div className="relative flex justify-center">
<span className="px-2 bg-gray-800 text-xs text-gray-500">or continue with</span>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<button className="flex justify-center items-center py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition" type="button">
<i className="fa-brands fa-google text-gray-400"></i>
</button>
<button className="flex justify-center items-center py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition" type="button">
<i className="fa-brands fa-github text-gray-400"></i>
</button>
<button className="flex justify-center items-center py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition" type="button">
<i className="fa-brands fa-apple text-gray-400"></i>
</button>
</div>
</form>

<div className="mt-6 text-center animate-slideUp" style={{animationDelay: `0.7s`}}>
<p className="text-xs text-gray-400">
            Don't have an account? 
            <a className="text-indigo-400 hover:text-indigo-300" href="#">Create one</a>
</p>
</div>
</div>
</div>
</div>


    </>
  );
}
