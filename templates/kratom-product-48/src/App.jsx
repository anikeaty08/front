import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



const ans = {};
let cur = 0;

function updatePips() {
  const pips = document.querySelectorAll('.pip');
  const map = [0,1,1,2,2,3,4,4];
  const pipI = map[cur] || 0;
  pips.forEach((p,i) => {
    p.classList.remove('done','now');
    if (i < pipI) p.classList.add('done');
    else if (i === pipI) p.classList.add('now');
  });
}

function restartLoop() {
  // Clear all saved answers
  Object.keys(ans).forEach(key => delete ans[key]);
  
  // Remove selected styling from options
  document.querySelectorAll('.opt.sel').forEach(el => el.classList.remove('sel'));
  
  // Navigate back to intro screen
  go(0);
}

function go(to) {
  const all = document.querySelectorAll('.scr');
  all[cur].classList.remove('on');
  all[cur].classList.add('out');
  setTimeout(() => {
    all[cur].classList.remove('out');
    all[to].classList.add('on');
    cur = to;
    updatePips();
    
    if (to === 2) startTimer('timer1', 4000);
    if (to === 4) startTimer('timer2', 4000);

    if (to === 6) {
      buildResult();
      setTimeout(() => go(7), 1600);
    }

    if (to === 2) updateLearn1();
    if (to === 4) updateLearn2();
  }, 180);
}

function pick(btn, key, val) {
  ans[key] = val;
  const sibs = btn.closest('.opts').querySelectorAll('.opt');
  sibs.forEach(s => s.classList.remove('sel'));
  btn.classList.add('sel');

  setTimeout(() => {
    if (key === 'exp') {
      go(6);
    } else {
      go(cur + 1);
    }
  }, 450);
}

function startTimer(id, duration) {
  const el = document.getElementById(id);
  el.classList.remove('go');
  el.style.transitionDuration = '0s';
  el.style.width = '0%';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.style.transitionDuration = (duration/1000) + 's';
      el.classList.add('go');
    });
  });
}

function updateLearn1() {
  const goal = ans.goal || 'energy';
  const titles = {
    energy: 'People who want energy<br>love <span class="italic text-[#1C3A14]">white vein.</span>',
    balance: 'People who want focus<br>love <span class="italic text-[#1C3A14]">green vein.</span>',
    calm: 'People who want calm<br>love <span class="italic text-[#1C3A14]">red vein.</span>'
  };
  const bodies = {
    energy: 'Kratom comes in three vein types, each with a different alkaloid balance. White vein has the highest concentration of mitragynine, the compound responsible for clean, sustained energy. It\'s what people switch to when coffee stops cutting it.',
    balance: 'Kratom comes in three vein types, each with a different alkaloid balance. Green vein sits right in the middle: enough stimulation for sharp focus, enough relaxation to keep you calm under pressure. It\'s the most popular daily use vein globally.',
    calm: 'Kratom comes in three vein types, each with a different alkaloid balance. Red vein has higher 7-hydroxymitragynine, the compound that promotes deep, smooth relaxation. Most evening users land here.'
  };

  document.getElementById('learn1Title').innerHTML = titles[goal] || titles.energy;
  document.getElementById('learn1Body').textContent = bodies[goal] || bodies.energy;

  document.getElementById('veinWhite').classList.toggle('highlight', goal === 'energy');
  document.getElementById('veinGreen').classList.toggle('highlight', goal === 'balance');
  document.getElementById('veinRed').classList.toggle('highlight', goal === 'calm');
}

function updateLearn2() {
  const time = ans.time || 'morning';
  const titles = {
    morning: 'For your morning routine,<br><span class="italic text-[#1C3A14]">powder is king.</span>',
    midday: 'For a midday reset,<br><span class="italic text-[#1C3A14]">capsules are easiest.</span>',
    evening: 'For evening use,<br><span class="italic text-[#1C3A14]">capsules keep it simple.</span>'
  };
  const bodies = {
    morning: 'Morning users want fast onset. Powder absorbs in 20 minutes because it bypasses the capsule breakdown step. Mix it into your coffee, juice, or water and you\'ll feel it before you leave the house.',
    midday: 'At midday you don\'t want to measure powder at your desk. Capsules are pre-dosed, tasteless, and discreet. They take about 45 minutes to kick in, so take them right after lunch and you\'ll be sharp by 1pm.',
    evening: 'Evening is about simplicity. You don\'t want to prep anything after a long day. Capsules are grab and go. The slightly slower onset (45 min) actually works in your favor since the effects build gradually as you settle in.'
  };

  document.getElementById('learn2Title').innerHTML = titles[time] || titles.morning;
  document.getElementById('learn2Body').textContent = bodies[time] || bodies.morning;

  const fmtRec1 = document.getElementById('fmtRec1');
  const fmtRec2 = document.getElementById('fmtRec2');

  if (time === 'morning') {
    fmtRec1.classList.add('rec');
    fmtRec2.classList.remove('rec');
    fmtRec1.querySelector('iconify-icon').style.color = '#1C3A14';
    fmtRec2.querySelector('iconify-icon').style.color = 'rgba(28, 58, 20, 0.5)';
    ans.format = 'powder';
  } else {
    fmtRec1.classList.remove('rec');
    fmtRec2.classList.add('rec');
    fmtRec1.querySelector('iconify-icon').style.color = 'rgba(28, 58, 20, 0.5)';
    fmtRec2.querySelector('iconify-icon').style.color = '#1C3A14';
    ans.format = 'capsules';
  }

  // Remove any existing badges
  document.querySelectorAll('.fmt-badge').forEach(b => b.remove());
  // Add badge to recommended card
  var recCard = time === 'morning' ? fmtRec1 : fmtRec2;
  var badge = document.createElement('span');
  badge.className = 'fmt-badge absolute -top-2 left-1/2 -translate-x-1/2 text-xs font-semibold bg-[#D3FA99] text-[#1C3A14] px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap';
  badge.textContent = 'Recommended';
  recCard.style.position = 'relative';
  recCard.appendChild(badge);
}

function buildResult() {
  const goal = ans.goal || 'balance';
  const fmt = ans.format || 'powder';
  const exp = ans.exp || 'no';

  const data = {
    energy: {
      strain: 'White Maeng Da.',
      desc: 'The most energizing strain in our lineup. Clean, sustained drive that carries you through the day without the crash.',
      powder: {name:'White Maeng Da Powder',detail:'Powder · 28g',price:'$12.99'},
      caps: {name:'White Borneo Capsules',detail:'Capsules · 60ct',price:'$29.99'},
      why: [
        'White vein has the highest mitragynine ratio for clean energy',
        'Maeng Da is premium grade, maximum alkaloid concentration',
        'Users describe it as coffee without the jitters or crash',
        'Effects last 4 to 6 hours with smooth, gradual offset'
      ]
    },
    balance: {
      strain: 'Green Maeng Da.',
      desc: 'The number one daily strain. Balanced energy, sharp focus, smooth offset. Most new users start here.',
      powder: {name:'Green Maeng Da Powder',detail:'Powder · 28g',price:'$12.99'},
      caps: {name:'Green Maeng Da Capsules',detail:'Capsules · 60ct',price:'$29.99'},
      why: [
        'Green vein sits between energizing whites and calming reds',
        'Maeng Da means premium grade, maximum potency',
        'Most popular daily use strain globally',
        'Effects last 4 to 6 hours with smooth offset'
      ]
    },
    calm: {
      strain: 'Red Maeng Da.',
      desc: 'The evening strain. When your mind won\'t stop racing, Red Maeng Da brings the volume down. Smoothly, naturally.',
      powder: {name:'Red Maeng Da Powder',detail:'Powder · 28g',price:'$12.99'},
      caps: {name:'Red Maeng Da Capsules',detail:'Capsules · 60ct',price:'$29.99'},
      why: [
        'Red vein has higher 7-hydroxymitragynine for calm',
        'Most effective 2 to 3 hours before you want to unwind',
        'Users describe it as turning the volume knob down',
        'Pairs well with green or white vein during the day'
      ]
    }
  };

  const d = data[goal];
  document.getElementById('resStrain').innerHTML = d.strain;
  document.getElementById('resDesc').textContent = d.desc;

  let primary = fmt === 'capsules' ? d.caps : d.powder;
  let secondary = fmt === 'capsules' ? d.powder : d.caps;

  document.getElementById('name1').textContent = primary.name;
  document.getElementById('det1').textContent = primary.detail;
  document.getElementById('pr1').textContent = primary.price;
  document.getElementById('resCta').textContent = primary.price;

  document.getElementById('name2').textContent = secondary.name;
  document.getElementById('det2').textContent = secondary.detail;
  document.getElementById('pr2').textContent = secondary.price;

  const wl = document.getElementById('resWhyList');
  wl.innerHTML = d.why.map(w => '<div class="res-why-li"><div class="res-why-dot"></div><div class="text-xs font-light text-white/50 leading-relaxed">' + w + '</div></div>').join('');

  document.getElementById('resDose').style.display = exp === 'no' ? 'flex' : 'none';
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="app relative">
<div className="flex items-center justify-between px-6 pt-5 bg-[#FCFCF7] z-10 shrink-0">
<span className="text-sm font-normal tracking-tight text-[#1C3A14]">Daily Kratom.</span>
<button className="w-8 h-8 rounded-full border border-[#1C3A14]/20 flex items-center justify-center text-[#1C3A14] hover:bg-[#1C3A14]/10 transition-colors cursor-pointer active:scale-95" onclick="restartLoop()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex gap-1.5 px-6 pt-4 pb-1 bg-[#FCFCF7] z-10 shrink-0" id="pips">
<div className="pip now h-1 flex-1 rounded-full"></div>
<div className="pip h-1 flex-1 rounded-full"></div>
<div className="pip h-1 flex-1 rounded-full"></div>
<div className="pip h-1 flex-1 rounded-full"></div>
<div className="pip h-1 flex-1 rounded-full"></div>
</div>
<div className="screens">

<div className="scr on" data-i="0" style={{flexDirection: 'column', justifyContent: 'space-between', paddingTop: '28px', paddingBottom: '24px'}}>

<div className="flex justify-end">
<div className="inline-flex items-center gap-2 bg-[#1C3A14] rounded-full px-3 py-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#D3FA99]"></div>
<span className="text-xs font-medium text-[#FCFCF7] uppercase tracking-widest">
            3 questions · 30 seconds
          </span>
</div>
</div>

<div className="my-8">
<h1 className="text-4xl tracking-tight font-normal leading-tight text-[#1C3A14] mb-3">What does your<br/>body <span className="italic text-[#1C3A14]">need?</span></h1>
<p className="text-sm font-light text-[#1C3A14]/50 leading-relaxed max-w-[280px]">We won't ask you about strains or alkaloids. Just tell us about you. We'll handle the science.</p>
</div>

<div>
<div className="flex gap-1.5 mb-5">
<div className="flex-1 bg-white border border-[#1C3A14]/[0.04] rounded-xl py-3.5 text-center">
<span className="block text-lg font-medium text-[#1C3A14] mb-0.5">1</span>
<span className="block text-xs text-[#1C3A14]/30 leading-snug">Tell us<br/>your goal</span>
</div>
<div className="flex-1 bg-white border border-[#1C3A14]/[0.04] rounded-xl py-3.5 text-center">
<span className="block text-lg font-medium text-[#1C3A14] mb-0.5">2</span>
<span className="block text-xs text-[#1C3A14]/30 leading-snug">We'll teach<br/>you why</span>
</div>
<div className="flex-1 bg-white border border-[#1C3A14]/[0.04] rounded-xl py-3.5 text-center">
<span className="block text-lg font-medium text-[#1C3A14] mb-0.5">3</span>
<span className="block text-xs text-[#1C3A14]/30 leading-snug">Get your<br/>match</span>
</div>
</div>
<button className="w-full py-3.5 bg-[#1C3A14] text-[#FCFCF7] rounded-full text-base font-medium active:scale-[0.97] transition-all flex justify-center items-center gap-2" onclick="go(1)">
          Let's go <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center mt-3 text-xs text-[#1C3A14]/30">Takes 30 seconds. No account needed.</p>
</div>
</div>

<div className="scr" data-i="1">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#1C3A14]/20"></div>
<span className="text-xs font-normal uppercase tracking-widest text-[#1C3A14]/50">Question 1 of 3</span>
</div>
<h2 className="text-3xl tracking-tight font-normal leading-tight mb-5">What does your<br/>day need more <span className="italic text-[#1C3A14]">of?</span></h2>
<div className="flex flex-col gap-2 opts">
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'goal','energy')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">Steady energy</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">No more afternoon crash or third coffee.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'goal','balance')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">Focus and clarity</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">Cut through brain fog. Stay in the zone.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'goal','calm')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:moon-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">A way to unwind</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">Turn the volume down. Relax properly.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="scr" data-i="2">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#1C3A14]/20"></div>
<span className="text-xs font-normal uppercase tracking-widest text-[#1C3A14]/50">Here's why</span>
</div>
<h2 className="text-2xl tracking-tight font-normal leading-tight mb-4" id="learn1Title">People who want energy<br/>love <span className="italic text-[#1C3A14]">white vein.</span></h2>
<div className="bg-white border border-[#1C3A14]/5 rounded-[24px] p-5 mb-5">
<p className="text-sm font-light text-[#1C3A14]/60 leading-relaxed mb-6" id="learn1Body">Kratom comes in three vein types, each with a different alkaloid balance. White vein has the highest concentration of mitragynine, the compound responsible for clean, sustained energy. It's what people switch to when coffee stops cutting it.</p>
<div className="flex gap-2 mb-4">
<div className="learn-vein highlight flex-1 p-3 rounded-[16px] text-center" id="veinWhite">
<div className="w-2 h-2 rounded-full mx-auto mb-2 bg-[#E5E7EB]"></div>
<div className="text-sm font-normal text-[#1C3A14] mb-0.5">White</div>
<div className="text-xs font-light text-[#1C3A14]/50">Energy</div>
</div>
<div className="learn-vein flex-1 p-3 rounded-[16px] text-center" id="veinGreen">
<div className="w-2 h-2 rounded-full mx-auto mb-2 bg-[#D3FA99]"></div>
<div className="text-sm font-normal text-[#1C3A14] mb-0.5">Green</div>
<div className="text-xs font-light text-[#1C3A14]/50">Focus</div>
</div>
<div className="learn-vein flex-1 p-3 rounded-[16px] text-center" id="veinRed">
<div className="w-2 h-2 rounded-full mx-auto mb-2 bg-[#1C3A14]/30"></div>
<div className="text-sm font-normal text-[#1C3A14] mb-0.5">Red</div>
<div className="text-xs font-light text-[#1C3A14]/50">Calm</div>
</div>
</div>
<div className="flex gap-2">
<div className="flex-1 bg-white border border-[#1C3A14]/5 rounded-[16px] py-3 px-1 text-center flex flex-col items-center justify-center">
<span className="text-base font-normal tracking-tight text-[#1C3A14] block">40+</span>
<span className="text-xs font-normal text-[#1C3A14]/50 uppercase tracking-widest mt-0.5 block">Alkaloids</span>
</div>
<div className="flex-1 bg-white border border-[#1C3A14]/5 rounded-[16px] py-3 px-1 text-center flex flex-col items-center justify-center">
<span className="text-base font-normal tracking-tight text-[#1C3A14]" id="learn1Onset">4-6h</span>
<span className="text-xs font-normal text-[#1C3A14]/50 uppercase tracking-widest mt-0.5 block">Duration</span>
</div>
<div className="flex-1 bg-white border border-[#1C3A14]/5 rounded-[16px] py-3 px-1 text-center flex flex-col items-center justify-center">
<span className="text-base font-normal tracking-tight text-[#1C3A14] block">100%</span>
<span className="text-xs font-normal text-[#1C3A14]/50 uppercase tracking-widest mt-0.5 block">Pure leaf</span>
</div>
</div>
</div>
<div className="h-[2px] bg-[#1C3A14]/10 rounded-full mb-3 overflow-hidden w-full">
<div className="timer-fill h-full bg-[#1C3A14] w-0" id="timer1"></div>
</div>
<button className="w-full py-3.5 bg-transparent border border-[#1C3A14]/20 text-[#1C3A14] rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1C3A14]/5 active:scale-[0.98] transition-all" onclick="go(3)">
          Got it. Next question <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="scr" data-i="3">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#1C3A14]/20"></div>
<span className="text-xs font-normal uppercase tracking-widest text-[#1C3A14]/50">Question 2 of 3</span>
</div>
<h2 className="text-3xl tracking-tight font-normal leading-tight mb-5">When do you<br/>need it <span className="italic text-[#1C3A14]">most?</span></h2>
<div className="flex flex-col gap-2 opts">
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'time','morning')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:sunrise-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">Morning routine</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">Before or with my first meal.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'time','midday')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:sun-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">Midday reset</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">When the afternoon slump hits.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'time','evening')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:sunset-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">Evening wind down</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">After work. Time to decompress.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="scr" data-i="4">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#1C3A14]/20"></div>
<span className="text-xs font-normal uppercase tracking-widest text-[#1C3A14]/50">Our recommendation</span>
</div>
<h2 className="text-2xl tracking-tight font-normal leading-tight mb-4" id="learn2Title">For your morning routine,<br/><span className="italic text-[#1C3A14]">powder is king.</span></h2>
<div className="bg-white border border-[#1C3A14]/5 rounded-[24px] p-5 mb-5">
<p className="text-sm font-light text-[#1C3A14]/60 leading-relaxed mb-6" id="learn2Body">Morning users want fast onset. Powder absorbs in 20 minutes because it bypasses the capsule breakdown step. Mix it into your coffee, juice, or water and you'll feel it before you leave the house.</p>
<div className="flex gap-2" id="fmtRec">
<div className="fmt-rec-card rec flex-1 p-3.5 rounded-[16px] text-center" id="fmtRec1">
<div className="flex justify-center mb-2 text-[#1C3A14]">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="text-sm font-normal text-[#1C3A14] mb-0.5">Powder</div>
<div className="text-xs font-light text-[#1C3A14]/50">Kicks in: 20 min</div>
</div>
<div className="fmt-rec-card flex-1 p-3.5 rounded-[16px] text-center" id="fmtRec2">
<div className="flex justify-center mb-2 text-[#1C3A14]/50">
<iconify-icon className="text-xl" icon="solar:pill-linear"></iconify-icon>
</div>
<div className="text-sm font-normal text-[#1C3A14] mb-0.5">Capsules</div>
<div className="text-xs font-light text-[#1C3A14]/50">Kicks in: 45 min</div>
</div>
</div>
</div>
<div className="h-[2px] bg-[#1C3A14]/10 rounded-full mb-3 overflow-hidden w-full">
<div className="timer-fill h-full bg-[#1C3A14] w-0" id="timer2"></div>
</div>
<button className="w-full py-3.5 bg-transparent border border-[#1C3A14]/20 text-[#1C3A14] rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#1C3A14]/5 active:scale-[0.98] transition-all" onclick="go(5)">
          Got it. Last question <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="scr" data-i="5">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#1C3A14]/20"></div>
<span className="text-xs font-normal uppercase tracking-widest text-[#1C3A14]/50">Question 3 of 3</span>
</div>
<h2 className="text-3xl tracking-tight font-normal leading-tight mb-5">How comfortable<br/>are you with <span className="italic text-[#1C3A14]">botanicals?</span></h2>
<div className="flex flex-col gap-2 opts">
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'exp','yes')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">I've explored this space</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">I've tried similar botanicals.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
<button className="opt flex items-center gap-3.5 p-3.5 border border-[#1C3A14]/10 bg-white rounded-[20px] w-full text-left cursor-pointer transition-all active:scale-[0.985]" onclick="pick(this,'exp','no')">
<div className="opt-ic w-10 h-10 rounded-[14px] bg-[#1C3A14]/[0.06] flex items-center justify-center shrink-0 text-[#1C3A14]/60 transition-colors">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-base font-normal text-[#1C3A14] mb-0.5">This is completely new</div>
<div className="text-sm font-light text-[#1C3A14]/50 leading-relaxed">I'd like clear guidance on starting.</div>
</div>
<div className="opt-ck w-5 h-5 rounded-full border border-[#1C3A14]/20 flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-white opacity-0 transition-opacity text-sm" icon="solar:check-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="scr" data-i="6">
<div className="flex flex-col items-center justify-center h-full text-center pb-20">
<div className="load-ring w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 relative text-[#1C3A14]">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h2 className="text-xl font-normal tracking-tight text-[#1C3A14] mb-2">Building your match...</h2>
<p className="text-base font-light text-[#1C3A14]/60 max-w-[240px] mx-auto leading-relaxed">Combining your goals, timing, and comfort level.</p>
</div>
</div>

<div className="scr px-0" data-i="7">
<div className="bg-[#1C3A14] h-full overflow-y-auto px-5 pt-5 pb-8" style={{scrollBehavior: 'smooth'}}>

<div className="inline-flex items-center gap-1.5 border border-[#D3FA99]/20 rounded-full px-2.5 py-1 mb-3 mt-2">
<iconify-icon className="text-xs text-[#D3FA99]" icon="solar:check-linear"></iconify-icon>
<span className="text-xs font-medium text-[#D3FA99] uppercase tracking-widest">Your match is ready</span>
</div>

<h1 className="text-2xl font-normal tracking-tight leading-tight text-[#FCFCF7] mb-1">
          We'd start you with<br/><span className="italic text-[#D3FA99]" id="resStrain">Green Maeng Da.</span>
</h1>
<p className="text-xs font-light text-white/30 leading-relaxed mb-4" id="resDesc">The number one daily strain. Balanced energy, sharp focus, smooth offset. Most new users start here.</p>

<button className="w-full py-3.5 bg-[#D3FA99] text-[#1C3A14] rounded-full text-sm font-medium active:scale-[0.97] transition-all mb-4">
          Add to cart · <span id="resCta">$12.99</span>
</button>

<div className="flex gap-2 mb-4">

<div className="flex-1 bg-white/[0.04] border border-[#D3FA99]/10 rounded-2xl p-3" id="card1">
<div className="w-full aspect-square rounded-xl bg-white/[0.04] flex items-center justify-center mb-2">
<img alt="" className="w-10 h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71b4c48a-08aa-4241-9b6e-a60f2dd661cb_800w.png"/>
</div>
<span className="text-xs font-semibold bg-[#D3FA99] text-[#1C3A14] px-1.5 py-0.5 rounded-full uppercase tracking-wide inline-block mb-1" id="badge1">Your match</span>
<p className="text-xs font-medium text-[#FCFCF7] leading-snug mb-0.5" id="name1">Green Maeng Da Powder</p>
<p className="text-xs font-light text-white/30 mb-1.5" id="det1">Powder · 28g</p>
<p className="text-sm font-semibold text-[#FCFCF7]" id="pr1">$12.99</p>
</div>

<div className="flex-1 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-3" id="card2">
<div className="w-full aspect-square rounded-xl bg-white/[0.03] flex items-center justify-center mb-2">
<img alt="" className="w-10 h-auto object-contain opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71b4c48a-08aa-4241-9b6e-a60f2dd661cb_800w.png"/>
</div>
<span className="text-xs font-semibold bg-white/10 text-white/50 px-1.5 py-0.5 rounded-full uppercase tracking-wide inline-block mb-1" id="badge2">Also great</span>
<p className="text-xs font-medium text-[#FCFCF7] leading-snug mb-0.5" id="name2">Green Maeng Da Capsules</p>
<p className="text-xs font-light text-white/30 mb-1.5" id="det2">Capsules · 60ct</p>
<p className="text-sm font-semibold text-[#FCFCF7]" id="pr2">$29.99</p>
</div>
</div>

<div className="bg-white/[0.03] border border-white/[0.03] rounded-2xl p-3.5 mb-3">
<p className="text-xs font-medium text-[#D3FA99] uppercase tracking-widest mb-2">Why this strain?</p>
<div className="flex flex-col" id="resWhyList">
<div className="res-why-li"><div className="res-why-dot"></div><div className="text-xs font-light text-white/50 leading-relaxed">Green vein sits between energizing whites and calming reds</div></div>
<div className="res-why-li"><div className="res-why-dot"></div><div className="text-xs font-light text-white/50 leading-relaxed">Maeng Da means premium grade, maximum potency</div></div>
<div className="res-why-li"><div className="res-why-dot"></div><div className="text-xs font-light text-white/50 leading-relaxed">Most popular daily use strain globally</div></div>
<div className="res-why-li"><div className="res-why-dot"></div><div className="text-xs font-light text-white/50 leading-relaxed">Effects last 4 to 6 hours with smooth offset</div></div>
</div>
</div>

<div className="bg-[#D3FA99]/5 border border-[#D3FA99]/10 rounded-xl p-3 flex gap-2.5 items-start mb-3" id="resDose" style={{display: 'none'}}>
<div className="w-7 h-7 rounded-lg bg-[#D3FA99]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-sm text-[#D3FA99]" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-[#D3FA99] mb-0.5">First timer tip</p>
<p className="text-xs font-light text-white/50 leading-relaxed">Start with 1 to 2 grams (half a teaspoon) on an empty stomach. Wait 45 minutes. Morning or early afternoon is best.</p>
</div>
</div>
<a className="block text-center text-xs text-white/30 hover:text-white/50 transition-colors underline underline-offset-2 mb-4 mt-2" href="#">or browse all products</a>
<p className="text-center text-xs text-white/[0.15] leading-relaxed px-2">*These statements have not been evaluated by the FDA. Individual results vary.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
