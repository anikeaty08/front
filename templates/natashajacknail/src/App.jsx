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
      

<nav bis_size='{"x":0,"y":0,"w":1425,"h":97,"abs_x":480,"abs_y":43}' className="sticky top-0 z-50 w-full border-b bg-[#fff0f3]/90 backdrop-blur-xl border-rose-100" style={{}}>
<div bis_size='{"x":136,"y":0,"w":1152,"h":96,"abs_x":616,"abs_y":43}' className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
<div bis_size='{"x":160,"y":17,"w":525,"h":61,"abs_x":640,"abs_y":60}' className="flex items-center gap-10">

<a bis_size='{"x":160,"y":17,"w":176,"h":61,"abs_x":640,"abs_y":60}' className="group flex flex-col items-center justify-center gap-0.5 py-1" href="#">
<div bis_size='{"x":160,"y":21,"w":176,"h":38,"abs_x":640,"abs_y":64}' className="flex items-center gap-2 transition-transform duration-500 group-hover:scale-105">

<svg bis_size='{"x":160,"y":24,"w":20,"h":32,"abs_x":640,"abs_y":67}' className="h-8 w-5 text-[#4a3434] opacity-90" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 48">
<path bis_size='{"x":170,"y":27,"w":5,"h":26,"abs_x":650,"abs_y":70}' d="M20 44C12 36 8 20 18 4" strokeLinecap="round"></path>
<path bis_size='{"x":166,"y":40,"w":5,"h":8,"abs_x":646,"abs_y":83}' d="M14 36C8 34 4 30 6 24" strokeLinecap="round"></path>
<path bis_size='{"x":165,"y":31,"w":3,"h":10,"abs_x":645,"abs_y":74}' d="M10 26C4 22 4 16 8 10" strokeLinecap="round"></path>
<path bis_size='{"x":171,"y":25,"w":2,"h":7,"abs_x":651,"abs_y":68}' d="M16 14C12 10 12 6 16 2" strokeLinecap="round"></path>
<circle bis_size='{"x":165,"y":39,"w":2,"h":2,"abs_x":645,"abs_y":82}' cx="6" cy="24" fill="currentColor" r="1.5" stroke="none"></circle>
<circle bis_size='{"x":166,"y":30,"w":2,"h":2,"abs_x":646,"abs_y":73}' cx="8" cy="10" fill="currentColor" r="1.5" stroke="none"></circle>
<circle bis_size='{"x":172,"y":24,"w":2,"h":2,"abs_x":652,"abs_y":67}' cx="16" cy="2" fill="currentColor" r="1.5" stroke="none"></circle>
</svg>

<div bis_size='{"x":188,"y":21,"w":120,"h":38,"abs_x":668,"abs_y":64}' className="flex flex-col items-center text-[#4a3434]">
<span bis_size='{"x":190,"y":21,"w":116,"h":18,"abs_x":670,"abs_y":64}' className="font-serif text-lg font-medium leading-none tracking-widest">NATASHA'S</span>
<span bis_size='{"x":188,"y":41,"w":120,"h":18,"abs_x":668,"abs_y":84}' className="mt-0.5 font-serif text-lg font-medium leading-none tracking-widest">NAIL ROOM</span>
</div>

<svg bis_size='{"x":316,"y":24,"w":20,"h":32,"abs_x":796,"abs_y":67}' className="-scale-x-100 h-8 w-5 text-[#4a3434] opacity-90" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 48">
<path bis_size='{"x":321,"y":27,"w":5,"h":26,"abs_x":801,"abs_y":70}' d="M20 44C12 36 8 20 18 4" strokeLinecap="round"></path>
<path bis_size='{"x":325,"y":40,"w":5,"h":8,"abs_x":805,"abs_y":83}' d="M14 36C8 34 4 30 6 24" strokeLinecap="round"></path>
<path bis_size='{"x":328,"y":31,"w":3,"h":10,"abs_x":808,"abs_y":74}' d="M10 26C4 22 4 16 8 10" strokeLinecap="round"></path>
<path bis_size='{"x":324,"y":25,"w":2,"h":7,"abs_x":804,"abs_y":68}' d="M16 14C12 10 12 6 16 2" strokeLinecap="round"></path>
<circle bis_size='{"x":329,"y":39,"w":2,"h":2,"abs_x":809,"abs_y":82}' cx="6" cy="24" fill="currentColor" r="1.5" stroke="none"></circle>
<circle bis_size='{"x":328,"y":30,"w":2,"h":1,"abs_x":808,"abs_y":73}' cx="8" cy="10" fill="currentColor" r="1.5" stroke="none"></circle>
<circle bis_size='{"x":323,"y":24,"w":2,"h":1,"abs_x":803,"abs_y":67}' cx="16" cy="2" fill="currentColor" r="1.5" stroke="none"></circle>
</svg>
</div>

<div bis_size='{"x":241,"y":60,"w":14,"h":14,"abs_x":721,"abs_y":103}' className="mt-[-1px] text-[#4a3434] opacity-80 transition-opacity duration-300 group-hover:opacity-100">
<svg bis_size='{"x":241,"y":60,"w":14,"h":14,"abs_x":721,"abs_y":103}' fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" viewbox="0 0 24 24" width="14">
<rect bis_size='{"x":246,"y":61,"w":4,"h":4,"abs_x":726,"abs_y":104}' height="8" rx="1" width="8" x="8" y="2"></rect>
<path bis_size='{"x":248,"y":66,"w":0,"h":7,"abs_x":728,"abs_y":109}' d="M12 10v12" stroke-opacity="0"></path>
<path bis_size='{"x":245,"y":66,"w":5,"h":7,"abs_x":725,"abs_y":109}' d="M7 10h10v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-9z"></path>
<path bis_size='{"x":250,"y":67,"w":1,"h":1,"abs_x":730,"abs_y":110}' d="M15 14l2-2" strokeWidth="0.8"></path>
<path bis_size='{"x":252,"y":70,"w":1,"h":1,"abs_x":732,"abs_y":113}' d="M18 17l2 2" strokeWidth="0.8"></path>
<path bis_size='{"x":244,"y":67,"w":1,"h":1,"abs_x":724,"abs_y":110}' d="M4 14l2-2" strokeWidth="0.8"></path>
</svg>
</div>
</a>
<div bis_size='{"x":376,"y":38,"w":308,"h":20,"abs_x":856,"abs_y":81}' className="hidden items-center gap-8 text-sm font-medium text-stone-500 md:flex" style={{}}>
<a bis_size='{"x":376,"y":38,"w":58,"h":20,"abs_x":856,"abs_y":81}' className="transition-colors hover:text-rose-900" href="#services" style={{}}>Services</a>
<a bis_size='{"x":467,"y":38,"w":40,"h":20,"abs_x":947,"abs_y":81}' className="transition-colors hover:text-rose-900" href="#about" style={{}}>About</a>
<a bis_size='{"x":539,"y":38,"w":56,"h":20,"abs_x":1019,"abs_y":81}' className="transition-colors hover:text-rose-900" href="#portfolio" style={{}}>Portfolio</a>
<a bis_size='{"x":627,"y":38,"w":57,"h":20,"abs_x":1107,"abs_y":81}' className="transition-colors hover:text-rose-900" href="#referral" style={{}}>Rewards</a>
</div>
</div>
<div bis_size='{"x":1113,"y":28,"w":151,"h":40,"abs_x":1593,"abs_y":71}' className="flex items-center gap-4">
<a bis_size='{"x":1113,"y":28,"w":151,"h":40,"abs_x":1593,"abs_y":71}' className="rounded-full px-6 py-2.5 text-sm font-medium shadow-sm transition-all hover:shadow-lg active:scale-95 bg-stone-900 text-white hover:bg-stone-800 hover:shadow-stone-900/20" href="#booking-widget" style={{}}>
                    Book on Fresha
                </a>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":97,"w":1425,"h":1426,"abs_x":480,"abs_y":140}' className="overflow-hidden md:pb-32 md:pt-24 pt-16 pb-20 relative">

<div bis_size='{"x":1137,"y":1,"w":384,"h":384,"abs_x":1617,"abs_y":44}' className="absolute -right-24 -top-24 h-96 w-96 rounded-full blur-[100px] bg-rose-200/40" style={{}}></div>
<div bis_size='{"x":-96,"y":289,"w":288,"h":288,"abs_x":384,"abs_y":332}' className="absolute top-48 -left-24 h-72 w-72 rounded-full blur-[100px] bg-pink-200/30"></div>
<div bis_size='{"x":136,"y":193,"w":1152,"h":1202,"abs_x":616,"abs_y":236}' className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
<div bis_size='{"x":160,"y":193,"w":1104,"h":538,"abs_x":640,"abs_y":236}' className="text-center">

<div bis_size='{"x":632,"y":193,"w":160,"h":34,"abs_x":1112,"abs_y":236}' className="animate-fade-in mx-auto mb-8 flex w-fit items-center justify-center gap-2 rounded-full border px-5 py-2 shadow-sm backdrop-blur transition-all border-rose-200 bg-white/60 hover:border-rose-300 hover:bg-white/80" style={{}}>
<svg bis_size='{"x":653,"y":203,"w":14,"h":14,"abs_x":1133,"abs_y":246}' className="lucide lucide-map-pin h-3.5 w-3.5 text-rose-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p bis_size='{"x":675,"y":202,"w":96,"h":16,"abs_x":1155,"abs_y":245}' className="text-xs font-medium uppercase tracking-wide text-stone-600" style={{}}>
                        Leicester, LE8
                    </p>
</div>

<h1 bis_size='{"x":264,"y":259,"w":896,"h":288,"abs_x":744,"abs_y":302}' className="animate-fade-in delay-100 mx-auto max-w-4xl font-serif text-6xl font-medium tracking-tight md:text-8xl text-stone-900" style={{}}>
                    Elegant nails designed <br bis_size='{"x":892,"y":348,"w":0,"h":109,"abs_x":1372,"abs_y":391}'/>
<span bis_size='{"x":469,"y":444,"w":486,"h":109,"abs_x":949,"abs_y":487}' className="bg-gradient-to-br bg-clip-text italic text-transparent from-stone-800 via-rose-800 to-rose-400" style={{}}>just for you.</span>
</h1>

<p bis_size='{"x":376,"y":579,"w":672,"h":56,"abs_x":856,"abs_y":622}' className="animate-fade-in delay-200 leading-relaxed md:text-xl text-lg font-light text-stone-500 max-w-2xl mt-8 mr-auto ml-auto">
                    Experience premium nail care in a relaxing, private studio. Specializing in structured gel manicures, restoration, and intricate nail art.
                </p>

<div bis_size='{"x":160,"y":683,"w":1104,"h":48,"abs_x":640,"abs_y":726}' className="animate-fade-in delay-300 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a bis_size='{"x":518,"y":683,"w":211,"h":48,"abs_x":998,"abs_y":726}' className="group inline-flex h-12 items-center justify-center rounded-full bg-[#0D1636] px-8 text-sm font-medium transition-all hover:bg-[#1a2b66] hover:shadow-lg active:scale-95 text-white hover:shadow-pink-900/20" href="#booking-widget">
                        Book Appointment
                        <svg bis_size='{"x":682,"y":699,"w":16,"h":16,"abs_x":1162,"abs_y":742}' className="lucide lucide-arrow-right ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a bis_size='{"x":746,"y":683,"w":159,"h":48,"abs_x":1226,"abs_y":726}' className="inline-flex h-12 items-center justify-center rounded-full border px-8 text-sm font-medium transition-all active:scale-95 border-stone-200 bg-white text-stone-700 hover:border-rose-200 hover:bg-rose-50" href="#referral" style={{}}>
                        Refer a Friend
                    </a>
</div>
</div>

<div bis_size='{"x":160,"y":827,"w":1104,"h":568,"abs_x":640,"abs_y":870}' className="animate-fade-in delay-300 mt-24 scroll-mt-32" id="booking-widget">
<div bis_size='{"x":160,"y":827,"w":1104,"h":568,"abs_x":640,"abs_y":870}' className="relative overflow-hidden rounded-3xl border p-2 shadow-2xl border-rose-100 bg-white shadow-rose-100/50" style={{}}>
<div bis_size='{"x":161,"y":828,"w":1102,"h":566,"abs_x":641,"abs_y":871}' className="absolute inset-0 bg-stone-50/50" style={{}}></div>
<div bis_size='{"x":169,"y":836,"w":1086,"h":550,"abs_x":649,"abs_y":879}' className="relative z-10 flex h-[650px] flex-col overflow-hidden rounded-2xl border md:h-[550px] md:flex-row border-stone-100 bg-white" style={{}}>

<div bis_size='{"x":170,"y":837,"w":361,"h":548,"abs_x":650,"abs_y":880}' className="hidden w-1/3 flex-col justify-between border-r p-10 md:flex border-stone-100 bg-rose-50/30" style={{}}>
<div bis_size='{"x":210,"y":877,"w":280,"h":296,"abs_x":690,"abs_y":920}' className="">
<h3 bis_size='{"x":210,"y":877,"w":280,"h":36,"abs_x":690,"abs_y":920}' className="font-serif text-3xl tracking-tight text-stone-900" style={{}}>Book Appointment</h3>
<p bis_size='{"x":210,"y":925,"w":280,"h":40,"abs_x":690,"abs_y":968}' className="mt-3 text-sm font-light text-stone-500" style={{}}>Select your services and preferred time slot directly below.</p>
<div bis_size='{"x":210,"y":1005,"w":280,"h":168,"abs_x":690,"abs_y":1048}' className="mt-10 space-y-6">
<div bis_size='{"x":210,"y":1005,"w":280,"h":40,"abs_x":690,"abs_y":1048}' className="flex items-center gap-4 text-sm text-stone-600" style={{}}>
<div bis_size='{"x":210,"y":1005,"w":40,"h":40,"abs_x":690,"abs_y":1048}' className="flex h-10 w-10 items-center justify-center rounded-full border text-rose-500 shadow-sm border-rose-100 bg-white" style={{}}>
<svg bis_size='{"x":222,"y":1017,"w":16,"h":16,"abs_x":702,"abs_y":1060}' className="lucide lucide-check h-4 w-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span bis_size='{"x":266,"y":1015,"w":136,"h":20,"abs_x":746,"abs_y":1058}' className="font-medium">Instant Confirmation</span>
</div>
<div bis_size='{"x":210,"y":1069,"w":280,"h":40,"abs_x":690,"abs_y":1112}' className="flex items-center gap-4 text-sm text-stone-600" style={{}}>
<div bis_size='{"x":210,"y":1069,"w":40,"h":40,"abs_x":690,"abs_y":1112}' className="flex h-10 w-10 items-center justify-center rounded-full border text-rose-500 shadow-sm border-rose-100 bg-white" style={{}}>
<svg bis_size='{"x":222,"y":1081,"w":16,"h":16,"abs_x":702,"abs_y":1124}' className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span bis_size='{"x":266,"y":1079,"w":135,"h":20,"abs_x":746,"abs_y":1122}' className="font-medium">24/7 Online Booking</span>
</div>
<div bis_size='{"x":210,"y":1133,"w":280,"h":40,"abs_x":690,"abs_y":1176}' className="flex items-center gap-4 text-sm text-stone-600" style={{}}>
<div bis_size='{"x":210,"y":1133,"w":40,"h":40,"abs_x":690,"abs_y":1176}' className="flex h-10 w-10 items-center justify-center rounded-full border text-rose-500 shadow-sm border-rose-100 bg-white" style={{}}>
<svg bis_size='{"x":222,"y":1145,"w":16,"h":16,"abs_x":702,"abs_y":1188}' className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span bis_size='{"x":266,"y":1143,"w":109,"h":20,"abs_x":746,"abs_y":1186}' className="font-medium">Secure Payment</span>
</div>
</div>
</div>
<div bis_size='{"x":210,"y":1264,"w":280,"h":81,"abs_x":690,"abs_y":1307}' className="mt-auto border-t pt-8 border-rose-200/50" style={{}}>
<div bis_size='{"x":210,"y":1297,"w":280,"h":48,"abs_x":690,"abs_y":1340}' className="flex items-center gap-4 opacity-90">
<div bis_size='{"x":210,"y":1297,"w":48,"h":48,"abs_x":690,"abs_y":1340}' className="flex h-12 w-12 items-center justify-center rounded-full border text-xl font-serif font-medium border-rose-200 bg-rose-100 text-rose-800" style={{}}>N</div>
<div bis_size='{"x":274,"y":1301,"w":152,"h":40,"abs_x":754,"abs_y":1344}' className="text-sm">
<p bis_size='{"x":274,"y":1301,"w":152,"h":20,"abs_x":754,"abs_y":1344}' className="font-semibold text-stone-900" style={{}}>Natasha's Nail Room</p>
<p bis_size='{"x":274,"y":1321,"w":152,"h":20,"abs_x":754,"abs_y":1364}' className="text-stone-500" style={{}}>Fresha Verified Partner</p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":531,"y":837,"w":722,"h":548,"abs_x":1011,"abs_y":880}' className="relative flex flex-1 items-center justify-center p-10 bg-white">
<div bis_size='{"x":531,"y":837,"w":722,"h":548,"abs_x":1011,"abs_y":880}' className="absolute inset-0 flex flex-col items-center justify-center text-center">
<div bis_size='{"x":853,"y":979,"w":80,"h":80,"abs_x":1333,"abs_y":1022}' className="mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-inner bg-stone-50" style={{}}>
<svg bis_size='{"x":877,"y":1003,"w":32,"h":32,"abs_x":1357,"abs_y":1046}' className="lucide lucide-calendar-range h-8 w-8 text-stone-300" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
</div>
<h4 bis_size='{"x":775,"y":1083,"w":235,"h":32,"abs_x":1255,"abs_y":1126}' className="font-serif text-2xl tracking-tight text-stone-900" style={{}}>Fresha Booking Widget</h4>
<p bis_size='{"x":733,"y":1127,"w":320,"h":40,"abs_x":1213,"abs_y":1170}' className="mx-auto mt-3 max-w-xs text-sm text-stone-400" style={{}}>
                                    Embed your specific Fresha booking URL iframe here.
                                </p>
<a bis_size='{"x":791,"y":1199,"w":204,"h":44,"abs_x":1271,"abs_y":1242}' className="mt-8 inline-flex h-11 items-center justify-center rounded-lg bg-[#0D1636] px-6 text-sm font-medium shadow-sm transition-colors hover:bg-[#1a2b66] text-white" href="https://www.fresha.com" target="_blank">
                                    Launch Fresha Window
                                </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#fff0f3] pt-24 pb-24" id="services">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16 max-w-2xl">
<h2 className="font-serif text-4xl font-medium tracking-tight sm:text-5xl text-stone-900">Treatments &amp; Services</h2>
<p className="mt-6 text-xl font-light text-stone-500">
                    Meticulous attention to detail for a flawless finish every time.
                </p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl border-rose-100 bg-white/80 hover:border-rose-200 hover:bg-white hover:shadow-rose-100/40">
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors group-hover:bg-rose-100 bg-rose-50 text-rose-900">
<svg className="h-7 w-7 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="mb-3 font-serif text-2xl text-stone-900">Gel Manicures</h3>
<p className="text-base font-light leading-relaxed text-stone-500">
                        Long-lasting BIAB application that structures and protects your natural nails. Includes cuticle care and hand massage.
                    </p>
</div>

<div className="group rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl border-rose-100 bg-white/80 hover:border-rose-200 hover:bg-white hover:shadow-rose-100/40">
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors group-hover:bg-rose-100 bg-rose-50 text-rose-900">
<svg className="h-7 w-7 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="mb-3 font-serif text-2xl text-stone-900">Custom Nail Art</h3>
<p className="text-base font-light leading-relaxed text-stone-500">
                        From french tips to intricate hand-painted designs. Bring your inspiration or let us create something unique for you.
                    </p>
</div>

<div className="group rounded-3xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl border-rose-100 bg-white/80 hover:border-rose-200 hover:bg-white hover:shadow-rose-100/40">
<div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors group-hover:bg-rose-100 bg-rose-50 text-rose-900">
<svg className="h-7 w-7 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="mb-3 font-serif text-2xl text-stone-900">Health &amp; Repair</h3>
<p className="text-base font-light leading-relaxed text-stone-500">
                        Restorative treatments for damaged nails using IBX strengthening systems and nourishing oil treatments.
                    </p>
</div>
</div>

<div className="mt-24">
<div className="grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-rose-100 bg-white p-6 transition-all hover:shadow-lg hover:shadow-rose-100/30">
<div className="mb-4 flex items-center gap-1 text-rose-400">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-4 text-sm font-light leading-relaxed text-stone-600">"Absolutely amazing! Natasha is so talented and really takes her time to make sure everything is perfect. My nails have never looked better!"</p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-medium text-rose-700">S</div>
<div>
<p className="text-sm font-medium text-stone-900">Sarah M.</p>
<p className="text-xs text-stone-400">Gel Manicure • 2 weeks ago</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-rose-100 bg-white p-6 transition-all hover:shadow-lg hover:shadow-rose-100/30">
<div className="mb-4 flex items-center gap-1 text-rose-400">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-4 text-sm font-light leading-relaxed text-stone-600">"The nail art was incredible! She recreated my Pinterest inspo perfectly. Such a relaxing experience in her beautiful studio. Will definitely be back!"</p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-medium text-rose-700">E</div>
<div>
<p className="text-sm font-medium text-stone-900">Emma J.</p>
<p className="text-xs text-stone-400">Nail Art • 1 week ago</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-rose-100 bg-white p-6 transition-all hover:shadow-lg hover:shadow-rose-100/30">
<div className="mb-4 flex items-center gap-1 text-rose-400">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-4 text-sm font-light leading-relaxed text-stone-600">"My nails were so damaged before I started coming here. After the IBX treatment, they're stronger than ever. Natasha really knows her stuff!"</p>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-sm font-medium text-rose-700">L</div>
<div>
<p className="text-sm font-medium text-stone-900">Lucy T.</p>
<p className="text-xs text-stone-400">Health &amp; Repair • 3 days ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2181,"w":1425,"h":729,"abs_x":480,"abs_y":2224}' className="border-t py-24 border-rose-100 bg-white" id="portfolio" style={{}}>
<div bis_size='{"x":136,"y":2278,"w":1152,"h":64,"abs_x":616,"abs_y":2321}' className="mx-auto mb-12 flex max-w-6xl flex-col items-end justify-between gap-6 px-6 md:flex-row">
<div bis_size='{"x":160,"y":2278,"w":672,"h":64,"abs_x":640,"abs_y":2321}' className="w-full max-w-2xl">
<div bis_size='{"x":160,"y":2278,"w":672,"h":16,"abs_x":640,"abs_y":2321}' className="mb-2 flex items-center gap-2 text-rose-500" style={{}}>
<svg bis_size='{"x":160,"y":2278,"w":16,"h":16,"abs_x":640,"abs_y":2321}' className="lucide lucide-instagram h-4 w-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span bis_size='{"x":184,"y":2278,"w":151,"h":16,"abs_x":664,"abs_y":2321}' className="text-xs font-semibold uppercase tracking-wide">@Natashas.nailroom</span>
</div>
<h2 bis_size='{"x":160,"y":2302,"w":672,"h":40,"abs_x":640,"abs_y":2345}' className="font-serif text-4xl font-medium tracking-tight text-stone-900" style={{}}>Latest from the Studio</h2>
</div>
<a bis_size='{"x":1160,"y":2322,"w":104,"h":20,"abs_x":1640,"abs_y":2365}' className="group hidden items-center gap-2 text-sm font-medium transition-colors md:flex text-stone-600 hover:text-rose-600" href="#" style={{}}>
                View Profile 
                <svg bis_size='{"x":1248,"y":2324,"w":16,"h":16,"abs_x":1728,"abs_y":2367}' className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div bis_size='{"x":0,"y":2390,"w":1425,"h":424,"abs_x":480,"abs_y":2433}' className="relative w-full overflow-hidden">

<div bis_size='{"x":0,"y":2390,"w":128,"h":424,"abs_x":480,"abs_y":2433}' className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r to-transparent md:w-32 from-white"></div>
<div bis_size='{"x":1297,"y":2390,"w":128,"h":424,"abs_x":1777,"abs_y":2433}' className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l to-transparent md:w-32 from-white"></div>
<div bis_size='{"x":0,"y":2390,"w":1425,"h":424,"abs_x":480,"abs_y":2433}' className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-12 pt-4 md:px-24">

<div bis_size='{"x":96,"y":2406,"w":288,"h":360,"abs_x":576,"abs_y":2449}' className="group relative aspect-[4/5] w-72 shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl border-stone-100 bg-stone-100 hover:shadow-rose-900/10" style={{}}>
<img alt="Nail Art" bis_size='{"x":97,"y":2407,"w":286,"h":358,"abs_x":577,"abs_y":2450}' className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":97,"y":2407,"w":286,"h":358,"abs_x":577,"abs_y":2450}' className="absolute inset-0 flex items-center justify-center backdrop-blur-[0px] transition-all duration-300 group-hover:bg-stone-900/10 group-hover:backdrop-blur-[2px] bg-stone-900/0" style={{}}>
<div bis_size='{"x":213,"y":2590,"w":53,"h":24,"abs_x":693,"abs_y":2633}' className="flex translate-y-4 items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
<svg bis_size='{"x":213,"y":2592,"w":20,"h":20,"abs_x":693,"abs_y":2635}' className="lucide lucide-heart h-5 w-5 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span bis_size='{"x":239,"y":2590,"w":27,"h":24,"abs_x":719,"abs_y":2633}' className="font-medium">142</span>
</div>
</div>
</div>

<div bis_size='{"x":408,"y":2406,"w":288,"h":360,"abs_x":888,"abs_y":2449}' className="group relative aspect-[4/5] w-72 shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl border-stone-100 bg-stone-100 hover:shadow-rose-900/10" style={{}}>
<img alt="Classic Manicure" bis_size='{"x":409,"y":2407,"w":286,"h":358,"abs_x":889,"abs_y":2450}' className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div bis_size='{"x":409,"y":2407,"w":286,"h":358,"abs_x":889,"abs_y":2450}' className="absolute inset-0 flex items-center justify-center backdrop-blur-[0px] transition-all duration-300 group-hover:bg-stone-900/10 group-hover:backdrop-blur-[2px] bg-stone-900/0" style={{}}>
<div bis_size='{"x":528,"y":2590,"w":46,"h":24,"abs_x":1008,"abs_y":2633}' className="flex translate-y-4 items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
<svg bis_size='{"x":528,"y":2592,"w":20,"h":20,"abs_x":1008,"abs_y":2635}' className="lucide lucide-heart h-5 w-5 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span bis_size='{"x":554,"y":2590,"w":20,"h":24,"abs_x":1034,"abs_y":2633}' className="font-medium">89</span>
</div>
</div>
</div>

<div bis_size='{"x":720,"y":2406,"w":288,"h":360,"abs_x":1200,"abs_y":2449}' className="group relative aspect-[4/5] w-72 shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl border-stone-100 bg-stone-100 hover:shadow-rose-900/10" style={{}}>
<img alt="Detailed Art" bis_size='{"x":721,"y":2407,"w":286,"h":358,"abs_x":1201,"abs_y":2450}' className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":721,"y":2407,"w":286,"h":358,"abs_x":1201,"abs_y":2450}' className="absolute inset-0 flex items-center justify-center backdrop-blur-[0px] transition-all duration-300 group-hover:bg-stone-900/10 group-hover:backdrop-blur-[2px] bg-stone-900/0" style={{}}>
<div bis_size='{"x":837,"y":2590,"w":52,"h":24,"abs_x":1317,"abs_y":2633}' className="flex translate-y-4 items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
<svg bis_size='{"x":837,"y":2592,"w":20,"h":20,"abs_x":1317,"abs_y":2635}' className="lucide lucide-heart h-5 w-5 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span bis_size='{"x":863,"y":2590,"w":26,"h":24,"abs_x":1343,"abs_y":2633}' className="font-medium">215</span>
</div>
</div>
</div>

<div bis_size='{"x":1032,"y":2406,"w":288,"h":360,"abs_x":1512,"abs_y":2449}' className="group relative aspect-[4/5] w-72 shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl border-stone-100 bg-stone-100 hover:shadow-rose-900/10" style={{}}>
<img alt="Fresh Set" bis_size='{"x":1033,"y":2407,"w":286,"h":358,"abs_x":1513,"abs_y":2450}' className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":1033,"y":2407,"w":286,"h":358,"abs_x":1513,"abs_y":2450}' className="absolute inset-0 flex items-center justify-center backdrop-blur-[0px] transition-all duration-300 group-hover:bg-stone-900/10 group-hover:backdrop-blur-[2px] bg-stone-900/0" style={{}}>
<div bis_size='{"x":1149,"y":2590,"w":52,"h":24,"abs_x":1629,"abs_y":2633}' className="flex translate-y-4 items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
<svg bis_size='{"x":1149,"y":2592,"w":20,"h":20,"abs_x":1629,"abs_y":2635}' className="lucide lucide-heart h-5 w-5 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span bis_size='{"x":1175,"y":2590,"w":26,"h":24,"abs_x":1655,"abs_y":2633}' className="font-medium">156</span>
</div>
</div>
</div>

<div bis_size='{"x":1344,"y":2406,"w":288,"h":360,"abs_x":1824,"abs_y":2449}' className="group relative aspect-[4/5] w-72 shrink-0 cursor-pointer snap-center overflow-hidden rounded-2xl border shadow-sm transition-all hover:shadow-xl border-stone-100 bg-stone-100 hover:shadow-rose-900/10" style={{}}>
<img alt="Pink Nails" bis_size='{"x":1345,"y":2407,"w":286,"h":358,"abs_x":1825,"abs_y":2450}' className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div bis_size='{"x":1345,"y":2407,"w":286,"h":358,"abs_x":1825,"abs_y":2450}' className="absolute inset-0 flex items-center justify-center backdrop-blur-[0px] transition-all duration-300 group-hover:bg-stone-900/10 group-hover:backdrop-blur-[2px] bg-stone-900/0" style={{}}>
<div bis_size='{"x":1461,"y":2590,"w":52,"h":24,"abs_x":1941,"abs_y":2633}' className="flex translate-y-4 items-center gap-1.5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-white">
<svg bis_size='{"x":1461,"y":2592,"w":20,"h":20,"abs_x":1941,"abs_y":2635}' className="lucide lucide-heart h-5 w-5 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span bis_size='{"x":1487,"y":2590,"w":26,"h":24,"abs_x":1967,"abs_y":2633}' className="font-medium">192</span>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="mt-4 flex justify-center pb-8 md:hidden">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="flex items-center gap-2 text-sm font-medium text-stone-500 hover:text-rose-600" href="#" style={{}}>
                    View more on Instagram <svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2910,"w":1425,"h":664,"abs_x":480,"abs_y":2953}' className="md:py-32 bg-[#fff0f3] pt-24 pb-24" id="referral">
<div bis_size='{"x":136,"y":3038,"w":1152,"h":408,"abs_x":616,"abs_y":3081}' className="mx-auto max-w-6xl px-6">
<div bis_size='{"x":160,"y":3038,"w":1104,"h":408,"abs_x":640,"abs_y":3081}' className="grid gap-6 md:grid-cols-5">

<div bis_size='{"x":160,"y":3038,"w":652,"h":408,"abs_x":640,"abs_y":3081}' className="group relative col-span-1 overflow-hidden rounded-3xl border bg-gradient-to-br p-10 transition-all md:col-span-3 border-rose-200 from-rose-50 to-white hover:border-rose-300" style={{}}>
<div bis_size='{"x":596,"y":2999,"w":256,"h":256,"abs_x":1076,"abs_y":3042}' className="absolute -right-10 -top-10 h-64 w-64 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-110 bg-rose-100/50" style={{}}></div>
<div bis_size='{"x":201,"y":3079,"w":570,"h":326,"abs_x":681,"abs_y":3122}' className="relative z-10 flex h-full flex-col justify-between">
<div bis_size='{"x":201,"y":3079,"w":570,"h":238,"abs_x":681,"abs_y":3122}' className="">
<div bis_size='{"x":201,"y":3079,"w":155,"h":30,"abs_x":681,"abs_y":3122}' className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide border-rose-200 bg-white text-rose-600" style={{}}>
<svg bis_size='{"x":218,"y":3087,"w":14,"h":14,"abs_x":698,"abs_y":3130}' className="lucide lucide-gift h-3.5 w-3.5" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg> Refer A Friend
                            </div>
<h3 bis_size='{"x":201,"y":3141,"w":570,"h":96,"abs_x":681,"abs_y":3184}' className="font-serif text-3xl font-medium tracking-tight md:text-5xl text-stone-900" style={{}}>
                                Friends don’t let friends <br bis_size='{"x":680,"y":3137,"w":0,"h":55,"abs_x":1160,"abs_y":3180}' className="hidden md:block"/>miss deals!
                            </h3>
<p bis_size='{"x":201,"y":3261,"w":512,"h":56,"abs_x":681,"abs_y":3304}' className="mt-6 max-w-lg text-lg font-light text-stone-600" style={{}}>
                                Refer one friend and get <span bis_size='{"x":409,"y":3264,"w":68,"h":21,"abs_x":889,"abs_y":3307}' className="font-medium text-rose-600" style={{}}>25% off</span> your next service when they book an appointment.
                            </p>
</div>
<div bis_size='{"x":201,"y":3357,"w":570,"h":48,"abs_x":681,"abs_y":3400}' className="mt-10">
<button bis_size='{"x":201,"y":3357,"w":214,"h":48,"abs_x":681,"abs_y":3400}' className="inline-flex h-12 items-center justify-center gap-2 rounded-full border px-8 text-sm font-medium shadow-sm transition-all active:scale-95 border-stone-200 bg-white text-stone-800 hover:border-rose-300 hover:text-rose-700" style={{}}>
<svg bis_size='{"x":234,"y":3373,"w":16,"h":16,"abs_x":714,"abs_y":3416}' className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                                Share with Friends
                            </button>
</div>
</div>
</div>

<div bis_size='{"x":837,"y":3038,"w":427,"h":408,"abs_x":1317,"abs_y":3081}' className="relative col-span-1 flex flex-col justify-center overflow-hidden rounded-3xl border bg-[#0D1636] p-10 md:col-span-2 border-stone-800 text-white" style={{}}>
<div bis_size='{"x":1111,"y":3293,"w":192,"h":192,"abs_x":1591,"abs_y":3336}' className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-rose-500/20 blur-3xl" style={{}}></div>
<div bis_size='{"x":878,"y":3148,"w":345,"h":188,"abs_x":1358,"abs_y":3191}' className="relative z-10">
<h3 bis_size='{"x":878,"y":3148,"w":345,"h":36,"abs_x":1358,"abs_y":3191}' className="font-serif text-3xl font-medium tracking-tight text-white">Ready for a fresh set?</h3>
<p bis_size='{"x":878,"y":3200,"w":345,"h":48,"abs_x":1358,"abs_y":3243}' className="mt-4 mb-10 font-light text-stone-300" style={{}}>
                            Appointments currently available for next week.
                        </p>
<a bis_size='{"x":878,"y":3288,"w":345,"h":48,"abs_x":1358,"abs_y":3331}' className="inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-sm font-medium transition-colors active:scale-95 bg-white text-stone-900 hover:bg-rose-50" href="#booking-widget" style={{}}>
                            Book Online
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":3574,"w":1425,"h":418,"abs_x":480,"abs_y":3617}' className="bg-white border-rose-100 border-t pt-20 pb-10">
<div bis_size='{"x":136,"y":3655,"w":1152,"h":297,"abs_x":616,"abs_y":3698}' className="mx-auto max-w-6xl px-6">
<div bis_size='{"x":160,"y":3655,"w":1104,"h":176,"abs_x":640,"abs_y":3698}' className="mb-16 grid gap-12 md:grid-cols-3">

<div bis_size='{"x":160,"y":3655,"w":336,"h":176,"abs_x":640,"abs_y":3698}' className="space-y-6">
<a bis_size='{"x":160,"y":3655,"w":336,"h":40,"abs_x":640,"abs_y":3698}' className="flex flex-col text-stone-900" href="#" style={{}}>
<span bis_size='{"x":160,"y":3655,"w":336,"h":20,"abs_x":640,"abs_y":3698}' className="font-serif text-xl font-bold leading-none tracking-wide">NATASHA'S</span>
<span bis_size='{"x":160,"y":3675,"w":336,"h":20,"abs_x":640,"abs_y":3718}' className="font-serif text-xl font-bold leading-none tracking-wide">NAIL ROOM</span>
</a>
<p bis_size='{"x":160,"y":3719,"w":320,"h":68,"abs_x":640,"abs_y":3762}' className="max-w-xs text-sm font-light leading-relaxed text-stone-500" style={{}}>
                        Premium nail care services designed to help you look and feel your absolute best. Located in the heart of Leicester.
                    </p>
<a bis_size='{"x":160,"y":3811,"w":336,"h":20,"abs_x":640,"abs_y":3854}' className="block text-sm font-medium text-rose-500 transition-colors hover:text-rose-700" href="#" style={{}}>Natashasnailroom.com</a>
</div>

<div bis_size='{"x":544,"y":3655,"w":336,"h":176,"abs_x":1024,"abs_y":3698}' className="space-y-6">
<h4 bis_size='{"x":544,"y":3655,"w":336,"h":16,"abs_x":1024,"abs_y":3698}' className="text-xs font-bold uppercase tracking-widest text-stone-900" style={{}}>Contact</h4>
<ul bis_size='{"x":544,"y":3695,"w":336,"h":92,"abs_x":1024,"abs_y":3738}' className="space-y-4">
<li bis_size='{"x":544,"y":3695,"w":336,"h":20,"abs_x":1024,"abs_y":3738}' className="flex items-center gap-4 text-sm text-stone-500" style={{}}>
<svg bis_size='{"x":544,"y":3697,"w":16,"h":16,"abs_x":1024,"abs_y":3740}' className="lucide lucide-map-pin h-4 w-4 text-rose-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Leicester, LE8 Based
                        </li>
<li bis_size='{"x":544,"y":3731,"w":336,"h":20,"abs_x":1024,"abs_y":3774}' className="flex items-center gap-4 text-sm text-stone-500" style={{}}>
<svg bis_size='{"x":544,"y":3733,"w":16,"h":16,"abs_x":1024,"abs_y":3776}' className="lucide lucide-phone h-4 w-4 text-rose-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            07900984549
                        </li>
<li bis_size='{"x":544,"y":3767,"w":336,"h":20,"abs_x":1024,"abs_y":3810}' className="flex items-center gap-4 text-sm text-stone-500" style={{}}>
<svg bis_size='{"x":544,"y":3769,"w":16,"h":16,"abs_x":1024,"abs_y":3812}' className="lucide lucide-mail h-4 w-4 text-rose-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            info@natashasnailroom.com
                        </li>
</ul>
</div>

<div bis_size='{"x":928,"y":3655,"w":336,"h":176,"abs_x":1408,"abs_y":3698}' className="space-y-6">
<h4 bis_size='{"x":928,"y":3655,"w":336,"h":16,"abs_x":1408,"abs_y":3698}' className="text-xs font-bold uppercase tracking-widest text-stone-900" style={{}}>Follow</h4>
<a bis_size='{"x":928,"y":3695,"w":336,"h":74,"abs_x":1408,"abs_y":3738}' className="group flex items-center gap-4 rounded-xl border p-4 transition-colors hover:shadow-sm border-stone-100 bg-stone-50 hover:border-rose-100 hover:bg-white" href="#" style={{}}>
<div bis_size='{"x":945,"y":3712,"w":40,"h":40,"abs_x":1425,"abs_y":3755}' className="flex h-10 w-10 items-center justify-center rounded-full text-rose-500 shadow-sm ring-1 bg-white ring-rose-100" style={{}}>
<svg bis_size='{"x":955,"y":3722,"w":20,"h":20,"abs_x":1435,"abs_y":3765}' className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
<span bis_size='{"x":1001,"y":3722,"w":138,"h":20,"abs_x":1481,"abs_y":3765}' className="text-sm font-medium group-hover:text-rose-600 text-stone-700" style={{}}>@Natashas.nailroom</span>
</a>
</div>
</div>
<div bis_size='{"x":160,"y":3895,"w":1104,"h":57,"abs_x":640,"abs_y":3938}' className="flex flex-col items-center justify-between gap-6 border-t pt-10 md:flex-row border-stone-100" style={{}}>
<p bis_size='{"x":160,"y":3936,"w":278,"h":16,"abs_x":640,"abs_y":3979}' className="text-xs text-stone-400" style={{}}>© 2024 Natasha's Nail Room. All rights reserved.</p>
<div bis_size='{"x":1056,"y":3936,"w":208,"h":16,"abs_x":1536,"abs_y":3979}' className="flex gap-8">
<a bis_size='{"x":1056,"y":3936,"w":79,"h":16,"abs_x":1536,"abs_y":3979}' className="text-xs transition-colors text-stone-400 hover:text-stone-900" href="#" style={{}}>Privacy Policy</a>
<a bis_size='{"x":1167,"y":3936,"w":96,"h":16,"abs_x":1647,"abs_y":3979}' className="text-xs transition-colors text-stone-400 hover:text-stone-900" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
