import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Modal Logic
        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = modal.querySelector('div[class*="rounded"]'); // Select inner content for animation
            
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                // Allow browser to render 'hidden' removal before adding animation class
                setTimeout(() => {
                    content.classList.add('open');
                }, 10);
            } else {
                content.classList.remove('open');
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 200); // Wait for transition
            }
        }

        // Left Sidebar (Navigation) Toggle - Mobile
        function toggleLeftSidebar() {
            const sidebar = document.getElementById('leftSidebar');
            const overlay = document.getElementById('sidebar-overlay');
            
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                overlay.classList.add('hidden');
            } else {
                sidebar.classList.add('open');
                overlay.classList.remove('hidden');
            }
        }

        // Right Panel (Resume) Toggle - Responsive
        function toggleRightPanel() {
            const panel = document.getElementById('rightPanel');
            const overlay = document.getElementById('right-panel-overlay');
            
            // Check if we are on mobile/tablet (lg breakpoint in tailwind is 1024px)
            const isMobile = window.innerWidth < 1024;

            if (isMobile) {
                // Mobile behavior: Toggle Drawer
                if (panel.classList.contains('open')) {
                    panel.classList.remove('open');
                    overlay.classList.add('hidden');
                } else {
                    panel.classList.add('open');
                    overlay.classList.remove('hidden');
                }
            } else {
                // Desktop behavior: Toggle visibility directly
                panel.classList.toggle('hidden');
                panel.classList.toggle('lg:flex');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex lg:px-6 shrink-0 z-30 bg-white h-14 border-zinc-200 border-b pr-4 pl-4 items-center justify-between relative">
<div className="flex items-center gap-3">

<button className="md:hidden p-1.5 -ml-1.5 text-zinc-500 hover:bg-zinc-100 rounded-md" onclick="toggleLeftSidebar()">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>

<div className="flex items-center gap-2 cursor-pointer">
<div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-sm font-bold tracking-tight text-zinc-900 hidden sm:block">LIFEMENTOR</span>
<span className="text-sm font-bold tracking-tight text-zinc-900 sm:hidden">LM</span>
</div>

<nav className="hidden md:flex items-center space-x-1 ml-4">
<a className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">대시보드</a>
<a className="px-3 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-100 rounded-md" href="#">면접 준비</a>
<a className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors" href="#">자소서 분석</a>
</nav>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-500 hover:bg-zinc-100 rounded-full border border-zinc-200 transition-colors">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                System Normal
            </button>
<button className="lg:hidden p-2 text-zinc-500 hover:bg-zinc-100 rounded-md" onclick="toggleRightPanel()">
<svg className="lucide lucide-layout w-5 h-5" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 cursor-pointer">
<span className="text-xs font-bold">JD</span>
</div>
</div>
</header>

<div className="flex flex-1 overflow-hidden relative">

<div className="fixed inset-0 bg-black/20 z-30 hidden md:hidden glass-panel" id="sidebar-overlay" onclick="toggleLeftSidebar()"></div>

<aside className="drawer-left absolute md:static inset-y-0 left-0 z-40 w-72 bg-zinc-50/95 backdrop-blur md:bg-zinc-50/80 border-r border-zinc-200 flex flex-col shrink-0 md:transform-none h-full shadow-xl md:shadow-none" id="leftSidebar">

<div className="p-4 border-b border-zinc-200/60 mt-14 md:mt-0">
<div className="relative">
<button className="w-full flex items-center justify-between px-3 py-2 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-zinc-300 transition-all group">
<div className="flex items-center gap-2 overflow-hidden">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0"></div>
<span className="text-sm font-semibold text-zinc-800 truncate">삼성전자 마케팅 직무</span>
</div>
<svg className="lucide lucide-chevrons-up-down w-3.5 h-3.5 text-zinc-400" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-4">
<div className="px-2 pt-2">
<p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2 px-2">Interview Session</p>

<div className="relative p-3 bg-white border border-blue-200 shadow-sm rounded-lg mb-2 cursor-pointer group ring-1 ring-blue-50" onclick="if(window.innerWidth &lt; 768) toggleLeftSidebar()">
<div className="flex gap-3">
<div className="flex flex-col items-center gap-1 pt-0.5">
<div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold">1</div>
<div className="w-px h-full bg-blue-100"></div>
</div>
<div className="flex-1 pb-1">
<span className="text-xs font-semibold text-blue-600 mb-1 block">직무 적합성</span>
<p className="text-sm font-medium text-zinc-800 leading-snug line-clamp-2">문제 해결 과정에서 본인이 주도적으로 해결했던 사례를 말해주세요.</p>
</div>
</div>
</div>

<div className="relative p-3 hover:bg-white border border-transparent hover:border-zinc-200 rounded-lg mb-1 cursor-pointer group transition-all">
<div className="flex gap-3">
<div className="flex flex-col items-center gap-1 pt-0.5">
<div className="w-4 h-4 rounded-full bg-zinc-200 text-zinc-500 flex items-center justify-center text-[10px] font-bold">2</div>
</div>
<div className="flex-1">
<span className="text-xs font-medium text-zinc-400 mb-0.5 block">인성 면접</span>
<p className="text-sm text-zinc-500 leading-snug line-clamp-1">동료와 의견 충돌이 발생했을 때...</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-3 border-t border-zinc-200 bg-white">
<button className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-zinc-600 bg-zinc-50 border border-zinc-200 rounded-lg hover:bg-zinc-100 hover:text-zinc-900 transition-all" onclick="toggleModal('modal-load')">
<svg className="lucide lucide-library w-3.5 h-3.5" data-lucide="library" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
                    질문 보관함 열기
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative w-full">

<div className="sticky top-0 z-20 px-4 md:px-6 py-3 bg-white/80 backdrop-blur-md border-b border-zinc-100 flex items-center justify-between">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="group shrink-0 flex items-center gap-2 pl-3 pr-4 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full text-xs font-medium transition-all shadow-lg shadow-zinc-200" onclick="toggleModal('modal-generate')">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-yellow-300 group-hover:rotate-12 transition-transform" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="whitespace-nowrap">AI 질문 생성</span>
</button>
<div className="h-4 w-px bg-zinc-200 mx-1 md:mx-2 shrink-0"></div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 bg-zinc-50 px-2 py-1 rounded border border-zinc-100 shrink-0">
<svg className="lucide lucide-history w-3 h-3" data-lucide="history" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
<span className="whitespace-nowrap">자동 저장 (18:32)</span>
</div>
</div>
<div className="flex items-center gap-4 shrink-0">
<label className="flex items-center cursor-pointer gap-2 group">
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-800 hidden sm:block">코칭 모드</span>
<div className="relative w-8 h-4 bg-zinc-200 rounded-full transition-colors group-hover:bg-zinc-300">
<div className="absolute left-0.5 top-0.5 bg-white w-3 h-3 rounded-full shadow-sm"></div>
</div>
</label>
</div>
</div>

<div className="flex-1 overflow-y-auto px-4 md:px-12 py-6 bg-white pb-24 md:pb-8">
<div className="max-w-3xl mx-auto space-y-6">

<div className="space-y-2">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wide">Competency</span>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-50 text-zinc-500 border border-zinc-200">난이도 상</span>
</div>
<h1 className="text-xl md:text-2xl font-semibold text-zinc-900 leading-snug tracking-tight">
                            문제 해결 과정에서 본인이 주도적으로 해결했던 사례를 말해주세요.
                        </h1>
<p className="text-sm text-zinc-500">
                            지원자가 직면한 문제 상황을 어떻게 정의하고, 어떤 논리로 해결했는지 파악하기 위한 질문입니다.
                        </p>
</div>

<div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-50 via-white to-white border border-indigo-100 p-4 shadow-sm transition-all hover:shadow-md">
<div className="flex gap-3">
<div className="mt-0.5 p-1.5 bg-indigo-100 rounded-md text-indigo-600 shrink-0 h-fit">
<svg className="lucide lucide-zap w-3.5 h-3.5 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold text-indigo-900 uppercase tracking-wider">AI Insight</h3>
<button className="opacity-0 group-hover:opacity-100 text-[10px] font-medium text-indigo-500 hover:text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-100 transition-all">자세히 보기</button>
</div>
<p className="text-sm text-zinc-700 leading-relaxed">
                                    이 질문은 <span className="font-semibold text-indigo-700">Action(행동)</span>과 <span className="font-semibold text-indigo-700">Result(결과)</span>가 핵심입니다.
                                </p>
</div>
</div>
</div>

<div className="relative space-y-2">
<div className="flex items-center justify-between px-1">
<label className="text-xs font-semibold text-zinc-700">나의 답변 스크립트</label>
<div className="flex gap-1">
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition"><svg className="lucide lucide-mic w-3.5 h-3.5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg></button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded transition"><svg className="lucide lucide-copy w-3.5 h-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg></button>
</div>
</div>
<textarea className="w-full h-60 md:h-80 p-4 md:p-5 text-base leading-relaxed text-zinc-800 placeholder:text-zinc-300 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none shadow-sm font-normal appearance-none" placeholder="STAR 기법에 맞춰 작성해보세요...">학교에서 진행한 메타버스 교육 플랫폼 공모전에서 선배님들과 함께 문제 해결에 참여했습니다. 

아이디어 구체화 단계에서 주제 선정에 대한 의견 차이로 진행이 더뎌졌습니다. 저는 이를 해결하기 위해 팀원들의 의견을 모두 시각화하여 장단점을 비교하는 매트릭스를 만들자고 제안했습니다.

SWOT 분석을 통해 프로젝트의 약점인 연령별 교육 방식 차이를 분석하여, 콘텐츠를 실감 강의형, 시뮬레이션 형, 게임형 교육 콘텐츠로 세분화하는 아이디어를 도출했습니다. 이러한 주도적인 조정 역할 덕분에 팀은 만장일치로 방향을 정할 수 있었고, 결과적으로 공모전에서 최우수상을 수상했습니다.</textarea>
<div className="absolute bottom-4 right-4 text-xs text-zinc-300 font-medium">
                            392자
                        </div>
</div>

<div className="rounded-xl border border-zinc-200 overflow-hidden bg-white">
<div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200 flex justify-between items-center">
<span className="text-xs font-bold text-zinc-600 flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                답변 평가
                            </span>
<span className="text-xs font-bold text-blue-600">85점</span>
</div>
<div className="p-4 space-y-3">
<div className="flex gap-3 items-start">
<div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0"></div>
<p className="text-sm text-zinc-600 leading-snug"><span className="font-semibold text-zinc-900">구체적 해결책:</span> 매트릭스를 활용한 의사결정 방식이 매우 구체적이고 논리적입니다.</p>
</div>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 bg-white/95 backdrop-blur border-t border-zinc-200 px-4 md:px-6 py-3 flex items-center justify-between z-30 pb-safe">
<button className="flex items-center gap-2 px-2 py-2 text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="text-xs font-medium hidden sm:inline">이전</span>
</button>
<div className="flex gap-2">
<button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 text-zinc-700 text-xs font-semibold rounded-lg shadow-sm hover:bg-zinc-50 transition-all">
<svg className="lucide lucide-refresh-cw w-3.5 h-3.5" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                        재생성
                    </button>
<button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-lg shadow-md shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all" onclick="toggleModal('modal-followup')">
<svg className="lucide lucide-git-branch-plus w-3.5 h-3.5" data-lucide="git-branch-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 3v12"></path><path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path><path d="M15 6a9 9 0 0 0-9 9"></path><path d="M18 15v6"></path><path d="M21 18h-6"></path></svg>
                        꼬리 질문
                    </button>
</div>
<button className="flex items-center gap-2 px-2 py-2 text-zinc-500 hover:text-zinc-900 rounded-md hover:bg-zinc-100 transition-colors">
<span className="text-xs font-medium hidden sm:inline">다음</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</main>

<div className="fixed inset-0 bg-black/20 z-30 hidden lg:hidden glass-panel" id="right-panel-overlay" onclick="toggleRightPanel()"></div>

<aside className="drawer-right absolute lg:static inset-y-0 right-0 z-40 w-80 bg-white border-l border-zinc-200 flex flex-col shrink-0 transform lg:transform-none shadow-2xl lg:shadow-none lg:flex h-full" id="rightPanel">

<div className="flex border-b border-zinc-200 pt-14 lg:pt-0">
<button className="flex-1 py-3 text-xs font-semibold text-zinc-900 border-b-2 border-zinc-900 bg-zinc-50/50">자소서/공고 정보</button>
<button className="flex-1 py-3 text-xs font-medium text-zinc-500 hover:text-zinc-800 hover:bg-zinc-50 transition-colors">메모장</button>
</div>
<div className="flex-1 overflow-y-auto pt-5 pr-5 pb-5 pl-5 space-y-6">

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
<svg className="lucide lucide-target w-3.5 h-3.5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Target
                    </h3>
<div className="bg-zinc-50 rounded-lg p-3 border border-zinc-100">
<div className="flex items-center gap-2 mb-2">
<div className="w-5 h-5 bg-blue-600 rounded text-white flex items-center justify-center font-bold text-[10px]">S</div>
<span className="text-sm font-bold text-zinc-900">삼성전자</span>
</div>
<div className="text-xs text-zinc-600 space-y-1">
<p><span className="text-zinc-400">직무:</span> DX부문 마케팅</p>
<p><span className="text-zinc-400">마감:</span> D-12 (09.30)</p>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
<svg className="lucide lucide-file-search w-3.5 h-3.5" data-lucide="file-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><circle cx="11.5" cy="14.5" r="2.5"></circle><path d="M13.3 16.3 15 18"></path></svg> Key Requirements
                        </h3>
</div>
<div className="space-y-2">
<div className="p-3 border border-zinc-200 rounded-lg hover:border-blue-300 transition-colors bg-white">
<p className="text-xs font-semibold text-zinc-800 mb-1">데이터 기반 의사결정</p>
<p className="text-[11px] text-zinc-500 leading-normal">시장/소비자 데이터 분석을 통한 인사이트 도출 능력 필수</p>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
<svg className="lucide lucide-user-check w-3.5 h-3.5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> My Strength
                    </h3>
<div className="bg-blue-50/50 rounded-lg p-3 border border-blue-100">
<ul className="space-y-2">
<li className="flex gap-2 text-xs text-zinc-700">
<svg className="lucide lucide-check w-3.5 h-3.5 text-blue-500 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="leading-snug">공모전 최우수상 수상</span>
</li>
</ul>
</div>
</div>
</div>
</aside>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-generate" role="dialog">
<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm transition-opacity" onclick="toggleModal('modal-generate')"></div>
<div className="mobile-bottom-sheet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-6 bg-white rounded-t-2xl md:rounded-2xl shadow-2xl transform transition-all scale-100 opacity-100">
<div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mb-4 md:hidden"></div>
<div className="flex items-center justify-between mb-5">
<h3 className="text-lg font-bold text-zinc-900 flex items-center gap-2">
<svg className="lucide lucide-sparkles w-5 h-5 text-yellow-400 fill-current" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    AI 예상 질문 생성
                </h3>
<button className="text-zinc-400 hover:text-zinc-600" onclick="toggleModal('modal-generate')"><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="space-y-5">

<div>
<label className="text-xs font-bold text-zinc-500 uppercase tracking-wide mb-2 block">생성 기준</label>
<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center justify-center p-3 border-2 border-blue-600 bg-blue-50 rounded-xl text-blue-700 font-medium text-sm transition-all">
<svg className="lucide lucide-file-text w-5 h-5 mb-1.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            자소서 기반
                        </button>
<button className="flex flex-col items-center justify-center p-3 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 rounded-xl text-zinc-600 font-medium text-sm transition-all">
<svg className="lucide lucide-building-2 w-5 h-5 mb-1.5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
                            채용공고 기반
                        </button>
</div>
</div>

<button className="w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-semibold hover:bg-zinc-800 shadow-lg shadow-zinc-200 transition-all flex items-center justify-center gap-2 mb-4 md:mb-0" onclick="toggleModal('modal-generate')">
<svg className="lucide lucide-stars w-4 h-4" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    질문 5개 생성하기
                </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-followup" role="dialog">
<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm transition-opacity" onclick="toggleModal('modal-followup')"></div>
<div className="mobile-bottom-sheet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-0 bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden">
<div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mt-3 md:hidden"></div>
<div className="bg-white md:bg-zinc-50 px-6 py-4 border-b border-zinc-100 flex justify-between items-center">
<h3 className="text-sm font-bold text-zinc-900">꼬리 질문 추가</h3>
<button className="text-zinc-400 hover:text-zinc-600" onclick="toggleModal('modal-followup')"><svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="p-6 space-y-4 pb-10 md:pb-6">
<div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
<p className="text-xs font-semibold text-blue-600 mb-1">핵심 키워드</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white rounded text-[10px] font-medium text-zinc-600 border border-blue-100 shadow-sm">공모전 수상</span>
<span className="px-2 py-1 bg-white rounded text-[10px] font-medium text-zinc-600 border border-blue-100 shadow-sm">SWOT 분석</span>
</div>
</div>
<div>
<div className="space-y-2">
<label className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors group active:bg-zinc-50">
<input checked="" className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500" name="followup_type" type="radio"/>
<div>
<span className="text-sm font-semibold text-zinc-800 block">구체적인 해결 과정 검증</span>
</div>
</label>
<label className="flex items-center gap-3 p-3 border border-zinc-200 rounded-lg cursor-pointer hover:bg-zinc-50 transition-colors group active:bg-zinc-50">
<input className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500" name="followup_type" type="radio"/>
<div>
<span className="text-sm font-semibold text-zinc-800 block">결과 및 성과 수치 확인</span>
</div>
</label>
</div>
</div>
<button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-semibold transition-colors" onclick="toggleModal('modal-followup')">
                    선택한 내용으로 질문 추가
                </button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal-load" role="dialog">
<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm transition-opacity" onclick="toggleModal('modal-load')"></div>
<div className="mobile-bottom-sheet absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl p-0 bg-white rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] md:max-h-[80vh]">
<div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mt-3 md:hidden"></div>
<div className="px-6 py-4 border-b border-zinc-200 flex justify-between items-center bg-white">
<div>
<h3 className="text-lg font-bold text-zinc-900">질문 보관함</h3>
<p className="text-xs text-zinc-500 mt-1">이전에 저장했거나 추천받은 질문 세트</p>
</div>
<button className="text-zinc-400 hover:text-zinc-600" onclick="toggleModal('modal-load')"><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
<div className="flex-1 overflow-y-auto p-6 bg-zinc-50 pb-20 md:pb-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-white p-4 rounded-xl border border-zinc-200 shadow-sm hover:ring-2 hover:ring-blue-500/20 hover:border-blue-400 transition-all cursor-pointer group relative active:scale-[0.98]">
<div className="absolute top-4 right-4 text-zinc-300 group-hover:text-blue-500 transition-colors">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<h4 className="font-bold text-zinc-900 text-sm mb-1">삼성전자 마케팅 빈출</h4>
<p className="text-xs text-zinc-500 mb-3">최근 3년간 가장 많이 물어본 기출 질문 20선</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded text-[10px] font-medium">직무역량</span>
<span className="px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded text-[10px] font-medium">창의성</span>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-200 bg-white flex justify-end gap-3 pb-safe">
<button className="flex-1 md:flex-none px-4 py-3 md:py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 rounded-lg transition-colors" onclick="toggleModal('modal-load')">취소</button>
<button className="flex-1 md:flex-none px-4 py-3 md:py-2 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-800 transition-colors" onclick="toggleModal('modal-load')">질문 추가</button>
</div>
</div>
</div>


    </>
  );
}
