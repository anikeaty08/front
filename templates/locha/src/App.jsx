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



function collectAllData() {
let vards = document.getElementById("name").value;
let epasts = document.getElementById("email").value;
let teksts = document.getElementById("text").value;
let BackEndUrl = 'https://europe-west3-root-furnace-379311.cloudfunctions.net/mailsender';
// Simple validation for UI feedback
if(!vards || !epasts) {
alert("Please fill in your name and email.");
return;
}
let userInfo = {
'Name': vards,
'Email': epasts,
'Comment': teksts,
}
const button = document.querySelector('input[type="submit"]');
const originalVal = button.value;
button.value = "Sending...";
button.disabled = true;
button.classList.add("opacity-50", "cursor-not-allowed");
const request = new XMLHttpRequest()
request.open('POST', BackEndUrl)
request.responseType = 'json';
request.setRequestHeader("Content-Type", "application/json");
request.onload = () => {
const response = request.response
if (request.status == 200) {
alert("Paldies, jūsu ziņa saņemta!");
// Reset form
document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("text").value = "";
} else {
alert("Something went wrong. Please try again.");
}
button.value = originalVal;
button.disabled = false;
button.classList.remove("opacity-50", "cursor-not-allowed");
}
request.send(JSON.stringify(userInfo));
}
// Native Tailwind sticky positioning replaces the old scroll JS

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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-4xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="text-sm font-semibold tracking-tight text-zinc-900" href="#">LF.</a>
<ul className="hidden gap-6 sm:flex">
<li><a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#section1">Education</a></li>
<li><a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#section2">Work</a></li>
<li><a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#section3">Skills</a></li>
<li><a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#section4">Courses</a></li>
<li><a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#section6">Contact</a></li>
</ul>

<button className="sm:hidden text-zinc-500">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="mx-auto max-w-4xl px-6 pb-24">

<div className="pt-20 pb-16 md:pt-32 md:pb-24">
<div className="flex flex-col-reverse items-start gap-12 md:flex-row md:items-center md:justify-between">
<div className="flex-1 space-y-6">
<div>
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">Lolita Felzenberga</h1>
<p className="mt-4 text-lg font-normal leading-relaxed text-zinc-500">
                            Management professional with a focus on administration, organization, and planning. Dedicated to efficient workflows and high-quality results.
                        </p>
</div>
<div className="flex flex-col gap-3 md:flex-row md:gap-6">
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Jelgava, Latvia</span>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>+371 263 65 142</span>
</div>
<div className="flex items-center gap-2 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors" href="mailto:lolita.felzenberga@gmail.com">lolita.felzenberga@gmail.com</a>
</div>
</div>
</div>
<div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-50 md:h-40 md:w-40">

<img alt="Lolita Felzenberga" className="h-full w-full object-cover grayscale opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-24">
<div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all hover:bg-zinc-50">
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200">
<iconify-icon className="text-zinc-700" icon="solar:shop-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600">Experienced in the management of a catering company.</p>
</div>
<div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all hover:bg-zinc-50">
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200">
<iconify-icon className="text-zinc-700" icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600">Good communication, organization and planning skills.</p>
</div>
<div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-all hover:bg-zinc-50">
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-zinc-200">
<iconify-icon className="text-zinc-700" icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600">High sense of responsibility and dedication.</p>
</div>
</div>

<section className="mb-20" id="section1">
<h2 className="mb-8 text-xl font-medium tracking-tight text-zinc-900">Education</h2>
<div className="space-y-8">

<div className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:gap-8 border-l border-zinc-200 pl-6 sm:border-0 sm:pl-0">

<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-white sm:hidden"></span>
<div className="text-xs font-medium text-zinc-400 pt-0.5">2014 — 2016</div>
<div>
<h3 className="font-medium text-zinc-900">Master's in Health Sciences (Nutrition)</h3>
<p className="mt-1 text-sm text-zinc-500">Latvian University of Agriculture / University of Agricultural Sciences and Veterinary Medicine of Cluj-Napoca (ERASMUS)</p>
</div>
</div>

<div className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:gap-8 border-l border-zinc-200 pl-6 sm:border-0 sm:pl-0">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-white sm:hidden"></span>
<div className="text-xs font-medium text-zinc-400 pt-0.5">2010 — 2014</div>
<div>
<h3 className="font-medium text-zinc-900">Professional Bachelor in Business &amp; Restaurant Management</h3>
<p className="mt-1 text-sm text-zinc-500">Latvian University of Agriculture</p>
</div>
</div>
</div>
</section>

<section className="mb-20" id="section2">
<h2 className="mb-8 text-xl font-medium tracking-tight text-zinc-900">Experience</h2>
<div className="space-y-12">

<div className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:gap-8 border-l border-zinc-200 pl-6 sm:border-0 sm:pl-0">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-white sm:hidden"></span>
<div className="text-xs font-medium text-zinc-400 pt-0.5">2018 — Present</div>
<div className="space-y-3">
<div>
<h3 className="font-medium text-zinc-900">Assistant to the Head of Representative Office</h3>
<p className="text-sm text-zinc-500">SIA Solepharm • Latvia</p>
</div>
<ul className="list-none space-y-2 text-sm text-zinc-600">
<li className="flex items-start gap-2">
<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300"></span>
                                Communication with pharmacy wholesalers and financial statement preparation
                            </li>
<li className="flex items-start gap-2">
<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300"></span>
                                Handling correspondence, complaints, and administrative supervision
                            </li>
<li className="flex items-start gap-2">
<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300"></span>
                                Organizing company events, conferences, and travel logistics
                            </li>
</ul>
</div>
</div>

<div className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:gap-8 border-l border-zinc-200 pl-6 sm:border-0 sm:pl-0">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-white sm:hidden"></span>
<div className="text-xs font-medium text-zinc-400 pt-0.5">2016 — 2018</div>
<div className="space-y-3">
<div>
<h3 className="font-medium text-zinc-900">Production Manager</h3>
<p className="text-sm text-zinc-500">SIA Caffeine • Latvia</p>
</div>
<ul className="list-none space-y-2 text-sm text-zinc-600">
<li className="flex items-start gap-2">
<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300"></span>
                                Planning and organization of production processes and personnel evaluation
                            </li>
<li className="flex items-start gap-2">
<span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-300"></span>
                                Budget preparation, cost estimation, and maintenance approval
                            </li>
</ul>
</div>
</div>

<div className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:gap-8 border-l border-zinc-200 pl-6 sm:border-0 sm:pl-0">
<span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-zinc-300 bg-white sm:hidden"></span>
<div className="text-xs font-medium text-zinc-400 pt-0.5">2014 — 2015</div>
<div className="space-y-3">
<div>
<h3 className="font-medium text-zinc-900">Waitress</h3>
<p className="text-sm text-zinc-500">SIA Kaņepes Kultūras centrs • Latvia</p>
</div>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

<section id="section3">
<h2 className="mb-8 text-xl font-medium tracking-tight text-zinc-900">Language Skills</h2>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-zinc-900">Latvian</span>
<span className="text-xs text-zinc-500">Native</span>
</div>
<div className="h-1.5 w-full rounded-full bg-zinc-100">
<div className="h-1.5 rounded-full bg-zinc-800" style={{width: '100%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-zinc-900">English</span>
<span className="text-xs text-zinc-500">C1 (Advanced)</span>
</div>
<div className="h-1.5 w-full rounded-full bg-zinc-100">
<div className="h-1.5 rounded-full bg-zinc-800" style={{width: '80%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-zinc-900">Italian</span>
<span className="text-xs text-zinc-500">B1 (Intermediate)</span>
</div>
<div className="h-1.5 w-full rounded-full bg-zinc-100">
<div className="h-1.5 rounded-full bg-zinc-800" style={{width: '40%'}}></div>
</div>
</div>
</div>
</section>

<section id="section5">
<h2 className="mb-8 text-xl font-medium tracking-tight text-zinc-900">Interests</h2>
<div className="space-y-6">
<div>
<h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-400">Active Recreation</h3>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
<iconify-icon icon="solar:snow-flake-linear"></iconify-icon> Skiing
                            </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
<iconify-icon icon="solar:skateboarding-linear"></iconify-icon> Snowboarding
                            </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
<iconify-icon icon="solar:bicycling-linear"></iconify-icon> Cycling
                            </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
<iconify-icon icon="solar:hiking-linear"></iconify-icon> Hiking
                            </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
<iconify-icon icon="solar:dumbbell-large-linear"></iconify-icon> Fitness
                            </span>
</div>
</div>
<div>
<h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-400">Self-Improvement</h3>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
<iconify-icon icon="solar:book-bookmark-linear"></iconify-icon> Reading
                            </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1 text-sm text-zinc-600">
<iconify-icon icon="solar:diploma-linear"></iconify-icon> Courses
                            </span>
</div>
</div>
</div>
</section>
</div>

<section className="mb-24" id="section4">
<h2 className="mb-8 text-xl font-medium tracking-tight text-zinc-900">Courses &amp; Certifications</h2>
<div className="overflow-hidden rounded-lg border border-zinc-200">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-50 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<tr>
<th className="px-6 py-3">Period</th>
<th className="px-6 py-3">Course</th>
<th className="px-6 py-3">Provider</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200 bg-white text-zinc-600">
<tr>
<td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-zinc-400">Aug 2022 - Oct 2022</td>
<td className="px-6 py-4 font-medium text-zinc-900">Discover Tech</td>
<td className="px-6 py-4">Riga Techgirls</td>
</tr>
<tr>
<td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-zinc-400">Jan 2022 - Apr 2022</td>
<td className="px-6 py-4 font-medium text-zinc-900">Patiesā garderobe</td>
<td className="px-6 py-4">Seek the Simple</td>
</tr>
<tr>
<td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-zinc-400">Feb 2019 - Jul 2019</td>
<td className="px-6 py-4 font-medium text-zinc-900">Category C Trainer's Certificate</td>
<td className="px-6 py-4">Sporta izglītības aģentūra</td>
</tr>
<tr>
<td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-zinc-400">Aug 2016</td>
<td className="px-6 py-4 font-medium text-zinc-900">Self-control systems in catering</td>
<td className="px-6 py-4">SIA Dija</td>
</tr>
<tr>
<td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-zinc-400">Aug 2015</td>
<td className="px-6 py-4 font-medium text-zinc-900">Illy coffee training</td>
<td className="px-6 py-4">SIA Innocent Pro</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 md:p-12" id="section6">
<div className="mx-auto max-w-lg">
<div className="mb-10 text-center">
<iconify-icon className="mb-4 text-zinc-800" icon="solar:letter-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Get in touch</h2>
<p className="mt-2 text-sm text-zinc-500">Send me a message for work opportunities or collaborations.</p>
</div>
<div className="space-y-5">
<div>
<label className="mb-2 block text-xs font-medium text-zinc-700" htmlFor="name">Name</label>
<input className="block w-full rounded-md border-0 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:leading-6" id="name" name="name" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium text-zinc-700" htmlFor="email">Email</label>
<input className="block w-full rounded-md border-0 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:leading-6" id="email" name="email" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium text-zinc-700" htmlFor="text">Message</label>
<textarea className="block w-full rounded-md border-0 bg-white px-3 py-2.5 text-sm text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-300 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-600 sm:leading-6" id="text" name="text" rows="4"></textarea>
</div>
<input className="w-full cursor-pointer rounded-md bg-zinc-900 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 transition-all" onclick="collectAllData()" type="submit" value="Send Message"/>
</div>
</div>
</section>
<footer className="mt-20 border-t border-zinc-200 pt-8 text-center">
<p className="text-xs text-zinc-400">© 2023 Lolita Felzenberga. All rights reserved.</p>
</footer>
</main>

    </>
  );
}
