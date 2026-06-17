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



      function playVideo() {
        const thumbnail = document.getElementById('video-thumbnail');
        const overlay = document.getElementById('video-overlay');
        const iframe = document.getElementById('youtube-iframe');

        if (thumbnail) thumbnail.style.display = 'none';
        if (overlay) overlay.style.display = 'none';
        if (iframe) {
          iframe.classList.remove('hidden');
          iframe.src = 'https://www.youtube.com/embed/BqvbsJ8u8c4?autoplay=1&enablejsapi=1';
        }
      }
    
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
      


<nav bis_size='{"x":0,"y":2426,"w":1645,"h":59,"abs_x":480,"abs_y":2465}' className="sticky z-40 bg-[#050505]/80 border-white/5 border-b top-0 backdrop-blur-md">
<div bis_size='{"x":302,"y":2426,"w":1040,"h":58,"abs_x":782,"abs_y":2465}' className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div bis_size='{"x":322,"y":2442,"w":159,"h":25,"abs_x":802,"abs_y":2481}' className="flex gap-8 gap-x-8 gap-y-8 items-center">
<a bis_size='{"x":322,"y":2442,"w":133,"h":25,"abs_x":802,"abs_y":2481}' className="text-xl font-semibold tracking-tight flex items-center gap-2" href="#">
<div bis_size='{"x":322,"y":2442,"w":25,"h":25,"abs_x":802,"abs_y":2481}' className="flex font-bold text-white bg-[#047857] w-8 h-8 rounded-lg shadow-[0_0_15px_rgba(4,120,87,0.5)] items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
              /&gt;
            </div>
<span bis_size='{"x":354,"y":2444,"w":100,"h":22,"abs_x":834,"abs_y":2483}' className="text-white" style={{transition: 'outline 0.1s ease-in-out'}}>Faisal Ahmed</span>
</a>
<div bis_size='{"x":481,"y":2455,"w":0,"h":0,"abs_x":961,"abs_y":2494}' className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400"></div>
</div>
<div bis_size='{"x":1228,"y":2439,"w":94,"h":32,"abs_x":1708,"abs_y":2478}' className="flex items-center gap-4">
<button bis_size='{"x":1228,"y":2439,"w":94,"h":32,"abs_x":1708,"abs_y":2478}' className="hover:bg-neutral-200 transition-all flex gap-2 cursor-pointer text-sm font-medium text-black bg-white rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(255,255,255,0.1)] gap-x-2 gap-y-2 items-center" onclick="toggleModal(true)" role="button" style={{transition: 'outline 0.1s ease-in-out'}}>
            Book A Call
          </button>
</div>
</div>
</nav>

<main bis_size='{"x":0,"y":59,"w":1645,"h":1023,"abs_x":480,"abs_y":98}' className="overflow-hidden pt-16 pb-24 relative">

<div bis_size='{"x":322,"y":59,"w":1000,"h":500,"abs_x":802,"abs_y":98}' className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00ffc4] rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>
<div bis_size='{"x":302,"y":111,"w":1040,"h":893,"abs_x":782,"abs_y":150}' className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div bis_size='{"x":700,"y":111,"w":244,"h":25,"abs_x":1180,"abs_y":150}' className="inline-flex items-center gap-2 bg-neutral-900/50 border border-white/10 rounded-full pl-1 pr-4 py-1 shadow-sm mb-8 hover:border-[#00ffc4]/30 transition-colors cursor-default backdrop-blur-sm">
<span bis_size='{"x":704,"y":114,"w":69,"h":18,"abs_x":1184,"abs_y":153}' className="bg-[#047857] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm" style={{transition: 'outline 0.1s ease-in-out'}}>
            Rated 5/5
            <svg bis_size='{"x":760,"y":120,"w":6,"h":6,"abs_x":1240,"abs_y":159}' className="lucide lucide-star w-2 h-2 fill-current text-[#00ffc4]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":761,"y":121,"w":5,"h":5,"abs_x":1241,"abs_y":160}' d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</span>
<span bis_size='{"x":780,"y":115,"w":151,"h":16,"abs_x":1260,"abs_y":154}' className="text-sm font-medium text-neutral-300" style={{transition: 'outline 0.1s ease-in-out'}}>
            Meet The Best Ai automator
          </span>
</div>
<h1 bis_size='{"x":406,"y":162,"w":831,"h":119,"abs_x":886,"abs_y":201}' className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight max-w-5xl mr-auto mb-6 ml-auto" style={{transition: 'outline 0.1s ease-in-out'}}>
          Top Automation Systems
          <br bis_size='{"x":1160,"y":156,"w":0,"h":70,"abs_x":1640,"abs_y":195}' className="hidden md:block"/>
<span bis_size='{"x":527,"y":211,"w":589,"h":77,"abs_x":1007,"abs_y":250}' className="font-normal text-[#00ffc4] font-serif-italic drop-shadow-[0_0_15px_rgba(0,255,196,0.3)]" style={{transition: 'outline 0.1s ease-in-out'}}>
            that guarantee Solutions
          </span>
</h1>
<p bis_size='{"x":549,"y":302,"w":545,"h":45,"abs_x":1029,"abs_y":341}' className="md:text-xl leading-relaxed text-lg font-normal text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto" style={{transition: 'outline 0.1s ease-in-out'}}>
          We're a team of GTM engineers helping B2B agencies turn buying intent
          into booked meetings with automated sales workflows.
        </p>
<div bis_size='{"x":322,"y":380,"w":1001,"h":91,"abs_x":802,"abs_y":419}' className="flex flex-col mb-20 gap-x-4 gap-y-4 items-center">
<button bis_size='{"x":645,"y":380,"w":354,"h":49,"abs_x":1125,"abs_y":419}' className="group relative bg-[#047857] hover:bg-[#059669] text-white text-lg font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(4,120,87,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden border border-[#10b981]/30" onclick="toggleModal(true)">
<div bis_size='{"x":645,"y":429,"w":353,"h":48,"abs_x":1125,"abs_y":468}' className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span bis_size='{"x":671,"y":393,"w":275,"h":22,"abs_x":1151,"abs_y":432}' className="relative" style={{transition: 'outline 0.1s ease-in-out'}}>Apply For Your No-Cost Pilot Campaign</span>
<svg bis_size='{"x":957,"y":396,"w":16,"h":16,"abs_x":1437,"abs_y":435}' className="lucide lucide-arrow-right relative w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":960,"y":405,"w":9,"h":0,"abs_x":1440,"abs_y":444}' d="M5 12h14"></path>
<path bis_size='{"x":965,"y":400,"w":4,"h":9,"abs_x":1445,"abs_y":439}' d="m12 5 7 7-7 7"></path>
</svg>
</button>
<div bis_size='{"x":645,"y":443,"w":355,"h":28,"abs_x":1125,"abs_y":482}' className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-900/80 px-3 py-1 rounded-md border border-white/5 backdrop-blur-sm">
<span bis_size='{"x":655,"y":446,"w":34,"h":20,"abs_x":1135,"abs_y":485}' className="bg-[#00ffc4]/10 text-[#00ffc4] border border-[#00ffc4]/20 text-[10px] font-bold px-1.5 py-0.5 rounded" style={{transition: 'outline 0.1s ease-in-out'}}>
              NEW
            </span>
<span bis_size='{"x":696,"y":448,"w":293,"h":16,"abs_x":1176,"abs_y":487}' className="font-medium text-neutral-400" style={{transition: 'outline 0.1s ease-in-out'}}>
              We'll launch a no-obligation pilot to prove results first.
            </span>
</div>
</div>

<div bis_size='{"x":406,"y":536,"w":831,"h":467,"abs_x":886,"abs_y":575}' className="max-w-5xl mx-auto relative group" id="video-container">
<div bis_size='{"x":403,"y":532,"w":838,"h":474,"abs_x":883,"abs_y":571}' className="absolute -inset-1 bg-gradient-to-b from-[#00ffc4]/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div bis_size='{"x":406,"y":536,"w":831,"h":467,"abs_x":886,"abs_y":575}' className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 aspect-video ring-1 ring-black/5" id="video-wrapper">

<img alt="Video Thumbnail" bis_size='{"x":407,"y":536,"w":830,"h":466,"abs_x":887,"abs_y":575}' className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500" id="video-thumbnail" src="https://img.youtube.com/vi/BqvbsJ8u8c4/maxresdefault.jpg"/>
<div bis_size='{"x":407,"y":536,"w":830,"h":466,"abs_x":887,"abs_y":575}' className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
<div bis_size='{"x":407,"y":536,"w":830,"h":466,"abs_x":887,"abs_y":575}' className="md:p-12 flex flex-col cursor-pointer pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between" id="video-overlay" onclick="playVideo()" role="button">
<div bis_size='{"x":446,"y":575,"w":752,"h":38,"abs_x":926,"abs_y":614}' className="flex items-start justify-between">
<div bis_size='{"x":446,"y":575,"w":192,"h":38,"abs_x":926,"abs_y":614}' className="flex items-center gap-4">
<div bis_size='{"x":446,"y":575,"w":38,"h":38,"abs_x":926,"abs_y":614}' className="w-12 h-12 rounded-full border-2 border-[#00ffc4]/30 overflow-hidden shadow-lg">
<img bis_size='{"x":447,"y":577,"w":35,"h":35,"abs_x":927,"abs_y":616}' className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d7f2dff-df8b-4651-a8a5-f9a9ebf56ef5_320w.png"/>
</div>
<div bis_size='{"x":498,"y":578,"w":140,"h":34,"abs_x":978,"abs_y":617}' className="text-left">
<h3 bis_size='{"x":498,"y":578,"w":140,"h":18,"abs_x":978,"abs_y":617}' className="leading-tight text-shadow-sm text-lg font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>
                      @Faisaln8n
                    </h3>
<p bis_size='{"x":498,"y":596,"w":140,"h":16,"abs_x":978,"abs_y":635}' className="text-sm text-neutral-400" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Your Personal Automator !
                    </p>
</div>
</div>
<div bis_size='{"x":1084,"y":575,"w":114,"h":27,"abs_x":1564,"abs_y":614}' className="hidden sm:flex gap-3 text-white/90 text-sm font-medium">
<span bis_size='{"x":1084,"y":575,"w":114,"h":27,"abs_x":1564,"abs_y":614}' className="flex items-center gap-2 bg-black/50 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md" style={{transition: 'outline 0.1s ease-in-out'}}>
<span bis_size='{"x":1094,"y":586,"w":6,"h":6,"abs_x":1574,"abs_y":625}' className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Hey, Its Meh....
                  </span>
</div>
</div>
<div bis_size='{"x":783,"y":731,"w":77,"h":77,"abs_x":1263,"abs_y":770}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<div bis_size='{"x":783,"y":731,"w":77,"h":77,"abs_x":1263,"abs_y":770}' className="flex group-hover:shadow-[0_0_60px_rgba(0,255,196,0.2)] transition-shadow bg-white/5 w-24 h-24 border-white/10 border rounded-full shadow-[0_0_40px_rgba(0,255,196,0.1)] backdrop-blur-md items-center justify-center cursor-pointer">
<svg bis_size='{"x":808,"y":753,"w":32,"h":32,"abs_x":1288,"abs_y":792}' className="lucide lucide-play fill-white ml-1 w-10 h-10 text-white" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":814,"y":758,"w":21,"h":24,"abs_x":1294,"abs_y":797}' d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
<div bis_size='{"x":446,"y":934,"w":752,"h":30,"abs_x":926,"abs_y":973}' className="flex justify-between items-end">
<div bis_size='{"x":446,"y":934,"w":201,"h":30,"abs_x":926,"abs_y":973}' className="text-sm font-medium text-white bg-black/60 border-white/10 border rounded-lg pt-2 pr-4 pb-2 pl-4 backdrop-blur-md" style={{transition: 'outline 0.1s ease-in-out'}}>
                  See how i Building Automations.
                </div>
<div bis_size='{"x":1127,"y":935,"w":71,"h":29,"abs_x":1607,"abs_y":974}' className="flex gap-4">
<button bis_size='{"x":1127,"y":935,"w":29,"h":29,"abs_x":1607,"abs_y":974}' className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
<svg bis_size='{"x":1134,"y":941,"w":16,"h":16,"abs_x":1614,"abs_y":980}' className="lucide lucide-volume-2 w-5 h-5" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1135,"y":944,"w":6,"h":10,"abs_x":1615,"abs_y":983}' d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
<path bis_size='{"x":1145,"y":948,"w":0,"h":4,"abs_x":1625,"abs_y":987}' d="M16 9a5 5 0 0 1 0 6"></path>
<path bis_size='{"x":1147,"y":945,"w":1,"h":8,"abs_x":1627,"abs_y":984}' d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
</svg>
</button>
<button bis_size='{"x":1169,"y":935,"w":29,"h":29,"abs_x":1649,"abs_y":974}' className="p-2 hover:bg-white/10 rounded-full text-white transition-colors">
<svg bis_size='{"x":1176,"y":941,"w":16,"h":16,"abs_x":1656,"abs_y":980}' className="lucide lucide-maximize w-5 h-5" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1178,"y":943,"w":3,"h":3,"abs_x":1658,"abs_y":982}' d="M8 3H5a2 2 0 0 0-2 2v3"></path>
<path bis_size='{"x":1187,"y":943,"w":3,"h":3,"abs_x":1667,"abs_y":982}' d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
<path bis_size='{"x":1178,"y":952,"w":3,"h":3,"abs_x":1658,"abs_y":991}' d="M3 16v3a2 2 0 0 0 2 2h3"></path>
<path bis_size='{"x":1187,"y":952,"w":3,"h":3,"abs_x":1667,"abs_y":991}' d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
</svg>
</button>
</div>
</div>
</div>

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" bis_chainid="44" bis_depth="1" bis_id="fr_q1m8q12j1bdfjuo7zlp97o" bis_size='{"x":0,"y":2426,"w":0,"h":0,"abs_x":480,"abs_y":2465}' className="absolute inset-0 w-full h-full hidden" frameborder="0" id="youtube-iframe" src="https://www.youtube.com/embed/BqvbsJ8u8c4?enablejsapi=1"></iframe>
</div>
</div>
</div>
</main>


<section bis_size='{"x":0,"y":1082,"w":1645,"h":864,"abs_x":480,"abs_y":1121}' className="bg-[#050505] border-white/5 border-b relative">
<div bis_size='{"x":0,"y":1082,"w":1645,"h":864,"abs_x":480,"abs_y":1121}' className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div bis_size='{"x":302,"y":1082,"w":1040,"h":864,"abs_x":782,"abs_y":1121}' className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div bis_size='{"x":322,"y":1082,"w":1001,"h":48,"abs_x":802,"abs_y":1121}' className="text-center mb-20">
<h2 bis_size='{"x":322,"y":1095,"w":1001,"h":48,"abs_x":802,"abs_y":1134}' className="leading-[1.1] transition-all duration-700 md:text-6xl text-5xl font-semibold text-slate-50 tracking-tight opacity-0 translate-y-4 font-montserrat" style={{}}>Work Demo</h2>
</div>

<section bis_size='{"x":348,"y":1195,"w":949,"h":500,"abs_x":828,"abs_y":1234}' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-32 gap-x-6 gap-y-6 m-8">

<div bis_size='{"x":348,"y":1195,"w":222,"h":500,"abs_x":828,"abs_y":1234}' className="group relative h-[500px] rounded-md overflow-hidden bg-neutral-900 animate-in delay-100">
<img alt="Swiss Alps" bis_size='{"x":348,"y":1195,"w":222,"h":500,"abs_x":828,"abs_y":1234}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":348,"y":1195,"w":222,"h":500,"abs_x":828,"abs_y":1234}' className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/projects'" role="button">
</div>
<div bis_size='{"x":471,"y":1208,"w":86,"h":22,"abs_x":951,"abs_y":1247}' className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-neutral-300 uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
            CHE — 46.8°N
        </div>
<div bis_size='{"x":348,"y":1610,"w":222,"h":91,"abs_x":828,"abs_y":1649}' className="transform group-hover:translate-y-0 transition-transform duration-300 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-2">
<div bis_size='{"x":367,"y":1630,"w":183,"h":52,"abs_x":847,"abs_y":1669}' className="flex border-white/10 border-t pt-4 items-end justify-between">
<div bis_size='{"x":367,"y":1643,"w":87,"h":39,"abs_x":847,"abs_y":1682}' className="">
<span bis_size='{"x":367,"y":1643,"w":87,"h":13,"abs_x":847,"abs_y":1682}' className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block" style={{transition: 'outline 0.1s ease-in-out'}}>Alpine</span>
<h3 bis_size='{"x":367,"y":1660,"w":87,"h":22,"abs_x":847,"abs_y":1699}' className="text-xl font-medium text-white tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>Switzerland</h3>
</div>
<div bis_size='{"x":525,"y":1656,"w":25,"h":25,"abs_x":1005,"abs_y":1695}' className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-black hover:text-black">
<svg bis_size='{"x":526,"y":1661,"w":23,"h":15,"abs_x":1006,"abs_y":1700}' className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '24px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":535,"y":1666,"w":6,"h":6,"abs_x":1015,"abs_y":1705}' className="" d="M7 7h10v10"></path>
<path bis_size='{"x":535,"y":1666,"w":6,"h":6,"abs_x":1015,"abs_y":1705}' className="" d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div bis_size='{"x":590,"y":1195,"w":222,"h":500,"abs_x":1070,"abs_y":1234}' className="group relative h-[500px] rounded-md overflow-hidden bg-neutral-900 animate-in delay-200">
<img alt="Iceland" bis_size='{"x":590,"y":1195,"w":222,"h":500,"abs_x":1070,"abs_y":1234}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div bis_size='{"x":590,"y":1195,"w":222,"h":500,"abs_x":1070,"abs_y":1234}' className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/projects'" role="button">
</div>
<div bis_size='{"x":713,"y":1208,"w":86,"h":22,"abs_x":1193,"abs_y":1247}' className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-neutral-300 uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
            ISL — 64.9°N
        </div>
<div bis_size='{"x":590,"y":1610,"w":222,"h":91,"abs_x":1070,"abs_y":1649}' className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div bis_size='{"x":609,"y":1630,"w":183,"h":52,"abs_x":1089,"abs_y":1669}' className="flex items-end justify-between border-t border-white/10 pt-4">
<div bis_size='{"x":609,"y":1643,"w":74,"h":39,"abs_x":1089,"abs_y":1682}' className="">
<span bis_size='{"x":609,"y":1643,"w":74,"h":13,"abs_x":1089,"abs_y":1682}' className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block" style={{transition: 'outline 0.1s ease-in-out'}}>Volcanic</span>
<h3 bis_size='{"x":609,"y":1660,"w":74,"h":22,"abs_x":1089,"abs_y":1699}' className="text-xl font-medium text-white tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>Highlands</h3>
</div>
<div bis_size='{"x":767,"y":1656,"w":25,"h":25,"abs_x":1247,"abs_y":1695}' className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-black hover:text-black">
<svg bis_size='{"x":774,"y":1663,"w":12,"h":12,"abs_x":1254,"abs_y":1702}' className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":777,"y":1667,"w":5,"h":5,"abs_x":1257,"abs_y":1706}' className="" d="M7 7h10v10"></path>
<path bis_size='{"x":777,"y":1667,"w":5,"h":5,"abs_x":1257,"abs_y":1706}' className="" d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div bis_size='{"x":832,"y":1195,"w":222,"h":500,"abs_x":1312,"abs_y":1234}' className="group relative h-[500px] rounded-md overflow-hidden bg-neutral-900 animate-in delay-300">
<img alt="Turkey" bis_size='{"x":832,"y":1195,"w":222,"h":500,"abs_x":1312,"abs_y":1234}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div bis_size='{"x":832,"y":1195,"w":222,"h":500,"abs_x":1312,"abs_y":1234}' className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/home'" role="button">
</div>
<div bis_size='{"x":955,"y":1208,"w":86,"h":22,"abs_x":1435,"abs_y":1247}' className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-neutral-300 uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
            TUR — 38.6°N
        </div>
<div bis_size='{"x":832,"y":1610,"w":222,"h":91,"abs_x":1312,"abs_y":1649}' className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div bis_size='{"x":852,"y":1630,"w":183,"h":52,"abs_x":1332,"abs_y":1669}' className="flex items-end justify-between border-t border-white/10 pt-4">
<div bis_size='{"x":852,"y":1643,"w":89,"h":39,"abs_x":1332,"abs_y":1682}'>
<span bis_size='{"x":852,"y":1643,"w":89,"h":13,"abs_x":1332,"abs_y":1682}' className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block" style={{transition: 'outline 0.1s ease-in-out'}}>Valley</span>
<h3 bis_size='{"x":852,"y":1660,"w":89,"h":22,"abs_x":1332,"abs_y":1699}' className="text-xl font-medium text-white tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>Cappadocia</h3>
</div>
<div bis_size='{"x":1009,"y":1656,"w":25,"h":25,"abs_x":1489,"abs_y":1695}' className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-black hover:text-black">
<svg bis_size='{"x":1016,"y":1663,"w":12,"h":12,"abs_x":1496,"abs_y":1702}' className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1019,"y":1667,"w":5,"h":5,"abs_x":1499,"abs_y":1706}' className="" d="M7 7h10v10"></path>
<path bis_size='{"x":1019,"y":1667,"w":5,"h":5,"abs_x":1499,"abs_y":1706}' className="" d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>

<div bis_size='{"x":1074,"y":1195,"w":222,"h":500,"abs_x":1554,"abs_y":1234}' className="group relative h-[500px] rounded-md overflow-hidden bg-neutral-900 animate-in delay-200">
<img alt="Dolomites" bis_size='{"x":1074,"y":1195,"w":222,"h":500,"abs_x":1554,"abs_y":1234}' className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div bis_size='{"x":1074,"y":1195,"w":222,"h":500,"abs_x":1554,"abs_y":1234}' className="group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0">
</div>
<div bis_size='{"x":1197,"y":1208,"w":86,"h":22,"abs_x":1677,"abs_y":1247}' className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-neutral-300 uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
            ITA — 46.4°N
        </div>
<div bis_size='{"x":1074,"y":1610,"w":222,"h":91,"abs_x":1554,"abs_y":1649}' className="transform group-hover:translate-y-0 transition-transform duration-300 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-2">
<div bis_size='{"x":1094,"y":1630,"w":183,"h":52,"abs_x":1574,"abs_y":1669}' className="flex items-end justify-between border-t border-white/10 pt-4">
<div bis_size='{"x":1094,"y":1643,"w":73,"h":39,"abs_x":1574,"abs_y":1682}'>
<span bis_size='{"x":1094,"y":1643,"w":73,"h":13,"abs_x":1574,"abs_y":1682}' className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-1 block" style={{transition: 'outline 0.1s ease-in-out'}}>Peaks</span>
<h3 bis_size='{"x":1094,"y":1660,"w":73,"h":22,"abs_x":1574,"abs_y":1699}' className="text-xl font-medium text-white tracking-tight" style={{transition: 'outline 0.1s ease-in-out'}}>Dolomites</h3>
</div>
<div bis_size='{"x":1251,"y":1656,"w":25,"h":25,"abs_x":1731,"abs_y":1695}' className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white text-black hover:text-black">
<svg bis_size='{"x":1258,"y":1663,"w":12,"h":12,"abs_x":1738,"abs_y":1702}' className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1262,"y":1667,"w":5,"h":5,"abs_x":1742,"abs_y":1706}' className="" d="M7 7h10v10"></path>
<path bis_size='{"x":1262,"y":1667,"w":5,"h":5,"abs_x":1742,"abs_y":1706}' className="" d="M7 17 17 7"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<div bis_size='{"x":322,"y":1799,"w":1001,"h":146,"abs_x":802,"abs_y":1838}' className="flex flex-col text-center items-center">
<button bis_size='{"x":614,"y":1799,"w":417,"h":56,"abs_x":1094,"abs_y":1838}' className="relative group" onclick="toggleModal(true)">
<div bis_size='{"x":610,"y":1796,"w":423,"h":62,"abs_x":1090,"abs_y":1835}' className="absolute -inset-1 bg-gradient-to-r from-[#00ffc4] to-[#047857] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div bis_size='{"x":614,"y":1799,"w":417,"h":56,"abs_x":1094,"abs_y":1838}' className="relative bg-gradient-to-r from-[#047857] to-[#059669] hover:from-[#059669] hover:to-[#10b981] text-white text-xl font-semibold px-12 py-5 rounded-xl flex items-center gap-3 transition-all border border-white/10 shadow-2xl" style={{transition: 'outline 0.1s ease-in-out'}}>
              Apply For Your No-Cost Pilot Campaign
              <div bis_size='{"x":972,"y":1818,"w":19,"h":19,"abs_x":1452,"abs_y":1857}' className="bg-white text-[#047857] rounded p-1">
<svg bis_size='{"x":975,"y":1821,"w":12,"h":12,"abs_x":1455,"abs_y":1860}' className="lucide lucide-chevron-right w-4 h-4 stroke-[3]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":980,"y":1824,"w":3,"h":6,"abs_x":1460,"abs_y":1863}' d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
</button>
<div bis_size='{"x":460,"y":1882,"w":724,"h":20,"abs_x":940,"abs_y":1921}' className="mt-8 flex flex-col md:flex-row items-center gap-3 text-sm text-neutral-400">
<div bis_size='{"x":460,"y":1882,"w":125,"h":20,"abs_x":940,"abs_y":1921}' className="flex items-center gap-2">
<span bis_size='{"x":460,"y":1882,"w":34,"h":20,"abs_x":940,"abs_y":1921}' className="bg-[#00ffc4]/10 text-[#00ffc4] border border-[#00ffc4]/20 text-[10px] font-bold px-1.5 py-0.5 rounded" style={{transition: 'outline 0.1s ease-in-out'}}>
                NEW
              </span>
<span bis_size='{"x":501,"y":1884,"w":84,"h":16,"abs_x":981,"abs_y":1923}' className="font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>Free Trial Offer:</span>
</div>
<span bis_size='{"x":596,"y":1884,"w":588,"h":16,"abs_x":1076,"abs_y":1923}' className="" style={{transition: 'outline 0.1s ease-in-out'}}>
              We'll Launch A No-Obligation "Pilot Campaign" To Prove Outbound
              For Your Business Before Moving Forward
            </span>
</div>
<div bis_size='{"x":695,"y":1922,"w":255,"h":23,"abs_x":1175,"abs_y":1961}' className="mt-6 inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-sm">
<div bis_size='{"x":708,"y":1931,"w":6,"h":6,"abs_x":1188,"abs_y":1970}' className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
<span bis_size='{"x":721,"y":1927,"w":215,"h":13,"abs_x":1201,"abs_y":1966}' className="text-xs font-medium text-neutral-300" style={{transition: 'outline 0.1s ease-in-out'}}>
              Extremely Limited Spots Available For October
            </span>
</div>
</div>
</div>
</section>



<section bis_size='{"x":0,"y":1946,"w":1645,"h":846,"abs_x":480,"abs_y":1985}' className="overflow-hidden flex flex-col text-white bg-[#050505] w-full border-white/5 border-b pt-20 pb-40 relative items-center">
<div bis_size='{"x":0,"y":1946,"w":1645,"h":845,"abs_x":480,"abs_y":1985}' className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-radial pointer-events-none"></div>

<div bis_size='{"x":522,"y":2069,"w":600,"h":600,"abs_x":1002,"abs_y":2108}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffc4] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div bis_size='{"x":458,"y":2011,"w":727,"h":105,"abs_x":938,"abs_y":2050}' className="text-center w-full max-w-4xl z-10 relative mb-2 px-6">
<h2 bis_size='{"x":478,"y":2024,"w":689,"h":61,"abs_x":958,"abs_y":2063}' className="text-4xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 mb-6 pb-4 transition-all duration-700 opacity-0 translate-y-4" style={{transition: 'outline 0.1s ease-in-out'}}>
          The Engine of Growth
        </h2>
<p bis_size='{"x":549,"y":2093,"w":545,"h":23,"abs_x":1029,"abs_y":2132}' className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light" style={{transition: 'outline 0.1s ease-in-out'}}>
          Data flows in. Meetings flow out.
        </p>
</div>
<div bis_size='{"x":122,"y":2123,"w":1400,"h":538,"abs_x":602,"abs_y":2162}' className="flex flex-col w-full max-w-[1400px] relative items-center">

<div bis_size='{"x":572,"y":2123,"w":500,"h":500,"abs_x":1052,"abs_y":2162}' className="relative w-[500px] h-[500px] flex items-center justify-center z-20 scale-75 md:scale-100 origin-bottom">
<div bis_size='{"x":572,"y":2123,"w":500,"h":500,"abs_x":1052,"abs_y":2162}' className="absolute inset-0 animate-spin-slow">
<svg bis_size='{"x":572,"y":2123,"w":500,"h":500,"abs_x":1052,"abs_y":2162}' className="absolute inset-0 w-full h-full text-white/5" viewbox="0 0 600 600">
<g bis_size='{"x":614,"y":2165,"w":416,"h":416,"abs_x":1094,"abs_y":2204}' className="stroke-current stroke-[1]">
<line bis_size='{"x":822,"y":2165,"w":0,"h":141,"abs_x":1302,"abs_y":2204}' className="animate-flow-in" x1="300" x2="300" y1="50" y2="220"></line>
<line bis_size='{"x":889,"y":2373,"w":141,"h":0,"abs_x":1369,"abs_y":2412}' className="animate-flow-in delay-1" x1="550" x2="380" y1="300" y2="300"></line>
<line bis_size='{"x":822,"y":2440,"w":0,"h":141,"abs_x":1302,"abs_y":2479}' className="animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="380"></line>
<line bis_size='{"x":614,"y":2373,"w":141,"h":0,"abs_x":1094,"abs_y":2412}' className="animate-flow-in delay-3" x1="50" x2="220" y1="300" y2="300"></line>
<line bis_size='{"x":869,"y":2225,"w":100,"h":100,"abs_x":1349,"abs_y":2264}' className="animate-flow-in delay-1" x1="476" x2="356" y1="123" y2="243"></line>
<line bis_size='{"x":869,"y":2420,"w":100,"h":100,"abs_x":1349,"abs_y":2459}' className="animate-flow-in delay-2" x1="476" x2="356" y1="476" y2="356"></line>
<line bis_size='{"x":675,"y":2420,"w":100,"h":100,"abs_x":1155,"abs_y":2459}' className="animate-flow-in delay-3" x1="123" x2="243" y1="476" y2="356"></line>
<line bis_size='{"x":675,"y":2225,"w":100,"h":100,"abs_x":1155,"abs_y":2264}' className="animate-flow-in" x1="123" x2="243" y1="123" y2="243"></line>
</g>
</svg>

<div bis_size='{"x":800,"y":2150,"w":45,"h":45,"abs_x":1280,"abs_y":2189}' className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":800,"y":2150,"w":45,"h":45,"abs_x":1280,"abs_y":2189}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20">
<svg bis_size='{"x":811,"y":2161,"w":22,"h":22,"abs_x":1291,"abs_y":2200}' className="lucide lucide-cpu w-7 h-7 text-[#00ffc4]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":822,"y":2180,"w":0,"h":1,"abs_x":1302,"abs_y":2219}' d="M12 20v2"></path>
<path bis_size='{"x":822,"y":2163,"w":0,"h":1,"abs_x":1302,"abs_y":2202}' d="M12 2v2"></path>
<path bis_size='{"x":827,"y":2180,"w":0,"h":1,"abs_x":1307,"abs_y":2219}' d="M17 20v2"></path>
<path bis_size='{"x":827,"y":2163,"w":0,"h":1,"abs_x":1307,"abs_y":2202}' d="M17 2v2"></path>
<path bis_size='{"x":813,"y":2173,"w":1,"h":0,"abs_x":1293,"abs_y":2212}' d="M2 12h2"></path>
<path bis_size='{"x":813,"y":2178,"w":1,"h":0,"abs_x":1293,"abs_y":2217}' d="M2 17h2"></path>
<path bis_size='{"x":813,"y":2168,"w":1,"h":0,"abs_x":1293,"abs_y":2207}' d="M2 7h2"></path>
<path bis_size='{"x":830,"y":2173,"w":1,"h":0,"abs_x":1310,"abs_y":2212}' d="M20 12h2"></path>
<path bis_size='{"x":830,"y":2178,"w":1,"h":0,"abs_x":1310,"abs_y":2217}' d="M20 17h2"></path>
<path bis_size='{"x":830,"y":2168,"w":1,"h":0,"abs_x":1310,"abs_y":2207}' d="M20 7h2"></path>
<path bis_size='{"x":818,"y":2180,"w":0,"h":1,"abs_x":1298,"abs_y":2219}' d="M7 20v2"></path>
<path bis_size='{"x":818,"y":2163,"w":0,"h":1,"abs_x":1298,"abs_y":2202}' d="M7 2v2"></path>
<rect bis_size='{"x":815,"y":2165,"w":15,"h":15,"abs_x":1295,"abs_y":2204}' height="16" rx="2" width="16" x="4" y="4"></rect>
<rect bis_size='{"x":818,"y":2169,"w":7,"h":7,"abs_x":1298,"abs_y":2208}' height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
</div>
<div bis_size='{"x":927,"y":2223,"w":45,"h":45,"abs_x":1407,"abs_y":2262}' className="absolute top-[123px] right-[123px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":927,"y":2223,"w":45,"h":45,"abs_x":1407,"abs_y":2262}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":938,"y":2234,"w":22,"h":22,"abs_x":1418,"abs_y":2273}' className="lucide lucide-bot w-7 h-7 text-[#00ffc4]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":945,"y":2238,"w":3,"h":3,"abs_x":1425,"abs_y":2277}' d="M12 8V4H8"></path>
<rect bis_size='{"x":942,"y":2242,"w":15,"h":11,"abs_x":1422,"abs_y":2281}' height="12" rx="2" width="16" x="4" y="8"></rect>
<path bis_size='{"x":940,"y":2248,"w":1,"h":0,"abs_x":1420,"abs_y":2287}' d="M2 14h2"></path>
<path bis_size='{"x":957,"y":2248,"w":1,"h":0,"abs_x":1437,"abs_y":2287}' d="M20 14h2"></path>
<path bis_size='{"x":952,"y":2247,"w":0,"h":1,"abs_x":1432,"abs_y":2286}' d="M15 13v2"></path>
<path bis_size='{"x":946,"y":2247,"w":0,"h":1,"abs_x":1426,"abs_y":2286}' d="M9 13v2"></path>
</svg>
</div>
</div>
<div bis_size='{"x":1000,"y":2350,"w":45,"h":45,"abs_x":1480,"abs_y":2389}' className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":1000,"y":2350,"w":45,"h":45,"abs_x":1480,"abs_y":2389}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":1011,"y":2361,"w":22,"h":22,"abs_x":1491,"abs_y":2400}' className="lucide lucide-linkedin w-7 h-7 text-[#00ffc4]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":1020,"y":2369,"w":11,"h":12,"abs_x":1500,"abs_y":2408}' d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect bis_size='{"x":1013,"y":2370,"w":3,"h":11,"abs_x":1493,"abs_y":2409}' height="12" width="4" x="2" y="9"></rect>
<circle bis_size='{"x":1013,"y":2363,"w":3,"h":3,"abs_x":1493,"abs_y":2402}' cx="4" cy="4" r="2"></circle>
</svg>
</div>
</div>
<div bis_size='{"x":927,"y":2477,"w":45,"h":45,"abs_x":1407,"abs_y":2516}' className="absolute bottom-[123px] right-[123px] translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":927,"y":2477,"w":45,"h":45,"abs_x":1407,"abs_y":2516}' className="flex bg-neutral-900 w-14 h-14 border-white/10 border rounded-xl shadow-lg items-center justify-center">
<svg bis_size='{"x":935,"y":2486,"w":27,"h":27,"abs_x":1415,"abs_y":2525}' className="lucide lucide-database w-[28px] h-[28px]" data-icon-replaced="true" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 255, 196)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse bis_size='{"x":939,"y":2488,"w":20,"h":6,"abs_x":1419,"abs_y":2527}' className="" cx="12" cy="5" rx="9" ry="3"></ellipse>
<path bis_size='{"x":939,"y":2492,"w":20,"h":19,"abs_x":1419,"abs_y":2531}' d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path bis_size='{"x":939,"y":2500,"w":20,"h":3,"abs_x":1419,"abs_y":2539}' className="" d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
</div>
</div>
<div bis_size='{"x":800,"y":2550,"w":45,"h":45,"abs_x":1280,"abs_y":2589}' className="absolute bottom-[50px] left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":800,"y":2550,"w":45,"h":45,"abs_x":1280,"abs_y":2589}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":811,"y":2561,"w":22,"h":22,"abs_x":1291,"abs_y":2600}' className="lucide lucide-webhook w-7 h-7 text-[#00ffc4]" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":813,"y":2576,"w":15,"h":5,"abs_x":1293,"abs_y":2615}' d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
<path bis_size='{"x":817,"y":2563,"w":9,"h":14,"abs_x":1297,"abs_y":2602}' d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
<path bis_size='{"x":822,"y":2567,"w":9,"h":14,"abs_x":1302,"abs_y":2606}' d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
</svg>
</div>
</div>
<div bis_size='{"x":673,"y":2477,"w":45,"h":45,"abs_x":1153,"abs_y":2516}' className="absolute bottom-[123px] left-[123px] -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":673,"y":2477,"w":45,"h":45,"abs_x":1153,"abs_y":2516}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":684,"y":2488,"w":22,"h":22,"abs_x":1164,"abs_y":2527}' className="lucide lucide-globe w-7 h-7 text-[#00ffc4]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle bis_size='{"x":686,"y":2490,"w":18,"h":18,"abs_x":1166,"abs_y":2529}' cx="12" cy="12" r="10"></circle>
<path bis_size='{"x":691,"y":2490,"w":7,"h":18,"abs_x":1171,"abs_y":2529}' d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path bis_size='{"x":686,"y":2500,"w":18,"h":0,"abs_x":1166,"abs_y":2539}' d="M2 12h20"></path>
</svg>
</div>
</div>
<div bis_size='{"x":600,"y":2350,"w":45,"h":45,"abs_x":1080,"abs_y":2389}' className="absolute top-1/2 left-[50px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":600,"y":2350,"w":45,"h":45,"abs_x":1080,"abs_y":2389}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":611,"y":2361,"w":22,"h":22,"abs_x":1091,"abs_y":2400}' className="lucide lucide-messages-square w-7 h-7 text-[#00ffc4]" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":613,"y":2363,"w":13,"h":12,"abs_x":1093,"abs_y":2402}' d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
<path bis_size='{"x":618,"y":2370,"w":13,"h":12,"abs_x":1098,"abs_y":2409}' d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path>
</svg>
</div>
</div>
<div bis_size='{"x":673,"y":2223,"w":45,"h":45,"abs_x":1153,"abs_y":2262}' className="absolute top-[123px] left-[123px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div bis_size='{"x":673,"y":2223,"w":45,"h":45,"abs_x":1153,"abs_y":2262}' className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg bis_size='{"x":684,"y":2234,"w":22,"h":22,"abs_x":1164,"abs_y":2273}' className="lucide lucide-cloud w-7 h-7 text-[#00ffc4]" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":686,"y":2239,"w":18,"h":13,"abs_x":1166,"abs_y":2278}' d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
</div>
</div>
</div>
<div bis_size='{"x":777,"y":2327,"w":90,"h":90,"abs_x":1257,"abs_y":2366}' className="absolute z-30 flex items-center justify-center">
<div bis_size='{"x":777,"y":2327,"w":90,"h":90,"abs_x":1257,"abs_y":2366}' className="w-28 h-28 bg-[#0a0a0a] rounded-3xl border border-[#00ffc4]/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,255,196,0.2)] relative overflow-hidden ring-1 ring-white/10">
<div bis_size='{"x":777,"y":2328,"w":89,"h":89,"abs_x":1257,"abs_y":2367}' className="absolute inset-0 bg-[#00ffc4]/10 animate-pulse"></div>
<svg bis_size='{"x":803,"y":2353,"w":38,"h":38,"abs_x":1283,"abs_y":2392}' className="lucide lucide-layers w-12 h-12 text-white relative z-10" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":806,"y":2357,"w":32,"h":16,"abs_x":1286,"abs_y":2396}' d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path bis_size='{"x":806,"y":2373,"w":32,"h":8,"abs_x":1286,"abs_y":2412}' d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path bis_size='{"x":806,"y":2381,"w":32,"h":8,"abs_x":1286,"abs_y":2420}' d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
</div>
</div>

<div bis_size='{"x":458,"y":2558,"w":727,"h":103,"abs_x":938,"abs_y":2597}' className="relative w-full max-w-4xl h-32 -mt-20 z-10 px-4 hidden md:block">
<div bis_size='{"x":821,"y":2558,"w":0,"h":41,"abs_x":1301,"abs_y":2597}' className="absolute left-1/2 -translate-x-px top-0 w-[1px] h-[40%] bg-white/5 overflow-hidden">
<div bis_size='{"x":821,"y":2558,"w":0,"h":41,"abs_x":1301,"abs_y":2597}' className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-main"></div>
</div>
<div bis_size='{"x":640,"y":2599,"w":363,"h":0,"abs_x":1120,"abs_y":2638}' className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-white/5 overflow-hidden">
<div bis_size='{"x":640,"y":2599,"w":363,"h":0,"abs_x":1120,"abs_y":2638}' className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffc4] to-transparent animate-pulse-expand"></div>
</div>
<div bis_size='{"x":639,"y":2599,"w":0,"h":62,"abs_x":1119,"abs_y":2638}' className="absolute top-[40%] left-[25%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div bis_size='{"x":639,"y":2599,"w":0,"h":62,"abs_x":1119,"abs_y":2638}' className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
<div bis_size='{"x":1003,"y":2599,"w":0,"h":62,"abs_x":1483,"abs_y":2638}' className="absolute top-[40%] left-[75%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div bis_size='{"x":1003,"y":2599,"w":0,"h":62,"abs_x":1483,"abs_y":2638}' className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
</div>

</div>
</section>

<section bis_size='{"x":0,"y":2792,"w":1645,"h":2482,"abs_x":480,"abs_y":2831}' className="bg-[#050505] pt-24 pb-24 relative">
<div bis_size='{"x":0,"y":2792,"w":1645,"h":2482,"abs_x":480,"abs_y":2831}' className="absolute inset-0 bg-gradient-to-b from-[#047857]/20 via-[#050505] to-[#047857]/20 opacity-20 pointer-events-none"></div>
<div bis_size='{"x":406,"y":2870,"w":831,"h":2287,"abs_x":886,"abs_y":2909}' className="max-w-5xl mx-auto px-6 relative z-10">

<div bis_size='{"x":426,"y":2870,"w":793,"h":92,"abs_x":906,"abs_y":2909}' className="text-center mb-24">
<div bis_size='{"x":701,"y":2870,"w":242,"h":23,"abs_x":1181,"abs_y":2909}' className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
<span bis_size='{"x":715,"y":2879,"w":6,"h":6,"abs_x":1195,"abs_y":2918}' className="w-2 h-2 rounded-full bg-[#00ffc4] animate-pulse"></span>
<span bis_size='{"x":728,"y":2876,"w":202,"h":13,"abs_x":1208,"abs_y":2915}' className="text-xs font-medium text-white tracking-wide uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
              Our Demand Activation Framework
            </span>
</div>
<h2 bis_size='{"x":426,"y":2927,"w":793,"h":48,"abs_x":906,"abs_y":2966}' className="md:text-6xl leading-[1.1] transition-all duration-700 text-4xl font-semibold text-white tracking-tight opacity-0 drop-shadow-sm translate-y-4" style={{transition: 'outline 0.1s ease-in-out'}}>
            How we turn strangers into pipeline
          </h2>
</div>

<div bis_size='{"x":426,"y":3040,"w":793,"h":2116,"abs_x":906,"abs_y":3079}' className="relative w-full">

<div bis_size='{"x":426,"y":3040,"w":793,"h":500,"abs_x":906,"abs_y":3079}' className="sticky top-24 z-10 mb-12">
<div bis_size='{"x":426,"y":3040,"w":793,"h":500,"abs_x":906,"abs_y":3079}' className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div bis_size='{"x":465,"y":3080,"w":336,"h":420,"abs_x":945,"abs_y":3119}' className="md:w-1/2 flex flex-col justify-center">
<div bis_size='{"x":465,"y":3147,"w":336,"h":33,"abs_x":945,"abs_y":3186}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":465,"y":3147,"w":33,"h":33,"abs_x":945,"abs_y":3186}' className="bg-[#00ffc4]/10 text-[#00ffc4] p-2 rounded-lg border border-[#00ffc4]/20">
<svg bis_size='{"x":472,"y":3154,"w":19,"h":19,"abs_x":952,"abs_y":3193}' className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":486,"y":3168,"w":3,"h":3,"abs_x":966,"abs_y":3207}' d="m21 21-4.34-4.34"></path>
<circle bis_size='{"x":475,"y":3156,"w":12,"h":12,"abs_x":955,"abs_y":3195}' cx="11" cy="11" r="8"></circle>
</svg>
</div>
<span bis_size='{"x":509,"y":3156,"w":47,"h":16,"abs_x":989,"abs_y":3195}' className="text-[#00ffc4] font-semibold tracking-wide text-sm uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Phase 1
                  </span>
</div>
<h3 bis_size='{"x":465,"y":3200,"w":336,"h":58,"abs_x":945,"abs_y":3239}' className="text-3xl font-semibold text-white tracking-tight mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Market Research &amp; ICP Deep-Dive
                </h3>
<p bis_size='{"x":465,"y":3272,"w":336,"h":84,"abs_x":945,"abs_y":3311}' className="text-neutral-400 leading-relaxed mb-8" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Before we send a single message, we figure out what's actually
                  going on in your prospects' world. We scrape Reddit threads,
                  listen to sales calls, and tear apart competitor positioning.
                </p>
<div bis_size='{"x":465,"y":3382,"w":336,"h":51,"abs_x":945,"abs_y":3421}' className="space-y-4">
<div bis_size='{"x":465,"y":3382,"w":336,"h":19,"abs_x":945,"abs_y":3421}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":3385,"w":16,"h":16,"abs_x":945,"abs_y":3424}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":3389,"w":9,"h":9,"abs_x":949,"abs_y":3428}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":3391,"w":6,"h":4,"abs_x":950,"abs_y":3430}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":3382,"w":197,"h":16,"abs_x":971,"abs_y":3421}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      The exact words your prospects use
                    </span>
</div>
<div bis_size='{"x":465,"y":3415,"w":336,"h":19,"abs_x":945,"abs_y":3454}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":3418,"w":16,"h":16,"abs_x":945,"abs_y":3457}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":3421,"w":9,"h":9,"abs_x":949,"abs_y":3460}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":3423,"w":6,"h":4,"abs_x":950,"abs_y":3462}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":3415,"w":149,"h":16,"abs_x":971,"abs_y":3454}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Triggers that indicate intent
                    </span>
</div>
</div>
</div>
<div bis_size='{"x":841,"y":3080,"w":338,"h":420,"abs_x":1321,"abs_y":3119}' className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div bis_size='{"x":861,"y":3240,"w":298,"h":91,"abs_x":1341,"abs_y":3279}' className="bg-neutral-800 p-4 rounded-xl border border-white/10 shadow-sm mb-3">
<div bis_size='{"x":874,"y":3253,"w":271,"h":16,"abs_x":1354,"abs_y":3292}' className="flex items-center gap-2 mb-2">
<div bis_size='{"x":874,"y":3253,"w":16,"h":16,"abs_x":1354,"abs_y":3292}' className="w-5 h-5 bg-orange-600 rounded-full"></div>
<span bis_size='{"x":897,"y":3254,"w":121,"h":15,"abs_x":1377,"abs_y":3293}' className="text-[10px] text-neutral-500" style={{transition: 'outline 0.1s ease-in-out'}}>
                      u/SaaS_Founder • 2d ago
                    </span>
</div>
<div bis_size='{"x":874,"y":3276,"w":271,"h":16,"abs_x":1354,"abs_y":3315}' className="text-sm font-semibold text-white mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>
                    How do you handle outbound at scale?
                  </div>
<p bis_size='{"x":871,"y":3296,"w":277,"h":22,"abs_x":1351,"abs_y":3335}' className="text-xs text-neutral-400 leading-relaxed bg-yellow-900/20 p-1 -mx-1 rounded" style={{transition: 'outline 0.1s ease-in-out'}}>
                    My biggest frustration is
                    <span bis_size='{"x":989,"y":3300,"w":87,"h":11,"abs_x":1469,"abs_y":3339}' className="font-bold text-white" style={{transition: 'outline 0.1s ease-in-out'}}>bad data accuracy</span>
                    .
                  </p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":426,"y":3579,"w":793,"h":500,"abs_x":906,"abs_y":3618}' className="sticky top-28 z-20 mb-12">
<div bis_size='{"x":426,"y":3579,"w":793,"h":500,"abs_x":906,"abs_y":3618}' className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div bis_size='{"x":465,"y":3619,"w":336,"h":420,"abs_x":945,"abs_y":3658}' className="md:w-1/2 flex flex-col justify-center">
<div bis_size='{"x":465,"y":3686,"w":336,"h":33,"abs_x":945,"abs_y":3725}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":465,"y":3686,"w":33,"h":33,"abs_x":945,"abs_y":3725}' className="bg-purple-900/30 text-purple-400 p-2 rounded-lg border border-purple-500/20">
<svg bis_size='{"x":472,"y":3693,"w":19,"h":19,"abs_x":952,"abs_y":3732}' className="lucide lucide-network w-6 h-6" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect bis_size='{"x":485,"y":3706,"w":4,"h":4,"abs_x":965,"abs_y":3745}' height="6" rx="1" width="6" x="16" y="16"></rect>
<rect bis_size='{"x":474,"y":3706,"w":4,"h":4,"abs_x":954,"abs_y":3745}' height="6" rx="1" width="6" x="2" y="16"></rect>
<rect bis_size='{"x":480,"y":3695,"w":4,"h":4,"abs_x":960,"abs_y":3734}' height="6" rx="1" width="6" x="9" y="2"></rect>
<path bis_size='{"x":476,"y":3703,"w":11,"h":3,"abs_x":956,"abs_y":3742}' d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path>
<path bis_size='{"x":482,"y":3699,"w":0,"h":3,"abs_x":962,"abs_y":3738}' d="M12 12V8"></path>
</svg>
</div>
<span bis_size='{"x":509,"y":3695,"w":50,"h":16,"abs_x":989,"abs_y":3734}' className="text-purple-400 font-semibold tracking-wide text-sm uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Phase 2
                  </span>
</div>
<h3 bis_size='{"x":465,"y":3739,"w":336,"h":58,"abs_x":945,"abs_y":3778}' className="text-3xl font-semibold text-white tracking-tight mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Signal Mapping &amp; Data Collection
                </h3>
<p bis_size='{"x":465,"y":3811,"w":336,"h":84,"abs_x":945,"abs_y":3850}' className="text-neutral-400 leading-relaxed mb-8" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Most signals don't live in standard databases. We build custom
                  AI agents to find specific certifications, forum posts, or
                  tech stack changes that indicate buying intent.
                </p>
<div bis_size='{"x":465,"y":3921,"w":336,"h":51,"abs_x":945,"abs_y":3960}' className="space-y-4">
<div bis_size='{"x":465,"y":3921,"w":336,"h":19,"abs_x":945,"abs_y":3960}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":3924,"w":16,"h":16,"abs_x":945,"abs_y":3963}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":3928,"w":9,"h":9,"abs_x":949,"abs_y":3967}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":3930,"w":6,"h":4,"abs_x":950,"abs_y":3969}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":3921,"w":192,"h":16,"abs_x":971,"abs_y":3960}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Custom scrapers for unique signals
                    </span>
</div>
<div bis_size='{"x":465,"y":3954,"w":336,"h":19,"abs_x":945,"abs_y":3993}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":3957,"w":16,"h":16,"abs_x":945,"abs_y":3996}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":3960,"w":9,"h":9,"abs_x":949,"abs_y":3999}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":3962,"w":6,"h":4,"abs_x":950,"abs_y":4001}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":3954,"w":183,"h":16,"abs_x":971,"abs_y":3993}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Automated enrichment workflows
                    </span>
</div>
</div>
</div>
<div bis_size='{"x":841,"y":3619,"w":338,"h":420,"abs_x":1321,"abs_y":3658}' className="md:w-1/2 bg-black rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center font-mono">
<div bis_size='{"x":861,"y":3793,"w":298,"h":13,"abs_x":1341,"abs_y":3832}' className="text-xs text-green-500 mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>
                  &gt; Initiating scan for "Soc2 Type II"...
                </div>
<div bis_size='{"x":861,"y":3809,"w":298,"h":50,"abs_x":1341,"abs_y":3848}' className="bg-neutral-800/50 p-3 rounded mb-2 border-l-2 border-[#00ffc4]">
<div bis_size='{"x":872,"y":3819,"w":277,"h":15,"abs_x":1352,"abs_y":3858}' className="text-[10px] text-neutral-400 mb-1" style={{transition: 'outline 0.1s ease-in-out'}}>
                    MATCH FOUND: Acme Corp
                  </div>
<div bis_size='{"x":872,"y":3837,"w":277,"h":13,"abs_x":1352,"abs_y":3876}' className="text-xs text-white" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Signal: "Hiring Head of Security"
                  </div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":426,"y":4118,"w":793,"h":500,"abs_x":906,"abs_y":4157}' className="sticky top-32 z-30 mb-12">
<div bis_size='{"x":426,"y":4118,"w":793,"h":500,"abs_x":906,"abs_y":4157}' className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div bis_size='{"x":465,"y":4158,"w":336,"h":420,"abs_x":945,"abs_y":4197}' className="md:w-1/2 flex flex-col justify-center">
<div bis_size='{"x":465,"y":4250,"w":336,"h":33,"abs_x":945,"abs_y":4289}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":465,"y":4250,"w":33,"h":33,"abs_x":945,"abs_y":4289}' className="bg-blue-900/30 text-blue-400 p-2 rounded-lg border border-blue-500/20">
<svg bis_size='{"x":472,"y":4257,"w":19,"h":19,"abs_x":952,"abs_y":4296}' className="lucide lucide-send w-6 h-6" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":474,"y":4259,"w":16,"h":16,"abs_x":954,"abs_y":4298}' d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path bis_size='{"x":481,"y":4259,"w":8,"h":8,"abs_x":961,"abs_y":4298}' d="m21.854 2.147-10.94 10.939"></path>
</svg>
</div>
<span bis_size='{"x":509,"y":4259,"w":50,"h":16,"abs_x":989,"abs_y":4298}' className="text-blue-400 font-semibold tracking-wide text-sm uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Phase 3
                  </span>
</div>
<h3 bis_size='{"x":465,"y":4303,"w":336,"h":29,"abs_x":945,"abs_y":4342}' className="text-3xl font-semibold text-white tracking-tight mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
                  1:1 Outreach
                </h3>
<p bis_size='{"x":465,"y":4345,"w":336,"h":63,"abs_x":945,"abs_y":4384}' className="text-neutral-400 leading-relaxed mb-8" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Every message is crafted for that specific person. AI takes
                  gathered signals and writes copy that's relevant, timely, and
                  actually worth replying to. No templates.
                </p>
<div bis_size='{"x":465,"y":4435,"w":336,"h":51,"abs_x":945,"abs_y":4474}' className="space-y-4">
<div bis_size='{"x":465,"y":4435,"w":336,"h":19,"abs_x":945,"abs_y":4474}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":4438,"w":16,"h":16,"abs_x":945,"abs_y":4477}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":4441,"w":9,"h":9,"abs_x":949,"abs_y":4480}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":4444,"w":6,"h":4,"abs_x":950,"abs_y":4483}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":4435,"w":193,"h":16,"abs_x":971,"abs_y":4474}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Messages referencing specific pain
                    </span>
</div>
<div bis_size='{"x":465,"y":4467,"w":336,"h":19,"abs_x":945,"abs_y":4506}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":4471,"w":16,"h":16,"abs_x":945,"abs_y":4510}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":4474,"w":9,"h":9,"abs_x":949,"abs_y":4513}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":4476,"w":6,"h":4,"abs_x":950,"abs_y":4515}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":4467,"w":206,"h":16,"abs_x":971,"abs_y":4506}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Offers positioned around their context
                    </span>
</div>
</div>
</div>
<div bis_size='{"x":841,"y":4158,"w":338,"h":420,"abs_x":1321,"abs_y":4197}' className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div bis_size='{"x":861,"y":4333,"w":298,"h":70,"abs_x":1341,"abs_y":4372}' className="bg-neutral-800 rounded-xl shadow-sm border border-white/10 overflow-hidden p-5">
<p bis_size='{"x":877,"y":4350,"w":264,"h":36,"abs_x":1357,"abs_y":4389}' className="text-sm text-neutral-200 leading-relaxed" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Hey James, Saw you guys just posted looking for a
                    <span bis_size='{"x":887,"y":4371,"w":100,"h":13,"abs_x":1367,"abs_y":4410}' className="bg-yellow-900/50 text-yellow-200 px-1 rounded" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Head of Security
                    </span>
                    ...
                  </p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":426,"y":4657,"w":793,"h":500,"abs_x":906,"abs_y":4696}' className="sticky top-36 z-40 mb-12">
<div bis_size='{"x":426,"y":4657,"w":793,"h":500,"abs_x":906,"abs_y":4696}' className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div bis_size='{"x":465,"y":4697,"w":336,"h":420,"abs_x":945,"abs_y":4736}' className="md:w-1/2 flex flex-col justify-center">
<div bis_size='{"x":465,"y":4789,"w":336,"h":33,"abs_x":945,"abs_y":4828}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":465,"y":4789,"w":33,"h":33,"abs_x":945,"abs_y":4828}' className="bg-pink-900/30 text-pink-400 p-2 rounded-lg border border-pink-500/20">
<svg bis_size='{"x":472,"y":4796,"w":19,"h":19,"abs_x":952,"abs_y":4835}' className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":474,"y":4799,"w":16,"h":15,"abs_x":954,"abs_y":4838}' d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<span bis_size='{"x":509,"y":4798,"w":50,"h":16,"abs_x":989,"abs_y":4837}' className="text-pink-400 font-semibold tracking-wide text-sm uppercase" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Phase 4
                  </span>
</div>
<h3 bis_size='{"x":465,"y":4842,"w":336,"h":29,"abs_x":945,"abs_y":4881}' className="text-3xl font-semibold text-white tracking-tight mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Reply Handling &amp; Booking
                </h3>
<p bis_size='{"x":465,"y":4884,"w":336,"h":63,"abs_x":945,"abs_y":4923}' className="text-neutral-400 leading-relaxed mb-8" style={{transition: 'outline 0.1s ease-in-out'}}>
                  We don't just dump positive replies in your inbox. We handle
                  the back-and-forth, overcome objections, and book the meeting
                  directly on your calendar.
                </p>
<div bis_size='{"x":465,"y":4974,"w":336,"h":51,"abs_x":945,"abs_y":5013}' className="space-y-4">
<div bis_size='{"x":465,"y":4974,"w":336,"h":19,"abs_x":945,"abs_y":5013}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":4977,"w":16,"h":16,"abs_x":945,"abs_y":5016}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":4980,"w":9,"h":9,"abs_x":949,"abs_y":5019}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":4983,"w":6,"h":4,"abs_x":950,"abs_y":5022}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":4974,"w":156,"h":16,"abs_x":971,"abs_y":5013}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Replies handled within hours
                    </span>
</div>
<div bis_size='{"x":465,"y":5006,"w":336,"h":19,"abs_x":945,"abs_y":5045}' className="flex items-start gap-3">
<div bis_size='{"x":465,"y":5010,"w":16,"h":16,"abs_x":945,"abs_y":5049}' className="mt-1 bg-[#059669]/20 p-1 rounded-full">
<svg bis_size='{"x":469,"y":5013,"w":9,"h":9,"abs_x":949,"abs_y":5052}' className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":470,"y":5015,"w":6,"h":4,"abs_x":950,"abs_y":5054}' d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span bis_size='{"x":491,"y":5006,"w":187,"h":16,"abs_x":971,"abs_y":5045}' className="text-sm text-neutral-300 font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>
                      Objections managed automatically
                    </span>
</div>
</div>
</div>
<div bis_size='{"x":841,"y":4697,"w":338,"h":420,"abs_x":1321,"abs_y":4736}' className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center items-center">
<div bis_size='{"x":861,"y":4883,"w":298,"h":49,"abs_x":1341,"abs_y":4922}' className="bg-neutral-800 w-full rounded-xl border border-[#00ffc4]/20 p-3 shadow-sm flex items-center gap-3">
<div bis_size='{"x":871,"y":4893,"w":29,"h":29,"abs_x":1351,"abs_y":4932}' className="bg-[#00ffc4]/10 p-2 rounded-lg text-[#00ffc4]">
<svg bis_size='{"x":877,"y":4899,"w":16,"h":16,"abs_x":1357,"abs_y":4938}' className="lucide lucide-calendar-check w-5 h-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path bis_size='{"x":883,"y":4901,"w":0,"h":2,"abs_x":1363,"abs_y":4940}' d="M8 2v4"></path>
<path bis_size='{"x":888,"y":4901,"w":0,"h":2,"abs_x":1368,"abs_y":4940}' d="M16 2v4"></path>
<rect bis_size='{"x":879,"y":4902,"w":12,"h":12,"abs_x":1359,"abs_y":4941}' height="18" rx="2" width="18" x="3" y="4"></rect>
<path bis_size='{"x":879,"y":4906,"w":12,"h":0,"abs_x":1359,"abs_y":4945}' d="M3 10h18"></path>
<path bis_size='{"x":884,"y":4909,"w":4,"h":2,"abs_x":1364,"abs_y":4948}' d="m9 16 2 2 4-4"></path>
</svg>
</div>
<div bis_size='{"x":910,"y":4907,"w":0,"h":0,"abs_x":1390,"abs_y":4946}'>
<div bis_size='{"x":910,"y":4907,"w":0,"h":0,"abs_x":1390,"abs_y":4946}' className="text-xs font-bold text-white"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
