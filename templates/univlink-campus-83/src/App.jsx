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



        // Init Icons
        lucide.createIcons();

        // --- Navigation Logic ---
        function navTo(screenId) {
            document.querySelectorAll('.screen').forEach(s => {
                s.classList.remove('active');
            });
            
            // Radar Reset Logic
            if (screenId !== 'radar') {
                const radarContainer = document.getElementById('radar-container');
                const startBtn = document.getElementById('radar-start-btn');
                const status = document.getElementById('radar-status');
                const result = document.getElementById('radar-result');
                
                if (radarContainer) {
                    radarContainer.classList.remove('searching');
                    startBtn.classList.remove('opacity-0', 'pointer-events-none');
                    status.classList.remove('opacity-100');
                    status.classList.add('opacity-0');
                    result.classList.remove('translate-y-0', 'opacity-100');
                    result.classList.add('translate-y-full', 'opacity-0');
                    status.querySelector('h3').innerText = "탐색중...";
                }
            }
            
            // Handle Slide Screens
            const slideScreens = ['timetable', 'cafeteria'];
            if(slideScreens.includes(screenId)) {
                const target = document.getElementById('screen-' + screenId);
                target.classList.add('open');
                setTimeout(() => lucide.createIcons(), 50);
                return;
            } else {
                 document.querySelectorAll('.slide-screen').forEach(s => s.classList.remove('open'));
            }

            const target = document.getElementById('screen-' + screenId);
            if (target) {
                target.classList.add('active');
                setTimeout(() => lucide.createIcons(), 50);
            }
        }

        // --- Toast ---
        function showToast(msg) {
            const t = document.getElementById('toast');
            const txt = document.getElementById('toastText');
            txt.innerText = msg;
            t.classList.remove('opacity-0', 'translate-y-4');
            t.classList.add('opacity-100', 'translate-y-0');
            setTimeout(() => {
                t.classList.add('opacity-0', 'translate-y-4');
                t.classList.remove('opacity-100', 'translate-y-0');
            }, 2000);
        }

        // --- AI Recommendation Logic (Timetable) ---
        function startAiRecommendation() {
            const btn = document.getElementById('ai-rec-btn');
            const result = document.getElementById('ai-rec-result');
            
            btn.innerHTML = 'AI 분석중...';
            btn.classList.add('ai-loading', 'text-slate-500');
            
            setTimeout(() => {
                btn.classList.add('hidden');
                result.classList.remove('hidden', 'opacity-0');
                result.classList.add('opacity-100');
                showToast("AI가 수강 이력을 분석했습니다!");
            }, 1500);
        }

        // --- Cafeteria Menu Randomizer ---
        const menus = {
            lunch: [
                {name: "수제 등심 돈까스", place: "학생회관 1층 • 5,500원", icon: "🍱"},
                {name: "참치마요 덮밥", place: "학생회관 2층 • 4,500원", icon: "🍚"},
                {name: "베이컨 크림 파스타", place: "교직원 식당 • 6,000원", icon: "🍝"},
                {name: "순두부 찌개", place: "기숙사 식당 • 5,000원", icon: "🥘"}
            ],
            dinner: [
                {name: "매운 소고기 쌀국수", place: "기숙사 식당 • 6,000원", icon: "🍜"},
                {name: "치킨 카레라이스", place: "학생회관 1층 • 5,000원", icon: "🍛"},
                {name: "삼겹살 김치볶음밥", place: "학생회관 2층 • 5,500원", icon: "🍳"},
                {name: "불고기 버거 세트", place: "카페테리아 • 6,200원", icon: "🍔"}
            ]
        };

        function rollMenu(type) {
            const list = menus[type];
            const random = list[Math.floor(Math.random() * list.length)];
            const container = document.getElementById(type + '-result');
            
            container.style.opacity = '0';
            container.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                container.innerHTML = `
                    <div class="text-6xl mb-4 ${type === 'lunch' ? 'animate-bounce' : ''}">${random.icon}</div>
                    <h4 class="text-xl font-bold ${type === 'lunch' ? 'text-slate-900' : 'text-white'}">${random.name}</h4>
                    <p class="${type === 'lunch' ? 'text-slate-500' : 'text-slate-400'} text-sm mt-1">${random.place}</p>
                `;
                container.style.opacity = '1';
                container.style.transform = 'scale(1)';
            }, 200);
        }

        // --- Login Flow ---
        function requestOtp() {
            const phone = document.getElementById('login-phone').value;
            if (phone.length < 10) {
                showToast('휴대폰 번호를 확인해주세요.');
                return;
            }
            document.getElementById('otp-row').classList.remove('hidden', 'opacity-0');
            document.getElementById('login-otp').focus();
            showToast('인증번호가 발송되었습니다.');
        }

        function verifyOtp() {
            const otp = document.getElementById('login-otp').value;
            if (otp.length < 1) {
                showToast('인증번호를 입력해주세요.');
                return;
            }
            navTo('home');
            showToast('환영합니다! 강민우님');
        }

        // --- Feed Logic ---
        function filterFeed(btn, category) {
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('text-[#7C6AE6]', 'border-[#7C6AE6]');
                b.classList.add('text-slate-500', 'border-transparent');
            });
            btn.classList.remove('text-slate-500', 'border-transparent');
            btn.classList.add('text-[#7C6AE6]', 'border-[#7C6AE6]');

            const items = document.querySelectorAll('.feed-item');
            items.forEach(item => {
                if (category === 'all' || item.dataset.category.includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        function toggleLike(btn) {
            event.stopPropagation();
            const isLiked = btn.classList.toggle('liked');
            const countSpan = btn.querySelector('.like-count');
            let count = parseInt(countSpan.innerText);
            countSpan.innerText = isLiked ? count + 1 : count - 1;
        }

        function openWriteScreen() {
            document.getElementById('screen-write').classList.add('open');
        }
        function closeWriteScreen() {
            document.getElementById('screen-write').classList.remove('open');
        }
        function submitPost() {
            closeWriteScreen();
            showToast('게시글이 등록되었습니다.');
        }

        function openPostDetail(element) {
            const title = element.querySelector('h2').innerText;
            const body = element.querySelector('p').innerText;
            const author = element.querySelector('h3').innerText.split('@')[0].trim();
            const major = element.querySelector('h3 span').innerText;
            
            document.getElementById('detail-title').innerText = title;
            document.getElementById('detail-body').innerText = body + "\n\n(상세 내용이 더 있는 경우 여기에 표시됩니다)";
            document.getElementById('detail-author').innerHTML = `${author} <span class="text-slate-400 font-medium">${major}</span>`;
            
            document.getElementById('screen-post-detail').classList.add('open');
        }
        function closePostDetail() {
            document.getElementById('screen-post-detail').classList.remove('open');
        }

        // --- Radar Logic ---
        function startMatching() {
            const container = document.getElementById('radar-container');
            const startBtn = document.getElementById('radar-start-btn');
            const status = document.getElementById('radar-status');
            const result = document.getElementById('radar-result');

            startBtn.classList.add('opacity-0', 'pointer-events-none');
            container.classList.add('searching');
            status.classList.remove('opacity-0');
            status.classList.add('opacity-100');

            setTimeout(() => { 
                status.querySelector('h3').innerText = "근처의 동료 발견!";
            }, 2000);

            setTimeout(() => { 
                status.querySelector('h3').innerText = "매칭 성공";
                result.classList.remove('translate-y-full', 'opacity-0');
                result.classList.add('translate-y-0', 'opacity-100');
            }, 3500);
        }

        // --- Chat Logic ---
        function handleChatEnter(e) {
            if (e.key === 'Enter') sendChatMessage();
        }

        function sendChatMessage() {
            const input = document.getElementById('chat-input');
            const text = input.value.trim();
            if (!text) return;

            const scroll = document.getElementById('chat-scroll');
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

            const html = `
                <div class="flex flex-col items-end gap-1 animate-[fadeIn_0.3s_ease-out]">
                    <div class="bg-[#7C6AE6] text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] text-[13px] leading-relaxed shadow-sm">
                        ${text}
                    </div>
                    <div class="flex items-center gap-1">
                        <span class="text-[10px] text-slate-900 font-bold">1</span>
                        <span class="text-[10px] text-slate-400 mr-1">${time}</span>
                    </div>
                </div>
            `;
            
            scroll.insertAdjacentHTML('beforeend', html);
            input.value = '';
            scroll.scrollTop = scroll.scrollHeight;
        }

        // --- Clock ---
        setInterval(() => {
            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
            document.getElementById('clock').innerText = time;
        }, 1000);
    
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
      

<div className="relative w-[390px] h-[844px] bg-[#F5F6F8] rounded-[3rem] shadow-2xl border-[8px] border-zinc-900 overflow-hidden ring-4 ring-zinc-300/50">

<div className="absolute top-0 w-full h-12 z-[60] flex justify-between items-center px-7 text-xs font-medium pointer-events-none select-none mix-blend-difference text-white">
<span id="clock">9:41</span>
<div className="flex gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="signal"></i>
<i className="w-3.5 h-3.5" data-lucide="wifi"></i>
<i className="w-3.5 h-3.5" data-lucide="battery-full"></i>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 top-14 z-[90] pointer-events-none opacity-0 translate-y-4 transition-all duration-300 ease-out w-max max-w-[90%]" id="toast">
<div className="bg-[#2D2D35] text-white text-[13px] font-medium px-5 py-2.5 rounded-full shadow-xl border border-white/10 backdrop-blur-md flex items-center gap-2">
<i className="w-4 h-4 text-[#7C6AE6]" data-lucide="check-circle-2"></i>
<span id="toastText">알림</span>
</div>
</div>

<div className="screen active bg-white p-8 pt-32" id="screen-login">
<div className="flex-1 flex flex-col">
<div className="w-14 h-14 bg-[#7C6AE6] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#7C6AE6]/30 mb-8 rotate-3">
<i className="w-7 h-7" data-lucide="graduation-cap"></i>
</div>
<h1 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    학교 인증하고<br/>동료를 만나보세요
                </h1>
<p className="text-slate-500 text-sm leading-relaxed mb-10">
                    신뢰할 수 있는 네트워크를 위해<br/>학교 이메일 또는 번호 인증이 필요합니다.
                </p>
<div className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-600 ml-1">휴대폰 번호</label>
<div className="flex gap-2">
<input className="flex-1 bg-[#F5F6F8] border border-slate-100 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#7C6AE6] focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400" id="login-phone" type="tel" value="010-1234-5678"/>
<button className="bg-[#7C6AE6] text-white px-5 rounded-xl text-xs font-semibold hover:bg-[#6A5ACD] active:scale-95 transition-all whitespace-nowrap shadow-md shadow-[#7C6AE6]/20" id="btn-otp" onclick="requestOtp()">인증요청</button>
</div>
</div>
<div className="space-y-1.5 hidden opacity-0 transition-opacity duration-300" id="otp-row">
<label className="text-xs font-semibold text-slate-600 ml-1">인증번호</label>
<div className="flex gap-2">
<input className="flex-1 bg-[#F5F6F8] border border-slate-100 rounded-xl px-4 py-3.5 text-sm outline-none focus:border-[#7C6AE6] focus:bg-white transition-all text-slate-900 font-medium placeholder:text-slate-400" id="login-otp" inputmode="numeric" placeholder="6자리 숫자" type="text"/>
<button className="bg-slate-100 text-slate-900 px-5 rounded-xl text-xs font-bold hover:bg-slate-200 active:scale-95 transition-all whitespace-nowrap border border-slate-200" id="btn-otp-verify" onclick="verifyOtp()">확인</button>
</div>
<p className="text-[10px] text-slate-400 ml-1">테스트: 아무 번호나 입력하세요.</p>
</div>
</div>
</div>
</div>

<div className="screen bg-[#F5F6F8]" id="screen-home">

<header className="pt-14 pb-2 px-6 flex justify-between items-end bg-white sticky top-0 z-30 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
<div>
<div className="flex items-center gap-1.5 mb-1 opacity-80">
<i className="w-3 h-3 text-[#7C6AE6]" data-lucide="map-pin"></i>
<span className="text-[11px] font-semibold text-slate-500">한국대학교 캠퍼스</span>
</div>
<h1 className="text-xl font-bold text-slate-900 tracking-tight">안녕하세요, 민우님<br/><span className="text-slate-400">새로운 인맥을 찾아보세요!</span></h1>
</div>
<div className="flex gap-2">
<button className="w-9 h-9 bg-[#F5F6F8] rounded-full flex items-center justify-center text-slate-600 border border-slate-100 hover:bg-slate-100 transition-colors">
<i className="w-4 h-4" data-lucide="qr-code"></i>
</button>
<button className="relative w-9 h-9 bg-[#F5F6F8] rounded-full flex items-center justify-center text-slate-600 border border-slate-100 hover:bg-slate-100 transition-colors">
<i className="w-4 h-4" data-lucide="bell"></i>
<div className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-[#7C6AE6] rounded-full ring-2 ring-white"></div>
</button>
</div>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar pb-28">

<section className="mt-5">
<div className="flex justify-between items-center px-6 mb-3">
<h2 className="text-base font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
                            🔥 지금 접속중인 동료
                            <span className="bg-[#7C6AE6]/10 text-[#7C6AE6] text-[9px] px-1.5 py-0.5 rounded font-bold">LIVE</span>
</h2>
<button className="text-xs text-slate-400 font-semibold hover:text-[#7C6AE6] transition-colors" onclick="navTo('radar')">전체보기</button>
</div>
<div className="flex gap-3 px-6 overflow-x-auto no-scrollbar pb-2">

<div className="min-w-[140px] p-3 bg-white rounded-2xl border border-slate-100 shadow-sm active:scale-95 transition-transform cursor-pointer relative group" onclick="navTo('other-profile')">
<div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></div>
<div className="w-12 h-12 bg-[#F5F6F8] rounded-xl flex items-center justify-center text-xl mb-3 group-hover:bg-[#7C6AE6]/10 transition-colors text-slate-600">🎨</div>
<h3 className="text-sm font-bold text-slate-900 truncate">시디과 졸업작품</h3>
<p className="text-[11px] text-slate-500 truncate mb-2">시각디자인 • 21학번</p>
<div className="flex flex-wrap gap-1">
<span className="bg-[#F5F6F8] text-slate-500 text-[9px] px-1.5 py-0.5 rounded-md font-medium">#디자인</span>
<span className="bg-[#F5F6F8] text-slate-500 text-[9px] px-1.5 py-0.5 rounded-md font-medium">#전시</span>
</div>
</div>

<div className="min-w-[140px] p-3 bg-white rounded-2xl border border-slate-100 shadow-sm active:scale-95 transition-transform cursor-pointer relative group" onclick="navTo('other-profile')">
<div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white"></div>
<div className="w-12 h-12 bg-[#F5F6F8] rounded-xl flex items-center justify-center text-xl mb-3 group-hover:bg-[#7C6AE6]/10 transition-colors text-slate-600">💻</div>
<h3 className="text-sm font-bold text-slate-900 truncate">창업 동아리</h3>
<p className="text-[11px] text-slate-500 truncate mb-2">컴퓨터공학 • 19학번</p>
<div className="flex flex-wrap gap-1">
<span className="bg-[#F5F6F8] text-slate-500 text-[9px] px-1.5 py-0.5 rounded-md font-medium">#개발자</span>
<span className="bg-[#F5F6F8] text-slate-500 text-[9px] px-1.5 py-0.5 rounded-md font-medium">#스타트업</span>
</div>
</div>

<div className="min-w-[140px] p-3 bg-white rounded-2xl border border-slate-100 shadow-sm active:scale-95 transition-transform cursor-pointer relative group" onclick="navTo('other-profile')">
<div className="absolute top-3 right-3 w-2 h-2 bg-slate-300 rounded-full ring-2 ring-white"></div>
<div className="w-12 h-12 bg-[#F5F6F8] rounded-xl flex items-center justify-center text-xl mb-3 group-hover:bg-[#7C6AE6]/10 transition-colors text-slate-600">📸</div>
<h3 className="text-sm font-bold text-slate-900 truncate">사진 소모임</h3>
<p className="text-[11px] text-slate-500 truncate mb-2">미디어학부 • 22학번</p>
<div className="flex flex-wrap gap-1">
<span className="bg-[#F5F6F8] text-slate-500 text-[9px] px-1.5 py-0.5 rounded-md font-medium">#출사</span>
<span className="bg-[#F5F6F8] text-slate-500 text-[9px] px-1.5 py-0.5 rounded-md font-medium">#보정</span>
</div>
</div>
</div>
</section>

<section className="mt-6 px-6">
<div className="flex justify-between items-center mb-3">
<h2 className="text-base font-bold text-slate-900 tracking-tight">팀원 모집 &amp; 공모전</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</div>
<div className="space-y-3">

<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.99] transition-transform cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="bg-[#7C6AE6] text-white text-[10px] font-bold px-2 py-1 rounded-md">팀원 모집중</span>
<span className="text-[10px] text-slate-400">방금 전</span>
</div>
<h3 className="text-sm font-bold text-slate-900 mb-1">2024 교내 해커톤 프론트엔드 구해요 🚀</h3>
<p className="text-xs text-slate-500 line-clamp-1 mb-3">기획이랑 디자인은 완성되었습니다. React 가능하신 분 환영합니다!</p>
<div className="flex items-center justify-between border-t border-slate-50 pt-3">
<div className="flex items-center -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] text-slate-500">🧑‍💻</div>
<div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] text-slate-500">🎨</div>
<div className="w-6 h-6 rounded-full bg-[#2D2D35] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">+2</div>
</div>
<span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="message-circle"></i> 4
                                </span>
</div>
</div>
</div>
</section>

<section className="mt-8 px-6 mb-4">
<h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 ml-1">Campus Tools</h2>
<div className="grid grid-cols-4 gap-2">
<button className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-1.5 hover:bg-[#F5F6F8] active:scale-95 transition-all" onclick="navTo('timetable')">
<i className="w-5 h-5 text-[#7C6AE6]" data-lucide="calendar-days"></i>
<span className="text-[10px] font-medium text-slate-500">시간표</span>
</button>
<button className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-1.5 hover:bg-[#F5F6F8] active:scale-95 transition-all" onclick="navTo('cafeteria')">
<i className="w-5 h-5 text-[#7C6AE6]" data-lucide="utensils"></i>
<span className="text-[10px] font-medium text-slate-500">학식</span>
</button>
<button className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-1.5 hover:bg-[#F5F6F8] active:scale-95 transition-all">
<i className="w-5 h-5 text-[#7C6AE6]" data-lucide="book"></i>
<span className="text-[10px] font-medium text-slate-500">도서관</span>
</button>
<button className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center gap-1.5 hover:bg-[#F5F6F8] active:scale-95 transition-all">
<i className="w-5 h-5 text-[#7C6AE6]" data-lucide="bus"></i>
<span className="text-[10px] font-medium text-slate-500">셔틀</span>
</button>
</div>
</section>
</div>

<div className="absolute bottom-8 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-100/80 rounded-2xl p-1.5 px-6 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-30">
<button className="p-3 text-slate-800 active:scale-90 transition-transform" onclick="navTo('home')"><i className="w-5 h-5" data-lucide="home"></i></button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('feed')"><i className="w-5 h-5" data-lucide="layout-grid"></i></button>

<button className="p-3 -mt-8 bg-[#7C6AE6] rounded-full text-white shadow-lg shadow-[#7C6AE6]/30 hover:scale-110 active:scale-95 transition-all ring-4 ring-[#F5F6F8]" onclick="navTo('radar')"><i className="w-5 h-5" data-lucide="users"></i></button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all relative" onclick="navTo('chat-list')">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#7C6AE6] rounded-full ring-2 ring-white"></span>
</button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('mypage')"><i className="w-5 h-5" data-lucide="user"></i></button>
</div>
</div>

<div className="slide-screen bg-[#F5F6F8]" id="screen-timetable">

<header className="pt-14 pb-4 px-6 bg-white sticky top-0 z-20 border-b border-slate-100 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-3">
<span className="bg-[#7C6AE6] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md shadow-[#7C6AE6]/20">공지</span>
<span className="text-xs font-bold text-slate-700 flex items-center gap-1">
<i className="w-3.5 h-3.5 text-slate-400" data-lucide="clock"></i>
                        2025-2 시간표 업데이트
                    </span>
</div>
<button className="p-2 -mr-2 text-slate-400 hover:text-slate-600" onclick="navTo('home')"><i className="w-5 h-5" data-lucide="x"></i></button>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar p-5 pb-24">

<div className="bg-white rounded-[1.5rem] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 mb-5">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-[11px] font-bold text-[#7C6AE6] mb-0.5 block">2025년 2학기</span>
<h2 className="text-2xl font-black text-slate-900">4-1</h2>
</div>
<button className="text-slate-400 hover:text-slate-600"><i className="w-5 h-5" data-lucide="settings"></i></button>
</div>

<div className="border border-slate-100 rounded-xl overflow-hidden bg-white text-[10px]">
<div className="grid grid-cols-[2rem_1fr_1fr_1fr_1fr_1fr] bg-slate-50 border-b border-slate-100 text-center font-bold text-slate-500 py-2">
<div></div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div>
</div>
<div className="grid grid-cols-[2rem_1fr_1fr_1fr_1fr_1fr] auto-rows-[3rem] relative">
<div className="col-start-1 flex flex-col justify-around text-slate-400 text-[9px] font-medium border-r border-slate-100 bg-slate-50/50 text-center py-2 space-y-[2.2rem]">
<span>9</span><span>10</span><span>11</span><span>12</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
</div>
<div className="absolute inset-0 grid grid-cols-[2rem_1fr_1fr_1fr_1fr_1fr] grid-rows-9 pointer-events-none z-0">
<div className="col-start-2 border-b border-r border-slate-50"></div> <div className="col-start-3 border-b border-r border-slate-50"></div> <div className="col-start-4 border-b border-r border-slate-50"></div> <div className="col-start-5 border-b border-r border-slate-50"></div> <div className="col-start-6 border-b border-slate-50"></div>
<div className="col-start-2 row-start-2 border-b border-r border-slate-50"></div> <div className="col-start-3 row-start-2 border-b border-r border-slate-50"></div> <div className="col-start-4 row-start-2 border-b border-r border-slate-50"></div> <div className="col-start-5 row-start-2 border-b border-r border-slate-50"></div> <div className="col-start-6 row-start-2 border-b border-slate-50"></div>
<div className="col-start-2 row-start-3 border-b border-r border-slate-50"></div> <div className="col-start-3 row-start-3 border-b border-r border-slate-50"></div> <div className="col-start-4 row-start-3 border-b border-r border-slate-50"></div> <div className="col-start-5 row-start-3 border-b border-r border-slate-50"></div> <div className="col-start-6 row-start-3 border-b border-slate-50"></div>
</div>

<div className="col-start-2 row-start-3 row-span-2 m-0.5 bg-[#7C6AE6]/10 rounded-lg p-1.5 flex flex-col justify-center border border-[#7C6AE6]/20 z-10 text-[#7C6AE6]">
<span className="font-bold block mb-0.5">김신한</span>
<span className="text-slate-500">위 202</span>
</div>
<div className="col-start-2 row-start-6 row-span-2 m-0.5 bg-slate-100 rounded-lg p-1.5 flex flex-col justify-center border border-slate-200 z-10 text-slate-600">
<span className="font-bold block mb-0.5">김신한</span>
<span className="text-slate-500">위 202</span>
</div>
<div className="col-start-3 row-start-2 row-span-1 m-0.5 bg-[#7C6AE6]/20 rounded-lg p-1.5 flex flex-col justify-center border border-[#7C6AE6]/30 z-10 text-[#5D4BC4]">
<span className="font-bold block mb-0.5 text-[9px]">김은행 경영 01</span>
</div>
<div className="col-start-4 row-start-7 row-span-1 m-0.5 bg-[#7C6AE6] rounded-lg p-1.5 flex flex-col justify-center border border-[#7C6AE6] z-10 text-white shadow-md shadow-[#7C6AE6]/20">
<span className="font-bold block mb-0.5 leading-tight">UT: 세미나<br/>마음의 이해</span>
<span className="text-white/80 text-[8px]">김신한 위 402</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#7C6AE6] to-[#5D4BC4] rounded-[1.5rem] p-5 shadow-lg shadow-[#7C6AE6]/30 mb-5 relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3">
<span className="bg-white/20 text-white border border-white/20 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">AI BETA</span>
<span className="text-white text-sm font-bold">맞춤 수업 추천</span>
</div>
<h3 className="text-white font-bold text-lg mb-4 leading-snug">
                            민우님이 지난 학기에 수강한<br/>
<span className="text-indigo-100">디자인 트랙</span>을 분석했어요 🤖
                        </h3>
<div className="space-y-2 hidden opacity-0 transition-all duration-500" id="ai-rec-result">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center justify-between">
<div>
<h4 className="text-white font-bold text-sm">UX 심리학과 행동경제</h4>
<p className="text-indigo-100 text-[10px] mt-0.5">지난번 들은 '인지과학'과 연계돼요.</p>
</div>
<button className="bg-white text-[#7C6AE6] text-[10px] font-bold px-3 py-1.5 rounded-lg">담기</button>
</div>
</div>
<button className="w-full bg-white text-[#5D4BC4] font-bold py-3 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2" id="ai-rec-btn" onclick="startAiRecommendation()">
<i className="w-4 h-4 text-[#7C6AE6]" data-lucide="sparkles"></i>
                            AI 분석 결과 보기
                        </button>
</div>
</div>
</div>
</div>

<div className="slide-screen bg-[#F5F6F8]" id="screen-cafeteria">
<header className="pt-14 pb-4 px-6 bg-white/80 backdrop-blur-xl sticky top-0 z-20 flex items-center justify-between">
<h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    🍽️ 오늘의 학식
                </h2>
<button className="p-2 -mr-2 text-slate-400 hover:text-slate-900" onclick="navTo('home')"><i className="w-6 h-6" data-lucide="x"></i></button>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6 pb-24">

<div className="bg-white rounded-[2rem] p-6 shadow-xl shadow-slate-200 border border-slate-100 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-2 bg-[#7C6AE6]"></div>
<span className="text-xs font-bold text-[#7C6AE6] tracking-widest mb-2 block">LUNCH PICK</span>
<h3 className="text-2xl font-black text-slate-800 mb-6">점메추 (점심 메뉴 추천)</h3>
<div className="h-40 flex flex-col items-center justify-center transition-all" id="lunch-result">
<div className="text-6xl mb-4 animate-bounce">🍱</div>
<h4 className="text-xl font-bold text-slate-900">수제 등심 돈까스</h4>
<p className="text-slate-500 text-sm mt-1">학생회관 1층 • 5,500원</p>
</div>
<button className="w-full mt-4 bg-[#7C6AE6]/10 text-[#7C6AE6] font-bold py-3.5 rounded-xl hover:bg-[#7C6AE6]/20 transition-colors flex items-center justify-center gap-2 active:scale-95" onclick="rollMenu('lunch')">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
                        다른거 먹을래
                    </button>
</div>

<div className="bg-[#2D2D35] rounded-[2rem] p-6 shadow-xl text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#7C6AE6] rounded-full blur-[60px] opacity-20"></div>
<span className="text-xs font-bold text-[#7C6AE6] tracking-widest mb-2 block relative z-10">DINNER PICK</span>
<h3 className="text-2xl font-black text-white mb-6 relative z-10">저메추 (저녁 메뉴 추천)</h3>
<div className="h-40 flex flex-col items-center justify-center relative z-10" id="dinner-result">
<div className="text-6xl mb-4">🍜</div>
<h4 className="text-xl font-bold text-white">매운 소고기 쌀국수</h4>
<p className="text-slate-400 text-sm mt-1">기숙사 식당 • 6,000원</p>
</div>
<button className="relative z-10 w-full mt-4 bg-[#7C6AE6] text-white font-bold py-3.5 rounded-xl hover:bg-[#6A5ACD] transition-colors flex items-center justify-center gap-2 active:scale-95 border border-[#7C6AE6]" onclick="rollMenu('dinner')">
<i className="w-4 h-4" data-lucide="refresh-cw"></i>
                        다시 뽑기
                    </button>
</div>
</div>
</div>

<div className="screen bg-[#F5F6F8]" id="screen-feed">

<header className="bg-white/90 backdrop-blur-md pt-14 pb-0 sticky top-0 z-20 border-b border-slate-100">
<div className="px-6 flex justify-between items-center mb-4">
<div>
<h1 className="text-xl font-bold text-slate-900 tracking-tight">커뮤니티</h1>
<p className="text-xs text-slate-500 font-medium">관심 분야의 동료들과 인사이트를 나누세요.</p>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center bg-[#F5F6F8] rounded-full border border-slate-100 text-slate-600 hover:bg-slate-100 active:scale-95 transition-all">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
</div>
</div>

<div className="flex px-6 border-b border-slate-100 overflow-x-auto no-scrollbar gap-6">
<button className="filter-btn active pb-3 text-sm font-semibold text-[#7C6AE6] border-b-2 border-[#7C6AE6] transition-colors whitespace-nowrap" onclick="filterFeed(this, 'all')">전체</button>
<button className="filter-btn pb-3 text-sm font-medium text-slate-500 border-b-2 border-transparent hover:text-slate-700 transition-colors whitespace-nowrap" onclick="filterFeed(this, 'design')">디자인</button>
<button className="filter-btn pb-3 text-sm font-medium text-slate-500 border-b-2 border-transparent hover:text-slate-700 transition-colors whitespace-nowrap" onclick="filterFeed(this, 'dev')">개발/Tech</button>
<button className="filter-btn pb-3 text-sm font-medium text-slate-500 border-b-2 border-transparent hover:text-slate-700 transition-colors whitespace-nowrap" onclick="filterFeed(this, 'startup')">스타트업</button>
</div>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar pb-28">

<section className="py-5 border-b border-slate-100 bg-white mb-2">
<h2 className="px-6 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Trending Topics</h2>
<div className="flex px-6 gap-3 overflow-x-auto no-scrollbar">
<div className="shrink-0 w-36 h-20 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-3 flex flex-col justify-between shadow-lg shadow-slate-200 cursor-pointer hover:scale-[1.02] transition-transform">
<i className="w-4 h-4 text-slate-400" data-lucide="code-2"></i>
<span className="text-white text-xs font-bold">#해커톤_팀빌딩</span>
</div>
<div className="shrink-0 w-36 h-20 rounded-xl bg-white border border-slate-200 p-3 flex flex-col justify-between cursor-pointer hover:border-[#7C6AE6] transition-colors group">
<i className="w-4 h-4 text-slate-400 group-hover:text-[#7C6AE6]" data-lucide="palette"></i>
<span className="text-slate-900 text-xs font-bold group-hover:text-[#7C6AE6]">#졸업전시_준비</span>
</div>
<div className="shrink-0 w-36 h-20 rounded-xl bg-white border border-slate-200 p-3 flex flex-col justify-between cursor-pointer hover:border-[#7C6AE6] transition-colors group">
<i className="w-4 h-4 text-slate-400 group-hover:text-[#7C6AE6]" data-lucide="briefcase"></i>
<span className="text-slate-900 text-xs font-bold group-hover:text-[#7C6AE6]">#인턴_채용정보</span>
</div>
</div>
</section>
<div className="px-4 space-y-3 mt-3" id="feed-container">

<div className="feed-item bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-[#7C6AE6]/50 transition-colors" data-category="design notice" onclick="openPostDetail(this)">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-[#F5F6F8] rounded-full flex items-center justify-center text-[10px] font-bold text-[#7C6AE6] border border-slate-100">KIM</div>
<div>
<h3 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                                        김민지
                                        <span className="text-[10px] font-medium text-slate-400">@ 시각디자인학부</span>
</h3>
<span className="text-[10px] text-slate-400">2시간 전</span>
</div>
</div>
<span className="text-[10px] font-semibold text-[#7C6AE6] bg-[#F5F6F8] px-2 py-1 rounded border border-slate-100">디자인</span>
</div>
<h2 className="text-sm font-bold text-slate-900 mb-2 leading-snug">UX/UI 포트폴리오 피드백 스터디 모집합니다.</h2>
<p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">졸업을 앞두고 포트폴리오 정리가 필요한 4학년 위주로 구하고 있습니다. 현직자 멘토링도 연계할 예정입니다.</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-3">
<button className="group flex items-center gap-1.5 text-slate-400 hover:text-[#7C6AE6] transition-colors" onclick="toggleLike(this)">
<i className="w-3.5 h-3.5 group-[.liked]:text-[#7C6AE6] group-[.liked]:fill-[#7C6AE6] transition-colors" data-lucide="thumbs-up"></i>
<span className="text-[11px] font-medium like-count group-[.liked]:text-[#7C6AE6]">14</span>
</button>
<button className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i>
<span className="text-[11px] font-medium">5</span>
</button>
</div>
</div>

<div className="feed-item bg-white p-5 rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:border-[#7C6AE6]/50 transition-colors" data-category="dev" onclick="openPostDetail(this)">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-[#2D2D35] rounded-full flex items-center justify-center text-[10px] font-bold text-white">LEE</div>
<div>
<h3 className="text-xs font-bold text-slate-900 flex items-center gap-1">
                                        이준호
                                        <span className="text-[10px] font-medium text-slate-400">@ 컴퓨터공학과</span>
</h3>
<span className="text-[10px] text-slate-400">45분 전</span>
</div>
</div>
<span className="text-[10px] font-semibold text-[#7C6AE6] bg-[#F5F6F8] px-2 py-1 rounded border border-slate-100">Tech</span>
</div>
<h2 className="text-sm font-bold text-slate-900 mb-2 leading-snug">React Native로 교내 셔틀버스 앱 만드실 분?</h2>
<p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">현재 iOS 개발자 1명 있습니다. 백엔드랑 디자인 가능하신 분 연락 부탁드립니다. 방학 동안 완성해서 배포까지 해봐요.</p>
<div className="flex items-center gap-4 border-t border-slate-50 pt-3">
<button className="group flex items-center gap-1.5 text-slate-400 hover:text-[#7C6AE6] transition-colors" onclick="toggleLike(this)">
<i className="w-3.5 h-3.5 group-[.liked]:text-[#7C6AE6] group-[.liked]:fill-[#7C6AE6] transition-colors" data-lucide="thumbs-up"></i>
<span className="text-[11px] font-medium like-count group-[.liked]:text-[#7C6AE6]">32</span>
</button>
<button className="flex items-center gap-1.5 text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="message-square"></i>
<span className="text-[11px] font-medium">12</span>
</button>
</div>
</div>
</div>
</div>

<button className="absolute bottom-28 right-6 w-14 h-14 bg-[#7C6AE6] rounded-full text-white shadow-xl shadow-[#7C6AE6]/30 flex items-center justify-center hover:scale-110 active:scale-90 transition-all z-40 ring-2 ring-white" onclick="openWriteScreen()">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>

<div className="absolute bottom-8 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-100/80 rounded-2xl p-1.5 px-6 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-30">
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('home')"><i className="w-5 h-5" data-lucide="home"></i></button>
<button className="p-3 text-slate-800 active:scale-90 transition-transform" onclick="navTo('feed')"><i className="w-5 h-5" data-lucide="layout-grid"></i></button>
<button className="p-3 -mt-8 bg-[#7C6AE6] rounded-full text-white shadow-lg shadow-[#7C6AE6]/30 hover:scale-110 active:scale-95 transition-all ring-4 ring-[#F5F6F8]" onclick="navTo('radar')"><i className="w-5 h-5" data-lucide="users"></i></button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all relative" onclick="navTo('chat-list')">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('mypage')"><i className="w-5 h-5" data-lucide="user"></i></button>
</div>
</div>

<div className="slide-screen" id="screen-write">
<header className="pt-14 pb-4 px-6 flex justify-between items-center bg-white border-b border-slate-100">
<button className="text-slate-500 font-medium text-sm p-2 -ml-2 hover:text-slate-900" onclick="closeWriteScreen()">취소</button>
<span className="font-bold text-slate-900">새 게시글</span>
<button className="text-[#7C6AE6] font-bold text-sm p-2 -mr-2 bg-[#F5F6F8] px-4 rounded-full" onclick="submitPost()">등록</button>
</header>
<div className="flex-1 p-6 bg-white">
<div className="flex items-center gap-2 mb-6">
<span className="text-xs font-semibold text-slate-500">작성자:</span>
<div className="bg-[#F5F6F8] px-2 py-1 rounded text-xs font-bold text-slate-700">강민우 @ 시각디자인학부</div>
</div>
<input className="w-full text-lg font-bold placeholder:text-slate-300 outline-none mb-4 bg-transparent text-slate-900" placeholder="제목을 입력하세요" type="text"/>
<textarea className="w-full h-64 resize-none outline-none text-sm text-slate-700 leading-relaxed placeholder:text-slate-300 bg-transparent" placeholder="동료들과 나누고 싶은 이야기를 적어보세요."></textarea>
</div>
</div>

<div className="slide-screen" id="screen-post-detail">
<header className="pt-14 pb-4 px-6 flex justify-between items-center bg-white border-b border-slate-100">
<button className="text-slate-900 font-medium text-sm p-2 -ml-2" onclick="closePostDetail()"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<span className="font-bold text-slate-900">상세보기</span>
<button className="text-slate-400 p-2 -mr-2"><i className="w-4 h-4" data-lucide="share"></i></button>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar p-6 bg-white">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 bg-[#2D2D35] rounded-full flex items-center justify-center text-xs font-bold text-white" id="detail-icon">LEE</div>
<div>
<h3 className="text-sm font-bold text-slate-900" id="detail-author">이준호 <span className="text-slate-400 font-medium">@ 컴퓨터공학과</span></h3>
<span className="text-xs text-slate-400">45분 전 • Tech</span>
</div>
</div>
<h2 className="text-lg font-bold text-slate-900 mb-4 leading-snug" id="detail-title">React Native로 교내 셔틀버스 앱 만드실 분?</h2>
<p className="text-sm text-slate-700 leading-relaxed whitespace-pre-line mb-8" id="detail-body">현재 iOS 개발자 1명 있습니다. 백엔드랑 디자인 가능하신 분 연락 부탁드립니다.<br/><br/>방학 동안 완성해서 배포까지 해봐요. 포트폴리오용으로도 좋을 것 같습니다.</p>
<div className="border-t border-slate-100 pt-6">
<h4 className="text-xs font-bold text-slate-900 mb-4">댓글 <span className="text-slate-500">2</span></h4>
<div className="flex gap-3 mb-4">
<div className="w-8 h-8 bg-[#F5F6F8] rounded-full flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">PK</div>
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-bold text-slate-900">박경수</span>
<span className="text-[10px] text-slate-400">소프트웨어학부</span>
</div>
<p className="text-xs text-slate-600 leading-relaxed">백엔드 Spring Boot 가능한데 참여 가능할까요?</p>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-100 bg-white pb-8">
<div className="flex items-center gap-2 bg-[#F5F6F8] px-4 py-2 rounded-full border border-slate-200">
<input className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="댓글을 입력하세요..." type="text"/>
<button className="text-[#7C6AE6] font-bold text-xs">등록</button>
</div>
</div>
</div>

<div className="screen bg-[#09090b] flex flex-col text-white" id="screen-radar">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#27272a,transparent_60%)] opacity-40 pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full pt-14 px-6 z-50 flex items-center justify-between">
<button className="bg-zinc-800/80 backdrop-blur-md p-2.5 rounded-full hover:bg-zinc-700 transition-colors border border-white/10 active:scale-95" onclick="navTo('home')">
<i className="w-5 h-5 text-white" data-lucide="arrow-left"></i>
</button>
<div className="flex items-center gap-2 bg-zinc-800/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
<div className="w-2 h-2 rounded-full bg-[#7C6AE6] animate-pulse"></div>
<span className="text-[10px] font-bold text-zinc-300">ONLINE</span>
</div>
</div>
<div className="flex-1 relative flex flex-col items-center justify-center w-full h-full" id="radar-container">
<div className="radar-ring w-[500px] h-[500px] border-white/5"></div>
<div className="radar-ring w-[340px] h-[340px] border-white/5"></div>
<div className="radar-ring w-[180px] h-[180px] border-white/10"></div>
<div className="pulse-circle"></div>
<div className="pulse-circle"></div>
<div className="radar-scanner"></div>
<div className="relative z-30">
<div className="w-24 h-24 rounded-full bg-[#18181b] border-[3px] border-white/20 flex items-center justify-center relative shadow-[0_0_40px_rgba(124,106,230,0.2)] z-30">
<i className="w-10 h-10 text-white" data-lucide="user"></i>
</div>
</div>
<div className="user-dot top-[28%] left-[20%]" style={{animationDelay: '0.2s'}}>K</div>
<div className="user-dot bottom-[32%] right-[22%]" style={{animationDelay: '1.2s'}}>L</div>
<div className="user-dot top-[35%] right-[25%]" style={{animationDelay: '2.5s'}}>P</div>
<div className="absolute z-40 flex flex-col items-center gap-6 transition-all duration-500" id="radar-start-btn">
<button className="group relative flex items-center justify-center" onclick="startMatching()">
<div className="absolute inset-0 bg-[#7C6AE6] rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="relative bg-white text-[#7C6AE6] px-8 py-4 rounded-full font-bold text-sm shadow-[0_0_30px_rgba(124,106,230,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                            매칭 시작하기
                        </div>
</button>
<p className="text-zinc-500 text-xs font-medium">내 주변의 관심사 일치 동료 찾기</p>
</div>
<div className="absolute bottom-[20%] text-center opacity-0 transition-opacity duration-500" id="radar-status">
<h3 className="text-white font-bold text-lg mb-1">탐색중...</h3>
<p className="text-zinc-500 text-xs">가장 잘 맞는 동료를 찾고 있어요</p>
</div>
</div>
<div className="absolute bottom-0 w-full p-6 pb-12 z-50 translate-y-full opacity-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]" id="radar-result">
<div className="bg-[#2D2D35]/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-5 flex items-center gap-4 shadow-2xl cursor-pointer hover:bg-zinc-800 transition-colors" onclick="navTo('other-profile')">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-xl font-bold text-[#7C6AE6] shrink-0 rotate-3">
                        YS
                    </div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-white text-lg font-bold leading-none">연수리</h3>
<p className="text-zinc-400 text-xs font-medium mt-1.5">시각디자인 • 21학번</p>
</div>
<span className="bg-[#7C6AE6] text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg shadow-[#7C6AE6]/30">98% 일치</span>
</div>
<div className="flex gap-1.5 mt-2.5 overflow-hidden">
<span className="text-[10px] text-zinc-300 bg-white/10 px-2 py-1 rounded-md border border-white/5">#전시회</span>
<span className="text-[10px] text-zinc-300 bg-white/10 px-2 py-1 rounded-md border border-white/5">#ENFP</span>
</div>
</div>
<i className="text-zinc-500 w-5 h-5" data-lucide="chevron-right"></i>
</div>
</div>
</div>

<div className="screen bg-white" id="screen-chat-list">
<header className="pt-14 pb-2 px-6 sticky top-0 bg-white/95 backdrop-blur-xl z-20 border-b border-slate-100">
<div className="flex justify-between items-center mb-4">
<h1 className="text-2xl font-bold text-slate-900 tracking-tight">메시지</h1>
<button className="bg-[#7C6AE6] text-white p-2 rounded-full shadow-lg shadow-[#7C6AE6]/30 active:scale-95 transition-all"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 mb-2 -mx-6 px-6">
<div className="flex flex-col items-center gap-1.5 cursor-pointer group">
<div className="w-14 h-14 bg-[#F5F6F8] rounded-full flex items-center justify-center border-2 border-white ring-2 ring-[#7C6AE6] group-hover:scale-105 transition-transform">
<span className="text-xs font-bold text-slate-600">ME</span>
</div>
<span className="text-[10px] text-slate-500 font-medium">나의 메모</span>
</div>
<div className="flex flex-col items-center gap-1.5 cursor-pointer group" onclick="navTo('other-profile')">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-700 relative group-hover:scale-105 transition-transform">
                            YS
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<span className="text-[10px] text-slate-500 font-medium">연수리</span>
</div>
</div>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-28 pt-2">
<div className="bg-[#F5F6F8] rounded-xl p-3 flex items-center gap-2 mb-6 text-slate-500 border border-transparent focus-within:border-[#7C6AE6]/50 focus-within:bg-white transition-all">
<i className="w-4 h-4" data-lucide="search"></i>
<input className="bg-transparent text-sm outline-none w-full placeholder:text-slate-400" placeholder="대화방 이름, 참여자 검색" type="text"/>
</div>
<div className="space-y-1">
<div className="flex gap-4 cursor-pointer p-3 hover:bg-[#F5F6F8] rounded-2xl transition-colors -mx-3 active:scale-[0.98]" onclick="navTo('chat-room')">
<div className="relative w-12 h-12 shrink-0">
<div className="w-full h-full bg-white border border-slate-200 rounded-[18px] flex items-center justify-center text-sm font-bold text-slate-700">YS</div>
<div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-[2.5px] border-white"></div>
</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-center mb-0.5">
<h3 className="text-sm font-bold text-slate-900">연수리</h3>
<span className="text-[10px] text-slate-400 font-medium">2:34 PM</span>
</div>
<div className="flex justify-between items-center">
<p className="text-xs text-slate-600 truncate pr-4 font-medium">네! 지금 팀원 구하고 있어서 연락...</p>
<div className="w-5 h-5 bg-[#7C6AE6] rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0 shadow-sm">1</div>
</div>
</div>
</div>
<div className="flex gap-4 cursor-pointer p-3 hover:bg-[#F5F6F8] rounded-2xl transition-colors -mx-3 active:scale-[0.98]">
<div className="w-12 h-12 shrink-0 bg-[#2D2D35] rounded-[18px] flex items-center justify-center text-sm font-bold text-white">LEE</div>
<div className="flex-1 min-w-0 flex flex-col justify-center">
<div className="flex justify-between items-center mb-0.5">
<h3 className="text-sm font-bold text-slate-900">이준호</h3>
<span className="text-[10px] text-slate-400 font-medium">어제</span>
</div>
<p className="text-xs text-slate-400 truncate">이번 주 금요일 6시 회의 가능하실까요?</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-100/80 rounded-2xl p-1.5 px-6 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-30">
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('home')"><i className="w-5 h-5" data-lucide="home"></i></button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('feed')"><i className="w-5 h-5" data-lucide="layout-grid"></i></button>
<button className="p-3 -mt-8 bg-[#7C6AE6] rounded-full text-white shadow-lg shadow-[#7C6AE6]/30 hover:scale-110 active:scale-95 transition-all ring-4 ring-[#F5F6F8]" onclick="navTo('radar')"><i className="w-5 h-5" data-lucide="users"></i></button>
<button className="p-3 text-slate-900 active:scale-90 transition-all relative" onclick="navTo('chat-list')">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('mypage')"><i className="w-5 h-5" data-lucide="user"></i></button>
</div>
</div>

<div className="screen bg-white z-[60]" id="screen-chat-room">
<header className="pt-14 pb-3 px-4 flex items-center gap-3 bg-white/90 backdrop-blur-md border-b border-slate-100 sticky top-0 z-20">
<button className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors active:scale-90" onclick="navTo('chat-list')"><i className="w-6 h-6 text-slate-600" data-lucide="chevron-left"></i></button>
<div className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-xs font-bold border border-slate-200">YS</div>
<div className="flex-1 min-w-0">
<h2 className="text-sm font-bold text-slate-900 leading-none mb-0.5">연수리</h2>
<span className="text-[10px] text-slate-400 font-medium block">시각디자인 • 최근 접속 5분 전</span>
</div>
<button className="p-2 hover:bg-slate-100 rounded-full transition-colors"><i className="w-5 h-5 text-slate-400" data-lucide="phone"></i></button>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar bg-[#F5F6F8] p-4 space-y-4 pb-24" id="chat-scroll">
<div className="flex justify-center my-4">
<span className="bg-slate-200/60 text-slate-500 text-[10px] font-medium px-3 py-1 rounded-full">2023년 10월 24일</span>
</div>
<div className="flex flex-col items-end gap-1">

<div className="bg-[#7C6AE6] text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] text-[13px] leading-relaxed shadow-sm">
                        안녕하세요! 프로필 보고 연락드려요.<br/>같은 디자인 학부시네요! 반가워요 👋
                    </div>
<span className="text-[10px] text-slate-400 mr-1">오후 2:31</span>
</div>
<div className="flex flex-col items-start gap-1">
<div className="flex items-end gap-2">
<div className="w-8 h-8 bg-white rounded-[12px] flex items-center justify-center text-[10px] font-bold mb-1 border border-slate-200 shrink-0 cursor-pointer active:scale-95 transition-transform" onclick="navTo('other-profile')">YS</div>
<div className="bg-white border border-slate-200 text-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%] text-[13px] leading-relaxed shadow-sm">
                            앗 안녕하세요! ㅎㅎ 네 맞아요<br/>혹시 이번 졸업전시회 준비하시나요?
                        </div>
</div>
<span className="text-[10px] text-slate-400 ml-10">오후 2:33</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-100 pb-8 z-30">
<div className="flex items-end gap-2 bg-[#F5F6F8] p-1.5 rounded-[20px] border border-slate-200 focus-within:bg-white focus-within:border-[#7C6AE6]/50 transition-colors">
<button className="p-2 text-slate-400 hover:text-[#7C6AE6] transition-colors"><i className="w-6 h-6" data-lucide="plus"></i></button>
<input className="flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400 min-w-0 py-3" id="chat-input" onkeypress="handleChatEnter(event)" placeholder="메시지 입력..." type="text"/>
<button className="p-2 bg-[#7C6AE6] text-white rounded-full hover:bg-[#6A5ACD] active:scale-90 transition-all shadow-sm shrink-0 mb-0.5" onclick="sendChatMessage()">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</div>
</div>
</div>

<div className="screen bg-[#F5F6F8]" id="screen-mypage">
<header className="bg-white pt-14 pb-8 px-6 rounded-b-[2.5rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] z-20 border-b border-slate-100">
<div className="flex justify-between items-start mb-6">
<div className="relative">
<div className="w-20 h-20 bg-[#7C6AE6] rounded-[2rem] flex items-center justify-center text-3xl text-white shadow-xl shadow-[#7C6AE6]/20 ring-4 ring-white">👨🏻‍🎓</div>
<button className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full border border-slate-100 shadow-sm text-slate-600"><i className="w-3.5 h-3.5" data-lucide="camera"></i></button>
</div>
<button className="bg-[#F5F6F8] p-2 rounded-full hover:bg-slate-100 transition-colors border border-slate-100"><i className="w-5 h-5 text-slate-600" data-lucide="settings"></i></button>
</div>
<h1 className="text-2xl font-bold text-slate-900 tracking-tight">강민우</h1>
<p className="text-slate-500 text-sm font-medium mt-1">한국대학교 시각디자인학부 21학번</p>
<div className="grid grid-cols-3 gap-3 mt-6">
<div className="bg-[#F5F6F8]/80 rounded-2xl p-3 border border-slate-100 text-center">
<span className="block text-xl font-black text-slate-900">12</span>
<span className="text-[10px] text-slate-400 font-bold uppercase">Likes</span>
</div>
<div className="bg-[#F5F6F8]/80 rounded-2xl p-3 border border-slate-100 text-center">
<span className="block text-xl font-black text-slate-900">4</span>
<span className="text-[10px] text-slate-400 font-bold uppercase">Chats</span>
</div>
<div className="bg-[#F5F6F8]/80 rounded-2xl p-3 border border-slate-100 text-center">
<span className="block text-xl font-black text-[#7C6AE6]">85<small className="text-xs">%</small></span>
<span className="text-[10px] text-slate-400 font-bold uppercase">Profile</span>
</div>
</div>
</header>
<div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4 pb-28">

<div className="bg-gradient-to-br from-[#2D2D35] to-[#7C6AE6] rounded-2xl p-5 text-white shadow-lg relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-all">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="relative z-10 flex justify-between items-center">
<div>
<span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider mb-1 block">Mobile ID</span>
<h3 className="text-lg font-bold">학생증 QR코드</h3>
</div>
<i className="w-8 h-8 text-white/80" data-lucide="qr-code"></i>
</div>
</div>
<div className="bg-white rounded-[1.2rem] p-1.5 shadow-sm border border-slate-100">
<button className="w-full flex items-center justify-between p-3.5 hover:bg-[#F5F6F8] rounded-xl transition-colors group active:scale-[0.98]" onclick="navTo('timetable')">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-[#7C6AE6]/10 flex items-center justify-center text-[#7C6AE6] group-hover:bg-[#7C6AE6]/20 transition-colors"><i className="w-4.5 h-4.5" data-lucide="calendar"></i></div>
<span className="text-sm font-semibold text-slate-700">내 시간표</span>
</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</button>
<button className="w-full flex items-center justify-between p-3.5 hover:bg-[#F5F6F8] rounded-xl transition-colors group active:scale-[0.98]">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-[#F5F6F8] flex items-center justify-center text-slate-600 group-hover:bg-slate-100 transition-colors"><i className="w-4.5 h-4.5" data-lucide="hash"></i></div>
<span className="text-sm font-semibold text-slate-700">관심 태그 설정</span>
</div>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6 bg-white/90 backdrop-blur-xl border border-slate-100/80 rounded-2xl p-1.5 px-6 flex justify-between items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-30">
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('home')"><i className="w-5 h-5" data-lucide="home"></i></button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all" onclick="navTo('feed')"><i className="w-5 h-5" data-lucide="layout-grid"></i></button>
<button className="p-3 -mt-8 bg-[#7C6AE6] rounded-full text-white shadow-lg shadow-[#7C6AE6]/30 hover:scale-110 active:scale-95 transition-all ring-4 ring-[#F5F6F8]" onclick="navTo('radar')"><i className="w-5 h-5" data-lucide="users"></i></button>
<button className="p-3 text-slate-400 hover:text-[#7C6AE6] active:scale-90 transition-all relative" onclick="navTo('chat-list')">
<i className="w-5 h-5" data-lucide="message-circle"></i>
</button>
<button className="p-3 text-slate-900 active:scale-90 transition-all" onclick="navTo('mypage')"><i className="w-5 h-5" data-lucide="user"></i></button>
</div>
</div>

<div className="screen bg-white overflow-hidden z-[70]" id="screen-other-profile">
<div className="flex-1 overflow-y-auto no-scrollbar relative">
<div className="relative h-96 shrink-0">
<img alt="Bg" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
<button className="absolute top-14 left-6 z-20 bg-white/60 backdrop-blur-md p-2.5 rounded-full hover:bg-white/80 transition-colors border border-white/20 shadow-lg active:scale-90" onclick="navTo('home')">
<i className="w-5 h-5 text-slate-900" data-lucide="arrow-left"></i>
</button>
</div>
<div className="px-6 -mt-20 relative z-10 pb-10">
<div className="bg-white rounded-[2rem] p-6 shadow-[0_0_40px_rgba(0,0,0,0.06)] border border-slate-100">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-2xl font-bold text-slate-900 tracking-tight">연수리</h2>
<p className="text-slate-500 font-medium mt-1">시각디자인학부 • 3학년</p>
</div>
<div className="w-16 h-16 bg-white rounded-[1.2rem] flex items-center justify-center text-xl font-bold border-4 border-slate-100 shadow-md -mt-14 rotate-6 text-[#7C6AE6]">YS</div>
</div>

<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 bg-[#F5F6F8] border border-slate-100 rounded-lg text-xs text-slate-600 font-medium">🎨 전시회러버</span>
<span className="px-3 py-1.5 bg-[#F5F6F8] border border-slate-100 rounded-lg text-xs text-slate-600 font-medium">🌙 올빼미족</span>
<span className="px-3 py-1.5 bg-[#7C6AE6] text-white rounded-lg text-xs font-bold border border-[#7C6AE6]">ENFP</span>
</div>

<div className="space-y-4 mb-8">
<h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide border-b border-slate-100 pb-2">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="book-open"></i>
                                함께 수강한 수업
                            </h3>
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<div className="shrink-0 bg-[#7C6AE6]/10 border border-[#7C6AE6]/20 rounded-xl p-3 w-28">
<span className="text-[9px] text-[#7C6AE6] font-bold block mb-1">2023-1</span>
<h4 className="text-xs font-bold text-[#5D4BC4] truncate">디자인사</h4>
</div>
<div className="shrink-0 bg-[#F5F6F8] border border-slate-100 rounded-xl p-3 w-28">
<span className="text-[9px] text-slate-500 font-bold block mb-1">2022-2</span>
<h4 className="text-xs font-bold text-slate-800 truncate">기초드로잉</h4>
</div>
</div>
</div>

<div className="bg-[#F5F6F8]/80 border border-slate-100 rounded-2xl p-5 space-y-4 mb-8">
<h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wide">
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="clock"></i>
                                겹치는 공강 시간
                            </h3>
<div className="flex gap-2">
<div className="flex-1 bg-white border border-slate-200/50 rounded-xl p-3 text-center shadow-sm">
<span className="block text-[10px] text-slate-400 font-medium mb-0.5">금요일</span>
<span className="block text-sm font-bold text-slate-900">14:00</span>
</div>
<div className="flex-1 bg-white border border-slate-200/50 rounded-xl p-3 text-center shadow-sm">
<span className="block text-[10px] text-slate-400 font-medium mb-0.5">금요일</span>
<span className="block text-sm font-bold text-slate-900">15:00</span>
</div>
</div>
</div>
<button className="w-full bg-[#7C6AE6] text-white py-4 rounded-xl font-bold hover:bg-[#6A5ACD] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#7C6AE6]/20 active:scale-[0.98]" onclick="navTo('chat-room')">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                            대화 요청하기
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
