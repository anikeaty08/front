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

        // State Management
        const state = {
            currentTab: 'home',
            items: [],
            scanStep: 1
        };

        // Navigation Logic
        function switchTab(tabName) {
            if (tabName === 'profile') { alert("Tính năng đang phát triển"); return; }

            // Update UI Icons
            ['home', 'rooms', 'items'].forEach(t => {
                const el = document.getElementById(`nav-${t}`);
                if (t === tabName) {
                    el.classList.remove('text-zinc-400');
                    el.classList.add('text-zinc-900');
                } else {
                    el.classList.add('text-zinc-400');
                    el.classList.remove('text-zinc-900');
                }
            });

            // Switch Views
            ['view-home', 'view-rooms', 'view-items'].forEach(v => {
                const el = document.getElementById(v);
                if (v === `view-${tabName}`) {
                    el.classList.remove('hidden');
                    // Add small animation
                    el.classList.add('animate-fade-in-up');
                    setTimeout(() => el.classList.remove('animate-fade-in-up'), 500);
                } else {
                    el.classList.add('hidden');
                }
            });

            // Update Header Title
            const titles = { 'home': 'Trang chủ', 'rooms': 'Phòng của tôi', 'items': 'Kho đồ đạc' };
            document.getElementById('header-title').innerText = titles[tabName];
            
            state.currentTab = tabName;
        }

        // Scan Flow Logic
        const scanContainer = document.getElementById('view-scan-flow');
        const bottomNav = document.getElementById('bottom-nav');
        
        function startScanFlow() {
            scanContainer.classList.remove('hidden');
            bottomNav.classList.add('hidden');
            state.scanStep = 1;
            resetScanUI();
        }

        function exitScanFlow() {
            scanContainer.classList.add('hidden');
            bottomNav.classList.remove('hidden');
        }

        function resetScanUI() {
            document.getElementById('scan-step-1').classList.remove('hidden');
            document.getElementById('scan-step-2').classList.add('hidden');
            document.getElementById('scan-step-3').classList.add('hidden');
            updateStepDots(1);
        }

        function updateStepDots(step) {
            [1, 2, 3].forEach(i => {
                const dot = document.getElementById(`step-dot-${i}`);
                if (i <= step) {
                    dot.classList.remove('bg-zinc-200');
                    dot.classList.add('bg-zinc-900');
                } else {
                    dot.classList.add('bg-zinc-200');
                    dot.classList.remove('bg-zinc-900');
                }
            });
            const titles = ['Bước 1: Chụp ảnh', 'Bước 2: Phân tích', 'Bước 3: Giải pháp'];
            document.getElementById('scan-step-title').innerText = titles[step-1];
        }

        function goToStep2() {
            document.getElementById('scan-step-1').classList.add('hidden');
            document.getElementById('scan-step-2').classList.remove('hidden');
            updateStepDots(2);

            // Simulate AI Loading
            setTimeout(() => {
                document.getElementById('ai-loading').classList.add('hidden');
                document.getElementById('ai-result-content').classList.remove('hidden');
            }, 2500);
        }

        function goToStep3() {
            document.getElementById('scan-step-2').classList.add('hidden');
            document.getElementById('scan-step-3').classList.remove('hidden');
            updateStepDots(3);
            lucide.createIcons(); // Refresh icons for new view
        }

        // Proposal View Logic (Before/After)
        const imgMessy = "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80&w=1000"; // Cables messy
        const imgClean = "https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=1000"; // Clean desk setup

        function toggleImage(type) {
            const img = document.getElementById('img-proposal');
            const btnBefore = document.getElementById('btn-before');
            const btnAfter = document.getElementById('btn-after');
            const tags = document.getElementById('proposal-tags');

            if (type === 'before') {
                img.src = imgMessy;
                tags.classList.add('hidden');
                
                btnBefore.classList.add('bg-white', 'text-zinc-900', 'shadow-sm', 'border', 'border-zinc-200');
                btnBefore.classList.remove('text-zinc-500');
                
                btnAfter.classList.remove('bg-white', 'text-zinc-900', 'shadow-sm', 'border', 'border-zinc-200');
                btnAfter.classList.add('text-zinc-500');
            } else {
                img.src = imgClean;
                tags.classList.remove('hidden');

                btnAfter.classList.add('bg-white', 'text-zinc-900', 'shadow-sm', 'border', 'border-zinc-200');
                btnAfter.classList.remove('text-zinc-500');
                
                btnBefore.classList.remove('bg-white', 'text-zinc-900', 'shadow-sm', 'border', 'border-zinc-200');
                btnBefore.classList.add('text-zinc-500');
            }
        }

        function finishScan() {
            exitScanFlow();
            
            // Add new item to history list (Simulated)
            const historyList = document.getElementById('home-history-list');
            const newCard = document.createElement('div');
            newCard.className = "group relative rounded-2xl overflow-hidden border border-zinc-100 shadow-sm animate-fade-in-up";
            newCard.innerHTML = `
                <div class="aspect-[2/1] relative">
                    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" class="object-cover w-full h-full">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-3 left-3 text-white">
                        <div class="text-sm font-medium">Ngăn kéo cáp sạc</div>
                        <div class="text-[10px] opacity-80 flex items-center gap-1">
                            <i data-lucide="check-circle-2" class="w-3 h-3 text-emerald-400"></i> Mới xong • 5 món
                        </div>
                    </div>
                </div>
            `;
            historyList.prepend(newCard);
            lucide.createIcons();
            
            // Scroll to top
            document.getElementById('main-container').scrollTop = 0;
            switchTab('home');
        }

        // Initialize animation styles
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeInUp {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fadeInUp 0.5s ease-out forwards;
            }
        `;
        document.head.appendChild(styleSheet);

    
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
      

<div className="w-full max-w-md bg-white h-full shadow-2xl relative flex flex-col sm:border-x sm:border-zinc-200">

<header className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md sticky top-0 z-30 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="bg-zinc-900 text-white p-1 rounded-md">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
</div>
<span className="font-semibold tracking-tight text-sm" id="header-title">Trang chủ</span>
</div>
<div className="flex items-center gap-3">
<button className="relative">
<i className="w-5 h-5 text-zinc-400 hover:text-zinc-900 transition-colors" data-lucide="bell"></i>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="w-6 h-6 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar relative bg-white pb-24" id="main-container">

<div className="page-transition px-6 pt-4 space-y-8" id="view-home">

<div>
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">Chào buổi sáng, An!</h1>
<p className="text-xs text-zinc-500 mt-1">Hôm nay bạn muốn dọn dẹp góc nào?</p>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl">
<div className="text-2xl font-semibold tracking-tight text-zinc-900">128</div>
<div className="text-xs text-zinc-500 font-medium mt-1">Đồ vật đã quản lý</div>
</div>
<div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
<div className="text-2xl font-semibold tracking-tight text-emerald-700">85%</div>
<div className="text-xs text-emerald-600 font-medium mt-1">Chỉ số gọn gàng</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-semibold text-zinc-900">Các góc đã xử lý</h2>
<button className="text-xs text-zinc-500 hover:text-zinc-900">Xem tất cả</button>
</div>
<div className="space-y-4" id="home-history-list">

<div className="group relative rounded-2xl overflow-hidden border border-zinc-100 shadow-sm">
<div className="aspect-[2/1] relative">
<img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 text-white">
<div className="text-sm font-medium">Bàn làm việc</div>
<div className="text-[10px] opacity-80 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Phòng làm việc • 14 món đồ
                                    </div>
</div>
<div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    ĐÃ XONG
                                </div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-zinc-100 shadow-sm opacity-60">
<div className="aspect-[2/1] relative grayscale">
<img className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 text-white">
<div className="text-sm font-medium">Ngăn kéo cáp sạc</div>
<div className="text-[10px] opacity-80 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Phòng khách • Chờ xử lý
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden page-transition px-6 pt-4 space-y-6" id="view-rooms">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-zinc-900">Phòng của tôi</h2>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200">
<i className="w-4 h-4 text-zinc-600" data-lucide="plus"></i>
</button>
</div>
<div className="grid grid-cols-2 gap-4">

<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors cursor-pointer">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3 text-zinc-700">
<i className="w-5 h-5" data-lucide="sofa"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900">Phòng khách</h3>
<p className="text-[10px] text-zinc-500 mt-1">3 góc • 42 đồ vật</p>
</div>

<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors cursor-pointer">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3 text-zinc-700">
<i className="w-5 h-5" data-lucide="bed-double"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900">Phòng ngủ</h3>
<p className="text-[10px] text-zinc-500 mt-1">5 góc • 68 đồ vật</p>
</div>

<div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 hover:border-zinc-300 transition-colors cursor-pointer">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-3 text-zinc-700">
<i className="w-5 h-5" data-lucide="monitor"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900">Làm việc</h3>
<p className="text-[10px] text-zinc-500 mt-1">1 góc • 18 đồ vật</p>
</div>
</div>
</div>

<div className="hidden page-transition px-6 pt-4 space-y-6" id="view-items">

<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" data-lucide="search"></i>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-zinc-900" placeholder="Tìm kiếm đồ đạc..." type="text"/>
</div>

<div>
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Phân loại KonMari</h3>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-medium px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200">👕 Quần áo</span>
<span className="text-[10px] font-medium px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200">📚 Sách vở</span>
<span className="text-[10px] font-medium px-3 py-1.5 bg-zinc-900 text-white rounded-full border border-zinc-900">🔌 Komono (Tạp kê)</span>
<span className="text-[10px] font-medium px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200">💌 Kỷ niệm</span>
</div>
</div>

<div className="space-y-3">
<div className="text-xs text-zinc-400 pl-1">Tìm thấy 3 kết quả cho "Komono"</div>
<div className="flex items-center gap-3 p-3 bg-white border border-zinc-100 rounded-xl shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-zinc-400" data-lucide="cable"></i>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-zinc-900">Cáp Lightning</h4>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[10px] text-zinc-500 bg-zinc-50 px-1.5 rounded">Ngăn kéo trái</span>
<span className="text-[10px] text-zinc-400">P. Làm việc</span>
</div>
</div>
<button className="p-2 text-zinc-300 hover:text-zinc-900"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
<div className="flex items-center gap-3 p-3 bg-white border border-zinc-100 rounded-xl shadow-sm">
<div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-zinc-400" data-lucide="pen-tool"></i>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-zinc-900">Bộ bút Marker</h4>
<div className="flex items-center gap-2 mt-0.5">
<span className="text-[10px] text-zinc-500 bg-zinc-50 px-1.5 rounded">Hộp nhựa</span>
<span className="text-[10px] text-zinc-400">P. Làm việc</span>
</div>
</div>
<button className="p-2 text-zinc-300 hover:text-zinc-900"><i className="w-4 h-4" data-lucide="chevron-right"></i></button>
</div>
</div>
</div>

<div className="fixed inset-0 bg-white z-50 hidden flex flex-col" id="view-scan-flow">

<div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white">
<button className="p-2 -ml-2 hover:bg-zinc-50 rounded-full" onclick="exitScanFlow()">
<i className="w-5 h-5 text-zinc-500" data-lucide="x"></i>
</button>
<div className="flex flex-col items-center">
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-900" id="scan-step-title">Bước 1: Chụp ảnh</span>
<div className="flex gap-1 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-900" id="step-dot-1"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-200" id="step-dot-2"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-200" id="step-dot-3"></div>
</div>
</div>
<div className="w-9"></div> 
</div>

<div className="flex-1 overflow-y-auto no-scrollbar relative">

<div className="p-6 h-full flex flex-col" id="scan-step-1">
<div className="text-center mb-6">
<h2 className="text-xl font-semibold text-zinc-900">Góc nào đang bừa bộn?</h2>
<p className="text-sm text-zinc-500 mt-2">Chụp toàn cảnh khu vực cần xử lý để AI nhận diện tốt nhất.</p>
</div>
<div className="flex-1 max-h-[400px] border-2 border-dashed border-zinc-200 rounded-2xl bg-zinc-50 flex flex-col items-center justify-center cursor-pointer hover:bg-zinc-100 hover:border-zinc-400 transition-all relative overflow-hidden group" onclick="goToStep2()">
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-zinc-900" data-lucide="camera"></i>
</div>
<span className="text-sm font-medium text-zinc-900 block">Chạm để chụp</span>
</div>
</div>
<img className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{pointerEvents: 'none'}}/>
</div>
<div className="mt-6">
<label className="text-xs font-medium text-zinc-700 mb-2 block">Gán vào phòng (Tùy chọn)</label>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
<button className="px-3 py-1.5 rounded-lg bg-zinc-900 text-white text-xs whitespace-nowrap">Phòng làm việc</button>
<button className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-600 text-xs whitespace-nowrap border border-zinc-200">Phòng ngủ</button>
<button className="px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-600 text-xs whitespace-nowrap border border-zinc-200">Bếp</button>
</div>
</div>
</div>

<div className="hidden p-6" id="scan-step-2">

<div className="flex flex-col items-center justify-center py-10" id="ai-loading">
<div className="w-16 h-16 mb-4 relative">
<i className="w-16 h-16 text-zinc-300" data-lucide="scan"></i>
<div className="absolute inset-0 flex items-center justify-center animate-pulse">
<i className="w-8 h-8 text-zinc-900" data-lucide="sparkles"></i>
</div>
</div>
<h3 className="font-medium text-zinc-900">Đang phân tích đồ đạc...</h3>
<div className="w-48 h-1 bg-zinc-100 rounded-full mt-4 overflow-hidden">
<div className="h-full bg-zinc-900 w-1/2 animate-[loading_1s_infinite]"></div>
</div>
</div>

<div className="hidden animate-fade-in-up" id="ai-result-content">
<div className="relative rounded-xl overflow-hidden mb-6 aspect-video group">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white flex items-center gap-1">
<i className="w-3 h-3 text-orange-400" data-lucide="alert-circle"></i> Quá tải đồ đạc
                                </div>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-zinc-900">Đồ đạc phát hiện (5)</h3>
<span className="text-[10px] bg-zinc-100 px-2 py-1 rounded-full">Chính xác 94%</span>
</div>
<div className="space-y-3 mb-20">

<div className="flex items-start gap-3 pb-3 border-b border-zinc-50">
<div className="mt-1"><input checked="" className="custom-checkbox w-4 h-4 rounded border-zinc-300" type="checkbox"/></div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-sm font-medium text-zinc-900">Cáp sạc &amp; Dây điện</span>
<span className="text-xs text-zinc-400">x4</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Komono • Rối, cần buộc gọn</p>
</div>
</div>

<div className="flex items-start gap-3 pb-3 border-b border-zinc-50">
<div className="mt-1"><input checked="" className="custom-checkbox w-4 h-4 rounded border-zinc-300" type="checkbox"/></div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-sm font-medium text-zinc-900">Bút viết các loại</span>
<span className="text-xs text-zinc-400">x6</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Văn phòng phẩm • Phân loại theo màu</p>
</div>
</div>

<div className="flex items-start gap-3 pb-3 border-b border-zinc-50">
<div className="mt-1"><input checked="" className="custom-checkbox w-4 h-4 rounded border-zinc-300" type="checkbox"/></div>
<div className="flex-1">
<div className="flex justify-between">
<span className="text-sm font-medium text-zinc-900">Ổ cứng di động</span>
<span className="text-xs text-zinc-400">x1</span>
</div>
<p className="text-xs text-zinc-500 mt-0.5">Điện tử • Đặt vào hộp chống sốc</p>
</div>
</div>
</div>
<div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-zinc-100">
<button className="w-full bg-zinc-900 text-white font-medium py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm" onclick="goToStep3()">
                                    Tạo giải pháp sắp xếp <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="hidden p-6 pb-24" id="scan-step-3">
<div className="text-center mb-6">
<h2 className="text-lg font-semibold text-zinc-900">Giải pháp của bạn</h2>
<p className="text-xs text-zinc-500">Sử dụng phương pháp KonMari cho đồ điện tử</p>
</div>

<div className="bg-zinc-100 p-1 rounded-lg flex mb-4">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md transition-all text-zinc-500" id="btn-before" onclick="toggleImage('before')">Trước (Bừa bộn)</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-md transition-all bg-white text-zinc-900 shadow-sm border border-zinc-200" id="btn-after" onclick="toggleImage('after')">Sau (Mục tiêu)</button>
</div>

<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md border border-zinc-200 mb-6 transition-all duration-500">
<img className="w-full h-full object-cover transition-opacity duration-500" id="img-proposal" src="https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute inset-0 pointer-events-none" id="proposal-tags">
<div className="absolute top-[30%] left-[20%] bg-white/90 backdrop-blur text-[10px] px-2 py-1 rounded shadow text-zinc-900 font-medium animate-bounce flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Hộp cáp
                                </div>
<div className="absolute bottom-[20%] right-[30%] bg-white/90 backdrop-blur text-[10px] px-2 py-1 rounded shadow text-zinc-900 font-medium flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Khay bút
                                </div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-semibold text-zinc-900 border-b border-zinc-100 pb-2">Các bước thực hiện</h3>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs shrink-0 font-medium">1</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900">Loại bỏ dây hỏng</h4>
<p className="text-[10px] text-zinc-500 mt-0.5">Kiểm tra tất cả cáp sạc, bỏ đi loại không còn dùng được.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs shrink-0 font-medium">2</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900">Nhóm dây theo loại</h4>
<p className="text-[10px] text-zinc-500 mt-0.5">Dùng dây rút velcro buộc gọn cáp sạc điện thoại riêng, laptop riêng.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs shrink-0 font-medium">3</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900">Đứng thẳng đứng</h4>
<p className="text-[10px] text-zinc-500 mt-0.5">Đặt dây đã cuộn vào hộp chia ngăn theo chiều thẳng đứng.</p>
</div>
</div>
</div>
<div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-zinc-100 flex gap-3">
<button className="flex-1 bg-zinc-100 text-zinc-900 font-medium py-3 rounded-xl text-sm" onclick="exitScanFlow()">Để sau</button>
<button className="flex-[2] bg-zinc-900 text-white font-medium py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm" onclick="finishScan()">
<i className="w-4 h-4" data-lucide="check"></i> Hoàn thành
                            </button>
</div>
</div>
</div>
</div>
</main>

<nav className="absolute bottom-0 w-full bg-white border-t border-zinc-200 px-6 py-3 flex justify-between items-center z-40" id="bottom-nav">
<button className="flex flex-col items-center gap-1 text-zinc-900 transition-colors" id="nav-home" onclick="switchTab('home')">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[10px] font-medium">Trang chủ</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-900 transition-colors" id="nav-rooms" onclick="switchTab('rooms')">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
<span className="text-[10px] font-medium">Phòng</span>
</button>

<button className="-mt-8 bg-zinc-900 text-white rounded-full p-4 shadow-xl hover:scale-105 transition-transform border-4 border-white" onclick="startScanFlow()">
<i className="w-6 h-6" data-lucide="scan-line"></i>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-900 transition-colors" id="nav-items" onclick="switchTab('items')">
<i className="w-5 h-5" data-lucide="package"></i>
<span className="text-[10px] font-medium">Đồ đạc</span>
</button>
<button className="flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-900 transition-colors" id="nav-profile" onclick="switchTab('profile')">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-[10px] font-medium">Tài khoản</span>
</button>
</nav>
</div>


    </>
  );
}
