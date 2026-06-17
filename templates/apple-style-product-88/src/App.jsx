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
      

<nav className="bg-[#161617]/95 backdrop-blur-md sticky top-0 z-50 w-full border-b border-white/10">
<div className="max-w-5xl mx-auto px-4 h-11 flex items-center justify-between md:justify-center md:space-x-8 text-[#e8e8ed] text-opacity-80">

<button className="md:hidden text-gray-300 hover:text-white transition-colors">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="18"></iconify-icon>
</button>

<a className="hover:text-white transition-colors duration-300" href="#">
<iconify-icon className="-mt-1" icon="lucide:apple" strokeWidth="1.5" width="18"></iconify-icon>
</a>

<div className="hidden md:flex items-center space-x-8 apple-nav-item tracking-wide font-normal">
<a className="hover:text-white transition-colors duration-300" href="#">商店</a>
<a className="hover:text-white transition-colors duration-300" href="#">Mac</a>
<a className="hover:text-white transition-colors duration-300" href="#">iPad</a>
<a className="hover:text-white transition-colors duration-300" href="#">iPhone</a>
<a className="hover:text-white transition-colors duration-300" href="#">Watch</a>
<a className="hover:text-white transition-colors duration-300" href="#">Vision</a>
<a className="hover:text-white transition-colors duration-300" href="#">AirPods</a>
<a className="hover:text-white transition-colors duration-300" href="#">家居</a>
<a className="hover:text-white transition-colors duration-300" href="#">娱乐</a>
<a className="hover:text-white transition-colors duration-300" href="#">配件</a>
<a className="hover:text-white transition-colors duration-300" href="#">支持</a>
</div>

<div className="flex items-center space-x-5 md:absolute md:right-4 lg:right-auto lg:relative">
<a className="hover:text-white transition-colors duration-300" href="#">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="15"></iconify-icon>
</a>
<a className="hover:text-white transition-colors duration-300" href="#">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="15"></iconify-icon>
</a>
</div>
</div>
</nav>

<div className="bg-[#f5f5f7] py-3 text-center px-4">
<p className="text-xs font-normal text-gray-800 tracking-tight">
<span className="font-medium">以旧换新：</span> 用符合条件的 iPhone 以旧换新，最高可享 RMB 6000 折抵优惠。 <a className="text-blue-600 hover:underline group inline-flex items-center" href="#">立即购买 <iconify-icon className="ml-0.5 group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="10"></iconify-icon></a>
</p>
</div>

<section className="md:py-24 overflow-hidden md:h-[92vh] flex flex-col text-white text-center bg-black h-[85vh] pt-16 pb-16 relative items-center justify-start">
<div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center mt-10">
<h2 className="md:text-6xl text-5xl font-semibold tracking-tighter mb-2" style={{}}>iPhone sdada16 Pro</h2>
<p className="text-xl font-normal text-orange-100/90 tracking-tight mb-6 relative md:text-3xl">钛金属。强悍，轻盈，Pro 如其名。</p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2">
<a className="hover:bg-[#0077ed] transition-colors text-base font-medium text-white bg-[#0071e3] rounded-full pt-2 pr-5 pb-2 pl-5" href="#" style={{}}>购买123342423424321212</a>
<a className="text-[#2997ff] hover:underline flex items-center gap-1 text-lg font-normal group" href="#">
                    进一步了解
                    <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-grow w-full mt-12 relative justify-center">
<div className="w-[280px] md:w-[320px] h-full bg-gradient-to-b from-[#444] to-[#111] rounded-t-[50px] border-t-4 border-x-4 border-[#666] shadow-[0_-20px_80px_rgba(255,255,255,0.1)] relative overflow-hidden">

<div className="absolute inset-2 bg-black rounded-t-[44px] overflow-hidden">
<img alt="iPhone Wallpaper" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-20"></div>
</div>
</div>
</section>

<section className="relative bg-[#f5f5f7] text-gray-900 py-16 pt-24 overflow-hidden min-h-[85vh] flex flex-col items-center justify-start text-center border-t border-white">
<div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-2">iPhone 15</h2>
<p className="text-xl md:text-3xl font-normal text-gray-800 tracking-tight mb-6">新摄像头，新设计，新欢喜。</p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-2">
<a className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-5 py-2 rounded-full text-base font-medium transition-colors" href="#">购买</a>
<a className="text-[#0066cc] hover:underline flex items-center gap-1 text-lg font-normal group" href="#">
                    进一步了解
                    <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="mt-14 w-full max-w-4xl px-4">
<img alt="iPhone 15 Colors" className="w-full h-auto object-contain mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</section>

<section className="relative bg-black text-white py-16 pt-24 overflow-hidden min-h-[85vh] flex flex-col items-center justify-end text-center">

<div className="absolute inset-0 z-0">
<img alt="Watch Background" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
</div>
<div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center mb-16">
<div className="flex items-center justify-center gap-3 mb-2">
<iconify-icon className="mb-1" icon="lucide:apple" width="32"></iconify-icon>
<span className="text-4xl md:text-5xl font-semibold tracking-tight">WATCH</span>
</div>
<p className="text-sm font-medium tracking-[0.15em] text-[#d63f3f] uppercase mb-4">Series 9</p>
<p className="text-xl md:text-2xl font-normal text-white tracking-tight mb-8">更智能，更明亮，更强劲。</p>
<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
<a className="bg-white text-black hover:bg-gray-100 px-5 py-2 rounded-full text-base font-medium transition-colors" href="#">购买</a>
<a className="text-white hover:underline flex items-center gap-1 text-lg font-normal group" href="#">
                    进一步了解
                    <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="p-4 bg-white">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1920px] mx-auto">

<div className="group relative bg-white border border-gray-100 h-[600px] md:h-[700px] overflow-hidden flex flex-col items-center justify-end pb-12 text-center bg-[url('https://images.unsplash.com/photo-1625842268584-8f3296236761?q=80&amp;w=1500&amp;auto=format&amp;fit=crop')] bg-cover bg-center">
<div className="absolute inset-0 bg-white/10 md:bg-white/0 md:group-hover:bg-black/5 transition-colors duration-500"></div>
<div className="relative z-10 w-full px-6 mb-auto pt-14">
<div className="flex items-center justify-center gap-2 mb-2 text-black">
<iconify-icon className="-mt-1" icon="lucide:apple" width="28"></iconify-icon>
<span className="text-3xl md:text-4xl font-semibold tracking-tight">Vision Pro</span>
</div>
<p className="text-lg md:text-xl font-normal text-gray-900 mt-2">欢迎来到空间计算时代。</p>
<div className="flex items-center justify-center gap-6 mt-4">
<a className="text-[#0066cc] hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            进一步了解
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
<a className="text-[#0066cc] hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            购买
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative bg-[#fbfbfd] h-[600px] md:h-[700px] overflow-hidden flex flex-col items-center pt-14 text-center">
<div className="relative z-10 w-full px-6">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">MacBook Air</h3>
<p className="text-lg md:text-xl font-normal text-gray-900">大有长进。</p>
<div className="flex items-center justify-center gap-6 mt-4">
<a className="text-[#0066cc] hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            进一步了解
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
<a className="text-[#0066cc] hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            购买
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
</div>
<img alt="MacBook Air" className="mt-8 w-[80%] md:w-[60%] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="relative bg-black text-white h-[600px] md:h-[700px] overflow-hidden flex flex-col items-center pt-14 text-center">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative z-10 w-full px-6">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">iPad Pro</h3>
<p className="text-lg md:text-xl font-normal text-gray-200">登峰造极。</p>
<div className="flex items-center justify-center gap-6 mt-4">
<a className="text-[#2997ff] hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            进一步了解
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
<a className="text-[#2997ff] hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            购买
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative bg-black text-white h-[600px] md:h-[700px] overflow-hidden flex flex-col items-center justify-end pb-12 text-center">
<div className="absolute inset-0">
<img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="relative z-10 w-full px-6 mb-auto pt-14">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">AirPods Pro</h3>
<p className="text-lg md:text-xl font-normal text-gray-300">重塑好声音。</p>
<div className="flex items-center justify-center gap-6 mt-4">
<a className="text-white hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            进一步了解
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
<a className="text-white hover:underline flex items-center gap-1 text-base font-normal group" href="#">
                            购买
                            <iconify-icon className="group-hover:ml-1 transition-all" icon="lucide:chevron-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-6 bg-white overflow-hidden">
<div className="hide-scroll flex space-x-4 overflow-x-auto px-4 md:px-[calc(50vw-400px)] snap-x snap-mandatory pb-8">

<div className="snap-center shrink-0 w-[300px] md:w-[700px] h-[170px] md:h-[400px] relative rounded-none md:rounded-lg overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 flex gap-3 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm">
<span className="flex items-center gap-1">立即观看 <iconify-icon icon="lucide:play-circle" width="14"></iconify-icon></span>
<span className="opacity-60">剧情片 · 2023</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[700px] h-[170px] md:h-[400px] relative rounded-none md:rounded-lg overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 flex gap-3 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm">
<span className="flex items-center gap-1">立即观看 <iconify-icon icon="lucide:play-circle" width="14"></iconify-icon></span>
<span className="opacity-60">科幻 · 2023</span>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[700px] h-[170px] md:h-[400px] relative rounded-none md:rounded-lg overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 flex gap-3 text-white font-medium bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm">
<span className="flex items-center gap-1">立即观看 <iconify-icon icon="lucide:play-circle" width="14"></iconify-icon></span>
<span className="opacity-60">音乐 · 2023</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#f5f5f7] text-[#86868b] text-xs py-10 px-4 md:px-8 border-t border-gray-200">
<div className="max-w-5xl mx-auto">

<div className="mb-6 pb-6 border-b border-[#d2d2d7]">
<p className="mb-2 leading-relaxed">
                    1. 上述所示折抵金额由两个部分组成：Apple 的折抵估价，以及 Apple 提供的额外折抵优惠。
                </p>
<p className="mb-2 leading-relaxed">
                    2. 免费试用期结束后，每月收费 RMB 10。
                </p>
</div>

<div className="hidden md:grid grid-cols-5 gap-4 mb-8">
<div className="flex flex-col gap-2">
<h4 className="font-semibold text-gray-900 mb-1">选购及了解</h4>
<a className="hover:underline" href="#">商店</a>
<a className="hover:underline" href="#">Mac</a>
<a className="hover:underline" href="#">iPad</a>
<a className="hover:underline" href="#">iPhone</a>
<a className="hover:underline" href="#">Watch</a>
<a className="hover:underline" href="#">Vision</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="font-semibold text-gray-900 mb-1">账户</h4>
<a className="hover:underline" href="#">管理你的 Apple ID</a>
<a className="hover:underline" href="#">Apple Store 账户</a>
<a className="hover:underline" href="#">iCloud.com</a>
<div className="h-4"></div>
<h4 className="font-semibold text-gray-900 mb-1">娱乐</h4>
<a className="hover:underline" href="#">Apple One</a>
<a className="hover:underline" href="#">Apple TV+</a>
<a className="hover:underline" href="#">Apple Music</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="font-semibold text-gray-900 mb-1">Apple Store 商店</h4>
<a className="hover:underline" href="#">查找零售店</a>
<a className="hover:underline" href="#">Genius Bar 天才吧</a>
<a className="hover:underline" href="#">Today at Apple</a>
<a className="hover:underline" href="#">Apple 夏令营</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="font-semibold text-gray-900 mb-1">商务应用</h4>
<a className="hover:underline" href="#">Apple 与商务</a>
<a className="hover:underline" href="#">商务选购</a>
<div className="h-4"></div>
<h4 className="font-semibold text-gray-900 mb-1">教育应用</h4>
<a className="hover:underline" href="#">Apple 与教育</a>
<a className="hover:underline" href="#">高校师生选购</a>
</div>
<div className="flex flex-col gap-2">
<h4 className="font-semibold text-gray-900 mb-1">Apple 价值观</h4>
<a className="hover:underline" href="#">辅助功能</a>
<a className="hover:underline" href="#">环境责任</a>
<a className="hover:underline" href="#">隐私</a>
<div className="h-4"></div>
<h4 className="font-semibold text-gray-900 mb-1">关于 Apple</h4>
<a className="hover:underline" href="#">Newsroom</a>
<a className="hover:underline" href="#">Apple 管理层</a>
<a className="hover:underline" href="#">工作机会</a>
</div>
</div>

<div className="md:hidden flex flex-col gap-3 mb-6">
<div className="flex justify-between items-center py-2 border-b border-[#d2d2d7]">
<span className="text-gray-900">选购及了解</span>
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</div>
<div className="flex justify-between items-center py-2 border-b border-[#d2d2d7]">
<span className="text-gray-900">账户</span>
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</div>
<div className="flex justify-between items-center py-2 border-b border-[#d2d2d7]">
<span className="text-gray-900">Apple Store 商店</span>
<iconify-icon icon="lucide:plus" width="12"></iconify-icon>
</div>
</div>
<div className="mb-2">
                更多选购方式：<a className="text-blue-600 hover:underline" href="#">查找你附近的 Apple Store 零售店</a> 及更多门店，或致电 400-666-8800。
            </div>
<div className="pt-4 border-t border-[#d2d2d7] flex flex-col md:flex-row md:items-center justify-between gap-2">
<div className="mb-1 md:mb-0">
                    Copyright © 2024 Apple Inc. 保留所有权利。
                </div>
<div className="flex flex-wrap gap-x-4 gap-y-1">
<a className="hover:underline text-gray-600" href="#">隐私政策</a>
<span className="text-gray-400">|</span>
<a className="hover:underline text-gray-600" href="#">使用条款</a>
<span className="text-gray-400">|</span>
<a className="hover:underline text-gray-600" href="#">销售政策</a>
<span className="text-gray-400">|</span>
<a className="hover:underline text-gray-600" href="#">法律信息</a>
<span className="text-gray-400">|</span>
<a className="hover:underline text-gray-600" href="#">网站地图</a>
</div>
<div className="mt-2 md:mt-0">
                    中国大陆
                </div>
</div>
<div className="mt-2 text-[10px] text-gray-400">
                京ICP备10214630号
            </div>
</div>
</footer>

    </>
  );
}
