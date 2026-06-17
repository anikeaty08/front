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
      
lucide.createIcons();

// Auth navigation
const loginScreen=document.getElementById('loginScreen');
const registerScreen=document.getElementById('registerScreen');
document.getElementById('toRegister').onclick=()=>{loginScreen.classList.add('hidden');registerScreen.classList.remove('hidden');};
document.getElementById('toLogin').onclick=()=>{registerScreen.classList.add('hidden');loginScreen.classList.remove('hidden');};

// Simulated auth success
function enterApp(){document.getElementById('authWrapper').classList.add('hidden');document.getElementById('appWrapper').classList.remove('hidden');}
document.getElementById('loginBtn').onclick=enterApp;
document.getElementById('registerBtn').onclick=enterApp;

// Bottom nav
document.querySelectorAll('.navBtn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const target=btn.dataset.target;
    document.querySelectorAll('[data-main]').forEach(s=>s.classList.add('hidden'));
    document.getElementById(target).classList.remove('hidden');
    document.querySelectorAll('.navBtn').forEach(b=>b.classList.remove('text-sky-600'));
    btn.classList.add('text-sky-600');
  });
});

// Mood chart
const moodVals=[], moodLabels=[];
const chart=new Chart(document.getElementById('chart'),{
  type:'line',
  data:{labels:moodLabels,datasets:[{data:moodVals,borderColor:'#a78bfa',tension:.4,fill:false}]},
  options:{plugins:{legend:{display:false}},scales:{y:{display:false}}}
});
let chosen=null;
document.querySelectorAll('.moodBtn').forEach(b=>b.onclick=()=>{document.querySelectorAll('.moodBtn').forEach(x=>x.classList.remove('ring-2','ring-lavender-400'));b.classList.add('ring-2','ring-lavender-400');chosen=b.dataset.val;});
document.getElementById('addMood').onclick=()=>{
  if(!chosen)return alert('Pick a mood first');
  const label=new Date().toLocaleDateString('en-US',{weekday:'short'});
  moodLabels.push(label); moodVals.push(['😊','🙂','😐','😔','😭'].indexOf(chosen)+1); chart.update();
  document.querySelectorAll('.moodBtn').forEach(x=>x.classList.remove('ring-2','ring-lavender-400'));chosen=null;
};

// Journal
document.getElementById('saveJournal').onclick=()=>{
  const txt=document.getElementById('journalText').value.trim(); if(!txt) return;
  const li=document.createElement('li');
  li.className='bg-white rounded-lg shadow p-3 flex justify-between items-start';
  li.innerHTML=`<p class="text-sm mr-2">${txt}</p><span class="text-xs text-gray-400">${new Date().toLocaleDateString()}</span>`;
  document.getElementById('journalList').prepend(li);
  document.getElementById('journalText').value='';
};

// Tips cards
const tips=["Try 5-minute breathing","Mindful walk outside","List 3 gratitudes","Drink water slowly","Stretch shoulders"];
const cardZone=document.getElementById('cardZone');
function loadTips(){
  tips.slice().reverse().forEach((t,i)=>{
    const card=document.createElement('div');
    card.className='absolute inset-0 bg-gradient-to-br from-beige-100 to-sky-100 rounded-xl shadow-lg flex items-center justify-center p-6 text-center text-lg font-medium select-none';
    card.style.transform=`translateY(${i*6}px)`; card.textContent=t; cardZone.append(card);
  });
} loadTips();
function swipe(ok){
  const card=cardZone.querySelector('div:last-child'); if(!card) return;
  card.style.transition='transform .4s, opacity .4s'; card.style.transform=`translate(${ok?'+':'-'}120%, -30%) rotate(${ok?'+':'-'}15deg)`; card.style.opacity=0;
  setTimeout(()=>{card.remove(); if(!cardZone.children.length) loadTips();},400);
}
document.getElementById('tipYes').onclick=()=>swipe(true);
document.getElementById('tipNo').onclick=()=>swipe(false);

// Profile overlay
const overlay=document.getElementById('profileOverlay');
document.getElementById('openProfile').onclick=()=>overlay.classList.remove('hidden');
document.getElementById('closeProfile').onclick=()=>overlay.classList.add('hidden');

// Dark mode
const themeToggle=document.getElementById('themeToggle');
themeToggle.onclick=()=>{
  document.body.classList.toggle('dark'); themeToggle.querySelector('.dot').style.transform=document.body.classList.contains('dark')?'translateX(24px)':'none';
};

// Entry animations
window.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-screen] > *, [data-main] > *').forEach((el,i)=>{el.style.opacity=0;el.style.transform='translateY(12px)';setTimeout(()=>{el.style.transition='all .5s';el.style.opacity=1;el.style.transform='none';},200+40*i);});});

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
      

<main className="flex-1 flex flex-col items-center justify-center gap-10 p-6" id="authWrapper">

<section className="w-full max-w-sm space-y-6" data-screen="" id="loginScreen">
<div className="space-y-2">
<h1 className="text-3xl font-semibold tracking-tight text-center">Welcome back</h1>
<p className="text-sm text-center text-gray-500">Keep caring for your mind</p>
</div>
<div className="space-y-4">
<label className="block">
<span className="text-sm">Email</span>
<input className="mt-1 w-full rounded-xl p-3 bg-white shadow placeholder-gray-400 focus:outline-none" id="loginEmail" placeholder="you@example.com" type="email"/>
</label>
<label className="block">
<span className="text-sm">Password</span>
<input className="mt-1 w-full rounded-xl p-3 bg-white shadow placeholder-gray-400 focus:outline-none" id="loginPass" placeholder="••••••••" type="password"/>
</label>
<button className="w-full py-3 rounded-xl bg-sky-300 text-sky-900 font-medium hover:bg-sky-400 transition" id="loginBtn">Log in</button>
<button className="w-full py-3 rounded-xl bg-white shadow flex items-center justify-center gap-3 hover:bg-gray-50 transition" id="googleBtn">
<svg className="w-5 h-5" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 9.5c3.51 0 6.68 1.35 9.1 3.55l6.79-6.79C35.58 2.34 30.04 0 24 0 14.66 0 6.54 5.48 2.69 13.44l7.9 6.14C12.4 12.23 17.76 9.5 24 9.5z" fill="#EA4335"></path><path d="M46.9 24.64c0-1.55-.15-3.05-.43-4.5H24v8.52h12.82c-.55 2.96-2.21 5.47-4.72 7.17l7.54 5.86C44.6 37.78 46.9 31.7 46.9 24.64z" fill="#4285F4"></path><path d="M10.59 28.58A14.8 14.8 0 0 1 9.5 24c0-1.59.27-3.13.78-4.58l-7.9-6.14A23.96 23.96 0 0 0 0 24c0 3.93.93 7.64 2.58 10.94l8.01-6.36z" fill="#FBBC05"></path><path d="M24 48c6.48 0 11.93-2.15 15.91-5.85l-7.54-5.86c-2.1 1.42-4.79 2.25-8.37 2.25-6.28 0-11.62-4.25-13.53-9.99l-7.86 6.29C6.54 42.52 14.66 48 24 48z" fill="#34A853"></path></svg>
        Continue with Google
      </button>
<a className="block text-center text-sm text-sky-600 hover:underline" href="#">Forgot password?</a>
</div>
<p className="text-xs text-center">No account?
      <button className="text-sky-600 hover:underline font-medium" id="toRegister">Sign up</button>
</p>
</section>

<section className="w-full max-w-sm space-y-6 hidden" data-screen="" id="registerScreen">
<div className="space-y-2">
<h2 className="text-3xl font-semibold tracking-tight text-center">Create account</h2>
<p className="text-sm text-center text-gray-500">Start your self-care journey</p>
</div>
<div className="space-y-4">
<label className="block">
<span className="text-sm">Name</span>
<input className="mt-1 w-full rounded-xl p-3 bg-white shadow placeholder-gray-400 focus:outline-none" id="regName" placeholder="Full name" type="text"/>
</label>
<label className="block">
<span className="text-sm">Email</span>
<input className="mt-1 w-full rounded-xl p-3 bg-white shadow placeholder-gray-400 focus:outline-none" id="regEmail" placeholder="you@example.com" type="email"/>
</label>
<label className="block">
<span className="text-sm">Password</span>
<input className="mt-1 w-full rounded-xl p-3 bg-white shadow placeholder-gray-400 focus:outline-none" id="regPass" placeholder="Create password" type="password"/>
</label>
<label className="block">
<span className="text-sm">Age</span>
<input className="mt-1 w-full rounded-xl p-3 bg-white shadow placeholder-gray-400 focus:outline-none" id="regAge" max="120" min="10" placeholder="26" type="number"/>
</label>
<label className="block">
<span className="text-sm">Pronouns</span>
<select className="mt-1 w-full rounded-xl p-3 bg-white shadow focus:outline-none" id="regPronouns">
<option disabled="" selected="">Choose</option>
<option>She / Her</option>
<option>He / Him</option>
<option>They / Them</option>
</select>
</label>
<label className="block">
<span className="text-sm">Wellness goal</span>
<select className="mt-1 w-full rounded-xl p-3 bg-white shadow focus:outline-none" id="regGoal">
<option disabled="" selected="">Select goal</option>
<option>Feel more balanced</option>
<option>Track my emotions</option>
<option>Build a habit</option>
</select>
</label>
<button className="w-full py-3 rounded-xl bg-mint-300 text-mint-900 font-medium hover:bg-mint-400 transition" id="registerBtn">Sign up</button>
</div>
<p className="text-xs text-center">Have an account?
      <button className="text-sky-600 hover:underline font-medium" id="toLogin">Log in</button>
</p>
</section>
</main>

<div className="flex-1 flex flex-col hidden" id="appWrapper">

<header className="flex items-center justify-between px-4 py-3 bg-white shadow">
<h1 className="text-xl font-semibold tracking-tight">Mind Balance</h1>
<button aria-label="Profile" id="openProfile">
<img alt="avatar" className="w-10 h-10 rounded-full object-cover ring-2 ring-lavender-300" src="https://images.unsplash.com/photo-1580128634645-96e296fa3262?ixlib=rb-4.0.3&amp;q=80&amp;w=96"/>
</button>
</header>

<main className="flex-1 overflow-y-auto pb-24">

<section className="space-y-6 px-4 pt-6" data-main="" id="moodScreen">
<h2 className="text-xl font-semibold tracking-tight">How are you feeling?</h2>
<div className="flex justify-between">
<button className="moodBtn w-16 h-16 bg-white rounded-full shadow flex items-center justify-center text-2xl hover:ring-2 hover:ring-sky-300" data-val="😊">😊</button>
<button className="moodBtn w-16 h-16 bg-white rounded-full shadow flex items-center justify-center text-2xl hover:ring-2 hover:ring-sky-300" data-val="🙂">🙂</button>
<button className="moodBtn w-16 h-16 bg-white rounded-full shadow flex items-center justify-center text-2xl hover:ring-2 hover:ring-sky-300" data-val="😐">😐</button>
<button className="moodBtn w-16 h-16 bg-white rounded-full shadow flex items-center justify-center text-2xl hover:ring-2 hover:ring-sky-300" data-val="😔">😔</button>
<button className="moodBtn w-16 h-16 bg-white rounded-full shadow flex items-center justify-center text-2xl hover:ring-2 hover:ring-sky-300" data-val="😭">😭</button>
</div>
<div className="bg-white rounded-xl shadow p-4">
<h3 className="text-lg font-medium tracking-tight mb-2">This week</h3>
<div className="relative"><canvas height="300" id="chart"></canvas></div>
</div>

<button aria-label="Add mood" className="fixed bottom-28 right-6 p-4 rounded-full bg-lavender-300 text-lavender-900 shadow-lg hover:bg-lavender-400 transition" id="addMood">
<svg className="w-6 h-6" data-lucide="plus"></svg>
</button>
</section>

<section className="hidden space-y-6 px-4 pt-6" data-main="" id="journalScreen">
<h2 className="text-xl font-semibold tracking-tight">Journal</h2>
<div className="bg-white rounded-xl shadow p-4 space-y-3">
<textarea className="w-full resize-none bg-transparent focus:outline-none placeholder-gray-400" id="journalText" placeholder="Write your thoughts..." rows="4"></textarea>
<button className="w-full py-3 rounded-lg bg-sky-300 text-sky-900 font-medium hover:bg-sky-400 transition" id="saveJournal">Save entry</button>
</div>
<ul className="space-y-4" id="journalList"></ul>
</section>

<section className="hidden space-y-6 px-4 pt-6" data-main="" id="tipsScreen">
<h2 className="text-xl font-semibold tracking-tight">Your tips</h2>
<div className="relative h-72" id="cardZone">

</div>
<div className="flex justify-center gap-10">
<button className="p-4 rounded-full bg-red-200 text-red-700 hover:bg-red-300 transition" id="tipNo">
<svg className="w-6 h-6" data-lucide="x"></svg>
</button>
<button className="p-4 rounded-full bg-mint-300 text-mint-900 hover:bg-mint-400 transition" id="tipYes">
<svg className="w-6 h-6" data-lucide="heart"></svg>
</button>
</div>
</section>
</main>

<nav className="fixed bottom-0 inset-x-0 bg-white shadow-t flex justify-around py-2">
<button className="navBtn flex flex-col items-center gap-1 text-sky-600" data-target="moodScreen">
<svg className="w-6 h-6" data-lucide="smile"></svg><span className="text-xs">Mood</span>
</button>
<button className="navBtn flex flex-col items-center gap-1 text-gray-400" data-target="journalScreen">
<svg className="w-6 h-6" data-lucide="book"></svg><span className="text-xs">Journal</span>
</button>
<button className="navBtn flex flex-col items-center gap-1 text-gray-400" data-target="tipsScreen">
<svg className="w-6 h-6" data-lucide="sparkles"></svg><span className="text-xs">Tips</span>
</button>
</nav>
</div>

<div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 hidden" id="profileOverlay">
<div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 space-y-6">
<div className="flex justify-between items-center">
<h2 className="text-xl font-semibold tracking-tight">Profile</h2>
<button id="closeProfile"><svg className="w-6 h-6" data-lucide="x"></svg></button>
</div>
<div className="flex flex-col items-center gap-2">
<img className="w-20 h-20 rounded-full object-cover ring-2 ring-sky-200" src="https://images.unsplash.com/photo-1614285663879-cd94af728621?ixlib=rb-4.0.3&amp;q=80&amp;w=96"/>
<input className="text-center w-full bg-gray-100 rounded-md p-2 focus:outline-none" id="profName" placeholder="Your name"/>
</div>
<div className="space-y-3">
<label className="block">
<span className="text-sm">Age</span>
<input className="mt-1 w-full bg-gray-100 rounded-md p-2 focus:outline-none" id="profAge" type="number"/>
</label>
<label className="block">
<span className="text-sm">Pronouns</span>
<select className="mt-1 w-full bg-gray-100 rounded-md p-2 focus:outline-none" id="profPronouns">
<option>She/Her</option><option>He/Him</option><option>They/Them</option>
</select>
</label>
<label className="block">
<span className="text-sm">Goal</span>
<select className="mt-1 w-full bg-gray-100 rounded-md p-2 focus:outline-none" id="profGoal">
<option>Feel more balanced</option><option>Track my emotions</option><option>Build a habit</option>
</select>
</label>
</div>
<div className="border-t pt-4 space-y-2">
<div className="flex justify-between">
<span className="text-sm">Streak</span><span className="font-medium" id="streakVal">0 days</span>
</div>
<div className="flex justify-between">
<span className="text-sm">Mood ↑</span><span className="font-medium" id="improveVal">0%</span>
</div>
</div>
<div className="flex items-center justify-between pt-4">
<span className="text-sm">Dark mode</span>
<button className="w-12 h-6 bg-gray-300 rounded-full relative" id="themeToggle">
<span className="dot absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform"></span>
</button>
</div>
</div>
</div>



    </>
  );
}
