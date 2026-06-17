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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
orange: '#FF7A1A',
red: '#E52521',
}
},
backgroundImage: {
'ng-gradient': 'linear-gradient(to right, #FF7A1A, #F54E1D, #E52521)',
'grid-pattern': "linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)",
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
'ticker': 'ticker 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' },
},
ticker: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b bg-[#050505]/80 backdrop-blur-md border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<a className="group flex items-center gap-1.5 select-none" href="#">
<span className="font-mono font-bold text-lg tracking-tighter text-white">NEXT<span className="text-[#FF7A1A]">GEN</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="transition-colors hover:text-white" href="#showcase">Showcase</a>
<a className="transition-colors flex items-center gap-1.5 hover:text-white" href="#token"><span className="iconify" data-icon="lucide:coins" data-width="12"></span> Token</a>
<a className="transition-colors hover:text-white" href="#team">Team</a>
<a className="transition-colors hover:text-white" href="#roadmap">Roadmap</a>
</div>
<div className="flex items-center gap-3">
<a className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full border px-4 text-xs font-medium transition-all border-white/10 bg-white/5 text-white hover:bg-white/10" href="#">
<span className="mr-1.5">Kết nối Ví</span>
<span className="iconify text-[#FF7A1A]" data-icon="lucide:wallet" data-width="14"></span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 bg-[size:40px_40px] bg-grid-pattern opacity-[0.1] -z-10"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#FF7A1A] to-[#E52521] opacity-[0.06] blur-[120px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
<div className="reveal animate-float mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] uppercase tracking-wider font-medium text-[#FF7A1A] backdrop-blur-sm border-white/10 bg-white/5">
<span className="flex h-1.5 w-1.5 rounded-full bg-[#FF7A1A] shadow-[0_0_10px_#FF7A1A] animate-pulse"></span>
                We are Building the Unimaginable
            </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.05] text-white">
                NEXTGEN <br/>
<span className="text-neutral-500 font-medium text-4xl md:text-6xl tracking-tight">AI Video Collective</span>
</h1>
<p className="reveal delay-200 max-w-2xl text-lg mb-10 font-light leading-relaxed text-neutral-400">
                Chúng tôi là tập hợp các kỹ sư và nghệ sĩ thị giác, sử dụng AI để phá vỡ giới hạn của điện ảnh kỹ thuật số.
            </p>

<div className="reveal delay-300 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl border-y bg-white/[0.02] py-6 mb-12 backdrop-blur-sm border-white/5">
<div className="text-center border-r last:border-0 border-white/5">
<div className="text-2xl font-mono font-semibold text-white">15M+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Lượt xem Video</div>
</div>
<div className="text-center border-r last:border-0 border-white/5">
<div className="text-2xl font-mono font-semibold text-white">50+</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Dự án Brand</div>
</div>
<div className="text-center border-r last:border-0 border-white/5">
<div className="text-2xl font-mono font-semibold text-white">4</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Mô hình AI riêng</div>
</div>
<div className="text-center">
<div className="text-2xl font-mono font-semibold text-[#FF7A1A]">$3.2M</div>
<div className="text-[10px] uppercase tracking-widest text-neutral-500 mt-1">Market Cap</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#050505] relative" id="showcase">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="reveal text-3xl font-semibold tracking-tight mb-2 text-white">Showcase Thịnh Hành</h2>
<p className="reveal delay-100 text-sm text-neutral-400">Các video AI viral nhất được tạo bởi NextGen Engine.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs text-[#FF7A1A] transition-colors hover:text-white" href="#">
                    Xem tất cả <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(250px,auto)]">

<div className="reveal delay-100 col-span-1 md:col-span-2 row-span-2 group relative overflow-hidden rounded-xl border cursor-pointer border-white/10 bg-neutral-900">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black via-black/40"></div>
<div className="absolute top-4 left-4">
<span className="px-2 py-1 rounded-md bg-[#E52521] text-[10px] font-bold tracking-wider uppercase shadow-lg text-white shadow-red-900/20">Viral Hit</span>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
<div className="w-16 h-16 rounded-full backdrop-blur-md border flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(255,122,26,0.3)] bg-white/10 border-white/20 text-white">
<span className="iconify" data-icon="lucide:play" data-width="24"></span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-2xl font-medium text-white">Project: NEON TOKYO</h3>
<div className="flex items-center text-[#FF7A1A] text-xs gap-1">
<span className="iconify" data-icon="lucide:trending-up" data-width="14"></span> 2.4M Views
                            </div>
</div>
<p className="text-sm max-w-lg line-clamp-2 mb-4 text-neutral-300">
                            Sự kết hợp giữa phong cách Anime thập niên 90 và render 3D hiện thực. Video được tạo hoàn toàn từ text prompt thông qua model NextGen v2.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] border px-2 py-1 rounded border-white/20 bg-white/5 text-neutral-300">#Cyberpunk</span>
<span className="text-[10px] border px-2 py-1 rounded border-white/20 bg-white/5 text-neutral-300">#AIAnimation</span>
</div>
</div>
</div>

<div className="reveal delay-200 col-span-1 row-span-1 group relative overflow-hidden rounded-xl border cursor-pointer border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black"></div>
<div className="absolute bottom-0 left-0 w-full p-5">
<h3 className="text-lg font-medium mb-1 text-white">Liquid Dreams</h3>
<p className="text-xs text-neutral-400">Abstract Fluid Simulation</p>
</div>
<div className="absolute top-3 right-3 backdrop-blur rounded px-2 py-1 text-[10px] font-mono bg-black/50 text-white">0:15</div>
</div>

<div className="reveal delay-300 col-span-1 row-span-1 group relative overflow-hidden rounded-xl border cursor-pointer border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620641788421-7f1c338e61a9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black"></div>
<div className="absolute bottom-0 left-0 w-full p-5">
<h3 className="text-lg font-medium mb-1 text-white">Mech Warrior</h3>
<p className="text-xs text-neutral-400">Concept Art Animation</p>
</div>
<div className="absolute top-3 right-3 backdrop-blur rounded px-2 py-1 text-[10px] font-mono bg-black/50 text-white">0:32</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y bg-[#080808] relative overflow-hidden border-white/5" id="token">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF7A1A]/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="flex items-center gap-2 mb-4">
<span className="w-8 h-8 rounded-full bg-[#FF7A1A] flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
</span>
<span className="text-[#FF7A1A] font-mono font-bold tracking-tight">$NEXT TOKEN</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight text-white">
                        Nhiên liệu cho hệ sinh thái <span className="text-neutral-600">Sáng tạo</span>
</h2>
<p className="text-sm leading-relaxed mb-8 max-w-md text-neutral-400">
                        $NEXT là token tiện ích được sử dụng để thanh toán phí render, truy cập các model AI độc quyền và tham gia quản trị DAO của NextGen.
                    </p>
<div className="space-y-4">
<div className="p-4 rounded-lg border flex items-center justify-between group cursor-pointer hover:border-[#FF7A1A]/50 transition-colors bg-white/5 border-white/10">
<div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Contract Address (ETH)</div>
<div className="font-mono text-xs text-white">0x7a2...3b91 <span className="ml-2 text-neutral-600">(Click to copy)</span></div>
</div>
<span className="iconify group-hover:text-white text-neutral-400" data-icon="lucide:copy" data-width="16"></span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg border bg-neutral-900 border-white/5">
<div className="text-[10px] text-neutral-500 uppercase">Current Price</div>
<div className="text-xl font-mono text-[#FF7A1A] mt-1">$0.42</div>
<div className="text-[10px] text-green-500 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="10"></span> 12.5%
                                </div>
</div>
<div className="p-4 rounded-lg border bg-neutral-900 border-white/5">
<div className="text-[10px] text-neutral-500 uppercase">Holders</div>
<div className="text-xl font-mono mt-1 text-white">4,281</div>
<div className="text-[10px] text-neutral-500 mt-1">Global</div>
</div>
</div>
</div>
<div className="mt-8 flex gap-4">
<button className="px-6 py-2.5 bg-[#FF7A1A] hover:bg-[#E52521] text-xs font-semibold rounded-md transition-colors shadow-[0_0_20px_rgba(255,122,26,0.2)] text-white">
                            Mua $NEXT
                        </button>
<button className="px-6 py-2.5 bg-transparent border text-xs font-semibold rounded-md transition-colors border-white/20 text-white hover:bg-white/5">
                            Whitepaper
                        </button>
</div>
</div>

<div className="reveal delay-200 relative h-[400px] rounded-2xl border p-6 flex flex-col backdrop-blur-sm border-white/10 bg-neutral-900/50">
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium text-white">Biểu đồ tăng trưởng</h3>
<div className="flex gap-2">
<span className="text-[10px] text-[#FF7A1A] bg-[#FF7A1A]/10 px-2 py-0.5 rounded">1D</span>
<span className="text-[10px] text-neutral-500 cursor-pointer px-2 py-0.5 hover:text-white">1W</span>
<span className="text-[10px] text-neutral-500 cursor-pointer px-2 py-0.5 hover:text-white">1M</span>
</div>
</div>

<div className="flex-1 flex items-end justify-between gap-2 px-2 pb-4 border-b relative overflow-hidden border-white/5">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px dashed bg-white/5"></div>
<div className="w-full h-px dashed bg-white/5"></div>
<div className="w-full h-px dashed bg-white/5"></div>
<div className="w-full h-px dashed bg-white/5"></div>
</div>

<div className="w-full bg-[#FF7A1A]/20 rounded-t-sm h-[20%] chart-bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-full bg-[#FF7A1A]/30 rounded-t-sm h-[35%] chart-bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-full bg-[#FF7A1A]/20 rounded-t-sm h-[25%] chart-bar" style={{animationDelay: '0.3s'}}></div>
<div className="w-full bg-[#FF7A1A]/40 rounded-t-sm h-[45%] chart-bar" style={{animationDelay: '0.4s'}}></div>
<div className="w-full bg-[#FF7A1A]/30 rounded-t-sm h-[30%] chart-bar" style={{animationDelay: '0.5s'}}></div>
<div className="w-full bg-[#FF7A1A]/50 rounded-t-sm h-[60%] chart-bar" style={{animationDelay: '0.6s'}}></div>
<div className="w-full bg-[#FF7A1A]/40 rounded-t-sm h-[50%] chart-bar" style={{animationDelay: '0.7s'}}></div>
<div className="w-full bg-gradient-to-t from-[#FF7A1A] to-[#E52521] rounded-t-sm h-[85%] chart-bar shadow-[0_0_15px_#FF7A1A]" style={{animationDelay: '0.8s'}}></div>
</div>
<div className="mt-4 flex justify-between text-[10px] text-neutral-500 font-mono">
<span>09:00</span>
<span>12:00</span>
<span>15:00</span>
<span>18:00</span>
<span>Now</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="reveal text-3xl font-semibold mb-4 text-white">Đội ngũ Kiến tạo</h2>
<p className="reveal delay-100 max-w-xl mx-auto text-neutral-400">
                    Những bộ óc đứng sau sự đột phá của NextGen. Chúng tôi là sự giao thoa giữa nghệ thuật và công nghệ.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal delay-100 group relative p-1 rounded-xl bg-gradient-to-b to-transparent hover:from-[#FF7A1A]/50 transition-all duration-500 from-white/10">
<div className="h-full rounded-[10px] p-6 border relative overflow-hidden bg-neutral-900 border-white/5">
<div className="w-16 h-16 rounded-full mb-4 border flex items-center justify-center text-2xl overflow-hidden relative bg-neutral-800 border-white/10">

<span className="iconify text-neutral-600" data-icon="lucide:user" data-width="32"></span>
</div>
<h3 className="font-medium text-lg text-white">Alex Minh</h3>
<p className="text-[#FF7A1A] text-xs font-mono mb-3">Founder &amp; Lead AI</p>
<p className="text-neutral-500 text-xs leading-relaxed">
                            Cựu kỹ sư AI tại Google Brain. Chuyên gia về Deep Learning và Computer Vision.
                        </p>
<div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<a className="text-neutral-400 hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
<a className="text-neutral-400 hover:text-white" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="14"></span></a>
</div>
</div>
</div>

<div className="reveal delay-200 group relative p-1 rounded-xl bg-gradient-to-b to-transparent hover:from-[#FF7A1A]/50 transition-all duration-500 from-white/10">
<div className="h-full rounded-[10px] p-6 border relative overflow-hidden bg-neutral-900 border-white/5">
<div className="w-16 h-16 rounded-full mb-4 border flex items-center justify-center text-2xl overflow-hidden relative bg-neutral-800 border-white/10">
<span className="iconify text-neutral-600" data-icon="lucide:user" data-width="32"></span>
</div>
<h3 className="font-medium text-lg text-white">Sarah Lan</h3>
<p className="text-[#E52521] text-xs font-mono mb-3">Art Director</p>
<p className="text-neutral-500 text-xs leading-relaxed">
                            10 năm kinh nghiệm VFX cho Hollywood. Định hình phong cách nghệ thuật cho các model.
                        </p>
<div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<a className="text-neutral-400 hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
</div>
</div>
</div>

<div className="reveal delay-300 group relative p-1 rounded-xl bg-gradient-to-b to-transparent hover:from-[#FF7A1A]/50 transition-all duration-500 from-white/10">
<div className="h-full rounded-[10px] p-6 border relative overflow-hidden bg-neutral-900 border-white/5">
<div className="w-16 h-16 rounded-full mb-4 border flex items-center justify-center text-2xl overflow-hidden relative bg-neutral-800 border-white/10">
<span className="iconify text-neutral-600" data-icon="lucide:user" data-width="32"></span>
</div>
<h3 className="font-medium text-lg text-white">David Tran</h3>
<p className="text-blue-500 text-xs font-mono mb-3">Blockchain Lead</p>
<p className="text-neutral-500 text-xs leading-relaxed">
                            Xây dựng kiến trúc tokenomics và tích hợp thanh toán phi tập trung cho $NEXT.
                        </p>
<div className="mt-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
<a className="text-neutral-400 hover:text-white" href="#"><span className="iconify" data-icon="lucide:github" data-width="14"></span></a>
</div>
</div>
</div>

<div className="reveal delay-400 group relative rounded-xl border border-dashed bg-transparent flex flex-col items-center justify-center text-center p-6 hover:border-[#FF7A1A] hover:bg-[#FF7A1A]/5 transition-all cursor-pointer border-white/20">
<div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center group-hover:bg-[#FF7A1A] group-hover:text-white transition-colors bg-white/5">
<span className="iconify" data-icon="lucide:plus" data-width="24"></span>
</div>
<h3 className="font-medium text-sm text-white">Join NextGen</h3>
<p className="text-neutral-500 text-xs mt-2 px-4">Bạn là kỹ sư AI hay nghệ sĩ 3D? Hãy gia nhập chúng tôi.</p>
</div>
</div>
</div>
</section>

<footer className="border-t bg-[#050505] pt-16 pb-8 border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-1.5 select-none mb-4" href="#">
<span className="font-mono font-bold text-lg text-white">NEXT<span className="text-[#FF7A1A]">GEN</span></span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Định hình tương lai của Video Generative AI. <br/> Powered by $NEXT.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Khám phá</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-[#FF7A1A] transition-colors" href="#">Showcase</a></li>
<li><a className="hover:text-[#FF7A1A] transition-colors" href="#">Bảng xếp hạng</a></li>
<li><a className="hover:text-[#FF7A1A] transition-colors" href="#">Studio</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Tokenomics</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-[#FF7A1A] transition-colors" href="#">Mua $NEXT</a></li>
<li><a className="hover:text-[#FF7A1A] transition-colors" href="#">Whitepaper</a></li>
<li><a className="hover:text-[#FF7A1A] transition-colors" href="#">Governance</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 text-white">Cộng đồng</h4>
<div className="flex gap-4">
<a className="text-neutral-500 transition-colors hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-neutral-500 transition-colors hover:text-white" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-neutral-500 transition-colors hover:text-white" href="#"><span className="iconify" data-icon="lucide:discord" data-width="18"></span></a>
<a className="text-neutral-500 transition-colors hover:text-white" href="#"><span className="iconify" data-icon="lucide:send" data-width="18"></span></a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-[10px] text-neutral-600">© 2024 NextGen AI Collective.</p>
<div className="flex gap-6 text-[10px] text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
