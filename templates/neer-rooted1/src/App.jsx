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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-lg uppercase text-black">NEER</div>
<button className="cta-primary text-xs font-medium px-5 py-2 rounded-full shadow-sm hover:opacity-90 transition-opacity">
                Partner Model
            </button>
</div>
</nav>

<section className="pt-48 pb-32 max-w-6xl mx-auto px-6">
<div className="max-w-3xl mb-24">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-black mb-8 leading-tight">
                NEER Growth &amp; Event Operating Model
            </h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-4">
<h3 className="text-xl font-medium tracking-tight text-black mb-2">Proposed structure:</h3>
<h3 className="text-xl font-medium tracking-tight text-gray-400 mb-6">Rooted + NEER</h3>
</div>
<div className="lg:col-span-8 space-y-8 text-base leading-relaxed">
<p className="">
                    Rooted will take initiative and help execute the full operating system required to grow NEER. This includes the deliverables across the entire team — Rooted’s marketing and digital execution, Jude’s partnerships and event infrastructure, and Alex’s data and insight layer guiding decisions.
                </p>
<p>
                    A new key part of this system is Jude leading event management through venue partnerships, which is highly dependent on continuously onboarding new brick-and-mortar partners across London. These partners become the foundation for both user experiences and acquisition events. By using partner venues rather than expensive standalone productions, the event model becomes <span className="font-medium text-black">cost-efficient, scalable, and easy to replicate city by city.</span>
</p>
<div className="p-8 border border-gray-100 rounded-2xl bg-white mt-12">
<p className="mb-6 font-medium text-black">Within this system we have created two types of events:</p>
<ul className="space-y-4 mb-8">
<li className="flex gap-4">
<iconify-icon className="text-black text-xl shrink-0 mt-0.5" icon="solar:record-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="font-medium text-black block mb-1">Acquisition Events</span>
                                designed to bring new people into NEER and drive sign-ups.
                            </div>
</li>
<li className="flex gap-4">
<iconify-icon className="text-black text-xl shrink-0 mt-0.5" icon="solar:record-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="font-medium text-black block mb-1">Product Events</span>
                                designed for existing users who have already met through the app and want to deepen connections.
                            </div>
</li>
</ul>
<p className="pt-6 border-t border-gray-100">
                        Together these event types create a strong brand identity for NEER — positioning it as <span className="font-medium text-black">the platform where real connections happen in real places across the city.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100 bg-white">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-8">Objective</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-black max-w-4xl mx-auto leading-snug mb-16">
                Build a scalable system where the <span className="border-b border-black pb-1">NEER app sits at the centre of the community</span>, and events act as catalysts for real-world connections and user acquisition.
            </h3>
<p className="text-sm font-medium text-black mb-8">This structure is designed to drive three outcomes:</p>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-black shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg text-gray-400" icon="solar:download-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    App downloads
                </div>
<div className="px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-black shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg text-gray-400" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Real-world meetings through NEER
                </div>
<div className="px-6 py-3 border border-gray-200 rounded-full text-sm font-medium text-black shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg text-gray-400" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Paid membership growth
                </div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<span className="text-xs font-medium tracking-widest uppercase text-gray-400 block mb-4">1. Platform Growth Engine</span>
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">(Rooted)</h2>
<p className="max-w-2xl text-base">Rooted becomes NEER’s central growth partner, responsible for marketing the platform and converting community activity into active app users.</p>
</div>
<h3 className="text-lg font-medium tracking-tight text-black mb-8">Rooted Responsibilities</h3>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">

<div className="p-6 border border-gray-100 rounded-2xl flex flex-col h-full hover:border-gray-200 transition-colors">
<iconify-icon className="text-3xl text-black mb-6" icon="solar:smartphone-update-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-black mb-4 uppercase tracking-wide">App Marketing</h4>
<ul className="space-y-3 text-sm flex-grow">
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Social media strategy and publishing across Instagram, TikTok and LinkedIn</li>
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Platform-specific content explaining how NEER works and why people should join</li>
</ul>
</div>

<div className="p-6 border border-gray-100 rounded-2xl flex flex-col h-full hover:border-gray-200 transition-colors">
<iconify-icon className="text-3xl text-black mb-6" icon="solar:ticket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-black mb-4 uppercase tracking-wide">Event Marketing</h4>
<ul className="space-y-3 text-sm flex-grow">
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Campaign strategy for each event</li>
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Paid acquisition for event attendance</li>
</ul>
</div>

<div className="p-6 border border-gray-100 rounded-2xl flex flex-col h-full hover:border-gray-200 transition-colors">
<iconify-icon className="text-3xl text-black mb-6" icon="solar:camera-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-black mb-4 uppercase tracking-wide">Content &amp; Community</h4>
<ul className="space-y-3 text-sm flex-grow">
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> UGC creator coordination</li>
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Editing and publishing event content</li>
</ul>
</div>

<div className="p-6 border border-gray-100 rounded-2xl flex flex-col h-full hover:border-gray-200 transition-colors">
<iconify-icon className="text-3xl text-black mb-6" icon="solar:letter-opened-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-black mb-4 uppercase tracking-wide">CRM &amp; Lifecycle</h4>
<ul className="space-y-3 text-sm flex-grow">
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Email onboarding flows</li>
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Event reminders and follow-ups</li>
</ul>
</div>

<div className="p-6 border border-gray-100 rounded-2xl flex flex-col h-full hover:border-gray-200 transition-colors">
<iconify-icon className="text-3xl text-black mb-6" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-sm font-medium text-black mb-4 uppercase tracking-wide">Analytics</h4>
<ul className="space-y-3 text-sm flex-grow">
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Performance tracking and reporting</li>
<li className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">•</span> Growth optimisation</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-gray-100 border-t pt-32 pb-32">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">NEER CITY PARTNER ECOSYSTEM</h2>
<h3 className="text-lg font-medium text-gray-400 tracking-tight mb-8">London Launch Framework</h3>
<p className="mb-6 text-base">NEER builds a <span className="font-medium text-black">city network of venues where people meet, return, and build memories.</span></p>
<p className="mb-4">Each partner venue becomes a <span className="font-medium text-black">social node on the NEER map</span> where users:</p>
<ul className="space-y-2 mb-10 text-sm ml-4">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> meet people</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span> get discounts</li>
</ul>
<div className="p-6 bg-gray-50 border border-gray-100 rounded-xl">
<p className="text-xs uppercase tracking-widest text-gray-400 mb-2 font-medium">The goal is simple:</p>
<p className="text-lg font-medium tracking-tight text-black">People discover venues through NEER and build real-life connections there.</p>
</div>
</div>
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">VENUE NETWORK</h2>
<h3 className="text-lg font-medium text-gray-400 tracking-tight mb-8">(CORE INFRASTRUCTURE)</h3>
<p className="mb-10 text-base">NEER requires a mix of venue types so the app feels alive at different times of day.</p>
<div className="space-y-4">

<div className="flex items-start gap-6 p-5 border border-gray-100 rounded-xl">
<iconify-icon className="text-2xl text-black shrink-0" icon="solar:cup-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
<div><h4 className="font-medium text-black">Cafés</h4></div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Use case</span>
<ul className="text-xs space-y-1">
<li>• daytime meetings</li>
<li>• first conversations</li>
</ul>
</div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Typical activation</span>
<p className="text-xs">Free coffee or pastry for app download.</p>
</div>
</div>
</div>

<div className="flex items-start gap-6 p-5 border border-gray-100 rounded-xl">
<iconify-icon className="text-2xl text-black shrink-0" icon="solar:glass-water-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
<div><h4 className="font-medium text-black">Bars</h4></div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Use case</span>
<ul className="text-xs space-y-1">
<li>• social drinks</li>
<li>• Second Time events</li>
</ul>
</div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Typical activation</span>
<p className="text-xs">Free drink token for app download.</p>
</div>
</div>
</div>

<div className="flex items-start gap-6 p-5 border border-gray-100 rounded-xl">
<iconify-icon className="text-2xl text-black shrink-0" icon="solar:buildings-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
<div><h4 className="font-medium text-black">Members Clubs / Business Spaces</h4></div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Use case</span>
<ul className="text-xs space-y-1">
<li>• networking events</li>
<li>• business talks</li>
</ul>
</div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Typical activation</span>
<p className="text-xs">Speaker nights or networking socials.</p>
</div>
</div>
</div>

<div className="flex items-start gap-6 p-5 border border-gray-100 rounded-xl">
<iconify-icon className="text-2xl text-black shrink-0" icon="solar:plate-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
<div><h4 className="font-medium text-black">Restaurants</h4></div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Use case</span>
<ul className="text-xs space-y-1">
<li>• small group dinners</li>
<li>• Third Time events</li>
</ul>
</div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Typical activation</span>
<p className="text-xs">Curated dinner experiences.</p>
</div>
</div>
</div>

<div className="flex items-start gap-6 p-5 border border-gray-100 rounded-xl">
<iconify-icon className="text-2xl text-black shrink-0" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
<div><h4 className="font-medium text-black">Rooftop Bars</h4></div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Use case</span>
<ul className="text-xs space-y-1">
<li>• larger social gatherings</li>
<li>• seasonal events</li>
</ul>
</div>
<div>
<span className="text-xs font-medium text-gray-400 uppercase block mb-1">Typical activation</span>
<p className="text-xs">Rooftop social events.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-100 pt-24">
<div className="text-center mb-16">
<h2 className="text-2xl font-medium tracking-tight text-black mb-4">WHAT NEER EXTRACTS FROM EACH PARTNER</h2>
<p className="text-base">Every partner agrees to provide:</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
<div className="p-8 border border-gray-100 rounded-2xl flex flex-col items-center text-center">
<iconify-icon className="text-2xl text-black mb-4" icon="solar:key-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-medium text-black mb-2">Venue access for events</h4>
<p className="text-gray-400">Host NEER events periodically.</p>
</div>
<div className="p-8 border border-gray-100 rounded-2xl flex flex-col items-center text-center">
<iconify-icon className="text-2xl text-black mb-4" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-medium text-black mb-2">User discounts</h4>
<p className="text-gray-400">10–20% discount for NEER users.<br/>Encourages repeat visits.</p>
</div>
<div className="p-8 border border-gray-100 rounded-2xl flex flex-col items-center text-center">
<iconify-icon className="text-2xl text-black mb-4" icon="solar:clapperboard-play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-medium text-black mb-4">Content rights</h4>
<ul className="text-gray-400 text-xs space-y-1 text-left inline-block">
<li>• film inside the venue</li>
<li>• post on social media</li>
</ul>
</div>
<div className="p-8 border border-gray-100 rounded-2xl flex flex-col items-center text-center">
<iconify-icon className="text-2xl text-black mb-4" icon="solar:megaphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-medium text-black mb-4">Promotion support</h4>
<ul className="text-gray-400 text-xs space-y-1 text-left inline-block">
<li>• Instagram</li>
<li>• in-venue signage</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100 bg-gray-50/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5">
<h2 className="text-2xl font-medium tracking-tight text-black mb-4">JUDE – PARTNERSHIP KPIs</h2>
<p className="text-base">Jude’s role is to build the venue network that powers the app.</p>
</div>
<div className="lg:col-span-7">
<div className="bg-white p-10 border border-gray-200 rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-8">Month One Target</h3>
<div className="flex items-baseline gap-3 mb-12">
<span className="text-7xl font-medium tracking-tight text-black">16</span>
<span className="text-lg font-medium text-gray-400">Total partners</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 border-t border-gray-100 pt-8">
<div>
<div className="text-2xl font-medium text-black mb-1">5</div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">cafés</div>
</div>
<div>
<div className="text-2xl font-medium text-black mb-1">2</div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">restaurants</div>
</div>
<div>
<div className="text-2xl font-medium text-black mb-1">6</div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">bars</div>
</div>
<div>
<div className="text-2xl font-medium text-black mb-1">1</div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide">rooftop</div>
</div>
<div>
<div className="text-2xl font-medium text-black mb-1">2</div>
<div className="text-xs font-medium text-gray-400 uppercase tracking-wide leading-tight">members<br/>clubs</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-black mb-12">Why Venues Partner With NEER</h2>
<div className="space-y-8 text-lg text-black leading-relaxed font-normal">
<p className="">NEER turns your venue into a place where <span className="font-medium">new connections happen every day.</span></p>
<p className="text-gray-500">Through the app, people discover venues nearby and meet there in real life. That means your space becomes more than just somewhere people visit — it becomes somewhere <span className="font-medium text-black">people remember meeting someone.</span></p>
<p className="text-gray-500">And when people associate a venue with meaningful moments, they come back.</p>
<div className="pl-6 border-l-2 border-gray-200 py-2 my-10">
<p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-4">The nature of NEER is simple:</p>
<p>It encourages people to <span className="font-medium">step outside their comfort zone, meet someone new, and explore their city.</span></p>
</div>
<p className="text-gray-500">If your venue becomes a <span className="font-medium text-black">trusted place where people feel comfortable meeting</span>, that creates something every venue wants:</p>
<p className="text-2xl font-medium tracking-tight">real customer loyalty.</p>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100 bg-gray-50/30">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-black mb-16 text-center">What NEER Brings to Your Venue</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-gray-100 rounded-2xl">
<iconify-icon className="text-2xl text-black mb-6" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-black mb-4">Increased Footfall</h3>
<p className="text-sm mb-4">NEER actively drives people to partner venues through:</p>
<ul className="text-sm space-y-2 mb-4">
<li>• the app’s social map</li>
<li>• event invitations</li>
</ul>
<p className="text-sm">Users discover places where they can meet people nearby — and your venue appears directly on that map.</p>
</div>

<div className="bg-white p-8 border border-gray-100 rounded-2xl">
<iconify-icon className="text-2xl text-black mb-6" icon="solar:user-plus-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-black mb-4">New Customers</h3>
<p className="text-sm mb-4 font-medium text-black">Our goal is simple:<br/>Bring new people through your doors consistently.</p>
<p className="text-sm mb-4">These users are actively looking to meet others and explore the city. That means they arrive ready to:</p>
<ul className="text-sm space-y-2">
<li>• buy drinks</li>
<li>• stay longer</li>
</ul>
</div>

<div className="bg-white p-8 border border-gray-100 rounded-2xl">
<iconify-icon className="text-2xl text-black mb-6" icon="solar:refresh-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-black mb-4">Repeat Visits</h3>
<p className="text-sm mb-4">The NEER system encourages users to <span className="font-medium text-black">return to the same venues.</span></p>
<p className="text-sm mb-2 text-gray-400 uppercase tracking-widest text-xs">For example:</p>
<ol className="text-sm space-y-2 mb-4 text-black">
<li>1. Someone meets a person through the app</li>
<li>2. They return to the same venue for a <span className="font-medium">Second Time event</span></li>
<li>3. They return again for a group dinner or social event.</li>
</ol>
<p className="text-sm font-medium text-black">This creates regular repeat customers, not just one-off visitors.</p>
</div>

<div className="bg-white p-8 border border-gray-100 rounded-2xl">
<iconify-icon className="text-2xl text-black mb-6" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-black mb-4">Social Media Exposure</h3>
<p className="text-sm mb-4">Every partner venue is promoted across the NEER network.</p>
<p className="text-sm mb-2 text-gray-400 uppercase tracking-widest text-xs">Typical reach from a single event cycle:</p>
<ul className="text-sm space-y-3 mb-4 text-black font-medium">
<li>• 300,000 – 500,000 social media impressions</li>
<li>• 20–40 pieces of content created at events</li>
</ul>
<p className="text-sm">Your venue becomes part of the story of people meeting.</p>
</div>

<div className="bg-white p-8 border border-gray-100 rounded-2xl">
<iconify-icon className="text-2xl text-black mb-6" icon="solar:airbuds-case-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-black mb-4">Promotion Across NEER Channels</h3>
<p className="text-sm mb-4">Your venue will be promoted through:</p>
<ul className="text-sm space-y-2 mb-4">
<li>• the NEER app interface</li>
<li>• the NEER social map</li>
</ul>
<p className="text-sm">This means thousands of users will regularly see your venue recommended as a place to meet.</p>
</div>

<div className="bg-white p-8 border border-gray-100 rounded-2xl">
<iconify-icon className="text-2xl text-black mb-6" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium text-black mb-4">Hosted Events</h3>
<p className="text-sm mb-4">NEER collaborates with partner venues to host events that bring new people in.</p>
<p className="text-sm mb-4">These include:</p>
<ul className="text-sm space-y-2 mb-4">
<li>• social nights</li>
<li>• networking events</li>
</ul>
<p className="text-sm">Each event introduces new guests to your venue while generating content and exposure.</p>
</div>
</div>

<div className="mt-24 p-12 bg-white border border-gray-200 rounded-3xl text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<h3 className="text-2xl font-medium tracking-tight text-black mb-2">Example Exposure (First Months)</h3>
<p className="text-sm mb-12">Estimated impact per venue partner during early launch:</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="px-6 py-4 md:py-0 flex flex-col items-center justify-center">
<div className="text-4xl font-medium tracking-tight text-black mb-2">150–300</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">new visitors</div>
<div className="text-xs mt-1">driven through events</div>
</div>
<div className="px-6 py-4 md:py-0 flex flex-col items-center justify-center">
<div className="text-4xl font-medium tracking-tight text-black mb-2">500+</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">discoveries</div>
<div className="text-xs mt-1">through the app</div>
</div>
<div className="px-6 py-4 md:py-0 flex flex-col items-center justify-center">
<div className="text-4xl font-medium tracking-tight text-black mb-2">300,000+</div>
<div className="text-sm font-medium text-gray-400 uppercase tracking-wide">impressions</div>
<div className="text-xs mt-1">through event content</div>
</div>
</div>
<p className="mt-12 text-sm text-black font-medium">As the NEER user base grows, this exposure compounds.</p>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-4xl font-medium tracking-tight text-black mb-4">THE EVENT SYSTEM</h2>
<p className="text-lg text-black max-w-xl mx-auto">NEER runs <span className="font-medium">two types of events.</span><br/><span className="text-gray-500 text-base">These events activate partner venues and grow the platform.</span></p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

<div className="border border-gray-200 rounded-3xl overflow-hidden bg-white flex flex-col h-full shadow-sm">
<div className="p-8 border-b border-gray-100 bg-gray-50/50">
<h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Type 1</h3>
<h2 className="text-2xl font-medium tracking-tight text-black mb-4">ACQUISITION EVENTS</h2>
<div className="flex flex-col gap-1 text-sm">
<span className="font-medium text-black">Purpose</span>
<span>Drive app downloads and new users. These are simple social activations designed to introduce people to NEER.</span>
</div>
</div>
<div className="p-8 space-y-8 flex-grow">
<div>
<h4 className="text-sm font-medium text-black uppercase tracking-wide mb-3">How they work</h4>
<p className="text-sm mb-2">NEER collaborates with the venue.</p>
<p className="text-sm mb-4">On the day:<br/><span className="font-medium text-black">Users download the app → receive a reward.</span></p>
</div>
<div>
<h4 className="text-sm font-medium text-black uppercase tracking-wide mb-4">Examples</h4>
<div className="grid grid-cols-2 gap-4 text-sm">
<div className="p-4 border border-gray-100 rounded-xl">
<span className="font-medium text-black block mb-1">Café</span>
                                    Free pastry or coffee for download.
                                </div>
<div className="p-4 border border-gray-100 rounded-xl">
<span className="font-medium text-black block mb-1">Bar</span>
                                    Free drink token.
                                </div>
<div className="p-4 border border-gray-100 rounded-xl">
<span className="font-medium text-black block mb-1">Rooftop</span>
                                    Free entry drink.
                                </div>
<div className="p-4 border border-gray-100 rounded-xl">
<span className="font-medium text-black block mb-1">Members club</span>
                                    Free networking entry.
                                </div>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-black uppercase tracking-wide mb-3">Execution</h4>
<ul className="text-sm space-y-1">
<li>NEER staff on-site.</li>
<li>Users scan QR code → download → receive voucher.</li>
</ul>
</div>
</div>
<div className="p-6 bg-black text-white flex justify-between items-center rounded-b-2xl">
<span className="text-xs uppercase tracking-widest font-medium opacity-70">KPI</span>
<span className="text-sm font-medium">100–250 installs per event</span>
</div>
</div>

<div className="border border-gray-200 rounded-3xl overflow-hidden bg-white flex flex-col h-full shadow-sm">
<div className="p-8 border-b border-gray-100 bg-gray-50/50">
<h3 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">Type 2</h3>
<h2 className="text-2xl font-medium tracking-tight text-black mb-4">PRODUCT EVENTS</h2>
<div className="flex flex-col gap-1 text-sm">
<span className="font-medium text-black">Purpose</span>
<span>Drive real connections and repeat usage. These events are unlocked through behaviour inside the app.</span>
</div>
</div>
<div className="p-8 space-y-8 flex-grow">

<div className="border border-gray-100 rounded-xl p-6 relative">
<span className="absolute -top-3 left-4 bg-white px-2 text-xs font-medium uppercase tracking-widest text-black">The Second Time</span>
<div className="mb-4">
<span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Entry rule</span>
<p className="text-sm text-black">You must come <span className="font-medium">with someone you met through NEER.</span></p>
</div>
<div className="mb-4">
<span className="text-xs text-gray-400 uppercase tracking-widest block mb-2">Example event</span>
<div className="text-sm grid grid-cols-[80px_1fr] gap-2">
<span className="text-gray-400">Venue</span> <span>Bar, café or members club.</span>
<span className="text-gray-400">Format</span> <span>Pairs arrive together.<br/>40 people (20 pairs) attend.<br/>£800 bar tab behind the event (~£20 per person).<br/>People mix with other pairs.</span>
</div>
</div>
<div>
<span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Purpose</span>
<p className="text-sm">Encourage real meetings. Create stories and social proof.</p>
</div>
</div>

<div className="border border-gray-100 rounded-xl p-6 relative mt-10">
<span className="absolute -top-3 left-4 bg-white px-2 text-xs font-medium uppercase tracking-widest text-black">The Third Time</span>
<div className="mb-4">
<span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Entry rule</span>
<p className="text-sm text-black">Users who have met twice.</p>
</div>
<div className="mb-4">
<span className="text-xs text-gray-400 uppercase tracking-widest block mb-2">Example event</span>
<div className="text-sm grid grid-cols-[80px_1fr] gap-2">
<span className="text-gray-400">Venue</span> <span>Restaurant.</span>
<span className="text-gray-400">Format</span> <span>Small curated dinner tables.</span>
<span className="text-gray-400">Budget</span> <span>£600 dinner tab for 6–8 people.</span>
</div>
</div>
<div>
<span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Purpose</span>
<p className="text-sm">Turn connections into friend groups.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100 bg-gray-50/30">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium tracking-tight text-black mb-4">COST-EFFECTIVE EVENT MODEL</h2>
<p className="text-sm mb-8">The system prioritises <span className="font-medium text-black">simple, scalable events.</span> Instead of expensive curated events: Use partner venues and simple rewards.</p>
<div className="space-y-4">
<div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between">
<h3 className="text-sm font-medium uppercase tracking-widest text-black mb-4">Acquisition Event Cost</h3>
<div className="flex justify-between text-sm py-2 border-b border-gray-50">
<span>Expected installs</span> <span className="font-medium text-black">150+</span>
</div>
<div className="flex justify-between text-sm py-2 border-b border-gray-50">
<span>Drink tokens / rewards</span> <span className="font-medium text-black">£300–£800</span>
</div>
<div className="flex justify-between text-sm py-2 mt-2">
<span className="text-black font-medium">Cost per install</span> <span className="font-medium text-black">£2–£6</span>
</div>
</div>
<div className="bg-white p-6 border border-gray-100 rounded-xl shadow-sm flex flex-col justify-between">
<h3 className="text-sm font-medium uppercase tracking-widest text-black mb-4">Product Event Cost</h3>
<div className="flex justify-between text-sm py-2 border-b border-gray-50">
<span>Bar tab / dinner tab</span> <span className="font-medium text-black">£800+</span>
</div>
<div className="text-sm pt-4">
<span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Purpose</span>
                                Retention, community and valuable online content.
                            </div>
</div>
</div>
</div>

<div className="">
<h2 className="text-2xl font-medium tracking-tight text-black mb-4">MONTH ONE EXAMPLE</h2>
<div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] h-full flex flex-col">
<div className="mb-8">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-2">Events</span>
<div className="flex flex-col gap-2">
<div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-black">1 Acquisition Event</div>
<div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-lg text-sm text-black">1 Second Time Event</div>
</div>
</div>
<div className="mb-8">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-2">Cost Breakdown</span>
<div className="space-y-3 text-sm">
<div className="flex justify-between"><span>Acquisition event</span> <span>£600 tokens</span></div>
<div className="flex justify-between"><span>Second Time event</span> <span>£800 bar tab</span></div>
<div className="flex justify-between pb-3 border-b border-gray-100"><span>UGC creator</span> <span>£200</span></div>
<div className="flex justify-between text-base font-medium text-black pt-1"><span>Total</span> <span>£1,600</span></div>
</div>
</div>
<div className="mt-auto p-4 bg-gray-900 rounded-xl text-white">
<span className="text-xs font-medium uppercase tracking-widest opacity-60 block mb-3">Expected Outcome</span>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<div className="text-2xl font-medium">150–300</div>
<div className="text-xs opacity-80">Installs</div>
</div>
<div>
<div className="text-2xl font-medium">20–40</div>
<div className="text-xs opacity-80">Content pieces</div>
</div>
</div>
<div className="text-xs opacity-80 pt-3 border-t border-white/10">
                                Paid ad content created from event footage.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-black mb-4">SCALING MODEL</h2>
<p className="text-base mb-16">Events increase as the user base grows.</p>
<div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">

<div className="w-full md:w-1/3 p-8 border border-gray-100 rounded-2xl flex flex-col items-center">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
<iconify-icon className="text-xl text-black" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-3xl font-medium text-black mb-1">500</div>
<div className="text-sm text-gray-400 uppercase tracking-widest mb-6">Users</div>
<div className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-black w-full text-center">2 events / month</div>
</div>
<div className="hidden md:flex items-center justify-center">
<iconify-icon className="text-2xl text-gray-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="w-full md:w-1/3 p-8 border border-gray-200 shadow-sm rounded-2xl flex flex-col items-center relative -translate-y-2 bg-white">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
<iconify-icon className="text-xl text-black" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-3xl font-medium text-black mb-1">1000</div>
<div className="text-sm text-gray-400 uppercase tracking-widest mb-6">Users</div>
<div className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-black w-full text-center">4 events / month</div>
</div>
<div className="hidden md:flex items-center justify-center">
<iconify-icon className="text-2xl text-gray-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="w-full md:w-1/3 p-8 border border-black rounded-2xl flex flex-col items-center bg-black text-white relative -translate-y-4 shadow-lg">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-white/20">
<iconify-icon className="text-xl text-white" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-3xl font-medium text-white mb-1">2000</div>
<div className="text-sm text-white/50 uppercase tracking-widest mb-6">Users</div>
<div className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white w-full text-center">6–8 events / month</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100 bg-gray-50/50">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="bg-white p-10 border border-gray-200 rounded-3xl shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<iconify-icon className="text-black text-xl" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-black">DATA &amp; INSIGHTS (ALEX)</h2>
</div>
<p className="text-base mb-8">Alex tracks how the ecosystem evolves.</p>
<div className="mb-8">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-4">Key analysis</span>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> where signups happen</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-black rounded-full"></span> where meetups occur</li>
</ul>
</div>
<div className="p-6 bg-gray-50 border border-gray-100 rounded-xl">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-3">Insights guide:</span>
<ul className="space-y-2 text-sm text-black">
<li>• new partner acquisition</li>
<li>• where events should occur</li>
</ul>
</div>
</div>

<div className="bg-white p-10 border border-gray-200 rounded-3xl shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<iconify-icon className="text-black text-xl" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-black">THE CONTENT ENGINE</h2>
</div>
<div className="mb-8">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-4">Every event produces:</span>
<div className="flex flex-col gap-3">
<div className="px-4 py-3 border border-gray-100 rounded-lg text-sm text-black flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:microphone-2-linear"></iconify-icon> UGC interviews
                        </div>
<div className="px-4 py-3 border border-gray-100 rounded-lg text-sm text-black flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:heart-angle-linear"></iconify-icon> Stories of people meeting
                        </div>
<div className="px-4 py-3 border border-gray-100 rounded-lg text-sm text-black flex items-center gap-3">
<iconify-icon className="text-gray-400" icon="solar:star-linear"></iconify-icon> Venue highlights
                        </div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-gray-100">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest block mb-4">This content powers:</span>
<div className="flex gap-4">
<span className="px-3 py-1.5 bg-gray-100 text-black text-xs font-medium rounded-md">organic social</span>
<span className="px-3 py-1.5 bg-gray-100 text-black text-xs font-medium rounded-md">paid ads</span>
<span className="px-3 py-1.5 bg-gray-100 text-black text-xs font-medium rounded-md">partner promotion</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-gray-100 overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-black mb-16 text-center">THE ECOSYSTEM LOOP</h2>

<div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-8 snap-x w-full">
<div className="shrink-0 w-56 p-6 border border-gray-200 rounded-2xl snap-center bg-white">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 block">Step 01</span>
<p className="text-sm text-black font-medium">Partner venue hosts event</p>
</div>
<iconify-icon className="shrink-0 text-xl text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="shrink-0 w-56 p-6 border border-gray-200 rounded-2xl snap-center bg-white">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 block">Step 02</span>
<p className="text-sm text-black font-medium">People meet at the venue</p>
</div>
<iconify-icon className="shrink-0 text-xl text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="shrink-0 w-56 p-6 border border-gray-200 rounded-2xl snap-center bg-white">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 block">Step 03</span>
<p className="text-sm text-black font-medium">UGC content created</p>
</div>
<iconify-icon className="shrink-0 text-xl text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="shrink-0 w-56 p-6 border border-gray-200 rounded-2xl snap-center bg-white">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 block">Step 04</span>
<p className="text-sm text-black font-medium">Content spreads online</p>
</div>
<iconify-icon className="shrink-0 text-xl text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="shrink-0 w-56 p-6 border border-gray-200 rounded-2xl snap-center bg-white">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 block">Step 05</span>
<p className="text-sm text-black font-medium">New users download NEER</p>
</div>
<iconify-icon className="shrink-0 text-xl text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="shrink-0 w-56 p-6 border border-gray-200 rounded-2xl snap-center bg-white">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 block">Step 06</span>
<p className="text-sm text-black font-medium">Users return to the same venue</p>
</div>
<iconify-icon className="shrink-0 text-xl text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="shrink-0 w-56 p-6 border border-gray-200 rounded-2xl snap-center bg-white">
<span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-2 block">Step 07</span>
<p className="text-sm text-black font-medium">More events happen there</p>
</div>
</div>
<div className="mt-16 text-center max-w-lg mx-auto p-6 bg-gray-50 border border-gray-100 rounded-2xl">
<span className="text-xs uppercase tracking-widest text-gray-400 font-medium block mb-2">Result</span>
<p className="text-lg text-black font-medium">Venues become recognised social hubs inside NEER.</p>
</div>
</div>
</section>

<section className="text-center border-gray-100 border-t pt-40 pb-40">

<div className="max-w-4xl mr-auto mb-32 ml-auto pr-6 pl-6">
<h2 className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-8">THE RESULT</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-12 leading-tight">
            Instead of isolated events, NEER builds a <br className="hidden md:block"/> city-wide social infrastructure.
        </h3>
<div className="text-lg mb-16 space-y-4 text-black">
<p className="">Users don’t just download the app.</p>
<p className="">They associate <span className="font-medium">real places with meaningful moments.</span></p>
<p className="text-gray-500">And those places become the backbone of the NEER network.</p>
</div>
<button className="cta-primary shadow-orange-500/20 hover:scale-[1.02] hover:shadow-orange-500/30 transition-all duration-200 text-sm font-medium rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg">Partner With Rooted</button>

<div className="mt-32 pt-24 border-t border-gray-100">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl font-medium text-black tracking-tight mb-2">Rooted Monthly Retainer Breakdown</h2>
<p className="text-gray-500 text-base">Platform Growth &amp; Marketing Operations</p>
</div>
<div className="px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl inline-flex items-center gap-3 shrink-0 shadow-sm">
<span className="text-xl font-medium tracking-tight text-black">£9,500</span>
<span className="text-xs font-medium uppercase tracking-widest text-gray-400">/ month</span>
</div>
</div>
<div className="border border-gray-200 rounded-3xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">

<div className="hidden md:grid grid-cols-12 gap-6 p-6 border-b border-gray-100 bg-gray-50/50 text-xs font-medium uppercase tracking-widest text-gray-400">
<div className="col-span-4 pl-2">Area</div>
<div className="col-span-6">Description</div>
<div className="col-span-2 text-right pr-2">Allocation</div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-6 border-b border-gray-100 hover:bg-gray-50/30 transition-colors md:items-start">
<div className="col-span-4 flex items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-black shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<span className="font-medium text-black text-sm md:mt-2.5">Social Media Management</span>
</div>
<div className="col-span-6 text-sm text-gray-500 leading-relaxed md:mt-2.5">
                        Strategy, calendar planning, posting across Instagram, TikTok &amp; LinkedIn (daily stories, 5–6 weekly posts, community management)
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-sm md:mt-2.5 pr-2">
                        £2,200
                    </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-6 border-b border-gray-100 hover:bg-gray-50/30 transition-colors md:items-start">
<div className="col-span-4 flex items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-black shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<span className="font-medium text-black text-sm md:mt-2.5">Content Design &amp; Editing</span>
</div>
<div className="col-span-6 text-sm text-gray-500 leading-relaxed md:mt-2.5">
                        Video editing, reels production, post design, event creative assets, story templates, merch design
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-sm md:mt-2.5 pr-2">
                        £1,900
                    </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-6 border-b border-gray-100 hover:bg-gray-50/30 transition-colors md:items-start">
<div className="col-span-4 flex items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-black shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<span className="font-medium text-black text-sm md:mt-2.5">Paid Media Strategy</span>
</div>
<div className="col-span-6 text-sm text-gray-500 leading-relaxed md:mt-2.5">
                        Campaign architecture, audience strategy, conversion tracking, performance optimisation
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-sm md:mt-2.5 pr-2">
                        £2,000
                    </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-6 border-b border-gray-100 hover:bg-gray-50/30 transition-colors md:items-start">
<div className="col-span-4 flex items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-black shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="font-medium text-black text-sm md:mt-2.5">UGC Creator Management</span>
</div>
<div className="col-span-6 text-sm text-gray-500 leading-relaxed md:mt-2.5">
                        Sourcing creators, briefing, coordinating shoots, collecting content and approvals
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-sm md:mt-2.5 pr-2">
                        £700
                    </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-6 border-b border-gray-100 hover:bg-gray-50/30 transition-colors md:items-start">
<div className="col-span-4 flex items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-black shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<span className="font-medium text-black text-sm md:mt-2.5">CRM &amp; Lifecycle Marketing</span>
</div>
<div className="col-span-6 text-sm text-gray-500 leading-relaxed md:mt-2.5">
                        Email flows, onboarding automation, event reminders, membership conversion campaigns
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-sm md:mt-2.5 pr-2">
                        £1,200
                    </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-6 border-b border-gray-100 hover:bg-gray-50/30 transition-colors md:items-start">
<div className="col-span-4 flex items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-black shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M2 10h20"></path></svg>
</div>
<span className="font-medium text-black text-sm md:mt-2.5">Website Management</span>
</div>
<div className="col-span-6 text-sm text-gray-500 leading-relaxed md:mt-2.5">
                        Landing pages, event pages, updates, analytics tracking, CRO improvements
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-sm md:mt-2.5 pr-2">
                        £900
                    </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 p-6 border-b border-gray-100 hover:bg-gray-50/30 transition-colors md:items-start">
<div className="col-span-4 flex items-center md:items-start gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 text-black shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
<span className="font-medium text-black text-sm md:mt-2.5">Event Marketing Strategy</span>
</div>
<div className="col-span-6 text-sm text-gray-500 leading-relaxed md:mt-2.5">
                        Event campaign planning, promotion strategy, ticket funnel management
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-sm md:mt-2.5 pr-2">
                        £600
                    </div>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-6 md:items-center bg-gray-50 pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4">
<div className="col-span-10 md:text-right font-medium text-gray-500 text-xs uppercase tracking-widest">
                        Total Monthly Retainer
                    </div>
<div className="col-span-2 md:text-right font-medium text-black text-lg tracking-tight pr-2">
                        £9,500
                    </div>
</div>
</div>
</div>
</div>

</section>

    </>
  );
}
