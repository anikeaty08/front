import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const cards=[{title:"One place to stack all your cards.",desc:"Save all your precious credit cards, tickets, logins in simple and swipable stacks. We even keep a history of your super secret transactions that only you can see.",cards:[{grad:"from-indigo-600 via-purple-400/80 to-fuchsia-400/90",text:"text-white",label:"EXP 10/12",digits:"**** 1234",opacity:"opacity-100"},{grad:"from-indigo-800 via-fuchsia-700/80 to-purple-400/60",text:"text-white/60",label:"EXP 10/12",digits:"**** 1234",opacity:"opacity-80"},{grad:"from-blue-800 via-violet-900/90 to-purple-700/80",text:"text-white/50",label:"EXP 10/12",digits:"**** 1234",opacity:"opacity-70"}]},{title:"It's ultra secure.",desc:"Your cards, transactions, teammates, and secrets are always encrypted and visible only to you. Protect what matters most.",cards:[{grad:"from-violet-700 via-slate-900/80 to-pink-600/80",text:"text-white",label:"EXP 07/25",digits:"**** 5668",opacity:"opacity-100"},{grad:"from-fuchsia-900 via-violet-700/70 to-cyan-800/80",text:"text-white/70",label:"EXP 07/25",digits:"**** 5668",opacity:"opacity-75"},{grad:"from-slate-900 via-blue-900/80 to-cyan-900/80",text:"text-white/50",label:"EXP 07/25",digits:"**** 5668",opacity:"opacity-60"}]},{title:"Fast search & filters.",desc:"No more scrolling endlessly. Instantly find any card or transaction with blazing fast search and advanced filters.",cards:[{grad:"from-blue-600 via-blue-400/60 to-emerald-300/90",text:"text-white",label:"EXP 02/29",digits:"**** 3902",opacity:"opacity-100"},{grad:"from-emerald-700 via-blue-400/60 to-green-300/80",text:"text-white/70",label:"EXP 02/29",digits:"**** 3902",opacity:"opacity-80"},{grad:"from-slate-700 via-green-800/70 to-blue-300/60",text:"text-white/40",label:"EXP 02/29",digits:"**** 3902",opacity:"opacity-60"}]}];
    let index=0;
    let touchStartX=0;
    function renderCards(idx){
      const c=cards[idx].cards;
      let out="";
      [2,1,0].forEach(i=>{
        out+=`<div class="absolute left-0 right-0 top-[${i*12}px] mx-auto w-72 h-40 rounded-3xl bg-gradient-to-tr ${c[i].grad} shadow-2xl border border-white/10 ${c[i].opacity} transition-all z-${i*2+2} duration-300 ${i===0?'scale-105 -translate-y-2':'scale-95'}"><div class="pt-5 pl-6 flex items-center"><span class="mastercard"><span class="mc1"></span><span class="mc2"></span></span></div><div class="absolute right-8 top-6"><span class="card-chip"></span></div><div class="absolute left-7 bottom-8 ${c[i].text} text-xs font-semibold tracking-widest">${c[i].label}</div><div class="absolute left-7 bottom-5 ${c[i].text} text-lg font-mono font-bold tracking-widest">${c[i].digits}</div></div>`;
      });
      document.getElementById("cards-container").innerHTML=out;
      document.getElementById("onboard-title").textContent=cards[idx].title;
      document.getElementById("onboard-desc").textContent=cards[idx].desc;
      renderDots(idx);
    }
    function renderDots(idx){
      let dts="";
      for(let i=0;i<cards.length;++i){
        dts+=`<div class="h-2 w-2 rounded-full ${idx===i?'bg-gradient-to-br from-purple-400 to-indigo-500 shadow-lg':'bg-white/10'}"></div>`;
      }
      document.getElementById("dots").innerHTML=dts;
    }
    function nextCard(){
      index=(index+1)%cards.length;
      renderCards(index);
    }
    function touchStart(e){
      touchStartX=e.touches[0].clientX;
    }
    function touchEnd(e){
      const touchEndX=e.changedTouches[0].clientX;
      const diff=touchStartX-touchEndX;
      if(Math.abs(diff)>30){
        if(diff>0){
          index=(index+1)%cards.length;
        }else{
          index=(index-1+cards.length)%cards.length;
        }
        renderCards(index);
      }
    }
    window.addEventListener('DOMContentLoaded',()=>renderCards(index));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="iphone-frame">
<div className="notch"></div>
<div className="absolute inset-0 -z-10">
<div className="absolute left-24 top-0 w-60 h-60 bg-gradient-to-tr from-blue-700 via-purple-800 to-pink-400 opacity-30 rounded-full blur-3xl"></div>
<div className="absolute right-10 top-28 w-44 h-44 bg-gradient-to-br from-purple-700 via-purple-500 to-blue-700 opacity-25 rounded-full blur-2xl"></div>
<div className="absolute -left-12 bottom-10 w-32 h-32 bg-gradient-to-t from-pink-400 via-orange-400 to-yellow-300 opacity-20 rounded-full blur-2xl"></div>
</div>
<main className="w-full h-full px-4 pt-16 pb-6 flex flex-col items-center relative">
<div className="relative w-72 h-48 mb-9 mt-16 cursor-pointer select-none" id="cards-container" onclick="nextCard()" ontouchend="touchEnd(event)" ontouchstart="touchStart(event)"></div>
<h1 className="mb-3 text-3xl font-black bg-gradient-to-r from-white via-purple-300 to-purple-600 bg-clip-text text-transparent text-center" id="onboard-title"></h1>
<p className="mb-8 text-white/80 text-base text-center font-medium leading-relaxed max-w-xs" id="onboard-desc"></p>
<div className="flex justify-center items-center space-x-3 mb-9" id="dots"></div>
<button className="absolute bottom-7 right-7 hexagon group transition active:scale-95" onclick="nextCard()">
<svg className="mx-auto" fill="none" height="30" viewbox="0 0 24 24" width="30">
<path d="M9 6l6 6-6 6" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"></path>
</svg>
</button>
</main>
</div>


    </>
  );
}
