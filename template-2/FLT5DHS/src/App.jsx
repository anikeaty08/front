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
      

<nav className="flex items-center justify-between px-8 py-5 border-b border-[#D8E63C] bg-[#17184B]">
<div className="flex items-center space-x-3">
<span className="font-montserrat font-bold text-xl tracking-wide text-[#D8E63C]">Jin Air Careers</span>
</div>
<ul className="flex space-x-8 font-semibold text-[#D8E63C]">
<li><a className="hover:underline underline-offset-4 transition" href="#about">진에어 소개</a></li>
<li className=""><a className="hover:underline underline-offset-4 transition" href="#process">채용 절차</a></li>
<li className=""><a className="hover:underline underline-offset-4 transition" href="#jobs">채용 공고</a></li>
<li className=""><a className="hover:underline underline-offset-4 transition" href="#footer">문의</a></li>
</ul>
<a className="hidden md:inline-block px-5 py-2 border border-[#D8E63C] text-[#D8E63C] rounded-full font-bold hover:bg-[#D8E63C] hover:text-[#17184B] transition" href="#jobs">지원하기</a>
</nav>

<section className="w-full flex items-center justify-center bg-[#17184B] pt-24 pb-24">
<div className="max-w-2xl text-center">
<h1 className="md:text-5xl text-4xl font-extrabold text-[#D8E63C] font-poppins mb-6 scale-105">
      Fly Your Vibe,<br />
<span className="text-[#f0eee9]">Grow Your Wings</span>
</h1>
<p className="md:text-xl text-lg font-semibold text-[#D8E63C]/90 mb-10">진에어에서 당신만의 Vibe를 펼치고, 더 큰 꿈으로 성장하세요.</p>
<a className="inline-block hover:bg-[#D8E63C] hover:text-[#17184B] transition text-lg font-bold text-[#D8E63C] border-[#D8E63C] border rounded-full pt-3 pr-8 pb-3 pl-8" href="#jobs">채용 공고 보기</a>
</div>
</section>


<section className="border-y bg-[#f0eee9]/0 border-[#D8E63C]/30 pt-16 pb-16" id="process">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center text-[#D8E63C] mb-10">채용 절차</h2>
<div className="grid md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center">
<div className="w-14 h-14 border-2 border-[#D8E63C] flex items-center justify-center rounded-full mb-3 text-2xl text-[#D8E63C] font-bold">1</div>
<span className="font-semibold text-[#D8E63C] mb-1">지원서 접수</span>
<p className="text-[#D8E63C]/70 text-sm">온라인 지원서 제출</p>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 border-2 border-[#D8E63C] flex items-center justify-center rounded-full mb-3 text-2xl text-[#D8E63C] font-bold">2</div>
<span className="font-semibold text-[#D8E63C] mb-1">서류 전형</span>
<p className="text-[#D8E63C]/70 text-sm">지원서 및 이력서 심사</p>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 border-2 border-[#D8E63C] flex items-center justify-center rounded-full mb-3 text-2xl text-[#D8E63C] font-bold">3</div>
<span className="font-semibold text-[#D8E63C] mb-1">면접 전형</span>
<p className="text-[#D8E63C]/70 text-sm">실무/임원 면접</p>
</div>
<div className="flex flex-col items-center">
<div className="w-14 h-14 border-2 border-[#D8E63C] flex items-center justify-center rounded-full mb-3 text-2xl text-[#D8E63C] font-bold">4</div>
<span className="font-semibold text-[#D8E63C] mb-1">최종 합격</span>
<p className="text-[#D8E63C]/70 text-sm">합격 및 입사 안내</p>
</div>
</div>
</div>
</section>

<section className="py-16" id="jobs">
<div className="max-w-5xl mx-auto px-4">
<h2 className="text-3xl font-bold text-[#D8E63C] mb-8 text-center">진행중인 채용 공고</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="border-2 border-[#D8E63C] rounded-xl p-6 flex flex-col bg-transparent">
<span className="text-[#D8E63C] font-bold text-lg mb-2">객실승무원 신입</span>
<span className="text-[#D8E63C]/60 text-sm mb-4">신입 · 정규직</span>
<p className="text-[#D8E63C]/90 mb-4">진에어와 함께하는 글로벌 승무원 도전! 다양한 국가를 경험하며 성장할 인재를 찾습니다.</p>
<div className="mt-auto">
<span className="inline-block border border-[#D8E63C] text-[#D8E63C] px-3 py-1 rounded-full text-xs mb-2">~ 2024.07.15</span><br />
<a className="inline-block mt-2 px-4 py-2 border border-[#D8E63C] text-[#D8E63C] rounded-full font-bold hover:bg-[#D8E63C] hover:text-[#17184B] transition" href="#">지원하기</a>
</div>
</div>

<div className="border-2 border-[#D8E63C] rounded-xl p-6 flex flex-col bg-transparent">
<span className="text-[#D8E63C] font-bold text-lg mb-2">항공정비 엔지니어</span>
<span className="text-[#D8E63C]/60 text-sm mb-4">경력 · 정규직</span>
<p className="text-[#D8E63C]/90 mb-4">항공 안전을 책임질 엔지니어 모집. 항공기 정비 관련 자격증 소지자 우대.</p>
<div className="mt-auto">
<span className="inline-block border border-[#D8E63C] text-[#D8E63C] px-3 py-1 rounded-full text-xs mb-2">~ 2024.07.10</span><br />
<a className="inline-block mt-2 px-4 py-2 border border-[#D8E63C] text-[#D8E63C] rounded-full font-bold hover:bg-[#D8E63C] hover:text-[#17184B] transition" href="#">지원하기</a>
</div>
</div>

<div className="border-2 border-[#D8E63C] rounded-xl p-6 flex flex-col bg-transparent">
<span className="text-[#D8E63C] font-bold text-lg mb-2">IT 개발자(프론트엔드)</span>
<span className="text-[#D8E63C]/60 text-sm mb-4">신입/경력 · 계약직</span>
<p className="text-[#D8E63C]/90 mb-4">진에어의 디지털 혁신을 함께할 개발자(React, Vue 경험자 우대).</p>
<div className="mt-auto">
<span className="inline-block border border-[#D8E63C] text-[#D8E63C] px-3 py-1 rounded-full text-xs mb-2">~ 2024.07.20</span><br />
<a className="inline-block mt-2 px-4 py-2 border border-[#D8E63C] text-[#D8E63C] rounded-full font-bold hover:bg-[#D8E63C] hover:text-[#17184B] transition" href="#">지원하기</a>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-block px-6 py-2 border border-[#D8E63C] text-[#D8E63C] rounded-full font-semibold hover:bg-[#D8E63C] hover:text-[#17184B] transition" href="#">더 많은 공고 보기</a>
</div>
</div>
</section>

<footer className="bg-[#17184B] py-10 mt-12 border-t border-[#D8E63C]/30" id="footer">
<div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
<div className="mb-6 md:mb-0">
<img alt="진에어 로고" className="w-14 mb-3" src="https://jinair.com/images/renew/common/logo_w.png" />
<p className="text-sm text-[#D8E63C]/80">© 2024 Jin Air Co., Ltd. All rights reserved.</p>
</div>
<div>
<h3 className="font-bold mb-2 text-lg text-[#D8E63C]">채용 문의</h3>
<p className="text-[#D8E63C]/90 text-sm">이메일: <a className="underline" href="mailto:recruit@jinair.com">recruit@jinair.com</a>
      전화: 02-1234-5678</p>
</div>
<div className="flex space-x-4 mt-6 md:mt-0">
<a className="hover:opacity-80" href="#" title="Instagram">
<svg className="w-6 h-6 text-[#D8E63C]" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 2.75a6 6 0 110 12 6 6 0 010-12zm0 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6.5.25a1 1 0 110 2 1 1 0 010-2z"></path></svg>
</a>
<a className="hover:opacity-80" href="#" title="Facebook">
<svg className="w-6 h-6 text-[#D8E63C]" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2.998h-3a5 5 0 00-5 5v3H6v4h3v8h4v-8h3l1-4h-4v-3a1 1 0 011-1h3z"></path></svg>
</a>
<a className="hover:opacity-80" href="#" title="LinkedIn">
<svg className="w-6 h-6 text-[#D8E63C]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.94 6.94A2.5 2.5 0 119.44 9.44a2.5 2.5 0 01-2.5-2.5zm-.44 3.56H9.5v8.5H6.5zm7.5-.5a2 2 0 012 2.07v6.43h-3v-6a1 1 0 00-1-1h-1.09V10h3.09z"></path></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
