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
      

<div bis_size='{"x":0,"y":0,"w":1530,"h":36,"abs_x":0,"abs_y":42}' className="bg-[#0f172a] text-white/80 text-[10px] sm:text-[11px] font-medium border-b border-white/10 relative z-50">
<div bis_size='{"x":65,"y":0,"w":1400,"h":36,"abs_x":65,"abs_y":42}' className="sm:px-6 lg:px-8 flex h-9 max-w-[1400px] mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div bis_size='{"x":97,"y":9,"w":145,"h":16,"abs_x":97,"abs_y":51}' className="flex items-center gap-4 sm:gap-6">
<span bis_size='{"x":97,"y":9,"w":145,"h":16,"abs_x":97,"abs_y":51}' className="opacity-70 font-montserrat font-medium" style={{}}>Ulaanbaatar, MN 14:02 PM</span>
</div>
<div bis_size='{"x":614,"y":9,"w":818,"h":16,"abs_x":614,"abs_y":51}' className="flex items-center gap-6">
<div bis_size='{"x":614,"y":9,"w":603,"h":16,"abs_x":614,"abs_y":51}' className="hidden lg:flex items-center gap-6 opacity-80">
<a bis_size='{"x":614,"y":9,"w":45,"h":16,"abs_x":614,"abs_y":51}' className="hover:text-white transition-colors font-montserrat font-medium" href="#" style={{}}>Каталог</a>
<a bis_size='{"x":684,"y":9,"w":72,"h":16,"abs_x":684,"abs_y":51}' className="hover:text-white transition-colors font-montserrat font-medium" href="#" style={{}}>Ажлын байр</a>
<a bis_size='{"x":781,"y":9,"w":95,"h":16,"abs_x":781,"abs_y":51}' className="hover:text-white transition-colors font-montserrat font-medium" href="#" style={{}}>Мэдээ мэдээлэл</a>
<a bis_size='{"x":900,"y":9,"w":99,"h":16,"abs_x":900,"abs_y":51}' className="hover:text-white transition-colors font-medium font-montserrat" href="#">Салбар байршил</a>
<a bis_size='{"x":1023,"y":9,"w":90,"h":16,"abs_x":1023,"abs_y":51}' className="hover:text-white transition-colors font-montserrat font-medium" href="#" style={{}}>Худалдан авалт</a>
<a bis_size='{"x":1138,"y":9,"w":80,"h":16,"abs_x":1138,"abs_y":51}' className="hover:text-white transition-colors font-medium font-montserrat" href="#">Холбоо барих</a>
</div>
<div bis_size='{"x":1242,"y":9,"w":190,"h":16,"abs_x":1242,"abs_y":51}' className="flex items-center gap-3 border-l border-white/20 pl-4 sm:pl-6">
<button bis_size='{"x":1267,"y":9,"w":32,"h":16,"abs_x":1267,"abs_y":51}' className="flex items-center gap-1 hover:text-white">
<span bis_size='{"x":1267,"y":9,"w":16,"h":16,"abs_x":1267,"abs_y":51}' className="font-montserrat font-medium" style={{}}>EN</span>
<svg bis_size='{"x":1287,"y":12,"w":12,"h":12,"abs_x":1287,"abs_y":54}' className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button bis_size='{"x":1319,"y":11,"w":14,"h":14,"abs_x":1319,"abs_y":53}' className="hover:text-white ml-2">
<svg bis_size='{"x":1319,"y":11,"w":14,"h":14,"abs_x":1319,"abs_y":53}' className="lucide lucide-search w-3.5 h-3.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<a bis_size='{"x":1353,"y":9,"w":45,"h":16,"abs_x":1353,"abs_y":51}' className="text-[#3b82f6] tracking-wide hover:text-blue-400 transition-colors ml-2 font-montserrat font-medium" href="#" style={{}}>E-SHOP</a>
<a bis_size='{"x":1419,"y":11,"w":14,"h":14,"abs_x":1419,"abs_y":53}' className="hover:text-white ml-2" href="#"><svg bis_size='{"x":1419,"y":11,"w":14,"h":14,"abs_x":1419,"abs_y":53}' className="lucide lucide-linkedin w-3.5 h-3.5 w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="logos" data-logos="linkedin-icon" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 256 256" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg></a>
</div>
</div>
</div>
</div>

<nav bis_size='{"x":0,"y":36,"w":1530,"h":80,"abs_x":0,"abs_y":78}' className="absolute top-9 left-0 right-0 z-40 border-b border-white/10 bg-white/5 backdrop-blur-sm">
<div bis_size='{"x":65,"y":36,"w":1400,"h":80,"abs_x":65,"abs_y":78}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":97,"y":36,"w":1336,"h":80,"abs_x":97,"abs_y":78}' className="flex h-20 items-center justify-between">

<a bis_size='{"x":97,"y":76,"w":0,"h":0,"abs_x":97,"abs_y":118}' className="flex items-center gap-2 group" href="#">
<div bis_size='{"x":97,"y":56,"w":40,"h":40,"abs_x":97,"abs_y":98}' className="flex z-50 w-10 h-10 border-0 rounded-none absolute backdrop-blur-none items-center justify-center"><img alt="Container background" bis_size='{"x":97,"y":56,"w":40,"h":40,"abs_x":97,"abs_y":98}' className="w-15 h-full max-w-6xl max-h-24 object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/624a056a-acf7-42da-bf33-c7028c238ad2_3840w.png"/>
</div>
<div bis_size='{"x":97,"y":76,"w":0,"h":0,"abs_x":97,"abs_y":118}' className="flex flex-col text-white">
</div>
</a>

<div bis_size='{"x":644,"y":66,"w":788,"h":19,"abs_x":644,"abs_y":108}' className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-white tracking-wide">
<a bis_size='{"x":644,"y":66,"w":114,"h":19,"abs_x":644,"abs_y":108}' className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium font-montserrat max-w-lg" href="#">
                        Бидний тухай <svg bis_size='{"x":747,"y":70,"w":12,"h":12,"abs_x":747,"abs_y":112}' className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a bis_size='{"x":791,"y":66,"w":67,"h":19,"abs_x":791,"abs_y":108}' className="flex items-center gap-1 hover:text-blue-400 transition-colors font-medium font-montserrat" href="#">
                        Бизнес <svg bis_size='{"x":847,"y":70,"w":12,"h":12,"abs_x":847,"abs_y":112}' className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a bis_size='{"x":891,"y":66,"w":61,"h":19,"abs_x":891,"abs_y":108}' className="flex items-center gap-1 hover:text-blue-400 transition-colors font-montserrat font-medium" href="#" style={{}}>
                        Брэнд <svg bis_size='{"x":940,"y":70,"w":12,"h":12,"abs_x":940,"abs_y":112}' className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a bis_size='{"x":984,"y":66,"w":101,"h":19,"abs_x":984,"abs_y":108}' className="flex items-center gap-1 hover:text-blue-400 transition-colors font-montserrat font-medium" href="#" style={{}}>
                        Нийлүүлэгч <svg bis_size='{"x":1073,"y":70,"w":12,"h":12,"abs_x":1073,"abs_y":112}' className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a bis_size='{"x":1117,"y":66,"w":176,"h":19,"abs_x":1117,"abs_y":108}' className="flex items-center gap-1 hover:text-blue-400 transition-colors font-montserrat font-medium" href="#" style={{}}>
                        Нийгмийн хариуцлага <svg bis_size='{"x":1282,"y":70,"w":12,"h":12,"abs_x":1282,"abs_y":112}' className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a bis_size='{"x":1326,"y":66,"w":106,"h":19,"abs_x":1326,"abs_y":108}' className="flex items-center gap-1 hover:text-blue-400 transition-colors font-montserrat font-medium" href="#" style={{}}>
                        Танилцуулга <svg bis_size='{"x":1421,"y":70,"w":12,"h":12,"abs_x":1421,"abs_y":112}' className="lucide lucide-chevron-down w-3 h-3 opacity-60" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":42}' className="lg:hidden text-white">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":42}' className="lucide lucide-menu w-6 h-6 cursor-pointer" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":36,"w":1530,"h":680,"abs_x":0,"abs_y":78}' className="relative min-h-[680px] lg:h-screen flex items-center overflow-hidden bg-[#0f172a]">

<div bis_size='{"x":0,"y":36,"w":1530,"h":680,"abs_x":0,"abs_y":78}' className="absolute inset-0 z-0">
<img alt="City Aerial" bis_size='{"x":0,"y":36,"w":1530,"h":680,"abs_x":0,"abs_y":78}' className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":0,"y":36,"w":1530,"h":680,"abs_x":0,"abs_y":78}' className="hero-overlay absolute top-0 right-0 bottom-0 left-0"><img alt="Container background" bis_size='{"x":0,"y":36,"w":1530,"h":680,"abs_x":0,"abs_y":78}' className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cf91c25-abaf-44db-9433-df212eb813f6_3840w.png"/></div>
</div>
<div bis_size='{"x":65,"y":254,"w":1400,"h":324,"abs_x":65,"abs_y":296}' className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
<div bis_size='{"x":97,"y":254,"w":1336,"h":324,"abs_x":97,"abs_y":296}' className="flex flex-col lg:flex-row lg:gap-8 gap-x-12 gap-y-12 items-end justify-between">

<div bis_size='{"x":97,"y":254,"w":693,"h":324,"abs_x":97,"abs_y":296}' className="max-w-3xl space-y-8">
<h1 bis_size='{"x":97,"y":254,"w":693,"h":120,"abs_x":97,"abs_y":296}' className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-white tracking-tight font-montserrat font-bold" style={{}}>
                        Монголын Бизнесийн<br bis_size='{"x":790,"y":247,"w":0,"h":73,"abs_x":790,"abs_y":289}'/>
<span bis_size='{"x":97,"y":307,"w":301,"h":73,"abs_x":97,"abs_y":349}' className="font-bold text-[#2d68c4] font-montserrat">Ирээдүйг</span> Тэргүүлнэ
                    </h1>
<p bis_size='{"x":97,"y":406,"w":576,"h":84,"abs_x":97,"abs_y":448}' className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed font-montserrat font-medium" style={{}}>
                        Монголын томоохон салбаруудыг холбосон нэгдсэн экосистем. 
                        Инноваци, найдвартай үйлчилгээ, тогтвортой өсөлтөд чиглэсэн 
                        манлайлагч байгууллага.
                    </p>
<div bis_size='{"x":97,"y":522,"w":693,"h":56,"abs_x":97,"abs_y":564}' className="flex flex-wrap items-center gap-3 pt-2">
<button bis_size='{"x":97,"y":530,"w":197,"h":48,"abs_x":97,"abs_y":572}' className="hover:bg-blue-600 transition-all shadow-blue-900/30 flex gap-2 text-sm font-medium text-white font-montserrat bg-[#2d68c4] rounded-md px-8 py-3.5 shadow-lg gap-x-2 gap-y-2 items-center">
                            Our Leadership
                            <svg bis_size='{"x":246,"y":546,"w":16,"h":16,"abs_x":246,"abs_y":588}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button bis_size='{"x":306,"y":532,"w":44,"h":44,"abs_x":306,"abs_y":574}' className="w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 rounded-md text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
<svg bis_size='{"x":320,"y":546,"w":16,"h":16,"abs_x":320,"abs_y":588}' className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button bis_size='{"x":362,"y":532,"w":44,"h":44,"abs_x":362,"abs_y":574}' className="flex hover:bg-blue-600 transition-colors text-white bg-[#2d68c4] w-11 h-11 border-blue-500 border rounded-md shadow-lg items-center justify-center">
<svg bis_size='{"x":376,"y":546,"w":16,"h":16,"abs_x":376,"abs_y":588}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div bis_size='{"x":1053,"y":360,"w":380,"h":178,"abs_x":1053,"abs_y":402}' className="w-full max-w-[380px] bg-white rounded-lg p-7 shadow-2xl animate-fade-in lg:mb-10 relative group">
<div bis_size='{"x":1081,"y":388,"w":324,"h":65,"abs_x":1081,"abs_y":430}' className="flex items-start gap-4 mb-5">
<div bis_size='{"x":1081,"y":388,"w":40,"h":40,"abs_x":1081,"abs_y":430}' className="w-10 h-10 rounded bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0" style={{}}>
<svg bis_size='{"x":1091,"y":398,"w":20,"h":20,"abs_x":1091,"abs_y":440}' className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div bis_size='{"x":1137,"y":388,"w":268,"h":65,"abs_x":1137,"abs_y":430}' className="">
<h3 bis_size='{"x":1137,"y":388,"w":268,"h":22,"abs_x":1137,"abs_y":430}' className="text-lg text-slate-900 leading-tight mb-1 font-montserrat font-medium" style={{}}>
                                Нээлттэй Тендерүүд
                            </h3>
<p bis_size='{"x":1137,"y":415,"w":268,"h":39,"abs_x":1137,"abs_y":457}' className="text-xs text-slate-500 leading-relaxed font-montserrat font-medium" style={{}}>
                                Найдвартай түншлэлд суурилсан ил тод худалдан авалтын процесс.
                            </p>
</div>
</div>
<div bis_size='{"x":1081,"y":478,"w":324,"h":32,"abs_x":1081,"abs_y":520}' className="border-t border-slate-100 pt-4 flex justify-between items-center mt-6" style={{}}>
<span bis_size='{"x":1081,"y":495,"w":95,"h":15,"abs_x":1081,"abs_y":537}' className="text-[10px] text-slate-400 uppercase tracking-widest font-montserrat font-medium" style={{}}>LATEST REPORT</span>
<div bis_size='{"x":1365,"y":494,"w":40,"h":16,"abs_x":1365,"abs_y":536}' className="flex gap-2 text-slate-400" style={{}}>
<button bis_size='{"x":1365,"y":494,"w":16,"h":16,"abs_x":1365,"abs_y":536}' className="hover:text-blue-600" style={{}}><svg bis_size='{"x":1365,"y":494,"w":16,"h":16,"abs_x":1365,"abs_y":536}' className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button bis_size='{"x":1389,"y":494,"w":16,"h":16,"abs_x":1389,"abs_y":536}' className="hover:text-blue-600" style={{}}><svg bis_size='{"x":1389,"y":494,"w":16,"h":16,"abs_x":1389,"abs_y":536}' className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
</div>
</div>
</div>
</section>

<div bis_size='{"x":0,"y":716,"w":1530,"h":61,"abs_x":0,"abs_y":758}' className="border-b border-slate-200 bg-white sticky top-0 z-30 shadow-sm hidden md:block" style={{}}>
<div bis_size='{"x":65,"y":716,"w":1400,"h":61,"abs_x":65,"abs_y":758}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":97,"y":716,"w":1336,"h":61,"abs_x":97,"abs_y":758}' className="flex justify-center gap-8 lg:gap-12 text-[13px] font-semibold text-slate-500 py-5 overflow-x-auto whitespace-nowrap" style={{}}>
<a bis_size='{"x":291,"y":736,"w":137,"h":41,"abs_x":291,"abs_y":778}' className="text-blue-600 border-b-2 border-blue-600 pb-5 -mb-5 px-1 font-montserrat font-medium" href="#" style={{}}>Дижитал шилжилт</a>
<a bis_size='{"x":476,"y":736,"w":165,"h":21,"abs_x":476,"abs_y":778}' className="hover:text-slate-900 transition-colors px-1 font-montserrat font-medium" href="#" style={{}}>Инноваци &amp; Технологи</a>
<a bis_size='{"x":690,"y":736,"w":163,"h":21,"abs_x":690,"abs_y":778}' className="hover:text-slate-900 transition-colors px-1 font-montserrat font-medium" href="#" style={{}}>Ирээдүйн мэргэжлүүд</a>
<a bis_size='{"x":901,"y":736,"w":138,"h":21,"abs_x":901,"abs_y":778}' className="hover:text-slate-900 transition-colors px-1 font-montserrat font-medium" href="#" style={{}}>Тогтвортой хөгжил</a>
<a bis_size='{"x":1088,"y":736,"w":151,"h":21,"abs_x":1088,"abs_y":778}' className="hover:text-slate-900 transition-colors px-1 font-montserrat font-medium" href="#" style={{}}>Компанийн засаглал</a>
</div>
</div>
</div>

<section bis_size='{"x":0,"y":778,"w":1530,"h":745,"abs_x":0,"abs_y":820}' className="py-20 lg:py-24 bg-white">
<div bis_size='{"x":65,"y":874,"w":1400,"h":553,"abs_x":65,"abs_y":916}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":97,"y":874,"w":1336,"h":80,"abs_x":97,"abs_y":916}' className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 bis_size='{"x":97,"y":874,"w":672,"h":80,"abs_x":97,"abs_y":916}' className="text-3xl lg:text-4xl text-slate-900 tracking-tight max-w-2xl font-montserrat font-bold" style={{}}>
                    Илүү хурдтай, ухаалаг, хүрч очихуйц үйлчилгээ
                </h2>
<a bis_size='{"x":1317,"y":930,"w":115,"h":20,"abs_x":1317,"abs_y":972}' className="text-blue-600 text-sm flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap mb-1 font-montserrat font-medium" href="#" style={{}}>
                    View all news <svg bis_size='{"x":1417,"y":932,"w":16,"h":16,"abs_x":1417,"abs_y":974}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div bis_size='{"x":97,"y":1002,"w":1336,"h":425,"abs_x":97,"abs_y":1044}' className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article bis_size='{"x":97,"y":1002,"w":424,"h":425,"abs_x":97,"abs_y":1044}' className="group cursor-pointer">
<div bis_size='{"x":97,"y":1002,"w":424,"h":240,"abs_x":97,"abs_y":1044}' className="relative h-60 overflow-hidden rounded-lg mb-5 bg-slate-100" style={{}}>
<img alt="Social Responsibility" bis_size='{"x":97,"y":1002,"w":424,"h":240,"abs_x":97,"abs_y":1044}' className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b08bda8f-0e56-4fba-a6ba-474a2ea051c4_1600w.jpg"/>
<div bis_size='{"x":113,"y":1018,"w":155,"h":23,"abs_x":113,"abs_y":1060}' className="absolute top-4 left-4 bg-white/95 backdrop-blur px-2.5 py-1 rounded text-[9px] text-slate-700 uppercase tracking-wider shadow-sm border border-slate-100 font-montserrat font-medium" style={{}}>
                            НИЙГМИЙН ХАРИУЦЛАГА
                        </div>
</div>
<div bis_size='{"x":97,"y":1262,"w":424,"h":165,"abs_x":97,"abs_y":1304}' className="space-y-3">
<div bis_size='{"x":97,"y":1262,"w":424,"h":16,"abs_x":97,"abs_y":1304}' className="text-[11px] text-slate-400 font-montserrat font-medium" style={{}}>2025-09-03</div>
<h3 bis_size='{"x":97,"y":1291,"w":424,"h":49,"abs_x":97,"abs_y":1333}' className="text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors font-montserrat font-medium" style={{}}>
                            Батсүмбэр суманд бага сургууль барих санаачилга
                        </h3>
<p bis_size='{"x":97,"y":1352,"w":424,"h":45,"abs_x":97,"abs_y":1394}' className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-montserrat font-medium" style={{}}>
                            Төв аймгийн Батсүмбэр сумын хүүхдүүдийг гэрт нь ойр, чанартай боловсролоор хангах шинэ бага сургууль барих төслийг дэмжин.
                        </p>
<span bis_size='{"x":97,"y":1410,"w":82,"h":16,"abs_x":97,"abs_y":1452}' className="inline-flex items-center gap-1 text-xs text-blue-600 mt-2 font-montserrat font-medium" style={{}}>
                            Read more <svg bis_size='{"x":168,"y":1412,"w":12,"h":12,"abs_x":168,"abs_y":1454}' className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</article>

<article bis_size='{"x":553,"y":1002,"w":424,"h":425,"abs_x":553,"abs_y":1044}' className="group cursor-pointer">
<div bis_size='{"x":553,"y":1002,"w":424,"h":240,"abs_x":553,"abs_y":1044}' className="relative h-60 overflow-hidden rounded-lg mb-5 bg-slate-100" style={{}}>
<img alt="Scholarship" bis_size='{"x":553,"y":1002,"w":424,"h":240,"abs_x":553,"abs_y":1044}' className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0507526-3bf1-4384-b332-2a3a74a56e17_1600w.jpg"/>
<div bis_size='{"x":569,"y":1018,"w":134,"h":21,"abs_x":569,"abs_y":1060}' className="absolute top-4 left-4 bg-[#2563EB] px-2.5 py-1 rounded text-[9px] text-white uppercase tracking-wider shadow-sm font-montserrat font-medium" style={{}}>
                            ХАМТЫН АЖИЛЛАГАА
                        </div>
</div>
<div bis_size='{"x":553,"y":1262,"w":424,"h":165,"abs_x":553,"abs_y":1304}' className="space-y-3">
<div bis_size='{"x":553,"y":1262,"w":424,"h":16,"abs_x":553,"abs_y":1304}' className="text-[11px] text-slate-400 font-montserrat font-medium" style={{}}>2025-10-11</div>
<h3 bis_size='{"x":553,"y":1291,"w":424,"h":49,"abs_x":553,"abs_y":1333}' className="text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors font-montserrat font-medium" style={{}}>
                            Ирээдүйн мэргэжилтнүүдийг дэмжих “NOMIN Scholarship”
                        </h3>
<p bis_size='{"x":553,"y":1352,"w":424,"h":45,"abs_x":553,"abs_y":1394}' className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-montserrat font-medium" style={{}}>
                            Худалдаа, бизнес, санхүү, IT, инженерчлэлийн шилдэг оюутнуудад тэтгэлэг олгож, чанартай боловсролыг дэмжих.
                        </p>
<span bis_size='{"x":553,"y":1410,"w":82,"h":16,"abs_x":553,"abs_y":1452}' className="inline-flex items-center gap-1 text-xs text-blue-600 mt-2 font-montserrat font-medium" style={{}}>
                            Read more <svg bis_size='{"x":624,"y":1412,"w":12,"h":12,"abs_x":624,"abs_y":1454}' className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</article>

<article bis_size='{"x":1009,"y":1002,"w":424,"h":425,"abs_x":1009,"abs_y":1044}' className="group cursor-pointer">
<div bis_size='{"x":1009,"y":1002,"w":424,"h":240,"abs_x":1009,"abs_y":1044}' className="relative h-60 overflow-hidden rounded-lg mb-5 bg-slate-100" style={{}}>
<img alt="Technology" bis_size='{"x":1009,"y":1002,"w":424,"h":240,"abs_x":1009,"abs_y":1044}' className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e204a194-16d8-41b1-b6a7-2fd977cad7c0_1600w.png"/>
<div bis_size='{"x":1025,"y":1018,"w":85,"h":23,"abs_x":1025,"abs_y":1060}' className="absolute top-4 left-4 bg-white/95 backdrop-blur px-2.5 py-1 rounded text-[9px] text-slate-700 uppercase tracking-wider shadow-sm border border-slate-100 font-montserrat font-medium" style={{}}>
                            ТЕХНОЛОГИ
                        </div>
</div>
<div bis_size='{"x":1009,"y":1262,"w":424,"h":165,"abs_x":1009,"abs_y":1304}' className="space-y-3">
<div bis_size='{"x":1009,"y":1262,"w":424,"h":16,"abs_x":1009,"abs_y":1304}' className="text-[11px] text-slate-400 font-montserrat font-medium" style={{}}>2025-11-20</div>
<h3 bis_size='{"x":1009,"y":1291,"w":424,"h":49,"abs_x":1009,"abs_y":1333}' className="text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors font-montserrat font-medium" style={{}}>
                            Онлайн худалдааг шинэ түвшинд гаргасан Nomin.mn
                        </h3>
<p bis_size='{"x":1009,"y":1352,"w":424,"h":45,"abs_x":1009,"abs_y":1394}' className="text-sm text-slate-500 leading-relaxed line-clamp-2 font-montserrat font-medium" style={{}}>
                            MAGENTO 2.4 платформ дээр суурилсан Nomin-ийн цахим худалдааны систем нь нэгэн зэрэг олон мянган хэрэглэгчийн.
                        </p>
<span bis_size='{"x":1009,"y":1410,"w":82,"h":16,"abs_x":1009,"abs_y":1452}' className="inline-flex items-center gap-1 text-xs text-blue-600 mt-2 font-montserrat font-medium" style={{}}>
                            Read more <svg bis_size='{"x":1080,"y":1412,"w":12,"h":12,"abs_x":1080,"abs_y":1454}' className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</article>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1524,"w":1530,"h":562,"abs_x":0,"abs_y":1566}' className="text-white bg-[#2d68c4] py-24">
<div bis_size='{"x":65,"y":1620,"w":1400,"h":370,"abs_x":65,"abs_y":1662}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":97,"y":1620,"w":1336,"h":114,"abs_x":97,"abs_y":1662}' className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
<div bis_size='{"x":97,"y":1620,"w":672,"h":114,"abs_x":97,"abs_y":1662}' className="max-w-2xl">
<h2 bis_size='{"x":97,"y":1620,"w":672,"h":40,"abs_x":97,"abs_y":1662}' className="text-3xl lg:text-4xl mb-4 tracking-tight font-montserrat font-bold" style={{}}>Comprehensive Human Needs</h2>
<p bis_size='{"x":97,"y":1676,"w":672,"h":58,"abs_x":97,"abs_y":1718}' className="text-blue-100 text-lg leading-relaxed font-montserrat font-medium" style={{}}>
                        We strive to make daily life safer, more convenient, and more accessible for every family.
                    </p>
</div>
<div bis_size='{"x":1345,"y":1695,"w":88,"h":40,"abs_x":1345,"abs_y":1737}' className="flex gap-2">
<button bis_size='{"x":1345,"y":1695,"w":40,"h":40,"abs_x":1345,"abs_y":1737}' className="w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white/10 rounded transition-colors">
<svg bis_size='{"x":1357,"y":1707,"w":16,"h":16,"abs_x":1357,"abs_y":1749}' className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button bis_size='{"x":1393,"y":1695,"w":40,"h":40,"abs_x":1393,"abs_y":1737}' className="w-10 h-10 flex items-center justify-center bg-white text-blue-600 hover:bg-blue-50 rounded transition-colors" style={{}}>
<svg bis_size='{"x":1405,"y":1707,"w":16,"h":16,"abs_x":1405,"abs_y":1749}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div bis_size='{"x":97,"y":1799,"w":1336,"h":192,"abs_x":97,"abs_y":1841}' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div bis_size='{"x":97,"y":1799,"w":316,"h":192,"abs_x":97,"abs_y":1841}' className="bg-white text-slate-900 p-8 rounded-lg shadow-lg flex flex-col justify-between h-48 group hover:-translate-y-1 transition-transform duration-300" style={{}}>
<div bis_size='{"x":129,"y":1831,"w":40,"h":40,"abs_x":129,"abs_y":1873}' className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 mb-4" style={{}}>
<svg bis_size='{"x":139,"y":1841,"w":20,"h":20,"abs_x":139,"abs_y":1883}' className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div bis_size='{"x":129,"y":1900,"w":252,"h":59,"abs_x":129,"abs_y":1942}'>
<div bis_size='{"x":129,"y":1900,"w":252,"h":40,"abs_x":129,"abs_y":1942}' className="text-4xl tracking-tight mb-1 font-montserrat font-bold" style={{}}>34</div>
<div bis_size='{"x":129,"y":1944,"w":252,"h":15,"abs_x":129,"abs_y":1986}' className="text-[10px] uppercase text-slate-400 tracking-wider font-montserrat font-medium" style={{}}>Years of History</div>
</div>
</div>

<div bis_size='{"x":437,"y":1799,"w":316,"h":192,"abs_x":437,"abs_y":1841}' className="bg-white text-slate-900 p-8 rounded-lg shadow-lg flex flex-col justify-between h-48 group hover:-translate-y-1 transition-transform duration-300" style={{}}>
<div bis_size='{"x":469,"y":1831,"w":40,"h":40,"abs_x":469,"abs_y":1873}' className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 mb-4" style={{}}>
<svg bis_size='{"x":479,"y":1841,"w":20,"h":20,"abs_x":479,"abs_y":1883}' className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div bis_size='{"x":469,"y":1900,"w":252,"h":59,"abs_x":469,"abs_y":1942}'>
<div bis_size='{"x":469,"y":1900,"w":252,"h":40,"abs_x":469,"abs_y":1942}' className="text-4xl tracking-tight mb-1 font-montserrat font-bold" style={{}}>+6,200</div>
<div bis_size='{"x":469,"y":1944,"w":252,"h":15,"abs_x":469,"abs_y":1986}' className="text-[10px] uppercase text-slate-400 tracking-wider font-montserrat font-medium" style={{}}>Total Employees</div>
</div>
</div>

<div bis_size='{"x":777,"y":1799,"w":316,"h":192,"abs_x":777,"abs_y":1841}' className="bg-white text-slate-900 p-8 rounded-lg shadow-lg flex flex-col justify-between h-48 group hover:-translate-y-1 transition-transform duration-300" style={{}}>
<div bis_size='{"x":809,"y":1831,"w":40,"h":40,"abs_x":809,"abs_y":1873}' className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 mb-4" style={{}}>
<svg bis_size='{"x":819,"y":1841,"w":20,"h":20,"abs_x":819,"abs_y":1883}' className="lucide lucide-package w-5 h-5" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div bis_size='{"x":809,"y":1900,"w":252,"h":59,"abs_x":809,"abs_y":1942}' className="">
<div bis_size='{"x":809,"y":1900,"w":252,"h":40,"abs_x":809,"abs_y":1942}' className="text-4xl tracking-tight mb-1 font-montserrat font-bold" style={{}}>+260</div>
<div bis_size='{"x":809,"y":1944,"w":252,"h":15,"abs_x":809,"abs_y":1986}' className="text-[10px] uppercase text-slate-400 tracking-wider font-montserrat font-medium" style={{}}>Import Brands</div>
</div>
</div>

<div bis_size='{"x":1117,"y":1799,"w":316,"h":192,"abs_x":1117,"abs_y":1841}' className="bg-white text-slate-900 p-8 rounded-lg shadow-lg flex flex-col justify-between h-48 group hover:-translate-y-1 transition-transform duration-300" style={{}}>
<div bis_size='{"x":1149,"y":1831,"w":40,"h":40,"abs_x":1149,"abs_y":1873}' className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center text-blue-600 mb-4" style={{}}>
<svg bis_size='{"x":1159,"y":1841,"w":20,"h":20,"abs_x":1159,"abs_y":1883}' className="lucide lucide-pie-chart w-5 h-5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div bis_size='{"x":1149,"y":1900,"w":252,"h":59,"abs_x":1149,"abs_y":1942}' className="">
<div bis_size='{"x":1149,"y":1900,"w":252,"h":40,"abs_x":1149,"abs_y":1942}' className="text-4xl tracking-tight mb-1 font-montserrat font-bold" style={{}}>4.5%</div>
<div bis_size='{"x":1149,"y":1944,"w":252,"h":15,"abs_x":1149,"abs_y":1986}' className="text-[10px] uppercase text-slate-400 tracking-wider font-montserrat font-medium" style={{}}>Market Share</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2087,"w":1530,"h":361,"abs_x":0,"abs_y":2129}' className="bg-slate-50/50 pt-24 pb-24" style={{}}>
<div bis_size='{"x":65,"y":2183,"w":1400,"h":169,"abs_x":65,"abs_y":2225}' className="sm:px-6 lg:px-8 text-center max-w-[1400px] mr-auto ml-auto pr-4 pl-4">
<h2 bis_size='{"x":97,"y":2183,"w":1336,"h":36,"abs_x":97,"abs_y":2225}' className="text-3xl text-slate-900 mb-3 font-montserrat font-bold" style={{}}>Investor Relations &amp; Network</h2>
<p bis_size='{"x":429,"y":2231,"w":672,"h":56,"abs_x":429,"abs_y":2273}' className="text-lg text-slate-500 max-w-2xl mr-auto mb-16 ml-auto font-montserrat font-medium" style={{}}>
                Our group operates sustainably across all sectors of the Mongolian business landscape, creating value for stakeholders.
            </p>
<div bis_size='{"x":97,"y":2351,"w":1336,"h":1,"abs_x":97,"abs_y":2393}' className="bg-center max-w-none max-h-80 mr-auto ml-auto relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>

<img alt="Mongolia Map" bis_size='{"x":97,"y":2351,"w":4,"h":1,"abs_x":97,"abs_y":2393}' className="contrast-125 opacity-100 w-1 h-110000 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4d0fe1c-7382-4763-a6af-82f8a40f5325_320w.png"/>

<div bis_size='{"x":717,"y":2319,"w":0,"h":0,"abs_x":717,"abs_y":2361}' className="-translate-x-12 -translate-y-8 flex flex-col absolute top-1/2 left-1/2 items-center">
</div>
<div bis_size='{"x":431,"y":2351,"w":0,"h":0,"abs_x":431,"abs_y":2393}' className="absolute top-1/3 left-1/4 flex flex-col items-center">
</div>
<div bis_size='{"x":1099,"y":2352,"w":0,"h":0,"abs_x":1099,"abs_y":2394}' className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
</div>
<div bis_size='{"x":542,"y":2351,"w":0,"h":0,"abs_x":542,"abs_y":2393}' className="absolute top-1/2 left-1/3 flex flex-col items-center">
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2448,"w":1530,"h":606,"abs_x":0,"abs_y":2490}' className="bg-white border-slate-100 border-t pt-24 pb-24" style={{}}>
<div bis_size='{"x":65,"y":2545,"w":1400,"h":413,"abs_x":65,"abs_y":2587}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":97,"y":2545,"w":1336,"h":413,"abs_x":97,"abs_y":2587}' className="grid lg:grid-cols-2 gap-16 lg:gap-24 gap-x-16 gap-y-16">

<div bis_size='{"x":97,"y":2545,"w":620,"h":413,"abs_x":97,"abs_y":2587}' className="flex flex-col space-y-8 justify-center">
<h2 bis_size='{"x":97,"y":2545,"w":620,"h":36,"abs_x":97,"abs_y":2587}' className="text-3xl text-slate-900 tracking-tight font-montserrat font-bold" style={{}}>
                        Why Choose <span bis_size='{"x":295,"y":2545,"w":236,"h":36,"abs_x":295,"abs_y":2587}' className="font-bold text-[#2d68c4] font-montserrat">NOMIN Holding</span>?
                    </h2>
<p bis_size='{"x":97,"y":2613,"w":620,"h":58,"abs_x":97,"abs_y":2655}' className="text-slate-500 text-lg leading-relaxed font-montserrat font-medium" style={{}}>
                        We provide transparent financial reporting and sustainable growth metrics. For all stakeholders who value stability and innovation.
                    </p>
<button bis_size='{"x":97,"y":2703,"w":172,"h":44,"abs_x":97,"abs_y":2745}' className="uppercase self-start hover:bg-blue-700 transition-colors shadow-blue-500/20 text-xs font-medium text-white tracking-wider font-montserrat bg-[#2d68c4] rounded px-6 py-3.5 shadow-lg">
                        Investor Portal
                    </button>
<div bis_size='{"x":97,"y":2779,"w":620,"h":179,"abs_x":97,"abs_y":2821}' className="pt-4 space-y-4">
<a bis_size='{"x":97,"y":2795,"w":620,"h":73,"abs_x":97,"abs_y":2837}' className="group flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100" href="#" style={{}}>
<div bis_size='{"x":114,"y":2812,"w":259,"h":40,"abs_x":114,"abs_y":2854}' className="flex items-center gap-4">
<div bis_size='{"x":114,"y":2812,"w":40,"h":40,"abs_x":114,"abs_y":2854}' className="w-10 h-10 rounded bg-blue-100 text-blue-600 flex items-center justify-center" style={{}}>
<svg bis_size='{"x":124,"y":2822,"w":20,"h":20,"abs_x":124,"abs_y":2864}' className="lucide lucide-file-bar-chart-2 w-5 h-5" data-lucide="file-bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M8 18v-1"></path><path d="M12 18v-6"></path><path d="M16 18v-3"></path></svg>
</div>
<span bis_size='{"x":170,"y":2820,"w":203,"h":24,"abs_x":170,"abs_y":2862}' className="text-slate-700 font-montserrat font-medium" style={{}}>Presentations &amp; Bulletins</span>
</div>
<svg bis_size='{"x":684,"y":2824,"w":16,"h":16,"abs_x":684,"abs_y":2866}' className="lucide lucide-arrow-right w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a bis_size='{"x":97,"y":2885,"w":620,"h":73,"abs_x":97,"abs_y":2927}' className="group flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100" href="#" style={{}}>
<div bis_size='{"x":114,"y":2902,"w":230,"h":40,"abs_x":114,"abs_y":2944}' className="flex items-center gap-4">
<div bis_size='{"x":114,"y":2902,"w":40,"h":40,"abs_x":114,"abs_y":2944}' className="w-10 h-10 rounded bg-blue-100 text-blue-600 flex items-center justify-center" style={{}}>
<svg bis_size='{"x":124,"y":2912,"w":20,"h":20,"abs_x":124,"abs_y":2954}' className="lucide lucide-pie-chart w-5 h-5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<span bis_size='{"x":170,"y":2910,"w":174,"h":24,"abs_x":170,"abs_y":2952}' className="text-slate-700 font-montserrat font-medium" style={{}}>Financial Information</span>
</div>
<svg bis_size='{"x":684,"y":2914,"w":16,"h":16,"abs_x":684,"abs_y":2956}' className="lucide lucide-arrow-right w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div bis_size='{"x":813,"y":2545,"w":620,"h":413,"abs_x":813,"abs_y":2587}' className="bg-[#0f172a] rounded-xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col h-full">

<div bis_size='{"x":1305,"y":2417,"w":256,"h":256,"abs_x":1305,"abs_y":2459}' className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" style={{}}></div>
<h3 bis_size='{"x":853,"y":2585,"w":540,"h":28,"abs_x":853,"abs_y":2627}' className="text-xl mb-8 relative z-10 font-montserrat font-medium" style={{}}>Latest Announcements</h3>
<div bis_size='{"x":861,"y":2645,"w":532,"h":205,"abs_x":861,"abs_y":2687}' className="space-y-8 relative z-10 flex-1 border-l-2 border-white/10 pl-8 ml-2">
<div bis_size='{"x":894,"y":2645,"w":498,"h":67,"abs_x":894,"abs_y":2687}' className="relative group cursor-pointer">
<div bis_size='{"x":855,"y":2651,"w":12,"h":12,"abs_x":855,"abs_y":2693}' className="absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-blue-500 border-4 border-[#0f172a]" style={{}}></div>
<span bis_size='{"x":894,"y":2645,"w":498,"h":15,"abs_x":894,"abs_y":2687}' className="text-[10px] text-blue-400 block mb-1 font-montserrat font-medium" style={{}}>14.11.2025</span>
<h4 bis_size='{"x":894,"y":2664,"w":498,"h":24,"abs_x":894,"abs_y":2706}' className="text-slate-200 group-hover:text-white transition-colors font-montserrat font-medium" style={{}}>2025 November Investor Presentation</h4>
<a bis_size='{"x":894,"y":2696,"w":498,"h":16,"abs_x":894,"abs_y":2738}' className="text-xs text-slate-500 mt-2 flex items-center gap-1 group-hover:text-blue-400 font-montserrat font-medium" href="#" style={{}}>Read more <svg bis_size='{"x":965,"y":2698,"w":12,"h":12,"abs_x":965,"abs_y":2740}' className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div bis_size='{"x":894,"y":2744,"w":498,"h":67,"abs_x":894,"abs_y":2786}' className="relative group cursor-pointer">
<div bis_size='{"x":855,"y":2750,"w":12,"h":12,"abs_x":855,"abs_y":2792}' className="absolute -left-[39px] top-1.5 w-3 h-3 rounded-full bg-slate-600 border-4 border-[#0f172a]" style={{}}></div>
<span bis_size='{"x":894,"y":2744,"w":498,"h":15,"abs_x":894,"abs_y":2786}' className="text-[10px] text-slate-500 block mb-1 font-montserrat font-medium" style={{}}>02.11.2025</span>
<h4 bis_size='{"x":894,"y":2763,"w":498,"h":24,"abs_x":894,"abs_y":2805}' className="text-slate-200 group-hover:text-white transition-colors font-montserrat font-medium" style={{}}>2025 9M Earnings Webcast</h4>
<a bis_size='{"x":894,"y":2795,"w":498,"h":16,"abs_x":894,"abs_y":2837}' className="text-xs text-slate-500 mt-2 flex items-center gap-1 group-hover:text-blue-400 font-montserrat font-medium" href="#" style={{}}>Read more <svg bis_size='{"x":965,"y":2797,"w":12,"h":12,"abs_x":965,"abs_y":2839}' className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
<div bis_size='{"x":853,"y":2851,"w":540,"h":68,"abs_x":853,"abs_y":2893}' className="flex gap-2 pt-8 relative z-10">
<button bis_size='{"x":853,"y":2883,"w":36,"h":36,"abs_x":853,"abs_y":2925}' className="w-9 h-9 flex items-center justify-center bg-white/10 rounded hover:bg-white/20 transition-colors">
<svg bis_size='{"x":863,"y":2893,"w":16,"h":16,"abs_x":863,"abs_y":2935}' className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button bis_size='{"x":897,"y":2883,"w":36,"h":36,"abs_x":897,"abs_y":2925}' className="w-9 h-9 flex items-center justify-center bg-white text-slate-900 rounded hover:bg-gray-100 transition-colors" style={{}}>
<svg bis_size='{"x":907,"y":2893,"w":16,"h":16,"abs_x":907,"abs_y":2935}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3055,"w":1530,"h":510,"abs_x":0,"abs_y":3097}' className="bg-white">
<div bis_size='{"x":0,"y":3055,"w":1530,"h":510,"abs_x":0,"abs_y":3097}' className="grid lg:grid-cols-2 min-h-[500px]">

<div bis_size='{"x":0,"y":3055,"w":765,"h":510,"abs_x":0,"abs_y":3097}' className="bg-[#2563EB] text-white p-16 flex flex-col justify-center relative overflow-hidden">
<div bis_label="style" bis_size='{"x":0,"y":3055,"w":765,"h":510,"abs_x":0,"abs_y":3097}' className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/cubes.png\')'}}></div>
<div bis_size='{"x":64,"y":3188,"w":512,"h":243,"abs_x":64,"abs_y":3230}' className="relative z-10 max-w-lg mx-auto lg:mx-0">
<h2 bis_size='{"x":64,"y":3188,"w":512,"h":40,"abs_x":64,"abs_y":3230}' className="lg:text-4xl text-3xl font-bold tracking-tight font-montserrat mb-6">Life in NOMIN</h2>
<p bis_size='{"x":64,"y":3252,"w":512,"h":87,"abs_x":64,"abs_y":3294}' className="text-blue-100 text-lg leading-relaxed mb-10 font-montserrat font-medium" style={{}}>
                        Aurora Holding is the leading Mongolian company in Forbes "World's best employers" list. Join a team that values growth, diversity, and innovation.
                    </p>
<a bis_size='{"x":64,"y":3380,"w":171,"h":52,"abs_x":64,"abs_y":3422}' className="bg-white text-blue-600 px-8 py-4 rounded text-sm inline-block shadow-lg hover:bg-blue-50 transition-colors self-start font-montserrat font-medium" href="#" style={{}}>
                        View Openings
                    </a>
</div>
</div>

<div bis_size='{"x":765,"y":3055,"w":765,"h":510,"abs_x":765,"abs_y":3097}' className="relative h-[400px] lg:h-auto">
<img alt="Office Life" bis_size='{"x":765,"y":3055,"w":765,"h":510,"abs_x":765,"abs_y":3097}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d5ac24b-703e-4790-a7f9-5a1cb13fe618_1600w.webp"/>

<div bis_size='{"x":829,"y":3425,"w":320,"h":204,"abs_x":829,"abs_y":3467}' className="absolute -bottom-16 left-8 md:left-16 bg-white shadow-2xl p-6 rounded-lg max-w-xs z-20 border border-slate-100 hidden lg:block" style={{}}>
<div bis_size='{"x":854,"y":3450,"w":270,"h":48,"abs_x":854,"abs_y":3492}' className="flex items-center gap-4 mb-4">
<div bis_size='{"x":854,"y":3450,"w":48,"h":48,"abs_x":854,"abs_y":3492}' className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600" style={{}}>
<svg bis_size='{"x":866,"y":3462,"w":24,"h":24,"abs_x":866,"abs_y":3504}' className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div bis_size='{"x":918,"y":3462,"w":158,"h":24,"abs_x":918,"abs_y":3504}' className="">
<h4 bis_size='{"x":918,"y":3462,"w":158,"h":24,"abs_x":918,"abs_y":3504}' className="text-slate-900 font-montserrat font-medium" style={{}}>NOMIN Bonus Card</h4>
</div>
</div>
<p bis_size='{"x":854,"y":3514,"w":270,"h":58,"abs_x":854,"abs_y":3556}' className="text-xs text-slate-500 leading-relaxed mb-4 font-montserrat font-medium" style={{}}>
                        Earn 3-10% bonus points on every purchase across our network. The biggest loyalty program in the region.
                    </p>
<a bis_size='{"x":854,"y":3589,"w":270,"h":16,"abs_x":854,"abs_y":3631}' className="text-xs text-blue-600 flex items-center gap-1 hover:gap-2 transition-all font-montserrat font-medium" href="#" style={{}}>
                        Learn details <svg bis_size='{"x":935,"y":3591,"w":12,"h":12,"abs_x":935,"abs_y":3633}' className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<div bis_size='{"x":0,"y":3565,"w":1530,"h":96,"abs_x":0,"abs_y":3607}' className="h-24 hidden lg:block"></div>

<section bis_size='{"x":0,"y":3661,"w":1530,"h":549,"abs_x":0,"abs_y":3703}' className="py-24 bg-white">
<div bis_size='{"x":65,"y":3757,"w":1400,"h":357,"abs_x":65,"abs_y":3799}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":97,"y":3757,"w":1336,"h":357,"abs_x":97,"abs_y":3799}' className="flex flex-col md:flex-row items-center gap-16">

<div bis_size='{"x":97,"y":3757,"w":636,"h":357,"abs_x":97,"abs_y":3799}' className="w-full md:w-1/2 relative">
<div bis_size='{"x":91,"y":3746,"w":648,"h":379,"abs_x":91,"abs_y":3788}' className="aspect-video overflow-hidden transform hover:rotate-0 transition-transform duration-500 bg-[#0f172a] rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl rotate-[-2deg]"><img alt="Container background" bis_size='{"x":91,"y":3746,"w":648,"h":379,"abs_x":91,"abs_y":3788}' className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a6a5f78-029b-4e3c-a302-f8ed535d6270_3840w.jpg"/>
<div bis_size='{"x":470,"y":3746,"w":264,"h":264,"abs_x":470,"abs_y":3788}' className="bg-cyan-500/20 w-64 h-64 rounded-full absolute top-0 right-0 blur-3xl"></div>
<div bis_size='{"x":94,"y":3861,"w":264,"h":264,"abs_x":94,"abs_y":3903}' className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" style={{}}></div>
</div>
</div>

<div bis_size='{"x":797,"y":3826,"w":636,"h":219,"abs_x":797,"abs_y":3868}' className="w-full md:w-1/2 space-y-6">
<h2 bis_size='{"x":797,"y":3826,"w":636,"h":36,"abs_x":797,"abs_y":3868}' className="text-3xl text-slate-900 tracking-tight font-montserrat font-bold" style={{}}>Unlock Exclusive Benefits</h2>
<p bis_size='{"x":797,"y":3886,"w":636,"h":87,"abs_x":797,"abs_y":3928}' className="text-slate-500 text-lg leading-relaxed font-montserrat font-medium" style={{}}>
                        The NOMIN Card is your key to a network of premium services. From retail to banking, enjoy seamless integration and rewards that matter to you. Accumulate wealth while you spend.
                    </p>
<button bis_size='{"x":797,"y":3998,"w":165,"h":48,"abs_x":797,"abs_y":4040}' className="bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-3.5 rounded text-sm transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 font-montserrat font-medium" style={{}}>
                        Apply Now
                        <svg bis_size='{"x":914,"y":4014,"w":16,"h":16,"abs_x":914,"abs_y":4056}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":4211,"w":1530,"h":633,"abs_x":0,"abs_y":4253}' className="">

<div bis_size='{"x":0,"y":4211,"w":1530,"h":201,"abs_x":0,"abs_y":4253}' className="bg-[#2563EB] py-12">
<div bis_size='{"x":65,"y":4259,"w":1400,"h":105,"abs_x":65,"abs_y":4301}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 bis_size='{"x":97,"y":4259,"w":1336,"h":28,"abs_x":97,"abs_y":4301}' className="text-white text-lg mb-8 font-montserrat font-medium" style={{}}>Quick Links</h3>
<div bis_size='{"x":97,"y":4319,"w":1336,"h":45,"abs_x":97,"abs_y":4361}' className="flex flex-wrap justify-center gap-4">
<a bis_size='{"x":282,"y":4319,"w":232,"h":45,"abs_x":282,"abs_y":4361}' className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm flex items-center gap-2 transition-colors border border-blue-500 font-montserrat font-medium" href="#" style={{}}>
                        About NOMIN Holding <svg bis_size='{"x":475,"y":4335,"w":14,"h":14,"abs_x":475,"abs_y":4377}' className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a bis_size='{"x":530,"y":4319,"w":186,"h":45,"abs_x":530,"abs_y":4361}' className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm flex items-center gap-2 transition-colors border border-blue-500 font-montserrat font-medium" href="#" style={{}}>
                        Group Structure <svg bis_size='{"x":678,"y":4335,"w":14,"h":14,"abs_x":678,"abs_y":4377}' className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a bis_size='{"x":733,"y":4319,"w":204,"h":45,"abs_x":733,"abs_y":4361}' className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm flex items-center gap-2 transition-colors border border-blue-500 font-montserrat font-medium" href="#" style={{}}>
                        Culture &amp; Priorities <svg bis_size='{"x":899,"y":4335,"w":14,"h":14,"abs_x":899,"abs_y":4377}' className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a bis_size='{"x":953,"y":4319,"w":154,"h":45,"abs_x":953,"abs_y":4361}' className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm flex items-center gap-2 transition-colors border border-blue-500 font-montserrat font-medium" href="#" style={{}}>
                        Foundation <svg bis_size='{"x":1069,"y":4335,"w":14,"h":14,"abs_x":1069,"abs_y":4377}' className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a bis_size='{"x":1124,"y":4319,"w":123,"h":45,"abs_x":1124,"abs_y":4361}' className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded text-sm flex items-center gap-2 transition-colors border border-blue-500 font-montserrat font-medium" href="#" style={{}}>
                        Hotline <svg bis_size='{"x":1208,"y":4335,"w":14,"h":14,"abs_x":1208,"abs_y":4377}' className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div bis_size='{"x":0,"y":4413,"w":1530,"h":431,"abs_x":0,"abs_y":4455}' className="bg-white text-slate-900 border-t border-slate-100 pt-16 pb-12" style={{}}>
<div bis_size='{"x":65,"y":4477,"w":1400,"h":318,"abs_x":65,"abs_y":4519}' className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":97,"y":4477,"w":1336,"h":205,"abs_x":97,"abs_y":4519}' className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div bis_size='{"x":97,"y":4477,"w":644,"h":205,"abs_x":97,"abs_y":4519}' className="col-span-1 lg:col-span-2 space-y-6">
<h4 bis_size='{"x":97,"y":4477,"w":644,"h":16,"abs_x":97,"abs_y":4519}' className="text-xs uppercase tracking-widest text-slate-400 font-montserrat font-medium" style={{}}>FOLLOW US</h4>
<p bis_size='{"x":97,"y":4517,"w":384,"h":45,"abs_x":97,"abs_y":4559}' className="leading-relaxed text-sm text-slate-500 max-w-sm font-montserrat font-medium" style={{}}>Stay updated with the latest news, events and opportunities from NOMIN Holding.</p>
<div bis_size='{"x":97,"y":4587,"w":644,"h":40,"abs_x":97,"abs_y":4629}' className="flex gap-4">
<a bis_size='{"x":97,"y":4587,"w":40,"h":40,"abs_x":97,"abs_y":4629}' className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors" href="#" style={{}}><svg bis_size='{"x":109,"y":4599,"w":16,"h":16,"abs_x":109,"abs_y":4641}' className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a bis_size='{"x":153,"y":4587,"w":40,"h":40,"abs_x":153,"abs_y":4629}' className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors" href="#" style={{}}><svg bis_size='{"x":165,"y":4599,"w":16,"h":16,"abs_x":165,"abs_y":4641}' className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a bis_size='{"x":209,"y":4587,"w":40,"h":40,"abs_x":209,"abs_y":4629}' className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-red-600 hover:bg-red-50 transition-colors" href="#" style={{}}><svg bis_size='{"x":221,"y":4599,"w":16,"h":16,"abs_x":221,"abs_y":4641}' className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg></a>
<a bis_size='{"x":265,"y":4587,"w":40,"h":40,"abs_x":265,"abs_y":4629}' className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-50 transition-colors" href="#" style={{}}><svg bis_size='{"x":277,"y":4599,"w":16,"h":16,"abs_x":277,"abs_y":4641}' className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div bis_size='{"x":789,"y":4477,"w":644,"h":205,"abs_x":789,"abs_y":4519}' className="col-span-1 lg:col-span-2 space-y-6">
<h4 bis_size='{"x":789,"y":4477,"w":644,"h":16,"abs_x":789,"abs_y":4519}' className="text-xs uppercase tracking-widest text-slate-400 font-montserrat font-medium" style={{}}>CONTACT US</h4>
<h5 bis_size='{"x":789,"y":4517,"w":644,"h":24,"abs_x":789,"abs_y":4559}' className="text-blue-600 font-montserrat font-medium" style={{}}>НОМИН Холдинг ХХК</h5>
<div bis_size='{"x":789,"y":4565,"w":644,"h":117,"abs_x":789,"abs_y":4607}' className="space-y-4 text-sm text-slate-600" style={{}}>
<div bis_size='{"x":789,"y":4565,"w":644,"h":45,"abs_x":789,"abs_y":4607}' className="flex items-start gap-3">
<svg bis_size='{"x":789,"y":4569,"w":16,"h":16,"abs_x":789,"abs_y":4611}' className="lucide lucide-map-pin w-4 h-4 text-slate-400 mt-1 flex-shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p bis_size='{"x":817,"y":4565,"w":616,"h":45,"abs_x":817,"abs_y":4607}' className="leading-relaxed font-montserrat font-medium" style={{}}>
                                    Номин Юнайтед Хан-Уул дүүрэг,
                                    Чингисийн өргөн чөлөө Улаанбаатар
                                    17042, Монгол Улс, 210136, Ш / Ч-2316
                                </p>
</div>
<div bis_size='{"x":789,"y":4627,"w":644,"h":20,"abs_x":789,"abs_y":4669}' className="flex items-center gap-3">
<svg bis_size='{"x":789,"y":4629,"w":16,"h":16,"abs_x":789,"abs_y":4671}' className="lucide lucide-phone w-4 h-4 text-slate-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span bis_size='{"x":817,"y":4627,"w":73,"h":20,"abs_x":817,"abs_y":4669}' className="font-montserrat font-medium" style={{}}>1800-2888</span>
</div>
<div bis_size='{"x":789,"y":4663,"w":644,"h":20,"abs_x":789,"abs_y":4705}' className="flex items-center gap-3">
<svg bis_size='{"x":789,"y":4665,"w":16,"h":16,"abs_x":789,"abs_y":4707}' className="lucide lucide-mail w-4 h-4 text-slate-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a bis_size='{"x":817,"y":4663,"w":134,"h":20,"abs_x":817,"abs_y":4705}' className="hover:text-blue-600 transition-colors font-montserrat font-medium" href="mailto:nomin@nomin.net" style={{}}>nomin@nomin.net</a>
</div>
</div>
</div>
</div>
<div bis_size='{"x":97,"y":4747,"w":1336,"h":49,"abs_x":97,"abs_y":4789}' className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-medium" style={{}}>
<p bis_size='{"x":97,"y":4780,"w":262,"h":16,"abs_x":97,"abs_y":4822}' className="font-montserrat font-medium" style={{}}>© 2026 NOMIN Holding LLC. All rights reserved.</p>
<div bis_size='{"x":1069,"y":4780,"w":364,"h":16,"abs_x":1069,"abs_y":4822}' className="flex gap-6">
<a bis_size='{"x":1069,"y":4780,"w":76,"h":16,"abs_x":1069,"abs_y":4822}' className="hover:text-slate-600 transition-colors font-montserrat font-medium" href="#" style={{}}>Privacy Policy</a>
<a bis_size='{"x":1169,"y":4780,"w":71,"h":16,"abs_x":1169,"abs_y":4822}' className="hover:text-slate-600 transition-colors font-montserrat font-medium" href="#" style={{}}>Terms of Use</a>
<a bis_size='{"x":1265,"y":4780,"w":99,"h":16,"abs_x":1265,"abs_y":4822}' className="hover:text-slate-600 transition-colors font-montserrat font-medium" href="#" style={{}}>Legal Information</a>
<a bis_size='{"x":1389,"y":4780,"w":43,"h":16,"abs_x":1389,"abs_y":4822}' className="hover:text-slate-600 transition-colors font-montserrat font-medium" href="#" style={{}}>Contact</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
