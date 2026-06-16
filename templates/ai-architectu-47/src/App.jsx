import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // State
        let isCheckedIn = false;
        let points = 2450;
        
        const overlay = document.getElementById('checkInOverlay');
        const checkInModal = document.getElementById('checkInModal');
        const detailsModal = document.getElementById('detailsModal');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        const pointsEl = document.getElementById('pointsDisplay');
        const detailPointsEl = document.getElementById('detailTotalPoints');
        const entryOverPoints = document.getElementById('entryOverPoints');

        function openCheckInModal() {
            // Show Overlay
            overlay.classList.remove('hidden', 'modal-enter');
            overlay.classList.add('modal-active', 'flex');
            
            // Show Checkin Modal
            checkInModal.classList.remove('hidden', 'scale-95', 'opacity-0');
            checkInModal.classList.add('block', 'scale-100', 'opacity-100');
            
            // Ensure details modal is hidden
            detailsModal.classList.add('hidden');
        }

        function switchToDetails() {
            // Hide Checkin Modal
            checkInModal.classList.remove('scale-100', 'opacity-100');
            checkInModal.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                checkInModal.classList.add('hidden');
                // Show Details Modal
                detailsModal.classList.remove('hidden', 'scale-95', 'opacity-0');
                detailsModal.classList.add('block', 'scale-100', 'opacity-100');
            }, 200);
        }

        function backToCheckIn() {
            // Hide Details
            detailsModal.classList.remove('scale-100', 'opacity-100');
            detailsModal.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                detailsModal.classList.add('hidden');
                // Show Checkin
                checkInModal.classList.remove('hidden', 'scale-95', 'opacity-0');
                checkInModal.classList.add('block', 'scale-100', 'opacity-100');
            }, 200);
        }

        function closeModals() {
            // Close active modal
            checkInModal.classList.add('scale-95', 'opacity-0');
            detailsModal.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                overlay.classList.remove('modal-active');
                overlay.classList.add('modal-enter');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                    overlay.classList.remove('flex');
                    checkInModal.classList.add('hidden');
                    detailsModal.classList.add('hidden');
                }, 200);
            }, 200);
        }

        function performCheckIn() {
            if(isCheckedIn) return;
            
            isCheckedIn = true;
            
            // Button Loading State
            const btn = document.getElementById('modalCheckInBtn');
            btn.innerHTML = '<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> 签到中...';
            lucide.createIcons();

            setTimeout(() => {
                // Logic: Today is Day 4 (Next after 3). 
                // Reward: 200 Base + 100 Extra = 300 Total.
                const reward = 300;
                points += reward;
                
                // Update UI Numbers
                pointsEl.innerText = points.toLocaleString();
                detailPointsEl.innerText = points.toLocaleString();
                entryOverPoints.innerText = points.toLocaleString();
                
                // Add Entry to Details List
                document.getElementById('newCheckinEntry').classList.remove('hidden');
                document.getElementById('newCheckinEntry').classList.add('flex');

                // Update UI Button
                btn.classList.replace('bg-black', 'bg-green-600');
                btn.innerHTML = '<i data-lucide="check" class="w-4 h-4"></i> 今日已完成 (Day 4)';
                
                // Visual Updates for Day 4 Node
                const day4Icon = document.getElementById('day4icon');
                const day4Ring = document.getElementById('day4ring');
                
                // Remove pending ring
                day4Ring.style.display = 'none';
                
                // Change icon to Check inside Gift box or just check
                day4Icon.classList.remove('bg-indigo-600');
                day4Icon.classList.add('bg-green-500');
                day4Icon.innerHTML = '<i data-lucide="gift" class="w-4 h-4 text-white"></i>'; // Keep gift but make it static white
                
                lucide.createIcons();

                // Navbar Updates
                const navBtn = document.getElementById('checkInBtn');
                const navText = document.getElementById('checkInBtnText');
                navBtn.classList.replace('bg-amber-50', 'bg-green-50');
                navBtn.classList.replace('text-amber-600', 'text-green-600');
                navText.innerText = "已签到";
                navBtn.querySelector('svg').outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle-2 w-3.5 h-3.5"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>';

                // Show Specific Toast for Day 4
                toastMessage.innerText = "签到成功! 本日获得 200 算力，已额外获得 100 算力惊喜礼盒奖励！";
                showToast();

            }, 800);
        }

        function showToast() {
            toast.classList.remove('opacity-0', '-translate-y-10');
            setTimeout(() => {
                toast.classList.add('opacity-0', '-translate-y-10');
            }, 4000);
        }

        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if(e.target === overlay) closeModals();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="banner-gradient w-full h-12 flex items-center justify-center relative px-4 z-50" id="topBanner">
<div className="text-white text-xs md:text-sm font-medium tracking-wide flex items-center gap-2">
            香蕉模型震撼来袭，期待您的无限创意！
            <button className="bg-white/20 hover:bg-white/30 px-3 py-0.5 rounded-full text-xs transition-colors backdrop-blur-sm border border-white/20 flex items-center gap-1">
                了解详情 <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<button className="absolute right-4 text-white/80 hover:text-white transition-colors" onclick="document.getElementById('topBanner').style.display='none'">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="sticky top-4 z-40 px-4 w-full flex justify-center">
<nav className="bg-white/80 backdrop-blur-xl w-full max-w-[1200px] h-14 rounded-full px-2 pl-6 pr-2 flex items-center justify-between shadow-sm border border-white/50">

<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 bg-black rounded flex items-center justify-center text-white">
<svg className="lucide lucide-box-select w-4 h-4" data-lucide="box-select" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 0 0-2 2"></path><path d="M19 3a2 2 0 0 1 2 2"></path><path d="M21 19a2 2 0 0 1-2 2"></path><path d="M5 21a2 2 0 0 1-2-2"></path><path d="M9 3h1"></path><path d="M9 21h1"></path><path d="M14 3h1"></path><path d="M14 21h1"></path><path d="M3 9v1"></path><path d="M21 9v1"></path><path d="M3 14v1"></path><path d="M21 14v1"></path></svg>
</div>
<span className="font-bold text-lg tracking-tight text-black">CONCETTO</span>
</a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
<a className="hover:text-black transition-colors relative flex items-center gap-1" href="#">
                        AI工具箱 
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[9px] px-1 rounded-sm leading-tight absolute -top-2 -right-6 scale-90">HOT</span>
</a>
<a className="hover:text-black transition-colors" href="#">帮助中心</a>
<a className="hover:text-black transition-colors" href="#">定价</a>
</div>
</div>

<div className="flex items-center gap-2 md:gap-4">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors hidden sm:block" href="#">下载应用</a>
<button className="text-gray-500 hover:text-black transition-colors p-1.5 relative">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-1 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>

<button className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-full transition-all group border border-amber-200/50" id="checkInBtn" onclick="openCheckInModal()">
<svg className="lucide lucide-calendar-check w-3.5 h-3.5 group-hover:scale-110 transition-transform" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<span className="text-xs font-semibold" id="checkInBtnText">每日签到</span>
</button>
<div className="h-4 w-[1px] bg-gray-200"></div>
<a className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-black transition-colors px-1" href="#">
<div className="p-1 bg-orange-100 rounded-full text-orange-500">
<svg className="lucide lucide-gift w-3 h-3" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<span className="hidden sm:inline">邀请有礼</span>
</a>

<div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white cursor-pointer hover:opacity-80 transition-opacity">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</nav>
</div>

<main className="flex-1 flex flex-col md:pt-24 w-full max-w-[1440px] mr-auto ml-auto pt-16 pr-4 pb-20 pl-4 relative items-center">

<div className="text-center max-w-4xl mx-auto z-10 relative">

<div className="absolute -left-12 top-20 hidden lg:flex flex-col items-center gap-2 animate-float">
<div className="w-24 h-32 rounded-2xl bg-gradient-to-b from-[#8C7CFF] to-[#C4C4C4] p-[1px] shadow-xl">
<div className="w-full h-full bg-white/90 backdrop-blur rounded-2xl flex flex-col items-center justify-center gap-2">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs font-bold text-gray-800">AI</span>
<span className="text-[10px] text-gray-500">驱动</span>
</div>
</div>
</div>

<div className="absolute -right-12 top-32 hidden lg:flex flex-col items-center gap-2 animate-float-delayed">
<div className="w-24 h-32 rounded-2xl bg-gradient-to-b from-[#D946EF] to-[#C4C4C4] p-[1px] shadow-xl">
<div className="w-full h-full bg-white/90 backdrop-blur rounded-2xl flex flex-col items-center justify-center gap-2">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500">
<svg className="lucide lucide-git-merge w-5 h-5" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
</div>
<span className="text-xs font-bold text-gray-800">流程</span>
<span className="text-[10px] text-gray-500">一体化</span>
</div>
</div>
</div>

<h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight mb-6 leading-tight flex flex-col items-center">
<div className="flex items-center gap-3 md:gap-4 mb-2">
<div className="w-8 h-8 md:w-12 md:h-12 bg-black rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-layout-grid w-5 h-5 md:w-7 md:h-7" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
                    AI驱动的全流程
                </div>
<span className="">建筑设计平台</span>
</h1>
<div className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto font-medium">
<p className="">AI驱动重构建筑设计流程</p>
<p className="">让CONCETTO作为您的AI设计伙伴</p>
<p>让设计回归真正的创意</p>
</div>

<button className="btn-gradient text-white px-10 py-3.5 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
                下载CONCETTO
            </button>
</div>

<div className="absolute bottom-40 left-0 w-full h-64 overflow-hidden -z-10 opacity-30 pointer-events-none">
<div className="absolute bottom-0 left-[10%] w-20 h-40 bg-gray-300"></div>
<div className="absolute bottom-0 left-[15%] w-24 h-56 bg-gray-300 ml-4"></div>
<div className="absolute bottom-0 left-[25%] w-32 h-32 bg-gray-300 ml-4"></div>
<div className="absolute bottom-0 right-[10%] w-20 h-48 bg-gray-300"></div>
<div className="absolute bottom-0 right-[20%] w-28 h-36 bg-gray-300 mr-4"></div>
<div className="absolute bottom-0 w-full flex justify-between px-10">
<div className="w-12 h-16 bg-green-800/20 rounded-full blur-xl"></div>
<div className="w-16 h-20 bg-green-800/20 rounded-full blur-xl"></div>
<div className="w-12 h-16 bg-green-800/20 rounded-full blur-xl"></div>
</div>
</div>

<div className="mt-24 w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-0 z-20">

<div className="bg-white rounded-2xl p-5 card-shadow hover:-translate-y-1 transition-transform cursor-pointer flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
<svg className="lucide lucide-image w-6 h-6" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div>
<h3 className="font-bold text-gray-900 text-sm">AI灵感渲染器</h3>
<p className="text-[10px] text-gray-500 mt-0.5">开启方案设计AI出图奇妙之旅</p>
</div>
</div>

<div className="bg-white rounded-2xl p-5 card-shadow hover:-translate-y-1 transition-transform cursor-pointer flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-400 flex-shrink-0">
<svg className="lucide lucide-pen-tool w-6 h-6" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="">
<h3 className="font-bold text-gray-900 text-sm">AI彩色总平面</h3>
<p className="text-[10px] text-gray-500 mt-0.5">上传CAD帮你快速出图</p>
</div>
</div>

<div className="bg-white rounded-2xl p-5 card-shadow hover:-translate-y-1 transition-transform cursor-pointer flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-400 flex-shrink-0">
<svg className="lucide lucide-calculator w-6 h-6" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<div>
<h3 className="font-bold text-gray-900 text-sm">AI成本估算</h3>
<p className="text-[10px] text-gray-500 mt-0.5">上传指标表直接计算成本</p>
</div>
</div>

<div className="bg-white rounded-2xl p-5 card-shadow hover:-translate-y-1 transition-transform cursor-pointer flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-400 flex-shrink-0">
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h3 className="font-bold text-gray-900 text-sm">场地模型获取</h3>
<p className="text-[10px] text-gray-500 mt-0.5">快速定位用地获取周边模型</p>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 modal-enter hidden" id="checkInOverlay">

<div className="bg-white w-full max-w-[400px] rounded-3xl shadow-2xl p-0 overflow-hidden relative transform transition-all duration-300 scale-95 opacity-0" id="checkInModal">

<div className="h-24 w-full bg-gradient-to-r from-purple-500 to-indigo-600 relative overflow-hidden">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20" onclick="closeModals()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="absolute bottom-4 left-6 text-white">
<h2 className="text-xl font-bold tracking-tight">每日签到</h2>
<p className="text-xs text-purple-100 opacity-90">连续签到7天，解锁更多灵感值</p>
</div>

<div className="absolute -right-4 -bottom-4 opacity-20 transform rotate-12">
<svg className="lucide lucide-coins w-24 h-24 text-yellow-300" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
</div>

<div className="p-6">

<div className="flex items-end justify-between mb-6">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-gray-500 font-medium uppercase tracking-wider">我的灵感值</span>

<button className="text-xs text-indigo-500 hover:text-indigo-700 font-medium flex items-center transition-colors bg-indigo-50 px-2 py-0.5 rounded-full" onclick="switchToDetails()">
                                查看灵感值 <svg className="lucide lucide-chevron-right w-3 h-3 ml-0.5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="text-3xl font-bold text-gray-900 flex items-center gap-1 leading-none">
<span id="pointsDisplay">2,450</span>
<svg className="lucide lucide-zap w-5 h-5 text-yellow-500 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>

<div className="flex items-center gap-1 mt-2 text-[10px] text-amber-600 bg-amber-50 border border-amber-100 px-2 py-1 rounded-md w-fit">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>签到点数有效期至次日 00:00:00，请及时使用</span>
</div>
</div>
<div className="text-right pb-1">
<span className="text-xs text-gray-500 font-medium">已连续签到</span>
<div className="text-lg font-bold text-indigo-600">3 天</div>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-gray-700">本周进度</span>
<span className="text-[10px] bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">目标: 7天</span>
</div>
<div className="flex justify-between gap-1">

<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border border-indigo-200">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-[10px] text-gray-400">周一</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border border-indigo-200">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-[10px] text-gray-400">周二</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 border border-indigo-200">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-[10px] text-gray-400">周三</span>
</div>

<div className="flex flex-col items-center gap-1 relative gift-hover" id="day4node">

<div className="absolute inset-0 rounded-full border-2 border-indigo-500 animate-ping opacity-20" id="day4ring"></div>
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 z-10 transition-all duration-300" id="day4icon">

<svg className="lucide lucide-gift w-4 h-4 text-yellow-300 fill-yellow-300/20" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<span className="text-[10px] text-indigo-600 font-bold">今天</span>
</div>

<div className="flex flex-col items-center gap-1 opacity-40">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 text-xs">5</div>
<span className="text-[10px] text-gray-400">周五</span>
</div>
<div className="flex flex-col items-center gap-1 opacity-40">
<div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 text-xs">6</div>
<span className="text-[10px] text-gray-400">周六</span>
</div>

<div className="flex flex-col items-center gap-1 opacity-60">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 border border-amber-200 flex items-center justify-center text-amber-500">
<svg className="lucide lucide-crown w-4 h-4" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<span className="text-[10px] text-amber-600 font-medium">大奖</span>
</div>
</div>
</div>

<button className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group mb-4 shadow-xl shadow-black/5" id="modalCheckInBtn" onclick="performCheckIn()">
<span>立即签到 (领取奖励)</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>

<div className="flex items-center justify-center gap-2 text-xs text-gray-500">
<label className="flex items-center gap-2 cursor-pointer select-none">
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-7 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-green-500"></div>
</div>
                        开启每日提醒
                    </label>
</div>
</div>
</div>

<div className="bg-white w-full max-w-[600px] rounded-2xl shadow-2xl overflow-hidden relative transform transition-all duration-300 hidden" id="detailsModal">

<div className="bg-[#A78BFA] p-6 relative">
<button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors" onclick="closeModals()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="absolute top-4 left-4 text-white/70 hover:text-white transition-colors flex items-center gap-1 text-sm font-medium" onclick="backToCheckIn()">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> 返回
                </button>
<h2 className="text-white font-semibold text-lg mb-6 ml-6">Membership</h2>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="flex items-center gap-3">
<span className="text-white font-bold text-xl">Yuexuan</span>
<span className="bg-white/20 backdrop-blur px-2 py-0.5 rounded-full text-white text-xs font-medium border border-white/20">Free</span>
</div>
</div>
</div>

<div className="p-6 bg-white min-h-[400px]">
<div className="flex justify-between items-end mb-4">
<h3 className="text-lg font-bold text-gray-900">My Credits</h3>
<span className="text-xs text-gray-400">Refresh on 2026-04-23 00:00:00</span>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 pb-8 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="bg-[#8B5CF6] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase">Over</div>
<div className="flex items-baseline gap-1">
<svg className="lucide lucide-zap w-5 h-5 text-yellow-500 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-3xl font-bold text-gray-800" id="detailTotalPoints">2450</span>
<span className="text-sm text-gray-400">Credits/Month</span>
</div>
</div>
<div className="flex items-center gap-6 text-xs">
<div>
<div className="text-gray-400 mb-1">All Credits</div>
<div className="font-bold text-gray-800 text-sm">2500 Credits</div>
</div>
<div className="text-gray-300 text-lg">=</div>
<div>
<div className="text-gray-400 mb-1">Base Credits</div>
<div className="font-bold text-gray-800 text-sm">2000 Credits</div>
</div>
<div className="text-gray-300 text-lg">+</div>
<div>
<div className="text-gray-400 mb-1 flex items-center gap-1">Reward Credits <svg className="lucide lucide-help-circle w-3 h-3" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg></div>
<div className="font-bold text-gray-800 text-sm">500 Credits</div>
</div>
</div>
</div>

<div className="border-b border-gray-100 mb-6">
<button className="text-blue-600 font-bold border-b-2 border-blue-600 pb-2 px-1 text-sm">Details</button>
</div>

<div className="space-y-6 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">

<div className="flex justify-between items-start">
<div>
<div className="text-sm font-medium text-gray-700">Monthly Base Credits</div>
<div className="text-xs text-gray-400 mt-1">2025-12-30 00:00:01</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-blue-600">+2000</div>
<div className="text-xs text-gray-400 mt-1">Over: 2498</div>
</div>
</div>

<div className="flex justify-between items-start">
<div>
<div className="text-sm font-medium text-gray-700">Monthly Base Credits</div>
<div className="text-xs text-gray-400 mt-1">2025-12-29 00:00:01</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-blue-600">+2000</div>
<div className="text-xs text-gray-400 mt-1">Over: 2498</div>
</div>
</div>

<div className="hidden justify-between items-start bg-blue-50/50 p-2 -mx-2 rounded-lg transition-all" id="newCheckinEntry">
<div>
<div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                                Daily Check-in Reward 
                                <span className="bg-yellow-100 text-yellow-600 text-[10px] px-1.5 py-0.5 rounded font-bold">BONUS</span>
</div>
<div className="text-xs text-gray-400 mt-1">Just Now</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-blue-600">+300</div>
<div className="text-xs text-gray-400 mt-1">Over: <span id="entryOverPoints">2750</span></div>
</div>
</div>

<div className="flex justify-between items-start">
<div>
<div className="text-sm font-medium text-gray-700">Daily Check-in Reward</div>
<div className="text-xs text-gray-400 mt-1">2025-12-24 04:51:21</div>
</div>
<div className="text-right">
<div className="text-sm font-bold text-gray-900">+500</div>
<div className="text-xs text-gray-400 mt-1">Over: 2498</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 z-[110] bg-white border border-green-100 text-green-800 px-6 py-4 rounded-xl shadow-xl shadow-green-900/10 flex items-start gap-3 transition-all duration-500 opacity-0 -translate-y-10 pointer-events-none max-w-sm w-full" id="toast">
<div className="bg-green-100 p-1.5 rounded-full mt-0.5 shrink-0">
<svg className="lucide lucide-check w-4 h-4 text-green-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="font-bold text-sm text-green-900">签到成功!</div>
<div className="text-xs text-green-700/80 mt-1 leading-relaxed" id="toastMessage">
                获得 200 灵感值 + 额外 100 灵感值连续签到奖励
            </div>
</div>
</div>


    </>
  );
}
