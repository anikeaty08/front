import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cream:'#FCFBFA', oat:'#F7F0E3', matcha:'#2A4A2E',
rust:'#C0441E', sesame:'#C9943A', ink:'#1C1C1C',
},
fontFamily: {
serif:['"Playfair Display"','serif'],
body:['Inter','"Noto Sans KR"','sans-serif'],
},
animation: {
'float':'float 4s ease-in-out infinite',
'fade-up':'fadeUp .8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-12px)'}},
fadeUp:{'0%':{opacity:'0',transform:'translateY(20px)'},'100%':{opacity:'1',transform:'translateY(0)'}},
},
},
},
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



const S={
  base: {name: 'Plain', flavor: 'plain', price: 4.00, img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=600'}, 
  toppings:new Map(),
  boosters:new Map()
};
const MAX_TOP=3,MAX_BST=2;
const $=id=>document.getElementById(id);
const $$=sel=>document.querySelectorAll(sel);

/* ── 헤더 스크롤 효과 ── */
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) $('nav').classList.add('scrolled');
  else $('nav').classList.remove('scrolled');
});

/* ── 카운터 & 슬라이더 ── */
function updateVisitorCount() {
  let count = localStorage.getItem('seoulmate_visitor_count');
  if (!count) count = Math.floor(Math.random() * (2540 - 2100 + 1)) + 2100;
  else count = parseInt(count) + 1;
  localStorage.setItem('seoulmate_visitor_count', count);
  $('visitor-count').textContent = count.toLocaleString();
  const statNum = $('stat-visitor-num');
  if(statNum){ statNum.dataset.target = count; statNum.textContent = count.toLocaleString(); }
}
updateVisitorCount();

let currentSlide = 0;
const slides = $$('.slide'), dots = $$('.slide-dot');
function goToSlide(index) {
  if(!slides.length) return;
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.replace('bg-sesame','bg-stone-300');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.replace('bg-stone-300','bg-sesame');
}
setInterval(() => { if(slides.length) goToSlide((currentSlide + 1) % slides.length); }, 3500);

/* ── 공통 안내 토스트 ── */
function showComingSoon() {
  const toast = $('order-toast');
  toast.classList.replace('opacity-0', 'opacity-100');
  setTimeout(() => { toast.classList.replace('opacity-100', 'opacity-0'); }, 2500);
}
$('order-btn').addEventListener('click', showComingSoon);
$$('.plan-btn').forEach(btn => btn.addEventListener('click', showComingSoon));

/* ── FAQ 로직 ── */
$$('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const body = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');
        
        body.classList.toggle('open');
        icon.classList.toggle('open');
        
        $$('.faq-body').forEach(otherBody => {
            if (otherBody !== body && otherBody.classList.contains('open')) {
                otherBody.classList.remove('open');
                otherBody.previousElementSibling.querySelector('.faq-icon').classList.remove('open');
            }
        });
    });
});

/* ── BUILDER UI 로직 ── */
$$('.base-card').forEach(card=>card.addEventListener('click',()=>{
  $$('.base-card').forEach(c => c.classList.remove('on'));
  card.classList.add('on');
  
  S.base={name:card.dataset.name,flavor:card.dataset.flavor,price:parseFloat(card.dataset.price),img:card.dataset.img};
  S.toppings.clear(); 
  
  $$('.topping').forEach(b=>b.classList.remove('bg-ink', 'text-white', 'border-ink', 'top-on'));
  
  $('toppings-empty').classList.add('hidden');
  ['sweet','savory','plain'].forEach(f=>{
      const el = $('toppings-'+f);
      if(f!==S.base.flavor) { el.classList.remove('block'); el.classList.add('hidden'); }
      else { el.classList.remove('hidden'); el.classList.add('block'); }
  });
  render();
}));

$('step2').addEventListener('click',e=>{
  const btn=e.target.closest('.topping'); 
  if(!btn) return;
  const name = btn.dataset.name;
  if(S.toppings.has(name)){ 
    S.toppings.delete(name); 
    btn.classList.remove('bg-ink', 'text-white', 'border-ink', 'top-on'); 
  }
  else if(S.toppings.size<MAX_TOP){ 
    S.toppings.set(name,parseFloat(btn.dataset.price)); 
    btn.classList.add('bg-ink', 'text-white', 'border-ink', 'top-on'); 
  }
  render();
});

$$('.booster-card').forEach(card=>card.addEventListener('click',()=>{
  const id = card.dataset.id;
  const check = card.querySelector('.bst-check');
  if(S.boosters.has(id)){
    S.boosters.delete(id); 
    card.classList.remove('border-ink','bg-stone-50'); 
    card.classList.add('border-stone-200','bg-white');
    check.innerHTML=''; 
    check.classList.remove('bg-ink', 'border-ink');
    check.classList.add('border-stone-300');
  } else if(S.boosters.size < MAX_BST){
    S.boosters.set(id, {name:card.dataset.name, emoji:card.dataset.emoji, price:parseFloat(card.dataset.price)});
    card.classList.add('border-ink','bg-stone-50'); 
    card.classList.remove('border-stone-200','bg-white');
    check.classList.add('bg-ink', 'border-ink');
    check.classList.remove('border-stone-300');
    check.innerHTML='<iconify-icon icon="solar:check-read-linear" class="text-white" width="16" stroke-width="2"></iconify-icon>';
  }
  render();
}));

function render(){
  let total = 0;
  if(S.base) total += S.base.price;
  S.toppings.forEach(p=>total+=p);
  S.boosters.forEach(b=>total+=b.price);
  
  if(S.base){ 
    $('bowl-img').src=S.base.img; 
    $('bowl-img').classList.remove('hidden'); 
    setTimeout(() => $('bowl-img').classList.replace('opacity-0', 'opacity-100'), 50);
    $('bowl-placeholder').classList.add('hidden'); 
    $('bowl-placeholder').classList.remove('flex');
    $('row-base').innerHTML=`<span class="text-white font-medium">${S.base.name}</span><span class="text-stone-300">$${S.base.price.toFixed(2)}</span>`;
  }
  
  if(S.toppings.size) {
    const tNames = [...S.toppings.keys()].join(', ');
    const tTotal = [...S.toppings.values()].reduce((a,b)=>a+b,0);
    $('row-toppings').innerHTML=`<div class="text-stone-300 text-sm font-medium">${tNames}</div><span class="text-stone-300">+$${tTotal.toFixed(2)}</span>`;
  } else {
    $('row-toppings').innerHTML=`<span class="text-stone-500 text-xs font-medium">토핑 미선택</span><span class="text-stone-600 text-xs">—</span>`;
  }

  if(S.boosters.size) {
    const bDetails = [...S.boosters.values()].map(b=>b.name).join(', ');
    const bTotal = [...S.boosters.values()].reduce((a,b)=>a+b.price,0);
    $('row-boosters').innerHTML=`<div class="text-stone-300 text-sm font-medium">${bDetails}</div><span class="text-stone-300">+$${bTotal.toFixed(2)}</span>`;
  } else {
    $('row-boosters').innerHTML=`<span class="text-stone-500 text-xs font-medium">부스터 미선택</span><span class="text-stone-600 text-xs">—</span>`;
  }

  $('total-price').textContent = '$' + total.toFixed(2);
  
  const ready = !!S.base;
  const ob=$('order-btn'), cb=$('complete-btn');
  if(ready){
    ob.disabled=false; 
    ob.classList.replace('bg-stone-800','bg-white'); 
    ob.classList.replace('text-stone-500','text-ink'); 
    ob.classList.add('cursor-pointer', 'shadow-md', 'hover:bg-stone-100');
    
    cb.disabled=false; 
    cb.classList.remove('opacity-50','cursor-not-allowed');
  }
}

/* ── 모달 & 랭킹 등록 ── */
$('complete-btn').addEventListener('click', () => { $('modal').classList.add('open'); });
$('modal-x').addEventListener('click', () => { $('modal').classList.remove('open'); });
$('modal-redesign').addEventListener('click', () => { $('modal').classList.remove('open'); window.scrollTo({top:$('builder').offsetTop-80, behavior:'smooth'}); });

$('modal-share').addEventListener('click',()=>{
  if(!S.base)return;
  const card=document.createElement('div');
  card.className='group bg-white border border-stone-200 rounded-3xl overflow-hidden reveal on hover:shadow-lg transition-shadow duration-300';
  card.innerHTML=`
    <div class="relative aspect-[4/3] overflow-hidden">
      <div class="absolute top-3 left-3 z-10 bg-ink text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full font-medium shadow-sm flex items-center gap-1">
        <iconify-icon icon="solar:star-fall-linear" width="14"></iconify-icon> New
      </div>
      <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out">
    </div>
    <div class="p-5">
      <h3 class="font-serif font-medium text-xl text-ink tracking-tight mb-1.5 leading-tight">Your Secret Bowl</h3>
      <p class="text-stone-500 text-sm font-medium leading-relaxed">${S.base.name} + ${[...S.toppings.keys()].join(', ')}</p>
    </div>
  `;
  $('rankings-grid').prepend(card);
  $('modal').classList.remove('open');
  
  const allCards = $$('#rankings-grid > div');
  if(allCards.length > 4) allCards[allCards.length-1].remove();
  
  window.scrollTo({top:$('rankings').offsetTop-80, behavior:'smooth'});
});

/* ── 스크롤 애니메이션 옵저버 ── */
const revObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){
    const el = e.target; el.classList.add('on');
    el.querySelectorAll('.cnum').forEach(cn => {
      if(!cn.dataset.animated) {
          cn.dataset.animated = "true";
          const tgt = parseInt(cn.dataset.target); let cur = 0;
          const timer = setInterval(() => { 
              cur = Math.min(cur + Math.max(1, Math.ceil(tgt / 40)), tgt); 
              cn.textContent = (cn.dataset.pfx||'') + cur.toLocaleString() + (cn.dataset.sfx||''); 
              if(cur >= tgt) clearInterval(timer); 
          }, 30);
      }
    });
  }});
},{threshold:0.1});
$$('.reveal,.reveal-l,.reveal-r').forEach(el=>revObs.observe(el));

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed inset-x-0 top-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-transparent" id="nav">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#hero">
<span className="w-1.5 h-1.5 rounded-full bg-rust group-hover:scale-150 transition-transform duration-300"></span>
<span className="font-serif font-medium text-lg uppercase tracking-tighter">SEOULMATE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-stone-400">
<a className="nav-link hover:text-ink transition-colors duration-200" href="#story">Story</a>
<a className="nav-link hover:text-ink transition-colors duration-200" href="#builder">Builder</a>
<a className="nav-link hover:text-ink transition-colors duration-200" href="#rankings">Rankings</a>
<a className="nav-link hover:text-ink transition-colors duration-200" href="#plans">Plans</a>
<a className="nav-link hover:text-ink transition-colors duration-200" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center bg-ink text-white text-xs font-medium uppercase tracking-wide rounded-full px-6 py-2.5 hover:bg-stone-800 transition-colors duration-200 shadow-sm" href="#builder">Design Now</a>
<button className="md:hidden p-2 text-stone-500 hover:text-ink transition-colors" id="ham-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden" id="hero">
<div className="pointer-events-none absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-50/50 blur-3xl"></div>
<div className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full bg-stone-100/40 blur-3xl"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
<div className="reveal-l on pt-10 lg:pt-0">
<h1 className="font-serif font-medium leading-tight tracking-tight mb-6 text-5xl md:text-7xl lg:text-8xl">
        DESIGN<br/><em className="not-italic text-sesame font-medium">YOUR</em><br/>OATS
      </h1>

<div className="slider-container mb-8">
<div className="slide active text-lg text-stone-500 font-medium tracking-tight">K-시즈닝으로 더 새롭고 맛있게</div>
<div className="slide text-lg text-rust font-medium tracking-tight italic">"바쁜 아침, 가장 완벽한 3분"</div>
<div className="slide text-lg text-matcha font-medium tracking-tight">건강 밸런스를 채우는 당신만의 레시피</div>
<div className="slide text-lg text-sesame font-medium tracking-tight">맛과 영양, 어느 것도 포기하지 마세요</div>
<div className="slide text-lg text-stone-500 font-medium tracking-tight">디자인된 오트밀로 시작하는 새로운 일상</div>
</div>
<div className="flex gap-2.5 mb-10 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-sesame slide-dot cursor-pointer transition-colors duration-300" onclick="goToSlide(0)"></span>
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 slide-dot cursor-pointer transition-colors duration-300" onclick="goToSlide(1)"></span>
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 slide-dot cursor-pointer transition-colors duration-300" onclick="goToSlide(2)"></span>
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 slide-dot cursor-pointer transition-colors duration-300" onclick="goToSlide(3)"></span>
<span className="w-1.5 h-1.5 rounded-full bg-stone-300 slide-dot cursor-pointer transition-colors duration-300" onclick="goToSlide(4)"></span>
</div>
<div className="flex flex-wrap gap-4 mb-12">
<a className="flex items-center gap-2 bg-ink text-white font-medium text-sm rounded-full px-8 py-3.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300" href="#builder">
          나만의 볼 만들기 <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="flex items-center gap-2 bg-white border border-stone-200 text-ink font-medium text-sm rounded-full px-8 py-3.5 hover:border-stone-300 hover:bg-stone-50 transition-all duration-300 shadow-sm" href="#rankings">
          인기 볼 보기
        </a>
</div>
<div className="inline-flex items-center gap-4 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-100 shadow-sm">
<div className="flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 text-stone-600">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-400 uppercase tracking-widest leading-none mb-1">Total Designers</span>
<div className="flex items-baseline gap-1.5">
<strong className="text-ink text-xl font-medium tracking-tight leading-none" id="visitor-count">0</strong>
<span className="text-xs font-medium text-stone-500">명이 레시피를 완성했습니다</span>
</div>
</div>
</div>
</div>
<div className="reveal-r on relative flex justify-center lg:justify-end">
<div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px]">
<img alt="SeoulMate Bowl" className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-stone-200/50 animate-float" src="https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=800"/>
<div className="absolute -top-4 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm px-4 py-2.5 flex items-center gap-2 text-sm font-medium border border-stone-100/50 transition-transform hover:scale-105 cursor-default">
<span className="text-base drop-shadow-sm">🌿</span> K-시즈닝
        </div>
<div className="absolute -bottom-5 -right-2 bg-ink/95 backdrop-blur-sm text-white rounded-2xl shadow-lg px-4 py-2.5 text-sm font-medium transition-transform hover:scale-105 cursor-default">
<span className="text-base drop-shadow-sm">⏱</span> 3분 완성
        </div>
<div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-amber-50/90 backdrop-blur-sm border border-amber-100 rounded-2xl shadow-sm px-4 py-2.5 text-sm font-medium text-amber-900 transition-transform hover:scale-105 cursor-default">
<span className="text-base drop-shadow-sm">💰</span> $3–4 / serve
        </div>
</div>
</div>
</div>
</section>

<section className="bg-ink text-white py-16">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center reveal">
<div className="flex flex-col items-center justify-center">
<p className="text-4xl md:text-5xl font-medium tracking-tight cnum" data-sfx="min" data-target="3">0min</p>
<p className="text-stone-400 text-xs mt-2 uppercase tracking-widest font-medium">최대 준비 시간</p>
</div>
<div className="flex flex-col items-center justify-center relative before:content-[''] before:absolute before:left-0 before:top-1/4 before:h-1/2 before:w-px before:bg-stone-800 hidden md:flex">
<p className="text-4xl md:text-5xl font-medium tracking-tight cnum" data-pfx="$3–" data-target="4">$3–0</p>
<p className="text-stone-400 text-xs mt-2 uppercase tracking-widest font-medium">1회 가격</p>
</div>
<div className="flex flex-col items-center justify-center relative before:content-[''] before:absolute before:left-0 before:top-1/4 before:h-1/2 before:w-px before:bg-stone-800 hidden md:flex">
<p className="text-4xl md:text-5xl font-medium tracking-tight cnum" data-target="0" id="stat-visitor-num">0</p>
<p className="text-stone-400 text-xs mt-2 uppercase tracking-widest font-medium">고객 경험</p>
</div>
<div className="flex flex-col items-center justify-center md:relative md:before:content-[''] md:before:absolute md:before:left-0 md:before:top-1/4 md:before:h-1/2 md:before:w-px md:before:bg-stone-800">
<p className="text-4xl md:text-5xl font-medium tracking-tight cnum" data-pfx="&gt;" data-sfx="g sugar" data-target="5">&gt;0g</p>
<p className="text-stone-400 text-xs mt-2 uppercase tracking-widest font-medium">저당 설계</p>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-200/50" id="builder">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal flex flex-col items-center">
<span className="text-xs tracking-widest bg-amber-100/50 text-amber-800 uppercase px-3 py-1 rounded-full font-medium mb-4 inline-block">Bowl Designer</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4 text-ink">나만의 Oats 시즈닝 설계</h2>
<p className="text-stone-500 text-base md:text-lg font-medium max-w-lg mx-auto">단 3번의 스텝으로, 실패하지 않는 완벽한 오트밀이 완성됩니다.</p>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

<div className="flex-1 space-y-6 lg:space-y-8">

<div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-stone-100 reveal" id="step1">
<div className="flex items-center gap-4 mb-6">
<span className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-sm font-medium flex-shrink-0">1</span>
<div>
<p className="text-xs text-stone-400 uppercase font-medium tracking-widest mb-0.5">Step 1</p>
<h3 className="font-medium text-xl tracking-tight text-ink leading-none">베이스 맛 선택</h3>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="base-card group cursor-pointer p-5 text-center border border-stone-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5 hover:border-stone-300 [&amp;.on]:border-sesame [&amp;.on]:bg-[#FFFBF2] [&amp;.on]:-translate-y-0.5 [&amp;.on]:shadow-xl [&amp;.on]:shadow-sesame/10" data-flavor="sweet" data-id="sweet" data-img="https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600" data-name="Sweet" data-price="5.00">
<div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-[.on]:scale-110 drop-shadow-sm">🍯</div>
<p className="font-medium text-base text-ink tracking-tight mb-1">Sweet</p>
<p className="text-sm text-stone-400 font-medium">달콤한 아침</p>
</div>
<div className="base-card group cursor-pointer p-5 text-center border border-stone-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5 hover:border-stone-300 [&amp;.on]:border-sesame [&amp;.on]:bg-[#FFFBF2] [&amp;.on]:-translate-y-0.5 [&amp;.on]:shadow-xl [&amp;.on]:shadow-sesame/10" data-flavor="savory" data-id="savory" data-img="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600" data-name="Savory" data-price="5.00">
<div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-[.on]:scale-110 drop-shadow-sm">🌶️</div>
<p className="font-medium text-base text-ink tracking-tight mb-1">Savory</p>
<p className="text-sm text-stone-400 font-medium">짭조름한 감칠맛</p>
</div>
<div className="base-card group cursor-pointer p-5 text-center border border-stone-200 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5 hover:border-stone-300 [&amp;.on]:border-sesame [&amp;.on]:bg-[#FFFBF2] [&amp;.on]:-translate-y-0.5 [&amp;.on]:shadow-xl [&amp;.on]:shadow-sesame/10 on" data-flavor="plain" data-id="plain" data-img="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=600" data-name="Plain" data-price="4.00">
<div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-[.on]:scale-110 drop-shadow-sm">🥣</div>
<p className="font-medium text-base text-ink tracking-tight mb-1">Plain</p>
<p className="text-sm text-stone-400 font-medium">깨끗한 담백함</p>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-stone-100 reveal" id="step2">
<div className="flex items-center gap-4 mb-2">
<span className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-sm font-medium flex-shrink-0">2</span>
<div className="flex-1">
<p className="text-xs text-stone-400 uppercase font-medium tracking-widest mb-0.5">Step 2</p>
<h3 className="font-medium text-xl tracking-tight text-ink leading-none flex items-center gap-2">
                토핑 선택 <span className="text-xs text-stone-400 font-normal bg-stone-100 px-2 py-0.5 rounded-full">Max 3</span>
</h3>
</div>
</div>
<div className="hidden mt-6 text-sm text-stone-400 font-medium py-4 text-center border border-dashed border-stone-200 rounded-xl" id="toppings-empty">
            먼저 베이스를 선택해주세요
          </div>
<div className="hidden mt-6" id="toppings-sweet">
<div className="flex flex-wrap gap-2.5">
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="단호박" data-price="1.00">🎃 단호박 <span className="text-xs text-stone-400 ml-1">+$1.00</span></button>
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="고구마" data-price="1.00">🍠 고구마 <span className="text-xs text-stone-400 ml-1">+$1.00</span></button>
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="콩가루" data-price="0.80">🫘 콩가루 <span className="text-xs text-stone-400 ml-1">+$0.80</span></button>
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="꿀" data-price="0.80">🍯 꿀 <span className="text-xs text-stone-400 ml-1">+$0.80</span></button>
</div>
</div>
<div className="hidden mt-6" id="toppings-savory">
<div className="flex flex-wrap gap-2.5">
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="미역" data-price="0.80">🌊 미역 <span className="text-xs text-stone-400 ml-1">+$0.80</span></button>
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="김치" data-price="1.50">🌶️ 김치 <span className="text-xs text-stone-400 ml-1">+$1.50</span></button>
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="버섯" data-price="1.20">🍄 버섯 <span className="text-xs text-stone-400 ml-1">+$1.20</span></button>
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="간장" data-price="0.50">🥢 간장 <span className="text-xs text-stone-400 ml-1">+$0.50</span></button>
</div>
</div>
<div className="block mt-6" id="toppings-plain">
<div className="flex flex-wrap gap-2.5">
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="그래놀라" data-price="1.20">🌾 그래놀라 <span className="text-xs text-stone-400 ml-1">+$1.20</span></button>
<button className="pill topping border border-stone-200 bg-white rounded-full px-4 py-2 text-sm font-medium hover:border-stone-400 text-stone-600" data-name="견과류" data-price="1.20">🥜 견과류 <span className="text-xs text-stone-400 ml-1">+$1.20</span></button>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-stone-100 reveal" id="step3">
<div className="flex items-center gap-4 mb-2">
<span className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-sm font-medium flex-shrink-0">3</span>
<div className="flex-1">
<p className="text-xs text-stone-400 uppercase font-medium tracking-widest mb-0.5 flex items-center gap-2">Step 3 <span className="font-normal text-[10px] bg-stone-100 px-1.5 py-0.5 rounded text-stone-500">Optional</span></p>
<h3 className="font-medium text-xl tracking-tight text-ink leading-none">Health Balance</h3>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3 mt-6" id="booster-area">
<div className="border border-stone-200 rounded-2xl p-4 cursor-pointer hover:border-stone-300 transition-colors bg-white booster-card flex items-start justify-between" data-emoji="💪" data-id="b1" data-name="프로틴" data-price="1.50">
<div className="flex items-center gap-3">
<span className="text-3xl drop-shadow-sm">💪</span>
<div className="flex flex-col">
<p className="font-medium text-base text-ink leading-tight">프로틴</p>
<p className="text-sm font-medium text-stone-400 mt-1">+$1.50</p>
</div>
</div>
<div className="bst-check w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center transition-colors"></div>
</div>
<div className="border border-stone-200 rounded-2xl p-4 cursor-pointer hover:border-stone-300 transition-colors bg-white booster-card flex items-start justify-between" data-emoji="🌿" data-id="b2" data-name="식이섬유+유산균" data-price="1.20">
<div className="flex items-center gap-3">
<span className="text-3xl drop-shadow-sm">🌿</span>
<div className="flex flex-col">
<p className="font-medium text-base text-ink leading-tight">식이섬유+유산균</p>
<p className="text-sm font-medium text-stone-400 mt-1">+$1.20</p>
</div>
</div>
<div className="bst-check w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center transition-colors"></div>
</div>
<div className="border border-stone-200 rounded-2xl p-4 cursor-pointer hover:border-stone-300 transition-colors bg-white booster-card flex items-start justify-between sm:col-span-2 md:col-span-1" data-emoji="💊" data-id="b3" data-name="비타민 포뮬러" data-price="1.30">
<div className="flex items-center gap-3">
<span className="text-3xl drop-shadow-sm">💊</span>
<div className="flex flex-col">
<p className="font-medium text-base text-ink leading-tight">비타민 포뮬러</p>
<p className="text-sm font-medium text-stone-400 mt-1">+$1.30</p>
</div>
</div>
<div className="bst-check w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center transition-colors"></div>
</div>
</div>
<button className="mt-8 w-full bg-ink text-white font-medium py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" id="complete-btn">
            나만의 시크릿 레시피 완성 <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="w-full lg:w-80 xl:w-96 flex-shrink-0 relative">
<div className="sticky top-24 bg-ink text-white rounded-[2rem] p-6 md:p-8 shadow-2xl flex flex-col min-h-[400px]">
<h4 className="text-xs font-medium text-stone-400 uppercase tracking-widest mb-6">Order Summary</h4>
<div className="relative rounded-2xl overflow-hidden mb-6 bg-stone-900 aspect-video flex items-center justify-center border border-stone-800" id="bowl-preview">
<img alt="" className="w-full h-full object-cover transition-opacity duration-500 opacity-100" id="bowl-img" src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=600"/>
<div className="text-xs font-medium text-stone-500 hidden flex-col items-center gap-2" id="bowl-placeholder">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
              베이스를 선택해 시작하세요
            </div>
</div>
<div className="text-sm flex-1 space-y-0">
<div className="flex justify-between items-center py-3 border-b border-stone-800/80" id="row-base">
<span className="text-white font-medium">Plain</span>
<span className="text-stone-300">$4.00</span>
</div>
<div className="flex justify-between items-start py-3 border-b border-stone-800/80" id="row-toppings">
<span className="text-stone-500 text-xs font-medium">토핑 미선택</span>
<span className="text-stone-600 text-xs">—</span>
</div>
<div className="flex justify-between items-start py-3" id="row-boosters">
<span className="text-stone-500 text-xs font-medium">부스터 미선택</span>
<span className="text-stone-600 text-xs">—</span>
</div>
</div>
<div className="border-t border-stone-800 pt-5 flex justify-between items-end mb-6 mt-4">
<span className="text-xs font-medium uppercase tracking-widest text-stone-400 mb-1">Total</span>
<span className="font-serif text-3xl font-medium text-white tracking-tight leading-none" id="total-price">$4.00</span>
</div>
<button className="w-full font-medium py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase bg-white text-ink shadow-md hover:bg-stone-100 cursor-pointer" id="order-btn">
            주문하기
          </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="plans">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="mb-16 reveal">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-ink mb-4">심플하고 똑똑한 플랜</h2>
<p className="text-stone-500 font-medium text-base">라이프스타일에 맞게 오트밀을 즐기는 가장 합리적인 방법</p>
</div>
<div className="grid md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto items-center">
<div className="border border-stone-200 rounded-[2rem] p-8 reveal bg-white">
<h4 className="font-medium text-sm text-stone-500 uppercase tracking-widest mb-3">Starter Pack</h4>
<p className="text-4xl font-medium tracking-tight mb-8 text-ink">$3.50<span className="text-sm font-medium text-stone-400"> / bowl</span></p>
<ul className="space-y-3 mb-8 text-sm text-stone-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:check-read-linear" width="16"></iconify-icon> 모든 베이스 선택 가능</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:check-read-linear" width="16"></iconify-icon> 토핑 최대 3개</li>
</ul>
<button className="plan-btn w-full py-3.5 rounded-xl border border-stone-200 text-sm font-medium text-ink hover:border-ink hover:bg-stone-50 transition-colors">시작하기</button>
</div>
<div className="bg-ink text-white rounded-[2rem] p-8 reveal shadow-xl md:scale-105 border border-stone-800 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sesame via-amber-400 to-rust"></div>
<h4 className="font-medium text-sm uppercase tracking-widest text-stone-400 mb-3 flex items-center justify-between">
          Infinite Plan <span className="bg-white/10 text-white text-[10px] px-2 py-0.5 rounded-full">BEST</span>
</h4>
<p className="text-4xl font-medium tracking-tight mb-8">$49<span className="text-sm font-medium text-stone-400"> / month</span></p>
<ul className="space-y-3 mb-8 text-sm text-stone-300 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-read-linear" width="16"></iconify-icon> 매일 1끼 제공 (월 30끼)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-read-linear" width="16"></iconify-icon> 부스터 옵션 1개 무료</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-read-linear" width="16"></iconify-icon> 무료 배송</li>
</ul>
<button className="plan-btn w-full py-3.5 rounded-xl bg-white text-ink text-sm font-medium hover:bg-stone-100 transition-colors">지금 구독하기</button>
</div>
<div className="border border-stone-200 rounded-[2rem] p-8 reveal bg-white">
<h4 className="font-medium text-sm text-stone-500 uppercase tracking-widest mb-3">Family Pack</h4>
<p className="text-4xl font-medium tracking-tight mb-8 text-ink">$89<span className="text-sm font-medium text-stone-400"> / month</span></p>
<ul className="space-y-3 mb-8 text-sm text-stone-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:check-read-linear" width="16"></iconify-icon> 매일 2끼 제공 (월 60끼)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-400" icon="solar:check-read-linear" width="16"></iconify-icon> 커스텀 패키징</li>
</ul>
<button className="plan-btn w-full py-3.5 rounded-xl border border-stone-200 text-sm font-medium text-ink hover:border-ink hover:bg-stone-50 transition-colors">가입하기</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="rankings">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal gap-4">
<div>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-ink mb-3">인기 볼 TOP</h2>
<p className="text-stone-500 font-medium text-base">다른 디자이너들이 완성한 베스트 조합을 확인하세요.</p>
</div>
<button className="text-sm font-medium uppercase tracking-widest text-stone-400 hover:text-ink transition-colors flex items-center gap-1">
        View All <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="rankings-grid">

<div className="group bg-white border border-stone-200 rounded-3xl overflow-hidden reveal hover:shadow-lg transition-shadow duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur border border-stone-200 text-ink text-sm font-medium flex items-center justify-center shadow-sm">1</div>
<button className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-stone-200 text-ink text-xs font-medium rounded-full px-3 py-1.5 heart-btn shadow-sm hover:bg-white transition-colors" data-count="12421">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="16"></iconify-icon><span>12.4k</span>
</button>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600"/>
</div>
<div className="p-5">
<h3 className="font-serif font-medium text-xl text-ink tracking-tight mb-1.5 leading-tight">Midnight Sea Umami</h3>
<p className="text-stone-500 text-sm font-medium leading-relaxed">Savory + 미역 + 버섯 + 프로틴</p>
</div>
</div>

<div className="group bg-white border border-stone-200 rounded-3xl overflow-hidden reveal hover:shadow-lg transition-shadow duration-300" style={{transitionDelay: '100ms'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur border border-stone-200 text-stone-500 text-sm font-medium flex items-center justify-center shadow-sm">2</div>
<button className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-stone-200 text-ink text-xs font-medium rounded-full px-3 py-1.5 heart-btn shadow-sm hover:bg-white transition-colors" data-count="10210">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="16"></iconify-icon><span>10.2k</span>
</button>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600"/>
</div>
<div className="p-5">
<h3 className="font-serif font-medium text-xl text-ink tracking-tight mb-1.5 leading-tight">Golden Autumn Glow</h3>
<p className="text-stone-500 text-sm font-medium leading-relaxed">Sweet + 단호박 + 고구마 + 식이섬유</p>
</div>
</div>

<div className="group bg-white border border-stone-200 rounded-3xl overflow-hidden reveal hover:shadow-lg transition-shadow duration-300" style={{transitionDelay: '200ms'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur border border-stone-200 text-stone-400 text-sm font-medium flex items-center justify-center shadow-sm">3</div>
<button className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-stone-200 text-ink text-xs font-medium rounded-full px-3 py-1.5 heart-btn shadow-sm hover:bg-white transition-colors" data-count="8104">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="16"></iconify-icon><span>8.1k</span>
</button>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=600"/>
</div>
<div className="p-5">
<h3 className="font-serif font-medium text-xl text-ink tracking-tight mb-1.5 leading-tight">Nutty Processor</h3>
<p className="text-stone-500 text-sm font-medium leading-relaxed">Plain + 견과류 + 그래놀라 + 비타민</p>
</div>
</div>

<div className="group bg-white border border-stone-200 rounded-3xl overflow-hidden reveal hover:shadow-lg transition-shadow duration-300" style={{transitionDelay: '300ms'}}>
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-white/90 backdrop-blur border border-stone-200 text-stone-400 text-sm font-medium flex items-center justify-center shadow-sm">4</div>
<button className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-stone-200 text-ink text-xs font-medium rounded-full px-3 py-1.5 heart-btn shadow-sm hover:bg-white transition-colors" data-count="7230">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="16"></iconify-icon><span>7.2k</span>
</button>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600"/>
</div>
<div className="p-5">
<h3 className="font-serif font-medium text-xl text-ink tracking-tight mb-1.5 leading-tight">Spicy Morning Kick</h3>
<p className="text-stone-500 text-sm font-medium leading-relaxed">Savory + 김치 + 버섯 + 식이섬유</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-14 reveal">
<h2 className="font-serif text-4xl font-medium tracking-tight text-ink mb-3">자주 묻는 질문</h2>
<p className="text-stone-500 text-base font-medium">서비스 이용에 대해 궁금한 점을 확인하세요.</p>
</div>
<div className="space-y-2 border-y border-stone-200 py-2">
<div className="faq-item border-b border-stone-100 last:border-0 reveal">
<button className="faq-q w-full flex items-center justify-between py-5 text-left font-medium text-lg text-ink hover:text-stone-600 transition-colors tracking-tight">
<span>준비하는 데 정말 3분이면 되나요?</span>
<iconify-icon className="faq-icon text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="faq-body text-stone-500 text-base font-medium leading-relaxed px-1">
<p>네, SEOULMATE 시즈닝은 물에 빠르게 녹는 초미세 공법으로 제작되었습니다. 뜨거운 물이나 우유를 붓고 가볍게 젓기만 하면 3분 만에 프리미엄 한 끼가 완성됩니다.</p>
</div>
</div>
<div className="faq-item border-b border-stone-100 last:border-0 reveal">
<button className="faq-q w-full flex items-center justify-between py-5 text-left font-medium text-lg text-ink hover:text-stone-600 transition-colors tracking-tight">
<span>Health Balance 옵션은 어떤 건가요?</span>
<iconify-icon className="faq-icon text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="faq-body text-stone-500 text-base font-medium leading-relaxed px-1">
<p>단순한 맛을 넘어 영양 밸런스를 맞추기 위한 고농축 파우더입니다. 프로틴, 식이섬유+유산균, 비타민 등 본인의 라이프스타일에 필요한 건강 요소를 맞춤형으로 추가할 수 있습니다.</p>
</div>
</div>
<div className="faq-item border-b border-stone-100 last:border-0 reveal">
<button className="faq-q w-full flex items-center justify-between py-5 text-left font-medium text-lg text-ink hover:text-stone-600 transition-colors tracking-tight">
<span>정기 구독은 언제든 해지할 수 있나요?</span>
<iconify-icon className="faq-icon text-stone-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="faq-body text-stone-500 text-base font-medium leading-relaxed px-1">
<p>물론입니다. 마이페이지에서 클릭 한 번으로 언제든지 위약금 없이 구독을 일시 정지하거나 해지할 수 있습니다.</p>
</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] bg-ink/40 backdrop-blur-md items-center justify-center p-4" id="modal">
<div className="bg-white rounded-[2rem] max-w-sm w-full p-8 relative shadow-2xl animate-fade-up border border-stone-100">
<button className="absolute top-5 right-5 text-stone-400 hover:text-ink transition-colors bg-stone-50 p-1.5 rounded-full" id="modal-x">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="text-center mb-6 mt-4">
<div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-stone-100 shadow-sm text-4xl drop-shadow-sm">🥣</div>
<h3 className="font-serif text-2xl font-medium tracking-tight text-ink mb-1">Your Secret Recipe</h3>
<p className="text-sm text-stone-400 font-medium">완성된 레시피의 영양 밸런스입니다.</p>
</div>
<div className="space-y-4 mb-8 bg-stone-50 p-4 rounded-xl border border-stone-100">
<div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500 mb-1.5">
<span>Protein</span><span className="text-ink">12.5g</span>
</div>
<div className="h-1 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-ink rounded-full" style={{width: '65%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500 mb-1.5">
<span>Fiber</span><span className="text-ink">6.1g</span>
</div>
<div className="h-1 bg-stone-200 rounded-full overflow-hidden">
<div className="h-full bg-stone-400 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 border border-stone-200 text-ink font-medium rounded-xl py-3 text-sm hover:bg-stone-50 transition-colors" id="modal-redesign">다시 설계</button>
<button className="flex-1 bg-ink text-white font-medium rounded-xl py-3 text-sm hover:bg-stone-800 transition-colors shadow-sm" id="modal-share">랭킹 등록</button>
</div>
</div>
</div>

<div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] bg-ink text-white px-6 py-3 rounded-full shadow-xl opacity-0 transition-opacity duration-300 pointer-events-none text-sm font-medium flex items-center gap-2" id="order-toast">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
  정식 출시 준비 중입니다! 조금만 기다려주세요.
</div>
<footer className="bg-white py-12 text-center border-t border-stone-200">
<div className="flex items-center justify-center gap-2 mb-4 text-stone-300">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-stone-400 text-xs font-medium tracking-wide uppercase">© 2025 SEOULMATE by Daesang Corp.</p>
</footer>


    </>
  );
}
