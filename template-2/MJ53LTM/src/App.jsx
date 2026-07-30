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
      

<section className="hero-section">
<canvas height="902" id="neuro" style={{width: `1440px`, height: `902px`}} width="1440"></canvas>

<nav className="relative z-20 w-full px-4 md:px-8 pt-8 pb-8 fade-in">
<div className="max-w-7xl mx-auto">
<div className="nav-glass rounded-2xl pt-4 pr-6 pb-4 pl-6 backdrop-blur-none">
<div className="flex items-center justify-between">
<div className="flex items-center">
<span className="logo-glow text-3xl font-semibold text-white font-manrope">
                                awe<span className="text-white/60">.</span>
</span>
</div>
<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link hover:text-white transition-colors text-base font-normal text-white/90 tracking-tight" href="#">Home</a>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight flex items-center" href="#">
                                    Websites
                                    <svg className="dropdown-chevron" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</a>
<div className="dropdown-menu">
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18"></rect>
<path></path>
</svg>
<div className="dropdown-content">
<h4>Custom Design</h4>
<p>Bespoke websites tailored to your brand</p>
</div>
</div>
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
<div className="dropdown-content">
<h4>E-commerce</h4>
<p>Online stores that convert visitors</p>
</div>
</div>
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
<div className="dropdown-content">
<h4>Maintenance</h4>
<p>Keep your site secure and up-to-date</p>
</div>
</div>
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
<div className="dropdown-content">
<h4>Redesign</h4>
<p>Modernize your existing website</p>
</div>
</div>
</div>
</div>

<div className="dropdown">
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight flex items-center" href="#">
                                    Digital Marketing
                                    <svg className="dropdown-chevron" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</a>
<div className="dropdown-menu">
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11"></circle>
<path></path>
</svg>
<div className="dropdown-content">
<h4>SEO</h4>
<p>Rank higher on Google search results</p>
</div>
</div>
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<div className="dropdown-content">
<h4>Content Marketing</h4>
<p>Engage audiences with quality content</p>
</div>
</div>
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20"></rect>
<path></path>
</svg>
<div className="dropdown-content">
<h4>Email Marketing</h4>
<p>Convert leads with targeted campaigns</p>
</div>
</div>
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<div className="dropdown-content">
<h4>Social Media</h4>
<p>Build communities and brand awareness</p>
</div>
</div>
<div className="dropdown-item">
<svg className="dropdown-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line></line>
<line></line>
<line></line>
</svg>
<div className="dropdown-content">
<h4>Analytics</h4>
<p>Track performance and optimize ROI</p>
</div>
</div>
</div>
</div>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">About</a>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">Our Work</a>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">Learn</a>
<a className="nav-link hover:text-white transition-colors text-base font-medium text-white/95 tracking-tight" href="#">Contact</a>
</div>
<div className="flex items-center space-x-3">
<button className="glass-button group text-base">
<span className="shiny-text font-medium" style={{'--duration': `3s`}}>
                                    Work With Us
                                </span>
</button>
<button className="lg:hidden text-white/80 hover:text-white transition-colors p-2">
<svg className="lucide lucide-menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line></svg>
</button>
</div>
</div>
</div>
</div>
</nav>

<div className="relative z-10 min-h-[85vh] flex md:px-8 pt-16 pr-4 pb-20 pl-4 items-center">
<div className="max-w-7xl w-full flex flex-col text-center mr-auto ml-auto items-center">
<div className="text-center">
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-2">
<span className="gradient-text">Your part<span className="text-slate-50">n</span><span className="text-slate-50">e</span><span className="text-slate-50">r</span><span className="text-slate-50">s</span> </span><span className="text-slate-50">in</span>
</h1>
<h1 className="md:text-6xl lg:text-7xl leading-tight fade-in fade-in-delay-1 text-5xl tracking-tight font-manrope text-center mb-6">
<span className="text-slate-50">online growth.</span>
</h1>
<p className="md:text-xl max-w-xl fade-in fade-in-delay-2 text-lg text-white/80 font-manrope text-center mb-8 mx-auto">
                        Our advanced neural networks enable you to build, deploy, and scale AI solutions that adapt to your unique business challenges.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in fade-in-delay-3 justify-center">
<a className="transition-all hover:bg-white/90 font-medium text-gray-900 text-center bg-white rounded-xl pt-4 pr-8 pb-4 pl-8" href="#">Explore Services</a>
<button className="glass-button">
<span className="shiny-text text-base font-medium" style={{'--duration': `4s`}}>
                                Get Started
                            </span>
</button>
</div>
<div className="mt-10 flex items-center gap-2 fade-in fade-in-delay-3 justify-center">
<div className="flex -space-x-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/44.jpg" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/men/86.jpg" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-gray-900" src="https://randomuser.me/api/portraits/women/63.jpg" />
</div>
<div className="text-sm text-white/70">Trusted by 350+ Australian business owners</div>
</div>
</div>
</div>
</div>
</section>

<script id="vertShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        attribute vec2 a_position;
        void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `
}} />
<script id="fragShader" type="x-shader/x-fragment" dangerouslySetInnerHTML={{
  __html: `
        precision mediump float;
        varying vec2 vUv;
        uniform float u_time;
        uniform float u_ratio;
        uniform vec2 u_pointer_position;
        uniform float u_scroll_progress;

        vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
        }

        float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;
            for (int j = 0; j < 15; j++) {
                uv = rotate(uv, 1.);
                sine_acc = rotate(sine_acc, 1.);
                vec2 layer = uv * scale + float(j) + sine_acc - t;
                sine_acc += sin(layer) + 2.4 * p;
                res += (.5 + .5 * cos(layer)) / scale;
                scale *= (1.2);
            }
            return res.x + res.y;
        }

        void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;
            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5`
}} />
    </>
  );
}
