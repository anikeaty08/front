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
      

<nav bis_size='{"x":0,"y":0,"w":1192,"h":81,"abs_x":480,"abs_y":43}' className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-transparent">
<div className="fixed left-1/2 top-6 z-50 flex w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border border-gray-200/50 bg-white/70 px-6 py-3 shadow-xl backdrop-blur-xl transition-all">

<div className="flex items-center gap-2">
<svg className="text-black" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L12 22" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M2 12L22 12" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M4.929 4.929L19.071 19.071" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
<path d="M19.071 4.929L4.929 19.071" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
</svg>
<span className="text-lg font-medium tracking-tight text-gray-800">/ hello@reel.ai</span>
</div>

<div className="hidden items-center gap-8 md:flex">
<a className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-black" href="#">
            Products <svg aria-hidden="true" className="lucide lucide-chevron-down h-3 w-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<a className="text-sm font-medium text-gray-600 transition-colors hover:text-black" href="#">Customer Stories</a>
<a className="text-sm font-medium text-gray-600 transition-colors hover:text-black" href="#">Resources</a>
<a className="text-sm font-medium text-gray-600 transition-colors hover:text-black" href="#">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-black sm:block" href="#">Book A Demo</a>
<a className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800" href="#">
            Get Started
        </a>
</div>
</div>
</nav>

<main bis_size='{"x":0,"y":81,"w":1192,"h":1467,"abs_x":480,"abs_y":124}' className="pt-20 pb-10">

<div bis_size='{"x":148,"y":161,"w":896,"h":316,"abs_x":628,"abs_y":204}' className="max-w-4xl mx-auto text-center px-4 mb-16 relative z-10">
<h1 bis_size='{"x":164,"y":161,"w":864,"h":144,"abs_x":644,"abs_y":204}' className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight text-gray-900 mb-6">
                AI-Driven Conversion <br bis_size='{"x":927,"y":156,"w":0,"h":82,"abs_x":1407,"abs_y":199}'/>
<span bis_size='{"x":285,"y":228,"w":620,"h":82,"abs_x":765,"abs_y":271}' className="italic font-light">Growth Right Away</span>
</h1>
<p bis_size='{"x":260,"y":329,"w":672,"h":58,"abs_x":740,"abs_y":372}' className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                From concept to conversion — manage thousands of successful influencers ads seamlessly.
            </p>
<div bis_size='{"x":164,"y":427,"w":864,"h":50,"abs_x":644,"abs_y":470}' className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
<button bis_size='{"x":410,"y":428,"w":187,"h":48,"abs_x":890,"abs_y":471}' className="bg-gray-900 text-white px-7 py-3.5 rounded-full font-medium text-sm hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
                    Download Free App
                </button>
<button bis_size='{"x":613,"y":427,"w":167,"h":50,"abs_x":1093,"abs_y":470}' className="bg-white text-gray-900 border border-gray-300 px-7 py-3.5 rounded-full font-medium text-sm hover:border-gray-400 transition-all w-full sm:w-auto">
                    Get Started Free
                </button>
</div>
</div>

<div bis_size='{"x":0,"y":541,"w":1192,"h":800,"abs_x":480,"abs_y":584}' className="relative w-full max-w-[1400px] mx-auto h-[650px] md:h-[800px] overflow-hidden md:overflow-visible mt-10 flex justify-center">

<div bis_size='{"x":196,"y":541,"w":800,"h":800,"abs_x":676,"abs_y":584}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-50/50 rounded-full blur-3xl -z-10"></div>
<div bis_size='{"x":296,"y":701,"w":600,"h":600,"abs_x":776,"abs_y":744}' className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full -z-10"></div>
<div bis_size='{"x":146,"y":621,"w":900,"h":900,"abs_x":626,"abs_y":664}' className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] border border-gray-100 rounded-full -z-10"></div>
<div bis_size='{"x":-4,"y":541,"w":1200,"h":1200,"abs_x":476,"abs_y":584}' className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] border border-gray-100 rounded-full -z-10"></div>

<div bis_size='{"x":446,"y":581,"w":300,"h":600,"abs_x":926,"abs_y":624}' className="relative z-20 mt-10 w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-gray-900/10">
<div bis_size='{"x":458,"y":593,"w":276,"h":576,"abs_x":938,"abs_y":636}' className="relative w-full h-full bg-gray-800 rounded-[2.5rem] overflow-hidden">

<div bis_size='{"x":458,"y":593,"w":276,"h":32,"abs_x":938,"abs_y":636}' className="absolute top-0 left-0 w-full h-8 z-30 flex justify-center pt-2">
<div bis_size='{"x":556,"y":601,"w":80,"h":20,"abs_x":1036,"abs_y":644}' className="w-20 h-5 bg-black rounded-b-xl"></div>
</div>

<img alt="Influencer Video" bis_size='{"x":458,"y":593,"w":276,"h":576,"abs_x":938,"abs_y":636}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div bis_size='{"x":474,"y":633,"w":244,"h":32,"abs_x":954,"abs_y":676}' className="absolute top-10 left-4 right-4 flex justify-between items-center">
<div bis_size='{"x":474,"y":633,"w":129,"h":32,"abs_x":954,"abs_y":676}' className="flex items-center gap-2 bg-black/20 backdrop-blur-md px-2 py-1 rounded-full">
<img alt="Avatar" bis_size='{"x":482,"y":637,"w":24,"h":24,"abs_x":962,"abs_y":680}' className="w-6 h-6 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<span bis_size='{"x":514,"y":641,"w":81,"h":16,"abs_x":994,"abs_y":684}' className="text-white text-xs font-medium pr-1">Wade Warren</span>
</div>
<div bis_size='{"x":674,"y":640,"w":43,"h":19,"abs_x":1154,"abs_y":683}' className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
<span bis_size='{"x":682,"y":647,"w":4,"h":4,"abs_x":1162,"abs_y":690}' className="w-1 h-1 bg-white rounded-full animate-pulse"></span> Live
                        </div>
</div>
</div>
</div>


<div bis_size='{"x":119,"y":621,"w":192,"h":176,"abs_x":599,"abs_y":664}' className="hidden md:block absolute top-[10%] left-[10%] xl:left-[18%] bg-blue-100 rounded-3xl p-0 w-48 shadow-lg hover:-translate-y-1 transition-transform duration-500 cursor-default">
<div bis_size='{"x":119,"y":621,"w":192,"h":128,"abs_x":599,"abs_y":664}' className="relative h-32 bg-blue-200/50 rounded-t-3xl overflow-hidden">
<span bis_size='{"x":131,"y":633,"w":36,"h":19,"abs_x":611,"abs_y":676}' className="absolute top-3 left-3 bg-white/90 px-2 py-0.5 rounded text-[10px] font-semibold text-gray-700">2:01</span>
<img alt="Product" bis_size='{"x":119,"y":621,"w":192,"h":128,"abs_x":599,"abs_y":664}' className="w-full h-full object-cover mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div bis_size='{"x":119,"y":749,"w":192,"h":48,"abs_x":599,"abs_y":792}' className="h-12"></div> 
</div>

<div bis_size='{"x":816,"y":661,"w":256,"h":152,"abs_x":1296,"abs_y":704}' className="hidden md:flex absolute top-[15%] right-[10%] xl:right-[18%] bg-green-200/80 backdrop-blur-sm rounded-3xl p-6 w-64 shadow-lg items-center justify-between hover:-translate-y-1 transition-transform duration-500 cursor-default">
<div bis_size='{"x":840,"y":685,"w":82,"h":104,"abs_x":1320,"abs_y":728}'>
<div bis_size='{"x":840,"y":685,"w":82,"h":40,"abs_x":1320,"abs_y":728}' className="flex items-baseline gap-1">
<span bis_size='{"x":840,"y":685,"w":21,"h":40,"abs_x":1320,"abs_y":728}' className="text-4xl font-serif text-gray-900">8</span>
<span bis_size='{"x":866,"y":703,"w":36,"h":20,"abs_x":1346,"abs_y":746}' className="text-sm font-medium text-gray-700">items</span>
</div>
<p bis_size='{"x":840,"y":729,"w":82,"h":16,"abs_x":1320,"abs_y":772}' className="text-xs text-gray-600 mt-1">Sold this week</p>
<div bis_size='{"x":840,"y":757,"w":47,"h":32,"abs_x":1320,"abs_y":800}' className="mt-3 bg-white/80 inline-block px-3 py-1 rounded-full">
<span bis_size='{"x":852,"y":765,"w":23,"h":17,"abs_x":1332,"abs_y":808}' className="text-sm font-bold text-gray-900">$12</span>
</div>
</div>
<div bis_size='{"x":984,"y":689,"w":64,"h":96,"abs_x":1464,"abs_y":732}' className="relative w-16 h-24">
<img alt="Bottle" bis_size='{"x":975,"y":683,"w":82,"h":107,"abs_x":1455,"abs_y":726}' className="absolute w-full h-full object-cover rounded-md rotate-12 shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div bis_size='{"x":59,"y":1057,"w":256,"h":124,"abs_x":539,"abs_y":1100}' className="hidden md:block absolute bottom-[20%] left-[5%] xl:left-[15%] bg-yellow-200 rounded-2xl p-6 w-64 shadow-lg hover:-translate-y-1 transition-transform duration-500 cursor-default">
<div bis_size='{"x":83,"y":1081,"w":208,"h":32,"abs_x":563,"abs_y":1124}' className="flex justify-between items-start mb-2">
<div bis_size='{"x":83,"y":1081,"w":44,"h":32,"abs_x":563,"abs_y":1124}' className="flex items-end gap-1 h-8">
<div bis_size='{"x":83,"y":1097,"w":8,"h":16,"abs_x":563,"abs_y":1140}' className="w-2 bg-gray-900 h-4 rounded-sm"></div>
<div bis_size='{"x":95,"y":1089,"w":8,"h":24,"abs_x":575,"abs_y":1132}' className="w-2 bg-gray-900 h-6 rounded-sm"></div>
<div bis_size='{"x":107,"y":1101,"w":8,"h":12,"abs_x":587,"abs_y":1144}' className="w-2 bg-gray-800/30 h-3 rounded-sm"></div>
<div bis_size='{"x":119,"y":1081,"w":8,"h":32,"abs_x":599,"abs_y":1124}' className="w-2 bg-gray-900 h-8 rounded-sm"></div>
</div>
<span bis_size='{"x":218,"y":1081,"w":72,"h":15,"abs_x":698,"abs_y":1124}' className="text-[10px] uppercase tracking-wide text-gray-600 font-medium">Engagement</span>
</div>
<div bis_size='{"x":83,"y":1121,"w":208,"h":36,"abs_x":563,"abs_y":1164}' className="flex items-center justify-between">
<span bis_size='{"x":83,"y":1121,"w":59,"h":36,"abs_x":563,"abs_y":1164}' className="text-3xl font-serif text-gray-900">40%</span>
<svg aria-hidden="true" bis_size='{"x":271,"y":1129,"w":20,"h":20,"abs_x":751,"abs_y":1172}' className="lucide lucide-eye w-5 h-5 text-gray-900" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>

<div bis_size='{"x":892,"y":959,"w":240,"h":182,"abs_x":1372,"abs_y":1002}' className="hidden md:block absolute bottom-[25%] right-[5%] xl:right-[15%] bg-white rounded-2xl p-3 w-60 shadow-xl border border-gray-100 hover:-translate-y-1 transition-transform duration-500 cursor-default">
<div bis_size='{"x":905,"y":972,"w":214,"h":128,"abs_x":1385,"abs_y":1015}' className="relative h-32 rounded-xl overflow-hidden mb-3">
<img alt="Fashion" bis_size='{"x":905,"y":972,"w":214,"h":128,"abs_x":1385,"abs_y":1015}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
<div bis_size='{"x":913,"y":1073,"w":31,"h":19,"abs_x":1393,"abs_y":1116}' className="absolute bottom-2 left-2 bg-gray-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">1.5k</div>
</div>
<div bis_size='{"x":905,"y":1112,"w":214,"h":16,"abs_x":1385,"abs_y":1155}' className="flex items-center justify-between px-1">
<div bis_size='{"x":909,"y":1112,"w":72,"h":16,"abs_x":1389,"abs_y":1155}' className="flex gap-3 text-gray-400">
<svg aria-hidden="true" bis_size='{"x":909,"y":1112,"w":16,"h":16,"abs_x":1389,"abs_y":1155}' className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<svg aria-hidden="true" bis_size='{"x":937,"y":1112,"w":16,"h":16,"abs_x":1417,"abs_y":1155}' className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg aria-hidden="true" bis_size='{"x":965,"y":1112,"w":16,"h":16,"abs_x":1445,"abs_y":1155}' className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
</div>
<svg aria-hidden="true" bis_size='{"x":1096,"y":1109,"w":22,"h":22,"abs_x":1576,"abs_y":1152}' className="lucide lucide-send w-4 h-4 text-gray-400 -rotate-45" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
</div>

<div bis_size='{"x":298,"y":1033,"w":108,"h":28,"abs_x":778,"abs_y":1076}' className="hidden md:flex absolute bottom-[35%] left-[25%] xl:left-[32%] bg-pink-100 rounded-full px-4 py-2 shadow-sm gap-1 items-center z-10">
<svg aria-hidden="true" bis_size='{"x":314,"y":1041,"w":12,"h":12,"abs_x":794,"abs_y":1084}' className="lucide lucide-star w-3 h-3 text-black fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" bis_size='{"x":330,"y":1041,"w":12,"h":12,"abs_x":810,"abs_y":1084}' className="lucide lucide-star w-3 h-3 text-black fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" bis_size='{"x":346,"y":1041,"w":12,"h":12,"abs_x":826,"abs_y":1084}' className="lucide lucide-star w-3 h-3 text-black fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" bis_size='{"x":362,"y":1041,"w":12,"h":12,"abs_x":842,"abs_y":1084}' className="lucide lucide-star w-3 h-3 text-black fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" bis_size='{"x":378,"y":1041,"w":12,"h":12,"abs_x":858,"abs_y":1084}' className="lucide lucide-star w-3 h-3 text-black fill-black" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>

<div bis_size='{"x":20,"y":1421,"w":1152,"h":87,"abs_x":500,"abs_y":1464}' className="max-w-6xl mx-auto px-6 mt-12 md:mt-20">
<div bis_size='{"x":44,"y":1421,"w":1104,"h":87,"abs_x":524,"abs_y":1464}' className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">

<div bis_size='{"x":87,"y":1425,"w":97,"h":28,"abs_x":567,"abs_y":1468}' className="font-sans text-xl font-bold tracking-widest text-gray-800">HEIRESS</div>

<div bis_size='{"x":232,"y":1425,"w":54,"h":28,"abs_x":712,"abs_y":1468}' className="font-sans text-xl font-extrabold text-gray-900">TOZO</div>

<div bis_size='{"x":334,"y":1421,"w":134,"h":34,"abs_x":814,"abs_y":1464}' className="font-serif text-xl italic font-bold text-gray-800 -rotate-3">HELLBABES</div>

<div bis_size='{"x":515,"y":1425,"w":79,"h":28,"abs_x":995,"abs_y":1468}' className="font-serif text-xl font-medium text-gray-900">cocokind</div>

<div bis_size='{"x":643,"y":1425,"w":79,"h":28,"abs_x":1123,"abs_y":1468}' className="font-serif text-xl text-gray-800">Oxyfresh</div>

<div bis_size='{"x":771,"y":1421,"w":80,"h":35,"abs_x":1251,"abs_y":1464}' className="text-sm font-bold tracking-wider text-gray-900 text-center leading-tight">DOT &amp; KEY<span bis_size='{"x":788,"y":1444,"w":46,"h":10,"abs_x":1268,"abs_y":1487}' className="text-[8px] font-normal tracking-widest">SKINCARE</span></div>

<div bis_size='{"x":899,"y":1425,"w":75,"h":28,"abs_x":1379,"abs_y":1468}' className="font-serif italic text-xl font-medium text-gray-800">Skybags</div>

<div bis_size='{"x":1023,"y":1423,"w":81,"h":32,"abs_x":1503,"abs_y":1466}' className="font-serif text-xl font-bold text-gray-900 flex items-center gap-1">
<span bis_size='{"x":1023,"y":1423,"w":18,"h":32,"abs_x":1503,"abs_y":1466}' className="text-2xl">B</span>ellefit
                </div>

<div bis_size='{"x":528,"y":1488,"w":134,"h":20,"abs_x":1008,"abs_y":1531}' className="font-sans text-sm font-light tracking-[0.2em] text-gray-600 uppercase">Amazing Lace</div>
</div>
</div>
</main>


    </>
  );
}
