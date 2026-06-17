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
      

<aside bis_size='{"x":0,"y":0,"w":288,"h":868,"abs_x":480,"abs_y":43}' className="w-72 bg-white border-r border-slate-200 flex-col h-full hidden xl:flex shrink-0">

<div bis_size='{"x":0,"y":0,"w":287,"h":138,"abs_x":480,"abs_y":43}' className="p-6 pb-4">
<div bis_size='{"x":24,"y":24,"w":239,"h":32,"abs_x":504,"abs_y":67}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":24,"y":24,"w":32,"h":32,"abs_x":504,"abs_y":67}' className="bg-slate-900 text-white p-1.5 rounded-lg">
<svg bis_size='{"x":30,"y":30,"w":20,"h":20,"abs_x":510,"abs_y":73}' className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<span bis_size='{"x":68,"y":26,"w":54,"h":28,"abs_x":548,"abs_y":69}' className="text-xl font-semibold text-slate-900 tracking-tight">Taskk</span>
</div>

<div bis_size='{"x":24,"y":80,"w":239,"h":42,"abs_x":504,"abs_y":123}' className="relative group">
<svg bis_size='{"x":36,"y":93,"w":16,"h":16,"abs_x":516,"abs_y":136}' className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-purple-600 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input bis_size='{"x":24,"y":80,"w":239,"h":42,"abs_x":504,"abs_y":123}' className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/10 focus:border-purple-500 transition-all placeholder:text-slate-400" placeholder="Search" type="text"/>
<div bis_size='{"x":233,"y":90,"w":17,"h":21,"abs_x":713,"abs_y":133}' className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-slate-200 rounded px-1.5 py-0.5 text-[10px] text-slate-400 font-medium">/</div>
</div>
</div>

<nav bis_size='{"x":0,"y":138,"w":287,"h":485,"abs_x":480,"abs_y":181}' className="flex-1 overflow-y-auto px-4 space-y-1 no-scrollbar">
<a bis_size='{"x":16,"y":138,"w":255,"h":42,"abs_x":496,"abs_y":181}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200/60 rounded-lg shadow-sm" href="#">
<svg bis_size='{"x":29,"y":151,"w":16,"h":16,"abs_x":509,"abs_y":194}' className="lucide lucide-layout-dashboard w-4 h-4 text-slate-900" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                Dashboard
            </a>
<a bis_size='{"x":16,"y":184,"w":255,"h":40,"abs_x":496,"abs_y":227}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":196,"w":16,"h":16,"abs_x":508,"abs_y":239}' className="lucide lucide-check-square w-4 h-4" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
                Tasks
            </a>
<a bis_size='{"x":16,"y":228,"w":255,"h":40,"abs_x":496,"abs_y":271}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":240,"w":16,"h":16,"abs_x":508,"abs_y":283}' className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                Docs
            </a>
<a bis_size='{"x":16,"y":272,"w":255,"h":40,"abs_x":496,"abs_y":315}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":284,"w":16,"h":16,"abs_x":508,"abs_y":327}' className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Schedule
            </a>
<a bis_size='{"x":16,"y":316,"w":255,"h":40,"abs_x":496,"abs_y":359}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":328,"w":16,"h":16,"abs_x":508,"abs_y":371}' className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                Chat
            </a>
<a bis_size='{"x":16,"y":360,"w":255,"h":40,"abs_x":496,"abs_y":403}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":372,"w":16,"h":16,"abs_x":508,"abs_y":415}' className="lucide lucide-arrow-left-right w-4 h-4" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
                Payments
            </a>
<a bis_size='{"x":16,"y":404,"w":255,"h":40,"abs_x":496,"abs_y":447}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":416,"w":16,"h":16,"abs_x":508,"abs_y":459}' className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Customers
            </a>
<div bis_size='{"x":16,"y":448,"w":255,"h":40,"abs_x":496,"abs_y":491}' className="pt-4 pb-2">
<h3 bis_size='{"x":16,"y":464,"w":255,"h":16,"abs_x":496,"abs_y":507}' className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider">Management</h3>
</div>
<a bis_size='{"x":16,"y":492,"w":255,"h":40,"abs_x":496,"abs_y":535}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":504,"w":16,"h":16,"abs_x":508,"abs_y":547}' className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Automations
            </a>
<a bis_size='{"x":16,"y":536,"w":255,"h":40,"abs_x":496,"abs_y":579}' className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors" href="#">
<svg bis_size='{"x":28,"y":548,"w":16,"h":16,"abs_x":508,"abs_y":591}' className="lucide lucide-user-cog w-4 h-4" data-lucide="user-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m14.305 16.53.923-.382"></path><path d="m15.228 13.852-.923-.383"></path><path d="m16.852 12.228-.383-.923"></path><path d="m16.852 17.772-.383.924"></path><path d="m19.148 12.228.383-.923"></path><path d="m19.53 18.696-.382-.924"></path><path d="m20.772 13.852.924-.383"></path><path d="m20.772 16.148.924.383"></path><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle></svg>
                User Management
            </a>
<div bis_size='{"x":16,"y":580,"w":255,"h":92,"abs_x":496,"abs_y":623}' className="pt-4 pb-1">
<button bis_size='{"x":16,"y":596,"w":255,"h":36,"abs_x":496,"abs_y":639}' className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900">
<span bis_size='{"x":28,"y":604,"w":62,"h":20,"abs_x":508,"abs_y":647}' className="flex items-center gap-3"><svg bis_size='{"x":28,"y":606,"w":16,"h":16,"abs_x":508,"abs_y":649}' className="lucide lucide-grid w-4 h-4" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg> Apps</span>
<svg bis_size='{"x":245,"y":607,"w":14,"h":14,"abs_x":725,"abs_y":650}' className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button bis_size='{"x":16,"y":632,"w":255,"h":36,"abs_x":496,"abs_y":675}' className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900">
<span bis_size='{"x":28,"y":640,"w":51,"h":20,"abs_x":508,"abs_y":683}' className="flex items-center gap-3"><svg bis_size='{"x":28,"y":642,"w":16,"h":16,"abs_x":508,"abs_y":685}' className="lucide lucide-folder w-4 h-4" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> File</span>
<svg bis_size='{"x":245,"y":643,"w":14,"h":14,"abs_x":725,"abs_y":686}' className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</nav>

<div bis_size='{"x":0,"y":623,"w":287,"h":245,"abs_x":480,"abs_y":666}' className="p-4 border-t border-slate-200 space-y-1">
<a bis_size='{"x":16,"y":640,"w":255,"h":36,"abs_x":496,"abs_y":683}' className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
<svg bis_size='{"x":28,"y":650,"w":16,"h":16,"abs_x":508,"abs_y":693}' className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                Support
            </a>
<a bis_size='{"x":16,"y":680,"w":255,"h":36,"abs_x":496,"abs_y":723}' className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
<svg bis_size='{"x":28,"y":690,"w":16,"h":16,"abs_x":508,"abs_y":733}' className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Settings
            </a>

<div bis_size='{"x":16,"y":720,"w":255,"h":132,"abs_x":496,"abs_y":763}' className="mt-4 bg-slate-50 border border-slate-100 rounded-xl p-4">
<div bis_size='{"x":33,"y":737,"w":221,"h":20,"abs_x":513,"abs_y":780}' className="flex items-center gap-2 mb-2 text-slate-900 font-medium text-sm">
<svg bis_size='{"x":33,"y":739,"w":16,"h":16,"abs_x":513,"abs_y":782}' className="lucide lucide-cloud w-4 h-4" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                    Storage almost full
                </div>
<div bis_size='{"x":33,"y":765,"w":221,"h":24,"abs_x":513,"abs_y":808}' className="flex gap-0.5 h-6 mb-3">

<div bis_size='{"x":33,"y":765,"w":6,"h":24,"abs_x":513,"abs_y":808}' className="w-1.5 h-full bg-purple-500 rounded-full"></div>
<div bis_size='{"x":41,"y":765,"w":6,"h":24,"abs_x":521,"abs_y":808}' className="w-1.5 h-full bg-purple-500 rounded-full"></div>
<div bis_size='{"x":49,"y":765,"w":6,"h":24,"abs_x":529,"abs_y":808}' className="w-1.5 h-full bg-purple-500 rounded-full"></div>
<div bis_size='{"x":57,"y":765,"w":6,"h":24,"abs_x":537,"abs_y":808}' className="w-1.5 h-full bg-purple-500 rounded-full"></div>
<div bis_size='{"x":65,"y":765,"w":6,"h":24,"abs_x":545,"abs_y":808}' className="w-1.5 h-full bg-purple-500 rounded-full"></div>
<div bis_size='{"x":73,"y":765,"w":6,"h":24,"abs_x":553,"abs_y":808}' className="w-1.5 h-full bg-purple-500 rounded-full"></div>
<div bis_size='{"x":81,"y":765,"w":6,"h":24,"abs_x":561,"abs_y":808}' className="w-1.5 h-full bg-purple-400/30 rounded-full"></div>
<div bis_size='{"x":89,"y":765,"w":6,"h":24,"abs_x":569,"abs_y":808}' className="w-1.5 h-full bg-slate-200 rounded-full"></div>
<div bis_size='{"x":97,"y":765,"w":6,"h":24,"abs_x":577,"abs_y":808}' className="w-1.5 h-full bg-slate-200 rounded-full"></div>
</div>
<button bis_size='{"x":33,"y":801,"w":221,"h":34,"abs_x":513,"abs_y":844}' className="w-full py-2 bg-white border border-slate-200 shadow-sm rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<svg bis_size='{"x":94,"y":812,"w":12,"h":12,"abs_x":574,"abs_y":855}' className="lucide lucide-sparkles w-3 h-3 text-purple-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    Upgrade Plan
                </button>
</div>
</div>
</aside>

<main bis_size='{"x":288,"y":0,"w":1152,"h":868,"abs_x":768,"abs_y":43}' className="flex-1 h-full overflow-y-auto bg-slate-50">

<header bis_size='{"x":288,"y":0,"w":1137,"h":72,"abs_x":768,"abs_y":43}' className="sticky top-0 z-20 bg-slate-50/80 backdrop-blur-sm px-8 py-5 flex items-center justify-between">
<div bis_size='{"x":320,"y":26,"w":125,"h":20,"abs_x":800,"abs_y":69}' className="flex items-center gap-3 text-sm text-slate-500">
<svg bis_size='{"x":320,"y":28,"w":16,"h":16,"abs_x":800,"abs_y":71}' className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<svg bis_size='{"x":348,"y":30,"w":12,"h":12,"abs_x":828,"abs_y":73}' className="lucide lucide-chevron-right w-3 h-3 text-slate-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span bis_size='{"x":372,"y":26,"w":73,"h":20,"abs_x":852,"abs_y":69}' className="text-slate-900 font-medium">Dashboard</span>
</div>
<div bis_size='{"x":1040,"y":20,"w":352,"h":32,"abs_x":1520,"abs_y":63}' className="flex items-center gap-4">

<div bis_size='{"x":1040,"y":20,"w":104,"h":32,"abs_x":1520,"abs_y":63}' className="flex -space-x-2">
<img alt="" bis_size='{"x":1040,"y":20,"w":32,"h":32,"abs_x":1520,"abs_y":63}' className="w-8 h-8 rounded-full border-2 border-slate-50" src="https://i.pravatar.cc/100?img=33"/>
<img alt="" bis_size='{"x":1064,"y":20,"w":32,"h":32,"abs_x":1544,"abs_y":63}' className="w-8 h-8 rounded-full border-2 border-slate-50" src="https://i.pravatar.cc/100?img=47"/>
<img alt="" bis_size='{"x":1088,"y":20,"w":32,"h":32,"abs_x":1568,"abs_y":63}' className="w-8 h-8 border-slate-50 border-2 rounded-full" src="https://i.pravatar.cc/100?img=12"/>
<div bis_size='{"x":1112,"y":20,"w":32,"h":32,"abs_x":1592,"abs_y":63}' className="w-8 h-8 rounded-full border-2 border-slate-50 bg-slate-100 flex items-center justify-center text-[10px] font-medium text-slate-600">+4</div>
</div>
<button bis_size='{"x":1160,"y":21,"w":119,"h":30,"abs_x":1640,"abs_y":64}' className="text-xs font-medium bg-white border border-slate-200 shadow-sm px-3 py-1.5 rounded-md hover:bg-slate-50 transition-colors">
                    Find Members +
                </button>
<div bis_size='{"x":1300,"y":24,"w":1,"h":24,"abs_x":1780,"abs_y":67}' className="h-6 w-px bg-slate-200 mx-1"></div>
<button bis_size='{"x":1321,"y":22,"w":28,"h":28,"abs_x":1801,"abs_y":65}' className="p-1.5 hover:bg-white hover:shadow-sm rounded-md text-slate-400 hover:text-slate-600 transition-all">
<svg bis_size='{"x":1327,"y":28,"w":16,"h":16,"abs_x":1807,"abs_y":71}' className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button bis_size='{"x":1365,"y":22,"w":28,"h":28,"abs_x":1845,"abs_y":65}' className="p-1.5 hover:bg-white hover:shadow-sm rounded-md text-slate-400 hover:text-slate-600 transition-all">
<svg bis_size='{"x":1371,"y":28,"w":16,"h":16,"abs_x":1851,"abs_y":71}' className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</header>
<div bis_size='{"x":288,"y":72,"w":1137,"h":1396,"abs_x":768,"abs_y":115}' className="pr-8 pb-10 pl-8 space-y-8">

<div bis_size='{"x":320,"y":72,"w":1073,"h":36,"abs_x":800,"abs_y":115}' className="">
<h1 bis_size='{"x":320,"y":72,"w":1073,"h":36,"abs_x":800,"abs_y":115}' className="text-3xl font-semibold text-slate-900 tracking-tight">Good morning, David!</h1>
</div>

<div bis_size='{"x":320,"y":140,"w":1073,"h":178,"abs_x":800,"abs_y":183}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":320,"y":140,"w":341,"h":178,"abs_x":800,"abs_y":183}' className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm group hover:shadow-md transition-all duration-300">
<div bis_size='{"x":321,"y":141,"w":339,"h":176,"abs_x":801,"abs_y":184}' className="absolute inset-0 bg-gradient-to-br from-purple-100/60 via-white to-white opacity-100"></div>
<div bis_size='{"x":556,"y":117,"w":128,"h":128,"abs_x":1036,"abs_y":160}' className="absolute -right-6 -top-6 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
<div bis_size='{"x":345,"y":165,"w":291,"h":40,"abs_x":825,"abs_y":208}' className="relative flex justify-between items-start mb-6">
<div bis_size='{"x":345,"y":165,"w":40,"h":40,"abs_x":825,"abs_y":208}' className="w-10 h-10 rounded-xl bg-white border border-purple-100 shadow-sm flex items-center justify-center text-purple-600">
<svg bis_size='{"x":355,"y":175,"w":20,"h":20,"abs_x":835,"abs_y":218}' className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<button bis_size='{"x":540,"y":165,"w":96,"h":30,"abs_x":1020,"abs_y":208}' className="px-3 py-1.5 bg-white/60 hover:bg-white border border-slate-100 rounded-full text-xs font-semibold text-purple-700 shadow-sm backdrop-blur-sm transition-all">
                            View details
                        </button>
</div>
<div bis_size='{"x":345,"y":229,"w":291,"h":64,"abs_x":825,"abs_y":272}' className="relative">
<div bis_size='{"x":345,"y":229,"w":291,"h":40,"abs_x":825,"abs_y":272}' className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">42</div>
<div bis_size='{"x":345,"y":273,"w":291,"h":20,"abs_x":825,"abs_y":316}' className="text-sm font-medium text-slate-500">Active Tasks</div>
</div>
</div>

<div bis_size='{"x":685,"y":140,"w":341,"h":178,"abs_x":1165,"abs_y":183}' className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm group hover:shadow-md transition-all duration-300">
<div bis_size='{"x":686,"y":141,"w":339,"h":176,"abs_x":1166,"abs_y":184}' className="absolute inset-0 bg-gradient-to-br from-sky-100/60 via-white to-white opacity-100"></div>
<div bis_size='{"x":922,"y":117,"w":128,"h":128,"abs_x":1402,"abs_y":160}' className="absolute -right-6 -top-6 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl"></div>
<div bis_size='{"x":710,"y":165,"w":291,"h":40,"abs_x":1190,"abs_y":208}' className="relative flex justify-between items-start mb-6">
<div bis_size='{"x":710,"y":165,"w":40,"h":40,"abs_x":1190,"abs_y":208}' className="w-10 h-10 rounded-xl bg-white border border-sky-100 shadow-sm flex items-center justify-center text-sky-600">
<svg bis_size='{"x":720,"y":175,"w":20,"h":20,"abs_x":1200,"abs_y":218}' className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button bis_size='{"x":905,"y":165,"w":96,"h":30,"abs_x":1385,"abs_y":208}' className="px-3 py-1.5 bg-white/60 hover:bg-white border border-slate-100 rounded-full text-xs font-semibold text-sky-700 shadow-sm backdrop-blur-sm transition-all">
                            View details
                        </button>
</div>
<div bis_size='{"x":710,"y":229,"w":291,"h":64,"abs_x":1190,"abs_y":272}' className="relative">
<div bis_size='{"x":710,"y":229,"w":291,"h":40,"abs_x":1190,"abs_y":272}' className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">21</div>
<div bis_size='{"x":710,"y":273,"w":291,"h":20,"abs_x":1190,"abs_y":316}' className="text-sm font-medium text-slate-500">Clients' Review</div>
</div>
</div>

<div bis_size='{"x":1051,"y":140,"w":341,"h":178,"abs_x":1531,"abs_y":183}' className="relative overflow-hidden bg-white border border-slate-200 rounded-2xl p-6 shadow-sm group hover:shadow-md transition-all duration-300">
<div bis_size='{"x":1052,"y":141,"w":339,"h":176,"abs_x":1532,"abs_y":184}' className="bg-gradient-to-br from-pink-100/60 via-white to-white opacity-100 absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":1287,"y":117,"w":128,"h":128,"abs_x":1767,"abs_y":160}' className="absolute -right-6 -top-6 w-32 h-32 bg-pink-200/30 rounded-full blur-2xl"></div>
<div bis_size='{"x":1076,"y":165,"w":291,"h":40,"abs_x":1556,"abs_y":208}' className="relative flex justify-between items-start mb-6">
<div bis_size='{"x":1076,"y":165,"w":40,"h":40,"abs_x":1556,"abs_y":208}' className="w-10 h-10 rounded-xl bg-white border border-pink-100 shadow-sm flex items-center justify-center text-pink-600">
<svg bis_size='{"x":1086,"y":175,"w":20,"h":20,"abs_x":1566,"abs_y":218}' className="lucide lucide-check w-5 h-5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<button bis_size='{"x":1271,"y":165,"w":96,"h":30,"abs_x":1751,"abs_y":208}' className="px-3 py-1.5 bg-white/60 hover:bg-white border border-slate-100 rounded-full text-xs font-semibold text-pink-700 shadow-sm backdrop-blur-sm transition-all">
                            View details
                        </button>
</div>
<div bis_size='{"x":1076,"y":229,"w":291,"h":64,"abs_x":1556,"abs_y":272}' className="relative">
<div bis_size='{"x":1076,"y":229,"w":291,"h":40,"abs_x":1556,"abs_y":272}' className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">68</div>
<div bis_size='{"x":1076,"y":273,"w":291,"h":20,"abs_x":1556,"abs_y":316}' className="text-sm font-medium text-slate-500">Completed Tasks</div>
</div>
</div>
</div>

<div bis_size='{"x":320,"y":350,"w":1073,"h":470,"abs_x":800,"abs_y":393}' className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div bis_size='{"x":320,"y":350,"w":707,"h":470,"abs_x":800,"abs_y":393}' className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
<div bis_size='{"x":345,"y":375,"w":657,"h":44,"abs_x":825,"abs_y":418}' className="flex items-start justify-between mb-8">
<div bis_size='{"x":345,"y":375,"w":236,"h":44,"abs_x":825,"abs_y":418}' className="">
<div bis_size='{"x":345,"y":375,"w":236,"h":44,"abs_x":825,"abs_y":418}' className="flex items-center gap-3">
<div bis_size='{"x":345,"y":380,"w":34,"h":34,"abs_x":825,"abs_y":423}' className="p-2 bg-slate-50 rounded-lg border border-slate-100">
<svg bis_size='{"x":354,"y":389,"w":16,"h":16,"abs_x":834,"abs_y":432}' className="lucide lucide-briefcase w-4 h-4 text-slate-500" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div bis_size='{"x":391,"y":375,"w":190,"h":44,"abs_x":871,"abs_y":418}' className="">
<h3 bis_size='{"x":391,"y":375,"w":190,"h":24,"abs_x":871,"abs_y":418}' className="text-base font-semibold text-slate-900">Revenue Forecast</h3>
<p bis_size='{"x":391,"y":399,"w":190,"h":20,"abs_x":871,"abs_y":442}' className="text-sm text-slate-500">Showing revenue and details</p>
</div>
</div>
</div>
<div bis_size='{"x":890,"y":375,"w":111,"h":28,"abs_x":1370,"abs_y":418}' className="flex items-center gap-2">
<div bis_size='{"x":890,"y":375,"w":79,"h":28,"abs_x":1370,"abs_y":418}' className="relative">
<button bis_size='{"x":890,"y":375,"w":79,"h":28,"abs_x":1370,"abs_y":418}' className="bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg shadow-slate-200">
                                    Mar 2024
                                </button>

<div bis_size='{"x":810,"y":415,"w":160,"h":60,"abs_x":1290,"abs_y":458}' className="absolute top-10 right-0 w-40 bg-slate-900 text-white p-3 rounded-lg shadow-xl z-10">
<div bis_size='{"x":822,"y":427,"w":136,"h":16,"abs_x":1302,"abs_y":470}' className="flex items-center justify-between text-xs mb-1">
<span bis_size='{"x":822,"y":431,"w":8,"h":8,"abs_x":1302,"abs_y":474}' className="w-2 h-2 rounded-full bg-purple-400"></span>
<span bis_size='{"x":848,"y":427,"w":41,"h":16,"abs_x":1328,"abs_y":470}' className="font-medium">$4,800</span>
<span bis_size='{"x":908,"y":427,"w":49,"h":16,"abs_x":1388,"abs_y":470}' className="text-green-400">↑ 22.7%</span>
</div>
<div bis_size='{"x":822,"y":447,"w":136,"h":16,"abs_x":1302,"abs_y":490}' className="flex items-center justify-between text-xs opacity-70">
<span bis_size='{"x":822,"y":451,"w":8,"h":8,"abs_x":1302,"abs_y":494}' className="w-2 h-2 rounded-full bg-slate-500"></span>
<span bis_size='{"x":850,"y":447,"w":40,"h":16,"abs_x":1330,"abs_y":490}' className="font-medium">$3,750</span>
<span bis_size='{"x":910,"y":447,"w":47,"h":16,"abs_x":1390,"abs_y":490}' className="text-green-400">↑ 18.5%</span>
</div>
</div>
</div>
<button bis_size='{"x":978,"y":377,"w":24,"h":24,"abs_x":1458,"abs_y":420}' className="p-1 text-slate-400 hover:text-slate-600"><svg bis_size='{"x":982,"y":381,"w":16,"h":16,"abs_x":1462,"abs_y":424}' className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
</div>

<div bis_size='{"x":345,"y":451,"w":657,"h":192,"abs_x":825,"abs_y":494}' className="flex items-end justify-between h-48 gap-4 px-2">

<div bis_size='{"x":353,"y":451,"w":24,"h":192,"abs_x":833,"abs_y":494}' className="hidden sm:flex flex-col justify-between h-full text-[10px] text-slate-400 font-medium pb-6 w-6">
<span bis_size='{"x":353,"y":451,"w":24,"h":15,"abs_x":833,"abs_y":494}'>$5k</span><span bis_size='{"x":353,"y":481,"w":24,"h":15,"abs_x":833,"abs_y":524}'>$4k</span><span bis_size='{"x":353,"y":512,"w":24,"h":15,"abs_x":833,"abs_y":555}'>$3k</span><span bis_size='{"x":353,"y":542,"w":24,"h":15,"abs_x":833,"abs_y":585}'>$2k</span><span bis_size='{"x":353,"y":573,"w":24,"h":15,"abs_x":833,"abs_y":616}'>$1k</span><span bis_size='{"x":353,"y":603,"w":24,"h":15,"abs_x":833,"abs_y":646}'>$0</span>
</div>

<div bis_size='{"x":393,"y":451,"w":601,"h":192,"abs_x":873,"abs_y":494}' className="flex-1 flex items-end justify-between h-full pb-6 relative">

<div bis_size='{"x":393,"y":451,"w":601,"h":192,"abs_x":873,"abs_y":494}' className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30">
<div bis_size='{"x":393,"y":451,"w":601,"h":1,"abs_x":873,"abs_y":494}' className="border-b border-dashed border-slate-200 w-full h-0"></div>
<div bis_size='{"x":393,"y":489,"w":601,"h":1,"abs_x":873,"abs_y":532}' className="border-b border-dashed border-slate-200 w-full h-0"></div>
<div bis_size='{"x":393,"y":527,"w":601,"h":1,"abs_x":873,"abs_y":570}' className="border-b border-dashed border-slate-200 w-full h-0"></div>
<div bis_size='{"x":393,"y":565,"w":601,"h":1,"abs_x":873,"abs_y":608}' className="border-b border-dashed border-slate-200 w-full h-0"></div>
<div bis_size='{"x":393,"y":603,"w":601,"h":1,"abs_x":873,"abs_y":646}' className="border-b border-dashed border-slate-200 w-full h-0"></div>
<div bis_size='{"x":393,"y":641,"w":601,"h":1,"abs_x":873,"abs_y":684}' className="border-b border-slate-200 w-full h-0"></div>
</div>

<div bis_size='{"x":393,"y":468,"w":85,"h":151,"abs_x":873,"abs_y":511}' className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div bis_size='{"x":417,"y":468,"w":36,"h":128,"abs_x":897,"abs_y":511}' className="flex gap-1 h-32 items-end">
<div bis_size='{"x":417,"y":519,"w":16,"h":76,"abs_x":897,"abs_y":562}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[60%] group-hover:bg-slate-100 transition-all"></div>
<div bis_size='{"x":437,"y":544,"w":16,"h":51,"abs_x":917,"abs_y":587}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[40%] group-hover:bg-slate-100 transition-all"></div>
</div>
<span bis_size='{"x":425,"y":604,"w":20,"h":15,"abs_x":905,"abs_y":647}' className="text-[10px] font-semibold text-slate-400 uppercase">Jan</span>
</div>

<div bis_size='{"x":478,"y":468,"w":85,"h":151,"abs_x":958,"abs_y":511}' className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div bis_size='{"x":503,"y":468,"w":36,"h":128,"abs_x":983,"abs_y":511}' className="flex gap-1 h-32 items-end">
<div bis_size='{"x":503,"y":500,"w":16,"h":96,"abs_x":983,"abs_y":543}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[75%] group-hover:bg-slate-100 transition-all"></div>
<div bis_size='{"x":523,"y":532,"w":16,"h":64,"abs_x":1003,"abs_y":575}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[50%] group-hover:bg-slate-100 transition-all"></div>
</div>
<span bis_size='{"x":512,"y":604,"w":18,"h":15,"abs_x":992,"abs_y":647}' className="text-[10px] font-semibold text-slate-400 uppercase">Feb</span>
</div>

<div bis_size='{"x":564,"y":468,"w":85,"h":151,"abs_x":1044,"abs_y":511}' className="flex flex-col items-center gap-2 w-full group cursor-pointer relative">

<div bis_size='{"x":607,"y":444,"w":24,"h":24,"abs_x":1087,"abs_y":487}' className="absolute -top-6 left-1/2 z-20">
<div bis_size='{"x":607,"y":444,"w":24,"h":24,"abs_x":1087,"abs_y":487}' className="w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100">
<svg bis_size='{"x":613,"y":450,"w":12,"h":12,"abs_x":1093,"abs_y":493}' className="lucide lucide-hand w-3 h-3 text-purple-600 fill-purple-100" data-lucide="hand" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></path><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
</div>
</div>
<div bis_size='{"x":589,"y":468,"w":36,"h":128,"abs_x":1069,"abs_y":511}' className="flex gap-1 h-32 items-end">
<div bis_size='{"x":589,"y":474,"w":16,"h":121,"abs_x":1069,"abs_y":517}' className="w-2 md:w-4 bg-purple-500 rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(168,85,247,0.4)]"></div>
<div bis_size='{"x":609,"y":506,"w":16,"h":89,"abs_x":1089,"abs_y":549}' className="w-2 md:w-4 bg-sky-400 rounded-t-sm h-[70%] opacity-80"></div>
</div>
<span bis_size='{"x":596,"y":604,"w":23,"h":15,"abs_x":1076,"abs_y":647}' className="text-[10px] font-bold text-slate-900 uppercase">Mar</span>
</div>

<div bis_size='{"x":650,"y":468,"w":85,"h":151,"abs_x":1130,"abs_y":511}' className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div bis_size='{"x":675,"y":468,"w":36,"h":128,"abs_x":1155,"abs_y":511}' className="flex gap-1 h-32 items-end">
<div bis_size='{"x":675,"y":493,"w":16,"h":102,"abs_x":1155,"abs_y":536}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[80%] group-hover:bg-slate-100 transition-all"></div>
<div bis_size='{"x":695,"y":525,"w":16,"h":70,"abs_x":1175,"abs_y":568}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[55%] group-hover:bg-slate-100 transition-all"></div>
</div>
<span bis_size='{"x":683,"y":604,"w":20,"h":15,"abs_x":1163,"abs_y":647}' className="text-[10px] font-semibold text-slate-400 uppercase">Apr</span>
</div>

<div bis_size='{"x":736,"y":468,"w":85,"h":151,"abs_x":1216,"abs_y":511}' className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div bis_size='{"x":761,"y":468,"w":36,"h":128,"abs_x":1241,"abs_y":511}' className="flex gap-1 h-32 items-end">
<div bis_size='{"x":761,"y":544,"w":16,"h":51,"abs_x":1241,"abs_y":587}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[40%] group-hover:bg-slate-100 transition-all"></div>
<div bis_size='{"x":781,"y":557,"w":16,"h":38,"abs_x":1261,"abs_y":600}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[30%] group-hover:bg-slate-100 transition-all"></div>
</div>
<span bis_size='{"x":768,"y":604,"w":22,"h":15,"abs_x":1248,"abs_y":647}' className="text-[10px] font-semibold text-slate-400 uppercase">May</span>
</div>

<div bis_size='{"x":822,"y":468,"w":85,"h":151,"abs_x":1302,"abs_y":511}' className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div bis_size='{"x":847,"y":468,"w":36,"h":128,"abs_x":1327,"abs_y":511}' className="flex gap-1 h-32 items-end">
<div bis_size='{"x":847,"y":519,"w":16,"h":76,"abs_x":1327,"abs_y":562}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[60%] group-hover:bg-slate-100 transition-all"></div>
<div bis_size='{"x":867,"y":538,"w":16,"h":57,"abs_x":1347,"abs_y":581}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[45%] group-hover:bg-slate-100 transition-all"></div>
</div>
<span bis_size='{"x":855,"y":604,"w":20,"h":15,"abs_x":1335,"abs_y":647}' className="text-[10px] font-semibold text-slate-400 uppercase">Jun</span>
</div>

<div bis_size='{"x":908,"y":468,"w":85,"h":151,"abs_x":1388,"abs_y":511}' className="flex flex-col items-center gap-2 w-full group cursor-pointer">
<div bis_size='{"x":933,"y":468,"w":36,"h":128,"abs_x":1413,"abs_y":511}' className="flex gap-1 h-32 items-end">
<div bis_size='{"x":933,"y":487,"w":16,"h":108,"abs_x":1413,"abs_y":530}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[85%] group-hover:bg-slate-100 transition-all"></div>
<div bis_size='{"x":953,"y":532,"w":16,"h":64,"abs_x":1433,"abs_y":575}' className="w-2 md:w-4 bg-slate-50 border border-slate-100 rounded-t-sm h-[50%] group-hover:bg-slate-100 transition-all"></div>
</div>
<span bis_size='{"x":941,"y":604,"w":18,"h":15,"abs_x":1421,"abs_y":647}' className="text-[10px] font-semibold text-slate-400 uppercase">Jul</span>
</div>
</div>
</div>
</div>

<div bis_size='{"x":1051,"y":350,"w":341,"h":470,"abs_x":1531,"abs_y":393}' className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
<div bis_size='{"x":1076,"y":375,"w":291,"h":44,"abs_x":1556,"abs_y":418}' className="flex items-start justify-between mb-6">
<div bis_size='{"x":1076,"y":375,"w":230,"h":44,"abs_x":1556,"abs_y":418}' className="flex items-center gap-3">
<div bis_size='{"x":1076,"y":380,"w":34,"h":34,"abs_x":1556,"abs_y":423}' className="p-2 bg-slate-50 rounded-lg border border-slate-100">
<svg bis_size='{"x":1085,"y":389,"w":16,"h":16,"abs_x":1565,"abs_y":432}' className="lucide lucide-file-clock w-4 h-4 text-slate-500" data-lucide="file-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M8 14v2.2l1.6 1"></path><circle cx="8" cy="16" r="6"></circle></svg>
</div>
<div bis_size='{"x":1122,"y":375,"w":184,"h":44,"abs_x":1602,"abs_y":418}'>
<h3 bis_size='{"x":1122,"y":375,"w":184,"h":24,"abs_x":1602,"abs_y":418}' className="text-base font-semibold text-slate-900">Recent Activities</h3>
<p bis_size='{"x":1122,"y":399,"w":184,"h":20,"abs_x":1602,"abs_y":442}' className="text-sm text-slate-500">Showing all recent activities</p>
</div>
</div>
<button bis_size='{"x":1343,"y":375,"w":24,"h":24,"abs_x":1823,"abs_y":418}' className="p-1 text-slate-400 hover:text-slate-600"><svg bis_size='{"x":1347,"y":379,"w":16,"h":16,"abs_x":1827,"abs_y":422}' className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
<div bis_size='{"x":1076,"y":443,"w":291,"h":352,"abs_x":1556,"abs_y":486}' className="flex-1 overflow-y-auto space-y-6 relative">

<div bis_size='{"x":1091,"y":451,"w":1,"h":336,"abs_x":1571,"abs_y":494}' className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-slate-100 -z-10"></div>

<div bis_size='{"x":1076,"y":467,"w":291,"h":64,"abs_x":1556,"abs_y":510}' className="flex gap-3">
<img bis_size='{"x":1076,"y":467,"w":32,"h":32,"abs_x":1556,"abs_y":510}' className="w-8 h-8 rounded-full border-2 border-white shadow-sm shrink-0" src="https://i.pravatar.cc/100?img=1"/>
<div bis_size='{"x":1120,"y":467,"w":247,"h":64,"abs_x":1600,"abs_y":510}' className="text-sm">
<p bis_size='{"x":1120,"y":467,"w":247,"h":44,"abs_x":1600,"abs_y":510}' className="text-slate-700 font-medium"><span bis_size='{"x":1120,"y":468,"w":74,"h":17,"abs_x":1600,"abs_y":511}' className="text-slate-900">Olivia Rhye</span> has been invited to <span bis_size='{"x":1120,"y":488,"w":110,"h":17,"abs_x":1600,"abs_y":531}' className="font-semibold text-slate-900">/Graphic-design</span> by <span bis_size='{"x":1254,"y":487,"w":87,"h":24,"abs_x":1734,"abs_y":530}' className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-semibold"><span bis_size='{"x":1260,"y":496,"w":6,"h":6,"abs_x":1740,"abs_y":539}' className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>David Visuals</span></p>
<p bis_size='{"x":1120,"y":515,"w":247,"h":16,"abs_x":1600,"abs_y":558}' className="text-xs text-slate-400 mt-1">12 hours ago</p>
</div>
</div>

<div bis_size='{"x":1076,"y":555,"w":291,"h":64,"abs_x":1556,"abs_y":598}' className="flex gap-3">
<img bis_size='{"x":1076,"y":555,"w":32,"h":32,"abs_x":1556,"abs_y":598}' className="w-8 h-8 rounded-full border-2 border-white shadow-sm shrink-0" src="https://i.pravatar.cc/100?img=11"/>
<div bis_size='{"x":1120,"y":555,"w":247,"h":64,"abs_x":1600,"abs_y":598}' className="text-sm">
<p bis_size='{"x":1120,"y":555,"w":247,"h":44,"abs_x":1600,"abs_y":598}' className="text-slate-700 font-medium"><span bis_size='{"x":1120,"y":556,"w":83,"h":17,"abs_x":1600,"abs_y":599}' className="text-slate-900">Terry James</span> has been invited to <span bis_size='{"x":1120,"y":576,"w":110,"h":17,"abs_x":1600,"abs_y":619}' className="font-semibold text-slate-900">/Graphic-design</span> by <span bis_size='{"x":1254,"y":575,"w":87,"h":24,"abs_x":1734,"abs_y":618}' className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-semibold"><span bis_size='{"x":1260,"y":584,"w":6,"h":6,"abs_x":1740,"abs_y":627}' className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>David Visuals</span></p>
<p bis_size='{"x":1120,"y":603,"w":247,"h":16,"abs_x":1600,"abs_y":646}' className="text-xs text-slate-400 mt-1">12 hours ago</p>
</div>
</div>

<div bis_size='{"x":1076,"y":643,"w":291,"h":64,"abs_x":1556,"abs_y":686}' className="flex gap-3">
<img bis_size='{"x":1076,"y":643,"w":32,"h":32,"abs_x":1556,"abs_y":686}' className="w-8 h-8 rounded-full border-2 border-white shadow-sm shrink-0" src="https://i.pravatar.cc/100?img=5"/>
<div bis_size='{"x":1120,"y":643,"w":247,"h":64,"abs_x":1600,"abs_y":686}' className="text-sm">
<p bis_size='{"x":1120,"y":643,"w":247,"h":44,"abs_x":1600,"abs_y":686}' className="text-slate-700 font-medium"><span bis_size='{"x":1120,"y":644,"w":93,"h":17,"abs_x":1600,"abs_y":687}' className="text-slate-900">Carla Baptista</span> has been invited to <span bis_size='{"x":1120,"y":664,"w":110,"h":17,"abs_x":1600,"abs_y":707}' className="font-semibold text-slate-900">/Graphic-design</span> by <span bis_size='{"x":1254,"y":663,"w":87,"h":24,"abs_x":1734,"abs_y":706}' className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-semibold"><span bis_size='{"x":1260,"y":672,"w":6,"h":6,"abs_x":1740,"abs_y":715}' className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>David Visuals</span></p>
<p bis_size='{"x":1120,"y":691,"w":247,"h":16,"abs_x":1600,"abs_y":734}' className="text-xs text-slate-400 mt-1">12 hours ago</p>
</div>
</div>

<div bis_size='{"x":1076,"y":731,"w":291,"h":64,"abs_x":1556,"abs_y":774}' className="flex gap-3">
<img bis_size='{"x":1076,"y":731,"w":32,"h":32,"abs_x":1556,"abs_y":774}' className="w-8 h-8 rounded-full border-2 border-white shadow-sm shrink-0" src="https://i.pravatar.cc/100?img=8"/>
<div bis_size='{"x":1120,"y":731,"w":247,"h":64,"abs_x":1600,"abs_y":774}' className="text-sm">
<p bis_size='{"x":1120,"y":731,"w":247,"h":44,"abs_x":1600,"abs_y":774}' className="text-slate-700 font-medium"><span bis_size='{"x":1120,"y":732,"w":80,"h":17,"abs_x":1600,"abs_y":775}' className="text-slate-900">Erin Vetrovs</span> has been invited to <span bis_size='{"x":1120,"y":752,"w":110,"h":17,"abs_x":1600,"abs_y":795}' className="font-semibold text-slate-900">/Graphic-design</span> by <span bis_size='{"x":1254,"y":751,"w":87,"h":24,"abs_x":1734,"abs_y":794}' className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded text-[10px] font-semibold"><span bis_size='{"x":1260,"y":760,"w":6,"h":6,"abs_x":1740,"abs_y":803}' className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>David Visuals</span></p>
<p bis_size='{"x":1120,"y":779,"w":247,"h":16,"abs_x":1600,"abs_y":822}' className="text-xs text-slate-400 mt-1">12 hours ago</p>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":320,"y":852,"w":1073,"h":576,"abs_x":800,"abs_y":895}' className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
<div bis_size='{"x":321,"y":853,"w":1071,"h":145,"abs_x":801,"abs_y":896}' className="p-6 border-b border-slate-200">
<div bis_size='{"x":345,"y":877,"w":1023,"h":44,"abs_x":825,"abs_y":920}' className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
<div bis_size='{"x":345,"y":877,"w":265,"h":44,"abs_x":825,"abs_y":920}' className="flex items-center gap-3">
<div bis_size='{"x":345,"y":882,"w":34,"h":34,"abs_x":825,"abs_y":925}' className="p-2 bg-slate-50 rounded-lg border border-slate-100">
<svg bis_size='{"x":354,"y":891,"w":16,"h":16,"abs_x":834,"abs_y":934}' className="lucide lucide-file-check-2 w-4 h-4 text-slate-500" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14 20 2 2 4-4"></path></svg>
</div>
<div bis_size='{"x":391,"y":877,"w":219,"h":44,"abs_x":871,"abs_y":920}'>
<h3 bis_size='{"x":391,"y":877,"w":219,"h":24,"abs_x":871,"abs_y":920}' className="text-base font-semibold text-slate-900">Assigned to Me</h3>
<p bis_size='{"x":391,"y":901,"w":219,"h":20,"abs_x":871,"abs_y":944}' className="text-sm text-slate-500">Showing all tasks assigned to me</p>
</div>
</div>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="p-1 text-slate-400 hover:text-slate-600 sm:hidden self-end"><svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></button>
</div>
<div bis_size='{"x":345,"y":937,"w":1023,"h":36,"abs_x":825,"abs_y":980}' className="flex items-center justify-between">
<div bis_size='{"x":345,"y":937,"w":221,"h":36,"abs_x":825,"abs_y":980}' className="flex p-1 bg-slate-100 rounded-lg">
<button bis_size='{"x":349,"y":941,"w":75,"h":28,"abs_x":829,"abs_y":984}' className="px-3 py-1.5 bg-white text-slate-900 text-xs font-semibold rounded-md shadow-sm">All Tasks</button>
<button bis_size='{"x":424,"y":941,"w":54,"h":28,"abs_x":904,"abs_y":984}' className="px-3 py-1.5 text-slate-500 hover:text-slate-700 text-xs font-medium">Done</button>
<button bis_size='{"x":479,"y":941,"w":83,"h":28,"abs_x":959,"abs_y":984}' className="px-3 py-1.5 text-slate-500 hover:text-slate-700 text-xs font-medium">Due Tasks</button>
</div>
<div bis_size='{"x":1211,"y":940,"w":156,"h":30,"abs_x":1691,"abs_y":983}' className="flex gap-2">
<button bis_size='{"x":1211,"y":940,"w":76,"h":30,"abs_x":1691,"abs_y":983}' className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
<svg bis_size='{"x":1224,"y":948,"w":14,"h":14,"abs_x":1704,"abs_y":991}' className="lucide lucide-filter w-3.5 h-3.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Filter
                            </button>
<button bis_size='{"x":1296,"y":940,"w":71,"h":30,"abs_x":1776,"abs_y":983}' className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
<svg bis_size='{"x":1309,"y":948,"w":14,"h":14,"abs_x":1789,"abs_y":991}' className="lucide lucide-arrow-up-down w-3.5 h-3.5" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg> Sort
                            </button>
</div>
</div>
</div>
<div bis_size='{"x":321,"y":998,"w":1071,"h":429,"abs_x":801,"abs_y":1041}' className="overflow-x-auto">
<table bis_size='{"x":321,"y":998,"w":1071,"h":429,"abs_x":801,"abs_y":1041}' className="w-full text-left border-collapse">
<thead bis_size='{"x":321,"y":998,"w":1071,"h":56,"abs_x":801,"abs_y":1041}'>
<tr bis_size='{"x":321,"y":998,"w":1071,"h":56,"abs_x":801,"abs_y":1041}' className="bg-white border-b border-slate-200">
<th bis_size='{"x":321,"y":998,"w":48,"h":56,"abs_x":801,"abs_y":1041}' className="p-4 w-10">
<input bis_size='{"x":337,"y":1016,"w":16,"h":16,"abs_x":817,"abs_y":1059}' className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox"/>
</th>
<th bis_size='{"x":369,"y":998,"w":235,"h":56,"abs_x":849,"abs_y":1041}' className="p-4 text-xs font-medium uppercase text-slate-500 tracking-wider">
<div bis_size='{"x":385,"y":1018,"w":203,"h":16,"abs_x":865,"abs_y":1061}' className="flex items-center gap-2"><svg bis_size='{"x":385,"y":1020,"w":12,"h":12,"abs_x":865,"abs_y":1063}' className="lucide lucide-menu w-3 h-3" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg> Task Name</div>
</th>
<th bis_size='{"x":604,"y":998,"w":130,"h":56,"abs_x":1084,"abs_y":1041}' className="p-4 text-xs font-medium uppercase text-slate-500 tracking-wider">
<div bis_size='{"x":620,"y":1018,"w":98,"h":16,"abs_x":1100,"abs_y":1061}' className="flex items-center gap-2"><svg bis_size='{"x":620,"y":1020,"w":12,"h":12,"abs_x":1100,"abs_y":1063}' className="lucide lucide-loader w-3 h-3" data-lucide="loader" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg> Status</div>
</th>
<th bis_size='{"x":735,"y":998,"w":116,"h":56,"abs_x":1215,"abs_y":1041}' className="p-4 text-xs font-medium uppercase text-slate-500 tracking-wider">
<div bis_size='{"x":751,"y":1018,"w":84,"h":16,"abs_x":1231,"abs_y":1061}' className="flex items-center gap-2"><svg bis_size='{"x":751,"y":1020,"w":12,"h":12,"abs_x":1231,"abs_y":1063}' className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Assignee</div>
</th>
<th bis_size='{"x":851,"y":998,"w":139,"h":56,"abs_x":1331,"abs_y":1041}' className="p-4 text-xs font-medium uppercase text-slate-500 tracking-wider">
<div bis_size='{"x":867,"y":1018,"w":107,"h":16,"abs_x":1347,"abs_y":1061}' className="flex items-center gap-2"><svg bis_size='{"x":867,"y":1020,"w":12,"h":12,"abs_x":1347,"abs_y":1063}' className="lucide lucide-folder w-3 h-3" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> Projects</div>
</th>
<th bis_size='{"x":991,"y":998,"w":164,"h":56,"abs_x":1471,"abs_y":1041}' className="p-4 text-xs font-medium uppercase text-slate-500 tracking-wider">
<div bis_size='{"x":1007,"y":1018,"w":132,"h":16,"abs_x":1487,"abs_y":1061}' className="flex items-center gap-2"><svg bis_size='{"x":1007,"y":1020,"w":12,"h":12,"abs_x":1487,"abs_y":1063}' className="lucide lucide-circle-dashed w-3 h-3" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg> Completion</div>
</th>
<th bis_size='{"x":1155,"y":998,"w":188,"h":56,"abs_x":1635,"abs_y":1041}' className="p-4 text-xs font-medium uppercase text-slate-500 tracking-wider">
<div bis_size='{"x":1171,"y":1018,"w":156,"h":16,"abs_x":1651,"abs_y":1061}' className="flex items-center gap-2"><svg bis_size='{"x":1171,"y":1020,"w":12,"h":12,"abs_x":1651,"abs_y":1063}' className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Due Date</div>
</th>
<th bis_size='{"x":1344,"y":998,"w":48,"h":56,"abs_x":1824,"abs_y":1041}' className="p-4 w-10"></th>
</tr>
</thead>
<tbody bis_size='{"x":321,"y":1054,"w":1071,"h":372,"abs_x":801,"abs_y":1097}' className="divide-y divide-slate-100">

<tr bis_size='{"x":321,"y":1054,"w":1071,"h":81,"abs_x":801,"abs_y":1097}' className="hover:bg-slate-50 group transition-colors">
<td bis_size='{"x":321,"y":1054,"w":48,"h":81,"abs_x":801,"abs_y":1097}' className="p-4">
<input bis_size='{"x":337,"y":1085,"w":16,"h":16,"abs_x":817,"abs_y":1128}' className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox"/>
</td>
<td bis_size='{"x":369,"y":1054,"w":235,"h":81,"abs_x":849,"abs_y":1097}' className="p-4">
<span bis_size='{"x":385,"y":1075,"w":127,"h":41,"abs_x":865,"abs_y":1118}' className="text-sm font-semibold text-slate-900">Redesign analytics dashboard</span>
</td>
<td bis_size='{"x":604,"y":1054,"w":130,"h":81,"abs_x":1084,"abs_y":1097}' className="p-4">
<span bis_size='{"x":620,"y":1086,"w":70,"h":22,"abs_x":1100,"abs_y":1129}' className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<span bis_size='{"x":631,"y":1094,"w":6,"h":6,"abs_x":1111,"abs_y":1137}' className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                    </span>
</td>
<td bis_size='{"x":735,"y":1054,"w":116,"h":81,"abs_x":1215,"abs_y":1097}' className="p-4">
<div bis_size='{"x":751,"y":1083,"w":84,"h":24,"abs_x":1231,"abs_y":1126}' className="flex -space-x-2">
<img alt="" bis_size='{"x":751,"y":1083,"w":24,"h":24,"abs_x":1231,"abs_y":1126}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=3"/>
<img alt="" bis_size='{"x":767,"y":1083,"w":24,"h":24,"abs_x":1247,"abs_y":1126}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=4"/>
<div bis_size='{"x":783,"y":1083,"w":24,"h":24,"abs_x":1263,"abs_y":1126}' className="w-6 h-6 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+2</div>
</div>
</td>
<td bis_size='{"x":851,"y":1054,"w":139,"h":81,"abs_x":1331,"abs_y":1097}' className="p-4 text-sm text-slate-600">
                                    /Graphic-design
                                </td>
<td bis_size='{"x":991,"y":1054,"w":164,"h":81,"abs_x":1471,"abs_y":1097}' className="p-4">
<div bis_size='{"x":1007,"y":1087,"w":132,"h":16,"abs_x":1487,"abs_y":1130}' className="flex items-center gap-3">
<span bis_size='{"x":1007,"y":1087,"w":24,"h":16,"abs_x":1487,"abs_y":1130}' className="text-xs font-medium w-6 text-slate-700">70%</span>
<div bis_size='{"x":1043,"y":1092,"w":96,"h":6,"abs_x":1523,"abs_y":1135}' className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div bis_size='{"x":1043,"y":1092,"w":67,"h":6,"abs_x":1523,"abs_y":1135}' className="h-full bg-indigo-500 rounded-full w-[70%]"></div>
</div>
</div>
</td>
<td bis_size='{"x":1155,"y":1054,"w":188,"h":81,"abs_x":1635,"abs_y":1097}' className="p-4 text-xs font-medium text-slate-500">
                                    Nov 10, 2024 - Dec 4, 2025
                                </td>
<td bis_size='{"x":1344,"y":1054,"w":48,"h":81,"abs_x":1824,"abs_y":1097}' className="p-4 text-right">
<button bis_size='{"x":1360,"y":1085,"w":16,"h":16,"abs_x":1840,"abs_y":1128}' className="text-slate-300 hover:text-slate-600"><svg bis_size='{"x":1360,"y":1085,"w":16,"h":16,"abs_x":1840,"abs_y":1128}' className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr bis_size='{"x":321,"y":1135,"w":1071,"h":73,"abs_x":801,"abs_y":1178}' className="hover:bg-slate-50 group transition-colors">
<td bis_size='{"x":321,"y":1135,"w":48,"h":73,"abs_x":801,"abs_y":1178}' className="p-4">
<input bis_size='{"x":337,"y":1162,"w":16,"h":16,"abs_x":817,"abs_y":1205}' className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox"/>
</td>
<td bis_size='{"x":369,"y":1135,"w":235,"h":73,"abs_x":849,"abs_y":1178}' className="p-4">
<span bis_size='{"x":385,"y":1164,"w":136,"h":17,"abs_x":865,"abs_y":1207}' className="text-sm font-semibold text-slate-900">Create landing page</span>
</td>
<td bis_size='{"x":604,"y":1135,"w":130,"h":73,"abs_x":1084,"abs_y":1178}' className="p-4">
<span bis_size='{"x":620,"y":1163,"w":83,"h":22,"abs_x":1100,"abs_y":1206}' className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
<span bis_size='{"x":631,"y":1171,"w":6,"h":6,"abs_x":1111,"abs_y":1214}' className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Planning
                                    </span>
</td>
<td bis_size='{"x":735,"y":1135,"w":116,"h":73,"abs_x":1215,"abs_y":1178}' className="p-4">
<div bis_size='{"x":751,"y":1160,"w":84,"h":24,"abs_x":1231,"abs_y":1203}' className="flex -space-x-2">
<img alt="" bis_size='{"x":751,"y":1160,"w":24,"h":24,"abs_x":1231,"abs_y":1203}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=9"/>
<img alt="" bis_size='{"x":767,"y":1160,"w":24,"h":24,"abs_x":1247,"abs_y":1203}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=10"/>
<div bis_size='{"x":783,"y":1160,"w":24,"h":24,"abs_x":1263,"abs_y":1203}' className="w-6 h-6 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+2</div>
</div>
</td>
<td bis_size='{"x":851,"y":1135,"w":139,"h":73,"abs_x":1331,"abs_y":1178}' className="p-4 text-sm text-slate-600">
                                    /Graphic-design
                                </td>
<td bis_size='{"x":991,"y":1135,"w":164,"h":73,"abs_x":1471,"abs_y":1178}' className="p-4">
<div bis_size='{"x":1007,"y":1164,"w":132,"h":16,"abs_x":1487,"abs_y":1207}' className="flex items-center gap-3">
<span bis_size='{"x":1007,"y":1164,"w":24,"h":16,"abs_x":1487,"abs_y":1207}' className="text-xs font-medium w-6 text-slate-700">50%</span>
<div bis_size='{"x":1043,"y":1169,"w":96,"h":6,"abs_x":1523,"abs_y":1212}' className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div bis_size='{"x":1043,"y":1169,"w":48,"h":6,"abs_x":1523,"abs_y":1212}' className="h-full bg-indigo-400 rounded-full w-[50%]"></div>
</div>
</div>
</td>
<td bis_size='{"x":1155,"y":1135,"w":188,"h":73,"abs_x":1635,"abs_y":1178}' className="p-4 text-xs font-medium text-slate-500">
                                    Nov 10, 2024 - Dec 4, 2025
                                </td>
<td bis_size='{"x":1344,"y":1135,"w":48,"h":73,"abs_x":1824,"abs_y":1178}' className="p-4 text-right">
<button bis_size='{"x":1360,"y":1162,"w":16,"h":16,"abs_x":1840,"abs_y":1205}' className="text-slate-300 hover:text-slate-600"><svg bis_size='{"x":1360,"y":1162,"w":16,"h":16,"abs_x":1840,"abs_y":1205}' className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr bis_size='{"x":321,"y":1208,"w":1071,"h":73,"abs_x":801,"abs_y":1251}' className="hover:bg-slate-50 group transition-colors">
<td bis_size='{"x":321,"y":1208,"w":48,"h":73,"abs_x":801,"abs_y":1251}' className="p-4">
<input bis_size='{"x":337,"y":1235,"w":16,"h":16,"abs_x":817,"abs_y":1278}' className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox"/>
</td>
<td bis_size='{"x":369,"y":1208,"w":235,"h":73,"abs_x":849,"abs_y":1251}' className="p-4">
<span bis_size='{"x":385,"y":1237,"w":140,"h":17,"abs_x":865,"abs_y":1280}' className="text-sm font-semibold text-slate-900">Redesign news page</span>
</td>
<td bis_size='{"x":604,"y":1208,"w":130,"h":73,"abs_x":1084,"abs_y":1251}' className="p-4">
<span bis_size='{"x":620,"y":1236,"w":70,"h":22,"abs_x":1100,"abs_y":1279}' className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<span bis_size='{"x":631,"y":1244,"w":6,"h":6,"abs_x":1111,"abs_y":1287}' className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                    </span>
</td>
<td bis_size='{"x":735,"y":1208,"w":116,"h":73,"abs_x":1215,"abs_y":1251}' className="p-4">
<div bis_size='{"x":751,"y":1233,"w":84,"h":24,"abs_x":1231,"abs_y":1276}' className="flex -space-x-2">
<img alt="" bis_size='{"x":751,"y":1233,"w":24,"h":24,"abs_x":1231,"abs_y":1276}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=12"/>
<img alt="" bis_size='{"x":767,"y":1233,"w":24,"h":24,"abs_x":1247,"abs_y":1276}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=15"/>
<div bis_size='{"x":783,"y":1233,"w":24,"h":24,"abs_x":1263,"abs_y":1276}' className="w-6 h-6 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+2</div>
</div>
</td>
<td bis_size='{"x":851,"y":1208,"w":139,"h":73,"abs_x":1331,"abs_y":1251}' className="p-4 text-sm text-slate-600">
                                    /Graphic-design
                                </td>
<td bis_size='{"x":991,"y":1208,"w":164,"h":73,"abs_x":1471,"abs_y":1251}' className="p-4">
<div bis_size='{"x":1007,"y":1237,"w":132,"h":16,"abs_x":1487,"abs_y":1280}' className="flex items-center gap-3">
<span bis_size='{"x":1007,"y":1237,"w":24,"h":16,"abs_x":1487,"abs_y":1280}' className="text-xs font-medium w-6 text-slate-700">70%</span>
<div bis_size='{"x":1043,"y":1242,"w":96,"h":6,"abs_x":1523,"abs_y":1285}' className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div bis_size='{"x":1043,"y":1242,"w":67,"h":6,"abs_x":1523,"abs_y":1285}' className="h-full bg-indigo-500 rounded-full w-[70%]"></div>
</div>
</div>
</td>
<td bis_size='{"x":1155,"y":1208,"w":188,"h":73,"abs_x":1635,"abs_y":1251}' className="p-4 text-xs font-medium text-slate-500">
                                    Nov 10, 2024 - Dec 4, 2025
                                </td>
<td bis_size='{"x":1344,"y":1208,"w":48,"h":73,"abs_x":1824,"abs_y":1251}' className="p-4 text-right">
<button bis_size='{"x":1360,"y":1235,"w":16,"h":16,"abs_x":1840,"abs_y":1278}' className="text-slate-300 hover:text-slate-600"><svg bis_size='{"x":1360,"y":1235,"w":16,"h":16,"abs_x":1840,"abs_y":1278}' className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr bis_size='{"x":321,"y":1281,"w":1071,"h":73,"abs_x":801,"abs_y":1324}' className="hover:bg-slate-50 group transition-colors">
<td bis_size='{"x":321,"y":1281,"w":48,"h":73,"abs_x":801,"abs_y":1324}' className="p-4">
<input bis_size='{"x":337,"y":1308,"w":16,"h":16,"abs_x":817,"abs_y":1351}' className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox"/>
</td>
<td bis_size='{"x":369,"y":1281,"w":235,"h":73,"abs_x":849,"abs_y":1324}' className="p-4">
<span bis_size='{"x":385,"y":1310,"w":69,"h":17,"abs_x":865,"abs_y":1353}' className="text-sm font-semibold text-slate-900">Copywrite</span>
</td>
<td bis_size='{"x":604,"y":1281,"w":130,"h":73,"abs_x":1084,"abs_y":1324}' className="p-4">
<span bis_size='{"x":620,"y":1309,"w":70,"h":22,"abs_x":1100,"abs_y":1352}' className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
<span bis_size='{"x":631,"y":1317,"w":6,"h":6,"abs_x":1111,"abs_y":1360}' className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                                    </span>
</td>
<td bis_size='{"x":735,"y":1281,"w":116,"h":73,"abs_x":1215,"abs_y":1324}' className="p-4">
<div bis_size='{"x":751,"y":1306,"w":84,"h":24,"abs_x":1231,"abs_y":1349}' className="flex -space-x-2">
<img alt="" bis_size='{"x":751,"y":1306,"w":24,"h":24,"abs_x":1231,"abs_y":1349}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=20"/>
<img alt="" bis_size='{"x":767,"y":1306,"w":24,"h":24,"abs_x":1247,"abs_y":1349}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=21"/>
<div bis_size='{"x":783,"y":1306,"w":24,"h":24,"abs_x":1263,"abs_y":1349}' className="w-6 h-6 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+2</div>
</div>
</td>
<td bis_size='{"x":851,"y":1281,"w":139,"h":73,"abs_x":1331,"abs_y":1324}' className="p-4 text-sm text-slate-600">
                                    /Graphic-design
                                </td>
<td bis_size='{"x":991,"y":1281,"w":164,"h":73,"abs_x":1471,"abs_y":1324}' className="p-4">
<div bis_size='{"x":1007,"y":1310,"w":132,"h":16,"abs_x":1487,"abs_y":1353}' className="flex items-center gap-3">
<span bis_size='{"x":1007,"y":1310,"w":24,"h":16,"abs_x":1487,"abs_y":1353}' className="text-xs font-medium w-6 text-slate-700">50%</span>
<div bis_size='{"x":1043,"y":1315,"w":96,"h":6,"abs_x":1523,"abs_y":1358}' className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div bis_size='{"x":1043,"y":1315,"w":48,"h":6,"abs_x":1523,"abs_y":1358}' className="h-full bg-indigo-500 rounded-full w-[50%]"></div>
</div>
</div>
</td>
<td bis_size='{"x":1155,"y":1281,"w":188,"h":73,"abs_x":1635,"abs_y":1324}' className="p-4 text-xs font-medium text-slate-500">
                                    Nov 10, 2024 - Dec 4, 2025
                                </td>
<td bis_size='{"x":1344,"y":1281,"w":48,"h":73,"abs_x":1824,"abs_y":1324}' className="p-4 text-right">
<button bis_size='{"x":1360,"y":1308,"w":16,"h":16,"abs_x":1840,"abs_y":1351}' className="text-slate-300 hover:text-slate-600"><svg bis_size='{"x":1360,"y":1308,"w":16,"h":16,"abs_x":1840,"abs_y":1351}' className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr bis_size='{"x":321,"y":1354,"w":1071,"h":72,"abs_x":801,"abs_y":1397}' className="hover:bg-slate-50 group transition-colors">
<td bis_size='{"x":321,"y":1354,"w":48,"h":72,"abs_x":801,"abs_y":1397}' className="p-4">
<input bis_size='{"x":337,"y":1381,"w":16,"h":16,"abs_x":817,"abs_y":1424}' className="w-4 h-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500" type="checkbox"/>
</td>
<td bis_size='{"x":369,"y":1354,"w":235,"h":72,"abs_x":849,"abs_y":1397}' className="p-4">
<span bis_size='{"x":385,"y":1383,"w":112,"h":17,"abs_x":865,"abs_y":1426}' className="text-sm font-semibold text-slate-900">Mobile Redesign</span>
</td>
<td bis_size='{"x":604,"y":1354,"w":130,"h":72,"abs_x":1084,"abs_y":1397}' className="p-4">
<span bis_size='{"x":620,"y":1372,"w":98,"h":38,"abs_x":1100,"abs_y":1415}' className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-50 text-pink-700 border border-pink-100">
<span bis_size='{"x":631,"y":1388,"w":6,"h":6,"abs_x":1111,"abs_y":1431}' className="w-1.5 h-1.5 rounded-full bg-pink-500"></span> In Progress
                                    </span>
</td>
<td bis_size='{"x":735,"y":1354,"w":116,"h":72,"abs_x":1215,"abs_y":1397}' className="p-4">
<div bis_size='{"x":751,"y":1379,"w":84,"h":24,"abs_x":1231,"abs_y":1422}' className="flex -space-x-2">
<img alt="" bis_size='{"x":751,"y":1379,"w":24,"h":24,"abs_x":1231,"abs_y":1422}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=31"/>
<img alt="" bis_size='{"x":767,"y":1379,"w":24,"h":24,"abs_x":1247,"abs_y":1422}' className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=32"/>
<div bis_size='{"x":783,"y":1379,"w":24,"h":24,"abs_x":1263,"abs_y":1422}' className="w-6 h-6 rounded-full border border-white bg-slate-100 flex items-center justify-center text-[9px] text-slate-500 font-medium">+2</div>
</div>
</td>
<td bis_size='{"x":851,"y":1354,"w":139,"h":72,"abs_x":1331,"abs_y":1397}' className="p-4 text-sm text-slate-600">
                                    /Graphic-design
                                </td>
<td bis_size='{"x":991,"y":1354,"w":164,"h":72,"abs_x":1471,"abs_y":1397}' className="p-4">
<div bis_size='{"x":1007,"y":1383,"w":132,"h":16,"abs_x":1487,"abs_y":1426}' className="flex items-center gap-3">
<span bis_size='{"x":1007,"y":1383,"w":24,"h":16,"abs_x":1487,"abs_y":1426}' className="text-xs font-medium w-6 text-slate-700">33%</span>
<div bis_size='{"x":1043,"y":1388,"w":96,"h":6,"abs_x":1523,"abs_y":1431}' className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div bis_size='{"x":1043,"y":1388,"w":31,"h":6,"abs_x":1523,"abs_y":1431}' className="h-full bg-indigo-500 rounded-full w-[33%]"></div>
</div>
</div>
</td>
<td bis_size='{"x":1155,"y":1354,"w":188,"h":72,"abs_x":1635,"abs_y":1397}' className="p-4 text-xs font-medium text-slate-500">
                                    Nov 10, 2024 - Dec 4, 2025
                                </td>
<td bis_size='{"x":1344,"y":1354,"w":48,"h":72,"abs_x":1824,"abs_y":1397}' className="p-4 text-right">
<button bis_size='{"x":1360,"y":1381,"w":16,"h":16,"abs_x":1840,"abs_y":1424}' className="text-slate-300 hover:text-slate-600"><svg bis_size='{"x":1360,"y":1381,"w":16,"h":16,"abs_x":1840,"abs_y":1424}' className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


    </>
  );
}
