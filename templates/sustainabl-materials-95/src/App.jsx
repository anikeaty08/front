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



let submitted = false;
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['A2z', 'sans-serif'],
title: ['Aggravo', 'sans-serif'],
}
}
}
}



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
      
<div className="noise-overlay"></div>
<div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none" style={{maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'}}>
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="" src="https://image2url.com/r2/default/videos/1774353110446-0f13c7e4-450f-42d0-97cd-ad75dc363d2b.mp4"></video>
</div>
<nav className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 bg-zinc-950/70 backdrop-blur-xl border-b border-white/5 transition-all">
<a className="font-title text-base font-medium text-zinc-100 tracking-tighter uppercase" href="#">
            GROUNDPOLY
        </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#products">Products</a>
<a className="text-sm font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#process">Process</a>
<a className="text-sm font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#values">Values</a>
<a className="text-sm font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-light text-zinc-100 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all" href="#inquiry">
            상담 문의하기
        </a>
</nav>
<header className="relative flex min-h-screen items-center justify-center pt-20 px-6 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-3xl h-[40vw] bg-zinc-500/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="relative z-10 flex flex-col items-center text-center max-w-4xl w-full">
<h1 className="font-title text-4xl md:text-6xl font-medium text-zinc-50 tracking-tight leading-[1.1] mb-6 reveal drop-shadow-sm">
                Innovative Materials <br/> from Coffee Grounds
            </h1>
<p className="text-sm md:text-base font-light text-zinc-400 max-w-xl mb-10 leading-relaxed reveal delay-100">
                버려지는 커피박을 고성능 친환경 소재로 재탄생시켰습니다.<br className="hidden sm:block"/>
                기존 플라스틱의 한계를 넘어, 지속 가능한 산업의 새로운 기준을 제시합니다.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto reveal delay-200">
<a className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-medium text-zinc-900 bg-zinc-50 hover:bg-zinc-200 rounded-full transition-all shadow-sm" href="https://image2url.com/r2/default/files/1774354205507-25e698a5-ab66-4c74-a02a-e5d10bab92d4.png" rel="noopener noreferrer" target="_blank">
                    카달로그 다운로드
                    <iconify-icon icon="solar:download-linear"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-sm font-light text-zinc-100 bg-zinc-900/50 hover:bg-zinc-800 border border-white/10 rounded-full backdrop-blur-md transition-all" href="#inquiry">
                    샘플 및 상담 문의
                    <iconify-icon icon="solar:box-linear"></iconify-icon>
</a>
</div>
</div>
</header>
<section className="relative z-20 bg-zinc-950 border-t border-white/5 pt-24 pb-32 px-6 md:px-12" id="inquiry">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-12 reveal">
<h2 className="font-title text-2xl md:text-3xl font-medium text-zinc-50 tracking-tight mb-3">샘플 및 상담 문의</h2>
<p className="text-sm font-light text-zinc-400">필요하신 사항을 남겨주시면, 담당자가 확인 후 빠르게 연락드리겠습니다.</p>
</div>
<div className="bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-3xl p-6 sm:p-10 reveal delay-100 shadow-2xl shadow-black/50">
<form action="https://docs.google.com/forms/d/e/1FAIpQLSeAnbuAGBwj3MGV5MIE_-9el6A9-wE7v2Z7IZTKDfnJT8oviA/formResponse" className="space-y-8" method="POST" onsubmit="submitted=true;" target="hidden_iframe">
<div className="space-y-3">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest">선택사항 <span className="text-zinc-500">*</span></label>
<div className="flex flex-wrap gap-4">
<label className="relative flex cursor-pointer items-center rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 hover:bg-white/5 transition-colors group">
<input className="peer sr-only" name="entry.1719076063" required="" type="radio" value="샘플 요청"/>
<div className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-600 peer-checked:border-zinc-200 peer-checked:bg-zinc-100 transition-all group-hover:border-zinc-400">
<div className="h-1.5 w-1.5 rounded-full bg-zinc-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="ml-3 text-sm font-light text-zinc-400 peer-checked:text-zinc-50 peer-checked:font-normal transition-colors">샘플 요청</span>
</label>
<label className="relative flex cursor-pointer items-center rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 hover:bg-white/5 transition-colors group">
<input className="peer sr-only" name="entry.1719076063" required="" type="radio" value="상담 문의"/>
<div className="flex h-4 w-4 items-center justify-center rounded-full border border-zinc-600 peer-checked:border-zinc-200 peer-checked:bg-zinc-100 transition-all group-hover:border-zinc-400">
<div className="h-1.5 w-1.5 rounded-full bg-zinc-900 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="ml-3 text-sm font-light text-zinc-400 peer-checked:text-zinc-50 peer-checked:font-normal transition-colors">상담 문의</span>
</label>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest" htmlFor="company">회사명</label>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 font-light placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all shadow-inner" id="company" name="entry.1166974658" placeholder="회사명을 입력해주세요" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest" htmlFor="name">이름 <span className="text-zinc-500">*</span></label>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 font-light placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all shadow-inner" id="name" name="entry.2005620554" placeholder="담당자 성함" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest" htmlFor="email">이메일 <span className="text-zinc-500">*</span></label>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 font-light placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all shadow-inner" id="email" name="entry.1045781291" placeholder="hello@company.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest" htmlFor="contact_info">연락처</label>
<input className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 font-light placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all shadow-inner" id="contact_info" name="entry.1065046570" placeholder="010-0000-0000" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-zinc-400 uppercase tracking-widest" htmlFor="content">내용</label>
<textarea className="w-full bg-zinc-950/50 border border-white/5 rounded-xl px-4 py-3 text-sm text-zinc-100 font-light placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all shadow-inner resize-none" id="content" name="entry.839337160" placeholder="상담하실 내용이나 샘플 요청 관련 세부사항을 적어주세요." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-zinc-900 bg-zinc-50 hover:bg-zinc-200 rounded-full transition-all mx-auto sm:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.05)]" type="submit">
                            문의 접수하기
                            <iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</form>
<iframe className="hidden" id="hidden_iframe" name="hidden_iframe" onload="if(submitted){alert('성공적으로 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.'); submitted=false; document.querySelector('form').reset();}"></iframe>
</div>
</div>
</section>

    </>
  );
}
