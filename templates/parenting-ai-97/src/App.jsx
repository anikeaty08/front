import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // State Management
        let currentScreen = 1;

        function nextOnboarding(screenNum) {
            // Hide current
            document.getElementById(`screen-onboarding-${screenNum-1}`).classList.add('hidden');
            
            // Show next
            const nextScreen = document.getElementById(`screen-onboarding-${screenNum}`);
            nextScreen.classList.remove('hidden');
            
            // Update Progress
            const progress = (screenNum / 3) * 100;
            document.getElementById('progress-bar').style.width = `${progress}%`;
        }

        function finishOnboarding() {
            // Hide onboarding wrapper
            document.getElementById(`screen-onboarding-3`).classList.add('hidden');
            document.getElementById('onboarding-header').classList.add('hidden');
            
            // Show Main App (Chat Tab default)
            document.getElementById('tab-chat').classList.remove('hidden');
            document.getElementById('bottom-nav').classList.remove('hidden');
            document.getElementById('bottom-nav').classList.add('flex');
        }

        function switchToTab(tabId) {
            // Hide all tabs
            const tabs = document.querySelectorAll('.app-tab');
            tabs.forEach(tab => tab.classList.add('hidden'));

            // Show selected tab
            document.getElementById(tabId).classList.remove('hidden');

            // Update Nav Icons
            const navBtns = document.querySelectorAll('.nav-btn');
            navBtns.forEach(btn => {
                btn.classList.remove('text-green-600');
                btn.classList.add('text-slate-400');
            });
            
            // Highlight current nav (This is a quick hack selector based on onclick attribute)
            const activeBtn = Array.from(navBtns).find(btn => btn.getAttribute('onclick').includes(tabId));
            if(activeBtn) {
                activeBtn.classList.remove('text-slate-400');
                activeBtn.classList.add('text-green-600');
            }
        }

        function openPaywall() {
            document.getElementById('paywall').classList.remove('hidden');
        }

        function closePaywall() {
            document.getElementById('paywall').classList.add('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md h-full bg-white shadow-2xl overflow-hidden relative flex flex-col">




<div className="px-6 pt-6 pb-2" id="onboarding-header">
<div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 transition-all duration-500 rounded-full" id="progress-bar" style={{width: '33%'}}></div>
</div>
</div>

<div className="screen flex-1 flex flex-col px-6 py-4 overflow-y-auto fade-in" id="screen-onboarding-1">
<div className="flex-1">
<div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
<i className="w-12 h-12 text-green-600" data-lucide="baby"></i>
</div>
<h1 className="text-2xl font-bold text-center mb-2 tracking-tight">아이 정보를 알려주세요</h1>
<p className="text-slate-500 text-center mb-8 text-sm">맞춤형 코칭을 위해 필요해요.</p>
<div className="space-y-6">

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">아이 나이</label>
<div className="flex gap-2">
<input className="flex-1 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-green-500 font-bold text-lg text-center" placeholder="36" type="number"/>
<select className="bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none font-bold text-slate-600">
<option>개월</option>
<option>세</option>
</select>
</div>
</div>

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">성별</label>
<div className="grid grid-cols-2 gap-3">
<button className="border-2 border-slate-200 rounded-xl py-3 font-semibold text-slate-500 hover:border-green-500 hover:bg-green-50 hover:text-green-600 transition">남아</button>
<button className="border-2 border-slate-200 rounded-xl py-3 font-semibold text-slate-500 hover:border-green-500 hover:bg-green-50 hover:text-green-600 transition">여아</button>
</div>
</div>

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">기질 (선택)</label>
<div className="flex flex-wrap gap-2">
<button className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-green-100 hover:text-green-700 hover:border-green-200">예민함</button>
<button className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-green-100 hover:text-green-700 hover:border-green-200">에너지 넘침</button>
<button className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-green-100 hover:text-green-700 hover:border-green-200">낯가림</button>
<button className="bg-slate-50 border border-slate-200 rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-green-100 hover:text-green-700 hover:border-green-200">순함</button>
</div>
</div>
</div>
</div>
<button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-2xl border-b-4 border-green-700 btn-press uppercase tracking-wide mt-4" onclick="nextOnboarding(2)">
                다음으로
            </button>
</div>

<div className="screen hidden flex-1 flex flex-col px-6 py-4 overflow-y-auto fade-in" id="screen-onboarding-2">
<div className="flex-1">
<h1 className="text-2xl font-bold text-center mb-2 tracking-tight">부모님 프로필</h1>
<p className="text-slate-500 text-center mb-8 text-sm">성향에 맞춰 대화 톤을 조절해드려요.</p>
<div className="space-y-6">

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">역할</label>
<div className="grid grid-cols-2 gap-3">
<button className="border-2 border-green-500 bg-green-50 text-green-700 rounded-xl py-3 font-bold transition">엄마</button>
<button className="border-2 border-slate-200 rounded-xl py-3 font-semibold text-slate-500 hover:border-green-500 transition">아빠</button>
<button className="border-2 border-slate-200 rounded-xl py-3 font-semibold text-slate-500 hover:border-green-500 transition">조부모</button>
<button className="border-2 border-slate-200 rounded-xl py-3 font-semibold text-slate-500 hover:border-green-500 transition">기타</button>
</div>
</div>

<div>
<label className="block text-sm font-bold text-slate-700 mb-2">육아 환경</label>
<div className="space-y-2">
<button className="w-full text-left border-2 border-slate-200 rounded-xl px-4 py-3 font-semibold text-slate-600 hover:border-green-500 flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="users"></i>
                                공동 육아 (맞벌이 등)
                             </button>
<button className="w-full text-left border-2 border-slate-200 rounded-xl px-4 py-3 font-semibold text-slate-600 hover:border-green-500 flex items-center gap-3">
<i className="w-5 h-5 text-slate-400" data-lucide="user"></i>
                                주 양육자 전담
                             </button>
</div>
</div>
</div>
</div>
<button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-2xl border-b-4 border-green-700 btn-press uppercase tracking-wide mt-4" onclick="nextOnboarding(3)">
                다음으로
            </button>
</div>

<div className="screen hidden flex-1 flex flex-col px-6 py-4 overflow-y-auto fade-in" id="screen-onboarding-3">
<div className="flex-1">
<h1 className="text-2xl font-bold text-center mb-2 tracking-tight">가장 큰 고민은?</h1>
<p className="text-slate-500 text-center mb-8 text-sm">바로 해결책을 찾아드릴게요.</p>
<div className="grid grid-cols-1 gap-4">

<button className="group relative overflow-hidden bg-white border-2 border-slate-200 rounded-2xl p-5 text-left hover:border-green-500 hover:shadow-lg transition-all btn-press border-b-4" onclick="finishOnboarding()">
<div className="flex justify-between items-start mb-2">
<div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
<i className="w-6 h-6" data-lucide="frown"></i>
</div>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-1">떼쓰기가 너무 심해요</h3>
<p className="text-xs text-slate-500 font-medium">마트나 공공장소에서 통제가 안 돼요.</p>
</button>

<button className="group relative overflow-hidden bg-white border-2 border-slate-200 rounded-2xl p-5 text-left hover:border-green-500 hover:shadow-lg transition-all btn-press border-b-4" onclick="finishOnboarding()">
<div className="flex justify-between items-start mb-2">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600">
<i className="w-6 h-6" data-lucide="moon"></i>
</div>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-1">잠을 안 자려고 해요</h3>
<p className="text-xs text-slate-500 font-medium">수면 패턴이 불규칙하고 힘들어요.</p>
</button>

<button className="group relative overflow-hidden bg-white border-2 border-slate-200 rounded-2xl p-5 text-left hover:border-green-500 hover:shadow-lg transition-all btn-press border-b-4" onclick="finishOnboarding()">
<div className="flex justify-between items-start mb-2">
<div className="bg-purple-100 p-2 rounded-lg text-purple-600">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
</div>
<h3 className="text-lg font-bold text-slate-800 mb-1">미디어 중독 같아요</h3>
<p className="text-xs text-slate-500 font-medium">스마트폰을 뺏으면 소리를 질러요.</p>
</button>
</div>
</div>
</div>




<div className="app-tab hidden flex flex-col h-full bg-slate-50" id="tab-chat">

<div className="bg-white px-5 py-4 border-b border-slate-200 flex justify-between items-center shadow-sm z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<div>
<h2 className="font-bold text-slate-800 leading-none">AI 육아 코치</h2>
<span className="text-xs text-green-600 font-bold">● 답변 준비 완료</span>
</div>
</div>
<button className="text-slate-400 hover:text-green-500" onclick="openPaywall()">
<i className="w-6 h-6" data-lucide="settings"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="text-center">
<span className="bg-slate-200 text-slate-500 text-xs px-3 py-1 rounded-full font-medium">오늘</span>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-green-600" data-lucide="bot"></i>
</div>
<div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[85%]">
<p className="text-slate-700 text-sm leading-relaxed">
                            안녕하세요! 아이의 <strong>떼쓰기 행동</strong> 때문에 고민이 많으시군요. <br/><br/>
                            지금 당장 시도해볼 수 있는 3단계 대처법을 알려드릴까요?
                        </p>
</div>
</div>

<div className="flex gap-3 justify-end">
<div className="bg-green-500 p-4 rounded-2xl rounded-tr-none shadow-sm max-w-[85%]">
<p className="text-white text-sm font-medium leading-relaxed">
                            응, 제발 알려줘. 마트에서 드러눕는데 너무 창피하고 화가 나.
                        </p>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-1">
<i className="w-5 h-5 text-green-600" data-lucide="bot"></i>
</div>
<div className="space-y-2 max-w-[85%]">
<div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-none shadow-sm">
<p className="text-slate-700 text-sm leading-relaxed mb-3">
                                당황스러우셨겠어요. 마트에서 아이가 드러눕는 건 '관심 끌기' 혹은 '욕구 좌절'의 표현이에요.
                            </p>
<div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-3">
<h4 className="font-bold text-slate-800 text-sm mb-1">📌 즉각 해결 팁</h4>
<ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
<li>아무 말 없이 안전한 구석으로 안고 이동하세요.</li>
<li>관중(사람들)을 차단하는 게 핵심입니다.</li>
<li>진정될 때까지 무반응으로 기다려주세요.</li>
</ul>
</div>
<p className="text-slate-700 text-sm leading-relaxed">
                                이 상황이 반복되지 않도록 <strong>장기적인 훈육 계획</strong>을 세워보는 게 좋아요.
                            </p>
</div>

<div className="flex flex-wrap gap-2">
<button className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md hover:bg-green-700 transition flex items-center gap-2" onclick="switchToTab('tab-todo')">
<i className="w-4 h-4" data-lucide="calendar-check"></i>
                                2주 행동 교정 계획 세우기
                            </button>
<button className="bg-white text-slate-600 border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold shadow-sm hover:bg-slate-50 transition flex items-center gap-2" onclick="alert('전문가 연결을 준비중입니다.')">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                                전문가와 상담하기
                            </button>
</div>
</div>
</div>
</div>

<div className="px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar">
<button className="whitespace-nowrap bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">단호하게 말하는 법?</button>
<button className="whitespace-nowrap bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">남편과 훈육관이 달라요</button>
</div>

<div className="p-4 bg-white border-t border-slate-200 pb-24"> 
<div className="flex gap-2 relative">
<input className="flex-1 bg-slate-100 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-green-500 focus:outline-none" placeholder="고민을 입력해보세요..." type="text"/>
<button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-xl transition shadow-sm absolute right-1 top-1 bottom-1 w-10 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>

<div className="app-tab hidden flex flex-col h-full bg-slate-50" id="tab-todo">
<div className="bg-white px-5 py-4 border-b border-slate-200 shadow-sm">
<h2 className="text-xl font-bold text-slate-800">훈육 로드맵</h2>
<p className="text-xs text-slate-500 font-medium">AI가 제안한 장기 실천 계획입니다.</p>
</div>
<div className="flex-1 overflow-y-auto p-5 pb-24 space-y-6">

<div>
<h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
<span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">1</span>
                        1주차: 감정 읽어주기
                    </h3>
<div className="space-y-3">
<label className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
<input className="w-5 h-5 text-green-500 rounded focus:ring-green-500 mt-0.5 border-slate-300" type="checkbox"/>
<div>
<p className="text-sm font-semibold text-slate-800">하루 3번 아이 감정 말로 표현하기</p>
<p className="text-xs text-slate-400 mt-1">"지금 화가 났구나" 인정해주기</p>
</div>
</label>
<label className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm opacity-60">
<input className="w-5 h-5 text-green-500 rounded border-slate-300" disabled="" type="checkbox"/>
<div>
<p className="text-sm font-semibold text-slate-800">자기 전 5분 스킨십 놀이</p>
<p className="text-xs text-slate-400 mt-1">안정 애착 형성을 위한 시간</p>
</div>
</label>
</div>
</div>

<div>
<h3 className="font-bold text-slate-700 mb-3 flex items-center gap-2">
<span className="w-6 h-6 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center text-xs">2</span>
                        2주차: 안 되는 것 가르치기
                    </h3>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
<div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
<i className="w-5 h-5 text-slate-400" data-lucide="lock"></i>
</div>
<p className="text-sm font-bold text-slate-800 mb-1">다음 단계 잠금 해제</p>
<p className="text-xs text-slate-500 mb-4">1주차 미션을 완료하면 열립니다.</p>
<button className="text-xs font-bold text-green-600 hover:underline" onclick="openPaywall()">미리 보기 (Premium)</button>
</div>
</div>
</div>
</div>

<div className="app-tab hidden flex flex-col h-full bg-slate-50" id="tab-expert">
<div className="bg-white px-5 py-4 border-b border-slate-200 shadow-sm sticky top-0 z-10">
<h2 className="text-xl font-bold text-slate-800">전문가 찾기</h2>
<div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
<button className="bg-slate-800 text-white px-4 py-1.5 rounded-full text-xs font-bold">전체</button>
<button className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-200">영유아</button>
<button className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-200">초등</button>
<button className="bg-slate-100 text-slate-500 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-200">발달장애</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-5 pb-24 space-y-4">

<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                        AI 추천 매칭
                    </div>
<div className="flex gap-4">
<div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 font-bold text-xl shrink-0">
                            김
                        </div>
<div>
<h3 className="font-bold text-slate-800 text-lg">김은영 상담사</h3>
<p className="text-xs text-slate-500 font-medium mb-2">놀이치료 1급 • 경력 12년</p>
<div className="flex gap-1 mb-3">
<span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-md font-bold">#훈육</span>
<span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-md font-bold">#기질분석</span>
</div>
</div>
</div>
<p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl mb-3 mt-1 leading-snug">
                        "예민한 기질의 아이, 부모의 언어 습관만 바꿔도 달라집니다."
                    </p>
<button className="w-full bg-slate-800 text-white py-3 rounded-xl text-sm font-bold shadow-md" onclick="openPaywall()">상담 예약하기</button>
</div>

<div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
<div className="flex gap-4">
<div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 font-bold text-xl shrink-0">
                            박
                        </div>
<div>
<h3 className="font-bold text-slate-800 text-lg">박민수 교수</h3>
<p className="text-xs text-slate-500 font-medium mb-2">아동심리 박사 • 대학병원 출신</p>
<div className="flex gap-1 mb-3">
<span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-md font-bold">#ADHD</span>
<span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-0.5 rounded-md font-bold">#미디어중독</span>
</div>
</div>
</div>
<button className="w-full border-2 border-slate-200 text-slate-600 py-3 rounded-xl text-sm font-bold hover:bg-slate-50">프로필 보기</button>
</div>
</div>
</div>

<div className="app-tab hidden flex flex-col h-full bg-slate-50" id="tab-history">

<div className="bg-green-600 p-5 text-white">
<div className="flex items-center gap-3 mb-2">
<div className="bg-white/20 p-2 rounded-lg">
<i className="w-5 h-5 text-white" data-lucide="users"></i>
</div>
<h2 className="font-bold text-lg">함께 키우는 우리 아이</h2>
</div>
<p className="text-green-100 text-xs mb-3 leading-relaxed">배우자를 초대하여 상담 기록을 공유하고<br/>일관된 훈육 방식을 만들어보세요.</p>
<button className="bg-white text-green-700 text-xs font-bold px-4 py-2 rounded-lg shadow-sm" onclick="openPaywall()">배우자 초대하기</button>
</div>
<div className="flex-1 overflow-y-auto p-5 pb-24 relative">
<h3 className="font-bold text-slate-800 mb-4">최근 대화 기록</h3>
<div className="space-y-3 mb-4">

<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
<div className="flex justify-between mb-1">
<span className="text-xs font-bold text-green-600">오늘</span>
<span className="text-xs text-slate-400">오후 2:30</span>
</div>
<p className="font-bold text-slate-700 text-sm">마트에서 드러눕는 아이 대처법</p>
<p className="text-xs text-slate-500 mt-1 truncate">관중 효과를 차단하고 안전한 곳으로 이동...</p>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
<div className="flex justify-between mb-1">
<span className="text-xs font-bold text-slate-500">어제</span>
<span className="text-xs text-slate-400">오전 9:15</span>
</div>
<p className="font-bold text-slate-700 text-sm">밥 안 먹고 돌아다니는 습관</p>
<p className="text-xs text-slate-500 mt-1 truncate">식사 시간 제한과 규칙 설정하기...</p>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
<div className="flex justify-between mb-1">
<span className="text-xs font-bold text-slate-500">3일 전</span>
<span className="text-xs text-slate-400">오후 8:00</span>
</div>
<p className="font-bold text-slate-700 text-sm">형제간의 다툼 중재</p>
<p className="text-xs text-slate-500 mt-1 truncate">서로의 감정을 읽어주고 공평하게...</p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-50 via-slate-50/90 to-transparent flex flex-col items-center justify-end pb-28 pointer-events-none">
<div className="pointer-events-auto text-center px-6">
<i className="w-8 h-8 text-slate-400 mx-auto mb-2" data-lucide="lock"></i>
<h4 className="font-bold text-slate-800 mb-1">지난 기록이 더 있나요?</h4>
<p className="text-xs text-slate-500 mb-4">대화 기록이 쌓일수록 AI 코칭이 정교해집니다.<br/>무제한 열람으로 더 나은 솔루션을 받아보세요.</p>
<button className="bg-slate-800 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg w-full" onclick="openPaywall()">기록 전체 보기</button>
</div>
</div>
</div>
</div>



<div className="absolute bottom-0 w-full bg-white border-t border-slate-200 flex justify-around items-center px-2 py-3 hidden pb-6" id="bottom-nav">
<button className="nav-btn flex flex-col items-center gap-1 p-2 w-16 text-green-600" onclick="switchToTab('tab-chat')">
<i className="w-6 h-6" data-lucide="message-circle"></i>
<span className="text-[10px] font-bold">코칭</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 p-2 w-16 text-slate-400 hover:text-green-600 transition" onclick="switchToTab('tab-todo')">
<i className="w-6 h-6" data-lucide="check-square"></i>
<span className="text-[10px] font-bold">실천</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 p-2 w-16 text-slate-400 hover:text-green-600 transition" onclick="switchToTab('tab-expert')">
<i className="w-6 h-6" data-lucide="users"></i>
<span className="text-[10px] font-bold">전문가</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 p-2 w-16 text-slate-400 hover:text-green-600 transition" onclick="switchToTab('tab-history')">
<i className="w-6 h-6" data-lucide="history"></i>
<span className="text-[10px] font-bold">기록</span>
</button>
</div>



<div className="absolute inset-0 bg-slate-900/60 z-50 hidden flex items-end sm:items-center justify-center backdrop-blur-sm" id="paywall">
<div className="bg-white w-full sm:w-[90%] sm:rounded-3xl rounded-t-3xl p-6 relative animate-slide-up">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onclick="closePaywall()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<div className="text-center mb-6 mt-2">
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full tracking-wide">PREMIUM FAMILY</span>
<h2 className="text-2xl font-extrabold text-slate-900 mt-3 leading-tight">부모의 고민,<br/>혼자 해결하지 마세요</h2>
</div>
<div className="space-y-4 mb-8">
<div className="flex gap-4 items-start">
<div className="bg-green-100 p-2 rounded-lg text-green-600 mt-0.5">
<i className="w-5 h-5" data-lucide="infinity"></i>
</div>
<div>
<h4 className="font-bold text-slate-800 text-sm">무제한 AI 상담</h4>
<p className="text-xs text-slate-500">횟수 제한 없이 궁금할 때마다 물어보세요.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-0.5">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<div>
<h4 className="font-bold text-slate-800 text-sm">부모 계정 공유</h4>
<p className="text-xs text-slate-500">엄마, 아빠가 함께 아이 정보를 관리해요.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="bg-purple-100 p-2 rounded-lg text-purple-600 mt-0.5">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div>
<h4 className="font-bold text-slate-800 text-sm">상담 기록 5년 보관</h4>
<p className="text-xs text-slate-500">아이의 성장 과정을 데이터로 확인하세요.</p>
</div>
</div>
</div>
<button className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl border-b-4 border-green-700 btn-press uppercase tracking-wide shadow-lg mb-3" onclick="closePaywall()">
                    7일 무료 체험 시작하기
                </button>
<p className="text-[10px] text-center text-slate-400">체험 종료 후 월 9,900원 결제 • 언제든 해지 가능</p>
</div>
</div>
</div>



    </>
  );
}
