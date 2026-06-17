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



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. Interactive Image Slider Logic ---
            const container = document.getElementById('slider-container');
            const overlay = document.getElementById('slider-overlay');
            const handle = document.getElementById('slider-handle');
            let isDragging = false;

            const updateSlider = (x) => {
                const rect = container.getBoundingClientRect();
                let percentage = ((x - rect.left) / rect.width) * 100;
                percentage = Math.max(0, Math.min(100, percentage));
                
                overlay.style.width = `${percentage}%`;
                // Adjust inner image width to compensate clipping
                overlay.querySelector('img').style.width = `${10000 / percentage}%`;
                handle.style.left = `${percentage}%`;
            };

            const startDrag = () => isDragging = true;
            const stopDrag = () => isDragging = false;
            const moveDrag = (e) => {
                if (!isDragging) return;
                let clientX = e.touches ? e.touches[0].clientX : e.clientX;
                updateSlider(clientX);
            };

            // Mouse Events
            container.addEventListener('mousedown', startDrag);
            window.addEventListener('mouseup', stopDrag);
            window.addEventListener('mousemove', moveDrag);
            
            // Touch Events
            container.addEventListener('touchstart', startDrag);
            window.addEventListener('touchend', stopDrag);
            window.addEventListener('touchmove', moveDrag);

            
            // --- 2. Scroll Reveal Observer ---
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));


            // --- 3. Drag and Drop Interaction ---
            const uploadZone = document.getElementById('upload-zone');
            const fileInput = document.getElementById('file-input');
            const dragOverlay = document.getElementById('drag-overlay');

            // Highlight on drag
            ['dragenter', 'dragover'].forEach(eventName => {
                uploadZone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    uploadZone.classList.add('drag-active');
                    dragOverlay.style.opacity = '1';
                }, false);
            });

            // Remove highlight on leave/drop
            ['dragleave', 'drop'].forEach(eventName => {
                uploadZone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    uploadZone.classList.remove('drag-active');
                    dragOverlay.style.opacity = '0';
                    
                    if(eventName === 'drop') {
                        // Handle file drop (Visual only for this demo)
                        const files = e.dataTransfer.files;
                        if(files.length) {
                             // Mock success state
                             uploadZone.querySelector('p.font-medium').textContent = "File Selected: " + files[0].name;
                        }
                    }
                }, false);
            });

            // Handle normal input change
            fileInput.addEventListener('change', (e) => {
                if(fileInput.files.length) {
                    uploadZone.querySelector('p.font-medium').textContent = "File Selected: " + fileInput.files[0].name;
                }
            });
        });
    
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
      

<div className="fixed inset-0 z-0 paper-texture"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 reveal-on-scroll">
<div className="w-full max-w-[900px] bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] rounded-full px-6 py-3 flex items-center justify-between transition-all hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]">

<a className="font-serif text-lg font-medium tracking-tight text-[#2B2B2B] hover:opacity-70 transition-opacity" href="#">
                PetPencil
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8E8E8E]">
<a className="hover:text-[#2B2B2B] transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-[#2B2B2B] transition-colors" href="#examples">Examples</a>
<a className="hover:text-[#2B2B2B] transition-colors" href="#pricing">Pricing</a>
</div>

<a className="bg-[#2B2B2B] text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-[#404040] transition-colors flex items-center gap-2 group" href="#create">
<span>Create Sketch</span>
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24 px-6 md:px-12 w-full max-w-[1200px] mx-auto flex flex-col gap-24 md:gap-32">

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center min-h-[60vh]">

<div className="space-y-8 text-center md:text-left order-2 md:order-1 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6E2DB] shadow-sm mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-medium text-[#8E8E8E] uppercase tracking-wider">Now accepting orders</span>
</div>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#2B2B2B] font-medium">
                    Turn your pet photo into a <span className="italic text-[#8E8E8E]">timeless</span> pencil sketch
                </h1>
<p className="text-[#8E8E8E] text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-light">
                    A realistic hand‑drawn graphite sketch — preserving your pet’s exact pose, expression, and personality.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
<a className="w-full sm:w-auto bg-[#2B2B2B] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#404040] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#2B2B2B]/10 text-sm flex items-center justify-center gap-2 group" href="#create">
                        Create Your Sketch
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
<a className="w-full sm:w-auto text-[#2B2B2B] border border-[#E6E2DB] bg-white/50 px-8 py-3.5 rounded-full font-medium hover:bg-white hover:border-[#8E8E8E] transition-all text-sm flex items-center justify-center" href="#examples">
                        View Examples
                    </a>
</div>
</div>

<div className="relative order-1 md:order-2 reveal-on-scroll">
<div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-[#2B2B2B]/5 border border-white slider-drag-cursor select-none" id="slider-container">

<img alt="Cat Original" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 w-1/2 overflow-hidden bg-[#FAFAF8] border-r border-white/80 pointer-events-none" id="slider-overlay">
<img alt="Cat Sketch" className="absolute top-0 left-0 max-w-none h-full w-full object-cover grayscale contrast-150 brightness-110 sepia-[0.2]" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{width: 'calc(100% / 0.5)'}}/> 

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/sketch-paper.png')] opacity-40 mix-blend-multiply"></div>
</div>

<div className="absolute inset-y-0 left-1/2 w-px bg-white/80 shadow-[0_0_15px_rgba(0,0,0,0.2)] flex items-center justify-center pointer-events-none z-20" id="slider-handle">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-[#2B2B2B]">
<span className="iconify" data-icon="lucide:move-horizontal" data-width="14"></span>
</div>
</div>
</div>

<div className="absolute -bottom-6 right-8 bg-white py-2 px-4 rounded-xl shadow-sm border border-[#E6E2DB]/50 text-xs font-medium text-[#8E8E8E] flex items-center gap-2 z-20">
<span className="iconify text-[#2B2B2B]" data-icon="lucide:cat"></span>
                    British Shorthair
                </div>
</div>
</section>

<section className="text-center space-y-12 reveal-on-scroll">
<h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">Designed specifically for pets</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.03)] border border-[#E6E2DB]/40 flex flex-col items-center gap-4 hover:border-[#E6E2DB] transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-2xl flex items-center justify-center text-[#2B2B2B]">
<span className="iconify" data-icon="lucide:scan-face" data-width="20"></span>
</div>
<h3 className="font-serif text-lg font-medium">Identity Preserved</h3>
<p className="text-sm text-[#8E8E8E] leading-relaxed">Your pet stays your pet — same face, same pose, no AI hallucination.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.03)] border border-[#E6E2DB]/40 flex flex-col items-center gap-4 hover:border-[#E6E2DB] transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-2xl flex items-center justify-center text-[#2B2B2B]">
<span className="iconify" data-icon="lucide:paw-print" data-width="20"></span>
</div>
<h3 className="font-serif text-lg font-medium">Cats &amp; Dogs Only</h3>
<p className="text-sm text-[#8E8E8E] leading-relaxed">We intentionally limit our algorithm to pets we can render perfectly.</p>
</div>

<div className="bg-white p-8 rounded-3xl shadow-[0_2px_20px_-10px_rgba(0,0,0,0.03)] border border-[#E6E2DB]/40 flex flex-col items-center gap-4 hover:border-[#E6E2DB] transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-[#FAFAF8] rounded-2xl flex items-center justify-center text-[#2B2B2B]">
<span className="iconify" data-icon="lucide:pencil" data-width="20"></span>
</div>
<h3 className="font-serif text-lg font-medium">Pencil Style Only</h3>
<p className="text-sm text-[#8E8E8E] leading-relaxed">No filters. No cartoons. Just clean, classic graphite strokes.</p>
</div>
</div>
</section>

<section className="py-12 border-y border-[#E6E2DB]/30 reveal-on-scroll" id="how-it-works">
<div className="flex flex-col md:flex-row justify-between items-start relative gap-12 md:gap-4">

<div className="hidden md:block absolute top-12 left-20 right-20 h-px bg-gradient-to-r from-transparent via-[#E6E2DB] to-transparent -z-10"></div>

<div className="flex flex-col items-center text-center gap-4 flex-1 group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border border-[#E6E2DB]/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
<lottie-player autoplay="" background="transparent" loop="" speed="1" src="https://lottie.host/9c240974-98ae-4f24-9f75-27a36c84523d/CqE32wJ95E.json" style={{width: '60px', height: '60px'}}></lottie-player>
</div>
<div>
<h4 className="font-medium text-sm mt-2">Upload Photo</h4>
<p className="text-xs text-[#8E8E8E] max-w-[150px] mx-auto mt-1">Upload a clear photo of your cat or dog.</p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4 flex-1 group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border border-[#E6E2DB]/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 delay-75">

<lottie-player autoplay="" background="transparent" loop="" speed="1" src="https://lottie.host/c5c99e9b-4e1b-43ec-8004-972175960d70/xKz4wD3q1j.json" style={{width: '50px', height: '50px'}}></lottie-player>
</div>
<div>
<h4 className="font-medium text-sm mt-2">Smart Verify</h4>
<p className="text-xs text-[#8E8E8E] max-w-[150px] mx-auto mt-1">We verify lighting and pose automatically.</p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4 flex-1 group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border border-[#E6E2DB]/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 delay-100">

<lottie-player autoplay="" background="transparent" loop="" speed="1" src="https://lottie.host/1b359f51-2292-4f36-932d-60a6e344e1d5/9ZzWf8Kq8a.json" style={{width: '60px', height: '60px'}}></lottie-player>
</div>
<div>
<h4 className="font-medium text-sm mt-2">Sketch Creation</h4>
<p className="text-xs text-[#8E8E8E] max-w-[150px] mx-auto mt-1">Our engine renders every graphite stroke.</p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4 flex-1 group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] border border-[#E6E2DB]/50 relative overflow-hidden group-hover:scale-105 transition-transform duration-500 delay-150">

<lottie-player background="transparent" hover="" loop="" speed="1" src="https://lottie.host/4a5c5314-8c8f-4d2c-8820-255d644d6b5e/9D5H9c9y5z.json" style={{width: '50px', height: '50px'}}></lottie-player>
</div>
<div>
<h4 className="font-medium text-sm mt-2">Download</h4>
<p className="text-xs text-[#8E8E8E] max-w-[150px] mx-auto mt-1">Get your high-res sketch instantly.</p>
</div>
</div>
</div>
</section>

<section className="space-y-12 reveal-on-scroll" id="examples">
<div className="text-center">
<h2 className="font-serif text-3xl font-medium tracking-tight mb-3">Gallery</h2>
<p className="text-[#8E8E8E] font-light">Hover to reveal the sketch</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-crosshair bg-[#E6E2DB] shadow-md hover:shadow-xl transition-all duration-500">
<img alt="Cat Photo" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Cat Sketch" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-110 sepia-[0.3] opacity-0 transition-opacity duration-700 group-hover:opacity-100" src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-medium tracking-wide uppercase text-[#8E8E8E]">Tabby Cat</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-crosshair bg-[#E6E2DB] shadow-md hover:shadow-xl transition-all duration-500">
<img alt="Dog Photo" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Dog Sketch" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-110 sepia-[0.3] opacity-0 transition-opacity duration-700 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-medium tracking-wide uppercase text-[#8E8E8E]">French Bulldog</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-crosshair bg-[#E6E2DB] shadow-md hover:shadow-xl transition-all duration-500">
<img alt="Cat Photo" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Cat Sketch" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-110 sepia-[0.3] opacity-0 transition-opacity duration-700 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-medium tracking-wide uppercase text-[#8E8E8E]">Ragdoll</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-crosshair bg-[#E6E2DB] shadow-md hover:shadow-xl transition-all duration-500">
<img alt="Dog Photo" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Dog Sketch" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-110 sepia-[0.3] opacity-0 transition-opacity duration-700 group-hover:opacity-100" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-medium tracking-wide uppercase text-[#8E8E8E]">Corgi</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-crosshair bg-[#E6E2DB] shadow-md hover:shadow-xl transition-all duration-500">
<img alt="Cat Photo" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Cat Sketch" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-110 sepia-[0.3] opacity-0 transition-opacity duration-700 group-hover:opacity-100" src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-medium tracking-wide uppercase text-[#8E8E8E]">Maine Coon</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-crosshair bg-[#E6E2DB] shadow-md hover:shadow-xl transition-all duration-500">
<img alt="Dog Photo" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Dog Sketch" className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-110 sepia-[0.3] opacity-0 transition-opacity duration-700 group-hover:opacity-100" src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-medium tracking-wide uppercase text-[#8E8E8E]">Golden Retriever</span>
</div>
</div>
</div>
<div className="text-center pt-4">
<button className="group text-sm font-medium text-[#2B2B2B] hover:text-[#8E8E8E] transition-colors flex items-center gap-2 mx-auto">
                    See More Examples 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</section>

<section className="flex justify-center reveal-on-scroll" id="pricing">
<div className="w-full max-w-md bg-white rounded-[2rem] p-10 border border-[#E6E2DB] shadow-xl shadow-[#E6E2DB]/20 relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#E6E2DB]/30 duration-500">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FAFAF8] rounded-full blur-2xl animate-pulse"></div>
<div className="relative z-10 text-center space-y-6">
<div>
<h3 className="font-serif text-xl font-medium mb-1">One-Time Sketch</h3>
<p className="text-xs text-[#8E8E8E]">Pay per masterpiece</p>
</div>
<div className="flex items-baseline justify-center gap-1">
<span className="font-serif text-5xl text-[#2B2B2B]">£3</span>
<span className="text-[#8E8E8E] text-sm">/ sketch</span>
</div>
<ul className="space-y-4 text-sm text-[#555] text-left max-w-[240px] mx-auto py-4">
<li className="flex items-center gap-3">
<span className="iconify text-[#2B2B2B]" data-icon="lucide:check" data-width="16"></span>
                            No subscription
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-[#2B2B2B]" data-icon="lucide:check" data-width="16"></span>
                            4000x4000px Resolution
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-[#2B2B2B]" data-icon="lucide:check" data-width="16"></span>
                            Personal use included
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-[#2B2B2B]" data-icon="lucide:check" data-width="16"></span>
                            Digital download
                        </li>
</ul>
<a className="block w-full bg-[#2B2B2B] text-white py-3.5 rounded-xl font-medium hover:bg-[#404040] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#2B2B2B]/10 active:scale-95" href="#create">
                        Create My Sketch
                    </a>
<p className="text-[10px] text-[#8E8E8E] pt-2">
                        One free preview with watermark available
                    </p>
</div>
</div>
</section>

<section className="max-w-2xl mx-auto w-full space-y-8 reveal-on-scroll" id="faq">
<h2 className="font-serif text-2xl text-center font-medium">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-[#E6E2DB]/50 overflow-hidden open:shadow-sm transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-sm hover:bg-[#FAFAF8] transition-colors select-none">
                        Will this change my pet’s appearance?
                        <span className="iconify text-[#8E8E8E] group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-[#8E8E8E] leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                        Not at all. Our technology uses the structural lines of your photo. If your dog is smiling, the sketch will smile. It is an artistic translation, not a replacement.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-[#E6E2DB]/50 overflow-hidden open:shadow-sm transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-sm hover:bg-[#FAFAF8] transition-colors select-none">
                        Can I upload any animal?
                        <span className="iconify text-[#8E8E8E] group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-[#8E8E8E] leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                        Currently, our model is tuned exclusively for <strong>cats and dogs</strong> to ensure premium quality. Other animals may not render with the same level of pencil stroke accuracy.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-[#E6E2DB]/50 overflow-hidden open:shadow-sm transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-sm hover:bg-[#FAFAF8] transition-colors select-none">
                        How long does it take?
                        <span className="iconify text-[#8E8E8E] group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-[#8E8E8E] leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                        Processing typically takes between 10 to 30 seconds depending on the resolution of your uploaded image.
                    </div>
</details>
<details className="group bg-white rounded-2xl border border-[#E6E2DB]/50 overflow-hidden open:shadow-sm transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-sm hover:bg-[#FAFAF8] transition-colors select-none">
                        Is this a subscription?
                        <span className="iconify text-[#8E8E8E] group-open:rotate-180 transition-transform duration-300" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-sm text-[#8E8E8E] leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300">
                        No hidden fees. You pay £3 per final sketch you choose to download without a watermark.
                    </div>
</details>
</div>
</section>

<section className="py-16 text-center reveal-on-scroll" id="create">
<div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-[0_4px_30px_-15px_rgba(0,0,0,0.05)] border border-[#E6E2DB]/60">
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-4">Give your pet a sketch you’ll keep forever</h2>
<p className="text-[#8E8E8E] mb-10 max-w-lg mx-auto font-light">Join thousands of pet owners preserving memories in graphite.</p>

<div className="max-w-xl mx-auto border-2 border-dashed border-[#E6E2DB] rounded-2xl bg-[#FAFAF8]/50 p-12 transition-all duration-300 hover:border-[#8E8E8E] hover:bg-[#FAFAF8] group cursor-pointer relative overflow-hidden" id="upload-zone">
<div className="flex flex-col items-center gap-4 relative z-10 pointer-events-none">
<div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-[#2B2B2B] group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="24"></span>
</div>
<div className="space-y-1">
<p className="font-medium text-sm text-[#2B2B2B]">Click to upload or drag &amp; drop</p>
<p className="text-xs text-[#8E8E8E]">JPG or PNG (Max 10MB)</p>
</div>
</div>

<input className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-20" id="file-input" type="file"/>

<div className="absolute inset-0 bg-[#FAFAF8] opacity-0 transition-opacity duration-300 flex items-center justify-center z-0" id="drag-overlay">
<p className="font-serif text-lg text-[#2B2B2B] animate-bounce">Drop photo here!</p>
</div>
</div>

<div className="flex items-center justify-center gap-3 mt-6">
<input className="custom-checkbox appearance-none w-5 h-5 border border-[#E6E2DB] rounded-md bg-white cursor-pointer transition-all focus:ring-2 focus:ring-[#2B2B2B]/20 focus:ring-offset-1" id="verify" type="checkbox"/>
<label className="text-xs text-[#8E8E8E] cursor-pointer select-none" htmlFor="verify">
                        I confirm this is a photo of a cat or dog
                    </label>
</div>
<div className="mt-8">
<button className="bg-[#2B2B2B] text-white px-10 py-4 rounded-full font-medium hover:bg-[#404040] transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-xl shadow-[#2B2B2B]/20 w-full sm:w-auto flex items-center justify-center gap-2 mx-auto">
<span className="iconify" data-icon="lucide:wand-2" data-width="16"></span>
                        Generate Sketch
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-[#E6E2DB]/50 relative z-10 reveal-on-scroll">
<div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="space-y-4">
<a className="font-serif text-xl font-medium tracking-tight text-[#2B2B2B]" href="#">
                        PetPencil
                    </a>
<p className="text-xs text-[#8E8E8E] leading-relaxed max-w-xs">
                        Turning cherished pet moments into timeless graphite art. Minimal, clean, and dedicated to detail.
                    </p>
</div>

<div className="flex gap-12 md:justify-center">
<div className="space-y-4">
<h4 className="font-medium text-sm text-[#2B2B2B]">Product</h4>
<ul className="space-y-2 text-xs text-[#8E8E8E]">
<li><a className="hover:text-[#2B2B2B] transition-colors" href="#how-it-works">How it Works</a></li>
<li><a className="hover:text-[#2B2B2B] transition-colors" href="#examples">Examples</a></li>
<li><a className="hover:text-[#2B2B2B] transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="font-medium text-sm text-[#2B2B2B]">Support</h4>
<ul className="space-y-2 text-xs text-[#8E8E8E]">
<li><a className="hover:text-[#2B2B2B] transition-colors" href="#faq">FAQ</a></li>
<li><a className="hover:text-[#2B2B2B] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="md:text-right space-y-4">
<h4 className="font-medium text-sm text-[#2B2B2B]">Legal</h4>
<ul className="space-y-2 text-xs text-[#8E8E8E]">
<li><a className="hover:text-[#2B2B2B] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#2B2B2B] transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>
</div>

<div className="mt-16 pt-8 border-t border-[#E6E2DB]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#8E8E8E] uppercase tracking-wider">
<p>© 2026 PetPencil. All rights reserved.</p>
<div className="flex gap-4">
<span className="iconify hover:text-[#2B2B2B] cursor-pointer transition-colors" data-icon="lucide:instagram" data-width="14"></span>
<span className="iconify hover:text-[#2B2B2B] cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="14"></span>
</div>
</div>
</div>
</footer>



    </>
  );
}
