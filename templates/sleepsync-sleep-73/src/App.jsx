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



        lucide.createIcons();

        function switchView(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.add('hidden');
            });

            // Show target view
            const targetView = document.getElementById('view-' + viewId);
            if (targetView) {
                targetView.classList.remove('hidden');
            }

            // Update Nav State
            const navItems = document.querySelectorAll('.nav-item');
            navItems.forEach(item => {
                item.classList.remove('bg-indigo-50', 'text-indigo-700');
                item.classList.add('text-slate-600');
                
                const icon = item.querySelector('i');
                if(icon) {
                    // Remove specific colors if strictly following active state pattern
                    // But here we keep group-hover colors for inactive items
                }
            });

            // Set Active Style
            const activeNav = document.getElementById('nav-' + viewId);
            if (activeNav) {
                activeNav.classList.remove('text-slate-600');
                activeNav.classList.add('bg-indigo-50', 'text-indigo-700');
            }

            // Update Header Title
            const titles = {
                'dashboard': 'Tổng quan',
                'smartroom': 'Smart Bedroom',
                'dream': 'Nhật ký giấc mơ AI',
                'audio': 'Mixer âm thanh',
                'groups': 'Cộng đồng'
            };
            document.getElementById('page-title').innerText = titles[viewId] || 'SleepSync';
        }

        // Initialize default view
        switchView('dashboard');
    
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
      

<div className="flex h-screen w-full">

<aside className="hidden w-64 flex-col border-r border-slate-200 bg-white/80 backdrop-blur-xl md:flex z-20">
<div className="flex h-16 items-center px-6 border-b border-slate-50">
<div className="flex items-center gap-2.5 text-indigo-600">
<div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
<i className="h-5 w-5 fill-current" data-lucide="moon"></i>
<span className="absolute -right-1 -top-1 flex h-3 w-3">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
<span className="relative inline-flex h-3 w-3 rounded-full bg-pink-500 border-2 border-white"></span>
</span>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">SleepSync</span>
</div>
</div>
<nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
<div className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Main</div>
<button className="nav-item w-full group flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-medium text-indigo-700" id="nav-dashboard" onclick="switchView('dashboard')">
<i className="h-4.5 w-4.5" data-lucide="layout-grid"></i>
                    Dashboard
                </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" id="nav-smartroom" onclick="switchView('smartroom')">
<i className="h-4.5 w-4.5 text-slate-400 group-hover:text-amber-500 transition-colors" data-lucide="zap"></i>
                    Smart Room
                </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" id="nav-dream" onclick="switchView('dream')">
<i className="h-4.5 w-4.5 text-slate-400 group-hover:text-purple-500 transition-colors" data-lucide="book-open"></i>
                    Nhật ký mơ AI
                </button>
<div className="px-3 mt-6 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Social &amp; Fun</div>
<button className="nav-item w-full group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" id="nav-groups" onclick="switchView('groups')">
<i className="h-4.5 w-4.5 text-slate-400 group-hover:text-blue-500 transition-colors" data-lucide="users"></i>
                    Nhóm ngủ chung
                </button>
<button className="nav-item w-full group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-all" id="nav-audio" onclick="switchView('audio')">
<i className="h-4.5 w-4.5 text-slate-400 group-hover:text-pink-500 transition-colors" data-lucide="sliders"></i>
                    Mixer âm thanh
                </button>
</nav>

<div className="border-t border-slate-100 p-4">
<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-2.5 hover:border-indigo-200 hover:shadow-md transition-all cursor-pointer group">
<div className="relative">
<img alt="User" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" src="https://ui-avatars.com/api/?name=Minh+Anh&amp;background=0D8ABC&amp;color=fff"/>
<span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500"></span>
</div>
<div className="flex-1 overflow-hidden">
<p className="truncate text-sm font-semibold text-slate-900">Minh Anh</p>
<p className="truncate text-[10px] text-slate-500">Lv. 5 • 1,204 XP</p>
</div>
<i className="h-4 w-4 text-slate-400 group-hover:text-indigo-500 transition-colors" data-lucide="chevron-right"></i>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#F8FAFC] relative">

<header className="h-16 flex items-center justify-between px-8 border-b border-slate-200 bg-white/60 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-4">
<h1 className="text-base font-semibold text-slate-900" id="page-title">Tổng quan</h1>
<span className="h-4 w-px bg-slate-200"></span>
<div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
<i className="h-3 w-3" data-lucide="cloud"></i>
                        24°C, Mưa nhẹ
                    </div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2">
<span className="text-xs font-medium text-slate-500">Thiết bị đang bật:</span>
<div className="flex -space-x-1">
<div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center border border-white text-amber-600" title="Đèn ngủ"><i className="h-3 w-3" data-lucide="lightbulb"></i></div>
<div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center border border-white text-blue-600" title="Máy lạnh"><i className="h-3 w-3" data-lucide="snowflake"></i></div>
</div>
</div>
<button className="relative rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth" id="content-area">

<div className="view-section space-y-6 max-w-6xl mx-auto" id="view-dashboard">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl shadow-slate-900/10 group">

<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-600/30 blur-[80px] group-hover:bg-indigo-600/40 transition-all duration-700"></div>
<div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-pink-500/20 blur-[60px]"></div>
<div className="relative z-10 flex flex-col justify-between h-full min-h-[180px]">
<div className="flex justify-between items-start">
<div>
<div className="mb-2 flex items-center gap-2 text-indigo-200">
<span className="flex h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
<span className="text-xs font-bold uppercase tracking-wider">Cơ thể sẵn sàng</span>
</div>
<h2 className="text-4xl font-bold tracking-tight text-white">22:30</h2>
<p className="text-slate-400 text-sm mt-1">Mục tiêu đi ngủ tối nay</p>
</div>

<div className="text-right">
<p className="text-xs font-medium text-slate-400 mb-1">Nợ giấc ngủ</p>
<div className="flex items-end justify-end gap-1">
<span className="text-2xl font-bold text-pink-400">-1.5h</span>
<i className="h-5 w-5 text-pink-400 mb-1" data-lucide="trending-down"></i>
</div>
<p className="text-[10px] text-slate-500">Cần ngủ bù cuối tuần</p>
</div>
</div>
<div className="flex items-center gap-4 mt-6">
<button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 py-3 text-sm font-bold shadow-lg shadow-white/10 hover:bg-slate-50 hover:scale-[1.02] transition-all">
<i className="h-4 w-4" data-lucide="moon"></i>
                                        Kích hoạt Sleep Mode
                                    </button>
<button className="flex items-center justify-center h-11 w-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-white">
<i className="h-5 w-5" data-lucide="settings-2"></i>
</button>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-orange-200 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-500"></div>
<div className="mb-4 relative">
<svg className="h-24 w-24 transform -rotate-90">
<circle className="text-slate-100" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-orange-500" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="60" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold text-slate-900">20</span>
<span className="text-[10px] font-medium text-slate-400 uppercase">Phút</span>
</div>
</div>
<h3 className="font-bold text-slate-900">Power Nap</h3>
<p className="text-xs text-slate-500 mt-1 mb-4 px-4">Giấc ngủ ngắn giúp phục hồi năng lượng tức thì.</p>
<button className="w-full rounded-lg bg-orange-50 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-100 transition-colors">
                                Bắt đầu ngay
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group cursor-pointer rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50/50 to-white p-6 hover:shadow-md hover:border-purple-200 transition-all" onclick="switchView('dream')">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="p-2 bg-purple-100 rounded-lg text-purple-600">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
<h3 className="font-semibold text-slate-900">Giấc mơ đêm qua</h3>
</div>
<span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">Lucid Dream</span>
</div>
<p className="text-sm text-slate-600 italic mb-3">"Tôi thấy mình đang bay trên một thành phố neon, nhưng mọi toà nhà đều làm bằng thạch..."</p>
<div className="flex items-center gap-2 text-xs text-slate-400">
<i className="h-3 w-3" data-lucide="bot"></i>
<span>AI Analysis: Dấu hiệu của sự sáng tạo tự do.</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-slate-900">Môi trường ngủ</h3>
<button className="text-xs text-indigo-600 hover:underline" onclick="switchView('smartroom')">Điều chỉnh</button>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="text-center p-3 rounded-xl bg-slate-50">
<i className="h-5 w-5 mx-auto text-orange-500 mb-2" data-lucide="thermometer"></i>
<span className="block text-lg font-bold text-slate-900">24°C</span>
<span className="text-xs text-slate-500">Nhiệt độ</span>
</div>
<div className="text-center p-3 rounded-xl bg-slate-50">
<i className="h-5 w-5 mx-auto text-blue-500 mb-2" data-lucide="droplets"></i>
<span className="block text-lg font-bold text-slate-900">45%</span>
<span className="text-xs text-slate-500">Độ ẩm</span>
</div>
<div className="text-center p-3 rounded-xl bg-slate-50">
<i className="h-5 w-5 mx-auto text-green-500 mb-2" data-lucide="volume-2"></i>
<span className="block text-lg font-bold text-slate-900">30dB</span>
<span className="text-xs text-slate-500">Tiếng ồn</span>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden max-w-5xl mx-auto" id="view-smartroom">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative h-96 rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"/>

<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<div className="glass-dark px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
<div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                                        Phòng ngủ Master
                                    </div>
<button className="h-10 w-10 glass-dark rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
<i className="h-5 w-5" data-lucide="power"></i>
</button>
</div>

<div className="glass-dark p-2 rounded-2xl flex gap-2 overflow-x-auto no-scrollbar">
<button className="flex-1 whitespace-nowrap px-4 py-2.5 rounded-xl bg-white text-slate-900 text-sm font-bold shadow-md">
                                        Thư giãn
                                    </button>
<button className="flex-1 whitespace-nowrap px-4 py-2.5 rounded-xl text-white hover:bg-white/10 text-sm font-medium transition-colors">
                                        Đọc sách
                                    </button>
<button className="flex-1 whitespace-nowrap px-4 py-2.5 rounded-xl text-white hover:bg-white/10 text-sm font-medium transition-colors">
                                        Ngủ sâu
                                    </button>
<button className="flex-1 whitespace-nowrap px-4 py-2.5 rounded-xl text-white hover:bg-white/10 text-sm font-medium transition-colors">
                                        Lãng mạn
                                    </button>
</div>
</div>
</div>

<div className="space-y-4">

<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-amber-100 rounded-lg text-amber-600"><i className="h-4 w-4" data-lucide="sun"></i></div>
<span className="font-semibold text-sm">Ánh sáng</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-amber-500"></div>
</label>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Độ sáng</span>
<span>65%</span>
</div>
<input className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer" max="100" min="0" type="range" value="65"/>
</div>
<div>
<div className="flex justify-between text-xs text-slate-500 mb-1">
<span>Màu sắc</span>
<span>Ấm</span>
</div>
<div className="w-full h-3 rounded-full bg-gradient-to-r from-blue-200 via-white to-orange-300 relative cursor-pointer">
<div className="absolute top-1/2 -translate-y-1/2 right-4 h-5 w-5 bg-white border border-slate-200 shadow-sm rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-blue-100 rounded-lg text-blue-600"><i className="h-4 w-4" data-lucide="snowflake"></i></div>
<span className="font-semibold text-sm">Điều hoà</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-500"></div>
</label>
</div>
<div className="flex items-center justify-between">
<button className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center"><i className="h-4 w-4" data-lucide="minus"></i></button>
<span className="text-3xl font-bold text-slate-900">24°</span>
<button className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center"><i className="h-4 w-4" data-lucide="plus"></i></button>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden max-w-4xl mx-auto space-y-6" id="view-dream">

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-2 mb-4 text-purple-600">
<i className="h-5 w-5" data-lucide="stars"></i>
<h2 className="font-semibold text-slate-900">Ghi lại giấc mơ</h2>
</div>
<textarea className="w-full h-32 rounded-xl bg-slate-50 border border-slate-200 p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all placeholder:text-slate-400" placeholder="Đêm qua bạn mơ thấy gì? Hãy kể chi tiết..."></textarea>
<div className="mt-4 flex justify-between items-center">
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50">Ác mộng</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50">Lucid</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50">Lặp lại</button>
</div>
<button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-600 text-white text-sm font-medium shadow-lg shadow-purple-600/20 hover:bg-purple-700 transition-all">
<i className="h-4 w-4" data-lucide="wand-2"></i>
                                Phân tích &amp; Vẽ
                            </button>
</div>
</div>

<div className="relative pl-6 space-y-8 border-l border-slate-200 ml-4">

<div className="relative">
<div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-purple-500 ring-4 ring-white"></div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Hôm qua</span>
<div className="rounded-xl border border-slate-200 bg-white overflow-hidden flex flex-col md:flex-row">
<div className="w-full md:w-48 h-32 bg-slate-100 flex-shrink-0 relative overflow-hidden group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-white h-6 w-6" data-lucide="image"></i>
</div>
</div>
<div className="p-4 flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="font-bold text-slate-900">Bay lượn trên thành phố Neon</h3>
<div className="flex items-center gap-1 text-xs text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded">
<i className="h-3 w-3" data-lucide="smile"></i> Vui vẻ
                                        </div>
</div>
<p className="text-xs text-slate-500 line-clamp-2 mb-3">Tôi cảm thấy nhẹ bẫng, gió thổi mạnh vào mặt. Thành phố bên dưới rực rỡ sắc màu nhưng không có tiếng động...</p>
<div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
<p className="text-[10px] text-slate-600"><span className="font-bold text-purple-600">AI Insight:</span> Giấc mơ này phản ánh khát vọng tự do và mong muốn thoát khỏi áp lực công việc hiện tại.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -left-[31px] top-0 h-4 w-4 rounded-full bg-slate-300 ring-4 ring-white"></div>
<span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">12 Th04</span>
<div className="rounded-xl border border-slate-200 bg-white p-4">
<h3 className="font-bold text-slate-900 mb-1">Bị rượt đuổi trong thư viện</h3>
<p className="text-xs text-slate-500">Mọi cuốn sách đều trắng trơn, tôi chạy mãi mà không tìm được lối ra...</p>
</div>
</div>
</div>
</div>

<div className="view-section hidden max-w-5xl mx-auto" id="view-audio">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 space-y-4">
<div className="flex items-center justify-between">
<h2 className="font-bold text-slate-900">Custom Mix của bạn</h2>
<button className="text-xs font-medium text-indigo-600 flex items-center gap-1 hover:underline">
<i className="h-3 w-3" data-lucide="save"></i> Lưu Preset
                                </button>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-6">

<div className="flex items-center gap-4">
<button className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
<i className="h-5 w-5" data-lucide="cloud-rain"></i>
</button>
<div className="flex-1">
<div className="flex justify-between text-xs font-medium text-slate-700 mb-2">
<span>Mưa rào</span>
<span>80%</span>
</div>
<input className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" type="range" value="80"/>
</div>
<button className="text-slate-400 hover:text-red-500"><i className="h-4 w-4" data-lucide="x"></i></button>
</div>

<div className="flex items-center gap-4">
<button className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
<i className="h-5 w-5" data-lucide="wind"></i>
</button>
<div className="flex-1">
<div className="flex justify-between text-xs font-medium text-slate-700 mb-2">
<span>Gió thổi</span>
<span>40%</span>
</div>
<input className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" type="range" value="40"/>
</div>
<button className="text-slate-400 hover:text-red-500"><i className="h-4 w-4" data-lucide="x"></i></button>
</div>

<div className="flex items-center gap-4">
<button className="h-10 w-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
<i className="h-5 w-5" data-lucide="coffee"></i>
</button>
<div className="flex-1">
<div className="flex justify-between text-xs font-medium text-slate-700 mb-2">
<span>Quán Cafe</span>
<span>20%</span>
</div>
<input className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer" type="range" value="20"/>
</div>
<button className="text-slate-400 hover:text-red-500"><i className="h-4 w-4" data-lucide="x"></i></button>
</div>
<div className="pt-4 border-t border-slate-100 flex justify-center">
<button className="rounded-full bg-slate-900 px-6 py-2.5 text-white flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
<i className="h-4 w-4 fill-current" data-lucide="play"></i>
                                        Phát tất cả
                                    </button>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="font-bold text-slate-900">Thêm âm thanh</h2>
<div className="grid grid-cols-2 gap-3">
<div className="cursor-pointer rounded-xl border border-slate-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition-all text-center">
<i className="h-6 w-6 mx-auto text-orange-500 mb-2" data-lucide="flame"></i>
<p className="text-xs font-medium text-slate-700">Lửa trại</p>
</div>
<div className="cursor-pointer rounded-xl border border-slate-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition-all text-center">
<i className="h-6 w-6 mx-auto text-cyan-500 mb-2" data-lucide="waves"></i>
<p className="text-xs font-medium text-slate-700">Sóng biển</p>
</div>
<div className="cursor-pointer rounded-xl border border-slate-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition-all text-center">
<i className="h-6 w-6 mx-auto text-violet-500 mb-2" data-lucide="music"></i>
<p className="text-xs font-medium text-slate-700">Piano</p>
</div>
<div className="cursor-pointer rounded-xl border border-slate-200 bg-white p-3 hover:border-indigo-500 hover:shadow-sm transition-all text-center">
<i className="h-6 w-6 mx-auto text-green-500 mb-2" data-lucide="bird"></i>
<p className="text-xs font-medium text-slate-700">Rừng cây</p>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden max-w-5xl mx-auto" id="view-groups">
<div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
<div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-4">
<i className="h-8 w-8" data-lucide="users"></i>
</div>
<h3 className="text-lg font-bold text-slate-900">Cộng đồng đang ngủ...</h3>
<p className="text-sm text-slate-500 max-w-md mx-auto mt-2">Tính năng này đang được giữ nguyên từ phiên bản trước. Kết nối với bạn bè để cùng nhau dậy sớm!</p>
<button className="mt-6 text-sm font-medium text-indigo-600 hover:underline" onclick="switchView('dashboard')">Quay lại Dashboard</button>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
