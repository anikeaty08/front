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
      

<nav bis_size='{"x":0,"y":0,"w":1230,"h":81,"abs_x":480,"abs_y":43}' className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div bis_size='{"x":0,"y":0,"w":1230,"h":80,"abs_x":480,"abs_y":43}' className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div bis_size='{"x":24,"y":26,"w":106,"h":28,"abs_x":504,"abs_y":69}' className="flex items-center">
<a bis_size='{"x":24,"y":26,"w":106,"h":28,"abs_x":504,"abs_y":69}' className="text-slate-900 text-lg tracking-tight font-sans" href="#" style={{}}>UKADR 2026</a>
</div>
<div bis_size='{"x":648,"y":22,"w":557,"h":36,"abs_x":1128,"abs_y":65}' className="hidden md:flex items-center space-x-8">
<a bis_size='{"x":648,"y":30,"w":39,"h":20,"abs_x":1128,"abs_y":73}' className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#about" style={{}}>About</a>
<a bis_size='{"x":720,"y":30,"w":52,"h":20,"abs_x":1200,"abs_y":73}' className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#themes" style={{}}>Themes</a>
<a bis_size='{"x":805,"y":30,"w":61,"h":20,"abs_x":1285,"abs_y":73}' className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#speakers" style={{}}>Speakers</a>
<a bis_size='{"x":898,"y":30,"w":46,"h":20,"abs_x":1378,"abs_y":73}' className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#submit" style={{}}>Submit</a>
<a bis_size='{"x":977,"y":30,"w":79,"h":20,"abs_x":1457,"abs_y":73}' className="text-sm text-slate-500 hover:text-slate-900 transition-colors font-sans" href="#registration" style={{}}>Registration</a>
<a bis_size='{"x":1089,"y":22,"w":116,"h":36,"abs_x":1569,"abs_y":65}' className="bg-slate-950 text-white text-xs px-5 py-2.5 hover:bg-slate-800 transition-colors font-sans" href="#registration" style={{}}>Register Now</a>
</div>
</div>
</nav>

<header bis_size='{"x":0,"y":81,"w":1230,"h":646,"abs_x":480,"abs_y":124}' className="border-slate-200 border-b scroll-mt-20" id="about">
<div className="max-w-7xl bg-slate-950 border-slate-800 border-r border-l mr-auto ml-auto pt-24 pr-6 pb-12 pl-6">
<div className="flex items-center gap-4 mb-6">
<div className="h-px w-12 bg-slate-700"></div>
<span className="text-sm text-slate-400 tracking-wide font-sans">10th Anniversary Annual Conference</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-6xl text-white max-w-5xl mb-8 font-playfair font-light tracking-tighter">
                Science, Society,<br/>and Solidarity
            </h1>
<div className="max-w-2xl">
<p className="text-lg text-slate-300 font-sans mb-2">
                    Transforming Crisis and Disaster Management Research for a Polycrisis World and the Post-2030 Global Agenda.
                </p>
<p className="text-sm text-slate-500 font-sans">
                    Join us for a critical intervention into the future of resilience. A decade of research, defining the next century of survival.
                </p>
</div>
</div>

<div bis_size='{"x":0,"y":597,"w":1230,"h":129,"abs_x":480,"abs_y":640}' className="max-w-7xl mx-auto border-t border-l border-r border-slate-200 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div bis_size='{"x":1,"y":598,"w":307,"h":128,"abs_x":481,"abs_y":641}' className="md:p-8 flex flex-col hover:bg-slate-50 transition-colors h-full pt-6 pr-6 pb-6 pl-6 justify-between">
<span bis_size='{"x":33,"y":630,"w":243,"h":16,"abs_x":513,"abs_y":673}' className="uppercase text-xs text-slate-400 tracking-wider mb-2 font-sans" style={{}}>Date</span>
<span bis_size='{"x":33,"y":670,"w":243,"h":24,"abs_x":513,"abs_y":713}' className="text-slate-900 font-sans" style={{}}>14-15 September 2026</span>
</div>
<div bis_size='{"x":308,"y":598,"w":307,"h":128,"abs_x":788,"abs_y":641}' className="md:p-8 flex flex-col hover:bg-slate-50 transition-colors h-full pt-6 pr-6 pb-6 pl-6 justify-between">
<span bis_size='{"x":341,"y":630,"w":242,"h":16,"abs_x":821,"abs_y":673}' className="uppercase text-xs text-slate-400 tracking-wider mb-0 font-sans" style={{}}>Location</span>
<span bis_size='{"x":341,"y":646,"w":242,"h":48,"abs_x":821,"abs_y":689}' className="text-slate-900 font-sans" style={{}}>Aston University, Birmingham, UK</span>
</div>
<div bis_size='{"x":615,"y":598,"w":307,"h":128,"abs_x":1095,"abs_y":641}' className="md:p-8 flex flex-col hover:bg-slate-50 transition-colors h-full pt-6 pr-6 pb-6 pl-6 justify-between">
<span bis_size='{"x":648,"y":630,"w":242,"h":16,"abs_x":1128,"abs_y":673}' className="text-xs text-slate-400 uppercase tracking-wider mb-2 font-sans" style={{}}>Theme</span>
<span bis_size='{"x":648,"y":654,"w":242,"h":40,"abs_x":1128,"abs_y":697}' className="text-slate-900 leading-tight font-sans" style={{}}>Transforming Crisis &amp; Disaster Management</span>
</div>
<a bis_size='{"x":922,"y":598,"w":307,"h":128,"abs_x":1402,"abs_y":641}' className="p-6 md:p-8 h-full flex items-center justify-center md:justify-start hover:bg-slate-50 transition-colors cursor-pointer group" href="#themes">
<div bis_size='{"x":955,"y":650,"w":152,"h":24,"abs_x":1435,"abs_y":693}' className="flex items-center gap-3">
<svg aria-hidden="true" bis_size='{"x":955,"y":652,"w":20,"h":20,"abs_x":1435,"abs_y":695}' className="lucide lucide-arrow-down w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span bis_size='{"x":987,"y":650,"w":120,"h":24,"abs_x":1467,"abs_y":693}' className="text-slate-600 group-hover:text-slate-900 transition-colors font-sans" style={{}}>Scroll to Explore</span>
</div>
</a>
</div>
</header>

<section bis_size='{"x":0,"y":727,"w":1230,"h":669,"abs_x":480,"abs_y":770}' className="border-b">
<div bis_size='{"x":0,"y":727,"w":1230,"h":668,"abs_x":480,"abs_y":770}' className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 border-l border-r border-slate-200">
<div bis_size='{"x":1,"y":727,"w":614,"h":668,"abs_x":481,"abs_y":770}' className="md:p-16 lg:pr-24 flex flex-col lg:border-b-0 lg:border-r border-slate-200 border-b pt-8 pr-8 pb-8 pl-8 justify-center">
<h2 bis_size='{"x":65,"y":791,"w":453,"h":40,"abs_x":545,"abs_y":834}' className="md:text-4xl text-3xl text-slate-900 mb-8 font-playfair font-light tracking-tighter" style={{}}>The Age of Polycrisis</h2>
<div bis_size='{"x":65,"y":863,"w":453,"h":345,"abs_x":545,"abs_y":906}' className="space-y-6 text-lg text-slate-600 leading-relaxed">
<p bis_size='{"x":65,"y":863,"w":453,"h":117,"abs_x":545,"abs_y":906}' className="font-sans" style={{}}>
                        We live in an age of polycrisis, where climate extremes, pandemics, conflicts, urban vulnerabilities, political instability, and technological disruptions and systemic shocks collide to create complex and cascading risks.
                    </p>
<p bis_size='{"x":65,"y":1004,"w":453,"h":204,"abs_x":545,"abs_y":1047}' className="font-sans" style={{}}>
                        As the world looks beyond the 2030 Sustainable Development Goals, crisis and disaster management research must evolve to meet new governance, social justice, and technological challenges. Building resilience requires rethinking not only scientific approaches but also governance structures, cultural systems, and community practices.
                    </p>
</div>
<div bis_size='{"x":65,"y":1248,"w":453,"h":82,"abs_x":545,"abs_y":1291}' className="mt-10 pl-6 border-l-4 border-slate-900">
<p bis_size='{"x":93,"y":1248,"w":425,"h":82,"abs_x":573,"abs_y":1291}' className="text-xl text-slate-900 leading-snug font-sans" style={{}}>
                        "This conference reimagines crisis and disaster research through the lenses of science, society, and solidarity."
                    </p>
</div>
</div>
<div bis_size='{"x":615,"y":727,"w":614,"h":668,"abs_x":1095,"abs_y":770}' className="relative h-96 lg:h-auto bg-slate-100 overflow-hidden">
<img alt="House collapsing due to coastal erosion" bis_size='{"x":615,"y":727,"w":614,"h":668,"abs_x":1095,"abs_y":770}' className="absolute inset-0 w-full h-full object-cover grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1396,"w":1230,"h":832,"abs_x":480,"abs_y":1439}' className="max-w-7xl mx-auto py-20 px-6 border-l border-r border-slate-200 scroll-mt-20" id="themes">
<div bis_size='{"x":25,"y":1476,"w":1180,"h":57,"abs_x":505,"abs_y":1519}' className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200">
<h2 bis_size='{"x":25,"y":1476,"w":365,"h":40,"abs_x":505,"abs_y":1519}' className="text-3xl md:text-4xl text-slate-900 font-playfair font-light tracking-tighter" style={{}}>Conference Subthemes</h2>
<span bis_size='{"x":1077,"y":1496,"w":127,"h":20,"abs_x":1557,"abs_y":1539}' className="text-sm text-slate-400 uppercase tracking-widest mt-4 md:mt-0 font-sans" style={{}}>04 Sub Themes</span>
</div>
<div bis_size='{"x":25,"y":1565,"w":1180,"h":583,"abs_x":505,"abs_y":1608}' className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-slate-200">

<div bis_size='{"x":26,"y":1566,"w":589,"h":289,"abs_x":506,"abs_y":1609}' className="border-r border-b border-slate-200 p-8 md:p-12 hover:bg-slate-50 transition-colors">
<span bis_size='{"x":74,"y":1614,"w":492,"h":32,"abs_x":554,"abs_y":1657}' className="text-2xl text-slate-900 block mb-3 font-playfair font-light tracking-tighter" style={{}}>01</span>
<h3 bis_size='{"x":74,"y":1658,"w":492,"h":28,"abs_x":554,"abs_y":1701}' className="text-xl text-slate-900 mb-4 font-sans" style={{}}>Multi-Hazard, Cascading, and Transboundary Risks</h3>
<ul bis_size='{"x":74,"y":1702,"w":492,"h":56,"abs_x":554,"abs_y":1745}' className="list-disc list-inside text-slate-600 space-y-2 text-base">
<li bis_size='{"x":74,"y":1702,"w":492,"h":24,"abs_x":554,"abs_y":1745}' className="font-sans" style={{}}>Lessons from past floods, earthquakes, pandemics, and wildfires</li>
<li bis_size='{"x":74,"y":1734,"w":492,"h":24,"abs_x":554,"abs_y":1777}' className="font-sans" style={{}}>Anticipating systemic risks and "black swan" events</li>
</ul>
</div>

<div bis_size='{"x":615,"y":1566,"w":589,"h":289,"abs_x":1095,"abs_y":1609}' className="border-r border-b border-slate-200 p-8 md:p-12 hover:bg-slate-50 transition-colors">
<span bis_size='{"x":663,"y":1614,"w":492,"h":32,"abs_x":1143,"abs_y":1657}' className="text-2xl text-slate-900 block mb-3 font-playfair font-light tracking-tighter" style={{}}>02</span>
<h3 bis_size='{"x":663,"y":1658,"w":492,"h":28,"abs_x":1143,"abs_y":1701}' className="text-xl text-slate-900 mb-4 font-sans" style={{}}>Governance, Power, Trade, and Policy Coherence</h3>
<ul bis_size='{"x":663,"y":1702,"w":492,"h":104,"abs_x":1143,"abs_y":1745}' className="list-disc list-inside text-slate-600 space-y-2 text-base">
<li bis_size='{"x":663,"y":1702,"w":492,"h":48,"abs_x":1143,"abs_y":1745}' className="font-sans" style={{}}>Comparative approaches across democracies, authoritarian regimes, and fragile states</li>
<li bis_size='{"x":663,"y":1758,"w":492,"h":48,"abs_x":1143,"abs_y":1801}' className="font-sans" style={{}}>Bridging climate change, DRR, trade, and sustainable development agendas</li>
</ul>
</div>

<div bis_size='{"x":26,"y":1855,"w":589,"h":293,"abs_x":506,"abs_y":1898}' className="border-r border-b border-slate-200 p-8 md:p-12 hover:bg-slate-50 transition-colors">
<span bis_size='{"x":74,"y":1903,"w":492,"h":32,"abs_x":554,"abs_y":1946}' className="text-2xl text-slate-900 block mb-3 font-playfair font-light tracking-tighter" style={{}}>03</span>
<h3 bis_size='{"x":74,"y":1947,"w":492,"h":28,"abs_x":554,"abs_y":1990}' className="text-xl text-slate-900 mb-4 font-sans" style={{}}>Emerging Technology, AI, and Digital Innovation</h3>
<ul bis_size='{"x":74,"y":1991,"w":492,"h":56,"abs_x":554,"abs_y":2034}' className="list-disc list-inside text-slate-600 space-y-2 text-base">
<li bis_size='{"x":74,"y":1991,"w":492,"h":24,"abs_x":554,"abs_y":2034}' className="font-sans" style={{}}>Digital twins, VR/AR simulations, and predictive analytics</li>
<li bis_size='{"x":74,"y":2023,"w":492,"h":24,"abs_x":554,"abs_y":2066}' className="font-sans" style={{}}>Ethics, data governance, and the limits of techno-solutionism</li>
</ul>
</div>

<div bis_size='{"x":615,"y":1855,"w":589,"h":293,"abs_x":1095,"abs_y":1898}' className="border-r border-b border-slate-200 p-8 md:p-12 hover:bg-slate-50 transition-colors">
<span bis_size='{"x":663,"y":1903,"w":492,"h":32,"abs_x":1143,"abs_y":1946}' className="text-2xl text-slate-900 block mb-3 font-playfair font-light tracking-tighter" style={{}}>04</span>
<h3 bis_size='{"x":663,"y":1947,"w":492,"h":56,"abs_x":1143,"abs_y":1990}' className="text-xl text-slate-900 mb-4 font-sans" style={{}}>Search and Rescue (SAR) and Next-Generation Leadership for Emergency and Crisis</h3>
<ul bis_size='{"x":663,"y":2019,"w":492,"h":80,"abs_x":1143,"abs_y":2062}' className="list-disc list-inside text-slate-600 space-y-2 text-base">
<li bis_size='{"x":663,"y":2019,"w":492,"h":24,"abs_x":1143,"abs_y":2062}' className="font-sans" style={{}}>Innovative training methods</li>
<li bis_size='{"x":663,"y":2051,"w":492,"h":48,"abs_x":1143,"abs_y":2094}' className="font-sans" style={{}}>Building transdisciplinary curricula and practitioner-researcher networks</li>
</ul>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2228,"w":1230,"h":1288,"abs_x":480,"abs_y":2271}' className="max-w-7xl mx-auto pb-24 px-6 border-l border-r border-slate-200 scroll-mt-20" id="speakers">
<div bis_size='{"x":25,"y":2228,"w":1180,"h":80,"abs_x":505,"abs_y":2271}' className="mb-12">
<h2 bis_size='{"x":25,"y":2228,"w":1180,"h":40,"abs_x":505,"abs_y":2271}' className="text-3xl md:text-4xl text-slate-900 mb-3 font-playfair font-light tracking-tighter" style={{}}>Key Speakers</h2>
<p bis_size='{"x":25,"y":2280,"w":1180,"h":28,"abs_x":505,"abs_y":2323}' className="text-slate-500 text-lg font-sans" style={{}}>Leading voices in the field.</p>
</div>
<div bis_size='{"x":25,"y":2356,"w":1180,"h":1064,"abs_x":505,"abs_y":2399}' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div bis_size='{"x":25,"y":2356,"w":271,"h":508,"abs_x":505,"abs_y":2399}' className="group">
<div bis_size='{"x":25,"y":2356,"w":271,"h":361,"abs_x":505,"abs_y":2399}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":25,"y":2741,"w":271,"h":28,"abs_x":505,"abs_y":2784}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Dr. Vineet Joshi</h4>
<p bis_size='{"x":25,"y":2773,"w":271,"h":91,"abs_x":505,"abs_y":2816}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Secretary, Department of Higher Education, Acting Chairman, University Grants Commission, Government of India, India</p>
</div>

<div bis_size='{"x":328,"y":2356,"w":271,"h":508,"abs_x":808,"abs_y":2399}' className="group">
<div bis_size='{"x":328,"y":2356,"w":271,"h":361,"abs_x":808,"abs_y":2399}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":328,"y":2741,"w":271,"h":28,"abs_x":808,"abs_y":2784}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Dr Robert MacFarlane</h4>
<p bis_size='{"x":328,"y":2773,"w":271,"h":68,"abs_x":808,"abs_y":2816}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>OBE, Deputy Director (Security and Data Protection) Department for Work and Pensions (DWP), United Kingdom</p>
</div>

<div bis_size='{"x":631,"y":2356,"w":271,"h":508,"abs_x":1111,"abs_y":2399}' className="group">
<div bis_size='{"x":631,"y":2356,"w":271,"h":361,"abs_x":1111,"abs_y":2399}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":631,"y":2741,"w":271,"h":28,"abs_x":1111,"abs_y":2784}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Professor Alex Copley</h4>
<p bis_size='{"x":631,"y":2773,"w":271,"h":45,"abs_x":1111,"abs_y":2816}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Professor of Tectonics, University of Cambridge, United Kingdom</p>
</div>

<div bis_size='{"x":934,"y":2356,"w":271,"h":508,"abs_x":1414,"abs_y":2399}' className="group">
<div bis_size='{"x":934,"y":2356,"w":271,"h":361,"abs_x":1414,"abs_y":2399}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":934,"y":2741,"w":271,"h":28,"abs_x":1414,"abs_y":2784}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Professor Adam Amara</h4>
<p bis_size='{"x":934,"y":2773,"w":271,"h":68,"abs_x":1414,"abs_y":2816}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Chief Scientist, UK Space Agency &amp; Director, Surrey Space Institute, University of Surrey, United Kingdom</p>
</div>

<div bis_size='{"x":25,"y":2912,"w":271,"h":508,"abs_x":505,"abs_y":2955}' className="group">
<div bis_size='{"x":25,"y":2912,"w":271,"h":361,"abs_x":505,"abs_y":2955}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":25,"y":3297,"w":271,"h":28,"abs_x":505,"abs_y":3340}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Dr. DeeDee Bennett Gayle</h4>
<p bis_size='{"x":25,"y":3329,"w":271,"h":91,"abs_x":505,"abs_y":3372}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Associate Dean for Research, College of Emergency Preparedness, Homeland Security and Cybersecurity, University of At Albany, USA</p>
</div>

<div bis_size='{"x":328,"y":2912,"w":271,"h":508,"abs_x":808,"abs_y":2955}' className="group">
<div bis_size='{"x":328,"y":2912,"w":271,"h":361,"abs_x":808,"abs_y":2955}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":328,"y":3297,"w":271,"h":28,"abs_x":808,"abs_y":3340}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Dr. Ratnakar Adhikari</h4>
<p bis_size='{"x":328,"y":3329,"w":271,"h":68,"abs_x":808,"abs_y":3372}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Executive Director, Enhanced Integrated Framework Executive Secretariat, World Trade Organization (WTO), Switzerland</p>
</div>

<div bis_size='{"x":631,"y":2912,"w":271,"h":508,"abs_x":1111,"abs_y":2955}' className="group">
<div bis_size='{"x":631,"y":2912,"w":271,"h":361,"abs_x":1111,"abs_y":2955}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":631,"y":3297,"w":271,"h":28,"abs_x":1111,"abs_y":3340}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Dr. Jolene Jerard</h4>
<p bis_size='{"x":631,"y":3329,"w":271,"h":22,"abs_x":1111,"abs_y":3372}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Executive Director at Centinel, Singapore</p>
</div>

<div bis_size='{"x":934,"y":2912,"w":271,"h":508,"abs_x":1414,"abs_y":2955}' className="group">
<div bis_size='{"x":934,"y":2912,"w":271,"h":361,"abs_x":1414,"abs_y":2955}' className="bg-slate-200 aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
<h4 bis_size='{"x":934,"y":3297,"w":271,"h":28,"abs_x":1414,"abs_y":3340}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>Dr. Alun Newsome</h4>
<p bis_size='{"x":934,"y":3329,"w":271,"h":45,"abs_x":1414,"abs_y":3372}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Assistant Chief, Coast Guard, United Kingdom</p>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3516,"w":1230,"h":454,"abs_x":480,"abs_y":3559}' className="bg-slate-950 text-slate-300 py-24 border-t border-slate-800 scroll-mt-20" id="submit">
<div bis_size='{"x":0,"y":3613,"w":1230,"h":261,"abs_x":480,"abs_y":3656}' className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 border-l border-r border-slate-900">
<div bis_size='{"x":25,"y":3613,"w":558,"h":261,"abs_x":505,"abs_y":3656}' className="relative pl-6 lg:pl-0 border-l lg:border-l-0 lg:border-r border-slate-800 pr-12">
<span bis_size='{"x":25,"y":3614,"w":86,"h":28,"abs_x":505,"abs_y":3657}' className="inline-block bg-white text-slate-950 text-[10px] px-1.5 py-0.5 mb-4 font-sans" style={{}}>FOCUS BLOCK</span>
<h2 bis_size='{"x":25,"y":3658,"w":509,"h":48,"abs_x":505,"abs_y":3701}' className="text-4xl md:text-5xl text-white mb-6 font-playfair font-light tracking-tighter" style={{}}>Call for Papers</h2>
<p bis_size='{"x":25,"y":3730,"w":448,"h":84,"abs_x":505,"abs_y":3773}' className="text-lg text-slate-400 mb-8 max-w-md font-sans" style={{}}>
                    We invite scholars, practitioners, and policymakers to submit abstracts that challenge conventional wisdom in disaster research.
                </p>
<a bis_size='{"x":25,"y":3846,"w":153,"h":29,"abs_x":505,"abs_y":3889}' className="inline-flex items-center text-white border-b border-white pb-1 hover:text-slate-300 hover:border-slate-300 transition-colors" href="#">
<span bis_size='{"x":25,"y":3846,"w":129,"h":24,"abs_x":505,"abs_y":3889}' className="mr-2 font-sans" style={{}}>Paper Submission</span>
<svg aria-hidden="true" bis_size='{"x":162,"y":3850,"w":16,"h":16,"abs_x":642,"abs_y":3893}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div bis_size='{"x":647,"y":3613,"w":558,"h":261,"abs_x":1127,"abs_y":3656}'>
<h3 bis_size='{"x":647,"y":3613,"w":558,"h":20,"abs_x":1127,"abs_y":3656}' className="text-sm text-white uppercase tracking-widest mb-6 font-sans" style={{}}>Submission Guidelines</h3>
<ul bis_size='{"x":647,"y":3657,"w":558,"h":84,"abs_x":1127,"abs_y":3700}' className="space-y-4 text-sm leading-relaxed marker:text-slate-500 list-disc pl-4">
<li bis_size='{"x":663,"y":3657,"w":542,"h":22,"abs_x":1143,"abs_y":3700}' className="font-sans" style={{}}>All extended abstracts submissions should be in the English language.</li>
<li bis_size='{"x":663,"y":3696,"w":542,"h":45,"abs_x":1143,"abs_y":3739}' className="font-sans" style={{}}>Extended abstracts should be a maximum of 750 words (excluding tables, figures, and references).</li>
</ul>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3971,"w":1230,"h":582,"abs_x":480,"abs_y":4014}' className="grid grid-cols-1 lg:grid-cols-2 border-b border-slate-200">
<div bis_size='{"x":0,"y":3971,"w":615,"h":581,"abs_x":480,"abs_y":4014}' className="lg:p-20 lg:border-b-0 lg:border-r bg-slate-50 border-slate-200 border-b pt-12 pr-12 pb-12 pl-12">
<h3 bis_size='{"x":80,"y":4051,"w":202,"h":45,"abs_x":560,"abs_y":4094}' className="text-xl text-slate-900 mb-8 pb-4 border-b border-slate-300 inline-block font-sans" style={{}}>Formatting Guidelines</h3>
<div bis_size='{"x":80,"y":4128,"w":454,"h":344,"abs_x":560,"abs_y":4171}' className="space-y-8">
<div bis_size='{"x":80,"y":4128,"w":454,"h":72,"abs_x":560,"abs_y":4171}'>
<h4 bis_size='{"x":80,"y":4128,"w":454,"h":24,"abs_x":560,"abs_y":4171}' className="text-base text-slate-900 mb-2 flex items-center gap-2 font-sans" style={{}}>
<span bis_size='{"x":80,"y":4138,"w":4,"h":4,"abs_x":560,"abs_y":4181}' className="w-1 h-1 bg-slate-400 rounded-full"></span> Structure
                    </h4>
<p bis_size='{"x":80,"y":4160,"w":454,"h":40,"abs_x":560,"abs_y":4203}' className="text-sm text-slate-600 pl-3 font-sans" style={{}}>Extended abstracts should include a short background, problem, objectives, method, results, and conclusions.</p>
</div>
<div bis_size='{"x":80,"y":4232,"w":454,"h":52,"abs_x":560,"abs_y":4275}'>
<h4 bis_size='{"x":80,"y":4232,"w":454,"h":24,"abs_x":560,"abs_y":4275}' className="text-base text-slate-900 mb-2 flex items-center gap-2 font-sans" style={{}}>
<span bis_size='{"x":80,"y":4242,"w":4,"h":4,"abs_x":560,"abs_y":4285}' className="w-1 h-1 bg-slate-400 rounded-full"></span> Headers
                    </h4>
<p bis_size='{"x":80,"y":4264,"w":454,"h":20,"abs_x":560,"abs_y":4307}' className="text-sm text-slate-600 pl-3 font-sans" style={{}}>The title should be listed in the header of each page.</p>
</div>
<div bis_size='{"x":80,"y":4316,"w":454,"h":52,"abs_x":560,"abs_y":4359}' className="">
<h4 bis_size='{"x":80,"y":4316,"w":454,"h":24,"abs_x":560,"abs_y":4359}' className="text-base text-slate-900 mb-2 flex items-center gap-2 font-sans" style={{}}>
<span bis_size='{"x":80,"y":4326,"w":4,"h":4,"abs_x":560,"abs_y":4369}' className="w-1 h-1 bg-slate-400 rounded-full"></span> Font &amp; Spacing
                    </h4>
<p bis_size='{"x":80,"y":4348,"w":454,"h":20,"abs_x":560,"abs_y":4391}' className="text-sm text-slate-600 pl-3 font-sans" style={{}}>Single spacing and Aptos (Body) 12-point font.</p>
</div>
<div bis_size='{"x":80,"y":4400,"w":454,"h":72,"abs_x":560,"abs_y":4443}'>
<h4 bis_size='{"x":80,"y":4400,"w":454,"h":24,"abs_x":560,"abs_y":4443}' className="text-base text-slate-900 mb-2 flex items-center gap-2 font-sans" style={{}}>
<span bis_size='{"x":80,"y":4410,"w":4,"h":4,"abs_x":560,"abs_y":4453}' className="w-1 h-1 bg-slate-400 rounded-full"></span> One Document
                    </h4>
<p bis_size='{"x":80,"y":4432,"w":454,"h":40,"abs_x":560,"abs_y":4475}' className="text-sm text-slate-600 pl-3 font-sans" style={{}}>The entire submission (title, abstract, text, figures, graphs, tables, and references) must be contained in one document.</p>
</div>
</div>
</div>
<div bis_size='{"x":615,"y":3971,"w":615,"h":581,"abs_x":1095,"abs_y":4014}' className="bg-white p-12 lg:p-20 flex items-center justify-center">
<div bis_size='{"x":695,"y":4171,"w":455,"h":180,"abs_x":1175,"abs_y":4214}' className="border-l-4 border-slate-900 pl-8 max-w-lg">
<p bis_size='{"x":731,"y":4171,"w":419,"h":180,"abs_x":1211,"abs_y":4214}' className="text-2xl md:text-3xl text-slate-900 leading-tight font-playfair font-light tracking-tighter" style={{}}>
                    "Don't miss your chance to share your research, honour the legacy of our field's leaders, and gain international recognition!"
                </p>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4553,"w":1230,"h":591,"abs_x":480,"abs_y":4596}' className="border-b border-slate-200 scroll-mt-20" id="registration">

<div bis_size='{"x":0,"y":4553,"w":1230,"h":590,"abs_x":480,"abs_y":4596}' className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 border-l border-r border-slate-200">

<div bis_size='{"x":1,"y":4553,"w":614,"h":590,"abs_x":481,"abs_y":4596}' className="bg-white p-8 md:p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-slate-200">
<h2 bis_size='{"x":81,"y":4633,"w":453,"h":36,"abs_x":561,"abs_y":4676}' className="text-3xl text-slate-900 mb-4 font-playfair font-light tracking-tighter" style={{}}>Delegate Fees</h2>
<p bis_size='{"x":81,"y":4685,"w":453,"h":48,"abs_x":561,"abs_y":4728}' className="text-slate-500 mb-10 font-sans" style={{}}>Registration includes access to all sessions, conference materials, and networking events.</p>
<div bis_size='{"x":81,"y":4773,"w":453,"h":180,"abs_x":561,"abs_y":4816}' className="border-t border-slate-200">
<div bis_size='{"x":81,"y":4774,"w":453,"h":49,"abs_x":561,"abs_y":4817}' className="flex justify-between py-4 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-900">
<span bis_size='{"x":81,"y":4790,"w":70,"h":16,"abs_x":561,"abs_y":4833}' className="font-sans" style={{}}>Category</span>
<div bis_size='{"x":294,"y":4790,"w":240,"h":16,"abs_x":774,"abs_y":4833}' className="flex gap-6 sm:gap-12">
<span bis_size='{"x":294,"y":4790,"w":96,"h":16,"abs_x":774,"abs_y":4833}' className="w-24 text-right font-sans" style={{}}>Full (2 Days)</span>
<span bis_size='{"x":438,"y":4790,"w":96,"h":16,"abs_x":918,"abs_y":4833}' className="w-24 text-right font-sans" style={{}}>One Day</span>
</div>
</div>
<div bis_size='{"x":81,"y":4823,"w":453,"h":65,"abs_x":561,"abs_y":4866}' className="flex justify-between py-5 border-b border-slate-200 items-center">
<span bis_size='{"x":81,"y":4843,"w":76,"h":24,"abs_x":561,"abs_y":4886}' className="text-slate-900 font-sans" style={{}}>Standards</span>
<div bis_size='{"x":294,"y":4843,"w":240,"h":24,"abs_x":774,"abs_y":4886}' className="flex gap-6 sm:gap-12">
<span bis_size='{"x":294,"y":4843,"w":96,"h":24,"abs_x":774,"abs_y":4886}' className="w-24 text-right text-slate-600 font-sans" style={{}}>£125</span>
<span bis_size='{"x":438,"y":4843,"w":96,"h":24,"abs_x":918,"abs_y":4886}' className="w-24 text-right text-slate-600 font-sans" style={{}}>£75</span>
</div>
</div>
<div bis_size='{"x":81,"y":4888,"w":453,"h":65,"abs_x":561,"abs_y":4931}' className="flex justify-between py-5 border-b border-slate-200 items-center">
<span bis_size='{"x":81,"y":4908,"w":66,"h":24,"abs_x":561,"abs_y":4951}' className="text-slate-900 font-sans" style={{}}>Students</span>
<div bis_size='{"x":294,"y":4908,"w":240,"h":24,"abs_x":774,"abs_y":4951}' className="flex gap-6 sm:gap-12">
<span bis_size='{"x":294,"y":4908,"w":96,"h":24,"abs_x":774,"abs_y":4951}' className="w-24 text-right text-slate-600 font-sans" style={{}}>£75</span>
<span bis_size='{"x":438,"y":4908,"w":96,"h":24,"abs_x":918,"abs_y":4951}' className="w-24 text-right text-slate-600 font-sans" style={{}}>£50</span>
</div>
</div>
</div>
<div bis_size='{"x":81,"y":4993,"w":453,"h":70,"abs_x":561,"abs_y":5036}' className="mt-10 border border-slate-300 p-6 flex items-center justify-center text-center">
<p bis_size='{"x":156,"y":5018,"w":301,"h":20,"abs_x":636,"abs_y":5061}' className="text-sm text-slate-900 font-sans" style={{}}>
<span bis_size='{"x":156,"y":5019,"w":125,"h":16,"abs_x":636,"abs_y":5062}' className="font-sans" style={{}}>Payment Inquiries:</span> UKADR2026@aston.ac.uk
                    </p>
</div>
</div>

<div bis_size='{"x":615,"y":4553,"w":614,"h":590,"abs_x":1095,"abs_y":4596}' className="bg-slate-50 p-8 md:p-12 lg:p-20">
<h2 bis_size='{"x":695,"y":4633,"w":454,"h":36,"abs_x":1175,"abs_y":4676}' className="text-3xl text-slate-900 mb-10 font-playfair font-light tracking-tighter" style={{}}>Key Dates</h2>
<div bis_size='{"x":707,"y":4709,"w":442,"h":321,"abs_x":1187,"abs_y":4752}' className="relative border-l border-slate-200 ml-3 space-y-12 pb-4">

<div bis_size='{"x":708,"y":4709,"w":441,"h":77,"abs_x":1188,"abs_y":4752}' className="relative pl-10">
<div bis_size='{"x":703,"y":4717,"w":10,"h":10,"abs_x":1183,"abs_y":4760}' className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-900 rounded-full"></div>
<h4 bis_size='{"x":748,"y":4709,"w":401,"h":28,"abs_x":1228,"abs_y":4752}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>19th Jan 2026</h4>
<p bis_size='{"x":748,"y":4741,"w":401,"h":45,"abs_x":1228,"abs_y":4784}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Registration and Abstract Submission and Participation opens.</p>
</div>

<div bis_size='{"x":708,"y":4834,"w":441,"h":77,"abs_x":1188,"abs_y":4877}' className="relative pl-10">
<div bis_size='{"x":703,"y":4842,"w":10,"h":10,"abs_x":1183,"abs_y":4885}' className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-900 rounded-full"></div>
<h4 bis_size='{"x":748,"y":4834,"w":401,"h":28,"abs_x":1228,"abs_y":4877}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>31st Aug 2026</h4>
<p bis_size='{"x":748,"y":4866,"w":401,"h":45,"abs_x":1228,"abs_y":4909}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>Registration and Abstract Submission and Participation closes.</p>
</div>

<div bis_size='{"x":708,"y":4960,"w":441,"h":54,"abs_x":1188,"abs_y":5003}' className="relative pl-10">
<div bis_size='{"x":703,"y":4968,"w":10,"h":10,"abs_x":1183,"abs_y":5011}' className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-slate-900 rounded-full"></div>
<h4 bis_size='{"x":748,"y":4960,"w":401,"h":28,"abs_x":1228,"abs_y":5003}' className="text-lg text-slate-900 mb-1 font-sans" style={{}}>14-15 Sept 2026</h4>
<p bis_size='{"x":748,"y":4992,"w":401,"h":22,"abs_x":1228,"abs_y":5035}' className="text-sm text-slate-500 leading-relaxed font-sans" style={{}}>UKADR 10th Anniversary Conference at Aston University.</p>
</div>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":5144,"w":1230,"h":377,"abs_x":480,"abs_y":5187}' className="bg-slate-950 text-white py-24 border-t border-slate-800">
<div bis_size='{"x":167,"y":5241,"w":896,"h":184,"abs_x":647,"abs_y":5284}' className="max-w-4xl mx-auto px-6 text-center">
<h2 bis_size='{"x":191,"y":5241,"w":848,"h":40,"abs_x":671,"abs_y":5284}' className="text-3xl md:text-4xl mb-2 font-playfair font-light tracking-tighter" style={{}}>10th Anniversary UKADR</h2>
<h2 bis_size='{"x":191,"y":5289,"w":848,"h":40,"abs_x":671,"abs_y":5332}' className="text-3xl md:text-4xl mb-8 font-playfair font-light tracking-tighter" style={{}}>Annual Conference 2026</h2>
<p bis_size='{"x":191,"y":5361,"w":848,"h":24,"abs_x":671,"abs_y":5404}' className="text-slate-400 mb-2 font-sans" style={{}}>For any queries, please email to the Conference Secretariat</p>
<a bis_size='{"x":482,"y":5395,"w":264,"h":28,"abs_x":962,"abs_y":5438}' className="text-xl md:text-2xl text-white hover:text-slate-300 transition-colors font-playfair font-light tracking-tighter" href="mailto:ukadr2026@aston.ac.uk" style={{}}>
                ukadr2026@aston.ac.uk
            </a>
</div>
</footer>


    </>
  );
}
