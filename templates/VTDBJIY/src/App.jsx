import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons({strokeWidth:1.5});

    /* Pricing */
    const pricing={
      oneTime:{1:{orig:39,final:34.99,save:10},2:{orig:78,final:59.98,save:18},3:{orig:117,final:79.97,save:25}},
      sub:{1:{orig:39,final:29.74,save:23},2:{orig:78,final:50.98,save:35},3:{orig:117,final:67.97,save:42}}
    };
    const tiers=document.querySelectorAll('.tier'),
          subToggle=document.getElementById('subToggle'),
          ctaBtn=document.getElementById('ctaButton'),
          ctaPrice=document.getElementById('ctaPrice'),
          tierSummary=document.getElementById('tierSummary'),
          savingsBar=document.getElementById('savingsBar');
    let selectedMonths=1;

    const saveCalc=(o,f)=>({diff:(o-f).toFixed(2),pct:Math.round(((o-f)/o)*100)});

    function renderPrices(){
      const mode=subToggle.checked?'sub':'oneTime';
      tiers.forEach(t=>{
        const m=t.dataset.months,
              {orig,final,save}=pricing[mode][m],
              {diff,pct}=saveCalc(orig,final);
        t.querySelector('.line-through').textContent=`$${orig.toFixed(2)}`;
        t.querySelector('.tier-final-price').textContent=`$${final.toFixed(2)}`;
        t.querySelector('.tier-save-pct').textContent=`${pct}%`;
      });
      const {final,save}=pricing[mode][selectedMonths];
      ctaPrice.textContent=`Only $${final.toFixed(2)} today`;
      const tierText=selectedMonths==1?'Try First':selectedMonths==2?'Most Popular':'Best Value';
      const subCopy=subToggle.checked?
        (selectedMonths==3?'Secure My Best Value Now':'Subscribe & Save 15%'):
        `Get My ${selectedMonths}-Month Supply`;
      ctaBtn.textContent=subCopy;
      tierSummary.textContent=`Buy ${selectedMonths}, Save ${pricing[mode][selectedMonths].save}%`;
      savingsBar.style.width=`${(selectedMonths/3)*100}%`;
    }

    tiers.forEach(t=>t.addEventListener('click',()=>{
      tiers.forEach(el=>el.classList.remove('border-teal-600','ring-2','ring-teal-200','bg-teal-50/20'));
      t.classList.add('border-teal-600','ring-2','ring-teal-200','bg-teal-50/20');
      t.querySelector('input').checked=true;
      selectedMonths=parseInt(t.dataset.months);
      renderPrices();
    }));
    subToggle.addEventListener('change',()=>{
      const benefits=document.getElementById('toggleBenefits');
      benefits.textContent=subToggle.checked?'✅ Save 15% 🚚 Free Shipping 🔁 Flexible Delivery':'One-time purchase • No commitment';
      renderPrices();
    });
    tiers[0].click();

    /* Scroll shadow */
    window.addEventListener('scroll',()=>document.getElementById('stickyCTA').classList.toggle('shadow-lg',window.scrollY>40));

    /* Intersection animations */
    const observer=new IntersectionObserver((e)=>{
      e.forEach(({isIntersecting,target})=>{
        if(isIntersecting){target.classList.add('opacity-100','translate-y-0');observer.unobserve(target);}
      });
    },{threshold:.15});
    document.querySelectorAll('[data-animate]').forEach(el=>{
      el.classList.add('opacity-0','translate-y-4','transition','duration-700','ease-out');observer.observe(el);
    });

    /* Chart */
    const ctx=document.getElementById('macroChart');
    if(ctx){
      new Chart(ctx,{type:'doughnut',data:{labels:['Protein','Fat','Fiber','Other'],datasets:[{data:[35,25,10,30],backgroundColor:['#14b8a6','#2dd4bf','#5eead4','#d4d4d4'],borderWidth:0}]},options:{plugins:{legend:{display:false}},cutout:'60%'}});
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
<span className="font-semibold tracking-tight text-lg">CV</span>
<nav className="hidden md:flex gap-8 text-sm font-medium">
<a className="hover:text-teal-600 transition-colors" href="#">Products</a>
<a className="hover:text-teal-600 transition-colors" href="#">About</a>
<a className="hover:text-teal-600 transition-colors" href="#">Learn</a>
</nav>
<button className="md:hidden p-2 rounded hover:bg-neutral-100">
<i className="w-5 h-5 stroke-1.5" data-lucide="menu"></i>
</button>
</div>
</header>
<main className="flex-1 w-full">

<section className="max-w-7xl mx-auto px-4 pt-10 lg:pt-16 grid gap-10 lg:grid-cols-12">

<div className="lg:col-span-7 space-y-6">
<div className="w-full overflow-hidden rounded-xl bg-neutral-50 shadow-sm" data-animate="">
<img alt="Canine Vitality Chews main" className="w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="grid grid-cols-3 gap-4">
<img alt="" className="rounded-lg object-cover aspect-square cursor-pointer hover:ring-2 hover:ring-teal-500 transition" data-animate="" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" style={{transitionDelay: '.05s'}}/>
<img alt="" className="rounded-lg object-cover aspect-square cursor-pointer hover:ring-2 hover:ring-teal-500 transition" data-animate="" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" style={{transitionDelay: '.1s'}}/>
<img alt="" className="rounded-lg object-cover aspect-square cursor-pointer hover:ring-2 hover:ring-teal-500 transition" data-animate="" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" style={{transitionDelay: '.15s'}}/>
</div>
</div>

<aside className="lg:col-span-5" data-animate="" style={{transitionDelay: '.1s'}}>
<section className="w-full max-w-md lg:max-w-none px-4 lg:px-0 pt-6 lg:pt-0 space-y-6" id="buy-box">

<div className="flex items-center gap-2 text-sm font-medium">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-600">
<span className="animate-ping inline-block w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
              Selling Fast
            </span>
<span className="text-neutral-500">• 10,000+ happy pets</span>
</div>
<p className="text-xs text-rose-600 font-semibold flex items-center gap-1">
<i className="w-4 h-4 stroke-1.5" data-lucide="alert-circle"></i> Only 12 left at this price • Order within 2 hrs to ship today
          </p>

<div className="flex items-center gap-4">
<img alt="Happy dog" className="w-20 h-20 rounded-lg object-cover shadow-sm" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<h1 className="text-2xl tracking-tight font-semibold">Canine Vitality Chews</h1>
<p className="text-xs text-neutral-500">Daily wellness bites for healthier, happier dogs</p>
</div>
</div>

<div className="space-y-2" id="toggle-wrap">
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 bg-neutral-50">
<span className="text-sm font-medium flex items-center gap-1" id="toggleLabelOT">
<i className="w-4 h-4 stroke-1.5" data-lucide="shopping-bag"></i> One-time
              </span>
<label className="relative inline-flex items-center cursor-pointer select-none">
<input className="sr-only peer" id="subToggle" type="checkbox"/>
<div className="w-12 h-6 bg-neutral-300 rounded-full peer-checked:bg-teal-600 transition-colors"></div>
<div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-6 transition-transform"></div>
</label>
<span className="text-sm font-medium flex items-center gap-1 text-teal-600" id="toggleLabelSub">
<i className="w-4 h-4 stroke-1.5" data-lucide="repeat"></i> Subscribe
              </span>
</div>
<p className="text-xs text-neutral-600 flex flex-wrap gap-2" id="toggleBenefits">
              ✅ Save 15% 🚚 Free Shipping 🔁 Flexible Delivery
            </p>
</div>

<div className="space-y-4" id="tiers">
<label className="tier block p-4 rounded-xl border-2 border-neutral-200 hover:border-teal-600 transition-colors cursor-pointer flex items-center justify-between relative overflow-hidden" data-months="1">
<span className="absolute top-0 right-0 bg-neutral-800 text-white text-[10px] px-1.5 py-0.5 rounded-bl">Try First</span>
<div className="flex items-start gap-2">
<span className="text-xl">💡</span>
<div>
<p className="font-medium">1-Month Supply</p>
<p className="text-xs text-neutral-500">30 chews / 30-day supply • Save <span className="tier-save-pct">10%</span></p>
</div>
</div>
<div className="text-right">
<p className="line-through text-xs text-neutral-400">$39.00</p>
<p className="text-lg font-semibold tracking-tight tier-final-price">$34.99</p>
</div>
<input className="sr-only" name="plan" type="radio"/>
</label>
<label className="tier block p-4 rounded-xl border-2 border-neutral-200 hover:border-teal-600 transition-colors cursor-pointer flex items-center justify-between relative overflow-hidden" data-months="2">
<span className="absolute top-0 right-0 bg-teal-600 text-white text-[10px] px-1.5 py-0.5 rounded-bl">Most Popular</span>
<div className="flex items-start gap-2">
<span className="text-xl">✅</span>
<div>
<p className="font-medium">2-Month Supply</p>
<p className="text-xs text-neutral-500">60 chews / 60-day supply • Save <span className="tier-save-pct">23%</span></p>
</div>
</div>
<div className="text-right">
<p className="line-through text-xs text-neutral-400">$78.00</p>
<p className="text-lg font-semibold tracking-tight tier-final-price">$59.98</p>
</div>
<input className="sr-only" name="plan" type="radio"/>
</label>
<label className="tier block p-4 rounded-xl border-2 border-neutral-200 hover:border-teal-600 transition-colors cursor-pointer flex items-center justify-between relative overflow-hidden" data-months="3">
<span className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] px-1.5 py-0.5 rounded-bl">Best Value</span>
<div className="flex items-start gap-2">
<span className="text-xl">📦</span>
<div>
<p className="font-medium">3-Month Supply</p>
<p className="text-xs text-neutral-500">90 chews / 90-day supply • Save <span className="tier-save-pct">32%</span></p>
</div>
</div>
<div className="text-right">
<p className="line-through text-xs text-neutral-400">$117.00</p>
<p className="text-lg font-semibold tracking-tight tier-final-price">$79.97</p>
</div>
<input className="sr-only" name="plan" type="radio"/>
</label>
</div>

<div className="space-y-2 pt-2">
<p className="text-xs text-center font-medium text-neutral-700" id="tierSummary">Buy 1, Save 10%</p>
<div className="relative h-2 bg-neutral-200 rounded-full overflow-hidden">
<div className="absolute left-0 top-0 h-full bg-teal-600" id="savingsBar" style={{width: '33%'}}></div>
</div>
</div>

<div className="divide-y divide-neutral-200 border rounded-xl">
<div className="flex items-center gap-2 p-3">
<i className="w-5 h-5 stroke-1.5" data-lucide="truck"></i>
<p className="text-xs">Fast &amp; Free Shipping on orders $50+</p>
</div>
<div className="flex items-center gap-2 p-3">
<i className="w-5 h-5 stroke-1.5" data-lucide="refresh-cw"></i>
<p className="text-xs">Cancel anytime, no fees</p>
</div>
<div className="flex items-center gap-2 p-3">
<i className="w-5 h-5 stroke-1.5" data-lucide="star"></i>
<p className="text-xs">4.8/5.0 (2,341 Reviews)</p>
</div>
</div>
</section>
</aside>
</section>

<section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
<div className="text-center max-w-2xl mx-auto" data-animate="">
<h2 className="text-3xl font-semibold tracking-tight">Why Dogs Love Them</h2>
<p className="mt-2 text-neutral-600">Scientifically formulated with premium ingredients that support joint health, digestion, and overall wellness.</p>
<p className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
<i className="w-3.5 h-3.5 stroke-1.5" data-lucide="paw-print"></i> First time here? Start small — cancel anytime
        </p>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div className="p-6 rounded-xl border bg-neutral-50" data-animate="" style={{transitionDelay: '.05s'}}>
<i className="w-8 h-8 stroke-1.5 text-teal-600 mb-4" data-lucide="heart-pulse"></i>
<h3 className="font-medium">Joint Support</h3>
<p className="text-sm text-neutral-600 mt-1">Glucosamine &amp; MSM help maintain mobility.</p>
</div>
<div className="p-6 rounded-xl border bg-neutral-50" data-animate="" style={{transitionDelay: '.1s'}}>
<i className="w-8 h-8 stroke-1.5 text-teal-600 mb-4" data-lucide="stethoscope"></i>
<h3 className="font-medium">Immunity Boost</h3>
<p className="text-sm text-neutral-600 mt-1">Rich antioxidants to strengthen defenses.</p>
</div>
<div className="p-6 rounded-xl border bg-neutral-50" data-animate="" style={{transitionDelay: '.15s'}}>
<i className="w-8 h-8 stroke-1.5 text-teal-600 mb-4" data-lucide="bowl"></i>
<h3 className="font-medium">Gut Health</h3>
<p className="text-sm text-neutral-600 mt-1">Probiotics for smoother digestion.</p>
</div>
<div className="p-6 rounded-xl border bg-neutral-50" data-animate="" style={{transitionDelay: '.2s'}}>
<i className="w-8 h-8 stroke-1.5 text-teal-600 mb-4" data-lucide="sparkles"></i>
<h3 className="font-medium">Glowing Coat</h3>
<p className="text-sm text-neutral-600 mt-1">Omega-3s promote shiny fur.</p>
</div>
</div>
</section>

<section className="bg-neutral-50 py-16">
<div className="max-w-5xl mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
<div data-animate="">
<h2 className="text-3xl font-semibold tracking-tight">Nutritional Breakdown</h2>
<p className="mt-2 text-neutral-600 text-sm">Balanced macros to keep tails wagging.</p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-teal-600"></span> Protein 35%</li>
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-teal-400"></span> Fat 25%</li>
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-teal-200"></span> Fiber 10%</li>
<li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-neutral-300"></span> Others 30%</li>
</ul>
</div>
<div className="w-full max-w-sm mx-auto" data-animate="" style={{transitionDelay: '.1s'}}>
<div><canvas id="macroChart"></canvas></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16 space-y-8">
<div className="flex items-center justify-between" data-animate="">
<h2 className="text-3xl font-semibold tracking-tight">Happy Paws Club</h2>
<span className="text-sm text-neutral-600">4.8 / 5 • 2,341 reviews</span>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="border rounded-xl p-6 space-y-4" data-animate="" style={{transitionDelay: '.05s'}}>
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<h4 className="font-medium text-sm">Lena M.</h4>
</div>
<p className="text-sm text-neutral-700">“My senior lab runs like a puppy again! 🐾 These chews are magic.”</p>
</div>
<div className="border rounded-xl p-6 space-y-4" data-animate="" style={{transitionDelay: '.1s'}}>
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<h4 className="font-medium text-sm">Jason P.</h4>
</div>
<p className="text-sm text-neutral-700">“Noticeable improvement in coat shine ✨ within weeks.”</p>
</div>
<div className="border rounded-xl p-6 space-y-4" data-animate="" style={{transitionDelay: '.15s'}}>
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<h4 className="font-medium text-sm">Nova &amp; Kim</h4>
</div>
<p className="text-sm text-neutral-700">“No more tummy issues. Plus, she loves the taste! 😋”</p>
</div>
</div>
</section>

<section className="bg-neutral-50 py-16">
<div className="max-w-3xl mx-auto px-4 space-y-8">
<h2 className="text-3xl font-semibold tracking-tight text-center" data-animate="">Frequently Asked Questions</h2>
<div className="divide-y divide-neutral-200 border rounded-xl" data-animate="" style={{transitionDelay: '.05s'}}>
<details className="group p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium">How many chews per day?</span>
<i className="w-5 h-5 stroke-1.5 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="pt-4 text-sm text-neutral-600">We recommend 1 chew per 25lbs of body weight.</p>
</details>
<details className="group p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium">Are they grain-free?</span>
<i className="w-5 h-5 stroke-1.5 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="pt-4 text-sm text-neutral-600">Yes, our chews contain zero grains, soy, or artificial flavors.</p>
</details>
<details className="group p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium">When will I see results?</span>
<i className="w-5 h-5 stroke-1.5 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
</summary>
<p className="pt-4 text-sm text-neutral-600">Most pups feel improvements within 2–4 weeks of consistent use.</p>
</details>
</div>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white px-4 py-3" id="stickyCTA">
<button className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-500 transition-colors text-center font-semibold tracking-tight text-base" id="ctaButton">Add to Cart</button>
<p className="text-xs text-center mt-1" id="ctaPrice">Only $34.99 today</p>
<p className="text-[11px] text-center text-neutral-400 mt-0.5" id="ctaReassurance">Most dogs see results in 2–4 weeks — risk-free</p>
</div>



    </>
  );
}
