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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center transition-transform group-hover:rotate-12">
<svg className="lucide lucide-phone-off w-4 h-4" data-lucide="phone-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"></path><path d="M22 2 2 22"></path><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"></path></svg>
</div>
<span className="font-semibold tracking-tight text-slate-900 text-lg">AnsimCallParking</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#solution">기능 소개</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#safety">안전성</a>
</div>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 hover:scale-105 transition-all shadow-lg shadow-slate-900/20" href="#reservation">
                사전 예약하기
            </a>
</div>
</nav>

<header className="relative pt-40 pb-24 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                2026년 초 정식 출시 예정
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-8">
                주차 전화,<br/>
<span className="text-gradient">직접 받지 마세요.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl mx-auto leading-relaxed font-medium">
                모르는 번호, 반복되는 통화, 감정싸움.<br/>
                이제 AI가 대신 받고 당신은 버튼만 누르세요.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30" href="#solution">
                    어떻게 가능한가요?
                    <svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<a className="text-slate-600 px-8 py-4 rounded-full font-medium text-lg hover:bg-slate-50 transition-colors" href="#reservation">
                    무료 체험 신청 →
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200/30 rounded-full blur-3xl -z-10 opacity-50"></div>
</header>

<section className="bg-stress py-32 text-white relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
                    새벽 2시, <span className="text-red-500">모르는 번호</span>의 공포.<br/>
                    언제까지 겪으시겠습니까?
                </h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                    "차 좀 빼주세요" 한 마디 듣기 위해 겪는 불필요한 스트레스들.<br/>
                    이제는 끊어내야 할 때입니다.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="dark-glass-panel p-8 rounded-3xl group hover:border-red-500/50 transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-alert w-6 h-6" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">개인정보 유출</h3>
<p className="text-slate-400 text-sm leading-relaxed">앞유리에 붙여둔 내 번호가 범죄나 스팸의 타겟이 되지 않을까 늘 찜찜합니다. 안심번호도 유효기간이 끝나면 무용지물입니다.</p>
</div>

<div className="dark-glass-panel p-8 rounded-3xl group hover:border-red-500/50 transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-phone-missed w-6 h-6" data-lucide="phone-missed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 2 6 6"></path><path d="m22 2-6 6"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">반복되는 주차 전화</h3>
<p className="text-slate-400 text-sm leading-relaxed">매일 같은 시간, 같은 이유. "지금 내려갑니다" 같은 말만 반복하며 매번 직접 받아야 하는 피로감이 일상을 방해합니다.</p>
</div>

<div className="dark-glass-panel p-8 rounded-3xl border-red-500/20 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/20 blur-2xl rounded-full"></div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-white mb-6 shadow-lg shadow-red-500/20">
<svg className="lucide lucide-message-circle-warning w-6 h-6" data-lucide="message-circle-warning" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3 text-white">통화와 문자의 딜레마</h3>
<p className="text-slate-300 text-sm leading-relaxed font-medium">
                        "화난 목소리는 듣기 싫어 피하고 싶지만,
                        문자는 혹시 못 보고 놓칠까 봐
                        <span className="text-red-400 underline decoration-red-400/30 underline-offset-4 decoration-2">어쩔 수 없이 수화기를 드는 그 마음.</span>"
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 pt-32 pb-32" id="solution">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6 tracking-tight">
                    말 섞지 마세요. <br className="md:hidden"/>
<span className="text-blue-600">버튼 하나</span>면 충분합니다.
                </h2>
<p className="text-lg text-slate-500 font-medium">
                    상대가 QR을 스캔하면, AI가 차주님께 대신 전화를 걸어드립니다.<br/>
                    불편한 직접 통화 없이, 화면의 버튼만 눌러주세요.
                </p>
</div>
<div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

<div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-slate-900 font-semibold text-xl group-hover:scale-110 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300">1</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">자동 호출 도착</h3>
<p className="text-slate-500 leading-relaxed">상대가 직접 전화하지 않습니다. 안심콜파킹 AI가 차주님께 대신 전화를 걸어 상황을 전달해 드립니다. 번호 노출은 0%.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-slate-900 font-semibold text-xl group-hover:scale-110 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300">2</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">3초 만에 응답</h3>
<p className="text-slate-500 leading-relaxed">상황에 맞는 숫자 버튼만 누르세요. "지금 나갑니다" 말할 필요 없이, AI가 상대방에게 즉시 전달합니다.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center flex-shrink-0 text-slate-900 font-semibold text-xl group-hover:scale-110 group-hover:border-blue-200 group-hover:text-blue-600 transition-all duration-300">3</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">상황 종료</h3>
<p className="text-slate-500 leading-relaxed">상대방에게는 AI 음성으로 정중하고 명확하게 안내됩니다. 불필요한 감정 소모는 완벽하게 차단됩니다.</p>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 animate-float">

<div className="relative w-[320px] h-[640px] bg-[#222] rounded-[50px] p-[10px] shadow-2xl ring-1 ring-slate-900/50">

<div className="w-full h-full bg-[#050507] rounded-[40px] overflow-hidden relative flex flex-col shadow-inner">

<div className="h-12 w-full flex justify-between items-end px-6 pb-2 text-white font-semibold z-20">
<span className="text-[14px] font-semibold tracking-wide">10:22</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-signal w-3.5 h-3.5 fill-current" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="flex items-center gap-1">
<div className="w-6 h-3 border-[1.5px] border-white/40 rounded-[4px] relative flex items-center justify-start p-0.5">
<div className="h-full w-[90%] bg-white rounded-[1px]"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[30px] bg-black rounded-full z-30 pointer-events-none"></div>

<div className="mt-8 flex flex-col items-center z-10 text-center">
<span className="text-slate-400 text-xs font-semibold mb-2 tracking-wide text-blue-400/80">휴대전화</span>
<h3 className="text-2xl font-bold text-white tracking-tight">안심콜파킹 안내</h3>
</div>

<div className="flex-1 flex flex-col z-10 px-8 pb-10 justify-end">
<div className="grid grid-cols-3 mb-6 gap-x-4 gap-y-4">

<div className="flex justify-center relative group cursor-pointer">

<div className="absolute -top-14 left-1/2 -translate-x-1/2 w-max bg-[#2c2c2e]/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xl flex flex-col items-center shadow-2xl z-20 animate-bounce-slight">
<span className="text-[10px] text-blue-400 font-bold tracking-tight mb-0.5">추천</span>
<span className="text-[11px] text-white font-bold whitespace-nowrap">지금 바로 이동</span>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#2c2c2e]/90 rotate-45 border-r border-b border-white/10"></div>
</div>
<div className="w-[66px] h-[66px] rounded-full bg-[#1c1c1e] border border-blue-600/60 hover:bg-blue-900/20 active:bg-blue-800/30 transition-all flex items-center justify-center animate-pulse-ring relative overflow-hidden">
<div className="absolute inset-0 bg-blue-500/10"></div>
<span className="text-3xl text-white font-normal z-10">1</span>
</div>
</div>

<div className="flex justify-center relative group cursor-pointer">

<div className="absolute -top-14 left-1/2 -translate-x-1/2 w-max bg-[#2c2c2e]/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xl flex flex-col items-center shadow-2xl z-20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none">
<span className="text-[11px] text-white font-bold whitespace-nowrap">5분 내 이동</span>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#2c2c2e]/90 rotate-45 border-r border-b border-white/10"></div>
</div>
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">2</span>
</div>
</div>

<div className="flex justify-center relative group cursor-pointer">

<div className="absolute -top-14 left-1/2 -translate-x-1/2 w-max bg-[#2c2c2e]/90 backdrop-blur-md border border-white/10 px-3 py-2 rounded-xl flex flex-col items-center shadow-2xl z-20 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 pointer-events-none">
<span className="text-[11px] text-white font-bold whitespace-nowrap">직접 통화하기</span>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#2c2c2e]/90 rotate-45 border-r border-b border-white/10"></div>
</div>
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">3</span>
</div>
</div>

<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">4</span>
</div>
</div>
<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">5</span>
</div>
</div>
<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">6</span>
</div>
</div>

<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">7</span>
</div>
</div>
<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">8</span>
</div>
</div>
<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">9</span>
</div>
</div>

<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[34px] text-white font-normal leading-none">*</span>
</div>
</div>
<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[30px] text-white font-normal leading-none">0</span>
</div>
</div>
<div className="flex justify-center">
<div className="w-[66px] h-[66px] rounded-full bg-[#2c2c2e] hover:bg-[#3a3a3c] transition-colors flex items-center justify-center cursor-pointer active:bg-white/20">
<span className="text-[24px] text-white font-normal leading-none">#</span>
</div>
</div>
</div>

<div className="flex justify-center mt-1">
<button className="w-[66px] h-[66px] rounded-full bg-[#ff3b30] hover:bg-red-600 transition-colors flex items-center justify-center text-white shadow-lg active:scale-95 transform duration-150">
<svg className="lucide lucide-phone-off w-7 h-7 fill-current" data-lucide="phone-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"></path><path d="M22 2 2 22"></path><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="safety">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-red-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-siren w-6 h-6" data-lucide="siren" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 18v-6a5 5 0 1 1 10 0v6"></path><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"></path><path d="M21 12h1"></path><path d="M18.5 4.5 18 5"></path><path d="M2 12h1"></path><path d="M12 2v1"></path><path d="m4.929 4.929.707.707"></path><path d="M12 12v6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">위험 패턴 자동 감지</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        과도한 전화 시도나 위협적인 패턴이 감지되면 시스템이 자동으로 위험 알림을 표시합니다. 필요 시 원터치로 즉시 차단하거나 신고할 수 있습니다.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-hard-drive w-6 h-6" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">기록·로그 저장으로 민원 대응</h3>
<p className="text-slate-500 leading-relaxed text-sm font-medium">
                        모든 통화와 응답 내용은 자동 저장되어, 악성 민원이나 주차 시비 분쟁 상황 발생 시 법적 증빙 자료로 안전하게 활용할 수 있습니다.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-900">


<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-tight">
                불편한 대화는 AI가 합니다.<br/>
                당신은 <span className="text-emerald-400">차 키만 챙겨</span> 가볍게 다녀오세요.
            </h2>
<p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                "죄송합니다" 연발할 필요도, 화난 목소리를 들을 필요도 없습니다.<br/>
                안심콜파킹이 대신 정중하게 양해를 구했으니, 안심하고 이동하세요.
            </p>

<div className="inline-flex items-center gap-6 p-6 pr-10 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 text-left shadow-2xl transform hover:scale-105 transition-transform duration-300">
<div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 flex-shrink-0">
<svg className="lucide lucide-check w-8 h-8 text-white stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1">Situation Resolved</p>
<p className="text-xl font-semibold text-white leading-tight">상대방에게 '지금 이동' 메시지 전달을 완료했어요.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-32 pb-32">
<div className="max-w-2xl mx-auto px-6 text-center">

<div className="w-full">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm mx-auto">
<svg className="lucide lucide-sparkles w-8 h-8" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="text-4xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
                    지금 사전 예약하고<br/>무료로 먼저 사용해보세요.
                </h2>
<p className="text-slate-500 text-lg font-medium mb-10 leading-relaxed">
                    정식 출시 전 <span className="text-blue-600 font-bold">베타 테스트 참여 기회</span>와<br/>
<span className="text-blue-600 font-bold">QR안심번호판 무료 제공 혜택</span>을 드립니다.
                    <span className="text-slate-400 text-sm block mt-2">(정식 출시가 19,000원 상당)</span>
</p>
<div className="bg-slate-50 p-1.5 rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-lg mx-auto">
<iframe className="rounded-xl bg-white" data-tally-embed-widget-initialized="1" data-tally-src="https://tally.so/embed/VLp9KJ?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1" frameborder="0" height="250" id="iFrameResizer0" loading="lazy" marginheight="0" marginwidth="0" scrolling="no" src="https://tally.so/embed/VLp9KJ?alignLeft=1&amp;hideTitle=1&amp;transparentBackground=1&amp;dynamicHeight=1&amp;originPage=srcdoc" style={{overflow: 'hidden', height: '211.5px'}} title="안심콜파킹 사전예약" width="100%"></iframe>
</div>
<p className="mt-8 text-xs text-slate-400 font-medium">
                    * 사전 예약자는 출시 알림을 가장 먼저 받아보실 수 있습니다.
                </p>
</div>
</div>
</section>

<footer className="bg-slate-950 py-20 border-t border-slate-900">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-10">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 text-white">
<svg className="lucide lucide-shield-check w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-bold text-lg tracking-tight">AnsimCallParking</span>
</div>
<p className="text-sm leading-7 text-slate-400 font-medium">
                    안심콜파킹은 차주의 스트레스와 불안을 없애고,<br/>
                    감정싸움 없이 조용하게 이중주차 문제를 해결하는<br/>
                    AI 중재 서비스입니다.
                </p>
</div>

<div className="flex flex-col items-end gap-1">
<a className="text-sm text-slate-400 font-medium hover:text-white transition-colors" href="mailto:ansimcallparking@gmail.com">ansimcallparking@gmail.com</a>
<p className="text-xs text-slate-600">© 2025 안심콜파킹. All rights reserved.</p>
</div>
</div>
</footer>




    </>
  );
}
