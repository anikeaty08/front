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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
hand: ['Caveat', 'cursive'],
},
colors: {
dudu: {
50: '#fdf8f6',
100: '#f2e8e5',
200: '#eaddd7',
300: '#e0c3fc', // Soft purple accent from image
400: '#f6a192', // Soft warm accent
500: '#e88c7d',
600: '#d05e4d',
900: '#4a3b38',
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-dudu-50/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 md:p-6">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-medium text-slate-800 tracking-tight">HappyDuduHouse</span>
</a>
<div className="hidden md:block w-auto" id="navbar-default">
<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
<li className="">
<a className="block py-2 px-3 text-slate-600 hover:text-slate-900 transition-colors" href="#">Stories</a>
</li>
<li className="">
<a className="block py-2 px-3 text-slate-600 hover:text-slate-900 transition-colors" href="#">Books</a>
</li>
<li className="">
<a className="block py-2 px-3 text-slate-600 hover:text-slate-900 transition-colors" href="#">Courses</a>
</li>
<li className="">
<a className="block py-2 px-3 text-slate-600 hover:text-slate-900 transition-colors" href="#">About</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-dudu-300 via-dudu-50 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-slate-800 tracking-tight">
                    Life in Vietnam, <br/>
<span className="text-slate-400 font-medium">as it’s actually lived.</span>
</h1>
<p className="text-2xl font-hand text-dudu-600 -rotate-1 origin-bottom-left">
                    Stories, language, food, and everyday moments.
                </p>
<p className="leading-relaxed text-xl text-slate-600 max-w-lg" style={{}}>Not textbook Vietnamese. Not tourist Vietnam. Just real life, from the streets of Saigon to the heart of the family.</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center py-3 px-6 text-lg font-medium text-white rounded-lg bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 transition-all shadow-lg shadow-slate-200" href="#">
                        Explore Vietnamese life
                        <svg className="lucide lucide-arrow-right ml-2 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex justify-center items-center py-3 px-6 text-lg font-medium text-slate-700 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 focus:ring-4 focus:ring-slate-100 transition-all" href="#">
                        Read the stories
                    </a>
</div>
</div>
<div className="relative lg:h-[600px] w-full flex items-center justify-center">

<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-orange-50 border border-white/50">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565578762143-5e937d2f342f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
<div className="bg-gradient-to-t from-dudu-300/20 to-transparent mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8f058ed-5362-4ce8-b654-b4125c81e7a3_1600w.png"/><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>
</div>

</div>
</div>
</div>
</section>



<section className="py-24 bg-white overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 space-y-8">
<div className="flex items-center gap-2 text-dudu-600 font-medium text-lg">
<svg className="lucide lucide-bike w-6 h-6" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
<span className="">Everyday Life in Saigon</span>
</div>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-800">
                        Vietnamese culture doesn’t live in museums. 
                        <span className="text-slate-400">It lives on the streets.</span>
</h2>
<div className="text-xl text-slate-600 space-y-4 leading-relaxed">
<p className="">In Saigon, life happens fast — but it’s deeply human.</p>
<ul className="space-y-3 pl-2">
<li className="flex gap-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Street food on plastic stools
                            </li>
<li className="flex gap-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Conversations shouted over motorbike engines
                            </li>
<li className="flex gap-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Quiet coffee moments in tiny cafés
                            </li>
<li className="flex gap-3 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Families sharing meals, jokes, and stories
                            </li>
</ul>
<p className="pt-4 border-l-2 border-dudu-200 pl-6 italic text-slate-500">
                            HappyDuduHouse captures these moments — softly, illustratively, honestly.
                        </p>
</div>
</div>
<div className="lg:w-1/2 relative">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-[3/4] overflow-hidden bg-orange-50 w-full rounded-2xl relative shadow-lg"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://images.unsplash.com/photo-1598544919456-fcb105fa7a6f?w=3840&amp;q=80"/>
<div className="flex text-orange-200 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
</div>
</div>
<div className="aspect-[4/3] rounded-2xl bg-purple-50 w-full overflow-hidden relative shadow-lg">
<div className="flex text-purple-200 absolute top-0 right-0 bottom-0 left-0 items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://images.unsplash.com/photo-1591866605101-67aa6d498cce?w=3840&amp;q=80"/>
</div>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[4/3] rounded-2xl bg-pink-50 w-full overflow-hidden relative shadow-lg">
<div className="flex text-pink-200 absolute top-0 right-0 bottom-0 left-0 items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://images.unsplash.com/photo-1565270576199-09d4c835bf60?w=3840&amp;q=80"/>
<svg className="lucide lucide-utensils w-12 h-12" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</div>
</div>
<div className="aspect-[3/4] rounded-2xl bg-blue-50 w-full overflow-hidden relative shadow-lg">
<div className="flex text-blue-200 absolute top-0 right-0 bottom-0 left-0 items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://images.unsplash.com/photo-1610611543655-512ca4148eda?w=3840&amp;q=80"/>
<svg className="lucide lucide-sun w-12 h-12" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-200 pt-24 pb-24">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<span className="text-sm font-medium tracking-wider text-slate-400 uppercase mb-2 block">Books</span>
<h2 className="text-4xl font-medium tracking-tight text-slate-800 mb-4">Stories That Come From Life</h2>
<p className="text-xl text-slate-500">Some moments become stories you can hold in your hands.</p>
</div>
<a className="text-lg font-medium text-dudu-600 hover:text-dudu-900 flex items-center gap-1 transition-colors" href="#">
                    View all books <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="aspect-[4/3] flex group-hover:bg-amber-100 transition-colors bg-amber-50 relative items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5210f05c-e3cd-459f-ae7e-48e410f698a4_3840w.jpg"/>
<svg className="lucide lucide-book w-[64px] h-[64px]" data-icon-replaced="true" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(253, 230, 138)', width: '64px', height: '64px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-slate-800 mb-2">Cây Tre Trăm Đốt</h3>
<p className="text-lg text-slate-500 mb-6 line-clamp-3">
                            A folktale passed down through generations about patience, honesty, and standing your ground.
                        </p>
<div className="flex items-center gap-4 text-sm font-medium">
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Bilingual</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Folklore</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="aspect-[4/3] flex group-hover:bg-rose-100 transition-colors bg-rose-50 relative items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbfdef11-4c74-4a52-a931-8f906b38a372_3840w.jpg"/>
<svg className="lucide lucide-heart-handshake w-16 h-16 text-rose-200" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-slate-800 mb-2">My First Tết</h3>
<p className="text-lg text-slate-500 mb-6 line-clamp-3">
                            Experiencing the Lunar New Year through the eyes of a child in modern Saigon.
                        </p>
<div className="flex items-center gap-4 text-sm font-medium">
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Bilingual</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Holiday</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group">
<div className="aspect-[4/3] flex group-hover:bg-emerald-100 transition-colors bg-emerald-50 relative items-center justify-center">
<img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2afc1b2e-10e1-473e-88d3-2240e9932ca0_3840w.jpg"/><svg className="lucide lucide-utensils-crossed w-16 h-16 text-emerald-200" data-lucide="utensils-crossed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"></path><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"></path><path d="m2.1 21.8 6.4-6.3"></path><path d="m19 5-7 7"></path></svg>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium tracking-tight text-slate-800 mb-2">Street Food Stories</h3>
<p className="text-lg text-slate-500 mb-6 line-clamp-3">
                            The history and heart behind Vietnam's most iconic dishes.
                        </p>
<div className="flex items-center gap-4 text-sm font-medium">
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Culture</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600">Food</span>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-lg italic text-slate-400 font-hand" style={{}}>You never need to buy a book to be part of this space. Reading along already matters.</p>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<h2 className="text-4xl font-medium text-slate-800 tracking-tight">Learn Vietnamese Through Life</h2>
<p className="text-xl text-slate-500">
                    Built from lived moments—things you hear on the street, at home, in daily conversations.
                </p>
</div>
<div className="space-y-4">

<div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-2xl border border-slate-100 hover:border-dudu-200 bg-slate-50/50 hover:bg-white transition-all hover:shadow-md">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
<svg className="lucide lucide-users-2 w-5 h-5" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-800">Vietnamese Names &amp; Family Language</h3>
<p className="text-lg text-slate-500 mt-1 max-w-xl">How names, nicknames, and family roles work in real life.</p>
</div>
</div>
<div className="mt-4 md:mt-0 pl-[4.5rem] md:pl-0">
<span className="inline-flex items-center text-lg font-medium text-slate-400 group-hover:text-dudu-600 transition-colors">
                            Explore <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-2xl border border-slate-100 hover:border-dudu-200 bg-slate-50/50 hover:bg-white transition-all hover:shadow-md">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
<svg className="lucide lucide-mic-2 w-5 h-5" data-lucide="mic-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-800">Street Vietnamese</h3>
<p className="text-lg text-slate-500 mt-1 max-w-xl">What people actually say in Saigon — and why.</p>
</div>
</div>
<div className="mt-4 md:mt-0 pl-[4.5rem] md:pl-0">
<span className="inline-flex items-center text-lg font-medium text-slate-400 group-hover:text-dudu-600 transition-colors">
                            Explore <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="group flex flex-col md:flex-row items-start md:items-center justify-between p-8 rounded-2xl border border-slate-100 hover:border-dudu-200 bg-slate-50/50 hover:bg-white transition-all hover:shadow-md">
<div className="flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 shrink-0">
<svg className="lucide lucide-feather w-5 h-5" data-lucide="feather" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"></path><path d="M16 8 2 22"></path><path d="M17.5 15H9"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-slate-800">Vietnam Through Stories</h3>
<p className="text-lg text-slate-500 mt-1 max-w-xl">Learn language and values through folktales and daily moments.</p>
</div>
</div>
<div className="mt-4 md:mt-0 pl-[4.5rem] md:pl-0">
<span className="inline-flex items-center text-lg font-medium text-slate-400 group-hover:text-dudu-600 transition-colors">
                            Explore <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dudu-900 text-dudu-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<svg className="lucide lucide-sparkles w-8 h-8 mx-auto mb-8 text-dudu-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Why HappyDuduHouse Exists</h2>
<div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mb-12">
<div className="flex gap-4">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-dudu-300 shrink-0"></div>
<p className="text-xl text-dudu-100">Vietnamese culture is lived, not explained</p>
</div>
<div className="flex gap-4">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-dudu-300 shrink-0"></div>
<p className="text-xl text-dudu-100">Language is emotional, not just functional</p>
</div>
<div className="flex gap-4">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-dudu-300 shrink-0"></div>
<p className="text-xl text-dudu-100">You don’t need to be fluent to belong</p>
</div>
<div className="flex gap-4">
<div className="mt-1 w-1.5 h-1.5 rounded-full bg-dudu-300 shrink-0"></div>
<p className="text-xl text-dudu-100">Culture should feel warm, not intimidating</p>
</div>
</div>
<p className="text-2xl font-medium text-white tracking-tight">
                HappyDuduHouse exists to make Vietnamese life feel closer — wherever you are.
            </p>
</div>
</section>

<section className="bg-dudu-50 pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
<div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white border-4 border-white shadow-xl overflow-hidden shrink-0">

<div className="flex text-slate-400 bg-slate-200 w-full h-full items-center justify-center">
</div>
</div>
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<span className="text-2xl">🌼</span>
<h2 className="text-3xl font-medium text-slate-800 tracking-tight">Hi, I’m Hiền</h2>
</div>
<div className="space-y-4 text-xl text-slate-600">
<p className="">
                        I grew up in Vietnam, surrounded by stories, street life, and everyday language. 
                        HappyDuduHouse is my way of sharing that world — gently, honestly, and with love.
                    </p>
<p className="font-medium text-slate-800">
                        I’m not here to teach “perfect Vietnamese.”
                        I’m here to share what life actually feels like.
                    </p>
</div>
</div>
</div>
</section>

<section className="text-center bg-white pt-24 pb-24">
<div className="max-w-xl mr-auto ml-auto pr-6 pl-6 space-y-8">
<h2 className="text-4xl font-medium tracking-tight text-slate-800">💛 Walk Along With Me</h2>
<p className="text-xl text-slate-500">
                If you enjoy Vietnamese culture, language, and daily life — you’re welcome here.
                Follow along for stories, illustrations, and small moments from Vietnam.
            </p>
<div className="inline-flex flex-col items-center">
<button className="shadow-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-lg font-medium text-white bg-slate-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl">
                    Join the Newsletter
                </button>
</div>
</div>
</section>

<footer className="bg-white border-slate-100 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row gap-6 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="text-slate-400 text-lg">
                HappyDuduHouse © 2026
            </div>
<nav className="flex gap-8 text-lg font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Books</a>
<a className="hover:text-slate-900 transition-colors" href="#">Courses</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="text-center mt-12">
<p className="text-2xl font-hand text-dudu-500">Life in Vietnam, shared gently.</p>
</div>
</footer>


    </>
  );
}
