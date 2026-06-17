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
      

<header className="border-b border-gray-800/50 bg-[#0a0a0a]/80 backdrop-blur-sm sticky top-0 z-50">
<nav className="max-w-7xl mx-auto px-6 py-5">
<div className="flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-white" href="#">VE</a>
<div className="flex items-center gap-8">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>
</header>

<section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">Video Editor &amp;<br/>Creative Storyteller</h1>
<p className="text-lg text-gray-400 leading-relaxed">Crafting compelling visual narratives through precision editing and creative vision.</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16" id="work">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Selected Work</h2>
<p className="text-gray-400">A collection of recent projects</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Brand Commercial</h3>
<p className="text-xs text-gray-500">2:34</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Music Video</h3>
<p className="text-xs text-gray-500">3:45</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Corporate Video</h3>
<p className="text-xs text-gray-500">1:58</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Documentary Short</h3>
<p className="text-xs text-gray-500">5:12</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Fashion Film</h3>
<p className="text-xs text-gray-500">2:15</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Event Highlight</h3>
<p className="text-xs text-gray-500">3:22</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Product Launch</h3>
<p className="text-xs text-gray-500">1:45</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Travel Montage</h3>
<p className="text-xs text-gray-500">4:03</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Short Film</h3>
<p className="text-xs text-gray-500">6:28</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Brand Story</h3>
<p className="text-xs text-gray-500">2:49</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Concert Recap</h3>
<p className="text-xs text-gray-500">3:11</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Interview Series</h3>
<p className="text-xs text-gray-500">4:37</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Sports Highlight</h3>
<p className="text-xs text-gray-500">2:08</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Real Estate Tour</h3>
<p className="text-xs text-gray-500">1:52</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Tech Review</h3>
<p className="text-xs text-gray-500">3:56</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Wedding Film</h3>
<p className="text-xs text-gray-500">5:44</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Social Campaign</h3>
<p className="text-xs text-gray-500">0:58</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Explainer Video</h3>
<p className="text-xs text-gray-500">2:19</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Behind The Scenes</h3>
<p className="text-xs text-gray-500">4:15</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden mb-3 border border-gray-800/50 hover:border-gray-700 transition-all">
<img alt="Video project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center transition-colors">
<i className="w-5 h-5 text-black ml-0.5" data-lucide="play" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-white mb-1">Promotional Teaser</h3>
<p className="text-xs text-gray-500">1:28</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-800/50" id="about">
<div className="max-w-3xl">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">About Me</h2>
<p className="text-lg text-gray-300 leading-relaxed">I'm a passionate video editor with over 8 years of experience transforming raw footage into compelling visual stories. Specializing in commercial, narrative, and documentary editing, I bring precision and creativity to every project, ensuring each frame serves the story.</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-800/50" id="contact">
<div className="max-w-3xl">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-8">Get In Touch</h2>
<p className="text-gray-400 mb-12">Interested in working together? Let's discuss your next project.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="group flex items-start gap-4 p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 bg-gray-900/20 hover:bg-gray-900/40 transition-all" href="mailto:hello@videoeditor.com">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white mb-1">Email</div>
<div className="text-sm text-gray-400">hello@videoeditor.com</div>
</div>
</a>
<a className="group flex items-start gap-4 p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 bg-gray-900/20 hover:bg-gray-900/40 transition-all" href="tel:+1234567890">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white mb-1">Phone</div>
<div className="text-sm text-gray-400">+1 (234) 567-890</div>
</div>
</a>
<a className="group flex items-start gap-4 p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 bg-gray-900/20 hover:bg-gray-900/40 transition-all" href="https://linkedin.com" target="_blank">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white mb-1">LinkedIn</div>
<div className="text-sm text-gray-400">linkedin.com/in/videoeditor</div>
</div>
</a>
<a className="group flex items-start gap-4 p-6 rounded-lg border border-gray-800/50 hover:border-gray-700 bg-gray-900/20 hover:bg-gray-900/40 transition-all" href="https://instagram.com" target="_blank">
<div className="w-10 h-10 rounded-lg bg-gray-800/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gray-800 transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<div className="text-sm font-medium text-white mb-1">Instagram</div>
<div className="text-sm text-gray-400">@videoeditor</div>
</div>
</a>
</div>
</div>
</section>

<footer className="border-t border-gray-800/50 mt-24">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-500">© 2024 Video Editor. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-gray-500 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
