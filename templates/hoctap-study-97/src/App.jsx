import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#09090b', // zinc-950
surface: '#18181b',    // zinc-900
border: '#27272a',     // zinc-800
primary: '#fafafa',    // zinc-50
secondary: '#a1a1aa',  // zinc-400
accent: '#6366f1',     // indigo-500
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 border-r border-border flex-col justify-between hidden md:flex bg-background/50 backdrop-blur-xl">
<div className="">

<div className="h-16 flex items-center px-6 border-b border-border/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-background font-semibold text-xs tracking-tighter">HT</div>
<span className="text-primary font-medium tracking-tight text-sm">HocTap</span>
</div>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-surface border border-border text-primary text-sm font-medium transition-all group" href="#">
<svg aria-hidden="true" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                    Tổng quan
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 text-secondary hover:text-primary text-sm font-normal transition-all group" href="#">
<svg aria-hidden="true" data-icon="lucide:upload-cloud" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
                    Tải tài liệu
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-zinc-900/50 text-secondary hover:text-primary text-sm font-normal transition-all group" href="#">
<svg aria-hidden="true" data-icon="lucide:book-open" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Thư viện
                </a>
<a className="flex items-center gap-3 hover:bg-zinc-900/50 text-secondary hover:text-primary transition-all group text-sm font-normal rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Bảng ghi nhớ</a>
<a className="flex items-center gap-3 hover:bg-zinc-900/50 text-secondary hover:text-primary transition-all group text-sm font-normal rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Bảng phân tích</a>
</nav>

<div className="px-4 mt-4">
<div className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider px-2">Học tập</div>
<button className="w-full flex items-center justify-between px-3 py-2 text-xs text-secondary border border-border rounded hover:border-zinc-600 transition-colors">
<span>Phiên học mới</span>
<svg aria-hidden="true" data-icon="lucide:plus" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="p-4 border-t border-border bg-background">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 flex items-center justify-center text-xs font-medium text-white ring-1 ring-zinc-700">
                    N
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-primary truncate">Nguyễn Văn A</p>
<p className="text-xs text-secondary truncate">Học sinh THPT</p>
</div>
</div>

<div className="w-full bg-surface rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-100 h-1.5 rounded-full" style={{width: '65%'}}></div>
</div>
<div className="flex justify-between mt-1.5">
<span className="text-[10px] text-zinc-500 font-medium">LV. 12</span>
<span className="text-[10px] text-zinc-500">2,450 / 3,000 XP</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden bg-background">

<header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/80 backdrop-blur-sm sticky top-0 z-10">

<div className="flex items-center gap-4">
<button className="md:hidden text-secondary">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="flex items-center text-sm text-secondary">
<svg aria-hidden="true" data-icon="lucide:home" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
<span className="mx-2 text-zinc-700">/</span>
<span className="text-primary font-medium">Dashboard</span>
</div>
</div>

<div className="flex items-center gap-4">

<div className="relative hidden sm:block group">
<svg aria-hidden="true" data-icon="lucide:search" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="bg-surface border border-border text-sm text-primary rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-zinc-700 w-64 placeholder-zinc-600 transition-all" placeholder="Tìm bài học, câu hỏi..." type="text"/>
</div>

<button className="relative p-2 text-secondary hover:text-primary transition-colors">
<svg aria-hidden="true" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
</button>

<div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-border rounded-full">
<svg aria-hidden="true" data-icon="lucide:flame" data-strokeWidth="2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-medium text-primary">12 Ngày</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="">
<h1 className="text-2xl font-semibold tracking-tight text-primary">Chào buổi sáng, Nam! 👋</h1>
<p className="text-sm text-secondary mt-1">Hôm nay bạn có <span className="text-zinc-200 font-medium">27 thẻ flashcard</span> cần ôn tập và 1 bài kiểm tra chưa hoàn thành.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-surface hover:bg-zinc-800 border border-border text-sm font-medium text-primary rounded-lg transition-all flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Tải tài liệu
                        </button>
<button className="px-4 py-2 bg-zinc-100 hover:bg-white text-background text-sm font-medium rounded-lg transition-all shadow-lg shadow-white/5 flex items-center gap-2">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:play" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Học ngay
                        </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="p-4 rounded-xl border border-border bg-surface/50 hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-background border border-border rounded-lg text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<span className="text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-2xl font-semibold text-primary tracking-tight">24</div>
<div className="text-xs text-secondary mt-1">Phiên học tuần này</div>
</div>

<div className="p-4 rounded-xl border border-border bg-surface/50 hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-background border border-border rounded-lg text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:target" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
</div>
<div className="text-2xl font-semibold text-primary tracking-tight">85.7<span className="text-lg text-zinc-500">%</span></div>
<div className="text-xs text-secondary mt-1">Độ chính xác trung bình</div>
</div>

<div className="p-4 rounded-xl border border-border bg-surface/50 hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-background border border-border rounded-lg text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
</div>
<div className="text-2xl font-semibold text-primary tracking-tight">42<span className="text-lg text-zinc-500">s</span></div>
<div className="text-xs text-secondary mt-1">Thời gian TB/câu</div>
</div>

<div className="p-4 rounded-xl border border-border bg-surface/50 hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="p-2 bg-background border border-border rounded-lg text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="text-2xl font-semibold text-primary tracking-tight">1,250</div>
<div className="text-xs text-secondary mt-1">XP kiếm được</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-8">

<div className="bg-surface/30 border border-border rounded-xl p-5">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-primary">Hiệu suất học tập</h3>
<div className="flex gap-2">
<button className="px-2.5 py-1 text-xs font-medium text-primary bg-zinc-800 rounded hover:bg-zinc-700 transition-colors">7 ngày</button>
<button className="px-2.5 py-1 text-xs font-medium text-secondary hover:text-primary transition-colors">30 ngày</button>
</div>
</div>

<div className="h-48 w-full relative">

<div className="absolute inset-0 flex flex-col justify-between text-[10px] text-zinc-600">
<div className="border-b border-border/50 w-full h-0"></div>
<div className="border-b border-border/50 w-full h-0"></div>
<div className="border-b border-border/50 w-full h-0"></div>
<div className="border-b border-border/50 w-full h-0"></div>
<div className="border-b border-border/50 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#fafafa" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#fafafa" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="" d="M0,140 C50,130 100,100 150,110 C200,120 250,60 300,50 C350,40 400,80 450,70 C500,60 550,20 600,30 L600,192 L0,192 Z" fill="url(#gradient)"></path>
<path d="M0,140 C50,130 100,100 150,110 C200,120 250,60 300,50 C350,40 400,80 450,70 C500,60 550,20 600,30" fill="none" stroke="#fafafa" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="600" cy="30" fill="#09090b" r="4" stroke="#fafafa" strokeWidth="2"></circle>
</svg>
</div>

<div className="flex justify-between text-[10px] text-zinc-500 mt-2 px-1">
<span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-primary">Bài học gần đây</h3>
<a className="text-xs text-secondary hover:text-primary transition-colors" href="#">Xem tất cả</a>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg border border-border bg-surface/30 hover:bg-surface/60 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
<svg aria-hidden="true" data-icon="lucide:file-text" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div>
<div className="text-sm font-medium text-primary">Lịch sử 12 - Cách mạng T8</div>
<div className="text-xs text-secondary mt-0.5 flex items-center gap-2">
<span>20 câu hỏi</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>15 phút trước</span>
</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-primary">9.5</div>
<div className="text-xs text-emerald-500">Giỏi</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-border bg-surface/30 hover:bg-surface/60 transition-colors group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:text-orange-300 transition-colors">
<svg aria-hidden="true" data-icon="lucide:calculator" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path></g></svg>
</div>
<div>
<div className="text-sm font-medium text-primary">Toán 11 - Đạo hàm</div>
<div className="text-xs text-secondary mt-0.5 flex items-center gap-2">
<span className="text-yellow-500">Đang học dở (45%)</span>
</div>
</div>
</div>
<button className="text-xs px-3 py-1.5 rounded bg-zinc-100 text-background font-medium hover:bg-zinc-200 transition-colors">Tiếp tục</button>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="p-5 rounded-xl border border-border bg-gradient-to-b from-surface to-background relative overflow-hidden group">

<div className="absolute -right-6 -top-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 text-indigo-400 mb-2">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-xs font-semibold uppercase tracking-wider">Spaced Repetition</span>
</div>
<h3 className="text-lg font-medium text-primary mb-1">27 thẻ cần ôn tập</h3>
<p className="text-xs text-secondary mb-4">Các thẻ từ box 1 và 3 đã đến hạn.</p>
<div className="flex gap-1 mb-4">
<div className="h-1.5 flex-1 bg-red-500/80 rounded-l-full"></div> 
<div className="h-1.5 flex-1 bg-orange-500/50"></div> 
<div className="h-1.5 flex-1 bg-yellow-500/80"></div> 
<div className="h-1.5 flex-1 bg-green-500/30"></div>
<div className="h-1.5 flex-1 bg-emerald-500/30 rounded-r-full"></div>
</div>
<button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg shadow-lg shadow-indigo-500/20 transition-all flex items-center justify-center gap-2">
<svg aria-hidden="true" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                    Bắt đầu ôn tập
                                </button>
</div>
</div>

<div className="p-5 rounded-xl border border-border bg-surface/30">
<h3 className="text-sm font-medium text-primary mb-4 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                                Cấu hình học thông minh
                            </h3>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs mb-2">
<span className="text-secondary">Thời gian</span>
<span className="text-primary font-medium">30 phút</span>
</div>
<input className="w-full appearance-none bg-zinc-800 h-1 rounded-full" max="120" min="5" type="range" value="30"/>
</div>
<div className="space-y-2">
<label className="flex items-center justify-between p-2 rounded border border-border hover:bg-surface/50 cursor-pointer transition-colors">
<span className="text-xs text-zinc-300">Trắc nghiệm</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-white border-2 border-zinc-500 appearance-none cursor-pointer top-0.5 left-0.5 checked:left-4 transition-all duration-300 checked:bg-indigo-500 checked:border-indigo-500" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer"></label>
</div>
</label>
<label className="flex items-center justify-between p-2 rounded border border-border hover:bg-surface/50 cursor-pointer transition-colors">
<span className="text-xs text-zinc-300">Tự luận &amp; Bài viết</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-3 h-3 rounded-full bg-white border-2 border-zinc-500 appearance-none cursor-pointer top-0.5 left-0.5 checked:left-4 transition-all duration-300 checked:bg-indigo-500 checked:border-indigo-500" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer"></label>
</div>
</label>
</div>
<div className="pt-2 border-t border-border/50">
<button className="w-full py-2 border border-border hover:bg-surface text-secondary hover:text-primary text-xs font-medium rounded-lg transition-colors">
                                        Tạo phiên học tùy chỉnh
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-border pt-6">
<h3 className="text-sm font-medium text-primary mb-4">Chủ đề cần cải thiện</h3>
<div className="flex flex-wrap gap-3">
<div className="px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-xs text-red-400 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:alert-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
                            Hàm số mũ (45% đúng)
                        </div>
<div className="px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs text-orange-400 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:alert-triangle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Ngữ pháp tiếng Anh - Thì (52% đúng)
                        </div>
<div className="px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-secondary hover:text-primary cursor-pointer transition-colors">
                            + Xem chi tiết Analytics
                        </div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
