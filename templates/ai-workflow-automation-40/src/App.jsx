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
      

<header className="fixed top-0 inset-x-0 z-50 glass-nav transition-transform duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<svg className="text-white opacity-90 group-hover:opacity-100 transition-opacity" fill="none" height="24" viewbox="0 0 87 24" width="87">

<path clip-rule="evenodd" d="M47.9855 4.8C47.9855 7.45098 45.8365 9.6 43.1855 9.6C40.949 9.6 39.0696 8.0703 38.5368 6H31.8352C30.662 6 29.6607 6.84822 29.4678 8.00544L29.2706 9.18912C29.0832 10.313 28.5147 11.2911 27.7108 12C28.5147 12.7089 29.0832 13.687 29.2706 14.8109L29.4678 15.9946C29.6607 17.1518 30.662 18 31.8352 18H33.7368C34.2696 15.9297 36.149 14.4 38.3855 14.4C41.0365 14.4 43.1855 16.549 43.1855 19.2C43.1855 21.851 41.0365 24 38.3855 24C36.149 24 34.2696 22.4703 33.7368 20.4H31.8352C29.4888 20.4 27.4863 18.7036 27.1005 16.3891L26.9032 15.2054C26.7104 14.0482 25.7091 13.2 24.5359 13.2H22.5782C21.979 15.1681 20.1495 16.6 17.9855 16.6C15.8216 16.6 13.9921 15.1681 13.3929 13.2H10.5782C9.97901 15.1681 8.14949 16.6 5.98554 16.6C3.33458 16.6 1.18555 14.4509 1.18555 11.8C1.18555 9.14904 3.33458 7.00002 5.98554 7.00002C8.29361 7.00002 10.2212 8.62902 10.6812 10.8H13.2899C13.7499 8.62902 15.6775 7.00002 17.9855 7.00002C20.2936 7.00002 22.2212 8.62902 22.6812 10.8H24.5359C25.7091 10.8 26.7104 9.95178 26.9032 8.79456L27.1005 7.61088C27.4863 5.29638 29.4888 3.6 31.8352 3.6H38.5368C39.0696 1.52973 40.949 0 43.1855 0C45.8365 0 47.9855 2.14903 47.9855 4.8ZM45.5855 4.8C45.5855 6.12546 44.511 7.2 43.1855 7.2C41.8601 7.2 40.7855 6.12546 40.7855 4.8C40.7855 3.47452 41.8601 2.4 43.1855 2.4C44.511 2.4 45.5855 3.47452 45.5855 4.8ZM5.98554 14.2C7.31105 14.2 8.38553 13.1255 8.38553 11.8C8.38553 10.4745 7.31105 9.40002 5.98554 9.40002C4.66006 9.40002 3.58554 10.4745 3.58554 11.8C3.58554 13.1255 4.66006 14.2 5.98554 14.2ZM17.9855 14.2C19.311 14.2 20.3855 13.1255 20.3855 11.8C20.3855 10.4745 19.311 9.40002 17.9855 9.40002C16.6601 9.40002 15.5855 10.4745 15.5855 11.8C15.5855 13.1255 16.6601 14.2 17.9855 14.2ZM38.3855 21.6C39.711 21.6 40.7855 20.5255 40.7855 19.2C40.7855 17.8745 39.711 16.8 38.3855 16.8C37.0601 16.8 35.9855 17.8745 35.9855 19.2C35.9855 20.5255 37.0601 21.6 38.3855 21.6Z" fill="#F43F5E" fill-rule="evenodd"></path>
<path clip-rule="evenodd" d="M71.7381 11.4027V11.2852C72.5997 10.8544 73.4613 10.1104 73.4613 8.64206C73.4613 6.52754 71.7183 5.25488 69.3105 5.25488C66.8433 5.25488 65.0811 6.60584 65.0811 8.68118C65.0811 10.0909 65.9037 10.8544 66.8043 11.2852V11.4027C65.8059 11.7551 64.6113 12.8124 64.6113 14.5744C64.6113 16.7086 66.3735 18.1966 69.2907 18.1966C72.2079 18.1966 73.9113 16.7086 73.9113 14.5744C73.9113 12.8124 72.7365 11.7747 71.7381 11.4027ZM69.2907 7.05614C70.2699 7.05614 70.9941 7.68266 70.9941 8.73992C70.9941 9.79718 70.2501 10.4238 69.2907 10.4238C68.3313 10.4238 67.5285 9.79718 67.5285 8.73992C67.5285 7.6631 68.2923 7.05614 69.2907 7.05614ZM69.2907 16.317C68.1549 16.317 67.2351 15.5926 67.2351 14.3591C67.2351 13.2431 67.9983 12.4012 69.2709 12.4012C70.5243 12.4012 71.2881 13.2235 71.2881 14.3983C71.2881 15.5926 70.4067 16.317 69.2907 16.317ZM52.7871 18.0004H55.2933V12.6945C55.2933 10.952 56.3505 10.1884 57.5448 10.1884C58.7195 10.1884 59.6398 10.9715 59.6398 12.577V18.0004H62.1456V12.068C62.1456 9.50314 60.6576 8.01514 58.328 8.01514C56.8596 8.01514 56.0372 8.60248 55.4498 9.36604H55.2933L55.0779 8.21092H52.7871V18.0004ZM78.9632 18.0004H76.457V8.21092H78.7478L78.9632 9.36604H79.1198C79.7072 8.60248 80.5298 8.01514 81.998 8.01514C84.3278 8.01514 85.8158 9.50314 85.8158 12.068V18.0004H83.3096V12.577C83.3096 10.9715 82.3898 10.1884 81.215 10.1884C80.0204 10.1884 78.9632 10.952 78.9632 12.6945V18.0004Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</a>

<nav className="hidden lg:flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1" href="#">Product <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1" href="#">Use cases <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1" href="#">Docs <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-1" href="#">Community <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Enterprise</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-xs text-zinc-300" href="#">
<iconify-icon icon="solar:star-linear"></iconify-icon> GitHub 176k
                </a>
<a className="hidden sm:block text-sm text-zinc-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="px-4 py-2 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-rose-500 hover:opacity-90 transition-opacity" href="#">
                    Get Started
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
<span className="text-gradient-violet">Flexible AI workflow automation</span><br/>
<span className="text-gradient-orange">for technical teams</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
                    Build with the precision of code or the speed of drag-n-drop. Host with on-prem control or in-the-cloud convenience. n8n gives you more freedom to implement multi-step AI agents and integrate apps than any other tool.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-rose-500 hover:opacity-90 transition-opacity shadow-[0_0_30px_-5px_rgba(249,115,22,0.4)]" href="#">
                        Get started for free
                    </a>
<a className="w-full sm:w-auto px-6 py-3 text-sm font-medium rounded-lg text-white glass-panel hover:bg-white/5 transition-colors" href="#">
                        Talk to sales
                    </a>
</div>

<div className="mt-20 max-w-5xl mx-auto relative rounded-2xl border border-white/10 bg-neutral-900/50 shadow-2xl overflow-hidden p-2">

<div className="flex gap-2 p-1 bg-black/40 rounded-xl overflow-x-auto no-scrollbar border border-white/5 mb-2">
<button className="px-4 py-3 rounded-lg bg-white/10 text-white text-sm text-left min-w-[200px] border border-purple-500/30 flex-shrink-0">
<span className="block text-zinc-400 mb-1">IT Ops can</span>
<span className="flex items-center gap-1 font-medium"><iconify-icon className="text-orange-400" icon="solar:bolt-linear"></iconify-icon> On-board new employees</span>
</button>
<button className="px-4 py-3 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white text-sm text-left min-w-[200px] transition-colors flex-shrink-0">
<span className="block mb-1">Sec Ops can</span>
<span className="flex items-center gap-1 font-medium"><iconify-icon className="text-orange-400" icon="solar:bolt-linear"></iconify-icon> Enrich security tickets</span>
</button>
<button className="px-4 py-3 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white text-sm text-left min-w-[200px] transition-colors flex-shrink-0">
<span className="block mb-1">Dev Ops can</span>
<span className="flex items-center gap-1 font-medium"><iconify-icon className="text-orange-400" icon="solar:bolt-linear"></iconify-icon> NLP to API calls</span>
</button>
<button className="px-4 py-3 rounded-lg text-zinc-400 hover:bg-white/5 hover:text-white text-sm text-left min-w-[200px] transition-colors flex-shrink-0">
<span className="block mb-1">Sales can</span>
<span className="flex items-center gap-1 font-medium"><iconify-icon className="text-orange-400" icon="solar:bolt-linear"></iconify-icon> Insights from reviews</span>
</button>
</div>

<div className="w-full aspect-[16/9] md:aspect-[21/9] bg-neutral-950 rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="flex items-center gap-4 z-10">
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
<iconify-icon className="text-2xl text-purple-400" icon="solar:webhook-linear"></iconify-icon>
</div>
<div className="w-16 h-[2px] bg-gradient-to-r from-purple-500/50 to-orange-500/50 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-orange-400"></div>
</div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.2)]">
<iconify-icon className="text-2xl text-orange-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="w-16 h-[2px] bg-gradient-to-r from-orange-500/50 to-emerald-500/50 relative hidden sm:block">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400"></div>
</div>
<div className="w-16 h-16 rounded-xl glass-panel items-center justify-center border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] hidden sm:flex">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:database-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-sm text-zinc-500 mb-8">The world's most popular workflow automation platform for technical teams including</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
<img alt="Dedatech" className="h-6 object-contain grayscale hover:grayscale-0 transition-all" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/re_dedatech_18e7e6253b.svg"/>
<img alt="Wayfair" className="h-6 object-contain grayscale hover:grayscale-0 transition-all" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/wayfair_a7aacce828.svg"/>
<img alt="Unbabel" className="h-6 object-contain grayscale hover:grayscale-0 transition-all" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/unbabel_1392f8b8ac_cca31eda86.svg"/>
<img alt="Microsoft" className="h-6 object-contain grayscale hover:grayscale-0 transition-all" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/microsoft_a60b0da7d8.svg"/>
<img alt="Zendesk" className="h-6 object-contain grayscale hover:grayscale-0 transition-all" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/zendesk_136788a158_6d4c59b139.svg"/>
<img alt="Paddle" className="h-6 object-contain grayscale hover:grayscale-0 transition-all" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/paddle_e74541f6b3_40953a0f7f.svg"/>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
<div className="glass-panel p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl text-yellow-500" icon="solar:star-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">Top 50 Github.</div>
<div className="text-xs text-zinc-400">176.3k stars</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl text-purple-500" icon="solar:medal-star-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">4.9/5 stars on G2.</div>
<div className="text-xs text-zinc-400">"A solid tool"</div>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-white/10">
<iconify-icon className="text-xl text-orange-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white font-medium">200k+ members.</div>
<div className="text-xs text-zinc-400">Active community</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                    Plug AI into your own data &amp; <br/>
<span className="text-gradient-orange">over 500 integrations</span>
</h2>
</div>
<div className="relative flex flex-col gap-4 marquee-mask">

<div className="flex overflow-hidden">
<div className="animate-marquee-left gap-4 pr-4">

<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Asana" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Active Campaign" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Outlook" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Airtable" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="MySQL" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a05be2624ab9ba447bb_my_Sql_svg_d9740ad4f9.png"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Pinecone" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a101c0f1368d96e0b4c_vector_Store_Pinecone_svg_53b9355d44.png"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Google Sheets" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729c77b48f5c03da73d_Group_2_58ad425d58.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Postmark" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72aedd8d90bd4f8139f_postmark_Trigger_png_77bacccff7.svg"/></div>

<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Asana" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Active Campaign" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Outlook" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Airtable" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="MySQL" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a05be2624ab9ba447bb_my_Sql_svg_d9740ad4f9.png"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Pinecone" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a101c0f1368d96e0b4c_vector_Store_Pinecone_svg_53b9355d44.png"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Google Sheets" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729c77b48f5c03da73d_Group_2_58ad425d58.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Postmark" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72aedd8d90bd4f8139f_postmark_Trigger_png_77bacccff7.svg"/></div>
</div>
</div>

<div className="flex overflow-hidden">
<div className="animate-marquee-right gap-4 pr-4">
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Bubble" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72d9607e61eeec9add2_bubble_svg_eb8418417c.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="PostHog" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72a5d5287c0e71f0e6d_post_Hog_svg_0e5a29cd64.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Notion" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72aa7e91197f74da789_Vector_1_d7b4c2b619.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Mailchimp" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Excel" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729b8346ed0eceba7d8_microsoft_Excel_svg_dc455568ae.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Discord" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729485addcc28ecfa78_Icon_44e8e36907.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="AWS Bedrock" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729d7214df077bd1a8e_lm_Chat_Aws_Bedrock_svg_1ae33dfeb5.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Slack" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72a355f9c89eb0fe0a0_Vector_2_41fc98a2e5.svg"/></div>

<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Bubble" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72d9607e61eeec9add2_bubble_svg_eb8418417c.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="PostHog" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72a5d5287c0e71f0e6d_post_Hog_svg_0e5a29cd64.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Notion" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72aa7e91197f74da789_Vector_1_d7b4c2b619.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Mailchimp" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Excel" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729b8346ed0eceba7d8_microsoft_Excel_svg_dc455568ae.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Discord" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729485addcc28ecfa78_Icon_44e8e36907.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="AWS Bedrock" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729d7214df077bd1a8e_lm_Chat_Aws_Bedrock_svg_1ae33dfeb5.svg"/></div>
<div className="w-16 h-16 rounded-xl glass-panel flex items-center justify-center p-3 hover:scale-110 transition-transform"><img alt="Slack" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72a355f9c89eb0fe0a0_Vector_2_41fc98a2e5.svg"/></div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg text-white border border-white/10 hover:bg-white/5 transition-colors" href="#">
                    Browse all integrations
                </a>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                        The fast way to actually <br/>
<span className="text-gradient-orange">get AI working in your business</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 card-glow-wrapper rounded-2xl">
<div className="h-full bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 h-full">
<div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
<h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Build multi-step agents calling custom tools</h3>
<p className="text-zinc-400 mb-8 font-light">Create agentic systems on a single screen. Integrate any LLM into your workflows as fast as you can drag-n-drop.</p>
<a className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-white border border-white/10 hover:bg-white/5 transition-colors w-fit" href="#">
                                        Explore AI <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative order-1 md:order-2 bg-neutral-950/50 flex items-center justify-center p-8 border-b md:border-b-0 md:border-l border-white/5">
<img alt="Agents" className="w-full h-auto object-contain" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/teams_of_agent_e1f7b47c2f.png"/>

<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none opacity-80">
<div className="px-3 py-1 rounded-full glass-panel text-xs text-white flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Update Detected
                                        </div>
<div className="px-3 py-1 rounded-full glass-panel text-xs text-white flex items-center gap-2">
<iconify-icon className="text-purple-400" icon="solar:code-square-linear"></iconify-icon> Running Custom Unit Testing
                                        </div>
<div className="px-3 py-1 rounded-full glass-panel text-xs text-white flex items-center gap-2">
<iconify-icon className="text-rose-400" icon="solar:close-circle-linear"></iconify-icon> Update Rolled Back Automatically
                                        </div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 card-glow-wrapper rounded-2xl">
<div className="h-full bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden relative p-8 md:p-10 flex flex-col">
<div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
<h3 className="text-2xl font-semibold text-white mb-4 tracking-tight relative z-10">Chat with your own data</h3>
<p className="text-zinc-400 mb-8 font-light relative z-10">Use Slack, Teams, SMS, voice, or our embedded chat interface to get accurate answers from your data, create tasks, and complete workflows.</p>
<div className="mt-auto flex flex-col gap-3 relative z-10">
<div className="self-start glass-panel px-3 py-2 rounded-lg text-sm text-zinc-300 max-w-[85%] border-l-2 border-purple-500">
                                    Who held meetings with SpaceX last week?
                                </div>
<div className="self-end bg-neutral-800 px-3 py-2 rounded-lg text-sm text-zinc-300 max-w-[85%] border border-white/5">
                                    On Wednesday, Joe updated the status to "won" in Salesforce.
                                </div>
<div className="self-start glass-panel px-3 py-2 rounded-lg text-sm text-zinc-300 max-w-[85%] border-l-2 border-purple-500">
                                    Create a task in Asana...
                                </div>
</div>
</div>
</div>

<div className="lg:col-span-12 card-glow-wrapper rounded-2xl mt-6">
<div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden p-8 md:p-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight">Code when you need it, UI when you don't</h2>
<p className="text-zinc-400 mb-8 font-light text-lg">Other tools limit you to either a visual building experience, or code. With n8n, you get the best of both worlds.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-2xl text-orange-500 mt-1" icon="solar:programming-linear"></iconify-icon>
<div>
<span className="text-white font-medium block">Write JavaScript or Python</span>
<span className="text-zinc-400 text-sm">you can always fall back to code</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-2xl text-purple-500 mt-1" icon="solar:box-linear"></iconify-icon>
<div>
<span className="text-white font-medium block">Add libraries</span>
<span className="text-zinc-400 text-sm">from npm or Python for even more power</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-2xl text-rose-500 mt-1" icon="solar:copy-linear"></iconify-icon>
<div>
<span className="text-white font-medium block">Paste cURL requests</span>
<span className="text-zinc-400 text-sm">directly into your workflow</span>
</div>
</li>
</ul>
</div>
<div className="order-1 lg:order-2">
<img alt="Code Interface" className="w-full rounded-xl border border-white/10 shadow-2xl" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;h=500'; this.classList.add('opacity-50', 'grayscale')" src="/images/code.webp"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-neutral-950">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[url('/images/server.png')] bg-contain bg-no-repeat opacity-10 pointer-events-none mix-blend-luminosity"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-white mb-6 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:shield-check-linear"></iconify-icon> Enterprise-ready
                        </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                            Secure. Reliable. <span className="text-gradient-violet">Collaborative.</span>
</h2>
<p className="text-zinc-400 mb-10 text-lg font-light">
                            Remove inefficiencies across your org by rolling out automation as reliably as you deploy code. Run n8n air-gapped on your servers or on our secure cloud-based solution.
                        </p>
<div className="flex gap-4 mb-12">
<a className="px-6 py-3 text-sm font-medium rounded-lg text-white border border-white/10 hover:bg-white/5 transition-colors" href="#">
                                Explore Enterprise
                            </a>
</div>
<div className="space-y-8">
<div className="flex gap-6">
<h3 className="w-1/3 text-white font-medium">Security</h3>
<p className="w-2/3 text-sm text-zinc-400 leading-relaxed">Fully on-prem option, SSO SAML, and LDAP, encrypted secret stores, version control, advanced RBAC permissions.</p>
</div>
<div className="flex gap-6">
<h3 className="w-1/3 text-white font-medium">Performance</h3>
<p className="w-2/3 text-sm text-zinc-400 leading-relaxed">Audit logs &amp; log streaming to 3rd party, workflow history, custom variables, external storage.</p>
</div>
<div className="flex gap-6">
<h3 className="w-1/3 text-white font-medium">Collaboration</h3>
<p className="w-2/3 text-sm text-zinc-400 leading-relaxed">Git Control, isolated environments, multi-user workflows.</p>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="card-glow-wrapper rounded-2xl">
<div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
<img alt="Delivery Hero" className="h-8 object-contain mb-8 filter brightness-0 invert opacity-70" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/cs_delivery_hero_745bb7ac83.svg"/>
<p className="text-xl text-white font-light mb-8">How Delivery Hero saved <span className="font-medium">200 hours each month</span> with a single ITOps workflow</p>
<div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="Author" className="w-full h-full object-cover" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/E02996_YDSAK_U4_TEE_6_AAW_8f94f206d022_512_9956afea32_5cf58d57e3.jpeg"/>
</div>
<div>
<div className="text-sm text-white font-medium">Dennis Zahrt</div>
<div className="text-xs text-zinc-500">Director of Global IT</div>
</div>
</div>
</div>
</div>
<div className="card-glow-wrapper rounded-2xl">
<div className="bg-neutral-900 border border-white/10 rounded-2xl p-8 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
<img alt="Stepstone" className="h-8 object-contain mb-8 filter brightness-0 invert opacity-70" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/the_stepstone_group_6dccc5eb32.webp"/>
<p className="text-xl text-white font-light mb-8">How StepStone finishes <span className="font-medium">2 weeks' work in only 2 hours</span> with n8n workflows</p>
<div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center overflow-hidden">
<img alt="Author" className="w-full h-full object-cover" src="https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Luka_Pilic_Stepstone_443e0351bf_4dbe30dafe.jpeg"/>
</div>
<div>
<div className="text-sm text-white font-medium">Luka Pilic</div>
<div className="text-xs text-zinc-500">Tech Lead</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/20 via-neutral-950 to-neutral-950 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
<div className="glass-panel p-12 rounded-3xl border border-white/10 shadow-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        There's nothing you can't automate with n8n
                    </h2>
<p className="text-lg text-zinc-400 mb-10 font-light">
                        Our customer's words, not ours.<br/>
                        Skeptical? <span className="text-white font-medium">Try it out</span>, and see for yourself.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                        Start building
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-neutral-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-2">
<a className="block mb-6" href="/">
<span className="text-xl font-bold tracking-tight text-white">n8n</span>
</a>
<p className="text-sm text-zinc-500 mb-6 max-w-xs">Automate without limits.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:clapperboard-play-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:chat-square-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Overview</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Templates</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">AI</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Case Studies</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2" href="#">Careers <span className="px-1.5 py-0.5 rounded-full bg-white/10 text-[10px] text-white">Hiring</span></a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-zinc-600 flex gap-4">
<a className="hover:text-zinc-400 transition-colors" href="#">Imprint</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Security</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
</div>
<p className="text-sm text-zinc-600">© 2026 n8n | All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
