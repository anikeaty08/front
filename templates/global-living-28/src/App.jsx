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



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#006eb9',
text: '#464646',
subtle: '#F2F2F2',
dark: '#1F1F1F'
},
fontFamily: {
sans: ['"Noto Sans JP"', '"Lato"', 'sans-serif'],
},
boxShadow: {
'floating': '0 12px 32px rgba(0,0,0,0.08)',
'medium': '0 6px 18px rgba(0,0,0,0.06)',
},
transitionTimingFunction: {
'custom-ease': 'cubic-bezier(0.22, 1, 0.36, 1)',
}
}
}
}



        // Header Scroll Effect
        const header = document.getElementById('header');
        const logoText = document.getElementById('logo-text');
        const navLinks = document.querySelectorAll('.nav-link');
        const headerBtn = document.getElementById('header-btn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'h-16');
                header.classList.remove('h-20');
                logoText.classList.remove('text-white');
                logoText.classList.add('text-text');
                
                navLinks.forEach(link => {
                    link.classList.remove('text-white/90', 'hover:text-white');
                    link.classList.add('text-text', 'hover:text-primary');
                });
                
                headerBtn.classList.remove('bg-white', 'text-text');
                headerBtn.classList.add('bg-primary', 'text-white');
            } else {
                header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm', 'h-16');
                header.classList.add('h-20');
                logoText.classList.add('text-white');
                logoText.classList.remove('text-text');
                
                navLinks.forEach(link => {
                    link.classList.add('text-white/90', 'hover:text-white');
                    link.classList.remove('text-text', 'hover:text-primary');
                });
                
                headerBtn.classList.add('bg-white', 'text-text');
                headerBtn.classList.remove('bg-primary', 'text-white');
            }
        });

        // Search Tabs Logic
        function switchSearchTab(id) {
            const tabs = document.querySelectorAll('.search-tab');
            tabs.forEach(tab => {
                tab.classList.remove('text-primary', 'border-primary');
                tab.classList.add('text-text/40', 'border-transparent');
                
                if (tab.id === 'tab-' + id) {
                    tab.classList.add('text-primary', 'border-primary');
                    tab.classList.remove('text-text/40', 'border-transparent');
                }
            });
        }

        // Region Tabs Logic
        function switchRegion(region) {
            // Update Buttons
            const buttons = document.querySelectorAll('.region-btn');
            buttons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white', 'shadow-sm');
                btn.classList.add('text-text/40', 'hover:text-text', 'hover:bg-subtle');
                
                if (btn.id === 'btn-' + region) {
                    btn.classList.add('bg-primary', 'text-white', 'shadow-sm');
                    btn.classList.remove('text-text/40', 'hover:text-text', 'hover:bg-subtle');
                }
            });

            // Update Grids
            const grids = document.querySelectorAll('.region-grid');
            grids.forEach(grid => {
                grid.classList.add('hidden');
                if (grid.id === 'grid-' + region) {
                    grid.classList.remove('hidden');
                }
            });
        }
    
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
      

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 h-20 flex items-center" id="header">
<div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-primary rounded-lg shadow-sm group-hover:scale-105 transition-transform duration-300"></div>
<span className="text-xl font-bold tracking-tight text-white transition-colors duration-300" id="logo-text">goodroom</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">お部屋探し</a>
<a className="nav-link text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">ホテル暮らし</a>
<a className="nav-link text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">法人向け</a>
<a className="nav-link text-sm font-semibold text-white/90 hover:text-white transition-colors" href="#">コラム</a>
<button className="bg-white text-text hover:bg-white/90 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm active:scale-95" id="header-btn">
                    お問い合わせ
                </button>
</nav>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="">

<section className="relative min-h-[90vh] flex flex-col justify-center pt-20 overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Modern Living" className="w-full h-full object-cover opacity-60 scale-105 animate-[zoomIn_20s_infinite_alternate]" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="bg-gradient-to-b from-black/50 via-black/10 to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center space-y-12 py-12">
<div className="space-y-8 animate-fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/20 shadow-lg">
<iconify-icon className="text-primary" icon="lucide:globe" strokeWidth="1.5" width="14"></iconify-icon>
<span className="tracking-wide">Global Standard for Living</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight">
                        どこにもない、<br/>
<span className="text-primary">ふつう</span>を暮らそう。
                    </h1>
<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                        世界中どこにいても、あなたらしく。<br className="md:hidden"/>妥協のない「背景」としての住まいを。
                    </p>
</div>

<div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-2 shadow-floating animate-fade-up delay-200">

<div className="flex border-b border-gray-100 px-2 md:px-6 overflow-x-auto no-scrollbar">
<button className="search-tab active flex items-center gap-2 py-4 px-4 text-sm font-semibold text-primary border-b-2 border-primary transition-all whitespace-nowrap" id="tab-area" onclick="switchSearchTab('area')">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon> エリア・駅
                        </button>
<button className="search-tab flex items-center gap-2 py-4 px-4 text-sm font-semibold text-text/40 border-b-2 border-transparent hover:text-text transition-all whitespace-nowrap" id="tab-map" onclick="switchSearchTab('map')">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="16"></iconify-icon> 地図から
                        </button>
<button className="search-tab flex items-center gap-2 py-4 px-4 text-sm font-semibold text-text/40 border-b-2 border-transparent hover:text-text transition-all whitespace-nowrap" id="tab-hotel" onclick="switchSearchTab('hotel')">
<iconify-icon icon="lucide:hotel" strokeWidth="1.5" width="16"></iconify-icon> ホテル・短期
                        </button>
</div>

<div className="p-4 grid md:grid-cols-12 gap-4 items-end">
<div className="md:col-span-5 text-left space-y-1.5">
<label className="text-[10px] font-bold text-text/40 uppercase tracking-wider ml-1">Destination</label>
<div className="relative group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full h-12 pl-11 pr-4 bg-subtle rounded-xl text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all" placeholder="どこに住みますか？" type="text"/>
</div>
</div>
<div className="md:col-span-4 text-left space-y-1.5">
<label className="text-[10px] font-bold text-text/40 uppercase tracking-wider ml-1">Rent</label>
<div className="relative">
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
<select className="w-full h-12 px-4 bg-subtle rounded-xl text-sm font-medium appearance-none focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all cursor-pointer">
<option>上限なし</option>
<option>10万円以下</option>
<option>15万円以下</option>
<option>20万円以下</option>
</select>
</div>
</div>
<div className="md:col-span-3">
<button className="w-full h-12 bg-primary hover:bg-[#005a99] text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
                                検索する
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center space-y-4 animate-fade-up">
<h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">なぜ、goodroomなのか。</h2>
<p className="text-text/60 text-lg max-w-2xl mx-auto">世界中どこにいても変わらない、高い信頼性と心地よい体験を約束します。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="space-y-6 group cursor-default animate-fade-up delay-100">
<div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="space-y-3">
<h3 className="text-xl font-semibold tracking-tight">厳選された住宅</h3>
<p className="text-text/60 leading-relaxed text-sm">素材感と機能性にこだわった、goodroom基準を満たす物件のみをセレクト。</p>
</div>
</div>

<div className="space-y-6 group cursor-default animate-fade-up delay-200">
<div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="space-y-3">
<h3 className="text-xl font-semibold tracking-tight">家具付き・家電完備</h3>
<p className="text-text/60 leading-relaxed text-sm">鞄一つで新生活。高品質なインテリアが整った環境をご提供します。</p>
</div>
</div>

<div className="space-y-6 group cursor-default animate-fade-up delay-300">
<div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="space-y-3">
<h3 className="text-xl font-semibold tracking-tight">オンライン完結</h3>
<p className="text-text/60 leading-relaxed text-sm">内覧から契約までスマホひとつで。世界中どこからでも手続き可能です。</p>
</div>
</div>

<div className="space-y-6 group cursor-default animate-fade-up delay-300">
<div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="space-y-3">
<h3 className="text-xl font-semibold tracking-tight">柔軟な入居期間</h3>
<p className="text-text/60 leading-relaxed text-sm">1ヶ月の短期滞在から長期入居まで、あなたの都合に合わせて選べます。</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-subtle">
<div className="max-w-7xl mx-auto">
<div className="mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">暮らしの体験を具体化する。</h2>
<p className="text-text/60 text-lg max-w-2xl">その土地特有の文化や、あなたの「好き」に合わせた暮らしをご提案。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[3/4] shadow-medium hover:shadow-floating transition-all duration-500">
<img alt="Sauna" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-custom-ease" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 space-y-3 w-full">
<span className="inline-block text-[10px] font-bold text-primary tracking-[0.2em] bg-white px-3 py-1 rounded-full uppercase mb-2">Sauna Life</span>
<h3 className="text-2xl font-bold text-white tracking-tight">整う、暮らし。</h3>
<p className="text-white/70 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">サウナ併設物件で、日常に究極のリラックスを。</p>
</div>
</div>

<div className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[3/4] shadow-medium hover:shadow-floating transition-all duration-500">
<img alt="Work" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-custom-ease" src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 space-y-3 w-full">
<span className="inline-block text-[10px] font-bold text-primary tracking-[0.2em] bg-white px-3 py-1 rounded-full uppercase mb-2">Co-Working</span>
<h3 className="text-2xl font-bold text-white tracking-tight">働く、暮らし。</h3>
<p className="text-white/70 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">充実したワークスペース。オンオフを自由に切り替える。</p>
</div>
</div>

<div className="group cursor-pointer relative rounded-3xl overflow-hidden aspect-[3/4] shadow-medium hover:shadow-floating transition-all duration-500">
<img alt="Community" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-custom-ease" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 space-y-3 w-full">
<span className="inline-block text-[10px] font-bold text-primary tracking-[0.2em] bg-white px-3 py-1 rounded-full uppercase mb-2">Community</span>
<h3 className="text-2xl font-bold text-white tracking-tight">繋がる、暮らし。</h3>
<p className="text-white/70 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">多種多様なバックグラウンドを持つ住人と交流。豊かな関係性。</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1F1F1F]">
<div className="max-w-7xl mx-auto">
<div className="mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">私たちの物語と、住人の声。</h2>
<p className="text-white/60 text-lg max-w-2xl">実際の体験を通じて、goodroomでの暮らしをリアルに感じてください。</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4 group cursor-pointer">
<div className="aspect-video bg-black rounded-2xl overflow-hidden relative border border-white/10 shadow-floating">
<img alt="Video Thumb" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-500 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
<iconify-icon className="text-white ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<h4 className="text-white font-semibold text-lg">TOMOS people vol.12</h4>
<p className="text-white/40 text-sm">フリーランスエンジニア</p>
</div>
</div>

<div className="space-y-4 group cursor-pointer">
<div className="aspect-video bg-black rounded-2xl overflow-hidden relative border border-white/10 shadow-floating">
<img alt="Video Thumb" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-500 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
<iconify-icon className="text-white ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<h4 className="text-white font-semibold text-lg">Hotel Living Experience</h4>
<p className="text-white/40 text-sm">デジタルノマド</p>
</div>
</div>

<div className="space-y-4 group cursor-pointer">
<div className="aspect-video bg-black rounded-2xl overflow-hidden relative border border-white/10 shadow-floating">
<img alt="Video Thumb" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-500 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
<iconify-icon className="text-white ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<h4 className="text-white font-semibold text-lg">グッドルームの哲学</h4>
<p className="text-white/40 text-sm">CEO Interview</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">用途から選ぶ。</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-[32px] border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group cursor-pointer text-center space-y-5">
<div className="w-14 h-14 mx-auto bg-subtle rounded-full flex items-center justify-center text-text/40 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-xl font-bold tracking-tight">Corporate</h3>
<p className="text-sm text-text/60 leading-relaxed">法人様向け社宅・オフィス活用プラン</p>
</div>
<div className="pt-2">
<span className="text-xs font-bold text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1">
                                専用LPを見る <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="p-8 rounded-[32px] border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group cursor-pointer text-center space-y-5">
<div className="w-14 h-14 mx-auto bg-subtle rounded-full flex items-center justify-center text-text/40 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-xl font-bold tracking-tight">Nomad</h3>
<p className="text-sm text-text/60 leading-relaxed">世界を旅するノマドワーカーの拠点探し</p>
</div>
<div className="pt-2">
<span className="text-xs font-bold text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1">
                                専用LPを見る <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>

<div className="p-8 rounded-[32px] border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 group cursor-pointer text-center space-y-5">
<div className="w-14 h-14 mx-auto bg-subtle rounded-full flex items-center justify-center text-text/40 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-xl font-bold tracking-tight">Students</h3>
<p className="text-sm text-text/60 leading-relaxed">安心して学業に専念できる学生専用住宅</p>
</div>
<div className="pt-2">
<span className="text-xs font-bold text-primary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-1">
                                専用LPを見る <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-subtle">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
<div className="space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">世界へ広がる。</h2>
<p className="text-text/60 text-lg max-w-2xl">次はどの国へ住もう？グローバルな拠点からあなたの「次」を見つけよう。</p>
</div>
<div className="flex bg-white p-1.5 rounded-2xl shadow-sm mb-2">
<button className="region-btn active px-8 py-2.5 rounded-xl text-sm font-semibold transition-all bg-primary text-white shadow-sm" id="btn-japan" onclick="switchRegion('japan')">Japan</button>
<button className="region-btn px-8 py-2.5 rounded-xl text-sm font-semibold transition-all text-text/40 hover:text-text hover:bg-subtle" id="btn-asia" onclick="switchRegion('asia')">Asia</button>
<button className="region-btn px-8 py-2.5 rounded-xl text-sm font-semibold transition-all text-text/40 hover:text-text hover:bg-subtle" id="btn-europe" onclick="switchRegion('europe')">Europe</button>
</div>
</div>

<div className="region-grid grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up" id="grid-japan">
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="Tokyo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">Tokyo</h4>
<p className="text-sm text-primary font-bold">¥85,000~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="Osaka" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">Osaka</h4>
<p className="text-sm text-primary font-bold">¥62,000~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="Fukuoka" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">Fukuoka</h4>
<p className="text-sm text-primary font-bold">¥55,000~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>

<div className="flex items-center justify-center aspect-square rounded-3xl border-2 border-dashed border-text/10 hover:border-primary/20 hover:bg-white transition-all cursor-pointer group">
<div className="text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-subtle flex items-center justify-center mx-auto text-text/40 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-xs font-bold text-text/40 uppercase tracking-widest group-hover:text-primary transition-colors">Explore All</p>
</div>
</div>
</div>

<div className="region-grid grid grid-cols-2 md:grid-cols-4 gap-6 hidden animate-fade-up" id="grid-asia">
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="Bangkok" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">Bangkok</h4>
<p className="text-sm text-primary font-bold">$600~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="Singapore" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">Singapore</h4>
<p className="text-sm text-primary font-bold">$2,200~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="Seoul" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">Seoul</h4>
<p className="text-sm text-primary font-bold">$900~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>
<div className="flex items-center justify-center aspect-square rounded-3xl border-2 border-dashed border-text/10 hover:border-primary/20 hover:bg-white transition-all cursor-pointer group">
<div className="text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-subtle flex items-center justify-center mx-auto text-text/40 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-xs font-bold text-text/40 uppercase tracking-widest group-hover:text-primary transition-colors">Explore All</p>
</div>
</div>
</div>

<div className="region-grid grid grid-cols-2 md:grid-cols-4 gap-6 hidden animate-fade-up" id="grid-europe">
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="Paris" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">Paris</h4>
<p className="text-sm text-primary font-bold">€1,200~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>
<div className="group cursor-pointer space-y-4">
<div className="aspect-square rounded-3xl overflow-hidden shadow-medium relative">
<img alt="London" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="px-2">
<h4 className="font-bold text-lg tracking-tight">London</h4>
<p className="text-sm text-primary font-bold">£1,400~ <span className="text-text/40 text-[10px] font-normal tracking-normal ml-1">avg.</span></p>
</div>
</div>
<div className="flex items-center justify-center aspect-square rounded-3xl border-2 border-dashed border-text/10 hover:border-primary/20 hover:bg-white transition-all cursor-pointer group">
<div className="text-center space-y-3">
<div className="w-12 h-12 rounded-full bg-subtle flex items-center justify-center mx-auto text-text/40 group-hover:bg-primary group-hover:text-white transition-all duration-300">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-xs font-bold text-text/40 uppercase tracking-widest group-hover:text-primary transition-colors">Explore All</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-text pt-24 pb-12 px-6 text-white/90">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-primary rounded-md"></div>
<span className="text-lg font-bold tracking-tight text-white">goodroom</span>
</div>
<p className="text-sm text-white/50 leading-relaxed">「どこにもないふつう」を世界中へ。<br/>住まいと暮らしのグローバルプラットフォーム。</p>
<div className="flex gap-4">
<a className="text-white/30 hover:text-primary transition-colors" href="#"><iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="text-white/30 hover:text-primary transition-colors" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon></a>
<a className="text-white/30 hover:text-primary transition-colors" href="#"><iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold mb-6 text-white">Service</h4>
<ul className="space-y-4 text-sm text-white/50 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Find a Room</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hotel Residence</a></li>
<li><a className="hover:text-white transition-colors" href="#">Renovation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shared Office</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-white">Content</h4>
<ul className="space-y-4 text-sm text-white/50 font-medium">
<li><a className="hover:text-white transition-colors" href="#">goodroom journal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Interior Cases</a></li>
<li><a className="hover:text-white transition-colors" href="#">SNS / Video</a></li>
<li><a className="hover:text-white transition-colors" href="#">Newsletter</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-white">Corporate</h4>
<ul className="space-y-4 text-sm text-white/50 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Company Info</a></li>
<li><a className="hover:text-white transition-colors" href="#">Recruit</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press Release</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-medium">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="14"></iconify-icon>
<p>© 2024 goodroom inc. All rights reserved.</p>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
