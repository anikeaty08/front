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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<div className="w-8 h-8 bg-white text-zinc-950 flex items-center justify-center font-medium rounded-md tracking-tight">ré</div>
</div>
<div className="hidden md:flex items-center gap-8 text-zinc-400 text-base font-medium">
<a className="hover:text-white transition-colors" href="#">Who I am</a>
<a className="hover:text-white transition-colors" href="#">What I do</a>
<a className="hover:text-white transition-colors" href="#">C.V.</a>
<a className="hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-white transition-colors" href="#">Contacts</a>
</div>
<div>
<a className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-base font-medium transition-colors border border-white/10" href="#">Download</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-zinc-950 text-white overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-6 text-zinc-100">
                    My name is <span className="text-white font-semibold">Résumé</span><br/>
                    and I show <span className="text-white font-semibold">nice things</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 font-light tracking-tight mb-10">
<span className="text-white font-medium">15+</span> years experience on Earth
                </p>
<div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
<a className="bg-white text-zinc-950 px-6 py-3 rounded-md text-base font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2" href="#">
                        Check me out
                        <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-4">what I do</h2>
<div className="w-12 h-1 bg-zinc-200 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group text-center">
<div className="w-16 h-16 mx-auto mb-6 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100 group-hover:border-zinc-300 transition-colors">
<i className="w-8 h-8 text-zinc-700" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-900">1st Title</h3>
<p className="text-lg text-zinc-500 mb-6 leading-relaxed">
                        Crebritate tunica die et armatis nihil muros <span className="font-medium text-zinc-800">mandato obscuro</span> Polam prope
                    </p>
<a className="inline-block px-5 py-2 rounded-full border border-zinc-200 text-zinc-600 text-base hover:bg-zinc-50 hover:text-zinc-900 transition-colors font-medium" href="#">1st button text</a>
</div>

<div className="group text-center">
<div className="w-16 h-16 mx-auto mb-6 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100 group-hover:border-zinc-300 transition-colors">
<i className="w-8 h-8 text-zinc-700" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-900">2nd Title</h3>
<p className="text-lg text-zinc-500 mb-6 leading-relaxed">
                        Miaci celeri non <span className="font-medium text-zinc-800">non pavceids</span> si hostes rapacium vasta tamen <span className="font-medium text-zinc-800">ultro</span> vantur
                    </p>
<a className="inline-block px-5 py-2 rounded-full bg-zinc-900 text-white text-base hover:bg-zinc-800 transition-colors font-medium" href="#">2nd button text</a>
</div>

<div className="group text-center">
<div className="w-16 h-16 mx-auto mb-6 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-100 group-hover:border-zinc-300 transition-colors">
<i className="w-8 h-8 text-zinc-700" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-4 text-zinc-900">3rd Title</h3>
<p className="text-lg text-zinc-500 mb-6 leading-relaxed">
                        Retentabant dubitatur esset Lotophagi domicilium <span className="font-medium text-zinc-800">virtutum humanitatis</span> ingenuos
                    </p>
<a className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-100 text-zinc-900 text-base hover:bg-zinc-200 transition-colors font-medium" href="#">
                        documentation
                        <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-zinc-200 rounded-2xl rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100 border border-zinc-200">
<img alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-white text-base font-medium px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">this is default</span>
</div>
</div>
</div>

<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-8">who I am</h2>
<div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
<p>This is the "About Me" sample section,<br/>here you will write information about yourself or your business.</p>
<p className="bg-white p-6 rounded-xl border border-zinc-100 shadow-sm text-base">
                            With the inline rich-text editor in <a className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors inline-flex items-center gap-1" href="#">edit mode <i className="w-3 h-3" data-lucide="info" strokeWidth="1.5"></i></a> you can edit this text, add fonts, <em className="italic">style italic</em>, <strong className="font-semibold text-zinc-900">bold type</strong>, <span className="text-xl tracking-tight text-zinc-900">larger</span> or <span className="text-xs">smaller chars</span>, images &amp; links.
                        </p>
<p>People will get to know you better if your message is clear and straight forward.</p>
<p>To start editing now <a className="text-zinc-900 font-medium underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors inline-flex items-center gap-1" href="#">click here <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i></a></p>
</div>
<div className="mt-10">
<a className="inline-block bg-zinc-900 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-zinc-800 transition-colors shadow-sm hover:shadow-md" href="#">
                            See my C.V.
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-4">I got the skills</h2>
<div className="w-12 h-1 bg-zinc-200 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

<div>
<h3 className="text-2xl font-medium tracking-tight mb-8 text-zinc-900 text-center md:text-left">my levels</h3>
<div className="space-y-6">

<div>
<div className="flex justify-between mb-2">
<span className="font-medium text-base text-zinc-700">volley ball</span>
<span className="text-zinc-400 text-base">65%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-400 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<span className="font-medium text-base text-zinc-700">swimming</span>
<span className="text-zinc-400 text-base">80%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-500 h-1.5 rounded-full" style={{width: '80%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<span className="font-medium text-base text-zinc-700">dancing</span>
<span className="text-zinc-400 text-base">90%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-600 h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<span className="font-medium text-base text-zinc-700">baby golf</span>
<span className="text-zinc-400 text-base">75%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-700 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<span className="font-medium text-base text-zinc-700">hockey</span>
<span className="text-zinc-400 text-base">70%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-800 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<span className="font-medium text-base text-zinc-700">skating</span>
<span className="text-zinc-400 text-base">85%</span>
</div>
<div className="w-full bg-zinc-100 rounded-full h-1.5">
<div className="bg-zinc-900 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center text-center p-8 bg-zinc-50 rounded-2xl border border-zinc-100">
<h3 className="text-2xl font-medium tracking-tight mb-8 text-zinc-900">curriculum vitae</h3>
<a className="inline-flex items-center gap-2 px-6 py-2 rounded-md bg-zinc-900 text-white text-base hover:bg-zinc-800 transition-colors font-medium mb-10 shadow-sm" href="#">
                        download
                        <i className="w-4 h-4" data-lucide="download" strokeWidth="1.5"></i>
</a>
<p className="text-lg text-zinc-500 mb-10 max-w-sm italic">
                        blah blah blah ... <span className="font-medium text-zinc-800 not-italic">lorem ipsum</span> dolor sit amet, consectetur adipiscing elit ...
                    </p>
<a className="inline-block px-8 py-3 rounded-md border border-zinc-300 text-zinc-700 bg-white text-base hover:border-zinc-900 hover:text-zinc-900 transition-colors font-medium" href="#">
                        hire me
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Portfolio</h2>
<p className="text-xl text-zinc-400 font-light tracking-tight">my pretty products</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3] mb-6 border border-white/10">
<img alt="Soup" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="text-center px-4">
<h3 className="text-2xl font-medium tracking-tight mb-2">1st item</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                            Crebritate tunica <span className="text-zinc-200 font-medium">mandato obscuro</span> Polam prope indumentis.
                        </p>
</div>
</div>

<div className="group">
<div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3] mb-6 border border-white/10">
<img alt="Skulls" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="text-center px-4">
<h3 className="text-2xl font-medium tracking-tight mb-2">2nd item</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                            Miaci vastabant nec tamen ultro celeri <span className="text-zinc-200 font-medium">sinmo vantur</span> celeri
                        </p>
</div>
</div>

<div className="group">
<div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3] mb-6 border border-white/10">
<img alt="Road" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="text-center px-4">
<h3 className="text-2xl font-medium tracking-tight mb-2">3rd item</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                            Retentabant <span className="text-zinc-200 font-medium">virtutum humanitatis</span> dubitatur ingenuos dubitatur
                        </p>
</div>
</div>

<div className="group">
<div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3] mb-6 border border-white/10">
<img alt="Puzzle" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="text-center px-4">
<h3 className="text-2xl font-medium tracking-tight mb-2">4th item</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                            Laeva successorio <span className="text-zinc-200 font-medium">limes coregna</span> porrigitur ut efficaciae
                        </p>
</div>
</div>

<div className="group">
<div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3] mb-6 border border-white/10">
<img alt="Roots" className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="text-center px-4">
<h3 className="text-2xl font-medium tracking-tight mb-2">5th item</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                            Porrigitur essolio <span className="text-zinc-200 font-medium">duphratis sixtra</span> regna bedlas melopis
                        </p>
</div>
</div>

<div className="group">
<div className="overflow-hidden rounded-xl bg-zinc-900 aspect-[4/3] mb-6 border border-white/10">
<img alt="Fire" className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-80 transition-all duration-500" src="https://images.unsplash.com/photo-1508914127305-fa5114b81b3f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="text-center px-4">
<h3 className="text-2xl font-medium tracking-tight mb-2">6th item</h3>
<p className="text-base text-zinc-400 leading-relaxed">
                            Successorio letva <span className="text-zinc-200 font-medium">gelta majonte</span> cem limes fleut craulin
                        </p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-white/10 text-white text-base hover:bg-white/20 transition-colors font-medium border border-white/10" href="#">
                    find out more
                    <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-4">a title goes here</h2>
<p className="text-xl text-zinc-500 font-light tracking-tight">and subtitle here</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">

<div className="flex flex-col items-center">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">Telephone:</h3>
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 text-zinc-700">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-500">+0 (1)2 34 56 78</p>
</div>

<div className="flex flex-col items-center">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">Openings:</h3>
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 text-zinc-700">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-500 mb-1">Monday - Friday: 9am - 6pm</p>
<p className="text-lg text-zinc-500 mb-1">Saturday: 9am - 2pm</p>
<p className="text-lg text-zinc-500">Sunday: Closed</p>
</div>

<div className="flex flex-col items-center">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">Address:</h3>
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 text-zinc-700">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-zinc-500 mb-1">10 rue de Example</p>
<p className="text-lg text-zinc-500 mb-1">75006 Paris</p>
<p className="text-lg text-zinc-500">France</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center max-w-2xl mx-auto">

<div className="flex flex-col items-center">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">E-mail:</h3>
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</div>
<a className="text-lg text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 underline-offset-4 transition-colors" href="mailto:your@email.here">your@email.here</a>
</div>

<div className="flex flex-col items-center">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">Facebook:</h3>
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 text-zinc-700 hover:bg-[#1877F2] hover:text-white transition-colors cursor-pointer">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</div>
<a className="text-lg text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 underline-offset-4 transition-colors" href="#">http://fb.com/YourFacebookPageHere</a>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-24 pb-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight text-white mb-4">social profiles</h2>
<p className="text-xl text-zinc-500 font-light tracking-tight">follow me ..</p>
</div>
<div className="flex justify-center gap-8 mb-24">
<a className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-14 h-14 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 hover:bg-zinc-900 transition-all" href="#">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i> 
</a>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-base text-zinc-500">
<div className="mb-4 md:mb-0 text-center md:text-left">
<p className="mb-1">you want to download other add-ons? <a className="text-zinc-300 hover:text-white underline underline-offset-4" href="#">click here</a></p>
<p>developed with ♥ by <a className="text-zinc-300 hover:text-white underline underline-offset-4" href="#">Matteo</a></p>
</div>
<div className="text-center md:text-right">
<p className="mb-1 text-zinc-400">a footer phrase goes here</p>
<p className="text-zinc-600">and subtitle here</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
