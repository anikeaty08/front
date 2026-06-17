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



        lucide.createIcons();
    
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">

<div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-sm">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><path d="M7 20l10-16"></path><path d="M6 6l12 12"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">ENHANS</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">CommerceOS</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors flex items-center gap-1" href="#">
                        AI Agent
                        <i className="w-3 h-3 text-neutral-400" data-lucide="sparkles"></i>
</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">ACT-2</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">Impact Biz. Case</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">Newsroom</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#">Career</a>
</nav>
</div>

<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium text-neutral-500 hover:text-black transition-colors border border-neutral-200 px-4 py-2 rounded-full hover:border-neutral-400" href="#">
                    Contact
                </a>
<div className="flex items-center gap-1 text-sm font-medium text-neutral-500 cursor-pointer hover:text-black">
<span>ENG</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>

<button className="lg:hidden text-neutral-500">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>
<main className="pt-32 pb-20">

<section className="max-w-[1440px] mx-auto px-6 mb-32">
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-normal tracking-tight max-w-5xl text-[#1E1E1E]">
                There is so much more to<br/> build for humanity
            </h1>
</section>
<div className="w-full h-px bg-neutral-200 mb-20"></div>

<section className="max-w-[1440px] mx-auto px-6 mb-32">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<h2 className="text-4xl md:text-[3.6rem] font-normal tracking-wide-display sticky top-24">
                        인핸스는
                    </h2>
</div>

<div className="lg:col-span-8">
<div className="border-t border-black mb-8 w-full"></div>

<div className="space-y-8 mb-16">
<p className="text-xl md:text-2xl leading-relaxed text-[#1E1E1E] font-normal">
                            인핸스는 2024년 설립된 AI 에이전트 기반 솔루션을 제공하는 기업으로, 개인의 삶에 주어진 시간을 더 가치있게 활용할 수 있는 AI 기술을 개발한다는 비전을 실현하고 있습니다.
                        </p>
<p className="text-xl md:text-2xl leading-relaxed text-neutral-500 font-normal">
                            AI Agents Platform(AIAP)를 기반으로 브랜드 엑셀러레이터, 그리고 커머스와 리테일 등의 다양한 분야에서 확보한 세계적인 수준의 데이터 활용 기술을 적용해 AI 에이전트를 개발 발전시켜 나가고 있습니다.
                        </p>
<p className="text-xl md:text-2xl leading-relaxed text-neutral-500 font-normal">
                            현재 빅데이터 기반 자동화 모델 관련 21개의 등록 특허를 미국과 한국에 보유하고 있으며 추가로 3개의 특허 출원을 진행 중에 있습니다.
                        </p>
</div>

<div className="w-full aspect-video bg-neutral-100 rounded-sm overflow-hidden relative group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 border border-neutral-200 rounded-full animate-pulse opacity-50"></div>
<div className="absolute w-1/2 h-1/2 border border-neutral-300 rounded-full opacity-30"></div>
<span className="absolute text-neutral-400 font-medium text-sm tracking-widest uppercase">CommerceOS Visualization</span>
</div>
<img alt="AI Interface" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32">

<div className="border-t border-neutral-200 py-10 grid md:grid-cols-12 gap-6 group hover:bg-neutral-50/50 transition-colors">
<div className="md:col-span-4">
<h3 className="text-2xl font-semibold tracking-tight">Our Vision</h3>
</div>
<div className="md:col-span-8">
<p className="text-lg text-neutral-500">Building AI Agents for humans’ valuable time</p>
</div>
</div>

<div className="border-t border-neutral-200 py-10 grid md:grid-cols-12 gap-6 group hover:bg-neutral-50/50 transition-colors">
<div className="md:col-span-4">
<h3 className="text-2xl font-semibold tracking-tight">Our Mission</h3>
</div>
<div className="md:col-span-8">
<p className="text-lg text-neutral-600 leading-relaxed">
                        우리는 시간이 가장 소중한 자산임을 인식하고,<br/>
                        개인의 삶에서 가장 가치 있는 일에 집중할 수 있도록 돕는 것을 목표로 하고 있습니다.
                    </p>
</div>
</div>

<div className="border-t border-neutral-200 border-b py-10 grid md:grid-cols-12 gap-6 group hover:bg-neutral-50/50 transition-colors">
<div className="md:col-span-4">
<h3 className="text-2xl font-semibold tracking-tight">Our Culture</h3>
</div>
<div className="md:col-span-8 grid md:grid-cols-2 gap-8">
<ul className="space-y-4 text-lg text-neutral-600">
<li>1. 본질 탐구의 여정</li>
<li>3. 다음을 향한 긍정의 비평</li>
<li>5. 숫자로의 명료한 표현</li>
<li>7. 품질에 대한 집착</li>
</ul>
<ul className="space-y-4 text-lg text-neutral-600">
<li>2. 가장 중요한 것은 시간</li>
<li>4. 토론의 지속과 합의</li>
<li>6. 공동의 목표를 향한 협력</li>
</ul>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<h2 className="text-4xl md:text-[3.6rem] font-normal tracking-wide-display sticky top-24">
                        오픈 포지션
                    </h2>
</div>

<div className="lg:col-span-8">
<div className="border-t border-black mb-12 w-full"></div>

<div className="mb-16">
<h4 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">Product Development</h4>

<div className="group border-b border-neutral-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
<h3 className="text-2xl font-medium group-hover:text-blue-600 transition-colors">Software Engineer - Frontend Developer</h3>
<div className="flex items-center gap-2 text-neutral-400 group-hover:text-blue-600 transition-colors">
<span className="text-sm">Read more</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>

<div className="group border-b border-neutral-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
<h3 className="text-2xl font-medium group-hover:text-blue-600 transition-colors">Software Engineer - Backend Developer</h3>
<div className="flex items-center gap-2 text-neutral-400 group-hover:text-blue-600 transition-colors">
<span className="text-sm">Read more</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="mb-16">
<h4 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-6">Business Development</h4>

<div className="group border-b border-neutral-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer">
<h3 className="text-2xl font-medium group-hover:text-blue-600 transition-colors">AI Service Planner</h3>
<div className="flex items-center gap-2 text-neutral-400 group-hover:text-blue-600 transition-colors">
<span className="text-sm">Read more</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 py-20 bg-neutral-50 rounded-sm">
<div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
<p className="text-2xl md:text-3xl font-normal leading-snug text-neutral-800">
                    개인의 삶에 있어 가장 소중한 시간에 집중할 수 있도록<br/>
                    AI 에이전트를 개발합니다
                </p>
<button className="group mt-8 inline-flex items-center justify-center gap-2 bg-[#1E1E1E] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 hover:scale-105 transition-all duration-300">
                    회원가입
                    <i className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</button>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 bg-white pt-16 pb-8">
<div className="max-w-[1440px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-900 rounded-sm"></div>
<span className="text-lg font-semibold tracking-tight">ENHANS</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors" href="#">Terms of Service</a>
<a className="hover:text-black transition-colors" href="#">Contact</a>
</div>
</div>
<div className="text-xs text-neutral-400 flex flex-col md:flex-row justify-between gap-4">
<p>© 2024 Enhans Inc. All rights reserved.</p>
<p>Seoul, Republic of Korea</p>
</div>
</div>
</footer>


    </>
  );
}
