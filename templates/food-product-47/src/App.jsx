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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-gray-900">Gochujang Bros.</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="hover:text-gray-900 transition-colors" href="#process">Process</a>
<a className="hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-gray-900 transition-colors" href="#faq">FAQ</a>
</nav>
<a className="text-xs md:text-sm font-medium bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors" href="#pricing">
                출시 알림 받기
            </a>
</div>
</header>
<main className="flex-grow pt-16">

<section className="relative pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative mx-auto max-w-7xl px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 ring-1 ring-red-600/20 text-sm font-medium mb-8">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear"></iconify-icon>
                    단순히 맵기만 한 스낵에 질리셨나요?
                </div>
<p className="text-gray-500 font-medium tracking-tight mb-4 text-sm md:text-base uppercase tracking-widest">
                    찍어 먹던 고추장을 이제 가장 바삭하게 즐길 시간입니다.
                </p>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight mb-8">
                    The first chip made from<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Real Korean Gochujang.</span>
</h1>
<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    단순한 매운맛이 아닌, 한국 전통 발효 소스의 깊은 풍미를 담았습니다.<br/>
                    달콤함, 매콤함, 그리고 감칠맛의 완벽한 조화, 고추장 칩을 만나보세요.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all shadow-sm ring-1 ring-red-600" href="#pricing">
                        👉 지금 바로 출시 알림 받기
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-1">샘플 당첨 기회!</span>
</a>
</div>
</div>
</section>

<div className="border-y border-gray-200 bg-white overflow-hidden py-4 flex items-center">
<div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite] gap-12 text-sm font-medium tracking-widest text-gray-400 uppercase">
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Sweet</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Spicy</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Umami</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Real Gochujang</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Sweet</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Spicy</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Umami</span>
<span className="flex items-center gap-4"><iconify-icon icon="solar:star-fall-linear"></iconify-icon> Real Gochujang</span>
</div>
</div>

<section className="py-24 md:py-32 bg-white" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                        소스가 아닌 스낵으로 다시 태어난,<br/>세계 최초의 고추장 칩
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-gray-50 ring-1 ring-gray-200/50 hover:ring-red-200 transition-colors group">
<div className="w-12 h-12 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:jar-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">진짜 고추장의 깊은 풍미</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                            시즈닝만 흉내 낸 것이 아니라 진짜 한국 고추장의 발효된 맛을 칩 한 조각에 온전히 담았습니다. (Real Flavor)
                        </p>
</div>

<div className="p-8 rounded-3xl bg-gray-50 ring-1 ring-gray-200/50 hover:ring-red-200 transition-colors group">
<div className="w-12 h-12 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:flame-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">3단계 미각 경험</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                            입안에 닿는 순간의 달콤함, 이어지는 기분 좋은 매콤함, 마지막에 남는 깊은 감칠맛을 경험하세요. (Sweet-Spicy-Umami)
                        </p>
</div>

<div className="p-8 rounded-3xl bg-gray-50 ring-1 ring-gray-200/50 hover:ring-red-200 transition-colors group">
<div className="w-12 h-12 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm flex items-center justify-center mb-6 text-red-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">전통 발효의 현대적 재해석</h3>
<p className="text-sm text-gray-600 leading-relaxed">
                            수백 년간 사랑받은 한국의 발효 과학을 현대적인 스낵의 식감으로 풀어냈습니다.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200/50">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4 max-w-2xl">
                        자극적이기만 한 매운맛,<br/>이제는 만족스럽지 않은 당신을 위해
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
<span className="text-xs font-medium tracking-widest text-red-600 uppercase mb-4">Target 01</span>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">새로운 스낵을 찾는 얼리어답터</h3>
<p className="text-sm text-gray-500 mt-auto pt-6 border-t border-gray-100">
                            "늘 먹던 감자칩이나 옥수수칩 말고, 이전에 없던 전혀 새로운 미식 경험이 필요할 때"
                        </p>
</div>
<div className="flex flex-col p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
<span className="text-xs font-medium tracking-widest text-red-600 uppercase mb-4">Target 02</span>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">K-푸드를 사랑하는 미식가</h3>
<p className="text-sm text-gray-500 mt-auto pt-6 border-t border-gray-100">
                            "고추장의 맛은 좋아하지만, 요리하지 않고도 간편하게 그 풍미를 즐기고 싶을 때"
                        </p>
</div>
<div className="flex flex-col p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-200">
<span className="text-xs font-medium tracking-widest text-red-600 uppercase mb-4">Target 03</span>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">자극적인 캡사이신에 지친 분들</h3>
<p className="text-sm text-gray-500 mt-auto pt-6 border-t border-gray-100">
                            "인위적인 매운맛이 아니라, 먹고 나서도 속이 편하고 깊은 맛이 느껴지는 간식을 찾을 때"
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="process">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        고추장 칩이 당신의 손에 도착하기까지
                    </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">

<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gray-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mb-6">
<span className="text-sm font-semibold text-gray-900">1</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">전통 고추장 선별</h3>
<p className="text-sm text-gray-500">엄격한 기준으로 선별된 한국 전통 발효 고추장을 베이스로 사용합니다.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mb-6">
<span className="text-sm font-semibold text-gray-900">2</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">독자적 시즈닝 배합</h3>
<p className="text-sm text-gray-500">풍미를 극대화하며 바삭함을 유지하는 Gochujang Bros.만의 황금 비율.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm mb-6">
<span className="text-sm font-semibold text-gray-900">3</span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">바삭한 베이킹/프라이</h3>
<p className="text-sm text-gray-500">가장 완벽한 식감을 구현하기 위해 최적의 온도에서 완성합니다.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center shadow-md mb-6 ring-4 ring-red-50">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">신선한 배송</h3>
<p className="text-sm text-gray-500">출시와 동시에 가장 신선하고 바삭한 상태로 집 앞까지 전달합니다.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col md:gap-32 bg-gray-50 border-gray-200/50 border-t pt-24 pb-24 gap-x-24 gap-y-24">

<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="">
<span className="text-xs font-medium tracking-widest text-red-600 uppercase mb-4 block">Core Value 01</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                        Not just spicy.<br/>Fermented spicy.
                    </h2>
<p className="text-base text-gray-600 leading-relaxed">
                        단순히 혀끝을 자극하는 매운맛이 아닙니다. 발효 과정에서 우러나오는 고추장 특유의 묵직하고 깊은 매운맛이 입안 전체를 감쌉니다. 먹을수록 당기는 한국적 매운맛의 진수를 느껴보세요.
                    </p>
</div>
<div className="aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-tr from-gray-200 to-gray-100 border border-gray-200/50 flex items-center justify-center overflow-hidden relative shadow-sm">
<iconify-icon className="text-8xl text-gray-300 opacity-50" icon="solar:flame-linear"></iconify-icon>
<div className="bg-white/20 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm"></div>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 aspect-square md:aspect-[4/3] flex overflow-hidden bg-gradient-to-br from-red-50 to-orange-50 border-red-100 border rounded-3xl relative shadow-sm items-center justify-center">
<iconify-icon className="text-8xl text-red-200 opacity-50" icon="solar:hand-stars-linear"></iconify-icon>
</div>
<div className="order-1 md:order-2">
<span className="text-xs font-medium tracking-widest text-red-600 uppercase mb-4 block">Core Value 02</span>
<h2 className="md:text-4xl leading-tight text-3xl font-semibold text-gray-900 tracking-tight mb-6">Stop dipping. Just eat it</h2>
<p className="text-base text-gray-600 leading-relaxed">
                        더 이상 고추장 통을 꺼낼 필요가 없습니다. 고추장의 정수를 칩 자체에 녹여내어, 언제 어디서든 손가락 하나로 간편하게 고추장의 감칠맛을 즐길 수 있습니다. 야외 활동이나 맥주 안주로도 완벽합니다.
                    </p>
</div>
</div>

<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="">
<span className="text-xs font-medium tracking-widest text-red-600 uppercase mb-4 block">Core Value 03</span>
<h2 className="md:text-4xl leading-tight text-3xl font-semibold text-gray-900 tracking-tight mb-6">
                        K-소스의 세계화,<br/>가장 힙한 방식으로 즐기는 전통.
                    </h2>
<p className="text-base text-gray-600 leading-relaxed">
                        고추장 칩은 단순한 과자가 아닙니다. 한국의 식문화를 가장 트렌디하게 즐기는 방법입니다. 전 세계가 주목하는 K-푸드의 핵심, 고추장을 가장 바삭하고 세련된 스낵의 형태로 경험해 보세요.
                    </p>
</div>
<div className="aspect-square md:aspect-[4/3] rounded-3xl bg-gradient-to-tr from-gray-900 to-gray-800 border border-gray-800 flex items-center justify-center overflow-hidden relative shadow-lg">
<iconify-icon className="text-8xl text-gray-700" icon="solar:global-linear"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="pricing">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        가장 먼저 고추장 칩을 만나는 방법
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col h-full">
<div className="mb-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">Early Bird</h3>
<p className="text-sm text-gray-500">Single Pack</p>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                고추장 칩 3팩 세트
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                출시 기념 스티커
                            </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl border border-gray-200 font-medium text-sm text-gray-900 hover:bg-gray-50 transition-colors">
                            선택하기
                        </button>
</div>

<div className="p-8 rounded-3xl bg-gray-900 text-white border border-gray-800 shadow-xl flex flex-col h-full relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">Most Popular</span>
</div>
<div className="mb-6 mt-2">
<h3 className="text-lg font-semibold tracking-tight text-white mb-1">Party Pack</h3>
<p className="text-sm text-gray-400">Family Size</p>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-lg text-red-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                고추장 칩 10팩 세트
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-lg text-red-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                                무료 배송
                            </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl bg-red-600 font-medium text-sm text-white hover:bg-red-700 transition-colors shadow-sm">
                            선택하기
                        </button>
</div>

<div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col h-full">
<div className="mb-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-1">Gochujang Lover</h3>
<p className="text-sm text-gray-500">Bundle Pack</p>
</div>
<ul className="flex-grow space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                고추장 칩 20팩 세트
                            </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-lg text-gray-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                한정판 굿즈 포함
                            </li>
</ul>
<button className="w-full py-3 px-4 rounded-xl border border-gray-200 font-medium text-sm text-gray-900 hover:bg-gray-50 transition-colors">
                            선택하기
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-200/50">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        고추장 칩과 함께할 새로운 일상
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative">
<iconify-icon className="text-3xl text-gray-100 absolute top-6 left-6" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-gray-600 leading-relaxed relative z-10 pt-4">
                            "맥주 안주로 매번 먹던 땅콩이나 감자칩 대신, 깊은 풍미의 고추장 칩을 곁들여 더 완벽한 혼술 시간을 보낼 수 있습니다."
                        </p>
</div>
<div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative">
<iconify-icon className="text-3xl text-gray-100 absolute top-6 left-6" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-gray-600 leading-relaxed relative z-10 pt-4">
                            "캠핑장에서 친구들과 함께 이색적인 스낵을 나눠 먹으며 특별한 분위기를 연출할 수 있습니다."
                        </p>
</div>
<div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm relative">
<iconify-icon className="text-3xl text-gray-100 absolute top-6 left-6" icon="solar:quote-left-bold"></iconify-icon>
<p className="text-sm text-gray-600 leading-relaxed relative z-10 pt-4">
                            "자극적인 매운맛에 지친 미식가들에게 '건강하고 깊은 매운맛'이라는 새로운 기준이 생깁니다."
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="faq">
<div className="mx-auto max-w-3xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
                        고추장 칩에 대해 궁금한 점들
                    </h2>
</div>
<div className="space-y-4">

<details className="group rounded-2xl bg-gray-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer ring-1 ring-gray-200/50">
<summary className="flex items-center justify-between text-gray-900 font-medium">
<h3 className="text-base tracking-tight">너무 맵지는 않나요?</h3>
<span className="relative ml-4 h-5 w-5 flex-shrink-0 text-gray-400">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            고추장 칩은 통증을 유발하는 매운맛이 아닙니다. 한국 고추장 특유의 달큰하고 매콤한 맛을 적절히 조절하여 누구나 즐겁게 드실 수 있는 수준입니다.
                        </p>
</details>

<details className="group rounded-2xl bg-gray-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer ring-1 ring-gray-200/50">
<summary className="flex items-center justify-between text-gray-900 font-medium">
<h3 className="text-base tracking-tight">진짜 고추장이 들어있나요?</h3>
<span className="relative ml-4 h-5 w-5 flex-shrink-0 text-gray-400">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            네, 맞습니다. 인공 향료가 아닌 실제 한국 전통 발효 고추장을 베이스로 한 시즈닝을 사용하여 깊은 맛을 냈습니다.
                        </p>
</details>

<details className="group rounded-2xl bg-gray-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer ring-1 ring-gray-200/50">
<summary className="flex items-center justify-between text-gray-900 font-medium">
<h3 className="text-base tracking-tight">출시 알림을 신청하면 어떤 혜택이 있나요?</h3>
<span className="relative ml-4 h-5 w-5 flex-shrink-0 text-gray-400">
<iconify-icon className="absolute inset-0 transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm text-gray-600 leading-relaxed">
                            공식 출시와 동시에 할인 쿠폰을 발송해 드리며, 신청자 중 추첨을 통해 무료 샘플 팩을 가장 먼저 보내드립니다.
                        </p>
</details>
</div>
</div>
</section>

<section className="py-32 bg-gray-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none invert"></div>
<div className="mx-auto max-w-4xl px-6 text-center relative z-10">
<iconify-icon className="text-4xl text-gray-500 mb-8" icon="solar:stars-linear"></iconify-icon>
<p className="text-lg md:text-xl font-medium text-gray-300 leading-relaxed mb-8">
                    Gochujang Bros.는 한국의 맛을 가장 즐겁고 세련된 방식으로<br className="hidden md:block"/>전 세계에 알리고자 모였습니다.
                </p>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8 leading-tight">
                    가장 한국적인 소스 '고추장'이<br/>가장 세계적인 스낵 '칩'이 되는 순간,
                </h2>
<p className="text-base text-gray-400 leading-relaxed mb-12">
                    당신의 간식 시간은 더 이상 평범하지 않을 것입니다.<br/>
                    우리가 만든 이 작은 조각이 당신의 일상에 기분 좋은 자극과 즐거움을 선사하기를 바랍니다.<br/><br/>
<span className="text-white font-medium">새로운 스낵의 역사를 함께 시작해 주세요.</span>
</p>
<a className="inline-flex justify-center items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg" href="#pricing">
                    출시 알림 받고 혜택 누리기
                </a>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="text-lg font-semibold tracking-tight text-gray-900 block mb-2">Gochujang Bros.</span>
<p className="text-xs text-gray-500 mb-1">상호명: 주식회사 고추장 브라더스</p>
<p className="text-xs text-gray-500 mb-1">소재지: 서울특별시 강남구 테헤란로 123 (역삼동)</p>
<p className="text-xs text-gray-500">문의: contact@gochujangbros.com</p>
</div>
<div className="flex flex-col md:items-end gap-4">
<a className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
                    Instagram @gochujang_bros
                </a>
<p className="text-xs text-gray-400">
                    © 2024 Gochujang Bros. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
