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



        // Mouse Tracking
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const x = e.clientX;
                const y = e.clientY;
                document.documentElement.style.setProperty('--mouse-x', x + 'px');
                document.documentElement.style.setProperty('--mouse-y', y + 'px');
            });
        });
        
        // Simulating the playground chat
        function runPlayground() {
            const input = document.getElementById('ai-input');
            const chatBox = document.getElementById('chat-box');
            if(!input || !input.value) return;
            
            // Add user message
            const userMsg = `<div class="flex justify-end mb-4"><div class="bg-white/10 text-white px-4 py-2 rounded-lg rounded-tr-none text-sm">${input.value}</div></div>`;
            chatBox.innerHTML += userMsg;
            const originalVal = input.value;
            input.value = '';
            
            // Show typing
            const typingId = 'typing-' + Date.now();
            chatBox.innerHTML += `<div id="${typingId}" class="flex justify-start mb-4 items-center gap-2"><div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center"><iconify-icon icon="solar:robot-linear" class="text-emerald-400" width="16"></iconify-icon></div><div class="flex gap-1 bg-white/5 px-4 py-3 rounded-lg rounded-tl-none"><div class="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div><div class="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div><div class="w-1.5 h-1.5 bg-slate-500 rounded-full typing-dot"></div></div></div>`;
            chatBox.scrollTop = chatBox.scrollHeight;

            // Simulated response logic
            setTimeout(() => {
                const typingEl = document.getElementById(typingId);
                if(typingEl) typingEl.remove();
                
                let reply = "Hệ thống AI của chúng tôi có thể tự động hóa quy trình đó. Việc tích hợp LLMs với cơ sở dữ liệu nội bộ là thế mạnh cốt lõi của nền tảng.";
                const lowerVal = originalVal.toLowerCase();
                
                if(lowerVal.includes('giá') || lowerVal.includes('chi phí')) {
                    reply = "Chi phí sẽ phụ thuộc vào quy mô và độ phức tạp của bài toán doanh nghiệp. Bạn vui lòng để lại thông tin để chuyên gia của chúng tôi tư vấn chi tiết.";
                } else if(lowerVal.includes('xin chào') || lowerVal.includes('chào')) {
                    reply = "Chào bạn! Tôi luôn sẵn sàng hỗ trợ bạn tìm hiểu về các giải pháp tự động hóa thông minh.";
                } else if(lowerVal.includes('dịch vụ') || lowerVal.includes('giải pháp')) {
                    reply = "Chúng tôi cung cấp giải pháp Giám sát cuộc gọi, Tối ưu bán chéo, Code Review tự động và Xử lý tài liệu bằng AI.";
                }
                
                chatBox.innerHTML += `<div class="flex justify-start mb-4 items-start gap-2"><div class="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1"><iconify-icon icon="solar:magic-stick-3-linear" class="text-emerald-400" width="16"></iconify-icon></div><div class="bg-[#0f0f11] border border-white/10 text-slate-300 px-4 py-2 rounded-lg rounded-tl-none text-sm shadow-lg shadow-emerald-900/5">${reply}</div></div>`;
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1500);
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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-[#020204]">
<div className="tech-grid opacity-20"></div>
<div className="spotlight-bg"></div>
<div className="nebula-container">
<div className="nebula-blob bg-emerald-500/10 w-[500px] h-[500px] top-[-10%] right-[-10%]"></div>
<div className="nebula-blob bg-cyan-500/10 w-[600px] h-[600px] bottom-[10%] left-[-10%] animation-delay-2000"></div>
<div className="nebula-blob bg-purple-500/5 w-[400px] h-[400px] top-[40%] left-[30%]"></div>
</div>
<div className="falling-lines">
<div className="falling-line" style={{left: '15%', animationDuration: '4s', animationDelay: '0s'}}></div>
<div className="falling-line" style={{left: '35%', animationDuration: '6s', animationDelay: '2s'}}></div>
<div className="falling-line" style={{left: '55%', animationDuration: '5s', animationDelay: '1.5s'}}></div>
<div className="falling-line" style={{left: '80%', animationDuration: '7s', animationDelay: '0.5s'}}></div>
</div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent to-transparent via-emerald-500/20"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 border-b bg-[#020204]/80 backdrop-blur-xl border-white/5">
<a className="flex items-center gap-2 cursor-pointer group" href="#" onclick="window.scrollTo(0,0); return false;">
<div className="relative flex items-center justify-center w-9 h-9 transition-transform group-active:scale-95 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg border border-white/10">
<iconify-icon className="text-emerald-400" icon="solar:cpu-linear" width="20"></iconify-icon>
<div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full group-hover:bg-emerald-500/30 transition-all -z-10"></div>
</div>
<div className="flex flex-col">
<span className="text-sm tracking-tight font-semibold text-white leading-none">GENAI PLATFORM</span>
<span className="text-xs tracking-widest text-emerald-400 uppercase font-mono mt-0.5">Enterprise</span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 p-1 rounded-full border backdrop-blur-md bg-white/5 border-white/5">
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-white bg-white/10 hover:bg-white/15" href="#domains">Lĩnh vực</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#solutions">Giải pháp</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#docs">Tài liệu</a>
<a className="px-4 py-1.5 text-xs font-medium rounded-full transition-all text-slate-400 hover:text-white hover:bg-white/5" href="#partners">Hợp tác</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 text-xs font-medium transition-all text-slate-400 hover:text-white active:scale-95">
                Đăng nhập
            </button>
<div className="h-4 w-px hidden lg:block bg-white/10"></div>
<button className="group relative text-xs font-medium bg-[#0a0a0c] border px-5 py-2 rounded-md transition-all overflow-hidden hover:border-emerald-500/50 shadow-[0_0_0_1px_rgba(0,0,0,0)] hover:shadow-[0_0_0_1px_rgba(16,185,129,0.2)] text-white border-white/10 active:scale-95">
<span className="btn-content-slide">
<span className="btn-text-original">Bắt đầu ngay</span>
<span className="btn-text-hover text-emerald-300">Đăng ký →</span>
</span>
</button>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden w-full z-10 pt-32 pb-20 relative items-center" id="home">

<div className="text-center max-w-5xl z-20 mx-auto px-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs font-medium mb-8 animate-fade-in shadow-[0_0_20px_rgba(16,185,129,0.1)] text-emerald-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>Nền tảng AI Thế hệ mới</span>
</div>
<h1 className="md:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tight font-newsreader mb-8">
                GenAI <span className="bg-clip-text text-transparent font-newsreader bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-300">Platform</span>
</h1>
<p className="leading-relaxed text-base max-w-2xl mx-auto mb-10 font-light text-slate-400">
<span className="text-white font-medium">Giải pháp công nghệ AI tối ưu</span> cho doanh nghiệp hiện đại. Tự động hóa, phân tích và tối ưu hóa quy trình làm việc của bạn.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-5">

<div className="btn-glow-border group cursor-pointer w-full md:w-auto">
<button className="relative z-10 w-full md:w-auto block px-8 py-3.5 bg-[#0a0a0c] text-sm font-medium rounded-[5px] transition-all hover:bg-[#121215] active:bg-[#16161a] text-white" onclick="document.getElementById('solutions').scrollIntoView({behavior: 'smooth'})">
<span className="btn-content-slide">
<span className="btn-text-original">Khám phá Giải pháp</span>
<span className="btn-text-hover text-emerald-300">Xem chi tiết</span>
</span>
</button>
</div>

<button className="group flex transition-all md:w-auto text-sm font-medium bg-[#0a0a0b] w-full border-0 rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center hover:text-white text-slate-400 active:scale-95" onclick="document.getElementById('boxchat').scrollIntoView({behavior: 'smooth'})">
<iconify-icon className="text-slate-500 group-hover:text-emerald-400 transition-colors" icon="solar:play-circle-linear" width="16"></iconify-icon>
<span className="border-b border-transparent group-hover:border-slate-500 transition-all">Boxchat GenAI</span>
</button>
</div>
</div>

<div className="dashboard-container w-full max-w-6xl z-20 mx-auto px-4 mt-16 relative">
<div className="dashboard-ui relative w-full rounded-xl border bg-[#0a0a0c] overflow-hidden shadow-2xl border-white/10">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent -translate-y-full animate-[scan_8s_linear_infinite] pointer-events-none z-30"></div>

<div className="h-10 border-b bg-white/[0.02] flex items-center px-4 justify-between select-none border-white/5">
<div className="flex items-center gap-3">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px mx-1 bg-white/10"></div>
<div className="flex items-center gap-2 text-xs px-2 py-0.5 rounded border bg-black/40 border-white/5 text-slate-400">
<iconify-icon icon="solar:git-network-linear" width="10"></iconify-icon>
<span className="font-mono">genai-workflow-manager</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-6">
<div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            HỆ THỐNG TRỰC TUYẾN
                        </div>
</div>
</div>

<div className="flex h-[450px]">

<div className="w-14 md:w-56 border-r bg-white/[0.01] flex flex-col justify-between py-4 border-white/5">
<div className="space-y-1 px-2">
<div className="flex items-center gap-3 px-3 py-2 rounded-md border text-xs cursor-pointer bg-emerald-500/10 border-emerald-500/20 text-emerald-300">
<iconify-icon icon="solar:chart-square-linear" width="14"></iconify-icon>
<span className="hidden md:inline font-medium">Tổng quan</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-300 hover:bg-white/5">
<iconify-icon icon="solar:robot-linear" width="14"></iconify-icon>
<span className="hidden md:inline">Agents Hoạt động</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 rounded-md transition-all text-xs cursor-pointer hover:text-slate-300 hover:bg-white/5">
<iconify-icon icon="solar:database-linear" width="14"></iconify-icon>
<span className="hidden md:inline">Đồng bộ Dữ liệu</span>
</div>
</div>
<div className="px-4 hidden md:block">
<div className="text-xs uppercase tracking-widest mb-2 font-medium text-slate-600">Hiệu suất Xử lý</div>
<div className="w-full h-1 rounded-full overflow-hidden mb-1 bg-white/5">
<div className="bg-emerald-500 w-[92%] h-full rounded-full shadow-[0_0_10px_#10b981]"></div>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Mục tiêu tuần</span>
<span className="text-white">92%</span>
</div>
</div>
</div>

<div className="flex-1 p-6 overflow-hidden flex flex-col gap-6">

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Tác vụ Đã xử lý</div>
<div className="text-xl font-medium font-mono text-white">128,402</div>
<div className="text-xs mt-1 flex items-center gap-1 text-emerald-400">
<iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon> +24%
                                </div>
</div>
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Thời gian Tiết kiệm</div>
<div className="text-xl font-medium font-mono text-white">4,250 giờ</div>
<div className="text-xs mt-1 flex items-center gap-1 text-emerald-400">
<iconify-icon icon="solar:arrow-right-up-linear" width="10"></iconify-icon> +18%
                                </div>
</div>
<div className="p-4 rounded-lg border bg-gradient-to-br from-white/[0.03] to-transparent border-white/5">
<div className="text-xs text-slate-500 uppercase tracking-wide mb-1">Độ chính xác</div>
<div className="text-xl font-medium font-mono text-white">99.8%</div>
<div className="text-xs text-slate-500 mt-1">Hệ thống ổn định</div>
</div>
</div>

<div className="flex-1 rounded-lg border bg-[#050505] p-4 relative overflow-hidden flex items-center justify-center border-white/5">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute left-[20%] top-[40%] bg-[#1c1c1f] border border-white/10 rounded-lg p-3 shadow-xl z-10 w-32">
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
<span className="text-xs text-white font-medium">Nguồn Dữ liệu</span>
</div>
<div className="h-1 w-full bg-emerald-500/20 rounded"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="opacity-30" d="M 220 190 C 300 190, 300 150, 380 150" fill="none" stroke="#64748b" stroke-dasharray="4" strokeWidth="2"></path>
<circle className="animate-ping" cx="300" cy="170" fill="#10b981" r="3"></circle>
</svg>

<div className="absolute left-[45%] top-[30%] bg-[#1c1c1f] border border-emerald-500/30 rounded-lg p-3 shadow-[0_0_20px_rgba(16,185,129,0.1)] z-10 w-36">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-400" icon="solar:cpu-linear" width="16"></iconify-icon>
<span className="text-xs text-white font-medium">GenAI Core</span>
</div>
<div className="text-xs text-slate-500 leading-tight">Phân tích &amp; Xử lý tự động...</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
<path className="opacity-30" d="M 520 150 C 600 150, 600 220, 680 220" fill="none" stroke="#64748b" stroke-dasharray="4" strokeWidth="2"></path>
</svg>

<div className="absolute left-[70%] top-[45%] bg-[#1c1c1f] border border-white/10 rounded-lg p-3 shadow-xl z-10 w-32">
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="solar:database-linear" width="16"></iconify-icon>
<span className="text-xs text-white font-medium">Hệ thống Đích</span>
</div>
<div className="h-1 w-full bg-cyan-500/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="horizon-ring"></div>
</main>

<section className="relative py-32 bg-transparent overflow-hidden border-t border-white/5" id="solutions">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-20 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-serif text-white">
                    Giải pháp toàn diện cho
                    <span className="font-serif text-emerald-400">doanh nghiệp.</span>
</h2>
<p className="text-lg leading-relaxed font-light text-slate-400">
                    Hệ sinh thái GenAI Platform cung cấp các công cụ tối ưu cho đa dạng quy mô, vị trí và lĩnh vực kinh doanh.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="md:col-span-2 row-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-emerald-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)]"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="mb-8">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-emerald-500/5 text-emerald-400 border-emerald-500/10">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Đa dạng Vai trò</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                                Giải quyết các bài toán chuyên biệt, hỗ trợ ra quyết định chiến lược cho ban lãnh đạo và tối ưu hóa hiệu suất cho đội ngũ thực thi.
                            </p>
</div>
<div className="space-y-4 mt-4">
<div>
<div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-medium">Cấp Quản trị (C-Level)</div>
<div className="flex flex-wrap gap-2">
<div className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">CEO</div>
<div className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">COO</div>
<div className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">CTO</div>
<div className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">IT Director</div>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-medium">Đội ngũ Kỹ thuật</div>
<div className="flex flex-wrap gap-2">
<div className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">Developer</div>
<div className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">Data Scientist</div>
<div className="px-3 py-1.5 border border-white/5 rounded bg-white/[0.02] text-xs text-slate-300">IT Team</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-cyan-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-cyan-500/5 text-cyan-400 border-cyan-500/10">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white">Đặc thù Lĩnh vực</h3>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-400">
                            Các mô hình AI được tinh chỉnh (fine-tuned) và tối ưu riêng rẽ cho từng hệ sinh thái ngành nghề.
                        </p>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-sm text-slate-300 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<iconify-icon className="text-cyan-400" icon="solar:wallet-linear"></iconify-icon> Tài chính
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-300 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<iconify-icon className="text-emerald-400" icon="solar:banknote-linear"></iconify-icon> Ngân hàng
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-300 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<iconify-icon className="text-purple-400" icon="solar:global-linear"></iconify-icon> Viễn thông
                            </div>
<div className="flex items-center gap-2 text-sm text-slate-300 p-3 rounded-lg bg-white/[0.02] border border-white/5">
<iconify-icon className="text-pink-400" icon="solar:health-linear"></iconify-icon> Y tế
                            </div>
</div>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-purple-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-purple-400 border-white/10">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Giám sát Cuộc gọi</h3>
</div>
<p className="text-xs leading-relaxed text-slate-400">
                            AI phân tích giọng nói, trích xuất nội dung và đánh giá chất lượng cuộc gọi khách hàng theo thời gian thực.
                        </p>
</div>
</div>

<div className="md:col-span-1 lg:col-span-1 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-pink-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="relative z-10">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-pink-400 border-white/10">
<iconify-icon icon="solar:chart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Tối ưu Bán chéo</h3>
</div>
<p className="text-xs leading-relaxed text-slate-400">
                            Mô hình dự đoán hành vi khách hàng, đề xuất các sản phẩm liên quan nhằm tối đa hóa doanh thu (Cross-sell &amp; Upsell).
                        </p>
</div>
</div>

<div className="md:col-span-3 lg:col-span-2 group relative overflow-hidden rounded-2xl border bg-[#050505]/80 p-8 hover:border-emerald-500/30 transition-colors duration-500 shadow-lg border-white/10 backdrop-blur-sm">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.05),transparent_50%)]"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="p-2 rounded-lg border bg-white/5 text-emerald-400 border-white/10">
<iconify-icon icon="solar:code-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white">Tối ưu Công việc Kỹ thuật</h3>
</div>
<p className="text-sm leading-relaxed text-slate-400 mb-6">
                                Hệ thống hỗ trợ xử lý luồng công việc phức tạp tự động hoàn toàn:
                            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex-1 bg-white/[0.02] border border-white/5 rounded-lg p-4">
<div className="text-emerald-400 mb-2"><iconify-icon icon="solar:bug-minimalistic-linear" width="20"></iconify-icon></div>
<div className="text-sm text-white font-medium mb-1">Code Review Tự động</div>
<div className="text-xs text-slate-500">Phát hiện lỗi, đề xuất cải tiến mã nguồn ngay trên Pull Request.</div>
</div>
<div className="flex-1 bg-white/[0.02] border border-white/5 rounded-lg p-4">
<div className="text-cyan-400 mb-2"><iconify-icon icon="solar:document-add-linear" width="20"></iconify-icon></div>
<div className="text-sm text-white font-medium mb-1">Xử lý Tài liệu Tự động</div>
<div className="text-xs text-slate-500">Trích xuất, phân loại và số hóa hóa đơn, hợp đồng (OCR &amp; NLP).</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent border-t border-white/5" id="boxchat">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 z-10 relative">
<div className="text-center mb-12">
<span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Tương tác trực tiếp</span>
<h2 className="text-3xl font-serif text-white mt-4 mb-4">Boxchat GenAI</h2>
<p className="text-slate-400 font-light">Trải nghiệm thực tế sức mạnh của GenAI Platform. Hãy thử hỏi về "Dịch vụ", "Giá", hoặc "Xin chào".</p>
</div>
<div className="relative rounded-xl border border-white/10 bg-[#08080a] shadow-2xl overflow-hidden max-w-2xl mx-auto">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
</div>
<div className="text-xs text-slate-500">GenAI Assistant</div>
<div className="w-10"></div>
</div>

<div className="h-80 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-black/50 to-black/80 font-mono scroll-smooth" id="chat-box">

<div className="flex justify-start mb-4 items-start gap-2">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
<iconify-icon className="text-emerald-400" icon="solar:robot-linear" width="16"></iconify-icon>
</div>
<div className="bg-[#0f0f11] border border-white/10 text-slate-300 px-4 py-2 rounded-lg rounded-tl-none text-sm shadow-lg shadow-emerald-900/5">
                            Xin chào! Tôi là trợ lý ảo của GenAI Platform. Tôi có thể giúp gì để tối ưu hóa doanh nghiệp của bạn hôm nay?
                        </div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<input className="flex-1 bg-black/50 border border-white/10 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-slate-600" id="ai-input" onkeydown="if(event.key==='Enter') runPlayground()" placeholder="Nhập tin nhắn..." type="text"/>
<button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-md transition-all active:scale-95" onclick="runPlayground()">
<iconify-icon icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-transparent overflow-hidden border-t border-white/5" id="roadmap">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight font-serif mb-4">Lộ trình Triển khai</h2>
<p className="text-slate-400">Từ ý tưởng đến sản phẩm thực tế chỉ trong 4 tuần.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-medium text-white/5 absolute right-4 top-4 group-hover:text-emerald-500/10 transition-colors">01</div>
<div className="w-10 h-10 rounded-full bg-emerald-900/20 flex items-center justify-center mb-4 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Khảo sát</h3>
<p className="text-sm text-slate-500">Phân tích quy trình hiện tại, tìm ra nút thắt và cơ hội tự động hóa có ROI cao nhất.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-medium text-white/5 absolute right-4 top-4 group-hover:text-cyan-500/10 transition-colors">02</div>
<div className="w-10 h-10 rounded-full bg-cyan-900/20 flex items-center justify-center mb-4 text-cyan-400 border border-cyan-500/20">
<iconify-icon icon="solar:code-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Xây dựng</h3>
<p className="text-sm text-slate-500">Phát triển AI Agents, kết nối API và thiết lập hạ tầng bảo mật dành riêng cho doanh nghiệp.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-medium text-white/5 absolute right-4 top-4 group-hover:text-purple-500/10 transition-colors">03</div>
<div className="w-10 h-10 rounded-full bg-purple-900/20 flex items-center justify-center mb-4 text-purple-400 border border-purple-500/20">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Triển khai</h3>
<p className="text-sm text-slate-500">Tích hợp vào hệ thống thực tế, đào tạo nhân sự và kiểm thử chặt chẽ trên môi trường trực tiếp.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative group backdrop-blur-sm">
<div className="text-4xl font-medium text-white/5 absolute right-4 top-4 group-hover:text-orange-500/10 transition-colors">04</div>
<div className="w-10 h-10 rounded-full bg-orange-900/20 flex items-center justify-center mb-4 text-orange-400 border border-orange-500/20">
<iconify-icon icon="solar:chart-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-medium mb-2">Mở rộng</h3>
<p className="text-sm text-slate-500">Giám sát liên tục, báo cáo phân tích hiệu suất và cải tiến mô hình học máy theo thời gian.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-transparent border-t border-white/5 relative">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-2xl font-medium text-white mb-12 text-center">Câu hỏi thường gặp</h2>
<div className="space-y-4">
<details className="group bg-[#0a0a0c]/90 border border-white/5 rounded-lg open:border-emerald-500/20 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-300 group-hover:text-white transition-colors">
<span>Chi phí triển khai AI cho doanh nghiệp là bao nhiêu?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Chi phí phụ thuộc vào độ phức tạp của bài toán. Các tích hợp chatbot cơ bản có mức phí khởi điểm hợp lý, trong khi các hệ thống tự động hóa lõi (Enterprise) cần khảo sát để báo giá chi tiết.
                    </div>
</details>
<details className="group bg-[#0a0a0c]/90 border border-white/5 rounded-lg open:border-emerald-500/20 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-300 group-hover:text-white transition-colors">
<span>GenAI Platform có hỗ trợ đào tạo nhân sự không?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Có. Chúng tôi đồng hành cùng đội ngũ kỹ thuật và người dùng cuối của bạn thông qua các buổi hướng dẫn chi tiết, đảm bảo sự chuyển đổi số diễn ra mượt mà.
                    </div>
</details>
<details className="group bg-[#0a0a0c]/90 border border-white/5 rounded-lg open:border-emerald-500/20 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-slate-300 group-hover:text-white transition-colors">
<span>Hệ thống có thể kết nối với phần mềm quản lý hiện tại không?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-slate-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Hoàn toàn có thể. Nền tảng của chúng tôi cung cấp khả năng tích hợp mạnh mẽ thông qua API/Webhook với ERP, CRM, HRM hoặc các cơ sở dữ liệu nội bộ sẵn có.
                    </div>
</details>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent w-full border-white/5 border-t pt-24 pb-12 relative">
<div className="absolute inset-0 bg-[#020204]/70 -z-10"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0c]/80 backdrop-blur-2xl p-8 md:p-12 overflow-hidden shadow-2xl mb-20">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
<div className="flex flex-col md:flex-row gap-12 justify-between">
<div className="max-w-md">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<span className="text-xl font-medium text-white">GenAI Platform</span>
</div>
<p className="text-sm text-slate-400 mb-8">
                            Nền tảng kiến tạo và triển khai giải pháp AI chuyên biệt, góp phần nâng tầm chuyển đổi số cho doanh nghiệp Việt.
                        </p>
<div className="space-y-4 text-sm text-slate-400">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 text-emerald-500" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-white">Trụ sở chính</p>
<p>Tòa nhà Innovation, Khu Công Nghệ Cao<br/>Quận 9, TP. Hồ Chí Minh, Việt Nam</p>
</div>
</div>
</div>
</div>
<div className="flex-1 max-w-sm">
<form className="space-y-4" onsubmit="event.preventDefault();">
<h3 className="text-white font-medium mb-4">Kết nối với chúng tôi</h3>
<input className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-colors" name="name" placeholder="Họ và tên" required="" type="text"/>
<input className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-colors" name="email" placeholder="Email công việc" required="" type="email"/>
<textarea className="w-full bg-black/40 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:border-emerald-500/50 focus:outline-none transition-colors" name="message" placeholder="Cho chúng tôi biết về bài toán của bạn..." rows="3"></textarea>
<button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-3 rounded-md transition-all active:scale-95" type="submit">Gửi Thông tin</button>
</form>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-6 text-sm text-slate-400 items-center justify-between">
<div>
<a className="hover:text-emerald-400 transition-colors mr-6" href="mailto:contact@genaiplatform.vn">contact@genaiplatform.vn</a>
<a className="hover:text-emerald-400 transition-colors" href="tel:+84123456789">+84 123 456 789</a>
</div>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Chính sách bảo mật</a>
<a className="hover:text-white" href="#">Điều khoản</a>
</div>
</div>
</div>
<div className="text-center text-xs text-slate-600">
                © 2024 GenAI Platform. All rights reserved.
            </div>
</div>
</section>



    </>
  );
}
