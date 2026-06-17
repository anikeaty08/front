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



        function googleTranslateElementInit() {
          new google.translate.TranslateElement({
            pageLanguage: 'en', 
            includedLanguages: 'en,es', 
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:shield-star-linear"></iconify-icon>
<span className="text-white font-medium tracking-tighter text-lg uppercase">ALPHA<span className="text-slate-500">CODE</span></span>
</div>
<div className="flex items-center gap-4">
<div id="google_translate_element"><div dir="ltr" style={{}}><div className="goog-te-gadget-simple" id=":0.targetLanguage" style={{whiteSpace: 'nowrap'}}><img alt="" className="goog-te-gadget-icon" src="https://www.google.com/images/cleardot.gif" style={{backgroundImage: 'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")', backgroundPosition: '-65px 0px'}}/><span style={{verticalAlign: 'middle'}}><a aria-haspopup="true" className="VIpgJd-ZVi9od-xl07Ob-lTBxed" href="#"><span>Selecione o idioma</span><img alt="" height="1" src="https://www.google.com/images/cleardot.gif" width="1"/><span style={{borderLeft: '1px solid rgb(187, 187, 187)'}}>​</span><img alt="" height="1" src="https://www.google.com/images/cleardot.gif" width="1"/><span aria-hidden="true" style={{color: 'rgb(118, 118, 118)'}}>▼</span></a></span><img alt="" className="goog-te-gadget-icon" src="https://www.google.com/images/cleardot.gif" style={{backgroundImage: 'url("https://translate.googleapis.com/translate_static/img/te_ctrl3.gif")', backgroundPosition: '-65px 0px'}}/><span style={{verticalAlign: 'middle'}}><a aria-haspopup="true" className="VIpgJd-ZVi9od-xl07Ob-lTBxed" href="#"><span>Selecione o idioma</span><img alt="" height="1" src="https://www.google.com/images/cleardot.gif" width="1"/><span style={{borderLeft: '1px solid rgb(187, 187, 187)'}}>​</span><img alt="" height="1" src="https://www.google.com/images/cleardot.gif" width="1"/><span aria-hidden="true" style={{color: 'rgb(118, 118, 118)'}}>▼</span></a></span></div></div><div dir="ltr" style={{}}><div id=":0.targetLanguage"></div></div></div>
<a className="hidden sm:inline-flex text-sm font-medium text-white hover:text-orange-400 transition-colors" href="https://go.hotmart.com/N104391742P?ap=84e8">
                    Access Member Area
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="lg:w-1/2 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        Limited Time Availability
                    </div>
<h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                        Stop begging for attention. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">Command it.</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-light">
                        The modern world has weakened men. It's time to reclaim your biological birthright. Discover the psychological triggers that make you irresistible, respected, and dominant in any room.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="btn-sonar group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-orange-600 px-8 font-medium text-white transition-all duration-300 hover:bg-orange-500 hover:scale-[1.02]" href="https://go.hotmart.com/N104391742P?ap=84e8">
<span className="mr-2">Get The Alpha Code</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-xs text-slate-500 flex items-center gap-1">
<iconify-icon className="text-green-500" icon="solar:verified-check-linear"></iconify-icon>
                            Instant Digital Access
                        </p>
</div>
</div>

<div className="lg:w-1/2 relative">
<div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-900/20 aspect-[4/5] max-w-md mx-auto">

<img alt="Man in shadow depicting confidence" className="hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64e75968-520c-4b27-9db8-c3c558915026_800w.png"/>
<div className="bg-gradient-to-t from-slate-950 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="bg-slate-950/80 border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 backdrop-blur-md">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-slate-400 uppercase tracking-wider">Status</span>
<span className="text-xs text-emerald-400 font-medium">+100% Growth</span>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[92%]"></div>
</div>
<div className="mt-3 flex items-center justify-between text-xs">
<span className="text-white font-medium">Attraction</span>
<span className="text-slate-400">High</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-900/30">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The "Nice Guy" Syndrome is Killing Your Potential</h2>
<p className="text-slate-400 font-light">Society told you to be soft. To wait your turn. To apologize for your masculinity. Look where that got you.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Invisible to Women</h3>
<p className="text-sm text-slate-400 leading-relaxed">You start conversations, but they fizzle out. You get friend-zoned while others get the attention you deserve.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Lack of Respect</h3>
<p className="text-sm text-slate-400 leading-relaxed">People interrupt you. Your opinions are ignored. You feel small in social settings and at work.</p>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:battery-charge-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Low Energy &amp; Drive</h3>
<p className="text-sm text-slate-400 leading-relaxed">You lack the aggressive drive to chase what you want. You settle for mediocrity instead of excellence.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/2 sticky top-24">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-6">
                        Enter the <span className="text-orange-500">Alpha State</span>.
                    </h2>
<p className="text-slate-400 mb-8 font-light text-lg">
                        This isn't just a book. It's a deprogramming tool. We strip away the weak conditioning and reinstall the primal software of a successful man.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Master non-verbal dominance</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Psychological triggers of attraction</span>
</li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span>Eliminate fear of rejection permanently</span>
</li>
</ul>
<a className="btn-sonar inline-flex h-12 items-center justify-center rounded-md border border-slate-700 hover:border-orange-500 bg-transparent px-6 font-medium text-white transition-all hover:text-orange-500" href="https://go.hotmart.com/N104391742P?ap=84e8">
                        Start Your Transformation
                    </a>
</div>
<div className="lg:w-1/2 space-y-4">

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 p-6 transition-all hover:border-orange-500/30">
<div className="flex items-start justify-between">
<div>
<h4 className="text-base font-medium text-white">Module 01: The Mindset Shift</h4>
<p className="mt-2 text-sm text-slate-400">Kill the beta within. Learn to think, act, and make decisions like a leader. Stop seeking validation.</p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<span className="text-xs font-bold">01</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 p-6 transition-all hover:border-orange-500/30">
<div className="flex items-start justify-between">
<div>
<h4 className="text-base font-medium text-white">Module 02: Seduction Mechanics</h4>
<p className="mt-2 text-sm text-slate-400">Understand female psychology better than they understand themselves. How to create tension and desire instantly.</p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<span className="text-xs font-bold">02</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 p-6 transition-all hover:border-orange-500/30">
<div className="flex items-start justify-between">
<div>
<h4 className="text-base font-medium text-white">Module 03: Body Language Mastery</h4>
<p className="mt-2 text-sm text-slate-400">Your posture speaks before you do. Project power, calmness, and danger without saying a word.</p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<span className="text-xs font-bold">03</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 p-6 transition-all hover:border-orange-500/30">
<div className="flex items-start justify-between">
<div>
<h4 className="text-base font-medium text-white">Module 04: Social Dominance</h4>
<p className="mt-2 text-sm text-slate-400">How to handle confrontation, navigate social hierarchies, and become the center of attention naturally.</p>
</div>
<div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<span className="text-xs font-bold">04</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-8 lg:p-12 text-center shadow-2xl">
<h3 className="text-2xl font-medium text-white mb-2">The Investment in Yourself</h3>
<p className="text-slate-400 mb-8">Cheaper than a bad date. Infinitely more valuable.</p>
<div className="flex items-center justify-center gap-4 mb-8">
<span className="text-xl text-slate-500 line-through font-light">$97.00</span>
<div className="flex items-start">
<span className="text-2xl font-bold text-white mt-1">$</span>
<span className="text-6xl font-bold text-white tracking-tighter">18</span>
<span className="text-xl font-bold text-white mt-1">.99</span>
</div>
</div>
<div className="max-w-sm mx-auto space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-square-linear"></iconify-icon>
<span className="text-left">Full "Hombre Alfa" Digital Guide</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-square-linear"></iconify-icon>
<span className="text-left">Bonus: Confidence Blueprint</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-orange-500" icon="solar:check-square-linear"></iconify-icon>
<span className="text-left">Lifetime Access &amp; Updates</span>
</div>
</div>
<a className="btn-sonar block w-full py-4 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg tracking-wide hover:brightness-110 transition-all shadow-lg shadow-orange-900/40" href="https://go.hotmart.com/N104391742P?ap=84e8">
                    DOWNLOAD NOW
                </a>
<p className="mt-4 text-xs text-slate-500">
                    Secure payment via Hotmart. 7-Day Money Back Guarantee.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-2xl font-medium text-white tracking-tight mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">

<details className="group rounded-lg border border-white/5 bg-white/[0.02] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
<h4 className="font-medium text-sm">Is this a physical book?</h4>
<iconify-icon className="text-slate-400 transition group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-slate-400 leading-relaxed font-light">
                        No, this is a digital product (eBook). You will receive instant access via email immediately after purchase, so you can start reading on your phone, tablet, or computer right away.
                    </p>
</details>

<details className="group rounded-lg border border-white/5 bg-white/[0.02] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
<h4 className="font-medium text-sm">Will this work if I'm shy?</h4>
<iconify-icon className="text-slate-400 transition group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-slate-400 leading-relaxed font-light">
                        Especially if you are shy. This guide is designed to break the mental barriers that cause shyness and replace them with confidence tools. It's a step-by-step process.
                    </p>
</details>

<details className="group rounded-lg border border-white/5 bg-white/[0.02] p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
<h4 className="font-medium text-sm">Is there a guarantee?</h4>
<iconify-icon className="text-slate-400 transition group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm text-slate-400 leading-relaxed font-light">
                        Yes. We offer a 7-day money-back guarantee. If you don't feel the value, simply request a refund via Hotmart. No risk on your end.
                    </p>
</details>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
<div className="flex items-center gap-2 mb-6 opacity-50 grayscale hover:grayscale-0 transition-all">
<iconify-icon className="text-orange-500 text-xl" icon="solar:shield-star-linear"></iconify-icon>
<span className="text-white font-medium tracking-tighter uppercase">ALPHA<span className="text-slate-500">CODE</span></span>
</div>
<p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                This site is not part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<p className="text-xs text-slate-700 mt-8">© 2024 Alpha Code. All rights reserved.</p>
</div>
</footer>



<div className="VIpgJd-yAWNEb-L7lbkb skiptranslate" data-id="" id="goog-gt-tt" style={{borderRadius: '12px', margin: '0 0 0 -23px', padding: '0', fontFamily: '\'Google Sans\', Arial, sans-serif'}}><div className="VIpgJd-yAWNEb-hvhgNd" id="goog-gt-vt"><div className="VIpgJd-yAWNEb-hvhgNd-Ud7fr"><img alt="" height="24" src="https://fonts.gstatic.com/s/i/productlogos/translate/v14/24px.svg" width="24"/><div className="VIpgJd-yAWNEb-hvhgNd-IuizWc-i3jM8c" dir="ltr">Texto original</div></div><div className="VIpgJd-yAWNEb-hvhgNd-k77Iif"><div className="VIpgJd-yAWNEb-nVMfcd-fmcmS VIpgJd-yAWNEb-hvhgNd-axAV1" id="goog-gt-original-text"></div></div><div className="VIpgJd-yAWNEb-hvhgNd-N7Eqid ltr"><div className="VIpgJd-yAWNEb-hvhgNd-N7Eqid-B7I4Od ltr" dir="ltr"><div className="VIpgJd-yAWNEb-hvhgNd-UTujCb">Avalie a tradução</div><div className="VIpgJd-yAWNEb-hvhgNd-eO9mKe">O feedback vai ser usado para ajudar a melhorar o Google Tradutor</div></div><div className="VIpgJd-yAWNEb-hvhgNd-xgov5 ltr"><button aria-label="Tradução boa" aria-pressed="false" className="VIpgJd-yAWNEb-hvhgNd-bgm6sf" id="goog-gt-thumbUpButton" title="Tradução boa" type="button"><span id="goog-gt-thumbUpIcon"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z"></path></svg></span><span id="goog-gt-thumbUpIconFilled"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z"></path></svg></span></button><button aria-label="Tradução ruim" aria-pressed="false" className="VIpgJd-yAWNEb-hvhgNd-bgm6sf" id="goog-gt-thumbDownButton" title="Tradução ruim" type="button"><span id="goog-gt-thumbDownIcon"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z"></path></svg></span><span id="goog-gt-thumbDownIconFilled"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z"></path></svg></span></button></div></div><div className="VIpgJd-yAWNEb-hvhgNd-aXYTce" id="goog-gt-votingHiddenPane"><form action="//translate.googleapis.com/translate_voting?client=te" className="VIpgJd-yAWNEb-hvhgNd-aXYTce" id="goog-gt-votingForm" method="post" target="votingFrame"><input id="goog-gt-votingInputSrcLang" name="sl" type="text"/><input id="goog-gt-votingInputTrgLang" name="tl" type="text"/><input id="goog-gt-votingInputSrcText" name="query" type="text"/><input id="goog-gt-votingInputTrgText" name="gtrans" type="text"/><input id="goog-gt-votingInputVote" name="vote" type="text"/></form><iframe frameborder="0" name="votingFrame"></iframe></div></div></div><div className="VIpgJd-ZVi9od-aZ2wEe-wOHMyf"><div className="VIpgJd-ZVi9od-aZ2wEe-OiiCO"><svg className="VIpgJd-ZVi9od-aZ2wEe" height="96px" viewbox="0 0 66 66" width="96px" xmlns="http://www.w3.org/2000/svg"><circle className="VIpgJd-ZVi9od-aZ2wEe-Jt5cK" cx="33" cy="33" fill="none" r="30" strokeLinecap="round" strokeWidth="6"></circle></svg></div></div><iframe className="VIpgJd-ZVi9od-xl07Ob-OEVmcd skiptranslate" frameborder="0" style={{boxSizing: 'content-box', width: '143px', height: '56px', display: 'none'}} title="Widget de tradução de idiomas"></iframe><div className="VIpgJd-yAWNEb-L7lbkb skiptranslate" data-id="" id="goog-gt-tt" style={{borderRadius: '12px', margin: '0 0 0 -23px', padding: '0', fontFamily: '\'Google Sans\', Arial, sans-serif'}}><div className="VIpgJd-yAWNEb-hvhgNd" id="goog-gt-vt"><div className="VIpgJd-yAWNEb-hvhgNd-Ud7fr"><img alt="" height="24" src="https://fonts.gstatic.com/s/i/productlogos/translate/v14/24px.svg" width="24"/><div className="VIpgJd-yAWNEb-hvhgNd-IuizWc-i3jM8c" dir="ltr">Texto original</div></div><div className="VIpgJd-yAWNEb-hvhgNd-k77Iif"><div className="VIpgJd-yAWNEb-nVMfcd-fmcmS VIpgJd-yAWNEb-hvhgNd-axAV1" id="goog-gt-original-text"></div></div><div className="VIpgJd-yAWNEb-hvhgNd-N7Eqid ltr"><div className="VIpgJd-yAWNEb-hvhgNd-N7Eqid-B7I4Od ltr" dir="ltr"><div className="VIpgJd-yAWNEb-hvhgNd-UTujCb">Avalie a tradução</div><div className="VIpgJd-yAWNEb-hvhgNd-eO9mKe">O feedback vai ser usado para ajudar a melhorar o Google Tradutor</div></div><div className="VIpgJd-yAWNEb-hvhgNd-xgov5 ltr"><button aria-label="Tradução boa" aria-pressed="false" className="VIpgJd-yAWNEb-hvhgNd-bgm6sf" id="goog-gt-thumbUpButton" title="Tradução boa" type="button"><span id="goog-gt-thumbUpIcon"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7H2v13h16c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM7 18H4V9h3v9zm14-7l-3 7H9V8l4.34-4.34L12 9h9v2z"></path></svg></span><span id="goog-gt-thumbUpIconFilled"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M21 7h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 0S7.08 6.85 7 7v13h11c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73V9c0-1.1-.9-2-2-2zM5 7H1v13h4V7z"></path></svg></span></button><button aria-label="Tradução ruim" aria-pressed="false" className="VIpgJd-yAWNEb-hvhgNd-bgm6sf" id="goog-gt-thumbDownButton" title="Tradução ruim" type="button"><span id="goog-gt-thumbDownIcon"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7h5V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zM17 6h3v9h-3V6zM3 13l3-7h9v10l-4.34 4.34L12 15H3v-2z"></path></svg></span><span id="goog-gt-thumbDownIconFilled"><svg className="VIpgJd-yAWNEb-hvhgNd-THI6Vb NMm5M" focusable="false" height="24" viewbox="0 0 24 24" width="24"><path d="M3 17h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 24s7.09-6.85 7.17-7V4H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2zm16 0h4V4h-4v13z"></path></svg></span></button></div></div><div className="VIpgJd-yAWNEb-hvhgNd-aXYTce" id="goog-gt-votingHiddenPane"><form action="//translate.googleapis.com/translate_voting?client=te" className="VIpgJd-yAWNEb-hvhgNd-aXYTce" id="goog-gt-votingForm" method="post" target="votingFrame"><input id="goog-gt-votingInputSrcLang" name="sl" type="text"/><input id="goog-gt-votingInputTrgLang" name="tl" type="text"/><input id="goog-gt-votingInputSrcText" name="query" type="text"/><input id="goog-gt-votingInputTrgText" name="gtrans" type="text"/><input id="goog-gt-votingInputVote" name="vote" type="text"/></form><iframe frameborder="0" name="votingFrame"></iframe></div></div></div><div className="VIpgJd-ZVi9od-aZ2wEe-wOHMyf"><div className="VIpgJd-ZVi9od-aZ2wEe-OiiCO"><svg className="VIpgJd-ZVi9od-aZ2wEe" height="96px" viewbox="0 0 66 66" width="96px" xmlns="http://www.w3.org/2000/svg"><circle className="VIpgJd-ZVi9od-aZ2wEe-Jt5cK" cx="33" cy="33" fill="none" r="30" strokeLinecap="round" strokeWidth="6"></circle></svg></div></div><iframe className="VIpgJd-ZVi9od-xl07Ob-OEVmcd skiptranslate" frameborder="0" style={{boxSizing: 'content-box', width: '143px', height: '56px', display: 'none'}} title="Widget de tradução de idiomas"></iframe>
    </>
  );
}
