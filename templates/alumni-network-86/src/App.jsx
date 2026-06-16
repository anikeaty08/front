import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Noto Sans', 'sans-serif'],
},
colors: {
primary: {
DEFAULT: '#005daa',
50: '#f0f7fc',
100: '#e0eff9',
500: '#0072d1',
600: '#005daa', // Brand Color
700: '#004a88',
800: '#003866',
900: '#002544',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.025em',
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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-[#005daa] text-white flex items-center justify-center rounded font-light tracking-tighter">UK</div>
<span className="font-light text-slate-900 tracking-tight text-lg">UKMAAC</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-[15px] font-light text-slate-600">
<a className="hover:text-[#005daa] transition-colors" href="#benefits">會員權益</a>
<a className="hover:text-[#005daa] transition-colors" href="#events">活動日曆</a>
<a className="hover:text-[#005daa] transition-colors" href="#membership">會員分級</a>
<a className="hover:text-[#005daa] transition-colors" href="#contact">聯絡我們</a>
</div>
<div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-[14px] font-light rounded-md text-white bg-[#005daa] hover:bg-primary-700 transition-colors shadow-sm" href="#apply">
                        立即申請入會
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative bg-[#005daa] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-light mb-8 backdrop-blur-sm">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1.5" width="14"></iconify-icon>
                Official Alumni Network of UK Mortgage Academy
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6 leading-[1.15]">
                畢業只是起點 <br className="hidden sm:block"/>
<span className="text-white/80">把學到的，真正轉化成職涯與能力</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-white/70 font-light leading-relaxed">
                UKMAAC 由 UK Mortgage Academy 創立，專注於倫敦。我們提供職涯支援、實戰案例診斷 (Case Clinic)、高質量人脈網絡及持續專業發展 (CPD)，助你在英國金融按揭領域站穩陣腳。
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-[15px] font-normal rounded-md text-[#005daa] bg-white hover:bg-slate-50 transition-all shadow hover:shadow-lg" href="#apply">
                    立即申請入會
                    <iconify-icon className="ml-2" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-white/30 text-[15px] font-light rounded-md text-white hover:bg-white/10 transition-colors" href="#membership">
                    查看會員分級與權益
                </a>
<a className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-[15px] font-light rounded-md text-white/70 hover:text-white transition-colors" href="#contact">
                    合作／查詢
                </a>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-white/60 text-xs font-light tracking-wide uppercase">
<iconify-icon icon="lucide:alert-circle" strokeWidth="1.5" width="14"></iconify-icon>
<span>CV Required (必交) — 專業審核制</span>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-light text-slate-900 tracking-tight">你是否也有這些疑問？</h2>
<p className="mt-4 text-slate-500 font-light">考獲證書後的現實挑戰，我們懂。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-primary-50 text-[#005daa] rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-[16px] font-normal text-slate-900 mb-2">轉職與簽證難題</h3>
<p className="text-[14px] text-slate-500 leading-relaxed font-light">初到英國或剛轉行，面對移民局與就業市場的雙重壓力，不知從何入手？</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-primary-50 text-[#005daa] rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-[16px] font-normal text-slate-900 mb-2">缺乏導師指引</h3>
<p className="text-[14px] text-slate-500 leading-relaxed font-light">理論考試通過了，但遇到真實客戶時手忙腳亂，身邊沒有資深前輩可以請教？</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-primary-50 text-[#005daa] rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-[16px] font-normal text-slate-900 mb-2">零實戰經驗</h3>
<p className="text-[14px] text-slate-500 leading-relaxed font-light">僱主往往要求經驗，但沒有第一份工作就沒有經驗，陷入死循環？</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-primary-50 text-[#005daa] rounded-lg flex items-center justify-center mb-4">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-[16px] font-normal text-slate-900 mb-2">難以建立客源</h3>
<p className="text-[14px] text-slate-500 leading-relaxed font-light">想成為自僱 Broker，卻不知道如何在英國本地市場建立品牌和信任？</p>
</div>
</div>
<div className="mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center">
<a className="text-[14px] font-light text-slate-600 hover:text-[#005daa] flex items-center justify-center gap-1 px-4 py-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors" href="#benefits">
                    看看 UKMAAC 如何幫到你
                </a>
<a className="text-[14px] font-light text-white bg-[#005daa] hover:bg-primary-700 flex items-center justify-center gap-1 px-4 py-2 rounded-md shadow-sm transition-colors" href="#apply">
                    直接申請入會
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-[#005daa] font-normal tracking-wider uppercase text-xs">Four Pillars</span>
<h2 className="mt-2 text-3xl font-light text-slate-900 tracking-tight">核心支援體系</h2>
<p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light">我們不僅是一個協會，更是你職涯發展的加速器。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#005daa]/30 hover:shadow-lg transition-all duration-300">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-primary-50 text-[#005daa] rounded-xl">
<iconify-icon icon="lucide:compass" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-light text-slate-900 mb-4">Career Support 職涯支援</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>Monthly Career Clinic 職涯診斷</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>獨家行業職缺資源分享</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>資深從業者一對一 Mentorship</span>
</li>
</ul>
<div className="flex gap-4 border-t border-slate-100 pt-6">
<a className="text-xs font-normal text-[#005daa] hover:text-primary-700 flex items-center gap-1" href="#">
                            報名 Career Clinic <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
<a className="text-xs font-normal text-slate-500 hover:text-[#005daa]" href="#">下載求職資源包</a>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#005daa]/30 hover:shadow-lg transition-all duration-300">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-primary-50 text-[#005daa] rounded-xl">
<iconify-icon icon="lucide:file-search" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-light text-slate-900 mb-4">Deal/Case Clinic 實戰案例</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>每週小組 Case Breakdowns</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>複雜案例 (Complex Income) 分析</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>Lender Criteria 深度解讀</span>
</li>
</ul>
<div className="flex gap-4 border-t border-slate-100 pt-6">
<a className="text-xs font-normal text-[#005daa] hover:text-primary-700 flex items-center gap-1" href="#">
                            預約下期 Case Clinic <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
<a className="text-xs font-normal text-slate-500 hover:text-[#005daa]" href="#">查看過往案例庫</a>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#005daa]/30 hover:shadow-lg transition-all duration-300">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-primary-50 text-[#005daa] rounded-xl">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-light text-slate-900 mb-4">London Meetups 線下連結</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>高密度倫敦線下交流會</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>行業合作夥伴 (Solicitors, Agents) 對接</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>Exclusive Alumni Dinners</span>
</li>
</ul>
<div className="flex gap-4 border-t border-slate-100 pt-6">
<a className="text-xs font-normal text-[#005daa] hover:text-primary-700 flex items-center gap-1" href="#events">
                            查看活動日曆 <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
<a className="text-xs font-normal text-slate-500 hover:text-[#005daa]" href="#">瀏覽活動照片</a>
</div>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-[#005daa]/30 hover:shadow-lg transition-all duration-300">
<div className="flex items-start justify-between mb-6">
<div className="p-3 bg-primary-50 text-[#005daa] rounded-xl">
<iconify-icon icon="lucide:book-open" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-light text-slate-900 mb-4">CPD 進階培訓</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>Sales Pipeline 管理模組</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>FCA Compliance 合規更新</span>
</li>
<li className="flex items-start gap-3 text-[15px] font-light text-slate-600">
<iconify-icon className="text-[#005daa] mt-0.5 flex-shrink-0" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>Soft Skills &amp; Negotiation</span>
</li>
</ul>
<div className="flex gap-4 border-t border-slate-100 pt-6">
<a className="text-xs font-normal text-[#005daa] hover:text-primary-700 flex items-center gap-1" href="#">
                            瀏覽 CPD 課程 <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
<a className="text-xs font-normal text-slate-500 hover:text-[#005daa]" href="#">認證要求說明</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#005daa] text-white" id="events">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-light tracking-tight">London Year-1 Rhythm</h2>
<p className="mt-4 text-white/70 font-light">建立穩定、高頻率的學習與社交節奏</p>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-white/20 -translate-y-1/2"></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

<div className="relative bg-white/10 p-8 rounded-xl border border-white/10 z-10 text-center lg:text-left hover:border-white/40 transition-colors backdrop-blur-sm">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#005daa] mb-4 shadow-sm">
<span className="font-bold text-lg">W</span>
</div>
<h3 className="text-xl font-normal mb-2">Weekly Weekly</h3>
<p className="text-white/80 text-sm mb-4 font-light">Case Clinic (Online)</p>
<p className="text-xs text-white/60 leading-relaxed font-light">每週線上聚會，快速過案，解決當下遇到的棘手問題。保持業務敏銳度。</p>
</div>

<div className="relative bg-white/10 p-8 rounded-xl border border-white/10 z-10 text-center lg:text-left hover:border-white/40 transition-colors backdrop-blur-sm">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#005daa] mb-4 shadow-sm">
<span className="font-bold text-lg">M</span>
</div>
<h3 className="text-xl font-normal mb-2">Monthly</h3>
<p className="text-white/80 text-sm mb-4 font-light">London Meetup (Offline)</p>
<p className="text-xs text-white/60 leading-relaxed font-light">倫敦市中心線下交流。認識同行，拓展 Referral 網絡，面對面建立信任。</p>
</div>

<div className="relative bg-white/10 p-8 rounded-xl border border-white/10 z-10 text-center lg:text-left hover:border-white/40 transition-colors backdrop-blur-sm">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#005daa] mb-4 shadow-sm">
<span className="font-bold text-lg">Q</span>
</div>
<h3 className="text-xl font-normal mb-2">Quarterly</h3>
<p className="text-white/80 text-sm mb-4 font-light">Forum / Summit</p>
<p className="text-xs text-white/60 leading-relaxed font-light">季度大型論壇或峰會。邀請行業領袖、Lender 代表分享宏觀市場趨勢。</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-center gap-4">
<button className="px-6 py-2 bg-white hover:bg-slate-100 text-[#005daa] rounded-md text-sm font-normal transition-colors">查看活動日曆</button>
<button className="px-6 py-2 border border-white/30 text-white hover:bg-white/10 rounded-md text-sm font-light transition-colors">訂閱活動通知</button>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="membership">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-light text-slate-900 tracking-tight">Membership Tiers 會員分級</h2>
<p className="mt-4 text-slate-500 font-light">透明的成長階梯，伴隨你的專業之路</p>
<div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-white text-[#005daa] text-xs font-normal rounded-full border border-slate-200">
<iconify-icon icon="lucide:file-warning" width="14"></iconify-icon>
                    所有級別申請均需提交 CV 進行審核
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-stretch">

<div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col hover-lift">
<div className="mb-4">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded">Level 1</span>
<h3 className="text-lg font-normal text-slate-900 mt-2">Student</h3>
<p className="text-xs text-slate-500 mt-1 font-light">在讀學員</p>
</div>
<ul className="space-y-2 mb-6 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 學習資源訪問</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 基礎線上社群</li>
</ul>
<a className="block w-full text-center px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-normal rounded transition-colors" href="#apply">申請 Student</a>
</div>

<div className="bg-white rounded-lg border border-[#005daa] ring-1 ring-[#005daa]/20 p-6 flex flex-col hover-lift relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#005daa]/10 rounded-bl-full -mr-8 -mt-8"></div>
<div className="mb-4">
<span className="px-2 py-1 bg-primary-50 text-[#005daa] text-xs font-bold uppercase rounded">Level 2</span>
<h3 className="text-lg font-normal text-slate-900 mt-2">Graduate</h3>
<p className="text-xs text-slate-500 mt-1 font-light">CeMAP/Cere 合格</p>
</div>
<ul className="space-y-2 mb-6 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 參加 Case Clinic</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 求職/履歷輔導</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 導師配對機會</li>
</ul>
<a className="block w-full text-center px-3 py-2 bg-[#005daa] hover:bg-primary-700 text-white text-xs font-normal rounded transition-colors" href="#apply">申請 Graduate</a>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col hover-lift">
<div className="mb-4">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded">Level 3</span>
<h3 className="text-lg font-normal text-slate-900 mt-2">Professional</h3>
<p className="text-xs text-slate-500 mt-1 font-light">CAS 狀態 / 持牌顧問</p>
</div>
<ul className="space-y-2 mb-6 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 高級 CPD 課程</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 倫敦線下 Meetup</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 案件轉介優先權</li>
</ul>
<a className="block w-full text-center px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-normal rounded transition-colors" href="#apply">申請 Professional</a>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col hover-lift">
<div className="mb-4">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded">Level 4</span>
<h3 className="text-lg font-normal text-slate-900 mt-2">Business</h3>
<p className="text-xs text-slate-500 mt-1 font-light">公司負責人 / Principal</p>
</div>
<ul className="space-y-2 mb-6 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 招聘人才對接</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 品牌曝光機會</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 高層圓桌會議</li>
</ul>
<a className="block w-full text-center px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-normal rounded transition-colors" href="#apply">申請 Business</a>
</div>

<div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col hover-lift">
<div className="mb-4">
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase rounded">Level 5</span>
<h3 className="text-lg font-normal text-slate-900 mt-2">Partner</h3>
<p className="text-xs text-slate-500 mt-1 font-light">機構合作夥伴</p>
</div>
<ul className="space-y-2 mb-6 flex-1">
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 年度戰略合作</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 活動冠名權</li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-light"><iconify-icon className="text-[#005daa]" icon="lucide:check" width="14"></iconify-icon> 獨家研討會</li>
</ul>
<a className="block w-full text-center px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-normal rounded transition-colors" href="#apply">申請 Partner</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-center text-lg font-light text-slate-900 mb-10">Member Journey</h3>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
<div className="px-4 py-2 bg-slate-50 rounded border border-slate-200 text-[14px] font-normal text-slate-600">Student</div>
<iconify-icon className="text-slate-300 rotate-90 md:rotate-0" icon="lucide:arrow-right" width="20"></iconify-icon>
<div className="px-4 py-2 bg-primary-50 rounded border border-[#005daa]/20 text-[14px] font-normal text-[#005daa]">Graduate</div>
<iconify-icon className="text-slate-300 rotate-90 md:rotate-0" icon="lucide:arrow-right" width="20"></iconify-icon>
<div className="px-4 py-2 bg-slate-50 rounded border border-slate-200 text-[14px] font-normal text-slate-600">Professional</div>
<iconify-icon className="text-slate-300 rotate-90 md:rotate-0" icon="lucide:arrow-right" width="20"></iconify-icon>
<div className="px-4 py-2 bg-slate-50 rounded border border-slate-200 text-[14px] font-normal text-slate-600">Business</div>
<iconify-icon className="text-slate-300 rotate-90 md:rotate-0" icon="lucide:arrow-right" width="20"></iconify-icon>
<div className="px-4 py-2 bg-slate-50 rounded border border-slate-200 text-[14px] font-normal text-slate-600">Partner</div>
</div>
<div className="text-center mt-10">
<a className="text-[14px] font-normal text-[#005daa] hover:underline" href="#membership">立即選擇你的會員級別</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="apply">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-light text-slate-900 tracking-tight">Application Process</h2>
<p className="mt-4 text-slate-500 font-light">簡單三步，加入 UKMAAC 大家庭</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-full border border-slate-200 flex items-center justify-center text-xl font-bold text-slate-300 shadow-sm mb-4">1</div>
<h3 className="text-[16px] font-normal text-slate-900 mb-2">填寫表格</h3>
<p className="text-[14px] text-slate-500 font-light">選擇合適的會員級別，填寫基本個人資料。</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-full border border-[#005daa]/30 flex items-center justify-center text-xl font-bold text-[#005daa] shadow-sm mb-4">2</div>
<h3 className="text-[16px] font-normal text-slate-900 mb-2">上傳 CV</h3>
<p className="text-[14px] text-slate-500 font-light">系統要求必填。請確保 CV 展示你的學歷或從業經歷。</p>
</div>

<div className="text-center">
<div className="w-16 h-16 mx-auto bg-white rounded-full border border-slate-200 flex items-center justify-center text-xl font-bold text-slate-300 shadow-sm mb-4">3</div>
<h3 className="text-[16px] font-normal text-slate-900 mb-2">等待審核</h3>
<p className="text-[14px] text-slate-500 font-light">審核團隊將在 48-72 小時內完成資格驗證並通知結果。</p>
</div>
</div>
<div className="mt-16 text-center space-x-4">
<a className="inline-flex items-center px-8 py-3 border border-transparent text-[14px] font-normal rounded-md shadow-sm text-white bg-[#005daa] hover:bg-primary-700 transition-colors" href="#">
                    立即申請入會
                </a>
<a className="inline-flex items-center px-8 py-3 border border-slate-300 text-[14px] font-normal rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors" href="#contact">
                    查詢審核進度
                </a>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-gradient-to-r from-primary-50 to-slate-50 rounded-2xl p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-2xl font-light text-slate-900 mb-2">University Partnership Program</h3>
<p className="text-slate-600 max-w-xl font-light">我們歡迎各大高校金融/房地產相關學系建立合作，為學生提供職業導向的指導與資源。</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="px-5 py-2.5 bg-white border border-slate-200 rounded-md text-[14px] font-normal text-slate-700 hover:text-[#005daa] hover:border-[#005daa] transition-colors shadow-sm" href="#contact">
                        申請成為校園合作夥伴
                    </a>
<a className="px-5 py-2.5 bg-transparent border border-transparent rounded-md text-[14px] font-normal text-[#005daa] hover:bg-primary-50 transition-colors" href="#contact">
                        邀請我們到校講座
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-t border-slate-200">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h4 className="text-[14px] font-normal text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:shield-check"></iconify-icon> Code of Conduct
                    </h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">
                        UKMAAC 成員必須遵守嚴格的職業行為準則。禁止發表誤導性言論，需保持專業形象。任何違反道德規範的行為將導致會籍終止。詳情請參閱 <a className="text-[#005daa] underline" href="#">會員行為守則</a>。
                    </p>
</div>
<div>
<h4 className="text-[14px] font-normal text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="lucide:database"></iconify-icon> Data Consent
                    </h4>
<p className="text-xs text-slate-500 leading-relaxed font-light">
                        我們會嚴格保護您的個人資料。申請即代表您同意我們使用您的資料進行會員資格審核、活動通訊及潛在的職業/客戶匹配 (Opt-in)。查看我們的 <a className="text-[#005daa] underline" href="#">隱私政策</a>。
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-light text-slate-900 mb-10 text-center">常見問題 FAQ</h2>
<div className="space-y-6">
<div className="border-b border-slate-100 pb-6">
<h3 className="text-[16px] font-normal text-slate-900 mb-2">為什麼必須提交 CV？</h3>
<p className="text-[14px] text-slate-500 font-light">為了確保社群的專業性與高質量交流，我們需要驗證每位申請者的背景。這有助於我們為您匹配最合適的導師與資源。</p>
<a className="inline-block mt-2 text-xs font-normal text-[#005daa] hover:underline" href="#apply">準備好 CV 了？立即申請 →</a>
</div>
<div className="border-b border-slate-100 pb-6">
<h3 className="text-[16px] font-normal text-slate-900 mb-2">審核需要多久？</h3>
<p className="text-[14px] text-slate-500 font-light">一般情況下，我們的審核團隊會在收到申請後的 48 至 72 小時內完成審核並通過電子郵件通知結果。</p>
<a className="inline-block mt-2 text-xs font-normal text-[#005daa] hover:underline" href="#contact">查詢進度 →</a>
</div>
<div className="border-b border-slate-100 pb-6">
<h3 className="text-[16px] font-normal text-slate-900 mb-2">非 UKMA 學員可以加入 Graduate 級別嗎？</h3>
<p className="text-[14px] text-slate-500 font-light">目前 Graduate 級別優先開放給 UK Mortgage Academy 的合格畢業生。若您持有 CeMAP 證書但非校友，請聯繫我們進行個別評估。</p>
<a className="inline-block mt-2 text-xs font-normal text-[#005daa] hover:underline" href="#contact">聯絡評估 →</a>
</div>
<div className="pb-6">
<h3 className="text-[16px] font-normal text-slate-900 mb-2">UKMAAC 是否提供財務建議？</h3>
<p className="text-[14px] text-slate-500 font-light">不。UKMAAC 是一個專業校友組織，僅提供教育、職涯發展與交流平台，不提供任何受監管的財務建議 (Financial Advice)。</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-light text-slate-900 tracking-tight mb-6">Contact Us</h2>
<p className="text-slate-500 mb-8 font-light">無論是入會查詢、活動合作還是校園推廣，我們都樂意聆聽。</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400">
<iconify-icon icon="lucide:user-plus" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-[14px] font-normal text-slate-900">Membership / General</h4>
<p className="text-[14px] text-slate-500 font-light">membership@ukmaac.org</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400">
<iconify-icon icon="lucide:calendar" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-[14px] font-normal text-slate-900">Events &amp; Sponsorship</h4>
<p className="text-[14px] text-slate-500 font-light">events@ukmaac.org</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white border border-slate-200 rounded-lg text-slate-400">
<iconify-icon icon="lucide:school" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-[14px] font-normal text-slate-900">University Outreach</h4>
<p className="text-[14px] text-slate-500 font-light">campus@ukmaac.org</p>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-200">
<p className="text-xs text-slate-400 font-light">Working Hours: Mon - Fri, 09:00 - 17:00 (London Time)</p>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-start">
<h3 className="text-xl font-normal text-slate-900 mb-4">快速聯絡</h3>
<p className="text-[14px] text-slate-500 mb-8 font-light">透過 Email 或 WhatsApp 直接與我們的團隊取得聯繫。</p>
<a className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#005daa] text-white rounded-md hover:bg-primary-700 transition-colors mb-3 font-normal" href="mailto:info@ukmaac.org">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
                        Email Us
                    </a>
<a className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-normal" href="#">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                        WhatsApp Us
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="md:flex md:items-center md:justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-[#005daa] text-white flex items-center justify-center rounded text-xs font-normal">UK</div>
<span className="text-slate-900 font-normal text-sm">UKMAAC</span>
</div>
<div className="mt-4 md:mt-0">
<p className="text-center text-xs text-slate-400 font-light">
                        © 2023 UK Mortgage Academy Alumni Chamber. All rights reserved.
                    </p>
</div>
</div>
<div className="mt-8 border-t border-slate-100 pt-8">
<p className="text-xs text-slate-400 text-justify leading-relaxed font-light">
<span className="font-bold text-slate-500">免責聲明 / Disclaimer:</span> The content provided by UKMAAC is for educational and informational purposes only. It does not constitute financial advice, investment advice, or any other type of professional advice. UKMAAC is not authorized or regulated by the Financial Conduct Authority (FCA). Members acting as brokers or advisors are responsible for their own compliance with relevant laws and regulations.
                </p>
</div>
</div>
</footer>

    </>
  );
}
