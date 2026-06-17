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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="splash-screen">
<div className="flex items-center gap-2">
<span className="text-fuchsia-400 font-mono text-xl md:text-3xl">&gt;</span>
<h1 className="splash-logo tracking-tighter uppercase font-mono">TIIIITAPE</h1>
<span className="w-4 md:w-8 h-10 md:h-16 bg-fuchsia-400 animate-pulse"></span>
</div>
</div>

<div className="snap-container relative">

<div className="fixed inset-0 bg-grid opacity-50 pointer-events-none z-0"></div>

<header className="fixed top-0 left-0 right-0 z-40 px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
<div className="text-xl font-semibold tracking-tighter text-slate-900 pointer-events-auto flex items-center gap-2">
<iconify-icon className="text-fuchsia-500" icon="solar:code-square-linear"></iconify-icon>
                TIIIITAPE.
            </div>
<div className="hidden md:flex gap-6 pointer-events-auto bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/50 shadow-sm">
<span className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">About</span>
<span className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Culture</span>
<span className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">Team</span>
<span className="text-xs font-semibold text-fuchsia-600 hover:text-fuchsia-500 transition-colors cursor-pointer flex items-center gap-1">
                    Join us <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</header>

<section className="snap-section">
<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-float-reverse"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white mb-8 shadow-lg font-mono text-xs hover:scale-105 transition-transform cursor-default">
<iconify-icon className="text-fuchsia-400 text-sm" icon="solar:terminal-linear"></iconify-icon>
<span className="text-slate-300">&gt; status: <span className="text-fuchsia-400">generating_superstars...</span></span>
<span className="w-1.5 h-3 bg-fuchsia-400 animate-pulse"></span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight relative inline-block">
                    Làm AI cực cháy.<br/>
<span className="relative">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-orange-500">Tấu hài không phanh.</span>

<iconify-icon className="absolute -top-6 -right-8 text-3xl text-orange-400 animate-pulse" icon="solar:stars-linear"></iconify-icon>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-normal">
                    Không chỉ viết code. Chúng mình "train" những công cụ AI đột phá trong một môi trường... hơi khùng và hoàn toàn không có drama.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

<div className="relative rounded-full ai-border-glow bg-slate-900 p-[1px]">
<button className="relative bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-slate-800 flex items-center gap-2 w-full h-full">
<iconify-icon className="text-lg text-fuchsia-400" icon="solar:magic-stick-3-linear"></iconify-icon>
                            Generate Impact
                        </button>
</div>
<button className="px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-sm text-slate-700 text-sm font-medium border border-slate-200 hover:border-slate-300 hover:bg-white transition-all flex items-center gap-2 shadow-sm">
<iconify-icon className="text-lg" icon="solar:mouse-circle-linear"></iconify-icon>
                        Scroll to render
                    </button>
</div>
</div>
</section>

<section className="snap-section bg-white/50 backdrop-blur-xl border-t border-slate-100">
<div className="max-w-6xl mx-auto px-6 w-full relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Mô hình "Pre-trained" phúc lợi siêu to.</h2>
<p className="text-sm text-slate-500 max-w-xl mx-auto font-mono">/prompt: Cung cấp vũ khí tối tân nhất để anh em tung hoành thị trường Global.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-fuchsia-500/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-4 right-4 text-[10px] font-mono font-semibold text-fuchsia-400 bg-fuchsia-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">v2.0-GEN-AI</div>
<div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<iconify-icon className="text-2xl text-fuchsia-400" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tighter mb-3">Sản phẩm AI đột phá</h3>
<p className="text-sm text-slate-500 leading-relaxed">Phát triển các ứng dụng GenAI, tự động hóa workflow. Không bao giờ phải làm những dự án maintain nhàm chán.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-4 right-4 text-[10px] font-mono font-semibold text-orange-400 bg-orange-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">PRO-TIER</div>
<div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:-rotate-6 transition-transform">
<iconify-icon className="text-2xl text-orange-400" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tighter mb-3">Trang bị tận răng</h3>
<p className="text-sm text-slate-500 leading-relaxed">MacBook Pro M3, màn hình 4K. Tài khoản AI tools (Copilot, ChatGPT Plus, Claude) bao xài không giới hạn.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-4 right-4 text-[10px] font-mono font-semibold text-blue-400 bg-blue-50 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">GLOBAL-SCALE</div>
<div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
<iconify-icon className="text-2xl text-blue-400" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tighter mb-3">Tác động toàn cầu</h3>
<p className="text-sm text-slate-500 leading-relaxed">Sản phẩm code ra sẽ chạy trực tiếp trên máy của hàng triệu user quốc tế. Cảm giác phê chữ ê kéo dài.</p>
</div>
</div>
</div>
</section>

<section className="snap-section bg-slate-950 text-white relative overflow-hidden flex-col justify-center">

<div className="absolute inset-0 flex flex-col justify-center gap-8 opacity-10 pointer-events-none select-none font-mono text-4xl md:text-7xl font-bold whitespace-nowrap overflow-hidden">
<div className="flex animate-marquee text-fuchsia-400">
<span>PROMPT ENGINEERING • 10X DEVELOPER • LLM FINE-TUNING • RAG ARCHITECTURE • CHATGPT • MIDJOURNEY • </span>
<span>PROMPT ENGINEERING • 10X DEVELOPER • LLM FINE-TUNING • RAG ARCHITECTURE • CHATGPT • MIDJOURNEY • </span>
</div>
<div className="flex animate-marquee text-orange-400" style={{animationDirection: 'reverse', animationDuration: '35s'}}>
<span>DEPLOY FRIDAY • FIX BUG 2AM • CỨU EM • CÀ PHÊ ĐEN ĐÁ • TRÀ SỮA FULL TOPPING • NO DRAMA • </span>
<span>DEPLOY FRIDAY • FIX BUG 2AM • CỨU EM • CÀ PHÊ ĐEN ĐÁ • TRÀ SỮA FULL TOPPING • NO DRAMA • </span>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md font-mono text-xs">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-slate-300">system_prompt: vibe_check</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 leading-tight">
                        Văn hóa <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-orange-400">Không Drama</span>.<br/>Chỉ có tiếng cười.
                    </h2>
<p className="text-sm text-slate-400 mb-8 max-w-md font-mono leading-relaxed">
                        &gt; Đánh giá cao output hơn là input thời gian.<br/>
                        &gt; Lỗi thì fix, không đổ lỗi.<br/>
                        &gt; Miễn là xong việc, bạn có thể nằm ườn ra code.
                    </p>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-crosshair">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400/20 to-transparent border border-green-400/20 text-green-400 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-200">Cấm tuyệt đối Drama</h4>
<p className="text-xs text-slate-400">Năng lượng độc hại xin nhường cho chỗ khác.</p>
</div>
</div>
<div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-sm cursor-crosshair">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-transparent border border-yellow-400/20 text-yellow-400 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-200">Giờ giấc linh hoạt</h4>
<p className="text-xs text-slate-400">Cú đêm hay chim sớm? Do bạn lập trình thói quen.</p>
</div>
</div>
</div>
</div>
<div className="flex-1 relative hidden md:block">

<div className="relative w-full aspect-square max-w-md mx-auto">
<div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/30 to-orange-500/30 rounded-full filter blur-[80px] animate-float"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2rem] flex flex-col p-6 shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="font-mono text-xs text-fuchsia-400 mb-2">&gt; run ./fun_script.sh</div>
<div className="font-mono text-xs text-slate-300 mb-1 opacity-50">Loading pizza... [OK]</div>
<div className="font-mono text-xs text-slate-300 mb-1 opacity-50">Starting PS5... [OK]</div>
<div className="font-mono text-xs text-green-400 mt-2">Ready to play! 🎮</div>
<div className="mt-auto text-6xl self-center animate-float">👾</div>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section bg-slate-50">
<div className="max-w-6xl mx-auto px-6 w-full">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 mb-6 shadow-sm font-mono text-xs">
<iconify-icon className="text-fuchsia-500 text-sm" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-slate-600">Model: TwinApe-v1</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Gương mặt vàng được "Render"</h2>
<p className="text-sm text-slate-500 max-w-xl mx-auto">Vẻ đẹp tri thức pha chút ngây ngô. Rê chuột vào để xem Prompt tạo ra từng người.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-slate-200 shadow-sm cursor-crosshair">
<img alt="Team member" className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
<p className="text-fuchsia-400 font-mono text-[10px] mb-2 uppercase">&gt; generative_prompt:</p>
<p className="text-slate-200 font-mono text-xs leading-relaxed">"A cool 10x developer wearing a beanie, smiling, drinks 5 cups of matcha a day, photorealistic, 8k, highly detailed."</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-slate-200 shadow-sm md:translate-y-8 cursor-crosshair">
<img alt="Team member" className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
<p className="text-orange-400 font-mono text-[10px] mb-2 uppercase">&gt; generative_prompt:</p>
<p className="text-slate-200 font-mono text-xs leading-relaxed">"Tech lead looking seriously at a bug, but actually thinking about what to eat for lunch, cinematic lighting."</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-slate-200 shadow-sm cursor-crosshair">
<img alt="Team member" className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
<p className="text-blue-400 font-mono text-[10px] mb-2 uppercase">&gt; generative_prompt:</p>
<p className="text-slate-200 font-mono text-xs leading-relaxed">"Creative designer laughing loudly because they just pushed to production without testing, vibrant colors."</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-slate-200 shadow-sm md:translate-y-8 cursor-crosshair">
<img alt="Team member" className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/80 p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
<p className="text-green-400 font-mono text-[10px] mb-2 uppercase">&gt; generative_prompt:</p>
<p className="text-slate-200 font-mono text-xs leading-relaxed">"Product manager explaining why the feature needs to be done yesterday, confident smile, office background."</p>
</div>
</div>
</div>
</div>
</section>

<section className="snap-section bg-white border-t border-slate-100">
<div className="max-w-2xl mx-auto px-6 w-full text-center relative z-10">
<div className="mb-10">
<div className="w-16 h-16 bg-gradient-to-tr from-fuchsia-500 to-orange-500 text-white rounded-[1.5rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-fuchsia-500/20 animate-float">
<iconify-icon className="text-3xl" icon="solar:smart-home-linear"></iconify-icon>
</div>
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Nhập prompt để gia nhập.</h2>
<p className="text-sm text-slate-500">Quăng link CV/Portfolio hoặc Linkedin của bạn vào đây, hệ thống sẽ xử lý.</p>
</div>

<form className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-orange-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-white p-2 md:p-3 rounded-3xl border border-slate-200 shadow-lg flex items-center gap-3 focus-within:ring-2 focus-within:ring-slate-900 transition-all">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 flex-shrink-0 hidden sm:flex">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<input className="w-full py-3 px-2 bg-transparent text-sm font-mono focus:outline-none placeholder:text-slate-300 text-slate-800" placeholder="Ví dụ: /join email=me@dev.com link=bento.me/superstar" type="text"/>
<button className="w-12 h-12 flex-shrink-0 rounded-2xl bg-slate-900 text-white flex justify-center items-center hover:bg-fuchsia-600 transition-colors shadow-md active:scale-95 group" type="button">
<iconify-icon className="text-xl group-hover:-translate-y-1 transition-transform" icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
<div className="mt-6 flex flex-wrap justify-center gap-2">
<span className="text-[10px] font-mono px-2 py-1 rounded border border-slate-200 text-slate-400 hover:bg-slate-50 cursor-pointer transition-colors">/role frontend</span>
<span className="text-[10px] font-mono px-2 py-1 rounded border border-slate-200 text-slate-400 hover:bg-slate-50 cursor-pointer transition-colors">/role backend</span>
<span className="text-[10px] font-mono px-2 py-1 rounded border border-slate-200 text-slate-400 hover:bg-slate-50 cursor-pointer transition-colors">/role ai_engineer</span>
</div>
</form>
<footer className="mt-16 text-xs text-slate-400 font-mono">
<span className="text-fuchsia-400">#</span> 2024 TIIIITAPE. <span className="opacity-50">System architecture online.</span>
</footer>
</div>
</section>
</div>

    </>
  );
}
