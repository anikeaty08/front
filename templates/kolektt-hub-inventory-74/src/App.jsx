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
      

<div className="min-h-screen grid grid-cols-12">

<aside className="hidden md:flex col-span-3 lg:col-span-2 flex-col border-r border-neutral-800/80 bg-neutral-950/60">
<div className="flex items-center gap-3 px-4 py-4">
<div className="h-8 w-8 rounded-md bg-neutral-100 text-neutral-950 flex items-center justify-center font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>K</div>
<div>
<div className="text-sm font-semibold tracking-tight">Kolektt Hub</div>
<div className="text-xs text-neutral-400">Inventory Suite</div>
</div>
</div>
<div className="px-3">
<div className="mb-2 px-2 text-[11px] uppercase text-neutral-500 tracking-wider">Inventory</div>
<nav className="space-y-1">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/80 outline-none ring-0" data-nav="list">
<i className="h-4 w-4" data-lucide="list"></i>
            LP 목록
          </button>
<div className="px-2 py-1 text-xs text-neutral-500">LP 등록</div>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/80 outline-none ring-0" data-nav="single">
<i className="h-4 w-4" data-lucide="file-plus"></i>
            단건 등록
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm bg-neutral-900/70 text-white hover:bg-neutral-900 outline-none ring-0" data-tab="bulk">
<i className="h-4 w-4" data-lucide="inbox"></i>
            대량 등록
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/80 outline-none ring-0" data-nav="history">
<i className="h-4 w-4" data-lucide="history"></i>
            등록 히스토리
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/80 outline-none ring-0" data-nav="discogs">
<i className="h-4 w-4" data-lucide="link"></i>
            Discogs 연동
          </button>
<div className="mt-3 px-2 py-1 text-xs text-neutral-500">재고 관리</div>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/80 outline-none ring-0" data-tab="update">
<i className="h-4 w-4" data-lucide="file-cog"></i>
            재고 업데이트
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/80 outline-none ring-0" data-tab="export">
<i className="h-4 w-4" data-lucide="download"></i>
            재고 내보내기
          </button>
</nav>
</div>
<div className="mt-auto p-4 space-y-3 border-t border-neutral-800/80">
<div className="flex items-center gap-2 px-3 py-2 rounded-md bg-neutral-900/60 text-xs text-neutral-300">
<i className="h-4 w-4" data-lucide="shield-check"></i>
<div>
<div className="font-medium">안전장치 활성</div>
<div className="text-neutral-400">중복 방지 · 자동 백업</div>
</div>
</div>
<div className="flex items-center justify-between px-2">
<div className="text-xs text-neutral-400">모드</div>
<div className="inline-flex rounded-md border border-neutral-800/80 overflow-hidden">
<button className="px-3 py-1.5 text-xs bg-neutral-800 text-neutral-200" disabled="">AI Hub</button>
<button className="px-3 py-1.5 text-xs bg-transparent text-neutral-400">Basic</button>
</div>
</div>
</div>
</aside>

<main className="col-span-12 md:col-span-9 lg:col-span-10 flex flex-col">

<div className="flex items-center justify-between gap-3 px-4 lg:px-6 py-3 border-b border-neutral-800/80 bg-neutral-950/60 backdrop-blur">
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2">
<button className="tab-btn px-3 py-1.5 rounded-md text-sm bg-neutral-900/70 text-white hover:bg-neutral-900 outline-none" data-tab="bulk">대량 등록</button>
<button className="tab-btn px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/60 outline-none" data-tab="update">업데이트</button>
<button className="tab-btn px-3 py-1.5 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-neutral-900/60 outline-none" data-tab="export">내보내기</button>
</div>
<div className="sm:hidden text-sm text-neutral-400">메뉴에서 섹션 선택</div>
</div>
<div className="flex items-center gap-2">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800/80">
<i className="h-4 w-4 text-neutral-400" data-lucide="search"></i>
<input className="bg-transparent outline-none text-sm placeholder:text-neutral-500" placeholder="검색"/>
</div>
<button className="p-2 rounded-md hover:bg-neutral-900/80 outline-none"><i className="h-5 w-5 text-neutral-400" data-lucide="bell"></i></button>
<div className="h-8 w-8 rounded-full overflow-hidden ring-1 ring-neutral-800/80">
<img alt="avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<section className="flex-1 overflow-y-auto" id="section-bulk">
<header className="px-4 lg:px-6 py-5">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Kolektt Hub 대량 등록</h1>
<p className="text-sm text-neutral-400 mt-1">수백~수천 장의 재고를 한 번에 등록 · 검증 · 보정 · 게시합니다.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="px-2.5 py-1 rounded-md text-[11px] border border-emerald-500/30 text-emerald-300 bg-emerald-500/10">AI Hub</span>
<span className="px-2.5 py-1 rounded-md text-[11px] border border-neutral-700 text-neutral-300">Basic 호환</span>
</div>
</div>
</header>
<div className="px-4 lg:px-6 pb-12 grid grid-cols-12 gap-4">

<div className="col-span-12 lg:col-span-3">
<div className="rounded-lg border border-neutral-800/80 bg-neutral-950/50">
<div className="p-3 border-b border-neutral-800/80 text-sm text-neutral-400">Inventory &gt; 대량 등록</div>
<ol className="p-2">
<li>
<button className="step-btn w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-900/70" data-step="1">
<div className="h-6 w-6 rounded-md bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-xs">1</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="upload"></i>
<span className="text-sm">파일 업로드</span>
</div>
</button>
</li>
<li>
<button className="step-btn w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-900/70" data-step="2">
<div className="h-6 w-6 rounded-md bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-xs">2</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="search-check"></i>
<span className="text-sm">데이터 검증</span>
</div>
</button>
</li>
<li>
<button className="step-btn w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-900/70" data-step="3">
<div className="h-6 w-6 rounded-md bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-xs">3</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="wand-2"></i>
<span className="text-sm">매칭 및 보정</span>
</div>
</button>
</li>
<li>
<button className="step-btn w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-900/70" data-step="4">
<div className="h-6 w-6 rounded-md bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-xs">4</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="list-checks"></i>
<span className="text-sm">최종 확인</span>
</div>
</button>
</li>
<li>
<button className="step-btn w-full flex items-center gap-3 px-3 py-2 rounded-md hover:bg-neutral-900/70" data-step="5">
<div className="h-6 w-6 rounded-md bg-neutral-900 border border-neutral-800/80 flex items-center justify-center text-xs">5</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="rocket"></i>
<span className="text-sm">일괄 등록</span>
</div>
</button>
</li>
</ol>
</div>

<div className="mt-4 rounded-lg border border-neutral-800/80 bg-neutral-950/50 p-4 space-y-3">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-4 w-4 text-neutral-300" data-lucide="shield"></i>
                안전장치
              </div>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-start gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-500" data-lucide="copy-check"></i>중복 감지: 카탈로그 번호, 아티스트+앨범명 유사도</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-500" data-lucide="undo-2"></i>자동 백업: 실행 전 스냅샷 · 24시간 내 되돌리기</li>
<li className="flex items-start gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-500" data-lucide="save"></i>단계별 저장: 검증/보정 완료 시점 저장</li>
</ul>
</div>
</div>

<div className="col-span-12 lg:col-span-9 space-y-6">

<div className="step-panel rounded-lg border border-neutral-800/80 overflow-hidden" data-panel="1">
<div className="p-4 border-b border-neutral-800/80 flex items-center justify-between">
<div>
<h2 className="text-xl font-semibold tracking-tight">1. 파일 업로드</h2>
<p className="text-sm text-neutral-400 mt-1">CSV, Excel, TSV 파일을 업로드해 시작합니다. 최대 10MB (약 10,000개 LP).</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md border border-neutral-800/80 text-xs text-neutral-300 hover:bg-neutral-900/70"><i className="h-4 w-4 mr-1 inline" data-lucide="help-circle"></i>가이드</button>
</div>
</div>
<div className="p-4 grid grid-cols-12 gap-4">
<div className="col-span-12">
<label className="flex flex-col items-center justify-center rounded-lg border border-dashed border-neutral-800/80 bg-neutral-950/40 p-6 hover:border-neutral-700 hover:bg-neutral-900/30 transition cursor-pointer">
<input accept=".csv,.xlsx,.xls,.tsv" className="hidden" id="fileInput" type="file"/>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-neutral-900 border border-neutral-800/80 flex items-center justify-center">
<i className="h-5 w-5 text-neutral-300" data-lucide="inbox"></i>
</div>
<div>
<div className="text-sm font-medium">파일을 여기로 드래그하거나 클릭해서 업로드</div>
<div className="text-xs text-neutral-400 mt-0.5">지원: CSV, XLSX, XLS, TSV · 10MB 이하</div>
</div>
</div>
</label>
<div className="hidden mt-3 text-sm text-neutral-300 flex items-center gap-2" id="fileMeta">
<i className="h-4 w-4 text-neutral-400" data-lucide="file"></i>
<span id="fileName">선택된 파일</span>
<span className="text-neutral-500 text-xs" id="fileSize"></span>
<span className="ml-auto px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">준비됨</span>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<div className="rounded-lg border border-neutral-800/80 p-4 h-full">
<div className="flex items-center gap-2 text-sm font-medium mb-3">
<i className="h-4 w-4 text-neutral-300" data-lucide="file-input"></i>
                      지원 형식
                    </div>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>CSV (.csv)</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>Excel (.xlsx, .xls)</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="dot"></i>TSV (.tsv)</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="gauge"></i>최대 파일 크기: 10MB</li>
</ul>
</div>
</div>
<div className="col-span-12 md:col-span-6">
<div className="rounded-lg border border-neutral-800/80 p-4 h-full">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-4 w-4 text-neutral-300" data-lucide="download"></i>
                        템플릿 제공
                      </div>
<div className="text-[11px] text-neutral-400">자주 쓰는 템플릿 저장 지원</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<button className="flex items-center justify-between px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 text-sm">
<span>기본 템플릿</span>
<span className="text-xs text-neutral-400">.xlsx</span>
</button>
<button className="flex items-center justify-between px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 text-sm">
<span>Discogs 내보내기</span>
<span className="text-xs text-neutral-400">.csv</span>
</button>
<button className="flex items-center justify-between px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 text-sm">
<span>커스텀 템플릿</span>
<span className="text-xs text-neutral-400">저장됨</span>
</button>
</div>
</div>
</div>
<div className="col-span-12">
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="text-sm font-medium mb-2">필수 컬럼</div>
<div className="flex flex-wrap gap-1.5 text-xs">
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">아티스트*</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">앨범명*</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">발매연도</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">장르*</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">레이블</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">카탈로그번호</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">컨디션(미디어)*</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">컨디션(커버)*</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">가격*</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">재고수량*</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">설명</span>
<span className="px-2 py-1 rounded border border-neutral-800/80 bg-neutral-900/60">Discogs URL</span>
</div>
</div>
</div>
<div className="col-span-12 flex items-center justify-end gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-neutral-950 hover:opacity-95" id="btnStep1Next">
                    검증 시작
                    <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="step-panel hidden rounded-lg border border-neutral-800/80 overflow-hidden" data-panel="2">
<div className="p-4 border-b border-neutral-800/80">
<h2 className="text-xl font-semibold tracking-tight">2. 데이터 검증</h2>
<p className="text-sm text-neutral-400 mt-1">파일 구조 확인 → 유효성 검사 → 에러 리포트 생성</p>
</div>
<div className="p-4 grid grid-cols-12 gap-4">
<div className="col-span-12">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="flex items-center gap-2 text-sm text-emerald-300">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
                        성공
                      </div>
<div className="mt-1 text-2xl font-semibold tracking-tight">1,247</div>
</div>
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="flex items-center gap-2 text-sm text-amber-300">
<i className="h-4 w-4" data-lucide="alert-triangle"></i>
                        경고 (등록 가능)
                      </div>
<div className="mt-1 text-2xl font-semibold tracking-tight">53</div>
</div>
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="flex items-center gap-2 text-sm text-rose-300">
<i className="h-4 w-4" data-lucide="x-octagon"></i>
                        에러 (수정 필요)
                      </div>
<div className="mt-1 text-2xl font-semibold tracking-tight">12</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-7">
<div className="rounded-lg border border-neutral-800/80">
<div className="p-3 border-b border-neutral-800/80 text-sm font-medium">에러 상세</div>
<div className="divide-y divide-neutral-800/80">
<div className="p-3 flex items-start gap-3">
<span className="text-xs px-2 py-1 rounded bg-neutral-900/60 border border-neutral-800/80 text-neutral-400">행 15</span>
<div className="flex-1">
<div className="text-sm">가격 필드 누락</div>
<div className="text-xs text-neutral-500 mt-0.5">제안: 시장가 기준 ₩32,000</div>
</div>
<button className="px-2 py-1 text-xs rounded border border-neutral-800/80 hover:bg-neutral-900/60">수정</button>
</div>
<div className="p-3 flex items-start gap-3">
<span className="text-xs px-2 py-1 rounded bg-neutral-900/60 border border-neutral-800/80 text-neutral-400">행 28</span>
<div className="flex-1">
<div className="text-sm">컨디션 값 오류 ("Exellent")</div>
<div className="text-xs text-neutral-500 mt-0.5">제안: "VG+"</div>
</div>
<button className="px-2 py-1 text-xs rounded border border-neutral-800/80 hover:bg-neutral-900/60">수정</button>
</div>
<div className="p-3 flex items-start gap-3">
<span className="text-xs px-2 py-1 rounded bg-neutral-900/60 border border-neutral-800/80 text-neutral-400">행 142</span>
<div className="flex-1">
<div className="text-sm">발매연도 오류 (2099)</div>
<div className="text-xs text-neutral-500 mt-0.5">검토 필요: 1900~2025 범위</div>
</div>
<button className="px-2 py-1 text-xs rounded border border-neutral-800/80 hover:bg-neutral-900/60">수정</button>
</div>
</div>
<div className="p-3 flex items-center justify-between">
<div className="text-xs text-neutral-500">허용 컨디션: M / NM / VG+ / VG / G</div>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1.5 rounded-md border border-neutral-800/80 text-xs hover:bg-neutral-900/60"><i className="h-3.5 w-3.5 mr-1 inline" data-lucide="download"></i>에러 행만 다운로드</button>
<button className="px-2.5 py-1.5 rounded-md bg-white text-neutral-950 text-xs hover:opacity-95" id="btnFixNow">바로 수정하기</button>
</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-5">
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="text-sm font-medium mb-2">검증 체크리스트</div>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="check"></i>필수 컬럼 존재 여부</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="check"></i>데이터 타입 검증</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="check"></i>중복 행 감지</li>
<li className="flex items-center gap-2"><i className="h-4 w-4 text-neutral-500" data-lucide="check"></i>가격/연도/장르/재고수량 범위 확인</li>
</ul>
</div>
</div>
<div className="col-span-12 flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60">이전</button>
<button className="px-3 py-2 rounded-md bg-white text-neutral-950 hover:opacity-95" id="btnStep2Next">매칭 및 보정으로</button>
</div>
</div>
</div>

<div className="step-panel hidden rounded-lg border border-neutral-800/80 overflow-hidden" data-panel="3">
<div className="p-4 border-b border-neutral-800/80">
<h2 className="text-xl font-semibold tracking-tight">3. 매칭 및 보정</h2>
<p className="text-sm text-neutral-400 mt-1">오타 수정 · 장르 표준화 · Discogs 매칭 · 가격 제안</p>
</div>
<div className="p-4 grid grid-cols-12 gap-4">
<div className="col-span-12 lg:col-span-5">
<div className="rounded-lg border border-neutral-800/80 p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-4 w-4 text-neutral-300" data-lucide="sparkles"></i>
                        AI 자동 보정
                        <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] border border-emerald-500/30 text-emerald-300">AI Hub</span>
</div>
<label className="inline-flex items-center gap-2 cursor-pointer">
<input checked="" className="peer sr-only" id="toggleAI" type="checkbox"/>
<span className="w-9 h-5 rounded-full bg-neutral-800 border border-neutral-700 relative transition after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-neutral-400 peer-checked:bg-emerald-500/30 peer-checked:after:left-[1.375rem] peer-checked:after:bg-emerald-300"></span>
</label>
</div>
<div className="space-y-2 text-sm">
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="mt-0.5 w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400 transition"></span>
<div className="flex-1">
<div className="font-medium">오타 자동 수정</div>
<div className="text-neutral-400 text-xs mt-0.5">"Betles" → "Beatles", "Blue not" → "Blue Note"</div>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="mt-0.5 w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400 transition"></span>
<div className="flex-1">
<div className="font-medium">장르 자동 매칭</div>
<div className="text-neutral-400 text-xs mt-0.5">"Jazz, Funk" → "Jazz", "Funk/Soul"</div>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="mt-0.5 w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400 transition"></span>
<div className="flex-1">
<div className="font-medium">Discogs 자동 매칭</div>
<div className="text-neutral-400 text-xs mt-0.5">URL 없으면 아티스트+앨범명 기반 검색 · 95% 이상 자동 적용</div>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="mt-0.5 w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400 transition"></span>
<div className="flex-1">
<div className="font-medium">가격 제안</div>
<div className="text-neutral-400 text-xs mt-0.5">시장가 · 컨디션 반영 자동 조정</div>
</div>
</label>
</div>
<div className="rounded-md border border-neutral-800/80 bg-neutral-900/40 p-3 text-xs text-neutral-400">
<div className="flex items-center gap-2 mb-1"><i className="h-3.5 w-3.5" data-lucide="info"></i>적용 미리보기</div>
<ul className="space-y-1">
<li>Artist: "Beatels" → "Beatles"</li>
<li>Genre: "Funk" → "Funk/Soul"</li>
<li>Discogs: 매칭률 96% (자동)</li>
</ul>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-7">
<div className="rounded-lg border border-neutral-800/80 overflow-hidden">
<div className="p-3 border-b border-neutral-800/80 text-sm font-medium">컬럼 매핑 (자동 감지)</div>
<div className="divide-y divide-neutral-800/80">

<div className="grid grid-cols-12 gap-3 p-3 items-center">
<div className="col-span-5 text-sm text-neutral-300">Artist</div>
<div className="col-span-7">
<select className="w-full bg-neutral-950 border border-neutral-800/80 rounded-md px-3 py-2 text-sm">
<option>아티스트</option>
<option>앨범명</option>
<option>발매연도</option>
</select>
</div>
</div>
<div className="grid grid-cols-12 gap-3 p-3 items-center">
<div className="col-span-5 text-sm text-neutral-300">Title</div>
<div className="col-span-7">
<select className="w-full bg-neutral-950 border border-neutral-800/80 rounded-md px-3 py-2 text-sm">
<option>앨범명</option>
<option>아티스트</option>
<option>레이블</option>
</select>
</div>
</div>
<div className="grid grid-cols-12 gap-3 p-3 items-center">
<div className="col-span-5 text-sm text-neutral-300">Year</div>
<div className="col-span-7">
<select className="w-full bg-neutral-950 border border-neutral-800/80 rounded-md px-3 py-2 text-sm">
<option>발매연도</option>
<option>재고수량</option>
</select>
</div>
</div>
<div className="grid grid-cols-12 gap-3 p-3 items-center">
<div className="col-span-5 text-sm text-neutral-300">Genre</div>
<div className="col-span-7">
<select className="w-full bg-neutral-950 border border-neutral-800/80 rounded-md px-3 py-2 text-sm">
<option>장르</option>
<option>설명</option>
</select>
</div>
</div>
<div className="grid grid-cols-12 gap-3 p-3 items-center">
<div className="col-span-5 text-sm text-neutral-300">Price</div>
<div className="col-span-7">
<select className="w-full bg-neutral-950 border border-neutral-800/80 rounded-md px-3 py-2 text-sm">
<option>가격</option>
<option>Discogs URL</option>
</select>
</div>
</div>
<div className="grid grid-cols-12 gap-3 p-3 items-center">
<div className="col-span-5 text-sm text-neutral-300">Condition</div>
<div className="col-span-7">
<select className="w-full bg-neutral-950 border border-neutral-800/80 rounded-md px-3 py-2 text-sm">
<option>컨디션(미디어)</option>
<option>컨디션(커버)</option>
</select>
</div>
</div>
</div>
<div className="p-3 flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 text-sm">매핑 초기화</button>
<button className="px-3 py-2 rounded-md bg-white text-neutral-950 hover:opacity-95 text-sm" id="btnStep3Next">미리보기로</button>
</div>
</div>
</div>
</div>
</div>

<div className="step-panel hidden rounded-lg border border-neutral-800/80 overflow-hidden" data-panel="4">
<div className="p-4 border-b border-neutral-800/80">
<h2 className="text-xl font-semibold tracking-tight">4. 최종 확인</h2>
<p className="text-sm text-neutral-400 mt-1">샘플 10개를 확인하고 옵션을 선택하세요.</p>
</div>
<div className="p-4 grid grid-cols-12 gap-4">
<div className="col-span-12 lg:col-span-6">
<div className="rounded-lg border border-neutral-800/80 overflow-hidden">
<div className="p-3 border-b border-neutral-800/80 text-sm font-medium">등록 미리보기 (10개)</div>
<div className="divide-y divide-neutral-800/80">
<div className="p-3">
<div className="text-sm font-medium">Miles Davis - Kind of Blue</div>
<div className="text-xs text-neutral-400 mt-1">장르: Jazz | 1959 | Blue Note</div>
<div className="text-xs text-neutral-400">컨디션: NM/VG+ | ₩45,000 | 재고: 1</div>
</div>
<div className="p-3">
<div className="text-sm font-medium">The Beatles - Abbey Road</div>
<div className="text-xs text-neutral-400 mt-1">장르: Rock | 1969 | Apple Records</div>
<div className="text-xs text-neutral-400">컨디션: VG+/VG+ | ₩38,000 | 재고: 2</div>
</div>
<div className="p-3 text-xs text-neutral-500">... 1,245개 더보기</div>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-6">
<div className="rounded-lg border border-neutral-800/80 p-4 space-y-4">
<div>
<div className="text-sm font-medium mb-2">이미지 처리</div>
<div className="space-y-2 text-sm">
<label className="flex items-center gap-3 cursor-pointer">
<input checked="" className="sr-only peer" name="img" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                          Discogs에서 자동 가져오기 (추천)
                        </label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="sr-only peer" name="img" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                          기본 이미지 사용
                        </label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="sr-only peer" name="img" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                          나중에 수동 추가
                        </label>
</div>
</div>
<div>
<div className="text-sm font-medium mb-2">AI 자동 생성</div>
<label className="flex items-center justify-between text-sm py-1">
<span>앨범 설명 자동 생성</span>
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-9 h-5 rounded-full bg-neutral-800 border border-neutral-700 relative transition after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-neutral-400 peer-checked:bg-emerald-500/30 peer-checked:after:left-[1.375rem] peer-checked:after:bg-emerald-300"></span>
</label>
<label className="flex items-center justify-between text-sm py-1">
<span>가격 최적화 적용</span>
<input checked="" className="peer sr-only" type="checkbox"/>
<span className="w-9 h-5 rounded-full bg-neutral-800 border border-neutral-700 relative transition after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-neutral-400 peer-checked:bg-emerald-500/30 peer-checked:after:left-[1.375rem] peer-checked:after:bg-emerald-300"></span>
</label>
<label className="flex items-center justify-between text-sm py-1">
<span>자동 큐레이션 추가</span>
<input className="peer sr-only" type="checkbox"/>
<span className="w-9 h-5 rounded-full bg-neutral-800 border border-neutral-700 relative transition after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:h-4 after:w-4 after:rounded-full after:bg-neutral-400 peer-checked:bg-emerald-500/30 peer-checked:after:left-[1.375rem] peer-checked:after:bg-emerald-300"></span>
</label>
</div>
<div>
<div className="text-sm font-medium mb-2">게시 설정</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input checked="" className="sr-only peer" name="publish" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                          즉시 게시
                        </label>
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input className="sr-only peer" name="publish" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                          임시 저장
                        </label>
<div className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80">
<label className="flex items-center gap-2 cursor-pointer">
<input className="sr-only peer" name="publish" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                            예약 게시
                          </label>
<input className="ml-auto bg-neutral-950 border border-neutral-800/80 rounded-md px-2 py-1 text-xs text-neutral-300" type="datetime-local"/>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-12 flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60">이전</button>
<button className="px-3 py-2 rounded-md bg-white text-neutral-950 hover:opacity-95" id="btnStep4Next">일괄 등록 시작</button>
</div>
</div>
</div>

<div className="step-panel hidden rounded-lg border border-neutral-800/80 overflow-hidden" data-panel="5">
<div className="p-4 border-b border-neutral-800/80">
<h2 className="text-xl font-semibold tracking-tight">5. 일괄 등록</h2>
<p className="text-sm text-neutral-400 mt-1">진행 상태와 결과 리포트를 확인하세요.</p>
</div>
<div className="p-4 space-y-4">

<div className="rounded-lg border border-neutral-800/80 p-4" id="progressCard">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">등록 중...</div>
<div className="text-sm text-neutral-300" id="progressPct">0%</div>
</div>
<div className="mt-2 w-full h-2 rounded-full bg-neutral-900 overflow-hidden">
<div className="h-2 bg-white/90 w-[0%]" id="progressBar"></div>
</div>
<div className="mt-2 text-xs text-neutral-400">
<div>현재: <span id="progressTitle">대기 중...</span></div>
<div>예상 완료: <span id="eta">약 3분 남음</span></div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
<div className="rounded-md border border-neutral-800/80 p-2">
<div className="text-emerald-300 flex items-center justify-center gap-1"><i className="h-4 w-4" data-lucide="check-circle-2"></i>성공</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="okCount">0</div>
</div>
<div className="rounded-md border border-neutral-800/80 p-2">
<div className="text-amber-300 flex items-center justify-center gap-1"><i className="h-4 w-4" data-lucide="alert-triangle"></i>경고</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="warnCount">0</div>
</div>
<div className="rounded-md border border-neutral-800/80 p-2">
<div className="text-rose-300 flex items-center justify-center gap-1"><i className="h-4 w-4" data-lucide="x-octagon"></i>실패</div>
<div className="mt-1 text-lg font-semibold tracking-tight" id="failCount">0</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 text-sm" id="btnBackground">백그라운드에서 계속 등록</button>
<button className="px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 text-sm text-neutral-300" id="btnCancel">취소</button>
</div>
</div>

<div className="hidden rounded-lg border border-neutral-800/80 overflow-hidden" id="reportCard">
<div className="p-4 border-b border-neutral-800/80">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="badge-check"></i>
<div className="font-medium">등록 완료!</div>
</div>
</div>
<div className="p-4 space-y-4">
<div className="rounded-md border border-neutral-800/80 p-4">
<div className="text-sm text-neutral-300">총 등록</div>
<div className="text-2xl font-semibold tracking-tight mt-1">1,247개 LP 등록 완료</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-md border border-neutral-800/80 p-3">
<div className="text-sm text-neutral-400 mb-1">성공</div>
<div className="text-xl font-semibold tracking-tight">1,235</div>
</div>
<div className="rounded-md border border-neutral-800/80 p-3">
<div className="text-sm text-neutral-400 mb-1">경고</div>
<div className="text-xl font-semibold tracking-tight">10</div>
<div className="text-xs text-neutral-500 mt-1">중복 카탈로그 번호</div>
</div>
<div className="rounded-md border border-neutral-800/80 p-3">
<div className="text-sm text-neutral-400 mb-1">실패</div>
<div className="text-xl font-semibold tracking-tight">2</div>
<div className="text-xs text-neutral-500 mt-1">필수 정보 부족</div>
</div>
</div>
<div className="rounded-md border border-neutral-800/80 p-4">
<div className="text-sm font-medium mb-2 flex items-center gap-2"><i className="h-4 w-4" data-lucide="bot"></i>AI 자동 처리 (AI Hub)</div>
<ul className="text-sm text-neutral-400 space-y-1">
<li>앨범 설명 생성: 1,235개</li>
<li>가격 최적화 적용: 1,235개</li>
<li>Discogs 매칭: 1,189개 (96%)</li>
</ul>
</div>
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 text-sm"><i className="h-4 w-4 mr-1 inline" data-lucide="download"></i>실패 항목 다운로드</button>
<button className="px-3 py-2 rounded-md bg-white text-neutral-950 hover:opacity-95 text-sm"><i className="h-4 w-4 mr-1 inline" data-lucide="list"></i>등록된 LP 보기</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden flex-1 overflow-y-auto" id="section-update">
<header className="px-4 lg:px-6 py-5">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">재고 업데이트 모드</h1>
<p className="text-sm text-neutral-400 mt-1">기존 재고를 기준 컬럼으로 매칭하여 가격, 수량, 컨디션 등을 일괄 변경합니다.</p>
</header>
<div className="px-4 lg:px-6 pb-10 grid grid-cols-12 gap-4">
<div className="col-span-12 lg:col-span-8 space-y-4">
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="text-sm font-medium mb-2">기준 컬럼 선택</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input checked="" className="sr-only peer" name="key" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                  카탈로그 번호 (추천)
                </label>
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input className="sr-only peer" name="key" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                  아티스트+앨범명
                </label>
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input className="sr-only peer" name="key" type="radio"/>
<span className="w-4 h-4 rounded-full border border-neutral-700 bg-neutral-900 peer-checked:border-emerald-400 peer-checked:ring-4 peer-checked:ring-emerald-500/20"></span>
                  Discogs URL
                </label>
</div>
</div>
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="text-sm font-medium mb-2">업데이트 항목 선택</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400"></span>
                  가격
                </label>
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400"></span>
                  재고 수량
                </label>
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400"></span>
                  컨디션
                </label>
<label className="flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-800/80 hover:bg-neutral-900/60 cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-neutral-700 bg-neutral-900 peer-checked:bg-emerald-400/90 peer-checked:border-emerald-400"></span>
                  전체 정보
                </label>
</div>
</div>
<div className="rounded-lg border border-neutral-800/80 p-4">
<div className="text-sm font-medium mb-3">파일 업로드</div>
<label className="flex flex-col items-center justify-center rounded-md border border-dashed border-neutral-800/80 bg-neutral-950/40 p-6 hover:border-neutral-700 hover:bg-neutral-900/30 transition cursor-pointer">
<input accept=".csv,.xlsx,.xls,.tsv" className="hidden" type="file"/>
<div className="flex items-center gap-3"></div></label></div></div></div></section></main></div>
    </>
  );
}
