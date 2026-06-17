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



lucide.createIcons({strokeWidth:1.5});

const cards=[card1,card2,card3,card4];
let active=0;setup();

function setup(){
 positionCards();
 [dot1,dot2,dot3,dot4].forEach((d,i)=>d.onclick=()=>switchTo(i));
 cards.forEach(c=>c.addEventListener('mousedown',startDrag));
 cards.forEach(c=>c.addEventListener('touchstart',e=>startDrag(e.touches[0])));
}

function positionCards(){
 cards.forEach((c,i)=>{
  const idx=(i-active+cards.length)%cards.length;
  c.style.zIndex=cards.length-idx;
  c.style.transform=`translateX(${idx* -40}px) translateY(${idx*20}px) scale(${1-idx*0.05})`;
  c.style.opacity=1-idx*0.15;
 });
 document.querySelectorAll('[id^=dot]').forEach((d,i)=>d.className=`w-3 h-3 rounded-full ${i===active?'bg-white':'bg-gray-500'}`);
}

function switchTo(i){active=i;positionCards();}

let startX,dragging=false;
function startDrag(e){
 dragging=true;startX=e.clientX;
 window.addEventListener('mousemove',onDrag);
 window.addEventListener('touchmove',t=>onDrag(t.touches[0]));
 window.addEventListener('mouseup',endDrag);
 window.addEventListener('touchend',endDrag);
}

function onDrag(e){
 if(!dragging)return;
 const diff=e.clientX-startX;
 cards[active].style.transform+=` translateX(${diff}px)`;
}

function endDrag(e){
 if(!dragging)return;dragging=false;
 const diff=e.clientX-startX;
 if(diff<-60)switchTo((active+1)%cards.length);
 if(diff>60)switchTo((active-1+cards.length)%cards.length);
 positionCards();
 window.removeEventListener('mousemove',onDrag);
 window.removeEventListener('touchmove',onDrag);
 window.removeEventListener('mouseup',endDrag);
 window.removeEventListener('touchend',endDrag);
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
      

<header className="fixed inset-x-0 top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<span className="text-xl tracking-tight font-medium">Tunsell</span>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-300 hover:text-white">How It Works</a>
<a className="text-sm text-gray-300 hover:text-white">Pricing</a>
<button className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-gray-100">Try Demo</button>
</nav>
</div>
</header>

<section className="relative pt-28 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h1 className="text-5xl lg:text-6xl tracking-tight font-semibold">
      Tunisia’s First AI Voice Assistant
    </h1>
<p className="text-xl text-gray-300 max-w-md">Sells, interviews and supports your customers 24/7 – fluent in Tunisian dialect.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium">🚀 Try the Demo</button>
<button className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10">📞 Book a Call</button>
</div>
</div>
<img alt="Illustration of a voice assistant avatar" className="w-full rounded-xl shadow-xl" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6 text-center space-y-16">
<div className="space-y-4">
<h2 className="text-4xl tracking-tight font-semibold">How It Works – Simple, Smart, Tunisian.</h2>
<p className="text-gray-400">Four streamlined steps from greeting to action.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 text-left">
<div className="space-y-3">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center"><i className="text-indigo-400" data-lucide="mic"></i></div>
<h3 className="text-lg font-medium">Speak or Call</h3>
<p className="text-gray-400">Talk via your site, app, or phone line.</p>
</div>
<div className="space-y-3">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center"><i className="text-indigo-400" data-lucide="brain"></i></div>
<h3 className="text-lg font-medium">Assistant Understands</h3>
<p className="text-gray-400">STT + intent detection + your data.</p>
</div>
<div className="space-y-3">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center"><i className="text-indigo-400" data-lucide="message-circle"></i></div>
<h3 className="text-lg font-medium">Responds Naturally</h3>
<p className="text-gray-400">Replies in fluent Derja voice.</p>
</div>
<div className="space-y-3">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center"><i className="text-indigo-400" data-lucide="check-circle"></i></div>
<h3 className="text-lg font-medium">Acts on Your Behalf</h3>
<p className="text-gray-400">Books meetings, sends messages &amp; more.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/60 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-12">
<div className="space-y-6">
<h2 className="text-4xl tracking-tight font-semibold">Built for Real Business Needs</h2>
<div className="flex gap-3">
<button className="w-3 h-3 rounded-full bg-white" id="dot1"></button>
<button className="w-3 h-3 rounded-full bg-gray-500" id="dot2"></button>
<button className="w-3 h-3 rounded-full bg-gray-500" id="dot3"></button>
<button className="w-3 h-3 rounded-full bg-gray-500" id="dot4"></button>
</div>
<p className="text-gray-400 max-w-md">Swipe or tap to explore how Tunsell boosts sales, HR, support and more.</p>
</div>

<div className="relative h-[32rem] flex items-center justify-center">
<div className="relative cards w-[22rem] h-full" id="cards">

<article className="card absolute inset-0 bg-slate-800/70 backdrop-blur rounded-2xl p-8 flex flex-col gap-6" id="card1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center">
<i className="text-white" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-2xl tracking-tight font-semibold">Sales Assistant</h3>
</div>
<p className="text-gray-300">Qualify leads, answer FAQs &amp; send tailored offers instantly.</p>
<ul className="text-gray-400 list-disc list-inside space-y-1 flex-1">
<li>Lead scoring</li><li>CRM logging</li><li>Offer generation</li>
</ul>
<button className="mt-auto px-4 py-3 bg-white/10 rounded-lg font-medium hover:bg-white/20">See in action</button>
</article>

<article className="card absolute inset-0 bg-slate-800/70 backdrop-blur rounded-2xl p-8 flex flex-col gap-6" id="card2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
<i className="text-white" data-lucide="mic"></i>
</div>
<h3 className="text-2xl tracking-tight font-semibold">Interview Bot</h3>
</div>
<p className="text-gray-300">Automate candidate interviews, record answers &amp; analytics.</p>
<ul className="text-gray-400 list-disc list-inside space-y-1 flex-1">
<li>Structured Q&amp;A</li><li>Sentiment analysis</li><li>ATS sync</li>
</ul>
<button className="mt-auto px-4 py-3 bg-white/10 rounded-lg font-medium hover:bg-white/20">See in action</button>
</article>

<article className="card absolute inset-0 bg-slate-800/70 backdrop-blur rounded-2xl p-8 flex flex-col gap-6" id="card3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
<i className="text-white" data-lucide="headphones"></i>
</div>
<h3 className="text-2xl tracking-tight font-semibold">24/7 Support</h3>
</div>
<p className="text-gray-300">Resolve queries any time, no tickets, no delays.</p>
<ul className="text-gray-400 list-disc list-inside space-y-1 flex-1">
<li>Instant answers</li><li>Escalation routing</li><li>Multichannel</li>
</ul>
<button className="mt-auto px-4 py-3 bg-white/10 rounded-lg font-medium hover:bg-white/20">See in action</button>
</article>

<article className="card absolute inset-0 bg-slate-800/70 backdrop-blur rounded-2xl p-8 flex flex-col gap-6" id="card4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
<i className="text-white" data-lucide="book-open"></i>
</div>
<h3 className="text-2xl tracking-tight font-semibold">Internal Knowledge</h3>
</div>
<p className="text-gray-300">Ask policies, HR info or specs by voice – securely.</p>
<ul className="text-gray-400 list-disc list-inside space-y-1 flex-1">
<li>Document search</li><li>Permission-aware</li><li>Voice &amp; chat</li>
</ul>
<button className="mt-auto px-4 py-3 bg-white/10 rounded-lg font-medium hover:bg-white/20">See in action</button>
</article>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<div className="text-center space-y-4">
<h2 className="text-4xl tracking-tight font-semibold">Connect Anywhere. Integrate Effortlessly.</h2>
<p className="text-gray-400">Plug into your favourite tools in minutes.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border border-white/10 rounded-xl p-6 space-y-4 bg-slate-900/40">
<i className="text-green-400" data-lucide="phone"></i>
<h3 className="text-lg font-medium">WhatsApp</h3>
<p className="text-gray-400 text-sm">Voice or text, your assistant replies like a human.</p>
</div>

<div className="border border-white/10 rounded-xl p-6 space-y-4 bg-slate-900/40">
<i className="text-indigo-400" data-lucide="database"></i>
<h3 className="text-lg font-medium">CRM</h3>
<p className="text-gray-400 text-sm">Auto-log calls &amp; create leads in HubSpot, Pipedrive…</p>
</div>

<div className="border border-white/10 rounded-xl p-6 space-y-4 bg-slate-900/40">
<i className="text-yellow-400" data-lucide="zap"></i>
<h3 className="text-lg font-medium">Zapier</h3>
<p className="text-gray-400 text-sm">Trigger 6,000+ apps from any conversation.</p>
</div>

<div className="border border-white/10 rounded-xl p-6 space-y-4 bg-slate-900/40">
<i className="text-teal-400" data-lucide="workflow"></i>
<h3 className="text-lg font-medium">n8n</h3>
<p className="text-gray-400 text-sm">Design voice-powered flows with zero code.</p>
</div>

<div className="border border-white/10 rounded-xl p-6 space-y-4 bg-slate-900/40">
<i className="text-pink-400" data-lucide="repeat"></i>
<h3 className="text-lg font-medium">Make.com</h3>
<p className="text-gray-400 text-sm">Automate multi-step scenarios visually.</p>
</div>

<div className="border border-white/10 rounded-xl p-6 space-y-4 bg-slate-900/40">
<i className="text-white" data-lucide="code"></i>
<h3 className="text-lg font-medium">REST API</h3>
<p className="text-gray-400 text-sm">Build custom integrations with full control.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/60 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<div className="text-center space-y-4">
<h2 className="text-4xl tracking-tight font-semibold">What Makes Our Assistant Different?</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-slate-800/60 p-6 rounded-xl space-y-3">
<i className="text-red-500" data-lucide="flag"></i>
<h3 className="font-medium">Tunisian Dialect Mastery</h3>
<p className="text-gray-400 text-sm">Trained on thousands of real conversations.</p>
</div>
<div className="bg-slate-800/60 p-6 rounded-xl space-y-3">
<i className="text-indigo-400" data-lucide="book"></i>
<h3 className="font-medium">Custom Knowledge</h3>
<p className="text-gray-400 text-sm">Load docs, FAQs or CRM data instantly.</p>
</div>
<div className="bg-slate-800/60 p-6 rounded-xl space-y-3">
<i className="text-green-400" data-lucide="phone-call"></i>
<h3 className="font-medium">Real-Time Calls</h3>
<p className="text-gray-400 text-sm">Answers or makes phone calls like a human.</p>
</div>
<div className="bg-slate-800/60 p-6 rounded-xl space-y-3">
<i className="text-yellow-400" data-lucide="speaker"></i>
<h3 className="font-medium">Human-like Voice</h3>
<p className="text-gray-400 text-sm">Powered by natural voice synthesis.</p>
</div>
<div className="bg-slate-800/60 p-6 rounded-xl space-y-3">
<i className="text-white" data-lucide="lock"></i>
<h3 className="font-medium">Fully Private &amp; Secure</h3>
<p className="text-gray-400 text-sm">GDPR compliant with end-to-end encryption.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6 text-center space-y-8">
<h2 className="text-4xl tracking-tight font-semibold">Try It In Action</h2>
<p className="text-gray-400">Watch the assistant sell, support and schedule – all in Derja.</p>
<div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center">
<i className="w-16 h-16 text-white" data-lucide="play"></i>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium">🎬 Watch Video</button>
<button className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10">🚀 Try Live</button>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/60 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center space-y-12">
<h2 className="text-4xl tracking-tight font-semibold">What Our Early Users Say</h2>
<blockquote className="italic text-xl text-gray-300 max-w-2xl mx-auto">“We closed 3× more leads thanks to Tunsell.”<br/><span className="not-italic block mt-4 font-medium">— Yassine M., Showroom Owner</span></blockquote>
<blockquote className="italic text-xl text-gray-300 max-w-2xl mx-auto">“It feels like you’re talking to a real agent, in Derja!”<br/><span className="not-italic block mt-4 font-medium">— Ines C., HR Manager</span></blockquote>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6 space-y-12">
<h2 className="text-center text-4xl tracking-tight font-semibold">Start Free. Scale When You Grow.</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-white/10 rounded-xl p-8 space-y-6 bg-slate-900/40">
<h3 className="text-lg font-medium">Starter</h3>
<p className="text-4xl font-semibold tracking-tight">Free</p>
<ul className="text-gray-400 text-sm space-y-1">
<li>100 interactions / mo</li><li>1 assistant</li><li>Email support</li>
</ul>
<button className="w-full mt-4 px-4 py-3 bg-white text-slate-900 rounded-lg font-medium">Get Started</button>
</div>

<div className="border border-indigo-500/40 rounded-xl p-8 space-y-6 bg-slate-900/50">
<h3 className="text-lg font-medium">Pro</h3>
<p className="text-4xl font-semibold tracking-tight">99 TND<span className="text-base font-medium">/mo</span></p>
<ul className="text-gray-400 text-sm space-y-1">
<li>1,000 interactions</li><li>CRM &amp; WhatsApp</li><li>Voice calls</li>
</ul>
<button className="w-full mt-4 px-4 py-3 bg-indigo-600 rounded-lg font-medium hover:bg-indigo-500">Start Trial</button>
</div>

<div className="border border-white/10 rounded-xl p-8 space-y-6 bg-slate-900/40">
<h3 className="text-lg font-medium">Enterprise</h3>
<p className="text-4xl font-semibold tracking-tight">Custom</p>
<ul className="text-gray-400 text-sm space-y-1">
<li>Unlimited interactions</li><li>Priority support</li><li>On-prem option</li>
</ul>
<button className="w-full mt-4 px-4 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10">Request Quote</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/60 border-t border-white/5">
<div className="max-w-5xl mx-auto px-6 space-y-8">
<h2 className="text-center text-4xl tracking-tight font-semibold">Frequently Asked Questions</h2>

<details className="border-b border-white/10 py-4">
<summary className="cursor-pointer font-medium">Can it speak French or English?</summary>
<p className="mt-2 text-gray-400">Yes, but it's optimized for Tunisian Arabic. Multilingual is possible.</p>
</details>

<details className="border-b border-white/10 py-4">
<summary className="cursor-pointer font-medium">How does it learn our data?</summary>
<p className="mt-2 text-gray-400">Upload PDFs, URLs or connect your CRM – it indexes automatically.</p>
</details>

<details className="border-b border-white/10 py-4">
<summary className="cursor-pointer font-medium">Is my data used for training others?</summary>
<p className="mt-2 text-gray-400">No. Your data stays private and encrypted.</p>
</details>

<details className="py-4">
<summary className="cursor-pointer font-medium">Can it handle real phone calls?</summary>
<p className="mt-2 text-gray-400">Yes, via Twilio or SIP it makes &amp; receives calls.</p>
</details>
</div>
</section>

<section className="py-24 text-center">
<h2 className="text-4xl tracking-tight font-semibold mb-6">Ready to Launch Your Tunisian AI Assistant?</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium">🚀 Try the Demo</button>
<button className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10">📞 Book a Call</button>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
<div className="space-y-4">
<span className="text-lg font-medium">Tunsell</span>
<p className="text-gray-400">© 2025 Tunsell. All rights reserved.</p>
</div>
<nav className="space-y-2">
<a className="block text-gray-400 hover:text-white">Home</a>
<a className="block text-gray-400 hover:text-white">Features</a>
<a className="block text-gray-400 hover:text-white">Pricing</a>
<a className="block text-gray-400 hover:text-white">Contact</a>
<a className="block text-gray-400 hover:text-white">Privacy Policy</a>
</nav>
<div className="space-y-4">
<div className="flex gap-4">
<a><i data-lucide="twitter"></i></a>
<a><i data-lucide="github"></i></a>
<a><i data-lucide="linkedin"></i></a>
</div>
<div className="flex gap-2">
<button className="border border-white/20 rounded-full px-3 py-1">🇹🇳</button>
<button className="border border-white/20 rounded-full px-3 py-1">🇫🇷</button>
<button className="border border-white/20 rounded-full px-3 py-1">🇬🇧</button>
</div>
</div>
</div>
</footer>



    </>
  );
}
