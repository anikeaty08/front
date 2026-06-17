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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-900/20 blur-[120px] opacity-60"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 blur-[100px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-slate-950/70 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white">
<i className="w-3.5 h-3.5" data-lucide="layers"></i>
</div>
<span className="text-white font-medium tracking-tight">Teambl</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="text-xs font-medium bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors border border-white/10" href="mailto:info@teambl.net">
                초대 요청하기
            </a>
</div>
</nav>

<header className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                초대 기반 초기 창업 커뮤니티
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                도전하고 싶은 사람과,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">그 도전을 믿어주는 사람들.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Teambl은 학생과 동문이 연결되어 아이디어를 나누고,<br className="hidden md:block"/>
                함께 검증하고, 실제 실행까지 이어가는 초기 창업 커뮤니티입니다.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full md:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2" href="mailto:info@teambl.net">
<span>초대 요청하기</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="w-full md:w-auto px-8 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-lg font-medium transition-all backdrop-blur-sm">
                    가입 가능한 학교 확인
                </button>
</div>

<div className="border-t border-white/5 pt-8">
<p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-widest">Available At</p>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400 font-light">
<span>KAIST</span><span>이화여대</span><span>서울대</span><span>포항공대</span>
<span>연세대</span><span>고려대</span><span>성균관대</span><span>UNIST</span>
<span>DGIST</span><span>GIST</span><span>숙명여대</span><span>경희대</span>
</div>
</div>
</div>
</header>

<section className="relative z-10 py-24 px-6 border-t border-white/5 bg-slate-950" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        나 혼자 끙끙대던 아이디어가,<br/>
<span className="text-blue-400">사람을 만나기 시작하는 곳</span>
</h2>
<div className="space-y-6 text-slate-400 font-light leading-relaxed">
<p>
                            어떤 학생은 머릿속에서만 맴돌던 고민을 용기 내어 한 줄의 문장으로 꺼내 보고,
                            어떤 동문은 본인도 깊이 공감하는 문제에 도전해보려는 열정적인 후배를 언젠가 제대로 만나보고 싶어 합니다.
                        </p>
<p>
                            Teambl은 그 학생과 그 동문이 서로를 알아보고 함께 걸어갈 수 있는 지점을 위해 만들어지고 있습니다.
                        </p>
<ul className="space-y-3 mt-4 text-slate-300">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>학생은 문제를 정의하고 솔루션을 도출</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>동문은 경험과 시야로 응답</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span>서로의 시간과 실행력이 함께 쓰는 자산으로 전환</span>
</li>
</ul>
</div>
</div>
<div className="glass-card rounded-2xl p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px]"></div>
<blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed">
                        "우리는 프로필만 쌓이는 네트워크가 아니라, <br/>
<span className="text-blue-300 font-normal">실제로 같이 뭔가를 해보는 네트워크</span>를 지향합니다."
                    </blockquote>
<div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
<div>
<div className="text-sm font-medium text-white">Teambl Philosophy</div>
<div className="text-xs text-slate-500">책임질 사람과 함께하는 가치</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">왜 이런 공간이 필요할까요?</h2>
<p className="text-slate-400">서로를 알고 응원하면서도 정작 함께 일할 기회는 없었습니다.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card rounded-2xl p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-300" data-lucide="help-circle"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">학생의 마음</h3>
<div className="text-slate-400 font-light text-sm space-y-4">
<p>“이 문제, 진짜 세상이 겪는 문제 맞을까?”<br/>“만들긴 하고 싶은데, 이게 맞는 방향인지 모르겠어…”</p>
<ul className="space-y-2 mt-4 text-slate-500">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>무엇을 만들어야 할지 몰라 문제정의에서 막힘</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>편향된 피드백에 갇혀 시장과 멀어짐</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>MVP 제작비 앞에서 멈춤</li>
</ul>
</div>
</div>

<div className="glass-card rounded-2xl p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-300" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-medium text-white mb-4">동문의 마음</h3>
<div className="text-slate-400 font-light text-sm space-y-4">
<p>“시간은 많지 않지만, 믿을 수 있는 후배와라면 같이 해보고 싶은데…”</p>
<ul className="space-y-2 mt-4 text-slate-500">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>후배의 도전을 어디서 발견해야 할지 모름</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>검증되지 않은 아이디어에 합류 부담</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-600 rounded-full"></div>근거와 맥락이 부족한 정보</li>
</ul>
</div>
</div>
</div>
<div className="mt-12 text-center">
<div className="inline-block glass-card px-8 py-6 rounded-xl">
<p className="text-lg md:text-xl text-white font-medium">
                        “도전할 수 있는 권리”만큼 <span className="text-blue-400">“다음 단계로 넘어갈 수 있는 권리”</span>도 필요합니다.
                    </p>
<p className="text-sm text-slate-500 mt-2">Teambl은 그 다음 단계를 연결하는 구조를 만듭니다.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-slate-950/50" id="process">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<span className="text-blue-500 text-sm font-semibold tracking-wider uppercase mb-2 block">Our Mechanism</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Teambl 안에서 도전이 흐르는 방식</h2>
<p className="text-slate-400 mt-4">문제 발견 → 함께 검증 → 함께 실행 → 초기 투자</p>
</div>
<div className="grid lg:grid-cols-3 gap-6 relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900 to-transparent z-0"></div>

<div className="glass-card rounded-2xl p-8 relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/50">
<span className="font-bold text-lg">1</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                        AI <span className="text-xs px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-800">문제정의</span>
</h3>
<p className="text-sm text-slate-400 mb-6 font-light">
                        문제를 '혼자'가 아니라 '함께' 정리합니다. AI 챗봇이 모호한 아이디어를 구체적인 형태로 다듬어줍니다.
                    </p>
<div className="bg-slate-900/50 rounded-lg p-4 border border-white/5">
<div className="flex items-center gap-3 mb-2">
<i className="w-4 h-4 text-blue-400" data-lucide="bot"></i>
<span className="text-xs text-white">Teambl AI Bot</span>
</div>
<p className="text-xs text-slate-500">"나만 겪는 줄 알았던 문제가 많은 사람이 공감하는 문제로 바뀝니다."</p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 relative z-10 hover:-translate-y-1 transition-transform duration-300 border-blue-500/20">
<div className="absolute inset-0 bg-blue-500/5 rounded-2xl pointer-events-none"></div>
<div className="w-10 h-10 bg-white text-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-lg">
<span className="font-bold text-lg">2</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                        CI <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-slate-200 border border-white/10">집단지성 검증</span>
</h3>
<p className="text-sm text-slate-400 mb-6 font-light">
                        동문과 함께 프로젝트에 Upvote, Feedback을 남기며 실행 가치를 따져봅니다.
                    </p>
<div className="grid grid-cols-2 gap-2">
<div className="bg-slate-900/80 rounded p-3 text-center border border-white/5">
<i className="w-4 h-4 text-green-400 mx-auto mb-1" data-lucide="thumbs-up"></i>
<span className="text-[10px] text-slate-400">Upvote</span>
</div>
<div className="bg-slate-900/80 rounded p-3 text-center border border-white/5">
<i className="w-4 h-4 text-blue-400 mx-auto mb-1" data-lucide="message-square"></i>
<span className="text-[10px] text-slate-400">Feedback</span>
</div>
</div>
<div className="mt-4 text-xs text-slate-500 border-t border-white/5 pt-3">
                        검증 포인트: 팀의 태도, 실행 속도, 책임감
                    </div>
</div>

<div className="glass-card rounded-2xl p-8 relative z-10 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-6 border border-white/10">
<span className="font-bold text-lg">3</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 flex items-center gap-2">
                        EI <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">초기 투자</span>
</h3>
<p className="text-sm text-slate-400 mb-6 font-light">
                        검증된 팀은 그냥 "열심히 한 팀"이 아닙니다. 동문 및 투자사와 매칭되어 실제 자금을 유치합니다.
                    </p>
<div className="flex items-center justify-between bg-slate-900/50 rounded-lg p-4 border border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-blue-600 border border-slate-900 flex items-center justify-center text-[8px] text-white">+</div>
</div>
<span className="text-xs text-blue-400 font-medium">Invest Connected</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-blue-900/5 blur-3xl -z-10"></div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="inline-flex items-center gap-2 text-blue-400 text-xs font-medium mb-4 uppercase tracking-widest">
<i className="w-3 h-3" data-lucide="calendar"></i> Teambl Calendar
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    선배님의 15분,<br/>후배에게는 평생의 등불
                </h2>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                    동문은 15분 단위로 시간을 열어두고, 학생은 원하는 시간을 신청합니다.
                    짧지만 밀도 있는 이 시간은 불확실한 미래를 점검받고 신뢰할 수 있는 첫 접점을 만듭니다.
                </p>
<div className="flex items-center gap-4 text-sm text-slate-300">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div> 1:1 멘토링
                    </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div> 커리어 조언
                    </div>
</div>
</div>

<div className="w-full md:w-1/2 relative">
<div className="glass-card rounded-xl p-6 border border-white/10 bg-slate-900/80 max-w-sm mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<span className="text-white font-medium">October 2023</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-xs text-slate-500 mb-2">
<span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-sm font-light text-slate-300">
<span className="text-slate-700">29</span><span className="text-slate-700">30</span>
<span className="hover:bg-white/10 rounded cursor-pointer py-1">1</span>
<span className="hover:bg-white/10 rounded cursor-pointer py-1">2</span>
<span className="bg-blue-600 text-white rounded shadow-lg shadow-blue-900/50 py-1">3</span>
<span className="hover:bg-white/10 rounded cursor-pointer py-1">4</span>
<span>5</span>
</div>
<div className="mt-6 pt-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-700"></div>
<div className="text-xs">
<div className="text-white">Alumni Meeting</div>
<div className="text-blue-400">10:00 AM - 10:15 AM</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 bg-slate-900/30 border-y border-white/5">
<div className="max-w-4xl mx-auto text-center">
<span className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4 block">Upcoming Feature</span>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">
                집단지성 Kickstart: <br className="md:hidden"/>함께 들어 올리는 힘
            </h2>
<p className="text-slate-400 font-light mb-12 max-w-2xl mx-auto">
                단순한 "좋아요"가 아닙니다. 프로젝트에 공감하는 동문과 학생들이 찬성, 반대, 그리고 솔직한 의견으로 초기 실행을 함께 책임집니다.
            </p>
<div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
<div className="flex items-center justify-between mb-4">
<span className="text-white font-medium">Project Alpha Validation</span>
<span className="text-xs text-slate-500">72% Completed</span>
</div>

<div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex mb-6">
<div className="w-[60%] bg-blue-500 h-full"></div>
<div className="w-[15%] bg-blue-400 h-full"></div>
<div className="w-[25%] bg-slate-700 h-full"></div>
</div>
<div className="flex justify-between text-xs text-slate-400">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div> 확신해요
                    </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div> 응원해요
                    </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-700"></div> 고민돼요
                    </div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 py-32 px-6 overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[100px] -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">
                Teambl은 지금,<br/>새로운 네트워크를 만듭니다.
            </h2>
<p className="text-lg text-slate-400 font-light mb-12">
                처음이라 막막한 학생과 열정을 가진 후배를 만나고 싶은 동문.<br/>
                혼자 사라지는 도전이 없도록, 우리가 함께 계속 갈 수 있도록.
            </p>
<div className="flex flex-col items-center gap-6">
<a className="group relative px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold transition-transform hover:scale-105" href="mailto:info@teambl.net">
<span className="relative z-10 flex items-center gap-2">
                        초대 요청하기 <i className="w-4 h-4" data-lucide="mail"></i>
</span>
<div className="absolute inset-0 bg-blue-100 rounded-lg blur opacity-50 group-hover:opacity-100 transition-opacity"></div>
</a>
<p className="text-slate-500 text-sm">info@teambl.net</p>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-slate-800 rounded-full"></div>
<span>© 2024 Teambl. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
<a className="hover:text-slate-400" href="#">Twitter</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
