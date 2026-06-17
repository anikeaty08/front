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



      const tabButtons = document.querySelectorAll('.tab-button');
      const tabSections = document.querySelectorAll('main section');

      function setActiveTab(targetId) {
        tabSections.forEach((section) => {
          if (section.id === targetId) {
            section.classList.remove('hidden');
          } else {
            section.classList.add('hidden');
          }
        });

        tabButtons.forEach((btn) => {
          if (btn.getAttribute('data-tab-target') === targetId) {
            btn.classList.remove('text-neutral-400');
            btn.classList.add('text-emerald-400');
          } else {
            btn.classList.add('text-neutral-400');
            btn.classList.remove('text-emerald-400');
          }
        });
      }

      tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const targetId = button.getAttribute('data-tab-target');
          setActiveTab(targetId);
        });
      });

      // 초기 상태: 홈 탭 활성화
      setActiveTab('tab-home');

      // 결제한 경우 make aura 배지 숨기기 (data-has-paid 기준, 최소 변경)
      const auraBadge = document.getElementById('aura-badge');
      if (auraBadge && auraBadge.dataset.hasPaid === 'true') {
        auraBadge.style.display = 'none';
      }
    
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
      
<div className="min-h-screen flex flex-col pb-16">

<header className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-neutral-800">
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 text-sm font-medium text-neutral-200">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="tracking-tight">위치 정보가 필요해요</span>
<svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-3">
<button className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">

<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line>
<line x1="10" x2="3" y1="4" y2="4"></line>
<line x1="21" x2="12" y1="12" y2="12"></line>
<line x1="8" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="16" y1="20" y2="20"></line>
<line x1="12" x2="3" y1="20" y2="20"></line>
<circle cx="12" cy="4" r="2"></circle>
<circle cx="8" cy="12" r="2"></circle>
<circle cx="16" cy="20" r="2"></circle>
</svg>
</button>
<button className="relative inline-flex items-center justify-center rounded-full p-2 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">

<svg className="w-5 h-5 text-neutral-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10 21a2 2 0 0 0 4 0"></path>
</svg>
<span className="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-medium text-neutral-950">
              3
            </span>
</button>
</div>
</header>

<main className="flex-1 overflow-hidden">
<div className="h-full flex flex-col">
<div className="flex-1 overflow-y-auto">

<section className="px-4 sm:px-6 lg:px-8 py-6 space-y-6" id="tab-home">

<div className="space-y-1">
<p className="text-sm text-neutral-400">다시 만나서 반가워요, 윤님.</p>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                  더 똑똑하게 정리하고 비워보세요.
                </h1>
</div>

<div className="w-full rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-500 px-5 sm:px-7 py-5 sm:py-6 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center shadow-[0_18px_45px_rgba(0,0,0,0.55)]">
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-indigo-100">
                    한정 혜택
                  </p>
<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
<span className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      정리 예약 <span className="text-amber-300">최대 40% 할인</span>
</span>
<span className="text-sm text-indigo-100">
                      대형 폐기물 · 전자제품 · 판매 가능 물품까지 한 번에
                    </span>
</div>
<p className="text-sm text-indigo-100 max-w-md">
                    무거운 짐과 애매한 물건까지, 한 번의 요청으로 수거·판매·기부 경로를 자동으로 추천받으세요.
                  </p>
<div className="flex flex-wrap items-center gap-3 pt-1">
<button className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white hover:bg-white/15 border border-white/15 hover:outline hover:outline-1 hover:outline-white/40 transition-colors">
                      자세히 보기
                      <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
<p className="text-[11px] text-indigo-100/80">
                      결제 시 자동 적용 · 2일 후 종료
                    </p>
</div>
</div>
<div className="flex-1 flex justify-end">
<div className="relative w-28 h-24 sm:w-32 sm:h-28 rounded-2xl bg-white/5 flex items-center justify-center overflow-hidden">
<img alt="미니멀 3D 렌더" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent"></div>
<div className="relative flex flex-col items-center gap-1">
<span className="inline-flex items-center justify-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-indigo-50">
                        자동 분류
                      </span>

<svg className="w-8 h-8 text-amber-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="19" r="3"></circle>
<circle cx="18" cy="5" r="3"></circle>
<path d="M9 19h8a4 4 0 0 0 0-8H7a4 4 0 0 1 0-8h5"></path>
</svg>
<p className="text-[10px] text-indigo-50/90">
                        수거 경로 자동 최적화
                      </p>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-neutral-400">먼저 종류를 선택해 보세요</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">
                      공식 경로로 안전하게 비우기
                    </h2>
</div>
<button className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-200 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 2-3 4"></path>
<path d="M12 17h.01"></path>
</svg>
<span>서비스 가이드</span>
</button>
</div>
<div className="space-y-3">

<button className="w-full flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-4 hover:border-neutral-700 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">

<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v6H3Z"></path>
<path d="M15 13a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v6h-6Z"></path>
<path d="M9 19h6"></path>
<path d="M9 11h6"></path>
</svg>
</div>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-2">
<h3 className="text-base font-semibold tracking-tight text-neutral-50">
                          대형 폐기물 수거 신청
                        </h3>
<span className="inline-flex items-center rounded-full bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-neutral-300 border border-neutral-700">
                          오늘 수거 가능
                        </span>
</div>
<p className="mt-1 text-sm text-neutral-400">
                        가전제품, 가구, 부피 큰 짐까지 지자체 규정에 맞게 한 번에 접수하고 수거 일정을 잡을 수 있어요.
                      </p>
</div>
</button>

<button className="w-full flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-4 hover:border-neutral-700 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="flex flex-col items-center gap-2">
<span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                        신규
                      </span>
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">

<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17 9 11 13 15 21 7"></path>
<path d="M14 7h7v7"></path>
</svg>
</div>
</div>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-2">
<h3 className="text-base font-semibold tracking-tight text-neutral-50">
                          중고 판매 · 기부 한 번에
                        </h3>
<span className="text-xs text-neutral-400">베타</span>
</div>
<p className="mt-1 text-sm text-neutral-400">
                        물건을 한 번만 등록하면, 동네 중고 거래·전문 리셀러·기부 단체 중 수요가 높은 곳으로 자동 추천해 드려요.
                      </p>
</div>
</button>

<button className="w-full flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-4 hover:border-neutral-700 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-amber-500/10 text-amber-300">

<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="18" x="3" y="3"></rect>
<path d="M5 7v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"></path>
<path d="M10 11h4"></path>
</svg>
</div>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-2">
<h3 className="text-base font-semibold tracking-tight text-neutral-50">
                          사무실·공간 완전 정리
                        </h3>
<span className="text-xs text-neutral-400">서류 자동 생성</span>
</div>
<p className="mt-1 text-sm text-neutral-400">
                        폐기물 신고, 인수인계 내역, 사진 기록까지 한 번에 남기고, 정리 과정 전체를 실시간으로 추적하세요.
                      </p>
</div>
</button>
</div>
</div>

<div className="space-y-3 pt-2">
<h2 className="text-lg font-semibold tracking-tight text-neutral-100">
                  함께 진행하면 좋은 서비스
                </h2>
<div className="space-y-2">

<button className="w-full flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-300">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"></path>
<line x1="12" x2="12" y1="9" y2="13"></line>
<line x1="12" x2="12.01" y1="17" y2="17"></line>
</svg>
</div>
<div className="text-left">
<p className="text-sm font-medium tracking-tight text-neutral-50">
                          공사 현장 폐기물 신고
                        </p>
<p className="text-xs text-neutral-400">
                          3분 만에 신고서 작성부터 접수까지 끝낼 수 있어요.
                        </p>
</div>
</div>

<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>

<button className="w-full flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-300">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3 5 7l2 2v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9l2-2-2-4-3 2-2-1-2 1Z"></path>
</svg>
</div>
<div className="text-left">
<p className="text-sm font-medium tracking-tight text-neutral-50">
                          의류 · 패브릭 기부
                        </p>
<p className="text-xs text-neutral-400">
                          인증된 기관과 연계해 수거부터 전달까지 대신 진행해 드려요.
                        </p>
</div>
</div>
<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

<div className="pt-4 space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-50">
                    현재 제안이 들어온 물건
                  </h2>
</div>
<div className="space-y-3">

<button className="w-full flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3 hover:border-neutral-700 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="relative h-16 w-16 flex-none overflow-hidden rounded-xl bg-neutral-800">
<img alt="중고 가방" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/60 via-transparent to-transparent"></div>
<span className="absolute bottom-1 left-1 inline-flex items-center rounded-full bg-neutral-950/80 px-1.5 py-0.5 text-[10px] font-medium text-neutral-50">
                        제안 2개
                      </span>
</div>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium tracking-tight text-neutral-50">
                          캔버스 데이팩
                        </p>
<span className="text-sm text-emerald-300 font-medium">
                          32,000원
                        </span>
</div>
<p className="mt-1 text-xs text-neutral-400">
                        방문 수거 가능 시간 · 오늘 오후 6시–9시
                      </p>
</div>
</button>

<button className="w-full flex gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3 hover:border-neutral-700 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="relative h-16 w-16 flex-none overflow-hidden rounded-xl bg-neutral-800">
<img alt="높이 조절 책상 프레임" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/60 via-transparent to-transparent"></div>
<span className="absolute bottom-1 left-1 inline-flex items-center rounded-full bg-neutral-950/80 px-1.5 py-0.5 text-[10px] font-medium text-neutral-50">
                        검토 필요 1건
                      </span>
</div>
<div className="flex-1 text-left">
<div className="flex items-center justify-between gap-2">
<p className="text-sm font-medium tracking-tight text-neutral-50">
                          스탠딩 데스크 프레임
                        </p>
<span className="text-sm text-neutral-300 font-medium">
                          제안 확인
                        </span>
</div>
<p className="mt-1 text-xs text-neutral-400">
                        구매자 확정 또는 재활용 센터로 전환할 수 있어요.
                      </p>
</div>
</button>
</div>
</div>
</section>

<section className="hidden px-4 sm:px-6 lg:px-8 py-6 h-full space-y-6" id="tab-market">

<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs text-neutral-400">판매 · 기부를 한 곳에서</p>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50">
                    마켓 &amp; 리유즈 허브
                  </h2>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
                  새 물건 등록
                </button>
</div>

<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 flex items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3 py-2">

<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="m16 16 4 4"></path>
</svg>
<input className="flex-1 bg-transparent text-xs text-neutral-100 placeholder:text-neutral-500 focus:outline-none" placeholder="카테고리, 브랜드, 상태로 검색" type="text"/>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-2xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="21" x2="14" y1="4" y2="4"></line>
<line x1="10" x2="3" y1="4" y2="4"></line>
<line x1="21" x2="12" y1="12" y2="12"></line>
<line x1="8" x2="3" y1="12" y2="12"></line>
<line x1="21" x2="16" y1="20" y2="20"></line>
<line x1="12" x2="3" y1="20" y2="20"></line>
<circle cx="12" cy="4" r="2"></circle>
<circle cx="8" cy="12" r="2"></circle>
<circle cx="16" cy="20" r="2"></circle>
</svg>
                    필터
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-2xl border border-neutral-800 bg-neutral-950 px-3 py-2 text-[11px] font-medium text-neutral-200 hover:bg-neutral-900">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 16-4 4-4-4"></path>
<path d="M17 20V4"></path>
<path d="m3 8 4-4 4 4"></path>
<path d="M7 4v16"></path>
</svg>
                    최신순
                  </button>
</div>
</div>

<div className="flex items-center gap-1 rounded-2xl border border-neutral-800 bg-neutral-950/80 p-1">
<button className="flex-1 rounded-xl bg-neutral-900 text-[11px] font-medium text-neutral-100 py-1.5">
                  내 등록 물건
                </button>
<button className="flex-1 rounded-xl bg-transparent text-[11px] font-medium text-neutral-400 py-1.5 hover:bg-neutral-900/70">
                  근처 판매 물건
                </button>
<button className="flex-1 rounded-xl bg-transparent text-[11px] font-medium text-neutral-400 py-1.5 hover:bg-neutral-900/70">
                  기부 &amp; 무료나눔
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 space-y-2">
<p className="text-[11px] text-neutral-400">진행 중 거래</p>
<p className="text-2xl font-semibold tracking-tight text-neutral-50">3건</p>
<p className="text-[11px] text-emerald-300">
                    이번 달 확정 수익 128,000원
                  </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 space-y-2">
<p className="text-[11px] text-neutral-400">평균 판매 소요 시간</p>
<p className="text-2xl font-semibold tracking-tight text-neutral-50">1.8일</p>
<p className="text-[11px] text-neutral-400">
                    비슷한 상품 대비 <span className="text-emerald-300">빠른 편</span>
</p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 space-y-2">
<p className="text-[11px] text-neutral-400">이번 달 기부 물건</p>
<p className="text-2xl font-semibold tracking-tight text-neutral-50">5개</p>
<p className="text-[11px] text-neutral-400">
                    탄소 절감 <span className="text-emerald-300">32kg</span> 추정
                  </p>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight text-neutral-100">
                    내 등록 물건
                  </h3>
<button className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-neutral-200">
                    전체 보기
                    
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

<button className="group rounded-2xl border border-neutral-800 bg-neutral-950/80 overflow-hidden hover:border-neutral-700 hover:bg-neutral-900/80 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors flex flex-col">
<div className="relative h-40 w-full overflow-hidden">
<img alt="서랍장" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-neutral-950/80 px-2 py-0.5 text-[10px] font-medium text-neutral-50 border border-neutral-700/80">

<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l2 2"></path>
</svg>
                        판매 대기
                      </div>
<div className="absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-medium text-neutral-950">
                        즉시 수거 가능
                      </div>
</div>
<div className="px-3 pt-2 pb-3 flex-1 flex flex-col gap-1.5">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-sm font-medium tracking-tight text-neutral-50 line-clamp-1">
                            화이트 3단 원목 서랍장
                          </p>
<p className="text-[11px] text-neutral-400">
                            가구 · 사용감 보통 · 직거래 &amp; 택배
                          </p>
</div>
<p className="text-sm font-semibold tracking-tight text-neutral-50 whitespace-nowrap">
                          45,000원
                        </p>
</div>
<div className="flex items-center justify-between mt-1">
<p className="text-[11px] text-neutral-400">
                          관심 <span className="text-neutral-100">12</span> · 채팅 <span className="text-neutral-100">3</span>
</p>
<p className="text-[11px] text-emerald-300">
                          오늘 안에 판매될 확률 68%
                        </p>
</div>
</div>
</button>

<button className="group rounded-2xl border border-neutral-800 bg-neutral-950/80 overflow-hidden hover:border-neutral-700 hover:bg-neutral-900/80 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors flex flex-col">
<div className="relative h-40 w-full overflow-hidden">
<img alt="의자 세트" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-medium text-neutral-950">
                        예약 완료
                      </div>
</div>
<div className="px-3 pt-2 pb-3 flex-1 flex flex-col gap-1.5">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-sm font-medium tracking-tight text-neutral-50 line-clamp-1">
                            우드 다이닝 체어 2개 세트
                          </p>
<p className="text-[11px] text-neutral-400">
                            가구 · 사용감 적음 · 방문 수거
                          </p>
</div>
<p className="text-sm font-semibold tracking-tight text-neutral-50 whitespace-nowrap">
                          70,000원
                        </p>
</div>
<div className="flex items-center justify-between mt-1">
<p className="text-[11px] text-neutral-400">
                          구매자 확정 · 내일 오후 3시 수거
                        </p>
<p className="text-[11px] text-neutral-300">
                          에코 포인트 120점 예정
                        </p>
</div>
</div>
</button>

<button className="group rounded-2xl border border-neutral-800 bg-neutral-950/80 overflow-hidden hover:border-neutral-700 hover:bg-neutral-900/80 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors flex flex-col">
<div className="relative h-40 w-full overflow-hidden">
<img alt="책 세트" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/10 to-transparent"></div>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-neutral-950/85 px-2 py-0.5 text-[10px] font-medium text-neutral-50 border border-neutral-700/80">
                        기부 예정
                      </div>
<div className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-medium text-neutral-950">

<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.72 12.97 3.5 11.75a3.5 3.5 0 1 1 4.95-4.95L9 7.34l.55-.55a3.5 3.5 0 1 1 4.95 4.95l-1.22 1.22"></path>
<path d="M12 21h7a2 2 0 0 0 1.83-2.83l-2-4A2 2 0 0 0 17 13h-3"></path>
<path d="M3 21h9"></path>
<path d="M3 16h8"></path>
</svg>
                        교육기관 우선
                      </div>
</div>
<div className="px-3 pt-2 pb-3 flex-1 flex flex-col gap-1.5">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-sm font-medium tracking-tight text-neutral-50 line-clamp-1">
                            디자인 · 브랜딩 도서 묶음
                          </p>
<p className="text-[11px] text-neutral-400">
                            도서 · 무료나눔 · 택배 가능
                          </p>
</div>
<p className="text-sm font-semibold tracking-tight text-emerald-300 whitespace-nowrap">
                          기부
                        </p>
</div>
<div className="flex items-center justify-between mt-1">
<p className="text-[11px] text-neutral-400">
                          신청 4건 · 내일 매칭 예정
                        </p>
<p className="text-[11px] text-neutral-300">
                          영수증 발급 가능
                        </p>
</div>
</div>
</button>
</div>
</div>

<div className="pt-4 space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight text-neutral-100">
                    근처에서 많이 거래되는 물건
                  </h3>
<button className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-neutral-200">
                    더 보기
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
<div className="space-y-2">
<button className="w-full flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950 px-3 py-2.5 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="flex items-center gap-3">
<div className="relative h-10 w-10 rounded-xl overflow-hidden bg-neutral-800">
<img alt="모니터" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/70 via-transparent to-transparent"></div>
</div>
<div className="text-left">
<p className="text-sm font-medium tracking-tight text-neutral-50">
                          27인치 모니터 · 작업용
                        </p>
<p className="text-[11px] text-neutral-400">
                          최근 2주간 14건 거래 · 평균 110,000원
                        </p>
</div>
</div>
<p className="text-[11px] text-emerald-300">
                      내 물건과 유사
                    </p>
</button>
<button className="w-full flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950 px-3 py-2.5 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700 transition-colors">
<div className="flex items-center gap-3">
<div className="relative h-10 w-10 rounded-xl overflow-hidden bg-neutral-800">
<img alt="책상" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1545235617-9465c4b8baad?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/70 via-transparent to-transparent"></div>
</div>
<div className="text-left">
<p className="text-sm font-medium tracking-tight text-neutral-50">
                          높이조절 책상 · 전동
                        </p>
<p className="text-[11px] text-neutral-400">
                          예약 대기 3명 · 평균 판매가 180,000원
                        </p>
</div>
</div>
<p className="text-[11px] text-neutral-300">
                      추천가 170,000원
                    </p>
</button>
</div>
</div>
</section>

<section className="hidden px-4 sm:px-6 lg:px-8 py-6 h-full space-y-4" id="tab-chat">

</section>

<section className="hidden px-4 sm:px-6 lg:px-8 py-6 h-full space-y-5" id="tab-history">

</section>

<section className="hidden px-4 sm:px-6 lg:px-8 py-6 h-full space-y-5" id="tab-profile">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-neutral-400">계정 및 환경 설정</p>
<h2 className="text-xl font-semibold tracking-tight text-neutral-50">
                    프로필 관리
                  </h2>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-950 px-3 py-1 text-xs font-medium text-neutral-100 hover:bg-neutral-900 hover:outline hover:outline-1 hover:outline-neutral-700">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<path d="M16 17 21 12 16 7"></path>
<path d="M21 12H9"></path>
</svg>
                  로그아웃
                </button>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3">
<div className="flex items-center gap-3 flex-1">
<div className="relative">
<img alt="프로필" className="h-11 w-11 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center hover:outline hover:outline-1 hover:outline-neutral-500">

<svg className="w-3 h-3 text-neutral-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7h2l2-3h6l2 3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
</button>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-neutral-50">
                      윤다정
                    </p>
<p className="text-xs text-neutral-400">
                      dajung.yoon@example.com
                    </p>
<p className="text-[11px] text-emerald-300 mt-0.5">
                      에코 포인트 1,240점 보유
                    </p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-800 hover:outline hover:outline-1 hover:outline-neutral-600">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3.6 15a1.65 1.65 0 0 0-1.51-1H2a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 3.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.6a1.65 1.65 0 0 0 1-1.51V2a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 16 3.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 20.4 9a1.65 1.65 0 0 0 1.51 1H22a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
</svg>
                  계정 설정
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="space-y-3">

<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 space-y-3">
<p className="text-xs font-medium text-neutral-300">
                      기본 정보
                    </p>
<div className="space-y-2">
<label className="block">
<p className="text-[11px] text-neutral-400 mb-1">이름</p>
<input className="w-full bg-neutral-900 text-xs text-neutral-100 rounded-xl px-3 py-2 border border-neutral-800 focus:outline-none" type="text" value="윤다정"/>
</label>
<label className="block">
<p className="text-[11px] text-neutral-400 mb-1">
                          연락처
                        </p>
<input className="w-full bg-neutral-900 text-xs text-neutral-100 rounded-xl px-3 py-2 border border-neutral-800 focus:outline-none" type="text" value="010-1234-5678"/>
</label>
</div>
</div>

<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 space-y-3">
<p className="text-xs font-medium text-neutral-300">
                      기본 수거 주소
                    </p>
<div className="space-y-2">
<div className="flex gap-2">
<input className="flex-1 bg-neutral-900 text-xs text-neutral-100 rounded-xl px-3 py-2 border border-neutral-800 focus:outline-none" type="text" value="서울시 성동구 성수동"/>
<button className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-3 py-2 text-[11px] font-medium text-neutral-100 border border-neutral-700 hover:bg-neutral-800 hover:outline hover:outline-1 hover:outline-neutral-600">

<svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21s-6-5.3-6-10a6 6 0 0 1 12 0c0 4.7-6 10-6 10Z"></path>
<circle cx="12" cy="11" r="2"></circle>
</svg>
                          위치 검색
                        </button>
</div>
<input className="w-full bg-neutral-900 text-xs text-neutral-100 rounded-xl px-3 py-2 border border-neutral-800 focus:outline-none" type="text" value="○○아파트 101동 1203호"/>
<p className="text-[11px] text-neutral-500">
                        기사님께 안내되며, 예약마다 수정할 수 있어요.
                      </p>
</div>
</div>
</div>

<div className="space-y-3">

<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 space-y-3">
<p className="text-xs font-medium text-neutral-300">
                      알림 설정
                    </p>
<div className="space-y-2">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-[11px] font-medium text-neutral-100">
                            예약 관련 푸시 알림
                          </p>
<p className="text-[11px] text-neutral-400">
                            수거 일정, 기사님 위치, 변경 사항을 알려드려요.
                          </p>
</div>

<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-emerald-500/80 border border-emerald-400/80">
<span className="inline-block h-4 w-4 translate-x-4 rounded-full bg-neutral-950 shadow"></span>
</button>
</div>
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-[11px] font-medium text-neutral-100">
                            프로모션 · 혜택 알림
                          </p>
<p className="text-[11px] text-neutral-400">
                            한정 할인, 에코 포인트 추가 적립 소식을 받아요.
                          </p>
</div>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-neutral-800 border border-neutral-700">
<span className="inline-block h-4 w-4 translate-x-0.5 rounded-full bg-neutral-300 shadow"></span>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 space-y-3">
<p className="text-xs font-medium text-neutral-300">
                      수거 선호 옵션
                    </p>
<div className="space-y-2">
<div>
<p className="text-[11px] text-neutral-400 mb-1">
                          선호 방문 시간대
                        </p>
<div className="grid grid-cols-3 gap-1.5">
<button className="text-[11px] rounded-xl border border-emerald-500/70 bg-emerald-500/10 text-emerald-200 px-2 py-1 text-center hover:bg-emerald-500/20">
                            오전 (09–12시)
                          </button>
<button className="text-[11px] rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 px-2 py-1 text-center hover:bg-neutral-800">
                            오후 (12–18시)
                          </button>
<button className="text-[11px] rounded-xl border border-neutral-700 bg-neutral-900 text-neutral-200 px-2 py-1 text-center hover:bg-neutral-800">
                            저녁 (18–21시)
                          </button>
</div>
</div>
<div>
<p className="text-[11px] text-neutral-400 mb-1">
                          선호 처리 방식
                        </p>
<div className="space-y-1.5">
<label className="flex items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5">
<span className="text-[11px] text-neutral-100">
                              재사용·기부 우선
                            </span>

<span className="h-3.5 w-3.5 rounded-full border border-emerald-400 bg-emerald-500/20 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
</span>
</label>
<label className="flex items-center justify-between gap-2 rounded-xl border border-neutral-800 bg-neutral-900 px-3 py-1.5">
<span className="text-[11px] text-neutral-100">
                              수거 속도 우선
                            </span>
<span className="h-3.5 w-3.5 rounded-full border border-neutral-600 bg-neutral-900"></span>
</label>
</div>
</div>
</div>
</div>

<div className="flex justify-end pt-1">
<button className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-[11px] font-medium text-neutral-950 hover:bg-emerald-500 hover:outline hover:outline-1 hover:outline-emerald-500/70">

<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                      변경 사항 저장
                    </button>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<nav className="fixed inset-x-0 bottom-0 z-30 border-t border-neutral-800 bg-neutral-950/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/80">
<div className="mx-auto max-w-xl">
<div className="flex items-center justify-between px-4 py-2.5">

<button className="tab-button flex flex-1 flex-col items-center gap-0.5 text-[11px] text-emerald-400" data-tab-target="tab-home">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.5 12 3l9 6.5"></path>
<path d="M19 10.5V20a1 1 0 0 1-1 1h-4.5v-5h-3v5H6a1 1 0 0 1-1-1v-9.5"></path>
</svg>
<span>홈</span>
</button>

<button className="tab-button flex flex-1 flex-col items-center gap-0.5 text-[11px] text-neutral-400" data-tab-target="tab-market">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9h18"></path>
<path d="M5 9V5h14v4"></path>
<path d="M3 9v9h18V9"></path>
<path d="M9 13h6"></path>
</svg>
<span>마켓</span>
</button>

<button className="tab-button flex flex-1 flex-col items-center gap-0.5 text-[11px] text-neutral-400" data-tab-target="tab-chat">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8h10"></path>
<path d="M7 12h6"></path>
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8Z"></path>
</svg>
<span>채팅</span>
</button>

<button className="tab-button flex flex-1 flex-col items-center gap-0.5 text-[11px] text-neutral-400" data-tab-target="tab-history">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
<span>기록</span>
</button>

<button className="tab-button flex flex-1 flex-col items-center gap-0.5 text-[11px] text-neutral-400" data-tab-target="tab-profile">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="8" r="3"></circle>
<path d="M6 21v-1a6 6 0 0 1 12 0v1"></path>
</svg>
<span>프로필</span>
</button>
</div>
</div>
</nav>

<button className="fixed right-4 bottom-16 z-40 inline-flex items-center gap-1.5 rounded-full bg-neutral-900/95 border border-neutral-700 px-3 py-1.5 text-[11px] text-neutral-200 shadow-lg backdrop-blur-sm" data-has-paid="true" id="aura-badge">

<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3 13.09 7.36 17 8 13.09 8.64 12 13 10.91 8.64 7 8l3.91-.64L12 3z"></path>
<path d="M5 14l.5 1.5L7 16l-1.5.5L5 18l-.5-1.5L3 16l1.5-.5L5 14z"></path>
<path d="M19 14l.5 1.5L21 16l-1.5.5L19 18l-.5-1.5L17 16l1.5-.5L19 14z"></path>
</svg>
<span>make aura</span>
</button>
</div>



    </>
  );
}
