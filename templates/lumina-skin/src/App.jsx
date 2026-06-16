import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Set current year in footer
    document.getElementById('year-span').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-emerald-900/50 bg-[#1b2320]/90 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
<div className="flex bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/296289e8-d1b7-46fb-a6d8-f52a9f0e4569_320w.png)] bg-cover invert gap-x-2 gap-y-2 items-center">
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-emerald-200/80">
<a className="hover:text-emerald-50 transition-colors" href="#">Rituals</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Ingredients</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Results</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Stories</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-800/80 px-3.5 py-1.5 text-xs font-medium text-emerald-100 hover:border-emerald-500 hover:bg-emerald-900/30 transition-colors">
<span>Sign in</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-emerald-300 hover:shadow-sm transition-colors">
<span>Shop ritual</span>
<svg className="w-4 h-4" data-icon-set="mingcute" data-mingcute="arrow-right-line" height="1em" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="m14.707 5.636l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l3.95-3.95H4a1 1 0 1 1 0-2h13.243l-3.95-3.95a1 1 0 1 1 1.414-1.414" fill="currentColor"></path></g></svg>
</button>
</div>
</div>
</header>
<main className="flex-1 w-full">
<div className="sm:px-6 lg:px-8 lg:py-16 flex flex-col w-full max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 justify-center">

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10 lg:mb-12">
<div className="">
<h1 className="leading-tight sm:text-5xl lg:text-8xl text-4xl text-emerald-50 tracking-tight font-playfair">
              Give Your Skin
            </h1>
<h2 className="leading-tight sm:text-4xl lg:text-8xl text-3xl font-medium italic text-emerald-300 tracking-tight font-playfair mt-2">
              the calm it deserves
            </h2>
<p className="mt-4 max-w-xl text-sm sm:text-base text-emerald-100/80">
              A three-step ritual for sensitive, overworked skin. Clinically measured to reduce redness,
              strengthen your barrier, and bring back a quiet, lasting glow.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-5 py-2.5 text-sm font-medium hover:bg-emerald-300 hover:shadow-sm transition-colors">
<span>Start your ritual</span>
<svg className="w-4 h-4" data-icon-set="mingcute" data-mingcute="sparkles-line" height="1em" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M5.827 13.004a.19.19 0 0 1 .346 0l.17.371a8.7 8.7 0 0 0 3.3 3.638l.265.155a.181.181 0 0 1 0 .316l-.265.155a8.7 8.7 0 0 0-3.3 3.638l-.17.372a.19.19 0 0 1-.346 0l-.17-.372a8.7 8.7 0 0 0-3.3-3.638l-.265-.155a.181.181 0 0 1 0-.316l.265-.155a8.7 8.7 0 0 0 3.47-4.01Zm.17 3.486l-.175.206q-.187.21-.385.41l-.2.198l-.027.024l.227.223l.195.203l.19.208l.175.205l.175-.205q.187-.21.385-.411l.227-.223l-.027-.024q-.203-.195-.395-.4l-.19-.208zm8.476-13.76a.331.331 0 0 1 .605 0l.15.336l.148.314l.195.39l.226.42l.112.196a15.2 15.2 0 0 0 3.895 4.437l.427.317a15 15 0 0 0 1.383.878a.317.317 0 0 1 0 .553a15 15 0 0 0-1.082.67l-.36.251a15.2 15.2 0 0 0-4.263 4.71l-.131.232a15 15 0 0 0-.402.775l-.147.314l-.15.336a.331.331 0 0 1-.606 0l-.15-.336l-.148-.314l-.196-.39l-.225-.42l-.113-.196a15.2 15.2 0 0 0-3.894-4.437l-.428-.316a15 15 0 0 0-1.382-.88a.317.317 0 0 1 0-.552a15 15 0 0 0 1.082-.669l.36-.252a15.2 15.2 0 0 0 4.262-4.71l.132-.232q.211-.38.402-.775l.147-.314zm.302 3.615a17.2 17.2 0 0 1-3.663 3.95a17.2 17.2 0 0 1 3.663 3.95a17.2 17.2 0 0 1 3.663-3.95a17.2 17.2 0 0 1-3.663-3.95" fill="currentColor"></path></g></svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-800/80 bg-[#212b26] px-4 py-2 text-sm font-medium text-emerald-50 hover:border-emerald-500 hover:bg-emerald-950/50 transition-colors">
<svg className="w-4 h-4 text-emerald-300" data-icon-set="mingcute" data-mingcute="play-circle-line" height="1em" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M8.964 8.65a1.192 1.192 0 0 1 1.654-.953l.325.143l.44.202l.349.169l.39.196l.43.223l.462.251l.494.28l.249.145l.469.282l.428.268l.564.368l.464.318l.455.328l.083.061c.635.477.64 1.429.001 1.909l-.283.209l-.393.276l-.496.335l-.387.25l-.43.27l-.473.283q-.123.073-.252.147l-.498.282l-.466.253l-.43.224l-.39.196l-.505.242l-.4.181l-.202.088a1.192 1.192 0 0 1-1.651-.954l-.054-.499l-.03-.334l-.042-.599l-.024-.46l-.018-.506l-.01-.549v-.579l.01-.548l.018-.506l.024-.46l.042-.599l.071-.73zm1.884 1.355l-.027.467l-.021.525l-.012.58v.618l.012.58l.02.525l.028.467l.416-.21l.226-.118l.488-.262l.53-.299l.522-.309l.242-.148l.444-.28l.39-.255l-.392-.257l-.444-.281l-.496-.3a30 30 0 0 0-.793-.453l-.488-.262l-.442-.227z" fill="currentColor"></path></g></svg>
<span>Watch 60s overview</span>
</button>
</div>
</div>

<div className="flex items-center gap-4 self-start md:self-end">
<div className="flex items-center gap-1 text-amber-400 text-sm">
<svg className="w-4 h-4" data-icon-set="mingcute" data-mingcute="star-fill" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path></g></svg>
<svg className="w-4 h-4" data-icon-set="mingcute" data-mingcute="star-fill" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path></g></svg>
<svg className="w-4 h-4" data-icon-set="mingcute" data-mingcute="star-fill" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path></g></svg>
<svg className="w-4 h-4" data-icon-set="mingcute" data-mingcute="star-fill" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path></g></svg>
<svg className="w-4 h-4" data-icon-set="mingcute" data-mingcute="star-fill" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path></g></svg>
</div>
<div className="flex flex-col items-start">
<p className="text-sm font-medium text-emerald-50">
                4.9<span className="text-xs text-emerald-300/80 ml-1">(2,304 reviews)</span>
</p>
<div className="-space-x-2 flex mt-1">
<img alt="Customer 1" className="w-7 h-7 object-cover border-[#1b2320] border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffc24c17-d47b-4b9b-972e-cd31b73ab395_320w.webp"/>
<img alt="Customer 2" className="w-7 h-7 object-cover border-[#1b2320] border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2cdd22f-4895-4c8c-b054-f19b899606b1_320w.webp"/>
<img alt="Customer 3" className="w-7 h-7 object-cover border-[#1b2320] border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f465f35-2fc5-42c2-977e-54a9217f7ce2_320w.webp"/>
</div>
</div>
</div>
</div>

<section className="grid gap-6 lg:gap-7 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] gap-x-6 gap-y-6 items-center">

<article className="overflow-hidden bg-[#111715] rounded-3xl relative shadow-sm border border-emerald-900/60">
<img alt="Close-up portrait of a woman with glowing skin" className="w-full h-[680px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d30ad3a-ffbc-427c-8120-a79ae8b3da6d_1600w.webp"/>

<div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
<div className="bg-[#1f2924]/95 backdrop-blur-sm rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-md max-w-xs border border-emerald-900/70">
<div className="flex items-start gap-3">
<div className="flex flex-none text-emerald-200 bg-emerald-900/50 w-9 h-9 rounded-full items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-set="mingcute" data-mingcute="newdot-line" height="16" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a1 1 0 1 0-2 0v6H5V5h6a1 1 0 1 0 0-2zm11 3.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M17.5 3a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7" fill="#bbf7d0"></path></g></svg>
</div>
<div className="">
<p className="text-sm font-medium text-emerald-50">Clinically Calm</p>
<p className="text-sm font-normal italic text-emerald-100/80">Irritation down by 87% in 4 weeks.</p>
<p className="mt-1 text-xs text-emerald-200/70">
                      Tested on 120 sensitive-skin participants under dermatological supervision.
                    </p>
</div>
</div>
</div>
</div>
</article>

<div className="flex flex-col gap-6 lg:gap-7 h-full">

<article className="sm:p-6 lg:p-7 flex flex-col sm:flex-row gap-6 bg-[#232e29] border-emerald-900/70 border rounded-3xl pt-5 pr-5 pb-5 pl-5 gap-x-6 gap-y-6 items-stretch justify-between">
<div className="flex-1 flex flex-col justify-between">
<div className="flex items-center justify-between mb-4">
<div className="flex text-emerald-200 bg-emerald-900/60 w-9 h-9 rounded-full items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-set="mingcute" data-mingcute="recycle-line" height="1em" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(190, 242, 210)'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path d="M18.763 14.214a1 1 0 0 1 1.302.268l.064.098L21.526 17c.745 1.29-.132 2.893-1.585 2.995l-.147.005h-6.38l.415.414a1 1 0 0 1-1.32 1.498l-.095-.084l-2.115-2.115a1 1 0 0 1-.194-.267a1 1 0 0 1 .121-1.08l.036-.04l2.152-2.154a1 1 0 0 1 1.498 1.32l-.083.094l-.415.414h6.38l-1.397-2.42a1 1 0 0 1 .366-1.366M8.703 9.625l.777 2.898a1 1 0 1 1-1.932.518l-.152-.566L4.206 18H7a1 1 0 1 1 0 2H4.206c-1.54 0-2.502-1.667-1.732-3l3.19-5.525l-.566.151a1 1 0 0 1-.517-1.932l2.897-.776a1 1 0 0 1 1.225.707m4.942-6.263l.087.138l3.19 5.525l.152-.566a1 1 0 0 1 1.955.404l-.023.114l-.777 2.898a.996.996 0 0 1-1.099.732l-.125-.025l-2.898-.776a1 1 0 0 1 .403-1.956l.114.024l.566.151L12 4.5l-1.397 2.42a1 1 0 0 1-1.785-.896l.053-.104l1.397-2.42c.715-1.238 2.425-1.327 3.282-.265z" fill="currentColor"></path></g></svg>
</div>
<p className="text-xs font-medium text-emerald-100 bg-emerald-900/60 px-2.5 py-1 rounded-full">
                    98% less plastic
                  </p>
</div>
<div className="">
<h3 className="font-playfair font-semibold tracking-tight text-xl text-emerald-50">
                    Refillable Glass
                  </h3>
<p className="mt-1 font-playfair font-medium tracking-tight text-lg text-emerald-100 italic">
                    Designed for the long term
                  </p>
<p className="mt-3 text-sm text-emerald-100/80 max-w-sm">
                    Each bottle is crafted from fully recyclable glass and ships in compostable mailers to keep your ritual gentle on the planet.
                  </p>
</div>
<div className="mt-4 flex items-center gap-3 text-xs text-emerald-200/80">
<div className="flex items-center gap-1">
<iconify-icon className="w-3.5 h-3.5 text-emerald-300" icon="mingcute:water-percent-line" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Refill program saves 1.3kg CO₂ / year</span>
</div>
</div>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-28 sm:w-32 lg:w-36">
<div className="absolute -top-3 -left-2 w-10 h-10 rounded-full bg-emerald-500/40 blur-2xl"></div>
<img alt="Serum bottle" className="w-full h-auto object-contain rounded-2xl relative drop-shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/097cb637-6762-467b-a1d3-db0d530693f4_320w.jpg"/>
</div>
</div>
</article>

<article className="bg-[#2f3b30] rounded-3xl px-5 py-6 sm:px-7 sm:py-7 lg:px-8 lg:py-8 text-emerald-50 flex flex-col sm:flex-row gap-6 items-stretch overflow-hidden border border-emerald-900/70">
<div className="flex-1">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-200 mb-2">
                  BOTANICAL BLEND
                </p>
<h3 className="font-playfair text-2xl sm:text-[1.6rem] font-semibold tracking-tight text-emerald-50">
                  99% Origin from Plants
                </h3>
<p className="mt-1 font-playfair text-lg font-medium tracking-tight text-emerald-100/90 italic">
                  100% peace of mind
                </p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-200" data-icon-set="mingcute" data-mingcute="leaf-line" height="1em" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path d="M4.712 18.141c-1.537-1.69-1.957-3.828-1.77-5.738c.206-2.107 1.167-4.128 2.418-5.171c1.672-1.393 3.428-1.965 4.952-2.245a26 26 0 0 1 2.24-.283c.404-.038.813-.076 1.206-.174c.828-.207 1.645-.543 2.318-1.077c.308-.245.62-.493 1.035-.447a1 1 0 0 1 .735.46c3.2 5.067 2.717 10.446.044 13.834c-1.335 1.691-3.21 2.871-5.397 3.22c-1.908.303-3.993-.036-6.094-1.136a11 11 0 0 0-.41 1.758a1 1 0 1 1-1.98-.283c.124-.865.36-1.786.703-2.718m5.96-11.187c.704-.129 1.365-.191 2.007-.254c.524-.05 1.052-.102 1.564-.23a8.9 8.9 0 0 0 2.45-1.006c2.178 4.117 1.57 8.134-.373 10.598c-1.048 1.328-2.489 2.22-4.14 2.482c-1.483.236-3.2-.024-5.03-1.026c1.112-2.267 2.93-4.44 5.297-5.623a1 1 0 1 0-.894-1.79c-2.608 1.304-4.606 3.559-5.905 5.964c-.641-1.05-.833-2.271-.715-3.472c.169-1.728.96-3.205 1.707-3.829c1.328-1.107 2.728-1.574 4.033-1.814Z" fill="currentColor"></path></g></svg>
<span>No synthetic fragrance or dyes</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="w-4 h-4 text-emerald-200" icon="mingcute:sprout-line" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Cold-pressed seed oils and adaptogens</span>
</li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-emerald-200" data-icon-set="mingcute" data-mingcute="hand-heart-line" height="1em" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path><path d="m11.253 11.79l.226.05l3.716.928c1.171.293 1.76 1.528 1.39 2.64l.32-.22l.646-.462c.325-.23.657-.448 1.002-.62c1.536-.768 3.334.291 3.442 1.971l.005.16v.055c0 .697-.3 1.357-.82 1.814l-.147.12l-3.07 2.302c-.299.224-.636.39-.994.49l-.218.052l-3.21.642a5 5 0 0 1-2.964-.314l-.252-.117l-2.35-1.175a1 1 0 0 0-.331-.1L7.528 20h-.796a2 2 0 0 1-1.563.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-4a2 2 0 0 1 1.85-1.994L4 13h1c.484 0 .928.172 1.274.459l.125.112l1.99-1.243a4 4 0 0 1 2.636-.575zm-1.804 2.234L7 15.554V18h.528a3 3 0 0 1 1.342.317l2.35 1.175a3 3 0 0 0 1.93.258l3.209-.642a1 1 0 0 0 .404-.18l3.07-2.303c.128-.096.167-.237.167-.389a.382.382 0 0 0-.513-.359l-2.428 1.62a3 3 0 0 1-1.665.503H12v-2h1.559a1 1 0 0 0 .948-.684l.203-.608l-3.716-.928a2 2 0 0 0-1.545.244M5 15H4v4h1zM16 3.47c1.03-.644 2.212-.593 3.166-.037c1.112.648 1.866 1.942 1.833 3.422c-.041 1.835-1.41 3.344-3.438 4.6l-.398.239c-.358.212-.74.418-1.163.418s-.805-.206-1.163-.418l-.398-.24C12.41 10.198 11.042 8.69 11 6.854c-.033-1.48.721-2.774 1.833-3.422c.954-.556 2.135-.607 3.166.037Zm2.159 1.691c-.379-.22-.83-.246-1.278.136l-.206.19a1.084 1.084 0 0 1-1.35 0l-.206-.19c-.449-.382-.9-.357-1.278-.136c-.461.269-.858.87-.84 1.65c.017.778.618 1.78 2.468 2.929l.238.144l.293.171l.293-.17C18.33 8.673 18.981 7.62 19 6.808c.018-.779-.379-1.38-.84-1.649Z" fill="currentColor"></path></g></svg>
<span>Certified cruelty-free and ethically harvested</span>
</li>
</ul>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-full max-w-xs">
<div className="absolute -right-6 -bottom-10 w-32 h-32 rounded-full bg-emerald-700/40 blur-3xl"></div>
<img alt="Green botanical leaf" className="w-full h-full object-cover rounded-2xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c396622e-2acf-40fd-a5de-4e0448603187_800w.jpg"/>
</div>
</div>
</article>
</div>
</section>
</div>

<section className="text-stone-900 bg-[#f4eadf] w-full border-stone-200/80 border-t">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
<div className="max-w-xl">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-stone-500 mb-3">
                THE EVENING RITUAL
              </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight text-stone-900">
                Let your skin
                <span className="italic text-stone-700">unwind for the night</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-stone-700">
                Three quiet steps, five minutes, and a texture your skin will look forward to.
                Layer each formula to reset stressed skin and wake up visibly calmer.
              </p>
</div>
<div className="flex flex-wrap gap-4 text-xs sm:text-sm text-stone-700">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.7rem] font-semibold text-[#f4eadf]">1</span>
<span>Cleanse</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.7rem] font-semibold text-[#f4eadf]">2</span>
<span>Treat</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.7rem] font-semibold text-[#f4eadf]">3</span>
<span>Seal</span>
</div>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3">

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-6 sm:px-6 sm:py-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2 text-xs font-medium text-stone-600">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.75rem] font-semibold text-[#f4eadf]">
                      01
                    </span>
<span className="tracking-[0.18em] uppercase">Cleanse</span>
</div>
<span className="text-[0.7rem] font-medium px-2 py-1 rounded-full border border-stone-300 text-stone-700 bg-white/70">
                    pH 5.5
                  </span>
</div>
<h3 className="font-playfair text-xl font-semibold tracking-tight text-stone-900">
                  Cloud Melt Cleansing Gel
                </h3>
<p className="mt-3 text-sm text-stone-700">
                  A cushiony gel that melts away SPF and city air without stripping.
                  Ceramides and oat protein keep skin soft and quietly hydrated.
                </p>
<ul className="mt-4 space-y-2 text-xs sm:text-sm text-stone-700">
<li className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-stone-800"></span>
                    Removes makeup in one rinse
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-stone-800"></span>
                    Ophthalmologist tested for eye area
                  </li>
</ul>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-stone-700">
<span className="font-semibold">$29</span>
<span className="text-stone-500">• 120 ml</span>
</div>
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-900 group-hover:underline underline-offset-4">
<span>Add to ritual</span>
<svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 0 1-1.414-1.414L16.586 12H5a1 1 0 1 1 0-2h11.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-6 sm:px-6 sm:py-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2 text-xs font-medium text-stone-600">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.75rem] font-semibold text-[#f4eadf]">
                      02
                    </span>
<span className="tracking-[0.18em] uppercase">Treat</span>
</div>
<span className="text-[0.7rem] font-medium px-2 py-1 rounded-full border border-amber-300 text-amber-800 bg-amber-100/70">
                    Night-active
                  </span>
</div>
<h3 className="font-playfair text-xl font-semibold tracking-tight text-stone-900">
                  Lumina Barrier Serum
                </h3>
<p className="mt-3 text-sm text-stone-700">
                  A featherlight serum with calming algae and niacinamide to visibly ease redness
                  while supporting your skin’s barrier overnight.
                </p>
<ul className="mt-4 space-y-2 text-xs sm:text-sm text-stone-700">
<li className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-stone-800"></span>
                    10% glycerin for deep hydration
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-stone-800"></span>
                    3% niacinamide to even tone
                  </li>
</ul>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-stone-700">
<span className="font-semibold">$42</span>
<span className="text-stone-500">• 30 ml</span>
</div>
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-900 group-hover:underline underline-offset-4">
<span>Add to ritual</span>
<svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 0 1-1.414-1.414L16.586 12H5a1 1 0 1 1 0-2h11.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-6 sm:px-6 sm:py-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="">
<div className="flex items-center justify-between mb-4">
<div className="inline-flex items-center gap-2 text-xs font-medium text-stone-600">
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 text-[0.75rem] font-semibold text-[#f4eadf]">
                      03
                    </span>
<span className="tracking-[0.18em] uppercase">Seal</span>
</div>
<span className="text-[0.7rem] font-medium px-2 py-1 rounded-full border border-stone-300 text-stone-700 bg-white/70">
                    Rich but breathable
                  </span>
</div>
<h3 className="font-playfair text-xl font-semibold tracking-tight text-stone-900">
                  Velvet Lock Moisture Cream
                </h3>
<p className="mt-3 text-sm text-stone-700">
                  A soft, velvet-finish cream with squalane and shea that cocoons the skin,
                  helping to reduce transepidermal water loss as you sleep.
                </p>
<ul className="sm:text-sm text-xs text-stone-700 mt-4 space-y-2">
<li className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-stone-800"></span>
                    Ideal for sensitive and combination skin
                  </li>
<li className="flex items-center gap-2">
<span className="h-1 w-4 rounded-full bg-stone-800"></span>
                    Non-comedogenic, tested on reactive skin
                  </li>
</ul>
</div>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-stone-700">
<span className="font-semibold">$38</span>
<span className="text-stone-500">• 50 ml</span>
</div>
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-900 group-hover:underline underline-offset-4">
<span>Add to ritual</span>
<svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 0 1-1.414-1.414L16.586 12H5a1 1 0 1 1 0-2h11.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
</div>
</article>
</div>

<div className="mt-12 flex flex-col lg:flex-row gap-8 items-center">
<div className="w-full lg:w-1/2">
<div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-[#f7efe4]">
<div className="absolute inset-0 bg-gradient-to-tr from-stone-900/5 via-transparent to-amber-200/40 pointer-events-none"></div>
<img alt="Soft evening self-care moment" className="sm:h-72 lg:h-80 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e5380fe-71ef-461a-9057-bc8092cbffff_1600w.webp"/>
</div>
</div>
<div className="w-full lg:w-1/2">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-stone-500 mb-2">
                RESULTS YOU CAN FEEL
              </p>
<h3 className="font-playfair text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
                84% woke up with calmer-looking skin
              </h3>
<p className="mt-4 text-sm sm:text-base text-stone-700">
                In a four-week independent study, most participants reported visibly reduced redness,
                less tightness after cleansing, and a smoother canvas for morning SPF and makeup.
              </p>
<dl className="mt-5 grid grid-cols-2 gap-4 text-xs sm:text-sm">
<div className="">
<dt className="text-stone-500">Reduced visible redness</dt>
<dd className="text-stone-900 font-semibold mt-1">-31% after 2 weeks</dd>
</div>
<div className="">
<dt className="text-stone-500">Barrier strength</dt>
<dd className="text-stone-900 font-semibold mt-1">+27% hydration</dd>
</div>
</dl>
<button className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 text-[#f4eadf] px-5 py-2.5 text-xs sm:text-sm font-medium hover:bg-stone-800 transition-colors">
                Build my evening ritual
                <svg aria-hidden="true" className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 0 1-1.414-1.414L16.586 12H6a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
<p className="mt-2 text-[0.7rem] text-stone-500">
                52 participants with self-identified sensitive skin. Results are self-reported and may vary.
              </p>
</div>
</div>
</div>
</section>
<section className="text-emerald-50 bg-[#0b0f0e] w-full border-emerald-900/60 border-t">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 mb-10">
<div className="max-w-xl">
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.7rem] leading-tight tracking-tight">
          The Numbers
          <span className="italic text-emerald-300">behind quiet skin</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-emerald-100/80">
          A calm barrier shows up in the data first. These are the results our community sees
          after making the nightly ritual a habit.
        </p>
</div>
<div className="flex flex-col items-start gap-4 max-w-sm">
<p className="text-xs sm:text-sm text-emerald-200/80">
          Strategy, science, and consistency—your skin’s long-term support system, bottled.
        </p>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-4 py-2 text-xs sm:text-sm font-medium hover:bg-emerald-300 transition-colors">
          View full clinical report
          <svg aria-hidden="true" className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 0 1-1.414-1.414L16.586 12H6a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div className="grid gap-5 lg:gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">

<article className="rounded-3xl bg-emerald-300 text-emerald-950 px-6 py-7 sm:px-8 sm:py-9 shadow-sm border border-emerald-500/60 flex flex-col justify-between">
<div className="">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-900/70 mb-3">
            COMMUNITY
          </p>
<p className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            180k
          </p>
<p className="mt-1 text-sm sm:text-base text-emerald-950/80">
            Nightly rituals completed
          </p>
</div>
<p className="mt-5 text-xs sm:text-sm text-emerald-950/80 max-w-md">
          From first cleanse to final cream, over one hundred eighty thousand evening routines have been logged by our most consistent customers.
        </p>
</article>

<article className="rounded-3xl bg-[#0e1513] px-6 py-7 sm:px-7 sm:py-8 border border-emerald-900/70 flex flex-col justify-between">
<div>
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-400 mb-3">
            SKIN COMFORT
          </p>
<div className="flex items-baseline gap-1">
<p className="text-4xl sm:text-5xl font-semibold tracking-tight">
              93
            </p>
<span className="text-lg sm:text-xl font-medium tracking-tight">%</span>
</div>
<p className="mt-1 text-sm sm:text-base text-emerald-100/85">
            Less dryness reported
          </p>
</div>
<p className="mt-5 text-xs sm:text-sm text-emerald-200/80 max-w-xs">
          After 6 weeks, ninety-three percent of users noticed fewer dry patches and a softer, more even texture.
        </p>
</article>

<article className="rounded-3xl bg-[#111715] px-6 py-7 sm:px-7 sm:py-8 border border-emerald-900/70 flex flex-col justify-between">
<div className="">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
            ROUTINE LOYALTY
          </p>
<div className="flex items-baseline gap-1">
<p className="text-4xl sm:text-5xl font-semibold tracking-tight">
              27
            </p>
<span className="text-lg sm:text-xl font-medium tracking-tight">days</span>
</div>
<p className="mt-1 text-sm sm:text-base text-emerald-100/85">
            Average streak length
          </p>
</div>
<p className="mt-5 text-xs sm:text-sm text-emerald-200/80 max-w-xs">
          Most members stay with their ritual for at least twenty-seven consecutive nights before switching or adding new steps.
        </p>
</article>
</div>
</div>
</section><section className="text-stone-900 bg-[#f4eadf] w-full border-stone-200/80 border-t">
<div className="sm:px-6 lg:px-8 lg:py-20 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div className="">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-stone-500 mb-3">
          SHOP THE RITUAL
        </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight text-stone-900">
          Build a routine
          <span className="italic text-stone-700">that actually fits</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-stone-700 max-w-xl">
          Start with something new, or anchor your ritual with the formulas our community refuses to skip.
        </p>
</div>
<div className="flex flex-wrap gap-3 text-xs sm:text-sm">
<button className="inline-flex items-center gap-2 rounded-full bg-stone-900 text-[#f4eadf] px-4 py-2 font-medium hover:bg-stone-800 transition-colors">
          All products
          <svg aria-hidden="true" className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 0 1-1.414-1.414L16.586 12H6a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
<button className="inline-flex gap-2 hover:border-stone-500 hover:bg-stone-900/5 transition-colors font-medium text-stone-900 bg-[#f7efe4] border-stone-200 border rounded-full pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center">
          Routine quiz
          <svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(28, 25, 23)', width: '16px', height: '16px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a7 7 0 0 1 7 7a6.98 6.98 0 0 1-3.053 5.777l-.122.08c-.827.52-1.325.88-1.325 1.643V17a1 1 0 0 0-2 0v.5c0 1.882 1.492 3.07 2.595 3.803l.199.129c.43.276.976.147 1.252-.283c.276-.43.147-.977-.283-1.253l-.267-.17C14.57 19.2 14 18.79 14 17.5c0-1.083.658-1.52 1.723-2.178A8.98 8.98 0 0 0 21 9a9 9 0 1 0-18 0a1 1 0 1 0 2 0a7 7 0 0 1 7-7Zm0 5a3 3 0 0 0-3 3a1 1 0 1 0 2 0a1 1 0 1 1 1.707.707c-.384.384-.707.733-.962 1.053C11.45 12.11 11 12.783 11 13.5V14a1 1 0 1 0 2 0v-.5c0-.21.213-.568.537-.974c.283-.355.646-.755 1.063-1.172A3 3 0 0 0 12 7Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
<div className="space-y-10 lg:space-y-14">

<section className="space-y-5">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex items-center justify-center text-[0.7rem] font-medium text-stone-700 bg-white/70 w-6 h-6 border-stone-300 border rounded-full">
              New
            </span>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-stone-900">
              Fresh arrivals
            </h3>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 transition-colors">
            View all new
            <svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 1 1-1.414-1.414L16.586 12H6a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
</div>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
<img alt="Gentle night mask" className="sm:h-56 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95221975-49b7-4db6-a8fe-15f9a78f1303_800w.webp"/>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-medium bg-stone-900 text-[#f4eadf] shadow-sm">
                  Just launched
                </span>
</div>
</div>
<div className="flex-1 flex flex-col px-5 py-5 sm:px-6 sm:py-6">
<div className="flex items-start justify-between gap-3">
<div>
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                    Midnight Recovery Mask
                  </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                    An overnight gel-cream mask with microalgae and beta-glucan to visibly soften morning redness.
                  </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$54</span>
<span className="text-stone-500 mt-0.5">60 ml</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
<span>Ideal 2–3 nights per week</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 text-[#f4eadf] px-3 py1.5 font-medium hover:bg-stone-800 transition-colors">
                  Add
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
<img alt="Soothing cleansing oil" className="sm:h-56 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d661cf7-dc20-4e73-b462-15d75ebcce7f_800w.jpg"/>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-medium bg-stone-900/90 text-[#f4eadf] border border-stone-200/80">
                  Limited run
                </span>
</div>
</div>
<div className="flex-1 flex flex-col px-5 py-5 sm:px-6 sm:py-6">
<div className="flex items-start justify-between gap-3">
<div className="">
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                    Velvet Oil Cleanser
                  </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                    A cushiony first cleanse with meadowfoam and plum oil that rinses clean without a separate washcloth.
                  </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$36</span>
<span className="text-stone-500 mt-0.5">150 ml</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
<span>Best for dry &amp; reactive skin</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/70 px-3 py-1.5 font-medium text-stone-900 hover:bg-white transition-colors">
                  Add
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] overflow-hidden flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none"></div>
<img alt="Lightweight daily moisturizer" className="sm:h-56 w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18290e4-e8fb-4831-9a08-0dc9f7fea7d2_800w.jpg"/>
<div className="absolute top-3 left-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.68rem] font-medium bg-stone-900 text-[#f4eadf]">
                  New shade-safe
                </span>
</div>
</div>
<div className="flex-1 flex flex-col px-5 py-5 sm:px-6 sm:py-6">
<div className="flex items-start justify-between gap-3">
<div className="">
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                    Daylight Dew SPF 30
                  </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                    Mineral SPF that disappears on every undertone and layers smoothly under makeup or bare skin.
                  </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$48</span>
<span className="text-stone-500 mt-0.5">50 ml</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<span className="w-1.5 h-1.5 rounded-full bg-stone-900"></span>
<span>No white cast, zero fragrance</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/70 px-3 py-1.5 font-medium text-stone-900 hover:bg-white transition-colors">
                  Add
                  <svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>
</article>
</div>
</section>

<section className="space-y-5">
<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/70 border border-stone-300 text-[0.7rem] font-medium text-stone-800">
              ★
            </span>
<h3 className="text-base sm:text-lg font-medium tracking-tight text-stone-900">
              Community favorites
            </h3>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 transition-colors">
            View all top rated
            <svg className="w-3.5 h-3.5" viewbox="0 0 24 24 aria-hidden='true'" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 1 1-1.414-1.414L16.586 12H6a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
</div>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5">

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-5 sm:px-6 sm:py-6 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative mb-4 rounded-2xl overflow-hidden">
<img alt="Lumina Barrier Serum bottle" className="sm:h-40 w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd1db224-b438-47b5-8cb4-6744fbdc7fa2_800w.jpg"/>
</div>
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-stone-600 mb-1.5">
                  BESTSELLER
                </p>
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                  Lumina Barrier Serum
                </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                  The nightly essential that anchors most of our routines, now with 10% glycerin and calming botanicals.
                </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$42</span>
<span className="mt-0.5 text-stone-500">30 ml</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<div className="flex items-center text-amber-400">
<svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path>
</svg>
<span className="ml-0.5">4.9</span>
</div>
<span className="text-stone-500">• 1,203 reviews</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-stone-900 text-[#f4eadf] px-3 py-1.5 font-medium hover:bg-stone-800 transition-colors">
                Add
                <svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z" fill="currentColor"></path>
</svg>
</button>
</div>
<p className="mt-3 text-[0.7rem] text-stone-600 line-clamp-2">
              “This is the only serum that calms my cheeks after a long day in office air.”
            </p>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-5 sm:px-6 sm:py-6 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative mb-4 rounded-2xl overflow-hidden">
<img alt="Cloud Melt Cleansing Gel bottle" className="sm:h-40 w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2edfce5-c681-4885-a065-002de436d9b4_800w.jpg"/>
</div>
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-stone-600 mb-1.5">
                  MOST LOVED CLEANSER
                </p>
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                  Cloud Melt Cleansing Gel
                </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                  A low-foam, pH-balanced gel that removes SPF and city air without leaving your skin tight.
                </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$29</span>
<span className="mt-0.5 text-stone-500">120 ml</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<div className="flex items-center text-amber-400">
<svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path>
</svg>
<span className="ml-0.5">4.8</span>
</div>
<span className="text-stone-500">• 839 reviews</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/70 px-3 py-1.5 font-medium text-stone-900 hover:bg-white transition-colors">
                Add
                <svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z" fill="currentColor"></path>
</svg>
</button>
</div>
<p className="mt-3 text-[0.7rem] text-stone-600 line-clamp-2">
              “Feels like water, cleans like a dream. My barrier finally feels quiet again.”
            </p>
</article>

<article className="group rounded-3xl border border-stone-200 bg-[#f7efe4] px-5 py-5 sm:px-6 sm:py-6 flex flex-col shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200">
<div className="relative mb-4 rounded-2xl overflow-hidden">
<img alt="Velvet Lock Moisture Cream jar" className="sm:h-40 w-full h-32 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/335dee2e-eeef-4292-8168-ea58d3eeca44_800w.jpg"/>
</div>
<div className="flex items-start justify-between gap-3">
<div className="">
<p className="text-[0.7rem] font-medium tracking-[0.18em] uppercase text-stone-600 mb-1.5">
                  NIGHT CREAM
                </p>
<h4 className="font-playfair text-lg font-semibold tracking-tight text-stone-900">
                  Velvet Lock Moisture Cream
                </h4>
<p className="mt-1 text-xs sm:text-sm text-stone-700">
                  A breathable but cocooning cream that seals in hydration and helps reduce overnight moisture loss.
                </p>
</div>
<div className="flex flex-col items-end text-xs text-stone-700">
<span className="font-semibold">$38</span>
<span className="mt-0.5 text-stone-500">50 ml</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-3 text-[0.72rem] sm:text-xs">
<div className="flex items-center gap-1.5 text-stone-700">
<div className="flex items-center text-amber-400">
<svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.92 2.868a1.25 1.25 0 0 1 2.16 0l2.795 4.798l5.428 1.176a1.25 1.25 0 0 1 .667 2.054l-3.7 4.141l.56 5.525a1.25 1.25 0 0 1-1.748 1.27L12 19.592l-5.082 2.24a1.25 1.25 0 0 1-1.748-1.27l.56-5.525l-3.7-4.14a1.25 1.25 0 0 1 .667-2.055l5.428-1.176z" fill="currentColor"></path>
</svg>
<span className="ml-0.5">4.9</span>
</div>
<span className="text-stone-500">• 612 reviews</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-stone-300 bg-white/70 px-3 py-1.5 font-medium text-stone-900 hover:bg-white transition-colors">
                Add
                <svg aria-hidden="true" className="w-3.5 h-3.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H6a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z" fill="currentColor"></path>
</svg>
</button>
</div>
<p className="mt-3 text-[0.7rem] text-stone-600 line-clamp-2">
              “My face still feels cushioned in the morning, but never greasy. Instant repurchase.”
            </p>
</article>
</div>
</section>
</div>
</div>
</section><section className="text-emerald-50 bg-[#0b0f0e] w-full border-t border-emerald-900/60">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
<div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-10">

<div className="w-full lg:w-1/2 flex flex-col justify-center">
<p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-emerald-300 mb-3">
          START TONIGHT
        </p>
<h2 className="font-playfair text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight">
          Ready to give your skin
          <span className="italic text-emerald-300">the quiet it’s asking for?</span>
</h2>
<p className="mt-4 text-sm sm:text-base text-emerald-100/85 max-w-lg">
          Answer a few questions and we’ll build a gentle, step-by-step ritual that fits your skin, your time,
          and your budget—no 10-step overwhelm required.
        </p>

<div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-400 text-emerald-950 px-5 py-2.5 text-xs sm:text-sm font-medium hover:bg-emerald-300 hover:shadow-sm transition-colors">
            Start my ritual quiz
            <svg aria-hidden="true" className="w-4 h-4" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.293 5.293a1 1 0 0 1 1.414 0l4 4a.997.997 0 0 1 .083.094l.007.01l.007.01a.997.997 0 0 1 .083.148l.003.01l.005.01A1 1 0 0 1 19.999 11v.003a1 1 0 0 1-.293.704l-4 4a1 1 0 0 1-1.414-1.414L16.586 12H6a1 1 0 1 1 0-2h10.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" fill="currentColor"></path>
</svg>
</button>
<button className="inline-flex items-center gap-2 rounded-full border border-emerald-700/80 bg-[#111715] px-4 py-2 text-xs sm:text-sm font-medium text-emerald-100 hover:border-emerald-400 hover:bg-[#151d19] transition-colors">
            Browse all products
            <svg aria-hidden="true" className="w-4 h-4 text-emerald-300" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 4a1 1 0 0 1 1-1h4.5a1 1 0 1 1 0 2H7v14h10V9.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" fill="currentColor"></path>
<path d="M14.5 3a1 1 0 0 0 0 2h1.793l-5.147 5.146a1 1 0 1 0 1.414 1.415L17.707 6.5V8.3a1 1 0 0 0 2 0V3.999A1 1 0 0 0 18.999 3z" fill="currentColor"></path>
</svg>
</button>
</div>

<div className="mt-5 flex flex-wrap gap-4 text-[0.7rem] sm:text-xs text-emerald-300/80">
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[0.65rem] text-emerald-200">
              ✓
            </span>
<span>Dermatologist reviewed routines</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/40 text-[0.65rem] text-emerald-200">
              ✓
            </span>
<span>No subscription required</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<div className="relative rounded-3xl border border-emerald-900/70 bg-gradient-to-br from-[#111715] via-[#0c1411] to-[#102019] overflow-hidden shadow-sm">
<div className="absolute -top-20 right-[-40px] w-56 h-56 bg-emerald-500/20 blur-3xl"></div>
<div className="absolute -bottom-16 left-[-40px] w-52 h-52 bg-emerald-600/20 blur-3xl"></div>
<div className="relative px-6 py-7 sm:px-8 sm:py-9 flex flex-col gap-6">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs font-medium tracking-[0.18em] uppercase text-emerald-300/90 mb-2">
                  SAMPLE RITUAL
                </p>
<p className="text-sm text-emerald-100/80">
                  For reactive, city-stressed skin
                </p>
</div>
<div className="flex items-center gap-2 text-xs text-emerald-100/80">
<span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-400/50">
                  ~5 min
                </span>
<span className="inline-flex h-7 px-3 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-400/40">
                  3 steps
                </span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[0.75rem] font-medium text-emerald-200">
                  01
                </div>
<div className="">
<p className="text-xs font-medium tracking-[0.18em] uppercase text-emerald-300">
                    Cleanse
                  </p>
<p className="text-sm text-emerald-50 mt-1">
                    Cloud Melt Cleansing Gel
                  </p>
<p className="text-xs text-emerald-200/80 mt-0.5">
                    Rinse away SPF and buildup without the post-wash tightness.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[0.75rem] font-medium text-emerald-200">
                  02
                </div>
<div className="">
<p className="text-xs font-medium tracking-[0.18em] uppercase text-emerald-300">
                    Treat
                  </p>
<p className="text-sm text-emerald-50 mt-1">
                    Lumina Barrier Serum
                  </p>
<p className="text-xs text-emerald-200/80 mt-0.5">
                    Target visible redness and restore suppleness with barrier-supporting actives.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-[0.75rem] font-medium text-emerald-200">
                  03
                </div>
<div className="">
<p className="text-xs font-medium tracking-[0.18em] uppercase text-emerald-300">
                    Seal
                  </p>
<p className="text-sm text-emerald-50 mt-1">
                    Velvet Lock Moisture Cream
                  </p>
<p className="text-xs text-emerald-200/80 mt-0.5">
                    Lock in hydration overnight without clogging pores or heaviness.
                  </p>
</div>
</div>
</div>
<div className="pt-3 border-t border-emerald-900/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[0.75rem] sm:text-xs text-emerald-200/80">
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="Customer" className="w-7 h-7 rounded-full border border-[#0b0f0e] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4cd168c2-063d-4fc6-9a8b-e7dc29079fbb_320w.webp"/>
<img alt="Customer" className="w-7 h-7 rounded-full border border-[#0b0f0e] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e54a682e-0572-4963-acad-3fef8c475181_320w.webp"/>
<img alt="Customer" className="w-7 h-7 rounded-full border border-[#0b0f0e] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a99bb2ef-7049-4322-b3d5-5c763f91718f_320w.webp"/>
</div>
<p>
<span className="font-medium text-emerald-50">2,304</span> people built their ritual in the last 30 days.
                </p>
</div>
<p className="text-emerald-400/80">
                You can adjust or skip any step—your skin, your pace.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-emerald-900/60 bg-[#141a17]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8 md:gap-6 items-start md:items-center justify-between">
<div className="">
<div className="flex items-center gap-2">
<div className="flex bg-center w-[100px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/296289e8-d1b7-46fb-a6d8-f52a9f0e4569_320w.png)] bg-cover invert gap-x-2 gap-y-2 items-center">
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-emerald-200/70 max-w-sm">
            Gentle, clinically-minded rituals for skin that’s easily overwhelmed.
          </p>
</div>
<div className="flex flex-wrap gap-6 text-xs sm:text-sm text-emerald-200/80">
<a className="hover:text-emerald-50 transition-colors" href="#">Ingredients</a>
<a className="hover:text-emerald-50 transition-colors" href="#">FAQ</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Contact</a>
<a className="hover:text-emerald-50 transition-colors" href="#">Privacy</a>
</div>
<p className="text-[0.7rem] text-emerald-500/70">
          © <span id="year-span">2025</span> Lumina Skin Rituals. All rights reserved.
        </p>
</div>
</footer>
</div>


    </>
  );
}
