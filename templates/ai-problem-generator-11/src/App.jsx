import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        let selectedCount = 0;
        let countPerQuestion = 1;
        let totalQuestions = 0;

        // --- Screen A Logic ---

        function toggleCard(card) {
            const checkbox = card.querySelector('.checkbox');
            const icon = checkbox.querySelector('iconify-icon');
            
            // Toggle Visual Selection
            if (card.classList.contains('ring-1')) {
                // Deselect
                card.classList.remove('ring-1', 'ring-black', 'border-black');
                card.classList.add('border-gray-200');
                checkbox.classList.remove('bg-black', 'border-black');
                checkbox.classList.add('border-gray-300');
                icon.classList.remove('opacity-100');
                icon.classList.add('opacity-0');
                selectedCount--;
            } else {
                // Select
                card.classList.add('ring-1', 'ring-black', 'border-black');
                card.classList.remove('border-gray-200');
                checkbox.classList.add('bg-black', 'border-black');
                checkbox.classList.remove('border-gray-300');
                icon.classList.remove('opacity-0');
                icon.classList.add('opacity-100');
                selectedCount++;
            }

            updateFooterState();
        }

        function updateCount(delta) {
            const display = document.getElementById('count-display');
            let val = parseInt(display.innerText);
            val += delta;
            if (val < 1) val = 1;
            if (val > 5) val = 5;
            countPerQuestion = val;
            display.innerText = val;
            updateFooterState();
        }

        function updateFooterState() {
            totalQuestions = selectedCount * countPerQuestion;
            document.getElementById('total-count').innerText = totalQuestions;
            
            const btn = document.getElementById('btn-generate');
            if (selectedCount > 0) {
                btn.removeAttribute('disabled');
            } else {
                btn.setAttribute('disabled', 'true');
            }
        }

        // --- Navigation Logic ---

        function goToScreenB() {
            document.getElementById('screen-a').classList.add('hidden');
            document.getElementById('screen-b').classList.remove('hidden');
            document.getElementById('screen-b').classList.add('flex');
            
            // Mock generate list in sidebar
            renderProblemList();
        }

        function backToScreenA() {
            document.getElementById('screen-b').classList.add('hidden');
            document.getElementById('screen-b').classList.remove('flex');
            document.getElementById('screen-a').classList.remove('hidden');
        }

        // --- Screen B Logic ---

        function renderProblemList() {
            const list = document.getElementById('problem-list');
            list.innerHTML = '';
            document.getElementById('result-total-count').innerText = totalQuestions;

            for(let i=1; i <= totalQuestions; i++) {
                const isActive = i === 1;
                const li = document.createElement('li');
                li.className = `cursor-pointer px-4 py-3 border-b border-gray-100 hover:bg-white transition-colors flex flex-col space-y-1 ${isActive ? 'bg-white border-l-2 border-l-black' : 'border-l-2 border-l-transparent text-slate-500'}`;
                
                li.innerHTML = `
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-bold ${isActive ? 'text-slate-900' : ''}">문제 ${i}</span>
                        <span class="text-[10px] bg-gray-100 px-1.5 py-0.5 rounded text-slate-500">주제 추론</span>
                    </div>
                    <span class="text-[10px] truncate ${isActive ? 'text-slate-600' : 'text-slate-400'}">Competition is often viewed...</span>
                `;
                
                // Add click event for simple highlight logic (prototype only)
                li.onclick = function() {
                    document.querySelectorAll('#problem-list li').forEach(el => {
                        el.classList.remove('bg-white', 'border-l-black', 'text-slate-900');
                        el.classList.add('text-slate-500', 'border-l-transparent');
                        el.querySelector('span.font-bold').classList.remove('text-slate-900');
                    });
                    this.classList.add('bg-white', 'border-l-black');
                    this.classList.remove('text-slate-500', 'border-l-transparent');
                    this.querySelector('span.font-bold').classList.add('text-slate-900');
                }

                list.appendChild(li);
            }
        }

        function toggleEdit(elementId, btn) {
            const element = document.getElementById(elementId);
            const isEditable = element.getAttribute('contenteditable') === 'true';
            const icon = btn.querySelector('iconify-icon');
            const text = btn.querySelector('span');

            if (!isEditable) {
                // Enable Edit
                element.setAttribute('contenteditable', 'true');
                element.focus();
                
                text.innerText = '완료';
                icon.setAttribute('icon', 'lucide:check');
                btn.classList.add('text-green-600');
                btn.classList.remove('text-slate-500', 'text-blue-500');
            } else {
                // Disable Edit (Save)
                element.setAttribute('contenteditable', 'false');
                
                text.innerText = '수정';
                icon.setAttribute('icon', 'lucide:edit-3');
                
                // Restore original colors based on context
                if(elementId === 'explanation-body') {
                    btn.classList.add('text-blue-500');
                    btn.classList.remove('text-green-600');
                } else {
                    btn.classList.add('text-slate-500');
                    btn.classList.remove('text-green-600');
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col h-full w-full" id="screen-a">

<header className="bg-white border-b border-gray-200 h-14 flex items-center justify-center shrink-0">
<div className="flex items-center space-x-2">
<div className="flex items-center space-x-2 text-slate-400">
<div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px]">1</div>
<span className="text-xs font-medium">생성 방식</span>
</div>
<iconify-icon className="text-slate-300 text-xs" icon="lucide:chevron-right"></iconify-icon>
<div className="flex items-center space-x-2 text-slate-900">
<div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">2</div>
<span className="text-xs font-medium">유형 선택</span>
</div>
<iconify-icon className="text-slate-300 text-xs" icon="lucide:chevron-right"></iconify-icon>
<div className="flex items-center space-x-2 text-slate-400">
<div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px]">3</div>
<span className="text-xs font-medium">문제 생성</span>
</div>
</div>
</header>

<main className="flex flex-1 overflow-hidden">

<aside className="w-64 border-r border-gray-200 bg-white flex flex-col">
<div className="p-4 border-b border-gray-100">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">입력 모드</h3>
<div className="flex bg-gray-100 p-1 rounded-lg">
<button className="flex-1 py-1.5 px-3 rounded-md text-xs font-medium shadow-sm bg-white text-slate-900 transition-all">읽기</button>
<button className="flex-1 py-1.5 px-3 rounded-md text-xs font-medium text-slate-500 hover:text-slate-700 transition-all">듣기</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">사고 유형</h3>
<ul className="space-y-1">
<li>
<button className="w-full text-left px-3 py-2 rounded-md text-sm font-medium bg-gray-50 text-slate-900 border border-gray-200 flex justify-between items-center">
                                중심 내용 이해
                                <iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-500 hover:bg-gray-50 transition-colors">정보 확인</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-500 hover:bg-gray-50 transition-colors">의도·태도 추론</button>
</li>
<li>
<button className="w-full text-left px-3 py-2 rounded-md text-sm text-slate-500 hover:bg-gray-50 transition-colors">비교·대조</button>
</li>
</ul>
</div>
</aside>

<section className="flex-1 flex flex-col bg-gray-50 overflow-hidden relative">
<div className="flex-1 overflow-y-auto p-6 pb-24">
<h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-4">기출 문제 선택</h2>

<div className="mb-4">
<button className="w-full bg-white border border-gray-200 rounded-t-lg px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors">
<div className="flex items-center space-x-2">
<iconify-icon className="text-slate-400" icon="lucide:chevron-down"></iconify-icon>
<span className="font-medium text-slate-700">주제 추론 (21)</span>
</div>
</button>

<div className="bg-white border-x border-b border-gray-200 rounded-b-lg p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">

<div className="question-card group cursor-pointer border rounded-lg p-4 transition-all hover:border-gray-300 hover:shadow-sm bg-white relative select-none" onclick="toggleCard(this)">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center space-x-2">
<span className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded font-medium">2023 수능 24번</span>
<span className="bg-blue-50 text-blue-600 text-[10px] px-1.5 py-0.5 rounded font-medium">중상</span>
</div>
<div className="checkbox w-4 h-4 rounded border border-gray-300 flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-[10px] opacity-0 transition-opacity" icon="lucide:check"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                                    Winning implies that you are competing against others, and usually, this competition is zero-sum. That is, for you to win, someone else has to lose. In contrast, success is not zero-sum...
                                </p>
</div>

<div className="question-card group cursor-pointer border rounded-lg p-4 transition-all hover:border-gray-300 hover:shadow-sm bg-white relative select-none" onclick="toggleCard(this)">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center space-x-2">
<span className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded font-medium">2022 9월 모평 23번</span>
<span className="bg-orange-50 text-orange-600 text-[10px] px-1.5 py-0.5 rounded font-medium">상</span>
</div>
<div className="checkbox w-4 h-4 rounded border border-gray-300 flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-[10px] opacity-0 transition-opacity" icon="lucide:check"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                                    Consider the complex dynamics of the modern ecosystem. While we often think of nature as a balanced system, recent studies suggest that chaotic disruptions are...
                                </p>
</div>

<div className="question-card group cursor-pointer border rounded-lg p-4 transition-all hover:border-gray-300 hover:shadow-sm bg-white relative select-none" onclick="toggleCard(this)">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center space-x-2">
<span className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded font-medium">2021 수능 22번</span>
<span className="bg-slate-100 text-slate-600 text-[10px] px-1.5 py-0.5 rounded font-medium">중</span>
</div>
<div className="checkbox w-4 h-4 rounded border border-gray-300 flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-[10px] opacity-0 transition-opacity" icon="lucide:check"></iconify-icon>
</div>
</div>
<p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                                    The psychology of color in marketing is often misunderstood. It is not merely about aesthetic appeal but about the subconscious associations consumers make with brands...
                                </p>
</div>
</div>
</div>

<div className="mb-4 opacity-60">
<button className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
<div className="flex items-center space-x-2">
<iconify-icon className="text-slate-400" icon="lucide:chevron-right"></iconify-icon>
<span className="font-medium text-slate-700">요지 파악 (15)</span>
</div>
</button>
</div>
</div>

<div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white shadow-lg border border-gray-200 rounded-full py-2 px-6 flex items-center space-x-6 z-10">
<span className="text-xs font-medium text-slate-500">기출 문제당 생성 개수</span>
<div className="flex items-center space-x-3">
<button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-slate-600" onclick="updateCount(-1)">
<iconify-icon icon="lucide:minus" width="12"></iconify-icon>
</button>
<span className="font-semibold text-slate-900 w-4 text-center" id="count-display">1</span>
<button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-slate-600" onclick="updateCount(1)">
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</button>
</div>
<div className="h-4 w-px bg-gray-200"></div>
<span className="text-xs text-slate-500">총 <strong className="text-slate-900 font-semibold" id="total-count">0</strong>문제 생성 예정</span>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 h-16 flex items-center justify-between px-6 shrink-0 z-20">
<button className="text-slate-500 hover:text-slate-900 text-sm font-medium px-4 py-2">이전</button>
<button className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm" disabled="" id="btn-generate" onclick="goToScreenB()">
                문제 생성
            </button>
</footer>
</div>

<div className="hidden flex flex-col h-full w-full bg-white" id="screen-b">

<header className="bg-white border-b border-gray-200 h-14 flex items-center justify-between px-6 shrink-0">
<div className="flex items-center space-x-2">
<span className="text-sm font-semibold tracking-tight text-slate-900">생성 결과 확인</span>
<span className="text-xs text-slate-400 font-normal border-l border-gray-200 pl-2 ml-2">선택한 유형의 변형 문제가 생성되었습니다.</span>
</div>
<div className="text-xs text-slate-500">저장되지 않음</div>
</header>
<main className="flex flex-1 overflow-hidden">

<aside className="w-64 border-r border-gray-200 bg-gray-50 flex flex-col">
<div className="p-4 border-b border-gray-100 flex justify-between items-center">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">문제 목록</span>
<span className="text-xs text-slate-400">총 <span id="result-total-count">2</span>개</span>
</div>
<ul className="flex-1 overflow-y-auto" id="problem-list">

</ul>
</aside>

<section className="flex-1 flex flex-col overflow-y-auto">
<div className="max-w-4xl mx-auto w-full p-8 pb-32">

<div className="flex items-center space-x-3 mb-8">
<span className="px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium border border-slate-200">주제 추론 변형</span>
<span className="text-xs text-slate-400">Generated based on 2023 CSAT #24</span>
</div>

<div className="mb-10 group relative p-2 -m-2 rounded-lg hover:bg-gray-50 transition-colors">
<div className="flex justify-between items-start mb-4">
<h2 className="text-lg font-semibold text-slate-900">문제 본문</h2>
<button className="opacity-0 group-hover:opacity-100 text-xs flex items-center space-x-1 text-slate-500 hover:text-blue-600 transition-all" onclick="toggleEdit('problem-body', this)">
<iconify-icon icon="lucide:edit-3" width="14"></iconify-icon>
<span>수정</span>
</button>
</div>
<div className="space-y-6" id="problem-body">
<div className="text-base text-slate-800 leading-relaxed p-1" id="passage-content">
                                Competition is often viewed as a zero-sum game where one's gain is strictly another's loss. However, true success in a modern society transcends this binary perspective. When individuals focus on personal growth rather than comparative victory, the entire community benefits. Innovation thrives not in isolation or purely cutthroat environments, but where ideas are shared and refined collectively.
                            </div>
<div className="space-y-3 pt-4 border-t border-gray-100" id="options-content">
<div className="flex items-start space-x-3 text-sm text-slate-700 p-1">
<span className="font-medium min-w-[20px]">①</span>
<span>Why competition destroys community values</span>
</div>
<div className="flex items-start space-x-3 text-sm text-slate-700 p-1">
<span className="font-medium min-w-[20px]">②</span>
<span>The importance of redefining success beyond zero-sum games</span>
</div>
<div className="flex items-start space-x-3 text-sm text-slate-700 p-1">
<span className="font-medium min-w-[20px]">③</span>
<span>Historical perspectives on winning and losing</span>
</div>
<div className="flex items-start space-x-3 text-sm text-slate-700 p-1">
<span className="font-medium min-w-[20px]">④</span>
<span>Strategies to win in a competitive market</span>
</div>
<div className="flex items-start space-x-3 text-sm text-slate-700 p-1">
<span className="font-medium min-w-[20px]">⑤</span>
<span>The psychological impact of losing in sports</span>
</div>
</div>
</div>
</div>

<div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 group relative">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center space-x-2">
<span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded">정답 및 해설</span>
<span className="text-sm font-semibold text-slate-900">정답: ②</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-xs flex items-center space-x-1 text-blue-500 hover:text-blue-700 transition-all" onclick="toggleEdit('explanation-body', this)">
<iconify-icon icon="lucide:edit-3" width="14"></iconify-icon>
<span>수정</span>
</button>
</div>
<div className="text-sm text-slate-600 leading-relaxed p-1" id="explanation-body">
                            이 글은 경쟁을 제로섬 게임으로 보는 관점을 넘어서, 개인의 성장과 공동체의 이익을 위한 성공의 재정의가 필요하다는 점을 강조하고 있습니다. 따라서 글의 주제로 가장 적절한 것은 '제로섬 게임을 넘어선 성공 재정의의 중요성'입니다.
                        </div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 h-16 flex items-center justify-between px-6 shrink-0 z-20">
<div className="flex items-center space-x-3">
<button className="text-slate-500 hover:text-slate-900 text-sm font-medium px-4 py-2" onclick="backToScreenA()">이전 설정</button>
<div className="h-4 w-px bg-gray-300 mx-2"></div>
<button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-2">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
<span>이전 문제</span>
</button>
<button className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 text-sm font-medium px-3 py-2">
<span>다음 문제</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
<button className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-md hover:bg-gray-800 shadow-sm flex items-center space-x-2">
<iconify-icon icon="lucide:save" width="14"></iconify-icon>
<span>문제 저장</span>
</button>
</footer>
</div>


    </>
  );
}
