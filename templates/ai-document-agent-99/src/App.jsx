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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b backdrop-blur-md border-black/5 bg-zinc-50/80">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full flex items-center justify-center bg-black">
<div className="w-2 h-2 rounded-full bg-zinc-50"></div>
</div>
<span className="text-sm font-medium tracking-tight">RAG.OS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-600">
<a className="transition-colors hover:text-black" href="#">라이브러리</a>
<a className="transition-colors hover:text-black" href="#">에이전트 빌더</a>
<a className="transition-colors hover:text-black" href="#">API 문서</a>
<a className="transition-colors hover:text-black" href="#">요금제</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs transition-colors hidden sm:block text-zinc-600 hover:text-black" href="#">로그인</a>
<button className="text-xs font-medium px-4 py-2 rounded-full transition-colors flex items-center gap-2 bg-black text-zinc-50 hover:bg-zinc-800">
<span>대시보드</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</nav>

<main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">

<section className="snap-start flex flex-col glow-bg w-full h-screen pr-6 pl-6 relative items-center justify-center">
<div className="max-w-4xl w-full text-center space-y-8 mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs backdrop-blur-sm border-black/10 bg-black/5 text-zinc-700">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    스마트 세션 디렉토리 기능 추가
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b to-zinc-500 leading-[1.1] from-black via-black">
                    당신의 문서를 위한<br/>
                    지능형 에이전트
                </h1>
<p className="text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed text-zinc-600">
                    PDF, DOCX, MD 파일을 업로드하세요. <br className="hidden sm:block"/>
                    자동으로 생성된 AI 에이전트가 문맥을 파악하고 분류하여 답변합니다.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="h-12 px-8 rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] bg-black text-zinc-50 hover:bg-zinc-800">
                        문서 업로드하기
                        <iconify-icon icon="solar:upload-minimalistic-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full border font-medium text-sm transition-colors flex items-center gap-2 border-zinc-300 text-zinc-700 hover:bg-black/5">
                        데모 영상 보기
                        <iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t to-transparent z-10 from-zinc-50"></div>
</section>

<section className="snap-start flex bg-zinc-50 w-full h-screen border-black/5 border-t pr-6 pl-6 relative items-center justify-center">
<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 order-2 lg:order-1">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 bg-zinc-100 border-black/10 text-black">
<iconify-icon icon="solar:library-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-black">
                        지식은 보관하고,<br/>
                        에이전트는 생성합니다.
                    </h2>
<p className="text-base md:text-lg leading-relaxed font-light text-zinc-600">
                        문서를 한 번만 업로드하면 영구적으로 재사용 가능한 <strong>라이브러리</strong>가 구축됩니다.
                        파일을 올리는 순간, 해당 지식을 학습한 <strong>전용 에이전트</strong>가 즉시 생성됩니다.
                    </p>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-black">문서 라이브러리</h4>
<p className="text-xs text-zinc-500 mt-1">업로드된 문서는 중앙 라이브러리에 저장되어, 언제든 다른 세션에서 다시 불러와 사용할 수 있습니다.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:magic-stick-3-bold" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-black">자동 에이전트 빌더</h4>
<p className="text-xs text-zinc-500 mt-1">사용자가 직접 생성하거나, 파일 업로드 시 자동으로 생성된 에이전트와 대화하세요.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative group">

<div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200 from-emerald-400 to-blue-400"></div>

<div className="relative border rounded-xl overflow-hidden shadow-2xl bg-zinc-50 border-black/10 aspect-[4/3] flex">

<div className="w-1/3 bg-zinc-100/50 border-r border-black/5 p-4 flex flex-col gap-2">
<div className="text-xs font-semibold text-zinc-400 mb-2 px-2 uppercase tracking-wider">Library</div>
<div className="flex items-center gap-2 px-3 py-2 bg-white border border-black/5 rounded-md shadow-sm text-xs font-medium">
<iconify-icon className="text-emerald-500" icon="solar:folder-with-files-linear"></iconify-icon>
                                모든 문서
                            </div>
<div className="flex items-center gap-2 px-3 py-2 text-zinc-500 hover:bg-zinc-100 rounded-md transition-colors text-xs">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                최근 업로드
                            </div>
<div className="text-xs font-semibold text-zinc-400 mt-4 mb-2 px-2 uppercase tracking-wider">Agents</div>
<div className="flex items-center gap-2 px-3 py-2 text-zinc-500 hover:bg-zinc-100 rounded-md transition-colors text-xs">
<iconify-icon className="text-blue-500" icon="solar:user-circle-linear"></iconify-icon>
                                마케팅 분석 봇
                            </div>
<div className="flex items-center gap-2 px-3 py-2 text-zinc-500 hover:bg-zinc-100 rounded-md transition-colors text-xs">
<iconify-icon className="text-purple-500" icon="solar:document-text-linear"></iconify-icon>
                                계약서 검토 봇
                            </div>
</div>

<div className="w-2/3 p-6 bg-zinc-50">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold">최근 업로드 파일</h3>
<button className="text-[10px] bg-black text-white px-3 py-1.5 rounded-full flex items-center gap-1">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                                    업로드
                                </button>
</div>
<div className="space-y-3">

<div className="p-3 border rounded-lg bg-white border-black/5 flex items-center justify-between group cursor-pointer hover:border-emerald-500/30 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:file-text-bold" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-zinc-800">Q4_Result.pdf</div>
<div className="text-[10px] text-zinc-400">PDF • 2.4 MB</div>
</div>
</div>
<span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium">에이전트 생성됨</span>
</div>

<div className="p-3 border rounded-lg bg-white border-black/5 flex items-center justify-between group cursor-pointer hover:border-blue-500/30 transition-all">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:file-text-bold" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-zinc-800">Tech_Spec.docx</div>
<div className="text-[10px] text-zinc-400">DOCX • 1.1 MB</div>
</div>
</div>
<span className="text-[10px] px-2 py-1 rounded-full bg-blue-50 text-blue-600 font-medium">처리 중...</span>
</div>
</div>

<div className="mt-6 p-3 rounded-lg border border-yellow-200 bg-yellow-50/50 flex items-start gap-3">
<iconify-icon className="text-yellow-600 mt-0.5" icon="solar:lightbulb-bolt-linear" width="14"></iconify-icon>
<div className="text-xs text-yellow-800">
<span className="font-semibold">제안:</span> 'Q4_Result.pdf' 파일은 <span className="underline decoration-dashed">재무 리포트</span> 디렉토리에 추가하시겠습니까?
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center px-6 border-t bg-zinc-50 border-black/5">
<div className="max-w-6xl w-full">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">강력한 분류 및 확장성</h2>
<p className="font-light text-zinc-600">다양한 포맷을 지원하고, 스스로 정리하는 똑똑한 작업 공간.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border transition-all duration-300 bg-zinc-100/40 border-black/5 hover:border-black/10 hover:bg-zinc-100/60 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:folder-with-files-bold" width="100"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-orange-600">
<iconify-icon icon="solar:folder-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-black">스마트 세션 디렉토리</h3>
<p className="text-sm leading-relaxed font-light text-zinc-600">
                            주제별로 세션을 담을 폴더를 직접 만들거나, 질문 내용에 따라 AI가 가장 적합한 디렉토리를 자동으로 추천하여 정리합니다.
                        </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 bg-zinc-100/40 border-black/5 hover:border-black/10 hover:bg-zinc-100/60 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:file-text-bold" width="100"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-blue-600">
<iconify-icon icon="solar:file-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-black">폭넓은 문서 호환성</h3>
<p className="text-sm leading-relaxed font-light text-zinc-600">
                            형식에 구애받지 마세요. <span className="font-medium text-zinc-800">PDF, DOCX, TXT, MD</span> 등 다양한 포맷을 완벽하게 지원하며 텍스트를 추출합니다.
                        </p>
</div>

<div className="group p-8 rounded-2xl border transition-all duration-300 bg-zinc-100/40 border-black/5 hover:border-black/10 hover:bg-zinc-100/60 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:robot-bold" width="100"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-purple-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight text-black">커스텀 에이전트 빌더</h3>
<p className="text-sm leading-relaxed font-light text-zinc-600">
                            특정 목적을 가진 에이전트를 직접 생성하거나, 업로드된 문서를 기반으로 즉시 생성된 에이전트를 활용하세요.
                        </p>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center px-6 border-t relative overflow-hidden bg-zinc-50 border-black/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none bg-black/5"></div>
<div className="max-w-2xl w-full text-center relative z-10 space-y-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black">
                    지금 바로<br/>
                    나만의 지식 베이스를.<br/>
</h2>
<p className="text-lg font-light text-zinc-600">
                    문서를 업로드하고 1분 안에 첫 번째 에이전트와 대화를 시작해보세요.
                </p>
<div className="flex flex-col items-center gap-4">
<button className="w-full sm:w-auto h-14 px-10 rounded-full font-medium text-base hover:scale-105 transition-transform flex items-center justify-center gap-2 bg-black text-zinc-50">
                        무료로 시작하기
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-xs text-zinc-400 font-light">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>SOC2 보안 인증 서버 저장</span>
</div>
</div>
</div>
<footer className="absolute bottom-6 w-full px-6 flex flex-col md:flex-row justify-between items-center text-xs border-t pt-6 max-w-7xl text-zinc-400 border-black/5">
<div>© 2024 RAG.OS Inc. All rights reserved.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-600" href="#">Twitter</a>
<a className="hover:text-zinc-600" href="#">GitHub</a>
<a className="hover:text-zinc-600" href="#">Discord</a>
</div>
</footer>
</section>
</main>

    </>
  );
}
