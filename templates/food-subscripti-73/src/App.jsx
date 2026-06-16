import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Language Toggle Logic
            const langToggle = document.getElementById('lang-toggle');
            let isKo = false;
            
            const updateLanguage = () => {
                document.querySelectorAll('.en-text').forEach(el => el.style.display = isKo ? 'none' : '');
                document.querySelectorAll('.ko-text').forEach(el => el.style.display = isKo ? '' : 'none');
            };

            langToggle.addEventListener('click', () => {
                isKo = !isKo;
                updateLanguage();
            });

            // 2. Builder Interaction Logic
            const baseOptions = document.querySelectorAll('.base-option');
            const toppingBtns = document.querySelectorAll('.topping-btn');
            const summaryItems = document.getElementById('summary-items');
            const totalPriceEl = document.getElementById('total-price');
            
            // Initial Builder State
            let state = {
                base: { id: 'base-1', name: 'Classic Rolled Base', desc: 'Almond Milk', price: 5.00 },
                toppings: new Map([
                    ['top-1', { name: 'Wild Blueberries', desc: 'Antioxidant boost', price: 1.50 }],
                    ['top-3', { name: 'Chia Seeds', desc: 'Omega-3', price: 0.50 }]
                ])
            };

            const formatPrice = (price) => '$' + price.toFixed(2);

            const renderSummary = () => {
                let total = state.base.price;
                let html = `
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <p class="text-sm font-semibold text-stone-900">${state.base.name}</p>
                            <p class="text-xs text-stone-500">${state.base.desc}</p>
                        </div>
                        <span class="text-sm font-medium text-stone-900">${formatPrice(state.base.price)}</span>
                    </div>
                `;

                state.toppings.forEach(top => {
                    total += top.price;
                    html += `
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <p class="text-sm font-semibold text-stone-900">${top.name}</p>
                                <p class="text-xs text-stone-500">${top.desc}</p>
                            </div>
                            <span class="text-sm font-medium text-stone-900">${formatPrice(top.price)}</span>
                        </div>
                    `;
                });

                summaryItems.innerHTML = html;
                totalPriceEl.innerText = formatPrice(total);
            };

            baseOptions.forEach(opt => {
                opt.addEventListener('click', () => {
                    baseOptions.forEach(o => {
                        o.classList.remove('border-2', 'border-stone-900', 'bg-stone-50/50');
                        o.classList.add('border', 'border-stone-200', 'bg-white', 'hover:border-stone-400');
                        const check = o.querySelector('.check-icon');
                        if(check) check.classList.add('hidden');
                    });
                    
                    opt.classList.add('border-2', 'border-stone-900', 'bg-stone-50/50');
                    opt.classList.remove('border', 'border-stone-200', 'bg-white', 'hover:border-stone-400');
                    const check = opt.querySelector('.check-icon');
                    if(check) check.classList.remove('hidden');

                    state.base = {
                        id: opt.dataset.id,
                        name: opt.dataset.name,
                        desc: opt.dataset.desc,
                        price: parseFloat(opt.dataset.price)
                    };
                    renderSummary();
                });
            });

            toppingBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = btn.dataset.id;
                    const priceSpan = btn.querySelector('.price-span');
                    
                    if (state.toppings.has(id)) {
                        state.toppings.delete(id);
                        btn.classList.remove('border-stone-900', 'bg-stone-900', 'text-white');
                        btn.classList.add('border-stone-200', 'bg-white', 'text-stone-700', 'hover:border-stone-400');
                        if(priceSpan) {
                            priceSpan.classList.remove('text-stone-300', 'opacity-70');
                            priceSpan.classList.add('text-stone-400');
                        }
                    } else {
                        state.toppings.set(id, {
                            name: btn.dataset.name,
                            desc: btn.dataset.desc,
                            price: parseFloat(btn.dataset.price)
                        });
                        btn.classList.add('border-stone-900', 'bg-stone-900', 'text-white');
                        btn.classList.remove('border-stone-200', 'bg-white', 'text-stone-700', 'hover:border-stone-400');
                        if(priceSpan) {
                            priceSpan.classList.add('text-stone-300', 'opacity-70');
                            priceSpan.classList.remove('text-stone-400');
                        }
                    }
                    renderSummary();
                });
            });

            renderSummary();

            // 3. Real-time Rankings Logic
            // Setting low initial seed counts so user clicks immediately affect rankings
            const rankingData = [
                {
                    id: 'seed-1',
                    enName: 'The Morning Glow',
                    koName: '모닝 글로우',
                    desc: 'Steel cut oats, wild blueberries, chia seeds, and maple syrup.',
                    baseId: 'base-2',
                    toppingIds: ['top-1', 'top-3', 'top-4'],
                    count: 3, 
                    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600',
                    tags: ['Sweet', 'Antioxidant']
                },
                {
                    id: 'seed-2',
                    enName: 'Nutty Professor',
                    koName: '너티 프로페서',
                    desc: 'Rolled oats, toasted pecans, and a touch of maple syrup.',
                    baseId: 'base-1',
                    toppingIds: ['top-2', 'top-4'],
                    count: 2,
                    image: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&q=80&w=600',
                    tags: ['Protein', 'Savory']
                },
                {
                    id: 'seed-3',
                    enName: 'Cacao Zen',
                    koName: '카카오 젠',
                    desc: 'Classic rolled oats, chia seeds, and cacao nibs.',
                    baseId: 'base-1',
                    toppingIds: ['top-3', 'top-5'],
                    count: 1,
                    image: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&q=80&w=600',
                    tags: ['Energy', 'Vegan']
                }
            ];

            const getSignature = (baseId, toppingIds) => `${baseId}|${toppingIds.sort().join(',')}`;

            const renderRankings = () => {
                const grid = document.getElementById('ranking-grid');
                grid.innerHTML = '';
                
                rankingData.sort((a, b) => b.count - a.count);
                const top3 = rankingData.slice(0, 3);
                
                top3.forEach((bowl, index) => {
                    const rank = index + 1;
                    const tagHTML = bowl.tags.map(t => `<span class="text-[10px] uppercase tracking-wider font-semibold text-stone-300 bg-stone-700/50 px-2 py-1 rounded">${t}</span>`).join('');
                    
                    const card = `
                    <div class="group bg-stone-800/50 rounded-2xl overflow-hidden border border-stone-700/50 hover:border-stone-500 transition-colors animate-[fadeIn_0.5s_ease-out]">
                        <div class="relative aspect-[4/3] overflow-hidden">
                            <div class="absolute top-4 left-4 z-10 bg-${rank === 1 ? 'white/90 text-stone-900 shadow-sm' : 'stone-700/80 text-white'} backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-md transition-all">
                                #${rank} Pick
                            </div>
                            <img src="${bowl.image}" alt="Oatmeal Bowl" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer">
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-2">
                                <h3 class="text-lg font-semibold tracking-tight text-white">
                                    <span class="en-text">${bowl.enName}</span>
                                    <span class="ko-text" style="display:none;">${bowl.koName}</span>
                                </h3>
                                <div class="flex items-center gap-1 text-xs font-medium text-amber-400">
                                    <iconify-icon icon="solar:heart-bold"></iconify-icon> ${bowl.count.toLocaleString()}
                                </div>
                            </div>
                            <p class="text-xs text-stone-400 mb-4 line-clamp-2">${bowl.desc}</p>
                            <div class="flex items-center gap-2">
                                ${tagHTML}
                            </div>
                        </div>
                    </div>
                    `;
                    grid.insertAdjacentHTML('beforeend', card);
                });

                updateLanguage(); // Apply current language state to newly rendered cards
            };

            // Initial render
            renderRankings();

            // Checkout Event
            const checkoutBtn = document.getElementById('checkout-btn');
            
            checkoutBtn.addEventListener('click', () => {
                const currentBaseId = state.base.id;
                const currentToppingIds = Array.from(state.toppings.keys());
                const sig = getSignature(currentBaseId, currentToppingIds);
                
                let found = false;
                for(let bowl of rankingData) {
                    if(getSignature(bowl.baseId, bowl.toppingIds) === sig) {
                        bowl.count++;
                        found = true;
                        break;
                    }
                }
                
                if(!found) {
                    const baseName = state.base.name.replace(' Base', '');
                    const toppingNames = Array.from(state.toppings.values()).map(t => t.name.toLowerCase());
                    const desc = `${baseName} with ` + (toppingNames.length > 0 ? toppingNames.join(', ') : 'no toppings') + '.';
                    
                    rankingData.push({
                        id: 'custom-' + Date.now(),
                        enName: 'Custom ' + baseName,
                        koName: '커스텀 ' + (baseName.includes('Rolled') ? '롤드' : '스틸컷'),
                        desc: desc,
                        baseId: currentBaseId,
                        toppingIds: currentToppingIds,
                        count: 1,
                        image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=600',
                        tags: ['New', 'Custom']
                    });
                }
                
                renderRankings();

                // Visual Feedback on Button
                const originalContent = checkoutBtn.innerHTML;
                checkoutBtn.innerHTML = `
                    <span class="en-text">Added to Ranks!</span>
                    <span class="ko-text" style="display:none;">랭킹 반영 완료!</span> 
                    <iconify-icon icon="solar:check-circle-bold" class="text-lg"></iconify-icon>
                `;
                checkoutBtn.classList.remove('bg-stone-900', 'hover:bg-stone-800');
                checkoutBtn.classList.add('bg-green-600', 'hover:bg-green-700');
                updateLanguage();

                setTimeout(() => {
                    checkoutBtn.innerHTML = originalContent;
                    checkoutBtn.classList.add('bg-stone-900', 'hover:bg-stone-800');
                    checkoutBtn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    updateLanguage();
                }, 2000);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#FCFBFA]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-sm font-semibold tracking-[0.15em] text-stone-900 uppercase" href="#">
                    Seoulmate
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#builder">
<span className="en-text">Builder</span><span className="ko-text" style={{display: 'none'}}>빌더</span>
</a>
<a className="hover:text-stone-900 transition-colors" href="#ranking">
<span className="en-text">Rankings</span><span className="ko-text" style={{display: 'none'}}>랭킹</span>
</a>
<a className="hover:text-stone-900 transition-colors" href="#pricing">
<span className="en-text">Plans</span><span className="ko-text" style={{display: 'none'}}>플랜</span>
</a>
</div>
</div>
<div className="flex items-center gap-4">

<button className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors bg-stone-100/50 px-2.5 py-1.5 rounded-full border border-stone-200/50 cursor-pointer" id="lang-toggle">
<iconify-icon className="text-sm" icon="solar:global-linear"></iconify-icon>
<span className="en-text">KO / EN</span>
<span className="ko-text" style={{display: 'none'}}>EN / KO</span>
</button>
<a className="hidden sm:inline-flex items-center justify-center text-xs font-medium bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-colors" href="#builder">
<span className="en-text">Start Building</span><span className="ko-text" style={{display: 'none'}}>시작하기</span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium text-stone-600 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="en-text">Now available in Seoul</span><span className="ko-text" style={{display: 'none'}}>서울 서비스 오픈</span>
</span>
<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-medium text-stone-900 mb-6 font-serif leading-tight">
<span className="en-text">Design Your Morning,<br/><span className="italic text-stone-500">Perfectly Curated.</span></span>
<span className="ko-text" style={{display: 'none'}}>당신의 아침을 디자인하세요,<br/><span className="italic text-stone-500">완벽하게 큐레이션된.</span></span>
</h1>
<p className="text-base md:text-lg text-stone-500 mb-10 max-w-2xl mx-auto whitespace-pre-line font-medium leading-relaxed">
<span className="en-text">Hyper-personalized oatmeal crafted for your taste and nutrition.
                Build your perfect bowl, join the community, and start your day right.</span>
<span className="ko-text" style={{display: 'none'}}>개인의 취향과 영양에 맞춘 초개인화 오트밀.
                나만의 완벽한 보울을 만들고 활기찬 하루를 시작해보세요.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-stone-800 transition-all hover:scale-[1.02]" href="#builder">
<span className="en-text">Build Your Bowl</span><span className="ko-text" style={{display: 'none'}}>보울 만들기</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium bg-white text-stone-900 border border-stone-200 px-6 py-3 rounded-full hover:bg-stone-50 transition-all" href="#ranking">
<span className="en-text">Explore Rankings</span><span className="ko-text" style={{display: 'none'}}>랭킹 둘러보기</span>
</a>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-50/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>
</section>

<section className="py-24 px-6 relative bg-[#FCFBFA] border-t border-stone-200" id="builder">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-stone-900 mb-4 font-serif">
<span className="en-text">Curate Your Bowl</span><span className="ko-text" style={{display: 'none'}}>나만의 보울 큐레이팅</span>
</h2>
<p className="text-sm text-stone-500 font-medium">
<span className="en-text">Step-by-step selection for your perfect morning.</span>
<span className="ko-text" style={{display: 'none'}}>완벽한 아침을 위한 단계별 선택.</span>
</p>
</div>
<div className="flex flex-col lg:flex-row gap-10">

<div className="w-full lg:w-2/3 space-y-6">

<div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900">
<span className="en-text">Step 1: The Base</span><span className="ko-text" style={{display: 'none'}}>1단계: 베이스 선택</span>
</h3>
<p className="text-xs text-stone-500 mt-1">Select your core oats and liquid base.</p>
</div>
<span className="text-xs font-medium bg-stone-100 text-stone-600 px-2.5 py-1 rounded-md">Required</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="base-option relative rounded-2xl border-2 border-stone-900 bg-stone-50/50 p-4 cursor-pointer transition-all" data-desc="Almond Milk" data-id="base-1" data-name="Classic Rolled Base" data-price="5.00">
<div className="check-icon absolute top-4 right-4 text-stone-900">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-2">
<img alt="Rolled Oats" className="w-12 h-12 rounded-full object-cover border border-stone-200" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<h4 className="text-sm font-semibold text-stone-900">Classic Rolled</h4>
<p className="text-xs text-stone-500">Almond Milk Base</p>
</div>
</div>
<p className="text-xs text-stone-600 mt-3 font-medium">Smooth texture, mildly nutty flavor. Perfect for traditionalists.</p>
</div>

<div className="base-option relative rounded-2xl border border-stone-200 bg-white p-4 cursor-pointer hover:border-stone-400 transition-all" data-desc="Oat Milk" data-id="base-2" data-name="Steel Cut Base" data-price="6.00">
<div className="check-icon absolute top-4 right-4 text-stone-900 hidden">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-2">
<img alt="Steel Cut" className="w-12 h-12 rounded-full object-cover border border-stone-200" referrerpolicy="no-referrer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h4 className="text-sm font-semibold text-stone-900">Steel Cut</h4>
<p className="text-xs text-stone-500">Oat Milk Base</p>
</div>
</div>
<p className="text-xs text-stone-600 mt-3 font-medium">Chewy, robust texture with a deep earthy profile.</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900">
<span className="en-text">Step 2: Texture &amp; Taste</span><span className="ko-text" style={{display: 'none'}}>2단계: 식감 &amp; 맛</span>
</h3>
<p className="text-xs text-stone-500 mt-1">Add fruits, nuts, and natural sweeteners.</p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<button className="topping-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-900 bg-stone-900 text-white text-xs font-medium transition-colors" data-desc="Antioxidant boost" data-id="top-1" data-name="Wild Blueberries" data-price="1.50">
                                Wild Blueberries <span className="price-span text-stone-300 opacity-70">+$1.50</span>
</button>
<button className="topping-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-700 text-xs font-medium hover:border-stone-400 transition-colors" data-desc="Crunchy &amp; nutty" data-id="top-2" data-name="Toasted Pecans" data-price="2.00">
                                Toasted Pecans <span className="price-span text-stone-400">+$2.00</span>
</button>
<button className="topping-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-900 bg-stone-900 text-white text-xs font-medium transition-colors" data-desc="Omega-3" data-id="top-3" data-name="Chia Seeds" data-price="0.50">
                                Chia Seeds <span className="price-span text-stone-300 opacity-70">+$0.50</span>
</button>
<button className="topping-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-700 text-xs font-medium hover:border-stone-400 transition-colors" data-desc="Natural sweet" data-id="top-4" data-name="Maple Syrup" data-price="1.00">
                                Maple Syrup <span className="price-span text-stone-400">+$1.00</span>
</button>
<button className="topping-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-200 bg-white text-stone-700 text-xs font-medium hover:border-stone-400 transition-colors" data-desc="Rich chocolate" data-id="top-5" data-name="Cacao Nibs" data-price="1.20">
                                Cacao Nibs <span className="price-span text-stone-400">+$1.20</span>
</button>
</div>
</div>

<div className="bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm opacity-60 grayscale-[20%] transition-all hover:opacity-100 hover:grayscale-0">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-stone-900">Step 3: Plus+ Boosters</h3>
<p className="text-xs text-stone-500 mt-1">Elevate with protein, vitamins, or adaptogens.</p>
</div>
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="w-full lg:w-1/3">
<div className="sticky top-24 bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-xl shadow-stone-200/20">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-6 font-serif border-b border-stone-100 pb-4">
<span className="en-text">Your Design</span><span className="ko-text" style={{display: 'none'}}>당신의 디자인</span>
</h3>

<div className="space-y-4 mb-8" id="summary-items">

</div>
<div className="border-t border-stone-200 pt-4 mb-8">
<div className="flex justify-between items-center">
<span className="text-sm font-semibold text-stone-500">
<span className="en-text">Total Price</span><span className="ko-text" style={{display: 'none'}}>총 결제금액</span>
</span>
<span className="text-2xl font-semibold tracking-tight text-stone-900" id="total-price">$7.00</span>
</div>
<p className="text-xs text-right text-stone-400 mt-1">Dynamically updated</p>
</div>
<button className="w-full bg-stone-900 text-white font-medium text-sm py-4 rounded-xl hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/20 flex items-center justify-center gap-2" id="checkout-btn">
<span className="en-text">Confirm &amp; Checkout</span><span className="ko-text" style={{display: 'none'}}>확인 및 결제</span>
<iconify-icon icon="solar:cart-large-2-linear"></iconify-icon>
</button>
<p className="text-xs text-center text-stone-500 mt-4 font-medium flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Secure payment via Stripe
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 transition-colors" id="ranking">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4 font-serif">
<span className="en-text">Trending Bowls</span><span className="ko-text" style={{display: 'none'}}>인기 보울</span>
</h2>
<p className="text-sm text-stone-400 font-medium">Real-time curation from the Seoulmate community.</p>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-green-400 bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Live Updates
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="ranking-grid">

</div>
</div>
</section>

<section className="py-24 bg-[#FCFBFA]" id="pricing">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-stone-900 mb-4 font-serif">Simple Pricing</h2>
<p className="text-sm text-stone-500 font-medium">Choose how you want to experience Seoulmate.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col">
<div className="mb-8">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Starter</h3>
<p className="text-sm text-stone-500 mb-6">Perfect for trying out the experience.</p>
<div className="flex items-baseline gap-1 text-stone-900">
<span className="text-4xl font-semibold tracking-tight">Pay per bowl</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-stone-600 font-medium">
<iconify-icon className="text-stone-900" icon="solar:check-circle-linear"></iconify-icon> Access to full builder
                        </li>
</ul>
<button className="w-full bg-white text-stone-900 border border-stone-200 font-medium text-sm py-3 rounded-xl hover:bg-stone-50 transition-colors">Start Building</button>
</div>
<div className="bg-stone-900 rounded-3xl p-8 border border-stone-800 shadow-xl flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-stone-800 text-stone-300 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-bl-xl">Popular</div>
<div className="mb-8 relative z-10">
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Infinite</h3>
<p className="text-sm text-stone-400 mb-6">For the daily optimizer.</p>
<div className="flex items-baseline gap-1 text-white">
<span className="text-4xl font-semibold tracking-tight">$49</span><span className="text-sm text-stone-400">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-stone-300 font-medium">
<iconify-icon className="text-amber-400" icon="solar:check-circle-linear"></iconify-icon> 10 bowls included
                        </li>
</ul>
<button className="w-full bg-white text-stone-900 font-medium text-sm py-3 rounded-xl hover:bg-stone-100 transition-colors relative z-10">Subscribe Now</button>
</div>
</div>
</div>
</section>



    </>
  );
}
